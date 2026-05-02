(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["windows", "hotkey"], {
        "06c4": function(t, e, s) {
            "use strict";
            s("e874")
        },
        "0bd9": function(t, e, s) {},
        2141: function(t, e, s) {
            "use strict";
            s("0bd9")
        },
        "22b9": function(t, e, s) {
            "use strict";
            s("af50")
        },
        "246c": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "z-0 relative w-screen h-screen overflow-hidden",
                        attrs: {
                            id: "main",
                            "data-show-dummy-cursor": "",
                            "data-test-main-screen": ""
                        },
                        on: {
                            click: t.hidePopups
                        }
                    }, [s("desktop-background", {
                        staticClass: "-z-1 absolute pointer-events-none is-main",
                        attrs: {
                            src: t.parsedBg.url,
                            isAnimated: t.parsedBg.isAnimated
                        }
                    }), t.saverType ? s("screen-saver", {
                        staticClass: "main__screensaver",
                        attrs: {
                            type: t.saverType
                        }
                    }) : t._e(), s("main-desktop"), s("main-taskbar"), s("start-menu"), s("sponsor-ads", {
                        attrs: {
                            type: "slidein"
                        }
                    })], 1)
                },
                n = [],
                o = s("bbbd"),
                r = s("0f35"),
                a = s("2f62"),
                c = s("de84"),
                l = s("6792"),
                h = function() {
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
                        ref: "desktop",
                        staticClass: "top-0 left-0 absolute w-screen h-screen desktop__wrapper",
                        attrs: {
                            id: "desktop"
                        },
                        on: {
                            contextmenu: t.openMenu
                        }
                    }, [s("div", {
                        ref: "iconList",
                        staticClass: "z-0 absolute w-full h-full desktop__icon-list",
                        style: t.desktopStyle,
                        attrs: {
                            id: "desktop-icons"
                        }
                    }, t._l(t.items, (function(e, i) {
                        return s("item-icon", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.showIcons,
                                expression: "showIcons"
                            }],
                            key: e.key,
                            ref: "iconItems",
                            refInFor: !0,
                            attrs: {
                                item: e,
                                index: i,
                                renaming: t.renameItem === e.key
                            },
                            on: {
                                rename: t.toggleRenaming,
                                outclick: t.handleClickOutside
                            }
                        })
                    })), 1), t.showAds ? s("purchase-sub") : t._e(), s("desktop-menu", {
                        attrs: {
                            offset: t.menuOffset
                        },
                        on: {
                            refresh: t.refresh
                        }
                    }), s("desktop-item-menu", {
                        attrs: {
                            data: t.itemMenuData
                        },
                        on: {
                            rename: t.toggleRenaming
                        }
                    }), s("explorer-menu", {
                        attrs: {
                            data: t.explorerMenuData
                        }
                    }), s("explorer-item-menu", {
                        attrs: {
                            data: t.explorerItemMenuData
                        }
                    }), s("scrollbar-menu", {
                        attrs: {
                            data: t.scrollbarMenuData
                        }
                    }), s("desktop-dock"), s("transition-group", {
                        staticClass: "fragment",
                        attrs: {
                            css: t.animateWindows,
                            tag: "div",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, t._l(t.windows, (function(e) {
                        return s(t.getComponent(e.id), {
                            key: e.id,
                            tag: "component"
                        })
                    })), 1), t._l(t.gadgets, (function(t) {
                        return s("gadget-" + t.component, {
                            key: t.id,
                            tag: "component",
                            attrs: {
                                id: t.id,
                                "data-test-desktop-gadget": t.id
                            }
                        })
                    }))], 2)
                },
                d = [],
                u = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        class: {
                            inactive: !t.showMenu
                        },
                        style: t.menuOffset,
                        attrs: {
                            items: t.items
                        }
                    })
                },
                p = [],
                m = s("0e9a"),
                g = s("51e6"),
                b = s("0d94"),
                S = s("01b4"),
                f = s("4cca"),
                v = s("0fbc"),
                y = s("f708"),
                w = s("6271"),
                D = s("2b0e"),
                P = s("f106"),
                _ = s("9a72"),
                I = s("a080"),
                k = D["default"].extend({
                    mixins: [_["a"]],
                    computed: Object(a["f"])(["desktopPath"]),
                    methods: {
                        async download(t) {
                            const {
                                name: e,
                                ext: s
                            } = Object(m["r"])(t), i = await P["a"].read(t);
                            Object(m["b"])(e + "." + s, s, i), P["a"].revoke(i), this.closeMenu()
                        },
                        async extractHere(t) {
                            this.closeMenu(), this.emitProgress({
                                title: "Extracting",
                                header: "Extracting " + Object(m["c"])(t),
                                message: this.$t("wait")
                            });
                            try {
                                const e = Object(f["f"])(t),
                                    s = await P["a"].unzip(t);
                                await Object(r["n"])(Object.keys(s), t => {
                                    const i = Object(I["d"])(s, t),
                                        n = 1 === t.split("/").filter(Boolean).length,
                                        o = !i || t.endsWith("/"),
                                        a = o ? t.slice(0, -1) : t;
                                    if (n && e === this.desktopPath) return this.$store.dispatch(S["a"].ShortcutAdd, {
                                        lbl: o ? Object(m["c"])(a) : a,
                                        icon: o ? "folder" : Object(f["e"])(a),
                                        key: o ? "folder" : Object(f["b"])(a),
                                        type: o ? "folder" : "file",
                                        data: i
                                    }); {
                                        const t = o ? Object(m["c"])(a) : a,
                                            s = `${e}/${t}`;
                                        return Object(r["f"])(i) ? P["a"].mkdir(s) : P["a"].write(i, s)
                                    }
                                }), this.$store.commit(S["a"].ForceUpdate)
                            } catch (e) {
                                this.emitError(e.message || e)
                            }
                            this.dismissProgress()
                        },
                        closeMenu() {
                            this.showMenu = !1
                        }
                    }
                }),
                x = s("a7cf"),
                E = {
                    mixins: [k, w["a"], _["a"], x["a"]],
                    props: {
                        data: Object
                    },
                    data() {
                        return {
                            showMenu: null !== this.data,
                            type: null,
                            shortcut: null,
                            isPinned: !1,
                            isSystem: !1,
                            isApp: !1,
                            canPin: !1,
                            menuOffset: null
                        }
                    },
                    computed: { ...Object(a["f"])({
                            trash: "trash"
                        }),
                        list() {
                            const t = Object.keys(this.apps).map(t => ({
                                    key: t,
                                    lbl: this.apps[t].label,
                                    icon: Object(v["c"])(this.apps[t].icon)
                                })),
                                e = this.programs.map(t => ({
                                    key: t,
                                    lbl: this.$t(t),
                                    icon: this.themeData.icon[t]
                                }));
                            return [...e, ...t]
                        },
                        items() {
                            return [{
                                label: this.$t("open"),
                                bold: !0,
                                click: this.open,
                                test: "open"
                            }, "bin" === this.type && {
                                label: this.$t("empty-bin"),
                                click: this.emptyBin,
                                icon: "bin",
                                disabled: 0 === this.trash.length,
                                test: "emptybin"
                            }, {
                                label: this.$t(this.isPinned ? "unpin-taskbar" : "pin-taskbar"),
                                click: this.togglePin,
                                disabled: !this.canPin,
                                hasDivider: !0,
                                test: this.isPinned ? "unpin" : "pin"
                            }, {
                                label: this.$t("extract-here"),
                                click: () => this.extractHere(this.shortcut.path),
                                hidden: !this.shortcut || !this.shortcut.path || !Object(m["d"])(this.shortcut.path),
                                hasDivider: !0,
                                test: "extract-here"
                            }, {
                                label: this.$t("send-to") + " Desktop",
                                click: this.createShortcut,
                                hidden: this.shortcut || this.isSystem,
                                hasDivider: !0,
                                test: "sendto"
                            }, Object(y["e"])() && {
                                label: this.$t("download"),
                                click: () => this.download(this.shortcut.path),
                                hidden: !this.isDownloadable,
                                test: "download"
                            }, {
                                label: this.$t("cut"),
                                click: this.cutShortcut,
                                hidden: this.isLimited,
                                test: "cut"
                            }, {
                                label: this.$t("copy"),
                                click: this.copyShortcut,
                                hidden: this.isLimited,
                                hasDivider: !0,
                                test: "copy"
                            }, {
                                label: this.$t("delete"),
                                click: this.deleteShortcut,
                                disabled: this.isSystem,
                                hidden: !this.shortcut,
                                test: "delete"
                            }, {
                                label: this.$t("rename"),
                                click: this.renameShortcut,
                                disabled: this.isSystem,
                                hidden: !this.shortcut,
                                hasDivider: !0,
                                test: "rename"
                            }, {
                                label: this.$t("properties"),
                                click: this.showProperties,
                                disabled: !this.isApp,
                                test: "properties"
                            }].filter(Boolean)
                        },
                        isLimited() {
                            return !this.shortcut || this.isSystem
                        },
                        isDownloadable() {
                            if (this.isLimited) return !1;
                            const {
                                ext: t
                            } = Object(m["r"])(this.shortcut.path);
                            return t && "lnk" !== t
                        }
                    },
                    watch: {
                        data(t) {
                            if (this.showMenu = null !== t, !t) return;
                            const {
                                x: e,
                                y: s,
                                id: i
                            } = t;
                            this.type = i.split("-")[0], this.isPinned = this.pinnedPrograms.includes(this.type), this.isSystem = ["computer", "bin"].includes(i), this.isApp = Object(r["c"])(this.type), this.shortcut = this.getShortcut(i), this.canPin = !this.shortcut || this.shortcut && !this.shortcut.path;
                            const {
                                offsetWidth: n,
                                offsetHeight: o
                            } = this.$el, {
                                offsetWidth: a,
                                offsetHeight: c
                            } = this.$parent.$el;
                            this.menuOffset = {
                                left: (e + n < a ? e : e - n) + "px",
                                top: (s + o < c ? s : s - o) + "px"
                            }
                        }
                    },
                    methods: { ...o["e"].mapActions([o["b"].ProgramEvent]),
                        open(t) {
                            this.openItem(this.shortcut || this.type), this.hidePopups(t), this.mixinCloseMenu()
                        },
                        async emptyBin() {
                            try {
                                const t = this.trash.map(t => this.$store.dispatch(S["a"].TrashRemove, t.path));
                                await Promise.all(t), this[o["b"].ProgramEvent](o["c"].Explorer.EmptyBin)
                            } catch (t) {
                                Object(g["showToast"])(t.message || t)
                            }
                            this.mixinCloseMenu()
                        },
                        createShortcut() {
                            let t = this.list.find(t => t.key === this.type);
                            const e = Object(m["h"])(t.icon) ? t.icon : t.key;
                            t = { ...t,
                                lbl: Object(f["a"])(t.lbl + ".lnk", this.shortcuts),
                                icon: e,
                                data: JSON.stringify({
                                    exe: t.key,
                                    icon: e
                                }),
                                type: "shortcut"
                            }, this.$store.dispatch(S["a"].ShortcutAdd, t), this.mixinCloseMenu()
                        },
                        cutShortcut() {
                            this.$store.commit(S["a"].ClipboardItem, {
                                path: this.shortcut.path,
                                action: "cut"
                            }), this.mixinCloseMenu()
                        },
                        copyShortcut() {
                            this.$store.commit(S["a"].ClipboardItem, {
                                path: this.shortcut.path,
                                action: "copy"
                            }), this.mixinCloseMenu()
                        },
                        deleteShortcut() {
                            this.$store.dispatch(S["a"].ShortcutRemove, this.shortcut), this.mixinCloseMenu()
                        },
                        renameShortcut() {
                            this.$emit("rename", this.data.id), this.mixinCloseMenu()
                        },
                        showProperties() {
                            Object(g["launchSetting"])(this.type)
                        },
                        togglePin() {
                            this.canPin && (this.isPinned ? this.$store.dispatch(S["a"].ProgramUnpin, this.type) : this.$store.dispatch(S["a"].ProgramPin, this.type), this.mixinCloseMenu())
                        },
                        mixinCloseMenu() {
                            this.closeMenu()
                        }
                    },
                    components: {
                        BaseMenu: b["a"]
                    }
                },
                O = E,
                $ = s("2877"),
                M = Object($["a"])(O, u, p, !1, null, null, null),
                A = M.exports,
                T = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        class: ["can-hover", {
                            inactive: !t.showMenu
                        }],
                        style: t.menuOffset,
                        attrs: {
                            items: t.items,
                            subStyle: t.subOffset,
                            "data-test-desktop-menu": ""
                        }
                    })
                },
                L = [],
                C = s("743b"),
                j = s("8b77"),
                N = {
                    mixins: [j["a"]],
                    props: {
                        offset: Object
                    },
                    data() {
                        const {
                            sizeIcons: t,
                            showIcons: e,
                            autoIcons: s
                        } = this.$store.state.desktop;
                        return {
                            sizeIcons: t,
                            showIcons: e,
                            autoIcons: s,
                            menuOffset: null,
                            subOffset: null,
                            sizeOption: e => ({
                                type: "radio",
                                id: "icon-size-" + e,
                                name: "icon-size",
                                value: e,
                                checked: t === e
                            }),
                            showOption: {
                                type: "checkbox",
                                id: "show-icons",
                                checked: e
                            },
                            autoOption: {
                                type: "checkbox",
                                id: "auto-icons",
                                checked: s
                            }
                        }
                    },
                    computed: {
                        items() {
                            return [{
                                label: this.$t("view"),
                                test: "view",
                                children: [{
                                    label: this.$t("lg-icons"),
                                    option: this.sizeOption("lg"),
                                    test: "view-iconLg",
                                    click: () => this.sizeIcons = "lg"
                                }, {
                                    label: this.$t("md-icons"),
                                    option: this.sizeOption("md"),
                                    test: "view-iconMd",
                                    click: () => this.sizeIcons = "md"
                                }, {
                                    label: this.$t("sm-icons"),
                                    option: this.sizeOption("sm"),
                                    test: "view-iconSm",
                                    click: () => this.sizeIcons = "sm",
                                    hasDivider: !0
                                }, {
                                    label: this.$t("auto-desktop-icons"),
                                    option: this.autoOption,
                                    test: "view-autoIcons",
                                    click: () => this.autoIcons = !this.autoIcons,
                                    hasDivider: !0
                                }, {
                                    label: this.$t("show-desktop-icons"),
                                    option: this.showOption,
                                    test: "view-showIcons",
                                    click: () => this.showIcons = !this.showIcons
                                }]
                            }, {
                                label: this.$t("refresh"),
                                click: this.refresh,
                                hasDivider: !0,
                                test: "refresh"
                            }, {
                                label: this.$t("paste"),
                                disabled: !this.clipboardItem,
                                click: () => this.paste(this.desktopPath),
                                test: "paste"
                            }, {
                                label: this.$t("copy-path"),
                                click: () => this.copyPath(this.desktopPath),
                                test: "copypath"
                            }, {
                                label: this.$t("upload-files-here"),
                                click: () => this.upload(this.desktopPath),
                                test: "upload",
                                hasDivider: !0
                            }, {
                                label: this.$t("new"),
                                hasDivider: !0,
                                test: "new",
                                children: [{
                                    label: this.$t("folder"),
                                    icon: "folder-s",
                                    click: () => this.makeFolder(this.desktopPath),
                                    test: "new-folder"
                                }, {
                                    label: this.$t("shortcut"),
                                    icon: "shortcut",
                                    click: this.makeShortcut,
                                    hasDivider: !0,
                                    test: "new-shortcut"
                                }, {
                                    label: this.$t("rich-text-document"),
                                    icon: "wordpad",
                                    click: () => this.makeRichtext(this.desktopPath),
                                    test: "new-richtext"
                                }, {
                                    label: this.$t("text-document"),
                                    icon: "text-s",
                                    click: () => this.makeText(this.desktopPath),
                                    test: "new-text"
                                }]
                            }, {
                                label: this.$t("display"),
                                icon: "display-s",
                                click: this.showDisplay,
                                test: "display"
                            }, {
                                label: this.$t("gadgets"),
                                icon: "gadgets-s",
                                click: this.showGadgets,
                                test: "gadgets"
                            }, {
                                label: this.$t("personalize"),
                                icon: "personal-s",
                                click: this.showPersonal,
                                test: "personalize"
                            }]
                        }
                    },
                    watch: {
                        offset(t) {
                            if (this.showMenu = null !== t, !t) return;
                            const {
                                offsetWidth: e,
                                offsetHeight: s
                            } = this.$el, {
                                offsetWidth: i,
                                offsetHeight: n
                            } = this.$parent.$el, {
                                x: o,
                                y: r
                            } = t;
                            this.menuOffset = {
                                left: (o + e < i ? o : o - e) + "px",
                                top: (r + s < n ? r : r - s) + "px"
                            }, this.subOffset = {
                                left: o + 2 * e > i ? "initial" : "100%",
                                right: o + 2 * e > i ? "100%" : ""
                            }
                        },
                        sizeIcons(t) {
                            this[C["a"].SetIconSize](t), this.closeMenu()
                        },
                        showIcons(t) {
                            this[C["a"].SetIconShow](t), this.closeMenu()
                        },
                        autoIcons(t) {
                            this[C["a"].SetIconAuto](t), this.closeMenu()
                        }
                    },
                    methods: { ...C["c"].mapActions([C["a"].SetIconSize, C["a"].SetIconShow, C["a"].SetIconAuto]),
                        refresh() {
                            this.$store.commit(S["a"].ForceUpdate), this.$emit("refresh"), this.closeMenu()
                        },
                        makeShortcut() {
                            this.$root.$emit(l["c"].OpenWindow, "shortcut"), this.closeMenu()
                        },
                        showDisplay() {
                            this.$store.commit(S["a"].WindowLocation, "display"), this.$root.$emit(l["c"].OpenWindow, "cpanel"), this.closeMenu()
                        },
                        showGadgets() {
                            this.$root.$emit(l["c"].OpenWindow, "gadgets"), this.closeMenu()
                        },
                        showPersonal() {
                            this.$root.$emit(l["c"].OpenWindow, "personalize"), this.closeMenu()
                        }
                    },
                    components: {
                        BaseMenu: b["a"]
                    }
                },
                z = N,
                R = Object($["a"])(z, T, L, !1, null, null, null),
                V = R.exports;

            function K(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t
            }
            const H = (t, e) => {
                    const s = e;
                    window.addEventListener("resize", s), window.addEventListener("scroll", s);
                    const i = new MutationObserver(s),
                        n = new ResizeObserver(s);
                    t.forEach((t, e) => {
                        i.observe(t, {
                            childList: 0 !== e,
                            attributes: !0
                        }), t instanceof Element && n.observe(t)
                    });
                    const o = () => {
                        window.removeEventListener("resize", s), window.removeEventListener("scroll", s), i.disconnect(), n.disconnect()
                    };
                    return {
                        observer: i,
                        resizeObserver: n,
                        callback: s,
                        cleanup: o
                    }
                },
                W = (t, e) => {
                    let s;
                    return (...i) => {
                        const n = () => {
                            s = void 0, t(...i)
                        };
                        clearTimeout(s), s = setTimeout(n, e)
                    }
                },
                B = t => {
                    const e = (t, s = 0) => {
                        var i;
                        const n = null === (i = t[s]) || void 0 === i ? void 0 : i.parentNode;
                        return n ? (t.push(n), s++, e(t, s)) : t
                    };
                    return e([t])
                },
                Z = (t, e) => {
                    if (t instanceof Document) return {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    const s = t.getBoundingClientRect();
                    return {
                        top: s.top,
                        left: s.left,
                        bottom: s.bottom,
                        right: s.right,
                        width: (t.clientWidth || s.width) * e,
                        height: (t.clientHeight || s.height) * e
                    }
                },
                F = ({
                    computedStyle: t,
                    node: e
                }) => {
                    const {
                        position: s
                    } = t, i = "absolute" === s || "relative" === s || "fixed" === s;
                    e instanceof Document || i || (e.style.position = "relative")
                },
                U = (t, e, s = 1) => {
                    if (null === e || void 0 === e || !e.length || !t) return;
                    const i = document && document.documentElement && document.documentElement.scrollTop && document.documentElement,
                        n = t instanceof Document ? i || document.body : t,
                        o = e.includes("top") && n.scrollTop > 0,
                        r = e.includes("bottom") && n.scrollTop < n.scrollHeight,
                        a = e.includes("left") && n.scrollLeft > 0,
                        c = e.includes("right") && n.scrollLeft < n.scrollWidth;
                    o && (n.scrollTop -= 1 * s), r && (n.scrollTop += 1 * s), a && (n.scrollLeft -= 1 * s), c && (n.scrollLeft += 1 * s)
                };
            class G {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "_observers", void 0), K(this, "_node", void 0), K(this, "_parentNodes", void 0), K(this, "_computedStyle", void 0), K(this, "_computedBorder", void 0), K(this, "_rect", void 0), K(this, "setArea", t => {
                        this.reset(), this._node = t, F({
                            computedStyle: this.computedStyle,
                            node: this._node
                        }), setTimeout(() => {
                            this.PS.publish("Area:modified:pre", {
                                item: this.HTMLNode
                            }), this.reset(), this.PS.publish("Area:modified", {
                                item: this.HTMLNode
                            })
                        })
                    }), K(this, "init", () => {
                        this._observers = H(this.parentNodes, W(t => {
                            this.PS.publish("Area:modified:pre", {
                                event: t,
                                item: this.HTMLNode
                            }), this.reset(), this.PS.publish("Area:modified", {
                                event: t,
                                item: this.HTMLNode
                            })
                        }, 60))
                    }), K(this, "reset", () => {
                        this._computedStyle = void 0, this._rect = void 0, this._computedBorder = void 0, this._parentNodes = void 0
                    }), K(this, "stop", () => {
                        var t;
                        null === (t = this._observers) || void 0 === t || t.cleanup(), this.reset()
                    }), K(this, "scroll", (t, e) => {
                        const s = {
                            scroll_directions: t,
                            scroll_multiplier: e
                        };
                        this.PS.publish("Area:scroll:pre", s), U(this._node, t, e), this.PS.publish("Area:scroll", s)
                    }), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this._node = this.Settings.area, this.setArea(this.Settings.area), this.PS.subscribe("Settings:updated:area", ({
                        settings: {
                            area: t
                        }
                    }) => this.setArea(t)), this.PS.subscribe("Interaction:init", this.init), this.PS.subscribe("Interaction:end", this.reset)
                }
                get HTMLNode() {
                    return this._node
                }
                get computedBorder() {
                    return this._computedBorder ? this._computedBorder : {
                        top: parseInt(this.computedStyle.borderTopWidth),
                        bottom: parseInt(this.computedStyle.borderBottomWidth),
                        left: parseInt(this.computedStyle.borderLeftWidth),
                        right: parseInt(this.computedStyle.borderRightWidth)
                    }
                }
                get computedStyle() {
                    return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode)
                }
                get rect() {
                    return this._rect ? this._rect : this._rect = Z(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom)
                }
                get parentNodes() {
                    return this._parentNodes ? this._parentNodes : this._parentNodes = B(this.HTMLNode)
                }
            }
            const Y = ({
                    x: t,
                    y: e
                }, s, {
                    x: i,
                    y: n
                }) => {
                    const o = {
                        "+": {
                            x: t + i,
                            y: e + n
                        },
                        "-": {
                            x: t - i,
                            y: e - n
                        },
                        "*": {
                            x: t * i,
                            y: e * n
                        },
                        "/": {
                            x: t / i,
                            y: e / n
                        }
                    };
                    return o[s]
                },
                X = t => ({
                    x: t.left,
                    y: t.top
                }),
                J = (t, e = 0) => ({
                    left: t.x,
                    top: t.y,
                    right: t.x,
                    bottom: t.y,
                    width: e,
                    height: e
                }),
                q = t => ({
                    x: t,
                    y: t
                }),
                Q = ({
                    shiftKey: t,
                    keyboardDragSpeed: e,
                    zoom: s,
                    key: i,
                    dragKeys: n,
                    scrollDiff: o
                }) => {
                    const r = {
                            x: 0,
                            y: 0
                        },
                        a = t ? 4 * e * s : e * s;
                    return null !== n && void 0 !== n && n.left.includes(i) && (r.x = o.x || -a), null !== n && void 0 !== n && n.right.includes(i) && (r.x = o.x || a), null !== n && void 0 !== n && n.up.includes(i) && (r.y = o.y || -a), null !== n && void 0 !== n && n.down.includes(i) && (r.y = o.y || a), r
                },
                tt = t => {
                    const e = {
                            x: 0,
                            y: 0
                        },
                        s = window.getComputedStyle(t);
                    if (!s.transform || "none" === s.transform) return e;
                    if (s.transform.indexOf("3d") >= 0) {
                        const t = s.transform.trim().match(/matrix3d\((.*?)\)/);
                        if (t && t.length) {
                            var i;
                            const s = null === (i = t[1]) || void 0 === i ? void 0 : i.split(",");
                            e.x = parseInt(s[12]) || 0, e.y = parseInt(s[13]) || 0
                        }
                        return e
                    }
                    const n = s.transform.trim().match(/matrix\((.*?)\)/);
                    if (n && n.length) {
                        var o;
                        const t = null === (o = n[1]) || void 0 === o ? void 0 : o.split(",");
                        e.x = parseInt(t[4]) || 0, e.y = parseInt(t[5]) || 0
                    }
                    return e
                },
                et = t => {
                    const {
                        transform: e
                    } = t.style;
                    if (!e || e.indexOf("translate") < 0) return tt(t);
                    const s = {
                            x: 0,
                            y: 0
                        },
                        i = e.trim().match(/translate[3dD]*?\(.*?\)/);
                    if (i) {
                        var n;
                        const t = null === (n = i[0]) || void 0 === n ? void 0 : n.split("(");
                        if (t) {
                            var o;
                            const e = null === (o = t[1]) || void 0 === o ? void 0 : o.split(",");
                            s.x = parseInt(e[0]) || 0, s.y = parseInt(e[1]) || 0
                        }
                    }
                    return s.x || s.x ? s : tt(t)
                },
                st = t => {
                    const {
                        style: e
                    } = t, s = {
                        x: parseInt(e.left) || 0,
                        y: parseInt(e.top) || 0
                    };
                    if (!s.x && !s.x) {
                        const e = window.getComputedStyle(t);
                        return {
                            x: parseInt(e.left) || 0,
                            y: parseInt(e.top) || 0
                        }
                    }
                    return s
                },
                it = (t, e) => e ? et(t) : st(t),
                nt = (t, e, s) => {
                    if (s) {
                        const s = t.style.transform;
                        t.style.transform = `translate3d(${e.x}px,${e.y}px,1px) ${s.replace(/translate.*?\)/g,"")}`
                    } else t.style.left = e.x + "px", t.style.top = e.y + "px";
                    return t
                },
                ot = ({
                    element: t,
                    posDirection: e,
                    useTransform: s
                }) => {
                    const i = it(t, s),
                        n = Y(i, "+", e);
                    nt(t, n, s)
                },
                rt = ({
                    containerRect: t,
                    selectionRect: e,
                    direction: s,
                    scrollAmount: i
                }) => {
                    const n = {
                        top: t.top - e.top + i.y,
                        left: t.left - e.left + i.x,
                        bottom: t.bottom - e.bottom + i.y,
                        right: t.right - e.right + i.x
                    };
                    return 0 === s.x && 0 === s.y || (s.y < 0 && (s.y = Math.max(s.y, n.top)), s.x < 0 && (s.x = Math.max(s.x, n.left)), s.y > 0 && (s.y = Math.min(s.y, n.bottom)), s.x > 0 && (s.x = Math.min(s.x, n.right)), e.top += s.y, e.bottom += s.y, e.left += s.x, e.right += s.x), s
                };
            class at {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_prevCursorPos", void 0), K(this, "_prevScrollPos", void 0), K(this, "_elements", []), K(this, "_dragKeys", void 0), K(this, "_dragKeysFlat", []), K(this, "_selectionRect", J(q(0))), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "assignDragKeys", () => {
                        this._dragKeys = {
                            up: this.Settings.dragKeys.up.map(t => t.toLowerCase()),
                            down: this.Settings.dragKeys.down.map(t => t.toLowerCase()),
                            left: this.Settings.dragKeys.left.map(t => t.toLowerCase()),
                            right: this.Settings.dragKeys.right.map(t => t.toLowerCase())
                        }, this._dragKeysFlat = [...this._dragKeys.up, ...this._dragKeys.down, ...this._dragKeys.left, ...this._dragKeys.right]
                    }), K(this, "keyboardDrag", ({
                        event: t,
                        key: e
                    }) => {
                        const s = e.toLowerCase();
                        if (!this.Settings.keyboardDrag || !this._dragKeysFlat.includes(s) || !this.DS.SelectedSet.size || !this.Settings.draggability || this.DS.continue) return;
                        const i = {
                            event: t,
                            isDragging: !0,
                            isDraggingKeyboard: !0,
                            key: e
                        };
                        this.PS.publish(["Interaction:start:pre", "Interaction:start"], i), this._elements = this.DS.getSelection(), this._selectionRect = this.DS.Selection.boundingRect, this.handleZIndex(!0);
                        let n = Q({
                            shiftKey: this.DS.stores.KeyStore.currentValues.includes("shift"),
                            keyboardDragSpeed: this.Settings.keyboardDragSpeed,
                            zoom: this.Settings.zoom,
                            key: s,
                            scrollDiff: this._scrollDiff,
                            dragKeys: this._dragKeys
                        });
                        n = rt({
                            direction: n,
                            containerRect: this.DS.SelectorArea.rect,
                            scrollAmount: this.DS.stores.ScrollStore.scrollAmount,
                            selectionRect: this._selectionRect
                        }), this.moveElements(n), this.PS.publish(["Interaction:update:pre", "Interaction:update"], i)
                    }), K(this, "keyboardEnd", ({
                        event: t,
                        key: e
                    }) => {
                        const s = e.toLowerCase();
                        if (!this.Settings.keyboardDrag || !this._dragKeysFlat.includes(s) || !this.DS.SelectedSet.size || !this.Settings.draggability) return;
                        const i = {
                            event: t,
                            isDragging: this.Settings.draggability,
                            isDraggingKeyboard: !0,
                            key: e
                        };
                        this.PS.publish(["Interaction:end:pre", "Interaction:end"], i)
                    }), K(this, "start", ({
                        isDragging: t,
                        isDraggingKeyboard: e
                    }) => {
                        t && !e && (this._prevCursorPos = void 0, this._prevScrollPos = void 0, this._elements = this.DS.getSelection(), this._selectionRect = this.DS.Selection.boundingRect, this.handleZIndex(!0))
                    }), K(this, "stop", () => {
                        this._prevCursorPos = void 0, this._prevScrollPos = void 0, this.handleZIndex(!1), this._elements = []
                    }), K(this, "update", ({
                        isDragging: t,
                        isDraggingKeyboard: e
                    }) => {
                        if (!t || !this._elements.length || e || this.DS.continue) return;
                        let s = Y(this._cursorDiff, "+", this._scrollDiff);
                        s = rt({
                            direction: s,
                            containerRect: this.DS.SelectorArea.rect,
                            scrollAmount: this.DS.stores.ScrollStore.scrollAmount,
                            selectionRect: this._selectionRect
                        }), this.moveElements(s)
                    }), K(this, "handleZIndex", t => {
                        this._elements.forEach(e => e.style.zIndex = "" + ((parseInt(e.style.zIndex) || 0) + (t ? 9999 : -9998)))
                    }), K(this, "moveElements", t => {
                        const {
                            elements: e,
                            direction: s
                        } = this.filterDragElements({
                            elements: this._elements,
                            direction: t
                        });
                        e.forEach(t => {
                            ot({
                                element: t,
                                posDirection: s,
                                containerRect: this.DS.SelectorArea.rect,
                                useTransform: this.Settings.useTransform
                            })
                        })
                    }), K(this, "filterDragElements", ({
                        elements: t,
                        direction: e
                    }) => ({
                        elements: t,
                        direction: e
                    })), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Settings:updated:dragKeys", this.assignDragKeys), this.assignDragKeys(), this.PS.subscribe("Interaction:start", this.start), this.PS.subscribe("Interaction:end", this.stop), this.PS.subscribe("Interaction:update", this.update), this.PS.subscribe("KeyStore:down", this.keyboardDrag), this.PS.subscribe("KeyStore:up", this.keyboardEnd)
                }
                get _cursorDiff() {
                    const t = this.DS.stores.PointerStore.currentVal,
                        e = this._prevCursorPos ? Y(t, "-", this._prevCursorPos) : {
                            x: 0,
                            y: 0
                        };
                    return this._prevCursorPos = t, e
                }
                get _scrollDiff() {
                    const t = this.DS.stores.ScrollStore.currentVal,
                        e = this._prevScrollPos ? Y(t, "-", this._prevScrollPos) : {
                            x: 0,
                            y: 0
                        };
                    return this._prevScrollPos = t, e
                }
            }
            const ct = (t, e, s = 0) => {
                    if (!t || !e) return !1;
                    let i = t;
                    if (s > 0) {
                        const e = (t.right - t.left) * s,
                            n = (t.bottom - t.top) * s;
                        i = {
                            left: t.left + e,
                            right: t.right - e,
                            top: t.top + n,
                            bottom: t.bottom - n
                        }
                    }
                    return i.left < e.right && i.right > e.left && i.top < e.bottom && i.bottom > e.top
                },
                lt = t => t ? Array.isArray(t) || "function" === typeof t[Symbol.iterator] ? [...new Set([...t])] : [t] : [];
            class ht {
                constructor({
                    DS: t,
                    PS: e,
                    id: s,
                    element: i,
                    droppables: n
                }) {
                    K(this, "id", void 0), K(this, "element", void 0), K(this, "_droppables", void 0), K(this, "_rect", void 0), K(this, "_observers", void 0), K(this, "_timeout", void 0), K(this, "_itemsDropped", []), K(this, "_itemsInside", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "isDestroyed", !1), K(this, "_parentNodes", void 0), K(this, "setReadyClasses", t => {
                        if (this.isDestroyed) return;
                        const e = this.droppables.filter(t => this.DS.SelectedSet.has(t));
                        e.length && (e.forEach(e => {
                            e.classList[t]("" + this.Settings.droppableClass), e.classList[t](`${this.Settings.droppableClass}-${this.id}`)
                        }), this.element.classList[t]("" + this.Settings.dropZoneReadyClass))
                    }), K(this, "handleNoDrop", () => {
                        var t;
                        this.isDestroyed || (this.DS.SelectedSet.forEach(t => {
                            t.classList.remove(this.Settings.droppedTargetClass), t.classList.remove(`${this.Settings.droppedTargetClass}-${this.id}`)
                        }), this._itemsDropped = this._itemsDropped.filter(t => !this.DS.SelectedSet.has(t)), null !== (t = this._itemsDropped) && void 0 !== t && t.length || this.element.classList.remove("" + this.Settings.dropZoneTargetClass))
                    }), K(this, "handleDrop", () => {
                        var t, e, s;
                        this.isDestroyed || (this._itemsDropped = [...new Set([...this._itemsDropped, ...null === (t = this.droppables) || void 0 === t ? void 0 : t.filter(t => this.DS.SelectedSet.has(t))])], null === (e = this._itemsDropped) || void 0 === e || e.forEach(t => {
                            t.classList.add("" + this.Settings.droppedTargetClass), t.classList.add(`${this.Settings.droppedTargetClass}-${this.id}`)
                        }), null !== (s = this._itemsDropped) && void 0 !== s && s.length && this.element.classList.add("" + this.Settings.dropZoneTargetClass))
                    }), K(this, "handleItemsInsideClasses", () => {
                        let t = !1;
                        this.droppables.forEach(e => {
                            var s;
                            null !== (s = this.itemsInside) && void 0 !== s && s.includes(e) ? (e.classList.add("" + this.Settings.droppedInsideClass), e.classList.add(`${this.Settings.droppedInsideClass}-${this.id}`), t = !0) : (e.classList.remove(`${this.Settings.droppedInsideClass}-${this.id}`), e.className.includes(this.Settings.droppedInsideClass + "-") || e.classList.remove("" + this.Settings.droppedInsideClass))
                        }), t ? this.element.classList.add("" + this.Settings.dropZoneInsideClass) : this.element.classList.remove("" + this.Settings.dropZoneInsideClass)
                    }), K(this, "start", ({
                        isDragging: t
                    }) => {
                        t && !this.isDestroyed && this.setReadyClasses("add")
                    }), K(this, "stop", ({
                        isDragging: t
                    }) => {
                        t && !this.isDestroyed && (this.setReadyClasses("remove"), this.handleItemsInsideClasses())
                    }), K(this, "toObject", () => ({
                        id: this.id,
                        element: this.element,
                        droppables: this.droppables,
                        itemsDropped: this.itemsDropped,
                        itemsInside: this.itemsInside
                    })), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.id = s, this.element = i, n && (this.droppables = lt(n)), this.element.classList.add("" + this.Settings.dropZoneClass), this.PS.subscribe("Settings:updated:dropZoneClass", ({
                        settings: t
                    }) => {
                        this.element && (this.element.classList.remove(t["dropZoneClass:pre"]), this.element.classList.add(t.dropZoneClass))
                    }), this._observers = H(this.parentNodes, W(() => this._rect = void 0, this.Settings.refreshMemoryRate)), this.PS.subscribe("Interaction:start", this.start), this.PS.subscribe("Interaction:end", this.stop)
                }
                destroy() {
                    var t;
                    null === (t = this._observers) || void 0 === t || t.cleanup(), this.element.classList.remove("" + this.Settings.dropZoneClass), this.element.classList.remove("" + this.Settings.dropZoneTargetClass), this.element.classList.remove("" + this.Settings.dropZoneReadyClass), this.droppables.forEach(t => {
                        t.classList.remove("" + this.Settings.droppedTargetClass), t.classList.remove(`${this.Settings.droppedTargetClass}-${this.id}`), t.classList.remove("" + this.Settings.droppableClass), t.classList.remove(`${this.Settings.droppableClass}-${this.id}`)
                    }), this.PS.unsubscribe("Interaction:start", this.start), this.PS.unsubscribe("Interaction:end", this.stop), this.isDestroyed = !0
                }
                get rect() {
                    if (!this.isDestroyed) return this._rect ? this._rect : this._rect = this.element.getBoundingClientRect()
                }
                get itemsDropped() {
                    if (!this.isDestroyed) return this._itemsDropped
                }
                get itemsInside() {
                    if (!this.isDestroyed) return this._itemsInside || (this._itemsInside = this.droppables.flatMap(t => {
                        const e = this.DS.SelectableSet.rects.get(t);
                        return this.rect && ct(e, this.rect, this.Settings.dropInsideThreshold) ? [t] : []
                    }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(() => this._itemsInside = void 0, this.Settings.refreshMemoryRate)), this._itemsInside
                }
                get parentNodes() {
                    return this._parentNodes ? this._parentNodes : this._parentNodes = B(this.element)
                }
                get droppables() {
                    return this._droppables ? this._droppables : this.DS.SelectableSet.elements
                }
                set droppables(t) {
                    this._droppables = t
                }
            }
            class dt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_zoneByElement", new Map), K(this, "_zoneById", new Map), K(this, "_zonesByDroppable", new Map), K(this, "_zones", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "setDropZones", ({
                        dropZones: t
                    }) => {
                        t && (this._zones && this._zones.forEach(t => t.destroy()), this._zones = t.map(t => new ht({
                            DS: this.DS,
                            PS: this.PS,
                            ...t
                        })), this._zones.forEach(t => {
                            this._zoneByElement.set(t.element, t), this._zoneById.set(t.id, t), t.droppables.forEach(e => {
                                const s = this._zonesByDroppable.get(e);
                                if (null === s || void 0 === s || !s.length) return this._zonesByDroppable.set(e, [t]);
                                this._zonesByDroppable.set(e, [...new Set([...s, t])])
                            })
                        }))
                    }), K(this, "_handleDrops", t => {
                        var e;
                        null === (e = this._zones) || void 0 === e || e.forEach(e => {
                            e !== t && e.handleNoDrop()
                        }), t && t.handleDrop()
                    }), K(this, "_getZoneByElementsFromPoint", (t, {
                        x: e,
                        y: s
                    }) => {
                        for (let i = 0, n = t.length; i < n; i++) {
                            const n = this._zoneByElement.get(t[i]);
                            if (ct(null === n || void 0 === n ? void 0 : n.rect, {
                                    left: e,
                                    right: e,
                                    top: s,
                                    bottom: s
                                }, Math.min(this.Settings.dropTargetThreshold, .5))) return n
                        }
                    }), K(this, "stop", ({
                        isDragging: t,
                        isDraggingKeyboard: e,
                        event: s
                    }) => {
                        if (!t) return;
                        const i = this.getTarget({
                            isDraggingKeyboard: e,
                            event: s
                        });
                        this._handleDrops(i)
                    }), K(this, "getItemsDroppedById", t => {
                        const e = this._zoneById.get(t);
                        return e ? e.itemsDropped : console.warn(`[DragSelect] No zone found (id: ${t})`)
                    }), K(this, "getItemsInsideById", (t, e) => {
                        const s = this._zoneById.get(t);
                        return s ? (e && s.handleItemsInsideClasses(), s.itemsInside) : console.warn(`[DragSelect] No zone found (id: ${t})`)
                    }), K(this, "getKeyboardItemCenter", (t, e) => {
                        var s;
                        if (!t || !e) return;
                        const i = null === (s = e.target) || void 0 === s ? void 0 : s.getBoundingClientRect(),
                            n = i.left + i.width / 2,
                            o = i.top + i.height / 2;
                        return {
                            x: n,
                            y: o
                        }
                    }), K(this, "getTarget", ({
                        coordinates: t,
                        isDraggingKeyboard: e,
                        event: s
                    }) => {
                        var i, n, o;
                        if (null === (i = this._zones) || void 0 === i || !i.length) return;
                        let r;
                        !t && e && s && (r = this.getKeyboardItemCenter(e, s));
                        const a = (null === t || void 0 === t ? void 0 : t.x) || (null === (n = r) || void 0 === n ? void 0 : n.x) || this.DS.stores.PointerStore.currentVal.x,
                            c = (null === t || void 0 === t ? void 0 : t.y) || (null === (o = r) || void 0 === o ? void 0 : o.y) || this.DS.stores.PointerStore.currentVal.y,
                            l = document.elementsFromPoint(a, c);
                        return this._getZoneByElementsFromPoint(l, {
                            x: a,
                            y: c
                        })
                    }), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Settings:updated:dropZones", ({
                        settings: t
                    }) => this.setDropZones(t)), this.setDropZones({
                        dropZones: this.Settings.dropZones
                    }), this.PS.subscribe("Interaction:end", this.stop)
                }
            }
            class ut {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "isInteracting", void 0), K(this, "isDragging", !1), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "init", () => this.PS.publish("Interaction:init:pre", {
                        init: !0
                    })), K(this, "_init", () => {
                        this.stop(), this.setAreaEventListeners(), this.PS.publish("Interaction:init", {
                            init: !0
                        })
                    }), K(this, "start", t => this.PS.publish("Interaction:start:pre", {
                        event: t,
                        isDragging: this.isDragging
                    })), K(this, "_start", t => {
                        this._canInteract(t) && (this.isInteracting = !0, this.isDragging = this.isDragEvent(t), this.PS.publish("Interaction:start", {
                            event: t,
                            isDragging: this.isDragging
                        }), this.setDocEventListeners())
                    }), K(this, "isDragEvent", t => {
                        let e = null;
                        return t.target && "closest" in t.target && (e = t.target.closest("." + this.Settings.selectableClass)), !(!this.Settings.draggability || this.DS.stores.KeyStore.isMultiSelectKeyPressed(t) || !e) && (this.Settings.immediateDrag && (this.DS.SelectedSet.size ? this.DS.SelectedSet.has(e) || (this.DS.SelectedSet.clear(), this.DS.SelectedSet.add(e)) : this.DS.SelectedSet.add(e)), !!this.DS.SelectedSet.has(e))
                    }), K(this, "onClick", ({
                        event: t
                    }) => {
                        if (!this._canInteract(t)) return;
                        if (t.detail > 0) return;
                        const {
                            stores: {
                                PointerStore: e,
                                KeyStore: s
                            },
                            SelectableSet: i,
                            SelectedSet: n
                        } = this.DS;
                        e.start(t);
                        const o = t.target;
                        o && !i.has(o) || (s.isMultiSelectKeyPressed(t) || n.clear(), o && n.toggle(o), this.reset(t))
                    }), K(this, "stop", (t = this.DS.Area.HTMLNode) => {
                        this.removeAreaEventListeners(t), this.removeDocEventListeners()
                    }), K(this, "update", ({
                        event: t,
                        scroll_directions: e,
                        scroll_multiplier: s
                    }) => {
                        this.isInteracting && this.PS.publish(["Interaction:update:pre", "Interaction:update"], {
                            event: t,
                            scroll_directions: e,
                            scroll_multiplier: s,
                            isDragging: this.isDragging
                        })
                    }), K(this, "reset", t => this.PS.publish("Interaction:end:pre", {
                        event: t,
                        isDragging: this.isDragging
                    })), K(this, "_reset", t => {
                        const {
                            isDragging: e
                        } = this;
                        this.isInteracting = !1, this.isDragging = !1, this.removeDocEventListeners(), this.PS.publish("Interaction:end", {
                            event: t,
                            isDragging: e
                        })
                    }), K(this, "setAreaEventListeners", (t = this.DS.Area.HTMLNode) => {
                        this.Settings.usePointerEvents ? t.addEventListener("pointerdown", this.start, {
                            passive: !1
                        }) : t.addEventListener("mousedown", this.start), t.addEventListener("touchstart", this.start, {
                            passive: !1
                        })
                    }), K(this, "removeAreaEventListeners", (t = this.DS.Area.HTMLNode) => {
                        this.Settings.usePointerEvents ? t.removeEventListener("pointerdown", this.start, {
                            passive: !1
                        }) : t.removeEventListener("mousedown", this.start), t.removeEventListener("touchstart", this.start, {
                            passive: !1
                        })
                    }), K(this, "setDocEventListeners", () => {
                        this.Settings.usePointerEvents ? (document.addEventListener("pointerup", this.reset), document.addEventListener("pointercancel", this.reset)) : document.addEventListener("mouseup", this.reset), document.addEventListener("touchend", this.reset)
                    }), K(this, "removeDocEventListeners", () => {
                        this.Settings.usePointerEvents ? (document.removeEventListener("pointerup", this.reset), document.removeEventListener("pointercancel", this.reset)) : document.removeEventListener("mouseup", this.reset), document.removeEventListener("touchend", this.reset)
                    }), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Settings:updated:area", ({
                        settings: t
                    }) => {
                        this.removeAreaEventListeners(t["area:pre"]), this.setAreaEventListeners(t["area"])
                    }), this.PS.subscribe("PointerStore:updated", ({
                        event: t
                    }) => this.update({
                        event: t
                    })), this.PS.subscribe("Selectable:click", this.onClick), this.PS.subscribe("Selectable:pointer", ({
                        event: t
                    }) => this.start(t)), this.PS.subscribe("Interaction:start:pre", ({
                        event: t
                    }) => this._start(t)), this.PS.subscribe("Interaction:init:pre", this._init), this.PS.subscribe("Interaction:end:pre", ({
                        event: t
                    }) => this._reset(t)), this.PS.subscribe("Area:scroll", this.update)
                }
                _canInteract(t) {
                    const e = "clientX" in t && 0 === t.clientX && 0 === t.clientY && 0 === t.detail && t.target;
                    return !("button" in t && 2 === t.button || this.isInteracting || t.target && !this.DS.SelectorArea.isInside(t.target) || !e && !this.DS.SelectorArea.isClicked(t))
                }
            }
            class pt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_currentValues", new Set), K(this, "_keyMapping", {
                        control: "ctrlKey",
                        shift: "shiftKey",
                        meta: "metaKey"
                    }), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "settings", void 0), K(this, "init", () => {
                        document.addEventListener("keydown", this.keydown), document.addEventListener("keyup", this.keyup), window.addEventListener("blur", this.reset)
                    }), K(this, "keydown", t => {
                        var e;
                        if (null === (e = t.key) || void 0 === e || !e.toLocaleLowerCase) return;
                        const s = t.key.toLowerCase();
                        this.PS.publish("KeyStore:down:pre", {
                            event: t,
                            key: s
                        }), this._currentValues.add(s), this.PS.publish("KeyStore:down", {
                            event: t,
                            key: s
                        })
                    }), K(this, "keyup", t => {
                        var e;
                        if (null === (e = t.key) || void 0 === e || !e.toLocaleLowerCase) return;
                        const s = t.key.toLowerCase();
                        this.PS.publish("KeyStore:up:pre", {
                            event: t,
                            key: s
                        }), this._currentValues.delete(s), this.PS.publish("KeyStore:up", {
                            event: t,
                            key: s
                        })
                    }), K(this, "stop", () => {
                        document.removeEventListener("keydown", this.keydown), document.removeEventListener("keyup", this.reset), window.removeEventListener("blur", this.reset), this.reset()
                    }), K(this, "reset", () => this._currentValues.clear()), this.DS = t, this.PS = e, this.settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Interaction:init", this.init)
                }
                isMultiSelectKeyPressed(t) {
                    var e, s;
                    if (this.settings.multiSelectMode) return !0;
                    const i = null !== (e = null === (s = this.settings.multiSelectKeys) || void 0 === s ? void 0 : s.map(t => t.toLocaleLowerCase())) && void 0 !== e ? e : [];
                    return !!this.currentValues.some(t => i.includes(t)) || !(!t || !i.some(e => t[this._keyMapping[e]]))
                }
                get currentValues() {
                    return Array.from(this._currentValues.values())
                }
            }
            const mt = ({
                event: t
            }) => ({
                x: t.clientX,
                y: t.clientY
            });
            class gt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_isMouseInteraction", !1), K(this, "_initialValArea", {
                        x: 0,
                        y: 0
                    }), K(this, "_currentValArea", {
                        x: 0,
                        y: 0
                    }), K(this, "_lastValArea", {
                        x: 0,
                        y: 0
                    }), K(this, "_initialVal", {
                        x: 0,
                        y: 0
                    }), K(this, "_currentVal", {
                        x: 0,
                        y: 0
                    }), K(this, "_lastVal", {
                        x: 0,
                        y: 0
                    }), K(this, "_lastTouch", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "settings", void 0), K(this, "init", () => {
                        this.settings.usePointerEvents ? document.addEventListener("pointermove", this.update, {
                            passive: !1
                        }) : document.addEventListener("mousemove", this.update), document.addEventListener("touchmove", this.update, {
                            passive: !1
                        })
                    }), K(this, "getPointerPosition", t => mt({
                        event: this._normalizedEvent(t)
                    })), K(this, "update", t => {
                        t && (this.PS.publish("PointerStore:updated:pre", {
                            event: t
                        }), this.currentVal = this.getPointerPosition(t), this._isMouseInteraction && this.PS.publish("PointerStore:updated", {
                            event: t
                        }))
                    }), K(this, "stop", () => {
                        this.settings.usePointerEvents ? document.removeEventListener("pointermove", this.update, {
                            passive: !1
                        }) : document.removeEventListener("mousemove", this.update), document.removeEventListener("touchmove", this.update, {
                            passive: !1
                        }), this.reset()
                    }), K(this, "reset", t => {
                        this.currentVal = this.lastVal = this.getPointerPosition(t), setTimeout(() => this._isMouseInteraction = !1, 100)
                    }), this.DS = t, this.PS = e, this.settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Interaction:init", this.init), this.PS.subscribe("Interaction:start", ({
                        event: t
                    }) => this.start(t)), this.PS.subscribe("Interaction:end", ({
                        event: t
                    }) => this.reset(t))
                }
                start(t) {
                    t && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(t))
                }
                _normalizedEvent(t) {
                    return !t || t instanceof KeyboardEvent ? {
                        clientX: 0,
                        clientY: 0
                    } : "touches" in t ? ("touchend" !== t.type && (this._lastTouch = t), (null === (e = this._lastTouch) || void 0 === e ? void 0 : e.touches[0]) || t.touches[0]) : t;
                    var e
                }
                get initialValArea() {
                    return this._initialValArea ? this._initialValArea : {
                        x: 0,
                        y: 0
                    }
                }
                get currentValArea() {
                    return this._currentValArea ? this._currentValArea : {
                        x: 0,
                        y: 0
                    }
                }
                get lastValArea() {
                    return this._lastValArea ? this._lastValArea : {
                        x: 0,
                        y: 0
                    }
                }
                get initialVal() {
                    return this._initialVal ? this._initialVal : {
                        x: 0,
                        y: 0
                    }
                }
                get currentVal() {
                    return this._currentVal ? this._currentVal : {
                        x: 0,
                        y: 0
                    }
                }
                get lastVal() {
                    return this._lastVal ? this._lastVal : {
                        x: 0,
                        y: 0
                    }
                }
                set initialVal(t) {
                    this._initialVal = t, this._initialValArea = t && Y(t, "-", Y(X(this.DS.Area.rect), "+", X(this.DS.Area.computedBorder)))
                }
                set currentVal(t) {
                    this._currentVal = t, this._currentValArea = t && Y(t, "-", Y(X(this.DS.Area.rect), "+", X(this.DS.Area.computedBorder)))
                }
                set lastVal(t) {
                    this._lastVal = t, this._lastValArea = t && Y(t, "-", Y(X(this.DS.Area.rect), "+", X(this.DS.Area.computedBorder)))
                }
            }
            class bt {
                constructor({
                    DS: t
                }) {
                    K(this, "subscribers", {}), K(this, "DS", void 0), K(this, "subscribe", (t, e) => {
                        Array.isArray(this.subscribers[t]) || (this.subscribers[t] = []);
                        const s = this.subscribers[t];
                        return s.push(e), s.length - 1
                    }), K(this, "unsubscribe", (t, e, s) => {
                        var i, n;
                        const o = null !== s && void 0 !== s ? s : null === (i = this.subscribers[t]) || void 0 === i ? void 0 : i.findIndex(t => t === e);
                        null === (n = this.subscribers[t]) || void 0 === n || n.splice(Number(o), 1)
                    }), K(this, "publish", (t, e) => {
                        Array.isArray(t) ? t.forEach(t => this._publish(t, e)) : this._publish(t, e)
                    }), K(this, "_publish", (t, e) => {
                        var s;
                        const i = null !== (s = this.subscribers[t]) && void 0 !== s ? s : [];
                        t.includes(":pre") ? this._handlePrePublish(i, e) : this._handlePublish(i, e)
                    }), K(this, "_handlePublish", (t, e) => {
                        for (let i = 0, n = t.length; i < n; i++) {
                            var s;
                            if (this.DS.stopped) return;
                            null === (s = t[i]) || void 0 === s || s.call(t, e)
                        }
                    }), K(this, "_handlePrePublish", (t, e) => {
                        let s = t.length;
                        while (s--) {
                            var i;
                            if (this.DS.stopped) return;
                            null === (i = t[s]) || void 0 === i || i.call(t, e)
                        }
                    }), this.DS = t
                }
            }
            const St = () => {
                    var t, e, s, i;
                    return {
                        y: (null === (t = document.body) || void 0 === t ? void 0 : t.scrollTop) || (null === (e = document.documentElement) || void 0 === e ? void 0 : e.scrollTop) || 0,
                        x: (null === (s = document.body) || void 0 === s ? void 0 : s.scrollLeft) || (null === (i = document.documentElement) || void 0 === i ? void 0 : i.scrollLeft) || 0
                    }
                },
                ft = t => !t || t instanceof Document ? St() : {
                    x: t.scrollLeft >= 0 ? t.scrollLeft : St().x,
                    y: t.scrollTop >= 0 ? t.scrollTop : St().y
                },
                vt = t => {
                    const e = ft(t);
                    return !(!e.x && !e.y) || (t instanceof Document ? t.body ? yt(t.body) : yt(t.documentElement) : yt(t))
                },
                yt = t => {
                    const e = t.scrollTop,
                        s = Boolean(t.scrollTop = 1);
                    return t.scrollTop = e, s
                };
            class wt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_initialVal", {
                        x: 0,
                        y: 0
                    }), K(this, "_currentVal", {
                        x: 0,
                        y: 0
                    }), K(this, "_canScroll", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "init", () => this.addListeners()), K(this, "addListeners", () => this.DS.Area.HTMLNode.addEventListener("scroll", this.update)), K(this, "removeListeners", () => this.DS.Area.HTMLNode.removeEventListener("scroll", this.update)), K(this, "start", () => {
                        this._currentVal = this._initialVal = ft(this.DS.Area.HTMLNode)
                    }), K(this, "update", () => this._currentVal = ft(this.DS.Area.HTMLNode)), K(this, "stop", () => {
                        this.reset(), this.removeListeners()
                    }), K(this, "reset", () => {
                        this._initialVal = {
                            x: 0,
                            y: 0
                        }, this._canScroll = void 0
                    }), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Area:modified", () => {
                        this.stop(), this.init()
                    }), this.PS.subscribe("Interaction:init", this.init), this.PS.subscribe("Interaction:start", () => this.start()), this.PS.subscribe("Interaction:end", () => this.reset())
                }
                get canScroll() {
                    return "boolean" === typeof this._canScroll ? this._canScroll : this._canScroll = vt(this.DS.Area.HTMLNode)
                }
                get scrollAmount() {
                    const t = Y(this.currentVal, "-", this.initialVal),
                        e = q(this.Settings.zoom),
                        s = Y(Y(t, "*", e), "-", t);
                    return {
                        x: t.x + s.x,
                        y: t.y + s.y
                    }
                }
                get initialVal() {
                    return this._initialVal ? this._initialVal : {
                        x: 0,
                        y: 0
                    }
                }
                get currentVal() {
                    return this._currentVal || (this._currentVal = ft(this.DS.Area.HTMLNode)), this._currentVal
                }
            }
            class Dt extends Set {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    super(), K(this, "_rects", void 0), K(this, "_timeout", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "init", () => lt(this.Settings.selectables).forEach(t => this.add(t))), K(this, "clear", () => this.forEach(t => this.delete(t))), K(this, "_onClick", t => this.PS.publish(["Selectable:click:pre", "Selectable:click"], {
                        event: t
                    })), K(this, "_onPointer", t => this.PS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
                        event: t
                    })), K(this, "addAll", t => t.forEach(t => this.add(t))), K(this, "deleteAll", t => t.forEach(t => this.delete(t))), K(this, "getElementRect", t => this._rects ? this._rects.get(t) : t.getBoundingClientRect()), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Interaction:init", this.init), this.PS.subscribe("Settings:updated:selectables", () => {
                        this.clear(), this.init()
                    }), this.PS.subscribe("Settings:updated:selectableClass", ({
                        settings: t
                    }) => {
                        this.forEach(e => {
                            e.classList.remove(t["selectableClass:pre"]), e.classList.add(t.selectableClass)
                        })
                    })
                }
                add(t) {
                    if (!t || super.has(t)) return this;
                    const e = {
                        items: this.elements,
                        item: t
                    };
                    return this.PS.publish("Selectable:added:pre", e), t.classList.add(this.Settings.selectableClass), t.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? t.addEventListener("pointerdown", this._onPointer, {
                        passive: !1
                    }) : t.addEventListener("mousedown", this._onPointer), t.addEventListener("touchstart", this._onPointer, {
                        passive: !1
                    }), this.Settings.draggability && !this.Settings.useTransform && F({
                        computedStyle: window.getComputedStyle(t),
                        node: t
                    }), this.PS.publish("Selectable:added", e), super.add(t)
                }
                delete(t) {
                    if (!t || !super.has(t)) return !0;
                    const e = {
                        items: this.elements,
                        item: t
                    };
                    return this.PS.publish("Selectable:removed:pre", e), t.classList.remove(this.Settings.selectableClass), t.classList.remove(this.Settings.hoverClass), t.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? t.removeEventListener("pointerdown", this._onPointer, {
                        passive: !1
                    }) : t.removeEventListener("mousedown", this._onPointer), t.removeEventListener("touchstart", this._onPointer, {
                        passive: !1
                    }), this.PS.publish("Selectable:removed", e), super.delete(t)
                }
                get elements() {
                    return Array.from(this.values())
                }
                get rects() {
                    return this._rects || (this._rects = new Map, this.forEach(t => {
                        var e;
                        return null === (e = this._rects) || void 0 === e ? void 0 : e.set(t, t.getBoundingClientRect())
                    }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(() => this._rects = void 0, this.Settings.refreshMemoryRate)), this._rects
                }
            }
            class Pt extends Set {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    super(), K(this, "_rects", void 0), K(this, "_timeout", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "clear", () => this.forEach(t => this.delete(t))), K(this, "addAll", t => t.forEach(t => this.add(t))), K(this, "deleteAll", t => t.forEach(t => this.delete(t))), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s
                }
                add(t) {
                    if (!t || super.has(t)) return this;
                    const e = {
                        items: this.elements,
                        item: t
                    };
                    return this.PS.publish("Selected:added:pre", e), super.add(t), t.classList.add(this.Settings.selectedClass), t.style.zIndex = "" + ((parseInt(t.style.zIndex) || 0) + 1), this.PS.publish("Selected:added", e), this
                }
                delete(t) {
                    if (!t || !super.has(t)) return !0;
                    const e = {
                        items: this.elements,
                        item: t
                    };
                    this.PS.publish("Selected:removed:pre", e);
                    const s = super.delete(t);
                    return t.classList.remove(this.Settings.selectedClass), t.style.zIndex = "" + ((parseInt(t.style.zIndex) || 0) - 1), this.PS.publish("Selected:removed", e), s
                }
                toggle(t) {
                    return this.has(t) ? this.delete(t) : this.add(t), t
                }
                get elements() {
                    return Array.from(this.values())
                }
                get rects() {
                    return this._rects || (this._rects = new Map, this.forEach(t => {
                        var e;
                        return null === (e = this._rects) || void 0 === e ? void 0 : e.set(t, t.getBoundingClientRect())
                    }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(() => this._rects = void 0, this.Settings.refreshMemoryRate)), this._rects
                }
            }
            const _t = t => {
                    const e = document.createElement("div");
                    return e.style.position = "absolute", t || (e.style.background = "rgba(0, 175, 255, 0.2)", e.style.border = "1px solid rgba(0, 175, 255, 0.8)", e.style.display = "none", e.style.pointerEvents = "none"), e
                },
                It = ({
                    scrollAmount: t,
                    initialPointerPos: e,
                    pointerPos: s
                }) => {
                    const i = {};
                    return s.x > e.x - t.x ? (i.left = e.x - t.x, i.width = s.x - e.x + t.x) : (i.left = s.x, i.width = e.x - s.x - t.x), s.y > e.y - t.y ? (i.top = e.y - t.y, i.height = s.y - e.y + t.y) : (i.top = s.y, i.height = e.y - s.y - t.y), i
                };
            var kt = (t, e) => {
                e.left && (t.style.left = e.left + "px"), e.top && (t.style.top = e.top + "px"), e.width && (t.style.width = e.width + "px"), e.height && (t.style.height = e.height + "px")
            };
            class xt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_rect", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "HTMLNode", void 0), K(this, "attachSelector", () => {
                        var t, e;
                        this.HTMLNode && null !== (t = this.DS.SelectorArea) && void 0 !== t && t.HTMLNode && this.DS.SelectorArea.HTMLNode.removeChild(this.HTMLNode), this.HTMLNode = this.Settings.selector || _t(this.Settings.customStyles), this.HTMLNode.classList.add(this.Settings.selectorClass), this.HTMLNode && null !== (e = this.DS.SelectorArea) && void 0 !== e && e.HTMLNode && this.DS.SelectorArea.HTMLNode.appendChild(this.HTMLNode)
                    }), K(this, "start", ({
                        isDragging: t
                    }) => {
                        if (t) return;
                        const {
                            stores: {
                                PointerStore: e
                            }
                        } = this.DS, s = e.initialValArea;
                        kt(this.HTMLNode, J(s, 1)), this.HTMLNode.style.display = "block", this._rect = void 0
                    }), K(this, "stop", () => {
                        this.HTMLNode.style.width = "0", this.HTMLNode.style.height = "0", this.HTMLNode.style.display = "none"
                    }), K(this, "update", ({
                        isDragging: t
                    }) => {
                        if (t || this.DS.continue) return;
                        const {
                            stores: {
                                ScrollStore: e,
                                PointerStore: s
                            }
                        } = this.DS, i = It({
                            scrollAmount: e.scrollAmount,
                            initialPointerPos: s.initialValArea,
                            pointerPos: s.currentValArea
                        });
                        kt(this.HTMLNode, i), this._rect = void 0
                    }), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.HTMLNode = this.Settings.selector, this.PS.subscribe("Settings:updated:selectorClass", ({
                        settings: t
                    }) => {
                        this.HTMLNode.classList.remove(t["selectorClass:pre"]), this.HTMLNode.classList.add(t.selectorClass)
                    }), this.PS.subscribe("Settings:updated:selector", this.attachSelector), this.PS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.PS.subscribe("Interaction:start", this.start), this.PS.subscribe("Interaction:update", this.update), this.PS.subscribe("Interaction:end", this.stop)
                }
                get rect() {
                    return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect()
                }
            }
            const Et = ({
                    element: t,
                    force: e,
                    multiSelectionToggle: s,
                    SelectedSet: i,
                    hoverClassName: n
                }) => {
                    t.classList.contains(n) && !e || (i.has(t) ? s && i.delete(t) : i.add(t), t.classList.add(n))
                },
                Ot = ({
                    element: t,
                    force: e,
                    SelectedSet: s,
                    PrevSelectedSet: i,
                    hoverClassName: n
                }) => {
                    if (!t.classList.contains(n) && !e) return;
                    const o = s.has(t),
                        r = i.has(t);
                    o && !r ? s.delete(t) : !o && r && s.add(t), t.classList.remove(n)
                },
                $t = t => {
                    const e = {
                        top: Number.POSITIVE_INFINITY,
                        left: Number.POSITIVE_INFINITY,
                        bottom: Number.NEGATIVE_INFINITY,
                        right: Number.NEGATIVE_INFINITY,
                        width: Number.NEGATIVE_INFINITY,
                        height: Number.NEGATIVE_INFINITY
                    };
                    return t.rects.forEach(t => {
                        e.top = Math.min(e.top, t.top || e.top), e.left = Math.min(e.left, t.left || e.left), e.bottom = Math.max(e.bottom, t.bottom || e.bottom), e.right = Math.max(e.right, t.right || e.right)
                    }), e.height = e.bottom - e.top, e.width = e.right - e.left, e
                };
            class Mt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_prevSelectedSet", new Set), K(this, "_boundingRect", void 0), K(this, "_timeout", void 0), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "start", ({
                        event: t,
                        isDragging: e
                    }) => {
                        e || (this._storePrevious(t), this._handleInsideSelection(!0, t))
                    }), K(this, "update", ({
                        isDragging: t
                    }) => {
                        t || this.DS.continue || this._handleInsideSelection()
                    }), K(this, "_handleInsideSelection", (t, e) => {
                        const {
                            SelectableSet: s,
                            SelectorArea: i,
                            Selector: n
                        } = this.DS, o = this.DS.stores.KeyStore.isMultiSelectKeyPressed(e) && this.Settings.multiSelectToggling, r = this.Settings.selectionThreshold, a = s.rects, c = n.rect, l = new Map, h = new Map;
                        for (const [p, m] of a) i.isInside(p, m) && (ct(m, c, r) ? l.set(p, m) : h.set(p, m));
                        if (this.DS.continue) return;
                        const {
                            select: d,
                            unselect: u
                        } = this.filterSelected({
                            select: l,
                            unselect: h,
                            selectorRect: c
                        });
                        d.forEach((e, s) => Et({
                            element: s,
                            force: t,
                            multiSelectionToggle: o,
                            SelectedSet: this.DS.SelectedSet,
                            hoverClassName: this.Settings.hoverClass
                        })), u.forEach((e, s) => Ot({
                            element: s,
                            force: t,
                            SelectedSet: this.DS.SelectedSet,
                            hoverClassName: this.Settings.hoverClass,
                            PrevSelectedSet: this._prevSelectedSet
                        }))
                    }), K(this, "filterSelected", ({
                        select: t,
                        unselect: e,
                        selectorRect: s
                    }) => ({
                        select: t,
                        unselect: e
                    })), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.PS.subscribe("Interaction:start", this.start), this.PS.subscribe("Interaction:update", this.update)
                }
                _storePrevious(t) {
                    const {
                        stores: {
                            KeyStore: e
                        },
                        SelectedSet: s
                    } = this.DS;
                    e.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(s) : this._prevSelectedSet = new Set
                }
                get boundingRect() {
                    return this._boundingRect || (this._boundingRect = $t(this.DS.SelectedSet), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(() => this._boundingRect = void 0, this.Settings.refreshMemoryRate)), this._boundingRect
                }
            }
            const At = () => {
                    const t = document.createElement("div");
                    return t.style.position = "fixed", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.zIndex = "999999999999999999", t
                },
                Tt = ({
                    elementRect: t,
                    containerRect: e,
                    tolerance: s = {
                        x: 0,
                        y: 0
                    }
                }) => {
                    const i = [];
                    return t.top - s.y < e.top && i.push("top"), t.left - s.x < e.left && i.push("left"), t.bottom + s.y > e.bottom && i.push("bottom"), t.right + s.y > e.right && i.push("right"), i
                };
            class Lt {
                constructor({
                    DS: t,
                    PS: e
                }) {
                    K(this, "_scrollInterval", void 0), K(this, "_rect", void 0), K(this, "currentEdges", []), K(this, "DS", void 0), K(this, "PS", void 0), K(this, "Settings", void 0), K(this, "HTMLNode", void 0), K(this, "init", () => {
                        this.applyElements("append"), this.updatePos()
                    }), K(this, "applyElements", t => {
                        const e = document.body ? "body" : "documentElement",
                            s = t + "Child";
                        this.HTMLNode[s](this.DS.Selector.HTMLNode), document[e][s](this.HTMLNode)
                    }), K(this, "updatePos", () => {
                        this._rect = void 0;
                        const t = this.DS.Area.rect,
                            e = this.DS.Area.computedBorder,
                            {
                                style: s
                            } = this.HTMLNode,
                            i = t.top + e.top + "px",
                            n = t.left + e.left + "px",
                            o = t.width + "px",
                            r = t.height + "px";
                        s.top !== i && (s.top = i), s.left !== n && (s.left = n), s.width !== o && (s.width = o), s.height !== r && (s.height = r)
                    }), K(this, "stop", t => {
                        this.stopAutoScroll(), t && this.applyElements("remove")
                    }), K(this, "startAutoScroll", ({
                        isDraggingKeyboard: t
                    }) => {
                        t || (this.currentEdges = [], this._scrollInterval = setInterval(() => this.handleAutoScroll(), 16))
                    }), K(this, "handleAutoScroll", () => {
                        if (this.DS.continue) return;
                        const {
                            stores: {
                                PointerStore: t
                            },
                            Area: e
                        } = this.DS;
                        this.currentEdges = Tt({
                            elementRect: J(t.currentVal),
                            containerRect: this.rect,
                            tolerance: this.Settings.overflowTolerance
                        }), this.currentEdges.length && e.scroll(this.currentEdges, this.Settings.autoScrollSpeed)
                    }), K(this, "stopAutoScroll", () => {
                        this.currentEdges = [], clearInterval(this._scrollInterval)
                    }), K(this, "isInside", (t, e) => !(!this.DS.Area.HTMLNode.contains(t) || !this.DS.stores.ScrollStore.canScroll) || ct(this.rect, e || t.getBoundingClientRect())), this.DS = t, this.PS = e, this.Settings = this.DS.stores.SettingsStore.s, this.HTMLNode = At(), this.PS.subscribe("Settings:updated:selectorAreaClass", ({
                        settings: t
                    }) => {
                        this.HTMLNode.classList.remove(t["selectorAreaClass:pre"]), this.HTMLNode.classList.add(t["selectorAreaClass"])
                    }), this.HTMLNode.classList.add(this.Settings.selectorAreaClass), this.PS.subscribe("Area:modified", this.updatePos), this.PS.subscribe("Area:modified", this.updatePos), this.PS.subscribe("Interaction:init", this.init), this.PS.subscribe("Interaction:start", ({
                        isDraggingKeyboard: t
                    }) => this.startAutoScroll({
                        isDraggingKeyboard: t
                    })), this.PS.subscribe("Interaction:end", () => {
                        this.updatePos(), this.stopAutoScroll()
                    })
                }
                isClicked(t) {
                    const {
                        stores: {
                            PointerStore: e
                        }
                    } = this.DS, s = t ? e.getPointerPosition(t) : e.initialVal;
                    return ct({
                        left: s.x,
                        top: s.y,
                        right: s.x,
                        bottom: s.y
                    }, this.rect)
                }
                get rect() {
                    return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect()
                }
            }
            const Ct = (t, e) => console.warn(`[DragSelect] TypeIssue: setting "${t}" is not of type "${e}".`),
                jt = (t, e, s, i) => {
                    if (void 0 === e) return s ? {
                        [t]: i
                    } : {};
                    if (null === e) return {
                        [t]: null
                    };
                    let n = !0,
                        o = !1;
                    const r = "string" === typeof i;
                    r && (n = "string" === typeof e || e instanceof String), r && !n && (o = !0, Ct(t, "string"));
                    const a = !Number.isNaN(i) && "number" === typeof i;
                    a && (n = !Number.isNaN(e) && "number" === typeof e), a && !n && (o = !0, Ct(t, "number"));
                    const c = "[object Object]" === Object.prototype.toString.call(i);
                    c && (n = "[object Object]" === Object.prototype.toString.call(e)), c && !n && (o = !0, Ct(t, "object"));
                    const l = "boolean" === typeof i;
                    l && (n = "boolean" === typeof e), l && !n && (o = !0, Ct(t, "boolean"));
                    const h = Array.isArray(i);
                    h && (n = Array.isArray(e)), h && !n && (o = !0, Ct(t, "array"));
                    const d = o || s;
                    return "dragKeys" === t && n ? {
                        [t]: Object.assign(i, e)
                    } : "dragKeys" !== t || n ? ("dropZones" === t && n && Array.isArray(e) && new Set(e.map(t => t.id)).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), n ? {
                        [t]: e
                    } : d ? {
                        [t]: i
                    } : {}) : d ? {
                        [t]: i
                    } : {}
                },
                Nt = (t, e) => ({ ...jt("area", t.area, e, document),
                    ...jt("selectables", t.selectables, e, null),
                    ...jt("autoScrollSpeed", t.autoScrollSpeed, e, 5),
                    ...jt("overflowTolerance", t.overflowTolerance, e, {
                        x: 25,
                        y: 25
                    }),
                    ...jt("zoom", t.zoom, e, 1),
                    ...jt("customStyles", t.customStyles, e, !1),
                    ...jt("multiSelectMode", t.multiSelectMode, e, !1),
                    ...jt("multiSelectToggling", t.multiSelectToggling, e, !0),
                    ...jt("multiSelectKeys", t.multiSelectKeys, e, ["Control", "Shift", "Meta"]),
                    ...jt("selector", t.selector, e, null),
                    ...jt("selectionThreshold", t.selectionThreshold, e, 0),
                    ...jt("draggability", t.draggability, e, !0),
                    ...jt("immediateDrag", t.immediateDrag, e, !0),
                    ...jt("keyboardDrag", t.keyboardDrag, e, !0),
                    ...jt("dragKeys", t.dragKeys, e, {
                        up: ["ArrowUp"],
                        down: ["ArrowDown"],
                        left: ["ArrowLeft"],
                        right: ["ArrowRight"]
                    }),
                    ...jt("keyboardDragSpeed", t.keyboardDragSpeed, e, 10),
                    ...jt("useTransform", t.useTransform, e, !0),
                    ...jt("refreshMemoryRate", t.refreshMemoryRate, e, 80),
                    ...jt("dropZones", t.dropZones, e, []),
                    ...jt("dropInsideThreshold", t.dropInsideThreshold, e, 1),
                    ...jt("dropTargetThreshold", t.dropTargetThreshold, e, 0),
                    ...jt("usePointerEvents", t.usePointerEvents, e, !1),
                    ...jt("hoverClass", t.hoverClass, e, "ds-hover"),
                    ...jt("selectableClass", t.selectableClass, e, "ds-selectable"),
                    ...jt("selectedClass", t.selectedClass, e, "ds-selected"),
                    ...jt("selectorClass", t.selectorClass, e, "ds-selector"),
                    ...jt("selectorAreaClass", t.selectorAreaClass, e, "ds-selector-area"),
                    ...jt("droppedTargetClass", t.droppedTargetClass, e, "ds-dropped-target"),
                    ...jt("droppedInsideClass", t.droppedInsideClass, e, "ds-dropped-inside"),
                    ...jt("droppableClass", t.droppableClass, e, "ds-droppable"),
                    ...jt("dropZoneClass", t.dropZoneClass, e, "ds-dropzone"),
                    ...jt("dropZoneReadyClass", t.dropZoneReadyClass, e, "ds-dropzone-ready"),
                    ...jt("dropZoneTargetClass", t.dropZoneTargetClass, e, "ds-dropzone-target"),
                    ...jt("dropZoneInsideClass", t.dropZoneInsideClass, e, "ds-dropzone-inside")
                });
            class zt {
                constructor({
                    PS: t,
                    settings: e
                }) {
                    K(this, "_settings", {}), K(this, "s", {}), K(this, "PS", void 0), K(this, "update", ({
                        settings: t,
                        init: e
                    }) => {
                        this.PS.publish("Settings:updated:pre", {
                            settings: this._settings,
                            "settings:init": Boolean(e),
                            "settings:new": t
                        }), this._update({
                            settings: t,
                            init: e
                        })
                    }), K(this, "_update", ({
                        settings: t = {},
                        init: e = !1
                    }) => {
                        const s = Nt(t, e);
                        for (const [i, n] of Object.entries(s))((s, i) => {
                            s in this._settings || Object.defineProperty(this.s, s, {
                                get: () => this._settings[s],
                                set: t => this.update({
                                    settings: {
                                        [s]: t
                                    }
                                })
                            }), this._settings[s + ":pre"] = this._settings[s], this._settings[s] = i;
                            const n = {
                                settings: this._settings,
                                "settings:init": e,
                                "settings:new": t
                            };
                            this.PS.publish("Settings:updated", n), this.PS.publish("Settings:updated:" + s, n)
                        })(i, n)
                    }), this.PS = t, this.update({
                        settings: e,
                        init: !0
                    })
                }
            }
            const Rt = {
                    elementselect: "DS:select",
                    elementunselect: "DS:unselect",
                    autoscroll: "DS:scroll",
                    dragstart: "DS:start",
                    dragmove: "DS:update",
                    callback: "DS:end",
                    preelementselect: "DS:select:pre",
                    preelementunselect: "DS:unselect:pre",
                    preautoscroll: "DS:scroll:pre",
                    predragstart: "DS:start:pre",
                    predragmove: "DS:update:pre",
                    precallback: "DS:end:pre"
                },
                Vt = (t, e) => {
                    const s = e.DropZones.getTarget(t);
                    return { ...t,
                        ...s ? {
                            dropTarget: s.toObject()
                        } : {}
                    }
                },
                Kt = ({
                    PS: t,
                    DS: e
                }) => {
                    const s = {
                        "Selected:added": [{
                            name: "preelementselect"
                        }, {
                            name: "elementselect"
                        }, {
                            name: "DS:select:pre"
                        }, {
                            name: "DS:select"
                        }],
                        "Selected:removed": [{
                            name: "preelementunselect"
                        }, {
                            name: "elementunselect"
                        }, {
                            name: "DS:unselect:pre"
                        }, {
                            name: "DS:unselect"
                        }],
                        "Selectable:added": [{
                            name: "DS:added:pre"
                        }, {
                            name: "DS:added"
                        }],
                        "Selectable:removed": [{
                            name: "DS:removed:pre"
                        }, {
                            name: "DS:removed"
                        }],
                        "Area:scroll": [{
                            name: "preautoscroll"
                        }, {
                            name: "autoscroll"
                        }, {
                            name: "DS:scroll:pre"
                        }, {
                            name: "DS:scroll"
                        }],
                        "Interaction:start": [{
                            name: "predragstart"
                        }, {
                            name: "dragstart"
                        }, {
                            name: "DS:start:pre"
                        }, {
                            name: "DS:start"
                        }],
                        "Interaction:update": [{
                            name: "predragmove",
                            condition: t => t.event ? t : null
                        }, {
                            name: "dragmove",
                            condition: t => t.event ? t : null
                        }, {
                            name: "DS:update:pre",
                            condition: t => t.event ? t : null
                        }, {
                            name: "DS:update",
                            condition: t => t.event ? t : null
                        }],
                        "Interaction:end": [{
                            name: "precallback",
                            extraData: (t, e) => Vt(t, e)
                        }, {
                            name: "callback",
                            extraData: (t, e) => Vt(t, e)
                        }, {
                            name: "DS:end:pre",
                            extraData: (t, e) => Vt(t, e)
                        }, {
                            name: "DS:end",
                            extraData: (t, e) => Vt(t, e)
                        }]
                    };
                    for (const [i, n] of Object.entries(s)) Ht({
                        sub_name: i,
                        sub_pubs: n,
                        DS: e,
                        PS: t
                    })
                },
                Ht = ({
                    sub_name: t,
                    DS: e,
                    PS: s,
                    sub_pubs: i
                }) => {
                    s.subscribe(t, t => i.forEach(s => Wt({
                        sub_pub: s,
                        data: t,
                        DS: e
                    })))
                },
                Wt = ({
                    sub_pub: t,
                    data: e,
                    DS: s
                }) => {
                    const i = t.condition ? t.condition(e, s) : e;
                    if (i) {
                        const n = t.extraData && t.extraData(e, s) || {};
                        s.publish(t.name, {
                            items: s.SelectedSet.elements,
                            isDragging: s.Interaction.isDragging,
                            ...i,
                            ...n
                        })
                    }
                };
            class Bt {
                constructor(t) {
                    K(this, "continue", !1), K(this, "PubSub", void 0), K(this, "stores", void 0), K(this, "Area", void 0), K(this, "Selector", void 0), K(this, "SelectorArea", void 0), K(this, "SelectableSet", void 0), K(this, "SelectedSet", void 0), K(this, "Selection", void 0), K(this, "Drag", void 0), K(this, "DropZones", void 0), K(this, "Interaction", void 0), K(this, "stopped", void 0), K(this, "subscribe", (t, e) => {
                        Rt[t] && console.warn(`[DragSelect]: The event name "${t}" is deprecated and was/will be removed in a future version. Please use the new event name "${Rt[t]}" instead.`), this.PubSub.subscribe(t, e)
                    }), K(this, "unsubscribe", (t, e, s) => this.PubSub.unsubscribe(t, e, s)), K(this, "publish", (t, e) => this.PubSub.publish(t, e)), K(this, "start", () => {
                        this.stopped = !1, this.Interaction.init()
                    }), K(this, "break", () => this.continue = !0), K(this, "setSettings", t => this.stores.SettingsStore.update({
                        settings: t
                    })), K(this, "getSelection", () => this.SelectedSet.elements), K(this, "getSelectables", () => this.SelectableSet.elements), K(this, "getInitialCursorPosition", () => this.stores.PointerStore.initialVal), K(this, "getCurrentCursorPosition", () => this.stores.PointerStore.currentVal), K(this, "getPreviousCursorPosition", () => this.stores.PointerStore.lastVal), K(this, "getInitialCursorPositionArea", () => this.stores.PointerStore.initialValArea), K(this, "getCurrentCursorPositionArea", () => this.stores.PointerStore.currentValArea), K(this, "getPreviousCursorPositionArea", () => this.stores.PointerStore.lastValArea), K(this, "isMultiSelect", t => this.stores.KeyStore.isMultiSelectKeyPressed(t)), K(this, "isDragging", () => this.Interaction.isDragging), K(this, "getZoneByCoordinates", t => {
                        var e;
                        return null === (e = this.DropZones.getTarget({
                            coordinates: t
                        })) || void 0 === e ? void 0 : e.toObject()
                    }), K(this, "getItemsDroppedByZoneId", t => this.DropZones.getItemsDroppedById(t)), K(this, "getItemsInsideByZoneId", (t, e) => this.DropZones.getItemsInsideById(t, e)), this.stopped = !1, this.PubSub = new bt({
                        DS: this
                    }), this.stores = {}, this.stores.SettingsStore = new zt({
                        settings: t,
                        PS: this.PubSub
                    }), this.stores.PointerStore = new gt({
                        DS: this,
                        PS: this.PubSub
                    }), this.stores.ScrollStore = new wt({
                        DS: this,
                        PS: this.PubSub
                    }), this.stores.KeyStore = new pt({
                        DS: this,
                        PS: this.PubSub
                    }), this.Area = new G({
                        DS: this,
                        PS: this.PubSub
                    }), this.Selector = new xt({
                        DS: this,
                        PS: this.PubSub
                    }), this.SelectorArea = new Lt({
                        DS: this,
                        PS: this.PubSub
                    }), this.SelectableSet = new Dt({
                        DS: this,
                        PS: this.PubSub
                    }), this.SelectedSet = new Pt({
                        DS: this,
                        PS: this.PubSub
                    }), this.Selection = new Mt({
                        DS: this,
                        PS: this.PubSub
                    }), this.Drag = new at({
                        DS: this,
                        PS: this.PubSub
                    }), this.DropZones = new dt({
                        DS: this,
                        PS: this.PubSub
                    }), this.Interaction = new ut({
                        DS: this,
                        PS: this.PubSub
                    }), Kt({
                        DS: this,
                        PS: this.PubSub
                    }), this.PubSub.subscribe("Interaction:end", () => this.continue = !1), this.PubSub.subscribe("DS:end", ({
                        items: t
                    }) => this.continue = !1), this.start()
                }
                stop(t = !0, e = !0, s = !1) {
                    s && this.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), e && this.SelectedSet.clear(), this.stopped = !0
                }
                addSelection(t, e = !1, s = !1) {
                    const i = lt(t);
                    return this.SelectedSet.addAll(i), s || this.addSelectables(t, !1, !1), e && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), this.getSelection()
                }
                removeSelection(t, e = !1, s = !1) {
                    const i = lt(t);
                    return this.SelectedSet.deleteAll(i), s && this.removeSelectables(t, !1, !1), e && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), this.getSelection()
                }
                toggleSelection(t, e = !1, s = !1) {
                    const i = lt(t);
                    return i.forEach(i => this.SelectedSet.has(i) ? this.removeSelection(t, e, s) : this.addSelection(t, e, s)), e && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), this.getSelection()
                }
                setSelection(t, e = !1, s = !1) {
                    return this.clearSelection(), this.addSelection(t, e, s), this.getSelection()
                }
                clearSelection(t = !1) {
                    return this.SelectedSet.clear(), t && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), this.getSelection()
                }
                addSelectables(t, e, s) {
                    const i = lt(t);
                    return this.SelectableSet.addAll(i), e && this.SelectedSet.addAll(i), s && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), i
                }
                removeSelectables(t, e, s) {
                    const i = lt(t);
                    return this.SelectableSet.deleteAll(i), e && this.removeSelection(t), s && this.PubSub.publish("DS:end", {
                        items: this.SelectedSet.elements,
                        isDragging: this.Interaction.isDragging
                    }), i
                }
            }
            K(Bt, "isCollision", void 0), Bt.isCollision = ct;
            var Zt = s("554d"),
                Ft = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        class: {
                            inactive: !t.showMenu
                        },
                        style: t.menuOffset,
                        attrs: {
                            items: t.items
                        }
                    })
                },
                Ut = [],
                Gt = s("694c"),
                Yt = {
                    mixins: [k, w["a"], _["a"]],
                    props: {
                        data: {
                            type: Object
                        }
                    },
                    data() {
                        return {
                            showMenu: null !== this.data,
                            menuOffset: null,
                            isDownloadable: null,
                            isWithinArchive: !1,
                            fileName: ""
                        }
                    },
                    computed: { ...Object(a["f"])({
                            desktopPath: "desktopPath",
                            shortcuts: "shortcuts"
                        }),
                        items() {
                            var t;
                            const e = [{
                                    label: this.$t("restore"),
                                    click: this.restore,
                                    hasDivider: !0,
                                    test: "restore"
                                }, {
                                    label: this.$t("delete"),
                                    click: this.permaDelete,
                                    hasDivider: !0,
                                    test: "delete"
                                }],
                                s = [{
                                    label: this.$t("open"),
                                    bold: !0,
                                    click: this.open,
                                    hasDivider: !0,
                                    test: "open"
                                }, {
                                    label: this.$t("extract-here"),
                                    click: () => this.extractHere(this.data.path),
                                    hidden: this.isWithinArchive || this.data && !Object(m["d"])(this.data.path),
                                    hasDivider: !0,
                                    test: "extract-here"
                                }, {
                                    label: this.$t("send-to") + " Desktop",
                                    click: this.sendToDesktop,
                                    hidden: this.isWithinArchive,
                                    hasDivider: !0,
                                    test: "sendto"
                                }, Object(y["e"])() && {
                                    label: this.$t("download"),
                                    click: () => this.download(this.data.path),
                                    hidden: !this.isDownloadable,
                                    test: "download"
                                }, {
                                    label: this.$t("cut"),
                                    click: this.cut,
                                    disabled: this.isWithinArchive,
                                    test: "cut"
                                }, {
                                    label: this.$t("copy"),
                                    click: this.copy,
                                    disabled: this.isWithinArchive,
                                    hasDivider: !0,
                                    test: "copy"
                                }, {
                                    label: this.$t("delete"),
                                    click: this.delete,
                                    disabled: this.isWithinArchive,
                                    test: "delete"
                                }, {
                                    label: this.$t("rename"),
                                    click: this.rename,
                                    hasDivider: !0,
                                    hidden: this.isWithinArchive,
                                    test: "rename"
                                }].filter(Boolean);
                            return [..."bin" === (null === (t = this.data) || void 0 === t ? void 0 : t.host) ? e : s, {
                                label: this.$t("properties"),
                                click: () => {},
                                disabled: !0,
                                test: "properties"
                            }]
                        }
                    },
                    watch: {
                        data(t) {
                            if (this.showMenu = null !== t, !t) return;
                            const {
                                x: e,
                                y: s,
                                path: i
                            } = t, {
                                offsetWidth: n,
                                offsetHeight: o
                            } = this.$el, {
                                offsetWidth: r,
                                offsetHeight: a
                            } = this.$parent.$el;
                            this.parseInfo(i), this.menuOffset = {
                                left: (e + n < r ? e : e - n) + "px",
                                top: (s + o < a ? s : s - o) + "px"
                            }
                        }
                    },
                    methods: { ...Gt["c"].mapMutations([Gt["a"].SelectItem, Gt["a"].RenameItem]),
                        async parseInfo(t) {
                            const {
                                ext: e
                            } = Object(m["r"])(t);
                            this.fileName = Object(m["c"])(t), this.isDownloadable = e && "lnk" !== e, this.isWithinArchive = Object(I["b"])(t)
                        },
                        open() {
                            this[Gt["a"].SelectItem](this.data.path), this.closeMenu()
                        },
                        sendToDesktop() {
                            const {
                                name: t
                            } = Object(m["r"])(this.fileName), e = Object(f["e"])(this.fileName), s = Object(f["b"])(this.fileName);
                            this.$store.dispatch(S["a"].ShortcutAdd, {
                                lbl: Object(f["a"])(t + " - Shortcut.lnk", this.shortcuts),
                                key: s,
                                icon: e,
                                data: JSON.stringify({
                                    exe: s,
                                    icon: e,
                                    path: this.data.path
                                }),
                                type: "shortcut"
                            }), this.closeMenu()
                        },
                        cut() {
                            this.$store.commit(S["a"].ClipboardItem, {
                                path: this.data.path,
                                action: "cut"
                            }), this.closeMenu()
                        },
                        copy() {
                            this.$store.commit(S["a"].ClipboardItem, {
                                path: this.data.path,
                                action: "copy"
                            }), this.closeMenu()
                        },
                        async delete() {
                            try {
                                const t = P["a"].getParentDirectory(this.data.path);
                                if (t === this.desktopPath) {
                                    const t = this.shortcuts.find(t => t.path === this.data.path);
                                    await this.$store.dispatch(S["a"].ShortcutRemove, t)
                                } else await this.$store.dispatch(S["a"].TrashAdd, this.data.path)
                            } catch (t) {
                                this.emitError(t.message || t)
                            }
                            this.closeMenu()
                        },
                        rename() {
                            this[Gt["a"].RenameItem](this.data.path), this.closeMenu()
                        },
                        async restore() {
                            try {
                                await this.$store.dispatch(S["a"].TrashRestore, this.data.path)
                            } catch (t) {
                                Object(g["showToast"])(this.$t(t.message || t))
                            }
                            this.closeMenu()
                        },
                        async permaDelete() {
                            try {
                                await this.$store.dispatch(S["a"].TrashRemove, this.data.path)
                            } catch (t) {
                                Object(g["showToast"])(this.$t(t.message || t))
                            }
                            this.closeMenu()
                        }
                    },
                    components: {
                        BaseMenu: b["a"]
                    }
                },
                Xt = Yt,
                Jt = Object($["a"])(Xt, Ft, Ut, !1, null, null, null),
                qt = Jt.exports,
                Qt = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        class: ["can-hover", {
                            inactive: !t.showMenu
                        }],
                        style: t.menuOffset,
                        attrs: {
                            items: t.items
                        }
                    })
                },
                te = [],
                ee = s("4c41"),
                se = {
                    mixins: [ee["a"], j["a"]],
                    props: {
                        data: {
                            type: Object
                        }
                    },
                    data() {
                        return {
                            menuOffset: null,
                            subOffset: null
                        }
                    },
                    computed: { ...Object(a["f"])(["trash"]),
                        items() {
                            return [{
                                label: this.$t("view"),
                                children: this.viewModes.map(({
                                    value: t,
                                    label: e
                                }) => ({
                                    label: e,
                                    click: () => this.changeViewMode(t),
                                    option: {
                                        type: "radio",
                                        id: "view-" + t,
                                        name: "view-mode",
                                        value: t,
                                        checked: this.viewMode === t
                                    }
                                }))
                            }, {
                                label: this.$t("refresh"),
                                click: () => this.refresh(),
                                hasDivider: !0
                            }, {
                                label: this.$t("empty-bin"),
                                icon: "bin",
                                click: () => this.emptyBin(),
                                disabled: !this.trash.length,
                                hidden: !this.isBin
                            }, {
                                label: this.$t("paste"),
                                click: () => this.paste(this.path),
                                disabled: !this.path || !this.clipboardItem,
                                hidden: this.isBin
                            }, {
                                label: this.$t("copy-path"),
                                click: () => this.copyPath(this.path),
                                disabled: !this.path
                            }, {
                                label: this.$t("upload-files-here"),
                                click: () => this.upload(this.path),
                                disabled: this.isLimited,
                                hasDivider: !0
                            }, {
                                label: this.$t("new"),
                                hidden: this.isLimited,
                                hasDivider: !0,
                                children: [{
                                    label: this.$t("folder"),
                                    icon: "folder-s",
                                    hasDivider: !0,
                                    click: () => this.makeFolder(this.path)
                                }, {
                                    label: this.$t("rich-text-document"),
                                    icon: "wordpad",
                                    click: () => this.makeRichtext(this.path)
                                }, {
                                    label: this.$t("text-document"),
                                    icon: "text-s",
                                    click: () => this.makeText(this.path)
                                }]
                            }, {
                                label: this.$t("properties"),
                                disabled: !0,
                                click: () => {}
                            }]
                        },
                        path() {
                            return this.data && this.data.path ? this.data.path : null
                        },
                        isBin() {
                            return this.data && "bin" === this.data.host
                        },
                        isLimited() {
                            return this.isBin || !this.path || Object(I["b"])(this.path)
                        }
                    },
                    watch: {
                        async data(t) {
                            if (this.showMenu = null !== t, !t) return;
                            const {
                                offsetWidth: e,
                                offsetHeight: s
                            } = this.$el, {
                                offsetWidth: i,
                                offsetHeight: n
                            } = this.$parent.$el, {
                                x: o,
                                y: r
                            } = t;
                            this.menuOffset = {
                                left: (o + e < i ? o : o - e) + "px",
                                top: (r + s < n ? r : r - s) + "px"
                            }, this.subOffset = {
                                left: o + 2 * e > i ? "initial" : "100%",
                                right: o + 2 * e > i ? "100%" : ""
                            }
                        },
                        async path(t) {
                            this.viewMode = await this.getViewMode(t)
                        }
                    },
                    async mounted() {
                        this.viewMode = await this.getViewMode(this.path)
                    },
                    methods: { ...o["e"].mapActions([o["b"].ProgramEvent]),
                        refresh() {
                            this.$store.commit(S["a"].ForceUpdate), this.$bus.$emit("refresh"), this.closeMenu()
                        },
                        async emptyBin() {
                            try {
                                const t = this.trash.map(t => this.$store.dispatch(S["a"].TrashRemove, t.path));
                                await Promise.all(t), this[o["b"].ProgramEvent](o["c"].Explorer.EmptyBin)
                            } catch (t) {
                                Object(g["showToast"])(t.message || t)
                            }
                            this.closeMenu()
                        },
                        changeViewMode(t) {
                            this.setViewMode(this.path, t), this.closeMenu()
                        }
                    },
                    components: {
                        BaseMenu: b["a"]
                    }
                },
                ie = se,
                ne = Object($["a"])(ie, Qt, te, !1, null, null, null),
                oe = ne.exports,
                re = s("c5f4"),
                ae = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        staticClass: "right-0 bottom-0 absolute hover:bg-black/10 m-1 p-1 text-black text-right cursor-pointer desktop__watermark",
                        on: {
                            click: t.showPricing
                        }
                    }, [s("text-regular", [t._v("Win7 Simu")]), s("text-regular", [t._v(t._s(t.$t("version")) + " " + t._s(t.version))]), s("text-regular", [t._v(t._s(t.$t("contains-ads")))])], 1)
                },
                ce = [],
                le = s("78d0"),
                he = s("9224"),
                de = {
                    data() {
                        return {
                            version: he["a"]
                        }
                    },
                    methods: {
                        showPricing() {
                            this.$bus.$emit("showPricing", !0)
                        }
                    },
                    components: {
                        TextRegular: le["a"]
                    }
                },
                ue = de,
                pe = Object($["a"])(ue, ae, ce, !1, null, null, null),
                me = pe.exports,
                ge = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("base-menu", {
                        staticClass: "scrollbar__menu",
                        class: {
                            inactive: !t.showMenu
                        },
                        style: t.menuOffset,
                        attrs: {
                            items: t.items
                        }
                    })
                },
                be = [],
                Se = {
                    props: {
                        data: {
                            type: Object
                        }
                    },
                    data() {
                        return {
                            id: "scrollbar-menu",
                            showMenu: !1,
                            menuOffset: null
                        }
                    },
                    computed: {
                        items() {
                            var t, e, s, i, n, o;
                            return [{
                                label: this.$t("scroll-here"),
                                click: () => {
                                    this.data.scrollHere(), this.closeMenu()
                                },
                                hasDivider: !0
                            }, {
                                label: null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.$t("left-edge") : this.$t("top"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollLeftEdge() : this.data.scrollTop(), this.closeMenu()
                                }
                            }, {
                                label: null !== (e = this.data) && void 0 !== e && e.isHorizontal ? this.$t("right-edge") : this.$t("bottom"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollRightEdge() : this.data.scrollBottom(), this.closeMenu()
                                },
                                hasDivider: !0
                            }, {
                                label: null !== (s = this.data) && void 0 !== s && s.isHorizontal ? this.$t("page-left") : this.$t("page-up"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollPageLeft() : this.data.scrollPageUp(), this.closeMenu()
                                }
                            }, {
                                label: null !== (i = this.data) && void 0 !== i && i.isHorizontal ? this.$t("page-right") : this.$t("page-down"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollPageRight() : this.data.scrollPageDown(), this.closeMenu()
                                },
                                hasDivider: !0
                            }, {
                                label: null !== (n = this.data) && void 0 !== n && n.isHorizontal ? this.$t("scroll-left") : this.$t("scroll-up"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollLeft() : this.data.scrollUp(), this.closeMenu()
                                }
                            }, {
                                label: null !== (o = this.data) && void 0 !== o && o.isHorizontal ? this.$t("scroll-right") : this.$t("scroll-down"),
                                click: () => {
                                    var t;
                                    null !== (t = this.data) && void 0 !== t && t.isHorizontal ? this.data.scrollRight() : this.data.scrollDown(), this.closeMenu()
                                }
                            }]
                        }
                    },
                    watch: {
                        async data(t) {
                            if (this.showMenu = null !== t, !t) return;
                            const {
                                offsetWidth: e,
                                offsetHeight: s
                            } = this.$el, {
                                offsetWidth: i,
                                offsetHeight: n
                            } = this.$parent.$el, {
                                x: o,
                                y: r
                            } = t;
                            this.menuOffset = {
                                left: (o + e < i ? o : o - e) + "px",
                                top: (r + s < n ? r : r - s) + "px"
                            }
                        }
                    },
                    methods: {
                        closeMenu() {
                            this.showMenu = !1
                        }
                    },
                    components: {
                        BaseMenu: b["a"]
                    }
                },
                fe = Se,
                ve = Object($["a"])(fe, ge, be, !1, null, null, null),
                ye = ve.exports,
                we = s("39b3"),
                De = s("c170"),
                Pe = s("91ba"),
                _e = s.n(Pe),
                Ie = s("bf67"),
                ke = s("2ea7"),
                xe = D["default"].extend({
                    mounted() {
                        ke["default"].on("alt+d", () => this.minimizeAll(), "Show desktop"), ke["default"].on("alt+w", () => this.$store.commit(S["a"].Start), "Open/close start menu"), ke["default"].on("alt+e", () => this.$root.$emit(l["c"].OpenWindow, "computer"), "Open Computer"), ke["default"].on("alt+r", () => this.$root.$emit(l["c"].OpenWindow, "run"), "Open Run"), ke["default"].on("alt+l", () => this.$bus.$emit("changeView", {
                            view: "Switch"
                        }), "Switch users"), ke["default"].on("shift+tab", () => {}, "Switch windows")
                    },
                    beforeDestroy() {
                        ke["default"].off("alt+d"), ke["default"].off("alt+w"), ke["default"].off("alt+e"), ke["default"].off("alt+r"), ke["default"].off("alt+l"), ke["default"].off("shift+tab")
                    },
                    methods: {
                        minimizeAll() {
                            this.$store.state.windows.forEach(({
                                id: t
                            }) => this.$store.commit(S["a"].WindowUpdate, {
                                id: t,
                                minimized: !0
                            }))
                        }
                    }
                });
            let Ee = !1;
            var Oe = {
                    mixins: [j["a"], Ie["a"], xe, x["a"]],
                    data() {
                        return {
                            menuOffset: null,
                            itemMenuData: null,
                            renameItem: null,
                            explorerMenuData: null,
                            explorerItemMenuData: null,
                            scrollbarMenuData: null,
                            dragSelect: null
                        }
                    },
                    computed: { ...C["c"].mapState({
                            autoIcons: "autoIcons",
                            sizeIcons: "sizeIcons",
                            showIcons: "showIcons"
                        }),
                        ...Gt["c"].mapState({
                            explorerMenu: "contextMenu"
                        }),
                        ...Zt["d"].mapState({
                            animateWindows: t => t.animateWindows
                        }),
                        ...we["c"].mapState({
                            scrollbarMenu: "contextMenu"
                        }),
                        ...Object(a["f"])({
                            windows: "windows",
                            showAds: "showAds",
                            desktopPath: "desktopPath"
                        }),
                        ...Object(a["f"])({
                            gadgets: t => t.gadgets.gadgets
                        }),
                        ...Object(a["d"])({
                            themeData: "themeData"
                        }),
                        desktopStyle() {
                            return {
                                "--shortcut": `url('${this.themeData.icon.shortcut}')`
                            }
                        },
                        iconItems() {
                            return this.$refs.iconItems
                        }
                    },
                    watch: {
                        autoIcons(t) {
                            this.dragSelect.setSettings({
                                draggability: !t
                            })
                        },
                        renameItem(t) {
                            this.dragSelect.setSettings({
                                keyboardDrag: !t
                            })
                        },
                        async items() {
                            await this.$nextTick(), this.dragSelect.setSettings({
                                selectables: this.iconItems.map(t => t.$el)
                            })
                        },
                        explorerMenu({
                            e: t,
                            type: e,
                            ...s
                        }) {
                            t.preventDefault(), t.stopPropagation();
                            const {
                                x: i,
                                y: n
                            } = this.getCoords(t);
                            this["bg" === e ? "explorerMenuData" : "explorerItemMenuData"] = {
                                x: i,
                                y: n,
                                ...s
                            }
                        },
                        scrollbarMenu({
                            e: t,
                            ...e
                        }) {
                            t.preventDefault(), t.stopPropagation();
                            const {
                                x: s,
                                y: i
                            } = this.getCoords(t);
                            this.scrollbarMenuData = {
                                x: s,
                                y: i,
                                ...e
                            }
                        }
                    },
                    mounted() {
                        this.$bus.$on("openMenu", this.openItemMenu), Ee || (Ee = !0, window.addEventListener("touchstart", this.closeMenus), window.addEventListener("mousedown", this.closeMenus)), _e()(this.$refs.desktop, {
                            onDrop: t => {
                                this._parse(t, this.desktopPath)
                            }
                        }), this.dragSelect = new Bt({
                            draggability: !this.autoIcons,
                            keyboardDrag: !1,
                            area: this.$refs.iconList,
                            selectables: this.iconItems.map(t => t.$el),
                            selectedClass: "is-active"
                        }), this.dragSelect.subscribe("DS:end", ({
                            items: t,
                            isDragging: e
                        }) => {
                            if (e) {
                                const e = t.map(t => {
                                    const {
                                        x: e,
                                        y: s
                                    } = t.getBoundingClientRect();
                                    return {
                                        key: t.dataset.key,
                                        x: e,
                                        y: s
                                    }
                                });
                                this.emitDrag(e)
                            }
                        })
                    },
                    destroyed() {
                        Ee = !1, window.removeEventListener("touchstart", this.closeMenus), window.removeEventListener("mousedown", this.closeMenus), this.$bus.$off("openMenu", this.openItemMenu), this.dragSelect.stop()
                    },
                    methods: {
                        getComponent(t) {
                            return t.startsWith("web_") ? "webapp" : t.startsWith("game_") ? "online-game" : t.startsWith("message_") ? "message" : t
                        },
                        getCoords(t) {
                            const {
                                top: e,
                                left: s
                            } = this.$el.getBoundingClientRect(), i = t.clientX + .5 || t.touches[0].clientX, n = t.clientY + .5 || t.touches[0].clientY;
                            return {
                                x: i - s,
                                y: n - e
                            }
                        },
                        openMenu(t) {
                            if (t.preventDefault(), t.target !== this.$refs.iconList && !t.target.className.includes("icons")) return;
                            const {
                                x: e,
                                y: s
                            } = this.getCoords(t);
                            this.menuOffset = {
                                x: e,
                                y: s
                            }, this.dragSelect.clearSelection(), this.mixinHidePopups(t)
                        },
                        openItemMenu({
                            e: t,
                            id: e
                        }) {
                            t.preventDefault(), t.stopPropagation();
                            const {
                                x: s,
                                y: i
                            } = this.getCoords(t), n = this.iconItems.find(t => t.item.key === e);
                            this.itemMenuData = {
                                x: s,
                                y: i,
                                id: e
                            }, this.mixinHidePopups(t), n && this.dragSelect.setSelection(n.$el)
                        },
                        closeMenus({
                            target: t
                        }) {
                            t.closest(".winui-menu") || (this.$bus.$emit("closeMenu"), this.menuOffset = null, this.itemMenuData = null, this.explorerMenuData = null, this.explorerItemMenuData = null, this.scrollbarMenuData = null)
                        },
                        handleClickOutside(t) {
                            this.dragSelect.removeSelection(t)
                        },
                        toggleRenaming(t) {
                            this.renameItem = t
                        },
                        refresh() {
                            this.iconItems.forEach(({
                                $el: t
                            }) => {
                                t.style.opacity = "0", setTimeout(() => t.style.opacity = null, 100)
                            })
                        },
                        mixinHidePopups(t) {
                            this.hidePopups(t)
                        }
                    },
                    components: {
                        DesktopMenu: V,
                        DesktopItemMenu: A,
                        ExplorerMenu: oe,
                        ExplorerItemMenu: qt,
                        ItemIcon: re["a"],
                        PurchaseSub: me,
                        ScrollbarMenu: ye,
                        DesktopDock: () => s.e("dockmacos").then(s.bind(null, "59d8")),
                        Message: () => s.e("messages").then(s.bind(null, "7680")),
                        ...De["b"]
                    }
                },
                $e = Oe,
                Me = (s("2141"), Object($["a"])($e, h, d, !1, null, null, null)),
                Ae = Me.exports,
                Te = s("895b"),
                Le = s("3294"),
                Ce = s("c88e"),
                je = s("0d26"),
                Ne = s("50f4"),
                ze = {
                    mixins: [x["a"]],
                    data() {
                        return {
                            actualSaver: null,
                            previewSaver: null,
                            timerId: null
                        }
                    },
                    computed: { ...Le["c"].mapState({
                            screensaver: t => t
                        }),
                        ...Object(a["f"])({
                            background: "background"
                        }),
                        ...Object(a["d"])({
                            themeData: "themeData"
                        }),
                        parsedBg() {
                            return Object(r["l"])(this.background || this.themeData.bg)
                        },
                        saverType() {
                            return this.actualSaver || this.previewSaver
                        }
                    },
                    created() {
                        const {
                            windows: t,
                            programs: e,
                            recentPrograms: s
                        } = this.$store.state, {
                            notes: i
                        } = this.$store.state.stickynotes;
                        this.$bus.$on("changeView", this.handleChangeView), this.$bus.$on("changeScreensaver", this.handleChangeScreensaver), this.$root.$on(l["c"].OpenWindow, i => {
                            if (Object(r["c"])(i)) return Object(g["launchApp"])(i), void Object(Ne["b"])(i);
                            const n = t.find(t => t.id === i);
                            if (n) {
                                const {
                                    id: t
                                } = n;
                                n.minimized && this.$store.commit(S["a"].WindowUpdate, {
                                    id: t,
                                    minimized: !1
                                }), this.$store.commit(S["a"].WindowFocus, i)
                            } else this.$store.commit(S["a"].WindowAdd, i), Object(Ne["b"])(i);
                            const o = e.indexOf(i) > -1;
                            if (o) {
                                const t = s.indexOf(i);
                                t > -1 && s.splice(t, 1), s.unshift(i), this.$store.dispatch(S["a"].RecentPrograms, s.slice(0, 8))
                            }
                        }), this.$root.$on(l["c"].CloseWindow, t => this.$store.commit(S["a"].WindowRemove, t)), i.length && this.$root.$emit(l["c"].OpenWindow, "sticky")
                    },
                    mounted() {
                        je["default"].enabled && je["default"].get("app") && this.$root.$emit(l["c"].OpenWindow, je["default"].get("app")), document.addEventListener("click", this.resetTimer), document.addEventListener("mousemove", this.resetTimer), document.addEventListener("touchstart", this.resetTimer), document.addEventListener("touchmove", this.resetTimer), document.addEventListener("keydown", this.resetTimer), document.addEventListener("scroll", this.resetTimer), this[o["b"].ProgramEvent](o["c"].Windows.Logon)
                    },
                    beforeDestroy() {
                        document.removeEventListener("click", this.resetTimer), document.removeEventListener("mousemove", this.resetTimer), document.removeEventListener("touchstart", this.resetTimer), document.removeEventListener("touchmove", this.resetTimer), document.removeEventListener("keydown", this.resetTimer), document.removeEventListener("scroll", this.resetTimer), this.$root.$off(l["c"].OpenWindow), this.$root.$off(l["c"].CloseWindow), this.$bus.$off("changeView", this.handleChangeView), this.$bus.$off("changeScreensaver", this.handleChangeScreensaver)
                    },
                    methods: { ...o["e"].mapActions([o["b"].ProgramEvent]),
                        resetTimer() {
                            const {
                                type: t,
                                timeout: e
                            } = this.screensaver;
                            clearTimeout(this.timerId), this.timerId = setTimeout(() => {
                                this.actualSaver = t
                            }, 60 * e * 1e3)
                        },
                        handleChangeView({
                            view: t
                        }) {
                            "Restart" !== t && "Shutdown" !== t || this[o["b"].ProgramEvent](o["c"].Windows.ExitWindows)
                        },
                        handleChangeScreensaver({
                            type: t,
                            isPreview: e
                        }) {
                            e ? this.previewSaver = t : (this.actualSaver = t, this.previewSaver = null)
                        }
                    },
                    components: {
                        SponsorAds: Ce["a"],
                        MainDesktop: Ae,
                        MainTaskbar: Te["a"],
                        DesktopBackground: c["a"],
                        StartMenu: () => Promise.all([s.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), s.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), s.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), s.e("startmenu~themestudio"), s.e("startmenu")]).then(s.bind(null, "97ee")),
                        ScreenSaver: () => Promise.all([s.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), s.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), s.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), s.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), s.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), s.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), s.e("screensaver")]).then(s.bind(null, "3208"))
                    }
                },
                Re = ze,
                Ve = (s("22b9"), Object($["a"])(Re, i, n, !1, null, null, null));
            e["default"] = Ve.exports
        },
        "2ea7": function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, "toCodemirrorKey", (function() {
                return N
            }));
            const i = "undefined" !== typeof navigator && navigator.userAgent.toLowerCase().indexOf("firefox") > 0;

            function n(t, e, s, i) {
                t.addEventListener ? t.addEventListener(e, s, i) : t.attachEvent && t.attachEvent("on".concat(e), () => {
                    s(window.event)
                })
            }

            function o(t, e) {
                const s = e.slice(0, e.length - 1);
                for (let i = 0; i < s.length; i++) s[i] = t[s[i].toLowerCase()];
                return s
            }

            function r(t) {
                "string" !== typeof t && (t = ""), t = t.replace(/\s/g, "");
                const e = t.split(",");
                let s = e.lastIndexOf("");
                for (; s >= 0;) e[s - 1] += ",", e.splice(s, 1), s = e.lastIndexOf("");
                return e
            }

            function a(t, e) {
                const s = t.length >= e.length ? t : e,
                    i = t.length >= e.length ? e : t;
                let n = !0;
                for (let o = 0; o < s.length; o++) - 1 === i.indexOf(s[o]) && (n = !1);
                return n
            }
            const c = {
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
                    "-": i ? 173 : 189,
                    "=": i ? 61 : 187,
                    ";": i ? 59 : 186,
                    "'": 222,
                    "[": 219,
                    "]": 221,
                    "\\": 220
                },
                l = {
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
            for (let z = 1; z < 20; z++) c["f".concat(z)] = 111 + z;
            let p = [],
                m = !1,
                g = "all";
            const b = [],
                S = t => c[t.toLowerCase()] || l[t.toLowerCase()] || t.toUpperCase().charCodeAt(0),
                f = t => Object.keys(c).find(e => c[e] === t),
                v = t => Object.keys(l).find(e => l[e] === t);

            function y(t) {
                g = t || "all"
            }

            function w() {
                return g || "all"
            }

            function D() {
                return p.slice(0)
            }

            function P() {
                return p.map(t => f(t) || v(t) || String.fromCharCode(t))
            }

            function _() {
                const t = [];
                return Object.keys(u).forEach(e => {
                    u[e].forEach(e => {
                        let {
                            key: s,
                            scope: i,
                            mods: n,
                            shortcut: o
                        } = e;
                        t.push({
                            scope: i,
                            shortcut: o,
                            mods: n,
                            keys: s.split("+").map(t => S(t))
                        })
                    })
                }), t
            }

            function I(t) {
                const e = t.target || t.srcElement,
                    {
                        tagName: s
                    } = e;
                let i = !0;
                return !e.isContentEditable && ("INPUT" !== s && "TEXTAREA" !== s && "SELECT" !== s || e.readOnly) || (i = !1), i
            }

            function k(t) {
                return "string" === typeof t && (t = S(t)), -1 !== p.indexOf(t)
            }

            function x(t, e) {
                let s, i;
                t || (t = w());
                for (const n in u)
                    if (Object.prototype.hasOwnProperty.call(u, n))
                        for (s = u[n], i = 0; i < s.length;) s[i].scope === t ? s.splice(i, 1) : i++;
                w() === t && y(e || "all")
            }

            function E(t) {
                let e = t.keyCode || t.which || t.charCode;
                const s = p.indexOf(e);
                if (s >= 0 && p.splice(s, 1), t.key && "meta" === t.key.toLowerCase() && p.splice(0, p.length), 93 !== e && 224 !== e || (e = 91), e in d) {
                    d[e] = !1;
                    for (const t in l) l[t] === e && (L[t] = !1)
                }
            }

            function O(t) {
                if ("undefined" === typeof t) Object.keys(u).forEach(t => delete u[t]);
                else if (Array.isArray(t)) t.forEach(t => {
                    t.key && $(t)
                });
                else if ("object" === typeof t) t.key && $(t);
                else if ("string" === typeof t) {
                    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) s[i - 1] = arguments[i];
                    let [n, o] = s;
                    "function" === typeof n && (o = n, n = ""), $({
                        key: t,
                        scope: n,
                        method: o,
                        splitKey: "+"
                    })
                }
            }
            const $ = t => {
                let {
                    key: e,
                    scope: s,
                    method: i,
                    splitKey: n = "+"
                } = t;
                const c = r(e);
                c.forEach(t => {
                    const e = t.split(n),
                        r = e.length,
                        c = e[r - 1],
                        h = "*" === c ? "*" : S(c);
                    if (!u[h]) return;
                    s || (s = w());
                    const d = r > 1 ? o(l, e) : [];
                    u[h] = u[h].filter(t => {
                        const e = !i || t.method === i;
                        return !(e && t.scope === s && a(t.mods, d))
                    })
                })
            };

            function M(t, e, s, i) {
                if (e.element !== i) return;
                let n;
                if (e.scope === s || "all" === e.scope) {
                    n = e.mods.length > 0;
                    for (const t in d) Object.prototype.hasOwnProperty.call(d, t) && (!d[t] && e.mods.indexOf(+t) > -1 || d[t] && -1 === e.mods.indexOf(+t)) && (n = !1);
                    (0 !== e.mods.length || d[16] || d[18] || d[17] || d[91]) && !n && "*" !== e.shortcut || (e.keys = [], e.keys = e.keys.concat(p), !1 === e.method(t, e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.cancelBubble && (t.cancelBubble = !0)))
                }
            }

            function A(t, e) {
                const s = u["*"];
                let i = t.keyCode || t.which || t.charCode;
                if (!L.filter.call(this, t)) return;
                if (93 !== i && 224 !== i || (i = 91), -1 === p.indexOf(i) && 229 !== i && p.push(i), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(e => {
                        const s = h[e];
                        t[e] && -1 === p.indexOf(s) ? p.push(s) : !t[e] && p.indexOf(s) > -1 ? p.splice(p.indexOf(s), 1) : "metaKey" === e && t[e] && 3 === p.length && (t.ctrlKey || t.shiftKey || t.altKey || (p = p.slice(p.indexOf(s))))
                    }), i in d) {
                    d[i] = !0;
                    for (const t in l) l[t] === i && (L[t] = !0);
                    if (!s) return
                }
                for (const o in d) Object.prototype.hasOwnProperty.call(d, o) && (d[o] = t[h[o]]);
                t.getModifierState && (!t.altKey || t.ctrlKey) && t.getModifierState("AltGraph") && (-1 === p.indexOf(17) && p.push(17), -1 === p.indexOf(18) && p.push(18), d[17] = !0, d[18] = !0);
                const n = w();
                if (s)
                    for (let o = 0; o < s.length; o++) s[o].scope === n && ("keydown" === t.type && s[o].keydown || "keyup" === t.type && s[o].keyup) && M(t, s[o], n, e);
                if (i in u)
                    for (let o = 0; o < u[i].length; o++)
                        if (("keydown" === t.type && u[i][o].keydown || "keyup" === t.type && u[i][o].keyup) && u[i][o].key) {
                            const s = u[i][o],
                                {
                                    splitKey: r
                                } = s,
                                a = s.key.split(r),
                                c = [];
                            for (let t = 0; t < a.length; t++) c.push(S(a[t]));
                            c.sort().join("") === p.sort().join("") && M(t, s, n, e)
                        }
            }

            function T(t) {
                return b.indexOf(t) > -1
            }

            function L(t, e, s) {
                p = [];
                const i = r(t);
                let a = [],
                    c = "all",
                    h = document,
                    d = 0,
                    g = !1,
                    f = !0,
                    v = "+",
                    y = !1,
                    w = !1;
                for (void 0 === s && "function" === typeof e && (s = e), "[object Object]" === Object.prototype.toString.call(e) && (e.scope && (c = e.scope), e.element && (h = e.element), e.keyup && (g = e.keyup), void 0 !== e.keydown && (f = e.keydown), void 0 !== e.capture && (y = e.capture), "string" === typeof e.splitKey && (v = e.splitKey), !0 === e.single && (w = !0)), "string" === typeof e && (c = e), w && O(t, c); d < i.length; d++) t = i[d].split(v), a = [], t.length > 1 && (a = o(l, t)), t = t[t.length - 1], t = "*" === t ? "*" : S(t), t in u || (u[t] = []), u[t].push({
                    keyup: g,
                    keydown: f,
                    scope: c,
                    mods: a,
                    shortcut: i[d],
                    method: s,
                    key: i[d],
                    splitKey: v,
                    element: h
                });
                "undefined" !== typeof h && !T(h) && window && (b.push(h), n(h, "keydown", t => {
                    A(t, h)
                }, y), m || (m = !0, n(window, "focus", () => {
                    p = []
                }, y)), n(h, "keyup", t => {
                    A(t, h), E(t)
                }, y))
            }

            function C(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                Object.keys(u).forEach(s => {
                    const i = u[s].filter(s => s.scope === e && s.shortcut === t);
                    i.forEach(t => {
                        t && t.method && t.method()
                    })
                })
            }
            const j = {
                getPressedKeyString: P,
                setScope: y,
                getScope: w,
                deleteScope: x,
                getPressedKeyCodes: D,
                getAllKeyCodes: _,
                isPressed: k,
                filter: I,
                trigger: C,
                unbind: O,
                keyMap: c,
                modifier: l,
                modifierMap: h
            };
            for (const z in j) Object.prototype.hasOwnProperty.call(j, z) && (L[z] = j[z]);
            if ("undefined" !== typeof window) {
                const t = window.hotkeys;
                L.noConflict = e => (e && window.hotkeys === L && (window.hotkeys = t), L), window.hotkeys = L
            }
            e["default"] = {
                keys: {},
                on(t, e, s = "", i = "all") {
                    return s && (this.keys[i] = this.keys[i] || {}, this.keys[i][t] = s), L(t, i, (t, s) => {
                        t.preventDefault(), e(t, s)
                    })
                },
                off(t, e = "all") {
                    return L.unbind(t, e)
                },
                scope(t) {
                    return t ? L.setScope(t) : L.getScope()
                },
                deleteScope(t) {
                    return L.deleteScope(t)
                }
            };
            const N = t => {
                const e = t.toLowerCase().split("+"),
                    s = e.length - 2,
                    i = e.length - 1;
                return "shift" === e[s] && (e[i] = e[i].toUpperCase(), e.splice(s, 1)), e.join("-")
            }
        },
        3294: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return r
            })), s.d(e, "c", (function() {
                return a
            })), s.d(e, "a", (function() {
                return c
            })), s.d(e, "e", (function() {
                return l
            }));
            var i = s("968c"),
                n = s("2f62");
            const o = {
                    SetScreensaver: "setScreensaver"
                },
                r = "screensaver",
                a = Object(n["a"])(r),
                c = o,
                l = {
                    None: {
                        value: null,
                        label: "none"
                    },
                    Blank: {
                        value: "blank",
                        label: "blank"
                    },
                    Bubbles: {
                        value: "bubbles",
                        label: "bubbles"
                    },
                    Pictures: {
                        value: "pictures",
                        label: "pictures"
                    }
                };
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        type: null,
                        timeout: 1,
                        showLogon: !1
                    }
                },
                getters: {},
                mutations: {
                    [o.SetScreensaver]: (t, {
                        type: e,
                        timeout: s,
                        showLogon: i
                    }) => {
                        t.type = e, t.timeout = s, t.showLogon = i
                    }
                },
                actions: {
                    [o.SetScreensaver]: ({
                        commit: t,
                        rootState: e
                    }, s) => (t(o.SetScreensaver, s), i["default"].update("/configs/", e.user, "configs", {
                        screensaver: s
                    }))
                }
            }
        },
        "39b3": function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return o
            })), s.d(e, "c", (function() {
                return r
            })), s.d(e, "a", (function() {
                return a
            }));
            var i = s("2f62");
            const n = {
                    OpenContextMenu: "openContextMenu"
                },
                o = "scrollbar",
                r = Object(i["a"])(o),
                a = n;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        contextMenu: void 0
                    }
                },
                getters: {},
                mutations: {
                    [n.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    }
                },
                actions: {}
            }
        },
        "4c41": function(t, e, s) {
            "use strict";
            var i = s("17b6"),
                n = s("2b0e"),
                o = s("f106"),
                r = s("a080"),
                a = s("0f35");
            const c = ["xl-icons", "lg-icons", "md-icons", "sm-icons", "list", "details", "tiles", "content"],
                l = "tiles";
            e["a"] = n["default"].extend({
                data() {
                    return {
                        viewMode: l
                    }
                },
                computed: {
                    viewModes() {
                        return c.map(t => ({
                            value: t,
                            label: this.$t(t)
                        }))
                    }
                },
                mounted() {
                    this.$bus.$on("changeExplorerView", this._updateViewMode)
                },
                beforeDestroy() {
                    this.$bus.$off("changeExplorerView", this._updateViewMode)
                },
                methods: {
                    _updateViewMode({
                        viewMode: t
                    }) {
                        this.viewMode = t
                    },
                    async getViewMode(t) {
                        try {
                            const e = await o["a"].getMeta(t, Object(a["f"])(t) ? i["a"].External : void 0),
                                {
                                    viewMode: s
                                } = JSON.parse(e) || {};
                            return s && "string" === typeof s ? s : l
                        } catch (e) {
                            return l
                        }
                    },
                    async setViewMode(t, e) {
                        if (t && Object(r["b"])(t)) return;
                        const s = Object(a["f"])(t) ? i["a"].External : void 0;
                        await o["a"].setMeta(t, {
                            viewMode: e
                        }, s), this.$bus.$emit("changeExplorerView", {
                            viewMode: e
                        })
                    }
                }
            })
        },
        "50f4": function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return r
            })), s.d(e, "b", (function() {
                return a
            }));
            var i = s("1547");
            s("acfd");
            const n = Object(i["d"])("FirebaseAnalytics", {
                web: () => Promise.all([s.e("chunk-9691fd08"), s.e("chunk-2d0e9322")]).then(s.bind(null, "8d00")).then(t => new t.FirebaseAnalyticsWeb)
            });
            var o = s("f708");

            function r(t, e) {
                Object(o["b"])() && n.logEvent({
                    name: t,
                    params: e
                })
            }

            function a(t) {
                Object(o["b"])() && n.setCurrentScreen({
                    screenName: t
                })
            }
        },
        "554d": function(t, e, s) {
            "use strict";
            s.d(e, "c", (function() {
                return c
            })), s.d(e, "d", (function() {
                return l
            })), s.d(e, "b", (function() {
                return h
            })), s.d(e, "a", (function() {
                return u
            }));
            var i = s("968c"),
                n = s("0d26"),
                o = s("2f62"),
                r = s("51e6");
            const a = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                c = "effects",
                l = Object(o["a"])(c),
                h = a,
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
                p = t => Object.keys(d).reduce((e, s) => {
                    const i = u.includes(s);
                    return { ...e,
                        [s]: "appearance" === t && !i
                    }
                }, {
                    preset: t
                });
            e["e"] = {
                namespaced: !0,
                state() {
                    return Object.keys(d).reduce((t, e) => ({ ...t,
                        [e]: null
                    }), {})
                },
                getters: {
                    presetAppearance: () => p("appearance"),
                    presetPerformance: () => p("performance")
                },
                mutations: {
                    [a.SetEffects]: (t, e) => {
                        Object.assign(t, e)
                    }
                },
                actions: {
                    [a.SetEffects]: async ({
                        commit: t,
                        dispatch: e
                    }, s) => {
                        if (s) t(a.SetEffects, s);
                        else {
                            const s = await e(a.GetPresetAuto);
                            t(a.SetEffects, s)
                        }
                    },
                    [a.SaveEffects]: async ({
                        state: t,
                        rootState: e
                    }) => i["default"].update("/configs/", e.user, "configs", {
                        effects: t
                    }),
                    [a.GetPresetAuto]: async ({
                        getters: t
                    }) => {
                        let e = await Object(r["getWeiBaseScore"])();
                        n["default"].enabled && n["default"].get("wei") && (e = parseFloat(n["default"].get("wei")));
                        const s = e > 4 ? t.presetAppearance : e >= 3 ? d : t.presetPerformance;
                        return { ...s,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        6271: function(t, e, s) {
            "use strict";
            var i = s("694c"),
                n = s("2f62"),
                o = s("04a5"),
                r = s("6792"),
                a = s("2b0e"),
                c = s("f106"),
                l = s("4cca"),
                h = s("9a72");
            e["a"] = a["default"].extend({
                mixins: [h["a"]],
                computed: { ...Object(n["f"])(["shortcuts", "programs", "pinnedPrograms", "user"]),
                    ...Object(n["f"])({
                        apps: t => t.misc.apps
                    }),
                    ...Object(n["d"])(["themeData"]),
                    defaultShortcuts() {
                        return [{
                            key: "bin",
                            lbl: this.$t("bin"),
                            icon: "bin"
                        }, {
                            key: "computer",
                            lbl: this.$t("computer"),
                            icon: "computer"
                        }]
                    },
                    items() {
                        const t = [...this.shortcuts],
                            e = this.defaultShortcuts.map(e => {
                                const s = t.findIndex(t => t.key === e.key);
                                return s < 0 ? e : t.splice(s, 1)[0]
                            });
                        return [...e, ...t]
                    }
                },
                methods: { ...i["c"].mapMutations([i["a"].SetTempData]),
                    getShortcut(t) {
                        const e = e => e.key === t;
                        return this.shortcuts.find(e) || this.defaultShortcuts.find(e)
                    },
                    async openItem(t) {
                        const e = this.getShortcut(t.key);
                        if (e) try {
                            let s = e.path,
                                n = null;
                            if ("shortcut" === e.type) {
                                const o = await c["a"].read(e.path, !0),
                                    a = JSON.parse(o);
                                if (s = a ? a.path : s, n = a ? a.exe : Object(l["b"])(t.lbl), "webapp" === n) return n = e.key, this[i["a"].SetTempData]({
                                    content: { ...e,
                                        target: a
                                    }
                                }), void this.$root.$emit(r["c"].OpenWindow, n)
                            } else n = t.key.startsWith("folder") ? "computer" : 1 === e.key.split("-").length ? e.key : Object(l["b"])(t.lbl);
                            if ("file" === n) return this.emitError(o["a"].UNSUPPORTED_TYPE);
                            s && this[i["a"].SetTempData]({
                                path: s
                            }), this.$root.$emit(r["c"].OpenWindow, n)
                        } catch (s) {
                            s instanceof SyntaxError ? this.emitError(o["a"].CORRUPTED_FILE) : this.emitError(s)
                        } else this.$root.$emit(r["c"].OpenWindow, t)
                    }
                }
            })
        },
        "694c": function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return o
            })), s.d(e, "c", (function() {
                return r
            })), s.d(e, "a", (function() {
                return a
            }));
            var i = s("2f62");
            const n = {
                    SetTempData: "setTempData",
                    ClearTempData: "clearTempData",
                    OpenContextMenu: "openContextMenu",
                    SelectItem: "selectItem",
                    RenameItem: "renameItem"
                },
                o = "fileexplorer",
                r = Object(i["a"])(o),
                a = n;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        tempData: void 0,
                        contextMenu: void 0,
                        selectedItemPath: null,
                        renamingItemPath: null
                    }
                },
                getters: {},
                mutations: {
                    [n.SetTempData](t, e) {
                        t.tempData = e
                    },
                    [n.ClearTempData](t) {
                        t.tempData = void 0
                    },
                    [n.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    },
                    [n.SelectItem](t, e) {
                        t.selectedItemPath = e
                    },
                    [n.RenameItem](t, e) {
                        t.renamingItemPath = e
                    }
                },
                actions: {}
            }
        },
        "6bf2": function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return c
            })), s.d(e, "b", (function() {
                return l
            }));
            var i = s("be8c"),
                n = s("1547"),
                o = s("dbd1");
            const r = Object(n["d"])("FirebaseAuthentication", {
                web: () => s.e("chunk-2d238653").then(s.bind(null, "feca")).then(t => new t.FirebaseAuthenticationWeb)
            });

            function a(t) {
                return t.trim().toLowerCase() + "@win7.simu"
            }
            const c = i["AuthErrorCodes"],
                l = o["b"];
            e["c"] = {
                async create(t, e) {
                    return /^[a-zA-Z0-9]*$/.test(t) ? (await Object(i["createUserWithEmailAndPassword"])(Object(i["getAuth"])(), a(t), e), this.updateProfile({
                        displayName: t
                    })) : Promise.reject({
                        code: c.INVALID_RECIPIENT_EMAIL
                    })
                },
                async login(t, e) {
                    const s = t.includes("@win7.simu") ? t : a(t),
                        n = r.signInWithEmailAndPassword({
                            email: s,
                            password: e
                        }),
                        o = Object(i["signInWithEmailAndPassword"])(Object(i["getAuth"])(), s, e),
                        [c] = await Promise.all([o, n]);
                    return c.user
                },
                async loginWith(t) {
                    let e, s;
                    if (t === o["b"].GOOGLE) e = await r.signInWithGoogle(), s = i["GoogleAuthProvider"].credential(e.credential.idToken, e.credential.accessToken);
                    else if (t === o["b"].APPLE) e = await r.signInWithApple({
                        skipNativeAuth: !0
                    }), s = new i["OAuthProvider"](t).credential({
                        idToken: e.credential.idToken,
                        rawNonce: e.credential.nonce
                    });
                    else {
                        if (t !== o["b"].GITHUB) return Promise.reject({
                            message: "Provider not supported"
                        });
                        e = await r.signInWithGithub(), s = i["GithubAuthProvider"].credential(e.credential.accessToken)
                    }
                    const {
                        user: n
                    } = await Object(i["signInWithCredential"])(Object(i["getAuth"])(), s);
                    return { ...n,
                        isNewUser: e.additionalUserInfo.isNewUser
                    }
                },
                async linkWith(t) {
                    let e, s;
                    if (t === o["b"].GOOGLE) e = await r.linkWithGoogle(), s = i["GoogleAuthProvider"].credential(e.credential.idToken, e.credential.accessToken);
                    else if (t === o["b"].APPLE) e = await r.linkWithApple(), s = new i["OAuthProvider"](t).credential({
                        idToken: e.credential.idToken,
                        rawNonce: e.credential.nonce
                    });
                    else {
                        if (t !== o["b"].GITHUB) return Promise.reject({
                            message: "Provider not supported"
                        });
                        e = await r.linkWithGithub(), s = i["GithubAuthProvider"].credential(e.credential.accessToken)
                    }
                    const {
                        user: n
                    } = await Object(i["signInWithCredential"])(Object(i["getAuth"])(), s);
                    return n
                },
                async unlink(t) {
                    const e = await Object(i["unlink"])(Object(i["getAuth"])().currentUser, t);
                    return e
                },
                logout() {
                    const t = r.signOut(),
                        e = Object(i["signOut"])(Object(i["getAuth"])());
                    return Promise.all([e, t])
                },
                async delete(t) {
                    try {
                        const e = Object(i["getAuth"])().currentUser;
                        return await this.login(e.email, t), Object(i["deleteUser"])(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                },
                async deleteWithoutPassword(t) {
                    const e = Object(i["getAuth"])().currentUser;
                    try {
                        await Object(i["deleteUser"])(e)
                    } catch (s) {
                        if (s.code !== c.CREDENTIAL_TOO_OLD_LOGIN_AGAIN) return Promise.reject(s);
                        try {
                            await this.loginWith(t), await Object(i["deleteUser"])(e)
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }
                },
                async updateProfile(t) {
                    const e = Object(i["getAuth"])().currentUser;
                    return await Object(i["updateProfile"])(e, t), e
                },
                async updatePassword(t, e) {
                    try {
                        const s = Object(i["getAuth"])().currentUser;
                        return await this.login(s.email, t), Object(i["updatePassword"])(s, e)
                    } catch (s) {
                        return Promise.reject(s)
                    }
                }
            }
        },
        "743b": function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return r
            })), s.d(e, "c", (function() {
                return a
            })), s.d(e, "a", (function() {
                return c
            }));
            var i = s("968c"),
                n = s("2f62");
            const o = {
                    SetIconSize: "setIconSize",
                    SetIconShow: "setIconShow",
                    SetIconAuto: "setIconAuto"
                },
                r = "desktop",
                a = Object(n["a"])(r),
                c = o;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        sizeIcons: null,
                        showIcons: null,
                        autoIcons: !1
                    }
                },
                getters: {},
                mutations: {
                    [o.SetIconSize]: (t, e) => {
                        t.sizeIcons = e
                    },
                    [o.SetIconShow]: (t, e) => {
                        t.showIcons = e
                    },
                    [o.SetIconAuto]: (t, e) => {
                        t.autoIcons = e
                    }
                },
                actions: {
                    [o.SetIconSize]: ({
                        commit: t,
                        rootState: e
                    }, s) => (t(o.SetIconSize, s), i["default"].update("/configs/", e.user, "configs", {
                        sizeIcons: s
                    })),
                    [o.SetIconShow]: ({
                        commit: t,
                        rootState: e
                    }, s) => (t(o.SetIconShow, s), i["default"].update("/configs/", e.user, "configs", {
                        showIcons: s
                    })),
                    [o.SetIconAuto]: ({
                        commit: t,
                        rootState: e
                    }, s) => (t(o.SetIconAuto, s), i["default"].update("/configs/", e.user, "configs", {
                        autoIcons: s
                    }))
                }
            }
        },
        8712: function(t, e, s) {
            (function(e) {
                let s;
                t.exports = "function" === typeof queueMicrotask ? queueMicrotask.bind("undefined" !== typeof window ? window : e) : t => (s || (s = Promise.resolve())).then(t).catch(t => setTimeout(() => {
                    throw t
                }, 0))
            }).call(this, s("c8ba"))
        },
        "8b77": function(t, e, s) {
            "use strict";
            var i = s("4cca"),
                n = s("0e9a"),
                o = s("1547");
            class r extends o["b"] {
                async write(t) {
                    if ("undefined" === typeof navigator || !navigator.clipboard) throw this.unavailable("Clipboard API not available in this browser");
                    if (void 0 !== t.string) await this.writeText(t.string);
                    else if (t.url) await this.writeText(t.url);
                    else {
                        if (!t.image) throw new Error("Nothing to write");
                        if ("undefined" === typeof ClipboardItem) throw this.unavailable("Writing images to the clipboard is not supported in this browser");
                        try {
                            const e = await (await fetch(t.image)).blob(),
                                s = new ClipboardItem({
                                    [e.type]: e
                                });
                            await navigator.clipboard.write([s])
                        } catch (e) {
                            throw new Error("Failed to write image")
                        }
                    }
                }
                async read() {
                    if ("undefined" === typeof navigator || !navigator.clipboard) throw this.unavailable("Clipboard API not available in this browser");
                    if ("undefined" === typeof ClipboardItem) return this.readText();
                    try {
                        const t = await navigator.clipboard.read(),
                            e = t[0].types[0],
                            s = await t[0].getType(e),
                            i = await this._getBlobData(s, e);
                        return {
                            value: i,
                            type: e
                        }
                    } catch (t) {
                        return this.readText()
                    }
                }
                async readText() {
                    if ("undefined" === typeof navigator || !navigator.clipboard || !navigator.clipboard.readText) throw this.unavailable("Reading from clipboard not supported in this browser");
                    const t = await navigator.clipboard.readText();
                    return {
                        value: t,
                        type: "text/plain"
                    }
                }
                async writeText(t) {
                    if ("undefined" === typeof navigator || !navigator.clipboard || !navigator.clipboard.writeText) throw this.unavailable("Writting to clipboard not supported in this browser");
                    await navigator.clipboard.writeText(t)
                }
                _getBlobData(t, e) {
                    return new Promise((s, i) => {
                        const n = new FileReader;
                        e.includes("image") ? n.readAsDataURL(t) : n.readAsText(t), n.onloadend = () => {
                            const t = n.result;
                            s(t)
                        }, n.onerror = t => {
                            i(t)
                        }
                    })
                }
            }
            const a = Object(o["d"])("Clipboard", {
                web: () => new r
            });
            var c = s("04a5"),
                l = s("01b4"),
                h = s("2b0e"),
                d = s("0fbc"),
                u = s("f106"),
                p = s("0f35"),
                m = s("2f62"),
                g = s("9a72"),
                b = s("51e6");
            e["a"] = h["default"].extend({
                mixins: [g["a"]],
                data() {
                    return {
                        showMenu: !1
                    }
                },
                computed: { ...Object(m["f"])(["shortcuts", "desktopPath", "clipboardItem"])
                },
                methods: {
                    async _getFileNames(t) {
                        try {
                            return (await u["a"].list(t)).map(t => ({
                                lbl: t.name
                            }))
                        } catch (e) {
                            return []
                        }
                    },
                    async _makeItem(t, e) {
                        if (t === this.desktopPath) {
                            const s = Object(i["a"])(e.lbl, this.shortcuts);
                            await this.$store.dispatch(l["a"].ShortcutAdd, { ...e,
                                path: t,
                                lbl: s
                            })
                        } else {
                            const n = await this._getFileNames(t),
                                o = Object(i["a"])(e.lbl, n),
                                r = `${t}/${o}`,
                                a = Object(p["f"])(e.data) ? u["a"].mkdir(r) : u["a"].write(e.data, r);
                            try {
                                await a
                            } catch (s) {
                                this.emitError(s.message || s)
                            }
                        }
                        this.$store.commit(l["a"].ForceUpdate), this.closeMenu()
                    },
                    async _parse(t, e) {
                        const s = t.map(t => t.size).reduce((t, e) => t + e, 0);
                        this.emitProgress({
                            title: "Uploading",
                            header: `Uploading ${t.length} items (${Object(i["h"])(s)})`,
                            message: "from your device to " + e
                        });
                        const n = t.map(async t => {
                            const s = Object(i["e"])(t.name);
                            return this._makeItem(e, {
                                lbl: t.name,
                                key: Object(i["b"])(t.name),
                                icon: s,
                                data: await ("text" === s ? t.text() : Object(d["d"])(t))
                            })
                        });
                        try {
                            await Promise.all(n)
                        } catch (o) {
                            this.emitError(o.message || o)
                        }
                        this.dismissProgress()
                    },
                    async makeFolder(t) {
                        this._makeItem(t, {
                            lbl: `${this.$t("new")} ${this.$t("folder")}`,
                            key: "folder",
                            icon: "folder",
                            type: "folder"
                        })
                    },
                    makeRichtext(t) {
                        this._makeItem(t, {
                            lbl: `${this.$t("new")} ${this.$t("rich-text-document")}.rtf`,
                            key: "wordpad",
                            icon: "richtext",
                            type: "file",
                            data: ""
                        })
                    },
                    makeText(t) {
                        this._makeItem(t, {
                            lbl: `${this.$t("new")} ${this.$t("text-document")}.txt`,
                            key: "text",
                            icon: "text",
                            type: "file",
                            data: ""
                        })
                    },
                    async upload(t) {
                        const {
                            files: e
                        } = await Object(b["openFile"])(!0), s = Array.from(e);
                        this.closeMenu(), this._parse(s, t)
                    },
                    async paste(t) {
                        if (!this.clipboardItem) return;
                        this.closeMenu();
                        const {
                            path: e,
                            action: s
                        } = this.clipboardItem, o = t, r = Object(i["f"])(e), a = Object(n["c"])(e), {
                            name: h,
                            ext: d
                        } = Object(n["r"])(a);
                        try {
                            if ("cut" === s) {
                                if (this.emitProgress({
                                        title: "Moving",
                                        header: "Moving 1 item",
                                        message: this.$t("wait")
                                    }), o !== r) {
                                    const t = `${o}/${a}`,
                                        s = await u["a"].isExisting(t, o);
                                    if (s) throw new Error(c["a"].NAME_EXISTS);
                                    if (o === this.desktopPath && await this._makeItem(this.desktopPath, {
                                            lbl: a,
                                            key: Object(i["b"])(a),
                                            icon: Object(i["e"])(a),
                                            moving: !0
                                        }), r === this.desktopPath) {
                                        const t = this.shortcuts.find(t => t.path === e);
                                        t && await this.$store.dispatch(l["a"].ShortcutRemove, { ...t,
                                            path: null
                                        })
                                    }
                                    await u["a"].rename(e, t)
                                }
                                this.$store.commit(l["a"].ClipboardItem, null)
                            }
                            if ("copy" === s) {
                                this.emitProgress({
                                    title: "Copying",
                                    header: "Copying 1 item",
                                    message: this.$t("wait")
                                });
                                const t = `${h} - Copy${d?"."+d:""}`,
                                    s = await this._getFileNames(o),
                                    n = Object(i["a"])(t, s);
                                o === this.desktopPath && await this.$store.dispatch(l["a"].ShortcutAdd, {
                                    lbl: n,
                                    key: Object(i["b"])(n),
                                    icon: Object(i["e"])(n),
                                    moving: !0
                                }), await u["a"].copy(e, `${o}/${n}`)
                            }
                        } catch (p) {
                            this.emitError(p.message || p)
                        }
                        this.$store.commit(l["a"].ForceUpdate), this.dismissProgress()
                    },
                    copyPath(t) {
                        a.write({
                            string: t
                        }).then(this.closeMenu)
                    },
                    closeMenu() {
                        this.showMenu = !1
                    }
                }
            })
        },
        "8cc1": function(t, e, s) {
            t.exports = n;
            const i = s("8712");

            function n(t, e) {
                let s, n, o, r = !0;

                function a(t) {
                    function n() {
                        e && e(t, s), e = null
                    }
                    r ? i(n) : n()
                }

                function c(t, e, i) {
                    s[t] = i, (0 === --n || e) && a(e)
                }
                Array.isArray(t) ? (s = [], n = t.length) : (o = Object.keys(t), s = {}, n = o.length), n ? o ? o.forEach((function(e) {
                    t[e]((function(t, s) {
                        c(e, t, s)
                    }))
                })) : t.forEach((function(t, e) {
                    t((function(t, s) {
                        c(e, t, s)
                    }))
                })) : a(null), r = !1
            }
        },
        "91ba": function(t, e, s) {
            t.exports = n, t.exports.processItems = o;
            const i = s("8cc1");

            function n(t, e) {
                if ("string" === typeof t) {
                    const e = t;
                    if (t = window.document.querySelector(t), !t) throw new Error(`"${e}" does not match any HTML elements`)
                }
                if (!t) throw new Error(`"${t}" is not a valid HTML element`);
                "function" === typeof e && (e = {
                    onDrop: e
                }), t.addEventListener("dragenter", r, !1), t.addEventListener("dragover", a, !1), t.addEventListener("dragleave", c, !1), t.addEventListener("drop", l, !1);
                let s = !1,
                    i = 0;
                return function() {
                    d(), t.removeEventListener("dragenter", r, !1), t.removeEventListener("dragover", a, !1), t.removeEventListener("dragleave", c, !1), t.removeEventListener("drop", l, !1)
                };

                function n(t) {
                    if (t.dataTransfer.items || t.dataTransfer.types) {
                        const s = Array.from(t.dataTransfer.items),
                            i = Array.from(t.dataTransfer.types);
                        let n, o;
                        if (s.length) n = s.filter(t => "file" === t.kind), o = s.filter(t => "string" === t.kind);
                        else {
                            if (!i.length) return !1;
                            n = i.filter(t => "Files" === t), o = i.filter(t => t.startsWith("text/"))
                        }
                        return !(0 === n.length && !e.onDropText) && (!(0 === o.length && !e.onDrop) && (0 !== n.length || 0 !== o.length))
                    }
                    return !1
                }

                function r(t) {
                    if (t.stopPropagation(), t.preventDefault(), n(t)) return s ? (i += 1, !1) : (s = !0, e.onDragEnter && e.onDragEnter(t), h(), !1)
                }

                function a(t) {
                    if (t.stopPropagation(), t.preventDefault(), n(t)) return e.onDragOver && e.onDragOver(t), t.dataTransfer.dropEffect = "copy", !1
                }

                function c(t) {
                    if (t.stopPropagation(), t.preventDefault(), n(t)) return i > 0 ? (i -= 1, !1) : (s = !1, e.onDragLeave && e.onDragLeave(t), d(), !1)
                }

                function l(t) {
                    t.stopPropagation(), t.preventDefault(), e.onDragLeave && e.onDragLeave(t), d(), s = !1, i = 0;
                    const n = {
                            x: t.clientX,
                            y: t.clientY
                        },
                        r = t.dataTransfer.getData("text");
                    return r && e.onDropText && e.onDropText(r, n), e.onDrop && t.dataTransfer.items && o(t.dataTransfer.items, (s, i, o) => {
                        if (s) return void console.error(s);
                        if (0 === i.length) return;
                        const r = t.dataTransfer.files;
                        e.onDrop(i, n, r, o)
                    }), !1
                }

                function h() {
                    t.classList.add("drag")
                }

                function d() {
                    t.classList.remove("drag")
                }
            }

            function o(t, e) {
                t = Array.from(t).filter(t => "file" === t.kind), 0 === t.length && e(null, [], []), i(t.map(t => e => {
                    r(t.webkitGetAsEntry(), e)
                }), (t, s) => {
                    if (t) return void e(t);
                    const i = s.flat(1 / 0),
                        n = i.filter(t => t.isFile),
                        o = i.filter(t => t.isDirectory);
                    e(null, n, o)
                })
            }

            function r(t, e) {
                let s = [];
                if (t.isFile) t.file(s => {
                    s.fullPath = t.fullPath, s.isFile = !0, s.isDirectory = !1, e(null, s)
                }, t => {
                    e(t)
                });
                else if (t.isDirectory) {
                    const e = t.createReader();
                    n(e)
                }

                function n(t) {
                    t.readEntries(e => {
                        e.length > 0 ? (s = s.concat(Array.from(e)), n(t)) : o()
                    })
                }

                function o() {
                    i(s.map(t => e => {
                        r(t, e)
                    }), (s, i) => {
                        s ? e(s) : (i.push({
                            fullPath: t.fullPath,
                            name: t.name,
                            isFile: !1,
                            isDirectory: !0
                        }), e(null, i))
                    })
                }
            }
        },
        "9a72": function(t, e, s) {
            "use strict";
            var i = s("694c"),
                n = s("6792"),
                o = s("2b0e");
            e["a"] = o["default"].extend({
                data() {
                    return {
                        activeProgress: null
                    }
                },
                methods: { ...i["c"].mapMutations([i["a"].SetTempData]),
                    _emitMessage(t) {
                        const e = "message_" + Date.now();
                        this[i["a"].SetTempData]({
                            content: {
                                key: e,
                                ...t
                            }
                        }), this.$root.$emit(n["c"].OpenWindow, e), "progress" === t.type && (this.activeProgress = e)
                    },
                    emitError(t) {
                        this._emitMessage({
                            type: "error",
                            message: t
                        })
                    },
                    emitProgress(t) {
                        this._emitMessage({
                            type: "progress",
                            ...t
                        })
                    },
                    dismissProgress() {
                        this.$root.$emit(n["c"].CloseWindow, this.activeProgress), this.activeProgress = null
                    }
                }
            })
        },
        acfd: function(t, e, s) {
            "use strict";
            var i, n;
            s.d(e, "b", (function() {
                    return i
                })), s.d(e, "a", (function() {
                    return n
                })),
                function(t) {
                    t["AdPersonalization"] = "AD_PERSONALIZATION", t["AdStorage"] = "AD_STORAGE", t["AdUserData"] = "AD_USER_DATA", t["AnalyticsStorage"] = "ANALYTICS_STORAGE", t["FunctionalityStorage"] = "FUNCTIONALITY_STORAGE", t["PersonalizationStorage"] = "PERSONALIZATION_STORAGE"
                }(i || (i = {})),
                function(t) {
                    t["Granted"] = "GRANTED", t["Denied"] = "DENIED"
                }(n || (n = {}))
        },
        af50: function(t, e, s) {},
        bf67: function(t, e, s) {
            "use strict";
            var i = s("01b4"),
                n = s("2b0e"),
                o = s("6271");
            const r = "iconDragEnd";
            e["a"] = n["default"].extend({
                mixins: [o["a"]],
                data() {
                    return {}
                },
                beforeDestroy() {
                    this.$root.$off(r)
                },
                methods: {
                    emitDrag(t) {
                        this.$root.$emit(r, t)
                    },
                    handleDrag() {
                        this.$root.$on(r, t => {
                            const e = t.find(t => t.key === this.item.key);
                            if (!e) return;
                            const {
                                x: s,
                                y: n
                            } = e, {
                                x: o,
                                y: r
                            } = this.item;
                            s && n && (s !== o || n !== r) && this.$store.dispatch(i["a"].ShortcutMove, { ...this.item,
                                x: s,
                                y: n
                            })
                        })
                    }
                }
            })
        },
        c0c5: function(t, e, s) {
            "use strict";
            s("c6d5")
        },
        c5f4: function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }, {
                            name: "tap",
                            rawName: "v-tap:300",
                            value: t.open,
                            expression: "open",
                            arg: "300"
                        }, {
                            name: "clickout",
                            rawName: "v-clickout",
                            value: t.handleClickOutside,
                            expression: "handleClickOutside"
                        }],
                        class: ["absolute flex flex-col items-center px-0.5 py-1 border border-transparent border-solid desktop__icon-item", {
                            "is-shortcut": t.shortcut,
                            "is-cut": t.cut,
                            "is-file": !!t.fileProgram
                        }],
                        style: t.style,
                        attrs: {
                            title: t.itemName.new,
                            "data-key": t.item.key,
                            "data-test-desktop-item": t.item.icon
                        },
                        on: {
                            contextmenu: t.openMenu
                        }
                    }, [s("span", {
                        staticClass: "relative desktop__icon-box"
                    }, [s("base-icon", {
                        staticClass: "desktop__icon-icon",
                        attrs: {
                            id: t.item.icon,
                            icon: t.itemIcon
                        }
                    })], 1), t.renaming ? s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.itemName.new,
                            expression: "itemName.new"
                        }],
                        ref: "nameInput",
                        staticClass: "p-0 max-w-full text-center shrink-0 desktop__icon-name is-input",
                        attrs: {
                            maxlength: "30"
                        },
                        domProps: {
                            value: t.itemName.new
                        },
                        on: {
                            blur: t.rename,
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.blur(e)
                            },
                            input: function(e) {
                                e.target.composing || t.$set(t.itemName, "new", e.target.value)
                            }
                        }
                    }) : s("span", {
                        staticClass: "max-w-full overflow-hidden text-black text-center text-ellipsis whitespace-nowrap shrink-0 desktop__icon-name"
                    }, [t._v(" " + t._s(t.itemName.new) + " ")])])
                },
                n = [],
                o = s("0e9a"),
                r = s("2f62"),
                a = s("58cd"),
                c = s("743b"),
                l = s("01b4"),
                h = s("4cca"),
                d = s("0f35"),
                u = s("bf67"),
                p = s("51e6");
            const m = {
                sm: 50,
                md: 80,
                lg: 120
            };
            var g = {
                    mixins: [u["a"]],
                    props: {
                        item: Object,
                        index: Number,
                        renaming: Boolean,
                        asDecorator: Boolean
                    },
                    data() {
                        return {
                            size: {
                                width: 0,
                                height: 0
                            },
                            position: {
                                x: 0,
                                y: 0
                            },
                            itemName: {},
                            itemExt: {},
                            hideExtension: !0,
                            nameInput: null
                        }
                    },
                    computed: { ...c["c"].mapState({
                            autoIcons: "autoIcons",
                            sizeIcons: "sizeIcons"
                        }),
                        ...Object(r["f"])({
                            trash: "trash",
                            clipboardItem: "clipboardItem",
                            shortcuts: "shortcuts"
                        }),
                        ...Object(r["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets",
                            isRtl: "isRtl"
                        }),
                        oldName() {
                            return this.itemExt.old ? `${this.itemName.old}.${this.itemExt.old}` : this.itemName.old
                        },
                        newName() {
                            return this.itemExt.new ? `${this.itemName.new}.${this.itemExt.new}` : this.itemName.new
                        },
                        itemIcon() {
                            let {
                                icon: t
                            } = this.item;
                            return Object(o["h"])(t) || Object(d["e"])(t) ? t : ("bin" === t && this.trash.length > 0 && (t = "bin-full"), this.asDecorator ? this.themeAssets.base.icon[t] : this.themeData.icon[t])
                        },
                        style() {
                            const t = this.isRtl ? -1 : 1;
                            return {
                                width: this.size.width + "px",
                                height: this.size.height + "px",
                                transform: `translate(${this.position.x*t}px, ${this.position.y}px)`,
                                "--program": this.fileProgram ? `url('${this.fileProgram}')` : null
                            }
                        },
                        shortcut() {
                            return "shortcut" === this.item.type
                        },
                        fileProgram() {
                            if ("file" === this.item.icon) {
                                const t = Object(h["b"])(this.item.path);
                                return "file" === t ? null : this.themeData.icon[t]
                            }
                            return null
                        },
                        cut() {
                            return this.clipboardItem && "cut" === this.clipboardItem.action && this.clipboardItem.path === this.item.path
                        }
                    },
                    watch: {
                        item: {
                            deep: !0,
                            immediate: !0,
                            handler({
                                path: t,
                                lbl: e
                            }) {
                                const s = this.shortcuts.find(e => e.path === t && "folder" === e.type);
                                if (s) this.itemName = {
                                    old: e,
                                    new: e
                                }, this.itemExt = {
                                    old: "",
                                    new: ""
                                };
                                else {
                                    const {
                                        name: t,
                                        ext: s
                                    } = Object(o["r"])(e);
                                    this.itemName = {
                                        old: t,
                                        new: t
                                    }, this.itemExt = {
                                        old: s,
                                        new: s
                                    }
                                }
                            }
                        },
                        async renaming(t) {
                            t && (await this.$nextTick(), this.nameInput = this.$refs.nameInput, this.nameInput.select())
                        },
                        sizeIcons() {
                            this.updateIcon()
                        },
                        autoIcons() {
                            this.updateIcon()
                        }
                    },
                    mounted() {
                        this.handleDrag(), this.updateIcon(), window.addEventListener("resize", this.updateIcon)
                    },
                    methods: {
                        openMenu(t) {
                            this.asDecorator || this.$bus.$emit("openMenu", {
                                e: t,
                                id: this.item.key
                            })
                        },
                        open({
                            target: t
                        }, e) {
                            this.asDecorator || e && t !== this.nameInput && this.openItem(this.item)
                        },
                        blur() {
                            this.nameInput.blur()
                        },
                        focus() {
                            this.nameInput.focus()
                        },
                        async rename() {
                            const {
                                item: t,
                                oldName: e,
                                newName: s
                            } = this;
                            if (this.itemName.new && s !== e) try {
                                const e = {
                                    id: t.key,
                                    name: s
                                };
                                await this.$store.dispatch(l["a"].ShortcutRename, e), this.$emit("rename", null)
                            } catch (i) {
                                this.focus(), Object(p["showToast"])(this.$t(i))
                            } else this.itemName.new = this.itemName.old, this.itemExt.new = this.itemExt.old, this.$emit("rename", null)
                        },
                        handleClickOutside() {
                            this.$emit("outclick", this.$el)
                        },
                        updateIcon() {
                            if (this.size = {
                                    width: m[this.sizeIcons],
                                    height: m[this.sizeIcons]
                                }, !this.autoIcons && this.item.x >= 0 && this.item.y >= 0) return void(this.position = {
                                x: this.item.x,
                                y: this.item.y
                            });
                            const t = Math.floor(window.innerHeight / this.size.height),
                                e = t > 1 ? t - 1 : 1,
                                s = this.index % e,
                                i = Math.floor(this.index / e) * this.size.width,
                                n = (s - Math.floor(s / e)) * this.size.height;
                            this.position = {
                                x: i,
                                y: n
                            }
                        }
                    },
                    components: {
                        BaseIcon: a["a"]
                    }
                },
                b = g,
                S = (s("06c4"), s("2877")),
                f = Object(S["a"])(b, i, n, !1, null, null, null);
            e["a"] = f.exports
        },
        c6d5: function(t, e, s) {},
        c88e: function(t, e, s) {
            "use strict";
            var i = function() {
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
                n = [],
                o = s("f708"),
                r = s("2f62");
            const a = {
                slidein: 6,
                interstitial: 15,
                vertical: 20
            };
            var c = {
                    props: {
                        type: String
                    },
                    computed: { ...Object(r["f"])({
                            showAds: "showAds"
                        }),
                        adUnit() {
                            return a[this.type] || a.slidein
                        },
                        isPwa: () => Object(o["d"])()
                    }
                },
                l = c,
                h = s("2877"),
                d = Object(h["a"])(l, i, n, !1, null, null, null);
            e["a"] = d.exports
        },
        dbd1: function(t, e, s) {
            "use strict";
            var i, n;
            s.d(e, "a", (function() {
                    return i
                })), s.d(e, "b", (function() {
                    return n
                })),
                function(t) {
                    t["IndexedDbLocal"] = "INDEXED_DB_LOCAL", t["InMemory"] = "IN_MEMORY", t["BrowserLocal"] = "BROWSER_LOCAL", t["BrowserSession"] = "BROWSER_SESSION"
                }(i || (i = {})),
                function(t) {
                    t["APPLE"] = "apple.com", t["FACEBOOK"] = "facebook.com", t["GAME_CENTER"] = "gc.apple.com", t["GITHUB"] = "github.com", t["GOOGLE"] = "google.com", t["MICROSOFT"] = "microsoft.com", t["PLAY_GAMES"] = "playgames.google.com", t["TWITTER"] = "twitter.com", t["YAHOO"] = "yahoo.com", t["PASSWORD"] = "password", t["PHONE"] = "phone"
                }(n || (n = {}))
        },
        de84: function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return t.isAnimated ? s("video", {
                        staticClass: "w-full h-full object-cover desktop-background is-animated",
                        attrs: {
                            src: t.src,
                            muted: "",
                            loop: "",
                            autoplay: "",
                            playsinline: "",
                            "data-test-desktop-background": t.src
                        },
                        domProps: {
                            muted: !0
                        }
                    }) : s("span", {
                        staticClass: "is-static w-full h-full desktop-background",
                        style: {
                            "--bg": t.bgVar
                        },
                        attrs: {
                            "data-test-desktop-background": t.src
                        }
                    })
                },
                n = [],
                o = {
                    props: {
                        src: String,
                        isAnimated: Boolean
                    },
                    computed: {
                        bgVar() {
                            if (this.src) return this.src.startsWith("#") ? this.src : `url(${this.src})`
                        }
                    }
                },
                r = o,
                a = (s("c0c5"), s("2877")),
                c = Object(a["a"])(r, i, n, !1, null, null, null);
            e["a"] = c.exports
        },
        e874: function(t, e, s) {}
    }
]);