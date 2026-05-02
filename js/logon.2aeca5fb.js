(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["logon"], {
        d78a: function(o, n, e) {
            "use strict";
            e.r(n);
            var l = function() {
                    var o = this,
                        n = o.$createElement,
                        e = o._self._c || n;
                    return e(o.currentComponent, {
                        tag: "component"
                    })
                },
                g = [],
                a = e("bbbd"),
                u = e("e47c"),
                i = e("968c"),
                t = e("2f62");
            const s = {
                _default: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-base")]).then(e.bind(null, "eb37")),
                win31: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win2k~logon-win31~logon-win9x"), e.e("logon-win31")]).then(e.bind(null, "3e67")),
                "win95|win98": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win2k~logon-win31~logon-win9x"), e.e("logon-win9x")]).then(e.bind(null, "a19a")),
                win2k: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win2k~logon-win31~logon-win9x"), e.e("logon-win2k")]).then(e.bind(null, "5afd")),
                "^winxp": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-winxp")]).then(e.bind(null, "bbb3")),
                "win7|^aero|winvista": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-base"), e.e("logon-win7")]).then(e.bind(null, "8ba0d")),
                "win8|win81": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win8")]).then(e.bind(null, "21c6")),
                win10: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win10")]).then(e.bind(null, "6f7e")),
                "^win11": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-win11")]).then(e.bind(null, "6511")),
                macos: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-macos")]).then(e.bind(null, "ff91")),
                chromeos: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-chromeos")]).then(e.bind(null, "5af3")),
                kubuntu: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-kubuntu")]).then(e.bind(null, "17bf")),
                "^ubuntu": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("g-calendar~logon-ubuntu~themestudio~windows"), e.e("installer~logon-ubuntu~windows"), e.e("logon-ubuntu~themestudio~windows"), e.e("logon-ubuntu~windows"), e.e("logon-ubuntu")]).then(e.bind(null, "94a5")),
                "^winL": () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-winl")]).then(e.bind(null, "c17d")),
                aeroNoir: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-aeronoir")]).then(e.bind(null, "089e")),
                winW: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-winw")]).then(e.bind(null, "994d")),
                oxygen: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-oxygen")]).then(e.bind(null, "fc4f")),
                onebit: () => Promise.all([e.e("firebase-auth"), e.e("logon-aeronoir~logon-base~logon-chromeos~logon-kubuntu~logon-macos~logon-onebit~logon-oxygen~logon-u~af292554"), e.e("logon-base"), e.e("logon-onebit")]).then(e.bind(null, "41fc7"))
            };
            var b = {
                    computed: { ...u["d"].mapState({
                            theme: "bootTheme"
                        }),
                        currentComponent() {
                            let o = s._default;
                            return Object.keys(s).forEach(n => {
                                const e = new RegExp(n);
                                e.test(this.theme) && (o = s[n])
                            }), o
                        }
                    },
                    async beforeMount() {
                        this[u["b"].LoadTheme](this.theme);
                        const o = await i["default"].local.get("configs"),
                            n = void 0 === (null === o || void 0 === o ? void 0 : o.playStartupSound) || o.playStartupSound;
                        this[a["b"].SetPlayStartupSound](n), this[a["b"].ProgramEvent](a["c"].Windows.Startup)
                    },
                    methods: { ...Object(t["e"])(a["d"], [a["b"].SetPlayStartupSound]),
                        ...a["e"].mapActions([a["b"].ProgramEvent]),
                        ...u["d"].mapActions([u["b"].LoadTheme])
                    }
                },
                r = b,
                m = e("2877"),
                h = Object(m["a"])(r, l, g, !1, null, null, null);
            n["default"] = h.exports
        }
    }
]);