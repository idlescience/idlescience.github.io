import { Decimal } from 'decimal.js';

import { IGame } from '../core/game';

export type LP = string;

class CplexMapper {
    private static _lpTemplate = `{{DIRECTION}}
    obj: {{FUNCTION}}
Subject To
{{CONSTRAINTS}}
Bounds
{{BOUNDS}}
End`;

    public static gameObjectiveFunction = (game: IGame, sigma: number | undefined = undefined, kMax: number | undefined = undefined): string => {
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

    public static gameConstraints = (game: IGame, kMax: number | undefined = undefined): string => {
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

    public static gameBounds = (game: IGame, kMax: number | undefined = undefined): string => {
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

    public static toCplexLP(game: IGame, sigma: number | undefined = undefined, kMax: number | undefined = undefined): LP {
        return CplexMapper._lpTemplate
            .replace('{{DIRECTION}}', 'Minimize')
            .replace('{{FUNCTION}}', CplexMapper.gameObjectiveFunction(game, sigma, kMax))
            .replace('{{CONSTRAINTS}}', CplexMapper.gameConstraints(game, kMax))
            .replace('{{BOUNDS}}', CplexMapper.gameBounds(game, kMax));
    }
}

export default CplexMapper;
