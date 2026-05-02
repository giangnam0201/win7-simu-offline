(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["computer", "listview-content", "listview-tiles"], {
        "0083": function(t, e, i) {
            "use strict";
            i("6e5e")
        },
        "0616": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("button", {
                        directives: [{
                            name: "tap",
                            rawName: "v-tap:400",
                            value: t.handleDoubleClick,
                            expression: "handleDoubleClick",
                            arg: "400"
                        }, {
                            name: "clickout",
                            rawName: "v-clickout",
                            value: t.handleClickOutside,
                            expression: "handleClickOutside"
                        }, {
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.handleOpenMenu,
                            expression: "handleOpenMenu",
                            arg: "touchhold"
                        }],
                        class: ["p-0 text-left listview__item", {
                            "is-active": t.item.active
                        }],
                        style: t.shortcutIcon,
                        attrs: {
                            title: t.item.label,
                            "data-test-listview-item": t.item.type
                        },
                        on: {
                            contextmenu: t.handleOpenMenu,
                            click: function(e) {
                                return e.stopPropagation(), t.handleClick(e)
                            }
                        }
                    }, [t.item.icon ? i("span", {
                        staticClass: "listview__item-iconbox shrink-0",
                        style: t.item.iconSize ? {
                            width: t.item.iconSize + "px",
                            height: t.item.iconSize + "px"
                        } : {}
                    }, [i("base-icon", {
                        staticClass: "w-full h-full listview__item-icon",
                        attrs: {
                            id: t.item.type,
                            icon: t.item.icon
                        }
                    })], 1) : t._e(), i("span", {
                        staticClass: "w-full overflow-hidden listview__item-info"
                    }, [t.item.renaming ? i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.newFullName.name,
                            expression: "newFullName.name"
                        }],
                        ref: "input",
                        staticClass: "p-0 border border-current border-solid leading-5 listview__item-label is-input",
                        attrs: {
                            maxlength: "30"
                        },
                        domProps: {
                            value: t.newFullName.name
                        },
                        on: {
                            blur: t.rename,
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.blur(e)
                            },
                            input: function(e) {
                                e.target.composing || t.$set(t.newFullName, "name", e.target.value)
                            }
                        }
                    }) : i("span", {
                        staticClass: "block border border-transparent border-solid overflow-hidden text-base text-ellipsis leading-5 whitespace-nowrap shrink-0 listview__item-label",
                        style: {
                            width: t.item.labelWidth ? t.normalizeWidth(t.item.labelWidth) : void 0
                        }
                    }, [t._v(" " + t._s(t.item.label) + " ")]), t._t("default")], 2)])
                },
                a = [],
                n = i("58cd"),
                r = i("a321"),
                o = i("2f62"),
                l = i("0e9a"),
                c = {
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            newFullName: Object(l["r"])(this.item.label.toString())
                        }
                    },
                    computed: { ...Object(o["d"])({
                            themeData: "themeData"
                        }),
                        shortcutIcon() {
                            return {
                                "--shortcut": `url('${this.themeData.icon.shortcut}')`
                            }
                        }
                    },
                    watch: {
                        "item.renaming" (t) {
                            t ? this.$nextTick().then(() => this.$refs.input.select()) : this.newFullName.name || (this.newFullName = Object(l["r"])(this.item.label.toString()))
                        }
                    },
                    mounted() {
                        this.$bus.$on("refresh", this.refresh)
                    },
                    beforeDestroy() {
                        this.$bus.$off("refresh", this.refresh)
                    },
                    methods: {
                        normalizeWidth(t) {
                            return r["a"].normalizeWidth(t, this.item.extras.length, !0)
                        },
                        handleClick() {
                            this.item.click && this.item.click()
                        },
                        handleDoubleClick(t, e) {
                            "INPUT" !== t.target.tagName && e && this.item.dblclick && this.item.dblclick(t)
                        },
                        handleOpenMenu(t) {
                            this.item.openMenu && this.item.openMenu(t)
                        },
                        handleClickOutside(t) {
                            this.item.outclick && this.item.outclick(t)
                        },
                        rename() {
                            this.item.rename && this.item.rename(this.newFullName)
                        },
                        blur() {
                            this.$refs.input.blur()
                        },
                        refresh() {
                            const t = this.$el;
                            t.style.opacity = "0", setTimeout(() => t.style.opacity = null, 50)
                        }
                    },
                    components: {
                        BaseIcon: n["a"]
                    }
                },
                u = c,
                d = (i("f746"), i("2877")),
                h = Object(d["a"])(u, s, a, !1, null, null, null);
            e["a"] = h.exports
        },
        "0d94": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("winui-menu", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: function(e) {
                                return t.$emit("outclick", e)
                            },
                            expression: "(e) => $emit('outclick', e)"
                        }]
                    }, [t._l(t.items, (function(e, s) {
                        return [e.hidden ? t._e() : i("winui-menuitem", {
                            key: s,
                            attrs: {
                                "aria-disabled": e.disabled,
                                "data-test-menu-item": e.test
                            }
                        }, [e.icon ? i("base-icon", {
                            attrs: {
                                id: e.icon,
                                icon: t.icon[e.icon]
                            }
                        }) : t._e(), e.children && e.children.length ? [i("button", [t._v(t._s(e.label))]), i("winui-menu", {
                            style: t.subStyle,
                            attrs: {
                                "data-test-menu": e.test
                            }
                        }, [t._l(e.children, (function(e, s) {
                            return [e.hidden ? t._e() : i("winui-menuitem", {
                                key: s,
                                attrs: {
                                    "aria-disabled": e.disabled,
                                    "data-test-menu-item": e.test
                                }
                            }, [e.option ? [i("input", t._b({}, "input", e.option, !1)), i("label", {
                                attrs: {
                                    for: e.option.id
                                },
                                on: {
                                    click: function(i) {
                                        return i.stopPropagation(), t.safeClick(i, e.click)
                                    }
                                }
                            }, [t._v(t._s(e.label))])] : [e.icon ? i("base-icon", {
                                attrs: {
                                    id: e.icon,
                                    icon: t.icon[e.icon]
                                }
                            }) : t._e(), i("button", {
                                attrs: {
                                    disabled: e.disabled
                                },
                                on: {
                                    click: function(i) {
                                        return i.stopPropagation(), t.safeClick(i, e.click)
                                    }
                                }
                            }, [e.bold ? i("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? i("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)]], 2), e.hasDivider && !e.hidden ? i("hr", {
                                key: "hr" + s
                            }) : t._e()]
                        }))], 2)] : e.option ? [i("input", t._b({}, "input", e.option, !1)), i("label", {
                            attrs: {
                                for: e.option.id
                            },
                            on: {
                                click: function(i) {
                                    return i.stopPropagation(), t.safeClick(i, e.click)
                                }
                            }
                        }, [t._v(t._s(e.label))])] : i("button", {
                            attrs: {
                                disabled: e.disabled
                            },
                            on: {
                                click: function(i) {
                                    return i.stopPropagation(), t.safeClick(i, e.click)
                                }
                            }
                        }, [e.bold ? i("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? i("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)], 2), e.hasDivider && !e.hidden ? i("hr", {
                            key: "hr" + s
                        }) : t._e()]
                    }))], 2)
                },
                a = [],
                n = i("58cd"),
                r = i("2f62"),
                o = {
                    props: {
                        items: Array,
                        subStyle: Object,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(r["d"])(["themeData", "themeAssets"]),
                        icon() {
                            return this.asDecorator ? this.themeAssets.base.icon : this.themeData.icon
                        }
                    },
                    methods: {
                        safeClick(t, e) {
                            e && e(t)
                        }
                    },
                    components: {
                        BaseIcon: n["a"]
                    }
                },
                l = o,
                c = i("2877"),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["a"] = u.exports
        },
        1597: function(t, e, i) {
            "use strict";
            i("6d2a")
        },
        "15f0": function(t, e, i) {},
        "1d1d": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return o
            }));
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("button", {
                        class: ["center-flex-x gap-1 px-1 py-0 text-base whitespace-nowrap treeview__button", {
                            "bg-black/20 is-active": t.active
                        }],
                        on: {
                            click: function(e) {
                                return t.$emit("click", e)
                            },
                            dblclick: function(e) {
                                return t.$emit("dblclick", e)
                            }
                        }
                    }, [i("base-icon", {
                        class: ["treeview__button-icon", t.iconClass],
                        attrs: {
                            id: t.icon,
                            icon: t.themeData.icon[t.icon]
                        }
                    }), i("span", {
                        staticClass: "treeview__button-label"
                    }, [t._v(t._s(t.label))])], 1)
                },
                a = [],
                n = i("58cd"),
                r = i("2f62");
            const o = {
                icon: String,
                iconClass: String,
                label: String,
                active: Boolean
            };
            var l = {
                    props: o,
                    computed: { ...Object(r["d"])({
                            themeData: "themeData"
                        })
                    },
                    components: {
                        BaseIcon: n["a"]
                    }
                },
                c = l,
                u = i("2877"),
                d = Object(u["a"])(c, s, a, !1, null, null, null);
            e["a"] = d.exports
        },
        "27b9": function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "flex flex-col w-full listview__view has-content"
                    }, [t._l(t.items, (function(e, s) {
                        return i("listview-item", {
                            key: s,
                            attrs: {
                                item: e
                            }
                        }, t._l(e.extras, (function(e, s) {
                            return i("listview-extra", {
                                key: s,
                                attrs: {
                                    extra: e
                                }
                            }, [t._v(" " + t._s(e.value) + " ")])
                        })), 1)
                    })), t._t("default")], 2)
                },
                a = [],
                n = i("c162"),
                r = i("0616"),
                o = {
                    props: {
                        items: {
                            type: Array
                        }
                    },
                    components: {
                        ListviewItem: r["a"],
                        ListviewExtra: n["a"]
                    }
                },
                l = o,
                c = (i("285b"), i("2877")),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["default"] = u.exports
        },
        "285b": function(t, e, i) {
            "use strict";
            i("897f")
        },
        3780: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("base-message", {
                        attrs: {
                            type: "error"
                        },
                        on: {
                            close: t.close
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [i("winui-button", {
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
                a = [],
                n = i("bbbd"),
                r = i("fceb"),
                o = {
                    mounted() {
                        this[n["b"].ProgramEvent](n["c"].Windows.Asterisk)
                    },
                    methods: { ...n["e"].mapActions([n["b"].ProgramEvent]),
                        close() {
                            this.$emit("close")
                        }
                    },
                    components: {
                        BaseMessage: r["a"]
                    }
                },
                l = o,
                c = i("2877"),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["a"] = u.exports
        },
        "3a7a": function(t, e, i) {
            "use strict";
            i("e61b")
        },
        "3cb5": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t, e = this,
                        i = e.$createElement,
                        s = e._self._c || i;
                    return s("winui-menubar", {
                        class: ["window__menubar", (t = {
                            "is-toolbar": e.asToolbar
                        }, t["is-" + e.iconSize] = !!e.iconSize, t)]
                    }, [e._l(e.items, (function(t, i) {
                        return [s("winui-menuitem", {
                            key: i,
                            staticClass: "window__menubar-item",
                            attrs: {
                                "aria-disabled": t.disabled,
                                tabindex: "0",
                                "data-test-menu-item": t.label
                            }
                        }, [t.items && !t.disabled ? [s("menu-item-button", e._b({}, "menu-item-button", e.bindProps(t), !1)), s("base-menu", {
                            staticClass: "can-hover",
                            attrs: {
                                items: t.items
                            }
                        })] : s("menu-item-button", e._b({
                            attrs: {
                                disabled: t.disabled
                            },
                            on: {
                                click: function(i) {
                                    return i.stopPropagation(), e.click(t.click)
                                }
                            }
                        }, "menu-item-button", e.bindProps(t), !1))], 2)]
                    })), e._t("default")], 2)
                },
                a = [],
                n = i("0d94"),
                r = i("b5ba"),
                o = {
                    props: {
                        items: {
                            type: Array,
                            required: !0
                        },
                        asToolbar: Boolean,
                        hideLabel: Boolean,
                        iconSize: {
                            type: String,
                            validator: t => ["small", "medium"].includes(t)
                        }
                    },
                    methods: {
                        click(t) {
                            t && t()
                        },
                        bindProps(t) {
                            const {
                                icon: e,
                                label: i
                            } = t;
                            return {
                                icon: e,
                                label: i,
                                hideLabel: this.hideLabel,
                                "data-test-menu-action": i
                            }
                        }
                    },
                    components: {
                        BaseMenu: n["a"],
                        MenuItemButton: r["a"]
                    }
                },
                l = o,
                c = (i("ce26"), i("2877")),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["a"] = u.exports
        },
        "3f1f": function(t, e, i) {
            "use strict";
            i("e6be")
        },
        "411e": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        class: ["is-static p-1.5 window__main active", {
                            pinging: t.pinging
                        }, {
                            "center-absolute": !t.decentered
                        }, {
                            "w-[256px] is-wait": "wait" === t.variant
                        }, {
                            "w-[340px] is-help": "help" === t.variant
                        }, {
                            "w-[340px] is-message": "message" === t.variant
                        }]
                    }, ["wait" === t.variant ? i("window-body", {
                        staticClass: "is-wait"
                    }, [t._t("default")], 2) : t._t("default")], 2)
                },
                a = [],
                n = i("1521"),
                r = i("7744"),
                o = {
                    mixins: [r["a"]],
                    props: {
                        variant: {
                            type: String,
                            validator: t => ["wait", "help", "message"].includes(t)
                        },
                        parent: String,
                        decentered: Boolean
                    },
                    components: {
                        WindowBody: n["a"]
                    }
                },
                l = o,
                c = (i("9312"), i("2877")),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["a"] = u.exports
        },
        4615: function(t, e, i) {},
        "4b45": function(t, e, i) {},
        "4c41": function(t, e, i) {
            "use strict";
            var s = i("17b6"),
                a = i("2b0e"),
                n = i("f106"),
                r = i("a080"),
                o = i("0f35");
            const l = ["xl-icons", "lg-icons", "md-icons", "sm-icons", "list", "details", "tiles", "content"],
                c = "tiles";
            e["a"] = a["default"].extend({
                data() {
                    return {
                        viewMode: c
                    }
                },
                computed: {
                    viewModes() {
                        return l.map(t => ({
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
                            const e = await n["a"].getMeta(t, Object(o["f"])(t) ? s["a"].External : void 0),
                                {
                                    viewMode: i
                                } = JSON.parse(e) || {};
                            return i && "string" === typeof i ? i : c
                        } catch (e) {
                            return c
                        }
                    },
                    async setViewMode(t, e) {
                        if (t && Object(r["b"])(t)) return;
                        const i = Object(o["f"])(t) ? s["a"].External : void 0;
                        await n["a"].setMeta(t, {
                            viewMode: e
                        }, i), this.$bus.$emit("changeExplorerView", {
                            viewMode: e
                        })
                    }
                }
            })
        },
        "67ac": function(t, e, i) {
            "use strict";
            i("15f0")
        },
        "694c": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "c", (function() {
                return r
            })), i.d(e, "a", (function() {
                return o
            }));
            var s = i("2f62");
            const a = {
                    SetTempData: "setTempData",
                    ClearTempData: "clearTempData",
                    OpenContextMenu: "openContextMenu",
                    SelectItem: "selectItem",
                    RenameItem: "renameItem"
                },
                n = "fileexplorer",
                r = Object(s["a"])(n),
                o = a;
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
                    [a.SetTempData](t, e) {
                        t.tempData = e
                    },
                    [a.ClearTempData](t) {
                        t.tempData = void 0
                    },
                    [a.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    },
                    [a.SelectItem](t, e) {
                        t.selectedItemPath = e
                    },
                    [a.RenameItem](t, e) {
                        t.renamingItemPath = e
                    }
                },
                actions: {}
            }
        },
        "6d2a": function(t, e, i) {},
        "6e5e": function(t, e, i) {},
        7073: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        class: ["p-3 window__footer", {
                            "flex justify-end": "action" === t.variant
                        }]
                    }, [t._t("default")], 2)
                },
                a = [],
                n = {
                    props: {
                        variant: String
                    }
                },
                r = n,
                o = i("2877"),
                l = Object(o["a"])(r, s, a, !1, null, null, null);
            e["a"] = l.exports
        },
        7662: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "flex flex-wrap gap-2 w-full listview__view has-tiles"
                    }, [t._l(t.items, (function(e, s) {
                        return i("listview-item", {
                            key: s,
                            attrs: {
                                item: e
                            }
                        }, [e.extras ? [1 === e.extras.length ? i("listview-extra", [t._v(" " + t._s(e.extras[0].value) + " ")]) : t._l(e.extras, (function(e, s) {
                            return i("listview-extra", {
                                key: s
                            }, [t._v(" " + t._s(e.value) + " ")])
                        }))] : t._e()], 2)
                    })), t._t("default")], 2)
                },
                a = [],
                n = i("c162"),
                r = i("0616"),
                o = {
                    props: {
                        items: {
                            type: Array
                        }
                    },
                    components: {
                        ListviewItem: r["a"],
                        ListviewExtra: n["a"]
                    }
                },
                l = o,
                c = (i("3f1f"), i("2877")),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["default"] = u.exports
        },
        8712: function(t, e, i) {
            (function(e) {
                let i;
                t.exports = "function" === typeof queueMicrotask ? queueMicrotask.bind("undefined" !== typeof window ? window : e) : t => (i || (i = Promise.resolve())).then(t).catch(t => setTimeout(() => {
                    throw t
                }, 0))
            }).call(this, i("c8ba"))
        },
        "897f": function(t, e, i) {},
        "8b77": function(t, e, i) {
            "use strict";
            var s = i("4cca"),
                a = i("0e9a"),
                n = i("1547");
            class r extends n["b"] {
                async write(t) {
                    if ("undefined" === typeof navigator || !navigator.clipboard) throw this.unavailable("Clipboard API not available in this browser");
                    if (void 0 !== t.string) await this.writeText(t.string);
                    else if (t.url) await this.writeText(t.url);
                    else {
                        if (!t.image) throw new Error("Nothing to write");
                        if ("undefined" === typeof ClipboardItem) throw this.unavailable("Writing images to the clipboard is not supported in this browser");
                        try {
                            const e = await (await fetch(t.image)).blob(),
                                i = new ClipboardItem({
                                    [e.type]: e
                                });
                            await navigator.clipboard.write([i])
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
                            i = await t[0].getType(e),
                            s = await this._getBlobData(i, e);
                        return {
                            value: s,
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
                    return new Promise((i, s) => {
                        const a = new FileReader;
                        e.includes("image") ? a.readAsDataURL(t) : a.readAsText(t), a.onloadend = () => {
                            const t = a.result;
                            i(t)
                        }, a.onerror = t => {
                            s(t)
                        }
                    })
                }
            }
            const o = Object(n["d"])("Clipboard", {
                web: () => new r
            });
            var l = i("04a5"),
                c = i("01b4"),
                u = i("2b0e"),
                d = i("0fbc"),
                h = i("f106"),
                m = i("0f35"),
                p = i("2f62"),
                v = i("9a72"),
                w = i("51e6");
            e["a"] = u["default"].extend({
                mixins: [v["a"]],
                data() {
                    return {
                        showMenu: !1
                    }
                },
                computed: { ...Object(p["f"])(["shortcuts", "desktopPath", "clipboardItem"])
                },
                methods: {
                    async _getFileNames(t) {
                        try {
                            return (await h["a"].list(t)).map(t => ({
                                lbl: t.name
                            }))
                        } catch (e) {
                            return []
                        }
                    },
                    async _makeItem(t, e) {
                        if (t === this.desktopPath) {
                            const i = Object(s["a"])(e.lbl, this.shortcuts);
                            await this.$store.dispatch(c["a"].ShortcutAdd, { ...e,
                                path: t,
                                lbl: i
                            })
                        } else {
                            const a = await this._getFileNames(t),
                                n = Object(s["a"])(e.lbl, a),
                                r = `${t}/${n}`,
                                o = Object(m["f"])(e.data) ? h["a"].mkdir(r) : h["a"].write(e.data, r);
                            try {
                                await o
                            } catch (i) {
                                this.emitError(i.message || i)
                            }
                        }
                        this.$store.commit(c["a"].ForceUpdate), this.closeMenu()
                    },
                    async _parse(t, e) {
                        const i = t.map(t => t.size).reduce((t, e) => t + e, 0);
                        this.emitProgress({
                            title: "Uploading",
                            header: `Uploading ${t.length} items (${Object(s["h"])(i)})`,
                            message: "from your device to " + e
                        });
                        const a = t.map(async t => {
                            const i = Object(s["e"])(t.name);
                            return this._makeItem(e, {
                                lbl: t.name,
                                key: Object(s["b"])(t.name),
                                icon: i,
                                data: await ("text" === i ? t.text() : Object(d["d"])(t))
                            })
                        });
                        try {
                            await Promise.all(a)
                        } catch (n) {
                            this.emitError(n.message || n)
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
                        } = await Object(w["openFile"])(!0), i = Array.from(e);
                        this.closeMenu(), this._parse(i, t)
                    },
                    async paste(t) {
                        if (!this.clipboardItem) return;
                        this.closeMenu();
                        const {
                            path: e,
                            action: i
                        } = this.clipboardItem, n = t, r = Object(s["f"])(e), o = Object(a["c"])(e), {
                            name: u,
                            ext: d
                        } = Object(a["r"])(o);
                        try {
                            if ("cut" === i) {
                                if (this.emitProgress({
                                        title: "Moving",
                                        header: "Moving 1 item",
                                        message: this.$t("wait")
                                    }), n !== r) {
                                    const t = `${n}/${o}`,
                                        i = await h["a"].isExisting(t, n);
                                    if (i) throw new Error(l["a"].NAME_EXISTS);
                                    if (n === this.desktopPath && await this._makeItem(this.desktopPath, {
                                            lbl: o,
                                            key: Object(s["b"])(o),
                                            icon: Object(s["e"])(o),
                                            moving: !0
                                        }), r === this.desktopPath) {
                                        const t = this.shortcuts.find(t => t.path === e);
                                        t && await this.$store.dispatch(c["a"].ShortcutRemove, { ...t,
                                            path: null
                                        })
                                    }
                                    await h["a"].rename(e, t)
                                }
                                this.$store.commit(c["a"].ClipboardItem, null)
                            }
                            if ("copy" === i) {
                                this.emitProgress({
                                    title: "Copying",
                                    header: "Copying 1 item",
                                    message: this.$t("wait")
                                });
                                const t = `${u} - Copy${d?"."+d:""}`,
                                    i = await this._getFileNames(n),
                                    a = Object(s["a"])(t, i);
                                n === this.desktopPath && await this.$store.dispatch(c["a"].ShortcutAdd, {
                                    lbl: a,
                                    key: Object(s["b"])(a),
                                    icon: Object(s["e"])(a),
                                    moving: !0
                                }), await h["a"].copy(e, `${n}/${a}`)
                            }
                        } catch (m) {
                            this.emitError(m.message || m)
                        }
                        this.$store.commit(c["a"].ForceUpdate), this.dismissProgress()
                    },
                    copyPath(t) {
                        o.write({
                            string: t
                        }).then(this.closeMenu)
                    },
                    closeMenu() {
                        this.showMenu = !1
                    }
                }
            })
        },
        "8cc1": function(t, e, i) {
            t.exports = a;
            const s = i("8712");

            function a(t, e) {
                let i, a, n, r = !0;

                function o(t) {
                    function a() {
                        e && e(t, i), e = null
                    }
                    r ? s(a) : a()
                }

                function l(t, e, s) {
                    i[t] = s, (0 === --a || e) && o(e)
                }
                Array.isArray(t) ? (i = [], a = t.length) : (n = Object.keys(t), i = {}, a = n.length), a ? n ? n.forEach((function(e) {
                    t[e]((function(t, i) {
                        l(e, t, i)
                    }))
                })) : t.forEach((function(t, e) {
                    t((function(t, i) {
                        l(e, t, i)
                    }))
                })) : o(null), r = !1
            }
        },
        "91ba": function(t, e, i) {
            t.exports = a, t.exports.processItems = n;
            const s = i("8cc1");

            function a(t, e) {
                if ("string" === typeof t) {
                    const e = t;
                    if (t = window.document.querySelector(t), !t) throw new Error(`"${e}" does not match any HTML elements`)
                }
                if (!t) throw new Error(`"${t}" is not a valid HTML element`);
                "function" === typeof e && (e = {
                    onDrop: e
                }), t.addEventListener("dragenter", r, !1), t.addEventListener("dragover", o, !1), t.addEventListener("dragleave", l, !1), t.addEventListener("drop", c, !1);
                let i = !1,
                    s = 0;
                return function() {
                    d(), t.removeEventListener("dragenter", r, !1), t.removeEventListener("dragover", o, !1), t.removeEventListener("dragleave", l, !1), t.removeEventListener("drop", c, !1)
                };

                function a(t) {
                    if (t.dataTransfer.items || t.dataTransfer.types) {
                        const i = Array.from(t.dataTransfer.items),
                            s = Array.from(t.dataTransfer.types);
                        let a, n;
                        if (i.length) a = i.filter(t => "file" === t.kind), n = i.filter(t => "string" === t.kind);
                        else {
                            if (!s.length) return !1;
                            a = s.filter(t => "Files" === t), n = s.filter(t => t.startsWith("text/"))
                        }
                        return !(0 === a.length && !e.onDropText) && (!(0 === n.length && !e.onDrop) && (0 !== a.length || 0 !== n.length))
                    }
                    return !1
                }

                function r(t) {
                    if (t.stopPropagation(), t.preventDefault(), a(t)) return i ? (s += 1, !1) : (i = !0, e.onDragEnter && e.onDragEnter(t), u(), !1)
                }

                function o(t) {
                    if (t.stopPropagation(), t.preventDefault(), a(t)) return e.onDragOver && e.onDragOver(t), t.dataTransfer.dropEffect = "copy", !1
                }

                function l(t) {
                    if (t.stopPropagation(), t.preventDefault(), a(t)) return s > 0 ? (s -= 1, !1) : (i = !1, e.onDragLeave && e.onDragLeave(t), d(), !1)
                }

                function c(t) {
                    t.stopPropagation(), t.preventDefault(), e.onDragLeave && e.onDragLeave(t), d(), i = !1, s = 0;
                    const a = {
                            x: t.clientX,
                            y: t.clientY
                        },
                        r = t.dataTransfer.getData("text");
                    return r && e.onDropText && e.onDropText(r, a), e.onDrop && t.dataTransfer.items && n(t.dataTransfer.items, (i, s, n) => {
                        if (i) return void console.error(i);
                        if (0 === s.length) return;
                        const r = t.dataTransfer.files;
                        e.onDrop(s, a, r, n)
                    }), !1
                }

                function u() {
                    t.classList.add("drag")
                }

                function d() {
                    t.classList.remove("drag")
                }
            }

            function n(t, e) {
                t = Array.from(t).filter(t => "file" === t.kind), 0 === t.length && e(null, [], []), s(t.map(t => e => {
                    r(t.webkitGetAsEntry(), e)
                }), (t, i) => {
                    if (t) return void e(t);
                    const s = i.flat(1 / 0),
                        a = s.filter(t => t.isFile),
                        n = s.filter(t => t.isDirectory);
                    e(null, a, n)
                })
            }

            function r(t, e) {
                let i = [];
                if (t.isFile) t.file(i => {
                    i.fullPath = t.fullPath, i.isFile = !0, i.isDirectory = !1, e(null, i)
                }, t => {
                    e(t)
                });
                else if (t.isDirectory) {
                    const e = t.createReader();
                    a(e)
                }

                function a(t) {
                    t.readEntries(e => {
                        e.length > 0 ? (i = i.concat(Array.from(e)), a(t)) : n()
                    })
                }

                function n() {
                    s(i.map(t => e => {
                        r(t, e)
                    }), (i, s) => {
                        i ? e(i) : (s.push({
                            fullPath: t.fullPath,
                            name: t.name,
                            isFile: !1,
                            isDirectory: !0
                        }), e(null, s))
                    })
                }
            }
        },
        9312: function(t, e, i) {
            "use strict";
            i("eb0f")
        },
        9812: function(t, e, i) {},
        "9a72": function(t, e, i) {
            "use strict";
            var s = i("694c"),
                a = i("6792"),
                n = i("2b0e");
            e["a"] = n["default"].extend({
                data() {
                    return {
                        activeProgress: null
                    }
                },
                methods: { ...s["c"].mapMutations([s["a"].SetTempData]),
                    _emitMessage(t) {
                        const e = "message_" + Date.now();
                        this[s["a"].SetTempData]({
                            content: {
                                key: e,
                                ...t
                            }
                        }), this.$root.$emit(a["c"].OpenWindow, e), "progress" === t.type && (this.activeProgress = e)
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
                        this.$root.$emit(a["c"].CloseWindow, this.activeProgress), this.activeProgress = null
                    }
                }
            })
        },
        a321: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return n
            }));
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "flex center-flex-x border border-black/20 border-solid min-w-fit listview__header"
                    }, t._l(t.columns, (function(e) {
                        return i("button", {
                            key: e.key,
                            class: ["relative p-1 border-black/20 border-r border-solid overflow-hidden text-base text-left text-ellipsis whitespace-nowrap listview__header-column", {
                                "shrink-0": t.isFixedWidth(e.width)
                            }],
                            style: {
                                width: t.normalizeWidth(e.width)
                            }
                        }, [t._v(" " + t._s(void 0 !== e.label ? e.label : t.$t(e.key)) + " ")])
                    })), 0)
                },
                a = [];
            const n = {
                isFixedWidth(t) {
                    return "number" === typeof t
                },
                normalizeWidth(t, e, i) {
                    const s = i ? 1 : 0;
                    return t ? this.isFixedWidth(t) ? t + "px" : t.toString() : 100 / (e + s) + "%"
                }
            };
            var r = {
                    props: {
                        columns: {
                            type: Array,
                            required: !0
                        }
                    },
                    methods: {
                        isFixedWidth: n.isFixedWidth,
                        normalizeWidth(t) {
                            return n.normalizeWidth(t, this.columns.length)
                        }
                    }
                },
                o = r,
                l = i("2877"),
                c = Object(l["a"])(o, s, a, !1, null, null, null);
            e["b"] = c.exports
        },
        a4ed: function(t, e, i) {
            "use strict";
            i("9812")
        },
        a77a: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "iconSizeMap", (function() {
                return r
            })), i.d(e, "listviewProps", (function() {
                return o
            }));
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        class: ["flex flex-wrap gap-1 listview__view has-icons", t.sizeClass]
                    }, t._l(t.items, (function(t, e) {
                        return i("listview-item", {
                            key: e,
                            attrs: {
                                item: t
                            }
                        })
                    })), 1)
                },
                a = [],
                n = i("0616");
            const r = {
                    sm: "small",
                    md: "medium",
                    lg: "large",
                    xl: "extra"
                },
                o = {
                    items: {
                        type: Array,
                        required: !0
                    },
                    size: {
                        type: [String, Number],
                        validator: t => "string" === typeof t ? Object.values(r).includes(t) : t % 4 === 0
                    }
                };
            var l = {
                    props: o,
                    computed: {
                        sizeClass() {
                            return "string" === typeof this.size ? "is-" + this.size : ""
                        }
                    },
                    components: {
                        ListviewItem: n["a"]
                    }
                },
                c = l,
                u = (i("a4ed"), i("2877")),
                d = Object(u["a"])(c, s, a, !1, null, null, null);
            e["default"] = d.exports
        },
        ace0: function(t, e, i) {},
        b015: function(t, e, i) {
            "use strict";
            i("ace0")
        },
        b47a: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "fragment"
                    }, [i("window-main", {
                        class: ["is-computer", {
                            dialog: t.dialog
                        }],
                        attrs: {
                            id: t.dialog ? null : "window-" + t.id,
                            lock: null !== t.error || this.lock,
                            w: t.dialog ? 500 : 400,
                            h: t.dialog ? 400 : 300,
                            parent: t.parent
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            icon: t.windowIcon,
                            title: t.$t(t.windowTitle)
                        }
                    }, [i("window-controls", {
                        attrs: {
                            hideMaximize: t.dialog,
                            hideMinimize: t.dialog,
                            close: t.exit
                        }
                    })], 1), i("window-addressbar", {
                        attrs: {
                            icon: t.addressIcon,
                            location: t.location
                        },
                        scopedSlots: t._u([{
                            key: "search",
                            fn: function() {
                                return [i("window-addressbar-search", {
                                    attrs: {
                                        location: t.location,
                                        instant: ""
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, [i("window-addressbar-nav", {
                        attrs: {
                            activeBack: t.activeBack,
                            activeNext: t.activeNext
                        },
                        on: {
                            navigate: t.navigate
                        }
                    })], 1), i("window-menubar", {
                        attrs: {
                            asToolbar: "",
                            items: t.toolbar
                        }
                    }, [i("winui-menuitem", {
                        staticClass: "ml-auto"
                    }, [i("menu-item-button", {
                        attrs: {
                            icon: t.icon["view-" + t.viewMode],
                            label: t.$t(t.viewMode),
                            hideLabel: ""
                        }
                    }), i("winui-menu", {
                        staticClass: "is-view"
                    }, [t._l(t.viewModeItems, (function(t) {
                        return i("winui-menuitem", {
                            key: t.value
                        }, [i("menu-item-button", {
                            attrs: {
                                icon: t.icon,
                                label: t.label,
                                context: "menuitem"
                            },
                            on: {
                                click: t.click
                            }
                        })], 1)
                    })), i("winui-slider", {
                        staticClass: "top-3 absolute",
                        attrs: {
                            min: "0",
                            max: "7",
                            value: t.viewModeValue
                        },
                        on: {
                            input: t.inputViewMode
                        }
                    })], 2)], 1)], 1), i("window-body", {
                        attrs: {
                            layout: "panel"
                        }
                    }, [t.disks ? [i("scrollbar-container", {
                        staticClass: "grow-0 shrink-0",
                        attrs: {
                            menuDisabled: ""
                        }
                    }, [i("pane-navigation", {
                        attrs: {
                            disks: t.disks,
                            activePath: t.activePath
                        },
                        on: {
                            open: t.openPath
                        }
                    })], 1), i("scrollbar-container", {
                        staticClass: "w-full"
                    }, [i("pane-content", {
                        attrs: {
                            viewMode: t.viewMode,
                            disks: t.disks,
                            filter: t.filter,
                            activePath: t.activePath,
                            isDialog: t.dialog
                        },
                        on: {
                            error: t.onError,
                            open: t.openPath,
                            change: t.onChange,
                            select: t.onSelect
                        }
                    })], 1)] : t._e()], 2), t.$slots.footer ? i("window-footer", [t._t("footer")], 2) : t._e()], 1), t.error ? i("message-error", {
                        on: {
                            close: function(e) {
                                t.error = null
                            }
                        }
                    }, [t._v(t._s(t.error))]) : t._e()], 1)
                },
                a = [],
                n = i("694c"),
                r = i("4cca"),
                o = i("2f62"),
                l = i("6792"),
                c = i("b5ba"),
                u = i("3780"),
                d = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        class: ["w-full h-full overflow-auto computer__pane-content", {
                            "p-4": !t.isDetailsView
                        }],
                        on: {
                            contextmenu: t.openMenu
                        }
                    }, [t.activePath ? t.isLoading ? i("div", {
                        staticClass: "opacity-60 p-3 text-center"
                    }, [t._v(" " + t._s(t.$t("wait")) + " ")]) : t.files.length ? [t.isDetailsView ? i("listview-column-header", {
                        attrs: {
                            columns: t.contentColumns
                        }
                    }) : t._e(), i("listview-main", t._b({
                        attrs: {
                            items: t.contentItems
                        }
                    }, "listview-main", t.listviewProps, !1))] : i("div", {
                        staticClass: "opacity-60 p-3 text-center"
                    }, [t._v(" " + t._s(t.$t("empty-folder")) + " ")]) : [t.isDetailsView ? i("listview-column-header", {
                        attrs: {
                            columns: t.diskColumns
                        }
                    }) : t._e(), i("collapse-list", {
                        attrs: {
                            title: t.$t("hdd"),
                            count: t.internalDisks.length
                        }
                    }, [t.isContentView ? i("listview-view-content", t._l(t.internalDiskItems, (function(e, s) {
                        return i("computer-disk-item", {
                            key: s,
                            attrs: {
                                diskItem: e,
                                diskData: t.internalDisks[s],
                                showExtraSpace: ""
                            }
                        })
                    })), 1) : t.isTilesView ? i("listview-view-tiles", t._l(t.internalDiskItems, (function(e, s) {
                        return i("computer-disk-item", {
                            key: s,
                            attrs: {
                                diskItem: e,
                                diskData: t.internalDisks[s]
                            }
                        })
                    })), 1) : i("listview-main", t._b({
                        attrs: {
                            items: t.internalDiskItems
                        }
                    }, "listview-main", t.listviewProps, !1))], 1), i("collapse-list", {
                        attrs: {
                            title: t.$t("removable-devices"),
                            count: t.externalDisks.length
                        }
                    }, [t.isContentView ? i("listview-view-content", t._l(t.externalDiskItems, (function(e, s) {
                        return i("computer-disk-item", {
                            key: s,
                            attrs: {
                                diskItem: e,
                                diskData: t.externalDisks[s],
                                showExtraSpace: ""
                            }
                        })
                    })), 1) : t.isTilesView ? i("listview-view-tiles", t._l(t.externalDiskItems, (function(e, s) {
                        return i("computer-disk-item", {
                            key: s,
                            attrs: {
                                diskItem: e,
                                diskData: t.externalDisks[s]
                            }
                        })
                    })), 1) : i("listview-main", t._b({
                        attrs: {
                            items: t.externalDiskItems
                        }
                    }, "listview-main", t.listviewProps, !1))], 1)], i("google-ads", {
                        attrs: {
                            infeed: ""
                        }
                    })], 2)
                },
                h = [],
                m = i("bbbd"),
                p = i("e12e"),
                v = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("listview-item", {
                        attrs: {
                            item: t.diskItem
                        }
                    }, [t.hasStorage(t.diskData) ? [t.showExtraSpace ? i("listview-extra") : t._e(), i("winui-progress", {
                        class: ["meter is-disk", {
                            error: t.isStorageFull(t.diskData)
                        }],
                        attrs: {
                            progress: t.getStoragePercent(t.diskData)
                        }
                    }), i("listview-extra", [t._v(t._s(t.getStorageText(t.diskData)))])] : t._e()], 2)
                },
                w = [],
                f = i("c162"),
                b = i("0616");
            const g = ({
                maxSize: t,
                curSize: e
            }) => e / (t || 1) * 100;
            var y = {
                    props: {
                        diskData: {
                            type: Object
                        },
                        diskItem: {
                            type: Object
                        },
                        showExtraSpace: Boolean
                    },
                    methods: {
                        getStoragePercent: g,
                        getStorageText: ({
                            maxSize: t,
                            remaining: e
                        }) => `${Object(r["h"])(e)} free of ${Object(r["h"])(t)}`,
                        isStorageFull: t => g(t) >= 90,
                        hasStorage: ({
                            maxSize: t
                        }) => t > 0
                    },
                    components: {
                        ListviewItem: b["a"],
                        ListviewExtra: f["a"]
                    }
                },
                _ = y,
                k = (i("1597"), i("2877")),
                x = Object(k["a"])(_, v, w, !1, null, null, null),
                P = x.exports,
                $ = i("04a5"),
                D = i("6a11"),
                C = i("a321"),
                O = i("ed5d"),
                M = i("27b9"),
                I = i("7662"),
                S = i("26a1"),
                j = i("01b4"),
                E = i("91ba"),
                T = i.n(E),
                L = i("f106"),
                F = i("a77a"),
                V = i("0f35"),
                z = i("8b77"),
                A = i("0e9a");
            const W = 16,
                N = 220,
                B = N - W,
                R = "DUMMY";
            var U = {
                    mixins: [z["a"]],
                    props: {
                        disks: Array,
                        filter: Array,
                        activePath: String,
                        isDialog: Boolean,
                        viewMode: {
                            type: String
                        }
                    },
                    data() {
                        return {
                            files: [],
                            internalDisks: [],
                            externalDisks: [],
                            hideExtension: !0,
                            selectedPath: null,
                            outclicked: !1,
                            isLoading: !1
                        }
                    },
                    computed: { ...Object(o["f"])({
                            clipboardItem: "clipboardItem",
                            shortcuts: "shortcuts",
                            trash: "trash",
                            user: "user"
                        }),
                        ...Object(o["f"])({
                            forceUpdate: "forceUpdate",
                            desktopPath: "desktopPath",
                            trashPath: "trashPath"
                        }),
                        ...Object(o["d"])({
                            themeData: "themeData"
                        }),
                        ...n["c"].mapState({
                            selectedItemPath: "selectedItemPath",
                            renamingItemPath: "renamingItemPath"
                        }),
                        icon() {
                            return this.themeData.icon
                        },
                        isDetailsView() {
                            return "details" === this.viewMode
                        },
                        isContentView() {
                            return "content" === this.viewMode
                        },
                        isTilesView() {
                            return "tiles" === this.viewMode
                        },
                        diskColumns() {
                            return ["name", "type", "total-size", "free-space"].map(t => ({
                                key: t,
                                width: N
                            }))
                        },
                        contentColumns() {
                            return ["name", "modified", "type", "size"].map(t => ({
                                key: t,
                                width: N
                            }))
                        },
                        internalDiskItems() {
                            return this.internalDisks.map(t => ({
                                icon: t.icon,
                                type: t.iconType,
                                label: t.name,
                                labelWidth: this.isDetailsView ? B : void 0,
                                active: this.isActive(t.uri),
                                extras: [{
                                    value: this.$t("system"),
                                    width: N
                                }, {
                                    value: Object(r["h"])(t.maxSize),
                                    width: N
                                }, {
                                    value: Object(r["h"])(t.remaining),
                                    width: N
                                }],
                                click: () => this.handleClick(t.uri),
                                dblclick: () => this.openFolder(t),
                                outclick: () => this.handleOutclick(this.activePath)
                            }))
                        },
                        externalDiskItems() {
                            return this.externalDisks.map(t => ({
                                icon: t.icon,
                                type: t.iconType,
                                label: t.name,
                                labelWidth: this.isDetailsView ? B : void 0,
                                active: this.isActive(t.uri),
                                extras: [{
                                    value: this.$t("removable-disk"),
                                    width: N
                                }, {
                                    value: Object(r["h"])(t.maxSize),
                                    width: N
                                }, {
                                    value: Object(r["h"])(t.remaining),
                                    width: N
                                }],
                                click: () => this.handleClick(t.uri),
                                dblclick: () => this.openFolder(t),
                                outclick: () => this.handleOutclick(this.activePath)
                            }))
                        },
                        contentItems() {
                            return this.files.map(t => {
                                const e = "directory" === t.type;
                                let i = [{
                                    value: this.getDate(t.mtime),
                                    width: N
                                }, {
                                    value: this.getFileType(t),
                                    width: N
                                }, {
                                    value: this.getSizeFrom(t.size),
                                    width: N
                                }];
                                return this.isTilesView && (i = e ? [i[1]] : i.slice(1)), this.isContentView && e && (i = i.slice(0, 1)), this.isDetailsView && e && (i = [...i.slice(0, 2), {
                                    value: "",
                                    width: N
                                }]), {
                                    icon: t.icon,
                                    type: t.iconType,
                                    label: t.name,
                                    labelWidth: this.isDetailsView ? B : void 0,
                                    active: this.isActive(t.uri),
                                    renaming: this.isRenaming(t.uri),
                                    extras: i,
                                    click: () => this.handleClick(t.uri),
                                    rename: t => this.rename(t),
                                    dblclick: () => this.open(t),
                                    outclick: () => this.handleOutclick(this.activePath),
                                    openMenu: e => this.openItemMenu(e, t.uri)
                                }
                            })
                        },
                        listviewProps() {
                            if (this.viewMode.includes("icons")) {
                                const [t] = this.viewMode.split("-");
                                return {
                                    size: F["iconSizeMap"][t],
                                    viewMode: "icons"
                                }
                            }
                            return {
                                viewMode: this.viewMode
                            }
                        }
                    },
                    watch: {
                        activePath: {
                            immediate: !0,
                            handler(t) {
                                t && this.listFiles(t)
                            }
                        },
                        trash: {
                            immediate: !0,
                            handler() {
                                var t;
                                (null === (t = this.activePath) || void 0 === t ? void 0 : t.includes(this.trashPath)) && this.listFiles(this.trashPath)
                            }
                        },
                        forceUpdate() {
                            this.activePath && this.listFiles(this.activePath)
                        },
                        filter() {
                            this.activePath && this.listFiles(this.activePath)
                        },
                        selectedItemPath(t) {
                            const e = this.files.find(e => e.uri === t);
                            this.open(e)
                        }
                    },
                    mounted() {
                        const {
                            disks: t,
                            internalDisks: e,
                            externalDisks: i
                        } = this;
                        this.externalDisks.push({
                            uri: R,
                            type: "disk-cd",
                            iconType: "disk-cd",
                            icon: this.icon["disk-cd"],
                            name: "DVD RW Drive (Z:)",
                            maxSize: 0,
                            curSize: 0,
                            remaining: 0
                        }), t.forEach(t => {
                            const s = "removable" === t.type ? i : e,
                                a = Object(r["c"])(t.type);
                            s.push({
                                uri: t.path,
                                type: t.type,
                                iconType: a,
                                icon: this.icon[a],
                                name: Object(r["d"])(t.label, t.letter),
                                maxSize: t.size,
                                curSize: t.used,
                                remaining: t.size - t.used
                            })
                        }), T()(this.$el, {
                            onDrop: t => {
                                this.activePath && this._parse(t, this.activePath)
                            }
                        })
                    },
                    methods: { ...n["c"].mapMutations([n["a"].OpenContextMenu, n["a"].SetTempData, n["a"].RenameItem]),
                        ...m["e"].mapActions([m["b"].ProgramEvent]),
                        getSizeFrom: r["h"],
                        parseFileName(t) {
                            return "directory" === t.type ? {
                                name: t.name,
                                ext: ""
                            } : Object(A["r"])(t.name)
                        },
                        getFileType(t) {
                            const {
                                ext: e
                            } = this.parseFileName(t);
                            return e ? e.toUpperCase() + " File" : "File folder"
                        },
                        getDate(t) {
                            return new Date(t).toLocaleString()
                        },
                        isActive(t) {
                            return t === this.selectedPath
                        },
                        isRenaming(t) {
                            return t === this.renamingItemPath
                        },
                        isCut(t) {
                            return this.clipboardItem && "cut" === this.clipboardItem.action && this.clipboardItem.path === t
                        },
                        async listFiles(t) {
                            this.isLoading = !0;
                            try {
                                const e = await L["a"].list(t),
                                    i = e.filter(t => {
                                        const {
                                            ext: e
                                        } = Object(A["r"])(t.name), i = ".meta" === t.name, s = "directory" === t.type, a = !this.filter.length || this.filter.includes(e);
                                        return !i && (s || a)
                                    }).map(async t => {
                                        const e = Object(r["e"])(t.name, t.type);
                                        let i = null,
                                            s = t.type,
                                            a = this.icon[e],
                                            n = null;
                                        if ("lnk" === Object(A["r"])(t.name).ext) {
                                            try {
                                                n = JSON.parse(await L["a"].read(t.uri, !0))
                                            } catch (o) {
                                                n = {
                                                    icon: "file"
                                                }
                                            }
                                            s = "shortcut", a = Object(V["e"])(n.icon) ? n.icon : this.icon[n.icon], i = n.exe
                                        }
                                        return this.user && t.name === this.user.uid && (t.name = this.user.displayName), { ...t,
                                            name: t.name.replace(/\[d\d+\]/, ""),
                                            type: s,
                                            exe: i,
                                            icon: a,
                                            iconType: e,
                                            shortcut: n
                                        }
                                    });
                                this.files = await Promise.all(i)
                            } catch (e) {
                                this.$emit("error", this.$t(e.message || e))
                            }
                            this.isLoading = !1
                        },
                        open(t) {
                            t.uri.includes(this.trashPath) || ("shortcut" === t.type ? this.isDialog ? this.emitOpen(t) : this.openWindow(t.exe, t.shortcut.path, t.shortcut) : "file" === t.type ? this.isDialog ? this.emitOpen(t) : this.openFile(t) : this.openFolder(t))
                        },
                        async openFolder(t) {
                            const {
                                uri: e,
                                name: i
                            } = t;
                            try {
                                if (e === R) throw new Error;
                                await this.listFiles(e), this.$emit("open", e), this[m["b"].ProgramEvent](m["c"].Explorer.StartNavigation)
                            } catch (s) {
                                this.$emit("error", i + " is not accessible.")
                            }
                        },
                        openFile(t) {
                            const e = Object(r["b"])(t.uri);
                            "file" === e ? this.$emit("error", this.$t($["a"].UNSUPPORTED_TYPE)) : this.openWindow(e, t.uri)
                        },
                        openWindow(t, e, i) {
                            t ? (this.$root.$emit(l["c"].OpenWindow, t), this[n["a"].SetTempData]({
                                path: e,
                                content: i
                            })) : (this.$emit("error", this.$t("corrupted-file")), this[m["b"].ProgramEvent](m["c"].Windows.CriticalStop))
                        },
                        emitOpen(t) {
                            this.$bus.$emit("openPath", t.uri)
                        },
                        select(t) {
                            this.selectedPath = t, this.$emit("change", t), this.$emit("select", t && this.activePath !== t ? [t] : [])
                        },
                        handleClick(t) {
                            this.outclicked = !1, this.select(t)
                        },
                        handleOutclick(t) {
                            !this.outclicked && this.select(t), this.outclicked = !0
                        },
                        _openContextMenu(t) {
                            var e;
                            const i = null !== (e = t.path) && void 0 !== e && e.includes(this.trashPath) ? "bin" : "explorer";
                            this[n["a"].OpenContextMenu]({
                                host: i,
                                ...t
                            })
                        },
                        openMenu(t) {
                            t.target.closest(S["b"]) || (this.select(this.activePath), this._openContextMenu({
                                type: "bg",
                                e: t,
                                path: this.activePath
                            }))
                        },
                        openItemMenu(t, e) {
                            this.selectedPath = e, this._openContextMenu({
                                type: "item",
                                e: t,
                                path: e
                            })
                        },
                        async rename(t) {
                            const e = this.files.find(t => t.uri === this.renamingItemPath);
                            if (!e) return;
                            let i = t.name;
                            if (t.ext && (i += "." + t.ext), t.name && i !== e.name) try {
                                if (this.activePath === this.desktopPath) {
                                    const t = this.shortcuts.find(t => t.path === e.uri),
                                        s = {
                                            id: t.key,
                                            name: i
                                        };
                                    await this.$store.dispatch(j["a"].ShortcutRename, s)
                                } else {
                                    const t = L["a"].getParentDirectory(e.uri),
                                        s = `${t}/${i}`,
                                        a = await L["a"].isExisting(s, t);
                                    if (a) throw new Error("filename-exist");
                                    await L["a"].rename(e.uri, s)
                                }
                                this.$store.commit(j["a"].ForceUpdate), this[n["a"].RenameItem](null)
                            } catch (s) {
                                this.$emit("error", this.$t(s.message || s))
                            } else this[n["a"].RenameItem](null)
                        }
                    },
                    components: {
                        CollapseList: p["a"],
                        ComputerDiskItem: P,
                        ListviewColumnHeader: C["b"],
                        ListviewMain: O["a"],
                        ListviewViewContent: M["default"],
                        ListviewViewTiles: I["default"],
                        GoogleAds: D["a"]
                    }
                },
                q = U,
                H = (i("b015"), Object(k["a"])(q, d, h, !1, null, null, null)),
                J = H.exports,
                G = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "top-0 sticky py-4 pl-2 border-black/10 border-r border-solid w-fit h-full overflow-x-hidden overflow-y-auto computer__pane-navigation",
                        attrs: {
                            "data-test-computer-navigation": ""
                        }
                    }, [i("treeview-collapse", {
                        staticClass: "mb-4",
                        attrs: {
                            open: "",
                            icon: "favorite",
                            label: t.$t("quick-access")
                        }
                    }, [i("treeview-main", {
                        attrs: {
                            items: t.quickAccessItems
                        }
                    })], 1), i("treeview-collapse", {
                        attrs: {
                            open: "",
                            icon: "computer",
                            label: t.$t("computer"),
                            active: !t.activePath
                        },
                        on: {
                            click: function(e) {
                                return t.open(null)
                            }
                        }
                    }, [i("treeview-main", {
                        attrs: {
                            items: t.diskItems
                        }
                    })], 1)], 1)
                },
                Y = [],
                X = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "treeview__collapse-wrapper"
                    }, [i("div", {
                        staticClass: "center-flex-x treeview__collapse-header"
                    }, [i("button", {
                        class: ["center-flex p-0 shrink-0 treeview__collapse-caret", {
                            "is-opened": t.isOpen
                        }],
                        attrs: {
                            "aria-label": "Toggle treeview"
                        },
                        on: {
                            click: function(e) {
                                t.isOpen = !t.isOpen
                            }
                        }
                    }, [i("base-disclosure", {
                        attrs: {
                            open: t.isOpen
                        }
                    })], 1), i("treeview-button", t._g(t._b({
                        staticClass: "treeview__collapse-button",
                        attrs: {
                            iconClass: "treeview__collapse-icon"
                        }
                    }, "treeview-button", t.buttonProps, !1), t.$listeners))], 1), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isOpen,
                            expression: "isOpen"
                        }],
                        staticClass: "treeview__collapse-body"
                    }, [t._t("default")], 2)])
                },
                Z = [],
                K = i("1d1d"),
                Q = i("6115"),
                tt = {
                    props: { ...K["b"],
                        open: Boolean
                    },
                    data() {
                        return {
                            isOpen: this.open
                        }
                    },
                    computed: {
                        buttonProps() {
                            const {
                                icon: t,
                                iconClass: e,
                                label: i,
                                active: s
                            } = this;
                            return {
                                icon: t,
                                iconClass: e,
                                label: i,
                                active: s
                            }
                        }
                    },
                    watch: {
                        open(t) {
                            this.isOpen = t
                        }
                    },
                    components: {
                        BaseDisclosure: Q["a"],
                        TreeviewButton: K["a"]
                    }
                },
                et = tt,
                it = (i("0083"), Object(k["a"])(et, X, Z, !1, null, null, null)),
                st = it.exports,
                at = i("ed8a"),
                nt = {
                    props: {
                        disks: Array,
                        activePath: String
                    },
                    computed: { ...Object(o["f"])({
                            user: "user",
                            systemPath: "systemPath"
                        }),
                        ...Object(o["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            return this.themeData.icon
                        },
                        quickAccessItems() {
                            const t = ["Desktop", "Downloads", "Documents", "Music", "Pictures", "Videos"];
                            return t.map(t => {
                                const e = L["a"].getSpecialFolder(t, {
                                    userPath: this.userPath
                                });
                                return {
                                    icon: e.icon,
                                    label: this.$tc(e.label, 2),
                                    active: this.activePath === e.path,
                                    click: () => this.open(e.path)
                                }
                            })
                        },
                        diskItems() {
                            return [...this.disks.map(t => {
                                const {
                                    path: e,
                                    label: i,
                                    letter: s,
                                    type: a
                                } = t;
                                return {
                                    icon: Object(r["c"])(a),
                                    label: Object(r["d"])(i, s),
                                    active: this.activePath === e,
                                    click: () => this.open(e)
                                }
                            }), {
                                icon: "disk-cd",
                                label: "DVD RW Drive (Z:)",
                                click: () => this.showBsod()
                            }]
                        },
                        userPath() {
                            return `${this.systemPath}/Users/${this.user?this.user.uid:"Guest"}`
                        }
                    },
                    methods: { ...m["e"].mapActions([m["b"].ProgramEvent]),
                        open(t) {
                            this.activePath !== t && (this.$emit("open", t), this[m["b"].ProgramEvent](m["c"].Explorer.StartNavigation))
                        },
                        showBsod() {
                            this.$bus.$emit("changeView", {
                                view: "Bsod",
                                error: "DEVICE_NOT_FOUND"
                            })
                        }
                    },
                    components: {
                        TreeviewCollapse: st,
                        TreeviewMain: at["a"]
                    }
                },
                rt = nt,
                ot = Object(k["a"])(rt, G, Y, !1, null, null, null),
                lt = ot.exports,
                ct = i("6fba"),
                ut = i("3b99"),
                dt = i("e4f8"),
                ht = i("d65e"),
                mt = i("1521"),
                pt = i("e863"),
                vt = i("7073"),
                wt = i("1d26"),
                ft = i("3cb5"),
                bt = i("e314"),
                gt = i("4c41"),
                yt = {
                    mixins: [gt["a"]],
                    props: {
                        id: {
                            type: String,
                            default: "computer"
                        },
                        dialogName: {
                            type: String,
                            default: "computer"
                        },
                        dialogIcon: {
                            type: String,
                            default: "computer"
                        },
                        parent: String,
                        dialog: Boolean,
                        lock: {
                            type: Boolean,
                            default: !1
                        },
                        filter: {
                            type: Array,
                            default: () => []
                        },
                        hoistedPath: {
                            type: String,
                            default: null
                        }
                    },
                    data() {
                        return {
                            disks: null,
                            activePath: this.hoistedPath,
                            selectedPaths: [],
                            history: [],
                            historyIndex: -1,
                            activeBack: !1,
                            activeNext: !1,
                            error: null
                        }
                    },
                    computed: { ...n["c"].mapState(["tempData"]),
                        ...Object(o["f"])(["shortcuts", "trashPath"]),
                        ...Object(o["d"])(["themeData"]),
                        toolbar() {
                            return [{
                                label: this.$t("organize"),
                                disabled: !0
                            }]
                        },
                        viewModeItems() {
                            return this.viewModes.map(t => ({ ...t,
                                icon: this.icon["view-" + t.value],
                                click: async ({
                                    target: e
                                }) => {
                                    e.blur(), this._setViewMode(t.value)
                                }
                            }))
                        },
                        viewModeValue() {
                            return this.viewModes.findIndex(t => t.value === this.viewMode)
                        },
                        hasItemSelected() {
                            return this.selectedPaths.length > 0 && !this.selectedPaths.some(t => /(drive\d+)$/.test(t))
                        },
                        icon() {
                            return this.themeData.icon
                        },
                        explorerType() {
                            var t;
                            return null !== (t = this.activePath) && void 0 !== t && t.includes(this.trashPath) ? "bin" : "computer"
                        },
                        windowIcon() {
                            return this.dialog ? this.dialogIcon : this.icon[this.explorerType]
                        },
                        windowTitle() {
                            return this.dialog ? this.dialogName : this.explorerType
                        },
                        addressIcon() {
                            return this.icon[this.explorerType]
                        },
                        location() {
                            const {
                                activePath: t,
                                disks: e
                            } = this;
                            if (!e || !t) return [this.$t("computer")];
                            if (t.includes(this.trashPath)) return [this.$t("bin")];
                            const i = e.findLast(e => t.includes(e.path)),
                                s = Object(r["d"])(i.label, i.letter),
                                a = decodeURI(Object(r["j"])(t)).split("/").filter(t => !!t);
                            return [this.$t("computer"), s, ...a]
                        }
                    },
                    watch: {
                        historyIndex(t) {
                            const {
                                history: e
                            } = this;
                            t >= 0 && (this.activeBack = !0), t < 0 && (this.activeBack = !1), t < e.length - 1 && (this.activeNext = !0), t >= e.length - 1 && (this.activeNext = !1)
                        },
                        async activePath(t) {
                            this.onChange(t), this.viewMode = await this.getViewMode(t)
                        },
                        hoistedPath(t) {
                            this.openPath(t, {
                                skipHistory: !0
                            })
                        },
                        tempData: {
                            immediate: !0,
                            handler(t) {
                                if (!t || !t.path) return;
                                const {
                                    path: e
                                } = t;
                                try {
                                    const t = this.shortcuts.find(t => t.path === e),
                                        i = t && "folder" === t.type;
                                    if (!i && !Object(V["g"])(e, this.id)) return;
                                    this.openPath(e, {
                                        skipHistory: !0
                                    }), this[n["a"].ClearTempData]()
                                } catch (i) {
                                    this.error = this.$t(i.message || i)
                                }
                            }
                        }
                    },
                    async mounted() {
                        this.disks = await L["a"].getStats(), this.viewMode = await this.getViewMode(this.activePath)
                    },
                    methods: { ...n["c"].mapMutations([n["a"].ClearTempData]),
                        async navigate(t) {
                            const {
                                history: e,
                                historyIndex: i
                            } = this, s = "back" === t && i < 0, a = "next" === t && i >= e.length - 1;
                            if (!e.length || s || a) return;
                            "back" === t ? this.historyIndex-- : this.historyIndex++;
                            const n = "bin" === this.id ? this.trashPath : null;
                            this.activePath = this.historyIndex < 0 ? n : e[this.historyIndex]
                        },
                        openPath(t, e) {
                            const {
                                skipHistory: i
                            } = e || {};
                            this.activePath = t, this.selectedPaths = [], i || (this.historyIndex++, this.history = this.history.slice(0, this.historyIndex), this.history.push(t))
                        },
                        onError(t) {
                            this.error = t
                        },
                        onChange(t) {
                            this.$emit("change", t)
                        },
                        onSelect(t) {
                            this.selectedPaths = t
                        },
                        exit() {
                            this.dialog ? this.$emit("close") : this.$root.$emit(l["c"].CloseWindow, this.id)
                        },
                        inputViewMode(t) {
                            this._setViewMode(this.viewModes[t].value)
                        },
                        _setViewMode(t) {
                            this.setViewMode(this.activePath, t)
                        }
                    },
                    components: {
                        WindowControls: pt["a"],
                        WindowMain: wt["a"],
                        WindowTitlebar: bt["a"],
                        WindowAddressbar: ut["a"],
                        WindowAddressbarNav: dt["a"],
                        WindowAddressbarSearch: ht["a"],
                        WindowMenubar: ft["a"],
                        WindowBody: mt["a"],
                        WindowFooter: vt["a"],
                        MessageError: u["a"],
                        PaneNavigation: lt,
                        PaneContent: J,
                        MenuItemButton: c["a"],
                        ScrollbarContainer: ct["a"]
                    }
                },
                _t = yt,
                kt = (i("3a7a"), Object(k["a"])(_t, s, a, !1, null, null, null));
            e["default"] = kt.exports
        },
        b5ba: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("button", {
                        class: t.context + "-button",
                        on: {
                            click: function(e) {
                                return t.$emit("click", e)
                            }
                        }
                    }, [t.icon ? i("base-icon", {
                        class: t.context + "-icon",
                        attrs: {
                            icon: t.icon
                        }
                    }) : t._e(), t.hideLabel ? t._e() : i("span", {
                        class: t.context + "-label"
                    }, [t._v(t._s(t.label))])], 1)
                },
                a = [],
                n = i("58cd"),
                r = {
                    props: {
                        icon: String,
                        label: String,
                        hideLabel: Boolean,
                        context: {
                            type: String,
                            default: "window__menubar"
                        }
                    },
                    components: {
                        BaseIcon: n["a"]
                    }
                },
                o = r,
                l = i("2877"),
                c = Object(l["a"])(o, s, a, !1, null, null, null);
            e["a"] = c.exports
        },
        c162: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("span", {
                        staticClass: "opacity-70 overflow-hidden text-base text-ellipsis leading-5 whitespace-nowrap listview__item-extra"
                    }, [t._t("default")], 2)
                },
                a = [],
                n = {},
                r = n,
                o = i("2877"),
                l = Object(o["a"])(r, s, a, !1, null, null, null);
            e["a"] = l.exports
        },
        ce26: function(t, e, i) {
            "use strict";
            i("4615")
        },
        d65e: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("winui-searchbox", {
                        staticClass: "window__addressbar-search",
                        attrs: {
                            instant: t.instant,
                            placeholder: t.$t("search") + " " + t.currentLocation,
                            "data-test-addressbar-search": ""
                        },
                        on: {
                            search: function(e) {
                                return t.$emit("search", e)
                            }
                        }
                    })
                },
                a = [],
                n = {
                    props: {
                        location: {
                            type: [String, Array]
                        },
                        instant: Boolean
                    },
                    computed: {
                        currentLocation() {
                            const t = this.location.slice(0);
                            return "string" === typeof t ? t : t.pop()
                        }
                    }
                },
                r = n,
                o = i("2877"),
                l = Object(o["a"])(r, s, a, !1, null, null, null);
            e["a"] = l.exports
        },
        db13: function(t, e, i) {
            "use strict";
            i("4b45")
        },
        e61b: function(t, e, i) {},
        e6be: function(t, e, i) {},
        eb0f: function(t, e, i) {},
        ed5d: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i(t.componentMap[t.viewMode], t._b({
                        tag: "component"
                    }, "component", t.listviewProps, !1))
                },
                a = [],
                n = i("a77a");
            const r = ["content", "details", "icons", "list", "tiles"],
                o = {
                    content: "ListviewViewContent",
                    details: "ListviewViewDetails",
                    icons: "ListviewViewIcons",
                    list: "ListviewViewList",
                    tiles: "ListviewViewTiles"
                };
            var l = {
                    props: { ...n["listviewProps"],
                        viewMode: {
                            type: String,
                            required: !0,
                            validator: t => r.includes(t)
                        }
                    },
                    computed: {
                        listviewProps() {
                            const {
                                items: t,
                                size: e
                            } = this;
                            return {
                                items: t,
                                size: e
                            }
                        },
                        componentMap: () => o
                    },
                    components: {
                        ListviewViewContent: () => i.e("listview-content").then(i.bind(null, "27b9")),
                        ListviewViewDetails: () => i.e("listview-details").then(i.bind(null, "32cd")),
                        ListviewViewIcons: () => Promise.resolve().then(i.bind(null, "a77a")),
                        ListviewViewList: () => i.e("listview-list").then(i.bind(null, "00d7")),
                        ListviewViewTiles: () => i.e("listview-tiles").then(i.bind(null, "7662"))
                    }
                },
                c = l,
                u = i("2877"),
                d = Object(u["a"])(c, s, a, !1, null, null, null);
            e["a"] = d.exports
        },
        ed8a: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("winui-treeview", {
                        staticClass: "treeview__main",
                        attrs: {
                            role: "tree",
                            "data-test-treeview": ""
                        }
                    }, t._l(t.items, (function(e, s) {
                        return i("treeview-item", {
                            key: s,
                            attrs: {
                                icon: e.icon,
                                iconClass: e.iconClass,
                                label: e.label,
                                active: e.active
                            },
                            on: {
                                click: function(i) {
                                    return t.wrapClick(e.click)
                                },
                                dblclick: function(i) {
                                    return t.wrapClick(e.dblclick)
                                }
                            }
                        }, [e.children && e.children.length ? i("ul", t._l(e.children, (function(e, s) {
                            return i("treeview-item", {
                                key: s,
                                attrs: {
                                    icon: e.icon,
                                    iconClass: e.iconClass,
                                    label: e.label,
                                    active: e.active
                                },
                                on: {
                                    click: function(i) {
                                        return t.wrapClick(e.click)
                                    },
                                    dblclick: function(i) {
                                        return t.wrapClick(e.dblclick)
                                    }
                                }
                            })
                        })), 1) : t._e()])
                    })), 1)
                },
                a = [],
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("li", {
                        staticClass: "relative list-none treeview__item",
                        attrs: {
                            role: "treeitem",
                            "data-test-treeview-item": t.label
                        }
                    }, [i("treeview-button", t._g(t._b({}, "treeview-button", t.$props, !1), t.$listeners)), t._t("default")], 2)
                },
                r = [],
                o = i("1d1d"),
                l = {
                    props: o["b"],
                    components: {
                        TreeviewButton: o["a"]
                    }
                },
                c = l,
                u = i("2877"),
                d = Object(u["a"])(c, n, r, !1, null, null, null),
                h = d.exports,
                m = {
                    props: {
                        items: {
                            type: Array
                        }
                    },
                    methods: {
                        wrapClick(t) {
                            t && t()
                        }
                    },
                    components: {
                        TreeviewItem: h
                    }
                },
                p = m,
                v = (i("db13"), Object(u["a"])(p, s, a, !1, null, null, null));
            e["a"] = v.exports
        },
        f746: function(t, e, i) {
            "use strict";
            i("fc3e")
        },
        fc3e: function(t, e, i) {},
        fceb: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("window-main-static", {
                        attrs: {
                            parent: t.parent,
                            variant: "message"
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            title: t.title
                        }
                    }, [i("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: t.theme,
                            close: function() {
                                return t.$emit("close")
                            }
                        }
                    })], 1), i("window-body", {
                        class: t.containerClass,
                        attrs: {
                            layout: "message"
                        }
                    }, [t.icon ? i("div", {
                        staticClass: "flex"
                    }, [i("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    }), t.noPreTag ? t._t("default") : i("pre", {
                        staticClass: "p-2 font-[inherit] whitespace-pre-wrap"
                    }, [t._t("default")], 2)], 2) : [t._t("default")]], 2), i("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [t._t("footer")], 2)], 1)
                },
                a = [],
                n = i("58cd"),
                r = i("1521"),
                o = i("e863"),
                l = i("7073"),
                c = i("411e"),
                u = i("e314"),
                d = i("2f62"),
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
                        BaseIcon: n["a"],
                        WindowBody: r["a"],
                        WindowFooter: l["a"],
                        WindowMainStatic: c["a"],
                        WindowControls: o["a"],
                        WindowTitlebar: u["a"]
                    }
                },
                m = h,
                p = (i("67ac"), i("2877")),
                v = Object(p["a"])(m, s, a, !1, null, null, null);
            e["a"] = v.exports
        }
    }
]);