(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"], {
        "04b9": function(t, e, l) {},
        "39b3": function(t, e, l) {
            "use strict";
            l.d(e, "b", (function() {
                return s
            })), l.d(e, "c", (function() {
                return r
            })), l.d(e, "a", (function() {
                return n
            }));
            var i = l("2f62");
            const o = {
                    OpenContextMenu: "openContextMenu"
                },
                s = "scrollbar",
                r = Object(i["a"])(s),
                n = o;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        contextMenu: void 0
                    }
                },
                getters: {},
                mutations: {
                    [o.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    }
                },
                actions: {}
            }
        },
        "3f73": function(t, e, l) {
            "use strict";
            l("04b9")
        },
        "55ab": function(t, e, l) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("button", {
                        class: ["center-flex p-0 border-0 w-8 h-8 text-black/20 cmdbutton", {
                            "is-active text-black/60": t.active
                        }],
                        attrs: {
                            disabled: t.disabled
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click", e)
                            }
                        }
                    }, [t._t("default")], 2)
                },
                o = [],
                s = {
                    props: {
                        disabled: Boolean,
                        active: Boolean
                    }
                },
                r = s,
                n = l("2877"),
                a = Object(n["a"])(r, i, o, !1, null, null, null);
            e["a"] = a.exports
        },
        "63c0": function(t, e, l) {
            "use strict";
            l("a102")
        },
        "6a11": function(t, e, l) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return t.showAds && t.isPwa ? l("div", {
                        class: ["relative my-4 w-full text-center ad__container--google", "is-" + t.adFormat]
                    }, [l("ins", {
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
                o = [],
                s = l("37b6"),
                r = l("01b4"),
                n = l("d519"),
                a = l("f708"),
                c = l("2f62"),
                h = l("0f35"),
                u = {
                    props: {
                        infeed: Boolean
                    },
                    computed: { ...Object(c["f"])(["showAds"]),
                        adFormat() {
                            return this.infeed ? "horizontal" : "auto"
                        },
                        isPwa: () => Object(a["d"])()
                    },
                    async mounted() {
                        if (!this.isPwa) return;
                        await Object(h["q"])(s["b"]);
                        const t = Object(n["a"])(this.$el, "up");
                        t && this.$store.commit(r["a"].WindowUpdate, {
                            id: t.id.split("-")[1],
                            maximized: !0
                        }), await Object(h["q"])(200), (window.adsbygoogle = window.adsbygoogle || []).push({})
                    }
                },
                d = u,
                b = (l("63c0"), l("2877")),
                m = Object(b["a"])(d, i, o, !1, null, null, null);
            e["a"] = m.exports
        },
        "6fba": function(t, e, l) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return t.isDisabled ? l("div", {
                        staticClass: "h-full overflow-auto"
                    }, [t._t("default")], 2) : l("div", {
                        staticClass: "relative h-full overflow-hidden"
                    }, [l("div", {
                        ref: "scrollbarWrapper",
                        staticClass: "relative flex flex-col w-full h-full scrollbar__wrapper",
                        style: {
                            width: t.width
                        }
                    }, [t._t("default"), t.showVerticalScrollbar ? l("scrollbar", {
                        ref: "verticalScrollbar",
                        style: t.verticalScrollbarStyle,
                        attrs: {
                            type: "vertical",
                            element: t.element,
                            menuDisabled: t.menuDisabled
                        }
                    }) : t._e(), t.showHorizontalScrollbar ? l("scrollbar", {
                        ref: "horizontalScrollbar",
                        style: t.horizontalScrollbarStyle,
                        attrs: {
                            type: "horizontal",
                            element: t.element,
                            menuDisabled: t.menuDisabled
                        }
                    }) : t._e()], 2)])
                },
                o = [],
                s = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        staticClass: "absolute flex scrollbar",
                        class: {
                            "top-0 right-0 flex-col h-full": !t.isHorizontal, "bottom-0 left-0 w-full is-horizontal": t.isHorizontal, "is-rtl": t.isHorizontal && t.isRtl
                        },
                        on: {
                            contextmenu: t.openMenu,
                            wheel: t.handleWheel
                        }
                    }, [l("button", {
                        staticClass: "scrollbar__btn",
                        class: {
                            "is-up": !t.isHorizontal, "is-left": t.isHorizontal
                        },
                        on: {
                            mousedown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : t.handleScrollbarButton(t.isHorizontal ? "left" : "up")
                            },
                            mouseup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : t.stopHoldScroll(e)
                            },
                            mouseleave: t.stopHoldScroll
                        }
                    }), l("div", {
                        ref: "scrollbar",
                        staticClass: "relative flex bg-none w-full h-full",
                        class: {
                            "justify-center": !t.isHorizontal, "items-center": t.isHorizontal
                        },
                        on: {
                            mousedown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button || e.target !== e.currentTarget ? null : t.handleTrackClick(e)
                            },
                            mouseup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : void(t.trackClickDirection = null)
                            }
                        }
                    }, [l("div", {
                        staticClass: "absolute flex w-full h-full pointer-events-none scrollbar__track",
                        class: {
                            "flex-col": !t.isHorizontal
                        }
                    }, [l("div", {
                        staticClass: "w-full h-full",
                        class: {
                            scrollbar__trackup: !t.isHorizontal, scrollbar__trackleft: t.isHorizontal
                        },
                        style: {
                            height: t.isHorizontal ? "100%" : t.trackUpHeight,
                            width: t.isHorizontal ? t.trackLeftHeight : "100%",
                            opacity: "up" === t.trackClickDirection || "left" === t.trackClickDirection ? .5 : 0
                        }
                    }), l("div", {
                        staticClass: "w-full h-full",
                        class: {
                            scrollbar__trackdown: !t.isHorizontal, scrollbar__trackright: t.isHorizontal
                        },
                        style: {
                            height: t.isHorizontal ? "100%" : t.trackDownHeight,
                            width: t.isHorizontal ? t.trackRightHeight : "100%",
                            opacity: "down" === t.trackClickDirection || "right" === t.trackClickDirection ? .5 : 0
                        }
                    })]), l("button", {
                        directives: [{
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: t.openMenu,
                            expression: "openMenu",
                            arg: "touchhold"
                        }],
                        staticClass: "absolute touch-none scrollbar__btn is-thumb",
                        class: {
                            active: t.isThumbDragged
                        },
                        style: t.scrollbarThumbStyle,
                        on: {
                            pointerdown: t.handleThumbDragStart,
                            contextmenu: t.openMenu
                        }
                    })]), l("button", {
                        staticClass: "scrollbar__btn",
                        class: {
                            "is-down": !t.isHorizontal, "is-right": t.isHorizontal
                        },
                        on: {
                            mousedown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : t.handleScrollbarButton(t.isHorizontal ? "right" : "down")
                            },
                            mouseup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : t.stopHoldScroll(e)
                            },
                            mouseleave: t.stopHoldScroll
                        }
                    })])
                },
                r = [],
                n = l("39b3"),
                a = l("7f29"),
                c = l("2f62");
            const h = 10;
            var u = {
                    props: {
                        type: {
                            type: String,
                            validator: t => ["vertical", "horizontal"].includes(t)
                        },
                        scrollStep: {
                            type: Number,
                            default: 20
                        },
                        scrollInterval: {
                            type: Number,
                            default: 100
                        },
                        element: {
                            type: HTMLElement
                        },
                        menuDisabled: Boolean
                    },
                    data() {
                        return {
                            thumbHeight: null,
                            thumbTop: null,
                            thumbHeightHorizon: null,
                            thumbTopHorizon: null,
                            isThumbDragged: !1,
                            dragStartY: 0,
                            dragStartScrollTop: 0,
                            dragStartX: 0,
                            dragStartScrollLeft: 0,
                            trackClickDirection: null,
                            holdScrollInterval: null
                        }
                    },
                    mounted() {
                        this.updateScrollbar()
                    },
                    computed: { ...Object(c["d"])({
                            isRtl: "isRtl"
                        }),
                        trackUpHeight() {
                            return this.thumbTop + this.thumbHeight / 2 + "%"
                        },
                        trackDownHeight() {
                            return 100 - (this.thumbTop + this.thumbHeight / 2) + "%"
                        },
                        trackLeftHeight() {
                            return this.thumbTopHorizon + this.thumbHeightHorizon / 2 + "%"
                        },
                        trackRightHeight() {
                            return 100 - (this.thumbTopHorizon + this.thumbHeightHorizon / 2) + "%"
                        },
                        isHorizontal() {
                            return "horizontal" === this.type
                        },
                        scrollbarThumbStyle() {
                            return {
                                height: this.isHorizontal ? null : this.thumbHeight + "%",
                                top: this.isHorizontal ? null : this.thumbTop + "%",
                                width: this.isHorizontal ? this.thumbHeightHorizon + "%" : null,
                                left: this.isHorizontal ? this.thumbTopHorizon + "%" : null
                            }
                        }
                    },
                    methods: { ...n["c"].mapMutations([n["a"].OpenContextMenu]),
                        openMenu(t) {
                            t.preventDefault(), this.menuDisabled || this[n["a"].OpenContextMenu]({
                                e: t,
                                isHorizontal: this.isHorizontal,
                                scrollHere: () => this.handleTrackClick(t),
                                scrollUp: () => this.scroll("up"),
                                scrollDown: () => this.scroll("down"),
                                scrollTop: () => this.scroll("top"),
                                scrollBottom: () => this.scroll("bottom"),
                                scrollLeft: () => this.scroll("left"),
                                scrollRight: () => this.scroll("right"),
                                scrollLeftEdge: () => this.scroll("leftEdge"),
                                scrollRightEdge: () => this.scroll("rightEdge"),
                                scrollPageUp: () => this.scroll("pageUp"),
                                scrollPageDown: () => this.scroll("pageDown"),
                                scrollPageLeft: () => this.scroll("pageLeft"),
                                scrollPageRight: () => this.scroll("pageRight")
                            })
                        },
                        updateScrollbar() {
                            if (this.isHorizontal) {
                                let t = this.element.clientWidth / this.element.scrollWidth;
                                this.thumbHeightHorizon = Math.max(100 * t, h), t = this.element.scrollLeft / (this.element.scrollWidth - this.element.clientWidth), this.thumbTopHorizon = t * (100 - this.thumbHeightHorizon)
                            } else {
                                let t = this.element.clientHeight / this.element.scrollHeight;
                                this.thumbHeight = Math.max(100 * t, h), t = this.element.scrollTop / (this.element.scrollHeight - this.element.clientHeight), this.thumbTop = t * (100 - this.thumbHeight)
                            }
                        },
                        handleThumbDragStart(t) {
                            if (0 !== t.button) return;
                            this.isThumbDragged = !0, this.dragStartX = t.clientX, this.dragStartScrollLeft = this.element.scrollLeft, this.dragStartY = t.clientY, this.dragStartScrollTop = this.element.scrollTop;
                            const e = t.target;
                            e.setPointerCapture(t.pointerId), document.addEventListener("pointermove", this.handleThumbDrag), document.addEventListener("pointerup", this.handleThumbDragEnd)
                        },
                        handleThumbDragEnd(t) {
                            this.isThumbDragged = !1;
                            const e = t.target;
                            e.releasePointerCapture(t.pointerId), document.removeEventListener("pointermove", this.handleThumbDrag), document.removeEventListener("pointerup", this.handleThumbDragEnd)
                        },
                        handleThumbDrag(t) {
                            if (!this.isThumbDragged) return;
                            const e = this.$refs.scrollbar,
                                l = this.isHorizontal ? e.clientWidth : e.clientHeight,
                                i = this.isHorizontal ? this.thumbHeightHorizon : this.thumbHeight,
                                o = i / 100 * l,
                                s = l - o,
                                r = this.isHorizontal ? this.element.scrollWidth - this.element.clientWidth : this.element.scrollHeight - this.element.clientHeight,
                                n = t.clientX - this.dragStartX,
                                a = t.clientY - this.dragStartY,
                                c = (this.isHorizontal ? n : a) / s * r;
                            this.isHorizontal ? this.element.scrollLeft = this.dragStartScrollLeft + c : this.element.scrollTop = this.dragStartScrollTop + c
                        },
                        handleTrackClick(t) {
                            const e = this.$refs.scrollbar,
                                l = e.getBoundingClientRect(),
                                i = this.isHorizontal ? e.clientWidth : e.clientHeight,
                                o = this.isHorizontal ? this.thumbHeightHorizon : this.thumbHeight,
                                s = o / 100 * i,
                                r = t.clientX - l.left,
                                n = t.clientY - l.top,
                                c = (this.isHorizontal ? r : n) - s / 2,
                                h = i - s,
                                u = Object(a["a"])(c, 0, h),
                                d = this.isHorizontal ? this.element.scrollWidth - this.element.clientWidth : this.element.scrollHeight - this.element.clientHeight,
                                b = u / h;
                            this.isHorizontal ? this.element.scrollLeft = b * d : this.element.scrollTop = b * d;
                            const m = this.isHorizontal ? this.thumbTopHorizon : this.thumbTop,
                                p = m / 100 * i,
                                f = p + s / 2;
                            this.isHorizontal ? this.trackClickDirection = r < f ? "left" : "right" : this.trackClickDirection = n < f ? "up" : "down", setTimeout(() => this.trackClickDirection = null, 200)
                        },
                        scroll(t) {
                            switch (t) {
                                case "up":
                                    this.element.scrollTop -= this.scrollStep;
                                    break;
                                case "down":
                                    this.element.scrollTop += this.scrollStep;
                                    break;
                                case "left":
                                    this.element.scrollLeft -= this.scrollStep;
                                    break;
                                case "right":
                                    this.element.scrollLeft += this.scrollStep;
                                    break;
                                case "top":
                                    this.element.scrollTop = 0;
                                    break;
                                case "bottom":
                                    this.element.scrollTop = this.element.scrollHeight;
                                    break;
                                case "leftEdge":
                                    this.element.scrollLeft = 0;
                                    break;
                                case "rightEdge":
                                    this.element.scrollLeft = this.element.scrollWidth;
                                    break;
                                case "pageUp":
                                    this.element.scrollTop -= this.element.clientHeight;
                                    break;
                                case "pageDown":
                                    this.element.scrollTop += this.element.clientHeight;
                                    break;
                                case "pageLeft":
                                    this.element.scrollLeft -= this.element.clientWidth;
                                    break;
                                case "pageRight":
                                    this.element.scrollLeft += this.element.clientWidth;
                                    break
                            }
                        },
                        stopHoldScroll() {
                            clearInterval(this.holdScrollInterval), this.holdScrollInterval = null
                        },
                        handleWheel(t) {
                            this.element.scrollTop += t.deltaY, this.element.scrollLeft += t.deltaX
                        },
                        handleScrollbarButton(t) {
                            this.scroll(t), this.holdScrollInterval = setInterval(() => this.scroll(t), this.scrollInterval)
                        }
                    }
                },
                d = u,
                b = l("2877"),
                m = Object(b["a"])(d, s, r, !1, null, null, null),
                p = m.exports;
            const f = "--scrollbar-thickness";
            var g = {
                    props: {
                        xScrollMode: {
                            type: String,
                            default: "auto",
                            validator: t => ["auto", "scroll"].includes(t)
                        },
                        yScrollMode: {
                            type: String,
                            default: "auto",
                            validator: t => ["auto", "scroll"].includes(t)
                        },
                        elClass: String,
                        menuDisabled: Boolean,
                        disabled: Boolean
                    },
                    data() {
                        return {
                            element: null,
                            resizeObserver: null,
                            mutationObserver: null,
                            width: "",
                            isScrollableVertically: !1,
                            isScrollableHorizontally: !1,
                            scrollbarThickness: null,
                            isDisabled: !1,
                            elPaddingRight: null,
                            elPaddingBottom: null
                        }
                    },
                    computed: { ...Object(c["d"])({
                            isRtl: "isRtl"
                        }),
                        showVerticalScrollbar() {
                            return this.isScrollableVertically || "auto" !== this.yScrollMode
                        },
                        showHorizontalScrollbar() {
                            return this.isScrollableHorizontally || "auto" !== this.xScrollMode
                        },
                        verticalScrollbarStyle() {
                            return {
                                paddingBottom: this.showHorizontalScrollbar ? `var(${f})` : 0
                            }
                        },
                        horizontalScrollbarStyle() {
                            const t = this.showVerticalScrollbar ? `var(${f})` : 0;
                            return {
                                ["padding" + (this.isRtl ? "Left" : "Right")]: t
                            }
                        }
                    },
                    async mounted() {
                        var t, e, l;
                        this.isDisabled = this.disabled, await this.$nextTick();
                        const i = null === (t = this.$refs) || void 0 === t ? void 0 : t.scrollbarWrapper;
                        if (this.element = this.elClass && (null === i || void 0 === i ? void 0 : i.querySelector(this.elClass)) || (null === (e = this.$slots.default) || void 0 === e || null === (l = e[0]) || void 0 === l ? void 0 : l.elm), !this.element) throw new Error("No elements found to observe changes.");
                        if (this.element.style.height = "100%", this.element.style.width = "100%", !("ResizeObserver" in window) || !("MutationObserver" in window)) return void(this.isDisabled = !0);
                        if (this.isDisabled) return;
                        this.scrollbarThickness = parseInt(getComputedStyle(document.documentElement).getPropertyValue(f).trim());
                        const o = getComputedStyle(this.element);
                        this.elPaddingRight = parseInt(o.paddingRight), this.elPaddingBottom = parseInt(o.paddingBottom), this.width = this.element.style.getPropertyValue("width") || "100%", this.element.style.overflow = "auto", this.element.classList.add("no-scrollbar"), this.resizeObserver = new ResizeObserver(this.updateScrollbar), this.resizeObserver.observe(this.element), this.mutationObserver = new MutationObserver(this.handleElementMutation), this.mutationObserver.observe(this.element, {
                            attributes: !0,
                            attributeFilter: ["class"],
                            childList: !0
                        }), this.element.addEventListener("scroll", this.updateScrollbar), this.updateScrollbar()
                    },
                    beforeDestroy() {
                        var t, e, l;
                        null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), null === (e = this.mutationObserver) || void 0 === e || e.disconnect(), null === (l = this.element) || void 0 === l || l.removeEventListener("scroll", this.updateScrollbar)
                    },
                    watch: {
                        showVerticalScrollbar(t) {
                            this.element.style["padding" + (this.isRtl ? "Left" : "Right")] = t ? this.scrollbarThickness + this.elPaddingRight + "px" : this.elPaddingRight + "px"
                        },
                        showHorizontalScrollbar(t) {
                            this.element.style.paddingBottom = t ? this.scrollbarThickness + this.elPaddingBottom + "px" : this.elPaddingBottom + "px"
                        }
                    },
                    methods: {
                        updateScrollbar() {
                            var t, e, l, i;
                            this.isScrollableVertically = this.element.clientHeight < this.element.scrollHeight, null === (t = this.$refs) || void 0 === t || null === (e = t.verticalScrollbar) || void 0 === e || e.updateScrollbar(), this.isScrollableHorizontally = this.element.clientWidth < this.element.scrollWidth, null === (l = this.$refs) || void 0 === l || null === (i = l.horizontalScrollbar) || void 0 === i || i.updateScrollbar()
                        },
                        handleElementMutation() {
                            this.element.classList.contains("no-scrollbar") || this.element.classList.add("no-scrollbar"), this.updateScrollbar()
                        }
                    },
                    components: {
                        Scrollbar: p
                    }
                },
                v = g,
                w = Object(b["a"])(v, i, o, !1, null, null, null);
            e["a"] = w.exports
        },
        "7f29": function(t, e, l) {
            "use strict";

            function i(t, e, l) {
                return Math.min(Math.max(t, e), l)
            }
            l.d(e, "a", (function() {
                return i
            }))
        },
        a102: function(t, e, l) {},
        e12e: function(t, e, l) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("winui-collapse", {
                        staticClass: "collapse-list",
                        attrs: {
                            open: ""
                        },
                        scopedSlots: t._u([{
                            key: "title",
                            fn: function() {
                                return [l("div", {
                                    staticClass: "collapse-title center-flex-x gap-1"
                                }, [t._v(t._s(t.title) + " (" + t._s(t.count) + ")")])]
                            },
                            proxy: !0
                        }])
                    }, [l("div", {
                        staticClass: "collapse-body flex flex-wrap px-2 py-1"
                    }, [t._t("default")], 2)])
                },
                o = [],
                s = {
                    props: {
                        title: String,
                        count: Number
                    }
                },
                r = s,
                n = (l("3f73"), l("2877")),
                a = Object(n["a"])(r, i, o, !1, null, null, null);
            e["a"] = a.exports
        },
        e4f8: function(t, e, l) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        staticClass: "flex gap-1 window__addressbar-nav",
                        attrs: {
                            "data-test-window-navigation": ""
                        }
                    }, [l("command-button", {
                        staticClass: "window__addressbar-prev",
                        attrs: {
                            disabled: !t.activeBack,
                            active: t.activeBack
                        },
                        on: {
                            click: function(e) {
                                return t.navigate("back")
                            }
                        }
                    }, [t.useLineArrow ? l("iconify-icon", {
                        attrs: {
                            icon: "la:arrow-left"
                        }
                    }) : t.useChevron ? l("iconify-icon", {
                        attrs: {
                            icon: "la:angle-left"
                        }
                    }) : t.usePixel ? l("iconify-icon", {
                        attrs: {
                            icon: "pixelarticons:arrow-left"
                        }
                    }) : l("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-left"
                        }
                    })], 1), l("command-button", {
                        staticClass: "window__addressbar-next",
                        attrs: {
                            disabled: !t.activeNext,
                            active: t.activeNext
                        },
                        on: {
                            click: function(e) {
                                return t.navigate("next")
                            }
                        }
                    }, [t.useLineArrow ? l("iconify-icon", {
                        attrs: {
                            icon: "la:arrow-right"
                        }
                    }) : t.useChevron ? l("iconify-icon", {
                        attrs: {
                            icon: "la:angle-right"
                        }
                    }) : t.usePixel ? l("iconify-icon", {
                        attrs: {
                            icon: "pixelarticons:arrow-right"
                        }
                    }) : l("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-right"
                        }
                    })], 1)], 1)
                },
                o = [],
                s = l("bbbd"),
                r = l("55ab"),
                n = l("2f62"),
                a = {
                    props: {
                        activeBack: Boolean,
                        activeNext: Boolean,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(n["f"])({
                            theme: "theme"
                        }),
                        useLineArrow() {
                            return !this.asDecorator && /^win11|win10|chromeos/.test(this.theme)
                        },
                        useChevron() {
                            return !this.asDecorator && "macos" === this.theme
                        },
                        usePixel() {
                            return !this.asDecorator && /onebit/.test(this.theme)
                        }
                    },
                    methods: { ...s["e"].mapActions([s["b"].ProgramEvent]),
                        navigate(t) {
                            const e = "back" === t && this.activeBack,
                                l = "next" === t && this.activeNext;
                            (e || l) && (this.$emit("navigate", t), this[s["b"].ProgramEvent](s["c"].Explorer.StartNavigation))
                        }
                    },
                    components: {
                        CommandButton: r["a"]
                    }
                },
                c = a,
                h = l("2877"),
                u = Object(h["a"])(c, i, o, !1, null, null, null);
            e["a"] = u.exports
        }
    }
]);