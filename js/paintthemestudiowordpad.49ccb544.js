(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["paint~themestudio~wordpad"], {
        "038f": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "bg-white shadow-md min-w-[144px] ribbon__item-menu"
                    }, [e.items ? e._l(e.items, (function(t) {
                        return [t.value ? i("ribbon-item-button", {
                            key: t.value,
                            attrs: {
                                disabled: t.disabled,
                                selected: t.selected
                            },
                            on: {
                                click: t.click
                            }
                        }, ["checkbox" === t.icon ? i("div", {
                            staticClass: "center-flex w-[20px] h-[20px] ribbon__item-check"
                        }, [t.selected ? i("span", [e._v("✔")]) : e._e()]) : t.icon ? i("div", {
                            staticClass: "flex p-[2px] ribbon__item-icon"
                        }, [i("base-icon", {
                            class: t.iconClass,
                            attrs: {
                                icon: t.icon
                            }
                        })], 1) : e._e(), i("span", {
                            staticClass: "ribbon__item-label"
                        }, [e._v(e._s(t.label))])]) : i("div", {
                            key: t.label,
                            staticClass: "bg-black/5 p-1 font-bold ribbon__item-title"
                        }, [e._v(" " + e._s(t.label) + " ")])]
                    })) : e._t("default")], 2)
                },
                a = [],
                s = i("58cd"),
                o = i("92fc"),
                r = {
                    props: {
                        items: {
                            type: Array
                        }
                    },
                    components: {
                        BaseIcon: s["a"],
                        RibbonItemButton: o["a"]
                    }
                },
                l = r,
                c = (i("bf36"), i("2877")),
                u = Object(c["a"])(l, n, a, !1, null, null, null);
            t["a"] = u.exports
        },
        "051f": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("base-combobox", e._g(e._b({
                        attrs: {
                            identifierClass: "ribbon__item-combobox"
                        }
                    }, "base-combobox", e.$props, !1), e.$listeners))
                },
                a = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        class: ["relative combobox", e.identifierClass, {
                            "is-active": e.showDropdown
                        }]
                    }, [i("div", {
                        staticClass: "flex items-center p-1 w-full h-full text-base winui-textbox combobox-input",
                        attrs: {
                            role: "combobox",
                            "aria-owns": e.id
                        },
                        on: {
                            click: e.toggleDropdown
                        }
                    }, [e._v(" " + e._s(e.selectedLabel) + " ")]), i("button", {
                        staticClass: "top-0 right-0 absolute center-flex px-0 py-0 combobox-button",
                        attrs: {
                            "aria-label": "Toggle menu",
                            "aria-haspopup": "listbox",
                            "aria-expanded": e.showDropdown
                        },
                        on: {
                            click: e.toggleDropdown
                        }
                    }), e.showDropdown ? i("base-portal", {
                        class: e.identifierClass,
                        style: e.dropdownStyle
                    }, [i("winui-listbox", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: e.handleClickOutside,
                            expression: "handleClickOutside"
                        }],
                        staticClass: "bg-white max-h-[340px] combobox-listbox",
                        attrs: {
                            id: e.id,
                            items: e.items,
                            value: e.computedValue
                        },
                        on: {
                            change: e.handleChange
                        }
                    })], 1) : e._e()], 1)
                },
                o = [],
                r = i("57e3"),
                l = i("0f35");
            const c = {
                items: {
                    type: Array,
                    required: !0
                },
                value: [String, Number],
                identifierClass: String
            };
            var u = {
                    props: c,
                    data() {
                        return {
                            mutableValue: this.value,
                            showDropdown: !1,
                            dropdownStyle: null
                        }
                    },
                    computed: {
                        id: () => Object(l["o"])("combobox"),
                        computedValue: {
                            get() {
                                return this.mutableValue
                            },
                            set(e) {
                                this.mutableValue = e, this.$emit("input", e)
                            }
                        },
                        selectedLabel() {
                            const e = this.items.find(e => e.value === this.computedValue);
                            return e ? e.label : ""
                        }
                    },
                    watch: {
                        value(e) {
                            this.mutableValue = e
                        },
                        async showDropdown() {
                            if (!this.$el) return;
                            await this.$nextTick();
                            const {
                                bottom: e,
                                left: t,
                                width: i
                            } = this.$el.getBoundingClientRect();
                            this.dropdownStyle = {
                                top: e + "px",
                                left: t + "px",
                                width: i + "px"
                            }
                        }
                    },
                    methods: {
                        toggleDropdown() {
                            this.showDropdown = !this.showDropdown
                        },
                        handleClickOutside(e) {
                            this.$el.contains(e.target) || (this.showDropdown = !1)
                        },
                        handleChange(e) {
                            this.computedValue = e, this.showDropdown = !1
                        }
                    },
                    components: {
                        BasePortal: r["a"]
                    }
                },
                b = u,
                d = (i("549d"), i("2877")),
                f = Object(d["a"])(b, s, o, !1, null, null, null),
                p = f.exports,
                m = {
                    props: c,
                    components: {
                        BaseCombobox: p
                    }
                },
                h = m,
                v = Object(d["a"])(h, n, a, !1, null, null, null);
            t["a"] = v.exports
        },
        "1b13": function(e, t, i) {},
        "1b9a": function(e, t, i) {
            "use strict";
            i("7eb9")
        },
        "382f": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "border border-black/40 border-solid ribbon__item-color"
                    }, [i("span", {
                        staticClass: "block w-full h-full",
                        style: {
                            background: e.color
                        }
                    })])
                },
                a = [],
                s = {
                    props: {
                        color: {
                            type: String,
                            required: !0
                        }
                    }
                },
                o = s,
                r = i("2877"),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        4761: function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("ribbon-group", {
                        staticClass: "grid grid-cols-[auto_auto]",
                        attrs: {
                            title: e.$t("clipboard")
                        }
                    }, [i("ribbon-item", {
                        attrs: {
                            icon: e.icon["ribbon-paste"],
                            name: e.$t("paste"),
                            variant: "split",
                            size: "large",
                            disabled: ""
                        }
                    }), i("ribbon-item", {
                        attrs: {
                            icon: e.icon["ribbon-cut"],
                            name: e.$t("cut"),
                            disabled: ""
                        }
                    }), i("ribbon-item", {
                        attrs: {
                            icon: e.icon["ribbon-copy"],
                            name: e.$t("copy"),
                            disabled: ""
                        }
                    })], 1)
                },
                a = [],
                s = i("74f2"),
                o = i("9b10"),
                r = i("2f62"),
                l = {
                    computed: { ...Object(r["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            return this.themeData.icon
                        }
                    },
                    components: {
                        RibbonGroup: s["a"],
                        RibbonItem: o["a"]
                    }
                },
                c = l,
                u = i("2877"),
                b = Object(u["a"])(c, n, a, !1, null, null, null);
            t["a"] = b.exports
        },
        "4c59": function(e, t, i) {},
        5440: function(e, t, i) {
            "use strict";
            i.d(t, "h", (function() {
                return n
            })), i.d(t, "i", (function() {
                return a
            })), i.d(t, "b", (function() {
                return s
            })), i.d(t, "c", (function() {
                return o
            })), i.d(t, "j", (function() {
                return r
            })), i.d(t, "e", (function() {
                return l
            })), i.d(t, "f", (function() {
                return c
            })), i.d(t, "g", (function() {
                return u
            })), i.d(t, "d", (function() {
                return b
            })), i.d(t, "a", (function() {
                return d
            }));
            const n = {
                    Line: "line",
                    Curve: "curve",
                    Oval: "oval",
                    Rect: "rect",
                    RectR: "roundrect",
                    Poly: "polygon",
                    Triangle: "triangle",
                    TriangleR: "righttriangle",
                    Diamond: "diamond",
                    Penta: "pentagon",
                    Hexa: "hexagon",
                    ArrowR: "arrowright",
                    ArrowL: "arrowleft",
                    ArrowU: "arrowup",
                    ArrowD: "arrowdown",
                    Star4: "fourstar",
                    Star5: "fivestar",
                    Star6: "sixstar",
                    Speech: "speech",
                    SpeechO: "speechoval",
                    SpeechC: "speechcloud",
                    Heart: "heart",
                    Lightning: "lightning"
                },
                a = {
                    select: "select",
                    pencil: "pencil",
                    bucket: "bucket",
                    text: "text",
                    eraser: "eraser",
                    picker: "picker",
                    zoomer: "zoomer",
                    brush: "brush",
                    shape: "shape"
                },
                s = {
                    [n.Diamond]: {
                        path: "M50,0,100,50,50,100,0,50.00000000000001Z",
                        size: [100, 100]
                    },
                    [n.Penta]: {
                        path: "M50,0,97.55282581475768,34.54915028125263,79.38926261462366,90.45084971874738,20.61073738537635,90.45084971874738,2.447174185242325,34.549150281252615Z",
                        size: [100, 100]
                    },
                    [n.Hexa]: {
                        path: "M 439.30127018922195,443 396,468 352.6987298107781,443 352.69872981077805,393 396,368 439.30127018922195,393 z",
                        size: [100, 100]
                    },
                    [n.Star4]: {
                        path: "M 531.15625,165.4375 C 524.35988,184.24635 519.78901,204.26987 514.09422,223.62256 C 511.21907,234.00879 508.34391,244.39502 505.46875,254.78125 C 475.67782,263.15656 445.61312,271.00262 416.09375,280 C 411.69689,283.24345 419.45388,284.72368 421.85155,285.48626 C 449.57013,293.72278 477.58267,301.12947 505.46875,308.90625 C 513.81779,338.32231 521.3679,368.05695 530.3125,397.25 C 534.06273,400.44632 535.74888,393.55277 536.50373,391.02007 C 544.72463,363.82774 551.91893,336.29633 559.625,308.9375 C 589.32163,300.45328 619.40611,293.01224 648.75,283.5 C 653.53041,280.46648 646.16769,279.43791 643.63612,278.43074 C 615.81836,270.07493 587.65576,262.63509 559.65625,254.78125 C 551.27006,225.12197 543.58864,195.14374 534.375,165.8125 C 532.71276,164.59523 532.94683,162.73975 531.15625,165.4375z",
                        size: [235, 234],
                        stroke: .3
                    },
                    [n.Star5]: {
                        path: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
                        size: [51, 48],
                        stroke: 1.5
                    },
                    [n.Star6]: {
                        path: "M100,2,128.5,52.636551984287,186.60254037844388,52.00000000000001,157,102,186.60254037844388,152,128.5,151.363448015713,100,202,71.50000000000001,151.363448015713,13.397459621556123,152,43,102,13.397459621556138,51.999999999999986,71.49999999999997,52.636551984287Z",
                        size: [200, 200],
                        stroke: .5
                    },
                    [n.Speech]: {
                        path: "m380.62 198.38c-1.108 0-2 0.8229-2 1.8438v16.812c0 1.0208 0.892 1.8438 2 1.8438h1.1875c-0.44149 1.9459-1.3931 3.8212-2.3125 5.6875 2.3645-1.6274 4.148-3.4 5.6875-5.6875h0.0937 23.344c1.108 0 2-0.8229 2-1.8438v-16.812c0-1.0208-0.892-1.8438-2-1.8438h-28z",
                        size: [34, 30],
                        stroke: 3.8
                    },
                    [n.SpeechO]: {
                        path: "m360.88 529.88c-1.4496 3.5554-4.0544 5.8735-6.11 8.6826 2.9085-2.0738 6.2093-4.0858 9.0488-7.3023m-2.9459-1.3798c-3.4178-2.0992-5.6521-5.239-5.6521-8.5986 0-6.3396 7.6357-11.479 17.055-11.479 9.4191 0 17.055 5.1393 17.055 11.479 0 6.3396-7.6357 11.479-17.055 11.479-3.0779 0-5.9653-0.54876-8.4581-1.5088",
                        size: [33, 28],
                        stroke: 3
                    },
                    [n.SpeechC]: {
                        path: "m346.21 418.81c8.0639 0 15.223 3.5673 19.776 9.0873 3.0025-2.8728 6.9985-4.6229 11.372-4.6229 6.9499 0 12.897 4.4052 15.494 10.719 10.212 0.61452 18.303 8.5222 18.303 18.197 0 7.1313-4.3851 13.293-10.783 16.294 0.0668 0.64258 0.11326 1.2886 0.11326 1.9489 0 10.322-8.3709 18.696-18.688 18.696-3.382 0-6.5512-0.92057-9.2876-2.4928-4.1566 5.7998-11.203 9.6085-19.187 9.6085-10.007 0-18.524-6.0059-21.746-14.39-2.1153 0.68143-4.3692 1.0424-6.7052 1.0424-12.283 0-22.245-10.173-22.245-22.707v-0.18129c0.0914-11.371 8.3686-20.727 19.096-22.276 2.1356-10.774 12.29-18.922 24.487-18.922z",
                        size: [100, 90]
                    },
                    [n.Heart]: {
                        path: "m188 171.61c-89.237-163.62-178.47 38.5 0 144.38 178.47-105.88 89.24-308 0-144.38z",
                        size: [200, 200],
                        stroke: .5
                    },
                    [n.Lightning]: {
                        path: "M109.894 35.7755L73.2765 0.5L1 20.2466L60.6233 45.7447L44.711 51.6879L102.225 69.3256L89.5723 73.1599L171.051 100L124.848 67.2168L135.776 62.6156L99.7331 39.9933L109.894 35.7755Z",
                        size: [170, 99.5],
                        stroke: .5
                    },
                    [n.ArrowD]: {
                        path: "M25.0042 50.4762L25.639 50.4721V49.8372L25.639 0.641126L74.361 0.799934L74.361 50.0001V50.6392H75H98.4572L50 99.0963L1.53282 50.6292L25.0042 50.4762Z",
                        size: [100, 100]
                    },
                    [n.ArrowU]: {
                        path: "M25.0042 49.5238L25.639 49.5279V50.1628L25.639 99.3589L74.361 99.2001L74.361 50V49.361H75H98.4572L50 0.903688L1.53282 49.3708L25.0042 49.5238Z",
                        size: [100, 100]
                    },
                    [n.ArrowR]: {
                        path: "M50.4762 25.0042L50.4721 25.639V25.639L0.641126 25.639L0.799934 74.361L50.0001 74.361H50.6392V75V98.4572L99.0963 50L50.6292 1.53282L50.4762 25.0042Z",
                        size: [100, 100]
                    },
                    [n.ArrowL]: {
                        path: "M49.5238 25.0042L49.528 25.6391L50.1629 25.6391L99.3589 25.6391L99.2001 74.361L49.9999 74.361L49.3608 74.361L49.3608 75L49.3608 98.4572L0.903722 50L49.3708 1.53285L49.5238 25.0042Z",
                        size: [100, 100]
                    },
                    [n.TriangleR]: {
                        path: "M95.3716 98.0829H1.91715V4.62841L95.3716 98.0829Z",
                        size: [100, 100]
                    }
                },
                o = {
                    fontFamily: "arial",
                    fontSize: 11,
                    fontWeight: "normal",
                    fontStyle: "normal",
                    underline: !1,
                    linethrough: !1,
                    fill: "#000"
                },
                r = [.125, .25, .5, 1, 2, 3, 4, 5, 6, 7, 8],
                l = {
                    fill: "transparent",
                    stroke: "#000000",
                    strokeWidth: 1,
                    selectable: !1
                },
                c = {
                    fill: "transparent",
                    stroke: "#000000",
                    strokeWidth: 1,
                    strokeDashArray: [5, 5],
                    strokeUniform: !0
                },
                u = {
                    borderColor: "#3399ff",
                    borderDashArray: [5, 5],
                    cornerColor: "#ffffff",
                    cornerStrokeColor: "#555555",
                    transparentCorners: !1,
                    cornerSize: 9,
                    hasControls: !0,
                    hasRotatingPoint: !1
                },
                b = {
                    bmp: {
                        lbl: "Bitmap",
                        exts: ["bmp", "dib"]
                    },
                    gif: {
                        lbl: "GIF",
                        exts: ["gif"]
                    },
                    ico: {
                        lbl: "ICO",
                        exts: ["ico"]
                    },
                    jpg: {
                        lbl: "JPEG",
                        exts: ["jpg", "jpeg", "jpe", "jfif"]
                    },
                    tiff: {
                        lbl: "TIFF",
                        exts: ["tiff", "tif"]
                    },
                    png: {
                        lbl: "PNG",
                        exts: ["png"]
                    },
                    webp: {
                        lbl: "WEBP",
                        exts: ["webp"]
                    }
                },
                d = {
                    selection: !1,
                    enableRetinaScaling: !1,
                    imageSmoothingEnabled: !1,
                    defaultCursor: "inherit",
                    hoverCursor: "inherit",
                    freeDrawingCursor: "inherit"
                }
        },
        "549d": function(e, t, i) {
            "use strict";
            i("66a2")
        },
        "57e3": function(e, t, i) {
            "use strict";
            var n, a, s = i("26a1"),
                o = {
                    mounted() {
                        const e = Object(s["i"])();
                        e && this.$el && e.appendChild(this.$el)
                    },
                    beforeDestroy() {
                        var e, t;
                        null === (e = this.$el) || void 0 === e || null === (t = e.parentNode) || void 0 === t || t.removeChild(this.$el)
                    },
                    render(e) {
                        return e("div", {
                            class: "fixed portal"
                        }, this.$slots.default)
                    }
                },
                r = o,
                l = i("2877"),
                c = Object(l["a"])(r, n, a, !1, null, null, null);
            t["a"] = c.exports
        },
        "5c5f": function(e, t, i) {
            "use strict";
            i("4c59")
        },
        "63c9": function(e, t, i) {
            "use strict";
            i("1b13")
        },
        6528: function(e, t, i) {},
        "66a2": function(e, t, i) {},
        7257: function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        ref: "ribbons",
                        staticClass: "z-1 relative bg-black/5 border border-transparent border-b-0 border-solid whitespace-nowrap ribbon__wrapper"
                    }, [i("ribbon-file-button", {
                        staticClass: "top-px left-0 absolute",
                        on: {
                            click: function(t) {
                                e.showFileMenu = !0
                            }
                        }
                    }), i("transition", {
                        attrs: {
                            "leave-active-class": "animated fadeOut faster"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showFileMenu,
                            expression: "showFileMenu"
                        }],
                        staticClass: "top-0 left-0 z-1 absolute flex flex-col bg-white shadow-lg border border-black/20 border-l-0 border-solid min-w-[320px] ribbon__file-menu"
                    }, [i("div", {
                        staticClass: "ribbon__file-top border-black/20 border-b border-solid"
                    }, [i("ribbon-file-button", {
                        on: {
                            click: e.hideMenu
                        }
                    })], 1), i("div", {
                        staticClass: "relative flex ribbon__file-body"
                    }, [e._t("menu"), e._t("extra")], 2), i("div", {
                        staticClass: "ribbon__file-bottom border-black/20 border-t border-solid h-4"
                    })])]), e._t("default")], 2)
                },
                a = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("button", {
                        staticClass: "center-flex bg-gray-600 px-3 py-0 ribbon__file-button",
                        attrs: {
                            "aria-label": "File menu"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.$emit("click")
                            }
                        }
                    }, [i("base-icon", {
                        staticClass: "ribbon__file-icon",
                        attrs: {
                            icon: e.icon
                        }
                    })], 1)
                },
                o = [],
                r = i("58cd"),
                l = i("2f62"),
                c = {
                    computed: { ...Object(l["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            return this.themeData.icon["ribbon-filemenu"]
                        }
                    },
                    components: {
                        BaseIcon: r["a"]
                    }
                },
                u = c,
                b = (i("5c5f"), i("2877")),
                d = Object(b["a"])(u, s, o, !1, null, null, null),
                f = d.exports,
                p = i("e716"),
                m = {
                    data() {
                        return {
                            showFileMenu: !1
                        }
                    },
                    mounted() {
                        Object(p["a"])(this.$refs.ribbons, {
                            anchor: !1,
                            tabsClass: "ribbon__tab-list",
                            tabClass: "ribbon__tab-item",
                            titleClass: "ribbon__tab-title",
                            sectionClass: "ribbon__tab-body",
                            selClass: "is-selected"
                        }), window.addEventListener("click", this.hideMenu, !0), window.addEventListener("scroll", this.hideMenu, !0)
                    },
                    beforeDestroy() {
                        window.removeEventListener("click", this.hideMenu, !0), window.removeEventListener("scroll", this.hideMenu, !0)
                    },
                    methods: {
                        hideMenu() {
                            this.showFileMenu = !1
                        }
                    },
                    components: {
                        RibbonFileButton: f
                    }
                },
                h = m,
                v = (i("d7de"), Object(b["a"])(h, n, a, !1, null, null, null));
            t["a"] = v.exports
        },
        "74f2": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "relative px-3 pb-6 ribbon__group"
                    }, [e.title ? i("div", {
                        staticClass: "bottom-0 left-1/2 absolute opacity-50 text-sm ribbon__group-title"
                    }, [e._v(e._s(e.title))]) : e._e(), e._t("default"), i("div", {
                        staticClass: "top-0 right-0 absolute bg-black/10 w-px h-full ribbon__group-separator"
                    })], 2)
                },
                a = [],
                s = {
                    props: {
                        title: {
                            type: String
                        }
                    },
                    mounted() {
                        var e;
                        null === (e = this.$slots.default) || void 0 === e || e.forEach(e => {
                            if (!e.componentOptions) return;
                            const {
                                tag: t
                            } = e.componentOptions || {}, [i, n] = t.split("-") || [];
                            if ("winui" === i) {
                                const t = e.elm;
                                t.classList.add("ribbon__item-" + n)
                            }
                        })
                    }
                },
                o = s,
                r = (i("1b9a"), i("2877")),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        "7abd": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "ribbon__item-group flex border border-black/10 border-solid"
                    }, [e._t("default")], 2)
                },
                a = [],
                s = {},
                o = s,
                r = i("2877"),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        "7eb9": function(e, t, i) {},
        "90b4": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "flex bg-white py-1 border-t border-b border-black/20 border-solid overflow-auto ribbon__tab-body",
                        attrs: {
                            id: e.id,
                            default: e.isDefault
                        }
                    }, [i("div", {
                        staticClass: "ribbon__tab-title"
                    }, [e._v(e._s(e.title))]), e._t("default")], 2)
                },
                a = [],
                s = {
                    props: {
                        id: {
                            type: String,
                            required: !0
                        },
                        title: {
                            type: String,
                            required: !0
                        },
                        isDefault: {
                            type: Boolean
                        }
                    }
                },
                o = s,
                r = i("2877"),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        "92fc": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("button", {
                        class: ["center-flex-x gap-x-1 p-1 w-full h-full ribbon__item-button", {
                            "bg-black/20 is-active": e.selected,
                            "opacity-40 grayscale": e.disabled,
                            "hover:bg-black/10": !e.disabled
                        }],
                        attrs: {
                            disabled: e.disabled
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("click", t)
                            }
                        }
                    }, [e._t("default")], 2)
                },
                a = [],
                s = {
                    props: {
                        selected: Boolean,
                        disabled: Boolean
                    }
                },
                o = s,
                r = i("2877"),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        "9b10": function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        ref: "ribbonItem",
                        class: ["center-flex-x relative ribbon__item is-" + e.variant + " is-" + e.size, {
                            "flex-col h-full row-span-3": "large" === e.size
                        }]
                    }, ["split" === e.variant ? [i("ribbon-item-button", {
                        staticClass: "flex-col",
                        attrs: {
                            disabled: e.disabled,
                            selected: e.active
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [e.icon ? i("base-icon", {
                        class: "ribbon__item-icon is-" + e.size,
                        attrs: {
                            icon: e.icon
                        }
                    }) : e._e()], 1), i("ribbon-item-button", {
                        staticClass: "flex-col",
                        attrs: {
                            disabled: e.disabled,
                            selected: e.active || e.menuVisible
                        },
                        on: {
                            click: e.toggleMenu
                        }
                    }, [e.name ? i("ribbon-item-label", [e._v(e._s(e.name))]) : e._e(), i("ribbon-item-caret", {
                        staticClass: "m-auto"
                    })], 1), e.menuVisible ? i("base-portal", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: e.handleClickout,
                            expression: "handleClickout"
                        }],
                        style: e.menuOffset
                    }, [e._t("menu")], 2) : e._e()] : "dropdown" === e.variant ? [i("ribbon-item-button", {
                        class: {
                            "flex-col": "large" === e.size
                        },
                        attrs: {
                            disabled: e.disabled,
                            selected: e.active || e.menuVisible
                        },
                        on: {
                            click: e.toggleMenu
                        }
                    }, [e.icon ? i("base-icon", {
                        class: "ribbon__item-icon is-" + e.size,
                        attrs: {
                            icon: e.icon
                        }
                    }) : e._e(), e.name ? i("ribbon-item-label", [e._v(e._s(e.name))]) : e._e(), i("ribbon-item-caret", {
                        staticClass: "m-auto"
                    })], 1), e.menuVisible ? i("base-portal", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: e.handleClickout,
                            expression: "handleClickout"
                        }],
                        style: e.menuOffset
                    }, [e._t("menu")], 2) : e._e()] : i("ribbon-item-button", {
                        class: {
                            "flex-col": "large" === e.size
                        },
                        attrs: {
                            disabled: e.disabled,
                            selected: e.active
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [e.icon ? i("base-icon", {
                        class: "ribbon__item-icon is-" + e.size,
                        attrs: {
                            icon: e.icon
                        }
                    }) : e._e(), e._t("default"), e.name ? i("ribbon-item-label", [e._v(e._s(e.name))]) : e._e()], 2)], 2)
                },
                a = [],
                s = i("58cd"),
                o = i("57e3"),
                r = i("92fc"),
                l = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("iconify-icon", {
                        staticClass: "text-[8px] leading-[0] ribbon__item-caret",
                        attrs: {
                            icon: "fa:caret-down"
                        }
                    })
                },
                c = [],
                u = {},
                b = u,
                d = i("2877"),
                f = Object(d["a"])(b, l, c, !1, null, null, null),
                p = f.exports,
                m = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("span", {
                        staticClass: "w-min text-base ribbon__item-label"
                    }, [e._t("default")], 2)
                },
                h = [],
                v = {},
                _ = v,
                g = Object(d["a"])(_, m, h, !1, null, null, null),
                w = g.exports,
                C = {
                    props: {
                        variant: {
                            type: String,
                            default: "button",
                            validator: e => ["button", "dropdown", "split"].includes(e)
                        },
                        size: {
                            type: String,
                            default: "small",
                            validator: e => ["small", "large"].includes(e)
                        },
                        name: String,
                        icon: String,
                        active: Boolean,
                        disabled: Boolean
                    },
                    data() {
                        return {
                            menuVisible: !1,
                            menuOffset: {}
                        }
                    },
                    watch: {
                        async menuVisible(e) {
                            if (!e) return;
                            await this.$nextTick();
                            const t = this.$refs.ribbonItem,
                                {
                                    bottom: i,
                                    left: n
                                } = t.getBoundingClientRect();
                            this.menuOffset = {
                                top: i + "px",
                                left: n + "px"
                            }
                        }
                    },
                    mounted() {
                        window.addEventListener("scroll", this.closeMenu, !0)
                    },
                    beforeDestroy() {
                        window.removeEventListener("scroll", this.closeMenu, !0)
                    },
                    methods: {
                        toggleMenu() {
                            this.menuVisible = !this.menuVisible
                        },
                        closeMenu() {
                            this.menuVisible = !1
                        },
                        handleClickout(e) {
                            const t = this.$refs.ribbonItem;
                            t.contains(e.target) || (this.menuVisible = !1)
                        }
                    },
                    components: {
                        BaseIcon: s["a"],
                        BasePortal: o["a"],
                        RibbonItemButton: r["a"],
                        RibbonItemCaret: p,
                        RibbonItemLabel: w
                    }
                },
                x = C,
                k = (i("63c9"), Object(d["a"])(x, n, a, !1, null, null, null));
            t["a"] = k.exports
        },
        a3d5: function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "flex flex-1 border-black/20 border-l border-solid ribbon__file-extra"
                    }, [i("div", {
                        staticClass: "px-1 py-0.5 border-black/20 border-b border-solid w-full h-fit font-bold ribbon__file-title"
                    }, [e._v(" " + e._s(e.title) + " ")]), e._t("default")], 2)
                },
                a = [],
                s = {
                    props: {
                        title: {
                            type: String,
                            default: "Recent items"
                        }
                    }
                },
                o = s,
                r = i("2877"),
                l = Object(r["a"])(o, n, a, !1, null, null, null);
            t["a"] = l.exports
        },
        bb45: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return n
            })), i.d(t, "b", (function() {
                return a
            }));
            const n = {
                    arial: "Arial",
                    burshmt: "Brush Script MT",
                    courier: "Courier New",
                    "dos-vga": "DOS VGA",
                    garamond: "Garamond",
                    georgia: "Georgia",
                    lucidacons: "Lucida Console",
                    segoepr: "Segoe Print",
                    tahoma: "Tahoma",
                    times: "Times New Roman",
                    trebuchet: "Trebuchet MS",
                    verdana: "Verdana"
                },
                a = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72]
        },
        bf36: function(e, t, i) {
            "use strict";
            i("6528")
        },
        c838: function(e, t, i) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "flex flex-col w-[150px] ribbon__file-main"
                    }, e._l(e.items, (function(t) {
                        return i("ribbon-item", {
                            key: t.label,
                            attrs: {
                                size: "large",
                                icon: e.getIcon(t.icon),
                                name: t.label,
                                shortcut: t.shortcut
                            },
                            on: {
                                click: t.click
                            }
                        })
                    })), 1)
                },
                a = [],
                s = i("9b10"),
                o = i("2f62"),
                r = {
                    props: {
                        items: {
                            type: Array
                        },
                        iconSet: {
                            type: Object
                        }
                    },
                    computed: { ...Object(o["d"])({
                            themeData: "themeData"
                        })
                    },
                    methods: {
                        getIcon(e) {
                            const t = this.iconSet || this.themeData.icon;
                            return t[e]
                        }
                    },
                    components: {
                        RibbonItem: s["a"]
                    }
                },
                l = r,
                c = (i("e65f"), i("2877")),
                u = Object(c["a"])(l, n, a, !1, null, null, null);
            t["a"] = u.exports
        },
        ce02: function(e, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return r
            })), i.d(t, "a", (function() {
                return l
            }));
            var n = i("4360");
            const a = 6e4;
            let s = 0;
            const o = async () => (await i.e("applovin").then(i.bind(null, "f42e"))).default,
                r = async () => {
                    if (!n["default"].state.showAds) return;
                    const e = Date.now();
                    s > 0 && e - s < a || (s = e, (await o()).showInterstitial().catch(() => {}))
                },
                l = async () => {
                    n["default"].state.showAds && (await o()).showRewarded().catch(() => {})
                }
        },
        d7de: function(e, t, i) {
            "use strict";
            i("e1a9")
        },
        e1a9: function(e, t, i) {},
        e65f: function(e, t, i) {
            "use strict";
            i("f0d0")
        },
        e716: function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i, n = {
                        anchor: !0,
                        hideTitle: !0,
                        closable: !1,
                        addTab: null,
                        onActive: null,
                        onClose: null,
                        sectionClass: "section",
                        tabsClass: "tabs",
                        tabClass: "tab",
                        titleClass: "title",
                        selClass: "sel",
                        addTabClass: "add-tab"
                    },
                    a = {},
                    s = "";

                function o() {
                    i = e.querySelector("." + n.tabsClass), i && e.removeChild(i), i = document.createElement("nav"), i.classList.add(n.tabsClass), e.classList.add("tinytabs"), e.prepend(i);
                    var t = e.querySelectorAll("." + n.sectionClass);
                    Array.from(t).forEach((t, o) => {
                        var l = t.getAttribute("id"),
                            u = t.querySelector("." + n.titleClass),
                            b = t.hasAttribute("default"),
                            d = t.hasAttribute("hidden");
                        if (t.setAttribute("data-test-tab-section", l), !l) return !0;
                        (0 === o || b) && (s = l), a[l] = t, n.hideTitle && r(u);
                        var f = document.createElement("a");
                        if (f.classList.add(n.tabClass, "tab-" + l), f.setAttribute("href", "#tab-" + l), f.setAttribute("data-id", l), f.setAttribute("data-test-tab-button", l), f.innerHTML = `<span>${u.innerHTML}</span>`, f.hidden = d, f.onclick = function() {
                                return n.onActive && n.onActive(l), c(l), n.anchor
                            }, n.closable) {
                            var p = document.createElement("span");
                            p.classList.add("close"), p.setAttribute("data-id", "close-" + l), p.setAttribute("data-test-tab-close", l), p.innerHTML = "×", p.onclick = function(t) {
                                var a = t.currentTarget,
                                    s = a.getAttribute("data-id").split("-")[1],
                                    o = document.querySelector(".tab-" + s),
                                    r = o.nextElementSibling,
                                    u = o.previousElementSibling;
                                return n.onClose && (e.removeChild(i), n.onClose(l)), r ? c(r.getAttribute("data-id")) : u && c(u.getAttribute("data-id")), t.stopPropagation(), !1
                            }, f.appendChild(p)
                        }
                        i.appendChild(f)
                    });
                    var o = document.location.hash.replace("#tab-", "");
                    if (n.anchor && o ? c(o) : c(s), n.addTab) {
                        var l = document.createElement("button");
                        l.className = n.addTabClass, l.setAttribute("data-test-tab-add", "true"), l.onclick = () => n.addTab(), i.appendChild(l)
                    }
                }

                function r(e) {
                    e.style.display = "none"
                }

                function l(e) {
                    e.style.display = ""
                }

                function c(e) {
                    if (!a[e]) return !1;
                    u();
                    var t = i.querySelector(".tab-" + e);
                    return t && t.classList.add(n.selClass), n.onBefore && n.onBefore(e, t), l(a[e]), n.onAfter && n.onAfter(e, t), n.anchor && (document.location.href = "#tab-" + e), !0
                }

                function u() {
                    Array.from(i.querySelectorAll("." + n.tabClass)).map(e => e.classList.remove(n.selClass)), Object.values(a).map(r)
                }
                n = Object.assign(n, t), o()
            }
            i.d(t, "a", (function() {
                return n
            }))
        },
        f0d0: function(e, t, i) {}
    }
]);