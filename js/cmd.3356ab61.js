(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["cmd", "hotkey"], {
        "0f9f": function(e, t, o) {},
        2877: function(e, t, o) {
            "use strict";

            function s(e, t, o, s, i, n, r, l) {
                var a, c = "function" === typeof e ? e.options : e;
                if (t && (c.render = t, c.staticRenderFns = o, c._compiled = !0), s && (c.functional = !0), n && (c._scopeId = "data-v-" + n), r ? (a = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, c._ssrRegister = a) : i && (a = l ? function() {
                        i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : i), a)
                    if (c.functional) {
                        c._injectStyles = a;
                        var h = c.render;
                        c.render = function(e, t) {
                            return a.call(t), h(e, t)
                        }
                    } else {
                        var d = c.beforeCreate;
                        c.beforeCreate = d ? [].concat(d, a) : [a]
                    }
                return {
                    exports: e,
                    options: c
                }
            }
            o.d(t, "a", (function() {
                return s
            }))
        },
        "2ea7": function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "toCodemirrorKey", (function() {
                return R
            }));
            const s = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

            function i(e, t, o, s) {
                e.addEventListener ? e.addEventListener(t, o, s) : e.attachEvent && e.attachEvent("on".concat(t), () => {
                    o(window.event)
                })
            }

            function n(e, t) {
                const o = t.slice(0, t.length - 1);
                for (let s = 0; s < o.length; s++) o[s] = e[o[s].toLowerCase()];
                return o
            }

            function r(e) {
                "string" !== typeof e && (e = ""), e = e.replace(/\s/g, "");
                const t = e.split(",");
                let o = t.lastIndexOf("");
                for (; o >= 0;) t[o - 1] += ",", t.splice(o, 1), o = t.lastIndexOf("");
                return t
            }

            function l(e, t) {
                const o = e.length >= t.length ? e : t,
                    s = e.length >= t.length ? t : e;
                let i = !0;
                for (let n = 0; n < o.length; n++) - 1 === s.indexOf(o[n]) && (i = !1);
                return i
            }
            const a = {
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
                    "-": s ? 173 : 189,
                    "=": s ? 61 : 187,
                    ";": s ? 59 : 186,
                    "'": 222,
                    "[": 219,
                    "]": 221,
                    "\\": 220
                },
                c = {
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
                h = {
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
                u = {};
            for (let I = 1; I < 20; I++) a["f".concat(I)] = 111 + I;
            let f = [],
                p = !1,
                m = "all";
            const b = [],
                g = e => a[e.toLowerCase()] || c[e.toLowerCase()] || e.toUpperCase().charCodeAt(0),
                y = e => Object.keys(a).find(t => a[t] === e),
                v = e => Object.keys(c).find(t => c[t] === e);

            function w(e) {
                m = e || "all"
            }

            function k() {
                return m || "all"
            }

            function _() {
                return f.slice(0)
            }

            function S() {
                return f.map(e => y(e) || v(e) || String.fromCharCode(e))
            }

            function C() {
                const e = [];
                return Object.keys(u).forEach(t => {
                    u[t].forEach(t => {
                        let {
                            key: o,
                            scope: s,
                            mods: i,
                            shortcut: n
                        } = t;
                        e.push({
                            scope: s,
                            shortcut: n,
                            mods: i,
                            keys: o.split("+").map(e => g(e))
                        })
                    })
                }), e
            }

            function O(e) {
                const t = e.target || e.srcElement,
                    {
                        tagName: o
                    } = t;
                let s = !0;
                return !t.isContentEditable && ("INPUT" !== o && "TEXTAREA" !== o && "SELECT" !== o || t.readOnly) || (s = !1), s
            }

            function H(e) {
                return "string" === typeof e && (e = g(e)), -1 !== f.indexOf(e)
            }

            function x(e, t) {
                let o, s;
                e || (e = k());
                for (const i in u)
                    if (Object.prototype.hasOwnProperty.call(u, i))
                        for (o = u[i], s = 0; s < o.length;) o[s].scope === e ? o.splice(s, 1) : s++;
                k() === e && w(t || "all")
            }

            function T(e) {
                let t = e.keyCode || e.which || e.charCode;
                const o = f.indexOf(t);
                if (o >= 0 && f.splice(o, 1), e.key && "meta" === e.key.toLowerCase() && f.splice(0, f.length), 93 !== t && 224 !== t || (t = 91), t in d) {
                    d[t] = !1;
                    for (const e in c) c[e] === t && ($[e] = !1)
                }
            }

            function L(e) {
                if ("undefined" === typeof e) Object.keys(u).forEach(e => delete u[e]);
                else if (Array.isArray(e)) e.forEach(e => {
                    e.key && z(e)
                });
                else if ("object" === typeof e) e.key && z(e);
                else if ("string" === typeof e) {
                    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) o[s - 1] = arguments[s];
                    let [i, n] = o;
                    "function" === typeof i && (n = i, i = ""), z({
                        key: e,
                        scope: i,
                        method: n,
                        splitKey: "+"
                    })
                }
            }
            const z = e => {
                let {
                    key: t,
                    scope: o,
                    method: s,
                    splitKey: i = "+"
                } = e;
                const a = r(t);
                a.forEach(e => {
                    const t = e.split(i),
                        r = t.length,
                        a = t[r - 1],
                        h = "*" === a ? "*" : g(a);
                    if (!u[h]) return;
                    o || (o = k());
                    const d = r > 1 ? n(c, t) : [];
                    u[h] = u[h].filter(e => {
                        const t = !s || e.method === s;
                        return !(t && e.scope === o && l(e.mods, d))
                    })
                })
            };

            function D(e, t, o, s) {
                if (t.element !== s) return;
                let i;
                if (t.scope === o || "all" === t.scope) {
                    i = t.mods.length > 0;
                    for (const e in d) Object.prototype.hasOwnProperty.call(d, e) && (!d[e] && t.mods.indexOf(+e) > -1 || d[e] && -1 === t.mods.indexOf(+e)) && (i = !1);
                    (0 !== t.mods.length || d[16] || d[18] || d[17] || d[91]) && !i && "*" !== t.shortcut || (t.keys = [], t.keys = t.keys.concat(f), !1 === t.method(e, t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)))
                }
            }

            function E(e, t) {
                const o = u["*"];
                let s = e.keyCode || e.which || e.charCode;
                if (!$.filter.call(this, e)) return;
                if (93 !== s && 224 !== s || (s = 91), -1 === f.indexOf(s) && 229 !== s && f.push(s), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(t => {
                        const o = h[t];
                        e[t] && -1 === f.indexOf(o) ? f.push(o) : !e[t] && f.indexOf(o) > -1 ? f.splice(f.indexOf(o), 1) : "metaKey" === t && e[t] && 3 === f.length && (e.ctrlKey || e.shiftKey || e.altKey || (f = f.slice(f.indexOf(o))))
                    }), s in d) {
                    d[s] = !0;
                    for (const e in c) c[e] === s && ($[e] = !0);
                    if (!o) return
                }
                for (const n in d) Object.prototype.hasOwnProperty.call(d, n) && (d[n] = e[h[n]]);
                e.getModifierState && (!e.altKey || e.ctrlKey) && e.getModifierState("AltGraph") && (-1 === f.indexOf(17) && f.push(17), -1 === f.indexOf(18) && f.push(18), d[17] = !0, d[18] = !0);
                const i = k();
                if (o)
                    for (let n = 0; n < o.length; n++) o[n].scope === i && ("keydown" === e.type && o[n].keydown || "keyup" === e.type && o[n].keyup) && D(e, o[n], i, t);
                if (s in u)
                    for (let n = 0; n < u[s].length; n++)
                        if (("keydown" === e.type && u[s][n].keydown || "keyup" === e.type && u[s][n].keyup) && u[s][n].key) {
                            const o = u[s][n],
                                {
                                    splitKey: r
                                } = o,
                                l = o.key.split(r),
                                a = [];
                            for (let e = 0; e < l.length; e++) a.push(g(l[e]));
                            a.sort().join("") === f.sort().join("") && D(e, o, i, t)
                        }
            }

            function M(e) {
                return b.indexOf(e) > -1
            }

            function $(e, t, o) {
                f = [];
                const s = r(e);
                let l = [],
                    a = "all",
                    h = document,
                    d = 0,
                    m = !1,
                    y = !0,
                    v = "+",
                    w = !1,
                    k = !1;
                for (void 0 === o && "function" === typeof t && (o = t), "[object Object]" === Object.prototype.toString.call(t) && (t.scope && (a = t.scope), t.element && (h = t.element), t.keyup && (m = t.keyup), void 0 !== t.keydown && (y = t.keydown), void 0 !== t.capture && (w = t.capture), "string" === typeof t.splitKey && (v = t.splitKey), !0 === t.single && (k = !0)), "string" === typeof t && (a = t), k && L(e, a); d < s.length; d++) e = s[d].split(v), l = [], e.length > 1 && (l = n(c, e)), e = e[e.length - 1], e = "*" === e ? "*" : g(e), e in u || (u[e] = []), u[e].push({
                    keyup: m,
                    keydown: y,
                    scope: a,
                    mods: l,
                    shortcut: s[d],
                    method: o,
                    key: s[d],
                    splitKey: v,
                    element: h
                });
                "undefined" !== typeof h && !M(h) && window && (b.push(h), i(h, "keydown", e => {
                    E(e, h)
                }, w), p || (p = !0, i(window, "focus", () => {
                    f = []
                }, w)), i(h, "keyup", e => {
                    E(e, h), T(e)
                }, w))
            }

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                Object.keys(u).forEach(o => {
                    const s = u[o].filter(o => o.scope === t && o.shortcut === e);
                    s.forEach(e => {
                        e && e.method && e.method()
                    })
                })
            }
            const j = {
                getPressedKeyString: S,
                setScope: w,
                getScope: k,
                deleteScope: x,
                getPressedKeyCodes: _,
                getAllKeyCodes: C,
                isPressed: H,
                filter: O,
                trigger: P,
                unbind: L,
                keyMap: a,
                modifier: c,
                modifierMap: h
            };
            for (const I in j) Object.prototype.hasOwnProperty.call(j, I) && ($[I] = j[I]);
            if ("undefined" !== typeof window) {
                const e = window.hotkeys;
                $.noConflict = t => (t && window.hotkeys === $ && (window.hotkeys = e), $), window.hotkeys = $
            }
            t["default"] = {
                keys: {},
                on(e, t, o = "", s = "all") {
                    return o && (this.keys[s] = this.keys[s] || {}, this.keys[s][e] = o), $(e, s, (e, o) => {
                        e.preventDefault(), t(e, o)
                    })
                },
                off(e, t = "all") {
                    return $.unbind(e, t)
                },
                scope(e) {
                    return e ? $.setScope(e) : $.getScope()
                },
                deleteScope(e) {
                    return $.deleteScope(e)
                }
            };
            const R = e => {
                const t = e.toLowerCase().split("+"),
                    o = t.length - 2,
                    s = t.length - 1;
                return "shift" === t[o] && (t[s] = t[s].toUpperCase(), t.splice(o, 1)), t.join("-")
            }
        },
        "39b3": function(e, t, o) {
            "use strict";
            o.d(t, "b", (function() {
                return n
            })), o.d(t, "c", (function() {
                return r
            })), o.d(t, "a", (function() {
                return l
            }));
            var s = o("2f62");
            const i = {
                    OpenContextMenu: "openContextMenu"
                },
                n = "scrollbar",
                r = Object(s["a"])(n),
                l = i;
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        contextMenu: void 0
                    }
                },
                getters: {},
                mutations: {
                    [i.OpenContextMenu](e, t) {
                        e.contextMenu = t
                    }
                },
                actions: {}
            }
        },
        "3b61": function(e, t, o) {
            var s = o("a3be");
            e.exports = s
        },
        "554d": function(e, t, o) {
            "use strict";
            o.d(t, "c", (function() {
                return a
            })), o.d(t, "d", (function() {
                return c
            })), o.d(t, "b", (function() {
                return h
            })), o.d(t, "a", (function() {
                return u
            }));
            var s = o("968c"),
                i = o("0d26"),
                n = o("2f62"),
                r = o("51e6");
            const l = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                a = "effects",
                c = Object(n["a"])(a),
                h = l,
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
                u = ["enableAeroPeek", "enableComposition", "fadeTooltips", "fadeMenuItems", "saveTaskbarThumbnails", "showThumbnails", "showSelectionRectangle", "slideComboBoxes", "smoothText", "smoothScroll"],
                f = e => Object.keys(d).reduce((t, o) => {
                    const s = u.includes(o);
                    return { ...t,
                        [o]: "appearance" === e && !s
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
                    [l.SetEffects]: (e, t) => {
                        Object.assign(e, t)
                    }
                },
                actions: {
                    [l.SetEffects]: async ({
                        commit: e,
                        dispatch: t
                    }, o) => {
                        if (o) e(l.SetEffects, o);
                        else {
                            const o = await t(l.GetPresetAuto);
                            e(l.SetEffects, o)
                        }
                    },
                    [l.SaveEffects]: async ({
                        state: e,
                        rootState: t
                    }) => s["default"].update("/configs/", t.user, "configs", {
                        effects: e
                    }),
                    [l.GetPresetAuto]: async ({
                        getters: e
                    }) => {
                        let t = await Object(r["getWeiBaseScore"])();
                        i["default"].enabled && i["default"].get("wei") && (t = parseFloat(i["default"].get("wei")));
                        const o = t > 4 ? e.presetAppearance : t >= 3 ? d : e.presetPerformance;
                        return { ...o,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        "58cd": function(e, t, o) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("span", {
                        staticClass: "inline-block bg-contain bg-no-repeat bg-center w-[16px] h-[16px] shrink-0 icon",
                        style: e.style,
                        attrs: {
                            "data-icon": e.id
                        }
                    })
                },
                i = [],
                n = {
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
                r = n,
                l = (o("ce5d"), o("2877")),
                a = Object(l["a"])(r, s, i, !1, null, null, null);
            t["a"] = a.exports
        },
        "6fba": function(e, t, o) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return e.isDisabled ? o("div", {
                        staticClass: "h-full overflow-auto"
                    }, [e._t("default")], 2) : o("div", {
                        staticClass: "relative h-full overflow-hidden"
                    }, [o("div", {
                        ref: "scrollbarWrapper",
                        staticClass: "relative flex flex-col w-full h-full scrollbar__wrapper",
                        style: {
                            width: e.width
                        }
                    }, [e._t("default"), e.showVerticalScrollbar ? o("scrollbar", {
                        ref: "verticalScrollbar",
                        style: e.verticalScrollbarStyle,
                        attrs: {
                            type: "vertical",
                            element: e.element,
                            menuDisabled: e.menuDisabled
                        }
                    }) : e._e(), e.showHorizontalScrollbar ? o("scrollbar", {
                        ref: "horizontalScrollbar",
                        style: e.horizontalScrollbarStyle,
                        attrs: {
                            type: "horizontal",
                            element: e.element,
                            menuDisabled: e.menuDisabled
                        }
                    }) : e._e()], 2)])
                },
                i = [],
                n = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: e.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        staticClass: "absolute flex scrollbar",
                        class: {
                            "top-0 right-0 flex-col h-full": !e.isHorizontal, "bottom-0 left-0 w-full is-horizontal": e.isHorizontal, "is-rtl": e.isHorizontal && e.isRtl
                        },
                        on: {
                            contextmenu: e.openMenu,
                            wheel: e.handleWheel
                        }
                    }, [o("button", {
                        staticClass: "scrollbar__btn",
                        class: {
                            "is-up": !e.isHorizontal, "is-left": e.isHorizontal
                        },
                        on: {
                            mousedown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button ? null : e.handleScrollbarButton(e.isHorizontal ? "left" : "up")
                            },
                            mouseup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button ? null : e.stopHoldScroll(t)
                            },
                            mouseleave: e.stopHoldScroll
                        }
                    }), o("div", {
                        ref: "scrollbar",
                        staticClass: "relative flex bg-none w-full h-full",
                        class: {
                            "justify-center": !e.isHorizontal, "items-center": e.isHorizontal
                        },
                        on: {
                            mousedown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button || t.target !== t.currentTarget ? null : e.handleTrackClick(t)
                            },
                            mouseup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button ? null : void(e.trackClickDirection = null)
                            }
                        }
                    }, [o("div", {
                        staticClass: "absolute flex w-full h-full pointer-events-none scrollbar__track",
                        class: {
                            "flex-col": !e.isHorizontal
                        }
                    }, [o("div", {
                        staticClass: "w-full h-full",
                        class: {
                            scrollbar__trackup: !e.isHorizontal, scrollbar__trackleft: e.isHorizontal
                        },
                        style: {
                            height: e.isHorizontal ? "100%" : e.trackUpHeight,
                            width: e.isHorizontal ? e.trackLeftHeight : "100%",
                            opacity: "up" === e.trackClickDirection || "left" === e.trackClickDirection ? .5 : 0
                        }
                    }), o("div", {
                        staticClass: "w-full h-full",
                        class: {
                            scrollbar__trackdown: !e.isHorizontal, scrollbar__trackright: e.isHorizontal
                        },
                        style: {
                            height: e.isHorizontal ? "100%" : e.trackDownHeight,
                            width: e.isHorizontal ? e.trackRightHeight : "100%",
                            opacity: "down" === e.trackClickDirection || "right" === e.trackClickDirection ? .5 : 0
                        }
                    })]), o("button", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: e.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        staticClass: "absolute touch-none scrollbar__btn is-thumb",
                        class: {
                            active: e.isThumbDragged
                        },
                        style: e.scrollbarThumbStyle,
                        on: {
                            pointerdown: e.handleThumbDragStart,
                            contextmenu: e.openMenu
                        }
                    })]), o("button", {
                        staticClass: "scrollbar__btn",
                        class: {
                            "is-down": !e.isHorizontal, "is-right": e.isHorizontal
                        },
                        on: {
                            mousedown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button ? null : e.handleScrollbarButton(e.isHorizontal ? "right" : "down")
                            },
                            mouseup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button" in t && 0 !== t.button ? null : e.stopHoldScroll(t)
                            },
                            mouseleave: e.stopHoldScroll
                        }
                    })])
                },
                r = [],
                l = o("39b3"),
                a = o("7f29"),
                c = o("2f62");
            const h = 10;
            var d = {
                    props: {
                        type: {
                            type: String,
                            validator: e => ["vertical", "horizontal"].includes(e)
                        },
                        scrollStep: {
                            type: Number,
                            default: 20
                        },
                        scrollInterval: {
                            type: Number,
                            default: 100
                        },
                        element: {
                            type: HTMLElement
                        },
                        menuDisabled: Boolean
                    },
                    data() {
                        return {
                            thumbHeight: null,
                            thumbTop: null,
                            thumbHeightHorizon: null,
                            thumbTopHorizon: null,
                            isThumbDragged: !1,
                            dragStartY: 0,
                            dragStartScrollTop: 0,
                            dragStartX: 0,
                            dragStartScrollLeft: 0,
                            trackClickDirection: null,
                            holdScrollInterval: null
                        }
                    },
                    mounted() {
                        this.updateScrollbar()
                    },
                    computed: { ...Object(c["d"])({
                            isRtl: "isRtl"
                        }),
                        trackUpHeight() {
                            return this.thumbTop + this.thumbHeight / 2 + "%"
                        },
                        trackDownHeight() {
                            return 100 - (this.thumbTop + this.thumbHeight / 2) + "%"
                        },
                        trackLeftHeight() {
                            return this.thumbTopHorizon + this.thumbHeightHorizon / 2 + "%"
                        },
                        trackRightHeight() {
                            return 100 - (this.thumbTopHorizon + this.thumbHeightHorizon / 2) + "%"
                        },
                        isHorizontal() {
                            return "horizontal" === this.type
                        },
                        scrollbarThumbStyle() {
                            return {
                                height: this.isHorizontal ? null : this.thumbHeight + "%",
                                top: this.isHorizontal ? null : this.thumbTop + "%",
                                width: this.isHorizontal ? this.thumbHeightHorizon + "%" : null,
                                left: this.isHorizontal ? this.thumbTopHorizon + "%" : null
                            }
                        }
                    },
                    methods: { ...l["c"].mapMutations([l["a"].OpenContextMenu]),
                        openMenu(e) {
                            e.preventDefault(), this.menuDisabled || this[l["a"].OpenContextMenu]({
                                e: e,
                                isHorizontal: this.isHorizontal,
                                scrollHere: () => this.handleTrackClick(e),
                                scrollUp: () => this.scroll("up"),
                                scrollDown: () => this.scroll("down"),
                                scrollTop: () => this.scroll("top"),
                                scrollBottom: () => this.scroll("bottom"),
                                scrollLeft: () => this.scroll("left"),
                                scrollRight: () => this.scroll("right"),
                                scrollLeftEdge: () => this.scroll("leftEdge"),
                                scrollRightEdge: () => this.scroll("rightEdge"),
                                scrollPageUp: () => this.scroll("pageUp"),
                                scrollPageDown: () => this.scroll("pageDown"),
                                scrollPageLeft: () => this.scroll("pageLeft"),
                                scrollPageRight: () => this.scroll("pageRight")
                            })
                        },
                        updateScrollbar() {
                            if (this.isHorizontal) {
                                let e = this.element.clientWidth / this.element.scrollWidth;
                                this.thumbHeightHorizon = Math.max(100 * e, h), e = this.element.scrollLeft / (this.element.scrollWidth - this.element.clientWidth), this.thumbTopHorizon = e * (100 - this.thumbHeightHorizon)
                            } else {
                                let e = this.element.clientHeight / this.element.scrollHeight;
                                this.thumbHeight = Math.max(100 * e, h), e = this.element.scrollTop / (this.element.scrollHeight - this.element.clientHeight), this.thumbTop = e * (100 - this.thumbHeight)
                            }
                        },
                        handleThumbDragStart(e) {
                            if (0 !== e.button) return;
                            this.isThumbDragged = !0, this.dragStartX = e.clientX, this.dragStartScrollLeft = this.element.scrollLeft, this.dragStartY = e.clientY, this.dragStartScrollTop = this.element.scrollTop;
                            const t = e.target;
                            t.setPointerCapture(e.pointerId), document.addEventListener("pointermove", this.handleThumbDrag), document.addEventListener("pointerup", this.handleThumbDragEnd)
                        },
                        handleThumbDragEnd(e) {
                            this.isThumbDragged = !1;
                            const t = e.target;
                            t.releasePointerCapture(e.pointerId), document.removeEventListener("pointermove", this.handleThumbDrag), document.removeEventListener("pointerup", this.handleThumbDragEnd)
                        },
                        handleThumbDrag(e) {
                            if (!this.isThumbDragged) return;
                            const t = this.$refs.scrollbar,
                                o = this.isHorizontal ? t.clientWidth : t.clientHeight,
                                s = this.isHorizontal ? this.thumbHeightHorizon : this.thumbHeight,
                                i = s / 100 * o,
                                n = o - i,
                                r = this.isHorizontal ? this.element.scrollWidth - this.element.clientWidth : this.element.scrollHeight - this.element.clientHeight,
                                l = e.clientX - this.dragStartX,
                                a = e.clientY - this.dragStartY,
                                c = (this.isHorizontal ? l : a) / n * r;
                            this.isHorizontal ? this.element.scrollLeft = this.dragStartScrollLeft + c : this.element.scrollTop = this.dragStartScrollTop + c
                        },
                        handleTrackClick(e) {
                            const t = this.$refs.scrollbar,
                                o = t.getBoundingClientRect(),
                                s = this.isHorizontal ? t.clientWidth : t.clientHeight,
                                i = this.isHorizontal ? this.thumbHeightHorizon : this.thumbHeight,
                                n = i / 100 * s,
                                r = e.clientX - o.left,
                                l = e.clientY - o.top,
                                c = (this.isHorizontal ? r : l) - n / 2,
                                h = s - n,
                                d = Object(a["a"])(c, 0, h),
                                u = this.isHorizontal ? this.element.scrollWidth - this.element.clientWidth : this.element.scrollHeight - this.element.clientHeight,
                                f = d / h;
                            this.isHorizontal ? this.element.scrollLeft = f * u : this.element.scrollTop = f * u;
                            const p = this.isHorizontal ? this.thumbTopHorizon : this.thumbTop,
                                m = p / 100 * s,
                                b = m + n / 2;
                            this.isHorizontal ? this.trackClickDirection = r < b ? "left" : "right" : this.trackClickDirection = l < b ? "up" : "down", setTimeout(() => this.trackClickDirection = null, 200)
                        },
                        scroll(e) {
                            switch (e) {
                                case "up":
                                    this.element.scrollTop -= this.scrollStep;
                                    break;
                                case "down":
                                    this.element.scrollTop += this.scrollStep;
                                    break;
                                case "left":
                                    this.element.scrollLeft -= this.scrollStep;
                                    break;
                                case "right":
                                    this.element.scrollLeft += this.scrollStep;
                                    break;
                                case "top":
                                    this.element.scrollTop = 0;
                                    break;
                                case "bottom":
                                    this.element.scrollTop = this.element.scrollHeight;
                                    break;
                                case "leftEdge":
                                    this.element.scrollLeft = 0;
                                    break;
                                case "rightEdge":
                                    this.element.scrollLeft = this.element.scrollWidth;
                                    break;
                                case "pageUp":
                                    this.element.scrollTop -= this.element.clientHeight;
                                    break;
                                case "pageDown":
                                    this.element.scrollTop += this.element.clientHeight;
                                    break;
                                case "pageLeft":
                                    this.element.scrollLeft -= this.element.clientWidth;
                                    break;
                                case "pageRight":
                                    this.element.scrollLeft += this.element.clientWidth;
                                    break
                            }
                        },
                        stopHoldScroll() {
                            clearInterval(this.holdScrollInterval), this.holdScrollInterval = null
                        },
                        handleWheel(e) {
                            this.element.scrollTop += e.deltaY, this.element.scrollLeft += e.deltaX
                        },
                        handleScrollbarButton(e) {
                            this.scroll(e), this.holdScrollInterval = setInterval(() => this.scroll(e), this.scrollInterval)
                        }
                    }
                },
                u = d,
                f = o("2877"),
                p = Object(f["a"])(u, n, r, !1, null, null, null),
                m = p.exports;
            const b = "--scrollbar-thickness";
            var g = {
                    props: {
                        xScrollMode: {
                            type: String,
                            default: "auto",
                            validator: e => ["auto", "scroll"].includes(e)
                        },
                        yScrollMode: {
                            type: String,
                            default: "auto",
                            validator: e => ["auto", "scroll"].includes(e)
                        },
                        elClass: String,
                        menuDisabled: Boolean,
                        disabled: Boolean
                    },
                    data() {
                        return {
                            element: null,
                            resizeObserver: null,
                            mutationObserver: null,
                            width: "",
                            isScrollableVertically: !1,
                            isScrollableHorizontally: !1,
                            scrollbarThickness: null,
                            isDisabled: !1,
                            elPaddingRight: null,
                            elPaddingBottom: null
                        }
                    },
                    computed: { ...Object(c["d"])({
                            isRtl: "isRtl"
                        }),
                        showVerticalScrollbar() {
                            return this.isScrollableVertically || "auto" !== this.yScrollMode
                        },
                        showHorizontalScrollbar() {
                            return this.isScrollableHorizontally || "auto" !== this.xScrollMode
                        },
                        verticalScrollbarStyle() {
                            return {
                                paddingBottom: this.showHorizontalScrollbar ? `var(${b})` : 0
                            }
                        },
                        horizontalScrollbarStyle() {
                            const e = this.showVerticalScrollbar ? `var(${b})` : 0;
                            return {
                                ["padding" + (this.isRtl ? "Left" : "Right")]: e
                            }
                        }
                    },
                    async mounted() {
                        var e, t, o;
                        this.isDisabled = this.disabled, await this.$nextTick();
                        const s = null === (e = this.$refs) || void 0 === e ? void 0 : e.scrollbarWrapper;
                        if (this.element = this.elClass && (null === s || void 0 === s ? void 0 : s.querySelector(this.elClass)) || (null === (t = this.$slots.default) || void 0 === t || null === (o = t[0]) || void 0 === o ? void 0 : o.elm), !this.element) throw new Error("No elements found to observe changes.");
                        if (this.element.style.height = "100%", this.element.style.width = "100%", !("ResizeObserver" in window) || !("MutationObserver" in window)) return void(this.isDisabled = !0);
                        if (this.isDisabled) return;
                        this.scrollbarThickness = parseInt(getComputedStyle(document.documentElement).getPropertyValue(b).trim());
                        const i = getComputedStyle(this.element);
                        this.elPaddingRight = parseInt(i.paddingRight), this.elPaddingBottom = parseInt(i.paddingBottom), this.width = this.element.style.getPropertyValue("width") || "100%", this.element.style.overflow = "auto", this.element.classList.add("no-scrollbar"), this.resizeObserver = new ResizeObserver(this.updateScrollbar), this.resizeObserver.observe(this.element), this.mutationObserver = new MutationObserver(this.handleElementMutation), this.mutationObserver.observe(this.element, {
                            attributes: !0,
                            attributeFilter: ["class"],
                            childList: !0
                        }), this.element.addEventListener("scroll", this.updateScrollbar), this.updateScrollbar()
                    },
                    beforeDestroy() {
                        var e, t, o;
                        null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (o = this.element) || void 0 === o || o.removeEventListener("scroll", this.updateScrollbar)
                    },
                    watch: {
                        showVerticalScrollbar(e) {
                            this.element.style["padding" + (this.isRtl ? "Left" : "Right")] = e ? this.scrollbarThickness + this.elPaddingRight + "px" : this.elPaddingRight + "px"
                        },
                        showHorizontalScrollbar(e) {
                            this.element.style.paddingBottom = e ? this.scrollbarThickness + this.elPaddingBottom + "px" : this.elPaddingBottom + "px"
                        }
                    },
                    methods: {
                        updateScrollbar() {
                            var e, t, o, s;
                            this.isScrollableVertically = this.element.clientHeight < this.element.scrollHeight, null === (e = this.$refs) || void 0 === e || null === (t = e.verticalScrollbar) || void 0 === t || t.updateScrollbar(), this.isScrollableHorizontally = this.element.clientWidth < this.element.scrollWidth, null === (o = this.$refs) || void 0 === o || null === (s = o.horizontalScrollbar) || void 0 === s || s.updateScrollbar()
                        },
                        handleElementMutation() {
                            this.element.classList.contains("no-scrollbar") || this.element.classList.add("no-scrollbar"), this.updateScrollbar()
                        }
                    },
                    components: {
                        Scrollbar: m
                    }
                },
                y = g,
                v = Object(f["a"])(y, s, i, !1, null, null, null);
            t["a"] = v.exports
        },
        "7f29": function(e, t, o) {
            "use strict";

            function s(e, t, o) {
                return Math.min(Math.max(e, t), o)
            }
            o.d(t, "a", (function() {
                return s
            }))
        },
        "8ee0": function(e, t, o) {
            "use strict";
            o("e40d")
        },
        9224: function(e) {
            e.exports = JSON.parse('{"a":"4.3.0"}')
        },
        a3be: function(e, t, o) {
            var s = function(e) {
                this.opt = e || {}, this.favicon = this.opt.favicon || "/favicon.ico", this.timeout = this.opt.timeout || 0, this.logError = this.opt.logError || !1
            };
            s.prototype.ping = function(e, t) {
                var o, s, i;
                "undefined" !== typeof Promise && (o = new Promise((function(e, t) {
                    s = e, i = t
                })));
                var n, r = this;
                r.wasSuccess = !1, r.img = new Image, r.img.onload = a, r.img.onerror = c;
                var l = new Date;

                function a(e) {
                    r.wasSuccess = !0, h.call(r, e)
                }

                function c(e) {
                    r.wasSuccess = !1, h.call(r, e)
                }

                function h() {
                    n && clearTimeout(n);
                    var e = new Date - l;
                    if (t) {
                        if ("function" === typeof t) return this.wasSuccess ? (o && s(e), t(null, e)) : (r.logError && console.error("error loading resource"), o && i(e), t("error", e));
                        throw new Error("Callback is not a function.")
                    }
                    if (o) return this.wasSuccess ? s(e) : i(e);
                    throw new Error("Promise is not supported by your browser. Use callback instead.")
                }
                return r.timeout && (n = setTimeout((function() {
                    h.call(r, void 0)
                }), r.timeout)), r.img.src = e + r.favicon + "?" + +new Date, o
            }, e.exports && (e.exports = s)
        },
        b894: function(e, t, o) {
            "use strict";
            o.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("window-main", {
                        attrs: {
                            id: "window-cmd"
                        }
                    }, [o("window-titlebar", {
                        attrs: {
                            icon: "cmd",
                            title: "Command Prompt"
                        }
                    }, [o("window-controls")], 1), o("scrollbar-container", [o("div", {
                        ref: "container",
                        staticClass: "relative bg-black p-0.5 text-white/80 cmd__body",
                        style: e.style,
                        attrs: {
                            "data-test-cmd-container": ""
                        },
                        on: {
                            click: e.focus
                        }
                    }, [o("div", {
                        ref: "banner"
                    }, [e.isBaseTheme ? [e._v(" Win7 Simu v" + e._s(e.version) + " "), o("br"), e._v("Copyright (c) " + e._s((new Date).getFullYear()) + " Visnalize. All rights reserved. ")] : [e._v(" Microsoft Windows [Version 6.1.7600] "), o("br"), e._v("Copyright (c) 2009 Microsoft Corporation. All rights reserved. ")]], 2), e._l(e.lines, (function(t) {
                        return o("div", {
                            key: t,
                            staticClass: "flex mt-5 cmd__line",
                            attrs: {
                                "data-test-cmd-line": ""
                            }
                        }, [e.echo ? [e._v(e._s(e.decorPath + ">"))] : e._e(), o("input", {
                            class: ["flex-1 bg-transparent p-0 font-[inherit] text-inherit text-wrap", e.inputClass],
                            style: e.style,
                            attrs: {
                                "data-test-cmd-input": ""
                            },
                            on: {
                                keyup: function(t) {
                                    return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.execute(t)
                                }
                            }
                        })], 2)
                    }))], 2)]), o("table", {
                        ref: "help",
                        staticClass: "hidden",
                        attrs: {
                            "data-test-cmd-help": ""
                        }
                    }, e._l(e.cmds, (function(t) {
                        return o("tr", {
                            key: t.key
                        }, [o("td", [e._v(e._s(t.key.toUpperCase()))]), o("td", {
                            staticClass: "pl-10"
                        }, [e._v(e._s(t.desc))])])
                    })), 0), o("table", {
                        ref: "sysinfo",
                        staticClass: "hidden",
                        attrs: {
                            "data-test-cmd-sysinfo": ""
                        }
                    }, [o("tr", [o("td", [e._v("Host Name:")]), o("td", [e._v(e._s(e.deviceInfo.host))])]), o("tr", [o("td", [e._v("OS Name:")]), o("td", [e._v("Microsoft Windows 7 Simulator")])]), o("tr", [o("td", [e._v("OS Version:")]), o("td", [e._v("6.1.7600 Build 7600")])]), o("tr", [o("td", [e._v("OS Manufacturer:")]), o("td", [e._v("Microsoft Corporation")])]), o("tr", [o("td", [e._v("OS Configuration:")]), o("td", [e._v("Standalone Workstation")])]), o("tr", [o("td", [e._v("OS Build Type:")]), o("td", [e._v("Multiprocessor Free")])]), o("tr", [o("td", [e._v("Registered Owner:")]), o("td", [e._v("Admin")])]), o("tr", [o("td", [e._v("Registered Organization:")]), o("td", [e._v("N/A")])]), o("tr", [o("td", [e._v("Product ID:")]), o("td", [e._v("00000-10000-20000-AA000")])]), o("tr", [o("td", [e._v("Original Install Date:")]), o("td", [e._v(e._s(e.msToDate(e.deviceInfo.installDate)))])]), o("tr", [o("td", [e._v("Last Update Date:")]), o("td", [e._v(e._s(e.msToDate(e.deviceInfo.updateDate)))])]), o("tr", [o("td", [e._v("System Boot Time:")]), o("td", [e._v(e._s(e.msToDate(e.deviceInfo.bootTime)))])]), o("tr", [o("td", [e._v("System Manufacturer:")]), o("td", [e._v(e._s(e.deviceInfo.manufacturer))])]), o("tr", [o("td", [e._v("System Model:")]), o("td", [e._v(e._s(e.deviceInfo.model))])]), o("tr", [o("td", [e._v("System Locale:")]), o("td", [e._v(e._s(e.deviceInfo.locale))])]), o("tr", [o("td", [e._v("System Timezone:")]), o("td", [e._v(e._s(e.deviceInfo.timezone))])]), o("tr", [o("td", [e._v("Total Physical Memory:")]), o("td", [e._v(e._s(Math.ceil(e.deviceInfo.totalMemory / Math.pow(1024, 3))) + " GB")])]), o("tr", [o("td", [e._v("Available Physical Memory:")]), o("td", [e._v(e._s((e.deviceInfo.availMemory / Math.pow(1024, 3)).toFixed(1)) + " GB")])]), o("tr", [o("td", [e._v("Actual OS Version:")]), o("td", [e._v(e._s(e.deviceInfo.osVersion))])]), o("tr", [o("td", [e._v("Display:")]), o("td", [e._v(e._s(e.deviceInfo.display))])]), o("tr", [o("td", [e._v("Camera Resolutions:")]), o("td", e._l(e.deviceInfo.camera, (function(t, s) {
                        return o("div", {
                            key: s
                        }, [e._v(" Camera " + e._s(s + 1) + ": " + e._s(Math.ceil(t.split("x")[0] * t.split("x")[1] / Math.pow(1e3, 2))) + " MP ")])
                    })), 0)]), o("tr", [o("td", [e._v("Battery:")]), o("td", [e._v(e._s(e.deviceInfo.battery) + "%")])])]), o("div", {
                        ref: "color",
                        staticClass: "hidden flex-col items-start gap-5",
                        attrs: {
                            "data-test-cmd-color": ""
                        }
                    }, [o("p", [e._v("Sets the console foreground and background colors.")]), o("p", [e._v("COLOR [attr]")]), o("table", {
                        staticClass: "ml-7"
                    }, [o("tr", [o("td", [e._v("attr")]), o("td", {
                        staticClass: "pl-10"
                    }, [e._v("Specifies color attribute of console output")])])]), o("p", [e._v(" Color attributes are specified by TWO hex digits -- the first"), o("br"), e._v(" corresponds to the background; the second the foreground. Each digit"), o("br"), e._v(" can be any of the following values: ")]), o("table", {
                        staticClass: "ml-7"
                    }, e._l(e.backColorKeys, (function(t, s) {
                        return o("tr", {
                            key: t
                        }, [o("td", [e._v(e._s(t.toUpperCase()) + " = " + e._s(e.colors[t].name))]), o("td", {
                            staticClass: "pl-10"
                        }, [e._v(e._s(e.foreColorKeys[s].toUpperCase()) + " = " + e._s(e.colors[e.foreColorKeys[s]].name))])])
                    })), 0), o("p", [e._v(" If no argument is given, this command restores the color to what it"), o("br"), e._v(" was when CMD.EXE started. ")]), o("p", [e._v(" The COLOR command sets ERRORLEVEL to 1 if an attempt is made to execute"), o("br"), e._v("the COLOR command with a foreground and background color that are the"), o("br"), e._v("same. ")]), o("p", [e._v('Example: "COLOR fc" produces light red on bright white')])])], 1)
                },
                i = [],
                n = o("4cca"),
                r = o("2f62"),
                l = o("6fba"),
                a = o("e863"),
                c = o("1d26"),
                h = o("e314"),
                d = o("f106"),
                u = o("51e6"),
                f = o("2b0e");
            const p = {
                0: {
                    name: "Black",
                    value: "#0c0c0c"
                },
                1: {
                    name: "Blue",
                    value: "#0037da"
                },
                2: {
                    name: "Green",
                    value: "#13a10e"
                },
                3: {
                    name: "Aqua",
                    value: "#3a96dd"
                },
                4: {
                    name: "Red",
                    value: "#c50f1f"
                },
                5: {
                    name: "Purple",
                    value: "#881798"
                },
                6: {
                    name: "Yellow",
                    value: "#c19c00"
                },
                7: {
                    name: "White",
                    value: "#cccccc"
                },
                8: {
                    name: "Gray",
                    value: "#767676"
                },
                9: {
                    name: "Light Blue",
                    value: "#3b78ff"
                },
                a: {
                    name: "Light Green",
                    value: "#16c60c"
                },
                b: {
                    name: "Light Aqua",
                    value: "#61d6d6"
                },
                c: {
                    name: "Light Red",
                    value: "#e74856"
                },
                d: {
                    name: "Light Purple",
                    value: "#b4009e"
                },
                e: {
                    name: "Light Yellow",
                    value: "#f9f1a5"
                },
                f: {
                    name: "Light Gray",
                    value: "#f2f2f2"
                }
            };
            var m = f["default"].extend({
                    computed: {
                        colors: () => p,
                        backColorKeys: () => Object.keys(p).slice(0, 8),
                        foreColorKeys: () => Object.keys(p).slice(8)
                    }
                }),
                b = o("0f35"),
                g = o("c170"),
                y = o("6792"),
                v = o("3b61"),
                w = o.n(v);
            const k = new w.a({
                timeout: 4e3
            });
            var _ = {
                    data() {
                        return {
                            cmds: [{
                                key: "bsod",
                                desc: "Displays a dummy Blue Screen Of Death.",
                                execute: () => this.$bus.$emit("changeView", {
                                    view: "Bsod",
                                    error: "DUMMY_BSOD"
                                })
                            }, {
                                key: "cls",
                                desc: "Clears the screen.",
                                execute: () => this.$refs.container.innerHTML = ""
                            }, {
                                key: "cmd",
                                desc: "Starts a new instance of the Windows command interpreter.",
                                execute: () => this.write(this.$refs.banner.cloneNode(!0))
                            }, {
                                key: "color",
                                desc: "Sets the console foreground and background colors.",
                                execute: e => {
                                    const t = e.split(" ")[1];
                                    if (!t) return void(this.style = null);
                                    if (2 !== t.length) {
                                        const e = this.$refs.color.cloneNode(!0);
                                        return e.classList.replace("hidden", "flex"), this.write(e)
                                    }
                                    const [o, s] = t.split("").map(e => e.toLowerCase());
                                    o !== s && (this.style = {
                                        backgroundColor: p[o].value + " !important",
                                        color: p[s].value + " !important"
                                    })
                                }
                            }, {
                                key: "date",
                                desc: "Displays the date.",
                                execute: () => {
                                    const e = new Date,
                                        t = Object(b["k"])(e.getDate()),
                                        o = Object(b["k"])(e.getMonth() + 1),
                                        s = e.getFullYear();
                                    this.write(`The current date is: ${t}/${o}/${s}`)
                                }
                            }, {
                                key: "echo",
                                desc: "Displays messages, or turns command echoing on or off.",
                                execute: e => {
                                    const t = e.split(" ");
                                    if ("echo" !== e.trim().toLowerCase()) {
                                        if (2 === t.length) {
                                            if ("on" === t[1]) return void(this.echo = !0);
                                            if ("off" === t[1]) return void(this.echo = !1)
                                        }
                                        t.shift(), this.write(t.join(" "))
                                    } else this.write("ECHO is " + (this.echo ? "on" : "off"))
                                }
                            }, {
                                key: "exit",
                                desc: "Quits the CMD.EXE program (command interpreter).",
                                execute: () => this.$root.$emit(y["c"].CloseWindow, "cmd")
                            }, {
                                key: "help",
                                desc: "Provides Help information for Windows commands.",
                                execute: () => {
                                    const e = this.$refs.help.cloneNode(!0);
                                    e.classList.replace("hidden", "block"), this.write(e)
                                }
                            }, {
                                key: "logoff",
                                desc: "Logs the current user off.",
                                execute: () => this.$bus.$emit("changeView", {
                                    view: "Logon"
                                })
                            }, {
                                key: "ping",
                                desc: "Tests a network connection to a destination host.",
                                execute: async e => {
                                    const t = e.split(" ")[1],
                                        o = [];
                                    let s = 0,
                                        i = 0;
                                    if (!t) return void this.write("Usage: ping host_name");
                                    const n = async () => {
                                        const e = document.createElement("div");
                                        try {
                                            const s = await k.ping(Object(b["b"])(t), null);
                                            o.push(s), e.textContent = `Reply from ${t}: time=${s}ms`
                                        } catch (n) {
                                            i += 1, e.innerHTML = "General failure."
                                        }
                                        s += 1, this.write(e)
                                    };
                                    await k.ping(Object(b["b"])(t), null).then(() => this.write(`Pinging ${t}:`)).then(n).then(n).then(n).then(n).then(() => {
                                        o.sort((e, t) => e - t);
                                        const e = document.createElement("div");
                                        e.style.whiteSpace = "pre-wrap", e.style.marginTop = "1em", e.innerHTML = `Ping statistics for ${t}:\n    Packets: Sent = ${s}, Received = ${s-i}, Lost = ${i} (${100*i/s}% loss),\nApproximate round trip times in milli-seconds:\n    Minimum = ${o.shift()}ms, Maximum = ${o.pop()}ms, Average = ${o.reduce((e,t)=>e+t)/o.length}ms`, this.write(e)
                                    }).catch(() => {
                                        this.write(`Ping request could not find host ${t}. Please check the name and try again.`)
                                    })
                                }
                            }, {
                                key: "shutdown",
                                desc: "Allows proper shutdown of the device.",
                                execute: () => this.$bus.$emit("changeView", {
                                    view: "Shutdown"
                                })
                            }, {
                                key: "start",
                                desc: "Starts a specified program or application package.",
                                execute: e => {
                                    const t = e.split(" ")[1];
                                    if (!t) return;
                                    const o = Object.keys(g["a"]).find(e => g["a"][e].includes(t));
                                    o ? this.$root.$emit(y["c"].OpenWindow, o) : g["d"].includes(t) ? this.$root.$emit(y["c"].OpenWindow, t) : Object(b["c"])(t) ? Object(u["launchApp"])(t) : this.write(`The system cannot find the file ${t}.`)
                                }
                            }, {
                                key: "systeminfo",
                                desc: "Displays device specific properties and configuration.",
                                execute: () => {
                                    const e = this.$refs.sysinfo.cloneNode(!0);
                                    e.classList.replace("hidden", "block"), this.write(e)
                                }
                            }, {
                                key: "time",
                                desc: "Displays the system time.",
                                execute: () => {
                                    const e = new Date,
                                        t = Object(b["k"])(e.getHours()),
                                        o = Object(b["k"])(e.getMinutes()),
                                        s = Object(b["k"])(e.getSeconds());
                                    this.write(`The current time is: ${t}:${o}:${s}`)
                                }
                            }, {
                                key: "winver",
                                desc: "Displays the version of Windows.",
                                execute: () => {
                                    this.$root.$emit(y["c"].OpenWindow, "about")
                                }
                            }]
                        }
                    },
                    methods: {
                        write(e) {
                            const t = document.createElement("div");
                            t.setAttribute("data-test-cmd-output", ""), t.append(e), this.$refs.container.append(t)
                        }
                    }
                },
                S = o("9224"),
                C = {
                    mixins: [_, m],
                    data() {
                        return {
                            lines: [0],
                            echo: !0,
                            style: null,
                            decorPath: null,
                            deviceInfo: {},
                            msToDate(e) {
                                const t = new Date(e),
                                    o = Object(b["k"])(t.getDate()),
                                    s = Object(b["k"])(t.getMonth()),
                                    i = t.getFullYear(),
                                    n = Object(b["k"])(t.getHours()),
                                    r = Object(b["k"])(t.getMinutes()),
                                    l = Object(b["k"])(t.getSeconds());
                                return `${o}/${s}/${i} ${n}:${r}:${l}`
                            }
                        }
                    },
                    computed: { ...Object(r["f"])({
                            desktopPath: "desktopPath",
                            user: "user"
                        }),
                        ...Object(r["d"])(["isBaseTheme"]),
                        version: () => S["a"],
                        inputClass: () => "cmd__input"
                    },
                    async mounted() {
                        const e = Object(n["f"])(this.desktopPath),
                            t = await d["a"].getStats(),
                            o = [...t].reverse().find(t => e.includes(t.path));
                        let s = `${o.letter}:/${Object(n["j"])(e)}`;
                        this.user && (s = s.replace(new RegExp(this.user.uid, "g"), this.user.displayName)), this.decorPath = s.split("/").join("\\"), this.deviceInfo = await Object(u["getDeviceInfo"])(), this.focus()
                    },
                    updated() {
                        this.focus()
                    },
                    methods: {
                        execute({
                            target: e
                        }) {
                            const {
                                value: t
                            } = e, o = t.split(" ")[0], s = this.cmds.find(e => e.key === o.toLowerCase());
                            let i;
                            s ? i = s.execute(t) : o.trim() && (this.write(`'${o}' is not recognized as an internal or external command,`), this.write("operable program or batch file.")), e.outerHTML = t, i instanceof Promise ? i.then(() => this.lines.push(this.lines.length)) : this.lines.push(this.lines.length)
                        },
                        focus() {
                            const e = this.$el.querySelector("." + this.inputClass);
                            e && e.focus()
                        }
                    },
                    components: {
                        ScrollbarContainer: l["a"],
                        WindowControls: a["a"],
                        WindowMain: c["a"],
                        WindowTitlebar: h["a"]
                    }
                },
                O = C,
                H = (o("8ee0"), o("2877")),
                x = Object(H["a"])(O, s, i, !1, null, null, null);
            t["default"] = x.exports
        },
        ce5d: function(e, t, o) {
            "use strict";
            o("0f9f")
        },
        e40d: function(e, t, o) {}
    }
]);