(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["solitaire"], {
        5843: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "relative flex justify-evenly bg-black/5 overflow-hidden text-black/60 text-base shrink-0 window__statusbar",
                        attrs: {
                            "data-test-status-bar": ""
                        }
                    }, [t._t("default")], 2)
                },
                i = [],
                o = {
                    mounted() {
                        this.addClass()
                    },
                    updated() {
                        this.addClass()
                    },
                    methods: {
                        addClass() {
                            try {
                                this.$slots.default.forEach(t => {
                                    const e = t.elm;
                                    e.classList.contains("window__statusbar-item") || e.classList.add("window__statusbar-item")
                                })
                            } catch (t) {
                                console.warn("Status bar rendering error: ", t)
                            }
                        }
                    }
                },
                r = o,
                n = (s("6dd9"), s("2877")),
                l = Object(n["a"])(r, a, i, !1, null, null, null);
            e["a"] = l.exports
        },
        "67ef": function(t, e, s) {
            "use strict";
            s.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "fragment game-container"
                    }, [s("window-main", {
                        attrs: {
                            id: "window-" + t.id,
                            w: 600,
                            h: 450,
                            resizable: !1,
                            lock: t.showHelp || t.showAbout || t.showStats
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: t.$t("solitaire")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            close: t.exit
                        }
                    })], 1), s("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), s("window-body", {
                        attrs: {
                            layout: "panel"
                        }
                    }, [s("iframe", {
                        ref: "iframe",
                        attrs: {
                            src: t.url,
                            allow: "autoplay"
                        }
                    })]), s("window-statusbar", [s("div", [t._v(t._s(t.$t("time")) + ": " + t._s(t.time))]), s("div", [t._v(t._s(t.$t("score")) + ": " + t._s(t.score))])])], 1), t.showHelp ? s("window-main-static", {
                        attrs: {
                            variant: "help",
                            parent: t.id
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.$t("help")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleHelp
                        }
                    })], 1), s("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [s("text-heading", [t._v("How to play")]), s("p", [t._v(" The rules are available for multiple languages on "), s("a", {
                        attrs: {
                            href: "https://en.wikipedia.org/wiki/Klondike_(solitaire)",
                            target: "_blank"
                        }
                    }, [t._v("Wikipedia")]), t._v(". ")]), s("text-heading", [t._v("Controls")]), s("ul", [s("li", [t._v("Move a card by dragging it to a designated target, or")]), s("li", [t._v("Click on the card to get it moved automatically to an available target.")])])], 1)], 1) : t._e(), t.showAbout ? s("window-main-static", {
                        attrs: {
                            variant: "help",
                            parent: t.id
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.$t("about")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleAbout
                        }
                    })], 1), s("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [s("p", [t._v("The original Windows Solitaire game is developed by Oberon Games and Microsoft Corporation.")]), s("p", [t._v(" This Solitaire game is created by "), s("a", {
                        attrs: {
                            href: "https://github.com/rjanjic",
                            target: "_blank"
                        }
                    }, [t._v("Radovan Janjic")]), t._v(" and licensed MIT. ")])])], 1) : t._e(), t.showStats ? s("window-main-static", {
                        attrs: {
                            variant: "help",
                            parent: t.id
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.$t("statistics")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleStats
                        }
                    })], 1), s("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [s("winui-fieldset", {
                        staticClass: "mb-5"
                    }, [s("legend", [t._v(t._s(t.$t("highscores")))]), t.statData && t.statData.scores ? s("table", [s("tr", [s("th", [t._v(t._s(t.$t("time")))]), s("th", [t._v(t._s(t.$t("score")))])]), t._l(t.statData.scores, (function(e, a) {
                        return s("tr", {
                            key: a
                        }, [s("td", [t._v(t._s(t.convertTime(e.time)))]), s("td", [t._v(t._s(e.score))])])
                    }))], 2) : t._e()]), s("div", {
                        staticClass: "mb-5"
                    }, [t.statData ? [s("div", [t._v(t._s(t.$t("games-played")) + ": " + t._s(t.statData.total))]), s("div", [t._v(t._s(t.$t("games-won")) + ": " + t._s(t.statData.won))]), s("div", [t._v(t._s(t.$t("win-percentage")) + ": " + t._s((t.statData.won / (t.statData.total || 1) * 100).toFixed()) + "%")])] : [s("div", [t._v(t._s(t.$t("games-played")) + ": 0")]), s("div", [t._v(t._s(t.$t("games-won")) + ": 0")]), s("div", [t._v(t._s(t.$t("win-percentage")) + ": 0%")])]], 2), s("div", {
                        staticClass: "text-center"
                    }, [s("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleStats(e)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("close")) + " ")]), s("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleConfirm(e)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("reset")) + " ")])], 1)], 1)], 1) : t._e(), t.confirm ? s("confirm-reset", {
                        attrs: {
                            close: t.toggleConfirm
                        },
                        on: {
                            reset: t.reset
                        }
                    }) : t._e(), s("sponsor-ads", {
                        attrs: {
                            type: "interstitial"
                        }
                    })], 1)
                },
                i = [],
                o = s("a995"),
                r = s("6792"),
                n = s("e0b8"),
                l = s("c88e"),
                c = s("f9c9"),
                d = s("1521"),
                h = s("e863"),
                u = s("1d26"),
                w = s("411e"),
                m = s("3cb5"),
                g = s("5843"),
                v = s("e314"),
                b = s("a146"),
                p = s("ce02"),
                f = {
                    data() {
                        const {
                            user: t
                        } = this.$store.state;
                        return {
                            id: "solitaire",
                            url: "./solitaire/index.html",
                            score: 0,
                            time: 0,
                            timer: null,
                            gameStats: new n["a"]("solitaire", t),
                            gameWon: !1,
                            statData: null,
                            showHelp: !1,
                            showAbout: !1,
                            showStats: !1,
                            confirm: !1,
                            convertTime: b["d"]
                        }
                    },
                    computed: {
                        toolbar() {
                            return [{
                                label: this.$t("game"),
                                items: [{
                                    label: this.$t("new-game"),
                                    click: this.newGame,
                                    hasDivider: !0
                                }, {
                                    label: this.$t("statistics"),
                                    click: this.toggleStats
                                }, {
                                    label: this.$t("exit"),
                                    click: this.exit
                                }]
                            }, {
                                label: this.$t("help"),
                                items: [{
                                    label: `${this.$t("view")} ${this.$t("help")}`,
                                    click: this.toggleHelp
                                }, {
                                    label: this.$t("about"),
                                    click: this.toggleAbout
                                }]
                            }]
                        }
                    },
                    mounted() {
                        window.addEventListener("message", this.onMessage)
                    },
                    beforeDestroy() {
                        window.removeEventListener("message", this.onMessage)
                    },
                    watch: {
                        time(t) {
                            t && t % 10 === 0 && (this.score -= 2), this.score < 0 && (this.score = 0)
                        }
                    },
                    methods: {
                        onMessage({
                            data: t
                        }) {
                            const {
                                game: e,
                                GameState: s,
                                state: a
                            } = t, {
                                time: i,
                                score: o
                            } = this, r = (t, e) => e.score - t.score;
                            if ("js-solitaire" === e) switch (a) {
                                case s.Start:
                                    this.gameStats.init(0), this.startTimer();
                                    break;
                                case s.Finish:
                                    this.gameWon = !0, this.gameStats.win(), this.gameStats.saveScore({
                                        time: i,
                                        score: o
                                    }, r), this.toggleStats(), Object(p["b"])();
                                    break;
                                case s.FlipDesk:
                                case s.DrawDeal:
                                    this.score += 5;
                                    break;
                                case s.DrawHome:
                                    this.score -= 10;
                                    break;
                                case s.MoveHome:
                                    this.score += 10;
                                    break
                            }
                        },
                        newGame() {
                            clearInterval(this.timer), this.timer = null, this.time = 0, this.score = 0, this.$refs.iframe.contentWindow.postMessage("reset", "*")
                        },
                        startTimer() {
                            this.timer = setInterval(() => this.time++, 1e3)
                        },
                        toggleHelp() {
                            this.showHelp = !this.showHelp
                        },
                        toggleAbout() {
                            this.showAbout = !this.showAbout
                        },
                        toggleStats() {
                            this.showStats = !this.showStats, this.showStats && (this.statData = this.gameStats.getData()[0]), this.gameWon && (this.gameWon = !1, this.newGame())
                        },
                        toggleConfirm() {
                            this.confirm = !this.confirm
                        },
                        reset() {
                            const {
                                gameStats: t
                            } = this;
                            t.reset(), this.statData = t.getData()[0], this.toggleConfirm()
                        },
                        exit() {
                            Object(p["b"])(), this.$root.$emit(r["c"].CloseWindow, "solitaire")
                        }
                    },
                    components: {
                        WindowMain: u["a"],
                        WindowBody: d["a"],
                        WindowMainStatic: w["a"],
                        WindowTitlebar: v["a"],
                        WindowMenubar: m["a"],
                        WindowControls: h["a"],
                        WindowStatusbar: g["a"],
                        ConfirmReset: o["a"],
                        TextHeading: c["a"],
                        SponsorAds: l["a"]
                    }
                },
                _ = f,
                y = s("2877"),
                $ = Object(y["a"])(_, a, i, !1, null, null, null);
            e["default"] = $.exports
        },
        "6dd9": function(t, e, s) {
            "use strict";
            s("e68e")
        },
        a146: function(t, e, s) {
            "use strict";
            s.d(e, "d", (function() {
                return i
            })), s.d(e, "c", (function() {
                return o
            })), s.d(e, "a", (function() {
                return r
            })), s.d(e, "b", (function() {
                return n
            }));
            var a = s("0f35");

            function i(t, e) {
                const s = 60;
                return t >= s ? `${Object(a["k"])(Number((t/s).toFixed()))}:${Object(a["k"])(t%s)}` : e ? "00:" + Object(a["k"])(t) : t + " seconds"
            }

            function o(t) {
                return new Date(t).toLocaleDateString("en-US")
            }
            const r = {
                    PurblePlace: "purbleplace",
                    PurblePair: "purblepair",
                    PurbleShop: "purbleshop",
                    ComfyCakes: "comfycakes"
                },
                n = {
                    Master: "Purble Master",
                    Champ: "Champion of Logic",
                    Detective: "Senior Detective"
                }
        },
        c88e: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return t.showAds && t.isPwa ? s("div", {
                        attrs: {
                            id: "126352-" + t.adUnit
                        }
                    }, [s("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/gen.js?type=" + t.adUnit
                        }
                    }), s("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/requestform.js?siteId=126352&formatId=" + t.adUnit
                        }
                    })], 1) : t._e()
                },
                i = [],
                o = s("f708"),
                r = s("2f62");
            const n = {
                slidein: 6,
                interstitial: 15,
                vertical: 20
            };
            var l = {
                    props: {
                        type: String
                    },
                    computed: { ...Object(r["f"])({
                            showAds: "showAds"
                        }),
                        adUnit() {
                            return n[this.type] || n.slidein
                        },
                        isPwa: () => Object(o["d"])()
                    }
                },
                c = l,
                d = s("2877"),
                h = Object(d["a"])(c, a, i, !1, null, null, null);
            e["a"] = h.exports
        },
        ce02: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return n
            })), s.d(e, "a", (function() {
                return l
            }));
            var a = s("4360");
            const i = 6e4;
            let o = 0;
            const r = async () => (await s.e("applovin").then(s.bind(null, "f42e"))).default,
                n = async () => {
                    if (!a["default"].state.showAds) return;
                    const t = Date.now();
                    o > 0 && t - o < i || (o = t, (await r()).showInterstitial().catch(() => {}))
                },
                l = async () => {
                    a["default"].state.showAds && (await r()).showRewarded().catch(() => {})
                }
        },
        e0b8: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return r
            }));
            var a = s("968c");

            function i(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t
            }
            const o = {
                total: 0,
                completed: 0,
                won: 0,
                scores: []
            };
            class r {
                constructor(t, e) {
                    i(this, "user", void 0), i(this, "key", void 0), i(this, "level", void 0), i(this, "data", void 0), this.user = e, this.key = t, this.level = 0, this.data = [], a["default"].local.get("scores-" + t, this.user).then(t => {
                        this.data = t || {
                            0: { ...o
                            },
                            1: { ...o
                            },
                            2: { ...o
                            }
                        }
                    })
                }
                getData() {
                    return this.data
                }
                saveData() {
                    a["default"].local.update("scores-" + this.key, this.user, this.data)
                }
                init(t) {
                    this.level = t, this.data[this.level].total++, this.saveData()
                }
                saveScore(t, e = ((t, e) => t.time - e.time)) {
                    const {
                        scores: s
                    } = this.data[this.level];
                    s.push(t), s.sort(e), s.length > 5 && s.pop(), this.complete()
                }
                win() {
                    this.data[this.level].won++, this.saveData()
                }
                complete() {
                    this.data[this.level].completed++, this.saveData()
                }
                reset(t = this.key) {
                    a["default"].local.remove("scores-" + t, this.user), this.data = {
                        0: { ...o,
                            scores: []
                        },
                        1: { ...o,
                            scores: []
                        },
                        2: { ...o,
                            scores: []
                        }
                    }
                }
            }
        },
        e68e: function(t, e, s) {},
        f9c9: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "text-3xl typography is-heading"
                    }, [t._t("default")], 2)
                },
                i = [],
                o = {},
                r = o,
                n = s("2877"),
                l = Object(n["a"])(r, a, i, !1, null, null, null);
            e["a"] = l.exports
        }
    }
]);