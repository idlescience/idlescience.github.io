import { CoalitionPayoff, GamePayoffs, IGameStructure, Player, PlayerSet } from '../../../src/format/game';

const N: PlayerSet = new Set<Player>([1, 2, 3]);
const B: PlayerSet[] = [
    new Set<Player>([1]),
    new Set<Player>([2]),
    new Set<Player>([3]),
    new Set<Player>([1, 2]),
    new Set<Player>([1, 3]),
    new Set<Player>([2, 3]),
    new Set<Player>([1, 2, 3]),
];

export const THREE_PLAYERS_GAME_COALITION_PAYOFFS_MOCK: CoalitionPayoff[] = [
    [new Set<Player>([1]), 15],
    [new Set<Player>([2]), 10],
    [new Set<Player>([3]), 12],
    [new Set<Player>([1, 2]), 30],
    [new Set<Player>([1, 3]), 33],
    [new Set<Player>([2, 3]), 28],
    [new Set<Player>([1, 2, 3]), 40],
];

const gamePayoffs: GamePayoffs = {};
let csvString = 'coalition;payoff';
let badFormatDelimiterCsvString = 'coalition,payoff';
let badFormatFloatPayoffCsvString = 'coalition;payoff';
let badFormatEmptyCoalitionCsvString = 'coalition;payoff';
let replacements = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

for (const coalitionPlayoff of THREE_PLAYERS_GAME_COALITION_PAYOFFS_MOCK) {
    const coalitionKey = Array.from(coalitionPlayoff[0]).sort().join(',');
    gamePayoffs[coalitionKey] = coalitionPlayoff[1];
    csvString += `\n${coalitionKey};${coalitionPlayoff[1]}`;
    badFormatDelimiterCsvString += `\n${coalitionKey},${coalitionPlayoff[1]}`;
    badFormatFloatPayoffCsvString += `\n${coalitionKey};${coalitionPlayoff[1]
        .toString()
        .replace(/(\d)/g, (g0, g1) => replacements[parseInt(g1, 10)])}`;
    badFormatEmptyCoalitionCsvString += `\n${coalitionKey};${coalitionPlayoff[1]}`;
}
badFormatEmptyCoalitionCsvString += `\n;100`;

export const THREE_PLAYERS_GAME_STRUCTURE_MOCK: IGameStructure = {
    N: N,
    B: B,
    payoffs: gamePayoffs,
    v: () => 0,
};

export const THREE_PLAYERS_GAME_CSV_MOCK: string = csvString;

export const BAD_FORMAT_DELIMITER_GAME_CSV_MOCK: string = badFormatDelimiterCsvString;

export const BAD_FORMAT_FLOAT_PAYOFF_GAME_CSV_MOCK: string = badFormatFloatPayoffCsvString;

export const BAD_FORMAT_EMPTY_COALITION_GAME_CSV_MOCK: string = badFormatEmptyCoalitionCsvString;
