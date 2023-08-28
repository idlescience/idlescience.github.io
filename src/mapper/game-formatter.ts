import { IGame } from '../business/game';

export interface IGameFormatter {
    fromGame: (game: IGame) => string;
}
