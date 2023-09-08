
export interface CgtLib {
    DoubleVector: typeof DoubleVector;
    shapley: (v: Vector<number>, n: number) => Vector<number>;
    nucleolus: (v: Vector<number>, n: number) => Vector<number>;
}

export interface Vector<T> {
    push_back: (record: T) => void;
    size: () => number;
    get: (index: number) => T;
}

export var DoubleVector: {
    new(): Vector<number>;
}