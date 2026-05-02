(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["vue-app", "chunk-1e291309", "testmode", "vue-store"], {
        "0bb3": function(e, c, a) {},
        "0d26": function(e, c, a) {
            "use strict";
            a.r(c), a.d(c, "TestParam", (function() {
                return s
            }));
            var r = a("f708"),
                o = a("c170"),
                n = a("3b8c");
            const s = {
                    app: {
                        type: "select",
                        values: [null, ...o["d"]]
                    },
                    theme: {
                        type: "select",
                        values: [null, ...Object.keys(n["a"])]
                    },
                    locale: {
                        type: "text",
                        placeholder: "ar"
                    },
                    wei: {
                        type: "number",
                        placeholder: "1.0 - 7.9"
                    },
                    boot: {
                        type: "checkbox"
                    },
                    cursor: {
                        type: "checkbox"
                    },
                    outline: {
                        type: "checkbox"
                    },
                    subscribed: {
                        type: "checkbox"
                    },
                    hideTestbox: {
                        type: "checkbox"
                    },
                    notification: {
                        type: "checkbox"
                    },
                    dummyInstaller: {
                        type: "checkbox"
                    }
                },
                t = {
                    query: null,
                    enabled: !1,
                    init() {
                        !this.query && Object(r["b"])() && (this.query = new URLSearchParams(location.search), this.enabled = !!this.query.get("testmode"))
                    },
                    get(e) {
                        return this.query ? this.query.get(e) : null
                    }
                };
            c["default"] = t
        },
        2299: function(e, c, a) {
            "use strict";
            a.d(c, "c", (function() {
                return r
            })), a.d(c, "a", (function() {
                return o
            })), a.d(c, "b", (function() {
                return n
            })), a.d(c, "e", (function() {
                return s
            })), a.d(c, "d", (function() {
                return t
            }));
            const r = ["#aad1fb", "#5986ca", "#61d4d7", "#6bc35b", "#b3e165", "#fcec8a", "#f0b85b", "#d35352", "#fb83cb", "#fbd7f9", "#9f81bf", "#d9c8db", "#cbc2a5", "#8c6a6b", "#ababab", "#e9e9e9", "#ffb900", "#f7630c", "#da3b01", "#d13438", "#e74856", "#ea005e", "#e3008c", "#c239b3", "#0078d7", "#8e8cd8", "#8764b8", "#b146c2", "#0099bc", "#00b7c3", "#00b294", "#00cc6a"],
                o = ["#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7"],
                n = ["#c3f3fa", "#c8fec0", "#f9ccf8", "#d2d7fc", "#eaeaea", "#fffeb3"],
                s = ["#fff", "#f00", "#c0504d", "#d16349", "#dd8484", "#ccc", "#ffc000", "#f79646", "#d19049", "#f3a447", "#a5a5a5", "#ff0", "#9bbb59", "#ccb400", "#dfce04", "#666", "#00b050", "#4bacc6", "#8fb08c", "#a5b592", "#333", "#004dbb", "#4f81bd", "#646b86", "#809ec2", "#000", "#9b00d3", "#8064a2", "#9e7c7c", "#9c85c0"],
                t = ["#ff0", "#0f0", "#0ff", "#f0f", "#00f", "#f00", "#000080", "#008080", "#008000", "#800080", "#800000", "#808000", "#808080", "#c0c0c0", "#000"]
        },
        "278f": function(e, c, a) {},
        2877: function(e, c, a) {
            "use strict";

            function r(e, c, a, r, o, n, s, t) {
                var m, i = "function" === typeof e ? e.options : e;
                if (c && (i.render = c, i.staticRenderFns = a, i._compiled = !0), r && (i.functional = !0), n && (i._scopeId = "data-v-" + n), s ? (m = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                    }, i._ssrRegister = m) : o && (m = t ? function() {
                        o.call(this, (i.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : o), m)
                    if (i.functional) {
                        i._injectStyles = m;
                        var d = i.render;
                        i.render = function(e, c) {
                            return m.call(c), d(e, c)
                        }
                    } else {
                        var l = i.beforeCreate;
                        i.beforeCreate = l ? [].concat(l, m) : [m]
                    }
                return {
                    exports: e,
                    options: i
                }
            }
            a.d(c, "a", (function() {
                return r
            }))
        },
        "3b8c": function(e, c, a) {
            "use strict";
            a.d(c, "a", (function() {
                return n
            }));
            var r = a("2299");
            const o = "Windows Default",
                n = {
                    base: {
                        name: "Base theme",
                        bg: "#fffd"
                    },
                    "aero-1": {
                        name: "Windows 7",
                        color: r["c"][0],
                        category: "aero",
                        transparent: !0,
                        sound: o
                    },
                    "aero-2": {
                        name: "Architecture",
                        bg: "architecture",
                        color: r["c"][1],
                        category: "aero",
                        transparent: !0,
                        sound: "Cityscape"
                    },
                    "aero-3": {
                        name: "Landscape",
                        bg: "landscape",
                        color: r["c"][14],
                        category: "aero",
                        transparent: !0,
                        sound: "Landscape"
                    },
                    "aero-4": {
                        name: "Nature",
                        bg: "nature",
                        color: r["c"][10],
                        category: "aero",
                        transparent: !0,
                        sound: "Garden"
                    },
                    "basic-1": {
                        name: "Windows 7 Basic",
                        category: "basic",
                        color: "#a7c0dc",
                        sound: o
                    },
                    "basic-2": {
                        name: "Windows Classic",
                        bg: "#3b6ea4",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
                    },
                    "basic-3": {
                        name: "High Contrast Black",
                        bg: "#000",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
                    },
                    "basic-4": {
                        name: "High Contrast White",
                        bg: "#fff",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
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
                        sound: o
                    },
                    win8: {
                        name: "Windows 8",
                        bg: "win8",
                        color: "#69aef7",
                        category: "wins",
                        sound: o
                    },
                    win81: {
                        name: "Windows 8.1",
                        bg: "win81",
                        color: "#f0c869",
                        iconPack: "win8",
                        category: "wins",
                        sound: o
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
                        color: r["c"][6],
                        premium: "pay"
                    },
                    kubuntu: {
                        name: "Kubuntu (Breeze)",
                        bg: "kubuntu",
                        color: r["c"][1],
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
                        color: r["c"][3],
                        premiumId: "aeronoir",
                        premium: "pay",
                        transparent: !0,
                        sound: o
                    },
                    oxygen: {
                        name: "Oxygen",
                        bg: "oxygen",
                        color: r["c"][4],
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
        "8b13": function(e, c, a) {},
        "911e": function(e, c, a) {
            "use strict";
            a.r(c);
            var r = function() {
                    var e = this,
                        c = e.$createElement,
                        a = e._self._c || c;
                    return a("div", {
                        class: [e.themeBuild, e.theme],
                        attrs: {
                            id: "root"
                        }
                    }, [a("div", {
                        attrs: {
                            id: "stage"
                        }
                    }, [e.isPwa ? [a("a-ctrl"), a("a-panel")] : e._e(), e.isDevMode && e.showTestbox ? a("test-box") : e._e(), a("pricing-panel"), a("theme-preview"), e.showFakeCursor ? a("mouse-cursor") : e._e(), "Boot" === e.view ? a("boot-screen") : e._e(), "Bios" === e.view ? a("bios-screen") : e._e(), "Installer" === e.view ? a("installer-screen") : e._e(), "Bsod" === e.view ? a("bsod-screen", {
                        attrs: {
                            code: e.error,
                            click: "DUMMY_BSOD" === e.error && e.logon
                        }
                    }) : e._e(), ["Shutdown", "Restart"].includes(e.view) ? a("shutdown-screen") : e._e(), a("transition", {
                        attrs: {
                            "leave-active-class": e.skipTransition ? null : "animated fadeOut"
                        }
                    }, [
                        ["Logon", "Switch"].includes(e.view) ? a("logon-screen") : e._e()
                    ], 1), a("transition", {
                        attrs: {
                            "enter-active-class": e.skipTransition ? null : "animated fadeIn delay-1s fast"
                        }
                    }, ["Main" === e.view ? a("main-screen") : e._e()], 1), e.showPortraitOverlay ? a("portrait-overlay") : e._e()], 2)])
                },
                o = [],
                n = (a("278f"), a("0bb3"), a("8b13"), a("a45d"), a("a372"), a("a8d7"), a("6c8d")),
                s = a("e47c"),
                t = a("f708"),
                m = a("51e6"),
                i = a("fb04"),
                d = a("5cef"),
                l = a("0d26"),
                b = a("01b4"),
                u = a("2f62"),
                g = a("26a1"),
                p = a("0f35"),
                h = {
                    data() {
                        const {
                            theme: e
                        } = this.$store.state;
                        return {
                            theme: e,
                            view: "Boot",
                            transMsg: null,
                            error: null,
                            showCursor: !0,
                            showTestbox: l["default"].enabled && !l["default"].get("hideTestbox"),
                            showPortraitOverlay: !1,
                            doubleBackPressed: !1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            user: "user",
                            mainTheme: "theme"
                        }),
                        ...s["d"].mapState({
                            bootTheme: "bootTheme"
                        }),
                        ...n["c"].mapState({
                            storeShowCursor: "showCursor"
                        }),
                        themeDependencies() {
                            return [this.mainTheme, this.bootTheme]
                        },
                        themeBuild() {
                            return Object(s["f"])(this.theme)
                        },
                        showFakeCursor() {
                            return this.showCursor && !["Bios", "Boot"].includes(this.view)
                        },
                        isDevMode: () => Object(t["b"])(),
                        isPwa: () => Object(t["d"])(),
                        skipTransition: () => l["default"].enabled
                    },
                    watch: {
                        themeDependencies(e) {
                            const [c, a] = e;
                            this.theme = c || Object(s["g"])(a)
                        },
                        showFakeCursor(e) {
                            this.showRealCursor(!e)
                        },
                        storeShowCursor(e) {
                            this.showCursor = e
                        }
                    },
                    async created() {
                        const {
                            App: e
                        } = await a.e("capacitor-app").then(a.bind(null, "2ad9"));
                        a.e("hotkey").then(a.bind(null, "2ea7")).then(e => e.default.on("ctrl+`", () => this.showTestbox = !this.showTestbox));
                        const c = window.matchMedia("(orientation: portrait)");
                        c.addEventListener && c.addEventListener("change", ({
                            matches: e
                        }) => !Object(t["a"])() && (this.showPortraitOverlay = e)), Object(t["a"])() && (a.e("applovin").then(a.bind(null, "f42e")).then(({
                            default: e
                        }) => e.init()), a.e("capacitor-noti").then(a.bind(null, "6ac3")).then(({
                            PushNotifications: e
                        }) => e.register()), e.addListener("backButton", () => {
                            if (this.doubleBackPressed) return e.exitApp();
                            this.doubleBackPressed = !0, Object(m["showToast"])("Press back again to exit"), Object(p["q"])(2e3).then(() => this.doubleBackPressed = !1)
                        })), i["default"].init().then(() => {
                            this.$store.dispatch(b["a"].ShowAds), this.$store.dispatch(b["a"].UnlockTheme)
                        }), this.$bus.$on("changeView", ({
                            view: c,
                            error: a
                        }) => {
                            "Main" === c && Object(p["q"])(1e3).then(() => this[n["a"].ChangeDefaultCursor]()), "Bsod" === c && (this.showCursor = !1), ["Logon", "Switch", "Restart", "Bsod"].includes(c) && (this.$store.commit(b["a"].Theme, null), this.$store.commit(d["a"].SetZoom, null), this.$store.dispatch(d["a"].SetResolution, null)), "Shutdown" === c && setTimeout(e.exitApp, 4e3), "Restart" === c && setTimeout(m["restart"], 4e3), this.view = c, this.error = a
                        })
                    },
                    methods: { ...n["c"].mapActions([n["a"].ChangeDefaultCursor]),
                        showRealCursor(e) {
                            l["default"].enabled && l["default"].get("cursor") || Object(g["n"])({
                                flag: !e,
                                id: "cursor-none",
                                content: "[data-show-dummy-cursor],[data-show-dummy-cursor] *,.logon__main,.logon__main *{cursor: none !important}"
                            })
                        },
                        logon() {
                            this.$bus.$emit("changeView", {
                                view: "Logon"
                            })
                        }
                    },
                    components: {
                        ACtrl: () => Promise.all([a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("assistive-control")]).then(a.bind(null, "f39d4")),
                        APanel: () => a.e("assistive-panel").then(a.bind(null, "e2a9")),
                        BiosScreen: () => a.e("bios").then(a.bind(null, "34a0")),
                        BootScreen: () => Promise.all([a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("vue-i18n"), a.e("boot")]).then(a.bind(null, "8151")),
                        LogonScreen: () => Promise.all([a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("logon")]).then(a.bind(null, "d78a")),
                        BsodScreen: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("bsod")]).then(a.bind(null, "c8f9")),
                        InstallerScreen: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("installer~logon-ubuntu~windows"), a.e("installer")]).then(a.bind(null, "49fb")),
                        MainScreen: () => Promise.all([a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("firebase-auth"), a.e("g-calendar~logon-ubuntu~themestudio~windows"), a.e("installer~logon-ubuntu~windows"), a.e("logon-ubuntu~themestudio~windows"), a.e("logon-ubuntu~windows"), a.e("windows")]).then(a.bind(null, "246c")),
                        ShutdownScreen: () => a.e("shutdown").then(a.bind(null, "9819")),
                        MouseCursor: () => a.e("cursor").then(a.bind(null, "43f0")),
                        ThemePreview: () => a.e("theme-preview").then(a.bind(null, "a4a8")),
                        PricingPanel: () => a.e("pricing-panel").then(a.bind(null, "ef9c")),
                        TestBox: () => Promise.all([a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("testbox")]).then(a.bind(null, "a565")),
                        PortraitOverlay: () => a.e("portrait-overlay").then(a.bind(null, "67ed"))
                    }
                },
                f = h,
                y = a("2877"),
                E = Object(y["a"])(f, r, o, !1, null, null, null);
            c["default"] = E.exports
        },
        "949c": function(e, c, a) {
            "use strict";
            a.d(c, "a", (function() {
                return i
            })), a.d(c, "b", (function() {
                return u
            }));
            var r = a("968c"),
                o = a("0d26"),
                n = a("01b4"),
                s = a("cee4"),
                t = a("4360"),
                m = a("b79c");
            const i = "billingEmail",
                d = "https://billing.visnalize.com",
                l = () => o["default"].enabled ? "&testmode=1" : "";
            async function b(e) {
                if ("object" !== typeof e || "Checkout.Success" !== e.event) return;
                const {
                    user_email: c,
                    first_order_item: a
                } = e.data.order.data.attributes, {
                    product_id: o
                } = a, s = m["c"].getWebProductId(), d = m["c"].getRemoveAds();
                if (Array.isArray(d) && d.includes(o)) t["default"].commit(n["a"].ShowAds, !1);
                else {
                    const e = Object.keys(s).find(e => s[e] === o);
                    t["default"].commit(n["a"].UnlockTheme, e)
                }
                await r["default"].local.update(i, null, c), window.LemonSqueezy.Url.Close()
            }
            const u = {
                    launch() {
                        return new Promise(e => {
                            const c = document.createElement("script");
                            c.src = "https://app.lemonsqueezy.com/js/lemon.js", c.onload = () => {
                                window.createLemonSqueezy(), window.LemonSqueezy.Setup({
                                    eventHandler: b
                                }), e()
                            }, document.body.append(c)
                        })
                    },
                    async products() {
                        const {
                            data: e
                        } = await s["a"].get(d + "/products?name=win7-simu" + l());
                        return e.map(e => ({
                            identifier: e.id,
                            priceString: e.prettyPrice,
                            price: Number(e.prettyPrice.replace(/[^0-9\\.]/g, "")),
                            productCategory: g[e.type]
                        }))
                    },
                    async verify(e) {
                        const c = await r["default"].local.get(i);
                        if (!c) return !1;
                        const {
                            data: a
                        } = await s["a"].get(d + `/verify?email=${c}&productIds=${e.join()}${l()}`);
                        return a
                    },
                    checkout(e) {
                        return window.LemonSqueezy ? (window.LemonSqueezy.Url.Open("https://store.visnalize.com/checkout/buy/" + e), Promise.reject()) : Promise.reject("LemonSqueezy not initialized")
                    }
                },
                g = ["UNKNOWN", "SUBSCRIPTION", "NON_SUBSCRIPTION"]
        },
        a372: function(e, c, a) {},
        a45d: function(e, c, a) {},
        ac3c: function(e, c, a) {
            "use strict";
            a.d(c, "a", (function() {
                return t
            })), a.d(c, "b", (function() {
                return p
            })), a.d(c, "c", (function() {
                return E
            })), a.d(c, "d", (function() {
                return w
            }));
            var r, o = function() {
                var e = function(c, a) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, c) {
                        e.__proto__ = c
                    } || function(e, c) {
                        for (var a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a])
                    }, e(c, a)
                };
                return function(c, a) {
                    if ("function" !== typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");

                    function r() {
                        this.constructor = c
                    }
                    e(c, a), c.prototype = null === a ? Object.create(a) : (r.prototype = a.prototype, new r)
                }
            }();
            (function(e) {
                e["UNKNOWN_ERROR"] = "0", e["PURCHASE_CANCELLED_ERROR"] = "1", e["STORE_PROBLEM_ERROR"] = "2", e["PURCHASE_NOT_ALLOWED_ERROR"] = "3", e["PURCHASE_INVALID_ERROR"] = "4", e["PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR"] = "5", e["PRODUCT_ALREADY_PURCHASED_ERROR"] = "6", e["RECEIPT_ALREADY_IN_USE_ERROR"] = "7", e["INVALID_RECEIPT_ERROR"] = "8", e["MISSING_RECEIPT_FILE_ERROR"] = "9", e["NETWORK_ERROR"] = "10", e["INVALID_CREDENTIALS_ERROR"] = "11", e["UNEXPECTED_BACKEND_RESPONSE_ERROR"] = "12", e["RECEIPT_IN_USE_BY_OTHER_SUBSCRIBER_ERROR"] = "13", e["INVALID_APP_USER_ID_ERROR"] = "14", e["OPERATION_ALREADY_IN_PROGRESS_ERROR"] = "15", e["UNKNOWN_BACKEND_ERROR"] = "16", e["INVALID_APPLE_SUBSCRIPTION_KEY_ERROR"] = "17", e["INELIGIBLE_ERROR"] = "18", e["INSUFFICIENT_PERMISSIONS_ERROR"] = "19", e["PAYMENT_PENDING_ERROR"] = "20", e["INVALID_SUBSCRIBER_ATTRIBUTES_ERROR"] = "21", e["LOG_OUT_ANONYMOUS_USER_ERROR"] = "22", e["CONFIGURATION_ERROR"] = "23", e["UNSUPPORTED_ERROR"] = "24", e["EMPTY_SUBSCRIBER_ATTRIBUTES_ERROR"] = "25", e["PRODUCT_DISCOUNT_MISSING_IDENTIFIER_ERROR"] = "26", e["PRODUCT_DISCOUNT_MISSING_SUBSCRIPTION_GROUP_IDENTIFIER_ERROR"] = "28", e["CUSTOMER_INFO_ERROR"] = "29", e["SYSTEM_INFO_ERROR"] = "30", e["BEGIN_REFUND_REQUEST_ERROR"] = "31", e["PRODUCT_REQUEST_TIMED_OUT_ERROR"] = "32", e["API_ENDPOINT_BLOCKED"] = "33", e["INVALID_PROMOTIONAL_OFFER_ERROR"] = "34", e["OFFLINE_CONNECTION_ERROR"] = "35", e["TEST_STORE_SIMULATED_PURCHASE_ERROR"] = "42"
            })(r || (r = {}));
            var n, s, t, m, i, d, l, b, u, g, p, h, f, y, E, R, _, I, w;
            (function(e) {
                function c() {
                    var a = e.call(this, "There is no singleton instance. Make sure you configure Purchases before trying to get the default instance. More info here: https://errors.rev.cat/configuring-sdk") || this;
                    return Object.setPrototypeOf(a, c.prototype), a
                }
                o(c, e)
            })(Error),
            function(e) {
                function c() {
                    var a = e.call(this, "This method is not available in the current platform.") || this;
                    return Object.setPrototypeOf(a, c.prototype), a
                }
                o(c, e)
            }(Error);
            (function(e) {
                e["UNKNOWN"] = "UNKNOWN", e["CUSTOM"] = "CUSTOM", e["LIFETIME"] = "LIFETIME", e["ANNUAL"] = "ANNUAL", e["SIX_MONTH"] = "SIX_MONTH", e["THREE_MONTH"] = "THREE_MONTH", e["TWO_MONTH"] = "TWO_MONTH", e["MONTHLY"] = "MONTHLY", e["WEEKLY"] = "WEEKLY"
            })(n || (n = {})),
            function(e) {
                e[e["INTRO_ELIGIBILITY_STATUS_UNKNOWN"] = 0] = "INTRO_ELIGIBILITY_STATUS_UNKNOWN", e[e["INTRO_ELIGIBILITY_STATUS_INELIGIBLE"] = 1] = "INTRO_ELIGIBILITY_STATUS_INELIGIBLE", e[e["INTRO_ELIGIBILITY_STATUS_ELIGIBLE"] = 2] = "INTRO_ELIGIBILITY_STATUS_ELIGIBLE", e[e["INTRO_ELIGIBILITY_STATUS_NO_INTRO_OFFER_EXISTS"] = 3] = "INTRO_ELIGIBILITY_STATUS_NO_INTRO_OFFER_EXISTS"
            }(s || (s = {})),
            function(e) {
                e["NON_SUBSCRIPTION"] = "NON_SUBSCRIPTION", e["SUBSCRIPTION"] = "SUBSCRIPTION", e["UNKNOWN"] = "UNKNOWN"
            }(t || (t = {})),
            function(e) {
                e["CONSUMABLE"] = "CONSUMABLE", e["NON_CONSUMABLE"] = "NON_CONSUMABLE", e["NON_RENEWABLE_SUBSCRIPTION"] = "NON_RENEWABLE_SUBSCRIPTION", e["AUTO_RENEWABLE_SUBSCRIPTION"] = "AUTO_RENEWABLE_SUBSCRIPTION", e["PREPAID_SUBSCRIPTION"] = "PREPAID_SUBSCRIPTION", e["UNKNOWN"] = "UNKNOWN"
            }(m || (m = {})),
            function(e) {
                e[e["UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY"] = 0] = "UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY", e[e["IMMEDIATE_WITH_TIME_PRORATION"] = 1] = "IMMEDIATE_WITH_TIME_PRORATION", e[e["IMMEDIATE_AND_CHARGE_PRORATED_PRICE"] = 2] = "IMMEDIATE_AND_CHARGE_PRORATED_PRICE", e[e["IMMEDIATE_WITHOUT_PRORATION"] = 3] = "IMMEDIATE_WITHOUT_PRORATION", e[e["DEFERRED"] = 6] = "DEFERRED", e[e["IMMEDIATE_AND_CHARGE_FULL_PRICE"] = 5] = "IMMEDIATE_AND_CHARGE_FULL_PRICE"
            }(i || (i = {})),
            function(e) {
                e[e["INFINITE_RECURRING"] = 1] = "INFINITE_RECURRING", e[e["FINITE_RECURRING"] = 2] = "FINITE_RECURRING", e[e["NON_RECURRING"] = 3] = "NON_RECURRING"
            }(d || (d = {})),
            function(e) {
                e["FREE_TRIAL"] = "FREE_TRIAL", e["SINGLE_PAYMENT"] = "SINGLE_PAYMENT", e["DISCOUNTED_RECURRING_PAYMENT"] = "DISCOUNTED_RECURRING_PAYMENT"
            }(l || (l = {})),
            function(e) {
                e["DAY"] = "DAY", e["WEEK"] = "WEEK", e["MONTH"] = "MONTH", e["YEAR"] = "YEAR", e["UNKNOWN"] = "UNKNOWN"
            }(b || (b = {})),
            function(e) {
                e["INAPP"] = "inapp", e["SUBS"] = "subs"
            }(u || (u = {})),
            function(e) {
                e[e["SUBSCRIPTIONS"] = 0] = "SUBSCRIPTIONS", e[e["SUBSCRIPTIONS_UPDATE"] = 1] = "SUBSCRIPTIONS_UPDATE", e[e["IN_APP_ITEMS_ON_VR"] = 2] = "IN_APP_ITEMS_ON_VR", e[e["SUBSCRIPTIONS_ON_VR"] = 3] = "SUBSCRIPTIONS_ON_VR", e[e["PRICE_CHANGE_CONFIRMATION"] = 4] = "PRICE_CHANGE_CONFIRMATION"
            }(g || (g = {})),
            function(e) {
                e[e["SUCCESS"] = 0] = "SUCCESS", e[e["USER_CANCELLED"] = 1] = "USER_CANCELLED", e[e["ERROR"] = 2] = "ERROR"
            }(p || (p = {})),
            function(e) {
                e["VERBOSE"] = "VERBOSE", e["DEBUG"] = "DEBUG", e["INFO"] = "INFO", e["WARN"] = "WARN", e["ERROR"] = "ERROR"
            }(h || (h = {})),
            function(e) {
                e[e["BILLING_ISSUE"] = 0] = "BILLING_ISSUE", e[e["PRICE_INCREASE_CONSENT"] = 1] = "PRICE_INCREASE_CONSENT", e[e["GENERIC"] = 2] = "GENERIC", e[e["WIN_BACK_OFFER"] = 3] = "WIN_BACK_OFFER"
            }(f || (f = {})),
            function(e) {
                e["DISABLED"] = "DISABLED", e["INFORMATIONAL"] = "INFORMATIONAL"
            }(y || (y = {})),
            function(e) {
                e["NOT_REQUESTED"] = "NOT_REQUESTED", e["VERIFIED"] = "VERIFIED", e["FAILED"] = "FAILED", e["VERIFIED_ON_DEVICE"] = "VERIFIED_ON_DEVICE"
            }(E || (E = {})),
            function(e) {
                e["NOT_PRESENTED"] = "NOT_PRESENTED", e["ERROR"] = "ERROR", e["CANCELLED"] = "CANCELLED", e["PURCHASED"] = "PURCHASED", e["RESTORED"] = "RESTORED"
            }(R || (R = {})),
            function(e) {
                e["STOREKIT_1"] = "STOREKIT_1", e["STOREKIT_2"] = "STOREKIT_2", e["DEFAULT"] = "DEFAULT"
            }(_ || (_ = {})),
            function(e) {
                e["MY_APP"] = "MY_APP", e["REVENUECAT"] = "REVENUECAT"
            }(I || (I = {})),
            function(e) {
                e["SUCCESS"] = "SUCCESS", e["ERROR"] = "ERROR", e["PURCHASE_BELONGS_TO_OTHER_USER"] = "PURCHASE_BELONGS_TO_OTHER_USER", e["INVALID_TOKEN"] = "INVALID_TOKEN", e["EXPIRED"] = "EXPIRED"
            }(w || (w = {}))
        },
        c170: function(e, c, a) {
            "use strict";
            a.d(c, "b", (function() {
                return r
            })), a.d(c, "a", (function() {
                return o
            })), a.d(c, "c", (function() {
                return n
            }));
            const r = {
                    About: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("about")]).then(a.bind(null, "52fa")),
                    Bin: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("bin")]).then(a.bind(null, "030f")),
                    Bsod: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("bsod")]).then(a.bind(null, "60fe")),
                    Calc: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("calc")]).then(a.bind(null, "e77c")),
                    Camera: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("camera")]).then(a.bind(null, "2164")),
                    Chess: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("chess")]).then(a.bind(null, "fc19")),
                    Chrome: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("chrome")]).then(a.bind(null, "5cc4")),
                    Cmd: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("cmd")]).then(a.bind(null, "b894")),
                    Computer: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer")]).then(a.bind(null, "b47a")),
                    Cpanel: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("firebase-auth"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("cpanel")]).then(a.bind(null, "a259")),
                    GadgetBattery: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-battery")]).then(a.bind(null, "9273")),
                    GadgetCalendar: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-calendar~logon-ubuntu~themestudio~windows"), a.e("g-calendar")]).then(a.bind(null, "4b83")),
                    GadgetClock: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-clock")]).then(a.bind(null, "a62c")),
                    GadgetCurrency: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("localforage"), a.e("g-currency")]).then(a.bind(null, "3723")),
                    GadgetWeather: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("vue-i18n"), a.e("g-weather~mediacenter"), a.e("g-weather")]).then(a.bind(null, "52b4")),
                    Gadgets: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("gadgets")]).then(a.bind(null, "cd42")),
                    Games: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("games")]).then(a.bind(null, "0dfb")),
                    Ie: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("ie")]).then(a.bind(null, "1386")),
                    Installer: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("installer~logon-ubuntu~windows"), a.e("installer")]).then(a.bind(null, "f354")),
                    Magnifier: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("magnifier")]).then(a.bind(null, "7682")),
                    Mediacenter: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("firebase-auth"), a.e("g-weather~mediacenter"), a.e("mediacenter")]).then(a.bind(null, "a4c1")),
                    Minesweeper: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("minesweeper")]).then(a.bind(null, "245c")),
                    Mouse: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("mouse~sound~system"), a.e("mouse")]).then(a.bind(null, "9231")),
                    Notepad: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("notepad~plugin-codemirror~themestudio"), a.e("notepad~themestudio"), a.e("notepad")]).then(a.bind(null, "8859")),
                    OnlineGame: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("onlinegame")]).then(a.bind(null, "9c9f")),
                    Paint: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("paint~themestudio~wordpad"), a.e("paint")]).then(a.bind(null, "e770")),
                    Personalize: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("personalize~plugin-cssvar"), a.e("personalize")]).then(a.bind(null, "7c28")),
                    Photo: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("photo")]).then(a.bind(null, "273a")),
                    Player: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("mime-types"), a.e("player")]).then(a.bind(null, "9b15")),
                    Purbleplace: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("purbleplace")]).then(a.bind(null, "b055")),
                    Recorder: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("recorder")]).then(a.bind(null, "01ef")),
                    Region: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("vue-i18n"), a.e("region")]).then(a.bind(null, "344b")),
                    Run: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("run")]).then(a.bind(null, "dc68")),
                    Screensaver: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("screensaver")]).then(a.bind(null, "06e4")),
                    Shortcut: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("shortcutwiz")]).then(a.bind(null, "a8a1")),
                    Snipping: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("snipping")]).then(a.bind(null, "331a")),
                    Solitaire: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("solitaire")]).then(a.bind(null, "67ef")),
                    Sound: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("mouse~sound~system"), a.e("sound")]).then(a.bind(null, "9ad7")),
                    Sticky: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("stickynotes")]).then(a.bind(null, "eee5")),
                    System: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("mouse~sound~system"), a.e("system")]).then(a.bind(null, "508f")),
                    Taskbar: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("taskbar")]).then(a.bind(null, "1465")),
                    Taskmgr: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("taskmgr")]).then(a.bind(null, "d64a")),
                    Tetris: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("tetris")]).then(a.bind(null, "13bc")),
                    Themestudio: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("firebase-auth"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("g-calendar~logon-ubuntu~themestudio~windows"), a.e("notepad~plugin-codemirror~themestudio"), a.e("logon-ubuntu~themestudio~windows"), a.e("paint~themestudio~wordpad"), a.e("notepad~themestudio"), a.e("startmenu~themestudio"), a.e("themestudio")]).then(a.bind(null, "fd8a")),
                    Webapp: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("webapp")]).then(a.bind(null, "99c7")),
                    Wordpad: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("paint~themestudio~wordpad"), a.e("wordpad")]).then(a.bind(null, "42b0"))
                },
                o = {
                    about: ["winver"],
                    calc: ["calculator"],
                    computer: ["explorer", "documents", "music", "pictures"],
                    cpanel: ["control"],
                    paint: ["mspaint"],
                    player: ["wmplayer"],
                    snipping: ["snippingtool"],
                    sticky: ["notes", "stickynotes"],
                    taskmgr: ["taskmgr"]
                },
                n = ["data", "datetime", "default", "storage", "display", "access", "gadgets", "keyboard", "mouse", "personalize", "power", "programs", "region", "sound", "speech", "sync", "system", "taskbar", "accounts", "defender", "update"],
                s = ["about", "bsod", "calc", "camera", "chrome", "cmd", "games", "ie", "installer", "magnifier", "mediacenter", "notepad", "paint", "player", "recorder", "run", "snipping", "sticky", "themestudio", "wordpad"];
            c["d"] = s
        },
        fb04: function(e, c, a) {
            "use strict";
            a.r(c), a.d(c, "PRODUCT_CATEGORY", (function() {
                return s["a"]
            }));
            var r = a("b79c"),
                o = a("949c"),
                n = a("1547"),
                s = a("ac3c");
            const t = Object(n["d"])("Purchases", {
                web: () => a.e("chunk-7726e247").then(a.bind(null, "e180a")).then(e => new e.PurchasesWeb)
            });
            var m = a("0d26"),
                i = a("01b4"),
                d = a("5b81"),
                l = a("f708"),
                b = a("4360");
            async function u(e) {
                try {
                    let c = await t.restorePurchases();
                    return c && c.customerInfo || (c = await t.getCustomerInfo()), Object.keys(c.customerInfo.entitlements.active).includes(e)
                } catch (c) {
                    return !1
                }
            }
            const g = {
                async init() {
                    try {
                        Object(l["a"])() ? await t.configure({
                            apiKey: d["c"].android
                        }) : await o["b"].launch()
                    } catch (e) {}
                },
                async list() {
                    if (Object(l["a"])()) {
                        const {
                            current: e
                        } = await t.getOfferings();
                        return (null === e || void 0 === e ? void 0 : e.availablePackages.map(e => e.product)) || []
                    }
                    return o["b"].products()
                },
                async get(e) {
                    const c = Object(l["a"])() ? r["a"] : r["b"],
                        a = await this.list();
                    return a.find(a => a.identifier === c[e].toString())
                },
                async purchase(e) {
                    if (Object(l["a"])()) {
                        const a = await this.list(),
                            o = a.find(c => c.identifier === r["a"][e]);
                        if (!o) return;
                        const n = () => r["c"].isRemoveAds(e) ? b["default"].dispatch(i["a"].ShowAds) : b["default"].commit(i["a"].UnlockTheme, e);
                        try {
                            return await t.purchaseStoreProduct({
                                product: o
                            }), n()
                        } catch (c) {
                            if ("ProductAlreadyOwned" === c.code) return n()
                        }
                    } else try {
                        await o["b"].checkout(r["c"].getWebPurchase()[e])
                    } catch (c) {}
                },
                async hasActivePurchase(e) {
                    if (m["default"].get("subscribed")) return !0;
                    try {
                        if (Object(l["a"])()) {
                            const c = e;
                            return u(c)
                        } {
                            const c = e;
                            return o["b"].verify(c)
                        }
                    } catch (c) {
                        return !1
                    }
                },
                getLifetimeId() {
                    return (Object(l["a"])() ? r["a"] : r["b"]).lifetime.toString()
                }
            };
            c["default"] = g
        }
    }
]);