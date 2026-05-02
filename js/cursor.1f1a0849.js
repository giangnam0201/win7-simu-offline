(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["cursor"], {
        "43f0": function(e, t, s) {
            "use strict";
            s.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("span", {
                        staticClass: "absolute cursor-wrapper pointer-events-none"
                    }, e._l(e.trailCount, (function(t) {
                        return s("span", {
                            key: t,
                            ref: "cursor",
                            refInFor: !0,
                            staticClass: "fixed pointer-events-none cursor",
                            class: {
                                "has-shadow": e.showMouseShadows && e.hasShadow, "has-highlight": e.hasHighlight && t === e.trailCount
                            },
                            style: {
                                "--image": "url(" + e.activeCursor + ")",
                                transition: "transform " + .05 * (e.trailCount - (t + 1)) + "s linear"
                            },
                            attrs: {
                                "data-test-cursor-instance": ""
                            }
                        })
                    })), 0)
                },
                r = [],
                o = s("8229"),
                i = s("6c8d"),
                n = s("554d"),
                c = s("0f35"),
                u = s("2f62"),
                h = s("26a1");
            const l = 64,
                d = l / 2;
            var f = {
                    data() {
                        return {
                            raId: null,
                            paintCursor: null,
                            activeCursor: null,
                            activeCursorType: null
                        }
                    },
                    computed: { ...Object(u["d"])({
                            isRtl: "isRtl"
                        }),
                        ...i["c"].mapState({
                            type: "cursorType",
                            scheme: "cursorScheme",
                            hasTrail: "cursorTrail",
                            hasShadow: "cursorShadow",
                            hasHighlight: "cursorHighlight"
                        }),
                        ...n["d"].mapState({
                            showMouseShadows: e => e.showMouseShadows
                        }),
                        trailCount() {
                            return this.hasTrail ? 6 : 1
                        },
                        cursorImage() {
                            return Object.values(o["a"]).reduce((e, t) => {
                                const {
                                    suffix: s
                                } = o["d"][this.scheme], a = "string" === typeof t ? t : o["b"][t] + s, r = Object(c["a"])(this.$store.state.assets.assetStore.cursor, a);
                                return e[t] = r, e
                            }, {})
                        }
                    },
                    watch: {
                        activeCursor: e => Object(h["m"])({
                            type: "image",
                            url: e
                        }),
                        type(e) {
                            this.activeCursor = this.cursorImage[e], this.activeCursorType = e, this.paintCursor = this.activeCursor
                        }
                    },
                    beforeMount() {
                        const e = this;
                        e.x = -l, e.y = -l
                    },
                    mounted() {
                        const e = this.$root.$el;
                        e.addEventListener("touchend", this.moveTouch, {
                            passive: !0
                        }), e.addEventListener("touchmove", this.moveTouch, {
                            passive: !0
                        }), e.addEventListener("mousemove", this.moveMouse, {
                            passive: !0
                        }), e.addEventListener("mouseover", this.updateTarget);
                        const t = this,
                            s = () => {
                                const e = this.$refs.cursor,
                                    a = this.isRtl ? " scaleX(-1)" : "";
                                e.forEach(e => e.style.transform = `translate3d(${t.x}px, ${t.y}px,0)${a}`), this.raId = requestAnimationFrame(s)
                            };
                        this.raId = requestAnimationFrame(s)
                    },
                    beforeDestroy() {
                        const e = this.$root.$el;
                        e.removeEventListener("touchend", this.moveTouch), e.removeEventListener("touchmove", this.moveTouch), e.removeEventListener("mousemove", this.moveMouse), e.removeEventListener("mouseover", this.updateTarget), cancelAnimationFrame(this.raId)
                    },
                    methods: {
                        moveTouch({
                            changedTouches: e
                        }) {
                            const [t] = e, s = this;
                            s.x = t.clientX - d, s.y = t.clientY - d, this.checkRtl()
                        },
                        moveMouse(e) {
                            const t = this;
                            t.x = e.clientX - d, t.y = e.clientY - d, this.checkRtl()
                        },
                        checkRtl() {
                            const e = this;
                            this.isRtl && (e.x += l - window.innerWidth)
                        },
                        updateTarget(e) {
                            const t = e.target;
                            if ([o["a"].Busy, o["a"].Working, o["a"].Precision].includes(this.activeCursorType)) return;
                            if (t.disabled || t.dataset.defaultCursor) return void(this.activeCursor = this.cursorImage[o["a"].Default]);
                            const s = "INPUT" === t.tagName && (!t.type || ["text", "password", "search", "tel", "url", "email"].includes(t.type)),
                                a = "true" === t.contentEditable || t.closest('[contenteditable="true"]'),
                                r = t.classList.contains("handle") && t.closest(".resizable"),
                                i = t.hasAttribute("data-resize-handle");
                            if (t.classList.contains("upper-canvas")) this.activeCursor = this.paintCursor;
                            else if (r) {
                                const e = t.className.split("-")[1];
                                this.activeCursor = this.cursorImage[o["e"][e]]
                            } else if (i) {
                                const e = t.getAttribute("data-resize-handle");
                                this.activeCursor = this.cursorImage[o["e"][e]]
                            } else s || a || "TEXTAREA" === t.tagName ? this.activeCursor = this.cursorImage[o["a"].Typing] : this.activeCursor = this.cursorImage[o["a"].Default]
                        }
                    }
                },
                m = f,
                p = (s("f3a7"), s("2877")),
                v = Object(p["a"])(m, a, r, !1, null, null, null);
            t["default"] = v.exports
        },
        "554d": function(e, t, s) {
            "use strict";
            s.d(t, "c", (function() {
                return c
            })), s.d(t, "d", (function() {
                return u
            })), s.d(t, "b", (function() {
                return h
            })), s.d(t, "a", (function() {
                return d
            }));
            var a = s("968c"),
                r = s("0d26"),
                o = s("2f62"),
                i = s("51e6");
            const n = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                c = "effects",
                u = Object(o["a"])(c),
                h = n,
                l = {
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
                d = ["enableAeroPeek", "enableComposition", "fadeTooltips", "fadeMenuItems", "saveTaskbarThumbnails", "showThumbnails", "showSelectionRectangle", "slideComboBoxes", "smoothText", "smoothScroll"],
                f = e => Object.keys(l).reduce((t, s) => {
                    const a = d.includes(s);
                    return { ...t,
                        [s]: "appearance" === e && !a
                    }
                }, {
                    preset: e
                });
            t["e"] = {
                namespaced: !0,
                state() {
                    return Object.keys(l).reduce((e, t) => ({ ...e,
                        [t]: null
                    }), {})
                },
                getters: {
                    presetAppearance: () => f("appearance"),
                    presetPerformance: () => f("performance")
                },
                mutations: {
                    [n.SetEffects]: (e, t) => {
                        Object.assign(e, t)
                    }
                },
                actions: {
                    [n.SetEffects]: async ({
                        commit: e,
                        dispatch: t
                    }, s) => {
                        if (s) e(n.SetEffects, s);
                        else {
                            const s = await t(n.GetPresetAuto);
                            e(n.SetEffects, s)
                        }
                    },
                    [n.SaveEffects]: async ({
                        state: e,
                        rootState: t
                    }) => a["default"].update("/configs/", t.user, "configs", {
                        effects: e
                    }),
                    [n.GetPresetAuto]: async ({
                        getters: e
                    }) => {
                        let t = await Object(i["getWeiBaseScore"])();
                        r["default"].enabled && r["default"].get("wei") && (t = parseFloat(r["default"].get("wei")));
                        const s = t > 4 ? e.presetAppearance : t >= 3 ? l : e.presetPerformance;
                        return { ...s,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        "6f05": function(e, t, s) {},
        f3a7: function(e, t, s) {
            "use strict";
            s("6f05")
        }
    }
]);