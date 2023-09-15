import { IGame, Payoff } from '../core/game';

export interface IBitmask {
    toPayoffVec: (game: IGame) => Payoff[];
}

class BitmaskMapper {
    public static toPayoffVector = (game: IGame): Payoff[] => {
        const result: Payoff[] = [];
        const b = (2 ** (game.N.size)) - 1;
        for (let i = 1; i <= b; i++) {
            const bitString = i.toString(2);
            const bitStringPadded = bitString.padStart(game.N.size, '0');
            const bitStringPaddedArray = bitStringPadded.split('');
            const bitStringPaddedArrayNumber = bitStringPaddedArray.reverse().map((bit, index) => {
                if (bit !== '0') {
                    return Array.from(game.N)[index];
                } else {
                    return 0;
                }
            }).filter((bit) => bit !== 0);
            const bitStringPaddedArrayNumberSet = new Set(bitStringPaddedArrayNumber);
            const payoff = game.v(bitStringPaddedArrayNumberSet);
            result.push(payoff);
        }
        return result;
    };
}

export default BitmaskMapper;