import { IGame } from './game';

export type LP = string;

export interface ICplex {
    fromGame: (game: IGame, sigma: number) => LP;
    gameObjectiveFunction: (game: IGame, sigma: number) => string;
}

class Cplex implements ICplex {
    private _lpTemplate = `{{DIRECTION}}
    obj: {{FUNCTION}}
Subject To
{{CONSTRAINTS}}
Bounds
{{BOUNDS}}
End`;

    public gameObjectiveFunction = (game: IGame, sigma: number, kMax: number | undefined = undefined): string => {
        let result: string = '';
        const n = game.N.size;
        kMax = kMax || 2 ** n - 2;

        for (let k = 1; k <= kMax; k++) {
            const lambda_k: number = sigma ** (k - 1);
            const lambda_k_plus_one: number = sigma ** k;
            const lambda_diff = lambda_k - lambda_k_plus_one;
            result += `${(lambda_diff * k).toFixed(k)} t${k} + `;
            for (let i = 1; i <= 2 ** n - 2; i++) {
                result += `${lambda_diff.toFixed(k)} d${i}${k} + `;
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
            const coalition = game.B[i - 1];
            const players = Array.from(coalition).sort();
            let playersPayoffSumString = '';
            for (let j = 0; j < players.length; j++) {
                playersPayoffSumString += `x${players[j]} - `;
            }
            playersPayoffSumString = playersPayoffSumString.replace(/ - $/, '');
            const vSi = game.v(coalition);
            const theta_i = `${vSi} - ${playersPayoffSumString}`;
            for (let k = 1; k <= kMax; k++) {
                result += `    c${l++}: d${i}${k} - ${theta_i} + t${k} >= 0\n`;
            }
        }

        result += `    c${l}: `;
        for (let i = 1; i <= n; i++) {
            result += `x${i} + `;
        }
        result = result.replace(/ \+ $/, '');
        result += ` = ${game.v(game.N)}`;

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

    public fromGame(game: IGame, sigma: number, kMax: number | undefined = undefined): LP {
        return this._lpTemplate
            .replace('{{DIRECTION}}', 'Minimize')
            .replace('{{FUNCTION}}', this.gameObjectiveFunction(game, sigma, kMax))
            .replace('{{CONSTRAINTS}}', this.gameConstraints(game, kMax))
            .replace('{{BOUNDS}}', this.gameBounds(game, kMax));
    }
}

export default Cplex;
