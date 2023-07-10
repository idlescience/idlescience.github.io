import Cplex from '../../../src/format/cplex';
import {
    LPP_SIGMA_MOCK,
    THREE_PLAYERS_GAME_LPP_MOCK,
    THREE_PLAYERS_GAME_MOCK,
} from '../../mocks/format/cplex';

describe('Cplex Format class', () => {
    it('creates a full Puerto & Perea Linear Programming Problem from a three players Game instance', () => {
        const cplex = new Cplex();
        const lpProblem = cplex.fromGame(THREE_PLAYERS_GAME_MOCK, LPP_SIGMA_MOCK);
        expect(lpProblem).toEqual(THREE_PLAYERS_GAME_LPP_MOCK);
    });
});