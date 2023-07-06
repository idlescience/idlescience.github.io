import React, {
  useEffect,
  useState
} from 'react';
import ReactDOM from 'react-dom';
import highs, {
  HighsSolution,
} from 'highs';

function App() {
  const [solution, setSolution] = useState<HighsSolution>();
  const highs_settings = {
    locateFile: (file: string) => "https://lovasoa.github.io/highs-js/" + file
  };
  useEffect(() => {
    highs(highs_settings).then((clp) => {
      const problem = `Maximize
  obj: x1 + 2 x2 + 3 x3 + x4
Subject To
  c1: - x1 + x2 + x3 + 10 x4 <= 20
  c2: x1 - 3 x2 + x3 <= 30
  c3: x2 - 3.5 x4 = 0
Bounds
  0 <= x1 <= 40
  2 <= x4 <= 3
End`;
      const result = clp.solve(problem, {
        presolve: "on",
        parallel: "off"
      });
      setSolution(result);
    })
  }, [setSolution]);

  return (
    <>
      <div>
        {solution && Object.keys(solution.Columns).map(
          key => (
            <div>
              {
                'Name' in solution.Columns[key] && (
                  <div>Name: {(solution.Columns[key] as { Name: string }).Name}</div>
                )
              }
              {
                'Primal' in solution.Columns[key] && (
                  <div>Primal: {(solution.Columns[key] as { Primal: number }).Primal}</div>
                )
              }
              <div>Index: {solution.Columns[key].Index}</div>
              <div>Upper: {solution.Columns[key].Upper}</div>
              <div>Lower: {solution.Columns[key].Lower}</div>
              <br />
            </div>
          )
        )}
      </div>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app-root')
);