(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["logon-ubuntu~themestudio~windows"], {
        "07e7": function(t, e, s) {
            "use strict";
            s("901c")
        },
        "0d94": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("winui-menu", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: function(e) {
                                return t.$emit("outclick", e)
                            },
                            expression: "(e) => $emit('outclick', e)"
                        }]
                    }, [t._l(t.items, (function(e, a) {
                        return [e.hidden ? t._e() : s("winui-menuitem", {
                            key: a,
                            attrs: {
                                "aria-disabled": e.disabled,
                                "data-test-menu-item": e.test
                            }
                        }, [e.icon ? s("base-icon", {
                            attrs: {
                                id: e.icon,
                                icon: t.icon[e.icon]
                            }
                        }) : t._e(), e.children && e.children.length ? [s("button", [t._v(t._s(e.label))]), s("winui-menu", {
                            style: t.subStyle,
                            attrs: {
                                "data-test-menu": e.test
                            }
                        }, [t._l(e.children, (function(e, a) {
                            return [e.hidden ? t._e() : s("winui-menuitem", {
                                key: a,
                                attrs: {
                                    "aria-disabled": e.disabled,
                                    "data-test-menu-item": e.test
                                }
                            }, [e.option ? [s("input", t._b({}, "input", e.option, !1)), s("label", {
                                attrs: {
                                    for: e.option.id
                                },
                                on: {
                                    click: function(s) {
                                        return s.stopPropagation(), t.safeClick(s, e.click)
                                    }
                                }
                            }, [t._v(t._s(e.label))])] : [e.icon ? s("base-icon", {
                                attrs: {
                                    id: e.icon,
                                    icon: t.icon[e.icon]
                                }
                            }) : t._e(), s("button", {
                                attrs: {
                                    disabled: e.disabled
                                },
                                on: {
                                    click: function(s) {
                                        return s.stopPropagation(), t.safeClick(s, e.click)
                                    }
                                }
                            }, [e.bold ? s("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? s("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)]], 2), e.hasDivider && !e.hidden ? s("hr", {
                                key: "hr" + a
                            }) : t._e()]
                        }))], 2)] : e.option ? [s("input", t._b({}, "input", e.option, !1)), s("label", {
                            attrs: {
                                for: e.option.id
                            },
                            on: {
                                click: function(s) {
                                    return s.stopPropagation(), t.safeClick(s, e.click)
                                }
                            }
                        }, [t._v(t._s(e.label))])] : s("button", {
                            attrs: {
                                disabled: e.disabled
                            },
                            on: {
                                click: function(s) {
                                    return s.stopPropagation(), t.safeClick(s, e.click)
                                }
                            }
                        }, [e.bold ? s("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? s("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)], 2), e.hasDivider && !e.hidden ? s("hr", {
                            key: "hr" + a
                        }) : t._e()]
                    }))], 2)
                },
                i = [],
                n = s("58cd"),
                o = s("2f62"),
                r = {
                    props: {
                        items: Array,
                        subStyle: Object,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(o["d"])(["themeData", "themeAssets"]),
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
                l = r,
                c = s("2877"),
                u = Object(c["a"])(l, a, i, !1, null, null, null);
            e["a"] = u.exports
        },
        1404: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-item", {
                        staticClass: "is-desktop",
                        style: t.style,
                        attrs: {
                            id: "show-desktop",
                            "aria-label": t.$t("desktop")
                        },
                        on: {
                            click: t.showDesktop
                        }
                    })], 1)
                },
                i = [],
                n = s("2f62"),
                o = s("88e5"),
                r = s("01b4");
            const l = ["basic-2", "basic-3", "basic-4", "win95", "win98", "win2k"];
            var c = {
                    computed: { ...Object(n["f"])({
                            theme: "theme"
                        }),
                        ...Object(n["d"])({
                            themeData: "themeData"
                        }),
                        style() {
                            const t = l.includes(this.theme),
                                e = t ? this.themeData.icon.desktop : null;
                            return t ? {
                                backgroundImage: `url(${e})`
                            } : null
                        }
                    },
                    methods: {
                        showDesktop() {
                            const {
                                windows: t
                            } = this.$store.state;
                            t.forEach(({
                                id: t
                            }) => {
                                this.$store.commit(r["a"].WindowUpdate, {
                                    id: t,
                                    minimized: !0
                                })
                            })
                        }
                    },
                    components: {
                        TaskbarItem: o["a"]
                    }
                },
                u = c,
                h = s("2877"),
                d = Object(h["a"])(u, a, i, !1, null, null, null);
            e["a"] = d.exports
        },
        "1ab7": function(t, e, s) {
            "use strict";
            s("fc20")
        },
        2159: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        class: ["flex justify-start items-center p-0 w-14 shrink-0 startbutton-wrapper", {
                            "is-active": !t.asDecorator && t.active
                        }],
                        attrs: {
                            id: "start-button",
                            "data-test-start-button": ""
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggle(e)
                            }
                        }
                    }, [s("base-icon", {
                        staticClass: "startbutton-icon",
                        attrs: {
                            id: "start-button",
                            icon: t.button
                        }
                    }), "win8" === t.theme ? s("start-button-win8") : t._e()], 1)
                },
                i = [],
                n = s("2f62"),
                o = s("58cd"),
                r = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("span", {
                        staticClass: "hidden bottom-0 left-0 absolute bg-black bg-cover p-3 text-white text-left startbutton-thumbnail",
                        style: {
                            backgroundImage: "url(" + t.bg + ")"
                        }
                    }, [s("span", {
                        staticClass: "block mb-2"
                    }, [t._v("Start")]), s("span", {
                        staticClass: "flex gap-4"
                    }, [s("span", {
                        staticClass: "app__list has-desktop"
                    }, t._l(3, (function(t) {
                        return s("span", {
                            key: t,
                            staticClass: "app__item",
                            class: {
                                "col-span-2": 1 === t
                            }
                        })
                    })), 0), t._l(3, (function(e) {
                        return s("span", {
                            key: e,
                            staticClass: "app__list"
                        }, t._l(9, (function(t) {
                            return s("span", {
                                key: t,
                                staticClass: "app__item"
                            })
                        })), 0)
                    }))], 2)])
                },
                l = [],
                c = s("0f35"),
                u = {
                    computed: { ...Object(n["f"])({
                            assets: "assets"
                        }),
                        bg() {
                            return Object(c["a"])(this.assets.assetStore.bgs, "win8-startscreen")
                        }
                    }
                },
                h = u,
                d = (s("cac4"), s("2877")),
                m = Object(d["a"])(h, r, l, !1, null, null, null),
                p = m.exports,
                b = s("01b4"),
                v = {
                    props: {
                        asDecorator: Boolean
                    },
                    computed: { ...Object(n["f"])({
                            active: "activeStart",
                            theme: "theme"
                        }),
                        ...Object(n["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        button() {
                            return this.asDecorator ? this.themeAssets.base.icon.start : this.themeData.icon.start
                        }
                    },
                    methods: {
                        toggle() {
                            this.asDecorator || (this.$store.commit(b["a"].Start), this.$store.commit(b["a"].Popup, null))
                        }
                    },
                    components: {
                        BaseIcon: o["a"],
                        StartButtonWin8: p
                    }
                },
                f = v,
                g = (s("bf85"), Object(d["a"])(f, a, i, !1, null, null, null));
            e["a"] = g.exports
        },
        "4e5e": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-popup", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showPopup,
                            expression: "showPopup"
                        }],
                        staticClass: "is-datetime"
                    }, [s("div", {
                        staticClass: "p-[12px]"
                    }, ["win10" === t.theme ? s("div", {
                        staticClass: "clock is-digital"
                    }, [s("clock-digital", {
                        attrs: {
                            showSecond: ""
                        }
                    })], 1) : t._e(), s("winui-link", {
                        staticClass: "p-0 py-1",
                        on: {
                            click: t.reset
                        }
                    }, [t._v(t._s(t.fullDate))])], 1), s("div", {
                        staticClass: "flex justify-center gap-[8px] p-[12px]"
                    }, [s("base-calendar", {
                        staticClass: "datetime__calendar",
                        on: {
                            mount: t.setCalendar
                        }
                    }), t.isMacos || t.isWinX ? t._e() : s("div", {
                        staticClass: "center-flex flex-col datetime__clock"
                    }, [s("clock-analog", {
                        staticClass: "mb-2"
                    }), s("div", [s("clock-digital", {
                        attrs: {
                            showSecond: ""
                        }
                    })], 1)], 1)], 1), t.isMacos ? t._e() : s("div", {
                        staticClass: "p-[12px]"
                    }, [s("winui-link", {
                        staticClass: "p-0 py-1",
                        on: {
                            click: t.changeSetting
                        }
                    }, [t._v(t._s(t.$t("change-date-settings")) + "...")])], 1)]), s("taskbar-item", {
                        staticClass: "flex flex-col justify-center items-center is-datetime",
                        on: {
                            click: t.toggle
                        }
                    }, [s("span", [s("clock-digital")], 1), t.isMacos ? s("span", [t._v(t._s(t.shortDate))]) : s("span", [t._v(t._s(t.date))])])], 1)
                },
                i = [],
                n = s("51e6"),
                o = s("c466"),
                r = s("7543"),
                l = s("ada7"),
                c = s("aa42"),
                u = s("88e5"),
                h = s("c386"),
                d = s("01b4"),
                m = s("2f62"),
                p = {
                    data() {
                        return {
                            id: "datetime",
                            calendar: null,
                            date: Object(o["c"])(),
                            shortDate: Object(o["a"])(null, this.$i18n.locale, !0),
                            fullDate: Object(o["a"])(null, this.$i18n.locale)
                        }
                    },
                    computed: { ...Object(m["f"])({
                            activePopup: "activePopup",
                            theme: "theme"
                        }),
                        showPopup() {
                            return this.activePopup === this.id
                        },
                        isMacos() {
                            var t;
                            return null === (t = this.theme) || void 0 === t ? void 0 : t.startsWith("mac")
                        },
                        isWinX() {
                            return ["win10", "win11", "win11dark"].includes(this.theme)
                        }
                    },
                    methods: {
                        toggle() {
                            this.$store.commit(d["a"].Popup, this.showPopup ? null : this.id)
                        },
                        changeSetting() {
                            Object(n["launchSetting"])(n["Action"].ACTION_DATE_SETTINGS)
                        },
                        setCalendar(t) {
                            this.calendar = t
                        },
                        reset() {
                            this.calendar && this.calendar.reset()
                        }
                    },
                    components: {
                        BaseCalendar: r["a"],
                        ClockAnalog: l["a"],
                        ClockDigital: c["a"],
                        TaskbarPopup: h["a"],
                        TaskbarItem: u["a"]
                    }
                },
                b = p,
                v = (s("b955"), s("2877")),
                f = Object(v["a"])(b, a, i, !1, null, null, null);
            e["a"] = f.exports
        },
        5854: function(t, e, s) {},
        "5e9f": function(t, e, s) {
            "use strict";
            s.d(e, "a", (function() {
                return i
            })), s.d(e, "c", (function() {
                return n
            })), s.d(e, "b", (function() {
                return o
            }));
            var a = s("3b8c");

            function i(t) {
                const e = Object.keys(a["a"]).find(e => e === t);
                return e ? a["a"][e].color : null
            }

            function n(t) {
                if (!t || !t.startsWith("#")) return null;
                if (4 === t.length) {
                    const e = parseInt(t[1] + t[1], 16),
                        s = parseInt(t[2] + t[2], 16),
                        a = parseInt(t[3] + t[3], 16);
                    return [e, s, a]
                }
                if (7 === t.length) {
                    const e = parseInt(t[1] + t[2], 16),
                        s = parseInt(t[3] + t[4], 16),
                        a = parseInt(t[5] + t[6], 16);
                    return [e, s, a]
                }
                return null
            }

            function o(t, e = 48, s = 222) {
                const a = [30, 130, 230],
                    i = Math.min(1, e / t.naturalWidth, e / t.naturalHeight),
                    n = Math.max(Math.round(t.naturalWidth * i), 1),
                    o = Math.max(Math.round(t.naturalHeight * i), 1),
                    r = document.createElement("canvas"),
                    l = r.getContext("2d");
                l.imageSmoothingEnabled = !1, r.width = n, r.height = o, l.drawImage(t, 0, 0, n, o);
                const c = l.getImageData(0, 0, n, o).data,
                    u = new Uint32Array(27);
                let h = -1,
                    d = 0;
                for (let v = 0; v < c.length; v += 4) {
                    const t = c[v + 3];
                    if (t < s) continue;
                    const e = c[v] < 60 ? 0 : c[v] < 200 ? 1 : 2,
                        a = c[v + 1] < 60 ? 0 : c[v + 1] < 200 ? 1 : 2,
                        i = c[v + 2] < 60 ? 0 : c[v + 2] < 200 ? 1 : 2;
                    if (e === a && a === i) continue;
                    const n = 9 * e + 3 * a + i;
                    u[n]++, u[n] > d && (d = u[n], h = n)
                }
                if (h < 0) return "rgb(51, 153, 255)";
                const m = Math.floor(h / 9),
                    p = Math.floor(h % 9 / 3),
                    b = h % 3;
                return `rgb(${a[m]}, ${a[p]}, ${a[b]})`
            }
        },
        "62d2": function(t, e, s) {},
        "693e": function(t, e, s) {
            "use strict";
            s("a338")
        },
        "78d0": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        class: ["text-base typography is-regular", {
                            "opacity-70 is-disabled": t.disabled
                        }]
                    }, [t._t("default")], 2)
                },
                i = [],
                n = {
                    props: {
                        disabled: Boolean
                    }
                },
                o = n,
                r = s("2877"),
                l = Object(r["a"])(o, a, i, !1, null, null, null);
            e["a"] = l.exports
        },
        "7f29": function(t, e, s) {
            "use strict";

            function a(t, e, s) {
                return Math.min(Math.max(t, e), s)
            }
            s.d(e, "a", (function() {
                return a
            }))
        },
        "88e5": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.emitContextmenu,
                            expression: "emitContextmenu",
                            arg: "touchhold"
                        }],
                        staticClass: "relative center-flex hover:bg-black/10 p-0 border border-transparent border-solid w-10 h-full taskbar-item",
                        style: t.style,
                        attrs: {
                            "data-test-taskbar-item": ""
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.emitClick(e)
                            },
                            contextmenu: t.emitContextmenu,
                            mousemove: t.handleMouseMove
                        }
                    }, [t._t("default")], 2)
                },
                i = [],
                n = s("554d"),
                o = s("e47c"),
                r = s("01b4"),
                l = s("7f29"),
                c = s("5e9f"),
                u = s("26a1"),
                h = s("2f62"),
                d = s("0fbc"),
                m = {
                    data() {
                        return {
                            x: 0,
                            y: 0,
                            color: ""
                        }
                    },
                    computed: { ...Object(h["f"])({
                            theme: "theme",
                            activeStart: "activeStart"
                        }),
                        ...n["d"].mapState({
                            animateTaskbar: t => t.animateTaskbar
                        }),
                        style() {
                            return o["a"].AeroTaskbarItem.test(this.theme) && this.animateTaskbar ? {
                                "--taskbar-item-x": this.x + "%",
                                "--taskbar-item-y": this.y + "%",
                                "--taskbar-item-color": this.color
                            } : {}
                        }
                    },
                    async mounted() {
                        var t, e;
                        let s = "";
                        const a = null === (t = this.$slots.default) || void 0 === t || null === (e = t[0]) || void 0 === e ? void 0 : e.elm;
                        if (a) {
                            const t = a.style.getPropertyValue("--icon").trim();
                            s = t.replace(/^url\((['"]?)(.*)\1\)$/, "$2")
                        }
                        if (s) try {
                            const t = await Object(d["j"])(s);
                            this.color = Object(c["b"])(t)
                        } catch (i) {}
                    },
                    methods: {
                        emitClick() {
                            this.$emit("click"), this.activeStart && this.$store.commit(r["a"].Start, !1)
                        },
                        emitContextmenu(t) {
                            this.$emit("contextmenu", t)
                        },
                        handleMouseMove(t) {
                            const {
                                x: e,
                                y: s
                            } = Object(u["h"])(t);
                            this.x = Object(l["a"])(100 * e, 0, 100), this.y = Object(l["a"])(100 * s, 0, 100)
                        }
                    }
                },
                p = m,
                b = s("2877"),
                v = Object(b["a"])(p, a, i, !1, null, null, null);
            e["a"] = v.exports
        },
        "901c": function(t, e, s) {},
        "92e0": function(t, e, s) {
            "use strict";
            s("ad63")
        },
        "94de": function(t, e, s) {},
        a12d: function(t, e, s) {},
        a1c4: function(t, e, s) {
            "use strict";
            s("62d2")
        },
        a338: function(t, e, s) {},
        a88c: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-popup", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showPopup,
                            expression: "showPopup"
                        }],
                        staticClass: "is-battery",
                        attrs: {
                            centered: ""
                        }
                    }, [t.isMacOs ? s("div", {
                        staticClass: "p-2"
                    }, [s("div", {
                        staticClass: "flex justify-between mb-2"
                    }, [s("span", {
                        staticClass: "font-bold"
                    }, [t._v(t._s(t.$t("battery")))]), s("span", [t._v(t._s(t.percentLevel))])]), s("text-regular", [t._v(" " + t._s(t.$t("power-source")) + ": " + t._s(t.isCharging ? t.$t("power-adapter") : t.$t("battery")) + " ")])], 1) : s("div", {
                        staticClass: "flex gap-2 px-[16px] py-[12px]"
                    }, [s("battery-meter", {
                        attrs: {
                            level: t.level,
                            isCharging: t.isCharging
                        }
                    }), s("text-regular", [t.isFull ? [t._v(t._s(t.$t("fully-charged")) + " (" + t._s(t.percentLevel) + ")")] : [t._v(" " + t._s(t.$t("remaining", [t.percentLevel])) + " "), t.isCharging ? [t._v("(" + t._s(t.$t("plugged-in-charging")) + ")")] : t._e()]], 2)], 1), s("div", {
                        staticClass: "flex flex-col gap-1 px-[16px] py-[12px]"
                    }, [s("text-regular", [t._v(t._s(t.$t("select-power-plan")) + ":")]), s("winui-radio", {
                        attrs: {
                            "native-value": "1",
                            id: "power-balance",
                            name: "power-plan"
                        },
                        model: {
                            value: t.brightness,
                            callback: function(e) {
                                t.brightness = e
                            },
                            expression: "brightness"
                        }
                    }, [t._v(" " + t._s(t.$t("balanced")) + " ")]), s("winui-radio", {
                        attrs: {
                            "native-value": "0.6",
                            id: "power-saver",
                            name: "power-plan"
                        },
                        model: {
                            value: t.brightness,
                            callback: function(e) {
                                t.brightness = e
                            },
                            expression: "brightness"
                        }
                    }, [t._v(" " + t._s(t.$t("power-saver")) + " ")])], 1), s("div", {
                        staticClass: "flex flex-col gap-1 px-[16px] py-[12px]"
                    }, [s("div", {
                        class: {
                            "font-bold": t.isMacOs
                        }
                    }, [t._v(" " + t._s(t.$t(t.isMacOs ? "display" : "adjust-brightness")) + " ")]), s("winui-slider", {
                        attrs: {
                            min: "0.6",
                            max: "1.2",
                            step: "0.1"
                        },
                        model: {
                            value: t.brightness,
                            callback: function(e) {
                                t.brightness = e
                            },
                            expression: "brightness"
                        }
                    })], 1)]), s("taskbar-item", {
                        on: {
                            click: t.toggle
                        }
                    }, [t.icon ? s("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    }) : t.isCharging ? s("svg-battery-charging", {
                        class: ["battery-icon is-charging", {
                            "has-shadow": t.hasShadow
                        }],
                        attrs: {
                            width: "16",
                            height: "16"
                        }
                    }) : s("svg-battery", {
                        class: ["battery-icon", {
                            "has-shadow": t.hasShadow
                        }],
                        attrs: {
                            level: t.level,
                            width: "16",
                            height: "16"
                        }
                    })], 1)], 1)
                },
                i = [],
                n = s("2f62"),
                o = s("58cd"),
                r = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inline-block relative w-[32px] h-[32px] shrink-0 battery-meter",
                        style: {
                            "--sprites": "url(" + t.sprites + ")",
                            "--x": t.backgroundX
                        }
                    }, [t.isCharging ? s("div", {
                        staticClass: "top-0 right-0 bottom-0 left-0 absolute battery-plug"
                    }) : t._e()])
                },
                l = [],
                c = s("0f35"),
                u = {
                    props: {
                        level: Number,
                        isCharging: Boolean
                    },
                    computed: { ...Object(n["f"])({
                            sprites: t => Object(c["a"])(t.assets.assetStore.misc, "battery-meter")
                        }),
                        backgroundX() {
                            const t = 32;
                            let e = 0;
                            return e = this.level < .1 ? 20 : this.level < .2 ? 11 : Math.round(9 * this.level), e * -t + "px"
                        }
                    }
                },
                h = u,
                d = (s("92e0"), s("2877")),
                m = Object(d["a"])(h, r, l, !1, null, null, null),
                p = m.exports,
                b = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("svg", {
                        attrs: {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M9 4.5H23M9 29.5H23M24.5 6V28M7.5 6V28M13 3.5H19M13 2.5H19",
                            stroke: "currentColor"
                        }
                    }), s("rect", {
                        attrs: {
                            x: "8.5",
                            y: "5.5",
                            width: "15",
                            height: "23",
                            stroke: "currentColor"
                        }
                    }), s("rect", {
                        attrs: {
                            x: "11",
                            y: t.y,
                            width: "10",
                            height: t.h,
                            fill: "currentColor"
                        }
                    })])
                },
                v = [],
                f = {
                    props: {
                        level: Number
                    },
                    computed: {
                        y() {
                            return this.level > 0 ? 8 + 18 * (1 - this.level) : 26
                        },
                        h() {
                            return this.level > 0 ? 18 * this.level : 0
                        }
                    }
                },
                g = f,
                _ = Object(d["a"])(g, b, v, !1, null, null, null),
                w = _.exports,
                k = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("svg", {
                        attrs: {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M12 8V12H14V18H15V19H16V26H6V8H12Z",
                            fill: "currentColor"
                        }
                    }), s("path", {
                        attrs: {
                            d: "M4 4.5H16M4 29.5H18M2.5 6V28M8 3.5H14M8 2.5H14M16 5.5H3.5V28.5H18M18.5 2V8M19.5 2V8M24.5 2V8M25.5 2V8M14 8.5H30M14 9.5H30M16 12.5H28M16 13.5H28M16 14.5H28M16 15.5H28M16 16.5H28M16 17.5H28M17 18.5H27M18 19.5H26M20 20.5H24M20 22.5H24M20 23.5H24M20 24.5H24M20 25.5H24M20 26.5H24M20 27.5H24M20 28.5H24M20 29.5H24M20 30.5H24M20 31.5H24",
                            stroke: "currentColor"
                        }
                    })])
                },
                x = [],
                y = {},
                M = y,
                C = Object(d["a"])(M, k, x, !1, null, null, null),
                j = C.exports,
                O = s("88e5"),
                $ = s("c386"),
                D = s("78d0"),
                H = s("01b4"),
                S = s("51e6"),
                P = s("26a1"),
                I = {
                    data() {
                        return {
                            id: "battery",
                            level: 1,
                            isCharging: !1,
                            interval: null,
                            brightness: 1
                        }
                    },
                    computed: { ...Object(n["f"])({
                            activePopup: "activePopup",
                            theme: "theme"
                        }),
                        ...Object(n["d"])({
                            themeData: "themeData"
                        }),
                        percentLevel() {
                            return Math.round(100 * this.level) + "%"
                        },
                        showPopup() {
                            return this.activePopup === this.id
                        },
                        isMacOs() {
                            return "macos" === this.theme
                        },
                        isFull() {
                            return this.isCharging && 1 === this.level
                        },
                        icon() {
                            return this.isCharging ? this.themeData.icon["battery-charging"] : this.themeData.icon.battery
                        },
                        hasShadow() {
                            return !["base", "win11"].includes(this.theme)
                        }
                    },
                    watch: {
                        brightness(t) {
                            Object(P["g"])().style.filter = `brightness(${t})`
                        }
                    },
                    mounted() {
                        this.interval = setInterval(async () => {
                            const {
                                batteryLevel: t,
                                isCharging: e
                            } = await Object(S["getBattery"])();
                            this.level = t, this.isCharging = e
                        }, 1e3)
                    },
                    beforeDestroy() {
                        clearInterval(this.interval)
                    },
                    methods: {
                        toggle() {
                            this.$store.commit(H["a"].Popup, this.showPopup ? null : this.id)
                        }
                    },
                    components: {
                        BaseIcon: o["a"],
                        BatteryMeter: p,
                        TaskbarPopup: $["a"],
                        TaskbarItem: O["a"],
                        TextRegular: D["a"],
                        SvgBattery: w,
                        SvgBatteryCharging: j
                    }
                },
                T = I,
                B = (s("07e7"), Object(d["a"])(T, a, i, !1, null, null, null));
            e["a"] = B.exports
        },
        aa42: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("span", {
                        directives: [{
                            name: "frag",
                            rawName: "v-frag"
                        }]
                    }, [t._v(t._s(t.time))])
                },
                i = [],
                n = s("0f35"),
                o = {
                    props: {
                        showSecond: Boolean,
                        showMeridiem: Boolean
                    },
                    data() {
                        return {
                            time: null,
                            interval: null
                        }
                    },
                    created() {
                        this.setTime(), this.interval = setInterval(this.setTime, 1e3)
                    },
                    beforeDestroy() {
                        clearInterval(this.interval)
                    },
                    methods: {
                        setTime() {
                            const t = new Date,
                                e = [t.getHours(), t.getMinutes()];
                            if (this.showSecond && e.push(t.getSeconds()), this.time = e.map(n["k"]).join(":"), this.showMeridiem) {
                                const e = t.getHours() >= 12 ? "PM" : "AM";
                                this.time += " " + e
                            }
                        }
                    }
                },
                r = o,
                l = s("2877"),
                c = Object(l["a"])(r, a, i, !1, null, null, null);
            e["a"] = c.exports
        },
        ad63: function(t, e, s) {},
        ada7: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "relative rounded-full w-32 h-32 text-center clock is-analog"
                    }, [s("div", {
                        staticClass: "top-1/2 left-1/2 absolute bg-black rounded-full w-1 h-1 clock-pivot"
                    }), s("div", {
                        staticClass: "top-[30%] left-1/2 absolute bg-black -ml-0.5 w-1 h-[20%] origin-bottom clock-hand is-hour",
                        style: {
                            transform: t.hourRotate
                        }
                    }), s("div", {
                        staticClass: "top-[15%] left-1/2 absolute bg-black -ml-px w-0.5 h-[35%] origin-bottom clock-hand is-minute",
                        style: {
                            transform: t.minuteRotate
                        }
                    }), t.hideSecond ? t._e() : s("div", {
                        staticClass: "top-[15%] left-1/2 absolute bg-black w-px h-[35%] origin-bottom clock-hand is-second",
                        style: {
                            transform: t.secondRotate
                        }
                    }), t.showMarks ? s("div", {
                        staticClass: "absolute w-full h-full clock-face has-marks"
                    }, t._l(60, (function(e) {
                        return s("span", {
                            key: e,
                            staticClass: "left-1/2 absolute -ml-2 w-4 h-1/2 origin-bottom",
                            style: {
                                transform: "rotate(" + 6 * e + "deg)"
                            }
                        }, [s("span", {
                            class: ["block bg-black m-auto clock-mark", {
                                "w-0.5 h-2 is-hour": t.isHour(e),
                                "w-px h-0.5": !t.isHour(e)
                            }]
                        })])
                    })), 0) : t._e(), t.showNumbers ? s("div", {
                        class: ["absolute clock-face has-numbers", {
                            "top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)]": t.showMarks,
                            "w-full h-full": !t.showMarks
                        }]
                    }, t._l(60, (function(e) {
                        return s("span", {
                            key: e,
                            staticClass: "left-1/2 absolute -ml-2 w-4 h-1/2 origin-bottom",
                            style: {
                                transform: "rotate(" + 6 * e + "deg)"
                            }
                        }, [t.isHour(e) ? s("span", {
                            class: ["block text-xs clock-number", {
                                "is-quarter": t.isQuarter(e)
                            }]
                        }, [t._v(" " + t._s(e / 5) + " ")]) : t._e()])
                    })), 0) : t._e()])
                },
                i = [],
                n = {
                    props: {
                        time: String,
                        hideSecond: Boolean,
                        faceType: {
                            type: String,
                            default: "marks",
                            validator: t => ["mixed", "hours", "marks", "none"].includes(t)
                        }
                    },
                    data() {
                        return {
                            timer: null,
                            hourRotate: "rotate(0deg)",
                            minuteRotate: "rotate(0deg)",
                            secondRotate: "rotate(0deg)"
                        }
                    },
                    computed: {
                        showMarks() {
                            return ["mixed", "marks"].includes(this.faceType)
                        },
                        showNumbers() {
                            return ["mixed", "hours"].includes(this.faceType)
                        }
                    },
                    watch: {
                        time() {
                            this.show()
                        }
                    },
                    mounted() {
                        this.show()
                    },
                    destroyed() {
                        this.timer && clearInterval(this.timer)
                    },
                    methods: {
                        isHour(t) {
                            return t % 5 === 0
                        },
                        isQuarter(t) {
                            return t / 5 % 3 === 0
                        },
                        show() {
                            this.showTime(), this.timer && clearInterval(this.timer), this.time || (this.timer = setInterval(() => this.showTime(), 1e3))
                        },
                        showTime() {
                            const t = new Date;
                            let [e, s, a] = (this.time ? this.time.split(":") : [t.getHours(), t.getMinutes(), t.getSeconds()]).map(Number);
                            e = e > 11 ? e - 12 : e;
                            let i = 30 * e + 6 * s / 360 * 30,
                                n = 6 * s,
                                o = 6 * a;
                            this.hourRotate = `rotate(${i}deg)`, this.minuteRotate = `rotate(${n}deg)`, this.secondRotate = `rotate(${o}deg)`
                        }
                    }
                },
                o = n,
                r = (s("a1c4"), s("2877")),
                l = Object(r["a"])(o, a, i, !1, null, null, null);
            e["a"] = l.exports
        },
        b955: function(t, e, s) {
            "use strict";
            s("94de")
        },
        bf85: function(t, e, s) {
            "use strict";
            s("5854")
        },
        c386: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        class: ["bottom-full absolute bg-white shadow-lg my-2 taskbar-popup", {
                            "is-centered": t.centered
                        }]
                    }, [t._t("default")], 2)
                },
                i = [],
                n = {
                    props: {
                        centered: Boolean
                    }
                },
                o = n,
                r = (s("1ab7"), s("2877")),
                l = Object(r["a"])(o, a, i, !1, null, null, null);
            e["a"] = l.exports
        },
        c561: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-popup", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showPopup,
                            expression: "showPopup"
                        }],
                        staticClass: "is-volume",
                        attrs: {
                            centered: ""
                        }
                    }, [s("div", {
                        staticClass: "flex flex-col gap-2 px-[16px] py-[12px]"
                    }, [s("div", {
                        staticClass: "relative flex justify-center w-full h-full volume__meter"
                    }, [s("div", {
                        staticClass: "pointer-events-none volume__meter-wrapper"
                    }, [s("winui-slider", {
                        staticClass: "pointer-events-auto volume__meter-slider",
                        attrs: {
                            min: "0",
                            max: "100",
                            disabled: t.isMuted_
                        },
                        on: {
                            mouseup: t.updateVolume,
                            touchend: t.updateVolume
                        },
                        model: {
                            value: t.volume_,
                            callback: function(e) {
                                t.volume_ = e
                            },
                            expression: "volume_"
                        }
                    })], 1)]), s("button", {
                        staticClass: "relative center-flex hover:bg-black/10 m-auto w-12 h-12 volume__toggle",
                        on: {
                            click: function(e) {
                                t.isMuted_ = !t.isMuted_
                            }
                        }
                    }, [s("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeIn faster",
                            "leave-active-class": "animated fadeOut faster"
                        }
                    }, [s("base-icon", {
                        attrs: {
                            id: "volume",
                            icon: t.iconMute
                        }
                    })], 1)], 1)])]), s("taskbar-item", {
                        on: {
                            click: t.toggle
                        }
                    }, [s("base-icon", {
                        attrs: {
                            id: "volume",
                            icon: t.iconVolume
                        }
                    })], 1)], 1)
                },
                i = [],
                n = s("bbbd"),
                o = s("2f62"),
                r = s("58cd"),
                l = s("88e5"),
                c = s("c386"),
                u = s("01b4"),
                h = {
                    props: {
                        asDecorator: Boolean
                    },
                    data() {
                        return {
                            id: "volume",
                            volume_: 100,
                            isMuted_: !1
                        }
                    },
                    computed: { ...Object(o["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        ...Object(o["f"])({
                            activePopup: "activePopup"
                        }),
                        ...n["e"].mapState({
                            volume: "volume",
                            isMuted: "isMuted"
                        }),
                        iconVolume() {
                            const t = this.asDecorator ? this.themeAssets.base : this.themeData;
                            return this.isMuted ? t.icon["volume-muted"] : this.volume < 32 ? t.icon["volume-0"] : this.volume < 65 ? t.icon["volume-32"] : this.volume < 100 ? t.icon["volume-65"] : t.icon["volume-100"]
                        },
                        iconMute() {
                            return this.themeData.icon[this.isMuted ? "sound-muted" : "sound-unmuted"]
                        },
                        showPopup() {
                            return this.activePopup === this.id
                        }
                    },
                    watch: {
                        volume_() {
                            this.isMuted_ = !1
                        },
                        isMuted_() {
                            this.save()
                        }
                    },
                    mounted() {
                        this.volume_ = this.volume, this.isMuted_ = this.isMuted
                    },
                    methods: { ...n["e"].mapActions([n["b"].SetVolume, n["b"].SetIsMuted, n["b"].ProgramEvent]),
                        toggle() {
                            this.$store.commit(u["a"].Popup, this.showPopup ? null : this.id)
                        },
                        ding() {
                            this[n["b"].ProgramEvent](n["c"].Windows.DefaultBeep)
                        },
                        async save() {
                            await this[n["b"].SetVolume](this.volume_), await this[n["b"].SetIsMuted](this.isMuted_)
                        },
                        updateVolume() {
                            this.save(), this.ding()
                        }
                    },
                    components: {
                        BaseIcon: r["a"],
                        TaskbarItem: l["a"],
                        TaskbarPopup: c["a"]
                    }
                },
                d = h,
                m = (s("693e"), s("2877")),
                p = Object(m["a"])(d, a, i, !1, null, null, null);
            e["a"] = p.exports
        },
        cac4: function(t, e, s) {
            "use strict";
            s("a12d")
        },
        e0ee: function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("taskbar-item", {
                        on: {
                            click: t.launchSetting
                        }
                    }, ["icon" === t.icon.type ? s("div", {
                        class: {
                            "opacity-50": t.off
                        }
                    }, [s("iconify-icon", {
                        class: ["text-[20px]", {
                            "-rotate-45 translate-y-1": "win10" === t.theme
                        }],
                        attrs: {
                            icon: t.icon.src
                        }
                    })], 1) : s("base-icon", {
                        attrs: {
                            icon: t.icon.src
                        }
                    })], 1)], 1)
                },
                i = [],
                n = s("51e6"),
                o = s("2f62"),
                r = s("58cd"),
                l = s("c8ec"),
                c = s("88e5"),
                u = {
                    props: {
                        asDecorator: Boolean
                    },
                    data() {
                        return {
                            off: !1,
                            launchSetting: () => Object(n["launchSetting"])(n["Action"].ACTION_WIFI_SETTINGS)
                        }
                    },
                    computed: { ...Object(o["f"])({
                            theme: "theme"
                        }),
                        ...Object(o["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        icon() {
                            if (this.asDecorator) {
                                const t = this.themeAssets.base.icon["network" + (this.off ? "-off" : "")];
                                return {
                                    src: t,
                                    type: "image"
                                }
                            }
                            if (/win10|^win11|macos/.test(this.theme)) return {
                                src: "la:wifi",
                                type: "icon"
                            }; {
                                const t = this.themeData.icon["network" + (this.off ? "-off" : "")];
                                return {
                                    src: t,
                                    type: "image"
                                }
                            }
                        }
                    },
                    created() {
                        l["a"].addListener("networkStatusChange", ({
                            connected: t
                        }) => this.off = !t)
                    },
                    beforeDestroy() {
                        l["a"].removeAllListeners()
                    },
                    components: {
                        BaseIcon: r["a"],
                        TaskbarItem: c["a"]
                    }
                },
                h = u,
                d = s("2877"),
                m = Object(d["a"])(h, a, i, !1, null, null, null);
            e["a"] = m.exports
        },
        fc20: function(t, e, s) {}
    }
]);