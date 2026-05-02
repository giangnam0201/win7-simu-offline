(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["applovin"], {
        "0ca4": function(e, t, n) {
            "use strict";

            function r(e) {
                setTimeout((function() {
                    throw e
                }), 0)
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        1453: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var r = n("e07a"),
                o = n("d817"),
                i = n("e9a8"),
                s = n("8ac6");

            function a(e) {
                return null !== e && "object" === typeof e
            }
            var u = function() {
                    function e(e) {
                        return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
                            return t + 1 + ") " + e.toString()
                        })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
                    }
                    return e.prototype = Object.create(Error.prototype), e
                }(),
                c = u,
                d = function() {
                    function e(e) {
                        this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
                    }
                    return e.prototype.unsubscribe = function() {
                        var t;
                        if (!this.closed) {
                            var n = this,
                                r = n._parentOrParents,
                                i = n._ctorUnsubscribe,
                                u = n._unsubscribe,
                                d = n._subscriptions;
                            if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof e) r.remove(this);
                            else if (null !== r)
                                for (var f = 0; f < r.length; ++f) {
                                    var p = r[f];
                                    p.remove(this)
                                }
                            if (Object(o["a"])(u)) {
                                i && (this._unsubscribe = void 0);
                                try {
                                    u.call(this)
                                } catch (y) {
                                    t = y instanceof c ? l(y.errors) : [y]
                                }
                            }
                            if (Object(s["a"])(d)) {
                                f = -1;
                                var h = d.length;
                                while (++f < h) {
                                    var b = d[f];
                                    if (a(b)) try {
                                        b.unsubscribe()
                                    } catch (y) {
                                        t = t || [], y instanceof c ? t = t.concat(l(y.errors)) : t.push(y)
                                    }
                                }
                            }
                            if (t) throw new c(t)
                        }
                    }, e.prototype.add = function(t) {
                        var n = t;
                        if (!t) return e.EMPTY;
                        switch (typeof t) {
                            case "function":
                                n = new e(t);
                            case "object":
                                if (n === this || n.closed || "function" !== typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if (!(n instanceof e)) {
                                    var r = n;
                                    n = new e, n._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + t + " added to Subscription.")
                        }
                        var o = n._parentOrParents;
                        if (null === o) n._parentOrParents = this;
                        else if (o instanceof e) {
                            if (o === this) return n;
                            n._parentOrParents = [o, this]
                        } else {
                            if (-1 !== o.indexOf(this)) return n;
                            o.push(this)
                        }
                        var i = this._subscriptions;
                        return null === i ? this._subscriptions = [n] : i.push(n), n
                    }, e.prototype.remove = function(e) {
                        var t = this._subscriptions;
                        if (t) {
                            var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                        }
                    }, e.EMPTY = function(e) {
                        return e.closed = !0, e
                    }(new e), e
                }();

            function l(e) {
                return e.reduce((function(e, t) {
                    return e.concat(t instanceof c ? t.errors : t)
                }), [])
            }
            var f = n("2ff5"),
                p = n("88bc"),
                h = n("0ca4"),
                b = function(e) {
                    function t(n, r, o) {
                        var s = e.call(this) || this;
                        switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
                            case 0:
                                s.destination = i["a"];
                                break;
                            case 1:
                                if (!n) {
                                    s.destination = i["a"];
                                    break
                                }
                                if ("object" === typeof n) {
                                    n instanceof t ? (s.syncErrorThrowable = n.syncErrorThrowable, s.destination = n, n.add(s)) : (s.syncErrorThrowable = !0, s.destination = new y(s, n));
                                    break
                                }
                            default:
                                s.syncErrorThrowable = !0, s.destination = new y(s, n, r, o);
                                break
                        }
                        return s
                    }
                    return r["a"](t, e), t.prototype[f["a"]] = function() {
                        return this
                    }, t.create = function(e, n, r) {
                        var o = new t(e, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, t.prototype.next = function(e) {
                        this.isStopped || this._next(e)
                    }, t.prototype.error = function(e) {
                        this.isStopped || (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
                    }, t.prototype._next = function(e) {
                        this.destination.next(e)
                    }, t.prototype._error = function(e) {
                        this.destination.error(e), this.unsubscribe()
                    }, t.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, t.prototype._unsubscribeAndRecycle = function() {
                        var e = this._parentOrParents;
                        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
                    }, t
                }(d),
                y = function(e) {
                    function t(t, n, r, s) {
                        var a, u = e.call(this) || this;
                        u._parentSubscriber = t;
                        var c = u;
                        return Object(o["a"])(n) ? a = n : n && (a = n.next, r = n.error, s = n.complete, n !== i["a"] && (c = Object.create(n), Object(o["a"])(c.unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(u))), u._context = c, u._next = a, u._error = r, u._complete = s, u
                    }
                    return r["a"](t, e), t.prototype.next = function(e) {
                        if (!this.isStopped && this._next) {
                            var t = this._parentSubscriber;
                            p["a"].useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                        }
                    }, t.prototype.error = function(e) {
                        if (!this.isStopped) {
                            var t = this._parentSubscriber,
                                n = p["a"].useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                            else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : Object(h["a"])(e), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw e;
                                Object(h["a"])(e)
                            }
                        }
                    }, t.prototype.complete = function() {
                        var e = this;
                        if (!this.isStopped) {
                            var t = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return e._complete.call(e._context)
                                };
                                p["a"].useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, t.prototype.__tryOrUnsub = function(e, t) {
                        try {
                            e.call(this._context, t)
                        } catch (n) {
                            if (this.unsubscribe(), p["a"].useDeprecatedSynchronousErrorHandling) throw n;
                            Object(h["a"])(n)
                        }
                    }, t.prototype.__tryOrSetError = function(e, t, n) {
                        if (!p["a"].useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            t.call(this._context, n)
                        } catch (r) {
                            return p["a"].useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = r, e.syncErrorThrown = !0, !0) : (Object(h["a"])(r), !0)
                        }
                        return !1
                    }, t.prototype._unsubscribe = function() {
                        var e = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, e.unsubscribe()
                    }, t
                }(b)
        },
        2800: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return f
                })), n.d(t, "b", (function() {
                    return v
                })), n.d(t, "c", (function() {
                    return _
                })), n.d(t, "d", (function() {
                    return A
                }));
                var r = n("e9b9"),
                    o = n("6e77"),
                    i = {
                        error: "cordova_not_available"
                    },
                    s = {
                        error: "plugin_not_installed"
                    };

                function a(e) {
                    var t = function() {
                        if (Promise) return new Promise((function(t, n) {
                            e(t, n)
                        }));
                        console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")
                    };
                    if ("undefined" !== typeof window && window.angular) {
                        var n = window.document,
                            r = window.angular.element(n.querySelector("[ng-app]") || n.body).injector();
                        if (r) {
                            var o = r.get("$q");
                            return o((function(t, n) {
                                e(t, n)
                            }))
                        }
                        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")
                    }
                    return t()
                }

                function u(e, t, n, r) {
                    var o, i;
                    void 0 === r && (r = {});
                    var s = a((function(s, a) {
                        o = r.destruct ? b(e, t, n, r, (function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return s(e)
                        }), (function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return a(e)
                        })) : b(e, t, n, r, s, a), i = a
                    }));
                    return o && o.error && (s.catch((function() {})), "function" === typeof i && i(o.error)), s
                }

                function c(e, t, n, r) {
                    return void 0 === r && (r = {}), a((function(o, i) {
                        var s = b(e, t, n, r);
                        s ? s.error ? i(s.error) : s.then && s.then(o).catch(i) : i({
                            error: "unexpected_error"
                        })
                    }))
                }

                function d(e, t, n, o) {
                    return void 0 === o && (o = {}), new r["a"]((function(r) {
                        var i;
                        return i = o.destruct ? b(e, t, n, o, (function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return r.next(e)
                            }), (function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return r.error(e)
                            })) : b(e, t, n, o, r.next.bind(r), r.error.bind(r)), i && i.error && (r.error(i.error), r.complete()),
                            function() {
                                try {
                                    if (o.clearFunction) return o.clearWithArgs ? b(e, o.clearFunction, n, o, r.next.bind(r), r.error.bind(r)) : b(e, o.clearFunction, [])
                                } catch (i) {
                                    console.warn("Unable to clear the previous observable watch for", e.constructor.getPluginName(), t), console.warn(i)
                                }
                            }
                    }))
                }

                function l(e, t) {
                    return t = "undefined" !== typeof window && t ? w(window, t) : t || ("undefined" !== typeof window ? window : {}), Object(o["a"])(t, e)
                }

                function f(e, t, n) {
                    var r, o;
                    "string" === typeof e ? r = e : (r = e.constructor.getPluginRef(), n = e.constructor.getPluginName(), o = e.constructor.getPluginInstallName());
                    var a = v(r);
                    return !(!a || t && "undefined" === typeof a[t]) || ("undefined" !== typeof window && window.cordova ? (E(n, o, t), s) : (g(n, t), i))
                }

                function p(e, t) {
                    return e._objectInstance && (!t || "undefined" !== typeof e._objectInstance[t])
                }

                function h(e, t, n, r) {
                    if (void 0 === t && (t = {}), t.sync) return e;
                    if ("reverse" === t.callbackOrder) e.unshift(r), e.unshift(n);
                    else if ("node" === t.callbackStyle) e.push((function(e, t) {
                        e ? r(e) : n(t)
                    }));
                    else if ("object" === t.callbackStyle && t.successName && t.errorName) {
                        var o = {};
                        o[t.successName] = n, o[t.errorName] = r, e.push(o)
                    } else if ("undefined" !== typeof t.successIndex || "undefined" !== typeof t.errorIndex) {
                        var i = function() {
                                t.successIndex > e.length ? e[t.successIndex] = n : e.splice(t.successIndex, 0, n)
                            },
                            s = function() {
                                t.errorIndex > e.length ? e[t.errorIndex] = r : e.splice(t.errorIndex, 0, r)
                            };
                        t.successIndex > t.errorIndex ? (s(), i()) : (i(), s())
                    } else e.push(n), e.push(r);
                    return e
                }

                function b(e, t, n, r, o, i) {
                    void 0 === r && (r = {}), n = h(n, r, o, i);
                    var s = f(e, t);
                    if (!0 === s) {
                        var a = v(e.constructor.getPluginRef());
                        return a[t].apply(a, n)
                    }
                    return s
                }

                function y(e, t, n, r, o, i) {
                    if (void 0 === r && (r = {}), n = h(n, r, o, i), p(e, t)) return e._objectInstance[t].apply(e._objectInstance, n)
                }

                function v(e) {
                    return "undefined" !== typeof window ? w(window, e) : null
                }

                function w(e, t) {
                    for (var n = t.split("."), r = e, o = 0; o < n.length; o++) {
                        if (!r) return null;
                        r = r[n[o]]
                    }
                    return r
                }

                function E(e, t, n) {
                    n ? console.warn("Native: tried calling " + e + "." + n + ", but the " + e + " plugin is not installed.") : console.warn("Native: tried accessing the " + e + " plugin but it's not installed."), t && console.warn("Install the " + e + " plugin: 'ionic cordova plugin add " + t + "'")
                }

                function g(t, n) {
                    "undefined" === typeof e && (n ? console.warn("Native: tried calling " + t + "." + n + ", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator") : console.warn("Native: tried accessing the " + t + " plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"))
                }
                var _ = function(e, t, n) {
                    return void 0 === n && (n = {}),
                        function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            return n.sync ? b(e, t, r, n) : n.observable ? d(e, t, r, n) : n.eventObservable && n.event ? l(n.event, n.element) : n.otherPromise ? c(e, t, r, n) : u(e, t, r, n)
                        }
                };

                function A(e, t, n) {
                    return void 0 === n && (n = {}),
                        function() {
                            for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                            if (n.sync) return y(e, t, o, n);
                            if (n.observable) return new r["a"]((function(r) {
                                var i;
                                return i = n.destruct ? y(e, t, o, n, (function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        return r.next(e)
                                    }), (function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        return r.error(e)
                                    })) : y(e, t, o, n, r.next.bind(r), r.error.bind(r)), i && i.error && r.error(i.error),
                                    function() {
                                        try {
                                            return n.clearWithArgs ? y(e, n.clearFunction, o, n, r.next.bind(r), r.error.bind(r)) : y(e, n.clearFunction, [])
                                        } catch (i) {
                                            console.warn("Unable to clear the previous observable watch for", e.constructor.getPluginName(), t), console.warn(i)
                                        }
                                    }
                            }));
                            if (n.otherPromise) return a((function(r, i) {
                                var s;
                                s = n.destruct ? y(e, t, o, n, (function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return r(e)
                                }), (function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return i(e)
                                })) : y(e, t, o, n, r, i), s && s.then ? s.then(r, i) : i()
                            }));
                            var s, u, c = a((function(r, i) {
                                s = n.destruct ? y(e, t, o, n, (function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return r(e)
                                }), (function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    return i(e)
                                })) : y(e, t, o, n, r, i), u = i
                            }));
                            return s && s.error && (c.catch((function() {})), "function" === typeof u && u(s.error)), c
                        }
                }
            }).call(this, n("4362"))
        },
        "2ff5": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                return "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
            }()
        },
        6163: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e["NOT_REQUIRED"] = "NOT_REQUIRED", e["OBTAINED"] = "OBTAINED", e["REQUIRED"] = "REQUIRED", e["UNKNOWN"] = "UNKNOWN"
                }(r || (r = {}))
        },
        "6e77": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("e9b9"),
                o = n("8ac6"),
                i = n("d817"),
                s = n("e07a"),
                a = n("1453");

            function u(e, t) {
                return function(n) {
                    if ("function" !== typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new c(e, t))
                }
            }
            var c = function() {
                    function e(e, t) {
                        this.project = e, this.thisArg = t
                    }
                    return e.prototype.call = function(e, t) {
                        return t.subscribe(new d(e, this.project, this.thisArg))
                    }, e
                }(),
                d = function(e) {
                    function t(t, n, r) {
                        var o = e.call(this, t) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return s["a"](t, e), t.prototype._next = function(e) {
                        var t;
                        try {
                            t = this.project.call(this.thisArg, e, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(t)
                    }, t
                }(a["a"]);

            function l(e, t, n, s) {
                return Object(i["a"])(n) && (s = n, n = void 0), s ? l(e, t, n).pipe(u((function(e) {
                    return Object(o["a"])(e) ? s.apply(void 0, e) : s(e)
                }))) : new r["a"]((function(r) {
                    function o(e) {
                        arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(e)
                    }
                    f(e, t, o, r, n)
                }))
            }

            function f(e, t, n, r, o) {
                var i;
                if (b(e)) {
                    var s = e;
                    e.addEventListener(t, n, o), i = function() {
                        return s.removeEventListener(t, n, o)
                    }
                } else if (h(e)) {
                    var a = e;
                    e.on(t, n), i = function() {
                        return a.off(t, n)
                    }
                } else if (p(e)) {
                    var u = e;
                    e.addListener(t, n), i = function() {
                        return u.removeListener(t, n)
                    }
                } else {
                    if (!e || !e.length) throw new TypeError("Invalid event target");
                    for (var c = 0, d = e.length; c < d; c++) f(e[c], t, n, r, o)
                }
                r.add(i)
            }

            function p(e) {
                return e && "function" === typeof e.addListener && "function" === typeof e.removeListener
            }

            function h(e) {
                return e && "function" === typeof e.on && "function" === typeof e.off
            }

            function b(e) {
                return e && "function" === typeof e.addEventListener && "function" === typeof e.removeEventListener
            }
        },
        "88bc": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = !1,
                o = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(e) {
                        if (e) {
                            var t = new Error;
                            t.stack
                        }
                        r = e
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return r
                    }
                }
        },
        "8ac6": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                return Array.isArray || function(e) {
                    return e && "number" === typeof e.length
                }
            }()
        },
        a836: function(e, t, n) {
            "use strict";
            (function(e) {
                function r() {
                    if ("undefined" === typeof e) {
                        var t = "undefined" !== typeof window ? window : {},
                            n = 5e3,
                            r = Date.now(),
                            o = !1;
                        t.document.addEventListener("deviceready", (function() {
                            console.log("Ionic Native: deviceready event fired after " + (Date.now() - r) + " ms"), o = !0
                        })), setTimeout((function() {
                            !o && t.cordova && console.warn("Ionic Native: deviceready did not fire within " + n + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")
                        }), n)
                    }
                }
                n.d(t, "a", (function() {
                    return r
                }))
            }).call(this, n("4362"))
        },
        d817: function(e, t, n) {
            "use strict";

            function r(e) {
                return "function" === typeof e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        e07a: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
        },
        e9a8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("88bc"),
                o = n("0ca4"),
                i = {
                    closed: !0,
                    next: function(e) {},
                    error: function(e) {
                        if (r["a"].useDeprecatedSynchronousErrorHandling) throw e;
                        Object(o["a"])(e)
                    },
                    complete: function() {}
                }
        },
        e9b9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var r = n("1453");

            function o(e) {
                while (e) {
                    var t = e,
                        n = t.closed,
                        o = t.destination,
                        i = t.isStopped;
                    if (n || i) return !1;
                    e = o && o instanceof r["a"] ? o : null
                }
                return !0
            }
            var i = n("2ff5"),
                s = n("e9a8");

            function a(e, t, n) {
                if (e) {
                    if (e instanceof r["a"]) return e;
                    if (e[i["a"]]) return e[i["a"]]()
                }
                return e || t || n ? new r["a"](e, t, n) : new r["a"](s["a"])
            }
            var u = function() {
                return "function" === typeof Symbol && Symbol.observable || "@@observable"
            }();

            function c(e) {
                return e
            }

            function d(e) {
                return 0 === e.length ? c : 1 === e.length ? e[0] : function(t) {
                    return e.reduce((function(e, t) {
                        return t(e)
                    }), t)
                }
            }
            var l = n("88bc"),
                f = function() {
                    function e(e) {
                        this._isScalar = !1, e && (this._subscribe = e)
                    }
                    return e.prototype.lift = function(t) {
                        var n = new e;
                        return n.source = this, n.operator = t, n
                    }, e.prototype.subscribe = function(e, t, n) {
                        var r = this.operator,
                            o = a(e, t, n);
                        if (r ? o.add(r.call(o, this.source)) : o.add(this.source || l["a"].useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), l["a"].useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                        return o
                    }, e.prototype._trySubscribe = function(e) {
                        try {
                            return this._subscribe(e)
                        } catch (t) {
                            l["a"].useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), o(e) ? e.error(t) : console.warn(t)
                        }
                    }, e.prototype.forEach = function(e, t) {
                        var n = this;
                        return t = p(t), new t((function(t, r) {
                            var o;
                            o = n.subscribe((function(t) {
                                try {
                                    e(t)
                                } catch (n) {
                                    r(n), o && o.unsubscribe()
                                }
                            }), r, t)
                        }))
                    }, e.prototype._subscribe = function(e) {
                        var t = this.source;
                        return t && t.subscribe(e)
                    }, e.prototype[u] = function() {
                        return this
                    }, e.prototype.pipe = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return 0 === e.length ? this : d(e)(this)
                    }, e.prototype.toPromise = function(e) {
                        var t = this;
                        return e = p(e), new e((function(e, n) {
                            var r;
                            t.subscribe((function(e) {
                                return r = e
                            }), (function(e) {
                                return n(e)
                            }), (function() {
                                return e(r)
                            }))
                        }))
                    }, e.create = function(t) {
                        return new e(t)
                    }, e
                }();

            function p(e) {
                if (e || (e = l["a"].Promise || Promise), !e) throw new Error("no Promise impl found");
                return e
            }
        },
        f42e: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, o, i, s, a, u, c, d = n("1547");
            (function(e) {
                e["General"] = "General", e["ParentalGuidance"] = "ParentalGuidance", e["Teen"] = "Teen", e["MatureAudience"] = "MatureAudience"
            })(r || (r = {})),
            function(e) {
                e["SizeChanged"] = "bannerAdSizeChanged", e["Loaded"] = "bannerAdLoaded", e["FailedToLoad"] = "bannerAdFailedToLoad", e["Opened"] = "bannerAdOpened", e["Closed"] = "bannerAdClosed", e["AdImpression"] = "bannerAdImpression"
            }(o || (o = {})),
            function(e) {
                e["TOP_CENTER"] = "TOP_CENTER", e["CENTER"] = "CENTER", e["BOTTOM_CENTER"] = "BOTTOM_CENTER"
            }(i || (i = {})),
            function(e) {
                e["BANNER"] = "BANNER", e["FULL_BANNER"] = "FULL_BANNER", e["LARGE_BANNER"] = "LARGE_BANNER", e["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE", e["LEADERBOARD"] = "LEADERBOARD", e["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER", e["SMART_BANNER"] = "SMART_BANNER"
            }(s || (s = {})),
            function(e) {
                e["Loaded"] = "interstitialAdLoaded", e["FailedToLoad"] = "interstitialAdFailedToLoad", e["Showed"] = "interstitialAdShowed", e["FailedToShow"] = "interstitialAdFailedToShow", e["Dismissed"] = "interstitialAdDismissed"
            }(a || (a = {})),
            function(e) {
                e["Loaded"] = "onRewardedInterstitialAdLoaded", e["FailedToLoad"] = "onRewardedInterstitialAdFailedToLoad", e["Showed"] = "onRewardedInterstitialAdShowed", e["FailedToShow"] = "onRewardedInterstitialAdFailedToShow", e["Dismissed"] = "onRewardedInterstitialAdDismissed", e["Rewarded"] = "onRewardedInterstitialAdReward"
            }(u || (u = {})),
            function(e) {
                e["Loaded"] = "onRewardedVideoAdLoaded", e["FailedToLoad"] = "onRewardedVideoAdFailedToLoad", e["Showed"] = "onRewardedVideoAdShowed", e["FailedToShow"] = "onRewardedVideoAdFailedToShow", e["Dismissed"] = "onRewardedVideoAdDismissed", e["Rewarded"] = "onRewardedVideoAdReward"
            }(c || (c = {}));
            var l, f = n("6163");
            (function(e) {
                e[e["DISABLED"] = 0] = "DISABLED", e[e["EEA"] = 1] = "EEA", e[e["NOT_EEA"] = 2] = "NOT_EEA", e[e["US"] = 3] = "US", e[e["OTHER"] = 4] = "OTHER"
            })(l || (l = {}));
            const p = Object(d["d"])("AdMob", {
                web: () => n.e("chunk-2d0b1fab").then(n.bind(null, "21c9")).then(e => new e.AdMobWeb)
            });
            var h = n("f708"),
                b = n("5b81"),
                y = n("a836"),
                v = n("2800");

            function w(e, t) {
                for (var n = t.split("."), r = e, o = 0; o < n.length; o++) {
                    if (!r) return null;
                    r = r[n[o]]
                }
                return r
            }
            var E = function() {
                function e() {}
                return e.installed = function() {
                    var e = !0 === Object(v["a"])(this.pluginRef);
                    return e
                }, e.getPlugin = function() {
                    return "undefined" !== typeof window ? w(window, this.pluginRef) : null
                }, e.getPluginName = function() {
                    var e = this.pluginName;
                    return e
                }, e.getPluginRef = function() {
                    var e = this.pluginRef;
                    return e
                }, e.getPluginInstallName = function() {
                    var e = this.plugin;
                    return e
                }, e.getSupportedPlatforms = function() {
                    var e = this.platforms;
                    return e
                }, e.pluginName = "", e.pluginRef = "", e.plugin = "", e.repo = "", e.platforms = [], e.install = "", e
            }();

            function g(e, t, n, r) {
                return Object(v["c"])(e, t, n).apply(this, r)
            }
            n("e9b9");
            Object(y["a"])();
            var _, A, R = function() {
                var e = function(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function(t, n) {
                    if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            (function(e) {
                e["TOP_CENTER"] = "top_center", e["TOP_RIGHT"] = "top_right", e["CENTERED"] = "centered", e["CENTER_LEFT"] = "center_left", e["CENTER_RIGHT"] = "center_right", e["BOTTOM_LEFT"] = "bottom_left", e["BOTTOM_CENTER"] = "bottom_center", e["BOTTOM_RIGHT"] = "bottom_right"
            })(_ || (_ = {})),
            function(e) {
                e[e["UNKNOWN"] = 0] = "UNKNOWN", e[e["APPLIES"] = 1] = "APPLIES", e[e["DOES_NOT_APPLY"] = 2] = "DOES_NOT_APPLY"
            }(A || (A = {}));
            var T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return R(t, e), t.prototype.initialize = function(e) {
                        return g(this, "initialize", {}, arguments)
                    }, t.prototype.showMediationDebugger = function() {
                        return g(this, "showMediationDebugger", {}, arguments)
                    }, t.prototype.getConsentDialogState = function() {
                        return g(this, "getConsentDialogState", {}, arguments)
                    }, t.prototype.setHasUserConsent = function(e) {
                        return g(this, "setHasUserConsent", {}, arguments)
                    }, t.prototype.hasUserConsent = function() {
                        return g(this, "hasUserConsent", {}, arguments)
                    }, t.prototype.setIsAgeRestrictedUser = function(e) {
                        return g(this, "setIsAgeRestrictedUser", {}, arguments)
                    }, t.prototype.isAgeRestrictedUser = function() {
                        return g(this, "isAgeRestrictedUser", {}, arguments)
                    }, t.prototype.setDoNotSell = function(e) {
                        return g(this, "setDoNotSell", {}, arguments)
                    }, t.prototype.isDoNotSell = function() {
                        return g(this, "isDoNotSell", {}, arguments)
                    }, t.prototype.isTablet = function() {
                        return g(this, "isTablet", {}, arguments)
                    }, t.prototype.setUserId = function(e) {
                        return g(this, "setUserId", {}, arguments)
                    }, t.prototype.setMuted = function() {
                        return g(this, "setMuted", {}, arguments)
                    }, t.prototype.setVerboseLogging = function(e) {
                        return g(this, "setVerboseLogging", {}, arguments)
                    }, t.prototype.setTestDeviceAdvertisingIds = function(e) {
                        return g(this, "setTestDeviceAdvertisingIds", {}, arguments)
                    }, t.prototype.trackEvent = function(e, t) {
                        return g(this, "trackEvent", {}, arguments)
                    }, t.prototype.createBanner = function(e, t) {
                        return g(this, "createBanner", {}, arguments)
                    }, t.prototype.setBannerBackgroundColor = function(e, t) {
                        return g(this, "setBannerBackgroundColor", {}, arguments)
                    }, t.prototype.setBannerPlacement = function(e, t) {
                        return g(this, "setBannerPlacement", {}, arguments)
                    }, t.prototype.setBannerExtraParameter = function(e, t, n) {
                        return g(this, "setBannerExtraParameter", {}, arguments)
                    }, t.prototype.showBanner = function(e) {
                        return g(this, "showBanner", {}, arguments)
                    }, t.prototype.hideBanner = function(e) {
                        return g(this, "hideBanner", {}, arguments)
                    }, t.prototype.destroyBanner = function(e) {
                        return g(this, "destroyBanner", {}, arguments)
                    }, t.prototype.createMRec = function(e, t) {
                        return g(this, "createMRec", {}, arguments)
                    }, t.prototype.setMRecBackgroundColor = function(e, t) {
                        return g(this, "setMRecBackgroundColor", {}, arguments)
                    }, t.prototype.setMRecPlacement = function(e, t) {
                        return g(this, "setMRecPlacement", {}, arguments)
                    }, t.prototype.setMRecExtraParameter = function(e, t, n) {
                        return g(this, "setMRecExtraParameter", {}, arguments)
                    }, t.prototype.showMRec = function(e) {
                        return g(this, "showMRec", {}, arguments)
                    }, t.prototype.hideMRec = function(e) {
                        return g(this, "hideMRec", {}, arguments)
                    }, t.prototype.destroyMRec = function(e) {
                        return g(this, "destroyMRec", {}, arguments)
                    }, t.prototype.loadInterstitial = function(e) {
                        return g(this, "loadInterstitial", {}, arguments)
                    }, t.prototype.showInterstitial = function(e, t) {
                        return g(this, "showInterstitial", {}, arguments)
                    }, t.prototype.setInterstitialExtraParameter = function(e, t, n) {
                        return g(this, "setInterstitialExtraParameter", {}, arguments)
                    }, t.prototype.onInterstitialLoaded = function() {
                        return g(this, "onInterstitialLoaded", {
                            eventObservable: !0,
                            event: "OnInterstitialLoadedEvent"
                        }, arguments)
                    }, t.prototype.onInterstitialLoadFailed = function() {
                        return g(this, "onInterstitialLoadFailed", {
                            eventObservable: !0,
                            event: "OnInterstitialLoadFailedEvent"
                        }, arguments)
                    }, t.prototype.onInterstitialDisplayed = function() {
                        return g(this, "onInterstitialDisplayed", {
                            eventObservable: !0,
                            event: "OnInterstitialDisplayedEvent"
                        }, arguments)
                    }, t.prototype.onInterstitialHidden = function() {
                        return g(this, "onInterstitialHidden", {
                            eventObservable: !0,
                            event: "OnInterstitialHiddenEvent"
                        }, arguments)
                    }, t.prototype.onInterstitialAdFailedToDisplay = function() {
                        return g(this, "onInterstitialAdFailedToDisplay", {
                            eventObservable: !0,
                            event: "OnInterstitialAdFailedToDisplayEvent"
                        }, arguments)
                    }, t.prototype.loadRewardedAd = function(e) {
                        return g(this, "loadRewardedAd", {}, arguments)
                    }, t.prototype.showRewardedAd = function(e, t) {
                        return g(this, "showRewardedAd", {}, arguments)
                    }, t.prototype.setRewardedAdExtraParameter = function(e, t, n) {
                        return g(this, "setRewardedAdExtraParameter", {}, arguments)
                    }, t.prototype.onRewardedAdLoaded = function() {
                        return g(this, "onRewardedAdLoaded", {
                            eventObservable: !0,
                            event: "OnRewardedAdLoadedEvent"
                        }, arguments)
                    }, t.prototype.onRewardedAdLoadFailed = function() {
                        return g(this, "onRewardedAdLoadFailed", {
                            eventObservable: !0,
                            event: "OnRewardedAdLoadFailedEvent"
                        }, arguments)
                    }, t.prototype.onRewardedAdDisplayed = function() {
                        return g(this, "onRewardedAdDisplayed", {
                            eventObservable: !0,
                            event: "OnRewardedAdDisplayedEvent"
                        }, arguments)
                    }, t.prototype.onRewardedAdHidden = function() {
                        return g(this, "onRewardedAdHidden", {
                            eventObservable: !0,
                            event: "OnRewardedAdHiddenEvent"
                        }, arguments)
                    }, t.prototype.onRewardedAdAdFailedToDisplay = function() {
                        return g(this, "onRewardedAdAdFailedToDisplay", {
                            eventObservable: !0,
                            event: "OnRewardedAdAdFailedToDisplayEvent"
                        }, arguments)
                    }, t.pluginName = "Applovin", t.plugin = "cordova-plugin-applovin-max", t.pluginRef = "applovin", t.repo = "https://github.com/AppLovin/AppLovin-MAX-Cordova", t.platforms = ["Android", "iOS"], t
                }(E),
                m = new T,
                O = n("51e6");
            const I = {
                    loadInterstitial: () => m.loadInterstitial(b["b"].interstitialId),
                    loadRewarded: () => m.loadRewardedAd(b["b"].rewardedId)
                },
                S = e => e === f["a"].OBTAINED || e === f["a"].NOT_REQUIRED,
                N = {
                    _intersTimer: null,
                    _rewardTimer: null,
                    async _requestConsent() {
                        const {
                            status: e,
                            isConsentFormAvailable: t
                        } = await p.requestConsentInfo();
                        let n = S(e);
                        if (t && e === f["a"].REQUIRED) {
                            const {
                                status: e
                            } = await p.showConsentForm();
                            n = S(e)
                        }
                        m.setHasUserConsent(n)
                    },
                    async init() {
                        Object(h["a"])() && (await this._requestConsent(), await m.initialize(b["b"].sdkKey), I.loadInterstitial(), I.loadRewarded(), m.onInterstitialLoaded().subscribe(() => this._intersTimer && clearTimeout(this._intersTimer)), m.onInterstitialHidden().subscribe(() => I.loadInterstitial()), m.onInterstitialAdFailedToDisplay().subscribe(() => I.loadInterstitial()), m.onInterstitialLoadFailed().subscribe(() => {
                            this._intersTimer = setTimeout(I.loadInterstitial, 500)
                        }), m.onRewardedAdLoaded().subscribe(() => this._rewardTimer && clearTimeout(this._rewardTimer)), m.onRewardedAdHidden().subscribe(() => I.loadRewarded()), m.onRewardedAdAdFailedToDisplay().subscribe(() => I.loadRewarded()), m.onRewardedAdLoadFailed().subscribe(() => {
                            this._rewardTimer = setTimeout(I.loadRewarded, 500)
                        }))
                    },
                    showInterstitial() {
                        return Object(h["a"])() ? m.showInterstitial(b["b"].interstitialId) : (Object(h["b"])() && Object(O["showToast"])("[DEV] Showing interstitial ad..."), Promise.resolve())
                    },
                    showRewarded() {
                        return Object(h["a"])() ? m.showRewardedAd(b["b"].rewardedId) : (Object(h["b"])() && Object(O["showToast"])("[DEV] Showing rewarded ad..."), Promise.resolve())
                    }
                };
            t["default"] = N
        }
    }
]);