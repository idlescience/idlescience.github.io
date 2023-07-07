import { parse } from 'csv-parse';

export type Player = number;

export type vS = {
    S: Player[],
    v: number
};

export interface IGameStructure {
    N: Player[],
    v: vS[],
}

export interface IGame extends IGameStructure {
    fromCsvString: (csvString: string) => IGame
}

export class ParseCsvGameError extends Error {
    constructor(msg: string, line?: number, content?: object) {
        let message = `CSV Bad Format: ${msg}.`;
        if (line) {
            message += ` Affected line: ${line}.`
        }
        if (content) {
            message += ` Affected content: ${content}`
        }
        super(message);
        Object.setPrototypeOf(this, ParseCsvGameError.prototype);
    }
}

class Game implements IGame {
    private _N: Player[] = [];
    private _v: vS[] = [];

    get N() {
        return this._N;
    }

    set N(NQuote: Player[]) {
        this._N = NQuote;
    }

    get v() {
        return this._v;
    }

    set v(vQuote: vS[]) {
        this._v = vQuote;
    }

    constructor();
    constructor(NQuote: Player[], vQuote: vS[]);
    constructor(NQuote?: Player[], vQuote?: vS[]) {
        if (NQuote) {
            this._N = NQuote;
        }
        if (vQuote) {
            this._v = vQuote;
        }
    }


    fromCsvString(csvString: string): IGame {
        parse(csvString.trim(), {
            columns: true
        }, (err, records) => {
            if (err) {
                throw new ParseCsvGameError(err.message);
            }
            const v: vS[] = [];
            const N: Player[] = [];
            const NSet: Set<number> = new Set<number>();
            let line = 1;
            for (const record of records) {
                if ('S' in record && 'v' in record) {
                    const SPlayers: Player[] = record['S'].split(',').map(function (item: string) {
                        try {
                            return parseInt(item.trim(), 10);
                        } catch (error) {
                            throw new ParseCsvGameError('S does not contain any valid player in Integer format.', line, record);
                        }
                    });
                    if (SPlayers.length < 1) {
                        throw new ParseCsvGameError('S does not contain any valid player in Integer format.', line, record);
                    }
                    try {
                        const v: number = parseFloat(record['v'].trim());
                    } catch (error) {
                        throw new ParseCsvGameError('v does not contain a valid value in Float format.', line, record);
                    }
                } else {
                    throw new ParseCsvGameError('S or v column not found.', line, record);
                }
                line++;
            }
        });
        return this;
    }
}

export default Game;