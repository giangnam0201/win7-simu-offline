(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["startmenu"], {
        "097a": function(t, e, s) {
            "use strict";
            s("6c2a")
        },
        1521: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        class: ["relative flex bg-white h-full overflow-auto window__body", {
                            "p-2.5 flex-col": "panel" !== t.layout
                        }, "default" === t.layout ? "" : "is-" + t.layout],
                        on: {
                            mousemove: function(e) {
                                return t.$emit("mousemove")
                            },
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [t._t("default")], 2)
                },
                n = [],
                i = {
                    props: {
                        layout: {
                            type: String,
                            default: "default",
                            validator: t => ["message", "dialog", "settings", "panel", "default"].includes(t)
                        }
                    }
                },
                o = i,
                r = s("2877"),
                l = Object(r["a"])(o, a, n, !1, null, null, null);
            e["a"] = l.exports
        },
        1731: function(t, e, s) {
            "use strict";
            s("356c")
        },
        "183c": function(t, e, s) {},
        "1d01": function(t, e, s) {
            "use strict";
            s("b7d4")
        },
        "356c": function(t, e, s) {},
        "5dd0": function(t, e, s) {
            "use strict";
            s("afdb")
        },
        "63c0": function(t, e, s) {
            "use strict";
            s("a102")
        },
        "6a11": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return t.showAds && t.isPwa ? s("div", {
                        class: ["relative my-4 w-full text-center ad__container--google", "is-" + t.adFormat]
                    }, [s("ins", {
                        staticClass: "absolute h-full adsbygoogle",
                        staticStyle: {
                            display: "block"
                        },
                        attrs: {
                            "data-ad-slot": "3336580675",
                            "data-ad-format": t.adFormat,
                            "data-ad-client": "ca-pub-5904323684803247",
                            "data-full-width-responsive": "true"
                        }
                    })]) : t._e()
                },
                n = [],
                i = s("37b6"),
                o = s("01b4"),
                r = s("d519"),
                l = s("f708"),
                c = s("2f62"),
                u = s("0f35"),
                p = {
                    props: {
                        infeed: Boolean
                    },
                    computed: { ...Object(c["f"])(["showAds"]),
                        adFormat() {
                            return this.infeed ? "horizontal" : "auto"
                        },
                        isPwa: () => Object(l["d"])()
                    },
                    async mounted() {
                        if (!this.isPwa) return;
                        await Object(u["q"])(i["b"]);
                        const t = Object(r["a"])(this.$el, "up");
                        t && this.$store.commit(o["a"].WindowUpdate, {
                            id: t.id.split("-")[1],
                            maximized: !0
                        }), await Object(u["q"])(200), (window.adsbygoogle = window.adsbygoogle || []).push({})
                    }
                },
                m = p,
                d = (s("63c0"), s("2877")),
                h = Object(d["a"])(m, a, n, !1, null, null, null);
            e["a"] = h.exports
        },
        "6c2a": function(t, e, s) {},
        "6dea": function(t, e, s) {
            "use strict";
            s("fb21")
        },
        7842: function(t, e, s) {},
        "7d74": function(t, e, s) {
            "use strict";
            s("d510")
        },
        "8c17": function(t, e, s) {},
        "8c3f": function(t, e, s) {
            "use strict";
            s("b599")
        },
        "97ee": function(t, e, s) {
            "use strict";
            s.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return "chromeos" === t.theme ? s("start-chrome") : "win8" === t.theme || "win81" === t.theme ? s("start-screen") : "macos" === t.theme || "ubuntu" === t.theme ? s("start-launchpad") : "win31" === t.theme ? s("start-menu-31") : "win95" === t.theme || "win98" === t.theme || "win2k" === t.theme ? s("start-menu-9x") : t.isWinXp ? s("start-menu-xp") : "win10" === t.theme ? s("start-menu-10") : "win11" === t.theme || "win11dark" === t.theme ? s("start-menu-11") : "kubuntu" === t.theme || "oxygen" === t.theme ? s("start-menu-kubuntu") : s("start-menu")
                },
                n = [],
                i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("transition", {
                        attrs: {
                            css: t.animateTaskbar,
                            "enter-active-class": "animated fadeInUp fastest",
                            "leave-active-class": "animated fadeOutDown fastest"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bottom-11 left-1 absolute flex flex-col rounded-2xl overflow-hidden startmenu__wrapper is-chromeos",
                        attrs: {
                            id: "start-menu"
                        }
                    }, [s("header", {
                        staticClass: "flex items-center gap-3 p-4 border-0 border-black/10 border-b border-solid"
                    }, [s("img", {
                        staticClass: "w-6 h-6",
                        attrs: {
                            src: t.icon.google,
                            alt: "google-search"
                        }
                    }), s("input", {
                        staticClass: "bg-transparent p-0 w-full h-6",
                        attrs: {
                            type: "text",
                            placeholder: t.$t("search")
                        },
                        on: {
                            input: t.search
                        }
                    }), s("button", {
                        staticClass: "flex p-0 border-0 rounded-full w-8 h-8 overflow-hidden transition-shadow cursor-pointer shrink-0 startmenu__button has-image",
                        on: {
                            click: t.openAccounts
                        }
                    }, [s("img", {
                        staticClass: "w-full h-full",
                        attrs: {
                            src: t.photo,
                            alt: "user"
                        }
                    })]), s("div", {
                        staticClass: "relative startmenu__menu"
                    }, [s("button", {
                        staticClass: "flex justify-center items-center bg-black/10 hover:bg-black/20 p-0 border-0 rounded-full w-8 h-8 overflow-hidden transition-colors cursor-pointer startmenu__button"
                    }, [s("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:power-off"
                        }
                    })], 1), s("winui-menu", {
                        staticClass: "hidden right-0"
                    }, [s("winui-menuitem", [s("button", {
                        on: {
                            click: t.logoff
                        }
                    }, [t._v(t._s(t.$t("logoff")))])]), s("winui-menuitem", [s("button", {
                        on: {
                            click: t.shutdown
                        }
                    }, [t._v(t._s(t.$t("shutdown")))])]), s("winui-menuitem", [s("button", {
                        on: {
                            click: t.restart
                        }
                    }, [t._v(t._s(t.$t("restart")))])])], 1)], 1)]), s("div", {
                        staticClass: "startmenu__program-list is-recent"
                    }, [s("ul", {
                        staticClass: "flex flex-wrap gap-8 p-4 list-none"
                    }, t._l(t.recentPrograms.slice(0, 5), (function(e) {
                        return s("li", {
                            key: e.key,
                            staticClass: "flex flex-col items-center gap-2 startmenu__program-item",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__program-icon",
                            attrs: {
                                id: e.key,
                                icon: e.icon
                            }
                        }), s("label", {
                            staticClass: "text-sm startmenu__program-label"
                        }, [t._v(t._s(e.lbl))])], 1)
                    })), 0)]), s("hr", {
                        staticClass: "bg-black/10 mx-6 my-0 border-0 startmenu__divider"
                    }), s("div", {
                        staticClass: "overflow-auto startmenu__program-list is-all"
                    }, [s("ul", {
                        staticClass: "flex flex-wrap gap-8 p-4 list-none"
                    }, t._l(t.searchList, (function(e) {
                        return s("li", {
                            key: e.key,
                            staticClass: "flex flex-col items-center gap-2 startmenu__program-item",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__program-icon",
                            attrs: {
                                id: e.key,
                                icon: e.icon
                            }
                        }), s("label", {
                            staticClass: "text-sm startmenu__program-label"
                        }, [t._v(t._s(e.lbl))])], 1)
                    })), 0)])])])
                },
                o = [],
                r = s("0f35"),
                l = s("58cd"),
                c = s("554d"),
                u = s("2f62"),
                p = s("9e81"),
                m = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            searchList: []
                        }
                    },
                    computed: { ...Object(u["f"])({
                            programs({
                                programs: t
                            }) {
                                return [{
                                    key: "computer",
                                    lbl: this.$t("computer"),
                                    icon: this.icon.computer
                                }, {
                                    key: "cpanel",
                                    lbl: this.$t("cpanel"),
                                    icon: this.icon.cpanel
                                }, ...t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))]
                            }
                        }),
                        ...c["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar
                        }),
                        fullList() {
                            return [...this.apps, ...this.programs].sort((t, e) => {
                                const s = t.lbl.toLowerCase(),
                                    a = e.lbl.toLowerCase();
                                return s < a ? -1 : s > a ? 1 : 0
                            })
                        },
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        }
                    },
                    mounted() {
                        this.searchList = this.fullList.slice(0)
                    },
                    methods: {
                        search(t) {
                            const {
                                value: e
                            } = t.target;
                            this.searchList = e ? this.searchList.filter(t => t.lbl.toLowerCase().includes(e.toLowerCase())) : this.fullList.slice(0)
                        }
                    },
                    components: {
                        BaseIcon: l["a"]
                    }
                },
                d = m,
                h = (s("097a"), s("2877")),
                _ = Object(h["a"])(d, i, o, !1, null, null, null),
                b = _.exports,
                f = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("pose-container", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:swipe",
                            value: t.handleSwipe,
                            expression: "handleSwipe",
                            arg: "swipe"
                        }],
                        staticClass: "top-0 right-0 bottom-0 left-0 fixed flex flex-col startmenu__wrapper is-launchpad",
                        attrs: {
                            id: "start-menu",
                            pose: t.isOpen ? "visible" : "hidden"
                        }
                    }, [s("base-overlay", {
                        staticClass: "bg-cover bg-center startmenu__overlay",
                        style: {
                            backgroundImage: "url(" + t.bg + ")"
                        },
                        on: {
                            click: t.closeLaunchpad
                        }
                    }), s("div", {
                        staticClass: "mx-auto mt-6 w-1/4 startmenu__top"
                    }, [s("input", {
                        staticClass: "bg-black/10 p-1 border border-white/40 border-solid rounded-md w-full h-full text-white startmenu__search",
                        attrs: {
                            type: "search",
                            placeholder: t.$t("search")
                        },
                        on: {
                            input: t.search
                        }
                    })]), s("div", {
                        staticClass: "relative mx-auto mb-4 w-3/4 h-3/4 startmenu__center"
                    }, t._l(t.totalPageCount, (function(e) {
                        return s("pose-list", {
                            key: e,
                            class: ["items-center grid startmenu__program-list", {
                                "absolute top-0": 1 !== e
                            }],
                            attrs: {
                                pose: t.currentPage === e ? "enter" : "exit",
                                current: t.currentPage
                            }
                        }, t._l(t.searchList.slice(e * t.pageItemCount - t.pageItemCount, e * t.pageItemCount), (function(e) {
                            return s("li", {
                                key: e.key,
                                staticClass: "center-flex"
                            }, [s("button", {
                                staticClass: "center-flex flex-col gap-2 text-white startmenu__program-button",
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    },
                                    contextmenu: function(s) {
                                        return t.openMenu(s, e.key)
                                    }
                                }
                            }, [s("base-icon", {
                                staticClass: "startmenu__program-icon",
                                attrs: {
                                    icon: e.icon
                                }
                            }), s("span", {
                                staticClass: "startmenu__program-label"
                            }, [t._v(t._s(e.lbl))])], 1)])
                        })), 0)
                    })), 1), t.totalPageCount > 1 ? s("nav", {
                        staticClass: "center-flex gap-3 startmenu__paging"
                    }, t._l(t.totalPageCount, (function(e) {
                        return s("span", {
                            key: e,
                            class: ["bg-white rounded-full w-3 h-3 transition-opacity startmenu__paging-item", {
                                "opacity-50": e !== t.currentPage
                            }, {
                                "opacity-100 ring-1 ring-black/20": e === t.currentPage
                            }],
                            attrs: {
                                "aria-label": e
                            },
                            on: {
                                click: function(s) {
                                    return t.changePage(e)
                                }
                            }
                        })
                    })), 0) : t._e()], 1)
                },
                g = [],
                w = s("37b6"),
                v = s("a03b"),
                x = s("6792"),
                C = s("01b4"),
                k = s("95d1"),
                y = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            searchList: [],
                            currentPage: 1,
                            col: 1,
                            row: 1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            background: "background",
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            },
                            fullList() {
                                return [...this.apps, ...this.programs].sort((t, e) => {
                                    const s = t.lbl.toLowerCase(),
                                        a = e.lbl.toLowerCase();
                                    return s < a ? -1 : s > a ? 1 : 0
                                })
                            }
                        }),
                        bg() {
                            return this.background || this.themeData.bg
                        },
                        pageItemCount() {
                            return this.col * this.row
                        },
                        totalPageCount() {
                            return Math.ceil(this.searchList.length / this.pageItemCount)
                        }
                    },
                    mounted() {
                        const t = window.getComputedStyle(this.$el);
                        this.col = parseInt(t.getPropertyValue("--launchpad-cols")) || this.col, this.row = parseInt(t.getPropertyValue("--launchpad-rows")) || this.row, this.searchList = this.fullList.slice(0), this.$el.addEventListener("wheel", this.handleWheel)
                    },
                    methods: {
                        handleSwipe(t) {
                            this.scrollPage(t)
                        },
                        handleWheel(t) {
                            this.scrollPage(t.deltaY > 0 ? "left" : "right")
                        },
                        scrollPage(t) {
                            "left" === t && this.currentPage < this.totalPageCount && this.currentPage++, "right" === t && this.currentPage > 1 && this.currentPage--
                        },
                        changePage(t) {
                            this.currentPage = t
                        },
                        search(t) {
                            const {
                                value: e
                            } = t.target;
                            this.searchList = e ? this.fullList.filter(({
                                lbl: t
                            }) => t.toLowerCase().includes(e.toLowerCase())) : this.fullList.slice(0)
                        },
                        open(t) {
                            this.$root.$emit(x["c"].OpenWindow, t), this.$store.commit(C["a"].Start)
                        },
                        closeLaunchpad() {
                            this.$store.commit(C["a"].Start)
                        }
                    },
                    components: {
                        BaseIcon: l["a"],
                        BaseOverlay: v["a"],
                        PoseContainer: k["a"].div({
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: w["c"]
                                },
                                applyAtStart: {
                                    display: ""
                                }
                            },
                            hidden: {
                                opacity: 0,
                                scale: 1.05,
                                transition: {
                                    duration: w["c"]
                                },
                                applyAtEnd: {
                                    display: "none"
                                }
                            }
                        }),
                        PoseList: k["a"].ul({
                            enter: {
                                opacity: 1,
                                transition: {
                                    duration: 400
                                },
                                applyAtStart: {
                                    display: ""
                                }
                            },
                            exit: {
                                opacity: 0,
                                transition: {
                                    duration: 400
                                },
                                applyAtEnd: {
                                    display: "none"
                                }
                            }
                        })
                    }
                },
                $ = y,
                P = (s("6dea"), Object(h["a"])($, f, g, !1, null, null, null)),
                O = P.exports,
                A = s("9acc"),
                L = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("pose-container", {
                        staticClass: "bottom-10 absolute flex items-start text-white startmenu__wrapper is-win10",
                        attrs: {
                            id: "start-menu",
                            pose: t.poseContainer
                        }
                    }, [s("pose-sidebar", {
                        staticClass: "top-0 bottom-0 absolute whitespace-nowrap startmenu__sidebar",
                        attrs: {
                            pose: t.poseSidebar
                        }
                    }, [s("div", {
                        staticClass: "flex flex-col h-full",
                        on: {
                            mouseenter: function(e) {
                                t.sideVisible = !0
                            },
                            mouseleave: function(e) {
                                t.sideVisible = !1
                            }
                        }
                    }, [s("button", {
                        staticClass: "gap-4 mb-auto px-4 py-2.5 startmenu__button",
                        on: {
                            click: t.toggleSidebar
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:bars"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden text-xl"
                    }, [s("b", [t._v("START")])])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.openAccounts
                        }
                    }, [s("base-icon", {
                        staticClass: "rounded-full startmenu__program-icon",
                        attrs: {
                            icon: t.photo
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden"
                    }, [t._v(t._s(t.user ? t.user.displayName : "Guest"))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: function(e) {
                                return t.open("computer")
                            }
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:file"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden"
                    }, [t._v(t._s(t.$t("documents")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: function(e) {
                                return t.open("cpanel")
                            }
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:cog"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden"
                    }, [t._v(t._s(t.$t("settings")))])], 1), s("div", {
                        staticClass: "relative startmenu__groupbutton"
                    }, [s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.togglePowerMenu
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:power-off"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden text-ellipsis"
                    }, [t._v(t._s(t.$t("power")))])], 1), s("div", {
                        staticClass: "hidden bottom-full absolute flex-col py-2 border border-black/90 border-solid w-full startmenu__menu"
                    }, [s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.logoff
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:sign-out-alt"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden text-ellipsis"
                    }, [t._v(t._s(t.$t("logoff")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.shutdown
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:power-off"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden text-ellipsis"
                    }, [t._v(t._s(t.$t("shutdown")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.restart
                        }
                    }, [s("iconify-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: "la:redo-alt"
                        }
                    }), s("span", {
                        staticClass: "overflow-hidden text-ellipsis"
                    }, [t._v(t._s(t.$t("restart")))])], 1)])])])]), s("pose-list", {
                        staticClass: "h-full overflow-auto startmenu__program-list"
                    }, t._l(t.fullList, (function(e) {
                        return s("pose-item-program", {
                            key: e.key
                        }, [s("button", {
                            staticClass: "startmenu__button",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__program-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", [t._v(t._s(e.lbl))])], 1)])
                    })), 1), s("pose-list", {
                        staticClass: "flex flex-col h-full overflow-y-scroll startmenu__shortcut-list"
                    }, t._l(t.recentProgramsInPairs, (function(e, a) {
                        return s("grid-list", {
                            key: a,
                            staticClass: "grid-cols-2"
                        }, t._l(e, (function(e) {
                            return s("grid-item", {
                                key: e.key,
                                attrs: {
                                    as: t.PoseItemShortcut,
                                    icon: e.icon,
                                    text: e.lbl
                                },
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    },
                                    contextmenu: function(s) {
                                        return t.openMenu(s, e.key)
                                    }
                                }
                            })
                        })), 1)
                    })), 1)], 1)
                },
                S = [],
                j = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s(t.as, {
                        tag: "component",
                        staticClass: "grid__item"
                    }, [s("button", t._g({
                        staticClass: "flex flex-col px-4 py-2 w-full h-full font-medium grid__item-button"
                    }, {
                        click: t.emit("click"),
                        contextmenu: t.emit("contextmenu")
                    }), [t.icon && t.text ? [s("base-icon", {
                        staticClass: "grid__item-icon",
                        attrs: {
                            icon: t.icon
                        }
                    }), s("span", {
                        staticClass: "grid__item-text"
                    }, [t._v(t._s(t.text))])] : t._t("default")], 2)])
                },
                G = [],
                I = {
                    props: {
                        as: {
                            type: [String, Function],
                            default: "li"
                        },
                        icon: String,
                        text: String
                    },
                    methods: {
                        emit(t) {
                            return e => this.$emit(t, e)
                        }
                    },
                    components: {
                        BaseIcon: l["a"]
                    }
                },
                M = I,
                E = (s("eef1"), Object(h["a"])(M, j, G, !1, null, null, null)),
                T = E.exports,
                z = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("ul", {
                        staticClass: "gap-2 grid m-0 p-0 grid__list"
                    }, [t._t("default")], 2)
                },
                N = [],
                B = {},
                W = B,
                D = Object(h["a"])(W, z, N, !1, null, null, null),
                U = D.exports;
            const R = {
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: !1,
                        applyAtStart: {
                            display: ""
                        }
                    },
                    hidden: {
                        opacity: 0,
                        y: 100,
                        transition: !1,
                        applyAtEnd: {
                            display: "none"
                        }
                    }
                },
                V = {
                    collapsed: {
                        width: 48,
                        background: "rgba(0,0,0,0)",
                        transition: !1,
                        applyAtStart: {
                            boxShadow: "none"
                        }
                    },
                    expanded: {
                        width: 200,
                        background: "rgba(44,44,44,1)",
                        transition: !1,
                        applyAtEnd: {
                            boxShadow: "2px 0 2px #0003"
                        }
                    }
                };
            var F = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            sideVisible: !1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            },
                            fullList() {
                                return [...this.apps, ...this.programs].sort((t, e) => {
                                    const s = t.lbl.toLowerCase(),
                                        a = e.lbl.toLowerCase();
                                    return s < a ? -1 : s > a ? 1 : 0
                                })
                            },
                            recentProgramsInPairs() {
                                const t = [];
                                for (let e = 0; e < this.recentPrograms.length; e += 2) t.push(this.recentPrograms.slice(e, e + 2));
                                return t
                            }
                        }),
                        ...c["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar
                        }),
                        PoseItemShortcut: () => k["a"].li({
                            visible: {
                                y: 0,
                                transition: !1
                            },
                            visibleAnimated: {
                                y: 0,
                                transition: {
                                    duration: 300
                                }
                            },
                            hidden: {
                                y: 20
                            }
                        }),
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        },
                        poseContainer() {
                            return this.animateTaskbar ? this.isOpen ? "visibleAnimated" : "hiddenAnimated" : this.isOpen ? "visible" : "hidden"
                        },
                        poseSidebar() {
                            return this.animateTaskbar ? this.sideVisible ? "expandedAnimated" : "collapsedAnimated" : this.sideVisible ? "expanded" : "collapsed"
                        }
                    },
                    methods: {
                        togglePowerMenu() {
                            this.showPowerMenu = !this.showPowerMenu
                        },
                        toggleSidebar() {
                            this.sideVisible = !this.sideVisible
                        }
                    },
                    components: {
                        BaseIcon: l["a"],
                        GridList: U,
                        GridItem: T,
                        PoseContainer: k["a"].div({ ...R,
                            visibleAnimated: { ...R.visible,
                                transition: {
                                    duration: 300,
                                    ease: [0, 0, .25, 1]
                                }
                            },
                            hiddenAnimated: { ...R.hidden,
                                transition: {
                                    duration: 100
                                }
                            }
                        }),
                        PoseSidebar: k["a"].div({ ...V,
                            collapsedAnimated: { ...V.collapsed,
                                transition: {
                                    duration: 150
                                }
                            },
                            expandedAnimated: { ...V.expanded,
                                transition: {
                                    duration: 200,
                                    delay: 400
                                }
                            }
                        }),
                        PoseList: k["a"].div({
                            visible: {
                                y: 0,
                                transition: !1
                            },
                            hidden: {
                                y: 0
                            },
                            visibleAnimated: {
                                y: 0,
                                staggerChildren: 10,
                                transition: {
                                    duration: 400,
                                    ease: [0, 0, .25, 1]
                                }
                            },
                            hiddenAnimated: {
                                y: 40
                            }
                        }),
                        PoseItemProgram: k["a"].div({
                            visible: {
                                y: 0,
                                transition: !1
                            },
                            hidden: {
                                y: 0
                            },
                            visibleAnimated: {
                                y: 0,
                                transition: {
                                    duration: 300
                                }
                            },
                            hiddenAnimated: {
                                y: 20
                            }
                        })
                    }
                },
                Y = F,
                X = (s("ea2b"), Object(h["a"])(Y, L, S, !1, null, null, null)),
                q = X.exports,
                H = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("transition", {
                        attrs: {
                            css: t.animateTaskbar,
                            "enter-active-class": "animated fadeInUp fastest",
                            "leave-active-class": "animated fadeOutDown fastest"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "right-1 left-1 absolute flex pointer-events-none startmenu__aligner",
                        class: {
                            "justify-center": t.taskbar.centered
                        }
                    }, [s("div", {
                        staticClass: "rounded-xl pointer-events-auto startmenu__wrapper is-win11",
                        attrs: {
                            id: "start-menu"
                        }
                    }, [s("div", {
                        staticClass: "relative overflow-hidden"
                    }, [s("div", {
                        class: ["p-6 startmenu__pane", {
                            "is-visible": !t.showAll
                        }]
                    }, [s("section", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:swipe",
                            value: t.handleSwipe,
                            expression: "handleSwipe",
                            arg: "swipe"
                        }],
                        staticClass: "relative flex flex-col gap-4 mb-6",
                        on: {
                            wheel: t.handleWheel
                        }
                    }, [s("div", {
                        staticClass: "pr-10 startmenu__pane-title"
                    }, [s("span", [t._v(t._s(t.$t("simu-programs")))]), s("button", {
                        staticClass: "startmenu__all",
                        on: {
                            click: t.toggleShowAllApps
                        }
                    }, [t._v(" " + t._s(t.$t("all-programs")) + " "), s("iconify-icon", {
                        attrs: {
                            icon: "la:angle-right"
                        }
                    })], 1)]), s("div", {
                        staticClass: "overflow-hidden startmenu__grid-wrapper"
                    }, [s("ul", {
                        staticClass: "grid grid-cols-6 startmenu__grid-list",
                        style: {
                            transform: "translateY(calc(-" + (t.currentPage - 1) + " * var(--grid-item-height) * 2))"
                        }
                    }, t._l(t.programs, (function(e) {
                        return s("li", {
                            key: e.key
                        }, [s("button", {
                            staticClass: "flex-col gap-2 p-2 rounded-md startmenu__button",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__button-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", {
                            staticClass: "startmenu__button-label"
                        }, [t._v(t._s(e.lbl))])], 1)])
                    })), 0)]), s("div", {
                        staticClass: "top-1/2 -right-4 absolute center-flex flex-col gap-1"
                    }, t._l(t.totalPageCount, (function(e) {
                        return s("button", {
                            key: e,
                            staticClass: "opacity-50 hover:opacity-80 p-1 hover:scale-150",
                            class: {
                                "scale-150": e === t.currentPage
                            },
                            attrs: {
                                "aria-label": e
                            },
                            on: {
                                click: function(s) {
                                    return t.changePage(e)
                                }
                            }
                        }, [s("span", {
                            staticClass: "block bg-current rounded-full w-[4px] h-[4px]"
                        })])
                    })), 0)]), s("section", {
                        staticClass: "relative flex flex-col gap-4"
                    }, [s("div", {
                        staticClass: "pr-10 startmenu__pane-title"
                    }, [t._v(" " + t._s(t.$t("recently-opened")) + " ")]), s("ul", {
                        staticClass: "grid grid-cols-2 grid-rows-3 startmenu__shortcut-list"
                    }, t._l(t.recentPrograms.slice(0, 6), (function(e) {
                        return s("li", {
                            key: e.key
                        }, [s("button", {
                            staticClass: "gap-4 p-3 rounded-md w-full startmenu__button",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__button-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", {
                            staticClass: "startmenu__button-label"
                        }, [t._v(t._s(e.lbl))])], 1)])
                    })), 0)])]), s("div", {
                        class: ["top-0 left-full absolute pt-6 pl-5 w-full h-full startmenu__pane", {
                            "is-visible": t.showAll
                        }]
                    }, [s("section", {
                        staticClass: "relative flex flex-col gap-4 h-full"
                    }, [s("div", {
                        staticClass: "pr-16 startmenu__pane-title"
                    }, [s("span", [t._v(t._s(t.$t("all-programs")))]), s("button", {
                        staticClass: "startmenu__all",
                        on: {
                            click: t.toggleShowAllApps
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:angle-left"
                        }
                    }), t._v(" " + t._s(t.$t("back")) + " ")], 1)]), s("ul", {
                        staticClass: "flex flex-col mr-1 pr-6 pb-6 h-full overflow-auto startmenu__program-list"
                    }, t._l(t.fullList, (function(e) {
                        return s("li", {
                            key: e.key
                        }, [s("button", {
                            staticClass: "gap-4 p-3 rounded-md w-full startmenu__button",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__button-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", {
                            staticClass: "startmenu__button-label"
                        }, [t._v(t._s(e.lbl))])], 1)])
                    })), 0)])])]), s("div", {
                        staticClass: "relative flex justify-between items-center px-6 py-3 rounded-b-xl startmenu__footer"
                    }, [s("button", {
                        staticClass: "gap-3 px-3 py-1 rounded-md min-w-40 startmenu__button",
                        on: {
                            click: t.openAccounts
                        }
                    }, [s("base-icon", {
                        staticClass: "rounded-full startmenu__button-icon",
                        attrs: {
                            icon: t.photo
                        }
                    }), s("span", {
                        staticClass: "startmenu__button-label"
                    }, [t._v(t._s(t.user ? t.user.displayName : "Guest"))])], 1), s("div", {
                        staticClass: "center-flex-x gap-1"
                    }, [s("button", {
                        staticClass: "justify-center p-0 rounded-md w-11 h-11 text-xl startmenu__button",
                        attrs: {
                            "aria-label": "Open Computer"
                        },
                        on: {
                            click: function(e) {
                                return t.open("computer")
                            }
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:desktop"
                        }
                    })], 1), s("button", {
                        staticClass: "justify-center p-0 rounded-md w-11 h-11 text-xl startmenu__button",
                        attrs: {
                            "aria-label": "Open Control Panel"
                        },
                        on: {
                            click: function(e) {
                                return t.open("cpanel")
                            }
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:cog"
                        }
                    })], 1), s("div", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: function() {
                                return t.showActions = !1
                            },
                            expression: "() => (showActions = false)"
                        }],
                        staticClass: "relative"
                    }, [s("button", {
                        staticClass: "justify-center p-0 rounded-md w-11 h-11 text-xl startmenu__button",
                        attrs: {
                            "aria-label": "Power Options"
                        },
                        on: {
                            click: t.toggleShowActions
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:power-off"
                        }
                    })], 1), s("transition", {
                        attrs: {
                            css: t.animateTaskbar,
                            "enter-active-class": "animated fadeInUpHalf fastest",
                            "leave-active-class": "animated fadeOutDown fastest"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showActions,
                            expression: "showActions"
                        }],
                        staticClass: "bottom-full -left-14 absolute p-1 rounded-md min-w-40 startmenu__menu"
                    }, [s("button", {
                        staticClass: "center-flex-x gap-2 p-2 rounded-md w-full startmenu__button",
                        on: {
                            click: t.logoff
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:sign-out-alt"
                        }
                    }), s("span", [t._v(t._s(t.$t("logoff")))])], 1), s("button", {
                        staticClass: "center-flex-x gap-2 p-2 rounded-md w-full startmenu__button",
                        on: {
                            click: t.shutdown
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:power-off"
                        }
                    }), s("span", [t._v(t._s(t.$t("shutdown")))])], 1), s("button", {
                        staticClass: "center-flex-x gap-2 p-2 rounded-md w-full startmenu__button",
                        on: {
                            click: t.restart
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:redo-alt"
                        }
                    }), s("span", [t._v(t._s(t.$t("restart")))])], 1)])])], 1)])])])])])
                },
                J = [],
                K = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            showActions: !1,
                            currentPage: 1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            taskbar: "taskbar",
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            },
                            fullList() {
                                return [...this.apps, ...this.programs].sort((t, e) => {
                                    const s = t.lbl.toLowerCase(),
                                        a = e.lbl.toLowerCase();
                                    return s < a ? -1 : s > a ? 1 : 0
                                })
                            }
                        }),
                        ...c["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar
                        }),
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        },
                        pageItemCount() {
                            return 12
                        },
                        totalPageCount() {
                            return Math.ceil(this.programs.length / this.pageItemCount)
                        }
                    },
                    watch: {
                        isOpen(t) {
                            t && (this.currentPage = 1, this.showActions = !1, this.showAll = !1)
                        }
                    },
                    methods: {
                        toggleShowActions() {
                            this.showActions = !this.showActions
                        },
                        toggleShowAllApps() {
                            this.showAll = !this.showAll
                        },
                        changePage(t) {
                            this.currentPage = t
                        },
                        scrollPage(t) {
                            "top" === t && this.currentPage < this.totalPageCount && this.currentPage++, "bottom" === t && this.currentPage > 1 && this.currentPage--
                        },
                        handleWheel(t) {
                            t.deltaY > 0 && this.scrollPage("top"), t.deltaY < 0 && this.scrollPage("bottom")
                        },
                        handleSwipe(t) {
                            this.scrollPage(t)
                        }
                    },
                    components: {
                        BaseIcon: l["a"]
                    }
                },
                Q = K,
                Z = (s("ec4d"), Object(h["a"])(Q, H, J, !1, null, null, null)),
                tt = Z.exports,
                et = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("window-main", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        class: ["active startmenu__wrapper is-win31", {
                            maximized: t.maximized
                        }],
                        attrs: {
                            id: "start-menu",
                            centered: !0,
                            draggable: !1,
                            resizable: !1,
                            w: 600,
                            h: 400
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            title: t.$t("progman")
                        }
                    }, [s("window-controls", {
                        attrs: {
                            hideMinimize: "",
                            maximize: t.toggleState,
                            close: t.hide
                        }
                    })], 1), s("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), s("window-body", [s("google-ads"), s("div", {
                        staticClass: "flex flex-wrap gap-1 mt-auto startmenu__group"
                    }, t._l(t.groups, (function(e, a) {
                        return s("button", {
                            key: a,
                            staticClass: "flex flex-col items-center p-0 w-24 text-sm startmenu__group-button",
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.toggleGroup(a)
                                }
                            }
                        }, [s("base-icon", {
                            attrs: {
                                icon: t.icon.programs
                            }
                        }), s("span", {
                            staticClass: "p-0.5 startmenu__group-label"
                        }, [t._v(t._s(t.$t(a)))])], 1)
                    })), 0), t._l(t.openedGroups, (function(e) {
                        return s("window-main", {
                            key: e,
                            class: {
                                maximized: t.groups[e]
                            },
                            attrs: {
                                id: "group-" + e,
                                resizable: !1,
                                h: 250
                            },
                            nativeOn: {
                                click: function(s) {
                                    return t.focusGroup(e)
                                }
                            }
                        }, [s("window-titlebar", {
                            attrs: {
                                title: t.$t(e)
                            }
                        }, [s("window-controls", {
                            attrs: {
                                hideMinimize: "",
                                maximize: t.toggleGroupState(e),
                                close: t.closeGroup(e)
                            }
                        })], 1), s("window-body", [e === t.Group.Recent ? [s("div", {
                            staticClass: "flex flex-wrap gap-1 startmenu__group"
                        }, t._l(t.recentPrograms, (function(e) {
                            return s("button", {
                                key: e.key,
                                staticClass: "flex flex-col items-center p-0 w-24 text-sm startmenu__group-button",
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    }
                                }
                            }, [s("base-icon", {
                                attrs: {
                                    icon: e.icon
                                }
                            }), s("span", {
                                staticClass: "p-0.5 startmenu__group-label"
                            }, [t._v(t._s(e.lbl))])], 1)
                        })), 0)] : e === t.Group.Simu ? [s("div", {
                            staticClass: "flex flex-wrap gap-1 startmenu__group"
                        }, t._l(t.programs, (function(e) {
                            return s("button", {
                                key: e.key,
                                staticClass: "flex flex-col items-center p-0 w-24 text-sm startmenu__group-button",
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    }
                                }
                            }, [s("base-icon", {
                                attrs: {
                                    icon: e.icon
                                }
                            }), s("span", {
                                staticClass: "p-0.5 startmenu__group-label"
                            }, [t._v(t._s(e.lbl))])], 1)
                        })), 0)] : e === t.Group.Games ? [s("div", {
                            staticClass: "flex flex-wrap gap-1 startmenu__group"
                        }, t._l(t.games, (function(e) {
                            return s("button", {
                                key: e.id,
                                staticClass: "flex flex-col items-center p-0 w-24 text-sm startmenu__group-button",
                                on: {
                                    click: function(s) {
                                        return t.open(e.id)
                                    }
                                }
                            }, [s("base-icon", {
                                attrs: {
                                    icon: t.icon[e.id]
                                }
                            }), s("span", {
                                staticClass: "p-0.5 startmenu__group-label"
                            }, [t._v(t._s(e.name))])], 1)
                        })), 0)] : e === t.Group.Android ? [s("div", {
                            staticClass: "flex flex-wrap gap-1 startmenu__group"
                        }, t._l(t.apps, (function(e) {
                            return s("button", {
                                key: e.key,
                                staticClass: "flex flex-col items-center p-0 w-24 text-sm startmenu__group-button",
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    }
                                }
                            }, [s("base-icon", {
                                attrs: {
                                    icon: e.icon
                                }
                            }), s("span", {
                                staticClass: "p-0.5 startmenu__group-label"
                            }, [t._v(t._s(e.lbl))])], 1)
                        })), 0)] : t._e()], 2)], 1)
                    }))], 2)], 1)
                },
                st = [],
                at = s("6a11"),
                nt = s("1521"),
                it = s("e863"),
                ot = s("1d26"),
                rt = s("3cb5"),
                lt = s("e314"),
                ct = s("a6ed"),
                ut = s("f708");
            const pt = {
                Recent: "recently-opened",
                Simu: "simu-programs",
                Games: "games",
                Android: "android-apps"
            };
            var mt = {
                    mixins: [p["a"]],
                    data() {
                        const t = {
                            [pt.Recent]: null,
                            [pt.Simu]: null,
                            [pt.Games]: null
                        };
                        return Object(ut["a"])() && (t[pt.Android] = null), {
                            games: ct["a"],
                            Group: pt,
                            groups: t,
                            openedGroups: [],
                            maximized: !1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            }
                        }),
                        toolbar() {
                            return [{
                                label: this.$t("window"),
                                items: [{
                                    label: this.$t("computer"),
                                    click: () => this.open("computer")
                                }, {
                                    label: this.$t("cpanel"),
                                    click: () => this.open("cpanel"),
                                    hasDivider: !0
                                }, {
                                    label: this.$t("logoff"),
                                    click: this.logoff
                                }, {
                                    label: this.$t("restart"),
                                    click: this.restart
                                }, {
                                    label: this.$t("shutdown"),
                                    click: this.shutdown
                                }]
                            }, {
                                label: this.$t("help"),
                                items: [{
                                    label: this.$t("support"),
                                    click: r["j"]
                                }, {
                                    label: this.$t("about"),
                                    click: () => this.open("about")
                                }]
                            }]
                        }
                    },
                    methods: {
                        _getGroupIndex(t) {
                            return this.openedGroups.indexOf(t)
                        },
                        toggleState() {
                            this.maximized = !this.maximized
                        },
                        hide() {
                            this.$store.commit(C["a"].Start)
                        },
                        toggleGroup(t) {
                            const e = this._getGroupIndex(t) > -1;
                            e ? this.closeGroup(t)() : this.openedGroups.push(t)
                        },
                        toggleGroupState(t) {
                            return () => this.groups[t] = !this.groups[t]
                        },
                        closeGroup(t) {
                            const e = this._getGroupIndex(t);
                            return () => this.openedGroups.splice(e, 1)
                        },
                        focusGroup(t) {
                            const e = this._getGroupIndex(t) === this.openedGroups.length - 1;
                            e || (this.closeGroup(t)(), this.openedGroups.push(t))
                        }
                    },
                    components: {
                        BaseIcon: l["a"],
                        WindowControls: it["a"],
                        WindowTitlebar: lt["a"],
                        WindowMenubar: rt["a"],
                        WindowMain: ot["a"],
                        WindowBody: nt["a"],
                        GoogleAds: at["a"]
                    }
                },
                dt = mt,
                ht = (s("8c3f"), Object(h["a"])(dt, et, st, !1, null, null, null)),
                _t = ht.exports,
                bt = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bottom-10 absolute text-black startmenu__wrapper is-win2k",
                        attrs: {
                            id: "start-menu"
                        }
                    }, [t._m(0), s("winui-menu", {
                        staticClass: "z-0 relative w-52 can-hover startmenu__menu"
                    }, [s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.about
                        }
                    }), s("button", {
                        on: {
                            click: function(e) {
                                return t.open("about")
                            }
                        }
                    }, [t._v(t._s(t.$t("about")))])], 1), s("hr"), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.programs
                        }
                    }), s("button", [t._v(t._s(t.$t("programs")))]), s("winui-menu", {
                        staticClass: "w-56 max-h-72 overflow-auto"
                    }, t._l(t.fullList, (function(e) {
                        return s("winui-menuitem", {
                            key: e.key,
                            staticClass: "text-sm"
                        }, [s("base-icon", {
                            attrs: {
                                icon: e.icon
                            }
                        }), s("button", {
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [t._v(t._s(e.lbl))])], 1)
                    })), 1)], 1), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon["folder-docs"]
                        }
                    }), s("button", {
                        on: {
                            click: function(e) {
                                return t.open("computer")
                            }
                        }
                    }, [t._v(t._s(t.$t("documents")))])], 1), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.cpanel
                        }
                    }), s("button", {
                        on: {
                            click: function(e) {
                                return t.open("cpanel")
                            }
                        }
                    }, [t._v(t._s(t.$t("cpanel")))])], 1), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.about
                        }
                    }), s("button", {
                        on: {
                            click: t.openHelp
                        }
                    }, [t._v(t._s(t.$t("help")))])], 1), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.run
                        }
                    }), s("button", {
                        on: {
                            click: function(e) {
                                return t.open("run")
                            }
                        }
                    }, [t._v(t._s(t.$t("run")))])], 1), s("hr"), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.accounts
                        }
                    }), s("button", {
                        on: {
                            click: t.switchUser
                        }
                    }, [t._v(t._s(t.$t("switch-user")))])], 1), s("winui-menuitem", {
                        staticClass: "startmenu__program-item"
                    }, [s("base-icon", {
                        staticClass: "startmenu__program-icon",
                        attrs: {
                            icon: t.icon.shutdown
                        }
                    }), s("button", [t._v(t._s(t.$t("shutdown")) + "...")]), s("winui-menu", {
                        staticClass: "w-56"
                    }, [s("winui-menuitem", [s("button", {
                        on: {
                            click: t.shutdown
                        }
                    }, [t._v(t._s(t.$t("shutdown")))])]), s("winui-menuitem", [s("button", {
                        on: {
                            click: t.restart
                        }
                    }, [t._v(t._s(t.$t("restart")))])]), s("winui-menuitem", [s("button", {
                        on: {
                            click: t.logoff
                        }
                    }, [t._v(t._s(t.$t("logoff")))])])], 1)], 1)], 1)], 1)
                },
                ft = [function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "bottom-1.5 left-0.5 z-1 absolute p-1 text-white whitespace-nowrap startmenu__banner"
                    }, [s("b", [t._v("Windows")]), t._v(" 7 "), s("b", [t._v("Simulator")])])
                }],
                gt = {
                    mixins: [p["a"]],
                    computed: { ...Object(u["f"])({
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            }
                        }),
                        fullList() {
                            return [...this.apps, ...this.programs].sort((t, e) => {
                                const s = t.lbl.toLowerCase(),
                                    a = e.lbl.toLowerCase();
                                return s < a ? -1 : s > a ? 1 : 0
                            })
                        }
                    },
                    components: {
                        BaseIcon: l["a"]
                    }
                },
                wt = gt,
                vt = (s("1731"), Object(h["a"])(wt, bt, ft, !1, null, null, null)),
                xt = vt.exports,
                Ct = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("pose-div", {
                        staticClass: "bottom-10 absolute flex flex-col items-start text-white startmenu__wrapper is-kubuntu",
                        attrs: {
                            id: "start-menu",
                            pose: t.isOpen ? "visible" : "hidden"
                        }
                    }, [s("div", {
                        staticClass: "center-flex-x justify-between px-3 py-2 border-0 border-white/20 border-b border-solid w-full startmenu__top"
                    }, [s("button", {
                        staticClass: "flex items-center gap-3 px-2 py-0",
                        on: {
                            click: t.openAccounts
                        }
                    }, [s("base-icon", {
                        staticClass: "rounded-full startmenu__program-icon",
                        attrs: {
                            icon: t.photo
                        }
                    }), s("label", [t._v(t._s(t.user ? t.user.displayName : "Guest"))])], 1), s("winui-searchbox", {
                        staticClass: "border-white/10 w-80",
                        attrs: {
                            instant: "",
                            placeholder: t.$t("search") + " " + t.$t("programs")
                        },
                        on: {
                            input: t.search
                        }
                    })], 1), s("div", {
                        staticClass: "flex startmenu__body"
                    }, [s("div", {
                        staticClass: "p-3 border-0 border-white/20 border-r border-solid w-64 h-full overflow-auto startmenu__program-list shrink-0"
                    }, t._l(t.searchList, (function(e) {
                        return s("button", {
                            key: e.key,
                            staticClass: "relative flex items-center gap-3 px-2 py-1 border border-transparent border-solid rounded w-full overflow-hidden text-sm text-left whitespace-nowrap startmenu__program-item",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__program-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", {
                            staticClass: "startmenu__program-label"
                        }, [t._v(t._s(e.lbl))])], 1)
                    })), 0), s("div", {
                        staticClass: "content-start grid grid-cols-4 p-3 w-full overflow-auto startmenu__grid-list"
                    }, t._l(t.recentPrograms, (function(e) {
                        return s("button", {
                            key: e.key,
                            staticClass: "relative flex flex-col items-center gap-1 p-2 border border-transparent border-solid rounded text-sm text-center startmenu__grid-item",
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                },
                                contextmenu: function(s) {
                                    return t.openMenu(s, e.key)
                                }
                            }
                        }, [s("base-icon", {
                            staticClass: "startmenu__grid-icon",
                            attrs: {
                                icon: e.icon
                            }
                        }), s("span", {
                            staticClass: "startmenu__grid-label"
                        }, [t._v(t._s(e.lbl))])], 1)
                    })), 0)]), s("div", {
                        staticClass: "relative flex justify-end gap-2 p-2 border border-white/20 border-r-0 border-l-0 border-solid w-full startmenu__bottom"
                    }, [s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: function(e) {
                                return t.open("computer")
                            }
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:file"
                        }
                    }), s("span", [t._v(t._s(t.$t("documents")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: function(e) {
                                return t.open("cpanel")
                            }
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:cog"
                        }
                    }), s("span", [t._v(t._s(t.$t("settings")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.restart
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:redo-alt"
                        }
                    }), s("span", [t._v(t._s(t.$t("restart")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.shutdown
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:power-off"
                        }
                    }), s("span", [t._v(t._s(t.$t("shutdown")))])], 1), s("button", {
                        staticClass: "startmenu__button",
                        on: {
                            click: t.logoff
                        }
                    }, [s("iconify-icon", {
                        attrs: {
                            icon: "la:sign-out-alt"
                        }
                    })], 1)])])
                },
                kt = [],
                yt = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            searchList: []
                        }
                    },
                    computed: { ...Object(u["f"])({
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            },
                            fullList() {
                                return [...this.apps, ...this.programs].sort((t, e) => {
                                    const s = t.lbl.toLowerCase(),
                                        a = e.lbl.toLowerCase();
                                    return s < a ? -1 : s > a ? 1 : 0
                                })
                            }
                        }),
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        }
                    },
                    async mounted() {
                        this.searchList = this.fullList.slice(0)
                    },
                    methods: {
                        search(t) {
                            const {
                                value: e
                            } = t.target;
                            e ? (this.all = !0, this.searchList = this.searchList.filter(t => t.lbl.toLowerCase().includes(e.toLowerCase()))) : (this.all = !1, this.searchList = this.fullList.slice(0))
                        }
                    },
                    components: {
                        BaseIcon: l["a"],
                        PoseDiv: k["a"].div({
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 100
                                },
                                applyAtStart: {
                                    display: ""
                                }
                            },
                            hidden: {
                                opacity: 0,
                                y: 100,
                                transition: {
                                    duration: 200
                                },
                                applyAtEnd: {
                                    display: "none"
                                }
                            }
                        })
                    }
                },
                $t = yt,
                Pt = (s("1d01"), Object(h["a"])($t, Ct, kt, !1, null, null, null)),
                Ot = Pt.exports,
                At = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "bottom-10 absolute flex flex-col w-96 startmenu__wrapper is-winxp",
                        attrs: {
                            id: "start-menu"
                        }
                    }, [s("div", {
                        staticClass: "startmenu__region-top p-1.5"
                    }, [s("base-avatar", {
                        staticClass: "flex items-center gap-3 text-left",
                        attrs: {
                            canClick: "",
                            size: 48,
                            src: t.photo
                        },
                        on: {
                            click: t.openAccounts
                        }
                    }, [s("span", {
                        staticClass: "w-full overflow-hidden font-semibold text-white text-lg text-ellipsis startmenu__name"
                    }, [t._v(" " + t._s(t.name) + " ")])])], 1), s("div", {
                        staticClass: "flex startmenu__region-main"
                    }, [s("div", {
                        staticClass: "relative p-1.5 w-1/2 startmenu__left"
                    }, [t._l(t.recentPrograms.slice(0, 7), (function(e) {
                        return s("start-program", {
                            key: e.key,
                            attrs: {
                                program: e
                            },
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                }
                            }
                        })
                    })), s("hr", {
                        staticClass: "m-auto mb-1 startmenu__divider"
                    }), s("div", {
                        staticClass: "relative startmenu__nav"
                    }, [s("button", {
                        staticClass: "flex justify-center items-center w-full font-bold text-sm startmenu__program-item startmenu__all"
                    }, [s("span", [t._v(t._s(t.$t("all-programs")))]), s("img", {
                        staticClass: "startmenu__all-icon",
                        attrs: {
                            src: t.icon.arrow
                        }
                    })]), s("div", {
                        staticClass: "hidden bottom-0 z-1 absolute bg-white w-60 h-72 overflow-auto startmenu__menu"
                    }, t._l(t.fullList, (function(e) {
                        return s("start-program", {
                            key: e.key,
                            attrs: {
                                program: e
                            },
                            on: {
                                click: function(s) {
                                    return t.open(e.key)
                                }
                            }
                        })
                    })), 1)])], 2), s("div", {
                        staticClass: "p-1.5 w-1/2 startmenu__right"
                    }, [t._l(t.shortcuts, (function(e) {
                        return [s("start-program", {
                            key: e.key,
                            class: ["py-2", e.class],
                            attrs: {
                                program: e
                            },
                            on: {
                                click: e.action
                            }
                        }), e.hasDivider ? s("hr", {
                            key: e.key + "-divider",
                            staticClass: "m-auto mb-1 w-3/4 startmenu__divider"
                        }) : t._e()]
                    }))], 2)]), s("div", {
                        staticClass: "startmenu__region-bottom flex justify-end items-center p-1"
                    }, [s("button", {
                        staticClass: "flex items-center gap-1 p-1 text-white text-xs startmenu__button is-restart",
                        on: {
                            click: t.restart
                        }
                    }, [s("span", {
                        staticClass: "startmenu__button-iconbox"
                    }, [s("base-icon", {
                        staticClass: "startmenu__button-icon",
                        attrs: {
                            icon: t.icon.restart
                        }
                    })], 1), s("span", [t._v(t._s(t.$t("restart")))])]), s("button", {
                        staticClass: "flex items-center gap-1 p-1 text-white text-xs startmenu__button is-logoff",
                        on: {
                            click: t.logoff
                        }
                    }, [s("span", {
                        staticClass: "startmenu__button-iconbox"
                    }, [s("base-icon", {
                        staticClass: "startmenu__button-icon",
                        attrs: {
                            icon: t.icon.logoff
                        }
                    })], 1), s("span", [t._v(t._s(t.$t("logoff")))])]), s("button", {
                        staticClass: "flex items-center gap-1 p-1 text-white text-xs startmenu__button is-shutdown",
                        on: {
                            click: t.shutdown
                        }
                    }, [s("span", {
                        staticClass: "startmenu__button-iconbox"
                    }, [s("base-icon", {
                        staticClass: "startmenu__button-icon",
                        attrs: {
                            icon: t.icon.shutdown
                        }
                    })], 1), s("span", [t._v(t._s(t.$t("turnoff")))])])])])
                },
                Lt = [],
                St = s("c453"),
                jt = s("5c9b"),
                Gt = s("51e6"),
                It = {
                    mixins: [p["a"]],
                    computed: { ...Object(u["f"])({
                            systemPath: "systemPath",
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            },
                            fullList() {
                                return [...this.apps, ...this.programs].sort((t, e) => {
                                    const s = t.lbl.toLowerCase(),
                                        a = e.lbl.toLowerCase();
                                    return s < a ? -1 : s > a ? 1 : 0
                                })
                            }
                        }),
                        userPath() {
                            return `${this.systemPath}/Users/${this.user?this.user.uid:"Guest"}`
                        },
                        name() {
                            return this.user ? this.user.displayName : "Guest"
                        },
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        },
                        shortcuts() {
                            return [{
                                key: "documents",
                                lbl: this.$t("documents"),
                                icon: this.icon["folder-docs"],
                                action: () => this.open("computer", this.userPath + "/Documents"),
                                class: "is-bold"
                            }, {
                                key: "pictures",
                                lbl: this.$t("pictures"),
                                icon: this.icon["folder-pics"],
                                action: () => this.open("computer", this.userPath + "/Pictures"),
                                class: "is-bold"
                            }, {
                                key: "music",
                                lbl: this.$t("music"),
                                icon: this.icon["folder-music"],
                                action: () => this.open("computer", this.userPath + "/Music"),
                                class: "is-bold"
                            }, {
                                key: "computer",
                                lbl: this.$t("computer"),
                                icon: this.icon.computer,
                                action: () => this.open("computer"),
                                class: "is-bold",
                                hasDivider: !0
                            }, {
                                key: "cpanel",
                                lbl: this.$t("cpanel"),
                                icon: this.icon.cpanel,
                                action: () => this.open("cpanel")
                            }, {
                                key: "programs",
                                lbl: this.$t("default-programs"),
                                icon: this.icon.default,
                                action: () => Object(Gt["launchSetting"])(x["a"].ACTION_MANAGE_DEFAULT_APPS_SETTINGS),
                                hasDivider: !0
                            }, {
                                key: "help",
                                lbl: this.$t("help") + " " + this.$t("and") + " " + this.$t("support"),
                                icon: this.icon.help,
                                action: r["j"]
                            }, {
                                key: "run",
                                lbl: this.$t("run"),
                                icon: this.icon.run,
                                action: () => this.open("run")
                            }]
                        }
                    },
                    methods: {},
                    components: {
                        BaseAvatar: St["b"],
                        BaseIcon: l["a"],
                        StartProgram: jt["a"]
                    }
                },
                Mt = It,
                Et = (s("5dd0"), Object(h["a"])(Mt, At, Lt, !1, null, null, null)),
                Tt = Et.exports,
                zt = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("transition", {
                        attrs: {
                            css: t.animateTaskbar,
                            "enter-active-class": "animated fadeIn fastest",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        class: ["top-0 right-0 left-0 fixed flex flex-col text-white startmenu__wrapper is-win8", t.overflowClass],
                        style: "background-image: url(" + t.bg + ")",
                        attrs: {
                            id: "start-screen",
                            tabindex: "-1"
                        }
                    }, [s("div", {
                        staticClass: "flex justify-between items-center px-16 pt-12"
                    }, [s("span", {
                        staticClass: "font-thin text-6xl"
                    }, [t._v("Start")]), s("div", {
                        staticClass: "relative startmenu__account"
                    }, [s("button", {
                        ref: "accountButton",
                        staticClass: "flex items-center gap-3 p-3 text-white transition-transform startmenu__button"
                    }, [s("span", {
                        staticClass: "overflow-hidden text-3xl text-ellipsis whitespace-nowrap startmenu__name"
                    }, [t._v(" " + t._s(t.user ? t.user.displayName : "Guest") + " ")]), s("img", {
                        staticClass: "startmenu__avatar",
                        attrs: {
                            src: t.photo,
                            width: "40",
                            height: "40"
                        }
                    })]), s("ul", {
                        staticClass: "hidden top-full right-0 absolute bg-white py-2 border border-black/80 border-solid text-black startmenu__menu"
                    }, [s("li", [s("button", {
                        staticClass: "startmenu__menu-button",
                        on: {
                            click: t.openAccounts
                        }
                    }, [t._v(t._s(t.$t("manage-accounts")))])]), s("li", [s("button", {
                        staticClass: "startmenu__menu-button",
                        on: {
                            click: t.logoff
                        }
                    }, [t._v(t._s(t.$t("logoff")))])]), s("li", [s("button", {
                        staticClass: "startmenu__menu-button",
                        on: {
                            click: t.restart
                        }
                    }, [t._v(t._s(t.$t("restart")))])]), s("li", [s("button", {
                        staticClass: "startmenu__menu-button",
                        on: {
                            click: t.shutdown
                        }
                    }, [t._v(t._s(t.$t("shutdown")))])])])])]), s("pose-container", {
                        ref: "grid",
                        class: ["flex gap-16 pt-20 pl-16 h-full", t.overflowClass],
                        attrs: {
                            pose: t.pose
                        },
                        on: {
                            poseComplete: function(e) {
                                t.isAnimating = !1
                            }
                        }
                    }, [s("pose-list", [s("grid-list", [s("grid-item", {
                        staticClass: "relative col-span-2 is-desktop",
                        on: {
                            click: t.hide
                        }
                    }, [s("desktop-background", {
                        staticClass: "top-0 left-0 absolute w-full h-full",
                        attrs: {
                            src: t.desktop.url,
                            isAnimated: t.desktop.isAnimated
                        }
                    }), s("span", {
                        staticClass: "relative grid__item-text"
                    }, [t._v(t._s(t.$t("desktop")))])], 1), s("grid-item", {
                        staticClass: "is-computer",
                        attrs: {
                            icon: t.icon.computer,
                            text: t.$t("computer")
                        },
                        on: {
                            click: function(e) {
                                return t.open("computer")
                            }
                        }
                    }), s("grid-item", {
                        staticClass: "is-cpanel",
                        attrs: {
                            icon: t.icon.cpanel,
                            text: t.$t("cpanel")
                        },
                        on: {
                            click: function(e) {
                                return t.open("cpanel")
                            }
                        }
                    })], 1)], 1), t._l(Math.ceil(t.programs.length / 6), (function(e) {
                        return s("pose-list", {
                            key: e
                        }, [s("grid-list", {
                            staticClass: "has-programs"
                        }, t._l(t.programs.slice(6 * (e - 1), 6 * e), (function(e) {
                            return s("grid-item", {
                                key: e.key,
                                attrs: {
                                    icon: e.icon,
                                    text: e.lbl
                                },
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    },
                                    contextmenu: function(s) {
                                        return t.openMenu(s, e.key)
                                    }
                                }
                            })
                        })), 1)], 1)
                    })), t._l(Math.ceil(t.apps.length / 6), (function(e) {
                        return s("pose-list", {
                            key: e
                        }, [s("grid-list", {
                            staticClass: "has-programs"
                        }, t._l(t.apps.slice(6 * (e - 1), 6 * e), (function(e) {
                            return s("grid-item", {
                                key: e.key,
                                attrs: {
                                    icon: e.icon,
                                    text: e.lbl
                                },
                                on: {
                                    click: function(s) {
                                        return t.open(e.key)
                                    }
                                }
                            })
                        })), 1)], 1)
                    }))], 2)], 1)])
                },
                Nt = [],
                Bt = s("de84");
            const Wt = {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: !1
            };
            var Dt = {
                    mixins: [p["a"]],
                    data() {
                        return {
                            isAnimating: !1
                        }
                    },
                    computed: { ...Object(u["f"])({
                            background: "background",
                            assets: t => t.assets.assetStore,
                            programs({
                                programs: t
                            }) {
                                return t.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.icon[t]
                                }))
                            }
                        }),
                        ...c["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar
                        }),
                        photo() {
                            const {
                                assetStore: t
                            } = this.$store.state.assets;
                            if (!this.user) return Object(r["a"])(t.accs, "guest");
                            const e = this.user.photoURL;
                            return Object(r["e"])(e) ? e : Object(r["a"])(t.accs, e || "admin")
                        },
                        bg() {
                            return Object(r["a"])(this.assets.bgs, "win8-startscreen")
                        },
                        desktop() {
                            return Object(r["l"])(this.background || this.themeData.bg)
                        },
                        overflowClass() {
                            return this.isAnimating ? "overflow-hidden" : "overflow-auto"
                        },
                        pose() {
                            return this.isOpen ? this.animateTaskbar ? "visibleAnimated" : "visible" : "hidden"
                        }
                    },
                    watch: {
                        async isOpen(t) {
                            this.isAnimating = !0, t && (await this.$nextTick(), this.$el.focus())
                        }
                    },
                    mounted() {
                        const t = this.$refs.grid.$el;
                        t.addEventListener("wheel", e => {
                            e.preventDefault(), t.scrollBy({
                                left: e.deltaY + e.deltaX
                            })
                        })
                    },
                    methods: {
                        hide() {
                            this.$store.commit(C["a"].Start, !1)
                        }
                    },
                    components: {
                        GridList: U,
                        GridItem: T,
                        DesktopBackground: Bt["a"],
                        PoseContainer: k["a"].div({
                            visible: {
                                scale: 1,
                                transition: !1
                            },
                            visibleAnimated: {
                                scale: 1,
                                delayChildren: 200,
                                staggerChildren: 40
                            },
                            hidden: {
                                scale: .8
                            }
                        }),
                        PoseList: k["a"].div({
                            visible: Wt,
                            visibleAnimated: { ...Wt,
                                transition: {
                                    duration: 300,
                                    ease: [0, 0, .25, 1],
                                    x: {
                                        delay: 40
                                    }
                                }
                            },
                            hidden: {
                                opacity: 0,
                                scale: .8,
                                x: 40,
                                y: 20
                            }
                        })
                    }
                },
                Ut = Dt,
                Rt = (s("7d74"), Object(h["a"])(Ut, zt, Nt, !1, null, null, null)),
                Vt = Rt.exports,
                Ft = {
                    computed: { ...Object(u["f"])({
                            theme: "theme"
                        }),
                        isWinXp() {
                            return /^winxp|^winL|winW/.test(this.theme)
                        }
                    },
                    components: {
                        StartChrome: b,
                        StartLaunchpad: O,
                        StartMenu: A["a"],
                        StartMenu31: _t,
                        StartMenu9x: xt,
                        StartMenuXp: Tt,
                        StartMenu10: q,
                        StartMenu11: tt,
                        StartScreen: Vt,
                        StartMenuKubuntu: Ot
                    }
                },
                Yt = Ft,
                Xt = Object(h["a"])(Yt, a, n, !1, null, null, null);
            e["default"] = Xt.exports
        },
        a102: function(t, e, s) {},
        a6ed: function(t, e, s) {
            "use strict";
            e["a"] = [{
                id: "chess",
                name: "Chess Titans"
            }, {
                id: "minesweeper",
                name: "Minesweeper"
            }, {
                id: "purbleplace",
                name: "Purble Place"
            }, {
                id: "solitaire",
                name: "Solitaire"
            }, {
                id: "tetris",
                name: "Classic Tetris",
                creator: "Albert Lobo"
            }]
        },
        afdb: function(t, e, s) {},
        b599: function(t, e, s) {},
        b7d4: function(t, e, s) {},
        d510: function(t, e, s) {},
        ea2b: function(t, e, s) {
            "use strict";
            s("7842")
        },
        ec4d: function(t, e, s) {
            "use strict";
            s("8c17")
        },
        eef1: function(t, e, s) {
            "use strict";
            s("183c")
        },
        fb21: function(t, e, s) {}
    }
]);