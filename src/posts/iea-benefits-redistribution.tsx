import { useEffect, useState, useCallback } from 'react';

import { CgtLib } from '../wasm/cgt';
// @ts-ignore
import cgt_module from '../wasm/cgt_module';
import Game, { IGame, Payoff, Player, PlayerSet } from '../core/game';
import BitmaskMapper from '../mapper/bitmask-mapper';

type PlayerShare = { [player: Player]: { name: string; alpha: number; c: number; editing: boolean } };

function computePi_i(alpha_i: number, c_i: number, q_i: number, Q: number, a: number, b: number): number {
    return b * alpha_i * (a * Q - Q ** 2 / 2) - (c_i * q_i ** 2) / 2;
}

function computeq_iSignatory(
    player: Player,
    a: number,
    b: number,
    playerShare: PlayerShare,
    signatory: PlayerSet,
    nonSignatory: PlayerSet
) {
    const signatoryArray = Array.from(signatory);
    const nonSignatoryArray = Array.from(nonSignatory);

    let sumThetaNonSignatory = 0;
    for (let j = 0; j < nonSignatoryArray.length; j++) {
        const theta_j = playerShare[nonSignatoryArray[j]].alpha / playerShare[nonSignatoryArray[j]].c;
        sumThetaNonSignatory += theta_j;
    }

    let sumCInverseSignatory = 0;
    let sumAlphasignatory = 0;
    for (let i = 0; i < signatoryArray.length; i++) {
        sumCInverseSignatory += 1 / playerShare[signatoryArray[i]].c;
        sumAlphasignatory += playerShare[signatoryArray[i]].alpha;
    }

    let numerator = a * b * sumAlphasignatory;
    let denominator =
        playerShare[player].c * (1 + b * (sumThetaNonSignatory + sumCInverseSignatory * sumAlphasignatory));

    return numerator / denominator;
}

function computeq_iNash(player: Player, a: number, b: number, playerShare: PlayerShare, N: PlayerSet) {
    const NArray = Array.from(N);

    let sumTheta = 0;
    for (let i = 0; i < NArray.length; i++) {
        const theta_j = playerShare[NArray[i]].alpha / playerShare[NArray[i]].c;
        sumTheta += theta_j;
    }

    let numerator = (a * b * playerShare[player].alpha) / playerShare[player].c;
    let denominator = 1 + b * sumTheta;

    return numerator / denominator;
}

function computeQNash(a: number, b: number, playerShare: PlayerShare, N: PlayerSet) {
    const NArray = Array.from(N);

    let sumTheta = 0;
    for (let i = 0; i < NArray.length; i++) {
        const theta_j = playerShare[NArray[i]].alpha / playerShare[NArray[i]].c;
        sumTheta += theta_j;
    }

    let numerator = a * b * sumTheta;
    let denominator = 1 + b * sumTheta;

    return numerator / denominator;
}

function computeQSignatory(
    a: number,
    b: number,
    playerShare: PlayerShare,
    signatory: PlayerSet,
    nonSignatory: PlayerSet
): number {
    const signatoryArray = Array.from(signatory);
    const nonSignatoryArray = Array.from(nonSignatory);

    let sumThetaNonSignatory = 0;
    for (let j = 0; j < nonSignatoryArray.length; j++) {
        const theta_j = playerShare[nonSignatoryArray[j]].alpha / playerShare[nonSignatoryArray[j]].c;
        sumThetaNonSignatory += theta_j;
    }

    let sumCInverseSignatory = 0;
    let sumAlphaSignatory = 0;
    for (let i = 0; i < signatoryArray.length; i++) {
        sumCInverseSignatory += 1 / playerShare[signatoryArray[i]].c;
        sumAlphaSignatory += playerShare[signatoryArray[i]].alpha;
    }

    let numerator = a * b * (sumThetaNonSignatory + sumCInverseSignatory * sumAlphaSignatory);
    let denominator = 1 + b * (sumThetaNonSignatory + sumCInverseSignatory * sumAlphaSignatory);

    return numerator / denominator;
}

const IEABenefitsRedistribution = () => {
    const [playerShare, setPlayerShare] = useState<PlayerShare>({
        '1': {
            name: 'Australia',
            alpha: 0.09,
            c: 2.3,
            editing: false,
        },
        '2': {
            name: 'Brazil',
            alpha: 0.11,
            c: 0.9,
            editing: false,
        },
        '3': {
            name: 'Canada',
            alpha: 0.07,
            c: 1.5,
            editing: false,
        },
        '4': {
            name: 'China',
            alpha: 0.1,
            c: 1.7,
            editing: false,
        },
        '5': {
            name: 'Germany',
            alpha: 0.08,
            c: 0.6,
            editing: false,
        },
        '6': {
            name: 'India',
            alpha: 0.12,
            c: 0.2,
            editing: false,
        },
        '7': {
            name: 'Japan',
            alpha: 0.09,
            c: 0.4,
            editing: false,
        },
        '8': {
            name: 'Russia',
            alpha: 0.1,
            c: 1.1,
            editing: false,
        },
        '9': {
            name: 'South Africa',
            alpha: 0.12,
            c: 0.2,
            editing: false,
        },
        '10': {
            name: 'Spain',
            alpha: 0.12,
            c: 1.1,
            editing: false,
        },
    });

    const [shapley, setShapley] = useState<Payoff[]>();
    const [cgtLib, setCgtLib] = useState<CgtLib>();

    const solveProblem = useCallback(async () => {
        if (cgtLib) {
            const playerSet = new Set(Object.keys(playerShare));
            const game: IGame = new Game(playerSet);
            const payoffs = game.B.reduce((acc, signatory) => {
                const a = 0.2;
                const b = 0.3;
                let Pi = 0;

                if (signatory.size === 0) {
                    const player = Array.from(signatory)[0];
                    const Q = computeQNash(a, b, playerShare, signatory);
                    const q_i = computeq_iNash(player, a, b, playerShare, signatory);
                    Pi = computePi_i(playerShare[player].alpha, playerShare[player].c, q_i, Q, a, b);
                } else {
                    const nonSignatory = new Set([...playerSet].filter((x) => !signatory.has(x)));
                    const Q = computeQSignatory(a, b, playerShare, signatory, nonSignatory);
                    Pi = Array.from(signatory).reduce((acc: number, player: Player) => {
                        const q_i = computeq_iSignatory(player, a, b, playerShare, signatory, nonSignatory);
                        return acc + computePi_i(playerShare[player].alpha, playerShare[player].c, q_i, Q, a, b);
                    }, 0);
                }

                return {
                    ...acc,
                    [Array.from(signatory).sort().join(',')]: Pi,
                };
            }, {});
            game.payoffs = payoffs;
            const v: number[] = BitmaskMapper.toPayoffVector(game);
            const n_in = game.N.size;
            const v_in = new cgtLib.DoubleVector();
            v.map((x) => v_in.push_back(x));

            const shapleyResult = cgtLib.shapley(v_in, n_in);
            const newShapley: Payoff[] = [];
            for (let i = 0; i < shapleyResult.size(); i++) {
                newShapley.push(shapleyResult.get(i) as Payoff);
            }
            setShapley(newShapley);
        }
    }, [cgtLib, playerShare, setShapley, setPlayerShare]);

    useEffect(() => {
        cgt_module().then((cgtLib: CgtLib) => setCgtLib(cgtLib));
    }, [setCgtLib]);

    useEffect(() => {
        cgt_module().then((cgtLib: CgtLib) => setCgtLib(cgtLib));
        if (typeof (window as any)?.MathJax !== 'undefined') {
            (window as any).MathJax.typeset();
        }
    }, [shapley]);

    useEffect(() => {
        solveProblem();
    }, [solveProblem]);

    return (
        <>
            <div className="main-container">
                <div className="input-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>{'$\\alpha_{i}$'} (Global Benefit Share)</th>
                                <th>{'$c_{i}$'} (Marginal Cost of Emission Reduction)</th>
                                <th>{'$\\phi_{i}$'} (Shapley Profit Share)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(playerShare).map((player, index) => (
                                <tr key={player}>
                                    <td>
                                        <input
                                            type={'text'}
                                            defaultValue={playerShare[player].name}
                                            onChange={(e) => {
                                                setPlayerShare({
                                                    ...playerShare,
                                                    [player]: {
                                                        ...playerShare[player],
                                                        name: e.target.value,
                                                    },
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type={'number'}
                                            defaultValue={playerShare[player].alpha}
                                            onChange={(e) => {
                                                setPlayerShare({
                                                    ...playerShare,
                                                    [player]: {
                                                        ...playerShare[player],
                                                        alpha: Number(e.target.value),
                                                    },
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type={'number'}
                                            defaultValue={playerShare[player].c}
                                            onChange={(e) => {
                                                setPlayerShare({
                                                    ...playerShare,
                                                    [player]: {
                                                        ...playerShare[player],
                                                        c: Number(e.target.value),
                                                    },
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>{shapley && shapley[index].toFixed(9)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default IEABenefitsRedistribution;
