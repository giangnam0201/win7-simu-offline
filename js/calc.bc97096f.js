(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["calc", "device", "hotkey", "storage"], {
        "01b4": function(e, t, n) {
            "use strict";
            const o = {
                Theme: "setTheme",
                Color: "setColor",
                Background: "setBackground",
                AeroTransparent: "setAeroTransparent",
                User: "setUser",
                CurrentUser: "setCurrentUser",
                Start: "toggleStart",
                Popup: "togglePopup",
                Accounts: "accounts",
                WindowLocation: "setLocation",
                GameOpen: "openGame",
                GameClose: "closeGame",
                RecentPrograms: "setRecentPrograms",
                PinnedPrograms: "pins",
                ProgramPin: "pinProgram",
                ProgramUnpin: "unpinProgram",
                Shortcuts: "setShortcuts",
                ShortcutAdd: "addShortcut",
                ShortcutMove: "moveShortcut",
                ShortcutRemove: "removeShortcut",
                ShortcutRename: "renameShortcut",
                WindowAdd: "addWindow",
                WindowUpdate: "updateWindow",
                WindowRemove: "removeWindow",
                WindowFocus: "focusWindow",
                Trash: "setTrash",
                TrashAdd: "addTrash",
                TrashRemove: "removeTrash",
                TrashRestore: "restoreTrash",
                ClipboardItem: "setClipboardItem",
                Taskbar: "setTaskbar",
                ShowAds: "setShowAds",
                ForceUpdate: "forceUpdate",
                Path: "path",
                UnlockTheme: "unlockTheme"
            };
            t["a"] = o
        },
        "0e9a": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return r
            })), n.d(t, "f", (function() {
                return i
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "j", (function() {
                return a
            })), n.d(t, "n", (function() {
                return c
            })), n.d(t, "m", (function() {
                return u
            })), n.d(t, "o", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "i", (function() {
                return f
            })), n.d(t, "d", (function() {
                return T
            })), n.d(t, "k", (function() {
                return p
            })), n.d(t, "l", (function() {
                return S
            })), n.d(t, "q", (function() {
                return h
            })), n.d(t, "r", (function() {
                return I
            })), n.d(t, "c", (function() {
                return m
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "b", (function() {
                return E
            })), n.d(t, "p", (function() {
                return N
            }));
            const o = /data:([^;]*)(;.*)*,(.+)/;

            function r(e) {
                return "string" === typeof e && o.test(e)
            }

            function i(e) {
                try {
                    return e.length > 3 && !(e.length % 4) && atob(e) && !0
                } catch (t) {
                    return !1
                }
            }

            function s(e) {
                return e.startsWith("blob:")
            }

            function a(e) {
                return _(e, /(webp|apng|png|jpg|jpeg|jfif|svg|gif|ico)$/)
            }

            function c(e) {
                return _(e, /(txt|text|readme|md|json|xml|rtf|wpl)$/)
            }

            function u(e) {
                return _(e, /rtf$/)
            }

            function d(e) {
                return _(e, /(webm|mp4|mpg|mpeg|ogm|wmv|avi|mov)$/)
            }

            function l(e) {
                return _(e, /(webm|mp3|ogg|wav|wma|aac|m4a|flac|mid)$/)
            }

            function f(e) {
                return _(e, /(exe|msi|apk)$/)
            }

            function T(e) {
                return _(e, /(zip)$/)
            }

            function p(e) {
                return _(e, /(pdf)$/)
            }

            function S(e) {
                return _(e, /(wpl)$/)
            }

            function h(e) {
                return _(e, /(html|htm)$/)
            }

            function _(e, t) {
                const {
                    ext: n
                } = I(e);
                return !!n && t.test(n.toLowerCase())
            }

            function I(e) {
                const t = m(e),
                    [, n, o] = Array.from(t.match(/(.*)\.(.*)$/) || []);
                return n || o ? {
                    name: decodeURIComponent(n),
                    ext: o
                } : {
                    name: t,
                    ext: null
                }
            }

            function m(e) {
                const t = e.split("/").filter(Boolean),
                    n = t.pop();
                return n ? decodeURIComponent(n) : ""
            }

            function g(e) {
                const t = e.match(o);
                return t ? {
                    mime: t[1],
                    data: t[3]
                } : null
            }

            function E(e, t, n) {
                const o = l(e) ? "audio" : a(e) ? "image" : null;
                let r = "";
                r = s(n) ? n : o ? `data:${o}/${t};base64,${n}` : `data:application/${t},${encodeURIComponent(n)}`;
                const i = document.createElement("a");
                i.download = e, i.href = r, i.click()
            }
            async function N(e) {
                return new Promise(t => {
                    const n = document.createElement("video");
                    n.src = e, n.onloadedmetadata = () => {
                        const e = n.videoWidth > 0 && n.videoHeight > 0;
                        n.remove(), t(e)
                    }
                })
            }
        },
        "0f35": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "k", (function() {
                return f
            })), n.d(t, "m", (function() {
                return T
            })), n.d(t, "l", (function() {
                return p
            })), n.d(t, "h", (function() {
                return S
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "p", (function() {
                return _
            })), n.d(t, "o", (function() {
                return I
            })), n.d(t, "q", (function() {
                return m
            })), n.d(t, "n", (function() {
                return g
            })), n.d(t, "j", (function() {
                return E
            })), n.d(t, "g", (function() {
                return N
            })), n.d(t, "i", (function() {
                return O
            }));
            var o = n("e5dd"),
                r = n("0fbc"),
                i = n("4cca"),
                s = n("0e9a");

            function a(e) {
                return /^https?:\/\//.test(e)
            }

            function c(e) {
                return /(img|media)\//.test(e)
            }

            function u(e) {
                return null === e || void 0 === e
            }

            function d(e) {
                return (a(e) ? e : "https://" + e).toLowerCase()
            }

            function l(e, t) {
                return e.find(e => new RegExp(`(img|media)/${t}\\.`, "g").test(e))
            }

            function f(e) {
                return (e < 10 ? "0" : "") + e
            }

            function T(e) {
                return new Promise((t, n) => {
                    const o = new Image;
                    o.onerror = n, o.onload = t, o.src = e
                })
            }

            function p(e) {
                const t = "string" === typeof e,
                    n = t && e.endsWith("mp4") || !t && e.type.includes("video"),
                    o = t ? e : Object(r["b"])(e.src, e.type);
                return {
                    url: o,
                    isAnimated: n
                }
            }

            function S(e) {
                try {
                    const {
                        hostname: t
                    } = new URL(e);
                    return /.+\..+/.test(t)
                } catch (t) {
                    return !1
                }
            }

            function h(e) {
                return e.startsWith("com.") || e.startsWith("org.chromium")
            }

            function _(e, t) {
                return t || (t = e, e = 0), Math.floor(Math.random() * (t - e + 1)) + e
            }

            function I(e = "") {
                return `${e}-${Math.random().toString(36).substring(2,9)}`
            }

            function m(e) {
                return new Promise(t => setTimeout(t, e))
            }
            async function g(e, t) {
                for (const n of e) await t(n)
            }

            function E() {
                o["a"].open({
                    url: "https://youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y"
                })
            }

            function N(e, t) {
                const n = Object(s["c"])(e);
                return Object(i["b"])(n) === t
            }

            function O(e, t, n, o, r) {
                e = Math.min(Math.max(e, t), n);
                const i = (e - t) / (n - t),
                    s = (r - o) * i + o;
                return s
            }
        },
        "0f9f": function(e, t, n) {},
        "0fbc": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return r
            })), n.d(t, "j", (function() {
                return i
            })), n.d(t, "i", (function() {
                return s
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "g", (function() {
                return l
            })), n.d(t, "h", (function() {
                return f
            })), n.d(t, "c", (function() {
                return T
            }));
            var o = n("0e9a");

            function r(e) {
                return e ? URL.createObjectURL(e) : null
            }

            function i(e) {
                return new Promise((t, n) => {
                    const o = new Image;
                    o.src = e, o.onload = () => t(o), o.onerror = () => n()
                })
            }

            function s(e, t = 0, n = 0) {
                const o = document.createElement("canvas"),
                    r = o.getContext("2d");
                if (!r) throw new Error("Failed to get canvas context");
                let i = t,
                    s = n;
                return i && s || (i = e.width || parseFloat(e.style.width) || parseFloat(getComputedStyle(e).width), s = e.height || parseFloat(e.style.height) || parseFloat(getComputedStyle(e).height)), o.width = i, o.height = s, r.drawImage(e, 0, 0, i, s), o
            }

            function a(e) {
                return new Promise(t => {
                    const n = new FileReader;
                    n.onloadend = () => t(n.result), n.readAsArrayBuffer(e)
                })
            }

            function c(e, t) {
                return new Promise((n, o) => {
                    e.toBlob(e => {
                        if (!e) return o("Failed to create blob from canvas");
                        a(e).then(n)
                    }, t)
                })
            }

            function u(e, t) {
                const n = new Blob([e], {
                    type: t || "application/octet-stream"
                });
                return r(n)
            }

            function d(e) {
                for (var t = "", n = new Uint8Array(e), o = n.byteLength, r = 0; r < o; r++) t += String.fromCharCode(n[r]);
                return window.btoa(t)
            }

            function l(e, t, n) {
                const r = Object(o["a"])(e),
                    i = r ? r.data : e,
                    s = t || 512,
                    a = atob(i),
                    c = [];
                for (let o = 0; o < a.length; o += s) {
                    const e = a.slice(o, o + s),
                        t = new Array(e.length);
                    for (let o = 0; o < e.length; o++) t[o] = e.charCodeAt(o);
                    const n = new Uint8Array(t);
                    c.push(n)
                }
                return new Blob(c, {
                    type: n || "image/webp"
                })
            }

            function f(e, t, n) {
                const o = l(e, t, n);
                return r(o)
            }

            function T(e, t = "webp") {
                return `data:image/${t};base64,${e}`
            }
        },
        1521: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["relative flex bg-white h-full overflow-auto window__body", {
                            "p-2.5 flex-col": "panel" !== e.layout
                        }, "default" === e.layout ? "" : "is-" + e.layout],
                        on: {
                            mousemove: function(t) {
                                return e.$emit("mousemove")
                            },
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [e._t("default")], 2)
                },
                r = [],
                i = {
                    props: {
                        layout: {
                            type: String,
                            default: "default",
                            validator: e => ["message", "dialog", "settings", "panel", "default"].includes(e)
                        }
                    }
                },
                s = i,
                a = n("2877"),
                c = Object(a["a"])(s, o, r, !1, null, null, null);
            t["a"] = c.exports
        },
        "15d4": function(e, t, n) {
            var o = {
                "./aeroNoir.scss": ["04d1", "theme-aeroNoir-scss"],
                "./chromeos.scss": ["13d0", "theme-chromeos-scss"],
                "./kubuntu.scss": ["18dd", "theme-kubuntu-scss"],
                "./macos.scss": ["f30c", "theme-macos-scss"],
                "./onebit.scss": ["cbbd", "theme-onebit-scss"],
                "./oxygen.scss": ["b514", "theme-oxygen-scss"],
                "./ubuntu.scss": ["c91b", "theme-ubuntu-scss"],
                "./win10.scss": ["a139", "theme-win10-scss"],
                "./win11.scss": ["f562", "theme-win11-scss"],
                "./win31.scss": ["7294", "theme-win31-scss"],
                "./win7-classic.scss": ["a5ab", "theme-win7-classic-scss"],
                "./win7.scss": ["e163", "theme-win7-scss"],
                "./win8.scss": ["8f05", "theme-win8-scss"],
                "./win9x.scss": ["ea0d", "theme-win9x-scss"],
                "./winW.scss": ["d857", "theme-winW-scss"],
                "./winlonghorn.scss": ["8456", "theme-winlonghorn-scss"],
                "./winvista.scss": ["9ba7", "theme-winvista-scss"],
                "./winxp.scss": ["a949", "theme-winxp-scss"]
            };

            function r(e) {
                if (!n.o(o, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = o[e],
                    r = t[0];
                return n.e(t[1]).then((function() {
                    return n(r)
                }))
            }
            r.keys = function() {
                return Object.keys(o)
            }, r.id = "15d4", e.exports = r
        },
        "26a1": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "l", (function() {
                return p
            })), n.d(t, "n", (function() {
                return S
            })), n.d(t, "m", (function() {
                return h
            })), n.d(t, "h", (function() {
                return _
            }));
            const o = "#root",
                r = "#main",
                i = ".desktop__wrapper",
                s = ".taskbar__wrapper",
                a = ".taskbar-popup",
                c = ".startmenu__wrapper",
                u = ".listview__item";

            function d() {
                return document.body.querySelector(o)
            }

            function l() {
                return document.body.querySelector("#stage")
            }

            function f() {
                return document.body.querySelector(r)
            }

            function T() {
                return document.body.querySelector(s)
            }

            function p(e) {
                const t = `[data-target="${e}"]`;
                return document.body.querySelector(t)
            }

            function S({
                flag: e,
                id: t,
                content: n
            }) {
                if (e) {
                    const e = document.createElement("style");
                    e.id = t, e.innerHTML = n, document.body.append(e)
                } else {
                    const e = document.querySelector("#" + t);
                    e && e.remove()
                }
            }

            function h({
                type: e,
                url: t
            }) {
                if (document.querySelector(`link[href="${t}"]`)) return;
                const n = document.createElement("link");
                n.rel = "preload", n.as = e, n.href = t, document.head.appendChild(n)
            }

            function _(e) {
                const t = e.target,
                    {
                        top: n,
                        left: o,
                        width: r,
                        height: i
                    } = t.getBoundingClientRect(),
                    s = (e.clientX - o) / r,
                    a = (e.clientY - n) / i;
                return {
                    x: s,
                    y: a
                }
            }
        },
        2877: function(e, t, n) {
            "use strict";

            function o(e, t, n, o, r, i, s, a) {
                var c, u = "function" === typeof e ? e.options : e;
                if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), o && (u.functional = !0), i && (u._scopeId = "data-v-" + i), s ? (c = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                    }, u._ssrRegister = c) : r && (c = a ? function() {
                        r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : r), c)
                    if (u.functional) {
                        u._injectStyles = c;
                        var d = u.render;
                        u.render = function(e, t) {
                            return c.call(t), d(e, t)
                        }
                    } else {
                        var l = u.beforeCreate;
                        u.beforeCreate = l ? [].concat(l, c) : [c]
                    }
                return {
                    exports: e,
                    options: u
                }
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        "2ea7": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "toCodemirrorKey", (function() {
                return D
            }));
            const o = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

            function r(e, t, n, o) {
                e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on".concat(t), () => {
                    n(window.event)
                })
            }

            function i(e, t) {
                const n = t.slice(0, t.length - 1);
                for (let o = 0; o < n.length; o++) n[o] = e[n[o].toLowerCase()];
                return n
            }

            function s(e) {
                "string" !== typeof e && (e = ""), e = e.replace(/\s/g, "");
                const t = e.split(",");
                let n = t.lastIndexOf("");
                for (; n >= 0;) t[n - 1] += ",", t.splice(n, 1), n = t.lastIndexOf("");
                return t
            }

            function a(e, t) {
                const n = e.length >= t.length ? e : t,
                    o = e.length >= t.length ? t : e;
                let r = !0;
                for (let i = 0; i < n.length; i++) - 1 === o.indexOf(n[i]) && (r = !1);
                return r
            }
            const c = {
                    backspace: 8,
                    "⌫": 8,
                    tab: 9,
                    clear: 12,
                    enter: 13,
                    "↩": 13,
                    return: 13,
                    esc: 27,
                    escape: 27,
                    space: 32,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    del: 46,
                    delete: 46,
                    ins: 45,
                    insert: 45,
                    home: 36,
                    end: 35,
                    pageup: 33,
                    pagedown: 34,
                    capslock: 20,
                    num_0: 96,
                    num_1: 97,
                    num_2: 98,
                    num_3: 99,
                    num_4: 100,
                    num_5: 101,
                    num_6: 102,
                    num_7: 103,
                    num_8: 104,
                    num_9: 105,
                    num_multiply: 106,
                    num_add: 107,
                    num_enter: 108,
                    num_subtract: 109,
                    num_decimal: 110,
                    num_divide: 111,
                    "⇪": 20,
                    ",": 188,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "-": o ? 173 : 189,
                    "=": o ? 61 : 187,
                    ";": o ? 59 : 186,
                    "'": 222,
                    "[": 219,
                    "]": 221,
                    "\\": 220
                },
                u = {
                    "⇧": 16,
                    shift: 16,
                    "⌥": 18,
                    alt: 18,
                    option: 18,
                    "⌃": 17,
                    ctrl: 17,
                    control: 17,
                    "⌘": 91,
                    cmd: 91,
                    command: 91
                },
                d = {
                    16: "shiftKey",
                    18: "altKey",
                    17: "ctrlKey",
                    91: "metaKey",
                    shiftKey: 16,
                    ctrlKey: 17,
                    altKey: 18,
                    metaKey: 91
                },
                l = {
                    16: !1,
                    18: !1,
                    17: !1,
                    91: !1
                },
                f = {};
            for (let j = 1; j < 20; j++) c["f".concat(j)] = 111 + j;
            let T = [],
                p = !1,
                S = "all";
            const h = [],
                _ = e => c[e.toLowerCase()] || u[e.toLowerCase()] || e.toUpperCase().charCodeAt(0),
                I = e => Object.keys(c).find(t => c[t] === e),
                m = e => Object.keys(u).find(t => u[t] === e);

            function g(e) {
                S = e || "all"
            }

            function E() {
                return S || "all"
            }

            function N() {
                return T.slice(0)
            }

            function O() {
                return T.map(e => I(e) || m(e) || String.fromCharCode(e))
            }

            function w() {
                const e = [];
                return Object.keys(f).forEach(t => {
                    f[t].forEach(t => {
                        let {
                            key: n,
                            scope: o,
                            mods: r,
                            shortcut: i
                        } = t;
                        e.push({
                            scope: o,
                            shortcut: i,
                            mods: r,
                            keys: n.split("+").map(e => _(e))
                        })
                    })
                }), e
            }

            function A(e) {
                const t = e.target || e.srcElement,
                    {
                        tagName: n
                    } = t;
                let o = !0;
                return !t.isContentEditable && ("INPUT" !== n && "TEXTAREA" !== n && "SELECT" !== n || t.readOnly) || (o = !1), o
            }

            function b(e) {
                return "string" === typeof e && (e = _(e)), -1 !== T.indexOf(e)
            }

            function y(e, t) {
                let n, o;
                e || (e = E());
                for (const r in f)
                    if (Object.prototype.hasOwnProperty.call(f, r))
                        for (n = f[r], o = 0; o < n.length;) n[o].scope === e ? n.splice(o, 1) : o++;
                E() === e && g(t || "all")
            }

            function C(e) {
                let t = e.keyCode || e.which || e.charCode;
                const n = T.indexOf(t);
                if (n >= 0 && T.splice(n, 1), e.key && "meta" === e.key.toLowerCase() && T.splice(0, T.length), 93 !== t && 224 !== t || (t = 91), t in l) {
                    l[t] = !1;
                    for (const e in u) u[e] === t && (x[e] = !1)
                }
            }

            function R(e) {
                if ("undefined" === typeof e) Object.keys(f).forEach(e => delete f[e]);
                else if (Array.isArray(e)) e.forEach(e => {
                    e.key && v(e)
                });
                else if ("object" === typeof e) e.key && v(e);
                else if ("string" === typeof e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    let [r, i] = n;
                    "function" === typeof r && (i = r, r = ""), v({
                        key: e,
                        scope: r,
                        method: i,
                        splitKey: "+"
                    })
                }
            }
            const v = e => {
                let {
                    key: t,
                    scope: n,
                    method: o,
                    splitKey: r = "+"
                } = e;
                const c = s(t);
                c.forEach(e => {
                    const t = e.split(r),
                        s = t.length,
                        c = t[s - 1],
                        d = "*" === c ? "*" : _(c);
                    if (!f[d]) return;
                    n || (n = E());
                    const l = s > 1 ? i(u, t) : [];
                    f[d] = f[d].filter(e => {
                        const t = !o || e.method === o;
                        return !(t && e.scope === n && a(e.mods, l))
                    })
                })
            };

            function P(e, t, n, o) {
                if (t.element !== o) return;
                let r;
                if (t.scope === n || "all" === t.scope) {
                    r = t.mods.length > 0;
                    for (const e in l) Object.prototype.hasOwnProperty.call(l, e) && (!l[e] && t.mods.indexOf(+e) > -1 || l[e] && -1 === t.mods.indexOf(+e)) && (r = !1);
                    (0 !== t.mods.length || l[16] || l[18] || l[17] || l[91]) && !r && "*" !== t.shortcut || (t.keys = [], t.keys = t.keys.concat(T), !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)))
                }
            }

            function G(e, t) {
                const n = f["*"];
                let o = e.keyCode || e.which || e.charCode;
                if (!x.filter.call(this, e)) return;
                if (93 !== o && 224 !== o || (o = 91), -1 === T.indexOf(o) && 229 !== o && T.push(o), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(t => {
                        const n = d[t];
                        e[t] && -1 === T.indexOf(n) ? T.push(n) : !e[t] && T.indexOf(n) > -1 ? T.splice(T.indexOf(n), 1) : "metaKey" === t && e[t] && 3 === T.length && (e.ctrlKey || e.shiftKey || e.altKey || (T = T.slice(T.indexOf(n))))
                    }), o in l) {
                    l[o] = !0;
                    for (const e in u) u[e] === o && (x[e] = !0);
                    if (!n) return
                }
                for (const i in l) Object.prototype.hasOwnProperty.call(l, i) && (l[i] = e[d[i]]);
                e.getModifierState && (!e.altKey || e.ctrlKey) && e.getModifierState("AltGraph") && (-1 === T.indexOf(17) && T.push(17), -1 === T.indexOf(18) && T.push(18), l[17] = !0, l[18] = !0);
                const r = E();
                if (n)
                    for (let i = 0; i < n.length; i++) n[i].scope === r && ("keydown" === e.type && n[i].keydown || "keyup" === e.type && n[i].keyup) && P(e, n[i], r, t);
                if (o in f)
                    for (let i = 0; i < f[o].length; i++)
                        if (("keydown" === e.type && f[o][i].keydown || "keyup" === e.type && f[o][i].keyup) && f[o][i].key) {
                            const n = f[o][i],
                                {
                                    splitKey: s
                                } = n,
                                a = n.key.split(s),
                                c = [];
                            for (let e = 0; e < a.length; e++) c.push(_(a[e]));
                            c.sort().join("") === T.sort().join("") && P(e, n, r, t)
                        }
            }

            function k(e) {
                return h.indexOf(e) > -1
            }

            function x(e, t, n) {
                T = [];
                const o = s(e);
                let a = [],
                    c = "all",
                    d = document,
                    l = 0,
                    S = !1,
                    I = !0,
                    m = "+",
                    g = !1,
                    E = !1;
                for (void 0 === n && "function" === typeof t && (n = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (c = t.scope), t.element && (d = t.element), t.keyup && (S = t.keyup), void 0 !== t.keydown && (I = t.keydown), void 0 !== t.capture && (g = t.capture), "string" === typeof t.splitKey && (m = t.splitKey), !0 === t.single && (E = !0)), "string" === typeof t && (c = t), E && R(e, c); l < o.length; l++) e = o[l].split(m), a = [], e.length > 1 && (a = i(u, e)), e = e[e.length - 1], e = "*" === e ? "*" : _(e), e in f || (f[e] = []), f[e].push({
                    keyup: S,
                    keydown: I,
                    scope: c,
                    mods: a,
                    shortcut: o[l],
                    method: n,
                    key: o[l],
                    splitKey: m,
                    element: d
                });
                "undefined" !== typeof d && !k(d) && window && (h.push(d), r(d, "keydown", e => {
                    G(e, d)
                }, g), p || (p = !0, r(window, "focus", () => {
                    T = []
                }, g)), r(d, "keyup", e => {
                    G(e, d), C(e)
                }, g))
            }

            function L(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                Object.keys(f).forEach(n => {
                    const o = f[n].filter(n => n.scope === t && n.shortcut === e);
                    o.forEach(e => {
                        e && e.method && e.method()
                    })
                })
            }
            const U = {
                getPressedKeyString: O,
                setScope: g,
                getScope: E,
                deleteScope: y,
                getPressedKeyCodes: N,
                getAllKeyCodes: w,
                isPressed: b,
                filter: A,
                trigger: L,
                unbind: R,
                keyMap: c,
                modifier: u,
                modifierMap: d
            };
            for (const j in U) Object.prototype.hasOwnProperty.call(U, j) && (x[j] = U[j]);
            if ("undefined" !== typeof window) {
                const e = window.hotkeys;
                x.noConflict = t => (t && window.hotkeys === x && (window.hotkeys = e), x), window.hotkeys = x
            }
            t["default"] = {
                keys: {},
                on(e, t, n = "", o = "all") {
                    return n && (this.keys[o] = this.keys[o] || {}, this.keys[o][e] = n), x(e, o, (e, n) => {
                        e.preventDefault(), t(e, n)
                    })
                },
                off(e, t = "all") {
                    return x.unbind(e, t)
                },
                scope(e) {
                    return e ? x.setScope(e) : x.getScope()
                },
                deleteScope(e) {
                    return x.deleteScope(e)
                }
            };
            const D = e => {
                const t = e.toLowerCase().split("+"),
                    n = t.length - 2,
                    o = t.length - 1;
                return "shift" === t[n] && (t[o] = t[o].toUpperCase(), t.splice(n, 1)), t.join("-")
            }
        },
        "4cca": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "g", (function() {
                return a
            })), n.d(t, "j", (function() {
                return u
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "f", (function() {
                return T
            })), n.d(t, "i", (function() {
                return p
            }));
            var o = n("0e9a");

            function r(e) {
                const t = ["bytes", "KB", "MB", "GB", "TB"];
                if (0 === e) return "0 bytes";
                const n = Math.floor(Math.log(e) / Math.log(1024));
                return 0 === n ? `${e} ${t[n]}` : `${(e/Math.pow(1024,n)).toFixed(1)} ${t[n]}`
            }

            function i(e, t) {
                let n = 1;
                const r = e => {
                    const i = t.find(t => t.lbl === e);
                    if (!i) return e;
                    const {
                        ext: s,
                        name: a
                    } = Object(o["r"])(e), [c] = Array.from(/\s?\(\d+\).*/.exec(e) || []), u = ` (${++n})` + (s ? "." + s : "");
                    let d = e;
                    return d = c ? d.replace(c, u) : a + u, r(d)
                };
                return r(e)
            }

            function s(e, t) {
                return e + ` (${t.toUpperCase()}:)`
            }

            function a(e, t) {
                return ["computer", e, t].filter(Boolean).join("/")
            }
            const c = /(tmpZip)?(\/EXTERNAL\/)?computer\/drive\d+\/?|file:\/\/\/storage\/emulated\/\d+|Android\/data\/com.visnalize.win7simu\/files/g;

            function u(e) {
                return e ? e.replace(c, "") : null
            }

            function d(e, t) {
                return "directory" === t ? "folder" : Object(o["j"])(e) ? "photo" : Object(o["e"])(e) || Object(o["o"])(e) ? "media" : Object(o["l"])(e) ? "wpl" : Object(o["n"])(e) ? "text" : Object(o["i"])(e) ? "executable" : Object(o["m"])(e) ? "richtext" : Object(o["d"])(e) ? "zip" : Object(o["r"])(e).ext ? "file" : "folder"
            }

            function l(e) {
                return "system" === e ? "disk-os" : "disk-data"
            }

            function f(e) {
                return Object(o["j"])(e) ? "photo" : Object(o["e"])(e) || Object(o["o"])(e) ? "player" : Object(o["q"])(e) || Object(o["k"])(e) ? "chrome" : Object(o["m"])(e) ? "wordpad" : Object(o["n"])(e) ? "notepad" : Object(o["d"])(e) || !Object(o["r"])(e).ext ? "computer" : "file"
            }

            function T(e) {
                const t = e.split("/");
                return t.pop(), t.join("/")
            }

            function p(e, t) {
                return e.replace(/%APPDATA%/g, t.appDataPath || "").replace(/%USERPROFILE%/g, t.userPath || "").replace(/\\/g, "/")
            }
        },
        "51e6": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Action", (function() {
                return d["a"]
            })), n.d(t, "isTouchDevice", (function() {
                return l
            })), n.d(t, "isOnline", (function() {
                return f
            })), n.d(t, "getBattery", (function() {
                return T
            })), n.d(t, "showToast", (function() {
                return p
            })), n.d(t, "openFile", (function() {
                return S
            })), n.d(t, "getDeviceInfo", (function() {
                return h
            })), n.d(t, "getAndroidVersion", (function() {
                return _
            })), n.d(t, "launchApp", (function() {
                return I
            })), n.d(t, "launchSetting", (function() {
                return m
            })), n.d(t, "restart", (function() {
                return g
            })), n.d(t, "getWeiScore", (function() {
                return E
            })), n.d(t, "getWeiBaseScore", (function() {
                return N
            }));
            var o = n("1547");
            const r = Object(o["d"])("Device", {
                web: () => n.e("chunk-2d0c8407").then(n.bind(null, "53a4")).then(e => new e.DeviceWeb)
            });
            var i = n("a81a");
            const s = Object(o["d"])("Launcher", {
                web: () => n.e("launcher").then(n.bind(null, "d5b0")).then(e => new e.LauncherWeb)
            });
            var a = n("c8ec");
            const c = Object(o["d"])("Toast", {
                web: () => n.e("chunk-2d0a45fe").then(n.bind(null, "05be")).then(e => new e.ToastWeb)
            });
            var u = n("f708"),
                d = n("6792");
            const l = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                f = async () => Object(u["a"])() ? (await a["a"].getStatus()).connected : new Promise(e => {
                    const t = new Image;
                    t.src = "https://picsum.photos/1/1", t.onload = () => e(!0), t.onerror = () => e(!1)
                }),
                T = async () => {
                    try {
                        return await r.getBatteryInfo()
                    } catch (e) {
                        return {
                            batteryLevel: 1,
                            isCharging: !1
                        }
                    }
                },
                p = async (e, t = "long") => {
                    await c.show({
                        text: "string" === typeof e ? e : null,
                        duration: t
                    });
                    const n = document.querySelector("pwa-toast");
                    n && n.setAttribute("style", "z-index: 9999")
                },
                S = (e = !1, t = "") => new Promise(n => {
                    const o = document.createElement("input");
                    o.type = "file", o.multiple = e, o.accept = t, o.click(), o.onchange = e => {
                        o.remove(), n(e.target)
                    }
                }),
                h = async () => {
                    const e = (await T()).batteryLevel || 1;
                    return { ...await r.getInfo(),
                        ...await i["a"].getInfo(),
                        battery: 100 * e
                    }
                },
                _ = async () => {
                    if (!Object(u["a"])()) return null;
                    const {
                        osVersion: e
                    } = await r.getInfo();
                    return parseInt(e)
                },
                I = e => s.launchPackage({
                    packageName: e
                }),
                m = e => s.launchMiscellaneous({
                    target: e
                }),
                g = () => window.location.reload(),
                E = async () => {
                    const e = await i["a"].getInfo(),
                        t = e.cpuCores,
                        n = e.totalMemory / 1024 ** 3,
                        o = document.createElement("canvas"),
                        r = !(!window.WebGL2RenderingContext || !o.getContext("webgl2"));
                    return {
                        cpu: t >= 8 ? 7.9 : t >= 4 ? 7 : t >= 2 ? 5 : 2,
                        ram: n >= 8 ? 7.9 : n >= 4 ? 6 : n >= 2 ? 5 : 3,
                        graphics: r ? 7.9 : 4
                    }
                },
                N = async () => {
                    const e = await E();
                    return Math.min(...Object.values(e))
                }
        },
        "554d": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return f
            }));
            var o = n("968c"),
                r = n("0d26"),
                i = n("2f62"),
                s = n("51e6");
            const a = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                c = "effects",
                u = Object(i["a"])(c),
                d = a,
                l = {
                    animateControls: !0,
                    animateWindows: !1,
                    animateTaskbar: !1,
                    enableAeroPeek: !1,
                    enableComposition: !1,
                    enableGlass: !1,
                    fadeMenus: !0,
                    fadeTooltips: !1,
                    fadeMenuItems: !1,
                    saveTaskbarThumbnails: !1,
                    showMouseShadows: !0,
                    showWindowShadows: !0,
                    showThumbnails: !1,
                    showSelectionRectangle: !1,
                    showWindowOnDrag: !1,
                    slideComboBoxes: !1,
                    smoothText: !1,
                    smoothScroll: !1,
                    desktopIconShadow: !0
                },
                f = ["enableAeroPeek", "enableComposition", "fadeTooltips", "fadeMenuItems", "saveTaskbarThumbnails", "showThumbnails", "showSelectionRectangle", "slideComboBoxes", "smoothText", "smoothScroll"],
                T = e => Object.keys(l).reduce((t, n) => {
                    const o = f.includes(n);
                    return { ...t,
                        [n]: "appearance" === e && !o
                    }
                }, {
                    preset: e
                });
            t["e"] = {
                namespaced: !0,
                state() {
                    return Object.keys(l).reduce((e, t) => ({ ...e,
                        [t]: null
                    }), {})
                },
                getters: {
                    presetAppearance: () => T("appearance"),
                    presetPerformance: () => T("performance")
                },
                mutations: {
                    [a.SetEffects]: (e, t) => {
                        Object.assign(e, t)
                    }
                },
                actions: {
                    [a.SetEffects]: async ({
                        commit: e,
                        dispatch: t
                    }, n) => {
                        if (n) e(a.SetEffects, n);
                        else {
                            const n = await t(a.GetPresetAuto);
                            e(a.SetEffects, n)
                        }
                    },
                    [a.SaveEffects]: async ({
                        state: e,
                        rootState: t
                    }) => o["default"].update("/configs/", t.user, "configs", {
                        effects: e
                    }),
                    [a.GetPresetAuto]: async ({
                        getters: e
                    }) => {
                        let t = await Object(s["getWeiBaseScore"])();
                        r["default"].enabled && r["default"].get("wei") && (t = parseFloat(r["default"].get("wei")));
                        const n = t > 4 ? e.presetAppearance : t >= 3 ? l : e.presetPerformance;
                        return { ...n,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        "58cd": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "inline-block bg-contain bg-no-repeat bg-center w-[16px] h-[16px] shrink-0 icon",
                        style: e.style,
                        attrs: {
                            "data-icon": e.id
                        }
                    })
                },
                r = [],
                i = {
                    props: {
                        id: String,
                        icon: String
                    },
                    computed: {
                        style() {
                            return {
                                "--icon": `url('${this.icon}')`
                            }
                        }
                    }
                },
                s = i,
                a = (n("ce5d"), n("2877")),
                c = Object(a["a"])(s, o, r, !1, null, null, null);
            t["a"] = c.exports
        },
        6792: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "b", (function() {
                return s
            }));
            var o = n("8229");
            const r = {
                    ACTION_ACCESSIBILITY_SETTINGS: "android.settings.ACCESSIBILITY_SETTINGS",
                    ACTION_ADD_ACCOUNT: "android.settings.ADD_ACCOUNT",
                    ACTION_AIRPLANE_MODE_SETTINGS: "android.settings.AIRPLANE_MODE_SETTINGS",
                    ACTION_APN_SETTINGS: "android.settings.APN_SETTINGS",
                    ACTION_APPLICATION_DETAILS_SETTINGS: "android.settings.APPLICATION_DETAILS_SETTINGS",
                    ACTION_APPLICATION_DEVELOPMENT_SETTINGS: "android.settings.APPLICATION_DEVELOPMENT_SETTINGS",
                    ACTION_APPLICATION_SETTINGS: "android.settings.APPLICATION_SETTINGS",
                    ACTION_APP_NOTIFICATION_BUBBLE_SETTINGS: "android.settings.APP_NOTIFICATION_BUBBLE_SETTINGS",
                    ACTION_APP_NOTIFICATION_SETTINGS: "android.settings.APP_NOTIFICATION_SETTINGS",
                    ACTION_APP_SEARCH_SETTINGS: "android.settings.APP_SEARCH_SETTINGS",
                    ACTION_APP_USAGE_SETTINGS: "android.settings.APP_USAGE_SETTINGS",
                    ACTION_BATTERY_SAVER_SETTINGS: "android.settings.BATTERY_SAVER_SETTINGS",
                    ACTION_BLUETOOTH_SETTINGS: "android.settings.BLUETOOTH_SETTINGS",
                    ACTION_CAPTIONING_SETTINGS: "android.settings.CAPTIONING_SETTINGS",
                    ACTION_CAST_SETTINGS: "android.settings.CAST_SETTINGS",
                    ACTION_CHANNEL_NOTIFICATION_SETTINGS: "android.settings.CHANNEL_NOTIFICATION_SETTINGS",
                    ACTION_DATA_ROAMING_SETTINGS: "android.settings.DATA_ROAMING_SETTINGS",
                    ACTION_DATA_USAGE_SETTINGS: "android.settings.DATA_USAGE_SETTINGS",
                    ACTION_DATE_SETTINGS: "android.settings.DATE_SETTINGS",
                    ACTION_DEVICE_INFO_SETTINGS: "android.settings.DEVICE_INFO_SETTINGS",
                    ACTION_DISPLAY_SETTINGS: "android.settings.DISPLAY_SETTINGS",
                    ACTION_DREAM_SETTINGS: "android.settings.DREAM_SETTINGS",
                    ACTION_FINGERPRINT_ENROLL: "android.settings.FINGERPRINT_ENROLL",
                    ACTION_HARD_KEYBOARD_SETTINGS: "android.settings.HARD_KEYBOARD_SETTINGS",
                    ACTION_HOME_SETTINGS: "android.settings.HOME_SETTINGS",
                    ACTION_INPUT_METHOD_SETTINGS: "android.settings.INPUT_METHOD_SETTINGS",
                    ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: "android.settings.INPUT_METHOD_SUBTYPE_SETTINGS",
                    ACTION_INTERNAL_STORAGE_SETTINGS: "android.settings.INTERNAL_STORAGE_SETTINGS",
                    ACTION_LOCALE_SETTINGS: "android.settings.LOCALE_SETTINGS",
                    ACTION_LOCATION_SOURCE_SETTINGS: "android.settings.LOCATION_SOURCE_SETTINGS",
                    ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: "android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS",
                    ACTION_MANAGE_APPLICATIONS_SETTINGS: "android.settings.MANAGE_APPLICATIONS_SETTINGS",
                    ACTION_MANAGE_DEFAULT_APPS_SETTINGS: "android.settings.MANAGE_DEFAULT_APPS_SETTINGS",
                    ACTION_MANAGE_OVERLAY_PERMISSION: "android.settings.MANAGE_OVERLAY_PERMISSION",
                    ACTION_MANAGE_UNKNOWN_APP_SOURCES: "android.settings.MANAGE_UNKNOWN_APP_SOURCES",
                    ACTION_MANAGE_WRITE_SETTINGS: "android.settings.MANAGE_WRITE_SETTINGS",
                    ACTION_MEMORY_CARD_SETTINGS: "android.settings.MEMORY_CARD_SETTINGS",
                    ACTION_NETWORK_OPERATOR_SETTINGS: "android.settings.NETWORK_OPERATOR_SETTINGS",
                    ACTION_NIGHT_DISPLAY_SETTINGS: "android.settings.NIGHT_DISPLAY_SETTINGS",
                    ACTION_NOTIFICATION_ASSISTANT_SETTINGS: "android.settings.NOTIFICATION_ASSISTANT_SETTINGS",
                    ACTION_NOTIFICATION_LISTENER_SETTINGS: "android.settings.NOTIFICATION_LISTENER_SETTINGS",
                    ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: "android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS",
                    ACTION_PRINT_SETTINGS: "android.settings.PRINT_SETTINGS",
                    ACTION_PRIVACY_SETTINGS: "android.settings.PRIVACY_SETTINGS",
                    ACTION_PROCESS_WIFI_EASY_CONNECT_URI: "android.settings.PROCESS_WIFI_EASY_CONNECT_URI",
                    ACTION_QUICK_LAUNCH_SETTINGS: "android.settings.QUICK_LAUNCH_SETTINGS",
                    ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: "android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
                    ACTION_REQUEST_SET_AUTOFILL_SERVICE: "android.settings.REQUEST_SET_AUTOFILL_SERVICE",
                    ACTION_SEARCH_SETTINGS: "android.settings.SEARCH_SETTINGS",
                    ACTION_SECURITY_SETTINGS: "android.settings.SECURITY_SETTINGS",
                    ACTION_SHOW_REGULATORY_INFO: "android.settings.SHOW_REGULATORY_INFO",
                    ACTION_SOUND_SETTINGS: "android.settings.SOUND_SETTINGS",
                    ACTION_SYNC_SETTINGS: "android.settings.SYNC_SETTINGS",
                    ACTION_USAGE_ACCESS_SETTINGS: "android.settings.USAGE_ACCESS_SETTINGS",
                    ACTION_USER_DICTIONARY_SETTINGS: "android.settings.USER_DICTIONARY_SETTINGS",
                    ACTION_VOICE_CONTROL_AIRPLANE_MODE: "android.settings.VOICE_CONTROL_AIRPLANE_MODE",
                    ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: "android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE",
                    ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: "android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE",
                    ACTION_VOICE_INPUT_SETTINGS: "android.settings.VOICE_INPUT_SETTINGS",
                    ACTION_VPN_SETTINGS: "android.settings.VPN_SETTINGS",
                    ACTION_VR_LISTENER_SETTINGS: "android.settings.VR_LISTENER_SETTINGS",
                    ACTION_WIFI_IP_SETTINGS: "android.settings.WIFI_IP_SETTINGS",
                    ACTION_WIFI_SETTINGS: "android.settings.WIFI_SETTINGS"
                },
                i = {
                    ChangePage: "changePage",
                    OpenWindow: "open",
                    CloseWindow: "close",
                    PingWindow: "ping"
                },
                s = {
                    THEME: "aero-1",
                    SIZE_ICONS: "md",
                    SHOW_ICONS: !0,
                    AUTO_ICONS: !1,
                    SHOW_CURSOR: !0,
                    CURSOR_SCHEME: o["c"].Aero,
                    CURSOR_TRAIL: !1,
                    CURSOR_SHADOW: !1,
                    CURSOR_HIGHLIGHT: !1,
                    SCREENSAVER: {
                        type: null,
                        timeout: 1,
                        showLogon: !1
                    }
                }
        },
        "7e97": function(e, t, n) {},
        8229: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "f", (function() {
                return c
            }));
            const o = {
                    Default: 0,
                    Working: 1,
                    Busy: 2,
                    Precision: 3,
                    Typing: 4,
                    ResizeV: 6,
                    ResizeH: 7,
                    ResizeD1: 8,
                    ResizeD2: 9,
                    Move: 10,
                    Pencil: "pencil",
                    Picker: "picker",
                    Bucket: "bucket",
                    Eraser: "eraser",
                    Shape: "shape",
                    Brush: "brush"
                },
                r = {
                    Aero: 0,
                    Standard: 1,
                    Black: 2,
                    Magnified: 3,
                    ThreeD: 4,
                    Hand: 5,
                    MacOS: 6,
                    Ubuntu: 7
                },
                i = {
                    [r.Aero]: {
                        label: "Windows Aero",
                        suffix: "-aero"
                    },
                    [r.Standard]: {
                        label: "Windows Standard",
                        suffix: "-standard"
                    },
                    [r.Black]: {
                        label: "Windows Black",
                        suffix: "-black"
                    },
                    [r.Magnified]: {
                        label: "Magnified",
                        suffix: "-magnified"
                    },
                    [r.ThreeD]: {
                        label: "3d-White",
                        suffix: "-3d"
                    },
                    [r.Hand]: {
                        label: "Hands",
                        suffix: "-hand"
                    },
                    [r.MacOS]: {
                        label: "MacOS",
                        suffix: "-macos"
                    },
                    [r.Ubuntu]: {
                        label: "Ubuntu",
                        suffix: "-ubuntu"
                    }
                },
                s = {
                    [o.Default]: "default",
                    [o.Working]: "working",
                    [o.Busy]: "busy",
                    [o.Precision]: "precision",
                    [o.Typing]: "typing",
                    [o.ResizeV]: "resizev",
                    [o.ResizeH]: "resizeh",
                    [o.ResizeD1]: "resized1",
                    [o.ResizeD2]: "resized2",
                    [o.Move]: "move"
                },
                a = {
                    tl: o.ResizeD1,
                    br: o.ResizeD1,
                    tr: o.ResizeD2,
                    bl: o.ResizeD2,
                    tm: o.ResizeV,
                    mt: o.ResizeV,
                    bm: o.ResizeV,
                    mb: o.ResizeV,
                    ml: o.ResizeH,
                    mr: o.ResizeH,
                    "top-left": o.ResizeD1,
                    "bottom-right": o.ResizeD1,
                    "top-right": o.ResizeD2,
                    "bottom-left": o.ResizeD2,
                    top: o.ResizeV,
                    bottom: o.ResizeV,
                    left: o.ResizeH,
                    right: o.ResizeH
                },
                c = {
                    select: o.Shape,
                    pencil: o.Pencil,
                    bucket: o.Bucket,
                    text: o.Typing,
                    eraser: o.Eraser,
                    picker: o.Picker,
                    brush: o.Brush,
                    shape: o.Shape
                }
        },
        "968c": function(e, t, n) {
            "use strict";
            n.r(t);
            const o = () => Promise.all([n.e("chunk-9691fd08"), n.e("database")]).then(n.bind(null, "5500")),
                r = async () => (await n.e("localforage").then(n.t.bind(null, "a002", 7))).default,
                i = (e, t, n) => e + t.uid + ("configs" !== n ? "/" + n : ""),
                s = (e, t) => t ? e + t.uid : e.replace(/\//g, ""),
                a = {
                    get: async (e, t, n) => t ? (await o()).get(i(e, t, n)) : (await r()).getItem(n),
                    update: async (e, t, n, s) => t ? (await o()).update(i(e, t, n), s) : a.get(e, t, n).then(async e => (await r()).setItem(n, { ...e,
                        ...s
                    })),
                    remove: async (e, t, n) => t ? (await o()).remove(i(e, t, n)) : (await r()).removeItem(n),
                    local: {}
                };
            a.local.update = async (e, t, n) => {
                const o = s(e, t);
                return (await r()).setItem(o, n)
            }, a.local.get = async (e, t) => {
                const n = s(e, t);
                return (await r()).getItem(n)
            }, a.local.remove = async (e, t) => {
                const n = s(e, t);
                return (await r()).removeItem(n)
            }, a.local.clean = async function(e) {
                const t = await r(),
                    n = await t.keys();
                return Promise.all(n.filter(t => t.includes(e)).map(e => this.remove(e)))
            }, t["default"] = a
        },
        a81a: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var o = n("1547");
            const r = Object(o["d"])("Device2", {
                web: () => n.e("device2").then(n.bind(null, "1b4b")).then(e => new e.DeviceWeb)
            })
        },
        b933: function(e, t, n) {
            "use strict";
            n("7e97")
        },
        c8ec: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var o = n("1547");
            const r = Object(o["d"])("Network", {
                web: () => n.e("chunk-2d0abc10").then(n.bind(null, "172f")).then(e => new e.NetworkWeb)
            })
        },
        ce5d: function(e, t, n) {
            "use strict";
            n("0f9f")
        },
        e47c: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "a", (function() {
                return T
            }));
            var o = n("2f62"),
                r = n("3b8c");
            const i = {
                    TogglePreview: "togglePreview",
                    SetBootTheme: "setBootTheme",
                    LoadTheme: "loadTheme",
                    UnloadTheme: "unloadTheme"
                },
                s = "personalization",
                a = Object(o["a"])(s),
                c = i,
                u = {
                    win7: "win7",
                    "aero-1": "win7",
                    "aero-2": "win7",
                    "aero-3": "win7",
                    "aero-4": "win7",
                    "basic-1": "win7",
                    "basic-2": "win7-classic",
                    "basic-3": "win7-classic",
                    "basic-4": "win7-classic",
                    win95: "win9x",
                    win98: "win9x",
                    win2k: "win9x",
                    winxpE: "winxp",
                    winxpG: "winxp",
                    winxpN: "winxp",
                    winxpR: "winxp",
                    winxpS: "winxp",
                    winxpZ: "winxp",
                    win81: "win8",
                    win11dark: "win11",
                    winLP: "winlonghorn",
                    winLS: "winlonghorn"
                };
            t["e"] = {
                namespaced: !0,
                state() {
                    return {
                        bootTheme: null,
                        previewTheme: null,
                        loadedTheme: null
                    }
                },
                getters: {
                    themes: () => r["a"]
                },
                mutations: {
                    [i.TogglePreview]: (e, t) => {
                        e.previewTheme = t || null
                    },
                    [i.SetBootTheme]: (e, t) => {
                        e.bootTheme = t
                    },
                    [i.LoadTheme]: (e, t) => {
                        e.loadedTheme = t
                    }
                },
                actions: {
                    [i.TogglePreview]: ({
                        commit: e
                    }, t) => {
                        e(i.TogglePreview, t)
                    },
                    [i.LoadTheme]: async ({
                        commit: e,
                        dispatch: t
                    }, o) => {
                        if (o) {
                            await t(i.UnloadTheme);
                            try {
                                const t = l(o),
                                    {
                                        default: r
                                    } = await n("15d4")(`./${t}.scss`);
                                r.use(), e(i.LoadTheme, r)
                            } catch (r) {
                                console.error("Failed to load theme style for: " + o, r)
                            }
                        }
                    },
                    [i.UnloadTheme]: ({
                        state: e,
                        commit: t
                    }) => {
                        e.loadedTheme && (e.loadedTheme.unuse(), t(i.LoadTheme, null))
                    }
                }
            };
            const d = e => "win11dark" === e ? "win11" : "win81" === e ? "win8" : "winLP" === e ? "winLS" : /xp.{1}/.test(e) ? "winxp" : /^(aero|basic)-/.test(e) || "base" === e ? "win7" : e,
                l = e => u[e] || e,
                f = e => "win7" === e ? "aero-1" : e,
                T = {
                    AeroGlass: /^aero|winvista/,
                    AeroTaskbarItem: /^win8|^aero|basic-1/,
                    CenterTaskbar: /win11|chromeos/,
                    ChangeColor: /^aero|^win8|win10|^win11|kubuntu|ubuntu|oxygen/,
                    ChangeTransparency: /^aero|^win8|kubuntu/,
                    DarkMode: /basic-3|win11dark|macos|ubuntu|kubuntu|oxygen|aeroNoir/
                }
        },
        e5dd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var o = n("1547");
            const r = Object(o["d"])("Browser", {
                web: () => n.e("chunk-2d0e2170").then(n.bind(null, "7ce3")).then(e => new e.BrowserWeb)
            })
        },
        e77c: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("window-main", {
                        staticClass: "is-calc",
                        attrs: {
                            id: "window-calc",
                            w: 230,
                            h: "auto",
                            resizable: !1
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: "calc",
                            title: e.$t("calc")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            disableMaximize: ""
                        }
                    })], 1), n("window-body", [n("div", {
                        staticClass: "bg-black/5 mb-1 calc__display"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.operation,
                            expression: "operation"
                        }],
                        staticClass: "bg-transparent px-1 border-0 w-full font-mono text-current text-xs text-right cursor-default pointer-events-none",
                        attrs: {
                            disabled: ""
                        },
                        domProps: {
                            value: e.operation
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.operation = t.target.value)
                            }
                        }
                    }), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.result,
                            expression: "result"
                        }],
                        staticClass: "bg-transparent px-1 border-0 w-full font-mono text-current text-2xl text-right cursor-default pointer-events-none",
                        attrs: {
                            disabled: "",
                            maxlength: "20",
                            "data-test-result-input": ""
                        },
                        domProps: {
                            value: e.result
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.result = t.target.value)
                            }
                        }
                    })]), n("div", {
                        staticClass: "gap-1 calc__button-grid grid grid-cols-5 grid-rows-5 w-full"
                    }, e._l(e.buttons, (function(t, o) {
                        return n("button", {
                            key: o,
                            staticClass: "calc__button-item",
                            class: {
                                "is-bright": "digit" === t.type || "decimal" === t.type, "is-operator": "op" === t.type || "equals" === t.type, "is-unary": t.unary, "row-span-2": t.rowSpan, "col-span-2": t.colSpan
                            },
                            attrs: {
                                "data-action": t.action,
                                "data-test-calc-button": t.label
                            },
                            on: {
                                click: function(n) {
                                    return e.handleButton(t)
                                }
                            }
                        }, [n("span", [e._v(e._s(t.label))])])
                    })), 0)])], 1)
                },
                r = [],
                i = n("1521"),
                s = n("e863"),
                a = n("1d26"),
                c = n("e314");
            const u = [{
                label: "←",
                type: "func",
                action: "backspace"
            }, {
                label: "CE",
                type: "func",
                action: "clearEntry"
            }, {
                label: "C",
                type: "func",
                action: "clearAll"
            }, {
                label: "±",
                type: "func",
                action: "negate"
            }, {
                label: "√",
                type: "func",
                action: "sqrt",
                unary: !0
            }, {
                label: "7",
                type: "digit"
            }, {
                label: "8",
                type: "digit"
            }, {
                label: "9",
                type: "digit"
            }, {
                label: "/",
                type: "op",
                op: "divide"
            }, {
                label: "%",
                type: "func",
                action: "percent",
                unary: !0
            }, {
                label: "4",
                type: "digit"
            }, {
                label: "5",
                type: "digit"
            }, {
                label: "6",
                type: "digit"
            }, {
                label: "*",
                type: "op",
                op: "multiply"
            }, {
                label: "1/x",
                type: "func",
                action: "reciprocal",
                unary: !0
            }, {
                label: "1",
                type: "digit"
            }, {
                label: "2",
                type: "digit"
            }, {
                label: "3",
                type: "digit"
            }, {
                label: "-",
                type: "op",
                op: "subtract"
            }, {
                label: "=",
                type: "func",
                action: "equals",
                rowSpan: !0
            }, {
                label: "0",
                type: "digit",
                colSpan: !0
            }, {
                label: ".",
                type: "decimal"
            }, {
                label: "+",
                type: "op",
                op: "add"
            }];
            var d = {
                    data() {
                        return {
                            display: "0",
                            operationText: "",
                            accumulator: null,
                            pendingOp: null,
                            justEvaluated: !1,
                            buttons: u
                        }
                    },
                    computed: {
                        result() {
                            return this.display
                        },
                        operation() {
                            return this.operationText
                        }
                    },
                    methods: {
                        handleButton(e) {
                            return "digit" === e.type ? this.inputDigit(e.label) : "decimal" === e.type ? this.inputDecimal() : "op" === e.type ? this.setOperator(e.op, e.label) : "func" === e.type ? this.runFunction(e.action) : void 0
                        },
                        inputDigit(e) {
                            this.justEvaluated || "0" === this.display ? (this.display = e, this.justEvaluated = !1) : this.display.length < 20 && (this.display += e)
                        },
                        inputDecimal() {
                            this.justEvaluated ? (this.display = "0.", this.justEvaluated = !1) : this.display.includes(".") || (this.display += ".")
                        },
                        setOperator(e, t) {
                            this.pendingOp && this.evaluate(), this.accumulator = Number(this.display), this.pendingOp = e, this.operationText = `${this.accumulator} ${t} `, this.justEvaluated = !0
                        },
                        evaluate() {
                            if (!this.pendingOp) return;
                            const e = this.accumulator,
                                t = Number(this.display),
                                n = {
                                    add: (e, t) => e + t,
                                    subtract: (e, t) => e - t,
                                    multiply: (e, t) => e * t,
                                    divide: (e, t) => 0 === t ? NaN : e / t
                                },
                                o = n[this.pendingOp](e, t);
                            this.display = Number.isNaN(o) ? "Invalid input" : String(o), this.operationText = "", this.accumulator = null, this.pendingOp = null, this.justEvaluated = !0
                        },
                        runFunction(e) {
                            var t;
                            let n = Number(this.display);
                            const o = {
                                backspace: () => {
                                    this.display = this.display.length > 1 ? this.display.slice(0, -1) : "0"
                                },
                                clearEntry: () => this.display = "0",
                                clearAll: () => {
                                    this.display = "0", this.operationText = "", this.accumulator = null, this.pendingOp = null
                                },
                                negate: () => this.display = String(-n),
                                sqrt: () => this.display = n < 0 ? "Invalid input" : String(Math.sqrt(n)),
                                percent: () => this.display = String(n / 100),
                                reciprocal: () => this.display = 0 === n ? "Invalid input" : String(1 / n),
                                equals: this.evaluate
                            };
                            null === (t = o[e]) || void 0 === t || t.call(o), this.justEvaluated = !0
                        }
                    },
                    components: {
                        WindowControls: s["a"],
                        WindowMain: a["a"],
                        WindowTitlebar: c["a"],
                        WindowBody: i["a"]
                    }
                },
                l = d,
                f = (n("b933"), n("2877")),
                T = Object(f["a"])(l, o, r, !1, null, null, null);
            t["default"] = T.exports
        }
    }
]);