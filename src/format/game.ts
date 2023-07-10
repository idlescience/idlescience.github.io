import { parse } from 'csv-parse';

export type Player = number | string;

export type PlayerSet = Set<Player>;

export type Payoff = number;

export type CoalitionPayoff = [PlayerSet, Payoff];

export type GamePayoffs = { [k: string]: Payoff };

export type CharacteristicFunction = (S: PlayerSet) => Payoff;

export interface IGameStructure {
    N: PlayerSet,
    B: PlayerSet[],
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
    protected _B: PlayerSet[] = [];
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

    get B() {
        const fn = (active: Player[], remaining: Player[], result: PlayerSet[]) => {
            if (!active.length && !remaining.length)
                return;
            if (!remaining.length) {
                result.push(new Set(active));
            } else {
                fn([...active, remaining[0]], remaining.slice(1), result);
                fn(active, remaining.slice(1), result);
            }
            return result;
        }
        let result = fn([], Array.from(this._N), []) ?? [];
        result = result.sort((a: PlayerSet, b: PlayerSet) => a.size - b.size);
        return result;
    }

    set B(BQuote: PlayerSet[]) {
        this._B = BQuote;
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
                const trimmedItem = item.trim();
                if (trimmedItem.length === 0) {
                    throw new ParseCsvGameError('coalition column does not contain any valid player.', line, record);
                }
                return trimmedItem;
            }));
            payoff = parseFloat(record['payoff'].trim());
            if (Number.isNaN(payoff)) {
                throw new ParseCsvGameError('payoff does not contain a valid value in float format.', line, record);
            }
        } else {
            throw new ParseCsvGameError('coalition or payoff column not found.', line, record);
        }
        return [coalition, payoff];
    }

    public async fromCsvString(csvString: string): Promise<IGame> {
        return new Promise<IGame>((resolve, reject) => {
            parse(csvString.trim(), {
                delimiter: ';',
                columns: true
            }, (error, records) => {
                if (error) {
                    reject(new ParseCsvGameError(error.message));
                }
                if (!records || records.length <= 0) {
                    reject(new ParseCsvGameError('invalid number of lines. There thould be at least 2 lines: header and grand coalition payoff'));
                }
                let line = 1;
                try {
                    for (const record of records) {
                        const [coalition, payoff] = this.parseCsvRecord(record, line);
                        coalition.forEach((value) => this._N.add(value));
                        const coalitionKey = Array.from(coalition).sort().join(',');
                        this._payoffs[coalitionKey] = payoff;
                        line++;
                    }
                    resolve(this);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}

export default Game;