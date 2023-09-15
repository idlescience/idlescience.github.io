import { parse } from 'csv-parse';

import Game, { IGame, Player, PlayerSet, Payoff, CoalitionPayoff, GamePayoffs } from '../core/game';

export class ParseCsvGameError extends Error {
    constructor(msg: string, line?: number, content?: object) {
        let message = `CSV Bad Format: ${msg}.`;
        if (line) {
            message += ` Affected line: ${line}.`;
        }
        if (content) {
            message += ` Affected content: ${JSON.stringify(content)}.`;
        }
        super(message);
        Object.setPrototypeOf(this, ParseCsvGameError.prototype);
    }
}

class CsvMapper {
    public static parseCsvRecord(record: any, line: number): CoalitionPayoff {
        let coalition: PlayerSet;
        let payoff: Payoff;
        if ('coalition' in record && 'payoff' in record) {
            coalition = new Set<Player>(
                record['coalition'].split(',').map(function (item: string) {
                    const trimmedItem = item.trim();
                    if (trimmedItem.length === 0) {
                        throw new ParseCsvGameError(
                            'coalition column does not contain any valid player.',
                            line,
                            record
                        );
                    }
                    return trimmedItem;
                })
            );
            payoff = parseFloat(record['payoff'].trim());
            if (Number.isNaN(payoff)) {
                throw new ParseCsvGameError('payoff does not contain a valid value in float format.', line, record);
            }
        } else {
            throw new ParseCsvGameError('coalition or payoff column not found.', line, record);
        }
        return [coalition, payoff];
    }

    public static async fromCsvString(csvString: string): Promise<IGame> {
        return new Promise<IGame>((resolve, reject) => {
            const N: PlayerSet = new Set<Player>();
            const payoffs: GamePayoffs = {};
            parse(
                csvString.trim(),
                {
                    delimiter: ';',
                    columns: true,
                },
                (error, records) => {
                    if (error) {
                        reject(new ParseCsvGameError(error.message));
                    }
                    if (!records || records.length <= 0) {
                        reject(
                            new ParseCsvGameError(
                                'invalid number of lines. There thould be at least 2 lines: header and grand coalition payoff'
                            )
                        );
                    }
                    let line = 1;
                    try {
                        for (const record of records) {
                            const [coalition, payoff] = CsvMapper.parseCsvRecord(record, line);
                            coalition.forEach((value) => N.add(value));
                            const coalitionKey = Array.from(coalition).sort().join(',');
                            payoffs[coalitionKey] = payoff;
                            line++;
                        }
                        const game: IGame = new Game(N, payoffs);
                        resolve(game);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }
}

export default CsvMapper;