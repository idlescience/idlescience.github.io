import { parse } from 'csv-parse';

export type Player = number;

export type PlayerSet = Set<Player>;

export type Payoff = number;

export type CoalitionPayoff = [PlayerSet, Payoff];

export type GamePayoffs = { [k: string]: Payoff };

export type CharacteristicFunction = (S: PlayerSet) => Payoff;

export interface IGameStructure {
    N: PlayerSet,
    v: CharacteristicFunction,
    payoffs: GamePayoffs,
}

export interface IGame extends IGameStructure {
    fromCsvString: (csvString: string) => Promise<IGame>
}

export class ParseCsvGameError extends Error {
    constructor(msg: string, line?: number, content?: object) {
        let message = `CSV Bad Format: ${msg}.`;
        if (line) {
            message += ` Affected line: ${line}.`
        }
        if (content) {
            message += ` Affected content: ${JSON.stringify(content)}.`
        }
        super(message);
        Object.setPrototypeOf(this, ParseCsvGameError.prototype);
    }
}

class Game implements IGame {
    protected _N: PlayerSet = new Set<Player>();
    protected _payoffs: GamePayoffs = {};

    protected readonly _v: CharacteristicFunction = (S: PlayerSet): Payoff => {
        const SString = Array.from(S).sort().join(',');
        return this._payoffs[SString];
    };

    get N() {
        return this._N;
    }

    set N(NQuote: PlayerSet) {
        this._N = NQuote;
    }

    get payoffs(): GamePayoffs {
        return this._payoffs;
    }

    set payoffs(payofssQuote: GamePayoffs) {
        this._payoffs = payofssQuote;
    }

    get v(): CharacteristicFunction {
        return this._v;
    }

    constructor();
    constructor(NQuote: PlayerSet, payoffsQuote: GamePayoffs);
    constructor(NQuote?: PlayerSet, payoffsQuote?: GamePayoffs) {
        if (NQuote) {
            this._N = NQuote;
        }
        if (payoffsQuote) {
            this._payoffs = payoffsQuote;
        }
    }

    protected parseCsvRecord(record: any, line: number): CoalitionPayoff {
        let coalition: PlayerSet;
        let payoff: Payoff;
        if ('coalition' in record && 'payoff' in record) {
            coalition = new Set<Player>(record['coalition'].split(',').map(function (item: string) {
                try {
                    return parseInt(item.trim(), 10);
                } catch (error) {
                    throw new ParseCsvGameError('coalition column does not contain any valid player in Integer format.', line, record);
                }
            }));
            if (coalition.size < 1) {
                throw new ParseCsvGameError('coalition columns does not contain any valid player in Integer format.', line, record);
            }
            try {
                payoff = parseFloat(record['payoff'].trim());
            } catch (error) {
                throw new ParseCsvGameError('payoff does not contain a valid value in Float format.', line, record);
            }
        } else {
            throw new ParseCsvGameError('coalition or payoff column not found.', line, record);
        }
        return [coalition, payoff];
    }

    public async fromCsvString(csvString: string): Promise<IGame> {
        const result = new Promise<IGame>((resolve) => {
            parse(csvString.trim(), {
                delimiter: ';',
                columns: true
            }, (err, records) => {
                if (err) {
                    throw new ParseCsvGameError(err.message);
                }
                let line = 1;
                for (const record of records) {
                    const [coalition, payoff] = this.parseCsvRecord(record, line);
                    coalition.forEach((value) => this._N.add(value));
                    const coalitionKey = Array.from(coalition).sort().join(',');
                    this._payoffs[coalitionKey] = payoff;
                    line++;
                }
                resolve(this);
            });
        });
        return result;
    }
}

export default Game;