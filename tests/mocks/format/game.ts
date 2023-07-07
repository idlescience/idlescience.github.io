import { GamePayoffs, IGameStructure, Player, PlayerSet } from '../../../src/format/game';

const N: PlayerSet = new Set<Player>([1, 2, 3]);

const payoffs: GamePayoffs = {
    '1': 15,
    '2': 10,
    '3': 12,
    '1,2': 30,
    '1,3': 33,
    '2,3': 28,
    '1,2,3': 40,
};

export const THREE_PLAYERS_GAME_MOCK: IGameStructure = {
    N: N,
    payoffs: payoffs,
    v: () => 0
}

export const THREE_PLAYERS_GAME_CSV_MOCK: string = `
coalition;payoff
1;15
2;10
3;12
1,2;30
1,3;33
2,3;25
1,2,3;40
`;