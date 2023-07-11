import Cplex from '../../../src/format/cplex';
import {
    LPP_SIGMA_MOCK,
    THREE_PLAYERS_GAME_LPP_BOUNDS_MOCK,
    THREE_PLAYERS_GAME_LPP_CONTRAINTS_MOCK,
    THREE_PLAYERS_GAME_LPP_MOCK,
    THREE_PLAYERS_GAME_LPP_OBJECTIVE_MOCK,
    THREE_PLAYERS_GAME_MOCK,
} from '../../mocks/format/cplex';

describe('Cplex Format class', () => {
    it('creates a full Puerto & Perea Linear Programming Problem from a three players Game instance', () => {
        const cplex = new Cplex();
        const lpProblem = cplex.fromGame(THREE_PLAYERS_GAME_MOCK, LPP_SIGMA_MOCK);
        expect(lpProblem).toEqual(THREE_PLAYERS_GAME_LPP_MOCK);
    });

    it('gameObjectiveFunction method returns a string with the bounds of the game', () => {
        const cplex = new Cplex();
        const gameObjectiveFunction = cplex.gameObjectiveFunction(THREE_PLAYERS_GAME_MOCK, LPP_SIGMA_MOCK);
        expect(gameObjectiveFunction).toEqual(THREE_PLAYERS_GAME_LPP_OBJECTIVE_MOCK);
    });

    it('gameConstraints method returns a string with the constraints of the game', () => {
        const cplex = new Cplex();
        const gameConstraints = cplex.gameConstraints(THREE_PLAYERS_GAME_MOCK);
        expect(gameConstraints).toEqual(THREE_PLAYERS_GAME_LPP_CONTRAINTS_MOCK);
    });

    it('gameBounds method returns a string with the objective function of the game', () => {
        const cplex = new Cplex();
        const gameBounds = cplex.gameBounds(THREE_PLAYERS_GAME_MOCK);
        expect(gameBounds).toEqual(THREE_PLAYERS_GAME_LPP_BOUNDS_MOCK);
    });
});
