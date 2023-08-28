import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

import Game, { IGame, Payoff } from '../business/game';
import Bitmask from '../formatter/bitmask-formatter';
import init from './cooperative-game-tool.wasm?init';

function App() {
    const [csv, setCsv] = useState<string>(`coalition;payoff
1;2
2;5
3;4
1,2;14
1,3;18
2,3;9
1,2,3;24`);
    const [solution, setSolution] = useState<{ player: number; nucleolus: number }[]>();
    const [wasmModule, setWasmModule] = useState<any>();

    const solveProblem = useCallback(async () => {
        const game: IGame = await new Game().fromCsvString(csv);
        const v: Payoff[] = new Bitmask().toPayoffVec(game);
        const n_in = v.length;
        const v_in = new wasmModule.exports.DoubleList();
        v.map((x) => v_in.push_back(x));
        const nucleolus = wasmModule.exports.bnf_run(v_in, n_in);
        const newSolution: { player: number; nucleolus: number }[] = [];
        for (let i = 0; i < nucleolus.size(); i++) {
            newSolution.push({ player: i + 1, nucleolus: nucleolus.get(i) });
        }
        setSolution(newSolution);
    }, [wasmModule, csv, setSolution]);

    useEffect(() => {
        init({}).then((instance) => {
            setWasmModule(instance);
        });
    }, [setWasmModule]);

    return (
        <div className="d-flex flex-column justify-content-start p-3">
            <div className="p-2">
                <textarea
                    className="w-100 m-auto"
                    onChange={(event) => {
                        setCsv(event.target.value);
                    }}
                    rows={9}
                    defaultValue={csv}
                ></textarea>
            </div>
            <div className="d-flex flex-row justify-content-center w-100">
                <div className="d-flex flex-row justify-content-center p-2">
                    <button type="button" className="btn btn-primary" onClick={solveProblem}>
                        Solve
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-start p-2">
                {solution &&
                    solution.map((elem) => (
                        <div key={elem.player} className="d-flex flex-row justify-content-center p-2">
                            <div>Player: {elem.player}</div>
                            <div>Nucleolus: {elem.nucleolus}</div>
                            <br />
                        </div>
                    ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app-root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
