(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["minesweeper", "device", "storage"], {
        "01b4": function(t, e, n) {
            "use strict";
            const i = {
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
            e["a"] = i
        },
        "0e9a": function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return s
            })), n.d(e, "f", (function() {
                return r
            })), n.d(e, "g", (function() {
                return o
            })), n.d(e, "j", (function() {
                return a
            })), n.d(e, "n", (function() {
                return c
            })), n.d(e, "m", (function() {
                return u
            })), n.d(e, "o", (function() {
                return d
            })), n.d(e, "e", (function() {
                return l
            })), n.d(e, "i", (function() {
                return T
            })), n.d(e, "d", (function() {
                return f
            })), n.d(e, "k", (function() {
                return _
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "q", (function() {
                return S
            })), n.d(e, "r", (function() {
                return I
            })), n.d(e, "c", (function() {
                return N
            })), n.d(e, "a", (function() {
                return g
            })), n.d(e, "b", (function() {
                return w
            })), n.d(e, "p", (function() {
                return E
            }));
            const i = /data:([^;]*)(;.*)*,(.+)/;

            function s(t) {
                return "string" === typeof t && i.test(t)
            }

            function r(t) {
                try {
                    return t.length > 3 && !(t.length % 4) && atob(t) && !0
                } catch (e) {
                    return !1
                }
            }

            function o(t) {
                return t.startsWith("blob:")
            }

            function a(t) {
                return m(t, /(webp|apng|png|jpg|jpeg|jfif|svg|gif|ico)$/)
            }

            function c(t) {
                return m(t, /(txt|text|readme|md|json|xml|rtf|wpl)$/)
            }

            function u(t) {
                return m(t, /rtf$/)
            }

            function d(t) {
                return m(t, /(webm|mp4|mpg|mpeg|ogm|wmv|avi|mov)$/)
            }

            function l(t) {
                return m(t, /(webm|mp3|ogg|wav|wma|aac|m4a|flac|mid)$/)
            }

            function T(t) {
                return m(t, /(exe|msi|apk)$/)
            }

            function f(t) {
                return m(t, /(zip)$/)
            }

            function _(t) {
                return m(t, /(pdf)$/)
            }

            function h(t) {
                return m(t, /(wpl)$/)
            }

            function S(t) {
                return m(t, /(html|htm)$/)
            }

            function m(t, e) {
                const {
                    ext: n
                } = I(t);
                return !!n && e.test(n.toLowerCase())
            }

            function I(t) {
                const e = N(t),
                    [, n, i] = Array.from(e.match(/(.*)\.(.*)$/) || []);
                return n || i ? {
                    name: decodeURIComponent(n),
                    ext: i
                } : {
                    name: e,
                    ext: null
                }
            }

            function N(t) {
                const e = t.split("/").filter(Boolean),
                    n = e.pop();
                return n ? decodeURIComponent(n) : ""
            }

            function g(t) {
                const e = t.match(i);
                return e ? {
                    mime: e[1],
                    data: e[3]
                } : null
            }

            function w(t, e, n) {
                const i = l(t) ? "audio" : a(t) ? "image" : null;
                let s = "";
                s = o(n) ? n : i ? `data:${i}/${e};base64,${n}` : `data:application/${e},${encodeURIComponent(n)}`;
                const r = document.createElement("a");
                r.download = t, r.href = s, r.click()
            }
            async function E(t) {
                return new Promise(e => {
                    const n = document.createElement("video");
                    n.src = t, n.onloadedmetadata = () => {
                        const t = n.videoWidth > 0 && n.videoHeight > 0;
                        n.remove(), e(t)
                    }
                })
            }
        },
        "0f35": function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return a
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "f", (function() {
                return u
            })), n.d(e, "b", (function() {
                return d
            })), n.d(e, "a", (function() {
                return l
            })), n.d(e, "k", (function() {
                return T
            })), n.d(e, "m", (function() {
                return f
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "h", (function() {
                return h
            })), n.d(e, "c", (function() {
                return S
            })), n.d(e, "p", (function() {
                return m
            })), n.d(e, "o", (function() {
                return I
            })), n.d(e, "q", (function() {
                return N
            })), n.d(e, "n", (function() {
                return g
            })), n.d(e, "j", (function() {
                return w
            })), n.d(e, "g", (function() {
                return E
            })), n.d(e, "i", (function() {
                return p
            }));
            var i = n("e5dd"),
                s = n("0fbc"),
                r = n("4cca"),
                o = n("0e9a");

            function a(t) {
                return /^https?:\/\//.test(t)
            }

            function c(t) {
                return /(img|media)\//.test(t)
            }

            function u(t) {
                return null === t || void 0 === t
            }

            function d(t) {
                return (a(t) ? t : "https://" + t).toLowerCase()
            }

            function l(t, e) {
                return t.find(t => new RegExp(`(img|media)/${e}\\.`, "g").test(t))
            }

            function T(t) {
                return (t < 10 ? "0" : "") + t
            }

            function f(t) {
                return new Promise((e, n) => {
                    const i = new Image;
                    i.onerror = n, i.onload = e, i.src = t
                })
            }

            function _(t) {
                const e = "string" === typeof t,
                    n = e && t.endsWith("mp4") || !e && t.type.includes("video"),
                    i = e ? t : Object(s["b"])(t.src, t.type);
                return {
                    url: i,
                    isAnimated: n
                }
            }

            function h(t) {
                try {
                    const {
                        hostname: e
                    } = new URL(t);
                    return /.+\..+/.test(e)
                } catch (e) {
                    return !1
                }
            }

            function S(t) {
                return t.startsWith("com.") || t.startsWith("org.chromium")
            }

            function m(t, e) {
                return e || (e = t, t = 0), Math.floor(Math.random() * (e - t + 1)) + t
            }

            function I(t = "") {
                return `${t}-${Math.random().toString(36).substring(2,9)}`
            }

            function N(t) {
                return new Promise(e => setTimeout(e, t))
            }
            async function g(t, e) {
                for (const n of t) await e(n)
            }

            function w() {
                i["a"].open({
                    url: "https://youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y"
                })
            }

            function E(t, e) {
                const n = Object(o["c"])(t);
                return Object(r["b"])(n) === e
            }

            function p(t, e, n, i, s) {
                t = Math.min(Math.max(t, e), n);
                const r = (t - e) / (n - e),
                    o = (s - i) * r + i;
                return o
            }
        },
        "0f36": function(t, e, n) {},
        "0fbc": function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return s
            })), n.d(e, "j", (function() {
                return r
            })), n.d(e, "i", (function() {
                return o
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "f", (function() {
                return c
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "a", (function() {
                return d
            })), n.d(e, "g", (function() {
                return l
            })), n.d(e, "h", (function() {
                return T
            })), n.d(e, "c", (function() {
                return f
            }));
            var i = n("0e9a");

            function s(t) {
                return t ? URL.createObjectURL(t) : null
            }

            function r(t) {
                return new Promise((e, n) => {
                    const i = new Image;
                    i.src = t, i.onload = () => e(i), i.onerror = () => n()
                })
            }

            function o(t, e = 0, n = 0) {
                const i = document.createElement("canvas"),
                    s = i.getContext("2d");
                if (!s) throw new Error("Failed to get canvas context");
                let r = e,
                    o = n;
                return r && o || (r = t.width || parseFloat(t.style.width) || parseFloat(getComputedStyle(t).width), o = t.height || parseFloat(t.style.height) || parseFloat(getComputedStyle(t).height)), i.width = r, i.height = o, s.drawImage(t, 0, 0, r, o), i
            }

            function a(t) {
                return new Promise(e => {
                    const n = new FileReader;
                    n.onloadend = () => e(n.result), n.readAsArrayBuffer(t)
                })
            }

            function c(t, e) {
                return new Promise((n, i) => {
                    t.toBlob(t => {
                        if (!t) return i("Failed to create blob from canvas");
                        a(t).then(n)
                    }, e)
                })
            }

            function u(t, e) {
                const n = new Blob([t], {
                    type: e || "application/octet-stream"
                });
                return s(n)
            }

            function d(t) {
                for (var e = "", n = new Uint8Array(t), i = n.byteLength, s = 0; s < i; s++) e += String.fromCharCode(n[s]);
                return window.btoa(e)
            }

            function l(t, e, n) {
                const s = Object(i["a"])(t),
                    r = s ? s.data : t,
                    o = e || 512,
                    a = atob(r),
                    c = [];
                for (let i = 0; i < a.length; i += o) {
                    const t = a.slice(i, i + o),
                        e = new Array(t.length);
                    for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
                    const n = new Uint8Array(e);
                    c.push(n)
                }
                return new Blob(c, {
                    type: n || "image/webp"
                })
            }

            function T(t, e, n) {
                const i = l(t, e, n);
                return s(i)
            }

            function f(t, e = "webp") {
                return `data:image/${e};base64,${t}`
            }
        },
        "15d4": function(t, e, n) {
            var i = {
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

            function s(t) {
                if (!n.o(i, t)) return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }));
                var e = i[t],
                    s = e[0];
                return n.e(e[1]).then((function() {
                    return n(s)
                }))
            }
            s.keys = function() {
                return Object.keys(i)
            }, s.id = "15d4", t.exports = s
        },
        "245c": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "fragment game-container"
                    }, [n("window-main", {
                        attrs: {
                            id: "window-minesweeper",
                            w: 2 === t.level ? 0 : "auto",
                            h: 2 === t.level ? 0 : "auto",
                            lock: t.result < 0 || t.stats,
                            resizable: !1,
                            fullscreen: 2 === t.level
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: "minesweeper",
                            title: t.$t("minesweeper")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            disableMaximize: ""
                        }
                    })], 1), n("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), n("window-body", [n("div", {
                        ref: "grid",
                        staticClass: "flex flex-col h-full minesweeper__grid"
                    }, t._l(t.grid.length, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "flex grow minesweeper__row"
                        }, t._l(t.grid[i], (function(e, i) {
                            return n("div", {
                                key: i,
                                staticClass: "flex justify-center items-center bg-contain bg-center opacity-45 font-bold",
                                class: ["minesweeper__cell", "cell-" + e.numAdjacentMines, {
                                    "is-opened": e.state === t.CellState.OPEN
                                }],
                                style: t.getCellStyle(e),
                                on: {
                                    click: function(n) {
                                        return t.open(e)
                                    }
                                }
                            }, [t._v(" " + t._s(!e.isMine && e.state === t.CellState.OPEN && e.numAdjacentMines > 0 ? e.numAdjacentMines : "") + " ")])
                        })), 0)
                    })), 0), n("div", {
                        staticClass: "flex justify-between items-center minesweeper__stats"
                    }, [n("img", {
                        staticClass: "minesweeper__stats-icon",
                        attrs: {
                            src: t.timer
                        }
                    }), n("div", {
                        staticClass: "minesweeper__stats-number"
                    }, [t._v(t._s(t.count))]), n("div", {
                        staticClass: "minesweeper__stats-number"
                    }, [t._v(t._s(t.options.mines))]), n("img", {
                        staticClass: "minesweeper__stats-icon",
                        attrs: {
                            src: t.mine
                        }
                    })])]), n("audio", {
                        ref: "bgm",
                        attrs: {
                            src: t.bgm
                        }
                    }), n("audio", {
                        ref: "sfx",
                        attrs: {
                            src: t.sfx
                        }
                    })], 1), t.result ? n("window-main", {
                        attrs: {
                            id: "window-minesweeper-result",
                            centered: !0,
                            resizable: !1,
                            w: 280
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: t.$t(t.result > 0 ? "games-won" : "games-lost")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: ""
                        }
                    })], 1), n("window-body", {
                        staticClass: "justify-between text-center",
                        attrs: {
                            layout: "dialog"
                        }
                    }, [t.result > 0 ? n("div", [t._v(t._s(t.$t("game-congrats")))]) : n("div", [t._v(t._s(t.$t("game-sorry")))]), n("div", [t._v(t._s(t.$t("time")) + ": " + t._s(t.count) + " " + t._s(t.$t("seconds")))]), n("div", {
                        staticClass: "text-center"
                    }, [n("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.exitGame(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("exit")))]), n("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.newGame(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("play-again")))])], 1)])], 1) : t._e(), t.stats ? n("window-main-static", {
                        attrs: {
                            id: "window-minesweeper-stats"
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: "Minesweeper " + t.$t("statistics")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleStats
                        }
                    })], 1), n("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [n("winui-listbox", {
                        staticClass: "mb-5",
                        attrs: {
                            items: t.statLevels
                        },
                        on: {
                            change: t.showStats
                        }
                    }), n("div", {
                        staticClass: "mb-5"
                    }, [n("winui-fieldset", [n("legend", [t._v(t._s(t.$t("best-times")))]), t.statData && t.statData.scores ? n("table", t._l(t.statData.scores, (function(e, i) {
                        return n("tr", {
                            key: i
                        }, [n("td", [t._v(t._s(t.convertTime(t.statData.scores[i].time, !0)))]), n("td", [t._v(t._s(t.convertDate(t.statData.scores[i].date)))])])
                    })), 0) : t._e()])], 1), n("div", {
                        staticClass: "mb-5"
                    }, [t.statData ? [n("div", [t._v(t._s(t.$t("games-played")) + ": " + t._s(t.statData.completed))]), n("div", [t._v(t._s(t.$t("games-won")) + ": " + t._s(t.statData.won))]), n("div", [t._v(t._s(t.$t("win-percentage")) + ": " + t._s((t.statData.won / (t.statData.completed || 1) * 100).toFixed()) + "%")])] : [n("div", [t._v(t._s(t.$t("games-played")) + ": 0")]), n("div", [t._v(t._s(t.$t("games-won")) + ": 0")]), n("div", [t._v(t._s(t.$t("win-percentage")) + ": 0%")])]], 2), n("div", {
                        staticClass: "text-center"
                    }, [n("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleStats(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("close")))]), n("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleConfirm(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("reset")))])], 1)], 1)], 1) : t._e(), t.confirm ? n("confirm-reset", {
                        attrs: {
                            close: t.toggleConfirm
                        },
                        on: {
                            reset: t.reset
                        }
                    }) : t._e()], 1)
                },
                s = [],
                r = n("a146"),
                o = n("a995"),
                a = n("6792"),
                c = n("e0b8"),
                u = n("5b50"),
                d = n.n(u),
                l = n("9538"),
                T = n.n(l),
                f = n("f3b3"),
                _ = n.n(f),
                h = n("1521"),
                S = n("e863"),
                m = n("1d26"),
                I = n("411e"),
                N = n("3cb5"),
                g = n("e314");
            const {
                BoardStateEnum: w,
                CellStateEnum: E,
                CellFlagEnum: p
            } = T.a, O = t => {
                const e = T.a.generateMineArray(t);
                return new T.a.Board(e)
            };
            var A = {
                    data() {
                        const {
                            user: t,
                            assets: e
                        } = this.$store.state, {
                            games: n
                        } = e.assetStore;
                        return {
                            gameStats: new c["a"]("minesweeper", t),
                            mine: n.find(t => t.includes("minesweeper-mine")),
                            cell: n.find(t => t.includes("minesweeper-cell")),
                            timer: n.find(t => t.includes("minesweeper-timer")),
                            CellState: E,
                            CellFlag: p,
                            statLevel: 0,
                            level: 0,
                            size: 21,
                            options: {
                                rows: 8,
                                cols: 9,
                                mines: 10
                            },
                            board: {},
                            grid: [],
                            bgm: _.a,
                            sfx: d.a,
                            count: 0,
                            result: 0,
                            interval: null,
                            stats: null,
                            confirm: null,
                            statData: null,
                            convertTime: r["d"],
                            convertDate: r["c"]
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
                                    label: this.$t("beginner"),
                                    click: () => this.level = 0
                                }, {
                                    label: this.$t("intermediate"),
                                    click: () => this.level = 1
                                }, {
                                    label: this.$t("advanced"),
                                    click: () => this.level = 2,
                                    hasDivider: !0
                                }, {
                                    label: this.$t("statistics"),
                                    click: this.toggleStats
                                }, {
                                    label: this.$t("exit"),
                                    click: this.exitGame
                                }]
                            }, {
                                label: this.$t("help"),
                                disabled: !0
                            }]
                        },
                        statLevels() {
                            return [{
                                label: this.$t("beginner"),
                                value: 0
                            }, {
                                label: this.$t("intermediate"),
                                value: 1
                            }, {
                                label: this.$t("advanced"),
                                value: 2
                            }]
                        }
                    },
                    watch: {
                        async level(t) {
                            await this.$nextTick();
                            const e = this.size + 1;
                            let {
                                scrollWidth: n,
                                scrollHeight: i
                            } = this.$refs.grid;
                            switch (n -= 1, i -= 1, t) {
                                case 0:
                                    this.options = {
                                        rows: 8,
                                        cols: 9,
                                        mines: 10
                                    };
                                    break;
                                case 1:
                                    this.options = {
                                        rows: 12,
                                        cols: 12,
                                        mines: 30
                                    };
                                    break;
                                case 2:
                                    this.options = {
                                        rows: Math.floor(i / e),
                                        cols: Math.floor(n / e),
                                        mines: Math.floor(n / e * (i / e) / 2)
                                    }
                            }
                        },
                        options() {
                            this.newGame()
                        }
                    },
                    mounted() {
                        this.newGame()
                    },
                    methods: {
                        getCellStyle(t) {
                            let e = null;
                            return t.state === E.OPEN && t.isMine && (e = this.mine), t.state === E.CLOSED && (e = this.cell), {
                                backgroundImage: `url(${e})`,
                                width: this.size + "px",
                                height: this.size + "px"
                            }
                        },
                        newGame() {
                            this.board = O(this.options), this.grid = this.board.grid(), this.$refs.bgm.currentTime = 0, this.$refs.bgm.play(), this.count = 0, this.result = 0, clearInterval(this.interval)
                        },
                        exitGame() {
                            this.$root.$emit(a["c"].CloseWindow, "minesweeper")
                        },
                        open(t) {
                            if (this.board.state() === w.PRISTINE && (this.interval = setInterval(() => this.count++, 1e3), this.gameStats.init(this.level), t.isMine)) return this.board = O(this.options), this.board.openCell(t.x, t.y), void(this.grid = this.board.grid());
                            if (this.board.state() === w.WON || this.board.state() === w.LOST) return;
                            this.board.openCell(t.x, t.y), this.grid = this.board.grid();
                            let e = 0;
                            if (t.isMine) this.$refs.sfx.play(), this.grid.forEach(t => t.forEach(t => t.state = t.isMine ? E.OPEN : t.state)), this.gameStats.complete(), e = -1;
                            else {
                                let t = 0;
                                this.grid.forEach(e => e.forEach(e => {
                                    e.state === E.OPEN && t++
                                }));
                                const {
                                    rows: n,
                                    cols: i,
                                    mines: s
                                } = this.options;
                                n * i - s === t && (this.gameStats.win(), this.gameStats.saveScore({
                                    time: this.count,
                                    date: Date.now()
                                }), e = 1)
                            }
                            e && (clearInterval(this.interval), setTimeout(() => this.result = e, 1e3))
                        },
                        showStats(t) {
                            const e = this.gameStats.getData();
                            this.statData = e ? e[t] : null, this.statLevel = t
                        },
                        toggleStats() {
                            this.stats = !this.stats
                        },
                        toggleConfirm() {
                            this.confirm = !this.confirm
                        },
                        reset() {
                            this.gameStats.reset(), this.showStats(this.statLevel), this.toggleConfirm()
                        }
                    },
                    components: {
                        WindowControls: S["a"],
                        WindowTitlebar: g["a"],
                        WindowMenubar: N["a"],
                        WindowMain: m["a"],
                        WindowBody: h["a"],
                        WindowMainStatic: I["a"],
                        ConfirmReset: o["a"]
                    }
                },
                b = A,
                C = (n("c098"), n("2877")),
                v = Object(C["a"])(b, i, s, !1, null, null, null);
            e["default"] = v.exports
        },
        "26a1": function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return s
            })), n.d(e, "a", (function() {
                return r
            })), n.d(e, "e", (function() {
                return o
            })), n.d(e, "f", (function() {
                return a
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "i", (function() {
                return d
            })), n.d(e, "j", (function() {
                return l
            })), n.d(e, "g", (function() {
                return T
            })), n.d(e, "k", (function() {
                return f
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "n", (function() {
                return h
            })), n.d(e, "m", (function() {
                return S
            })), n.d(e, "h", (function() {
                return m
            }));
            const i = "#root",
                s = "#main",
                r = ".desktop__wrapper",
                o = ".taskbar__wrapper",
                a = ".taskbar-popup",
                c = ".startmenu__wrapper",
                u = ".listview__item";

            function d() {
                return document.body.querySelector(i)
            }

            function l() {
                return document.body.querySelector("#stage")
            }

            function T() {
                return document.body.querySelector(s)
            }

            function f() {
                return document.body.querySelector(o)
            }

            function _(t) {
                const e = `[data-target="${t}"]`;
                return document.body.querySelector(e)
            }

            function h({
                flag: t,
                id: e,
                content: n
            }) {
                if (t) {
                    const t = document.createElement("style");
                    t.id = e, t.innerHTML = n, document.body.append(t)
                } else {
                    const t = document.querySelector("#" + e);
                    t && t.remove()
                }
            }

            function S({
                type: t,
                url: e
            }) {
                if (document.querySelector(`link[href="${e}"]`)) return;
                const n = document.createElement("link");
                n.rel = "preload", n.as = t, n.href = e, document.head.appendChild(n)
            }

            function m(t) {
                const e = t.target,
                    {
                        top: n,
                        left: i,
                        width: s,
                        height: r
                    } = e.getBoundingClientRect(),
                    o = (t.clientX - i) / s,
                    a = (t.clientY - n) / r;
                return {
                    x: o,
                    y: a
                }
            }
        },
        "4cca": function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return s
            })), n.d(e, "a", (function() {
                return r
            })), n.d(e, "d", (function() {
                return o
            })), n.d(e, "g", (function() {
                return a
            })), n.d(e, "j", (function() {
                return u
            })), n.d(e, "e", (function() {
                return d
            })), n.d(e, "c", (function() {
                return l
            })), n.d(e, "b", (function() {
                return T
            })), n.d(e, "f", (function() {
                return f
            })), n.d(e, "i", (function() {
                return _
            }));
            var i = n("0e9a");

            function s(t) {
                const e = ["bytes", "KB", "MB", "GB", "TB"];
                if (0 === t) return "0 bytes";
                const n = Math.floor(Math.log(t) / Math.log(1024));
                return 0 === n ? `${t} ${e[n]}` : `${(t/Math.pow(1024,n)).toFixed(1)} ${e[n]}`
            }

            function r(t, e) {
                let n = 1;
                const s = t => {
                    const r = e.find(e => e.lbl === t);
                    if (!r) return t;
                    const {
                        ext: o,
                        name: a
                    } = Object(i["r"])(t), [c] = Array.from(/\s?\(\d+\).*/.exec(t) || []), u = ` (${++n})` + (o ? "." + o : "");
                    let d = t;
                    return d = c ? d.replace(c, u) : a + u, s(d)
                };
                return s(t)
            }

            function o(t, e) {
                return t + ` (${e.toUpperCase()}:)`
            }

            function a(t, e) {
                return ["computer", t, e].filter(Boolean).join("/")
            }
            const c = /(tmpZip)?(\/EXTERNAL\/)?computer\/drive\d+\/?|file:\/\/\/storage\/emulated\/\d+|Android\/data\/com.visnalize.win7simu\/files/g;

            function u(t) {
                return t ? t.replace(c, "") : null
            }

            function d(t, e) {
                return "directory" === e ? "folder" : Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "media" : Object(i["l"])(t) ? "wpl" : Object(i["n"])(t) ? "text" : Object(i["i"])(t) ? "executable" : Object(i["m"])(t) ? "richtext" : Object(i["d"])(t) ? "zip" : Object(i["r"])(t).ext ? "file" : "folder"
            }

            function l(t) {
                return "system" === t ? "disk-os" : "disk-data"
            }

            function T(t) {
                return Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "player" : Object(i["q"])(t) || Object(i["k"])(t) ? "chrome" : Object(i["m"])(t) ? "wordpad" : Object(i["n"])(t) ? "notepad" : Object(i["d"])(t) || !Object(i["r"])(t).ext ? "computer" : "file"
            }

            function f(t) {
                const e = t.split("/");
                return e.pop(), e.join("/")
            }

            function _(t, e) {
                return t.replace(/%APPDATA%/g, e.appDataPath || "").replace(/%USERPROFILE%/g, e.userPath || "").replace(/\\/g, "/")
            }
        },
        "51e6": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Action", (function() {
                return d["a"]
            })), n.d(e, "isTouchDevice", (function() {
                return l
            })), n.d(e, "isOnline", (function() {
                return T
            })), n.d(e, "getBattery", (function() {
                return f
            })), n.d(e, "showToast", (function() {
                return _
            })), n.d(e, "openFile", (function() {
                return h
            })), n.d(e, "getDeviceInfo", (function() {
                return S
            })), n.d(e, "getAndroidVersion", (function() {
                return m
            })), n.d(e, "launchApp", (function() {
                return I
            })), n.d(e, "launchSetting", (function() {
                return N
            })), n.d(e, "restart", (function() {
                return g
            })), n.d(e, "getWeiScore", (function() {
                return w
            })), n.d(e, "getWeiBaseScore", (function() {
                return E
            }));
            var i = n("1547");
            const s = Object(i["d"])("Device", {
                web: () => n.e("chunk-2d0c8407").then(n.bind(null, "53a4")).then(t => new t.DeviceWeb)
            });
            var r = n("a81a");
            const o = Object(i["d"])("Launcher", {
                web: () => n.e("launcher").then(n.bind(null, "d5b0")).then(t => new t.LauncherWeb)
            });
            var a = n("c8ec");
            const c = Object(i["d"])("Toast", {
                web: () => n.e("chunk-2d0a45fe").then(n.bind(null, "05be")).then(t => new t.ToastWeb)
            });
            var u = n("f708"),
                d = n("6792");
            const l = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                T = async () => Object(u["a"])() ? (await a["a"].getStatus()).connected : new Promise(t => {
                    const e = new Image;
                    e.src = "https://picsum.photos/1/1", e.onload = () => t(!0), e.onerror = () => t(!1)
                }),
                f = async () => {
                    try {
                        return await s.getBatteryInfo()
                    } catch (t) {
                        return {
                            batteryLevel: 1,
                            isCharging: !1
                        }
                    }
                },
                _ = async (t, e = "long") => {
                    await c.show({
                        text: "string" === typeof t ? t : null,
                        duration: e
                    });
                    const n = document.querySelector("pwa-toast");
                    n && n.setAttribute("style", "z-index: 9999")
                },
                h = (t = !1, e = "") => new Promise(n => {
                    const i = document.createElement("input");
                    i.type = "file", i.multiple = t, i.accept = e, i.click(), i.onchange = t => {
                        i.remove(), n(t.target)
                    }
                }),
                S = async () => {
                    const t = (await f()).batteryLevel || 1;
                    return { ...await s.getInfo(),
                        ...await r["a"].getInfo(),
                        battery: 100 * t
                    }
                },
                m = async () => {
                    if (!Object(u["a"])()) return null;
                    const {
                        osVersion: t
                    } = await s.getInfo();
                    return parseInt(t)
                },
                I = t => o.launchPackage({
                    packageName: t
                }),
                N = t => o.launchMiscellaneous({
                    target: t
                }),
                g = () => window.location.reload(),
                w = async () => {
                    const t = await r["a"].getInfo(),
                        e = t.cpuCores,
                        n = t.totalMemory / 1024 ** 3,
                        i = document.createElement("canvas"),
                        s = !(!window.WebGL2RenderingContext || !i.getContext("webgl2"));
                    return {
                        cpu: e >= 8 ? 7.9 : e >= 4 ? 7 : e >= 2 ? 5 : 2,
                        ram: n >= 8 ? 7.9 : n >= 4 ? 6 : n >= 2 ? 5 : 3,
                        graphics: s ? 7.9 : 4
                    }
                },
                E = async () => {
                    const t = await w();
                    return Math.min(...Object.values(t))
                }
        },
        "5b50": function(t, e, n) {
            t.exports = n.p + "media/minesweeper-lose.b3b70bbb.mp3"
        },
        6792: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            })), n.d(e, "c", (function() {
                return r
            })), n.d(e, "b", (function() {
                return o
            }));
            var i = n("8229");
            const s = {
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
                r = {
                    ChangePage: "changePage",
                    OpenWindow: "open",
                    CloseWindow: "close",
                    PingWindow: "ping"
                },
                o = {
                    THEME: "aero-1",
                    SIZE_ICONS: "md",
                    SHOW_ICONS: !0,
                    AUTO_ICONS: !1,
                    SHOW_CURSOR: !0,
                    CURSOR_SCHEME: i["c"].Aero,
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
        8229: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "d", (function() {
                return r
            })), n.d(e, "b", (function() {
                return o
            })), n.d(e, "e", (function() {
                return a
            })), n.d(e, "f", (function() {
                return c
            }));
            const i = {
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
                s = {
                    Aero: 0,
                    Standard: 1,
                    Black: 2,
                    Magnified: 3,
                    ThreeD: 4,
                    Hand: 5,
                    MacOS: 6,
                    Ubuntu: 7
                },
                r = {
                    [s.Aero]: {
                        label: "Windows Aero",
                        suffix: "-aero"
                    },
                    [s.Standard]: {
                        label: "Windows Standard",
                        suffix: "-standard"
                    },
                    [s.Black]: {
                        label: "Windows Black",
                        suffix: "-black"
                    },
                    [s.Magnified]: {
                        label: "Magnified",
                        suffix: "-magnified"
                    },
                    [s.ThreeD]: {
                        label: "3d-White",
                        suffix: "-3d"
                    },
                    [s.Hand]: {
                        label: "Hands",
                        suffix: "-hand"
                    },
                    [s.MacOS]: {
                        label: "MacOS",
                        suffix: "-macos"
                    },
                    [s.Ubuntu]: {
                        label: "Ubuntu",
                        suffix: "-ubuntu"
                    }
                },
                o = {
                    [i.Default]: "default",
                    [i.Working]: "working",
                    [i.Busy]: "busy",
                    [i.Precision]: "precision",
                    [i.Typing]: "typing",
                    [i.ResizeV]: "resizev",
                    [i.ResizeH]: "resizeh",
                    [i.ResizeD1]: "resized1",
                    [i.ResizeD2]: "resized2",
                    [i.Move]: "move"
                },
                a = {
                    tl: i.ResizeD1,
                    br: i.ResizeD1,
                    tr: i.ResizeD2,
                    bl: i.ResizeD2,
                    tm: i.ResizeV,
                    mt: i.ResizeV,
                    bm: i.ResizeV,
                    mb: i.ResizeV,
                    ml: i.ResizeH,
                    mr: i.ResizeH,
                    "top-left": i.ResizeD1,
                    "bottom-right": i.ResizeD1,
                    "top-right": i.ResizeD2,
                    "bottom-left": i.ResizeD2,
                    top: i.ResizeV,
                    bottom: i.ResizeV,
                    left: i.ResizeH,
                    right: i.ResizeH
                },
                c = {
                    select: i.Shape,
                    pencil: i.Pencil,
                    bucket: i.Bucket,
                    text: i.Typing,
                    eraser: i.Eraser,
                    picker: i.Picker,
                    brush: i.Brush,
                    shape: i.Shape
                }
        },
        9538: function(t, e, n) {
            var i, s;
            (function() {
                "use strict";
                var n = {
                        CLOSED: 0,
                        OPEN: 1
                    },
                    r = {
                        NONE: 0,
                        EXCLAMATION: 1,
                        QUESTION: 2
                    },
                    o = {
                        PRISTINE: 0,
                        IN_PROGRESS: 1,
                        LOST: 2,
                        WON: 3
                    },
                    a = function(t, e, i, s) {
                        this.x = t || 0, this.y = e || 0, this.isMine = !!i, this.numAdjacentMines = s || 0, this.state = n.CLOSED, this.flag = r.NONE
                    },
                    c = function(t) {
                        var e;
                        try {
                            e = f(t)
                        } catch (n) {
                            e = !1
                        }
                        if (!e) throw new Error("The mine array supplied to Board constructor was not valid");
                        this._state = o.PRISTINE, this._numRows = t.length, this._numCols = t[0].length, this._numMines = l(t, this._numRows, this._numCols), this._grid = d(t, this._numRows, this._numCols)
                    };
                c.prototype.state = function() {
                    return this._state
                }, c.prototype.numRows = function() {
                    return this._numRows
                }, c.prototype.numCols = function() {
                    return this._numCols
                }, c.prototype.numMines = function() {
                    return this._numMines
                }, c.prototype.grid = function() {
                    var t, e, n = [];
                    for (t = 0; t < this._numRows; t++)
                        for (n.push([]), e = 0; e < this._numCols; e++) n[t].push(this.cell(e, t));
                    return this._grid
                }, c.prototype._cell = function(t, e) {
                    if (t >= 0 && e >= 0 && e < this._numRows && t < this._numCols) return this._grid[e][t]
                }, c.prototype.cell = function(t, e) {
                    return S({}, this._cell(+t, +e))
                }, c.prototype.cycleCellFlag = function(t, e) {
                    var i = this._cell(+t, +e),
                        s = !0;
                    i && i.state !== n.OPEN && this._state !== o.WON && this._state !== o.LOST && (i.flag === r.NONE ? i.flag = r.EXCLAMATION : i.flag === r.EXCLAMATION ? i.flag = r.QUESTION : i.flag === r.QUESTION ? i.flag = r.NONE : s = !1, s && this._state === o.PRISTINE && (this._state = o.IN_PROGRESS), this._updateState())
                }, c.prototype.openCell = function(t, e) {
                    var i = this._cell(t, e);
                    i && i.state !== n.OPEN && i.flag === r.NONE && this._state !== o.WON && this._state !== o.LOST && (i.state = n.OPEN, i.isMine || (this._floodFill(t + 1, e), this._floodFill(t - 1, e), this._floodFill(t, e + 1), this._floodFill(t, e - 1), this._floodFill(t + 1, e + 1), this._floodFill(t - 1, e - 1), this._floodFill(t - 1, e + 1), this._floodFill(t + 1, e - 1)), this._state === o.PRISTINE && (this._state = o.IN_PROGRESS), this._updateState())
                }, c.prototype._floodFill = function(t, e) {
                    var i = this._cell(t, e);
                    i && !i.isMine && i.state === n.CLOSED && i.flag === r.NONE && (i.state = n.OPEN, 0 === i.numAdjacentMines && (this._floodFill(t + 1, e), this._floodFill(t - 1, e), this._floodFill(t, e + 1), this._floodFill(t, e - 1), this._floodFill(t + 1, e + 1), this._floodFill(t - 1, e - 1), this._floodFill(t - 1, e + 1), this._floodFill(t + 1, e - 1)))
                }, c.prototype._updateState = function() {
                    var t, e, i, s = !0;
                    for (e = 0; e < this._numRows; e++)
                        for (t = 0; t < this._numCols; t++)
                            if (i = this._cell(t, e), i.state === n.OPEN) {
                                if (i.isMine) return void(this._state = o.LOST)
                            } else i.state === n.CLOSED && (i.isMine ? i.flag !== r.EXCLAMATION && (s = !1) : s = !1);
                    s && (this._state = o.WON)
                };
                var u = function(t) {
                        var e, n, i, s, r, o = [];
                        for (t = t || {}, i = t.rows || 10, s = t.cols || t.rows || 10, r = t.mines || parseInt(i * s * .15, 10) || 0, n = i * s, e = 0; e < n; e++) e < r ? o.push(1) : o.push(0);
                        return o = _(o), o = h(o, s), o
                    },
                    d = function(t, e, n) {
                        var i, s, r = [];
                        for (s = 0; s < e; s++)
                            for (r[s] = [], i = 0; i < n; i++) r[s][i] = new a(i, s, 1 === t[s][i], T(t, i, s));
                        return r
                    },
                    l = function(t, e, n) {
                        var i, s, r = 0;
                        for (s = 0; s < e; s++)
                            for (i = 0; i < n; i++) 1 === t[s][i] && r++;
                        return r
                    },
                    T = function(t, e, n) {
                        var i, s, r = e + 1,
                            o = n + 1,
                            a = t[0].length,
                            c = t.length,
                            u = 0;
                        for (s = n - 1; s <= o; s++)
                            for (i = e - 1; i <= r; i++) s === n && i === e || s >= 0 && i >= 0 && s < c && i < a && 1 === t[s][i] && u++;
                        return u
                    },
                    f = function(t) {
                        var e, n, i, s, r = !0;
                        if (t && t.length)
                            for (i = t.length, s = t[0] ? t[0].length : 0, 0 === s && (r = !1), e = 0; e < i; e++)
                                if (t[e].length !== s) r = !1;
                                else
                                    for (n = 0; n < s; n++) 0 !== t[e][n] && 1 !== t[e][n] && (r = !1);
                        else r = !1;
                        return r
                    },
                    _ = function(t) {
                        var e, n, i = t.length;
                        while (i) n = Math.floor(Math.random() * i--), e = t[i], t[i] = t[n], t[n] = e;
                        return t
                    },
                    h = function(t, e) {
                        var n, i = t.length / e,
                            s = [];
                        for (n = 0; n < i; n++) s.push(t.splice(0, e));
                        return s
                    },
                    S = function(t, e) {
                        var n, i = {};
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
                        for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                        return i
                    },
                    m = {
                        Cell: a,
                        CellStateEnum: n,
                        CellFlagEnum: r,
                        Board: c,
                        BoardStateEnum: o,
                        generateMineArray: u
                    };
                "undefined" !== typeof t.exports ? t.exports = m : (i = [], s = function() {
                    return m
                }.apply(e, i), void 0 === s || (t.exports = s))
            })()
        },
        "968c": function(t, e, n) {
            "use strict";
            n.r(e);
            const i = () => Promise.all([n.e("chunk-9691fd08"), n.e("database")]).then(n.bind(null, "5500")),
                s = async () => (await n.e("localforage").then(n.t.bind(null, "a002", 7))).default,
                r = (t, e, n) => t + e.uid + ("configs" !== n ? "/" + n : ""),
                o = (t, e) => e ? t + e.uid : t.replace(/\//g, ""),
                a = {
                    get: async (t, e, n) => e ? (await i()).get(r(t, e, n)) : (await s()).getItem(n),
                    update: async (t, e, n, o) => e ? (await i()).update(r(t, e, n), o) : a.get(t, e, n).then(async t => (await s()).setItem(n, { ...t,
                        ...o
                    })),
                    remove: async (t, e, n) => e ? (await i()).remove(r(t, e, n)) : (await s()).removeItem(n),
                    local: {}
                };
            a.local.update = async (t, e, n) => {
                const i = o(t, e);
                return (await s()).setItem(i, n)
            }, a.local.get = async (t, e) => {
                const n = o(t, e);
                return (await s()).getItem(n)
            }, a.local.remove = async (t, e) => {
                const n = o(t, e);
                return (await s()).removeItem(n)
            }, a.local.clean = async function(t) {
                const e = await s(),
                    n = await e.keys();
                return Promise.all(n.filter(e => e.includes(t)).map(t => this.remove(t)))
            }, e["default"] = a
        },
        a146: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return s
            })), n.d(e, "c", (function() {
                return r
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return a
            }));
            var i = n("0f35");

            function s(t, e) {
                const n = 60;
                return t >= n ? `${Object(i["k"])(Number((t/n).toFixed()))}:${Object(i["k"])(t%n)}` : e ? "00:" + Object(i["k"])(t) : t + " seconds"
            }

            function r(t) {
                return new Date(t).toLocaleDateString("en-US")
            }
            const o = {
                    PurblePlace: "purbleplace",
                    PurblePair: "purblepair",
                    PurbleShop: "purbleshop",
                    ComfyCakes: "comfycakes"
                },
                a = {
                    Master: "Purble Master",
                    Champ: "Champion of Logic",
                    Detective: "Senior Detective"
                }
        },
        a81a: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var i = n("1547");
            const s = Object(i["d"])("Device2", {
                web: () => n.e("device2").then(n.bind(null, "1b4b")).then(t => new t.DeviceWeb)
            })
        },
        c098: function(t, e, n) {
            "use strict";
            n("0f36")
        },
        c8ec: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var i = n("1547");
            const s = Object(i["d"])("Network", {
                web: () => n.e("chunk-2d0abc10").then(n.bind(null, "172f")).then(t => new t.NetworkWeb)
            })
        },
        e0b8: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var i = n("968c");

            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            const r = {
                total: 0,
                completed: 0,
                won: 0,
                scores: []
            };
            class o {
                constructor(t, e) {
                    s(this, "user", void 0), s(this, "key", void 0), s(this, "level", void 0), s(this, "data", void 0), this.user = e, this.key = t, this.level = 0, this.data = [], i["default"].local.get("scores-" + t, this.user).then(t => {
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
                    i["default"].local.update("scores-" + this.key, this.user, this.data)
                }
                init(t) {
                    this.level = t, this.data[this.level].total++, this.saveData()
                }
                saveScore(t, e = ((t, e) => t.time - e.time)) {
                    const {
                        scores: n
                    } = this.data[this.level];
                    n.push(t), n.sort(e), n.length > 5 && n.pop(), this.complete()
                }
                win() {
                    this.data[this.level].won++, this.saveData()
                }
                complete() {
                    this.data[this.level].completed++, this.saveData()
                }
                reset(t = this.key) {
                    i["default"].local.remove("scores-" + t, this.user), this.data = {
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
        e47c: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return o
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "b", (function() {
                return c
            })), n.d(e, "h", (function() {
                return d
            })), n.d(e, "f", (function() {
                return l
            })), n.d(e, "g", (function() {
                return T
            })), n.d(e, "a", (function() {
                return f
            }));
            var i = n("2f62"),
                s = n("3b8c");
            const r = {
                    TogglePreview: "togglePreview",
                    SetBootTheme: "setBootTheme",
                    LoadTheme: "loadTheme",
                    UnloadTheme: "unloadTheme"
                },
                o = "personalization",
                a = Object(i["a"])(o),
                c = r,
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
            e["e"] = {
                namespaced: !0,
                state() {
                    return {
                        bootTheme: null,
                        previewTheme: null,
                        loadedTheme: null
                    }
                },
                getters: {
                    themes: () => s["a"]
                },
                mutations: {
                    [r.TogglePreview]: (t, e) => {
                        t.previewTheme = e || null
                    },
                    [r.SetBootTheme]: (t, e) => {
                        t.bootTheme = e
                    },
                    [r.LoadTheme]: (t, e) => {
                        t.loadedTheme = e
                    }
                },
                actions: {
                    [r.TogglePreview]: ({
                        commit: t
                    }, e) => {
                        t(r.TogglePreview, e)
                    },
                    [r.LoadTheme]: async ({
                        commit: t,
                        dispatch: e
                    }, i) => {
                        if (i) {
                            await e(r.UnloadTheme);
                            try {
                                const e = l(i),
                                    {
                                        default: s
                                    } = await n("15d4")(`./${e}.scss`);
                                s.use(), t(r.LoadTheme, s)
                            } catch (s) {
                                console.error("Failed to load theme style for: " + i, s)
                            }
                        }
                    },
                    [r.UnloadTheme]: ({
                        state: t,
                        commit: e
                    }) => {
                        t.loadedTheme && (t.loadedTheme.unuse(), e(r.LoadTheme, null))
                    }
                }
            };
            const d = t => "win11dark" === t ? "win11" : "win81" === t ? "win8" : "winLP" === t ? "winLS" : /xp.{1}/.test(t) ? "winxp" : /^(aero|basic)-/.test(t) || "base" === t ? "win7" : t,
                l = t => u[t] || t,
                T = t => "win7" === t ? "aero-1" : t,
                f = {
                    AeroGlass: /^aero|winvista/,
                    AeroTaskbarItem: /^win8|^aero|basic-1/,
                    CenterTaskbar: /win11|chromeos/,
                    ChangeColor: /^aero|^win8|win10|^win11|kubuntu|ubuntu|oxygen/,
                    ChangeTransparency: /^aero|^win8|kubuntu/,
                    DarkMode: /basic-3|win11dark|macos|ubuntu|kubuntu|oxygen|aeroNoir/
                }
        },
        e5dd: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var i = n("1547");
            const s = Object(i["d"])("Browser", {
                web: () => n.e("chunk-2d0e2170").then(n.bind(null, "7ce3")).then(t => new t.BrowserWeb)
            })
        },
        f3b3: function(t, e, n) {
            t.exports = n.p + "media/minesweeper-new.60909dd9.mp3"
        }
    }
]);