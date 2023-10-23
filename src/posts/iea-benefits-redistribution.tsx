import { useEffect, useState, useCallback } from 'react';

import { CgtLib } from '../wasm/cgt';
// @ts-ignore
import cgt_module from '../wasm/cgt_module';
import CsvMapper from '../mapper/csv-mapper';
import { IGame, Payoff } from '../core/game';
import BitmaskMapper from '../mapper/bitmask-mapper';

const IEABenefitsRedistribution = () => {
    const [csv, setCsv] = useState<string>(`coalition;payoff
1;2
2;5
3;4
1,2;14
1,3;18
2,3;9
1,2,3;24`);
    const [game, setGame] = useState<IGame>();
    const [nucleolus, setNucleolus] = useState<Payoff[]>();
    const [shapley, setShapley] = useState<Payoff[]>();
    const [cgtLib, setCgtLib] = useState<CgtLib>();

    const solveProblem = useCallback(async () => {
        if (cgtLib && csv && csv.length > 0) {
            const game: IGame = await CsvMapper.fromCsvString(csv);
            setGame(game);
            const v: number[] = BitmaskMapper.toPayoffVector(game);
            const n_in = game.N.size;
            const v_in = new cgtLib.DoubleVector();
            v.map((x) => v_in.push_back(x));

            const nucleolusResult = cgtLib.nucleolus(v_in, n_in);
            const newNucleolus: Payoff[] = [];
            for (let i = 0; i < nucleolusResult.size(); i++) {
                newNucleolus.push(nucleolusResult.get(i) as Payoff);
            }
            setNucleolus(newNucleolus);

            console.log('v', v);

            const shapleyResult = cgtLib.shapley(v_in, n_in);
            const newShapley: Payoff[] = [];
            for (let i = 0; i < shapleyResult.size(); i++) {
                newShapley.push(shapleyResult.get(i) as Payoff);
            }
            setShapley(newShapley);
        }
    }, [cgtLib, csv, setNucleolus, setShapley, setGame]);

    useEffect(() => {
        cgt_module().then((cgtLib: CgtLib) => setCgtLib(cgtLib));
    }, [setCgtLib]);

    return (
        <>
            <div className="main-container">
                <div className="input-container">
                    <div className="title-container">
                        <h3>CSV input</h3>
                    </div>
                    <textarea
                        onChange={(event) => {
                            setCsv(event.target.value);
                        }}
                        rows={9}
                        defaultValue={csv}
                    ></textarea>
                    <div className="button-container">
                        <button type="button" className="button" onClick={solveProblem}>
                            Solve
                        </button>
                    </div>
                </div>
                {game && nucleolus && shapley && (
                    <div className="output-container">
                        <div className="title-container">
                            <h3>Cooperative Game Solution</h3>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Shapley</th>
                                    <th>Nucleolus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nucleolus.map((nucleolusPayoff: Payoff, index: number) => (
                                    <tr key={index}>
                                        <td>{Array.from(game?.N)[index]}</td>
                                        <td>{shapley[index].toFixed(2)}</td>
                                        <td>{nucleolusPayoff.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default IEABenefitsRedistribution;
