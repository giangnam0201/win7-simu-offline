(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["database"], {
        5500: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getRef", (function() {
                return r
            })), n.d(t, "get", (function() {
                return o
            })), n.d(t, "create", (function() {
                return a
            })), n.d(t, "update", (function() {
                return l
            })), n.d(t, "remove", (function() {
                return c
            })), n.d(t, "query", (function() {
                return h
            }));
            var i = n("e947"),
                s = n("a8d7");
            async function r(e) {
                return Object(i["g"])(Object(i["b"])(s["a"]), e)
            }
            async function o(e) {
                const t = await r(e);
                return new Promise(e => {
                    Object(i["d"])(t, t => e(t.val()), {
                        onlyOnce: !0
                    })
                })
            }
            async function a(e, t) {
                return Object(i["i"])(await r(e), t)
            }
            async function l(e, t) {
                return Object(i["k"])(await r(e), t)
            }
            async function c(e) {
                return Object(i["h"])(await r(e))
            }
            async function h(e, t, n = null) {
                const s = await r(e),
                    o = n ? Object(i["f"])(s, Object(i["e"])(), Object(i["j"])(n), Object(i["c"])(t + 1)) : Object(i["f"])(s, Object(i["e"])(), Object(i["c"])(t));
                return (await Object(i["a"])(o)).val()
            }
        },
        a8d7: function(e, t, n) {
            "use strict";
            var i = n("d6b6"),
                s = n("4ee3"),
                r = "firebase",
                o = "12.12.1";
            Object(s["g"])(r, o, "app");
            t["a"] = Object(s["f"])(i)
        },
        d6b6: function(e) {
            e.exports = JSON.parse('{"apiKey":"AIzaSyCJZVQSRzzvI3Oa2eUy7Mutjbun9j84-Ng","authDomain":"win7-simu.firebaseapp.com","databaseURL":"https://win7-simu.firebaseio.com","projectId":"win7-simu","storageBucket":"win7-simu.appspot.com","messagingSenderId":"553198306589","appId":"1:553198306589:web:30376b9804b409a43c8df4","measurementId":"G-WZJNTCX4LP"}')
        },
        e947: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return oa
                })), n.d(t, "b", (function() {
                    return Sa
                })), n.d(t, "c", (function() {
                    return fa
                })), n.d(t, "d", (function() {
                    return ha
                })), n.d(t, "e", (function() {
                    return ga
                })), n.d(t, "f", (function() {
                    return ya
                })), n.d(t, "g", (function() {
                    return ta
                })), n.d(t, "h", (function() {
                    return ia
                })), n.d(t, "i", (function() {
                    return sa
                })), n.d(t, "j", (function() {
                    return _a
                })), n.d(t, "k", (function() {
                    return ra
                }));
                var i = n("4ee3"),
                    s = n("4b2d"),
                    r = n("a8e9"),
                    o = n("8428");
                const a = "@firebase/database",
                    l = "1.1.2";
                let c = "";

                function h(e) {
                    c = e
                }
                class u {
                    constructor(e) {
                        this.domStorage_ = e, this.prefix_ = "firebase:"
                    }
                    set(e, t) {
                        null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Object(r["U"])(t))
                    }
                    get(e) {
                        const t = this.domStorage_.getItem(this.prefixedName_(e));
                        return null == t ? null : Object(r["M"])(t)
                    }
                    remove(e) {
                        this.domStorage_.removeItem(this.prefixedName_(e))
                    }
                    prefixedName_(e) {
                        return this.prefix_ + e
                    }
                    toString() {
                        return this.domStorage_.toString()
                    }
                }
                class d {
                    constructor() {
                        this.cache_ = {}, this.isInMemoryStorage = !0
                    }
                    set(e, t) {
                        null == t ? delete this.cache_[e] : this.cache_[e] = t
                    }
                    get(e) {
                        return Object(r["m"])(this.cache_, e) ? this.cache_[e] : null
                    }
                    remove(e) {
                        delete this.cache_[e]
                    }
                }
                const _ = function(e) {
                        try {
                            if ("undefined" !== typeof window && "undefined" !== typeof window[e]) {
                                const t = window[e];
                                return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new u(t)
                            }
                        } catch (t) {}
                        return new d
                    },
                    p = _("localStorage"),
                    f = _("sessionStorage"),
                    m = new o["b"]("@firebase/database"),
                    g = function() {
                        let e = 1;
                        return function() {
                            return e++
                        }
                    }(),
                    y = function(e) {
                        const t = Object(r["T"])(e),
                            n = new r["d"];
                        n.update(t);
                        const i = n.digest();
                        return r["h"].encodeByteArray(i)
                    },
                    v = function(...e) {
                        let t = "";
                        for (let n = 0; n < e.length; n++) {
                            const i = e[n];
                            Array.isArray(i) || i && "object" === typeof i && "number" === typeof i.length ? t += v.apply(null, i) : t += "object" === typeof i ? Object(r["U"])(i) : i, t += " "
                        }
                        return t
                    };
                let C = null,
                    w = !0;
                const b = function(e, t) {
                        Object(r["f"])(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (m.logLevel = o["a"].VERBOSE, C = m.log.bind(m), t && f.set("logging_enabled", !0)) : "function" === typeof e ? C = e : (C = null, f.remove("logging_enabled"))
                    },
                    T = function(...e) {
                        if (!0 === w && (w = !1, null === C && !0 === f.get("logging_enabled") && b(!0)), C) {
                            const t = v.apply(null, e);
                            C(t)
                        }
                    },
                    I = function(e) {
                        return function(...t) {
                            T(e, ...t)
                        }
                    },
                    E = function(...e) {
                        const t = "FIREBASE INTERNAL ERROR: " + v(...e);
                        m.error(t)
                    },
                    k = function(...e) {
                        const t = "FIREBASE FATAL ERROR: " + v(...e);
                        throw m.error(t), new Error(t)
                    },
                    S = function(...e) {
                        const t = "FIREBASE WARNING: " + v(...e);
                        m.warn(t)
                    },
                    N = function() {
                        "undefined" !== typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
                    },
                    P = function(e) {
                        return "number" === typeof e && (e !== e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY)
                    },
                    O = function(e) {
                        if (Object(r["I"])() || "complete" === document.readyState) e();
                        else {
                            let t = !1;
                            const n = function() {
                                document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                            };
                            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", () => {
                                "complete" === document.readyState && n()
                            }), window.attachEvent("onload", n))
                        }
                    },
                    x = "[MIN_NAME]",
                    R = "[MAX_NAME]",
                    j = function(e, t) {
                        if (e === t) return 0;
                        if (e === x || t === R) return -1;
                        if (t === x || e === R) return 1; {
                            const n = B(e),
                                i = B(t);
                            return null !== n ? null !== i ? n - i === 0 ? e.length - t.length : n - i : -1 : null !== i ? 1 : e < t ? -1 : 1
                        }
                    },
                    D = function(e, t) {
                        return e === t ? 0 : e < t ? -1 : 1
                    },
                    A = function(e, t) {
                        if (t && e in t) return t[e];
                        throw new Error("Missing required key (" + e + ") in object: " + Object(r["U"])(t))
                    },
                    M = function(e) {
                        if ("object" !== typeof e || null === e) return Object(r["U"])(e);
                        const t = [];
                        for (const i in e) t.push(i);
                        t.sort();
                        let n = "{";
                        for (let i = 0; i < t.length; i++) 0 !== i && (n += ","), n += Object(r["U"])(t[i]), n += ":", n += M(e[t[i]]);
                        return n += "}", n
                    },
                    F = function(e, t) {
                        const n = e.length;
                        if (n <= t) return [e];
                        const i = [];
                        for (let s = 0; s < n; s += t) s + t > n ? i.push(e.substring(s, n)) : i.push(e.substring(s, s + t));
                        return i
                    };

                function q(e, t) {
                    for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
                }
                const L = function(e) {
                        Object(r["f"])(!P(e), "Invalid JSON number");
                        const t = 11,
                            n = 52,
                            i = (1 << t - 1) - 1;
                        let s, o, a, l, c;
                        0 === e ? (o = 0, a = 0, s = 1 / e === -1 / 0 ? 1 : 0) : (s = e < 0, e = Math.abs(e), e >= Math.pow(2, 1 - i) ? (l = Math.min(Math.floor(Math.log(e) / Math.LN2), i), o = l + i, a = Math.round(e * Math.pow(2, n - l) - Math.pow(2, n))) : (o = 0, a = Math.round(e / Math.pow(2, 1 - i - n))));
                        const h = [];
                        for (c = n; c; c -= 1) h.push(a % 2 ? 1 : 0), a = Math.floor(a / 2);
                        for (c = t; c; c -= 1) h.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
                        h.push(s ? 1 : 0), h.reverse();
                        const u = h.join("");
                        let d = "";
                        for (c = 0; c < 64; c += 8) {
                            let e = parseInt(u.substr(c, 8), 2).toString(16);
                            1 === e.length && (e = "0" + e), d += e
                        }
                        return d.toLowerCase()
                    },
                    U = function() {
                        return !("object" !== typeof window || !window["chrome"] || !window["chrome"]["extension"] || /^chrome/.test(window.location.href))
                    },
                    W = function() {
                        return "object" === typeof Windows && "object" === typeof Windows.UI
                    };

                function V(e, t) {
                    let n = "Unknown Error";
                    "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? n = "Client doesn't have permission to access the desired data." : "unavailable" === e && (n = "The service is unavailable");
                    const i = new Error(e + " at " + t._path.toString() + ": " + n);
                    return i.code = e.toUpperCase(), i
                }
                const H = new RegExp("^-?(0*)\\d{1,10}$"),
                    z = -2147483648,
                    Y = 2147483647,
                    B = function(e) {
                        if (H.test(e)) {
                            const t = Number(e);
                            if (t >= z && t <= Y) return t
                        }
                        return null
                    },
                    K = function(e) {
                        try {
                            e()
                        } catch (t) {
                            setTimeout(() => {
                                const e = t.stack || "";
                                throw S("Exception was thrown by user callback.", e), t
                            }, Math.floor(0))
                        }
                    },
                    Q = function() {
                        const e = "object" === typeof window && window["navigator"] && window["navigator"]["userAgent"] || "";
                        return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
                    },
                    G = function(e, t) {
                        const n = setTimeout(e, t);
                        return "number" === typeof n && "undefined" !== typeof Deno && Deno["unrefTimer"] ? Deno.unrefTimer(n) : "object" === typeof n && n["unref"] && n["unref"](), n
                    };
                class $ {
                    constructor(e, t) {
                        this.appCheckProvider = t, this.appName = e.name, Object(i["c"])(e) && e.settings.appCheckToken && (this.serverAppAppCheckToken = e.settings.appCheckToken), this.appCheck = null === t || void 0 === t ? void 0 : t.getImmediate({
                            optional: !0
                        }), this.appCheck || null === t || void 0 === t || t.get().then(e => this.appCheck = e)
                    }
                    getToken(e) {
                        if (this.serverAppAppCheckToken) {
                            if (e) throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
                            return Promise.resolve({
                                token: this.serverAppAppCheckToken
                            })
                        }
                        return this.appCheck ? this.appCheck.getToken(e) : new Promise((t, n) => {
                            setTimeout(() => {
                                this.appCheck ? this.getToken(e).then(t, n) : t(null)
                            }, 0)
                        })
                    }
                    addTokenChangeListener(e) {
                        var t;
                        null === (t = this.appCheckProvider) || void 0 === t || t.get().then(t => t.addTokenListener(e))
                    }
                    notifyForInvalidToken() {
                        S(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)
                    }
                }
                class J {
                    constructor(e, t, n) {
                        this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
                            optional: !0
                        }), this.auth_ || n.onInit(e => this.auth_ = e)
                    }
                    getToken(e) {
                        return this.auth_ ? this.auth_.getToken(e).catch(e => e && "auth/token-not-initialized" === e.code ? (T("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)) : new Promise((t, n) => {
                            setTimeout(() => {
                                this.auth_ ? this.getToken(e).then(t, n) : t(null)
                            }, 0)
                        })
                    }
                    addTokenChangeListener(e) {
                        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then(t => t.addAuthTokenListener(e))
                    }
                    removeTokenChangeListener(e) {
                        this.authProvider_.get().then(t => t.removeAuthTokenListener(e))
                    }
                    notifyForInvalidToken() {
                        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
                        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', S(e)
                    }
                }
                class X {
                    constructor(e) {
                        this.accessToken = e
                    }
                    getToken(e) {
                        return Promise.resolve({
                            accessToken: this.accessToken
                        })
                    }
                    addTokenChangeListener(e) {
                        e(this.accessToken)
                    }
                    removeTokenChangeListener(e) {}
                    notifyForInvalidToken() {}
                }
                X.OWNER = "owner";
                const Z = "5",
                    ee = "v",
                    te = "s",
                    ne = "r",
                    ie = "f",
                    se = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                    re = "ls",
                    oe = "p",
                    ae = "ac",
                    le = "websocket",
                    ce = "long_polling";
                class he {
                    constructor(e, t, n, i, s = !1, r = "", o = !1, a = !1, l = null) {
                        this.secure = t, this.namespace = n, this.webSocketOnly = i, this.nodeAdmin = s, this.persistenceKey = r, this.includeNamespaceInQueryParams = o, this.isUsingEmulator = a, this.emulatorOptions = l, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = p.get("host:" + e) || this._host
                    }
                    isCacheableHost() {
                        return "s-" === this.internalHost.substr(0, 2)
                    }
                    isCustomHost() {
                        return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
                    }
                    get host() {
                        return this._host
                    }
                    set host(e) {
                        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && p.set("host:" + this._host, this.internalHost))
                    }
                    toString() {
                        let e = this.toURLString();
                        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                    }
                    toURLString() {
                        const e = this.secure ? "https://" : "http://",
                            t = this.includeNamespaceInQueryParams ? "?ns=" + this.namespace : "";
                        return `${e}${this.host}/${t}`
                    }
                }

                function ue(e) {
                    return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
                }

                function de(e, t, n) {
                    let i;
                    if (Object(r["f"])("string" === typeof t, "typeof type must == string"), Object(r["f"])("object" === typeof n, "typeof params must == object"), t === le) i = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                    else {
                        if (t !== ce) throw new Error("Unknown connection type: " + t);
                        i = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
                    }
                    ue(e) && (n["ns"] = e.namespace);
                    const s = [];
                    return q(n, (e, t) => {
                        s.push(e + "=" + t)
                    }), i + s.join("&")
                }
                class _e {
                    constructor() {
                        this.counters_ = {}
                    }
                    incrementCounter(e, t = 1) {
                        Object(r["m"])(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
                    }
                    get() {
                        return Object(r["p"])(this.counters_)
                    }
                }
                const pe = {},
                    fe = {};

                function me(e) {
                    const t = e.toString();
                    return pe[t] || (pe[t] = new _e), pe[t]
                }

                function ge(e, t) {
                    const n = e.toString();
                    return fe[n] || (fe[n] = t()), fe[n]
                }
                class ye {
                    constructor(e) {
                        this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                    }
                    closeAfter(e, t) {
                        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                    }
                    handleResponse(e, t) {
                        this.pendingResponses[e] = t;
                        while (this.pendingResponses[this.currentResponseNum]) {
                            const e = this.pendingResponses[this.currentResponseNum];
                            delete this.pendingResponses[this.currentResponseNum];
                            for (let t = 0; t < e.length; ++t) e[t] && K(() => {
                                this.onMessage_(e[t])
                            });
                            if (this.currentResponseNum === this.closeAfterResponse) {
                                this.onClose && (this.onClose(), this.onClose = null);
                                break
                            }
                            this.currentResponseNum++
                        }
                    }
                }
                const ve = "start",
                    Ce = "close",
                    we = "pLPCommand",
                    be = "pRTLPCB",
                    Te = "id",
                    Ie = "pw",
                    Ee = "ser",
                    ke = "cb",
                    Se = "seg",
                    Ne = "ts",
                    Pe = "d",
                    Oe = "dframe",
                    xe = 1870,
                    Re = 30,
                    je = xe - Re,
                    De = 25e3,
                    Ae = 3e4;
                class Me {
                    constructor(e, t, n, i, s, r, o) {
                        this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.transportSessionId = r, this.lastSessionId = o, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = I(e), this.stats_ = me(t), this.urlFn = e => (this.appCheckToken && (e[ae] = this.appCheckToken), de(t, ce, e))
                    }
                    open(e, t) {
                        this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new ye(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(() => {
                            this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null
                        }, Math.floor(Ae)), O(() => {
                            if (this.isClosed_) return;
                            this.scriptTagHolder = new Fe((...e) => {
                                const [t, n, i, s, r] = e;
                                if (this.incrementIncomingBytes_(e), this.scriptTagHolder)
                                    if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, t === ve) this.id = n, this.password = i;
                                    else {
                                        if (t !== Ce) throw new Error("Unrecognized command received: " + t);
                                        n ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(n, () => {
                                            this.onClosed_()
                                        })) : this.onClosed_()
                                    }
                            }, (...e) => {
                                const [t, n] = e;
                                this.incrementIncomingBytes_(e), this.myPacketOrderer.handleResponse(t, n)
                            }, () => {
                                this.onClosed_()
                            }, this.urlFn);
                            const e = {};
                            e[ve] = "t", e[Ee] = Math.floor(1e8 * Math.random()), this.scriptTagHolder.uniqueCallbackIdentifier && (e[ke] = this.scriptTagHolder.uniqueCallbackIdentifier), e[ee] = Z, this.transportSessionId && (e[te] = this.transportSessionId), this.lastSessionId && (e[re] = this.lastSessionId), this.applicationId && (e[oe] = this.applicationId), this.appCheckToken && (e[ae] = this.appCheckToken), "undefined" !== typeof location && location.hostname && se.test(location.hostname) && (e[ne] = ie);
                            const t = this.urlFn(e);
                            this.log_("Connecting via long-poll to " + t), this.scriptTagHolder.addTag(t, () => {})
                        })
                    }
                    start() {
                        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                    }
                    static forceAllow() {
                        Me.forceAllow_ = !0
                    }
                    static forceDisallow() {
                        Me.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        return !Object(r["I"])() && (!!Me.forceAllow_ || !Me.forceDisallow_ && "undefined" !== typeof document && null != document.createElement && !U() && !W())
                    }
                    markConnectionHealthy() {}
                    shutdown_() {
                        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                    }
                    send(e) {
                        const t = Object(r["U"])(e);
                        this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                        const n = Object(r["j"])(t),
                            i = F(n, je);
                        for (let s = 0; s < i.length; s++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[s]), this.curSegmentNum++
                    }
                    addDisconnectPingFrame(e, t) {
                        if (Object(r["I"])()) return;
                        this.myDisconnFrame = document.createElement("iframe");
                        const n = {};
                        n[Oe] = "t", n[Te] = e, n[Ie] = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                    }
                    incrementIncomingBytes_(e) {
                        const t = Object(r["U"])(e).length;
                        this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
                    }
                }
                class Fe {
                    constructor(e, t, n, i) {
                        if (this.onDisconnect = n, this.urlFn = i, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, Object(r["I"])()) this.commandCB = e, this.onMessageCB = t;
                        else {
                            this.uniqueCallbackIdentifier = g(), window[we + this.uniqueCallbackIdentifier] = e, window[be + this.uniqueCallbackIdentifier] = t, this.myIFrame = Fe.createIFrame_();
                            let n = "";
                            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) {
                                const e = document.domain;
                                n = '<script>document.domain="' + e + '";<\/script>'
                            }
                            const i = "<html><body>" + n + "</body></html>";
                            try {
                                this.myIFrame.doc.open(), this.myIFrame.doc.write(i), this.myIFrame.doc.close()
                            } catch (s) {
                                T("frame writing exception"), s.stack && T(s.stack), T(s)
                            }
                        }
                    }
                    static createIFrame_() {
                        const e = document.createElement("iframe");
                        if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                        document.body.appendChild(e);
                        try {
                            const t = e.contentWindow.document;
                            t || T("No IE domain setting required")
                        } catch (t) {
                            const n = document.domain;
                            e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
                        }
                        return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
                    }
                    close() {
                        this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.textContent = "", setTimeout(() => {
                            null !== this.myIFrame && (document.body.removeChild(this.myIFrame), this.myIFrame = null)
                        }, Math.floor(0)));
                        const e = this.onDisconnect;
                        e && (this.onDisconnect = null, e())
                    }
                    startLongPoll(e, t) {
                        this.myID = e, this.myPW = t, this.alive = !0;
                        while (this.newRequest_());
                    }
                    newRequest_() {
                        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                            this.currentSerial++;
                            const e = {};
                            e[Te] = this.myID, e[Ie] = this.myPW, e[Ee] = this.currentSerial;
                            let t = this.urlFn(e),
                                n = "",
                                i = 0;
                            while (this.pendingSegs.length > 0) {
                                const e = this.pendingSegs[0];
                                if (!(e.d.length + Re + n.length <= xe)) break; {
                                    const e = this.pendingSegs.shift();
                                    n = n + "&" + Se + i + "=" + e.seg + "&" + Ne + i + "=" + e.ts + "&" + Pe + i + "=" + e.d, i++
                                }
                            }
                            return t += n, this.addLongPollTag_(t, this.currentSerial), !0
                        }
                        return !1
                    }
                    enqueueSegment(e, t, n) {
                        this.pendingSegs.push({
                            seg: e,
                            ts: t,
                            d: n
                        }), this.alive && this.newRequest_()
                    }
                    addLongPollTag_(e, t) {
                        this.outstandingRequests.add(t);
                        const n = () => {
                                this.outstandingRequests.delete(t), this.newRequest_()
                            },
                            i = setTimeout(n, Math.floor(De)),
                            s = () => {
                                clearTimeout(i), n()
                            };
                        this.addTag(e, s)
                    }
                    addTag(e, t) {
                        Object(r["I"])() ? this.doNodeLongPoll(e, t) : setTimeout(() => {
                            try {
                                if (!this.sendNewPolls) return;
                                const n = this.myIFrame.doc.createElement("script");
                                n.type = "text/javascript", n.async = !0, n.src = e, n.onload = n.onreadystatechange = function() {
                                    const e = n.readyState;
                                    e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), t())
                                }, n.onerror = () => {
                                    T("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close()
                                }, this.myIFrame.doc.body.appendChild(n)
                            } catch (n) {}
                        }, Math.floor(1))
                    }
                }
                const qe = 16384,
                    Le = 45e3;
                let Ue = null;
                "undefined" !== typeof MozWebSocket ? Ue = MozWebSocket : "undefined" !== typeof WebSocket && (Ue = WebSocket);
                class We {
                    constructor(e, t, n, i, s, r, o) {
                        this.connId = e, this.applicationId = n, this.appCheckToken = i, this.authToken = s, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = I(this.connId), this.stats_ = me(t), this.connURL = We.connectionURL_(t, r, o, i, n), this.nodeAdmin = t.nodeAdmin
                    }
                    static connectionURL_(e, t, n, i, s) {
                        const o = {};
                        return o[ee] = Z, !Object(r["I"])() && "undefined" !== typeof location && location.hostname && se.test(location.hostname) && (o[ne] = ie), t && (o[te] = t), n && (o[re] = n), i && (o[ae] = i), s && (o[oe] = s), de(e, le, o)
                    }
                    open(t, n) {
                        this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, p.set("previous_websocket_failure", !0);
                        try {
                            let t;
                            if (Object(r["I"])()) {
                                const n = this.nodeAdmin ? "AdminNode" : "Node";
                                t = {
                                    headers: {
                                        "User-Agent": `Firebase/${Z}/${c}/${e.platform}/${n}`,
                                        "X-Firebase-GMPID": this.applicationId || ""
                                    }
                                }, this.authToken && (t.headers["Authorization"] = "Bearer " + this.authToken), this.appCheckToken && (t.headers["X-Firebase-AppCheck"] = this.appCheckToken);
                                const i = Object({
                                        NODE_ENV: "production",
                                        VUE_APP_ANALYZER_MODE: "disabled",
                                        VUE_APP_DEVTOOLS: "disabled",
                                        VUE_APP_PWA_MODE: "enabled",
                                        BASE_URL: "/"
                                    }),
                                    s = 0 === this.connURL.indexOf("wss://") ? i["HTTPS_PROXY"] || i["https_proxy"] : i["HTTP_PROXY"] || i["http_proxy"];
                                s && (t["proxy"] = {
                                    origin: s
                                })
                            }
                            this.mySock = new Ue(this.connURL, [], t)
                        } catch (i) {
                            this.log_("Error instantiating WebSocket.");
                            const e = i.message || i.data;
                            return e && this.log_(e), void this.onClosed_()
                        }
                        this.mySock.onopen = () => {
                            this.log_("Websocket connected."), this.everConnected_ = !0
                        }, this.mySock.onclose = () => {
                            this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_()
                        }, this.mySock.onmessage = e => {
                            this.handleIncomingFrame(e)
                        }, this.mySock.onerror = e => {
                            this.log_("WebSocket error.  Closing connection.");
                            const t = e.message || e.data;
                            t && this.log_(t), this.onClosed_()
                        }
                    }
                    start() {}
                    static forceDisallow() {
                        We.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        let e = !1;
                        if ("undefined" !== typeof navigator && navigator.userAgent) {
                            const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
                                n = navigator.userAgent.match(t);
                            n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
                        }
                        return !e && null !== Ue && !We.forceDisallow_
                    }
                    static previouslyFailed() {
                        return p.isInMemoryStorage || !0 === p.get("previous_websocket_failure")
                    }
                    markConnectionHealthy() {
                        p.remove("previous_websocket_failure")
                    }
                    appendFrame_(e) {
                        if (this.frames.push(e), this.frames.length === this.totalFrames) {
                            const e = this.frames.join("");
                            this.frames = null;
                            const t = Object(r["M"])(e);
                            this.onMessage(t)
                        }
                    }
                    handleNewFrameCount_(e) {
                        this.totalFrames = e, this.frames = []
                    }
                    extractFrameCount_(e) {
                        if (Object(r["f"])(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
                            const t = Number(e);
                            if (!isNaN(t)) return this.handleNewFrameCount_(t), null
                        }
                        return this.handleNewFrameCount_(1), e
                    }
                    handleIncomingFrame(e) {
                        if (null === this.mySock) return;
                        const t = e["data"];
                        if (this.bytesReceived += t.length, this.stats_.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(t);
                        else {
                            const e = this.extractFrameCount_(t);
                            null !== e && this.appendFrame_(e)
                        }
                    }
                    send(e) {
                        this.resetKeepAlive();
                        const t = Object(r["U"])(e);
                        this.bytesSent += t.length, this.stats_.incrementCounter("bytes_sent", t.length);
                        const n = F(t, qe);
                        n.length > 1 && this.sendString_(String(n.length));
                        for (let i = 0; i < n.length; i++) this.sendString_(n[i])
                    }
                    shutdown_() {
                        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                    }
                    resetKeepAlive() {
                        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(() => {
                            this.mySock && this.sendString_("0"), this.resetKeepAlive()
                        }, Math.floor(Le))
                    }
                    sendString_(e) {
                        try {
                            this.mySock.send(e)
                        } catch (t) {
                            this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                        }
                    }
                }
                We.responsesRequiredToBeHealthy = 2, We.healthyTimeout = 3e4;
                class Ve {
                    static get ALL_TRANSPORTS() {
                        return [Me, We]
                    }
                    static get IS_TRANSPORT_INITIALIZED() {
                        return this.globalTransportInitialized_
                    }
                    constructor(e) {
                        this.initTransports_(e)
                    }
                    initTransports_(e) {
                        const t = We && We["isAvailable"]();
                        let n = t && !We.previouslyFailed();
                        if (e.webSocketOnly && (t || S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [We];
                        else {
                            const e = this.transports_ = [];
                            for (const t of Ve.ALL_TRANSPORTS) t && t["isAvailable"]() && e.push(t);
                            Ve.globalTransportInitialized_ = !0
                        }
                    }
                    initialTransport() {
                        if (this.transports_.length > 0) return this.transports_[0];
                        throw new Error("No transports available")
                    }
                    upgradeTransport() {
                        return this.transports_.length > 1 ? this.transports_[1] : null
                    }
                }
                Ve.globalTransportInitialized_ = !1;
                const He = 6e4,
                    ze = 5e3,
                    Ye = 10240,
                    Be = 102400,
                    Ke = "t",
                    Qe = "d",
                    Ge = "s",
                    $e = "r",
                    Je = "e",
                    Xe = "o",
                    Ze = "a",
                    et = "n",
                    tt = "p",
                    nt = "h";
                class it {
                    constructor(e, t, n, i, s, r, o, a, l, c) {
                        this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = i, this.authToken_ = s, this.onMessage_ = r, this.onReady_ = o, this.onDisconnect_ = a, this.onKill_ = l, this.lastSessionId = c, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = I("c:" + this.id + ":"), this.transportManager_ = new Ve(t), this.log_("Connection created"), this.start_()
                    }
                    start_() {
                        const e = this.transportManager_.initialTransport();
                        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e["responsesRequiredToBeHealthy"] || 0;
                        const t = this.connReceiver_(this.conn_),
                            n = this.disconnReceiver_(this.conn_);
                        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(() => {
                            this.conn_ && this.conn_.open(t, n)
                        }, Math.floor(0));
                        const i = e["healthyTimeout"] || 0;
                        i > 0 && (this.healthyTimeout_ = G(() => {
                            this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > Be ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > Ye ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()))
                        }, Math.floor(i)))
                    }
                    nextTransportId_() {
                        return "c:" + this.id + ":" + this.connectionCount++
                    }
                    disconnReceiver_(e) {
                        return t => {
                            e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
                        }
                    }
                    connReceiver_(e) {
                        return t => {
                            2 !== this.state_ && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"))
                        }
                    }
                    sendRequest(e) {
                        const t = {
                            t: "d",
                            d: e
                        };
                        this.sendData_(t)
                    }
                    tryCleanupConnection() {
                        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                    }
                    onSecondaryControl_(e) {
                        if (Ke in e) {
                            const t = e[Ke];
                            t === Ze ? this.upgradeIfSecondaryHealthy_() : t === $e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : t === Xe && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                        }
                    }
                    onSecondaryMessageReceived_(e) {
                        const t = A("t", e),
                            n = A("d", e);
                        if ("c" === t) this.onSecondaryControl_(n);
                        else {
                            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                            this.pendingDataMessages.push(n)
                        }
                    }
                    upgradeIfSecondaryHealthy_() {
                        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: tt,
                                d: {}
                            }
                        }))
                    }
                    proceedWithUpgrade_() {
                        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: Ze,
                                d: {}
                            }
                        }), this.log_("Ending transmission on primary"), this.conn_.send({
                            t: "c",
                            d: {
                                t: et,
                                d: {}
                            }
                        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                    }
                    onPrimaryMessageReceived_(e) {
                        const t = A("t", e),
                            n = A("d", e);
                        "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n)
                    }
                    onDataMessage_(e) {
                        this.onPrimaryResponse_(), this.onMessage_(e)
                    }
                    onPrimaryResponse_() {
                        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                    }
                    onControl_(e) {
                        const t = A(Ke, e);
                        if (Qe in e) {
                            const n = e[Qe];
                            if (t === nt) {
                                const e = { ...n
                                };
                                this.repoInfo_.isUsingEmulator && (e.h = this.repoInfo_.host), this.onHandshake_(e)
                            } else if (t === et) {
                                this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                                for (let e = 0; e < this.pendingDataMessages.length; ++e) this.onDataMessage_(this.pendingDataMessages[e]);
                                this.pendingDataMessages = [], this.tryCleanupConnection()
                            } else t === Ge ? this.onConnectionShutdown_(n) : t === $e ? this.onReset_(n) : t === Je ? E("Server Error: " + n) : t === Xe ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : E("Unknown control packet command: " + t)
                        }
                    }
                    onHandshake_(e) {
                        const t = e.ts,
                            n = e.v,
                            i = e.h;
                        this.sessionId = e.s, this.repoInfo_.host = i, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), Z !== n && S("Protocol version mismatch detected"), this.tryStartUpgrade_())
                    }
                    tryStartUpgrade_() {
                        const e = this.transportManager_.upgradeTransport();
                        e && this.startUpgrade_(e)
                    }
                    startUpgrade_(e) {
                        this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e["responsesRequiredToBeHealthy"] || 0;
                        const t = this.connReceiver_(this.secondaryConn_),
                            n = this.disconnReceiver_(this.secondaryConn_);
                        this.secondaryConn_.open(t, n), G(() => {
                            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close())
                        }, Math.floor(He))
                    }
                    onReset_(e) {
                        this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                    }
                    onConnectionEstablished_(e, t) {
                        this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : G(() => {
                            this.sendPingOnPrimaryIfNecessary_()
                        }, Math.floor(ze))
                    }
                    sendPingOnPrimaryIfNecessary_() {
                        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                            t: "c",
                            d: {
                                t: tt,
                                d: {}
                            }
                        }))
                    }
                    onSecondaryConnectionLost_() {
                        const e = this.secondaryConn_;
                        this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
                    }
                    onConnectionLost_(e) {
                        this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (p.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                    }
                    onConnectionShutdown_(e) {
                        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                    }
                    sendData_(e) {
                        if (1 !== this.state_) throw "Connection is not connected";
                        this.tx_.send(e)
                    }
                    close() {
                        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                    }
                    closeConnections_() {
                        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                    }
                }
                class st {
                    put(e, t, n, i) {}
                    merge(e, t, n, i) {}
                    refreshAuthToken(e) {}
                    refreshAppCheckToken(e) {}
                    onDisconnectPut(e, t, n) {}
                    onDisconnectMerge(e, t, n) {}
                    onDisconnectCancel(e, t) {}
                    reportStats(e) {}
                }
                class rt {
                    constructor(e) {
                        this.allowedEvents_ = e, this.listeners_ = {}, Object(r["f"])(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
                    }
                    trigger(e, ...t) {
                        if (Array.isArray(this.listeners_[e])) {
                            const n = [...this.listeners_[e]];
                            for (let e = 0; e < n.length; e++) n[e].callback.apply(n[e].context, t)
                        }
                    }
                    on(e, t, n) {
                        this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                            callback: t,
                            context: n
                        });
                        const i = this.getInitialEvent(e);
                        i && t.apply(n, i)
                    }
                    off(e, t, n) {
                        this.validateEventType_(e);
                        const i = this.listeners_[e] || [];
                        for (let s = 0; s < i.length; s++)
                            if (i[s].callback === t && (!n || n === i[s].context)) return void i.splice(s, 1)
                    }
                    validateEventType_(e) {
                        Object(r["f"])(this.allowedEvents_.find(t => t === e), "Unknown event: " + e)
                    }
                }
                class ot extends rt {
                    static getInstance() {
                        return new ot
                    }
                    constructor() {
                        super(["online"]), this.online_ = !0, "undefined" === typeof window || "undefined" === typeof window.addEventListener || Object(r["H"])() || (window.addEventListener("online", () => {
                            this.online_ || (this.online_ = !0, this.trigger("online", !0))
                        }, !1), window.addEventListener("offline", () => {
                            this.online_ && (this.online_ = !1, this.trigger("online", !1))
                        }, !1))
                    }
                    getInitialEvent(e) {
                        return Object(r["f"])("online" === e, "Unknown event type: " + e), [this.online_]
                    }
                    currentlyOnline() {
                        return this.online_
                    }
                }
                const at = 32,
                    lt = 768;
                class ct {
                    constructor(e, t) {
                        if (void 0 === t) {
                            this.pieces_ = e.split("/");
                            let t = 0;
                            for (let e = 0; e < this.pieces_.length; e++) this.pieces_[e].length > 0 && (this.pieces_[t] = this.pieces_[e], t++);
                            this.pieces_.length = t, this.pieceNum_ = 0
                        } else this.pieces_ = e, this.pieceNum_ = t
                    }
                    toString() {
                        let e = "";
                        for (let t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
                        return e || "/"
                    }
                }

                function ht() {
                    return new ct("")
                }

                function ut(e) {
                    return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_]
                }

                function dt(e) {
                    return e.pieces_.length - e.pieceNum_
                }

                function _t(e) {
                    let t = e.pieceNum_;
                    return t < e.pieces_.length && t++, new ct(e.pieces_, t)
                }

                function pt(e) {
                    return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null
                }

                function ft(e) {
                    let t = "";
                    for (let n = e.pieceNum_; n < e.pieces_.length; n++) "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(String(e.pieces_[n])));
                    return t || "/"
                }

                function mt(e, t = 0) {
                    return e.pieces_.slice(e.pieceNum_ + t)
                }

                function gt(e) {
                    if (e.pieceNum_ >= e.pieces_.length) return null;
                    const t = [];
                    for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++) t.push(e.pieces_[n]);
                    return new ct(t, 0)
                }

                function yt(e, t) {
                    const n = [];
                    for (let i = e.pieceNum_; i < e.pieces_.length; i++) n.push(e.pieces_[i]);
                    if (t instanceof ct)
                        for (let i = t.pieceNum_; i < t.pieces_.length; i++) n.push(t.pieces_[i]);
                    else {
                        const e = t.split("/");
                        for (let t = 0; t < e.length; t++) e[t].length > 0 && n.push(e[t])
                    }
                    return new ct(n, 0)
                }

                function vt(e) {
                    return e.pieceNum_ >= e.pieces_.length
                }

                function Ct(e, t) {
                    const n = ut(e),
                        i = ut(t);
                    if (null === n) return t;
                    if (n === i) return Ct(_t(e), _t(t));
                    throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
                }

                function wt(e, t) {
                    const n = mt(e, 0),
                        i = mt(t, 0);
                    for (let s = 0; s < n.length && s < i.length; s++) {
                        const e = j(n[s], i[s]);
                        if (0 !== e) return e
                    }
                    return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
                }

                function bt(e, t) {
                    if (dt(e) !== dt(t)) return !1;
                    for (let n = e.pieceNum_, i = t.pieceNum_; n <= e.pieces_.length; n++, i++)
                        if (e.pieces_[n] !== t.pieces_[i]) return !1;
                    return !0
                }

                function Tt(e, t) {
                    let n = e.pieceNum_,
                        i = t.pieceNum_;
                    if (dt(e) > dt(t)) return !1;
                    while (n < e.pieces_.length) {
                        if (e.pieces_[n] !== t.pieces_[i]) return !1;
                        ++n, ++i
                    }
                    return !0
                }
                class It {
                    constructor(e, t) {
                        this.errorPrefix_ = t, this.parts_ = mt(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
                        for (let n = 0; n < this.parts_.length; n++) this.byteLength_ += Object(r["S"])(this.parts_[n]);
                        St(this)
                    }
                }

                function Et(e, t) {
                    e.parts_.length > 0 && (e.byteLength_ += 1), e.parts_.push(t), e.byteLength_ += Object(r["S"])(t), St(e)
                }

                function kt(e) {
                    const t = e.parts_.pop();
                    e.byteLength_ -= Object(r["S"])(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                }

                function St(e) {
                    if (e.byteLength_ > lt) throw new Error(e.errorPrefix_ + "has a key path longer than " + lt + " bytes (" + e.byteLength_ + ").");
                    if (e.parts_.length > at) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + at + ") or object contains a cycle " + Nt(e))
                }

                function Nt(e) {
                    return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
                }
                class Pt extends rt {
                    static getInstance() {
                        return new Pt
                    }
                    constructor() {
                        let e, t;
                        super(["visible"]), "undefined" !== typeof document && "undefined" !== typeof document.addEventListener && ("undefined" !== typeof document["hidden"] ? (t = "visibilitychange", e = "hidden") : "undefined" !== typeof document["mozHidden"] ? (t = "mozvisibilitychange", e = "mozHidden") : "undefined" !== typeof document["msHidden"] ? (t = "msvisibilitychange", e = "msHidden") : "undefined" !== typeof document["webkitHidden"] && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, () => {
                            const t = !document[e];
                            t !== this.visible_ && (this.visible_ = t, this.trigger("visible", t))
                        }, !1)
                    }
                    getInitialEvent(e) {
                        return Object(r["f"])("visible" === e, "Unknown event type: " + e), [this.visible_]
                    }
                }
                const Ot = 1e3,
                    xt = 3e5,
                    Rt = 3e4,
                    jt = 1.3,
                    Dt = 3e4,
                    At = "server_kill",
                    Mt = 3;
                class Ft extends st {
                    constructor(e, t, n, i, s, o, a, l) {
                        if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = n, this.onConnectStatus_ = i, this.onServerInfoUpdate_ = s, this.authTokenProvider_ = o, this.appCheckTokenProvider_ = a, this.authOverride_ = l, this.id = Ft.nextPersistentConnectionId_++, this.log_ = I("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = new Map, this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = Ot, this.maxReconnectDelay_ = xt, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, l && !Object(r["I"])()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                        Pt.getInstance().on("visible", this.onVisible_, this), -1 === e.host.indexOf("fblocal") && ot.getInstance().on("online", this.onOnline_, this)
                    }
                    sendRequest(e, t, n) {
                        const i = ++this.requestNumber_,
                            s = {
                                r: i,
                                a: e,
                                b: t
                            };
                        this.log_(Object(r["U"])(s)), Object(r["f"])(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(s), n && (this.requestCBHash_[i] = n)
                    }
                    get(e) {
                        this.initConnection_();
                        const t = new r["a"],
                            n = {
                                p: e._path.toString(),
                                q: e._queryObject
                            },
                            i = {
                                action: "g",
                                request: n,
                                onComplete: e => {
                                    const n = e["d"];
                                    "ok" === e["s"] ? t.resolve(n) : t.reject(n)
                                }
                            };
                        this.outstandingGets_.push(i), this.outstandingGetCount_++;
                        const s = this.outstandingGets_.length - 1;
                        return this.connected_ && this.sendGet_(s), t.promise
                    }
                    listen(e, t, n, i) {
                        this.initConnection_();
                        const s = e._queryIdentifier,
                            o = e._path.toString();
                        this.log_("Listen called for " + o + " " + s), this.listens.has(o) || this.listens.set(o, new Map), Object(r["f"])(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), Object(r["f"])(!this.listens.get(o).has(s), "listen() called twice for same path/queryId.");
                        const a = {
                            onComplete: i,
                            hashFn: t,
                            query: e,
                            tag: n
                        };
                        this.listens.get(o).set(s, a), this.connected_ && this.sendListen_(a)
                    }
                    sendGet_(e) {
                        const t = this.outstandingGets_[e];
                        this.sendRequest("g", t.request, n => {
                            delete this.outstandingGets_[e], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), t.onComplete && t.onComplete(n)
                        })
                    }
                    sendListen_(e) {
                        const t = e.query,
                            n = t._path.toString(),
                            i = t._queryIdentifier;
                        this.log_("Listen on " + n + " for " + i);
                        const s = {
                                p: n
                            },
                            r = "q";
                        e.tag && (s["q"] = t._queryObject, s["t"] = e.tag), s["h"] = e.hashFn(), this.sendRequest(r, s, s => {
                            const r = s["d"],
                                o = s["s"];
                            Ft.warnOnListenWarnings_(r, t);
                            const a = this.listens.get(n) && this.listens.get(n).get(i);
                            a === e && (this.log_("listen response", s), "ok" !== o && this.removeListen_(n, i), e.onComplete && e.onComplete(o, r))
                        })
                    }
                    static warnOnListenWarnings_(e, t) {
                        if (e && "object" === typeof e && Object(r["m"])(e, "w")) {
                            const n = Object(r["R"])(e, "w");
                            if (Array.isArray(n) && ~n.indexOf("no_index")) {
                                const e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                                    n = t._path.toString();
                                S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ` + n + " to your security rules for better performance.")
                            }
                        }
                    }
                    refreshAuthToken(e) {
                        this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, () => {}), this.reduceReconnectDelayIfAdminCredential_(e)
                    }
                    reduceReconnectDelayIfAdminCredential_(e) {
                        const t = e && 40 === e.length;
                        (t || Object(r["z"])(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = Rt)
                    }
                    refreshAppCheckToken(e) {
                        this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, () => {})
                    }
                    tryAuth() {
                        if (this.connected_ && this.authToken_) {
                            const e = this.authToken_,
                                t = Object(r["K"])(e) ? "auth" : "gauth",
                                n = {
                                    cred: e
                                };
                            null === this.authOverride_ ? n["noauth"] = !0 : "object" === typeof this.authOverride_ && (n["authvar"] = this.authOverride_), this.sendRequest(t, n, t => {
                                const n = t["s"],
                                    i = t["d"] || "error";
                                this.authToken_ === e && ("ok" === n ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(n, i))
                            })
                        }
                    }
                    tryAppCheck() {
                        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                            token: this.appCheckToken_
                        }, e => {
                            const t = e["s"],
                                n = e["d"] || "error";
                            "ok" === t ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, n)
                        })
                    }
                    unlisten(e, t) {
                        const n = e._path.toString(),
                            i = e._queryIdentifier;
                        this.log_("Unlisten called for " + n + " " + i), Object(r["f"])(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
                        const s = this.removeListen_(n, i);
                        s && this.connected_ && this.sendUnlisten_(n, i, e._queryObject, t)
                    }
                    sendUnlisten_(e, t, n, i) {
                        this.log_("Unlisten on " + e + " for " + t);
                        const s = {
                                p: e
                            },
                            r = "n";
                        i && (s["q"] = n, s["t"] = i), this.sendRequest(r, s)
                    }
                    onDisconnectPut(e, t, n) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "o",
                            data: t,
                            onComplete: n
                        })
                    }
                    onDisconnectMerge(e, t, n) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "om",
                            data: t,
                            onComplete: n
                        })
                    }
                    onDisconnectCancel(e, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "oc",
                            data: null,
                            onComplete: t
                        })
                    }
                    sendOnDisconnect_(e, t, n, i) {
                        const s = {
                            p: t,
                            d: n
                        };
                        this.log_("onDisconnect " + e, s), this.sendRequest(e, s, e => {
                            i && setTimeout(() => {
                                i(e["s"], e["d"])
                            }, Math.floor(0))
                        })
                    }
                    put(e, t, n, i) {
                        this.putInternal("p", e, t, n, i)
                    }
                    merge(e, t, n, i) {
                        this.putInternal("m", e, t, n, i)
                    }
                    putInternal(e, t, n, i, s) {
                        this.initConnection_();
                        const r = {
                            p: t,
                            d: n
                        };
                        void 0 !== s && (r["h"] = s), this.outstandingPuts_.push({
                            action: e,
                            request: r,
                            onComplete: i
                        }), this.outstandingPutCount_++;
                        const o = this.outstandingPuts_.length - 1;
                        this.connected_ ? this.sendPut_(o) : this.log_("Buffering put: " + t)
                    }
                    sendPut_(e) {
                        const t = this.outstandingPuts_[e].action,
                            n = this.outstandingPuts_[e].request,
                            i = this.outstandingPuts_[e].onComplete;
                        this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, n, n => {
                            this.log_(t + " response", n), delete this.outstandingPuts_[e], this.outstandingPutCount_--, 0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []), i && i(n["s"], n["d"])
                        })
                    }
                    reportStats(e) {
                        if (this.connected_) {
                            const t = {
                                c: e
                            };
                            this.log_("reportStats", t), this.sendRequest("s", t, e => {
                                const t = e["s"];
                                if ("ok" !== t) {
                                    const t = e["d"];
                                    this.log_("reportStats", "Error sending stats: " + t)
                                }
                            })
                        }
                    }
                    onDataMessage_(e) {
                        if ("r" in e) {
                            this.log_("from server: " + Object(r["U"])(e));
                            const t = e["r"],
                                n = this.requestCBHash_[t];
                            n && (delete this.requestCBHash_[t], n(e["b"]))
                        } else {
                            if ("error" in e) throw "A server-side error has occurred: " + e["error"];
                            "a" in e && this.onDataPush_(e["a"], e["b"])
                        }
                    }
                    onDataPush_(e, t) {
                        this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t["p"], t["d"], !1, t["t"]) : "m" === e ? this.onDataUpdate_(t["p"], t["d"], !0, t["t"]) : "c" === e ? this.onListenRevoked_(t["p"], t["q"]) : "ac" === e ? this.onAuthRevoked_(t["s"], t["d"]) : "apc" === e ? this.onAppCheckRevoked_(t["s"], t["d"]) : "sd" === e ? this.onSecurityDebugPacket_(t) : E("Unrecognized action received from server: " + Object(r["U"])(e) + "\nAre you using the latest client?")
                    }
                    onReady_(e, t) {
                        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                    }
                    scheduleConnect_(e) {
                        Object(r["f"])(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(() => {
                            this.establishConnectionTimer_ = null, this.establishConnection_()
                        }, Math.floor(e))
                    }
                    initConnection_() {
                        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
                    }
                    onVisible_(e) {
                        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Ot, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                    }
                    onOnline_(e) {
                        e ? (this.log_("Browser went online."), this.reconnectDelay_ = Ot, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                    }
                    onRealtimeDisconnect_() {
                        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                            if (this.visible_) {
                                if (this.lastConnectionEstablishedTime_) {
                                    const e = (new Date).getTime() - this.lastConnectionEstablishedTime_;
                                    e > Dt && (this.reconnectDelay_ = Ot), this.lastConnectionEstablishedTime_ = null
                                }
                            } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                            const e = Math.max(0, (new Date).getTime() - this.lastConnectionAttemptTime_);
                            let t = Math.max(0, this.reconnectDelay_ - e);
                            t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * jt)
                        }
                        this.onConnectStatus_(!1)
                    }
                    async establishConnection_() {
                        if (this.shouldReconnect_()) {
                            this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                            const e = this.onDataMessage_.bind(this),
                                t = this.onReady_.bind(this),
                                n = this.onRealtimeDisconnect_.bind(this),
                                i = this.id + ":" + Ft.nextConnectionId_++,
                                s = this.lastSessionId;
                            let o = !1,
                                a = null;
                            const l = function() {
                                    a ? a.close() : (o = !0, n())
                                },
                                c = function(e) {
                                    Object(r["f"])(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(e)
                                };
                            this.realtime_ = {
                                close: l,
                                sendRequest: c
                            };
                            const h = this.forceTokenRefresh_;
                            this.forceTokenRefresh_ = !1;
                            try {
                                const [r, l] = await Promise.all([this.authTokenProvider_.getToken(h), this.appCheckTokenProvider_.getToken(h)]);
                                o ? T("getToken() completed but was canceled") : (T("getToken() completed. Creating connection."), this.authToken_ = r && r.accessToken, this.appCheckToken_ = l && l.token, a = new it(i, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, e, t, n, e => {
                                    S(e + " (" + this.repoInfo_.toString() + ")"), this.interrupt(At)
                                }, s))
                            } catch (E) {
                                this.log_("Failed to get token: " + E), o || (this.repoInfo_.nodeAdmin && S(E), l())
                            }
                        }
                    }
                    interrupt(e) {
                        T("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                    }
                    resume(e) {
                        T("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Object(r["E"])(this.interruptReasons_) && (this.reconnectDelay_ = Ot, this.realtime_ || this.scheduleConnect_(0))
                    }
                    handleTimestamp_(e) {
                        const t = e - (new Date).getTime();
                        this.onServerInfoUpdate_({
                            serverTimeOffset: t
                        })
                    }
                    cancelSentTransactions_() {
                        for (let e = 0; e < this.outstandingPuts_.length; e++) {
                            const t = this.outstandingPuts_[e];
                            t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                    }
                    onListenRevoked_(e, t) {
                        let n;
                        n = t ? t.map(e => M(e)).join("$") : "default";
                        const i = this.removeListen_(e, n);
                        i && i.onComplete && i.onComplete("permission_denied")
                    }
                    removeListen_(e, t) {
                        const n = new ct(e).toString();
                        let i;
                        if (this.listens.has(n)) {
                            const e = this.listens.get(n);
                            i = e.get(t), e.delete(t), 0 === e.size && this.listens.delete(n)
                        } else i = void 0;
                        return i
                    }
                    onAuthRevoked_(e, t) {
                        T("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= Mt && (this.reconnectDelay_ = Rt, this.authTokenProvider_.notifyForInvalidToken()))
                    }
                    onAppCheckRevoked_(e, t) {
                        T("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= Mt && this.appCheckTokenProvider_.notifyForInvalidToken())
                    }
                    onSecurityDebugPacket_(e) {
                        this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e["msg"].replace("\n", "\nFIREBASE: "))
                    }
                    restoreState_() {
                        this.tryAuth(), this.tryAppCheck();
                        for (const e of this.listens.values())
                            for (const t of e.values()) this.sendListen_(t);
                        for (let e = 0; e < this.outstandingPuts_.length; e++) this.outstandingPuts_[e] && this.sendPut_(e);
                        while (this.onDisconnectRequestQueue_.length) {
                            const e = this.onDisconnectRequestQueue_.shift();
                            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
                        }
                        for (let e = 0; e < this.outstandingGets_.length; e++) this.outstandingGets_[e] && this.sendGet_(e)
                    }
                    sendConnectStats_() {
                        const e = {};
                        let t = "js";
                        Object(r["I"])() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"), e["sdk." + t + "." + c.replace(/\./g, "-")] = 1, Object(r["H"])() ? e["framework.cordova"] = 1 : Object(r["J"])() && (e["framework.reactnative"] = 1), this.reportStats(e)
                    }
                    shouldReconnect_() {
                        const e = ot.getInstance().currentlyOnline();
                        return Object(r["E"])(this.interruptReasons_) && e
                    }
                }
                Ft.nextPersistentConnectionId_ = 0, Ft.nextConnectionId_ = 0;
                class qt {
                    constructor(e, t) {
                        this.name = e, this.node = t
                    }
                    static Wrap(e, t) {
                        return new qt(e, t)
                    }
                }
                class Lt {
                    getCompare() {
                        return this.compare.bind(this)
                    }
                    indexedValueChanged(e, t) {
                        const n = new qt(x, e),
                            i = new qt(x, t);
                        return 0 !== this.compare(n, i)
                    }
                    minPost() {
                        return qt.MIN
                    }
                }
                let Ut;
                class Wt extends Lt {
                    static get __EMPTY_NODE() {
                        return Ut
                    }
                    static set __EMPTY_NODE(e) {
                        Ut = e
                    }
                    compare(e, t) {
                        return j(e.name, t.name)
                    }
                    isDefinedOn(e) {
                        throw Object(r["g"])("KeyIndex.isDefinedOn not expected to be called.")
                    }
                    indexedValueChanged(e, t) {
                        return !1
                    }
                    minPost() {
                        return qt.MIN
                    }
                    maxPost() {
                        return new qt(R, Ut)
                    }
                    makePost(e, t) {
                        return Object(r["f"])("string" === typeof e, "KeyIndex indexValue must always be a string."), new qt(e, Ut)
                    }
                    toString() {
                        return ".key"
                    }
                }
                const Vt = new Wt;
                class Ht {
                    constructor(e, t, n, i, s = null) {
                        this.isReverse_ = i, this.resultGenerator_ = s, this.nodeStack_ = [];
                        let r = 1;
                        while (!e.isEmpty())
                            if (e = e, r = t ? n(e.key, t) : 1, i && (r *= -1), r < 0) e = this.isReverse_ ? e.left : e.right;
                            else {
                                if (0 === r) {
                                    this.nodeStack_.push(e);
                                    break
                                }
                                this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                            }
                    }
                    getNext() {
                        if (0 === this.nodeStack_.length) return null;
                        let e, t = this.nodeStack_.pop();
                        if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                                key: t.key,
                                value: t.value
                            }, this.isReverse_) {
                            t = t.left;
                            while (!t.isEmpty()) this.nodeStack_.push(t), t = t.right
                        } else {
                            t = t.right;
                            while (!t.isEmpty()) this.nodeStack_.push(t), t = t.left
                        }
                        return e
                    }
                    hasNext() {
                        return this.nodeStack_.length > 0
                    }
                    peek() {
                        if (0 === this.nodeStack_.length) return null;
                        const e = this.nodeStack_[this.nodeStack_.length - 1];
                        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                            key: e.key,
                            value: e.value
                        }
                    }
                }
                class zt {
                    constructor(e, t, n, i, s) {
                        this.key = e, this.value = t, this.color = null != n ? n : zt.RED, this.left = null != i ? i : Bt.EMPTY_NODE, this.right = null != s ? s : Bt.EMPTY_NODE
                    }
                    copy(e, t, n, i, s) {
                        return new zt(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != i ? i : this.left, null != s ? s : this.right)
                    }
                    count() {
                        return this.left.count() + 1 + this.right.count()
                    }
                    isEmpty() {
                        return !1
                    }
                    inorderTraversal(e) {
                        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                    }
                    min_() {
                        return this.left.isEmpty() ? this : this.left.min_()
                    }
                    minKey() {
                        return this.min_().key
                    }
                    maxKey() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }
                    insert(e, t, n) {
                        let i = this;
                        const s = n(e, i.key);
                        return i = s < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === s ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.fixUp_()
                    }
                    removeMin_() {
                        if (this.left.isEmpty()) return Bt.EMPTY_NODE;
                        let e = this;
                        return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_()
                    }
                    remove(e, t) {
                        let n, i;
                        if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                        else {
                            if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                                if (n.right.isEmpty()) return Bt.EMPTY_NODE;
                                i = n.right.min_(), n = n.copy(i.key, i.value, null, null, n.right.removeMin_())
                            }
                            n = n.copy(null, null, null, null, n.right.remove(e, t))
                        }
                        return n.fixUp_()
                    }
                    isRed_() {
                        return this.color
                    }
                    fixUp_() {
                        let e = this;
                        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
                    }
                    moveRedLeft_() {
                        let e = this.colorFlip_();
                        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e
                    }
                    moveRedRight_() {
                        let e = this.colorFlip_();
                        return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e
                    }
                    rotateLeft_() {
                        const e = this.copy(null, null, zt.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, e, null)
                    }
                    rotateRight_() {
                        const e = this.copy(null, null, zt.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, e)
                    }
                    colorFlip_() {
                        const e = this.left.copy(null, null, !this.left.color, null, null),
                            t = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, e, t)
                    }
                    checkMaxDepth_() {
                        const e = this.check_();
                        return Math.pow(2, e) <= this.count() + 1
                    }
                    check_() {
                        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                        const e = this.left.check_();
                        if (e !== this.right.check_()) throw new Error("Black depths differ");
                        return e + (this.isRed_() ? 0 : 1)
                    }
                }
                zt.RED = !0, zt.BLACK = !1;
                class Yt {
                    copy(e, t, n, i, s) {
                        return this
                    }
                    insert(e, t, n) {
                        return new zt(e, t, null)
                    }
                    remove(e, t) {
                        return this
                    }
                    count() {
                        return 0
                    }
                    isEmpty() {
                        return !0
                    }
                    inorderTraversal(e) {
                        return !1
                    }
                    reverseTraversal(e) {
                        return !1
                    }
                    minKey() {
                        return null
                    }
                    maxKey() {
                        return null
                    }
                    check_() {
                        return 0
                    }
                    isRed_() {
                        return !1
                    }
                }
                class Bt {
                    constructor(e, t = Bt.EMPTY_NODE) {
                        this.comparator_ = e, this.root_ = t
                    }
                    insert(e, t) {
                        return new Bt(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, zt.BLACK, null, null))
                    }
                    remove(e) {
                        return new Bt(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, zt.BLACK, null, null))
                    }
                    get(e) {
                        let t, n = this.root_;
                        while (!n.isEmpty()) {
                            if (t = this.comparator_(e, n.key), 0 === t) return n.value;
                            t < 0 ? n = n.left : t > 0 && (n = n.right)
                        }
                        return null
                    }
                    getPredecessorKey(e) {
                        let t, n = this.root_,
                            i = null;
                        while (!n.isEmpty()) {
                            if (t = this.comparator_(e, n.key), 0 === t) {
                                if (n.left.isEmpty()) return i ? i.key : null;
                                n = n.left;
                                while (!n.right.isEmpty()) n = n.right;
                                return n.key
                            }
                            t < 0 ? n = n.left : t > 0 && (i = n, n = n.right)
                        }
                        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                    }
                    isEmpty() {
                        return this.root_.isEmpty()
                    }
                    count() {
                        return this.root_.count()
                    }
                    minKey() {
                        return this.root_.minKey()
                    }
                    maxKey() {
                        return this.root_.maxKey()
                    }
                    inorderTraversal(e) {
                        return this.root_.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.root_.reverseTraversal(e)
                    }
                    getIterator(e) {
                        return new Ht(this.root_, null, this.comparator_, !1, e)
                    }
                    getIteratorFrom(e, t) {
                        return new Ht(this.root_, e, this.comparator_, !1, t)
                    }
                    getReverseIteratorFrom(e, t) {
                        return new Ht(this.root_, e, this.comparator_, !0, t)
                    }
                    getReverseIterator(e) {
                        return new Ht(this.root_, null, this.comparator_, !0, e)
                    }
                }

                function Kt(e, t) {
                    return j(e.name, t.name)
                }

                function Qt(e, t) {
                    return j(e, t)
                }
                let Gt;

                function $t(e) {
                    Gt = e
                }
                Bt.EMPTY_NODE = new Yt;
                const Jt = function(e) {
                        return "number" === typeof e ? "number:" + L(e) : "string:" + e
                    },
                    Xt = function(e) {
                        if (e.isLeafNode()) {
                            const t = e.val();
                            Object(r["f"])("string" === typeof t || "number" === typeof t || "object" === typeof t && Object(r["m"])(t, ".sv"), "Priority must be a string or number.")
                        } else Object(r["f"])(e === Gt || e.isEmpty(), "priority of unexpected type.");
                        Object(r["f"])(e === Gt || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                    };
                let Zt, en, tn;
                class nn {
                    static set __childrenNodeConstructor(e) {
                        Zt = e
                    }
                    static get __childrenNodeConstructor() {
                        return Zt
                    }
                    constructor(e, t = nn.__childrenNodeConstructor.EMPTY_NODE) {
                        this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, Object(r["f"])(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Xt(this.priorityNode_)
                    }
                    isLeafNode() {
                        return !0
                    }
                    getPriority() {
                        return this.priorityNode_
                    }
                    updatePriority(e) {
                        return new nn(this.value_, e)
                    }
                    getImmediateChild(e) {
                        return ".priority" === e ? this.priorityNode_ : nn.__childrenNodeConstructor.EMPTY_NODE
                    }
                    getChild(e) {
                        return vt(e) ? this : ".priority" === ut(e) ? this.priorityNode_ : nn.__childrenNodeConstructor.EMPTY_NODE
                    }
                    hasChild() {
                        return !1
                    }
                    getPredecessorChildName(e, t) {
                        return null
                    }
                    updateImmediateChild(e, t) {
                        return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
                    }
                    updateChild(e, t) {
                        const n = ut(e);
                        return null === n ? t : t.isEmpty() && ".priority" !== n ? this : (Object(r["f"])(".priority" !== n || 1 === dt(e), ".priority must be the last token in a path"), this.updateImmediateChild(n, nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e), t)))
                    }
                    isEmpty() {
                        return !1
                    }
                    numChildren() {
                        return 0
                    }
                    forEachChild(e, t) {
                        return !1
                    }
                    val(e) {
                        return e && !this.getPriority().isEmpty() ? {
                            ".value": this.getValue(),
                            ".priority": this.getPriority().val()
                        } : this.getValue()
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.priorityNode_.isEmpty() || (e += "priority:" + Jt(this.priorityNode_.val()) + ":");
                            const t = typeof this.value_;
                            e += t + ":", e += "number" === t ? L(this.value_) : this.value_, this.lazyHash_ = y(e)
                        }
                        return this.lazyHash_
                    }
                    getValue() {
                        return this.value_
                    }
                    compareTo(e) {
                        return e === nn.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof nn.__childrenNodeConstructor ? -1 : (Object(r["f"])(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e))
                    }
                    compareToLeafNode_(e) {
                        const t = typeof e.value_,
                            n = typeof this.value_,
                            i = nn.VALUE_TYPE_ORDER.indexOf(t),
                            s = nn.VALUE_TYPE_ORDER.indexOf(n);
                        return Object(r["f"])(i >= 0, "Unknown leaf type: " + t), Object(r["f"])(s >= 0, "Unknown leaf type: " + n), i === s ? "object" === n ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : s - i
                    }
                    withIndex() {
                        return this
                    }
                    isIndexed() {
                        return !0
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) {
                            const t = e;
                            return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                        }
                        return !1
                    }
                }

                function sn(e) {
                    en = e
                }

                function rn(e) {
                    tn = e
                }
                nn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
                class on extends Lt {
                    compare(e, t) {
                        const n = e.node.getPriority(),
                            i = t.node.getPriority(),
                            s = n.compareTo(i);
                        return 0 === s ? j(e.name, t.name) : s
                    }
                    isDefinedOn(e) {
                        return !e.getPriority().isEmpty()
                    }
                    indexedValueChanged(e, t) {
                        return !e.getPriority().equals(t.getPriority())
                    }
                    minPost() {
                        return qt.MIN
                    }
                    maxPost() {
                        return new qt(R, new nn("[PRIORITY-POST]", tn))
                    }
                    makePost(e, t) {
                        const n = en(e);
                        return new qt(t, new nn("[PRIORITY-POST]", n))
                    }
                    toString() {
                        return ".priority"
                    }
                }
                const an = new on,
                    ln = Math.log(2);
                class cn {
                    constructor(e) {
                        const t = e => parseInt(Math.log(e) / ln, 10),
                            n = e => parseInt(Array(e + 1).join("1"), 2);
                        this.count = t(e + 1), this.current_ = this.count - 1;
                        const i = n(this.count);
                        this.bits_ = e + 1 & i
                    }
                    nextBitIsOne() {
                        const e = !(this.bits_ & 1 << this.current_);
                        return this.current_--, e
                    }
                }
                const hn = function(e, t, n, i) {
                    e.sort(t);
                    const s = function(t, i) {
                            const r = i - t;
                            let o, a;
                            if (0 === r) return null;
                            if (1 === r) return o = e[t], a = n ? n(o) : o, new zt(a, o.node, zt.BLACK, null, null); {
                                const l = parseInt(r / 2, 10) + t,
                                    c = s(t, l),
                                    h = s(l + 1, i);
                                return o = e[l], a = n ? n(o) : o, new zt(a, o.node, zt.BLACK, c, h)
                            }
                        },
                        r = function(t) {
                            let i = null,
                                r = null,
                                o = e.length;
                            const a = function(t, i) {
                                    const r = o - t,
                                        a = o;
                                    o -= t;
                                    const c = s(r + 1, a),
                                        h = e[r],
                                        u = n ? n(h) : h;
                                    l(new zt(u, h.node, i, null, c))
                                },
                                l = function(e) {
                                    i ? (i.left = e, i = e) : (r = e, i = e)
                                };
                            for (let e = 0; e < t.count; ++e) {
                                const n = t.nextBitIsOne(),
                                    i = Math.pow(2, t.count - (e + 1));
                                n ? a(i, zt.BLACK) : (a(i, zt.BLACK), a(i, zt.RED))
                            }
                            return r
                        },
                        o = new cn(e.length),
                        a = r(o);
                    return new Bt(i || t, a)
                };
                let un;
                const dn = {};
                class _n {
                    static get Default() {
                        return Object(r["f"])(dn && an, "ChildrenNode.ts has not been loaded"), un = un || new _n({
                            ".priority": dn
                        }, {
                            ".priority": an
                        }), un
                    }
                    constructor(e, t) {
                        this.indexes_ = e, this.indexSet_ = t
                    }
                    get(e) {
                        const t = Object(r["R"])(this.indexes_, e);
                        if (!t) throw new Error("No index defined for " + e);
                        return t instanceof Bt ? t : null
                    }
                    hasIndex(e) {
                        return Object(r["m"])(this.indexSet_, e.toString())
                    }
                    addIndex(e, t) {
                        Object(r["f"])(e !== Vt, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                        const n = [];
                        let i = !1;
                        const s = t.getIterator(qt.Wrap);
                        let o, a = s.getNext();
                        while (a) i = i || e.isDefinedOn(a.node), n.push(a), a = s.getNext();
                        o = i ? hn(n, e.getCompare()) : dn;
                        const l = e.toString(),
                            c = { ...this.indexSet_
                            };
                        c[l] = e;
                        const h = { ...this.indexes_
                        };
                        return h[l] = o, new _n(h, c)
                    }
                    addToIndexes(e, t) {
                        const n = Object(r["N"])(this.indexes_, (n, i) => {
                            const s = Object(r["R"])(this.indexSet_, i);
                            if (Object(r["f"])(s, "Missing index implementation for " + i), n === dn) {
                                if (s.isDefinedOn(e.node)) {
                                    const n = [],
                                        i = t.getIterator(qt.Wrap);
                                    let r = i.getNext();
                                    while (r) r.name !== e.name && n.push(r), r = i.getNext();
                                    return n.push(e), hn(n, s.getCompare())
                                }
                                return dn
                            } {
                                const i = t.get(e.name);
                                let s = n;
                                return i && (s = s.remove(new qt(e.name, i))), s.insert(e, e.node)
                            }
                        });
                        return new _n(n, this.indexSet_)
                    }
                    removeFromIndexes(e, t) {
                        const n = Object(r["N"])(this.indexes_, n => {
                            if (n === dn) return n; {
                                const i = t.get(e.name);
                                return i ? n.remove(new qt(e.name, i)) : n
                            }
                        });
                        return new _n(n, this.indexSet_)
                    }
                }
                let pn;
                class fn {
                    static get EMPTY_NODE() {
                        return pn || (pn = new fn(new Bt(Qt), null, _n.Default))
                    }
                    constructor(e, t, n) {
                        this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Xt(this.priorityNode_), this.children_.isEmpty() && Object(r["f"])(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                    }
                    isLeafNode() {
                        return !1
                    }
                    getPriority() {
                        return this.priorityNode_ || pn
                    }
                    updatePriority(e) {
                        return this.children_.isEmpty() ? this : new fn(this.children_, e, this.indexMap_)
                    }
                    getImmediateChild(e) {
                        if (".priority" === e) return this.getPriority(); {
                            const t = this.children_.get(e);
                            return null === t ? pn : t
                        }
                    }
                    getChild(e) {
                        const t = ut(e);
                        return null === t ? this : this.getImmediateChild(t).getChild(_t(e))
                    }
                    hasChild(e) {
                        return null !== this.children_.get(e)
                    }
                    updateImmediateChild(e, t) {
                        if (Object(r["f"])(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t); {
                            const n = new qt(e, t);
                            let i, s;
                            t.isEmpty() ? (i = this.children_.remove(e), s = this.indexMap_.removeFromIndexes(n, this.children_)) : (i = this.children_.insert(e, t), s = this.indexMap_.addToIndexes(n, this.children_));
                            const r = i.isEmpty() ? pn : this.priorityNode_;
                            return new fn(i, r, s)
                        }
                    }
                    updateChild(e, t) {
                        const n = ut(e);
                        if (null === n) return t; {
                            Object(r["f"])(".priority" !== ut(e) || 1 === dt(e), ".priority must be the last token in a path");
                            const i = this.getImmediateChild(n).updateChild(_t(e), t);
                            return this.updateImmediateChild(n, i)
                        }
                    }
                    isEmpty() {
                        return this.children_.isEmpty()
                    }
                    numChildren() {
                        return this.children_.count()
                    }
                    val(e) {
                        if (this.isEmpty()) return null;
                        const t = {};
                        let n = 0,
                            i = 0,
                            s = !0;
                        if (this.forEachChild(an, (r, o) => {
                                t[r] = o.val(e), n++, s && fn.INTEGER_REGEXP_.test(r) ? i = Math.max(i, Number(r)) : s = !1
                            }), !e && s && i < 2 * n) {
                            const e = [];
                            for (const n in t) e[n] = t[n];
                            return e
                        }
                        return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.getPriority().isEmpty() || (e += "priority:" + Jt(this.getPriority().val()) + ":"), this.forEachChild(an, (t, n) => {
                                const i = n.hash();
                                "" !== i && (e += ":" + t + ":" + i)
                            }), this.lazyHash_ = "" === e ? "" : y(e)
                        }
                        return this.lazyHash_
                    }
                    getPredecessorChildName(e, t, n) {
                        const i = this.resolveIndex_(n);
                        if (i) {
                            const n = i.getPredecessorKey(new qt(e, t));
                            return n ? n.name : null
                        }
                        return this.children_.getPredecessorKey(e)
                    }
                    getFirstChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.minKey();
                            return e && e.name
                        }
                        return this.children_.minKey()
                    }
                    getFirstChild(e) {
                        const t = this.getFirstChildName(e);
                        return t ? new qt(t, this.children_.get(t)) : null
                    }
                    getLastChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.maxKey();
                            return e && e.name
                        }
                        return this.children_.maxKey()
                    }
                    getLastChild(e) {
                        const t = this.getLastChildName(e);
                        return t ? new qt(t, this.children_.get(t)) : null
                    }
                    forEachChild(e, t) {
                        const n = this.resolveIndex_(e);
                        return n ? n.inorderTraversal(e => t(e.name, e.node)) : this.children_.inorderTraversal(t)
                    }
                    getIterator(e) {
                        return this.getIteratorFrom(e.minPost(), e)
                    }
                    getIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getIteratorFrom(e, e => e); {
                            const n = this.children_.getIteratorFrom(e.name, qt.Wrap);
                            let i = n.peek();
                            while (null != i && t.compare(i, e) < 0) n.getNext(), i = n.peek();
                            return n
                        }
                    }
                    getReverseIterator(e) {
                        return this.getReverseIteratorFrom(e.maxPost(), e)
                    }
                    getReverseIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getReverseIteratorFrom(e, e => e); {
                            const n = this.children_.getReverseIteratorFrom(e.name, qt.Wrap);
                            let i = n.peek();
                            while (null != i && t.compare(i, e) > 0) n.getNext(), i = n.peek();
                            return n
                        }
                    }
                    compareTo(e) {
                        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === gn ? -1 : 0
                    }
                    withIndex(e) {
                        if (e === Vt || this.indexMap_.hasIndex(e)) return this; {
                            const t = this.indexMap_.addIndex(e, this.children_);
                            return new fn(this.children_, this.priorityNode_, t)
                        }
                    }
                    isIndexed(e) {
                        return e === Vt || this.indexMap_.hasIndex(e)
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) return !1; {
                            const t = e;
                            if (this.getPriority().equals(t.getPriority())) {
                                if (this.children_.count() === t.children_.count()) {
                                    const e = this.getIterator(an),
                                        n = t.getIterator(an);
                                    let i = e.getNext(),
                                        s = n.getNext();
                                    while (i && s) {
                                        if (i.name !== s.name || !i.node.equals(s.node)) return !1;
                                        i = e.getNext(), s = n.getNext()
                                    }
                                    return null === i && null === s
                                }
                                return !1
                            }
                            return !1
                        }
                    }
                    resolveIndex_(e) {
                        return e === Vt ? null : this.indexMap_.get(e.toString())
                    }
                }
                fn.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
                class mn extends fn {
                    constructor() {
                        super(new Bt(Qt), fn.EMPTY_NODE, _n.Default)
                    }
                    compareTo(e) {
                        return e === this ? 0 : 1
                    }
                    equals(e) {
                        return e === this
                    }
                    getPriority() {
                        return this
                    }
                    getImmediateChild(e) {
                        return fn.EMPTY_NODE
                    }
                    isEmpty() {
                        return !1
                    }
                }
                const gn = new mn;
                Object.defineProperties(qt, {
                    MIN: {
                        value: new qt(x, fn.EMPTY_NODE)
                    },
                    MAX: {
                        value: new qt(R, gn)
                    }
                }), Wt.__EMPTY_NODE = fn.EMPTY_NODE, nn.__childrenNodeConstructor = fn, $t(gn), rn(gn);
                const yn = !0;

                function vn(e, t = null) {
                    if (null === e) return fn.EMPTY_NODE;
                    if ("object" === typeof e && ".priority" in e && (t = e[".priority"]), Object(r["f"])(null === t || "string" === typeof t || "number" === typeof t || "object" === typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" === typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" !== typeof e || ".sv" in e) {
                        const n = e;
                        return new nn(n, vn(t))
                    }
                    if (e instanceof Array || !yn) {
                        let n = fn.EMPTY_NODE;
                        return q(e, (t, i) => {
                            if (Object(r["m"])(e, t) && "." !== t.substring(0, 1)) {
                                const e = vn(i);
                                !e.isLeafNode() && e.isEmpty() || (n = n.updateImmediateChild(t, e))
                            }
                        }), n.updatePriority(vn(t))
                    } {
                        const n = [];
                        let i = !1;
                        const s = e;
                        if (q(s, (e, t) => {
                                if ("." !== e.substring(0, 1)) {
                                    const s = vn(t);
                                    s.isEmpty() || (i = i || !s.getPriority().isEmpty(), n.push(new qt(e, s)))
                                }
                            }), 0 === n.length) return fn.EMPTY_NODE;
                        const r = hn(n, Kt, e => e.name, Qt);
                        if (i) {
                            const e = hn(n, an.getCompare());
                            return new fn(r, vn(t), new _n({
                                ".priority": e
                            }, {
                                ".priority": an
                            }))
                        }
                        return new fn(r, vn(t), _n.Default)
                    }
                }
                sn(vn);
                class Cn extends Lt {
                    constructor(e) {
                        super(), this.indexPath_ = e, Object(r["f"])(!vt(e) && ".priority" !== ut(e), "Can't create PathIndex with empty path or .priority key")
                    }
                    extractChild(e) {
                        return e.getChild(this.indexPath_)
                    }
                    isDefinedOn(e) {
                        return !e.getChild(this.indexPath_).isEmpty()
                    }
                    compare(e, t) {
                        const n = this.extractChild(e.node),
                            i = this.extractChild(t.node),
                            s = n.compareTo(i);
                        return 0 === s ? j(e.name, t.name) : s
                    }
                    makePost(e, t) {
                        const n = vn(e),
                            i = fn.EMPTY_NODE.updateChild(this.indexPath_, n);
                        return new qt(t, i)
                    }
                    maxPost() {
                        const e = fn.EMPTY_NODE.updateChild(this.indexPath_, gn);
                        return new qt(R, e)
                    }
                    toString() {
                        return mt(this.indexPath_, 0).join("/")
                    }
                }
                class wn extends Lt {
                    compare(e, t) {
                        const n = e.node.compareTo(t.node);
                        return 0 === n ? j(e.name, t.name) : n
                    }
                    isDefinedOn(e) {
                        return !0
                    }
                    indexedValueChanged(e, t) {
                        return !e.equals(t)
                    }
                    minPost() {
                        return qt.MIN
                    }
                    maxPost() {
                        return qt.MAX
                    }
                    makePost(e, t) {
                        const n = vn(e);
                        return new qt(t, n)
                    }
                    toString() {
                        return ".value"
                    }
                }
                const bn = new wn;

                function Tn(e) {
                    return {
                        type: "value",
                        snapshotNode: e
                    }
                }

                function In(e, t) {
                    return {
                        type: "child_added",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function En(e, t) {
                    return {
                        type: "child_removed",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function kn(e, t, n) {
                    return {
                        type: "child_changed",
                        snapshotNode: t,
                        childName: e,
                        oldSnap: n
                    }
                }

                function Sn(e, t) {
                    return {
                        type: "child_moved",
                        snapshotNode: t,
                        childName: e
                    }
                }
                class Nn {
                    constructor(e) {
                        this.index_ = e
                    }
                    updateChild(e, t, n, i, s, o) {
                        Object(r["f"])(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                        const a = e.getImmediateChild(t);
                        return a.getChild(i).equals(n.getChild(i)) && a.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(En(t, a)) : Object(r["f"])(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(In(t, n)) : o.trackChildChange(kn(t, n, a))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
                    }
                    updateFullNode(e, t, n) {
                        return null != n && (e.isLeafNode() || e.forEachChild(an, (e, i) => {
                            t.hasChild(e) || n.trackChildChange(En(e, i))
                        }), t.isLeafNode() || t.forEachChild(an, (t, i) => {
                            if (e.hasChild(t)) {
                                const s = e.getImmediateChild(t);
                                s.equals(i) || n.trackChildChange(kn(t, i, s))
                            } else n.trackChildChange(In(t, i))
                        })), t.withIndex(this.index_)
                    }
                    updatePriority(e, t) {
                        return e.isEmpty() ? fn.EMPTY_NODE : e.updatePriority(t)
                    }
                    filtersNodes() {
                        return !1
                    }
                    getIndexedFilter() {
                        return this
                    }
                    getIndex() {
                        return this.index_
                    }
                }
                class Pn {
                    constructor(e) {
                        this.indexedFilter_ = new Nn(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = Pn.getStartPost_(e), this.endPost_ = Pn.getEndPost_(e), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
                    }
                    getStartPost() {
                        return this.startPost_
                    }
                    getEndPost() {
                        return this.endPost_
                    }
                    matches(e) {
                        const t = this.startIsInclusive_ ? this.index_.compare(this.getStartPost(), e) <= 0 : this.index_.compare(this.getStartPost(), e) < 0,
                            n = this.endIsInclusive_ ? this.index_.compare(e, this.getEndPost()) <= 0 : this.index_.compare(e, this.getEndPost()) < 0;
                        return t && n
                    }
                    updateChild(e, t, n, i, s, r) {
                        return this.matches(new qt(t, n)) || (n = fn.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, i, s, r)
                    }
                    updateFullNode(e, t, n) {
                        t.isLeafNode() && (t = fn.EMPTY_NODE);
                        let i = t.withIndex(this.index_);
                        i = i.updatePriority(fn.EMPTY_NODE);
                        const s = this;
                        return t.forEachChild(an, (e, t) => {
                            s.matches(new qt(e, t)) || (i = i.updateImmediateChild(e, fn.EMPTY_NODE))
                        }), this.indexedFilter_.updateFullNode(e, i, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.indexedFilter_
                    }
                    getIndex() {
                        return this.index_
                    }
                    static getStartPost_(e) {
                        if (e.hasStart()) {
                            const t = e.getIndexStartName();
                            return e.getIndex().makePost(e.getIndexStartValue(), t)
                        }
                        return e.getIndex().minPost()
                    }
                    static getEndPost_(e) {
                        if (e.hasEnd()) {
                            const t = e.getIndexEndName();
                            return e.getIndex().makePost(e.getIndexEndValue(), t)
                        }
                        return e.getIndex().maxPost()
                    }
                }
                class On {
                    constructor(e) {
                        this.withinDirectionalStart = e => this.reverse_ ? this.withinEndPost(e) : this.withinStartPost(e), this.withinDirectionalEnd = e => this.reverse_ ? this.withinStartPost(e) : this.withinEndPost(e), this.withinStartPost = e => {
                            const t = this.index_.compare(this.rangedFilter_.getStartPost(), e);
                            return this.startIsInclusive_ ? t <= 0 : t < 0
                        }, this.withinEndPost = e => {
                            const t = this.index_.compare(e, this.rangedFilter_.getEndPost());
                            return this.endIsInclusive_ ? t <= 0 : t < 0
                        }, this.rangedFilter_ = new Pn(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft(), this.startIsInclusive_ = !e.startAfterSet_, this.endIsInclusive_ = !e.endBeforeSet_
                    }
                    updateChild(e, t, n, i, s, r) {
                        return this.rangedFilter_.matches(new qt(t, n)) || (n = fn.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, i, s, r) : this.fullLimitUpdateChild_(e, t, n, s, r)
                    }
                    updateFullNode(e, t, n) {
                        let i;
                        if (t.isLeafNode() || t.isEmpty()) i = fn.EMPTY_NODE.withIndex(this.index_);
                        else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                            let e;
                            i = fn.EMPTY_NODE.withIndex(this.index_), e = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                            let n = 0;
                            while (e.hasNext() && n < this.limit_) {
                                const t = e.getNext();
                                if (this.withinDirectionalStart(t)) {
                                    if (!this.withinDirectionalEnd(t)) break;
                                    i = i.updateImmediateChild(t.name, t.node), n++
                                }
                            }
                        } else {
                            let e;
                            i = t.withIndex(this.index_), i = i.updatePriority(fn.EMPTY_NODE), e = this.reverse_ ? i.getReverseIterator(this.index_) : i.getIterator(this.index_);
                            let n = 0;
                            while (e.hasNext()) {
                                const t = e.getNext(),
                                    s = n < this.limit_ && this.withinDirectionalStart(t) && this.withinDirectionalEnd(t);
                                s ? n++ : i = i.updateImmediateChild(t.name, fn.EMPTY_NODE)
                            }
                        }
                        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.rangedFilter_.getIndexedFilter()
                    }
                    getIndex() {
                        return this.index_
                    }
                    fullLimitUpdateChild_(e, t, n, i, s) {
                        let o;
                        if (this.reverse_) {
                            const e = this.index_.getCompare();
                            o = (t, n) => e(n, t)
                        } else o = this.index_.getCompare();
                        const a = e;
                        Object(r["f"])(a.numChildren() === this.limit_, "");
                        const l = new qt(t, n),
                            c = this.reverse_ ? a.getFirstChild(this.index_) : a.getLastChild(this.index_),
                            h = this.rangedFilter_.matches(l);
                        if (a.hasChild(t)) {
                            const e = a.getImmediateChild(t);
                            let r = i.getChildAfterChild(this.index_, c, this.reverse_);
                            while (null != r && (r.name === t || a.hasChild(r.name))) r = i.getChildAfterChild(this.index_, r, this.reverse_);
                            const u = null == r ? 1 : o(r, l),
                                d = h && !n.isEmpty() && u >= 0;
                            if (d) return null != s && s.trackChildChange(kn(t, n, e)), a.updateImmediateChild(t, n); {
                                null != s && s.trackChildChange(En(t, e));
                                const n = a.updateImmediateChild(t, fn.EMPTY_NODE),
                                    i = null != r && this.rangedFilter_.matches(r);
                                return i ? (null != s && s.trackChildChange(In(r.name, r.node)), n.updateImmediateChild(r.name, r.node)) : n
                            }
                        }
                        return n.isEmpty() ? e : h && o(c, l) >= 0 ? (null != s && (s.trackChildChange(En(c.name, c.node)), s.trackChildChange(In(t, n))), a.updateImmediateChild(t, n).updateImmediateChild(c.name, fn.EMPTY_NODE)) : e
                    }
                }
                class xn {
                    constructor() {
                        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = an
                    }
                    hasStart() {
                        return this.startSet_
                    }
                    isViewFromLeft() {
                        return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
                    }
                    getIndexStartValue() {
                        return Object(r["f"])(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                    }
                    getIndexStartName() {
                        return Object(r["f"])(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : x
                    }
                    hasEnd() {
                        return this.endSet_
                    }
                    getIndexEndValue() {
                        return Object(r["f"])(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                    }
                    getIndexEndName() {
                        return Object(r["f"])(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : R
                    }
                    hasLimit() {
                        return this.limitSet_
                    }
                    hasAnchoredLimit() {
                        return this.limitSet_ && "" !== this.viewFrom_
                    }
                    getLimit() {
                        return Object(r["f"])(this.limitSet_, "Only valid if limit has been set"), this.limit_
                    }
                    getIndex() {
                        return this.index_
                    }
                    loadsAllData() {
                        return !(this.startSet_ || this.endSet_ || this.limitSet_)
                    }
                    isDefault() {
                        return this.loadsAllData() && this.index_ === an
                    }
                    copy() {
                        const e = new xn;
                        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.startAfterSet_ = this.startAfterSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.endBeforeSet_ = this.endBeforeSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
                    }
                }

                function Rn(e) {
                    return e.loadsAllData() ? new Nn(e.getIndex()) : e.hasLimit() ? new On(e) : new Pn(e)
                }

                function jn(e, t) {
                    const n = e.copy();
                    return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = "l", n
                }

                function Dn(e, t, n) {
                    const i = e.copy();
                    return i.startSet_ = !0, void 0 === t && (t = null), i.indexStartValue_ = t, null != n ? (i.startNameSet_ = !0, i.indexStartName_ = n) : (i.startNameSet_ = !1, i.indexStartName_ = ""), i
                }

                function An(e, t, n) {
                    let i;
                    return i = e.index_ === Vt || n ? Dn(e, t, n) : Dn(e, t, R), i.startAfterSet_ = !0, i
                }

                function Mn(e, t) {
                    const n = e.copy();
                    return n.index_ = t, n
                }

                function Fn(e) {
                    const t = {};
                    if (e.isDefault()) return t;
                    let n;
                    if (e.index_ === an ? n = "$priority" : e.index_ === bn ? n = "$value" : e.index_ === Vt ? n = "$key" : (Object(r["f"])(e.index_ instanceof Cn, "Unrecognized index type!"), n = e.index_.toString()), t["orderBy"] = Object(r["U"])(n), e.startSet_) {
                        const n = e.startAfterSet_ ? "startAfter" : "startAt";
                        t[n] = Object(r["U"])(e.indexStartValue_), e.startNameSet_ && (t[n] += "," + Object(r["U"])(e.indexStartName_))
                    }
                    if (e.endSet_) {
                        const n = e.endBeforeSet_ ? "endBefore" : "endAt";
                        t[n] = Object(r["U"])(e.indexEndValue_), e.endNameSet_ && (t[n] += "," + Object(r["U"])(e.indexEndName_))
                    }
                    return e.limitSet_ && (e.isViewFromLeft() ? t["limitToFirst"] = e.limit_ : t["limitToLast"] = e.limit_), t
                }

                function qn(e) {
                    const t = {};
                    if (e.startSet_ && (t["sp"] = e.indexStartValue_, e.startNameSet_ && (t["sn"] = e.indexStartName_), t["sin"] = !e.startAfterSet_), e.endSet_ && (t["ep"] = e.indexEndValue_, e.endNameSet_ && (t["en"] = e.indexEndName_), t["ein"] = !e.endBeforeSet_), e.limitSet_) {
                        t["l"] = e.limit_;
                        let n = e.viewFrom_;
                        "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t["vf"] = n
                    }
                    return e.index_ !== an && (t["i"] = e.index_.toString()), t
                }
                class Ln extends st {
                    reportStats(e) {
                        throw new Error("Method not implemented.")
                    }
                    static getListenId_(e, t) {
                        return void 0 !== t ? "tag$" + t : (Object(r["f"])(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
                    }
                    constructor(e, t, n, i) {
                        super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = n, this.appCheckTokenProvider_ = i, this.log_ = I("p:rest:"), this.listens_ = {}
                    }
                    listen(e, t, n, i) {
                        const s = e._path.toString();
                        this.log_("Listen called for " + s + " " + e._queryIdentifier);
                        const o = Ln.getListenId_(e, n),
                            a = {};
                        this.listens_[o] = a;
                        const l = Fn(e._queryParams);
                        this.restRequest_(s + ".json", l, (e, t) => {
                            let l = t;
                            if (404 === e && (l = null, e = null), null === e && this.onDataUpdate_(s, l, !1, n), Object(r["R"])(this.listens_, o) === a) {
                                let t;
                                t = e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", i(t, null)
                            }
                        })
                    }
                    unlisten(e, t) {
                        const n = Ln.getListenId_(e, t);
                        delete this.listens_[n]
                    }
                    get(e) {
                        const t = Fn(e._queryParams),
                            n = e._path.toString(),
                            i = new r["a"];
                        return this.restRequest_(n + ".json", t, (e, t) => {
                            let s = t;
                            404 === e && (s = null, e = null), null === e ? (this.onDataUpdate_(n, s, !1, null), i.resolve(s)) : i.reject(new Error(s))
                        }), i.promise
                    }
                    refreshAuthToken(e) {}
                    restRequest_(e, t = {}, n) {
                        return t["format"] = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then(([i, s]) => {
                            i && i.accessToken && (t["auth"] = i.accessToken), s && s.token && (t["ac"] = s.token);
                            const o = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + Object(r["P"])(t);
                            this.log_("Sending REST request for " + o);
                            const a = new XMLHttpRequest;
                            a.onreadystatechange = () => {
                                if (n && 4 === a.readyState) {
                                    this.log_("REST Response for " + o + " received. status:", a.status, "response:", a.responseText);
                                    let t = null;
                                    if (a.status >= 200 && a.status < 300) {
                                        try {
                                            t = Object(r["M"])(a.responseText)
                                        } catch (e) {
                                            S("Failed to parse JSON response for " + o + ": " + a.responseText)
                                        }
                                        n(null, t)
                                    } else 401 !== a.status && 404 !== a.status && S("Got unsuccessful REST response for " + o + " Status: " + a.status), n(a.status);
                                    n = null
                                }
                            }, a.open("GET", o, !0), a.send()
                        })
                    }
                }
                class Un {
                    constructor() {
                        this.rootNode_ = fn.EMPTY_NODE
                    }
                    getNode(e) {
                        return this.rootNode_.getChild(e)
                    }
                    updateSnapshot(e, t) {
                        this.rootNode_ = this.rootNode_.updateChild(e, t)
                    }
                }

                function Wn() {
                    return {
                        value: null,
                        children: new Map
                    }
                }

                function Vn(e, t, n) {
                    if (vt(t)) e.value = n, e.children.clear();
                    else if (null !== e.value) e.value = e.value.updateChild(t, n);
                    else {
                        const i = ut(t);
                        e.children.has(i) || e.children.set(i, Wn());
                        const s = e.children.get(i);
                        t = _t(t), Vn(s, t, n)
                    }
                }

                function Hn(e, t, n) {
                    null !== e.value ? n(t, e.value) : zn(e, (e, i) => {
                        const s = new ct(t.toString() + "/" + e);
                        Hn(i, s, n)
                    })
                }

                function zn(e, t) {
                    e.children.forEach((e, n) => {
                        t(n, e)
                    })
                }
                class Yn {
                    constructor(e) {
                        this.collection_ = e, this.last_ = null
                    }
                    get() {
                        const e = this.collection_.get(),
                            t = { ...e
                            };
                        return this.last_ && q(this.last_, (e, n) => {
                            t[e] = t[e] - n
                        }), this.last_ = e, t
                    }
                }
                const Bn = 1e4,
                    Kn = 3e4,
                    Qn = 3e5;
                class Gn {
                    constructor(e, t) {
                        this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Yn(e);
                        const n = Bn + (Kn - Bn) * Math.random();
                        G(this.reportStats_.bind(this), Math.floor(n))
                    }
                    reportStats_() {
                        const e = this.statsListener_.get(),
                            t = {};
                        let n = !1;
                        q(e, (e, i) => {
                            i > 0 && Object(r["m"])(this.statsToReport_, e) && (t[e] = i, n = !0)
                        }), n && this.server_.reportStats(t), G(this.reportStats_.bind(this), Math.floor(2 * Math.random() * Qn))
                    }
                }
                var $n;

                function Jn() {
                    return {
                        fromUser: !0,
                        fromServer: !1,
                        queryId: null,
                        tagged: !1
                    }
                }

                function Xn() {
                    return {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1
                    }
                }

                function Zn(e) {
                    return {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: e,
                        tagged: !0
                    }
                }(function(e) {
                    e[e["OVERWRITE"] = 0] = "OVERWRITE", e[e["MERGE"] = 1] = "MERGE", e[e["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE", e[e["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE"
                })($n || ($n = {}));
                class ei {
                    constructor(e, t, n) {
                        this.path = e, this.affectedTree = t, this.revert = n, this.type = $n.ACK_USER_WRITE, this.source = Jn()
                    }
                    operationForChild(e) {
                        if (vt(this.path)) {
                            if (null != this.affectedTree.value) return Object(r["f"])(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; {
                                const t = this.affectedTree.subtree(new ct(e));
                                return new ei(ht(), t, this.revert)
                            }
                        }
                        return Object(r["f"])(ut(this.path) === e, "operationForChild called for unrelated child."), new ei(_t(this.path), this.affectedTree, this.revert)
                    }
                }
                class ti {
                    constructor(e, t) {
                        this.source = e, this.path = t, this.type = $n.LISTEN_COMPLETE
                    }
                    operationForChild(e) {
                        return vt(this.path) ? new ti(this.source, ht()) : new ti(this.source, _t(this.path))
                    }
                }
                class ni {
                    constructor(e, t, n) {
                        this.source = e, this.path = t, this.snap = n, this.type = $n.OVERWRITE
                    }
                    operationForChild(e) {
                        return vt(this.path) ? new ni(this.source, ht(), this.snap.getImmediateChild(e)) : new ni(this.source, _t(this.path), this.snap)
                    }
                }
                class ii {
                    constructor(e, t, n) {
                        this.source = e, this.path = t, this.children = n, this.type = $n.MERGE
                    }
                    operationForChild(e) {
                        if (vt(this.path)) {
                            const t = this.children.subtree(new ct(e));
                            return t.isEmpty() ? null : t.value ? new ni(this.source, ht(), t.value) : new ii(this.source, ht(), t)
                        }
                        return Object(r["f"])(ut(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new ii(this.source, _t(this.path), this.children)
                    }
                    toString() {
                        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                    }
                }
                class si {
                    constructor(e, t, n) {
                        this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
                    }
                    isFullyInitialized() {
                        return this.fullyInitialized_
                    }
                    isFiltered() {
                        return this.filtered_
                    }
                    isCompleteForPath(e) {
                        if (vt(e)) return this.isFullyInitialized() && !this.filtered_;
                        const t = ut(e);
                        return this.isCompleteForChild(t)
                    }
                    isCompleteForChild(e) {
                        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
                    }
                    getNode() {
                        return this.node_
                    }
                }
                class ri {
                    constructor(e) {
                        this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
                    }
                }

                function oi(e, t, n, i) {
                    const s = [],
                        r = [];
                    return t.forEach(t => {
                        "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && r.push(Sn(t.childName, t.snapshotNode))
                    }), ai(e, s, "child_removed", t, i, n), ai(e, s, "child_added", t, i, n), ai(e, s, "child_moved", r, i, n), ai(e, s, "child_changed", t, i, n), ai(e, s, "value", t, i, n), s
                }

                function ai(e, t, n, i, s, r) {
                    const o = i.filter(e => e.type === n);
                    o.sort((t, n) => ci(e, t, n)), o.forEach(n => {
                        const i = li(e, n, r);
                        s.forEach(s => {
                            s.respondsTo(n.type) && t.push(s.createEvent(i, e.query_))
                        })
                    })
                }

                function li(e, t, n) {
                    return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
                }

                function ci(e, t, n) {
                    if (null == t.childName || null == n.childName) throw Object(r["g"])("Should only compare child_ events.");
                    const i = new qt(t.childName, t.snapshotNode),
                        s = new qt(n.childName, n.snapshotNode);
                    return e.index_.compare(i, s)
                }

                function hi(e, t) {
                    return {
                        eventCache: e,
                        serverCache: t
                    }
                }

                function ui(e, t, n, i) {
                    return hi(new si(t, n, i), e.serverCache)
                }

                function di(e, t, n, i) {
                    return hi(e.eventCache, new si(t, n, i))
                }

                function _i(e) {
                    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
                }

                function pi(e) {
                    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
                }
                let fi;
                const mi = () => (fi || (fi = new Bt(D)), fi);
                class gi {
                    static fromObject(e) {
                        let t = new gi(null);
                        return q(e, (e, n) => {
                            t = t.set(new ct(e), n)
                        }), t
                    }
                    constructor(e, t = mi()) {
                        this.value = e, this.children = t
                    }
                    isEmpty() {
                        return null === this.value && this.children.isEmpty()
                    }
                    findRootMostMatchingPathAndValue(e, t) {
                        if (null != this.value && t(this.value)) return {
                            path: ht(),
                            value: this.value
                        };
                        if (vt(e)) return null; {
                            const n = ut(e),
                                i = this.children.get(n);
                            if (null !== i) {
                                const s = i.findRootMostMatchingPathAndValue(_t(e), t);
                                if (null != s) {
                                    const e = yt(new ct(n), s.path);
                                    return {
                                        path: e,
                                        value: s.value
                                    }
                                }
                                return null
                            }
                            return null
                        }
                    }
                    findRootMostValueAndPath(e) {
                        return this.findRootMostMatchingPathAndValue(e, () => !0)
                    }
                    subtree(e) {
                        if (vt(e)) return this; {
                            const t = ut(e),
                                n = this.children.get(t);
                            return null !== n ? n.subtree(_t(e)) : new gi(null)
                        }
                    }
                    set(e, t) {
                        if (vt(e)) return new gi(t, this.children); {
                            const n = ut(e),
                                i = this.children.get(n) || new gi(null),
                                s = i.set(_t(e), t),
                                r = this.children.insert(n, s);
                            return new gi(this.value, r)
                        }
                    }
                    remove(e) {
                        if (vt(e)) return this.children.isEmpty() ? new gi(null) : new gi(null, this.children); {
                            const t = ut(e),
                                n = this.children.get(t);
                            if (n) {
                                const i = n.remove(_t(e));
                                let s;
                                return s = i.isEmpty() ? this.children.remove(t) : this.children.insert(t, i), null === this.value && s.isEmpty() ? new gi(null) : new gi(this.value, s)
                            }
                            return this
                        }
                    }
                    get(e) {
                        if (vt(e)) return this.value; {
                            const t = ut(e),
                                n = this.children.get(t);
                            return n ? n.get(_t(e)) : null
                        }
                    }
                    setTree(e, t) {
                        if (vt(e)) return t; {
                            const n = ut(e),
                                i = this.children.get(n) || new gi(null),
                                s = i.setTree(_t(e), t);
                            let r;
                            return r = s.isEmpty() ? this.children.remove(n) : this.children.insert(n, s), new gi(this.value, r)
                        }
                    }
                    fold(e) {
                        return this.fold_(ht(), e)
                    }
                    fold_(e, t) {
                        const n = {};
                        return this.children.inorderTraversal((i, s) => {
                            n[i] = s.fold_(yt(e, i), t)
                        }), t(e, this.value, n)
                    }
                    findOnPath(e, t) {
                        return this.findOnPath_(e, ht(), t)
                    }
                    findOnPath_(e, t, n) {
                        const i = !!this.value && n(t, this.value);
                        if (i) return i;
                        if (vt(e)) return null; {
                            const i = ut(e),
                                s = this.children.get(i);
                            return s ? s.findOnPath_(_t(e), yt(t, i), n) : null
                        }
                    }
                    foreachOnPath(e, t) {
                        return this.foreachOnPath_(e, ht(), t)
                    }
                    foreachOnPath_(e, t, n) {
                        if (vt(e)) return this; {
                            this.value && n(t, this.value);
                            const i = ut(e),
                                s = this.children.get(i);
                            return s ? s.foreachOnPath_(_t(e), yt(t, i), n) : new gi(null)
                        }
                    }
                    foreach(e) {
                        this.foreach_(ht(), e)
                    }
                    foreach_(e, t) {
                        this.children.inorderTraversal((n, i) => {
                            i.foreach_(yt(e, n), t)
                        }), this.value && t(e, this.value)
                    }
                    foreachChild(e) {
                        this.children.inorderTraversal((t, n) => {
                            n.value && e(t, n.value)
                        })
                    }
                }
                class yi {
                    constructor(e) {
                        this.writeTree_ = e
                    }
                    static empty() {
                        return new yi(new gi(null))
                    }
                }

                function vi(e, t, n) {
                    if (vt(t)) return new yi(new gi(n)); {
                        const i = e.writeTree_.findRootMostValueAndPath(t);
                        if (null != i) {
                            const s = i.path;
                            let r = i.value;
                            const o = Ct(s, t);
                            return r = r.updateChild(o, n), new yi(e.writeTree_.set(s, r))
                        } {
                            const i = new gi(n),
                                s = e.writeTree_.setTree(t, i);
                            return new yi(s)
                        }
                    }
                }

                function Ci(e, t, n) {
                    let i = e;
                    return q(n, (e, n) => {
                        i = vi(i, yt(t, e), n)
                    }), i
                }

                function wi(e, t) {
                    if (vt(t)) return yi.empty(); {
                        const n = e.writeTree_.setTree(t, new gi(null));
                        return new yi(n)
                    }
                }

                function bi(e, t) {
                    return null != Ti(e, t)
                }

                function Ti(e, t) {
                    const n = e.writeTree_.findRootMostValueAndPath(t);
                    return null != n ? e.writeTree_.get(n.path).getChild(Ct(n.path, t)) : null
                }

                function Ii(e) {
                    const t = [],
                        n = e.writeTree_.value;
                    return null != n ? n.isLeafNode() || n.forEachChild(an, (e, n) => {
                        t.push(new qt(e, n))
                    }) : e.writeTree_.children.inorderTraversal((e, n) => {
                        null != n.value && t.push(new qt(e, n.value))
                    }), t
                }

                function Ei(e, t) {
                    if (vt(t)) return e; {
                        const n = Ti(e, t);
                        return new yi(null != n ? new gi(n) : e.writeTree_.subtree(t))
                    }
                }

                function ki(e) {
                    return e.writeTree_.isEmpty()
                }

                function Si(e, t) {
                    return Ni(ht(), e.writeTree_, t)
                }

                function Ni(e, t, n) {
                    if (null != t.value) return n.updateChild(e, t.value); {
                        let i = null;
                        return t.children.inorderTraversal((t, s) => {
                            ".priority" === t ? (Object(r["f"])(null !== s.value, "Priority writes must always be leaf nodes"), i = s.value) : n = Ni(yt(e, t), s, n)
                        }), n.getChild(e).isEmpty() || null === i || (n = n.updateChild(yt(e, ".priority"), i)), n
                    }
                }

                function Pi(e, t) {
                    return Xi(t, e)
                }

                function Oi(e, t, n, i, s) {
                    Object(r["f"])(i > e.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === s && (s = !0), e.allWrites.push({
                        path: t,
                        snap: n,
                        writeId: i,
                        visible: s
                    }), s && (e.visibleWrites = vi(e.visibleWrites, t, n)), e.lastWriteId = i
                }

                function xi(e, t, n, i) {
                    Object(r["f"])(i > e.lastWriteId, "Stacking an older merge on top of newer ones"), e.allWrites.push({
                        path: t,
                        children: n,
                        writeId: i,
                        visible: !0
                    }), e.visibleWrites = Ci(e.visibleWrites, t, n), e.lastWriteId = i
                }

                function Ri(e, t) {
                    for (let n = 0; n < e.allWrites.length; n++) {
                        const i = e.allWrites[n];
                        if (i.writeId === t) return i
                    }
                    return null
                }

                function ji(e, t) {
                    const n = e.allWrites.findIndex(e => e.writeId === t);
                    Object(r["f"])(n >= 0, "removeWrite called with nonexistent writeId.");
                    const i = e.allWrites[n];
                    e.allWrites.splice(n, 1);
                    let s = i.visible,
                        o = !1,
                        a = e.allWrites.length - 1;
                    while (s && a >= 0) {
                        const t = e.allWrites[a];
                        t.visible && (a >= n && Di(t, i.path) ? s = !1 : Tt(i.path, t.path) && (o = !0)), a--
                    }
                    if (s) {
                        if (o) return Ai(e), !0;
                        if (i.snap) e.visibleWrites = wi(e.visibleWrites, i.path);
                        else {
                            const t = i.children;
                            q(t, t => {
                                e.visibleWrites = wi(e.visibleWrites, yt(i.path, t))
                            })
                        }
                        return !0
                    }
                    return !1
                }

                function Di(e, t) {
                    if (e.snap) return Tt(e.path, t);
                    for (const n in e.children)
                        if (e.children.hasOwnProperty(n) && Tt(yt(e.path, n), t)) return !0;
                    return !1
                }

                function Ai(e) {
                    e.visibleWrites = Fi(e.allWrites, Mi, ht()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
                }

                function Mi(e) {
                    return e.visible
                }

                function Fi(e, t, n) {
                    let i = yi.empty();
                    for (let s = 0; s < e.length; ++s) {
                        const o = e[s];
                        if (t(o)) {
                            const e = o.path;
                            let t;
                            if (o.snap) Tt(n, e) ? (t = Ct(n, e), i = vi(i, t, o.snap)) : Tt(e, n) && (t = Ct(e, n), i = vi(i, ht(), o.snap.getChild(t)));
                            else {
                                if (!o.children) throw Object(r["g"])("WriteRecord should have .snap or .children");
                                if (Tt(n, e)) t = Ct(n, e), i = Ci(i, t, o.children);
                                else if (Tt(e, n))
                                    if (t = Ct(e, n), vt(t)) i = Ci(i, ht(), o.children);
                                    else {
                                        const e = Object(r["R"])(o.children, ut(t));
                                        if (e) {
                                            const n = e.getChild(_t(t));
                                            i = vi(i, ht(), n)
                                        }
                                    }
                            }
                        }
                    }
                    return i
                }

                function qi(e, t, n, i, s) {
                    if (i || s) {
                        const r = Ei(e.visibleWrites, t);
                        if (!s && ki(r)) return n;
                        if (s || null != n || bi(r, ht())) {
                            const r = function(e) {
                                    return (e.visible || s) && (!i || !~i.indexOf(e.writeId)) && (Tt(e.path, t) || Tt(t, e.path))
                                },
                                o = Fi(e.allWrites, r, t),
                                a = n || fn.EMPTY_NODE;
                            return Si(o, a)
                        }
                        return null
                    } {
                        const i = Ti(e.visibleWrites, t);
                        if (null != i) return i; {
                            const i = Ei(e.visibleWrites, t);
                            if (ki(i)) return n;
                            if (null != n || bi(i, ht())) {
                                const e = n || fn.EMPTY_NODE;
                                return Si(i, e)
                            }
                            return null
                        }
                    }
                }

                function Li(e, t, n) {
                    let i = fn.EMPTY_NODE;
                    const s = Ti(e.visibleWrites, t);
                    if (s) return s.isLeafNode() || s.forEachChild(an, (e, t) => {
                        i = i.updateImmediateChild(e, t)
                    }), i;
                    if (n) {
                        const s = Ei(e.visibleWrites, t);
                        return n.forEachChild(an, (e, t) => {
                            const n = Si(Ei(s, new ct(e)), t);
                            i = i.updateImmediateChild(e, n)
                        }), Ii(s).forEach(e => {
                            i = i.updateImmediateChild(e.name, e.node)
                        }), i
                    } {
                        const n = Ei(e.visibleWrites, t);
                        return Ii(n).forEach(e => {
                            i = i.updateImmediateChild(e.name, e.node)
                        }), i
                    }
                }

                function Ui(e, t, n, i, s) {
                    Object(r["f"])(i || s, "Either existingEventSnap or existingServerSnap must exist");
                    const o = yt(t, n);
                    if (bi(e.visibleWrites, o)) return null; {
                        const t = Ei(e.visibleWrites, o);
                        return ki(t) ? s.getChild(n) : Si(t, s.getChild(n))
                    }
                }

                function Wi(e, t, n, i) {
                    const s = yt(t, n),
                        r = Ti(e.visibleWrites, s);
                    if (null != r) return r;
                    if (i.isCompleteForChild(n)) {
                        const t = Ei(e.visibleWrites, s);
                        return Si(t, i.getNode().getImmediateChild(n))
                    }
                    return null
                }

                function Vi(e, t) {
                    return Ti(e.visibleWrites, t)
                }

                function Hi(e, t, n, i, s, r, o) {
                    let a;
                    const l = Ei(e.visibleWrites, t),
                        c = Ti(l, ht());
                    if (null != c) a = c;
                    else {
                        if (null == n) return [];
                        a = Si(l, n)
                    }
                    if (a = a.withIndex(o), a.isEmpty() || a.isLeafNode()) return []; {
                        const e = [],
                            t = o.getCompare(),
                            n = r ? a.getReverseIteratorFrom(i, o) : a.getIteratorFrom(i, o);
                        let l = n.getNext();
                        while (l && e.length < s) 0 !== t(l, i) && e.push(l), l = n.getNext();
                        return e
                    }
                }

                function zi() {
                    return {
                        visibleWrites: yi.empty(),
                        allWrites: [],
                        lastWriteId: -1
                    }
                }

                function Yi(e, t, n, i) {
                    return qi(e.writeTree, e.treePath, t, n, i)
                }

                function Bi(e, t) {
                    return Li(e.writeTree, e.treePath, t)
                }

                function Ki(e, t, n, i) {
                    return Ui(e.writeTree, e.treePath, t, n, i)
                }

                function Qi(e, t) {
                    return Vi(e.writeTree, yt(e.treePath, t))
                }

                function Gi(e, t, n, i, s, r) {
                    return Hi(e.writeTree, e.treePath, t, n, i, s, r)
                }

                function $i(e, t, n) {
                    return Wi(e.writeTree, e.treePath, t, n)
                }

                function Ji(e, t) {
                    return Xi(yt(e.treePath, t), e.writeTree)
                }

                function Xi(e, t) {
                    return {
                        treePath: e,
                        writeTree: t
                    }
                }
                class Zi {
                    constructor() {
                        this.changeMap = new Map
                    }
                    trackChildChange(e) {
                        const t = e.type,
                            n = e.childName;
                        Object(r["f"])("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), Object(r["f"])(".priority" !== n, "Only non-priority child changes can be tracked.");
                        const i = this.changeMap.get(n);
                        if (i) {
                            const s = i.type;
                            if ("child_added" === t && "child_removed" === s) this.changeMap.set(n, kn(n, e.snapshotNode, i.snapshotNode));
                            else if ("child_removed" === t && "child_added" === s) this.changeMap.delete(n);
                            else if ("child_removed" === t && "child_changed" === s) this.changeMap.set(n, En(n, i.oldSnap));
                            else if ("child_changed" === t && "child_added" === s) this.changeMap.set(n, In(n, e.snapshotNode));
                            else {
                                if ("child_changed" !== t || "child_changed" !== s) throw Object(r["g"])("Illegal combination of changes: " + e + " occurred after " + i);
                                this.changeMap.set(n, kn(n, e.snapshotNode, i.oldSnap))
                            }
                        } else this.changeMap.set(n, e)
                    }
                    getChanges() {
                        return Array.from(this.changeMap.values())
                    }
                }
                class es {
                    getCompleteChild(e) {
                        return null
                    }
                    getChildAfterChild(e, t, n) {
                        return null
                    }
                }
                const ts = new es;
                class ns {
                    constructor(e, t, n = null) {
                        this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
                    }
                    getCompleteChild(e) {
                        const t = this.viewCache_.eventCache;
                        if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e); {
                            const t = null != this.optCompleteServerCache_ ? new si(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                            return $i(this.writes_, e, t)
                        }
                    }
                    getChildAfterChild(e, t, n) {
                        const i = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : pi(this.viewCache_),
                            s = Gi(this.writes_, i, t, 1, n, e);
                        return 0 === s.length ? null : s[0]
                    }
                }

                function is(e) {
                    return {
                        filter: e
                    }
                }

                function ss(e, t) {
                    Object(r["f"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()), "Event snap not indexed"), Object(r["f"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()), "Server snap not indexed")
                }

                function rs(e, t, n, i, s) {
                    const o = new Zi;
                    let a, l;
                    if (n.type === $n.OVERWRITE) {
                        const c = n;
                        c.source.fromUser ? a = cs(e, t, c.path, c.snap, i, s, o) : (Object(r["f"])(c.source.fromServer, "Unknown source."), l = c.source.tagged || t.serverCache.isFiltered() && !vt(c.path), a = ls(e, t, c.path, c.snap, i, s, l, o))
                    } else if (n.type === $n.MERGE) {
                        const c = n;
                        c.source.fromUser ? a = us(e, t, c.path, c.children, i, s, o) : (Object(r["f"])(c.source.fromServer, "Unknown source."), l = c.source.tagged || t.serverCache.isFiltered(), a = _s(e, t, c.path, c.children, i, s, l, o))
                    } else if (n.type === $n.ACK_USER_WRITE) {
                        const r = n;
                        a = r.revert ? ms(e, t, r.path, i, s, o) : ps(e, t, r.path, r.affectedTree, i, s, o)
                    } else {
                        if (n.type !== $n.LISTEN_COMPLETE) throw Object(r["g"])("Unknown operation type: " + n.type);
                        a = fs(e, t, n.path, i, o)
                    }
                    const c = o.getChanges();
                    return os(t, a, c), {
                        viewCache: a,
                        changes: c
                    }
                }

                function os(e, t, n) {
                    const i = t.eventCache;
                    if (i.isFullyInitialized()) {
                        const s = i.getNode().isLeafNode() || i.getNode().isEmpty(),
                            r = _i(e);
                        (n.length > 0 || !e.eventCache.isFullyInitialized() || s && !i.getNode().equals(r) || !i.getNode().getPriority().equals(r.getPriority())) && n.push(Tn(_i(t)))
                    }
                }

                function as(e, t, n, i, s, o) {
                    const a = t.eventCache;
                    if (null != Qi(i, n)) return t; {
                        let l, c;
                        if (vt(n))
                            if (Object(r["f"])(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered()) {
                                const n = pi(t),
                                    s = n instanceof fn ? n : fn.EMPTY_NODE,
                                    r = Bi(i, s);
                                l = e.filter.updateFullNode(t.eventCache.getNode(), r, o)
                            } else {
                                const n = Yi(i, pi(t));
                                l = e.filter.updateFullNode(t.eventCache.getNode(), n, o)
                            }
                        else {
                            const h = ut(n);
                            if (".priority" === h) {
                                Object(r["f"])(1 === dt(n), "Can't have a priority with additional path components");
                                const s = a.getNode();
                                c = t.serverCache.getNode();
                                const o = Ki(i, n, s, c);
                                l = null != o ? e.filter.updatePriority(s, o) : a.getNode()
                            } else {
                                const r = _t(n);
                                let u;
                                if (a.isCompleteForChild(h)) {
                                    c = t.serverCache.getNode();
                                    const e = Ki(i, n, a.getNode(), c);
                                    u = null != e ? a.getNode().getImmediateChild(h).updateChild(r, e) : a.getNode().getImmediateChild(h)
                                } else u = $i(i, h, t.serverCache);
                                l = null != u ? e.filter.updateChild(a.getNode(), h, u, r, s, o) : a.getNode()
                            }
                        }
                        return ui(t, l, a.isFullyInitialized() || vt(n), e.filter.filtersNodes())
                    }
                }

                function ls(e, t, n, i, s, r, o, a) {
                    const l = t.serverCache;
                    let c;
                    const h = o ? e.filter : e.filter.getIndexedFilter();
                    if (vt(n)) c = h.updateFullNode(l.getNode(), i, null);
                    else if (h.filtersNodes() && !l.isFiltered()) {
                        const e = l.getNode().updateChild(n, i);
                        c = h.updateFullNode(l.getNode(), e, null)
                    } else {
                        const e = ut(n);
                        if (!l.isCompleteForPath(n) && dt(n) > 1) return t;
                        const s = _t(n),
                            r = l.getNode().getImmediateChild(e),
                            o = r.updateChild(s, i);
                        c = ".priority" === e ? h.updatePriority(l.getNode(), o) : h.updateChild(l.getNode(), e, o, s, ts, null)
                    }
                    const u = di(t, c, l.isFullyInitialized() || vt(n), h.filtersNodes()),
                        d = new ns(s, u, r);
                    return as(e, u, n, s, d, a)
                }

                function cs(e, t, n, i, s, r, o) {
                    const a = t.eventCache;
                    let l, c;
                    const h = new ns(s, t, r);
                    if (vt(n)) c = e.filter.updateFullNode(t.eventCache.getNode(), i, o), l = ui(t, c, !0, e.filter.filtersNodes());
                    else {
                        const s = ut(n);
                        if (".priority" === s) c = e.filter.updatePriority(t.eventCache.getNode(), i), l = ui(t, c, a.isFullyInitialized(), a.isFiltered());
                        else {
                            const r = _t(n),
                                c = a.getNode().getImmediateChild(s);
                            let u;
                            if (vt(r)) u = i;
                            else {
                                const e = h.getCompleteChild(s);
                                u = null != e ? ".priority" === pt(r) && e.getChild(gt(r)).isEmpty() ? e : e.updateChild(r, i) : fn.EMPTY_NODE
                            }
                            if (c.equals(u)) l = t;
                            else {
                                const n = e.filter.updateChild(a.getNode(), s, u, r, h, o);
                                l = ui(t, n, a.isFullyInitialized(), e.filter.filtersNodes())
                            }
                        }
                    }
                    return l
                }

                function hs(e, t) {
                    return e.eventCache.isCompleteForChild(t)
                }

                function us(e, t, n, i, s, r, o) {
                    let a = t;
                    return i.foreach((i, l) => {
                        const c = yt(n, i);
                        hs(t, ut(c)) && (a = cs(e, a, c, l, s, r, o))
                    }), i.foreach((i, l) => {
                        const c = yt(n, i);
                        hs(t, ut(c)) || (a = cs(e, a, c, l, s, r, o))
                    }), a
                }

                function ds(e, t, n) {
                    return n.foreach((e, n) => {
                        t = t.updateChild(e, n)
                    }), t
                }

                function _s(e, t, n, i, s, r, o, a) {
                    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
                    let l, c = t;
                    l = vt(n) ? i : new gi(null).setTree(n, i);
                    const h = t.serverCache.getNode();
                    return l.children.inorderTraversal((n, i) => {
                        if (h.hasChild(n)) {
                            const l = t.serverCache.getNode().getImmediateChild(n),
                                h = ds(e, l, i);
                            c = ls(e, c, new ct(n), h, s, r, o, a)
                        }
                    }), l.children.inorderTraversal((n, i) => {
                        const l = !t.serverCache.isCompleteForChild(n) && null === i.value;
                        if (!h.hasChild(n) && !l) {
                            const l = t.serverCache.getNode().getImmediateChild(n),
                                h = ds(e, l, i);
                            c = ls(e, c, new ct(n), h, s, r, o, a)
                        }
                    }), c
                }

                function ps(e, t, n, i, s, r, o) {
                    if (null != Qi(s, n)) return t;
                    const a = t.serverCache.isFiltered(),
                        l = t.serverCache;
                    if (null != i.value) {
                        if (vt(n) && l.isFullyInitialized() || l.isCompleteForPath(n)) return ls(e, t, n, l.getNode().getChild(n), s, r, a, o);
                        if (vt(n)) {
                            let i = new gi(null);
                            return l.getNode().forEachChild(Vt, (e, t) => {
                                i = i.set(new ct(e), t)
                            }), _s(e, t, n, i, s, r, a, o)
                        }
                        return t
                    } {
                        let c = new gi(null);
                        return i.foreach((e, t) => {
                            const i = yt(n, e);
                            l.isCompleteForPath(i) && (c = c.set(e, l.getNode().getChild(i)))
                        }), _s(e, t, n, c, s, r, a, o)
                    }
                }

                function fs(e, t, n, i, s) {
                    const r = t.serverCache,
                        o = di(t, r.getNode(), r.isFullyInitialized() || vt(n), r.isFiltered());
                    return as(e, o, n, i, ts, s)
                }

                function ms(e, t, n, i, s, o) {
                    let a;
                    if (null != Qi(i, n)) return t; {
                        const l = new ns(i, t, s),
                            c = t.eventCache.getNode();
                        let h;
                        if (vt(n) || ".priority" === ut(n)) {
                            let n;
                            if (t.serverCache.isFullyInitialized()) n = Yi(i, pi(t));
                            else {
                                const e = t.serverCache.getNode();
                                Object(r["f"])(e instanceof fn, "serverChildren would be complete if leaf node"), n = Bi(i, e)
                            }
                            n = n, h = e.filter.updateFullNode(c, n, o)
                        } else {
                            const s = ut(n);
                            let r = $i(i, s, t.serverCache);
                            null == r && t.serverCache.isCompleteForChild(s) && (r = c.getImmediateChild(s)), h = null != r ? e.filter.updateChild(c, s, r, _t(n), l, o) : t.eventCache.getNode().hasChild(s) ? e.filter.updateChild(c, s, fn.EMPTY_NODE, _t(n), l, o) : c, h.isEmpty() && t.serverCache.isFullyInitialized() && (a = Yi(i, pi(t)), a.isLeafNode() && (h = e.filter.updateFullNode(h, a, o)))
                        }
                        return a = t.serverCache.isFullyInitialized() || null != Qi(i, ht()), ui(t, h, a, e.filter.filtersNodes())
                    }
                }
                class gs {
                    constructor(e, t) {
                        this.query_ = e, this.eventRegistrations_ = [];
                        const n = this.query_._queryParams,
                            i = new Nn(n.getIndex()),
                            s = Rn(n);
                        this.processor_ = is(s);
                        const r = t.serverCache,
                            o = t.eventCache,
                            a = i.updateFullNode(fn.EMPTY_NODE, r.getNode(), null),
                            l = s.updateFullNode(fn.EMPTY_NODE, o.getNode(), null),
                            c = new si(a, r.isFullyInitialized(), i.filtersNodes()),
                            h = new si(l, o.isFullyInitialized(), s.filtersNodes());
                        this.viewCache_ = hi(h, c), this.eventGenerator_ = new ri(this.query_)
                    }
                    get query() {
                        return this.query_
                    }
                }

                function ys(e) {
                    return e.viewCache_.serverCache.getNode()
                }

                function vs(e) {
                    return _i(e.viewCache_)
                }

                function Cs(e, t) {
                    const n = pi(e.viewCache_);
                    return n && (e.query._queryParams.loadsAllData() || !vt(t) && !n.getImmediateChild(ut(t)).isEmpty()) ? n.getChild(t) : null
                }

                function ws(e) {
                    return 0 === e.eventRegistrations_.length
                }

                function bs(e, t) {
                    e.eventRegistrations_.push(t)
                }

                function Ts(e, t, n) {
                    const i = [];
                    if (n) {
                        Object(r["f"])(null == t, "A cancel should cancel all event registrations.");
                        const s = e.query._path;
                        e.eventRegistrations_.forEach(e => {
                            const t = e.createCancelEvent(n, s);
                            t && i.push(t)
                        })
                    }
                    if (t) {
                        let n = [];
                        for (let i = 0; i < e.eventRegistrations_.length; ++i) {
                            const s = e.eventRegistrations_[i];
                            if (s.matches(t)) {
                                if (t.hasAnyCallback()) {
                                    n = n.concat(e.eventRegistrations_.slice(i + 1));
                                    break
                                }
                            } else n.push(s)
                        }
                        e.eventRegistrations_ = n
                    } else e.eventRegistrations_ = [];
                    return i
                }

                function Is(e, t, n, i) {
                    t.type === $n.MERGE && null !== t.source.queryId && (Object(r["f"])(pi(e.viewCache_), "We should always have a full cache before handling merges"), Object(r["f"])(_i(e.viewCache_), "Missing event cache, even though we have a server cache"));
                    const s = e.viewCache_,
                        o = rs(e.processor_, s, t, n, i);
                    return ss(e.processor_, o.viewCache), Object(r["f"])(o.viewCache.serverCache.isFullyInitialized() || !s.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), e.viewCache_ = o.viewCache, ks(e, o.changes, o.viewCache.eventCache.getNode(), null)
                }

                function Es(e, t) {
                    const n = e.viewCache_.eventCache,
                        i = [];
                    if (!n.getNode().isLeafNode()) {
                        const e = n.getNode();
                        e.forEachChild(an, (e, t) => {
                            i.push(In(e, t))
                        })
                    }
                    return n.isFullyInitialized() && i.push(Tn(n.getNode())), ks(e, i, n.getNode(), t)
                }

                function ks(e, t, n, i) {
                    const s = i ? [i] : e.eventRegistrations_;
                    return oi(e.eventGenerator_, t, n, s)
                }
                let Ss, Ns;
                class Ps {
                    constructor() {
                        this.views = new Map
                    }
                }

                function Os(e) {
                    Object(r["f"])(!Ss, "__referenceConstructor has already been defined"), Ss = e
                }

                function xs() {
                    return Object(r["f"])(Ss, "Reference.ts has not been loaded"), Ss
                }

                function Rs(e) {
                    return 0 === e.views.size
                }

                function js(e, t, n, i) {
                    const s = t.source.queryId;
                    if (null !== s) {
                        const o = e.views.get(s);
                        return Object(r["f"])(null != o, "SyncTree gave us an op for an invalid query."), Is(o, t, n, i)
                    } {
                        let s = [];
                        for (const r of e.views.values()) s = s.concat(Is(r, t, n, i));
                        return s
                    }
                }

                function Ds(e, t, n, i, s) {
                    const r = t._queryIdentifier,
                        o = e.views.get(r);
                    if (!o) {
                        let e = Yi(n, s ? i : null),
                            r = !1;
                        e ? r = !0 : i instanceof fn ? (e = Bi(n, i), r = !1) : (e = fn.EMPTY_NODE, r = !1);
                        const o = hi(new si(e, r, !1), new si(i, s, !1));
                        return new gs(t, o)
                    }
                    return o
                }

                function As(e, t, n, i, s, r) {
                    const o = Ds(e, t, i, s, r);
                    return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o), bs(o, n), Es(o, n)
                }

                function Ms(e, t, n, i) {
                    const s = t._queryIdentifier,
                        r = [];
                    let o = [];
                    const a = Ws(e);
                    if ("default" === s)
                        for (const [l, c] of e.views.entries()) o = o.concat(Ts(c, n, i)), ws(c) && (e.views.delete(l), c.query._queryParams.loadsAllData() || r.push(c.query));
                    else {
                        const t = e.views.get(s);
                        t && (o = o.concat(Ts(t, n, i)), ws(t) && (e.views.delete(s), t.query._queryParams.loadsAllData() || r.push(t.query)))
                    }
                    return a && !Ws(e) && r.push(new(xs())(t._repo, t._path)), {
                        removed: r,
                        events: o
                    }
                }

                function Fs(e) {
                    const t = [];
                    for (const n of e.views.values()) n.query._queryParams.loadsAllData() || t.push(n);
                    return t
                }

                function qs(e, t) {
                    let n = null;
                    for (const i of e.views.values()) n = n || Cs(i, t);
                    return n
                }

                function Ls(e, t) {
                    const n = t._queryParams;
                    if (n.loadsAllData()) return Vs(e); {
                        const n = t._queryIdentifier;
                        return e.views.get(n)
                    }
                }

                function Us(e, t) {
                    return null != Ls(e, t)
                }

                function Ws(e) {
                    return null != Vs(e)
                }

                function Vs(e) {
                    for (const t of e.views.values())
                        if (t.query._queryParams.loadsAllData()) return t;
                    return null
                }

                function Hs(e) {
                    Object(r["f"])(!Ns, "__referenceConstructor has already been defined"), Ns = e
                }

                function zs() {
                    return Object(r["f"])(Ns, "Reference.ts has not been loaded"), Ns
                }
                let Ys = 1;
                class Bs {
                    constructor(e) {
                        this.listenProvider_ = e, this.syncPointTree_ = new gi(null), this.pendingWriteTree_ = zi(), this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                    }
                }

                function Ks(e, t, n, i, s) {
                    return Oi(e.pendingWriteTree_, t, n, i, s), s ? or(e, new ni(Jn(), t, n)) : []
                }

                function Qs(e, t, n, i) {
                    xi(e.pendingWriteTree_, t, n, i);
                    const s = gi.fromObject(n);
                    return or(e, new ii(Jn(), t, s))
                }

                function Gs(e, t, n = !1) {
                    const i = Ri(e.pendingWriteTree_, t),
                        s = ji(e.pendingWriteTree_, t);
                    if (s) {
                        let t = new gi(null);
                        return null != i.snap ? t = t.set(ht(), !0) : q(i.children, e => {
                            t = t.set(new ct(e), !0)
                        }), or(e, new ei(i.path, t, n))
                    }
                    return []
                }

                function $s(e, t, n) {
                    return or(e, new ni(Xn(), t, n))
                }

                function Js(e, t, n) {
                    const i = gi.fromObject(n);
                    return or(e, new ii(Xn(), t, i))
                }

                function Xs(e, t) {
                    return or(e, new ti(Xn(), t))
                }

                function Zs(e, t, n) {
                    const i = dr(e, n);
                    if (i) {
                        const n = _r(i),
                            s = n.path,
                            r = n.queryId,
                            o = Ct(s, t),
                            a = new ti(Zn(r), o);
                        return pr(e, s, a)
                    }
                    return []
                }

                function er(e, t, n, i, s = !1) {
                    const r = t._path,
                        o = e.syncPointTree_.get(r);
                    let a = [];
                    if (o && ("default" === t._queryIdentifier || Us(o, t))) {
                        const l = Ms(o, t, n, i);
                        Rs(o) && (e.syncPointTree_ = e.syncPointTree_.remove(r));
                        const c = l.removed;
                        if (a = l.events, !s) {
                            const n = -1 !== c.findIndex(e => e._queryParams.loadsAllData()),
                                s = e.syncPointTree_.findOnPath(r, (e, t) => Ws(t));
                            if (n && !s) {
                                const t = e.syncPointTree_.subtree(r);
                                if (!t.isEmpty()) {
                                    const n = fr(t);
                                    for (let t = 0; t < n.length; ++t) {
                                        const i = n[t],
                                            s = i.query,
                                            r = cr(e, i);
                                        e.listenProvider_.startListening(mr(s), hr(e, s), r.hashFn, r.onComplete)
                                    }
                                }
                            }
                            if (!s && c.length > 0 && !i)
                                if (n) {
                                    const n = null;
                                    e.listenProvider_.stopListening(mr(t), n)
                                } else c.forEach(t => {
                                    const n = e.queryToTagMap.get(ur(t));
                                    e.listenProvider_.stopListening(mr(t), n)
                                })
                        }
                        gr(e, c)
                    }
                    return a
                }

                function tr(e, t, n, i) {
                    const s = dr(e, i);
                    if (null != s) {
                        const i = _r(s),
                            r = i.path,
                            o = i.queryId,
                            a = Ct(r, t),
                            l = new ni(Zn(o), a, n);
                        return pr(e, r, l)
                    }
                    return []
                }

                function nr(e, t, n, i) {
                    const s = dr(e, i);
                    if (s) {
                        const i = _r(s),
                            r = i.path,
                            o = i.queryId,
                            a = Ct(r, t),
                            l = gi.fromObject(n),
                            c = new ii(Zn(o), a, l);
                        return pr(e, r, c)
                    }
                    return []
                }

                function ir(e, t, n, i = !1) {
                    const s = t._path;
                    let o = null,
                        a = !1;
                    e.syncPointTree_.foreachOnPath(s, (e, t) => {
                        const n = Ct(e, s);
                        o = o || qs(t, n), a = a || Ws(t)
                    });
                    let l, c = e.syncPointTree_.get(s);
                    if (c ? (a = a || Ws(c), o = o || qs(c, ht())) : (c = new Ps, e.syncPointTree_ = e.syncPointTree_.set(s, c)), null != o) l = !0;
                    else {
                        l = !1, o = fn.EMPTY_NODE;
                        const t = e.syncPointTree_.subtree(s);
                        t.foreachChild((e, t) => {
                            const n = qs(t, ht());
                            n && (o = o.updateImmediateChild(e, n))
                        })
                    }
                    const h = Us(c, t);
                    if (!h && !t._queryParams.loadsAllData()) {
                        const n = ur(t);
                        Object(r["f"])(!e.queryToTagMap.has(n), "View does not exist, but we have a tag");
                        const i = yr();
                        e.queryToTagMap.set(n, i), e.tagToQueryMap.set(i, n)
                    }
                    const u = Pi(e.pendingWriteTree_, s);
                    let d = As(c, t, n, u, o, l);
                    if (!h && !a && !i) {
                        const n = Ls(c, t);
                        d = d.concat(vr(e, t, n))
                    }
                    return d
                }

                function sr(e, t, n) {
                    const i = !0,
                        s = e.pendingWriteTree_,
                        r = e.syncPointTree_.findOnPath(t, (e, n) => {
                            const i = Ct(e, t),
                                s = qs(n, i);
                            if (s) return s
                        });
                    return qi(s, t, r, n, i)
                }

                function rr(e, t) {
                    const n = t._path;
                    let i = null;
                    e.syncPointTree_.foreachOnPath(n, (e, t) => {
                        const s = Ct(e, n);
                        i = i || qs(t, s)
                    });
                    let s = e.syncPointTree_.get(n);
                    s ? i = i || qs(s, ht()) : (s = new Ps, e.syncPointTree_ = e.syncPointTree_.set(n, s));
                    const r = null != i,
                        o = r ? new si(i, !0, !1) : null,
                        a = Pi(e.pendingWriteTree_, t._path),
                        l = Ds(s, t, a, r ? o.getNode() : fn.EMPTY_NODE, r);
                    return vs(l)
                }

                function or(e, t) {
                    return ar(t, e.syncPointTree_, null, Pi(e.pendingWriteTree_, ht()))
                }

                function ar(e, t, n, i) {
                    if (vt(e.path)) return lr(e, t, n, i); {
                        const s = t.get(ht());
                        null == n && null != s && (n = qs(s, ht()));
                        let r = [];
                        const o = ut(e.path),
                            a = e.operationForChild(o),
                            l = t.children.get(o);
                        if (l && a) {
                            const e = n ? n.getImmediateChild(o) : null,
                                t = Ji(i, o);
                            r = r.concat(ar(a, l, e, t))
                        }
                        return s && (r = r.concat(js(s, e, i, n))), r
                    }
                }

                function lr(e, t, n, i) {
                    const s = t.get(ht());
                    null == n && null != s && (n = qs(s, ht()));
                    let r = [];
                    return t.children.inorderTraversal((t, s) => {
                        const o = n ? n.getImmediateChild(t) : null,
                            a = Ji(i, t),
                            l = e.operationForChild(t);
                        l && (r = r.concat(lr(l, s, o, a)))
                    }), s && (r = r.concat(js(s, e, i, n))), r
                }

                function cr(e, t) {
                    const n = t.query,
                        i = hr(e, n);
                    return {
                        hashFn: () => {
                            const e = ys(t) || fn.EMPTY_NODE;
                            return e.hash()
                        },
                        onComplete: t => {
                            if ("ok" === t) return i ? Zs(e, n._path, i) : Xs(e, n._path); {
                                const i = V(t, n);
                                return er(e, n, null, i)
                            }
                        }
                    }
                }

                function hr(e, t) {
                    const n = ur(t);
                    return e.queryToTagMap.get(n)
                }

                function ur(e) {
                    return e._path.toString() + "$" + e._queryIdentifier
                }

                function dr(e, t) {
                    return e.tagToQueryMap.get(t)
                }

                function _r(e) {
                    const t = e.indexOf("$");
                    return Object(r["f"])(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                        queryId: e.substr(t + 1),
                        path: new ct(e.substr(0, t))
                    }
                }

                function pr(e, t, n) {
                    const i = e.syncPointTree_.get(t);
                    Object(r["f"])(i, "Missing sync point for query tag that we're tracking");
                    const s = Pi(e.pendingWriteTree_, t);
                    return js(i, n, s, null)
                }

                function fr(e) {
                    return e.fold((e, t, n) => {
                        if (t && Ws(t)) {
                            const e = Vs(t);
                            return [e]
                        } {
                            let e = [];
                            return t && (e = Fs(t)), q(n, (t, n) => {
                                e = e.concat(n)
                            }), e
                        }
                    })
                }

                function mr(e) {
                    return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? new(zs())(e._repo, e._path) : e
                }

                function gr(e, t) {
                    for (let n = 0; n < t.length; ++n) {
                        const i = t[n];
                        if (!i._queryParams.loadsAllData()) {
                            const t = ur(i),
                                n = e.queryToTagMap.get(t);
                            e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n)
                        }
                    }
                }

                function yr() {
                    return Ys++
                }

                function vr(e, t, n) {
                    const i = t._path,
                        s = hr(e, t),
                        o = cr(e, n),
                        a = e.listenProvider_.startListening(mr(t), s, o.hashFn, o.onComplete),
                        l = e.syncPointTree_.subtree(i);
                    if (s) Object(r["f"])(!Ws(l.value), "If we're adding a query, it shouldn't be shadowed");
                    else {
                        const t = l.fold((e, t, n) => {
                            if (!vt(e) && t && Ws(t)) return [Vs(t).query]; {
                                let e = [];
                                return t && (e = e.concat(Fs(t).map(e => e.query))), q(n, (t, n) => {
                                    e = e.concat(n)
                                }), e
                            }
                        });
                        for (let n = 0; n < t.length; ++n) {
                            const i = t[n];
                            e.listenProvider_.stopListening(mr(i), hr(e, i))
                        }
                    }
                    return a
                }
                class Cr {
                    constructor(e) {
                        this.node_ = e
                    }
                    getImmediateChild(e) {
                        const t = this.node_.getImmediateChild(e);
                        return new Cr(t)
                    }
                    node() {
                        return this.node_
                    }
                }
                class wr {
                    constructor(e, t) {
                        this.syncTree_ = e, this.path_ = t
                    }
                    getImmediateChild(e) {
                        const t = yt(this.path_, e);
                        return new wr(this.syncTree_, t)
                    }
                    node() {
                        return sr(this.syncTree_, this.path_)
                    }
                }
                const br = function(e) {
                        return e = e || {}, e["timestamp"] = e["timestamp"] || (new Date).getTime(), e
                    },
                    Tr = function(e, t, n) {
                        return e && "object" === typeof e ? (Object(r["f"])(".sv" in e, "Unexpected leaf node or priority contents"), "string" === typeof e[".sv"] ? Ir(e[".sv"], t, n) : "object" === typeof e[".sv"] ? Er(e[".sv"], t) : void Object(r["f"])(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e
                    },
                    Ir = function(e, t, n) {
                        switch (e) {
                            case "timestamp":
                                return n["timestamp"];
                            default:
                                Object(r["f"])(!1, "Unexpected server value: " + e)
                        }
                    },
                    Er = function(e, t, n) {
                        e.hasOwnProperty("increment") || Object(r["f"])(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
                        const i = e["increment"];
                        "number" !== typeof i && Object(r["f"])(!1, "Unexpected increment value: " + i);
                        const s = t.node();
                        if (Object(r["f"])(null !== s && "undefined" !== typeof s, "Expected ChildrenNode.EMPTY_NODE for nulls"), !s.isLeafNode()) return i;
                        const o = s,
                            a = o.getValue();
                        return "number" !== typeof a ? i : a + i
                    },
                    kr = function(e, t, n, i) {
                        return Nr(t, new wr(n, e), i)
                    },
                    Sr = function(e, t, n) {
                        return Nr(e, new Cr(t), n)
                    };

                function Nr(e, t, n) {
                    const i = e.getPriority().val(),
                        s = Tr(i, t.getImmediateChild(".priority"), n);
                    let r;
                    if (e.isLeafNode()) {
                        const i = e,
                            r = Tr(i.getValue(), t, n);
                        return r !== i.getValue() || s !== i.getPriority().val() ? new nn(r, vn(s)) : e
                    } {
                        const i = e;
                        return r = i, s !== i.getPriority().val() && (r = r.updatePriority(new nn(s))), i.forEachChild(an, (e, i) => {
                            const s = Nr(i, t.getImmediateChild(e), n);
                            s !== i && (r = r.updateImmediateChild(e, s))
                        }), r
                    }
                }
                class Pr {
                    constructor(e = "", t = null, n = {
                        children: {},
                        childCount: 0
                    }) {
                        this.name = e, this.parent = t, this.node = n
                    }
                }

                function Or(e, t) {
                    let n = t instanceof ct ? t : new ct(t),
                        i = e,
                        s = ut(n);
                    while (null !== s) {
                        const e = Object(r["R"])(i.node.children, s) || {
                            children: {},
                            childCount: 0
                        };
                        i = new Pr(s, i, e), n = _t(n), s = ut(n)
                    }
                    return i
                }

                function xr(e) {
                    return e.node.value
                }

                function Rr(e, t) {
                    e.node.value = t, Lr(e)
                }

                function jr(e) {
                    return e.node.childCount > 0
                }

                function Dr(e) {
                    return void 0 === xr(e) && !jr(e)
                }

                function Ar(e, t) {
                    q(e.node.children, (n, i) => {
                        t(new Pr(n, e, i))
                    })
                }

                function Mr(e, t, n, i) {
                    n && !i && t(e), Ar(e, e => {
                        Mr(e, t, !0, i)
                    }), n && i && t(e)
                }

                function Fr(e, t, n) {
                    let i = n ? e : e.parent;
                    while (null !== i) {
                        if (t(i)) return !0;
                        i = i.parent
                    }
                    return !1
                }

                function qr(e) {
                    return new ct(null === e.parent ? e.name : qr(e.parent) + "/" + e.name)
                }

                function Lr(e) {
                    null !== e.parent && Ur(e.parent, e.name, e)
                }

                function Ur(e, t, n) {
                    const i = Dr(n),
                        s = Object(r["m"])(e.node.children, t);
                    i && s ? (delete e.node.children[t], e.node.childCount--, Lr(e)) : i || s || (e.node.children[t] = n.node, e.node.childCount++, Lr(e))
                }
                const Wr = /[\[\].#$\/\u0000-\u001F\u007F]/,
                    Vr = /[\[\].#$\u0000-\u001F\u007F]/,
                    Hr = 10485760,
                    zr = function(e) {
                        return "string" === typeof e && 0 !== e.length && !Wr.test(e)
                    },
                    Yr = function(e) {
                        return "string" === typeof e && 0 !== e.length && !Vr.test(e)
                    },
                    Br = function(e) {
                        return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Yr(e)
                    },
                    Kr = function(e) {
                        return null === e || "string" === typeof e || "number" === typeof e && !P(e) || e && "object" === typeof e && Object(r["m"])(e, ".sv")
                    },
                    Qr = function(e, t, n, i) {
                        i && void 0 === t || Gr(Object(r["r"])(e, "value"), t, n)
                    },
                    Gr = function(e, t, n) {
                        const i = n instanceof ct ? new It(n, e) : n;
                        if (void 0 === t) throw new Error(e + "contains undefined " + Nt(i));
                        if ("function" === typeof t) throw new Error(e + "contains a function " + Nt(i) + " with contents = " + t.toString());
                        if (P(t)) throw new Error(e + "contains " + t.toString() + " " + Nt(i));
                        if ("string" === typeof t && t.length > Hr / 3 && Object(r["S"])(t) > Hr) throw new Error(e + "contains a string greater than " + Hr + " utf8 bytes " + Nt(i) + " ('" + t.substring(0, 50) + "...')");
                        if (t && "object" === typeof t) {
                            let n = !1,
                                s = !1;
                            if (q(t, (t, r) => {
                                    if (".value" === t) n = !0;
                                    else if (".priority" !== t && ".sv" !== t && (s = !0, !zr(t))) throw new Error(e + " contains an invalid key (" + t + ") " + Nt(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                    Et(i, t), Gr(e, r, i), kt(i)
                                }), n && s) throw new Error(e + ' contains ".value" child ' + Nt(i) + " in addition to actual children.")
                        }
                    },
                    $r = function(e, t) {
                        let n, i;
                        for (n = 0; n < t.length; n++) {
                            i = t[n];
                            const s = mt(i);
                            for (let t = 0; t < s.length; t++)
                                if (".priority" === s[t] && t === s.length - 1);
                                else if (!zr(s[t])) throw new Error(e + "contains an invalid key (" + s[t] + ") in path " + i.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
                        }
                        t.sort(wt);
                        let s = null;
                        for (n = 0; n < t.length; n++) {
                            if (i = t[n], null !== s && Tt(s, i)) throw new Error(e + "contains a path " + s.toString() + " that is ancestor of another path " + i.toString());
                            s = i
                        }
                    },
                    Jr = function(e, t, n, i) {
                        if (i && void 0 === t) return;
                        const s = Object(r["r"])(e, "values");
                        if (!t || "object" !== typeof t || Array.isArray(t)) throw new Error(s + " must be an object containing the children to replace.");
                        const o = [];
                        q(t, (e, t) => {
                            const i = new ct(e);
                            if (Gr(s, t, yt(n, i)), ".priority" === pt(i) && !Kr(t)) throw new Error(s + "contains an invalid value for '" + i.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                            o.push(i)
                        }), $r(s, o)
                    },
                    Xr = function(e, t, n, i) {
                        if ((!i || void 0 !== n) && !zr(n)) throw new Error(Object(r["r"])(e, t) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
                    },
                    Zr = function(e, t, n, i) {
                        if ((!i || void 0 !== n) && !Yr(n)) throw new Error(Object(r["r"])(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                    },
                    eo = function(e, t, n, i) {
                        n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), Zr(e, t, n, i)
                    },
                    to = function(e, t) {
                        if (".info" === ut(t)) throw new Error(e + " failed = Can't modify data under /.info/")
                    },
                    no = function(e, t) {
                        const n = t.path.toString();
                        if ("string" !== typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !zr(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && !Br(n)) throw new Error(Object(r["r"])(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                    };
                class io {
                    constructor() {
                        this.eventLists_ = [], this.recursionDepth_ = 0
                    }
                }

                function so(e, t) {
                    let n = null;
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i],
                            r = s.getPath();
                        null === n || bt(r, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
                            events: [],
                            path: r
                        }), n.events.push(s)
                    }
                    n && e.eventLists_.push(n)
                }

                function ro(e, t, n) {
                    so(e, n), ao(e, e => bt(e, t))
                }

                function oo(e, t, n) {
                    so(e, n), ao(e, e => Tt(e, t) || Tt(t, e))
                }

                function ao(e, t) {
                    e.recursionDepth_++;
                    let n = !0;
                    for (let i = 0; i < e.eventLists_.length; i++) {
                        const s = e.eventLists_[i];
                        if (s) {
                            const r = s.path;
                            t(r) ? (lo(e.eventLists_[i]), e.eventLists_[i] = null) : n = !1
                        }
                    }
                    n && (e.eventLists_ = []), e.recursionDepth_--
                }

                function lo(e) {
                    for (let t = 0; t < e.events.length; t++) {
                        const n = e.events[t];
                        if (null !== n) {
                            e.events[t] = null;
                            const i = n.getEventRunner();
                            C && T("event: " + n.toString()), K(i)
                        }
                    }
                }
                const co = "repo_interrupt",
                    ho = 25;
                class uo {
                    constructor(e, t, n, i) {
                        this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = i, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new io, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Wn(), this.transactionQueueTree_ = new Pr, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
                    }
                    toString() {
                        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                    }
                }

                function _o(e, t, n) {
                    if (e.stats_ = me(e.repoInfo_), e.forceRestClient_ || Q()) e.server_ = new Ln(e.repoInfo_, (t, n, i, s) => {
                        mo(e, t, n, i, s)
                    }, e.authTokenProvider_, e.appCheckProvider_), setTimeout(() => go(e, !0), 0);
                    else {
                        if ("undefined" !== typeof n && null !== n) {
                            if ("object" !== typeof n) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                Object(r["U"])(n)
                            } catch (i) {
                                throw new Error("Invalid authOverride provided: " + i)
                            }
                        }
                        e.persistentConnection_ = new Ft(e.repoInfo_, t, (t, n, i, s) => {
                            mo(e, t, n, i, s)
                        }, t => {
                            go(e, t)
                        }, t => {
                            yo(e, t)
                        }, e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
                    }
                    e.authTokenProvider_.addTokenChangeListener(t => {
                        e.server_.refreshAuthToken(t)
                    }), e.appCheckProvider_.addTokenChangeListener(t => {
                        e.server_.refreshAppCheckToken(t.token)
                    }), e.statsReporter_ = ge(e.repoInfo_, () => new Gn(e.stats_, e.server_)), e.infoData_ = new Un, e.infoSyncTree_ = new Bs({
                        startListening: (t, n, i, s) => {
                            let r = [];
                            const o = e.infoData_.getNode(t._path);
                            return o.isEmpty() || (r = $s(e.infoSyncTree_, t._path, o), setTimeout(() => {
                                s("ok")
                            }, 0)), r
                        },
                        stopListening: () => {}
                    }), vo(e, "connected", !1), e.serverSyncTree_ = new Bs({
                        startListening: (t, n, i, s) => (e.server_.listen(t, i, n, (n, i) => {
                            const r = s(n, i);
                            oo(e.eventQueue_, t._path, r)
                        }), []),
                        stopListening: (t, n) => {
                            e.server_.unlisten(t, n)
                        }
                    })
                }

                function po(e) {
                    const t = e.infoData_.getNode(new ct(".info/serverTimeOffset")),
                        n = t.val() || 0;
                    return (new Date).getTime() + n
                }

                function fo(e) {
                    return br({
                        timestamp: po(e)
                    })
                }

                function mo(e, t, n, i, s) {
                    e.dataUpdateCount++;
                    const o = new ct(t);
                    n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
                    let a = [];
                    if (s)
                        if (i) {
                            const t = Object(r["N"])(n, e => vn(e));
                            a = nr(e.serverSyncTree_, o, t, s)
                        } else {
                            const t = vn(n);
                            a = tr(e.serverSyncTree_, o, t, s)
                        }
                    else if (i) {
                        const t = Object(r["N"])(n, e => vn(e));
                        a = Js(e.serverSyncTree_, o, t)
                    } else {
                        const t = vn(n);
                        a = $s(e.serverSyncTree_, o, t)
                    }
                    let l = o;
                    a.length > 0 && (l = jo(e, o)), oo(e.eventQueue_, l, a)
                }

                function go(e, t) {
                    vo(e, "connected", t), !1 === t && Io(e)
                }

                function yo(e, t) {
                    q(t, (t, n) => {
                        vo(e, t, n)
                    })
                }

                function vo(e, t, n) {
                    const i = new ct("/.info/" + t),
                        s = vn(n);
                    e.infoData_.updateSnapshot(i, s);
                    const r = $s(e.infoSyncTree_, i, s);
                    oo(e.eventQueue_, i, r)
                }

                function Co(e) {
                    return e.nextWriteId_++
                }

                function wo(e, t, n) {
                    const i = rr(e.serverSyncTree_, t);
                    return null != i ? Promise.resolve(i) : e.server_.get(t).then(i => {
                        const s = vn(i).withIndex(t._queryParams.getIndex());
                        let r;
                        if (ir(e.serverSyncTree_, t, n, !0), t._queryParams.loadsAllData()) r = $s(e.serverSyncTree_, t._path, s);
                        else {
                            const n = hr(e.serverSyncTree_, t);
                            r = tr(e.serverSyncTree_, t._path, s, n)
                        }
                        return oo(e.eventQueue_, t._path, r), er(e.serverSyncTree_, t, n, null, !0), s
                    }, n => (No(e, "get for query " + Object(r["U"])(t) + " failed: " + n), Promise.reject(new Error(n))))
                }

                function bo(e, t, n, i, s) {
                    No(e, "set", {
                        path: t.toString(),
                        value: n,
                        priority: i
                    });
                    const r = fo(e),
                        o = vn(n, i),
                        a = sr(e.serverSyncTree_, t),
                        l = Sr(o, a, r),
                        c = Co(e),
                        h = Ks(e.serverSyncTree_, t, l, c, !0);
                    so(e.eventQueue_, h), e.server_.put(t.toString(), o.val(!0), (n, i) => {
                        const r = "ok" === n;
                        r || S("set at " + t + " failed: " + n);
                        const o = Gs(e.serverSyncTree_, c, !r);
                        oo(e.eventQueue_, t, o), Po(e, s, n, i)
                    });
                    const u = Lo(e, t);
                    jo(e, u), oo(e.eventQueue_, u, [])
                }

                function To(e, t, n, i) {
                    No(e, "update", {
                        path: t.toString(),
                        value: n
                    });
                    let s = !0;
                    const r = fo(e),
                        o = {};
                    if (q(n, (n, i) => {
                            s = !1, o[n] = kr(yt(t, n), vn(i), e.serverSyncTree_, r)
                        }), s) T("update() called with empty data.  Don't do anything."), Po(e, i, "ok", void 0);
                    else {
                        const s = Co(e),
                            r = Qs(e.serverSyncTree_, t, o, s);
                        so(e.eventQueue_, r), e.server_.merge(t.toString(), n, (n, r) => {
                            const o = "ok" === n;
                            o || S("update at " + t + " failed: " + n);
                            const a = Gs(e.serverSyncTree_, s, !o),
                                l = a.length > 0 ? jo(e, t) : t;
                            oo(e.eventQueue_, l, a), Po(e, i, n, r)
                        }), q(n, n => {
                            const i = Lo(e, yt(t, n));
                            jo(e, i)
                        }), oo(e.eventQueue_, t, [])
                    }
                }

                function Io(e) {
                    No(e, "onDisconnectEvents");
                    const t = fo(e),
                        n = Wn();
                    Hn(e.onDisconnect_, ht(), (i, s) => {
                        const r = kr(i, s, e.serverSyncTree_, t);
                        Vn(n, i, r)
                    });
                    let i = [];
                    Hn(n, ht(), (t, n) => {
                        i = i.concat($s(e.serverSyncTree_, t, n));
                        const s = Lo(e, t);
                        jo(e, s)
                    }), e.onDisconnect_ = Wn(), oo(e.eventQueue_, ht(), i)
                }

                function Eo(e, t, n) {
                    let i;
                    i = ".info" === ut(t._path) ? ir(e.infoSyncTree_, t, n) : ir(e.serverSyncTree_, t, n), ro(e.eventQueue_, t._path, i)
                }

                function ko(e, t, n) {
                    let i;
                    i = ".info" === ut(t._path) ? er(e.infoSyncTree_, t, n) : er(e.serverSyncTree_, t, n), ro(e.eventQueue_, t._path, i)
                }

                function So(e) {
                    e.persistentConnection_ && e.persistentConnection_.interrupt(co)
                }

                function No(e, ...t) {
                    let n = "";
                    e.persistentConnection_ && (n = e.persistentConnection_.id + ":"), T(n, ...t)
                }

                function Po(e, t, n, i) {
                    t && K(() => {
                        if ("ok" === n) t(null);
                        else {
                            const e = (n || "error").toUpperCase();
                            let s = e;
                            i && (s += ": " + i);
                            const r = new Error(s);
                            r.code = e, t(r)
                        }
                    })
                }

                function Oo(e, t, n) {
                    return sr(e.serverSyncTree_, t, n) || fn.EMPTY_NODE
                }

                function xo(e, t = e.transactionQueueTree_) {
                    if (t || qo(e, t), xr(t)) {
                        const n = Mo(e, t);
                        Object(r["f"])(n.length > 0, "Sending zero length transaction queue");
                        const i = n.every(e => 0 === e.status);
                        i && Ro(e, qr(t), n)
                    } else jr(t) && Ar(t, t => {
                        xo(e, t)
                    })
                }

                function Ro(e, t, n) {
                    const i = n.map(e => e.currentWriteId),
                        s = Oo(e, t, i);
                    let o = s;
                    const a = s.hash();
                    for (let h = 0; h < n.length; h++) {
                        const e = n[h];
                        Object(r["f"])(0 === e.status, "tryToSendTransactionQueue_: items in queue should all be run."), e.status = 1, e.retryCount++;
                        const i = Ct(t, e.path);
                        o = o.updateChild(i, e.currentOutputSnapshotRaw)
                    }
                    const l = o.val(!0),
                        c = t;
                    e.server_.put(c.toString(), l, i => {
                        No(e, "transaction put response", {
                            path: c.toString(),
                            status: i
                        });
                        let s = [];
                        if ("ok" === i) {
                            const i = [];
                            for (let t = 0; t < n.length; t++) n[t].status = 2, s = s.concat(Gs(e.serverSyncTree_, n[t].currentWriteId)), n[t].onComplete && i.push(() => n[t].onComplete(null, !0, n[t].currentOutputSnapshotResolved)), n[t].unwatcher();
                            qo(e, Or(e.transactionQueueTree_, t)), xo(e, e.transactionQueueTree_), oo(e.eventQueue_, t, s);
                            for (let e = 0; e < i.length; e++) K(i[e])
                        } else {
                            if ("datastale" === i)
                                for (let e = 0; e < n.length; e++) 3 === n[e].status ? n[e].status = 4 : n[e].status = 0;
                            else {
                                S("transaction at " + c.toString() + " failed: " + i);
                                for (let e = 0; e < n.length; e++) n[e].status = 4, n[e].abortReason = i
                            }
                            jo(e, t)
                        }
                    }, a)
                }

                function jo(e, t) {
                    const n = Ao(e, t),
                        i = qr(n),
                        s = Mo(e, n);
                    return Do(e, s, i), i
                }

                function Do(e, t, n) {
                    if (0 === t.length) return;
                    const i = [];
                    let s = [];
                    const o = t.filter(e => 0 === e.status),
                        a = o.map(e => e.currentWriteId);
                    for (let l = 0; l < t.length; l++) {
                        const o = t[l],
                            c = Ct(n, o.path);
                        let h, u = !1;
                        if (Object(r["f"])(null !== c, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === o.status) u = !0, h = o.abortReason, s = s.concat(Gs(e.serverSyncTree_, o.currentWriteId, !0));
                        else if (0 === o.status)
                            if (o.retryCount >= ho) u = !0, h = "maxretry", s = s.concat(Gs(e.serverSyncTree_, o.currentWriteId, !0));
                            else {
                                const n = Oo(e, o.path, a);
                                o.currentInputSnapshot = n;
                                const i = t[l].update(n.val());
                                if (void 0 !== i) {
                                    Gr("transaction failed: Data returned ", i, o.path);
                                    let t = vn(i);
                                    const l = "object" === typeof i && null != i && Object(r["m"])(i, ".priority");
                                    l || (t = t.updatePriority(n.getPriority()));
                                    const c = o.currentWriteId,
                                        h = fo(e),
                                        u = Sr(t, n, h);
                                    o.currentOutputSnapshotRaw = t, o.currentOutputSnapshotResolved = u, o.currentWriteId = Co(e), a.splice(a.indexOf(c), 1), s = s.concat(Ks(e.serverSyncTree_, o.path, u, o.currentWriteId, o.applyLocally)), s = s.concat(Gs(e.serverSyncTree_, c, !0))
                                } else u = !0, h = "nodata", s = s.concat(Gs(e.serverSyncTree_, o.currentWriteId, !0))
                            }
                        oo(e.eventQueue_, n, s), s = [], u && (t[l].status = 2, function(e) {
                            setTimeout(e, Math.floor(0))
                        }(t[l].unwatcher), t[l].onComplete && ("nodata" === h ? i.push(() => t[l].onComplete(null, !1, t[l].currentInputSnapshot)) : i.push(() => t[l].onComplete(new Error(h), !1, null))))
                    }
                    qo(e, e.transactionQueueTree_);
                    for (let r = 0; r < i.length; r++) K(i[r]);
                    xo(e, e.transactionQueueTree_)
                }

                function Ao(e, t) {
                    let n, i = e.transactionQueueTree_;
                    n = ut(t);
                    while (null !== n && void 0 === xr(i)) i = Or(i, n), t = _t(t), n = ut(t);
                    return i
                }

                function Mo(e, t) {
                    const n = [];
                    return Fo(e, t, n), n.sort((e, t) => e.order - t.order), n
                }

                function Fo(e, t, n) {
                    const i = xr(t);
                    if (i)
                        for (let s = 0; s < i.length; s++) n.push(i[s]);
                    Ar(t, t => {
                        Fo(e, t, n)
                    })
                }

                function qo(e, t) {
                    const n = xr(t);
                    if (n) {
                        let e = 0;
                        for (let t = 0; t < n.length; t++) 2 !== n[t].status && (n[e] = n[t], e++);
                        n.length = e, Rr(t, n.length > 0 ? n : void 0)
                    }
                    Ar(t, t => {
                        qo(e, t)
                    })
                }

                function Lo(e, t) {
                    const n = qr(Ao(e, t)),
                        i = Or(e.transactionQueueTree_, t);
                    return Fr(i, t => {
                        Uo(e, t)
                    }), Uo(e, i), Mr(i, t => {
                        Uo(e, t)
                    }), n
                }

                function Uo(e, t) {
                    const n = xr(t);
                    if (n) {
                        const i = [];
                        let s = [],
                            o = -1;
                        for (let t = 0; t < n.length; t++) 3 === n[t].status || (1 === n[t].status ? (Object(r["f"])(o === t - 1, "All SENT items should be at beginning of queue."), o = t, n[t].status = 3, n[t].abortReason = "set") : (Object(r["f"])(0 === n[t].status, "Unexpected transaction status in abort"), n[t].unwatcher(), s = s.concat(Gs(e.serverSyncTree_, n[t].currentWriteId, !0)), n[t].onComplete && i.push(n[t].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === o ? Rr(t, void 0) : n.length = o + 1, oo(e.eventQueue_, qr(t), s);
                        for (let e = 0; e < i.length; e++) K(i[e])
                    }
                }

                function Wo(e) {
                    let t = "";
                    const n = e.split("/");
                    for (let s = 0; s < n.length; s++)
                        if (n[s].length > 0) {
                            let e = n[s];
                            try {
                                e = decodeURIComponent(e.replace(/\+/g, " "))
                            } catch (i) {}
                            t += "/" + e
                        }
                    return t
                }

                function Vo(e) {
                    const t = {};
                    "?" === e.charAt(0) && (e = e.substring(1));
                    for (const n of e.split("&")) {
                        if (0 === n.length) continue;
                        const i = n.split("=");
                        2 === i.length ? t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]) : S(`Invalid query segment '${n}' in query '${e}'`)
                    }
                    return t
                }
                const Ho = function(e, t) {
                        const n = zo(e),
                            i = n.namespace;
                        "firebase.com" === n.domain && k(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), i && "undefined" !== i || "localhost" === n.domain || k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || N();
                        const s = "ws" === n.scheme || "wss" === n.scheme;
                        return {
                            repoInfo: new he(n.host, n.secure, i, s, t, "", i !== n.subdomain),
                            path: new ct(n.pathString)
                        }
                    },
                    zo = function(e) {
                        let t = "",
                            n = "",
                            i = "",
                            s = "",
                            r = "",
                            o = !0,
                            a = "https",
                            l = 443;
                        if ("string" === typeof e) {
                            let c = e.indexOf("//");
                            c >= 0 && (a = e.substring(0, c - 1), e = e.substring(c + 2));
                            let h = e.indexOf("/"); - 1 === h && (h = e.length);
                            let u = e.indexOf("?"); - 1 === u && (u = e.length), t = e.substring(0, Math.min(h, u)), h < u && (s = Wo(e.substring(h, u)));
                            const d = Vo(e.substring(Math.min(e.length, u)));
                            c = t.indexOf(":"), c >= 0 ? (o = "https" === a || "wss" === a, l = parseInt(t.substring(c + 1), 10)) : c = t.length;
                            const _ = t.slice(0, c);
                            if ("localhost" === _.toLowerCase()) n = "localhost";
                            else if (_.split(".").length <= 2) n = _;
                            else {
                                const e = t.indexOf(".");
                                i = t.substring(0, e).toLowerCase(), n = t.substring(e + 1), r = i
                            }
                            "ns" in d && (r = d["ns"])
                        }
                        return {
                            host: t,
                            port: l,
                            domain: n,
                            subdomain: i,
                            secure: o,
                            scheme: a,
                            pathString: s,
                            namespace: r
                        }
                    },
                    Yo = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
                (function() {
                    let e = 0;
                    const t = []
                })();
                class Bo {
                    constructor(e, t, n, i) {
                        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = i
                    }
                    getPath() {
                        const e = this.snapshot.ref;
                        return "value" === this.eventType ? e._path : e.parent._path
                    }
                    getEventType() {
                        return this.eventType
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.getPath().toString() + ":" + this.eventType + ":" + Object(r["U"])(this.snapshot.exportVal())
                    }
                }
                class Ko {
                    constructor(e, t, n) {
                        this.eventRegistration = e, this.error = t, this.path = n
                    }
                    getPath() {
                        return this.path
                    }
                    getEventType() {
                        return "cancel"
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.path.toString() + ":cancel"
                    }
                }
                class Qo {
                    constructor(e, t) {
                        this.snapshotCallback = e, this.cancelCallback = t
                    }
                    onValue(e, t) {
                        this.snapshotCallback.call(null, e, t)
                    }
                    onCancel(e) {
                        return Object(r["f"])(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
                    }
                    get hasCancelCallback() {
                        return !!this.cancelCallback
                    }
                    matches(e) {
                        return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
                    }
                }
                class Go {
                    constructor(e, t, n, i) {
                        this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = i
                    }
                    get key() {
                        return vt(this._path) ? null : pt(this._path)
                    }
                    get ref() {
                        return new Zo(this._repo, this._path)
                    }
                    get _queryIdentifier() {
                        const e = qn(this._queryParams),
                            t = M(e);
                        return "{}" === t ? "default" : t
                    }
                    get _queryObject() {
                        return qn(this._queryParams)
                    }
                    isEqual(e) {
                        if (e = Object(r["x"])(e), !(e instanceof Go)) return !1;
                        const t = this._repo === e._repo,
                            n = bt(this._path, e._path),
                            i = this._queryIdentifier === e._queryIdentifier;
                        return t && n && i
                    }
                    toJSON() {
                        return this.toString()
                    }
                    toString() {
                        return this._repo.toString() + ft(this._path)
                    }
                }

                function $o(e, t) {
                    if (!0 === e._orderByCalled) throw new Error(t + ": You can't combine multiple orderBy calls.")
                }

                function Jo(e) {
                    let t = null,
                        n = null;
                    if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === Vt) {
                        const i = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                            s = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
                        if (e.hasStart()) {
                            const n = e.getIndexStartName();
                            if (n !== x) throw new Error(i);
                            if ("string" !== typeof t) throw new Error(s)
                        }
                        if (e.hasEnd()) {
                            const t = e.getIndexEndName();
                            if (t !== R) throw new Error(i);
                            if ("string" !== typeof n) throw new Error(s)
                        }
                    } else if (e.getIndex() === an) {
                        if (null != t && !Kr(t) || null != n && !Kr(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")
                    } else if (Object(r["f"])(e.getIndex() instanceof Cn || e.getIndex() === bn, "unknown index type."), null != t && "object" === typeof t || null != n && "object" === typeof n) throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")
                }

                function Xo(e) {
                    if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")
                }
                class Zo extends Go {
                    constructor(e, t) {
                        super(e, t, new xn, !1)
                    }
                    get parent() {
                        const e = gt(this._path);
                        return null === e ? null : new Zo(this._repo, e)
                    }
                    get root() {
                        let e = this;
                        while (null !== e.parent) e = e.parent;
                        return e
                    }
                }
                class ea {
                    constructor(e, t, n) {
                        this._node = e, this.ref = t, this._index = n
                    }
                    get priority() {
                        return this._node.getPriority().val()
                    }
                    get key() {
                        return this.ref.key
                    }
                    get size() {
                        return this._node.numChildren()
                    }
                    child(e) {
                        const t = new ct(e),
                            n = na(this.ref, e);
                        return new ea(this._node.getChild(t), n, an)
                    }
                    exists() {
                        return !this._node.isEmpty()
                    }
                    exportVal() {
                        return this._node.val(!0)
                    }
                    forEach(e) {
                        if (this._node.isLeafNode()) return !1;
                        const t = this._node;
                        return !!t.forEachChild(this._index, (t, n) => e(new ea(n, na(this.ref, t), an)))
                    }
                    hasChild(e) {
                        const t = new ct(e);
                        return !this._node.getChild(t).isEmpty()
                    }
                    hasChildren() {
                        return !this._node.isLeafNode() && !this._node.isEmpty()
                    }
                    toJSON() {
                        return this.exportVal()
                    }
                    val() {
                        return this._node.val()
                    }
                }

                function ta(e, t) {
                    return e = Object(r["x"])(e), e._checkNotDeleted("ref"), void 0 !== t ? na(e._root, t) : e._root
                }

                function na(e, t) {
                    return e = Object(r["x"])(e), null === ut(e._path) ? eo("child", "path", t, !1) : Zr("child", "path", t, !1), new Zo(e._repo, yt(e._path, t))
                }

                function ia(e) {
                    return to("remove", e._path), sa(e, null)
                }

                function sa(e, t) {
                    e = Object(r["x"])(e), to("set", e._path), Qr("set", t, e._path, !1);
                    const n = new r["a"];
                    return bo(e._repo, e._path, t, null, n.wrapCallback(() => {})), n.promise
                }

                function ra(e, t) {
                    Jr("update", t, e._path, !1);
                    const n = new r["a"];
                    return To(e._repo, e._path, t, n.wrapCallback(() => {})), n.promise
                }

                function oa(e) {
                    e = Object(r["x"])(e);
                    const t = new Qo(() => {}),
                        n = new aa(t);
                    return wo(e._repo, e, n).then(t => new ea(t, new Zo(e._repo, e._path), e._queryParams.getIndex()))
                }
                class aa {
                    constructor(e) {
                        this.callbackContext = e
                    }
                    respondsTo(e) {
                        return "value" === e
                    }
                    createEvent(e, t) {
                        const n = t._queryParams.getIndex();
                        return new Bo("value", this, new ea(e.snapshotNode, new Zo(t._repo, t._path), n))
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
                    }
                    createCancelEvent(e, t) {
                        return this.callbackContext.hasCancelCallback ? new Ko(this, e, t) : null
                    }
                    matches(e) {
                        return e instanceof aa && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
                    }
                    hasAnyCallback() {
                        return null !== this.callbackContext
                    }
                }
                class la {
                    constructor(e, t) {
                        this.eventType = e, this.callbackContext = t
                    }
                    respondsTo(e) {
                        let t = "children_added" === e ? "child_added" : e;
                        return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
                    }
                    createCancelEvent(e, t) {
                        return this.callbackContext.hasCancelCallback ? new Ko(this, e, t) : null
                    }
                    createEvent(e, t) {
                        Object(r["f"])(null != e.childName, "Child events should have a childName.");
                        const n = na(new Zo(t._repo, t._path), e.childName),
                            i = t._queryParams.getIndex();
                        return new Bo(e.type, this, new ea(e.snapshotNode, n, i), e.prevName)
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
                    }
                    matches(e) {
                        return e instanceof la && (this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)))
                    }
                    hasAnyCallback() {
                        return !!this.callbackContext
                    }
                }

                function ca(e, t, n, i, s) {
                    let r;
                    if ("object" === typeof i && (r = void 0, s = i), "function" === typeof i && (r = i), s && s.onlyOnce) {
                        const t = n,
                            i = (n, i) => {
                                ko(e._repo, e, a), t(n, i)
                            };
                        i.userCallback = n.userCallback, i.context = n.context, n = i
                    }
                    const o = new Qo(n, r || void 0),
                        a = "value" === t ? new aa(o) : new la(t, o);
                    return Eo(e._repo, e, a), () => ko(e._repo, e, a)
                }

                function ha(e, t, n, i) {
                    return ca(e, "value", t, n, i)
                }
                class ua {}
                class da extends ua {
                    constructor(e, t) {
                        super(), this._value = e, this._key = t, this.type = "startAfter"
                    }
                    _apply(e) {
                        Qr("startAfter", this._value, e._path, !1);
                        const t = An(e._queryParams, this._value, this._key);
                        if (Xo(t), Jo(t), e._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
                        return new Go(e._repo, e._path, t, e._orderByCalled)
                    }
                }

                function _a(e, t) {
                    return Xr("startAfter", "key", t, !0), new da(e, t)
                }
                class pa extends ua {
                    constructor(e) {
                        super(), this._limit = e, this.type = "limitToFirst"
                    }
                    _apply(e) {
                        if (e._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
                        return new Go(e._repo, e._path, jn(e._queryParams, this._limit), e._orderByCalled)
                    }
                }

                function fa(e) {
                    if ("number" !== typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToFirst: First argument must be a positive integer.");
                    return new pa(e)
                }
                class ma extends ua {
                    constructor() {
                        super(...arguments), this.type = "orderByKey"
                    }
                    _apply(e) {
                        $o(e, "orderByKey");
                        const t = Mn(e._queryParams, Vt);
                        return Jo(t), new Go(e._repo, e._path, t, !0)
                    }
                }

                function ga() {
                    return new ma
                }

                function ya(e, ...t) {
                    let n = Object(r["x"])(e);
                    for (const i of t) n = i._apply(n);
                    return n
                }
                Os(Zo), Hs(Zo);
                const va = "FIREBASE_DATABASE_EMULATOR_HOST",
                    Ca = {};
                let wa = !1;

                function ba(e, t, n, i) {
                    const s = t.lastIndexOf(":"),
                        o = t.substring(0, s),
                        a = Object(r["C"])(o);
                    e.repoInfo_ = new he(t, a, e.repoInfo_.namespace, e.repoInfo_.webSocketOnly, e.repoInfo_.nodeAdmin, e.repoInfo_.persistenceKey, e.repoInfo_.includeNamespaceInQueryParams, !0, n), i && (e.authTokenProvider_ = i)
                }

                function Ta(t, n, i, s, r) {
                    let o = s || t.options.databaseURL;
                    void 0 === o && (t.options.projectId || k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), T("Using default host for project ", t.options.projectId), o = t.options.projectId + "-default-rtdb.firebaseio.com");
                    let a, l = Ho(o, r),
                        c = l.repoInfo,
                        h = void 0;
                    "undefined" !== typeof e && Object({
                        NODE_ENV: "production",
                        VUE_APP_ANALYZER_MODE: "disabled",
                        VUE_APP_DEVTOOLS: "disabled",
                        VUE_APP_PWA_MODE: "enabled",
                        BASE_URL: "/"
                    }) && (h = Object({
                        NODE_ENV: "production",
                        VUE_APP_ANALYZER_MODE: "disabled",
                        VUE_APP_DEVTOOLS: "disabled",
                        VUE_APP_PWA_MODE: "enabled",
                        BASE_URL: "/"
                    })[va]), h ? (a = !0, o = `http://${h}?ns=${c.namespace}`, l = Ho(o, r), c = l.repoInfo) : a = !l.repoInfo.secure;
                    const u = r && a ? new X(X.OWNER) : new J(t.name, t.options, n);
                    no("Invalid Firebase Database URL", l), vt(l.path) || k("Database URL must point to the root of a Firebase Database (not including a child path).");
                    const d = Ea(c, t, u, new $(t, i));
                    return new ka(d, t)
                }

                function Ia(e, t) {
                    const n = Ca[t];
                    n && n[e.key] === e || k(`Database ${t}(${e.repoInfo_}) has already been deleted.`), So(e), delete n[e.key]
                }

                function Ea(e, t, n, i) {
                    let s = Ca[t.name];
                    s || (s = {}, Ca[t.name] = s);
                    let r = s[e.toURLString()];
                    return r && k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new uo(e, wa, n, i), s[e.toURLString()] = r, r
                }
                class ka {
                    constructor(e, t) {
                        this._repoInternal = e, this.app = t, this["type"] = "database", this._instanceStarted = !1
                    }
                    get _repo() {
                        return this._instanceStarted || (_o(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]), this._instanceStarted = !0), this._repoInternal
                    }
                    get _root() {
                        return this._rootInternal || (this._rootInternal = new Zo(this._repo, ht())), this._rootInternal
                    }
                    _delete() {
                        return null !== this._rootInternal && (Ia(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve()
                    }
                    _checkNotDeleted(e) {
                        null === this._rootInternal && k("Cannot call " + e + " on a deleted database.")
                    }
                }

                function Sa(e = Object(i["e"])(), t) {
                    const n = Object(i["b"])(e, "database").getImmediate({
                        identifier: t
                    });
                    if (!n._instanceStarted) {
                        const e = Object(r["v"])("database");
                        e && Na(n, ...e)
                    }
                    return n
                }

                function Na(e, t, n, i = {}) {
                    e = Object(r["x"])(e), e._checkNotDeleted("useEmulator");
                    const s = `${t}:${n}`,
                        o = e._repoInternal;
                    if (e._instanceStarted) {
                        if (s === e._repoInternal.repoInfo_.host && Object(r["q"])(i, o.repoInfo_.emulatorOptions)) return;
                        k("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")
                    }
                    let a = void 0;
                    if (o.repoInfo_.nodeAdmin) i.mockUserToken && k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), a = new X(X.OWNER);
                    else if (i.mockUserToken) {
                        const t = "string" === typeof i.mockUserToken ? i.mockUserToken : Object(r["n"])(i.mockUserToken, e.app.options.projectId);
                        a = new X(t)
                    }
                    Object(r["C"])(t) && Object(r["O"])(t), ba(o, s, i, a)
                }

                function Pa(e) {
                    h(i["a"]), Object(i["d"])(new s["a"]("database", (e, {
                        instanceIdentifier: t
                    }) => {
                        const n = e.getProvider("app").getImmediate(),
                            i = e.getProvider("auth-internal"),
                            s = e.getProvider("app-check-internal");
                        return Ta(n, i, s, t)
                    }, "PUBLIC").setMultipleInstances(!0)), Object(i["g"])(a, l, e), Object(i["g"])(a, l, "esm2020")
                }
                Ft.prototype.simpleListen = function(e, t) {
                    this.sendRequest("q", {
                        p: e
                    }, t)
                }, Ft.prototype.echo = function(e, t) {
                    this.sendRequest("echo", {
                        d: e
                    }, t)
                };
                Pa()
            }).call(this, n("4362"))
        }
    }
]);