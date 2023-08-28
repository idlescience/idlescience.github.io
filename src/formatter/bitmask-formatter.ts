import { IGame, Payoff } from '../business/game';

export interface IBitmask {
    toPayoffVec: (game: IGame) => Payoff[];
}

class Bitmask {
    public toPayoffVec = (game: IGame): Payoff[] => {
        const result: Payoff[] = [];
        const b = (2 ^ (game.N.size)) - 1;
        for (let i = 0; i < b; i++) {
            const bitString = i.toString(2);
            const bitStringPadded = bitString.padStart(game.N.size, '0');
            const bitStringPaddedArray = bitStringPadded.split('');
            const bitStringPaddedArrayNumber = bitStringPaddedArray.map((bit) => Array.from(game.N)[parseInt(bit)]);
            const bitStringPaddedArrayNumberSet = new Set(bitStringPaddedArrayNumber);
            const payoff = game.v(bitStringPaddedArrayNumberSet);
            result.push(payoff);
        }
        return result;
    };
}

export default Bitmask;