import { IGame } from '../business/game';
import { IGameFormatter } from './game-formatter';

class Bitmask implements IGameFormatter {
    public fromGame = (game: IGame): string => {
        let result = '';
        return result;
    };
}