(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["plugin-codemirror"], {
        "15d4": function(e, n, o) {
            var a = {
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

            function i(e) {
                if (!o.o(a, e)) return Promise.resolve().then((function() {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }));
                var n = a[e],
                    i = n[0];
                return o.e(n[1]).then((function() {
                    return o(i)
                }))
            }
            i.keys = function() {
                return Object.keys(a)
            }, i.id = "15d4", e.exports = i
        },
        2299: function(e, n, o) {
            "use strict";
            o.d(n, "c", (function() {
                return a
            })), o.d(n, "a", (function() {
                return i
            })), o.d(n, "b", (function() {
                return c
            })), o.d(n, "e", (function() {
                return r
            })), o.d(n, "d", (function() {
                return s
            }));
            const a = ["#aad1fb", "#5986ca", "#61d4d7", "#6bc35b", "#b3e165", "#fcec8a", "#f0b85b", "#d35352", "#fb83cb", "#fbd7f9", "#9f81bf", "#d9c8db", "#cbc2a5", "#8c6a6b", "#ababab", "#e9e9e9", "#ffb900", "#f7630c", "#da3b01", "#d13438", "#e74856", "#ea005e", "#e3008c", "#c239b3", "#0078d7", "#8e8cd8", "#8764b8", "#b146c2", "#0099bc", "#00b7c3", "#00b294", "#00cc6a"],
                i = ["#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7"],
                c = ["#c3f3fa", "#c8fec0", "#f9ccf8", "#d2d7fc", "#eaeaea", "#fffeb3"],
                r = ["#fff", "#f00", "#c0504d", "#d16349", "#dd8484", "#ccc", "#ffc000", "#f79646", "#d19049", "#f3a447", "#a5a5a5", "#ff0", "#9bbb59", "#ccb400", "#dfce04", "#666", "#00b050", "#4bacc6", "#8fb08c", "#a5b592", "#333", "#004dbb", "#4f81bd", "#646b86", "#809ec2", "#000", "#9b00d3", "#8064a2", "#9e7c7c", "#9c85c0"],
                s = ["#ff0", "#0f0", "#0ff", "#f0f", "#00f", "#f00", "#000080", "#008080", "#008000", "#800080", "#800000", "#808000", "#808080", "#c0c0c0", "#000"]
        },
        2877: function(e, n, o) {
            "use strict";

            function a(e, n, o, a, i, c, r, s) {
                var t, d = "function" === typeof e ? e.options : e;
                if (n && (d.render = n, d.staticRenderFns = o, d._compiled = !0), a && (d.functional = !0), c && (d._scopeId = "data-v-" + c), r ? (t = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, d._ssrRegister = t) : i && (t = s ? function() {
                        i.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : i), t)
                    if (d.functional) {
                        d._injectStyles = t;
                        var m = d.render;
                        d.render = function(e, n) {
                            return t.call(n), m(e, n)
                        }
                    } else {
                        var u = d.beforeCreate;
                        d.beforeCreate = u ? [].concat(u, t) : [t]
                    }
                return {
                    exports: e,
                    options: d
                }
            }
            o.d(n, "a", (function() {
                return a
            }))
        },
        "2ec4": function(e, n, o) {},
        3150: function(e, n, o) {
            "use strict";
            o.r(n);
            var a = function() {
                    var e = this,
                        n = e.$createElement,
                        o = e._self._c || n;
                    return o("div", {
                        staticClass: "w-full h-full"
                    })
                },
                i = [],
                c = o("e1ea"),
                r = o("e47c"),
                s = o("2f62"),
                t = o("02d1"),
                d = o("caa4"),
                m = o("5a84");
            const u = "#e5c07b",
                w = "#e06c75",
                l = "#56b6c2",
                b = "#ffffff",
                f = "#abb2bf",
                p = "#7d8799",
                g = "#61afef",
                h = "#98c379",
                x = "#d19a66",
                k = "#c678dd",
                y = "#21252b",
                W = "#2c313a",
                C = "#282c34",
                T = "#353a42",
                P = "#3E4451",
                v = "#528bff",
                L = t["c"].theme({
                    "&": {
                        color: f,
                        backgroundColor: C
                    },
                    ".cm-content": {
                        caretColor: v
                    },
                    ".cm-cursor, .cm-dropCursor": {
                        borderLeftColor: v
                    },
                    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
                        backgroundColor: P
                    },
                    ".cm-panels": {
                        backgroundColor: y,
                        color: f
                    },
                    ".cm-panels.cm-panels-top": {
                        borderBottom: "2px solid black"
                    },
                    ".cm-panels.cm-panels-bottom": {
                        borderTop: "2px solid black"
                    },
                    ".cm-searchMatch": {
                        backgroundColor: "#72a1ff59",
                        outline: "1px solid #457dff"
                    },
                    ".cm-searchMatch.cm-searchMatch-selected": {
                        backgroundColor: "#6199ff2f"
                    },
                    ".cm-activeLine": {
                        backgroundColor: "#6699ff0b"
                    },
                    ".cm-selectionMatch": {
                        backgroundColor: "#aafe661a"
                    },
                    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
                        backgroundColor: "#bad0f847"
                    },
                    ".cm-gutters": {
                        backgroundColor: C,
                        color: p,
                        border: "none"
                    },
                    ".cm-activeLineGutter": {
                        backgroundColor: W
                    },
                    ".cm-foldPlaceholder": {
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#ddd"
                    },
                    ".cm-tooltip": {
                        border: "none",
                        backgroundColor: T
                    },
                    ".cm-tooltip .cm-tooltip-arrow:before": {
                        borderTopColor: "transparent",
                        borderBottomColor: "transparent"
                    },
                    ".cm-tooltip .cm-tooltip-arrow:after": {
                        borderTopColor: T,
                        borderBottomColor: T
                    },
                    ".cm-tooltip-autocomplete": {
                        "& > ul > li[aria-selected]": {
                            backgroundColor: W,
                            color: f
                        }
                    }
                }, {
                    dark: !0
                }),
                _ = d["a"].define([{
                    tag: m["d"].keyword,
                    color: k
                }, {
                    tag: [m["d"].name, m["d"].deleted, m["d"].character, m["d"].propertyName, m["d"].macroName],
                    color: w
                }, {
                    tag: [m["d"].function(m["d"].variableName), m["d"].labelName],
                    color: g
                }, {
                    tag: [m["d"].color, m["d"].constant(m["d"].name), m["d"].standard(m["d"].name)],
                    color: x
                }, {
                    tag: [m["d"].definition(m["d"].name), m["d"].separator],
                    color: f
                }, {
                    tag: [m["d"].typeName, m["d"].className, m["d"].number, m["d"].changed, m["d"].annotation, m["d"].modifier, m["d"].self, m["d"].namespace],
                    color: u
                }, {
                    tag: [m["d"].operator, m["d"].operatorKeyword, m["d"].url, m["d"].escape, m["d"].regexp, m["d"].link, m["d"].special(m["d"].string)],
                    color: l
                }, {
                    tag: [m["d"].meta, m["d"].comment],
                    color: p
                }, {
                    tag: m["d"].strong,
                    fontWeight: "bold"
                }, {
                    tag: m["d"].emphasis,
                    fontStyle: "italic"
                }, {
                    tag: m["d"].strikethrough,
                    textDecoration: "line-through"
                }, {
                    tag: m["d"].link,
                    color: p,
                    textDecoration: "underline"
                }, {
                    tag: m["d"].heading,
                    fontWeight: "bold",
                    color: w
                }, {
                    tag: [m["d"].atom, m["d"].bool, m["d"].special(m["d"].variableName)],
                    color: x
                }, {
                    tag: [m["d"].processingInstruction, m["d"].string, m["d"].inserted],
                    color: h
                }, {
                    tag: m["d"].invalid,
                    color: b
                }]),
                N = [L, Object(d["s"])(_)],
                S = new c["e"];
            var O = {
                    name: "CodemirrorEditor",
                    props: {
                        editor: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: { ...Object(s["f"])({
                            theme: "theme"
                        }),
                        darkThemeExtension() {
                            return r["a"].DarkMode.test(this.theme) ? N : []
                        }
                    },
                    watch: {
                        theme() {
                            this.editor.dispatch({
                                effects: S.reconfigure(this.darkThemeExtension)
                            })
                        }
                    },
                    mounted() {
                        this.editor.dispatch({
                            effects: c["n"].appendConfig.of(S.of(this.darkThemeExtension))
                        }), this.$el.appendChild(this.editor.dom)
                    },
                    beforeDestroy() {
                        this.editor.destroy()
                    }
                },
                X = O,
                E = (o("641a"), o("2877")),
                B = Object(E["a"])(X, a, i, !1, null, null, null),
                I = B.exports;
            const D = {
                install(e) {
                    e.component(I.name, I)
                }
            };
            n["default"] = D
        },
        "3b8c": function(e, n, o) {
            "use strict";
            o.d(n, "a", (function() {
                return c
            }));
            var a = o("2299");
            const i = "Windows Default",
                c = {
                    base: {
                        name: "Base theme",
                        bg: "#fffd"
                    },
                    "aero-1": {
                        name: "Windows 7",
                        color: a["c"][0],
                        category: "aero",
                        transparent: !0,
                        sound: i
                    },
                    "aero-2": {
                        name: "Architecture",
                        bg: "architecture",
                        color: a["c"][1],
                        category: "aero",
                        transparent: !0,
                        sound: "Cityscape"
                    },
                    "aero-3": {
                        name: "Landscape",
                        bg: "landscape",
                        color: a["c"][14],
                        category: "aero",
                        transparent: !0,
                        sound: "Landscape"
                    },
                    "aero-4": {
                        name: "Nature",
                        bg: "nature",
                        color: a["c"][10],
                        category: "aero",
                        transparent: !0,
                        sound: "Garden"
                    },
                    "basic-1": {
                        name: "Windows 7 Basic",
                        category: "basic",
                        color: "#a7c0dc",
                        sound: i
                    },
                    "basic-2": {
                        name: "Windows Classic",
                        bg: "#3b6ea4",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: i
                    },
                    "basic-3": {
                        name: "High Contrast Black",
                        bg: "#000",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: i
                    },
                    "basic-4": {
                        name: "High Contrast White",
                        bg: "#fff",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: i
                    },
                    win31: {
                        name: "Windows 3.1",
                        bg: "#bfbdc0",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 3.1"
                    },
                    win95: {
                        name: "Windows 95",
                        bg: "#007d7b",
                        category: "wins",
                        sound: "Windows 95"
                    },
                    win98: {
                        name: "Windows 98",
                        bg: "#57a8a8",
                        iconPack: "win95",
                        category: "wins",
                        sound: "Windows 98"
                    },
                    win2k: {
                        name: "Windows 2000",
                        bg: "#3b6ea4",
                        category: "wins",
                        sound: "Window 2000"
                    },
                    winxp: {
                        name: "Windows XP",
                        bg: "winxp",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows XP"
                    },
                    winxpE: {
                        name: "Windows XP (Embedded)",
                        bg: "winxp",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpG: {
                        name: "Windows XP (Olive Green)",
                        bg: "autumn",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpN: {
                        name: "Windows XP (Royale Noir)",
                        bg: "winxp",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpR: {
                        name: "Windows XP (Royale)",
                        bg: "follows",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpS: {
                        name: "Windows XP (Silver)",
                        bg: "azul",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpZ: {
                        name: "Windows XP (Zune)",
                        bg: "ascent",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winvista: {
                        name: "Windows Vista",
                        bg: "winvista",
                        color: "#14A3C7",
                        category: "wins",
                        transparent: !0,
                        sound: i
                    },
                    win8: {
                        name: "Windows 8",
                        bg: "win8",
                        color: "#69aef7",
                        category: "wins",
                        sound: i
                    },
                    win81: {
                        name: "Windows 8.1",
                        bg: "win81",
                        color: "#f0c869",
                        iconPack: "win8",
                        category: "wins",
                        sound: i
                    },
                    win10: {
                        name: "Windows 10",
                        bg: "win10",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 10"
                    },
                    win11: {
                        name: "Windows 11 (Light)",
                        bg: "win11",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 11"
                    },
                    win11dark: {
                        name: "Windows 11 (Dark)",
                        bg: "win11dark",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 11"
                    },
                    macos: {
                        name: "MacOS",
                        bg: "macos",
                        premium: "ad",
                        sound: "MacOS"
                    },
                    chromeos: {
                        name: "ChromeOS",
                        bg: "chromeos",
                        premium: "ad",
                        sound: "ChromeOS"
                    },
                    ubuntu: {
                        name: "Ubuntu",
                        bg: "ubuntu",
                        color: a["c"][6],
                        premium: "pay"
                    },
                    kubuntu: {
                        name: "Kubuntu (Breeze)",
                        bg: "kubuntu",
                        color: a["c"][1],
                        premium: "ad"
                    },
                    winLS: {
                        name: "Windows Longhorn (Slate)",
                        bg: "winLS",
                        iconPack: "winxp",
                        premium: "ad",
                        sound: "Windows Longhorn"
                    },
                    winLP: {
                        name: "Windows Longhorn (Plex)",
                        bg: "winLP",
                        premium: "ad",
                        sound: "Windows Longhorn"
                    },
                    aeroNoir: {
                        name: "Aero Noir",
                        bg: "aeroNoir",
                        color: a["c"][3],
                        premiumId: "aeronoir",
                        premium: "pay",
                        transparent: !0,
                        sound: i
                    },
                    oxygen: {
                        name: "Oxygen",
                        bg: "oxygen",
                        color: a["c"][4],
                        premium: "pay"
                    },
                    winW: {
                        name: "Windows Whistler",
                        bg: "winW",
                        premium: "ad",
                        sound: "Windows Whistler"
                    },
                    onebit: {
                        name: "Onebit",
                        bg: "#352b30",
                        premium: "pay"
                    }
                }
        },
        "641a": function(e, n, o) {
            "use strict";
            o("2ec4")
        },
        e47c: function(e, n, o) {
            "use strict";
            o.d(n, "c", (function() {
                return r
            })), o.d(n, "d", (function() {
                return s
            })), o.d(n, "b", (function() {
                return t
            })), o.d(n, "h", (function() {
                return m
            })), o.d(n, "f", (function() {
                return u
            })), o.d(n, "g", (function() {
                return w
            })), o.d(n, "a", (function() {
                return l
            }));
            var a = o("2f62"),
                i = o("3b8c");
            const c = {
                    TogglePreview: "togglePreview",
                    SetBootTheme: "setBootTheme",
                    LoadTheme: "loadTheme",
                    UnloadTheme: "unloadTheme"
                },
                r = "personalization",
                s = Object(a["a"])(r),
                t = c,
                d = {
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
            n["e"] = {
                namespaced: !0,
                state() {
                    return {
                        bootTheme: null,
                        previewTheme: null,
                        loadedTheme: null
                    }
                },
                getters: {
                    themes: () => i["a"]
                },
                mutations: {
                    [c.TogglePreview]: (e, n) => {
                        e.previewTheme = n || null
                    },
                    [c.SetBootTheme]: (e, n) => {
                        e.bootTheme = n
                    },
                    [c.LoadTheme]: (e, n) => {
                        e.loadedTheme = n
                    }
                },
                actions: {
                    [c.TogglePreview]: ({
                        commit: e
                    }, n) => {
                        e(c.TogglePreview, n)
                    },
                    [c.LoadTheme]: async ({
                        commit: e,
                        dispatch: n
                    }, a) => {
                        if (a) {
                            await n(c.UnloadTheme);
                            try {
                                const n = u(a),
                                    {
                                        default: i
                                    } = await o("15d4")(`./${n}.scss`);
                                i.use(), e(c.LoadTheme, i)
                            } catch (i) {
                                console.error("Failed to load theme style for: " + a, i)
                            }
                        }
                    },
                    [c.UnloadTheme]: ({
                        state: e,
                        commit: n
                    }) => {
                        e.loadedTheme && (e.loadedTheme.unuse(), n(c.LoadTheme, null))
                    }
                }
            };
            const m = e => "win11dark" === e ? "win11" : "win81" === e ? "win8" : "winLP" === e ? "winLS" : /xp.{1}/.test(e) ? "winxp" : /^(aero|basic)-/.test(e) || "base" === e ? "win7" : e,
                u = e => d[e] || e,
                w = e => "win7" === e ? "aero-1" : e,
                l = {
                    AeroGlass: /^aero|winvista/,
                    AeroTaskbarItem: /^win8|^aero|basic-1/,
                    CenterTaskbar: /win11|chromeos/,
                    ChangeColor: /^aero|^win8|win10|^win11|kubuntu|ubuntu|oxygen/,
                    ChangeTransparency: /^aero|^win8|kubuntu/,
                    DarkMode: /basic-3|win11dark|macos|ubuntu|kubuntu|oxygen|aeroNoir/
                }
        }
    }
]);