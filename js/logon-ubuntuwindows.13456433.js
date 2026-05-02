(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["logon-ubuntu~windows", "capacitor-noti"], {
        "3eac": function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return a
            })), s.d(e, "b", (function() {
                return n
            }));
            var i = s("2f62");
            const a = "windowsManager",
                n = Object(i["a"])(a);
            e["c"] = {
                namespaced: !0,
                state() {
                    return {}
                },
                getters: {
                    hasMaximizedWindows: (t, e, s) => s.windows.some(t => t.maximized && !t.minimized)
                },
                mutations: {},
                actions: {}
            }
        },
        "47a6": function(t, e, s) {
            "use strict";
            s("985b")
        },
        "4d96": function(t, e, s) {
            "use strict";
            s("9b5c")
        },
        "646f": function(t, e, s) {
            "use strict";
            s("7e5f")
        },
        "6ac3": function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, "PushNotifications", (function() {
                return a
            }));
            var i = s("1547");
            const a = Object(i["d"])("PushNotifications", {})
        },
        "7e5f": function(t, e, s) {},
        "895b": function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return t.isMacos ? s("menubar-mac", t._b({}, "menubar-mac", t.$attrs, !1)) : t.isUbuntu ? s("menubar-ubuntu", t._b({}, "menubar-ubuntu", t.$attrs, !1)) : s("taskbar-base")
                },
                a = [],
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "relative center-flex-x justify-between px-2 taskbar__wrapper is-macos",
                        attrs: {
                            id: "menubar"
                        }
                    }, [s("div", {
                        staticClass: "center-flex-x h-full taskbar__main"
                    }, [s("div", {
                        staticClass: "taskbar__main-item"
                    }, [s("button", {
                        staticClass: "relative px-5 h-full text-white taskbar-item",
                        attrs: {
                            "aria-label": "Apple menu"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleMenu(e)
                            }
                        }
                    }, [s("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "fa:apple"
                        }
                    })], 1), s("winui-menu", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activePopup === t.menuId,
                            expression: "activePopup === menuId"
                        }],
                        staticClass: "p-2 rounded-lg"
                    }, t._l(t.menuItems, (function(e, i) {
                        return s("winui-menuitem", {
                            key: i,
                            class: {
                                "has-divider": [1, 2].includes(i)
                            }
                        }, [s("button", {
                            on: {
                                click: e.click
                            }
                        }, [t._v(t._s(e.text))])])
                    })), 1)], 1), t.activeWindow ? s("button", {
                        staticClass: "relative px-2 py-0 h-full font-bold text-white text-sm taskbar__main-item"
                    }, [t._v(" " + t._s(t.activeWindowTitle) + " ")]) : t._e()]), s("div", {
                        staticClass: "center-flex-x h-full taskbar__tray"
                    }, [s("taskbar-action-center", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-network", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-battery", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-volume", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-datetime", {
                        staticClass: "taskbar__tray-item is-datetime"
                    })], 1)])
                },
                o = [],
                c = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-item", {
                        on: {
                            click: t.handleClick
                        }
                    }, [s("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    })], 1), s("taskbar-notification")], 1)
                },
                r = [],
                l = s("58cd"),
                u = s("88e5"),
                m = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeIn faster",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, [s("winui-balloon", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isVisible,
                            expression: "isVisible"
                        }],
                        class: ["right-0 is-left absolute flex gap-2 w-[360px] taskbar__notification", t.directionClasses],
                        attrs: {
                            "data-test-system-notification": ""
                        }
                    }, [s("base-icon", {
                        staticClass: "taskbar__notification-icon",
                        attrs: {
                            icon: t.icon
                        }
                    }), t.notification.body ? s("div", [s("text-instruction", {
                        staticClass: "taskbar__notification-title"
                    }, [t._v(t._s(t.notification.title))]), s("pre", {
                        staticClass: "whitespace-pre-wrap taskbar__notification-body",
                        domProps: {
                            innerHTML: t._s(t.parseInline(t.notification.body))
                        }
                    })], 1) : t._e(), s("button", {
                        staticClass: "top-0 right-0 absolute opacity-60 hover:opacity-100 p-0 w-8 h-8 font-mono text-2xl cursor-pointer taskbar__notification-close",
                        on: {
                            click: t.handleClick
                        }
                    }, [t._v(" × ")])], 1)], 1)
                },
                d = [],
                h = s("2f62"),
                b = s("6ac3"),
                p = s("0d26"),
                f = s("b69c"),
                k = s("968c"),
                w = s("9224"),
                v = s("0f35");
            const _ = "lastDismissedVersion",
                g = {
                    title: "New updates installed",
                    body: "Congratulations! Win7 Simu has received new updates, you are on the latest version.\nCheck out the [changelog](https://visnalize.com/win7simu/changelog) to see what's new.",
                    data: {
                        type: "success"
                    }
                },
                x = {
                    async get() {
                        await Object(v["q"])(2e3);
                        const t = await k["default"].local.get(_);
                        return t === w["a"] ? null : g
                    },
                    dismiss() {
                        k["default"].local.update(_, null, w["a"])
                    }
                };
            var $ = x,
                y = s("f708"),
                C = s("7c5c"),
                I = {
                    data() {
                        return {
                            isVisible: !1,
                            notification: {}
                        }
                    },
                    computed: { ...Object(h["f"])({
                            theme: "theme"
                        }),
                        ...Object(h["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            var t, e;
                            return null !== (t = this.notification) && void 0 !== t && null !== (e = t.data) && void 0 !== e && e.type ? this.themeData.icon["notifi-" + this.notification.data.type] : null
                        },
                        directionClasses() {
                            return ["macos", "ubuntu"].includes(this.theme) ? "is-bottom top-full" : "is-top bottom-full"
                        }
                    },
                    async mounted() {
                        if (p["default"].enabled && p["default"].get("notification")) return this.notification = {
                            title: "Test Notification",
                            body: "This is a test notification for development purposes.",
                            data: {
                                type: "success"
                            }
                        }, void(this.isVisible = !0);
                        if (Object(y["a"])()) b["PushNotifications"].addListener("pushNotificationReceived", t => {
                            this.notification = t, this.isVisible = !0
                        });
                        else {
                            const t = await $.get();
                            t && (this.notification = t, this.isVisible = !0)
                        }
                    },
                    beforeDestroy() {
                        Object(y["a"])() && b["PushNotifications"].removeAllListeners()
                    },
                    methods: {
                        parseInline: C["parseInline"],
                        handleClick() {
                            this.isVisible = !1, !Object(y["a"])() && !p["default"].enabled && $.dismiss()
                        }
                    },
                    components: {
                        BaseIcon: l["a"],
                        TextInstruction: f["a"]
                    }
                },
                P = I,
                O = (s("47a6"), s("2877")),
                T = Object(O["a"])(P, m, d, !1, null, null, null),
                M = T.exports,
                W = {
                    computed: { ...Object(h["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            return this.themeData.icon["action-center"]
                        }
                    },
                    methods: {
                        handleClick() {}
                    },
                    components: {
                        BaseIcon: l["a"],
                        TaskbarItem: u["a"],
                        TaskbarNotification: M
                    }
                },
                j = W,
                D = Object(O["a"])(j, c, r, !1, null, null, null),
                S = D.exports,
                z = s("a88c"),
                B = s("4e5e"),
                N = s("e0ee"),
                V = s("c561"),
                E = s("6792"),
                A = s("01b4"),
                L = s("2b0e"),
                R = s("6bf2"),
                U = t => L["default"].extend({
                    props: {
                        isLogon: Boolean
                    },
                    data() {
                        return {
                            menuId: t,
                            activeWindow: null,
                            unsubscribe: null
                        }
                    },
                    computed: { ...Object(h["f"])({
                            activePopup: "activePopup"
                        }),
                        activeWindowTitle() {
                            if (/^(game|web)_/.test(this.activeWindow)) {
                                const [, ...t] = this.activeWindow.split("_");
                                return t.filter(t => !Number(t) && t.length < 13).join(" ")
                            }
                            return this.$t(this.activeWindow)
                        },
                        menuPowerItems() {
                            return [{
                                text: this.$t("restart"),
                                click: () => this.changeView("Restart")
                            }, {
                                text: this.$t("shutdown"),
                                click: () => this.changeView("Shutdown")
                            }]
                        },
                        menuItems() {
                            const t = [{
                                text: this.$t("settings"),
                                click: () => this.open("cpanel")
                            }, {
                                text: this.$t("about"),
                                click: () => this.open("about")
                            }, {
                                text: `${this.$t("help")} ${this.$t("and")} ${this.$t("support")}`,
                                click: v["j"]
                            }, {
                                text: this.$t("account"),
                                click: () => {
                                    this.$store.commit(A["a"].WindowLocation, "accounts"), this.open("cpanel")
                                }
                            }, {
                                text: this.$t("logoff"),
                                click: async () => {
                                    await (this.$store.state.user ? R["c"].logout() : Promise.resolve()), this.changeView("Switch"), this.$store.commit(A["a"].User, null)
                                }
                            }, ...this.menuPowerItems];
                            return this.isLogon ? this.menuPowerItems : t
                        }
                    },
                    mounted() {
                        this.unsubscribe = this.$store.subscribe((t, e) => {
                            const {
                                WindowFocus: s,
                                WindowAdd: i,
                                WindowRemove: a
                            } = A["a"];
                            if ([s, i].includes(t.type) && (this.activeWindow = t.payload), t.type === a) {
                                const {
                                    windows: t
                                } = e;
                                this.activeWindow = t.length ? t.find(e => e.index === t.length).id : null
                            }
                        })
                    },
                    beforeDestroy() {
                        this.unsubscribe()
                    },
                    methods: {
                        open(t) {
                            this.$root.$emit(E["c"].OpenWindow, t), this.toggleMenu()
                        },
                        toggleMenu() {
                            this.$store.commit(A["a"].Popup, this.activePopup === this.menuId ? null : this.menuId)
                        },
                        changeView(t) {
                            this.$bus.$emit("changeView", {
                                view: t
                            }), this.toggleMenu()
                        }
                    }
                }),
                H = {
                    mixins: [U("macos-menu")],
                    data() {
                        return {}
                    },
                    components: {
                        TaskbarActionCenter: S,
                        TaskbarBattery: z["a"],
                        TaskbarDatetime: B["a"],
                        TaskbarNetwork: N["a"],
                        TaskbarVolume: V["a"]
                    }
                },
                F = H,
                q = (s("646f"), Object(O["a"])(F, n, o, !1, null, null, null)),
                J = q.exports,
                G = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "relative center-flex-x text-white taskbar__wrapper is-ubuntu",
                        attrs: {
                            id: "menubar"
                        }
                    }, [t.isLogon ? t._e() : s("div", {
                        staticClass: "flex justify-between items-center w-full h-full taskbar__main"
                    }, [s("div", {
                        staticClass: "center-flex-x"
                    }, [s("div", {
                        staticClass: "px-2 py-1"
                    }, [t._v("Activities")]), t.activeWindow ? s("button", {
                        staticClass: "px-2 py-0 h-full font-bold text-white"
                    }, [t._v(" " + t._s(t.activeWindowTitle) + " ")]) : t._e()]), s("taskbar-datetime", {
                        staticClass: "relative center-flex-x h-full taskbar__main-item is-datetime"
                    })], 1), s("div", {
                        staticClass: "flex justify-end items-center w-full h-full taskbar__tray"
                    }, [t.isLogon ? t._e() : [s("taskbar-action-center", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-network", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-battery", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-volume", {
                        staticClass: "taskbar__tray-item"
                    })], s("div", {
                        staticClass: "taskbar__tray-item"
                    }, [s("button", {
                        staticClass: "py-2 text-white taskbar-item",
                        attrs: {
                            "aria-label": "System menu"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleMenu(e)
                            }
                        }
                    }, [s("iconify-icon", {
                        staticClass: "text-[14px] leading-[16px]",
                        attrs: {
                            icon: "fa:power-off"
                        }
                    })], 1), s("winui-menu", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activePopup === t.menuId,
                            expression: "activePopup === menuId"
                        }],
                        staticClass: "top-full right-0 m-1 p-2"
                    }, t._l(t.menuItems, (function(e, i) {
                        return s("winui-menuitem", {
                            key: i,
                            class: {
                                "has-divider": [2, 3].includes(i)
                            }
                        }, [s("button", {
                            on: {
                                click: e.click
                            }
                        }, [t._v(t._s(e.text))])])
                    })), 1)], 1)], 2)])
                },
                K = [],
                X = {
                    mixins: [U("ubuntu-menu")],
                    data() {
                        return {}
                    },
                    components: {
                        TaskbarActionCenter: S,
                        TaskbarBattery: z["a"],
                        TaskbarDatetime: B["a"],
                        TaskbarNetwork: N["a"],
                        TaskbarVolume: V["a"]
                    }
                },
                Y = X,
                Q = (s("d51f"), Object(O["a"])(Y, G, K, !1, null, null, null)),
                Z = Q.exports,
                tt = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        staticClass: "bottom-0 left-0 fixed flex w-full taskbar__wrapper",
                        class: {
                            "is-centered": t.taskbar.centered, "is-maximized": t.hasMaximizedWindows
                        },
                        attrs: {
                            id: "taskbar",
                            "data-test-taskbar": ""
                        },
                        on: {
                            contextmenu: t.openMenu
                        }
                    }, [s("taskbar-menu", {
                        attrs: {
                            offset: t.menuOffset
                        }
                    }), s("start-button"), s("transition-group", {
                        ref: "container",
                        staticClass: "flex gap-0.5 w-full taskbar__main",
                        attrs: {
                            id: "taskbar-items",
                            tag: "div",
                            css: t.animateTaskbar,
                            "enter-active-class": "animated fadeIn faster",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, t._l(Object.keys(t.items), (function(e) {
                        return s("taskbar-item", {
                            key: e,
                            ref: "items",
                            refInFor: !0,
                            class: ["taskbar__main-item", {
                                "is-opened": t.items[e],
                                "is-active": t.isActive(e)
                            }],
                            attrs: {
                                "data-target": e
                            },
                            on: {
                                click: function(s) {
                                    t.items[e] ? t.toggle(e) : t.open(e)
                                },
                                contextmenu: t.openItemMenu
                            }
                        }, [s("base-icon", {
                            staticClass: "taskbar__main-icon",
                            attrs: {
                                id: e,
                                icon: t.getIcon(e)
                            }
                        })], 1)
                    })), 1), s("transition", {
                        attrs: {
                            css: t.fadeMenus,
                            "enter-active-class": "animated fadeInUpHalf fastest",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, [Object.keys(t.items).includes(t.activeItem) ? s("taskbar-popup", {
                        staticClass: "taskbar__main-popup",
                        style: t.menuOffset
                    }, [s("div", {
                        staticClass: "bg-white p-1.5 popup-menu"
                    }, [t.items[t.activeItem] ? t._e() : s("taskbar-popup-button", {
                        attrs: {
                            icon: t.getIcon(t.activeItem),
                            label: t.$t("open")
                        },
                        on: {
                            click: function(e) {
                                return t.open(t.activeItem)
                            }
                        }
                    }), t.pins.includes(t.activeItem) ? s("taskbar-popup-button", {
                        attrs: {
                            icon: t.getIcon("pin"),
                            label: t.$t("unpin-taskbar")
                        },
                        on: {
                            click: t.togglePin
                        }
                    }) : s("taskbar-popup-button", {
                        attrs: {
                            icon: t.getIcon("pin"),
                            label: t.$t("pin-taskbar")
                        },
                        on: {
                            click: t.togglePin
                        }
                    }), t.items[t.activeItem] ? s("taskbar-popup-button", {
                        attrs: {
                            icon: t.getIcon("close"),
                            label: t.$t("close") + " " + t.$t("window").toLowerCase()
                        },
                        on: {
                            click: t.close
                        }
                    }) : t._e()], 1)]) : t._e()], 1), s("div", {
                        staticClass: "flex items-center taskbar__tray",
                        attrs: {
                            id: "taskbar-tray"
                        }
                    }, [s("taskbar-action-center", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-network", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-battery", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-volume", {
                        staticClass: "taskbar__tray-item"
                    }), s("taskbar-datetime", {
                        staticClass: "taskbar__tray-item is-datetime"
                    }), s("taskbar-desktop", {
                        staticClass: "taskbar__tray-item is-desktop"
                    })], 1)], 1)
                },
                et = [],
                st = s("26a1"),
                it = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        class: [t.id, {
                            inactive: !t.showMenu
                        }],
                        style: t.menuOffset,
                        attrs: {
                            items: t.items
                        }
                    })
                },
                at = [],
                nt = s("0d94"),
                ot = s("a7cf");
            const ct = "taskbar-menu";
            var rt = {
                    mixins: [ot["a"]],
                    props: {
                        offset: Object
                    },
                    data() {
                        return {
                            id: ct,
                            menuOffset: null,
                            subOffset: null
                        }
                    },
                    computed: { ...Object(h["f"])({
                            activePopup: "activePopup"
                        }),
                        showMenu() {
                            return this.activePopup === this.id
                        },
                        items() {
                            return [{
                                label: this.$t("toolbar"),
                                click: () => {},
                                disabled: !0,
                                hasDivider: !0
                            }, {
                                label: this.$t("cascade-windows"),
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("stack-windows"),
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("side-windows"),
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("show-desktop"),
                                click: this.showDesktop,
                                hasDivider: !0
                            }, {
                                label: this.$t("taskmgr"),
                                click: this.openTaskmgr,
                                test: "taskmgr"
                            }, {
                                label: this.$t("properties"),
                                click: this.openProperties,
                                test: "properties"
                            }]
                        }
                    },
                    watch: {
                        offset(t) {
                            if (!t) return;
                            const {
                                offsetWidth: e
                            } = this.$el, {
                                offsetWidth: s,
                                offsetHeight: i
                            } = this.$root.$el, {
                                x: a,
                                y: n
                            } = t;
                            this.menuOffset = {
                                left: (a + e < s ? a : a - e) + "px",
                                bottom: i - n + "px"
                            }, this.subOffset = {
                                left: a + 2 * e > s ? "initial" : "100%",
                                right: a + 2 * e > s ? "100%" : ""
                            }
                        }
                    },
                    methods: {
                        showDesktop(t) {
                            const {
                                windows: e
                            } = this.$store.state;
                            e.forEach(({
                                id: t
                            }) => {
                                this.$store.commit(A["a"].WindowUpdate, {
                                    id: t,
                                    minimized: !0
                                })
                            }), this.mixinHidePopups(t)
                        },
                        openTaskmgr(t) {
                            this.$root.$emit(E["c"].OpenWindow, "taskmgr"), this.mixinHidePopups(t)
                        },
                        openProperties(t) {
                            this.$root.$emit(E["c"].OpenWindow, "taskbar"), this.mixinHidePopups(t)
                        },
                        mixinHidePopups(t) {
                            this.hidePopups(t)
                        }
                    },
                    components: {
                        BaseMenu: nt["a"]
                    }
                },
                lt = rt,
                ut = Object(O["a"])(lt, it, at, !1, null, null, null),
                mt = ut.exports,
                dt = s("554d"),
                ht = s("2159"),
                bt = s("1404"),
                pt = s("c386"),
                ft = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        staticClass: "flex items-center gap-2 hover:bg-black/10 p-1 border border-transparent border-solid w-full overflow-hidden text-base whitespace-nowrap popup-button",
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [s("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    }), s("span", [t._v(t._s(t.label))])], 1)
                },
                kt = [],
                wt = {
                    props: {
                        icon: {
                            type: String,
                            required: !0
                        },
                        label: {
                            type: String,
                            required: !0
                        }
                    },
                    components: {
                        BaseIcon: l["a"]
                    }
                },
                vt = wt,
                _t = Object(O["a"])(vt, ft, kt, !1, null, null, null),
                gt = _t.exports,
                xt = s("3eac"),
                $t = s("0fbc"),
                yt = {
                    data() {
                        return {
                            items: this.loadItems(),
                            menuOffset: null,
                            containerSize: 0,
                            activeItemMenu: !1,
                            unsubscribe: null
                        }
                    },
                    computed: { ...Object(h["f"])({
                            theme: "theme",
                            taskbar: "taskbar",
                            apps: t => t.misc.apps,
                            pins: "pinnedPrograms",
                            activeItem: "activePopup",
                            games: "onlineGames",
                            shortcuts: "shortcuts"
                        }),
                        ...Object(h["d"])({
                            themeData: "themeData",
                            isRtl: "isRtl"
                        }),
                        ...xt["b"].mapGetters(["hasMaximizedWindows"]),
                        ...dt["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar,
                            fadeMenus: t => t.fadeMenus
                        })
                    },
                    watch: {
                        items() {
                            this.$nextTick().then(() => {
                                !/win11/.test(this.theme) && this.isBloated() && this.die()
                            })
                        }
                    },
                    mounted() {
                        this.getMaxSize(), this.unsubscribe = this.$store.subscribe(t => {
                            t.type === A["a"].Theme && this.getMaxSize(), (t.type.includes("pin") || t.type.includes("Window")) && (this.items = this.loadItems()), t.type !== A["a"].Popup || t.payload || (this.activeItemMenu = !1)
                        })
                    },
                    beforeDestroy() {
                        this.unsubscribe()
                    },
                    methods: {
                        getIcon(t) {
                            if (t) {
                                if (t.startsWith("game_")) {
                                    const e = this.games.find(e => e.id === t);
                                    return e && e.icon
                                }
                                if (t.startsWith("web_")) {
                                    const e = this.shortcuts.find(e => e.key === t);
                                    return e && e.icon
                                }
                                return t.startsWith("message_") ? this.themeData.icon.fileexplorer : Object(v["c"])(t) ? Object($t["c"])(this.apps[t].icon) : this.themeData.icon[t]
                            }
                        },
                        getMaxSize() {
                            this.$nextTick().then(() => {
                                const {
                                    container: t
                                } = this.$refs;
                                this.containerSize = t ? t.offsetWidth : this.containerSize
                            })
                        },
                        isActive(t) {
                            const {
                                windows: e
                            } = this.$store.state, s = e.find(e => e.id === t), i = !!s && (s.index === e.length && !s.minimized);
                            return this.activeItem === t || i
                        },
                        isBloated() {
                            const t = (t, {
                                    $el: e
                                }) => t + e.offsetWidth + parseFloat(getComputedStyle(e).marginRight),
                                e = this.$refs.items.reduce(t, 0);
                            return e > this.containerSize
                        },
                        die() {
                            this.$bus.$emit("changeView", {
                                view: "Bsod",
                                error: "LEAKED_TASKBAR"
                            })
                        },
                        loadItems() {
                            const {
                                pinnedPrograms: t,
                                windows: e
                            } = this.$store.state, s = this.items || {}, i = e.map(t => t.id);
                            return t.forEach(t => s[t] = !1), i.forEach(t => s[t] = !0), Object.keys(s).forEach(e => {
                                [...t, ...i].includes(e) || delete s[e]
                            }), { ...s
                            }
                        },
                        open(t) {
                            this.$root.$emit(E["c"].OpenWindow, t), this.closeMenu()
                        },
                        close() {
                            this.$root.$emit(E["c"].CloseWindow, this.activeItem), this.closeMenu()
                        },
                        toggle(t) {
                            const {
                                windows: e
                            } = this.$store.state, s = e.find(e => e.id === t);
                            s.locked || (s.minimized ? (this.$store.commit(A["a"].WindowUpdate, {
                                id: t,
                                minimized: !1
                            }), this.$store.commit(A["a"].WindowFocus, t)) : s.index === e.length ? this.$store.commit(A["a"].WindowUpdate, {
                                id: t,
                                minimized: !0
                            }) : this.$store.commit(A["a"].WindowFocus, t))
                        },
                        togglePin() {
                            const {
                                activeItem: t
                            } = this, e = this.pins.includes(t) ? A["a"].ProgramUnpin : A["a"].ProgramPin;
                            this.$store.dispatch(e, t), this.closeMenu()
                        },
                        openMenu(t) {
                            const e = t.target.closest("." + ct),
                                s = t.target.closest(st["d"]),
                                i = t.target.closest(st["f"]);
                            if (this.activeItemMenu || e || s || i) return;
                            t.preventDefault(), t.stopPropagation();
                            const a = t.clientX || t.touches[0].clientX,
                                n = t.clientY || t.touches[0].clientY;
                            this.menuOffset = {
                                x: a,
                                y: n
                            }, this.$store.commit(A["a"].Popup, ct)
                        },
                        openItemMenu(t) {
                            t.preventDefault(), t.stopPropagation();
                            const e = 240,
                                s = window.innerWidth,
                                {
                                    target: i
                                } = t.target.dataset,
                                {
                                    x: a,
                                    width: n
                                } = t.target.getBoundingClientRect(),
                                o = a - e / 2 + n / 2,
                                c = this.isRtl ? o + e > s : o < 0,
                                r = this.isRtl ? s - e : 0;
                            this.menuOffset = {
                                width: e + "px",
                                left: (c ? r : o) + "px"
                            }, this.$store.commit(A["a"].Popup, i), this.activeItemMenu = !0
                        },
                        closeMenu() {
                            this.$store.commit(A["a"].Popup, null)
                        }
                    },
                    components: {
                        TaskbarMenu: mt,
                        TaskbarDesktop: bt["a"],
                        TaskbarBattery: z["a"],
                        TaskbarDatetime: B["a"],
                        TaskbarNetwork: N["a"],
                        StartButton: ht["a"],
                        TaskbarItem: u["a"],
                        TaskbarPopup: pt["a"],
                        TaskbarPopupButton: gt,
                        TaskbarActionCenter: S,
                        TaskbarVolume: V["a"],
                        BaseIcon: l["a"]
                    }
                },
                Ct = yt,
                It = (s("4d96"), Object(O["a"])(Ct, tt, et, !1, null, null, null)),
                Pt = It.exports,
                Ot = s("e47c"),
                Tt = {
                    computed: { ...Object(h["f"])({
                            globalTheme: "theme"
                        }),
                        ...Ot["d"].mapState({
                            bootTheme: "bootTheme"
                        }),
                        theme() {
                            return this.globalTheme || this.bootTheme
                        },
                        isMacos() {
                            return this.theme && this.theme.startsWith("mac")
                        },
                        isUbuntu() {
                            return "ubuntu" === this.theme
                        }
                    },
                    components: {
                        TaskbarBase: Pt,
                        MenubarMac: J,
                        MenubarUbuntu: Z
                    }
                },
                Mt = Tt,
                Wt = Object(O["a"])(Mt, i, a, !1, null, null, null);
            e["a"] = Wt.exports
        },
        9224: function(t) {
            t.exports = JSON.parse('{"a":"4.3.0"}')
        },
        "985b": function(t, e, s) {},
        "9b5c": function(t, e, s) {},
        a7cf: function(t, e, s) {
            "use strict";
            var i = s("26a1"),
                a = s("01b4"),
                n = s("2b0e");
            e["a"] = n["default"].extend({
                methods: {
                    hidePopups(t) {
                        if (!t || !t.target) return;
                        const e = t.target;
                        e.closest(i["f"]) || this.$store.commit(a["a"].Popup, null), e.closest(i["d"]) || e.closest(".startbutton-wrapper") || this.$store.commit(a["a"].Start, !1)
                    }
                }
            })
        },
        d51f: function(t, e, s) {
            "use strict";
            s("fdfe")
        },
        fdfe: function(t, e, s) {}
    }
]);