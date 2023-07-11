function ns(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function Af(a) {
  if (a.__esModule)
    return a;
  var u = a.default;
  if (typeof u == "function") {
    var l = function p() {
      if (this instanceof p) {
        var y = [null];
        y.push.apply(y, arguments);
        var h = Function.bind.apply(u, y);
        return new h();
      }
      return u.apply(this, arguments);
    };
    l.prototype = u.prototype;
  } else
    l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(a).forEach(function(p) {
    var y = Object.getOwnPropertyDescriptor(a, p);
    Object.defineProperty(l, p, y.get ? y : {
      enumerable: !0,
      get: function() {
        return a[p];
      }
    });
  }), l;
}
var Lf = { exports: {} }, tl = {}, zf = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function Bd() {
  if (Cf)
    return oe;
  Cf = 1;
  var a = Symbol.for("react.element"), u = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), E = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), B = Symbol.iterator;
  function ee(g) {
    return g === null || typeof g != "object" ? null : (g = B && g[B] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var me = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Se = Object.assign, pe = {};
  function te(g, R, I) {
    this.props = g, this.context = R, this.refs = pe, this.updater = I || me;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(g, R) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, g, R, "setState");
  }, te.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function Sn() {
  }
  Sn.prototype = te.prototype;
  function tn(g, R, I) {
    this.props = g, this.context = R, this.refs = pe, this.updater = I || me;
  }
  var Ze = tn.prototype = new Sn();
  Ze.constructor = tn, Se(Ze, te.prototype), Ze.isPureReactComponent = !0;
  var _e = Array.isArray, Oe = Object.prototype.hasOwnProperty, Ue = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(g, R, I) {
    var ie, b = {}, ve = null, ue = null;
    if (R != null)
      for (ie in R.ref !== void 0 && (ue = R.ref), R.key !== void 0 && (ve = "" + R.key), R)
        Oe.call(R, ie) && !Re.hasOwnProperty(ie) && (b[ie] = R[ie]);
    var he = arguments.length - 2;
    if (he === 1)
      b.children = I;
    else if (1 < he) {
      for (var fe = Array(he), Ne = 0; Ne < he; Ne++)
        fe[Ne] = arguments[Ne + 2];
      b.children = fe;
    }
    if (g && g.defaultProps)
      for (ie in he = g.defaultProps, he)
        b[ie] === void 0 && (b[ie] = he[ie]);
    return { $$typeof: a, type: g, key: ve, ref: ue, props: b, _owner: Ue.current };
  }
  function Pn(g, R) {
    return { $$typeof: a, type: g.type, key: R, ref: g.ref, props: g.props, _owner: g._owner };
  }
  function Tn(g) {
    return typeof g == "object" && g !== null && g.$$typeof === a;
  }
  function Yn(g) {
    var R = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(I) {
      return R[I];
    });
  }
  var Rn = /\/+/g;
  function Je(g, R) {
    return typeof g == "object" && g !== null && g.key != null ? Yn("" + g.key) : R.toString(36);
  }
  function $e(g, R, I, ie, b) {
    var ve = typeof g;
    (ve === "undefined" || ve === "boolean") && (g = null);
    var ue = !1;
    if (g === null)
      ue = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case a:
            case u:
              ue = !0;
          }
      }
    if (ue)
      return ue = g, b = b(ue), g = ie === "" ? "." + Je(ue, 0) : ie, _e(b) ? (I = "", g != null && (I = g.replace(Rn, "$&/") + "/"), $e(b, R, I, "", function(Ne) {
        return Ne;
      })) : b != null && (Tn(b) && (b = Pn(b, I + (!b.key || ue && ue.key === b.key ? "" : ("" + b.key).replace(Rn, "$&/") + "/") + g)), R.push(b)), 1;
    if (ue = 0, ie = ie === "" ? "." : ie + ":", _e(g))
      for (var he = 0; he < g.length; he++) {
        ve = g[he];
        var fe = ie + Je(ve, he);
        ue += $e(ve, R, I, fe, b);
      }
    else if (fe = ee(g), typeof fe == "function")
      for (g = fe.call(g), he = 0; !(ve = g.next()).done; )
        ve = ve.value, fe = ie + Je(ve, he++), ue += $e(ve, R, I, fe, b);
    else if (ve === "object")
      throw R = String(g), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    return ue;
  }
  function rn(g, R, I) {
    if (g == null)
      return g;
    var ie = [], b = 0;
    return $e(g, ie, "", "", function(ve) {
      return R.call(I, ve, b++);
    }), ie;
  }
  function je(g) {
    if (g._status === -1) {
      var R = g._result;
      R = R(), R.then(function(I) {
        (g._status === 0 || g._status === -1) && (g._status = 1, g._result = I);
      }, function(I) {
        (g._status === 0 || g._status === -1) && (g._status = 2, g._result = I);
      }), g._status === -1 && (g._status = 0, g._result = R);
    }
    if (g._status === 1)
      return g._result.default;
    throw g._result;
  }
  var ke = { current: null }, U = { transition: null }, Q = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: U, ReactCurrentOwner: Ue };
  return oe.Children = { map: rn, forEach: function(g, R, I) {
    rn(g, function() {
      R.apply(this, arguments);
    }, I);
  }, count: function(g) {
    var R = 0;
    return rn(g, function() {
      R++;
    }), R;
  }, toArray: function(g) {
    return rn(g, function(R) {
      return R;
    }) || [];
  }, only: function(g) {
    if (!Tn(g))
      throw Error("React.Children.only expected to receive a single React element child.");
    return g;
  } }, oe.Component = te, oe.Fragment = l, oe.Profiler = y, oe.PureComponent = tn, oe.StrictMode = p, oe.Suspense = A, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, oe.cloneElement = function(g, R, I) {
    if (g == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
    var ie = Se({}, g.props), b = g.key, ve = g.ref, ue = g._owner;
    if (R != null) {
      if (R.ref !== void 0 && (ve = R.ref, ue = Ue.current), R.key !== void 0 && (b = "" + R.key), g.type && g.type.defaultProps)
        var he = g.type.defaultProps;
      for (fe in R)
        Oe.call(R, fe) && !Re.hasOwnProperty(fe) && (ie[fe] = R[fe] === void 0 && he !== void 0 ? he[fe] : R[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1)
      ie.children = I;
    else if (1 < fe) {
      he = Array(fe);
      for (var Ne = 0; Ne < fe; Ne++)
        he[Ne] = arguments[Ne + 2];
      ie.children = he;
    }
    return { $$typeof: a, type: g.type, key: b, ref: ve, props: ie, _owner: ue };
  }, oe.createContext = function(g) {
    return g = { $$typeof: E, _currentValue: g, _currentValue2: g, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, g.Provider = { $$typeof: h, _context: g }, g.Consumer = g;
  }, oe.createElement = Be, oe.createFactory = function(g) {
    var R = Be.bind(null, g);
    return R.type = g, R;
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(g) {
    return { $$typeof: L, render: g };
  }, oe.isValidElement = Tn, oe.lazy = function(g) {
    return { $$typeof: W, _payload: { _status: -1, _result: g }, _init: je };
  }, oe.memo = function(g, R) {
    return { $$typeof: X, type: g, compare: R === void 0 ? null : R };
  }, oe.startTransition = function(g) {
    var R = U.transition;
    U.transition = {};
    try {
      g();
    } finally {
      U.transition = R;
    }
  }, oe.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, oe.useCallback = function(g, R) {
    return ke.current.useCallback(g, R);
  }, oe.useContext = function(g) {
    return ke.current.useContext(g);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(g) {
    return ke.current.useDeferredValue(g);
  }, oe.useEffect = function(g, R) {
    return ke.current.useEffect(g, R);
  }, oe.useId = function() {
    return ke.current.useId();
  }, oe.useImperativeHandle = function(g, R, I) {
    return ke.current.useImperativeHandle(g, R, I);
  }, oe.useInsertionEffect = function(g, R) {
    return ke.current.useInsertionEffect(g, R);
  }, oe.useLayoutEffect = function(g, R) {
    return ke.current.useLayoutEffect(g, R);
  }, oe.useMemo = function(g, R) {
    return ke.current.useMemo(g, R);
  }, oe.useReducer = function(g, R, I) {
    return ke.current.useReducer(g, R, I);
  }, oe.useRef = function(g) {
    return ke.current.useRef(g);
  }, oe.useState = function(g) {
    return ke.current.useState(g);
  }, oe.useSyncExternalStore = function(g, R, I) {
    return ke.current.useSyncExternalStore(g, R, I);
  }, oe.useTransition = function() {
    return ke.current.useTransition();
  }, oe.version = "18.2.0", oe;
}
zf.exports = Bd();
var ts = zf.exports;
const i0 = /* @__PURE__ */ ns(ts);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pf;
function jd() {
  if (Pf)
    return tl;
  Pf = 1;
  var a = ts, u = Symbol.for("react.element"), l = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(L, A, X) {
    var W, B = {}, ee = null, me = null;
    X !== void 0 && (ee = "" + X), A.key !== void 0 && (ee = "" + A.key), A.ref !== void 0 && (me = A.ref);
    for (W in A)
      p.call(A, W) && !h.hasOwnProperty(W) && (B[W] = A[W]);
    if (L && L.defaultProps)
      for (W in A = L.defaultProps, A)
        B[W] === void 0 && (B[W] = A[W]);
    return { $$typeof: u, type: L, key: ee, ref: me, props: B, _owner: y.current };
  }
  return tl.Fragment = l, tl.jsx = E, tl.jsxs = E, tl;
}
Lf.exports = jd();
var l0 = Lf.exports, If = { exports: {} }, gn = {}, Zu = { exports: {} }, Ju = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf;
function Hd() {
  return Tf || (Tf = 1, function(a) {
    function u(U, Q) {
      var g = U.length;
      U.push(Q);
      e:
        for (; 0 < g; ) {
          var R = g - 1 >>> 1, I = U[R];
          if (0 < y(I, Q))
            U[R] = Q, U[g] = I, g = R;
          else
            break e;
        }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function p(U) {
      if (U.length === 0)
        return null;
      var Q = U[0], g = U.pop();
      if (g !== Q) {
        U[0] = g;
        e:
          for (var R = 0, I = U.length, ie = I >>> 1; R < ie; ) {
            var b = 2 * (R + 1) - 1, ve = U[b], ue = b + 1, he = U[ue];
            if (0 > y(ve, g))
              ue < I && 0 > y(he, ve) ? (U[R] = he, U[ue] = g, R = ue) : (U[R] = ve, U[b] = g, R = b);
            else if (ue < I && 0 > y(he, g))
              U[R] = he, U[ue] = g, R = ue;
            else
              break e;
          }
      }
      return Q;
    }
    function y(U, Q) {
      var g = U.sortIndex - Q.sortIndex;
      return g !== 0 ? g : U.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      a.unstable_now = function() {
        return h.now();
      };
    } else {
      var E = Date, L = E.now();
      a.unstable_now = function() {
        return E.now() - L;
      };
    }
    var A = [], X = [], W = 1, B = null, ee = 3, me = !1, Se = !1, pe = !1, te = typeof setTimeout == "function" ? setTimeout : null, Sn = typeof clearTimeout == "function" ? clearTimeout : null, tn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ze(U) {
      for (var Q = l(X); Q !== null; ) {
        if (Q.callback === null)
          p(X);
        else if (Q.startTime <= U)
          p(X), Q.sortIndex = Q.expirationTime, u(A, Q);
        else
          break;
        Q = l(X);
      }
    }
    function _e(U) {
      if (pe = !1, Ze(U), !Se)
        if (l(A) !== null)
          Se = !0, je(Oe);
        else {
          var Q = l(X);
          Q !== null && ke(_e, Q.startTime - U);
        }
    }
    function Oe(U, Q) {
      Se = !1, pe && (pe = !1, Sn(Be), Be = -1), me = !0;
      var g = ee;
      try {
        for (Ze(Q), B = l(A); B !== null && (!(B.expirationTime > Q) || U && !Yn()); ) {
          var R = B.callback;
          if (typeof R == "function") {
            B.callback = null, ee = B.priorityLevel;
            var I = R(B.expirationTime <= Q);
            Q = a.unstable_now(), typeof I == "function" ? B.callback = I : B === l(A) && p(A), Ze(Q);
          } else
            p(A);
          B = l(A);
        }
        if (B !== null)
          var ie = !0;
        else {
          var b = l(X);
          b !== null && ke(_e, b.startTime - Q), ie = !1;
        }
        return ie;
      } finally {
        B = null, ee = g, me = !1;
      }
    }
    var Ue = !1, Re = null, Be = -1, Pn = 5, Tn = -1;
    function Yn() {
      return !(a.unstable_now() - Tn < Pn);
    }
    function Rn() {
      if (Re !== null) {
        var U = a.unstable_now();
        Tn = U;
        var Q = !0;
        try {
          Q = Re(!0, U);
        } finally {
          Q ? Je() : (Ue = !1, Re = null);
        }
      } else
        Ue = !1;
    }
    var Je;
    if (typeof tn == "function")
      Je = function() {
        tn(Rn);
      };
    else if (typeof MessageChannel < "u") {
      var $e = new MessageChannel(), rn = $e.port2;
      $e.port1.onmessage = Rn, Je = function() {
        rn.postMessage(null);
      };
    } else
      Je = function() {
        te(Rn, 0);
      };
    function je(U) {
      Re = U, Ue || (Ue = !0, Je());
    }
    function ke(U, Q) {
      Be = te(function() {
        U(a.unstable_now());
      }, Q);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, a.unstable_continueExecution = function() {
      Se || me || (Se = !0, je(Oe));
    }, a.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < U ? Math.floor(1e3 / U) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, a.unstable_getFirstCallbackNode = function() {
      return l(A);
    }, a.unstable_next = function(U) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = ee;
      }
      var g = ee;
      ee = Q;
      try {
        return U();
      } finally {
        ee = g;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(U, Q) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var g = ee;
      ee = U;
      try {
        return Q();
      } finally {
        ee = g;
      }
    }, a.unstable_scheduleCallback = function(U, Q, g) {
      var R = a.unstable_now();
      switch (typeof g == "object" && g !== null ? (g = g.delay, g = typeof g == "number" && 0 < g ? R + g : R) : g = R, U) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = g + I, U = { id: W++, callback: Q, priorityLevel: U, startTime: g, expirationTime: I, sortIndex: -1 }, g > R ? (U.sortIndex = g, u(X, U), l(A) === null && U === l(X) && (pe ? (Sn(Be), Be = -1) : pe = !0, ke(_e, g - R))) : (U.sortIndex = I, u(A, U), Se || me || (Se = !0, je(Oe))), U;
    }, a.unstable_shouldYield = Yn, a.unstable_wrapCallback = function(U) {
      var Q = ee;
      return function() {
        var g = ee;
        ee = Q;
        try {
          return U.apply(this, arguments);
        } finally {
          ee = g;
        }
      };
    };
  }(Ju)), Ju;
}
var Rf;
function Vd() {
  return Rf || (Rf = 1, Zu.exports = Hd()), Zu.exports;
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
var Nf;
function Wd() {
  if (Nf)
    return gn;
  Nf = 1;
  var a = ts, u = Vd();
  function l(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function h(e, n) {
    E(e, n), E(e + "Capture", n);
  }
  function E(e, n) {
    for (y[e] = n, e = 0; e < n.length; e++)
      p.add(n[e]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, B = {};
  function ee(e) {
    return A.call(B, e) ? !0 : A.call(W, e) ? !1 : X.test(e) ? B[e] = !0 : (W[e] = !0, !1);
  }
  function me(e, n, t, r) {
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
  function Se(e, n, t, r) {
    if (n === null || typeof n > "u" || me(e, n, t, r))
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
  function pe(e, n, t, r, i, s, c) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = s, this.removeEmptyString = c;
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new pe(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    te[n] = new pe(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new pe(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new pe(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    te[e] = new pe(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new pe(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    te[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Sn = /[\-:]([a-z])/g;
  function tn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      Sn,
      tn
    );
    te[n] = new pe(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Sn, tn);
    te[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Sn, tn);
    te[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), te.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ze(e, n, t, r) {
    var i = te.hasOwnProperty(n) ? te[n] : null;
    (i !== null ? i.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Se(n, t, i, r) && (t = null), r || i === null ? ee(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : i.mustUseProperty ? e[i.propertyName] = t === null ? i.type === 3 ? !1 : "" : t : (n = i.attributeName, r = i.attributeNamespace, t === null ? e.removeAttribute(n) : (i = i.type, t = i === 3 || i === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var _e = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), Ue = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), Tn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), $e = Symbol.for("react.suspense_list"), rn = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), ke = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var g = Object.assign, R;
  function I(e) {
    if (R === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        R = n && n[1] || "";
      }
    return `
` + R + e;
  }
  var ie = !1;
  function b(e, n) {
    if (!e || ie)
      return "";
    ie = !0;
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
          } catch (C) {
            var r = C;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (C) {
            r = C;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (C) {
          r = C;
        }
        e();
      }
    } catch (C) {
      if (C && r && typeof C.stack == "string") {
        for (var i = C.stack.split(`
`), s = r.stack.split(`
`), c = i.length - 1, m = s.length - 1; 1 <= c && 0 <= m && i[c] !== s[m]; )
          m--;
        for (; 1 <= c && 0 <= m; c--, m--)
          if (i[c] !== s[m]) {
            if (c !== 1 || m !== 1)
              do
                if (c--, m--, 0 > m || i[c] !== s[m]) {
                  var w = `
` + i[c].replace(" at new ", " at ");
                  return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
                }
              while (1 <= c && 0 <= m);
            break;
          }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = b(e.type, !1), e;
      case 11:
        return e = b(e.type.render, !1), e;
      case 1:
        return e = b(e.type, !0), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Re:
        return "Fragment";
      case Ue:
        return "Portal";
      case Pn:
        return "Profiler";
      case Be:
        return "StrictMode";
      case Je:
        return "Suspense";
      case $e:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yn:
          return (e.displayName || "Context") + ".Consumer";
        case Tn:
          return (e._context.displayName || "Context") + ".Provider";
        case Rn:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case rn:
          return n = e.displayName || null, n !== null ? n : ue(e.type) || "Memo";
        case je:
          n = e._payload, e = e._init;
          try {
            return ue(e(n));
          } catch {
          }
      }
    return null;
  }
  function he(e) {
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
        return ue(n);
      case 8:
        return n === Be ? "StrictMode" : "Mode";
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
  function fe(e) {
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
  function Ne(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Yt(e) {
    var n = Ne(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var i = t.get, s = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(c) {
        r = "" + c, s.call(this, c);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function De(e) {
    e._valueTracker || (e._valueTracker = Yt(e));
  }
  function fi(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = Ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Qe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function _r(e, n) {
    var t = n.checked;
    return g({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function ci(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = fe(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function il(e, n) {
    n = n.checked, n != null && Ze(e, "checked", n, !1);
  }
  function $n(e, n) {
    il(e, n);
    var t = fe(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? $t(e, n.type, t) : n.hasOwnProperty("defaultValue") && $t(e, n.type, fe(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Cr(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function $t(e, n, t) {
    (n !== "number" || Qe(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Qt = Array.isArray;
  function Qn(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var i = 0; i < t.length; i++)
        n["$" + t[i]] = !0;
      for (t = 0; t < e.length; t++)
        i = n.hasOwnProperty("$" + e[t].value), e[t].selected !== i && (e[t].selected = i), i && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + fe(t), n = null, i = 0; i < e.length; i++) {
        if (e[i].value === t) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        n !== null || e[i].disabled || (n = e[i]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function vt(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(l(91));
    return g({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ll(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(l(92));
        if (Qt(t)) {
          if (1 < t.length)
            throw Error(l(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: fe(t) };
  }
  function di(e, n) {
    var t = fe(n.value), r = fe(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function ol(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Kt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pr(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kt(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Xt, ul = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, i);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (Xt = Xt || document.createElement("div"), Xt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Xt.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Gt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Zt = {
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
  }, q = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zt).forEach(function(e) {
    q.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Zt[n] = Zt[e];
    });
  });
  function Tr(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Zt.hasOwnProperty(e) && Zt[e] ? ("" + n).trim() : n + "px";
  }
  function pi(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, i = Tr(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, i) : e[t] = i;
      }
  }
  var Jt = g({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function hi(e, n) {
    if (n) {
      if (Jt[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(l(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(l(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(l(62));
    }
  }
  function nt(e, n) {
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
  var Rr = null;
  function O(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var qt = null, an = null, tt = null;
  function mi(e) {
    if (e = Hi(e)) {
      if (typeof qt != "function")
        throw Error(l(280));
      var n = e.stateNode;
      n && (n = Rl(n), qt(e.stateNode, e.type, n));
    }
  }
  function bt(e) {
    an ? tt ? tt.push(e) : tt = [e] : an = e;
  }
  function vi() {
    if (an) {
      var e = an, n = tt;
      if (tt = an = null, mi(e), n)
        for (e = 0; e < n.length; e++)
          mi(n[e]);
    }
  }
  function sl(e, n) {
    return e(n);
  }
  function yi() {
  }
  var yt = !1;
  function gi(e, n, t) {
    if (yt)
      return e(n, t);
    yt = !0;
    try {
      return sl(e, n, t);
    } finally {
      yt = !1, (an !== null || tt !== null) && (yi(), vi());
    }
  }
  function er(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Rl(t);
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
      throw Error(l(231, n, typeof t));
    return t;
  }
  var wi = !1;
  if (L)
    try {
      var nr = {};
      Object.defineProperty(nr, "passive", { get: function() {
        wi = !0;
      } }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
    } catch {
      wi = !1;
    }
  function Si(e, n, t, r, i, s, c, m, w) {
    var C = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, C);
    } catch (F) {
      this.onError(F);
    }
  }
  var gt = !1, wt = null, fn = !1, St = null, ki = { onError: function(e) {
    gt = !0, wt = e;
  } };
  function Eo(e, n, t, r, i, s, c, m, w) {
    gt = !1, wt = null, Si.apply(ki, arguments);
  }
  function kt(e, n, t, r, i, s, c, m, w) {
    if (Eo.apply(this, arguments), gt) {
      if (gt) {
        var C = wt;
        gt = !1, wt = null;
      } else
        throw Error(l(198));
      fn || (fn = !0, St = C);
    }
  }
  function Kn(e) {
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
  function Ei(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Nr(e) {
    if (Kn(e) !== e)
      throw Error(l(188));
  }
  function xo(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Kn(e), n === null)
        throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var i = t.return;
      if (i === null)
        break;
      var s = i.alternate;
      if (s === null) {
        if (r = i.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === t)
            return Nr(i), e;
          if (s === r)
            return Nr(i), n;
          s = s.sibling;
        }
        throw Error(l(188));
      }
      if (t.return !== r.return)
        t = i, r = s;
      else {
        for (var c = !1, m = i.child; m; ) {
          if (m === t) {
            c = !0, t = i, r = s;
            break;
          }
          if (m === r) {
            c = !0, r = i, t = s;
            break;
          }
          m = m.sibling;
        }
        if (!c) {
          for (m = s.child; m; ) {
            if (m === t) {
              c = !0, t = s, r = i;
              break;
            }
            if (m === r) {
              c = !0, r = s, t = i;
              break;
            }
            m = m.sibling;
          }
          if (!c)
            throw Error(l(189));
        }
      }
      if (t.alternate !== r)
        throw Error(l(190));
    }
    if (t.tag !== 3)
      throw Error(l(188));
    return t.stateNode.current === t ? e : n;
  }
  function xi(e) {
    return e = xo(e), e !== null ? _i(e) : null;
  }
  function _i(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = _i(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var al = u.unstable_scheduleCallback, Et = u.unstable_cancelCallback, Ci = u.unstable_shouldYield, rt = u.unstable_requestPaint, ge = u.unstable_now, Fr = u.unstable_getCurrentPriorityLevel, it = u.unstable_ImmediatePriority, lt = u.unstable_UserBlockingPriority, In = u.unstable_NormalPriority, fl = u.unstable_LowPriority, Mr = u.unstable_IdlePriority, tr = null, cn = null;
  function Dr(e) {
    if (cn && typeof cn.onCommitFiberRoot == "function")
      try {
        cn.onCommitFiberRoot(tr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var ln = Math.clz32 ? Math.clz32 : zr, Ar = Math.log, Lr = Math.LN2;
  function zr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ar(e) / Lr | 0) | 0;
  }
  var Ir = 64, rr = 4194304;
  function xt(e) {
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
  function Or(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, s = e.pingedLanes, c = t & 268435455;
    if (c !== 0) {
      var m = c & ~i;
      m !== 0 ? r = xt(m) : (s &= c, s !== 0 && (r = xt(s)));
    } else
      c = t & ~i, c !== 0 ? r = xt(c) : s !== 0 && (r = xt(s));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & i) && (i = r & -r, s = n & -n, i >= s || i === 16 && (s & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - ln(n), i = 1 << t, r |= e[t], n &= ~i;
    return r;
  }
  function cl(e, n) {
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
  function dl(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var c = 31 - ln(s), m = 1 << c, w = i[c];
      w === -1 ? (!(m & t) || m & r) && (i[c] = cl(m, n)) : w <= n && (e.expiredLanes |= m), s &= ~m;
    }
  }
  function Ur(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Pi() {
    var e = Ir;
    return Ir <<= 1, !(Ir & 4194240) && (Ir = 64), e;
  }
  function ir(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function _t(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - ln(n), e[n] = t;
  }
  function pl(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var i = 31 - ln(t), s = 1 << i;
      n[i] = 0, r[i] = -1, e[i] = -1, t &= ~s;
    }
  }
  function lr(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - ln(t), i = 1 << r;
      i & n | e[r] & n && (e[r] |= n), t &= ~i;
    }
  }
  var ce = 0;
  function or(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Br, Ti, hl, ml, vl, Ri = !1, jr = [], dn = null, Xn = null, On = null, ur = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), kn = [], o = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function f(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        ur.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ct.delete(n.pointerId);
    }
  }
  function d(e, n, t, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, n !== null && (n = Hi(n), n !== null && Ti(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, i !== null && n.indexOf(i) === -1 && n.push(i), e);
  }
  function v(e, n, t, r, i) {
    switch (n) {
      case "focusin":
        return dn = d(dn, e, n, t, r, i), !0;
      case "dragenter":
        return Xn = d(Xn, e, n, t, r, i), !0;
      case "mouseover":
        return On = d(On, e, n, t, r, i), !0;
      case "pointerover":
        var s = i.pointerId;
        return ur.set(s, d(ur.get(s) || null, e, n, t, r, i)), !0;
      case "gotpointercapture":
        return s = i.pointerId, Ct.set(s, d(Ct.get(s) || null, e, n, t, r, i)), !0;
    }
    return !1;
  }
  function _(e) {
    var n = sr(e.target);
    if (n !== null) {
      var t = Kn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ei(t), n !== null) {
            e.blockedOn = n, vl(e.priority, function() {
              hl(t);
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
  function P(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = on(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Rr = r, t.target.dispatchEvent(r), Rr = null;
      } else
        return n = Hi(t), n !== null && Ti(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function Y(e, n, t) {
    P(e) && t.delete(n);
  }
  function le() {
    Ri = !1, dn !== null && P(dn) && (dn = null), Xn !== null && P(Xn) && (Xn = null), On !== null && P(On) && (On = null), ur.forEach(Y), Ct.forEach(Y);
  }
  function Fe(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Ri || (Ri = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, le)));
  }
  function ne(e) {
    function n(i) {
      return Fe(i, e);
    }
    if (0 < jr.length) {
      Fe(jr[0], e);
      for (var t = 1; t < jr.length; t++) {
        var r = jr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && Fe(dn, e), Xn !== null && Fe(Xn, e), On !== null && Fe(On, e), ur.forEach(n), Ct.forEach(n), t = 0; t < kn.length; t++)
      r = kn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kn.length && (t = kn[0], t.blockedOn === null); )
      _(t), t.blockedOn === null && kn.shift();
  }
  var se = _e.ReactCurrentBatchConfig, Ke = !0;
  function Pt(e, n, t, r) {
    var i = ce, s = se.transition;
    se.transition = null;
    try {
      ce = 1, re(e, n, t, r);
    } finally {
      ce = i, se.transition = s;
    }
  }
  function T(e, n, t, r) {
    var i = ce, s = se.transition;
    se.transition = null;
    try {
      ce = 4, re(e, n, t, r);
    } finally {
      ce = i, se.transition = s;
    }
  }
  function re(e, n, t, r) {
    if (Ke) {
      var i = on(e, n, t, r);
      if (i === null)
        jo(e, n, r, ye, t), f(e, r);
      else if (v(i, e, n, t, r))
        r.stopPropagation();
      else if (f(e, r), n & 4 && -1 < o.indexOf(e)) {
        for (; i !== null; ) {
          var s = Hi(i);
          if (s !== null && Br(s), s = on(e, n, t, r), s === null && jo(e, n, r, ye, t), s === i)
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else
        jo(e, n, r, null, t);
    }
  }
  var ye = null;
  function on(e, n, t, r) {
    if (ye = null, e = O(r), e = sr(e), e !== null)
      if (n = Kn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Ei(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return ye = e, null;
  }
  function Ni(e) {
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
        switch (Fr()) {
          case it:
            return 1;
          case lt:
            return 4;
          case In:
          case fl:
            return 16;
          case Mr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Tt = null, _o = null, yl = null;
  function fs() {
    if (yl)
      return yl;
    var e, n = _o, t = n.length, r, i = "value" in Tt ? Tt.value : Tt.textContent, s = i.length;
    for (e = 0; e < t && n[e] === i[e]; e++)
      ;
    var c = t - e;
    for (r = 1; r <= c && n[t - r] === i[s - r]; r++)
      ;
    return yl = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function gl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wl() {
    return !0;
  }
  function cs() {
    return !1;
  }
  function En(e) {
    function n(t, r, i, s, c) {
      this._reactName = t, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = c, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (t = e[m], this[m] = t ? t(s) : s[m]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wl : cs, this.isPropagationStopped = cs, this;
    }
    return g(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = wl);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = wl);
    }, persist: function() {
    }, isPersistent: wl }), n;
  }
  var Hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Co = En(Hr), Fi = g({}, Hr, { view: 0, detail: 0 }), dc = En(Fi), Po, To, Mi, Sl = g({}, Fi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: No, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Po = e.screenX - Mi.screenX, To = e.screenY - Mi.screenY) : To = Po = 0, Mi = e), Po);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : To;
  } }), ds = En(Sl), pc = g({}, Sl, { dataTransfer: 0 }), hc = En(pc), mc = g({}, Fi, { relatedTarget: 0 }), Ro = En(mc), vc = g({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = En(vc), gc = g({}, Hr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), wc = En(gc), Sc = g({}, Hr, { data: 0 }), ps = En(Sc), kc = {
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
  }, Ec = {
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
  }, xc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _c(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = xc[e]) ? !!n[e] : !1;
  }
  function No() {
    return _c;
  }
  var Cc = g({}, Fi, { key: function(e) {
    if (e.key) {
      var n = kc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ec[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: No, charCode: function(e) {
    return e.type === "keypress" ? gl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Pc = En(Cc), Tc = g({}, Sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hs = En(Tc), Rc = g({}, Fi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: No }), Nc = En(Rc), Fc = g({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = En(Fc), Dc = g({}, Sl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ac = En(Dc), Lc = [9, 13, 27, 32], Fo = L && "CompositionEvent" in window, Di = null;
  L && "documentMode" in document && (Di = document.documentMode);
  var zc = L && "TextEvent" in window && !Di, ms = L && (!Fo || Di && 8 < Di && 11 >= Di), vs = String.fromCharCode(32), ys = !1;
  function gs(e, n) {
    switch (e) {
      case "keyup":
        return Lc.indexOf(n.keyCode) !== -1;
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
  function ws(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vr = !1;
  function Ic(e, n) {
    switch (e) {
      case "compositionend":
        return ws(n);
      case "keypress":
        return n.which !== 32 ? null : (ys = !0, vs);
      case "textInput":
        return e = n.data, e === vs && ys ? null : e;
      default:
        return null;
    }
  }
  function Oc(e, n) {
    if (Vr)
      return e === "compositionend" || !Fo && gs(e, n) ? (e = fs(), yl = _o = Tt = null, Vr = !1, e) : null;
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
        return ms && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Uc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ss(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Uc[e.type] : n === "textarea";
  }
  function ks(e, n, t, r) {
    bt(r), n = Cl(n, "onChange"), 0 < n.length && (t = new Co("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Ai = null, Li = null;
  function Bc(e) {
    Bs(e, 0);
  }
  function kl(e) {
    var n = Kr(e);
    if (fi(n))
      return e;
  }
  function jc(e, n) {
    if (e === "change")
      return n;
  }
  var Es = !1;
  if (L) {
    var Mo;
    if (L) {
      var Do = "oninput" in document;
      if (!Do) {
        var xs = document.createElement("div");
        xs.setAttribute("oninput", "return;"), Do = typeof xs.oninput == "function";
      }
      Mo = Do;
    } else
      Mo = !1;
    Es = Mo && (!document.documentMode || 9 < document.documentMode);
  }
  function _s() {
    Ai && (Ai.detachEvent("onpropertychange", Cs), Li = Ai = null);
  }
  function Cs(e) {
    if (e.propertyName === "value" && kl(Li)) {
      var n = [];
      ks(n, Li, e, O(e)), gi(Bc, n);
    }
  }
  function Hc(e, n, t) {
    e === "focusin" ? (_s(), Ai = n, Li = t, Ai.attachEvent("onpropertychange", Cs)) : e === "focusout" && _s();
  }
  function Vc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return kl(Li);
  }
  function Wc(e, n) {
    if (e === "click")
      return kl(n);
  }
  function Yc(e, n) {
    if (e === "input" || e === "change")
      return kl(n);
  }
  function $c(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Un = typeof Object.is == "function" ? Object.is : $c;
  function zi(e, n) {
    if (Un(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var i = t[r];
      if (!A.call(n, i) || !Un(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  function Ps(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Ts(e, n) {
    var t = Ps(e);
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
      t = Ps(t);
    }
  }
  function Rs(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Rs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Ns() {
    for (var e = window, n = Qe(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = Qe(e.document);
    }
    return n;
  }
  function Ao(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Qc(e) {
    var n = Ns(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Rs(t.ownerDocument.documentElement, t)) {
      if (r !== null && Ao(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = t.textContent.length, s = Math.min(r.start, i);
          r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Ts(t, s);
          var c = Ts(
            t,
            r
          );
          i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (n = n.createRange(), n.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(n), e.extend(c.node, c.offset)) : (n.setEnd(c.node, c.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Kc = L && "documentMode" in document && 11 >= document.documentMode, Wr = null, Lo = null, Ii = null, zo = !1;
  function Fs(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    zo || Wr == null || Wr !== Qe(r) || (r = Wr, "selectionStart" in r && Ao(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ii && zi(Ii, r) || (Ii = r, r = Cl(Lo, "onSelect"), 0 < r.length && (n = new Co("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Wr)));
  }
  function El(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var Yr = { animationend: El("Animation", "AnimationEnd"), animationiteration: El("Animation", "AnimationIteration"), animationstart: El("Animation", "AnimationStart"), transitionend: El("Transition", "TransitionEnd") }, Io = {}, Ms = {};
  L && (Ms = document.createElement("div").style, "AnimationEvent" in window || (delete Yr.animationend.animation, delete Yr.animationiteration.animation, delete Yr.animationstart.animation), "TransitionEvent" in window || delete Yr.transitionend.transition);
  function xl(e) {
    if (Io[e])
      return Io[e];
    if (!Yr[e])
      return e;
    var n = Yr[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in Ms)
        return Io[e] = n[t];
    return e;
  }
  var Ds = xl("animationend"), As = xl("animationiteration"), Ls = xl("animationstart"), zs = xl("transitionend"), Is = /* @__PURE__ */ new Map(), Os = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rt(e, n) {
    Is.set(e, n), h(n, [e]);
  }
  for (var Oo = 0; Oo < Os.length; Oo++) {
    var Uo = Os[Oo], Xc = Uo.toLowerCase(), Gc = Uo[0].toUpperCase() + Uo.slice(1);
    Rt(Xc, "on" + Gc);
  }
  Rt(Ds, "onAnimationEnd"), Rt(As, "onAnimationIteration"), Rt(Ls, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(zs, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Oi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));
  function Us(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, kt(r, n, void 0, e), e.currentTarget = null;
  }
  function Bs(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var c = r.length - 1; 0 <= c; c--) {
            var m = r[c], w = m.instance, C = m.currentTarget;
            if (m = m.listener, w !== s && i.isPropagationStopped())
              break e;
            Us(i, m, C), s = w;
          }
        else
          for (c = 0; c < r.length; c++) {
            if (m = r[c], w = m.instance, C = m.currentTarget, m = m.listener, w !== s && i.isPropagationStopped())
              break e;
            Us(i, m, C), s = w;
          }
      }
    }
    if (fn)
      throw e = St, fn = !1, St = null, e;
  }
  function Ee(e, n) {
    var t = n[Qo];
    t === void 0 && (t = n[Qo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (js(n, e, 2, !1), t.add(r));
  }
  function Bo(e, n, t) {
    var r = 0;
    n && (r |= 4), js(t, e, r, n);
  }
  var _l = "_reactListening" + Math.random().toString(36).slice(2);
  function Ui(e) {
    if (!e[_l]) {
      e[_l] = !0, p.forEach(function(t) {
        t !== "selectionchange" && (Zc.has(t) || Bo(t, !1, e), Bo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[_l] || (n[_l] = !0, Bo("selectionchange", !1, n));
    }
  }
  function js(e, n, t, r) {
    switch (Ni(n)) {
      case 1:
        var i = Pt;
        break;
      case 4:
        i = T;
        break;
      default:
        i = re;
    }
    t = i.bind(null, n, t, e), i = void 0, !wi || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: i }) : e.addEventListener(n, t, !0) : i !== void 0 ? e.addEventListener(n, t, { passive: i }) : e.addEventListener(n, t, !1);
  }
  function jo(e, n, t, r, i) {
    var s = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var c = r.tag;
          if (c === 3 || c === 4) {
            var m = r.stateNode.containerInfo;
            if (m === i || m.nodeType === 8 && m.parentNode === i)
              break;
            if (c === 4)
              for (c = r.return; c !== null; ) {
                var w = c.tag;
                if ((w === 3 || w === 4) && (w = c.stateNode.containerInfo, w === i || w.nodeType === 8 && w.parentNode === i))
                  return;
                c = c.return;
              }
            for (; m !== null; ) {
              if (c = sr(m), c === null)
                return;
              if (w = c.tag, w === 5 || w === 6) {
                r = s = c;
                continue e;
              }
              m = m.parentNode;
            }
          }
          r = r.return;
        }
    gi(function() {
      var C = s, F = O(t), D = [];
      e: {
        var N = Is.get(e);
        if (N !== void 0) {
          var j = Co, V = e;
          switch (e) {
            case "keypress":
              if (gl(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              j = Pc;
              break;
            case "focusin":
              V = "focus", j = Ro;
              break;
            case "focusout":
              V = "blur", j = Ro;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ro;
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
              j = ds;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = hc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Nc;
              break;
            case Ds:
            case As:
            case Ls:
              j = yc;
              break;
            case zs:
              j = Mc;
              break;
            case "scroll":
              j = dc;
              break;
            case "wheel":
              j = Ac;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = hs;
          }
          var $ = (n & 4) !== 0, Ae = !$ && e === "scroll", k = $ ? N !== null ? N + "Capture" : null : N;
          $ = [];
          for (var S = C, x; S !== null; ) {
            x = S;
            var z = x.stateNode;
            if (x.tag === 5 && z !== null && (x = z, k !== null && (z = er(S, k), z != null && $.push(Bi(S, z, x)))), Ae)
              break;
            S = S.return;
          }
          0 < $.length && (N = new j(N, V, null, t, F), D.push({ event: N, listeners: $ }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", N && t !== Rr && (V = t.relatedTarget || t.fromElement) && (sr(V) || V[ot]))
            break e;
          if ((j || N) && (N = F.window === F ? F : (N = F.ownerDocument) ? N.defaultView || N.parentWindow : window, j ? (V = t.relatedTarget || t.toElement, j = C, V = V ? sr(V) : null, V !== null && (Ae = Kn(V), V !== Ae || V.tag !== 5 && V.tag !== 6) && (V = null)) : (j = null, V = C), j !== V)) {
            if ($ = ds, z = "onMouseLeave", k = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && ($ = hs, z = "onPointerLeave", k = "onPointerEnter", S = "pointer"), Ae = j == null ? N : Kr(j), x = V == null ? N : Kr(V), N = new $(z, S + "leave", j, t, F), N.target = Ae, N.relatedTarget = x, z = null, sr(F) === C && ($ = new $(k, S + "enter", V, t, F), $.target = x, $.relatedTarget = Ae, z = $), Ae = z, j && V)
              n: {
                for ($ = j, k = V, S = 0, x = $; x; x = $r(x))
                  S++;
                for (x = 0, z = k; z; z = $r(z))
                  x++;
                for (; 0 < S - x; )
                  $ = $r($), S--;
                for (; 0 < x - S; )
                  k = $r(k), x--;
                for (; S--; ) {
                  if ($ === k || k !== null && $ === k.alternate)
                    break n;
                  $ = $r($), k = $r(k);
                }
                $ = null;
              }
            else
              $ = null;
            j !== null && Hs(D, N, j, $, !1), V !== null && Ae !== null && Hs(D, Ae, V, $, !0);
          }
        }
        e: {
          if (N = C ? Kr(C) : window, j = N.nodeName && N.nodeName.toLowerCase(), j === "select" || j === "input" && N.type === "file")
            var K = jc;
          else if (Ss(N))
            if (Es)
              K = Yc;
            else {
              K = Vc;
              var G = Hc;
            }
          else
            (j = N.nodeName) && j.toLowerCase() === "input" && (N.type === "checkbox" || N.type === "radio") && (K = Wc);
          if (K && (K = K(e, C))) {
            ks(D, K, t, F);
            break e;
          }
          G && G(e, N, C), e === "focusout" && (G = N._wrapperState) && G.controlled && N.type === "number" && $t(N, "number", N.value);
        }
        switch (G = C ? Kr(C) : window, e) {
          case "focusin":
            (Ss(G) || G.contentEditable === "true") && (Wr = G, Lo = C, Ii = null);
            break;
          case "focusout":
            Ii = Lo = Wr = null;
            break;
          case "mousedown":
            zo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            zo = !1, Fs(D, t, F);
            break;
          case "selectionchange":
            if (Kc)
              break;
          case "keydown":
          case "keyup":
            Fs(D, t, F);
        }
        var Z;
        if (Fo)
          e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
        else
          Vr ? gs(e, t) && (J = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (J = "onCompositionStart");
        J && (ms && t.locale !== "ko" && (Vr || J !== "onCompositionStart" ? J === "onCompositionEnd" && Vr && (Z = fs()) : (Tt = F, _o = "value" in Tt ? Tt.value : Tt.textContent, Vr = !0)), G = Cl(C, J), 0 < G.length && (J = new ps(J, e, null, t, F), D.push({ event: J, listeners: G }), Z ? J.data = Z : (Z = ws(t), Z !== null && (J.data = Z)))), (Z = zc ? Ic(e, t) : Oc(e, t)) && (C = Cl(C, "onBeforeInput"), 0 < C.length && (F = new ps("onBeforeInput", "beforeinput", null, t, F), D.push({ event: F, listeners: C }), F.data = Z));
      }
      Bs(D, n);
    });
  }
  function Bi(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Cl(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var i = e, s = i.stateNode;
      i.tag === 5 && s !== null && (i = s, s = er(e, t), s != null && r.unshift(Bi(e, s, i)), s = er(e, n), s != null && r.push(Bi(e, s, i))), e = e.return;
    }
    return r;
  }
  function $r(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Hs(e, n, t, r, i) {
    for (var s = n._reactName, c = []; t !== null && t !== r; ) {
      var m = t, w = m.alternate, C = m.stateNode;
      if (w !== null && w === r)
        break;
      m.tag === 5 && C !== null && (m = C, i ? (w = er(t, s), w != null && c.unshift(Bi(t, w, m))) : i || (w = er(t, s), w != null && c.push(Bi(t, w, m)))), t = t.return;
    }
    c.length !== 0 && e.push({ event: n, listeners: c });
  }
  var Jc = /\r\n?/g, qc = /\u0000|\uFFFD/g;
  function Vs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jc, `
`).replace(qc, "");
  }
  function Pl(e, n, t) {
    if (n = Vs(n), Vs(e) !== n && t)
      throw Error(l(425));
  }
  function Tl() {
  }
  var Ho = null, Vo = null;
  function Wo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Yo = typeof setTimeout == "function" ? setTimeout : void 0, bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Ws = typeof Promise == "function" ? Promise : void 0, ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ws < "u" ? function(e) {
    return Ws.resolve(null).then(e).catch(nd);
  } : Yo;
  function nd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $o(e, n) {
    var t = n, r = 0;
    do {
      var i = t.nextSibling;
      if (e.removeChild(t), i && i.nodeType === 8)
        if (t = i.data, t === "/$") {
          if (r === 0) {
            e.removeChild(i), ne(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = i;
    } while (t);
    ne(n);
  }
  function Nt(e) {
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
  function Ys(e) {
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
  var Qr = Math.random().toString(36).slice(2), Gn = "__reactFiber$" + Qr, ji = "__reactProps$" + Qr, ot = "__reactContainer$" + Qr, Qo = "__reactEvents$" + Qr, td = "__reactListeners$" + Qr, rd = "__reactHandles$" + Qr;
  function sr(e) {
    var n = e[Gn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[ot] || t[Gn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Ys(e); e !== null; ) {
            if (t = e[Gn])
              return t;
            e = Ys(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function Hi(e) {
    return e = e[Gn] || e[ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Kr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(l(33));
  }
  function Rl(e) {
    return e[ji] || null;
  }
  var Ko = [], Xr = -1;
  function Ft(e) {
    return { current: e };
  }
  function xe(e) {
    0 > Xr || (e.current = Ko[Xr], Ko[Xr] = null, Xr--);
  }
  function we(e, n) {
    Xr++, Ko[Xr] = e.current, e.current = n;
  }
  var Mt = {}, qe = Ft(Mt), pn = Ft(!1), ar = Mt;
  function Gr(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in t)
      i[s] = n[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function hn(e) {
    return e = e.childContextTypes, e != null;
  }
  function Nl() {
    xe(pn), xe(qe);
  }
  function $s(e, n, t) {
    if (qe.current !== Mt)
      throw Error(l(168));
    we(qe, n), we(pn, t);
  }
  function Qs(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in n))
        throw Error(l(108, he(e) || "Unknown", i));
    return g({}, t, r);
  }
  function Fl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, ar = qe.current, we(qe, e), we(pn, pn.current), !0;
  }
  function Ks(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(l(169));
    t ? (e = Qs(e, n, ar), r.__reactInternalMemoizedMergedChildContext = e, xe(pn), xe(qe), we(qe, e)) : xe(pn), we(pn, t);
  }
  var ut = null, Ml = !1, Xo = !1;
  function Xs(e) {
    ut === null ? ut = [e] : ut.push(e);
  }
  function id(e) {
    Ml = !0, Xs(e);
  }
  function Dt() {
    if (!Xo && ut !== null) {
      Xo = !0;
      var e = 0, n = ce;
      try {
        var t = ut;
        for (ce = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        ut = null, Ml = !1;
      } catch (i) {
        throw ut !== null && (ut = ut.slice(e + 1)), al(it, Dt), i;
      } finally {
        ce = n, Xo = !1;
      }
    }
    return null;
  }
  var Zr = [], Jr = 0, Dl = null, Al = 0, Nn = [], Fn = 0, fr = null, st = 1, at = "";
  function cr(e, n) {
    Zr[Jr++] = Al, Zr[Jr++] = Dl, Dl = e, Al = n;
  }
  function Gs(e, n, t) {
    Nn[Fn++] = st, Nn[Fn++] = at, Nn[Fn++] = fr, fr = e;
    var r = st;
    e = at;
    var i = 32 - ln(r) - 1;
    r &= ~(1 << i), t += 1;
    var s = 32 - ln(n) + i;
    if (30 < s) {
      var c = i - i % 5;
      s = (r & (1 << c) - 1).toString(32), r >>= c, i -= c, st = 1 << 32 - ln(n) + i | t << i | r, at = s + e;
    } else
      st = 1 << s | t << i | r, at = e;
  }
  function Go(e) {
    e.return !== null && (cr(e, 1), Gs(e, 1, 0));
  }
  function Zo(e) {
    for (; e === Dl; )
      Dl = Zr[--Jr], Zr[Jr] = null, Al = Zr[--Jr], Zr[Jr] = null;
    for (; e === fr; )
      fr = Nn[--Fn], Nn[Fn] = null, at = Nn[--Fn], Nn[Fn] = null, st = Nn[--Fn], Nn[Fn] = null;
  }
  var xn = null, _n = null, Ce = !1, Bn = null;
  function Zs(e, n) {
    var t = Ln(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Js(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, xn = e, _n = Nt(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, xn = e, _n = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = fr !== null ? { id: st, overflow: at } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ln(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, xn = e, _n = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function qo(e) {
    if (Ce) {
      var n = _n;
      if (n) {
        var t = n;
        if (!Js(e, n)) {
          if (Jo(e))
            throw Error(l(418));
          n = Nt(t.nextSibling);
          var r = xn;
          n && Js(e, n) ? Zs(r, t) : (e.flags = e.flags & -4097 | 2, Ce = !1, xn = e);
        }
      } else {
        if (Jo(e))
          throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ce = !1, xn = e;
      }
    }
  }
  function qs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    xn = e;
  }
  function Ll(e) {
    if (e !== xn)
      return !1;
    if (!Ce)
      return qs(e), Ce = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Wo(e.type, e.memoizedProps)), n && (n = _n)) {
      if (Jo(e))
        throw bs(), Error(l(418));
      for (; n; )
        Zs(e, n), n = Nt(n.nextSibling);
    }
    if (qs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                _n = Nt(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        _n = null;
      }
    } else
      _n = xn ? Nt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bs() {
    for (var e = _n; e; )
      e = Nt(e.nextSibling);
  }
  function qr() {
    _n = xn = null, Ce = !1;
  }
  function bo(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  var ld = _e.ReactCurrentBatchConfig;
  function jn(e, n) {
    if (e && e.defaultProps) {
      n = g({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var zl = Ft(null), Il = null, br = null, eu = null;
  function nu() {
    eu = br = Il = null;
  }
  function tu(e) {
    var n = zl.current;
    xe(zl), e._currentValue = n;
  }
  function ru(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function ei(e, n) {
    Il = e, eu = br = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (mn = !0), e.firstContext = null);
  }
  function Mn(e) {
    var n = e._currentValue;
    if (eu !== e)
      if (e = { context: e, memoizedValue: n, next: null }, br === null) {
        if (Il === null)
          throw Error(l(308));
        br = e, Il.dependencies = { lanes: 0, firstContext: e };
      } else
        br = br.next = e;
    return n;
  }
  var dr = null;
  function iu(e) {
    dr === null ? dr = [e] : dr.push(e);
  }
  function ea(e, n, t, r) {
    var i = n.interleaved;
    return i === null ? (t.next = t, iu(n)) : (t.next = i.next, i.next = t), n.interleaved = t, ft(e, r);
  }
  function ft(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var At = !1;
  function lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function na(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ct(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Lt(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, ae & 2) {
      var i = r.pending;
      return i === null ? n.next = n : (n.next = i.next, i.next = n), r.pending = n, ft(e, t);
    }
    return i = r.interleaved, i === null ? (n.next = n, iu(r)) : (n.next = i.next, i.next = n), r.interleaved = n, ft(e, t);
  }
  function Ol(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, lr(e, t);
    }
  }
  function ta(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var i = null, s = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var c = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          s === null ? i = s = c : s = s.next = c, t = t.next;
        } while (t !== null);
        s === null ? i = s = n : s = s.next = n;
      } else
        i = s = n;
      t = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Ul(e, n, t, r) {
    var i = e.updateQueue;
    At = !1;
    var s = i.firstBaseUpdate, c = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var w = m, C = w.next;
      w.next = null, c === null ? s = C : c.next = C, c = w;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, m = F.lastBaseUpdate, m !== c && (m === null ? F.firstBaseUpdate = C : m.next = C, F.lastBaseUpdate = w));
    }
    if (s !== null) {
      var D = i.baseState;
      c = 0, F = C = w = null, m = s;
      do {
        var N = m.lane, j = m.eventTime;
        if ((r & N) === N) {
          F !== null && (F = F.next = {
            eventTime: j,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var V = e, $ = m;
            switch (N = n, j = t, $.tag) {
              case 1:
                if (V = $.payload, typeof V == "function") {
                  D = V.call(j, D, N);
                  break e;
                }
                D = V;
                break e;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = $.payload, N = typeof V == "function" ? V.call(j, D, N) : V, N == null)
                  break e;
                D = g({}, D, N);
                break e;
              case 2:
                At = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, N = i.effects, N === null ? i.effects = [m] : N.push(m));
        } else
          j = { eventTime: j, lane: N, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, F === null ? (C = F = j, w = D) : F = F.next = j, c |= N;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, i.lastBaseUpdate = N, i.shared.pending = null;
        }
      } while (1);
      if (F === null && (w = D), i.baseState = w, i.firstBaseUpdate = C, i.lastBaseUpdate = F, n = i.shared.interleaved, n !== null) {
        i = n;
        do
          c |= i.lane, i = i.next;
        while (i !== n);
      } else
        s === null && (i.shared.lanes = 0);
      mr |= c, e.lanes = c, e.memoizedState = D;
    }
  }
  function ra(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = t, typeof i != "function")
            throw Error(l(191, i));
          i.call(r);
        }
      }
  }
  var ia = new a.Component().refs;
  function ou(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : g({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Bl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = sn(), i = Ut(e), s = ct(r, i);
    s.payload = n, t != null && (s.callback = t), n = Lt(e, s, i), n !== null && (Wn(n, e, i, r), Ol(n, e, i));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = sn(), i = Ut(e), s = ct(r, i);
    s.tag = 1, s.payload = n, t != null && (s.callback = t), n = Lt(e, s, i), n !== null && (Wn(n, e, i, r), Ol(n, e, i));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = sn(), r = Ut(e), i = ct(t, r);
    i.tag = 2, n != null && (i.callback = n), n = Lt(e, i, r), n !== null && (Wn(n, e, r, t), Ol(n, e, r));
  } };
  function la(e, n, t, r, i, s, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, c) : n.prototype && n.prototype.isPureReactComponent ? !zi(t, r) || !zi(i, s) : !0;
  }
  function oa(e, n, t) {
    var r = !1, i = Mt, s = n.contextType;
    return typeof s == "object" && s !== null ? s = Mn(s) : (i = hn(n) ? ar : qe.current, r = n.contextTypes, s = (r = r != null) ? Gr(e, i) : Mt), n = new n(t, s), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Bl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), n;
  }
  function ua(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Bl.enqueueReplaceState(n, n.state, null);
  }
  function uu(e, n, t, r) {
    var i = e.stateNode;
    i.props = t, i.state = e.memoizedState, i.refs = ia, lu(e);
    var s = n.contextType;
    typeof s == "object" && s !== null ? i.context = Mn(s) : (s = hn(n) ? ar : qe.current, i.context = Gr(e, s)), i.state = e.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (ou(e, n, s, t), i.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (n = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), n !== i.state && Bl.enqueueReplaceState(i, i.state, null), Ul(e, t, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Vi(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(l(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(l(147, e));
        var i = r, s = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === s ? n.ref : (n = function(c) {
          var m = i.refs;
          m === ia && (m = i.refs = {}), c === null ? delete m[s] : m[s] = c;
        }, n._stringRef = s, n);
      }
      if (typeof e != "string")
        throw Error(l(284));
      if (!t._owner)
        throw Error(l(290, e));
    }
    return e;
  }
  function jl(e, n) {
    throw e = Object.prototype.toString.call(n), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function sa(e) {
    var n = e._init;
    return n(e._payload);
  }
  function aa(e) {
    function n(k, S) {
      if (e) {
        var x = k.deletions;
        x === null ? (k.deletions = [S], k.flags |= 16) : x.push(S);
      }
    }
    function t(k, S) {
      if (!e)
        return null;
      for (; S !== null; )
        n(k, S), S = S.sibling;
      return null;
    }
    function r(k, S) {
      for (k = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? k.set(S.key, S) : k.set(S.index, S), S = S.sibling;
      return k;
    }
    function i(k, S) {
      return k = jt(k, S), k.index = 0, k.sibling = null, k;
    }
    function s(k, S, x) {
      return k.index = x, e ? (x = k.alternate, x !== null ? (x = x.index, x < S ? (k.flags |= 2, S) : x) : (k.flags |= 2, S)) : (k.flags |= 1048576, S);
    }
    function c(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function m(k, S, x, z) {
      return S === null || S.tag !== 6 ? (S = Yu(x, k.mode, z), S.return = k, S) : (S = i(S, x), S.return = k, S);
    }
    function w(k, S, x, z) {
      var K = x.type;
      return K === Re ? F(k, S, x.props.children, z, x.key) : S !== null && (S.elementType === K || typeof K == "object" && K !== null && K.$$typeof === je && sa(K) === S.type) ? (z = i(S, x.props), z.ref = Vi(k, S, x), z.return = k, z) : (z = lo(x.type, x.key, x.props, null, k.mode, z), z.ref = Vi(k, S, x), z.return = k, z);
    }
    function C(k, S, x, z) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== x.containerInfo || S.stateNode.implementation !== x.implementation ? (S = $u(x, k.mode, z), S.return = k, S) : (S = i(S, x.children || []), S.return = k, S);
    }
    function F(k, S, x, z, K) {
      return S === null || S.tag !== 7 ? (S = wr(x, k.mode, z, K), S.return = k, S) : (S = i(S, x), S.return = k, S);
    }
    function D(k, S, x) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
        return S = Yu("" + S, k.mode, x), S.return = k, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Oe:
            return x = lo(S.type, S.key, S.props, null, k.mode, x), x.ref = Vi(k, null, S), x.return = k, x;
          case Ue:
            return S = $u(S, k.mode, x), S.return = k, S;
          case je:
            var z = S._init;
            return D(k, z(S._payload), x);
        }
        if (Qt(S) || Q(S))
          return S = wr(S, k.mode, x, null), S.return = k, S;
        jl(k, S);
      }
      return null;
    }
    function N(k, S, x, z) {
      var K = S !== null ? S.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return K !== null ? null : m(k, S, "" + x, z);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Oe:
            return x.key === K ? w(k, S, x, z) : null;
          case Ue:
            return x.key === K ? C(k, S, x, z) : null;
          case je:
            return K = x._init, N(
              k,
              S,
              K(x._payload),
              z
            );
        }
        if (Qt(x) || Q(x))
          return K !== null ? null : F(k, S, x, z, null);
        jl(k, x);
      }
      return null;
    }
    function j(k, S, x, z, K) {
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return k = k.get(x) || null, m(S, k, "" + z, K);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Oe:
            return k = k.get(z.key === null ? x : z.key) || null, w(S, k, z, K);
          case Ue:
            return k = k.get(z.key === null ? x : z.key) || null, C(S, k, z, K);
          case je:
            var G = z._init;
            return j(k, S, x, G(z._payload), K);
        }
        if (Qt(z) || Q(z))
          return k = k.get(x) || null, F(S, k, z, K, null);
        jl(S, z);
      }
      return null;
    }
    function V(k, S, x, z) {
      for (var K = null, G = null, Z = S, J = S = 0, We = null; Z !== null && J < x.length; J++) {
        Z.index > J ? (We = Z, Z = null) : We = Z.sibling;
        var de = N(k, Z, x[J], z);
        if (de === null) {
          Z === null && (Z = We);
          break;
        }
        e && Z && de.alternate === null && n(k, Z), S = s(de, S, J), G === null ? K = de : G.sibling = de, G = de, Z = We;
      }
      if (J === x.length)
        return t(k, Z), Ce && cr(k, J), K;
      if (Z === null) {
        for (; J < x.length; J++)
          Z = D(k, x[J], z), Z !== null && (S = s(Z, S, J), G === null ? K = Z : G.sibling = Z, G = Z);
        return Ce && cr(k, J), K;
      }
      for (Z = r(k, Z); J < x.length; J++)
        We = j(Z, k, J, x[J], z), We !== null && (e && We.alternate !== null && Z.delete(We.key === null ? J : We.key), S = s(We, S, J), G === null ? K = We : G.sibling = We, G = We);
      return e && Z.forEach(function(Ht) {
        return n(k, Ht);
      }), Ce && cr(k, J), K;
    }
    function $(k, S, x, z) {
      var K = Q(x);
      if (typeof K != "function")
        throw Error(l(150));
      if (x = K.call(x), x == null)
        throw Error(l(151));
      for (var G = K = null, Z = S, J = S = 0, We = null, de = x.next(); Z !== null && !de.done; J++, de = x.next()) {
        Z.index > J ? (We = Z, Z = null) : We = Z.sibling;
        var Ht = N(k, Z, de.value, z);
        if (Ht === null) {
          Z === null && (Z = We);
          break;
        }
        e && Z && Ht.alternate === null && n(k, Z), S = s(Ht, S, J), G === null ? K = Ht : G.sibling = Ht, G = Ht, Z = We;
      }
      if (de.done)
        return t(
          k,
          Z
        ), Ce && cr(k, J), K;
      if (Z === null) {
        for (; !de.done; J++, de = x.next())
          de = D(k, de.value, z), de !== null && (S = s(de, S, J), G === null ? K = de : G.sibling = de, G = de);
        return Ce && cr(k, J), K;
      }
      for (Z = r(k, Z); !de.done; J++, de = x.next())
        de = j(Z, k, J, de.value, z), de !== null && (e && de.alternate !== null && Z.delete(de.key === null ? J : de.key), S = s(de, S, J), G === null ? K = de : G.sibling = de, G = de);
      return e && Z.forEach(function(Ud) {
        return n(k, Ud);
      }), Ce && cr(k, J), K;
    }
    function Ae(k, S, x, z) {
      if (typeof x == "object" && x !== null && x.type === Re && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Oe:
            e: {
              for (var K = x.key, G = S; G !== null; ) {
                if (G.key === K) {
                  if (K = x.type, K === Re) {
                    if (G.tag === 7) {
                      t(k, G.sibling), S = i(G, x.props.children), S.return = k, k = S;
                      break e;
                    }
                  } else if (G.elementType === K || typeof K == "object" && K !== null && K.$$typeof === je && sa(K) === G.type) {
                    t(k, G.sibling), S = i(G, x.props), S.ref = Vi(k, G, x), S.return = k, k = S;
                    break e;
                  }
                  t(k, G);
                  break;
                } else
                  n(k, G);
                G = G.sibling;
              }
              x.type === Re ? (S = wr(x.props.children, k.mode, z, x.key), S.return = k, k = S) : (z = lo(x.type, x.key, x.props, null, k.mode, z), z.ref = Vi(k, S, x), z.return = k, k = z);
            }
            return c(k);
          case Ue:
            e: {
              for (G = x.key; S !== null; ) {
                if (S.key === G)
                  if (S.tag === 4 && S.stateNode.containerInfo === x.containerInfo && S.stateNode.implementation === x.implementation) {
                    t(k, S.sibling), S = i(S, x.children || []), S.return = k, k = S;
                    break e;
                  } else {
                    t(k, S);
                    break;
                  }
                else
                  n(k, S);
                S = S.sibling;
              }
              S = $u(x, k.mode, z), S.return = k, k = S;
            }
            return c(k);
          case je:
            return G = x._init, Ae(k, S, G(x._payload), z);
        }
        if (Qt(x))
          return V(k, S, x, z);
        if (Q(x))
          return $(k, S, x, z);
        jl(k, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, S !== null && S.tag === 6 ? (t(k, S.sibling), S = i(S, x), S.return = k, k = S) : (t(k, S), S = Yu(x, k.mode, z), S.return = k, k = S), c(k)) : t(k, S);
    }
    return Ae;
  }
  var ni = aa(!0), fa = aa(!1), Wi = {}, Zn = Ft(Wi), Yi = Ft(Wi), $i = Ft(Wi);
  function pr(e) {
    if (e === Wi)
      throw Error(l(174));
    return e;
  }
  function su(e, n) {
    switch (we($i, n), we(Yi, e), we(Zn, Wi), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Pr(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Pr(n, e);
    }
    xe(Zn), we(Zn, n);
  }
  function ti() {
    xe(Zn), xe(Yi), xe($i);
  }
  function ca(e) {
    pr($i.current);
    var n = pr(Zn.current), t = Pr(n, e.type);
    n !== t && (we(Yi, e), we(Zn, t));
  }
  function au(e) {
    Yi.current === e && (xe(Zn), xe(Yi));
  }
  var Pe = Ft(0);
  function Hl(e) {
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
  var fu = [];
  function cu() {
    for (var e = 0; e < fu.length; e++)
      fu[e]._workInProgressVersionPrimary = null;
    fu.length = 0;
  }
  var Vl = _e.ReactCurrentDispatcher, du = _e.ReactCurrentBatchConfig, hr = 0, Te = null, ze = null, He = null, Wl = !1, Qi = !1, Ki = 0, od = 0;
  function be() {
    throw Error(l(321));
  }
  function pu(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!Un(e[t], n[t]))
        return !1;
    return !0;
  }
  function hu(e, n, t, r, i, s) {
    if (hr = s, Te = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Vl.current = e === null || e.memoizedState === null ? fd : cd, e = t(r, i), Qi) {
      s = 0;
      do {
        if (Qi = !1, Ki = 0, 25 <= s)
          throw Error(l(301));
        s += 1, He = ze = null, n.updateQueue = null, Vl.current = dd, e = t(r, i);
      } while (Qi);
    }
    if (Vl.current = Ql, n = ze !== null && ze.next !== null, hr = 0, He = ze = Te = null, Wl = !1, n)
      throw Error(l(300));
    return e;
  }
  function mu() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function Jn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return He === null ? Te.memoizedState = He = e : He = He.next = e, He;
  }
  function Dn() {
    if (ze === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ze.next;
    var n = He === null ? Te.memoizedState : He.next;
    if (n !== null)
      He = n, ze = e;
    else {
      if (e === null)
        throw Error(l(310));
      ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, He === null ? Te.memoizedState = He = e : He = He.next = e;
    }
    return He;
  }
  function Xi(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function vu(e) {
    var n = Dn(), t = n.queue;
    if (t === null)
      throw Error(l(311));
    t.lastRenderedReducer = e;
    var r = ze, i = r.baseQueue, s = t.pending;
    if (s !== null) {
      if (i !== null) {
        var c = i.next;
        i.next = s.next, s.next = c;
      }
      r.baseQueue = i = s, t.pending = null;
    }
    if (i !== null) {
      s = i.next, r = r.baseState;
      var m = c = null, w = null, C = s;
      do {
        var F = C.lane;
        if ((hr & F) === F)
          w !== null && (w = w.next = { lane: 0, action: C.action, hasEagerState: C.hasEagerState, eagerState: C.eagerState, next: null }), r = C.hasEagerState ? C.eagerState : e(r, C.action);
        else {
          var D = {
            lane: F,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          };
          w === null ? (m = w = D, c = r) : w = w.next = D, Te.lanes |= F, mr |= F;
        }
        C = C.next;
      } while (C !== null && C !== s);
      w === null ? c = r : w.next = m, Un(r, n.memoizedState) || (mn = !0), n.memoizedState = r, n.baseState = c, n.baseQueue = w, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      i = e;
      do
        s = i.lane, Te.lanes |= s, mr |= s, i = i.next;
      while (i !== e);
    } else
      i === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function yu(e) {
    var n = Dn(), t = n.queue;
    if (t === null)
      throw Error(l(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, i = t.pending, s = n.memoizedState;
    if (i !== null) {
      t.pending = null;
      var c = i = i.next;
      do
        s = e(s, c.action), c = c.next;
      while (c !== i);
      Un(s, n.memoizedState) || (mn = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), t.lastRenderedState = s;
    }
    return [s, r];
  }
  function da() {
  }
  function pa(e, n) {
    var t = Te, r = Dn(), i = n(), s = !Un(r.memoizedState, i);
    if (s && (r.memoizedState = i, mn = !0), r = r.queue, gu(va.bind(null, t, r, e), [e]), r.getSnapshot !== n || s || He !== null && He.memoizedState.tag & 1) {
      if (t.flags |= 2048, Gi(9, ma.bind(null, t, r, i, n), void 0, null), Ve === null)
        throw Error(l(349));
      hr & 30 || ha(t, n, i);
    }
    return i;
  }
  function ha(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Te.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Te.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ma(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ya(n) && ga(e);
  }
  function va(e, n, t) {
    return t(function() {
      ya(n) && ga(e);
    });
  }
  function ya(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !Un(e, t);
    } catch {
      return !0;
    }
  }
  function ga(e) {
    var n = ft(e, 1);
    n !== null && Wn(n, e, 1, -1);
  }
  function wa(e) {
    var n = Jn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xi, lastRenderedState: e }, n.queue = e, e = e.dispatch = ad.bind(null, Te, e), [n.memoizedState, e];
  }
  function Gi(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Te.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Te.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function Sa() {
    return Dn().memoizedState;
  }
  function Yl(e, n, t, r) {
    var i = Jn();
    Te.flags |= e, i.memoizedState = Gi(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function $l(e, n, t, r) {
    var i = Dn();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ze !== null) {
      var c = ze.memoizedState;
      if (s = c.destroy, r !== null && pu(r, c.deps)) {
        i.memoizedState = Gi(n, t, s, r);
        return;
      }
    }
    Te.flags |= e, i.memoizedState = Gi(1 | n, t, s, r);
  }
  function ka(e, n) {
    return Yl(8390656, 8, e, n);
  }
  function gu(e, n) {
    return $l(2048, 8, e, n);
  }
  function Ea(e, n) {
    return $l(4, 2, e, n);
  }
  function xa(e, n) {
    return $l(4, 4, e, n);
  }
  function _a(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ca(e, n, t) {
    return t = t != null ? t.concat([e]) : null, $l(4, 4, _a.bind(null, n, e), t);
  }
  function wu() {
  }
  function Pa(e, n) {
    var t = Dn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && pu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ta(e, n) {
    var t = Dn();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && pu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ra(e, n, t) {
    return hr & 21 ? (Un(t, n) || (t = Pi(), Te.lanes |= t, mr |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, mn = !0), e.memoizedState = t);
  }
  function ud(e, n) {
    var t = ce;
    ce = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = du.transition;
    du.transition = {};
    try {
      e(!1), n();
    } finally {
      ce = t, du.transition = r;
    }
  }
  function Na() {
    return Dn().memoizedState;
  }
  function sd(e, n, t) {
    var r = Ut(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Fa(e))
      Ma(n, t);
    else if (t = ea(e, n, t, r), t !== null) {
      var i = sn();
      Wn(t, e, r, i), Da(t, n, r);
    }
  }
  function ad(e, n, t) {
    var r = Ut(e), i = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Fa(e))
      Ma(n, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var c = n.lastRenderedState, m = s(c, t);
          if (i.hasEagerState = !0, i.eagerState = m, Un(m, c)) {
            var w = n.interleaved;
            w === null ? (i.next = i, iu(n)) : (i.next = w.next, w.next = i), n.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      t = ea(e, n, i, r), t !== null && (i = sn(), Wn(t, e, r, i), Da(t, n, r));
    }
  }
  function Fa(e) {
    var n = e.alternate;
    return e === Te || n !== null && n === Te;
  }
  function Ma(e, n) {
    Qi = Wl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Da(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, lr(e, t);
    }
  }
  var Ql = { readContext: Mn, useCallback: be, useContext: be, useEffect: be, useImperativeHandle: be, useInsertionEffect: be, useLayoutEffect: be, useMemo: be, useReducer: be, useRef: be, useState: be, useDebugValue: be, useDeferredValue: be, useTransition: be, useMutableSource: be, useSyncExternalStore: be, useId: be, unstable_isNewReconciler: !1 }, fd = { readContext: Mn, useCallback: function(e, n) {
    return Jn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Mn, useEffect: ka, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, Yl(
      4194308,
      4,
      _a.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return Yl(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return Yl(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Jn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = Jn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = sd.bind(null, Te, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = Jn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: wa, useDebugValue: wu, useDeferredValue: function(e) {
    return Jn().memoizedState = e;
  }, useTransition: function() {
    var e = wa(!1), n = e[0];
    return e = ud.bind(null, e[1]), Jn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = Te, i = Jn();
    if (Ce) {
      if (t === void 0)
        throw Error(l(407));
      t = t();
    } else {
      if (t = n(), Ve === null)
        throw Error(l(349));
      hr & 30 || ha(r, n, t);
    }
    i.memoizedState = t;
    var s = { value: t, getSnapshot: n };
    return i.queue = s, ka(va.bind(
      null,
      r,
      s,
      e
    ), [e]), r.flags |= 2048, Gi(9, ma.bind(null, r, s, t, n), void 0, null), t;
  }, useId: function() {
    var e = Jn(), n = Ve.identifierPrefix;
    if (Ce) {
      var t = at, r = st;
      t = (r & ~(1 << 32 - ln(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Ki++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = od++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, cd = {
    readContext: Mn,
    useCallback: Pa,
    useContext: Mn,
    useEffect: gu,
    useImperativeHandle: Ca,
    useInsertionEffect: Ea,
    useLayoutEffect: xa,
    useMemo: Ta,
    useReducer: vu,
    useRef: Sa,
    useState: function() {
      return vu(Xi);
    },
    useDebugValue: wu,
    useDeferredValue: function(e) {
      var n = Dn();
      return Ra(n, ze.memoizedState, e);
    },
    useTransition: function() {
      var e = vu(Xi)[0], n = Dn().memoizedState;
      return [e, n];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Na,
    unstable_isNewReconciler: !1
  }, dd = { readContext: Mn, useCallback: Pa, useContext: Mn, useEffect: gu, useImperativeHandle: Ca, useInsertionEffect: Ea, useLayoutEffect: xa, useMemo: Ta, useReducer: yu, useRef: Sa, useState: function() {
    return yu(Xi);
  }, useDebugValue: wu, useDeferredValue: function(e) {
    var n = Dn();
    return ze === null ? n.memoizedState = e : Ra(n, ze.memoizedState, e);
  }, useTransition: function() {
    var e = yu(Xi)[0], n = Dn().memoizedState;
    return [e, n];
  }, useMutableSource: da, useSyncExternalStore: pa, useId: Na, unstable_isNewReconciler: !1 };
  function ri(e, n) {
    try {
      var t = "", r = n;
      do
        t += ve(r), r = r.return;
      while (r);
      var i = t;
    } catch (s) {
      i = `
Error generating stack: ` + s.message + `
` + s.stack;
    }
    return { value: e, source: n, stack: i, digest: null };
  }
  function Su(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function ku(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var pd = typeof WeakMap == "function" ? WeakMap : Map;
  function Aa(e, n, t) {
    t = ct(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      bl || (bl = !0, Iu = r), ku(e, n);
    }, t;
  }
  function La(e, n, t) {
    t = ct(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = n.value;
      t.payload = function() {
        return r(i);
      }, t.callback = function() {
        ku(e, n);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      ku(e, n), typeof r != "function" && (It === null ? It = /* @__PURE__ */ new Set([this]) : It.add(this));
      var c = n.stack;
      this.componentDidCatch(n.value, { componentStack: c !== null ? c : "" });
    }), t;
  }
  function za(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new pd();
      var i = /* @__PURE__ */ new Set();
      r.set(n, i);
    } else
      i = r.get(n), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(n, i));
    i.has(t) || (i.add(t), e = Td.bind(null, e, n, t), n.then(e, e));
  }
  function Ia(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Oa(e, n, t, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = ct(-1, 1), n.tag = 2, Lt(t, n, 1))), t.lanes |= 1), e);
  }
  var hd = _e.ReactCurrentOwner, mn = !1;
  function un(e, n, t, r) {
    n.child = e === null ? fa(n, null, t, r) : ni(n, e.child, t, r);
  }
  function Ua(e, n, t, r, i) {
    t = t.render;
    var s = n.ref;
    return ei(n, i), r = hu(e, n, t, r, s, i), t = mu(), e !== null && !mn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i, dt(e, n, i)) : (Ce && t && Go(n), n.flags |= 1, un(e, n, r, i), n.child);
  }
  function Ba(e, n, t, r, i) {
    if (e === null) {
      var s = t.type;
      return typeof s == "function" && !Wu(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = s, ja(e, n, s, r, i)) : (e = lo(t.type, null, r, n, n.mode, i), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (s = e.child, !(e.lanes & i)) {
      var c = s.memoizedProps;
      if (t = t.compare, t = t !== null ? t : zi, t(c, r) && e.ref === n.ref)
        return dt(e, n, i);
    }
    return n.flags |= 1, e = jt(s, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function ja(e, n, t, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (zi(s, r) && e.ref === n.ref)
        if (mn = !1, n.pendingProps = r = s, (e.lanes & i) !== 0)
          e.flags & 131072 && (mn = !0);
        else
          return n.lanes = e.lanes, dt(e, n, i);
    }
    return Eu(e, n, t, r, i);
  }
  function Ha(e, n, t) {
    var r = n.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(li, Cn), Cn |= t;
      else {
        if (!(t & 1073741824))
          return e = s !== null ? s.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, we(li, Cn), Cn |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : t, we(li, Cn), Cn |= r;
      }
    else
      s !== null ? (r = s.baseLanes | t, n.memoizedState = null) : r = t, we(li, Cn), Cn |= r;
    return un(e, n, i, t), n.child;
  }
  function Va(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Eu(e, n, t, r, i) {
    var s = hn(t) ? ar : qe.current;
    return s = Gr(n, s), ei(n, i), t = hu(e, n, t, r, s, i), r = mu(), e !== null && !mn ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i, dt(e, n, i)) : (Ce && r && Go(n), n.flags |= 1, un(e, n, t, i), n.child);
  }
  function Wa(e, n, t, r, i) {
    if (hn(t)) {
      var s = !0;
      Fl(n);
    } else
      s = !1;
    if (ei(n, i), n.stateNode === null)
      Xl(e, n), oa(n, t, r), uu(n, t, r, i), r = !0;
    else if (e === null) {
      var c = n.stateNode, m = n.memoizedProps;
      c.props = m;
      var w = c.context, C = t.contextType;
      typeof C == "object" && C !== null ? C = Mn(C) : (C = hn(t) ? ar : qe.current, C = Gr(n, C));
      var F = t.getDerivedStateFromProps, D = typeof F == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      D || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== r || w !== C) && ua(n, c, r, C), At = !1;
      var N = n.memoizedState;
      c.state = N, Ul(n, r, c, i), w = n.memoizedState, m !== r || N !== w || pn.current || At ? (typeof F == "function" && (ou(n, t, F, r), w = n.memoizedState), (m = At || la(n, t, m, r, N, w, C)) ? (D || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = w), c.props = r, c.state = w, c.context = C, r = m) : (typeof c.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      c = n.stateNode, na(e, n), m = n.memoizedProps, C = n.type === n.elementType ? m : jn(n.type, m), c.props = C, D = n.pendingProps, N = c.context, w = t.contextType, typeof w == "object" && w !== null ? w = Mn(w) : (w = hn(t) ? ar : qe.current, w = Gr(n, w));
      var j = t.getDerivedStateFromProps;
      (F = typeof j == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== D || N !== w) && ua(n, c, r, w), At = !1, N = n.memoizedState, c.state = N, Ul(n, r, c, i);
      var V = n.memoizedState;
      m !== D || N !== V || pn.current || At ? (typeof j == "function" && (ou(n, t, j, r), V = n.memoizedState), (C = At || la(n, t, C, r, N, V, w) || !1) ? (F || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, V, w), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, V, w)), typeof c.componentDidUpdate == "function" && (n.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (n.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = V), c.props = r, c.state = V, c.context = w, r = C) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (n.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return xu(e, n, t, r, s, i);
  }
  function xu(e, n, t, r, i, s) {
    Va(e, n);
    var c = (n.flags & 128) !== 0;
    if (!r && !c)
      return i && Ks(n, t, !1), dt(e, n, s);
    r = n.stateNode, hd.current = n;
    var m = c && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && c ? (n.child = ni(n, e.child, null, s), n.child = ni(n, null, m, s)) : un(e, n, m, s), n.memoizedState = r.state, i && Ks(n, t, !0), n.child;
  }
  function Ya(e) {
    var n = e.stateNode;
    n.pendingContext ? $s(e, n.pendingContext, n.pendingContext !== n.context) : n.context && $s(e, n.context, !1), su(e, n.containerInfo);
  }
  function $a(e, n, t, r, i) {
    return qr(), bo(i), n.flags |= 256, un(e, n, t, r), n.child;
  }
  var _u = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qa(e, n, t) {
    var r = n.pendingProps, i = Pe.current, s = !1, c = (n.flags & 128) !== 0, m;
    if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), m ? (s = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), we(Pe, i & 1), e === null)
      return qo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (c = r.children, e = r.fallback, s ? (r = n.mode, s = n.child, c = { mode: "hidden", children: c }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = c) : s = oo(c, r, 0, null), e = wr(e, r, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = Cu(t), n.memoizedState = _u, e) : Pu(n, c));
    if (i = e.memoizedState, i !== null && (m = i.dehydrated, m !== null))
      return md(e, n, c, r, m, i, t);
    if (s) {
      s = r.fallback, c = n.mode, i = e.child, m = i.sibling;
      var w = { mode: "hidden", children: r.children };
      return !(c & 1) && n.child !== i ? (r = n.child, r.childLanes = 0, r.pendingProps = w, n.deletions = null) : (r = jt(i, w), r.subtreeFlags = i.subtreeFlags & 14680064), m !== null ? s = jt(m, s) : (s = wr(s, c, t, null), s.flags |= 2), s.return = n, r.return = n, r.sibling = s, n.child = r, r = s, s = n.child, c = e.child.memoizedState, c = c === null ? Cu(t) : { baseLanes: c.baseLanes | t, cachePool: null, transitions: c.transitions }, s.memoizedState = c, s.childLanes = e.childLanes & ~t, n.memoizedState = _u, r;
    }
    return s = e.child, e = s.sibling, r = jt(s, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function Pu(e, n) {
    return n = oo({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function Kl(e, n, t, r) {
    return r !== null && bo(r), ni(n, e.child, null, t), e = Pu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function md(e, n, t, r, i, s, c) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Su(Error(l(422))), Kl(e, n, c, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (s = r.fallback, i = n.mode, r = oo({ mode: "visible", children: r.children }, i, 0, null), s = wr(s, i, c, null), s.flags |= 2, r.return = n, s.return = n, r.sibling = s, n.child = r, n.mode & 1 && ni(n, e.child, null, c), n.child.memoizedState = Cu(c), n.memoizedState = _u, s);
    if (!(n.mode & 1))
      return Kl(e, n, c, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var m = r.dgst;
      return r = m, s = Error(l(419)), r = Su(s, r, void 0), Kl(e, n, c, r);
    }
    if (m = (c & e.childLanes) !== 0, mn || m) {
      if (r = Ve, r !== null) {
        switch (c & -c) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | c) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, ft(e, i), Wn(r, e, i, -1));
      }
      return Vu(), r = Su(Error(l(421))), Kl(e, n, c, r);
    }
    return i.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Rd.bind(null, e), i._reactRetry = n, null) : (e = s.treeContext, _n = Nt(i.nextSibling), xn = n, Ce = !0, Bn = null, e !== null && (Nn[Fn++] = st, Nn[Fn++] = at, Nn[Fn++] = fr, st = e.id, at = e.overflow, fr = n), n = Pu(n, r.children), n.flags |= 4096, n);
  }
  function Ka(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), ru(e.return, n, t);
  }
  function Tu(e, n, t, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: i } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = t, s.tailMode = i);
  }
  function Xa(e, n, t) {
    var r = n.pendingProps, i = r.revealOrder, s = r.tail;
    if (un(e, n, r.children, t), r = Pe.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ka(e, t, n);
            else if (e.tag === 19)
              Ka(e, t, n);
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
    if (we(Pe, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (t = n.child, i = null; t !== null; )
            e = t.alternate, e !== null && Hl(e) === null && (i = t), t = t.sibling;
          t = i, t === null ? (i = n.child, n.child = null) : (i = t.sibling, t.sibling = null), Tu(n, !1, i, t, s);
          break;
        case "backwards":
          for (t = null, i = n.child, n.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && Hl(e) === null) {
              n.child = i;
              break;
            }
            e = i.sibling, i.sibling = t, t = i, i = e;
          }
          Tu(n, !0, t, null, s);
          break;
        case "together":
          Tu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Xl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function dt(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), mr |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(l(153));
    if (n.child !== null) {
      for (e = n.child, t = jt(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = jt(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function vd(e, n, t) {
    switch (n.tag) {
      case 3:
        Ya(n), qr();
        break;
      case 5:
        ca(n);
        break;
      case 1:
        hn(n.type) && Fl(n);
        break;
      case 4:
        su(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, i = n.memoizedProps.value;
        we(zl, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (we(Pe, Pe.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Qa(e, n, t) : (we(Pe, Pe.current & 1), e = dt(e, n, t), e !== null ? e.sibling : null);
        we(Pe, Pe.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Xa(e, n, t);
          n.flags |= 128;
        }
        if (i = n.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), we(Pe, Pe.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Ha(e, n, t);
    }
    return dt(e, n, t);
  }
  var Ga, Ru, Za, Ja;
  Ga = function(e, n) {
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
  }, Ru = function() {
  }, Za = function(e, n, t, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = n.stateNode, pr(Zn.current);
      var s = null;
      switch (t) {
        case "input":
          i = _r(e, i), r = _r(e, r), s = [];
          break;
        case "select":
          i = g({}, i, { value: void 0 }), r = g({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          i = vt(e, i), r = vt(e, r), s = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tl);
      }
      hi(t, r);
      var c;
      t = null;
      for (C in i)
        if (!r.hasOwnProperty(C) && i.hasOwnProperty(C) && i[C] != null)
          if (C === "style") {
            var m = i[C];
            for (c in m)
              m.hasOwnProperty(c) && (t || (t = {}), t[c] = "");
          } else
            C !== "dangerouslySetInnerHTML" && C !== "children" && C !== "suppressContentEditableWarning" && C !== "suppressHydrationWarning" && C !== "autoFocus" && (y.hasOwnProperty(C) ? s || (s = []) : (s = s || []).push(C, null));
      for (C in r) {
        var w = r[C];
        if (m = i != null ? i[C] : void 0, r.hasOwnProperty(C) && w !== m && (w != null || m != null))
          if (C === "style")
            if (m) {
              for (c in m)
                !m.hasOwnProperty(c) || w && w.hasOwnProperty(c) || (t || (t = {}), t[c] = "");
              for (c in w)
                w.hasOwnProperty(c) && m[c] !== w[c] && (t || (t = {}), t[c] = w[c]);
            } else
              t || (s || (s = []), s.push(
                C,
                t
              )), t = w;
          else
            C === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, m = m ? m.__html : void 0, w != null && m !== w && (s = s || []).push(C, w)) : C === "children" ? typeof w != "string" && typeof w != "number" || (s = s || []).push(C, "" + w) : C !== "suppressContentEditableWarning" && C !== "suppressHydrationWarning" && (y.hasOwnProperty(C) ? (w != null && C === "onScroll" && Ee("scroll", e), s || m === w || (s = [])) : (s = s || []).push(C, w));
      }
      t && (s = s || []).push("style", t);
      var C = s;
      (n.updateQueue = C) && (n.flags |= 4);
    }
  }, Ja = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function Zi(e, n) {
    if (!Ce)
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
  function en(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var i = e.child; i !== null; )
        t |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        t |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function yd(e, n, t) {
    var r = n.pendingProps;
    switch (Zo(n), n.tag) {
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
        return en(n), null;
      case 1:
        return hn(n.type) && Nl(), en(n), null;
      case 3:
        return r = n.stateNode, ti(), xe(pn), xe(qe), cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ll(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Bn !== null && (Bu(Bn), Bn = null))), Ru(e, n), en(n), null;
      case 5:
        au(n);
        var i = pr($i.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Za(e, n, t, r, i), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(l(166));
            return en(n), null;
          }
          if (e = pr(Zn.current), Ll(n)) {
            r = n.stateNode, t = n.type;
            var s = n.memoizedProps;
            switch (r[Gn] = n, r[ji] = s, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Ee("cancel", r), Ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Oi.length; i++)
                  Ee(Oi[i], r);
                break;
              case "source":
                Ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ee(
                  "error",
                  r
                ), Ee("load", r);
                break;
              case "details":
                Ee("toggle", r);
                break;
              case "input":
                ci(r, s), Ee("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, Ee("invalid", r);
                break;
              case "textarea":
                ll(r, s), Ee("invalid", r);
            }
            hi(t, s), i = null;
            for (var c in s)
              if (s.hasOwnProperty(c)) {
                var m = s[c];
                c === "children" ? typeof m == "string" ? r.textContent !== m && (s.suppressHydrationWarning !== !0 && Pl(r.textContent, m, e), i = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (s.suppressHydrationWarning !== !0 && Pl(
                  r.textContent,
                  m,
                  e
                ), i = ["children", "" + m]) : y.hasOwnProperty(c) && m != null && c === "onScroll" && Ee("scroll", r);
              }
            switch (t) {
              case "input":
                De(r), Cr(r, s, !0);
                break;
              case "textarea":
                De(r), ol(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Tl);
            }
            r = i, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            c = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kt(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(t, { is: r.is }) : (e = c.createElement(t), t === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, t), e[Gn] = n, e[ji] = r, Ga(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (c = nt(t, r), t) {
                case "dialog":
                  Ee("cancel", e), Ee("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ee("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Oi.length; i++)
                    Ee(Oi[i], e);
                  i = r;
                  break;
                case "source":
                  Ee("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ee(
                    "error",
                    e
                  ), Ee("load", e), i = r;
                  break;
                case "details":
                  Ee("toggle", e), i = r;
                  break;
                case "input":
                  ci(e, r), i = _r(e, r), Ee("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = g({}, r, { value: void 0 }), Ee("invalid", e);
                  break;
                case "textarea":
                  ll(e, r), i = vt(e, r), Ee("invalid", e);
                  break;
                default:
                  i = r;
              }
              hi(t, i), m = i;
              for (s in m)
                if (m.hasOwnProperty(s)) {
                  var w = m[s];
                  s === "style" ? pi(e, w) : s === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ul(e, w)) : s === "children" ? typeof w == "string" ? (t !== "textarea" || w !== "") && Gt(e, w) : typeof w == "number" && Gt(e, "" + w) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (y.hasOwnProperty(s) ? w != null && s === "onScroll" && Ee("scroll", e) : w != null && Ze(e, s, w, c));
                }
              switch (t) {
                case "input":
                  De(e), Cr(e, r, !1);
                  break;
                case "textarea":
                  De(e), ol(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + fe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, s = r.value, s != null ? Qn(e, !!r.multiple, s, !1) : r.defaultValue != null && Qn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Tl);
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
        return en(n), null;
      case 6:
        if (e && n.stateNode != null)
          Ja(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(l(166));
          if (t = pr($i.current), pr(Zn.current), Ll(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[Gn] = n, (s = r.nodeValue !== t) && (e = xn, e !== null))
              switch (e.tag) {
                case 3:
                  Pl(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Pl(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            s && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Gn] = n, n.stateNode = r;
        }
        return en(n), null;
      case 13:
        if (xe(Pe), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ce && _n !== null && n.mode & 1 && !(n.flags & 128))
            bs(), qr(), n.flags |= 98560, s = !1;
          else if (s = Ll(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s)
                throw Error(l(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s)
                throw Error(l(317));
              s[Gn] = n;
            } else
              qr(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            en(n), s = !1;
          } else
            Bn !== null && (Bu(Bn), Bn = null), s = !0;
          if (!s)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || Pe.current & 1 ? Ie === 0 && (Ie = 3) : Vu())), n.updateQueue !== null && (n.flags |= 4), en(n), null);
      case 4:
        return ti(), Ru(e, n), e === null && Ui(n.stateNode.containerInfo), en(n), null;
      case 10:
        return tu(n.type._context), en(n), null;
      case 17:
        return hn(n.type) && Nl(), en(n), null;
      case 19:
        if (xe(Pe), s = n.memoizedState, s === null)
          return en(n), null;
        if (r = (n.flags & 128) !== 0, c = s.rendering, c === null)
          if (r)
            Zi(s, !1);
          else {
            if (Ie !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (c = Hl(e), c !== null) {
                  for (n.flags |= 128, Zi(s, !1), r = c.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    s = t, e = r, s.flags &= 14680066, c = s.alternate, c === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = c.childLanes, s.lanes = c.lanes, s.child = c.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = c.memoizedProps, s.memoizedState = c.memoizedState, s.updateQueue = c.updateQueue, s.type = c.type, e = c.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return we(Pe, Pe.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            s.tail !== null && ge() > oi && (n.flags |= 128, r = !0, Zi(s, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Hl(c), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Zi(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !Ce)
                return en(n), null;
            } else
              2 * ge() - s.renderingStartTime > oi && t !== 1073741824 && (n.flags |= 128, r = !0, Zi(s, !1), n.lanes = 4194304);
          s.isBackwards ? (c.sibling = n.child, n.child = c) : (t = s.last, t !== null ? t.sibling = c : n.child = c, s.last = c);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ge(), n.sibling = null, t = Pe.current, we(Pe, r ? t & 1 | 2 : t & 1), n) : (en(n), null);
      case 22:
      case 23:
        return Hu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Cn & 1073741824 && (en(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : en(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function gd(e, n) {
    switch (Zo(n), n.tag) {
      case 1:
        return hn(n.type) && Nl(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ti(), xe(pn), xe(qe), cu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return au(n), null;
      case 13:
        if (xe(Pe), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(l(340));
          qr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return xe(Pe), null;
      case 4:
        return ti(), null;
      case 10:
        return tu(n.type._context), null;
      case 22:
      case 23:
        return Hu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gl = !1, nn = !1, wd = typeof WeakSet == "function" ? WeakSet : Set, H = null;
  function ii(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          Me(e, n, r);
        }
      else
        t.current = null;
  }
  function Nu(e, n, t) {
    try {
      t();
    } catch (r) {
      Me(e, n, r);
    }
  }
  var qa = !1;
  function Sd(e, n) {
    if (Ho = Ke, e = Ns(), Ao(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var i = r.anchorOffset, s = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, s.nodeType;
            } catch {
              t = null;
              break e;
            }
            var c = 0, m = -1, w = -1, C = 0, F = 0, D = e, N = null;
            n:
              for (; ; ) {
                for (var j; D !== t || i !== 0 && D.nodeType !== 3 || (m = c + i), D !== s || r !== 0 && D.nodeType !== 3 || (w = c + r), D.nodeType === 3 && (c += D.nodeValue.length), (j = D.firstChild) !== null; )
                  N = D, D = j;
                for (; ; ) {
                  if (D === e)
                    break n;
                  if (N === t && ++C === i && (m = c), N === s && ++F === r && (w = c), (j = D.nextSibling) !== null)
                    break;
                  D = N, N = D.parentNode;
                }
                D = j;
              }
            t = m === -1 || w === -1 ? null : { start: m, end: w };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (Vo = { focusedElem: e, selectionRange: t }, Ke = !1, H = n; H !== null; )
      if (n = H, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, H = e;
      else
        for (; H !== null; ) {
          n = H;
          try {
            var V = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var $ = V.memoizedProps, Ae = V.memoizedState, k = n.stateNode, S = k.getSnapshotBeforeUpdate(n.elementType === n.type ? $ : jn(n.type, $), Ae);
                    k.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var x = n.stateNode.containerInfo;
                  x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (z) {
            Me(n, n.return, z);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, H = e;
            break;
          }
          H = n.return;
        }
    return V = qa, qa = !1, V;
  }
  function Ji(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          i.destroy = void 0, s !== void 0 && Nu(n, t, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Zl(e, n) {
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
  function Fu(e) {
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
  function ba(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ba(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Gn], delete n[ji], delete n[Qo], delete n[td], delete n[rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ef(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function nf(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ef(e.return))
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
  function Mu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Tl));
    else if (r !== 4 && (e = e.child, e !== null))
      for (Mu(e, n, t), e = e.sibling; e !== null; )
        Mu(e, n, t), e = e.sibling;
  }
  function Du(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (Du(e, n, t), e = e.sibling; e !== null; )
        Du(e, n, t), e = e.sibling;
  }
  var Xe = null, Hn = !1;
  function zt(e, n, t) {
    for (t = t.child; t !== null; )
      tf(e, n, t), t = t.sibling;
  }
  function tf(e, n, t) {
    if (cn && typeof cn.onCommitFiberUnmount == "function")
      try {
        cn.onCommitFiberUnmount(tr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        nn || ii(t, n);
      case 6:
        var r = Xe, i = Hn;
        Xe = null, zt(e, n, t), Xe = r, Hn = i, Xe !== null && (Hn ? (e = Xe, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : Xe.removeChild(t.stateNode));
        break;
      case 18:
        Xe !== null && (Hn ? (e = Xe, t = t.stateNode, e.nodeType === 8 ? $o(e.parentNode, t) : e.nodeType === 1 && $o(e, t), ne(e)) : $o(Xe, t.stateNode));
        break;
      case 4:
        r = Xe, i = Hn, Xe = t.stateNode.containerInfo, Hn = !0, zt(e, n, t), Xe = r, Hn = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!nn && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var s = i, c = s.destroy;
            s = s.tag, c !== void 0 && (s & 2 || s & 4) && Nu(t, n, c), i = i.next;
          } while (i !== r);
        }
        zt(e, n, t);
        break;
      case 1:
        if (!nn && (ii(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (m) {
            Me(t, n, m);
          }
        zt(e, n, t);
        break;
      case 21:
        zt(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (nn = (r = nn) || t.memoizedState !== null, zt(e, n, t), nn = r) : zt(e, n, t);
        break;
      default:
        zt(e, n, t);
    }
  }
  function rf(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new wd()), n.forEach(function(r) {
        var i = Nd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(i, i));
      });
    }
  }
  function Vn(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        try {
          var s = e, c = n, m = c;
          e:
            for (; m !== null; ) {
              switch (m.tag) {
                case 5:
                  Xe = m.stateNode, Hn = !1;
                  break e;
                case 3:
                  Xe = m.stateNode.containerInfo, Hn = !0;
                  break e;
                case 4:
                  Xe = m.stateNode.containerInfo, Hn = !0;
                  break e;
              }
              m = m.return;
            }
          if (Xe === null)
            throw Error(l(160));
          tf(s, c, i), Xe = null, Hn = !1;
          var w = i.alternate;
          w !== null && (w.return = null), i.return = null;
        } catch (C) {
          Me(i, n, C);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        lf(n, e), n = n.sibling;
  }
  function lf(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vn(n, e), qn(e), r & 4) {
          try {
            Ji(3, e, e.return), Zl(3, e);
          } catch ($) {
            Me(e, e.return, $);
          }
          try {
            Ji(5, e, e.return);
          } catch ($) {
            Me(e, e.return, $);
          }
        }
        break;
      case 1:
        Vn(n, e), qn(e), r & 512 && t !== null && ii(t, t.return);
        break;
      case 5:
        if (Vn(n, e), qn(e), r & 512 && t !== null && ii(t, t.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Gt(i, "");
          } catch ($) {
            Me(e, e.return, $);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var s = e.memoizedProps, c = t !== null ? t.memoizedProps : s, m = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null)
            try {
              m === "input" && s.type === "radio" && s.name != null && il(i, s), nt(m, c);
              var C = nt(m, s);
              for (c = 0; c < w.length; c += 2) {
                var F = w[c], D = w[c + 1];
                F === "style" ? pi(i, D) : F === "dangerouslySetInnerHTML" ? ul(i, D) : F === "children" ? Gt(i, D) : Ze(i, F, D, C);
              }
              switch (m) {
                case "input":
                  $n(i, s);
                  break;
                case "textarea":
                  di(i, s);
                  break;
                case "select":
                  var N = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var j = s.value;
                  j != null ? Qn(i, !!s.multiple, j, !1) : N !== !!s.multiple && (s.defaultValue != null ? Qn(
                    i,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  ) : Qn(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[ji] = s;
            } catch ($) {
              Me(e, e.return, $);
            }
        }
        break;
      case 6:
        if (Vn(n, e), qn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(l(162));
          i = e.stateNode, s = e.memoizedProps;
          try {
            i.nodeValue = s;
          } catch ($) {
            Me(e, e.return, $);
          }
        }
        break;
      case 3:
        if (Vn(n, e), qn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            ne(n.containerInfo);
          } catch ($) {
            Me(e, e.return, $);
          }
        break;
      case 4:
        Vn(n, e), qn(e);
        break;
      case 13:
        Vn(n, e), qn(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (zu = ge())), r & 4 && rf(e);
        break;
      case 22:
        if (F = t !== null && t.memoizedState !== null, e.mode & 1 ? (nn = (C = nn) || F, Vn(n, e), nn = C) : Vn(n, e), qn(e), r & 8192) {
          if (C = e.memoizedState !== null, (e.stateNode.isHidden = C) && !F && e.mode & 1)
            for (H = e, F = e.child; F !== null; ) {
              for (D = H = F; H !== null; ) {
                switch (N = H, j = N.child, N.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ji(4, N, N.return);
                    break;
                  case 1:
                    ii(N, N.return);
                    var V = N.stateNode;
                    if (typeof V.componentWillUnmount == "function") {
                      r = N, t = N.return;
                      try {
                        n = r, V.props = n.memoizedProps, V.state = n.memoizedState, V.componentWillUnmount();
                      } catch ($) {
                        Me(r, t, $);
                      }
                    }
                    break;
                  case 5:
                    ii(N, N.return);
                    break;
                  case 22:
                    if (N.memoizedState !== null) {
                      sf(D);
                      continue;
                    }
                }
                j !== null ? (j.return = N, H = j) : sf(D);
              }
              F = F.sibling;
            }
          e:
            for (F = null, D = e; ; ) {
              if (D.tag === 5) {
                if (F === null) {
                  F = D;
                  try {
                    i = D.stateNode, C ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (m = D.stateNode, w = D.memoizedProps.style, c = w != null && w.hasOwnProperty("display") ? w.display : null, m.style.display = Tr("display", c));
                  } catch ($) {
                    Me(e, e.return, $);
                  }
                }
              } else if (D.tag === 6) {
                if (F === null)
                  try {
                    D.stateNode.nodeValue = C ? "" : D.memoizedProps;
                  } catch ($) {
                    Me(e, e.return, $);
                  }
              } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
                D.child.return = D, D = D.child;
                continue;
              }
              if (D === e)
                break e;
              for (; D.sibling === null; ) {
                if (D.return === null || D.return === e)
                  break e;
                F === D && (F = null), D = D.return;
              }
              F === D && (F = null), D.sibling.return = D.return, D = D.sibling;
            }
        }
        break;
      case 19:
        Vn(n, e), qn(e), r & 4 && rf(e);
        break;
      case 21:
        break;
      default:
        Vn(
          n,
          e
        ), qn(e);
    }
  }
  function qn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ef(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Gt(i, ""), r.flags &= -33);
            var s = nf(e);
            Du(e, s, i);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, m = nf(e);
            Mu(e, m, c);
            break;
          default:
            throw Error(l(161));
        }
      } catch (w) {
        Me(e, e.return, w);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function kd(e, n, t) {
    H = e, of(e);
  }
  function of(e, n, t) {
    for (var r = (e.mode & 1) !== 0; H !== null; ) {
      var i = H, s = i.child;
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || Gl;
        if (!c) {
          var m = i.alternate, w = m !== null && m.memoizedState !== null || nn;
          m = Gl;
          var C = nn;
          if (Gl = c, (nn = w) && !C)
            for (H = i; H !== null; )
              c = H, w = c.child, c.tag === 22 && c.memoizedState !== null ? af(i) : w !== null ? (w.return = c, H = w) : af(i);
          for (; s !== null; )
            H = s, of(s), s = s.sibling;
          H = i, Gl = m, nn = C;
        }
        uf(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? (s.return = i, H = s) : uf(e);
    }
  }
  function uf(e) {
    for (; H !== null; ) {
      var n = H;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                nn || Zl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !nn)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var i = n.elementType === n.type ? t.memoizedProps : jn(n.type, t.memoizedProps);
                    r.componentDidUpdate(i, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var s = n.updateQueue;
                s !== null && ra(n, s, r);
                break;
              case 3:
                var c = n.updateQueue;
                if (c !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  ra(n, c, t);
                }
                break;
              case 5:
                var m = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = m;
                  var w = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && t.focus();
                      break;
                    case "img":
                      w.src && (t.src = w.src);
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
                  var C = n.alternate;
                  if (C !== null) {
                    var F = C.memoizedState;
                    if (F !== null) {
                      var D = F.dehydrated;
                      D !== null && ne(D);
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
                throw Error(l(163));
            }
          nn || n.flags & 512 && Fu(n);
        } catch (N) {
          Me(n, n.return, N);
        }
      }
      if (n === e) {
        H = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, H = t;
        break;
      }
      H = n.return;
    }
  }
  function sf(e) {
    for (; H !== null; ) {
      var n = H;
      if (n === e) {
        H = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, H = t;
        break;
      }
      H = n.return;
    }
  }
  function af(e) {
    for (; H !== null; ) {
      var n = H;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              Zl(4, n);
            } catch (w) {
              Me(n, t, w);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = n.return;
              try {
                r.componentDidMount();
              } catch (w) {
                Me(n, i, w);
              }
            }
            var s = n.return;
            try {
              Fu(n);
            } catch (w) {
              Me(n, s, w);
            }
            break;
          case 5:
            var c = n.return;
            try {
              Fu(n);
            } catch (w) {
              Me(n, c, w);
            }
        }
      } catch (w) {
        Me(n, n.return, w);
      }
      if (n === e) {
        H = null;
        break;
      }
      var m = n.sibling;
      if (m !== null) {
        m.return = n.return, H = m;
        break;
      }
      H = n.return;
    }
  }
  var Ed = Math.ceil, Jl = _e.ReactCurrentDispatcher, Au = _e.ReactCurrentOwner, An = _e.ReactCurrentBatchConfig, ae = 0, Ve = null, Le = null, Ge = 0, Cn = 0, li = Ft(0), Ie = 0, qi = null, mr = 0, ql = 0, Lu = 0, bi = null, vn = null, zu = 0, oi = 1 / 0, pt = null, bl = !1, Iu = null, It = null, eo = !1, Ot = null, no = 0, el = 0, Ou = null, to = -1, ro = 0;
  function sn() {
    return ae & 6 ? ge() : to !== -1 ? to : to = ge();
  }
  function Ut(e) {
    return e.mode & 1 ? ae & 2 && Ge !== 0 ? Ge & -Ge : ld.transition !== null ? (ro === 0 && (ro = Pi()), ro) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ni(e.type)), e) : 1;
  }
  function Wn(e, n, t, r) {
    if (50 < el)
      throw el = 0, Ou = null, Error(l(185));
    _t(e, t, r), (!(ae & 2) || e !== Ve) && (e === Ve && (!(ae & 2) && (ql |= t), Ie === 4 && Bt(e, Ge)), yn(e, r), t === 1 && ae === 0 && !(n.mode & 1) && (oi = ge() + 500, Ml && Dt()));
  }
  function yn(e, n) {
    var t = e.callbackNode;
    dl(e, n);
    var r = Or(e, e === Ve ? Ge : 0);
    if (r === 0)
      t !== null && Et(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Et(t), n === 1)
        e.tag === 0 ? id(cf.bind(null, e)) : Xs(cf.bind(null, e)), ed(function() {
          !(ae & 6) && Dt();
        }), t = null;
      else {
        switch (or(r)) {
          case 1:
            t = it;
            break;
          case 4:
            t = lt;
            break;
          case 16:
            t = In;
            break;
          case 536870912:
            t = Mr;
            break;
          default:
            t = In;
        }
        t = wf(t, ff.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ff(e, n) {
    if (to = -1, ro = 0, ae & 6)
      throw Error(l(327));
    var t = e.callbackNode;
    if (ui() && e.callbackNode !== t)
      return null;
    var r = Or(e, e === Ve ? Ge : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = io(e, r);
    else {
      n = r;
      var i = ae;
      ae |= 2;
      var s = pf();
      (Ve !== e || Ge !== n) && (pt = null, oi = ge() + 500, yr(e, n));
      do
        try {
          Cd();
          break;
        } catch (m) {
          df(e, m);
        }
      while (1);
      nu(), Jl.current = s, ae = i, Le !== null ? n = 0 : (Ve = null, Ge = 0, n = Ie);
    }
    if (n !== 0) {
      if (n === 2 && (i = Ur(e), i !== 0 && (r = i, n = Uu(e, i))), n === 1)
        throw t = qi, yr(e, 0), Bt(e, r), yn(e, ge()), t;
      if (n === 6)
        Bt(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !xd(i) && (n = io(e, r), n === 2 && (s = Ur(e), s !== 0 && (r = s, n = Uu(e, s))), n === 1))
          throw t = qi, yr(e, 0), Bt(e, r), yn(e, ge()), t;
        switch (e.finishedWork = i, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            gr(e, vn, pt);
            break;
          case 3:
            if (Bt(e, r), (r & 130023424) === r && (n = zu + 500 - ge(), 10 < n)) {
              if (Or(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                sn(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Yo(gr.bind(null, e, vn, pt), n);
              break;
            }
            gr(e, vn, pt);
            break;
          case 4:
            if (Bt(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - ln(r);
              s = 1 << c, c = n[c], c > i && (i = c), r &= ~s;
            }
            if (r = i, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ed(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Yo(gr.bind(null, e, vn, pt), r);
              break;
            }
            gr(e, vn, pt);
            break;
          case 5:
            gr(e, vn, pt);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return yn(e, ge()), e.callbackNode === t ? ff.bind(null, e) : null;
  }
  function Uu(e, n) {
    var t = bi;
    return e.current.memoizedState.isDehydrated && (yr(e, n).flags |= 256), e = io(e, n), e !== 2 && (n = vn, vn = t, n !== null && Bu(n)), e;
  }
  function Bu(e) {
    vn === null ? vn = e : vn.push.apply(vn, e);
  }
  function xd(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var i = t[r], s = i.getSnapshot;
            i = i.value;
            try {
              if (!Un(s(), i))
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
  function Bt(e, n) {
    for (n &= ~Lu, n &= ~ql, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - ln(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function cf(e) {
    if (ae & 6)
      throw Error(l(327));
    ui();
    var n = Or(e, 0);
    if (!(n & 1))
      return yn(e, ge()), null;
    var t = io(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Ur(e);
      r !== 0 && (n = r, t = Uu(e, r));
    }
    if (t === 1)
      throw t = qi, yr(e, 0), Bt(e, n), yn(e, ge()), t;
    if (t === 6)
      throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, gr(e, vn, pt), yn(e, ge()), null;
  }
  function ju(e, n) {
    var t = ae;
    ae |= 1;
    try {
      return e(n);
    } finally {
      ae = t, ae === 0 && (oi = ge() + 500, Ml && Dt());
    }
  }
  function vr(e) {
    Ot !== null && Ot.tag === 0 && !(ae & 6) && ui();
    var n = ae;
    ae |= 1;
    var t = An.transition, r = ce;
    try {
      if (An.transition = null, ce = 1, e)
        return e();
    } finally {
      ce = r, An.transition = t, ae = n, !(ae & 6) && Dt();
    }
  }
  function Hu() {
    Cn = li.current, xe(li);
  }
  function yr(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, bc(t)), Le !== null)
      for (t = Le.return; t !== null; ) {
        var r = t;
        switch (Zo(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Nl();
            break;
          case 3:
            ti(), xe(pn), xe(qe), cu();
            break;
          case 5:
            au(r);
            break;
          case 4:
            ti();
            break;
          case 13:
            xe(Pe);
            break;
          case 19:
            xe(Pe);
            break;
          case 10:
            tu(r.type._context);
            break;
          case 22:
          case 23:
            Hu();
        }
        t = t.return;
      }
    if (Ve = e, Le = e = jt(e.current, null), Ge = Cn = n, Ie = 0, qi = null, Lu = ql = mr = 0, vn = bi = null, dr !== null) {
      for (n = 0; n < dr.length; n++)
        if (t = dr[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var i = r.next, s = t.pending;
          if (s !== null) {
            var c = s.next;
            s.next = i, r.next = c;
          }
          t.pending = r;
        }
      dr = null;
    }
    return e;
  }
  function df(e, n) {
    do {
      var t = Le;
      try {
        if (nu(), Vl.current = Ql, Wl) {
          for (var r = Te.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Wl = !1;
        }
        if (hr = 0, He = ze = Te = null, Qi = !1, Ki = 0, Au.current = null, t === null || t.return === null) {
          Ie = 1, qi = n, Le = null;
          break;
        }
        e: {
          var s = e, c = t.return, m = t, w = n;
          if (n = Ge, m.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var C = w, F = m, D = F.tag;
            if (!(F.mode & 1) && (D === 0 || D === 11 || D === 15)) {
              var N = F.alternate;
              N ? (F.updateQueue = N.updateQueue, F.memoizedState = N.memoizedState, F.lanes = N.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var j = Ia(c);
            if (j !== null) {
              j.flags &= -257, Oa(j, c, m, s, n), j.mode & 1 && za(s, C, n), n = j, w = C;
              var V = n.updateQueue;
              if (V === null) {
                var $ = /* @__PURE__ */ new Set();
                $.add(w), n.updateQueue = $;
              } else
                V.add(w);
              break e;
            } else {
              if (!(n & 1)) {
                za(s, C, n), Vu();
                break e;
              }
              w = Error(l(426));
            }
          } else if (Ce && m.mode & 1) {
            var Ae = Ia(c);
            if (Ae !== null) {
              !(Ae.flags & 65536) && (Ae.flags |= 256), Oa(Ae, c, m, s, n), bo(ri(w, m));
              break e;
            }
          }
          s = w = ri(w, m), Ie !== 4 && (Ie = 2), bi === null ? bi = [s] : bi.push(s), s = c;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, n &= -n, s.lanes |= n;
                var k = Aa(s, w, n);
                ta(s, k);
                break e;
              case 1:
                m = w;
                var S = s.type, x = s.stateNode;
                if (!(s.flags & 128) && (typeof S.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (It === null || !It.has(x)))) {
                  s.flags |= 65536, n &= -n, s.lanes |= n;
                  var z = La(s, m, n);
                  ta(s, z);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        mf(t);
      } catch (K) {
        n = K, Le === t && t !== null && (Le = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function pf() {
    var e = Jl.current;
    return Jl.current = Ql, e === null ? Ql : e;
  }
  function Vu() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4), Ve === null || !(mr & 268435455) && !(ql & 268435455) || Bt(Ve, Ge);
  }
  function io(e, n) {
    var t = ae;
    ae |= 2;
    var r = pf();
    (Ve !== e || Ge !== n) && (pt = null, yr(e, n));
    do
      try {
        _d();
        break;
      } catch (i) {
        df(e, i);
      }
    while (1);
    if (nu(), ae = t, Jl.current = r, Le !== null)
      throw Error(l(261));
    return Ve = null, Ge = 0, Ie;
  }
  function _d() {
    for (; Le !== null; )
      hf(Le);
  }
  function Cd() {
    for (; Le !== null && !Ci(); )
      hf(Le);
  }
  function hf(e) {
    var n = gf(e.alternate, e, Cn);
    e.memoizedProps = e.pendingProps, n === null ? mf(e) : Le = n, Au.current = null;
  }
  function mf(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = gd(t, n), t !== null) {
          t.flags &= 32767, Le = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ie = 6, Le = null;
          return;
        }
      } else if (t = yd(t, n, Cn), t !== null) {
        Le = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        Le = n;
        return;
      }
      Le = n = e;
    } while (n !== null);
    Ie === 0 && (Ie = 5);
  }
  function gr(e, n, t) {
    var r = ce, i = An.transition;
    try {
      An.transition = null, ce = 1, Pd(e, n, t, r);
    } finally {
      An.transition = i, ce = r;
    }
    return null;
  }
  function Pd(e, n, t, r) {
    do
      ui();
    while (Ot !== null);
    if (ae & 6)
      throw Error(l(327));
    t = e.finishedWork;
    var i = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = t.lanes | t.childLanes;
    if (pl(e, s), e === Ve && (Le = Ve = null, Ge = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || eo || (eo = !0, wf(In, function() {
      return ui(), null;
    })), s = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || s) {
      s = An.transition, An.transition = null;
      var c = ce;
      ce = 1;
      var m = ae;
      ae |= 4, Au.current = null, Sd(e, t), lf(t, e), Qc(Vo), Ke = !!Ho, Vo = Ho = null, e.current = t, kd(t), rt(), ae = m, ce = c, An.transition = s;
    } else
      e.current = t;
    if (eo && (eo = !1, Ot = e, no = i), s = e.pendingLanes, s === 0 && (It = null), Dr(t.stateNode), yn(e, ge()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        i = n[t], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (bl)
      throw bl = !1, e = Iu, Iu = null, e;
    return no & 1 && e.tag !== 0 && ui(), s = e.pendingLanes, s & 1 ? e === Ou ? el++ : (el = 0, Ou = e) : el = 0, Dt(), null;
  }
  function ui() {
    if (Ot !== null) {
      var e = or(no), n = An.transition, t = ce;
      try {
        if (An.transition = null, ce = 16 > e ? 16 : e, Ot === null)
          var r = !1;
        else {
          if (e = Ot, Ot = null, no = 0, ae & 6)
            throw Error(l(331));
          var i = ae;
          for (ae |= 4, H = e.current; H !== null; ) {
            var s = H, c = s.child;
            if (H.flags & 16) {
              var m = s.deletions;
              if (m !== null) {
                for (var w = 0; w < m.length; w++) {
                  var C = m[w];
                  for (H = C; H !== null; ) {
                    var F = H;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ji(8, F, s);
                    }
                    var D = F.child;
                    if (D !== null)
                      D.return = F, H = D;
                    else
                      for (; H !== null; ) {
                        F = H;
                        var N = F.sibling, j = F.return;
                        if (ba(F), F === C) {
                          H = null;
                          break;
                        }
                        if (N !== null) {
                          N.return = j, H = N;
                          break;
                        }
                        H = j;
                      }
                  }
                }
                var V = s.alternate;
                if (V !== null) {
                  var $ = V.child;
                  if ($ !== null) {
                    V.child = null;
                    do {
                      var Ae = $.sibling;
                      $.sibling = null, $ = Ae;
                    } while ($ !== null);
                  }
                }
                H = s;
              }
            }
            if (s.subtreeFlags & 2064 && c !== null)
              c.return = s, H = c;
            else
              e:
                for (; H !== null; ) {
                  if (s = H, s.flags & 2048)
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ji(9, s, s.return);
                    }
                  var k = s.sibling;
                  if (k !== null) {
                    k.return = s.return, H = k;
                    break e;
                  }
                  H = s.return;
                }
          }
          var S = e.current;
          for (H = S; H !== null; ) {
            c = H;
            var x = c.child;
            if (c.subtreeFlags & 2064 && x !== null)
              x.return = c, H = x;
            else
              e:
                for (c = S; H !== null; ) {
                  if (m = H, m.flags & 2048)
                    try {
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Zl(9, m);
                      }
                    } catch (K) {
                      Me(m, m.return, K);
                    }
                  if (m === c) {
                    H = null;
                    break e;
                  }
                  var z = m.sibling;
                  if (z !== null) {
                    z.return = m.return, H = z;
                    break e;
                  }
                  H = m.return;
                }
          }
          if (ae = i, Dt(), cn && typeof cn.onPostCommitFiberRoot == "function")
            try {
              cn.onPostCommitFiberRoot(tr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        ce = t, An.transition = n;
      }
    }
    return !1;
  }
  function vf(e, n, t) {
    n = ri(t, n), n = Aa(e, n, 1), e = Lt(e, n, 1), n = sn(), e !== null && (_t(e, 1, n), yn(e, n));
  }
  function Me(e, n, t) {
    if (e.tag === 3)
      vf(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          vf(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
            e = ri(t, e), e = La(n, e, 1), n = Lt(n, e, 1), e = sn(), n !== null && (_t(n, 1, e), yn(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Td(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = sn(), e.pingedLanes |= e.suspendedLanes & t, Ve === e && (Ge & t) === t && (Ie === 4 || Ie === 3 && (Ge & 130023424) === Ge && 500 > ge() - zu ? yr(e, 0) : Lu |= t), yn(e, n);
  }
  function yf(e, n) {
    n === 0 && (e.mode & 1 ? (n = rr, rr <<= 1, !(rr & 130023424) && (rr = 4194304)) : n = 1);
    var t = sn();
    e = ft(e, n), e !== null && (_t(e, n, t), yn(e, t));
  }
  function Rd(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), yf(e, t);
  }
  function Nd(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (t = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(n), yf(e, t);
  }
  var gf;
  gf = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || pn.current)
        mn = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return mn = !1, vd(e, n, t);
        mn = !!(e.flags & 131072);
      }
    else
      mn = !1, Ce && n.flags & 1048576 && Gs(n, Al, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        Xl(e, n), e = n.pendingProps;
        var i = Gr(n, qe.current);
        ei(n, t), i = hu(null, n, r, e, i, t);
        var s = mu();
        return n.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, hn(r) ? (s = !0, Fl(n)) : s = !1, n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, lu(n), i.updater = Bl, n.stateNode = i, i._reactInternals = n, uu(n, r, e, t), n = xu(null, n, r, !0, s, t)) : (n.tag = 0, Ce && s && Go(n), un(null, n, i, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (Xl(e, n), e = n.pendingProps, i = r._init, r = i(r._payload), n.type = r, i = n.tag = Md(r), e = jn(r, e), i) {
            case 0:
              n = Eu(null, n, r, e, t);
              break e;
            case 1:
              n = Wa(null, n, r, e, t);
              break e;
            case 11:
              n = Ua(null, n, r, e, t);
              break e;
            case 14:
              n = Ba(null, n, r, jn(r.type, e), t);
              break e;
          }
          throw Error(l(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, i = n.pendingProps, i = n.elementType === r ? i : jn(r, i), Eu(e, n, r, i, t);
      case 1:
        return r = n.type, i = n.pendingProps, i = n.elementType === r ? i : jn(r, i), Wa(e, n, r, i, t);
      case 3:
        e: {
          if (Ya(n), e === null)
            throw Error(l(387));
          r = n.pendingProps, s = n.memoizedState, i = s.element, na(e, n), Ul(n, r, null, t);
          var c = n.memoizedState;
          if (r = c.element, s.isDehydrated)
            if (s = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              i = ri(Error(l(423)), n), n = $a(e, n, r, t, i);
              break e;
            } else if (r !== i) {
              i = ri(Error(l(424)), n), n = $a(e, n, r, t, i);
              break e;
            } else
              for (_n = Nt(n.stateNode.containerInfo.firstChild), xn = n, Ce = !0, Bn = null, t = fa(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (qr(), r === i) {
              n = dt(e, n, t);
              break e;
            }
            un(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ca(n), e === null && qo(n), r = n.type, i = n.pendingProps, s = e !== null ? e.memoizedProps : null, c = i.children, Wo(r, i) ? c = null : s !== null && Wo(r, s) && (n.flags |= 32), Va(e, n), un(e, n, c, t), n.child;
      case 6:
        return e === null && qo(n), null;
      case 13:
        return Qa(e, n, t);
      case 4:
        return su(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = ni(n, null, r, t) : un(e, n, r, t), n.child;
      case 11:
        return r = n.type, i = n.pendingProps, i = n.elementType === r ? i : jn(r, i), Ua(e, n, r, i, t);
      case 7:
        return un(e, n, n.pendingProps, t), n.child;
      case 8:
        return un(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return un(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, i = n.pendingProps, s = n.memoizedProps, c = i.value, we(zl, r._currentValue), r._currentValue = c, s !== null)
            if (Un(s.value, c)) {
              if (s.children === i.children && !pn.current) {
                n = dt(e, n, t);
                break e;
              }
            } else
              for (s = n.child, s !== null && (s.return = n); s !== null; ) {
                var m = s.dependencies;
                if (m !== null) {
                  c = s.child;
                  for (var w = m.firstContext; w !== null; ) {
                    if (w.context === r) {
                      if (s.tag === 1) {
                        w = ct(-1, t & -t), w.tag = 2;
                        var C = s.updateQueue;
                        if (C !== null) {
                          C = C.shared;
                          var F = C.pending;
                          F === null ? w.next = w : (w.next = F.next, F.next = w), C.pending = w;
                        }
                      }
                      s.lanes |= t, w = s.alternate, w !== null && (w.lanes |= t), ru(
                        s.return,
                        t,
                        n
                      ), m.lanes |= t;
                      break;
                    }
                    w = w.next;
                  }
                } else if (s.tag === 10)
                  c = s.type === n.type ? null : s.child;
                else if (s.tag === 18) {
                  if (c = s.return, c === null)
                    throw Error(l(341));
                  c.lanes |= t, m = c.alternate, m !== null && (m.lanes |= t), ru(c, t, n), c = s.sibling;
                } else
                  c = s.child;
                if (c !== null)
                  c.return = s;
                else
                  for (c = s; c !== null; ) {
                    if (c === n) {
                      c = null;
                      break;
                    }
                    if (s = c.sibling, s !== null) {
                      s.return = c.return, c = s;
                      break;
                    }
                    c = c.return;
                  }
                s = c;
              }
          un(e, n, i.children, t), n = n.child;
        }
        return n;
      case 9:
        return i = n.type, r = n.pendingProps.children, ei(n, t), i = Mn(i), r = r(i), n.flags |= 1, un(e, n, r, t), n.child;
      case 14:
        return r = n.type, i = jn(r, n.pendingProps), i = jn(r.type, i), Ba(e, n, r, i, t);
      case 15:
        return ja(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, i = n.pendingProps, i = n.elementType === r ? i : jn(r, i), Xl(e, n), n.tag = 1, hn(r) ? (e = !0, Fl(n)) : e = !1, ei(n, t), oa(n, r, i), uu(n, r, i, t), xu(null, n, r, !0, e, t);
      case 19:
        return Xa(e, n, t);
      case 22:
        return Ha(e, n, t);
    }
    throw Error(l(156, n.tag));
  };
  function wf(e, n) {
    return al(e, n);
  }
  function Fd(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ln(e, n, t, r) {
    return new Fd(e, n, t, r);
  }
  function Wu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Md(e) {
    if (typeof e == "function")
      return Wu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Rn)
        return 11;
      if (e === rn)
        return 14;
    }
    return 2;
  }
  function jt(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ln(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function lo(e, n, t, r, i, s) {
    var c = 2;
    if (r = e, typeof e == "function")
      Wu(e) && (c = 1);
    else if (typeof e == "string")
      c = 5;
    else
      e:
        switch (e) {
          case Re:
            return wr(t.children, i, s, n);
          case Be:
            c = 8, i |= 8;
            break;
          case Pn:
            return e = Ln(12, t, n, i | 2), e.elementType = Pn, e.lanes = s, e;
          case Je:
            return e = Ln(13, t, n, i), e.elementType = Je, e.lanes = s, e;
          case $e:
            return e = Ln(19, t, n, i), e.elementType = $e, e.lanes = s, e;
          case ke:
            return oo(t, i, s, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Tn:
                  c = 10;
                  break e;
                case Yn:
                  c = 9;
                  break e;
                case Rn:
                  c = 11;
                  break e;
                case rn:
                  c = 14;
                  break e;
                case je:
                  c = 16, r = null;
                  break e;
              }
            throw Error(l(130, e == null ? e : typeof e, ""));
        }
    return n = Ln(c, t, n, i), n.elementType = e, n.type = r, n.lanes = s, n;
  }
  function wr(e, n, t, r) {
    return e = Ln(7, e, r, n), e.lanes = t, e;
  }
  function oo(e, n, t, r) {
    return e = Ln(22, e, r, n), e.elementType = ke, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function Yu(e, n, t) {
    return e = Ln(6, e, null, n), e.lanes = t, e;
  }
  function $u(e, n, t) {
    return n = Ln(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Dd(e, n, t, r, i) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ir(0), this.expirationTimes = ir(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ir(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Qu(e, n, t, r, i, s, c, m, w) {
    return e = new Dd(e, n, t, m, w), n === 1 ? (n = 1, s === !0 && (n |= 8)) : n = 0, s = Ln(3, null, null, n), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lu(s), e;
  }
  function Ad(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ue, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function Sf(e) {
    if (!e)
      return Mt;
    e = e._reactInternals;
    e: {
      if (Kn(e) !== e || e.tag !== 1)
        throw Error(l(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (hn(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (hn(t))
        return Qs(e, t, n);
    }
    return n;
  }
  function kf(e, n, t, r, i, s, c, m, w) {
    return e = Qu(t, r, !0, e, i, s, c, m, w), e.context = Sf(null), t = e.current, r = sn(), i = Ut(t), s = ct(r, i), s.callback = n ?? null, Lt(t, s, i), e.current.lanes = i, _t(e, i, r), yn(e, r), e;
  }
  function uo(e, n, t, r) {
    var i = n.current, s = sn(), c = Ut(i);
    return t = Sf(t), n.context === null ? n.context = t : n.pendingContext = t, n = ct(s, c), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Lt(i, n, c), e !== null && (Wn(e, i, c, s), Ol(e, i, c)), c;
  }
  function so(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ef(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Ku(e, n) {
    Ef(e, n), (e = e.alternate) && Ef(e, n);
  }
  function Ld() {
    return null;
  }
  var xf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Xu(e) {
    this._internalRoot = e;
  }
  ao.prototype.render = Xu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(l(409));
    uo(e, n, null, null);
  }, ao.prototype.unmount = Xu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      vr(function() {
        uo(null, e, null, null);
      }), n[ot] = null;
    }
  };
  function ao(e) {
    this._internalRoot = e;
  }
  ao.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ml();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < kn.length && n !== 0 && n < kn[t].priority; t++)
        ;
      kn.splice(t, 0, e), t === 0 && _(e);
    }
  };
  function Gu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function _f() {
  }
  function zd(e, n, t, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var C = so(c);
          s.call(C);
        };
      }
      var c = kf(n, r, e, 0, null, !1, !1, "", _f);
      return e._reactRootContainer = c, e[ot] = c.current, Ui(e.nodeType === 8 ? e.parentNode : e), vr(), c;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var C = so(w);
        m.call(C);
      };
    }
    var w = Qu(e, 0, !1, null, null, !1, !1, "", _f);
    return e._reactRootContainer = w, e[ot] = w.current, Ui(e.nodeType === 8 ? e.parentNode : e), vr(function() {
      uo(n, w, t, r);
    }), w;
  }
  function co(e, n, t, r, i) {
    var s = t._reactRootContainer;
    if (s) {
      var c = s;
      if (typeof i == "function") {
        var m = i;
        i = function() {
          var w = so(c);
          m.call(w);
        };
      }
      uo(n, c, e, i);
    } else
      c = zd(t, n, e, i, r);
    return so(c);
  }
  Br = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = xt(n.pendingLanes);
          t !== 0 && (lr(n, t | 1), yn(n, ge()), !(ae & 6) && (oi = ge() + 500, Dt()));
        }
        break;
      case 13:
        vr(function() {
          var r = ft(e, 1);
          if (r !== null) {
            var i = sn();
            Wn(r, e, 1, i);
          }
        }), Ku(e, 1);
    }
  }, Ti = function(e) {
    if (e.tag === 13) {
      var n = ft(e, 134217728);
      if (n !== null) {
        var t = sn();
        Wn(n, e, 134217728, t);
      }
      Ku(e, 134217728);
    }
  }, hl = function(e) {
    if (e.tag === 13) {
      var n = Ut(e), t = ft(e, n);
      if (t !== null) {
        var r = sn();
        Wn(t, e, n, r);
      }
      Ku(e, n);
    }
  }, ml = function() {
    return ce;
  }, vl = function(e, n) {
    var t = ce;
    try {
      return ce = e, n();
    } finally {
      ce = t;
    }
  }, qt = function(e, n, t) {
    switch (n) {
      case "input":
        if ($n(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var i = Rl(r);
              if (!i)
                throw Error(l(90));
              fi(r), $n(r, i);
            }
          }
        }
        break;
      case "textarea":
        di(e, t);
        break;
      case "select":
        n = t.value, n != null && Qn(e, !!t.multiple, n, !1);
    }
  }, sl = ju, yi = vr;
  var Id = { usingClientEntryPoint: !1, Events: [Hi, Kr, Rl, bt, vi, ju] }, nl = { findFiberByHostInstance: sr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Od = { bundleType: nl.bundleType, version: nl.version, rendererPackageName: nl.rendererPackageName, rendererConfig: nl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = xi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: nl.findFiberByHostInstance || Ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!po.isDisabled && po.supportsFiber)
      try {
        tr = po.inject(Od), cn = po;
      } catch {
      }
  }
  return gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id, gn.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gu(n))
      throw Error(l(200));
    return Ad(e, n, null, t);
  }, gn.createRoot = function(e, n) {
    if (!Gu(e))
      throw Error(l(299));
    var t = !1, r = "", i = xf;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), n = Qu(e, 1, !1, null, null, t, !1, r, i), e[ot] = n.current, Ui(e.nodeType === 8 ? e.parentNode : e), new Xu(n);
  }, gn.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = xi(n), e = e === null ? null : e.stateNode, e;
  }, gn.flushSync = function(e) {
    return vr(e);
  }, gn.hydrate = function(e, n, t) {
    if (!fo(n))
      throw Error(l(200));
    return co(null, e, n, !0, t);
  }, gn.hydrateRoot = function(e, n, t) {
    if (!Gu(e))
      throw Error(l(405));
    var r = t != null && t.hydratedSources || null, i = !1, s = "", c = xf;
    if (t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), n = kf(n, null, e, 1, t ?? null, i, !1, s, c), e[ot] = n.current, Ui(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], i = t._getVersion, i = i(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(
          t,
          i
        );
    return new ao(n);
  }, gn.render = function(e, n, t) {
    if (!fo(n))
      throw Error(l(200));
    return co(null, e, n, !1, t);
  }, gn.unmountComponentAtNode = function(e) {
    if (!fo(e))
      throw Error(l(40));
    return e._reactRootContainer ? (vr(function() {
      co(null, null, e, !1, function() {
        e._reactRootContainer = null, e[ot] = null;
      });
    }), !0) : !1;
  }, gn.unstable_batchedUpdates = ju, gn.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!fo(t))
      throw Error(l(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(l(38));
    return co(e, n, t, !1, r);
  }, gn.version = "18.2.0-next-9e3b772b8-20220608", gn;
}
function Of() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of);
    } catch (a) {
      console.error(a);
    }
}
Of(), If.exports = Wd();
var Yd = If.exports;
const o0 = /* @__PURE__ */ ns(Yd), $d = "/mnt/c/Workspace/idlescience.github.io/node_modules/highs/build", rl = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {};
function Uf() {
  throw new Error("setTimeout has not been defined");
}
function Bf() {
  throw new Error("clearTimeout has not been defined");
}
var Vt = Uf, Wt = Bf;
typeof rl.setTimeout == "function" && (Vt = setTimeout);
typeof rl.clearTimeout == "function" && (Wt = clearTimeout);
function jf(a) {
  if (Vt === setTimeout)
    return setTimeout(a, 0);
  if ((Vt === Uf || !Vt) && setTimeout)
    return Vt = setTimeout, setTimeout(a, 0);
  try {
    return Vt(a, 0);
  } catch {
    try {
      return Vt.call(null, a, 0);
    } catch {
      return Vt.call(this, a, 0);
    }
  }
}
function Qd(a) {
  if (Wt === clearTimeout)
    return clearTimeout(a);
  if ((Wt === Bf || !Wt) && clearTimeout)
    return Wt = clearTimeout, clearTimeout(a);
  try {
    return Wt(a);
  } catch {
    try {
      return Wt.call(null, a);
    } catch {
      return Wt.call(this, a);
    }
  }
}
var ht = [], ai = !1, kr, ho = -1;
function Kd() {
  !ai || !kr || (ai = !1, kr.length ? ht = kr.concat(ht) : ho = -1, ht.length && Hf());
}
function Hf() {
  if (!ai) {
    var a = jf(Kd);
    ai = !0;
    for (var u = ht.length; u; ) {
      for (kr = ht, ht = []; ++ho < u; )
        kr && kr[ho].run();
      ho = -1, u = ht.length;
    }
    kr = null, ai = !1, Qd(a);
  }
}
function Xd(a) {
  var u = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var l = 1; l < arguments.length; l++)
      u[l - 1] = arguments[l];
  ht.push(new Vf(a, u)), ht.length === 1 && !ai && jf(Hf);
}
function Vf(a, u) {
  this.fun = a, this.array = u;
}
Vf.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var Gd = "browser", Zd = "browser", Jd = !0, qd = {}, bd = [], ep = "", np = {}, tp = {}, rp = {};
function xr() {
}
var ip = xr, lp = xr, op = xr, up = xr, sp = xr, ap = xr, fp = xr;
function cp(a) {
  throw new Error("process.binding is not supported");
}
function dp() {
  return "/";
}
function pp(a) {
  throw new Error("process.chdir is not supported");
}
function hp() {
  return 0;
}
var si = rl.performance || {}, mp = si.now || si.mozNow || si.msNow || si.oNow || si.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function vp(a) {
  var u = mp.call(si) * 1e-3, l = Math.floor(u), p = Math.floor(u % 1 * 1e9);
  return a && (l = l - a[0], p = p - a[1], p < 0 && (l--, p += 1e9)), [l, p];
}
var yp = /* @__PURE__ */ new Date();
function gp() {
  var a = /* @__PURE__ */ new Date(), u = a - yp;
  return u / 1e3;
}
var Sr = {
  nextTick: Xd,
  title: Gd,
  browser: Jd,
  env: qd,
  argv: bd,
  version: ep,
  versions: np,
  on: ip,
  addListener: lp,
  once: op,
  off: up,
  removeListener: sp,
  removeAllListeners: ap,
  emit: fp,
  binding: cp,
  cwd: dp,
  chdir: pp,
  umask: hp,
  hrtime: vp,
  platform: Zd,
  release: tp,
  config: rp,
  uptime: gp
};
const wp = "/mnt/c/Workspace/idlescience.github.io/node_modules/highs/build";
var bn = [], zn = [], Sp = typeof Uint8Array < "u" ? Uint8Array : Array, rs = !1;
function Wf() {
  rs = !0;
  for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, l = a.length; u < l; ++u)
    bn[u] = a[u], zn[a.charCodeAt(u)] = u;
  zn["-".charCodeAt(0)] = 62, zn["_".charCodeAt(0)] = 63;
}
function kp(a) {
  rs || Wf();
  var u, l, p, y, h, E, L = a.length;
  if (L % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  h = a[L - 2] === "=" ? 2 : a[L - 1] === "=" ? 1 : 0, E = new Sp(L * 3 / 4 - h), p = h > 0 ? L - 4 : L;
  var A = 0;
  for (u = 0, l = 0; u < p; u += 4, l += 3)
    y = zn[a.charCodeAt(u)] << 18 | zn[a.charCodeAt(u + 1)] << 12 | zn[a.charCodeAt(u + 2)] << 6 | zn[a.charCodeAt(u + 3)], E[A++] = y >> 16 & 255, E[A++] = y >> 8 & 255, E[A++] = y & 255;
  return h === 2 ? (y = zn[a.charCodeAt(u)] << 2 | zn[a.charCodeAt(u + 1)] >> 4, E[A++] = y & 255) : h === 1 && (y = zn[a.charCodeAt(u)] << 10 | zn[a.charCodeAt(u + 1)] << 4 | zn[a.charCodeAt(u + 2)] >> 2, E[A++] = y >> 8 & 255, E[A++] = y & 255), E;
}
function Ep(a) {
  return bn[a >> 18 & 63] + bn[a >> 12 & 63] + bn[a >> 6 & 63] + bn[a & 63];
}
function xp(a, u, l) {
  for (var p, y = [], h = u; h < l; h += 3)
    p = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2], y.push(Ep(p));
  return y.join("");
}
function Ff(a) {
  rs || Wf();
  for (var u, l = a.length, p = l % 3, y = "", h = [], E = 16383, L = 0, A = l - p; L < A; L += E)
    h.push(xp(a, L, L + E > A ? A : L + E));
  return p === 1 ? (u = a[l - 1], y += bn[u >> 2], y += bn[u << 4 & 63], y += "==") : p === 2 && (u = (a[l - 2] << 8) + a[l - 1], y += bn[u >> 10], y += bn[u >> 4 & 63], y += bn[u << 2 & 63], y += "="), h.push(y), h.join("");
}
function go(a, u, l, p, y) {
  var h, E, L = y * 8 - p - 1, A = (1 << L) - 1, X = A >> 1, W = -7, B = l ? y - 1 : 0, ee = l ? -1 : 1, me = a[u + B];
  for (B += ee, h = me & (1 << -W) - 1, me >>= -W, W += L; W > 0; h = h * 256 + a[u + B], B += ee, W -= 8)
    ;
  for (E = h & (1 << -W) - 1, h >>= -W, W += p; W > 0; E = E * 256 + a[u + B], B += ee, W -= 8)
    ;
  if (h === 0)
    h = 1 - X;
  else {
    if (h === A)
      return E ? NaN : (me ? -1 : 1) * (1 / 0);
    E = E + Math.pow(2, p), h = h - X;
  }
  return (me ? -1 : 1) * E * Math.pow(2, h - p);
}
function Yf(a, u, l, p, y, h) {
  var E, L, A, X = h * 8 - y - 1, W = (1 << X) - 1, B = W >> 1, ee = y === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, me = p ? 0 : h - 1, Se = p ? 1 : -1, pe = u < 0 || u === 0 && 1 / u < 0 ? 1 : 0;
  for (u = Math.abs(u), isNaN(u) || u === 1 / 0 ? (L = isNaN(u) ? 1 : 0, E = W) : (E = Math.floor(Math.log(u) / Math.LN2), u * (A = Math.pow(2, -E)) < 1 && (E--, A *= 2), E + B >= 1 ? u += ee / A : u += ee * Math.pow(2, 1 - B), u * A >= 2 && (E++, A /= 2), E + B >= W ? (L = 0, E = W) : E + B >= 1 ? (L = (u * A - 1) * Math.pow(2, y), E = E + B) : (L = u * Math.pow(2, B - 1) * Math.pow(2, y), E = 0)); y >= 8; a[l + me] = L & 255, me += Se, L /= 256, y -= 8)
    ;
  for (E = E << y | L, X += y; X > 0; a[l + me] = E & 255, me += Se, E /= 256, X -= 8)
    ;
  a[l + me - Se] |= pe * 128;
}
var _p = {}.toString, $f = Array.isArray || function(a) {
  return _p.call(a) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var Cp = 50;
M.TYPED_ARRAY_SUPPORT = rl.TYPED_ARRAY_SUPPORT !== void 0 ? rl.TYPED_ARRAY_SUPPORT : !0;
mo();
function mo() {
  return M.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function mt(a, u) {
  if (mo() < u)
    throw new RangeError("Invalid typed array length");
  return M.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(u), a.__proto__ = M.prototype) : (a === null && (a = new M(u)), a.length = u), a;
}
function M(a, u, l) {
  if (!M.TYPED_ARRAY_SUPPORT && !(this instanceof M))
    return new M(a, u, l);
  if (typeof a == "number") {
    if (typeof u == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return is(this, a);
  }
  return Qf(this, a, u, l);
}
M.poolSize = 8192;
M._augment = function(a) {
  return a.__proto__ = M.prototype, a;
};
function Qf(a, u, l, p) {
  if (typeof u == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && u instanceof ArrayBuffer ? Rp(a, u, l, p) : typeof u == "string" ? Tp(a, u, l) : Np(a, u);
}
M.from = function(a, u, l) {
  return Qf(null, a, u, l);
};
M.TYPED_ARRAY_SUPPORT && (M.prototype.__proto__ = Uint8Array.prototype, M.__proto__ = Uint8Array);
function Kf(a) {
  if (typeof a != "number")
    throw new TypeError('"size" argument must be a number');
  if (a < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Pp(a, u, l, p) {
  return Kf(u), u <= 0 ? mt(a, u) : l !== void 0 ? typeof p == "string" ? mt(a, u).fill(l, p) : mt(a, u).fill(l) : mt(a, u);
}
M.alloc = function(a, u, l) {
  return Pp(null, a, u, l);
};
function is(a, u) {
  if (Kf(u), a = mt(a, u < 0 ? 0 : ls(u) | 0), !M.TYPED_ARRAY_SUPPORT)
    for (var l = 0; l < u; ++l)
      a[l] = 0;
  return a;
}
M.allocUnsafe = function(a) {
  return is(null, a);
};
M.allocUnsafeSlow = function(a) {
  return is(null, a);
};
function Tp(a, u, l) {
  if ((typeof l != "string" || l === "") && (l = "utf8"), !M.isEncoding(l))
    throw new TypeError('"encoding" must be a valid string encoding');
  var p = Xf(u, l) | 0;
  a = mt(a, p);
  var y = a.write(u, l);
  return y !== p && (a = a.slice(0, y)), a;
}
function es(a, u) {
  var l = u.length < 0 ? 0 : ls(u.length) | 0;
  a = mt(a, l);
  for (var p = 0; p < l; p += 1)
    a[p] = u[p] & 255;
  return a;
}
function Rp(a, u, l, p) {
  if (u.byteLength, l < 0 || u.byteLength < l)
    throw new RangeError("'offset' is out of bounds");
  if (u.byteLength < l + (p || 0))
    throw new RangeError("'length' is out of bounds");
  return l === void 0 && p === void 0 ? u = new Uint8Array(u) : p === void 0 ? u = new Uint8Array(u, l) : u = new Uint8Array(u, l, p), M.TYPED_ARRAY_SUPPORT ? (a = u, a.__proto__ = M.prototype) : a = es(a, u), a;
}
function Np(a, u) {
  if (et(u)) {
    var l = ls(u.length) | 0;
    return a = mt(a, l), a.length === 0 || u.copy(a, 0, 0, l), a;
  }
  if (u) {
    if (typeof ArrayBuffer < "u" && u.buffer instanceof ArrayBuffer || "length" in u)
      return typeof u.length != "number" || Xp(u.length) ? mt(a, 0) : es(a, u);
    if (u.type === "Buffer" && $f(u.data))
      return es(a, u.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function ls(a) {
  if (a >= mo())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + mo().toString(16) + " bytes");
  return a | 0;
}
M.isBuffer = Gp;
function et(a) {
  return !!(a != null && a._isBuffer);
}
M.compare = function(u, l) {
  if (!et(u) || !et(l))
    throw new TypeError("Arguments must be Buffers");
  if (u === l)
    return 0;
  for (var p = u.length, y = l.length, h = 0, E = Math.min(p, y); h < E; ++h)
    if (u[h] !== l[h]) {
      p = u[h], y = l[h];
      break;
    }
  return p < y ? -1 : y < p ? 1 : 0;
};
M.isEncoding = function(u) {
  switch (String(u).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
M.concat = function(u, l) {
  if (!$f(u))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (u.length === 0)
    return M.alloc(0);
  var p;
  if (l === void 0)
    for (l = 0, p = 0; p < u.length; ++p)
      l += u[p].length;
  var y = M.allocUnsafe(l), h = 0;
  for (p = 0; p < u.length; ++p) {
    var E = u[p];
    if (!et(E))
      throw new TypeError('"list" argument must be an Array of Buffers');
    E.copy(y, h), h += E.length;
  }
  return y;
};
function Xf(a, u) {
  if (et(a))
    return a.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer))
    return a.byteLength;
  typeof a != "string" && (a = "" + a);
  var l = a.length;
  if (l === 0)
    return 0;
  for (var p = !1; ; )
    switch (u) {
      case "ascii":
      case "latin1":
      case "binary":
        return l;
      case "utf8":
      case "utf-8":
      case void 0:
        return vo(a).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return l * 2;
      case "hex":
        return l >>> 1;
      case "base64":
        return nc(a).length;
      default:
        if (p)
          return vo(a).length;
        u = ("" + u).toLowerCase(), p = !0;
    }
}
M.byteLength = Xf;
function Fp(a, u, l) {
  var p = !1;
  if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, u >>>= 0, l <= u))
    return "";
  for (a || (a = "utf8"); ; )
    switch (a) {
      case "hex":
        return jp(this, u, l);
      case "utf8":
      case "utf-8":
        return Jf(this, u, l);
      case "ascii":
        return Up(this, u, l);
      case "latin1":
      case "binary":
        return Bp(this, u, l);
      case "base64":
        return Ip(this, u, l);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Hp(this, u, l);
      default:
        if (p)
          throw new TypeError("Unknown encoding: " + a);
        a = (a + "").toLowerCase(), p = !0;
    }
}
M.prototype._isBuffer = !0;
function Er(a, u, l) {
  var p = a[u];
  a[u] = a[l], a[l] = p;
}
M.prototype.swap16 = function() {
  var u = this.length;
  if (u % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var l = 0; l < u; l += 2)
    Er(this, l, l + 1);
  return this;
};
M.prototype.swap32 = function() {
  var u = this.length;
  if (u % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var l = 0; l < u; l += 4)
    Er(this, l, l + 3), Er(this, l + 1, l + 2);
  return this;
};
M.prototype.swap64 = function() {
  var u = this.length;
  if (u % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var l = 0; l < u; l += 8)
    Er(this, l, l + 7), Er(this, l + 1, l + 6), Er(this, l + 2, l + 5), Er(this, l + 3, l + 4);
  return this;
};
M.prototype.toString = function() {
  var u = this.length | 0;
  return u === 0 ? "" : arguments.length === 0 ? Jf(this, 0, u) : Fp.apply(this, arguments);
};
M.prototype.equals = function(u) {
  if (!et(u))
    throw new TypeError("Argument must be a Buffer");
  return this === u ? !0 : M.compare(this, u) === 0;
};
M.prototype.inspect = function() {
  var u = "", l = Cp;
  return this.length > 0 && (u = this.toString("hex", 0, l).match(/.{2}/g).join(" "), this.length > l && (u += " ... ")), "<Buffer " + u + ">";
};
M.prototype.compare = function(u, l, p, y, h) {
  if (!et(u))
    throw new TypeError("Argument must be a Buffer");
  if (l === void 0 && (l = 0), p === void 0 && (p = u ? u.length : 0), y === void 0 && (y = 0), h === void 0 && (h = this.length), l < 0 || p > u.length || y < 0 || h > this.length)
    throw new RangeError("out of range index");
  if (y >= h && l >= p)
    return 0;
  if (y >= h)
    return -1;
  if (l >= p)
    return 1;
  if (l >>>= 0, p >>>= 0, y >>>= 0, h >>>= 0, this === u)
    return 0;
  for (var E = h - y, L = p - l, A = Math.min(E, L), X = this.slice(y, h), W = u.slice(l, p), B = 0; B < A; ++B)
    if (X[B] !== W[B]) {
      E = X[B], L = W[B];
      break;
    }
  return E < L ? -1 : L < E ? 1 : 0;
};
function Gf(a, u, l, p, y) {
  if (a.length === 0)
    return -1;
  if (typeof l == "string" ? (p = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, isNaN(l) && (l = y ? 0 : a.length - 1), l < 0 && (l = a.length + l), l >= a.length) {
    if (y)
      return -1;
    l = a.length - 1;
  } else if (l < 0)
    if (y)
      l = 0;
    else
      return -1;
  if (typeof u == "string" && (u = M.from(u, p)), et(u))
    return u.length === 0 ? -1 : Mf(a, u, l, p, y);
  if (typeof u == "number")
    return u = u & 255, M.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(a, u, l) : Uint8Array.prototype.lastIndexOf.call(a, u, l) : Mf(a, [u], l, p, y);
  throw new TypeError("val must be string, number or Buffer");
}
function Mf(a, u, l, p, y) {
  var h = 1, E = a.length, L = u.length;
  if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
    if (a.length < 2 || u.length < 2)
      return -1;
    h = 2, E /= 2, L /= 2, l /= 2;
  }
  function A(me, Se) {
    return h === 1 ? me[Se] : me.readUInt16BE(Se * h);
  }
  var X;
  if (y) {
    var W = -1;
    for (X = l; X < E; X++)
      if (A(a, X) === A(u, W === -1 ? 0 : X - W)) {
        if (W === -1 && (W = X), X - W + 1 === L)
          return W * h;
      } else
        W !== -1 && (X -= X - W), W = -1;
  } else
    for (l + L > E && (l = E - L), X = l; X >= 0; X--) {
      for (var B = !0, ee = 0; ee < L; ee++)
        if (A(a, X + ee) !== A(u, ee)) {
          B = !1;
          break;
        }
      if (B)
        return X;
    }
  return -1;
}
M.prototype.includes = function(u, l, p) {
  return this.indexOf(u, l, p) !== -1;
};
M.prototype.indexOf = function(u, l, p) {
  return Gf(this, u, l, p, !0);
};
M.prototype.lastIndexOf = function(u, l, p) {
  return Gf(this, u, l, p, !1);
};
function Mp(a, u, l, p) {
  l = Number(l) || 0;
  var y = a.length - l;
  p ? (p = Number(p), p > y && (p = y)) : p = y;
  var h = u.length;
  if (h % 2 !== 0)
    throw new TypeError("Invalid hex string");
  p > h / 2 && (p = h / 2);
  for (var E = 0; E < p; ++E) {
    var L = parseInt(u.substr(E * 2, 2), 16);
    if (isNaN(L))
      return E;
    a[l + E] = L;
  }
  return E;
}
function Dp(a, u, l, p) {
  return ko(vo(u, a.length - l), a, l, p);
}
function Zf(a, u, l, p) {
  return ko(Qp(u), a, l, p);
}
function Ap(a, u, l, p) {
  return Zf(a, u, l, p);
}
function Lp(a, u, l, p) {
  return ko(nc(u), a, l, p);
}
function zp(a, u, l, p) {
  return ko(Kp(u, a.length - l), a, l, p);
}
M.prototype.write = function(u, l, p, y) {
  if (l === void 0)
    y = "utf8", p = this.length, l = 0;
  else if (p === void 0 && typeof l == "string")
    y = l, p = this.length, l = 0;
  else if (isFinite(l))
    l = l | 0, isFinite(p) ? (p = p | 0, y === void 0 && (y = "utf8")) : (y = p, p = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var h = this.length - l;
  if ((p === void 0 || p > h) && (p = h), u.length > 0 && (p < 0 || l < 0) || l > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  y || (y = "utf8");
  for (var E = !1; ; )
    switch (y) {
      case "hex":
        return Mp(this, u, l, p);
      case "utf8":
      case "utf-8":
        return Dp(this, u, l, p);
      case "ascii":
        return Zf(this, u, l, p);
      case "latin1":
      case "binary":
        return Ap(this, u, l, p);
      case "base64":
        return Lp(this, u, l, p);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return zp(this, u, l, p);
      default:
        if (E)
          throw new TypeError("Unknown encoding: " + y);
        y = ("" + y).toLowerCase(), E = !0;
    }
};
M.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function Ip(a, u, l) {
  return u === 0 && l === a.length ? Ff(a) : Ff(a.slice(u, l));
}
function Jf(a, u, l) {
  l = Math.min(a.length, l);
  for (var p = [], y = u; y < l; ) {
    var h = a[y], E = null, L = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
    if (y + L <= l) {
      var A, X, W, B;
      switch (L) {
        case 1:
          h < 128 && (E = h);
          break;
        case 2:
          A = a[y + 1], (A & 192) === 128 && (B = (h & 31) << 6 | A & 63, B > 127 && (E = B));
          break;
        case 3:
          A = a[y + 1], X = a[y + 2], (A & 192) === 128 && (X & 192) === 128 && (B = (h & 15) << 12 | (A & 63) << 6 | X & 63, B > 2047 && (B < 55296 || B > 57343) && (E = B));
          break;
        case 4:
          A = a[y + 1], X = a[y + 2], W = a[y + 3], (A & 192) === 128 && (X & 192) === 128 && (W & 192) === 128 && (B = (h & 15) << 18 | (A & 63) << 12 | (X & 63) << 6 | W & 63, B > 65535 && B < 1114112 && (E = B));
      }
    }
    E === null ? (E = 65533, L = 1) : E > 65535 && (E -= 65536, p.push(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), p.push(E), y += L;
  }
  return Op(p);
}
var Df = 4096;
function Op(a) {
  var u = a.length;
  if (u <= Df)
    return String.fromCharCode.apply(String, a);
  for (var l = "", p = 0; p < u; )
    l += String.fromCharCode.apply(
      String,
      a.slice(p, p += Df)
    );
  return l;
}
function Up(a, u, l) {
  var p = "";
  l = Math.min(a.length, l);
  for (var y = u; y < l; ++y)
    p += String.fromCharCode(a[y] & 127);
  return p;
}
function Bp(a, u, l) {
  var p = "";
  l = Math.min(a.length, l);
  for (var y = u; y < l; ++y)
    p += String.fromCharCode(a[y]);
  return p;
}
function jp(a, u, l) {
  var p = a.length;
  (!u || u < 0) && (u = 0), (!l || l < 0 || l > p) && (l = p);
  for (var y = "", h = u; h < l; ++h)
    y += $p(a[h]);
  return y;
}
function Hp(a, u, l) {
  for (var p = a.slice(u, l), y = "", h = 0; h < p.length; h += 2)
    y += String.fromCharCode(p[h] + p[h + 1] * 256);
  return y;
}
M.prototype.slice = function(u, l) {
  var p = this.length;
  u = ~~u, l = l === void 0 ? p : ~~l, u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), l < 0 ? (l += p, l < 0 && (l = 0)) : l > p && (l = p), l < u && (l = u);
  var y;
  if (M.TYPED_ARRAY_SUPPORT)
    y = this.subarray(u, l), y.__proto__ = M.prototype;
  else {
    var h = l - u;
    y = new M(h, void 0);
    for (var E = 0; E < h; ++E)
      y[E] = this[E + u];
  }
  return y;
};
function Ye(a, u, l) {
  if (a % 1 !== 0 || a < 0)
    throw new RangeError("offset is not uint");
  if (a + u > l)
    throw new RangeError("Trying to access beyond buffer length");
}
M.prototype.readUIntLE = function(u, l, p) {
  u = u | 0, l = l | 0, p || Ye(u, l, this.length);
  for (var y = this[u], h = 1, E = 0; ++E < l && (h *= 256); )
    y += this[u + E] * h;
  return y;
};
M.prototype.readUIntBE = function(u, l, p) {
  u = u | 0, l = l | 0, p || Ye(u, l, this.length);
  for (var y = this[u + --l], h = 1; l > 0 && (h *= 256); )
    y += this[u + --l] * h;
  return y;
};
M.prototype.readUInt8 = function(u, l) {
  return l || Ye(u, 1, this.length), this[u];
};
M.prototype.readUInt16LE = function(u, l) {
  return l || Ye(u, 2, this.length), this[u] | this[u + 1] << 8;
};
M.prototype.readUInt16BE = function(u, l) {
  return l || Ye(u, 2, this.length), this[u] << 8 | this[u + 1];
};
M.prototype.readUInt32LE = function(u, l) {
  return l || Ye(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
};
M.prototype.readUInt32BE = function(u, l) {
  return l || Ye(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
};
M.prototype.readIntLE = function(u, l, p) {
  u = u | 0, l = l | 0, p || Ye(u, l, this.length);
  for (var y = this[u], h = 1, E = 0; ++E < l && (h *= 256); )
    y += this[u + E] * h;
  return h *= 128, y >= h && (y -= Math.pow(2, 8 * l)), y;
};
M.prototype.readIntBE = function(u, l, p) {
  u = u | 0, l = l | 0, p || Ye(u, l, this.length);
  for (var y = l, h = 1, E = this[u + --y]; y > 0 && (h *= 256); )
    E += this[u + --y] * h;
  return h *= 128, E >= h && (E -= Math.pow(2, 8 * l)), E;
};
M.prototype.readInt8 = function(u, l) {
  return l || Ye(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
};
M.prototype.readInt16LE = function(u, l) {
  l || Ye(u, 2, this.length);
  var p = this[u] | this[u + 1] << 8;
  return p & 32768 ? p | 4294901760 : p;
};
M.prototype.readInt16BE = function(u, l) {
  l || Ye(u, 2, this.length);
  var p = this[u + 1] | this[u] << 8;
  return p & 32768 ? p | 4294901760 : p;
};
M.prototype.readInt32LE = function(u, l) {
  return l || Ye(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
};
M.prototype.readInt32BE = function(u, l) {
  return l || Ye(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
};
M.prototype.readFloatLE = function(u, l) {
  return l || Ye(u, 4, this.length), go(this, u, !0, 23, 4);
};
M.prototype.readFloatBE = function(u, l) {
  return l || Ye(u, 4, this.length), go(this, u, !1, 23, 4);
};
M.prototype.readDoubleLE = function(u, l) {
  return l || Ye(u, 8, this.length), go(this, u, !0, 52, 8);
};
M.prototype.readDoubleBE = function(u, l) {
  return l || Ye(u, 8, this.length), go(this, u, !1, 52, 8);
};
function wn(a, u, l, p, y, h) {
  if (!et(a))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (u > y || u < h)
    throw new RangeError('"value" argument is out of bounds');
  if (l + p > a.length)
    throw new RangeError("Index out of range");
}
M.prototype.writeUIntLE = function(u, l, p, y) {
  if (u = +u, l = l | 0, p = p | 0, !y) {
    var h = Math.pow(2, 8 * p) - 1;
    wn(this, u, l, p, h, 0);
  }
  var E = 1, L = 0;
  for (this[l] = u & 255; ++L < p && (E *= 256); )
    this[l + L] = u / E & 255;
  return l + p;
};
M.prototype.writeUIntBE = function(u, l, p, y) {
  if (u = +u, l = l | 0, p = p | 0, !y) {
    var h = Math.pow(2, 8 * p) - 1;
    wn(this, u, l, p, h, 0);
  }
  var E = p - 1, L = 1;
  for (this[l + E] = u & 255; --E >= 0 && (L *= 256); )
    this[l + E] = u / L & 255;
  return l + p;
};
M.prototype.writeUInt8 = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 1, 255, 0), M.TYPED_ARRAY_SUPPORT || (u = Math.floor(u)), this[l] = u & 255, l + 1;
};
function wo(a, u, l, p) {
  u < 0 && (u = 65535 + u + 1);
  for (var y = 0, h = Math.min(a.length - l, 2); y < h; ++y)
    a[l + y] = (u & 255 << 8 * (p ? y : 1 - y)) >>> (p ? y : 1 - y) * 8;
}
M.prototype.writeUInt16LE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 2, 65535, 0), M.TYPED_ARRAY_SUPPORT ? (this[l] = u & 255, this[l + 1] = u >>> 8) : wo(this, u, l, !0), l + 2;
};
M.prototype.writeUInt16BE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 2, 65535, 0), M.TYPED_ARRAY_SUPPORT ? (this[l] = u >>> 8, this[l + 1] = u & 255) : wo(this, u, l, !1), l + 2;
};
function So(a, u, l, p) {
  u < 0 && (u = 4294967295 + u + 1);
  for (var y = 0, h = Math.min(a.length - l, 4); y < h; ++y)
    a[l + y] = u >>> (p ? y : 3 - y) * 8 & 255;
}
M.prototype.writeUInt32LE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 4, 4294967295, 0), M.TYPED_ARRAY_SUPPORT ? (this[l + 3] = u >>> 24, this[l + 2] = u >>> 16, this[l + 1] = u >>> 8, this[l] = u & 255) : So(this, u, l, !0), l + 4;
};
M.prototype.writeUInt32BE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 4, 4294967295, 0), M.TYPED_ARRAY_SUPPORT ? (this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255) : So(this, u, l, !1), l + 4;
};
M.prototype.writeIntLE = function(u, l, p, y) {
  if (u = +u, l = l | 0, !y) {
    var h = Math.pow(2, 8 * p - 1);
    wn(this, u, l, p, h - 1, -h);
  }
  var E = 0, L = 1, A = 0;
  for (this[l] = u & 255; ++E < p && (L *= 256); )
    u < 0 && A === 0 && this[l + E - 1] !== 0 && (A = 1), this[l + E] = (u / L >> 0) - A & 255;
  return l + p;
};
M.prototype.writeIntBE = function(u, l, p, y) {
  if (u = +u, l = l | 0, !y) {
    var h = Math.pow(2, 8 * p - 1);
    wn(this, u, l, p, h - 1, -h);
  }
  var E = p - 1, L = 1, A = 0;
  for (this[l + E] = u & 255; --E >= 0 && (L *= 256); )
    u < 0 && A === 0 && this[l + E + 1] !== 0 && (A = 1), this[l + E] = (u / L >> 0) - A & 255;
  return l + p;
};
M.prototype.writeInt8 = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 1, 127, -128), M.TYPED_ARRAY_SUPPORT || (u = Math.floor(u)), u < 0 && (u = 255 + u + 1), this[l] = u & 255, l + 1;
};
M.prototype.writeInt16LE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 2, 32767, -32768), M.TYPED_ARRAY_SUPPORT ? (this[l] = u & 255, this[l + 1] = u >>> 8) : wo(this, u, l, !0), l + 2;
};
M.prototype.writeInt16BE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 2, 32767, -32768), M.TYPED_ARRAY_SUPPORT ? (this[l] = u >>> 8, this[l + 1] = u & 255) : wo(this, u, l, !1), l + 2;
};
M.prototype.writeInt32LE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 4, 2147483647, -2147483648), M.TYPED_ARRAY_SUPPORT ? (this[l] = u & 255, this[l + 1] = u >>> 8, this[l + 2] = u >>> 16, this[l + 3] = u >>> 24) : So(this, u, l, !0), l + 4;
};
M.prototype.writeInt32BE = function(u, l, p) {
  return u = +u, l = l | 0, p || wn(this, u, l, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), M.TYPED_ARRAY_SUPPORT ? (this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255) : So(this, u, l, !1), l + 4;
};
function qf(a, u, l, p, y, h) {
  if (l + p > a.length)
    throw new RangeError("Index out of range");
  if (l < 0)
    throw new RangeError("Index out of range");
}
function bf(a, u, l, p, y) {
  return y || qf(a, u, l, 4), Yf(a, u, l, p, 23, 4), l + 4;
}
M.prototype.writeFloatLE = function(u, l, p) {
  return bf(this, u, l, !0, p);
};
M.prototype.writeFloatBE = function(u, l, p) {
  return bf(this, u, l, !1, p);
};
function ec(a, u, l, p, y) {
  return y || qf(a, u, l, 8), Yf(a, u, l, p, 52, 8), l + 8;
}
M.prototype.writeDoubleLE = function(u, l, p) {
  return ec(this, u, l, !0, p);
};
M.prototype.writeDoubleBE = function(u, l, p) {
  return ec(this, u, l, !1, p);
};
M.prototype.copy = function(u, l, p, y) {
  if (p || (p = 0), !y && y !== 0 && (y = this.length), l >= u.length && (l = u.length), l || (l = 0), y > 0 && y < p && (y = p), y === p || u.length === 0 || this.length === 0)
    return 0;
  if (l < 0)
    throw new RangeError("targetStart out of bounds");
  if (p < 0 || p >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (y < 0)
    throw new RangeError("sourceEnd out of bounds");
  y > this.length && (y = this.length), u.length - l < y - p && (y = u.length - l + p);
  var h = y - p, E;
  if (this === u && p < l && l < y)
    for (E = h - 1; E >= 0; --E)
      u[E + l] = this[E + p];
  else if (h < 1e3 || !M.TYPED_ARRAY_SUPPORT)
    for (E = 0; E < h; ++E)
      u[E + l] = this[E + p];
  else
    Uint8Array.prototype.set.call(
      u,
      this.subarray(p, p + h),
      l
    );
  return h;
};
M.prototype.fill = function(u, l, p, y) {
  if (typeof u == "string") {
    if (typeof l == "string" ? (y = l, l = 0, p = this.length) : typeof p == "string" && (y = p, p = this.length), u.length === 1) {
      var h = u.charCodeAt(0);
      h < 256 && (u = h);
    }
    if (y !== void 0 && typeof y != "string")
      throw new TypeError("encoding must be a string");
    if (typeof y == "string" && !M.isEncoding(y))
      throw new TypeError("Unknown encoding: " + y);
  } else
    typeof u == "number" && (u = u & 255);
  if (l < 0 || this.length < l || this.length < p)
    throw new RangeError("Out of range index");
  if (p <= l)
    return this;
  l = l >>> 0, p = p === void 0 ? this.length : p >>> 0, u || (u = 0);
  var E;
  if (typeof u == "number")
    for (E = l; E < p; ++E)
      this[E] = u;
  else {
    var L = et(u) ? u : vo(new M(u, y).toString()), A = L.length;
    for (E = 0; E < p - l; ++E)
      this[E + l] = L[E % A];
  }
  return this;
};
var Vp = /[^+\/0-9A-Za-z-_]/g;
function Wp(a) {
  if (a = Yp(a).replace(Vp, ""), a.length < 2)
    return "";
  for (; a.length % 4 !== 0; )
    a = a + "=";
  return a;
}
function Yp(a) {
  return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
}
function $p(a) {
  return a < 16 ? "0" + a.toString(16) : a.toString(16);
}
function vo(a, u) {
  u = u || 1 / 0;
  for (var l, p = a.length, y = null, h = [], E = 0; E < p; ++E) {
    if (l = a.charCodeAt(E), l > 55295 && l < 57344) {
      if (!y) {
        if (l > 56319) {
          (u -= 3) > -1 && h.push(239, 191, 189);
          continue;
        } else if (E + 1 === p) {
          (u -= 3) > -1 && h.push(239, 191, 189);
          continue;
        }
        y = l;
        continue;
      }
      if (l < 56320) {
        (u -= 3) > -1 && h.push(239, 191, 189), y = l;
        continue;
      }
      l = (y - 55296 << 10 | l - 56320) + 65536;
    } else
      y && (u -= 3) > -1 && h.push(239, 191, 189);
    if (y = null, l < 128) {
      if ((u -= 1) < 0)
        break;
      h.push(l);
    } else if (l < 2048) {
      if ((u -= 2) < 0)
        break;
      h.push(
        l >> 6 | 192,
        l & 63 | 128
      );
    } else if (l < 65536) {
      if ((u -= 3) < 0)
        break;
      h.push(
        l >> 12 | 224,
        l >> 6 & 63 | 128,
        l & 63 | 128
      );
    } else if (l < 1114112) {
      if ((u -= 4) < 0)
        break;
      h.push(
        l >> 18 | 240,
        l >> 12 & 63 | 128,
        l >> 6 & 63 | 128,
        l & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return h;
}
function Qp(a) {
  for (var u = [], l = 0; l < a.length; ++l)
    u.push(a.charCodeAt(l) & 255);
  return u;
}
function Kp(a, u) {
  for (var l, p, y, h = [], E = 0; E < a.length && !((u -= 2) < 0); ++E)
    l = a.charCodeAt(E), p = l >> 8, y = l % 256, h.push(y), h.push(p);
  return h;
}
function nc(a) {
  return kp(Wp(a));
}
function ko(a, u, l, p) {
  for (var y = 0; y < p && !(y + l >= u.length || y >= a.length); ++y)
    u[y + l] = a[y];
  return y;
}
function Xp(a) {
  return a !== a;
}
function Gp(a) {
  return a != null && (!!a._isBuffer || tc(a) || Zp(a));
}
function tc(a) {
  return !!a.constructor && typeof a.constructor.isBuffer == "function" && a.constructor.isBuffer(a);
}
function Zp(a) {
  return typeof a.readFloatLE == "function" && typeof a.slice == "function" && tc(a.slice(0, 0));
}
var rc = { exports: {} };
function ic(a, u) {
  for (var l = 0, p = a.length - 1; p >= 0; p--) {
    var y = a[p];
    y === "." ? a.splice(p, 1) : y === ".." ? (a.splice(p, 1), l++) : l && (a.splice(p, 1), l--);
  }
  if (u)
    for (; l--; l)
      a.unshift("..");
  return a;
}
var Jp = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, os = function(a) {
  return Jp.exec(a).slice(1);
};
function yo() {
  for (var a = "", u = !1, l = arguments.length - 1; l >= -1 && !u; l--) {
    var p = l >= 0 ? arguments[l] : "/";
    if (typeof p != "string")
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!p)
      continue;
    a = p + "/" + a, u = p.charAt(0) === "/";
  }
  return a = ic(as(a.split("/"), function(y) {
    return !!y;
  }), !u).join("/"), (u ? "/" : "") + a || ".";
}
function us(a) {
  var u = ss(a), l = bp(a, -1) === "/";
  return a = ic(as(a.split("/"), function(p) {
    return !!p;
  }), !u).join("/"), !a && !u && (a = "."), a && l && (a += "/"), (u ? "/" : "") + a;
}
function ss(a) {
  return a.charAt(0) === "/";
}
function lc() {
  var a = Array.prototype.slice.call(arguments, 0);
  return us(as(a, function(u, l) {
    if (typeof u != "string")
      throw new TypeError("Arguments to path.join must be strings");
    return u;
  }).join("/"));
}
function oc(a, u) {
  a = yo(a).substr(1), u = yo(u).substr(1);
  function l(X) {
    for (var W = 0; W < X.length && X[W] === ""; W++)
      ;
    for (var B = X.length - 1; B >= 0 && X[B] === ""; B--)
      ;
    return W > B ? [] : X.slice(W, B - W + 1);
  }
  for (var p = l(a.split("/")), y = l(u.split("/")), h = Math.min(p.length, y.length), E = h, L = 0; L < h; L++)
    if (p[L] !== y[L]) {
      E = L;
      break;
    }
  for (var A = [], L = E; L < p.length; L++)
    A.push("..");
  return A = A.concat(y.slice(E)), A.join("/");
}
var uc = "/", sc = ":";
function ac(a) {
  var u = os(a), l = u[0], p = u[1];
  return !l && !p ? "." : (p && (p = p.substr(0, p.length - 1)), l + p);
}
function fc(a, u) {
  var l = os(a)[2];
  return u && l.substr(-1 * u.length) === u && (l = l.substr(0, l.length - u.length)), l;
}
function cc(a) {
  return os(a)[3];
}
const qp = {
  extname: cc,
  basename: fc,
  dirname: ac,
  sep: uc,
  delimiter: sc,
  relative: oc,
  join: lc,
  isAbsolute: ss,
  normalize: us,
  resolve: yo
};
function as(a, u) {
  if (a.filter)
    return a.filter(u);
  for (var l = [], p = 0; p < a.length; p++)
    u(a[p], p, a) && l.push(a[p]);
  return l;
}
var bp = "ab".substr(-1) === "b" ? function(a, u, l) {
  return a.substr(u, l);
} : function(a, u, l) {
  return u < 0 && (u = a.length + u), a.substr(u, l);
};
const e0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  basename: fc,
  default: qp,
  delimiter: sc,
  dirname: ac,
  extname: cc,
  isAbsolute: ss,
  join: lc,
  normalize: us,
  relative: oc,
  resolve: yo,
  sep: uc
}, Symbol.toStringTag, { value: "Module" })), qu = /* @__PURE__ */ Af(e0), n0 = {}, t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n0
}, Symbol.toStringTag, { value: "Module" })), bu = /* @__PURE__ */ Af(t0);
(function(a, u) {
  var l = function() {
    var p = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
    return p = p || $d, function(y) {
      y = y || {};
      var h;
      h || (h = typeof y < "u" ? y : {});
      var E, L;
      h.ready = new Promise(function(o, f) {
        E = o, L = f;
      });
      const A = [], X = [];
      h.print = (o) => A.push(o), h.printErr = (o) => X.push(o);
      var W = {}, B;
      for (B in h)
        h.hasOwnProperty(B) && (W[B] = h[B]);
      var ee = "./this.program", me = typeof window == "object", Se = typeof importScripts == "function", pe = typeof Sr == "object" && typeof Sr.versions == "object" && typeof Sr.versions.node == "string", te = "", Sn, tn, Ze, _e, Oe;
      pe ? (te = Se ? qu.dirname(te) + "/" : wp + "/", Sn = function(o, f) {
        return _e || (_e = bu), Oe || (Oe = qu), o = Oe.normalize(o), _e.readFileSync(o, f ? null : "utf8");
      }, Ze = function(o) {
        return o = Sn(o, !0), o.buffer || (o = new Uint8Array(o)), o.buffer || De("Assertion failed: undefined"), o;
      }, tn = function(o, f, d) {
        _e || (_e = bu), Oe || (Oe = qu), o = Oe.normalize(o), _e.readFile(o, function(v, _) {
          v ? d(v) : f(_.buffer);
        });
      }, 1 < Sr.argv.length && (ee = Sr.argv[1].replace(/\\/g, "/")), h.inspect = function() {
        return "[Emscripten Module object]";
      }) : (me || Se) && (Se ? te = self.location.href : typeof document < "u" && document.currentScript && (te = document.currentScript.src), p && (te = p), te = te.indexOf("blob:") !== 0 ? te.substr(0, te.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Sn = function(o) {
        var f = new XMLHttpRequest();
        return f.open("GET", o, !1), f.send(null), f.responseText;
      }, Se && (Ze = function(o) {
        var f = new XMLHttpRequest();
        return f.open("GET", o, !1), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
      }), tn = function(o, f, d) {
        var v = new XMLHttpRequest();
        v.open("GET", o, !0), v.responseType = "arraybuffer", v.onload = function() {
          v.status == 200 || v.status == 0 && v.response ? f(v.response) : d();
        }, v.onerror = d, v.send(null);
      });
      var Ue = h.print || console.log.bind(console), Re = h.printErr || console.warn.bind(console);
      for (B in W)
        W.hasOwnProperty(B) && (h[B] = W[B]);
      W = null, h.thisProgram && (ee = h.thisProgram);
      var Be;
      h.wasmBinary && (Be = h.wasmBinary), h.noExitRuntime, typeof WebAssembly != "object" && De("no native wasm support detected");
      var Pn, Tn = !1;
      function Yn(o) {
        var f = h["_" + o];
        return f || De("Assertion failed: Cannot call unknown function " + (o + ", make sure it is exported")), f;
      }
      function Rn(o, f, d, v) {
        var _ = { string: function(ne) {
          var se = 0;
          if (ne != null && ne !== 0) {
            var Ke = (ne.length << 2) + 1;
            se = lr(Ke), je(ne, g, se, Ke);
          }
          return se;
        }, array: function(ne) {
          var se = lr(ne.length);
          return Q.set(ne, se), se;
        } };
        o = Yn(o);
        var P = [], Y = 0;
        if (v)
          for (var le = 0; le < v.length; le++) {
            var Fe = _[d[le]];
            Fe ? (Y === 0 && (Y = _t()), P[le] = Fe(v[le])) : P[le] = v[le];
          }
        return d = o.apply(null, P), d = function(ne) {
          return Y !== 0 && pl(Y), f === "string" ? rn(ne) : f === "boolean" ? !!ne : ne;
        }(d);
      }
      var Je = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
      function $e(o, f, d) {
        var v = f + d;
        for (d = f; o[d] && !(d >= v); )
          ++d;
        if (16 < d - f && o.subarray && Je)
          return Je.decode(o.subarray(f, d));
        for (v = ""; f < d; ) {
          var _ = o[f++];
          if (_ & 128) {
            var P = o[f++] & 63;
            if ((_ & 224) == 192)
              v += String.fromCharCode((_ & 31) << 6 | P);
            else {
              var Y = o[f++] & 63;
              _ = (_ & 240) == 224 ? (_ & 15) << 12 | P << 6 | Y : (_ & 7) << 18 | P << 12 | Y << 6 | o[f++] & 63, 65536 > _ ? v += String.fromCharCode(_) : (_ -= 65536, v += String.fromCharCode(55296 | _ >> 10, 56320 | _ & 1023));
            }
          } else
            v += String.fromCharCode(_);
        }
        return v;
      }
      function rn(o) {
        return o ? $e(g, o, void 0) : "";
      }
      function je(o, f, d, v) {
        if (!(0 < v))
          return 0;
        var _ = d;
        v = d + v - 1;
        for (var P = 0; P < o.length; ++P) {
          var Y = o.charCodeAt(P);
          if (55296 <= Y && 57343 >= Y) {
            var le = o.charCodeAt(++P);
            Y = 65536 + ((Y & 1023) << 10) | le & 1023;
          }
          if (127 >= Y) {
            if (d >= v)
              break;
            f[d++] = Y;
          } else {
            if (2047 >= Y) {
              if (d + 1 >= v)
                break;
              f[d++] = 192 | Y >> 6;
            } else {
              if (65535 >= Y) {
                if (d + 2 >= v)
                  break;
                f[d++] = 224 | Y >> 12;
              } else {
                if (d + 3 >= v)
                  break;
                f[d++] = 240 | Y >> 18, f[d++] = 128 | Y >> 12 & 63;
              }
              f[d++] = 128 | Y >> 6 & 63;
            }
            f[d++] = 128 | Y & 63;
          }
        }
        return f[d] = 0, d - _;
      }
      function ke(o) {
        for (var f = 0, d = 0; d < o.length; ++d) {
          var v = o.charCodeAt(d);
          55296 <= v && 57343 >= v && (v = 65536 + ((v & 1023) << 10) | o.charCodeAt(++d) & 1023), 127 >= v ? ++f : f = 2047 >= v ? f + 2 : 65535 >= v ? f + 3 : f + 4;
        }
        return f;
      }
      var U, Q, g, R, I;
      function ie() {
        var o = Pn.buffer;
        U = o, h.HEAP8 = Q = new Int8Array(o), h.HEAP16 = R = new Int16Array(o), h.HEAP32 = I = new Int32Array(o), h.HEAPU8 = g = new Uint8Array(o), h.HEAPU16 = new Uint16Array(o), h.HEAPU32 = new Uint32Array(o), h.HEAPF32 = new Float32Array(o), h.HEAPF64 = new Float64Array(o);
      }
      var b, ve = [], ue = [], he = [];
      function fe() {
        var o = h.preRun.shift();
        ve.unshift(o);
      }
      var Ne = 0, Yt = null;
      h.preloadedImages = {}, h.preloadedAudios = {};
      function De(o) {
        throw h.onAbort && h.onAbort(o), o = "Aborted(" + o + ")", Re(o), Tn = !0, o = new WebAssembly.RuntimeError(o + ". Build with -s ASSERTIONS=1 for more info."), L(o), o;
      }
      function fi() {
        return Qe.startsWith("data:application/octet-stream;base64,");
      }
      var Qe;
      if (Qe = "highs.wasm", !fi()) {
        var _r = Qe;
        Qe = h.locateFile ? h.locateFile(_r, te) : te + _r;
      }
      function ci() {
        var o = Qe;
        try {
          if (o == Qe && Be)
            return new Uint8Array(Be);
          if (Ze)
            return Ze(o);
          throw "both async and sync fetching of the wasm failed";
        } catch (f) {
          De(f);
        }
      }
      function il() {
        if (!Be && (me || Se)) {
          if (typeof fetch == "function" && !Qe.startsWith("file://"))
            return fetch(Qe, { credentials: "same-origin" }).then(function(o) {
              if (!o.ok)
                throw "failed to load wasm binary file at '" + Qe + "'";
              return o.arrayBuffer();
            }).catch(function() {
              return ci();
            });
          if (tn)
            return new Promise(function(o, f) {
              tn(Qe, function(d) {
                o(new Uint8Array(d));
              }, f);
            });
        }
        return Promise.resolve().then(function() {
          return ci();
        });
      }
      var $n, Cr;
      function $t(o) {
        for (; 0 < o.length; ) {
          var f = o.shift();
          if (typeof f == "function")
            f(h);
          else {
            var d = f.Oa;
            typeof d == "number" ? f.ga === void 0 ? b.get(d)() : b.get(d)(f.ga) : d(f.ga === void 0 ? null : f.ga);
          }
        }
      }
      function Qt(o) {
        this.Y = o - 16, this.Ha = function(f) {
          I[this.Y + 4 >> 2] = f;
        }, this.Ea = function(f) {
          I[this.Y + 8 >> 2] = f;
        }, this.Fa = function() {
          I[this.Y >> 2] = 0;
        }, this.Da = function() {
          Q[this.Y + 12 >> 0] = 0;
        }, this.Ga = function() {
          Q[this.Y + 13 >> 0] = 0;
        }, this.xa = function(f, d) {
          this.Ha(f), this.Ea(d), this.Fa(), this.Da(), this.Ga();
        };
      }
      function Qn(o, f) {
        for (var d = 0, v = o.length - 1; 0 <= v; v--) {
          var _ = o[v];
          _ === "." ? o.splice(v, 1) : _ === ".." ? (o.splice(v, 1), d++) : d && (o.splice(v, 1), d--);
        }
        if (f)
          for (; d; d--)
            o.unshift("..");
        return o;
      }
      function vt(o) {
        var f = o.charAt(0) === "/", d = o.substr(-1) === "/";
        return (o = Qn(o.split("/").filter(function(v) {
          return !!v;
        }), !f).join("/")) || f || (o = "."), o && d && (o += "/"), (f ? "/" : "") + o;
      }
      function ll(o) {
        var f = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(o).slice(1);
        return o = f[0], f = f[1], !o && !f ? "." : (f && (f = f.substr(0, f.length - 1)), o + f);
      }
      function di(o) {
        if (o === "/")
          return "/";
        o = vt(o), o = o.replace(/\/$/, "");
        var f = o.lastIndexOf("/");
        return f === -1 ? o : o.substr(f + 1);
      }
      function ol() {
        if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
          var o = new Uint8Array(1);
          return function() {
            return crypto.getRandomValues(o), o[0];
          };
        }
        if (pe)
          try {
            var f = bu;
            return function() {
              return f.randomBytes(1)[0];
            };
          } catch {
          }
        return function() {
          De("randomDevice");
        };
      }
      function Kt() {
        for (var o = "", f = !1, d = arguments.length - 1; -1 <= d && !f; d--) {
          if (f = 0 <= d ? arguments[d] : "/", typeof f != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!f)
            return "";
          o = f + "/" + o, f = f.charAt(0) === "/";
        }
        return o = Qn(o.split("/").filter(function(v) {
          return !!v;
        }), !f).join("/"), (f ? "/" : "") + o || ".";
      }
      var Pr = [];
      function Xt(o, f) {
        Pr[o] = { input: [], output: [], X: f }, Si(o, ul);
      }
      var ul = { open: function(o) {
        var f = Pr[o.node.rdev];
        if (!f)
          throw new O(43);
        o.tty = f, o.seekable = !1;
      }, close: function(o) {
        o.tty.X.flush(o.tty);
      }, flush: function(o) {
        o.tty.X.flush(o.tty);
      }, read: function(o, f, d, v) {
        if (!o.tty || !o.tty.X.pa)
          throw new O(60);
        for (var _ = 0, P = 0; P < v; P++) {
          try {
            var Y = o.tty.X.pa(o.tty);
          } catch {
            throw new O(29);
          }
          if (Y === void 0 && _ === 0)
            throw new O(6);
          if (Y == null)
            break;
          _++, f[d + P] = Y;
        }
        return _ && (o.node.timestamp = Date.now()), _;
      }, write: function(o, f, d, v) {
        if (!o.tty || !o.tty.X.ia)
          throw new O(60);
        try {
          for (var _ = 0; _ < v; _++)
            o.tty.X.ia(o.tty, f[d + _]);
        } catch {
          throw new O(29);
        }
        return v && (o.node.timestamp = Date.now()), _;
      } }, Gt = { pa: function(o) {
        if (!o.input.length) {
          var f = null;
          if (pe) {
            f = M.alloc(256);
            var d = 0;
            try {
              d = _e.readSync(Sr.stdin.fd, f, 0, 256, null);
            } catch (v) {
              if (v.toString().includes("EOF"))
                d = 0;
              else
                throw v;
            }
            f = 0 < d ? f.slice(0, d).toString("utf-8") : null;
          } else
            typeof window < "u" && typeof window.prompt == "function" ? (f = window.prompt("Input: "), f !== null && (f += `
`)) : typeof readline == "function" && (f = readline(), f !== null && (f += `
`));
          if (!f)
            return null;
          o.input = xt(f, !0);
        }
        return o.input.shift();
      }, ia: function(o, f) {
        f === null || f === 10 ? (Ue($e(o.output, 0)), o.output = []) : f != 0 && o.output.push(f);
      }, flush: function(o) {
        o.output && 0 < o.output.length && (Ue($e(o.output, 0)), o.output = []);
      } }, Zt = { ia: function(o, f) {
        f === null || f === 10 ? (Re($e(o.output, 0)), o.output = []) : f != 0 && o.output.push(f);
      }, flush: function(o) {
        o.output && 0 < o.output.length && (Re($e(o.output, 0)), o.output = []);
      } }, q = { R: null, T: function() {
        return q.createNode(null, "/", 16895, 0);
      }, createNode: function(o, f, d, v) {
        if ((d & 61440) === 24576 || (d & 61440) === 4096)
          throw new O(63);
        return q.R || (q.R = { dir: { node: { U: q.M.U, S: q.M.S, lookup: q.M.lookup, aa: q.M.aa, rename: q.M.rename, unlink: q.M.unlink, rmdir: q.M.rmdir, readdir: q.M.readdir, symlink: q.M.symlink }, stream: { W: q.N.W } }, file: { node: { U: q.M.U, S: q.M.S }, stream: { W: q.N.W, read: q.N.read, write: q.N.write, ka: q.N.ka, qa: q.N.qa, sa: q.N.sa } }, link: { node: { U: q.M.U, S: q.M.S, readlink: q.M.readlink }, stream: {} }, la: { node: { U: q.M.U, S: q.M.S }, stream: nr } }), d = vi(o, f, d, v), (d.mode & 61440) === 16384 ? (d.M = q.R.dir.node, d.N = q.R.dir.stream, d.L = {}) : (d.mode & 61440) === 32768 ? (d.M = q.R.file.node, d.N = q.R.file.stream, d.O = 0, d.L = null) : (d.mode & 61440) === 40960 ? (d.M = q.R.link.node, d.N = q.R.link.stream) : (d.mode & 61440) === 8192 && (d.M = q.R.la.node, d.N = q.R.la.stream), d.timestamp = Date.now(), o && (o.L[f] = d, o.timestamp = d.timestamp), d;
      }, Pa: function(o) {
        return o.L ? o.L.subarray ? o.L.subarray(0, o.O) : new Uint8Array(o.L) : new Uint8Array(0);
      }, ma: function(o, f) {
        var d = o.L ? o.L.length : 0;
        d >= f || (f = Math.max(f, d * (1048576 > d ? 2 : 1.125) >>> 0), d != 0 && (f = Math.max(
          f,
          256
        )), d = o.L, o.L = new Uint8Array(f), 0 < o.O && o.L.set(d.subarray(0, o.O), 0));
      }, Ba: function(o, f) {
        if (o.O != f)
          if (f == 0)
            o.L = null, o.O = 0;
          else {
            var d = o.L;
            o.L = new Uint8Array(f), d && o.L.set(d.subarray(0, Math.min(f, o.O))), o.O = f;
          }
      }, M: { U: function(o) {
        var f = {};
        return f.dev = (o.mode & 61440) === 8192 ? o.id : 1, f.ino = o.id, f.mode = o.mode, f.nlink = 1, f.uid = 0, f.gid = 0, f.rdev = o.rdev, f.size = (o.mode & 61440) === 16384 ? 4096 : (o.mode & 61440) === 32768 ? o.O : (o.mode & 61440) === 40960 ? o.link.length : 0, f.atime = new Date(o.timestamp), f.mtime = new Date(o.timestamp), f.ctime = new Date(o.timestamp), f.va = 4096, f.blocks = Math.ceil(f.size / f.va), f;
      }, S: function(o, f) {
        f.mode !== void 0 && (o.mode = f.mode), f.timestamp !== void 0 && (o.timestamp = f.timestamp), f.size !== void 0 && q.Ba(o, f.size);
      }, lookup: function() {
        throw qt[44];
      }, aa: function(o, f, d, v) {
        return q.createNode(o, f, d, v);
      }, rename: function(o, f, d) {
        if ((o.mode & 61440) === 16384) {
          try {
            var v = bt(f, d);
          } catch {
          }
          if (v)
            for (var _ in v.L)
              throw new O(55);
        }
        delete o.parent.L[o.name], o.parent.timestamp = Date.now(), o.name = d, f.L[d] = o, f.timestamp = o.parent.timestamp, o.parent = f;
      }, unlink: function(o, f) {
        delete o.L[f], o.timestamp = Date.now();
      }, rmdir: function(o, f) {
        var d = bt(o, f), v;
        for (v in d.L)
          throw new O(55);
        delete o.L[f], o.timestamp = Date.now();
      }, readdir: function(o) {
        var f = [".", ".."], d;
        for (d in o.L)
          o.L.hasOwnProperty(d) && f.push(d);
        return f;
      }, symlink: function(o, f, d) {
        return o = q.createNode(o, f, 41471, 0), o.link = d, o;
      }, readlink: function(o) {
        if ((o.mode & 61440) !== 40960)
          throw new O(28);
        return o.link;
      } }, N: { read: function(o, f, d, v, _) {
        var P = o.node.L;
        if (_ >= o.node.O)
          return 0;
        if (o = Math.min(o.node.O - _, v), 8 < o && P.subarray)
          f.set(P.subarray(_, _ + o), d);
        else
          for (v = 0; v < o; v++)
            f[d + v] = P[_ + v];
        return o;
      }, write: function(o, f, d, v, _, P) {
        if (f.buffer === Q.buffer && (P = !1), !v)
          return 0;
        if (o = o.node, o.timestamp = Date.now(), f.subarray && (!o.L || o.L.subarray)) {
          if (P)
            return o.L = f.subarray(d, d + v), o.O = v;
          if (o.O === 0 && _ === 0)
            return o.L = f.slice(d, d + v), o.O = v;
          if (_ + v <= o.O)
            return o.L.set(f.subarray(d, d + v), _), v;
        }
        if (q.ma(o, _ + v), o.L.subarray && f.subarray)
          o.L.set(f.subarray(d, d + v), _);
        else
          for (P = 0; P < v; P++)
            o.L[_ + P] = f[d + P];
        return o.O = Math.max(o.O, _ + v), v;
      }, W: function(o, f, d) {
        if (d === 1 ? f += o.position : d === 2 && (o.node.mode & 61440) === 32768 && (f += o.node.O), 0 > f)
          throw new O(28);
        return f;
      }, ka: function(o, f, d) {
        q.ma(o.node, f + d), o.node.O = Math.max(o.node.O, f + d);
      }, qa: function(o, f, d, v, _, P) {
        if (f !== 0)
          throw new O(28);
        if ((o.node.mode & 61440) !== 32768)
          throw new O(43);
        if (o = o.node.L, P & 2 || o.buffer !== U) {
          if ((0 < v || v + d < o.length) && (o = o.subarray ? o.subarray(v, v + d) : Array.prototype.slice.call(o, v, v + d)), v = !0, De(), d = void 0, !d)
            throw new O(48);
          Q.set(o, d);
        } else
          v = !1, d = o.byteOffset;
        return {
          Y: d,
          Na: v
        };
      }, sa: function(o, f, d, v, _) {
        if ((o.node.mode & 61440) !== 32768)
          throw new O(43);
        return _ & 2 || q.N.write(o, f, 0, v, d, !1), 0;
      } } }, Tr = null, pi = {}, Jt = [], hi = 1, nt = null, Rr = !0, O = null, qt = {};
      function an(o, f) {
        if (o = Kt("/", o), f = f || {}, !o)
          return { path: "", node: null };
        var d = { oa: !0, ja: 0 }, v;
        for (v in d)
          f[v] === void 0 && (f[v] = d[v]);
        if (8 < f.ja)
          throw new O(32);
        o = Qn(o.split("/").filter(function(Y) {
          return !!Y;
        }), !1);
        var _ = Tr;
        for (d = "/", v = 0; v < o.length; v++) {
          var P = v === o.length - 1;
          if (P && f.parent)
            break;
          if (_ = bt(_, o[v]), d = vt(d + "/" + o[v]), _.ba && (!P || P && f.oa) && (_ = _.ba.root), !P || f.na) {
            for (P = 0; (_.mode & 61440) === 40960; )
              if (_ = Eo(d), d = Kt(ll(d), _), _ = an(d, { ja: f.ja }).node, 40 < P++)
                throw new O(32);
          }
        }
        return { path: d, node: _ };
      }
      function tt(o) {
        for (var f; ; ) {
          if (o === o.parent)
            return o = o.T.ra, f ? o[o.length - 1] !== "/" ? o + "/" + f : o + f : o;
          f = f ? o.name + "/" + f : o.name, o = o.parent;
        }
      }
      function mi(o, f) {
        for (var d = 0, v = 0; v < f.length; v++)
          d = (d << 5) - d + f.charCodeAt(v) | 0;
        return (o + d >>> 0) % nt.length;
      }
      function bt(o, f) {
        var d;
        if (d = (d = yt(o, "x")) ? d : o.M.lookup ? 0 : 2)
          throw new O(d, o);
        for (d = nt[mi(o.id, f)]; d; d = d.Aa) {
          var v = d.name;
          if (d.parent.id === o.id && v === f)
            return d;
        }
        return o.M.lookup(o, f);
      }
      function vi(o, f, d, v) {
        return o = new rr(o, f, d, v), f = mi(o.parent.id, o.name), o.Aa = nt[f], nt[f] = o;
      }
      var sl = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 };
      function yi(o) {
        var f = ["r", "w", "rw"][o & 3];
        return o & 512 && (f += "w"), f;
      }
      function yt(o, f) {
        if (Rr)
          return 0;
        if (!f.includes("r") || o.mode & 292) {
          if (f.includes("w") && !(o.mode & 146) || f.includes("x") && !(o.mode & 73))
            return 2;
        } else
          return 2;
        return 0;
      }
      function gi(o, f) {
        try {
          return bt(o, f), 20;
        } catch {
        }
        return yt(o, "wx");
      }
      function er(o) {
        var f = 4096;
        for (o = o || 0; o <= f; o++)
          if (!Jt[o])
            return o;
        throw new O(33);
      }
      function wi(o, f) {
        ge || (ge = function() {
        }, ge.prototype = { object: { get: function() {
          return this.node;
        }, set: function(_) {
          this.node = _;
        } } });
        var d = new ge(), v;
        for (v in o)
          d[v] = o[v];
        return o = d, f = er(f), o.fd = f, Jt[f] = o;
      }
      var nr = { open: function(o) {
        o.N = pi[o.node.rdev].N, o.N.open && o.N.open(o);
      }, W: function() {
        throw new O(70);
      } };
      function Si(o, f) {
        pi[o] = { N: f };
      }
      function gt(o, f) {
        var d = f === "/", v = !f;
        if (d && Tr)
          throw new O(10);
        if (!d && !v) {
          var _ = an(f, { oa: !1 });
          if (f = _.path, _ = _.node, _.ba)
            throw new O(10);
          if ((_.mode & 61440) !== 16384)
            throw new O(54);
        }
        f = { type: o, Qa: {}, ra: f, za: [] }, o = o.T(f), o.T = f, f.root = o, d ? Tr = o : _ && (_.ba = f, _.T && _.T.za.push(f));
      }
      function wt(o, f, d) {
        var v = an(o, { parent: !0 }).node;
        if (o = di(o), !o || o === "." || o === "..")
          throw new O(28);
        var _ = gi(v, o);
        if (_)
          throw new O(_);
        if (!v.M.aa)
          throw new O(63);
        return v.M.aa(v, o, f, d);
      }
      function fn(o) {
        return wt(o, 16895, 0);
      }
      function St(o, f, d) {
        typeof d > "u" && (d = f, f = 438), wt(o, f | 8192, d);
      }
      function ki(o, f) {
        if (!Kt(o))
          throw new O(44);
        var d = an(f, { parent: !0 }).node;
        if (!d)
          throw new O(44);
        f = di(f);
        var v = gi(d, f);
        if (v)
          throw new O(v);
        if (!d.M.symlink)
          throw new O(63);
        d.M.symlink(d, f, o);
      }
      function Eo(o) {
        if (o = an(o).node, !o)
          throw new O(44);
        if (!o.M.readlink)
          throw new O(28);
        return Kt(tt(o.parent), o.M.readlink(o));
      }
      function kt(o, f, d, v) {
        if (o === "")
          throw new O(44);
        if (typeof f == "string") {
          var _ = sl[f];
          if (typeof _ > "u")
            throw Error("Unknown file open mode: " + f);
          f = _;
        }
        if (d = f & 64 ? (typeof d > "u" ? 438 : d) & 4095 | 32768 : 0, typeof o == "object")
          var P = o;
        else {
          o = vt(o);
          try {
            P = an(o, { na: !(f & 131072) }).node;
          } catch {
          }
        }
        if (_ = !1, f & 64)
          if (P) {
            if (f & 128)
              throw new O(20);
          } else
            P = wt(o, d, 0), _ = !0;
        if (!P)
          throw new O(44);
        if ((P.mode & 61440) === 8192 && (f &= -513), f & 65536 && (P.mode & 61440) !== 16384)
          throw new O(54);
        if (!_ && (d = P ? (P.mode & 61440) === 40960 ? 32 : (P.mode & 61440) === 16384 && (yi(f) !== "r" || f & 512) ? 31 : yt(P, yi(f)) : 44))
          throw new O(d);
        if (f & 512) {
          if (d = P, d = typeof d == "string" ? an(d, { na: !0 }).node : d, !d.M.S)
            throw new O(63);
          if ((d.mode & 61440) === 16384)
            throw new O(31);
          if ((d.mode & 61440) !== 32768)
            throw new O(28);
          if (_ = yt(d, "w"))
            throw new O(_);
          d.M.S(d, { size: 0, timestamp: Date.now() });
        }
        return f &= -131713, v = wi({ node: P, path: tt(P), flags: f, seekable: !0, position: 0, N: P.N, Ma: [], error: !1 }, v), v.N.open && v.N.open(v), !h.logReadFiles || f & 1 || (Fr || (Fr = {}), o in Fr || (Fr[o] = 1)), v;
      }
      function Kn(o) {
        if (o.fd === null)
          throw new O(8);
        o.ha && (o.ha = null);
        try {
          o.N.close && o.N.close(o);
        } catch (f) {
          throw f;
        } finally {
          Jt[o.fd] = null;
        }
        o.fd = null;
      }
      function Ei(o, f, d) {
        if (o.fd === null)
          throw new O(8);
        if (!o.seekable || !o.N.W)
          throw new O(70);
        if (d != 0 && d != 1 && d != 2)
          throw new O(28);
        o.position = o.N.W(o, f, d), o.Ma = [];
      }
      function Nr(o, f, d, v, _) {
        var P = void 0;
        if (0 > v || 0 > P)
          throw new O(28);
        if (o.fd === null)
          throw new O(8);
        if (!(o.flags & 2097155))
          throw new O(8);
        if ((o.node.mode & 61440) === 16384)
          throw new O(31);
        if (!o.N.write)
          throw new O(28);
        o.seekable && o.flags & 1024 && Ei(o, 0, 2);
        var Y = typeof P < "u";
        if (!Y)
          P = o.position;
        else if (!o.seekable)
          throw new O(70);
        return f = o.N.write(o, f, d, v, P, _), Y || (o.position += f), f;
      }
      function xo(o) {
        var f = f || {};
        f.flags = f.flags || 577;
        var d = kt("m.lp", f.flags, f.mode);
        if (typeof o == "string") {
          var v = new Uint8Array(ke(o) + 1);
          o = je(o, v, 0, v.length), Nr(d, v, 0, o, f.wa);
        } else if (ArrayBuffer.isView(o))
          Nr(d, o, 0, o.byteLength, f.wa);
        else
          throw Error("Unsupported data type");
        Kn(d);
      }
      function xi() {
        O || (O = function(o, f) {
          this.node = f, this.Ca = function(d) {
            this.V = d;
          }, this.Ca(o), this.message = "FS error";
        }, O.prototype = Error(), O.prototype.constructor = O, [44].forEach(function(o) {
          qt[o] = new O(o), qt[o].stack = "<generic error, no stack>";
        }));
      }
      var _i;
      function al(o, f) {
        var d = 0;
        return o && (d |= 365), f && (d |= 146), d;
      }
      function Et(o, f, d) {
        o = vt("/dev/" + o);
        var v = al(!!f, !!d);
        Ci || (Ci = 64);
        var _ = Ci++ << 8 | 0;
        Si(_, { open: function(P) {
          P.seekable = !1;
        }, close: function() {
          d && d.buffer && d.buffer.length && d(10);
        }, read: function(P, Y, le, Fe) {
          for (var ne = 0, se = 0; se < Fe; se++) {
            try {
              var Ke = f();
            } catch {
              throw new O(29);
            }
            if (Ke === void 0 && ne === 0)
              throw new O(6);
            if (Ke == null)
              break;
            ne++, Y[le + se] = Ke;
          }
          return ne && (P.node.timestamp = Date.now()), ne;
        }, write: function(P, Y, le, Fe) {
          for (var ne = 0; ne < Fe; ne++)
            try {
              d(Y[le + ne]);
            } catch {
              throw new O(29);
            }
          return Fe && (P.node.timestamp = Date.now()), ne;
        } }), St(o, v, _);
      }
      var Ci, rt = {}, ge, Fr, it = void 0;
      function lt() {
        return it += 4, I[it - 4 >> 2];
      }
      function In(o) {
        if (o = Jt[o], !o)
          throw new O(8);
        return o;
      }
      var fl;
      fl = pe ? function() {
        var o = Sr.hrtime();
        return 1e3 * o[0] + o[1] / 1e6;
      } : function() {
        return performance.now();
      };
      var Mr = {};
      function tr() {
        if (!cn) {
          var o = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: ee || "./this.program" }, f;
          for (f in Mr)
            Mr[f] === void 0 ? delete o[f] : o[f] = Mr[f];
          var d = [];
          for (f in o)
            d.push(f + "=" + o[f]);
          cn = d;
        }
        return cn;
      }
      var cn;
      function Dr(o) {
        return o % 4 === 0 && (o % 100 !== 0 || o % 400 === 0);
      }
      function ln(o, f) {
        for (var d = 0, v = 0; v <= f; d += o[v++])
          ;
        return d;
      }
      var Ar = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Lr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function zr(o, f) {
        for (o = new Date(o.getTime()); 0 < f; ) {
          var d = o.getMonth(), v = (Dr(o.getFullYear()) ? Ar : Lr)[d];
          if (f > v - o.getDate())
            f -= v - o.getDate() + 1, o.setDate(1), 11 > d ? o.setMonth(d + 1) : (o.setMonth(0), o.setFullYear(o.getFullYear() + 1));
          else {
            o.setDate(o.getDate() + f);
            break;
          }
        }
        return o;
      }
      function Ir(o, f, d, v) {
        function _(T, re, ye) {
          for (T = typeof T == "number" ? T.toString() : T || ""; T.length < re; )
            T = ye[0] + T;
          return T;
        }
        function P(T, re) {
          return _(T, re, "0");
        }
        function Y(T, re) {
          function ye(Ni) {
            return 0 > Ni ? -1 : 0 < Ni ? 1 : 0;
          }
          var on;
          return (on = ye(T.getFullYear() - re.getFullYear())) === 0 && (on = ye(T.getMonth() - re.getMonth())) === 0 && (on = ye(T.getDate() - re.getDate())), on;
        }
        function le(T) {
          switch (T.getDay()) {
            case 0:
              return new Date(T.getFullYear() - 1, 11, 29);
            case 1:
              return T;
            case 2:
              return new Date(T.getFullYear(), 0, 3);
            case 3:
              return new Date(
                T.getFullYear(),
                0,
                2
              );
            case 4:
              return new Date(T.getFullYear(), 0, 1);
            case 5:
              return new Date(T.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(T.getFullYear() - 1, 11, 30);
          }
        }
        function Fe(T) {
          T = zr(new Date(T.P + 1900, 0, 1), T.fa);
          var re = new Date(T.getFullYear() + 1, 0, 4), ye = le(new Date(T.getFullYear(), 0, 4));
          return re = le(re), 0 >= Y(ye, T) ? 0 >= Y(re, T) ? T.getFullYear() + 1 : T.getFullYear() : T.getFullYear() - 1;
        }
        var ne = I[v + 40 >> 2];
        v = { Ka: I[v >> 2], Ja: I[v + 4 >> 2], da: I[v + 8 >> 2], $: I[v + 12 >> 2], Z: I[v + 16 >> 2], P: I[v + 20 >> 2], ea: I[v + 24 >> 2], fa: I[v + 28 >> 2], Ra: I[v + 32 >> 2], Ia: I[v + 36 >> 2], La: ne ? rn(ne) : "" }, d = rn(d), ne = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
        for (var se in ne)
          d = d.replace(new RegExp(se, "g"), ne[se]);
        var Ke = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), Pt = "January February March April May June July August September October November December".split(" ");
        ne = {
          "%a": function(T) {
            return Ke[T.ea].substring(0, 3);
          },
          "%A": function(T) {
            return Ke[T.ea];
          },
          "%b": function(T) {
            return Pt[T.Z].substring(0, 3);
          },
          "%B": function(T) {
            return Pt[T.Z];
          },
          "%C": function(T) {
            return P((T.P + 1900) / 100 | 0, 2);
          },
          "%d": function(T) {
            return P(T.$, 2);
          },
          "%e": function(T) {
            return _(T.$, 2, " ");
          },
          "%g": function(T) {
            return Fe(T).toString().substring(2);
          },
          "%G": function(T) {
            return Fe(T);
          },
          "%H": function(T) {
            return P(T.da, 2);
          },
          "%I": function(T) {
            return T = T.da, T == 0 ? T = 12 : 12 < T && (T -= 12), P(T, 2);
          },
          "%j": function(T) {
            return P(T.$ + ln(Dr(T.P + 1900) ? Ar : Lr, T.Z - 1), 3);
          },
          "%m": function(T) {
            return P(T.Z + 1, 2);
          },
          "%M": function(T) {
            return P(T.Ja, 2);
          },
          "%n": function() {
            return `
`;
          },
          "%p": function(T) {
            return 0 <= T.da && 12 > T.da ? "AM" : "PM";
          },
          "%S": function(T) {
            return P(T.Ka, 2);
          },
          "%t": function() {
            return "	";
          },
          "%u": function(T) {
            return T.ea || 7;
          },
          "%U": function(T) {
            var re = new Date(T.P + 1900, 0, 1), ye = re.getDay() === 0 ? re : zr(re, 7 - re.getDay());
            return T = new Date(T.P + 1900, T.Z, T.$), 0 > Y(ye, T) ? P(Math.ceil((31 - ye.getDate() + (ln(Dr(T.getFullYear()) ? Ar : Lr, T.getMonth() - 1) - 31) + T.getDate()) / 7), 2) : Y(ye, re) === 0 ? "01" : "00";
          },
          "%V": function(T) {
            var re = new Date(T.P + 1901, 0, 4), ye = le(new Date(T.P + 1900, 0, 4));
            re = le(re);
            var on = zr(new Date(T.P + 1900, 0, 1), T.fa);
            return 0 > Y(on, ye) ? "53" : 0 >= Y(re, on) ? "01" : P(Math.ceil((ye.getFullYear() < T.P + 1900 ? T.fa + 32 - ye.getDate() : T.fa + 1 - ye.getDate()) / 7), 2);
          },
          "%w": function(T) {
            return T.ea;
          },
          "%W": function(T) {
            var re = new Date(T.P, 0, 1), ye = re.getDay() === 1 ? re : zr(re, re.getDay() === 0 ? 1 : 7 - re.getDay() + 1);
            return T = new Date(T.P + 1900, T.Z, T.$), 0 > Y(ye, T) ? P(Math.ceil((31 - ye.getDate() + (ln(Dr(T.getFullYear()) ? Ar : Lr, T.getMonth() - 1) - 31) + T.getDate()) / 7), 2) : Y(ye, re) === 0 ? "01" : "00";
          },
          "%y": function(T) {
            return (T.P + 1900).toString().substring(2);
          },
          "%Y": function(T) {
            return T.P + 1900;
          },
          "%z": function(T) {
            T = T.Ia;
            var re = 0 <= T;
            return T = Math.abs(T) / 60, (re ? "+" : "-") + ("0000" + (T / 60 * 100 + T % 60)).slice(-4);
          },
          "%Z": function(T) {
            return T.La;
          },
          "%%": function() {
            return "%";
          }
        };
        for (se in ne)
          d.includes(se) && (d = d.replace(new RegExp(se, "g"), ne[se](v)));
        return se = xt(d, !1), se.length > f ? 0 : (Q.set(se, o), se.length - 1);
      }
      function rr(o, f, d, v) {
        o || (o = this), this.parent = o, this.T = o.T, this.ba = null, this.id = hi++, this.name = f, this.mode = d, this.M = {}, this.N = {}, this.rdev = v;
      }
      Object.defineProperties(rr.prototype, { read: { get: function() {
        return (this.mode & 365) === 365;
      }, set: function(o) {
        o ? this.mode |= 365 : this.mode &= -366;
      } }, write: { get: function() {
        return (this.mode & 146) === 146;
      }, set: function(o) {
        o ? this.mode |= 146 : this.mode &= -147;
      } } }), xi(), nt = Array(4096), gt(q, "/"), fn("/tmp"), fn("/home"), fn("/home/web_user"), function() {
        fn("/dev"), Si(259, { read: function() {
          return 0;
        }, write: function(f, d, v, _) {
          return _;
        } }), St("/dev/null", 259), Xt(1280, Gt), Xt(1536, Zt), St("/dev/tty", 1280), St("/dev/tty1", 1536);
        var o = ol();
        Et("random", o), Et("urandom", o), fn("/dev/shm"), fn("/dev/shm/tmp");
      }(), function() {
        fn("/proc");
        var o = fn("/proc/self");
        fn("/proc/self/fd"), gt({ T: function() {
          var f = vi(o, "fd", 16895, 73);
          return f.M = { lookup: function(d, v) {
            var _ = Jt[+v];
            if (!_)
              throw new O(8);
            return d = { parent: null, T: { ra: "fake" }, M: { readlink: function() {
              return _.path;
            } } }, d.parent = d;
          } }, f;
        } }, "/proc/self/fd");
      }();
      function xt(o, f) {
        var d = Array(ke(o) + 1);
        return o = je(o, d, 0, d.length), f && (d.length = o), d;
      }
      var Or = { a: function(o) {
        return ce(o + 16) + 16;
      }, q: function() {
      }, b: function(o, f, d) {
        throw new Qt(o).xa(f, d), o;
      }, e: function(o, f, d) {
        it = d;
        try {
          var v = In(o);
          switch (f) {
            case 0:
              var _ = lt();
              return 0 > _ ? -28 : kt(v.path, v.flags, 0, _).fd;
            case 1:
            case 2:
              return 0;
            case 3:
              return v.flags;
            case 4:
              return _ = lt(), v.flags |= _, 0;
            case 12:
              return _ = lt(), R[_ + 0 >> 1] = 2, 0;
            case 13:
            case 14:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return I[ir() >> 2] = 28, -1;
            default:
              return -28;
          }
        } catch (P) {
          return typeof rt < "u" && P instanceof O || De(P), -P.V;
        }
      }, i: function(o, f, d) {
        it = d;
        try {
          var v = In(o);
          switch (f) {
            case 21509:
            case 21505:
              return v.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return v.tty ? 0 : -59;
            case 21519:
              if (!v.tty)
                return -59;
              var _ = lt();
              return I[_ >> 2] = 0;
            case 21520:
              return v.tty ? -28 : -59;
            case 21531:
              if (o = _ = lt(), !v.N.ya)
                throw new O(59);
              return v.N.ya(v, f, o);
            case 21523:
              return v.tty ? 0 : -59;
            case 21524:
              return v.tty ? 0 : -59;
            default:
              De("bad ioctl syscall " + f);
          }
        } catch (P) {
          return typeof rt < "u" && P instanceof O || De(P), -P.V;
        }
      }, j: function(o, f, d) {
        it = d;
        try {
          var v = rn(o), _ = d ? lt() : 0;
          return kt(v, f, _).fd;
        } catch (P) {
          return typeof rt < "u" && P instanceof O || De(P), -P.V;
        }
      }, d: function() {
        De("");
      }, g: function(o, f) {
        if (o === 0)
          o = Date.now();
        else if (o === 1 || o === 4)
          o = fl();
        else
          return I[ir() >> 2] = 28, -1;
        return I[f >> 2] = o / 1e3 | 0, I[f + 4 >> 2] = o % 1e3 * 1e6 | 0, 0;
      }, l: function(o, f, d) {
        g.copyWithin(o, f, f + d);
      }, c: function(o) {
        var f = g.length;
        if (o >>>= 0, 2147483648 < o)
          return !1;
        for (var d = 1; 4 >= d; d *= 2) {
          var v = f * (1 + 0.2 / d);
          v = Math.min(v, o + 100663296), v = Math.max(o, v), 0 < v % 65536 && (v += 65536 - v % 65536);
          e: {
            try {
              Pn.grow(Math.min(
                2147483648,
                v
              ) - U.byteLength + 65535 >>> 16), ie();
              var _ = 1;
              break e;
            } catch {
            }
            _ = void 0;
          }
          if (_)
            return !0;
        }
        return !1;
      }, o: function(o, f) {
        var d = 0;
        return tr().forEach(function(v, _) {
          var P = f + d;
          for (_ = I[o + 4 * _ >> 2] = P, P = 0; P < v.length; ++P)
            Q[_++ >> 0] = v.charCodeAt(P);
          Q[_ >> 0] = 0, d += v.length + 1;
        }), 0;
      }, p: function(o, f) {
        var d = tr();
        I[o >> 2] = d.length;
        var v = 0;
        return d.forEach(function(_) {
          v += _.length + 1;
        }), I[f >> 2] = v, 0;
      }, f: function(o) {
        try {
          var f = In(o);
          return Kn(f), 0;
        } catch (d) {
          return typeof rt < "u" && d instanceof O || De(d), d.V;
        }
      }, h: function(o, f, d, v) {
        try {
          e: {
            for (var _ = In(o), P = o = 0; P < d; P++) {
              var Y = I[f + (8 * P + 4) >> 2], le = _, Fe = I[f + 8 * P >> 2], ne = Y, se = void 0, Ke = Q;
              if (0 > ne || 0 > se)
                throw new O(28);
              if (le.fd === null)
                throw new O(8);
              if ((le.flags & 2097155) === 1)
                throw new O(8);
              if ((le.node.mode & 61440) === 16384)
                throw new O(31);
              if (!le.N.read)
                throw new O(28);
              var Pt = typeof se < "u";
              if (!Pt)
                se = le.position;
              else if (!le.seekable)
                throw new O(70);
              var T = le.N.read(le, Ke, Fe, ne, se);
              Pt || (le.position += T);
              var re = T;
              if (0 > re) {
                var ye = -1;
                break e;
              }
              if (o += re, re < Y)
                break;
            }
            ye = o;
          }
          return I[v >> 2] = ye, 0;
        } catch (on) {
          return typeof rt < "u" && on instanceof O || De(on), on.V;
        }
      }, m: function(o, f, d, v, _) {
        try {
          var P = In(o);
          return o = 4294967296 * d + (f >>> 0), -9007199254740992 >= o || 9007199254740992 <= o ? -61 : (Ei(P, o, v), Cr = [P.position >>> 0, ($n = P.position, 1 <= +Math.abs($n) ? 0 < $n ? (Math.min(+Math.floor($n / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil(($n - +(~~$n >>> 0)) / 4294967296) >>> 0 : 0)], I[_ >> 2] = Cr[0], I[_ + 4 >> 2] = Cr[1], P.ha && o === 0 && v === 0 && (P.ha = null), 0);
        } catch (Y) {
          return typeof rt < "u" && Y instanceof O || De(Y), Y.V;
        }
      }, k: function(o, f, d, v) {
        try {
          e: {
            for (var _ = In(o), P = o = 0; P < d; P++) {
              var Y = Nr(
                _,
                Q,
                I[f + 8 * P >> 2],
                I[f + (8 * P + 4) >> 2]
              );
              if (0 > Y) {
                var le = -1;
                break e;
              }
              o += Y;
            }
            le = o;
          }
          return I[v >> 2] = le, 0;
        } catch (Fe) {
          return typeof rt < "u" && Fe instanceof O || De(Fe), Fe.V;
        }
      }, n: function(o, f, d, v) {
        return Ir(o, f, d, v);
      } };
      (function() {
        function o(_) {
          h.asm = _.exports, Pn = h.asm.r, ie(), b = h.asm.K, ue.unshift(h.asm.s), Ne--, h.monitorRunDependencies && h.monitorRunDependencies(Ne), Ne == 0 && Yt && (_ = Yt, Yt = null, _());
        }
        function f(_) {
          o(_.instance);
        }
        function d(_) {
          return il().then(function(P) {
            return WebAssembly.instantiate(P, v);
          }).then(function(P) {
            return P;
          }).then(_, function(P) {
            Re("failed to asynchronously prepare wasm: " + P), De(P);
          });
        }
        var v = { a: Or };
        if (Ne++, h.monitorRunDependencies && h.monitorRunDependencies(Ne), h.instantiateWasm)
          try {
            return h.instantiateWasm(
              v,
              o
            );
          } catch (_) {
            return Re("Module.instantiateWasm callback failed with error: " + _), !1;
          }
        return function() {
          return Be || typeof WebAssembly.instantiateStreaming != "function" || fi() || Qe.startsWith("file://") || typeof fetch != "function" ? d(f) : fetch(Qe, { credentials: "same-origin" }).then(function(_) {
            return WebAssembly.instantiateStreaming(_, v).then(f, function(P) {
              return Re("wasm streaming compile failed: " + P), Re("falling back to ArrayBuffer instantiation"), d(f);
            });
          });
        }().catch(L), {};
      })(), h.___wasm_call_ctors = function() {
        return (h.___wasm_call_ctors = h.asm.s).apply(null, arguments);
      };
      var cl = h._Highs_create = function() {
        return (cl = h._Highs_create = h.asm.t).apply(null, arguments);
      }, dl = h._Highs_destroy = function() {
        return (dl = h._Highs_destroy = h.asm.u).apply(null, arguments);
      }, Ur = h._Highs_run = function() {
        return (Ur = h._Highs_run = h.asm.v).apply(null, arguments);
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
      var Pi = h._Highs_getModelStatus = function() {
        return (Pi = h._Highs_getModelStatus = h.asm.D).apply(null, arguments);
      };
      h._Highs_call = function() {
        return (h._Highs_call = h.asm.E).apply(null, arguments);
      };
      var ir = h.___errno_location = function() {
        return (ir = h.___errno_location = h.asm.F).apply(null, arguments);
      }, _t = h.stackSave = function() {
        return (_t = h.stackSave = h.asm.G).apply(null, arguments);
      }, pl = h.stackRestore = function() {
        return (pl = h.stackRestore = h.asm.H).apply(null, arguments);
      }, lr = h.stackAlloc = function() {
        return (lr = h.stackAlloc = h.asm.I).apply(null, arguments);
      }, ce = h._malloc = function() {
        return (ce = h._malloc = h.asm.J).apply(null, arguments);
      };
      h.cwrap = function(o, f, d, v) {
        d = d || [];
        var _ = d.every(function(P) {
          return P === "number";
        });
        return f !== "string" && _ && !v ? Yn(o) : function() {
          return Rn(o, f, d, arguments);
        };
      };
      var or;
      Yt = function o() {
        or || Br(), or || (Yt = o);
      };
      function Br() {
        function o() {
          if (!or && (or = !0, h.calledRun = !0, !Tn)) {
            if (h.noFSInit || _i || (_i = !0, xi(), h.stdin = h.stdin, h.stdout = h.stdout, h.stderr = h.stderr, h.stdin ? Et("stdin", h.stdin) : ki("/dev/tty", "/dev/stdin"), h.stdout ? Et("stdout", null, h.stdout) : ki("/dev/tty", "/dev/stdout"), h.stderr ? Et("stderr", null, h.stderr) : ki("/dev/tty1", "/dev/stderr"), kt("/dev/stdin", 0), kt("/dev/stdout", 1), kt("/dev/stderr", 1)), Rr = !1, $t(ue), E(h), h.onRuntimeInitialized && h.onRuntimeInitialized(), h.postRun)
              for (typeof h.postRun == "function" && (h.postRun = [h.postRun]); h.postRun.length; ) {
                var f = h.postRun.shift();
                he.unshift(f);
              }
            $t(he);
          }
        }
        if (!(0 < Ne)) {
          if (h.preRun)
            for (typeof h.preRun == "function" && (h.preRun = [h.preRun]); h.preRun.length; )
              fe();
          $t(ve), 0 < Ne || (h.setStatus ? (h.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              h.setStatus("");
            }, 1), o();
          }, 1)) : o());
        }
      }
      if (h.run = Br, h.preInit)
        for (typeof h.preInit == "function" && (h.preInit = [h.preInit]); 0 < h.preInit.length; )
          h.preInit.pop()();
      Br(), h.ta = h.cwrap("Highs_readModel", "number", ["number", "string"]);
      const Ti = h.cwrap("Highs_setIntOptionValue", "number", ["number", "string", "number"]), hl = h.cwrap("Highs_setDoubleOptionValue", "number", ["number", "string", "number"]), ml = h.cwrap("Highs_setStringOptionValue", "number", ["number", "string", "string"]), vl = h.cwrap("Highs_setBoolOptionValue", "number", ["number", "string", "number"]);
      h.ua = h.cwrap("Highs_writeSolutionPretty", "number", ["number", "string"]);
      const Ri = { 0: "Not Set", 1: "Load error", 2: "Model error", 3: "Presolve error", 4: "Solve error", 5: "Postsolve error", 6: "Empty", 7: "Optimal", 8: "Infeasible", 9: "Primal infeasible or unbounded", 10: "Unbounded", 11: "Bound on objective reached", 12: "Target for objective reached", 13: "Time limit reached", 14: "Iteration limit reached", 15: "Unknown" };
      h.solve = function(o, f) {
        xo(o);
        const d = cl();
        kn(() => h.ta(d, "m.lp"), "read LP model (see http://web.mit.edu/lpsolve/doc/CPLEX-format.htm)"), o = f || {};
        for (const v in o) {
          const _ = o[v];
          f = typeof _;
          let P;
          if (f === "number")
            P = jr;
          else if (f === "boolean")
            P = vl;
          else if (f === "string")
            P = ml;
          else
            throw Error(`Unsupported option value type ${_} for '${v}'`);
          kn(() => P(d, v, _), `set option '${v}'`);
        }
        return kn(() => Ur(d), "solve the problem"), o = Ri[Pi(d, 0)] || "Unknown", A.length = 0, kn(() => h.ua(d, ""), "write and extract solution"), dl(d), o = ur(o), A.length = 0, X.length = 0, o;
      };
      function jr(o, f, d) {
        let v = hl(o, f, d);
        return v === -1 && d === (d | 0) && (v = Ti(o, f, d)), v;
      }
      function dn(o) {
        return o === "inf" ? 1 / 0 : o === "-inf" ? -1 / 0 : +o;
      }
      const Xn = { Index: (o) => parseInt(o), Lower: dn, Upper: dn, Primal: dn, Dual: dn };
      function On(o, f) {
        const d = f.match(/[^\s]+/g) || [], v = {};
        for (let P = 0; P < d.length; P++) {
          if (P >= o.length)
            throw Error("Unable to parse solution line: " + f);
          var _ = d[P];
          const Y = o[P], le = Xn[Y];
          _ = le ? le(_) : _, v[Y] = _;
        }
        return v;
      }
      function ur(o) {
        if (3 > A.length)
          throw Error("Unable to parse solution. Too few lines.");
        let f = Ct(A[1], A[2]);
        var d = !f.includes("Status") && f.includes("Dual"), v = !f.includes("Type") && !d;
        for (o = { Status: o, Columns: {}, Rows: [], IsLinear: v, IsQuadratic: d, ObjectiveValue: NaN }, d = 2; A[d] != "Rows"; d++)
          v = On(f, A[d]), o.Columns[v.Name] = v;
        for (f = Ct(A[d + 1], A[d + 2]), d += 2; A[d] != ""; d++)
          o.Rows.push(On(f, A[d]));
        return o.ObjectiveValue = dn(A[d + 3].match(/Objective value: (.+)/)[1]), o;
      }
      function Ct(o, f) {
        return [...o.matchAll(/[^\s]+/g)].filter((d) => f[d.index] !== " " || f[d.index + d[0].length - 1] !== " ").map((d) => d[0]);
      }
      function kn(o, f) {
        let d;
        try {
          d = o();
        } catch (v) {
          d = v;
        }
        if (d !== 0 && d !== 1)
          throw Error("Unable to " + f + ". HiGHS error " + d);
      }
      return y.ready;
    };
  }();
  a.exports = l;
})(rc);
var r0 = rc.exports;
const u0 = /* @__PURE__ */ ns(r0);
export {
  M as B,
  o0 as R,
  i0 as a,
  Sr as b,
  rl as g,
  u0 as h,
  l0 as j,
  Xd as n,
  ts as r
};
