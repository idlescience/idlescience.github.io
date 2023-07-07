import Game from '../../format/game';
import { 
    THREE_PLAYERS_GAME_MOCK,
    THREE_PLAYERS_GAME_CSV_MOCK
} from '../mocks/game';

describe('Game class', () => {
    it('empty construtor creates an empty game', () => {
        const game = new Game();
        expect(game.N).toHaveLength(0);
        expect(game.v).toHaveLength(0);
    });

    it('construtor creates a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', () => {
        const game = new Game(THREE_PLAYERS_GAME_MOCK.N, THREE_PLAYERS_GAME_MOCK.v);
        expect(game.N).toHaveLength(THREE_PLAYERS_GAME_MOCK.N.length);
        expect(game.v).toHaveLength(THREE_PLAYERS_GAME_MOCK.v.length);
    });

    it('fromCsvString return a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', () => {
        const game = (new Game()).fromCsvString(THREE_PLAYERS_GAME_CSV_MOCK);
        expect(game.N).toHaveLength(THREE_PLAYERS_GAME_MOCK.N.length);
        expect(game.v).toHaveLength(THREE_PLAYERS_GAME_MOCK.v.length);
    });
});
