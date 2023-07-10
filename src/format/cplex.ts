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
            result += `${lambda_diff * k} t${k} + `;
            for (let i = 0; i < 2 ** (n) - 2; i++) {
                result += `${lambda_diff} d${i}${k} + `;
            }
            result = result.replace(/ + $/, '');
        }

        return result;
    }

    public fromGame(game: IGame, sigma: number): LP {
        let objectiveFunction: string = this.gameObjectiveFunction(game, sigma);

        return this._lpTemplate.replace('{{FUNCTION}}', objectiveFunction);
    }
}

export default Cplex;