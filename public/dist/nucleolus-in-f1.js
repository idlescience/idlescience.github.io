function Mu(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
function zf(D) {
  if (D.__esModule)
    return D;
  var oe = D.default;
  if (typeof oe == "function") {
    var _ = function J() {
      if (this instanceof J) {
        var ue = [null];
        ue.push.apply(ue, arguments);
        var h = Function.bind.apply(oe, ue);
        return new h();
      }
      return oe.apply(this, arguments);
    };
    _.prototype = oe.prototype;
  } else
    _ = {};
  return Object.defineProperty(_, "__esModule", { value: !0 }), Object.keys(D).forEach(function(J) {
    var ue = Object.getOwnPropertyDescriptor(D, J);
    Object.defineProperty(_, J, ue.get ? ue : {
      enumerable: !0,
      get: function() {
        return D[J];
      }
    });
  }), _;
}
var Za = { exports: {} }, Wl = {}, Ja = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function Mf() {
  if (Qa)
    return Z;
  Qa = 1;
  var D = Symbol.for("react.element"), oe = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), ue = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), Ve = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), Re = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ne = Symbol.iterator;
  function ce(d) {
    return d === null || typeof d != "object" ? null : (d = ne && d[ne] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var be = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oe = Object.assign, se = {};
  function Y(d, E, L) {
    this.props = d, this.context = E, this.refs = se, this.updater = L || be;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(d, E) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, E, "setState");
  }, Y.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function yn() {
  }
  yn.prototype = Y.prototype;
  function en(d, E, L) {
    this.props = d, this.context = E, this.refs = se, this.updater = L || be;
  }
  var Ke = en.prototype = new yn();
  Ke.constructor = en, Oe(Ke, Y.prototype), Ke.isPureReactComponent = !0;
  var ye = Array.isArray, De = Object.prototype.hasOwnProperty, Fe = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ie(d, E, L) {
    var X, B = {}, ae = null, q = null;
    if (E != null)
      for (X in E.ref !== void 0 && (q = E.ref), E.key !== void 0 && (ae = "" + E.key), E)
        De.call(E, X) && !Ee.hasOwnProperty(X) && (B[X] = E[X]);
    var ie = arguments.length - 2;
    if (ie === 1)
      B.children = L;
    else if (1 < ie) {
      for (var te = Array(ie), xe = 0; xe < ie; xe++)
        te[xe] = arguments[xe + 2];
      B.children = te;
    }
    if (d && d.defaultProps)
      for (X in ie = d.defaultProps, ie)
        B[X] === void 0 && (B[X] = ie[X]);
    return { $$typeof: D, type: d, key: ae, ref: q, props: B, _owner: Fe.current };
  }
  function En(d, E) {
    return { $$typeof: D, type: d.type, key: E, ref: d.ref, props: d.props, _owner: d._owner };
  }
  function xn(d) {
    return typeof d == "object" && d !== null && d.$$typeof === D;
  }
  function Vn(d) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(L) {
      return E[L];
    });
  }
  var Cn = /\/+/g;
  function Xe(d, E) {
    return typeof d == "object" && d !== null && d.key != null ? Vn("" + d.key) : E.toString(36);
  }
  function We(d, E, L, X, B) {
    var ae = typeof d;
    (ae === "undefined" || ae === "boolean") && (d = null);
    var q = !1;
    if (d === null)
      q = !0;
    else
      switch (ae) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case D:
            case oe:
              q = !0;
          }
      }
    if (q)
      return q = d, B = B(q), d = X === "" ? "." + Xe(q, 0) : X, ye(B) ? (L = "", d != null && (L = d.replace(Cn, "$&/") + "/"), We(B, E, L, "", function(xe) {
        return xe;
      })) : B != null && (xn(B) && (B = En(B, L + (!B.key || q && q.key === B.key ? "" : ("" + B.key).replace(Cn, "$&/") + "/") + d)), E.push(B)), 1;
    if (q = 0, X = X === "" ? "." : X + ":", ye(d))
      for (var ie = 0; ie < d.length; ie++) {
        ae = d[ie];
        var te = X + Xe(ae, ie);
        q += We(ae, E, L, te, B);
      }
    else if (te = ce(d), typeof te == "function")
      for (d = te.call(d), ie = 0; !(ae = d.next()).done; )
        ae = ae.value, te = X + Xe(ae, ie++), q += We(ae, E, L, te, B);
    else if (ae === "object")
      throw E = String(d), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return q;
  }
  function nn(d, E, L) {
    if (d == null)
      return d;
    var X = [], B = 0;
    return We(d, X, "", "", function(ae) {
      return E.call(L, ae, B++);
    }), X;
  }
  function je(d) {
    if (d._status === -1) {
      var E = d._result;
      E = E(), E.then(function(L) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = L);
      }, function(L) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = L);
      }), d._status === -1 && (d._status = 0, d._result = E);
    }
    if (d._status === 1)
      return d._result.default;
    throw d._result;
  }
  var me = { current: null }, M = { transition: null }, j = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: M, ReactCurrentOwner: Fe };
  return Z.Children = { map: nn, forEach: function(d, E, L) {
    nn(d, function() {
      E.apply(this, arguments);
    }, L);
  }, count: function(d) {
    var E = 0;
    return nn(d, function() {
      E++;
    }), E;
  }, toArray: function(d) {
    return nn(d, function(E) {
      return E;
    }) || [];
  }, only: function(d) {
    if (!xn(d))
      throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, Z.Component = Y, Z.Fragment = _, Z.Profiler = ue, Z.PureComponent = en, Z.StrictMode = J, Z.Suspense = $, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, Z.cloneElement = function(d, E, L) {
    if (d == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + d + ".");
    var X = Oe({}, d.props), B = d.key, ae = d.ref, q = d._owner;
    if (E != null) {
      if (E.ref !== void 0 && (ae = E.ref, q = Fe.current), E.key !== void 0 && (B = "" + E.key), d.type && d.type.defaultProps)
        var ie = d.type.defaultProps;
      for (te in E)
        De.call(E, te) && !Ee.hasOwnProperty(te) && (X[te] = E[te] === void 0 && ie !== void 0 ? ie[te] : E[te]);
    }
    var te = arguments.length - 2;
    if (te === 1)
      X.children = L;
    else if (1 < te) {
      ie = Array(te);
      for (var xe = 0; xe < te; xe++)
        ie[xe] = arguments[xe + 2];
      X.children = ie;
    }
    return { $$typeof: D, type: d.type, key: B, ref: ae, props: X, _owner: q };
  }, Z.createContext = function(d) {
    return d = { $$typeof: Ve, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, d.Provider = { $$typeof: h, _context: d }, d.Consumer = d;
  }, Z.createElement = Ie, Z.createFactory = function(d) {
    var E = Ie.bind(null, d);
    return E.type = d, E;
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(d) {
    return { $$typeof: ke, render: d };
  }, Z.isValidElement = xn, Z.lazy = function(d) {
    return { $$typeof: _e, _payload: { _status: -1, _result: d }, _init: je };
  }, Z.memo = function(d, E) {
    return { $$typeof: Re, type: d, compare: E === void 0 ? null : E };
  }, Z.startTransition = function(d) {
    var E = M.transition;
    M.transition = {};
    try {
      d();
    } finally {
      M.transition = E;
    }
  }, Z.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Z.useCallback = function(d, E) {
    return me.current.useCallback(d, E);
  }, Z.useContext = function(d) {
    return me.current.useContext(d);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(d) {
    return me.current.useDeferredValue(d);
  }, Z.useEffect = function(d, E) {
    return me.current.useEffect(d, E);
  }, Z.useId = function() {
    return me.current.useId();
  }, Z.useImperativeHandle = function(d, E, L) {
    return me.current.useImperativeHandle(d, E, L);
  }, Z.useInsertionEffect = function(d, E) {
    return me.current.useInsertionEffect(d, E);
  }, Z.useLayoutEffect = function(d, E) {
    return me.current.useLayoutEffect(d, E);
  }, Z.useMemo = function(d, E) {
    return me.current.useMemo(d, E);
  }, Z.useReducer = function(d, E, L) {
    return me.current.useReducer(d, E, L);
  }, Z.useRef = function(d) {
    return me.current.useRef(d);
  }, Z.useState = function(d) {
    return me.current.useState(d);
  }, Z.useSyncExternalStore = function(d, E, L) {
    return me.current.useSyncExternalStore(d, E, L);
  }, Z.useTransition = function() {
    return me.current.useTransition();
  }, Z.version = "18.2.0", Z;
}
Ja.exports = Mf();
var Bl = Ja.exports;
const Tf = /* @__PURE__ */ Mu(Bl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function Rf() {
  if (Ya)
    return Wl;
  Ya = 1;
  var D = Bl, oe = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), J = Object.prototype.hasOwnProperty, ue = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(ke, $, Re) {
    var _e, ne = {}, ce = null, be = null;
    Re !== void 0 && (ce = "" + Re), $.key !== void 0 && (ce = "" + $.key), $.ref !== void 0 && (be = $.ref);
    for (_e in $)
      J.call($, _e) && !h.hasOwnProperty(_e) && (ne[_e] = $[_e]);
    if (ke && ke.defaultProps)
      for (_e in $ = ke.defaultProps, $)
        ne[_e] === void 0 && (ne[_e] = $[_e]);
    return { $$typeof: oe, type: ke, key: ce, ref: be, props: ne, _owner: ue.current };
  }
  return Wl.Fragment = _, Wl.jsx = Ve, Wl.jsxs = Ve, Wl;
}
Za.exports = Rf();
var Rn = Za.exports, qa = { exports: {} }, vn = {}, Lu = { exports: {} }, zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ka;
function Of() {
  return Ka || (Ka = 1, function(D) {
    function oe(M, j) {
      var d = M.length;
      M.push(j);
      e:
        for (; 0 < d; ) {
          var E = d - 1 >>> 1, L = M[E];
          if (0 < ue(L, j))
            M[E] = j, M[d] = L, d = E;
          else
            break e;
        }
    }
    function _(M) {
      return M.length === 0 ? null : M[0];
    }
    function J(M) {
      if (M.length === 0)
        return null;
      var j = M[0], d = M.pop();
      if (d !== j) {
        M[0] = d;
        e:
          for (var E = 0, L = M.length, X = L >>> 1; E < X; ) {
            var B = 2 * (E + 1) - 1, ae = M[B], q = B + 1, ie = M[q];
            if (0 > ue(ae, d))
              q < L && 0 > ue(ie, ae) ? (M[E] = ie, M[q] = d, E = q) : (M[E] = ae, M[B] = d, E = B);
            else if (q < L && 0 > ue(ie, d))
              M[E] = ie, M[q] = d, E = q;
            else
              break e;
          }
      }
      return j;
    }
    function ue(M, j) {
      var d = M.sortIndex - j.sortIndex;
      return d !== 0 ? d : M.id - j.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      D.unstable_now = function() {
        return h.now();
      };
    } else {
      var Ve = Date, ke = Ve.now();
      D.unstable_now = function() {
        return Ve.now() - ke;
      };
    }
    var $ = [], Re = [], _e = 1, ne = null, ce = 3, be = !1, Oe = !1, se = !1, Y = typeof setTimeout == "function" ? setTimeout : null, yn = typeof clearTimeout == "function" ? clearTimeout : null, en = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ke(M) {
      for (var j = _(Re); j !== null; ) {
        if (j.callback === null)
          J(Re);
        else if (j.startTime <= M)
          J(Re), j.sortIndex = j.expirationTime, oe($, j);
        else
          break;
        j = _(Re);
      }
    }
    function ye(M) {
      if (se = !1, Ke(M), !Oe)
        if (_($) !== null)
          Oe = !0, je(De);
        else {
          var j = _(Re);
          j !== null && me(ye, j.startTime - M);
        }
    }
    function De(M, j) {
      Oe = !1, se && (se = !1, yn(Ie), Ie = -1), be = !0;
      var d = ce;
      try {
        for (Ke(j), ne = _($); ne !== null && (!(ne.expirationTime > j) || M && !Vn()); ) {
          var E = ne.callback;
          if (typeof E == "function") {
            ne.callback = null, ce = ne.priorityLevel;
            var L = E(ne.expirationTime <= j);
            j = D.unstable_now(), typeof L == "function" ? ne.callback = L : ne === _($) && J($), Ke(j);
          } else
            J($);
          ne = _($);
        }
        if (ne !== null)
          var X = !0;
        else {
          var B = _(Re);
          B !== null && me(ye, B.startTime - j), X = !1;
        }
        return X;
      } finally {
        ne = null, ce = d, be = !1;
      }
    }
    var Fe = !1, Ee = null, Ie = -1, En = 5, xn = -1;
    function Vn() {
      return !(D.unstable_now() - xn < En);
    }
    function Cn() {
      if (Ee !== null) {
        var M = D.unstable_now();
        xn = M;
        var j = !0;
        try {
          j = Ee(!0, M);
        } finally {
          j ? Xe() : (Fe = !1, Ee = null);
        }
      } else
        Fe = !1;
    }
    var Xe;
    if (typeof en == "function")
      Xe = function() {
        en(Cn);
      };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), nn = We.port2;
      We.port1.onmessage = Cn, Xe = function() {
        nn.postMessage(null);
      };
    } else
      Xe = function() {
        Y(Cn, 0);
      };
    function je(M) {
      Ee = M, Fe || (Fe = !0, Xe());
    }
    function me(M, j) {
      Ie = Y(function() {
        M(D.unstable_now());
      }, j);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, D.unstable_continueExecution = function() {
      Oe || be || (Oe = !0, je(De));
    }, D.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : En = 0 < M ? Math.floor(1e3 / M) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, D.unstable_getFirstCallbackNode = function() {
      return _($);
    }, D.unstable_next = function(M) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = ce;
      }
      var d = ce;
      ce = j;
      try {
        return M();
      } finally {
        ce = d;
      }
    }, D.unstable_pauseExecution = function() {
    }, D.unstable_requestPaint = function() {
    }, D.unstable_runWithPriority = function(M, j) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var d = ce;
      ce = M;
      try {
        return j();
      } finally {
        ce = d;
      }
    }, D.unstable_scheduleCallback = function(M, j, d) {
      var E = D.unstable_now();
      switch (typeof d == "object" && d !== null ? (d = d.delay, d = typeof d == "number" && 0 < d ? E + d : E) : d = E, M) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = d + L, M = { id: _e++, callback: j, priorityLevel: M, startTime: d, expirationTime: L, sortIndex: -1 }, d > E ? (M.sortIndex = d, oe(Re, M), _($) === null && M === _(Re) && (se ? (yn(Ie), Ie = -1) : se = !0, me(ye, d - E))) : (M.sortIndex = L, oe($, M), Oe || be || (Oe = !0, je(De))), M;
    }, D.unstable_shouldYield = Vn, D.unstable_wrapCallback = function(M) {
      var j = ce;
      return function() {
        var d = ce;
        ce = j;
        try {
          return M.apply(this, arguments);
        } finally {
          ce = d;
        }
      };
    };
  }(zu)), zu;
}
var Xa;
function Df() {
  return Xa || (Xa = 1, Lu.exports = Of()), Lu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Ff() {
  if (Ga)
    return vn;
  Ga = 1;
  var D = Bl, oe = Df();
  function _(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var J = /* @__PURE__ */ new Set(), ue = {};
  function h(e, n) {
    Ve(e, n), Ve(e + "Capture", n);
  }
  function Ve(e, n) {
    for (ue[e] = n, e = 0; e < n.length; e++)
      J.add(n[e]);
  }
  var ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, Re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _e = {}, ne = {};
  function ce(e) {
    return $.call(ne, e) ? !0 : $.call(_e, e) ? !1 : Re.test(e) ? ne[e] = !0 : (_e[e] = !0, !1);
  }
  function be(e, n, t, r) {
    if (t !== null && t.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(e, n, t, r) {
    if (n === null || typeof n > "u" || be(e, n, t, r))
      return !0;
    if (r)
      return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function se(e, n, t, r, l, i, s) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = s;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y[e] = new se(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Y[n] = new se(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y[e] = new se(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y[e] = new se(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Y[e] = new se(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Y[e] = new se(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Y[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yn = /[\-:]([a-z])/g;
  function en(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      yn,
      en
    );
    Y[n] = new se(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(yn, en);
    Y[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(yn, en);
    Y[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Y[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ke(e, n, t, r) {
    var l = Y.hasOwnProperty(n) ? Y[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Oe(n, t, l, r) && (t = null), r || l === null ? ce(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ye = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), Fe = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), En = Symbol.for("react.profiler"), xn = Symbol.for("react.provider"), Vn = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), nn = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), M = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var d = Object.assign, E;
  function L(e) {
    if (E === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        E = n && n[1] || "";
      }
    return `
` + E + e;
  }
  var X = !1;
  function B(e, n) {
    if (!e || X)
      return "";
    X = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (w) {
            r = w;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (var l = w.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, c = i.length - 1; 1 <= s && 0 <= c && l[s] !== i[c]; )
          c--;
        for (; 1 <= s && 0 <= c; s--, c--)
          if (l[s] !== i[c]) {
            if (s !== 1 || c !== 1)
              do
                if (s--, c--, 0 > c || l[s] !== i[c]) {
                  var p = `
` + l[s].replace(" at new ", " at ");
                  return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
                }
              while (1 <= s && 0 <= c);
            break;
          }
      }
    } finally {
      X = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = B(e.type, !1), e;
      case 11:
        return e = B(e.type.render, !1), e;
      case 1:
        return e = B(e.type, !0), e;
      default:
        return "";
    }
  }
  function q(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Ee:
        return "Fragment";
      case Fe:
        return "Portal";
      case En:
        return "Profiler";
      case Ie:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Vn:
          return (e.displayName || "Context") + ".Consumer";
        case xn:
          return (e._context.displayName || "Context") + ".Provider";
        case Cn:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case nn:
          return n = e.displayName || null, n !== null ? n : q(e.type) || "Memo";
        case je:
          n = e._payload, e = e._init;
          try {
            return q(e(n));
          } catch {
          }
      }
    return null;
  }
  function ie(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return q(n);
      case 8:
        return n === Ie ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xe(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ft(e) {
    var n = xe(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, i = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(s) {
        r = "" + s, i.call(this, s);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Ne(e) {
    e._valueTracker || (e._valueTracker = Ft(e));
  }
  function Zr(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = xe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Be(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function fr(e, n) {
    var t = n.checked;
    return d({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Jr(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = te(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function $l(e, n) {
    n = n.checked, n != null && Ke(e, "checked", n, !1);
  }
  function Wn(e, n) {
    $l(e, n);
    var t = te(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? It(e, n.type, t) : n.hasOwnProperty("defaultValue") && It(e, n.type, te(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function dr(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function It(e, n, t) {
    (n !== "number" || Be(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var jt = Array.isArray;
  function Bn(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + te(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function at(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(_(91));
    return d({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ql(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(_(92));
        if (jt(t)) {
          if (1 < t.length)
            throw Error(_(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: te(t) };
  }
  function qr(e, n) {
    var t = te(n.value), r = te(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Yl(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Ut(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pr(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ut(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var At, Kl = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (At = At || document.createElement("div"), At.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = At.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Ht(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Vt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, W = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vt).forEach(function(e) {
    W.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Vt[n] = Vt[e];
    });
  });
  function mr(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Vt.hasOwnProperty(e) && Vt[e] ? ("" + n).trim() : n + "px";
  }
  function br(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = mr(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Wt = d({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function el(e, n) {
    if (n) {
      if (Wt[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(_(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(_(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(_(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(_(62));
    }
  }
  function Zn(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hr = null;
  function z(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bt = null, un = null, Jn = null;
  function nl(e) {
    if (e = Nl(e)) {
      if (typeof Bt != "function")
        throw Error(_(280));
      var n = e.stateNode;
      n && (n = ho(n), Bt(e.stateNode, e.type, n));
    }
  }
  function $t(e) {
    un ? Jn ? Jn.push(e) : Jn = [e] : un = e;
  }
  function tl() {
    if (un) {
      var e = un, n = Jn;
      if (Jn = un = null, nl(e), n)
        for (e = 0; e < n.length; e++)
          nl(n[e]);
    }
  }
  function Xl(e, n) {
    return e(n);
  }
  function rl() {
  }
  var ct = !1;
  function ll(e, n, t) {
    if (ct)
      return e(n, t);
    ct = !0;
    try {
      return Xl(e, n, t);
    } finally {
      ct = !1, (un !== null || Jn !== null) && (rl(), tl());
    }
  }
  function Qt(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = ho(t);
    if (r === null)
      return null;
    t = r[n];
    e:
      switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (t && typeof t != "function")
      throw Error(_(231, n, typeof t));
    return t;
  }
  var ol = !1;
  if (ke)
    try {
      var Yt = {};
      Object.defineProperty(Yt, "passive", { get: function() {
        ol = !0;
      } }), window.addEventListener("test", Yt, Yt), window.removeEventListener("test", Yt, Yt);
    } catch {
      ol = !1;
    }
  function il(e, n, t, r, l, i, s, c, p) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, w);
    } catch (C) {
      this.onError(C);
    }
  }
  var ft = !1, dt = null, sn = !1, pt = null, ul = { onError: function(e) {
    ft = !0, dt = e;
  } };
  function ei(e, n, t, r, l, i, s, c, p) {
    ft = !1, dt = null, il.apply(ul, arguments);
  }
  function mt(e, n, t, r, l, i, s, c, p) {
    if (ei.apply(this, arguments), ft) {
      if (ft) {
        var w = dt;
        ft = !1, dt = null;
      } else
        throw Error(_(198));
      sn || (sn = !0, pt = w);
    }
  }
  function $n(e) {
    var n = e, t = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function sl(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function vr(e) {
    if ($n(e) !== e)
      throw Error(_(188));
  }
  function ni(e) {
    var n = e.alternate;
    if (!n) {
      if (n = $n(e), n === null)
        throw Error(_(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === t)
            return vr(l), e;
          if (i === r)
            return vr(l), n;
          i = i.sibling;
        }
        throw Error(_(188));
      }
      if (t.return !== r.return)
        t = l, r = i;
      else {
        for (var s = !1, c = l.child; c; ) {
          if (c === t) {
            s = !0, t = l, r = i;
            break;
          }
          if (c === r) {
            s = !0, r = l, t = i;
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = i.child; c; ) {
            if (c === t) {
              s = !0, t = i, r = l;
              break;
            }
            if (c === r) {
              s = !0, r = i, t = l;
              break;
            }
            c = c.sibling;
          }
          if (!s)
            throw Error(_(189));
        }
      }
      if (t.alternate !== r)
        throw Error(_(190));
    }
    if (t.tag !== 3)
      throw Error(_(188));
    return t.stateNode.current === t ? e : n;
  }
  function al(e) {
    return e = ni(e), e !== null ? cl(e) : null;
  }
  function cl(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = cl(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Gl = oe.unstable_scheduleCallback, ht = oe.unstable_cancelCallback, fl = oe.unstable_shouldYield, qn = oe.unstable_requestPaint, de = oe.unstable_now, yr = oe.unstable_getCurrentPriorityLevel, bn = oe.unstable_ImmediatePriority, et = oe.unstable_UserBlockingPriority, On = oe.unstable_NormalPriority, Zl = oe.unstable_LowPriority, gr = oe.unstable_IdlePriority, Kt = null, an = null;
  function wr(e) {
    if (an && typeof an.onCommitFiberRoot == "function")
      try {
        an.onCommitFiberRoot(Kt, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var tn = Math.clz32 ? Math.clz32 : _r, Sr = Math.log, kr = Math.LN2;
  function _r(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sr(e) / kr | 0) | 0;
  }
  var Er = 64, Xt = 4194304;
  function vt(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function xr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = t & 268435455;
    if (s !== 0) {
      var c = s & ~l;
      c !== 0 ? r = vt(c) : (i &= s, i !== 0 && (r = vt(i)));
    } else
      s = t & ~l, s !== 0 ? r = vt(s) : i !== 0 && (r = vt(i));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, i = n & -n, l >= i || l === 16 && (i & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - tn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Jl(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ql(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var s = 31 - tn(i), c = 1 << s, p = l[s];
      p === -1 ? (!(c & t) || c & r) && (l[s] = Jl(c, n)) : p <= n && (e.expiredLanes |= c), i &= ~c;
    }
  }
  function Cr(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function dl() {
    var e = Er;
    return Er <<= 1, !(Er & 4194240) && (Er = 64), e;
  }
  function Gt(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function yt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - tn(n), e[n] = t;
  }
  function bl(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - tn(t), i = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~i;
    }
  }
  function Zt(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - tn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var re = 0;
  function Jt(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Pr, pl, eo, no, to, ml = !1, Nr = [], cn = null, Qn = null, Dn = null, qt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), gn = [], o = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function u(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Dn = null;
        break;
      case "pointerover":
      case "pointerout":
        qt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gt.delete(n.pointerId);
    }
  }
  function a(e, n, t, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, n !== null && (n = Nl(n), n !== null && pl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function f(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return cn = a(cn, e, n, t, r, l), !0;
      case "dragenter":
        return Qn = a(Qn, e, n, t, r, l), !0;
      case "mouseover":
        return Dn = a(Dn, e, n, t, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return qt.set(i, a(qt.get(i) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, gt.set(i, a(gt.get(i) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function g(e) {
    var n = bt(e.target);
    if (n !== null) {
      var t = $n(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = sl(t), n !== null) {
            e.blockedOn = n, to(e.priority, function() {
              eo(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function S(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = rn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        hr = r, t.target.dispatchEvent(r), hr = null;
      } else
        return n = Nl(t), n !== null && pl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function F(e, n, t) {
    S(e) && t.delete(n);
  }
  function G() {
    ml = !1, cn !== null && S(cn) && (cn = null), Qn !== null && S(Qn) && (Qn = null), Dn !== null && S(Dn) && (Dn = null), qt.forEach(F), gt.forEach(F);
  }
  function Ce(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ml || (ml = !0, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, G)));
  }
  function Q(e) {
    function n(l) {
      return Ce(l, e);
    }
    if (0 < Nr.length) {
      Ce(Nr[0], e);
      for (var t = 1; t < Nr.length; t++) {
        var r = Nr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (cn !== null && Ce(cn, e), Qn !== null && Ce(Qn, e), Dn !== null && Ce(Dn, e), qt.forEach(n), gt.forEach(n), t = 0; t < gn.length; t++)
      r = gn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gn.length && (t = gn[0], t.blockedOn === null); )
      g(t), t.blockedOn === null && gn.shift();
  }
  var b = ye.ReactCurrentBatchConfig, $e = !0;
  function wt(e, n, t, r) {
    var l = re, i = b.transition;
    b.transition = null;
    try {
      re = 1, K(e, n, t, r);
    } finally {
      re = l, b.transition = i;
    }
  }
  function k(e, n, t, r) {
    var l = re, i = b.transition;
    b.transition = null;
    try {
      re = 4, K(e, n, t, r);
    } finally {
      re = l, b.transition = i;
    }
  }
  function K(e, n, t, r) {
    if ($e) {
      var l = rn(e, n, t, r);
      if (l === null)
        gi(e, n, r, fe, t), u(e, r);
      else if (f(l, e, n, t, r))
        r.stopPropagation();
      else if (u(e, r), n & 4 && -1 < o.indexOf(e)) {
        for (; l !== null; ) {
          var i = Nl(l);
          if (i !== null && Pr(i), i = rn(e, n, t, r), i === null && gi(e, n, r, fe, t), i === l)
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else
        gi(e, n, r, null, t);
    }
  }
  var fe = null;
  function rn(e, n, t, r) {
    if (fe = null, e = z(r), e = bt(e), e !== null)
      if (n = $n(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = sl(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return fe = e, null;
  }
  function hl(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (yr()) {
          case bn:
            return 1;
          case et:
            return 4;
          case On:
          case Zl:
            return 16;
          case gr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var St = null, ti = null, ro = null;
  function Tu() {
    if (ro)
      return ro;
    var e, n = ti, t = n.length, r, l = "value" in St ? St.value : St.textContent, i = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var s = t - e;
    for (r = 1; r <= s && n[t - r] === l[i - r]; r++)
      ;
    return ro = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function lo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function oo() {
    return !0;
  }
  function Ru() {
    return !1;
  }
  function wn(e) {
    function n(t, r, l, i, s) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var c in e)
        e.hasOwnProperty(c) && (t = e[c], this[c] = t ? t(i) : i[c]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? oo : Ru, this.isPropagationStopped = Ru, this;
    }
    return d(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = oo);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = oo);
    }, persist: function() {
    }, isPersistent: oo }), n;
  }
  var Lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ri = wn(Lr), vl = d({}, Lr, { view: 0, detail: 0 }), nc = wn(vl), li, oi, yl, io = d({}, vl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ui, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== yl && (yl && e.type === "mousemove" ? (li = e.screenX - yl.screenX, oi = e.screenY - yl.screenY) : oi = li = 0, yl = e), li);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : oi;
  } }), Ou = wn(io), tc = d({}, io, { dataTransfer: 0 }), rc = wn(tc), lc = d({}, vl, { relatedTarget: 0 }), ii = wn(lc), oc = d({}, Lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ic = wn(oc), uc = d({}, Lr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sc = wn(uc), ac = d({}, Lr, { data: 0 }), Du = wn(ac), cc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, fc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, dc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = dc[e]) ? !!n[e] : !1;
  }
  function ui() {
    return pc;
  }
  var mc = d({}, vl, { key: function(e) {
    if (e.key) {
      var n = cc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ui, charCode: function(e) {
    return e.type === "keypress" ? lo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), hc = wn(mc), vc = d({}, io, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fu = wn(vc), yc = d({}, vl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ui }), gc = wn(yc), wc = d({}, Lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = wn(wc), kc = d({}, io, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _c = wn(kc), Ec = [9, 13, 27, 32], si = ke && "CompositionEvent" in window, gl = null;
  ke && "documentMode" in document && (gl = document.documentMode);
  var xc = ke && "TextEvent" in window && !gl, Iu = ke && (!si || gl && 8 < gl && 11 >= gl), ju = String.fromCharCode(32), Uu = !1;
  function Au(e, n) {
    switch (e) {
      case "keyup":
        return Ec.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zr = !1;
  function Cc(e, n) {
    switch (e) {
      case "compositionend":
        return Hu(n);
      case "keypress":
        return n.which !== 32 ? null : (Uu = !0, ju);
      case "textInput":
        return e = n.data, e === ju && Uu ? null : e;
      default:
        return null;
    }
  }
  function Pc(e, n) {
    if (zr)
      return e === "compositionend" || !si && Au(e, n) ? (e = Tu(), ro = ti = St = null, zr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Iu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Nc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Vu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Nc[e.type] : n === "textarea";
  }
  function Wu(e, n, t, r) {
    $t(r), n = fo(n, "onChange"), 0 < n.length && (t = new ri("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var wl = null, Sl = null;
  function Lc(e) {
    is(e, 0);
  }
  function uo(e) {
    var n = Dr(e);
    if (Zr(n))
      return e;
  }
  function zc(e, n) {
    if (e === "change")
      return n;
  }
  var Bu = !1;
  if (ke) {
    var ai;
    if (ke) {
      var ci = "oninput" in document;
      if (!ci) {
        var $u = document.createElement("div");
        $u.setAttribute("oninput", "return;"), ci = typeof $u.oninput == "function";
      }
      ai = ci;
    } else
      ai = !1;
    Bu = ai && (!document.documentMode || 9 < document.documentMode);
  }
  function Qu() {
    wl && (wl.detachEvent("onpropertychange", Yu), Sl = wl = null);
  }
  function Yu(e) {
    if (e.propertyName === "value" && uo(Sl)) {
      var n = [];
      Wu(n, Sl, e, z(e)), ll(Lc, n);
    }
  }
  function Mc(e, n, t) {
    e === "focusin" ? (Qu(), wl = n, Sl = t, wl.attachEvent("onpropertychange", Yu)) : e === "focusout" && Qu();
  }
  function Tc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return uo(Sl);
  }
  function Rc(e, n) {
    if (e === "click")
      return uo(n);
  }
  function Oc(e, n) {
    if (e === "input" || e === "change")
      return uo(n);
  }
  function Dc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Fn = typeof Object.is == "function" ? Object.is : Dc;
  function kl(e, n) {
    if (Fn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!$.call(n, l) || !Fn(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function Ku(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Xu(e, n) {
    var t = Ku(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n)
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ku(t);
    }
  }
  function Gu(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Gu(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Zu() {
    for (var e = window, n = Be(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = Be(e.document);
    }
    return n;
  }
  function fi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Fc(e) {
    var n = Zu(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Gu(t.ownerDocument.documentElement, t)) {
      if (r !== null && fi(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Xu(t, i);
          var s = Xu(
            t,
            r
          );
          l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(s.node, s.offset)) : (n.setEnd(s.node, s.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ic = ke && "documentMode" in document && 11 >= document.documentMode, Mr = null, di = null, _l = null, pi = !1;
  function Ju(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    pi || Mr == null || Mr !== Be(r) || (r = Mr, "selectionStart" in r && fi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _l && kl(_l, r) || (_l = r, r = fo(di, "onSelect"), 0 < r.length && (n = new ri("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Mr)));
  }
  function so(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var Tr = { animationend: so("Animation", "AnimationEnd"), animationiteration: so("Animation", "AnimationIteration"), animationstart: so("Animation", "AnimationStart"), transitionend: so("Transition", "TransitionEnd") }, mi = {}, qu = {};
  ke && (qu = document.createElement("div").style, "AnimationEvent" in window || (delete Tr.animationend.animation, delete Tr.animationiteration.animation, delete Tr.animationstart.animation), "TransitionEvent" in window || delete Tr.transitionend.transition);
  function ao(e) {
    if (mi[e])
      return mi[e];
    if (!Tr[e])
      return e;
    var n = Tr[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in qu)
        return mi[e] = n[t];
    return e;
  }
  var bu = ao("animationend"), es = ao("animationiteration"), ns = ao("animationstart"), ts = ao("transitionend"), rs = /* @__PURE__ */ new Map(), ls = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function kt(e, n) {
    rs.set(e, n), h(n, [e]);
  }
  for (var hi = 0; hi < ls.length; hi++) {
    var vi = ls[hi], jc = vi.toLowerCase(), Uc = vi[0].toUpperCase() + vi.slice(1);
    kt(jc, "on" + Uc);
  }
  kt(bu, "onAnimationEnd"), kt(es, "onAnimationIteration"), kt(ns, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(ts, "onTransitionEnd"), Ve("onMouseEnter", ["mouseout", "mouseover"]), Ve("onMouseLeave", ["mouseout", "mouseover"]), Ve("onPointerEnter", ["pointerout", "pointerover"]), Ve("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var El = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ac = new Set("cancel close invalid load scroll toggle".split(" ").concat(El));
  function os(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, mt(r, n, void 0, e), e.currentTarget = null;
  }
  function is(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (n)
          for (var s = r.length - 1; 0 <= s; s--) {
            var c = r[s], p = c.instance, w = c.currentTarget;
            if (c = c.listener, p !== i && l.isPropagationStopped())
              break e;
            os(l, c, w), i = p;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (c = r[s], p = c.instance, w = c.currentTarget, c = c.listener, p !== i && l.isPropagationStopped())
              break e;
            os(l, c, w), i = p;
          }
      }
    }
    if (sn)
      throw e = pt, sn = !1, pt = null, e;
  }
  function he(e, n) {
    var t = n[xi];
    t === void 0 && (t = n[xi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (us(n, e, 2, !1), t.add(r));
  }
  function yi(e, n, t) {
    var r = 0;
    n && (r |= 4), us(t, e, r, n);
  }
  var co = "_reactListening" + Math.random().toString(36).slice(2);
  function xl(e) {
    if (!e[co]) {
      e[co] = !0, J.forEach(function(t) {
        t !== "selectionchange" && (Ac.has(t) || yi(t, !1, e), yi(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[co] || (n[co] = !0, yi("selectionchange", !1, n));
    }
  }
  function us(e, n, t, r) {
    switch (hl(n)) {
      case 1:
        var l = wt;
        break;
      case 4:
        l = k;
        break;
      default:
        l = K;
    }
    t = l.bind(null, n, t, e), l = void 0, !ol || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function gi(e, n, t, r, l) {
    var i = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === l || c.nodeType === 8 && c.parentNode === l)
              break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var p = s.tag;
                if ((p === 3 || p === 4) && (p = s.stateNode.containerInfo, p === l || p.nodeType === 8 && p.parentNode === l))
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (s = bt(c), s === null)
                return;
              if (p = s.tag, p === 5 || p === 6) {
                r = i = s;
                continue e;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
    ll(function() {
      var w = i, C = z(t), P = [];
      e: {
        var x = rs.get(e);
        if (x !== void 0) {
          var T = ri, O = e;
          switch (e) {
            case "keypress":
              if (lo(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              T = hc;
              break;
            case "focusin":
              O = "focus", T = ii;
              break;
            case "focusout":
              O = "blur", T = ii;
              break;
            case "beforeblur":
            case "afterblur":
              T = ii;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Ou;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = rc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = gc;
              break;
            case bu:
            case es:
            case ns:
              T = ic;
              break;
            case ts:
              T = Sc;
              break;
            case "scroll":
              T = nc;
              break;
            case "wheel":
              T = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = sc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Fu;
          }
          var I = (n & 4) !== 0, Le = !I && e === "scroll", v = I ? x !== null ? x + "Capture" : null : x;
          I = [];
          for (var m = w, y; m !== null; ) {
            y = m;
            var N = y.stateNode;
            if (y.tag === 5 && N !== null && (y = N, v !== null && (N = Qt(m, v), N != null && I.push(Cl(m, N, y)))), Le)
              break;
            m = m.return;
          }
          0 < I.length && (x = new T(x, O, null, t, C), P.push({ event: x, listeners: I }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", x && t !== hr && (O = t.relatedTarget || t.fromElement) && (bt(O) || O[nt]))
            break e;
          if ((T || x) && (x = C.window === C ? C : (x = C.ownerDocument) ? x.defaultView || x.parentWindow : window, T ? (O = t.relatedTarget || t.toElement, T = w, O = O ? bt(O) : null, O !== null && (Le = $n(O), O !== Le || O.tag !== 5 && O.tag !== 6) && (O = null)) : (T = null, O = w), T !== O)) {
            if (I = Ou, N = "onMouseLeave", v = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (I = Fu, N = "onPointerLeave", v = "onPointerEnter", m = "pointer"), Le = T == null ? x : Dr(T), y = O == null ? x : Dr(O), x = new I(N, m + "leave", T, t, C), x.target = Le, x.relatedTarget = y, N = null, bt(C) === w && (I = new I(v, m + "enter", O, t, C), I.target = y, I.relatedTarget = Le, N = I), Le = N, T && O)
              n: {
                for (I = T, v = O, m = 0, y = I; y; y = Rr(y))
                  m++;
                for (y = 0, N = v; N; N = Rr(N))
                  y++;
                for (; 0 < m - y; )
                  I = Rr(I), m--;
                for (; 0 < y - m; )
                  v = Rr(v), y--;
                for (; m--; ) {
                  if (I === v || v !== null && I === v.alternate)
                    break n;
                  I = Rr(I), v = Rr(v);
                }
                I = null;
              }
            else
              I = null;
            T !== null && ss(P, x, T, I, !1), O !== null && Le !== null && ss(P, Le, O, I, !0);
          }
        }
        e: {
          if (x = w ? Dr(w) : window, T = x.nodeName && x.nodeName.toLowerCase(), T === "select" || T === "input" && x.type === "file")
            var U = zc;
          else if (Vu(x))
            if (Bu)
              U = Oc;
            else {
              U = Tc;
              var A = Mc;
            }
          else
            (T = x.nodeName) && T.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (U = Rc);
          if (U && (U = U(e, w))) {
            Wu(P, U, t, C);
            break e;
          }
          A && A(e, x, w), e === "focusout" && (A = x._wrapperState) && A.controlled && x.type === "number" && It(x, "number", x.value);
        }
        switch (A = w ? Dr(w) : window, e) {
          case "focusin":
            (Vu(A) || A.contentEditable === "true") && (Mr = A, di = w, _l = null);
            break;
          case "focusout":
            _l = di = Mr = null;
            break;
          case "mousedown":
            pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pi = !1, Ju(P, t, C);
            break;
          case "selectionchange":
            if (Ic)
              break;
          case "keydown":
          case "keyup":
            Ju(P, t, C);
        }
        var H;
        if (si)
          e: {
            switch (e) {
              case "compositionstart":
                var V = "onCompositionStart";
                break e;
              case "compositionend":
                V = "onCompositionEnd";
                break e;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break e;
            }
            V = void 0;
          }
        else
          zr ? Au(e, t) && (V = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (V = "onCompositionStart");
        V && (Iu && t.locale !== "ko" && (zr || V !== "onCompositionStart" ? V === "onCompositionEnd" && zr && (H = Tu()) : (St = C, ti = "value" in St ? St.value : St.textContent, zr = !0)), A = fo(w, V), 0 < A.length && (V = new Du(V, e, null, t, C), P.push({ event: V, listeners: A }), H ? V.data = H : (H = Hu(t), H !== null && (V.data = H)))), (H = xc ? Cc(e, t) : Pc(e, t)) && (w = fo(w, "onBeforeInput"), 0 < w.length && (C = new Du("onBeforeInput", "beforeinput", null, t, C), P.push({ event: C, listeners: w }), C.data = H));
      }
      is(P, n);
    });
  }
  function Cl(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function fo(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Qt(e, t), i != null && r.unshift(Cl(e, i, l)), i = Qt(e, n), i != null && r.push(Cl(e, i, l))), e = e.return;
    }
    return r;
  }
  function Rr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ss(e, n, t, r, l) {
    for (var i = n._reactName, s = []; t !== null && t !== r; ) {
      var c = t, p = c.alternate, w = c.stateNode;
      if (p !== null && p === r)
        break;
      c.tag === 5 && w !== null && (c = w, l ? (p = Qt(t, i), p != null && s.unshift(Cl(t, p, c))) : l || (p = Qt(t, i), p != null && s.push(Cl(t, p, c)))), t = t.return;
    }
    s.length !== 0 && e.push({ event: n, listeners: s });
  }
  var Hc = /\r\n?/g, Vc = /\u0000|\uFFFD/g;
  function as(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hc, `
`).replace(Vc, "");
  }
  function po(e, n, t) {
    if (n = as(n), as(e) !== n && t)
      throw Error(_(425));
  }
  function mo() {
  }
  var wi = null, Si = null;
  function ki(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var _i = typeof setTimeout == "function" ? setTimeout : void 0, Wc = typeof clearTimeout == "function" ? clearTimeout : void 0, cs = typeof Promise == "function" ? Promise : void 0, Bc = typeof queueMicrotask == "function" ? queueMicrotask : typeof cs < "u" ? function(e) {
    return cs.resolve(null).then(e).catch($c);
  } : _i;
  function $c(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ei(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Q(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Q(n);
  }
  function _t(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function fs(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Or = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + Or, Pl = "__reactProps$" + Or, nt = "__reactContainer$" + Or, xi = "__reactEvents$" + Or, Qc = "__reactListeners$" + Or, Yc = "__reactHandles$" + Or;
  function bt(e) {
    var n = e[Yn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[nt] || t[Yn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = fs(e); e !== null; ) {
            if (t = e[Yn])
              return t;
            e = fs(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Nl(e) {
    return e = e[Yn] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Dr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(_(33));
  }
  function ho(e) {
    return e[Pl] || null;
  }
  var Ci = [], Fr = -1;
  function Et(e) {
    return { current: e };
  }
  function ve(e) {
    0 > Fr || (e.current = Ci[Fr], Ci[Fr] = null, Fr--);
  }
  function pe(e, n) {
    Fr++, Ci[Fr] = e.current, e.current = n;
  }
  var xt = {}, Ge = Et(xt), fn = Et(!1), er = xt;
  function Ir(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in t)
      l[i] = n[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function dn(e) {
    return e = e.childContextTypes, e != null;
  }
  function vo() {
    ve(fn), ve(Ge);
  }
  function ds(e, n, t) {
    if (Ge.current !== xt)
      throw Error(_(168));
    pe(Ge, n), pe(fn, t);
  }
  function ps(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(_(108, ie(e) || "Unknown", l));
    return d({}, t, r);
  }
  function yo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, er = Ge.current, pe(Ge, e), pe(fn, fn.current), !0;
  }
  function ms(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(_(169));
    t ? (e = ps(e, n, er), r.__reactInternalMemoizedMergedChildContext = e, ve(fn), ve(Ge), pe(Ge, e)) : ve(fn), pe(fn, t);
  }
  var tt = null, go = !1, Pi = !1;
  function hs(e) {
    tt === null ? tt = [e] : tt.push(e);
  }
  function Kc(e) {
    go = !0, hs(e);
  }
  function Ct() {
    if (!Pi && tt !== null) {
      Pi = !0;
      var e = 0, n = re;
      try {
        var t = tt;
        for (re = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        tt = null, go = !1;
      } catch (l) {
        throw tt !== null && (tt = tt.slice(e + 1)), Gl(bn, Ct), l;
      } finally {
        re = n, Pi = !1;
      }
    }
    return null;
  }
  var jr = [], Ur = 0, wo = null, So = 0, Pn = [], Nn = 0, nr = null, rt = 1, lt = "";
  function tr(e, n) {
    jr[Ur++] = So, jr[Ur++] = wo, wo = e, So = n;
  }
  function vs(e, n, t) {
    Pn[Nn++] = rt, Pn[Nn++] = lt, Pn[Nn++] = nr, nr = e;
    var r = rt;
    e = lt;
    var l = 32 - tn(r) - 1;
    r &= ~(1 << l), t += 1;
    var i = 32 - tn(n) + l;
    if (30 < i) {
      var s = l - l % 5;
      i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, rt = 1 << 32 - tn(n) + l | t << l | r, lt = i + e;
    } else
      rt = 1 << i | t << l | r, lt = e;
  }
  function Ni(e) {
    e.return !== null && (tr(e, 1), vs(e, 1, 0));
  }
  function Li(e) {
    for (; e === wo; )
      wo = jr[--Ur], jr[Ur] = null, So = jr[--Ur], jr[Ur] = null;
    for (; e === nr; )
      nr = Pn[--Nn], Pn[Nn] = null, lt = Pn[--Nn], Pn[Nn] = null, rt = Pn[--Nn], Pn[Nn] = null;
  }
  var Sn = null, kn = null, ge = !1, In = null;
  function ys(e, n) {
    var t = Tn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function gs(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Sn = e, kn = _t(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Sn = e, kn = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = nr !== null ? { id: rt, overflow: lt } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Tn(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Sn = e, kn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Mi(e) {
    if (ge) {
      var n = kn;
      if (n) {
        var t = n;
        if (!gs(e, n)) {
          if (zi(e))
            throw Error(_(418));
          n = _t(t.nextSibling);
          var r = Sn;
          n && gs(e, n) ? ys(r, t) : (e.flags = e.flags & -4097 | 2, ge = !1, Sn = e);
        }
      } else {
        if (zi(e))
          throw Error(_(418));
        e.flags = e.flags & -4097 | 2, ge = !1, Sn = e;
      }
    }
  }
  function ws(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Sn = e;
  }
  function ko(e) {
    if (e !== Sn)
      return !1;
    if (!ge)
      return ws(e), ge = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !ki(e.type, e.memoizedProps)), n && (n = kn)) {
      if (zi(e))
        throw Ss(), Error(_(418));
      for (; n; )
        ys(e, n), n = _t(n.nextSibling);
    }
    if (ws(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(_(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                kn = _t(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        kn = null;
      }
    } else
      kn = Sn ? _t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ss() {
    for (var e = kn; e; )
      e = _t(e.nextSibling);
  }
  function Ar() {
    kn = Sn = null, ge = !1;
  }
  function Ti(e) {
    In === null ? In = [e] : In.push(e);
  }
  var Xc = ye.ReactCurrentBatchConfig;
  function jn(e, n) {
    if (e && e.defaultProps) {
      n = d({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var _o = Et(null), Eo = null, Hr = null, Ri = null;
  function Oi() {
    Ri = Hr = Eo = null;
  }
  function Di(e) {
    var n = _o.current;
    ve(_o), e._currentValue = n;
  }
  function Fi(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function Vr(e, n) {
    Eo = e, Ri = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (pn = !0), e.firstContext = null);
  }
  function Ln(e) {
    var n = e._currentValue;
    if (Ri !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Hr === null) {
        if (Eo === null)
          throw Error(_(308));
        Hr = e, Eo.dependencies = { lanes: 0, firstContext: e };
      } else
        Hr = Hr.next = e;
    return n;
  }
  var rr = null;
  function Ii(e) {
    rr === null ? rr = [e] : rr.push(e);
  }
  function ks(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Ii(n)) : (t.next = l.next, l.next = t), n.interleaved = t, ot(e, r);
  }
  function ot(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Pt = !1;
  function ji(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function _s(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function it(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Nt(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, ee & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, ot(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Ii(r)) : (n.next = l.next, l.next = n), r.interleaved = n, ot(e, t);
  }
  function xo(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Zt(e, t);
    }
  }
  function Es(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, i = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var s = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          i === null ? l = i = s : i = i.next = s, t = t.next;
        } while (t !== null);
        i === null ? l = i = n : i = i.next = n;
      } else
        l = i = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Co(e, n, t, r) {
    var l = e.updateQueue;
    Pt = !1;
    var i = l.firstBaseUpdate, s = l.lastBaseUpdate, c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var p = c, w = p.next;
      p.next = null, s === null ? i = w : s.next = w, s = p;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, c = C.lastBaseUpdate, c !== s && (c === null ? C.firstBaseUpdate = w : c.next = w, C.lastBaseUpdate = p));
    }
    if (i !== null) {
      var P = l.baseState;
      s = 0, C = w = p = null, c = i;
      do {
        var x = c.lane, T = c.eventTime;
        if ((r & x) === x) {
          C !== null && (C = C.next = {
            eventTime: T,
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          });
          e: {
            var O = e, I = c;
            switch (x = n, T = t, I.tag) {
              case 1:
                if (O = I.payload, typeof O == "function") {
                  P = O.call(T, P, x);
                  break e;
                }
                P = O;
                break e;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = I.payload, x = typeof O == "function" ? O.call(T, P, x) : O, x == null)
                  break e;
                P = d({}, P, x);
                break e;
              case 2:
                Pt = !0;
            }
          }
          c.callback !== null && c.lane !== 0 && (e.flags |= 64, x = l.effects, x === null ? l.effects = [c] : x.push(c));
        } else
          T = { eventTime: T, lane: x, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, C === null ? (w = C = T, p = P) : C = C.next = T, s |= x;
        if (c = c.next, c === null) {
          if (c = l.shared.pending, c === null)
            break;
          x = c, c = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
        }
      } while (1);
      if (C === null && (p = P), l.baseState = p, l.firstBaseUpdate = w, l.lastBaseUpdate = C, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          s |= l.lane, l = l.next;
        while (l !== n);
      } else
        i === null && (l.shared.lanes = 0);
      ir |= s, e.lanes = s, e.memoizedState = P;
    }
  }
  function xs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(_(191, l));
          l.call(r);
        }
      }
  }
  var Cs = new D.Component().refs;
  function Ui(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : d({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Po = { isMounted: function(e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = on(), l = Tt(e), i = it(r, l);
    i.payload = n, t != null && (i.callback = t), n = Nt(e, i, l), n !== null && (Hn(n, e, l, r), xo(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = on(), l = Tt(e), i = it(r, l);
    i.tag = 1, i.payload = n, t != null && (i.callback = t), n = Nt(e, i, l), n !== null && (Hn(n, e, l, r), xo(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = on(), r = Tt(e), l = it(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Nt(e, l, r), n !== null && (Hn(n, e, r, t), xo(n, e, r));
  } };
  function Ps(e, n, t, r, l, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : n.prototype && n.prototype.isPureReactComponent ? !kl(t, r) || !kl(l, i) : !0;
  }
  function Ns(e, n, t) {
    var r = !1, l = xt, i = n.contextType;
    return typeof i == "object" && i !== null ? i = Ln(i) : (l = dn(n) ? er : Ge.current, r = n.contextTypes, i = (r = r != null) ? Ir(e, l) : xt), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Po, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n;
  }
  function Ls(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Po.enqueueReplaceState(n, n.state, null);
  }
  function Ai(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = Cs, ji(e);
    var i = n.contextType;
    typeof i == "object" && i !== null ? l.context = Ln(i) : (i = dn(n) ? er : Ge.current, l.context = Ir(e, i)), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (Ui(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Po.enqueueReplaceState(l, l.state, null), Co(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ll(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(_(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(_(147, e));
        var l = r, i = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i ? n.ref : (n = function(s) {
          var c = l.refs;
          c === Cs && (c = l.refs = {}), s === null ? delete c[i] : c[i] = s;
        }, n._stringRef = i, n);
      }
      if (typeof e != "string")
        throw Error(_(284));
      if (!t._owner)
        throw Error(_(290, e));
    }
    return e;
  }
  function No(e, n) {
    throw e = Object.prototype.toString.call(n), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function zs(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Ms(e) {
    function n(v, m) {
      if (e) {
        var y = v.deletions;
        y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
      }
    }
    function t(v, m) {
      if (!e)
        return null;
      for (; m !== null; )
        n(v, m), m = m.sibling;
      return null;
    }
    function r(v, m) {
      for (v = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
      return v;
    }
    function l(v, m) {
      return v = Ot(v, m), v.index = 0, v.sibling = null, v;
    }
    function i(v, m, y) {
      return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 2, m) : y) : (v.flags |= 2, m)) : (v.flags |= 1048576, m);
    }
    function s(v) {
      return e && v.alternate === null && (v.flags |= 2), v;
    }
    function c(v, m, y, N) {
      return m === null || m.tag !== 6 ? (m = _u(y, v.mode, N), m.return = v, m) : (m = l(m, y), m.return = v, m);
    }
    function p(v, m, y, N) {
      var U = y.type;
      return U === Ee ? C(v, m, y.props.children, N, y.key) : m !== null && (m.elementType === U || typeof U == "object" && U !== null && U.$$typeof === je && zs(U) === m.type) ? (N = l(m, y.props), N.ref = Ll(v, m, y), N.return = v, N) : (N = Yo(y.type, y.key, y.props, null, v.mode, N), N.ref = Ll(v, m, y), N.return = v, N);
    }
    function w(v, m, y, N) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Eu(y, v.mode, N), m.return = v, m) : (m = l(m, y.children || []), m.return = v, m);
    }
    function C(v, m, y, N, U) {
      return m === null || m.tag !== 7 ? (m = cr(y, v.mode, N, U), m.return = v, m) : (m = l(m, y), m.return = v, m);
    }
    function P(v, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return m = _u("" + m, v.mode, y), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case De:
            return y = Yo(m.type, m.key, m.props, null, v.mode, y), y.ref = Ll(v, null, m), y.return = v, y;
          case Fe:
            return m = Eu(m, v.mode, y), m.return = v, m;
          case je:
            var N = m._init;
            return P(v, N(m._payload), y);
        }
        if (jt(m) || j(m))
          return m = cr(m, v.mode, y, null), m.return = v, m;
        No(v, m);
      }
      return null;
    }
    function x(v, m, y, N) {
      var U = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number")
        return U !== null ? null : c(v, m, "" + y, N);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case De:
            return y.key === U ? p(v, m, y, N) : null;
          case Fe:
            return y.key === U ? w(v, m, y, N) : null;
          case je:
            return U = y._init, x(
              v,
              m,
              U(y._payload),
              N
            );
        }
        if (jt(y) || j(y))
          return U !== null ? null : C(v, m, y, N, null);
        No(v, y);
      }
      return null;
    }
    function T(v, m, y, N, U) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return v = v.get(y) || null, c(m, v, "" + N, U);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case De:
            return v = v.get(N.key === null ? y : N.key) || null, p(m, v, N, U);
          case Fe:
            return v = v.get(N.key === null ? y : N.key) || null, w(m, v, N, U);
          case je:
            var A = N._init;
            return T(v, m, y, A(N._payload), U);
        }
        if (jt(N) || j(N))
          return v = v.get(y) || null, C(m, v, N, U, null);
        No(m, N);
      }
      return null;
    }
    function O(v, m, y, N) {
      for (var U = null, A = null, H = m, V = m = 0, He = null; H !== null && V < y.length; V++) {
        H.index > V ? (He = H, H = null) : He = H.sibling;
        var le = x(v, H, y[V], N);
        if (le === null) {
          H === null && (H = He);
          break;
        }
        e && H && le.alternate === null && n(v, H), m = i(le, m, V), A === null ? U = le : A.sibling = le, A = le, H = He;
      }
      if (V === y.length)
        return t(v, H), ge && tr(v, V), U;
      if (H === null) {
        for (; V < y.length; V++)
          H = P(v, y[V], N), H !== null && (m = i(H, m, V), A === null ? U = H : A.sibling = H, A = H);
        return ge && tr(v, V), U;
      }
      for (H = r(v, H); V < y.length; V++)
        He = T(H, v, V, y[V], N), He !== null && (e && He.alternate !== null && H.delete(He.key === null ? V : He.key), m = i(He, m, V), A === null ? U = He : A.sibling = He, A = He);
      return e && H.forEach(function(Dt) {
        return n(v, Dt);
      }), ge && tr(v, V), U;
    }
    function I(v, m, y, N) {
      var U = j(y);
      if (typeof U != "function")
        throw Error(_(150));
      if (y = U.call(y), y == null)
        throw Error(_(151));
      for (var A = U = null, H = m, V = m = 0, He = null, le = y.next(); H !== null && !le.done; V++, le = y.next()) {
        H.index > V ? (He = H, H = null) : He = H.sibling;
        var Dt = x(v, H, le.value, N);
        if (Dt === null) {
          H === null && (H = He);
          break;
        }
        e && H && Dt.alternate === null && n(v, H), m = i(Dt, m, V), A === null ? U = Dt : A.sibling = Dt, A = Dt, H = He;
      }
      if (le.done)
        return t(
          v,
          H
        ), ge && tr(v, V), U;
      if (H === null) {
        for (; !le.done; V++, le = y.next())
          le = P(v, le.value, N), le !== null && (m = i(le, m, V), A === null ? U = le : A.sibling = le, A = le);
        return ge && tr(v, V), U;
      }
      for (H = r(v, H); !le.done; V++, le = y.next())
        le = T(H, v, V, le.value, N), le !== null && (e && le.alternate !== null && H.delete(le.key === null ? V : le.key), m = i(le, m, V), A === null ? U = le : A.sibling = le, A = le);
      return e && H.forEach(function(Lf) {
        return n(v, Lf);
      }), ge && tr(v, V), U;
    }
    function Le(v, m, y, N) {
      if (typeof y == "object" && y !== null && y.type === Ee && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case De:
            e: {
              for (var U = y.key, A = m; A !== null; ) {
                if (A.key === U) {
                  if (U = y.type, U === Ee) {
                    if (A.tag === 7) {
                      t(v, A.sibling), m = l(A, y.props.children), m.return = v, v = m;
                      break e;
                    }
                  } else if (A.elementType === U || typeof U == "object" && U !== null && U.$$typeof === je && zs(U) === A.type) {
                    t(v, A.sibling), m = l(A, y.props), m.ref = Ll(v, A, y), m.return = v, v = m;
                    break e;
                  }
                  t(v, A);
                  break;
                } else
                  n(v, A);
                A = A.sibling;
              }
              y.type === Ee ? (m = cr(y.props.children, v.mode, N, y.key), m.return = v, v = m) : (N = Yo(y.type, y.key, y.props, null, v.mode, N), N.ref = Ll(v, m, y), N.return = v, v = N);
            }
            return s(v);
          case Fe:
            e: {
              for (A = y.key; m !== null; ) {
                if (m.key === A)
                  if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    t(v, m.sibling), m = l(m, y.children || []), m.return = v, v = m;
                    break e;
                  } else {
                    t(v, m);
                    break;
                  }
                else
                  n(v, m);
                m = m.sibling;
              }
              m = Eu(y, v.mode, N), m.return = v, v = m;
            }
            return s(v);
          case je:
            return A = y._init, Le(v, m, A(y._payload), N);
        }
        if (jt(y))
          return O(v, m, y, N);
        if (j(y))
          return I(v, m, y, N);
        No(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (t(v, m.sibling), m = l(m, y), m.return = v, v = m) : (t(v, m), m = _u(y, v.mode, N), m.return = v, v = m), s(v)) : t(v, m);
    }
    return Le;
  }
  var Wr = Ms(!0), Ts = Ms(!1), zl = {}, Kn = Et(zl), Ml = Et(zl), Tl = Et(zl);
  function lr(e) {
    if (e === zl)
      throw Error(_(174));
    return e;
  }
  function Hi(e, n) {
    switch (pe(Tl, n), pe(Ml, e), pe(Kn, zl), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : pr(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = pr(n, e);
    }
    ve(Kn), pe(Kn, n);
  }
  function Br() {
    ve(Kn), ve(Ml), ve(Tl);
  }
  function Rs(e) {
    lr(Tl.current);
    var n = lr(Kn.current), t = pr(n, e.type);
    n !== t && (pe(Ml, e), pe(Kn, t));
  }
  function Vi(e) {
    Ml.current === e && (ve(Kn), ve(Ml));
  }
  var we = Et(0);
  function Lo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Wi = [];
  function Bi() {
    for (var e = 0; e < Wi.length; e++)
      Wi[e]._workInProgressVersionPrimary = null;
    Wi.length = 0;
  }
  var zo = ye.ReactCurrentDispatcher, $i = ye.ReactCurrentBatchConfig, or = 0, Se = null, Me = null, Ue = null, Mo = !1, Rl = !1, Ol = 0, Gc = 0;
  function Ze() {
    throw Error(_(321));
  }
  function Qi(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!Fn(e[t], n[t]))
        return !1;
    return !0;
  }
  function Yi(e, n, t, r, l, i) {
    if (or = i, Se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, zo.current = e === null || e.memoizedState === null ? bc : ef, e = t(r, l), Rl) {
      i = 0;
      do {
        if (Rl = !1, Ol = 0, 25 <= i)
          throw Error(_(301));
        i += 1, Ue = Me = null, n.updateQueue = null, zo.current = nf, e = t(r, l);
      } while (Rl);
    }
    if (zo.current = Oo, n = Me !== null && Me.next !== null, or = 0, Ue = Me = Se = null, Mo = !1, n)
      throw Error(_(300));
    return e;
  }
  function Ki() {
    var e = Ol !== 0;
    return Ol = 0, e;
  }
  function Xn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function zn() {
    if (Me === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Me.next;
    var n = Ue === null ? Se.memoizedState : Ue.next;
    if (n !== null)
      Ue = n, Me = e;
    else {
      if (e === null)
        throw Error(_(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Ue === null ? Se.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Dl(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Xi(e) {
    var n = zn(), t = n.queue;
    if (t === null)
      throw Error(_(311));
    t.lastRenderedReducer = e;
    var r = Me, l = r.baseQueue, i = t.pending;
    if (i !== null) {
      if (l !== null) {
        var s = l.next;
        l.next = i.next, i.next = s;
      }
      r.baseQueue = l = i, t.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var c = s = null, p = null, w = i;
      do {
        var C = w.lane;
        if ((or & C) === C)
          p !== null && (p = p.next = { lane: 0, action: w.action, hasEagerState: w.hasEagerState, eagerState: w.eagerState, next: null }), r = w.hasEagerState ? w.eagerState : e(r, w.action);
        else {
          var P = {
            lane: C,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          };
          p === null ? (c = p = P, s = r) : p = p.next = P, Se.lanes |= C, ir |= C;
        }
        w = w.next;
      } while (w !== null && w !== i);
      p === null ? s = r : p.next = c, Fn(r, n.memoizedState) || (pn = !0), n.memoizedState = r, n.baseState = s, n.baseQueue = p, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Se.lanes |= i, ir |= i, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Gi(e) {
    var n = zn(), t = n.queue;
    if (t === null)
      throw Error(_(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, i = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var s = l = l.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== l);
      Fn(i, n.memoizedState) || (pn = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
    }
    return [i, r];
  }
  function Os() {
  }
  function Ds(e, n) {
    var t = Se, r = zn(), l = n(), i = !Fn(r.memoizedState, l);
    if (i && (r.memoizedState = l, pn = !0), r = r.queue, Zi(js.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || Ue !== null && Ue.memoizedState.tag & 1) {
      if (t.flags |= 2048, Fl(9, Is.bind(null, t, r, l, n), void 0, null), Ae === null)
        throw Error(_(349));
      or & 30 || Fs(t, n, l);
    }
    return l;
  }
  function Fs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Se.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Se.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function Is(e, n, t, r) {
    n.value = t, n.getSnapshot = r, Us(n) && As(e);
  }
  function js(e, n, t) {
    return t(function() {
      Us(n) && As(e);
    });
  }
  function Us(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !Fn(e, t);
    } catch {
      return !0;
    }
  }
  function As(e) {
    var n = ot(e, 1);
    n !== null && Hn(n, e, 1, -1);
  }
  function Hs(e) {
    var n = Xn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Dl, lastRenderedState: e }, n.queue = e, e = e.dispatch = qc.bind(null, Se, e), [n.memoizedState, e];
  }
  function Fl(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Se.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Se.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Vs() {
    return zn().memoizedState;
  }
  function To(e, n, t, r) {
    var l = Xn();
    Se.flags |= e, l.memoizedState = Fl(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function Ro(e, n, t, r) {
    var l = zn();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Me !== null) {
      var s = Me.memoizedState;
      if (i = s.destroy, r !== null && Qi(r, s.deps)) {
        l.memoizedState = Fl(n, t, i, r);
        return;
      }
    }
    Se.flags |= e, l.memoizedState = Fl(1 | n, t, i, r);
  }
  function Ws(e, n) {
    return To(8390656, 8, e, n);
  }
  function Zi(e, n) {
    return Ro(2048, 8, e, n);
  }
  function Bs(e, n) {
    return Ro(4, 2, e, n);
  }
  function $s(e, n) {
    return Ro(4, 4, e, n);
  }
  function Qs(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ys(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Ro(4, 4, Qs.bind(null, n, e), t);
  }
  function Ji() {
  }
  function Ks(e, n) {
    var t = zn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Qi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Xs(e, n) {
    var t = zn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Qi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Gs(e, n, t) {
    return or & 21 ? (Fn(t, n) || (t = dl(), Se.lanes |= t, ir |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, pn = !0), e.memoizedState = t);
  }
  function Zc(e, n) {
    var t = re;
    re = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = $i.transition;
    $i.transition = {};
    try {
      e(!1), n();
    } finally {
      re = t, $i.transition = r;
    }
  }
  function Zs() {
    return zn().memoizedState;
  }
  function Jc(e, n, t) {
    var r = Tt(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Js(e))
      qs(n, t);
    else if (t = ks(e, n, t, r), t !== null) {
      var l = on();
      Hn(t, e, r, l), bs(t, n, r);
    }
  }
  function qc(e, n, t) {
    var r = Tt(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Js(e))
      qs(n, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n.lastRenderedReducer, i !== null))
        try {
          var s = n.lastRenderedState, c = i(s, t);
          if (l.hasEagerState = !0, l.eagerState = c, Fn(c, s)) {
            var p = n.interleaved;
            p === null ? (l.next = l, Ii(n)) : (l.next = p.next, p.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = ks(e, n, l, r), t !== null && (l = on(), Hn(t, e, r, l), bs(t, n, r));
    }
  }
  function Js(e) {
    var n = e.alternate;
    return e === Se || n !== null && n === Se;
  }
  function qs(e, n) {
    Rl = Mo = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function bs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Zt(e, t);
    }
  }
  var Oo = { readContext: Ln, useCallback: Ze, useContext: Ze, useEffect: Ze, useImperativeHandle: Ze, useInsertionEffect: Ze, useLayoutEffect: Ze, useMemo: Ze, useReducer: Ze, useRef: Ze, useState: Ze, useDebugValue: Ze, useDeferredValue: Ze, useTransition: Ze, useMutableSource: Ze, useSyncExternalStore: Ze, useId: Ze, unstable_isNewReconciler: !1 }, bc = { readContext: Ln, useCallback: function(e, n) {
    return Xn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ln, useEffect: Ws, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, To(
      4194308,
      4,
      Qs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return To(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return To(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Xn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = Xn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Jc.bind(null, Se, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = Xn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: Hs, useDebugValue: Ji, useDeferredValue: function(e) {
    return Xn().memoizedState = e;
  }, useTransition: function() {
    var e = Hs(!1), n = e[0];
    return e = Zc.bind(null, e[1]), Xn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = Se, l = Xn();
    if (ge) {
      if (t === void 0)
        throw Error(_(407));
      t = t();
    } else {
      if (t = n(), Ae === null)
        throw Error(_(349));
      or & 30 || Fs(r, n, t);
    }
    l.memoizedState = t;
    var i = { value: t, getSnapshot: n };
    return l.queue = i, Ws(js.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Fl(9, Is.bind(null, r, i, t, n), void 0, null), t;
  }, useId: function() {
    var e = Xn(), n = Ae.identifierPrefix;
    if (ge) {
      var t = lt, r = rt;
      t = (r & ~(1 << 32 - tn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Ol++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Gc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: Ln,
    useCallback: Ks,
    useContext: Ln,
    useEffect: Zi,
    useImperativeHandle: Ys,
    useInsertionEffect: Bs,
    useLayoutEffect: $s,
    useMemo: Xs,
    useReducer: Xi,
    useRef: Vs,
    useState: function() {
      return Xi(Dl);
    },
    useDebugValue: Ji,
    useDeferredValue: function(e) {
      var n = zn();
      return Gs(n, Me.memoizedState, e);
    },
    useTransition: function() {
      var e = Xi(Dl)[0], n = zn().memoizedState;
      return [e, n];
    },
    useMutableSource: Os,
    useSyncExternalStore: Ds,
    useId: Zs,
    unstable_isNewReconciler: !1
  }, nf = { readContext: Ln, useCallback: Ks, useContext: Ln, useEffect: Zi, useImperativeHandle: Ys, useInsertionEffect: Bs, useLayoutEffect: $s, useMemo: Xs, useReducer: Gi, useRef: Vs, useState: function() {
    return Gi(Dl);
  }, useDebugValue: Ji, useDeferredValue: function(e) {
    var n = zn();
    return Me === null ? n.memoizedState = e : Gs(n, Me.memoizedState, e);
  }, useTransition: function() {
    var e = Gi(Dl)[0], n = zn().memoizedState;
    return [e, n];
  }, useMutableSource: Os, useSyncExternalStore: Ds, useId: Zs, unstable_isNewReconciler: !1 };
  function $r(e, n) {
    try {
      var t = "", r = n;
      do
        t += ae(r), r = r.return;
      while (r);
      var l = t;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function qi(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function bi(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var tf = typeof WeakMap == "function" ? WeakMap : Map;
  function ea(e, n, t) {
    t = it(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      Ho || (Ho = !0, mu = r), bi(e, n);
    }, t;
  }
  function na(e, n, t) {
    t = it(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        bi(e, n);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      bi(e, n), typeof r != "function" && (zt === null ? zt = /* @__PURE__ */ new Set([this]) : zt.add(this));
      var s = n.stack;
      this.componentDidCatch(n.value, { componentStack: s !== null ? s : "" });
    }), t;
  }
  function ta(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new tf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = yf.bind(null, e, n, t), n.then(e, e));
  }
  function ra(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function la(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = it(-1, 1), n.tag = 2, Nt(t, n, 1))), t.lanes |= 1), e);
  }
  var rf = ye.ReactCurrentOwner, pn = !1;
  function ln(e, n, t, r) {
    n.child = e === null ? Ts(n, null, t, r) : Wr(n, e.child, t, r);
  }
  function oa(e, n, t, r, l) {
    t = t.render;
    var i = n.ref;
    return Vr(n, l), r = Yi(e, n, t, r, i, l), t = Ki(), e !== null && !pn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, ut(e, n, l)) : (ge && t && Ni(n), n.flags |= 1, ln(e, n, r, l), n.child);
  }
  function ia(e, n, t, r, l) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" && !ku(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i, ua(e, n, i, r, l)) : (e = Yo(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (i = e.child, !(e.lanes & l)) {
      var s = i.memoizedProps;
      if (t = t.compare, t = t !== null ? t : kl, t(s, r) && e.ref === n.ref)
        return ut(e, n, l);
    }
    return n.flags |= 1, e = Ot(i, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function ua(e, n, t, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (kl(i, r) && e.ref === n.ref)
        if (pn = !1, n.pendingProps = r = i, (e.lanes & l) !== 0)
          e.flags & 131072 && (pn = !0);
        else
          return n.lanes = e.lanes, ut(e, n, l);
    }
    return eu(e, n, t, r, l);
  }
  function sa(e, n, t) {
    var r = n.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(Yr, _n), _n |= t;
      else {
        if (!(t & 1073741824))
          return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, pe(Yr, _n), _n |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, pe(Yr, _n), _n |= r;
      }
    else
      i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, pe(Yr, _n), _n |= r;
    return ln(e, n, l, t), n.child;
  }
  function aa(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function eu(e, n, t, r, l) {
    var i = dn(t) ? er : Ge.current;
    return i = Ir(n, i), Vr(n, l), t = Yi(e, n, t, r, i, l), r = Ki(), e !== null && !pn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, ut(e, n, l)) : (ge && r && Ni(n), n.flags |= 1, ln(e, n, t, l), n.child);
  }
  function ca(e, n, t, r, l) {
    if (dn(t)) {
      var i = !0;
      yo(n);
    } else
      i = !1;
    if (Vr(n, l), n.stateNode === null)
      Fo(e, n), Ns(n, t, r), Ai(n, t, r, l), r = !0;
    else if (e === null) {
      var s = n.stateNode, c = n.memoizedProps;
      s.props = c;
      var p = s.context, w = t.contextType;
      typeof w == "object" && w !== null ? w = Ln(w) : (w = dn(t) ? er : Ge.current, w = Ir(n, w));
      var C = t.getDerivedStateFromProps, P = typeof C == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      P || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== r || p !== w) && Ls(n, s, r, w), Pt = !1;
      var x = n.memoizedState;
      s.state = x, Co(n, r, s, l), p = n.memoizedState, c !== r || x !== p || fn.current || Pt ? (typeof C == "function" && (Ui(n, t, C, r), p = n.memoizedState), (c = Pt || Ps(n, t, c, r, x, p, w)) ? (P || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = p), s.props = r, s.state = p, s.context = w, r = c) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      s = n.stateNode, _s(e, n), c = n.memoizedProps, w = n.type === n.elementType ? c : jn(n.type, c), s.props = w, P = n.pendingProps, x = s.context, p = t.contextType, typeof p == "object" && p !== null ? p = Ln(p) : (p = dn(t) ? er : Ge.current, p = Ir(n, p));
      var T = t.getDerivedStateFromProps;
      (C = typeof T == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== P || x !== p) && Ls(n, s, r, p), Pt = !1, x = n.memoizedState, s.state = x, Co(n, r, s, l);
      var O = n.memoizedState;
      c !== P || x !== O || fn.current || Pt ? (typeof T == "function" && (Ui(n, t, T, r), O = n.memoizedState), (w = Pt || Ps(n, t, w, r, x, O, p) || !1) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, O, p), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, O, p)), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = O), s.props = r, s.state = O, s.context = p, r = w) : (typeof s.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return nu(e, n, t, r, i, l);
  }
  function nu(e, n, t, r, l, i) {
    aa(e, n);
    var s = (n.flags & 128) !== 0;
    if (!r && !s)
      return l && ms(n, t, !1), ut(e, n, i);
    r = n.stateNode, rf.current = n;
    var c = s && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && s ? (n.child = Wr(n, e.child, null, i), n.child = Wr(n, null, c, i)) : ln(e, n, c, i), n.memoizedState = r.state, l && ms(n, t, !0), n.child;
  }
  function fa(e) {
    var n = e.stateNode;
    n.pendingContext ? ds(e, n.pendingContext, n.pendingContext !== n.context) : n.context && ds(e, n.context, !1), Hi(e, n.containerInfo);
  }
  function da(e, n, t, r, l) {
    return Ar(), Ti(l), n.flags |= 256, ln(e, n, t, r), n.child;
  }
  var tu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function pa(e, n, t) {
    var r = n.pendingProps, l = we.current, i = !1, s = (n.flags & 128) !== 0, c;
    if ((c = s) || (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), c ? (i = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), pe(we, l & 1), e === null)
      return Mi(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = n.mode, i = n.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Ko(s, r, 0, null), e = cr(e, r, t, null), i.return = n, e.return = n, i.sibling = e, n.child = i, n.child.memoizedState = ru(t), n.memoizedState = tu, e) : lu(n, s));
    if (l = e.memoizedState, l !== null && (c = l.dehydrated, c !== null))
      return lf(e, n, s, r, c, l, t);
    if (i) {
      i = r.fallback, s = n.mode, l = e.child, c = l.sibling;
      var p = { mode: "hidden", children: r.children };
      return !(s & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = p, n.deletions = null) : (r = Ot(l, p), r.subtreeFlags = l.subtreeFlags & 14680064), c !== null ? i = Ot(c, i) : (i = cr(i, s, t, null), i.flags |= 2), i.return = n, r.return = n, r.sibling = i, n.child = r, r = i, i = n.child, s = e.child.memoizedState, s = s === null ? ru(t) : { baseLanes: s.baseLanes | t, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~t, n.memoizedState = tu, r;
    }
    return i = e.child, e = i.sibling, r = Ot(i, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function lu(e, n) {
    return n = Ko({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Do(e, n, t, r) {
    return r !== null && Ti(r), Wr(n, e.child, null, t), e = lu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function lf(e, n, t, r, l, i, s) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = qi(Error(_(422))), Do(e, n, s, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, l = n.mode, r = Ko({ mode: "visible", children: r.children }, l, 0, null), i = cr(i, l, s, null), i.flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, n.mode & 1 && Wr(n, e.child, null, s), n.child.memoizedState = ru(s), n.memoizedState = tu, i);
    if (!(n.mode & 1))
      return Do(e, n, s, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var c = r.dgst;
      return r = c, i = Error(_(419)), r = qi(i, r, void 0), Do(e, n, s, r);
    }
    if (c = (s & e.childLanes) !== 0, pn || c) {
      if (r = Ae, r !== null) {
        switch (s & -s) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, ot(e, l), Hn(r, e, l, -1));
      }
      return Su(), r = qi(Error(_(421))), Do(e, n, s, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gf.bind(null, e), l._reactRetry = n, null) : (e = i.treeContext, kn = _t(l.nextSibling), Sn = n, ge = !0, In = null, e !== null && (Pn[Nn++] = rt, Pn[Nn++] = lt, Pn[Nn++] = nr, rt = e.id, lt = e.overflow, nr = n), n = lu(n, r.children), n.flags |= 4096, n);
  }
  function ma(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Fi(e.return, n, t);
  }
  function ou(e, n, t, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = l);
  }
  function ha(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, i = r.tail;
    if (ln(e, n, r.children, t), r = we.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && ma(e, t, n);
            else if (e.tag === 19)
              ma(e, t, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (pe(we, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && Lo(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ou(n, !1, l, t, i);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && Lo(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          ou(n, !0, t, null, i);
          break;
        case "together":
          ou(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Fo(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function ut(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), ir |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(_(153));
    if (n.child !== null) {
      for (e = n.child, t = Ot(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Ot(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function of(e, n, t) {
    switch (n.tag) {
      case 3:
        fa(n), Ar();
        break;
      case 5:
        Rs(n);
        break;
      case 1:
        dn(n.type) && yo(n);
        break;
      case 4:
        Hi(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        pe(_o, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (pe(we, we.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? pa(e, n, t) : (pe(we, we.current & 1), e = ut(e, n, t), e !== null ? e.sibling : null);
        pe(we, we.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return ha(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), pe(we, we.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, sa(e, n, t);
    }
    return ut(e, n, t);
  }
  var va, iu, ya, ga;
  va = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, iu = function() {
  }, ya = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, lr(Kn.current);
      var i = null;
      switch (t) {
        case "input":
          l = fr(e, l), r = fr(e, r), i = [];
          break;
        case "select":
          l = d({}, l, { value: void 0 }), r = d({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = at(e, l), r = at(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mo);
      }
      el(t, r);
      var s;
      t = null;
      for (w in l)
        if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
          if (w === "style") {
            var c = l[w];
            for (s in c)
              c.hasOwnProperty(s) && (t || (t = {}), t[s] = "");
          } else
            w !== "dangerouslySetInnerHTML" && w !== "children" && w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && w !== "autoFocus" && (ue.hasOwnProperty(w) ? i || (i = []) : (i = i || []).push(w, null));
      for (w in r) {
        var p = r[w];
        if (c = l != null ? l[w] : void 0, r.hasOwnProperty(w) && p !== c && (p != null || c != null))
          if (w === "style")
            if (c) {
              for (s in c)
                !c.hasOwnProperty(s) || p && p.hasOwnProperty(s) || (t || (t = {}), t[s] = "");
              for (s in p)
                p.hasOwnProperty(s) && c[s] !== p[s] && (t || (t = {}), t[s] = p[s]);
            } else
              t || (i || (i = []), i.push(
                w,
                t
              )), t = p;
          else
            w === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, c = c ? c.__html : void 0, p != null && c !== p && (i = i || []).push(w, p)) : w === "children" ? typeof p != "string" && typeof p != "number" || (i = i || []).push(w, "" + p) : w !== "suppressContentEditableWarning" && w !== "suppressHydrationWarning" && (ue.hasOwnProperty(w) ? (p != null && w === "onScroll" && he("scroll", e), i || c === p || (i = [])) : (i = i || []).push(w, p));
      }
      t && (i = i || []).push("style", t);
      var w = i;
      (n.updateQueue = w) && (n.flags |= 4);
    }
  }, ga = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function Il(e, n) {
    if (!ge)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), n = n.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Je(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function uf(e, n, t) {
    var r = n.pendingProps;
    switch (Li(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Je(n), null;
      case 1:
        return dn(n.type) && vo(), Je(n), null;
      case 3:
        return r = n.stateNode, Br(), ve(fn), ve(Ge), Bi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ko(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, In !== null && (yu(In), In = null))), iu(e, n), Je(n), null;
      case 5:
        Vi(n);
        var l = lr(Tl.current);
        if (t = n.type, e !== null && n.stateNode != null)
          ya(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(_(166));
            return Je(n), null;
          }
          if (e = lr(Kn.current), ko(n)) {
            r = n.stateNode, t = n.type;
            var i = n.memoizedProps;
            switch (r[Yn] = n, r[Pl] = i, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                he("cancel", r), he("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < El.length; l++)
                  he(El[l], r);
                break;
              case "source":
                he("error", r);
                break;
              case "img":
              case "image":
              case "link":
                he(
                  "error",
                  r
                ), he("load", r);
                break;
              case "details":
                he("toggle", r);
                break;
              case "input":
                Jr(r, i), he("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, he("invalid", r);
                break;
              case "textarea":
                Ql(r, i), he("invalid", r);
            }
            el(t, i), l = null;
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                var c = i[s];
                s === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && po(r.textContent, c, e), l = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && po(
                  r.textContent,
                  c,
                  e
                ), l = ["children", "" + c]) : ue.hasOwnProperty(s) && c != null && s === "onScroll" && he("scroll", r);
              }
            switch (t) {
              case "input":
                Ne(r), dr(r, i, !0);
                break;
              case "textarea":
                Ne(r), Yl(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = mo);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ut(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(t, { is: r.is }) : (e = s.createElement(t), t === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, t), e[Yn] = n, e[Pl] = r, va(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (s = Zn(t, r), t) {
                case "dialog":
                  he("cancel", e), he("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < El.length; l++)
                    he(El[l], e);
                  l = r;
                  break;
                case "source":
                  he("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  he(
                    "error",
                    e
                  ), he("load", e), l = r;
                  break;
                case "details":
                  he("toggle", e), l = r;
                  break;
                case "input":
                  Jr(e, r), l = fr(e, r), he("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = d({}, r, { value: void 0 }), he("invalid", e);
                  break;
                case "textarea":
                  Ql(e, r), l = at(e, r), he("invalid", e);
                  break;
                default:
                  l = r;
              }
              el(t, l), c = l;
              for (i in c)
                if (c.hasOwnProperty(i)) {
                  var p = c[i];
                  i === "style" ? br(e, p) : i === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Kl(e, p)) : i === "children" ? typeof p == "string" ? (t !== "textarea" || p !== "") && Ht(e, p) : typeof p == "number" && Ht(e, "" + p) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ue.hasOwnProperty(i) ? p != null && i === "onScroll" && he("scroll", e) : p != null && Ke(e, i, p, s));
                }
              switch (t) {
                case "input":
                  Ne(e), dr(e, r, !1);
                  break;
                case "textarea":
                  Ne(e), Yl(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Bn(e, !!r.multiple, i, !1) : r.defaultValue != null && Bn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = mo);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Je(n), null;
      case 6:
        if (e && n.stateNode != null)
          ga(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(_(166));
          if (t = lr(Tl.current), lr(Kn.current), ko(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[Yn] = n, (i = r.nodeValue !== t) && (e = Sn, e !== null))
              switch (e.tag) {
                case 3:
                  po(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && po(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            i && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Yn] = n, n.stateNode = r;
        }
        return Je(n), null;
      case 13:
        if (ve(we), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ge && kn !== null && n.mode & 1 && !(n.flags & 128))
            Ss(), Ar(), n.flags |= 98560, i = !1;
          else if (i = ko(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i)
                throw Error(_(318));
              if (i = n.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                throw Error(_(317));
              i[Yn] = n;
            } else
              Ar(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Je(n), i = !1;
          } else
            In !== null && (yu(In), In = null), i = !0;
          if (!i)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || we.current & 1 ? Te === 0 && (Te = 3) : Su())), n.updateQueue !== null && (n.flags |= 4), Je(n), null);
      case 4:
        return Br(), iu(e, n), e === null && xl(n.stateNode.containerInfo), Je(n), null;
      case 10:
        return Di(n.type._context), Je(n), null;
      case 17:
        return dn(n.type) && vo(), Je(n), null;
      case 19:
        if (ve(we), i = n.memoizedState, i === null)
          return Je(n), null;
        if (r = (n.flags & 128) !== 0, s = i.rendering, s === null)
          if (r)
            Il(i, !1);
          else {
            if (Te !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (s = Lo(e), s !== null) {
                  for (n.flags |= 128, Il(i, !1), r = s.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    i = t, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return pe(we, we.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            i.tail !== null && de() > Kr && (n.flags |= 128, r = !0, Il(i, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Lo(s), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Il(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ge)
                return Je(n), null;
            } else
              2 * de() - i.renderingStartTime > Kr && t !== 1073741824 && (n.flags |= 128, r = !0, Il(i, !1), n.lanes = 4194304);
          i.isBackwards ? (s.sibling = n.child, n.child = s) : (t = i.last, t !== null ? t.sibling = s : n.child = s, i.last = s);
        }
        return i.tail !== null ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = de(), n.sibling = null, t = we.current, pe(we, r ? t & 1 | 2 : t & 1), n) : (Je(n), null);
      case 22:
      case 23:
        return wu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? _n & 1073741824 && (Je(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Je(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, n.tag));
  }
  function sf(e, n) {
    switch (Li(n), n.tag) {
      case 1:
        return dn(n.type) && vo(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Br(), ve(fn), ve(Ge), Bi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Vi(n), null;
      case 13:
        if (ve(we), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(_(340));
          Ar();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ve(we), null;
      case 4:
        return Br(), null;
      case 10:
        return Di(n.type._context), null;
      case 22:
      case 23:
        return wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Io = !1, qe = !1, af = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function Qr(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          Pe(e, n, r);
        }
      else
        t.current = null;
  }
  function uu(e, n, t) {
    try {
      t();
    } catch (r) {
      Pe(e, n, r);
    }
  }
  var wa = !1;
  function cf(e, n) {
    if (wi = $e, e = Zu(), fi(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, i = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break e;
            }
            var s = 0, c = -1, p = -1, w = 0, C = 0, P = e, x = null;
            n:
              for (; ; ) {
                for (var T; P !== t || l !== 0 && P.nodeType !== 3 || (c = s + l), P !== i || r !== 0 && P.nodeType !== 3 || (p = s + r), P.nodeType === 3 && (s += P.nodeValue.length), (T = P.firstChild) !== null; )
                  x = P, P = T;
                for (; ; ) {
                  if (P === e)
                    break n;
                  if (x === t && ++w === l && (c = s), x === i && ++C === r && (p = s), (T = P.nextSibling) !== null)
                    break;
                  P = x, x = P.parentNode;
                }
                P = T;
              }
            t = c === -1 || p === -1 ? null : { start: c, end: p };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (Si = { focusedElem: e, selectionRange: t }, $e = !1, R = n; R !== null; )
      if (n = R, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, R = e;
      else
        for (; R !== null; ) {
          n = R;
          try {
            var O = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (O !== null) {
                    var I = O.memoizedProps, Le = O.memoizedState, v = n.stateNode, m = v.getSnapshotBeforeUpdate(n.elementType === n.type ? I : jn(n.type, I), Le);
                    v.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var y = n.stateNode.containerInfo;
                  y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(_(163));
              }
          } catch (N) {
            Pe(n, n.return, N);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, R = e;
            break;
          }
          R = n.return;
        }
    return O = wa, wa = !1, O;
  }
  function jl(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && uu(n, t, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function jo(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function su(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Sa(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Sa(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Yn], delete n[Pl], delete n[xi], delete n[Qc], delete n[Yc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ka(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function _a(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ka(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function au(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = mo));
    else if (r !== 4 && (e = e.child, e !== null))
      for (au(e, n, t), e = e.sibling; e !== null; )
        au(e, n, t), e = e.sibling;
  }
  function cu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (cu(e, n, t), e = e.sibling; e !== null; )
        cu(e, n, t), e = e.sibling;
  }
  var Qe = null, Un = !1;
  function Lt(e, n, t) {
    for (t = t.child; t !== null; )
      Ea(e, n, t), t = t.sibling;
  }
  function Ea(e, n, t) {
    if (an && typeof an.onCommitFiberUnmount == "function")
      try {
        an.onCommitFiberUnmount(Kt, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        qe || Qr(t, n);
      case 6:
        var r = Qe, l = Un;
        Qe = null, Lt(e, n, t), Qe = r, Un = l, Qe !== null && (Un ? (e = Qe, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Qe.removeChild(t.stateNode));
        break;
      case 18:
        Qe !== null && (Un ? (e = Qe, t = t.stateNode, e.nodeType === 8 ? Ei(e.parentNode, t) : e.nodeType === 1 && Ei(e, t), Q(e)) : Ei(Qe, t.stateNode));
        break;
      case 4:
        r = Qe, l = Un, Qe = t.stateNode.containerInfo, Un = !0, Lt(e, n, t), Qe = r, Un = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, s = i.destroy;
            i = i.tag, s !== void 0 && (i & 2 || i & 4) && uu(t, n, s), l = l.next;
          } while (l !== r);
        }
        Lt(e, n, t);
        break;
      case 1:
        if (!qe && (Qr(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (c) {
            Pe(t, n, c);
          }
        Lt(e, n, t);
        break;
      case 21:
        Lt(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (qe = (r = qe) || t.memoizedState !== null, Lt(e, n, t), qe = r) : Lt(e, n, t);
        break;
      default:
        Lt(e, n, t);
    }
  }
  function xa(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new af()), n.forEach(function(r) {
        var l = wf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function An(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var i = e, s = n, c = s;
          e:
            for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  Qe = c.stateNode, Un = !1;
                  break e;
                case 3:
                  Qe = c.stateNode.containerInfo, Un = !0;
                  break e;
                case 4:
                  Qe = c.stateNode.containerInfo, Un = !0;
                  break e;
              }
              c = c.return;
            }
          if (Qe === null)
            throw Error(_(160));
          Ea(i, s, l), Qe = null, Un = !1;
          var p = l.alternate;
          p !== null && (p.return = null), l.return = null;
        } catch (w) {
          Pe(l, n, w);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        Ca(n, e), n = n.sibling;
  }
  function Ca(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (An(n, e), Gn(e), r & 4) {
          try {
            jl(3, e, e.return), jo(3, e);
          } catch (I) {
            Pe(e, e.return, I);
          }
          try {
            jl(5, e, e.return);
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        break;
      case 1:
        An(n, e), Gn(e), r & 512 && t !== null && Qr(t, t.return);
        break;
      case 5:
        if (An(n, e), Gn(e), r & 512 && t !== null && Qr(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ht(l, "");
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, s = t !== null ? t.memoizedProps : i, c = e.type, p = e.updateQueue;
          if (e.updateQueue = null, p !== null)
            try {
              c === "input" && i.type === "radio" && i.name != null && $l(l, i), Zn(c, s);
              var w = Zn(c, i);
              for (s = 0; s < p.length; s += 2) {
                var C = p[s], P = p[s + 1];
                C === "style" ? br(l, P) : C === "dangerouslySetInnerHTML" ? Kl(l, P) : C === "children" ? Ht(l, P) : Ke(l, C, P, w);
              }
              switch (c) {
                case "input":
                  Wn(l, i);
                  break;
                case "textarea":
                  qr(l, i);
                  break;
                case "select":
                  var x = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var T = i.value;
                  T != null ? Bn(l, !!i.multiple, T, !1) : x !== !!i.multiple && (i.defaultValue != null ? Bn(
                    l,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  ) : Bn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[Pl] = i;
            } catch (I) {
              Pe(e, e.return, I);
            }
        }
        break;
      case 6:
        if (An(n, e), Gn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(_(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (I) {
            Pe(e, e.return, I);
          }
        }
        break;
      case 3:
        if (An(n, e), Gn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Q(n.containerInfo);
          } catch (I) {
            Pe(e, e.return, I);
          }
        break;
      case 4:
        An(n, e), Gn(e);
        break;
      case 13:
        An(n, e), Gn(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (pu = de())), r & 4 && xa(e);
        break;
      case 22:
        if (C = t !== null && t.memoizedState !== null, e.mode & 1 ? (qe = (w = qe) || C, An(n, e), qe = w) : An(n, e), Gn(e), r & 8192) {
          if (w = e.memoizedState !== null, (e.stateNode.isHidden = w) && !C && e.mode & 1)
            for (R = e, C = e.child; C !== null; ) {
              for (P = R = C; R !== null; ) {
                switch (x = R, T = x.child, x.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    jl(4, x, x.return);
                    break;
                  case 1:
                    Qr(x, x.return);
                    var O = x.stateNode;
                    if (typeof O.componentWillUnmount == "function") {
                      r = x, t = x.return;
                      try {
                        n = r, O.props = n.memoizedProps, O.state = n.memoizedState, O.componentWillUnmount();
                      } catch (I) {
                        Pe(r, t, I);
                      }
                    }
                    break;
                  case 5:
                    Qr(x, x.return);
                    break;
                  case 22:
                    if (x.memoizedState !== null) {
                      La(P);
                      continue;
                    }
                }
                T !== null ? (T.return = x, R = T) : La(P);
              }
              C = C.sibling;
            }
          e:
            for (C = null, P = e; ; ) {
              if (P.tag === 5) {
                if (C === null) {
                  C = P;
                  try {
                    l = P.stateNode, w ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = P.stateNode, p = P.memoizedProps.style, s = p != null && p.hasOwnProperty("display") ? p.display : null, c.style.display = mr("display", s));
                  } catch (I) {
                    Pe(e, e.return, I);
                  }
                }
              } else if (P.tag === 6) {
                if (C === null)
                  try {
                    P.stateNode.nodeValue = w ? "" : P.memoizedProps;
                  } catch (I) {
                    Pe(e, e.return, I);
                  }
              } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === e) && P.child !== null) {
                P.child.return = P, P = P.child;
                continue;
              }
              if (P === e)
                break e;
              for (; P.sibling === null; ) {
                if (P.return === null || P.return === e)
                  break e;
                C === P && (C = null), P = P.return;
              }
              C === P && (C = null), P.sibling.return = P.return, P = P.sibling;
            }
        }
        break;
      case 19:
        An(n, e), Gn(e), r & 4 && xa(e);
        break;
      case 21:
        break;
      default:
        An(
          n,
          e
        ), Gn(e);
    }
  }
  function Gn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ka(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(_(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Ht(l, ""), r.flags &= -33);
            var i = _a(e);
            cu(e, i, l);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, c = _a(e);
            au(e, c, s);
            break;
          default:
            throw Error(_(161));
        }
      } catch (p) {
        Pe(e, e.return, p);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function ff(e, n, t) {
    R = e, Pa(e);
  }
  function Pa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
      var l = R, i = l.child;
      if (l.tag === 22 && r) {
        var s = l.memoizedState !== null || Io;
        if (!s) {
          var c = l.alternate, p = c !== null && c.memoizedState !== null || qe;
          c = Io;
          var w = qe;
          if (Io = s, (qe = p) && !w)
            for (R = l; R !== null; )
              s = R, p = s.child, s.tag === 22 && s.memoizedState !== null ? za(l) : p !== null ? (p.return = s, R = p) : za(l);
          for (; i !== null; )
            R = i, Pa(i), i = i.sibling;
          R = l, Io = c, qe = w;
        }
        Na(e);
      } else
        l.subtreeFlags & 8772 && i !== null ? (i.return = l, R = i) : Na(e);
    }
  }
  function Na(e) {
    for (; R !== null; ) {
      var n = R;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                qe || jo(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !qe)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : jn(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = n.updateQueue;
                i !== null && xs(n, i, r);
                break;
              case 3:
                var s = n.updateQueue;
                if (s !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  xs(n, s, t);
                }
                break;
              case 5:
                var c = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = c;
                  var p = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && t.focus();
                      break;
                    case "img":
                      p.src && (t.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var w = n.alternate;
                  if (w !== null) {
                    var C = w.memoizedState;
                    if (C !== null) {
                      var P = C.dehydrated;
                      P !== null && Q(P);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(_(163));
            }
          qe || n.flags & 512 && su(n);
        } catch (x) {
          Pe(n, n.return, x);
        }
      }
      if (n === e) {
        R = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, R = t;
        break;
      }
      R = n.return;
    }
  }
  function La(e) {
    for (; R !== null; ) {
      var n = R;
      if (n === e) {
        R = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, R = t;
        break;
      }
      R = n.return;
    }
  }
  function za(e) {
    for (; R !== null; ) {
      var n = R;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              jo(4, n);
            } catch (p) {
              Pe(n, t, p);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Pe(n, l, p);
              }
            }
            var i = n.return;
            try {
              su(n);
            } catch (p) {
              Pe(n, i, p);
            }
            break;
          case 5:
            var s = n.return;
            try {
              su(n);
            } catch (p) {
              Pe(n, s, p);
            }
        }
      } catch (p) {
        Pe(n, n.return, p);
      }
      if (n === e) {
        R = null;
        break;
      }
      var c = n.sibling;
      if (c !== null) {
        c.return = n.return, R = c;
        break;
      }
      R = n.return;
    }
  }
  var df = Math.ceil, Uo = ye.ReactCurrentDispatcher, fu = ye.ReactCurrentOwner, Mn = ye.ReactCurrentBatchConfig, ee = 0, Ae = null, ze = null, Ye = 0, _n = 0, Yr = Et(0), Te = 0, Ul = null, ir = 0, Ao = 0, du = 0, Al = null, mn = null, pu = 0, Kr = 1 / 0, st = null, Ho = !1, mu = null, zt = null, Vo = !1, Mt = null, Wo = 0, Hl = 0, hu = null, Bo = -1, $o = 0;
  function on() {
    return ee & 6 ? de() : Bo !== -1 ? Bo : Bo = de();
  }
  function Tt(e) {
    return e.mode & 1 ? ee & 2 && Ye !== 0 ? Ye & -Ye : Xc.transition !== null ? ($o === 0 && ($o = dl()), $o) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hl(e.type)), e) : 1;
  }
  function Hn(e, n, t, r) {
    if (50 < Hl)
      throw Hl = 0, hu = null, Error(_(185));
    yt(e, t, r), (!(ee & 2) || e !== Ae) && (e === Ae && (!(ee & 2) && (Ao |= t), Te === 4 && Rt(e, Ye)), hn(e, r), t === 1 && ee === 0 && !(n.mode & 1) && (Kr = de() + 500, go && Ct()));
  }
  function hn(e, n) {
    var t = e.callbackNode;
    ql(e, n);
    var r = xr(e, e === Ae ? Ye : 0);
    if (r === 0)
      t !== null && ht(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && ht(t), n === 1)
        e.tag === 0 ? Kc(Ta.bind(null, e)) : hs(Ta.bind(null, e)), Bc(function() {
          !(ee & 6) && Ct();
        }), t = null;
      else {
        switch (Jt(r)) {
          case 1:
            t = bn;
            break;
          case 4:
            t = et;
            break;
          case 16:
            t = On;
            break;
          case 536870912:
            t = gr;
            break;
          default:
            t = On;
        }
        t = Aa(t, Ma.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function Ma(e, n) {
    if (Bo = -1, $o = 0, ee & 6)
      throw Error(_(327));
    var t = e.callbackNode;
    if (Xr() && e.callbackNode !== t)
      return null;
    var r = xr(e, e === Ae ? Ye : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = Qo(e, r);
    else {
      n = r;
      var l = ee;
      ee |= 2;
      var i = Oa();
      (Ae !== e || Ye !== n) && (st = null, Kr = de() + 500, sr(e, n));
      do
        try {
          hf();
          break;
        } catch (c) {
          Ra(e, c);
        }
      while (1);
      Oi(), Uo.current = i, ee = l, ze !== null ? n = 0 : (Ae = null, Ye = 0, n = Te);
    }
    if (n !== 0) {
      if (n === 2 && (l = Cr(e), l !== 0 && (r = l, n = vu(e, l))), n === 1)
        throw t = Ul, sr(e, 0), Rt(e, r), hn(e, de()), t;
      if (n === 6)
        Rt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !pf(l) && (n = Qo(e, r), n === 2 && (i = Cr(e), i !== 0 && (r = i, n = vu(e, i))), n === 1))
          throw t = Ul, sr(e, 0), Rt(e, r), hn(e, de()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            ar(e, mn, st);
            break;
          case 3:
            if (Rt(e, r), (r & 130023424) === r && (n = pu + 500 - de(), 10 < n)) {
              if (xr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                on(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = _i(ar.bind(null, e, mn, st), n);
              break;
            }
            ar(e, mn, st);
            break;
          case 4:
            if (Rt(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var s = 31 - tn(r);
              i = 1 << s, s = n[s], s > l && (l = s), r &= ~i;
            }
            if (r = l, r = de() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * df(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = _i(ar.bind(null, e, mn, st), r);
              break;
            }
            ar(e, mn, st);
            break;
          case 5:
            ar(e, mn, st);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return hn(e, de()), e.callbackNode === t ? Ma.bind(null, e) : null;
  }
  function vu(e, n) {
    var t = Al;
    return e.current.memoizedState.isDehydrated && (sr(e, n).flags |= 256), e = Qo(e, n), e !== 2 && (n = mn, mn = t, n !== null && yu(n)), e;
  }
  function yu(e) {
    mn === null ? mn = e : mn.push.apply(mn, e);
  }
  function pf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], i = l.getSnapshot;
            l = l.value;
            try {
              if (!Fn(i(), l))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null)
        t.return = n, n = t;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Rt(e, n) {
    for (n &= ~du, n &= ~Ao, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - tn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function Ta(e) {
    if (ee & 6)
      throw Error(_(327));
    Xr();
    var n = xr(e, 0);
    if (!(n & 1))
      return hn(e, de()), null;
    var t = Qo(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Cr(e);
      r !== 0 && (n = r, t = vu(e, r));
    }
    if (t === 1)
      throw t = Ul, sr(e, 0), Rt(e, n), hn(e, de()), t;
    if (t === 6)
      throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ar(e, mn, st), hn(e, de()), null;
  }
  function gu(e, n) {
    var t = ee;
    ee |= 1;
    try {
      return e(n);
    } finally {
      ee = t, ee === 0 && (Kr = de() + 500, go && Ct());
    }
  }
  function ur(e) {
    Mt !== null && Mt.tag === 0 && !(ee & 6) && Xr();
    var n = ee;
    ee |= 1;
    var t = Mn.transition, r = re;
    try {
      if (Mn.transition = null, re = 1, e)
        return e();
    } finally {
      re = r, Mn.transition = t, ee = n, !(ee & 6) && Ct();
    }
  }
  function wu() {
    _n = Yr.current, ve(Yr);
  }
  function sr(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Wc(t)), ze !== null)
      for (t = ze.return; t !== null; ) {
        var r = t;
        switch (Li(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && vo();
            break;
          case 3:
            Br(), ve(fn), ve(Ge), Bi();
            break;
          case 5:
            Vi(r);
            break;
          case 4:
            Br();
            break;
          case 13:
            ve(we);
            break;
          case 19:
            ve(we);
            break;
          case 10:
            Di(r.type._context);
            break;
          case 22:
          case 23:
            wu();
        }
        t = t.return;
      }
    if (Ae = e, ze = e = Ot(e.current, null), Ye = _n = n, Te = 0, Ul = null, du = Ao = ir = 0, mn = Al = null, rr !== null) {
      for (n = 0; n < rr.length; n++)
        if (t = rr[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, i = t.pending;
          if (i !== null) {
            var s = i.next;
            i.next = l, r.next = s;
          }
          t.pending = r;
        }
      rr = null;
    }
    return e;
  }
  function Ra(e, n) {
    do {
      var t = ze;
      try {
        if (Oi(), zo.current = Oo, Mo) {
          for (var r = Se.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Mo = !1;
        }
        if (or = 0, Ue = Me = Se = null, Rl = !1, Ol = 0, fu.current = null, t === null || t.return === null) {
          Te = 1, Ul = n, ze = null;
          break;
        }
        e: {
          var i = e, s = t.return, c = t, p = n;
          if (n = Ye, c.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var w = p, C = c, P = C.tag;
            if (!(C.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var x = C.alternate;
              x ? (C.updateQueue = x.updateQueue, C.memoizedState = x.memoizedState, C.lanes = x.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var T = ra(s);
            if (T !== null) {
              T.flags &= -257, la(T, s, c, i, n), T.mode & 1 && ta(i, w, n), n = T, p = w;
              var O = n.updateQueue;
              if (O === null) {
                var I = /* @__PURE__ */ new Set();
                I.add(p), n.updateQueue = I;
              } else
                O.add(p);
              break e;
            } else {
              if (!(n & 1)) {
                ta(i, w, n), Su();
                break e;
              }
              p = Error(_(426));
            }
          } else if (ge && c.mode & 1) {
            var Le = ra(s);
            if (Le !== null) {
              !(Le.flags & 65536) && (Le.flags |= 256), la(Le, s, c, i, n), Ti($r(p, c));
              break e;
            }
          }
          i = p = $r(p, c), Te !== 4 && (Te = 2), Al === null ? Al = [i] : Al.push(i), i = s;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, n &= -n, i.lanes |= n;
                var v = ea(i, p, n);
                Es(i, v);
                break e;
              case 1:
                c = p;
                var m = i.type, y = i.stateNode;
                if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (zt === null || !zt.has(y)))) {
                  i.flags |= 65536, n &= -n, i.lanes |= n;
                  var N = na(i, c, n);
                  Es(i, N);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Fa(t);
      } catch (U) {
        n = U, ze === t && t !== null && (ze = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oa() {
    var e = Uo.current;
    return Uo.current = Oo, e === null ? Oo : e;
  }
  function Su() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4), Ae === null || !(ir & 268435455) && !(Ao & 268435455) || Rt(Ae, Ye);
  }
  function Qo(e, n) {
    var t = ee;
    ee |= 2;
    var r = Oa();
    (Ae !== e || Ye !== n) && (st = null, sr(e, n));
    do
      try {
        mf();
        break;
      } catch (l) {
        Ra(e, l);
      }
    while (1);
    if (Oi(), ee = t, Uo.current = r, ze !== null)
      throw Error(_(261));
    return Ae = null, Ye = 0, Te;
  }
  function mf() {
    for (; ze !== null; )
      Da(ze);
  }
  function hf() {
    for (; ze !== null && !fl(); )
      Da(ze);
  }
  function Da(e) {
    var n = Ua(e.alternate, e, _n);
    e.memoizedProps = e.pendingProps, n === null ? Fa(e) : ze = n, fu.current = null;
  }
  function Fa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = sf(t, n), t !== null) {
          t.flags &= 32767, ze = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Te = 6, ze = null;
          return;
        }
      } else if (t = uf(t, n, _n), t !== null) {
        ze = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ze = n;
        return;
      }
      ze = n = e;
    } while (n !== null);
    Te === 0 && (Te = 5);
  }
  function ar(e, n, t) {
    var r = re, l = Mn.transition;
    try {
      Mn.transition = null, re = 1, vf(e, n, t, r);
    } finally {
      Mn.transition = l, re = r;
    }
    return null;
  }
  function vf(e, n, t, r) {
    do
      Xr();
    while (Mt !== null);
    if (ee & 6)
      throw Error(_(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = t.lanes | t.childLanes;
    if (bl(e, i), e === Ae && (ze = Ae = null, Ye = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Vo || (Vo = !0, Aa(On, function() {
      return Xr(), null;
    })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
      i = Mn.transition, Mn.transition = null;
      var s = re;
      re = 1;
      var c = ee;
      ee |= 4, fu.current = null, cf(e, t), Ca(t, e), Fc(Si), $e = !!wi, Si = wi = null, e.current = t, ff(t), qn(), ee = c, re = s, Mn.transition = i;
    } else
      e.current = t;
    if (Vo && (Vo = !1, Mt = e, Wo = l), i = e.pendingLanes, i === 0 && (zt = null), wr(t.stateNode), hn(e, de()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ho)
      throw Ho = !1, e = mu, mu = null, e;
    return Wo & 1 && e.tag !== 0 && Xr(), i = e.pendingLanes, i & 1 ? e === hu ? Hl++ : (Hl = 0, hu = e) : Hl = 0, Ct(), null;
  }
  function Xr() {
    if (Mt !== null) {
      var e = Jt(Wo), n = Mn.transition, t = re;
      try {
        if (Mn.transition = null, re = 16 > e ? 16 : e, Mt === null)
          var r = !1;
        else {
          if (e = Mt, Mt = null, Wo = 0, ee & 6)
            throw Error(_(331));
          var l = ee;
          for (ee |= 4, R = e.current; R !== null; ) {
            var i = R, s = i.child;
            if (R.flags & 16) {
              var c = i.deletions;
              if (c !== null) {
                for (var p = 0; p < c.length; p++) {
                  var w = c[p];
                  for (R = w; R !== null; ) {
                    var C = R;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jl(8, C, i);
                    }
                    var P = C.child;
                    if (P !== null)
                      P.return = C, R = P;
                    else
                      for (; R !== null; ) {
                        C = R;
                        var x = C.sibling, T = C.return;
                        if (Sa(C), C === w) {
                          R = null;
                          break;
                        }
                        if (x !== null) {
                          x.return = T, R = x;
                          break;
                        }
                        R = T;
                      }
                  }
                }
                var O = i.alternate;
                if (O !== null) {
                  var I = O.child;
                  if (I !== null) {
                    O.child = null;
                    do {
                      var Le = I.sibling;
                      I.sibling = null, I = Le;
                    } while (I !== null);
                  }
                }
                R = i;
              }
            }
            if (i.subtreeFlags & 2064 && s !== null)
              s.return = i, R = s;
            else
              e:
                for (; R !== null; ) {
                  if (i = R, i.flags & 2048)
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jl(9, i, i.return);
                    }
                  var v = i.sibling;
                  if (v !== null) {
                    v.return = i.return, R = v;
                    break e;
                  }
                  R = i.return;
                }
          }
          var m = e.current;
          for (R = m; R !== null; ) {
            s = R;
            var y = s.child;
            if (s.subtreeFlags & 2064 && y !== null)
              y.return = s, R = y;
            else
              e:
                for (s = m; R !== null; ) {
                  if (c = R, c.flags & 2048)
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          jo(9, c);
                      }
                    } catch (U) {
                      Pe(c, c.return, U);
                    }
                  if (c === s) {
                    R = null;
                    break e;
                  }
                  var N = c.sibling;
                  if (N !== null) {
                    N.return = c.return, R = N;
                    break e;
                  }
                  R = c.return;
                }
          }
          if (ee = l, Ct(), an && typeof an.onPostCommitFiberRoot == "function")
            try {
              an.onPostCommitFiberRoot(Kt, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        re = t, Mn.transition = n;
      }
    }
    return !1;
  }
  function Ia(e, n, t) {
    n = $r(t, n), n = ea(e, n, 1), e = Nt(e, n, 1), n = on(), e !== null && (yt(e, 1, n), hn(e, n));
  }
  function Pe(e, n, t) {
    if (e.tag === 3)
      Ia(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ia(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
            e = $r(t, e), e = na(n, e, 1), n = Nt(n, e, 1), e = on(), n !== null && (yt(n, 1, e), hn(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function yf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = on(), e.pingedLanes |= e.suspendedLanes & t, Ae === e && (Ye & t) === t && (Te === 4 || Te === 3 && (Ye & 130023424) === Ye && 500 > de() - pu ? sr(e, 0) : du |= t), hn(e, n);
  }
  function ja(e, n) {
    n === 0 && (e.mode & 1 ? (n = Xt, Xt <<= 1, !(Xt & 130023424) && (Xt = 4194304)) : n = 1);
    var t = on();
    e = ot(e, n), e !== null && (yt(e, n, t), hn(e, t));
  }
  function gf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ja(e, t);
  }
  function wf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    r !== null && r.delete(n), ja(e, t);
  }
  var Ua;
  Ua = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || fn.current)
        pn = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return pn = !1, of(e, n, t);
        pn = !!(e.flags & 131072);
      }
    else
      pn = !1, ge && n.flags & 1048576 && vs(n, So, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        Fo(e, n), e = n.pendingProps;
        var l = Ir(n, Ge.current);
        Vr(n, t), l = Yi(null, n, r, e, l, t);
        var i = Ki();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, dn(r) ? (i = !0, yo(n)) : i = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(n), l.updater = Po, n.stateNode = l, l._reactInternals = n, Ai(n, r, e, t), n = nu(null, n, r, !0, i, t)) : (n.tag = 0, ge && i && Ni(n), ln(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (Fo(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = kf(r), e = jn(r, e), l) {
            case 0:
              n = eu(null, n, r, e, t);
              break e;
            case 1:
              n = ca(null, n, r, e, t);
              break e;
            case 11:
              n = oa(null, n, r, e, t);
              break e;
            case 14:
              n = ia(null, n, r, jn(r.type, e), t);
              break e;
          }
          throw Error(_(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : jn(r, l), eu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : jn(r, l), ca(e, n, r, l, t);
      case 3:
        e: {
          if (fa(n), e === null)
            throw Error(_(387));
          r = n.pendingProps, i = n.memoizedState, l = i.element, _s(e, n), Co(n, r, null, t);
          var s = n.memoizedState;
          if (r = s.element, i.isDehydrated)
            if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, n.updateQueue.baseState = i, n.memoizedState = i, n.flags & 256) {
              l = $r(Error(_(423)), n), n = da(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = $r(Error(_(424)), n), n = da(e, n, r, t, l);
              break e;
            } else
              for (kn = _t(n.stateNode.containerInfo.firstChild), Sn = n, ge = !0, In = null, t = Ts(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Ar(), r === l) {
              n = ut(e, n, t);
              break e;
            }
            ln(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return Rs(n), e === null && Mi(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, ki(r, l) ? s = null : i !== null && ki(r, i) && (n.flags |= 32), aa(e, n), ln(e, n, s, t), n.child;
      case 6:
        return e === null && Mi(n), null;
      case 13:
        return pa(e, n, t);
      case 4:
        return Hi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Wr(n, null, r, t) : ln(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : jn(r, l), oa(e, n, r, l, t);
      case 7:
        return ln(e, n, n.pendingProps, t), n.child;
      case 8:
        return ln(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return ln(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, i = n.memoizedProps, s = l.value, pe(_o, r._currentValue), r._currentValue = s, i !== null)
            if (Fn(i.value, s)) {
              if (i.children === l.children && !fn.current) {
                n = ut(e, n, t);
                break e;
              }
            } else
              for (i = n.child, i !== null && (i.return = n); i !== null; ) {
                var c = i.dependencies;
                if (c !== null) {
                  s = i.child;
                  for (var p = c.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (i.tag === 1) {
                        p = it(-1, t & -t), p.tag = 2;
                        var w = i.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var C = w.pending;
                          C === null ? p.next = p : (p.next = C.next, C.next = p), w.pending = p;
                        }
                      }
                      i.lanes |= t, p = i.alternate, p !== null && (p.lanes |= t), Fi(
                        i.return,
                        t,
                        n
                      ), c.lanes |= t;
                      break;
                    }
                    p = p.next;
                  }
                } else if (i.tag === 10)
                  s = i.type === n.type ? null : i.child;
                else if (i.tag === 18) {
                  if (s = i.return, s === null)
                    throw Error(_(341));
                  s.lanes |= t, c = s.alternate, c !== null && (c.lanes |= t), Fi(s, t, n), s = i.sibling;
                } else
                  s = i.child;
                if (s !== null)
                  s.return = i;
                else
                  for (s = i; s !== null; ) {
                    if (s === n) {
                      s = null;
                      break;
                    }
                    if (i = s.sibling, i !== null) {
                      i.return = s.return, s = i;
                      break;
                    }
                    s = s.return;
                  }
                i = s;
              }
          ln(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Vr(n, t), l = Ln(l), r = r(l), n.flags |= 1, ln(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = jn(r, n.pendingProps), l = jn(r.type, l), ia(e, n, r, l, t);
      case 15:
        return ua(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : jn(r, l), Fo(e, n), n.tag = 1, dn(r) ? (e = !0, yo(n)) : e = !1, Vr(n, t), Ns(n, r, l), Ai(n, r, l, t), nu(null, n, r, !0, e, t);
      case 19:
        return ha(e, n, t);
      case 22:
        return sa(e, n, t);
    }
    throw Error(_(156, n.tag));
  };
  function Aa(e, n) {
    return Gl(e, n);
  }
  function Sf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Tn(e, n, t, r) {
    return new Sf(e, n, t, r);
  }
  function ku(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kf(e) {
    if (typeof e == "function")
      return ku(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Cn)
        return 11;
      if (e === nn)
        return 14;
    }
    return 2;
  }
  function Ot(e, n) {
    var t = e.alternate;
    return t === null ? (t = Tn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Yo(e, n, t, r, l, i) {
    var s = 2;
    if (r = e, typeof e == "function")
      ku(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case Ee:
            return cr(t.children, l, i, n);
          case Ie:
            s = 8, l |= 8;
            break;
          case En:
            return e = Tn(12, t, n, l | 2), e.elementType = En, e.lanes = i, e;
          case Xe:
            return e = Tn(13, t, n, l), e.elementType = Xe, e.lanes = i, e;
          case We:
            return e = Tn(19, t, n, l), e.elementType = We, e.lanes = i, e;
          case me:
            return Ko(t, l, i, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case xn:
                  s = 10;
                  break e;
                case Vn:
                  s = 9;
                  break e;
                case Cn:
                  s = 11;
                  break e;
                case nn:
                  s = 14;
                  break e;
                case je:
                  s = 16, r = null;
                  break e;
              }
            throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return n = Tn(s, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
  }
  function cr(e, n, t, r) {
    return e = Tn(7, e, r, n), e.lanes = t, e;
  }
  function Ko(e, n, t, r) {
    return e = Tn(22, e, r, n), e.elementType = me, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function _u(e, n, t) {
    return e = Tn(6, e, null, n), e.lanes = t, e;
  }
  function Eu(e, n, t) {
    return n = Tn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function _f(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gt(0), this.expirationTimes = Gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gt(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function xu(e, n, t, r, l, i, s, c, p) {
    return e = new _f(e, n, t, c, p), n === 1 ? (n = 1, i === !0 && (n |= 8)) : n = 0, i = Tn(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(i), e;
  }
  function Ef(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Fe, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function Ha(e) {
    if (!e)
      return xt;
    e = e._reactInternals;
    e: {
      if ($n(e) !== e || e.tag !== 1)
        throw Error(_(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (dn(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(_(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (dn(t))
        return ps(e, t, n);
    }
    return n;
  }
  function Va(e, n, t, r, l, i, s, c, p) {
    return e = xu(t, r, !0, e, l, i, s, c, p), e.context = Ha(null), t = e.current, r = on(), l = Tt(t), i = it(r, l), i.callback = n ?? null, Nt(t, i, l), e.current.lanes = l, yt(e, l, r), hn(e, r), e;
  }
  function Xo(e, n, t, r) {
    var l = n.current, i = on(), s = Tt(l);
    return t = Ha(t), n.context === null ? n.context = t : n.pendingContext = t, n = it(i, s), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Nt(l, n, s), e !== null && (Hn(e, l, s, i), xo(e, l, s)), s;
  }
  function Go(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Wa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Cu(e, n) {
    Wa(e, n), (e = e.alternate) && Wa(e, n);
  }
  function xf() {
    return null;
  }
  var Ba = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pu(e) {
    this._internalRoot = e;
  }
  Zo.prototype.render = Pu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(_(409));
    Xo(e, n, null, null);
  }, Zo.prototype.unmount = Pu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      ur(function() {
        Xo(null, e, null, null);
      }), n[nt] = null;
    }
  };
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = no();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < gn.length && n !== 0 && n < gn[t].priority; t++)
        ;
      gn.splice(t, 0, e), t === 0 && g(e);
    }
  };
  function Nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Jo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function $a() {
  }
  function Cf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var w = Go(s);
          i.call(w);
        };
      }
      var s = Va(n, r, e, 0, null, !1, !1, "", $a);
      return e._reactRootContainer = s, e[nt] = s.current, xl(e.nodeType === 8 ? e.parentNode : e), ur(), s;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function() {
        var w = Go(p);
        c.call(w);
      };
    }
    var p = xu(e, 0, !1, null, null, !1, !1, "", $a);
    return e._reactRootContainer = p, e[nt] = p.current, xl(e.nodeType === 8 ? e.parentNode : e), ur(function() {
      Xo(n, p, t, r);
    }), p;
  }
  function qo(e, n, t, r, l) {
    var i = t._reactRootContainer;
    if (i) {
      var s = i;
      if (typeof l == "function") {
        var c = l;
        l = function() {
          var p = Go(s);
          c.call(p);
        };
      }
      Xo(n, s, e, l);
    } else
      s = Cf(t, n, e, l, r);
    return Go(s);
  }
  Pr = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = vt(n.pendingLanes);
          t !== 0 && (Zt(n, t | 1), hn(n, de()), !(ee & 6) && (Kr = de() + 500, Ct()));
        }
        break;
      case 13:
        ur(function() {
          var r = ot(e, 1);
          if (r !== null) {
            var l = on();
            Hn(r, e, 1, l);
          }
        }), Cu(e, 1);
    }
  }, pl = function(e) {
    if (e.tag === 13) {
      var n = ot(e, 134217728);
      if (n !== null) {
        var t = on();
        Hn(n, e, 134217728, t);
      }
      Cu(e, 134217728);
    }
  }, eo = function(e) {
    if (e.tag === 13) {
      var n = Tt(e), t = ot(e, n);
      if (t !== null) {
        var r = on();
        Hn(t, e, n, r);
      }
      Cu(e, n);
    }
  }, no = function() {
    return re;
  }, to = function(e, n) {
    var t = re;
    try {
      return re = e, n();
    } finally {
      re = t;
    }
  }, Bt = function(e, n, t) {
    switch (n) {
      case "input":
        if (Wn(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = ho(r);
              if (!l)
                throw Error(_(90));
              Zr(r), Wn(r, l);
            }
          }
        }
        break;
      case "textarea":
        qr(e, t);
        break;
      case "select":
        n = t.value, n != null && Bn(e, !!t.multiple, n, !1);
    }
  }, Xl = gu, rl = ur;
  var Pf = { usingClientEntryPoint: !1, Events: [Nl, Dr, ho, $t, tl, gu] }, Vl = { findFiberByHostInstance: bt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Nf = { bundleType: Vl.bundleType, version: Vl.version, rendererPackageName: Vl.rendererPackageName, rendererConfig: Vl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = al(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Vl.findFiberByHostInstance || xf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber)
      try {
        Kt = bo.inject(Nf), an = bo;
      } catch {
      }
  }
  return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf, vn.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nu(n))
      throw Error(_(200));
    return Ef(e, n, null, t);
  }, vn.createRoot = function(e, n) {
    if (!Nu(e))
      throw Error(_(299));
    var t = !1, r = "", l = Ba;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = xu(e, 1, !1, null, null, t, !1, r, l), e[nt] = n.current, xl(e.nodeType === 8 ? e.parentNode : e), new Pu(n);
  }, vn.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = al(n), e = e === null ? null : e.stateNode, e;
  }, vn.flushSync = function(e) {
    return ur(e);
  }, vn.hydrate = function(e, n, t) {
    if (!Jo(n))
      throw Error(_(200));
    return qo(null, e, n, !0, t);
  }, vn.hydrateRoot = function(e, n, t) {
    if (!Nu(e))
      throw Error(_(405));
    var r = t != null && t.hydratedSources || null, l = !1, i = "", s = Ba;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), n = Va(n, null, e, 1, t ?? null, l, !1, i, s), e[nt] = n.current, xl(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new Zo(n);
  }, vn.render = function(e, n, t) {
    if (!Jo(n))
      throw Error(_(200));
    return qo(null, e, n, !1, t);
  }, vn.unmountComponentAtNode = function(e) {
    if (!Jo(e))
      throw Error(_(40));
    return e._reactRootContainer ? (ur(function() {
      qo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[nt] = null;
      });
    }), !0) : !1;
  }, vn.unstable_batchedUpdates = gu, vn.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Jo(t))
      throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(_(38));
    return qo(e, n, t, !1, r);
  }, vn.version = "18.2.0-next-9e3b772b8-20220608", vn;
}
function ba() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ba);
    } catch (D) {
      console.error(D);
    }
}
ba(), qa.exports = Ff();
var If = qa.exports;
const jf = /* @__PURE__ */ Mu(If);
var ec = { exports: {} };
const Uf = {}, Af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uf
}, Symbol.toStringTag, { value: "Module" })), Gr = /* @__PURE__ */ zf(Af);
(function(D, oe) {
  var _ = function() {
    var J = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
    return typeof __filename < "u" && (J = J || __filename), function(ue) {
      ue = ue || {};
      var h;
      h || (h = typeof ue < "u" ? ue : {});
      var Ve, ke;
      h.ready = new Promise(function(o, u) {
        Ve = o, ke = u;
      });
      const $ = [], Re = [];
      h.print = (o) => $.push(o), h.printErr = (o) => Re.push(o);
      var _e = {}, ne;
      for (ne in h)
        h.hasOwnProperty(ne) && (_e[ne] = h[ne]);
      var ce = "./this.program", be = typeof window == "object", Oe = typeof importScripts == "function", se = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", Y = "", yn, en, Ke, ye, De;
      se ? (Y = Oe ? Gr.dirname(Y) + "/" : __dirname + "/", yn = function(o, u) {
        return ye || (ye = Gr), De || (De = Gr), o = De.normalize(o), ye.readFileSync(o, u ? null : "utf8");
      }, Ke = function(o) {
        return o = yn(o, !0), o.buffer || (o = new Uint8Array(o)), o.buffer || Ne("Assertion failed: undefined"), o;
      }, en = function(o, u, a) {
        ye || (ye = Gr), De || (De = Gr), o = De.normalize(o), ye.readFile(o, function(f, g) {
          f ? a(f) : u(g.buffer);
        });
      }, 1 < process.argv.length && (ce = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on(
        "uncaughtException",
        function(o) {
          throw o;
        }
      ), process.on("unhandledRejection", function(o) {
        throw o;
      }), h.inspect = function() {
        return "[Emscripten Module object]";
      }) : (be || Oe) && (Oe ? Y = self.location.href : typeof document < "u" && document.currentScript && (Y = document.currentScript.src), J && (Y = J), Y = Y.indexOf("blob:") !== 0 ? Y.substr(0, Y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", yn = function(o) {
        var u = new XMLHttpRequest();
        return u.open("GET", o, !1), u.send(null), u.responseText;
      }, Oe && (Ke = function(o) {
        var u = new XMLHttpRequest();
        return u.open("GET", o, !1), u.responseType = "arraybuffer", u.send(null), new Uint8Array(u.response);
      }), en = function(o, u, a) {
        var f = new XMLHttpRequest();
        f.open("GET", o, !0), f.responseType = "arraybuffer", f.onload = function() {
          f.status == 200 || f.status == 0 && f.response ? u(f.response) : a();
        }, f.onerror = a, f.send(null);
      });
      var Fe = h.print || console.log.bind(console), Ee = h.printErr || console.warn.bind(console);
      for (ne in _e)
        _e.hasOwnProperty(ne) && (h[ne] = _e[ne]);
      _e = null, h.thisProgram && (ce = h.thisProgram);
      var Ie;
      h.wasmBinary && (Ie = h.wasmBinary), h.noExitRuntime, typeof WebAssembly != "object" && Ne("no native wasm support detected");
      var En, xn = !1;
      function Vn(o) {
        var u = h["_" + o];
        return u || Ne("Assertion failed: Cannot call unknown function " + (o + ", make sure it is exported")), u;
      }
      function Cn(o, u, a, f) {
        var g = { string: function(Q) {
          var b = 0;
          if (Q != null && Q !== 0) {
            var $e = (Q.length << 2) + 1;
            b = Zt($e), je(Q, d, b, $e);
          }
          return b;
        }, array: function(Q) {
          var b = Zt(Q.length);
          return j.set(Q, b), b;
        } };
        o = Vn(o);
        var S = [], F = 0;
        if (f)
          for (var G = 0; G < f.length; G++) {
            var Ce = g[a[G]];
            Ce ? (F === 0 && (F = yt()), S[G] = Ce(f[G])) : S[G] = f[G];
          }
        return a = o.apply(null, S), a = function(Q) {
          return F !== 0 && bl(F), u === "string" ? nn(Q) : u === "boolean" ? !!Q : Q;
        }(a);
      }
      var Xe = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
      function We(o, u, a) {
        var f = u + a;
        for (a = u; o[a] && !(a >= f); )
          ++a;
        if (16 < a - u && o.subarray && Xe)
          return Xe.decode(o.subarray(u, a));
        for (f = ""; u < a; ) {
          var g = o[u++];
          if (g & 128) {
            var S = o[u++] & 63;
            if ((g & 224) == 192)
              f += String.fromCharCode((g & 31) << 6 | S);
            else {
              var F = o[u++] & 63;
              g = (g & 240) == 224 ? (g & 15) << 12 | S << 6 | F : (g & 7) << 18 | S << 12 | F << 6 | o[u++] & 63, 65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
            }
          } else
            f += String.fromCharCode(g);
        }
        return f;
      }
      function nn(o) {
        return o ? We(d, o, void 0) : "";
      }
      function je(o, u, a, f) {
        if (!(0 < f))
          return 0;
        var g = a;
        f = a + f - 1;
        for (var S = 0; S < o.length; ++S) {
          var F = o.charCodeAt(S);
          if (55296 <= F && 57343 >= F) {
            var G = o.charCodeAt(++S);
            F = 65536 + ((F & 1023) << 10) | G & 1023;
          }
          if (127 >= F) {
            if (a >= f)
              break;
            u[a++] = F;
          } else {
            if (2047 >= F) {
              if (a + 1 >= f)
                break;
              u[a++] = 192 | F >> 6;
            } else {
              if (65535 >= F) {
                if (a + 2 >= f)
                  break;
                u[a++] = 224 | F >> 12;
              } else {
                if (a + 3 >= f)
                  break;
                u[a++] = 240 | F >> 18, u[a++] = 128 | F >> 12 & 63;
              }
              u[a++] = 128 | F >> 6 & 63;
            }
            u[a++] = 128 | F & 63;
          }
        }
        return u[a] = 0, a - g;
      }
      function me(o) {
        for (var u = 0, a = 0; a < o.length; ++a) {
          var f = o.charCodeAt(a);
          55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | o.charCodeAt(++a) & 1023), 127 >= f ? ++u : u = 2047 >= f ? u + 2 : 65535 >= f ? u + 3 : u + 4;
        }
        return u;
      }
      var M, j, d, E, L;
      function X() {
        var o = En.buffer;
        M = o, h.HEAP8 = j = new Int8Array(o), h.HEAP16 = E = new Int16Array(o), h.HEAP32 = L = new Int32Array(o), h.HEAPU8 = d = new Uint8Array(o), h.HEAPU16 = new Uint16Array(o), h.HEAPU32 = new Uint32Array(o), h.HEAPF32 = new Float32Array(o), h.HEAPF64 = new Float64Array(o);
      }
      var B, ae = [], q = [], ie = [];
      function te() {
        var o = h.preRun.shift();
        ae.unshift(o);
      }
      var xe = 0, Ft = null;
      h.preloadedImages = {}, h.preloadedAudios = {};
      function Ne(o) {
        throw h.onAbort && h.onAbort(o), o = "Aborted(" + o + ")", Ee(o), xn = !0, o = new WebAssembly.RuntimeError(o + ". Build with -s ASSERTIONS=1 for more info."), ke(o), o;
      }
      function Zr() {
        return Be.startsWith("data:application/octet-stream;base64,");
      }
      var Be;
      if (Be = "highs.wasm", !Zr()) {
        var fr = Be;
        Be = h.locateFile ? h.locateFile(fr, Y) : Y + fr;
      }
      function Jr() {
        var o = Be;
        try {
          if (o == Be && Ie)
            return new Uint8Array(Ie);
          if (Ke)
            return Ke(o);
          throw "both async and sync fetching of the wasm failed";
        } catch (u) {
          Ne(u);
        }
      }
      function $l() {
        if (!Ie && (be || Oe)) {
          if (typeof fetch == "function" && !Be.startsWith("file://"))
            return fetch(Be, { credentials: "same-origin" }).then(function(o) {
              if (!o.ok)
                throw "failed to load wasm binary file at '" + Be + "'";
              return o.arrayBuffer();
            }).catch(function() {
              return Jr();
            });
          if (en)
            return new Promise(function(o, u) {
              en(Be, function(a) {
                o(new Uint8Array(a));
              }, u);
            });
        }
        return Promise.resolve().then(function() {
          return Jr();
        });
      }
      var Wn, dr;
      function It(o) {
        for (; 0 < o.length; ) {
          var u = o.shift();
          if (typeof u == "function")
            u(h);
          else {
            var a = u.Oa;
            typeof a == "number" ? u.ga === void 0 ? B.get(a)() : B.get(a)(u.ga) : a(u.ga === void 0 ? null : u.ga);
          }
        }
      }
      function jt(o) {
        this.Y = o - 16, this.Ha = function(u) {
          L[this.Y + 4 >> 2] = u;
        }, this.Ea = function(u) {
          L[this.Y + 8 >> 2] = u;
        }, this.Fa = function() {
          L[this.Y >> 2] = 0;
        }, this.Da = function() {
          j[this.Y + 12 >> 0] = 0;
        }, this.Ga = function() {
          j[this.Y + 13 >> 0] = 0;
        }, this.xa = function(u, a) {
          this.Ha(u), this.Ea(a), this.Fa(), this.Da(), this.Ga();
        };
      }
      function Bn(o, u) {
        for (var a = 0, f = o.length - 1; 0 <= f; f--) {
          var g = o[f];
          g === "." ? o.splice(f, 1) : g === ".." ? (o.splice(f, 1), a++) : a && (o.splice(f, 1), a--);
        }
        if (u)
          for (; a; a--)
            o.unshift("..");
        return o;
      }
      function at(o) {
        var u = o.charAt(0) === "/", a = o.substr(-1) === "/";
        return (o = Bn(o.split("/").filter(function(f) {
          return !!f;
        }), !u).join("/")) || u || (o = "."), o && a && (o += "/"), (u ? "/" : "") + o;
      }
      function Ql(o) {
        var u = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(o).slice(1);
        return o = u[0], u = u[1], !o && !u ? "." : (u && (u = u.substr(0, u.length - 1)), o + u);
      }
      function qr(o) {
        if (o === "/")
          return "/";
        o = at(o), o = o.replace(/\/$/, "");
        var u = o.lastIndexOf("/");
        return u === -1 ? o : o.substr(u + 1);
      }
      function Yl() {
        if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
          var o = new Uint8Array(1);
          return function() {
            return crypto.getRandomValues(o), o[0];
          };
        }
        if (se)
          try {
            var u = Gr;
            return function() {
              return u.randomBytes(1)[0];
            };
          } catch {
          }
        return function() {
          Ne("randomDevice");
        };
      }
      function Ut() {
        for (var o = "", u = !1, a = arguments.length - 1; -1 <= a && !u; a--) {
          if (u = 0 <= a ? arguments[a] : "/", typeof u != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!u)
            return "";
          o = u + "/" + o, u = u.charAt(0) === "/";
        }
        return o = Bn(o.split("/").filter(function(f) {
          return !!f;
        }), !u).join("/"), (u ? "/" : "") + o || ".";
      }
      var pr = [];
      function At(o, u) {
        pr[o] = { input: [], output: [], X: u }, il(o, Kl);
      }
      var Kl = { open: function(o) {
        var u = pr[o.node.rdev];
        if (!u)
          throw new z(43);
        o.tty = u, o.seekable = !1;
      }, close: function(o) {
        o.tty.X.flush(o.tty);
      }, flush: function(o) {
        o.tty.X.flush(o.tty);
      }, read: function(o, u, a, f) {
        if (!o.tty || !o.tty.X.pa)
          throw new z(60);
        for (var g = 0, S = 0; S < f; S++) {
          try {
            var F = o.tty.X.pa(o.tty);
          } catch {
            throw new z(29);
          }
          if (F === void 0 && g === 0)
            throw new z(6);
          if (F == null)
            break;
          g++, u[a + S] = F;
        }
        return g && (o.node.timestamp = Date.now()), g;
      }, write: function(o, u, a, f) {
        if (!o.tty || !o.tty.X.ia)
          throw new z(60);
        try {
          for (var g = 0; g < f; g++)
            o.tty.X.ia(o.tty, u[a + g]);
        } catch {
          throw new z(29);
        }
        return f && (o.node.timestamp = Date.now()), g;
      } }, Ht = { pa: function(o) {
        if (!o.input.length) {
          var u = null;
          if (se) {
            u = Buffer.alloc(256);
            var a = 0;
            try {
              a = ye.readSync(process.stdin.fd, u, 0, 256, null);
            } catch (f) {
              if (f.toString().includes("EOF"))
                a = 0;
              else
                throw f;
            }
            u = 0 < a ? u.slice(0, a).toString("utf-8") : null;
          } else
            typeof window < "u" && typeof window.prompt == "function" ? (u = window.prompt("Input: "), u !== null && (u += `
`)) : typeof readline == "function" && (u = readline(), u !== null && (u += `
`));
          if (!u)
            return null;
          o.input = vt(u, !0);
        }
        return o.input.shift();
      }, ia: function(o, u) {
        u === null || u === 10 ? (Fe(We(o.output, 0)), o.output = []) : u != 0 && o.output.push(u);
      }, flush: function(o) {
        o.output && 0 < o.output.length && (Fe(We(o.output, 0)), o.output = []);
      } }, Vt = { ia: function(o, u) {
        u === null || u === 10 ? (Ee(We(o.output, 0)), o.output = []) : u != 0 && o.output.push(u);
      }, flush: function(o) {
        o.output && 0 < o.output.length && (Ee(We(o.output, 0)), o.output = []);
      } }, W = { R: null, T: function() {
        return W.createNode(null, "/", 16895, 0);
      }, createNode: function(o, u, a, f) {
        if ((a & 61440) === 24576 || (a & 61440) === 4096)
          throw new z(63);
        return W.R || (W.R = { dir: { node: { U: W.M.U, S: W.M.S, lookup: W.M.lookup, aa: W.M.aa, rename: W.M.rename, unlink: W.M.unlink, rmdir: W.M.rmdir, readdir: W.M.readdir, symlink: W.M.symlink }, stream: { W: W.N.W } }, file: { node: { U: W.M.U, S: W.M.S }, stream: { W: W.N.W, read: W.N.read, write: W.N.write, ka: W.N.ka, qa: W.N.qa, sa: W.N.sa } }, link: { node: { U: W.M.U, S: W.M.S, readlink: W.M.readlink }, stream: {} }, la: { node: { U: W.M.U, S: W.M.S }, stream: Yt } }), a = tl(o, u, a, f), (a.mode & 61440) === 16384 ? (a.M = W.R.dir.node, a.N = W.R.dir.stream, a.L = {}) : (a.mode & 61440) === 32768 ? (a.M = W.R.file.node, a.N = W.R.file.stream, a.O = 0, a.L = null) : (a.mode & 61440) === 40960 ? (a.M = W.R.link.node, a.N = W.R.link.stream) : (a.mode & 61440) === 8192 && (a.M = W.R.la.node, a.N = W.R.la.stream), a.timestamp = Date.now(), o && (o.L[u] = a, o.timestamp = a.timestamp), a;
      }, Pa: function(o) {
        return o.L ? o.L.subarray ? o.L.subarray(0, o.O) : new Uint8Array(o.L) : new Uint8Array(0);
      }, ma: function(o, u) {
        var a = o.L ? o.L.length : 0;
        a >= u || (u = Math.max(u, a * (1048576 > a ? 2 : 1.125) >>> 0), a != 0 && (u = Math.max(
          u,
          256
        )), a = o.L, o.L = new Uint8Array(u), 0 < o.O && o.L.set(a.subarray(0, o.O), 0));
      }, Ba: function(o, u) {
        if (o.O != u)
          if (u == 0)
            o.L = null, o.O = 0;
          else {
            var a = o.L;
            o.L = new Uint8Array(u), a && o.L.set(a.subarray(0, Math.min(u, o.O))), o.O = u;
          }
      }, M: { U: function(o) {
        var u = {};
        return u.dev = (o.mode & 61440) === 8192 ? o.id : 1, u.ino = o.id, u.mode = o.mode, u.nlink = 1, u.uid = 0, u.gid = 0, u.rdev = o.rdev, u.size = (o.mode & 61440) === 16384 ? 4096 : (o.mode & 61440) === 32768 ? o.O : (o.mode & 61440) === 40960 ? o.link.length : 0, u.atime = new Date(o.timestamp), u.mtime = new Date(o.timestamp), u.ctime = new Date(o.timestamp), u.va = 4096, u.blocks = Math.ceil(u.size / u.va), u;
      }, S: function(o, u) {
        u.mode !== void 0 && (o.mode = u.mode), u.timestamp !== void 0 && (o.timestamp = u.timestamp), u.size !== void 0 && W.Ba(o, u.size);
      }, lookup: function() {
        throw Bt[44];
      }, aa: function(o, u, a, f) {
        return W.createNode(o, u, a, f);
      }, rename: function(o, u, a) {
        if ((o.mode & 61440) === 16384) {
          try {
            var f = $t(u, a);
          } catch {
          }
          if (f)
            for (var g in f.L)
              throw new z(55);
        }
        delete o.parent.L[o.name], o.parent.timestamp = Date.now(), o.name = a, u.L[a] = o, u.timestamp = o.parent.timestamp, o.parent = u;
      }, unlink: function(o, u) {
        delete o.L[u], o.timestamp = Date.now();
      }, rmdir: function(o, u) {
        var a = $t(o, u), f;
        for (f in a.L)
          throw new z(55);
        delete o.L[u], o.timestamp = Date.now();
      }, readdir: function(o) {
        var u = [".", ".."], a;
        for (a in o.L)
          o.L.hasOwnProperty(a) && u.push(a);
        return u;
      }, symlink: function(o, u, a) {
        return o = W.createNode(o, u, 41471, 0), o.link = a, o;
      }, readlink: function(o) {
        if ((o.mode & 61440) !== 40960)
          throw new z(28);
        return o.link;
      } }, N: { read: function(o, u, a, f, g) {
        var S = o.node.L;
        if (g >= o.node.O)
          return 0;
        if (o = Math.min(o.node.O - g, f), 8 < o && S.subarray)
          u.set(S.subarray(g, g + o), a);
        else
          for (f = 0; f < o; f++)
            u[a + f] = S[g + f];
        return o;
      }, write: function(o, u, a, f, g, S) {
        if (u.buffer === j.buffer && (S = !1), !f)
          return 0;
        if (o = o.node, o.timestamp = Date.now(), u.subarray && (!o.L || o.L.subarray)) {
          if (S)
            return o.L = u.subarray(a, a + f), o.O = f;
          if (o.O === 0 && g === 0)
            return o.L = u.slice(a, a + f), o.O = f;
          if (g + f <= o.O)
            return o.L.set(u.subarray(a, a + f), g), f;
        }
        if (W.ma(o, g + f), o.L.subarray && u.subarray)
          o.L.set(u.subarray(a, a + f), g);
        else
          for (S = 0; S < f; S++)
            o.L[g + S] = u[a + S];
        return o.O = Math.max(o.O, g + f), f;
      }, W: function(o, u, a) {
        if (a === 1 ? u += o.position : a === 2 && (o.node.mode & 61440) === 32768 && (u += o.node.O), 0 > u)
          throw new z(28);
        return u;
      }, ka: function(o, u, a) {
        W.ma(o.node, u + a), o.node.O = Math.max(o.node.O, u + a);
      }, qa: function(o, u, a, f, g, S) {
        if (u !== 0)
          throw new z(28);
        if ((o.node.mode & 61440) !== 32768)
          throw new z(43);
        if (o = o.node.L, S & 2 || o.buffer !== M) {
          if ((0 < f || f + a < o.length) && (o = o.subarray ? o.subarray(f, f + a) : Array.prototype.slice.call(o, f, f + a)), f = !0, Ne(), a = void 0, !a)
            throw new z(48);
          j.set(o, a);
        } else
          f = !1, a = o.byteOffset;
        return {
          Y: a,
          Na: f
        };
      }, sa: function(o, u, a, f, g) {
        if ((o.node.mode & 61440) !== 32768)
          throw new z(43);
        return g & 2 || W.N.write(o, u, 0, f, a, !1), 0;
      } } }, mr = null, br = {}, Wt = [], el = 1, Zn = null, hr = !0, z = null, Bt = {};
      function un(o, u) {
        if (o = Ut("/", o), u = u || {}, !o)
          return { path: "", node: null };
        var a = { oa: !0, ja: 0 }, f;
        for (f in a)
          u[f] === void 0 && (u[f] = a[f]);
        if (8 < u.ja)
          throw new z(32);
        o = Bn(o.split("/").filter(function(F) {
          return !!F;
        }), !1);
        var g = mr;
        for (a = "/", f = 0; f < o.length; f++) {
          var S = f === o.length - 1;
          if (S && u.parent)
            break;
          if (g = $t(g, o[f]), a = at(a + "/" + o[f]), g.ba && (!S || S && u.oa) && (g = g.ba.root), !S || u.na) {
            for (S = 0; (g.mode & 61440) === 40960; )
              if (g = ei(a), a = Ut(Ql(a), g), g = un(a, { ja: u.ja }).node, 40 < S++)
                throw new z(32);
          }
        }
        return { path: a, node: g };
      }
      function Jn(o) {
        for (var u; ; ) {
          if (o === o.parent)
            return o = o.T.ra, u ? o[o.length - 1] !== "/" ? o + "/" + u : o + u : o;
          u = u ? o.name + "/" + u : o.name, o = o.parent;
        }
      }
      function nl(o, u) {
        for (var a = 0, f = 0; f < u.length; f++)
          a = (a << 5) - a + u.charCodeAt(f) | 0;
        return (o + a >>> 0) % Zn.length;
      }
      function $t(o, u) {
        var a;
        if (a = (a = ct(o, "x")) ? a : o.M.lookup ? 0 : 2)
          throw new z(a, o);
        for (a = Zn[nl(o.id, u)]; a; a = a.Aa) {
          var f = a.name;
          if (a.parent.id === o.id && f === u)
            return a;
        }
        return o.M.lookup(o, u);
      }
      function tl(o, u, a, f) {
        return o = new Xt(o, u, a, f), u = nl(o.parent.id, o.name), o.Aa = Zn[u], Zn[u] = o;
      }
      var Xl = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 };
      function rl(o) {
        var u = ["r", "w", "rw"][o & 3];
        return o & 512 && (u += "w"), u;
      }
      function ct(o, u) {
        if (hr)
          return 0;
        if (!u.includes("r") || o.mode & 292) {
          if (u.includes("w") && !(o.mode & 146) || u.includes("x") && !(o.mode & 73))
            return 2;
        } else
          return 2;
        return 0;
      }
      function ll(o, u) {
        try {
          return $t(o, u), 20;
        } catch {
        }
        return ct(o, "wx");
      }
      function Qt(o) {
        var u = 4096;
        for (o = o || 0; o <= u; o++)
          if (!Wt[o])
            return o;
        throw new z(33);
      }
      function ol(o, u) {
        de || (de = function() {
        }, de.prototype = { object: { get: function() {
          return this.node;
        }, set: function(g) {
          this.node = g;
        } } });
        var a = new de(), f;
        for (f in o)
          a[f] = o[f];
        return o = a, u = Qt(u), o.fd = u, Wt[u] = o;
      }
      var Yt = { open: function(o) {
        o.N = br[o.node.rdev].N, o.N.open && o.N.open(o);
      }, W: function() {
        throw new z(70);
      } };
      function il(o, u) {
        br[o] = { N: u };
      }
      function ft(o, u) {
        var a = u === "/", f = !u;
        if (a && mr)
          throw new z(10);
        if (!a && !f) {
          var g = un(u, { oa: !1 });
          if (u = g.path, g = g.node, g.ba)
            throw new z(10);
          if ((g.mode & 61440) !== 16384)
            throw new z(54);
        }
        u = { type: o, Qa: {}, ra: u, za: [] }, o = o.T(u), o.T = u, u.root = o, a ? mr = o : g && (g.ba = u, g.T && g.T.za.push(u));
      }
      function dt(o, u, a) {
        var f = un(o, { parent: !0 }).node;
        if (o = qr(o), !o || o === "." || o === "..")
          throw new z(28);
        var g = ll(f, o);
        if (g)
          throw new z(g);
        if (!f.M.aa)
          throw new z(63);
        return f.M.aa(f, o, u, a);
      }
      function sn(o) {
        return dt(o, 16895, 0);
      }
      function pt(o, u, a) {
        typeof a > "u" && (a = u, u = 438), dt(o, u | 8192, a);
      }
      function ul(o, u) {
        if (!Ut(o))
          throw new z(44);
        var a = un(u, { parent: !0 }).node;
        if (!a)
          throw new z(44);
        u = qr(u);
        var f = ll(a, u);
        if (f)
          throw new z(f);
        if (!a.M.symlink)
          throw new z(63);
        a.M.symlink(a, u, o);
      }
      function ei(o) {
        if (o = un(o).node, !o)
          throw new z(44);
        if (!o.M.readlink)
          throw new z(28);
        return Ut(Jn(o.parent), o.M.readlink(o));
      }
      function mt(o, u, a, f) {
        if (o === "")
          throw new z(44);
        if (typeof u == "string") {
          var g = Xl[u];
          if (typeof g > "u")
            throw Error("Unknown file open mode: " + u);
          u = g;
        }
        if (a = u & 64 ? (typeof a > "u" ? 438 : a) & 4095 | 32768 : 0, typeof o == "object")
          var S = o;
        else {
          o = at(o);
          try {
            S = un(o, { na: !(u & 131072) }).node;
          } catch {
          }
        }
        if (g = !1, u & 64)
          if (S) {
            if (u & 128)
              throw new z(20);
          } else
            S = dt(o, a, 0), g = !0;
        if (!S)
          throw new z(44);
        if ((S.mode & 61440) === 8192 && (u &= -513), u & 65536 && (S.mode & 61440) !== 16384)
          throw new z(54);
        if (!g && (a = S ? (S.mode & 61440) === 40960 ? 32 : (S.mode & 61440) === 16384 && (rl(u) !== "r" || u & 512) ? 31 : ct(S, rl(u)) : 44))
          throw new z(a);
        if (u & 512) {
          if (a = S, a = typeof a == "string" ? un(a, { na: !0 }).node : a, !a.M.S)
            throw new z(63);
          if ((a.mode & 61440) === 16384)
            throw new z(31);
          if ((a.mode & 61440) !== 32768)
            throw new z(28);
          if (g = ct(a, "w"))
            throw new z(g);
          a.M.S(a, { size: 0, timestamp: Date.now() });
        }
        return u &= -131713, f = ol({ node: S, path: Jn(S), flags: u, seekable: !0, position: 0, N: S.N, Ma: [], error: !1 }, f), f.N.open && f.N.open(f), !h.logReadFiles || u & 1 || (yr || (yr = {}), o in yr || (yr[o] = 1)), f;
      }
      function $n(o) {
        if (o.fd === null)
          throw new z(8);
        o.ha && (o.ha = null);
        try {
          o.N.close && o.N.close(o);
        } catch (u) {
          throw u;
        } finally {
          Wt[o.fd] = null;
        }
        o.fd = null;
      }
      function sl(o, u, a) {
        if (o.fd === null)
          throw new z(8);
        if (!o.seekable || !o.N.W)
          throw new z(70);
        if (a != 0 && a != 1 && a != 2)
          throw new z(28);
        o.position = o.N.W(o, u, a), o.Ma = [];
      }
      function vr(o, u, a, f, g) {
        var S = void 0;
        if (0 > f || 0 > S)
          throw new z(28);
        if (o.fd === null)
          throw new z(8);
        if (!(o.flags & 2097155))
          throw new z(8);
        if ((o.node.mode & 61440) === 16384)
          throw new z(31);
        if (!o.N.write)
          throw new z(28);
        o.seekable && o.flags & 1024 && sl(o, 0, 2);
        var F = typeof S < "u";
        if (!F)
          S = o.position;
        else if (!o.seekable)
          throw new z(70);
        return u = o.N.write(o, u, a, f, S, g), F || (o.position += u), u;
      }
      function ni(o) {
        var u = u || {};
        u.flags = u.flags || 577;
        var a = mt("m.lp", u.flags, u.mode);
        if (typeof o == "string") {
          var f = new Uint8Array(me(o) + 1);
          o = je(o, f, 0, f.length), vr(a, f, 0, o, u.wa);
        } else if (ArrayBuffer.isView(o))
          vr(a, o, 0, o.byteLength, u.wa);
        else
          throw Error("Unsupported data type");
        $n(a);
      }
      function al() {
        z || (z = function(o, u) {
          this.node = u, this.Ca = function(a) {
            this.V = a;
          }, this.Ca(o), this.message = "FS error";
        }, z.prototype = Error(), z.prototype.constructor = z, [44].forEach(function(o) {
          Bt[o] = new z(o), Bt[o].stack = "<generic error, no stack>";
        }));
      }
      var cl;
      function Gl(o, u) {
        var a = 0;
        return o && (a |= 365), u && (a |= 146), a;
      }
      function ht(o, u, a) {
        o = at("/dev/" + o);
        var f = Gl(!!u, !!a);
        fl || (fl = 64);
        var g = fl++ << 8 | 0;
        il(g, { open: function(S) {
          S.seekable = !1;
        }, close: function() {
          a && a.buffer && a.buffer.length && a(10);
        }, read: function(S, F, G, Ce) {
          for (var Q = 0, b = 0; b < Ce; b++) {
            try {
              var $e = u();
            } catch {
              throw new z(29);
            }
            if ($e === void 0 && Q === 0)
              throw new z(6);
            if ($e == null)
              break;
            Q++, F[G + b] = $e;
          }
          return Q && (S.node.timestamp = Date.now()), Q;
        }, write: function(S, F, G, Ce) {
          for (var Q = 0; Q < Ce; Q++)
            try {
              a(F[G + Q]);
            } catch {
              throw new z(29);
            }
          return Ce && (S.node.timestamp = Date.now()), Q;
        } }), pt(o, f, g);
      }
      var fl, qn = {}, de, yr, bn = void 0;
      function et() {
        return bn += 4, L[bn - 4 >> 2];
      }
      function On(o) {
        if (o = Wt[o], !o)
          throw new z(8);
        return o;
      }
      var Zl;
      Zl = se ? function() {
        var o = process.hrtime();
        return 1e3 * o[0] + o[1] / 1e6;
      } : function() {
        return performance.now();
      };
      var gr = {};
      function Kt() {
        if (!an) {
          var o = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: ce || "./this.program" }, u;
          for (u in gr)
            gr[u] === void 0 ? delete o[u] : o[u] = gr[u];
          var a = [];
          for (u in o)
            a.push(u + "=" + o[u]);
          an = a;
        }
        return an;
      }
      var an;
      function wr(o) {
        return o % 4 === 0 && (o % 100 !== 0 || o % 400 === 0);
      }
      function tn(o, u) {
        for (var a = 0, f = 0; f <= u; a += o[f++])
          ;
        return a;
      }
      var Sr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function _r(o, u) {
        for (o = new Date(o.getTime()); 0 < u; ) {
          var a = o.getMonth(), f = (wr(o.getFullYear()) ? Sr : kr)[a];
          if (u > f - o.getDate())
            u -= f - o.getDate() + 1, o.setDate(1), 11 > a ? o.setMonth(a + 1) : (o.setMonth(0), o.setFullYear(o.getFullYear() + 1));
          else {
            o.setDate(o.getDate() + u);
            break;
          }
        }
        return o;
      }
      function Er(o, u, a, f) {
        function g(k, K, fe) {
          for (k = typeof k == "number" ? k.toString() : k || ""; k.length < K; )
            k = fe[0] + k;
          return k;
        }
        function S(k, K) {
          return g(k, K, "0");
        }
        function F(k, K) {
          function fe(hl) {
            return 0 > hl ? -1 : 0 < hl ? 1 : 0;
          }
          var rn;
          return (rn = fe(k.getFullYear() - K.getFullYear())) === 0 && (rn = fe(k.getMonth() - K.getMonth())) === 0 && (rn = fe(k.getDate() - K.getDate())), rn;
        }
        function G(k) {
          switch (k.getDay()) {
            case 0:
              return new Date(k.getFullYear() - 1, 11, 29);
            case 1:
              return k;
            case 2:
              return new Date(k.getFullYear(), 0, 3);
            case 3:
              return new Date(
                k.getFullYear(),
                0,
                2
              );
            case 4:
              return new Date(k.getFullYear(), 0, 1);
            case 5:
              return new Date(k.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(k.getFullYear() - 1, 11, 30);
          }
        }
        function Ce(k) {
          k = _r(new Date(k.P + 1900, 0, 1), k.fa);
          var K = new Date(k.getFullYear() + 1, 0, 4), fe = G(new Date(k.getFullYear(), 0, 4));
          return K = G(K), 0 >= F(fe, k) ? 0 >= F(K, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
        }
        var Q = L[f + 40 >> 2];
        f = { Ka: L[f >> 2], Ja: L[f + 4 >> 2], da: L[f + 8 >> 2], $: L[f + 12 >> 2], Z: L[f + 16 >> 2], P: L[f + 20 >> 2], ea: L[f + 24 >> 2], fa: L[f + 28 >> 2], Ra: L[f + 32 >> 2], Ia: L[f + 36 >> 2], La: Q ? nn(Q) : "" }, a = nn(a), Q = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
        for (var b in Q)
          a = a.replace(new RegExp(b, "g"), Q[b]);
        var $e = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), wt = "January February March April May June July August September October November December".split(" ");
        Q = {
          "%a": function(k) {
            return $e[k.ea].substring(0, 3);
          },
          "%A": function(k) {
            return $e[k.ea];
          },
          "%b": function(k) {
            return wt[k.Z].substring(0, 3);
          },
          "%B": function(k) {
            return wt[k.Z];
          },
          "%C": function(k) {
            return S((k.P + 1900) / 100 | 0, 2);
          },
          "%d": function(k) {
            return S(k.$, 2);
          },
          "%e": function(k) {
            return g(k.$, 2, " ");
          },
          "%g": function(k) {
            return Ce(k).toString().substring(2);
          },
          "%G": function(k) {
            return Ce(k);
          },
          "%H": function(k) {
            return S(k.da, 2);
          },
          "%I": function(k) {
            return k = k.da, k == 0 ? k = 12 : 12 < k && (k -= 12), S(k, 2);
          },
          "%j": function(k) {
            return S(k.$ + tn(wr(k.P + 1900) ? Sr : kr, k.Z - 1), 3);
          },
          "%m": function(k) {
            return S(k.Z + 1, 2);
          },
          "%M": function(k) {
            return S(k.Ja, 2);
          },
          "%n": function() {
            return `
`;
          },
          "%p": function(k) {
            return 0 <= k.da && 12 > k.da ? "AM" : "PM";
          },
          "%S": function(k) {
            return S(k.Ka, 2);
          },
          "%t": function() {
            return "	";
          },
          "%u": function(k) {
            return k.ea || 7;
          },
          "%U": function(k) {
            var K = new Date(k.P + 1900, 0, 1), fe = K.getDay() === 0 ? K : _r(K, 7 - K.getDay());
            return k = new Date(k.P + 1900, k.Z, k.$), 0 > F(fe, k) ? S(Math.ceil((31 - fe.getDate() + (tn(wr(k.getFullYear()) ? Sr : kr, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : F(fe, K) === 0 ? "01" : "00";
          },
          "%V": function(k) {
            var K = new Date(k.P + 1901, 0, 4), fe = G(new Date(k.P + 1900, 0, 4));
            K = G(K);
            var rn = _r(new Date(k.P + 1900, 0, 1), k.fa);
            return 0 > F(rn, fe) ? "53" : 0 >= F(K, rn) ? "01" : S(Math.ceil((fe.getFullYear() < k.P + 1900 ? k.fa + 32 - fe.getDate() : k.fa + 1 - fe.getDate()) / 7), 2);
          },
          "%w": function(k) {
            return k.ea;
          },
          "%W": function(k) {
            var K = new Date(k.P, 0, 1), fe = K.getDay() === 1 ? K : _r(K, K.getDay() === 0 ? 1 : 7 - K.getDay() + 1);
            return k = new Date(k.P + 1900, k.Z, k.$), 0 > F(fe, k) ? S(Math.ceil((31 - fe.getDate() + (tn(wr(k.getFullYear()) ? Sr : kr, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : F(fe, K) === 0 ? "01" : "00";
          },
          "%y": function(k) {
            return (k.P + 1900).toString().substring(2);
          },
          "%Y": function(k) {
            return k.P + 1900;
          },
          "%z": function(k) {
            k = k.Ia;
            var K = 0 <= k;
            return k = Math.abs(k) / 60, (K ? "+" : "-") + ("0000" + (k / 60 * 100 + k % 60)).slice(-4);
          },
          "%Z": function(k) {
            return k.La;
          },
          "%%": function() {
            return "%";
          }
        };
        for (b in Q)
          a.includes(b) && (a = a.replace(new RegExp(b, "g"), Q[b](f)));
        return b = vt(a, !1), b.length > u ? 0 : (j.set(b, o), b.length - 1);
      }
      function Xt(o, u, a, f) {
        o || (o = this), this.parent = o, this.T = o.T, this.ba = null, this.id = el++, this.name = u, this.mode = a, this.M = {}, this.N = {}, this.rdev = f;
      }
      Object.defineProperties(Xt.prototype, { read: { get: function() {
        return (this.mode & 365) === 365;
      }, set: function(o) {
        o ? this.mode |= 365 : this.mode &= -366;
      } }, write: { get: function() {
        return (this.mode & 146) === 146;
      }, set: function(o) {
        o ? this.mode |= 146 : this.mode &= -147;
      } } }), al(), Zn = Array(4096), ft(W, "/"), sn("/tmp"), sn("/home"), sn("/home/web_user"), function() {
        sn("/dev"), il(259, { read: function() {
          return 0;
        }, write: function(u, a, f, g) {
          return g;
        } }), pt("/dev/null", 259), At(1280, Ht), At(1536, Vt), pt("/dev/tty", 1280), pt("/dev/tty1", 1536);
        var o = Yl();
        ht("random", o), ht("urandom", o), sn("/dev/shm"), sn("/dev/shm/tmp");
      }(), function() {
        sn("/proc");
        var o = sn("/proc/self");
        sn("/proc/self/fd"), ft({ T: function() {
          var u = tl(o, "fd", 16895, 73);
          return u.M = { lookup: function(a, f) {
            var g = Wt[+f];
            if (!g)
              throw new z(8);
            return a = { parent: null, T: { ra: "fake" }, M: { readlink: function() {
              return g.path;
            } } }, a.parent = a;
          } }, u;
        } }, "/proc/self/fd");
      }();
      function vt(o, u) {
        var a = Array(me(o) + 1);
        return o = je(o, a, 0, a.length), u && (a.length = o), a;
      }
      var xr = { a: function(o) {
        return re(o + 16) + 16;
      }, q: function() {
      }, b: function(o, u, a) {
        throw new jt(o).xa(u, a), o;
      }, e: function(o, u, a) {
        bn = a;
        try {
          var f = On(o);
          switch (u) {
            case 0:
              var g = et();
              return 0 > g ? -28 : mt(f.path, f.flags, 0, g).fd;
            case 1:
            case 2:
              return 0;
            case 3:
              return f.flags;
            case 4:
              return g = et(), f.flags |= g, 0;
            case 12:
              return g = et(), E[g + 0 >> 1] = 2, 0;
            case 13:
            case 14:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return L[Gt() >> 2] = 28, -1;
            default:
              return -28;
          }
        } catch (S) {
          return typeof qn < "u" && S instanceof z || Ne(S), -S.V;
        }
      }, i: function(o, u, a) {
        bn = a;
        try {
          var f = On(o);
          switch (u) {
            case 21509:
            case 21505:
              return f.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return f.tty ? 0 : -59;
            case 21519:
              if (!f.tty)
                return -59;
              var g = et();
              return L[g >> 2] = 0;
            case 21520:
              return f.tty ? -28 : -59;
            case 21531:
              if (o = g = et(), !f.N.ya)
                throw new z(59);
              return f.N.ya(f, u, o);
            case 21523:
              return f.tty ? 0 : -59;
            case 21524:
              return f.tty ? 0 : -59;
            default:
              Ne("bad ioctl syscall " + u);
          }
        } catch (S) {
          return typeof qn < "u" && S instanceof z || Ne(S), -S.V;
        }
      }, j: function(o, u, a) {
        bn = a;
        try {
          var f = nn(o), g = a ? et() : 0;
          return mt(f, u, g).fd;
        } catch (S) {
          return typeof qn < "u" && S instanceof z || Ne(S), -S.V;
        }
      }, d: function() {
        Ne("");
      }, g: function(o, u) {
        if (o === 0)
          o = Date.now();
        else if (o === 1 || o === 4)
          o = Zl();
        else
          return L[Gt() >> 2] = 28, -1;
        return L[u >> 2] = o / 1e3 | 0, L[u + 4 >> 2] = o % 1e3 * 1e6 | 0, 0;
      }, l: function(o, u, a) {
        d.copyWithin(o, u, u + a);
      }, c: function(o) {
        var u = d.length;
        if (o >>>= 0, 2147483648 < o)
          return !1;
        for (var a = 1; 4 >= a; a *= 2) {
          var f = u * (1 + 0.2 / a);
          f = Math.min(f, o + 100663296), f = Math.max(o, f), 0 < f % 65536 && (f += 65536 - f % 65536);
          e: {
            try {
              En.grow(Math.min(
                2147483648,
                f
              ) - M.byteLength + 65535 >>> 16), X();
              var g = 1;
              break e;
            } catch {
            }
            g = void 0;
          }
          if (g)
            return !0;
        }
        return !1;
      }, o: function(o, u) {
        var a = 0;
        return Kt().forEach(function(f, g) {
          var S = u + a;
          for (g = L[o + 4 * g >> 2] = S, S = 0; S < f.length; ++S)
            j[g++ >> 0] = f.charCodeAt(S);
          j[g >> 0] = 0, a += f.length + 1;
        }), 0;
      }, p: function(o, u) {
        var a = Kt();
        L[o >> 2] = a.length;
        var f = 0;
        return a.forEach(function(g) {
          f += g.length + 1;
        }), L[u >> 2] = f, 0;
      }, f: function(o) {
        try {
          var u = On(o);
          return $n(u), 0;
        } catch (a) {
          return typeof qn < "u" && a instanceof z || Ne(a), a.V;
        }
      }, h: function(o, u, a, f) {
        try {
          e: {
            for (var g = On(o), S = o = 0; S < a; S++) {
              var F = L[u + (8 * S + 4) >> 2], G = g, Ce = L[u + 8 * S >> 2], Q = F, b = void 0, $e = j;
              if (0 > Q || 0 > b)
                throw new z(28);
              if (G.fd === null)
                throw new z(8);
              if ((G.flags & 2097155) === 1)
                throw new z(8);
              if ((G.node.mode & 61440) === 16384)
                throw new z(31);
              if (!G.N.read)
                throw new z(28);
              var wt = typeof b < "u";
              if (!wt)
                b = G.position;
              else if (!G.seekable)
                throw new z(70);
              var k = G.N.read(G, $e, Ce, Q, b);
              wt || (G.position += k);
              var K = k;
              if (0 > K) {
                var fe = -1;
                break e;
              }
              if (o += K, K < F)
                break;
            }
            fe = o;
          }
          return L[f >> 2] = fe, 0;
        } catch (rn) {
          return typeof qn < "u" && rn instanceof z || Ne(rn), rn.V;
        }
      }, m: function(o, u, a, f, g) {
        try {
          var S = On(o);
          return o = 4294967296 * a + (u >>> 0), -9007199254740992 >= o || 9007199254740992 <= o ? -61 : (sl(S, o, f), dr = [S.position >>> 0, (Wn = S.position, 1 <= +Math.abs(Wn) ? 0 < Wn ? (Math.min(+Math.floor(Wn / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((Wn - +(~~Wn >>> 0)) / 4294967296) >>> 0 : 0)], L[g >> 2] = dr[0], L[g + 4 >> 2] = dr[1], S.ha && o === 0 && f === 0 && (S.ha = null), 0);
        } catch (F) {
          return typeof qn < "u" && F instanceof z || Ne(F), F.V;
        }
      }, k: function(o, u, a, f) {
        try {
          e: {
            for (var g = On(o), S = o = 0; S < a; S++) {
              var F = vr(
                g,
                j,
                L[u + 8 * S >> 2],
                L[u + (8 * S + 4) >> 2]
              );
              if (0 > F) {
                var G = -1;
                break e;
              }
              o += F;
            }
            G = o;
          }
          return L[f >> 2] = G, 0;
        } catch (Ce) {
          return typeof qn < "u" && Ce instanceof z || Ne(Ce), Ce.V;
        }
      }, n: function(o, u, a, f) {
        return Er(o, u, a, f);
      } };
      (function() {
        function o(g) {
          h.asm = g.exports, En = h.asm.r, X(), B = h.asm.K, q.unshift(h.asm.s), xe--, h.monitorRunDependencies && h.monitorRunDependencies(xe), xe == 0 && Ft && (g = Ft, Ft = null, g());
        }
        function u(g) {
          o(g.instance);
        }
        function a(g) {
          return $l().then(function(S) {
            return WebAssembly.instantiate(S, f);
          }).then(function(S) {
            return S;
          }).then(g, function(S) {
            Ee("failed to asynchronously prepare wasm: " + S), Ne(S);
          });
        }
        var f = { a: xr };
        if (xe++, h.monitorRunDependencies && h.monitorRunDependencies(xe), h.instantiateWasm)
          try {
            return h.instantiateWasm(
              f,
              o
            );
          } catch (g) {
            return Ee("Module.instantiateWasm callback failed with error: " + g), !1;
          }
        return function() {
          return Ie || typeof WebAssembly.instantiateStreaming != "function" || Zr() || Be.startsWith("file://") || typeof fetch != "function" ? a(u) : fetch(Be, { credentials: "same-origin" }).then(function(g) {
            return WebAssembly.instantiateStreaming(g, f).then(u, function(S) {
              return Ee("wasm streaming compile failed: " + S), Ee("falling back to ArrayBuffer instantiation"), a(u);
            });
          });
        }().catch(ke), {};
      })(), h.___wasm_call_ctors = function() {
        return (h.___wasm_call_ctors = h.asm.s).apply(null, arguments);
      };
      var Jl = h._Highs_create = function() {
        return (Jl = h._Highs_create = h.asm.t).apply(null, arguments);
      }, ql = h._Highs_destroy = function() {
        return (ql = h._Highs_destroy = h.asm.u).apply(null, arguments);
      }, Cr = h._Highs_run = function() {
        return (Cr = h._Highs_run = h.asm.v).apply(null, arguments);
      };
      h._Highs_readModel = function() {
        return (h._Highs_readModel = h.asm.w).apply(null, arguments);
      }, h._Highs_writeSolution = function() {
        return (h._Highs_writeSolution = h.asm.x).apply(null, arguments);
      }, h._Highs_writeSolutionPretty = function() {
        return (h._Highs_writeSolutionPretty = h.asm.y).apply(null, arguments);
      }, h._Highs_setBoolOptionValue = function() {
        return (h._Highs_setBoolOptionValue = h.asm.z).apply(null, arguments);
      }, h._Highs_setIntOptionValue = function() {
        return (h._Highs_setIntOptionValue = h.asm.A).apply(null, arguments);
      }, h._Highs_setDoubleOptionValue = function() {
        return (h._Highs_setDoubleOptionValue = h.asm.B).apply(null, arguments);
      }, h._Highs_setStringOptionValue = function() {
        return (h._Highs_setStringOptionValue = h.asm.C).apply(null, arguments);
      };
      var dl = h._Highs_getModelStatus = function() {
        return (dl = h._Highs_getModelStatus = h.asm.D).apply(null, arguments);
      };
      h._Highs_call = function() {
        return (h._Highs_call = h.asm.E).apply(null, arguments);
      };
      var Gt = h.___errno_location = function() {
        return (Gt = h.___errno_location = h.asm.F).apply(null, arguments);
      }, yt = h.stackSave = function() {
        return (yt = h.stackSave = h.asm.G).apply(null, arguments);
      }, bl = h.stackRestore = function() {
        return (bl = h.stackRestore = h.asm.H).apply(null, arguments);
      }, Zt = h.stackAlloc = function() {
        return (Zt = h.stackAlloc = h.asm.I).apply(null, arguments);
      }, re = h._malloc = function() {
        return (re = h._malloc = h.asm.J).apply(null, arguments);
      };
      h.cwrap = function(o, u, a, f) {
        a = a || [];
        var g = a.every(function(S) {
          return S === "number";
        });
        return u !== "string" && g && !f ? Vn(o) : function() {
          return Cn(o, u, a, arguments);
        };
      };
      var Jt;
      Ft = function o() {
        Jt || Pr(), Jt || (Ft = o);
      };
      function Pr() {
        function o() {
          if (!Jt && (Jt = !0, h.calledRun = !0, !xn)) {
            if (h.noFSInit || cl || (cl = !0, al(), h.stdin = h.stdin, h.stdout = h.stdout, h.stderr = h.stderr, h.stdin ? ht("stdin", h.stdin) : ul("/dev/tty", "/dev/stdin"), h.stdout ? ht("stdout", null, h.stdout) : ul("/dev/tty", "/dev/stdout"), h.stderr ? ht("stderr", null, h.stderr) : ul("/dev/tty1", "/dev/stderr"), mt("/dev/stdin", 0), mt("/dev/stdout", 1), mt("/dev/stderr", 1)), hr = !1, It(q), Ve(h), h.onRuntimeInitialized && h.onRuntimeInitialized(), h.postRun)
              for (typeof h.postRun == "function" && (h.postRun = [h.postRun]); h.postRun.length; ) {
                var u = h.postRun.shift();
                ie.unshift(u);
              }
            It(ie);
          }
        }
        if (!(0 < xe)) {
          if (h.preRun)
            for (typeof h.preRun == "function" && (h.preRun = [h.preRun]); h.preRun.length; )
              te();
          It(ae), 0 < xe || (h.setStatus ? (h.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              h.setStatus("");
            }, 1), o();
          }, 1)) : o());
        }
      }
      if (h.run = Pr, h.preInit)
        for (typeof h.preInit == "function" && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
          h.preInit.pop()();
      Pr(), h.ta = h.cwrap("Highs_readModel", "number", ["number", "string"]);
      const pl = h.cwrap("Highs_setIntOptionValue", "number", ["number", "string", "number"]), eo = h.cwrap("Highs_setDoubleOptionValue", "number", ["number", "string", "number"]), no = h.cwrap("Highs_setStringOptionValue", "number", ["number", "string", "string"]), to = h.cwrap("Highs_setBoolOptionValue", "number", ["number", "string", "number"]);
      h.ua = h.cwrap("Highs_writeSolutionPretty", "number", ["number", "string"]);
      const ml = { 0: "Not Set", 1: "Load error", 2: "Model error", 3: "Presolve error", 4: "Solve error", 5: "Postsolve error", 6: "Empty", 7: "Optimal", 8: "Infeasible", 9: "Primal infeasible or unbounded", 10: "Unbounded", 11: "Bound on objective reached", 12: "Target for objective reached", 13: "Time limit reached", 14: "Iteration limit reached", 15: "Unknown" };
      h.solve = function(o, u) {
        ni(o);
        const a = Jl();
        gn(() => h.ta(a, "m.lp"), "read LP model (see http://web.mit.edu/lpsolve/doc/CPLEX-format.htm)"), o = u || {};
        for (const f in o) {
          const g = o[f];
          u = typeof g;
          let S;
          if (u === "number")
            S = Nr;
          else if (u === "boolean")
            S = to;
          else if (u === "string")
            S = no;
          else
            throw Error(`Unsupported option value type ${g} for '${f}'`);
          gn(() => S(a, f, g), `set option '${f}'`);
        }
        return gn(() => Cr(a), "solve the problem"), o = ml[dl(a, 0)] || "Unknown", $.length = 0, gn(() => h.ua(a, ""), "write and extract solution"), ql(a), o = qt(o), $.length = 0, Re.length = 0, o;
      };
      function Nr(o, u, a) {
        let f = eo(o, u, a);
        return f === -1 && a === (a | 0) && (f = pl(o, u, a)), f;
      }
      function cn(o) {
        return o === "inf" ? 1 / 0 : o === "-inf" ? -1 / 0 : +o;
      }
      const Qn = { Index: (o) => parseInt(o), Lower: cn, Upper: cn, Primal: cn, Dual: cn };
      function Dn(o, u) {
        const a = u.match(/[^\s]+/g) || [], f = {};
        for (let S = 0; S < a.length; S++) {
          if (S >= o.length)
            throw Error("Unable to parse solution line: " + u);
          var g = a[S];
          const F = o[S], G = Qn[F];
          g = G ? G(g) : g, f[F] = g;
        }
        return f;
      }
      function qt(o) {
        if (3 > $.length)
          throw Error("Unable to parse solution. Too few lines.");
        let u = gt($[1], $[2]);
        var a = !u.includes("Status") && u.includes("Dual"), f = !u.includes("Type") && !a;
        for (o = { Status: o, Columns: {}, Rows: [], IsLinear: f, IsQuadratic: a, ObjectiveValue: NaN }, a = 2; $[a] != "Rows"; a++)
          f = Dn(u, $[a]), o.Columns[f.Name] = f;
        for (u = gt($[a + 1], $[a + 2]), a += 2; $[a] != ""; a++)
          o.Rows.push(Dn(u, $[a]));
        return o.ObjectiveValue = cn($[a + 3].match(/Objective value: (.+)/)[1]), o;
      }
      function gt(o, u) {
        return [...o.matchAll(/[^\s]+/g)].filter((a) => u[a.index] !== " " || u[a.index + a[0].length - 1] !== " ").map((a) => a[0]);
      }
      function gn(o, u) {
        let a;
        try {
          a = o();
        } catch (f) {
          a = f;
        }
        if (a !== 0 && a !== 1)
          throw Error("Unable to " + u + ". HiGHS error " + a);
      }
      return ue.ready;
    };
  }();
  D.exports = _;
})(ec);
var Hf = ec.exports;
const Vf = /* @__PURE__ */ Mu(Hf);
function Wf() {
  const [D, oe] = Bl.useState(), _ = {
    locateFile: (J) => "https://lovasoa.github.io/highs-js/" + J
  };
  return Bl.useEffect(() => {
    Vf(_).then((J) => {
      const ue = `Maximize
  obj: x1 + 2 x2 + 3 x3 + x4
Subject To
  c1: - x1 + x2 + x3 + 10 x4 <= 20
  c2: x1 - 3 x2 + x3 <= 30
  c3: x2 - 3.5 x4 = 0
Bounds
  0 <= x1 <= 40
  2 <= x4 <= 3
End`, h = J.solve(ue, {
        presolve: "on",
        parallel: "off"
      });
      oe(h);
    });
  }, [oe]), /* @__PURE__ */ Rn.jsx(Rn.Fragment, { children: /* @__PURE__ */ Rn.jsx("div", { children: D && Object.keys(D.Columns).map(
    (J) => /* @__PURE__ */ Rn.jsxs("div", { children: [
      "Name" in D.Columns[J] && /* @__PURE__ */ Rn.jsxs("div", { children: [
        "Name: ",
        D.Columns[J].Name
      ] }),
      "Primal" in D.Columns[J] && /* @__PURE__ */ Rn.jsxs("div", { children: [
        "Primal: ",
        D.Columns[J].Primal
      ] }),
      /* @__PURE__ */ Rn.jsxs("div", { children: [
        "Index: ",
        D.Columns[J].Index
      ] }),
      /* @__PURE__ */ Rn.jsxs("div", { children: [
        "Upper: ",
        D.Columns[J].Upper
      ] }),
      /* @__PURE__ */ Rn.jsxs("div", { children: [
        "Lower: ",
        D.Columns[J].Lower
      ] }),
      /* @__PURE__ */ Rn.jsx("br", {})
    ] })
  ) }) });
}
jf.render(
  /* @__PURE__ */ Rn.jsx(Tf.StrictMode, { children: /* @__PURE__ */ Rn.jsx(Wf, {}) }),
  document.getElementById("app-root")
);
