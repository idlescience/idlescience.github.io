import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import highs, { Highs, HighsSolution } from 'highs';

import Game from './format/game';
import Cplex from './format/cplex';

function App() {
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
            const lpProblem = new Cplex().fromGame(game, 0.1);
            setProblem(lpProblem);
        },
        [setProblem]
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
                    S;v 1;10 2;15 3;12 1,2;40 1,3;35 2,3;42 1,2,3;50
                </textarea>
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={solveProblem}>
                    Solve
                </button>
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
