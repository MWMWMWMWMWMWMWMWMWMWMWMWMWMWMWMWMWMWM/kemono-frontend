!function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = t();
  } else if ("function" == typeof define && define.amd) {
    define("Typewriter", [], t);
  } else if ("object" == typeof exports) {
    exports.Typewriter = t();
  } else {
    e.Typewriter = t();
  }
}("undefined" != typeof self ? self : this, () => (() => {
  var e = {
    75: function (e) {
      (function () {
        var t;
        var n;
        var r;
        var o;
        var a;
        var s;
        if ("undefined" != typeof performance && null !== performance && performance.now) {
          e.exports = function () {
            return performance.now();
          };
        } else if ("undefined" != typeof process && null !== process && process.hrtime) {
          e.exports = function () {
            return (t() - a) / 1e6;
          };
          n = process.hrtime;
          o = (t = function () {
            var e;
            return 1e9 * (e = n())[0] + e[1];
          })();
          s = 1e9 * process.uptime();
          a = o - s;
        } else if (Date.now) {
          e.exports = function () {
            return Date.now() - r;
          };
          r = Date.now();
        } else {
          e.exports = function () {
            return new Date().getTime() - r;
          };
          r = new Date().getTime();
        }
      }).call(this);
    },
    4087: (e, t, n) => {
      var r = n(75);
      var o = "undefined" == typeof window ? n.g : window;
      var a = ["moz", "webkit"];
      var i = o.requestAnimationFrame;
      var u = o.cancelAnimationFrame || o.cancelRequestAnimationFrame;
      for (var l = 0; !i && l < a.length; l++) {
        i = o[a[l] + "Request" + "AnimationFrame"];
        u = o[a[l] + "Cancel" + "AnimationFrame"] || o[a[l] + "CancelRequest" + "AnimationFrame"];
      }
      if (!i || !u) {
        var c = 0;
        var p = 0;
        var d = [];
        i = function (e) {
          if (0 === d.length) {
            var t = r();
            var n = Math.max(0, 16.666666666666668 - (t - c));
            c = n + t;
            setTimeout(function () {
              var e = d.slice(0);
              d.length = 0;
              for (var t = 0; t < e.length; t++) {
                if (!e[t].cancelled) {
                  try {
                    e[t].callback(c);
                  } catch (e) {
                    setTimeout(function () {
                      throw e;
                    }, 0);
                  }
                }
              }
            }, Math.round(n));
          }
          d.push({
            handle: ++p,
            callback: e,
            cancelled: false
          });
          return p;
        };
        u = function (e) {
          for (var t = 0; t < d.length; t++) {
            if (d[t].handle === e) {
              d[t].cancelled = true;
            }
          }
        };
      }
      e.exports = function (e) {
        return i.call(o, e);
      };
      e.exports.cancel = function () {
        u.apply(o, arguments);
      };
      e.exports.polyfill = function (e) {
        if (!e) {
          e = o;
        }
        e.requestAnimationFrame = i;
        e.cancelAnimationFrame = u;
      };
    }
  };
  var t = {};
  function n(r) {
    var o = t[r];
    if (undefined !== o) {
      return o.exports;
    }
    var a = t[r] = {
      exports: {}
    };
    e[r].call(a.exports, a, a.exports, n);
    return a.exports;
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    n.d(t, {
      a: t
    });
    return t;
  };
  n.d = (e, t) => {
    for (var r in t) if (n.o(t, r) && !n.o(e, r)) {
      Object.defineProperty(e, r, {
        enumerable: true,
        get: t[r]
      });
    }
  };
  n.g = function () {
    if ("object" == typeof globalThis) {
      return globalThis;
    }
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) {
        return window;
      }
    }
  }();
  n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  var r = {};
  (() => {
    "use strict";

    n.d(r, {
      default: () => S
    });
    var e = n(4087);
    var t = n.n(e);
    const a = function (e) {
      var t = document.createElement("div");
      t.innerHTML = e;
      return t.childNodes;
    };
    function E(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        if (t) {
          r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, r);
      }
      return n;
    }
    function w(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        if (t % 2) {
          E(Object(n), true).forEach(function (t) {
            N(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          E(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function T(e) {
      return function (e) {
        if (Array.isArray(e)) {
          return b(e);
        }
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) {
          return Array.from(e);
        }
      }(e) || function (e, t) {
        if (e) {
          if ("string" == typeof e) {
            return b(e, t);
          }
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if ("Object" === n && e.constructor) {
            n = e.constructor.name;
          }
          return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : undefined;
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function b(e, t) {
      if (null == t || t > e.length) {
        t = e.length;
      }
      var n = 0;
      for (var r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }
      return r;
    }
    function A(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    }
    function N(e, t, n) {
      if (t in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    const S = function () {
      function n(r, E) {
        var b = this;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, n);
        N(this, "state", {
          cursorAnimation: null,
          lastFrameTime: null,
          pauseUntil: null,
          eventQueue: [],
          eventLoop: null,
          eventLoopPaused: false,
          reverseCalledEvents: [],
          calledEvents: [],
          visibleNodes: [],
          initialOptions: null,
          elements: {
            container: null,
            wrapper: document.createElement("span"),
            cursor: document.createElement("span")
          }
        });
        N(this, "options", {
          strings: null,
          cursor: "|",
          delay: "natural",
          pauseFor: 1500,
          deleteSpeed: "natural",
          loop: false,
          autoStart: false,
          devMode: false,
          skipAddStyles: false,
          wrapperClassName: "Typewriter__wrapper",
          cursorClassName: "Typewriter__cursor",
          stringSplitter: null,
          onCreateTextNode: null,
          onRemoveNode: null
        });
        N(this, "setupWrapperElement", function () {
          if (b.state.elements.container) {
            b.state.elements.wrapper.className = b.options.wrapperClassName;
            b.state.elements.cursor.className = b.options.cursorClassName;
            b.state.elements.cursor.innerHTML = b.options.cursor;
            b.state.elements.container.innerHTML = "";
            b.state.elements.container.appendChild(b.state.elements.wrapper);
            b.state.elements.container.appendChild(b.state.elements.cursor);
          }
        });
        N(this, "start", function () {
          b.state.eventLoopPaused = false;
          b.runEventLoop();
          return b;
        });
        N(this, "pause", function () {
          b.state.eventLoopPaused = true;
          return b;
        });
        N(this, "stop", function () {
          if (b.state.eventLoop) {
            0;
            e.cancel(b.state.eventLoop);
            b.state.eventLoop = null;
          }
          return b;
        });
        N(this, "pauseFor", function (e) {
          b.addEventToQueue("PAUSE_FOR", {
            ms: e
          });
          return b;
        });
        N(this, "typeOutAllStrings", function () {
          return "string" == typeof b.options.strings ? (b.typeString(b.options.strings).pauseFor(b.options.pauseFor), b) : (b.options.strings.forEach(function (e) {
            b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed);
          }), b);
        });
        N(this, "typeString", function (e) {
          var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
          if (new RegExp(/<[a-z][\s\S]*>/i).test(e)) {
            return b.typeOutHTMLString(e, t);
          }
          if (e) {
            var n = b.options || {};
            var r = n.stringSplitter;
            var a = "function" == typeof r ? r(e) : e.split("");
            b.typeCharacters(a, t);
          }
          return b;
        });
        N(this, "pasteString", function (e) {
          var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
          return new RegExp(/<[a-z][\s\S]*>/i).test(e) ? b.typeOutHTMLString(e, t, true) : (e && b.addEventToQueue("PASTE_STRING", {
            character: e,
            node: t
          }), b);
        });
        N(this, "typeOutHTMLString", function (e) {
          var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
          var n = arguments.length > 2 ? arguments[2] : undefined;
          var r = a(e);
          if (r.length > 0) {
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              var i = s.innerHTML;
              if (s && 3 !== s.nodeType) {
                s.innerHTML = "";
                b.addEventToQueue("ADD_HTML_TAG_ELEMENT", {
                  node: s,
                  parentNode: t
                });
                if (n) {
                  b.pasteString(i, s);
                } else {
                  b.typeString(i, s);
                }
              } else if (s.textContent) {
                if (n) {
                  b.pasteString(s.textContent, t);
                } else {
                  b.typeString(s.textContent, t);
                }
              }
            }
          }
          return b;
        });
        N(this, "deleteAll", function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "natural";
          b.addEventToQueue("REMOVE_ALL", {
            speed: e
          });
          return b;
        });
        N(this, "changeDeleteSpeed", function (e) {
          if (!e) {
            throw new Error("Must provide new delete speed");
          }
          b.addEventToQueue("CHANGE_DELETE_SPEED", {
            speed: e
          });
          return b;
        });
        N(this, "changeDelay", function (e) {
          if (!e) {
            throw new Error("Must provide new delay");
          }
          b.addEventToQueue("CHANGE_DELAY", {
            delay: e
          });
          return b;
        });
        N(this, "changeCursor", function (e) {
          if (!e) {
            throw new Error("Must provide new cursor");
          }
          b.addEventToQueue("CHANGE_CURSOR", {
            cursor: e
          });
          return b;
        });
        N(this, "deleteChars", function (e) {
          if (!e) {
            throw new Error("Must provide amount of characters to delete");
          }
          for (var t = 0; t < e; t++) {
            b.addEventToQueue("REMOVE_CHARACTER");
          }
          return b;
        });
        N(this, "callFunction", function (e, t) {
          if (!e || "function" != typeof e) {
            throw new Error("Callbak must be a function");
          }
          b.addEventToQueue("CALL_FUNCTION", {
            cb: e,
            thisArg: t
          });
          return b;
        });
        N(this, "typeCharacters", function (e) {
          var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
          if (!e || !Array.isArray(e)) {
            throw new Error("Characters must be an array");
          }
          e.forEach(function (e) {
            b.addEventToQueue("TYPE_CHARACTER", {
              character: e,
              node: t
            });
          });
          return b;
        });
        N(this, "removeCharacters", function (e) {
          if (!e || !Array.isArray(e)) {
            throw new Error("Characters must be an array");
          }
          e.forEach(function () {
            b.addEventToQueue("REMOVE_CHARACTER");
          });
          return b;
        });
        N(this, "addEventToQueue", function (e, t) {
          var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          return b.addEventToStateProperty(e, t, n, "eventQueue");
        });
        N(this, "addReverseCalledEvent", function (e, t) {
          var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          var r = b.options.loop;
          return r ? b.addEventToStateProperty(e, t, n, "reverseCalledEvents") : b;
        });
        N(this, "addEventToStateProperty", function (e, t) {
          var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
          var r = arguments.length > 3 ? arguments[3] : undefined;
          var o = {
            eventName: e,
            eventArgs: t || {}
          };
          b.state[r] = n ? [o].concat(T(b.state[r])) : [].concat(T(b.state[r]), [o]);
          return b;
        });
        N(this, "runEventLoop", function () {
          if (!b.state.lastFrameTime) {
            b.state.lastFrameTime = Date.now();
          }
          var e = Date.now();
          var n = e - b.state.lastFrameTime;
          if (!b.state.eventQueue.length) {
            if (!b.options.loop) {
              return;
            }
            b.state.eventQueue = T(b.state.calledEvents);
            b.state.calledEvents = [];
            b.options = w({}, b.state.initialOptions);
          }
          b.state.eventLoop = t()(b.runEventLoop);
          if (!b.state.eventLoopPaused) {
            if (b.state.pauseUntil) {
              if (e < b.state.pauseUntil) {
                return;
              }
              b.state.pauseUntil = null;
            }
            var r;
            var o = T(b.state.eventQueue);
            var a = o.shift();
            if (!(n <= (r = a.eventName === "REMOVE_LAST_VISIBLE_NODE" || a.eventName === "REMOVE_CHARACTER" ? "natural" === b.options.deleteSpeed ? Math.floor(Math.random() * 41) + 40 : b.options.deleteSpeed : "natural" === b.options.delay ? Math.floor(Math.random() * 41) + 120 : b.options.delay))) {
              var E = a.eventName;
              var A = a.eventArgs;
              b.logInDevMode({
                currentEvent: a,
                state: b.state,
                delay: r
              });
              switch (E) {
                case "PASTE_STRING":
                case "TYPE_CHARACTER":
                  var N = A.character;
                  var S = A.node;
                  var C = document.createTextNode(N);
                  var _ = C;
                  if (b.options.onCreateTextNode && "function" == typeof b.options.onCreateTextNode) {
                    _ = b.options.onCreateTextNode(N, C);
                  }
                  if (_) {
                    if (S) {
                      S.appendChild(_);
                    } else {
                      b.state.elements.wrapper.appendChild(_);
                    }
                  }
                  b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [{
                    type: "TEXT_NODE",
                    character: N,
                    node: _
                  }]);
                  break;
                case "REMOVE_CHARACTER":
                  o.unshift({
                    eventName: "REMOVE_LAST_VISIBLE_NODE",
                    eventArgs: {
                      removingCharacterNode: true
                    }
                  });
                  break;
                case "PAUSE_FOR":
                  var O = a.eventArgs.ms;
                  b.state.pauseUntil = Date.now() + parseInt(O);
                  break;
                case "CALL_FUNCTION":
                  var L = a.eventArgs;
                  var D = L.cb;
                  var M = L.thisArg;
                  D.call(M, {
                    elements: b.state.elements
                  });
                  break;
                case "ADD_HTML_TAG_ELEMENT":
                  var x = a.eventArgs;
                  var P = x.node;
                  var j = x.parentNode;
                  if (j) {
                    j.appendChild(P);
                  } else {
                    b.state.elements.wrapper.appendChild(P);
                  }
                  b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [{
                    type: "HTML_TAG",
                    node: P,
                    parentNode: j || b.state.elements.wrapper
                  }]);
                  break;
                case "REMOVE_ALL":
                  var R = b.state.visibleNodes;
                  var k = A.speed;
                  var Q = [];
                  if (k) {
                    Q.push({
                      eventName: "CHANGE_DELETE_SPEED",
                      eventArgs: {
                        speed: k,
                        temp: true
                      }
                    });
                  }
                  var F = 0;
                  for (var H = R.length; F < H; F++) {
                    Q.push({
                      eventName: "REMOVE_LAST_VISIBLE_NODE",
                      eventArgs: {
                        removingCharacterNode: false
                      }
                    });
                  }
                  if (k) {
                    Q.push({
                      eventName: "CHANGE_DELETE_SPEED",
                      eventArgs: {
                        speed: b.options.deleteSpeed,
                        temp: true
                      }
                    });
                  }
                  o.unshift.apply(o, Q);
                  break;
                case "REMOVE_LAST_VISIBLE_NODE":
                  var I = a.eventArgs.removingCharacterNode;
                  if (b.state.visibleNodes.length) {
                    var U = b.state.visibleNodes.pop();
                    var q = U.type;
                    var G = U.node;
                    var Y = U.character;
                    if (b.options.onRemoveNode && "function" == typeof b.options.onRemoveNode) {
                      b.options.onRemoveNode({
                        node: G,
                        character: Y
                      });
                    }
                    if (G) {
                      G.parentNode.removeChild(G);
                    }
                    if (q === "HTML_TAG" && I) {
                      o.unshift({
                        eventName: "REMOVE_LAST_VISIBLE_NODE",
                        eventArgs: {}
                      });
                    }
                  }
                  break;
                case "CHANGE_DELETE_SPEED":
                  b.options.deleteSpeed = a.eventArgs.speed;
                  break;
                case "CHANGE_DELAY":
                  b.options.delay = a.eventArgs.delay;
                  break;
                case "CHANGE_CURSOR":
                  b.options.cursor = a.eventArgs.cursor;
                  b.state.elements.cursor.innerHTML = a.eventArgs.cursor;
              }
              if (b.options.loop) {
                if (!(a.eventName === "REMOVE_LAST_VISIBLE_NODE" || a.eventArgs && a.eventArgs.temp)) {
                  b.state.calledEvents = [].concat(T(b.state.calledEvents), [a]);
                }
              }
              b.state.eventQueue = o;
              b.state.lastFrameTime = e;
            }
          }
        });
        if (r) {
          if ("string" == typeof r) {
            var A = document.querySelector(r);
            if (!A) {
              throw new Error("Could not find container element");
            }
            this.state.elements.container = A;
          } else {
            this.state.elements.container = r;
          }
        }
        if (E) {
          this.options = w(w({}, this.options), E);
        }
        this.state.initialOptions = w({}, this.options);
        this.init();
      }
      var E;
      if (E = [{
        key: "init",
        value: function () {
          var e;
          var t;
          this.setupWrapperElement();
          this.addEventToQueue("CHANGE_CURSOR", {
            cursor: this.options.cursor
          }, true);
          this.addEventToQueue("REMOVE_ALL", null, true);
          if (!(!window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles)) {
            e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}";
            (t = document.createElement("style")).appendChild(document.createTextNode(e));
            document.head.appendChild(t);
            window.___TYPEWRITER_JS_STYLES_ADDED___ = true;
          }
          if (true === this.options.autoStart && this.options.strings) {
            this.typeOutAllStrings().start();
          }
        }
      }, {
        key: "logInDevMode",
        value: function (e) {
          if (this.options.devMode) {
            console.log(e);
          }
        }
      }]) {
        A(n.prototype, E);
      }
      Object.defineProperty(n, "prototype", {
        writable: false
      });
      return n;
    }();
  })();
  return r.default;
})());