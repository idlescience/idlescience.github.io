import Game from './game';

export type LP = string;

export interface ICplex {
    fromGame: (game: Game) => LP;
}

class Cplex implements ICplex {
    public fromGame(game: Game): LP {
        let result: string = '';
        return result;
    }
}

export default Cplex;