import { Decimal } from 'decimal.js';

import { IGame } from '../business/game';

export type LP = string;

export interface ICplex {
    gameObjectiveFunction: (game: IGame, sigma: number) => string;
    gameConstraints: (game: IGame, kMax: number) => string;
    gameBounds: (game: IGame, kMax: number) => string;
    toString: (game: IGame, sigma: number, kMax: number) => LP;
}

class Cplex implements ICplex {
    private _lpTemplate = `{{DIRECTION}}
    obj: {{FUNCTION}}
Subject To
{{CONSTRAINTS}}
Bounds
{{BOUNDS}}
End`;

    public gameObjectiveFunction = (game: IGame, sigma: number | undefined = undefined, kMax: number | undefined = undefined): string => {
        let result: string = '';
        const n = game.N.size;
        kMax = kMax || 2 ** n - 2;
        sigma = sigma || 0.5;

        for (let k = 1; k <= kMax; k++) {
            const sigmaDec = new Decimal(sigma);
            const kDec = new Decimal(k);
            const kMinusOneDec = kDec.minus(1);
            const lambda_k: Decimal = sigmaDec.pow(kMinusOneDec);
            const lambda_k_plus_one: Decimal = k === 2 ** n - 2 ? new Decimal(0) : sigmaDec.pow(kDec);
            const lambda_diff = lambda_k.minus(lambda_k_plus_one);
            result += `${lambda_diff.times(kDec).toFixed()} t${k} + `;
            for (let i = 1; i <= 2 ** n - 2; i++) {
                result += `${lambda_diff.toFixed()} d${i}${k} + `;
            }
        }

        return result.replace(/ \+ $/, '');
    };

    public gameConstraints = (game: IGame, kMax: number | undefined = undefined): string => {
        let result: string = '';
        const n = game.N.size;
        kMax = kMax || 2 ** n - 2;
        let l = 1;
        for (let i = 1; i <= 2 ** n - 2; i++) {
            for (let k = 1; k <= kMax; k++) {
                result += `    c${l++}: d${i}${k} - theta${i} + t${k} >= 0\n`;
            }
        }

        for (let i = 1; i <= 2 ** n - 2; i++) {
            const coalition = game.B[i - 1];
            const players = Array.from(coalition).sort();
            let playersPayoffSumString = '';
            for (let j = 0; j < players.length; j++) {
                playersPayoffSumString += `x${players[j]} - `;
            }
            playersPayoffSumString = playersPayoffSumString.replace(/ - $/, '');
            const vSi = game.v(coalition);
            result += `    c${l++}: theta${i} = ${vSi} - ${playersPayoffSumString}\n`;
        }

        result += `    c${l}: `;
        for (let i = 1; i <= n; i++) {
            result += `x${i} + `;
        }
        result = result.replace(/ \+ $/, '');
        result += ` - ${game.v(game.N)} = 0`;

        return result;
    };

    public gameBounds = (game: IGame, kMax: number | undefined = undefined): string => {
        let result: string = '';
        const n = game.N.size;
        kMax = kMax || 2 ** n - 2;

        for (let i = 1; i <= 2 ** n - 2; i++) {
            for (let k = 1; k <= kMax; k++) {
                result += `    d${i}${k} >= 0\n`;
            }
        }

        return result.substring(0, result.lastIndexOf('\n'));
    };

    public toString(game: IGame, sigma: number | undefined = undefined, kMax: number | undefined = undefined): LP {
        return this._lpTemplate
            .replace('{{DIRECTION}}', 'Minimize')
            .replace('{{FUNCTION}}', this.gameObjectiveFunction(game, sigma, kMax))
            .replace('{{CONSTRAINTS}}', this.gameConstraints(game, kMax))
            .replace('{{BOUNDS}}', this.gameBounds(game, kMax));
    }
}

export default Cplex;
