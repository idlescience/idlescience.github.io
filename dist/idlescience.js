function t1(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var s0 = { exports: {} }, Wp = {}, c0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QT;
function Yw() {
  if (QT)
    return Et;
  QT = 1;
  var Z = Symbol.for("react.element"), J = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), on = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), S = Symbol.for("react.context"), Bt = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), re = Symbol.iterator;
  function me(R) {
    return R === null || typeof R != "object" ? null : (R = re && R[re] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, He = Object.assign, Ct = {};
  function st(R, P, le) {
    this.props = R, this.context = P, this.refs = Ct, this.updater = le || ie;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(R, P) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, P, "setState");
  }, st.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = st.prototype;
  function at(R, P, le) {
    this.props = R, this.context = P, this.refs = Ct, this.updater = le || ie;
  }
  var Qe = at.prototype = new fn();
  Qe.constructor = at, He(Qe, st.prototype), Qe.isPureReactComponent = !0;
  var ct = Array.isArray, De = Object.prototype.hasOwnProperty, it = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tn(R, P, le) {
    var Be, Ue = {}, ht = null, Je = null;
    if (P != null)
      for (Be in P.ref !== void 0 && (Je = P.ref), P.key !== void 0 && (ht = "" + P.key), P)
        De.call(P, Be) && !Fe.hasOwnProperty(Be) && (Ue[Be] = P[Be]);
    var ft = arguments.length - 2;
    if (ft === 1)
      Ue.children = le;
    else if (1 < ft) {
      for (var et = Array(ft), zt = 0; zt < ft; zt++)
        et[zt] = arguments[zt + 2];
      Ue.children = et;
    }
    if (R && R.defaultProps)
      for (Be in ft = R.defaultProps, ft)
        Ue[Be] === void 0 && (Ue[Be] = ft[Be]);
    return { $$typeof: Z, type: R, key: ht, ref: Je, props: Ue, _owner: it.current };
  }
  function xn(R, P) {
    return { $$typeof: Z, type: R.type, key: P, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Yt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === Z;
  }
  function wt(R) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(le) {
      return P[le];
    });
  }
  var En = /\/+/g;
  function Ae(R, P) {
    return typeof R == "object" && R !== null && R.key != null ? wt("" + R.key) : P.toString(36);
  }
  function qe(R, P, le, Be, Ue) {
    var ht = typeof R;
    (ht === "undefined" || ht === "boolean") && (R = null);
    var Je = !1;
    if (R === null)
      Je = !0;
    else
      switch (ht) {
        case "string":
        case "number":
          Je = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case Z:
            case J:
              Je = !0;
          }
      }
    if (Je)
      return Je = R, Ue = Ue(Je), R = Be === "" ? "." + Ae(Je, 0) : Be, ct(Ue) ? (le = "", R != null && (le = R.replace(En, "$&/") + "/"), qe(Ue, P, le, "", function(zt) {
        return zt;
      })) : Ue != null && (Yt(Ue) && (Ue = xn(Ue, le + (!Ue.key || Je && Je.key === Ue.key ? "" : ("" + Ue.key).replace(En, "$&/") + "/") + R)), P.push(Ue)), 1;
    if (Je = 0, Be = Be === "" ? "." : Be + ":", ct(R))
      for (var ft = 0; ft < R.length; ft++) {
        ht = R[ft];
        var et = Be + Ae(ht, ft);
        Je += qe(ht, P, le, et, Ue);
      }
    else if (et = me(R), typeof et == "function")
      for (R = et.call(R), ft = 0; !(ht = R.next()).done; )
        ht = ht.value, et = Be + Ae(ht, ft++), Je += qe(ht, P, le, et, Ue);
    else if (ht === "object")
      throw P = String(R), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Je;
  }
  function Ot(R, P, le) {
    if (R == null)
      return R;
    var Be = [], Ue = 0;
    return qe(R, Be, "", "", function(ht) {
      return P.call(le, ht, Ue++);
    }), Be;
  }
  function Tt(R) {
    if (R._status === -1) {
      var P = R._result;
      P = P(), P.then(function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = le);
      }, function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = le);
      }), R._status === -1 && (R._status = 0, R._result = P);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var ye = { current: null }, X = { transition: null }, Me = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: X, ReactCurrentOwner: it };
  return Et.Children = { map: Ot, forEach: function(R, P, le) {
    Ot(R, function() {
      P.apply(this, arguments);
    }, le);
  }, count: function(R) {
    var P = 0;
    return Ot(R, function() {
      P++;
    }), P;
  }, toArray: function(R) {
    return Ot(R, function(P) {
      return P;
    }) || [];
  }, only: function(R) {
    if (!Yt(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Et.Component = st, Et.Fragment = U, Et.Profiler = on, Et.PureComponent = at, Et.StrictMode = Kt, Et.Suspense = he, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me, Et.cloneElement = function(R, P, le) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Be = He({}, R.props), Ue = R.key, ht = R.ref, Je = R._owner;
    if (P != null) {
      if (P.ref !== void 0 && (ht = P.ref, Je = it.current), P.key !== void 0 && (Ue = "" + P.key), R.type && R.type.defaultProps)
        var ft = R.type.defaultProps;
      for (et in P)
        De.call(P, et) && !Fe.hasOwnProperty(et) && (Be[et] = P[et] === void 0 && ft !== void 0 ? ft[et] : P[et]);
    }
    var et = arguments.length - 2;
    if (et === 1)
      Be.children = le;
    else if (1 < et) {
      ft = Array(et);
      for (var zt = 0; zt < et; zt++)
        ft[zt] = arguments[zt + 2];
      Be.children = ft;
    }
    return { $$typeof: Z, type: R.type, key: Ue, ref: ht, props: Be, _owner: Je };
  }, Et.createContext = function(R) {
    return R = { $$typeof: S, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: nt, _context: R }, R.Consumer = R;
  }, Et.createElement = tn, Et.createFactory = function(R) {
    var P = tn.bind(null, R);
    return P.type = R, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(R) {
    return { $$typeof: Bt, render: R };
  }, Et.isValidElement = Yt, Et.lazy = function(R) {
    return { $$typeof: rt, _payload: { _status: -1, _result: R }, _init: Tt };
  }, Et.memo = function(R, P) {
    return { $$typeof: pe, type: R, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(R) {
    var P = X.transition;
    X.transition = {};
    try {
      R();
    } finally {
      X.transition = P;
    }
  }, Et.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Et.useCallback = function(R, P) {
    return ye.current.useCallback(R, P);
  }, Et.useContext = function(R) {
    return ye.current.useContext(R);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(R) {
    return ye.current.useDeferredValue(R);
  }, Et.useEffect = function(R, P) {
    return ye.current.useEffect(R, P);
  }, Et.useId = function() {
    return ye.current.useId();
  }, Et.useImperativeHandle = function(R, P, le) {
    return ye.current.useImperativeHandle(R, P, le);
  }, Et.useInsertionEffect = function(R, P) {
    return ye.current.useInsertionEffect(R, P);
  }, Et.useLayoutEffect = function(R, P) {
    return ye.current.useLayoutEffect(R, P);
  }, Et.useMemo = function(R, P) {
    return ye.current.useMemo(R, P);
  }, Et.useReducer = function(R, P, le) {
    return ye.current.useReducer(R, P, le);
  }, Et.useRef = function(R) {
    return ye.current.useRef(R);
  }, Et.useState = function(R) {
    return ye.current.useState(R);
  }, Et.useSyncExternalStore = function(R, P, le) {
    return ye.current.useSyncExternalStore(R, P, le);
  }, Et.useTransition = function() {
    return ye.current.useTransition();
  }, Et.version = "18.2.0", Et;
}
var qp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
qp.exports;
var WT;
function $w() {
  return WT || (WT = 1, function(Z, J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var U = "18.2.0", Kt = Symbol.for("react.element"), on = Symbol.for("react.portal"), nt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Bt = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), pe = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), Ct = Symbol.for("react.offscreen"), st = Symbol.iterator, fn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ct = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, tn = null;
      function xn(h) {
        tn = h;
      }
      Fe.setExtraStackFrame = function(h) {
        tn = h;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var h = "";
        tn && (h += tn);
        var C = Fe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Yt = !1, wt = !1, En = !1, Ae = !1, qe = !1, Ot = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: it
      };
      Ot.ReactDebugCurrentFrame = Fe, Ot.ReactCurrentActQueue = De;
      function Tt(h) {
        {
          for (var C = arguments.length, O = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            O[j - 1] = arguments[j];
          X("warn", h, O);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, O = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            O[j - 1] = arguments[j];
          X("error", h, O);
        }
      }
      function X(h, C, O) {
        {
          var j = Ot.ReactDebugCurrentFrame, G = j.getStackAddendum();
          G !== "" && (C += "%s", O = O.concat([G]));
          var Oe = O.map(function(ae) {
            return String(ae);
          });
          Oe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Oe);
        }
      }
      var Me = {};
      function R(h, C) {
        {
          var O = h.constructor, j = O && (O.displayName || O.name) || "ReactClass", G = j + "." + C;
          if (Me[G])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), Me[G] = !0;
        }
      }
      var P = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, O) {
          R(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, O, j) {
          R(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, O, j) {
          R(h, "setState");
        }
      }, le = Object.assign, Be = {};
      Object.freeze(Be);
      function Ue(h, C, O) {
        this.props = h, this.context = C, this.refs = Be, this.updater = O || P;
      }
      Ue.prototype.isReactComponent = {}, Ue.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ue.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Ue.prototype, h, {
            get: function() {
              Tt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in ht)
          ht.hasOwnProperty(ft) && Je(ft, ht[ft]);
      }
      function et() {
      }
      et.prototype = Ue.prototype;
      function zt(h, C, O) {
        this.props = h, this.context = C, this.refs = Be, this.updater = O || P;
      }
      var Hr = zt.prototype = new et();
      Hr.constructor = zt, le(Hr, Ue.prototype), Hr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function dn(h) {
        return Vr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, O = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return O;
        }
      }
      function jn(h) {
        try {
          return Un(h), !1;
        } catch {
          return !0;
        }
      }
      function Un(h) {
        return "" + h;
      }
      function Dn(h) {
        if (jn(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Un(h);
      }
      function Pr(h, C, O) {
        var j = h.displayName;
        if (j)
          return j;
        var G = C.displayName || C.name || "";
        return G !== "" ? O + "(" + G + ")" : O;
      }
      function Br(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case nt:
            return "Fragment";
          case on:
            return "Portal";
          case Bt:
            return "Profiler";
          case S:
            return "StrictMode";
          case re:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return Br(C) + ".Consumer";
            case he:
              var O = h;
              return Br(O._context) + ".Provider";
            case rt:
              return Pr(h, h.render, "ForwardRef");
            case ie:
              var j = h.displayName || null;
              return j !== null ? j : $n(h.type) || "Memo";
            case He: {
              var G = h, Oe = G._payload, ae = G._init;
              try {
                return $n(ae(Oe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function $r(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Mr(h, C) {
        var O = function() {
          hr || (hr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: O,
          configurable: !0
        });
      }
      function ui(h, C) {
        var O = function() {
          sa || (sa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: O,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && it.current && h.__self && it.current.stateNode !== h.__self) {
          var C = $n(it.current.type);
          er[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var K = function(h, C, O, j, G, Oe, ae) {
        var ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Kt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: O,
          props: ae,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return ke._store = {}, Object.defineProperty(ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)), ke;
      };
      function xe(h, C, O) {
        var j, G = {}, Oe = null, ae = null, ke = null, ut = null;
        if (C != null) {
          $r(C) && (ae = C.ref, ca(C)), pn(C) && (Dn(C.key), Oe = "" + C.key), ke = C.__self === void 0 ? null : C.__self, ut = C.__source === void 0 ? null : C.__source;
          for (j in C)
            vr.call(C, j) && !Yr.hasOwnProperty(j) && (G[j] = C[j]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          G.children = O;
        else if (xt > 1) {
          for (var Wt = Array(xt), Pt = 0; Pt < xt; Pt++)
            Wt[Pt] = arguments[Pt + 2];
          Object.freeze && Object.freeze(Wt), G.children = Wt;
        }
        if (h && h.defaultProps) {
          var Gt = h.defaultProps;
          for (j in Gt)
            G[j] === void 0 && (G[j] = Gt[j]);
        }
        if (Oe || ae) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Oe && Mr(G, en), ae && ui(G, en);
        }
        return K(h, Oe, ae, ke, ut, it.current, G);
      }
      function tt(h, C) {
        var O = K(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return O;
      }
      function kt(h, C, O) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, G = le({}, h.props), Oe = h.key, ae = h.ref, ke = h._self, ut = h._source, xt = h._owner;
        if (C != null) {
          $r(C) && (ae = C.ref, xt = it.current), pn(C) && (Dn(C.key), Oe = "" + C.key);
          var Wt;
          h.type && h.type.defaultProps && (Wt = h.type.defaultProps);
          for (j in C)
            vr.call(C, j) && !Yr.hasOwnProperty(j) && (C[j] === void 0 && Wt !== void 0 ? G[j] = Wt[j] : G[j] = C[j]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          G.children = O;
        else if (Pt > 1) {
          for (var Gt = Array(Pt), en = 0; en < Pt; en++)
            Gt[en] = arguments[en + 2];
          G.children = Gt;
        }
        return K(h.type, Oe, ae, ke, ut, xt, G);
      }
      function At(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Kt;
      }
      var wn = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, O = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(G) {
          return O[G];
        });
        return "$" + j;
      }
      var Vt = !1, xr = /\/+/g;
      function jt(h) {
        return h.replace(xr, "$&/");
      }
      function Ut(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, O, j, G) {
        var Oe = typeof h;
        (Oe === "undefined" || Oe === "boolean") && (h = null);
        var ae = !1;
        if (h === null)
          ae = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              ae = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Kt:
                case on:
                  ae = !0;
              }
          }
        if (ae) {
          var ke = h, ut = G(ke), xt = j === "" ? wn + Ut(ke, 0) : j;
          if (dn(ut)) {
            var Wt = "";
            xt != null && (Wt = jt(xt) + "/"), Ga(ut, C, Wt, "", function(Vf) {
              return Vf;
            });
          } else
            ut != null && (At(ut) && (ut.key && (!ke || ke.key !== ut.key) && Dn(ut.key), ut = tt(
              ut,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              O + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ut.key && (!ke || ke.key !== ut.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                jt("" + ut.key) + "/"
              ) : "") + xt
            )), C.push(ut));
          return 1;
        }
        var Pt, Gt, en = 0, vt = j === "" ? wn : j + vn;
        if (dn(h))
          for (var Li = 0; Li < h.length; Li++)
            Pt = h[Li], Gt = vt + Ut(Pt, Li), en += Ga(Pt, C, O, Gt, G);
        else {
          var Ku = at(h);
          if (typeof Ku == "function") {
            var Xo = h;
            Ku === Xo.entries && (Vt || Tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vt = !0);
            for (var Hf = Ku.call(Xo), Za, Ko = 0; !(Za = Hf.next()).done; )
              Pt = Za.value, Gt = vt + Ut(Pt, Ko++), en += Ga(Pt, C, O, Gt, G);
          } else if (Oe === "object") {
            var Zo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Zo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Zo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Da(h, C, O) {
        if (h == null)
          return h;
        var j = [], G = 0;
        return Ga(h, j, "", "", function(Oe) {
          return C.call(O, Oe, G++);
        }), j;
      }
      function il(h) {
        var C = 0;
        return Da(h, function() {
          C++;
        }), C;
      }
      function ql(h, C, O) {
        Da(h, function() {
          C.apply(this, arguments);
        }, O);
      }
      function Iu(h) {
        return Da(h, function(C) {
          return C;
        }) || [];
      }
      function _i(h) {
        if (!At(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ll(h) {
        var C = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: he,
          _context: C
        };
        var O = !1, j = !1, G = !1;
        {
          var Oe = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return j || (j = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ae) {
                C.Provider = ae;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ae) {
                C._currentValue = ae;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ae) {
                C._currentValue2 = ae;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ae) {
                C._threadCount = ae;
              }
            },
            Consumer: {
              get: function() {
                return O || (O = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ae) {
                G || (Tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ae), G = !0);
              }
            }
          }), C.Consumer = Oe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, oi = 0, da = 1, si = 2;
      function Dr(h) {
        if (h._status === fa) {
          var C = h._result, O = C();
          if (O.then(function(Oe) {
            if (h._status === oi || h._status === fa) {
              var ae = h;
              ae._status = da, ae._result = Oe;
            }
          }, function(Oe) {
            if (h._status === oi || h._status === fa) {
              var ae = h;
              ae._status = si, ae._result = Oe;
            }
          }), h._status === fa) {
            var j = h;
            j._status = oi, j._result = O;
          }
        }
        if (h._status === da) {
          var G = h._result;
          return G === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, G), "default" in G || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, G), G.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, O = {
          $$typeof: He,
          _payload: C,
          _init: Dr
        };
        {
          var j, G;
          Object.defineProperties(O, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Oe) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Oe, Object.defineProperty(O, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Oe) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Oe, Object.defineProperty(O, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return O;
      }
      function ci(h) {
        h != null && h.$$typeof === ie ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: rt,
          render: h
        };
        {
          var O;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(j) {
              O = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === nt || h === Bt || qe || h === S || h === re || h === me || Ae || h === Ct || Yt || wt || En || typeof h == "object" && h !== null && (h.$$typeof === He || h.$$typeof === ie || h.$$typeof === he || h.$$typeof === pe || h.$$typeof === rt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function ee(h, C) {
        B(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var O = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(G) {
              j = G, !h.name && !h.displayName && (h.displayName = G);
            }
          });
        }
        return O;
      }
      function ce() {
        var h = Qe.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = ce();
        if (h._context !== void 0) {
          var O = h._context;
          O.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : O.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function mt(h) {
        var C = ce();
        return C.useState(h);
      }
      function Xe(h, C, O) {
        var j = ce();
        return j.useReducer(h, C, O);
      }
      function _e(h) {
        var C = ce();
        return C.useRef(h);
      }
      function kn(h, C) {
        var O = ce();
        return O.useEffect(h, C);
      }
      function Zt(h, C) {
        var O = ce();
        return O.useInsertionEffect(h, C);
      }
      function Jt(h, C) {
        var O = ce();
        return O.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var O = ce();
        return O.useCallback(h, C);
      }
      function fi(h, C) {
        var O = ce();
        return O.useMemo(h, C);
      }
      function Hu(h, C, O) {
        var j = ce();
        return j.useImperativeHandle(h, C, O);
      }
      function Rt(h, C) {
        {
          var O = ce();
          return O.useDebugValue(h, C);
        }
      }
      function Ff() {
        var h = ce();
        return h.useTransition();
      }
      function qa(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function lt() {
        var h = ce();
        return h.useId();
      }
      function di(h, C, O) {
        var j = ce();
        return j.useSyncExternalStore(h, C, O);
      }
      var ul = 0, Vu, ol, Qr, Qo, wr, Wo, Go;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function Pu() {
        {
          if (ul === 0) {
            Vu = console.log, ol = console.info, Qr = console.warn, Qo = console.error, wr = console.group, Wo = console.groupCollapsed, Go = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ul++;
        }
      }
      function sl() {
        {
          if (ul--, ul === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, h, {
                value: Vu
              }),
              info: le({}, h, {
                value: ol
              }),
              warn: le({}, h, {
                value: Qr
              }),
              error: le({}, h, {
                value: Qo
              }),
              group: le({}, h, {
                value: wr
              }),
              groupCollapsed: le({}, h, {
                value: Wo
              }),
              groupEnd: le({}, h, {
                value: Go
              })
            });
          }
          ul < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = Ot.ReactCurrentDispatcher, br;
      function cl(h, C, O) {
        {
          if (br === void 0)
            try {
              throw Error();
            } catch (G) {
              var j = G.stack.trim().match(/\n( *(at )?)/);
              br = j && j[1] || "";
            }
          return `
` + br + h;
        }
      }
      var fl = !1, dl;
      {
        var Bu = typeof WeakMap == "function" ? WeakMap : Map;
        dl = new Bu();
      }
      function Yu(h, C) {
        if (!h || fl)
          return "";
        {
          var O = dl.get(h);
          if (O !== void 0)
            return O;
        }
        var j;
        fl = !0;
        var G = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = Xa.current, Xa.current = null, Pu();
        try {
          if (C) {
            var ae = function() {
              throw Error();
            };
            if (Object.defineProperty(ae.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ae, []);
              } catch (vt) {
                j = vt;
              }
              Reflect.construct(h, [], ae);
            } else {
              try {
                ae.call();
              } catch (vt) {
                j = vt;
              }
              h.call(ae.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (vt) {
              j = vt;
            }
            h();
          }
        } catch (vt) {
          if (vt && j && typeof vt.stack == "string") {
            for (var ke = vt.stack.split(`
`), ut = j.stack.split(`
`), xt = ke.length - 1, Wt = ut.length - 1; xt >= 1 && Wt >= 0 && ke[xt] !== ut[Wt]; )
              Wt--;
            for (; xt >= 1 && Wt >= 0; xt--, Wt--)
              if (ke[xt] !== ut[Wt]) {
                if (xt !== 1 || Wt !== 1)
                  do
                    if (xt--, Wt--, Wt < 0 || ke[xt] !== ut[Wt]) {
                      var Pt = `
` + ke[xt].replace(" at new ", " at ");
                      return h.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", h.displayName)), typeof h == "function" && dl.set(h, Pt), Pt;
                    }
                  while (xt >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          fl = !1, Xa.current = Oe, sl(), Error.prepareStackTrace = G;
        }
        var Gt = h ? h.displayName || h.name : "", en = Gt ? cl(Gt) : "";
        return typeof h == "function" && dl.set(h, en), en;
      }
      function Ni(h, C, O) {
        return Yu(h, !1);
      }
      function If(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function pi(h, C, O) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Yu(h, If(h));
        if (typeof h == "string")
          return cl(h);
        switch (h) {
          case re:
            return cl("Suspense");
          case me:
            return cl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case rt:
              return Ni(h.render);
            case ie:
              return pi(h.type, C, O);
            case He: {
              var j = h, G = j._payload, Oe = j._init;
              try {
                return pi(Oe(G), C, O);
              } catch {
              }
            }
          }
        return "";
      }
      var bt = {}, $u = Ot.ReactDebugCurrentFrame;
      function Xl(h) {
        if (h) {
          var C = h._owner, O = pi(h.type, h._source, C ? C.type : null);
          $u.setExtraStackFrame(O);
        } else
          $u.setExtraStackFrame(null);
      }
      function Qu(h, C, O, j, G) {
        {
          var Oe = Function.call.bind(vr);
          for (var ae in h)
            if (Oe(h, ae)) {
              var ke = void 0;
              try {
                if (typeof h[ae] != "function") {
                  var ut = Error((j || "React class") + ": " + O + " type `" + ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                ke = h[ae](C, ae, j, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                ke = xt;
              }
              ke && !(ke instanceof Error) && (Xl(G), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", O, ae, typeof ke), Xl(null)), ke instanceof Error && !(ke.message in bt) && (bt[ke.message] = !0, Xl(G), ye("Failed %s type: %s", O, ke.message), Xl(null));
            }
        }
      }
      function Mt(h) {
        if (h) {
          var C = h._owner, O = pi(h.type, h._source, C ? C.type : null);
          xn(O);
        } else
          xn(null);
      }
      var Wu;
      Wu = !1;
      function Gu() {
        if (it.current) {
          var h = $n(it.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), O = h.lineNumber;
          return `

Check your code at ` + C + ":" + O + ".";
        }
        return "";
      }
      function Kl(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Gu();
        if (!C) {
          var O = typeof h == "string" ? h : h.displayName || h.name;
          O && (C = `

Check the top-level render call using <` + O + ">.");
        }
        return C;
      }
      function _r(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var O = Wr(C);
          if (!hn[O]) {
            hn[O] = !0;
            var j = "";
            h && h._owner && h._owner !== it.current && (j = " It was passed a child from " + $n(h._owner.type) + "."), Mt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, j), Mt(null);
          }
        }
      }
      function pl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var O = 0; O < h.length; O++) {
              var j = h[O];
              At(j) && _r(j, C);
            }
          else if (At(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var G = at(h);
            if (typeof G == "function" && G !== h.entries)
              for (var Oe = G.call(h), ae; !(ae = Oe.next()).done; )
                At(ae.value) && _r(ae.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var O;
          if (typeof C == "function")
            O = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === rt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            O = C.propTypes;
          else
            return;
          if (O) {
            var j = $n(C);
            Qu(O, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Wu) {
            Wu = !0;
            var G = $n(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ft(h) {
        {
          for (var C = Object.keys(h.props), O = 0; O < C.length; O++) {
            var j = C[O];
            if (j !== "children" && j !== "key") {
              Mt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Mt(null);
              break;
            }
          }
          h.ref !== null && (Mt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
        }
      }
      function Ks(h, C, O) {
        var j = B(h);
        if (!j) {
          var G = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Kl(C);
          Oe ? G += Oe : G += Gu();
          var ae;
          h === null ? ae = "null" : dn(h) ? ae = "array" : h !== void 0 && h.$$typeof === Kt ? (ae = "<" + ($n(h.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, G);
        }
        var ke = xe.apply(this, arguments);
        if (ke == null)
          return ke;
        if (j)
          for (var ut = 2; ut < arguments.length; ut++)
            pl(arguments[ut], h);
        return h === nt ? Ft(ke) : Cn(ke), ke;
      }
      var Gr = !1;
      function Qn(h) {
        var C = Ks.bind(null, h);
        return C.type = h, Gr || (Gr = !0, Tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function vi(h, C, O) {
        for (var j = kt.apply(this, arguments), G = 2; G < arguments.length; G++)
          pl(arguments[G], j.type);
        return Cn(j), j;
      }
      function Zs(h, C) {
        var O = ct.transition;
        ct.transition = {};
        var j = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = O, O === null && j._updatedFibers) {
            var G = j._updatedFibers.size;
            G > 10 && Tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var ki = !1, vl = null;
      function Js(h) {
        if (vl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), O = Z && Z[C];
            vl = O.call(Z, "timers").setImmediate;
          } catch {
            vl = function(G) {
              ki === !1 && (ki = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = G, Oe.port2.postMessage(void 0);
            };
          }
        return vl(h);
      }
      var wa = 0, hl = !1;
      function ml(h) {
        {
          var C = wa;
          wa++, De.current === null && (De.current = []);
          var O = De.isBatchingLegacy, j;
          try {
            if (De.isBatchingLegacy = !0, j = h(), !O && De.didScheduleLegacyUpdate) {
              var G = De.current;
              G !== null && (De.didScheduleLegacyUpdate = !1, gl(G));
            }
          } catch (Gt) {
            throw ba(C), Gt;
          } finally {
            De.isBatchingLegacy = O;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Oe = j, ae = !1, ke = {
              then: function(Gt, en) {
                ae = !0, Oe.then(function(vt) {
                  ba(C), wa === 0 ? qu(vt, Gt, en) : Gt(vt);
                }, function(vt) {
                  ba(C), en(vt);
                });
              }
            };
            return !hl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ae || (hl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ke;
          } else {
            var ut = j;
            if (ba(C), wa === 0) {
              var xt = De.current;
              xt !== null && (gl(xt), De.current = null);
              var Wt = {
                then: function(Gt, en) {
                  De.current === null ? (De.current = [], qu(ut, Gt, en)) : Gt(ut);
                }
              };
              return Wt;
            } else {
              var Pt = {
                then: function(Gt, en) {
                  Gt(ut);
                }
              };
              return Pt;
            }
          }
        }
      }
      function ba(h) {
        h !== wa - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), wa = h;
      }
      function qu(h, C, O) {
        {
          var j = De.current;
          if (j !== null)
            try {
              gl(j), Js(function() {
                j.length === 0 ? (De.current = null, C(h)) : qu(h, C, O);
              });
            } catch (G) {
              O(G);
            }
          else
            C(h);
        }
      }
      var yl = !1;
      function gl(h) {
        if (!yl) {
          yl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var O = h[C];
              do
                O = O(!0);
              while (O !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            yl = !1;
          }
        }
      }
      var Zl = Ks, Xu = vi, qo = Qn, Ka = {
        map: Da,
        forEach: ql,
        count: il,
        toArray: Iu,
        only: _i
      };
      J.Children = Ka, J.Component = Ue, J.Fragment = nt, J.Profiler = Bt, J.PureComponent = zt, J.StrictMode = S, J.Suspense = re, J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, J.cloneElement = Xu, J.createContext = ll, J.createElement = Zl, J.createFactory = qo, J.createRef = pr, J.forwardRef = ci, J.isValidElement = At, J.lazy = pa, J.memo = ee, J.startTransition = Zs, J.unstable_act = ml, J.useCallback = tr, J.useContext = Ge, J.useDebugValue = Rt, J.useDeferredValue = qa, J.useEffect = kn, J.useId = lt, J.useImperativeHandle = Hu, J.useInsertionEffect = Zt, J.useLayoutEffect = Jt, J.useMemo = fi, J.useReducer = Xe, J.useRef = _e, J.useState = mt, J.useSyncExternalStore = di, J.useTransition = Ff, J.version = U, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qp, qp.exports)), qp.exports;
}
process.env.NODE_ENV === "production" ? c0.exports = Yw() : c0.exports = $w();
var Uf = c0.exports;
const Qw = /* @__PURE__ */ t1(Uf);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GT;
function Ww() {
  if (GT)
    return Wp;
  GT = 1;
  var Z = Uf, J = Symbol.for("react.element"), U = Symbol.for("react.fragment"), Kt = Object.prototype.hasOwnProperty, on = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Bt, he, pe) {
    var rt, re = {}, me = null, ie = null;
    pe !== void 0 && (me = "" + pe), he.key !== void 0 && (me = "" + he.key), he.ref !== void 0 && (ie = he.ref);
    for (rt in he)
      Kt.call(he, rt) && !nt.hasOwnProperty(rt) && (re[rt] = he[rt]);
    if (Bt && Bt.defaultProps)
      for (rt in he = Bt.defaultProps, he)
        re[rt] === void 0 && (re[rt] = he[rt]);
    return { $$typeof: J, type: Bt, key: me, ref: ie, props: re, _owner: on.current };
  }
  return Wp.Fragment = U, Wp.jsx = S, Wp.jsxs = S, Wp;
}
var Gp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qT;
function Gw() {
  return qT || (qT = 1, process.env.NODE_ENV !== "production" && function() {
    var Z = Uf, J = Symbol.for("react.element"), U = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Bt = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), He = Symbol.iterator, Ct = "@@iterator";
    function st(T) {
      if (T === null || typeof T != "object")
        return null;
      var B = He && T[He] || T[Ct];
      return typeof B == "function" ? B : null;
    }
    var fn = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(T) {
      {
        for (var B = arguments.length, ee = new Array(B > 1 ? B - 1 : 0), ce = 1; ce < B; ce++)
          ee[ce - 1] = arguments[ce];
        Qe("error", T, ee);
      }
    }
    function Qe(T, B, ee) {
      {
        var ce = fn.ReactDebugCurrentFrame, Ge = ce.getStackAddendum();
        Ge !== "" && (B += "%s", ee = ee.concat([Ge]));
        var mt = ee.map(function(Xe) {
          return String(Xe);
        });
        mt.unshift("Warning: " + B), Function.prototype.apply.call(console[T], console, mt);
      }
    }
    var ct = !1, De = !1, it = !1, Fe = !1, tn = !1, xn;
    xn = Symbol.for("react.module.reference");
    function Yt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === Kt || T === nt || tn || T === on || T === pe || T === rt || Fe || T === ie || ct || De || it || typeof T == "object" && T !== null && (T.$$typeof === me || T.$$typeof === re || T.$$typeof === S || T.$$typeof === Bt || T.$$typeof === he || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === xn || T.getModuleId !== void 0));
    }
    function wt(T, B, ee) {
      var ce = T.displayName;
      if (ce)
        return ce;
      var Ge = B.displayName || B.name || "";
      return Ge !== "" ? ee + "(" + Ge + ")" : ee;
    }
    function En(T) {
      return T.displayName || "Context";
    }
    function Ae(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case Kt:
          return "Fragment";
        case U:
          return "Portal";
        case nt:
          return "Profiler";
        case on:
          return "StrictMode";
        case pe:
          return "Suspense";
        case rt:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Bt:
            var B = T;
            return En(B) + ".Consumer";
          case S:
            var ee = T;
            return En(ee._context) + ".Provider";
          case he:
            return wt(T, T.render, "ForwardRef");
          case re:
            var ce = T.displayName || null;
            return ce !== null ? ce : Ae(T.type) || "Memo";
          case me: {
            var Ge = T, mt = Ge._payload, Xe = Ge._init;
            try {
              return Ae(Xe(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = Object.assign, Ot = 0, Tt, ye, X, Me, R, P, le;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (Ot === 0) {
          Tt = console.log, ye = console.info, X = console.warn, Me = console.error, R = console.group, P = console.groupCollapsed, le = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        Ot++;
      }
    }
    function ht() {
      {
        if (Ot--, Ot === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, T, {
              value: Tt
            }),
            info: qe({}, T, {
              value: ye
            }),
            warn: qe({}, T, {
              value: X
            }),
            error: qe({}, T, {
              value: Me
            }),
            group: qe({}, T, {
              value: R
            }),
            groupCollapsed: qe({}, T, {
              value: P
            }),
            groupEnd: qe({}, T, {
              value: le
            })
          });
        }
        Ot < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = fn.ReactCurrentDispatcher, ft;
    function et(T, B, ee) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var ce = Ge.stack.trim().match(/\n( *(at )?)/);
            ft = ce && ce[1] || "";
          }
        return `
` + ft + T;
      }
    }
    var zt = !1, Hr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Hr = new pr();
    }
    function Vr(T, B) {
      if (!T || zt)
        return "";
      {
        var ee = Hr.get(T);
        if (ee !== void 0)
          return ee;
      }
      var ce;
      zt = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = Je.current, Je.current = null, Ue();
      try {
        if (B) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (Rt) {
              ce = Rt;
            }
            Reflect.construct(T, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (Rt) {
              ce = Rt;
            }
            T.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            ce = Rt;
          }
          T();
        }
      } catch (Rt) {
        if (Rt && ce && typeof Rt.stack == "string") {
          for (var _e = Rt.stack.split(`
`), kn = ce.stack.split(`
`), Zt = _e.length - 1, Jt = kn.length - 1; Zt >= 1 && Jt >= 0 && _e[Zt] !== kn[Jt]; )
            Jt--;
          for (; Zt >= 1 && Jt >= 0; Zt--, Jt--)
            if (_e[Zt] !== kn[Jt]) {
              if (Zt !== 1 || Jt !== 1)
                do
                  if (Zt--, Jt--, Jt < 0 || _e[Zt] !== kn[Jt]) {
                    var tr = `
` + _e[Zt].replace(" at new ", " at ");
                    return T.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", T.displayName)), typeof T == "function" && Hr.set(T, tr), tr;
                  }
                while (Zt >= 1 && Jt >= 0);
              break;
            }
        }
      } finally {
        zt = !1, Je.current = mt, ht(), Error.prepareStackTrace = Ge;
      }
      var fi = T ? T.displayName || T.name : "", Hu = fi ? et(fi) : "";
      return typeof T == "function" && Hr.set(T, Hu), Hu;
    }
    function dn(T, B, ee) {
      return Vr(T, !1);
    }
    function Yn(T) {
      var B = T.prototype;
      return !!(B && B.isReactComponent);
    }
    function jn(T, B, ee) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Vr(T, Yn(T));
      if (typeof T == "string")
        return et(T);
      switch (T) {
        case pe:
          return et("Suspense");
        case rt:
          return et("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case he:
            return dn(T.render);
          case re:
            return jn(T.type, B, ee);
          case me: {
            var ce = T, Ge = ce._payload, mt = ce._init;
            try {
              return jn(mt(Ge), B, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, Dn = {}, Pr = fn.ReactDebugCurrentFrame;
    function Br(T) {
      if (T) {
        var B = T._owner, ee = jn(T.type, T._source, B ? B.type : null);
        Pr.setExtraStackFrame(ee);
      } else
        Pr.setExtraStackFrame(null);
    }
    function $n(T, B, ee, ce, Ge) {
      {
        var mt = Function.call.bind(Un);
        for (var Xe in T)
          if (mt(T, Xe)) {
            var _e = void 0;
            try {
              if (typeof T[Xe] != "function") {
                var kn = Error((ce || "React class") + ": " + ee + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kn.name = "Invariant Violation", kn;
              }
              _e = T[Xe](B, Xe, ce, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Zt) {
              _e = Zt;
            }
            _e && !(_e instanceof Error) && (Br(Ge), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ee, Xe, typeof _e), Br(null)), _e instanceof Error && !(_e.message in Dn) && (Dn[_e.message] = !0, Br(Ge), at("Failed %s type: %s", ee, _e.message), Br(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(T) {
      return vr(T);
    }
    function hr(T) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ee = B && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ee;
      }
    }
    function sa(T) {
      try {
        return er(T), !1;
      } catch {
        return !0;
      }
    }
    function er(T) {
      return "" + T;
    }
    function $r(T) {
      if (sa(T))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(T)), er(T);
    }
    var pn = fn.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ui, ca, K;
    K = {};
    function xe(T) {
      if (Un.call(T, "ref")) {
        var B = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function tt(T) {
      if (Un.call(T, "key")) {
        var B = Object.getOwnPropertyDescriptor(T, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function kt(T, B) {
      if (typeof T.ref == "string" && pn.current && B && pn.current.stateNode !== B) {
        var ee = Ae(pn.current.type);
        K[ee] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(pn.current.type), T.ref), K[ee] = !0);
      }
    }
    function At(T, B) {
      {
        var ee = function() {
          ui || (ui = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ee.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function wn(T, B) {
      {
        var ee = function() {
          ca || (ca = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ee.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var vn = function(T, B, ee, ce, Ge, mt, Xe) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: J,
        // Built-in properties that belong on the element
        type: T,
        key: B,
        ref: ee,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function mr(T, B, ee, ce, Ge) {
      {
        var mt, Xe = {}, _e = null, kn = null;
        ee !== void 0 && ($r(ee), _e = "" + ee), tt(B) && ($r(B.key), _e = "" + B.key), xe(B) && (kn = B.ref, kt(B, Ge));
        for (mt in B)
          Un.call(B, mt) && !Mr.hasOwnProperty(mt) && (Xe[mt] = B[mt]);
        if (T && T.defaultProps) {
          var Zt = T.defaultProps;
          for (mt in Zt)
            Xe[mt] === void 0 && (Xe[mt] = Zt[mt]);
        }
        if (_e || kn) {
          var Jt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          _e && At(Xe, Jt), kn && wn(Xe, Jt);
        }
        return vn(T, _e, kn, Ge, ce, pn.current, Xe);
      }
    }
    var Vt = fn.ReactCurrentOwner, xr = fn.ReactDebugCurrentFrame;
    function jt(T) {
      if (T) {
        var B = T._owner, ee = jn(T.type, T._source, B ? B.type : null);
        xr.setExtraStackFrame(ee);
      } else
        xr.setExtraStackFrame(null);
    }
    var Ut;
    Ut = !1;
    function Ga(T) {
      return typeof T == "object" && T !== null && T.$$typeof === J;
    }
    function Da() {
      {
        if (Vt.current) {
          var T = Ae(Vt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function il(T) {
      {
        if (T !== void 0) {
          var B = T.fileName.replace(/^.*[\\\/]/, ""), ee = T.lineNumber;
          return `

Check your code at ` + B + ":" + ee + ".";
        }
        return "";
      }
    }
    var ql = {};
    function Iu(T) {
      {
        var B = Da();
        if (!B) {
          var ee = typeof T == "string" ? T : T.displayName || T.name;
          ee && (B = `

Check the top-level render call using <` + ee + ">.");
        }
        return B;
      }
    }
    function _i(T, B) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ee = Iu(B);
        if (ql[ee])
          return;
        ql[ee] = !0;
        var ce = "";
        T && T._owner && T._owner !== Vt.current && (ce = " It was passed a child from " + Ae(T._owner.type) + "."), jt(T), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, ce), jt(null);
      }
    }
    function ll(T, B) {
      {
        if (typeof T != "object")
          return;
        if (Yr(T))
          for (var ee = 0; ee < T.length; ee++) {
            var ce = T[ee];
            Ga(ce) && _i(ce, B);
          }
        else if (Ga(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Ge = st(T);
          if (typeof Ge == "function" && Ge !== T.entries)
            for (var mt = Ge.call(T), Xe; !(Xe = mt.next()).done; )
              Ga(Xe.value) && _i(Xe.value, B);
        }
      }
    }
    function fa(T) {
      {
        var B = T.type;
        if (B == null || typeof B == "string")
          return;
        var ee;
        if (typeof B == "function")
          ee = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === he || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === re))
          ee = B.propTypes;
        else
          return;
        if (ee) {
          var ce = Ae(B);
          $n(ee, T.props, "prop", ce, T);
        } else if (B.PropTypes !== void 0 && !Ut) {
          Ut = !0;
          var Ge = Ae(B);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oi(T) {
      {
        for (var B = Object.keys(T.props), ee = 0; ee < B.length; ee++) {
          var ce = B[ee];
          if (ce !== "children" && ce !== "key") {
            jt(T), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), jt(null);
            break;
          }
        }
        T.ref !== null && (jt(T), at("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function da(T, B, ee, ce, Ge, mt) {
      {
        var Xe = Yt(T);
        if (!Xe) {
          var _e = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kn = il(Ge);
          kn ? _e += kn : _e += Da();
          var Zt;
          T === null ? Zt = "null" : Yr(T) ? Zt = "array" : T !== void 0 && T.$$typeof === J ? (Zt = "<" + (Ae(T.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Zt = typeof T, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Zt, _e);
        }
        var Jt = mr(T, B, ee, Ge, mt);
        if (Jt == null)
          return Jt;
        if (Xe) {
          var tr = B.children;
          if (tr !== void 0)
            if (ce)
              if (Yr(tr)) {
                for (var fi = 0; fi < tr.length; fi++)
                  ll(tr[fi], T);
                Object.freeze && Object.freeze(tr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ll(tr, T);
        }
        return T === Kt ? oi(Jt) : fa(Jt), Jt;
      }
    }
    function si(T, B, ee) {
      return da(T, B, ee, !0);
    }
    function Dr(T, B, ee) {
      return da(T, B, ee, !1);
    }
    var pa = Dr, ci = si;
    Gp.Fragment = Kt, Gp.jsx = pa, Gp.jsxs = ci;
  }()), Gp;
}
process.env.NODE_ENV === "production" ? s0.exports = Ww() : s0.exports = Gw();
var xa = s0.exports, f0 = { exports: {} }, Qa = {}, Am = { exports: {} }, u0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XT;
function qw() {
  return XT || (XT = 1, function(Z) {
    function J(X, Me) {
      var R = X.length;
      X.push(Me);
      e:
        for (; 0 < R; ) {
          var P = R - 1 >>> 1, le = X[P];
          if (0 < on(le, Me))
            X[P] = Me, X[R] = le, R = P;
          else
            break e;
        }
    }
    function U(X) {
      return X.length === 0 ? null : X[0];
    }
    function Kt(X) {
      if (X.length === 0)
        return null;
      var Me = X[0], R = X.pop();
      if (R !== Me) {
        X[0] = R;
        e:
          for (var P = 0, le = X.length, Be = le >>> 1; P < Be; ) {
            var Ue = 2 * (P + 1) - 1, ht = X[Ue], Je = Ue + 1, ft = X[Je];
            if (0 > on(ht, R))
              Je < le && 0 > on(ft, ht) ? (X[P] = ft, X[Je] = R, P = Je) : (X[P] = ht, X[Ue] = R, P = Ue);
            else if (Je < le && 0 > on(ft, R))
              X[P] = ft, X[Je] = R, P = Je;
            else
              break e;
          }
      }
      return Me;
    }
    function on(X, Me) {
      var R = X.sortIndex - Me.sortIndex;
      return R !== 0 ? R : X.id - Me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var nt = performance;
      Z.unstable_now = function() {
        return nt.now();
      };
    } else {
      var S = Date, Bt = S.now();
      Z.unstable_now = function() {
        return S.now() - Bt;
      };
    }
    var he = [], pe = [], rt = 1, re = null, me = 3, ie = !1, He = !1, Ct = !1, st = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(X) {
      for (var Me = U(pe); Me !== null; ) {
        if (Me.callback === null)
          Kt(pe);
        else if (Me.startTime <= X)
          Kt(pe), Me.sortIndex = Me.expirationTime, J(he, Me);
        else
          break;
        Me = U(pe);
      }
    }
    function ct(X) {
      if (Ct = !1, Qe(X), !He)
        if (U(he) !== null)
          He = !0, Tt(De);
        else {
          var Me = U(pe);
          Me !== null && ye(ct, Me.startTime - X);
        }
    }
    function De(X, Me) {
      He = !1, Ct && (Ct = !1, fn(tn), tn = -1), ie = !0;
      var R = me;
      try {
        for (Qe(Me), re = U(he); re !== null && (!(re.expirationTime > Me) || X && !wt()); ) {
          var P = re.callback;
          if (typeof P == "function") {
            re.callback = null, me = re.priorityLevel;
            var le = P(re.expirationTime <= Me);
            Me = Z.unstable_now(), typeof le == "function" ? re.callback = le : re === U(he) && Kt(he), Qe(Me);
          } else
            Kt(he);
          re = U(he);
        }
        if (re !== null)
          var Be = !0;
        else {
          var Ue = U(pe);
          Ue !== null && ye(ct, Ue.startTime - Me), Be = !1;
        }
        return Be;
      } finally {
        re = null, me = R, ie = !1;
      }
    }
    var it = !1, Fe = null, tn = -1, xn = 5, Yt = -1;
    function wt() {
      return !(Z.unstable_now() - Yt < xn);
    }
    function En() {
      if (Fe !== null) {
        var X = Z.unstable_now();
        Yt = X;
        var Me = !0;
        try {
          Me = Fe(!0, X);
        } finally {
          Me ? Ae() : (it = !1, Fe = null);
        }
      } else
        it = !1;
    }
    var Ae;
    if (typeof at == "function")
      Ae = function() {
        at(En);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Ot = qe.port2;
      qe.port1.onmessage = En, Ae = function() {
        Ot.postMessage(null);
      };
    } else
      Ae = function() {
        st(En, 0);
      };
    function Tt(X) {
      Fe = X, it || (it = !0, Ae());
    }
    function ye(X, Me) {
      tn = st(function() {
        X(Z.unstable_now());
      }, Me);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, Z.unstable_continueExecution = function() {
      He || ie || (He = !0, Tt(De));
    }, Z.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < X ? Math.floor(1e3 / X) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, Z.unstable_getFirstCallbackNode = function() {
      return U(he);
    }, Z.unstable_next = function(X) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var Me = 3;
          break;
        default:
          Me = me;
      }
      var R = me;
      me = Me;
      try {
        return X();
      } finally {
        me = R;
      }
    }, Z.unstable_pauseExecution = function() {
    }, Z.unstable_requestPaint = function() {
    }, Z.unstable_runWithPriority = function(X, Me) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var R = me;
      me = X;
      try {
        return Me();
      } finally {
        me = R;
      }
    }, Z.unstable_scheduleCallback = function(X, Me, R) {
      var P = Z.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? P + R : P) : R = P, X) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = R + le, X = { id: rt++, callback: Me, priorityLevel: X, startTime: R, expirationTime: le, sortIndex: -1 }, R > P ? (X.sortIndex = R, J(pe, X), U(he) === null && X === U(pe) && (Ct ? (fn(tn), tn = -1) : Ct = !0, ye(ct, R - P))) : (X.sortIndex = le, J(he, X), He || ie || (He = !0, Tt(De))), X;
    }, Z.unstable_shouldYield = wt, Z.unstable_wrapCallback = function(X) {
      var Me = me;
      return function() {
        var R = me;
        me = Me;
        try {
          return X.apply(this, arguments);
        } finally {
          me = R;
        }
      };
    };
  }(u0)), u0;
}
var o0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KT;
function Xw() {
  return KT || (KT = 1, function(Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var J = !1, U = !1, Kt = 5;
      function on(K, xe) {
        var tt = K.length;
        K.push(xe), Bt(K, xe, tt);
      }
      function nt(K) {
        return K.length === 0 ? null : K[0];
      }
      function S(K) {
        if (K.length === 0)
          return null;
        var xe = K[0], tt = K.pop();
        return tt !== xe && (K[0] = tt, he(K, tt, 0)), xe;
      }
      function Bt(K, xe, tt) {
        for (var kt = tt; kt > 0; ) {
          var At = kt - 1 >>> 1, wn = K[At];
          if (pe(wn, xe) > 0)
            K[At] = xe, K[kt] = wn, kt = At;
          else
            return;
        }
      }
      function he(K, xe, tt) {
        for (var kt = tt, At = K.length, wn = At >>> 1; kt < wn; ) {
          var vn = (kt + 1) * 2 - 1, mr = K[vn], Vt = vn + 1, xr = K[Vt];
          if (pe(mr, xe) < 0)
            Vt < At && pe(xr, mr) < 0 ? (K[kt] = xr, K[Vt] = xe, kt = Vt) : (K[kt] = mr, K[vn] = xe, kt = vn);
          else if (Vt < At && pe(xr, xe) < 0)
            K[kt] = xr, K[Vt] = xe, kt = Vt;
          else
            return;
        }
      }
      function pe(K, xe) {
        var tt = K.sortIndex - xe.sortIndex;
        return tt !== 0 ? tt : K.id - xe.id;
      }
      var rt = 1, re = 2, me = 3, ie = 4, He = 5;
      function Ct(K, xe) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var fn = performance;
        Z.unstable_now = function() {
          return fn.now();
        };
      } else {
        var at = Date, Qe = at.now();
        Z.unstable_now = function() {
          return at.now() - Qe;
        };
      }
      var ct = 1073741823, De = -1, it = 250, Fe = 5e3, tn = 1e4, xn = ct, Yt = [], wt = [], En = 1, Ae = null, qe = me, Ot = !1, Tt = !1, ye = !1, X = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function P(K) {
        for (var xe = nt(wt); xe !== null; ) {
          if (xe.callback === null)
            S(wt);
          else if (xe.startTime <= K)
            S(wt), xe.sortIndex = xe.expirationTime, on(Yt, xe);
          else
            return;
          xe = nt(wt);
        }
      }
      function le(K) {
        if (ye = !1, P(K), !Tt)
          if (nt(Yt) !== null)
            Tt = !0, $r(Be);
          else {
            var xe = nt(wt);
            xe !== null && pn(le, xe.startTime - K);
          }
      }
      function Be(K, xe) {
        Tt = !1, ye && (ye = !1, Mr()), Ot = !0;
        var tt = qe;
        try {
          var kt;
          if (!U)
            return Ue(K, xe);
        } finally {
          Ae = null, qe = tt, Ot = !1;
        }
      }
      function Ue(K, xe) {
        var tt = xe;
        for (P(tt), Ae = nt(Yt); Ae !== null && !J && !(Ae.expirationTime > tt && (!K || Br())); ) {
          var kt = Ae.callback;
          if (typeof kt == "function") {
            Ae.callback = null, qe = Ae.priorityLevel;
            var At = Ae.expirationTime <= tt, wn = kt(At);
            tt = Z.unstable_now(), typeof wn == "function" ? Ae.callback = wn : Ae === nt(Yt) && S(Yt), P(tt);
          } else
            S(Yt);
          Ae = nt(Yt);
        }
        if (Ae !== null)
          return !0;
        var vn = nt(wt);
        return vn !== null && pn(le, vn.startTime - tt), !1;
      }
      function ht(K, xe) {
        switch (K) {
          case rt:
          case re:
          case me:
          case ie:
          case He:
            break;
          default:
            K = me;
        }
        var tt = qe;
        qe = K;
        try {
          return xe();
        } finally {
          qe = tt;
        }
      }
      function Je(K) {
        var xe;
        switch (qe) {
          case rt:
          case re:
          case me:
            xe = me;
            break;
          default:
            xe = qe;
            break;
        }
        var tt = qe;
        qe = xe;
        try {
          return K();
        } finally {
          qe = tt;
        }
      }
      function ft(K) {
        var xe = qe;
        return function() {
          var tt = qe;
          qe = xe;
          try {
            return K.apply(this, arguments);
          } finally {
            qe = tt;
          }
        };
      }
      function et(K, xe, tt) {
        var kt = Z.unstable_now(), At;
        if (typeof tt == "object" && tt !== null) {
          var wn = tt.delay;
          typeof wn == "number" && wn > 0 ? At = kt + wn : At = kt;
        } else
          At = kt;
        var vn;
        switch (K) {
          case rt:
            vn = De;
            break;
          case re:
            vn = it;
            break;
          case He:
            vn = xn;
            break;
          case ie:
            vn = tn;
            break;
          case me:
          default:
            vn = Fe;
            break;
        }
        var mr = At + vn, Vt = {
          id: En++,
          callback: xe,
          priorityLevel: K,
          startTime: At,
          expirationTime: mr,
          sortIndex: -1
        };
        return At > kt ? (Vt.sortIndex = At, on(wt, Vt), nt(Yt) === null && Vt === nt(wt) && (ye ? Mr() : ye = !0, pn(le, At - kt))) : (Vt.sortIndex = mr, on(Yt, Vt), !Tt && !Ot && (Tt = !0, $r(Be))), Vt;
      }
      function zt() {
      }
      function Hr() {
        !Tt && !Ot && (Tt = !0, $r(Be));
      }
      function pr() {
        return nt(Yt);
      }
      function Vr(K) {
        K.callback = null;
      }
      function dn() {
        return qe;
      }
      var Yn = !1, jn = null, Un = -1, Dn = Kt, Pr = -1;
      function Br() {
        var K = Z.unstable_now() - Pr;
        return !(K < Dn);
      }
      function $n() {
      }
      function vr(K) {
        if (K < 0 || K > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        K > 0 ? Dn = Math.floor(1e3 / K) : Dn = Kt;
      }
      var Yr = function() {
        if (jn !== null) {
          var K = Z.unstable_now();
          Pr = K;
          var xe = !0, tt = !0;
          try {
            tt = jn(xe, K);
          } finally {
            tt ? hr() : (Yn = !1, jn = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof R == "function")
        hr = function() {
          R(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          X(Yr, 0);
        };
      function $r(K) {
        jn = K, Yn || (Yn = !0, hr());
      }
      function pn(K, xe) {
        Un = X(function() {
          K(Z.unstable_now());
        }, xe);
      }
      function Mr() {
        Me(Un), Un = -1;
      }
      var ui = $n, ca = null;
      Z.unstable_IdlePriority = He, Z.unstable_ImmediatePriority = rt, Z.unstable_LowPriority = ie, Z.unstable_NormalPriority = me, Z.unstable_Profiling = ca, Z.unstable_UserBlockingPriority = re, Z.unstable_cancelCallback = Vr, Z.unstable_continueExecution = Hr, Z.unstable_forceFrameRate = vr, Z.unstable_getCurrentPriorityLevel = dn, Z.unstable_getFirstCallbackNode = pr, Z.unstable_next = Je, Z.unstable_pauseExecution = zt, Z.unstable_requestPaint = ui, Z.unstable_runWithPriority = ht, Z.unstable_scheduleCallback = et, Z.unstable_shouldYield = Br, Z.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(o0)), o0;
}
var ZT;
function n1() {
  return ZT || (ZT = 1, process.env.NODE_ENV === "production" ? Am.exports = qw() : Am.exports = Xw()), Am.exports;
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
var JT;
function Kw() {
  if (JT)
    return Qa;
  JT = 1;
  var Z = Uf, J = n1();
  function U(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Kt = /* @__PURE__ */ new Set(), on = {};
  function nt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (on[n] = r, n = 0; n < r.length; n++)
      Kt.add(r[n]);
  }
  var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), he = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rt = {}, re = {};
  function me(n) {
    return he.call(re, n) ? !0 : he.call(rt, n) ? !1 : pe.test(n) ? re[n] = !0 : (rt[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function He(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ct(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new Ct(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new Ct(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new Ct(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new Ct(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new Ct(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new Ct(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new Ct(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      at
    );
    st[r] = new Ct(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Ct(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new Ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new Ct(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (He(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ct = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), it = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), wt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function Me(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, P;
  function le(n) {
    if (P === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        P = r && r[1] || "";
      }
    return `
` + P + n;
  }
  var Be = !1;
  function Ue(n, r) {
    if (!n || Be)
      return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var M = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ue(n.type, !1), n;
      case 11:
        return n = Ue(n.type.render, !1), n;
      case 1:
        return n = Ue(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case it:
        return "Portal";
      case xn:
        return "Profiler";
      case tn:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case wt:
          return (n.displayName || "Context") + ".Consumer";
        case Yt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ot:
          return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
        case Tt:
          r = n._payload, n = n._init;
          try {
            return Je(n(r));
          } catch {
          }
      }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Je(r);
      case 8:
        return r === tn ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Hr(n) {
    var r = zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Hr(n));
  }
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = zt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function jn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Un(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function Dn(n, r) {
    Un(n, r);
    var l = et(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Br(n, r.type, l) : r.hasOwnProperty("defaultValue") && Br(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Pr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Br(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var $n = Array.isArray;
  function vr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(U(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(U(92));
        if ($n(l)) {
          if (1 < l.length)
            throw Error(U(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function sa(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function $r(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? $r(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Mr, ui = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Mr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var K = {
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
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(K).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), K[r] = K[n];
    });
  });
  function tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || K.hasOwnProperty(n) && K[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = tt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var At = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function wn(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(U(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(U(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(U(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(U(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var mr = null;
  function Vt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, jt = null, Ut = null;
  function Ga(n) {
    if (n = ss(n)) {
      if (typeof xr != "function")
        throw Error(U(280));
      var r = n.stateNode;
      r && (r = be(r), xr(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    jt ? Ut ? Ut.push(n) : Ut = [n] : jt = n;
  }
  function il() {
    if (jt) {
      var n = jt, r = Ut;
      if (Ut = jt = null, Ga(n), r)
        for (n = 0; n < r.length; n++)
          Ga(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Iu() {
  }
  var _i = !1;
  function ll(n, r, l) {
    if (_i)
      return n(r, l);
    _i = !0;
    try {
      return ql(n, r, l);
    } finally {
      _i = !1, (jt !== null || Ut !== null) && (Iu(), il());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = be(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(U(231, r, typeof l));
    return l;
  }
  var oi = !1;
  if (Bt)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        oi = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      oi = !1;
    }
  function si(n, r, l, o, c, d, m, E, M) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch ($) {
      this.onError($);
    }
  }
  var Dr = !1, pa = null, ci = !1, T = null, B = { onError: function(n) {
    Dr = !0, pa = n;
  } };
  function ee(n, r, l, o, c, d, m, E, M) {
    Dr = !1, pa = null, si.apply(B, arguments);
  }
  function ce(n, r, l, o, c, d, m, E, M) {
    if (ee.apply(this, arguments), Dr) {
      if (Dr) {
        var A = pa;
        Dr = !1, pa = null;
      } else
        throw Error(U(198));
      ci || (ci = !0, T = A);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
    if (Ge(n) !== n)
      throw Error(U(188));
  }
  function _e(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null)
        throw Error(U(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Xe(c), n;
          if (d === o)
            return Xe(c), r;
          d = d.sibling;
        }
        throw Error(U(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(U(189));
        }
      }
      if (l.alternate !== o)
        throw Error(U(190));
    }
    if (l.tag !== 3)
      throw Error(U(188));
    return l.stateNode.current === l ? n : r;
  }
  function kn(n) {
    return n = _e(n), n !== null ? Zt(n) : null;
  }
  function Zt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Zt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Jt = J.unstable_scheduleCallback, tr = J.unstable_cancelCallback, fi = J.unstable_shouldYield, Hu = J.unstable_requestPaint, Rt = J.unstable_now, Ff = J.unstable_getCurrentPriorityLevel, qa = J.unstable_ImmediatePriority, lt = J.unstable_UserBlockingPriority, di = J.unstable_NormalPriority, ul = J.unstable_LowPriority, Vu = J.unstable_IdlePriority, ol = null, Qr = null;
  function Qo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wr = Math.clz32 ? Math.clz32 : Xs, Wo = Math.log, Go = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / Go | 0) | 0;
  }
  var Pu = 64, sl = 4194304;
  function Xa(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function br(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else
      m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - wr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function fl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - wr(d), E = 1 << m, M = c[m];
      M === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : M <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bu() {
    var n = Pu;
    return Pu <<= 1, !(Pu & 4194240) && (Pu = 64), n;
  }
  function Yu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ni(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - wr(r), n[r] = l;
  }
  function If(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - wr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - wr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var bt = 0;
  function $u(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xl, Qu, Mt, Wu, Gu, Ye = !1, Kl = [], hn = null, Wr = null, _r = null, pl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Ft = [], Ks = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        _r = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Qu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function vi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return _r = Qn(_r, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return pl.set(d, Qn(pl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = Na(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
            n.blockedOn = r, Gu(n.priority, function() {
              Mt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ki(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = ss(l), r !== null && Qu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function vl(n, r, l) {
    ki(n) && l.delete(r);
  }
  function Js() {
    Ye = !1, hn !== null && ki(hn) && (hn = null), Wr !== null && ki(Wr) && (Wr = null), _r !== null && ki(_r) && (_r = null), pl.forEach(vl), Cn.forEach(vl);
  }
  function wa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ye || (Ye = !0, J.unstable_scheduleCallback(J.unstable_NormalPriority, Js)));
  }
  function hl(n) {
    function r(c) {
      return wa(c, n);
    }
    if (0 < Kl.length) {
      wa(Kl[0], n);
      for (var l = 1; l < Kl.length; l++) {
        var o = Kl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && wa(hn, n), Wr !== null && wa(Wr, n), _r !== null && wa(_r, n), pl.forEach(r), Cn.forEach(r), l = 0; l < Ft.length; l++)
      o = Ft[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ft.length && (l = Ft[0], l.blockedOn === null); )
      Zs(l), l.blockedOn === null && Ft.shift();
  }
  var ml = ct.ReactCurrentBatchConfig, ba = !0;
  function qu(n, r, l, o) {
    var c = bt, d = ml.transition;
    ml.transition = null;
    try {
      bt = 1, gl(n, r, l, o);
    } finally {
      bt = c, ml.transition = d;
    }
  }
  function yl(n, r, l, o) {
    var c = bt, d = ml.transition;
    ml.transition = null;
    try {
      bt = 4, gl(n, r, l, o);
    } finally {
      bt = c, ml.transition = d;
    }
  }
  function gl(n, r, l, o) {
    if (ba) {
      var c = Xu(n, r, l, o);
      if (c === null)
        oc(n, r, o, Zl, l), Gr(n, o);
      else if (vi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Ks.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Xl(d), d = Xu(n, r, l, o), d === null && oc(n, r, o, Zl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        oc(n, r, o, null, l);
    }
  }
  var Zl = null;
  function Xu(n, r, l, o) {
    if (Zl = null, n = Vt(o), n = Na(n), n !== null)
      if (r = Ge(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zl = n, null;
  }
  function qo(n) {
    switch (n) {
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
        switch (Ff()) {
          case qa:
            return 1;
          case lt:
            return 4;
          case di:
          case ul:
            return 16;
          case Vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ka = null, h = null, C = null;
  function O() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Ka ? Ka.value : Ka.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function G() {
    return !0;
  }
  function Oe() {
    return !1;
  }
  function ae(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? G : Oe, this.isPropagationStopped = Oe, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = G);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = G);
    }, persist: function() {
    }, isPersistent: G }), r;
  }
  var ke = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ut = ae(ke), xt = R({}, ke, { view: 0, detail: 0 }), Wt = ae(xt), Pt, Gt, en, vt = R({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== en && (en && n.type === "mousemove" ? (Pt = n.screenX - en.screenX, Gt = n.screenY - en.screenY) : Gt = Pt = 0, en = n), Pt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Gt;
  } }), Li = ae(vt), Ku = R({}, vt, { dataTransfer: 0 }), Xo = ae(Ku), Hf = R({}, xt, { relatedTarget: 0 }), Za = ae(Hf), Ko = R({}, ke, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zo = ae(Ko), Vf = R({}, ke, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), jm = ae(Vf), Um = R({}, ke, { data: 0 }), Pf = ae(Um), Bf = {
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
  }, Xp = {
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
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function Yf() {
    return Zp;
  }
  var Oi = R({}, xt, { key: function(n) {
    if (n.key) {
      var r = Bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Fm = ae(Oi), $f = R({}, vt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = ae($f), Qf = R({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yf }), Im = ae(Qf), tc = R({}, ke, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ae(tc), qr = R({}, vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zi = ae(qr), Ln = [9, 13, 27, 32], Ja = Bt && "CompositionEvent" in window, Jl = null;
  Bt && "documentMode" in document && (Jl = document.documentMode);
  var nc = Bt && "TextEvent" in window && !Jl, ev = Bt && (!Ja || Jl && 8 < Jl && 11 >= Jl), Zu = String.fromCharCode(32), tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return Ln.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ju = !1;
  function Hm(n, r) {
    switch (n) {
      case "compositionend":
        return rc(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Zu);
      case "textInput":
        return n = r.data, n === Zu && tv ? null : n;
      default:
        return null;
    }
  }
  function Vm(n, r) {
    if (Ju)
      return n === "compositionend" || !Ja && nv(n, r) ? (n = O(), C = h = Ka = null, Ju = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    Da(o), r = ls(r, "onChange"), 0 < r.length && (l = new ut("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Jo = null, eo = null;
  function to(n) {
    uc(n, 0);
  }
  function no(n) {
    var r = ao(n);
    if (Vr(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (Bt) {
    var Gf;
    if (Bt) {
      var qf = "oninput" in document;
      if (!qf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), qf = typeof uv.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    Wf = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Jo && (Jo.detachEvent("onpropertychange", sv), eo = Jo = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && no(eo)) {
      var r = [];
      iv(r, eo, n, Vt(n)), ll(to, r);
    }
  }
  function Pm(n, r, l) {
    n === "focusin" ? (ov(), Jo = r, eo = l, Jo.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function Bm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no(eo);
  }
  function Ym(n, r) {
    if (n === "click")
      return no(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function $m(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var _a = typeof Object.is == "function" ? Object.is : $m;
  function es(n, r) {
    if (_a(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!he.call(r, c) || !_a(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ac() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function Ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ic(n) {
    var r = ac(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ai(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = Bt && "documentMode" in document && 11 >= document.documentMode, ei = null, Xf = null, ts = null, Kf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || ei == null || ei !== dn(o) || (o = ei, "selectionStart" in o && Ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = ls(Xf, "onSelect"), 0 < o.length && (r = new ut("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ei)));
  }
  function lc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var eu = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, Zf = {}, Jf = {};
  Bt && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete eu.animationend.animation, delete eu.animationiteration.animation, delete eu.animationstart.animation), "TransitionEvent" in window || delete eu.transitionend.transition);
  function Wn(n) {
    if (Zf[n])
      return Zf[n];
    if (!eu[n])
      return n;
    var r = eu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Jf)
        return Zf[n] = r[l];
    return n;
  }
  var ed = Wn("animationend"), mv = Wn("animationiteration"), yv = Wn("animationstart"), gv = Wn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ji(n, r) {
    Sv.set(n, r), nt(r, [n]);
  }
  for (var ns = 0; ns < Ev.length; ns++) {
    var tu = Ev[ns], Qm = tu.toLowerCase(), rs = tu[0].toUpperCase() + tu.slice(1);
    ji(Qm, "on" + rs);
  }
  ji(ed, "onAnimationEnd"), ji(mv, "onAnimationIteration"), ji(yv, "onAnimationStart"), ji("dblclick", "onDoubleClick"), ji("focusin", "onFocus"), ji("focusout", "onBlur"), ji(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), nt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), nt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), nt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), nt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function uc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], M = E.instance, A = E.currentTarget;
            if (E = E.listener, M !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = M;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], M = E.instance, A = E.currentTarget, E = E.listener, M !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = M;
          }
      }
    }
    if (ci)
      throw n = T, ci = !1, T = null, n;
  }
  function qt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function Sl(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var Ui = "_reactListening" + Math.random().toString(36).slice(2);
  function ro(n) {
    if (!n[Ui]) {
      n[Ui] = !0, Kt.forEach(function(l) {
        l !== "selectionchange" && (Wm.has(l) || Sl(l, !1, n), Sl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ui] || (r[Ui] = !0, Sl("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = qu;
        break;
      case 4:
        c = yl;
        break;
      default:
        c = gl;
    }
    l = c.bind(null, r, l, n), c = void 0, !oi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function oc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var M = m.tag;
                if ((M === 3 || M === 4) && (M = m.stateNode.containerInfo, M === c || M.nodeType === 8 && M.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Na(E), m === null)
                return;
              if (M = m.tag, M === 5 || M === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    ll(function() {
      var A = d, $ = Vt(l), Q = [];
      e: {
        var Y = Sv.get(n);
        if (Y !== void 0) {
          var oe = ut, ge = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = Fm;
              break;
            case "focusin":
              ge = "focus", oe = Za;
              break;
            case "focusout":
              ge = "blur", oe = Za;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Za;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Im;
              break;
            case ed:
            case mv:
            case yv:
              oe = Zo;
              break;
            case gv:
              oe = Jp;
              break;
            case "scroll":
              oe = Wt;
              break;
            case "wheel":
              oe = zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = ec;
          }
          var Ce = (r & 4) !== 0, _n = !Ce && n === "scroll", b = Ce ? Y !== null ? Y + "Capture" : null : Y;
          Ce = [];
          for (var D = A, k; D !== null; ) {
            k = D;
            var q = k.stateNode;
            if (k.tag === 5 && q !== null && (k = q, b !== null && (q = fa(D, b), q != null && Ce.push(is(D, q, k)))), _n)
              break;
            D = D.return;
          }
          0 < Ce.length && (Y = new oe(Y, ge, null, l, $), Q.push({ event: Y, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", Y && l !== mr && (ge = l.relatedTarget || l.fromElement) && (Na(ge) || ge[Fi]))
            break e;
          if ((oe || Y) && (Y = $.window === $ ? $ : (Y = $.ownerDocument) ? Y.defaultView || Y.parentWindow : window, oe ? (ge = l.relatedTarget || l.toElement, oe = A, ge = ge ? Na(ge) : null, ge !== null && (_n = Ge(ge), ge !== _n || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (oe = null, ge = A), oe !== ge)) {
            if (Ce = Li, q = "onMouseLeave", b = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = ec, q = "onPointerLeave", b = "onPointerEnter", D = "pointer"), _n = oe == null ? Y : ao(oe), k = ge == null ? Y : ao(ge), Y = new Ce(q, D + "leave", oe, l, $), Y.target = _n, Y.relatedTarget = k, q = null, Na($) === A && (Ce = new Ce(b, D + "enter", ge, l, $), Ce.target = k, Ce.relatedTarget = _n, q = Ce), _n = q, oe && ge)
              t: {
                for (Ce = oe, b = ge, D = 0, k = Ce; k; k = nu(k))
                  D++;
                for (k = 0, q = b; q; q = nu(q))
                  k++;
                for (; 0 < D - k; )
                  Ce = nu(Ce), D--;
                for (; 0 < k - D; )
                  b = nu(b), k--;
                for (; D--; ) {
                  if (Ce === b || b !== null && Ce === b.alternate)
                    break t;
                  Ce = nu(Ce), b = nu(b);
                }
                Ce = null;
              }
            else
              Ce = null;
            oe !== null && td(Q, Y, oe, Ce, !1), ge !== null && _n !== null && td(Q, _n, ge, Ce, !0);
          }
        }
        e: {
          if (Y = A ? ao(A) : window, oe = Y.nodeName && Y.nodeName.toLowerCase(), oe === "select" || oe === "input" && Y.type === "file")
            var Te = lv;
          else if (av(Y))
            if (Wf)
              Te = cv;
            else {
              Te = Bm;
              var Se = Pm;
            }
          else
            (oe = Y.nodeName) && oe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Te = Ym);
          if (Te && (Te = Te(n, A))) {
            iv(Q, Te, l, $);
            break e;
          }
          Se && Se(n, Y, A), n === "focusout" && (Se = Y._wrapperState) && Se.controlled && Y.type === "number" && Br(Y, "number", Y.value);
        }
        switch (Se = A ? ao(A) : window, n) {
          case "focusin":
            (av(Se) || Se.contentEditable === "true") && (ei = Se, Xf = A, ts = null);
            break;
          case "focusout":
            ts = Xf = ei = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, hv(Q, l, $);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(Q, l, $);
        }
        var we;
        if (Ja)
          e: {
            switch (n) {
              case "compositionstart":
                var Pe = "onCompositionStart";
                break e;
              case "compositionend":
                Pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Pe = "onCompositionUpdate";
                break e;
            }
            Pe = void 0;
          }
        else
          Ju ? nv(n, l) && (Pe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (ev && l.locale !== "ko" && (Ju || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Ju && (we = O()) : (Ka = $, h = "value" in Ka ? Ka.value : Ka.textContent, Ju = !0)), Se = ls(A, Pe), 0 < Se.length && (Pe = new Pf(Pe, n, null, l, $), Q.push({ event: Pe, listeners: Se }), we ? Pe.data = we : (we = rc(l), we !== null && (Pe.data = we)))), (we = nc ? Hm(n, l) : Vm(n, l)) && (A = ls(A, "onBeforeInput"), 0 < A.length && ($ = new Pf("onBeforeInput", "beforeinput", null, l, $), Q.push({ event: $, listeners: A }), $.data = we));
      }
      uc(Q, r);
    });
  }
  function is(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(is(n, d, c)), d = fa(n, r), d != null && o.push(is(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, M = E.alternate, A = E.stateNode;
      if (M !== null && M === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (M = fa(l, d), M != null && m.unshift(is(l, M, E))) : c || (M = fa(l, d), M != null && m.push(is(l, M, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var nd = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(Gm, "");
  }
  function sc(n, r, l) {
    if (r = rd(r), rd(n) !== r && l)
      throw Error(U(425));
  }
  function cc() {
  }
  var ad = null, ru = null;
  function us(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var au = typeof setTimeout == "function" ? setTimeout : void 0, Rv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(qm);
  } : au;
  function qm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function El(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), hl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    hl(r);
  }
  function ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function os(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Cl = Math.random().toString(36).slice(2), hi = "__reactFiber$" + Cl, iu = "__reactProps$" + Cl, Fi = "__reactContainer$" + Cl, ud = "__reactEvents$" + Cl, Xm = "__reactListeners$" + Cl, od = "__reactHandles$" + Cl;
  function Na(n) {
    var r = n[hi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fi] || l[hi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = os(n); n !== null; ) {
            if (l = n[hi])
              return l;
            n = os(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[hi] || n[Fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ao(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(U(33));
  }
  function be(n) {
    return n[iu] || null;
  }
  var Tl = [], nn = -1;
  function Ke(n) {
    return { current: n };
  }
  function Lt(n) {
    0 > nn || (n.current = Tl[nn], Tl[nn] = null, nn--);
  }
  function It(n, r) {
    nn++, Tl[nn] = n.current, n.current = r;
  }
  var mi = {}, Ve = Ke(mi), Tn = Ke(!1), Xr = mi;
  function ka(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return mi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function La() {
    Lt(Tn), Lt(Ve);
  }
  function Rl(n, r, l) {
    if (Ve.current !== mi)
      throw Error(U(168));
    It(Ve, r), It(Tn, l);
  }
  function cs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(U(108, ft(n) || "Unknown", c));
    return R({}, l, o);
  }
  function fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mi, Xr = Ve.current, It(Ve, n), It(Tn, Tn.current), !0;
  }
  function Mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(U(169));
    l ? (n = cs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Lt(Tn), Lt(Ve), It(Ve, n)) : Lt(Tn), It(Tn, l);
  }
  var va = null, Gn = !1, fs = !1;
  function sd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function cd(n) {
    Gn = !0, sd(n);
  }
  function Kr() {
    if (!fs && va !== null) {
      fs = !0;
      var n = 0, r = bt;
      try {
        var l = va;
        for (bt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Gn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), Jt(qa, Kr), c;
      } finally {
        bt = r, fs = !1;
      }
    }
    return null;
  }
  var Ml = [], Zr = 0, lu = null, io = 0, Jr = [], yr = 0, Oa = null, nr = 1, Ii = "";
  function ha(n, r) {
    Ml[Zr++] = io, Ml[Zr++] = lu, lu = n, io = r;
  }
  function fd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = Ii, Jr[yr++] = Oa, Oa = n;
    var o = nr;
    n = Ii;
    var c = 32 - wr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - wr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - wr(r) + c | l << c | o, Ii = d + n;
    } else
      nr = 1 << d | l << c | o, Ii = n;
  }
  function dc(n) {
    n.return !== null && (ha(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === lu; )
      lu = Ml[--Zr], Ml[Zr] = null, io = Ml[--Zr], Ml[Zr] = null;
    for (; n === Oa; )
      Oa = Jr[--yr], Jr[yr] = null, Ii = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, rn = !1, za = null;
  function pd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Oa !== null ? { id: nr, overflow: Ii } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vc(n) {
    if (rn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (pc(n))
            throw Error(U(418));
          r = ti(l.nextSibling);
          var o = ma;
          r && xv(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, rn = !1, ma = n);
        }
      } else {
        if (pc(n))
          throw Error(U(418));
        n.flags = n.flags & -4097 | 2, rn = !1, ma = n;
      }
    }
  }
  function Dv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function hc(n) {
    if (n !== ma)
      return !1;
    if (!rn)
      return Dv(n), rn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !us(n.type, n.memoizedProps)), r && (r = ea)) {
      if (pc(n))
        throw wv(), Error(U(418));
      for (; r; )
        pd(n, r), r = ti(r.nextSibling);
    }
    if (Dv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(U(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ti(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function wv() {
    for (var n = ea; n; )
      n = ti(n.nextSibling);
  }
  function mn() {
    ea = ma = null, rn = !1;
  }
  function vd(n) {
    za === null ? za = [n] : za.push(n);
  }
  var mc = ct.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var yi = Ke(null), yc = null, xl = null, hd = null;
  function md() {
    hd = xl = yc = null;
  }
  function Dl(n) {
    var r = yi.current;
    Lt(yi), n._currentValue = r;
  }
  function qn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function te(n, r) {
    yc = n, hd = xl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (On = !0), n.firstContext = null);
  }
  function bn(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, xl === null) {
        if (yc === null)
          throw Error(U(308));
        xl = n, yc.dependencies = { lanes: 0, firstContext: n };
      } else
        xl = xl.next = n;
    return r;
  }
  var rr = null;
  function yd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function bv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Hi(n, o);
  }
  function Hi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wl = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Hi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Hi(n, l);
  }
  function gc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  function Sd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _l(n, r, l, o) {
    var c = n.updateQueue;
    wl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var M = E, A = M.next;
      M.next = null, m === null ? d = A : m.next = A, m = M;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== m && (E === null ? $.firstBaseUpdate = A : E.next = A, $.lastBaseUpdate = M));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, $ = A = M = null, E = d;
      do {
        var Y = E.lane, oe = E.eventTime;
        if ((o & Y) === Y) {
          $ !== null && ($ = $.next = {
            eventTime: oe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (Y = r, oe = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  Q = ge.call(oe, Q, Y);
                  break e;
                }
                Q = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, Y = typeof ge == "function" ? ge.call(oe, Q, Y) : ge, Y == null)
                  break e;
                Q = R({}, Q, Y);
                break e;
              case 2:
                wl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else
          oe = { eventTime: oe, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (A = $ = oe, M = Q) : $ = $.next = oe, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (1);
      if ($ === null && (M = Q), c.baseState = M, c.firstBaseUpdate = A, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      $i |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function uu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(U(191, c));
          c.call(o);
        }
      }
  }
  var _v = new Z.Component().refs;
  function Ed(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Sc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Tr(r, n, c, o), gc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Tr(r, n, c, o), gc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Vi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = bl(n, c, o), r !== null && (Tr(r, n, o, l), gc(r, n, o));
  } };
  function Nv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function kv(n, r, l) {
    var o = !1, c = mi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = bn(d) : (c = sn(r) ? Xr : Ve.current, o = r.contextTypes, d = (o = o != null) ? ka(n, c) : mi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Lv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Sc.enqueueReplaceState(r, r.state, null);
  }
  function Ec(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = _v, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = bn(d) : (d = sn(r) ? Xr : Ve.current, c.context = ka(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Sc.enqueueReplaceState(c, c.state, null), _l(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function lo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(U(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(U(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === _v && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(U(284));
      if (!l._owner)
        throw Error(U(290, n));
    }
    return n;
  }
  function Cc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(U(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ov(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(b, D) {
      if (n) {
        var k = b.deletions;
        k === null ? (b.deletions = [D], b.flags |= 16) : k.push(D);
      }
    }
    function l(b, D) {
      if (!n)
        return null;
      for (; D !== null; )
        r(b, D), D = D.sibling;
      return null;
    }
    function o(b, D) {
      for (b = /* @__PURE__ */ new Map(); D !== null; )
        D.key !== null ? b.set(D.key, D) : b.set(D.index, D), D = D.sibling;
      return b;
    }
    function c(b, D) {
      return b = Ul(b, D), b.index = 0, b.sibling = null, b;
    }
    function d(b, D, k) {
      return b.index = k, n ? (k = b.alternate, k !== null ? (k = k.index, k < D ? (b.flags |= 2, D) : k) : (b.flags |= 2, D)) : (b.flags |= 1048576, D);
    }
    function m(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function E(b, D, k, q) {
      return D === null || D.tag !== 6 ? (D = Ns(k, b.mode, q), D.return = b, D) : (D = c(D, k), D.return = b, D);
    }
    function M(b, D, k, q) {
      var Te = k.type;
      return Te === Fe ? $(b, D, k.props.children, q, k.key) : D !== null && (D.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Tt && Ov(Te) === D.type) ? (q = c(D, k.props), q.ref = lo(b, D, k), q.return = b, q) : (q = Jc(k.type, k.key, k.props, null, b.mode, q), q.ref = lo(b, D, k), q.return = b, q);
    }
    function A(b, D, k, q) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== k.containerInfo || D.stateNode.implementation !== k.implementation ? (D = Du(k, b.mode, q), D.return = b, D) : (D = c(D, k.children || []), D.return = b, D);
    }
    function $(b, D, k, q, Te) {
      return D === null || D.tag !== 7 ? (D = xu(k, b.mode, q, Te), D.return = b, D) : (D = c(D, k), D.return = b, D);
    }
    function Q(b, D, k) {
      if (typeof D == "string" && D !== "" || typeof D == "number")
        return D = Ns("" + D, b.mode, k), D.return = b, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case De:
            return k = Jc(D.type, D.key, D.props, null, b.mode, k), k.ref = lo(b, null, D), k.return = b, k;
          case it:
            return D = Du(D, b.mode, k), D.return = b, D;
          case Tt:
            var q = D._init;
            return Q(b, q(D._payload), k);
        }
        if ($n(D) || Me(D))
          return D = xu(D, b.mode, k, null), D.return = b, D;
        Cc(b, D);
      }
      return null;
    }
    function Y(b, D, k, q) {
      var Te = D !== null ? D.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return Te !== null ? null : E(b, D, "" + k, q);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case De:
            return k.key === Te ? M(b, D, k, q) : null;
          case it:
            return k.key === Te ? A(b, D, k, q) : null;
          case Tt:
            return Te = k._init, Y(
              b,
              D,
              Te(k._payload),
              q
            );
        }
        if ($n(k) || Me(k))
          return Te !== null ? null : $(b, D, k, q, null);
        Cc(b, k);
      }
      return null;
    }
    function oe(b, D, k, q, Te) {
      if (typeof q == "string" && q !== "" || typeof q == "number")
        return b = b.get(k) || null, E(D, b, "" + q, Te);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case De:
            return b = b.get(q.key === null ? k : q.key) || null, M(D, b, q, Te);
          case it:
            return b = b.get(q.key === null ? k : q.key) || null, A(D, b, q, Te);
          case Tt:
            var Se = q._init;
            return oe(b, D, k, Se(q._payload), Te);
        }
        if ($n(q) || Me(q))
          return b = b.get(k) || null, $(D, b, q, Te, null);
        Cc(D, q);
      }
      return null;
    }
    function ge(b, D, k, q) {
      for (var Te = null, Se = null, we = D, Pe = D = 0, Zn = null; we !== null && Pe < k.length; Pe++) {
        we.index > Pe ? (Zn = we, we = null) : Zn = we.sibling;
        var Dt = Y(b, we, k[Pe], q);
        if (Dt === null) {
          we === null && (we = Zn);
          break;
        }
        n && we && Dt.alternate === null && r(b, we), D = d(Dt, D, Pe), Se === null ? Te = Dt : Se.sibling = Dt, Se = Dt, we = Zn;
      }
      if (Pe === k.length)
        return l(b, we), rn && ha(b, Pe), Te;
      if (we === null) {
        for (; Pe < k.length; Pe++)
          we = Q(b, k[Pe], q), we !== null && (D = d(we, D, Pe), Se === null ? Te = we : Se.sibling = we, Se = we);
        return rn && ha(b, Pe), Te;
      }
      for (we = o(b, we); Pe < k.length; Pe++)
        Zn = oe(we, b, Pe, k[Pe], q), Zn !== null && (n && Zn.alternate !== null && we.delete(Zn.key === null ? Pe : Zn.key), D = d(Zn, D, Pe), Se === null ? Te = Zn : Se.sibling = Zn, Se = Zn);
      return n && we.forEach(function(Fl) {
        return r(b, Fl);
      }), rn && ha(b, Pe), Te;
    }
    function Ce(b, D, k, q) {
      var Te = Me(k);
      if (typeof Te != "function")
        throw Error(U(150));
      if (k = Te.call(k), k == null)
        throw Error(U(151));
      for (var Se = Te = null, we = D, Pe = D = 0, Zn = null, Dt = k.next(); we !== null && !Dt.done; Pe++, Dt = k.next()) {
        we.index > Pe ? (Zn = we, we = null) : Zn = we.sibling;
        var Fl = Y(b, we, Dt.value, q);
        if (Fl === null) {
          we === null && (we = Zn);
          break;
        }
        n && we && Fl.alternate === null && r(b, we), D = d(Fl, D, Pe), Se === null ? Te = Fl : Se.sibling = Fl, Se = Fl, we = Zn;
      }
      if (Dt.done)
        return l(
          b,
          we
        ), rn && ha(b, Pe), Te;
      if (we === null) {
        for (; !Dt.done; Pe++, Dt = k.next())
          Dt = Q(b, Dt.value, q), Dt !== null && (D = d(Dt, D, Pe), Se === null ? Te = Dt : Se.sibling = Dt, Se = Dt);
        return rn && ha(b, Pe), Te;
      }
      for (we = o(b, we); !Dt.done; Pe++, Dt = k.next())
        Dt = oe(we, b, Pe, Dt.value, q), Dt !== null && (n && Dt.alternate !== null && we.delete(Dt.key === null ? Pe : Dt.key), D = d(Dt, D, Pe), Se === null ? Te = Dt : Se.sibling = Dt, Se = Dt);
      return n && we.forEach(function(my) {
        return r(b, my);
      }), rn && ha(b, Pe), Te;
    }
    function _n(b, D, k, q) {
      if (typeof k == "object" && k !== null && k.type === Fe && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case De:
            e: {
              for (var Te = k.key, Se = D; Se !== null; ) {
                if (Se.key === Te) {
                  if (Te = k.type, Te === Fe) {
                    if (Se.tag === 7) {
                      l(b, Se.sibling), D = c(Se, k.props.children), D.return = b, b = D;
                      break e;
                    }
                  } else if (Se.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Tt && Ov(Te) === Se.type) {
                    l(b, Se.sibling), D = c(Se, k.props), D.ref = lo(b, Se, k), D.return = b, b = D;
                    break e;
                  }
                  l(b, Se);
                  break;
                } else
                  r(b, Se);
                Se = Se.sibling;
              }
              k.type === Fe ? (D = xu(k.props.children, b.mode, q, k.key), D.return = b, b = D) : (q = Jc(k.type, k.key, k.props, null, b.mode, q), q.ref = lo(b, D, k), q.return = b, b = q);
            }
            return m(b);
          case it:
            e: {
              for (Se = k.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === k.containerInfo && D.stateNode.implementation === k.implementation) {
                    l(b, D.sibling), D = c(D, k.children || []), D.return = b, b = D;
                    break e;
                  } else {
                    l(b, D);
                    break;
                  }
                else
                  r(b, D);
                D = D.sibling;
              }
              D = Du(k, b.mode, q), D.return = b, b = D;
            }
            return m(b);
          case Tt:
            return Se = k._init, _n(b, D, Se(k._payload), q);
        }
        if ($n(k))
          return ge(b, D, k, q);
        if (Me(k))
          return Ce(b, D, k, q);
        Cc(b, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, D !== null && D.tag === 6 ? (l(b, D.sibling), D = c(D, k), D.return = b, b = D) : (l(b, D), D = Ns(k, b.mode, q), D.return = b, b = D), m(b)) : l(b, D);
    }
    return _n;
  }
  var uo = zv(!0), Av = zv(!1), ds = {}, ni = Ke(ds), ps = Ke(ds), oo = Ke(ds);
  function ou(n) {
    if (n === ds)
      throw Error(U(174));
    return n;
  }
  function Cd(n, r) {
    switch (It(oo, r), It(ps, n), It(ni, ds), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    Lt(ni), It(ni, r);
  }
  function Nl() {
    Lt(ni), Lt(ps), Lt(oo);
  }
  function Le(n) {
    ou(oo.current);
    var r = ou(ni.current), l = pn(r, n.type);
    r !== l && (It(ps, n), It(ni, l));
  }
  function ot(n) {
    ps.current === n && (Lt(ni), Lt(ps));
  }
  var ze = Ke(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Aa = [];
  function Tc() {
    for (var n = 0; n < Aa.length; n++)
      Aa[n]._workInProgressVersionPrimary = null;
    Aa.length = 0;
  }
  var Rc = ct.ReactCurrentDispatcher, Td = ct.ReactCurrentBatchConfig, su = 0, an = null, H = null, yt = null, je = !1, gi = !1, ga = 0, cu = 0;
  function ln() {
    throw Error(U(321));
  }
  function fu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!_a(n[l], r[l]))
        return !1;
    return !0;
  }
  function kl(n, r, l, o, c, d) {
    if (su = d, an = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Rc.current = n === null || n.memoizedState === null ? Zm : Jm, n = l(o, c), gi) {
      d = 0;
      do {
        if (gi = !1, ga = 0, 25 <= d)
          throw Error(U(301));
        d += 1, yt = H = null, r.updateQueue = null, Rc.current = Md, n = l(o, c);
      } while (gi);
    }
    if (Rc.current = Ic, r = H !== null && H.next !== null, su = 0, yt = H = an = null, je = !1, r)
      throw Error(U(300));
    return n;
  }
  function du() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function ja() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return yt === null ? an.memoizedState = yt = n : yt = yt.next = n, yt;
  }
  function ta() {
    if (H === null) {
      var n = an.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = H.next;
    var r = yt === null ? an.memoizedState : yt.next;
    if (r !== null)
      yt = r, H = n;
    else {
      if (n === null)
        throw Error(U(310));
      H = n, n = { memoizedState: H.memoizedState, baseState: H.baseState, baseQueue: H.baseQueue, queue: H.queue, next: null }, yt === null ? an.memoizedState = yt = n : yt = yt.next = n;
    }
    return yt;
  }
  function pu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function vs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = H, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, M = null, A = d;
      do {
        var $ = A.lane;
        if ((su & $) === $)
          M !== null && (M = M.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var Q = {
            lane: $,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          M === null ? (E = M = Q, m = o) : M = M.next = Q, an.lanes |= $, $i |= $;
        }
        A = A.next;
      } while (A !== null && A !== d);
      M === null ? m = o : M.next = E, _a(o, r.memoizedState) || (On = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = M, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, an.lanes |= d, $i |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function hs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      _a(d, r.memoizedState) || (On = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Mc() {
  }
  function xc(n, r) {
    var l = an, o = ta(), c = r(), d = !_a(o.memoizedState, c);
    if (d && (o.memoizedState = c, On = !0), o = o.queue, ms(bc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || yt !== null && yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, vu(9, wc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(U(349));
      su & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function wc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, _c(r) && Nc(n);
  }
  function bc(n, r, l) {
    return l(function() {
      _c(r) && Nc(n);
    });
  }
  function _c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !_a(n, l);
    } catch {
      return !0;
    }
  }
  function Nc(n) {
    var r = Hi(n, 1);
    r !== null && Tr(r, n, 1, -1);
  }
  function kc(n) {
    var r = ja();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fc.bind(null, an, n), [r.memoizedState, n];
  }
  function vu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Lc() {
    return ta().memoizedState;
  }
  function hu(n, r, l, o) {
    var c = ja();
    an.flags |= n, c.memoizedState = vu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (H !== null) {
      var m = H.memoizedState;
      if (d = m.destroy, o !== null && fu(o, m.deps)) {
        c.memoizedState = vu(r, l, d, o);
        return;
      }
    }
    an.flags |= n, c.memoizedState = vu(1 | r, l, d, o);
  }
  function Oc(n, r) {
    return hu(8390656, 8, n, r);
  }
  function ms(n, r) {
    return Pi(2048, 8, n, r);
  }
  function zc(n, r) {
    return Pi(4, 2, n, r);
  }
  function Ac(n, r) {
    return Pi(4, 4, n, r);
  }
  function Rd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function so(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pi(4, 4, Rd.bind(null, r, n), l);
  }
  function jc() {
  }
  function co(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return su & 21 ? (_a(l, r) || (l = Bu(), an.lanes |= l, $i |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, On = !0), n.memoizedState = l);
  }
  function Km(n, r) {
    var l = bt;
    bt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      bt = l, Td.transition = o;
    }
  }
  function Xt() {
    return ta().memoizedState;
  }
  function Uc(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, fo(n))
      ys(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
      var c = Cr();
      Tr(l, n, o, c), jv(l, r, o);
    }
  }
  function Fc(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (fo(n))
      ys(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, _a(E, m)) {
            var M = r.interleaved;
            M === null ? (c.next = c, yd(r)) : (c.next = M.next, M.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = bv(n, r, c, o), l !== null && (c = Cr(), Tr(l, n, o, c), jv(l, r, o));
    }
  }
  function fo(n) {
    var r = n.alternate;
    return n === an || r !== null && r === an;
  }
  function ys(n, r) {
    gi = je = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function jv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  var Ic = { readContext: bn, useCallback: ln, useContext: ln, useEffect: ln, useImperativeHandle: ln, useInsertionEffect: ln, useLayoutEffect: ln, useMemo: ln, useReducer: ln, useRef: ln, useState: ln, useDebugValue: ln, useDeferredValue: ln, useTransition: ln, useMutableSource: ln, useSyncExternalStore: ln, useId: ln, unstable_isNewReconciler: !1 }, Zm = { readContext: bn, useCallback: function(n, r) {
    return ja().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: bn, useEffect: Oc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(
      4194308,
      4,
      Rd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return hu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return hu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ja();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ja();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Uc.bind(null, an, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ja();
    return n = { current: n }, r.memoizedState = n;
  }, useState: kc, useDebugValue: jc, useDeferredValue: function(n) {
    return ja().memoizedState = n;
  }, useTransition: function() {
    var n = kc(!1), r = n[0];
    return n = Km.bind(null, n[1]), ja().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = an, c = ja();
    if (rn) {
      if (l === void 0)
        throw Error(U(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(U(349));
      su & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Oc(bc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vu(9, wc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ja(), r = gn.identifierPrefix;
    if (rn) {
      var l = Ii, o = nr;
      l = (o & ~(1 << 32 - wr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = cu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Jm = {
    readContext: bn,
    useCallback: co,
    useContext: bn,
    useEffect: ms,
    useImperativeHandle: so,
    useInsertionEffect: zc,
    useLayoutEffect: Ac,
    useMemo: Ll,
    useReducer: vs,
    useRef: Lc,
    useState: function() {
      return vs(pu);
    },
    useDebugValue: jc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, H.memoizedState, n);
    },
    useTransition: function() {
      var n = vs(pu)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: Mc,
    useSyncExternalStore: xc,
    useId: Xt,
    unstable_isNewReconciler: !1
  }, Md = { readContext: bn, useCallback: co, useContext: bn, useEffect: ms, useImperativeHandle: so, useInsertionEffect: zc, useLayoutEffect: Ac, useMemo: Ll, useReducer: hs, useRef: Lc, useState: function() {
    return hs(pu);
  }, useDebugValue: jc, useDeferredValue: function(n) {
    var r = ta();
    return H === null ? r.memoizedState = n : na(r, H.memoizedState, n);
  }, useTransition: function() {
    var n = hs(pu)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: Mc, useSyncExternalStore: xc, useId: Xt, unstable_isNewReconciler: !1 };
  function po(n, r) {
    try {
      var l = "", o = r;
      do
        l += ht(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function gs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Hc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ey = typeof WeakMap == "function" ? WeakMap : Map;
  function Uv(n, r, l) {
    l = Vi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Wc || (Wc = !0, Eu = o), Hc(n, r);
    }, l;
  }
  function Ss(n, r, l) {
    l = Vi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Hc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Hc(n, r), typeof o != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Fv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ey();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = uy.bind(null, n, r, l), r.then(n, n));
  }
  function xd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Dd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Vi(-1, 1), r.tag = 2, bl(l, r, 1))), l.lanes |= 1), n);
  }
  var ty = ct.ReactCurrentOwner, On = !1;
  function In(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : uo(r, n.child, l, o);
  }
  function Ol(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return te(r, c), o = kl(n, r, l, o, d, c), l = du(), n !== null && !On ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (rn && l && dc(r), r.flags |= 1, In(n, r, o, c), r.child);
  }
  function Vc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = Jc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Ul(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref)
        if (On = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (On = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return vo(n, r, l, o, c);
  }
  function mu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, It(Eo, Sa), Sa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, It(Eo, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, It(Eo, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, It(Eo, Sa), Sa |= o;
    return In(n, r, c, l), r.child;
  }
  function Ze(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vo(n, r, l, o, c) {
    var d = sn(l) ? Xr : Ve.current;
    return d = ka(r, d), te(r, c), l = kl(n, r, l, o, d, c), o = du(), n !== null && !On ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (rn && o && dc(r), r.flags |= 1, In(n, r, l, c), r.child);
  }
  function wd(n, r, l, o, c) {
    if (sn(l)) {
      var d = !0;
      fc(r);
    } else
      d = !1;
    if (te(r, c), r.stateNode === null)
      gr(n, r), kv(r, l, o), Ec(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var M = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = bn(A) : (A = sn(l) ? Xr : Ve.current, A = ka(r, A));
      var $ = l.getDerivedStateFromProps, Q = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || M !== A) && Lv(r, m, o, A), wl = !1;
      var Y = r.memoizedState;
      m.state = Y, _l(r, o, m, c), M = r.memoizedState, E !== o || Y !== M || Tn.current || wl ? (typeof $ == "function" && (Ed(r, l, $, o), M = r.memoizedState), (E = wl || Nv(r, l, E, o, Y, M, A)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = M), m.props = o, m.state = M, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fn(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ya(r.type, E), m.props = A, Q = r.pendingProps, Y = m.context, M = l.contextType, typeof M == "object" && M !== null ? M = bn(M) : (M = sn(l) ? Xr : Ve.current, M = ka(r, M));
      var oe = l.getDerivedStateFromProps;
      ($ = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || Y !== M) && Lv(r, m, o, M), wl = !1, Y = r.memoizedState, m.state = Y, _l(r, o, m, c);
      var ge = r.memoizedState;
      E !== Q || Y !== ge || Tn.current || wl ? (typeof oe == "function" && (Ed(r, l, oe, o), ge = r.memoizedState), (A = wl || Nv(r, l, A, o, Y, ge, M) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, M), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, M)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = M, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Iv(n, r, l, o, d, c);
  }
  function Iv(n, r, l, o, c, d) {
    Ze(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Mv(r, l, !1), ar(n, r, d);
    o = r.stateNode, ty.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = uo(r, n.child, null, d), r.child = uo(r, null, E, d)) : In(n, r, E, d), r.memoizedState = o.state, c && Mv(r, l, !0), r.child;
  }
  function Hv(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function Pc(n, r, l, o, c) {
    return mn(), vd(c), r.flags |= 256, In(n, r, l, o), r.child;
  }
  var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _d(n, r, l) {
    var o = r.pendingProps, c = ze.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), It(ze, c & 1), n === null)
      return vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = _s(m, o, 0, null), n = xu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = bd(l), r.memoizedState = yu, n) : Nd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ny(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var M = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = M, r.deletions = null) : (o = Ul(c, M), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ul(E, d) : (d = xu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? bd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = yu, o;
    }
    return d = n.child, n = d.sibling, o = Ul(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Nd(n, r) {
    return r = _s({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ho(n, r, l, o) {
    return o !== null && vd(o), uo(r, n.child, null, l), n = Nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ny(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = gs(Error(U(422))), ho(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = _s({ mode: "visible", children: o.children }, c, 0, null), d = xu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && uo(r, n.child, null, m), r.child.memoizedState = bd(m), r.memoizedState = yu, d);
    if (!(r.mode & 1))
      return ho(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(U(419)), o = gs(d, o, void 0), ho(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, On || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Hi(n, c), Tr(o, n, c, -1));
      }
      return Pd(), o = gs(Error(U(421))), ho(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = oy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ti(c.nextSibling), ma = r, rn = !0, za = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = Ii, Jr[yr++] = Oa, nr = n.id, Ii = n.overflow, Oa = r), r = Nd(r, o.children), r.flags |= 4096, r);
  }
  function kd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function Bc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (In(n, r, o.children, l), o = ze.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && kd(n, l, r);
            else if (n.tag === 19)
              kd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (It(ze, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Bc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Bc(r, !0, l, null, d);
          break;
        case "together":
          Bc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), $i |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(U(153));
    if (r.child !== null) {
      for (n = r.child, l = Ul(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ul(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Hv(r), mn();
        break;
      case 5:
        Le(r);
        break;
      case 1:
        sn(r.type) && fc(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        It(yi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (It(ze, ze.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _d(n, r, l) : (It(ze, ze.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        It(ze, ze.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), It(ze, ze.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Es, gu, Ua, Hn;
  Es = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, gu = function() {
  }, Ua = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(ni.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = cc);
      }
      wn(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (on.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var M = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && M !== E && (M != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || M && M.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in M)
                M.hasOwnProperty(m) && E[m] !== M[m] && (l || (l = {}), l[m] = M[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = M;
          else
            A === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, E = E ? E.__html : void 0, M != null && E !== M && (d = d || []).push(A, M)) : A === "children" ? typeof M != "string" && typeof M != "number" || (d = d || []).push(A, "" + M) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (on.hasOwnProperty(A) ? (M != null && A === "onScroll" && qt("scroll", n), d || E === M || (d = [])) : (d = d || []).push(A, M));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Hn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cs(n, r) {
    if (!rn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ry(n, r, l) {
    var o = r.pendingProps;
    switch (dd(r), r.tag) {
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
        return Sr(r), null;
      case 1:
        return sn(r.type) && La(), Sr(r), null;
      case 3:
        return o = r.stateNode, Nl(), Lt(Tn), Lt(Ve), Tc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (bs(za), za = null))), gu(n, r), Sr(r), null;
      case 5:
        ot(r);
        var c = ou(oo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ua(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(U(166));
            return Sr(r), null;
          }
          if (n = ou(ni.current), hc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[hi] = r, o[iu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                qt("cancel", o), qt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                qt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++)
                  qt(as[c], o);
                break;
              case "source":
                qt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                qt(
                  "error",
                  o
                ), qt("load", o);
                break;
              case "details":
                qt("toggle", o);
                break;
              case "input":
                jn(o, d), qt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, qt("invalid", o);
                break;
              case "textarea":
                hr(o, d), qt("invalid", o);
            }
            wn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && sc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : on.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
              }
            switch (l) {
              case "input":
                pr(o), Pr(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = $r(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[hi] = r, n[iu] = o, Es(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  qt("cancel", n), qt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++)
                    qt(as[c], n);
                  c = o;
                  break;
                case "source":
                  qt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  qt(
                    "error",
                    n
                  ), qt("load", n), c = o;
                  break;
                case "details":
                  qt("toggle", n), c = o;
                  break;
                case "input":
                  jn(n, o), c = Yn(n, o), qt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), qt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), qt("invalid", n);
                  break;
                default:
                  c = o;
              }
              wn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var M = E[d];
                  d === "style" ? kt(n, M) : d === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && ui(n, M)) : d === "children" ? typeof M == "string" ? (l !== "textarea" || M !== "") && ca(n, M) : typeof M == "number" && ca(n, "" + M) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (on.hasOwnProperty(d) ? M != null && d === "onScroll" && qt("scroll", n) : M != null && Qe(n, d, M, m));
                }
              switch (l) {
                case "input":
                  pr(n), Pr(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Hn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(U(166));
          if (l = ou(oo.current), ou(ni.current), hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[hi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  sc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && sc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[hi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (Lt(ze), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (rn && ea !== null && r.mode & 1 && !(r.flags & 128))
            wv(), mn(), r.flags |= 98560, d = !1;
          else if (d = hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(U(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(U(317));
              d[hi] = r;
            } else
              mn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            za !== null && (bs(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ze.current & 1 ? Pn === 0 && (Pn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return Nl(), gu(n, r), n === null && ro(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return Dl(r.type._context), Sr(r), null;
      case 17:
        return sn(r.type) && La(), Sr(r), null;
      case 19:
        if (Lt(ze), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Cs(d, !1);
          else {
            if (Pn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Cs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return It(ze, ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Rt() > To && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !rn)
                return Sr(r), null;
            } else
              2 * Rt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Cs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Rt(), r.sibling = null, l = ze.current, It(ze, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(U(156, r.tag));
  }
  function Od(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return sn(r.type) && La(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Nl(), Lt(Tn), Lt(Ve), Tc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ot(r), null;
      case 13:
        if (Lt(ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(U(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Lt(ze), null;
      case 4:
        return Nl(), null;
      case 10:
        return Dl(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ts = !1, Vn = !1, Vv = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function mo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Mn(n, r, o);
        }
      else
        l.current = null;
  }
  function Rs(n, r, l) {
    try {
      l();
    } catch (o) {
      Mn(n, r, o);
    }
  }
  var Pv = !1;
  function Bv(n, r) {
    if (ad = ba, n = ac(), Ai(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, M = -1, A = 0, $ = 0, Q = n, Y = null;
            t:
              for (; ; ) {
                for (var oe; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (M = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (oe = Q.firstChild) !== null; )
                  Y = Q, Q = oe;
                for (; ; ) {
                  if (Q === n)
                    break t;
                  if (Y === l && ++A === c && (E = m), Y === d && ++$ === o && (M = m), (oe = Q.nextSibling) !== null)
                    break;
                  Q = Y, Y = Q.parentNode;
                }
                Q = oe;
              }
            l = E === -1 || M === -1 ? null : { start: E, end: M };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (ru = { focusedElem: n, selectionRange: l }, ba = !1, ve = r; ve !== null; )
      if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ve = n;
      else
        for (; ve !== null; ) {
          r = ve;
          try {
            var ge = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, _n = ge.memoizedState, b = r.stateNode, D = b.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ya(r.type, Ce), _n);
                    b.__reactInternalSnapshotBeforeUpdate = D;
                  }
                  break;
                case 3:
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(U(163));
              }
          } catch (q) {
            Mn(r, r.return, q);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ve = n;
            break;
          }
          ve = r.return;
        }
    return ge = Pv, Pv = !1, ge;
  }
  function Ms(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Rs(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[hi], delete r[iu], delete r[ud], delete r[Xm], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Yv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = cc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (yo(n, r, l), n = n.sibling; n !== null; )
        yo(n, r, l), n = n.sibling;
  }
  function Si(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Si(n, r, l), n = n.sibling; n !== null; )
        Si(n, r, l), n = n.sibling;
  }
  var cn = null, Xn = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; )
      go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ol, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Vn || mo(l, r);
      case 6:
        var o = cn, c = Xn;
        cn = null, Fa(n, r, l), cn = o, Xn = c, cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : cn.removeChild(l.stateNode));
        break;
      case 18:
        cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? El(n.parentNode, l) : n.nodeType === 1 && El(n, l), hl(n)) : El(cn, l.stateNode));
        break;
      case 4:
        o = cn, c = Xn, cn = l.stateNode.containerInfo, Xn = !0, Fa(n, r, l), cn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Rs(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!Vn && (mo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            Mn(l, r, E);
          }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Vn = (o = Vn) || l.memoizedState !== null, Fa(n, r, l), Vn = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Yi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Vv()), r.forEach(function(o) {
        var c = sy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  cn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (cn === null)
            throw Error(U(160));
          go(d, m, c), cn = null, Xn = !1;
          var M = c.alternate;
          M !== null && (M.return = null), c.return = null;
        } catch (A) {
          Mn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        $v(r, n), r = r.sibling;
  }
  function $v(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), Ei(n), o & 4) {
          try {
            Ms(3, n, n.return), xs(3, n);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
          try {
            Ms(5, n, n.return);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ri(r, n), Ei(n), o & 512 && l !== null && mo(l, l.return);
        break;
      case 5:
        if (ri(r, n), Ei(n), o & 512 && l !== null && mo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Un(c, d), vn(E, m);
              var A = vn(E, d);
              for (m = 0; m < M.length; m += 2) {
                var $ = M[m], Q = M[m + 1];
                $ === "style" ? kt(c, Q) : $ === "dangerouslySetInnerHTML" ? ui(c, Q) : $ === "children" ? ca(c, Q) : Qe(c, $, Q, A);
              }
              switch (E) {
                case "input":
                  Dn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var Y = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var oe = d.value;
                  oe != null ? vr(c, !!d.multiple, oe, !1) : Y !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[iu] = d;
            } catch (Ce) {
              Mn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (ri(r, n), Ei(n), o & 4) {
          if (n.stateNode === null)
            throw Error(U(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ri(r, n), Ei(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            hl(r.containerInfo);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        break;
      case 4:
        ri(r, n), Ei(n);
        break;
      case 13:
        ri(r, n), Ei(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Fd = Rt())), o & 4 && Yi(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (Vn = (A = Vn) || $, ri(r, n), Vn = A) : ri(r, n), Ei(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !$ && n.mode & 1)
            for (ve = n, $ = n.child; $ !== null; ) {
              for (Q = ve = $; ve !== null; ) {
                switch (Y = ve, oe = Y.child, Y.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ms(4, Y, Y.return);
                    break;
                  case 1:
                    mo(Y, Y.return);
                    var ge = Y.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = Y, l = Y.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        Mn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    mo(Y, Y.return);
                    break;
                  case 22:
                    if (Y.memoizedState !== null) {
                      jd(Q);
                      continue;
                    }
                }
                oe !== null ? (oe.return = Y, ve = oe) : jd(Q);
              }
              $ = $.sibling;
            }
          e:
            for ($ = null, Q = n; ; ) {
              if (Q.tag === 5) {
                if ($ === null) {
                  $ = Q;
                  try {
                    c = Q.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, M = Q.memoizedProps.style, m = M != null && M.hasOwnProperty("display") ? M.display : null, E.style.display = tt("display", m));
                  } catch (Ce) {
                    Mn(n, n.return, Ce);
                  }
                }
              } else if (Q.tag === 6) {
                if ($ === null)
                  try {
                    Q.stateNode.nodeValue = A ? "" : Q.memoizedProps;
                  } catch (Ce) {
                    Mn(n, n.return, Ce);
                  }
              } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
                Q.child.return = Q, Q = Q.child;
                continue;
              }
              if (Q === n)
                break e;
              for (; Q.sibling === null; ) {
                if (Q.return === null || Q.return === n)
                  break e;
                $ === Q && ($ = null), Q = Q.return;
              }
              $ === Q && ($ = null), Q.sibling.return = Q.return, Q = Q.sibling;
            }
        }
        break;
      case 19:
        ri(r, n), Ei(n), o & 4 && Yi(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), Ei(n);
    }
  }
  function Ei(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(U(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Yc(n);
            Si(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Yc(n);
            yo(n, E, m);
            break;
          default:
            throw Error(U(161));
        }
      } catch (M) {
        Mn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qv(n, r, l) {
    ve = n, So(n);
  }
  function So(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ts;
        if (!m) {
          var E = c.alternate, M = E !== null && E.memoizedState !== null || Vn;
          E = Ts;
          var A = Vn;
          if (Ts = m, (Vn = M) && !A)
            for (ve = c; ve !== null; )
              m = ve, M = m.child, m.tag === 22 && m.memoizedState !== null ? Gv(c) : M !== null ? (M.return = m, ve = M) : Gv(c);
          for (; d !== null; )
            ve = d, So(d), d = d.sibling;
          ve = c, Ts = E, Vn = A;
        }
        Wv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : Wv(n);
    }
  }
  function Wv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Vn || xs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Vn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && uu(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  uu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var M = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && l.focus();
                      break;
                    case "img":
                      M.src && (l.src = M.src);
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
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var $ = A.memoizedState;
                    if ($ !== null) {
                      var Q = $.dehydrated;
                      Q !== null && hl(Q);
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
                throw Error(U(163));
            }
          Vn || r.flags & 512 && zd(r);
        } catch (Y) {
          Mn(r, r.return, Y);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function jd(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Gv(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              xs(4, r);
            } catch (M) {
              Mn(r, l, M);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (M) {
                Mn(r, c, M);
              }
            }
            var d = r.return;
            try {
              zd(r);
            } catch (M) {
              Mn(r, d, M);
            }
            break;
          case 5:
            var m = r.return;
            try {
              zd(r);
            } catch (M) {
              Mn(r, m, M);
            }
        }
      } catch (M) {
        Mn(r, r.return, M);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var $c = Math.ceil, Ds = ct.ReactCurrentDispatcher, Ud = ct.ReactCurrentOwner, Er = ct.ReactCurrentBatchConfig, dt = 0, gn = null, Rn = null, Kn = 0, Sa = 0, Eo = Ke(0), Pn = 0, ws = null, $i = 0, Qc = 0, Co = 0, Su = null, Nr = null, Fd = 0, To = 1 / 0, Qi = null, Wc = !1, Eu = null, Ci = null, zl = !1, Al = null, Gc = 0, Ro = 0, qc = null, Cu = -1, Tu = 0;
  function Cr() {
    return dt & 6 ? Rt() : Cu !== -1 ? Cu : Cu = Rt();
  }
  function zn(n) {
    return n.mode & 1 ? dt & 2 && Kn !== 0 ? Kn & -Kn : mc.transition !== null ? (Tu === 0 && (Tu = Bu()), Tu) : (n = bt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Tr(n, r, l, o) {
    if (50 < Ro)
      throw Ro = 0, qc = null, Error(U(185));
    Ni(n, l, o), (!(dt & 2) || n !== gn) && (n === gn && (!(dt & 2) && (Qc |= l), Pn === 4 && Ia(n, Kn)), Rr(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (To = Rt() + 500, Gn && Kr()));
  }
  function Rr(n, r) {
    var l = n.callbackNode;
    fl(n, r);
    var o = br(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? cd(qv.bind(null, n)) : sd(qv.bind(null, n)), ld(function() {
          !(dt & 6) && Kr();
        }), l = null;
      else {
        switch ($u(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = lt;
            break;
          case 16:
            l = di;
            break;
          case 536870912:
            l = Vu;
            break;
          default:
            l = di;
        }
        l = Yd(l, Mo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Mo(n, r) {
    if (Cu = -1, Tu = 0, dt & 6)
      throw Error(U(327));
    var l = n.callbackNode;
    if (Do() && n.callbackNode !== l)
      return null;
    var o = br(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Kc(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Xc();
      (gn !== n || Kn !== r) && (Qi = null, To = Rt() + 500, Ru(n, r));
      do
        try {
          iy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (1);
      md(), Ds.current = d, dt = c, Rn !== null ? r = 0 : (gn = null, Kn = 0, r = Pn);
    }
    if (r !== 0) {
      if (r === 2 && (c = dl(n), c !== 0 && (o = c, r = Id(n, c))), r === 1)
        throw l = ws, Ru(n, 0), Ia(n, o), Rr(n, Rt()), l;
      if (r === 6)
        Ia(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hd(c) && (r = Kc(n, o), r === 2 && (d = dl(n), d !== 0 && (o = d, r = Id(n, d))), r === 1))
          throw l = ws, Ru(n, 0), Ia(n, o), Rr(n, Rt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(U(345));
          case 2:
            Mu(n, Nr, Qi);
            break;
          case 3:
            if (Ia(n, o), (o & 130023424) === o && (r = Fd + 500 - Rt(), 10 < r)) {
              if (br(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = au(Mu.bind(null, n, Nr, Qi), r);
              break;
            }
            Mu(n, Nr, Qi);
            break;
          case 4:
            if (Ia(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - wr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Rt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * $c(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = au(Mu.bind(null, n, Nr, Qi), o);
              break;
            }
            Mu(n, Nr, Qi);
            break;
          case 5:
            Mu(n, Nr, Qi);
            break;
          default:
            throw Error(U(329));
        }
      }
    }
    return Rr(n, Rt()), n.callbackNode === l ? Mo.bind(null, n) : null;
  }
  function Id(n, r) {
    var l = Su;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = Kc(n, r), n !== 2 && (r = Nr, Nr = l, r !== null && bs(r)), n;
  }
  function bs(n) {
    Nr === null ? Nr = n : Nr.push.apply(Nr, n);
  }
  function Hd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!_a(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ia(n, r) {
    for (r &= ~Co, r &= ~Qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - wr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qv(n) {
    if (dt & 6)
      throw Error(U(327));
    Do();
    var r = br(n, 0);
    if (!(r & 1))
      return Rr(n, Rt()), null;
    var l = Kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = dl(n);
      o !== 0 && (r = o, l = Id(n, o));
    }
    if (l === 1)
      throw l = ws, Ru(n, 0), Ia(n, r), Rr(n, Rt()), l;
    if (l === 6)
      throw Error(U(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, Nr, Qi), Rr(n, Rt()), null;
  }
  function xo(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (To = Rt() + 500, Gn && Kr());
    }
  }
  function jl(n) {
    Al !== null && Al.tag === 0 && !(dt & 6) && Do();
    var r = dt;
    dt |= 1;
    var l = Er.transition, o = bt;
    try {
      if (Er.transition = null, bt = 1, n)
        return n();
    } finally {
      bt = o, Er.transition = l, dt = r, !(dt & 6) && Kr();
    }
  }
  function Vd() {
    Sa = Eo.current, Lt(Eo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Rv(l)), Rn !== null)
      for (l = Rn.return; l !== null; ) {
        var o = l;
        switch (dd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && La();
            break;
          case 3:
            Nl(), Lt(Tn), Lt(Ve), Tc();
            break;
          case 5:
            ot(o);
            break;
          case 4:
            Nl();
            break;
          case 13:
            Lt(ze);
            break;
          case 19:
            Lt(ze);
            break;
          case 10:
            Dl(o.type._context);
            break;
          case 22:
          case 23:
            Vd();
        }
        l = l.return;
      }
    if (gn = n, Rn = n = Ul(n.current, null), Kn = Sa = r, Pn = 0, ws = null, Co = Qc = $i = 0, Nr = Su = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (l = rr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = Rn;
      try {
        if (md(), Rc.current = Ic, je) {
          for (var o = an.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          je = !1;
        }
        if (su = 0, yt = H = an = null, gi = !1, ga = 0, Ud.current = null, l === null || l.return === null) {
          Pn = 1, ws = r, Rn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, M = r;
          if (r = Kn, E.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var A = M, $ = E, Q = $.tag;
            if (!($.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var Y = $.alternate;
              Y ? ($.updateQueue = Y.updateQueue, $.memoizedState = Y.memoizedState, $.lanes = Y.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var oe = xd(m);
            if (oe !== null) {
              oe.flags &= -257, Dd(oe, m, E, d, r), oe.mode & 1 && Fv(d, A, r), r = oe, M = A;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(M), r.updateQueue = Ce;
              } else
                ge.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                Fv(d, A, r), Pd();
                break e;
              }
              M = Error(U(426));
            }
          } else if (rn && E.mode & 1) {
            var _n = xd(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), Dd(_n, m, E, d, r), vd(po(M, E));
              break e;
            }
          }
          d = M = po(M, E), Pn !== 4 && (Pn = 2), Su === null ? Su = [d] : Su.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = Uv(d, M, r);
                Sd(d, b);
                break e;
              case 1:
                E = M;
                var D = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof D.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Ci === null || !Ci.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Ss(d, E, r);
                  Sd(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Bd(l);
      } catch (Te) {
        r = Te, Rn === l && l !== null && (Rn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Xc() {
    var n = Ds.current;
    return Ds.current = Ic, n === null ? Ic : n;
  }
  function Pd() {
    (Pn === 0 || Pn === 3 || Pn === 2) && (Pn = 4), gn === null || !($i & 268435455) && !(Qc & 268435455) || Ia(gn, Kn);
  }
  function Kc(n, r) {
    var l = dt;
    dt |= 2;
    var o = Xc();
    (gn !== n || Kn !== r) && (Qi = null, Ru(n, r));
    do
      try {
        ay();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (1);
    if (md(), dt = l, Ds.current = o, Rn !== null)
      throw Error(U(261));
    return gn = null, Kn = 0, Pn;
  }
  function ay() {
    for (; Rn !== null; )
      Kv(Rn);
  }
  function iy() {
    for (; Rn !== null && !fi(); )
      Kv(Rn);
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Bd(n) : Rn = r, Ud.current = null;
  }
  function Bd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Od(l, r), l !== null) {
          l.flags &= 32767, Rn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Pn = 6, Rn = null;
          return;
        }
      } else if (l = ry(l, r, Sa), l !== null) {
        Rn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Rn = r;
        return;
      }
      Rn = r = n;
    } while (r !== null);
    Pn === 0 && (Pn = 5);
  }
  function Mu(n, r, l) {
    var o = bt, c = Er.transition;
    try {
      Er.transition = null, bt = 1, ly(n, r, l, o);
    } finally {
      Er.transition = c, bt = o;
    }
    return null;
  }
  function ly(n, r, l, o) {
    do
      Do();
    while (Al !== null);
    if (dt & 6)
      throw Error(U(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(U(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (If(n, d), n === gn && (Rn = gn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zl || (zl = !0, Yd(di, function() {
      return Do(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var m = bt;
      bt = 1;
      var E = dt;
      dt |= 4, Ud.current = null, Bv(n, l), $v(l, n), ic(ru), ba = !!ad, ru = ad = null, n.current = l, Qv(l), Hu(), dt = E, bt = m, Er.transition = d;
    } else
      n.current = l;
    if (zl && (zl = !1, Al = n, Gc = c), d = n.pendingLanes, d === 0 && (Ci = null), Qo(l.stateNode), Rr(n, Rt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wc)
      throw Wc = !1, n = Eu, Eu = null, n;
    return Gc & 1 && n.tag !== 0 && Do(), d = n.pendingLanes, d & 1 ? n === qc ? Ro++ : (Ro = 0, qc = n) : Ro = 0, Kr(), null;
  }
  function Do() {
    if (Al !== null) {
      var n = $u(Gc), r = Er.transition, l = bt;
      try {
        if (Er.transition = null, bt = 16 > n ? 16 : n, Al === null)
          var o = !1;
        else {
          if (n = Al, Al = null, Gc = 0, dt & 6)
            throw Error(U(331));
          var c = dt;
          for (dt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var M = 0; M < E.length; M++) {
                  var A = E[M];
                  for (ve = A; ve !== null; ) {
                    var $ = ve;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ms(8, $, d);
                    }
                    var Q = $.child;
                    if (Q !== null)
                      Q.return = $, ve = Q;
                    else
                      for (; ve !== null; ) {
                        $ = ve;
                        var Y = $.sibling, oe = $.return;
                        if (Ad($), $ === A) {
                          ve = null;
                          break;
                        }
                        if (Y !== null) {
                          Y.return = oe, ve = Y;
                          break;
                        }
                        ve = oe;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var _n = Ce.sibling;
                      Ce.sibling = null, Ce = _n;
                    } while (Ce !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, ve = m;
            else
              e:
                for (; ve !== null; ) {
                  if (d = ve, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ms(9, d, d.return);
                    }
                  var b = d.sibling;
                  if (b !== null) {
                    b.return = d.return, ve = b;
                    break e;
                  }
                  ve = d.return;
                }
          }
          var D = n.current;
          for (ve = D; ve !== null; ) {
            m = ve;
            var k = m.child;
            if (m.subtreeFlags & 2064 && k !== null)
              k.return = m, ve = k;
            else
              e:
                for (m = D; ve !== null; ) {
                  if (E = ve, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xs(9, E);
                      }
                    } catch (Te) {
                      Mn(E, E.return, Te);
                    }
                  if (E === m) {
                    ve = null;
                    break e;
                  }
                  var q = E.sibling;
                  if (q !== null) {
                    q.return = E.return, ve = q;
                    break e;
                  }
                  ve = E.return;
                }
          }
          if (dt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ol, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        bt = l, Er.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = po(l, r), r = Uv(n, r, 1), n = bl(n, r, 1), r = Cr(), n !== null && (Ni(n, 1, r), Rr(n, r));
  }
  function Mn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ci === null || !Ci.has(o))) {
            n = po(l, n), n = Ss(r, n, 1), r = bl(r, n, 1), n = Cr(), r !== null && (Ni(r, 1, n), Rr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function uy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Pn === 4 || Pn === 3 && (Kn & 130023424) === Kn && 500 > Rt() - Fd ? Ru(n, 0) : Co |= l), Rr(n, r);
  }
  function Zc(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = Cr();
    n = Hi(n, r), n !== null && (Ni(n, r, l), Rr(n, l));
  }
  function oy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zc(n, l);
  }
  function sy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(U(314));
    }
    o !== null && o.delete(r), Zc(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Tn.current)
        On = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return On = !1, Bi(n, r, l);
        On = !!(n.flags & 131072);
      }
    else
      On = !1, rn && r.flags & 1048576 && fd(r, io, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = ka(r, Ve.current);
        te(r, l), c = kl(null, r, o, n, c, l);
        var d = du();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, fc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = Sc, r.stateNode = c, c._reactInternals = r, Ec(r, o, n, l), r = Iv(null, r, o, !0, d, l)) : (r.tag = 0, rn && d && dc(r), In(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = fy(o), n = ya(o, n), c) {
            case 0:
              r = vo(null, r, o, n, l);
              break e;
            case 1:
              r = wd(null, r, o, n, l);
              break e;
            case 11:
              r = Ol(null, r, o, n, l);
              break e;
            case 14:
              r = Vc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(U(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), vo(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), wd(n, r, o, c, l);
      case 3:
        e: {
          if (Hv(r), n === null)
            throw Error(U(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fn(n, r), _l(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = po(Error(U(423)), r), r = Pc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = po(Error(U(424)), r), r = Pc(n, r, o, l, c);
              break e;
            } else
              for (ea = ti(r.stateNode.containerInfo.firstChild), ma = r, rn = !0, za = null, l = Av(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, l);
              break e;
            }
            In(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Le(r), n === null && vc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, us(o, c) ? m = null : d !== null && us(o, d) && (r.flags |= 32), Ze(n, r), In(n, r, m, l), r.child;
      case 6:
        return n === null && vc(r), null;
      case 13:
        return _d(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = uo(r, null, o, l) : In(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ol(n, r, o, c, l);
      case 7:
        return In(n, r, r.pendingProps, l), r.child;
      case 8:
        return In(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return In(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, It(yi, o._currentValue), o._currentValue = m, d !== null)
            if (_a(d.value, m)) {
              if (d.children === c.children && !Tn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var M = E.firstContext; M !== null; ) {
                    if (M.context === o) {
                      if (d.tag === 1) {
                        M = Vi(-1, l & -l), M.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var $ = A.pending;
                          $ === null ? M.next = M : (M.next = $.next, $.next = M), A.pending = M;
                        }
                      }
                      d.lanes |= l, M = d.alternate, M !== null && (M.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    M = M.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(U(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), qn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          In(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, te(r, l), c = bn(c), o = o(c), r.flags |= 1, In(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Vc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, sn(o) ? (n = !0, fc(r)) : n = !1, te(r, l), kv(r, o, c), Ec(r, o, c, l), Iv(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return mu(n, r, l);
    }
    throw Error(U(156, r.tag));
  };
  function Yd(n, r) {
    return Jt(n, r);
  }
  function cy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new cy(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fy(n) {
    if (typeof n == "function")
      return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Ot)
        return 14;
    }
    return 2;
  }
  function Ul(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Jc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      $d(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Fe:
            return xu(l.children, c, d, r);
          case tn:
            m = 8, c |= 8;
            break;
          case xn:
            return n = Ha(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
          case Ae:
            return n = Ha(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
          case qe:
            return n = Ha(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case ye:
            return _s(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Yt:
                  m = 10;
                  break e;
                case wt:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Ot:
                  m = 14;
                  break e;
                case Tt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(U(130, n == null ? n : typeof n, ""));
        }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function xu(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function _s(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ns(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Du(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function dy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yu(0), this.expirationTimes = Yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ef(n, r, l, o, c, d, m, E, M) {
    return n = new dy(n, r, l, E, M), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n)
      return mi;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1)
        throw Error(U(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(U(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (sn(l))
        return cs(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, m, E, M) {
    return n = ef(l, o, !0, n, c, d, m, E, M), n.context = Qd(null), l = n.current, o = Cr(), c = zn(l), d = Vi(o, c), d.callback = r ?? null, bl(l, d, c), n.current.lanes = c, Ni(n, c, o), Rr(n, o), n;
  }
  function ks(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Vi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = bl(c, r, m), n !== null && (Tr(n, c, m, d), gc(n, c, m)), m;
  }
  function tf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function nh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r);
  }
  function rh() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function nf(n) {
    this._internalRoot = n;
  }
  Wi.prototype.render = nf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(U(409));
    ks(n, r, null, null);
  }, Wi.prototype.unmount = nf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      jl(function() {
        ks(null, n, null, null);
      }), r[Fi] = null;
    }
  };
  function Wi(n) {
    this._internalRoot = n;
  }
  Wi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Wu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ft.length && r !== 0 && r < Ft[l].priority; l++)
        ;
      Ft.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function py(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = tf(m);
          d.call(A);
        };
      }
      var m = th(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = m, n[Fi] = m.current, ro(n.nodeType === 8 ? n.parentNode : n), jl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = tf(M);
        E.call(A);
      };
    }
    var M = ef(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = M, n[Fi] = M.current, ro(n.nodeType === 8 ? n.parentNode : n), jl(function() {
      ks(r, M, l, o);
    }), M;
  }
  function af(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var M = tf(m);
          E.call(M);
        };
      }
      ks(r, m, n, c);
    } else
      m = py(l, r, n, c, o);
    return tf(m);
  }
  Xl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (pi(r, l | 1), Rr(r, Rt()), !(dt & 6) && (To = Rt() + 500, Kr()));
        }
        break;
      case 13:
        jl(function() {
          var o = Hi(n, 1);
          if (o !== null) {
            var c = Cr();
            Tr(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Qu = function(n) {
    if (n.tag === 13) {
      var r = Hi(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Tr(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, Mt = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = Hi(n, r);
      if (l !== null) {
        var o = Cr();
        Tr(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Wu = function() {
    return bt;
  }, Gu = function(n, r) {
    var l = bt;
    try {
      return bt = n, r();
    } finally {
      bt = l;
    }
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = be(o);
              if (!c)
                throw Error(U(90));
              Vr(o), Dn(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, l);
        break;
      case "select":
        r = l.value, r != null && vr(n, !!l.multiple, r, !1);
    }
  }, ql = xo, Iu = jl;
  var vy = { usingClientEntryPoint: !1, Events: [ss, ao, be, Da, il, xo] }, wo = { findFiberByHostInstance: Na, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, hy = { bundleType: wo.bundleType, version: wo.version, rendererPackageName: wo.rendererPackageName, rendererConfig: wo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = kn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: wo.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lf.isDisabled && lf.supportsFiber)
      try {
        ol = lf.inject(hy), Qr = lf;
      } catch {
      }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r))
      throw Error(U(200));
    return eh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!qd(n))
      throw Error(U(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ef(n, 1, !1, null, null, l, !1, o, c), n[Fi] = r.current, ro(n.nodeType === 8 ? n.parentNode : n), new nf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(U(188)) : (n = Object.keys(n).join(","), Error(U(268, n)));
    return n = kn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return jl(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!rf(r))
      throw Error(U(200));
    return af(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!qd(n))
      throw Error(U(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = th(r, null, n, 1, l ?? null, c, !1, d, m), n[Fi] = r.current, ro(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Wi(r);
  }, Qa.render = function(n, r, l) {
    if (!rf(r))
      throw Error(U(200));
    return af(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rf(n))
      throw Error(U(40));
    return n._reactRootContainer ? (jl(function() {
      af(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = xo, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rf(l))
      throw Error(U(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(U(38));
    return af(n, r, l, !1, o);
  }, Qa.version = "18.2.0-next-9e3b772b8-20220608", Qa;
}
var Wa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function Zw() {
  return e1 || (e1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Z = Uf, J = n1(), U = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kt = !1;
    function on(e) {
      Kt = e;
    }
    function nt(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Bt("warn", e, a);
      }
    }
    function S(e) {
      if (!Kt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Bt("error", e, a);
      }
    }
    function Bt(e, t, a) {
      {
        var i = U.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var he = 0, pe = 1, rt = 2, re = 3, me = 4, ie = 5, He = 6, Ct = 7, st = 8, fn = 9, at = 10, Qe = 11, ct = 12, De = 13, it = 14, Fe = 15, tn = 16, xn = 17, Yt = 18, wt = 19, En = 21, Ae = 22, qe = 23, Ot = 24, Tt = 25, ye = !0, X = !1, Me = !1, R = !1, P = !1, le = !0, Be = !1, Ue = !1, ht = !0, Je = !0, ft = !0, et = /* @__PURE__ */ new Set(), zt = {}, Hr = {};
    function pr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      zt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), zt[e] = t;
      {
        var a = e.toLowerCase();
        Hr[a] = e, e === "onDoubleClick" && (Hr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function jn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Un(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function Pr(e, t) {
      if (Un(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), Dn(e);
    }
    function Br(e) {
      if (Un(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), Dn(e);
    }
    function $n(e, t) {
      if (Un(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), Dn(e);
    }
    function vr(e, t) {
      if (Un(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), Dn(e);
    }
    function Yr(e) {
      if (Un(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), Dn(e);
    }
    function hr(e) {
      if (Un(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jn(e)), Dn(e);
    }
    var sa = 0, er = 1, $r = 2, pn = 3, Mr = 4, ui = 5, ca = 6, K = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = K + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + K + "][" + xe + "]*$"), kt = {}, At = {};
    function wn(e) {
      return Yn.call(At, e) ? !0 : Yn.call(kt, e) ? !1 : tt.test(e) ? (At[e] = !0, !0) : (kt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Vt(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case Mr:
            return t === !1;
          case ui:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return Ut.hasOwnProperty(e) ? Ut[e] : null;
    }
    function jt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === $r || t === pn || t === Mr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ut = {}, Ga = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ga.forEach(function(e) {
      Ut[e] = new jt(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ut[t] = new jt(
        t,
        er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ut[e] = new jt(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ut[e] = new jt(
        e,
        $r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ut[e] = new jt(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new jt(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new jt(
        e,
        Mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new jt(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ut[e] = new jt(
        e,
        ui,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Da = /[\-\:]([a-z])/g, il = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, il);
      Ut[t] = new jt(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, il);
      Ut[t] = new jt(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Da, il);
      Ut[t] = new jt(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ut[e] = new jt(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ql = "xlinkHref";
    Ut[ql] = new jt(
      "xlinkHref",
      er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ut[e] = new jt(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Iu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, _i = !1;
    function ll(e) {
      !_i && Iu.test(e) && (_i = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Pr(a, t), i.sanitizeURL && ll("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Mr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Vt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return Vt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!wn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Pr(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = xr(t);
      if (!vn(t, u, i)) {
        if (Vt(t, a, u, i) && (a = null), i || u === null) {
          if (wn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Pr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var w = u.type, x;
          w === pn || w === Mr && a === !0 ? x = "" : (Pr(a, y), x = "" + a, u.sanitizeURL && ll(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var si = Symbol.for("react.element"), Dr = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), ee = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), kn = Symbol.for("react.scope"), Zt = Symbol.for("react.debug_trace_mode"), Jt = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), fi = Symbol.for("react.cache"), Hu = Symbol.for("react.tracing_marker"), Rt = Symbol.iterator, Ff = "@@iterator";
    function qa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Rt && e[Rt] || e[Ff];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, di = 0, ul, Vu, ol, Qr, Qo, wr, Wo;
    function Go() {
    }
    Go.__reactDisabledLog = !0;
    function Xs() {
      {
        if (di === 0) {
          ul = console.log, Vu = console.info, ol = console.warn, Qr = console.error, Qo = console.group, wr = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Go,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function Pu() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: ul
            }),
            info: lt({}, e, {
              value: Vu
            }),
            warn: lt({}, e, {
              value: ol
            }),
            error: lt({}, e, {
              value: Qr
            }),
            group: lt({}, e, {
              value: Qo
            }),
            groupCollapsed: lt({}, e, {
              value: wr
            }),
            groupEnd: lt({}, e, {
              value: Wo
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sl = U.ReactCurrentDispatcher, Xa;
    function br(e, t, a) {
      {
        if (Xa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xa = i && i[1] || "";
          }
        return `
` + Xa + e;
      }
    }
    var cl = !1, fl;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      fl = new dl();
    }
    function Bu(e, t) {
      if (!e || cl)
        return "";
      {
        var a = fl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      cl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = sl.current, sl.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var w = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && fl.set(e, w), w;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        cl = !1, sl.current = s, Pu(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", L = x ? br(x) : "";
      return typeof e == "function" && fl.set(e, L), L;
    }
    function Yu(e, t, a) {
      return Bu(e, !0);
    }
    function Ni(e, t, a) {
      return Bu(e, !1);
    }
    function If(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bu(e, If(e));
      if (typeof e == "string")
        return br(e);
      switch (e) {
        case Ge:
          return br("Suspense");
        case mt:
          return br("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return Ni(e.render);
          case Xe:
            return pi(e.type, t, a);
          case _e: {
            var i = e, u = i._payload, s = i._init;
            try {
              return pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function bt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return br(e.type);
        case tn:
          return br("Lazy");
        case De:
          return br("Suspense");
        case wt:
          return br("SuspenseList");
        case he:
        case rt:
        case Fe:
          return Ni(e.type);
        case Qe:
          return Ni(e.type.render);
        case pe:
          return Yu(e.type);
        default:
          return "";
      }
    }
    function $u(e) {
      try {
        var t = "", a = e;
        do
          t += bt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Xl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Qu(e) {
      return e.displayName || "Context";
    }
    function Mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case Dr:
          return "Portal";
        case T:
          return "Profiler";
        case ci:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ee:
            var t = e;
            return Qu(t) + ".Consumer";
          case B:
            var a = e;
            return Qu(a._context) + ".Provider";
          case ce:
            return Xl(e, e.render, "ForwardRef");
          case Xe:
            var i = e.displayName || null;
            return i !== null ? i : Mt(e.type) || "Memo";
          case _e: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Gu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case fn:
          var i = a;
          return Gu(i) + ".Consumer";
        case at:
          var u = a;
          return Gu(u._context) + ".Provider";
        case Yt:
          return "DehydratedFragment";
        case Qe:
          return Wu(a, a.render, "ForwardRef");
        case Ct:
          return "Fragment";
        case ie:
          return a;
        case me:
          return "Portal";
        case re:
          return "Root";
        case He:
          return "Text";
        case tn:
          return Mt(a);
        case st:
          return a === ci ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ct:
          return "Profiler";
        case En:
          return "Scope";
        case De:
          return "Suspense";
        case wt:
          return "SuspenseList";
        case Tt:
          return "TracingMarker";
        case pe:
        case he:
        case xn:
        case rt:
        case it:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = U.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function _r() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function pl() {
      return hn === null ? "" : $u(hn);
    }
    function Cn() {
      Kl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Ft(e) {
      Kl.getCurrentStack = e === null ? null : pl, hn = e, Wr = !1;
    }
    function Ks() {
      return hn;
    }
    function Gr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function vi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ki(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Js(e) {
      return e._valueTracker;
    }
    function wa(e) {
      e._valueTracker = null;
    }
    function hl(e) {
      var t = "";
      return e && (vl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ml(e) {
      var t = vl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            wa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ba(e) {
      Js(e) || (e._valueTracker = ml(e));
    }
    function qu(e) {
      if (!e)
        return !1;
      var t = Js(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function yl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var gl = !1, Zl = !1, Xu = !1, qo = !1;
    function Ka(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      ki("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), Zl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), gl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: vi(t.value != null ? t.value : i),
        controlled: Ka(t)
      };
    }
    function O(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = Ka(t);
        !a._wrapperState.controlled && i && !qo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), qo = !0), a._wrapperState.controlled && !i && !Xu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0);
      }
      O(e, t);
      var u = vi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ke(a, t.type, u) : t.hasOwnProperty("defaultValue") && ke(a, t.type, vi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Oe(e, t) {
      var a = e;
      j(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Pr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qu(f), j(f, p);
          }
        }
      }
    }
    function ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || yl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var ut = !1, xt = !1, Wt = !1;
    function Pt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Wt || (Wt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ut && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ut = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Qn(vi(t.value)));
    }
    var en = Array.isArray;
    function vt(e) {
      return en(e);
    }
    var Li;
    Li = !1;
    function Ku() {
      var e = _r();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Xo = ["value", "defaultValue"];
    function Hf(e) {
      {
        ki("select", e);
        for (var t = 0; t < Xo.length; t++) {
          var a = Xo[t];
          if (e[a] != null) {
            var i = vt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ku()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ku());
          }
        }
      }
    }
    function Za(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(vi(a)), w = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          w === null && !u[x].disabled && (w = u[x]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function Ko(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function Zo(e, t) {
      var a = e;
      Hf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Za(a, !!t.multiple, i, !1) : t.defaultValue != null && Za(a, !!t.multiple, t.defaultValue, !0);
    }
    function jm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Za(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Za(a, !!t.multiple, t.defaultValue, !0) : Za(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Um(e, t) {
      var a = e, i = t.value;
      i != null && Za(a, !!t.multiple, i, !1);
    }
    var Pf = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      ki("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Pf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component"), Pf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (vt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: vi(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = vi(t.value), u = vi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Yf(e, t) {
      Kp(e, t);
    }
    var Oi = "http://www.w3.org/1999/xhtml", Fm = "http://www.w3.org/1998/Math/MathML", $f = "http://www.w3.org/2000/svg";
    function ec(e) {
      switch (e) {
        case "svg":
          return $f;
        case "math":
          return Fm;
        default:
          return Oi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Oi ? ec(t) : e === $f && t === "foreignObject" ? Oi : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, tc, Jp = Im(function(e, t) {
      if (e.namespaceURI === $f && !("innerHTML" in e)) {
        tc = tc || document.createElement("div"), tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, zi = 3, Ln = 8, Ja = 9, Jl = 11, nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      nv.forEach(function(t) {
        Zu[tv(t, e)] = Zu[e];
      });
    });
    function rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var Ju = /([A-Z])/g, Hm = /^ms-/;
    function Vm(e) {
      return e.replace(Ju, "-$1").toLowerCase().replace(Hm, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Jo = /-(.)/g, eo = /;\s*$/, to = {}, no = {}, lv = !1, Wf = !1, Gf = function(e) {
        return e.replace(Jo, function(t, a) {
          return a.toUpperCase();
        });
      }, qf = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Gf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        no.hasOwnProperty(t) && no[t] || (no[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eo, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Pm = function(e, t) {
        Wf || (Wf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? qf(e) : av.test(e) ? uv(e) : eo.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || Pm(e, t));
      };
    }
    var Bm = rv;
    function Ym(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Vm(i)) + ":", t += rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Bm(i, t[i]);
          var s = rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function $m(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function _a(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function es(e, t) {
      {
        if (!t)
          return;
        var a = _a(e), i = _a(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $m(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, dv = lt({
      menuitem: !0
    }, fv), pv = "__html";
    function ac(e, t) {
      if (t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ic = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ei = {}, Xf = new RegExp("^(aria)-[" + xe + "]*$"), ts = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function Kf(e, t) {
      {
        if (Yn.call(ei, t) && ei[t])
          return !0;
        if (ts.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ei[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ei[t] = !0, !0;
        }
        if (Xf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ei[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ei[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Kf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      Ai(e, t) || hv(e, t);
    }
    var eu = !1;
    function Zf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !eu && (eu = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Jf = function() {
    };
    {
      var Wn = {}, ed = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + xe + "]*$"), gv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      Jf = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (ed.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === sa;
        if (ic.hasOwnProperty(u)) {
          var g = ic[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Jf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      Ai(e, t) || Sv(e, t, a);
    }
    var ji = 1, ns = 2, tu = 4, Qm = ji | ns | tu, rs = null;
    function as(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function Wm() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function Cv(e) {
      return e === rs;
    }
    function uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === zi ? t.parentNode : t;
    }
    var qt = null, Sl = null, Ui = null;
    function ro(e) {
      var t = No(e);
      if (t) {
        if (typeof qt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ch(a);
          qt(t.stateNode, t.type, i);
        }
      }
    }
    function Tv(e) {
      qt = e;
    }
    function oc(e) {
      Sl ? Ui ? Ui.push(e) : Ui = [e] : Sl = e;
    }
    function is() {
      return Sl !== null || Ui !== null;
    }
    function ls() {
      if (Sl) {
        var e = Sl, t = Ui;
        if (Sl = null, Ui = null, ro(e), t)
          for (var a = 0; a < t.length; a++)
            ro(t[a]);
      }
    }
    var nu = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function Gm() {
      var e = is();
      e && (td(), ls());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return nu(e, t, a);
      } finally {
        nd = !1, Gm();
      }
    }
    function sc(e, t, a) {
      nu = e, td = a;
    }
    function cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && cc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (dn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        us = !1;
      }
    function Rv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var id = Rv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      id = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, x = !0, L = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          ld.removeEventListener(I, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var fe = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          w = !0, F(), a.apply(i, fe), x = !1;
        }
        var Re, St = !1, pt = !1;
        function _(N) {
          if (Re = N.error, St = !0, Re === null && N.colno === 0 && N.lineno === 0 && (pt = !0), N.defaultPrevented && Re != null && typeof Re == "object")
            try {
              Re._suppressLogging = !0;
            } catch {
            }
        }
        var I = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), ld.addEventListener(I, Ne, !1), g.initEvent(I, !1, !1), ld.dispatchEvent(g), z && Object.defineProperty(window, "event", z), w && x && (St ? pt && (Re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Re)), window.removeEventListener("error", _), !w)
          return F(), Rv.apply(this, arguments);
      };
    }
    var qm = id, El = !1, ti = null, os = !1, Cl = null, hi = {
      onError: function(e) {
        El = !0, ti = e;
      }
    };
    function iu(e, t, a, i, u, s, f, p, v) {
      El = !1, ti = null, qm.apply(hi, arguments);
    }
    function Fi(e, t, a, i, u, s, f, p, v) {
      if (iu.apply(this, arguments), El) {
        var y = od();
        os || (os = !0, Cl = y);
      }
    }
    function ud() {
      if (os) {
        var e = Cl;
        throw os = !1, Cl = null, e;
      }
    }
    function Xm() {
      return El;
    }
    function od() {
      if (El) {
        var e = ti;
        return El = !1, ti = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Na(e) {
      return e._reactInternals;
    }
    function ss(e) {
      return e._reactInternals !== void 0;
    }
    function ao(e, t) {
      e._reactInternals = t;
    }
    var be = (
      /*                      */
      0
    ), Tl = (
      /*                */
      1
    ), nn = (
      /*                    */
      2
    ), Ke = (
      /*                       */
      4
    ), Lt = (
      /*                */
      16
    ), It = (
      /*                 */
      32
    ), mi = (
      /*                     */
      64
    ), Ve = (
      /*                   */
      128
    ), Tn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), ka = (
      /*                     */
      1024
    ), sn = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), cs = (
      /*             */
      16384
    ), fc = sn | Ke | mi | Xr | ka | cs, Mv = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), fs = (
      /* */
      131072
    ), sd = (
      /*                       */
      1048576
    ), cd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), Ml = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), lu = (
      /*              */
      33554432
    ), io = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ke | ka | 0
    ), Jr = nn | Ke | Lt | It | Xr | La | Rl, yr = Ke | mi | Xr | Rl, Oa = sn | Lt, nr = Kr | Ml | cd, Ii = U.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (nn | La)) !== be && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function fd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function dc(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Ii.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Na(e);
      return u ? ha(u) === u : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function rn(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function za(e) {
      var t = rn(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === ie || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = rn(e);
      return t !== null ? pc(t) : null;
    }
    function pc(e) {
      if (e.tag === ie || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vc = J.unstable_scheduleCallback, Dv = J.unstable_cancelCallback, hc = J.unstable_shouldYield, wv = J.unstable_requestPaint, mn = J.unstable_now, vd = J.unstable_getCurrentPriorityLevel, mc = J.unstable_ImmediatePriority, ya = J.unstable_UserBlockingPriority, yi = J.unstable_NormalPriority, yc = J.unstable_LowPriority, xl = J.unstable_IdlePriority, hd = J.unstable_yieldValue, md = J.unstable_setDisableYieldValue, Dl = null, qn = null, te = null, bn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ht && (e = lt({}, e, {
          getLaneLabelMap: bl,
          injectProfilingHooks: Vi
        })), Dl = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function bv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(Dl, e, t);
        } catch (a) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Hi(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ve) === Ve;
          if (Je) {
            var i;
            switch (t) {
              case gr:
                i = mc;
                break;
              case ar:
                i = ya;
                break;
              case Bi:
                i = yi;
                break;
              case Es:
                i = xl;
                break;
              default:
                i = yi;
                break;
            }
            qn.onCommitFiberRoot(Dl, e, i, a);
          }
        } catch (u) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function wl(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(Dl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(Dl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Fn(e) {
      if (typeof hd == "function" && (md(e), on(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(Dl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vi(e) {
      te = e;
    }
    function bl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < an; a++) {
          var i = Km(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function gc(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Sd() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function _l(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function uu() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function _v(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Sc(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Nv() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function kv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function Lv() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Ec(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Cc(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function Ov(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function zv(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function uo() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Av(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function ds() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function ni(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function ps() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function oo() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function ou(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function Cd(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function Nl(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Le = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), ze = (
      /*                    */
      2
    ), yn = (
      /*               */
      8
    ), Aa = (
      /*              */
      16
    ), Tc = Math.clz32 ? Math.clz32 : su, Rc = Math.log, Td = Math.LN2;
    function su(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Rc(t) / Td | 0) | 0;
    }
    var an = 31, H = (
      /*                        */
      0
    ), yt = (
      /*                          */
      0
    ), je = (
      /*                        */
      1
    ), gi = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), cu = (
      /*            */
      8
    ), ln = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), kl = (
      /*                       */
      4194240
    ), du = (
      /*                        */
      64
    ), ja = (
      /*                        */
      128
    ), ta = (
      /*                        */
      256
    ), pu = (
      /*                        */
      512
    ), vs = (
      /*                        */
      1024
    ), hs = (
      /*                        */
      2048
    ), Mc = (
      /*                        */
      4096
    ), xc = (
      /*                        */
      8192
    ), Dc = (
      /*                        */
      16384
    ), wc = (
      /*                       */
      32768
    ), bc = (
      /*                       */
      65536
    ), _c = (
      /*                       */
      131072
    ), Nc = (
      /*                       */
      262144
    ), kc = (
      /*                       */
      524288
    ), vu = (
      /*                       */
      1048576
    ), Lc = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), Pi = (
      /*                             */
      4194304
    ), Oc = (
      /*                             */
      8388608
    ), ms = (
      /*                             */
      16777216
    ), zc = (
      /*                             */
      33554432
    ), Ac = (
      /*                             */
      67108864
    ), Rd = Pi, so = (
      /*          */
      134217728
    ), jc = (
      /*                          */
      268435455
    ), co = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function Km(e) {
      {
        if (e & je)
          return "Sync";
        if (e & gi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & cu)
          return "DefaultHydration";
        if (e & ln)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & kl)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & so)
          return "SelectiveHydration";
        if (e & co)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Xt = -1, Uc = du, Fc = Pi;
    function fo(e) {
      switch (On(e)) {
        case je:
          return je;
        case gi:
          return gi;
        case ga:
          return ga;
        case cu:
          return cu;
        case ln:
          return ln;
        case fu:
          return fu;
        case du:
        case ja:
        case ta:
        case pu:
        case vs:
        case hs:
        case Mc:
        case xc:
        case Dc:
        case wc:
        case bc:
        case _c:
        case Nc:
        case kc:
        case vu:
        case Lc:
          return e & kl;
        case Pi:
        case Oc:
        case ms:
        case zc:
        case Ac:
          return e & hu;
        case so:
          return so;
        case co:
          return co;
        case Ll:
          return Ll;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ys(e, t) {
      var a = e.pendingLanes;
      if (a === H)
        return H;
      var i = H, u = e.suspendedLanes, s = e.pingedLanes, f = a & jc;
      if (f !== H) {
        var p = f & ~u;
        if (p !== H)
          i = fo(p);
        else {
          var v = f & s;
          v !== H && (i = fo(v));
        }
      } else {
        var y = a & ~u;
        y !== H ? i = fo(y) : s !== H && (i = fo(s));
      }
      if (i === H)
        return H;
      if (t !== H && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === H) {
        var g = On(i), w = On(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ln && (w & kl) !== H
        )
          return t;
      }
      (i & ga) !== H && (i |= a & ln);
      var x = e.entangledLanes;
      if (x !== H)
        for (var L = e.entanglements, z = i & x; z > 0; ) {
          var F = Ol(z), fe = 1 << F;
          i |= L[F], z &= ~fe;
        }
      return i;
    }
    function jv(e, t) {
      for (var a = e.eventTimes, i = Xt; t > 0; ) {
        var u = Ol(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case je:
        case gi:
        case ga:
          return t + 250;
        case cu:
        case ln:
        case fu:
        case du:
        case ja:
        case ta:
        case pu:
        case vs:
        case hs:
        case Mc:
        case xc:
        case Dc:
        case wc:
        case bc:
        case _c:
        case Nc:
        case kc:
        case vu:
        case Lc:
          return t + 5e3;
        case Pi:
        case Oc:
        case ms:
        case zc:
        case Ac:
          return Xt;
        case so:
        case co:
        case Ll:
        case na:
          return Xt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Xt;
      }
    }
    function Zm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p, y = s[p];
        y === Xt ? ((v & i) === H || (v & u) !== H) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Jm(e) {
      return fo(e.pendingLanes);
    }
    function Md(e) {
      var t = e.pendingLanes & ~na;
      return t !== H ? t : t & na ? na : H;
    }
    function po(e) {
      return (e & je) !== H;
    }
    function gs(e) {
      return (e & jc) !== H;
    }
    function Hc(e) {
      return (e & hu) === e;
    }
    function ey(e) {
      var t = je | ga | ln;
      return (e & t) === H;
    }
    function Uv(e) {
      return (e & kl) === e;
    }
    function Ss(e, t) {
      var a = gi | ga | cu | ln;
      return (t & a) !== H;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== H;
    }
    function xd(e) {
      return (e & kl) !== H;
    }
    function Dd() {
      var e = Uc;
      return Uc <<= 1, (Uc & kl) === H && (Uc = du), e;
    }
    function ty() {
      var e = Fc;
      return Fc <<= 1, (Fc & hu) === H && (Fc = Pi), e;
    }
    function On(e) {
      return e & -e;
    }
    function In(e) {
      return On(e);
    }
    function Ol(e) {
      return 31 - Tc(e);
    }
    function Vc(e) {
      return Ol(e);
    }
    function ra(e, t) {
      return (e & t) !== H;
    }
    function mu(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function vo(e, t) {
      return e & ~t;
    }
    function wd(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Hv(e, t) {
      return e !== yt && e < t ? e : t;
    }
    function Pc(e) {
      for (var t = [], a = 0; a < an; a++)
        t.push(e);
      return t;
    }
    function yu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = H, e.pingedLanes = H);
      var i = e.eventTimes, u = Vc(t);
      i[u] = a;
    }
    function bd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ol(i), s = 1 << u;
        a[u] = Xt, i &= ~s;
      }
    }
    function _d(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = H, e.pingedLanes = H, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p;
        i[p] = H, u[p] = Xt, s[p] = Xt, f &= ~v;
      }
    }
    function ho(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ol(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ny(e, t) {
      var a = On(t), i;
      switch (a) {
        case ga:
          i = gi;
          break;
        case ln:
          i = cu;
          break;
        case du:
        case ja:
        case ta:
        case pu:
        case vs:
        case hs:
        case Mc:
        case xc:
        case Dc:
        case wc:
        case bc:
        case _c:
        case Nc:
        case kc:
        case vu:
        case Lc:
        case Pi:
        case Oc:
        case ms:
        case zc:
        case Ac:
          i = fu;
          break;
        case Ll:
          i = co;
          break;
        default:
          i = yt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== yt ? yt : i;
    }
    function kd(e, t, a) {
      if (rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Bc(e, t) {
      if (rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ld(e, t) {
      return null;
    }
    var gr = je, ar = ga, Bi = ln, Es = Ll, gu = yt;
    function Ua() {
      return gu;
    }
    function Hn(e) {
      gu = e;
    }
    function Cs(e, t) {
      var a = gu;
      try {
        return gu = e, t();
      } finally {
        gu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ry(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Od(e, t) {
      return e !== 0 && e < t;
    }
    function Ts(e) {
      var t = On(e);
      return Od(gr, t) ? Od(ar, t) ? gs(t) ? Bi : Es : ar : gr;
    }
    function Vn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Vv;
    function ve(e) {
      Vv = e;
    }
    function mo(e) {
      Vv(e);
    }
    var Rs;
    function Pv(e) {
      Rs = e;
    }
    var Bv;
    function Ms(e) {
      Bv = e;
    }
    var xs;
    function zd(e) {
      xs = e;
    }
    var Ad;
    function Yv(e) {
      Ad = e;
    }
    var Yc = !1, yo = [], Si = null, cn = null, Xn = null, Fa = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Yi = [], ri = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function $v(e) {
      return ri.indexOf(e) > -1;
    }
    function Ei(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Si = null;
          break;
        case "dragenter":
        case "dragleave":
          cn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ei(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Rs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Si = So(Si, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return cn = So(cn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = So(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Fa.set(y, So(Fa.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return go.set(w, So(go.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = fd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Bv(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (Vn(s)) {
              e.blockedOn = dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gv(e) {
      for (var t = xs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Yi.length && Od(t, Yi[i].priority); i++)
        ;
      Yi.splice(i, 0, a), i === 0 && jd(a);
    }
    function $c(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Su(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          as(s), u.target.dispatchEvent(s), Wm();
        } else {
          var f = No(i);
          return f !== null && Rs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ds(e, t, a) {
      $c(e) && a.delete(t);
    }
    function Ud() {
      Yc = !1, Si !== null && $c(Si) && (Si = null), cn !== null && $c(cn) && (cn = null), Xn !== null && $c(Xn) && (Xn = null), Fa.forEach(Ds), go.forEach(Ds);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yc || (Yc = !0, J.unstable_scheduleCallback(J.unstable_NormalPriority, Ud)));
    }
    function dt(e) {
      if (yo.length > 0) {
        Er(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Si !== null && Er(Si, e), cn !== null && Er(cn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Fa.forEach(i), go.forEach(i);
      for (var u = 0; u < Yi.length; u++) {
        var s = Yi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Yi.length > 0; ) {
        var f = Yi[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && Yi.shift();
      }
    }
    var gn = U.ReactCurrentBatchConfig, Rn = !0;
    function Kn(e) {
      Rn = !!e;
    }
    function Sa() {
      return Rn;
    }
    function Eo(e, t, a) {
      var i = Nr(t), u;
      switch (i) {
        case gr:
          u = Pn;
          break;
        case ar:
          u = ws;
          break;
        case Bi:
        default:
          u = $i;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Pn(e, t, a, i) {
      var u = Ua(), s = gn.transition;
      gn.transition = null;
      try {
        Hn(gr), $i(e, t, a, i);
      } finally {
        Hn(u), gn.transition = s;
      }
    }
    function ws(e, t, a, i) {
      var u = Ua(), s = gn.transition;
      gn.transition = null;
      try {
        Hn(ar), $i(e, t, a, i);
      } finally {
        Hn(u), gn.transition = s;
      }
    }
    function $i(e, t, a, i) {
      Rn && Qc(e, t, a, i);
    }
    function Qc(e, t, a, i) {
      var u = Su(e, t, a, i);
      if (u === null) {
        Ry(e, t, i, Co, a), Qv(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Qv(e, i), t & tu && $v(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && mo(s);
          var f = Su(e, t, a, i);
          if (f === null && Ry(e, t, i, Co, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ry(e, t, i, null, a);
    }
    var Co = null;
    function Su(e, t, a, i) {
      Co = null;
      var u = uc(i), s = zs(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = fd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (Vn(y))
              return dc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Co = s, null;
    }
    function Nr(e) {
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
          return gr;
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
          return ar;
        case "message": {
          var t = vd();
          switch (t) {
            case mc:
              return gr;
            case ya:
              return ar;
            case yi:
            case yc:
              return Bi;
            case xl:
              return Es;
            default:
              return Bi;
          }
        }
        default:
          return Bi;
      }
    }
    function Fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Eu = null, Ci = null, zl = null;
    function Al(e) {
      return Eu = e, Ci = qc(), !0;
    }
    function Gc() {
      Eu = null, Ci = null, zl = null;
    }
    function Ro() {
      if (zl)
        return zl;
      var e, t = Ci, a = t.length, i, u = qc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = u.slice(e, p), zl;
    }
    function qc() {
      return "value" in Eu ? Eu.value : Eu.textContent;
    }
    function Cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Tu() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Tu : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Tu
      }), t;
    }
    var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rr = zn(Tr), Mo = lt({}, Tr, {
      view: 0,
      detail: 0
    }), Id = zn(Mo), bs, Hd, Ia;
    function qv(e) {
      e !== Ia && (Ia && e.type === "mousemove" ? (bs = e.screenX - Ia.screenX, Hd = e.screenY - Ia.screenY) : (bs = 0, Hd = 0), Ia = e);
    }
    var xo = lt({}, Mo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qv(e), bs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hd;
      }
    }), jl = zn(xo), Vd = lt({}, xo, {
      dataTransfer: 0
    }), Ru = zn(Vd), Xv = lt({}, Mo, {
      relatedTarget: 0
    }), Xc = zn(Xv), Pd = lt({}, Tr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Kc = zn(Pd), ay = lt({}, Tr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), iy = zn(ay), Kv = lt({}, Tr, {
      data: 0
    }), Bd = zn(Kv), Mu = Bd, ly = {
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
    }, Do = {
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
    };
    function Zv(e) {
      if (e.key) {
        var t = ly[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Do[e.keyCode] || "Unidentified" : "";
    }
    var Mn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function uy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Mn[e];
      return i ? !!a[i] : !1;
    }
    function Zc(e) {
      return uy;
    }
    var oy = lt({}, Mo, {
      key: Zv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), sy = zn(oy), Jv = lt({}, xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Yd = zn(Jv), cy = lt({}, Mo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zc
    }), Ha = zn(cy), $d = lt({}, Tr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fy = zn($d), Ul = lt({}, xo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Jc = zn(Ul), xu = [9, 13, 27, 32], _s = 229, Ns = dn && "CompositionEvent" in window, Du = null;
    dn && "documentMode" in document && (Du = document.documentMode);
    var dy = dn && "TextEvent" in window && !Du, ef = dn && (!Ns || Du && Du > 8 && Du <= 11), eh = 32, Qd = String.fromCharCode(eh);
    function th() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ks = !1;
    function tf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function nh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === _s;
    }
    function rh(e, t) {
      switch (e) {
        case "keyup":
          return xu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== _s;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function nf(e) {
      return e.locale === "ko";
    }
    var Wi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Ns ? s = nh(t) : Wi ? rh(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ef && !nf(i) && (!Wi && s === "onCompositionStart" ? Wi = Al(u) : s === "onCompositionEnd" && Wi && (f = Ro()));
      var p = oh(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function rf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (ks = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && ks ? null : i;
        default:
          return null;
      }
    }
    function ah(e, t) {
      if (Wi) {
        if (e === "compositionend" || !Ns && rh(e, t)) {
          var a = Ro();
          return Gc(), Wi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!tf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ef && !nf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function py(e, t, a, i, u) {
      var s;
      if (dy ? s = rf(t, i) : s = ah(t, i), !s)
        return null;
      var f = oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Mu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function af(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), py(e, t, a, i, u);
    }
    var vy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function wo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!vy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function hy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function lf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      oc(i);
      var u = oh(t, "onChange");
      if (u.length > 0) {
        var s = new Rr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, uc(e)), rd(d, t);
    }
    function d(e) {
      M0(e, 0);
    }
    function m(e) {
      var t = df(e);
      if (qu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    dn && (M = hy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Q);
    }
    function $() {
      r && (r.detachEvent("onpropertychange", Q), r = null, l = null);
    }
    function Q(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function Y(e, t, a) {
      e === "focusin" ? ($(), A(t, a)) : e === "focusout" && $();
    }
    function oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return m(t);
    }
    function _n(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function b(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ke(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window, v, y;
      if (o(p) ? v = E : wo(p) ? M ? v = _n : (v = oe, y = Y) : ge(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && b(p);
    }
    function k() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var w = u.ownerDocument;
          w ? g = w.defaultView || w.parentWindow : g = window;
        }
        var x, L;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (x = a, L = z ? zs(z) : null, L !== null) {
            var F = ha(L);
            (L !== F || L.tag !== ie && L.tag !== He) && (L = null);
          }
        } else
          x = null, L = a;
        if (x !== L) {
          var fe = jl, Ne = "onMouseLeave", Re = "onMouseEnter", St = "mouse";
          (t === "pointerout" || t === "pointerover") && (fe = Yd, Ne = "onPointerLeave", Re = "onPointerEnter", St = "pointer");
          var pt = x == null ? g : df(x), _ = L == null ? g : df(L), I = new fe(Ne, St + "leave", x, i, u);
          I.target = pt, I.relatedTarget = _;
          var N = null, W = zs(u);
          if (W === a) {
            var de = new fe(Re, St + "enter", L, i, u);
            de.target = _, de.relatedTarget = pt, N = de;
          }
          R1(e, I, N, x, L);
        }
      }
    }
    function Te(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Te;
    function we(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Pe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Dt(e, t) {
      for (var a = Pe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === zi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Pe(Zn(a));
      }
    }
    function Fl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return my(e, u, s, f, p);
    }
    function my(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, w = null;
      e:
        for (; ; ) {
          for (var x = null; g === t && (a === 0 || g.nodeType === zi) && (f = s + a), g === i && (u === 0 || g.nodeType === zi) && (p = s + u), g.nodeType === zi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
            w = g, g = x;
          for (; ; ) {
            if (g === e)
              break e;
            if (w === t && ++v === a && (f = s), w === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
              break;
            g = w, w = g.parentNode;
          }
          g = x;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function a1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Dt(e, f), g = Dt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var w = a.createRange();
          w.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), u.addRange(w));
        }
      }
    }
    function d0(e) {
      return e && e.nodeType === zi;
    }
    function p0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : d0(e) ? !1 : d0(t) ? p0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function i1(e) {
      return e && e.ownerDocument && p0(e.ownerDocument.documentElement, e);
    }
    function l1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v0() {
      for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
        if (l1(t))
          e = t.contentWindow;
        else
          return t;
        t = yl(e.document);
      }
      return t;
    }
    function yy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function u1() {
      var e = v0();
      return {
        focusedElem: e,
        selectionRange: yy(e) ? s1(e) : null
      };
    }
    function o1(e) {
      var t = v0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && i1(a)) {
        i !== null && yy(a) && c1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function s1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Fl(e), t || {
        start: 0,
        end: 0
      };
    }
    function c1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : a1(e, t);
    }
    var f1 = dn && "documentMode" in document && document.documentMode <= 11;
    function d1() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var uf = null, gy = null, Xd = null, Sy = !1;
    function p1(e) {
      if ("selectionStart" in e && yy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function v1(e) {
      return e.window === e ? e.document : e.nodeType === Ja ? e : e.ownerDocument;
    }
    function h0(e, t, a) {
      var i = v1(a);
      if (!(Sy || uf == null || uf !== yl(i))) {
        var u = p1(uf);
        if (!Xd || !we(Xd, u)) {
          Xd = u;
          var s = oh(gy, "onSelect");
          if (s.length > 0) {
            var f = new Rr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = uf;
          }
        }
      }
    }
    function h1(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window;
      switch (t) {
        case "focusin":
          (wo(p) || p.contentEditable === "true") && (uf = p, gy = a, Xd = null);
          break;
        case "focusout":
          uf = null, gy = null, Xd = null;
          break;
        case "mousedown":
          Sy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sy = !1, h0(e, i, u);
          break;
        case "selectionchange":
          if (f1)
            break;
        case "keydown":
        case "keyup":
          h0(e, i, u);
      }
    }
    function ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var of = {
      animationend: ih("Animation", "AnimationEnd"),
      animationiteration: ih("Animation", "AnimationIteration"),
      animationstart: ih("Animation", "AnimationStart"),
      transitionend: ih("Transition", "TransitionEnd")
    }, Ey = {}, m0 = {};
    dn && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete of.animationend.animation, delete of.animationiteration.animation, delete of.animationstart.animation), "TransitionEvent" in window || delete of.transitionend.transition);
    function lh(e) {
      if (Ey[e])
        return Ey[e];
      if (!of[e])
        return e;
      var t = of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m0)
          return Ey[e] = t[a];
      return e;
    }
    var y0 = lh("animationend"), g0 = lh("animationiteration"), S0 = lh("animationstart"), E0 = lh("transitionend"), C0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      C0.set(e, t), pr(t, [e]);
    }
    function m1() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(y0, "onAnimationEnd"), bo(g0, "onAnimationIteration"), bo(S0, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(E0, "onTransitionEnd");
    }
    function y1(e, t, a, i, u, s, f) {
      var p = C0.get(t);
      if (p !== void 0) {
        var v = Rr, y = t;
        switch (t) {
          case "keypress":
            if (Cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = sy;
            break;
          case "focusin":
            y = "focus", v = Xc;
            break;
          case "focusout":
            y = "blur", v = Xc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Xc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = jl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ru;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ha;
            break;
          case y0:
          case g0:
          case S0:
            v = Kc;
            break;
          case E0:
            v = fy;
            break;
          case "scroll":
            v = Id;
            break;
          case "wheel":
            v = Jc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = iy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yd;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = C1(a, p, i.type, g, w);
          if (x.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: x
            });
          }
        }
      }
    }
    m1(), k(), lf(), d1(), th();
    function g1(e, t, a, i, u, s, f) {
      y1(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (q(e, t, a, i, u), D(e, t, a, i, u), h1(e, t, a, i, u), af(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fi(i, t, void 0, e), e.currentTarget = null;
    }
    function S1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, x = g.currentTarget, L = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          R0(e, L, x), i = w;
        }
    }
    function M0(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        S1(s, f, a);
      }
      ud();
    }
    function E1(e, t, a, i, u) {
      var s = uc(a), f = [];
      g1(f, e, i, a, s, t), M0(f, t);
    }
    function Sn(e, t) {
      Cy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = XR(t), u = M1(e, a);
      i.has(u) || (x0(t, e, ns, a), i.add(u));
    }
    function Ty(e, t, a) {
      Cy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), x0(a, e, i, t);
    }
    var uh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[uh]) {
        e[uh] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === Ja ? e : e.ownerDocument;
        t !== null && (t[uh] || (t[uh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function x0(e, t, a, i, u) {
      var s = Eo(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qi(e, t, s, f) : To(e, t, s) : f !== void 0 ? Wc(e, t, s, f) : Fd(e, t, s);
    }
    function D0(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Ry(e, t, a, i, u) {
      var s = i;
      if (!(t & ji) && !(t & ns)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === re || v === me) {
                var y = p.stateNode.containerInfo;
                if (D0(y, f))
                  break;
                if (v === me)
                  for (var g = p.return; g !== null; ) {
                    var w = g.tag;
                    if (w === re || w === me) {
                      var x = g.stateNode.containerInfo;
                      if (D0(x, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var L = zs(y);
                  if (L === null)
                    return;
                  var z = L.tag;
                  if (z === ie || z === He) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      rd(function() {
        return E1(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function C1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var w = y, x = w.stateNode, L = w.tag;
        if (L === ie && x !== null && (g = x, p !== null)) {
          var z = ru(y, p);
          z != null && v.push(Jd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = ru(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function T1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = sf(s))
        u++;
      for (var f = 0, p = i; p; p = sf(p))
        f++;
      for (; u - f > 0; )
        a = sf(a), u--;
      for (; f - u > 0; )
        i = sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = sf(a), i = sf(i);
      }
      return null;
    }
    function w0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, w = v.tag;
        if (y !== null && y === i)
          break;
        if (w === ie && g !== null) {
          var x = g;
          if (u) {
            var L = ru(p, s);
            L != null && f.unshift(Jd(p, L, x));
          } else if (!u) {
            var z = ru(p, s);
            z != null && f.push(Jd(p, z, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function R1(e, t, a, i, u) {
      var s = i && u ? T1(i, u) : null;
      i !== null && w0(e, t, i, s, !1), u !== null && a !== null && w0(e, a, u, s, !0);
    }
    function M1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Va = !1, ep = "dangerouslySetInnerHTML", sh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", b0 = "autoFocus", Ls = "children", Os = "style", ch = "__html", My, fh, tp, _0, dh, N0, k0;
    My = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, fh = function(e, t) {
      lc(e, t), Zf(e, t), Ev(e, t, {
        registrationNameDependencies: zt,
        possibleRegistrationNames: Hr
      });
    }, N0 = dn && !document.documentMode, tp = function(e, t, a) {
      if (!Va) {
        var i = ph(a), u = ph(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, _0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, k0 = function(e, t) {
      var a = e.namespaceURI === Oi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var x1 = /\r\n?/g, D1 = /\u0000|\uFFFD/g;
    function ph(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(x1, `
`).replace(D1, "");
    }
    function vh(e, t, a, i) {
      var u = ph(t), s = ph(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === Ja ? e : e.ownerDocument;
    }
    function w1() {
    }
    function hh(e) {
      e.onclick = w1;
    }
    function b1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Os)
            f && Object.freeze(f), cv(t, f);
          else if (s === ep) {
            var p = f ? f[ch] : void 0;
            p != null && Jp(t, p);
          } else if (s === Ls)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && nc(t, f);
            } else
              typeof f == "number" && nc(t, "" + f);
          else
            s === sh || s === _o || s === b0 || (zt.hasOwnProperty(s) ? f != null && (typeof f != "function" && dh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function _1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Os ? cv(e, f) : s === ep ? Jp(e, f) : s === Ls ? nc(e, f) : da(e, s, f, i);
      }
    }
    function N1(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === Oi && (p = ec(e)), p === Oi) {
        if (u = Ai(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Oi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(My, e) && (My[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function k1(e, t) {
      return L0(t).createTextNode(e);
    }
    function L1(e, t, a, i) {
      var u = Ai(t, a);
      fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            Sn(Kd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Pt(e, a), s = a;
          break;
        case "select":
          Zo(e, a), s = Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = Bf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ac(t, s), b1(t, e, i, s, u), t) {
        case "input":
          ba(e), G(e, a, !1);
          break;
        case "textarea":
          ba(e), Zp(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && hh(e);
          break;
      }
    }
    function O1(e, t, a, i, u) {
      fh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && hh(e);
          break;
      }
      ac(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Os) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === ep || v === Ls || v === sh || v === _o || v === b0 || (zt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === L || x == null && L == null))
          if (v === Os)
            if (x && Object.freeze(x), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && L[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === ep) {
            var z = x ? x[ch] : void 0, F = L ? L[ch] : void 0;
            z != null && F !== z && (s = s || []).push(v, z);
          } else
            v === Ls ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === sh || v === _o || (zt.hasOwnProperty(v) ? (x != null && (typeof x != "function" && dh(v, x), v === "onScroll" && Sn("scroll", e)), !s && L !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (es(g, p[Os]), (s = s || []).push(Os, g)), s;
    }
    function z1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && O(e, u);
      var s = Ai(a, i), f = Ai(a, u);
      switch (_1(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          jm(e, u);
          break;
      }
    }
    function A1(e) {
      {
        var t = e.toLowerCase();
        return ic.hasOwnProperty(t) && ic[t] || null;
      }
    }
    function j1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ai(t, a), fh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            Sn(Kd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Pt(e, a);
          break;
        case "select":
          Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), Sn("invalid", e);
          break;
      }
      ac(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, w = 0; w < g.length; w++) {
          var x = g[w].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[w].name);
          }
        }
      }
      var L = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var F = a[z];
          if (z === Ls)
            typeof F == "string" ? e.textContent !== F && (a[_o] !== !0 && vh(e.textContent, F, s, f), L = [Ls, F]) : typeof F == "number" && e.textContent !== "" + F && (a[_o] !== !0 && vh(e.textContent, F, s, f), L = [Ls, "" + F]);
          else if (zt.hasOwnProperty(z))
            F != null && (typeof F != "function" && dh(z, F), z === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var fe = void 0, Ne = p && Be ? null : xr(z);
            if (a[_o] !== !0) {
              if (!(z === sh || z === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === ep) {
                  var Re = e.innerHTML, St = F ? F[ch] : void 0;
                  if (St != null) {
                    var pt = k0(e, St);
                    pt !== Re && tp(z, Re, pt);
                  }
                } else if (z === Os) {
                  if (v.delete(z), N0) {
                    var _ = Ym(F);
                    fe = e.getAttribute("style"), _ !== fe && tp(z, fe, _);
                  }
                } else if (p && !Be)
                  v.delete(z.toLowerCase()), fe = oi(e, z, F), F !== fe && tp(z, fe, F);
                else if (!vn(z, Ne, p) && !Vt(z, F, Ne, p)) {
                  var I = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), fe = fa(e, z, F, Ne);
                  else {
                    var N = i;
                    if (N === Oi && (N = ec(t)), N === Oi)
                      v.delete(z.toLowerCase());
                    else {
                      var W = A1(z);
                      W !== null && W !== z && (I = !0, v.delete(W)), v.delete(z);
                    }
                    fe = oi(e, z, F);
                  }
                  var de = Be;
                  !de && F !== fe && !I && tp(z, fe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && _0(v), t) {
        case "input":
          ba(e), G(e, a, !0);
          break;
        case "textarea":
          ba(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hh(e);
          break;
      }
      return L;
    }
    function U1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function wy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function by(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function F1(e, t, a) {
      switch (t) {
        case "input":
          Oe(e, a);
          return;
        case "textarea":
          Yf(e, a);
          return;
        case "select":
          Um(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var I1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], H1 = O0.concat(["button"]), V1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], z0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = lt({}, e || z0), i = {
          tag: t
        };
        return O0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), H1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), I1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var P1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return V1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, B1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, A0 = {};
      np = function(e, t, a) {
        a = a || z0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = P1(e, u) ? null : i, f = s ? null : B1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!A0[y]) {
            A0[y] = !0;
            var g = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, w, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var mh = "suppressHydrationWarning", yh = "$", gh = "/$", ap = "$?", ip = "$!", Y1 = "style", _y = null, Ny = null;
    function $1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ja:
        case Jl: {
          t = i === Ja ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function Q1(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ab(e) {
      return e;
    }
    function W1(e) {
      _y = Sa(), Ny = u1();
      var t = null;
      return Kn(!1), t;
    }
    function G1(e) {
      o1(Ny), Kn(_y), _y = null, Ny = null;
    }
    function q1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = N1(e, t, a, s);
      return op(u, y), Fy(y, t), y;
    }
    function X1(e, t) {
      e.appendChild(t);
    }
    function K1(e, t, a, i, u) {
      switch (L1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Z1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return O1(e, t, a, i);
    }
    function ky(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function J1(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = k1(e, t);
      return op(i, s), s;
    }
    function eR() {
      var e = window.event;
      return e === void 0 ? Bi : Nr(e.type);
    }
    var Ly = typeof setTimeout == "function" ? setTimeout : void 0, tR = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = -1, j0 = typeof Promise == "function" ? Promise : void 0, nR = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function(e) {
      return j0.resolve(null).then(e).catch(rR);
    } : Ly;
    function rR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function aR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function iR(e, t, a, i, u, s) {
      z1(e, t, a, i, u), Fy(e, u);
    }
    function U0(e) {
      nc(e, "");
    }
    function lR(e, t, a) {
      e.nodeValue = a;
    }
    function uR(e, t) {
      e.appendChild(t);
    }
    function oR(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hh(a);
    }
    function sR(e, t, a) {
      e.insertBefore(t, a);
    }
    function cR(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function fR(e, t) {
      e.removeChild(t);
    }
    function dR(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === gh)
            if (i === 0) {
              e.removeChild(u), dt(t);
              return;
            } else
              i--;
          else
            (s === yh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      dt(t);
    }
    function pR(e, t) {
      e.nodeType === Ln ? zy(e.parentNode, t) : e.nodeType === qr && zy(e, t), dt(e);
    }
    function vR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function hR(e) {
      e.nodeValue = "";
    }
    function mR(e, t) {
      e = e;
      var a = t[Y1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = rc("display", i);
    }
    function yR(e, t) {
      e.nodeValue = t;
    }
    function gR(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Ja && e.documentElement && e.removeChild(e.documentElement);
    }
    function SR(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ER(e, t) {
      return t === "" || e.nodeType !== zi ? null : e;
    }
    function CR(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function F0(e) {
      return e.data === ap;
    }
    function Ay(e) {
      return e.data === ip;
    }
    function TR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function RR(e, t) {
      e._reactRetry = t;
    }
    function Sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === zi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === yh || a === ip || a === ap)
            break;
          if (a === gh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Sh(e.nextSibling);
    }
    function MR(e) {
      return Sh(e.firstChild);
    }
    function xR(e) {
      return Sh(e.firstChild);
    }
    function DR(e) {
      return Sh(e.nextSibling);
    }
    function wR(e, t, a, i, u, s, f) {
      op(s, e), Fy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== Le;
      return j1(e, t, a, p, i, y, f);
    }
    function bR(e, t, a, i) {
      return op(a, e), a.mode & ot, U1(e, t);
    }
    function _R(e, t) {
      op(t, e);
    }
    function NR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === gh) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === yh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === yh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function kR(e) {
      dt(e);
    }
    function LR(e) {
      dt(e);
    }
    function OR(e) {
      return e !== "head" && e !== "body";
    }
    function zR(e, t, a, i) {
      var u = !0;
      vh(t.nodeValue, a, i, u);
    }
    function AR(e, t, a, i, u, s) {
      if (t[mh] !== !0) {
        var f = !0;
        vh(i.nodeValue, u, s, f);
      }
    }
    function jR(e, t) {
      t.nodeType === qr ? xy(e, t) : t.nodeType === Ln || Dy(e, t);
    }
    function UR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? xy(a, t) : t.nodeType === Ln || Dy(a, t));
      }
    }
    function FR(e, t, a, i, u) {
      (u || t[mh] !== !0) && (i.nodeType === qr ? xy(a, i) : i.nodeType === Ln || Dy(a, i));
    }
    function IR(e, t, a) {
      wy(e, t);
    }
    function HR(e, t) {
      by(e, t);
    }
    function VR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && wy(i, t);
      }
    }
    function PR(e, t) {
      {
        var a = e.parentNode;
        a !== null && by(a, t);
      }
    }
    function BR(e, t, a, i, u, s) {
      (s || t[mh] !== !0) && wy(a, i);
    }
    function YR(e, t, a, i, u) {
      (u || t[mh] !== !0) && by(a, i);
    }
    function $R(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function QR(e) {
      Zd(e);
    }
    var cf = Math.random().toString(36).slice(2), ff = "__reactFiber$" + cf, jy = "__reactProps$" + cf, up = "__reactContainer$" + cf, Uy = "__reactEvents$" + cf, WR = "__reactListeners$" + cf, GR = "__reactHandles$" + cf;
    function qR(e) {
      delete e[ff], delete e[jy], delete e[Uy], delete e[WR], delete e[GR];
    }
    function op(e, t) {
      t[ff] = e;
    }
    function Eh(e, t) {
      t[up] = e;
    }
    function H0(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function zs(e) {
      var t = e[ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[ff], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[ff];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[ff] || e[up];
      return t && (t.tag === ie || t.tag === He || t.tag === De || t.tag === re) ? t : null;
    }
    function df(e) {
      if (e.tag === ie || e.tag === He)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ch(e) {
      return e[jy] || null;
    }
    function Fy(e, t) {
      e[jy] = t;
    }
    function XR(e) {
      var t = e[Uy];
      return t === void 0 && (t = e[Uy] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, P0 = U.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = pi(e.type, e._source, t ? t.type : null);
        P0.setExtraStackFrame(a);
      } else
        P0.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var Iy = [], Rh;
    Rh = [];
    var wu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (wu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Rh[wu] && S("Unexpected Fiber popped."), e.current = Iy[wu], Iy[wu] = null, Rh[wu] = null, wu--;
    }
    function ia(e, t, a) {
      wu++, Iy[wu] = e.current, Rh[wu] = a, e.current = t;
    }
    var Hy;
    Hy = {};
    var ai = {};
    Object.freeze(ai);
    var bu = ko(ai), Il = ko(!1), Vy = ai;
    function pf(e, t, a) {
      return a && Hl(t) ? Vy : bu.current;
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function vf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return u && B0(e, t, s), s;
      }
    }
    function Mh() {
      return Il.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xh(e) {
      aa(Il, e), aa(bu, e);
    }
    function Py(e) {
      aa(Il, e), aa(bu, e);
    }
    function Y0(e, t, a) {
      {
        if (bu.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(bu, t, e), ia(Il, a, e);
      }
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Hy[s] || (Hy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          Gi(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return Vy = bu.current, ia(bu, a, e), ia(Il, Il.current, e), !0;
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = $0(e, t, Vy);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Il, e), aa(bu, e), ia(bu, u, e), ia(Il, a, e);
        } else
          aa(Il, e), ia(Il, a, e);
      }
    }
    function KR(e) {
      {
        if (!dd(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, wh = 1, _u = null, By = !1, Yy = !1;
    function W0(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    function ZR(e) {
      By = !0, W0(e);
    }
    function G0() {
      By && Oo();
    }
    function Oo() {
      if (!Yy && _u !== null) {
        Yy = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = _u;
          for (Hn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          _u = null, By = !1;
        } catch (s) {
          throw _u !== null && (_u = _u.slice(e + 1)), vc(mc, Oo), s;
        } finally {
          Hn(t), Yy = !1;
        }
      }
      return null;
    }
    var hf = [], mf = 0, bh = null, _h = 0, Ti = [], Ri = 0, As = null, Nu = 1, ku = "";
    function JR(e) {
      return Us(), (e.flags & sd) !== be;
    }
    function eM(e) {
      return Us(), _h;
    }
    function tM() {
      var e = ku, t = Nu, a = t & ~nM(t);
      return a.toString(32) + e;
    }
    function js(e, t) {
      Us(), hf[mf++] = _h, hf[mf++] = bh, bh = e, _h = t;
    }
    function q0(e, t, a) {
      Us(), Ti[Ri++] = Nu, Ti[Ri++] = ku, Ti[Ri++] = As, As = e;
      var i = Nu, u = ku, s = Nh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Nh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), x = f >> y, L = s - y, z = Nh(t) + L, F = p << L, fe = F | x, Ne = w + u;
        Nu = 1 << z | fe, ku = Ne;
      } else {
        var Re = p << s, St = Re | f, pt = u;
        Nu = 1 << v | St, ku = pt;
      }
    }
    function $y(e) {
      Us();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        js(e, a), q0(e, a, i);
      }
    }
    function Nh(e) {
      return 32 - Tc(e);
    }
    function nM(e) {
      return 1 << Nh(e) - 1;
    }
    function Qy(e) {
      for (; e === bh; )
        bh = hf[--mf], hf[mf] = null, _h = hf[--mf], hf[mf] = null;
      for (; e === As; )
        As = Ti[--Ri], Ti[Ri] = null, ku = Ti[--Ri], Ti[Ri] = null, Nu = Ti[--Ri], Ti[Ri] = null;
    }
    function rM() {
      return Us(), As !== null ? {
        id: Nu,
        overflow: ku
      } : null;
    }
    function aM(e, t) {
      Us(), Ti[Ri++] = Nu, Ti[Ri++] = ku, Ti[Ri++] = As, Nu = t.id, ku = t.overflow, As = e;
    }
    function Us() {
      Lr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var kr = null, Mi = null, qi = !1, Fs = !1, zo = null;
    function iM() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function X0() {
      Fs = !0;
    }
    function lM() {
      return Fs;
    }
    function uM(e) {
      var t = e.stateNode.containerInfo;
      return Mi = xR(t), kr = e, qi = !0, zo = null, Fs = !1, !0;
    }
    function oM(e, t, a) {
      return Mi = DR(t), kr = e, qi = !0, zo = null, Fs = !1, a !== null && aM(e, a), !0;
    }
    function K0(e, t) {
      switch (e.tag) {
        case re: {
          jR(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ot) !== Le;
          FR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && UR(i.dehydrated, t);
          break;
        }
      }
    }
    function Z0(e, t) {
      K0(e, t);
      var a = fw();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Lt) : i.push(a);
    }
    function Wy(e, t) {
      {
        if (Fs)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, IR(a, i);
                break;
              case He:
                var u = t.pendingProps;
                HR(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== Le;
                BR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case He: {
                var w = t.pendingProps, x = (e.mode & ot) !== Le;
                YR(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case De: {
            var L = e.memoizedState, z = L.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ie:
                  var F = t.type;
                  t.pendingProps, VR(z, F);
                  break;
                case He:
                  var fe = t.pendingProps;
                  PR(z, fe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function J0(e, t) {
      t.flags = t.flags & ~La | nn, Wy(e, t);
    }
    function eE(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = SR(t, a);
          return i !== null ? (e.stateNode = i, kr = e, Mi = MR(i), !0) : !1;
        }
        case He: {
          var u = e.pendingProps, s = ER(t, u);
          return s !== null ? (e.stateNode = s, kr = e, Mi = null, !0) : !1;
        }
        case De: {
          var f = CR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: rM(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = dw(f);
            return v.return = e, e.child = v, kr = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & ot) !== Le && (e.flags & Ve) === be;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (qi) {
        var t = Mi;
        if (!t) {
          Gy(e) && (Wy(kr, e), qy()), J0(kr, e), qi = !1, kr = e;
          return;
        }
        var a = t;
        if (!eE(e, t)) {
          Gy(e) && (Wy(kr, e), qy()), t = lp(a);
          var i = kr;
          if (!t || !eE(e, t)) {
            J0(kr, e), qi = !1, kr = e;
            return;
          }
          Z0(i, a);
        }
      }
    }
    function sM(e, t, a) {
      var i = e.stateNode, u = !Fs, s = wR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function cM(e) {
      var t = e.stateNode, a = e.memoizedProps, i = bR(t, a, e);
      if (i) {
        var u = kr;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & ot) !== Le;
              zR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ot) !== Le;
              AR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function fM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      _R(a, e);
    }
    function dM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return NR(a);
    }
    function tE(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== re && t.tag !== De; )
        t = t.return;
      kr = t;
    }
    function kh(e) {
      if (e !== kr)
        return !1;
      if (!qi)
        return tE(e), qi = !0, !1;
      if (e.tag !== re && (e.tag !== ie || OR(e.type) && !ky(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (Gy(e))
            nE(e), qy();
          else
            for (; t; )
              Z0(e, t), t = lp(t);
      }
      return tE(e), e.tag === De ? Mi = dM(e) : Mi = kr ? lp(e.stateNode) : null, !0;
    }
    function pM() {
      return qi && Mi !== null;
    }
    function nE(e) {
      for (var t = Mi; t; )
        K0(e, t), t = lp(t);
    }
    function yf() {
      kr = null, Mi = null, qi = !1, Fs = !1;
    }
    function rE() {
      zo !== null && (KC(zo), zo = null);
    }
    function Lr() {
      return qi;
    }
    function Ky(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var vM = U.ReactCurrentBatchConfig, hM = null;
    function mM() {
      return vM.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var yM = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, Is = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Hs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Hs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(x) {
          e.add(Ye(x) || "Component"), Hs.add(x.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(x) {
          t.add(Ye(x) || "Component"), Hs.add(x.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          a.add(Ye(x) || "Component"), Hs.add(x.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          i.add(Ye(x) || "Component"), Hs.add(x.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          u.add(Ye(x) || "Component"), Hs.add(x.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(x) {
          s.add(Ye(x) || "Component"), Hs.add(x.type);
        }), hp = []), t.size > 0) {
          var f = Is(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Is(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Is(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Is(e);
          nt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Is(a);
          nt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = Is(u);
          nt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Lh = /* @__PURE__ */ new Map(), aE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = yM(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aE.has(e.type)) {
          var i = Lh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Lh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), aE.add(s.type);
            });
            var u = Is(i);
            try {
              Ft(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Lh = /* @__PURE__ */ new Map();
      };
    }
    function Ki(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zy = ko(null), Jy;
    Jy = {};
    var Oh = null, gf = null, eg = null, zh = !1;
    function Ah() {
      Oh = null, gf = null, eg = null, zh = !1;
    }
    function iE() {
      zh = !0;
    }
    function lE() {
      zh = !1;
    }
    function uE(e, t, a) {
      ia(Zy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jy && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Jy;
    }
    function tg(e, t) {
      var a = Zy.current;
      aa(Zy, t), e._currentValue = a;
    }
    function ng(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (mu(i.childLanes, t) ? u !== null && !mu(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gM(e, t, a) {
      SM(e, t, a);
    }
    function SM(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = In(a), v = Lu(Xt, p);
                v.tag = Uh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ze(x.lanes, a)), ng(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Yt) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = Ze(L.lanes, a);
          var z = L.alternate;
          z !== null && (z.lanes = Ze(z.lanes, a)), ng(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Sf(e, t) {
      Oh = e, gf = null, eg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function Jn(e) {
      zh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (eg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (gf === null) {
          if (Oh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          gf = a, Oh.dependencies = {
            lanes: H,
            firstContext: a
          };
        } else
          gf = gf.next = a;
      }
      return t;
    }
    var Vs = null;
    function rg(e) {
      Vs === null ? Vs = [e] : Vs.push(e);
    }
    function EM() {
      if (Vs !== null) {
        for (var e = 0; e < Vs.length; e++) {
          var t = Vs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Vs = null;
      }
    }
    function oE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function CM(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function TM(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function Pa(e, t) {
      return jh(e, t);
    }
    var RM = jh;
    function jh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (nn | La)) !== be && sT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (nn | La)) !== be && sT(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var sE = 0, cE = 1, Uh = 2, ag = 3, Fh = !1, ig, Ih;
    ig = !1, Ih = null;
    function lg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: H
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function fE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: sE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !ig && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ig = !0), RD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, RM(e, a);
      } else
        return TM(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (xd(a)) {
          var s = u.lanes;
          s = wd(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, ho(e, f);
        }
      }
    }
    function ug(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function MM(e, t, a, i, u, s) {
      switch (a.tag) {
        case cE: {
          var f = a.payload;
          if (typeof f == "function") {
            iE();
            var p = f.call(s, i, u);
            {
              if (e.mode & yn) {
                Fn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Fn(!1);
                }
              }
              lE();
            }
            return p;
          }
          return f;
        }
        case ag:
          e.flags = e.flags & ~Gn | Ve;
        case sE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            iE(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                Fn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Fn(!1);
                }
              }
              lE();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Uh:
          return Fh = !0, i;
      }
      return i;
    }
    function Vh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var w = g.updateQueue, x = w.lastBaseUpdate;
          x !== f && (x === null ? w.firstBaseUpdate = y : x.next = y, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, z = H, F = null, fe = null, Ne = null, Re = s;
        do {
          var St = Re.lane, pt = Re.eventTime;
          if (mu(i, St)) {
            if (Ne !== null) {
              var I = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                tag: Re.tag,
                payload: Re.payload,
                callback: Re.callback,
                next: null
              };
              Ne = Ne.next = I;
            }
            L = MM(e, u, Re, L, t, a);
            var N = Re.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            Re.lane !== yt) {
              e.flags |= mi;
              var W = u.effects;
              W === null ? u.effects = [Re] : W.push(Re);
            }
          } else {
            var _ = {
              eventTime: pt,
              lane: St,
              tag: Re.tag,
              payload: Re.payload,
              callback: Re.callback,
              next: null
            };
            Ne === null ? (fe = Ne = _, F = L) : Ne = Ne.next = _, z = Ze(z, St);
          }
          if (Re = Re.next, Re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, ue = de.next;
            de.next = null, Re = ue, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (F = L), u.baseState = F, u.firstBaseUpdate = fe, u.lastBaseUpdate = Ne;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var We = Ie;
          do
            z = Ze(z, We.lane), We = We.next;
          while (We !== Ie);
        } else
          s === null && (u.shared.lanes = H);
        Vp(z), e.lanes = z, e.memoizedState = L;
      }
      Ih = null;
    }
    function xM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function dE() {
      Fh = !1;
    }
    function Ph() {
      return Fh;
    }
    function pE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, xM(f, a));
        }
    }
    var og = {}, vE = new Z.Component().refs, sg, cg, fg, dg, pg, hE, Bh, vg, hg, mg;
    {
      sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set();
      var mE = /* @__PURE__ */ new Set();
      Bh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mE.has(a) || (mE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, hE = function(e, t) {
        if (t === void 0) {
          var a = Mt(e) || "Component";
          pg.has(a) || (pg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(og, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(og);
    }
    function yg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yn) {
          Fn(!0);
          try {
            s = a(i, u);
          } finally {
            Fn(!1);
          }
        }
        hE(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === H) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var gg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = Na(e), u = Ta(), s = Bo(i), f = Lu(u, s);
        f.payload = t, a != null && (Bh(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Hh(p, i, s)), Nl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Na(e), u = Ta(), s = Bo(i), f = Lu(u, s);
        f.tag = cE, f.payload = t, a != null && (Bh(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Hh(p, i, s)), Nl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Na(e), i = Ta(), u = Bo(a), s = Lu(i, u);
        s.tag = Uh, t != null && (Bh(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, u);
        f !== null && (dr(f, a, u, i), Hh(f, a, u)), Cd(a, u);
      }
    };
    function yE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            Fn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Fn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !we(a, i) || !we(u, s) : !0;
    }
    function DM(e, t, a) {
      var i = e.stateNode;
      {
        var u = Mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !hg.has(t) && (hg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !fg.has(t) && (fg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Mt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || vt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function gE(e, t) {
      t.updater = gg, e.stateNode = t, ao(t, e), t._reactInternalInstance = og;
    }
    function SE(e, t, a) {
      var i = !1, u = ai, s = ai, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ee && f._context === void 0
        );
        if (!p && !mg.has(t)) {
          mg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === B ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = pf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? vf(e, u) : ai;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        Fn(!0);
        try {
          g = new t(a, s);
        } finally {
          Fn(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      gE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var x = Mt(t) || "Component";
          cg.has(x) || (cg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var L = null, z = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), L !== null || z !== null || F !== null) {
            var fe = Mt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            dg.has(fe) || (dg.add(fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, fe, Ne, L !== null ? `
  ` + L : "", z !== null ? `
  ` + z : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && B0(e, u, s), g;
    }
    function wM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), gg.enqueueReplaceState(t, t.state, null));
    }
    function EE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          sg.has(s) || (sg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        gg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Sg(e, t, a, i) {
      DM(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = vE, lg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = pf(e, t, !0);
        u.context = vf(e, f);
      }
      {
        if (u.state === a) {
          var p = Mt(t) || "Component";
          vg.has(p) || (vg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (yg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wM(e, u), Vh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ke;
        y |= Kr, (e.mode & Aa) !== Le && (y |= Zr), e.flags |= y;
      }
    }
    function bM(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ai;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = pf(e, t, !0);
        v = vf(e, y);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && EE(e, u, a, v), dE();
      var x = e.memoizedState, L = u.state = x;
      if (Vh(e, a, u, i), L = e.memoizedState, s === a && x === L && !Mh() && !Ph()) {
        if (typeof u.componentDidMount == "function") {
          var z = Ke;
          z |= Kr, (e.mode & Aa) !== Le && (z |= Zr), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (yg(e, t, g, a), L = e.memoizedState);
      var F = Ph() || yE(e, t, s, a, x, L, v);
      if (F) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var fe = Ke;
          fe |= Kr, (e.mode & Aa) !== Le && (fe |= Zr), e.flags |= fe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Ke;
          Ne |= Kr, (e.mode & Aa) !== Le && (Ne |= Zr), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, F;
    }
    function _M(e, t, a, i, u) {
      var s = t.stateNode;
      fE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ki(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, w = ai;
      if (typeof g == "object" && g !== null)
        w = Jn(g);
      else {
        var x = pf(t, a, !0);
        w = vf(t, x);
      }
      var L = a.getDerivedStateFromProps, z = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && EE(t, s, i, w), dE();
      var F = t.memoizedState, fe = s.state = F;
      if (Vh(t, i, s, u), fe = t.memoizedState, f === v && F === fe && !Mh() && !Ph() && !Me)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ka), !1;
      typeof L == "function" && (yg(t, a, L, i), fe = t.memoizedState);
      var Ne = Ph() || yE(t, a, p, i, F, fe, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Me;
      return Ne ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, fe, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, fe, w)), typeof s.componentDidUpdate == "function" && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ka)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ka), t.memoizedProps = i, t.memoizedState = fe), s.props = i, s.state = fe, s.context = w, Ne;
    }
    var Eg, Cg, Tg, Rg, Mg, CE = function(e, t) {
    };
    Eg = !1, Cg = !1, Tg = {}, Rg = {}, Mg = {}, CE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        Rg[a] || (Rg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Ue) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ye(e) || "Component";
          Tg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          $n(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(w) {
            var x = v.refs;
            x === vE && (x = v.refs = {}), w === null ? delete x[y] : x[y] = w;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ye(e) || "Component";
        if (Mg[t])
          return;
        Mg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RE(e) {
      function t(_, I) {
        if (e) {
          var N = _.deletions;
          N === null ? (_.deletions = [I], _.flags |= Lt) : N.push(I);
        }
      }
      function a(_, I) {
        if (!e)
          return null;
        for (var N = I; N !== null; )
          t(_, N), N = N.sibling;
        return null;
      }
      function i(_, I) {
        for (var N = /* @__PURE__ */ new Map(), W = I; W !== null; )
          W.key !== null ? N.set(W.key, W) : N.set(W.index, W), W = W.sibling;
        return N;
      }
      function u(_, I) {
        var N = qs(_, I);
        return N.index = 0, N.sibling = null, N;
      }
      function s(_, I, N) {
        if (_.index = N, !e)
          return _.flags |= sd, I;
        var W = _.alternate;
        if (W !== null) {
          var de = W.index;
          return de < I ? (_.flags |= nn, I) : de;
        } else
          return _.flags |= nn, I;
      }
      function f(_) {
        return e && _.alternate === null && (_.flags |= nn), _;
      }
      function p(_, I, N, W) {
        if (I === null || I.tag !== He) {
          var de = KS(N, _.mode, W);
          return de.return = _, de;
        } else {
          var ue = u(I, N);
          return ue.return = _, ue;
        }
      }
      function v(_, I, N, W) {
        var de = N.type;
        if (de === pa)
          return g(_, I, N.props.children, W, N.key);
        if (I !== null && (I.elementType === de || // Keep this check inline so it only runs on the false path:
        pT(I, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === _e && TE(de) === I.type)) {
          var ue = u(I, N.props);
          return ue.ref = mp(_, I, N), ue.return = _, ue._debugSource = N._source, ue._debugOwner = N._owner, ue;
        }
        var Ie = XS(N, _.mode, W);
        return Ie.ref = mp(_, I, N), Ie.return = _, Ie;
      }
      function y(_, I, N, W) {
        if (I === null || I.tag !== me || I.stateNode.containerInfo !== N.containerInfo || I.stateNode.implementation !== N.implementation) {
          var de = ZS(N, _.mode, W);
          return de.return = _, de;
        } else {
          var ue = u(I, N.children || []);
          return ue.return = _, ue;
        }
      }
      function g(_, I, N, W, de) {
        if (I === null || I.tag !== Ct) {
          var ue = $o(N, _.mode, W, de);
          return ue.return = _, ue;
        } else {
          var Ie = u(I, N);
          return Ie.return = _, Ie;
        }
      }
      function w(_, I, N) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var W = KS("" + I, _.mode, N);
          return W.return = _, W;
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case si: {
              var de = XS(I, _.mode, N);
              return de.ref = mp(_, null, I), de.return = _, de;
            }
            case Dr: {
              var ue = ZS(I, _.mode, N);
              return ue.return = _, ue;
            }
            case _e: {
              var Ie = I._payload, We = I._init;
              return w(_, We(Ie), N);
            }
          }
          if (vt(I) || qa(I)) {
            var Qt = $o(I, _.mode, N, null);
            return Qt.return = _, Qt;
          }
          Yh(_, I);
        }
        return typeof I == "function" && $h(_), null;
      }
      function x(_, I, N, W) {
        var de = I !== null ? I.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return de !== null ? null : p(_, I, "" + N, W);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case si:
              return N.key === de ? v(_, I, N, W) : null;
            case Dr:
              return N.key === de ? y(_, I, N, W) : null;
            case _e: {
              var ue = N._payload, Ie = N._init;
              return x(_, I, Ie(ue), W);
            }
          }
          if (vt(N) || qa(N))
            return de !== null ? null : g(_, I, N, W, null);
          Yh(_, N);
        }
        return typeof N == "function" && $h(_), null;
      }
      function L(_, I, N, W, de) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var ue = _.get(N) || null;
          return p(I, ue, "" + W, de);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case si: {
              var Ie = _.get(W.key === null ? N : W.key) || null;
              return v(I, Ie, W, de);
            }
            case Dr: {
              var We = _.get(W.key === null ? N : W.key) || null;
              return y(I, We, W, de);
            }
            case _e:
              var Qt = W._payload, _t = W._init;
              return L(_, I, N, _t(Qt), de);
          }
          if (vt(W) || qa(W)) {
            var Bn = _.get(N) || null;
            return g(I, Bn, W, de, null);
          }
          Yh(I, W);
        }
        return typeof W == "function" && $h(I), null;
      }
      function z(_, I, N) {
        {
          if (typeof _ != "object" || _ === null)
            return I;
          switch (_.$$typeof) {
            case si:
            case Dr:
              CE(_, N);
              var W = _.key;
              if (typeof W != "string")
                break;
              if (I === null) {
                I = /* @__PURE__ */ new Set(), I.add(W);
                break;
              }
              if (!I.has(W)) {
                I.add(W);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", W);
              break;
            case _e:
              var de = _._payload, ue = _._init;
              z(ue(de), I, N);
              break;
          }
        }
        return I;
      }
      function F(_, I, N, W) {
        for (var de = null, ue = 0; ue < N.length; ue++) {
          var Ie = N[ue];
          de = z(Ie, de, _);
        }
        for (var We = null, Qt = null, _t = I, Bn = 0, Nt = 0, An = null; _t !== null && Nt < N.length; Nt++) {
          _t.index > Nt ? (An = _t, _t = null) : An = _t.sibling;
          var ua = x(_, _t, N[Nt], W);
          if (ua === null) {
            _t === null && (_t = An);
            break;
          }
          e && _t && ua.alternate === null && t(_, _t), Bn = s(ua, Bn, Nt), Qt === null ? We = ua : Qt.sibling = ua, Qt = ua, _t = An;
        }
        if (Nt === N.length) {
          if (a(_, _t), Lr()) {
            var Ir = Nt;
            js(_, Ir);
          }
          return We;
        }
        if (_t === null) {
          for (; Nt < N.length; Nt++) {
            var li = w(_, N[Nt], W);
            li !== null && (Bn = s(li, Bn, Nt), Qt === null ? We = li : Qt.sibling = li, Qt = li);
          }
          if (Lr()) {
            var Ra = Nt;
            js(_, Ra);
          }
          return We;
        }
        for (var Ma = i(_, _t); Nt < N.length; Nt++) {
          var oa = L(Ma, _, Nt, N[Nt], W);
          oa !== null && (e && oa.alternate !== null && Ma.delete(oa.key === null ? Nt : oa.key), Bn = s(oa, Bn, Nt), Qt === null ? We = oa : Qt.sibling = oa, Qt = oa);
        }
        if (e && Ma.forEach(function(jf) {
          return t(_, jf);
        }), Lr()) {
          var Fu = Nt;
          js(_, Fu);
        }
        return We;
      }
      function fe(_, I, N, W) {
        var de = qa(N);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (Cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), N.entries === de && (Eg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Eg = !0);
          var ue = de.call(N);
          if (ue)
            for (var Ie = null, We = ue.next(); !We.done; We = ue.next()) {
              var Qt = We.value;
              Ie = z(Qt, Ie, _);
            }
        }
        var _t = de.call(N);
        if (_t == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Bn = null, Nt = null, An = I, ua = 0, Ir = 0, li = null, Ra = _t.next(); An !== null && !Ra.done; Ir++, Ra = _t.next()) {
          An.index > Ir ? (li = An, An = null) : li = An.sibling;
          var Ma = x(_, An, Ra.value, W);
          if (Ma === null) {
            An === null && (An = li);
            break;
          }
          e && An && Ma.alternate === null && t(_, An), ua = s(Ma, ua, Ir), Nt === null ? Bn = Ma : Nt.sibling = Ma, Nt = Ma, An = li;
        }
        if (Ra.done) {
          if (a(_, An), Lr()) {
            var oa = Ir;
            js(_, oa);
          }
          return Bn;
        }
        if (An === null) {
          for (; !Ra.done; Ir++, Ra = _t.next()) {
            var Fu = w(_, Ra.value, W);
            Fu !== null && (ua = s(Fu, ua, Ir), Nt === null ? Bn = Fu : Nt.sibling = Fu, Nt = Fu);
          }
          if (Lr()) {
            var jf = Ir;
            js(_, jf);
          }
          return Bn;
        }
        for (var Qp = i(_, An); !Ra.done; Ir++, Ra = _t.next()) {
          var Gl = L(Qp, _, Ir, Ra.value, W);
          Gl !== null && (e && Gl.alternate !== null && Qp.delete(Gl.key === null ? Ir : Gl.key), ua = s(Gl, ua, Ir), Nt === null ? Bn = Gl : Nt.sibling = Gl, Nt = Gl);
        }
        if (e && Qp.forEach(function(Bw) {
          return t(_, Bw);
        }), Lr()) {
          var Pw = Ir;
          js(_, Pw);
        }
        return Bn;
      }
      function Ne(_, I, N, W) {
        if (I !== null && I.tag === He) {
          a(_, I.sibling);
          var de = u(I, N);
          return de.return = _, de;
        }
        a(_, I);
        var ue = KS(N, _.mode, W);
        return ue.return = _, ue;
      }
      function Re(_, I, N, W) {
        for (var de = N.key, ue = I; ue !== null; ) {
          if (ue.key === de) {
            var Ie = N.type;
            if (Ie === pa) {
              if (ue.tag === Ct) {
                a(_, ue.sibling);
                var We = u(ue, N.props.children);
                return We.return = _, We._debugSource = N._source, We._debugOwner = N._owner, We;
              }
            } else if (ue.elementType === Ie || // Keep this check inline so it only runs on the false path:
            pT(ue, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === _e && TE(Ie) === ue.type) {
              a(_, ue.sibling);
              var Qt = u(ue, N.props);
              return Qt.ref = mp(_, ue, N), Qt.return = _, Qt._debugSource = N._source, Qt._debugOwner = N._owner, Qt;
            }
            a(_, ue);
            break;
          } else
            t(_, ue);
          ue = ue.sibling;
        }
        if (N.type === pa) {
          var _t = $o(N.props.children, _.mode, W, N.key);
          return _t.return = _, _t;
        } else {
          var Bn = XS(N, _.mode, W);
          return Bn.ref = mp(_, I, N), Bn.return = _, Bn;
        }
      }
      function St(_, I, N, W) {
        for (var de = N.key, ue = I; ue !== null; ) {
          if (ue.key === de)
            if (ue.tag === me && ue.stateNode.containerInfo === N.containerInfo && ue.stateNode.implementation === N.implementation) {
              a(_, ue.sibling);
              var Ie = u(ue, N.children || []);
              return Ie.return = _, Ie;
            } else {
              a(_, ue);
              break;
            }
          else
            t(_, ue);
          ue = ue.sibling;
        }
        var We = ZS(N, _.mode, W);
        return We.return = _, We;
      }
      function pt(_, I, N, W) {
        var de = typeof N == "object" && N !== null && N.type === pa && N.key === null;
        if (de && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case si:
              return f(Re(_, I, N, W));
            case Dr:
              return f(St(_, I, N, W));
            case _e:
              var ue = N._payload, Ie = N._init;
              return pt(_, I, Ie(ue), W);
          }
          if (vt(N))
            return F(_, I, N, W);
          if (qa(N))
            return fe(_, I, N, W);
          Yh(_, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Ne(_, I, "" + N, W)) : (typeof N == "function" && $h(_), a(_, I));
      }
      return pt;
    }
    var Ef = RE(!0), ME = RE(!1);
    function NM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function kM(e, t) {
      for (var a = e.child; a !== null; )
        lw(a, t), a = a.sibling;
    }
    var yp = {}, jo = ko(yp), gp = ko(yp), Qh = ko(yp);
    function Wh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xE() {
      var e = Wh(Qh.current);
      return e;
    }
    function xg(e, t) {
      ia(Qh, t, e), ia(gp, e, e), ia(jo, yp, e);
      var a = $1(t);
      aa(jo, e), ia(jo, a, e);
    }
    function Cf(e) {
      aa(jo, e), aa(gp, e), aa(Qh, e);
    }
    function Dg() {
      var e = Wh(jo.current);
      return e;
    }
    function DE(e) {
      Wh(Qh.current);
      var t = Wh(jo.current), a = Q1(t, e.type);
      t !== a && (ia(gp, e, e), ia(jo, a, e));
    }
    function wg(e) {
      gp.current === e && (aa(jo, e), aa(gp, e));
    }
    var LM = 0, wE = 1, bE = 1, Sp = 2, Zi = ko(LM);
    function bg(e, t) {
      return (e & t) !== 0;
    }
    function Tf(e) {
      return e & wE;
    }
    function _g(e, t) {
      return e & wE | t;
    }
    function OM(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      ia(Zi, t, e);
    }
    function Rf(e) {
      aa(Zi, e);
    }
    function zM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || F0(i) || Ay(i))
              return t;
          }
        } else if (t.tag === wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ve) !== be;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), ir = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), lr = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), Ng = [];
    function kg() {
      for (var e = 0; e < Ng.length; e++) {
        var t = Ng[e];
        t._workInProgressVersionPrimary = null;
      }
      Ng.length = 0;
    }
    function AM(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = U.ReactCurrentDispatcher, Ep = U.ReactCurrentBatchConfig, Lg, Mf;
    Lg = /* @__PURE__ */ new Set();
    var Ps = H, $t = null, ur = null, or = null, qh = !1, Cp = !1, Tp = 0, jM = 0, UM = 25, V = null, xi = null, Fo = -1, Og = !1;
    function Ht() {
      {
        var e = V;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        xi !== null && (Fo++, xi[Fo] !== e && FM(e));
      }
    }
    function xf(e) {
      e != null && !vt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function FM(e) {
      {
        var t = Ye($t);
        if (!Lg.has(t) && (Lg.add(t), xi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = xi[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zg(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function Df(e, t, a, i, u, s) {
      Ps = s, $t = t, xi = e !== null ? e._debugHookTypes : null, Fo = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = H, e !== null && e.memoizedState !== null ? se.current = XE : xi !== null ? se.current = qE : se.current = GE;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Tp = 0, p >= UM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, ur = null, or = null, t.updateQueue = null, Fo = -1, se.current = KE, f = a(i, u);
        } while (Cp);
      }
      se.current = om, t._debugHookTypes = xi;
      var v = ur !== null && ur.next !== null;
      if (Ps = H, $t = null, ur = null, or = null, V = null, xi = null, Fo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== Le && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function wf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function _E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Aa) !== Le ? t.flags &= ~(lu | Zr | sn | Ke) : t.flags &= ~(sn | Ke), e.lanes = vo(e.lanes, a);
    }
    function NE() {
      if (se.current = om, qh) {
        for (var e = $t.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      Ps = H, $t = null, ur = null, or = null, xi = null, Fo = -1, V = null, BE = !1, Cp = !1, Tp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? $t.memoizedState = or = e : or = or.next = e, or;
    }
    function Di() {
      var e;
      if (ur === null) {
        var t = $t.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ur.next;
      var a;
      if (or === null ? a = $t.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, ur = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ur = e;
        var i = {
          memoizedState: ur.memoizedState,
          baseState: ur.baseState,
          baseQueue: ur.baseQueue,
          queue: ur.queue,
          next: null
        };
        or === null ? $t.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ag(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function jg(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = PM.bind(null, $t, s);
      return [i.memoizedState, f];
    }
    function Ug(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, w = s.baseState, x = null, L = null, z = null, F = g;
        do {
          var fe = F.lane;
          if (mu(Ps, fe)) {
            if (z !== null) {
              var Re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: yt,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              z = z.next = Re;
            }
            if (F.hasEagerState)
              w = F.eagerState;
            else {
              var St = F.action;
              w = e(w, St);
            }
          } else {
            var Ne = {
              lane: fe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            z === null ? (L = z = Ne, x = w) : z = z.next = Ne, $t.lanes = Ze($t.lanes, fe), Vp(fe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        z === null ? x = w : z.next = L, Se(w, i.memoizedState) || _p(), i.memoizedState = w, i.baseState = x, i.baseQueue = z, u.lastRenderedState = w;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var _ = pt;
        do {
          var I = _.lane;
          $t.lanes = Ze($t.lanes, I), Vp(I), _ = _.next;
        } while (_ !== pt);
      } else
        f === null && (u.lanes = H);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function Fg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ib(e, t, a) {
    }
    function lb(e, t, a) {
    }
    function Ig(e, t, a) {
      var i = $t, u = Pl(), s, f = Lr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Mf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      } else {
        if (s = t(), !Mf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, Ps) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, em(zE.bind(null, i, y, e), [e]), i.flags |= sn, Rp(ir | Or, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = $t, u = Di(), s = t();
      if (!Mf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Mf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (xp(zE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & ir) {
        i.flags |= sn, Rp(ir | Or, OE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(g, Ps) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= cs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = $t.updateQueue;
      if (u === null)
        u = kE(), $t.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && jE(e);
    }
    function zE(e, t, a) {
      var i = function() {
        AE(t) && jE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = Pa(e, je);
      t !== null && dr(t, e, je, Xt);
    }
    function Kh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: Ag,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = BM.bind(null, $t, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return Ug(Ag);
    }
    function Vg(e) {
      return Fg(Ag);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = $t.updateQueue;
      if (s === null)
        s = kE(), $t.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Pg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Mp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      $t.flags |= e, u.memoizedState = Rp(ir | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (zg(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      $t.flags |= e, u.memoizedState = Rp(ir | t, a, f, s);
    }
    function em(e, t) {
      return ($t.mode & Aa) !== Le ? Mp(lu | sn | Ml, Or, e, t) : Mp(sn | Ml, Or, e, t);
    }
    function xp(e, t) {
      return Jh(sn, Or, e, t);
    }
    function Bg(e, t) {
      return Mp(Ke, Vl, e, t);
    }
    function tm(e, t) {
      return Jh(Ke, Vl, e, t);
    }
    function Yg(e, t) {
      var a = Ke;
      return a |= Kr, ($t.mode & Aa) !== Le && (a |= Zr), Mp(a, lr, e, t);
    }
    function nm(e, t) {
      return Jh(Ke, lr, e, t);
    }
    function UE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ke;
      return u |= Kr, ($t.mode & Aa) !== Le && (u |= Zr), Mp(u, lr, UE.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(Ke, lr, UE.bind(null, t, e), i);
    }
    function IM(e, t) {
    }
    var am = IM;
    function Qg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Wg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (zg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = Di(), a = ur, i = a.memoizedState;
      return HE(t, i, e);
    }
    function IE(e) {
      var t = Di();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return HE(t, a, e);
    }
    function HE(e, t, a) {
      var i = !ey(Ps);
      if (i) {
        if (!Se(a, t)) {
          var u = Dd();
          $t.lanes = Ze($t.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function HM(e, t, a) {
      var i = Ua();
      Hn(Sr(i, ar)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function qg() {
      var e = Kh(!1), t = e[0], a = e[1], i = HM.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Hg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function PE() {
      var e = Vg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function VM() {
      return BE;
    }
    function Xg() {
      var e = Pl(), t = Dm(), a = t.identifierPrefix, i;
      if (Lr()) {
        var u = tM();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jM++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function PM(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        $E(t, u);
      else {
        var s = oE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          dr(s, e, i, f), QE(s, t, i);
        }
      }
      WE(e, i);
    }
    function BM(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        $E(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === H && (s === null || s.lanes === H)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = Ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                CM(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = oE(e, t, u, i);
        if (g !== null) {
          var w = Ta();
          dr(g, e, i, w), QE(g, t, i);
        }
      }
      WE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === $t || t !== null && t === $t;
    }
    function $E(e, t) {
      Cp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (xd(a)) {
        var i = t.lanes;
        i = wd(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, ho(e, u);
      }
    }
    function WE(e, t, a) {
      Nl(e, t);
    }
    var om = {
      readContext: Jn,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: X
    }, GE = null, qE = null, XE = null, KE = null, Bl = null, Ji = null, sm = null;
    {
      var Kg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ht(), xf(t), Qg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ht(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ht(), xf(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ht(), xf(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ht(), xf(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ht(), xf(t), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ht(), xf(t);
          var a = se.current;
          se.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ht();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ht(), Pg(e);
        },
        useState: function(e) {
          V = "useState", Ht();
          var t = se.current;
          se.current = Bl;
          try {
            return Kh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ht(), Gg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ht(), qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ht(), Ig(e, t, a);
        },
        useId: function() {
          return V = "useId", Ht(), Xg();
        },
        unstable_isNewReconciler: X
      }, qE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), Qg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = se.current;
          se.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Pg(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = se.current;
          se.current = Bl;
          try {
            return Kh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Gg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Ig(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Xg();
        },
        unstable_isNewReconciler: X
      }, XE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = se.current;
          se.current = Ji;
          try {
            return lm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = se.current;
          se.current = Ji;
          try {
            return Ug(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Zh();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = se.current;
          se.current = Ji;
          try {
            return Hg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", ne(), um();
        },
        unstable_isNewReconciler: X
      }, KE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = se.current;
          se.current = sm;
          try {
            return lm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = se.current;
          se.current = sm;
          try {
            return Fg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Zh();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = se.current;
          se.current = sm;
          try {
            return Vg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), PE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", ne(), um();
        },
        unstable_isNewReconciler: X
      }, Bl = {
        readContext: function(e) {
          return Kg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), Ht(), Qg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), Ht(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), Ht(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), Ht(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), Ht(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), Ht(), Yg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), Ht();
          var a = se.current;
          se.current = Bl;
          try {
            return Wg(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), Ht();
          var i = se.current;
          se.current = Bl;
          try {
            return jg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), Ht(), Pg(e);
        },
        useState: function(e) {
          V = "useState", $e(), Ht();
          var t = se.current;
          se.current = Bl;
          try {
            return Kh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), Ht(), Gg(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), Ht(), qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), Ht(), Ig(e, t, a);
        },
        useId: function() {
          return V = "useId", $e(), Ht(), Xg();
        },
        unstable_isNewReconciler: X
      }, Ji = {
        readContext: function(e) {
          return Kg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), ne(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), ne(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), ne();
          var a = se.current;
          se.current = Ji;
          try {
            return lm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), ne();
          var i = se.current;
          se.current = Ji;
          try {
            return Ug(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), ne(), Zh();
        },
        useState: function(e) {
          V = "useState", $e(), ne();
          var t = se.current;
          se.current = Ji;
          try {
            return Hg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), ne(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), ne(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), ne(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), ne(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", $e(), ne(), um();
        },
        unstable_isNewReconciler: X
      }, sm = {
        readContext: function(e) {
          return Kg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), ne(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), ne(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), ne(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), ne(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), ne(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), ne(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), ne();
          var a = se.current;
          se.current = Ji;
          try {
            return lm(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), ne();
          var i = se.current;
          se.current = Ji;
          try {
            return Fg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), ne(), Zh();
        },
        useState: function(e) {
          V = "useState", $e(), ne();
          var t = se.current;
          se.current = Ji;
          try {
            return Vg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), ne(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), ne(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), ne(), PE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), ne(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", $e(), ne(), um();
        },
        unstable_isNewReconciler: X
      };
    }
    var Io = J.unstable_now, ZE = 0, cm = -1, Dp = -1, fm = -1, Zg = !1, dm = !1;
    function JE() {
      return Zg;
    }
    function YM() {
      dm = !0;
    }
    function $M() {
      Zg = !1, dm = !1;
    }
    function QM() {
      Zg = dm, dm = !1;
    }
    function eC() {
      return ZE;
    }
    function tC() {
      ZE = Io();
    }
    function Jg(e) {
      Dp = Io(), e.actualStartTime < 0 && (e.actualStartTime = Io());
    }
    function nC(e) {
      Dp = -1;
    }
    function pm(e, t) {
      if (Dp >= 0) {
        var a = Io() - Dp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Dp = -1;
      }
    }
    function Yl(e) {
      if (cm >= 0) {
        var t = Io() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function eS(e) {
      if (fm >= 0) {
        var t = Io() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function $l() {
      cm = Io();
    }
    function tS() {
      fm = Io();
    }
    function nS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Bs(e, t) {
      return {
        value: e,
        source: t,
        stack: $u(t),
        digest: null
      };
    }
    function rS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function WM(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = WM(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var w = v + `
` + f + `

` + ("" + y);
        console.error(w);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var GM = typeof WeakMap == "function" ? WeakMap : Map;
    function rC(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ag, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        HD(u), aS(e, t);
      }, i;
    }
    function iS(e, t, a) {
      var i = Lu(Xt, a);
      i.tag = ag;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          vT(e), aS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        vT(e), aS(e, t), typeof u != "function" && FD(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function aC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new GM(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = VD.bind(null, e, t, a);
        rr && Pp(e, a), t.then(s, s);
      }
    }
    function qM(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function XM(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Le && (a === he || a === Qe || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function iC(e) {
      var t = e;
      do {
        if (t.tag === De && zM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function lC(e, t, a, i, u) {
      if ((e.mode & ot) === Le) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= Ve, a.flags |= fs, a.flags &= ~(fc | va), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = xn;
            else {
              var f = Lu(Xt, je);
              f.tag = Uh, Ao(a, f, je);
            }
          }
          a.lanes = Ze(a.lanes, je);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function KM(e, t, a, i, u) {
      if (a.flags |= va, rr && Pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        XM(a), Lr() && a.mode & ot && X0();
        var f = iC(t);
        if (f !== null) {
          f.flags &= ~Tn, lC(f, t, a, e, u), f.mode & ot && aC(e, s, u), qM(f, e, s);
          return;
        } else {
          if (!po(u)) {
            aC(e, s, u), FS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Lr() && a.mode & ot) {
        X0();
        var v = iC(t);
        if (v !== null) {
          (v.flags & Gn) === be && (v.flags |= Tn), lC(v, t, a, e, u), Ky(Bs(i, a));
          return;
        }
      }
      i = Bs(i, a), ND(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= Gn;
            var w = In(u);
            y.lanes = Ze(y.lanes, w);
            var x = rC(y, g, w);
            ug(y, x);
            return;
          }
          case pe:
            var L = i, z = y.type, F = y.stateNode;
            if ((y.flags & Ve) === be && (typeof z.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !iT(F))) {
              y.flags |= Gn;
              var fe = In(u);
              y.lanes = Ze(y.lanes, fe);
              var Ne = iS(y, L, fe);
              ug(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ZM() {
      return null;
    }
    var wp = U.ReactCurrentOwner, el = !1, lS, bp, uS, oS, sS, Ys, cS, vm;
    lS = {}, bp = {}, uS = {}, oS = {}, sS = {}, Ys = !1, cS = {}, vm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = ME(t, null, a, i) : t.child = Ef(t, e.child, a, i);
    }
    function JM(e, t, a, i) {
      t.child = Ef(t, e.child, null, i), t.child = Ef(t, null, a, i);
    }
    function uC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Sf(t, u), _l(t);
      {
        if (wp.current = t, Gr(!0), v = Df(e, t, f, i, p, u), y = wf(), t.mode & yn) {
          Fn(!0);
          try {
            v = Df(e, t, f, i, p, u), y = wf();
          } finally {
            Fn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (_E(e, t, u), Ou(e, t, u)) : (Lr() && y && $y(t), t.flags |= Tl, Ea(e, t, v, u), t.child);
    }
    function oC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (aw(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Af(s), t.tag = Fe, t.type = f, pS(t, s), sC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Gi(
            p,
            i,
            // Resolved props
            "prop",
            Mt(s)
          );
        }
        var v = qS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Gi(
          g,
          i,
          // Resolved props
          "prop",
          Mt(y)
        );
      }
      var w = e.child, x = SS(e, u);
      if (!x) {
        var L = w.memoizedProps, z = a.compare;
        if (z = z !== null ? z : we, z(L, i) && e.ref === t.ref)
          return Ou(e, t, u);
      }
      t.flags |= Tl;
      var F = qs(w, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _e) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Gi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Mt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (we(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (el = !1, t.pendingProps = i = g, SS(e, u))
            (e.flags & fs) !== be && (el = !0);
          else
            return t.lanes = e.lanes, Ou(e, t, u);
      }
      return fS(e, t, a, i, u);
    }
    function cC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & ot) === Le) {
          var f = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, wm(t, a);
        } else if (ra(a, na)) {
          var w = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var x = s !== null ? s.baseLanes : a;
          wm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ze(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, wm(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = Ze(s.baseLanes, a), t.memoizedState = null) : L = a, wm(t, L);
      }
      return Ea(e, t, u, a), t.child;
    }
    function ex(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function tx(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function nx(e, t, a) {
      {
        t.flags |= Ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function fC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= cd);
    }
    function fS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          Mt(a)
        );
      }
      var f;
      {
        var p = pf(t, a, !0);
        f = vf(t, p);
      }
      var v, y;
      Sf(t, u), _l(t);
      {
        if (wp.current = t, Gr(!0), v = Df(e, t, a, i, f, u), y = wf(), t.mode & yn) {
          Fn(!0);
          try {
            v = Df(e, t, a, i, f, u), y = wf();
          } finally {
            Fn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (_E(e, t, u), Ou(e, t, u)) : (Lr() && y && $y(t), t.flags |= Tl, Ea(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      {
        switch (Sw(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ve, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), g = In(u);
            t.lanes = Ze(t.lanes, g);
            var w = iS(t, Bs(y, t), g);
            ug(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && Gi(
            x,
            i,
            // Resolved props
            "prop",
            Mt(a)
          );
        }
      }
      var L;
      Hl(a) ? (L = !0, Dh(t)) : L = !1, Sf(t, u);
      var z = t.stateNode, F;
      z === null ? (mm(e, t), SE(t, a, i), Sg(t, a, i, u), F = !0) : e === null ? F = bM(t, a, i, u) : F = _M(e, t, a, i, u);
      var fe = dS(e, t, a, F, L, u);
      {
        var Ne = t.stateNode;
        F && Ne.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Ys = !0);
      }
      return fe;
    }
    function dS(e, t, a, i, u, s) {
      fC(e, t);
      var f = (t.flags & Ve) !== be;
      if (!i && !f)
        return u && Q0(t, a, !1), Ou(e, t, s);
      var p = t.stateNode;
      wp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nC();
      else {
        _l(t);
        {
          if (Gr(!0), v = p.render(), t.mode & yn) {
            Fn(!0);
            try {
              p.render();
            } finally {
              Fn(!1);
            }
          }
          Gr(!1);
        }
        uu();
      }
      return t.flags |= Tl, e !== null && f ? JM(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && Q0(t, a, !0), t.child;
    }
    function pC(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), xg(e, t.containerInfo);
    }
    function rx(e, t, a) {
      if (pC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      fE(e, t), Vh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Tn) {
          var g = Bs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return vC(e, t, p, a, g);
        } else if (p !== s) {
          var w = Bs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return vC(e, t, p, a, w);
        } else {
          uM(t);
          var x = ME(t, null, p, a);
          t.child = x;
          for (var L = x; L; )
            L.flags = L.flags & ~nn | La, L = L.sibling;
        }
      } else {
        if (yf(), p === s)
          return Ou(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function vC(e, t, a, i, u) {
      return yf(), Ky(u), t.flags |= Tn, Ea(e, t, a, i), t.child;
    }
    function ax(e, t, a) {
      DE(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = ky(i, u);
      return p ? f = null : s !== null && ky(i, s) && (t.flags |= It), fC(e, t), Ea(e, t, f, a), t.child;
    }
    function ix(e, t) {
      return e === null && Xy(t), null;
    }
    function lx(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = iw(v), g = Ki(v, u), w;
      switch (y) {
        case he:
          return pS(t, v), t.type = v = Af(v), w = fS(null, t, v, g, i), w;
        case pe:
          return t.type = v = BS(v), w = dC(null, t, v, g, i), w;
        case Qe:
          return t.type = v = YS(v), w = uC(null, t, v, g, i), w;
        case it: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && Gi(
              x,
              g,
              // Resolved for outer only
              "prop",
              Mt(v)
            );
          }
          return w = oC(
            null,
            t,
            v,
            Ki(v.type, g),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === _e && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function ux(e, t, a, i, u) {
      mm(e, t), t.tag = pe;
      var s;
      return Hl(a) ? (s = !0, Dh(t)) : s = !1, Sf(t, u), SE(t, a, i), Sg(t, a, i, u), dS(null, t, a, !0, s, u);
    }
    function ox(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = pf(t, a, !1);
        s = vf(t, f);
      }
      Sf(t, i);
      var p, v;
      _l(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Mt(a) || "Unknown";
          lS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), lS[y] = !0);
        }
        t.mode & yn && Xi.recordLegacyContextWarning(t, null), Gr(!0), wp.current = t, p = Df(null, t, a, u, s, i), v = wf(), Gr(!1);
      }
      if (uu(), t.flags |= Tl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Mt(a) || "Unknown";
        bp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = Mt(a) || "Unknown";
          bp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), bp[w] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Hl(a) ? (x = !0, Dh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, lg(t), gE(t, p), Sg(t, a, u, i), dS(null, t, a, !0, x, i);
      } else {
        if (t.tag = he, t.mode & yn) {
          Fn(!0);
          try {
            p = Df(null, t, a, u, s, i), v = wf();
          } finally {
            Fn(!1);
          }
        }
        return Lr() && v && $y(t), Ea(null, t, p, i), pS(t, a), t.child;
      }
    }
    function pS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = _r();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), sS[u] || (sS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Mt(t) || "Unknown";
          oS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), oS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Mt(t) || "Unknown";
          uS[p] || (S("%s: Function components do not support contextType.", p), uS[p] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: yt
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: ZM(),
        transitions: null
      };
    }
    function sx(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function cx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return bg(e, Sp);
    }
    function fx(e, t) {
      return vo(e.childLanes, t);
    }
    function hC(e, t, a) {
      var i = t.pendingProps;
      Ew(t) && (t.flags |= Ve);
      var u = Zi.current, s = !1, f = (t.flags & Ve) !== be;
      if (f || cx(u, e) ? (s = !0, t.flags &= ~Ve) : (e === null || e.memoizedState !== null) && (u = OM(u, bE)), u = Tf(u), Uo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return mx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = dx(t, y, g, a), x = t.child;
          return x.memoizedState = hS(a), t.memoizedState = vS, w;
        } else
          return mS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var z = L.dehydrated;
          if (z !== null)
            return yx(e, t, f, i, z, L, a);
        }
        if (s) {
          var F = i.fallback, fe = i.children, Ne = vx(e, t, fe, F, a), Re = t.child, St = e.child.memoizedState;
          return Re.memoizedState = St === null ? hS(a) : sx(St, a), Re.childLanes = fx(e, a), t.memoizedState = vS, Ne;
        } else {
          var pt = i.children, _ = px(e, t, pt, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = yS(u, i);
      return s.return = e, e.child = s, s;
    }
    function dx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ot) === Le && s !== null ? (p = s, p.childLanes = H, p.pendingProps = f, e.mode & ze && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = yS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function yS(e, t, a) {
      return mT(e, t, H, null);
    }
    function mC(e, t) {
      return qs(e, t);
    }
    function px(e, t, a, i) {
      var u = e.child, s = u.sibling, f = mC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Le && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Lt) : p.push(s);
      }
      return t.child = f, f;
    }
    function vx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ot) === Le && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = H, y.pendingProps = v, t.mode & ze && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = mC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var w;
      return p !== null ? w = qs(p, i) : (w = $o(i, s, u, null), w.flags |= nn), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function hm(e, t, a, i) {
      i !== null && Ky(i), Ef(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = mS(t, s);
      return f.flags |= nn, t.memoizedState = null, f;
    }
    function hx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = yS(f, s), v = $o(i, s, u, null);
      return v.flags |= nn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== Le && Ef(t, e.child, null, u), v;
    }
    function mx(e, t, a) {
      return (e.mode & ot) === Le ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = je) : Ay(t) ? e.lanes = cu : e.lanes = na, null;
    }
    function yx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tn) {
          t.flags &= ~Tn;
          var _ = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hm(e, t, f, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ve, null;
          var I = i.children, N = i.fallback, W = hx(e, t, I, N, f), de = t.child;
          return de.memoizedState = hS(f), t.memoizedState = vS, W;
        }
      else {
        if (iM(), (t.mode & ot) === Le)
          return hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = TR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = rS(w, p, y);
          return hm(e, t, f, x);
        }
        var L = ra(f, e.childLanes);
        if (el || L) {
          var z = Dm();
          if (z !== null) {
            var F = ny(z, f);
            if (F !== yt && F !== s.retryLane) {
              s.retryLane = F;
              var fe = Xt;
              Pa(e, F), dr(z, e, F, fe);
            }
          }
          FS();
          var Ne = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hm(e, t, f, Ne);
        } else if (F0(u)) {
          t.flags |= Ve, t.child = e.child;
          var Re = PD.bind(null, e);
          return RR(u, Re), null;
        } else {
          oM(t, u, s.treeContext);
          var St = i.children, pt = mS(t, St);
          return pt.flags |= La, pt;
        }
      }
    }
    function yC(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), ng(e.return, t, a);
    }
    function gx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && yC(i, a, e);
        } else if (i.tag === wt)
          yC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Sx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ex(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cS[e])
        if (cS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Cx(e, t) {
      e !== void 0 && !vm[e] && (e !== "collapsed" && e !== "hidden" ? (vm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function gC(e, t) {
      {
        var a = vt(e), i = !a && typeof qa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Tx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!gC(e[a], a))
              return;
        } else {
          var i = qa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!gC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function SC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ex(u), Cx(s, u), Tx(f, u), Ea(e, t, f, a);
      var p = Zi.current, v = bg(p, Sp);
      if (v)
        p = _g(p, Sp), t.flags |= Ve;
      else {
        var y = e !== null && (e.flags & Ve) !== be;
        y && gx(t, t.child, a), p = Tf(p);
      }
      if (Uo(t, p), (t.mode & ot) === Le)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Sx(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), gS(
              t,
              !1,
              // isBackwards
              w,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var z = L.alternate;
              if (z !== null && Gh(z) === null) {
                t.child = L;
                break;
              }
              var F = L.sibling;
              L.sibling = x, x = L, L = F;
            }
            gS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            gS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Rx(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ef(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var EC = !1;
    function Mx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || EC || (EC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (uE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !Mh())
            return Ou(e, t, a);
        } else
          gM(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var CC = !1;
    function xx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (CC || (CC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Sf(t, a);
      var f = Jn(i);
      _l(t);
      var p;
      return wp.current = t, Gr(!0), p = s(f), Gr(!1), uu(), t.flags |= Tl, Ea(e, t, p, a), t.child;
    }
    function _p() {
      el = !0;
    }
    function mm(e, t) {
      (t.mode & ot) === Le && e !== null && (e.alternate = null, t.alternate = null, t.flags |= nn);
    }
    function Ou(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), Vp(t.lanes), ra(a, t.childLanes) ? (NM(e, t), t.child) : null;
    }
    function Dx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Lt) : s.push(e), a.flags |= nn, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function wx(e, t, a) {
      switch (t.tag) {
        case re:
          pC(t), t.stateNode, yf();
          break;
        case ie:
          DE(t);
          break;
        case pe: {
          var i = t.type;
          Hl(i) && Dh(t);
          break;
        }
        case me:
          xg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          uE(t, s, u);
          break;
        }
        case ct:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Tf(Zi.current)), t.flags |= Ve, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return hC(e, t, a);
            Uo(t, Tf(Zi.current));
            var w = Ou(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Uo(t, Tf(Zi.current));
          break;
        }
        case wt: {
          var x = (e.flags & Ve) !== be, L = ra(a, t.childLanes);
          if (x) {
            if (L)
              return SC(e, t, a);
            t.flags |= Ve;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Uo(t, Zi.current), L)
            break;
          return null;
        }
        case Ae:
        case qe:
          return t.lanes = H, cC(e, t, a);
      }
      return Ou(e, t, a);
    }
    function TC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dx(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Mh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          el = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ve) === be)
            return el = !1, wx(e, t, a);
          (e.flags & fs) !== be ? el = !0 : el = !1;
        }
      } else if (el = !1, Lr() && JR(t)) {
        var f = t.index, p = eM();
        q0(t, p, f);
      }
      switch (t.lanes = H, t.tag) {
        case rt:
          return ox(e, t, t.type, a);
        case tn: {
          var v = t.elementType;
          return lx(e, t, v, a);
        }
        case he: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : Ki(y, g);
          return fS(e, t, y, w, a);
        }
        case pe: {
          var x = t.type, L = t.pendingProps, z = t.elementType === x ? L : Ki(x, L);
          return dC(e, t, x, z, a);
        }
        case re:
          return rx(e, t, a);
        case ie:
          return ax(e, t, a);
        case He:
          return ix(e, t);
        case De:
          return hC(e, t, a);
        case me:
          return Rx(e, t, a);
        case Qe: {
          var F = t.type, fe = t.pendingProps, Ne = t.elementType === F ? fe : Ki(F, fe);
          return uC(e, t, F, Ne, a);
        }
        case Ct:
          return ex(e, t, a);
        case st:
          return tx(e, t, a);
        case ct:
          return nx(e, t, a);
        case at:
          return Mx(e, t, a);
        case fn:
          return xx(e, t, a);
        case it: {
          var Re = t.type, St = t.pendingProps, pt = Ki(Re, St);
          if (t.type !== t.elementType) {
            var _ = Re.propTypes;
            _ && Gi(
              _,
              pt,
              // Resolved for outer only
              "prop",
              Mt(Re)
            );
          }
          return pt = Ki(Re.type, pt), oC(e, t, Re, pt, a);
        }
        case Fe:
          return sC(e, t, t.type, t.pendingProps, a);
        case xn: {
          var I = t.type, N = t.pendingProps, W = t.elementType === I ? N : Ki(I, N);
          return ux(e, t, I, W, a);
        }
        case wt:
          return SC(e, t, a);
        case En:
          break;
        case Ae:
          return cC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bf(e) {
      e.flags |= Ke;
    }
    function RC(e) {
      e.flags |= Xr, e.flags |= cd;
    }
    var MC, ES, xC, DC;
    MC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === He)
          X1(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, ES = function(e, t) {
    }, xC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Dg(), v = Z1(f, a, s, i, u, p);
        t.updateQueue = v, v && bf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && bf(t);
    };
    function Np(e, t) {
      if (!Lr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = H, i = be;
      if (t) {
        if ((e.mode & ze) !== Le) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ze(a, Ze(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ze) !== Le) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function bx(e, t, a) {
      if (pM() && (t.mode & ot) !== Le && (t.flags & Ve) === be)
        return nE(t), yf(), t.flags |= Tn | va | Gn, !1;
      var i = kh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fM(t), zr(t), (t.mode & ze) !== Le) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (yf(), (t.flags & Ve) === be && (t.memoizedState = null), t.flags |= Ke, zr(t), (t.mode & ze) !== Le) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rE(), !0;
    }
    function wC(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case rt:
        case tn:
        case Fe:
        case he:
        case Qe:
        case Ct:
        case st:
        case ct:
        case fn:
        case it:
          return zr(t), null;
        case pe: {
          var u = t.type;
          return Hl(u) && xh(t), zr(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (Cf(t), Py(t), kg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = kh(t);
            if (f)
              bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tn) !== be) && (t.flags |= ka, rE());
            }
          }
          return ES(e, t), zr(t), null;
        }
        case ie: {
          wg(t);
          var v = xE(), y = t.type;
          if (e !== null && t.stateNode != null)
            xC(e, t, y, i, v), e.ref !== t.ref && RC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = Dg(), w = kh(t);
            if (w)
              sM(t, v, g) && bf(t);
            else {
              var x = q1(y, i, v, g, t);
              MC(x, t, !1, !1), t.stateNode = x, K1(x, y, i, v) && bf(t);
            }
            t.ref !== null && RC(t);
          }
          return zr(t), null;
        }
        case He: {
          var L = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            DC(e, t, z, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = xE(), fe = Dg(), Ne = kh(t);
            Ne ? cM(t) && bf(t) : t.stateNode = J1(L, F, fe, t);
          }
          return zr(t), null;
        }
        case De: {
          Rf(t);
          var Re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var St = bx(e, t, Re);
            if (!St)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & Ve) !== be)
            return t.lanes = a, (t.mode & ze) !== Le && nS(t), t;
          var pt = Re !== null, _ = e !== null && e.memoizedState !== null;
          if (pt !== _ && pt) {
            var I = t.child;
            if (I.flags |= Rl, (t.mode & ot) !== Le) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !P);
              N || bg(Zi.current, bE) ? _D() : FS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= Ke), zr(t), (t.mode & ze) !== Le && pt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Cf(t), ES(e, t), e === null && QR(t.stateNode.containerInfo), zr(t), null;
        case at:
          var ue = t.type._context;
          return tg(ue, t), zr(t), null;
        case xn: {
          var Ie = t.type;
          return Hl(Ie) && xh(t), zr(t), null;
        }
        case wt: {
          Rf(t);
          var We = t.memoizedState;
          if (We === null)
            return zr(t), null;
          var Qt = (t.flags & Ve) !== be, _t = We.rendering;
          if (_t === null)
            if (Qt)
              Np(We, !1);
            else {
              var Bn = kD() && (e === null || (e.flags & Ve) === be);
              if (!Bn)
                for (var Nt = t.child; Nt !== null; ) {
                  var An = Gh(Nt);
                  if (An !== null) {
                    Qt = !0, t.flags |= Ve, Np(We, !1);
                    var ua = An.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ke), t.subtreeFlags = be, kM(t, a), Uo(t, _g(Zi.current, Sp)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              We.tail !== null && mn() > GC() && (t.flags |= Ve, Qt = !0, Np(We, !1), t.lanes = Rd);
            }
          else {
            if (!Qt) {
              var Ir = Gh(_t);
              if (Ir !== null) {
                t.flags |= Ve, Qt = !0;
                var li = Ir.updateQueue;
                if (li !== null && (t.updateQueue = li, t.flags |= Ke), Np(We, !0), We.tail === null && We.tailMode === "hidden" && !_t.alternate && !Lr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mn() * 2 - We.renderingStartTime > GC() && a !== na && (t.flags |= Ve, Qt = !0, Np(We, !1), t.lanes = Rd);
            }
            if (We.isBackwards)
              _t.sibling = t.child, t.child = _t;
            else {
              var Ra = We.last;
              Ra !== null ? Ra.sibling = _t : t.child = _t, We.last = _t;
            }
          }
          if (We.tail !== null) {
            var Ma = We.tail;
            We.rendering = Ma, We.tail = Ma.sibling, We.renderingStartTime = mn(), Ma.sibling = null;
            var oa = Zi.current;
            return Qt ? oa = _g(oa, Sp) : oa = Tf(oa), Uo(t, oa), Ma;
          }
          return zr(t), null;
        }
        case En:
          break;
        case Ae:
        case qe: {
          US(t);
          var Fu = t.memoizedState, jf = Fu !== null;
          if (e !== null) {
            var Qp = e.memoizedState, Gl = Qp !== null;
            Gl !== jf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !R && (t.flags |= Rl);
          }
          return !jf || (t.mode & ot) === Le ? zr(t) : ra(Wl, na) && (zr(t), t.subtreeFlags & (nn | Ke) && (t.flags |= Rl)), null;
        }
        case Ot:
          return null;
        case Tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _x(e, t, a) {
      switch (Qy(t), t.tag) {
        case pe: {
          var i = t.type;
          Hl(i) && xh(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | Ve, (t.mode & ze) !== Le && nS(t), t) : null;
        }
        case re: {
          t.stateNode, Cf(t), Py(t), kg();
          var s = t.flags;
          return (s & Gn) !== be && (s & Ve) === be ? (t.flags = s & ~Gn | Ve, t) : null;
        }
        case ie:
          return wg(t), null;
        case De: {
          Rf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            yf();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | Ve, (t.mode & ze) !== Le && nS(t), t) : null;
        }
        case wt:
          return Rf(t), null;
        case me:
          return Cf(t), null;
        case at:
          var v = t.type._context;
          return tg(v, t), null;
        case Ae:
        case qe:
          return US(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function bC(e, t, a) {
      switch (Qy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && xh(t);
          break;
        }
        case re: {
          t.stateNode, Cf(t), Py(t), kg();
          break;
        }
        case ie: {
          wg(t);
          break;
        }
        case me:
          Cf(t);
          break;
        case De:
          Rf(t);
          break;
        case wt:
          Rf(t);
          break;
        case at:
          var u = t.type._context;
          tg(u, t);
          break;
        case Ae:
        case qe:
          US(t);
          break;
      }
    }
    var _C = null;
    _C = /* @__PURE__ */ new Set();
    var ym = !1, Ar = !1, Nx = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, _f = null, Nf = null;
    function kx(e) {
      iu(null, function() {
        throw e;
      }), od();
    }
    var Lx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ze)
        try {
          $l(), t.componentWillUnmount();
        } finally {
          Yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        Ho(lr, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Lx(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Ox(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function kC(e, t) {
      try {
        OC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function kf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Je && ft && e.mode & ze)
              try {
                $l(), i = a(null);
              } finally {
                Yl(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function gm(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var LC = !1;
    function zx(e, t) {
      W1(e.containerInfo), Ee = t, Ax();
      var a = LC;
      return LC = !1, a;
    }
    function Ax() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & io) !== be && t !== null ? (t.return = e, Ee = t) : jx();
      }
    }
    function jx() {
      for (; Ee !== null; ) {
        var e = Ee;
        Ft(e);
        try {
          Ux(e);
        } catch (a) {
          un(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Ux(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ka) !== be) {
        switch (Ft(e), e.tag) {
          case he:
          case Qe:
          case Fe:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ki(e.type, i), u);
              {
                var p = _C;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              gR(v.containerInfo);
            }
            break;
          }
          case ie:
          case He:
          case me:
          case xn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function tl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Ba ? Sc(t) : (e & lr) !== Ba && Ec(t), (e & Vl) !== Ba && Bp(!0), gm(t, a, p), (e & Vl) !== Ba && Bp(!1), (e & Or) !== Ba ? Nv() : (e & lr) !== Ba && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== Ba ? _v(t) : (e & lr) !== Ba && kv(t);
            var f = s.create;
            (e & Vl) !== Ba && Bp(!0), s.destroy = f(), (e & Vl) !== Ba && Bp(!1), (e & Or) !== Ba ? Ed() : (e & lr) !== Ba && Lv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== be ? v = "useLayoutEffect" : (s.tag & Vl) !== be ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Fx(e, t) {
      if ((t.flags & Ke) !== be)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eC(), p = t.alternate === null ? "mount" : "update";
            JE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case re:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ct:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ix(e, t, a, i) {
      if ((a.flags & yr) !== be)
        switch (a.tag) {
          case he:
          case Qe:
          case Fe: {
            if (!Ar)
              if (a.mode & ze)
                try {
                  $l(), Ho(lr | ir, a);
                } finally {
                  Yl(a);
                }
              else
                Ho(lr | ir, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Ke && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    $l(), u.componentDidMount();
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ki(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & ze)
                  try {
                    $l(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), pE(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              pE(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Ke) {
              var w = a.type, x = a.memoizedProps;
              aR(g, w, x);
            }
            break;
          }
          case He:
            break;
          case me:
            break;
          case ct: {
            {
              var L = a.memoizedProps, z = L.onCommit, F = L.onRender, fe = a.stateNode.effectDuration, Ne = eC(), Re = t === null ? "mount" : "update";
              JE() && (Re = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof z == "function" && z(a.memoizedProps.id, Re, fe, Ne), jD(a);
                var St = a.return;
                e:
                  for (; St !== null; ) {
                    switch (St.tag) {
                      case re:
                        var pt = St.stateNode;
                        pt.effectDuration += fe;
                        break e;
                      case ct:
                        var _ = St.stateNode;
                        _.effectDuration += fe;
                        break e;
                    }
                    St = St.return;
                  }
              }
            }
            break;
          }
          case De: {
            Wx(e, a);
            break;
          }
          case wt:
          case xn:
          case En:
          case Ae:
          case qe:
          case Tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && OC(a);
    }
    function Hx(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          if (e.mode & ze)
            try {
              $l(), NC(e, e.return);
            } finally {
              Yl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ox(e, e.return, t), kC(e, e.return);
          break;
        }
        case ie: {
          kC(e, e.return);
          break;
        }
      }
    }
    function Vx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? vR(u) : mR(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === He) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? hR(s) : yR(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function OC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ze)
            try {
              $l(), u = t(i);
            } finally {
              Yl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Px(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && qR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Bx(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === ie || e.tag === re || e.tag === me;
    }
    function jC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== He && t.tag !== Yt; ) {
            if (t.flags & nn || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & nn))
            return t.stateNode;
        }
    }
    function Yx(e) {
      var t = Bx(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & It && (U0(a), t.flags &= ~It);
          var i = jC(e);
          RS(e, i, a);
          break;
        }
        case re:
        case me: {
          var u = t.stateNode.containerInfo, s = jC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ie || i === He;
      if (u) {
        var s = e.stateNode;
        t ? cR(a, s, t) : oR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.tag, u = i === ie || i === He;
      if (u) {
        var s = e.stateNode;
        t ? sR(a, s, t) : uR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          RS(f, t, a);
          for (var p = f.sibling; p !== null; )
            RS(p, t, a), p = p.sibling;
        }
      }
    }
    var jr = null, nl = !1;
    function $x(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                jr = i.stateNode, nl = !1;
                break e;
              }
              case re: {
                jr = i.stateNode.containerInfo, nl = !0;
                break e;
              }
              case me: {
                jr = i.stateNode.containerInfo, nl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        UC(e, t, a), jr = null, nl = !1;
      }
      Px(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        UC(e, t, i), i = i.sibling;
    }
    function UC(e, t, a) {
      switch (gd(a), a.tag) {
        case ie:
          Ar || kf(a, t);
        case He: {
          {
            var i = jr, u = nl;
            jr = null, Vo(e, t, a), jr = i, nl = u, jr !== null && (nl ? dR(jr, a.stateNode) : fR(jr, a.stateNode));
          }
          return;
        }
        case Yt: {
          jr !== null && (nl ? pR(jr, a.stateNode) : zy(jr, a.stateNode));
          return;
        }
        case me: {
          {
            var s = jr, f = nl;
            jr = a.stateNode.containerInfo, nl = !0, Vo(e, t, a), jr = s, nl = f;
          }
          return;
        }
        case he:
        case Qe:
        case it:
        case Fe: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, x = w.destroy, L = w.tag;
                  x !== void 0 && ((L & Vl) !== Ba ? gm(a, t, x) : (L & lr) !== Ba && (Ec(a), a.mode & ze ? ($l(), gm(a, t, x), Yl(a)) : gm(a, t, x), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case pe: {
          if (!Ar) {
            kf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && CS(a, t, z);
          }
          Vo(e, t, a);
          return;
        }
        case En: {
          Vo(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var F = Ar;
            Ar = F || a.memoizedState !== null, Vo(e, t, a), Ar = F;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function Qx(e) {
      e.memoizedState;
    }
    function Wx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && LR(s);
          }
        }
      }
    }
    function FC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Nx()), t.forEach(function(i) {
          var u = BD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (_f !== null && Nf !== null)
                Pp(Nf, _f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Gx(e, t, a) {
      _f = a, Nf = e, Ft(t), IC(t, e), Ft(t), _f = null, Nf = null;
    }
    function rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            $x(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = Ks();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Ft(p), IC(p, e), p = p.sibling;
      Ft(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case he:
        case Qe:
        case it:
        case Fe: {
          if (rl(t, e), Ql(e), u & Ke) {
            try {
              tl(Vl | ir, e, e.return), Ho(Vl | ir, e);
            } catch (Ie) {
              un(e, e.return, Ie);
            }
            if (e.mode & ze) {
              try {
                $l(), tl(lr | ir, e, e.return);
              } catch (Ie) {
                un(e, e.return, Ie);
              }
              Yl(e);
            } else
              try {
                tl(lr | ir, e, e.return);
              } catch (Ie) {
                un(e, e.return, Ie);
              }
          }
          return;
        }
        case pe: {
          rl(t, e), Ql(e), u & Xr && i !== null && kf(i, i.return);
          return;
        }
        case ie: {
          rl(t, e), Ql(e), u & Xr && i !== null && kf(i, i.return);
          {
            if (e.flags & It) {
              var s = e.stateNode;
              try {
                U0(s);
              } catch (Ie) {
                un(e, e.return, Ie);
              }
            }
            if (u & Ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    iR(f, g, y, v, p, e);
                  } catch (Ie) {
                    un(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case He: {
          if (rl(t, e), Ql(e), u & Ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, x = e.memoizedProps, L = i !== null ? i.memoizedProps : x;
            try {
              lR(w, L, x);
            } catch (Ie) {
              un(e, e.return, Ie);
            }
          }
          return;
        }
        case re: {
          if (rl(t, e), Ql(e), u & Ke && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                kR(t.containerInfo);
              } catch (Ie) {
                un(e, e.return, Ie);
              }
          }
          return;
        }
        case me: {
          rl(t, e), Ql(e);
          return;
        }
        case De: {
          rl(t, e), Ql(e);
          var F = e.child;
          if (F.flags & Rl) {
            var fe = F.stateNode, Ne = F.memoizedState, Re = Ne !== null;
            if (fe.isHidden = Re, Re) {
              var St = F.alternate !== null && F.alternate.memoizedState !== null;
              St || bD();
            }
          }
          if (u & Ke) {
            try {
              Qx(e);
            } catch (Ie) {
              un(e, e.return, Ie);
            }
            FC(e);
          }
          return;
        }
        case Ae: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var _ = Ar;
            Ar = _ || pt, rl(t, e), Ar = _;
          } else
            rl(t, e);
          if (Ql(e), u & Rl) {
            var I = e.stateNode, N = e.memoizedState, W = N !== null, de = e;
            if (I.isHidden = W, W && !pt && (de.mode & ot) !== Le) {
              Ee = de;
              for (var ue = de.child; ue !== null; )
                Ee = ue, Xx(ue), ue = ue.sibling;
            }
            Vx(de, W);
          }
          return;
        }
        case wt: {
          rl(t, e), Ql(e), u & Ke && FC(e);
          return;
        }
        case En:
          return;
        default: {
          rl(t, e), Ql(e);
          return;
        }
      }
    }
    function Ql(e) {
      var t = e.flags;
      if (t & nn) {
        try {
          Yx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~nn;
      }
      t & La && (e.flags &= ~La);
    }
    function qx(e, t, a) {
      _f = a, Nf = t, Ee = e, HC(e, t, a), _f = null, Nf = null;
    }
    function HC(e, t, a) {
      for (var i = (e.mode & ot) !== Le; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || ym;
          if (p) {
            MS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, w = ym, x = Ar;
            ym = p, Ar = g, Ar && !x && (Ee = u, Kx(u));
            for (var L = s; L !== null; )
              Ee = L, HC(
                L,
                // New root; bubble back up to here and stop.
                t,
                a
              ), L = L.sibling;
            Ee = u, ym = w, Ar = x, MS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== be && s !== null ? (s.return = u, Ee = s) : MS(e, t, a);
      }
    }
    function MS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & yr) !== be) {
          var u = i.alternate;
          Ft(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function Xx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case he:
          case Qe:
          case it:
          case Fe: {
            if (t.mode & ze)
              try {
                $l(), tl(lr, t, t.return);
              } finally {
                Yl(t);
              }
            else
              tl(lr, t, t.return);
            break;
          }
          case pe: {
            kf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case ie: {
            kf(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : VC(e);
      }
    }
    function VC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Kx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            PC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : PC(e);
      }
    }
    function PC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Ft(t);
        try {
          Hx(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Zx(e, t, a, i) {
      Ee = t, Jx(t, e, a, i);
    }
    function Jx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Oa) !== be && s !== null ? (s.return = u, Ee = s) : eD(e, t, a, i);
      }
    }
    function eD(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & sn) !== be) {
          Ft(u);
          try {
            tD(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function tD(e, t, a, i) {
      switch (t.tag) {
        case he:
        case Qe:
        case Fe: {
          if (t.mode & ze) {
            tS();
            try {
              Ho(Or | ir, t);
            } finally {
              eS(t);
            }
          } else
            Ho(Or | ir, t);
          break;
        }
      }
    }
    function nD(e) {
      Ee = e, rD();
    }
    function rD() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Lt) !== be) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, lD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Oa) !== be && t !== null ? (t.return = e, Ee = t) : aD();
      }
    }
    function aD() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & sn) !== be && (Ft(e), iD(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function iD(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          e.mode & ze ? (tS(), tl(Or | ir, e, e.return), eS(e)) : tl(Or | ir, e, e.return);
          break;
        }
      }
    }
    function lD(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Ft(a), oD(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : uD(e);
      }
    }
    function uD(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (zC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function oD(e, t) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          e.mode & ze ? (tS(), tl(Or, e, t), eS(e)) : tl(Or, e, t);
          break;
        }
      }
    }
    function sD(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          try {
            Ho(lr | ir, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function cD(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          try {
            Ho(Or | ir, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function fD(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe: {
          try {
            tl(lr | ir, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case he:
        case Qe:
        case Fe:
          try {
            tl(Or | ir, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var kp = Symbol.for;
      kp("selector.component"), kp("selector.has_pseudo_class"), kp("selector.role"), kp("selector.test_id"), kp("selector.text");
    }
    var pD = [];
    function vD() {
      pD.forEach(function(e) {
        return e();
      });
    }
    var hD = U.ReactCurrentActQueue;
    function mD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function BC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hD.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yD = Math.ceil, xS = U.ReactCurrentDispatcher, DS = U.ReactCurrentOwner, Ur = U.ReactCurrentBatchConfig, al = U.ReactCurrentActQueue, sr = (
      /*             */
      0
    ), YC = (
      /*               */
      1
    ), Fr = (
      /*                */
      2
    ), wi = (
      /*                */
      4
    ), zu = 0, Lp = 1, $s = 2, Sm = 3, Op = 4, $C = 5, wS = 6, gt = sr, Ca = null, Nn = null, cr = H, Wl = H, bS = ko(H), fr = zu, zp = null, Em = H, Ap = H, Cm = H, jp = null, Ya = null, _S = 0, QC = 500, WC = 1 / 0, gD = 500, Au = null;
    function Up() {
      WC = mn() + gD;
    }
    function GC() {
      return WC;
    }
    var Tm = !1, NS = null, Lf = null, Qs = !1, Po = null, Fp = H, kS = [], LS = null, SD = 50, Ip = 0, OS = null, zS = !1, Rm = !1, ED = 50, Of = 0, Mm = null, Hp = Xt, xm = H, qC = !1;
    function Dm() {
      return Ca;
    }
    function Ta() {
      return (gt & (Fr | wi)) !== sr ? mn() : (Hp !== Xt || (Hp = mn()), Hp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ot) === Le)
        return je;
      if ((gt & Fr) !== sr && cr !== H)
        return In(cr);
      var a = mM() !== hM;
      if (a) {
        if (Ur.transition !== null) {
          var i = Ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xm === yt && (xm = Dd()), xm;
      }
      var u = Ua();
      if (u !== yt)
        return u;
      var s = eR();
      return s;
    }
    function CD(e) {
      var t = e.mode;
      return (t & ot) === Le ? je : ty();
    }
    function dr(e, t, a, i) {
      $D(), qC && S("useInsertionEffect must not schedule updates."), zS && (Rm = !0), yu(e, a, i), (gt & Fr) !== H && e === Ca ? GD(t) : (rr && kd(e, t, a), qD(t), e === Ca && ((gt & Fr) === sr && (Ap = Ze(Ap, a)), fr === Op && Yo(e, cr)), $a(e, i), a === je && gt === sr && (t.mode & ot) === Le && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !al.isBatchingLegacy && (Up(), G0()));
    }
    function TD(e, t, a) {
      var i = e.current;
      i.lanes = t, yu(e, t, a), $a(e, a);
    }
    function RD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gt & Fr) !== sr
      );
    }
    function $a(e, t) {
      var a = e.callbackNode;
      Zm(e, t);
      var i = ys(e, e === Ca ? cr : H);
      if (i === H) {
        a !== null && fT(a), e.callbackNode = null, e.callbackPriority = yt;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(al.current !== null && a !== VS)) {
        a == null && s !== je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && fT(a);
      var f;
      if (u === je)
        e.tag === Lo ? (al.isBatchingLegacy !== null && (al.didScheduleLegacyUpdate = !0), ZR(ZC.bind(null, e))) : W0(ZC.bind(null, e)), al.current !== null ? al.current.push(Oo) : nR(function() {
          (gt & (Fr | wi)) === sr && Oo();
        }), f = null;
      else {
        var p;
        switch (Ts(i)) {
          case gr:
            p = mc;
            break;
          case ar:
            p = ya;
            break;
          case Bi:
            p = yi;
            break;
          case Es:
            p = xl;
            break;
          default:
            p = yi;
            break;
        }
        f = PS(p, XC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XC(e, t) {
      if ($M(), Hp = Xt, xm = H, (gt & (Fr | wi)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Uu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ys(e, e === Ca ? cr : H);
      if (u === H)
        return null;
      var s = !Ss(e, u) && !Fv(e, u) && !t, f = s ? OD(e, u) : bm(e, u);
      if (f !== zu) {
        if (f === $s) {
          var p = Md(e);
          p !== H && (u = p, f = AS(e, p));
        }
        if (f === Lp) {
          var v = zp;
          throw Ws(e, H), Yo(e, u), $a(e, mn()), v;
        }
        if (f === wS)
          Yo(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !xD(g)) {
            if (f = bm(e, u), f === $s) {
              var w = Md(e);
              w !== H && (u = w, f = AS(e, w));
            }
            if (f === Lp) {
              var x = zp;
              throw Ws(e, H), Yo(e, u), $a(e, mn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, MD(e, f, u);
        }
      }
      return $a(e, mn()), e.callbackNode === a ? XC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = jp;
      if (Vn(e)) {
        var i = Ws(e, t);
        i.flags |= Tn, $R(e.containerInfo);
      }
      var u = bm(e, t);
      if (u !== $s) {
        var s = Ya;
        Ya = a, s !== null && KC(s);
      }
      return u;
    }
    function KC(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function MD(e, t, a) {
      switch (t) {
        case zu:
        case Lp:
          throw new Error("Root did not complete. This is a bug in React.");
        case $s: {
          Gs(e, Ya, Au);
          break;
        }
        case Sm: {
          if (Yo(e, a), Hc(a) && // do not delay if we're inside an act() scope
          !dT()) {
            var i = _S + QC - mn();
            if (i > 10) {
              var u = ys(e, H);
              if (u !== H)
                break;
              var s = e.suspendedLanes;
              if (!mu(s, a)) {
                Ta(), _d(e, s);
                break;
              }
              e.timeoutHandle = Ly(Gs.bind(null, e, Ya, Au), i);
              break;
            }
          }
          Gs(e, Ya, Au);
          break;
        }
        case Op: {
          if (Yo(e, a), Uv(a))
            break;
          if (!dT()) {
            var f = jv(e, a), p = f, v = mn() - p, y = YD(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ly(Gs.bind(null, e, Ya, Au), y);
              break;
            }
          }
          Gs(e, Ya, Au);
          break;
        }
        case $C: {
          Gs(e, Ya, Au);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function xD(e) {
      for (var t = e; ; ) {
        if (t.flags & cs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & cs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = vo(t, Cm), t = vo(t, Ap), bd(e, t);
    }
    function ZC(e) {
      if (QM(), (gt & (Fr | wi)) !== sr)
        throw new Error("Should not already be working.");
      Uu();
      var t = ys(e, H);
      if (!ra(t, je))
        return $a(e, mn()), null;
      var a = bm(e, t);
      if (e.tag !== Lo && a === $s) {
        var i = Md(e);
        i !== H && (t = i, a = AS(e, i));
      }
      if (a === Lp) {
        var u = zp;
        throw Ws(e, H), Yo(e, t), $a(e, mn()), u;
      }
      if (a === wS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, Ya, Au), $a(e, mn()), null;
    }
    function DD(e, t) {
      t !== H && (ho(e, Ze(t, je)), $a(e, mn()), (gt & (Fr | wi)) === sr && (Up(), Oo()));
    }
    function jS(e, t) {
      var a = gt;
      gt |= YC;
      try {
        return e(t);
      } finally {
        gt = a, gt === sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !al.isBatchingLegacy && (Up(), G0());
      }
    }
    function wD(e, t, a, i, u) {
      var s = Ua(), f = Ur.transition;
      try {
        return Ur.transition = null, Hn(gr), e(t, a, i, u);
      } finally {
        Hn(s), Ur.transition = f, gt === sr && Up();
      }
    }
    function ju(e) {
      Po !== null && Po.tag === Lo && (gt & (Fr | wi)) === sr && Uu();
      var t = gt;
      gt |= YC;
      var a = Ur.transition, i = Ua();
      try {
        return Ur.transition = null, Hn(gr), e ? e() : void 0;
      } finally {
        Hn(i), Ur.transition = a, gt = t, (gt & (Fr | wi)) === sr && Oo();
      }
    }
    function JC() {
      return (gt & (Fr | wi)) !== sr;
    }
    function wm(e, t) {
      ia(bS, Wl, e), Wl = Ze(Wl, t);
    }
    function US(e) {
      Wl = bS.current, aa(bS, e);
    }
    function Ws(e, t) {
      e.finishedWork = null, e.finishedLanes = H;
      var a = e.timeoutHandle;
      if (a !== Oy && (e.timeoutHandle = Oy, tR(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          bC(u, i), i = i.return;
        }
      Ca = e;
      var s = qs(e.current, null);
      return Nn = s, cr = Wl = t, fr = zu, zp = null, Em = H, Ap = H, Cm = H, jp = null, Ya = null, EM(), Xi.discardPendingWarnings(), s;
    }
    function eT(e, t) {
      do {
        var a = Nn;
        try {
          if (Ah(), NE(), Cn(), DS.current = null, a === null || a.return === null) {
            fr = Lp, zp = t, Nn = null;
            return;
          }
          if (Je && a.mode & ze && pm(a, !0), ht)
            if (uu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ov(a, i, cr);
            } else
              Cc(a, t, cr);
          KM(e, a.return, a, t, cr), aT(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function tT() {
      var e = xS.current;
      return xS.current = om, e === null ? om : e;
    }
    function nT(e) {
      xS.current = e;
    }
    function bD() {
      _S = mn();
    }
    function Vp(e) {
      Em = Ze(e, Em);
    }
    function _D() {
      fr === zu && (fr = Sm);
    }
    function FS() {
      (fr === zu || fr === Sm || fr === $s) && (fr = Op), Ca !== null && (gs(Em) || gs(Ap)) && Yo(Ca, cr);
    }
    function ND(e) {
      fr !== Op && (fr = $s), jp === null ? jp = [e] : jp.push(e);
    }
    function kD() {
      return fr === zu;
    }
    function bm(e, t) {
      var a = gt;
      gt |= Fr;
      var i = tT();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), Bc(e, t);
        }
        Au = Ld(), Ws(e, t);
      }
      ni(t);
      do
        try {
          LD();
          break;
        } catch (s) {
          eT(e, s);
        }
      while (!0);
      if (Ah(), gt = a, nT(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oo(), Ca = null, cr = H, fr;
    }
    function LD() {
      for (; Nn !== null; )
        rT(Nn);
    }
    function OD(e, t) {
      var a = gt;
      gt |= Fr;
      var i = tT();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), Bc(e, t);
        }
        Au = Ld(), Up(), Ws(e, t);
      }
      ni(t);
      do
        try {
          zD();
          break;
        } catch (s) {
          eT(e, s);
        }
      while (!0);
      return Ah(), nT(i), gt = a, Nn !== null ? (ps(), zu) : (oo(), Ca = null, cr = H, fr);
    }
    function zD() {
      for (; Nn !== null && !hc(); )
        rT(Nn);
    }
    function rT(e) {
      var t = e.alternate;
      Ft(e);
      var a;
      (e.mode & ze) !== Le ? (Jg(e), a = IS(t, e, Wl), pm(e, !0)) : a = IS(t, e, Wl), Cn(), e.memoizedProps = e.pendingProps, a === null ? aT(e) : Nn = a, DS.current = null;
    }
    function aT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === be) {
          Ft(t);
          var u = void 0;
          if ((t.mode & ze) === Le ? u = wC(a, t, Wl) : (Jg(t), u = wC(a, t, Wl), pm(t, !1)), Cn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = _x(a, t);
          if (s !== null) {
            s.flags &= Mv, Nn = s;
            return;
          }
          if ((t.mode & ze) !== Le) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = be, i.deletions = null;
          else {
            fr = wS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      fr === zu && (fr = $C);
    }
    function Gs(e, t, a) {
      var i = Ua(), u = Ur.transition;
      try {
        Ur.transition = null, Hn(gr), AD(e, t, a, i);
      } finally {
        Ur.transition = u, Hn(i);
      }
      return null;
    }
    function AD(e, t, a, i) {
      do
        Uu();
      while (Po !== null);
      if (QD(), (gt & (Fr | wi)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (gc(s), u === null)
        return Sd(), null;
      if (s === H && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = H, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = yt;
      var f = Ze(u.lanes, u.childLanes);
      Nd(e, f), e === Ca && (Ca = null, Nn = null, cr = H), ((u.subtreeFlags & Oa) !== be || (u.flags & Oa) !== be) && (Qs || (Qs = !0, LS = a, PS(yi, function() {
        return Uu(), null;
      })));
      var p = (u.subtreeFlags & (io | Jr | yr | Oa)) !== be, v = (u.flags & (io | Jr | yr | Oa)) !== be;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = Ua();
        Hn(gr);
        var w = gt;
        gt |= wi, DS.current = null, zx(e, u), tC(), Gx(e, u, s), G1(e.containerInfo), e.current = u, zv(s), qx(u, e, s), uo(), wv(), gt = w, Hn(g), Ur.transition = y;
      } else
        e.current = u, tC();
      var x = Qs;
      if (Qs ? (Qs = !1, Po = e, Fp = s) : (Of = 0, Mm = null), f = e.pendingLanes, f === H && (Lf = null), x || oT(e.current, !1), Hi(u.stateNode, i), rr && e.memoizedUpdaters.clear(), vD(), $a(e, mn()), t !== null)
        for (var L = e.onRecoverableError, z = 0; z < t.length; z++) {
          var F = t[z], fe = F.stack, Ne = F.digest;
          L(F.value, {
            componentStack: fe,
            digest: Ne
          });
        }
      if (Tm) {
        Tm = !1;
        var Re = NS;
        throw NS = null, Re;
      }
      return ra(Fp, je) && e.tag !== Lo && Uu(), f = e.pendingLanes, ra(f, je) ? (YM(), e === OS ? Ip++ : (Ip = 0, OS = e)) : Ip = 0, Oo(), Sd(), null;
    }
    function Uu() {
      if (Po !== null) {
        var e = Ts(Fp), t = ry(Bi, e), a = Ur.transition, i = Ua();
        try {
          return Ur.transition = null, Hn(t), UD();
        } finally {
          Hn(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function jD(e) {
      kS.push(e), Qs || (Qs = !0, PS(yi, function() {
        return Uu(), null;
      }));
    }
    function UD() {
      if (Po === null)
        return !1;
      var e = LS;
      LS = null;
      var t = Po, a = Fp;
      if (Po = null, Fp = H, (gt & (Fr | wi)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, Rm = !1, Av(a);
      var i = gt;
      gt |= wi, nD(t.current), Zx(t, t.current, a, e);
      {
        var u = kS;
        kS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Fx(t, f);
        }
      }
      ds(), oT(t.current, !0), gt = i, Oo(), Rm ? t === Mm ? Of++ : (Of = 0, Mm = t) : Of = 0, zS = !1, Rm = !1, wl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function iT(e) {
      return Lf !== null && Lf.has(e);
    }
    function FD(e) {
      Lf === null ? Lf = /* @__PURE__ */ new Set([e]) : Lf.add(e);
    }
    function ID(e) {
      Tm || (Tm = !0, NS = e);
    }
    var HD = ID;
    function lT(e, t, a) {
      var i = Bs(a, t), u = rC(e, i, je), s = Ao(e, u, je), f = Ta();
      s !== null && (yu(s, je, f), $a(s, f));
    }
    function un(e, t, a) {
      if (kx(a), Bp(!1), e.tag === re) {
        lT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          lT(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !iT(s)) {
            var f = Bs(a, e), p = iS(i, f, je), v = Ao(i, p, je), y = Ta();
            v !== null && (yu(v, je, y), $a(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function VD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      _d(e, a), XD(e), Ca === e && mu(cr, a) && (fr === Op || fr === Sm && Hc(cr) && mn() - _S < QC ? Ws(e, H) : Cm = Ze(Cm, a)), $a(e, u);
    }
    function uT(e, t) {
      t === yt && (t = CD(e));
      var a = Ta(), i = Pa(e, t);
      i !== null && (yu(i, t, a), $a(i, a));
    }
    function PD(e) {
      var t = e.memoizedState, a = yt;
      t !== null && (a = t.retryLane), uT(e, a);
    }
    function BD(e, t) {
      var a = yt, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case wt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), uT(e, a);
    }
    function YD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yD(e / 1960) * 1960;
    }
    function $D() {
      if (Ip > SD)
        throw Ip = 0, OS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Of > ED && (Of = 0, Mm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function QD() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function oT(e, t) {
      Ft(e), _m(e, Zr, fD), t && _m(e, lu, dD), _m(e, Zr, sD), t && _m(e, lu, cD), Cn();
    }
    function _m(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== be ? i = i.child : ((i.flags & t) !== be && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Nm = null;
    function sT(e) {
      {
        if ((gt & Fr) !== sr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== rt && t !== re && t !== pe && t !== he && t !== Qe && t !== it && t !== Fe)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Nm !== null) {
          if (Nm.has(a))
            return;
          Nm.add(a);
        } else
          Nm = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Ft(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ft(e) : Cn();
        }
      }
    }
    var IS;
    {
      var WD = null;
      IS = function(e, t, a) {
        var i = yT(WD, t);
        try {
          return TC(e, t, a);
        } catch (s) {
          if (lM() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), NE(), bC(e, t), yT(t, i), t.mode & ze && Jg(t), iu(null, TC, null, e, t, a), Xm()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var cT = !1, HS;
    HS = /* @__PURE__ */ new Set();
    function GD(e) {
      if (Wr && !VM())
        switch (e.tag) {
          case he:
          case Qe:
          case Fe: {
            var t = Nn && Ye(Nn) || "Unknown", a = t;
            if (!HS.has(a)) {
              HS.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            cT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), cT = !0);
            break;
          }
        }
    }
    function Pp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          kd(e, i, t);
        });
      }
    }
    var VS = {};
    function PS(e, t) {
      {
        var a = al.current;
        return a !== null ? (a.push(t), VS) : vc(e, t);
      }
    }
    function fT(e) {
      if (e !== VS)
        return Dv(e);
    }
    function dT() {
      return al.current !== null;
    }
    function qD(e) {
      {
        if (e.mode & ot) {
          if (!BC())
            return;
        } else if (!mD() || gt !== sr || e.tag !== he && e.tag !== Qe && e.tag !== Fe)
          return;
        if (al.current === null) {
          var t = hn;
          try {
            Ft(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Ft(e) : Cn();
          }
        }
      }
    }
    function XD(e) {
      e.tag !== Lo && BC() && al.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Bp(e) {
      qC = e;
    }
    var bi = null, zf = null, KD = function(e) {
      bi = e;
    };
    function Af(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function BS(e) {
      return Af(e);
    }
    function YS(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Af(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function pT(e, t) {
      {
        if (bi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case he: {
            (typeof i == "function" || s === _e) && (u = !0);
            break;
          }
          case Qe: {
            (s === ce || s === _e) && (u = !0);
            break;
          }
          case it:
          case Fe: {
            (s === Xe || s === _e) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = bi(a);
          if (f !== void 0 && f === bi(i))
            return !0;
        }
        return !1;
      }
    }
    function vT(e) {
      {
        if (bi === null || typeof WeakSet != "function")
          return;
        zf === null && (zf = /* @__PURE__ */ new WeakSet()), zf.add(e);
      }
    }
    var ZD = function(e, t) {
      {
        if (bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Uu(), ju(function() {
          $S(e.current, i, a);
        });
      }
    }, JD = function(e, t) {
      {
        if (e.context !== ai)
          return;
        Uu(), ju(function() {
          Yp(t, e, null, null);
        });
      }
    };
    function $S(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case he:
          case Fe:
          case pe:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var w = bi(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === pe ? g = !0 : y = !0));
        }
        if (zf !== null && (zf.has(e) || i !== null && zf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = Pa(e, je);
          x !== null && dr(x, e, je, Xt);
        }
        u !== null && !g && $S(u, t, a), s !== null && $S(s, t, a);
      }
    }
    var ew = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case he:
          case Fe:
          case pe:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? tw(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function tw(e, t) {
      {
        var a = nw(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nw(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var WS;
    {
      WS = !1;
      try {
        var hT = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function rw(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = be, this.subtreeFlags = be, this.deletions = null, this.lanes = H, this.childLanes = H, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new rw(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function aw(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function iw(e) {
      if (typeof e == "function")
        return GS(e) ? pe : he;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return Qe;
        if (t === Xe)
          return it;
      }
      return rt;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = be, a.subtreeFlags = be, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case rt:
        case he:
        case Fe:
          a.type = Af(e.type);
          break;
        case pe:
          a.type = BS(e.type);
          break;
        case Qe:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function lw(e, t) {
      e.flags &= nr | nn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = H, e.lanes = t, e.child = null, e.subtreeFlags = be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = be, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function uw(e, t, a) {
      var i;
      return e === wh ? (i = ot, t === !0 && (i |= yn, i |= Aa)) : i = Le, rr && (i |= ze), ii(re, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = rt, p = e;
      if (typeof e == "function")
        GS(e) ? (f = pe, p = BS(p)) : p = Af(p);
      else if (typeof e == "string")
        f = ie;
      else
        e:
          switch (e) {
            case pa:
              return $o(a.children, u, s, t);
            case ci:
              f = st, u |= yn, (u & ot) !== Le && (u |= Aa);
              break;
            case T:
              return ow(a, u, s, t);
            case Ge:
              return sw(a, u, s, t);
            case mt:
              return cw(a, u, s, t);
            case Jt:
              return mT(a, u, s, t);
            case tr:
            case kn:
            case fi:
            case Hu:
            case Zt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case B:
                    f = at;
                    break e;
                  case ee:
                    f = fn;
                    break e;
                  case ce:
                    f = Qe, p = YS(p);
                    break e;
                  case Xe:
                    f = it;
                    break e;
                  case _e:
                    f = tn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ye(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = ii(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = ii(Ct, e, i, t);
      return u.lanes = a, u;
    }
    function ow(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ii(ct, e, i, t | ze);
      return u.elementType = T, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function sw(e, t, a, i) {
      var u = ii(De, e, i, t);
      return u.elementType = Ge, u.lanes = a, u;
    }
    function cw(e, t, a, i) {
      var u = ii(wt, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function mT(e, t, a, i) {
      var u = ii(Ae, e, i, t);
      u.elementType = Jt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function KS(e, t, a) {
      var i = ii(He, e, null, t);
      return i.lanes = a, i;
    }
    function fw() {
      var e = ii(ie, null, null, Le);
      return e.elementType = "DELETED", e;
    }
    function dw(e) {
      var t = ii(Yt, null, null, Le);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ii(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function yT(e, t) {
      return e === null && (e = ii(rt, null, null, Le)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pw(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Oy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = yt, this.eventTimes = Pc(H), this.expirationTimes = Pc(Xt), this.pendingLanes = H, this.suspendedLanes = H, this.pingedLanes = H, this.expiredLanes = H, this.mutableReadLanes = H, this.finishedLanes = H, this.entangledLanes = H, this.entanglements = Pc(H), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < an; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case wh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function gT(e, t, a, i, u, s, f, p, v, y) {
      var g = new pw(e, t, a, p, v), w = uw(t, s);
      g.current = w, w.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = x;
      }
      return lg(w), g;
    }
    var JS = "18.2.0";
    function vw(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Br(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Dr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var e0, t0;
    e0 = !1, t0 = {};
    function ST(e) {
      if (!e)
        return ai;
      var t = Na(e), a = KR(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Hl(i))
          return $0(t, i, a);
      }
      return a;
    }
    function hw(e, t) {
      {
        var a = Na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = za(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = Ye(a) || "Component";
          if (!t0[s]) {
            t0[s] = !0;
            var f = hn;
            try {
              Ft(u), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ft(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function ET(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return gT(e, t, v, y, a, i, u, s, f);
    }
    function CT(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, w = gT(a, i, g, e, u, s, f, p, v);
      w.context = ST(null);
      var x = w.current, L = Ta(), z = Bo(x), F = Lu(L, z);
      return F.callback = t ?? null, Ao(x, F, z), TD(w, z, L), w;
    }
    function Yp(e, t, a, i) {
      bv(t, e);
      var u = t.current, s = Ta(), f = Bo(u);
      ou(f);
      var p = ST(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !e0 && (e0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(hn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(u, v, f);
      return y !== null && (dr(y, u, f, s), Hh(y, u, f)), f;
    }
    function km(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mw(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (Vn(t)) {
            var a = Jm(t);
            DD(t, a);
          }
          break;
        }
        case De: {
          ju(function() {
            var u = Pa(e, je);
            if (u !== null) {
              var s = Ta();
              dr(u, e, je, s);
            }
          });
          var i = je;
          n0(e, i);
          break;
        }
      }
    }
    function TT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hv(a.retryLane, t));
    }
    function n0(e, t) {
      TT(e, t);
      var a = e.alternate;
      a && TT(a, t);
    }
    function yw(e) {
      if (e.tag === De) {
        var t = so, a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          dr(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function gw(e) {
      if (e.tag === De) {
        var t = Bo(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          dr(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function RT(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var MT = function(e) {
      return null;
    };
    function Sw(e) {
      return MT(e);
    }
    var xT = function(e) {
      return !1;
    };
    function Ew(e) {
      return xT(e);
    }
    var DT = null, wT = null, bT = null, _T = null, NT = null, kT = null, LT = null, OT = null, zT = null;
    {
      var AT = function(e, t, a) {
        var i = t[a], u = vt(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (vt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AT(e[i], t, a + 1), u);
      }, jT = function(e, t) {
        return AT(e, t, 0);
      }, UT = function(e, t, a, i) {
        var u = t[i], s = vt(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], vt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = UT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, FT = function(e, t, a) {
        if (t.length !== a.length) {
          nt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              nt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UT(e, t, a, 0);
      }, IT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = vt(e) ? e.slice() : lt({}, e);
        return s[u] = IT(e[u], t, a + 1, i), s;
      }, HT = function(e, t, a) {
        return IT(e, t, 0, a);
      }, r0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DT = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = HT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Pa(e, je);
          f !== null && dr(f, e, je, Xt);
        }
      }, wT = function(e, t, a) {
        var i = r0(e, t);
        if (i !== null) {
          var u = jT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = Pa(e, je);
          s !== null && dr(s, e, je, Xt);
        }
      }, bT = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = FT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Pa(e, je);
          f !== null && dr(f, e, je, Xt);
        }
      }, _T = function(e, t, a) {
        e.pendingProps = HT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, je);
        i !== null && dr(i, e, je, Xt);
      }, NT = function(e, t) {
        e.pendingProps = jT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, je);
        a !== null && dr(a, e, je, Xt);
      }, kT = function(e, t, a) {
        e.pendingProps = FT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, je);
        i !== null && dr(i, e, je, Xt);
      }, LT = function(e) {
        var t = Pa(e, je);
        t !== null && dr(t, e, je, Xt);
      }, OT = function(e) {
        MT = e;
      }, zT = function(e) {
        xT = e;
      };
    }
    function Cw(e) {
      var t = za(e);
      return t === null ? null : t.stateNode;
    }
    function Tw(e) {
      return null;
    }
    function Rw() {
      return hn;
    }
    function Mw(e) {
      var t = e.findFiberByHostInstance, a = U.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DT,
        overrideHookStateDeletePath: wT,
        overrideHookStateRenamePath: bT,
        overrideProps: _T,
        overridePropsDeletePath: NT,
        overridePropsRenamePath: kT,
        setErrorHandler: OT,
        setSuspenseHandler: zT,
        scheduleUpdate: LT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Cw,
        findFiberByHostInstance: t || Tw,
        // React Refresh
        findHostInstancesForRefresh: ew,
        scheduleRefresh: ZD,
        scheduleRoot: JD,
        setRefreshHandler: KD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Rw,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: JS
      });
    }
    var VT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function a0(e) {
      this._internalRoot = e;
    }
    Lm.prototype.render = a0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Om(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = RT(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yp(e, t, null, null);
    }, Lm.prototype.unmount = a0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ju(function() {
          Yp(null, e, null, null);
        }), H0(t);
      }
    };
    function xw(e, t) {
      if (!Om(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      PT(e);
      var a = !1, i = !1, u = "", s = VT;
      t != null && (t.hydrate ? nt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === si && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = ET(e, wh, null, a, i, u, s);
      Eh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Zd(p), new a0(f);
    }
    function Lm(e) {
      this._internalRoot = e;
    }
    function Dw(e) {
      e && Gv(e);
    }
    Lm.prototype.unstable_scheduleHydration = Dw;
    function ww(e, t, a) {
      if (!Om(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      PT(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = VT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = CT(t, null, e, wh, i, s, f, p, v);
      if (Eh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          AM(y, w);
        }
      return new Lm(y);
    }
    function Om(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ja || e.nodeType === Jl || !le));
    }
    function $p(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ja || e.nodeType === Jl || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function PT(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var bw = U.ReactCurrentOwner, BT;
    BT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = RT(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = i0(e), u = !!(i && No(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function i0(e) {
      return e ? e.nodeType === Ja ? e.documentElement : e.firstChild : null;
    }
    function YT() {
    }
    function _w(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = km(f);
            s.call(x);
          };
        }
        var f = CT(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YT
        );
        e._reactRootContainer = f, Eh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Zd(p), ju(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = km(g);
            y.call(x);
          };
        }
        var g = ET(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YT
        );
        e._reactRootContainer = g, Eh(g.current, e);
        var w = e.nodeType === Ln ? e.parentNode : e;
        return Zd(w), ju(function() {
          Yp(t, g, a, i);
        }), g;
      }
    }
    function Nw(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function zm(e, t, a, i, u) {
      BT(a), Nw(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = _w(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = km(f);
            p.call(v);
          };
        }
        Yp(t, f, e, u);
      }
      return km(f);
    }
    function kw(e) {
      {
        var t = bw.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : hw(e, "findDOMNode");
    }
    function Lw(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return zm(null, e, t, !0, a);
    }
    function Ow(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return zm(null, e, t, !1, a);
    }
    function zw(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ss(e))
        throw new Error("parentComponent must be a valid React Component");
      return zm(e, t, a, !1, i);
    }
    function Aw(e) {
      if (!$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = i0(e), i = a && !No(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ju(function() {
          zm(null, null, e, !1, function() {
            e._reactRootContainer = null, H0(e);
          });
        }), !0;
      } else {
        {
          var u = i0(e), s = !!(u && No(u)), f = e.nodeType === qr && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ve(mw), Pv(yw), Ms(gw), zd(Ua), Yv(Cs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tv(F1), sc(jS, wD, ju);
    function jw(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Om(t))
        throw new Error("Target container is not a DOM element.");
      return vw(e, t, null, a);
    }
    function Uw(e, t, a, i) {
      return zw(e, t, a, i);
    }
    var l0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, df, Ch, oc, ls, jS]
    };
    function Fw(e, t) {
      return l0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), xw(e, t);
    }
    function Iw(e, t, a) {
      return l0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ww(e, t, a);
    }
    function Hw(e) {
      return JC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ju(e);
    }
    var Vw = Mw({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: JS,
      rendererPackageName: "react-dom"
    });
    if (!Vw && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var $T = window.location.protocol;
      /^(https?|file):$/.test($T) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ($T === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0, Wa.createPortal = jw, Wa.createRoot = Fw, Wa.findDOMNode = kw, Wa.flushSync = Hw, Wa.hydrate = Lw, Wa.hydrateRoot = Iw, Wa.render = Ow, Wa.unmountComponentAtNode = Aw, Wa.unstable_batchedUpdates = jS, Wa.unstable_renderSubtreeIntoContainer = Uw, Wa.version = JS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wa;
}
function r1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r1);
    } catch (Z) {
      console.error(Z);
    }
  }
}
process.env.NODE_ENV === "production" ? (r1(), f0.exports = Kw()) : f0.exports = Zw();
var Jw = f0.exports;
const eb = /* @__PURE__ */ t1(Jw), tb = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==", nb = "/vite.svg";
function rb() {
  const [Z, J] = Uf.useState(0);
  return /* @__PURE__ */ xa.jsxs(xa.Fragment, { children: [
    /* @__PURE__ */ xa.jsxs("div", { children: [
      /* @__PURE__ */ xa.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ xa.jsx("img", { src: nb, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ xa.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ xa.jsx("img", { src: tb, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ xa.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ xa.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ xa.jsxs("button", { onClick: () => J((U) => U + 1), children: [
        "count is ",
        Z
      ] }),
      /* @__PURE__ */ xa.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ xa.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ xa.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
eb.render(
  /* @__PURE__ */ xa.jsx(Qw.StrictMode, { children: /* @__PURE__ */ xa.jsx(rb, {}) }),
  document.getElementById("component_1")
);
