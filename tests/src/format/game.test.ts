import Game, { ParseCsvGameError } from '../../../src/format/game';
import {
    THREE_PLAYERS_GAME_STRUCTURE_MOCK,
    THREE_PLAYERS_GAME_CSV_MOCK,
    THREE_PLAYERS_GAME_COALITION_PAYOFFS_MOCK,
    BAD_FORMAT_DELIMITER_GAME_CSV_MOCK,
    BAD_FORMAT_FLOAT_PAYOFF_GAME_CSV_MOCK,
    BAD_FORMAT_EMPTY_COALITION_GAME_CSV_MOCK,
} from '../../mocks/format/game';

const fromCsvTestTimeout = 20000;

describe('When using Game class as an parser then', () => {
    it('fromCsvString return a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', async () => {
        const game = await (new Game()).fromCsvString(THREE_PLAYERS_GAME_CSV_MOCK);
        expect(game.N.size).toBe(THREE_PLAYERS_GAME_STRUCTURE_MOCK.N.size);
        expect(Object.keys(game.payoffs)).toHaveLength(Object.keys(THREE_PLAYERS_GAME_STRUCTURE_MOCK.payoffs).length);
    }, fromCsvTestTimeout);

    it('fromCsvString assigns proper coalition values', async () => {
        const game = await (new Game()).fromCsvString(THREE_PLAYERS_GAME_CSV_MOCK);

        for (const coalitionPlayoff of THREE_PLAYERS_GAME_COALITION_PAYOFFS_MOCK) {
            expect(game.v(coalitionPlayoff[0])).toBe(coalitionPlayoff[1]);
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when an empty string is given', async () => {
        expect.assertions(2);

        try {
            await (new Game()).fromCsvString('');
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when a string with no value rows is given', async () => {
        expect.assertions(2);

        try {
            await (new Game()).fromCsvString('coalition;payoff');
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when a row with invalid field length is given', async () => {
        expect.assertions(2);

        try {
            await (new Game()).fromCsvString('coalition;payoff\n1;2;3;4;5');
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when a bad column delimiter is used', async () => {
        expect.assertions(3);

        try {
            await (new Game()).fromCsvString(BAD_FORMAT_DELIMITER_GAME_CSV_MOCK);
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
            expect(error.message).toMatch(/coalition or payoff column not found/i);
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when payoffs are of type different from float', async () => {
        expect.assertions(3);

        try {
            await (new Game()).fromCsvString(BAD_FORMAT_FLOAT_PAYOFF_GAME_CSV_MOCK);
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
            expect(error.message).toMatch(/payoff does not contain a valid value in float format/i);
        }
    }, fromCsvTestTimeout);

    it('fromCsvString should rise error when some coalition has no players', async () => {
        expect.assertions(3);

        try {
            await (new Game()).fromCsvString(BAD_FORMAT_EMPTY_COALITION_GAME_CSV_MOCK);
        } catch (error) {
            expect(error).toBeInstanceOf(ParseCsvGameError);
            expect(error).toHaveProperty('message');
            expect(error.message).toMatch(/coalition column does not contain any valid player/i);
        }
    }, fromCsvTestTimeout);
});

describe('When using Game class as an structure then', () => {
    it('empty construtor creates an empty game', () => {
        const game = new Game();
        expect(game.N.size).toBe(0);
        expect(Object.keys(game.payoffs)).toHaveLength(0);
    });

    it('construtor creates a game with n = 3 players and (2 ^ n) - 1 = 7 coalitions', () => {
        const game = new Game(THREE_PLAYERS_GAME_STRUCTURE_MOCK.N, THREE_PLAYERS_GAME_STRUCTURE_MOCK.payoffs);
        expect(game.N.size).toBe(THREE_PLAYERS_GAME_STRUCTURE_MOCK.N.size);
        expect(Object.keys(game.payoffs)).toHaveLength(Object.keys(THREE_PLAYERS_GAME_STRUCTURE_MOCK.payoffs).length);
    });

    it('getPartitions should return a posible players combinations', () => {
        const game = new Game(THREE_PLAYERS_GAME_STRUCTURE_MOCK.N, THREE_PLAYERS_GAME_STRUCTURE_MOCK.payoffs);
        expect(game.B).toHaveLength(THREE_PLAYERS_GAME_STRUCTURE_MOCK.B.length);
    });
});