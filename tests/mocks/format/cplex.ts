import Game, { CoalitionPayoff, GamePayoffs, IGameStructure, Player, PlayerSet } from '../../../src/format/game';

const N: PlayerSet = new Set<Player>([1, 2, 3]);

export const coalitionPayoffs: CoalitionPayoff[] = [
    [new Set<Player>([1]), 15],
    [new Set<Player>([2]), 10],
    [new Set<Player>([3]), 12],
    [new Set<Player>([1, 2]), 30],
    [new Set<Player>([1, 3]), 33],
    [new Set<Player>([2, 3]), 28],
    [new Set<Player>([1, 2, 3]), 40],
];

const gamePayoffs: GamePayoffs = {};

for (const coalitionPlayoff of coalitionPayoffs) {
    const coalitionKey = Array.from(coalitionPlayoff[0]).sort().join(',');
    gamePayoffs[coalitionKey] = coalitionPlayoff[1];
}

export const THREE_PLAYERS_GAME_MOCK = new Game(N, gamePayoffs);

export const LPP_SIGMA_MOCK: number = 0.1;

const n = N.size;

export const THREE_PLAYERS_GAME_LPP_MOCK: string = `Minimize
    obj: 0.9 t1 + 0.9 d11 + 0.9 d21 + 0.9 d31 + 0.9 d41 + 0.9 d51 + 0.9 d61 + 0.18 t2 + 0.09 d12 + 0.09 d22 + 0.09 d32 + 0.09 d42 + 0.09 d52 + 0.09 d62 + 0.027 t3 + 0.009 d13 + 0.009 d23 + 0.009 d33 + 0.009 d43 + 0.009 d53 + 0.009 d63 + 0.0036 t4 + 0.0009 d14 + 0.0009 d24 + 0.0009 d34 + 0.0009 d44 + 0.0009 d54 + 0.0009 d64 + 0.00045 t5 + 0.00009 d15 + 0.00009 d25 + 0.00009 d35 + 0.00009 d45 + 0.00009 d55 + 0.00009 d65 + 0.000054 t6 + 0.000009 d16 + 0.000009 d26 + 0.000009 d36 + 0.000009 d46 + 0.000009 d56 + 0.000009 d66
Subject To
    c1: d11 >= theta1 - t1
    c2: d12 >= theta1 - t2
    c3: d13 >= theta1 - t3
    c4: d14 >= theta1 - t4
    c5: d15 >= theta1 - t5
    c6: d16 >= theta1 - t6
    c7: d21 >= theta2 - t1
    c8: d22 >= theta2 - t2
    c9: d23 >= theta2 - t3
    c10: d24 >= theta2 - t4
    c11: d25 >= theta2 - t5
    c12: d26 >= theta2 - t6
    c13: d31 >= theta3 - t1
    c14: d32 >= theta3 - t2
    c15: d33 >= theta3 - t3
    c16: d34 >= theta3 - t4
    c17: d35 >= theta3 - t5
    c18: d36 >= theta3 - t6
    c19: d41 >= theta4 - t1
    c20: d42 >= theta4 - t2
    c21: d43 >= theta4 - t3
    c22: d44 >= theta4 - t4
    c23: d45 >= theta4 - t5
    c24: d46 >= theta4 - t6
    c25: d51 >= theta5 - t1
    c26: d52 >= theta5 - t2
    c27: d53 >= theta5 - t3
    c28: d54 >= theta5 - t4
    c29: d55 >= theta5 - t5
    c30: d56 >= theta5 - t6
    c31: d61 >= theta6 - t1
    c32: d62 >= theta6 - t2
    c33: d63 >= theta6 - t3
    c34: d64 >= theta6 - t4
    c35: d65 >= theta6 - t5
    c36: d66 >= theta6 - t6
    c37: theta1 = 15 - x1
    c38: theta2 = 10 - x2
    c39: theta3 = 12 - x3
    c40: theta4 = 30 - x1 - x2
    c41: theta5 = 33 - x1 - x3
    c42: theta6 = 28 - x2 - x3
    c43: x1 + x2 + x3 = 40
Bounds
    d11 >= 0
    d12 >= 0
    d13 >= 0
    d14 >= 0
    d15 >= 0
    d16 >= 0
    d21 >= 0
    d22 >= 0
    d23 >= 0
    d24 >= 0
    d25 >= 0
    d26 >= 0
    d31 >= 0
    d32 >= 0
    d33 >= 0
    d34 >= 0
    d35 >= 0
    d36 >= 0
    d41 >= 0
    d42 >= 0
    d43 >= 0
    d44 >= 0
    d45 >= 0
    d46 >= 0
    d51 >= 0
    d52 >= 0
    d53 >= 0
    d54 >= 0
    d55 >= 0
    d56 >= 0
    d61 >= 0
    d62 >= 0
    d63 >= 0
    d64 >= 0
    d65 >= 0
    d66 >= 0
End`;