var nt = Object.defineProperty;
var it = (t, e, n) => e in t ? nt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var T = (t, e, n) => (it(t, typeof e != "symbol" ? e + "" : e, n), n);
import { b as ae, g as rt, B as u, n as k, R as ot, j as I, a as st, r as F, h as at } from "./highs-768eac77.js";
var lt;
function B() {
}
B.prototype = /* @__PURE__ */ Object.create(null);
function p() {
  p.init.call(this);
}
p.EventEmitter = p;
p.usingDomains = !1;
p.prototype.domain = void 0;
p.prototype._events = void 0;
p.prototype._maxListeners = void 0;
p.defaultMaxListeners = 10;
p.init = function() {
  this.domain = null, p.usingDomains && lt.active, (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new B(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
p.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || isNaN(e))
    throw new TypeError('"n" argument must be a positive number');
  return this._maxListeners = e, this;
};
function Te(t) {
  return t._maxListeners === void 0 ? p.defaultMaxListeners : t._maxListeners;
}
p.prototype.getMaxListeners = function() {
  return Te(this);
};
function ft(t, e, n) {
  if (e)
    t.call(n);
  else
    for (var i = t.length, r = K(t, i), o = 0; o < i; ++o)
      r[o].call(n);
}
function ut(t, e, n, i) {
  if (e)
    t.call(n, i);
  else
    for (var r = t.length, o = K(t, r), s = 0; s < r; ++s)
      o[s].call(n, i);
}
function ct(t, e, n, i, r) {
  if (e)
    t.call(n, i, r);
  else
    for (var o = t.length, s = K(t, o), a = 0; a < o; ++a)
      s[a].call(n, i, r);
}
function dt(t, e, n, i, r, o) {
  if (e)
    t.call(n, i, r, o);
  else
    for (var s = t.length, a = K(t, s), l = 0; l < s; ++l)
      a[l].call(n, i, r, o);
}
function ht(t, e, n, i) {
  if (e)
    t.apply(n, i);
  else
    for (var r = t.length, o = K(t, r), s = 0; s < r; ++s)
      o[s].apply(n, i);
}
p.prototype.emit = function(e) {
  var n, i, r, o, s, a, l, f = e === "error";
  if (a = this._events, a)
    f = f && a.error == null;
  else if (!f)
    return !1;
  if (l = this.domain, f) {
    if (n = arguments[1], l)
      n || (n = new Error('Uncaught, unspecified "error" event')), n.domainEmitter = this, n.domain = l, n.domainThrown = !1, l.emit("error", n);
    else {
      if (n instanceof Error)
        throw n;
      var c = new Error('Uncaught, unspecified "error" event. (' + n + ")");
      throw c.context = n, c;
    }
    return !1;
  }
  if (i = a[e], !i)
    return !1;
  var h = typeof i == "function";
  switch (r = arguments.length, r) {
    case 1:
      ft(i, h, this);
      break;
    case 2:
      ut(i, h, this, arguments[1]);
      break;
    case 3:
      ct(i, h, this, arguments[1], arguments[2]);
      break;
    case 4:
      dt(i, h, this, arguments[1], arguments[2], arguments[3]);
      break;
    default:
      for (o = new Array(r - 1), s = 1; s < r; s++)
        o[s - 1] = arguments[s];
      ht(i, h, this, o);
  }
  return !0;
};
function Ae(t, e, n, i) {
  var r, o, s;
  if (typeof n != "function")
    throw new TypeError('"listener" argument must be a function');
  if (o = t._events, o ? (o.newListener && (t.emit(
    "newListener",
    e,
    n.listener ? n.listener : n
  ), o = t._events), s = o[e]) : (o = t._events = new B(), t._eventsCount = 0), !s)
    s = o[e] = n, ++t._eventsCount;
  else if (typeof s == "function" ? s = o[e] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n), !s.warned && (r = Te(t), r && r > 0 && s.length > r)) {
    s.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + e + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, pt(a);
  }
  return t;
}
function pt(t) {
  typeof console.warn == "function" ? console.warn(t) : console.log(t);
}
p.prototype.addListener = function(e, n) {
  return Ae(this, e, n, !1);
};
p.prototype.on = p.prototype.addListener;
p.prototype.prependListener = function(e, n) {
  return Ae(this, e, n, !0);
};
function $e(t, e, n) {
  var i = !1;
  function r() {
    t.removeListener(e, r), i || (i = !0, n.apply(t, arguments));
  }
  return r.listener = n, r;
}
p.prototype.once = function(e, n) {
  if (typeof n != "function")
    throw new TypeError('"listener" argument must be a function');
  return this.on(e, $e(this, e, n)), this;
};
p.prototype.prependOnceListener = function(e, n) {
  if (typeof n != "function")
    throw new TypeError('"listener" argument must be a function');
  return this.prependListener(e, $e(this, e, n)), this;
};
p.prototype.removeListener = function(e, n) {
  var i, r, o, s, a;
  if (typeof n != "function")
    throw new TypeError('"listener" argument must be a function');
  if (r = this._events, !r)
    return this;
  if (i = r[e], !i)
    return this;
  if (i === n || i.listener && i.listener === n)
    --this._eventsCount === 0 ? this._events = new B() : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || n));
  else if (typeof i != "function") {
    for (o = -1, s = i.length; s-- > 0; )
      if (i[s] === n || i[s].listener && i[s].listener === n) {
        a = i[s].listener, o = s;
        break;
      }
    if (o < 0)
      return this;
    if (i.length === 1) {
      if (i[0] = void 0, --this._eventsCount === 0)
        return this._events = new B(), this;
      delete r[e];
    } else
      mt(i, o);
    r.removeListener && this.emit("removeListener", e, a || n);
  }
  return this;
};
p.prototype.removeAllListeners = function(e) {
  var n, i;
  if (i = this._events, !i)
    return this;
  if (!i.removeListener)
    return arguments.length === 0 ? (this._events = new B(), this._eventsCount = 0) : i[e] && (--this._eventsCount === 0 ? this._events = new B() : delete i[e]), this;
  if (arguments.length === 0) {
    for (var r = Object.keys(i), o = 0, s; o < r.length; ++o)
      s = r[o], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = new B(), this._eventsCount = 0, this;
  }
  if (n = i[e], typeof n == "function")
    this.removeListener(e, n);
  else if (n)
    do
      this.removeListener(e, n[n.length - 1]);
    while (n[0]);
  return this;
};
p.prototype.listeners = function(e) {
  var n, i, r = this._events;
  return r ? (n = r[e], n ? typeof n == "function" ? i = [n.listener || n] : i = _t(n) : i = []) : i = [], i;
};
p.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : ze.call(t, e);
};
p.prototype.listenerCount = ze;
function ze(t) {
  var e = this._events;
  if (e) {
    var n = e[t];
    if (typeof n == "function")
      return 1;
    if (n)
      return n.length;
  }
  return 0;
}
p.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
function mt(t, e) {
  for (var n = e, i = n + 1, r = t.length; i < r; n += 1, i += 1)
    t[n] = t[i];
  t.pop();
}
function K(t, e) {
  for (var n = new Array(e); e--; )
    n[e] = t[e];
  return n;
}
function _t(t) {
  for (var e = new Array(t.length), n = 0; n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
}
var _e;
typeof Object.create == "function" ? _e = function(e, n) {
  e.super_ = n, e.prototype = Object.create(n.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
} : _e = function(e, n) {
  e.super_ = n;
  var i = function() {
  };
  i.prototype = n.prototype, e.prototype = new i(), e.prototype.constructor = e;
};
const H = _e;
var gt = /%[sdj%]/g;
function bt(t) {
  if (!we(t)) {
    for (var e = [], n = 0; n < arguments.length; n++)
      e.push(q(arguments[n]));
    return e.join(" ");
  }
  for (var n = 1, i = arguments, r = i.length, o = String(t).replace(gt, function(a) {
    if (a === "%%")
      return "%";
    if (n >= r)
      return a;
    switch (a) {
      case "%s":
        return String(i[n++]);
      case "%d":
        return Number(i[n++]);
      case "%j":
        try {
          return JSON.stringify(i[n++]);
        } catch {
          return "[Circular]";
        }
      default:
        return a;
    }
  }), s = i[n]; n < r; s = i[++n])
    ve(s) || !Z(s) ? o += " " + s : o += " " + q(s);
  return o;
}
function Fe(t, e) {
  if (P(rt.process))
    return function() {
      return Fe(t, e).apply(this, arguments);
    };
  if (ae.noDeprecation === !0)
    return t;
  var n = !1;
  function i() {
    if (!n) {
      if (ae.throwDeprecation)
        throw new Error(e);
      ae.traceDeprecation ? console.trace(e) : console.error(e), n = !0;
    }
    return t.apply(this, arguments);
  }
  return i;
}
var ne = {}, le;
function vt(t) {
  if (P(le) && (le = { npm_package_devDependencies_vite_tsconfig_paths: "^4.2.0", npm_package_devDependencies_ts_node: "^10.9.1", npm_package_devDependencies__types_node: "^20.4.0", USER: "secci", npm_package_devDependencies_jest: "^29.6.1", npm_package_devDependencies__esbuild_plugins_node_globals_polyfill: "^0.2.3", npm_config_version_commit_hooks: "true", npm_config_user_agent: "yarn/1.22.5 npm/? node/v18.16.0 linux x64", npm_package_devDependencies_buffer: "^6.0.3", npm_package_dependencies_highs: "^0.7.3", npm_config_bin_links: "true", npm_node_execpath: "/home/secci/.nvm/versions/node/v18.16.0/bin/node", npm_package_devDependencies_vite: "^4.3.9", npm_package_devDependencies_nodemon: "^2.0.22", npm_config_init_version: "1.0.0", WT_PROFILE_ID: "{51855cb2-8cce-5362-8f54-464b92b32386}", SHLVL: "1", npm_package_devDependencies__swc_core: "^1.3.68", HOME: "/home/secci", OLDPWD: "/home/secci", LESS: "-R", npm_package_devDependencies_transform: "^1.1.2", npm_package_devDependencies__typescript_eslint_parser: "^5.59.0", NVM_BIN: "/home/secci/.nvm/versions/node/v18.16.0/bin", ZSH: "/home/secci/.oh-my-zsh", LSCOLORS: "Gxfxcxdxbxegedabagacad", NVM_INC: "/home/secci/.nvm/versions/node/v18.16.0/include/node", npm_config_init_license: "MIT", PAGER: "less", YARN_WRAP_OUTPUT: "false", npm_package_dependencies_csv_parse: "^5.4.0", npm_config_version_tag_prefix: "v", npm_package_devDependencies_eslint_plugin_react_hooks: "^4.6.0", WSL_DISTRO_NAME: "Ubuntu", npm_package_description: "♻️ Idle Science | Reduce, Reduce, Recycle", npm_package_devDependencies_typescript: "^5.0.2", npm_package_devDependencies_rollup_plugin_node_polyfills: "^0.2.1", NVM_DIR: "/home/secci/.nvm", npm_package_readmeFilename: "README.md", npm_package_devDependencies__types_react_dom: "^18.0.11", npm_package_devDependencies_prettier: "^3.0.0", npm_package_devDependencies__vitejs_plugin_react_swc: "^3.0.0", npm_package_scripts_dev: "vite", LOGNAME: "secci", npm_package_type: "module", WSL_INTEROP: "/run/WSL/6273_interop", NAME: "LenovoPC", _: "/mnt/c/Program Files (x86)/Yarn/bin//yarn", npm_package_devDependencies_ts_jest: "^29.1.1", npm_package_devDependencies__types_jest: "^29.5.2", npm_package_private: "true", npm_package_devDependencies__typescript_eslint_eslint_plugin: "^5.59.0", npm_package_devDependencies__rollup_plugin_inject: "^5.0.3", npm_package_scripts_lint: "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0", npm_config_registry: "https://registry.yarnpkg.com", TERM: "xterm-256color", npm_package_devDependencies__swc_jest: "^0.2.26", npm_package_devDependencies_eslint_plugin_react_refresh: "^0.3.4", npm_config_ignore_scripts: "", PATH: "/tmp/yarn--1689063896539-0.9143731296742765:/mnt/c/Workspace/idlescience.github.io/node_modules/.bin:/home/secci/.config/yarn/link/node_modules/.bin:/home/secci/.yarn/bin:/home/secci/.nvm/versions/node/v18.16.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/home/secci/.nvm/versions/node/v18.16.0/lib/node_modules/npm/bin/node-gyp-bin:/home/secci/.nvm/versions/node/v18.16.0/bin/node_modules/npm/bin/node-gyp-bin:/home/secci/.nvm/versions/node/v18.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files/Microsoft/jdk-11.0.12.7-hotspot/bin:/mnt/c/Program Files/Common Files/Oracle/Java/javapath:/mnt/c/Program Files/Python36/Scripts/:/mnt/c/Program Files/Python36/:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/ProgramData/chocolatey/bin:/mnt/c/Program Files (x86)/Yarn/bin/:/mnt/c/Program Files/nodejs/:/mnt/c/Program Files/dotnet/:/mnt/c/Program Files (x86)/dotnet/:/mnt/c/Program Files (x86)/Google/Cloud SDK/google-cloud-sdk/bin:/mnt/c/Program Files (x86)/putty:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/ProgramData/DockerDesktop/version-bin:/mnt/c/Program Files/MongoDB/Server/4.2/bin:/mnt/c/Program Files/Microsoft SQL Server/150/Tools/Binn/:/mnt/c/Program Files/Microsoft SQL Server/Client SDK/ODBC/170/Tools/Binn/:/mnt/c/Program Files/WinMerge:/mnt/c/texlive/2023/bin/windows:/mnt/c/Program Files/AutoFirma/AutoFirma:/mnt/c/Program Files/Pandoc/:/mnt/c/Program Files/wkhtmltopdf/bin:/mnt/c/Program Files/Git/cmd:/mnt/c/Program Files/Git/mingw64/bin:/mnt/c/Program Files/Git/usr/bin:/mnt/c/Users/secci/AppData/Local/Microsoft/PowerAppsCLI/:/mnt/c/Users/secci/AppData/Local/Microsoft/WindowsApps:/mnt/c/Program Files/JetBrains/JetBrains Rider 2020.2.1/bin:/mnt/c/Users/secci/AppData/Local/Yarn/bin:/mnt/c/Users/secci/AppData/Roaming/npm:/mnt/c/Users/secci/.dotnet/tools:/mnt/c/Users/secci/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/secci/Workspace/drivers:/mnt/c/Users/secci/lib/android/platform-tools:/mnt/c/Users/secci/AppData/Local/Microsoft/WindowsApps:/home/secci/.ruby/bin", NODE: "/home/secci/.nvm/versions/node/v18.16.0/bin/node", npm_package_name: "app", WT_SESSION: "c62a6638-4f6b-450e-b419-e5f770339013", npm_package_devDependencies__esbuild_plugins_node_modules_polyfill: "^0.2.2", LANG: "C.UTF-8", npm_package_devDependencies_eslint: "^8.38.0", npm_package_dependencies_react_dom: "^18.2.0", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", npm_lifecycle_script: "tsc && vite build", npm_package_scripts_test: "jest --runInBand", npm_config_version_git_message: "v%s", SHELL: "/usr/bin/zsh", npm_lifecycle_event: "build", npm_package_devDependencies__types_react: "^18.0.37", npm_package_version: "0.0.0", npm_config_argv: '{"remain":[],"cooked":["run","build"],"original":["build"]}', npm_package_scripts_build: "tsc && vite build", GEM_HOME: "/home/secci/.ruby/", npm_config_version_git_tag: "true", npm_config_version_git_sign: "", npm_config_strict_ssl: "true", PWD: "/home/secci/Workspace/idlescience.github.io", npm_execpath: "/mnt/c/Program Files (x86)/Yarn/bin/yarn.js", NVM_CD_FLAGS: "-q", npm_config_save_prefix: "^", npm_config_ignore_optional: "", npm_package_scripts_preview: "vite preview", HOSTTYPE: "x86_64", INIT_CWD: "/mnt/c/Workspace/idlescience.github.io", WSLENV: "WT_SESSION::WT_PROFILE_ID", npm_package_dependencies_react: "^18.2.0", NODE_ENV: "production" }.NODE_DEBUG || ""), t = t.toUpperCase(), !ne[t])
    if (new RegExp("\\b" + t + "\\b", "i").test(le)) {
      var e = 0;
      ne[t] = function() {
        var n = bt.apply(null, arguments);
        console.error("%s %d: %s", t, e, n);
      };
    } else
      ne[t] = function() {
      };
  return ne[t];
}
function q(t, e) {
  var n = {
    seen: [],
    stylize: yt
  };
  return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), Pe(e) ? n.showHidden = e : e && Lt(n, e), P(n.showHidden) && (n.showHidden = !1), P(n.depth) && (n.depth = 2), P(n.colors) && (n.colors = !1), P(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = wt), ie(n, t, n.depth);
}
q.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
};
q.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  // "name": intentionally not styling
  regexp: "red"
};
function wt(t, e) {
  var n = q.styles[e];
  return n ? "\x1B[" + q.colors[n][0] + "m" + t + "\x1B[" + q.colors[n][1] + "m" : t;
}
function yt(t, e) {
  return t;
}
function St(t) {
  var e = {};
  return t.forEach(function(n, i) {
    e[n] = !0;
  }), e;
}
function ie(t, e, n) {
  if (t.customInspect && e && de(e.inspect) && // Filter out the util module, it's inspect function is special
  e.inspect !== q && // Also filter out any prototype objects using the circular check.
  !(e.constructor && e.constructor.prototype === e)) {
    var i = e.inspect(n, t);
    return we(i) || (i = ie(t, i, n)), i;
  }
  var r = Ot(t, e);
  if (r)
    return r;
  var o = Object.keys(e), s = St(o);
  if (t.showHidden && (o = Object.getOwnPropertyNames(e)), ce(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    return fe(e);
  if (o.length === 0) {
    if (de(e)) {
      var a = e.name ? ": " + e.name : "";
      return t.stylize("[Function" + a + "]", "special");
    }
    if (ue(e))
      return t.stylize(RegExp.prototype.toString.call(e), "regexp");
    if (Ie(e))
      return t.stylize(Date.prototype.toString.call(e), "date");
    if (ce(e))
      return fe(e);
  }
  var l = "", f = !1, c = ["{", "}"];
  if (Nt(e) && (f = !0, c = ["[", "]"]), de(e)) {
    var h = e.name ? ": " + e.name : "";
    l = " [Function" + h + "]";
  }
  if (ue(e) && (l = " " + RegExp.prototype.toString.call(e)), Ie(e) && (l = " " + Date.prototype.toUTCString.call(e)), ce(e) && (l = " " + fe(e)), o.length === 0 && (!f || e.length == 0))
    return c[0] + l + c[1];
  if (n < 0)
    return ue(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(e);
  var N;
  return f ? N = It(t, e, n, s, o) : N = o.map(function(g) {
    return ge(t, e, n, s, g, f);
  }), t.seen.pop(), Et(N, l, c);
}
function Ot(t, e) {
  if (P(e))
    return t.stylize("undefined", "undefined");
  if (we(e)) {
    var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return t.stylize(n, "string");
  }
  if (Rt(e))
    return t.stylize("" + e, "number");
  if (Pe(e))
    return t.stylize("" + e, "boolean");
  if (ve(e))
    return t.stylize("null", "null");
}
function fe(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function It(t, e, n, i, r) {
  for (var o = [], s = 0, a = e.length; s < a; ++s)
    Be(e, String(s)) ? o.push(ge(
      t,
      e,
      n,
      i,
      String(s),
      !0
    )) : o.push("");
  return r.forEach(function(l) {
    l.match(/^\d+$/) || o.push(ge(
      t,
      e,
      n,
      i,
      l,
      !0
    ));
  }), o;
}
function ge(t, e, n, i, r, o) {
  var s, a, l;
  if (l = Object.getOwnPropertyDescriptor(e, r) || { value: e[r] }, l.get ? l.set ? a = t.stylize("[Getter/Setter]", "special") : a = t.stylize("[Getter]", "special") : l.set && (a = t.stylize("[Setter]", "special")), Be(i, r) || (s = "[" + r + "]"), a || (t.seen.indexOf(l.value) < 0 ? (ve(n) ? a = ie(t, l.value, null) : a = ie(t, l.value, n - 1), a.indexOf(`
`) > -1 && (o ? a = a.split(`
`).map(function(f) {
    return "  " + f;
  }).join(`
`).substr(2) : a = `
` + a.split(`
`).map(function(f) {
    return "   " + f;
  }).join(`
`))) : a = t.stylize("[Circular]", "special")), P(s)) {
    if (o && r.match(/^\d+$/))
      return a;
    s = JSON.stringify("" + r), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"));
  }
  return s + ": " + a;
}
function Et(t, e, n) {
  var i = t.reduce(function(r, o) {
    return o.indexOf(`
`) >= 0, r + o.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  return i > 60 ? n[0] + (e === "" ? "" : e + `
 `) + " " + t.join(`,
  `) + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1];
}
function Nt(t) {
  return Array.isArray(t);
}
function Pe(t) {
  return typeof t == "boolean";
}
function ve(t) {
  return t === null;
}
function Rt(t) {
  return typeof t == "number";
}
function we(t) {
  return typeof t == "string";
}
function P(t) {
  return t === void 0;
}
function ue(t) {
  return Z(t) && ye(t) === "[object RegExp]";
}
function Z(t) {
  return typeof t == "object" && t !== null;
}
function Ie(t) {
  return Z(t) && ye(t) === "[object Date]";
}
function ce(t) {
  return Z(t) && (ye(t) === "[object Error]" || t instanceof Error);
}
function de(t) {
  return typeof t == "function";
}
function ye(t) {
  return Object.prototype.toString.call(t);
}
function Lt(t, e) {
  if (!e || !Z(e))
    return t;
  for (var n = Object.keys(e), i = n.length; i--; )
    t[n[i]] = e[n[i]];
  return t;
}
function Be(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function U() {
  this.head = null, this.tail = null, this.length = 0;
}
U.prototype.push = function(t) {
  var e = { data: t, next: null };
  this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
};
U.prototype.unshift = function(t) {
  var e = { data: t, next: this.head };
  this.length === 0 && (this.tail = e), this.head = e, ++this.length;
};
U.prototype.shift = function() {
  if (this.length !== 0) {
    var t = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
  }
};
U.prototype.clear = function() {
  this.head = this.tail = null, this.length = 0;
};
U.prototype.join = function(t) {
  if (this.length === 0)
    return "";
  for (var e = this.head, n = "" + e.data; e = e.next; )
    n += t + e.data;
  return n;
};
U.prototype.concat = function(t) {
  if (this.length === 0)
    return u.alloc(0);
  if (this.length === 1)
    return this.head.data;
  for (var e = u.allocUnsafe(t >>> 0), n = this.head, i = 0; n; )
    n.data.copy(e, i), i += n.data.length, n = n.next;
  return e;
};
var Dt = u.isEncoding || function(t) {
  switch (t && t.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function Ct(t) {
  if (t && !Dt(t))
    throw new Error("Unknown encoding: " + t);
}
function X(t) {
  switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), Ct(t), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = jt;
      break;
    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = kt;
      break;
    default:
      this.write = xt;
      return;
  }
  this.charBuffer = new u(6), this.charReceived = 0, this.charLength = 0;
}
X.prototype.write = function(t) {
  for (var e = ""; this.charLength; ) {
    var n = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
    if (t.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength)
      return "";
    t = t.slice(n, t.length), e = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
    var r = e.charCodeAt(e.length - 1);
    if (r >= 55296 && r <= 56319) {
      this.charLength += this.surrogateSize, e = "";
      continue;
    }
    if (this.charReceived = this.charLength = 0, t.length === 0)
      return e;
    break;
  }
  this.detectIncompleteChar(t);
  var i = t.length;
  this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, i), i -= this.charReceived), e += t.toString(this.encoding, 0, i);
  var i = e.length - 1, r = e.charCodeAt(i);
  if (r >= 55296 && r <= 56319) {
    var o = this.surrogateSize;
    return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), t.copy(this.charBuffer, 0, 0, o), e.substring(0, i);
  }
  return e;
};
X.prototype.detectIncompleteChar = function(t) {
  for (var e = t.length >= 3 ? 3 : t.length; e > 0; e--) {
    var n = t[t.length - e];
    if (e == 1 && n >> 5 == 6) {
      this.charLength = 2;
      break;
    }
    if (e <= 2 && n >> 4 == 14) {
      this.charLength = 3;
      break;
    }
    if (e <= 3 && n >> 3 == 30) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = e;
};
X.prototype.end = function(t) {
  var e = "";
  if (t && t.length && (e = this.write(t)), this.charReceived) {
    var n = this.charReceived, i = this.charBuffer, r = this.encoding;
    e += i.slice(0, n).toString(r);
  }
  return e;
};
function xt(t) {
  return t.toString(this.encoding);
}
function jt(t) {
  this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function kt(t) {
  this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
S.ReadableState = qe;
var w = vt("stream");
H(S, p);
function Mt(t, e, n) {
  if (typeof t.prependListener == "function")
    return t.prependListener(e, n);
  !t._events || !t._events[e] ? t.on(e, n) : Array.isArray(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]];
}
function Tt(t, e) {
  return t.listeners(e).length;
}
function qe(t, e) {
  t = t || {}, this.objectMode = !!t.objectMode, e instanceof j && (this.objectMode = this.objectMode || !!t.readableObjectMode);
  var n = t.highWaterMark, i = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = n || n === 0 ? n : i, this.highWaterMark = ~~this.highWaterMark, this.buffer = new U(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (this.decoder = new X(t.encoding), this.encoding = t.encoding);
}
function S(t) {
  if (!(this instanceof S))
    return new S(t);
  this._readableState = new qe(t, this), this.readable = !0, t && typeof t.read == "function" && (this._read = t.read), p.call(this);
}
S.prototype.push = function(t, e) {
  var n = this._readableState;
  return !n.objectMode && typeof t == "string" && (e = e || n.defaultEncoding, e !== n.encoding && (t = u.from(t, e), e = "")), We(this, n, t, e, !1);
};
S.prototype.unshift = function(t) {
  var e = this._readableState;
  return We(this, e, t, "", !0);
};
S.prototype.isPaused = function() {
  return this._readableState.flowing === !1;
};
function We(t, e, n, i, r) {
  var o = zt(e, n);
  if (o)
    t.emit("error", o);
  else if (n === null)
    e.reading = !1, Ft(t, e);
  else if (e.objectMode || n && n.length > 0)
    if (e.ended && !r) {
      var s = new Error("stream.push() after EOF");
      t.emit("error", s);
    } else if (e.endEmitted && r) {
      var a = new Error("stream.unshift() after end event");
      t.emit("error", a);
    } else {
      var l;
      e.decoder && !r && !i && (n = e.decoder.write(n), l = !e.objectMode && n.length === 0), r || (e.reading = !1), l || (e.flowing && e.length === 0 && !e.sync ? (t.emit("data", n), t.read(0)) : (e.length += e.objectMode ? 1 : n.length, r ? e.buffer.unshift(n) : e.buffer.push(n), e.needReadable && re(t))), Pt(t, e);
    }
  else
    r || (e.reading = !1);
  return At(e);
}
function At(t) {
  return !t.ended && (t.needReadable || t.length < t.highWaterMark || t.length === 0);
}
S.prototype.setEncoding = function(t) {
  return this._readableState.decoder = new X(t), this._readableState.encoding = t, this;
};
var Ee = 8388608;
function $t(t) {
  return t >= Ee ? t = Ee : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
}
function Ne(t, e) {
  return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = $t(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
}
S.prototype.read = function(t) {
  w("read", t), t = parseInt(t, 10);
  var e = this._readableState, n = t;
  if (t !== 0 && (e.emittedReadable = !1), t === 0 && e.needReadable && (e.length >= e.highWaterMark || e.ended))
    return w("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? he(this) : re(this), null;
  if (t = Ne(t, e), t === 0 && e.ended)
    return e.length === 0 && he(this), null;
  var i = e.needReadable;
  w("need readable", i), (e.length === 0 || e.length - t < e.highWaterMark) && (i = !0, w("length less than watermark", i)), e.ended || e.reading ? (i = !1, w("reading or ended", i)) : i && (w("do read"), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = Ne(n, e)));
  var r;
  return t > 0 ? r = Ve(t, e) : r = null, r === null ? (e.needReadable = !0, t = 0) : e.length -= t, e.length === 0 && (e.ended || (e.needReadable = !0), n !== t && e.ended && he(this)), r !== null && this.emit("data", r), r;
};
function zt(t, e) {
  var n = null;
  return !u.isBuffer(e) && typeof e != "string" && e !== null && e !== void 0 && !t.objectMode && (n = new TypeError("Invalid non-string/buffer chunk")), n;
}
function Ft(t, e) {
  if (!e.ended) {
    if (e.decoder) {
      var n = e.decoder.end();
      n && n.length && (e.buffer.push(n), e.length += e.objectMode ? 1 : n.length);
    }
    e.ended = !0, re(t);
  }
}
function re(t) {
  var e = t._readableState;
  e.needReadable = !1, e.emittedReadable || (w("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? k(Re, t) : Re(t));
}
function Re(t) {
  w("emit readable"), t.emit("readable"), Se(t);
}
function Pt(t, e) {
  e.readingMore || (e.readingMore = !0, k(Bt, t, e));
}
function Bt(t, e) {
  for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (w("maybeReadMore read 0"), t.read(0), n !== e.length); )
    n = e.length;
  e.readingMore = !1;
}
S.prototype._read = function(t) {
  this.emit("error", new Error("not implemented"));
};
S.prototype.pipe = function(t, e) {
  var n = this, i = this._readableState;
  switch (i.pipesCount) {
    case 0:
      i.pipes = t;
      break;
    case 1:
      i.pipes = [i.pipes, t];
      break;
    default:
      i.pipes.push(t);
      break;
  }
  i.pipesCount += 1, w("pipe count=%d opts=%j", i.pipesCount, e);
  var r = !e || e.end !== !1, o = r ? a : c;
  i.endEmitted ? k(o) : n.once("end", o), t.on("unpipe", s);
  function s(O) {
    w("onunpipe"), O === n && c();
  }
  function a() {
    w("onend"), t.end();
  }
  var l = qt(n);
  t.on("drain", l);
  var f = !1;
  function c() {
    w("cleanup"), t.removeListener("close", C), t.removeListener("finish", y), t.removeListener("drain", l), t.removeListener("error", g), t.removeListener("unpipe", s), n.removeListener("end", a), n.removeListener("end", c), n.removeListener("data", N), f = !0, i.awaitDrain && (!t._writableState || t._writableState.needDrain) && l();
  }
  var h = !1;
  n.on("data", N);
  function N(O) {
    w("ondata"), h = !1;
    var b = t.write(O);
    b === !1 && !h && ((i.pipesCount === 1 && i.pipes === t || i.pipesCount > 1 && Ue(i.pipes, t) !== -1) && !f && (w("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, h = !0), n.pause());
  }
  function g(O) {
    w("onerror", O), x(), t.removeListener("error", g), Tt(t, "error") === 0 && t.emit("error", O);
  }
  Mt(t, "error", g);
  function C() {
    t.removeListener("finish", y), x();
  }
  t.once("close", C);
  function y() {
    w("onfinish"), t.removeListener("close", C), x();
  }
  t.once("finish", y);
  function x() {
    w("unpipe"), n.unpipe(t);
  }
  return t.emit("pipe", n), i.flowing || (w("pipe resume"), n.resume()), t;
};
function qt(t) {
  return function() {
    var e = t._readableState;
    w("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, e.awaitDrain === 0 && t.listeners("data").length && (e.flowing = !0, Se(t));
  };
}
S.prototype.unpipe = function(t) {
  var e = this._readableState;
  if (e.pipesCount === 0)
    return this;
  if (e.pipesCount === 1)
    return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this), this);
  if (!t) {
    var n = e.pipes, i = e.pipesCount;
    e.pipes = null, e.pipesCount = 0, e.flowing = !1;
    for (var r = 0; r < i; r++)
      n[r].emit("unpipe", this);
    return this;
  }
  var o = Ue(e.pipes, t);
  return o === -1 ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this), this);
};
S.prototype.on = function(t, e) {
  var n = p.prototype.on.call(this, t, e);
  if (t === "data")
    this._readableState.flowing !== !1 && this.resume();
  else if (t === "readable") {
    var i = this._readableState;
    !i.endEmitted && !i.readableListening && (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && re(this) : k(Wt, this));
  }
  return n;
};
S.prototype.addListener = S.prototype.on;
function Wt(t) {
  w("readable nexttick read 0"), t.read(0);
}
S.prototype.resume = function() {
  var t = this._readableState;
  return t.flowing || (w("resume"), t.flowing = !0, Vt(this, t)), this;
};
function Vt(t, e) {
  e.resumeScheduled || (e.resumeScheduled = !0, k(Ut, t, e));
}
function Ut(t, e) {
  e.reading || (w("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), Se(t), e.flowing && !e.reading && t.read(0);
}
S.prototype.pause = function() {
  return w("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (w("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
};
function Se(t) {
  var e = t._readableState;
  for (w("flow", e.flowing); e.flowing && t.read() !== null; )
    ;
}
S.prototype.wrap = function(t) {
  var e = this._readableState, n = !1, i = this;
  t.on("end", function() {
    if (w("wrapped end"), e.decoder && !e.ended) {
      var s = e.decoder.end();
      s && s.length && i.push(s);
    }
    i.push(null);
  }), t.on("data", function(s) {
    if (w("wrapped data"), e.decoder && (s = e.decoder.write(s)), !(e.objectMode && s == null) && !(!e.objectMode && (!s || !s.length))) {
      var a = i.push(s);
      a || (n = !0, t.pause());
    }
  });
  for (var r in t)
    this[r] === void 0 && typeof t[r] == "function" && (this[r] = function(s) {
      return function() {
        return t[s].apply(t, arguments);
      };
    }(r));
  var o = ["error", "close", "destroy", "pause", "resume"];
  return Yt(o, function(s) {
    t.on(s, i.emit.bind(i, s));
  }), i._read = function(s) {
    w("wrapped _read", s), n && (n = !1, t.resume());
  }, i;
};
S._fromList = Ve;
function Ve(t, e) {
  if (e.length === 0)
    return null;
  var n;
  return e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? n = e.buffer.join("") : e.buffer.length === 1 ? n = e.buffer.head.data : n = e.buffer.concat(e.length), e.buffer.clear()) : n = Jt(t, e.buffer, e.decoder), n;
}
function Jt(t, e, n) {
  var i;
  return t < e.head.data.length ? (i = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : t === e.head.data.length ? i = e.shift() : i = n ? Ht(t, e) : Gt(t, e), i;
}
function Ht(t, e) {
  var n = e.head, i = 1, r = n.data;
  for (t -= r.length; n = n.next; ) {
    var o = n.data, s = t > o.length ? o.length : t;
    if (s === o.length ? r += o : r += o.slice(0, t), t -= s, t === 0) {
      s === o.length ? (++i, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
      break;
    }
    ++i;
  }
  return e.length -= i, r;
}
function Gt(t, e) {
  var n = u.allocUnsafe(t), i = e.head, r = 1;
  for (i.data.copy(n), t -= i.data.length; i = i.next; ) {
    var o = i.data, s = t > o.length ? o.length : t;
    if (o.copy(n, n.length - t, 0, s), t -= s, t === 0) {
      s === o.length ? (++r, i.next ? e.head = i.next : e.head = e.tail = null) : (e.head = i, i.data = o.slice(s));
      break;
    }
    ++r;
  }
  return e.length -= r, n;
}
function he(t) {
  var e = t._readableState;
  if (e.length > 0)
    throw new Error('"endReadable()" called on non-empty stream');
  e.endEmitted || (e.ended = !0, k(Qt, e, t));
}
function Qt(t, e) {
  !t.endEmitted && t.length === 0 && (t.endEmitted = !0, e.readable = !1, e.emit("end"));
}
function Yt(t, e) {
  for (var n = 0, i = t.length; n < i; n++)
    e(t[n], n);
}
function Ue(t, e) {
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n] === e)
      return n;
  return -1;
}
D.WritableState = Oe;
H(D, p);
function Kt() {
}
function Zt(t, e, n) {
  this.chunk = t, this.encoding = e, this.callback = n, this.next = null;
}
function Oe(t, e) {
  Object.defineProperty(this, "buffer", {
    get: Fe(function() {
      return this.getBuffer();
    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
  }), t = t || {}, this.objectMode = !!t.objectMode, e instanceof j && (this.objectMode = this.objectMode || !!t.writableObjectMode);
  var n = t.highWaterMark, i = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = n || n === 0 ? n : i, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
  var r = t.decodeStrings === !1;
  this.decodeStrings = !r, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(o) {
    sn(e, o);
  }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new Qe(this);
}
Oe.prototype.getBuffer = function() {
  for (var e = this.bufferedRequest, n = []; e; )
    n.push(e), e = e.next;
  return n;
};
function D(t) {
  if (!(this instanceof D) && !(this instanceof j))
    return new D(t);
  this._writableState = new Oe(t, this), this.writable = !0, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev)), p.call(this);
}
D.prototype.pipe = function() {
  this.emit("error", new Error("Cannot pipe, not readable"));
};
function Xt(t, e) {
  var n = new Error("write after end");
  t.emit("error", n), k(e, n);
}
function en(t, e, n, i) {
  var r = !0, o = !1;
  return n === null ? o = new TypeError("May not write null values to stream") : !u.isBuffer(n) && typeof n != "string" && n !== void 0 && !e.objectMode && (o = new TypeError("Invalid non-string/buffer chunk")), o && (t.emit("error", o), k(i, o), r = !1), r;
}
D.prototype.write = function(t, e, n) {
  var i = this._writableState, r = !1;
  return typeof e == "function" && (n = e, e = null), u.isBuffer(t) ? e = "buffer" : e || (e = i.defaultEncoding), typeof n != "function" && (n = Kt), i.ended ? Xt(this, n) : en(this, i, t, n) && (i.pendingcb++, r = nn(this, i, t, e, n)), r;
};
D.prototype.cork = function() {
  var t = this._writableState;
  t.corked++;
};
D.prototype.uncork = function() {
  var t = this._writableState;
  t.corked && (t.corked--, !t.writing && !t.corked && !t.finished && !t.bufferProcessing && t.bufferedRequest && Je(this, t));
};
D.prototype.setDefaultEncoding = function(e) {
  if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
    throw new TypeError("Unknown encoding: " + e);
  return this._writableState.defaultEncoding = e, this;
};
function tn(t, e, n) {
  return !t.objectMode && t.decodeStrings !== !1 && typeof e == "string" && (e = u.from(e, n)), e;
}
function nn(t, e, n, i, r) {
  n = tn(e, n, i), u.isBuffer(n) && (i = "buffer");
  var o = e.objectMode ? 1 : n.length;
  e.length += o;
  var s = e.length < e.highWaterMark;
  if (s || (e.needDrain = !0), e.writing || e.corked) {
    var a = e.lastBufferedRequest;
    e.lastBufferedRequest = new Zt(n, i, r), a ? a.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
  } else
    be(t, e, !1, o, n, i, r);
  return s;
}
function be(t, e, n, i, r, o, s) {
  e.writelen = i, e.writecb = s, e.writing = !0, e.sync = !0, n ? t._writev(r, e.onwrite) : t._write(r, o, e.onwrite), e.sync = !1;
}
function rn(t, e, n, i, r) {
  --e.pendingcb, n ? k(r, i) : r(i), t._writableState.errorEmitted = !0, t.emit("error", i);
}
function on(t) {
  t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
}
function sn(t, e) {
  var n = t._writableState, i = n.sync, r = n.writecb;
  if (on(n), e)
    rn(t, n, i, e, r);
  else {
    var o = He(n);
    !o && !n.corked && !n.bufferProcessing && n.bufferedRequest && Je(t, n), i ? k(Le, t, n, o, r) : Le(t, n, o, r);
  }
}
function Le(t, e, n, i) {
  n || an(t, e), e.pendingcb--, i(), Ge(t, e);
}
function an(t, e) {
  e.length === 0 && e.needDrain && (e.needDrain = !1, t.emit("drain"));
}
function Je(t, e) {
  e.bufferProcessing = !0;
  var n = e.bufferedRequest;
  if (t._writev && n && n.next) {
    var i = e.bufferedRequestCount, r = new Array(i), o = e.corkedRequestsFree;
    o.entry = n;
    for (var s = 0; n; )
      r[s] = n, n = n.next, s += 1;
    be(t, e, !0, e.length, r, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new Qe(e);
  } else {
    for (; n; ) {
      var a = n.chunk, l = n.encoding, f = n.callback, c = e.objectMode ? 1 : a.length;
      if (be(t, e, !1, c, a, l, f), n = n.next, e.writing)
        break;
    }
    n === null && (e.lastBufferedRequest = null);
  }
  e.bufferedRequestCount = 0, e.bufferedRequest = n, e.bufferProcessing = !1;
}
D.prototype._write = function(t, e, n) {
  n(new Error("not implemented"));
};
D.prototype._writev = null;
D.prototype.end = function(t, e, n) {
  var i = this._writableState;
  typeof t == "function" ? (n = t, t = null, e = null) : typeof e == "function" && (n = e, e = null), t != null && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), !i.ending && !i.finished && ln(this, i, n);
};
function He(t) {
  return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
}
function De(t, e) {
  e.prefinished || (e.prefinished = !0, t.emit("prefinish"));
}
function Ge(t, e) {
  var n = He(e);
  return n && (e.pendingcb === 0 ? (De(t, e), e.finished = !0, t.emit("finish")) : De(t, e)), n;
}
function ln(t, e, n) {
  e.ending = !0, Ge(t, e), n && (e.finished ? k(n) : t.once("finish", n)), e.ended = !0, t.writable = !1;
}
function Qe(t) {
  var e = this;
  this.next = null, this.entry = null, this.finish = function(n) {
    var i = e.entry;
    for (e.entry = null; i; ) {
      var r = i.callback;
      t.pendingcb--, r(n), i = i.next;
    }
    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
  };
}
H(j, S);
var Ce = Object.keys(D.prototype);
for (var pe = 0; pe < Ce.length; pe++) {
  var me = Ce[pe];
  j.prototype[me] || (j.prototype[me] = D.prototype[me]);
}
function j(t) {
  if (!(this instanceof j))
    return new j(t);
  S.call(this, t), D.call(this, t), t && t.readable === !1 && (this.readable = !1), t && t.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", fn);
}
function fn() {
  this.allowHalfOpen || this._writableState.ended || k(un, this);
}
function un(t) {
  t.end();
}
H(M, j);
function cn(t) {
  this.afterTransform = function(e, n) {
    return dn(t, e, n);
  }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null;
}
function dn(t, e, n) {
  var i = t._transformState;
  i.transforming = !1;
  var r = i.writecb;
  if (!r)
    return t.emit("error", new Error("no writecb in Transform class"));
  i.writechunk = null, i.writecb = null, n != null && t.push(n), r(e);
  var o = t._readableState;
  o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && t._read(o.highWaterMark);
}
function M(t) {
  if (!(this instanceof M))
    return new M(t);
  j.call(this, t), this._transformState = new cn(this);
  var e = this;
  this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.once("prefinish", function() {
    typeof this._flush == "function" ? this._flush(function(n) {
      xe(e, n);
    }) : xe(e);
  });
}
M.prototype.push = function(t, e) {
  return this._transformState.needTransform = !1, j.prototype.push.call(this, t, e);
};
M.prototype._transform = function(t, e, n) {
  throw new Error("Not implemented");
};
M.prototype._write = function(t, e, n) {
  var i = this._transformState;
  if (i.writecb = n, i.writechunk = t, i.writeencoding = e, !i.transforming) {
    var r = this._readableState;
    (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark);
  }
};
M.prototype._read = function(t) {
  var e = this._transformState;
  e.writechunk !== null && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
};
function xe(t, e) {
  if (e)
    return t.emit("error", e);
  var n = t._writableState, i = t._transformState;
  if (n.length)
    throw new Error("Calling transform done when ws.length != 0");
  if (i.transforming)
    throw new Error("Calling transform done when still transforming");
  return t.push(null);
}
H(Y, M);
function Y(t) {
  if (!(this instanceof Y))
    return new Y(t);
  M.call(this, t);
}
Y.prototype._transform = function(t, e, n) {
  n(null, t);
};
H(A, p);
A.Readable = S;
A.Writable = D;
A.Duplex = j;
A.Transform = M;
A.PassThrough = Y;
A.Stream = A;
function A() {
  p.call(this);
}
A.prototype.pipe = function(t, e) {
  var n = this;
  function i(c) {
    t.writable && t.write(c) === !1 && n.pause && n.pause();
  }
  n.on("data", i);
  function r() {
    n.readable && n.resume && n.resume();
  }
  t.on("drain", r), !t._isStdio && (!e || e.end !== !1) && (n.on("end", s), n.on("close", a));
  var o = !1;
  function s() {
    o || (o = !0, t.end());
  }
  function a() {
    o || (o = !0, typeof t.destroy == "function" && t.destroy());
  }
  function l(c) {
    if (f(), p.listenerCount(this, "error") === 0)
      throw c;
  }
  n.on("error", l), t.on("error", l);
  function f() {
    n.removeListener("data", i), t.removeListener("drain", r), n.removeListener("end", s), n.removeListener("close", a), n.removeListener("error", l), t.removeListener("error", l), n.removeListener("end", f), n.removeListener("close", f), t.removeListener("close", f);
  }
  return n.on("end", f), n.on("close", f), t.on("close", f), t.emit("pipe", n), t;
};
const Ye = function(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
};
class _ extends Error {
  constructor(e, n, i, ...r) {
    Array.isArray(n) && (n = n.join(" ").trim()), super(n), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, _), this.code = e;
    for (const o of r)
      for (const s in o) {
        const a = o[s];
        this[s] = u.isBuffer(a) ? a.toString(i.encoding) : a == null ? a : JSON.parse(JSON.stringify(a));
      }
  }
}
const Ke = function(t) {
  const e = [];
  for (let n = 0, i = t.length; n < i; n++) {
    const r = t[n];
    if (r == null || r === !1)
      e[n] = { disabled: !0 };
    else if (typeof r == "string")
      e[n] = { name: r };
    else if (Ye(r)) {
      if (typeof r.name != "string")
        throw new _("CSV_OPTION_COLUMNS_MISSING_NAME", [
          "Option columns missing name:",
          `property "name" is required at position ${n}`,
          "when column is an object literal"
        ]);
      e[n] = r;
    } else
      throw new _("CSV_INVALID_COLUMN_DEFINITION", [
        "Invalid column definition:",
        "expect a string or a literal object,",
        `got ${JSON.stringify(r)} at position ${n}`
      ]);
  }
  return e;
};
class je {
  constructor(e = 100) {
    this.size = e, this.length = 0, this.buf = u.allocUnsafe(e);
  }
  prepend(e) {
    if (u.isBuffer(e)) {
      const n = this.length + e.length;
      if (n >= this.size && (this.resize(), n >= this.size))
        throw Error("INVALID_BUFFER_STATE");
      const i = this.buf;
      this.buf = u.allocUnsafe(this.size), e.copy(this.buf, 0), i.copy(this.buf, e.length), this.length += e.length;
    } else {
      const n = this.length++;
      n === this.size && this.resize();
      const i = this.clone();
      this.buf[0] = e, i.copy(this.buf, 1, 0, n);
    }
  }
  append(e) {
    const n = this.length++;
    n === this.size && this.resize(), this.buf[n] = e;
  }
  clone() {
    return u.from(this.buf.slice(0, this.length));
  }
  resize() {
    const e = this.length;
    this.size = this.size * 2;
    const n = u.allocUnsafe(this.size);
    this.buf.copy(n, 0, 0, e), this.buf = n;
  }
  toString(e) {
    return e ? this.buf.slice(0, this.length).toString(e) : Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
  }
  toJSON() {
    return this.toString("utf8");
  }
  reset() {
    this.length = 0;
  }
}
const hn = 12, pn = 13, mn = 10, _n = 32, gn = 9, bn = function(t) {
  return {
    bomSkipped: !1,
    bufBytesStart: 0,
    castField: t.cast_function,
    commenting: !1,
    // Current error encountered by a record
    error: void 0,
    enabled: t.from_line === 1,
    escaping: !1,
    escapeIsQuote: u.isBuffer(t.escape) && u.isBuffer(t.quote) && u.compare(t.escape, t.quote) === 0,
    // columns can be `false`, `true`, `Array`
    expectedRecordLength: Array.isArray(t.columns) ? t.columns.length : void 0,
    field: new je(20),
    firstLineToHeaders: t.cast_first_line_to_header,
    needMoreDataSize: Math.max(
      // Skip if the remaining buffer smaller than comment
      t.comment !== null ? t.comment.length : 0,
      ...t.delimiter.map((e) => e.length),
      // Skip if the remaining buffer can be escape sequence
      t.quote !== null ? t.quote.length : 0
    ),
    previousBuf: void 0,
    quoting: !1,
    stop: !1,
    rawBuffer: new je(100),
    record: [],
    recordHasError: !1,
    record_length: 0,
    recordDelimiterMaxLength: t.record_delimiter.length === 0 ? 0 : Math.max(...t.record_delimiter.map((e) => e.length)),
    trimChars: [u.from(" ", t.encoding)[0], u.from("	", t.encoding)[0]],
    wasQuoting: !1,
    wasRowDelimiter: !1,
    timchars: [
      u.from(u.from([pn], "utf8").toString(), t.encoding),
      u.from(u.from([mn], "utf8").toString(), t.encoding),
      u.from(u.from([hn], "utf8").toString(), t.encoding),
      u.from(u.from([_n], "utf8").toString(), t.encoding),
      u.from(u.from([gn], "utf8").toString(), t.encoding)
    ]
  };
}, vn = function(t) {
  return t.replace(/([A-Z])/g, function(e, n) {
    return "_" + n.toLowerCase();
  });
}, ke = function(t) {
  const e = {};
  for (const i in t)
    e[vn(i)] = t[i];
  if (e.encoding === void 0 || e.encoding === !0)
    e.encoding = "utf8";
  else if (e.encoding === null || e.encoding === !1)
    e.encoding = null;
  else if (typeof e.encoding != "string" && e.encoding !== null)
    throw new _("CSV_INVALID_OPTION_ENCODING", [
      "Invalid option encoding:",
      "encoding must be a string or null to return a buffer,",
      `got ${JSON.stringify(e.encoding)}`
    ], e);
  if (e.bom === void 0 || e.bom === null || e.bom === !1)
    e.bom = !1;
  else if (e.bom !== !0)
    throw new _("CSV_INVALID_OPTION_BOM", [
      "Invalid option bom:",
      "bom must be true,",
      `got ${JSON.stringify(e.bom)}`
    ], e);
  if (e.cast_function = null, e.cast === void 0 || e.cast === null || e.cast === !1 || e.cast === "")
    e.cast = void 0;
  else if (typeof e.cast == "function")
    e.cast_function = e.cast, e.cast = !0;
  else if (e.cast !== !0)
    throw new _("CSV_INVALID_OPTION_CAST", [
      "Invalid option cast:",
      "cast must be true or a function,",
      `got ${JSON.stringify(e.cast)}`
    ], e);
  if (e.cast_date === void 0 || e.cast_date === null || e.cast_date === !1 || e.cast_date === "")
    e.cast_date = !1;
  else if (e.cast_date === !0)
    e.cast_date = function(i) {
      const r = Date.parse(i);
      return isNaN(r) ? i : new Date(r);
    };
  else if (typeof e.cast_date != "function")
    throw new _("CSV_INVALID_OPTION_CAST_DATE", [
      "Invalid option cast_date:",
      "cast_date must be true or a function,",
      `got ${JSON.stringify(e.cast_date)}`
    ], e);
  if (e.cast_first_line_to_header = null, e.columns === !0)
    e.cast_first_line_to_header = void 0;
  else if (typeof e.columns == "function")
    e.cast_first_line_to_header = e.columns, e.columns = !0;
  else if (Array.isArray(e.columns))
    e.columns = Ke(e.columns);
  else if (e.columns === void 0 || e.columns === null || e.columns === !1)
    e.columns = !1;
  else
    throw new _("CSV_INVALID_OPTION_COLUMNS", [
      "Invalid option columns:",
      "expect an array, a function or true,",
      `got ${JSON.stringify(e.columns)}`
    ], e);
  if (e.group_columns_by_name === void 0 || e.group_columns_by_name === null || e.group_columns_by_name === !1)
    e.group_columns_by_name = !1;
  else {
    if (e.group_columns_by_name !== !0)
      throw new _("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
        "Invalid option group_columns_by_name:",
        "expect an boolean,",
        `got ${JSON.stringify(e.group_columns_by_name)}`
      ], e);
    if (e.columns === !1)
      throw new _("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
        "Invalid option group_columns_by_name:",
        "the `columns` mode must be activated."
      ], e);
  }
  if (e.comment === void 0 || e.comment === null || e.comment === !1 || e.comment === "")
    e.comment = null;
  else if (typeof e.comment == "string" && (e.comment = u.from(e.comment, e.encoding)), !u.isBuffer(e.comment))
    throw new _("CSV_INVALID_OPTION_COMMENT", [
      "Invalid option comment:",
      "comment must be a buffer or a string,",
      `got ${JSON.stringify(e.comment)}`
    ], e);
  const n = JSON.stringify(e.delimiter);
  if (Array.isArray(e.delimiter) || (e.delimiter = [e.delimiter]), e.delimiter.length === 0)
    throw new _("CSV_INVALID_OPTION_DELIMITER", [
      "Invalid option delimiter:",
      "delimiter must be a non empty string or buffer or array of string|buffer,",
      `got ${n}`
    ], e);
  if (e.delimiter = e.delimiter.map(function(i) {
    if (i == null || i === !1)
      return u.from(",", e.encoding);
    if (typeof i == "string" && (i = u.from(i, e.encoding)), !u.isBuffer(i) || i.length === 0)
      throw new _("CSV_INVALID_OPTION_DELIMITER", [
        "Invalid option delimiter:",
        "delimiter must be a non empty string or buffer or array of string|buffer,",
        `got ${n}`
      ], e);
    return i;
  }), e.escape === void 0 || e.escape === !0 ? e.escape = u.from('"', e.encoding) : typeof e.escape == "string" ? e.escape = u.from(e.escape, e.encoding) : (e.escape === null || e.escape === !1) && (e.escape = null), e.escape !== null && !u.isBuffer(e.escape))
    throw new Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(e.escape)}`);
  if (e.from === void 0 || e.from === null)
    e.from = 1;
  else if (typeof e.from == "string" && /\d+/.test(e.from) && (e.from = parseInt(e.from)), Number.isInteger(e.from)) {
    if (e.from < 0)
      throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(t.from)}`);
  } else
    throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(e.from)}`);
  if (e.from_line === void 0 || e.from_line === null)
    e.from_line = 1;
  else if (typeof e.from_line == "string" && /\d+/.test(e.from_line) && (e.from_line = parseInt(e.from_line)), Number.isInteger(e.from_line)) {
    if (e.from_line <= 0)
      throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(t.from_line)}`);
  } else
    throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(t.from_line)}`);
  if (e.ignore_last_delimiters === void 0 || e.ignore_last_delimiters === null)
    e.ignore_last_delimiters = !1;
  else if (typeof e.ignore_last_delimiters == "number")
    e.ignore_last_delimiters = Math.floor(e.ignore_last_delimiters), e.ignore_last_delimiters === 0 && (e.ignore_last_delimiters = !1);
  else if (typeof e.ignore_last_delimiters != "boolean")
    throw new _("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS", [
      "Invalid option `ignore_last_delimiters`:",
      "the value must be a boolean value or an integer,",
      `got ${JSON.stringify(e.ignore_last_delimiters)}`
    ], e);
  if (e.ignore_last_delimiters === !0 && e.columns === !1)
    throw new _("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS", [
      "The option `ignore_last_delimiters`",
      "requires the activation of the `columns` option"
    ], e);
  if (e.info === void 0 || e.info === null || e.info === !1)
    e.info = !1;
  else if (e.info !== !0)
    throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(e.info)}`);
  if (e.max_record_size === void 0 || e.max_record_size === null || e.max_record_size === !1)
    e.max_record_size = 0;
  else if (!(Number.isInteger(e.max_record_size) && e.max_record_size >= 0))
    if (typeof e.max_record_size == "string" && /\d+/.test(e.max_record_size))
      e.max_record_size = parseInt(e.max_record_size);
    else
      throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(e.max_record_size)}`);
  if (e.objname === void 0 || e.objname === null || e.objname === !1)
    e.objname = void 0;
  else if (u.isBuffer(e.objname)) {
    if (e.objname.length === 0)
      throw new Error("Invalid Option: objname must be a non empty buffer");
    e.encoding === null || (e.objname = e.objname.toString(e.encoding));
  } else if (typeof e.objname == "string") {
    if (e.objname.length === 0)
      throw new Error("Invalid Option: objname must be a non empty string");
  } else if (typeof e.objname != "number")
    throw new Error(`Invalid Option: objname must be a string or a buffer, got ${e.objname}`);
  if (e.objname !== void 0) {
    if (typeof e.objname == "number") {
      if (e.columns !== !1)
        throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field");
    } else if (e.columns === !1)
      throw Error("Invalid Option: objname field must be combined with columns or be defined as an index");
  }
  if (e.on_record === void 0 || e.on_record === null)
    e.on_record = void 0;
  else if (typeof e.on_record != "function")
    throw new _("CSV_INVALID_OPTION_ON_RECORD", [
      "Invalid option `on_record`:",
      "expect a function,",
      `got ${JSON.stringify(e.on_record)}`
    ], e);
  if (e.quote === null || e.quote === !1 || e.quote === "")
    e.quote = null;
  else if (e.quote === void 0 || e.quote === !0 ? e.quote = u.from('"', e.encoding) : typeof e.quote == "string" && (e.quote = u.from(e.quote, e.encoding)), !u.isBuffer(e.quote))
    throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(e.quote)}`);
  if (e.raw === void 0 || e.raw === null || e.raw === !1)
    e.raw = !1;
  else if (e.raw !== !0)
    throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(e.raw)}`);
  if (e.record_delimiter === void 0)
    e.record_delimiter = [];
  else if (typeof e.record_delimiter == "string" || u.isBuffer(e.record_delimiter)) {
    if (e.record_delimiter.length === 0)
      throw new _("CSV_INVALID_OPTION_RECORD_DELIMITER", [
        "Invalid option `record_delimiter`:",
        "value must be a non empty string or buffer,",
        `got ${JSON.stringify(e.record_delimiter)}`
      ], e);
    e.record_delimiter = [e.record_delimiter];
  } else if (!Array.isArray(e.record_delimiter))
    throw new _("CSV_INVALID_OPTION_RECORD_DELIMITER", [
      "Invalid option `record_delimiter`:",
      "value must be a string, a buffer or array of string|buffer,",
      `got ${JSON.stringify(e.record_delimiter)}`
    ], e);
  if (e.record_delimiter = e.record_delimiter.map(function(i, r) {
    if (typeof i != "string" && !u.isBuffer(i))
      throw new _("CSV_INVALID_OPTION_RECORD_DELIMITER", [
        "Invalid option `record_delimiter`:",
        "value must be a string, a buffer or array of string|buffer",
        `at index ${r},`,
        `got ${JSON.stringify(i)}`
      ], e);
    if (i.length === 0)
      throw new _("CSV_INVALID_OPTION_RECORD_DELIMITER", [
        "Invalid option `record_delimiter`:",
        "value must be a non empty string or buffer",
        `at index ${r},`,
        `got ${JSON.stringify(i)}`
      ], e);
    return typeof i == "string" && (i = u.from(i, e.encoding)), i;
  }), typeof e.relax_column_count != "boolean")
    if (e.relax_column_count === void 0 || e.relax_column_count === null)
      e.relax_column_count = !1;
    else
      throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(e.relax_column_count)}`);
  if (typeof e.relax_column_count_less != "boolean")
    if (e.relax_column_count_less === void 0 || e.relax_column_count_less === null)
      e.relax_column_count_less = !1;
    else
      throw new Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(e.relax_column_count_less)}`);
  if (typeof e.relax_column_count_more != "boolean")
    if (e.relax_column_count_more === void 0 || e.relax_column_count_more === null)
      e.relax_column_count_more = !1;
    else
      throw new Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(e.relax_column_count_more)}`);
  if (typeof e.relax_quotes != "boolean")
    if (e.relax_quotes === void 0 || e.relax_quotes === null)
      e.relax_quotes = !1;
    else
      throw new Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(e.relax_quotes)}`);
  if (typeof e.skip_empty_lines != "boolean")
    if (e.skip_empty_lines === void 0 || e.skip_empty_lines === null)
      e.skip_empty_lines = !1;
    else
      throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(e.skip_empty_lines)}`);
  if (typeof e.skip_records_with_empty_values != "boolean")
    if (e.skip_records_with_empty_values === void 0 || e.skip_records_with_empty_values === null)
      e.skip_records_with_empty_values = !1;
    else
      throw new Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(e.skip_records_with_empty_values)}`);
  if (typeof e.skip_records_with_error != "boolean")
    if (e.skip_records_with_error === void 0 || e.skip_records_with_error === null)
      e.skip_records_with_error = !1;
    else
      throw new Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(e.skip_records_with_error)}`);
  if (e.rtrim === void 0 || e.rtrim === null || e.rtrim === !1)
    e.rtrim = !1;
  else if (e.rtrim !== !0)
    throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(e.rtrim)}`);
  if (e.ltrim === void 0 || e.ltrim === null || e.ltrim === !1)
    e.ltrim = !1;
  else if (e.ltrim !== !0)
    throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(e.ltrim)}`);
  if (e.trim === void 0 || e.trim === null || e.trim === !1)
    e.trim = !1;
  else if (e.trim !== !0)
    throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(e.trim)}`);
  if (e.trim === !0 && t.ltrim !== !1 ? e.ltrim = !0 : e.ltrim !== !0 && (e.ltrim = !1), e.trim === !0 && t.rtrim !== !1 ? e.rtrim = !0 : e.rtrim !== !0 && (e.rtrim = !1), e.to === void 0 || e.to === null)
    e.to = -1;
  else if (typeof e.to == "string" && /\d+/.test(e.to) && (e.to = parseInt(e.to)), Number.isInteger(e.to)) {
    if (e.to <= 0)
      throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(t.to)}`);
  } else
    throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(t.to)}`);
  if (e.to_line === void 0 || e.to_line === null)
    e.to_line = -1;
  else if (typeof e.to_line == "string" && /\d+/.test(e.to_line) && (e.to_line = parseInt(e.to_line)), Number.isInteger(e.to_line)) {
    if (e.to_line <= 0)
      throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(t.to_line)}`);
  } else
    throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(t.to_line)}`);
  return e;
}, Me = function(t) {
  return t.every((e) => e == null || e.toString && e.toString().trim() === "");
}, wn = 13, yn = 10, J = {
  // Note, the following are equals:
  // Buffer.from("\ufeff")
  // Buffer.from([239, 187, 191])
  // Buffer.from('EFBBBF', 'hex')
  utf8: u.from([239, 187, 191]),
  // Note, the following are equals:
  // Buffer.from "\ufeff", 'utf16le
  // Buffer.from([255, 254])
  utf16le: u.from([255, 254])
}, Sn = function(t = {}) {
  const e = {
    bytes: 0,
    comment_lines: 0,
    empty_lines: 0,
    invalid_field_length: 0,
    lines: 1,
    records: 0
  }, n = ke(t);
  return {
    info: e,
    original_options: t,
    options: n,
    state: bn(n),
    __needMoreData: function(i, r, o) {
      if (o)
        return !1;
      const { encoding: s, escape: a, quote: l } = this.options, { quoting: f, needMoreDataSize: c, recordDelimiterMaxLength: h } = this.state, N = r - i - 1, g = Math.max(
        c,
        // Skip if the remaining buffer smaller than record delimiter
        // If "record_delimiter" is yet to be discovered:
        // 1. It is equals to `[]` and "recordDelimiterMaxLength" equals `0`
        // 2. We set the length to windows line ending in the current encoding
        // Note, that encoding is known from user or bom discovery at that point
        // recordDelimiterMaxLength,
        h === 0 ? u.from(`\r
`, s).length : h,
        // Skip if remaining buffer can be an escaped quote
        f ? (a === null ? 0 : a.length) + l.length : 0,
        // Skip if remaining buffer can be record delimiter following the closing quote
        f ? l.length + h : 0
      );
      return N < g;
    },
    // Central parser implementation
    parse: function(i, r, o, s) {
      const { bom: a, encoding: l, from_line: f, ltrim: c, max_record_size: h, raw: N, relax_quotes: g, rtrim: C, skip_empty_lines: y, to: x, to_line: O } = this.options;
      let { comment: b, escape: m, quote: R, record_delimiter: oe } = this.options;
      const { bomSkipped: Ze, previousBuf: ee, rawBuffer: Xe, escapeIsQuote: et } = this.state;
      let v;
      if (ee === void 0)
        if (i === void 0) {
          s();
          return;
        } else
          v = i;
      else
        ee !== void 0 && i === void 0 ? v = ee : v = u.concat([ee, i]);
      if (Ze === !1)
        if (a === !1)
          this.state.bomSkipped = !0;
        else if (v.length < 3) {
          if (r === !1) {
            this.state.previousBuf = v;
            return;
          }
        } else {
          for (const E in J)
            if (J[E].compare(v, 0, J[E].length) === 0) {
              const $ = J[E].length;
              this.state.bufBytesStart += $, v = v.slice($), this.options = ke({ ...this.original_options, encoding: E }), { comment: b, escape: m, quote: R } = this.options;
              break;
            }
          this.state.bomSkipped = !0;
        }
      const se = v.length;
      let d;
      for (d = 0; d < se && !this.__needMoreData(d, se, r); d++) {
        if (this.state.wasRowDelimiter === !0 && (this.info.lines++, this.state.wasRowDelimiter = !1), O !== -1 && this.info.lines > O) {
          this.state.stop = !0, s();
          return;
        }
        this.state.quoting === !1 && oe.length === 0 && this.__autoDiscoverRecordDelimiter(v, d) && (oe = this.options.record_delimiter);
        const E = v[d];
        if (N === !0 && Xe.append(E), (E === wn || E === yn) && this.state.wasRowDelimiter === !1 && (this.state.wasRowDelimiter = !0), this.state.escaping === !0)
          this.state.escaping = !1;
        else {
          if (m !== null && this.state.quoting === !0 && this.__isEscape(v, d, E) && d + m.length < se)
            if (et) {
              if (this.__isQuote(v, d + m.length)) {
                this.state.escaping = !0, d += m.length - 1;
                continue;
              }
            } else {
              this.state.escaping = !0, d += m.length - 1;
              continue;
            }
          if (this.state.commenting === !1 && this.__isQuote(v, d))
            if (this.state.quoting === !0) {
              const L = v[d + R.length], G = C && this.__isCharTrimable(v, d + R.length), W = b !== null && this.__compareBytes(b, v, d + R.length, L), z = this.__isDelimiter(v, d + R.length, L), te = oe.length === 0 ? this.__autoDiscoverRecordDelimiter(v, d + R.length) : this.__isRecordDelimiter(L, v, d + R.length);
              if (m !== null && this.__isEscape(v, d, E) && this.__isQuote(v, d + m.length))
                d += m.length - 1;
              else if (!L || z || te || W || G) {
                this.state.quoting = !1, this.state.wasQuoting = !0, d += R.length - 1;
                continue;
              } else if (g === !1) {
                const Q = this.__error(
                  new _("CSV_INVALID_CLOSING_QUOTE", [
                    "Invalid Closing Quote:",
                    `got "${String.fromCharCode(L)}"`,
                    `at line ${this.info.lines}`,
                    "instead of delimiter, record delimiter, trimable character",
                    "(if activated) or comment"
                  ], this.options, this.__infoField())
                );
                if (Q !== void 0)
                  return Q;
              } else
                this.state.quoting = !1, this.state.wasQuoting = !0, this.state.field.prepend(R), d += R.length - 1;
            } else if (this.state.field.length !== 0) {
              if (g === !1) {
                const L = this.__infoField(), G = Object.keys(J).map((z) => J[z].equals(this.state.field.toString()) ? z : !1).filter(Boolean)[0], W = this.__error(
                  new _("INVALID_OPENING_QUOTE", [
                    "Invalid Opening Quote:",
                    `a quote is found on field ${JSON.stringify(L.column)} at line ${L.lines}, value is ${JSON.stringify(this.state.field.toString(l))}`,
                    G ? `(${G} bom)` : void 0
                  ], this.options, L, {
                    field: this.state.field
                  })
                );
                if (W !== void 0)
                  return W;
              }
            } else {
              this.state.quoting = !0, d += R.length - 1;
              continue;
            }
          if (this.state.quoting === !1) {
            const L = this.__isRecordDelimiter(E, v, d);
            if (L !== 0) {
              if (this.state.commenting && this.state.wasQuoting === !1 && this.state.record.length === 0 && this.state.field.length === 0)
                this.info.comment_lines++;
              else {
                if (this.state.enabled === !1 && this.info.lines + (this.state.wasRowDelimiter === !0 ? 1 : 0) >= f) {
                  this.state.enabled = !0, this.__resetField(), this.__resetRecord(), d += L - 1;
                  continue;
                }
                if (y === !0 && this.state.wasQuoting === !1 && this.state.record.length === 0 && this.state.field.length === 0) {
                  this.info.empty_lines++, d += L - 1;
                  continue;
                }
                this.info.bytes = this.state.bufBytesStart + d;
                const te = this.__onField();
                if (te !== void 0)
                  return te;
                this.info.bytes = this.state.bufBytesStart + d + L;
                const Q = this.__onRecord(o);
                if (Q !== void 0)
                  return Q;
                if (x !== -1 && this.info.records >= x) {
                  this.state.stop = !0, s();
                  return;
                }
              }
              this.state.commenting = !1, d += L - 1;
              continue;
            }
            if (this.state.commenting)
              continue;
            if ((b === null ? 0 : this.__compareBytes(b, v, d, E)) !== 0) {
              this.state.commenting = !0;
              continue;
            }
            const W = this.__isDelimiter(v, d, E);
            if (W !== 0) {
              this.info.bytes = this.state.bufBytesStart + d;
              const z = this.__onField();
              if (z !== void 0)
                return z;
              d += W - 1;
              continue;
            }
          }
        }
        if (this.state.commenting === !1 && h !== 0 && this.state.record_length + this.state.field.length > h)
          return this.__error(
            new _("CSV_MAX_RECORD_SIZE", [
              "Max Record Size:",
              "record exceed the maximum number of tolerated bytes",
              `of ${h}`,
              `at line ${this.info.lines}`
            ], this.options, this.__infoField())
          );
        const $ = c === !1 || this.state.quoting === !0 || this.state.field.length !== 0 || !this.__isCharTrimable(v, d), tt = C === !1 || this.state.wasQuoting === !1;
        if ($ === !0 && tt === !0)
          this.state.field.append(E);
        else {
          if (C === !0 && !this.__isCharTrimable(v, d))
            return this.__error(
              new _("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE", [
                "Invalid Closing Quote:",
                "found non trimable byte after quote",
                `at line ${this.info.lines}`
              ], this.options, this.__infoField())
            );
          $ === !1 && (d += this.__isCharTrimable(v, d) - 1);
          continue;
        }
      }
      if (r === !0)
        if (this.state.quoting === !0) {
          const E = this.__error(
            new _("CSV_QUOTE_NOT_CLOSED", [
              "Quote Not Closed:",
              `the parsing is finished with an opening quote at line ${this.info.lines}`
            ], this.options, this.__infoField())
          );
          if (E !== void 0)
            return E;
        } else if (this.state.wasQuoting === !0 || this.state.record.length !== 0 || this.state.field.length !== 0) {
          this.info.bytes = this.state.bufBytesStart + d;
          const E = this.__onField();
          if (E !== void 0)
            return E;
          const $ = this.__onRecord(o);
          if ($ !== void 0)
            return $;
        } else
          this.state.wasRowDelimiter === !0 ? this.info.empty_lines++ : this.state.commenting === !0 && this.info.comment_lines++;
      else
        this.state.bufBytesStart += d, this.state.previousBuf = v.slice(d);
      this.state.wasRowDelimiter === !0 && (this.info.lines++, this.state.wasRowDelimiter = !1);
    },
    __onRecord: function(i) {
      const { columns: r, group_columns_by_name: o, encoding: s, info: a, from: l, relax_column_count: f, relax_column_count_less: c, relax_column_count_more: h, raw: N, skip_records_with_empty_values: g } = this.options, { enabled: C, record: y } = this.state;
      if (C === !1)
        return this.__resetRecord();
      const x = y.length;
      if (r === !0) {
        if (g === !0 && Me(y)) {
          this.__resetRecord();
          return;
        }
        return this.__firstLineToColumns(y);
      }
      if (r === !1 && this.info.records === 0 && (this.state.expectedRecordLength = x), x !== this.state.expectedRecordLength) {
        const O = r === !1 ? new _("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH", [
          "Invalid Record Length:",
          `expect ${this.state.expectedRecordLength},`,
          `got ${x} on line ${this.info.lines}`
        ], this.options, this.__infoField(), {
          record: y
        }) : new _("CSV_RECORD_INCONSISTENT_COLUMNS", [
          "Invalid Record Length:",
          `columns length is ${r.length},`,
          // rename columns
          `got ${x} on line ${this.info.lines}`
        ], this.options, this.__infoField(), {
          record: y
        });
        if (f === !0 || c === !0 && x < this.state.expectedRecordLength || h === !0 && x > this.state.expectedRecordLength)
          this.info.invalid_field_length++, this.state.error = O;
        else {
          const b = this.__error(O);
          if (b)
            return b;
        }
      }
      if (g === !0 && Me(y)) {
        this.__resetRecord();
        return;
      }
      if (this.state.recordHasError === !0) {
        this.__resetRecord(), this.state.recordHasError = !1;
        return;
      }
      if (this.info.records++, l === 1 || this.info.records >= l) {
        const { objname: O } = this.options;
        if (r !== !1) {
          const b = {};
          for (let m = 0, R = y.length; m < R; m++)
            r[m] === void 0 || r[m].disabled || (o === !0 && b[r[m].name] !== void 0 ? Array.isArray(b[r[m].name]) ? b[r[m].name] = b[r[m].name].concat(y[m]) : b[r[m].name] = [b[r[m].name], y[m]] : b[r[m].name] = y[m]);
          if (N === !0 || a === !0) {
            const m = Object.assign(
              { record: b },
              N === !0 ? { raw: this.state.rawBuffer.toString(s) } : {},
              a === !0 ? { info: this.__infoRecord() } : {}
            ), R = this.__push(
              O === void 0 ? m : [b[O], m],
              i
            );
            if (R)
              return R;
          } else {
            const m = this.__push(
              O === void 0 ? b : [b[O], b],
              i
            );
            if (m)
              return m;
          }
        } else if (N === !0 || a === !0) {
          const b = Object.assign(
            { record: y },
            N === !0 ? { raw: this.state.rawBuffer.toString(s) } : {},
            a === !0 ? { info: this.__infoRecord() } : {}
          ), m = this.__push(
            O === void 0 ? b : [y[O], b],
            i
          );
          if (m)
            return m;
        } else {
          const b = this.__push(
            O === void 0 ? y : [y[O], y],
            i
          );
          if (b)
            return b;
        }
      }
      this.__resetRecord();
    },
    __firstLineToColumns: function(i) {
      const { firstLineToHeaders: r } = this.state;
      try {
        const o = r === void 0 ? i : r.call(null, i);
        if (!Array.isArray(o))
          return this.__error(
            new _("CSV_INVALID_COLUMN_MAPPING", [
              "Invalid Column Mapping:",
              "expect an array from column function,",
              `got ${JSON.stringify(o)}`
            ], this.options, this.__infoField(), {
              headers: o
            })
          );
        const s = Ke(o);
        this.state.expectedRecordLength = s.length, this.options.columns = s, this.__resetRecord();
        return;
      } catch (o) {
        return o;
      }
    },
    __resetRecord: function() {
      this.options.raw === !0 && this.state.rawBuffer.reset(), this.state.error = void 0, this.state.record = [], this.state.record_length = 0;
    },
    __onField: function() {
      const { cast: i, encoding: r, rtrim: o, max_record_size: s } = this.options, { enabled: a, wasQuoting: l } = this.state;
      if (a === !1)
        return this.__resetField();
      let f = this.state.field.toString(r);
      if (o === !0 && l === !1 && (f = f.trimRight()), i === !0) {
        const [c, h] = this.__cast(f);
        if (c !== void 0)
          return c;
        f = h;
      }
      this.state.record.push(f), s !== 0 && typeof f == "string" && (this.state.record_length += f.length), this.__resetField();
    },
    __resetField: function() {
      this.state.field.reset(), this.state.wasQuoting = !1;
    },
    __push: function(i, r) {
      const { on_record: o } = this.options;
      if (o !== void 0) {
        const s = this.__infoRecord();
        try {
          i = o.call(null, i, s);
        } catch (a) {
          return a;
        }
        if (i == null)
          return;
      }
      r(i);
    },
    // Return a tuple with the error and the casted value
    __cast: function(i) {
      const { columns: r, relax_column_count: o } = this.options;
      if (Array.isArray(r) === !0 && o && this.options.columns.length <= this.state.record.length)
        return [void 0, void 0];
      if (this.state.castField !== null)
        try {
          const a = this.__infoField();
          return [void 0, this.state.castField.call(null, i, a)];
        } catch (a) {
          return [a];
        }
      if (this.__isFloat(i))
        return [void 0, parseFloat(i)];
      if (this.options.cast_date !== !1) {
        const a = this.__infoField();
        return [void 0, this.options.cast_date.call(null, i, a)];
      }
      return [void 0, i];
    },
    // Helper to test if a character is a space or a line delimiter
    __isCharTrimable: function(i, r) {
      return ((s, a) => {
        const { timchars: l } = this.state;
        e:
          for (let f = 0; f < l.length; f++) {
            const c = l[f];
            for (let h = 0; h < c.length; h++)
              if (c[h] !== s[a + h])
                continue e;
            return c.length;
          }
        return 0;
      })(i, r);
    },
    // Keep it in case we implement the `cast_int` option
    // __isInt(value){
    //   // return Number.isInteger(parseInt(value))
    //   // return !isNaN( parseInt( obj ) );
    //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
    // }
    __isFloat: function(i) {
      return i - parseFloat(i) + 1 >= 0;
    },
    __compareBytes: function(i, r, o, s) {
      if (i[0] !== s)
        return 0;
      const a = i.length;
      for (let l = 1; l < a; l++)
        if (i[l] !== r[o + l])
          return 0;
      return a;
    },
    __isDelimiter: function(i, r, o) {
      const { delimiter: s, ignore_last_delimiters: a } = this.options;
      if (a === !0 && this.state.record.length === this.options.columns.length - 1)
        return 0;
      if (a !== !1 && typeof a == "number" && this.state.record.length === a - 1)
        return 0;
      e:
        for (let l = 0; l < s.length; l++) {
          const f = s[l];
          if (f[0] === o) {
            for (let c = 1; c < f.length; c++)
              if (f[c] !== i[r + c])
                continue e;
            return f.length;
          }
        }
      return 0;
    },
    __isRecordDelimiter: function(i, r, o) {
      const { record_delimiter: s } = this.options, a = s.length;
      e:
        for (let l = 0; l < a; l++) {
          const f = s[l], c = f.length;
          if (f[0] === i) {
            for (let h = 1; h < c; h++)
              if (f[h] !== r[o + h])
                continue e;
            return f.length;
          }
        }
      return 0;
    },
    __isEscape: function(i, r, o) {
      const { escape: s } = this.options;
      if (s === null)
        return !1;
      const a = s.length;
      if (s[0] === o) {
        for (let l = 0; l < a; l++)
          if (s[l] !== i[r + l])
            return !1;
        return !0;
      }
      return !1;
    },
    __isQuote: function(i, r) {
      const { quote: o } = this.options;
      if (o === null)
        return !1;
      const s = o.length;
      for (let a = 0; a < s; a++)
        if (o[a] !== i[r + a])
          return !1;
      return !0;
    },
    __autoDiscoverRecordDelimiter: function(i, r) {
      const { encoding: o } = this.options, s = [
        // Important, the windows line ending must be before mac os 9
        u.from(`\r
`, o),
        u.from(`
`, o),
        u.from("\r", o)
      ];
      e:
        for (let a = 0; a < s.length; a++) {
          const l = s[a].length;
          for (let f = 0; f < l; f++)
            if (s[a][f] !== i[r + f])
              continue e;
          return this.options.record_delimiter.push(s[a]), this.state.recordDelimiterMaxLength = s[a].length, s[a].length;
        }
      return 0;
    },
    __error: function(i) {
      const { encoding: r, raw: o, skip_records_with_error: s } = this.options, a = typeof i == "string" ? new Error(i) : i;
      if (s) {
        this.state.recordHasError = !0, this.options.on_skip !== void 0 && this.options.on_skip(a, o ? this.state.rawBuffer.toString(r) : void 0);
        return;
      } else
        return a;
    },
    __infoDataSet: function() {
      return {
        ...this.info,
        columns: this.options.columns
      };
    },
    __infoRecord: function() {
      const { columns: i, raw: r, encoding: o } = this.options;
      return {
        ...this.__infoDataSet(),
        error: this.state.error,
        header: i === !0,
        index: this.state.record.length,
        raw: r ? this.state.rawBuffer.toString(o) : void 0
      };
    },
    __infoField: function() {
      const { columns: i } = this.options, r = Array.isArray(i);
      return {
        ...this.__infoRecord(),
        column: r === !0 ? i.length > this.state.record.length ? i[this.state.record.length].name : null : this.state.record.length,
        quoting: this.state.wasQuoting
      };
    }
  };
};
class On extends M {
  constructor(e = {}) {
    super({ readableObjectMode: !0, ...e, encoding: null }), this.api = Sn(e), this.api.options.on_skip = (n, i) => {
      this.emit("skip", n, i);
    }, this.state = this.api.state, this.options = this.api.options, this.info = this.api.info;
  }
  // Implementation of `Transform._transform`
  _transform(e, n, i) {
    if (this.state.stop === !0)
      return;
    const r = this.api.parse(e, !1, (o) => {
      this.push(o);
    }, () => {
      this.push(null), this.on("end", this.destroy);
    });
    r !== void 0 && (this.state.stop = !0), i(r);
  }
  // Implementation of `Transform._flush`
  _flush(e) {
    if (this.state.stop === !0)
      return;
    const n = this.api.parse(void 0, !0, (i) => {
      this.push(i);
    }, () => {
      this.push(null), this.on("end", this.destroy);
    });
    e(n);
  }
}
const In = function() {
  let t, e, n;
  for (const r in arguments) {
    const o = arguments[r], s = typeof o;
    if (t === void 0 && (typeof o == "string" || u.isBuffer(o)))
      t = o;
    else if (e === void 0 && Ye(o))
      e = o;
    else if (n === void 0 && s === "function")
      n = o;
    else
      throw new _("CSV_INVALID_ARGUMENT", [
        "Invalid argument:",
        `got ${JSON.stringify(o)} at index ${r}`
      ], e || {});
  }
  const i = new On(e);
  if (n) {
    const r = e === void 0 || e.objname === void 0 ? [] : {};
    i.on("readable", function() {
      let o;
      for (; (o = this.read()) !== null; )
        e === void 0 || e.objname === void 0 ? r.push(o) : r[o[0]] = o[1];
    }), i.on("error", function(o) {
      n(o, void 0, i.api.__infoDataSet());
    }), i.on("end", function() {
      n(void 0, r, i.api.__infoDataSet());
    });
  }
  if (t !== void 0) {
    const r = function() {
      i.write(t), i.end();
    };
    typeof setImmediate == "function" ? setImmediate(r) : setTimeout(r, 0);
  }
  return i;
};
class V extends Error {
  constructor(e, n, i) {
    let r = `CSV Bad Format: ${e}.`;
    n && (r += ` Affected line: ${n}.`), i && (r += ` Affected content: ${JSON.stringify(i)}.`), super(r), Object.setPrototypeOf(this, V.prototype);
  }
}
class En {
  constructor(e, n) {
    T(this, "_N", /* @__PURE__ */ new Set());
    T(this, "_B", []);
    T(this, "_payoffs", {});
    T(this, "_v", (e) => {
      const n = Array.from(e).sort().join(",");
      return this._payoffs[n];
    });
    e && (this._N = e), n && (this._payoffs = n);
  }
  get N() {
    return this._N;
  }
  set N(e) {
    this._N = e;
  }
  get B() {
    const e = (i, r, o) => {
      if (!(!i.length && !r.length))
        return r.length ? (e([...i, r[0]], r.slice(1), o), e(i, r.slice(1), o)) : o.push(new Set(i)), o;
    };
    let n = e([], Array.from(this._N), []) ?? [];
    return n = n.sort((i, r) => i.size - r.size), n;
  }
  set B(e) {
    this._B = e;
  }
  get payoffs() {
    return this._payoffs;
  }
  set payoffs(e) {
    this._payoffs = e;
  }
  get v() {
    return this._v;
  }
  parseCsvRecord(e, n) {
    let i, r;
    if ("coalition" in e && "payoff" in e) {
      if (i = new Set(
        e.coalition.split(",").map(function(o) {
          const s = o.trim();
          if (s.length === 0)
            throw new V(
              "coalition column does not contain any valid player.",
              n,
              e
            );
          return s;
        })
      ), r = parseFloat(e.payoff.trim()), Number.isNaN(r))
        throw new V("payoff does not contain a valid value in float format.", n, e);
    } else
      throw new V("coalition or payoff column not found.", n, e);
    return [i, r];
  }
  async fromCsvString(e) {
    return new Promise((n, i) => {
      In(
        e.trim(),
        {
          delimiter: ";",
          columns: !0
        },
        (r, o) => {
          r && i(new V(r.message)), (!o || o.length <= 0) && i(
            new V(
              "invalid number of lines. There thould be at least 2 lines: header and grand coalition payoff"
            )
          );
          let s = 1;
          try {
            for (const a of o) {
              const [l, f] = this.parseCsvRecord(a, s);
              l.forEach((h) => this._N.add(h));
              const c = Array.from(l).sort().join(",");
              this._payoffs[c] = f, s++;
            }
            n(this);
          } catch (a) {
            i(a);
          }
        }
      );
    });
  }
}
class Nn {
  constructor() {
    T(this, "_lpTemplate", `{{DIRECTION}}
    obj: {{FUNCTION}}
Subject To
{{CONSTRAINTS}}
Bounds
{{BOUNDS}}
End`);
    T(this, "gameObjectiveFunction", (e, n, i = void 0) => {
      let r = "";
      const o = e.N.size;
      i = i || 2 ** o - 2;
      for (let s = 1; s <= i; s++) {
        const a = n ** (s - 1), l = n ** s, f = a - l;
        r += `${(f * s).toFixed(s)} t${s} + `;
        for (let c = 1; c <= 2 ** o - 2; c++)
          r += `${f.toFixed(s)} d${c}${s} + `;
      }
      return r.replace(/ \+ $/, "");
    });
    T(this, "gameConstraints", (e, n = void 0) => {
      let i = "";
      const r = e.N.size;
      n = n || 2 ** r - 2;
      for (let o = 1; o <= 2 ** r - 2; o++)
        for (let s = 1; s <= n; s++)
          i += `    c${(2 ** r - 2) * (o - 1) + s}: d${o}${s} - theta${o} + t${s} >= 0
`;
      for (let o = 1; o <= 2 ** r - 2; o++) {
        const s = e.B[o - 1], a = Array.from(s).sort();
        let l = "";
        for (let c = 0; c < a.length; c++)
          l += `x${a[c]} + `;
        l = l.replace(/ \+ $/, "");
        const f = e.v(s);
        i += `    c${(2 ** r - 2) ** 2 + o}: theta${o} + ${l} - ${f} = 0
`;
      }
      i += `    c${(2 ** r - 2) ** 2 + (2 ** r - 1)}: `;
      for (let o = 1; o <= r; o++)
        i += `x${o} + `;
      return i = i.replace(/ \+ $/, ""), i += ` = ${e.v(e.N)}`, i;
    });
    T(this, "gameBounds", (e, n = void 0) => {
      let i = "";
      const r = e.N.size;
      n = n || 2 ** r - 2;
      for (let o = 1; o <= 2 ** r - 2; o++)
        for (let s = 1; s <= n; s++)
          i += `    d${o}${s} >= 0
`;
      return i.substring(0, i.lastIndexOf(`
`));
    });
  }
  fromGame(e, n, i = void 0) {
    return this._lpTemplate.replace("{{DIRECTION}}", "Minimize").replace("{{FUNCTION}}", this.gameObjectiveFunction(e, n, i)).replace("{{CONSTRAINTS}}", this.gameConstraints(e, i)).replace("{{BOUNDS}}", this.gameBounds(e, i));
  }
}
function Rn() {
  const t = `coalition;payoff
1;10
2;15
3;12
1,2;40
1,3;35
2,3;42
1,2,3;50`, [e, n] = F.useState(), [i, r] = F.useState(0.1), [o, s] = F.useState(), [a, l] = F.useState(), [f, c] = F.useState(), h = F.useCallback(() => {
    if (f && o) {
      console.log("Solving problem:"), console.log(o);
      const g = f.solve(o, {
        presolve: "on",
        parallel: "off"
      });
      l(g);
    }
  }, [f, o]), N = F.useCallback(
    async (g) => {
      const C = await new En().fromCsvString(g), y = new Nn().fromGame(C, i, e);
      s(y);
    },
    [s, e, i]
  );
  return F.useEffect(() => {
    at({
      locateFile: (C) => `https://lovasoa.github.io/highs-js/${C}`
    }).then((C) => {
      c(C);
    });
  }, [c]), /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx(
      "textarea",
      {
        onChange: (g) => {
          N(g.target.value);
        },
        rows: 9,
        style: {
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        },
        children: t
      }
    ) }),
    /* @__PURE__ */ I.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ I.jsxs("div", { children: [
        /* @__PURE__ */ I.jsx("label", { children: /* @__PURE__ */ I.jsx("input", { type: "number", onChange: (g) => r(parseFloat(g.target.value)), placeholder: "0.1" }) }),
        /* @__PURE__ */ I.jsx("label", { children: /* @__PURE__ */ I.jsx("input", { type: "number", onChange: (g) => n(parseInt(g.target.value)), placeholder: "Maximum k value" }) }),
        /* @__PURE__ */ I.jsx("button", { type: "button", className: "btn btn-primary", onClick: h, children: "Solve" })
      ] }),
      /* @__PURE__ */ I.jsx("div", { children: /* @__PURE__ */ I.jsx("button", { type: "button", className: "btn btn-primary", onClick: h, children: "Solve" }) })
    ] }),
    /* @__PURE__ */ I.jsx(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "row",
          alignContent: "center"
        },
        children: a && Object.keys(a.Columns).map((g) => /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          "Player" in a.Columns[g] && /* @__PURE__ */ I.jsxs("div", { children: [
            "Name: ",
            a.Columns[g].Name
          ] }),
          "Solution" in a.Columns[g] && /* @__PURE__ */ I.jsxs("div", { children: [
            "Primal: ",
            a.Columns[g].Primal
          ] }),
          /* @__PURE__ */ I.jsx("br", {})
        ] }))
      }
    )
  ] });
}
ot.render(
  /* @__PURE__ */ I.jsx(st.StrictMode, { children: /* @__PURE__ */ I.jsx(Rn, {}) }),
  document.getElementById("app-root")
);
