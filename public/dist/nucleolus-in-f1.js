import { R as x, j as s, a as c, r as i, h as a } from "./highs-768eac77.js";
function d() {
  const [n, o] = i.useState(), t = {
    locateFile: (e) => "https://lovasoa.github.io/highs-js/" + e
  };
  return i.useEffect(() => {
    a(t).then((e) => {
      const r = `Maximize
  obj: x1 + 2 x2 + 3 x3 + x4
Subject To
  c1: - x1 + x2 + x3 + 10 x4 <= 20
  c2: x1 - 3 x2 + x3 <= 30
  c3: x2 - 3.5 x4 = 0
Bounds
  0 <= x1 <= 40
  2 <= x4 <= 3
End`, l = e.solve(r, {
        presolve: "on",
        parallel: "off"
      });
      o(l);
    });
  }, [o]), /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx("div", { children: n && Object.keys(n.Columns).map((e) => /* @__PURE__ */ s.jsxs("div", { children: [
    "Name" in n.Columns[e] && /* @__PURE__ */ s.jsxs("div", { children: [
      "Name: ",
      n.Columns[e].Name
    ] }),
    "Primal" in n.Columns[e] && /* @__PURE__ */ s.jsxs("div", { children: [
      "Primal: ",
      n.Columns[e].Primal
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Index: ",
      n.Columns[e].Index
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Upper: ",
      n.Columns[e].Upper
    ] }),
    /* @__PURE__ */ s.jsxs("div", { children: [
      "Lower: ",
      n.Columns[e].Lower
    ] }),
    /* @__PURE__ */ s.jsx("br", {})
  ] })) }) });
}
x.render(
  /* @__PURE__ */ s.jsx(c.StrictMode, { children: /* @__PURE__ */ s.jsx(d, {}) }),
  document.getElementById("app-root")
);
