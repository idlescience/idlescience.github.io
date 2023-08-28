function _a(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
var Ca = { exports: {} }, vr = {}, xa = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function Pf() {
  if (ga)
    return M;
  ga = 1;
  var R = Symbol.for("react.element"), ne = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), Ce = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), we = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function Y(a) {
    return a === null || typeof a != "object" ? null : (a = Z && a[Z] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var Ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, X = {};
  function B(a, h, P) {
    this.props = a, this.context = h, this.refs = X, this.updater = P || Ae;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, h, "setState");
  }, B.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function vn() {
  }
  vn.prototype = B.prototype;
  function on(a, h, P) {
    this.props = a, this.context = h, this.refs = X, this.updater = P || Ae;
  }
  var Ze = on.prototype = new vn();
  Ze.constructor = on, Be(Ze, B.prototype), Ze.isPureReactComponent = !0;
  var me = Array.isArray, Je = Object.prototype.hasOwnProperty, Se = { current: null }, xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(a, h, P) {
    var D, O = {}, $ = null, j = null;
    if (h != null)
      for (D in h.ref !== void 0 && (j = h.ref), h.key !== void 0 && ($ = "" + h.key), h)
        Je.call(h, D) && !xe.hasOwnProperty(D) && (O[D] = h[D]);
    var H = arguments.length - 2;
    if (H === 1)
      O.children = P;
    else if (1 < H) {
      for (var U = Array(H), Ne = 0; Ne < H; Ne++)
        U[Ne] = arguments[Ne + 2];
      O.children = U;
    }
    if (a && a.defaultProps)
      for (D in H = a.defaultProps, H)
        O[D] === void 0 && (O[D] = H[D]);
    return { $$typeof: R, type: a, key: $, ref: j, props: O, _owner: Se.current };
  }
  function xn(a, h) {
    return { $$typeof: R, type: a.type, key: h, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function hn(a) {
    return typeof a == "object" && a !== null && a.$$typeof === R;
  }
  function Qn(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(P) {
      return h[P];
    });
  }
  var sn = /\/+/g;
  function Ie(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? Qn("" + a.key) : h.toString(36);
  }
  function qe(a, h, P, D, O) {
    var $ = typeof a;
    ($ === "undefined" || $ === "boolean") && (a = null);
    var j = !1;
    if (a === null)
      j = !0;
    else
      switch ($) {
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case R:
            case ne:
              j = !0;
          }
      }
    if (j)
      return j = a, O = O(j), a = D === "" ? "." + Ie(j, 0) : D, me(O) ? (P = "", a != null && (P = a.replace(sn, "$&/") + "/"), qe(O, h, P, "", function(Ne) {
        return Ne;
      })) : O != null && (hn(O) && (O = xn(O, P + (!O.key || j && j.key === O.key ? "" : ("" + O.key).replace(sn, "$&/") + "/") + a)), h.push(O)), 1;
    if (j = 0, D = D === "" ? "." : D + ":", me(a))
      for (var H = 0; H < a.length; H++) {
        $ = a[H];
        var U = D + Ie($, H);
        j += qe($, h, P, U, O);
      }
    else if (U = Y(a), typeof U == "function")
      for (a = U.call(a), H = 0; !($ = a.next()).done; )
        $ = $.value, U = D + Ie($, H++), j += qe($, h, P, U, O);
    else if ($ === "object")
      throw h = String(a), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function an(a, h, P) {
    if (a == null)
      return a;
    var D = [], O = 0;
    return qe(a, D, "", "", function($) {
      return h.call(P, $, O++);
    }), D;
  }
  function Pe(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = P);
      }, function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = P);
      }), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var b = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: b, ReactCurrentBatchConfig: S, ReactCurrentOwner: Se };
  return M.Children = { map: an, forEach: function(a, h, P) {
    an(a, function() {
      h.apply(this, arguments);
    }, P);
  }, count: function(a) {
    var h = 0;
    return an(a, function() {
      h++;
    }), h;
  }, toArray: function(a) {
    return an(a, function(h) {
      return h;
    }) || [];
  }, only: function(a) {
    if (!hn(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, M.Component = B, M.Fragment = m, M.Profiler = _e, M.PureComponent = on, M.StrictMode = Ge, M.Suspense = A, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, M.cloneElement = function(a, h, P) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var D = Be({}, a.props), O = a.key, $ = a.ref, j = a._owner;
    if (h != null) {
      if (h.ref !== void 0 && ($ = h.ref, j = Se.current), h.key !== void 0 && (O = "" + h.key), a.type && a.type.defaultProps)
        var H = a.type.defaultProps;
      for (U in h)
        Je.call(h, U) && !xe.hasOwnProperty(U) && (D[U] = h[U] === void 0 && H !== void 0 ? H[U] : h[U]);
    }
    var U = arguments.length - 2;
    if (U === 1)
      D.children = P;
    else if (1 < U) {
      H = Array(U);
      for (var Ne = 0; Ne < U; Ne++)
        H[Ne] = arguments[Ne + 2];
      D.children = H;
    }
    return { $$typeof: R, type: a.type, key: O, ref: $, props: D, _owner: j };
  }, M.createContext = function(a) {
    return a = { $$typeof: Ce, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: De, _context: a }, a.Consumer = a;
  }, M.createElement = He, M.createFactory = function(a) {
    var h = He.bind(null, a);
    return h.type = a, h;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(a) {
    return { $$typeof: ie, render: a };
  }, M.isValidElement = hn, M.lazy = function(a) {
    return { $$typeof: pe, _payload: { _status: -1, _result: a }, _init: Pe };
  }, M.memo = function(a, h) {
    return { $$typeof: we, type: a, compare: h === void 0 ? null : h };
  }, M.startTransition = function(a) {
    var h = S.transition;
    S.transition = {};
    try {
      a();
    } finally {
      S.transition = h;
    }
  }, M.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, M.useCallback = function(a, h) {
    return b.current.useCallback(a, h);
  }, M.useContext = function(a) {
    return b.current.useContext(a);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(a) {
    return b.current.useDeferredValue(a);
  }, M.useEffect = function(a, h) {
    return b.current.useEffect(a, h);
  }, M.useId = function() {
    return b.current.useId();
  }, M.useImperativeHandle = function(a, h, P) {
    return b.current.useImperativeHandle(a, h, P);
  }, M.useInsertionEffect = function(a, h) {
    return b.current.useInsertionEffect(a, h);
  }, M.useLayoutEffect = function(a, h) {
    return b.current.useLayoutEffect(a, h);
  }, M.useMemo = function(a, h) {
    return b.current.useMemo(a, h);
  }, M.useReducer = function(a, h, P) {
    return b.current.useReducer(a, h, P);
  }, M.useRef = function(a) {
    return b.current.useRef(a);
  }, M.useState = function(a) {
    return b.current.useState(a);
  }, M.useSyncExternalStore = function(a, h, P) {
    return b.current.useSyncExternalStore(a, h, P);
  }, M.useTransition = function() {
    return b.current.useTransition();
  }, M.version = "18.2.0", M;
}
xa.exports = Pf();
var Eo = xa.exports;
const Of = /* @__PURE__ */ _a(Eo);
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
function Nf() {
  if (wa)
    return vr;
  wa = 1;
  var R = Eo, ne = Symbol.for("react.element"), m = Symbol.for("react.fragment"), Ge = Object.prototype.hasOwnProperty, _e = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, De = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(ie, A, we) {
    var pe, Z = {}, Y = null, Ae = null;
    we !== void 0 && (Y = "" + we), A.key !== void 0 && (Y = "" + A.key), A.ref !== void 0 && (Ae = A.ref);
    for (pe in A)
      Ge.call(A, pe) && !De.hasOwnProperty(pe) && (Z[pe] = A[pe]);
    if (ie && ie.defaultProps)
      for (pe in A = ie.defaultProps, A)
        Z[pe] === void 0 && (Z[pe] = A[pe]);
    return { $$typeof: ne, type: ie, key: Y, ref: Ae, props: Z, _owner: _e.current };
  }
  return vr.Fragment = m, vr.jsx = Ce, vr.jsxs = Ce, vr;
}
Ca.exports = Nf();
var Mf = Ca.exports, Pa = { exports: {} }, Me = {}, So = { exports: {} }, ko = {};
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
  return Sa || (Sa = 1, function(R) {
    function ne(S, T) {
      var a = S.length;
      S.push(T);
      e:
        for (; 0 < a; ) {
          var h = a - 1 >>> 1, P = S[h];
          if (0 < _e(P, T))
            S[h] = T, S[a] = P, a = h;
          else
            break e;
        }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function Ge(S) {
      if (S.length === 0)
        return null;
      var T = S[0], a = S.pop();
      if (a !== T) {
        S[0] = a;
        e:
          for (var h = 0, P = S.length, D = P >>> 1; h < D; ) {
            var O = 2 * (h + 1) - 1, $ = S[O], j = O + 1, H = S[j];
            if (0 > _e($, a))
              j < P && 0 > _e(H, $) ? (S[h] = H, S[j] = a, h = j) : (S[h] = $, S[O] = a, h = O);
            else if (j < P && 0 > _e(H, a))
              S[h] = H, S[j] = a, h = j;
            else
              break e;
          }
      }
      return T;
    }
    function _e(S, T) {
      var a = S.sortIndex - T.sortIndex;
      return a !== 0 ? a : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var De = performance;
      R.unstable_now = function() {
        return De.now();
      };
    } else {
      var Ce = Date, ie = Ce.now();
      R.unstable_now = function() {
        return Ce.now() - ie;
      };
    }
    var A = [], we = [], pe = 1, Z = null, Y = 3, Ae = !1, Be = !1, X = !1, B = typeof setTimeout == "function" ? setTimeout : null, vn = typeof clearTimeout == "function" ? clearTimeout : null, on = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ze(S) {
      for (var T = m(we); T !== null; ) {
        if (T.callback === null)
          Ge(we);
        else if (T.startTime <= S)
          Ge(we), T.sortIndex = T.expirationTime, ne(A, T);
        else
          break;
        T = m(we);
      }
    }
    function me(S) {
      if (X = !1, Ze(S), !Be)
        if (m(A) !== null)
          Be = !0, Pe(Je);
        else {
          var T = m(we);
          T !== null && b(me, T.startTime - S);
        }
    }
    function Je(S, T) {
      Be = !1, X && (X = !1, vn(He), He = -1), Ae = !0;
      var a = Y;
      try {
        for (Ze(T), Z = m(A); Z !== null && (!(Z.expirationTime > T) || S && !Qn()); ) {
          var h = Z.callback;
          if (typeof h == "function") {
            Z.callback = null, Y = Z.priorityLevel;
            var P = h(Z.expirationTime <= T);
            T = R.unstable_now(), typeof P == "function" ? Z.callback = P : Z === m(A) && Ge(A), Ze(T);
          } else
            Ge(A);
          Z = m(A);
        }
        if (Z !== null)
          var D = !0;
        else {
          var O = m(we);
          O !== null && b(me, O.startTime - T), D = !1;
        }
        return D;
      } finally {
        Z = null, Y = a, Ae = !1;
      }
    }
    var Se = !1, xe = null, He = -1, xn = 5, hn = -1;
    function Qn() {
      return !(R.unstable_now() - hn < xn);
    }
    function sn() {
      if (xe !== null) {
        var S = R.unstable_now();
        hn = S;
        var T = !0;
        try {
          T = xe(!0, S);
        } finally {
          T ? Ie() : (Se = !1, xe = null);
        }
      } else
        Se = !1;
    }
    var Ie;
    if (typeof on == "function")
      Ie = function() {
        on(sn);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), an = qe.port2;
      qe.port1.onmessage = sn, Ie = function() {
        an.postMessage(null);
      };
    } else
      Ie = function() {
        B(sn, 0);
      };
    function Pe(S) {
      xe = S, Se || (Se = !0, Ie());
    }
    function b(S, T) {
      He = B(function() {
        S(R.unstable_now());
      }, T);
    }
    R.unstable_IdlePriority = 5, R.unstable_ImmediatePriority = 1, R.unstable_LowPriority = 4, R.unstable_NormalPriority = 3, R.unstable_Profiling = null, R.unstable_UserBlockingPriority = 2, R.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, R.unstable_continueExecution = function() {
      Be || Ae || (Be = !0, Pe(Je));
    }, R.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, R.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, R.unstable_getFirstCallbackNode = function() {
      return m(A);
    }, R.unstable_next = function(S) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = Y;
      }
      var a = Y;
      Y = T;
      try {
        return S();
      } finally {
        Y = a;
      }
    }, R.unstable_pauseExecution = function() {
    }, R.unstable_requestPaint = function() {
    }, R.unstable_runWithPriority = function(S, T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var a = Y;
      Y = S;
      try {
        return T();
      } finally {
        Y = a;
      }
    }, R.unstable_scheduleCallback = function(S, T, a) {
      var h = R.unstable_now();
      switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? h + a : h) : a = h, S) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = a + P, S = { id: pe++, callback: T, priorityLevel: S, startTime: a, expirationTime: P, sortIndex: -1 }, a > h ? (S.sortIndex = a, ne(we, S), m(A) === null && S === m(we) && (X ? (vn(He), He = -1) : X = !0, b(me, a - h))) : (S.sortIndex = P, ne(A, S), Be || Ae || (Be = !0, Pe(Je))), S;
    }, R.unstable_shouldYield = Qn, R.unstable_wrapCallback = function(S) {
      var T = Y;
      return function() {
        var a = Y;
        Y = T;
        try {
          return S.apply(this, arguments);
        } finally {
          Y = a;
        }
      };
    };
  }(ko)), ko;
}
var ka;
function Tf() {
  return ka || (ka = 1, So.exports = zf()), So.exports;
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
var Ea;
function Lf() {
  if (Ea)
    return Me;
  Ea = 1;
  var R = Eo, ne = Tf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ge = /* @__PURE__ */ new Set(), _e = {};
  function De(e, n) {
    Ce(e, n), Ce(e + "Capture", n);
  }
  function Ce(e, n) {
    for (_e[e] = n, e = 0; e < n.length; e++)
      Ge.add(n[e]);
  }
  var ie = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, we = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Z = {};
  function Y(e) {
    return A.call(Z, e) ? !0 : A.call(pe, e) ? !1 : we.test(e) ? Z[e] = !0 : (pe[e] = !0, !1);
  }
  function Ae(e, n, t, r) {
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
  function Be(e, n, t, r) {
    if (n === null || typeof n > "u" || Ae(e, n, t, r))
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
  function X(e, n, t, r, l, u, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    B[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    B[n] = new X(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    B[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    B[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    B[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    B[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    B[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    B[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    B[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var vn = /[\-:]([a-z])/g;
  function on(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      vn,
      on
    );
    B[n] = new X(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(vn, on);
    B[n] = new X(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(vn, on);
    B[n] = new X(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    B[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    B[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ze(e, n, t, r) {
    var l = B.hasOwnProperty(n) ? B[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Be(n, t, l, r) && (t = null), r || l === null ? Y(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var me = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Je = Symbol.for("react.element"), Se = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), hn = Symbol.for("react.provider"), Qn = Symbol.for("react.context"), sn = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), an = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var a = Object.assign, h;
  function P(e) {
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
  var D = !1;
  function O(e, n) {
    if (!e || D)
      return "";
    D = !0;
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
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (l[o] !== u[i]) {
            if (o !== 1 || i !== 1)
              do
                if (o--, i--, 0 > i || l[o] !== u[i]) {
                  var s = `
` + l[o].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                }
              while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      D = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function $(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = O(e.type, !1), e;
      case 11:
        return e = O(e.type.render, !1), e;
      case 1:
        return e = O(e.type, !0), e;
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case xe:
        return "Fragment";
      case Se:
        return "Portal";
      case xn:
        return "Profiler";
      case He:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Qn:
          return (e.displayName || "Context") + ".Consumer";
        case hn:
          return (e._context.displayName || "Context") + ".Provider";
        case sn:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case an:
          return n = e.displayName || null, n !== null ? n : j(e.type) || "Memo";
        case Pe:
          n = e._payload, e = e._init;
          try {
            return j(e(n));
          } catch {
          }
      }
    return null;
  }
  function H(e) {
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
        return j(n);
      case 8:
        return n === He ? "StrictMode" : "Mode";
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
  function Ne(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function za(e) {
    var n = Ne(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function hr(e) {
    e._valueTracker || (e._valueTracker = za(e));
  }
  function _o(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = Ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function yr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pl(e, n) {
    var t = n.checked;
    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Co(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = U(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function xo(e, n) {
    n = n.checked, n != null && Ze(e, "checked", n, !1);
  }
  function Nl(e, n) {
    xo(e, n);
    var t = U(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? zl(e, n.type, t) : n.hasOwnProperty("defaultValue") && zl(e, n.type, U(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Po(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function zl(e, n, t) {
    (n !== "number" || yr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Lt = Array.isArray;
  function ut(e, n, t, r) {
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
  function Tl(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function No(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(m(92));
        if (Lt(t)) {
          if (1 < t.length)
            throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: U(t) };
  }
  function zo(e, n) {
    var t = U(n.value), r = U(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function To(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Lo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ll(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Lo(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gr, Ro = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = gr.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Rt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Ot = {
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
  }, Ta = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ot).forEach(function(e) {
    Ta.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Ot[n] = Ot[e];
    });
  });
  function Oo(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + n).trim() : n + "px";
  }
  function Mo(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Oo(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var La = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Rl(e, n) {
    if (n) {
      if (La[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(m(62));
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
  var Ml = null;
  function Dl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Il = null, ot = null, it = null;
  function Do(e) {
    if (e = er(e)) {
      if (typeof Il != "function")
        throw Error(m(280));
      var n = e.stateNode;
      n && (n = Br(n), Il(e.stateNode, e.type, n));
    }
  }
  function Io(e) {
    ot ? it ? it.push(e) : it = [e] : ot = e;
  }
  function Fo() {
    if (ot) {
      var e = ot, n = it;
      if (it = ot = null, Do(e), n)
        for (e = 0; e < n.length; e++)
          Do(n[e]);
    }
  }
  function jo(e, n) {
    return e(n);
  }
  function Uo() {
  }
  var Fl = !1;
  function Vo(e, n, t) {
    if (Fl)
      return e(n, t);
    Fl = !0;
    try {
      return jo(e, n, t);
    } finally {
      Fl = !1, (ot !== null || it !== null) && (Uo(), Fo());
    }
  }
  function Mt(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Br(t);
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
      throw Error(m(231, n, typeof t));
    return t;
  }
  var jl = !1;
  if (ie)
    try {
      var Dt = {};
      Object.defineProperty(Dt, "passive", { get: function() {
        jl = !0;
      } }), window.addEventListener("test", Dt, Dt), window.removeEventListener("test", Dt, Dt);
    } catch {
      jl = !1;
    }
  function Ra(e, n, t, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var It = !1, wr = null, Sr = !1, Ul = null, Oa = { onError: function(e) {
    It = !0, wr = e;
  } };
  function Ma(e, n, t, r, l, u, o, i, s) {
    It = !1, wr = null, Ra.apply(Oa, arguments);
  }
  function Da(e, n, t, r, l, u, o, i, s) {
    if (Ma.apply(this, arguments), It) {
      if (It) {
        var p = wr;
        It = !1, wr = null;
      } else
        throw Error(m(198));
      Sr || (Sr = !0, Ul = p);
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
  function Ao(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Bo(e) {
    if (Kn(e) !== e)
      throw Error(m(188));
  }
  function Ia(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Kn(e), n === null)
        throw Error(m(188));
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
            return Bo(l), e;
          if (u === r)
            return Bo(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return)
        t = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            o = !0, t = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, t = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === t) {
              o = !0, t = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!o)
            throw Error(m(189));
        }
      }
      if (t.alternate !== r)
        throw Error(m(190));
    }
    if (t.tag !== 3)
      throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Ho(e) {
    return e = Ia(e), e !== null ? $o(e) : null;
  }
  function $o(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = $o(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Wo = ne.unstable_scheduleCallback, Qo = ne.unstable_cancelCallback, Fa = ne.unstable_shouldYield, ja = ne.unstable_requestPaint, te = ne.unstable_now, Ua = ne.unstable_getCurrentPriorityLevel, Vl = ne.unstable_ImmediatePriority, Ko = ne.unstable_UserBlockingPriority, kr = ne.unstable_NormalPriority, Va = ne.unstable_LowPriority, Yo = ne.unstable_IdlePriority, Er = null, cn = null;
  function Aa(e) {
    if (cn && typeof cn.onCommitFiberRoot == "function")
      try {
        cn.onCommitFiberRoot(Er, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var be = Math.clz32 ? Math.clz32 : $a, Ba = Math.log, Ha = Math.LN2;
  function $a(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ba(e) / Ha | 0) | 0;
  }
  var _r = 64, Cr = 4194304;
  function Ft(e) {
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
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = t & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Ft(i) : (u &= o, u !== 0 && (r = Ft(u)));
    } else
      o = t & ~l, o !== 0 ? r = Ft(o) : u !== 0 && (r = Ft(u));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - be(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Wa(e, n) {
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
  function Qa(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - be(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & t) || i & r) && (l[o] = Wa(i, n)) : s <= n && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Al(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Xo() {
    var e = _r;
    return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
  }
  function Bl(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function jt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - be(n), e[n] = t;
  }
  function Ka(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - be(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Hl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - be(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var V = 0;
  function Go(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Zo, $l, Jo, qo, bo, Wl = !1, Pr = [], Pn = null, Nn = null, zn = null, Ut = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Tn = [], Ya = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ei(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        Nn = null;
        break;
      case "mouseover":
      case "mouseout":
        zn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ut.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vt.delete(n.pointerId);
    }
  }
  function At(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = er(n), n !== null && $l(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Xa(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Pn = At(Pn, e, n, t, r, l), !0;
      case "dragenter":
        return Nn = At(Nn, e, n, t, r, l), !0;
      case "mouseover":
        return zn = At(zn, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Ut.set(u, At(Ut.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Vt.set(u, At(Vt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function ni(e) {
    var n = Yn(e.target);
    if (n !== null) {
      var t = Kn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ao(t), n !== null) {
            e.blockedOn = n, bo(e.priority, function() {
              Jo(t);
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
  function Nr(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Kl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Ml = r, t.target.dispatchEvent(r), Ml = null;
      } else
        return n = er(t), n !== null && $l(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function ti(e, n, t) {
    Nr(e) && t.delete(n);
  }
  function Ga() {
    Wl = !1, Pn !== null && Nr(Pn) && (Pn = null), Nn !== null && Nr(Nn) && (Nn = null), zn !== null && Nr(zn) && (zn = null), Ut.forEach(ti), Vt.forEach(ti);
  }
  function Bt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Wl || (Wl = !0, ne.unstable_scheduleCallback(ne.unstable_NormalPriority, Ga)));
  }
  function Ht(e) {
    function n(l) {
      return Bt(l, e);
    }
    if (0 < Pr.length) {
      Bt(Pr[0], e);
      for (var t = 1; t < Pr.length; t++) {
        var r = Pr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Pn !== null && Bt(Pn, e), Nn !== null && Bt(Nn, e), zn !== null && Bt(zn, e), Ut.forEach(n), Vt.forEach(n), t = 0; t < Tn.length; t++)
      r = Tn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Tn.length && (t = Tn[0], t.blockedOn === null); )
      ni(t), t.blockedOn === null && Tn.shift();
  }
  var st = me.ReactCurrentBatchConfig, zr = !0;
  function Za(e, n, t, r) {
    var l = V, u = st.transition;
    st.transition = null;
    try {
      V = 1, Ql(e, n, t, r);
    } finally {
      V = l, st.transition = u;
    }
  }
  function Ja(e, n, t, r) {
    var l = V, u = st.transition;
    st.transition = null;
    try {
      V = 4, Ql(e, n, t, r);
    } finally {
      V = l, st.transition = u;
    }
  }
  function Ql(e, n, t, r) {
    if (zr) {
      var l = Kl(e, n, t, r);
      if (l === null)
        au(e, n, r, Tr, t), ei(e, r);
      else if (Xa(l, e, n, t, r))
        r.stopPropagation();
      else if (ei(e, r), n & 4 && -1 < Ya.indexOf(e)) {
        for (; l !== null; ) {
          var u = er(l);
          if (u !== null && Zo(u), u = Kl(e, n, t, r), u === null && au(e, n, r, Tr, t), u === l)
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else
        au(e, n, r, null, t);
    }
  }
  var Tr = null;
  function Kl(e, n, t, r) {
    if (Tr = null, e = Dl(r), e = Yn(e), e !== null)
      if (n = Kn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Ao(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Tr = e, null;
  }
  function ri(e) {
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
        switch (Ua()) {
          case Vl:
            return 1;
          case Ko:
            return 4;
          case kr:
          case Va:
            return 16;
          case Yo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ln = null, Yl = null, Lr = null;
  function li() {
    if (Lr)
      return Lr;
    var e, n = Yl, t = n.length, r, l = "value" in Ln ? Ln.value : Ln.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[u - r]; r++)
      ;
    return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Rr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Or() {
    return !0;
  }
  function ui() {
    return !1;
  }
  function Fe(e) {
    function n(t, r, l, u, o) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e)
        e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Or : ui, this.isPropagationStopped = ui, this;
    }
    return a(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Or);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Or);
    }, persist: function() {
    }, isPersistent: Or }), n;
  }
  var at = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Xl = Fe(at), $t = a({}, at, { view: 0, detail: 0 }), qa = Fe($t), Gl, Zl, Wt, Mr = a({}, $t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ql, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Wt && (Wt && e.type === "mousemove" ? (Gl = e.screenX - Wt.screenX, Zl = e.screenY - Wt.screenY) : Zl = Gl = 0, Wt = e), Gl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Zl;
  } }), oi = Fe(Mr), ba = a({}, Mr, { dataTransfer: 0 }), ec = Fe(ba), nc = a({}, $t, { relatedTarget: 0 }), Jl = Fe(nc), tc = a({}, at, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rc = Fe(tc), lc = a({}, at, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), uc = Fe(lc), oc = a({}, at, { data: 0 }), ii = Fe(oc), ic = {
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
  }, sc = {
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
  }, ac = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function cc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = ac[e]) ? !!n[e] : !1;
  }
  function ql() {
    return cc;
  }
  var fc = a({}, $t, { key: function(e) {
    if (e.key) {
      var n = ic[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ql, charCode: function(e) {
    return e.type === "keypress" ? Rr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), dc = Fe(fc), pc = a({}, Mr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), si = Fe(pc), mc = a({}, $t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ql }), vc = Fe(mc), hc = a({}, at, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = Fe(hc), gc = a({}, Mr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wc = Fe(gc), Sc = [9, 13, 27, 32], bl = ie && "CompositionEvent" in window, Qt = null;
  ie && "documentMode" in document && (Qt = document.documentMode);
  var kc = ie && "TextEvent" in window && !Qt, ai = ie && (!bl || Qt && 8 < Qt && 11 >= Qt), ci = String.fromCharCode(32), fi = !1;
  function di(e, n) {
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
  function pi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ct = !1;
  function Ec(e, n) {
    switch (e) {
      case "compositionend":
        return pi(n);
      case "keypress":
        return n.which !== 32 ? null : (fi = !0, ci);
      case "textInput":
        return e = n.data, e === ci && fi ? null : e;
      default:
        return null;
    }
  }
  function _c(e, n) {
    if (ct)
      return e === "compositionend" || !bl && di(e, n) ? (e = li(), Lr = Yl = Ln = null, ct = !1, e) : null;
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
        return ai && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Cc[e.type] : n === "textarea";
  }
  function vi(e, n, t, r) {
    Io(r), n = Ur(n, "onChange"), 0 < n.length && (t = new Xl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Kt = null, Yt = null;
  function xc(e) {
    Mi(e, 0);
  }
  function Dr(e) {
    var n = vt(e);
    if (_o(n))
      return e;
  }
  function Pc(e, n) {
    if (e === "change")
      return n;
  }
  var hi = !1;
  if (ie) {
    var eu;
    if (ie) {
      var nu = "oninput" in document;
      if (!nu) {
        var yi = document.createElement("div");
        yi.setAttribute("oninput", "return;"), nu = typeof yi.oninput == "function";
      }
      eu = nu;
    } else
      eu = !1;
    hi = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function gi() {
    Kt && (Kt.detachEvent("onpropertychange", wi), Yt = Kt = null);
  }
  function wi(e) {
    if (e.propertyName === "value" && Dr(Yt)) {
      var n = [];
      vi(n, Yt, e, Dl(e)), Vo(xc, n);
    }
  }
  function Nc(e, n, t) {
    e === "focusin" ? (gi(), Kt = n, Yt = t, Kt.attachEvent("onpropertychange", wi)) : e === "focusout" && gi();
  }
  function zc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Dr(Yt);
  }
  function Tc(e, n) {
    if (e === "click")
      return Dr(n);
  }
  function Lc(e, n) {
    if (e === "input" || e === "change")
      return Dr(n);
  }
  function Rc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var en = typeof Object.is == "function" ? Object.is : Rc;
  function Xt(e, n) {
    if (en(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!A.call(n, l) || !en(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function Si(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function ki(e, n) {
    var t = Si(e);
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
      t = Si(t);
    }
  }
  function Ei(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ei(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function _i() {
    for (var e = window, n = yr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = yr(e.document);
    }
    return n;
  }
  function tu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Oc(e) {
    var n = _i(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ei(t.ownerDocument.documentElement, t)) {
      if (r !== null && tu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = ki(t, u);
          var o = ki(
            t,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Mc = ie && "documentMode" in document && 11 >= document.documentMode, ft = null, ru = null, Gt = null, lu = !1;
  function Ci(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    lu || ft == null || ft !== yr(r) || (r = ft, "selectionStart" in r && tu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Gt && Xt(Gt, r) || (Gt = r, r = Ur(ru, "onSelect"), 0 < r.length && (n = new Xl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = ft)));
  }
  function Ir(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var dt = { animationend: Ir("Animation", "AnimationEnd"), animationiteration: Ir("Animation", "AnimationIteration"), animationstart: Ir("Animation", "AnimationStart"), transitionend: Ir("Transition", "TransitionEnd") }, uu = {}, xi = {};
  ie && (xi = document.createElement("div").style, "AnimationEvent" in window || (delete dt.animationend.animation, delete dt.animationiteration.animation, delete dt.animationstart.animation), "TransitionEvent" in window || delete dt.transitionend.transition);
  function Fr(e) {
    if (uu[e])
      return uu[e];
    if (!dt[e])
      return e;
    var n = dt[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in xi)
        return uu[e] = n[t];
    return e;
  }
  var Pi = Fr("animationend"), Ni = Fr("animationiteration"), zi = Fr("animationstart"), Ti = Fr("transitionend"), Li = /* @__PURE__ */ new Map(), Ri = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rn(e, n) {
    Li.set(e, n), De(n, [e]);
  }
  for (var ou = 0; ou < Ri.length; ou++) {
    var iu = Ri[ou], Dc = iu.toLowerCase(), Ic = iu[0].toUpperCase() + iu.slice(1);
    Rn(Dc, "on" + Ic);
  }
  Rn(Pi, "onAnimationEnd"), Rn(Ni, "onAnimationIteration"), Rn(zi, "onAnimationStart"), Rn("dblclick", "onDoubleClick"), Rn("focusin", "onFocus"), Rn("focusout", "onBlur"), Rn(Ti, "onTransitionEnd"), Ce("onMouseEnter", ["mouseout", "mouseover"]), Ce("onMouseLeave", ["mouseout", "mouseover"]), Ce("onPointerEnter", ["pointerout", "pointerover"]), Ce("onPointerLeave", ["pointerout", "pointerover"]), De("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), De("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), De("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), De("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), De("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), De("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Zt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));
  function Oi(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Da(r, n, void 0, e), e.currentTarget = null;
  }
  function Mi(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o], s = i.instance, p = i.currentTarget;
            if (i = i.listener, s !== u && l.isPropagationStopped())
              break e;
            Oi(l, i, p), u = s;
          }
        else
          for (o = 0; o < r.length; o++) {
            if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped())
              break e;
            Oi(l, i, p), u = s;
          }
      }
    }
    if (Sr)
      throw e = Ul, Sr = !1, Ul = null, e;
  }
  function Q(e, n) {
    var t = n[vu];
    t === void 0 && (t = n[vu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Di(n, e, 2, !1), t.add(r));
  }
  function su(e, n, t) {
    var r = 0;
    n && (r |= 4), Di(t, e, r, n);
  }
  var jr = "_reactListening" + Math.random().toString(36).slice(2);
  function Jt(e) {
    if (!e[jr]) {
      e[jr] = !0, Ge.forEach(function(t) {
        t !== "selectionchange" && (Fc.has(t) || su(t, !1, e), su(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[jr] || (n[jr] = !0, su("selectionchange", !1, n));
    }
  }
  function Di(e, n, t, r) {
    switch (ri(n)) {
      case 1:
        var l = Za;
        break;
      case 4:
        l = Ja;
        break;
      default:
        l = Ql;
    }
    t = l.bind(null, n, t, e), l = void 0, !jl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function au(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l)
              break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var s = o.tag;
                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                  return;
                o = o.return;
              }
            for (; i !== null; ) {
              if (o = Yn(i), o === null)
                return;
              if (s = o.tag, s === 5 || s === 6) {
                r = u = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
    Vo(function() {
      var p = u, y = Dl(t), g = [];
      e: {
        var v = Li.get(e);
        if (v !== void 0) {
          var k = Xl, _ = e;
          switch (e) {
            case "keypress":
              if (Rr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              k = dc;
              break;
            case "focusin":
              _ = "focus", k = Jl;
              break;
            case "focusout":
              _ = "blur", k = Jl;
              break;
            case "beforeblur":
            case "afterblur":
              k = Jl;
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
              k = oi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = ec;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = vc;
              break;
            case Pi:
            case Ni:
            case zi:
              k = rc;
              break;
            case Ti:
              k = yc;
              break;
            case "scroll":
              k = qa;
              break;
            case "wheel":
              k = wc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = si;
          }
          var C = (n & 4) !== 0, re = !C && e === "scroll", f = C ? v !== null ? v + "Capture" : null : v;
          C = [];
          for (var c = p, d; c !== null; ) {
            d = c;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Mt(c, f), w != null && C.push(qt(c, w, d)))), re)
              break;
            c = c.return;
          }
          0 < C.length && (v = new k(v, _, null, t, y), g.push({ event: v, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", v && t !== Ml && (_ = t.relatedTarget || t.fromElement) && (Yn(_) || _[yn]))
            break e;
          if ((k || v) && (v = y.window === y ? y : (v = y.ownerDocument) ? v.defaultView || v.parentWindow : window, k ? (_ = t.relatedTarget || t.toElement, k = p, _ = _ ? Yn(_) : null, _ !== null && (re = Kn(_), _ !== re || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (k = null, _ = p), k !== _)) {
            if (C = oi, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (C = si, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), re = k == null ? v : vt(k), d = _ == null ? v : vt(_), v = new C(w, c + "leave", k, t, y), v.target = re, v.relatedTarget = d, w = null, Yn(y) === p && (C = new C(f, c + "enter", _, t, y), C.target = d, C.relatedTarget = re, w = C), re = w, k && _)
              n: {
                for (C = k, f = _, c = 0, d = C; d; d = pt(d))
                  c++;
                for (d = 0, w = f; w; w = pt(w))
                  d++;
                for (; 0 < c - d; )
                  C = pt(C), c--;
                for (; 0 < d - c; )
                  f = pt(f), d--;
                for (; c--; ) {
                  if (C === f || f !== null && C === f.alternate)
                    break n;
                  C = pt(C), f = pt(f);
                }
                C = null;
              }
            else
              C = null;
            k !== null && Ii(g, v, k, C, !1), _ !== null && re !== null && Ii(g, re, _, C, !0);
          }
        }
        e: {
          if (v = p ? vt(p) : window, k = v.nodeName && v.nodeName.toLowerCase(), k === "select" || k === "input" && v.type === "file")
            var x = Pc;
          else if (mi(v))
            if (hi)
              x = Lc;
            else {
              x = zc;
              var N = Nc;
            }
          else
            (k = v.nodeName) && k.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (x = Tc);
          if (x && (x = x(e, p))) {
            vi(g, x, t, y);
            break e;
          }
          N && N(e, v, p), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && zl(v, "number", v.value);
        }
        switch (N = p ? vt(p) : window, e) {
          case "focusin":
            (mi(N) || N.contentEditable === "true") && (ft = N, ru = p, Gt = null);
            break;
          case "focusout":
            Gt = ru = ft = null;
            break;
          case "mousedown":
            lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lu = !1, Ci(g, t, y);
            break;
          case "selectionchange":
            if (Mc)
              break;
          case "keydown":
          case "keyup":
            Ci(g, t, y);
        }
        var z;
        if (bl)
          e: {
            switch (e) {
              case "compositionstart":
                var L = "onCompositionStart";
                break e;
              case "compositionend":
                L = "onCompositionEnd";
                break e;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break e;
            }
            L = void 0;
          }
        else
          ct ? di(e, t) && (L = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (L = "onCompositionStart");
        L && (ai && t.locale !== "ko" && (ct || L !== "onCompositionStart" ? L === "onCompositionEnd" && ct && (z = li()) : (Ln = y, Yl = "value" in Ln ? Ln.value : Ln.textContent, ct = !0)), N = Ur(p, L), 0 < N.length && (L = new ii(L, e, null, t, y), g.push({ event: L, listeners: N }), z ? L.data = z : (z = pi(t), z !== null && (L.data = z)))), (z = kc ? Ec(e, t) : _c(e, t)) && (p = Ur(p, "onBeforeInput"), 0 < p.length && (y = new ii("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Mi(g, n);
    });
  }
  function qt(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Ur(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Mt(e, t), u != null && r.unshift(qt(e, u, l)), u = Mt(e, n), u != null && r.push(qt(e, u, l))), e = e.return;
    }
    return r;
  }
  function pt(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ii(e, n, t, r, l) {
    for (var u = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r)
        break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Mt(t, u), s != null && o.unshift(qt(t, s, i))) : l || (s = Mt(t, u), s != null && o.push(qt(t, s, i)))), t = t.return;
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var jc = /\r\n?/g, Uc = /\u0000|\uFFFD/g;
  function Fi(e) {
    return (typeof e == "string" ? e : "" + e).replace(jc, `
`).replace(Uc, "");
  }
  function Vr(e, n, t) {
    if (n = Fi(n), Fi(e) !== n && t)
      throw Error(m(425));
  }
  function Ar() {
  }
  var cu = null, fu = null;
  function du(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var pu = typeof setTimeout == "function" ? setTimeout : void 0, Vc = typeof clearTimeout == "function" ? clearTimeout : void 0, ji = typeof Promise == "function" ? Promise : void 0, Ac = typeof queueMicrotask == "function" ? queueMicrotask : typeof ji < "u" ? function(e) {
    return ji.resolve(null).then(e).catch(Bc);
  } : pu;
  function Bc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Ht(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Ht(n);
  }
  function On(e) {
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
  function Ui(e) {
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
  var mt = Math.random().toString(36).slice(2), fn = "__reactFiber$" + mt, bt = "__reactProps$" + mt, yn = "__reactContainer$" + mt, vu = "__reactEvents$" + mt, Hc = "__reactListeners$" + mt, $c = "__reactHandles$" + mt;
  function Yn(e) {
    var n = e[fn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[yn] || t[fn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Ui(e); e !== null; ) {
            if (t = e[fn])
              return t;
            e = Ui(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function er(e) {
    return e = e[fn] || e[yn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function vt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(m(33));
  }
  function Br(e) {
    return e[bt] || null;
  }
  var hu = [], ht = -1;
  function Mn(e) {
    return { current: e };
  }
  function K(e) {
    0 > ht || (e.current = hu[ht], hu[ht] = null, ht--);
  }
  function W(e, n) {
    ht++, hu[ht] = e.current, e.current = n;
  }
  var Dn = {}, ve = Mn(Dn), ze = Mn(!1), Xn = Dn;
  function yt(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Dn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t)
      l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Te(e) {
    return e = e.childContextTypes, e != null;
  }
  function Hr() {
    K(ze), K(ve);
  }
  function Vi(e, n, t) {
    if (ve.current !== Dn)
      throw Error(m(168));
    W(ve, n), W(ze, t);
  }
  function Ai(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(m(108, H(e) || "Unknown", l));
    return a({}, t, r);
  }
  function $r(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, Xn = ve.current, W(ve, e), W(ze, ze.current), !0;
  }
  function Bi(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(m(169));
    t ? (e = Ai(e, n, Xn), r.__reactInternalMemoizedMergedChildContext = e, K(ze), K(ve), W(ve, e)) : K(ze), W(ze, t);
  }
  var gn = null, Wr = !1, yu = !1;
  function Hi(e) {
    gn === null ? gn = [e] : gn.push(e);
  }
  function Wc(e) {
    Wr = !0, Hi(e);
  }
  function In() {
    if (!yu && gn !== null) {
      yu = !0;
      var e = 0, n = V;
      try {
        var t = gn;
        for (V = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        gn = null, Wr = !1;
      } catch (l) {
        throw gn !== null && (gn = gn.slice(e + 1)), Wo(Vl, In), l;
      } finally {
        V = n, yu = !1;
      }
    }
    return null;
  }
  var gt = [], wt = 0, Qr = null, Kr = 0, $e = [], We = 0, Gn = null, wn = 1, Sn = "";
  function Zn(e, n) {
    gt[wt++] = Kr, gt[wt++] = Qr, Qr = e, Kr = n;
  }
  function $i(e, n, t) {
    $e[We++] = wn, $e[We++] = Sn, $e[We++] = Gn, Gn = e;
    var r = wn;
    e = Sn;
    var l = 32 - be(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - be(n) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, wn = 1 << 32 - be(n) + l | t << l | r, Sn = u + e;
    } else
      wn = 1 << u | t << l | r, Sn = e;
  }
  function gu(e) {
    e.return !== null && (Zn(e, 1), $i(e, 1, 0));
  }
  function wu(e) {
    for (; e === Qr; )
      Qr = gt[--wt], gt[wt] = null, Kr = gt[--wt], gt[wt] = null;
    for (; e === Gn; )
      Gn = $e[--We], $e[We] = null, Sn = $e[--We], $e[We] = null, wn = $e[--We], $e[We] = null;
  }
  var je = null, Ue = null, G = !1, nn = null;
  function Wi(e, n) {
    var t = Xe(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Qi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, je = e, Ue = On(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, je = e, Ue = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Gn !== null ? { id: wn, overflow: Sn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Xe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, je = e, Ue = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Su(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ku(e) {
    if (G) {
      var n = Ue;
      if (n) {
        var t = n;
        if (!Qi(e, n)) {
          if (Su(e))
            throw Error(m(418));
          n = On(t.nextSibling);
          var r = je;
          n && Qi(e, n) ? Wi(r, t) : (e.flags = e.flags & -4097 | 2, G = !1, je = e);
        }
      } else {
        if (Su(e))
          throw Error(m(418));
        e.flags = e.flags & -4097 | 2, G = !1, je = e;
      }
    }
  }
  function Ki(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    je = e;
  }
  function Yr(e) {
    if (e !== je)
      return !1;
    if (!G)
      return Ki(e), G = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !du(e.type, e.memoizedProps)), n && (n = Ue)) {
      if (Su(e))
        throw Yi(), Error(m(418));
      for (; n; )
        Wi(e, n), n = On(n.nextSibling);
    }
    if (Ki(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ue = On(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ue = null;
      }
    } else
      Ue = je ? On(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yi() {
    for (var e = Ue; e; )
      e = On(e.nextSibling);
  }
  function St() {
    Ue = je = null, G = !1;
  }
  function Eu(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  var Qc = me.ReactCurrentBatchConfig;
  function tn(e, n) {
    if (e && e.defaultProps) {
      n = a({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var Xr = Mn(null), Gr = null, kt = null, _u = null;
  function Cu() {
    _u = kt = Gr = null;
  }
  function xu(e) {
    var n = Xr.current;
    K(Xr), e._currentValue = n;
  }
  function Pu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function Et(e, n) {
    Gr = e, _u = kt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Le = !0), e.firstContext = null);
  }
  function Qe(e) {
    var n = e._currentValue;
    if (_u !== e)
      if (e = { context: e, memoizedValue: n, next: null }, kt === null) {
        if (Gr === null)
          throw Error(m(308));
        kt = e, Gr.dependencies = { lanes: 0, firstContext: e };
      } else
        kt = kt.next = e;
    return n;
  }
  var Jn = null;
  function Nu(e) {
    Jn === null ? Jn = [e] : Jn.push(e);
  }
  function Xi(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Nu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, kn(e, r);
  }
  function kn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Fn = !1;
  function zu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gi(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function En(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, I & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, kn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Nu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, kn(e, t);
  }
  function Zr(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Hl(e, t);
    }
  }
  function Zi(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = o : u = u.next = o, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else
        l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function Jr(e, n, t, r) {
    var l = e.updateQueue;
    Fn = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var v = i.lane, k = i.eventTime;
        if ((r & v) === v) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var _ = e, C = i;
            switch (v = n, k = t, C.tag) {
              case 1:
                if (_ = C.payload, typeof _ == "function") {
                  g = _.call(k, g, v);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = C.payload, v = typeof _ == "function" ? _.call(k, g, v) : _, v == null)
                  break e;
                g = a({}, g, v);
                break e;
              case 2:
                Fn = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
        } else
          k = { eventTime: k, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, o |= v;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null)
            break;
          v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (1);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          o |= l.lane, l = l.next;
        while (l !== n);
      } else
        u === null && (l.shared.lanes = 0);
      et |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function Ji(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var qi = new R.Component().refs;
  function Tu(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : a({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var qr = { isMounted: function(e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ee(), l = Bn(e), u = En(r, l);
    u.payload = n, t != null && (u.callback = t), n = jn(e, u, l), n !== null && (un(n, e, l, r), Zr(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ee(), l = Bn(e), u = En(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = jn(e, u, l), n !== null && (un(n, e, l, r), Zr(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ee(), r = Bn(e), l = En(t, r);
    l.tag = 2, n != null && (l.callback = n), n = jn(e, l, r), n !== null && (un(n, e, r, t), Zr(n, e, r));
  } };
  function bi(e, n, t, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : n.prototype && n.prototype.isPureReactComponent ? !Xt(t, r) || !Xt(l, u) : !0;
  }
  function es(e, n, t) {
    var r = !1, l = Dn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Qe(u) : (l = Te(n) ? Xn : ve.current, r = n.contextTypes, u = (r = r != null) ? yt(e, l) : Dn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = qr, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function ns(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && qr.enqueueReplaceState(n, n.state, null);
  }
  function Lu(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = qi, zu(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Qe(u) : (u = Te(n) ? Xn : ve.current, l.context = yt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Tu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && qr.enqueueReplaceState(l, l.state, null), Jr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function nr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(o) {
          var i = l.refs;
          i === qi && (i = l.refs = {}), o === null ? delete i[u] : i[u] = o;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string")
        throw Error(m(284));
      if (!t._owner)
        throw Error(m(290, e));
    }
    return e;
  }
  function br(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function ts(e) {
    var n = e._init;
    return n(e._payload);
  }
  function rs(e) {
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
      return f = $n(f, c), f.index = 0, f.sibling = null, f;
    }
    function u(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, c, d, w) {
      return c === null || c.tag !== 6 ? (c = mo(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, w) {
      var x = d.type;
      return x === xe ? y(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pe && ts(x) === c.type) ? (w = l(c, d.props), w.ref = nr(f, c, d), w.return = f, w) : (w = gl(d.type, d.key, d.props, null, f.mode, w), w.ref = nr(f, c, d), w.return = f, w);
    }
    function p(f, c, d, w) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = vo(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function y(f, c, d, w, x) {
      return c === null || c.tag !== 7 ? (c = lt(d, f.mode, w, x), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function g(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
        return c = mo("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case Je:
            return d = gl(c.type, c.key, c.props, null, f.mode, d), d.ref = nr(f, null, c), d.return = f, d;
          case Se:
            return c = vo(c, f.mode, d), c.return = f, c;
          case Pe:
            var w = c._init;
            return g(f, w(c._payload), d);
        }
        if (Lt(c) || T(c))
          return c = lt(c, f.mode, d, null), c.return = f, c;
        br(f, c);
      }
      return null;
    }
    function v(f, c, d, w) {
      var x = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return x !== null ? null : i(f, c, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Je:
            return d.key === x ? s(f, c, d, w) : null;
          case Se:
            return d.key === x ? p(f, c, d, w) : null;
          case Pe:
            return x = d._init, v(
              f,
              c,
              x(d._payload),
              w
            );
        }
        if (Lt(d) || T(d))
          return x !== null ? null : y(f, c, d, w, null);
        br(f, d);
      }
      return null;
    }
    function k(f, c, d, w, x) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return f = f.get(d) || null, i(c, f, "" + w, x);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Je:
            return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
          case Se:
            return f = f.get(w.key === null ? d : w.key) || null, p(c, f, w, x);
          case Pe:
            var N = w._init;
            return k(f, c, d, N(w._payload), x);
        }
        if (Lt(w) || T(w))
          return f = f.get(d) || null, y(c, f, w, x, null);
        br(c, w);
      }
      return null;
    }
    function _(f, c, d, w) {
      for (var x = null, N = null, z = c, L = c = 0, ce = null; z !== null && L < d.length; L++) {
        z.index > L ? (ce = z, z = null) : ce = z.sibling;
        var F = v(f, z, d[L], w);
        if (F === null) {
          z === null && (z = ce);
          break;
        }
        e && z && F.alternate === null && n(f, z), c = u(F, c, L), N === null ? x = F : N.sibling = F, N = F, z = ce;
      }
      if (L === d.length)
        return t(f, z), G && Zn(f, L), x;
      if (z === null) {
        for (; L < d.length; L++)
          z = g(f, d[L], w), z !== null && (c = u(z, c, L), N === null ? x = z : N.sibling = z, N = z);
        return G && Zn(f, L), x;
      }
      for (z = r(f, z); L < d.length; L++)
        ce = k(z, f, L, d[L], w), ce !== null && (e && ce.alternate !== null && z.delete(ce.key === null ? L : ce.key), c = u(ce, c, L), N === null ? x = ce : N.sibling = ce, N = ce);
      return e && z.forEach(function(Wn) {
        return n(f, Wn);
      }), G && Zn(f, L), x;
    }
    function C(f, c, d, w) {
      var x = T(d);
      if (typeof x != "function")
        throw Error(m(150));
      if (d = x.call(d), d == null)
        throw Error(m(151));
      for (var N = x = null, z = c, L = c = 0, ce = null, F = d.next(); z !== null && !F.done; L++, F = d.next()) {
        z.index > L ? (ce = z, z = null) : ce = z.sibling;
        var Wn = v(f, z, F.value, w);
        if (Wn === null) {
          z === null && (z = ce);
          break;
        }
        e && z && Wn.alternate === null && n(f, z), c = u(Wn, c, L), N === null ? x = Wn : N.sibling = Wn, N = Wn, z = ce;
      }
      if (F.done)
        return t(
          f,
          z
        ), G && Zn(f, L), x;
      if (z === null) {
        for (; !F.done; L++, F = d.next())
          F = g(f, F.value, w), F !== null && (c = u(F, c, L), N === null ? x = F : N.sibling = F, N = F);
        return G && Zn(f, L), x;
      }
      for (z = r(f, z); !F.done; L++, F = d.next())
        F = k(z, f, L, F.value, w), F !== null && (e && F.alternate !== null && z.delete(F.key === null ? L : F.key), c = u(F, c, L), N === null ? x = F : N.sibling = F, N = F);
      return e && z.forEach(function(xf) {
        return n(f, xf);
      }), G && Zn(f, L), x;
    }
    function re(f, c, d, w) {
      if (typeof d == "object" && d !== null && d.type === xe && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Je:
            e: {
              for (var x = d.key, N = c; N !== null; ) {
                if (N.key === x) {
                  if (x = d.type, x === xe) {
                    if (N.tag === 7) {
                      t(f, N.sibling), c = l(N, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (N.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pe && ts(x) === N.type) {
                    t(f, N.sibling), c = l(N, d.props), c.ref = nr(f, N, d), c.return = f, f = c;
                    break e;
                  }
                  t(f, N);
                  break;
                } else
                  n(f, N);
                N = N.sibling;
              }
              d.type === xe ? (c = lt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = gl(d.type, d.key, d.props, null, f.mode, w), w.ref = nr(f, c, d), w.return = f, f = w);
            }
            return o(f);
          case Se:
            e: {
              for (N = d.key; c !== null; ) {
                if (c.key === N)
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
              c = vo(d, f.mode, w), c.return = f, f = c;
            }
            return o(f);
          case Pe:
            return N = d._init, re(f, c, N(d._payload), w);
        }
        if (Lt(d))
          return _(f, c, d, w);
        if (T(d))
          return C(f, c, d, w);
        br(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (t(f, c.sibling), c = l(c, d), c.return = f, f = c) : (t(f, c), c = mo(d, f.mode, w), c.return = f, f = c), o(f)) : t(f, c);
    }
    return re;
  }
  var _t = rs(!0), ls = rs(!1), tr = {}, dn = Mn(tr), rr = Mn(tr), lr = Mn(tr);
  function qn(e) {
    if (e === tr)
      throw Error(m(174));
    return e;
  }
  function Ru(e, n) {
    switch (W(lr, n), W(rr, e), W(dn, tr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ll(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ll(n, e);
    }
    K(dn), W(dn, n);
  }
  function Ct() {
    K(dn), K(rr), K(lr);
  }
  function us(e) {
    qn(lr.current);
    var n = qn(dn.current), t = Ll(n, e.type);
    n !== t && (W(rr, e), W(dn, t));
  }
  function Ou(e) {
    rr.current === e && (K(dn), K(rr));
  }
  var J = Mn(0);
  function el(e) {
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
  var Mu = [];
  function Du() {
    for (var e = 0; e < Mu.length; e++)
      Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var nl = me.ReactCurrentDispatcher, Iu = me.ReactCurrentBatchConfig, bn = 0, q = null, ue = null, se = null, tl = !1, ur = !1, or = 0, Kc = 0;
  function he() {
    throw Error(m(321));
  }
  function Fu(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!en(e[t], n[t]))
        return !1;
    return !0;
  }
  function ju(e, n, t, r, l, u) {
    if (bn = u, q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, nl.current = e === null || e.memoizedState === null ? Zc : Jc, e = t(r, l), ur) {
      u = 0;
      do {
        if (ur = !1, or = 0, 25 <= u)
          throw Error(m(301));
        u += 1, se = ue = null, n.updateQueue = null, nl.current = qc, e = t(r, l);
      } while (ur);
    }
    if (nl.current = ul, n = ue !== null && ue.next !== null, bn = 0, se = ue = q = null, tl = !1, n)
      throw Error(m(300));
    return e;
  }
  function Uu() {
    var e = or !== 0;
    return or = 0, e;
  }
  function pn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return se === null ? q.memoizedState = se = e : se = se.next = e, se;
  }
  function Ke() {
    if (ue === null) {
      var e = q.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ue.next;
    var n = se === null ? q.memoizedState : se.next;
    if (n !== null)
      se = n, ue = e;
    else {
      if (e === null)
        throw Error(m(310));
      ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, se === null ? q.memoizedState = se = e : se = se.next = e;
    }
    return se;
  }
  function ir(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Vu(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ue, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((bn & y) === y)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, q.lanes |= y, et |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, en(r, n.memoizedState) || (Le = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, q.lanes |= u, et |= u, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Au(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      en(u, n.memoizedState) || (Le = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function os() {
  }
  function is(e, n) {
    var t = q, r = Ke(), l = n(), u = !en(r.memoizedState, l);
    if (u && (r.memoizedState = l, Le = !0), r = r.queue, Bu(cs.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || se !== null && se.memoizedState.tag & 1) {
      if (t.flags |= 2048, sr(9, as.bind(null, t, r, l, n), void 0, null), ae === null)
        throw Error(m(349));
      bn & 30 || ss(t, n, l);
    }
    return l;
  }
  function ss(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function as(e, n, t, r) {
    n.value = t, n.getSnapshot = r, fs(n) && ds(e);
  }
  function cs(e, n, t) {
    return t(function() {
      fs(n) && ds(e);
    });
  }
  function fs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !en(e, t);
    } catch {
      return !0;
    }
  }
  function ds(e) {
    var n = kn(e, 1);
    n !== null && un(n, e, 1, -1);
  }
  function ps(e) {
    var n = pn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }, n.queue = e, e = e.dispatch = Gc.bind(null, q, e), [n.memoizedState, e];
  }
  function sr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ms() {
    return Ke().memoizedState;
  }
  function rl(e, n, t, r) {
    var l = pn();
    q.flags |= e, l.memoizedState = sr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ll(e, n, t, r) {
    var l = Ke();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ue !== null) {
      var o = ue.memoizedState;
      if (u = o.destroy, r !== null && Fu(r, o.deps)) {
        l.memoizedState = sr(n, t, u, r);
        return;
      }
    }
    q.flags |= e, l.memoizedState = sr(1 | n, t, u, r);
  }
  function vs(e, n) {
    return rl(8390656, 8, e, n);
  }
  function Bu(e, n) {
    return ll(2048, 8, e, n);
  }
  function hs(e, n) {
    return ll(4, 2, e, n);
  }
  function ys(e, n) {
    return ll(4, 4, e, n);
  }
  function gs(e, n) {
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
    return t = t != null ? t.concat([e]) : null, ll(4, 4, gs.bind(null, n, e), t);
  }
  function Hu() {
  }
  function Ss(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Fu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function ks(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Fu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Es(e, n, t) {
    return bn & 21 ? (en(t, n) || (t = Xo(), q.lanes |= t, et |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = t);
  }
  function Yc(e, n) {
    var t = V;
    V = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Iu.transition;
    Iu.transition = {};
    try {
      e(!1), n();
    } finally {
      V = t, Iu.transition = r;
    }
  }
  function _s() {
    return Ke().memoizedState;
  }
  function Xc(e, n, t) {
    var r = Bn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Cs(e))
      xs(n, t);
    else if (t = Xi(e, n, t, r), t !== null) {
      var l = Ee();
      un(t, e, r, l), Ps(t, n, r);
    }
  }
  function Gc(e, n, t) {
    var r = Bn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Cs(e))
      xs(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null))
        try {
          var o = n.lastRenderedState, i = u(o, t);
          if (l.hasEagerState = !0, l.eagerState = i, en(i, o)) {
            var s = n.interleaved;
            s === null ? (l.next = l, Nu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = Xi(e, n, l, r), t !== null && (l = Ee(), un(t, e, r, l), Ps(t, n, r));
    }
  }
  function Cs(e) {
    var n = e.alternate;
    return e === q || n !== null && n === q;
  }
  function xs(e, n) {
    ur = tl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ps(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Hl(e, t);
    }
  }
  var ul = { readContext: Qe, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Zc = { readContext: Qe, useCallback: function(e, n) {
    return pn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Qe, useEffect: vs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, rl(
      4194308,
      4,
      gs.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return rl(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return rl(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = pn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = pn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Xc.bind(null, q, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = pn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ps, useDebugValue: Hu, useDeferredValue: function(e) {
    return pn().memoizedState = e;
  }, useTransition: function() {
    var e = ps(!1), n = e[0];
    return e = Yc.bind(null, e[1]), pn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = q, l = pn();
    if (G) {
      if (t === void 0)
        throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ae === null)
        throw Error(m(349));
      bn & 30 || ss(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, vs(cs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, sr(9, as.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = pn(), n = ae.identifierPrefix;
    if (G) {
      var t = Sn, r = wn;
      t = (r & ~(1 << 32 - be(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = or++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Kc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, Jc = {
    readContext: Qe,
    useCallback: Ss,
    useContext: Qe,
    useEffect: Bu,
    useImperativeHandle: ws,
    useInsertionEffect: hs,
    useLayoutEffect: ys,
    useMemo: ks,
    useReducer: Vu,
    useRef: ms,
    useState: function() {
      return Vu(ir);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      var n = Ke();
      return Es(n, ue.memoizedState, e);
    },
    useTransition: function() {
      var e = Vu(ir)[0], n = Ke().memoizedState;
      return [e, n];
    },
    useMutableSource: os,
    useSyncExternalStore: is,
    useId: _s,
    unstable_isNewReconciler: !1
  }, qc = { readContext: Qe, useCallback: Ss, useContext: Qe, useEffect: Bu, useImperativeHandle: ws, useInsertionEffect: hs, useLayoutEffect: ys, useMemo: ks, useReducer: Au, useRef: ms, useState: function() {
    return Au(ir);
  }, useDebugValue: Hu, useDeferredValue: function(e) {
    var n = Ke();
    return ue === null ? n.memoizedState = e : Es(n, ue.memoizedState, e);
  }, useTransition: function() {
    var e = Au(ir)[0], n = Ke().memoizedState;
    return [e, n];
  }, useMutableSource: os, useSyncExternalStore: is, useId: _s, unstable_isNewReconciler: !1 };
  function xt(e, n) {
    try {
      var t = "", r = n;
      do
        t += $(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function $u(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Wu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var bc = typeof WeakMap == "function" ? WeakMap : Map;
  function Ns(e, n, t) {
    t = En(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      dl || (dl = !0, uo = r), Wu(e, n);
    }, t;
  }
  function zs(e, n, t) {
    t = En(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Wu(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Wu(e, n), typeof r != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
    }), t;
  }
  function Ts(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bc();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = mf.bind(null, e, n, t), n.then(e, e));
  }
  function Ls(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Rs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = En(-1, 1), n.tag = 2, jn(t, n, 1))), t.lanes |= 1), e);
  }
  var ef = me.ReactCurrentOwner, Le = !1;
  function ke(e, n, t, r) {
    n.child = e === null ? ls(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Os(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return Et(n, l), r = ju(e, n, t, r, u, l), t = Uu(), e !== null && !Le ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, _n(e, n, l)) : (G && t && gu(n), n.flags |= 1, ke(e, n, r, l), n.child);
  }
  function Ms(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !po(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Ds(e, n, u, r, l)) : (e = gl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Xt, t(o, r) && e.ref === n.ref)
        return _n(e, n, l);
    }
    return n.flags |= 1, e = $n(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Ds(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xt(u, r) && e.ref === n.ref)
        if (Le = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)
          e.flags & 131072 && (Le = !0);
        else
          return n.lanes = e.lanes, _n(e, n, l);
    }
    return Qu(e, n, t, r, l);
  }
  function Is(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(Nt, Ve), Ve |= t;
      else {
        if (!(t & 1073741824))
          return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, W(Nt, Ve), Ve |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, W(Nt, Ve), Ve |= r;
      }
    else
      u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, W(Nt, Ve), Ve |= r;
    return ke(e, n, l, t), n.child;
  }
  function Fs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Qu(e, n, t, r, l) {
    var u = Te(t) ? Xn : ve.current;
    return u = yt(n, u), Et(n, l), t = ju(e, n, t, r, u, l), r = Uu(), e !== null && !Le ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, _n(e, n, l)) : (G && r && gu(n), n.flags |= 1, ke(e, n, t, l), n.child);
  }
  function js(e, n, t, r, l) {
    if (Te(t)) {
      var u = !0;
      $r(n);
    } else
      u = !1;
    if (Et(n, l), n.stateNode === null)
      il(e, n), es(n, t, r), Lu(n, t, r, l), r = !0;
    else if (e === null) {
      var o = n.stateNode, i = n.memoizedProps;
      o.props = i;
      var s = o.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Qe(p) : (p = Te(t) ? Xn : ve.current, p = yt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && ns(n, o, r, p), Fn = !1;
      var v = n.memoizedState;
      o.state = v, Jr(n, r, o, l), s = n.memoizedState, i !== r || v !== s || ze.current || Fn ? (typeof y == "function" && (Tu(n, t, y, r), s = n.memoizedState), (i = Fn || bi(n, t, i, r, v, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      o = n.stateNode, Gi(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : tn(n.type, i), o.props = p, g = n.pendingProps, v = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Qe(s) : (s = Te(t) ? Xn : ve.current, s = yt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || v !== s) && ns(n, o, r, s), Fn = !1, v = n.memoizedState, o.state = v, Jr(n, r, o, l);
      var _ = n.memoizedState;
      i !== g || v !== _ || ze.current || Fn ? (typeof k == "function" && (Tu(n, t, k, r), _ = n.memoizedState), (p = Fn || bi(n, t, p, r, v, _, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = _), o.props = r, o.state = _, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Ku(e, n, t, r, u, l);
  }
  function Ku(e, n, t, r, l, u) {
    Fs(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o)
      return l && Bi(n, t, !1), _n(e, n, u);
    r = n.stateNode, ef.current = n;
    var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = _t(n, e.child, null, u), n.child = _t(n, null, i, u)) : ke(e, n, i, u), n.memoizedState = r.state, l && Bi(n, t, !0), n.child;
  }
  function Us(e) {
    var n = e.stateNode;
    n.pendingContext ? Vi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Vi(e, n.context, !1), Ru(e, n.containerInfo);
  }
  function Vs(e, n, t, r, l) {
    return St(), Eu(l), n.flags |= 256, ke(e, n, t, r), n.child;
  }
  var Yu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function As(e, n, t) {
    var r = n.pendingProps, l = J.current, u = !1, o = (n.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(J, l & 1), e === null)
      return ku(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = wl(o, r, 0, null), e = lt(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Xu(t), n.memoizedState = Yu, e) : Gu(n, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
      return nf(e, n, o, r, i, l, t);
    if (u) {
      u = r.fallback, o = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = $n(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = $n(i, u) : (u = lt(u, o, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, o = e.child.memoizedState, o = o === null ? Xu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~t, n.memoizedState = Yu, r;
    }
    return u = e.child, e = u.sibling, r = $n(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function Gu(e, n) {
    return n = wl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function ol(e, n, t, r) {
    return r !== null && Eu(r), _t(n, e.child, null, t), e = Gu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function nf(e, n, t, r, l, u, o) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = $u(Error(m(422))), ol(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), u = lt(u, l, o, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && _t(n, e.child, null, o), n.child.memoizedState = Xu(o), n.memoizedState = Yu, u);
    if (!(n.mode & 1))
      return ol(e, n, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var i = r.dgst;
      return r = i, u = Error(m(419)), r = $u(u, r, void 0), ol(e, n, o, r);
    }
    if (i = (o & e.childLanes) !== 0, Le || i) {
      if (r = ae, r !== null) {
        switch (o & -o) {
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
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, kn(e, l), un(r, e, l, -1));
      }
      return fo(), r = $u(Error(m(421))), ol(e, n, o, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = vf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Ue = On(l.nextSibling), je = n, G = !0, nn = null, e !== null && ($e[We++] = wn, $e[We++] = Sn, $e[We++] = Gn, wn = e.id, Sn = e.overflow, Gn = n), n = Gu(n, r.children), n.flags |= 4096, n);
  }
  function Bs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Pu(e.return, n, t);
  }
  function Zu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (ke(e, n, r.children, t), r = J.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Bs(e, t, n);
            else if (e.tag === 19)
              Bs(e, t, n);
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
    if (W(J, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && el(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Zu(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && el(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          Zu(n, !0, t, null, u);
          break;
        case "together":
          Zu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function il(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function _n(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), et |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = $n(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = $n(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function tf(e, n, t) {
    switch (n.tag) {
      case 3:
        Us(n), St();
        break;
      case 5:
        us(n);
        break;
      case 1:
        Te(n.type) && $r(n);
        break;
      case 4:
        Ru(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        W(Xr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (W(J, J.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? As(e, n, t) : (W(J, J.current & 1), e = _n(e, n, t), e !== null ? e.sibling : null);
        W(J, J.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Hs(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(J, J.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Is(e, n, t);
    }
    return _n(e, n, t);
  }
  var $s, Ju, Ws, Qs;
  $s = function(e, n) {
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
  }, Ju = function() {
  }, Ws = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, qn(dn.current);
      var u = null;
      switch (t) {
        case "input":
          l = Pl(e, l), r = Pl(e, r), u = [];
          break;
        case "select":
          l = a({}, l, { value: void 0 }), r = a({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Tl(e, l), r = Tl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
      }
      Rl(t, r);
      var o;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var i = l[p];
            for (o in i)
              i.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (_e.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null))
          if (p === "style")
            if (i) {
              for (o in i)
                !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
              for (o in s)
                s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
            } else
              t || (u || (u = []), u.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (_e.hasOwnProperty(p) ? (s != null && p === "onScroll" && Q("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Qs = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function ar(e, n) {
    if (!G)
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
  function ye(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function rf(e, n, t) {
    var r = n.pendingProps;
    switch (wu(n), n.tag) {
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
        return ye(n), null;
      case 1:
        return Te(n.type) && Hr(), ye(n), null;
      case 3:
        return r = n.stateNode, Ct(), K(ze), K(ve), Du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, nn !== null && (so(nn), nn = null))), Ju(e, n), ye(n), null;
      case 5:
        Ou(n);
        var l = qn(lr.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Ws(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(m(166));
            return ye(n), null;
          }
          if (e = qn(dn.current), Yr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[fn] = n, r[bt] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Q("cancel", r), Q("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zt.length; l++)
                  Q(Zt[l], r);
                break;
              case "source":
                Q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  r
                ), Q("load", r);
                break;
              case "details":
                Q("toggle", r);
                break;
              case "input":
                Co(r, u), Q("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Q("invalid", r);
                break;
              case "textarea":
                No(r, u), Q("invalid", r);
            }
            Rl(t, u), l = null;
            for (var o in u)
              if (u.hasOwnProperty(o)) {
                var i = u[o];
                o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Vr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Vr(
                  r.textContent,
                  i,
                  e
                ), l = ["children", "" + i]) : _e.hasOwnProperty(o) && i != null && o === "onScroll" && Q("scroll", r);
              }
            switch (t) {
              case "input":
                hr(r), Po(r, u, !0);
                break;
              case "textarea":
                hr(r), To(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Ar);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[fn] = n, e[bt] = r, $s(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (o = Ol(t, r), t) {
                case "dialog":
                  Q("cancel", e), Q("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Q("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Zt.length; l++)
                    Q(Zt[l], e);
                  l = r;
                  break;
                case "source":
                  Q("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Q(
                    "error",
                    e
                  ), Q("load", e), l = r;
                  break;
                case "details":
                  Q("toggle", e), l = r;
                  break;
                case "input":
                  Co(e, r), l = Pl(e, r), Q("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = a({}, r, { value: void 0 }), Q("invalid", e);
                  break;
                case "textarea":
                  No(e, r), l = Tl(e, r), Q("invalid", e);
                  break;
                default:
                  l = r;
              }
              Rl(t, l), i = l;
              for (u in i)
                if (i.hasOwnProperty(u)) {
                  var s = i[u];
                  u === "style" ? Mo(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ro(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Rt(e, s) : typeof s == "number" && Rt(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (_e.hasOwnProperty(u) ? s != null && u === "onScroll" && Q("scroll", e) : s != null && Ze(e, u, s, o));
                }
              switch (t) {
                case "input":
                  hr(e), Po(e, r, !1);
                  break;
                case "textarea":
                  hr(e), To(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + U(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? ut(e, !!r.multiple, u, !1) : r.defaultValue != null && ut(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ar);
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
        return ye(n), null;
      case 6:
        if (e && n.stateNode != null)
          Qs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(m(166));
          if (t = qn(lr.current), qn(dn.current), Yr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[fn] = n, (u = r.nodeValue !== t) && (e = je, e !== null))
              switch (e.tag) {
                case 3:
                  Vr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Vr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[fn] = n, n.stateNode = r;
        }
        return ye(n), null;
      case 13:
        if (K(J), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (G && Ue !== null && n.mode & 1 && !(n.flags & 128))
            Yi(), St(), n.flags |= 98560, u = !1;
          else if (u = Yr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u)
                throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                throw Error(m(317));
              u[fn] = n;
            } else
              St(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ye(n), u = !1;
          } else
            nn !== null && (so(nn), nn = null), u = !0;
          if (!u)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || J.current & 1 ? oe === 0 && (oe = 3) : fo())), n.updateQueue !== null && (n.flags |= 4), ye(n), null);
      case 4:
        return Ct(), Ju(e, n), e === null && Jt(n.stateNode.containerInfo), ye(n), null;
      case 10:
        return xu(n.type._context), ye(n), null;
      case 17:
        return Te(n.type) && Hr(), ye(n), null;
      case 19:
        if (K(J), u = n.memoizedState, u === null)
          return ye(n), null;
        if (r = (n.flags & 128) !== 0, o = u.rendering, o === null)
          if (r)
            ar(u, !1);
          else {
            if (oe !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (o = el(e), o !== null) {
                  for (n.flags |= 128, ar(u, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    u = t, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return W(J, J.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null && te() > zt && (n.flags |= 128, r = !0, ar(u, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = el(o), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ar(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !G)
                return ye(n), null;
            } else
              2 * te() - u.renderingStartTime > zt && t !== 1073741824 && (n.flags |= 128, r = !0, ar(u, !1), n.lanes = 4194304);
          u.isBackwards ? (o.sibling = n.child, n.child = o) : (t = u.last, t !== null ? t.sibling = o : n.child = o, u.last = o);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = te(), n.sibling = null, t = J.current, W(J, r ? t & 1 | 2 : t & 1), n) : (ye(n), null);
      case 22:
      case 23:
        return co(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ve & 1073741824 && (ye(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ye(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function lf(e, n) {
    switch (wu(n), n.tag) {
      case 1:
        return Te(n.type) && Hr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Ct(), K(ze), K(ve), Du(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ou(n), null;
      case 13:
        if (K(J), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(m(340));
          St();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return K(J), null;
      case 4:
        return Ct(), null;
      case 10:
        return xu(n.type._context), null;
      case 22:
      case 23:
        return co(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sl = !1, ge = !1, uf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Pt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ee(e, n, r);
        }
      else
        t.current = null;
  }
  function qu(e, n, t) {
    try {
      t();
    } catch (r) {
      ee(e, n, r);
    }
  }
  var Ks = !1;
  function of(e, n) {
    if (cu = zr, e = _i(), tu(e)) {
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
            var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, v = null;
            n:
              for (; ; ) {
                for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (k = g.firstChild) !== null; )
                  v = g, g = k;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (v === t && ++p === l && (i = o), v === u && ++y === r && (s = o), (k = g.nextSibling) !== null)
                    break;
                  g = v, v = g.parentNode;
                }
                g = k;
              }
            t = i === -1 || s === -1 ? null : { start: i, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (fu = { focusedElem: e, selectionRange: t }, zr = !1, E = n; E !== null; )
      if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, E = e;
      else
        for (; E !== null; ) {
          n = E;
          try {
            var _ = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps, re = _.memoizedState, f = n.stateNode, c = f.getSnapshotBeforeUpdate(n.elementType === n.type ? C : tn(n.type, C), re);
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
                  throw Error(m(163));
              }
          } catch (w) {
            ee(n, n.return, w);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, E = e;
            break;
          }
          E = n.return;
        }
    return _ = Ks, Ks = !1, _;
  }
  function cr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && qu(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function al(e, n) {
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
  function bu(e) {
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
  function Ys(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ys(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[fn], delete n[bt], delete n[vu], delete n[Hc], delete n[$c])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Xs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gs(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Xs(e.return))
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
  function eo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ar));
    else if (r !== 4 && (e = e.child, e !== null))
      for (eo(e, n, t), e = e.sibling; e !== null; )
        eo(e, n, t), e = e.sibling;
  }
  function no(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (no(e, n, t), e = e.sibling; e !== null; )
        no(e, n, t), e = e.sibling;
  }
  var fe = null, rn = !1;
  function Un(e, n, t) {
    for (t = t.child; t !== null; )
      Zs(e, n, t), t = t.sibling;
  }
  function Zs(e, n, t) {
    if (cn && typeof cn.onCommitFiberUnmount == "function")
      try {
        cn.onCommitFiberUnmount(Er, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        ge || Pt(t, n);
      case 6:
        var r = fe, l = rn;
        fe = null, Un(e, n, t), fe = r, rn = l, fe !== null && (rn ? (e = fe, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : fe.removeChild(t.stateNode));
        break;
      case 18:
        fe !== null && (rn ? (e = fe, t = t.stateNode, e.nodeType === 8 ? mu(e.parentNode, t) : e.nodeType === 1 && mu(e, t), Ht(e)) : mu(fe, t.stateNode));
        break;
      case 4:
        r = fe, l = rn, fe = t.stateNode.containerInfo, rn = !0, Un(e, n, t), fe = r, rn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ge && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && qu(t, n, o), l = l.next;
          } while (l !== r);
        }
        Un(e, n, t);
        break;
      case 1:
        if (!ge && (Pt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (i) {
            ee(t, n, i);
          }
        Un(e, n, t);
        break;
      case 21:
        Un(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (ge = (r = ge) || t.memoizedState !== null, Un(e, n, t), ge = r) : Un(e, n, t);
        break;
      default:
        Un(e, n, t);
    }
  }
  function Js(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new uf()), n.forEach(function(r) {
        var l = hf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function ln(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e, o = n, i = o;
          e:
            for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  fe = i.stateNode, rn = !1;
                  break e;
                case 3:
                  fe = i.stateNode.containerInfo, rn = !0;
                  break e;
                case 4:
                  fe = i.stateNode.containerInfo, rn = !0;
                  break e;
              }
              i = i.return;
            }
          if (fe === null)
            throw Error(m(160));
          Zs(u, o, l), fe = null, rn = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          ee(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        qs(n, e), n = n.sibling;
  }
  function qs(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ln(n, e), mn(e), r & 4) {
          try {
            cr(3, e, e.return), al(3, e);
          } catch (C) {
            ee(e, e.return, C);
          }
          try {
            cr(5, e, e.return);
          } catch (C) {
            ee(e, e.return, C);
          }
        }
        break;
      case 1:
        ln(n, e), mn(e), r & 512 && t !== null && Pt(t, t.return);
        break;
      case 5:
        if (ln(n, e), mn(e), r & 512 && t !== null && Pt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Rt(l, "");
          } catch (C) {
            ee(e, e.return, C);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = t !== null ? t.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              i === "input" && u.type === "radio" && u.name != null && xo(l, u), Ol(i, o);
              var p = Ol(i, u);
              for (o = 0; o < s.length; o += 2) {
                var y = s[o], g = s[o + 1];
                y === "style" ? Mo(l, g) : y === "dangerouslySetInnerHTML" ? Ro(l, g) : y === "children" ? Rt(l, g) : Ze(l, y, g, p);
              }
              switch (i) {
                case "input":
                  Nl(l, u);
                  break;
                case "textarea":
                  zo(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null ? ut(l, !!u.multiple, k, !1) : v !== !!u.multiple && (u.defaultValue != null ? ut(
                    l,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  ) : ut(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[bt] = u;
            } catch (C) {
              ee(e, e.return, C);
            }
        }
        break;
      case 6:
        if (ln(n, e), mn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (C) {
            ee(e, e.return, C);
          }
        }
        break;
      case 3:
        if (ln(n, e), mn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Ht(n.containerInfo);
          } catch (C) {
            ee(e, e.return, C);
          }
        break;
      case 4:
        ln(n, e), mn(e);
        break;
      case 13:
        ln(n, e), mn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (lo = te())), r & 4 && Js(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (ge = (p = ge) || y, ln(n, e), ge = p) : ln(n, e), mn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (v = E, k = v.child, v.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    cr(4, v, v.return);
                    break;
                  case 1:
                    Pt(v, v.return);
                    var _ = v.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      r = v, t = v.return;
                      try {
                        n = r, _.props = n.memoizedProps, _.state = n.memoizedState, _.componentWillUnmount();
                      } catch (C) {
                        ee(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    Pt(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      na(g);
                      continue;
                    }
                }
                k !== null ? (k.return = v, E = k) : na(g);
              }
              y = y.sibling;
            }
          e:
            for (y = null, g = e; ; ) {
              if (g.tag === 5) {
                if (y === null) {
                  y = g;
                  try {
                    l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Oo("display", o));
                  } catch (C) {
                    ee(e, e.return, C);
                  }
                }
              } else if (g.tag === 6) {
                if (y === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (C) {
                    ee(e, e.return, C);
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
                y === g && (y = null), g = g.return;
              }
              y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
            }
        }
        break;
      case 19:
        ln(n, e), mn(e), r & 4 && Js(e);
        break;
      case 21:
        break;
      default:
        ln(
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
            if (Xs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Rt(l, ""), r.flags &= -33);
            var u = Gs(e);
            no(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = Gs(e);
            eo(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ee(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function sf(e, n, t) {
    E = e, bs(e);
  }
  function bs(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || sl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || ge;
          i = sl;
          var p = ge;
          if (sl = o, (ge = s) && !p)
            for (E = l; E !== null; )
              o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? ta(l) : s !== null ? (s.return = o, E = s) : ta(l);
          for (; u !== null; )
            E = u, bs(u), u = u.sibling;
          E = l, sl = i, ge = p;
        }
        ea(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : ea(e);
    }
  }
  function ea(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ge || al(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !ge)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : tn(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = n.updateQueue;
                u !== null && Ji(n, u, r);
                break;
              case 3:
                var o = n.updateQueue;
                if (o !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  Ji(n, o, t);
                }
                break;
              case 5:
                var i = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = i;
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
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Ht(g);
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
                throw Error(m(163));
            }
          ge || n.flags & 512 && bu(n);
        } catch (v) {
          ee(n, n.return, v);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function na(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ta(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              al(4, n);
            } catch (s) {
              ee(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ee(n, l, s);
              }
            }
            var u = n.return;
            try {
              bu(n);
            } catch (s) {
              ee(n, u, s);
            }
            break;
          case 5:
            var o = n.return;
            try {
              bu(n);
            } catch (s) {
              ee(n, o, s);
            }
        }
      } catch (s) {
        ee(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var af = Math.ceil, cl = me.ReactCurrentDispatcher, to = me.ReactCurrentOwner, Ye = me.ReactCurrentBatchConfig, I = 0, ae = null, le = null, de = 0, Ve = 0, Nt = Mn(0), oe = 0, fr = null, et = 0, fl = 0, ro = 0, dr = null, Re = null, lo = 0, zt = 1 / 0, Cn = null, dl = !1, uo = null, Vn = null, pl = !1, An = null, ml = 0, pr = 0, oo = null, vl = -1, hl = 0;
  function Ee() {
    return I & 6 ? te() : vl !== -1 ? vl : vl = te();
  }
  function Bn(e) {
    return e.mode & 1 ? I & 2 && de !== 0 ? de & -de : Qc.transition !== null ? (hl === 0 && (hl = Xo()), hl) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ri(e.type)), e) : 1;
  }
  function un(e, n, t, r) {
    if (50 < pr)
      throw pr = 0, oo = null, Error(m(185));
    jt(e, t, r), (!(I & 2) || e !== ae) && (e === ae && (!(I & 2) && (fl |= t), oe === 4 && Hn(e, de)), Oe(e, r), t === 1 && I === 0 && !(n.mode & 1) && (zt = te() + 500, Wr && In()));
  }
  function Oe(e, n) {
    var t = e.callbackNode;
    Qa(e, n);
    var r = xr(e, e === ae ? de : 0);
    if (r === 0)
      t !== null && Qo(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Qo(t), n === 1)
        e.tag === 0 ? Wc(la.bind(null, e)) : Hi(la.bind(null, e)), Ac(function() {
          !(I & 6) && In();
        }), t = null;
      else {
        switch (Go(r)) {
          case 1:
            t = Vl;
            break;
          case 4:
            t = Ko;
            break;
          case 16:
            t = kr;
            break;
          case 536870912:
            t = Yo;
            break;
          default:
            t = kr;
        }
        t = da(t, ra.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ra(e, n) {
    if (vl = -1, hl = 0, I & 6)
      throw Error(m(327));
    var t = e.callbackNode;
    if (Tt() && e.callbackNode !== t)
      return null;
    var r = xr(e, e === ae ? de : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = yl(e, r);
    else {
      n = r;
      var l = I;
      I |= 2;
      var u = oa();
      (ae !== e || de !== n) && (Cn = null, zt = te() + 500, tt(e, n));
      do
        try {
          df();
          break;
        } catch (i) {
          ua(e, i);
        }
      while (1);
      Cu(), cl.current = u, I = l, le !== null ? n = 0 : (ae = null, de = 0, n = oe);
    }
    if (n !== 0) {
      if (n === 2 && (l = Al(e), l !== 0 && (r = l, n = io(e, l))), n === 1)
        throw t = fr, tt(e, 0), Hn(e, r), Oe(e, te()), t;
      if (n === 6)
        Hn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !cf(l) && (n = yl(e, r), n === 2 && (u = Al(e), u !== 0 && (r = u, n = io(e, u))), n === 1))
          throw t = fr, tt(e, 0), Hn(e, r), Oe(e, te()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            rt(e, Re, Cn);
            break;
          case 3:
            if (Hn(e, r), (r & 130023424) === r && (n = lo + 500 - te(), 10 < n)) {
              if (xr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ee(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = pu(rt.bind(null, e, Re, Cn), n);
              break;
            }
            rt(e, Re, Cn);
            break;
          case 4:
            if (Hn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - be(r);
              u = 1 << o, o = n[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * af(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = pu(rt.bind(null, e, Re, Cn), r);
              break;
            }
            rt(e, Re, Cn);
            break;
          case 5:
            rt(e, Re, Cn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Oe(e, te()), e.callbackNode === t ? ra.bind(null, e) : null;
  }
  function io(e, n) {
    var t = dr;
    return e.current.memoizedState.isDehydrated && (tt(e, n).flags |= 256), e = yl(e, n), e !== 2 && (n = Re, Re = t, n !== null && so(n)), e;
  }
  function so(e) {
    Re === null ? Re = e : Re.push.apply(Re, e);
  }
  function cf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], u = l.getSnapshot;
            l = l.value;
            try {
              if (!en(u(), l))
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
  function Hn(e, n) {
    for (n &= ~ro, n &= ~fl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - be(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function la(e) {
    if (I & 6)
      throw Error(m(327));
    Tt();
    var n = xr(e, 0);
    if (!(n & 1))
      return Oe(e, te()), null;
    var t = yl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Al(e);
      r !== 0 && (n = r, t = io(e, r));
    }
    if (t === 1)
      throw t = fr, tt(e, 0), Hn(e, n), Oe(e, te()), t;
    if (t === 6)
      throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, rt(e, Re, Cn), Oe(e, te()), null;
  }
  function ao(e, n) {
    var t = I;
    I |= 1;
    try {
      return e(n);
    } finally {
      I = t, I === 0 && (zt = te() + 500, Wr && In());
    }
  }
  function nt(e) {
    An !== null && An.tag === 0 && !(I & 6) && Tt();
    var n = I;
    I |= 1;
    var t = Ye.transition, r = V;
    try {
      if (Ye.transition = null, V = 1, e)
        return e();
    } finally {
      V = r, Ye.transition = t, I = n, !(I & 6) && In();
    }
  }
  function co() {
    Ve = Nt.current, K(Nt);
  }
  function tt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Vc(t)), le !== null)
      for (t = le.return; t !== null; ) {
        var r = t;
        switch (wu(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Hr();
            break;
          case 3:
            Ct(), K(ze), K(ve), Du();
            break;
          case 5:
            Ou(r);
            break;
          case 4:
            Ct();
            break;
          case 13:
            K(J);
            break;
          case 19:
            K(J);
            break;
          case 10:
            xu(r.type._context);
            break;
          case 22:
          case 23:
            co();
        }
        t = t.return;
      }
    if (ae = e, le = e = $n(e.current, null), de = Ve = n, oe = 0, fr = null, ro = fl = et = 0, Re = dr = null, Jn !== null) {
      for (n = 0; n < Jn.length; n++)
        if (t = Jn[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, u = t.pending;
          if (u !== null) {
            var o = u.next;
            u.next = l, r.next = o;
          }
          t.pending = r;
        }
      Jn = null;
    }
    return e;
  }
  function ua(e, n) {
    do {
      var t = le;
      try {
        if (Cu(), nl.current = ul, tl) {
          for (var r = q.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          tl = !1;
        }
        if (bn = 0, se = ue = q = null, ur = !1, or = 0, to.current = null, t === null || t.return === null) {
          oe = 1, fr = n, le = null;
          break;
        }
        e: {
          var u = e, o = t.return, i = t, s = n;
          if (n = de, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var v = y.alternate;
              v ? (y.updateQueue = v.updateQueue, y.memoizedState = v.memoizedState, y.lanes = v.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Ls(o);
            if (k !== null) {
              k.flags &= -257, Rs(k, o, i, u, n), k.mode & 1 && Ts(u, p, n), n = k, s = p;
              var _ = n.updateQueue;
              if (_ === null) {
                var C = /* @__PURE__ */ new Set();
                C.add(s), n.updateQueue = C;
              } else
                _.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ts(u, p, n), fo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (G && i.mode & 1) {
            var re = Ls(o);
            if (re !== null) {
              !(re.flags & 65536) && (re.flags |= 256), Rs(re, o, i, u, n), Eu(xt(s, i));
              break e;
            }
          }
          u = s = xt(s, i), oe !== 4 && (oe = 2), dr === null ? dr = [u] : dr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Ns(u, s, n);
                Zi(u, f);
                break e;
              case 1:
                i = s;
                var c = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vn === null || !Vn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = zs(u, i, n);
                  Zi(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        sa(t);
      } catch (x) {
        n = x, le === t && t !== null && (le = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function oa() {
    var e = cl.current;
    return cl.current = ul, e === null ? ul : e;
  }
  function fo() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ae === null || !(et & 268435455) && !(fl & 268435455) || Hn(ae, de);
  }
  function yl(e, n) {
    var t = I;
    I |= 2;
    var r = oa();
    (ae !== e || de !== n) && (Cn = null, tt(e, n));
    do
      try {
        ff();
        break;
      } catch (l) {
        ua(e, l);
      }
    while (1);
    if (Cu(), I = t, cl.current = r, le !== null)
      throw Error(m(261));
    return ae = null, de = 0, oe;
  }
  function ff() {
    for (; le !== null; )
      ia(le);
  }
  function df() {
    for (; le !== null && !Fa(); )
      ia(le);
  }
  function ia(e) {
    var n = fa(e.alternate, e, Ve);
    e.memoizedProps = e.pendingProps, n === null ? sa(e) : le = n, to.current = null;
  }
  function sa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = lf(t, n), t !== null) {
          t.flags &= 32767, le = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          oe = 6, le = null;
          return;
        }
      } else if (t = rf(t, n, Ve), t !== null) {
        le = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        le = n;
        return;
      }
      le = n = e;
    } while (n !== null);
    oe === 0 && (oe = 5);
  }
  function rt(e, n, t) {
    var r = V, l = Ye.transition;
    try {
      Ye.transition = null, V = 1, pf(e, n, t, r);
    } finally {
      Ye.transition = l, V = r;
    }
    return null;
  }
  function pf(e, n, t, r) {
    do
      Tt();
    while (An !== null);
    if (I & 6)
      throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Ka(e, u), e === ae && (le = ae = null, de = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || pl || (pl = !0, da(kr, function() {
      return Tt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ye.transition, Ye.transition = null;
      var o = V;
      V = 1;
      var i = I;
      I |= 4, to.current = null, of(e, t), qs(t, e), Oc(fu), zr = !!cu, fu = cu = null, e.current = t, sf(t), ja(), I = i, V = o, Ye.transition = u;
    } else
      e.current = t;
    if (pl && (pl = !1, An = e, ml = l), u = e.pendingLanes, u === 0 && (Vn = null), Aa(t.stateNode), Oe(e, te()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (dl)
      throw dl = !1, e = uo, uo = null, e;
    return ml & 1 && e.tag !== 0 && Tt(), u = e.pendingLanes, u & 1 ? e === oo ? pr++ : (pr = 0, oo = e) : pr = 0, In(), null;
  }
  function Tt() {
    if (An !== null) {
      var e = Go(ml), n = Ye.transition, t = V;
      try {
        if (Ye.transition = null, V = 16 > e ? 16 : e, An === null)
          var r = !1;
        else {
          if (e = An, An = null, ml = 0, I & 6)
            throw Error(m(331));
          var l = I;
          for (I |= 4, E = e.current; E !== null; ) {
            var u = E, o = u.child;
            if (E.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null)
                      g.return = y, E = g;
                    else
                      for (; E !== null; ) {
                        y = E;
                        var v = y.sibling, k = y.return;
                        if (Ys(y), y === p) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          v.return = k, E = v;
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var _ = u.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var re = C.sibling;
                      C.sibling = null, C = re;
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null)
              o.return = u, E = o;
            else
              e:
                for (; E !== null; ) {
                  if (u = E, u.flags & 2048)
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cr(9, u, u.return);
                    }
                  var f = u.sibling;
                  if (f !== null) {
                    f.return = u.return, E = f;
                    break e;
                  }
                  E = u.return;
                }
          }
          var c = e.current;
          for (E = c; E !== null; ) {
            o = E;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null)
              d.return = o, E = d;
            else
              e:
                for (o = c; E !== null; ) {
                  if (i = E, i.flags & 2048)
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          al(9, i);
                      }
                    } catch (x) {
                      ee(i, i.return, x);
                    }
                  if (i === o) {
                    E = null;
                    break e;
                  }
                  var w = i.sibling;
                  if (w !== null) {
                    w.return = i.return, E = w;
                    break e;
                  }
                  E = i.return;
                }
          }
          if (I = l, In(), cn && typeof cn.onPostCommitFiberRoot == "function")
            try {
              cn.onPostCommitFiberRoot(Er, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        V = t, Ye.transition = n;
      }
    }
    return !1;
  }
  function aa(e, n, t) {
    n = xt(t, n), n = Ns(e, n, 1), e = jn(e, n, 1), n = Ee(), e !== null && (jt(e, 1, n), Oe(e, n));
  }
  function ee(e, n, t) {
    if (e.tag === 3)
      aa(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          aa(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
            e = xt(t, e), e = zs(n, e, 1), n = jn(n, e, 1), e = Ee(), n !== null && (jt(n, 1, e), Oe(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function mf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ee(), e.pingedLanes |= e.suspendedLanes & t, ae === e && (de & t) === t && (oe === 4 || oe === 3 && (de & 130023424) === de && 500 > te() - lo ? tt(e, 0) : ro |= t), Oe(e, n);
  }
  function ca(e, n) {
    n === 0 && (e.mode & 1 ? (n = Cr, Cr <<= 1, !(Cr & 130023424) && (Cr = 4194304)) : n = 1);
    var t = Ee();
    e = kn(e, n), e !== null && (jt(e, n, t), Oe(e, t));
  }
  function vf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ca(e, t);
  }
  function hf(e, n) {
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
        throw Error(m(314));
    }
    r !== null && r.delete(n), ca(e, t);
  }
  var fa;
  fa = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || ze.current)
        Le = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return Le = !1, tf(e, n, t);
        Le = !!(e.flags & 131072);
      }
    else
      Le = !1, G && n.flags & 1048576 && $i(n, Kr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        il(e, n), e = n.pendingProps;
        var l = yt(n, ve.current);
        Et(n, t), l = ju(null, n, r, e, l, t);
        var u = Uu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Te(r) ? (u = !0, $r(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, zu(n), l.updater = qr, n.stateNode = l, l._reactInternals = n, Lu(n, r, e, t), n = Ku(null, n, r, !0, u, t)) : (n.tag = 0, G && u && gu(n), ke(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (il(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = gf(r), e = tn(r, e), l) {
            case 0:
              n = Qu(null, n, r, e, t);
              break e;
            case 1:
              n = js(null, n, r, e, t);
              break e;
            case 11:
              n = Os(null, n, r, e, t);
              break e;
            case 14:
              n = Ms(null, n, r, tn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : tn(r, l), Qu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : tn(r, l), js(e, n, r, l, t);
      case 3:
        e: {
          if (Us(n), e === null)
            throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, Gi(e, n), Jr(n, r, null, t);
          var o = n.memoizedState;
          if (r = o.element, u.isDehydrated)
            if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
              l = xt(Error(m(423)), n), n = Vs(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = xt(Error(m(424)), n), n = Vs(e, n, r, t, l);
              break e;
            } else
              for (Ue = On(n.stateNode.containerInfo.firstChild), je = n, G = !0, nn = null, t = ls(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (St(), r === l) {
              n = _n(e, n, t);
              break e;
            }
            ke(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return us(n), e === null && ku(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, du(r, l) ? o = null : u !== null && du(r, u) && (n.flags |= 32), Fs(e, n), ke(e, n, o, t), n.child;
      case 6:
        return e === null && ku(n), null;
      case 13:
        return As(e, n, t);
      case 4:
        return Ru(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : ke(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : tn(r, l), Os(e, n, r, l, t);
      case 7:
        return ke(e, n, n.pendingProps, t), n.child;
      case 8:
        return ke(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return ke(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, o = l.value, W(Xr, r._currentValue), r._currentValue = o, u !== null)
            if (en(u.value, o)) {
              if (u.children === l.children && !ze.current) {
                n = _n(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var i = u.dependencies;
                if (i !== null) {
                  o = u.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        s = En(-1, t & -t), s.tag = 2;
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                        }
                      }
                      u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Pu(
                        u.return,
                        t,
                        n
                      ), i.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10)
                  o = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (o = u.return, o === null)
                    throw Error(m(341));
                  o.lanes |= t, i = o.alternate, i !== null && (i.lanes |= t), Pu(o, t, n), o = u.sibling;
                } else
                  o = u.child;
                if (o !== null)
                  o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === n) {
                      o = null;
                      break;
                    }
                    if (u = o.sibling, u !== null) {
                      u.return = o.return, o = u;
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          ke(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Et(n, t), l = Qe(l), r = r(l), n.flags |= 1, ke(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = tn(r, n.pendingProps), l = tn(r.type, l), Ms(e, n, r, l, t);
      case 15:
        return Ds(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : tn(r, l), il(e, n), n.tag = 1, Te(r) ? (e = !0, $r(n)) : e = !1, Et(n, t), es(n, r, l), Lu(n, r, l, t), Ku(null, n, r, !0, e, t);
      case 19:
        return Hs(e, n, t);
      case 22:
        return Is(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function da(e, n) {
    return Wo(e, n);
  }
  function yf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xe(e, n, t, r) {
    return new yf(e, n, t, r);
  }
  function po(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gf(e) {
    if (typeof e == "function")
      return po(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === sn)
        return 11;
      if (e === an)
        return 14;
    }
    return 2;
  }
  function $n(e, n) {
    var t = e.alternate;
    return t === null ? (t = Xe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function gl(e, n, t, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function")
      po(e) && (o = 1);
    else if (typeof e == "string")
      o = 5;
    else
      e:
        switch (e) {
          case xe:
            return lt(t.children, l, u, n);
          case He:
            o = 8, l |= 8;
            break;
          case xn:
            return e = Xe(12, t, n, l | 2), e.elementType = xn, e.lanes = u, e;
          case Ie:
            return e = Xe(13, t, n, l), e.elementType = Ie, e.lanes = u, e;
          case qe:
            return e = Xe(19, t, n, l), e.elementType = qe, e.lanes = u, e;
          case b:
            return wl(t, l, u, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case hn:
                  o = 10;
                  break e;
                case Qn:
                  o = 9;
                  break e;
                case sn:
                  o = 11;
                  break e;
                case an:
                  o = 14;
                  break e;
                case Pe:
                  o = 16, r = null;
                  break e;
              }
            throw Error(m(130, e == null ? e : typeof e, ""));
        }
    return n = Xe(o, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function lt(e, n, t, r) {
    return e = Xe(7, e, r, n), e.lanes = t, e;
  }
  function wl(e, n, t, r) {
    return e = Xe(22, e, r, n), e.elementType = b, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function mo(e, n, t) {
    return e = Xe(6, e, null, n), e.lanes = t, e;
  }
  function vo(e, n, t) {
    return n = Xe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function wf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ho(e, n, t, r, l, u, o, i, s) {
    return e = new wf(e, n, t, i, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Xe(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zu(u), e;
  }
  function Sf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Se, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function pa(e) {
    if (!e)
      return Dn;
    e = e._reactInternals;
    e: {
      if (Kn(e) !== e || e.tag !== 1)
        throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Te(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Te(t))
        return Ai(e, t, n);
    }
    return n;
  }
  function ma(e, n, t, r, l, u, o, i, s) {
    return e = ho(t, r, !0, e, l, u, o, i, s), e.context = pa(null), t = e.current, r = Ee(), l = Bn(t), u = En(r, l), u.callback = n ?? null, jn(t, u, l), e.current.lanes = l, jt(e, l, r), Oe(e, r), e;
  }
  function Sl(e, n, t, r) {
    var l = n.current, u = Ee(), o = Bn(l);
    return t = pa(t), n.context === null ? n.context = t : n.pendingContext = t, n = En(u, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = jn(l, n, o), e !== null && (un(e, l, o, u), Zr(e, l, o)), o;
  }
  function kl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function va(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function yo(e, n) {
    va(e, n), (e = e.alternate) && va(e, n);
  }
  function kf() {
    return null;
  }
  var ha = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function go(e) {
    this._internalRoot = e;
  }
  El.prototype.render = go.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(m(409));
    Sl(e, n, null, null);
  }, El.prototype.unmount = go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      nt(function() {
        Sl(null, e, null, null);
      }), n[yn] = null;
    }
  };
  function El(e) {
    this._internalRoot = e;
  }
  El.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = qo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Tn.length && n !== 0 && n < Tn[t].priority; t++)
        ;
      Tn.splice(t, 0, e), t === 0 && ni(e);
    }
  };
  function wo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function _l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ya() {
  }
  function Ef(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = kl(o);
          u.call(p);
        };
      }
      var o = ma(n, r, e, 0, null, !1, !1, "", ya);
      return e._reactRootContainer = o, e[yn] = o.current, Jt(e.nodeType === 8 ? e.parentNode : e), nt(), o;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = kl(s);
        i.call(p);
      };
    }
    var s = ho(e, 0, !1, null, null, !1, !1, "", ya);
    return e._reactRootContainer = s, e[yn] = s.current, Jt(e.nodeType === 8 ? e.parentNode : e), nt(function() {
      Sl(n, s, t, r);
    }), s;
  }
  function Cl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = kl(o);
          i.call(s);
        };
      }
      Sl(n, o, e, l);
    } else
      o = Ef(t, n, e, l, r);
    return kl(o);
  }
  Zo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ft(n.pendingLanes);
          t !== 0 && (Hl(n, t | 1), Oe(n, te()), !(I & 6) && (zt = te() + 500, In()));
        }
        break;
      case 13:
        nt(function() {
          var r = kn(e, 1);
          if (r !== null) {
            var l = Ee();
            un(r, e, 1, l);
          }
        }), yo(e, 1);
    }
  }, $l = function(e) {
    if (e.tag === 13) {
      var n = kn(e, 134217728);
      if (n !== null) {
        var t = Ee();
        un(n, e, 134217728, t);
      }
      yo(e, 134217728);
    }
  }, Jo = function(e) {
    if (e.tag === 13) {
      var n = Bn(e), t = kn(e, n);
      if (t !== null) {
        var r = Ee();
        un(t, e, n, r);
      }
      yo(e, n);
    }
  }, qo = function() {
    return V;
  }, bo = function(e, n) {
    var t = V;
    try {
      return V = e, n();
    } finally {
      V = t;
    }
  }, Il = function(e, n, t) {
    switch (n) {
      case "input":
        if (Nl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Br(r);
              if (!l)
                throw Error(m(90));
              _o(r), Nl(r, l);
            }
          }
        }
        break;
      case "textarea":
        zo(e, t);
        break;
      case "select":
        n = t.value, n != null && ut(e, !!t.multiple, n, !1);
    }
  }, jo = ao, Uo = nt;
  var _f = { usingClientEntryPoint: !1, Events: [er, vt, Br, Io, Fo, ao] }, mr = { findFiberByHostInstance: Yn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Cf = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ho(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: mr.findFiberByHostInstance || kf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xl.isDisabled && xl.supportsFiber)
      try {
        Er = xl.inject(Cf), cn = xl;
      } catch {
      }
  }
  return Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _f, Me.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!wo(n))
      throw Error(m(200));
    return Sf(e, n, null, t);
  }, Me.createRoot = function(e, n) {
    if (!wo(e))
      throw Error(m(299));
    var t = !1, r = "", l = ha;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = ho(e, 1, !1, null, null, t, !1, r, l), e[yn] = n.current, Jt(e.nodeType === 8 ? e.parentNode : e), new go(n);
  }, Me.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Ho(n), e = e === null ? null : e.stateNode, e;
  }, Me.flushSync = function(e) {
    return nt(e);
  }, Me.hydrate = function(e, n, t) {
    if (!_l(n))
      throw Error(m(200));
    return Cl(null, e, n, !0, t);
  }, Me.hydrateRoot = function(e, n, t) {
    if (!wo(e))
      throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", o = ha;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = ma(n, null, e, 1, t ?? null, l, !1, u, o), e[yn] = n.current, Jt(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new El(n);
  }, Me.render = function(e, n, t) {
    if (!_l(n))
      throw Error(m(200));
    return Cl(null, e, n, !1, t);
  }, Me.unmountComponentAtNode = function(e) {
    if (!_l(e))
      throw Error(m(40));
    return e._reactRootContainer ? (nt(function() {
      Cl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[yn] = null;
      });
    }), !0) : !1;
  }, Me.unstable_batchedUpdates = ao, Me.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!_l(t))
      throw Error(m(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(m(38));
    return Cl(e, n, t, !1, r);
  }, Me.version = "18.2.0-next-9e3b772b8-20220608", Me;
}
function Na() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Na);
    } catch (R) {
      console.error(R);
    }
}
Na(), Pa.exports = Lf();
var Rf = Pa.exports;
const Df = /* @__PURE__ */ _a(Rf);
export {
  Df as R,
  Of as a,
  Eo as b,
  Mf as j,
  Rf as r
};
