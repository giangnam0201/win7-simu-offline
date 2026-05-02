(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-9691fd08"], {
        "0916": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            const r = () => {}
        },
        "1d25": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            }));
            const r = (e, t) => t.some(t => e instanceof t);
            let i, o;

            function s() {
                return i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
            }

            function a() {
                return o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
            }
            const c = new WeakMap,
                u = new WeakMap,
                h = new WeakMap,
                l = new WeakMap,
                f = new WeakMap;

            function d(e) {
                const t = new Promise((t, n) => {
                    const r = () => {
                            e.removeEventListener("success", i), e.removeEventListener("error", o)
                        },
                        i = () => {
                            t(_(e.result)), r()
                        },
                        o = () => {
                            n(e.error), r()
                        };
                    e.addEventListener("success", i), e.addEventListener("error", o)
                });
                return t.then(t => {
                    t instanceof IDBCursor && c.set(t, e)
                }).catch(() => {}), f.set(t, e), t
            }

            function p(e) {
                if (u.has(e)) return;
                const t = new Promise((t, n) => {
                    const r = () => {
                            e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                        },
                        i = () => {
                            t(), r()
                        },
                        o = () => {
                            n(e.error || new DOMException("AbortError", "AbortError")), r()
                        };
                    e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                });
                u.set(e, t)
            }
            let b = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return u.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || h.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return _(e[t])
                },
                set(e, t, n) {
                    return e[t] = n, !0
                },
                has(e, t) {
                    return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                }
            };

            function g(e) {
                b = e(b)
            }

            function m(e) {
                return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? a().includes(e) ? function(...t) {
                    return e.apply(y(this), t), _(c.get(this))
                } : function(...t) {
                    return _(e.apply(y(this), t))
                } : function(t, ...n) {
                    const r = e.call(y(this), t, ...n);
                    return h.set(r, t.sort ? t.sort() : [t]), _(r)
                }
            }

            function v(e) {
                return "function" === typeof e ? m(e) : (e instanceof IDBTransaction && p(e), r(e, s()) ? new Proxy(e, b) : e)
            }

            function _(e) {
                if (e instanceof IDBRequest) return d(e);
                if (l.has(e)) return l.get(e);
                const t = v(e);
                return t !== e && (l.set(e, t), f.set(t, e)), t
            }
            const y = e => f.get(e);

            function E(e, t, {
                blocked: n,
                upgrade: r,
                blocking: i,
                terminated: o
            } = {}) {
                const s = indexedDB.open(e, t),
                    a = _(s);
                return r && s.addEventListener("upgradeneeded", e => {
                    r(_(s.result), e.oldVersion, e.newVersion, _(s.transaction), e)
                }), n && s.addEventListener("blocked", e => n(e.oldVersion, e.newVersion, e)), a.then(e => {
                    o && e.addEventListener("close", () => o()), i && e.addEventListener("versionchange", e => i(e.oldVersion, e.newVersion, e))
                }).catch(() => {}), a
            }
            const w = ["get", "getKey", "getAll", "getAllKeys", "count"],
                S = ["put", "add", "delete", "clear"],
                I = new Map;

            function C(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
                if (I.get(t)) return I.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    i = S.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !w.includes(n)) return;
                const o = async function(e, ...t) {
                    const o = this.transaction(e, i ? "readwrite" : "readonly");
                    let s = o.store;
                    return r && (s = s.index(t.shift())), (await Promise.all([s[n](...t), i && o.done]))[0]
                };
                return I.set(t, o), o
            }
            g(e => ({ ...e,
                get: (t, n, r) => C(t, n) || e.get(t, n, r),
                has: (t, n) => !!C(t, n) || e.has(t, n)
            }))
        },
        4362: function(e, t, n) {
            t.nextTick = function(e) {
                    var t = Array.prototype.slice.call(arguments);
                    t.shift(), setTimeout((function() {
                        e.apply(null, t)
                    }), 0)
                }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function(e) {
                    throw new Error("No such module. (Possibly not yet loaded)")
                },
                function() {
                    var e, r = "/";
                    t.cwd = function() {
                        return r
                    }, t.chdir = function(t) {
                        e || (e = n("df7c")), r = e.resolve(t, r)
                    }
                }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, t.features = {}
        },
        "4b2d": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "c", (function() {
                return s
            }));
            var r = n("a8e9");
            class i {
                constructor(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            }
            const o = "[DEFAULT]";
            class s {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    const t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        const e = new r["a"];
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            const n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (n) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    const n = this.normalizeInstanceIdentifier(null === e || void 0 === e ? void 0 : e.identifier),
                        r = null !== (t = null === e || void 0 === e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (i) {
                        if (r) return null;
                        throw i
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(e) {
                    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if (c(e)) try {
                            this.getOrInitializeService({
                                instanceIdentifier: o
                            })
                        } catch (t) {}
                        for (const [e, n] of this.instancesDeferred.entries()) {
                            const r = this.normalizeInstanceIdentifier(e);
                            try {
                                const e = this.getOrInitializeService({
                                    instanceIdentifier: r
                                });
                                n.resolve(e)
                            } catch (t) {}
                        }
                    }
                }
                clearInstance(e = o) {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    const e = Array.from(this.instances.values());
                    await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = o) {
                    return this.instances.has(e)
                }
                getOptions(e = o) {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    const {
                        options: t = {}
                    } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    const r = this.getOrInitializeService({
                        instanceIdentifier: n,
                        options: t
                    });
                    for (const [i, o] of this.instancesDeferred.entries()) {
                        const e = this.normalizeInstanceIdentifier(i);
                        n === e && o.resolve(r)
                    }
                    return r
                }
                onInit(e, t) {
                    var n;
                    const r = this.normalizeInstanceIdentifier(t),
                        i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    i.add(e), this.onInitCallbacks.set(r, i);
                    const o = this.instances.get(r);
                    return o && e(o, r), () => {
                        i.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    const n = this.onInitCallbacks.get(t);
                    if (n)
                        for (const i of n) try {
                            i(e, t)
                        } catch (r) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let n = this.instances.get(e);
                    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                            instanceIdentifier: a(e),
                            options: t
                        }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (r) {}
                    return n || null
                }
                normalizeInstanceIdentifier(e = o) {
                    return this.component ? this.component.multipleInstances ? e : o : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            }

            function a(e) {
                return e === o ? void 0 : e
            }

            function c(e) {
                return "EAGER" === e.instantiationMode
            }
            class u {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(e) {
                    const t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
                    t.setComponent(e)
                }
                addOrOverwriteComponent(e) {
                    const t = this.getProvider(e.name);
                    t.isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    const t = new s(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        "4ee3": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Z
            })), n.d(t, "b", (function() {
                return J
            })), n.d(t, "c", (function() {
                return G
            })), n.d(t, "d", (function() {
                return W
            })), n.d(t, "e", (function() {
                return X
            })), n.d(t, "f", (function() {
                return Q
            })), n.d(t, "g", (function() {
                return ee
            }));
            var r = n("4b2d"),
                i = n("8428"),
                o = n("a8e9"),
                s = n("1d25");
            class a {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    const e = this.container.getProviders();
                    return e.map(e => {
                        if (c(e)) {
                            const t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                        return null
                    }).filter(e => e).join(" ")
                }
            }

            function c(e) {
                const t = e.getComponent();
                return "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
            }
            const u = "@firebase/app",
                h = "0.14.11",
                l = new i["b"]("@firebase/app"),
                f = "@firebase/app-compat",
                d = "@firebase/analytics-compat",
                p = "@firebase/analytics",
                b = "@firebase/app-check-compat",
                g = "@firebase/app-check",
                m = "@firebase/auth",
                v = "@firebase/auth-compat",
                _ = "@firebase/database",
                y = "@firebase/data-connect",
                E = "@firebase/database-compat",
                w = "@firebase/functions",
                S = "@firebase/functions-compat",
                I = "@firebase/installations",
                C = "@firebase/installations-compat",
                O = "@firebase/messaging",
                D = "@firebase/messaging-compat",
                A = "@firebase/performance",
                N = "@firebase/performance-compat",
                k = "@firebase/remote-config",
                L = "@firebase/remote-config-compat",
                B = "@firebase/storage",
                T = "@firebase/storage-compat",
                j = "@firebase/firestore",
                R = "@firebase/ai",
                M = "@firebase/firestore-compat",
                P = "firebase",
                H = "12.12.0",
                $ = "[DEFAULT]",
                x = {
                    [u]: "fire-core",
                    [f]: "fire-core-compat",
                    [p]: "fire-analytics",
                    [d]: "fire-analytics-compat",
                    [g]: "fire-app-check",
                    [b]: "fire-app-check-compat",
                    [m]: "fire-auth",
                    [v]: "fire-auth-compat",
                    [_]: "fire-rtdb",
                    [y]: "fire-data-connect",
                    [E]: "fire-rtdb-compat",
                    [w]: "fire-fn",
                    [S]: "fire-fn-compat",
                    [I]: "fire-iid",
                    [C]: "fire-iid-compat",
                    [O]: "fire-fcm",
                    [D]: "fire-fcm-compat",
                    [A]: "fire-perf",
                    [N]: "fire-perf-compat",
                    [k]: "fire-rc",
                    [L]: "fire-rc-compat",
                    [B]: "fire-gcs",
                    [T]: "fire-gcs-compat",
                    [j]: "fire-fst",
                    [M]: "fire-fst-compat",
                    [R]: "fire-vertex",
                    "fire-js": "fire-js",
                    [P]: "fire-js-all"
                },
                z = new Map,
                V = new Map,
                F = new Map;

            function U(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                }
            }

            function W(e) {
                const t = e.name;
                if (F.has(t)) return l.debug(`There were multiple attempts to register component ${t}.`), !1;
                F.set(t, e);
                for (const n of z.values()) U(n, e);
                for (const n of V.values()) U(n, e);
                return !0
            }

            function J(e, t) {
                const n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }

            function G(e) {
                return null !== e && void 0 !== e && void 0 !== e.settings
            }
            const K = {
                    ["no-app"]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
                    ["bad-app-name"]: "Illegal App name: '{$appName}'",
                    ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
                    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
                    ["server-app-deleted"]: "Firebase Server App has been deleted",
                    ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
                    ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                    ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
                    ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                    ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                    ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                    ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
                    ["finalization-registry-not-supported"]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
                    ["invalid-server-app-environment"]: "FirebaseServerApp is not for use in browser environments."
                },
                q = new o["b"]("app", "Firebase", K);
            class Y {
                constructor(e, t, n) {
                    this._isDeleted = !1, this._options = { ...e
                    }, this._config = { ...t
                    }, this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new r["a"]("app", () => this, "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw q.create("app-deleted", {
                        appName: this._name
                    })
                }
            }
            const Z = H;

            function Q(e, t = {}) {
                let n = e;
                if ("object" !== typeof t) {
                    const e = t;
                    t = {
                        name: e
                    }
                }
                const i = {
                        name: $,
                        automaticDataCollectionEnabled: !0,
                        ...t
                    },
                    s = i.name;
                if ("string" !== typeof s || !s) throw q.create("bad-app-name", {
                    appName: String(s)
                });
                if (n || (n = Object(o["t"])()), !n) throw q.create("no-options");
                const a = z.get(s);
                if (a) {
                    if (Object(o["q"])(n, a.options) && Object(o["q"])(i, a.config)) return a;
                    throw q.create("duplicate-app", {
                        appName: s
                    })
                }
                const c = new r["b"](s);
                for (const r of F.values()) c.addComponent(r);
                const u = new Y(n, i, c);
                return z.set(s, u), u
            }

            function X(e = $) {
                const t = z.get(e);
                if (!t && e === $ && Object(o["t"])()) return Q();
                if (!t) throw q.create("no-app", {
                    appName: e
                });
                return t
            }

            function ee(e, t, n) {
                var i;
                let o = null !== (i = x[e]) && void 0 !== i ? i : e;
                n && (o += "-" + n);
                const s = o.match(/\s|\//),
                    a = t.match(/\s|\//);
                if (s || a) {
                    const e = [`Unable to register library "${o}" with version "${t}":`];
                    return s && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`), s && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void l.warn(e.join(" "))
                }
                W(new r["a"](o + "-version", () => ({
                    library: o,
                    version: t
                }), "VERSION"))
            }
            const te = "firebase-heartbeat-database",
                ne = 1,
                re = "firebase-heartbeat-store";
            let ie = null;

            function oe() {
                return ie || (ie = Object(s["a"])(te, ne, {
                    upgrade: (e, t) => {
                        switch (t) {
                            case 0:
                                try {
                                    e.createObjectStore(re)
                                } catch (n) {
                                    console.warn(n)
                                }
                        }
                    }
                }).catch(e => {
                    throw q.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                })), ie
            }
            async function se(e) {
                try {
                    const t = await oe(),
                        n = t.transaction(re),
                        r = await n.objectStore(re).get(ce(e));
                    return await n.done, r
                } catch (t) {
                    if (t instanceof o["c"]) l.warn(t.message);
                    else {
                        const e = q.create("idb-get", {
                            originalErrorMessage: null === t || void 0 === t ? void 0 : t.message
                        });
                        l.warn(e.message)
                    }
                }
            }
            async function ae(e, t) {
                try {
                    const n = await oe(),
                        r = n.transaction(re, "readwrite"),
                        i = r.objectStore(re);
                    await i.put(t, ce(e)), await r.done
                } catch (n) {
                    if (n instanceof o["c"]) l.warn(n.message);
                    else {
                        const e = q.create("idb-set", {
                            originalErrorMessage: null === n || void 0 === n ? void 0 : n.message
                        });
                        l.warn(e.message)
                    }
                }
            }

            function ce(e) {
                return `${e.name}!${e.options.appId}`
            }
            const ue = 1024,
                he = 30;
            class le {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    const t = this.container.getProvider("app").getImmediate();
                    this._storage = new pe(t), this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e))
                }
                async triggerHeartbeat() {
                    try {
                        var e;
                        const n = this.container.getProvider("platform-logger").getImmediate(),
                            r = n.getPlatformInfoString(),
                            i = fe();
                        var t;
                        if (null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats))
                            if (this._heartbeatsCache = await this._heartbeatsCachePromise, null == (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats)) return;
                        if (this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some(e => e.date === i)) return;
                        if (this._heartbeatsCache.heartbeats.push({
                                date: i,
                                agent: r
                            }), this._heartbeatsCache.heartbeats.length > he) {
                            const e = ge(this._heartbeatsCache.heartbeats);
                            this._heartbeatsCache.heartbeats.splice(e, 1)
                        }
                        return this._storage.overwrite(this._heartbeatsCache)
                    } catch (n) {
                        l.warn(n)
                    }
                }
                async getHeartbeatsHeader() {
                    try {
                        var e;
                        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
                        const t = fe(),
                            {
                                heartbeatsToSend: n,
                                unsentEntries: r
                            } = de(this._heartbeatsCache.heartbeats),
                            i = Object(o["k"])(JSON.stringify({
                                version: 2,
                                heartbeats: n
                            }));
                        return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i
                    } catch (t) {
                        return l.warn(t), ""
                    }
                }
            }

            function fe() {
                const e = new Date;
                return e.toISOString().substring(0, 10)
            }

            function de(e, t = ue) {
                const n = [];
                let r = e.slice();
                for (const i of e) {
                    const e = n.find(e => e.agent === i.agent);
                    if (e) {
                        if (e.dates.push(i.date), be(n) > t) {
                            e.dates.pop();
                            break
                        }
                    } else if (n.push({
                            agent: i.agent,
                            dates: [i.date]
                        }), be(n) > t) {
                        n.pop();
                        break
                    }
                    r = r.slice(1)
                }
                return {
                    heartbeatsToSend: n,
                    unsentEntries: r
                }
            }
            class pe {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!Object(o["G"])() && Object(o["V"])().then(() => !0).catch(() => !1)
                }
                async read() {
                    const e = await this._canUseIndexedDBPromise;
                    if (e) {
                        const e = await se(this.app);
                        return null !== e && void 0 !== e && e.heartbeats ? e : {
                            heartbeats: []
                        }
                    }
                    return {
                        heartbeats: []
                    }
                }
                async overwrite(e) {
                    const t = await this._canUseIndexedDBPromise;
                    if (t) {
                        var n;
                        const t = await this.read();
                        return ae(this.app, {
                            lastSentHeartbeatDate: null !== (n = e.lastSentHeartbeatDate) && void 0 !== n ? n : t.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    const t = await this._canUseIndexedDBPromise;
                    if (t) {
                        var n;
                        const t = await this.read();
                        return ae(this.app, {
                            lastSentHeartbeatDate: null !== (n = e.lastSentHeartbeatDate) && void 0 !== n ? n : t.lastSentHeartbeatDate,
                            heartbeats: [...t.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            }

            function be(e) {
                return Object(o["k"])(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }

            function ge(e) {
                if (0 === e.length) return -1;
                let t = 0,
                    n = e[0].date;
                for (let r = 1; r < e.length; r++) e[r].date < n && (n = e[r].date, t = r);
                return t
            }

            function me(e) {
                W(new r["a"]("platform-logger", e => new a(e), "PRIVATE")), W(new r["a"]("heartbeat", e => new le(e), "PRIVATE")), ee(u, h, e), ee(u, h, "esm2020"), ee("fire-js", "")
            }
            me("")
        },
        8428: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "d", (function() {
                return l
            }));
            const r = [];
            var i;
            (function(e) {
                e[e["DEBUG"] = 0] = "DEBUG", e[e["VERBOSE"] = 1] = "VERBOSE", e[e["INFO"] = 2] = "INFO", e[e["WARN"] = 3] = "WARN", e[e["ERROR"] = 4] = "ERROR", e[e["SILENT"] = 5] = "SILENT"
            })(i || (i = {}));
            const o = {
                    debug: i.DEBUG,
                    verbose: i.VERBOSE,
                    info: i.INFO,
                    warn: i.WARN,
                    error: i.ERROR,
                    silent: i.SILENT
                },
                s = i.INFO,
                a = {
                    [i.DEBUG]: "log",
                    [i.VERBOSE]: "log",
                    [i.INFO]: "info",
                    [i.WARN]: "warn",
                    [i.ERROR]: "error"
                },
                c = (e, t, ...n) => {
                    if (t < e.logLevel) return;
                    const r = (new Date).toISOString(),
                        i = a[t];
                    if (!i) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                    console[i](`[${r}]  ${e.name}:`, ...n)
                };
            class u {
                constructor(e) {
                    this.name = e, this._logLevel = s, this._logHandler = c, this._userLogHandler = null, r.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in i)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" === typeof e ? o[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" !== typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.DEBUG, ...e), this._logHandler(this, i.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.VERBOSE, ...e), this._logHandler(this, i.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.INFO, ...e), this._logHandler(this, i.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.WARN, ...e), this._logHandler(this, i.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.ERROR, ...e), this._logHandler(this, i.ERROR, ...e)
                }
            }

            function h(e) {
                r.forEach(t => {
                    t.setLogLevel(e)
                })
            }

            function l(e, t) {
                for (const n of r) {
                    let r = null;
                    t && t.level && (r = o[t.level]), n.userLogHandler = null === e ? null : (t, n, ...o) => {
                        var s;
                        const a = o.map(e => {
                            if (null == e) return null;
                            if ("string" === typeof e) return e;
                            if ("number" === typeof e || "boolean" === typeof e) return e.toString();
                            if (e instanceof Error) return e.message;
                            try {
                                return JSON.stringify(e)
                            } catch (t) {
                                return null
                            }
                        }).filter(e => e).join(" ");
                        n >= (null !== (s = r) && void 0 !== s ? s : t.logLevel) && e({
                            level: i[n].toLowerCase(),
                            message: a,
                            args: o,
                            type: t.name
                        })
                    }
                }
            }
        },
        a8e9: function(e, t, n) {
            "use strict";
            (function(e, r) {
                n.d(t, "a", (function() {
                    return D
                })), n.d(t, "b", (function() {
                    return F
                })), n.d(t, "c", (function() {
                    return V
                })), n.d(t, "d", (function() {
                    return se
                })), n.d(t, "e", (function() {
                    return x
                })), n.d(t, "f", (function() {
                    return s
                })), n.d(t, "g", (function() {
                    return a
                })), n.d(t, "h", (function() {
                    return h
                })), n.d(t, "i", (function() {
                    return p
                })), n.d(t, "j", (function() {
                    return f
                })), n.d(t, "k", (function() {
                    return d
                })), n.d(t, "l", (function() {
                    return ve
                })), n.d(t, "m", (function() {
                    return Z
                })), n.d(t, "n", (function() {
                    return A
                })), n.d(t, "o", (function() {
                    return ae
                })), n.d(t, "p", (function() {
                    return b
                })), n.d(t, "q", (function() {
                    return te
                })), n.d(t, "r", (function() {
                    return le
                })), n.d(t, "s", (function() {
                    return oe
                })), n.d(t, "t", (function() {
                    return C
                })), n.d(t, "u", (function() {
                    return S
                })), n.d(t, "v", (function() {
                    return I
                })), n.d(t, "w", (function() {
                    return O
                })), n.d(t, "x", (function() {
                    return _e
                })), n.d(t, "y", (function() {
                    return N
                })), n.d(t, "z", (function() {
                    return Y
                })), n.d(t, "A", (function() {
                    return L
                })), n.d(t, "B", (function() {
                    return j
                })), n.d(t, "C", (function() {
                    return ye
                })), n.d(t, "D", (function() {
                    return T
                })), n.d(t, "E", (function() {
                    return X
                })), n.d(t, "F", (function() {
                    return M
                })), n.d(t, "G", (function() {
                    return H
                })), n.d(t, "H", (function() {
                    return k
                })), n.d(t, "I", (function() {
                    return P
                })), n.d(t, "J", (function() {
                    return R
                })), n.d(t, "K", (function() {
                    return q
                })), n.d(t, "L", (function() {
                    return B
                })), n.d(t, "M", (function() {
                    return J
                })), n.d(t, "N", (function() {
                    return ee
                })), n.d(t, "O", (function() {
                    return Ee
                })), n.d(t, "P", (function() {
                    return re
                })), n.d(t, "Q", (function() {
                    return ie
                })), n.d(t, "R", (function() {
                    return Q
                })), n.d(t, "S", (function() {
                    return de
                })), n.d(t, "T", (function() {
                    return fe
                })), n.d(t, "U", (function() {
                    return G
                })), n.d(t, "V", (function() {
                    return $
                }));
                var i = n("0916");
                const o = {
                        NODE_CLIENT: !1,
                        NODE_ADMIN: !1,
                        SDK_VERSION: "${JSCORE_VERSION}"
                    },
                    s = function(e, t) {
                        if (!e) throw a(t)
                    },
                    a = function(e) {
                        return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
                    },
                    c = function(e) {
                        const t = [];
                        let n = 0;
                        for (let r = 0; r < e.length; r++) {
                            let i = e.charCodeAt(r);
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < e.length && 56320 === (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    },
                    u = function(e) {
                        const t = [];
                        let n = 0,
                            r = 0;
                        while (n < e.length) {
                            const i = e[n++];
                            if (i < 128) t[r++] = String.fromCharCode(i);
                            else if (i > 191 && i < 224) {
                                const o = e[n++];
                                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                            } else if (i > 239 && i < 365) {
                                const o = e[n++],
                                    s = e[n++],
                                    a = e[n++],
                                    c = ((7 & i) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) - 65536;
                                t[r++] = String.fromCharCode(55296 + (c >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & c))
                            } else {
                                const o = e[n++],
                                    s = e[n++];
                                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s)
                            }
                        }
                        return t.join("")
                    },
                    h = {
                        byteToCharMap_: null,
                        charToByteMap_: null,
                        byteToCharMapWebSafe_: null,
                        charToByteMapWebSafe_: null,
                        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        get ENCODED_VALS() {
                            return this.ENCODED_VALS_BASE + "+/="
                        },
                        get ENCODED_VALS_WEBSAFE() {
                            return this.ENCODED_VALS_BASE + "-_."
                        },
                        HAS_NATIVE_SUPPORT: "function" === typeof atob,
                        encodeByteArray(e, t) {
                            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                            this.init_();
                            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                                r = [];
                            for (let i = 0; i < e.length; i += 3) {
                                const t = e[i],
                                    o = i + 1 < e.length,
                                    s = o ? e[i + 1] : 0,
                                    a = i + 2 < e.length,
                                    c = a ? e[i + 2] : 0,
                                    u = t >> 2,
                                    h = (3 & t) << 4 | s >> 4;
                                let l = (15 & s) << 2 | c >> 6,
                                    f = 63 & c;
                                a || (f = 64, o || (l = 64)), r.push(n[u], n[h], n[l], n[f])
                            }
                            return r.join("")
                        },
                        encodeString(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(c(e), t)
                        },
                        decodeString(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : u(this.decodeStringToByteArray(e, t))
                        },
                        decodeStringToByteArray(e, t) {
                            this.init_();
                            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                                r = [];
                            for (let i = 0; i < e.length;) {
                                const t = n[e.charAt(i++)],
                                    o = i < e.length,
                                    s = o ? n[e.charAt(i)] : 0;
                                ++i;
                                const a = i < e.length,
                                    c = a ? n[e.charAt(i)] : 64;
                                ++i;
                                const u = i < e.length,
                                    h = u ? n[e.charAt(i)] : 64;
                                if (++i, null == t || null == s || null == c || null == h) throw new l;
                                const f = t << 2 | s >> 4;
                                if (r.push(f), 64 !== c) {
                                    const e = s << 4 & 240 | c >> 2;
                                    if (r.push(e), 64 !== h) {
                                        const e = c << 6 & 192 | h;
                                        r.push(e)
                                    }
                                }
                            }
                            return r
                        },
                        init_() {
                            if (!this.byteToCharMap_) {
                                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                            }
                        }
                    };
                class l extends Error {
                    constructor() {
                        super(...arguments), this.name = "DecodeBase64StringError"
                    }
                }
                const f = function(e) {
                        const t = c(e);
                        return h.encodeByteArray(t, !0)
                    },
                    d = function(e) {
                        return f(e).replace(/\./g, "")
                    },
                    p = function(e) {
                        try {
                            return h.decodeString(e, !0)
                        } catch (t) {
                            console.error("base64Decode failed: ", t)
                        }
                        return null
                    };

                function b(e) {
                    return g(void 0, e)
                }

                function g(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            const n = t;
                            return new Date(n.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (const n in t) t.hasOwnProperty(n) && m(n) && (e[n] = g(e[n], t[n]));
                    return e
                }

                function m(e) {
                    return "__proto__" !== e
                }

                function v() {
                    if ("undefined" !== typeof self) return self;
                    if ("undefined" !== typeof window) return window;
                    if ("undefined" !== typeof e) return e;
                    throw new Error("Unable to locate global object.")
                }
                const _ = () => v().__FIREBASE_DEFAULTS__,
                    y = () => {
                        if ("undefined" === typeof r) return;
                        const e = Object({
                            NODE_ENV: "production",
                            VUE_APP_ANALYZER_MODE: "disabled",
                            VUE_APP_DEVTOOLS: "disabled",
                            VUE_APP_PWA_MODE: "enabled",
                            BASE_URL: "/"
                        }).__FIREBASE_DEFAULTS__;
                        return e ? JSON.parse(e) : void 0
                    },
                    E = () => {
                        if ("undefined" === typeof document) return;
                        let e;
                        try {
                            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                        } catch (n) {
                            return
                        }
                        const t = e && p(e[1]);
                        return t && JSON.parse(t)
                    },
                    w = () => {
                        try {
                            return Object(i["a"])() || _() || y() || E()
                        } catch (e) {
                            return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: " + e)
                        }
                    },
                    S = e => {
                        var t, n;
                        return null === (t = w()) || void 0 === t || null === (n = t.emulatorHosts) || void 0 === n ? void 0 : n[e]
                    },
                    I = e => {
                        const t = S(e);
                        if (!t) return;
                        const n = t.lastIndexOf(":");
                        if (n <= 0 || n + 1 === t.length) throw new Error(`Invalid host ${t} with no separate hostname and port!`);
                        const r = parseInt(t.substring(n + 1), 10);
                        return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
                    },
                    C = () => {
                        var e;
                        return null === (e = w()) || void 0 === e ? void 0 : e.config
                    },
                    O = e => {
                        var t;
                        return null === (t = w()) || void 0 === t ? void 0 : t["_" + e]
                    };
                class D {
                    constructor() {
                        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise((e, t) => {
                            this.resolve = e, this.reject = t
                        })
                    }
                    wrapCallback(e) {
                        return (t, n) => {
                            t ? this.reject(t) : this.resolve(n), "function" === typeof e && (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n))
                        }
                    }
                }

                function A(e, t) {
                    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    const n = {
                            alg: "none",
                            type: "JWT"
                        },
                        r = t || "demo-project",
                        i = e.iat || 0,
                        o = e.sub || e.user_id;
                    if (!o) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    const s = {
                            iss: "https://securetoken.google.com/" + r,
                            aud: r,
                            iat: i,
                            exp: i + 3600,
                            auth_time: i,
                            sub: o,
                            user_id: o,
                            firebase: {
                                sign_in_provider: "custom",
                                identities: {}
                            },
                            ...e
                        },
                        a = "";
                    return [d(JSON.stringify(n)), d(JSON.stringify(s)), a].join(".")
                }

                function N() {
                    return "undefined" !== typeof navigator && "string" === typeof navigator["userAgent"] ? navigator["userAgent"] : ""
                }

                function k() {
                    return "undefined" !== typeof window && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())
                }

                function L() {
                    return "undefined" !== typeof window || B()
                }

                function B() {
                    return "undefined" !== typeof WorkerGlobalScope && "undefined" !== typeof self && self instanceof WorkerGlobalScope
                }

                function T() {
                    return "undefined" !== typeof navigator && "Cloudflare-Workers" === navigator.userAgent
                }

                function j() {
                    const e = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
                    return "object" === typeof e && void 0 !== e.id
                }

                function R() {
                    return "object" === typeof navigator && "ReactNative" === navigator["product"]
                }

                function M() {
                    const e = N();
                    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
                }

                function P() {
                    return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN
                }

                function H() {
                    try {
                        return "object" === typeof indexedDB
                    } catch (e) {
                        return !1
                    }
                }

                function $() {
                    return new Promise((e, t) => {
                        try {
                            let n = !0;
                            const r = "validate-browser-context-for-indexeddb-analytics-module",
                                i = self.indexedDB.open(r);
                            i.onsuccess = () => {
                                i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                            }, i.onupgradeneeded = () => {
                                n = !1
                            }, i.onerror = () => {
                                var e;
                                t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                        } catch (n) {
                            t(n)
                        }
                    })
                }

                function x() {
                    return !("undefined" === typeof navigator || !navigator.cookieEnabled)
                }
                const z = "FirebaseError";
                class V extends Error {
                    constructor(e, t, n) {
                        super(t), this.code = e, this.customData = n, this.name = z, Object.setPrototypeOf(this, V.prototype), Error.captureStackTrace && Error.captureStackTrace(this, F.prototype.create)
                    }
                }
                class F {
                    constructor(e, t, n) {
                        this.service = e, this.serviceName = t, this.errors = n
                    }
                    create(e, ...t) {
                        const n = t[0] || {},
                            r = `${this.service}/${e}`,
                            i = this.errors[e],
                            o = i ? U(i, n) : "Error",
                            s = `${this.serviceName}: ${o} (${r}).`,
                            a = new V(r, s, n);
                        return a
                    }
                }

                function U(e, t) {
                    return e.replace(W, (e, n) => {
                        const r = t[n];
                        return null != r ? String(r) : `<${n}?>`
                    })
                }
                const W = /\{\$([^}]+)}/g;

                function J(e) {
                    return JSON.parse(e)
                }

                function G(e) {
                    return JSON.stringify(e)
                }
                const K = function(e) {
                        let t = {},
                            n = {},
                            r = {},
                            i = "";
                        try {
                            const o = e.split(".");
                            t = J(p(o[0]) || ""), n = J(p(o[1]) || ""), i = o[2], r = n["d"] || {}, delete n["d"]
                        } catch (o) {}
                        return {
                            header: t,
                            claims: n,
                            data: r,
                            signature: i
                        }
                    },
                    q = function(e) {
                        const t = K(e),
                            n = t.claims;
                        return !!n && "object" === typeof n && n.hasOwnProperty("iat")
                    },
                    Y = function(e) {
                        const t = K(e).claims;
                        return "object" === typeof t && !0 === t["admin"]
                    };

                function Z(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function Q(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                }

                function X(e) {
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                }

                function ee(e, t, n) {
                    const r = {};
                    for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = t.call(n, e[i], i, e));
                    return r
                }

                function te(e, t) {
                    if (e === t) return !0;
                    const n = Object.keys(e),
                        r = Object.keys(t);
                    for (const i of n) {
                        if (!r.includes(i)) return !1;
                        const n = e[i],
                            o = t[i];
                        if (ne(n) && ne(o)) {
                            if (!te(n, o)) return !1
                        } else if (n !== o) return !1
                    }
                    for (const i of r)
                        if (!n.includes(i)) return !1;
                    return !0
                }

                function ne(e) {
                    return null !== e && "object" === typeof e
                }

                function re(e) {
                    const t = [];
                    for (const [n, r] of Object.entries(e)) Array.isArray(r) ? r.forEach(e => {
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                    }) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
                    return t.length ? "&" + t.join("&") : ""
                }

                function ie(e) {
                    const t = {},
                        n = e.replace(/^\?/, "").split("&");
                    return n.forEach(e => {
                        if (e) {
                            const [n, r] = e.split("=");
                            t[decodeURIComponent(n)] = decodeURIComponent(r)
                        }
                    }), t
                }

                function oe(e) {
                    const t = e.indexOf("?");
                    if (!t) return "";
                    const n = e.indexOf("#", t);
                    return e.substring(t, n > 0 ? n : void 0)
                }
                class se {
                    constructor() {
                        this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                        for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                        this.reset()
                    }
                    reset() {
                        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                    }
                    compress_(e, t) {
                        t || (t = 0);
                        const n = this.W_;
                        if ("string" === typeof e)
                            for (let h = 0; h < 16; h++) n[h] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                        else
                            for (let h = 0; h < 16; h++) n[h] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                        for (let h = 16; h < 80; h++) {
                            const e = n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16];
                            n[h] = 4294967295 & (e << 1 | e >>> 31)
                        }
                        let r, i, o = this.chain_[0],
                            s = this.chain_[1],
                            a = this.chain_[2],
                            c = this.chain_[3],
                            u = this.chain_[4];
                        for (let h = 0; h < 80; h++) {
                            h < 40 ? h < 20 ? (r = c ^ s & (a ^ c), i = 1518500249) : (r = s ^ a ^ c, i = 1859775393) : h < 60 ? (r = s & a | c & (s | a), i = 2400959708) : (r = s ^ a ^ c, i = 3395469782);
                            const e = (o << 5 | o >>> 27) + r + u + i + n[h] & 4294967295;
                            u = c, c = a, a = 4294967295 & (s << 30 | s >>> 2), s = o, o = e
                        }
                        this.chain_[0] = this.chain_[0] + o & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + a & 4294967295, this.chain_[3] = this.chain_[3] + c & 4294967295, this.chain_[4] = this.chain_[4] + u & 4294967295
                    }
                    update(e, t) {
                        if (null == e) return;
                        void 0 === t && (t = e.length);
                        const n = t - this.blockSize;
                        let r = 0;
                        const i = this.buf_;
                        let o = this.inbuf_;
                        while (r < t) {
                            if (0 === o)
                                while (r <= n) this.compress_(e, r), r += this.blockSize;
                            if ("string" === typeof e) {
                                while (r < t)
                                    if (i[o] = e.charCodeAt(r), ++o, ++r, o === this.blockSize) {
                                        this.compress_(i), o = 0;
                                        break
                                    }
                            } else
                                while (r < t)
                                    if (i[o] = e[r], ++o, ++r, o === this.blockSize) {
                                        this.compress_(i), o = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = o, this.total_ += t
                    }
                    digest() {
                        const e = [];
                        let t = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (let r = this.blockSize - 1; r >= 56; r--) this.buf_[r] = 255 & t, t /= 256;
                        this.compress_(this.buf_);
                        let n = 0;
                        for (let r = 0; r < 5; r++)
                            for (let t = 24; t >= 0; t -= 8) e[n] = this.chain_[r] >> t & 255, ++n;
                        return e
                    }
                }

                function ae(e, t) {
                    const n = new ce(e, t);
                    return n.subscribe.bind(n)
                }
                class ce {
                    constructor(e, t) {
                        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
                            e(this)
                        }).catch(e => {
                            this.error(e)
                        })
                    }
                    next(e) {
                        this.forEachObserver(t => {
                            t.next(e)
                        })
                    }
                    error(e) {
                        this.forEachObserver(t => {
                            t.error(e)
                        }), this.close(e)
                    }
                    complete() {
                        this.forEachObserver(e => {
                            e.complete()
                        }), this.close()
                    }
                    subscribe(e, t, n) {
                        let r;
                        if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                        r = ue(e, ["next", "error", "complete"]) ? e : {
                            next: e,
                            error: t,
                            complete: n
                        }, void 0 === r.next && (r.next = he), void 0 === r.error && (r.error = he), void 0 === r.complete && (r.complete = he);
                        const i = this.unsubscribeOne.bind(this, this.observers.length);
                        return this.finalized && this.task.then(() => {
                            try {
                                this.finalError ? r.error(this.finalError) : r.complete()
                            } catch (e) {}
                        }), this.observers.push(r), i
                    }
                    unsubscribeOne(e) {
                        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                    }
                    forEachObserver(e) {
                        if (!this.finalized)
                            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                    }
                    sendOne(e, t) {
                        this.task.then(() => {
                            if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                                t(this.observers[e])
                            } catch (n) {
                                "undefined" !== typeof console && console.error && console.error(n)
                            }
                        })
                    }
                    close(e) {
                        this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(() => {
                            this.observers = void 0, this.onNoObservers = void 0
                        }))
                    }
                }

                function ue(e, t) {
                    if ("object" !== typeof e || null === e) return !1;
                    for (const n of t)
                        if (n in e && "function" === typeof e[n]) return !0;
                    return !1
                }

                function he() {}

                function le(e, t) {
                    return `${e} failed: ${t} argument `
                }
                const fe = function(e) {
                        const t = [];
                        let n = 0;
                        for (let r = 0; r < e.length; r++) {
                            let i = e.charCodeAt(r);
                            if (i >= 55296 && i <= 56319) {
                                const t = i - 55296;
                                r++, s(r < e.length, "Surrogate pair missing trail surrogate.");
                                const n = e.charCodeAt(r) - 56320;
                                i = 65536 + (t << 10) + n
                            }
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    },
                    de = function(e) {
                        let t = 0;
                        for (let n = 0; n < e.length; n++) {
                            const r = e.charCodeAt(n);
                            r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
                        }
                        return t
                    },
                    pe = 1e3,
                    be = 2,
                    ge = 144e5,
                    me = .5;

                function ve(e, t = pe, n = be) {
                    const r = t * Math.pow(n, e),
                        i = Math.round(me * r * (Math.random() - .5) * 2);
                    return Math.min(ge, r + i)
                }

                function _e(e) {
                    return e && e._delegate ? e._delegate : e
                }

                function ye(e) {
                    try {
                        const t = e.startsWith("http://") || e.startsWith("https://") ? new URL(e).hostname : e;
                        return t.endsWith(".cloudworkstations.dev")
                    } catch (t) {
                        return !1
                    }
                }
                async function Ee(e) {
                    const t = await fetch(e, {
                        credentials: "include"
                    });
                    return t.ok
                }
            }).call(this, n("c8ba"), n("4362"))
        },
        df7c: function(e, t, n) {
            (function(e) {
                function n(e, t) {
                    for (var n = 0, r = e.length - 1; r >= 0; r--) {
                        var i = e[r];
                        "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                    }
                    if (t)
                        for (; n--; n) e.unshift("..");
                    return e
                }

                function r(e) {
                    "string" !== typeof e && (e += "");
                    var t, n = 0,
                        r = -1,
                        i = !0;
                    for (t = e.length - 1; t >= 0; --t)
                        if (47 === e.charCodeAt(t)) {
                            if (!i) {
                                n = t + 1;
                                break
                            }
                        } else -1 === r && (i = !1, r = t + 1);
                    return -1 === r ? "" : e.slice(n, r)
                }

                function i(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                    return n
                }
                t.resolve = function() {
                    for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                        var s = o >= 0 ? arguments[o] : e.cwd();
                        if ("string" !== typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                        s && (t = s + "/" + t, r = "/" === s.charAt(0))
                    }
                    return t = n(i(t.split("/"), (function(e) {
                        return !!e
                    })), !r).join("/"), (r ? "/" : "") + t || "."
                }, t.normalize = function(e) {
                    var r = t.isAbsolute(e),
                        s = "/" === o(e, -1);
                    return e = n(i(e.split("/"), (function(e) {
                        return !!e
                    })), !r).join("/"), e || r || (e = "."), e && s && (e += "/"), (r ? "/" : "") + e
                }, t.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, t.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return t.normalize(i(e, (function(e, t) {
                        if ("string" !== typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    })).join("/"))
                }, t.relative = function(e, n) {
                    function r(e) {
                        for (var t = 0; t < e.length; t++)
                            if ("" !== e[t]) break;
                        for (var n = e.length - 1; n >= 0; n--)
                            if ("" !== e[n]) break;
                        return t > n ? [] : e.slice(t, n - t + 1)
                    }
                    e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                    for (var i = r(e.split("/")), o = r(n.split("/")), s = Math.min(i.length, o.length), a = s, c = 0; c < s; c++)
                        if (i[c] !== o[c]) {
                            a = c;
                            break
                        }
                    var u = [];
                    for (c = a; c < i.length; c++) u.push("..");
                    return u = u.concat(o.slice(a)), u.join("/")
                }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                    if ("string" !== typeof e && (e += ""), 0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o)
                        if (t = e.charCodeAt(o), 47 === t) {
                            if (!i) {
                                r = o;
                                break
                            }
                        } else i = !1;
                    return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
                }, t.basename = function(e, t) {
                    var n = r(e);
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
                }, t.extname = function(e) {
                    "string" !== typeof e && (e += "");
                    for (var t = -1, n = 0, r = -1, i = !0, o = 0, s = e.length - 1; s >= 0; --s) {
                        var a = e.charCodeAt(s);
                        if (47 !== a) - 1 === r && (i = !1, r = s + 1), 46 === a ? -1 === t ? t = s : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                        else if (!i) {
                            n = s + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
                };
                var o = "b" === "ab".substr(-1) ? function(e, t, n) {
                    return e.substr(t, n)
                } : function(e, t, n) {
                    return t < 0 && (t = e.length + t), e.substr(t, n)
                }
            }).call(this, n("4362"))
        }
    }
]);