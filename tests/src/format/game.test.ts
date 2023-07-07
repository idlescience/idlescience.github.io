import Game from '../../../src/format/game';
import { 
    THREE_PLAYERS_GAME_MOCK,
    THREE_PLAYERS_GAME_CSV_MOCK
} from '../../mocks/format/game';

describe('Game class', () => {
    it('empty construtor creates an empty game', () => {
        const game = new Game();
        expect(game.N.size).toBe(0);
        expect(Object.keys(game.payoffs)).toHaveLength(0);
    });

    it('construtor creates a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', () => {
        const game = new Game(THREE_PLAYERS_GAME_MOCK.N, THREE_PLAYERS_GAME_MOCK.payoffs);
        expect(game.N.size).toBe(THREE_PLAYERS_GAME_MOCK.N.size);
        expect(Object.keys(game.payoffs)).toHaveLength(Object.keys(THREE_PLAYERS_GAME_MOCK.payoffs).length);
    });

    it('fromCsvString return a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', async () => {
        const game = await (new Game()).fromCsvString(THREE_PLAYERS_GAME_CSV_MOCK);
        expect(game.N.size).toBe(THREE_PLAYERS_GAME_MOCK.N.size);
        expect(Object.keys(game.payoffs)).toHaveLength(Object.keys(THREE_PLAYERS_GAME_MOCK.payoffs).length);
    });
});
