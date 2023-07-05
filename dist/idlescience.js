function Ea(D) {
  return D && D.__esModule && Object.prototype.hasOwnProperty.call(D, "default") ? D.default : D;
}
var La = { exports: {} }, hr = {}, ja = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Tf() {
  if (Ma)
    return _;
  Ma = 1;
  var D = Symbol.for("react.element"), X = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Ee = Symbol.for("react.profiler"), Ae = Symbol.for("react.provider"), Le = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), Me = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), J = Symbol.iterator;
  function K(a) {
    return a === null || typeof a != "object" ? null : (a = J && a[J] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var Ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, G = {};
  function Y(a, h, j) {
    this.props = a, this.context = h, this.refs = G, this.updater = j || Ye;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, h, "setState");
  }, Y.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function hn() {
  }
  hn.prototype = Y.prototype;
  function sn(a, h, j) {
    this.props = a, this.context = h, this.refs = G, this.updater = j || Ye;
  }
  var Je = sn.prototype = new hn();
  Je.constructor = sn, Ve(Je, Y.prototype), Je.isPureReactComponent = !0;
  var ye = Array.isArray, qe = Object.prototype.hasOwnProperty, we = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(a, h, j) {
    var O, I = {}, W = null, R = null;
    if (h != null)
      for (O in h.ref !== void 0 && (R = h.ref), h.key !== void 0 && (W = "" + h.key), h)
        qe.call(h, O) && !je.hasOwnProperty(O) && (I[O] = h[O]);
    var V = arguments.length - 2;
    if (V === 1)
      I.children = j;
    else if (1 < V) {
      for (var U = Array(V), Ce = 0; Ce < V; Ce++)
        U[Ce] = arguments[Ce + 2];
      I.children = U;
    }
    if (a && a.defaultProps)
      for (O in V = a.defaultProps, V)
        I[O] === void 0 && (I[O] = V[O]);
    return { $$typeof: D, type: a, key: W, ref: R, props: I, _owner: we.current };
  }
  function jn(a, h) {
    return { $$typeof: D, type: a.type, key: h, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function vn(a) {
    return typeof a == "object" && a !== null && a.$$typeof === D;
  }
  function $n(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(j) {
      return h[j];
    });
  }
  var an = /\/+/g;
  function Pe(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? $n("" + a.key) : h.toString(36);
  }
  function be(a, h, j, O, I) {
    var W = typeof a;
    (W === "undefined" || W === "boolean") && (a = null);
    var R = !1;
    if (a === null)
      R = !0;
    else
      switch (W) {
        case "string":
        case "number":
          R = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case D:
            case X:
              R = !0;
          }
      }
    if (R)
      return R = a, I = I(R), a = O === "" ? "." + Pe(R, 0) : O, ye(I) ? (j = "", a != null && (j = a.replace(an, "$&/") + "/"), be(I, h, j, "", function(Ce) {
        return Ce;
      })) : I != null && (vn(I) && (I = jn(I, j + (!I.key || R && R.key === I.key ? "" : ("" + I.key).replace(an, "$&/") + "/") + a)), h.push(I)), 1;
    if (R = 0, O = O === "" ? "." : O + ":", ye(a))
      for (var V = 0; V < a.length; V++) {
        W = a[V];
        var U = O + Pe(W, V);
        R += be(W, h, j, U, I);
      }
    else if (U = K(a), typeof U == "function")
      for (a = U.call(a), V = 0; !(W = a.next()).done; )
        W = W.value, U = O + Pe(W, V++), R += be(W, h, j, U, I);
    else if (W === "object")
      throw h = String(a), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return R;
  }
  function cn(a, h, j) {
    if (a == null)
      return a;
    var O = [], I = 0;
    return be(a, O, "", "", function(W) {
      return h.call(j, W, I++);
    }), O;
  }
  function Te(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(function(j) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = j);
      }, function(j) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = j);
      }), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var ee = { current: null }, w = { transition: null }, x = { ReactCurrentDispatcher: ee, ReactCurrentBatchConfig: w, ReactCurrentOwner: we };
  return _.Children = { map: cn, forEach: function(a, h, j) {
    cn(a, function() {
      h.apply(this, arguments);
    }, j);
  }, count: function(a) {
    var h = 0;
    return cn(a, function() {
      h++;
    }), h;
  }, toArray: function(a) {
    return cn(a, function(h) {
      return h;
    }) || [];
  }, only: function(a) {
    if (!vn(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, _.Component = Y, _.Fragment = y, _.Profiler = Ee, _.PureComponent = sn, _.StrictMode = Xe, _.Suspense = Q, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x, _.cloneElement = function(a, h, j) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var O = Ve({}, a.props), I = a.key, W = a.ref, R = a._owner;
    if (h != null) {
      if (h.ref !== void 0 && (W = h.ref, R = we.current), h.key !== void 0 && (I = "" + h.key), a.type && a.type.defaultProps)
        var V = a.type.defaultProps;
      for (U in h)
        qe.call(h, U) && !je.hasOwnProperty(U) && (O[U] = h[U] === void 0 && V !== void 0 ? V[U] : h[U]);
    }
    var U = arguments.length - 2;
    if (U === 1)
      O.children = j;
    else if (1 < U) {
      V = Array(U);
      for (var Ce = 0; Ce < U; Ce++)
        V[Ce] = arguments[Ce + 2];
      O.children = V;
    }
    return { $$typeof: D, type: a.type, key: I, ref: W, props: O, _owner: R };
  }, _.createContext = function(a) {
    return a = { $$typeof: Le, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: Ae, _context: a }, a.Consumer = a;
  }, _.createElement = We, _.createFactory = function(a) {
    var h = We.bind(null, a);
    return h.type = a, h;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(a) {
    return { $$typeof: oe, render: a };
  }, _.isValidElement = vn, _.lazy = function(a) {
    return { $$typeof: pe, _payload: { _status: -1, _result: a }, _init: Te };
  }, _.memo = function(a, h) {
    return { $$typeof: Me, type: a, compare: h === void 0 ? null : h };
  }, _.startTransition = function(a) {
    var h = w.transition;
    w.transition = {};
    try {
      a();
    } finally {
      w.transition = h;
    }
  }, _.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _.useCallback = function(a, h) {
    return ee.current.useCallback(a, h);
  }, _.useContext = function(a) {
    return ee.current.useContext(a);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(a) {
    return ee.current.useDeferredValue(a);
  }, _.useEffect = function(a, h) {
    return ee.current.useEffect(a, h);
  }, _.useId = function() {
    return ee.current.useId();
  }, _.useImperativeHandle = function(a, h, j) {
    return ee.current.useImperativeHandle(a, h, j);
  }, _.useInsertionEffect = function(a, h) {
    return ee.current.useInsertionEffect(a, h);
  }, _.useLayoutEffect = function(a, h) {
    return ee.current.useLayoutEffect(a, h);
  }, _.useMemo = function(a, h) {
    return ee.current.useMemo(a, h);
  }, _.useReducer = function(a, h, j) {
    return ee.current.useReducer(a, h, j);
  }, _.useRef = function(a) {
    return ee.current.useRef(a);
  }, _.useState = function(a) {
    return ee.current.useState(a);
  }, _.useSyncExternalStore = function(a, h, j) {
    return ee.current.useSyncExternalStore(a, h, j);
  }, _.useTransition = function() {
    return ee.current.useTransition();
  }, _.version = "18.2.0", _;
}
ja.exports = Tf();
var Tl = ja.exports;
const Cf = /* @__PURE__ */ Ea(Tl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function xf() {
  if (wa)
    return hr;
  wa = 1;
  var D = Tl, X = Symbol.for("react.element"), y = Symbol.for("react.fragment"), Xe = Object.prototype.hasOwnProperty, Ee = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Le(oe, Q, Me) {
    var pe, J = {}, K = null, Ye = null;
    Me !== void 0 && (K = "" + Me), Q.key !== void 0 && (K = "" + Q.key), Q.ref !== void 0 && (Ye = Q.ref);
    for (pe in Q)
      Xe.call(Q, pe) && !Ae.hasOwnProperty(pe) && (J[pe] = Q[pe]);
    if (oe && oe.defaultProps)
      for (pe in Q = oe.defaultProps, Q)
        J[pe] === void 0 && (J[pe] = Q[pe]);
    return { $$typeof: X, type: oe, key: K, ref: Ye, props: J, _owner: Ee.current };
  }
  return hr.Fragment = y, hr.jsx = Le, hr.jsxs = Le, hr;
}
La.exports = xf();
var ke = La.exports, Ta = { exports: {} }, Oe = {}, Si = { exports: {} }, Ni = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function zf() {
  return Sa || (Sa = 1, function(D) {
    function X(w, x) {
      var a = w.length;
      w.push(x);
      e:
        for (; 0 < a; ) {
          var h = a - 1 >>> 1, j = w[h];
          if (0 < Ee(j, x))
            w[h] = x, w[a] = j, a = h;
          else
            break e;
        }
    }
    function y(w) {
      return w.length === 0 ? null : w[0];
    }
    function Xe(w) {
      if (w.length === 0)
        return null;
      var x = w[0], a = w.pop();
      if (a !== x) {
        w[0] = a;
        e:
          for (var h = 0, j = w.length, O = j >>> 1; h < O; ) {
            var I = 2 * (h + 1) - 1, W = w[I], R = I + 1, V = w[R];
            if (0 > Ee(W, a))
              R < j && 0 > Ee(V, W) ? (w[h] = V, w[R] = a, h = R) : (w[h] = W, w[I] = a, h = I);
            else if (R < j && 0 > Ee(V, a))
              w[h] = V, w[R] = a, h = R;
            else
              break e;
          }
      }
      return x;
    }
    function Ee(w, x) {
      var a = w.sortIndex - x.sortIndex;
      return a !== 0 ? a : w.id - x.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ae = performance;
      D.unstable_now = function() {
        return Ae.now();
      };
    } else {
      var Le = Date, oe = Le.now();
      D.unstable_now = function() {
        return Le.now() - oe;
      };
    }
    var Q = [], Me = [], pe = 1, J = null, K = 3, Ye = !1, Ve = !1, G = !1, Y = typeof setTimeout == "function" ? setTimeout : null, hn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(w) {
      for (var x = y(Me); x !== null; ) {
        if (x.callback === null)
          Xe(Me);
        else if (x.startTime <= w)
          Xe(Me), x.sortIndex = x.expirationTime, X(Q, x);
        else
          break;
        x = y(Me);
      }
    }
    function ye(w) {
      if (G = !1, Je(w), !Ve)
        if (y(Q) !== null)
          Ve = !0, Te(qe);
        else {
          var x = y(Me);
          x !== null && ee(ye, x.startTime - w);
        }
    }
    function qe(w, x) {
      Ve = !1, G && (G = !1, hn(We), We = -1), Ye = !0;
      var a = K;
      try {
        for (Je(x), J = y(Q); J !== null && (!(J.expirationTime > x) || w && !$n()); ) {
          var h = J.callback;
          if (typeof h == "function") {
            J.callback = null, K = J.priorityLevel;
            var j = h(J.expirationTime <= x);
            x = D.unstable_now(), typeof j == "function" ? J.callback = j : J === y(Q) && Xe(Q), Je(x);
          } else
            Xe(Q);
          J = y(Q);
        }
        if (J !== null)
          var O = !0;
        else {
          var I = y(Me);
          I !== null && ee(ye, I.startTime - x), O = !1;
        }
        return O;
      } finally {
        J = null, K = a, Ye = !1;
      }
    }
    var we = !1, je = null, We = -1, jn = 5, vn = -1;
    function $n() {
      return !(D.unstable_now() - vn < jn);
    }
    function an() {
      if (je !== null) {
        var w = D.unstable_now();
        vn = w;
        var x = !0;
        try {
          x = je(!0, w);
        } finally {
          x ? Pe() : (we = !1, je = null);
        }
      } else
        we = !1;
    }
    var Pe;
    if (typeof sn == "function")
      Pe = function() {
        sn(an);
      };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Pe = function() {
        cn.postMessage(null);
      };
    } else
      Pe = function() {
        Y(an, 0);
      };
    function Te(w) {
      je = w, we || (we = !0, Pe());
    }
    function ee(w, x) {
      We = Y(function() {
        w(D.unstable_now());
      }, x);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, D.unstable_continueExecution = function() {
      Ve || Ye || (Ve = !0, Te(qe));
    }, D.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jn = 0 < w ? Math.floor(1e3 / w) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, D.unstable_getFirstCallbackNode = function() {
      return y(Q);
    }, D.unstable_next = function(w) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = K;
      }
      var a = K;
      K = x;
      try {
        return w();
      } finally {
        K = a;
      }
    }, D.unstable_pauseExecution = function() {
    }, D.unstable_requestPaint = function() {
    }, D.unstable_runWithPriority = function(w, x) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var a = K;
      K = w;
      try {
        return x();
      } finally {
        K = a;
      }
    }, D.unstable_scheduleCallback = function(w, x, a) {
      var h = D.unstable_now();
      switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? h + a : h) : a = h, w) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = a + j, w = { id: pe++, callback: x, priorityLevel: w, startTime: a, expirationTime: j, sortIndex: -1 }, a > h ? (w.sortIndex = a, X(Me, w), y(Q) === null && w === y(Me) && (G ? (hn(We), We = -1) : G = !0, ee(ye, a - h))) : (w.sortIndex = j, X(Q, w), Ve || Ye || (Ve = !0, Te(qe))), w;
    }, D.unstable_shouldYield = $n, D.unstable_wrapCallback = function(w) {
      var x = K;
      return function() {
        var a = K;
        K = x;
        try {
          return w.apply(this, arguments);
        } finally {
          K = a;
        }
      };
    };
  }(Ni)), Ni;
}
var Na;
function Df() {
  return Na || (Na = 1, Si.exports = zf()), Si.exports;
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
var ka;
function If() {
  if (ka)
    return Oe;
  ka = 1;
  var D = Tl, X = Df();
  function y(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Xe = /* @__PURE__ */ new Set(), Ee = {};
  function Ae(e, n) {
    Le(e, n), Le(e + "Capture", n);
  }
  function Le(e, n) {
    for (Ee[e] = n, e = 0; e < n.length; e++)
      Xe.add(n[e]);
  }
  var oe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, Me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, J = {};
  function K(e) {
    return Q.call(J, e) ? !0 : Q.call(pe, e) ? !1 : Me.test(e) ? J[e] = !0 : (pe[e] = !0, !1);
  }
  function Ye(e, n, t, r) {
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
  function Ve(e, n, t, r) {
    if (n === null || typeof n > "u" || Ye(e, n, t, r))
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
  function G(e, n, t, r, l, u, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = i;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Y[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Y[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Y[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Y[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Y[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Y[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Y[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Y[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Y[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var hn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      hn,
      sn
    );
    Y[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(hn, sn);
    Y[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(hn, sn);
    Y[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Y[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Y[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = Y.hasOwnProperty(n) ? Y[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Ve(n, t, l, r) && (t = null), r || l === null ? K(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ye = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), we = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), jn = Symbol.for("react.profiler"), vn = Symbol.for("react.provider"), $n = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), w = Symbol.iterator;
  function x(e) {
    return e === null || typeof e != "object" ? null : (e = w && e[w] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var a = Object.assign, h;
  function j(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        h = n && n[1] || "";
      }
    return `
` + h + e;
  }
  var O = !1;
  function I(e, n) {
    if (!e || O)
      return "";
    O = !0;
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
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o]; )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || l[i] !== u[o]) {
                  var s = `
` + l[i].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = I(e.type, !1), e;
      case 11:
        return e = I(e.type.render, !1), e;
      case 1:
        return e = I(e.type, !0), e;
      default:
        return "";
    }
  }
  function R(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case je:
        return "Fragment";
      case we:
        return "Portal";
      case jn:
        return "Profiler";
      case We:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $n:
          return (e.displayName || "Context") + ".Consumer";
        case vn:
          return (e._context.displayName || "Context") + ".Provider";
        case an:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case cn:
          return n = e.displayName || null, n !== null ? n : R(e.type) || "Memo";
        case Te:
          n = e._payload, e = e._init;
          try {
            return R(e(n));
          } catch {
          }
      }
    return null;
  }
  function V(e) {
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
        return R(n);
      case 8:
        return n === We ? "StrictMode" : "Mode";
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
  function U(e) {
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
  function Ce(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function xa(e) {
    var n = Ce(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, u.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function vr(e) {
    e._valueTracker || (e._valueTracker = xa(e));
  }
  function ki(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = Ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function gr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Cl(e, n) {
    var t = n.checked;
    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Ei(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = U(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Li(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function xl(e, n) {
    Li(e, n);
    var t = U(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? zl(e, n.type, t) : n.hasOwnProperty("defaultValue") && zl(e, n.type, U(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function ji(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function zl(e, n, t) {
    (n !== "number" || gr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Dt = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + U(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dl(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ti(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(y(92));
        if (Dt(t)) {
          if (1 < t.length)
            throw Error(y(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: U(t) };
  }
  function Ci(e, n) {
    var t = U(n.value), r = U(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function xi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function zi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? zi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Mr, Di = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Mr.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function It(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var _t = {
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
  }, za = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_t).forEach(function(e) {
    za.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), _t[n] = _t[e];
    });
  });
  function Ii(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || _t.hasOwnProperty(e) && _t[e] ? ("" + n).trim() : n + "px";
  }
  function _i(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Ii(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Da = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _l(e, n) {
    if (n) {
      if (Da[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(y(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(y(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(y(62));
    }
  }
  function Ol(e, n) {
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
  var Al = null;
  function Pl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Rl = null, ot = null, st = null;
  function Oi(e) {
    if (e = nr(e)) {
      if (typeof Rl != "function")
        throw Error(y(280));
      var n = e.stateNode;
      n && (n = Vr(n), Rl(e.stateNode, e.type, n));
    }
  }
  function Ai(e) {
    ot ? st ? st.push(e) : st = [e] : ot = e;
  }
  function Pi() {
    if (ot) {
      var e = ot, n = st;
      if (st = ot = null, Oi(e), n)
        for (e = 0; e < n.length; e++)
          Oi(n[e]);
    }
  }
  function Ri(e, n) {
    return e(n);
  }
  function Ui() {
  }
  var Ul = !1;
  function Fi(e, n, t) {
    if (Ul)
      return e(n, t);
    Ul = !0;
    try {
      return Ri(e, n, t);
    } finally {
      Ul = !1, (ot !== null || st !== null) && (Ui(), Pi());
    }
  }
  function Ot(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Vr(t);
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
      throw Error(y(231, n, typeof t));
    return t;
  }
  var Fl = !1;
  if (oe)
    try {
      var At = {};
      Object.defineProperty(At, "passive", { get: function() {
        Fl = !0;
      } }), window.addEventListener("test", At, At), window.removeEventListener("test", At, At);
    } catch {
      Fl = !1;
    }
  function Ia(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (v) {
      this.onError(v);
    }
  }
  var Pt = !1, wr = null, Sr = !1, Ql = null, _a = { onError: function(e) {
    Pt = !0, wr = e;
  } };
  function Oa(e, n, t, r, l, u, i, o, s) {
    Pt = !1, wr = null, Ia.apply(_a, arguments);
  }
  function Aa(e, n, t, r, l, u, i, o, s) {
    if (Oa.apply(this, arguments), Pt) {
      if (Pt) {
        var p = wr;
        Pt = !1, wr = null;
      } else
        throw Error(y(198));
      Sr || (Sr = !0, Ql = p);
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
  function Qi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Yi(e) {
    if (Kn(e) !== e)
      throw Error(y(188));
  }
  function Pa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Kn(e), n === null)
        throw Error(y(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t)
            return Yi(l), e;
          if (u === r)
            return Yi(l), n;
          u = u.sibling;
        }
        throw Error(y(188));
      }
      if (t.return !== r.return)
        t = l, r = u;
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            i = !0, t = l, r = u;
            break;
          }
          if (o === r) {
            i = !0, r = l, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              i = !0, t = u, r = l;
              break;
            }
            if (o === r) {
              i = !0, r = u, t = l;
              break;
            }
            o = o.sibling;
          }
          if (!i)
            throw Error(y(189));
        }
      }
      if (t.alternate !== r)
        throw Error(y(190));
    }
    if (t.tag !== 3)
      throw Error(y(188));
    return t.stateNode.current === t ? e : n;
  }
  function Vi(e) {
    return e = Pa(e), e !== null ? Wi(e) : null;
  }
  function Wi(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Wi(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Bi = X.unstable_scheduleCallback, Hi = X.unstable_cancelCallback, Ra = X.unstable_shouldYield, Ua = X.unstable_requestPaint, te = X.unstable_now, Fa = X.unstable_getCurrentPriorityLevel, Yl = X.unstable_ImmediatePriority, $i = X.unstable_UserBlockingPriority, Nr = X.unstable_NormalPriority, Qa = X.unstable_LowPriority, Ki = X.unstable_IdlePriority, kr = null, fn = null;
  function Ya(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function")
      try {
        fn.onCommitFiberRoot(kr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var en = Math.clz32 ? Math.clz32 : Ba, Va = Math.log, Wa = Math.LN2;
  function Ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Va(e) / Wa | 0) | 0;
  }
  var Er = 64, Lr = 4194304;
  function Rt(e) {
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
  function jr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? r = Rt(o) : (u &= i, u !== 0 && (r = Rt(u)));
    } else
      i = t & ~l, i !== 0 ? r = Rt(i) : u !== 0 && (r = Rt(u));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ha(e, n) {
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
  function $a(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var i = 31 - en(u), o = 1 << i, s = l[i];
      s === -1 ? (!(o & t) || o & r) && (l[i] = Ha(o, n)) : s <= n && (e.expiredLanes |= o), u &= ~o;
    }
  }
  function Vl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Gi() {
    var e = Er;
    return Er <<= 1, !(Er & 4194240) && (Er = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function Ut(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function Ka(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Bl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var F = 0;
  function Zi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xi, Hl, Ji, qi, bi, $l = !1, Tr = [], Tn = null, Cn = null, xn = null, Ft = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), zn = [], Ga = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function eo(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        Cn = null;
        break;
      case "mouseover":
      case "mouseout":
        xn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ft.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(n.pointerId);
    }
  }
  function Yt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = nr(n), n !== null && Hl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Za(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Tn = Yt(Tn, e, n, t, r, l), !0;
      case "dragenter":
        return Cn = Yt(Cn, e, n, t, r, l), !0;
      case "mouseover":
        return xn = Yt(xn, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Ft.set(u, Yt(Ft.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Qt.set(u, Yt(Qt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function no(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Kn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Qi(t), n !== null) {
            e.blockedOn = n, bi(e.priority, function() {
              Ji(t);
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
  function Cr(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Gl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Al = r, t.target.dispatchEvent(r), Al = null;
      } else
        return n = nr(t), n !== null && Hl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function to(e, n, t) {
    Cr(e) && t.delete(n);
  }
  function Xa() {
    $l = !1, Tn !== null && Cr(Tn) && (Tn = null), Cn !== null && Cr(Cn) && (Cn = null), xn !== null && Cr(xn) && (xn = null), Ft.forEach(to), Qt.forEach(to);
  }
  function Vt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, $l || ($l = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Xa)));
  }
  function Wt(e) {
    function n(l) {
      return Vt(l, e);
    }
    if (0 < Tr.length) {
      Vt(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tn !== null && Vt(Tn, e), Cn !== null && Vt(Cn, e), xn !== null && Vt(xn, e), Ft.forEach(n), Qt.forEach(n), t = 0; t < zn.length; t++)
      r = zn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zn.length && (t = zn[0], t.blockedOn === null); )
      no(t), t.blockedOn === null && zn.shift();
  }
  var at = ye.ReactCurrentBatchConfig, xr = !0;
  function Ja(e, n, t, r) {
    var l = F, u = at.transition;
    at.transition = null;
    try {
      F = 1, Kl(e, n, t, r);
    } finally {
      F = l, at.transition = u;
    }
  }
  function qa(e, n, t, r) {
    var l = F, u = at.transition;
    at.transition = null;
    try {
      F = 4, Kl(e, n, t, r);
    } finally {
      F = l, at.transition = u;
    }
  }
  function Kl(e, n, t, r) {
    if (xr) {
      var l = Gl(e, n, t, r);
      if (l === null)
        fu(e, n, r, zr, t), eo(e, r);
      else if (Za(l, e, n, t, r))
        r.stopPropagation();
      else if (eo(e, r), n & 4 && -1 < Ga.indexOf(e)) {
        for (; l !== null; ) {
          var u = nr(l);
          if (u !== null && Xi(u), u = Gl(e, n, t, r), u === null && fu(e, n, r, zr, t), u === l)
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else
        fu(e, n, r, null, t);
    }
  }
  var zr = null;
  function Gl(e, n, t, r) {
    if (zr = null, e = Pl(r), e = Gn(e), e !== null)
      if (n = Kn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Qi(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return zr = e, null;
  }
  function ro(e) {
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
        switch (Fa()) {
          case Yl:
            return 1;
          case $i:
            return 4;
          case Nr:
          case Qa:
            return 16;
          case Ki:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dn = null, Zl = null, Dr = null;
  function lo() {
    if (Dr)
      return Dr;
    var e, n = Zl, t = n.length, r, l = "value" in Dn ? Dn.value : Dn.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++)
      ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ir(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _r() {
    return !0;
  }
  function uo() {
    return !1;
  }
  function Re(e) {
    function n(t, r, l, u, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _r : uo, this.isPropagationStopped = uo, this;
    }
    return a(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = _r);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = _r);
    }, persist: function() {
    }, isPersistent: _r }), n;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xl = Re(ct), Bt = a({}, ct, { view: 0, detail: 0 }), ba = Re(Bt), Jl, ql, Ht, Or = a({}, Bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ht && (Ht && e.type === "mousemove" ? (Jl = e.screenX - Ht.screenX, ql = e.screenY - Ht.screenY) : ql = Jl = 0, Ht = e), Jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ql;
  } }), io = Re(Or), ec = a({}, Or, { dataTransfer: 0 }), nc = Re(ec), tc = a({}, Bt, { relatedTarget: 0 }), bl = Re(tc), rc = a({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lc = Re(rc), uc = a({}, ct, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ic = Re(uc), oc = a({}, ct, { data: 0 }), oo = Re(oc), sc = {
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
  }, ac = {
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
  }, cc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = cc[e]) ? !!n[e] : !1;
  }
  function eu() {
    return fc;
  }
  var dc = a({}, Bt, { key: function(e) {
    if (e.key) {
      var n = sc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ac[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eu, charCode: function(e) {
    return e.type === "keypress" ? Ir(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), pc = Re(dc), yc = a({}, Or, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), so = Re(yc), mc = a({}, Bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eu }), hc = Re(mc), vc = a({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gc = Re(vc), Mc = a({}, Or, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wc = Re(Mc), Sc = [9, 13, 27, 32], nu = oe && "CompositionEvent" in window, $t = null;
  oe && "documentMode" in document && ($t = document.documentMode);
  var Nc = oe && "TextEvent" in window && !$t, ao = oe && (!nu || $t && 8 < $t && 11 >= $t), co = String.fromCharCode(32), fo = !1;
  function po(e, n) {
    switch (e) {
      case "keyup":
        return Sc.indexOf(n.keyCode) !== -1;
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
  function yo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ft = !1;
  function kc(e, n) {
    switch (e) {
      case "compositionend":
        return yo(n);
      case "keypress":
        return n.which !== 32 ? null : (fo = !0, co);
      case "textInput":
        return e = n.data, e === co && fo ? null : e;
      default:
        return null;
    }
  }
  function Ec(e, n) {
    if (ft)
      return e === "compositionend" || !nu && po(e, n) ? (e = lo(), Dr = Zl = Dn = null, ft = !1, e) : null;
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
        return ao && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Lc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Lc[e.type] : n === "textarea";
  }
  function ho(e, n, t, r) {
    Ai(r), n = Fr(n, "onChange"), 0 < n.length && (t = new Xl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Kt = null, Gt = null;
  function jc(e) {
    Oo(e, 0);
  }
  function Ar(e) {
    var n = ht(e);
    if (ki(n))
      return e;
  }
  function Tc(e, n) {
    if (e === "change")
      return n;
  }
  var vo = !1;
  if (oe) {
    var tu;
    if (oe) {
      var ru = "oninput" in document;
      if (!ru) {
        var go = document.createElement("div");
        go.setAttribute("oninput", "return;"), ru = typeof go.oninput == "function";
      }
      tu = ru;
    } else
      tu = !1;
    vo = tu && (!document.documentMode || 9 < document.documentMode);
  }
  function Mo() {
    Kt && (Kt.detachEvent("onpropertychange", wo), Gt = Kt = null);
  }
  function wo(e) {
    if (e.propertyName === "value" && Ar(Gt)) {
      var n = [];
      ho(n, Gt, e, Pl(e)), Fi(jc, n);
    }
  }
  function Cc(e, n, t) {
    e === "focusin" ? (Mo(), Kt = n, Gt = t, Kt.attachEvent("onpropertychange", wo)) : e === "focusout" && Mo();
  }
  function xc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(Gt);
  }
  function zc(e, n) {
    if (e === "click")
      return Ar(n);
  }
  function Dc(e, n) {
    if (e === "input" || e === "change")
      return Ar(n);
  }
  function Ic(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Ic;
  function Zt(e, n) {
    if (nn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!Q.call(n, l) || !nn(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function So(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function No(e, n) {
    var t = So(e);
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
      t = So(t);
    }
  }
  function ko(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ko(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Eo() {
    for (var e = window, n = gr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = gr(e.document);
    }
    return n;
  }
  function lu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function _c(e) {
    var n = Eo(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && ko(t.ownerDocument.documentElement, t)) {
      if (r !== null && lu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = No(t, u);
          var i = No(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Oc = oe && "documentMode" in document && 11 >= document.documentMode, dt = null, uu = null, Xt = null, iu = !1;
  function Lo(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    iu || dt == null || dt !== gr(r) || (r = dt, "selectionStart" in r && lu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xt && Zt(Xt, r) || (Xt = r, r = Fr(uu, "onSelect"), 0 < r.length && (n = new Xl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = dt)));
  }
  function Pr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var pt = { animationend: Pr("Animation", "AnimationEnd"), animationiteration: Pr("Animation", "AnimationIteration"), animationstart: Pr("Animation", "AnimationStart"), transitionend: Pr("Transition", "TransitionEnd") }, ou = {}, jo = {};
  oe && (jo = document.createElement("div").style, "AnimationEvent" in window || (delete pt.animationend.animation, delete pt.animationiteration.animation, delete pt.animationstart.animation), "TransitionEvent" in window || delete pt.transitionend.transition);
  function Rr(e) {
    if (ou[e])
      return ou[e];
    if (!pt[e])
      return e;
    var n = pt[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in jo)
        return ou[e] = n[t];
    return e;
  }
  var To = Rr("animationend"), Co = Rr("animationiteration"), xo = Rr("animationstart"), zo = Rr("transitionend"), Do = /* @__PURE__ */ new Map(), Io = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function In(e, n) {
    Do.set(e, n), Ae(n, [e]);
  }
  for (var su = 0; su < Io.length; su++) {
    var au = Io[su], Ac = au.toLowerCase(), Pc = au[0].toUpperCase() + au.slice(1);
    In(Ac, "on" + Pc);
  }
  In(To, "onAnimationEnd"), In(Co, "onAnimationIteration"), In(xo, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(zo, "onTransitionEnd"), Le("onMouseEnter", ["mouseout", "mouseover"]), Le("onMouseLeave", ["mouseout", "mouseover"]), Le("onPointerEnter", ["pointerout", "pointerover"]), Le("onPointerLeave", ["pointerout", "pointerover"]), Ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Jt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));
  function _o(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Aa(r, n, void 0, e), e.currentTarget = null;
  }
  function Oo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i], s = o.instance, p = o.currentTarget;
            if (o = o.listener, s !== u && l.isPropagationStopped())
              break e;
            _o(l, o, p), u = s;
          }
        else
          for (i = 0; i < r.length; i++) {
            if (o = r[i], s = o.instance, p = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped())
              break e;
            _o(l, o, p), u = s;
          }
      }
    }
    if (Sr)
      throw e = Ql, Sr = !1, Ql = null, e;
  }
  function H(e, n) {
    var t = n[vu];
    t === void 0 && (t = n[vu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Ao(n, e, 2, !1), t.add(r));
  }
  function cu(e, n, t) {
    var r = 0;
    n && (r |= 4), Ao(t, e, r, n);
  }
  var Ur = "_reactListening" + Math.random().toString(36).slice(2);
  function qt(e) {
    if (!e[Ur]) {
      e[Ur] = !0, Xe.forEach(function(t) {
        t !== "selectionchange" && (Rc.has(t) || cu(t, !1, e), cu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ur] || (n[Ur] = !0, cu("selectionchange", !1, n));
    }
  }
  function Ao(e, n, t, r) {
    switch (ro(n)) {
      case 1:
        var l = Ja;
        break;
      case 4:
        l = qa;
        break;
      default:
        l = Kl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Fl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function fu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var i = r.tag;
          if (i === 3 || i === 4) {
            var o = r.stateNode.containerInfo;
            if (o === l || o.nodeType === 8 && o.parentNode === l)
              break;
            if (i === 4)
              for (i = r.return; i !== null; ) {
                var s = i.tag;
                if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                  return;
                i = i.return;
              }
            for (; o !== null; ) {
              if (i = Gn(o), i === null)
                return;
              if (s = i.tag, s === 5 || s === 6) {
                r = u = i;
                continue e;
              }
              o = o.parentNode;
            }
          }
          r = r.return;
        }
    Fi(function() {
      var p = u, v = Pl(t), g = [];
      e: {
        var m = Do.get(e);
        if (m !== void 0) {
          var S = Xl, k = e;
          switch (e) {
            case "keypress":
              if (Ir(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              S = pc;
              break;
            case "focusin":
              k = "focus", S = bl;
              break;
            case "focusout":
              k = "blur", S = bl;
              break;
            case "beforeblur":
            case "afterblur":
              S = bl;
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
              S = io;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = nc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = hc;
              break;
            case To:
            case Co:
            case xo:
              S = lc;
              break;
            case zo:
              S = gc;
              break;
            case "scroll":
              S = ba;
              break;
            case "wheel":
              S = wc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ic;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = so;
          }
          var E = (n & 4) !== 0, re = !E && e === "scroll", f = E ? m !== null ? m + "Capture" : null : m;
          E = [];
          for (var c = p, d; c !== null; ) {
            d = c;
            var M = d.stateNode;
            if (d.tag === 5 && M !== null && (d = M, f !== null && (M = Ot(c, f), M != null && E.push(bt(c, M, d)))), re)
              break;
            c = c.return;
          }
          0 < E.length && (m = new S(m, k, null, t, v), g.push({ event: m, listeners: E }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (m = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", m && t !== Al && (k = t.relatedTarget || t.fromElement) && (Gn(k) || k[gn]))
            break e;
          if ((S || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, S ? (k = t.relatedTarget || t.toElement, S = p, k = k ? Gn(k) : null, k !== null && (re = Kn(k), k !== re || k.tag !== 5 && k.tag !== 6) && (k = null)) : (S = null, k = p), S !== k)) {
            if (E = io, M = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (E = so, M = "onPointerLeave", f = "onPointerEnter", c = "pointer"), re = S == null ? m : ht(S), d = k == null ? m : ht(k), m = new E(M, c + "leave", S, t, v), m.target = re, m.relatedTarget = d, M = null, Gn(v) === p && (E = new E(f, c + "enter", k, t, v), E.target = d, E.relatedTarget = re, M = E), re = M, S && k)
              n: {
                for (E = S, f = k, c = 0, d = E; d; d = yt(d))
                  c++;
                for (d = 0, M = f; M; M = yt(M))
                  d++;
                for (; 0 < c - d; )
                  E = yt(E), c--;
                for (; 0 < d - c; )
                  f = yt(f), d--;
                for (; c--; ) {
                  if (E === f || f !== null && E === f.alternate)
                    break n;
                  E = yt(E), f = yt(f);
                }
                E = null;
              }
            else
              E = null;
            S !== null && Po(g, m, S, E, !1), k !== null && re !== null && Po(g, re, k, E, !0);
          }
        }
        e: {
          if (m = p ? ht(p) : window, S = m.nodeName && m.nodeName.toLowerCase(), S === "select" || S === "input" && m.type === "file")
            var L = Tc;
          else if (mo(m))
            if (vo)
              L = Dc;
            else {
              L = xc;
              var T = Cc;
            }
          else
            (S = m.nodeName) && S.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (L = zc);
          if (L && (L = L(e, p))) {
            ho(g, L, t, v);
            break e;
          }
          T && T(e, m, p), e === "focusout" && (T = m._wrapperState) && T.controlled && m.type === "number" && zl(m, "number", m.value);
        }
        switch (T = p ? ht(p) : window, e) {
          case "focusin":
            (mo(T) || T.contentEditable === "true") && (dt = T, uu = p, Xt = null);
            break;
          case "focusout":
            Xt = uu = dt = null;
            break;
          case "mousedown":
            iu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            iu = !1, Lo(g, t, v);
            break;
          case "selectionchange":
            if (Oc)
              break;
          case "keydown":
          case "keyup":
            Lo(g, t, v);
        }
        var C;
        if (nu)
          e: {
            switch (e) {
              case "compositionstart":
                var z = "onCompositionStart";
                break e;
              case "compositionend":
                z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                z = "onCompositionUpdate";
                break e;
            }
            z = void 0;
          }
        else
          ft ? po(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
        z && (ao && t.locale !== "ko" && (ft || z !== "onCompositionStart" ? z === "onCompositionEnd" && ft && (C = lo()) : (Dn = v, Zl = "value" in Dn ? Dn.value : Dn.textContent, ft = !0)), T = Fr(p, z), 0 < T.length && (z = new oo(z, e, null, t, v), g.push({ event: z, listeners: T }), C ? z.data = C : (C = yo(t), C !== null && (z.data = C)))), (C = Nc ? kc(e, t) : Ec(e, t)) && (p = Fr(p, "onBeforeInput"), 0 < p.length && (v = new oo("onBeforeInput", "beforeinput", null, t, v), g.push({ event: v, listeners: p }), v.data = C));
      }
      Oo(g, n);
    });
  }
  function bt(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Fr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Ot(e, t), u != null && r.unshift(bt(e, u, l)), u = Ot(e, n), u != null && r.push(bt(e, u, l))), e = e.return;
    }
    return r;
  }
  function yt(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Po(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t, s = o.alternate, p = o.stateNode;
      if (s !== null && s === r)
        break;
      o.tag === 5 && p !== null && (o = p, l ? (s = Ot(t, u), s != null && i.unshift(bt(t, s, o))) : l || (s = Ot(t, u), s != null && i.push(bt(t, s, o)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Uc = /\r\n?/g, Fc = /\u0000|\uFFFD/g;
  function Ro(e) {
    return (typeof e == "string" ? e : "" + e).replace(Uc, `
`).replace(Fc, "");
  }
  function Qr(e, n, t) {
    if (n = Ro(n), Ro(e) !== n && t)
      throw Error(y(425));
  }
  function Yr() {
  }
  var du = null, pu = null;
  function yu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var mu = typeof setTimeout == "function" ? setTimeout : void 0, Qc = typeof clearTimeout == "function" ? clearTimeout : void 0, Uo = typeof Promise == "function" ? Promise : void 0, Yc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uo < "u" ? function(e) {
    return Uo.resolve(null).then(e).catch(Vc);
  } : mu;
  function Vc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function _n(e) {
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
  function Fo(e) {
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
  var mt = Math.random().toString(36).slice(2), dn = "__reactFiber$" + mt, er = "__reactProps$" + mt, gn = "__reactContainer$" + mt, vu = "__reactEvents$" + mt, Wc = "__reactListeners$" + mt, Bc = "__reactHandles$" + mt;
  function Gn(e) {
    var n = e[dn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[gn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Fo(e); e !== null; ) {
            if (t = e[dn])
              return t;
            e = Fo(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function nr(e) {
    return e = e[dn] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ht(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(y(33));
  }
  function Vr(e) {
    return e[er] || null;
  }
  var gu = [], vt = -1;
  function On(e) {
    return { current: e };
  }
  function $(e) {
    0 > vt || (e.current = gu[vt], gu[vt] = null, vt--);
  }
  function B(e, n) {
    vt++, gu[vt] = e.current, e.current = n;
  }
  var An = {}, me = On(An), xe = On(!1), Zn = An;
  function gt(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return An;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t)
      l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function ze(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wr() {
    $(xe), $(me);
  }
  function Qo(e, n, t) {
    if (me.current !== An)
      throw Error(y(168));
    B(me, n), B(xe, t);
  }
  function Yo(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(y(108, V(e) || "Unknown", l));
    return a({}, t, r);
  }
  function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || An, Zn = me.current, B(me, e), B(xe, xe.current), !0;
  }
  function Vo(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(y(169));
    t ? (e = Yo(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, $(xe), $(me), B(me, e)) : $(xe), B(xe, t);
  }
  var Mn = null, Hr = !1, Mu = !1;
  function Wo(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function Hc(e) {
    Hr = !0, Wo(e);
  }
  function Pn() {
    if (!Mu && Mn !== null) {
      Mu = !0;
      var e = 0, n = F;
      try {
        var t = Mn;
        for (F = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Mn = null, Hr = !1;
      } catch (l) {
        throw Mn !== null && (Mn = Mn.slice(e + 1)), Bi(Yl, Pn), l;
      } finally {
        F = n, Mu = !1;
      }
    }
    return null;
  }
  var Mt = [], wt = 0, $r = null, Kr = 0, Be = [], He = 0, Xn = null, wn = 1, Sn = "";
  function Jn(e, n) {
    Mt[wt++] = Kr, Mt[wt++] = $r, $r = e, Kr = n;
  }
  function Bo(e, n, t) {
    Be[He++] = wn, Be[He++] = Sn, Be[He++] = Xn, Xn = e;
    var r = wn;
    e = Sn;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - en(n) + l;
    if (30 < u) {
      var i = l - l % 5;
      u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, wn = 1 << 32 - en(n) + l | t << l | r, Sn = u + e;
    } else
      wn = 1 << u | t << l | r, Sn = e;
  }
  function wu(e) {
    e.return !== null && (Jn(e, 1), Bo(e, 1, 0));
  }
  function Su(e) {
    for (; e === $r; )
      $r = Mt[--wt], Mt[wt] = null, Kr = Mt[--wt], Mt[wt] = null;
    for (; e === Xn; )
      Xn = Be[--He], Be[He] = null, Sn = Be[--He], Be[He] = null, wn = Be[--He], Be[He] = null;
  }
  var Ue = null, Fe = null, Z = !1, tn = null;
  function Ho(e, n) {
    var t = Ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function $o(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ue = e, Fe = _n(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ue = e, Fe = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Xn !== null ? { id: wn, overflow: Sn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ue = e, Fe = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ku(e) {
    if (Z) {
      var n = Fe;
      if (n) {
        var t = n;
        if (!$o(e, n)) {
          if (Nu(e))
            throw Error(y(418));
          n = _n(t.nextSibling);
          var r = Ue;
          n && $o(e, n) ? Ho(r, t) : (e.flags = e.flags & -4097 | 2, Z = !1, Ue = e);
        }
      } else {
        if (Nu(e))
          throw Error(y(418));
        e.flags = e.flags & -4097 | 2, Z = !1, Ue = e;
      }
    }
  }
  function Ko(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ue = e;
  }
  function Gr(e) {
    if (e !== Ue)
      return !1;
    if (!Z)
      return Ko(e), Z = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yu(e.type, e.memoizedProps)), n && (n = Fe)) {
      if (Nu(e))
        throw Go(), Error(y(418));
      for (; n; )
        Ho(e, n), n = _n(n.nextSibling);
    }
    if (Ko(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(y(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Fe = _n(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Fe = null;
      }
    } else
      Fe = Ue ? _n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Go() {
    for (var e = Fe; e; )
      e = _n(e.nextSibling);
  }
  function St() {
    Fe = Ue = null, Z = !1;
  }
  function Eu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var $c = ye.ReactCurrentBatchConfig;
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = a({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var Zr = On(null), Xr = null, Nt = null, Lu = null;
  function ju() {
    Lu = Nt = Xr = null;
  }
  function Tu(e) {
    var n = Zr.current;
    $(Zr), e._currentValue = n;
  }
  function Cu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function kt(e, n) {
    Xr = e, Lu = Nt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (De = !0), e.firstContext = null);
  }
  function $e(e) {
    var n = e._currentValue;
    if (Lu !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Nt === null) {
        if (Xr === null)
          throw Error(y(308));
        Nt = e, Xr.dependencies = { lanes: 0, firstContext: e };
      } else
        Nt = Nt.next = e;
    return n;
  }
  var qn = null;
  function xu(e) {
    qn === null ? qn = [e] : qn.push(e);
  }
  function Zo(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, xu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Nn(e, r);
  }
  function Nn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Rn = !1;
  function zu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xo(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function kn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, A & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Nn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, xu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Nn(e, t);
  }
  function Jr(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Bl(e, t);
    }
  }
  function Jo(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = i : u = u.next = i, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else
        l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function qr(e, n, t, r) {
    var l = e.updateQueue;
    Rn = !1;
    var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o, p = s.next;
      s.next = null, i === null ? u = p : i.next = p, i = s;
      var v = e.alternate;
      v !== null && (v = v.updateQueue, o = v.lastBaseUpdate, o !== i && (o === null ? v.firstBaseUpdate = p : o.next = p, v.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      i = 0, v = p = s = null, o = u;
      do {
        var m = o.lane, S = o.eventTime;
        if ((r & m) === m) {
          v !== null && (v = v.next = {
            eventTime: S,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          e: {
            var k = e, E = o;
            switch (m = n, S = t, E.tag) {
              case 1:
                if (k = E.payload, typeof k == "function") {
                  g = k.call(S, g, m);
                  break e;
                }
                g = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = E.payload, m = typeof k == "function" ? k.call(S, g, m) : k, m == null)
                  break e;
                g = a({}, g, m);
                break e;
              case 2:
                Rn = !0;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [o] : m.push(o));
        } else
          S = { eventTime: S, lane: m, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, v === null ? (p = v = S, s = g) : v = v.next = S, i |= m;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null)
            break;
          m = o, o = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
        }
      } while (1);
      if (v === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = v, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else
        u === null && (l.shared.lanes = 0);
      nt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function qo(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(y(191, l));
          l.call(r);
        }
      }
  }
  var bo = new D.Component().refs;
  function Du(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : a({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var br = { isMounted: function(e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Vn(e), u = kn(r, l);
    u.payload = n, t != null && (u.callback = t), n = Un(e, u, l), n !== null && (on(n, e, l, r), Jr(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Vn(e), u = kn(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = Un(e, u, l), n !== null && (on(n, e, l, r), Jr(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ne(), r = Vn(e), l = kn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Un(e, l, r), n !== null && (on(n, e, r, t), Jr(n, e, r));
  } };
  function es(e, n, t, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, u) : !0;
  }
  function ns(e, n, t) {
    var r = !1, l = An, u = n.contextType;
    return typeof u == "object" && u !== null ? u = $e(u) : (l = ze(n) ? Zn : me.current, r = n.contextTypes, u = (r = r != null) ? gt(e, l) : An), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = br, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function ts(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && br.enqueueReplaceState(n, n.state, null);
  }
  function Iu(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = bo, zu(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = $e(u) : (u = ze(n) ? Zn : me.current, l.context = gt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Du(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && br.enqueueReplaceState(l, l.state, null), qr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function tr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(y(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(y(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(i) {
          var o = l.refs;
          o === bo && (o = l.refs = {}), i === null ? delete o[u] : o[u] = i;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string")
        throw Error(y(284));
      if (!t._owner)
        throw Error(y(290, e));
    }
    return e;
  }
  function el(e, n) {
    throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function rs(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ls(e) {
    function n(f, c) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
      }
    }
    function t(f, c) {
      if (!e)
        return null;
      for (; c !== null; )
        n(f, c), c = c.sibling;
      return null;
    }
    function r(f, c) {
      for (f = /* @__PURE__ */ new Map(); c !== null; )
        c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f;
    }
    function l(f, c) {
      return f = Bn(f, c), f.index = 0, f.sibling = null, f;
    }
    function u(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function o(f, c, d, M) {
      return c === null || c.tag !== 6 ? (c = mi(d, f.mode, M), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, M) {
      var L = d.type;
      return L === je ? v(f, c, d.props.children, M, d.key) : c !== null && (c.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Te && rs(L) === c.type) ? (M = l(c, d.props), M.ref = tr(f, c, d), M.return = f, M) : (M = Ml(d.type, d.key, d.props, null, f.mode, M), M.ref = tr(f, c, d), M.return = f, M);
    }
    function p(f, c, d, M) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = hi(d, f.mode, M), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function v(f, c, d, M, L) {
      return c === null || c.tag !== 7 ? (c = ut(d, f.mode, M, L), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function g(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
        return c = mi("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case qe:
            return d = Ml(c.type, c.key, c.props, null, f.mode, d), d.ref = tr(f, null, c), d.return = f, d;
          case we:
            return c = hi(c, f.mode, d), c.return = f, c;
          case Te:
            var M = c._init;
            return g(f, M(c._payload), d);
        }
        if (Dt(c) || x(c))
          return c = ut(c, f.mode, d, null), c.return = f, c;
        el(f, c);
      }
      return null;
    }
    function m(f, c, d, M) {
      var L = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return L !== null ? null : o(f, c, "" + d, M);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === L ? s(f, c, d, M) : null;
          case we:
            return d.key === L ? p(f, c, d, M) : null;
          case Te:
            return L = d._init, m(
              f,
              c,
              L(d._payload),
              M
            );
        }
        if (Dt(d) || x(d))
          return L !== null ? null : v(f, c, d, M, null);
        el(f, d);
      }
      return null;
    }
    function S(f, c, d, M, L) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return f = f.get(d) || null, o(c, f, "" + M, L);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case qe:
            return f = f.get(M.key === null ? d : M.key) || null, s(c, f, M, L);
          case we:
            return f = f.get(M.key === null ? d : M.key) || null, p(c, f, M, L);
          case Te:
            var T = M._init;
            return S(f, c, d, T(M._payload), L);
        }
        if (Dt(M) || x(M))
          return f = f.get(d) || null, v(c, f, M, L, null);
        el(c, M);
      }
      return null;
    }
    function k(f, c, d, M) {
      for (var L = null, T = null, C = c, z = c = 0, ce = null; C !== null && z < d.length; z++) {
        C.index > z ? (ce = C, C = null) : ce = C.sibling;
        var P = m(f, C, d[z], M);
        if (P === null) {
          C === null && (C = ce);
          break;
        }
        e && C && P.alternate === null && n(f, C), c = u(P, c, z), T === null ? L = P : T.sibling = P, T = P, C = ce;
      }
      if (z === d.length)
        return t(f, C), Z && Jn(f, z), L;
      if (C === null) {
        for (; z < d.length; z++)
          C = g(f, d[z], M), C !== null && (c = u(C, c, z), T === null ? L = C : T.sibling = C, T = C);
        return Z && Jn(f, z), L;
      }
      for (C = r(f, C); z < d.length; z++)
        ce = S(C, f, z, d[z], M), ce !== null && (e && ce.alternate !== null && C.delete(ce.key === null ? z : ce.key), c = u(ce, c, z), T === null ? L = ce : T.sibling = ce, T = ce);
      return e && C.forEach(function(Hn) {
        return n(f, Hn);
      }), Z && Jn(f, z), L;
    }
    function E(f, c, d, M) {
      var L = x(d);
      if (typeof L != "function")
        throw Error(y(150));
      if (d = L.call(d), d == null)
        throw Error(y(151));
      for (var T = L = null, C = c, z = c = 0, ce = null, P = d.next(); C !== null && !P.done; z++, P = d.next()) {
        C.index > z ? (ce = C, C = null) : ce = C.sibling;
        var Hn = m(f, C, P.value, M);
        if (Hn === null) {
          C === null && (C = ce);
          break;
        }
        e && C && Hn.alternate === null && n(f, C), c = u(Hn, c, z), T === null ? L = Hn : T.sibling = Hn, T = Hn, C = ce;
      }
      if (P.done)
        return t(
          f,
          C
        ), Z && Jn(f, z), L;
      if (C === null) {
        for (; !P.done; z++, P = d.next())
          P = g(f, P.value, M), P !== null && (c = u(P, c, z), T === null ? L = P : T.sibling = P, T = P);
        return Z && Jn(f, z), L;
      }
      for (C = r(f, C); !P.done; z++, P = d.next())
        P = S(C, f, z, P.value, M), P !== null && (e && P.alternate !== null && C.delete(P.key === null ? z : P.key), c = u(P, c, z), T === null ? L = P : T.sibling = P, T = P);
      return e && C.forEach(function(jf) {
        return n(f, jf);
      }), Z && Jn(f, z), L;
    }
    function re(f, c, d, M) {
      if (typeof d == "object" && d !== null && d.type === je && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var L = d.key, T = c; T !== null; ) {
                if (T.key === L) {
                  if (L = d.type, L === je) {
                    if (T.tag === 7) {
                      t(f, T.sibling), c = l(T, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (T.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Te && rs(L) === T.type) {
                    t(f, T.sibling), c = l(T, d.props), c.ref = tr(f, T, d), c.return = f, f = c;
                    break e;
                  }
                  t(f, T);
                  break;
                } else
                  n(f, T);
                T = T.sibling;
              }
              d.type === je ? (c = ut(d.props.children, f.mode, M, d.key), c.return = f, f = c) : (M = Ml(d.type, d.key, d.props, null, f.mode, M), M.ref = tr(f, c, d), M.return = f, f = M);
            }
            return i(f);
          case we:
            e: {
              for (T = d.key; c !== null; ) {
                if (c.key === T)
                  if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                    t(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                    break e;
                  } else {
                    t(f, c);
                    break;
                  }
                else
                  n(f, c);
                c = c.sibling;
              }
              c = hi(d, f.mode, M), c.return = f, f = c;
            }
            return i(f);
          case Te:
            return T = d._init, re(f, c, T(d._payload), M);
        }
        if (Dt(d))
          return k(f, c, d, M);
        if (x(d))
          return E(f, c, d, M);
        el(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (t(f, c.sibling), c = l(c, d), c.return = f, f = c) : (t(f, c), c = mi(d, f.mode, M), c.return = f, f = c), i(f)) : t(f, c);
    }
    return re;
  }
  var Et = ls(!0), us = ls(!1), rr = {}, pn = On(rr), lr = On(rr), ur = On(rr);
  function bn(e) {
    if (e === rr)
      throw Error(y(174));
    return e;
  }
  function _u(e, n) {
    switch (B(ur, n), B(lr, e), B(pn, rr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Il(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Il(n, e);
    }
    $(pn), B(pn, n);
  }
  function Lt() {
    $(pn), $(lr), $(ur);
  }
  function is(e) {
    bn(ur.current);
    var n = bn(pn.current), t = Il(n, e.type);
    n !== t && (B(lr, e), B(pn, t));
  }
  function Ou(e) {
    lr.current === e && ($(pn), $(lr));
  }
  var q = On(0);
  function nl(e) {
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
  var Au = [];
  function Pu() {
    for (var e = 0; e < Au.length; e++)
      Au[e]._workInProgressVersionPrimary = null;
    Au.length = 0;
  }
  var tl = ye.ReactCurrentDispatcher, Ru = ye.ReactCurrentBatchConfig, et = 0, b = null, ue = null, se = null, rl = !1, ir = !1, or = 0, Kc = 0;
  function he() {
    throw Error(y(321));
  }
  function Uu(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!nn(e[t], n[t]))
        return !1;
    return !0;
  }
  function Fu(e, n, t, r, l, u) {
    if (et = u, b = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, tl.current = e === null || e.memoizedState === null ? Jc : qc, e = t(r, l), ir) {
      u = 0;
      do {
        if (ir = !1, or = 0, 25 <= u)
          throw Error(y(301));
        u += 1, se = ue = null, n.updateQueue = null, tl.current = bc, e = t(r, l);
      } while (ir);
    }
    if (tl.current = il, n = ue !== null && ue.next !== null, et = 0, se = ue = b = null, rl = !1, n)
      throw Error(y(300));
    return e;
  }
  function Qu() {
    var e = or !== 0;
    return or = 0, e;
  }
  function yn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return se === null ? b.memoizedState = se = e : se = se.next = e, se;
  }
  function Ke() {
    if (ue === null) {
      var e = b.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ue.next;
    var n = se === null ? b.memoizedState : se.next;
    if (n !== null)
      se = n, ue = e;
    else {
      if (e === null)
        throw Error(y(310));
      ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, se === null ? b.memoizedState = se = e : se = se.next = e;
    }
    return se;
  }
  function sr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Yu(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = ue, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = u.next, u.next = i;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var o = i = null, s = null, p = u;
      do {
        var v = p.lane;
        if ((et & v) === v)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: v,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (o = s = g, i = r) : s = s.next = g, b.lanes |= v, nt |= v;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? i = r : s.next = o, nn(r, n.memoizedState) || (De = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, b.lanes |= u, nt |= u, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Vu(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(y(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== l);
      nn(u, n.memoizedState) || (De = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function os() {
  }
  function ss(e, n) {
    var t = b, r = Ke(), l = n(), u = !nn(r.memoizedState, l);
    if (u && (r.memoizedState = l, De = !0), r = r.queue, Wu(fs.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || se !== null && se.memoizedState.tag & 1) {
      if (t.flags |= 2048, ar(9, cs.bind(null, t, r, l, n), void 0, null), ae === null)
        throw Error(y(349));
      et & 30 || as(t, n, l);
    }
    return l;
  }
  function as(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function cs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ds(n) && ps(e);
  }
  function fs(e, n, t) {
    return t(function() {
      ds(n) && ps(e);
    });
  }
  function ds(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function ps(e) {
    var n = Nn(e, 1);
    n !== null && on(n, e, 1, -1);
  }
  function ys(e) {
    var n = yn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, n.queue = e, e = e.dispatch = Xc.bind(null, b, e), [n.memoizedState, e];
  }
  function ar(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ms() {
    return Ke().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = yn();
    b.flags |= e, l.memoizedState = ar(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Ke();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ue !== null) {
      var i = ue.memoizedState;
      if (u = i.destroy, r !== null && Uu(r, i.deps)) {
        l.memoizedState = ar(n, t, u, r);
        return;
      }
    }
    b.flags |= e, l.memoizedState = ar(1 | n, t, u, r);
  }
  function hs(e, n) {
    return ll(8390656, 8, e, n);
  }
  function Wu(e, n) {
    return ul(2048, 8, e, n);
  }
  function vs(e, n) {
    return ul(4, 2, e, n);
  }
  function gs(e, n) {
    return ul(4, 4, e, n);
  }
  function Ms(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function ws(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, Ms.bind(null, n, e), t);
  }
  function Bu() {
  }
  function Ss(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ns(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function ks(e, n, t) {
    return et & 21 ? (nn(t, n) || (t = Gi(), b.lanes |= t, nt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = t);
  }
  function Gc(e, n) {
    var t = F;
    F = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Ru.transition;
    Ru.transition = {};
    try {
      e(!1), n();
    } finally {
      F = t, Ru.transition = r;
    }
  }
  function Es() {
    return Ke().memoizedState;
  }
  function Zc(e, n, t) {
    var r = Vn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ls(e))
      js(n, t);
    else if (t = Zo(e, n, t, r), t !== null) {
      var l = Ne();
      on(t, e, r, l), Ts(t, n, r);
    }
  }
  function Xc(e, n, t) {
    var r = Vn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e))
      js(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null))
        try {
          var i = n.lastRenderedState, o = u(i, t);
          if (l.hasEagerState = !0, l.eagerState = o, nn(o, i)) {
            var s = n.interleaved;
            s === null ? (l.next = l, xu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = Zo(e, n, l, r), t !== null && (l = Ne(), on(t, e, r, l), Ts(t, n, r));
    }
  }
  function Ls(e) {
    var n = e.alternate;
    return e === b || n !== null && n === b;
  }
  function js(e, n) {
    ir = rl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ts(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Bl(e, t);
    }
  }
  var il = { readContext: $e, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Jc = { readContext: $e, useCallback: function(e, n) {
    return yn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: $e, useEffect: hs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ll(
      4194308,
      4,
      Ms.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ll(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ll(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = yn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = yn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Zc.bind(null, b, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = yn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ys, useDebugValue: Bu, useDeferredValue: function(e) {
    return yn().memoizedState = e;
  }, useTransition: function() {
    var e = ys(!1), n = e[0];
    return e = Gc.bind(null, e[1]), yn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = b, l = yn();
    if (Z) {
      if (t === void 0)
        throw Error(y(407));
      t = t();
    } else {
      if (t = n(), ae === null)
        throw Error(y(349));
      et & 30 || as(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, hs(fs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, ar(9, cs.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = yn(), n = ae.identifierPrefix;
    if (Z) {
      var t = Sn, r = wn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = or++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Kc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, qc = {
    readContext: $e,
    useCallback: Ss,
    useContext: $e,
    useEffect: Wu,
    useImperativeHandle: ws,
    useInsertionEffect: vs,
    useLayoutEffect: gs,
    useMemo: Ns,
    useReducer: Yu,
    useRef: ms,
    useState: function() {
      return Yu(sr);
    },
    useDebugValue: Bu,
    useDeferredValue: function(e) {
      var n = Ke();
      return ks(n, ue.memoizedState, e);
    },
    useTransition: function() {
      var e = Yu(sr)[0], n = Ke().memoizedState;
      return [e, n];
    },
    useMutableSource: os,
    useSyncExternalStore: ss,
    useId: Es,
    unstable_isNewReconciler: !1
  }, bc = { readContext: $e, useCallback: Ss, useContext: $e, useEffect: Wu, useImperativeHandle: ws, useInsertionEffect: vs, useLayoutEffect: gs, useMemo: Ns, useReducer: Vu, useRef: ms, useState: function() {
    return Vu(sr);
  }, useDebugValue: Bu, useDeferredValue: function(e) {
    var n = Ke();
    return ue === null ? n.memoizedState = e : ks(n, ue.memoizedState, e);
  }, useTransition: function() {
    var e = Vu(sr)[0], n = Ke().memoizedState;
    return [e, n];
  }, useMutableSource: os, useSyncExternalStore: ss, useId: Es, unstable_isNewReconciler: !1 };
  function jt(e, n) {
    try {
      var t = "", r = n;
      do
        t += W(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Hu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function $u(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var ef = typeof WeakMap == "function" ? WeakMap : Map;
  function Cs(e, n, t) {
    t = kn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      pl || (pl = !0, oi = r), $u(e, n);
    }, t;
  }
  function xs(e, n, t) {
    t = kn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        $u(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      $u(e, n), typeof r != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([this]) : Qn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function zs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ef();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = mf.bind(null, e, n, t), n.then(e, e));
  }
  function Ds(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Is(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = kn(-1, 1), n.tag = 2, Un(t, n, 1))), t.lanes |= 1), e);
  }
  var nf = ye.ReactCurrentOwner, De = !1;
  function Se(e, n, t, r) {
    n.child = e === null ? us(n, null, t, r) : Et(n, e.child, t, r);
  }
  function _s(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return kt(n, l), r = Fu(e, n, t, r, u, l), t = Qu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, En(e, n, l)) : (Z && t && wu(n), n.flags |= 1, Se(e, n, r, l), n.child);
  }
  function Os(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !yi(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, As(e, n, u, r, l)) : (e = Ml(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref)
        return En(e, n, l);
    }
    return n.flags |= 1, e = Bn(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function As(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref)
        if (De = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)
          e.flags & 131072 && (De = !0);
        else
          return n.lanes = e.lanes, En(e, n, l);
    }
    return Ku(e, n, t, r, l);
  }
  function Ps(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(Ct, Qe), Qe |= t;
      else {
        if (!(t & 1073741824))
          return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, B(Ct, Qe), Qe |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, B(Ct, Qe), Qe |= r;
      }
    else
      u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, B(Ct, Qe), Qe |= r;
    return Se(e, n, l, t), n.child;
  }
  function Rs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Ku(e, n, t, r, l) {
    var u = ze(t) ? Zn : me.current;
    return u = gt(n, u), kt(n, l), t = Fu(e, n, t, r, u, l), r = Qu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, En(e, n, l)) : (Z && r && wu(n), n.flags |= 1, Se(e, n, t, l), n.child);
  }
  function Us(e, n, t, r, l) {
    if (ze(t)) {
      var u = !0;
      Br(n);
    } else
      u = !1;
    if (kt(n, l), n.stateNode === null)
      sl(e, n), ns(n, t, r), Iu(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, o = n.memoizedProps;
      i.props = o;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = $e(p) : (p = ze(t) ? Zn : me.current, p = gt(n, p));
      var v = t.getDerivedStateFromProps, g = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== p) && ts(n, i, r, p), Rn = !1;
      var m = n.memoizedState;
      i.state = m, qr(n, r, i, l), s = n.memoizedState, o !== r || m !== s || xe.current || Rn ? (typeof v == "function" && (Du(n, t, v, r), s = n.memoizedState), (o = Rn || es(n, t, o, r, m, s, p)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = o) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, Xo(e, n), o = n.memoizedProps, p = n.type === n.elementType ? o : rn(n.type, o), i.props = p, g = n.pendingProps, m = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = $e(s) : (s = ze(t) ? Zn : me.current, s = gt(n, s));
      var S = t.getDerivedStateFromProps;
      (v = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== g || m !== s) && ts(n, i, r, s), Rn = !1, m = n.memoizedState, i.state = m, qr(n, r, i, l);
      var k = n.memoizedState;
      o !== g || m !== k || xe.current || Rn ? (typeof S == "function" && (Du(n, t, S, r), k = n.memoizedState), (p = Rn || es(n, t, p, r, m, k, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = k), i.props = r, i.state = k, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Gu(e, n, t, r, u, l);
  }
  function Gu(e, n, t, r, l, u) {
    Rs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i)
      return l && Vo(n, t, !1), En(e, n, u);
    r = n.stateNode, nf.current = n;
    var o = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Et(n, e.child, null, u), n.child = Et(n, null, o, u)) : Se(e, n, o, u), n.memoizedState = r.state, l && Vo(n, t, !0), n.child;
  }
  function Fs(e) {
    var n = e.stateNode;
    n.pendingContext ? Qo(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Qo(e, n.context, !1), _u(e, n.containerInfo);
  }
  function Qs(e, n, t, r, l) {
    return St(), Eu(l), n.flags |= 256, Se(e, n, t, r), n.child;
  }
  var Zu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, n, t) {
    var r = n.pendingProps, l = q.current, u = !1, i = (n.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(q, l & 1), e === null)
      return ku(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = wl(i, r, 0, null), e = ut(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Xu(t), n.memoizedState = Zu, e) : Ju(n, i));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null))
      return tf(e, n, i, r, o, l, t);
    if (u) {
      u = r.fallback, i = n.mode, l = e.child, o = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Bn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = Bn(o, u) : (u = ut(u, i, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, i = e.child.memoizedState, i = i === null ? Xu(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~t, n.memoizedState = Zu, r;
    }
    return u = e.child, e = u.sibling, r = Bn(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function Ju(e, n) {
    return n = wl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function ol(e, n, t, r) {
    return r !== null && Eu(r), Et(n, e.child, null, t), e = Ju(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function tf(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Hu(Error(y(422))), ol(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), u = ut(u, l, i, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && Et(n, e.child, null, i), n.child.memoizedState = Xu(i), n.memoizedState = Zu, u);
    if (!(n.mode & 1))
      return ol(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var o = r.dgst;
      return r = o, u = Error(y(419)), r = Hu(u, r, void 0), ol(e, n, i, r);
    }
    if (o = (i & e.childLanes) !== 0, De || o) {
      if (r = ae, r !== null) {
        switch (i & -i) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Nn(e, l), on(r, e, l, -1));
      }
      return pi(), r = Hu(Error(y(421))), ol(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = hf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Fe = _n(l.nextSibling), Ue = n, Z = !0, tn = null, e !== null && (Be[He++] = wn, Be[He++] = Sn, Be[He++] = Xn, wn = e.id, Sn = e.overflow, Xn = n), n = Ju(n, r.children), n.flags |= 4096, n);
  }
  function Vs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Cu(e.return, n, t);
  }
  function qu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (Se(e, n, r.children, t), r = q.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Vs(e, t, n);
            else if (e.tag === 19)
              Vs(e, t, n);
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
    if (B(q, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && nl(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), qu(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && nl(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          qu(n, !0, t, null, u);
          break;
        case "together":
          qu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function sl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function En(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), nt |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(y(153));
    if (n.child !== null) {
      for (e = n.child, t = Bn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Bn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function rf(e, n, t) {
    switch (n.tag) {
      case 3:
        Fs(n), St();
        break;
      case 5:
        is(n);
        break;
      case 1:
        ze(n.type) && Br(n);
        break;
      case 4:
        _u(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        B(Zr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (B(q, q.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Ys(e, n, t) : (B(q, q.current & 1), e = En(e, n, t), e !== null ? e.sibling : null);
        B(q, q.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ws(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(q, q.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Ps(e, n, t);
    }
    return En(e, n, t);
  }
  var Bs, bu, Hs, $s;
  Bs = function(e, n) {
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
  }, bu = function() {
  }, Hs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, bn(pn.current);
      var u = null;
      switch (t) {
        case "input":
          l = Cl(e, l), r = Cl(e, r), u = [];
          break;
        case "select":
          l = a({}, l, { value: void 0 }), r = a({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Dl(e, l), r = Dl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
      }
      _l(t, r);
      var i;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var o = l[p];
            for (i in o)
              o.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Ee.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (o = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          if (p === "style")
            if (o) {
              for (i in o)
                !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
              for (i in s)
                s.hasOwnProperty(i) && o[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
            } else
              t || (u || (u = []), u.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Ee.hasOwnProperty(p) ? (s != null && p === "onScroll" && H("scroll", e), u || o === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, $s = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function cr(e, n) {
    if (!Z)
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
  function ve(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function lf(e, n, t) {
    var r = n.pendingProps;
    switch (Su(n), n.tag) {
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
        return ve(n), null;
      case 1:
        return ze(n.type) && Wr(), ve(n), null;
      case 3:
        return r = n.stateNode, Lt(), $(xe), $(me), Pu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (ci(tn), tn = null))), bu(e, n), ve(n), null;
      case 5:
        Ou(n);
        var l = bn(ur.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Hs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(y(166));
            return ve(n), null;
          }
          if (e = bn(pn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[dn] = n, r[er] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                H("cancel", r), H("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jt.length; l++)
                  H(Jt[l], r);
                break;
              case "source":
                H("error", r);
                break;
              case "img":
              case "image":
              case "link":
                H(
                  "error",
                  r
                ), H("load", r);
                break;
              case "details":
                H("toggle", r);
                break;
              case "input":
                Ei(r, u), H("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, H("invalid", r);
                break;
              case "textarea":
                Ti(r, u), H("invalid", r);
            }
            _l(t, u), l = null;
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && Qr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && Qr(
                  r.textContent,
                  o,
                  e
                ), l = ["children", "" + o]) : Ee.hasOwnProperty(i) && o != null && i === "onScroll" && H("scroll", r);
              }
            switch (t) {
              case "input":
                vr(r), ji(r, u, !0);
                break;
              case "textarea":
                vr(r), xi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Yr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zi(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[dn] = n, e[er] = r, Bs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Ol(t, r), t) {
                case "dialog":
                  H("cancel", e), H("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  H("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Jt.length; l++)
                    H(Jt[l], e);
                  l = r;
                  break;
                case "source":
                  H("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  H(
                    "error",
                    e
                  ), H("load", e), l = r;
                  break;
                case "details":
                  H("toggle", e), l = r;
                  break;
                case "input":
                  Ei(e, r), l = Cl(e, r), H("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = a({}, r, { value: void 0 }), H("invalid", e);
                  break;
                case "textarea":
                  Ti(e, r), l = Dl(e, r), H("invalid", e);
                  break;
                default:
                  l = r;
              }
              _l(t, l), o = l;
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style" ? _i(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Di(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && It(e, s) : typeof s == "number" && It(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ee.hasOwnProperty(u) ? s != null && u === "onScroll" && H("scroll", e) : s != null && Je(e, u, s, i));
                }
              switch (t) {
                case "input":
                  vr(e), ji(e, r, !1);
                  break;
                case "textarea":
                  vr(e), xi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + U(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? it(e, !!r.multiple, u, !1) : r.defaultValue != null && it(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
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
        return ve(n), null;
      case 6:
        if (e && n.stateNode != null)
          $s(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(y(166));
          if (t = bn(ur.current), bn(pn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (u = r.nodeValue !== t) && (e = Ue, e !== null))
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Qr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return ve(n), null;
      case 13:
        if ($(q), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Z && Fe !== null && n.mode & 1 && !(n.flags & 128))
            Go(), St(), n.flags |= 98560, u = !1;
          else if (u = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u)
                throw Error(y(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                throw Error(y(317));
              u[dn] = n;
            } else
              St(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ve(n), u = !1;
          } else
            tn !== null && (ci(tn), tn = null), u = !0;
          if (!u)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || q.current & 1 ? ie === 0 && (ie = 3) : pi())), n.updateQueue !== null && (n.flags |= 4), ve(n), null);
      case 4:
        return Lt(), bu(e, n), e === null && qt(n.stateNode.containerInfo), ve(n), null;
      case 10:
        return Tu(n.type._context), ve(n), null;
      case 17:
        return ze(n.type) && Wr(), ve(n), null;
      case 19:
        if ($(q), u = n.memoizedState, u === null)
          return ve(n), null;
        if (r = (n.flags & 128) !== 0, i = u.rendering, i === null)
          if (r)
            cr(u, !1);
          else {
            if (ie !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (i = nl(e), i !== null) {
                  for (n.flags |= 128, cr(u, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    u = t, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return B(q, q.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null && te() > xt && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = nl(i), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), cr(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !Z)
                return ve(n), null;
            } else
              2 * te() - u.renderingStartTime > xt && t !== 1073741824 && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (i.sibling = n.child, n.child = i) : (t = u.last, t !== null ? t.sibling = i : n.child = i, u.last = i);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = te(), n.sibling = null, t = q.current, B(q, r ? t & 1 | 2 : t & 1), n) : (ve(n), null);
      case 22:
      case 23:
        return di(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Qe & 1073741824 && (ve(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ve(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, n.tag));
  }
  function uf(e, n) {
    switch (Su(n), n.tag) {
      case 1:
        return ze(n.type) && Wr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Lt(), $(xe), $(me), Pu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ou(n), null;
      case 13:
        if ($(q), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(y(340));
          St();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return $(q), null;
      case 4:
        return Lt(), null;
      case 10:
        return Tu(n.type._context), null;
      case 22:
      case 23:
        return di(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var al = !1, ge = !1, of = typeof WeakSet == "function" ? WeakSet : Set, N = null;
  function Tt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ne(e, n, r);
        }
      else
        t.current = null;
  }
  function ei(e, n, t) {
    try {
      t();
    } catch (r) {
      ne(e, n, r);
    }
  }
  var Ks = !1;
  function sf(e, n) {
    if (du = xr, e = Eo(), lu(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0, o = -1, s = -1, p = 0, v = 0, g = e, m = null;
            n:
              for (; ; ) {
                for (var S; g !== t || l !== 0 && g.nodeType !== 3 || (o = i + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (S = g.firstChild) !== null; )
                  m = g, g = S;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (m === t && ++p === l && (o = i), m === u && ++v === r && (s = i), (S = g.nextSibling) !== null)
                    break;
                  g = m, m = g.parentNode;
                }
                g = S;
              }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (pu = { focusedElem: e, selectionRange: t }, xr = !1, N = n; N !== null; )
      if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, N = e;
      else
        for (; N !== null; ) {
          n = N;
          try {
            var k = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (k !== null) {
                    var E = k.memoizedProps, re = k.memoizedState, f = n.stateNode, c = f.getSnapshotBeforeUpdate(n.elementType === n.type ? E : rn(n.type, E), re);
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (M) {
            ne(n, n.return, M);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, N = e;
            break;
          }
          N = n.return;
        }
    return k = Ks, Ks = !1, k;
  }
  function fr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ei(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function cl(e, n) {
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
  function ni(e) {
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
  function Gs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Gs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[er], delete n[vu], delete n[Wc], delete n[Bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Xs(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zs(e.return))
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
  function ti(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Yr));
    else if (r !== 4 && (e = e.child, e !== null))
      for (ti(e, n, t), e = e.sibling; e !== null; )
        ti(e, n, t), e = e.sibling;
  }
  function ri(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (ri(e, n, t), e = e.sibling; e !== null; )
        ri(e, n, t), e = e.sibling;
  }
  var fe = null, ln = !1;
  function Fn(e, n, t) {
    for (t = t.child; t !== null; )
      Js(e, n, t), t = t.sibling;
  }
  function Js(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function")
      try {
        fn.onCommitFiberUnmount(kr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        ge || Tt(t, n);
      case 6:
        var r = fe, l = ln;
        fe = null, Fn(e, n, t), fe = r, ln = l, fe !== null && (ln ? (e = fe, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : fe.removeChild(t.stateNode));
        break;
      case 18:
        fe !== null && (ln ? (e = fe, t = t.stateNode, e.nodeType === 8 ? hu(e.parentNode, t) : e.nodeType === 1 && hu(e, t), Wt(e)) : hu(fe, t.stateNode));
        break;
      case 4:
        r = fe, l = ln, fe = t.stateNode.containerInfo, ln = !0, Fn(e, n, t), fe = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ge && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, i = u.destroy;
            u = u.tag, i !== void 0 && (u & 2 || u & 4) && ei(t, n, i), l = l.next;
          } while (l !== r);
        }
        Fn(e, n, t);
        break;
      case 1:
        if (!ge && (Tt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (o) {
            ne(t, n, o);
          }
        Fn(e, n, t);
        break;
      case 21:
        Fn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (ge = (r = ge) || t.memoizedState !== null, Fn(e, n, t), ge = r) : Fn(e, n, t);
        break;
      default:
        Fn(e, n, t);
    }
  }
  function qs(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new of()), n.forEach(function(r) {
        var l = vf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function un(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e, i = n, o = i;
          e:
            for (; o !== null; ) {
              switch (o.tag) {
                case 5:
                  fe = o.stateNode, ln = !1;
                  break e;
                case 3:
                  fe = o.stateNode.containerInfo, ln = !0;
                  break e;
                case 4:
                  fe = o.stateNode.containerInfo, ln = !0;
                  break e;
              }
              o = o.return;
            }
          if (fe === null)
            throw Error(y(160));
          Js(u, i, l), fe = null, ln = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          ne(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        bs(n, e), n = n.sibling;
  }
  function bs(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(n, e), mn(e), r & 4) {
          try {
            fr(3, e, e.return), cl(3, e);
          } catch (E) {
            ne(e, e.return, E);
          }
          try {
            fr(5, e, e.return);
          } catch (E) {
            ne(e, e.return, E);
          }
        }
        break;
      case 1:
        un(n, e), mn(e), r & 512 && t !== null && Tt(t, t.return);
        break;
      case 5:
        if (un(n, e), mn(e), r & 512 && t !== null && Tt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            It(l, "");
          } catch (E) {
            ne(e, e.return, E);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, i = t !== null ? t.memoizedProps : u, o = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              o === "input" && u.type === "radio" && u.name != null && Li(l, u), Ol(o, i);
              var p = Ol(o, u);
              for (i = 0; i < s.length; i += 2) {
                var v = s[i], g = s[i + 1];
                v === "style" ? _i(l, g) : v === "dangerouslySetInnerHTML" ? Di(l, g) : v === "children" ? It(l, g) : Je(l, v, g, p);
              }
              switch (o) {
                case "input":
                  xl(l, u);
                  break;
                case "textarea":
                  Ci(l, u);
                  break;
                case "select":
                  var m = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null ? it(l, !!u.multiple, S, !1) : m !== !!u.multiple && (u.defaultValue != null ? it(
                    l,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  ) : it(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[er] = u;
            } catch (E) {
              ne(e, e.return, E);
            }
        }
        break;
      case 6:
        if (un(n, e), mn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(y(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (E) {
            ne(e, e.return, E);
          }
        }
        break;
      case 3:
        if (un(n, e), mn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wt(n.containerInfo);
          } catch (E) {
            ne(e, e.return, E);
          }
        break;
      case 4:
        un(n, e), mn(e);
        break;
      case 13:
        un(n, e), mn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (ii = te())), r & 4 && qs(e);
        break;
      case 22:
        if (v = t !== null && t.memoizedState !== null, e.mode & 1 ? (ge = (p = ge) || v, un(n, e), ge = p) : un(n, e), mn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !v && e.mode & 1)
            for (N = e, v = e.child; v !== null; ) {
              for (g = N = v; N !== null; ) {
                switch (m = N, S = m.child, m.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fr(4, m, m.return);
                    break;
                  case 1:
                    Tt(m, m.return);
                    var k = m.stateNode;
                    if (typeof k.componentWillUnmount == "function") {
                      r = m, t = m.return;
                      try {
                        n = r, k.props = n.memoizedProps, k.state = n.memoizedState, k.componentWillUnmount();
                      } catch (E) {
                        ne(r, t, E);
                      }
                    }
                    break;
                  case 5:
                    Tt(m, m.return);
                    break;
                  case 22:
                    if (m.memoizedState !== null) {
                      ta(g);
                      continue;
                    }
                }
                S !== null ? (S.return = m, N = S) : ta(g);
              }
              v = v.sibling;
            }
          e:
            for (v = null, g = e; ; ) {
              if (g.tag === 5) {
                if (v === null) {
                  v = g;
                  try {
                    l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = g.stateNode, s = g.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = Ii("display", i));
                  } catch (E) {
                    ne(e, e.return, E);
                  }
                }
              } else if (g.tag === 6) {
                if (v === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (E) {
                    ne(e, e.return, E);
                  }
              } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === e)
                break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === e)
                  break e;
                v === g && (v = null), g = g.return;
              }
              v === g && (v = null), g.sibling.return = g.return, g = g.sibling;
            }
        }
        break;
      case 19:
        un(n, e), mn(e), r & 4 && qs(e);
        break;
      case 21:
        break;
      default:
        un(
          n,
          e
        ), mn(e);
    }
  }
  function mn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Zs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(y(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (It(l, ""), r.flags &= -33);
            var u = Xs(e);
            ri(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, o = Xs(e);
            ti(e, o, i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (s) {
        ne(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function af(e, n, t) {
    N = e, ea(e);
  }
  function ea(e, n, t) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var l = N, u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || al;
        if (!i) {
          var o = l.alternate, s = o !== null && o.memoizedState !== null || ge;
          o = al;
          var p = ge;
          if (al = i, (ge = s) && !p)
            for (N = l; N !== null; )
              i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? ra(l) : s !== null ? (s.return = i, N = s) : ra(l);
          for (; u !== null; )
            N = u, ea(u), u = u.sibling;
          N = l, al = o, ge = p;
        }
        na(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? (u.return = l, N = u) : na(e);
    }
  }
  function na(e) {
    for (; N !== null; ) {
      var n = N;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ge || cl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !ge)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = n.updateQueue;
                u !== null && qo(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  qo(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
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
                  var p = n.alternate;
                  if (p !== null) {
                    var v = p.memoizedState;
                    if (v !== null) {
                      var g = v.dehydrated;
                      g !== null && Wt(g);
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
                throw Error(y(163));
            }
          ge || n.flags & 512 && ni(n);
        } catch (m) {
          ne(n, n.return, m);
        }
      }
      if (n === e) {
        N = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, N = t;
        break;
      }
      N = n.return;
    }
  }
  function ta(e) {
    for (; N !== null; ) {
      var n = N;
      if (n === e) {
        N = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, N = t;
        break;
      }
      N = n.return;
    }
  }
  function ra(e) {
    for (; N !== null; ) {
      var n = N;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              cl(4, n);
            } catch (s) {
              ne(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ne(n, l, s);
              }
            }
            var u = n.return;
            try {
              ni(n);
            } catch (s) {
              ne(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ni(n);
            } catch (s) {
              ne(n, i, s);
            }
        }
      } catch (s) {
        ne(n, n.return, s);
      }
      if (n === e) {
        N = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return, N = o;
        break;
      }
      N = n.return;
    }
  }
  var cf = Math.ceil, fl = ye.ReactCurrentDispatcher, li = ye.ReactCurrentOwner, Ge = ye.ReactCurrentBatchConfig, A = 0, ae = null, le = null, de = 0, Qe = 0, Ct = On(0), ie = 0, dr = null, nt = 0, dl = 0, ui = 0, pr = null, Ie = null, ii = 0, xt = 1 / 0, Ln = null, pl = !1, oi = null, Qn = null, yl = !1, Yn = null, ml = 0, yr = 0, si = null, hl = -1, vl = 0;
  function Ne() {
    return A & 6 ? te() : hl !== -1 ? hl : hl = te();
  }
  function Vn(e) {
    return e.mode & 1 ? A & 2 && de !== 0 ? de & -de : $c.transition !== null ? (vl === 0 && (vl = Gi()), vl) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ro(e.type)), e) : 1;
  }
  function on(e, n, t, r) {
    if (50 < yr)
      throw yr = 0, si = null, Error(y(185));
    Ut(e, t, r), (!(A & 2) || e !== ae) && (e === ae && (!(A & 2) && (dl |= t), ie === 4 && Wn(e, de)), _e(e, r), t === 1 && A === 0 && !(n.mode & 1) && (xt = te() + 500, Hr && Pn()));
  }
  function _e(e, n) {
    var t = e.callbackNode;
    $a(e, n);
    var r = jr(e, e === ae ? de : 0);
    if (r === 0)
      t !== null && Hi(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Hi(t), n === 1)
        e.tag === 0 ? Hc(ua.bind(null, e)) : Wo(ua.bind(null, e)), Yc(function() {
          !(A & 6) && Pn();
        }), t = null;
      else {
        switch (Zi(r)) {
          case 1:
            t = Yl;
            break;
          case 4:
            t = $i;
            break;
          case 16:
            t = Nr;
            break;
          case 536870912:
            t = Ki;
            break;
          default:
            t = Nr;
        }
        t = pa(t, la.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function la(e, n) {
    if (hl = -1, vl = 0, A & 6)
      throw Error(y(327));
    var t = e.callbackNode;
    if (zt() && e.callbackNode !== t)
      return null;
    var r = jr(e, e === ae ? de : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = gl(e, r);
    else {
      n = r;
      var l = A;
      A |= 2;
      var u = oa();
      (ae !== e || de !== n) && (Ln = null, xt = te() + 500, rt(e, n));
      do
        try {
          pf();
          break;
        } catch (o) {
          ia(e, o);
        }
      while (1);
      ju(), fl.current = u, A = l, le !== null ? n = 0 : (ae = null, de = 0, n = ie);
    }
    if (n !== 0) {
      if (n === 2 && (l = Vl(e), l !== 0 && (r = l, n = ai(e, l))), n === 1)
        throw t = dr, rt(e, 0), Wn(e, r), _e(e, te()), t;
      if (n === 6)
        Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !ff(l) && (n = gl(e, r), n === 2 && (u = Vl(e), u !== 0 && (r = u, n = ai(e, u))), n === 1))
          throw t = dr, rt(e, 0), Wn(e, r), _e(e, te()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            lt(e, Ie, Ln);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = ii + 500 - te(), 10 < n)) {
              if (jr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = mu(lt.bind(null, e, Ie, Ln), n);
              break;
            }
            lt(e, Ie, Ln);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - en(r);
              u = 1 << i, i = n[i], i > l && (l = i), r &= ~u;
            }
            if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = mu(lt.bind(null, e, Ie, Ln), r);
              break;
            }
            lt(e, Ie, Ln);
            break;
          case 5:
            lt(e, Ie, Ln);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return _e(e, te()), e.callbackNode === t ? la.bind(null, e) : null;
  }
  function ai(e, n) {
    var t = pr;
    return e.current.memoizedState.isDehydrated && (rt(e, n).flags |= 256), e = gl(e, n), e !== 2 && (n = Ie, Ie = t, n !== null && ci(n)), e;
  }
  function ci(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e);
  }
  function ff(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], u = l.getSnapshot;
            l = l.value;
            try {
              if (!nn(u(), l))
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
  function Wn(e, n) {
    for (n &= ~ui, n &= ~dl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ua(e) {
    if (A & 6)
      throw Error(y(327));
    zt();
    var n = jr(e, 0);
    if (!(n & 1))
      return _e(e, te()), null;
    var t = gl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Vl(e);
      r !== 0 && (n = r, t = ai(e, r));
    }
    if (t === 1)
      throw t = dr, rt(e, 0), Wn(e, n), _e(e, te()), t;
    if (t === 6)
      throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, lt(e, Ie, Ln), _e(e, te()), null;
  }
  function fi(e, n) {
    var t = A;
    A |= 1;
    try {
      return e(n);
    } finally {
      A = t, A === 0 && (xt = te() + 500, Hr && Pn());
    }
  }
  function tt(e) {
    Yn !== null && Yn.tag === 0 && !(A & 6) && zt();
    var n = A;
    A |= 1;
    var t = Ge.transition, r = F;
    try {
      if (Ge.transition = null, F = 1, e)
        return e();
    } finally {
      F = r, Ge.transition = t, A = n, !(A & 6) && Pn();
    }
  }
  function di() {
    Qe = Ct.current, $(Ct);
  }
  function rt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Qc(t)), le !== null)
      for (t = le.return; t !== null; ) {
        var r = t;
        switch (Su(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Wr();
            break;
          case 3:
            Lt(), $(xe), $(me), Pu();
            break;
          case 5:
            Ou(r);
            break;
          case 4:
            Lt();
            break;
          case 13:
            $(q);
            break;
          case 19:
            $(q);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            di();
        }
        t = t.return;
      }
    if (ae = e, le = e = Bn(e.current, null), de = Qe = n, ie = 0, dr = null, ui = dl = nt = 0, Ie = pr = null, qn !== null) {
      for (n = 0; n < qn.length; n++)
        if (t = qn[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, u = t.pending;
          if (u !== null) {
            var i = u.next;
            u.next = l, r.next = i;
          }
          t.pending = r;
        }
      qn = null;
    }
    return e;
  }
  function ia(e, n) {
    do {
      var t = le;
      try {
        if (ju(), tl.current = il, rl) {
          for (var r = b.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          rl = !1;
        }
        if (et = 0, se = ue = b = null, ir = !1, or = 0, li.current = null, t === null || t.return === null) {
          ie = 1, dr = n, le = null;
          break;
        }
        e: {
          var u = e, i = t.return, o = t, s = n;
          if (n = de, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, v = o, g = v.tag;
            if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var m = v.alternate;
              m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null);
            }
            var S = Ds(i);
            if (S !== null) {
              S.flags &= -257, Is(S, i, o, u, n), S.mode & 1 && zs(u, p, n), n = S, s = p;
              var k = n.updateQueue;
              if (k === null) {
                var E = /* @__PURE__ */ new Set();
                E.add(s), n.updateQueue = E;
              } else
                k.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                zs(u, p, n), pi();
                break e;
              }
              s = Error(y(426));
            }
          } else if (Z && o.mode & 1) {
            var re = Ds(i);
            if (re !== null) {
              !(re.flags & 65536) && (re.flags |= 256), Is(re, i, o, u, n), Eu(jt(s, o));
              break e;
            }
          }
          u = s = jt(s, o), ie !== 4 && (ie = 2), pr === null ? pr = [u] : pr.push(u), u = i;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Cs(u, s, n);
                Jo(u, f);
                break e;
              case 1:
                o = s;
                var c = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Qn === null || !Qn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var M = xs(u, o, n);
                  Jo(u, M);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        aa(t);
      } catch (L) {
        n = L, le === t && t !== null && (le = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function oa() {
    var e = fl.current;
    return fl.current = il, e === null ? il : e;
  }
  function pi() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ae === null || !(nt & 268435455) && !(dl & 268435455) || Wn(ae, de);
  }
  function gl(e, n) {
    var t = A;
    A |= 2;
    var r = oa();
    (ae !== e || de !== n) && (Ln = null, rt(e, n));
    do
      try {
        df();
        break;
      } catch (l) {
        ia(e, l);
      }
    while (1);
    if (ju(), A = t, fl.current = r, le !== null)
      throw Error(y(261));
    return ae = null, de = 0, ie;
  }
  function df() {
    for (; le !== null; )
      sa(le);
  }
  function pf() {
    for (; le !== null && !Ra(); )
      sa(le);
  }
  function sa(e) {
    var n = da(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, n === null ? aa(e) : le = n, li.current = null;
  }
  function aa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = uf(t, n), t !== null) {
          t.flags &= 32767, le = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ie = 6, le = null;
          return;
        }
      } else if (t = lf(t, n, Qe), t !== null) {
        le = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        le = n;
        return;
      }
      le = n = e;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function lt(e, n, t) {
    var r = F, l = Ge.transition;
    try {
      Ge.transition = null, F = 1, yf(e, n, t, r);
    } finally {
      Ge.transition = l, F = r;
    }
    return null;
  }
  function yf(e, n, t, r) {
    do
      zt();
    while (Yn !== null);
    if (A & 6)
      throw Error(y(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Ka(e, u), e === ae && (le = ae = null, de = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || yl || (yl = !0, pa(Nr, function() {
      return zt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ge.transition, Ge.transition = null;
      var i = F;
      F = 1;
      var o = A;
      A |= 4, li.current = null, sf(e, t), bs(t, e), _c(pu), xr = !!du, pu = du = null, e.current = t, af(t), Ua(), A = o, F = i, Ge.transition = u;
    } else
      e.current = t;
    if (yl && (yl = !1, Yn = e, ml = l), u = e.pendingLanes, u === 0 && (Qn = null), Ya(t.stateNode), _e(e, te()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (pl)
      throw pl = !1, e = oi, oi = null, e;
    return ml & 1 && e.tag !== 0 && zt(), u = e.pendingLanes, u & 1 ? e === si ? yr++ : (yr = 0, si = e) : yr = 0, Pn(), null;
  }
  function zt() {
    if (Yn !== null) {
      var e = Zi(ml), n = Ge.transition, t = F;
      try {
        if (Ge.transition = null, F = 16 > e ? 16 : e, Yn === null)
          var r = !1;
        else {
          if (e = Yn, Yn = null, ml = 0, A & 6)
            throw Error(y(331));
          var l = A;
          for (A |= 4, N = e.current; N !== null; ) {
            var u = N, i = u.child;
            if (N.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (N = p; N !== null; ) {
                    var v = N;
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fr(8, v, u);
                    }
                    var g = v.child;
                    if (g !== null)
                      g.return = v, N = g;
                    else
                      for (; N !== null; ) {
                        v = N;
                        var m = v.sibling, S = v.return;
                        if (Gs(v), v === p) {
                          N = null;
                          break;
                        }
                        if (m !== null) {
                          m.return = S, N = m;
                          break;
                        }
                        N = S;
                      }
                  }
                }
                var k = u.alternate;
                if (k !== null) {
                  var E = k.child;
                  if (E !== null) {
                    k.child = null;
                    do {
                      var re = E.sibling;
                      E.sibling = null, E = re;
                    } while (E !== null);
                  }
                }
                N = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null)
              i.return = u, N = i;
            else
              e:
                for (; N !== null; ) {
                  if (u = N, u.flags & 2048)
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fr(9, u, u.return);
                    }
                  var f = u.sibling;
                  if (f !== null) {
                    f.return = u.return, N = f;
                    break e;
                  }
                  N = u.return;
                }
          }
          var c = e.current;
          for (N = c; N !== null; ) {
            i = N;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null)
              d.return = i, N = d;
            else
              e:
                for (i = c; N !== null; ) {
                  if (o = N, o.flags & 2048)
                    try {
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          cl(9, o);
                      }
                    } catch (L) {
                      ne(o, o.return, L);
                    }
                  if (o === i) {
                    N = null;
                    break e;
                  }
                  var M = o.sibling;
                  if (M !== null) {
                    M.return = o.return, N = M;
                    break e;
                  }
                  N = o.return;
                }
          }
          if (A = l, Pn(), fn && typeof fn.onPostCommitFiberRoot == "function")
            try {
              fn.onPostCommitFiberRoot(kr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        F = t, Ge.transition = n;
      }
    }
    return !1;
  }
  function ca(e, n, t) {
    n = jt(t, n), n = Cs(e, n, 1), e = Un(e, n, 1), n = Ne(), e !== null && (Ut(e, 1, n), _e(e, n));
  }
  function ne(e, n, t) {
    if (e.tag === 3)
      ca(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ca(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qn === null || !Qn.has(r))) {
            e = jt(t, e), e = xs(n, e, 1), n = Un(n, e, 1), e = Ne(), n !== null && (Ut(n, 1, e), _e(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function mf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ne(), e.pingedLanes |= e.suspendedLanes & t, ae === e && (de & t) === t && (ie === 4 || ie === 3 && (de & 130023424) === de && 500 > te() - ii ? rt(e, 0) : ui |= t), _e(e, n);
  }
  function fa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Lr, Lr <<= 1, !(Lr & 130023424) && (Lr = 4194304)) : n = 1);
    var t = Ne();
    e = Nn(e, n), e !== null && (Ut(e, n, t), _e(e, t));
  }
  function hf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), fa(e, t);
  }
  function vf(e, n) {
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
        throw Error(y(314));
    }
    r !== null && r.delete(n), fa(e, t);
  }
  var da;
  da = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || xe.current)
        De = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return De = !1, rf(e, n, t);
        De = !!(e.flags & 131072);
      }
    else
      De = !1, Z && n.flags & 1048576 && Bo(n, Kr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        sl(e, n), e = n.pendingProps;
        var l = gt(n, me.current);
        kt(n, t), l = Fu(null, n, r, e, l, t);
        var u = Qu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ze(r) ? (u = !0, Br(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zu(n), l.updater = br, n.stateNode = l, l._reactInternals = n, Iu(n, r, e, t), n = Gu(null, n, r, !0, u, t)) : (n.tag = 0, Z && u && wu(n), Se(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (sl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Mf(r), e = rn(r, e), l) {
            case 0:
              n = Ku(null, n, r, e, t);
              break e;
            case 1:
              n = Us(null, n, r, e, t);
              break e;
            case 11:
              n = _s(null, n, r, e, t);
              break e;
            case 14:
              n = Os(null, n, r, rn(r.type, e), t);
              break e;
          }
          throw Error(y(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Ku(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Us(e, n, r, l, t);
      case 3:
        e: {
          if (Fs(n), e === null)
            throw Error(y(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, Xo(e, n), qr(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, u.isDehydrated)
            if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
              l = jt(Error(y(423)), n), n = Qs(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = jt(Error(y(424)), n), n = Qs(e, n, r, t, l);
              break e;
            } else
              for (Fe = _n(n.stateNode.containerInfo.firstChild), Ue = n, Z = !0, tn = null, t = us(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (St(), r === l) {
              n = En(e, n, t);
              break e;
            }
            Se(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return is(n), e === null && ku(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, yu(r, l) ? i = null : u !== null && yu(r, u) && (n.flags |= 32), Rs(e, n), Se(e, n, i, t), n.child;
      case 6:
        return e === null && ku(n), null;
      case 13:
        return Ys(e, n, t);
      case 4:
        return _u(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Et(n, null, r, t) : Se(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), _s(e, n, r, l, t);
      case 7:
        return Se(e, n, n.pendingProps, t), n.child;
      case 8:
        return Se(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Se(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, i = l.value, B(Zr, r._currentValue), r._currentValue = i, u !== null)
            if (nn(u.value, i)) {
              if (u.children === l.children && !xe.current) {
                n = En(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        s = kn(-1, t & -t), s.tag = 2;
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var v = p.pending;
                          v === null ? s.next = s : (s.next = v.next, v.next = s), p.pending = s;
                        }
                      }
                      u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Cu(
                        u.return,
                        t,
                        n
                      ), o.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10)
                  i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (i = u.return, i === null)
                    throw Error(y(341));
                  i.lanes |= t, o = i.alternate, o !== null && (o.lanes |= t), Cu(i, t, n), i = u.sibling;
                } else
                  i = u.child;
                if (i !== null)
                  i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (u = i.sibling, u !== null) {
                      u.return = i.return, i = u;
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Se(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, kt(n, t), l = $e(l), r = r(l), n.flags |= 1, Se(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), Os(e, n, r, l, t);
      case 15:
        return As(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), sl(e, n), n.tag = 1, ze(r) ? (e = !0, Br(n)) : e = !1, kt(n, t), ns(n, r, l), Iu(n, r, l, t), Gu(null, n, r, !0, e, t);
      case 19:
        return Ws(e, n, t);
      case 22:
        return Ps(e, n, t);
    }
    throw Error(y(156, n.tag));
  };
  function pa(e, n) {
    return Bi(e, n);
  }
  function gf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(e, n, t, r) {
    return new gf(e, n, t, r);
  }
  function yi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mf(e) {
    if (typeof e == "function")
      return yi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an)
        return 11;
      if (e === cn)
        return 14;
    }
    return 2;
  }
  function Bn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Ml(e, n, t, r, l, u) {
    var i = 2;
    if (r = e, typeof e == "function")
      yi(e) && (i = 1);
    else if (typeof e == "string")
      i = 5;
    else
      e:
        switch (e) {
          case je:
            return ut(t.children, l, u, n);
          case We:
            i = 8, l |= 8;
            break;
          case jn:
            return e = Ze(12, t, n, l | 2), e.elementType = jn, e.lanes = u, e;
          case Pe:
            return e = Ze(13, t, n, l), e.elementType = Pe, e.lanes = u, e;
          case be:
            return e = Ze(19, t, n, l), e.elementType = be, e.lanes = u, e;
          case ee:
            return wl(t, l, u, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vn:
                  i = 10;
                  break e;
                case $n:
                  i = 9;
                  break e;
                case an:
                  i = 11;
                  break e;
                case cn:
                  i = 14;
                  break e;
                case Te:
                  i = 16, r = null;
                  break e;
              }
            throw Error(y(130, e == null ? e : typeof e, ""));
        }
    return n = Ze(i, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function ut(e, n, t, r) {
    return e = Ze(7, e, r, n), e.lanes = t, e;
  }
  function wl(e, n, t, r) {
    return e = Ze(22, e, r, n), e.elementType = ee, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function mi(e, n, t) {
    return e = Ze(6, e, null, n), e.lanes = t, e;
  }
  function hi(e, n, t) {
    return n = Ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function wf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function vi(e, n, t, r, l, u, i, o, s) {
    return e = new wf(e, n, t, o, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Ze(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zu(u), e;
  }
  function Sf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: we, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ya(e) {
    if (!e)
      return An;
    e = e._reactInternals;
    e: {
      if (Kn(e) !== e || e.tag !== 1)
        throw Error(y(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (ze(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(y(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (ze(t))
        return Yo(e, t, n);
    }
    return n;
  }
  function ma(e, n, t, r, l, u, i, o, s) {
    return e = vi(t, r, !0, e, l, u, i, o, s), e.context = ya(null), t = e.current, r = Ne(), l = Vn(t), u = kn(r, l), u.callback = n ?? null, Un(t, u, l), e.current.lanes = l, Ut(e, l, r), _e(e, r), e;
  }
  function Sl(e, n, t, r) {
    var l = n.current, u = Ne(), i = Vn(l);
    return t = ya(t), n.context === null ? n.context = t : n.pendingContext = t, n = kn(u, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Un(l, n, i), e !== null && (on(e, l, i, u), Jr(e, l, i)), i;
  }
  function Nl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ha(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function gi(e, n) {
    ha(e, n), (e = e.alternate) && ha(e, n);
  }
  function Nf() {
    return null;
  }
  var va = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Mi(e) {
    this._internalRoot = e;
  }
  kl.prototype.render = Mi.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(y(409));
    Sl(e, n, null, null);
  }, kl.prototype.unmount = Mi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      tt(function() {
        Sl(null, e, null, null);
      }), n[gn] = null;
    }
  };
  function kl(e) {
    this._internalRoot = e;
  }
  kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = qi();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < zn.length && n !== 0 && n < zn[t].priority; t++)
        ;
      zn.splice(t, 0, e), t === 0 && no(e);
    }
  };
  function wi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function El(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ga() {
  }
  function kf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = Nl(i);
          u.call(p);
        };
      }
      var i = ma(n, r, e, 0, null, !1, !1, "", ga);
      return e._reactRootContainer = i, e[gn] = i.current, qt(e.nodeType === 8 ? e.parentNode : e), tt(), i;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = Nl(s);
        o.call(p);
      };
    }
    var s = vi(e, 0, !1, null, null, !1, !1, "", ga);
    return e._reactRootContainer = s, e[gn] = s.current, qt(e.nodeType === 8 ? e.parentNode : e), tt(function() {
      Sl(n, s, t, r);
    }), s;
  }
  function Ll(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var s = Nl(i);
          o.call(s);
        };
      }
      Sl(n, i, e, l);
    } else
      i = kf(t, n, e, l, r);
    return Nl(i);
  }
  Xi = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Rt(n.pendingLanes);
          t !== 0 && (Bl(n, t | 1), _e(n, te()), !(A & 6) && (xt = te() + 500, Pn()));
        }
        break;
      case 13:
        tt(function() {
          var r = Nn(e, 1);
          if (r !== null) {
            var l = Ne();
            on(r, e, 1, l);
          }
        }), gi(e, 1);
    }
  }, Hl = function(e) {
    if (e.tag === 13) {
      var n = Nn(e, 134217728);
      if (n !== null) {
        var t = Ne();
        on(n, e, 134217728, t);
      }
      gi(e, 134217728);
    }
  }, Ji = function(e) {
    if (e.tag === 13) {
      var n = Vn(e), t = Nn(e, n);
      if (t !== null) {
        var r = Ne();
        on(t, e, n, r);
      }
      gi(e, n);
    }
  }, qi = function() {
    return F;
  }, bi = function(e, n) {
    var t = F;
    try {
      return F = e, n();
    } finally {
      F = t;
    }
  }, Rl = function(e, n, t) {
    switch (n) {
      case "input":
        if (xl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Vr(r);
              if (!l)
                throw Error(y(90));
              ki(r), xl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ci(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Ri = fi, Ui = tt;
  var Ef = { usingClientEntryPoint: !1, Events: [nr, ht, Vr, Ai, Pi, fi] }, mr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Lf = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Vi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: mr.findFiberByHostInstance || Nf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber)
      try {
        kr = jl.inject(Lf), fn = jl;
      } catch {
      }
  }
  return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef, Oe.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!wi(n))
      throw Error(y(200));
    return Sf(e, n, null, t);
  }, Oe.createRoot = function(e, n) {
    if (!wi(e))
      throw Error(y(299));
    var t = !1, r = "", l = va;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = vi(e, 1, !1, null, null, t, !1, r, l), e[gn] = n.current, qt(e.nodeType === 8 ? e.parentNode : e), new Mi(n);
  }, Oe.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = Vi(n), e = e === null ? null : e.stateNode, e;
  }, Oe.flushSync = function(e) {
    return tt(e);
  }, Oe.hydrate = function(e, n, t) {
    if (!El(n))
      throw Error(y(200));
    return Ll(null, e, n, !0, t);
  }, Oe.hydrateRoot = function(e, n, t) {
    if (!wi(e))
      throw Error(y(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", i = va;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ma(n, null, e, 1, t ?? null, l, !1, u, i), e[gn] = n.current, qt(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new kl(n);
  }, Oe.render = function(e, n, t) {
    if (!El(n))
      throw Error(y(200));
    return Ll(null, e, n, !1, t);
  }, Oe.unmountComponentAtNode = function(e) {
    if (!El(e))
      throw Error(y(40));
    return e._reactRootContainer ? (tt(function() {
      Ll(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gn] = null;
      });
    }), !0) : !1;
  }, Oe.unstable_batchedUpdates = fi, Oe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!El(t))
      throw Error(y(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(y(38));
    return Ll(e, n, t, !1, r);
  }, Oe.version = "18.2.0-next-9e3b772b8-20220608", Oe;
}
function Ca() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ca);
    } catch (D) {
      console.error(D);
    }
}
Ca(), Ta.exports = If();
var _f = Ta.exports;
const Of = /* @__PURE__ */ Ea(_f), Af = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==", Pf = "/vite.svg";
function Rf() {
  const [D, X] = Tl.useState(0);
  return /* @__PURE__ */ ke.jsxs(ke.Fragment, { children: [
    /* @__PURE__ */ ke.jsxs("div", { children: [
      /* @__PURE__ */ ke.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ ke.jsx("img", { src: Pf, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ ke.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ ke.jsx("img", { src: Af, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ ke.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ ke.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ ke.jsxs("button", { onClick: () => X((y) => y + 1), children: [
        "count is ",
        D
      ] }),
      /* @__PURE__ */ ke.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ ke.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ ke.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
Of.render(
  /* @__PURE__ */ ke.jsx(Cf.StrictMode, { children: /* @__PURE__ */ ke.jsx(Rf, {}) }),
  document.getElementById("component_1")
);
