import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import highs, { Highs, HighsSolution } from 'highs';

import Game from './format/game';
import Cplex from './format/cplex';

function App() {
    const csvSample = `coalition;payoff
1;10
2;15
3;12
1,2;40
1,3;35
2,3;42
1,2,3;50`;
    const [kMax, setKMax] = useState<number | undefined>();
    const [sigma, setSigma] = useState<number>(0.1);
    const [problem, setProblem] = useState<string>();
    const [solution, setSolution] = useState<HighsSolution>();
    const [highsInstance, setHighsInstance] = useState<Highs>();

    const solveProblem = useCallback(() => {
        if (highsInstance && problem) {
            console.log('Solving problem:');
            console.log(problem);
            const result = highsInstance.solve(problem, {
                presolve: 'on',
                parallel: 'off',
            });
            setSolution(result);
        }
    }, [highsInstance, problem]);

    const onGameUpdate = useCallback(
        async (gameCsv: string) => {
            const game = await new Game().fromCsvString(gameCsv);
            const lpProblem = new Cplex().fromGame(game, sigma, kMax);
            setProblem(lpProblem);
        },
        [setProblem, kMax, sigma]
    );

    useEffect(() => {
        const highs_settings = {
            locateFile: (file: string) => `${import.meta.env.VITE_HIGHS_WASM_PATH}/${file}`,
        };
        highs(highs_settings).then((newHighsInstance) => {
            setHighsInstance(newHighsInstance);
        });
    }, [setHighsInstance]);

    return (
        <>
            <div>
                <textarea
                    onChange={(event) => {
                        onGameUpdate(event.target.value);
                    }}
                    rows={9}
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {csvSample}
                </textarea>
            </div>
            <div className="row">
                <div>
                    <label>
                        <input type="number" onChange={(e) => setSigma(parseFloat(e.target.value))} placeholder='0.1' />
                    </label>
                    <label>
                        <input type="number" onChange={(e) => setKMax(parseInt(e.target.value))} placeholder='Maximum k value' />
                    </label>
                    <button type="button" className="btn btn-primary" onClick={solveProblem}>
                        Solve
                    </button>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                }}
            >
                {solution &&
                    Object.keys(solution.Columns).map((key) => (
                        <>
                            {'Player' in solution.Columns[key] && (
                                <div>Name: {(solution.Columns[key] as { Name: string }).Name}</div>
                            )}
                            {'Solution' in solution.Columns[key] && (
                                <div>Primal: {(solution.Columns[key] as { Primal: number }).Primal}</div>
                            )}
                            <br />
                        </>
                    ))}
            </div>
        </>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app-root')
);
