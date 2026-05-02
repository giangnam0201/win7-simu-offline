(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["installer", "hotkey"], {
        "0616": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("button", {
                        directives: [{
                            name: "tap",
                            rawName: "v-tap:400",
                            value: e.handleDoubleClick,
                            expression: "handleDoubleClick",
                            arg: "400"
                        }, {
                            name: "clickout",
                            rawName: "v-clickout",
                            value: e.handleClickOutside,
                            expression: "handleClickOutside"
                        }, {
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: e.handleOpenMenu,
                            expression: "handleOpenMenu",
                            arg: "touchhold"
                        }],
                        class: ["p-0 text-left listview__item", {
                            "is-active": e.item.active
                        }],
                        style: e.shortcutIcon,
                        attrs: {
                            title: e.item.label,
                            "data-test-listview-item": e.item.type
                        },
                        on: {
                            contextmenu: e.handleOpenMenu,
                            click: function(t) {
                                return t.stopPropagation(), e.handleClick(t)
                            }
                        }
                    }, [e.item.icon ? n("span", {
                        staticClass: "listview__item-iconbox shrink-0",
                        style: e.item.iconSize ? {
                            width: e.item.iconSize + "px",
                            height: e.item.iconSize + "px"
                        } : {}
                    }, [n("base-icon", {
                        staticClass: "w-full h-full listview__item-icon",
                        attrs: {
                            id: e.item.type,
                            icon: e.item.icon
                        }
                    })], 1) : e._e(), n("span", {
                        staticClass: "w-full overflow-hidden listview__item-info"
                    }, [e.item.renaming ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.newFullName.name,
                            expression: "newFullName.name"
                        }],
                        ref: "input",
                        staticClass: "p-0 border border-current border-solid leading-5 listview__item-label is-input",
                        attrs: {
                            maxlength: "30"
                        },
                        domProps: {
                            value: e.newFullName.name
                        },
                        on: {
                            blur: e.rename,
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.blur(t)
                            },
                            input: function(t) {
                                t.target.composing || e.$set(e.newFullName, "name", t.target.value)
                            }
                        }
                    }) : n("span", {
                        staticClass: "block border border-transparent border-solid overflow-hidden text-base text-ellipsis leading-5 whitespace-nowrap shrink-0 listview__item-label",
                        style: {
                            width: e.item.labelWidth ? e.normalizeWidth(e.item.labelWidth) : void 0
                        }
                    }, [e._v(" " + e._s(e.item.label) + " ")]), e._t("default")], 2)])
                },
                i = [],
                a = n("58cd"),
                s = n("a321"),
                r = n("2f62"),
                c = n("0e9a"),
                l = {
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            newFullName: Object(c["r"])(this.item.label.toString())
                        }
                    },
                    computed: { ...Object(r["d"])({
                            themeData: "themeData"
                        }),
                        shortcutIcon() {
                            return {
                                "--shortcut": `url('${this.themeData.icon.shortcut}')`
                            }
                        }
                    },
                    watch: {
                        "item.renaming" (e) {
                            e ? this.$nextTick().then(() => this.$refs.input.select()) : this.newFullName.name || (this.newFullName = Object(c["r"])(this.item.label.toString()))
                        }
                    },
                    mounted() {
                        this.$bus.$on("refresh", this.refresh)
                    },
                    beforeDestroy() {
                        this.$bus.$off("refresh", this.refresh)
                    },
                    methods: {
                        normalizeWidth(e) {
                            return s["a"].normalizeWidth(e, this.item.extras.length, !0)
                        },
                        handleClick() {
                            this.item.click && this.item.click()
                        },
                        handleDoubleClick(e, t) {
                            "INPUT" !== e.target.tagName && t && this.item.dblclick && this.item.dblclick(e)
                        },
                        handleOpenMenu(e) {
                            this.item.openMenu && this.item.openMenu(e)
                        },
                        handleClickOutside(e) {
                            this.item.outclick && this.item.outclick(e)
                        },
                        rename() {
                            this.item.rename && this.item.rename(this.newFullName)
                        },
                        blur() {
                            this.$refs.input.blur()
                        },
                        refresh() {
                            const e = this.$el;
                            e.style.opacity = "0", setTimeout(() => e.style.opacity = null, 50)
                        }
                    },
                    components: {
                        BaseIcon: a["a"]
                    }
                },
                u = l,
                d = (n("f746"), n("2877")),
                h = Object(d["a"])(u, o, i, !1, null, null, null);
            t["a"] = h.exports
        },
        "0f8d": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("base-message", {
                        attrs: {
                            type: "warning",
                            theme: e.theme
                        },
                        on: {
                            close: function(t) {
                                return e.$emit("cancel")
                            }
                        },
                        scopedSlots: e._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.$emit("confirm")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("ok")) + " ")]), n("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.$emit("cancel")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("cancel")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [e._t("default")], 2)
                },
                i = [],
                a = n("fceb"),
                s = {
                    props: {
                        theme: String
                    },
                    components: {
                        BaseMessage: a["a"]
                    }
                },
                r = s,
                c = n("2877"),
                l = Object(c["a"])(r, o, i, !1, null, null, null);
            t["a"] = l.exports
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
                i = [],
                a = {
                    props: {
                        layout: {
                            type: String,
                            default: "default",
                            validator: e => ["message", "dialog", "settings", "panel", "default"].includes(e)
                        }
                    }
                },
                s = a,
                r = n("2877"),
                c = Object(r["a"])(s, o, i, !1, null, null, null);
            t["a"] = c.exports
        },
        "15f0": function(e, t, n) {},
        2877: function(e, t, n) {
            "use strict";

            function o(e, t, n, o, i, a, s, r) {
                var c, l = "function" === typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), o && (l.functional = !0), a && (l._scopeId = "data-v-" + a), s ? (c = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                    }, l._ssrRegister = c) : i && (c = r ? function() {
                        i.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : i), c)
                    if (l.functional) {
                        l._injectStyles = c;
                        var u = l.render;
                        l.render = function(e, t) {
                            return c.call(t), u(e, t)
                        }
                    } else {
                        var d = l.beforeCreate;
                        l.beforeCreate = d ? [].concat(d, c) : [c]
                    }
                return {
                    exports: e,
                    options: l
                }
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        "2ea7": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "toCodemirrorKey", (function() {
                return L
            }));
            const o = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

            function i(e, t, n, o) {
                e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on".concat(t), () => {
                    n(window.event)
                })
            }

            function a(e, t) {
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

            function r(e, t) {
                const n = e.length >= t.length ? e : t,
                    o = e.length >= t.length ? t : e;
                let i = !0;
                for (let a = 0; a < n.length; a++) - 1 === o.indexOf(n[a]) && (i = !1);
                return i
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
                l = {
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
                u = {
                    16: "shiftKey",
                    18: "altKey",
                    17: "ctrlKey",
                    91: "metaKey",
                    shiftKey: 16,
                    ctrlKey: 17,
                    altKey: 18,
                    metaKey: 91
                },
                d = {
                    16: !1,
                    18: !1,
                    17: !1,
                    91: !1
                },
                h = {};
            for (let U = 1; U < 20; U++) c["f".concat(U)] = 111 + U;
            let f = [],
                m = !1,
                p = "all";
            const w = [],
                y = e => c[e.toLowerCase()] || l[e.toLowerCase()] || e.toUpperCase().charCodeAt(0),
                g = e => Object.keys(c).find(t => c[t] === e),
                v = e => Object.keys(l).find(t => l[t] === e);

            function b(e) {
                p = e || "all"
            }

            function k() {
                return p || "all"
            }

            function I() {
                return f.slice(0)
            }

            function C() {
                return f.map(e => g(e) || v(e) || String.fromCharCode(e))
            }

            function T() {
                const e = [];
                return Object.keys(h).forEach(t => {
                    h[t].forEach(t => {
                        let {
                            key: n,
                            scope: o,
                            mods: i,
                            shortcut: a
                        } = t;
                        e.push({
                            scope: o,
                            shortcut: a,
                            mods: i,
                            keys: n.split("+").map(e => y(e))
                        })
                    })
                }), e
            }

            function x(e) {
                const t = e.target || e.srcElement,
                    {
                        tagName: n
                    } = t;
                let o = !0;
                return !t.isContentEditable && ("INPUT" !== n && "TEXTAREA" !== n && "SELECT" !== n || t.readOnly) || (o = !1), o
            }

            function E(e) {
                return "string" === typeof e && (e = y(e)), -1 !== f.indexOf(e)
            }

            function _(e, t) {
                let n, o;
                e || (e = k());
                for (const i in h)
                    if (Object.prototype.hasOwnProperty.call(h, i))
                        for (n = h[i], o = 0; o < n.length;) n[o].scope === e ? n.splice(o, 1) : o++;
                k() === e && b(t || "all")
            }

            function S(e) {
                let t = e.keyCode || e.which || e.charCode;
                const n = f.indexOf(t);
                if (n >= 0 && f.splice(n, 1), e.key && "meta" === e.key.toLowerCase() && f.splice(0, f.length), 93 !== t && 224 !== t || (t = 91), t in d) {
                    d[t] = !1;
                    for (const e in l) l[e] === t && (P[e] = !1)
                }
            }

            function A(e) {
                if ("undefined" === typeof e) Object.keys(h).forEach(e => delete h[e]);
                else if (Array.isArray(e)) e.forEach(e => {
                    e.key && O(e)
                });
                else if ("object" === typeof e) e.key && O(e);
                else if ("string" === typeof e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    let [i, a] = n;
                    "function" === typeof i && (a = i, i = ""), O({
                        key: e,
                        scope: i,
                        method: a,
                        splitKey: "+"
                    })
                }
            }
            const O = e => {
                let {
                    key: t,
                    scope: n,
                    method: o,
                    splitKey: i = "+"
                } = e;
                const c = s(t);
                c.forEach(e => {
                    const t = e.split(i),
                        s = t.length,
                        c = t[s - 1],
                        u = "*" === c ? "*" : y(c);
                    if (!h[u]) return;
                    n || (n = k());
                    const d = s > 1 ? a(l, t) : [];
                    h[u] = h[u].filter(e => {
                        const t = !o || e.method === o;
                        return !(t && e.scope === n && r(e.mods, d))
                    })
                })
            };

            function M(e, t, n, o) {
                if (t.element !== o) return;
                let i;
                if (t.scope === n || "all" === t.scope) {
                    i = t.mods.length > 0;
                    for (const e in d) Object.prototype.hasOwnProperty.call(d, e) && (!d[e] && t.mods.indexOf(+e) > -1 || d[e] && -1 === t.mods.indexOf(+e)) && (i = !1);
                    (0 !== t.mods.length || d[16] || d[18] || d[17] || d[91]) && !i && "*" !== t.shortcut || (t.keys = [], t.keys = t.keys.concat(f), !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)))
                }
            }

            function R(e, t) {
                const n = h["*"];
                let o = e.keyCode || e.which || e.charCode;
                if (!P.filter.call(this, e)) return;
                if (93 !== o && 224 !== o || (o = 91), -1 === f.indexOf(o) && 229 !== o && f.push(o), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(t => {
                        const n = u[t];
                        e[t] && -1 === f.indexOf(n) ? f.push(n) : !e[t] && f.indexOf(n) > -1 ? f.splice(f.indexOf(n), 1) : "metaKey" === t && e[t] && 3 === f.length && (e.ctrlKey || e.shiftKey || e.altKey || (f = f.slice(f.indexOf(n))))
                    }), o in d) {
                    d[o] = !0;
                    for (const e in l) l[e] === o && (P[e] = !0);
                    if (!n) return
                }
                for (const a in d) Object.prototype.hasOwnProperty.call(d, a) && (d[a] = e[u[a]]);
                e.getModifierState && (!e.altKey || e.ctrlKey) && e.getModifierState("AltGraph") && (-1 === f.indexOf(17) && f.push(17), -1 === f.indexOf(18) && f.push(18), d[17] = !0, d[18] = !0);
                const i = k();
                if (n)
                    for (let a = 0; a < n.length; a++) n[a].scope === i && ("keydown" === e.type && n[a].keydown || "keyup" === e.type && n[a].keyup) && M(e, n[a], i, t);
                if (o in h)
                    for (let a = 0; a < h[o].length; a++)
                        if (("keydown" === e.type && h[o][a].keydown || "keyup" === e.type && h[o][a].keyup) && h[o][a].key) {
                            const n = h[o][a],
                                {
                                    splitKey: s
                                } = n,
                                r = n.key.split(s),
                                c = [];
                            for (let e = 0; e < r.length; e++) c.push(y(r[e]));
                            c.sort().join("") === f.sort().join("") && M(e, n, i, t)
                        }
            }

            function N(e) {
                return w.indexOf(e) > -1
            }

            function P(e, t, n) {
                f = [];
                const o = s(e);
                let r = [],
                    c = "all",
                    u = document,
                    d = 0,
                    p = !1,
                    g = !0,
                    v = "+",
                    b = !1,
                    k = !1;
                for (void 0 === n && "function" === typeof t && (n = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (c = t.scope), t.element && (u = t.element), t.keyup && (p = t.keyup), void 0 !== t.keydown && (g = t.keydown), void 0 !== t.capture && (b = t.capture), "string" === typeof t.splitKey && (v = t.splitKey), !0 === t.single && (k = !0)), "string" === typeof t && (c = t), k && A(e, c); d < o.length; d++) e = o[d].split(v), r = [], e.length > 1 && (r = a(l, e)), e = e[e.length - 1], e = "*" === e ? "*" : y(e), e in h || (h[e] = []), h[e].push({
                    keyup: p,
                    keydown: g,
                    scope: c,
                    mods: r,
                    shortcut: o[d],
                    method: n,
                    key: o[d],
                    splitKey: v,
                    element: u
                });
                "undefined" !== typeof u && !N(u) && window && (w.push(u), i(u, "keydown", e => {
                    R(e, u)
                }, b), m || (m = !0, i(window, "focus", () => {
                    f = []
                }, b)), i(u, "keyup", e => {
                    R(e, u), S(e)
                }, b))
            }

            function W(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                Object.keys(h).forEach(n => {
                    const o = h[n].filter(n => n.scope === t && n.shortcut === e);
                    o.forEach(e => {
                        e && e.method && e.method()
                    })
                })
            }
            const D = {
                getPressedKeyString: C,
                setScope: b,
                getScope: k,
                deleteScope: _,
                getPressedKeyCodes: I,
                getAllKeyCodes: T,
                isPressed: E,
                filter: x,
                trigger: W,
                unbind: A,
                keyMap: c,
                modifier: l,
                modifierMap: u
            };
            for (const U in D) Object.prototype.hasOwnProperty.call(D, U) && (P[U] = D[U]);
            if ("undefined" !== typeof window) {
                const e = window.hotkeys;
                P.noConflict = t => (t && window.hotkeys === P && (window.hotkeys = e), P), window.hotkeys = P
            }
            t["default"] = {
                keys: {},
                on(e, t, n = "", o = "all") {
                    return n && (this.keys[o] = this.keys[o] || {}, this.keys[o][e] = n), P(e, o, (e, n) => {
                        e.preventDefault(), t(e, n)
                    })
                },
                off(e, t = "all") {
                    return P.unbind(e, t)
                },
                scope(e) {
                    return e ? P.setScope(e) : P.getScope()
                },
                deleteScope(e) {
                    return P.deleteScope(e)
                }
            };
            const L = e => {
                const t = e.toLowerCase().split("+"),
                    n = t.length - 2,
                    o = t.length - 1;
                return "shift" === t[n] && (t[o] = t[o].toUpperCase(), t.splice(n, 1)), t.join("-")
            }
        },
        "411e": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["is-static p-1.5 window__main active", {
                            pinging: e.pinging
                        }, {
                            "center-absolute": !e.decentered
                        }, {
                            "w-[256px] is-wait": "wait" === e.variant
                        }, {
                            "w-[340px] is-help": "help" === e.variant
                        }, {
                            "w-[340px] is-message": "message" === e.variant
                        }]
                    }, ["wait" === e.variant ? n("window-body", {
                        staticClass: "is-wait"
                    }, [e._t("default")], 2) : e._t("default")], 2)
                },
                i = [],
                a = n("1521"),
                s = n("7744"),
                r = {
                    mixins: [s["a"]],
                    props: {
                        variant: {
                            type: String,
                            validator: e => ["wait", "help", "message"].includes(e)
                        },
                        parent: String,
                        decentered: Boolean
                    },
                    components: {
                        WindowBody: a["a"]
                    }
                },
                c = r,
                l = (n("9312"), n("2877")),
                u = Object(l["a"])(c, o, i, !1, null, null, null);
            t["a"] = u.exports
        },
        "49fb": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("main", {
                        staticClass: "relative bg-cover bg-right-top w-screen h-screen installer__main",
                        style: e.bg,
                        attrs: {
                            "data-show-dummy-cursor": "",
                            "data-test-dummy-installer-main": ""
                        }
                    }, [n("style", {
                        tag: "component"
                    }, [e._v(" :root{font-size: 9pt} ")]), e.view === e.View.Home ? n("installer-home", {
                        on: {
                            install: e.install,
                            close: function(t) {
                                e.showWarning = !0
                            }
                        }
                    }) : e.view === e.View.Installer ? n("installer-program", {
                        on: {
                            close: function(t) {
                                e.showWarning = !0
                            }
                        }
                    }) : n("div", {
                        staticClass: "center-absolute text-white text-2xl installer__text"
                    }, [e._v(" Setup is starting... ")]), e.showWarning ? n("div", {
                        staticClass: "installer__message"
                    }, [n("message-warning", {
                        attrs: {
                            theme: "aero-1"
                        },
                        on: {
                            confirm: e.close,
                            cancel: function(t) {
                                e.showWarning = !1
                            }
                        }
                    }, [e._v(" Exit the installation? ")])], 1) : e._e()], 1)
                },
                i = [],
                a = n("6c8d"),
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "installer__home"
                    }, [n("window-main-static", {
                        staticClass: "max-h-screen"
                    }, [n("window-titlebar", {
                        attrs: {
                            title: "Install Windows",
                            icon: e.logo
                        }
                    }, [n("window-controls", {
                        attrs: {
                            close: function() {
                                return e.$emit("close")
                            },
                            hideMinimize: "",
                            hideMaximize: "",
                            theme: "win2k"
                        }
                    })], 1), n("window-body", {
                        staticClass: "bg-left-top text-white",
                        style: e.bg
                    }, [n("h1", {
                        staticClass: "my-10 text-center mb"
                    }, [n("img", {
                        attrs: {
                            src: e.logo,
                            alt: "Windows icon",
                            width: "80"
                        }
                    }), n("div", {
                        staticClass: "font-normal text-5xl"
                    }, [e._v("Windows"), n("sup", {
                        staticClass: "text-xs"
                    }, [e._v("®")]), e._v(" 7")])]), e.showHome ? [n("div", {
                        staticClass: "center-flex-x mb-3"
                    }, [n("div", {
                        staticClass: "w-[256px] text-right"
                    }, [e._v("Language to install:")]), n("winui-dropdown", {
                        staticClass: "ml-1 w-[320px]",
                        attrs: {
                            value: "en"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "en"
                        }
                    }, [e._v("English")])])], 1), n("div", {
                        staticClass: "center-flex-x mb-3"
                    }, [n("div", {
                        staticClass: "w-[256px] text-right"
                    }, [e._v("Time and currency format:")]), n("winui-dropdown", {
                        staticClass: "ml-1 w-[320px]",
                        attrs: {
                            value: "en-US"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "en-US"
                        }
                    }, [e._v("English (United States)")])])], 1), n("div", {
                        staticClass: "center-flex-x"
                    }, [n("div", {
                        staticClass: "w-[256px] text-right"
                    }, [e._v("Keyboard or input method:")]), n("winui-dropdown", {
                        staticClass: "ml-1 w-[320px]",
                        attrs: {
                            value: "US"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "US"
                        }
                    }, [e._v("US")])])], 1), n("div", {
                        staticClass: "my-auto text-center"
                    }, [e._v(' Enter your language and other preferences and click "Next" to continue. ')])] : [n("button", {
                        staticClass: "center-flex-x mx-auto mb-auto py-1 pr-5 pl-9 border border-gray-400 border-solid text-white text-lg installer__button",
                        on: {
                            click: function(t) {
                                return e.$emit("install")
                            }
                        }
                    }, [n("span", [e._v("Install now")]), n("img", {
                        staticClass: "ml-5",
                        attrs: {
                            src: e.button,
                            alt: "Install Windows",
                            width: "26",
                            height: "26"
                        }
                    })]), n("div", {
                        staticClass: "mb-3 pl-5"
                    }, [e._v("What to know before installing Windows")]), n("div", {
                        staticClass: "mb-3 pl-5"
                    }, [e._v("Repair your computer")])], n("div", {
                        staticClass: "flex justify-between items-end"
                    }, [n("div", {
                        staticClass: "pb-4 pl-5 text-sm"
                    }, [e._v(" Copyright © 2009 Microsoft Corporation. All rights reserved. ")]), e.showHome ? n("winui-button", {
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.next(t)
                            }
                        }
                    }, [e._v("Next")]) : e._e()], 1)], 2)], 1)], 1)
                },
                r = [],
                c = n("1521"),
                l = n("e863"),
                u = n("411e"),
                d = n("e314"),
                h = n("0f35"),
                f = n("2f62"),
                m = n("2b0e"),
                p = m["default"].extend({
                    data() {
                        return {
                            View: {
                                Loading: -1,
                                Home: 0,
                                Installer: 1
                            }
                        }
                    },
                    computed: { ...Object(f["f"])(["assets"]),
                        ...Object(f["d"])(["themeAssets"]),
                        icon() {
                            return this.themeAssets["aero-1"].icon
                        },
                        logo() {
                            return Object(h["a"])(this.assets.assetStore.icos, "start-button-classic")
                        },
                        bg() {
                            return {
                                "--bg": `url(${Object(h["a"])(this.assets.assetStore.bgs,"login")})`
                            }
                        }
                    }
                }),
                w = {
                    mixins: [p],
                    data() {
                        return {
                            showHome: !0
                        }
                    },
                    computed: {
                        button() {
                            return Object(h["a"])(this.assets.assetStore.misc, "install-windows")
                        }
                    },
                    methods: {
                        next() {
                            this.showHome = !1
                        }
                    },
                    components: {
                        WindowBody: c["a"],
                        WindowMainStatic: u["a"],
                        WindowTitlebar: d["a"],
                        WindowControls: l["a"]
                    }
                },
                y = w,
                g = (n("69fb"), n("2877")),
                v = Object(g["a"])(y, s, r, !1, null, null, null),
                b = v.exports,
                k = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "installer__program"
                    }, [n("window-main-static", {
                        staticClass: "max-h-screen"
                    }, [n("window-titlebar", {
                        attrs: {
                            title: "Install Windows",
                            icon: e.logo
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: "aero-1",
                            close: function() {
                                return e.$emit("close")
                            }
                        }
                    })], 1), n("window-body", [e.activePage === e.Page.Terms ? [n("text-instruction", [e._v("Please read the license terms")]), n("div", {
                        staticClass: "mb-4 px-2 py-2.5 border-2 border-solid overflow-y-scroll installer__terms",
                        domProps: {
                            innerHTML: e._s(e.terms)
                        }
                    }), n("winui-checkbox", {
                        attrs: {
                            id: "chk_accept"
                        },
                        model: {
                            value: e.termsAccepted,
                            callback: function(t) {
                                e.termsAccepted = t
                            },
                            expression: "termsAccepted"
                        }
                    }, [e._v("I accept the license terms")])] : e.activePage === e.Page.Type ? [n("text-instruction", [e._v("Which type of installation do you want?")]), n("winui-link", {
                        staticClass: "flex items-end opacity-50 mb-4 rounded text-left installer__action",
                        attrs: {
                            disabled: ""
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.icon.transfer,
                            alt: "Upgrade Windows",
                            width: "80",
                            height: "80"
                        }
                    }), n("span", {
                        staticClass: "flex flex-col ml-3"
                    }, [n("span", {
                        staticClass: "text-lg"
                    }, [e._v("Upgrade")]), n("span", {
                        staticClass: "text-base"
                    }, [e._v("Upgrade to a newer version of Windows and keep your files, settings, and programs. The option to upgrade is only available when an existing version of Windows is running. We recommend backing up your files before you proceed.")])])]), n("winui-link", {
                        staticClass: "flex items-end rounded hover:ring-2 hover:ring-black/10 text-left installer__action",
                        on: {
                            click: e.next
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.icon.system,
                            alt: "Install Windows",
                            width: "80",
                            height: "80"
                        }
                    }), n("span", {
                        staticClass: "flex flex-col ml-3"
                    }, [n("span", {
                        staticClass: "text-lg"
                    }, [e._v("Custom (advanced)")]), n("span", {
                        staticClass: "text-base"
                    }, [e._v("Install a new copy of Windows. This option does not keep your files, settings, and programs. The option to make changes to disks and partitions is available when you start your computer using the installation disc. We recommend backing up your files before you proceed.")])])])] : e.activePage === e.Page.Location ? [n("text-instruction", [e._v("Where do you want to install Windows?")]), n("div", {
                        staticClass: "mb-3 border-2 border-black border-solid h-3/5 installer__disk-list"
                    }, [n("listview-column-header", {
                        attrs: {
                            columns: e.partitionColumns
                        }
                    }), n("listview-main", {
                        attrs: {
                            viewMode: "details",
                            items: e.partitionItems
                        }
                    })], 1), n("div", {
                        staticClass: "flex justify-between"
                    }, [n("div", {
                        staticClass: "flex flex-col gap-2"
                    }, [n("winui-link", {
                        attrs: {
                            icon: e.icon["refresh"],
                            text: "Refresh",
                            disabled: ""
                        }
                    }), n("winui-link", {
                        attrs: {
                            icon: e.icon["disc"],
                            text: "Load Driver",
                            disabled: ""
                        }
                    })], 1), n("div", [n("winui-link", {
                        attrs: {
                            text: "Drive options (advanced)",
                            disabled: ""
                        }
                    })], 1)])] : e.activePage === e.Page.Install ? [n("text-instruction", [e._v("Installing Windows...")]), n("p", {
                        staticClass: "mb-10"
                    }, [e._v(" That's all the information we need right now. Your computer will restart several times during installation. ")]), n("ul", {
                        staticClass: "flex flex-col gap-3 installer__task-list"
                    }, e._l(e.installSteps, (function(t, o) {
                        return n("li", {
                            key: o,
                            class: ["flex items-center gap-2 installer__task-item", {
                                "font-bold text-black": e.activeStep === o,
                                "text-gray-400": e.activeStep !== o,
                                "is-done": e.activeStep > o
                            }]
                        }, [e._v(" " + e._s(t) + " "), e.activeStep === o ? [e._v("(" + e._s(e.progress) + "%)")] : e._e()], 2)
                    })), 0)] : [n("text-instruction", [e._v("Windows needs to restart to continue")]), n("winui-progress", {
                        staticClass: "mb-2",
                        attrs: {
                            progress: 10 * (e.countdownTime - e.countdownCurrent),
                            transition: e.countdownInterval
                        }
                    }), n("div", [e._v("Restarting in " + e._s(e.countdownCurrent) + " seconds")])]], 2), n("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [n("winui-button", {
                        directives: [{
                            name: "visible",
                            rawName: "v-visible",
                            value: [e.Page.Terms, e.Page.Location].includes(e.activePage),
                            expression: "[Page.Terms, Page.Location].includes(activePage)"
                        }],
                        attrs: {
                            disabled: !e.activeNext
                        },
                        on: {
                            click: e.next
                        }
                    }, [e._v(" Next ")]), e.activePage > e.Page.Install ? n("winui-button", {
                        on: {
                            click: e.restart
                        }
                    }, [e._v("Restart now")]) : e._e()], 1)], 1)], 1)
                },
                I = [],
                C = n("a321"),
                T = n("ed5d"),
                x = n("968c"),
                E = n("b69c"),
                _ = n("7073"),
                S = "## MICROSOFT SOFTWARE LICENSE TERMS\n\n## WINDOWS 7 SIMULATOR\n\nThese license terms are an agreement between Microsoft Corporation (or based on where you live, one\nof its affiliates) and you. Please read them. They apply to the software named above, which includes the\nmedia on which you received it, if any. Printed-paper license terms, which may come with the software,\nmay replace or modify any on-screen license terms. The terms also apply to any Microsoft\n\n· updates,\n\n· supplements,\n\n· Internet-based services, and\n\n· support services\n\nfor this software, unless other terms accompany those items. If so, those terms apply.\n\n**By using the software, you accept these terms. If you do not accept them, do not use the\nsoftware. Instead, return it to the retailer for a refund or credit.** If you cannot obtain a refund\nthere, contact Microsoft or the Microsoft affiliate serving your country for information about Microsoft’s\nrefund policies. See [http://www.microsoft.com/worldwide.](http://www.microsoft.com/worldwide.) In the United States and Canada, call (800)\nMICROSOFT or see [http://www.microsoft.com/info/nareturns.htm.](http://www.microsoft.com/info/nareturns.htm.)\n\n**As described below, using the software also operates as your consent to the transmission of\ncertain computer information during activation, validation and for Internet-based services.**\n\n----\n\n**If you comply with these license terms, you have the rights below for each license you\nacquire.**\n\n**1. OVERVIEW.**\n\na. Software. The software includes desktop operating system software. This software does not\ninclude Windows Live services. Windows Live is a service available from Microsoft under a\nseparate agreement.\n\nb. License Model. Subject to Section 2 (b) below, the software is licensed on a per copy per\ncomputer basis. A computer is a physical hardware system with an internal storage device\ncapable of running the software. A hardware partition or blade is considered to be a separate\ncomputer.\n\n**2. INSTALLATION AND USE RIGHTS.**\n\na. One Copy per Computer. Except as allowed in Section 2 (b) below, you may install one copy\nof the software on one computer. That computer is the “licensed computer.”\nb. Family Pack. If you are a “Qualified Family Pack User”, you may install one copy of the software\nmarked as “Family Pack” on three computers in your household for use by people who reside\nthere. Those computers are the “licensed computers” and are subject to these license terms. If\nyou do not know whether you are a Qualified Family Pack User, visit\ngo.microsoft.com/fwlink/?Linkid=141399 or contact the Microsoft affiliate serving your country.\nc. Licensed Computer. You may use the software on up to two processors on the licensed\n\ncomputer at one time. Unless otherwise provided in these license terms, you may not use the\nsoftware on any other computer.\n\nd. Number of Users. Unless otherwise provided in these license terms, only one user may use the\nsoftware at a time.\n\ne. Alternative Versions. The software may include more than one version, such as 32-bit and\n64 - bit. You may install and use only one version at one time.\n\n**3. ADDITIONAL LICENSING REQUIREMENTS AND/OR USE RIGHTS.**\n\na. Multiplexing. Hardware or software you use to\n\n· pool connections, or\n\n· reduce the number of devices or users that directly access or use the software\n\n(sometimes referred to as “multiplexing” or “pooling”), does not reduce the number of licenses\nyou need.\n\nb. Font Components. While the software is running, you may use its fonts to display and print\ncontent. You may only\n\n· embed fonts in content as permitted by the embedding restrictions in the fonts; and\n\n· temporarily download them to a printer or other output device to print content.\n\nc. Icons, images and sounds. While the software is running, you may use but not share its\nicons, images, sounds, and media. The sample images, sounds and media provided with the\nsoftware are for your non-commercial use only.\n\nd. Use with Virtualization Technologies. Instead of using the software directly on the licensed\ncomputer, you may install and use the software within only one virtual (or otherwise emulated)\nhardware system on the licensed computer. When used in a virtualized environment, content\nprotected by digital rights management technology, BitLocker or any full volume disk drive\nencryption technology may not be as secure as protected content not in a virtualized\nenvironment. You should comply with all domestic and international laws that apply to such\nprotected content.\n\ne. Device Connections. You may allow up to 20 other devices to access software installed on the\nlicensed computer to use only File Services, Print Services, Internet Information Services and\nInternet Connection Sharing and Telephony Services.\n\nf. Remote Access Technologies. You may remotely access and use the software installed on the\nlicensed computer from another computer to share a session using Remote Assistance or similar\ntechnologies. A “session” means the experience of interacting with the software, directly or\nindirectly, through any combination of input, output and display peripherals.\n\ng. Media Center Extender. You may have five Media Center Extender Sessions (or other software\nor devices which provide similar functionality for a similar purpose) running at the same time to\ndisplay the software user interface or content on other displays or devices.\n\nh. Electronic Programming Guide. If the software includes access to an electronic programming\n\nguide service that displays customized television listings, a separate service agreement applies to\nthe service. If you do not agree to the terms of the service agreement, you may continue to use\nthe software, but you will not be able to use the electronic programming guide service. The\nservice may contain advertising content and related data, which are received and stored by the\nsoftware. The service is not available in all areas. Please consult the software information for\ninstructions on accessing the service agreement.\n\ni. Related Media Information. If you request related media information as part of your playback\nexperience, the data provided to you may not be in your local language. Some countries or\nregions have laws and regulations which may restrict or limit your ability to access certain types\nof content.\n\nj. Worldwide Use of the Media Center. Media Center is not designed for use in every country.\nFor example, although the Media Center information may refer to certain features such as an\nelectronic programming guide or provide information on how to configure a TV tuner, these\nfeatures may not work in your area. Please refer to the Media Center information for a list of\nfeatures that may not work in your area.\n\n**4. MANDATORY ACTIVATION.**\n\nActivation associates the use of the software with a specific computer. During activation, the software\nwill send information about the software and the computer to Microsoft. This information includes the\nversion, language and product key of the software, the Internet protocol address of the computer,\nand information derived from the hardware configuration of the computer. For more information, see\ngo.microsoft.com/fwlink/?Linkid=104609. By using the software, you consent to the transmission of\nthis information. If properly licensed, you have the right to use the version of the software installed\nduring the installation process up to the time permitted for activation. Unless the software is\nactivated, you have no right to use the software after the time permitted for activation.\nThis is to prevent its unlicensed use. You are not permitted to bypass or circumvent\nactivation. If the computer is connected to the Internet, the software may automatically connect to\nMicrosoft for activation. You can also activate the software manually by Internet or telephone. If you\ndo so, Internet and telephone service charges may apply. Some changes to your computer\ncomponents or the software may require you to reactivate the software. The software will remind\nyou to activate it until you do.\n\n**5. VALIDATION.**\n\na. Validation verifies that the software has been activated and is properly licensed. It also verifies\nthat no unauthorized changes have been made to the validation, licensing, or activation functions\nof the software. Validation may also check for certain malicious or unauthorized software related\nto such unauthorized changes. A validation check confirming that you are properly licensed\npermits you to continue to use the software, certain features of the software or to obtain\nadditional benefits. You are not permitted to circumvent validation. This is to prevent\nunlicensed use of the software. For more information, see\ngo.microsoft.com/fwlink/?Linkid=104610.\n\nb. The software will from time to time perform a validation check of the software. The check may\nbe initiated by the software or Microsoft. To enable the activation function and validation checks,\nthe software may from time to time require updates or additional downloads of the validation,\nlicensing or activation functions of the software. The updates or downloads are required for the\nproper functioning of the software and may be downloaded and installed without further notice\nto you. During or after a validation check, the software may send information about the software,\nthe computer and the results of the validation check to Microsoft. This information includes, for\n\nexample, the version and product key of the software, any unauthorized changes made to the\nvalidation, licensing or activation functions of the software, any related malicious or unauthorized\nsoftware found and the Internet protocol address of the computer. Microsoft does not use the\ninformation to identify or contact you. By using the software, you consent to the transmission of\nthis information. For more information about validation and what is sent during or after a\nvalidation check, see go.microsoft.com/fwlink/?Linkid=104611.\n\nc. If, after a validation check, the software is found to be counterfeit, improperly licensed, a\nnon-genuine Windows product, or include unauthorized changes, the functionality and experience\nof using the software will be affected, for example:\n\nMicrosoft may\n\n· repair the software, remove, quarantine or disable any unauthorized changes that may\ninterfere with the proper use of the software, including circumvention of the activation or\nvalidation functions of the software, or\n\n· check and remove malicious or unauthorized software known to be related to such\nunauthorized changes, or\n\n· provide notices that the software is improperly licensed or a non-genuine Windows product\n\nand you may\n\n· receive reminders to obtain a properly licensed copy of the software, or\n\n· need to follow Microsoft’s instructions to be licensed to use the software and reactivate,\n\nand you may not be able to\n\n· use or continue to use the software or some of the features of the software, or\n\n· obtain certain updates or upgrades from Microsoft\n\nd. You may only obtain updates or upgrades for the software from Microsoft or authorized sources.\nFor more information on obtaining updates from authorized sources see\ngo.microsoft.com/fwlink/?Linkid=104612.\n\n**6. POTENTIALLY UNWANTED SOFTWARE.** If turned on, Windows Defender will search your\n    computer for “spyware,” “adware” and other potentially unwanted software. If it finds potentially\n    unwanted software, the software will ask you if you want to ignore, disable (quarantine) or remove\n    it. Any potentially unwanted software rated “high” or “severe,” will automatically be removed after\n    scanning unless you change the default setting. Removing or disabling potentially unwanted software\n    may result in\n\n· other software on your computer ceasing to work, or\n\n· your breaching a license to use other software on your computer.\n\nBy using this software, it is possible that you will also remove or disable software that is not\npotentially unwanted software.\n\n**7. INTERNET-BASED SERVICES.** Microsoft provides Internet-based services with the software. It\n\nmay change or cancel them at any time.\n\n**a. Consent for Internet-Based Services.** The software features described below and in the\nWindows 7 Privacy Statement connect to Microsoft or service provider computer systems over the\nInternet. In some cases, you will not receive a separate notice when they connect. In some\ncases, you may switch off these features or not use them. For more information about these\nfeatures, see the Windows 7 Privacy Statement at go.microsoft.com/fwlink/?linkid=104604. **By\nusing these features, you consent to the transmission of this information.** Microsoft\ndoes not use the information to identify or contact you.\n\nComputer Information. The following features use Internet protocols, which send to the\nappropriate systems computer information, such as your Internet protocol address, the type of\noperating system, browser and name and version of the software you are using, and the\nlanguage code of the computer where you installed the software. Microsoft uses this information\nto make the Internet-based services available to you.\n\n· Plug and Play and Plug and Play Extensions. You may connect new hardware to your\ncomputer, either directly or over a network. Your computer may not have the drivers needed\nto communicate with that hardware. If so, the update feature of the software can obtain the\ncorrect driver from Microsoft and install it on your computer. An administrator can disable\nthis update feature.\n\n· Windows Update. To enable the proper functioning of the Windows Update service in the\nsoftware (if you use it), updates or downloads to the Windows Update service will be\nrequired from time to time and downloaded and installed without further notice to you.\n\n· Web Content Features. Features in the software can retrieve related content from Microsoft\nand provide it to you. Examples of these features are clip art, templates, online training,\nonline assistance and Appshelp. You may choose not to use these web content features.\n\n· Digital Certificates. The software uses digital certificates. These digital certificates confirm the\nidentity of Internet users sending X.509 standard encrypted information. They also can be\nused to digitally sign files and macros, to verify the integrity and origin of the file contents.\nThe software retrieves certificates and updates certificate revocation lists over the Internet,\nwhen available.\n\n· Auto Root Update. The Auto Root Update feature updates the list of trusted certificate\nauthorities. You can switch off the Auto Root Update feature.\n\n· Windows Media Digital Rights Management. Content owners use Windows Media digital\nrights management technology (WMDRM) to protect their intellectual property, including\ncopyrights. This software and third party software use WMDRM to play and copy\nWMDRM-protected content. If the software fails to protect the content, content owners may\nask Microsoft to revoke the software’s ability to use WMDRM to play or copy protected\ncontent. Revocation does not affect other content. When you download licenses for protected\ncontent, you agree that Microsoft may include a revocation list with the licenses. Content\nowners may require you to upgrade WMDRM to access their content. Microsoft software that\nincludes WMDRM will ask for your consent prior to the upgrade. If you decline an upgrade,\nyou will not be able to access content that requires the upgrade. You may switch off WMDRM\nfeatures that access the Internet. When these features are off, you can still play content for\nwhich you have a valid license.\n\n· Windows Media Player. When you use Windows Media Player, it checks with Microsoft for\n\n· compatible online music services in your region; and\n\n· new versions of the player.\n\nFor more information, go to go.microsoft.com/fwlink/?Linkid=104605.\n\n· Malicious Software Removal. During setup, if you select “Get important updates for\ninstallation”, the software may check and remove certain malware from your computer.\n“Malware” is malicious software. If the software runs, it will remove the Malware listed and\nupdated at [http://www.support.microsoft.com/?kbid=890830.](http://www.support.microsoft.com/?kbid=890830.) During a Malware check, a report will\nbe sent to Microsoft with specific information about Malware detected, errors, and other\ninformation about your computer. This information is used to improve the software and other\nMicrosoft products and services. No information included in these reports will be used to\nidentify or contact you. You may disable the software’s reporting functionality by following\nthe instructions found at [http://www.support.microsoft.com/?kbid=890830.](http://www.support.microsoft.com/?kbid=890830.) For more information,\nread the Windows Malicious Software Removal Tool privacy statement at\ngo.microsoft.com/fwlink/?LinkId=113995.\n\n· Network Awareness. This feature determines whether a system is connected to a network by\neither passive monitoring of network traffic or active DNS or HTTP queries. The query only\ntransfers standard TCP/IP or DNS information for routing purposes. You can switch off the\nactive query feature through a registry setting.\n\n· Windows Time Service. This service synchronizes with time.windows.com once a week to\nprovide your computer with the correct time. You can turn this feature off or choose your\npreferred time source within the Date and Time Control Panel applet. The connection uses\nstandard NTP protocol.\n\n· IPv6 Network Address Translation (NAT) Traversal service (Teredo). This feature helps\nexisting home Internet gateway devices transition to IPv6. IPv6 is next generation Internet\nprotocol. It helps enable end-to-end connectivity often needed by peer-to-peer applications.\nTo do so, each time you start up the software the Teredo client service will attempt to locate\na public Teredo Internet service. It does so by sending a query over the Internet. This query\nonly transfers standard Domain Name Service information to determine if your computer is\nconnected to the Internet and can locate a public Teredo service. If you\n\n· use an application that needs IPv6 connectivity or\n\n· configure your firewall to always enable IPv6 connectivity\n\nby default standard Internet Protocol information will be sent to the Teredo service at\nMicrosoft at regular intervals. No other information is sent to Microsoft. You can change this\ndefault to use non-Microsoft servers. You can also switch off this feature using a command\nline utility named “netsh”.\n\n· Accelerators. When you click on or move your mouse over an Accelerator in Internet\nExplorer, any of the following may be sent to the service provider:\n\n· the title and full web address or URL of the current webpage,\n\n· standard computer information, and\n\n· any content you have selected.\n\nIf you use an Accelerator provided by Microsoft, use of the information sent is subject to the\nMicrosoft Online Privacy Statement. This statement is available at\ngo.microsoft.com/fwlink/?linkid=31493. If you use an Accelerator provided by a third party,\nuse of the information sent will be subject to the third party’s privacy practices.\n\n· Search Suggestions Service. In Internet Explorer, when you type a search query in the\nInstant Search box or type a question mark (?) before your search term in the Address bar,\nyou will see search suggestions as you type (if supported by your search provider).\nEverything you type in the Instant Search box or in the Address bar when preceded by a\nquestion mark (?) is sent to your search provider as you type. Also, when you press Enter or\nclick the Search button, the text in the Instant Search box or Address bar is sent to the\nsearch provider. If you use a Microsoft search provider, use of the information sent is subject\nto the Microsoft Online Privacy Statement. This statement is available at\ngo.microsoft.com/fwlink/?linkid=31493. If you use a third-party search provider, use of the\ninformation sent will be subject to the third party’s privacy practices. You can turn search\nsuggestions off at any time. To do so, use Manage Add-ons under the Tools button in\nInternet Explorer. For more information about the search suggestions service, see\ngo.microsoft.com/fwlink/?linkid=128106.\n\n· Consent to Update Infrared Emitter/Receiver. The software may contain technology to\nensure proper functioning of the infrared emitter/receiver device shipped with certain Media\nCenter-based products. You agree that the software may update the firmware of this device.\n\n· Media Center Online Promotions. If you use Media Center features of the software to access\nInternet-based content or other Internet-based services, such services may obtain the\nfollowing information from the software to enable you to receive, accept and use certain\npromotional offers:\n\n· certain computer information, such as your Internet protocol address, the type of\noperating system and browser you are using, and the name and version of the software\nyou are using,\n\n· the requested content, and\n\n· the language code of the computer where you installed the software.\n\nYour use of the Media Center features to connect to those services serves as your consent to\nthe collection and use of such information.\n\nb. Use of Information. Microsoft may use the computer information, accelerator information,\nsearch suggestions information, error reports, and Malware reports to improve our software and\nservices. We may also share it with others, such as hardware and software vendors. They may\nuse the information to improve how their products run with Microsoft software.\n\nc. Misuse of Internet-based Services. You may not use these services in any way that could\nharm them or impair anyone else’s use of them. You may not use the services to try to gain\nunauthorized access to any service, data, account or network by any means.\n\n**8. SCOPE OF LICENSE.** The software is licensed, not sold. This agreement only gives you some rights\n    to use the features included in the software edition you licensed. Microsoft reserves all other rights.\n    Unless applicable law gives you more rights despite this limitation, you may use the software only as\n    expressly permitted in this agreement. In doing so, you must comply with any technical limitations in\n    the software that only allow you to use it in certain ways. You may not\n\n· work around any technical limitations in the software;\n\n· reverse engineer, decompile or disassemble the software, except and only to the extent that\napplicable law expressly permits, despite this limitation;\n\n· use components of the software to run applications not running on the software;\n\n· make more copies of the software than specified in this agreement or allowed by applicable law,\ndespite this limitation;\n\n· publish the software for others to copy;\n\n· rent, lease or lend the software; or\n\n· use the software for commercial software hosting services.\n\n**9. MICROSOFT .NET BENCHMARK TESTING.** The software includes one or more components of the\n    .NET Framework (“.NET Components”). You may conduct internal benchmark testing of those\n    components. You may disclose the results of any benchmark test of those components, provided that\n    you comply with the conditions set forth at go.microsoft.com/fwlink/?LinkID=66406. Notwithstanding\n    any other agreement you may have with Microsoft, if you disclose such benchmark test results,\n    Microsoft shall have the right to disclose the results of benchmark tests it conducts of your products\n    that compete with the applicable .NET Component, provided it complies with the same conditions set\n    forth at go.microsoft.com/fwlink/?LinkID=66406.\n**10. BACKUP COPY.**\n\na. Media. If you acquired the software on a disc or other media, you may make one backup copy\nof the media. You may use it only to reinstall the software on the licensed computer.\n\nb. Electronic Download. If you purchased and downloaded the software online, you may make\none copy of the software on a disc or other media in order to install the software on a computer.\nYou may also use it to reinstall the software on the licensed computer.\n\n**11. DOCUMENTATION.** Any person that has valid access to your computer or internal network may\n    copy and use the documentation for your internal, reference purposes.\n**12. NOT FOR RESALE SOFTWARE.** You may not sell software marked as “NFR” or “Not for Resale.”\n**13. ACADEMIC EDITION SOFTWARE.** You must be a “Qualified Educational User” to use software\n    marked as “Academic Edition” or “AE.” If you do not know whether you are a Qualified Educational\n    User, visit [http://www.microsoft.com/education](http://www.microsoft.com/education) or contact the Microsoft affiliate serving your country.\n**14. GEOGRAPHIC RESTRICTIONS.** If the software is marked as requiring activation in a specific\n    geographic region, then you are only permitted to activate this software in the geographic region\n    indicated on the software packaging. You may not be able to activate the software outside of that\n    region. For further information on geographic restrictions, visit\n    go.microsoft.com/fwlink/?LinkId=141397.\n**15. UPGRADES.** To use upgrade software, you must first be licensed for the software that is eligible for\n    the upgrade. Upon upgrade, this agreement takes the place of the agreement for the software you\n    upgraded from. After you upgrade, you may no longer use the software you upgraded from.\n\n## 16. PROOF OF LICENSE\n\na. Genuine Proof of License. If you acquired the software on a disc or other media, your proof of\nlicense is the genuine Microsoft certificate of authenticity label with the accompanying genuine\nproduct key, and your proof of purchase. If you purchased and downloaded the software online,\nyour proof of license is the genuine Microsoft product key for the software which you received\nwith your purchase, and your proof of purchase from an authorized electronic supplier of genuine\nMicrosoft software. Proof of purchase may be subject to verification by your merchant’s records.\n\nb. Windows Anytime Upgrade License. If you upgrade the software using Windows Anytime\nUpgrade, your proof of license is the proof of license for the software you upgraded from, your\nWindows Anytime Upgrade product key and your proof of purchase. Proof of purchase may be\nsubject to verification by your merchant’s records.\n\nc. To identify genuine Microsoft software, see <http://www.howtotell.com>.\n\n**17. TRANSFER TO ANOTHER COMPUTER.**\n\na. Software Other than Windows Anytime Upgrade. You may transfer the software and install\nit on another computer for your use. That computer becomes the licensed computer. You may\nnot do so to share this license between computers.\n\nb. Windows Anytime Upgrade Software. You may transfer the software and install it on\nanother computer, but only if the license terms of the software you upgraded from allows you to\ndo so. That computer becomes the licensed computer. You may not do so to share this license\nbetween computers.\n\n**18. TRANSFER TO A THIRD PARTY.**\n\na. Software Other Than Windows Anytime Upgrade. The first user of the software may make\na one time transfer of the software and this agreement, by transferring the original media, the\ncertificate of authenticity, the product key and the proof of purchase directly to a third party. The\nfirst user must remove the software before transferring it separately from the computer. The first\nuser may not retain any copies of the software.\n\nb. Windows Anytime Upgrade Software. You may transfer the software directly to a third party\nonly with the licensed computer. You may not keep any copies of the software or any earlier\nedition.\n\nc. Other Requirements. Before any permitted transfer, the other party must agree that this\nagreement applies to the transfer and use of the software.\n\n**19. NOTICE ABOUT THE H.264/AVC VISUAL STANDARD, THE VC-1 VIDEO STANDARD, THE**\n    **MPEG-4 VISUAL STANDARD AND THE MPEG-2 VIDEO STANDARD.** This software includes\n    H.264/AVC, VC-1, MPEG-4 Part 2, and MPEG-2 visual compression technology. MPEG LA, L.L.C.\n    requires this notice:\n\nTHIS PRODUCT IS LICENSED UNDER THE AVC, THE VC-1, THE MPEG-4 PART 2 VISUAL, AND THE\nMPEG-2 VIDEO PATENT PORTFOLIO LICENSES FOR THE PERSONAL AND NON-COMMERCIAL USE OF\nA CONSUMER TO (i) ENCODE VIDEO IN COMPLIANCE WITH THE ABOVE STANDARDS (“VIDEO\nSTANDARDS”) AND/OR (ii) DECODE AVC, VC-1, MPEG-4 PART 2 AND MPEG-2 VIDEO THAT WAS\nENCODED BY A CONSUMER ENGAGED IN A PERSONAL AND NON-COMMERICAL ACTIVITY AND/OR\nWAS OBTAINED FROM A VIDEO PROVIDER LICENSED TO PROVIDE SUCH VIDEO. NO LICENSE IS\nGRANTED OR SHALL BE IMPLIED FOR ANY OTHER USE. ADDITIONAL INFORMATION MAY BE\n\n## OBTAINED FROM MPEG LA, L.L.C. SEE WWW.MPEGLA.COM\n\n**20. THIRD PARTY PROGRAMS.** The software contains third party programs. The license terms with\n    those programs apply to your use of them.\n**21. EXPORT RESTRICTIONS.** The software is subject to United States export laws and regulations.\n    You must comply with all domestic and international export laws and regulations that apply to the\n    software. These laws include restrictions on destinations, end users and end use. For additional\n    information, see [http://www.microsoft.com/exporting.](http://www.microsoft.com/exporting.)\n**22. SUPPORT SERVICES.** Microsoft provides support services for the software as described at\n    [http://www.support.microsoft.com/common/international.aspx.](http://www.support.microsoft.com/common/international.aspx.) If you are using software that is not\n    properly licensed, you will not be entitled to receive support services.\n**23. ENTIRE AGREEMENT.** This agreement (including the warranty below), additional terms (including\n    any printed-paper license terms that accompany the software and may modify or replace some or all\n    of these terms), and the terms for supplements, updates, Internet-based services and support\n    services that you use, are the entire agreement for the software and support services.\n**24. APPLICABLE LAW.**\n\na. United States. If you acquired the software in the United States, Washington state law governs\nthe interpretation of this agreement and applies to claims for breach of it, regardless of conflict of\nlaws principles. The laws of the state where you live govern all other claims, including claims\nunder state consumer protection laws, unfair competition laws, and in tort.\n\nb. Outside the United States. If you acquired the software in any other country, the laws of that\ncountry apply.\n\n**25. LEGAL EFFECT.** This agreement describes certain legal rights. You may have other rights under the\n    laws of your state or country. You may also have rights with respect to the party from whom you\n    acquired the software. This agreement does not change your rights under the laws of your state or\n    country if the laws of your state or country do not permit it to do so.\n**26. LIMITATION ON AND EXCLUSION OF DAMAGES. You can recover from Microsoft and its**\n    **suppliers only direct damages up to the amount you paid for the software. You cannot**\n    **recover any other damages, including consequential, lost profits, special, indirect or**\n    **incidental damages.**\n\nThis limitation applies to\n\n· anything related to the software, services, content (including code) on third party Internet sites,\nor third party programs; and\n\n· claims for breach of contract, breach of warranty, guarantee or condition, strict liability,\nnegligence, or other tort to the extent permitted by applicable law.\n\nIt also applies even if\n\n· repair, replacement or a refund for the software does not fully compensate you for any losses; or\n\n· Microsoft knew or should have known about the possibility of the damages.\n\nSome states do not allow the exclusion or limitation of incidental or consequential damages, so the\n\nabove limitation or exclusion may not apply to you. They also may not apply to you because your\ncountry may not allow the exclusion or limitation of incidental, consequential or other damages.\n\n\\**********************************************************************************\n\n## LIMITED WARRANTY\n\n**A. LIMITED WARRANTY.** If you follow the instructions and the software is properly licensed, the\nsoftware will perform substantially as described in the Microsoft materials that you receive in or with\nthe software.\n\n**B. TERM OF WARRANTY; WARRANTY RECIPIENT; LENGTH OF ANY IMPLIED WARRANTIES.\nThe limited warranty covers the software for one year after acquired by the first user. If\nyou receive supplements, updates, or replacement software during that year, they will be\ncovered for the remainder of the warranty or 30 days, whichever is longer.** If the first user\ntransfers the software, the remainder of the warranty will apply to the recipient.\n\nTo the extent permitted by law, any implied warranties, guarantees or conditions last\nonly during the term of the limited warranty. Some states do not allow limitations on how long\nan implied warranty lasts, so these limitations may not apply to you. They also might not apply to\nyou because some countries may not allow limitations on how long an implied warranty, guarantee or\ncondition lasts.\n\n**C. EXCLUSIONS FROM WARRANTY.** This warranty does not cover problems caused by your acts (or\nfailures to act), the acts of others, or events beyond Microsoft’s reasonable control.\n\n**D. REMEDY FOR BREACH OF WARRANTY. Microsoft will repair or replace the software at no\ncharge. If Microsoft cannot repair or replace it, Microsoft will refund the amount shown\non your receipt for the software. It will also repair or replace supplements, updates and\nreplacement software at no charge. If Microsoft cannot repair or replace them, it will\nrefund the amount you paid for them, if any. You must uninstall the software and return\nany media and other associated materials to Microsoft with proof of purchase to obtain a\nrefund. These are your only remedies for breach of the limited warranty.**\n\n**E. CONSUMER RIGHTS NOT AFFECTED. You may have additional consumer rights under\nyour local laws, which this agreement cannot change.**\n\n**F. WARRANTY PROCEDURES.** You need proof of purchase for warranty service.\n\n**1. United States and Canada.** For warranty service or information about how to obtain a refund\n    for software acquired in the United States and Canada, contact Microsoft at\n\n· (800) MICROSOFT;\n\n· Microsoft Customer Service and Support, One Microsoft Way, Redmond, WA 98052-6399; or\n\n· visit <http://www.microsoft.com/info/nareturns.htm>.\n\n**2. Europe, Middle East and Africa.** If you acquired the software in Europe, the Middle East or\n    Africa, Microsoft Ireland Operations Limited makes this limited warranty. To make a claim under\n    this warranty, you should contact either\n\n· Microsoft Ireland Operations Limited, Customer Care Centre, Atrium Building Block B,\nCarmanhall Road, Sandyford Industrial Estate, Dublin 18, Ireland; or\n\n· the Microsoft affiliate serving your country (see <http://www.microsoft.com/worldwide>).\n\n**3. Outside United States, Canada, Europe, Middle East and Africa.** If you acquired the\n    software outside the United States, Canada, Europe, the Middle East and Africa, contact the\n    Microsoft affiliate serving your country (see [http://www.microsoft.com/worldwide).](http://www.microsoft.com/worldwide).)\n\n**G. NO OTHER WARRANTIES. The limited warranty is the only direct warranty from\nMicrosoft. Microsoft gives no other express warranties, guarantees or conditions. Where\nallowed by your local laws, Microsoft excludes implied warranties of merchantability,\nfitness for a particular purpose and non-infringement.** If your local laws give you any implied\nwarranties, guarantees or conditions, despite this exclusion, your remedies are described in the\nRemedy for Breach of Warranty clause above, to the extent permitted by your local laws.\n\n**H. LIMITATION ON AND EXCLUSION OF DAMAGES FOR BREACH OF WARRANTY. The\nLimitation on and Exclusion of Damages clause above applies to breaches of this limited\nwarranty.**\n\nThis warranty gives you specific legal rights, and you may also have other rights which\nvary from state to state. You may also have other rights which vary from country to\ncountry.\n\n!!!!EULAID!!!!\n",
                A = n("f106"),
                O = n("4cca"),
                M = n("7c5c"),
                R = n("51e6"),
                N = {
                    mixins: [p],
                    data() {
                        return {
                            getSizeFrom: O["h"],
                            Page: {
                                Terms: 0,
                                Type: 1,
                                Location: 2,
                                Install: 3
                            },
                            installSteps: ["Copying Windows files", "Expanding Windows files", "Installing features", "Installing updates", "Completing installation"],
                            activePage: 0,
                            activeStep: 0,
                            terms: M["marked"].parse(S),
                            termsAccepted: !1,
                            disks: null,
                            selectedDisk: null,
                            progress: 0,
                            countdownTime: 10,
                            countdownCurrent: 10,
                            countdownInterval: 1e3
                        }
                    },
                    computed: {
                        partitionColumns() {
                            return [{
                                key: "icon",
                                label: "",
                                width: 48
                            }, {
                                key: "name",
                                width: 240
                            }, {
                                key: "size"
                            }, {
                                key: "free-space"
                            }, {
                                key: "type"
                            }]
                        },
                        partitionItems() {
                            return this.disks.map((e, t) => ({
                                type: "disk-data",
                                icon: this.icon["disk-data"],
                                iconSize: 48,
                                label: "Disk 0 Partition " + (t + 1),
                                labelWidth: 240,
                                extras: [{
                                    value: this.getSizeFrom(e.size)
                                }, {
                                    value: this.getSizeFrom(e.size - e.used)
                                }, {
                                    value: "Primary"
                                }],
                                active: this.selectedDisk === e.path,
                                click: () => this.select(e)
                            }))
                        },
                        activeNext() {
                            return this.activePage === this.Page.Terms ? this.termsAccepted : this.activePage === this.Page.Location && null !== this.selectedDisk
                        }
                    },
                    async mounted() {
                        this.disks = await A["a"].getStats()
                    },
                    methods: {
                        next() {
                            this.activePage++, this.activePage === this.Page.Install && this.install(), this.activePage > this.Page.Install && this.countdown()
                        },
                        select(e) {
                            this.selectedDisk = e.path
                        },
                        increment() {
                            this.progress += Object(h["p"])(2, 10), this.progress > 100 && (this.progress = 0, this.activeStep++), this.activeStep === this.installSteps.length ? this.next() : setTimeout(this.increment, Object(h["p"])(100, 500))
                        },
                        install() {
                            setTimeout(this.increment, Object(h["p"])(100, 500))
                        },
                        countdown() {
                            const e = setInterval(() => {
                                this.countdownCurrent > 0 ? this.countdownCurrent-- : (clearInterval(e), this.restart())
                            }, this.countdownInterval)
                        },
                        async restart() {
                            const e = await x["default"].local.get("bios") || {};
                            await x["default"].local.update("bios", null, { ...e,
                                installer: !1
                            }), Object(R["restart"])()
                        }
                    },
                    components: {
                        ListviewColumnHeader: C["b"],
                        ListviewMain: T["a"],
                        TextInstruction: E["a"],
                        WindowBody: c["a"],
                        WindowFooter: _["a"],
                        WindowMainStatic: u["a"],
                        WindowTitlebar: d["a"],
                        WindowControls: l["a"]
                    }
                },
                P = N,
                W = (n("8b36"), Object(g["a"])(P, k, I, !1, null, null, null)),
                D = W.exports,
                L = n("0f8d"),
                U = {
                    mixins: [p],
                    data() {
                        return {
                            view: 0,
                            showWarning: !1
                        }
                    },
                    methods: { ...a["c"].mapActions([a["a"].ChangeDefaultCursor, a["a"].ChangeWorkingCursor]),
                        async install() {
                            this.view = this.View.Loading, this[a["a"].ChangeWorkingCursor](), await Object(h["q"])(3e3), this.view = this.View.Installer, this[a["a"].ChangeDefaultCursor]()
                        },
                        close() {
                            this.$bus.$emit("changeView", {
                                view: "Logon"
                            })
                        }
                    },
                    components: {
                        InstallerHome: b,
                        InstallerProgram: D,
                        MessageWarning: L["a"]
                    }
                },
                F = U,
                j = (n("f4da"), Object(g["a"])(F, o, i, !1, null, null, null));
            t["default"] = j.exports
        },
        "554d": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return h
            }));
            var o = n("968c"),
                i = n("0d26"),
                a = n("2f62"),
                s = n("51e6");
            const r = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                c = "effects",
                l = Object(a["a"])(c),
                u = r,
                d = {
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
                h = ["enableAeroPeek", "enableComposition", "fadeTooltips", "fadeMenuItems", "saveTaskbarThumbnails", "showThumbnails", "showSelectionRectangle", "slideComboBoxes", "smoothText", "smoothScroll"],
                f = e => Object.keys(d).reduce((t, n) => {
                    const o = h.includes(n);
                    return { ...t,
                        [n]: "appearance" === e && !o
                    }
                }, {
                    preset: e
                });
            t["e"] = {
                namespaced: !0,
                state() {
                    return Object.keys(d).reduce((e, t) => ({ ...e,
                        [t]: null
                    }), {})
                },
                getters: {
                    presetAppearance: () => f("appearance"),
                    presetPerformance: () => f("performance")
                },
                mutations: {
                    [r.SetEffects]: (e, t) => {
                        Object.assign(e, t)
                    }
                },
                actions: {
                    [r.SetEffects]: async ({
                        commit: e,
                        dispatch: t
                    }, n) => {
                        if (n) e(r.SetEffects, n);
                        else {
                            const n = await t(r.GetPresetAuto);
                            e(r.SetEffects, n)
                        }
                    },
                    [r.SaveEffects]: async ({
                        state: e,
                        rootState: t
                    }) => o["default"].update("/configs/", t.user, "configs", {
                        effects: e
                    }),
                    [r.GetPresetAuto]: async ({
                        getters: e
                    }) => {
                        let t = await Object(s["getWeiBaseScore"])();
                        i["default"].enabled && i["default"].get("wei") && (t = parseFloat(i["default"].get("wei")));
                        const n = t > 4 ? e.presetAppearance : t >= 3 ? d : e.presetPerformance;
                        return { ...n,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        "67ac": function(e, t, n) {
            "use strict";
            n("15f0")
        },
        "69fb": function(e, t, n) {
            "use strict";
            n("7a32")
        },
        "6c3e": function(e, t, n) {},
        7073: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["p-3 window__footer", {
                            "flex justify-end": "action" === e.variant
                        }]
                    }, [e._t("default")], 2)
                },
                i = [],
                a = {
                    props: {
                        variant: String
                    }
                },
                s = a,
                r = n("2877"),
                c = Object(r["a"])(s, o, i, !1, null, null, null);
            t["a"] = c.exports
        },
        "7a32": function(e, t, n) {},
        "8b36": function(e, t, n) {
            "use strict";
            n("a921")
        },
        9312: function(e, t, n) {
            "use strict";
            n("eb0f")
        },
        9812: function(e, t, n) {},
        a321: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex center-flex-x border border-black/20 border-solid min-w-fit listview__header"
                    }, e._l(e.columns, (function(t) {
                        return n("button", {
                            key: t.key,
                            class: ["relative p-1 border-black/20 border-r border-solid overflow-hidden text-base text-left text-ellipsis whitespace-nowrap listview__header-column", {
                                "shrink-0": e.isFixedWidth(t.width)
                            }],
                            style: {
                                width: e.normalizeWidth(t.width)
                            }
                        }, [e._v(" " + e._s(void 0 !== t.label ? t.label : e.$t(t.key)) + " ")])
                    })), 0)
                },
                i = [];
            const a = {
                isFixedWidth(e) {
                    return "number" === typeof e
                },
                normalizeWidth(e, t, n) {
                    const o = n ? 1 : 0;
                    return e ? this.isFixedWidth(e) ? e + "px" : e.toString() : 100 / (t + o) + "%"
                }
            };
            var s = {
                    props: {
                        columns: {
                            type: Array,
                            required: !0
                        }
                    },
                    methods: {
                        isFixedWidth: a.isFixedWidth,
                        normalizeWidth(e) {
                            return a.normalizeWidth(e, this.columns.length)
                        }
                    }
                },
                r = s,
                c = n("2877"),
                l = Object(c["a"])(r, o, i, !1, null, null, null);
            t["b"] = l.exports
        },
        a4ed: function(e, t, n) {
            "use strict";
            n("9812")
        },
        a77a: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "iconSizeMap", (function() {
                return s
            })), n.d(t, "listviewProps", (function() {
                return r
            }));
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["flex flex-wrap gap-1 listview__view has-icons", e.sizeClass]
                    }, e._l(e.items, (function(e, t) {
                        return n("listview-item", {
                            key: t,
                            attrs: {
                                item: e
                            }
                        })
                    })), 1)
                },
                i = [],
                a = n("0616");
            const s = {
                    sm: "small",
                    md: "medium",
                    lg: "large",
                    xl: "extra"
                },
                r = {
                    items: {
                        type: Array,
                        required: !0
                    },
                    size: {
                        type: [String, Number],
                        validator: e => "string" === typeof e ? Object.values(s).includes(e) : e % 4 === 0
                    }
                };
            var c = {
                    props: r,
                    computed: {
                        sizeClass() {
                            return "string" === typeof this.size ? "is-" + this.size : ""
                        }
                    },
                    components: {
                        ListviewItem: a["a"]
                    }
                },
                l = c,
                u = (n("a4ed"), n("2877")),
                d = Object(u["a"])(l, o, i, !1, null, null, null);
            t["default"] = d.exports
        },
        a921: function(e, t, n) {},
        eb0f: function(e, t, n) {},
        ed5d: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(e.componentMap[e.viewMode], e._b({
                        tag: "component"
                    }, "component", e.listviewProps, !1))
                },
                i = [],
                a = n("a77a");
            const s = ["content", "details", "icons", "list", "tiles"],
                r = {
                    content: "ListviewViewContent",
                    details: "ListviewViewDetails",
                    icons: "ListviewViewIcons",
                    list: "ListviewViewList",
                    tiles: "ListviewViewTiles"
                };
            var c = {
                    props: { ...a["listviewProps"],
                        viewMode: {
                            type: String,
                            required: !0,
                            validator: e => s.includes(e)
                        }
                    },
                    computed: {
                        listviewProps() {
                            const {
                                items: e,
                                size: t
                            } = this;
                            return {
                                items: e,
                                size: t
                            }
                        },
                        componentMap: () => r
                    },
                    components: {
                        ListviewViewContent: () => n.e("listview-content").then(n.bind(null, "27b9")),
                        ListviewViewDetails: () => n.e("listview-details").then(n.bind(null, "32cd")),
                        ListviewViewIcons: () => Promise.resolve().then(n.bind(null, "a77a")),
                        ListviewViewList: () => n.e("listview-list").then(n.bind(null, "00d7")),
                        ListviewViewTiles: () => n.e("listview-tiles").then(n.bind(null, "7662"))
                    }
                },
                l = c,
                u = n("2877"),
                d = Object(u["a"])(l, o, i, !1, null, null, null);
            t["a"] = d.exports
        },
        f354: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("window-main", {
                        attrs: {
                            id: "window-" + e.id,
                            w: 600,
                            h: 450,
                            centered: ""
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: e.id,
                            title: e.$t(e.id)
                        }
                    }, [n("window-controls", {
                        attrs: {
                            disableMaximize: ""
                        }
                    })], 1), n("window-body", {
                        staticClass: "pinstaller__body",
                        attrs: {
                            layout: "settings"
                        }
                    }, [e.showForm ? [n("div", {
                        staticClass: "p-6 pinstaller__header"
                    }, [n("h1", {
                        staticClass: "mb-2 font-bold text-lg"
                    }, [e._v(e._s(e.$t("install-program-title")))]), n("p", {
                        staticClass: "ml-3"
                    }, [e._v(e._s(e.$t("install-program-description")))])]), n("div", {
                        staticClass: "pinstaller__form"
                    }, [n("div", {
                        staticClass: "m-auto mt-4 w-2/3"
                    }, [n("p", {
                        staticClass: "mb-10"
                    }, [e._v(e._s(e.$t("install-program-instruction")))]), n("div", {
                        staticClass: "flex"
                    }, [n("div", {
                        staticClass: "mr-6"
                    }, [n("winui-textbox", {
                        staticClass: "mb-2 w-full",
                        attrs: {
                            placeholder: "URL"
                        },
                        model: {
                            value: e.url,
                            callback: function(t) {
                                e.url = t
                            },
                            expression: "url"
                        }
                    }), n("winui-textbox", {
                        staticClass: "mb-2 w-full",
                        attrs: {
                            placeholder: "Name",
                            maxlength: "25"
                        },
                        model: {
                            value: e.name,
                            callback: function(t) {
                                e.name = t
                            },
                            expression: "name"
                        }
                    }), n("winui-textbox", {
                        staticClass: "mb-2 w-full",
                        attrs: {
                            placeholder: "Icon URL"
                        },
                        model: {
                            value: e.icon,
                            callback: function(t) {
                                e.icon = t
                            },
                            expression: "icon"
                        }
                    })], 1), n("div", {
                        staticClass: "center-flex border border-current border-dashed w-16 h-16 text-current shrink-0"
                    }, [e.icon ? n("img", {
                        staticClass: "w-full h-auto",
                        attrs: {
                            src: e.icon,
                            alt: "logo"
                        }
                    }) : n("iconify-icon", {
                        attrs: {
                            icon: "fa:photo"
                        }
                    })], 1)])])])] : [n("div", {
                        staticClass: "p-6 pinstaller__header"
                    }, [n("h1", {
                        staticClass: "mb-2 font-bold text-lg"
                    }, [e._v(e._s(e.$t("ready-to-install")))]), n("p", {
                        staticClass: "ml-3"
                    }, [e._v(e._s(e.$t("ready-to-install-description", [e.name])))])]), n("div", {
                        staticClass: "pinstaller__form"
                    }, [n("div", {
                        staticClass: "m-auto mt-4 w-2/3"
                    }, [n("p", {
                        staticClass: "mb-6"
                    }, [e._v(" " + e._s(e.$t("ready-to-install-instruction")) + " ")]), n("winui-fieldset", {
                        staticClass: "gap-4 overflow-scroll"
                    }, [n("div", {
                        staticClass: "pinstaller__group"
                    }, [e._v(" " + e._s(e.$t("program-url")) + " "), n("div", {
                        staticClass: "ml-4"
                    }, [e._v(e._s(e.url))])]), n("div", {
                        staticClass: "pinstaller__group"
                    }, [e._v(" " + e._s(e.$t("program-name")) + " "), n("div", {
                        staticClass: "ml-4"
                    }, [e._v(e._s(e.name))])]), n("div", {
                        staticClass: "pinstaller__group"
                    }, [e._v(" " + e._s(e.$t("additional-tasks")) + " "), n("div", {
                        staticClass: "ml-4"
                    }, [e._v(e._s(e.$t("create-desktop-icon")))])])])], 1)])]], 2), n("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [e.showForm ? [n("winui-button", {
                        staticClass: "default",
                        attrs: {
                            disabled: !e.isValid
                        },
                        on: {
                            click: function(t) {
                                e.showForm = !1
                            }
                        }
                    }, [e._v(" " + e._s(e.$t("next")) + " ")])] : [n("winui-button", {
                        on: {
                            click: function(t) {
                                e.showForm = !0
                            }
                        }
                    }, [e._v(e._s(e.$t("back")))]), n("winui-button", {
                        staticClass: "default",
                        on: {
                            click: e.install
                        }
                    }, [e._v(e._s(e.$t("install")))])], n("winui-button", {
                        on: {
                            click: e.exit
                        }
                    }, [e._v(e._s(e.$t("cancel")))])], 2)], 1)
                },
                i = [],
                a = n("0f35"),
                s = n("6792"),
                r = n("01b4"),
                c = n("1521"),
                l = n("e863"),
                u = n("7073"),
                d = n("1d26"),
                h = n("e314"),
                f = n("4cca"),
                m = n("2f62"),
                p = n("0fbc"),
                w = {
                    data() {
                        return {
                            id: "installer",
                            showForm: !0,
                            isValidImage: !1,
                            url: "",
                            name: "",
                            icon: ""
                        }
                    },
                    computed: { ...Object(m["f"])({
                            shortcuts: "shortcuts"
                        }),
                        formattedUrl() {
                            return Object(a["b"])(this.url)
                        },
                        isValid() {
                            return Object(a["h"])(this.formattedUrl) && this.name.length > 0 && this.name.length <= 25 && this.isValidImage
                        }
                    },
                    watch: {
                        icon(e) {
                            e ? Object(p["j"])(e).then(() => this.isValidImage = !0).catch(() => this.isValidImage = !1) : this.isValidImage = !1
                        }
                    },
                    methods: {
                        install() {
                            this.$store.dispatch(r["a"].ShortcutAdd, {
                                type: "shortcut",
                                key: "web_" + this.name,
                                lbl: Object(f["a"])(this.name + ".lnk", this.shortcuts),
                                icon: this.icon,
                                data: JSON.stringify({
                                    exe: "webapp",
                                    icon: this.icon,
                                    path: this.formattedUrl
                                }),
                                replacement: "_"
                            }), this.exit()
                        },
                        exit() {
                            this.$root.$emit(s["c"].CloseWindow, this.id)
                        }
                    },
                    components: {
                        WindowControls: l["a"],
                        WindowTitlebar: h["a"],
                        WindowMain: d["a"],
                        WindowBody: c["a"],
                        WindowFooter: u["a"]
                    }
                },
                y = w,
                g = n("2877"),
                v = Object(g["a"])(y, o, i, !1, null, null, null);
            t["default"] = v.exports
        },
        f4da: function(e, t, n) {
            "use strict";
            n("6c3e")
        },
        f746: function(e, t, n) {
            "use strict";
            n("fc3e")
        },
        fc3e: function(e, t, n) {},
        fceb: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("window-main-static", {
                        attrs: {
                            parent: e.parent,
                            variant: "message"
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: e.title
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: e.theme,
                            close: function() {
                                return e.$emit("close")
                            }
                        }
                    })], 1), n("window-body", {
                        class: e.containerClass,
                        attrs: {
                            layout: "message"
                        }
                    }, [e.icon ? n("div", {
                        staticClass: "flex"
                    }, [n("base-icon", {
                        attrs: {
                            icon: e.icon
                        }
                    }), e.noPreTag ? e._t("default") : n("pre", {
                        staticClass: "p-2 font-[inherit] whitespace-pre-wrap"
                    }, [e._t("default")], 2)], 2) : [e._t("default")]], 2), n("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [e._t("footer")], 2)], 1)
                },
                i = [],
                a = n("58cd"),
                s = n("1521"),
                r = n("e863"),
                c = n("7073"),
                l = n("411e"),
                u = n("e314"),
                d = n("2f62"),
                h = {
                    props: {
                        type: {
                            type: String,
                            validator: e => ["warning", "error"].includes(e)
                        },
                        parent: String,
                        title: String,
                        containerClass: String,
                        noPreTag: Boolean,
                        theme: String
                    },
                    computed: { ...Object(d["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        icon() {
                            const e = this.theme ? this.themeAssets[this.theme] : this.themeData;
                            return e.icon[this.type]
                        }
                    },
                    components: {
                        BaseIcon: a["a"],
                        WindowBody: s["a"],
                        WindowFooter: c["a"],
                        WindowMainStatic: l["a"],
                        WindowControls: r["a"],
                        WindowTitlebar: u["a"]
                    }
                },
                f = h,
                m = (n("67ac"), n("2877")),
                p = Object(m["a"])(f, o, i, !1, null, null, null);
            t["a"] = p.exports
        }
    }
]);