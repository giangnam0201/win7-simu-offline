(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["dockmacos"], {
        "2b08": function(t, e, i) {},
        "4c7d": function(t, e, i) {},
        "59d8": function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return "ubuntu" === t.theme ? i("dock-ubuntu") : "macos" === t.theme ? i("dock-macos") : t._e()
                },
                n = [],
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.hasMaximizedWindows ? t._e() : i("nav", {
                        staticClass: "bottom-2 fixed flex justify-center w-full pointer-events-none dock__wrapper is-macos"
                    }, [i("div", {
                        staticClass: "flex gap-5 p-2 rounded-2xl pointer-events-auto dock__list"
                    }, [t._l(t.groups, (function(e, s) {
                        return [i("ul", {
                            key: "group" + s,
                            staticClass: "flex gap-1 dock__group"
                        }, t._l(e, (function(e, n) {
                            return i("li", {
                                key: "group" + s + "-" + e.key + n,
                                staticClass: "relative dock__item"
                            }, [i("button", {
                                class: ["block relative p-0 dock__item-button", {
                                    "is-active": t.isActive(e.key)
                                }],
                                on: {
                                    click: function(i) {
                                        return i.stopPropagation(), t.open(e.key)
                                    }
                                }
                            }, [i("base-icon", {
                                staticClass: "dock__item-icon",
                                attrs: {
                                    icon: e.icon
                                }
                            })], 1), i("div", {
                                staticClass: "hidden bottom-full absolute my-6 px-4 py-2 rounded-md whitespace-nowrap dock__item-tooltip"
                            }, [t._v(" " + t._s(e.lbl) + " ")])])
                        })), 0), s < t.groups.length - 1 ? i("span", {
                            key: "separator" + s,
                            staticClass: "w-px h-full dock__divider"
                        }) : t._e()]
                    }))], 2)])
                },
                a = [],
                c = i("2f62"),
                r = i("58cd"),
                l = i("6792"),
                u = i("01b4"),
                d = i("3eac"),
                m = {
                    computed: { ...Object(c["f"])({
                            activeStart: "activeStart",
                            recentPrograms: "recentPrograms",
                            pinnedPrograms: "pinnedPrograms",
                            windows: "windows",
                            shortcuts: "shortcuts",
                            onlineGames: "onlineGames"
                        }),
                        ...Object(c["d"])({
                            themeData: "themeData"
                        }),
                        ...d["b"].mapGetters(["hasMaximizedWindows"]),
                        groups() {
                            const t = this.pinnedPrograms.filter(t => !["computer", "cpanel"].includes(t)),
                                e = new Set([...this.recentPrograms.slice(0, 3), ...this.windows.map(({
                                    id: t
                                }) => t).filter(t => !["computer", "cpanel", "bin", ...this.pinnedPrograms].includes(t))]),
                                i = [
                                    ["computer", "launchpad", ...t, "cpanel"], Array.from(e), ["bin"]
                                ];
                            return i.map(t => t.map(t => ({
                                key: t,
                                lbl: this.$tc(t),
                                icon: this.getIcon("launchpad" === t ? "start" : t)
                            })))
                        }
                    },
                    methods: {
                        isActive(t) {
                            return this.windows.find(e => e.id === t) || "launchpad" === t && this.activeStart
                        },
                        open(t) {
                            "launchpad" === t ? this.$store.commit(u["a"].Start) : (this.$store.commit(u["a"].Start, !1), this.$root.$emit(l["c"].OpenWindow, t))
                        },
                        getIcon(t) {
                            if (t.startsWith("game_")) {
                                const e = this.onlineGames.find(e => e.id === t);
                                return e.icon
                            }
                            if (t.startsWith("web_")) {
                                const e = this.shortcuts.find(e => e.key === t);
                                return e.icon
                            }
                            return this.themeData.icon[t]
                        }
                    },
                    components: {
                        BaseIcon: r["a"]
                    }
                },
                p = m,
                h = (i("dcae"), i("2877")),
                f = Object(h["a"])(p, o, a, !1, null, null, null),
                _ = f.exports,
                b = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("nav", {
                        staticClass: "left-0 fixed flex flex-col justify-between items-center bg-black/60 p-1 h-full dock__wrapper is-ubuntu"
                    }, [i("ul", {
                        staticClass: "flex flex-col items-center w-full h-full dock__list"
                    }, t._l(t.items, (function(e) {
                        return i("li", {
                            key: e.key,
                            class: ["dock__item", {
                                "flex flex-col has-separator": "bin" === e.key
                            }]
                        }, [i("button", {
                            class: ["relative hover:bg-white/20 p-2 rounded-xl transition-colors dock__item-button", {
                                "is-active": t.isActive(e.key)
                            }],
                            attrs: {
                                id: "start" === e.key ? "start-button" : null
                            },
                            on: {
                                click: function(i) {
                                    return i.stopPropagation(), t.open(e.key)
                                }
                            }
                        }, [i("base-icon", {
                            staticClass: "dock__item-icon",
                            attrs: {
                                icon: e.icon
                            }
                        })], 1)])
                    })), 0), i("button", {
                        class: ["relative hover:bg-white/20 p-2 rounded-xl transition-colors dock__item-button", {
                            "is-active": t.isActive("start")
                        }],
                        attrs: {
                            id: "start-button"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.open("start")
                            }
                        }
                    }, [i("base-icon", {
                        staticClass: "dock__item-icon",
                        attrs: {
                            icon: this.themeData.icon.start
                        }
                    })], 1)])
                },
                k = [],
                w = {
                    computed: { ...Object(c["f"])({
                            activeStart: "activeStart",
                            recentPrograms: "recentPrograms",
                            windows: "windows"
                        }),
                        ...Object(c["d"])({
                            themeData: "themeData"
                        }),
                        items() {
                            const t = new Set([...this.recentPrograms.slice(0, 3), ...this.windows.map(({
                                id: t
                            }) => t)]);
                            return [...t].map(t => ({
                                key: t,
                                lbl: this.$t(t),
                                icon: this.themeData.icon[t]
                            }))
                        }
                    },
                    methods: {
                        isActive(t) {
                            return this.windows.find(e => e.id === t) || "start" === t && this.activeStart
                        },
                        open(t) {
                            "start" === t ? this.$store.commit(u["a"].Start) : (this.$store.commit(u["a"].Start, !1), this.$root.$emit(l["c"].OpenWindow, t))
                        }
                    },
                    components: {
                        BaseIcon: r["a"]
                    }
                },
                v = w,
                g = (i("a515"), Object(h["a"])(v, b, k, !1, null, null, null)),
                x = g.exports,
                y = {
                    data() {
                        return {}
                    },
                    computed: { ...Object(c["f"])({
                            theme: "theme"
                        })
                    },
                    components: {
                        DockUbuntu: x,
                        DockMacos: _
                    }
                },
                P = y,
                $ = Object(h["a"])(P, s, n, !1, null, null, null);
            e["default"] = $.exports
        },
        a515: function(t, e, i) {
            "use strict";
            i("4c7d")
        },
        dcae: function(t, e, i) {
            "use strict";
            i("2b08")
        }
    }
]);