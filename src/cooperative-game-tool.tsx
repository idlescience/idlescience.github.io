import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import highs, { Highs, HighsSolution } from 'highs';

import Game from './format/game';
import Cplex from './format/cplex';

function App() {
    const [csv, setCsv] = useState<string>(`coalition;payoff
1;2
2;5
3;4
1,2;14
1,3;18
2,3;9
1,2,3;24`);
    const [kMax, setKMax] = useState<number | undefined>();
    const [sigma, setSigma] = useState<number>(0.1);
    const [solution, setSolution] = useState<HighsSolution>();
    const [highsInstance, setHighsInstance] = useState<Highs>();

    const solveProblem = useCallback(async () => {
        const game = await new Game().fromCsvString(csv);
        const problem = new Cplex().fromGame(game, sigma, kMax);
        if (highsInstance && problem) {
            console.log('Solving problem:');
            console.log(problem);
            const result = highsInstance.solve(problem, {
                presolve: 'off',
                parallel: 'off',
            });
            console.log('Solution:');
            console.log(result);
            setSolution(result);
        }
    }, [highsInstance, csv, kMax, sigma]);

    useEffect(() => {
        const highs_settings = {
            locateFile: (file: string) => `${import.meta.env.VITE_HIGHS_WASM_PATH}/${file}`,
        };
        highs(highs_settings).then((newHighsInstance) => {
            setHighsInstance(newHighsInstance);
        });
    }, [setHighsInstance]);

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
                    <label htmlFor="sigma" className="w-50 align-self-center">
                        Sigma
                    </label>
                    <input
                        id="sigma"
                        type="number"
                        className="form-control"
                        onChange={(e) => setSigma(parseFloat(e.target.value))}
                        placeholder="0.1"
                    />
                </div>
                <div className="d-flex flex-row justify-content-center p-2">
                    <label htmlFor="kMax" className="w-50 align-self-center">
                        Maximum k value
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="kMax"
                        onChange={(e) => setKMax(parseInt(e.target.value))}
                        placeholder="Maximum k value"
                    />
                </div>
                <div className="d-flex flex-row justify-content-center p-2">
                    <button type="button" className="btn btn-primary" onClick={solveProblem}>
                        Solve
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-start p-2">
                {solution &&
                    Object.keys(solution.Columns).map((key) => (
                        <div key={key} className="d-flex flex-row justify-content-center p-2">
                            {'Name' in solution.Columns[key] && (
                                <div>Name: {(solution.Columns[key] as { Name: string }).Name}</div>
                            )}
                            {'Solution' in solution.Columns[key] && (
                                <div>Primal: {(solution.Columns[key] as { Primal: number }).Primal}</div>
                            )}
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
