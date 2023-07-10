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
End
`
    public gameObjectiveFunction = (game: IGame, sigma: number): string => {
        let result: string = '';
        let n = game.N.size;

        for (let k = 1; k <= 2 ** (n) - 2; k++) {
            const lambda_k: number = sigma ** (k - 1);
            const lambda_k_plus_one: number = sigma ** (k);
            const lambda_diff = lambda_k - lambda_k_plus_one;
            result += `${(lambda_diff * k).toFixed(k)} t${k} + `;
            for (let i = 1; i <= 2 ** (n) - 2; i++) {
                result += `${lambda_diff.toFixed(k)} d${i}${k} + `;
            }
        }

        return result.replace(/ \+ $/, '');
    }

    public gameConstraints = (game: IGame): string => {
        let result: string = '';
        let n = game.N.size;

        for (let i = 1; i <= 2 ** (n) - 2; i++) {
            for (let k = 1; k <= 2 ** (n) - 2; k++) {
                result += `    c${((2 ** (n) - 2) * (i - 1)) + k}: d${i}${k} >= theta${i} - t${k}\n`;
            }
        }

        for (let i = 1; i <= 2 ** (n) - 2; i++) {
            const coalition = game.B[i - 1];
            const players = Array.from(coalition).sort();
            let playersPayoffSumString = '';
            for (let j = 0; j < players.length; j++) {
                playersPayoffSumString += `x${players[j]} - `;
            }
            playersPayoffSumString = playersPayoffSumString.replace(/ - $/, '');
            const vSi = game.v(coalition);
            result += `    c${((2 ** (n) - 2) ** 2) + i}: theta${i} = ${vSi} - ${playersPayoffSumString}\n`;
        }

        return result.substring(0,  result.lastIndexOf('\n'));
    }

    public fromGame(game: IGame, sigma: number): LP {
        return this._lpTemplate.replace(
            '{{DIRECTION}}', 'Minimize'
        ).replace(
            '{{FUNCTION}}', this.gameObjectiveFunction(game, sigma)
        ).replace(
            '{{CONSTRAINTS}}', this.gameConstraints(game)
        ).replace(
            '{{BOUNDS}}', ''
        );
    }
}

export default Cplex;