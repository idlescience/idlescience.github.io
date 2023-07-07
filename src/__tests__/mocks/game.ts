import { IGameStructure, Player, vS } from '../../format/game';

const N: Player[] = [1, 2, 3];

const v: vS[] = [{
    S: [1],
    v: 15
}, {
    S: [2],
    v: 10
}, {
    S: [3],
    v: 12
}, {
    S: [1, 2],
    v: 30
}, {
    S: [1, 3],
    v: 33
}, {
    S: [2, 3],
    v: 25
}, {
    S: [1, 2, 3],
    v: 40
}];

export const THREE_PLAYERS_GAME_MOCK: IGameStructure = {
    N: N,
    v: v
}

export const THREE_PLAYERS_GAME_CSV_MOCK: string = `
S;v
1;15
2;10
3;12
1,2;30
1,3;33
2,3;25
1,2,3;40
`;