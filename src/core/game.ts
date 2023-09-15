export type Player = number | string;

export type PlayerSet = Set<Player>;

export type Payoff = number;

export type CoalitionPayoff = [PlayerSet, Payoff];

export type GamePayoffs = { [k: string]: Payoff };

export type CharacteristicFunction = (S: PlayerSet) => Payoff;

export interface IGame {
    N: PlayerSet;
    B: PlayerSet[];
    v: CharacteristicFunction;
    payoffs: GamePayoffs;
}

class Game implements IGame {
    protected _N: PlayerSet = new Set<Player>();
    protected _B: PlayerSet[] = [];
    protected _payoffs: GamePayoffs = {};

    protected readonly _v: CharacteristicFunction = (S: PlayerSet): Payoff => {
        const SString = Array.from(S).sort().join(',');
        return this._payoffs[SString];
    };

    get N() {
        return this._N;
    }

    set N(NQuote: PlayerSet) {
        this._N = NQuote;
    }

    get B() {
        const fn = (active: Player[], remaining: Player[], result: PlayerSet[]) => {
            if (!active.length && !remaining.length) return;
            if (!remaining.length) {
                result.push(new Set(active));
            } else {
                fn([...active, remaining[0]], remaining.slice(1), result);
                fn(active, remaining.slice(1), result);
            }
            return result;
        };
        let result = fn([], Array.from(this._N), []) ?? [];
        result = result.sort((a: PlayerSet, b: PlayerSet) => a.size - b.size);
        return result;
    }

    set B(BQuote: PlayerSet[]) {
        this._B = BQuote;
    }

    get payoffs(): GamePayoffs {
        return this._payoffs;
    }

    set payoffs(payofssQuote: GamePayoffs) {
        this._payoffs = payofssQuote;
    }

    get v(): CharacteristicFunction {
        return this._v;
    }

    constructor();
    constructor(NQuote: PlayerSet, payoffsQuote: GamePayoffs);
    constructor(NQuote?: PlayerSet, payoffsQuote?: GamePayoffs) {
        if (NQuote) {
            this._N = NQuote;
        }
        if (payoffsQuote) {
            this._payoffs = payoffsQuote;
        }
    }
}

export default Game;
