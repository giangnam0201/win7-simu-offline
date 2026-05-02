(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["purbleplace"], {
        "0829": function(t, e, s) {
            t.exports = s.p + "media/purblepair-win.6948207c.mp3"
        },
        "15f0": function(t, e, s) {},
        2009: function(t, e, s) {},
        3780: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-message", {
                        attrs: {
                            type: "error"
                        },
                        on: {
                            close: t.close
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [s("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.close(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("ok")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._t("default")], 2)
                },
                i = [],
                r = s("bbbd"),
                l = s("fceb"),
                n = {
                    mounted() {
                        this[r["b"].ProgramEvent](r["c"].Windows.Asterisk)
                    },
                    methods: { ...r["e"].mapActions([r["b"].ProgramEvent]),
                        close() {
                            this.$emit("close")
                        }
                    },
                    components: {
                        BaseMessage: l["a"]
                    }
                },
                o = n,
                c = s("2877"),
                u = Object(c["a"])(o, a, i, !1, null, null, null);
            e["a"] = u.exports
        },
        "46b8": function(t, e, s) {
            "use strict";
            s("cf987")
        },
        5243: function(t, e, s) {
            "use strict";
            s("2009")
        },
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
                r = {
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
                l = r,
                n = (s("6dd9"), s("2877")),
                o = Object(n["a"])(l, a, i, !1, null, null, null);
            e["a"] = o.exports
        },
        "67ac": function(t, e, s) {
            "use strict";
            s("15f0")
        },
        "6dd9": function(t, e, s) {
            "use strict";
            s("e68e")
        },
        7073: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        class: ["p-3 window__footer", {
                            "flex justify-end": "action" === t.variant
                        }]
                    }, [t._t("default")], 2)
                },
                i = [],
                r = {
                    props: {
                        variant: String
                    }
                },
                l = r,
                n = s("2877"),
                o = Object(n["a"])(l, a, i, !1, null, null, null);
            e["a"] = o.exports
        },
        "7fd8": function(t, e, s) {
            "use strict";
            s("f6a3")
        },
        "8c16": function(t, e, s) {
            t.exports = s.p + "media/purblepair-correct.ec32ada6.mp3"
        },
        a146: function(t, e, s) {
            "use strict";
            s.d(e, "d", (function() {
                return i
            })), s.d(e, "c", (function() {
                return r
            })), s.d(e, "a", (function() {
                return l
            })), s.d(e, "b", (function() {
                return n
            }));
            var a = s("0f35");

            function i(t, e) {
                const s = 60;
                return t >= s ? `${Object(a["k"])(Number((t/s).toFixed()))}:${Object(a["k"])(t%s)}` : e ? "00:" + Object(a["k"])(t) : t + " seconds"
            }

            function r(t) {
                return new Date(t).toLocaleDateString("en-US")
            }
            const l = {
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
        b055: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "fragment game-container"
                    }, [s("window-main", {
                        staticClass: "is-purbleplace",
                        attrs: {
                            id: "window-" + t.id,
                            fullscreen: "",
                            lock: !!t.result || !!t.stats || !!t.error
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: "Purble Place"
                        }
                    }, [s("window-controls", {
                        attrs: {
                            disableMaximize: "",
                            close: t.exit
                        }
                    })], 1), s("window-menubar", {
                        attrs: {
                            items: t.game ? t.gameToolbar : t.mainToolbar
                        }
                    }), s("window-body", [t.game ? t._e() : s("main-menu", {
                        on: {
                            select: t.select
                        }
                    }), t.game === t.Game.PurblePair ? s("purble-pair", {
                        key: t.compKey,
                        attrs: {
                            level: t.level,
                            stats: t.gameStats[t.game]
                        },
                        on: {
                            result: t.showResult
                        }
                    }) : t._e(), t.game === t.Game.ComfyCakes ? s("comfy-cakes", {
                        key: t.compKey,
                        attrs: {
                            level: t.level,
                            stats: t.gameStats[t.game]
                        },
                        on: {
                            result: t.showResult
                        }
                    }) : t._e(), t.game === t.Game.PurbleShop ? s("purble-shop", {
                        key: t.compKey,
                        attrs: {
                            level: t.level,
                            stats: t.gameStats[t.game]
                        },
                        on: {
                            result: t.showResult
                        }
                    }) : t._e()], 1)], 1), t.result ? s("window-main-static", {
                        attrs: {
                            parent: t.id
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.$t(t.result.won ? "games-won" : "games-lost")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: ""
                        }
                    })], 1), s("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [t.result.won ? [s("div", {
                        staticClass: "mb-2 text-center rank"
                    }, [s("b", [t._v(t._s(t.$t("game-congrats")))]), s("div", t._l(t.result.rank, (function(e) {
                        return s("img", {
                            key: e,
                            attrs: {
                                src: t.icon.rank,
                                width: "55"
                            }
                        })
                    })), 0), s("b", [t._v(t._s(t.$t("rank")) + ": " + t._s(t.result.title))])])] : s("div", {
                        staticClass: "mt-4 mb-5"
                    }, [t._v(t._s(t.$t("game-sorry")))]), s("winui-fieldset", {
                        staticClass: "mb-2"
                    }, [s("legend", [t._v(t._s(t.$t("highscores")))]), s("div", [t._v(" " + t._s(t.result.time ? t.$t("time") + ": " + t.convertTime(t.result.time) : t.$t("score") + ": " + t.result.score) + " ")]), s("div", [t._v(" " + t._s(t.result.count ? t.$t("tiles-turned") + ": " + t.result.count : t.$t("guesses") + ": " + t.result.guesses) + " ")])]), s("div", {
                        staticClass: "text-center"
                    }, [s("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return t.choose(0)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("play-again")) + " ")]), s("winui-button", {
                        on: {
                            click: function(e) {
                                return t.choose(1)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("main-menu")) + " ")])], 1)], 2)], 1) : t._e(), t.stats ? s("window-main-static", {
                        attrs: {
                            parent: t.id
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: "Purble Place " + t.$t("statistics")
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
                    }, [s("div", {
                        staticClass: "flex flex-row gap-3 mb-4"
                    }, [s("winui-listbox", {
                        staticClass: "shrink-0",
                        attrs: {
                            items: t.statLevels
                        },
                        on: {
                            change: t.showStats
                        }
                    }), s("winui-fieldset", {
                        staticClass: "py-0 w-52 h-36 overflow-auto"
                    }, [s("legend", [t._v(t._s(t.$t("highscores")))]), t.statData && t.statData.scores && t.statData.scores.length ? s("table", [t.statData.game === t.Game.PurblePair ? s("tr", [s("td", [t._v(t._s(t.$t("time")))]), s("td", [t._v(t._s(t.$t("tiles-turned")))]), s("td", [t._v(t._s(t.$t("date")))])]) : s("tr", [s("td", [t._v(t._s(t.$t("score")))]), s("td", [t._v(t._s(t.$t("guesses")))]), s("td", [t._v(t._s(t.$t("date")))])]), t._l(t.statData.scores, (function(e, a) {
                        return s("tr", {
                            key: a
                        }, [s("td", [t._v(" " + t._s(t.statData.scores[a].time ? t.convertTime(t.statData.scores[a].time, !0) : t.statData.scores[a].score) + " ")]), s("td", [t._v(" " + t._s(t.statData.scores[a].count || t.statData.scores[a].guesses) + " ")]), s("td", [t._v(t._s(t.convertDate(t.statData.scores[a].date)))])])
                    }))], 2) : t._e()]), s("div", {
                        staticClass: "w-44"
                    }, [s("div", {
                        staticClass: "mb-2"
                    }, [t._v(t._s(t.$t("games-played")) + ": " + t._s(t.statData ? t.statData.total : 0))]), s("div", {
                        staticClass: "mb-2"
                    }, [t._v(" " + t._s(t.$t("games-completed")) + ": " + t._s(t.statData ? t.statData.completed : 0) + " ")]), s("div", [t._v(t._s(t.$t("completion-rate")) + ": " + t._s(t.completionRate) + "%")])])], 1), s("div", {
                        staticClass: "text-center"
                    }, [s("winui-button", {
                        staticClass: "default",
                        on: {
                            click: t.toggleStats
                        }
                    }, [t._v(" " + t._s(t.$t("close")) + " ")]), s("winui-button", {
                        on: {
                            click: t.toggleConfirm
                        }
                    }, [t._v(" " + t._s(t.$t("reset")) + " ")])], 1)])], 1) : t._e(), t.confirm ? s("confirm-reset", {
                        attrs: {
                            close: t.toggleConfirm
                        },
                        on: {
                            reset: t.reset
                        }
                    }) : t._e(), t.error ? s("message-error", {
                        on: {
                            close: function(e) {
                                t.error = null
                            }
                        }
                    }, [t._v(t._s(t.error))]) : t._e(), s("sponsor-ads", {
                        attrs: {
                            type: "interstitial"
                        }
                    })], 1)
                },
                i = [],
                r = s("a146"),
                l = s("2f62"),
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("iframe", {
                        attrs: {
                            src: t.url,
                            allow: "autoplay",
                            frameborder: "0"
                        }
                    })
                },
                o = [],
                c = s("e0b8"),
                u = {
                    props: {
                        level: Number,
                        stats: c["a"]
                    },
                    data() {
                        return {
                            url: "https://khang-nd.github.io/Comfy-Cakes"
                        }
                    },
                    mounted() {
                        window.addEventListener("message", this.onMessage)
                    },
                    beforeDestroy() {
                        window.removeEventListener("message", this.onMessage)
                    },
                    methods: {
                        onMessage({
                            data: t
                        }) {
                            if ("loadDone" === t) {
                                const t = this.$el;
                                return t.contentWindow.postMessage(this.level + 1, "*"), void this.stats.init(this.level)
                            }
                            const {
                                FailCount: e,
                                Result: s
                            } = t;
                            if (!e || !s) return;
                            const a = "win" === s,
                                i = a ? e + 5 : e,
                                l = a ? 1e3 * (4 - e) : 0,
                                n = (t, e) => e.score - t.score;
                            let o, c;
                            l >= 3e3 ? (c = 5, o = r["b"].Master) : l <= 1e3 ? (c = 3, o = r["b"].Detective) : (c = 4, o = r["b"].Champ), a && (this.stats.win(), this.stats.saveScore({
                                score: l,
                                guesses: i,
                                date: Date.now()
                            }, n)), this.$emit("result", {
                                score: l,
                                guesses: i,
                                won: a,
                                title: o,
                                rank: c
                            })
                        }
                    }
                },
                d = u,
                h = s("2877"),
                m = Object(h["a"])(d, n, o, !1, null, null, null),
                p = m.exports,
                b = s("a995"),
                f = s("6792"),
                v = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "relative m-auto purble__menu"
                    }, [s("img", {
                        attrs: {
                            id: "bg",
                            src: t.bg
                        }
                    }), s("img", {
                        staticClass: "top-0 left-0 cursor-auto",
                        attrs: {
                            src: t.mask
                        }
                    }), s("div", {
                        attrs: {
                            id: t.Game.PurblePair
                        },
                        on: {
                            mouseover: t.highlight,
                            mouseout: t.dehighlight,
                            click: t.select
                        }
                    }), s("div", {
                        attrs: {
                            id: t.Game.ComfyCakes
                        },
                        on: {
                            mouseover: t.highlight,
                            mouseout: t.dehighlight,
                            click: t.select
                        }
                    }), s("div", {
                        attrs: {
                            id: t.Game.PurbleShop
                        },
                        on: {
                            mouseover: t.highlight,
                            mouseout: t.dehighlight,
                            click: t.select
                        }
                    }), s("div", {
                        attrs: {
                            id: "purbleplace-exit"
                        },
                        on: {
                            mouseover: t.highlight,
                            mouseout: t.dehighlight,
                            click: function(e) {
                                return e.stopPropagation(), t.select(e)
                            }
                        }
                    })])
                },
                g = [],
                w = s("0f35"),
                _ = {
                    data() {
                        const {
                            games: t
                        } = this.$store.state.assets.assetStore;
                        return {
                            Game: r["a"],
                            mask: null,
                            bg: Object(w["a"])(t, "purbleplace-main")
                        }
                    },
                    methods: {
                        highlight(t) {
                            const {
                                games: e
                            } = this.$store.state.assets.assetStore;
                            this.mask = Object(w["a"])(e, t.target.id)
                        },
                        dehighlight() {
                            this.mask = null
                        },
                        select({
                            target: t
                        }) {
                            "purbleplace-exit" === t.id ? this.$root.$emit(f["c"].CloseWindow, r["a"].PurblePlace) : this.$emit("select", t.id)
                        }
                    }
                },
                y = _,
                $ = (s("7fd8"), Object(h["a"])(y, v, g, !1, null, null, null)),
                k = $.exports,
                C = s("3780"),
                x = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("section", {
                        directives: [{
                            name: "frag",
                            rawName: "v-frag"
                        }]
                    }, [s("div", {
                        ref: "container",
                        staticClass: "relative w-full h-full flex flex-col purble__pair"
                    }, [s("div", {
                        staticClass: "absolute top-1/2 left-1/2 bg-cover bg-bottom w-3/4 h-full purble__pair-bg",
                        style: {
                            backgroundImage: "url(" + t.img.bg + ")"
                        }
                    }), s("audio", {
                        ref: "bgm",
                        attrs: {
                            src: t.bgm
                        }
                    }), s("audio", {
                        ref: "sfxFlip",
                        attrs: {
                            src: t.sfxFlip
                        }
                    }), s("audio", {
                        ref: "sfxMatch",
                        attrs: {
                            src: t.sfxMatch
                        }
                    }), t._l(t.grid.rows, (function(e, a) {
                        return s("div", {
                            key: a,
                            staticClass: "flex flex-grow justify-center items-center purble__pair-row"
                        }, t._l(t.grid.cols, (function(e, i) {
                            return s("div", {
                                key: i,
                                staticClass: "relative animated zoomIn purble__pair-card-wrapper",
                                style: {
                                    width: t.grid.size + "px",
                                    height: t.grid.size + "px"
                                },
                                on: {
                                    click: function(e) {
                                        var s = e.currentTarget;
                                        return t.flip(s, a, i)
                                    }
                                }
                            }, [s("div", {
                                staticClass: "absolute w-full h-full bg-contain duration-500 z-1 purble__pair-card is-front",
                                style: {
                                    backgroundImage: "url(" + t.img.front + ")"
                                }
                            }), s("div", {
                                staticClass: "absolute w-full h-full bg-contain duration-500 z-0 purble__pair-card is-back",
                                style: {
                                    backgroundImage: "url(" + (-1 === t.game.board[a][i] ? t.img.flipped : t.img.back(t.game.board[a][i])) + ")"
                                }
                            })])
                        })), 0)
                    }))], 2), s("window-statusbar", [s("div", [t._v(t._s(t.$t("time")) + ": " + t._s(t.time))]), s("div", [t._v(t._s(t.$t("tiles-turned")) + ": " + t._s(t.count))])])], 1)
                },
                P = [];

            function D(t) {
                var e, s, a = t.length;
                while (a) s = Math.floor(Math.random() * a--), e = t[a], t[a] = t[s], t[s] = e;
                return t
            }

            function S(t, e) {
                var s, a = t * e / 2,
                    i = [];
                for (s = 0; s < a; s++) i.push(s), i.push(s);
                D(i);
                var r = [];
                for (s = 0; s < t; s++) r.push(i.splice(0, e));
                return r
            }
            const M = {
                SELF: 0,
                MATCH: 1,
                NOMATCH: 2,
                FLIPPED: 3,
                FIRST: 4
            };
            class L {
                constructor(t, e) {
                    this.rows = t, this.cols = e, this.board = S(t, e)
                }
                flip(t, e) {
                    return -1 === this.board[t][e] ? M.FLIPPED : this.prev ? this.prev.x === t && this.prev.y === e ? (this.prev = null, M.SELF) : this.board[this.prev.x][this.prev.y] == this.board[t][e] ? M.MATCH : (this.prev = null, M.NOMATCH) : (this.prev = {
                        x: t,
                        y: e
                    }, M.FIRST)
                }
                render(t, e) {
                    this.board[this.prev.x][this.prev.y] = this.board[t][e] = -1, this.board = this.board.slice(0), this.prev = null
                }
                isWon() {
                    for (var t = 0; t < this.rows; t++)
                        for (var e = 0; e < this.cols; e++)
                            if (-1 !== this.board[t][e]) return !1;
                    return !0
                }
            }
            var j = s("b0e1"),
                E = s.n(j),
                O = s("8c16"),
                T = s.n(O),
                W = s("e5c17"),
                z = s.n(W),
                A = s("0829"),
                F = s.n(A),
                I = s("5843");
            let R;
            var G = {
                    props: {
                        level: Number,
                        stats: c["a"]
                    },
                    data() {
                        let t = {
                            rows: 4,
                            cols: 5,
                            size: 0
                        };
                        const {
                            games: e
                        } = this.$store.state.assets.assetStore;
                        return 1 === this.level && (t = {
                            rows: 5,
                            cols: 6,
                            size: 0
                        }), 2 === this.level && (t = {
                            rows: 6,
                            cols: 9,
                            size: 0
                        }), {
                            img: {
                                bg: e.find(t => t.includes("purblepair-bg")),
                                flipped: e.find(t => t.includes("purblepair-flipped")),
                                front: e.find(t => t.includes("purblepair-default")),
                                back: t => e.find(e => e.includes("purblepair-" + t))
                            },
                            bgm: z.a,
                            sfxFlip: E.a,
                            sfxMatch: T.a,
                            grid: t,
                            game: new L(t.rows, t.cols),
                            interval: null,
                            count: 0,
                            time: 0
                        }
                    },
                    mounted() {
                        const {
                            clientWidth: t,
                            clientHeight: e
                        } = this.$refs.container, {
                            rows: s,
                            cols: a
                        } = this.grid;
                        this.$refs.bgm.play(), this.grid.size = t < e ? t / a : e / s
                    },
                    methods: {
                        flip(t, e, s) {
                            this.interval || (this.stats.init(this.level), this.interval = setInterval(() => this.time++, 1e3));
                            const a = this.$refs.container,
                                i = this.game.flip(e, s);
                            switch (i) {
                                case M.FLIPPED:
                                    return;
                                case M.SELF:
                                    return void t.classList.toggle("is-flipped");
                                case M.NOMATCH:
                                    t.classList.add("is-flipped"), a.style.pointerEvents = "none", setTimeout(() => {
                                        t.classList.remove("is-flipped"), R.classList.remove("is-flipped"), a.style.pointerEvents = ""
                                    }, 800);
                                    break;
                                case M.MATCH:
                                    t.classList.add("is-flipped"), a.style.pointerEvents = "none", setTimeout(() => {
                                        if (this.game.render(e, s), this.$refs.sfxMatch.play(), a.style.pointerEvents = "", this.game.isWon()) {
                                            const {
                                                time: t,
                                                count: e,
                                                grid: s
                                            } = this;
                                            clearInterval(this.interval);
                                            const a = (t, e) => t.time + t.count - (e.time + e.count);
                                            this.stats.saveScore({
                                                time: t,
                                                count: e,
                                                date: Date.now()
                                            }, a), this.bgm = F.a, setTimeout(() => {
                                                let a, i;
                                                const l = s.rows * s.cols,
                                                    n = .8 * l + l / 2,
                                                    o = (t + e) / (n + l);
                                                o <= 2 ? (a = 5, i = r["b"].Master) : o <= 3 ? (a = 4, i = r["b"].Champ) : (a = 3, i = r["b"].Detective), this.$refs.bgm.play(), this.$emit("result", {
                                                    time: t,
                                                    count: e,
                                                    rank: a,
                                                    title: i,
                                                    won: !0
                                                })
                                            }, 1e3)
                                        }
                                    }, 800);
                                    break;
                                default:
                                    t.classList.add("is-flipped"), R = t
                            }
                            this.count++, this.$refs.sfxFlip.play()
                        }
                    },
                    components: {
                        WindowStatusbar: I["a"]
                    }
                },
                N = G,
                H = (s("46b8"), Object(h["a"])(N, x, P, !1, null, null, null)),
                K = H.exports,
                U = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("iframe", {
                        attrs: {
                            src: t.url,
                            allow: "autoplay",
                            frameborder: "0"
                        }
                    })
                },
                B = [],
                J = {
                    props: {
                        level: Number,
                        stats: c["a"]
                    },
                    data() {
                        return {
                            url: "https://khang-nd.github.io/PurbleShop"
                        }
                    },
                    mounted() {
                        const t = this.$el;
                        t.addEventListener("load", this.onLoad), window.addEventListener("message", this.onMessage)
                    },
                    beforeDestroy() {
                        window.removeEventListener("message", this.onMessage)
                    },
                    methods: {
                        onLoad() {
                            this.stats.init(this.level), setTimeout(() => {
                                const t = this.$el;
                                t.contentWindow.postMessage(this.level + 3, "*")
                            }, 1500)
                        },
                        onMessage({
                            origin: t,
                            data: e
                        }) {
                            const {
                                origin: s
                            } = new URL(this.url);
                            if (t !== s) return;
                            const {
                                GameScore: a,
                                Guesses: i,
                                Result: l
                            } = e, n = "win" === l, o = 1 === this.level ? 3 * a : a, c = (t, e) => e.score - t.score;
                            let u, d;
                            o >= 1e3 ? (d = 5, u = r["b"].Master) : o <= 500 ? (d = 3, u = r["b"].Detective) : (d = 4, u = r["b"].Champ), n && this.stats.win(), this.stats.saveScore({
                                score: a,
                                guesses: i,
                                date: Date.now()
                            }, c), this.$emit("result", {
                                score: a,
                                guesses: i,
                                won: n,
                                title: u,
                                rank: d
                            })
                        }
                    }
                },
                q = J,
                Q = Object(h["a"])(q, U, B, !1, null, null, null),
                V = Q.exports,
                X = s("c88e"),
                Y = s("1521"),
                Z = s("e863"),
                tt = s("1d26"),
                et = s("411e"),
                st = s("3cb5"),
                at = s("e314"),
                it = s("51e6"),
                rt = s("ce02"),
                lt = {
                    data() {
                        return {
                            id: "purbleplace",
                            game: "",
                            compKey: 0,
                            level: 0,
                            convertTime: r["d"],
                            convertDate: r["c"],
                            Game: r["a"],
                            result: null,
                            stats: null,
                            error: null,
                            statData: null,
                            statLevel: null,
                            confirm: null
                        }
                    },
                    computed: { ...Object(l["f"])({
                            user: "user",
                            assets: "assets"
                        }),
                        ...Object(l["d"])({
                            themeData: "themeData"
                        }),
                        mainToolbar() {
                            return [{
                                label: this.$t("game"),
                                items: [{
                                    label: this.$t("new-game") + " Comfy Cakes",
                                    click: () => this.select(r["a"].ComfyCakes)
                                }, {
                                    label: this.$t("new-game") + " Purble Shop",
                                    click: () => this.select(r["a"].PurbleShop)
                                }, {
                                    label: this.$t("new-game") + " Purble Pair",
                                    click: () => this.select(r["a"].PurblePair),
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
                                disabled: !0
                            }]
                        },
                        gameToolbar() {
                            return [{
                                label: this.$t("game"),
                                items: [{
                                    label: this.$t("new-game"),
                                    click: () => this.compKey++,
                                    hasDivider: !0
                                }, {
                                    label: this.$t("beginner"),
                                    click: () => this.changeLevel(0)
                                }, {
                                    label: this.$t("intermediate"),
                                    click: () => this.changeLevel(1)
                                }, {
                                    label: this.$t("advanced"),
                                    click: () => this.changeLevel(2),
                                    hasDivider: !0
                                }, {
                                    label: this.$t("main-menu"),
                                    click: () => this.select(null)
                                }, {
                                    label: this.$t("exit"),
                                    click: this.exit
                                }]
                            }, {
                                label: this.$t("help"),
                                disabled: !0
                            }]
                        },
                        icon() {
                            return {
                                game: this.themeData.icon.purbleplace,
                                rank: Object(w["a"])(this.assets.assetStore.games, "purblepair-clown")
                            }
                        },
                        gameStats() {
                            return {
                                purblepair: new c["a"](r["a"].PurblePair, this.user),
                                purbleshop: new c["a"](r["a"].PurbleShop, this.user),
                                comfycakes: new c["a"](r["a"].ComfyCakes, this.user)
                            }
                        },
                        statLevels() {
                            return [{
                                label: "Purble Shop -- " + this.$t("beginner"),
                                value: "purbleshop-0"
                            }, {
                                label: "Purble Shop -- " + this.$t("intermediate"),
                                value: "purbleshop-1"
                            }, {
                                label: "Purble Shop -- " + this.$t("advanced"),
                                value: "purbleshop-2"
                            }, {
                                label: "Comfy Cakes -- " + this.$t("beginner"),
                                value: "comfycakes-0"
                            }, {
                                label: "Comfy Cakes -- " + this.$t("intermediate"),
                                value: "comfycakes-1"
                            }, {
                                label: "Comfy Cakes -- " + this.$t("advanced"),
                                value: "comfycakes-2"
                            }, {
                                label: "Purble Pairs -- " + this.$t("beginner"),
                                value: "purblepair-0"
                            }, {
                                label: "Purble Pairs -- " + this.$t("intermediate"),
                                value: "purblepair-1"
                            }, {
                                label: "Purble Pairs -- " + this.$t("advanced"),
                                value: "purblepair-2"
                            }]
                        },
                        completionRate() {
                            if (!this.statData) return "0";
                            const t = this.statData.total || 1,
                                e = this.statData.completed || 0;
                            return (e / t * 100).toFixed()
                        }
                    },
                    methods: {
                        async select(t) {
                            t !== r["a"].PurbleShop || await Object(it["isOnline"])() ? this.game = t : this.error = this.$t("network-error")
                        },
                        changeLevel(t) {
                            this.level = t, this.compKey++
                        },
                        choose(t) {
                            0 === t && this.compKey++, 1 === t && (this.game = ""), this.result = null
                        },
                        showResult(t) {
                            this.result = t, Object(rt["b"])()
                        },
                        showStats(t) {
                            const [e, s] = t.split("-"), a = this.gameStats[e].getData();
                            this.statData = a ? a[s] : null, this.statData = this.statData || {}, this.statData.game = e, this.statLevel = t
                        },
                        toggleStats() {
                            this.stats = !this.stats
                        },
                        toggleConfirm() {
                            this.confirm = !this.confirm
                        },
                        reset() {
                            Object.values(this.gameStats).forEach(t => t.reset()), this.showStats(this.statLevel), this.toggleConfirm()
                        },
                        exit() {
                            Object(rt["b"])(), this.$root.$emit(f["c"].CloseWindow, "purbleplace")
                        }
                    },
                    components: {
                        WindowMain: tt["a"],
                        WindowBody: Y["a"],
                        WindowMainStatic: et["a"],
                        WindowControls: Z["a"],
                        WindowTitlebar: at["a"],
                        WindowMenubar: st["a"],
                        MainMenu: k,
                        PurblePair: K,
                        ComfyCakes: p,
                        PurbleShop: V,
                        ConfirmReset: b["a"],
                        MessageError: C["a"],
                        SponsorAds: X["a"]
                    }
                },
                nt = lt,
                ot = (s("5243"), Object(h["a"])(nt, a, i, !1, null, null, null));
            e["default"] = ot.exports
        },
        b0e1: function(t, e, s) {
            t.exports = s.p + "media/purblepair-flip.e4032db0.mp3"
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
                r = s("f708"),
                l = s("2f62");
            const n = {
                slidein: 6,
                interstitial: 15,
                vertical: 20
            };
            var o = {
                    props: {
                        type: String
                    },
                    computed: { ...Object(l["f"])({
                            showAds: "showAds"
                        }),
                        adUnit() {
                            return n[this.type] || n.slidein
                        },
                        isPwa: () => Object(r["d"])()
                    }
                },
                c = o,
                u = s("2877"),
                d = Object(u["a"])(c, a, i, !1, null, null, null);
            e["a"] = d.exports
        },
        ce02: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return n
            })), s.d(e, "a", (function() {
                return o
            }));
            var a = s("4360");
            const i = 6e4;
            let r = 0;
            const l = async () => (await s.e("applovin").then(s.bind(null, "f42e"))).default,
                n = async () => {
                    if (!a["default"].state.showAds) return;
                    const t = Date.now();
                    r > 0 && t - r < i || (r = t, (await l()).showInterstitial().catch(() => {}))
                },
                o = async () => {
                    a["default"].state.showAds && (await l()).showRewarded().catch(() => {})
                }
        },
        cf987: function(t, e, s) {},
        e0b8: function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return l
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
            const r = {
                total: 0,
                completed: 0,
                won: 0,
                scores: []
            };
            class l {
                constructor(t, e) {
                    i(this, "user", void 0), i(this, "key", void 0), i(this, "level", void 0), i(this, "data", void 0), this.user = e, this.key = t, this.level = 0, this.data = [], a["default"].local.get("scores-" + t, this.user).then(t => {
                        this.data = t || {
                            0: { ...r
                            },
                            1: { ...r
                            },
                            2: { ...r
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
                        0: { ...r,
                            scores: []
                        },
                        1: { ...r,
                            scores: []
                        },
                        2: { ...r,
                            scores: []
                        }
                    }
                }
            }
        },
        e5c17: function(t, e, s) {
            t.exports = s.p + "media/purblepair-new.f7079c70.mp3"
        },
        e68e: function(t, e, s) {},
        f6a3: function(t, e, s) {},
        fceb: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("window-main-static", {
                        attrs: {
                            parent: t.parent,
                            variant: "message"
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.title
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: t.theme,
                            close: function() {
                                return t.$emit("close")
                            }
                        }
                    })], 1), s("window-body", {
                        class: t.containerClass,
                        attrs: {
                            layout: "message"
                        }
                    }, [t.icon ? s("div", {
                        staticClass: "flex"
                    }, [s("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    }), t.noPreTag ? t._t("default") : s("pre", {
                        staticClass: "p-2 font-[inherit] whitespace-pre-wrap"
                    }, [t._t("default")], 2)], 2) : [t._t("default")]], 2), s("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [t._t("footer")], 2)], 1)
                },
                i = [],
                r = s("58cd"),
                l = s("1521"),
                n = s("e863"),
                o = s("7073"),
                c = s("411e"),
                u = s("e314"),
                d = s("2f62"),
                h = {
                    props: {
                        type: {
                            type: String,
                            validator: t => ["warning", "error"].includes(t)
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
                            const t = this.theme ? this.themeAssets[this.theme] : this.themeData;
                            return t.icon[this.type]
                        }
                    },
                    components: {
                        BaseIcon: r["a"],
                        WindowBody: l["a"],
                        WindowFooter: o["a"],
                        WindowMainStatic: c["a"],
                        WindowControls: n["a"],
                        WindowTitlebar: u["a"]
                    }
                },
                m = h,
                p = (s("67ac"), s("2877")),
                b = Object(p["a"])(m, a, i, !1, null, null, null);
            e["a"] = b.exports
        }
    }
]);