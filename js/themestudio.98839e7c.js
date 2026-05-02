(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["themestudio"], {
        "06c4": function(t, e, n) {
            "use strict";
            n("e874")
        },
        "0a73": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "max-w-3xl",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("text-instruction", {
                        staticClass: "ml-6"
                    }, [t._v("Program icons")]), n("div", {
                        staticClass: "flex flex-wrap gap-3 mb-8"
                    }, t._l(t.programs, (function(e) {
                        return n("div", {
                            key: e,
                            staticClass: "center-flex-y min-w-28"
                        }, [n("base-icon", {
                            attrs: {
                                id: e,
                                icon: t.baseAssets.icon[e]
                            }
                        }), n("code", {
                            class: ["p-1", {
                                "text-xs": t.isLongName(e)
                            }]
                        }, [t._v(t._s(e))])], 1)
                    })), 0), n("text-instruction", {
                        staticClass: "ml-6"
                    }, [t._v("File and folder icons")]), n("div", {
                        staticClass: "flex flex-wrap gap-3 mb-6"
                    }, t._l(t.files, (function(e) {
                        return n("div", {
                            key: e,
                            staticClass: "center-flex-y min-w-28"
                        }, [n("base-icon", {
                            attrs: {
                                id: e,
                                icon: t.baseAssets.icon[e]
                            }
                        }), n("code", {
                            class: ["p-1", {
                                "text-xs": t.isLongName(e)
                            }]
                        }, [t._v(t._s(e))])], 1)
                    })), 0)], 1)
                },
                r = [],
                a = n("c170"),
                o = n("58cd"),
                s = n("b69c"),
                l = ".icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.icon{width:32px;height:32px}",
                c = n("2f62"),
                d = n("56c8"),
                u = {
                    name: "Icon",
                    mixins: [Object(d["a"])(l)],
                    computed: { ...Object(c["d"])({
                            baseAssets: "baseAssets"
                        }),
                        programs: () => ["computer", "bin", "bin-full", "cpanel", ...a["c"], ...a["d"]].sort((t, e) => t.localeCompare(e)),
                        files: () => ["file", "media", "photo", "richtext", "text", "folder", "folder-docs", "folder-downloads", "folder-music", "folder-pics", "folder-videos", "zip"]
                    },
                    methods: {
                        isLongName(t) {
                            return t.length > 8
                        }
                    },
                    components: {
                        BaseIcon: o["a"],
                        TextInstruction: s["a"]
                    }
                },
                h = u,
                p = n("2877"),
                m = Object(p["a"])(h, i, r, !1, null, null, null);
            e["default"] = m.exports
        },
        "0ba6": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".desktop-background.is-main {\n  --bg: INSERT_VALUE_HERE !important;\n}\n\n.desktop__icon-item {\n}\n\n.desktop__icon-item.is-active {\n}\n\n.desktop__icon-icon {\n}\n\n.desktop__icon-name {\n}\n"
        },
        "0c40": function(t, e) {
            function n(t) {
                let e = t;
                var r = {}.toString.call(t).slice(8, -1);
                if ("Set" == r) return new Set([...t].map(t => n(t)));
                if ("Map" == r) return new Map([...t].map(t => [n(t[0]), n(t[1])]));
                if ("Date" == r) return new Date(t.getTime());
                if ("RegExp" == r) return RegExp(t.source, i(t));
                if ("Array" == r || "Object" == r)
                    for (var a in e = Array.isArray(t) ? [] : {}, t) e[a] = n(t[a]);
                return e
            }

            function i(t) {
                if ("string" == typeof t.source.flags) return t.source.flags;
                var e = [];
                return t.global && e.push("g"), t.ignoreCase && e.push("i"), t.multiline && e.push("m"), t.sticky && e.push("y"), t.unicode && e.push("u"), e.join("")
            }
            t.exports = n
        },
        "0e89": function(t, e, n) {
            var i = {
                "./balloon/Preview.vue": "bcc7",
                "./button/Preview.vue": "92043",
                "./checkbox/Preview.vue": "b321",
                "./ctxmenu/Preview.vue": "e2fa",
                "./desktop/Preview.vue": "9c73",
                "./dropdown/Preview.vue": "ec23",
                "./icon/Preview.vue": "0a73",
                "./menubar/Preview.vue": "5495",
                "./progressbar/Preview.vue": "921d",
                "./radio/Preview.vue": "b28e",
                "./ribbon/Preview.vue": "7f2e",
                "./searchbox/Preview.vue": "9ba7e",
                "./slider/Preview.vue": "5f56",
                "./startmenu/Preview.vue": "2656",
                "./tabs/Preview.vue": "ad50",
                "./taskbar/Preview.vue": "a966",
                "./textbox/Preview.vue": "ed93",
                "./window/Preview.vue": "237b"
            };

            function r(t) {
                var e = a(t);
                return n(e)
            }

            function a(t) {
                if (!n.o(i, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return i[t]
            }
            r.keys = function() {
                return Object.keys(i)
            }, r.resolve = a, t.exports = r, r.id = "0e89"
        },
        "0f8d": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("base-message", {
                        attrs: {
                            type: "warning",
                            theme: t.theme
                        },
                        on: {
                            close: function(e) {
                                return t.$emit("cancel")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.$emit("confirm")
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("ok")) + " ")]), n("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.$emit("cancel")
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("cancel")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [t._t("default")], 2)
                },
                r = [],
                a = n("fceb"),
                o = {
                    props: {
                        theme: String
                    },
                    components: {
                        BaseMessage: a["a"]
                    }
                },
                s = o,
                l = n("2877"),
                c = Object(l["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        "11f8": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-progress {\n  --progress-bg: INSERT_COLOR_HERE;\n  --progress-bg--paused: INSERT_COLOR_HERE;\n  --progress-bg--error: INSERT_COLOR_HERE;\n  --progress-bg--meter: INSERT_COLOR_HERE;\n}\n\n.winui-progress > div {\n}\n\n.winui-progress.paused > div {\n}\n\n.winui-progress.error > div {\n}\n\n.winui-progress.meter > div {\n}\n\n.winui-progress.marquee {\n}\n"
        },
        "15f0": function(t, e, n) {},
        "1bb3": function(t, e, n) {
            "use strict";
            n("ac66")
        },
        "237b": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("window-main-static", [n("window-titlebar", {
                        attrs: {
                            icon: "ie",
                            title: t.$t("ie"),
                            asDecorator: ""
                        }
                    }, [n("window-controls", {
                        attrs: {
                            asDecorator: ""
                        }
                    })], 1), n("window-addressbar", [n("window-addressbar-nav", {
                        attrs: {
                            asDecorator: ""
                        }
                    }), n("winui-textbox", {
                        staticClass: "bg-white border border-black/30 border-solid w-full h-full text-base ie__addressbar-input",
                        attrs: {
                            value: "https://msn.com"
                        }
                    }), n("window-addressbar-search", {
                        attrs: {
                            location: "Bing"
                        }
                    })], 1), n("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), n("window-body"), n("window-statusbar", [n("div"), n("div"), n("div", {
                        staticClass: "flex"
                    }, [n("base-icon", {
                        attrs: {
                            icon: t.internetIcon
                        }
                    }), n("span", [t._v("Internet")])], 1)])], 1)], 1)
                },
                r = [],
                a = n("58cd"),
                o = n("3b99"),
                s = n("e4f8"),
                l = n("d65e"),
                c = n("1521"),
                d = n("e863"),
                u = n("411e"),
                h = n("3cb5"),
                p = n("5843"),
                m = n("e314"),
                b = '\ufeff.icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.winui-menu,.winui-menubar{background:#fff;margin:0;padding:0;list-style:none;cursor:default}.winui-menu.can-hover [role=menuitem]:hover>[role=menu],.winui-menubar.can-hover [role=menuitem]:hover>[role=menu]{display:block}.winui-menu [role=menuitem],.winui-menubar [role=menuitem]{position:relative}.winui-menu [role=menuitem]>input[type],.winui-menubar [role=menuitem]>input[type]{display:none}.winui-menu [role=menuitem]>input[type=radio]:checked+label::after,.winui-menubar [role=menuitem]>input[type=radio]:checked+label::after{content:"";width:var(--menu-radio);height:var(--menu-radio);position:absolute;top:calc(50% - var(--menu-radio)/2);left:calc((var(--menu-offset) - var(--menu-radio))/2);background:currentColor;border-radius:50%}.winui-menu [role=menuitem]>input[type=checkbox]:checked+label::after,.winui-menubar [role=menuitem]>input[type=checkbox]:checked+label::after{content:"✔";position:absolute;top:calc(50% - var(--menu-check)/2);left:calc((var(--menu-offset) - var(--menu-check))/2);width:var(--menu-check);height:var(--menu-check);line-height:var(--menu-check);font-size:var(--menu-check);font-weight:bold}.winui-menu [role=menuitem]>a:not(:disabled):hover,.winui-menu [role=menuitem]>a:not(:disabled):focus-visible,.winui-menu [role=menuitem]>button:not(:disabled):hover,.winui-menu [role=menuitem]>button:not(:disabled):focus-visible,.winui-menu [role=menuitem]>label:not(:disabled):hover,.winui-menu [role=menuitem]>label:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>a:not(:disabled):hover,.winui-menubar [role=menuitem]>a:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>button:not(:disabled):hover,.winui-menubar [role=menuitem]>button:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>label:not(:disabled):hover,.winui-menubar [role=menuitem]>label:not(:disabled):focus-visible{background:rgba(0,0,0,.0666666667)}.winui-menu [role=menuitem]:focus>[role=menu],.winui-menu [role=menuitem]:focus-within>[role=menu],.winui-menubar [role=menuitem]:focus>[role=menu],.winui-menubar [role=menuitem]:focus-within>[role=menu]{display:block}.winui-menu [role=menuitem][aria-disabled],.winui-menubar [role=menuitem][aria-disabled]{filter:grayscale(100%);opacity:.5;pointer-events:none}.winui-menu [role=menuitem].has-divider::after,.winui-menubar [role=menuitem].has-divider::after{content:"";display:block;margin:4px 0;height:1px;background:#ddd}.winui-menubar{display:flex}.winui-menubar>[role=menuitem]{display:flex;align-items:center}.winui-menubar>[role=menuitem] button{width:100%;height:100%;display:flex;align-items:center;padding:4px 8px}.winui-menubar>[role=menuitem] .icon{width:16px;height:16px;margin-right:4px}.winui-menu{transition:opacity calc(0.2s * var(--effect-fade-menus));box-shadow:0 1px 20px rgba(0,0,0,.2);position:absolute;min-width:180px;opacity:1;padding:var(--menu-padding)}.winui-menu.inactive{opacity:0;visibility:hidden}[role=menuitem] .winui-menu{display:none;position:absolute;left:0;top:100%;z-index:99}.winui-menu [role=menuitem]>[role=menu]{top:0;left:100%}.winui-menu>[role=menuitem] img,.winui-menu>[role=menuitem] .icon{width:16px;height:16px;position:absolute;top:50%;left:calc((var(--menu-offset) - 16px)/2);margin:0;pointer-events:none;transform:translateY(-50%);z-index:1}.winui-menu>[role=menuitem]>a,.winui-menu>[role=menuitem]>button,.winui-menu>[role=menuitem]>label{position:relative;display:flex;justify-content:space-between;width:100%;padding:4px 8px 4px var(--menu-offset);line-height:1.25rem;white-space:nowrap}.winui-menu>[role=menuitem] button>span:last-child:not([class]){margin-left:32px}.winui-menu>[role=menuitem][aria-haspopup]::after{content:"";position:absolute;top:50%;right:2px;transform:translateY(-50%);border:4px solid rgba(0,0,0,0);border-left-color:currentColor}.winui-menu hr{background:rgba(0,0,0,.1333333333);height:1px;margin:4px 0}.winui-searchbox>input,input.winui-searchbox{background-color:#fff;border:1px solid rgba(0,0,0,.2);line-height:1;padding:4px 6px}.winui-searchbox>input::placeholder,input.winui-searchbox::placeholder{color:currentColor;opacity:.6}.winui-searchbox>input:focus,input.winui-searchbox:focus{border-color:rgba(0,0,0,.6)}input.winui-searchbox:placeholder-shown{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:var(--search-icon) calc(100% - 8px) center no-repeat;background-size:14px}input.winui-searchbox:disabled{opacity:.5}.winui-searchbox{display:inline-block;position:relative}.winui-searchbox>input{padding-right:30px}.winui-searchbox>button{position:absolute;top:1px;right:1px;min-width:26px;height:calc(100% - 2px);background:var(--search-icon) no-repeat center;background-size:14px;background-color:rgba(0,0,0,.1333333333);padding:0}.winui-searchbox>button:hover,.winui-searchbox>button:focus{background-color:rgba(0,0,0,.2666666667)}.winui-searchbox>button:active{background-color:rgba(0,0,0,.4)}.winui-textbox{background:#fff;border:1px solid rgba(0,0,0,.2);padding:4px 6px}.winui-textbox:focus{border-color:rgba(0,0,0,.6)}.winui-textbox:disabled{opacity:.5}.window__wrapper{border:0;will-change:transform}.window__wrapper.minimized{pointer-events:none !important}.window__wrapper.maximized{transform:translate(0) !important;width:100% !important;height:100% !important}.window__wrapper.dragging{border:1px solid #fff;box-shadow:inset 0 0 0 1px #000}.window__wrapper.dragging .window__main{visibility:hidden}[data-effect-show-window-on-drag] .window__wrapper.dragging{border:0;box-shadow:none}[data-effect-show-window-on-drag] .window__wrapper.dragging .window__main{visibility:initial}.window__wrapper>.handle{opacity:0;width:20px;height:20px}.window__wrapper>.handle-tm,.window__wrapper>.handle-bm{margin:0;left:10px;right:10px;width:unset}.window__wrapper>.handle-ml,.window__wrapper>.handle-mr{margin:0;top:10px;bottom:10px;height:unset}.window__background{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;pointer-events:none}.window__main{background:#efefef}.window__main.maximized{padding:0;border:0}.window__main.pinging .window__titlebar{animation:window__anim--ping .15s infinite}@keyframes window__anim--ping{0%,100%{opacity:1}50%{opacity:0}}.window__main.is-static,.window__main.is-wait{z-index:100}.window__titlebar-icon{width:20px;height:20px}.window__addressbar-location{overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.window__addressbar-location::-webkit-scrollbar{display:none}.window__addressbar-search{max-width:256px}.window__addressbar-search,.window__addressbar-search>input{width:100%}.window__addressbar-search::placeholder,.window__addressbar-search>input::placeholder{font-style:italic}.window__menubar.is-small .window__menubar-icon{width:16px;height:16px}.window__menubar.is-medium .window__menubar-icon{width:24px;height:24px}.window__statusbar-item{display:flex;align-items:center;gap:4px;padding:0 4px;min-width:130px;width:100%}.window__statusbar-item:only-of-type,.window__statusbar-item:not(:first-of-type){border-left:1px solid rgba(0,0,0,.1333333333)}.window__statusbar-item input{padding:0}.window__quickaccess::before,.window__quickaccess::after{content:"";position:absolute;left:0;width:1px;height:60%;background:rgba(0,0,0,.6666666667);box-shadow:0 0 0 1px rgba(255,255,255,.3333333333)}.window__quickaccess::after{left:unset;right:0}.window__quickaccess-item{border:1px solid rgba(0,0,0,0);padding:1px}.window__quickaccess-item:disabled{filter:grayscale(1);opacity:.5}.window__main{min-width:420px;position:static;transform:none}.window__body{min-height:160px}',
                w = n("2f62"),
                f = n("56c8"),
                g = {
                    name: "Window",
                    mixins: [Object(f["a"])(b)],
                    data() {
                        return {}
                    },
                    computed: { ...Object(w["d"])({
                            themeAssets: "themeAssets"
                        }),
                        toolbar() {
                            return [{
                                label: this.$t("favorites"),
                                disabled: !0
                            }, {
                                label: this.$t("bookmarks"),
                                disabled: !0
                            }]
                        },
                        internetIcon() {
                            return this.themeAssets.base.icon.internet
                        }
                    },
                    components: {
                        BaseIcon: a["a"],
                        WindowControls: d["a"],
                        WindowBody: c["a"],
                        WindowMainStatic: u["a"],
                        WindowTitlebar: m["a"],
                        WindowAddressbar: o["a"],
                        WindowAddressbarNav: s["a"],
                        WindowAddressbarSearch: l["a"],
                        WindowStatusbar: p["a"],
                        WindowMenubar: h["a"]
                    }
                },
                v = g,
                x = n("2877"),
                k = Object(x["a"])(v, i, r, !1, null, null, null);
            e["default"] = k.exports
        },
        2656: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("startmenu-base", {
                        attrs: {
                            asDecorator: ""
                        }
                    })], 1)
                },
                r = [],
                a = n("9acc"),
                o = '\ufeff.icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.winui-menu,.winui-menubar{background:#fff;margin:0;padding:0;list-style:none;cursor:default}.winui-menu.can-hover [role=menuitem]:hover>[role=menu],.winui-menubar.can-hover [role=menuitem]:hover>[role=menu]{display:block}.winui-menu [role=menuitem],.winui-menubar [role=menuitem]{position:relative}.winui-menu [role=menuitem]>input[type],.winui-menubar [role=menuitem]>input[type]{display:none}.winui-menu [role=menuitem]>input[type=radio]:checked+label::after,.winui-menubar [role=menuitem]>input[type=radio]:checked+label::after{content:"";width:var(--menu-radio);height:var(--menu-radio);position:absolute;top:calc(50% - var(--menu-radio)/2);left:calc((var(--menu-offset) - var(--menu-radio))/2);background:currentColor;border-radius:50%}.winui-menu [role=menuitem]>input[type=checkbox]:checked+label::after,.winui-menubar [role=menuitem]>input[type=checkbox]:checked+label::after{content:"✔";position:absolute;top:calc(50% - var(--menu-check)/2);left:calc((var(--menu-offset) - var(--menu-check))/2);width:var(--menu-check);height:var(--menu-check);line-height:var(--menu-check);font-size:var(--menu-check);font-weight:bold}.winui-menu [role=menuitem]>a:not(:disabled):hover,.winui-menu [role=menuitem]>a:not(:disabled):focus-visible,.winui-menu [role=menuitem]>button:not(:disabled):hover,.winui-menu [role=menuitem]>button:not(:disabled):focus-visible,.winui-menu [role=menuitem]>label:not(:disabled):hover,.winui-menu [role=menuitem]>label:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>a:not(:disabled):hover,.winui-menubar [role=menuitem]>a:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>button:not(:disabled):hover,.winui-menubar [role=menuitem]>button:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>label:not(:disabled):hover,.winui-menubar [role=menuitem]>label:not(:disabled):focus-visible{background:rgba(0,0,0,.0666666667)}.winui-menu [role=menuitem]:focus>[role=menu],.winui-menu [role=menuitem]:focus-within>[role=menu],.winui-menubar [role=menuitem]:focus>[role=menu],.winui-menubar [role=menuitem]:focus-within>[role=menu]{display:block}.winui-menu [role=menuitem][aria-disabled],.winui-menubar [role=menuitem][aria-disabled]{filter:grayscale(100%);opacity:.5;pointer-events:none}.winui-menu [role=menuitem].has-divider::after,.winui-menubar [role=menuitem].has-divider::after{content:"";display:block;margin:4px 0;height:1px;background:#ddd}.winui-menubar{display:flex}.winui-menubar>[role=menuitem]{display:flex;align-items:center}.winui-menubar>[role=menuitem] button{width:100%;height:100%;display:flex;align-items:center;padding:4px 8px}.winui-menubar>[role=menuitem] .icon{width:16px;height:16px;margin-right:4px}.winui-menu{transition:opacity calc(0.2s * var(--effect-fade-menus));box-shadow:0 1px 20px rgba(0,0,0,.2);position:absolute;min-width:180px;opacity:1;padding:var(--menu-padding)}.winui-menu.inactive{opacity:0;visibility:hidden}[role=menuitem] .winui-menu{display:none;position:absolute;left:0;top:100%;z-index:99}.winui-menu [role=menuitem]>[role=menu]{top:0;left:100%}.winui-menu>[role=menuitem] img,.winui-menu>[role=menuitem] .icon{width:16px;height:16px;position:absolute;top:50%;left:calc((var(--menu-offset) - 16px)/2);margin:0;pointer-events:none;transform:translateY(-50%);z-index:1}.winui-menu>[role=menuitem]>a,.winui-menu>[role=menuitem]>button,.winui-menu>[role=menuitem]>label{position:relative;display:flex;justify-content:space-between;width:100%;padding:4px 8px 4px var(--menu-offset);line-height:1.25rem;white-space:nowrap}.winui-menu>[role=menuitem] button>span:last-child:not([class]){margin-left:32px}.winui-menu>[role=menuitem][aria-haspopup]::after{content:"";position:absolute;top:50%;right:2px;transform:translateY(-50%);border:4px solid rgba(0,0,0,0);border-left-color:currentColor}.winui-menu hr{background:rgba(0,0,0,.1333333333);height:1px;margin:4px 0}.winui-searchbox>input,input.winui-searchbox{background-color:#fff;border:1px solid rgba(0,0,0,.2);line-height:1;padding:4px 6px}.winui-searchbox>input::placeholder,input.winui-searchbox::placeholder{color:currentColor;opacity:.6}.winui-searchbox>input:focus,input.winui-searchbox:focus{border-color:rgba(0,0,0,.6)}input.winui-searchbox:placeholder-shown{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:var(--search-icon) calc(100% - 8px) center no-repeat;background-size:14px}input.winui-searchbox:disabled{opacity:.5}.winui-searchbox{display:inline-block;position:relative}.winui-searchbox>input{padding-right:30px}.winui-searchbox>button{position:absolute;top:1px;right:1px;min-width:26px;height:calc(100% - 2px);background:var(--search-icon) no-repeat center;background-size:14px;background-color:rgba(0,0,0,.1333333333);padding:0}.winui-searchbox>button:hover,.winui-searchbox>button:focus{background-color:rgba(0,0,0,.2666666667)}.winui-searchbox>button:active{background-color:rgba(0,0,0,.4)}.startmenu__wrapper{bottom:var(--taskbar-height);box-shadow:0 -1px 20px rgba(0,0,0,.2);height:420px}.startmenu__divider{width:90%;height:1px}.startmenu__program-icon{width:16px;height:16px}.startmenu__program-item.is-recent{height:12.5%}.startmenu__program-item.is-recent .startmenu__program-icon{width:28px;height:28px}.startmenu__avatar{transform:translateX(-50%)}.startmenu__link.has-line::after{width:calc(100% - 5px);height:3px;position:absolute;bottom:-5px;content:"";box-shadow:inset 0 1px 0 rgba(0,0,0,.1333333333),inset 0 -1px 0 rgba(255,255,255,.1333333333);margin-top:2px}.startmenu__button.is-last:hover+.startmenu__menu,.startmenu__button.is-last:focus+.startmenu__menu{display:block}.startmenu__menu:hover{display:block}.startmenu__wrapper{position:static}',
                s = n("56c8"),
                l = {
                    name: "StartMenu",
                    mixins: [Object(s["a"])(o)],
                    components: {
                        StartmenuBase: a["a"]
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["default"] = u.exports
        },
        "2cfc": function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return p
                })), n.d(e, "b", (function() {
                    return $
                }));
                var i, r = n("9669");
                class a {
                    constructor(t, e, n, i, r, a, o, s, l, c = 0, d) {
                        this.p = t, this.stack = e, this.state = n, this.reducePos = i, this.pos = r, this.score = a, this.buffer = o, this.bufferBase = s, this.curContext = l, this.lookAhead = c, this.parent = d
                    }
                    toString() {
                        return `[${this.stack.filter((t,e)=>e%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
                    }
                    static start(t, e, n = 0) {
                        let i = t.parser.context;
                        return new a(t, [], e, n, n, 0, [], 0, i ? new o(i, i.start) : null, 0, null)
                    }
                    get context() {
                        return this.curContext ? this.curContext.context : null
                    }
                    pushState(t, e) {
                        this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t
                    }
                    reduce(t) {
                        let e = t >> 19,
                            n = 65535 & t,
                            {
                                parser: i
                            } = this.p,
                            r = i.dynamicPrecedence(n);
                        if (r && (this.score += r), 0 == e) return this.pushState(i.getGoto(this.state, n, !0), this.reducePos), n < i.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, 4, !0), void this.reduceContext(n, this.reducePos);
                        let a = this.stack.length - 3 * (e - 1) - (262144 & t ? 6 : 0),
                            o = this.stack[a - 2],
                            s = this.stack[a - 1],
                            l = this.bufferBase + this.buffer.length - s;
                        if (n < i.minRepeatTerm || 131072 & t) {
                            let t = i.stateFlag(this.state, 1) ? this.pos : this.reducePos;
                            this.storeNode(n, o, t, l + 4, !0)
                        }
                        if (262144 & t) this.state = this.stack[a];
                        else {
                            let t = this.stack[a - 3];
                            this.state = i.getGoto(t, n, !0)
                        }
                        while (this.stack.length > a) this.stack.pop();
                        this.reduceContext(n, o)
                    }
                    storeNode(t, e, n, i = 4, r = !1) {
                        if (0 == t && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
                            let t = this,
                                i = this.buffer.length;
                            if (0 == i && t.parent && (i = t.bufferBase - t.parent.bufferBase, t = t.parent), i > 0 && 0 == t.buffer[i - 4] && t.buffer[i - 1] > -1) {
                                if (e == n) return;
                                if (t.buffer[i - 2] >= e) return void(t.buffer[i - 2] = n)
                            }
                        }
                        if (r && this.pos != n) {
                            let r = this.buffer.length;
                            if (r > 0 && 0 != this.buffer[r - 4])
                                while (r > 0 && this.buffer[r - 2] > n) this.buffer[r] = this.buffer[r - 4], this.buffer[r + 1] = this.buffer[r - 3], this.buffer[r + 2] = this.buffer[r - 2], this.buffer[r + 3] = this.buffer[r - 1], r -= 4, i > 4 && (i -= 4);
                            this.buffer[r] = t, this.buffer[r + 1] = e, this.buffer[r + 2] = n, this.buffer[r + 3] = i
                        } else this.buffer.push(t, e, n, i)
                    }
                    shift(t, e, n) {
                        let i = this.pos;
                        if (131072 & t) this.pushState(65535 & t, this.pos);
                        else if (0 == (262144 & t)) {
                            let r = t,
                                {
                                    parser: a
                                } = this.p;
                            (n > this.pos || e <= a.maxNode) && (this.pos = n, a.stateFlag(r, 1) || (this.reducePos = n)), this.pushState(r, i), this.shiftContext(e, i), e <= a.maxNode && this.buffer.push(e, i, n, 4)
                        } else this.pos = n, this.shiftContext(e, i), e <= this.p.parser.maxNode && this.buffer.push(e, i, n, 4)
                    }
                    apply(t, e, n) {
                        65536 & t ? this.reduce(t) : this.shift(t, e, n)
                    }
                    useNode(t, e) {
                        let n = this.p.reused.length - 1;
                        (n < 0 || this.p.reused[n] != t) && (this.p.reused.push(t), n++);
                        let i = this.pos;
                        this.reducePos = this.pos = i + t.length, this.pushState(e, i), this.buffer.push(n, i, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)))
                    }
                    split() {
                        let t = this,
                            e = t.buffer.length;
                        while (e > 0 && t.buffer[e - 2] > t.reducePos) e -= 4;
                        let n = t.buffer.slice(e),
                            i = t.bufferBase + e;
                        while (t && i == t.bufferBase) t = t.parent;
                        return new a(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, n, i, this.curContext, this.lookAhead, t)
                    }
                    recoverByDelete(t, e) {
                        let n = t <= this.p.parser.maxNode;
                        n && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, n ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190
                    }
                    canShift(t) {
                        for (let e = new s(this);;) {
                            let n = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
                            if (0 == (65536 & n)) return !0;
                            if (0 == n) return !1;
                            e.reduce(n)
                        }
                    }
                    recoverByInsert(t) {
                        if (this.stack.length >= 300) return [];
                        let e = this.p.parser.nextStates(this.state);
                        if (e.length > 8 || this.stack.length >= 120) {
                            let n = [];
                            for (let i, r = 0; r < e.length; r += 2)(i = e[r + 1]) != this.state && this.p.parser.hasAction(i, t) && n.push(e[r], i);
                            if (this.stack.length < 120)
                                for (let t = 0; n.length < 8 && t < e.length; t += 2) {
                                    let i = e[t + 1];
                                    n.some((t, e) => 1 & e && t == i) || n.push(e[t], i)
                                }
                            e = n
                        }
                        let n = [];
                        for (let i = 0; i < e.length && n.length < 4; i += 2) {
                            let t = e[i + 1];
                            if (t == this.state) continue;
                            let r = this.split();
                            r.pushState(t, this.pos), r.storeNode(0, r.pos, r.pos, 4, !0), r.shiftContext(e[i], this.pos), r.score -= 200, n.push(r)
                        }
                        return n
                    }
                    forceReduce() {
                        let t = this.p.parser.stateSlot(this.state, 5);
                        if (0 == (65536 & t)) return !1;
                        let {
                            parser: e
                        } = this.p;
                        if (!e.validAction(this.state, t)) {
                            let n = t >> 19,
                                i = 65535 & t,
                                r = this.stack.length - 3 * n;
                            if (r < 0 || e.getGoto(this.stack[r], i, !1) < 0) return !1;
                            this.storeNode(0, this.reducePos, this.reducePos, 4, !0), this.score -= 100
                        }
                        return this.reducePos = this.pos, this.reduce(t), !0
                    }
                    forceAll() {
                        while (!this.p.parser.stateFlag(this.state, 2))
                            if (!this.forceReduce()) {
                                this.storeNode(0, this.pos, this.pos, 4, !0);
                                break
                            }
                        return this
                    }
                    get deadEnd() {
                        if (3 != this.stack.length) return !1;
                        let {
                            parser: t
                        } = this.p;
                        return 65535 == t.data[t.stateSlot(this.state, 1)] && !t.stateSlot(this.state, 4)
                    }
                    restart() {
                        this.state = this.stack[0], this.stack.length = 0
                    }
                    sameState(t) {
                        if (this.state != t.state || this.stack.length != t.stack.length) return !1;
                        for (let e = 0; e < this.stack.length; e += 3)
                            if (this.stack[e] != t.stack[e]) return !1;
                        return !0
                    }
                    get parser() {
                        return this.p.parser
                    }
                    dialectEnabled(t) {
                        return this.p.parser.dialect.flags[t]
                    }
                    shiftContext(t, e) {
                        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)))
                    }
                    reduceContext(t, e) {
                        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)))
                    }
                    emitContext() {
                        let t = this.buffer.length - 1;
                        (t < 0 || -3 != this.buffer[t]) && this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3)
                    }
                    emitLookAhead() {
                        let t = this.buffer.length - 1;
                        (t < 0 || -4 != this.buffer[t]) && this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4)
                    }
                    updateContext(t) {
                        if (t != this.curContext.context) {
                            let e = new o(this.curContext.tracker, t);
                            e.hash != this.curContext.hash && this.emitContext(), this.curContext = e
                        }
                    }
                    setLookAhead(t) {
                        t > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t)
                    }
                    close() {
                        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
                    }
                }
                class o {
                    constructor(t, e) {
                        this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0
                    }
                }(function(t) {
                    t[t["Insert"] = 200] = "Insert", t[t["Delete"] = 190] = "Delete", t[t["Reduce"] = 100] = "Reduce", t[t["MaxNext"] = 4] = "MaxNext", t[t["MaxInsertStackDepth"] = 300] = "MaxInsertStackDepth", t[t["DampenInsertStackDepth"] = 120] = "DampenInsertStackDepth"
                })(i || (i = {}));
                class s {
                    constructor(t) {
                        this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length
                    }
                    reduce(t) {
                        let e = 65535 & t,
                            n = t >> 19;
                        0 == n ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (n - 1);
                        let i = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
                        this.state = i
                    }
                }
                class l {
                    constructor(t, e, n) {
                        this.stack = t, this.pos = e, this.index = n, this.buffer = t.buffer, 0 == this.index && this.maybeNext()
                    }
                    static create(t, e = t.bufferBase + t.buffer.length) {
                        return new l(t, e, e - t.bufferBase)
                    }
                    maybeNext() {
                        let t = this.stack.parent;
                        null != t && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer)
                    }
                    get id() {
                        return this.buffer[this.index - 4]
                    }
                    get start() {
                        return this.buffer[this.index - 3]
                    }
                    get end() {
                        return this.buffer[this.index - 2]
                    }
                    get size() {
                        return this.buffer[this.index - 1]
                    }
                    next() {
                        this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext()
                    }
                    fork() {
                        return new l(this.stack, this.pos, this.index)
                    }
                }
                class c {
                    constructor() {
                        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
                    }
                }
                const d = new c;
                class u {
                    constructor(t, e) {
                        this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = d, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext()
                    }
                    resolveOffset(t, e) {
                        let n = this.range,
                            i = this.rangeIndex,
                            r = this.pos + t;
                        while (r < n.from) {
                            if (!i) return null;
                            let t = this.ranges[--i];
                            r -= n.from - t.to, n = t
                        }
                        while (e < 0 ? r > n.to : r >= n.to) {
                            if (i == this.ranges.length - 1) return null;
                            let t = this.ranges[++i];
                            r += t.from - n.to, n = t
                        }
                        return r
                    }
                    clipPos(t) {
                        if (t >= this.range.from && t < this.range.to) return t;
                        for (let e of this.ranges)
                            if (e.to > t) return Math.max(t, e.from);
                        return this.end
                    }
                    peek(t) {
                        let e, n, i = this.chunkOff + t;
                        if (i >= 0 && i < this.chunk.length) e = this.pos + t, n = this.chunk.charCodeAt(i);
                        else {
                            let i = this.resolveOffset(t, 1);
                            if (null == i) return -1;
                            if (e = i, e >= this.chunk2Pos && e < this.chunk2Pos + this.chunk2.length) n = this.chunk2.charCodeAt(e - this.chunk2Pos);
                            else {
                                let t = this.rangeIndex,
                                    i = this.range;
                                while (i.to <= e) i = this.ranges[++t];
                                this.chunk2 = this.input.chunk(this.chunk2Pos = e), e + this.chunk2.length > i.to && (this.chunk2 = this.chunk2.slice(0, i.to - e)), n = this.chunk2.charCodeAt(0)
                            }
                        }
                        return e >= this.token.lookAhead && (this.token.lookAhead = e + 1), n
                    }
                    acceptToken(t, e = 0) {
                        let n = e ? this.resolveOffset(e, -1) : this.pos;
                        if (null == n || n < this.token.start) throw new RangeError("Token end out of bounds");
                        this.token.value = t, this.token.end = n
                    }
                    getChunk() {
                        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
                            let {
                                chunk: t,
                                chunkPos: e
                            } = this;
                            this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos
                        } else {
                            this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
                            let t = this.input.chunk(this.pos),
                                e = this.pos + t.length;
                            this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0
                        }
                    }
                    readNext() {
                        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
                    }
                    advance(t = 1) {
                        this.chunkOff += t;
                        while (this.pos + t >= this.range.to) {
                            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
                            t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from
                        }
                        return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
                    }
                    setDone() {
                        return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1
                    }
                    reset(t, e) {
                        if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = d, this.pos != t) {
                            if (this.pos = t, t == this.end) return this.setDone(), this;
                            while (t < this.range.from) this.range = this.ranges[--this.rangeIndex];
                            while (t >= this.range.to) this.range = this.ranges[++this.rangeIndex];
                            t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
                        }
                        return this
                    }
                    read(t, e) {
                        if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length) return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
                        if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
                        if (t >= this.range.from && e <= this.range.to) return this.input.read(t, e);
                        let n = "";
                        for (let i of this.ranges) {
                            if (i.from >= e) break;
                            i.to > t && (n += this.input.read(Math.max(i.from, t), Math.min(i.to, e)))
                        }
                        return n
                    }
                }
                class h {
                    constructor(t, e) {
                        this.data = t, this.id = e
                    }
                    token(t, e) {
                        m(this.data, t, e, this.id)
                    }
                }
                h.prototype.contextual = h.prototype.fallback = h.prototype.extend = !1;
                class p {
                    constructor(t, e = {}) {
                        this.token = t, this.contextual = !!e.contextual, this.fallback = !!e.fallback, this.extend = !!e.extend
                    }
                }

                function m(t, e, n, i) {
                    let r = 0,
                        a = 1 << i,
                        {
                            parser: o
                        } = n.p,
                        {
                            dialect: s
                        } = o;
                    t: for (;;) {
                        if (0 == (a & t[r])) break;
                        let n = t[r + 1];
                        for (let d = r + 3; d < n; d += 2)
                            if ((t[d + 1] & a) > 0) {
                                let n = t[d];
                                if (s.allows(n) && (-1 == e.token.value || e.token.value == n || o.overrides(n, e.token.value))) {
                                    e.acceptToken(n);
                                    break
                                }
                            }
                        let i = e.next,
                            l = 0,
                            c = t[r + 2];
                        if (!(e.next < 0 && c > l && 65535 == t[n + 3 * c - 3] && 65535 == t[n + 3 * c - 3])) {
                            for (; l < c;) {
                                let a = l + c >> 1,
                                    o = n + a + (a << 1),
                                    s = t[o],
                                    d = t[o + 1] || 65536;
                                if (i < s) c = a;
                                else {
                                    if (!(i >= d)) {
                                        r = t[o + 2], e.advance();
                                        continue t
                                    }
                                    l = a + 1
                                }
                            }
                            break
                        }
                        r = t[n + 3 * c - 1]
                    }
                }

                function b(t, e = Uint16Array) {
                    if ("string" != typeof t) return t;
                    let n = null;
                    for (let i = 0, r = 0; i < t.length;) {
                        let a = 0;
                        for (;;) {
                            let e = t.charCodeAt(i++),
                                n = !1;
                            if (126 == e) {
                                a = 65535;
                                break
                            }
                            e >= 92 && e--, e >= 34 && e--;
                            let r = e - 32;
                            if (r >= 46 && (r -= 46, n = !0), a += r, n) break;
                            a *= 46
                        }
                        n ? n[r++] = a : n = new e(a)
                    }
                    return n
                }
                const w = "undefined" != typeof t && Object({
                    NODE_ENV: "production",
                    VUE_APP_ANALYZER_MODE: "disabled",
                    VUE_APP_DEVTOOLS: "disabled",
                    VUE_APP_PWA_MODE: "enabled",
                    BASE_URL: "/"
                }) && /\bparse\b/.test(Object({
                    NODE_ENV: "production",
                    VUE_APP_ANALYZER_MODE: "disabled",
                    VUE_APP_DEVTOOLS: "disabled",
                    VUE_APP_PWA_MODE: "enabled",
                    BASE_URL: "/"
                }).LOG);
                let f = null;
                var g, v;

                function x(t, e, n) {
                    let i = t.cursor(r["b"].IncludeAnonymous);
                    for (i.moveTo(e);;)
                        if (!(n < 0 ? i.childBefore(e) : i.childAfter(e)))
                            for (;;) {
                                if ((n < 0 ? i.to < e : i.from > e) && !i.type.isError) return n < 0 ? Math.max(0, Math.min(i.to - 1, e - 25)) : Math.min(t.length, Math.max(i.from + 1, e + 25));
                                if (n < 0 ? i.prevSibling() : i.nextSibling()) break;
                                if (!i.parent()) return n < 0 ? 0 : t.length
                            }
                }(function(t) {
                    t[t["Margin"] = 25] = "Margin"
                })(g || (g = {}));
                class k {
                    constructor(t, e) {
                        this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
                    }
                    nextFragment() {
                        let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
                        if (t) {
                            this.safeFrom = t.openStart ? x(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? x(t.tree, t.to + t.offset, -1) - t.offset : t.to;
                            while (this.trees.length) this.trees.pop(), this.start.pop(), this.index.pop();
                            this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom
                        } else this.nextStart = 1e9
                    }
                    nodeAt(t) {
                        if (t < this.nextStart) return null;
                        while (this.fragment && this.safeTo <= t) this.nextFragment();
                        if (!this.fragment) return null;
                        for (;;) {
                            let e = this.trees.length - 1;
                            if (e < 0) return this.nextFragment(), null;
                            let n = this.trees[e],
                                i = this.index[e];
                            if (i == n.children.length) {
                                this.trees.pop(), this.start.pop(), this.index.pop();
                                continue
                            }
                            let a = n.children[i],
                                o = this.start[e] + n.positions[i];
                            if (o > t) return this.nextStart = o, null;
                            if (a instanceof r["h"]) {
                                if (o == t) {
                                    if (o < this.safeFrom) return null;
                                    let t = o + a.length;
                                    if (t <= this.safeTo) {
                                        let e = a.prop(r["c"].lookAhead);
                                        if (!e || t + e < this.fragment.to) return a
                                    }
                                }
                                this.index[e]++, o + a.length >= Math.max(this.safeFrom, t) && (this.trees.push(a), this.start.push(o), this.index.push(0))
                            } else this.index[e]++, this.nextStart = o + a.length
                        }
                    }
                }
                class y {
                    constructor(t, e) {
                        this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map(t => new c)
                    }
                    getActions(t) {
                        let e = 0,
                            n = null,
                            {
                                parser: i
                            } = t.p,
                            {
                                tokenizers: r
                            } = i,
                            a = i.stateSlot(t.state, 3),
                            o = t.curContext ? t.curContext.hash : 0,
                            s = 0;
                        for (let l = 0; l < r.length; l++) {
                            if (0 == (1 << l & a)) continue;
                            let i = r[l],
                                c = this.tokens[l];
                            if ((!n || i.fallback) && ((i.contextual || c.start != t.pos || c.mask != a || c.context != o) && (this.updateCachedToken(c, i, t), c.mask = a, c.context = o), c.lookAhead > c.end + 25 && (s = Math.max(c.lookAhead, s)), 0 != c.value)) {
                                let r = e;
                                if (c.extended > -1 && (e = this.addActions(t, c.extended, c.end, e)), e = this.addActions(t, c.value, c.end, e), !i.extend && (n = c, e > r)) break
                            }
                        }
                        while (this.actions.length > e) this.actions.pop();
                        return s && t.setLookAhead(s), n || t.pos != this.stream.end || (n = new c, n.value = t.p.parser.eofTerm, n.start = n.end = t.pos, e = this.addActions(t, n.value, n.end, e)), this.mainToken = n, this.actions
                    }
                    getMainToken(t) {
                        if (this.mainToken) return this.mainToken;
                        let e = new c,
                            {
                                pos: n,
                                p: i
                            } = t;
                        return e.start = n, e.end = Math.min(n + 1, i.stream.end), e.value = n == i.stream.end ? i.parser.eofTerm : 0, e
                    }
                    updateCachedToken(t, e, n) {
                        let i = this.stream.clipPos(n.pos);
                        if (e.token(this.stream.reset(i, t), n), t.value > -1) {
                            let {
                                parser: e
                            } = n.p;
                            for (let i = 0; i < e.specialized.length; i++)
                                if (e.specialized[i] == t.value) {
                                    let r = e.specializers[i](this.stream.read(t.start, t.end), n);
                                    if (r >= 0 && n.p.parser.dialect.allows(r >> 1)) {
                                        0 == (1 & r) ? t.value = r >> 1 : t.extended = r >> 1;
                                        break
                                    }
                                }
                        } else t.value = 0, t.end = this.stream.clipPos(i + 1)
                    }
                    putAction(t, e, n, i) {
                        for (let r = 0; r < i; r += 3)
                            if (this.actions[r] == t) return i;
                        return this.actions[i++] = t, this.actions[i++] = e, this.actions[i++] = n, i
                    }
                    addActions(t, e, n, i) {
                        let {
                            state: r
                        } = t, {
                            parser: a
                        } = t.p, {
                            data: o
                        } = a;
                        for (let s = 0; s < 2; s++)
                            for (let t = a.stateSlot(r, s ? 2 : 1);; t += 3) {
                                if (65535 == o[t]) {
                                    if (1 != o[t + 1]) {
                                        0 == i && 2 == o[t + 1] && (i = this.putAction(C(o, t + 2), e, n, i));
                                        break
                                    }
                                    t = C(o, t + 2)
                                }
                                o[t] == e && (i = this.putAction(C(o, t + 1), e, n, i))
                            }
                        return i
                    }
                }(function(t) {
                    t[t["Distance"] = 5] = "Distance", t[t["MaxRemainingPerStep"] = 3] = "MaxRemainingPerStep", t[t["MinBufferLengthPrune"] = 500] = "MinBufferLengthPrune", t[t["ForceReduceLimit"] = 10] = "ForceReduceLimit", t[t["CutDepth"] = 15e3] = "CutDepth", t[t["CutTo"] = 9e3] = "CutTo"
                })(v || (v = {}));
                class O {
                    constructor(t, e, n, i) {
                        this.parser = t, this.input = e, this.ranges = i, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.stream = new u(e, i), this.tokens = new y(t, this.stream), this.topTerm = t.top[1];
                        let {
                            from: r
                        } = i[0];
                        this.stacks = [a.start(this, t.top[0], r)], this.fragments = n.length && this.stream.end - r > 4 * t.bufferLength ? new k(n, t.nodeSet) : null
                    }
                    get parsedPos() {
                        return this.minStackPos
                    }
                    advance() {
                        let t, e, n = this.stacks,
                            i = this.minStackPos,
                            r = this.stacks = [];
                        for (let a = 0; a < n.length; a++) {
                            let o = n[a];
                            for (;;) {
                                if (this.tokens.mainToken = null, o.pos > i) r.push(o);
                                else {
                                    if (this.advanceStack(o, r, n)) continue; {
                                        t || (t = [], e = []), t.push(o);
                                        let n = this.tokens.getMainToken(o);
                                        e.push(n.value, n.end)
                                    }
                                }
                                break
                            }
                        }
                        if (!r.length) {
                            let e = t && P(t);
                            if (e) return this.stackToTree(e);
                            if (this.parser.strict) throw w && t && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + i);
                            this.recovering || (this.recovering = 5)
                        }
                        if (this.recovering && t) {
                            let n = null != this.stoppedAt && t[0].pos > this.stoppedAt ? t[0] : this.runRecovery(t, e, r);
                            if (n) return this.stackToTree(n.forceAll())
                        }
                        if (this.recovering) {
                            let t = 1 == this.recovering ? 1 : 3 * this.recovering;
                            if (r.length > t) {
                                r.sort((t, e) => e.score - t.score);
                                while (r.length > t) r.pop()
                            }
                            r.some(t => t.reducePos > i) && this.recovering--
                        } else if (r.length > 1) t: for (let a = 0; a < r.length - 1; a++) {
                            let t = r[a];
                            for (let e = a + 1; e < r.length; e++) {
                                let n = r[e];
                                if (t.sameState(n) || t.buffer.length > 500 && n.buffer.length > 500) {
                                    if (!((t.score - n.score || t.buffer.length - n.buffer.length) > 0)) {
                                        r.splice(a--, 1);
                                        continue t
                                    }
                                    r.splice(e--, 1)
                                }
                            }
                        }
                        this.minStackPos = r[0].pos;
                        for (let a = 1; a < r.length; a++) r[a].pos < this.minStackPos && (this.minStackPos = r[a].pos);
                        return null
                    }
                    stopAt(t) {
                        if (null != this.stoppedAt && this.stoppedAt < t) throw new RangeError("Can't move stoppedAt forward");
                        this.stoppedAt = t
                    }
                    advanceStack(t, e, n) {
                        let i = t.pos,
                            {
                                parser: a
                            } = this,
                            o = w ? this.stackID(t) + " -> " : "";
                        if (null != this.stoppedAt && i > this.stoppedAt) return t.forceReduce() ? t : null;
                        if (this.fragments) {
                            let e = t.curContext && t.curContext.tracker.strict,
                                n = e ? t.curContext.hash : 0;
                            for (let s = this.fragments.nodeAt(i); s;) {
                                let i = this.parser.nodeSet.types[s.type.id] == s.type ? a.getGoto(t.state, s.type.id) : -1;
                                if (i > -1 && s.length && (!e || (s.prop(r["c"].contextHash) || 0) == n)) return t.useNode(s, i), w && console.log(o + this.stackID(t) + ` (via reuse of ${a.getName(s.type.id)})`), !0;
                                if (!(s instanceof r["h"]) || 0 == s.children.length || s.positions[0] > 0) break;
                                let l = s.children[0];
                                if (!(l instanceof r["h"] && 0 == s.positions[0])) break;
                                s = l
                            }
                        }
                        let s = a.stateSlot(t.state, 4);
                        if (s > 0) return t.reduce(s), w && console.log(o + this.stackID(t) + ` (via always-reduce ${a.getName(65535&s)})`), !0;
                        if (t.stack.length >= 15e3)
                            while (t.stack.length > 9e3 && t.forceReduce());
                        let l = this.tokens.getActions(t);
                        for (let r = 0; r < l.length;) {
                            let s = l[r++],
                                c = l[r++],
                                d = l[r++],
                                u = r == l.length || !n,
                                h = u ? t : t.split();
                            if (h.apply(s, c, d), w && console.log(o + this.stackID(h) + ` (via ${0==(65536&s)?"shift":"reduce of "+a.getName(65535&s)} for ${a.getName(c)} @ ${i}${h==t?"":", split"})`), u) return !0;
                            h.pos > i ? e.push(h) : n.push(h)
                        }
                        return !1
                    }
                    advanceFully(t, e) {
                        let n = t.pos;
                        for (;;) {
                            if (!this.advanceStack(t, null, null)) return !1;
                            if (t.pos > n) return _(t, e), !0
                        }
                    }
                    runRecovery(t, e, n) {
                        let i = null,
                            r = !1;
                        for (let a = 0; a < t.length; a++) {
                            let o = t[a],
                                s = e[a << 1],
                                l = e[1 + (a << 1)],
                                c = w ? this.stackID(o) + " -> " : "";
                            if (o.deadEnd) {
                                if (r) continue;
                                r = !0, o.restart(), w && console.log(c + this.stackID(o) + " (restarted)");
                                let t = this.advanceFully(o, n);
                                if (t) continue
                            }
                            let d = o.split(),
                                u = c;
                            for (let t = 0; d.forceReduce() && t < 10; t++) {
                                w && console.log(u + this.stackID(d) + " (via force-reduce)");
                                let t = this.advanceFully(d, n);
                                if (t) break;
                                w && (u = this.stackID(d) + " -> ")
                            }
                            for (let t of o.recoverByInsert(s)) w && console.log(c + this.stackID(t) + " (via recover-insert)"), this.advanceFully(t, n);
                            this.stream.end > o.pos ? (l == o.pos && (l++, s = 0), o.recoverByDelete(s, l), w && console.log(c + this.stackID(o) + ` (via recover-delete ${this.parser.getName(s)})`), _(o, n)) : (!i || i.score < o.score) && (i = o)
                        }
                        return i
                    }
                    stackToTree(t) {
                        return t.close(), r["h"].build({
                            buffer: l.create(t),
                            nodeSet: this.parser.nodeSet,
                            topID: this.topTerm,
                            maxBufferLength: this.parser.bufferLength,
                            reused: this.reused,
                            start: this.ranges[0].from,
                            length: t.pos - this.ranges[0].from,
                            minRepeatType: this.parser.minRepeatTerm
                        })
                    }
                    stackID(t) {
                        let e = (f || (f = new WeakMap)).get(t);
                        return e || f.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t
                    }
                }

                function _(t, e) {
                    for (let n = 0; n < e.length; n++) {
                        let i = e[n];
                        if (i.pos == t.pos && i.sameState(t)) return void(e[n].score < t.score && (e[n] = t))
                    }
                    e.push(t)
                }
                class S {
                    constructor(t, e, n) {
                        this.source = t, this.flags = e, this.disabled = n
                    }
                    allows(t) {
                        return !this.disabled || 0 == this.disabled[t]
                    }
                }
                class $ extends r["g"] {
                    constructor(t) {
                        if (super(), this.wrappers = [], 14 != t.version) throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);
                        let e = t.nodeNames.split(" ");
                        this.minRepeatTerm = e.length;
                        for (let r = 0; r < t.repeatNodeCount; r++) e.push("");
                        let n = Object.keys(t.topRules).map(e => t.topRules[e][1]),
                            i = [];
                        for (let r = 0; r < e.length; r++) i.push([]);

                        function a(t, e, n) {
                            i[t].push([e, e.deserialize(String(n))])
                        }
                        if (t.nodeProps)
                            for (let s of t.nodeProps) {
                                let t = s[0];
                                "string" == typeof t && (t = r["c"][t]);
                                for (let e = 1; e < s.length;) {
                                    let n = s[e++];
                                    if (n >= 0) a(n, t, s[e++]);
                                    else {
                                        let i = s[e + -n];
                                        for (let r = -n; r > 0; r--) a(s[e++], t, i);
                                        e++
                                    }
                                }
                            }
                        this.nodeSet = new r["d"](e.map((e, a) => r["e"].define({
                            name: a >= this.minRepeatTerm ? void 0 : e,
                            id: a,
                            props: i[a],
                            top: n.indexOf(a) > -1,
                            error: 0 == a,
                            skipped: t.skippedNodes && t.skippedNodes.indexOf(a) > -1
                        }))), t.propSources && (this.nodeSet = this.nodeSet.extend(...t.propSources)), this.strict = !1, this.bufferLength = r["a"];
                        let o = b(t.tokenData);
                        this.context = t.context, this.specializerSpecs = t.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
                        for (let r = 0; r < this.specializerSpecs.length; r++) this.specialized[r] = this.specializerSpecs[r].term;
                        this.specializers = this.specializerSpecs.map(E), this.states = b(t.states, Uint32Array), this.data = b(t.stateData), this.goto = b(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map(t => "number" == typeof t ? new h(o, t) : t), this.topRules = t.topRules, this.dialects = t.dialects || {}, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
                    }
                    createParse(t, e, n) {
                        let i = new O(this, t, e, n);
                        for (let r of this.wrappers) i = r(i, t, e, n);
                        return i
                    }
                    getGoto(t, e, n = !1) {
                        let i = this.goto;
                        if (e >= i[0]) return -1;
                        for (let r = i[e + 1];;) {
                            let e = i[r++],
                                a = 1 & e,
                                o = i[r++];
                            if (a && n) return o;
                            for (let n = r + (e >> 1); r < n; r++)
                                if (i[r] == t) return o;
                            if (a) return -1
                        }
                    }
                    hasAction(t, e) {
                        let n = this.data;
                        for (let i = 0; i < 2; i++)
                            for (let r, a = this.stateSlot(t, i ? 2 : 1);; a += 3) {
                                if (65535 == (r = n[a])) {
                                    if (1 != n[a + 1]) {
                                        if (2 == n[a + 1]) return C(n, a + 2);
                                        break
                                    }
                                    r = n[a = C(n, a + 2)]
                                }
                                if (r == e || 0 == r) return C(n, a + 1)
                            }
                        return 0
                    }
                    stateSlot(t, e) {
                        return this.states[6 * t + e]
                    }
                    stateFlag(t, e) {
                        return (this.stateSlot(t, 0) & e) > 0
                    }
                    validAction(t, e) {
                        if (e == this.stateSlot(t, 4)) return !0;
                        for (let n = this.stateSlot(t, 1);; n += 3) {
                            if (65535 == this.data[n]) {
                                if (1 != this.data[n + 1]) return !1;
                                n = C(this.data, n + 2)
                            }
                            if (e == C(this.data, n + 1)) return !0
                        }
                    }
                    nextStates(t) {
                        let e = [];
                        for (let n = this.stateSlot(t, 1);; n += 3) {
                            if (65535 == this.data[n]) {
                                if (1 != this.data[n + 1]) break;
                                n = C(this.data, n + 2)
                            }
                            if (0 == (1 & this.data[n + 2])) {
                                let t = this.data[n + 1];
                                e.some((e, n) => 1 & n && e == t) || e.push(this.data[n], t)
                            }
                        }
                        return e
                    }
                    overrides(t, e) {
                        let n = Q(this.data, this.tokenPrecTable, e);
                        return n < 0 || Q(this.data, this.tokenPrecTable, t) < n
                    }
                    configure(t) {
                        let e = Object.assign(Object.create($.prototype), this);
                        if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
                            let n = this.topRules[t.top];
                            if (!n) throw new RangeError("Invalid top rule name " + t.top);
                            e.top = n
                        }
                        return t.tokenizers && (e.tokenizers = this.tokenizers.map(e => {
                            let n = t.tokenizers.find(t => t.from == e);
                            return n ? n.to : e
                        })), t.specializers && (e.specializers = this.specializers.slice(), e.specializerSpecs = this.specializerSpecs.map((n, i) => {
                            let r = t.specializers.find(t => t.from == n.external);
                            if (!r) return n;
                            let a = Object.assign(Object.assign({}, n), {
                                external: r.to
                            });
                            return e.specializers[i] = E(a), a
                        })), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), null != t.strict && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), null != t.bufferLength && (e.bufferLength = t.bufferLength), e
                    }
                    hasWrappers() {
                        return this.wrappers.length > 0
                    }
                    getName(t) {
                        return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t)
                    }
                    get eofTerm() {
                        return this.maxNode + 1
                    }
                    get topNode() {
                        return this.nodeSet.types[this.top[1]]
                    }
                    dynamicPrecedence(t) {
                        let e = this.dynamicPrecedences;
                        return null == e ? 0 : e[t] || 0
                    }
                    parseDialect(t) {
                        let e = Object.keys(this.dialects),
                            n = e.map(() => !1);
                        if (t)
                            for (let r of t.split(" ")) {
                                let t = e.indexOf(r);
                                t >= 0 && (n[t] = !0)
                            }
                        let i = null;
                        for (let r = 0; r < e.length; r++)
                            if (!n[r])
                                for (let t, n = this.dialects[e[r]]; 65535 != (t = this.data[n++]);)(i || (i = new Uint8Array(this.maxTerm + 1)))[t] = 1;
                        return new S(t, n, i)
                    }
                    static deserialize(t) {
                        return new $(t)
                    }
                }

                function C(t, e) {
                    return t[e] | t[e + 1] << 16
                }

                function Q(t, e, n) {
                    for (let i, r = e; 65535 != (i = t[r]); r++)
                        if (i == n) return r - e;
                    return -1
                }

                function P(t) {
                    let e = null;
                    for (let n of t) {
                        let t = n.p.stoppedAt;
                        (n.pos == n.p.stream.end || null != t && n.pos > t) && n.p.parser.stateFlag(n.state, 2) && (!e || e.score < n.score) && (e = n)
                    }
                    return e
                }

                function E(t) {
                    if (t.external) {
                        let e = t.extend ? 1 : 0;
                        return (n, i) => t.external(n, i) << 1 | e
                    }
                    return t.get
                }
            }).call(this, n("4362"))
        },
        3241: function(t, e, n) {},
        3780: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("base-message", {
                        attrs: {
                            type: "error"
                        },
                        on: {
                            close: t.close
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
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
                r = [],
                a = n("bbbd"),
                o = n("fceb"),
                s = {
                    mounted() {
                        this[a["b"].ProgramEvent](a["c"].Windows.Asterisk)
                    },
                    methods: { ...a["e"].mapActions([a["b"].ProgramEvent]),
                        close() {
                            this.$emit("close")
                        }
                    },
                    components: {
                        BaseMessage: o["a"]
                    }
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["a"] = d.exports
        },
        "39b3": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "a", (function() {
                return s
            }));
            var i = n("2f62");
            const r = {
                    OpenContextMenu: "openContextMenu"
                },
                a = "scrollbar",
                o = Object(i["a"])(a),
                s = r;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        contextMenu: void 0
                    }
                },
                getters: {},
                mutations: {
                    [r.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    }
                },
                actions: {}
            }
        },
        "3a41": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = "input.winui-searchbox,\n.winui-searchbox > input {\n}\n\n.winui-searchbox > button {\n}\n"
        },
        "411e": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
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
                    }, ["wait" === t.variant ? n("window-body", {
                        staticClass: "is-wait"
                    }, [t._t("default")], 2) : t._t("default")], 2)
                },
                r = [],
                a = n("1521"),
                o = n("7744"),
                s = {
                    mixins: [o["a"]],
                    props: {
                        variant: {
                            type: String,
                            validator: t => ["wait", "help", "message"].includes(t)
                        },
                        parent: String,
                        decentered: Boolean
                    },
                    components: {
                        WindowBody: a["a"]
                    }
                },
                l = s,
                c = (n("9312"), n("2877")),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["a"] = d.exports
        },
        "47e9": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("base-message", {
                        attrs: {
                            parent: t.parent,
                            noPreTag: "",
                            "data-test-popup": "watch-ad"
                        },
                        on: {
                            close: t.cancel
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
                                    staticClass: "default",
                                    attrs: {
                                        "data-test-action": "remove-ads"
                                    },
                                    on: {
                                        click: t.showPricing
                                    }
                                }, [t._v(" " + t._s(t.$t("remove-ads")) + " ")]), n("winui-button", {
                                    attrs: {
                                        "data-test-action": "watch-ads"
                                    },
                                    on: {
                                        click: t.watchAd
                                    }
                                }, [t._v(" " + t._s(t.$t("watch-ad")) + " ")]), n("winui-button", {
                                    attrs: {
                                        "data-test-action": "cancel"
                                    },
                                    on: {
                                        click: t.cancel
                                    }
                                }, [t._v(" " + t._s(t.$t("cancel")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [n("text-instruction", [t._v(" " + t._s(t.$t("confirm-watch-ad")) + " ")])], 1)
                },
                r = [],
                a = n("fceb"),
                o = n("6792"),
                s = n("b69c"),
                l = n("51e6"),
                c = n("f708"),
                d = n("2f62"),
                u = n("ce02"),
                h = {
                    props: {
                        parent: String
                    },
                    computed: Object(d["f"])(["showAds"]),
                    watch: {
                        showAds: {
                            immediate: !0,
                            handler() {
                                this.showAds && Object(l["isOnline"])() && !Object(c["d"])() || this.close()
                            }
                        }
                    },
                    methods: {
                        watchAd() {
                            Object(u["a"])(), this.close()
                        },
                        showPricing() {
                            this.$bus.$emit("showPricing", !0)
                        },
                        cancel() {
                            this.parent && this.$root.$emit(o["c"].CloseWindow, this.parent), this.$emit("cancel")
                        },
                        close() {
                            this.$emit("close")
                        }
                    },
                    components: {
                        BaseMessage: a["a"],
                        TextInstruction: s["a"]
                    }
                },
                p = h,
                m = n("2877"),
                b = Object(m["a"])(p, i, r, !1, null, null, null);
            e["a"] = b.exports
        },
        "487d": function(t, e, n) {
            "use strict";
            n("661d")
        },
        "487f": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".startmenu__wrapper {\n}\n\n.startmenu__left {\n}\n\n.startmenu__right {\n}\n\n.startmenu__program-list {\n}\n\n.startmenu__program-item {\n}\n\n.startmenu____link {\n}\n\n.startmenu__all {\n}\n\n.startmenu__divider {\n}\n\n.startmenu__groupbutton {\n}\n\n.startmenu__button {\n}\n\n.startmenu__menu {\n}\n"
        },
        "53f8": function(t, e, n) {},
        5495: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    })], 1)
                },
                r = [],
                a = n("3cb5"),
                o = '\ufeff.winui-menu,.winui-menubar{background:#fff;margin:0;padding:0;list-style:none;cursor:default}.winui-menu.can-hover [role=menuitem]:hover>[role=menu],.winui-menubar.can-hover [role=menuitem]:hover>[role=menu]{display:block}.winui-menu [role=menuitem],.winui-menubar [role=menuitem]{position:relative}.winui-menu [role=menuitem]>input[type],.winui-menubar [role=menuitem]>input[type]{display:none}.winui-menu [role=menuitem]>input[type=radio]:checked+label::after,.winui-menubar [role=menuitem]>input[type=radio]:checked+label::after{content:"";width:var(--menu-radio);height:var(--menu-radio);position:absolute;top:calc(50% - var(--menu-radio)/2);left:calc((var(--menu-offset) - var(--menu-radio))/2);background:currentColor;border-radius:50%}.winui-menu [role=menuitem]>input[type=checkbox]:checked+label::after,.winui-menubar [role=menuitem]>input[type=checkbox]:checked+label::after{content:"✔";position:absolute;top:calc(50% - var(--menu-check)/2);left:calc((var(--menu-offset) - var(--menu-check))/2);width:var(--menu-check);height:var(--menu-check);line-height:var(--menu-check);font-size:var(--menu-check);font-weight:bold}.winui-menu [role=menuitem]>a:not(:disabled):hover,.winui-menu [role=menuitem]>a:not(:disabled):focus-visible,.winui-menu [role=menuitem]>button:not(:disabled):hover,.winui-menu [role=menuitem]>button:not(:disabled):focus-visible,.winui-menu [role=menuitem]>label:not(:disabled):hover,.winui-menu [role=menuitem]>label:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>a:not(:disabled):hover,.winui-menubar [role=menuitem]>a:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>button:not(:disabled):hover,.winui-menubar [role=menuitem]>button:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>label:not(:disabled):hover,.winui-menubar [role=menuitem]>label:not(:disabled):focus-visible{background:rgba(0,0,0,.0666666667)}.winui-menu [role=menuitem]:focus>[role=menu],.winui-menu [role=menuitem]:focus-within>[role=menu],.winui-menubar [role=menuitem]:focus>[role=menu],.winui-menubar [role=menuitem]:focus-within>[role=menu]{display:block}.winui-menu [role=menuitem][aria-disabled],.winui-menubar [role=menuitem][aria-disabled]{filter:grayscale(100%);opacity:.5;pointer-events:none}.winui-menu [role=menuitem].has-divider::after,.winui-menubar [role=menuitem].has-divider::after{content:"";display:block;margin:4px 0;height:1px;background:#ddd}.winui-menubar{display:flex}.winui-menubar>[role=menuitem]{display:flex;align-items:center}.winui-menubar>[role=menuitem] button{width:100%;height:100%;display:flex;align-items:center;padding:4px 8px}.winui-menubar>[role=menuitem] .icon{width:16px;height:16px;margin-right:4px}.winui-menu{transition:opacity calc(0.2s * var(--effect-fade-menus));box-shadow:0 1px 20px rgba(0,0,0,.2);position:absolute;min-width:180px;opacity:1;padding:var(--menu-padding)}.winui-menu.inactive{opacity:0;visibility:hidden}[role=menuitem] .winui-menu{display:none;position:absolute;left:0;top:100%;z-index:99}.winui-menu [role=menuitem]>[role=menu]{top:0;left:100%}.winui-menu>[role=menuitem] img,.winui-menu>[role=menuitem] .icon{width:16px;height:16px;position:absolute;top:50%;left:calc((var(--menu-offset) - 16px)/2);margin:0;pointer-events:none;transform:translateY(-50%);z-index:1}.winui-menu>[role=menuitem]>a,.winui-menu>[role=menuitem]>button,.winui-menu>[role=menuitem]>label{position:relative;display:flex;justify-content:space-between;width:100%;padding:4px 8px 4px var(--menu-offset);line-height:1.25rem;white-space:nowrap}.winui-menu>[role=menuitem] button>span:last-child:not([class]){margin-left:32px}.winui-menu>[role=menuitem][aria-haspopup]::after{content:"";position:absolute;top:50%;right:2px;transform:translateY(-50%);border:4px solid rgba(0,0,0,0);border-left-color:currentColor}.winui-menu hr{background:rgba(0,0,0,.1333333333);height:1px;margin:4px 0}.winui-menubar{margin-top:-15%;width:400px}',
                s = n("56c8"),
                l = {
                    name: "MenuBar",
                    mixins: [Object(s["a"])(o)],
                    computed: {
                        toolbar() {
                            return [{
                                label: this.$t("file"),
                                items: [{
                                    shortcut: "Alt+N",
                                    label: this.$t("new")
                                }, {
                                    shortcut: "Alt+O",
                                    label: this.$t("open")
                                }, {
                                    shortcut: "Alt+S",
                                    label: this.$t("save")
                                }, {
                                    shortcut: "Alt+Shift+S",
                                    label: this.$t("save-as"),
                                    hasDivider: !0
                                }, {
                                    shortcut: "Alt+4",
                                    label: this.$t("exit")
                                }]
                            }, {
                                label: this.$t("edit"),
                                items: [{
                                    label: this.$t("select-all")
                                }, {
                                    label: this.$t("time") + "/" + this.$t("date")
                                }]
                            }, {
                                label: this.$t("format"),
                                disabled: !0
                            }, {
                                label: this.$t("view")
                            }, {
                                label: this.$t("help")
                            }]
                        }
                    },
                    components: {
                        WindowMenubar: a["a"]
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["default"] = u.exports
        },
        "55ab": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", {
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
                r = [],
                a = {
                    props: {
                        disabled: Boolean,
                        active: Boolean
                    }
                },
                o = a,
                s = n("2877"),
                l = Object(s["a"])(o, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        "56c8": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("shadow-root", {
                        staticClass: "m-auto px-8 pb-8 themestudio__preview"
                    }, [t._t("default")], 2)
                },
                r = [],
                a = n("eb17"),
                o = '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\nhtml,\n  body,\n  p,\n  ol,\n  ul,\n  li,\n  dl,\n  dt,\n  dd,\n  blockquote,\n  figure,\n  fieldset,\n  legend,\n  textarea,\n  pre,\n  iframe,\n  label,\n  hr,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\n  input,\n  optgroup,\n  select,\n  textarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  outline: none;\n}\n\nbutton,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n  background-color: transparent;\n  background-image: none;\n  color: inherit;\n}\n\n*,\n  *::before,\n  *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-width: 0;\n}\n\n* {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nimg,\n  video {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\n  th {\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  overflow: hidden;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.pointer-events-auto {\n  pointer-events: auto;\n}\n\n.\\!visible {\n  visibility: visible !important;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.collapse {\n  visibility: collapse;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.sticky {\n  position: sticky;\n}\n\n.-left-14 {\n  left: -3.5rem;\n}\n\n.-left-8 {\n  left: -2rem;\n}\n\n.-left-\\[10\\%\\] {\n  left: -10%;\n}\n\n.-right-4 {\n  right: -1rem;\n}\n\n.-top-16 {\n  top: -4rem;\n}\n\n.-top-4 {\n  top: -1rem;\n}\n\n.-top-6 {\n  top: -1.5rem;\n}\n\n.bottom-0 {\n  bottom: 0px;\n}\n\n.bottom-1 {\n  bottom: 0.25rem;\n}\n\n.bottom-1\\.5 {\n  bottom: 0.375rem;\n}\n\n.bottom-10 {\n  bottom: 2.5rem;\n}\n\n.bottom-11 {\n  bottom: 2.75rem;\n}\n\n.bottom-12 {\n  bottom: 3rem;\n}\n\n.bottom-2 {\n  bottom: 0.5rem;\n}\n\n.bottom-3 {\n  bottom: 0.75rem;\n}\n\n.bottom-5 {\n  bottom: 1.25rem;\n}\n\n.bottom-6 {\n  bottom: 1.5rem;\n}\n\n.bottom-8 {\n  bottom: 2rem;\n}\n\n.bottom-full {\n  bottom: 100%;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.left-0\\.5 {\n  left: 0.125rem;\n}\n\n.left-1 {\n  left: 0.25rem;\n}\n\n.left-1\\/2 {\n  left: 50%;\n}\n\n.left-1\\/3 {\n  left: 33.333333%;\n}\n\n.left-2 {\n  left: 0.5rem;\n}\n\n.left-32 {\n  left: 8rem;\n}\n\n.left-5 {\n  left: 1.25rem;\n}\n\n.left-\\[10\\%\\] {\n  left: 10%;\n}\n\n.left-full {\n  left: 100%;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-1 {\n  right: 0.25rem;\n}\n\n.right-16 {\n  right: 4rem;\n}\n\n.right-2 {\n  right: 0.5rem;\n}\n\n.right-3 {\n  right: 0.75rem;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.right-8 {\n  right: 2rem;\n}\n\n.right-full {\n  right: 100%;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-1\\/3 {\n  top: 33.333333%;\n}\n\n.top-1\\/4 {\n  top: 25%;\n}\n\n.top-2 {\n  top: 0.5rem;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.top-\\[10\\%\\] {\n  top: 10%;\n}\n\n.top-\\[15\\%\\] {\n  top: 15%;\n}\n\n.top-\\[30\\%\\] {\n  top: 30%;\n}\n\n.top-\\[60\\%\\] {\n  top: 60%;\n}\n\n.top-full {\n  top: 100%;\n}\n\n.top-px {\n  top: 1px;\n}\n\n.-z-1 {\n  z-index: -1;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n\n.m-0 {\n  margin: 0px;\n}\n\n.m-1 {\n  margin: 0.25rem;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.m-px {\n  margin: 1px;\n}\n\n.-my-\\[7px\\] {\n  margin-top: -7px;\n  margin-bottom: -7px;\n}\n\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.my-1\\.5 {\n  margin-top: 0.375rem;\n  margin-bottom: 0.375rem;\n}\n\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.-ml-0\\.5 {\n  margin-left: -0.125rem;\n}\n\n.-ml-2 {\n  margin-left: -0.5rem;\n}\n\n.-ml-px {\n  margin-left: -1px;\n}\n\n.-mt-5 {\n  margin-top: -1.25rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.mb-1\\.5 {\n  margin-bottom: 0.375rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.mb-12 {\n  margin-bottom: 3rem;\n}\n\n.mb-16 {\n  margin-bottom: 4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.mb-9 {\n  margin-bottom: 2.25rem;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-0\\.5 {\n  margin-left: 0.125rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem;\n}\n\n.ml-2 {\n  margin-left: 0.5rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.ml-5 {\n  margin-left: 1.25rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.ml-7 {\n  margin-left: 1.75rem;\n}\n\n.ml-8 {\n  margin-left: 2rem;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mr-5 {\n  margin-right: 1.25rem;\n}\n\n.mr-6 {\n  margin-right: 1.5rem;\n}\n\n.mr-7 {\n  margin-right: 1.75rem;\n}\n\n.mr-8 {\n  margin-right: 2rem;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-48 {\n  margin-top: 12rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.box-border {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.inline {\n  display: inline;\n}\n\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n\n.aspect-video {\n  aspect-ratio: 16 / 9;\n}\n\n.h-0\\.5 {\n  height: 0.125rem;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-1\\/2 {\n  height: 50%;\n}\n\n.h-1\\/3 {\n  height: 33.333333%;\n}\n\n.h-1\\/4 {\n  height: 25%;\n}\n\n.h-1\\/5 {\n  height: 20%;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-11 {\n  height: 2.75rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-2 {\n  height: 0.5rem;\n}\n\n.h-2\\/6 {\n  height: 33.333333%;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-24 {\n  height: 6rem;\n}\n\n.h-28 {\n  height: 7rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-3\\/4 {\n  height: 75%;\n}\n\n.h-3\\/5 {\n  height: 60%;\n}\n\n.h-32 {\n  height: 8rem;\n}\n\n.h-36 {\n  height: 9rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-4\\/5 {\n  height: 80%;\n}\n\n.h-44 {\n  height: 11rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-5\\/6 {\n  height: 83.333333%;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-64 {\n  height: 16rem;\n}\n\n.h-7 {\n  height: 1.75rem;\n}\n\n.h-72 {\n  height: 18rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-9 {\n  height: 2.25rem;\n}\n\n.h-\\[117px\\] {\n  height: 117px;\n}\n\n.h-\\[128px\\] {\n  height: 128px;\n}\n\n.h-\\[150px\\] {\n  height: 150px;\n}\n\n.h-\\[16px\\] {\n  height: 16px;\n}\n\n.h-\\[17px\\] {\n  height: 17px;\n}\n\n.h-\\[1px\\] {\n  height: 1px;\n}\n\n.h-\\[20\\%\\] {\n  height: 20%;\n}\n\n.h-\\[20px\\] {\n  height: 20px;\n}\n\n.h-\\[22px\\] {\n  height: 22px;\n}\n\n.h-\\[24px\\] {\n  height: 24px;\n}\n\n.h-\\[296px\\] {\n  height: 296px;\n}\n\n.h-\\[2px\\] {\n  height: 2px;\n}\n\n.h-\\[32px\\] {\n  height: 32px;\n}\n\n.h-\\[35\\%\\] {\n  height: 35%;\n}\n\n.h-\\[3px\\] {\n  height: 3px;\n}\n\n.h-\\[48px\\] {\n  height: 48px;\n}\n\n.h-\\[48vh\\] {\n  height: 48vh;\n}\n\n.h-\\[4px\\] {\n  height: 4px;\n}\n\n.h-\\[64px\\] {\n  height: 64px;\n}\n\n.h-\\[72px\\] {\n  height: 72px;\n}\n\n.h-\\[96px\\] {\n  height: 96px;\n}\n\n.h-\\[calc\\(100\\%-1rem\\)\\] {\n  height: calc(100% - 1rem);\n}\n\n.h-auto {\n  height: auto;\n}\n\n.h-fit {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-px {\n  height: 1px;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.max-h-128 {\n  max-height: 32rem;\n}\n\n.max-h-72 {\n  max-height: 18rem;\n}\n\n.max-h-\\[340px\\] {\n  max-height: 340px;\n}\n\n.max-h-full {\n  max-height: 100%;\n}\n\n.max-h-none {\n  max-height: none;\n}\n\n.max-h-screen {\n  max-height: 100vh;\n}\n\n.min-h-0 {\n  min-height: 0px;\n}\n\n.min-h-\\[3\\.25rem\\] {\n  min-height: 3.25rem;\n}\n\n.w-0\\.5 {\n  width: 0.125rem;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-1\\/2 {\n  width: 50%;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-1\\/4 {\n  width: 25%;\n}\n\n.w-1\\/5 {\n  width: 20%;\n}\n\n.w-1\\/6 {\n  width: 16.666667%;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-11 {\n  width: 2.75rem;\n}\n\n.w-11\\/12 {\n  width: 91.666667%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-128 {\n  width: 32rem;\n}\n\n.w-14 {\n  width: 3.5rem;\n}\n\n.w-16 {\n  width: 4rem;\n}\n\n.w-2\\/3 {\n  width: 66.666667%;\n}\n\n.w-2\\/5 {\n  width: 40%;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-24 {\n  width: 6rem;\n}\n\n.w-28 {\n  width: 7rem;\n}\n\n.w-3 {\n  width: 0.75rem;\n}\n\n.w-3\\/4 {\n  width: 75%;\n}\n\n.w-3\\/5 {\n  width: 60%;\n}\n\n.w-32 {\n  width: 8rem;\n}\n\n.w-36 {\n  width: 9rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-4\\/5 {\n  width: 80%;\n}\n\n.w-4\\/6 {\n  width: 66.666667%;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-44 {\n  width: 11rem;\n}\n\n.w-48 {\n  width: 12rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-5\\/6 {\n  width: 83.333333%;\n}\n\n.w-52 {\n  width: 13rem;\n}\n\n.w-56 {\n  width: 14rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-60 {\n  width: 15rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-7 {\n  width: 1.75rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-9 {\n  width: 2.25rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-\\[100px\\] {\n  width: 100px;\n}\n\n.w-\\[117px\\] {\n  width: 117px;\n}\n\n.w-\\[128px\\] {\n  width: 128px;\n}\n\n.w-\\[140px\\] {\n  width: 140px;\n}\n\n.w-\\[150px\\] {\n  width: 150px;\n}\n\n.w-\\[16px\\] {\n  width: 16px;\n}\n\n.w-\\[170px\\] {\n  width: 170px;\n}\n\n.w-\\[180px\\] {\n  width: 180px;\n}\n\n.w-\\[192px\\] {\n  width: 192px;\n}\n\n.w-\\[20px\\] {\n  width: 20px;\n}\n\n.w-\\[22px\\] {\n  width: 22px;\n}\n\n.w-\\[24px\\] {\n  width: 24px;\n}\n\n.w-\\[256px\\] {\n  width: 256px;\n}\n\n.w-\\[320px\\] {\n  width: 320px;\n}\n\n.w-\\[32px\\] {\n  width: 32px;\n}\n\n.w-\\[340px\\] {\n  width: 340px;\n}\n\n.w-\\[360px\\] {\n  width: 360px;\n}\n\n.w-\\[400px\\] {\n  width: 400px;\n}\n\n.w-\\[48px\\] {\n  width: 48px;\n}\n\n.w-\\[4px\\] {\n  width: 4px;\n}\n\n.w-\\[64px\\] {\n  width: 64px;\n}\n\n.w-\\[72px\\] {\n  width: 72px;\n}\n\n.w-\\[96px\\] {\n  width: 96px;\n}\n\n.w-\\[calc\\(100\\%-1rem\\)\\] {\n  width: calc(100% - 1rem);\n}\n\n.w-auto {\n  width: auto;\n}\n\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-min {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.w-px {\n  width: 1px;\n}\n\n.w-screen {\n  width: 100vw;\n}\n\n.min-w-0 {\n  min-width: 0px;\n}\n\n.min-w-144 {\n  min-width: 36rem;\n}\n\n.min-w-16 {\n  min-width: 4rem;\n}\n\n.min-w-24 {\n  min-width: 6rem;\n}\n\n.min-w-28 {\n  min-width: 7rem;\n}\n\n.min-w-32 {\n  min-width: 8rem;\n}\n\n.min-w-36 {\n  min-width: 9rem;\n}\n\n.min-w-4 {\n  min-width: 1rem;\n}\n\n.min-w-40 {\n  min-width: 10rem;\n}\n\n.min-w-48 {\n  min-width: 12rem;\n}\n\n.min-w-60 {\n  min-width: 15rem;\n}\n\n.min-w-72 {\n  min-width: 18rem;\n}\n\n.min-w-\\[100px\\] {\n  min-width: 100px;\n}\n\n.min-w-\\[144px\\] {\n  min-width: 144px;\n}\n\n.min-w-\\[320px\\] {\n  min-width: 320px;\n}\n\n.min-w-fit {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.max-w-3xl {\n  max-width: 48rem;\n}\n\n.max-w-4xl {\n  max-width: 56rem;\n}\n\n.max-w-52 {\n  max-width: 13rem;\n}\n\n.max-w-56 {\n  max-width: 14rem;\n}\n\n.max-w-5xl {\n  max-width: 64rem;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.max-w-lg {\n  max-width: 32rem;\n}\n\n.max-w-md {\n  max-width: 28rem;\n}\n\n.max-w-none {\n  max-width: none;\n}\n\n.max-w-screen-md {\n  max-width: 768px;\n}\n\n.max-w-sm {\n  max-width: 24rem;\n}\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.flex-shrink {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n\n.shrink-0 {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.flex-grow {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.grow {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.grow-0 {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n\n.origin-bottom {\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom;\n}\n\n.origin-bottom-left {\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1\\/4 {\n  --tw-translate-y: -25%;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-12 {\n  --tw-translate-y: -3rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-8 {\n  --tw-translate-y: -2rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-y-1 {\n  --tw-translate-y: 0.25rem;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-rotate-45 {\n  --tw-rotate: -45deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-rotate-90 {\n  --tw-rotate: -90deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-180 {\n  --tw-rotate: 180deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-45 {\n  --tw-rotate: 45deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-90 {\n  --tw-rotate: 90deg;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-150 {\n  --tw-scale-x: 1.5;\n  --tw-scale-y: 1.5;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-x-\\[-1\\] {\n  --tw-scale-x: -1;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.animate-spin {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.cursor-none {\n  cursor: none;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.touch-none {\n  -ms-touch-action: none;\n      touch-action: none;\n}\n\n.select-all {\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\n\n.resize-none {\n  resize: none;\n}\n\n.resize {\n  resize: both;\n}\n\n.list-none {\n  list-style-type: none;\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.grid-cols-8 {\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n\n.grid-cols-\\[auto_auto\\] {\n  grid-template-columns: auto auto;\n}\n\n.grid-cols-\\[auto_auto_auto\\] {\n  grid-template-columns: auto auto auto;\n}\n\n.grid-cols-\\[repeat\\(10\\2c 1fr\\)\\] {\n  grid-template-columns: repeat(10,1fr);\n}\n\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n\n.grid-rows-3 {\n  grid-template-rows: repeat(3, minmax(0, 1fr));\n}\n\n.grid-rows-5 {\n  grid-template-rows: repeat(5, minmax(0, 1fr));\n}\n\n.flex-row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.flex-col {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.flex-col-reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.content-center {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.content-start {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n\n.content-around {\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n\n.content-stretch {\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n}\n\n.items-start {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.items-end {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.items-baseline {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n\n.items-stretch {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.justify-start {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.justify-end {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.justify-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.justify-between {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.justify-around {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.justify-evenly {\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n\n.gap-10 {\n  gap: 2.5rem;\n}\n\n.gap-16 {\n  gap: 4rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-2\\.5 {\n  gap: 0.625rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.gap-6 {\n  gap: 1.5rem;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.gap-\\[8px\\] {\n  gap: 8px;\n}\n\n.gap-x-1 {\n  -webkit-column-gap: 0.25rem;\n     -moz-column-gap: 0.25rem;\n          column-gap: 0.25rem;\n}\n\n.gap-x-2 {\n  -webkit-column-gap: 0.5rem;\n     -moz-column-gap: 0.5rem;\n          column-gap: 0.5rem;\n}\n\n.self-start {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n\n.self-end {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.overflow-scroll {\n  overflow: scroll;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n\n.overflow-x-visible {\n  overflow-x: visible;\n}\n\n.overflow-y-visible {\n  overflow-y: visible;\n}\n\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n\n.text-clip {\n  text-overflow: clip;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.whitespace-pre {\n  white-space: pre;\n}\n\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n\n.text-wrap {\n  text-wrap: wrap;\n}\n\n.break-words {\n  overflow-wrap: break-word;\n}\n\n.break-all {\n  word-break: break-all;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-2xl {\n  border-radius: 1rem;\n}\n\n.rounded-\\[3px\\] {\n  border-radius: 3px;\n}\n\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-none {\n  border-radius: 0px;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-tl-lg {\n  border-top-left-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-0 {\n  border-width: 0px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-\\[6px\\] {\n  border-width: 6px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-b-0 {\n  border-bottom-width: 0px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-l {\n  border-left-width: 1px;\n}\n\n.border-l-0 {\n  border-left-width: 0px;\n}\n\n.border-r {\n  border-right-width: 1px;\n}\n\n.border-r-0 {\n  border-right-width: 0px;\n}\n\n.border-t {\n  border-top-width: 1px;\n}\n\n.border-t-0 {\n  border-top-width: 0px;\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border-dashed {\n  border-style: dashed;\n}\n\n.border-double {\n  border-style: double;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity, 1));\n}\n\n.border-black\\/10 {\n  border-color: rgb(0 0 0 / 0.1);\n}\n\n.border-black\\/20 {\n  border-color: rgb(0 0 0 / 0.2);\n}\n\n.border-black\\/30 {\n  border-color: rgb(0 0 0 / 0.3);\n}\n\n.border-black\\/40 {\n  border-color: rgb(0 0 0 / 0.4);\n}\n\n.border-black\\/5 {\n  border-color: rgb(0 0 0 / 0.05);\n}\n\n.border-black\\/60 {\n  border-color: rgb(0 0 0 / 0.6);\n}\n\n.border-black\\/80 {\n  border-color: rgb(0 0 0 / 0.8);\n}\n\n.border-black\\/90 {\n  border-color: rgb(0 0 0 / 0.9);\n}\n\n.border-brand {\n  --tw-border-opacity: 1;\n  border-color: rgb(12 155 129 / var(--tw-border-opacity, 1));\n}\n\n.border-current {\n  border-color: currentColor;\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n}\n\n.border-white\\/10 {\n  border-color: rgb(255 255 255 / 0.1);\n}\n\n.border-white\\/20 {\n  border-color: rgb(255 255 255 / 0.2);\n}\n\n.border-white\\/40 {\n  border-color: rgb(255 255 255 / 0.4);\n}\n\n.border-b-white\\/80 {\n  border-bottom-color: rgb(255 255 255 / 0.8);\n}\n\n.border-r-white\\/80 {\n  border-right-color: rgb(255 255 255 / 0.8);\n}\n\n.bg-\\[\\#f0f0f0\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 240 240 / var(--tw-bg-opacity, 1));\n}\n\n.bg-\\[var\\(--calendar-color\\)\\] {\n  background-color: var(--calendar-color);\n}\n\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n\n.bg-black\\/10 {\n  background-color: rgb(0 0 0 / 0.1);\n}\n\n.bg-black\\/20 {\n  background-color: rgb(0 0 0 / 0.2);\n}\n\n.bg-black\\/30 {\n  background-color: rgb(0 0 0 / 0.3);\n}\n\n.bg-black\\/40 {\n  background-color: rgb(0 0 0 / 0.4);\n}\n\n.bg-black\\/5 {\n  background-color: rgb(0 0 0 / 0.05);\n}\n\n.bg-black\\/50 {\n  background-color: rgb(0 0 0 / 0.5);\n}\n\n.bg-black\\/60 {\n  background-color: rgb(0 0 0 / 0.6);\n}\n\n.bg-brand {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 155 129 / var(--tw-bg-opacity, 1));\n}\n\n.bg-current {\n  background-color: currentColor;\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));\n}\n\n.bg-red-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n\n.bg-white\\/10 {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.bg-white\\/40 {\n  background-color: rgb(255 255 255 / 0.4);\n}\n\n.bg-white\\/50 {\n  background-color: rgb(255 255 255 / 0.5);\n}\n\n.bg-white\\/60 {\n  background-color: rgb(255 255 255 / 0.6);\n}\n\n.bg-opacity-10 {\n  --tw-bg-opacity: 0.1;\n}\n\n.bg-none {\n  background-image: none;\n}\n\n.bg-contain {\n  background-size: contain;\n}\n\n.bg-cover {\n  background-size: cover;\n}\n\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n.bg-bottom {\n  background-position: bottom;\n}\n\n.bg-center {\n  background-position: center;\n}\n\n.bg-left-top {\n  background-position: left top;\n}\n\n.bg-right-bottom {\n  background-position: right bottom;\n}\n\n.bg-right-top {\n  background-position: right top;\n}\n\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.object-fill {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n\n.p-12 {\n  padding: 3rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.p-\\[12px\\] {\n  padding: 12px;\n}\n\n.p-\\[2px\\] {\n  padding: 2px;\n}\n\n.p-px {\n  padding: 1px;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.px-0\\.5 {\n  padding-left: 0.125rem;\n  padding-right: 0.125rem;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-3\\.5 {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.px-\\[16px\\] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.py-\\[12px\\] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.pb-0 {\n  padding-bottom: 0px;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pb-4 {\n  padding-bottom: 1rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n\n.pb-7 {\n  padding-bottom: 1.75rem;\n}\n\n.pb-8 {\n  padding-bottom: 2rem;\n}\n\n.pl-10 {\n  padding-left: 2.5rem;\n}\n\n.pl-16 {\n  padding-left: 4rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.pl-5 {\n  padding-left: 1.25rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.pl-9 {\n  padding-left: 2.25rem;\n}\n\n.pr-10 {\n  padding-right: 2.5rem;\n}\n\n.pr-12 {\n  padding-right: 3rem;\n}\n\n.pr-16 {\n  padding-right: 4rem;\n}\n\n.pr-3 {\n  padding-right: 0.75rem;\n}\n\n.pr-5 {\n  padding-right: 1.25rem;\n}\n\n.pr-6 {\n  padding-right: 1.5rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pt-12 {\n  padding-top: 3rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pt-20 {\n  padding-top: 5rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.pt-6 {\n  padding-top: 1.5rem;\n}\n\n.pt-\\[18px\\] {\n  padding-top: 18px;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.align-top {\n  vertical-align: top;\n}\n\n.font-\\[inherit\\] {\n  font-family: inherit;\n}\n\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\n\n.text-9xl {\n  font-size: 8rem;\n  line-height: 1;\n}\n\n.text-\\[0\\.625rem\\] {\n  font-size: 0.625rem;\n}\n\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n\n.text-\\[20px\\] {\n  font-size: 20px;\n}\n\n.text-\\[85\\%\\] {\n  font-size: 85%;\n}\n\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-thin {\n  font-weight: 100;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.lowercase {\n  text-transform: lowercase;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.not-italic {\n  font-style: normal;\n}\n\n.leading-5 {\n  line-height: 1.25rem;\n}\n\n.leading-6 {\n  line-height: 1.5rem;\n}\n\n.leading-8 {\n  line-height: 2rem;\n}\n\n.leading-\\[0\\] {\n  line-height: 0;\n}\n\n.leading-\\[16px\\] {\n  line-height: 16px;\n}\n\n.leading-\\[32px\\] {\n  line-height: 32px;\n}\n\n.leading-\\[44px\\] {\n  line-height: 44px;\n}\n\n.leading-none {\n  line-height: 1;\n}\n\n.leading-tight {\n  line-height: 1.25;\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n\n.text-black\\/20 {\n  color: rgb(0 0 0 / 0.2);\n}\n\n.text-black\\/60 {\n  color: rgb(0 0 0 / 0.6);\n}\n\n.text-black\\/80 {\n  color: rgb(0 0 0 / 0.8);\n}\n\n.text-brand {\n  --tw-text-opacity: 1;\n  color: rgb(12 155 129 / var(--tw-text-opacity, 1));\n}\n\n.text-current {\n  color: currentColor;\n}\n\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n\n.text-inherit {\n  color: inherit;\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n\n.text-transparent {\n  color: transparent;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.text-white\\/60 {\n  color: rgb(255 255 255 / 0.6);\n}\n\n.text-white\\/80 {\n  color: rgb(255 255 255 / 0.8);\n}\n\n.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.no-underline {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n.placeholder-black\\/40::-webkit-input-placeholder {\n  color: rgb(0 0 0 / 0.4);\n}\n\n.placeholder-black\\/40::-moz-placeholder {\n  color: rgb(0 0 0 / 0.4);\n}\n\n.placeholder-black\\/40:-ms-input-placeholder {\n  color: rgb(0 0 0 / 0.4);\n}\n\n.placeholder-black\\/40::-ms-input-placeholder {\n  color: rgb(0 0 0 / 0.4);\n}\n\n.placeholder-black\\/40::placeholder {\n  color: rgb(0 0 0 / 0.4);\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-30 {\n  opacity: 0.3;\n}\n\n.opacity-40 {\n  opacity: 0.4;\n}\n\n.opacity-45 {\n  opacity: 0.45;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-60 {\n  opacity: 0.6;\n}\n\n.opacity-70 {\n  opacity: 0.7;\n}\n\n.opacity-80 {\n  opacity: 0.8;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[2px_2px_3px_1px_\\#0003\\] {\n  --tw-shadow: 2px 2px 3px 1px #0003;\n  --tw-shadow-colored: 2px 2px 3px 1px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.outline {\n  outline-style: solid;\n}\n\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-black\\/20 {\n  --tw-ring-color: rgb(0 0 0 / 0.2);\n}\n\n.ring-current {\n  --tw-ring-color: currentColor;\n}\n\n.blur {\n  --tw-blur: blur(8px);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.invert {\n  --tw-invert: invert(100%);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.backdrop-filter {\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  -webkit-transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, fill, stroke, opacity, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.transition-all {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.transition-colors {\n  -webkit-transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.transition-opacity {\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.transition-shadow {\n  -webkit-transition-property: -webkit-box-shadow;\n  transition-property: -webkit-box-shadow;\n  transition-property: box-shadow;\n  transition-property: box-shadow, -webkit-box-shadow;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.transition-transform {\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n          transition-duration: 150ms;\n}\n\n.duration-500 {\n  -webkit-transition-duration: 500ms;\n          transition-duration: 500ms;\n}\n\n.ease-in-out {\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ease-out {\n  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.center-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.center-flex-x {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.center-flex-y {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.center-absolute {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n\n.\\*\\:absolute > * {\n  position: absolute;\n}\n\n.\\*\\:left-0 > * {\n  left: 0px;\n}\n\n.\\*\\:top-0 > * {\n  top: 0px;\n}\n\n.\\*\\:z-1 > * {\n  z-index: 1;\n}\n\n.placeholder\\:italic::-webkit-input-placeholder {\n  font-style: italic;\n}\n\n.placeholder\\:italic::-moz-placeholder {\n  font-style: italic;\n}\n\n.placeholder\\:italic:-ms-input-placeholder {\n  font-style: italic;\n}\n\n.placeholder\\:italic::-ms-input-placeholder {\n  font-style: italic;\n}\n\n.placeholder\\:italic::placeholder {\n  font-style: italic;\n}\n\n.hover\\:flex:hover {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.hover\\:w-8:hover {\n  width: 2rem;\n}\n\n.hover\\:scale-150:hover {\n  --tw-scale-x: 1.5;\n  --tw-scale-y: 1.5;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-90:hover {\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-black\\/20:hover {\n  border-color: rgb(0 0 0 / 0.2);\n}\n\n.hover\\:bg-black:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-black\\/10:hover {\n  background-color: rgb(0 0 0 / 0.1);\n}\n\n.hover\\:bg-black\\/20:hover {\n  background-color: rgb(0 0 0 / 0.2);\n}\n\n.hover\\:bg-black\\/80:hover {\n  background-color: rgb(0 0 0 / 0.8);\n}\n\n.hover\\:bg-brand:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 155 129 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-brand\\/80:hover {\n  background-color: rgb(12 155 129 / 0.8);\n}\n\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\n\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-white\\/20:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.hover\\:text-black:hover {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:underline:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\n\n.hover\\:shadow-\\[0_0_0_3px_\\#fff\\]:hover {\n  --tw-shadow: 0 0 0 3px #fff;\n  --tw-shadow-colored: 0 0 0 3px var(--tw-shadow-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:ring-2:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.hover\\:ring-black\\/10:hover {\n  --tw-ring-color: rgb(0 0 0 / 0.1);\n}\n\n.focus\\:scale-90:focus {\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.focus\\:border-black\\/20:focus {\n  border-color: rgb(0 0 0 / 0.2);\n}\n\n.focus\\:border-brand:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(12 155 129 / var(--tw-border-opacity, 1));\n}\n\n.focus\\:bg-black:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n\n.focus\\:bg-black\\/10:focus {\n  background-color: rgb(0 0 0 / 0.1);\n}\n\n.focus\\:bg-brand:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 155 129 / var(--tw-bg-opacity, 1));\n}\n\n.focus\\:bg-transparent:focus {\n  background-color: transparent;\n}\n\n.focus\\:text-white:focus {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.focus\\:underline:focus {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus-visible\\:outline-dashed:focus-visible {\n  outline-style: dashed;\n}\n\n.focus-visible\\:outline-offset-4:focus-visible {\n  outline-offset: 4px;\n}\n\n.focus-visible\\:outline-current:focus-visible {\n  outline-color: currentColor;\n}\n\n.enabled\\:hover\\:bg-black\\/10:hover:enabled {\n  background-color: rgb(0 0 0 / 0.1);\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.disabled\\:grayscale:disabled {\n  --tw-grayscale: grayscale(100%);\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.group:focus .group-focus\\:bg-black\\/80 {\n  background-color: rgb(0 0 0 / 0.8);\n}\n\n.group:focus .group-focus\\:bg-brand\\/80 {\n  background-color: rgb(12 155 129 / 0.8);\n}\n\n.group:focus .group-focus\\:opacity-100 {\n  opacity: 1;\n}\n\n.peer:checked ~ .peer-checked\\:bg-\\[\\#319cff\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(49 156 255 / var(--tw-bg-opacity, 1));\n}\n\n.peer:checked ~ .peer-checked\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.peer:focus ~ .peer-focus\\:flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n',
                s = {
                    props: {
                        previewStyle: {
                            type: String
                        },
                        localStyle: {
                            type: String
                        }
                    },
                    data() {
                        return {
                            previewElement: null
                        }
                    },
                    watch: {
                        previewStyle(t) {
                            this.previewElement.innerHTML = t
                        }
                    },
                    mounted() {
                        this.previewElement = this.inject(this.previewStyle, "user"), this.localStyle && this.inject(this.localStyle, "local"), this.inject(o, "tw")
                    },
                    methods: {
                        inject(t, e) {
                            const n = document.createElement("style");
                            return n.innerHTML = t, n.id = e, this.$el.shadowRoot.prepend(n), n
                        }
                    },
                    components: {
                        ShadowRoot: a["ShadowRoot"]
                    }
                },
                l = s,
                c = (n("b5f7"), n("2877")),
                d = Object(c["a"])(l, i, r, !1, null, null, null),
                u = d.exports;
            const h = t => ({
                components: {
                    PreviewContainer: u
                },
                props: {
                    previewStyle: {
                        type: String
                    }
                },
                data() {
                    return {
                        localStyle: t
                    }
                }
            });
            e["a"] = h
        },
        "57b7": function(t, e, n) {},
        "5cac": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-balloon {\n}\n\n.winui-balloon::before {\n}\n"
        },
        "5cd4": function(t, e, n) {},
        "5f56": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("winui-slider", {
                        attrs: {
                            min: "1",
                            max: "5",
                            step: "1"
                        }
                    }), n("winui-slider", {
                        attrs: {
                            min: "1",
                            max: "5",
                            step: "1",
                            value: "3",
                            disabled: ""
                        }
                    })], 1)
                },
                r = [],
                a = ".winui-slider{appearance:none;width:100%;background:rgba(0,0,0,0);padding:10px 1px}.winui-slider:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 3px rgba(0,0,0,.4);transform:translateY(calc(-50% + var(--slider-height) / 2))}.winui-slider:focus-visible::-moz-range-thumb{box-shadow:0 0 0 3px rgba(0,0,0,.4)}.winui-slider::-webkit-slider-thumb{appearance:none;width:var(--slider-thumb-width);height:var(--slider-thumb-height);background:#fff;border:0;border-radius:0;box-shadow:0 0 4px rgba(0,0,0,.4);transform:translateY(calc(-50% + var(--slider-height) / 2))}.winui-slider::-webkit-slider-thumb:hover{box-shadow:0 0 0 3px rgba(0,0,0,.4)}.winui-slider::-moz-range-thumb{appearance:none;width:var(--slider-thumb-width);height:var(--slider-thumb-height);background:#fff;border:0;border-radius:0;box-shadow:0 0 4px rgba(0,0,0,.4)}.winui-slider::-moz-range-thumb:hover{box-shadow:0 0 0 3px rgba(0,0,0,.4)}.winui-slider::-webkit-slider-runnable-track{width:100%;height:var(--slider-height);background:rgba(0,0,0,.2)}.winui-slider::-moz-range-track{width:100%;height:var(--slider-height);background:rgba(0,0,0,.2)}.winui-slider:disabled{opacity:.5}",
                o = n("56c8"),
                s = {
                    name: "Slider",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        "615c": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-dropdown {\n}\n\n.winui-dropdown:disabled {\n}\n"
        },
        6265: function(t, e, n) {
            var i = {
                "./balloon/selectors.scss": "5cac",
                "./button/selectors.scss": "aed2",
                "./checkbox/selectors.scss": "f6f9",
                "./ctxmenu/selectors.scss": "7b103",
                "./desktop/selectors.scss": "0ba6",
                "./dropdown/selectors.scss": "615c",
                "./icon/selectors.scss": "6f12",
                "./menubar/selectors.scss": "e6f1",
                "./progressbar/selectors.scss": "11f8",
                "./radio/selectors.scss": "a581",
                "./ribbon/selectors.scss": "9663",
                "./searchbox/selectors.scss": "3a41",
                "./slider/selectors.scss": "ac90",
                "./startmenu/selectors.scss": "487f",
                "./tabs/selectors.scss": "8055",
                "./taskbar/selectors.scss": "868b",
                "./textbox/selectors.scss": "b23b",
                "./window/selectors.scss": "f698"
            };

            function r(t) {
                var e = a(t);
                return n(e)
            }

            function a(t) {
                if (!n.o(i, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return i[t]
            }
            r.keys = function() {
                return Object.keys(i)
            }, r.resolve = a, t.exports = r, r.id = "6265"
        },
        6271: function(t, e, n) {
            "use strict";
            var i = n("694c"),
                r = n("2f62"),
                a = n("04a5"),
                o = n("6792"),
                s = n("2b0e"),
                l = n("f106"),
                c = n("4cca"),
                d = n("9a72");
            e["a"] = s["default"].extend({
                mixins: [d["a"]],
                computed: { ...Object(r["f"])(["shortcuts", "programs", "pinnedPrograms", "user"]),
                    ...Object(r["f"])({
                        apps: t => t.misc.apps
                    }),
                    ...Object(r["d"])(["themeData"]),
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
                                const n = t.findIndex(t => t.key === e.key);
                                return n < 0 ? e : t.splice(n, 1)[0]
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
                            let n = e.path,
                                r = null;
                            if ("shortcut" === e.type) {
                                const a = await l["a"].read(e.path, !0),
                                    s = JSON.parse(a);
                                if (n = s ? s.path : n, r = s ? s.exe : Object(c["b"])(t.lbl), "webapp" === r) return r = e.key, this[i["a"].SetTempData]({
                                    content: { ...e,
                                        target: s
                                    }
                                }), void this.$root.$emit(o["c"].OpenWindow, r)
                            } else r = t.key.startsWith("folder") ? "computer" : 1 === e.key.split("-").length ? e.key : Object(c["b"])(t.lbl);
                            if ("file" === r) return this.emitError(a["a"].UNSUPPORTED_TYPE);
                            n && this[i["a"].SetTempData]({
                                path: n
                            }), this.$root.$emit(o["c"].OpenWindow, r)
                        } catch (n) {
                            n instanceof SyntaxError ? this.emitError(a["a"].CORRUPTED_FILE) : this.emitError(n)
                        } else this.$root.$emit(o["c"].OpenWindow, t)
                    }
                }
            })
        },
        6529: function(t, e, n) {
            "use strict";
            n("53f8")
        },
        "661d": function(t, e, n) {},
        "67ac": function(t, e, n) {
            "use strict";
            n("15f0")
        },
        "694c": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return a
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "a", (function() {
                return s
            }));
            var i = n("2f62");
            const r = {
                    SetTempData: "setTempData",
                    ClearTempData: "clearTempData",
                    OpenContextMenu: "openContextMenu",
                    SelectItem: "selectItem",
                    RenameItem: "renameItem"
                },
                a = "fileexplorer",
                o = Object(i["a"])(a),
                s = r;
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
                    [r.SetTempData](t, e) {
                        t.tempData = e
                    },
                    [r.ClearTempData](t) {
                        t.tempData = void 0
                    },
                    [r.OpenContextMenu](t, e) {
                        t.contextMenu = e
                    },
                    [r.SelectItem](t, e) {
                        t.selectedItemPath = e
                    },
                    [r.RenameItem](t, e) {
                        t.renamingItemPath = e
                    }
                },
                actions: {}
            }
        },
        "6bf2": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            })), n.d(e, "b", (function() {
                return c
            }));
            var i = n("be8c"),
                r = n("1547"),
                a = n("dbd1");
            const o = Object(r["d"])("FirebaseAuthentication", {
                web: () => n.e("chunk-2d238653").then(n.bind(null, "feca")).then(t => new t.FirebaseAuthenticationWeb)
            });

            function s(t) {
                return t.trim().toLowerCase() + "@win7.simu"
            }
            const l = i["AuthErrorCodes"],
                c = a["b"];
            e["c"] = {
                async create(t, e) {
                    return /^[a-zA-Z0-9]*$/.test(t) ? (await Object(i["createUserWithEmailAndPassword"])(Object(i["getAuth"])(), s(t), e), this.updateProfile({
                        displayName: t
                    })) : Promise.reject({
                        code: l.INVALID_RECIPIENT_EMAIL
                    })
                },
                async login(t, e) {
                    const n = t.includes("@win7.simu") ? t : s(t),
                        r = o.signInWithEmailAndPassword({
                            email: n,
                            password: e
                        }),
                        a = Object(i["signInWithEmailAndPassword"])(Object(i["getAuth"])(), n, e),
                        [l] = await Promise.all([a, r]);
                    return l.user
                },
                async loginWith(t) {
                    let e, n;
                    if (t === a["b"].GOOGLE) e = await o.signInWithGoogle(), n = i["GoogleAuthProvider"].credential(e.credential.idToken, e.credential.accessToken);
                    else if (t === a["b"].APPLE) e = await o.signInWithApple({
                        skipNativeAuth: !0
                    }), n = new i["OAuthProvider"](t).credential({
                        idToken: e.credential.idToken,
                        rawNonce: e.credential.nonce
                    });
                    else {
                        if (t !== a["b"].GITHUB) return Promise.reject({
                            message: "Provider not supported"
                        });
                        e = await o.signInWithGithub(), n = i["GithubAuthProvider"].credential(e.credential.accessToken)
                    }
                    const {
                        user: r
                    } = await Object(i["signInWithCredential"])(Object(i["getAuth"])(), n);
                    return { ...r,
                        isNewUser: e.additionalUserInfo.isNewUser
                    }
                },
                async linkWith(t) {
                    let e, n;
                    if (t === a["b"].GOOGLE) e = await o.linkWithGoogle(), n = i["GoogleAuthProvider"].credential(e.credential.idToken, e.credential.accessToken);
                    else if (t === a["b"].APPLE) e = await o.linkWithApple(), n = new i["OAuthProvider"](t).credential({
                        idToken: e.credential.idToken,
                        rawNonce: e.credential.nonce
                    });
                    else {
                        if (t !== a["b"].GITHUB) return Promise.reject({
                            message: "Provider not supported"
                        });
                        e = await o.linkWithGithub(), n = i["GithubAuthProvider"].credential(e.credential.accessToken)
                    }
                    const {
                        user: r
                    } = await Object(i["signInWithCredential"])(Object(i["getAuth"])(), n);
                    return r
                },
                async unlink(t) {
                    const e = await Object(i["unlink"])(Object(i["getAuth"])().currentUser, t);
                    return e
                },
                logout() {
                    const t = o.signOut(),
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
                    } catch (n) {
                        if (n.code !== l.CREDENTIAL_TOO_OLD_LOGIN_AGAIN) return Promise.reject(n);
                        try {
                            await this.loginWith(t), await Object(i["deleteUser"])(e)
                        } catch (r) {
                            return Promise.reject(r)
                        }
                    }
                },
                async updateProfile(t) {
                    const e = Object(i["getAuth"])().currentUser;
                    return await Object(i["updateProfile"])(e, t), e
                },
                async updatePassword(t, e) {
                    try {
                        const n = Object(i["getAuth"])().currentUser;
                        return await this.login(n.email, t), Object(i["updatePassword"])(n, e)
                    } catch (n) {
                        return Promise.reject(n)
                    }
                }
            }
        },
        "6f12": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '[data-icon="about"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n\n[data-icon="access"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n\n[data-icon="accounts"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n\n[data-icon="bin"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n\n[data-icon="bin-full"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n\n[data-icon="bsod"] {\n  --icon: INSERT_VALUE_HERE !important;\n}\n'
        },
        7073: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        class: ["p-3 window__footer", {
                            "flex justify-end": "action" === t.variant
                        }]
                    }, [t._t("default")], 2)
                },
                r = [],
                a = {
                    props: {
                        variant: String
                    }
                },
                o = a,
                s = n("2877"),
                l = Object(s["a"])(o, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        "743b": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return o
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "a", (function() {
                return l
            }));
            var i = n("968c"),
                r = n("2f62");
            const a = {
                    SetIconSize: "setIconSize",
                    SetIconShow: "setIconShow",
                    SetIconAuto: "setIconAuto"
                },
                o = "desktop",
                s = Object(r["a"])(o),
                l = a;
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
                    [a.SetIconSize]: (t, e) => {
                        t.sizeIcons = e
                    },
                    [a.SetIconShow]: (t, e) => {
                        t.showIcons = e
                    },
                    [a.SetIconAuto]: (t, e) => {
                        t.autoIcons = e
                    }
                },
                actions: {
                    [a.SetIconSize]: ({
                        commit: t,
                        rootState: e
                    }, n) => (t(a.SetIconSize, n), i["default"].update("/configs/", e.user, "configs", {
                        sizeIcons: n
                    })),
                    [a.SetIconShow]: ({
                        commit: t,
                        rootState: e
                    }, n) => (t(a.SetIconShow, n), i["default"].update("/configs/", e.user, "configs", {
                        showIcons: n
                    })),
                    [a.SetIconAuto]: ({
                        commit: t,
                        rootState: e
                    }, n) => (t(a.SetIconAuto, n), i["default"].update("/configs/", e.user, "configs", {
                        autoIcons: n
                    }))
                }
            }
        },
        "7b103": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '.winui-menu {\n}\n\n.winui-menu > [role="menuitem"] > a,\n.winui-menu > [role="menuitem"] > button,\n.winui-menu > [role="menuitem"] > label {\n}\n\n.winui-menu hr {\n}\n'
        },
        "7ea9": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("span", {
                        staticClass: "flex items-center"
                    }, [n("img", {
                        staticClass: "mr-1",
                        attrs: {
                            src: t.loading
                        }
                    }), t._t("default")], 2)
                },
                r = [],
                a = n("0f35"),
                o = n("2f62"),
                s = {
                    computed: { ...Object(o["f"])({
                            assets: "assets"
                        }),
                        loading() {
                            return Object(a["a"])(this.assets.assetStore.cursor, "busy-aero")
                        }
                    }
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["a"] = d.exports
        },
        "7f2e": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "ribbon__preview"
                    }, [n("paint-ribbon", {
                        attrs: {
                            icon: t.iconSet,
                            ribbonShortcuts: t.ribbonShortcuts,
                            "active-tool": t.tools.brush,
                            stroke: 1,
                            activeColor1: "",
                            color1: "#000",
                            color2: "#fff",
                            isTransparentSelection: !1,
                            hasSelection: !1,
                            isRectSelect: !1
                        }
                    })], 1)])
                },
                r = [],
                a = n("c752"),
                o = '\ufeff.winui-checkbox input[type=checkbox]{appearance:none;background:none;border:none;margin:0;opacity:0}.winui-checkbox input[type=checkbox]+label{display:inline-flex;align-items:center;position:relative}.winui-checkbox input[type=checkbox]+label::before{width:var(--checkbox-size);height:var(--checkbox-size);content:"";display:inline-block;margin-right:6px;border:1px solid rgba(0,0,0,.2666666667)}.winui-checkbox input[type=checkbox]:not(:disabled):hover+label::before{background:rgba(0,0,0,.1333333333)}.winui-checkbox input[type=checkbox]:focus-visible+label{outline:1px dotted currentColor}.winui-checkbox input[type=checkbox]:checked+label::after{width:var(--checkbox-size);height:var(--checkbox-size);position:absolute;content:"✔";display:block;font-size:var(--checkbox-size);font-weight:bold;line-height:var(--checkbox-size)}.winui-checkbox input[type=checkbox]:disabled+label{opacity:.5}.icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.ribbon__tab-list{margin-left:62px;height:24px;display:flex;gap:4px}.ribbon__tab-item{display:flex;align-items:center;flex-direction:column;text-decoration:none;color:inherit;padding:4px 10px;border:1px solid rgba(0,0,0,0);border-bottom:none;justify-content:flex-end;min-width:64px}.ribbon__tab-item.is-selected{background:#fff;border-color:rgba(0,0,0,.2);margin-bottom:-1px;padding-bottom:5px}.ribbon__file-icon{width:36px;height:24px}.ribbon__file-main .ribbon__item.is-large .ribbon__item-button{flex-direction:row;padding:8px}.ribbon__file-main .ribbon__item.is-large .ribbon__item-label{white-space:normal;width:auto}.ribbon__group-title{transform:translateX(-50%)}.ribbon__item.is-split:hover>.ribbon__item-button:not(:disabled){background-color:rgba(0,0,0,.1333333333)}.ribbon__item.is-split:hover>.ribbon__item-button:not(:disabled):hover{background-color:rgba(0,0,0,.2)}.ribbon__item.is-large>.ribbon__item-button{padding:4px 6px}.ribbon__item.is-large>.ribbon__item-button .ribbon__item-label{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal}.ribbon__item.is-large.is-dropdown .ribbon__item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ribbon__item.is-small .ribbon__item-label{white-space:nowrap}.ribbon__item-icon.is-small{width:16px;height:16px}.ribbon__item-icon.is-large{width:32px;height:32px}.ribbon__item-menu .ribbon__item-button{padding:2px 4px}.ribbon__item-menu .ribbon__item-button.is-active .ribbon__item-check,.ribbon__item-menu .ribbon__item-button.is-active .ribbon__item-icon{background-color:rgba(0,0,0,.2)}.ribbon__item-menu.is-stroke-size .ribbon__item-button span{background-color:currentColor}.ribbon__item-menu.is-list::before,.ribbon__item-menu.has-colors::before{content:none}.is-color-gallery .ribbon__item-button{padding:0}.ribbon__preview{min-width:1020px}',
                s = n("2f62"),
                l = n("56c8"),
                c = n("5440"),
                d = {
                    name: "Ribbon",
                    mixins: [Object(l["a"])(o)],
                    computed: { ...Object(s["d"])({
                            themeAssets: "themeAssets"
                        }),
                        tools: () => c["i"],
                        iconSet() {
                            const t = this.themeAssets.base.icon,
                                e = {};
                            return Object.keys(t).forEach(n => {
                                let i = /^(paint|ribbon)-/.test(n) ? n.split("-")[1] : n;
                                e[i] = t[n]
                            }), e
                        },
                        ribbonShortcuts() {
                            return [{
                                shortcut: "Alt+N",
                                icon: "file",
                                label: this.$t("new"),
                                click: () => {}
                            }, {
                                shortcut: "Alt+O",
                                icon: "open",
                                label: this.$t("open"),
                                click: () => {}
                            }, {
                                shortcut: "Alt+S",
                                icon: "save",
                                label: this.$t("save-as"),
                                click: () => {}
                            }, {
                                shortcut: "Alt+4",
                                icon: "exit",
                                label: this.$t("exit"),
                                click: () => {}
                            }]
                        }
                    },
                    components: {
                        PaintRibbon: a["a"]
                    }
                },
                u = d,
                h = n("2877"),
                p = Object(h["a"])(u, i, r, !1, null, null, null);
            e["default"] = p.exports
        },
        8055: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '.winui-tabs {\n}\n\n.winui-tabs [role="tablist"] {\n}\n\n.winui-tabs [role="tablist"] button {\n}\n\n.winui-tabs [role="tabpanel"] {\n}\n'
        },
        "868b": function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".taskbar__wrapper {\n}\n\n.taskbar__main {\n}\n\n.taskbar__main-item {\n}\n\n.taskbar__main-item.is-opened {\n}\n\n.taskbar__main-item.is-active {\n}\n\n.taskbar__main-icon {\n}\n\n.taskbar__main-popup {\n}\n\n.taskbar__tray {\n}\n\n.taskbar__tray-item {\n}\n\n.taskbar__tray-item .taskbar-item {\n}\n\n.taskbar__tray-item .taskbar-popup {\n}\n\n.startbutton-wrapper {\n}\n\n.startbutton-icon {\n}\n"
        },
        "8dc1": function(t, e, n) {
            (function(t, n) {
                n(e)
            })(0, (function(t) {
                var e, n = Object.defineProperty,
                    i = Object.defineProperties,
                    r = Object.getOwnPropertyDescriptors,
                    a = Object.getOwnPropertySymbols,
                    o = Object.prototype.hasOwnProperty,
                    s = Object.prototype.propertyIsEnumerable,
                    l = Math.pow,
                    c = (t, e, i) => e in t ? n(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i
                    }) : t[e] = i,
                    d = (t, e) => {
                        for (var n in e || (e = {})) o.call(e, n) && c(t, n, e[n]);
                        if (a)
                            for (var n of a(e)) s.call(e, n) && c(t, n, e[n]);
                        return t
                    },
                    u = (t, e) => i(t, r(e)),
                    h = (t, e) => {
                        var n = {};
                        for (var i in t) o.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                        if (null != t && a)
                            for (var i of a(t)) e.indexOf(i) < 0 && s.call(t, i) && (n[i] = t[i]);
                        return n
                    },
                    p = (t, e, n) => new Promise((i, r) => {
                        var a = t => {
                                try {
                                    s(n.next(t))
                                } catch (y) {
                                    r(y)
                                }
                            },
                            o = t => {
                                try {
                                    s(n.throw(t))
                                } catch (y) {
                                    r(y)
                                }
                            },
                            s = t => t.done ? i(t.value) : Promise.resolve(t.value).then(a, o);
                        s((n = n.apply(t, e)).next())
                    });

                function m(t, e) {
                    return t[13] = 1, t[14] = e >> 8, t[15] = 255 & e, t[16] = e >> 8, t[17] = 255 & e, t
                }
                const b = "p".charCodeAt(0),
                    w = "H".charCodeAt(0),
                    f = "Y".charCodeAt(0),
                    g = "s".charCodeAt(0);
                let v;

                function x() {
                    const t = new Int32Array(256);
                    for (let e = 0; e < 256; e++) {
                        let n = e;
                        for (let t = 0; t < 8; t++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                        t[e] = n
                    }
                    return t
                }

                function k(t) {
                    let e = -1;
                    v || (v = x());
                    for (let n = 0; n < t.length; n++) e = v[255 & (e ^ t[n])] ^ e >>> 8;
                    return -1 ^ e
                }

                function y(t) {
                    const e = t.length - 1;
                    for (let n = e; n >= 4; n--)
                        if (9 === t[n - 4] && t[n - 3] === b && t[n - 2] === w && t[n - 1] === f && t[n] === g) return n - 3;
                    return 0
                }

                function O(t, e, n = !1) {
                    const i = new Uint8Array(13);
                    e *= 39.3701, i[0] = b, i[1] = w, i[2] = f, i[3] = g, i[4] = e >>> 24, i[5] = e >>> 16, i[6] = e >>> 8, i[7] = 255 & e, i[8] = i[4], i[9] = i[5], i[10] = i[6], i[11] = i[7], i[12] = 1;
                    const r = k(i),
                        a = new Uint8Array(4);
                    if (a[0] = r >>> 24, a[1] = r >>> 16, a[2] = r >>> 8, a[3] = 255 & r, n) {
                        const e = y(t);
                        return t.set(i, e), t.set(a, e + 13), t
                    } {
                        const e = new Uint8Array(4);
                        e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 9;
                        const n = new Uint8Array(54);
                        return n.set(t, 0), n.set(e, 33), n.set(i, 37), n.set(a, 50), n
                    }
                }
                const _ = "AAlwSFlz",
                    S = "AAAJcEhZ",
                    $ = "AAAACXBI";

                function C(t) {
                    let e = t.indexOf(_);
                    return -1 === e && (e = t.indexOf(S)), -1 === e && (e = t.indexOf($)), e
                }
                const Q = "[modern-screenshot]",
                    P = "undefined" != typeof window,
                    E = P && "Worker" in window,
                    T = P && "atob" in window,
                    z = P && "btoa" in window,
                    A = P ? null == (e = window.navigator) ? void 0 : e.userAgent : "",
                    j = A.includes("Chrome"),
                    R = A.includes("AppleWebKit") && !j,
                    I = A.includes("Firefox"),
                    N = t => t && "__CONTEXT__" in t,
                    D = t => "CSSFontFaceRule" === t.constructor.name,
                    W = t => "CSSImportRule" === t.constructor.name,
                    X = t => 1 === t.nodeType,
                    L = t => "object" == typeof t.className,
                    U = t => L(t) && "svg" === t.tagName,
                    B = t => L(t) && "image" === t.tagName,
                    M = t => X(t) && "undefined" != typeof t.style && !L(t),
                    Y = t => 8 === t.nodeType,
                    F = t => 3 === t.nodeType,
                    V = t => "IMG" === t.tagName,
                    G = t => "VIDEO" === t.tagName,
                    q = t => "CANVAS" === t.tagName,
                    Z = t => "TEXTAREA" === t.tagName,
                    H = t => "INPUT" === t.tagName,
                    K = t => "STYLE" === t.tagName,
                    J = t => "SCRIPT" === t.tagName,
                    tt = t => "SELECT" === t.tagName,
                    et = t => "SLOT" === t.tagName,
                    nt = t => "IFRAME" === t.tagName,
                    it = (...t) => console.warn(Q, ...t),
                    rt = t => console.time(`${Q} ${t}`),
                    at = t => console.timeEnd(`${Q} ${t}`),
                    ot = t => {
                        var e;
                        const n = null == (e = null == t ? void 0 : t.createElement) ? void 0 : e.call(t, "canvas");
                        return n && (n.height = n.width = 1), n && "toDataURL" in n && Boolean(n.toDataURL("image/webp").includes("image/webp"))
                    },
                    st = t => t.startsWith("data:");

                function lt(t, e) {
                    if (t.match(/^[a-z]+:\/\//i)) return t;
                    if (P && t.match(/^\/\//)) return window.location.protocol + t;
                    if (t.match(/^[a-z]+:/i) || !P) return t;
                    const n = ct().implementation.createHTMLDocument(),
                        i = n.createElement("base"),
                        r = n.createElement("a");
                    return n.head.appendChild(i), n.body.appendChild(r), e && (i.href = e), r.href = t, r.href
                }

                function ct(t) {
                    var e;
                    return null != (e = t && X(t) ? null == t ? void 0 : t.ownerDocument : t) ? e : window.document
                }
                const dt = "http://www.w3.org/2000/svg";

                function ut(t, e, n) {
                    const i = ct(n).createElementNS(dt, "svg");
                    return i.setAttributeNS(null, "width", t.toString()), i.setAttributeNS(null, "height", e.toString()), i.setAttributeNS(null, "viewBox", `0 0 ${t} ${e}`), i
                }

                function ht(t, e) {
                    let n = (new XMLSerializer).serializeToString(t);
                    return e && (n = n.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu, "")), "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n)
                }

                function pt(t, e = "image/png", n = 1) {
                    return p(this, null, (function*() {
                        try {
                            return yield new Promise((i, r) => {
                                t.toBlob(t => {
                                    t ? i(t) : r(new Error("Blob is null"))
                                }, e, n)
                            })
                        } catch (i) {
                            if (T) return it("Failed canvas to blob", {
                                type: e,
                                quality: n
                            }, i), mt(t.toDataURL(e, n));
                            throw i
                        }
                    }))
                }

                function mt(t) {
                    var e, n;
                    const [i, r] = t.split(","), a = null != (n = null == (e = i.match(/data:(.+);/)) ? void 0 : e[1]) ? n : void 0, o = window.atob(r), s = o.length, l = new Uint8Array(s);
                    for (let c = 0; c < s; c += 1) l[c] = o.charCodeAt(c);
                    return new Blob([l], {
                        type: a
                    })
                }

                function bt(t, e) {
                    return new Promise((n, i) => {
                        const r = new FileReader;
                        r.onload = () => n(r.result), r.onerror = () => i(r.error), r.onabort = () => i(new Error("Failed read blob to " + e)), "dataUrl" === e ? r.readAsDataURL(t) : "arrayBuffer" === e && r.readAsArrayBuffer(t)
                    })
                }
                const wt = t => bt(t, "dataUrl"),
                    ft = t => bt(t, "arrayBuffer");

                function gt(t, e) {
                    const n = ct(e).createElement("img");
                    return n.decoding = "sync", n.loading = "eager", n.src = t, n
                }

                function vt(t, e) {
                    return new Promise(n => {
                        const {
                            timeout: i,
                            ownerDocument: r,
                            onError: a
                        } = null != e ? e : {}, o = "string" == typeof t ? gt(t, ct(r)) : t;
                        let s = null,
                            l = null;

                        function c() {
                            n(o), s && clearTimeout(s), null == l || l()
                        }
                        if (i && (s = setTimeout(c, i)), G(o)) {
                            const t = o.currentSrc || o.src;
                            if (!t) return o.poster ? vt(o.poster, e).then(n) : c();
                            if (o.readyState >= 2) return c();
                            const i = c,
                                r = e => {
                                    it("Failed video load", t, e), null == a || a(e), c()
                                };
                            l = () => {
                                o.removeEventListener("loadeddata", i), o.removeEventListener("error", r)
                            }, o.addEventListener("loadeddata", i, {
                                once: !0
                            }), o.addEventListener("error", r, {
                                once: !0
                            })
                        } else {
                            const t = B(o) ? o.href.baseVal : o.currentSrc || o.src;
                            if (!t) return c();
                            const e = () => p(this, null, (function*() {
                                    if (V(o) && "decode" in o) try {
                                        yield o.decode()
                                    } catch (e) {
                                        it("Failed to decode image, trying to render anyway", o.dataset.originalSrc || t, e)
                                    }
                                    c()
                                })),
                                n = e => {
                                    it("Failed image load", o.dataset.originalSrc || t, e), c()
                                };
                            if (V(o) && o.complete) return e();
                            l = () => {
                                o.removeEventListener("load", e), o.removeEventListener("error", n)
                            }, o.addEventListener("load", e, {
                                once: !0
                            }), o.addEventListener("error", n, {
                                once: !0
                            })
                        }
                    })
                }

                function xt(t, e) {
                    return p(this, null, (function*() {
                        M(t) && (V(t) || G(t) ? yield vt(t, {
                            timeout: e
                        }): yield Promise.all(["img", "video"].flatMap(n => Array.from(t.querySelectorAll(n)).map(t => vt(t, {
                            timeout: e
                        })))))
                    }))
                }
                const kt = function() {
                    let t = 0;
                    const e = () => ("0000" + (Math.random() * l(36, 4) << 0).toString(36)).slice(-4);
                    return () => (t += 1, `u${e()}${t}`)
                }();

                function yt(t) {
                    return null == t ? void 0 : t.split(",").map(t => t.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean)
                }

                function Ot(t) {
                    return {
                        time: e => t && rt(e),
                        timeEnd: e => t && at(e),
                        warn: (...e) => t && it(...e)
                    }
                }

                function _t(t) {
                    return {
                        cache: t ? "no-cache" : "force-cache"
                    }
                }

                function St(t, e) {
                    return p(this, null, (function*() {
                        return N(t) ? t : $t(t, u(d({}, e), {
                            autoDestruct: !0
                        }))
                    }))
                }

                function $t(t, e) {
                    return p(this, null, (function*() {
                        var n, i, r, a, o;
                        const {
                            scale: s = 1,
                            workerUrl: l,
                            workerNumber: c = 1
                        } = e || {}, h = Boolean(null == e ? void 0 : e.debug), m = null == (n = null == e ? void 0 : e.features) || n, b = null != (i = t.ownerDocument) ? i : P ? window.document : void 0, w = null != (a = null == (r = t.ownerDocument) ? void 0 : r.defaultView) ? a : P ? window : void 0, f = new Map, g = u(d({
                            width: 0,
                            height: 0,
                            quality: 1,
                            type: "image/png",
                            scale: s,
                            backgroundColor: null,
                            style: null,
                            filter: null,
                            maximumCanvasSize: 0,
                            timeout: 3e4,
                            progress: null,
                            debug: h,
                            fetch: d({
                                requestInit: _t(null == (o = null == e ? void 0 : e.fetch) ? void 0 : o.bypassingCache),
                                placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                bypassingCache: !1
                            }, null == e ? void 0 : e.fetch),
                            font: {},
                            drawImageInterval: 100,
                            workerUrl: null,
                            workerNumber: c,
                            onCloneNode: null,
                            onEmbedNode: null,
                            onCreateForeignObjectSvg: null,
                            autoDestruct: !1
                        }, e), {
                            __CONTEXT__: !0,
                            log: Ot(h),
                            node: t,
                            ownerDocument: b,
                            ownerWindow: w,
                            dpi: 1 === s ? null : 96 * s,
                            svgStyleElement: Ct(b),
                            svgDefsElement: null == b ? void 0 : b.createElementNS(dt, "defs"),
                            svgStyles: new Map,
                            defaultComputedStyles: new Map,
                            workers: [...new Array(E && l && c ? c : 0)].map(() => {
                                try {
                                    const t = new Worker(l);
                                    return t.onmessage = t => p(this, null, (function*() {
                                        var e, n, i, r;
                                        const {
                                            url: a,
                                            result: o
                                        } = t.data;
                                        o ? null == (n = null == (e = f.get(a)) ? void 0 : e.resovle) || n.call(e, o) : null == (r = null == (i = f.get(a)) ? void 0 : i.reject) || r.call(i, new Error("Error receiving message from worker: " + a))
                                    })), t.onmessageerror = t => {
                                        var e, n;
                                        const {
                                            url: i
                                        } = t.data;
                                        null == (n = null == (e = f.get(i)) ? void 0 : e.reject) || n.call(e, new Error("Error receiving message from worker: " + i))
                                    }, t
                                } catch (t) {
                                    return it("Failed to new Worker", t), null
                                }
                            }).filter(Boolean),
                            fontFamilies: new Set,
                            fontCssTexts: new Map,
                            acceptOfImage: [ot(b) && "image/webp", "image/svg+xml", "image/*", "*/*"].filter(Boolean).join(",") + ";q=0.8",
                            requests: f,
                            drawImageCount: 0,
                            tasks: [],
                            features: m,
                            isEnable: t => {
                                var e;
                                return "boolean" == typeof m ? m : null == (e = m[t]) || e
                            }
                        });
                        g.log.time("wait until load"), yield xt(t, g.timeout), g.log.timeEnd("wait until load");
                        const {
                            width: v,
                            height: x
                        } = Qt(t, g);
                        return g.width = v, g.height = x, g
                    }))
                }

                function Ct(t) {
                    if (!t) return;
                    const e = t.createElement("style"),
                        n = e.ownerDocument.createTextNode("\n.______background-clip--text {\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n");
                    return e.appendChild(n), e
                }

                function Qt(t, e) {
                    let {
                        width: n,
                        height: i
                    } = e;
                    if (X(t) && (!n || !i)) {
                        const e = t.getBoundingClientRect();
                        n = n || e.width || Number(t.getAttribute("width")) || 0, i = i || e.height || Number(t.getAttribute("height")) || 0
                    }
                    return {
                        width: n,
                        height: i
                    }
                }

                function Pt(t, e) {
                    return p(this, null, (function*() {
                        const {
                            log: n,
                            timeout: i,
                            drawImageCount: r,
                            drawImageInterval: a
                        } = e;
                        n.time("image to canvas");
                        const o = yield vt(t, {
                            timeout: i
                        }), {
                            canvas: s,
                            context2d: l
                        } = Et(t.ownerDocument, e), c = () => {
                            try {
                                null == l || l.drawImage(o, 0, 0, s.width, s.height)
                            } catch (t) {
                                it("Failed to drawImage", t)
                            }
                        };
                        if (c(), e.isEnable("fixSvgXmlDecode"))
                            for (let t = 0; t < r; t++) yield new Promise(e => {
                                setTimeout(() => {
                                    c(), e()
                                }, t + a)
                            });
                        return e.drawImageCount = 0, n.timeEnd("image to canvas"), s
                    }))
                }

                function Et(t, e) {
                    const {
                        width: n,
                        height: i,
                        scale: r,
                        backgroundColor: a,
                        maximumCanvasSize: o
                    } = e, s = t.createElement("canvas");
                    s.width = Math.floor(n * r), s.height = Math.floor(i * r), s.style.width = n + "px", s.style.height = i + "px", o && (s.width > o || s.height > o) && (s.width > o && s.height > o ? s.width > s.height ? (s.height *= o / s.width, s.width = o) : (s.width *= o / s.height, s.height = o) : s.width > o ? (s.height *= o / s.width, s.width = o) : (s.width *= o / s.height, s.height = o));
                    const l = s.getContext("2d");
                    return l && a && (l.fillStyle = a, l.fillRect(0, 0, s.width, s.height)), {
                        canvas: s,
                        context2d: l
                    }
                }
                const Tt = ["width", "height"],
                    zt = ["stroke", "fill"];

                function At(t, e, n) {
                    var i;
                    const {
                        defaultComputedStyles: r,
                        ownerDocument: a
                    } = n, o = t.nodeName.toLowerCase(), s = L(t) && "svg" !== o, l = s ? zt.map(e => [e, t.getAttribute(e)]).filter(([, t]) => null !== t) : [], c = [s && "svg", o, l.map((t, e) => `${t}=${e}`).join(","), e].filter(Boolean).join(":");
                    if (r.has(c)) return r.get(c);
                    let d = n.sandbox;
                    if (!d) try {
                        a && (d = a.createElement("iframe"), d.id = "__SANDBOX__-" + kt(), d.width = "0", d.height = "0", d.style.visibility = "hidden", d.style.position = "fixed", a.body.appendChild(d), null == (i = d.contentWindow) || i.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'), n.sandbox = d)
                    } catch (f) {
                        it("Failed to create iframe sandbox", f)
                    }
                    if (!d) return new Map;
                    const u = d.contentWindow;
                    if (!u) return new Map;
                    const h = u.document;
                    let p, m;
                    s ? (p = h.createElementNS(dt, "svg"), m = p.ownerDocument.createElementNS(p.namespaceURI, o), l.forEach(([t, e]) => {
                        m.setAttributeNS(null, t, e)
                    }), p.appendChild(m)) : p = m = h.createElement(o), m.textContent = " ", h.body.appendChild(p);
                    const b = u.getComputedStyle(m, e),
                        w = new Map;
                    for (let g = b.length, v = 0; v < g; v++) {
                        const t = b.item(v);
                        Tt.includes(t) || w.set(t, b.getPropertyValue(t))
                    }
                    return h.body.removeChild(p), r.set(c, w), w
                }

                function jt(t, e) {
                    var n;
                    const i = new Map,
                        r = [],
                        a = new Map;
                    for (let o = t.length, s = 0; s < o; s++) {
                        const n = t.item(s),
                            o = t.getPropertyValue(n),
                            l = t.getPropertyPriority(n),
                            c = n.lastIndexOf("-"),
                            d = c > -1 ? n.substring(0, c) : void 0;
                        if (d) {
                            let t = a.get(d);
                            t || (t = new Map, a.set(d, t)), t.set(n, [o, l])
                        }
                        e.get(n) === o && !l || (d ? r.push(d) : i.set(n, [o, l]))
                    }
                    for (let o = r.length, s = 0; s < o; s++) null == (n = a.get(r[s])) || n.forEach((t, e) => i.set(e, t));
                    return i
                }
                const Rt = [":before", ":after"],
                    It = [":-webkit-scrollbar", ":-webkit-scrollbar-button", ":-webkit-scrollbar-thumb", ":-webkit-scrollbar-track", ":-webkit-scrollbar-track-piece", ":-webkit-scrollbar-corner", ":-webkit-resizer"];

                function Nt(t, e, n, i) {
                    const {
                        ownerWindow: r,
                        svgStyleElement: a,
                        svgStyles: o
                    } = i;

                    function s(n) {
                        var a;
                        const s = r.getComputedStyle(t, n);
                        let l = s.getPropertyValue("content");
                        if (!l || "none" === l) return;
                        l = l.replace(/(')|(")|(counter\(.+\))/g, "");
                        const c = [kt()],
                            d = At(t, n, i),
                            u = [`content: '${l}';`],
                            h = jt(s, d);
                        if (h.delete("content"), h.delete("-webkit-locale"), "text" === (null == (a = h.get("background-clip")) ? void 0 : a[0]) && e.classList.add("______background-clip--text"), h.forEach(([t, e], n) => {
                                u.push(`${n}: ${t}${e?" !important":""};`)
                            }), 1 === u.length) return;
                        try {
                            e.className = [e.className, ...c].join(" ")
                        } catch (b) {
                            return
                        }
                        const p = u.join("\n  ");
                        let m = o.get(p);
                        m || (m = [], o.set(p, m)), m.push(`.${c[0]}:${n}`)
                    }
                    a && r && (Rt.forEach(s), n && It.forEach(s))
                }

                function Dt(t, e) {
                    Z(t) && (e.innerHTML = t.value), (Z(t) || H(t) || tt(t)) && e.setAttribute("value", t.value)
                }

                function Wt(t, e, n, i) {
                    var r, a, o, s;
                    const {
                        ownerWindow: l
                    } = i, c = e.style, d = l.getComputedStyle(t), u = At(t, null, i), h = jt(d, u);
                    return h.delete("transition-property"), h.delete("all"), h.delete("d"), h.delete("content"), n && (h.delete("margin-top"), h.delete("margin-right"), h.delete("margin-bottom"), h.delete("margin-left"), h.delete("margin-block-start"), h.delete("margin-block-end"), h.delete("margin-inline-start"), h.delete("margin-inline-end"), h.set("box-sizing", ["border-box", ""])), "text" === (null == (r = h.get("background-clip")) ? void 0 : r[0]) && e.classList.add("______background-clip--text"), j && (h.has("font-kerning") || h.set("font-kerning", ["normal", ""]), ("hidden" === (null == (a = h.get("overflow-x")) ? void 0 : a[0]) || "hidden" === (null == (o = h.get("overflow-y")) ? void 0 : o[0])) && "ellipsis" === (null == (s = h.get("text-overflow")) ? void 0 : s[0]) && t.scrollWidth === t.clientWidth && h.set("text-overflow", ["clip", ""])), h.forEach(([t, e], n) => {
                        c.setProperty(n, t, e)
                    }), h
                }

                function Xt(t, e) {
                    return p(this, null, (function*() {
                        var n, i, r;
                        const {
                            ownerDocument: a,
                            svgDefsElement: o
                        } = e, s = null != (i = null == (n = t.querySelectorAll) ? void 0 : n.call(t, "use")) ? i : [];
                        if (s.length)
                            for (let t = s.length, l = 0; l < t; l++) {
                                const t = s[l],
                                    n = null != (r = t.getAttribute("xlink:href")) ? r : t.getAttribute("href");
                                if (!n) continue;
                                const i = null == a ? void 0 : a.querySelector("svg " + n);
                                !i || null != o && o.querySelector(n) || null == o || o.appendChild(yield Zt(i, e))
                            }
                        return t.cloneNode(!1)
                    }))
                }

                function Lt(t, e) {
                    var n;
                    try {
                        if (null != (n = null == t ? void 0 : t.contentDocument) && n.body) return Zt(t.contentDocument.body, e)
                    } catch (i) {
                        it("Failed to clone iframe", i)
                    }
                    return t.cloneNode(!1)
                }

                function Ut(t) {
                    if (t.ownerDocument) try {
                        const e = t.toDataURL();
                        if ("data:," !== e) return gt(e, t.ownerDocument)
                    } catch (r) {}
                    const e = t.cloneNode(!1),
                        n = t.getContext("2d"),
                        i = e.getContext("2d");
                    try {
                        return n && i && i.putImageData(n.getImageData(0, 0, t.width, t.height), 0, 0), e
                    } catch (r) {
                        it("Failed to clone canvas", r)
                    }
                    return e
                }

                function Bt(t) {
                    return p(this, null, (function*() {
                        if (t.ownerDocument && !t.currentSrc && t.poster) return gt(t.poster, t.ownerDocument);
                        const e = t.cloneNode(!1);
                        e.crossOrigin = "anonymous", t.currentSrc && t.currentSrc !== t.src && (e.src = t.currentSrc);
                        const n = e.ownerDocument;
                        if (n) {
                            let r = !0;
                            if (yield vt(e, {
                                    onError: () => r = !1
                                }), !r) return t.poster ? gt(t.poster, t.ownerDocument) : e;
                            e.currentTime = t.currentTime, yield new Promise(t => {
                                e.addEventListener("seeked", t, {
                                    once: !0
                                })
                            });
                            const a = n.createElement("canvas");
                            a.width = t.offsetWidth, a.height = t.offsetHeight;
                            try {
                                const t = a.getContext("2d");
                                t && t.drawImage(e, 0, 0, a.width, a.height)
                            } catch (i) {
                                return it("Failed to clone video", i), t.poster ? gt(t.poster, t.ownerDocument) : e
                            }
                            return Ut(a)
                        }
                        return e
                    }))
                }

                function Mt(t) {
                    const e = t.cloneNode(!1);
                    return t.currentSrc && t.currentSrc !== t.src && (e.src = t.currentSrc, e.srcset = ""), "lazy" === e.loading && (e.loading = "eager"), e
                }

                function Yt(t, e) {
                    return q(t) ? Ut(t) : nt(t) ? Lt(t, e) : V(t) ? Mt(t) : G(t) ? Bt(t) : U(t) ? Xt(t, e) : t.cloneNode(!1)
                }

                function Ft(t, e, n) {
                    return p(this, null, (function*() {
                        X(e) && (K(e) || J(e)) || n.filter && !n.filter(e) || t.appendChild(yield Zt(e, n))
                    }))
                }

                function Vt(t, e, n) {
                    return p(this, null, (function*() {
                        var i, r;
                        const a = null != (r = X(t) ? null == (i = t.shadowRoot) ? void 0 : i.firstChild : void 0) ? r : t.firstChild;
                        for (let t = a; t; t = t.nextSibling)
                            if (!Y(t))
                                if (X(t) && et(t) && "function" == typeof t.assignedNodes) {
                                    const i = t.assignedNodes();
                                    for (let t = 0; t < i.length; t++) yield Ft(e, i[t], n)
                                } else yield Ft(e, t, n)
                    }))
                }

                function Gt(t, e) {
                    const {
                        backgroundColor: n,
                        width: i,
                        height: r,
                        style: a
                    } = e, o = t.style;
                    if (n && o.setProperty("background-color", n, "important"), i && o.setProperty("width", i + "px", "important"), r && o.setProperty("height", r + "px", "important"), a)
                        for (const s in a) o[s] = a[s]
                }
                const qt = /^[\w-]+$/;

                function Zt(t, e, n = !1) {
                    return p(this, null, (function*() {
                        var i, r, a, o;
                        const {
                            ownerDocument: s,
                            ownerWindow: l,
                            fontFamilies: c
                        } = e;
                        if (s && F(t)) return s.createTextNode(t.data);
                        if (s && l && X(t) && (M(t) || L(t))) {
                            const s = yield Yt(t, e);
                            if (e.isEnable("removeAbnormalAttributes")) {
                                const t = s.getAttributeNames();
                                for (let e = t.length, n = 0; n < e; n++) {
                                    const e = t[n];
                                    qt.test(e) || s.removeAttribute(e)
                                }
                            }
                            const l = Wt(t, s, n, e);
                            n && Gt(s, e);
                            let d = !1;
                            if (e.isEnable("copyScrollbar")) {
                                const e = [null == (i = l.get("overflow-x")) ? void 0 : i[0], null == (r = l.get("overflow-y")) ? void 0 : r[1]];
                                d = e.includes("scroll") || (e.includes("auto") || e.includes("overlay")) && (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
                            }
                            return Nt(t, s, d, e), Dt(t, s), null == (o = yt(null == (a = l.get("font-family")) ? void 0 : a[0])) || o.forEach(t => c.add(t)), G(t) || (yield Vt(t, s, e)), s
                        }
                        const d = t.cloneNode(!1);
                        return yield Vt(t, d, e), d
                    }))
                }

                function Ht(t) {
                    if (t.ownerDocument = void 0, t.ownerWindow = void 0, t.svgStyleElement = void 0, t.svgDefsElement = void 0, t.svgStyles.clear(), t.defaultComputedStyles.clear(), t.sandbox) {
                        try {
                            t.sandbox.remove()
                        } catch (e) {}
                        t.sandbox = void 0
                    }
                    t.workers = [], t.fontFamilies.clear(), t.fontCssTexts.clear(), t.requests.clear(), t.tasks = []
                }

                function Kt(t) {
                    const e = t,
                        {
                            url: n,
                            timeout: i,
                            responseType: r
                        } = e,
                        a = h(e, ["url", "timeout", "responseType"]),
                        o = new AbortController,
                        s = i ? setTimeout(() => o.abort(), i) : void 0;
                    return fetch(n, d({
                        signal: o.signal
                    }, a)).then(t => {
                        if (!t.ok) throw new Error("Failed fetch, not 2xx response", {
                            cause: t
                        });
                        switch (r) {
                            case "dataUrl":
                                return t.blob().then(wt);
                            case "text":
                            default:
                                return t.text()
                        }
                    }).finally(() => clearTimeout(s))
                }

                function Jt(t, e) {
                    const {
                        url: n,
                        requestType: i = "text",
                        responseType: r = "text",
                        imageDom: a
                    } = e;
                    let o = n;
                    const {
                        timeout: s,
                        acceptOfImage: l,
                        requests: c,
                        fetch: {
                            requestInit: u,
                            bypassingCache: h,
                            placeholderImage: p
                        },
                        workers: m
                    } = t;
                    "image" === i && (R || I) && t.drawImageCount++;
                    let b = c.get(n);
                    if (!b) {
                        h && (o += (/\?/.test(o) ? "&" : "?") + (new Date).getTime());
                        const t = d({
                            url: o,
                            timeout: s,
                            responseType: r,
                            headers: "image" === i ? {
                                accept: l
                            } : void 0
                        }, u);
                        b = {
                            type: i,
                            resovle: void 0,
                            reject: void 0,
                            response: null
                        }, b.response = (!R && n.startsWith("http") && m.length ? new Promise((e, i) => {
                            m[c.size & m.length - 1].postMessage(d({
                                rawUrl: n
                            }, t)), b.resovle = e, b.reject = i
                        }) : Kt(t)).catch(t => {
                            if (c.delete(n), "image" === i && p) return it("Failed to fetch image base64, trying to use placeholder image", o), "string" == typeof p ? p : p(a);
                            throw t
                        }), c.set(n, b)
                    }
                    return b.response
                }

                function te(t, e, n, i) {
                    return p(this, null, (function*() {
                        if (!ee(t)) return t;
                        for (const [a, o] of ie(t, e)) try {
                            const e = yield Jt(n, {
                                url: o,
                                requestType: i ? "image" : "text",
                                responseType: "dataUrl"
                            });
                            t = t.replace(re(a), `$1${e}$3`)
                        } catch (r) {
                            it("Failed to fetch css data url", a, r)
                        }
                        return t
                    }))
                }

                function ee(t) {
                    return /url\((['"]?)([^'"]+?)\1\)/.test(t)
                }
                const ne = /url\((['"]?)([^'"]+?)\1\)/g;

                function ie(t, e) {
                    const n = [];
                    return t.replace(ne, (t, i, r) => (n.push([r, lt(r, e)]), t)), n.filter(([t]) => !st(t))
                }

                function re(t) {
                    const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                    return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g")
                }

                function ae(t, e) {
                    return p(this, null, (function*() {
                        const {
                            ownerDocument: t,
                            svgStyleElement: n,
                            fontFamilies: i,
                            fontCssTexts: r,
                            tasks: a,
                            font: o
                        } = e;
                        if (t && n && i.size)
                            if (o && o.cssText) {
                                const i = ue(o.cssText, e);
                                n.appendChild(t.createTextNode(i + "\n"))
                            } else {
                                const o = Array.from(t.styleSheets).filter(t => {
                                    try {
                                        return "cssRules" in t && Boolean(t.cssRules.length)
                                    } catch (e) {
                                        return it("Error while reading CSS rules from " + t.href, e), !1
                                    }
                                });
                                yield Promise.all(o.flatMap(t => Array.from(t.cssRules).map((n, i) => p(this, null, (function*() {
                                    if (W(n)) {
                                        let o = i + 1;
                                        const s = n.href;
                                        let l = "";
                                        try {
                                            l = yield Jt(e, {
                                                url: s,
                                                requestType: "text",
                                                responseType: "text"
                                            })
                                        } catch (r) {
                                            it("Error fetch remote css import from " + s, r)
                                        }
                                        const c = l.replace(ne, (t, e, n) => t.replace(n, lt(n, s)));
                                        for (const e of le(c)) try {
                                            t.insertRule(e, e.startsWith("@import") ? o += 1 : t.cssRules.length)
                                        } catch (a) {
                                            it("Error inserting rule from remote css import", {
                                                rule: e,
                                                error: a
                                            })
                                        }
                                    }
                                }))))), o.flatMap(t => Array.from(t.cssRules)).filter(t => {
                                    var e;
                                    return D(t) && ee(t.style.getPropertyValue("src")) && (null == (e = yt(t.style.getPropertyValue("font-family"))) ? void 0 : e.some(t => i.has(t)))
                                }).forEach(i => {
                                    const o = i,
                                        s = r.get(o.cssText);
                                    s ? n.appendChild(t.createTextNode(s + "\n")) : a.push(te(o.cssText, o.parentStyleSheet ? o.parentStyleSheet.href : null, e).then(i => {
                                        i = ue(i, e), r.set(o.cssText, i), n.appendChild(t.createTextNode(i + "\n"))
                                    }))
                                })
                            }
                    }))
                }
                const oe = /(\/\*[\s\S]*?\*\/)/gi,
                    se = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;

                function le(t) {
                    if (null == t) return [];
                    const e = [];
                    let n = t.replace(oe, "");
                    for (;;) {
                        const t = se.exec(n);
                        if (!t) break;
                        e.push(t[0])
                    }
                    n = n.replace(se, "");
                    const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                        r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
                    for (;;) {
                        let t = i.exec(n);
                        if (t) r.lastIndex = i.lastIndex;
                        else {
                            if (t = r.exec(n), !t) break;
                            i.lastIndex = r.lastIndex
                        }
                        e.push(t[0])
                    }
                    return e
                }
                const ce = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                    de = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

                function ue(t, e) {
                    const {
                        font: n
                    } = e, i = n ? null == n ? void 0 : n.preferredFormat : void 0;
                    return i ? t.replace(de, t => {
                        for (;;) {
                            const [e, , n] = ce.exec(t) || [];
                            if (!n) return "";
                            if (n === i) return `src: ${e};`
                        }
                    }) : t
                }

                function he(t, e) {
                    if (V(t)) {
                        const n = t.currentSrc || t.src;
                        if (!st(n)) return [Jt(e, {
                            url: n,
                            imageDom: t,
                            requestType: "image",
                            responseType: "dataUrl"
                        }).then(e => {
                            e && (t.srcset = "", t.dataset.originalSrc = n, t.src = e || "")
                        })];
                        (R || I) && e.drawImageCount++
                    } else if (L(t) && !st(t.href.baseVal)) {
                        const n = t.href.baseVal;
                        return [Jt(e, {
                            url: n,
                            imageDom: t,
                            requestType: "image",
                            responseType: "dataUrl"
                        }).then(e => {
                            e && (t.dataset.originalSrc = n, t.href.baseVal = e || "")
                        })]
                    }
                    return []
                }
                const pe = ["background-image", "border-image-source", "-webkit-border-image", "-webkit-mask-image", "list-style-image"];

                function me(t, e) {
                    return pe.map(n => {
                        const i = t.getPropertyValue(n);
                        return i ? ((R || I) && e.drawImageCount++, te(i, null, e, !0).then(e => {
                            !e || i === e || t.setProperty(n, e, t.getPropertyPriority(n))
                        })) : null
                    }).filter(Boolean)
                }

                function be(t, e) {
                    const {
                        tasks: n
                    } = e;
                    X(t) && (V(t) || B(t)) && n.push(...he(t, e)), M(t) && n.push(...me(t.style, e)), t.childNodes.forEach(t => {
                        be(t, e)
                    })
                }

                function we(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e);
                        if (X(n.node) && L(n.node)) return n.node;
                        const {
                            ownerDocument: i,
                            log: r,
                            tasks: a,
                            svgStyleElement: o,
                            svgDefsElement: s,
                            svgStyles: l,
                            font: c,
                            progress: d,
                            autoDestruct: u,
                            onCloneNode: h,
                            onEmbedNode: m,
                            onCreateForeignObjectSvg: b
                        } = n;
                        r.time("clone node");
                        const w = yield Zt(n.node, n, !0);
                        if (o && i) {
                            let t = "";
                            l.forEach((e, n) => {
                                t += `${e.join(",\n")} {\n  ${n}\n}\n`
                            }), o.appendChild(i.createTextNode(t))
                        }
                        r.timeEnd("clone node"), null == h || h(w), !1 !== c && X(w) && (r.time("embed web font"), yield ae(w, n), r.timeEnd("embed web font")), r.time("embed node"), be(w, n);
                        const f = a.length;
                        let g = 0;
                        const v = () => p(this, null, (function*() {
                            for (;;) {
                                const e = a.pop();
                                if (!e) break;
                                try {
                                    yield e
                                } catch (t) {
                                    it("Failed to run task", t)
                                }
                                null == d || d(++g, f)
                            }
                        }));
                        null == d || d(g, f), yield Promise.all([...Array(4)].map(v)), r.timeEnd("embed node"), null == m || m(w);
                        const x = fe(w, n);
                        return s && x.insertBefore(s, x.children[0]), o && x.insertBefore(o, x.children[0]), u && Ht(n), null == b || b(x), x
                    }))
                }

                function fe(t, e) {
                    const {
                        width: n,
                        height: i
                    } = e, r = ut(n, i, t.ownerDocument), a = r.ownerDocument.createElementNS(r.namespaceURI, "foreignObject");
                    return a.setAttributeNS(null, "x", "0%"), a.setAttributeNS(null, "y", "0%"), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.append(t), r.appendChild(a), r
                }

                function ge(t, e) {
                    return p(this, null, (function*() {
                        var n;
                        const i = yield St(t, e), r = yield we(i), a = ht(r, i.isEnable("removeControlCharacter"));
                        i.autoDestruct || (i.svgStyleElement = Ct(i.ownerDocument), i.svgDefsElement = null == (n = i.ownerDocument) ? void 0 : n.createElementNS(dt, "defs"), i.svgStyles.clear());
                        const o = gt(a, r.ownerDocument);
                        return yield Pt(o, i)
                    }))
                }

                function ve(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e), {
                            log: i,
                            type: r,
                            quality: a,
                            dpi: o
                        } = n, s = yield ge(n);
                        i.time("canvas to blob");
                        const l = yield pt(s, r, a);
                        if (["image/png", "image/jpeg"].includes(r) && o) {
                            const t = yield ft(l.slice(0, 33));
                            let e = new Uint8Array(t);
                            return "image/png" === r ? e = O(e, o) : "image/jpeg" === r && (e = m(e, o)), new Blob([e, l.slice(33)], {
                                type: r
                            })
                        }
                        return i.timeEnd("canvas to blob"), l
                    }))
                }

                function xe(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e), {
                            log: i,
                            quality: r,
                            type: a,
                            dpi: o
                        } = n, s = yield ge(n);
                        i.time("canvas to data url");
                        let l = s.toDataURL(a, r);
                        if (["image/png", "image/jpeg"].includes(a) && o && T && z) {
                            const [t, e] = l.split(",");
                            let n = 0,
                                i = !1;
                            if ("image/png" === a) {
                                const t = C(e);
                                t >= 0 ? (n = 4 * Math.ceil((t + 28) / 3), i = !0) : n = 44
                            } else "image/jpeg" === a && (n = 24);
                            const r = e.substring(0, n),
                                s = e.substring(n),
                                c = window.atob(r),
                                d = new Uint8Array(c.length);
                            for (let a = 0; a < d.length; a++) d[a] = c.charCodeAt(a);
                            const u = "image/png" === a ? O(d, o, i) : m(d, o),
                                h = window.btoa(String.fromCharCode(...u));
                            l = [t, ",", h, s].join("")
                        }
                        return i.timeEnd("canvas to data url"), l
                    }))
                }

                function ke(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e), {
                            width: i,
                            height: r,
                            ownerDocument: a
                        } = n, o = yield xe(n), s = ut(i, r, a), l = s.ownerDocument.createElementNS(s.namespaceURI, "image");
                        return l.setAttributeNS(null, "href", o), l.setAttributeNS(null, "height", "100%"), l.setAttributeNS(null, "width", "100%"), s.appendChild(l), ht(s, n.isEnable("removeControlCharacter"))
                    }))
                }

                function ye(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e), {
                            ownerDocument: i,
                            width: r,
                            height: a,
                            scale: o,
                            type: s
                        } = n, l = "image/svg+xml" === s ? yield ke(n): yield xe(n), c = gt(l, i);
                        return c.width = Math.floor(r * o), c.height = Math.floor(a * o), c.style.width = r + "px", c.style.height = a + "px", c
                    }))
                }

                function Oe(t, e) {
                    return p(this, null, (function*() {
                        return xe(yield St(t, u(d({}, e), {
                            type: "image/jpeg"
                        })))
                    }))
                }

                function _e(t, e) {
                    return p(this, null, (function*() {
                        const n = yield St(t, e), i = yield ge(n);
                        return i.getContext("2d").getImageData(0, 0, i.width, i.height).data
                    }))
                }

                function Se(t, e) {
                    return p(this, null, (function*() {
                        return xe(yield St(t, u(d({}, e), {
                            type: "image/png"
                        })))
                    }))
                }

                function $e(t, e) {
                    return p(this, null, (function*() {
                        return xe(yield St(t, u(d({}, e), {
                            type: "image/webp"
                        })))
                    }))
                }
                t.createContext = $t, t.destroyContext = Ht, t.domToBlob = ve, t.domToCanvas = ge, t.domToDataUrl = xe, t.domToForeignObjectSvg = we, t.domToImage = ye, t.domToJpeg = Oe, t.domToPixel = _e, t.domToPng = Se, t.domToSvg = ke, t.domToWebp = $e, t.loadMedia = vt, t.waitUntilLoad = xt, Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                })
            }))
        },
        "91f4": function(t, e, n) {
            "use strict";
            n("57b7")
        },
        92043: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "w-40",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "mb-3 w-40"
                    }, [n("winui-button", [t._v("Normal button")])], 1), n("div", {
                        staticClass: "mb-3 w-40"
                    }, [n("winui-button", {
                        staticClass: "default"
                    }, [t._v("Default button")])], 1), n("div", {
                        staticClass: "w-40"
                    }, [n("winui-button", {
                        attrs: {
                            disabled: ""
                        }
                    }, [t._v("Disabled button")])], 1)])
                },
                r = [],
                a = ".winui-button{padding:4px 12px;border:1px solid rgba(0,0,0,.1333333333)}.winui-button:disabled{opacity:.5}.winui-button:not(:disabled):hover{background:rgba(0,0,0,.2666666667)}.winui-button:not(:disabled):active,.winui-button:not(:disabled).active{background:rgba(0,0,0,.4)}.winui-button:focus-visible,.winui-button.focused{outline:1px dotted currentColor;outline-offset:-4px}.winui-button.default,.winui-button:focus,.winui-button.focused{background:rgba(0,0,0,.1333333333);border-color:rgba(0,0,0,0)}.winui-button+.winui-button:not([role=tab]){margin-left:.5rem}.winui-button{width:100%}",
                o = n("56c8"),
                s = {
                    name: "Button",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        "921d": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "center-flex-x gap-2 mb-2 w-full"
                    }, [n("span", {
                        staticClass: "w-40 text-right"
                    }, [t._v("Default")]), n("winui-progress", {
                        staticClass: "w-96",
                        attrs: {
                            progress: "80"
                        }
                    })], 1), n("div", {
                        staticClass: "center-flex-x gap-2 mb-2 w-full"
                    }, [n("span", {
                        staticClass: "w-40 text-right"
                    }, [t._v("Paused")]), n("winui-progress", {
                        staticClass: "w-96 paused",
                        attrs: {
                            progress: "60"
                        }
                    })], 1), n("div", {
                        staticClass: "center-flex-x gap-2 mb-2 w-full"
                    }, [n("span", {
                        staticClass: "w-40 text-right"
                    }, [t._v("Error")]), n("winui-progress", {
                        staticClass: "w-96 error",
                        attrs: {
                            progress: "40"
                        }
                    })], 1), n("div", {
                        staticClass: "center-flex-x gap-2 mb-2 w-full"
                    }, [n("span", {
                        staticClass: "w-40 text-right"
                    }, [t._v("Meter")]), n("winui-progress", {
                        staticClass: "w-96 meter",
                        attrs: {
                            progress: "20"
                        }
                    })], 1), n("div", {
                        staticClass: "center-flex-x gap-2 w-full"
                    }, [n("span", {
                        staticClass: "w-40 text-right"
                    }, [t._v("Indeterminate")]), n("winui-progress", {
                        staticClass: "w-96",
                        attrs: {
                            progress: "indeterminate"
                        }
                    })], 1)])
                },
                r = [],
                a = '.winui-progress{height:15px;border:1px solid rgba(0,0,0,.2666666667);margin:2px 0;overflow:hidden}.winui-progress>div{background-color:var(--progress-bg);overflow:hidden;width:var(--progress);height:100%;transition:width var(--transition) linear}.winui-progress.meter>div{background-color:var(--progress-bg--meter)}.winui-progress.paused>div{background-color:var(--progress-bg--paused)}.winui-progress.error>div{background-color:var(--progress-bg--error)}.winui-progress.animate>div::before,.winui-progress.marquee::before{content:"";animation:progressbar 3s linear infinite;display:block;height:100%}.winui-progress.marquee::before{background-image:linear-gradient(to right, rgba(0, 0, 0, 0), var(--progress-bg) 35%, rgba(0, 0, 0, 0) 35%)}@keyframes progressbar{0%{transform:translateX(-40%)}60%{transform:translateX(100%)}100%{transform:translateX(100%)}}',
                o = n("56c8"),
                s = {
                    name: "ProgressBar",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        9312: function(t, e, n) {
            "use strict";
            n("eb0f")
        },
        "937b": function(t, e, n) {
            "use strict";
            n("c740")
        },
        9663: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".ribbon__wrapper {\n}\n\n.ribbon__tab {\n}\n\n.ribbon__tab-item {\n}\n\n.ribbon__tab-item.is-selected {\n}\n\n.ribbon__tab-body {\n}\n\n.ribbon__file-button {\n}\n\n.ribbon__file-menu {\n}\n\n.ribbon__file-main {\n}\n\n.ribbon__file-extra {\n}\n\n.ribbon__file-title {\n}\n\n.ribbon__group {\n}\n\n.ribbon__group-separator {\n}\n\n.ribbon__item {\n}\n\n.ribbon__item-button {\n}\n\n.ribbon__item-button.is-active {\n}\n\n.ribbon__item-group {\n}\n\n.ribbon__item-group .ribbon__item {\n}\n\n.ribbon__item-group .ribbon__item > .ribbon__item-button {\n}\n\n.ribbon__item-group .ribbon__item.is-active > .ribbon__item-button {\n}\n\n.ribbon__item-menu {\n}\n\n.ribbon__item-menu .ribbon__item-button {\n}\n\n.ribbon__item-menu .ribbon__item-button.is-active {\n}\n"
        },
        "9a72": function(t, e, n) {
            "use strict";
            var i = n("694c"),
                r = n("6792"),
                a = n("2b0e");
            e["a"] = a["default"].extend({
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
                        }), this.$root.$emit(r["c"].OpenWindow, e), "progress" === t.type && (this.activeProgress = e)
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
                        this.$root.$emit(r["c"].CloseWindow, this.activeProgress), this.activeProgress = null
                    }
                }
            })
        },
        "9ba7e": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-searchbox", {
                        attrs: {
                            placeholder: "Instant search",
                            instant: ""
                        }
                    })], 1), n("div", [n("winui-searchbox", {
                        attrs: {
                            placeholder: "Regular search"
                        }
                    })], 1)])
                },
                r = [],
                a = ".winui-searchbox>input,input.winui-searchbox{background-color:#fff;border:1px solid rgba(0,0,0,.2);line-height:1;padding:4px 6px}.winui-searchbox>input::placeholder,input.winui-searchbox::placeholder{color:currentColor;opacity:.6}.winui-searchbox>input:focus,input.winui-searchbox:focus{border-color:rgba(0,0,0,.6)}input.winui-searchbox:placeholder-shown{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:var(--search-icon) calc(100% - 8px) center no-repeat;background-size:14px}input.winui-searchbox:disabled{opacity:.5}.winui-searchbox{display:inline-block;position:relative}.winui-searchbox>input{padding-right:30px}.winui-searchbox>button{position:absolute;top:1px;right:1px;min-width:26px;height:calc(100% - 2px);background:var(--search-icon) no-repeat center;background-size:14px;background-color:rgba(0,0,0,.1333333333);padding:0}.winui-searchbox>button:hover,.winui-searchbox>button:focus{background-color:rgba(0,0,0,.2666666667)}.winui-searchbox>button:active{background-color:rgba(0,0,0,.4)}",
                o = n("56c8"),
                s = {
                    name: "Searchbox",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        "9c73": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "z-0 relative"
                    }, [n("desktop-background", {
                        staticClass: "-z-1 absolute pointer-events-none is-main"
                    }), n("div", {
                        staticClass: "desktop__wrapper",
                        style: t.desktopStyle
                    }, [n("div", {
                        staticClass: "z-0 absolute w-full h-full desktop__icon-list"
                    }, t._l(t.items, (function(t, e) {
                        return n("item-icon", {
                            key: t.key,
                            attrs: {
                                item: t,
                                index: e,
                                asDecorator: ""
                            }
                        })
                    })), 1)])], 1)])
                },
                r = [],
                a = n("de84"),
                o = n("c5f4"),
                s = '.icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.desktop-background.is-main{background:var(--bg)}.desktop__wrapper{width:720px;height:480px}.desktop__icon-item:hover{background:rgba(0,0,0,.1333333333)}.desktop__icon-item.is-active{background:rgba(0,0,0,.2666666667)}.desktop__icon-item.is-shortcut .desktop__icon-box::after{width:30%;height:30%;background-image:var(--shortcut);bottom:0;left:0}.desktop__icon-item.is-file .desktop__icon-box::after{width:50%;height:50%;background-image:var(--program);bottom:25%;left:25%}.desktop__icon-box{width:100%;height:calc(100% - 20px)}.desktop__icon-box::after{content:"";position:absolute;background:no-repeat center/contain}.desktop__icon-icon{width:100%;height:100%}.desktop__icon-name{height:20px;line-height:20px}',
                l = n("2f62"),
                c = n("56c8"),
                d = {
                    name: "Desktop",
                    mixins: [Object(c["a"])(s)],
                    data() {
                        return {
                            items: [{
                                key: "bin",
                                lbl: this.$t("bin"),
                                icon: "bin"
                            }, {
                                key: "computer",
                                lbl: this.$t("computer"),
                                icon: "computer"
                            }, {
                                key: "themestudio",
                                lbl: this.$t("themestudio"),
                                icon: "themestudio",
                                type: "shortcut"
                            }, {
                                key: "file",
                                lbl: this.$t("file"),
                                icon: "file",
                                path: "dummy.file"
                            }, {
                                key: "folder",
                                lbl: this.$t("folder"),
                                icon: "folder",
                                path: ""
                            }]
                        }
                    },
                    computed: { ...Object(l["d"])({
                            themeAssets: "themeAssets"
                        }),
                        desktopStyle() {
                            return {
                                "--shortcut": `url('${this.themeAssets.base.icon.shortcut}')`
                            }
                        }
                    },
                    components: {
                        DesktopBackground: a["a"],
                        ItemIcon: o["a"]
                    }
                },
                u = d,
                h = n("2877"),
                p = Object(h["a"])(u, i, r, !1, null, null, null);
            e["default"] = p.exports
        },
        a581: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '.winui-radio input[type="radio"] + label::before {\n}\n\n.winui-radio input[type="radio"] + label::after {\n}\n\n.winui-radio input[type="radio"]:disabled + label::before {\n}\n\n.winui-radio input[type="radio"]:disabled + label::after {\n}\n'
        },
        a966: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "bottom-0 left-0 fixed flex w-full taskbar__wrapper"
                    }, [n("start-button", {
                        attrs: {
                            asDecorator: ""
                        }
                    }), n("div", {
                        staticClass: "flex gap-0.5 w-full taskbar__main"
                    }, t._l(Object.keys(t.items), (function(e) {
                        return n("taskbar-item", {
                            key: e,
                            class: ["taskbar__main-item", {
                                "is-opened": t.items[e]
                            }]
                        }, [n("base-icon", {
                            staticClass: "taskbar__main-icon",
                            attrs: {
                                id: e,
                                icon: t.getIcon(e)
                            }
                        })], 1)
                    })), 1), n("div", {
                        staticClass: "flex items-center taskbar__tray"
                    }, [n("taskbar-network", {
                        staticClass: "taskbar__tray-item",
                        attrs: {
                            asDecorator: ""
                        }
                    }), n("taskbar-battery", {
                        staticClass: "taskbar__tray-item"
                    }), n("taskbar-volume", {
                        staticClass: "taskbar__tray-item",
                        attrs: {
                            asDecorator: ""
                        }
                    }), n("taskbar-datetime", {
                        staticClass: "taskbar__tray-item is-datetime"
                    }), n("taskbar-desktop", {
                        staticClass: "taskbar__tray-item is-desktop"
                    })], 1)], 1)])
                },
                r = [],
                a = n("58cd"),
                o = n("2159"),
                s = n("a88c"),
                l = n("4e5e"),
                c = n("1404"),
                d = n("88e5"),
                u = n("e0ee"),
                h = n("c561"),
                p = ".icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.taskbar__wrapper{height:var(--taskbar-height);background:rgba(255,255,255,.8);box-shadow:0 -1px 20px rgba(0,0,0,.0666666667)}.taskbar__main-item{width:60px}.taskbar__main-item:active .taskbar__main-icon{transform:translate(1px, 1px)}.taskbar__main-item.is-opened{background:rgba(0,0,0,.1333333333)}.taskbar__main-item.is-active{background:rgba(0,0,0,.2)}.taskbar__main-icon{width:28px;height:28px;pointer-events:none}.taskbar__tray-item{--taskbar-item--desktop: 20px;width:32px;height:100%;position:relative}@media(hover: none){.taskbar__tray-item{--taskbar-item--desktop: 26px}}.taskbar__tray-item.is-datetime{width:auto}.taskbar__tray-item.is-datetime .taskbar-popup{transform:translateX(var(--taskbar-item--desktop))}.taskbar__tray-item.is-desktop{width:var(--taskbar-item--desktop)}.taskbar__tray .taskbar-item{width:100%;height:100%}.taskbar__tray .taskbar-item.is-datetime{padding:0 4px}.taskbar__tray .taskbar-item.is-desktop{background:rgba(0,0,0,.1333333333)}.taskbar__tray .taskbar-item.is-desktop:hover{background:rgba(0,0,0,.2)}.taskbar__tray .taskbar-item.is-desktop:active{background:rgba(0,0,0,.2666666667)}.startbutton-wrapper.is-active,.startbutton-wrapper:hover,.startbutton-wrapper:focus{background:rgba(0,0,0,.1333333333)}.startbutton-icon{width:100%;height:100%}.taskbar__wrapper{position:static;width:600px}",
                m = n("2f62"),
                b = n("56c8"),
                w = {
                    name: "Taskbar",
                    mixins: [Object(b["a"])(p)],
                    computed: { ...Object(m["d"])({
                            themeAssets: "themeAssets"
                        }),
                        items() {
                            return {
                                bin: !1,
                                computer: !1,
                                themestudio: !0,
                                calc: !1
                            }
                        }
                    },
                    methods: {
                        getIcon(t) {
                            return this.themeAssets.base.icon[t]
                        }
                    },
                    components: {
                        BaseIcon: a["a"],
                        StartButton: o["a"],
                        TaskbarBattery: s["a"],
                        TaskbarDatetime: l["a"],
                        TaskbarDesktop: c["a"],
                        TaskbarItem: d["a"],
                        TaskbarNetwork: u["a"],
                        TaskbarVolume: h["a"]
                    }
                },
                f = w,
                g = n("2877"),
                v = Object(g["a"])(f, i, r, !1, null, null, null);
            e["default"] = v.exports
        },
        ac66: function(t, e, n) {},
        ac90: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-slider {\n}\n\n.winui-slider:disabled {\n}\n\n.winui-slider::-webkit-slider-thumb,\n.winui-slider::-moz-range-thumb {\n}\n\n.winui-slider::-webkit-slider-runnable-track,\n.winui-slider::-moz-range-track {\n}\n"
        },
        ad1f: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.noscroll ? n("div", {
                        class: ["p-2 border border-black/60 border-solid scrollbox", t.containerClass]
                    }, [t._t("default")], 2) : n("scrollbar-container", {
                        staticClass: "border border-black/60 border-solid scrollbox"
                    }, [n("div", {
                        class: ["p-2 overflow-auto", t.containerClass]
                    }, [t._t("default")], 2)])
                },
                r = [],
                a = n("6fba"),
                o = {
                    props: {
                        containerClass: String,
                        noscroll: Boolean
                    },
                    components: {
                        ScrollbarContainer: a["a"]
                    }
                },
                s = o,
                l = n("2877"),
                c = Object(l["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        ad50: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("winui-tabs", {
                        attrs: {
                            tabs: t.tabs
                        },
                        scopedSlots: t._u([{
                            key: "taskbar",
                            fn: function() {
                                return [n("text-regular", [t._v(t._s(t.$t("notification-area-help")))])]
                            },
                            proxy: !0
                        }, {
                            key: "start",
                            fn: function() {
                                return [n("text-regular", [t._v(t._s(t.$t("start-menu-help")))])]
                            },
                            proxy: !0
                        }])
                    })], 1)
                },
                r = [],
                a = n("78d0"),
                o = ".winui-button{padding:4px 12px;border:1px solid rgba(0,0,0,.1333333333)}.winui-button:disabled{opacity:.5}.winui-button:not(:disabled):hover{background:rgba(0,0,0,.2666666667)}.winui-button:not(:disabled):active,.winui-button:not(:disabled).active{background:rgba(0,0,0,.4)}.winui-button:focus-visible,.winui-button.focused{outline:1px dotted currentColor;outline-offset:-4px}.winui-button.default,.winui-button:focus,.winui-button.focused{background:rgba(0,0,0,.1333333333);border-color:rgba(0,0,0,0)}.winui-button+.winui-button:not([role=tab]){margin-left:.5rem}.winui-tabs{height:100%;min-height:0;display:flex;flex-direction:column}.winui-tabs [role=tablist]{margin:0;padding:0;text-indent:0;list-style-type:none;display:flex}.winui-tabs [role=tablist] button{padding:2px 6px;display:block;text-decoration:none}.winui-tabs [role=tablist] button[aria-selected]{background:rgba(0,0,0,.1333333333)}.winui-tabs [role=tablist].justified button{flex-grow:1;text-align:center}.winui-tabs [role=tabpanel]{height:100%;min-height:0;padding:8px 0;position:relative;overflow:auto}.winui-tabs [role=tabpanel]:not([hidden]){display:flex;flex-direction:column}.winui-tabs{max-width:300px}",
                s = n("56c8"),
                l = {
                    components: {
                        TextRegular: a["a"]
                    },
                    name: "Tabs",
                    mixins: [Object(s["a"])(o)],
                    data() {
                        return {
                            tabs: {
                                taskbar: this.$t("taskbar"),
                                start: this.$t("start-menu")
                            }
                        }
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["default"] = u.exports
        },
        aed2: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-button {\n}\n\n.winui-button:disabled {\n}\n\n.winui-button:not(:disabled):hover {\n}\n\n.winui-button:not(:disabled):active {\n}\n\n.winui-button:not(:disabled).default {\n}\n"
        },
        b23b: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".winui-textbox {\n}\n\n.winui-textbox:disabled {\n}\n"
        },
        b28e: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-radio", {
                        attrs: {
                            id: "p-power-off",
                            name: "p-power-plan"
                        }
                    }, [t._v(" " + t._s(t.$t("power")) + " ")])], 1), n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-radio", {
                        attrs: {
                            id: "p-power-balance",
                            name: "p-power-plan"
                        }
                    }, [t._v(" " + t._s(t.$t("balanced")) + " ")])], 1), n("div", [n("winui-radio", {
                        attrs: {
                            id: "p-power-saver",
                            name: "p-power-plan",
                            disabled: ""
                        }
                    }, [t._v(" " + t._s(t.$t("power-saver")) + " ")])], 1)])
                },
                r = [],
                a = '.winui-radio input[type=radio]{appearance:none;border:none;margin:0;background:0;opacity:0}.winui-radio input[type=radio]+label{display:inline-flex;align-items:center;position:relative;margin-left:20px}.winui-radio input[type=radio]+label::before{content:"";position:absolute;top:0;left:-20px;display:inline-block;width:14px;height:14px;margin-right:6px;border-radius:50%;border:1px solid currentColor}.winui-radio input[type=radio]:not(:disabled):hover+label::before{background:rgba(0,0,0,.1333333333)}.winui-radio input[type=radio]:checked+label::after{content:"";display:block;width:var(--radio-dot-size);height:var(--radio-dot-size);top:calc((14px - var(--radio-dot-size))/2);left:calc(-20px + (14px - var(--radio-dot-size))/2);position:absolute;background:currentColor;border-radius:50%}.winui-radio input[type=radio]:focus-visible+label{outline:1px dotted currentColor}.winui-radio input[type=radio]:disabled+label{filter:grayscale(1);opacity:.5}.winui-radio input[type=radio]:disabled:not(:checked)+label::before{opacity:.5}',
                o = n("56c8"),
                s = {
                    name: "RadioButton",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        b321: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-checkbox", {
                        attrs: {
                            id: "p-lock"
                        },
                        model: {
                            value: t.checked,
                            callback: function(e) {
                                t.checked = e
                            },
                            expression: "checked"
                        }
                    }, [t._v(" " + t._s(t.$t("taskbar-lock")) + " ")])], 1), n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-checkbox", {
                        attrs: {
                            id: "p-autohide"
                        }
                    }, [t._v(" " + t._s(t.$t("taskbar-hide")) + " ")])], 1), n("div", [n("winui-checkbox", {
                        attrs: {
                            id: "p-usesmall",
                            disabled: ""
                        }
                    }, [t._v(" " + t._s(t.$t("taskbar-small")) + " ")])], 1)])
                },
                r = [],
                a = '\ufeff.winui-checkbox input[type=checkbox]{appearance:none;background:none;border:none;margin:0;opacity:0}.winui-checkbox input[type=checkbox]+label{display:inline-flex;align-items:center;position:relative}.winui-checkbox input[type=checkbox]+label::before{width:var(--checkbox-size);height:var(--checkbox-size);content:"";display:inline-block;margin-right:6px;border:1px solid rgba(0,0,0,.2666666667)}.winui-checkbox input[type=checkbox]:not(:disabled):hover+label::before{background:rgba(0,0,0,.1333333333)}.winui-checkbox input[type=checkbox]:focus-visible+label{outline:1px dotted currentColor}.winui-checkbox input[type=checkbox]:checked+label::after{width:var(--checkbox-size);height:var(--checkbox-size);position:absolute;content:"✔";display:block;font-size:var(--checkbox-size);font-weight:bold;line-height:var(--checkbox-size)}.winui-checkbox input[type=checkbox]:disabled+label{opacity:.5}',
                o = n("56c8"),
                s = {
                    name: "Checkbox",
                    mixins: [Object(o["a"])(a)],
                    data() {
                        return {
                            checked: !0
                        }
                    }
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        b5f7: function(t, e, n) {
            "use strict";
            n("f36b")
        },
        bcc7: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("winui-balloon", {
                        staticClass: "relative mb-6"
                    }, [t._v(" Hey there! This is a default balloon notification. ")]), n("winui-balloon", {
                        staticClass: "is-top is-left relative"
                    }, [t._v(" This balloon is aligned to the top left of its anchor. ")])], 1)
                },
                r = [],
                a = ".winui-balloon{display:flex;align-items:flex-start;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.4);padding:12px 12px 12px 16px;max-width:380px}.winui-balloon::before{content:\"\";background:url(\"data:image/svg+xml,<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.5 1.5V19.5H18.5L0.5 1.5Z' fill='%23fff' stroke='%23fff'/><path d='M1 19.5H0.5V1.5L18.5 19.5H18' stroke='rgba(0, 0, 0, 0.2)'/></svg>\");position:absolute;width:18px;height:18px;top:-18px;left:16px}.winui-balloon.is-top::before{bottom:-18px;top:unset;transform:scale(-1)}html[dir=rtl] .winui-balloon.is-top::before{transform:scaleY(-1)}.winui-balloon.is-top.is-right::before{transform:scaleY(-1)}.winui-balloon.is-left::before{left:unset;right:16px}.winui-balloon.is-left.is-bottom::before{transform:scaleX(-1)}html[dir=rtl] .winui-balloon.is-left.is-bottom::before{transform:none}",
                o = n("56c8"),
                s = {
                    name: "Balloon",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        bf67: function(t, e, n) {
            "use strict";
            var i = n("01b4"),
                r = n("2b0e"),
                a = n("6271");
            const o = "iconDragEnd";
            e["a"] = r["default"].extend({
                mixins: [a["a"]],
                data() {
                    return {}
                },
                beforeDestroy() {
                    this.$root.$off(o)
                },
                methods: {
                    emitDrag(t) {
                        this.$root.$emit(o, t)
                    },
                    handleDrag() {
                        this.$root.$on(o, t => {
                            const e = t.find(t => t.key === this.item.key);
                            if (!e) return;
                            const {
                                x: n,
                                y: r
                            } = e, {
                                x: a,
                                y: o
                            } = this.item;
                            n && r && (n !== a || r !== o) && this.$store.dispatch(i["a"].ShortcutMove, { ...this.item,
                                x: n,
                                y: r
                            })
                        })
                    }
                }
            })
        },
        c0c5: function(t, e, n) {
            "use strict";
            n("c6d5")
        },
        c1ff: function(t, e, n) {
            "use strict";
            n("ea48")
        },
        c5f4: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", {
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
                    }, [n("span", {
                        staticClass: "relative desktop__icon-box"
                    }, [n("base-icon", {
                        staticClass: "desktop__icon-icon",
                        attrs: {
                            id: t.item.icon,
                            icon: t.itemIcon
                        }
                    })], 1), t.renaming ? n("input", {
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
                    }) : n("span", {
                        staticClass: "max-w-full overflow-hidden text-black text-center text-ellipsis whitespace-nowrap shrink-0 desktop__icon-name"
                    }, [t._v(" " + t._s(t.itemName.new) + " ")])])
                },
                r = [],
                a = n("0e9a"),
                o = n("2f62"),
                s = n("58cd"),
                l = n("743b"),
                c = n("01b4"),
                d = n("4cca"),
                u = n("0f35"),
                h = n("bf67"),
                p = n("51e6");
            const m = {
                sm: 50,
                md: 80,
                lg: 120
            };
            var b = {
                    mixins: [h["a"]],
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
                    computed: { ...l["c"].mapState({
                            autoIcons: "autoIcons",
                            sizeIcons: "sizeIcons"
                        }),
                        ...Object(o["f"])({
                            trash: "trash",
                            clipboardItem: "clipboardItem",
                            shortcuts: "shortcuts"
                        }),
                        ...Object(o["d"])({
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
                            return Object(a["h"])(t) || Object(u["e"])(t) ? t : ("bin" === t && this.trash.length > 0 && (t = "bin-full"), this.asDecorator ? this.themeAssets.base.icon[t] : this.themeData.icon[t])
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
                                const t = Object(d["b"])(this.item.path);
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
                                const n = this.shortcuts.find(e => e.path === t && "folder" === e.type);
                                if (n) this.itemName = {
                                    old: e,
                                    new: e
                                }, this.itemExt = {
                                    old: "",
                                    new: ""
                                };
                                else {
                                    const {
                                        name: t,
                                        ext: n
                                    } = Object(a["r"])(e);
                                    this.itemName = {
                                        old: t,
                                        new: t
                                    }, this.itemExt = {
                                        old: n,
                                        new: n
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
                                newName: n
                            } = this;
                            if (this.itemName.new && n !== e) try {
                                const e = {
                                    id: t.key,
                                    name: n
                                };
                                await this.$store.dispatch(c["a"].ShortcutRename, e), this.$emit("rename", null)
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
                                n = this.index % e,
                                i = Math.floor(this.index / e) * this.size.width,
                                r = (n - Math.floor(n / e)) * this.size.height;
                            this.position = {
                                x: i,
                                y: r
                            }
                        }
                    },
                    components: {
                        BaseIcon: s["a"]
                    }
                },
                w = b,
                f = (n("06c4"), n("2877")),
                g = Object(f["a"])(w, i, r, !1, null, null, null);
            e["a"] = g.exports
        },
        c6d5: function(t, e, n) {},
        c740: function(t, e, n) {},
        c752: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ribbon", {
                        key: t.ribbonKey,
                        ref: "ribbonPaint",
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-file-menu-main", {
                                    attrs: {
                                        items: t.ribbonShortcuts,
                                        iconSet: t.icon
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "extra",
                            fn: function() {
                                return [n("ribbon-file-menu-extra", {
                                    attrs: {
                                        title: t.$t("recent-pictures")
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, [n("ribbon-tab", {
                        attrs: {
                            id: "paint-home",
                            title: t.$t("home"),
                            "is-default": t.activeTool !== t.tools.text
                        }
                    }, [n("ribbon-group-clipboard"), n("ribbon-group", {
                        staticClass: "grid grid-cols-[auto_auto]",
                        attrs: {
                            title: t.$t("image")
                        }
                    }, [n("ribbon-item", {
                        ref: "select",
                        attrs: {
                            variant: "split",
                            size: "large",
                            icon: t.isRectSelect ? t.icon.selectrect : t.icon.selectfree,
                            name: t.$t("select"),
                            active: t.isActiveTool(t.tools.select)
                        },
                        on: {
                            click: function(e) {
                                return t.selectTool(t.tools.select)
                            }
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "flex flex-col",
                                    attrs: {
                                        items: t.selectMenuItems
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.crop,
                            name: t.$t("crop"),
                            disabled: !t.hasSelection
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("cropSelected")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.resize,
                            name: t.$t("resize"),
                            "data-test-resize-button": ""
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update", "showResize", !0)
                            }
                        }
                    }), n("ribbon-item", {
                        ref: "rotate",
                        attrs: {
                            variant: "dropdown",
                            icon: t.icon.rotate,
                            name: t.$t("rotate")
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "flex flex-col",
                                    attrs: {
                                        items: t.rotateMenuItems
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1), n("ribbon-group", {
                        staticClass: "center-flex flex-col gap-1.5",
                        attrs: {
                            title: t.$t("tools")
                        }
                    }, [n("ribbon-item-group", t._l(["pencil", "bucket", "text"], (function(e) {
                        return n("ribbon-item", {
                            key: e,
                            attrs: {
                                icon: t.icon[e],
                                active: t.isActiveTool(e)
                            },
                            on: {
                                click: function(n) {
                                    return t.selectTool(e)
                                }
                            }
                        })
                    })), 1), n("ribbon-item-group", t._l(["eraser", "picker", "zoomer"], (function(e) {
                        return n("ribbon-item", {
                            key: e,
                            attrs: {
                                icon: t.icon[e],
                                active: t.isActiveTool(e),
                                disabled: "zoomer" === e
                            },
                            on: {
                                click: function(n) {
                                    return t.selectTool(e)
                                }
                            }
                        })
                    })), 1)], 1), n("ribbon-group", [n("ribbon-item", {
                        attrs: {
                            size: "large",
                            icon: t.icon.brush,
                            name: t.$t("brush"),
                            active: t.isActiveTool(t.tools.brush)
                        },
                        on: {
                            click: function(e) {
                                return t.selectTool(t.tools.brush)
                            }
                        }
                    })], 1), n("ribbon-group", {
                        staticClass: "items-start grid grid-cols-[auto_auto] grid-rows-3",
                        attrs: {
                            title: t.$t("shapes")
                        }
                    }, [n("div", {
                        staticClass: "flex flex-wrap row-span-3 border border-black/10 border-solid w-[140px] h-[72px] overflow-auto ribbon__paint-shapes",
                        on: {
                            click: function(e) {
                                return t.selectTool(t.tools.shape)
                            }
                        }
                    }, t._l(Object.values(t.shapes), (function(e) {
                        return n("ribbon-item", {
                            key: e,
                            attrs: {
                                icon: t.icon[e],
                                active: t.isActiveTool(t.tools.shape) && t.activeShape === e
                            },
                            on: {
                                click: function(n) {
                                    return t.$emit("update", "activeShape", e)
                                }
                            }
                        })
                    })), 1), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.outline,
                            name: t.$t("outline"),
                            active: t.isActiveTool(t.tools.shape) && t.activeOutline,
                            disabled: !t.isActiveTool(t.tools.shape)
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update", "activeOutline", !t.activeOutline)
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.fill,
                            name: t.$t("fill"),
                            active: t.isActiveTool(t.tools.shape) && t.activeFill,
                            disabled: !t.isActiveTool(t.tools.shape)
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update", "activeFill", !t.activeFill)
                            }
                        }
                    })], 1), n("ribbon-group", [n("ribbon-item", {
                        ref: "size",
                        attrs: {
                            variant: "dropdown",
                            size: "large",
                            icon: t.icon.size,
                            name: t.$t("size"),
                            disabled: t.isSizeDisabled
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "flex flex-col is-stroke-size"
                                }, t._l([1, 2, 3, 4], (function(e) {
                                    return n("ribbon-item-button", {
                                        key: e,
                                        attrs: {
                                            selected: t.stroke === e
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.$emit("update", "stroke", e)
                                            }
                                        }
                                    }, [n("span", {
                                        class: ["w-full", t.getStrokeWidth(e)]
                                    })])
                                })), 1)]
                            },
                            proxy: !0
                        }])
                    })], 1), n("ribbon-group-colors", t._g(t._b({}, "ribbon-group-colors", t.colorsComponentProps, !1), t.colorsComponentListeners))], 1), n("ribbon-tab", {
                        attrs: {
                            id: "paint-view",
                            title: t.$t("view")
                        }
                    }, [n("ribbon-group", {
                        staticClass: "flex",
                        attrs: {
                            title: t.$t("zoom")
                        }
                    }, [n("ribbon-item", {
                        attrs: {
                            size: "large",
                            name: t.$t("zoom-in"),
                            icon: t.icon.zoomin
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("zoomIn")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            size: "large",
                            name: t.$t("zoom-out"),
                            icon: t.icon.zoomout
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("zoomOut")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            size: "large",
                            name: "100%",
                            icon: t.icon.zoom100,
                            "data-test-zoom-reset": ""
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("zoom100")
                            }
                        }
                    })], 1), n("ribbon-group", {
                        staticClass: "grid grid-rows-3",
                        attrs: {
                            title: t.$t("show-or-hide")
                        }
                    }, [n("winui-checkbox", {
                        staticClass: "center-flex-x p-1",
                        attrs: {
                            id: "rulers",
                            disabled: ""
                        }
                    }, [t._v(t._s(t.$t("rulers")))]), n("winui-checkbox", {
                        staticClass: "center-flex-x p-1",
                        attrs: {
                            id: "gridlines",
                            disabled: ""
                        }
                    }, [t._v(t._s(t.$t("gridlines")))]), n("winui-checkbox", {
                        staticClass: "center-flex-x p-1",
                        attrs: {
                            id: "statusbar",
                            value: t.showStatusBar,
                            "data-test-statusbar-toggle": ""
                        },
                        on: {
                            input: function(e) {
                                return t.$emit("update:showStatusBar", e)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("status-bar")) + " ")])], 1), n("ribbon-group", {
                        staticClass: "flex",
                        attrs: {
                            title: t.$t("display")
                        }
                    }, [n("ribbon-item", {
                        attrs: {
                            size: "large",
                            name: t.$t("full-screen"),
                            icon: t.icon.fullscreen
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("enterFullScreen")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            size: "large",
                            name: t.$t("thumbnail"),
                            icon: t.icon.thumbnail,
                            disabled: ""
                        }
                    })], 1)], 1), t.activeTool === t.tools.text && t.hasText ? n("ribbon-tab", {
                        attrs: {
                            id: "paint-text",
                            title: t.$t("text"),
                            isDefault: t.activeTool === t.tools.text && t.hasText
                        }
                    }, [n("ribbon-group-clipboard"), n("ribbon-group", {
                        staticClass: "items-center gap-x-1 grid grid-cols-[auto_auto] grid-rows-2",
                        attrs: {
                            title: t.$t("font")
                        }
                    }, [n("ribbon-item-combobox", {
                        staticClass: "col-span-2",
                        attrs: {
                            items: t.fonts
                        },
                        model: {
                            value: t.selectedTextFormat.fontFamily,
                            callback: function(e) {
                                t.$set(t.selectedTextFormat, "fontFamily", e)
                            },
                            expression: "selectedTextFormat.fontFamily"
                        }
                    }), n("ribbon-item-combobox", {
                        staticClass: "w-[48px]",
                        attrs: {
                            items: t.sizes
                        },
                        model: {
                            value: t.selectedTextFormat.fontSize,
                            callback: function(e) {
                                t.$set(t.selectedTextFormat, "fontSize", e)
                            },
                            expression: "selectedTextFormat.fontSize"
                        }
                    }), n("ribbon-item-group", [n("ribbon-item", {
                        attrs: {
                            icon: t.icon.fontbold,
                            active: "bold" === t.selectedTextFormat.fontWeight
                        },
                        on: {
                            click: function(e) {
                                return t.toggleProp("fontWeight", "bold", "normal")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.fontitalic,
                            active: "italic" === t.selectedTextFormat.fontStyle
                        },
                        on: {
                            click: function(e) {
                                return t.toggleProp("fontStyle", "italic", "normal")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.fontunderline,
                            active: t.selectedTextFormat.underline
                        },
                        on: {
                            click: function(e) {
                                return t.toggleProp("underline", !0, !1)
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon.fontstrike,
                            active: t.selectedTextFormat.linethrough
                        },
                        on: {
                            click: function(e) {
                                return t.toggleProp("linethrough", !0, !1)
                            }
                        }
                    })], 1)], 1), n("ribbon-group", {
                        staticClass: "flex flex-col justify-start",
                        attrs: {
                            title: t.$t("background")
                        }
                    }, [n("ribbon-item", {
                        attrs: {
                            name: t.$t("opaque"),
                            icon: t.icon.textopaque,
                            active: "transparent" !== t.textBgColor
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update", "textBgColor", t.color2)
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            name: t.$t("transparent"),
                            icon: t.icon.texttransparent,
                            active: "transparent" === t.textBgColor
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("update", "textBgColor", "transparent")
                            }
                        }
                    })], 1), n("ribbon-group-colors", t._g(t._b({}, "ribbon-group-colors", t.colorsComponentProps, !1), t.colorsComponentListeners))], 1) : t._e()], 1)
                },
                r = [],
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ribbon-group", {
                        staticClass: "grid grid-cols-[auto_auto_auto] is-ribbon-colors",
                        attrs: {
                            title: t.$t("colors")
                        }
                    }, [n("ribbon-item", {
                        staticClass: "is-color1",
                        attrs: {
                            size: "large",
                            name: t.$t("color") + " 1",
                            active: t.activeColor1
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("activeColor1", !0)
                            }
                        }
                    }, [n("ribbon-item-color", {
                        staticClass: "p-0.5 w-[32px] h-[32px]",
                        attrs: {
                            color: t.color1
                        }
                    })], 1), n("ribbon-item", {
                        staticClass: "is-color2",
                        attrs: {
                            size: "large",
                            name: t.$t("color") + " 2",
                            active: !t.activeColor1
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("activeColor1", !1)
                            }
                        }
                    }, [n("ribbon-item-color", {
                        staticClass: "p-0.5 w-[32px] h-[32px]",
                        attrs: {
                            color: t.color2
                        }
                    })], 1), n("div", {
                        staticClass: "gap-0.5 grid grid-cols-[repeat(10,1fr)] is-color-gallery"
                    }, [t._l(t.colors, (function(e, i) {
                        return n("ribbon-item", {
                            key: i,
                            on: {
                                click: function(n) {
                                    return t.$emit("select", e)
                                }
                            }
                        }, [n("ribbon-item-color", {
                            staticClass: "p-px w-[22px] h-[22px]",
                            attrs: {
                                color: e
                            }
                        })], 1)
                    })), t._l(10, (function(t, e) {
                        return n("ribbon-item", {
                            key: "placeholder-" + e,
                            attrs: {
                                disabled: ""
                            }
                        }, [n("ribbon-item-color", {
                            staticClass: "p-px w-[22px] h-[22px]",
                            attrs: {
                                color: "transparent"
                            }
                        })], 1)
                    }))], 2)], 1)
                },
                o = [],
                s = n("74f2"),
                l = n("9b10"),
                c = n("382f"),
                d = n("2299");
            const u = {
                activeColor1: {
                    type: Boolean,
                    required: !0
                },
                color1: {
                    type: String,
                    required: !0
                },
                color2: {
                    type: String,
                    required: !0
                }
            };
            var h = {
                    props: u,
                    computed: {
                        colors: () => d["a"]
                    },
                    components: {
                        RibbonGroup: s["a"],
                        RibbonItem: l["a"],
                        RibbonItemColor: c["a"]
                    }
                },
                p = h,
                m = (n("1bb3"), n("2877")),
                b = Object(m["a"])(p, a, o, !1, null, null, null),
                w = b.exports,
                f = n("bb45"),
                g = n("5440"),
                v = n("7257"),
                x = n("a3d5"),
                k = n("c838"),
                y = n("4761"),
                O = n("92fc"),
                _ = n("051f"),
                S = n("7abd"),
                $ = n("038f"),
                C = n("90b4"),
                Q = {
                    props: {
                        icon: {
                            type: Object,
                            required: !0
                        },
                        ribbonShortcuts: {
                            type: Array,
                            required: !0
                        },
                        activeTool: {
                            type: String,
                            required: !0
                        },
                        activeShape: {
                            type: String,
                            default: null
                        },
                        activeOutline: {
                            type: Boolean,
                            default: !0
                        },
                        activeFill: {
                            type: Boolean,
                            default: !1
                        },
                        stroke: {
                            type: Number,
                            required: !0
                        },
                        isTransparentSelection: Boolean,
                        hasSelection: Boolean,
                        isRectSelect: Boolean,
                        hasText: Boolean,
                        showStatusBar: Boolean,
                        textFormat: {
                            type: Object
                        },
                        textBgColor: String,
                        ...u
                    },
                    data() {
                        return {
                            tools: g["i"],
                            shapes: g["h"],
                            ribbonKey: 0,
                            selectedTextFormat: this.textFormat
                        }
                    },
                    computed: {
                        fonts: () => Object.keys(f["a"]).map(t => ({
                            label: f["a"][t],
                            value: t
                        })),
                        sizes: () => f["b"].map(t => ({
                            label: t.toString(),
                            value: t
                        })),
                        isSizeDisabled() {
                            return [g["i"].bucket, g["i"].text, g["i"].picker, g["i"].select, g["i"].zoomer].includes(this.activeTool)
                        },
                        selectMenuItems() {
                            return [{
                                label: this.$t("selection-shapes")
                            }, {
                                label: this.$t("rectangular-selection"),
                                value: "rect",
                                icon: this.icon.selectrect,
                                selected: this.activeTool === this.tools.select && this.isRectSelect,
                                click: () => this.setSelectType(!0)
                            }, {
                                label: this.$t("free-form-selection"),
                                value: "free",
                                icon: this.icon.selectfree,
                                selected: this.activeTool === this.tools.select && !this.isRectSelect,
                                click: () => this.setSelectType(!1)
                            }, {
                                label: this.$t("selection-options")
                            }, {
                                label: this.$t("select-all"),
                                value: "all",
                                icon: this.icon.selectall,
                                click: () => this.$emit("selectAll")
                            }, {
                                label: this.$t("invert-selection"),
                                value: "invert",
                                icon: this.icon.selectinvert,
                                disabled: !this.hasSelection,
                                click: () => this.$emit("invertSelect")
                            }, {
                                label: this.$t("delete"),
                                value: "delete",
                                icon: this.icon.delete,
                                disabled: !this.hasSelection,
                                click: () => this.$emit("deleteSelected")
                            }, {
                                label: this.$t("transparent-selection"),
                                value: "transparent",
                                icon: "checkbox",
                                selected: this.isTransparentSelection,
                                click: () => this.setTransparentSelection()
                            }]
                        },
                        rotateMenuItems() {
                            return [{
                                label: this.$t("rotate-right-90"),
                                value: "rotate-right-90",
                                icon: this.icon.rotate,
                                click: () => this.$emit("rotate", 90, !1, !1)
                            }, {
                                label: this.$t("rotate-left-90"),
                                value: "rotate-left-90",
                                icon: this.icon.rotate,
                                iconClass: "scale-x-[-1]",
                                click: () => this.$emit("rotate", -90, !1, !1)
                            }, {
                                label: this.$t("rotate-180"),
                                value: "rotate-180",
                                icon: this.icon.rotate180,
                                click: () => this.$emit("rotate", 180, !1, !1)
                            }, {
                                label: this.$t("flip-vertical"),
                                value: "flip-vertical",
                                icon: this.icon.flip,
                                iconClass: "-rotate-90",
                                click: () => this.$emit("rotate", 0, !1, !0)
                            }, {
                                label: this.$t("flip-horizontal"),
                                value: "flip-horizontal",
                                icon: this.icon.flip,
                                click: () => this.$emit("rotate", 0, !0, !1)
                            }]
                        },
                        colorsComponentProps() {
                            return {
                                color1: this.color1,
                                color2: this.color2,
                                activeColor1: this.activeColor1
                            }
                        },
                        colorsComponentListeners() {
                            return {
                                select: t => this.$emit("update", this.activeColor1 ? "color1" : "color2", t),
                                activeColor1: t => this.$emit("update", "activeColor1", t)
                            }
                        }
                    },
                    watch: {
                        hasText() {
                            this.ribbonKey++
                        },
                        selectedTextFormat: {
                            deep: !0,
                            handler(t) {
                                this.$emit("update", "textFormat", t)
                            }
                        }
                    },
                    methods: {
                        isActiveTool(t) {
                            return this.activeTool === t
                        },
                        activateTool(t) {
                            return this.activeTool === t ? "active" : ""
                        },
                        selectTool(t) {
                            this.$emit("update", "activeTool", t)
                        },
                        setTransparentSelection() {
                            this.$emit("update", "isTransparentSelection", !this.isTransparentSelection)
                        },
                        setSelectType(t) {
                            this.selectTool(this.tools.select), this.$emit("update", {
                                isRectSelect: t
                            })
                        },
                        getStrokeWidth(t) {
                            return {
                                "h-[1px]": 1 === t,
                                "h-[2px]": 2 === t,
                                "h-[3px]": 3 === t,
                                "h-[4px]": 4 === t
                            }
                        },
                        toggleProp(t, e, n) {
                            this.selectedTextFormat[t] = this.selectedTextFormat[t] === e ? n : e
                        },
                        handleFileMenuItemClicked(t) {
                            t && (t.label === this.$t("new") && this.ribbonKey++, t.onClick())
                        }
                    },
                    components: {
                        Ribbon: v["a"],
                        RibbonFileMenuMain: k["a"],
                        RibbonFileMenuExtra: x["a"],
                        RibbonGroup: s["a"],
                        RibbonItem: l["a"],
                        RibbonItemButton: O["a"],
                        RibbonItemCombobox: _["a"],
                        RibbonItemGroup: S["a"],
                        RibbonItemMenu: $["a"],
                        RibbonGroupClipboard: y["a"],
                        RibbonGroupColors: w,
                        RibbonTab: C["a"]
                    }
                },
                P = Q,
                E = (n("cc49"), Object(m["a"])(P, i, r, !1, null, null, null));
            e["a"] = E.exports
        },
        c88e: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.showAds && t.isPwa ? n("div", {
                        attrs: {
                            id: "126352-" + t.adUnit
                        }
                    }, [n("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/gen.js?type=" + t.adUnit
                        }
                    }), n("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/requestform.js?siteId=126352&formatId=" + t.adUnit
                        }
                    })], 1) : t._e()
                },
                r = [],
                a = n("f708"),
                o = n("2f62");
            const s = {
                slidein: 6,
                interstitial: 15,
                vertical: 20
            };
            var l = {
                    props: {
                        type: String
                    },
                    computed: { ...Object(o["f"])({
                            showAds: "showAds"
                        }),
                        adUnit() {
                            return s[this.type] || s.slidein
                        },
                        isPwa: () => Object(a["d"])()
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["a"] = u.exports
        },
        cc49: function(t, e, n) {
            "use strict";
            n("3241")
        },
        d65e: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("winui-searchbox", {
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
                r = [],
                a = {
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
                o = a,
                s = n("2877"),
                l = Object(s["a"])(o, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        d7a2: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            const i = {
                props: {
                    src: {
                        type: String,
                        required: !0
                    },
                    srcPlaceholder: {
                        type: String,
                        default: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    },
                    srcset: {
                        type: String
                    },
                    intersectionOptions: {
                        type: Object,
                        default: () => ({})
                    },
                    usePicture: {
                        type: Boolean,
                        default: !1
                    }
                },
                inheritAttrs: !1,
                data: () => ({
                    observer: null,
                    intersected: !1,
                    loaded: !1
                }),
                computed: {
                    srcImage() {
                        return this.intersected && this.src ? this.src : this.srcPlaceholder
                    },
                    srcsetImage() {
                        return !(!this.intersected || !this.srcset) && this.srcset
                    }
                },
                methods: {
                    load() {
                        this.$el && this.$el.getAttribute("src") !== this.srcPlaceholder && (this.loaded = !0, this.$emit("load", this.$el))
                    },
                    error() {
                        this.$emit("error", this.$el)
                    }
                },
                render(t) {
                    let e = t("img", {
                        attrs: {
                            src: this.srcImage,
                            srcset: this.srcsetImage
                        },
                        domProps: this.$attrs,
                        class: {
                            "v-lazy-image": !0, "v-lazy-image-loaded": this.loaded
                        },
                        on: {
                            load: this.load,
                            error: this.error
                        }
                    });
                    return this.usePicture ? t("picture", {
                        on: {
                            load: this.load
                        }
                    }, this.intersected ? [this.$slots.default, e] : [e]) : e
                },
                mounted() {
                    "IntersectionObserver" in window && (this.observer = new IntersectionObserver(t => {
                        const e = t[0];
                        e.isIntersecting && (this.intersected = !0, this.observer.disconnect(), this.$emit("intersect"))
                    }, this.intersectionOptions), this.observer.observe(this.$el))
                },
                destroyed() {
                    "IntersectionObserver" in window && this.observer.disconnect()
                }
            }
        },
        dbd1: function(t, e, n) {
            "use strict";
            var i, r;
            n.d(e, "a", (function() {
                    return i
                })), n.d(e, "b", (function() {
                    return r
                })),
                function(t) {
                    t["IndexedDbLocal"] = "INDEXED_DB_LOCAL", t["InMemory"] = "IN_MEMORY", t["BrowserLocal"] = "BROWSER_LOCAL", t["BrowserSession"] = "BROWSER_SESSION"
                }(i || (i = {})),
                function(t) {
                    t["APPLE"] = "apple.com", t["FACEBOOK"] = "facebook.com", t["GAME_CENTER"] = "gc.apple.com", t["GITHUB"] = "github.com", t["GOOGLE"] = "google.com", t["MICROSOFT"] = "microsoft.com", t["PLAY_GAMES"] = "playgames.google.com", t["TWITTER"] = "twitter.com", t["YAHOO"] = "yahoo.com", t["PASSWORD"] = "password", t["PHONE"] = "phone"
                }(r || (r = {}))
        },
        dccb: function(t, e, n) {
            "use strict";
            n("5cd4")
        },
        de84: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.isAnimated ? n("video", {
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
                    }) : n("span", {
                        staticClass: "is-static w-full h-full desktop-background",
                        style: {
                            "--bg": t.bgVar
                        },
                        attrs: {
                            "data-test-desktop-background": t.src
                        }
                    })
                },
                r = [],
                a = {
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
                o = a,
                s = (n("c0c5"), n("2877")),
                l = Object(s["a"])(o, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        e166: function(t, e, n) {
            ! function(e, n) {
                t.exports = n()
            }(0, (function() {
                return function(t) {
                    var e = {};

                    function n(i) {
                        if (e[i]) return e[i].exports;
                        var r = e[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, i) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: i
                        })
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var i = Object.create(null);
                        if (n.r(i), Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var r in t) n.d(i, r, function(e) {
                                return t[e]
                            }.bind(null, r));
                        return i
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 9)
                }([function(t, e, n) {
                    var i = n(6);
                    "string" == typeof i && (i = [
                        [t.i, i, ""]
                    ]), i.locals && (t.exports = i.locals), (0, n(3).default)("6223ff68", i, !0, {})
                }, function(t, e, n) {
                    var i = n(8);
                    "string" == typeof i && (i = [
                        [t.i, i, ""]
                    ]), i.locals && (t.exports = i.locals), (0, n(3).default)("27f0e51f", i, !0, {})
                }, function(t, e) {
                    t.exports = function(t) {
                        var e = [];
                        return e.toString = function() {
                            return this.map((function(e) {
                                var n = function(t, e) {
                                    var n, i = t[1] || "",
                                        r = t[3];
                                    if (!r) return i;
                                    if (e && "function" == typeof btoa) {
                                        var a = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                            o = r.sources.map((function(t) {
                                                return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                            }));
                                        return [i].concat(o).concat([a]).join("\n")
                                    }
                                    return [i].join("\n")
                                }(e, t);
                                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                            })).join("")
                        }, e.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [null, t, ""]
                            ]);
                            for (var i = {}, r = 0; r < this.length; r++) {
                                var a = this[r][0];
                                "number" == typeof a && (i[a] = !0)
                            }
                            for (r = 0; r < t.length; r++) {
                                var o = t[r];
                                "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                            }
                        }, e
                    }
                }, function(t, e, n) {
                    "use strict";

                    function i(t, e) {
                        for (var n = [], i = {}, r = 0; r < e.length; r++) {
                            var a = e[r],
                                o = a[0],
                                s = {
                                    id: t + ":" + r,
                                    css: a[1],
                                    media: a[2],
                                    sourceMap: a[3]
                                };
                            i[o] ? i[o].parts.push(s) : n.push(i[o] = {
                                id: o,
                                parts: [s]
                            })
                        }
                        return n
                    }
                    n.r(e), n.d(e, "default", (function() {
                        return p
                    }));
                    var r = "undefined" != typeof document;
                    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                    var a = {},
                        o = r && (document.head || document.getElementsByTagName("head")[0]),
                        s = null,
                        l = 0,
                        c = !1,
                        d = function() {},
                        u = null,
                        h = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                    function p(t, e, n, r) {
                        c = n, u = r || {};
                        var o = i(t, e);
                        return m(o),
                            function(e) {
                                for (var n = [], r = 0; r < o.length; r++) {
                                    var s = o[r];
                                    (l = a[s.id]).refs--, n.push(l)
                                }
                                for (e ? m(o = i(t, e)) : o = [], r = 0; r < n.length; r++) {
                                    var l;
                                    if (0 === (l = n[r]).refs) {
                                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                                        delete a[l.id]
                                    }
                                }
                            }
                    }

                    function m(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e],
                                i = a[n.id];
                            if (i) {
                                i.refs++;
                                for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                                for (; r < n.parts.length; r++) i.parts.push(w(n.parts[r]));
                                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                            } else {
                                var o = [];
                                for (r = 0; r < n.parts.length; r++) o.push(w(n.parts[r]));
                                a[n.id] = {
                                    id: n.id,
                                    refs: 1,
                                    parts: o
                                }
                            }
                        }
                    }

                    function b() {
                        var t = document.createElement("style");
                        return t.type = "text/css", o.appendChild(t), t
                    }

                    function w(t) {
                        var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
                        if (i) {
                            if (c) return d;
                            i.parentNode.removeChild(i)
                        }
                        if (h) {
                            var r = l++;
                            i = s || (s = b()), e = v.bind(null, i, r, !1), n = v.bind(null, i, r, !0)
                        } else i = b(), e = x.bind(null, i), n = function() {
                            i.parentNode.removeChild(i)
                        };
                        return e(t),
                            function(i) {
                                if (i) {
                                    if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                                    e(t = i)
                                } else n()
                            }
                    }
                    var f, g = (f = [], function(t, e) {
                        return f[t] = e, f.filter(Boolean).join("\n")
                    });

                    function v(t, e, n, i) {
                        var r = n ? "" : i.css;
                        if (t.styleSheet) t.styleSheet.cssText = g(e, r);
                        else {
                            var a = document.createTextNode(r),
                                o = t.childNodes;
                            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
                        }
                    }

                    function x(t, e) {
                        var n = e.css,
                            i = e.media,
                            r = e.sourceMap;
                        if (i && t.setAttribute("media", i), u.ssrId && t.setAttribute("data-vue-ssr-id", e.id), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                        else {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(n))
                        }
                    }
                }, function(t, e) {
                    function n(e) {
                        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
                            return typeof t
                        } : t.exports = n = function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, n(e)
                    }
                    t.exports = n
                }, function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var i = n(0),
                        r = n.n(i);
                    for (var a in i) "default" !== a && function(t) {
                        n.d(e, t, (function() {
                            return i[t]
                        }))
                    }(a);
                    e.default = r.a
                }, function(t, e, n) {
                    (t.exports = n(2)(!1)).push([t.i, '.loading-wave-dots[data-v-46b20d22]{position:relative}.loading-wave-dots[data-v-46b20d22] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite;animation:loading-wave-dots-data-v-46b20d22 linear 2.8s infinite}.loading-wave-dots[data-v-46b20d22] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-46b20d22] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-46b20d22] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-46b20d22{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-46b20d22] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-46b20d22 linear .75s infinite;animation:loading-circles-data-v-46b20d22 linear .75s infinite}.loading-circles[data-v-46b20d22] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-46b20d22] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-46b20d22{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-46b20d22] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-46b20d22 linear .75s infinite;animation:loading-bubbles-data-v-46b20d22 linear .75s infinite}.loading-bubbles[data-v-46b20d22] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-46b20d22{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-46b20d22]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite;animation:loading-rotating-data-v-46b20d22 ease 1.5s infinite}.loading-default[data-v-46b20d22]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-46b20d22]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-46b20d22 linear .85s infinite;animation:loading-rotating-data-v-46b20d22 linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-46b20d22{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-46b20d22],.loading-circles[data-v-46b20d22]{position:relative}.loading-bubbles[data-v-46b20d22] .bubble-item,.loading-circles[data-v-46b20d22] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(2),.loading-circles[data-v-46b20d22] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(3),.loading-circles[data-v-46b20d22] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(4),.loading-circles[data-v-46b20d22] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(5),.loading-circles[data-v-46b20d22] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(6),.loading-circles[data-v-46b20d22] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-46b20d22] .bubble-item:nth-child(7),.loading-circles[data-v-46b20d22] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-46b20d22] .bubble-item:last-child,.loading-circles[data-v-46b20d22] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}', ""])
                }, function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var i = n(1),
                        r = n.n(i);
                    for (var a in i) "default" !== a && function(t) {
                        n.d(e, t, (function() {
                            return i[t]
                        }))
                    }(a);
                    e.default = r.a
                }, function(t, e, n) {
                    (t.exports = n(2)(!1)).push([t.i, ".infinite-loading-container[data-v-644ea9c9]{clear:both;text-align:center}.infinite-loading-container[data-v-644ea9c9] [class^=loading-]{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.btn-try-infinite[data-v-644ea9c9]{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite[data-v-644ea9c9]:not(:active):hover{opacity:.8}", ""])
                }, function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var i = {
                            throttleLimit: 50,
                            loopCheckTimeout: 1e3,
                            loopCheckMaxCalls: 10
                        },
                        r = function() {
                            var t = !1;
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        return t = {
                                            passive: !0
                                        }, !0
                                    }
                                });
                                window.addEventListener("testpassive", e, e), window.remove("testpassive", e, e)
                            } catch (t) {}
                            return t
                        }(),
                        a = {
                            STATE_CHANGER: ["emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):", "\ntemplate:", '<infinite-loading @infinite="infiniteHandler"></infinite-loading>', "\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...", "", "more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),
                            INFINITE_EVENT: "`:on-infinite` property will be deprecated soon, please use `@infinite` event instead.",
                            IDENTIFIER: "the `reset` event will be deprecated soon, please reset this component by change the `identifier` property."
                        },
                        o = {
                            INFINITE_LOOP: ["executed the callback function more than ".concat(i.loopCheckMaxCalls, " times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:"), '\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper></infinite-loading>\n</div>\nor\n<div class="infinite-wrapper">\n  ...\n  \x3c!-- set force-use-infinite-wrapper as css selector of the real scroll wrapper --\x3e\n  <infinite-loading force-use-infinite-wrapper=".infinite-wrapper"></infinite-loading>\n</div>\n    ', "more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")
                        },
                        s = {
                            READY: 0,
                            LOADING: 1,
                            COMPLETE: 2,
                            ERROR: 3
                        },
                        l = {
                            color: "#666",
                            fontSize: "14px",
                            padding: "10px 0"
                        },
                        c = {
                            mode: "development",
                            props: {
                                spinner: "default",
                                distance: 100,
                                forceUseInfiniteWrapper: !1
                            },
                            system: i,
                            slots: {
                                noResults: "No results :(",
                                noMore: "No more data :)",
                                error: "Opps, something went wrong :(",
                                errorBtnText: "Retry",
                                spinner: ""
                            },
                            WARNINGS: a,
                            ERRORS: o,
                            STATUS: s
                        },
                        d = n(4),
                        u = n.n(d),
                        h = {
                            BUBBLES: {
                                render: function(t) {
                                    return t("span", {
                                        attrs: {
                                            class: "loading-bubbles"
                                        }
                                    }, Array.apply(Array, Array(8)).map((function() {
                                        return t("span", {
                                            attrs: {
                                                class: "bubble-item"
                                            }
                                        })
                                    })))
                                }
                            },
                            CIRCLES: {
                                render: function(t) {
                                    return t("span", {
                                        attrs: {
                                            class: "loading-circles"
                                        }
                                    }, Array.apply(Array, Array(8)).map((function() {
                                        return t("span", {
                                            attrs: {
                                                class: "circle-item"
                                            }
                                        })
                                    })))
                                }
                            },
                            DEFAULT: {
                                render: function(t) {
                                    return t("i", {
                                        attrs: {
                                            class: "loading-default"
                                        }
                                    })
                                }
                            },
                            SPIRAL: {
                                render: function(t) {
                                    return t("i", {
                                        attrs: {
                                            class: "loading-spiral"
                                        }
                                    })
                                }
                            },
                            WAVEDOTS: {
                                render: function(t) {
                                    return t("span", {
                                        attrs: {
                                            class: "loading-wave-dots"
                                        }
                                    }, Array.apply(Array, Array(5)).map((function() {
                                        return t("span", {
                                            attrs: {
                                                class: "wave-item"
                                            }
                                        })
                                    })))
                                }
                            }
                        };

                    function p(t, e, n, i, r, a, o, s) {
                        var l, c = "function" == typeof t ? t.options : t;
                        if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), a && (c._scopeId = "data-v-" + a), o ? (l = function(t) {
                                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
                            }, c._ssrRegister = l) : r && (l = s ? function() {
                                r.call(this, this.$root.$options.shadowRoot)
                            } : r), l)
                            if (c.functional) {
                                c._injectStyles = l;
                                var d = c.render;
                                c.render = function(t, e) {
                                    return l.call(e), d(t, e)
                                }
                            } else {
                                var u = c.beforeCreate;
                                c.beforeCreate = u ? [].concat(u, l) : [l]
                            }
                        return {
                            exports: t,
                            options: c
                        }
                    }
                    var m = p({
                        name: "Spinner",
                        computed: {
                            spinnerView: function() {
                                return h[(this.$attrs.spinner || "").toUpperCase()] || this.spinnerInConfig
                            },
                            spinnerInConfig: function() {
                                return c.slots.spinner && "string" == typeof c.slots.spinner ? {
                                    render: function() {
                                        return this._v(c.slots.spinner)
                                    }
                                } : "object" === u()(c.slots.spinner) ? c.slots.spinner : h[c.props.spinner.toUpperCase()] || h.DEFAULT
                            }
                        }
                    }, (function() {
                        var t = this.$createElement;
                        return (this._self._c || t)(this.spinnerView, {
                            tag: "component"
                        })
                    }), [], !1, (function(t) {
                        var e = n(5);
                        e.__inject__ && e.__inject__(t)
                    }), "46b20d22", null).exports;

                    function b(t) {
                        "production" !== c.mode && console.warn("[Vue-infinite-loading warn]: ".concat(t))
                    }

                    function w(t) {
                        console.error("[Vue-infinite-loading error]: ".concat(t))
                    }
                    var f = {
                            timers: [],
                            caches: [],
                            throttle: function(t) {
                                var e = this; - 1 === this.caches.indexOf(t) && (this.caches.push(t), this.timers.push(setTimeout((function() {
                                    t(), e.caches.splice(e.caches.indexOf(t), 1), e.timers.shift()
                                }), c.system.throttleLimit)))
                            },
                            reset: function() {
                                this.timers.forEach((function(t) {
                                    clearTimeout(t)
                                })), this.timers.length = 0, this.caches = []
                            }
                        },
                        g = {
                            isChecked: !1,
                            timer: null,
                            times: 0,
                            track: function() {
                                var t = this;
                                this.times += 1, clearTimeout(this.timer), this.timer = setTimeout((function() {
                                    t.isChecked = !0
                                }), c.system.loopCheckTimeout), this.times > c.system.loopCheckMaxCalls && (w(o.INFINITE_LOOP), this.isChecked = !0)
                            }
                        },
                        v = {
                            key: "_infiniteScrollHeight",
                            getScrollElm: function(t) {
                                return t === window ? document.documentElement : t
                            },
                            save: function(t) {
                                var e = this.getScrollElm(t);
                                e[this.key] = e.scrollHeight
                            },
                            restore: function(t) {
                                var e = this.getScrollElm(t);
                                "number" == typeof e[this.key] && (e.scrollTop = e.scrollHeight - e[this.key] + e.scrollTop), this.remove(e)
                            },
                            remove: function(t) {
                                void 0 !== t[this.key] && delete t[this.key]
                            }
                        };

                    function x(t) {
                        return t.replace(/[A-Z]/g, (function(t) {
                            return "-".concat(t.toLowerCase())
                        }))
                    }

                    function k(t) {
                        return t.offsetWidth + t.offsetHeight > 0
                    }
                    var y = p({
                        name: "InfiniteLoading",
                        data: function() {
                            return {
                                scrollParent: null,
                                scrollHandler: null,
                                isFirstLoad: !0,
                                status: s.READY,
                                slots: c.slots
                            }
                        },
                        components: {
                            Spinner: m
                        },
                        computed: {
                            isShowSpinner: function() {
                                return this.status === s.LOADING
                            },
                            isShowError: function() {
                                return this.status === s.ERROR
                            },
                            isShowNoResults: function() {
                                return this.status === s.COMPLETE && this.isFirstLoad
                            },
                            isShowNoMore: function() {
                                return this.status === s.COMPLETE && !this.isFirstLoad
                            },
                            slotStyles: function() {
                                var t = this,
                                    e = {};
                                return Object.keys(c.slots).forEach((function(n) {
                                    var i = x(n);
                                    (!t.$slots[i] && !c.slots[n].render || t.$slots[i] && !t.$slots[i][0].tag) && (e[n] = l)
                                })), e
                            }
                        },
                        props: {
                            distance: {
                                type: Number,
                                default: c.props.distance
                            },
                            spinner: String,
                            direction: {
                                type: String,
                                default: "bottom"
                            },
                            forceUseInfiniteWrapper: {
                                type: [Boolean, String],
                                default: c.props.forceUseInfiniteWrapper
                            },
                            identifier: {
                                default: +new Date
                            },
                            onInfinite: Function
                        },
                        watch: {
                            identifier: function() {
                                this.stateChanger.reset()
                            }
                        },
                        mounted: function() {
                            var t = this;
                            this.$watch("forceUseInfiniteWrapper", (function() {
                                t.scrollParent = t.getScrollParent()
                            }), {
                                immediate: !0
                            }), this.scrollHandler = function(e) {
                                t.status === s.READY && (e && e.constructor === Event && k(t.$el) ? f.throttle(t.attemptLoad) : t.attemptLoad())
                            }, setTimeout((function() {
                                t.scrollHandler(), t.scrollParent.addEventListener("scroll", t.scrollHandler, r)
                            }), 1), this.$on("$InfiniteLoading:loaded", (function(e) {
                                t.isFirstLoad = !1, "top" === t.direction && t.$nextTick((function() {
                                    v.restore(t.scrollParent)
                                })), t.status === s.LOADING && t.$nextTick(t.attemptLoad.bind(null, !0)), e && e.target === t || b(a.STATE_CHANGER)
                            })), this.$on("$InfiniteLoading:complete", (function(e) {
                                t.status = s.COMPLETE, t.$nextTick((function() {
                                    t.$forceUpdate()
                                })), t.scrollParent.removeEventListener("scroll", t.scrollHandler, r), e && e.target === t || b(a.STATE_CHANGER)
                            })), this.$on("$InfiniteLoading:reset", (function(e) {
                                t.status = s.READY, t.isFirstLoad = !0, v.remove(t.scrollParent), t.scrollParent.addEventListener("scroll", t.scrollHandler, r), setTimeout((function() {
                                    f.reset(), t.scrollHandler()
                                }), 1), e && e.target === t || b(a.IDENTIFIER)
                            })), this.stateChanger = {
                                loaded: function() {
                                    t.$emit("$InfiniteLoading:loaded", {
                                        target: t
                                    })
                                },
                                complete: function() {
                                    t.$emit("$InfiniteLoading:complete", {
                                        target: t
                                    })
                                },
                                reset: function() {
                                    t.$emit("$InfiniteLoading:reset", {
                                        target: t
                                    })
                                },
                                error: function() {
                                    t.status = s.ERROR, f.reset()
                                }
                            }, this.onInfinite && b(a.INFINITE_EVENT)
                        },
                        deactivated: function() {
                            this.status === s.LOADING && (this.status = s.READY), this.scrollParent.removeEventListener("scroll", this.scrollHandler, r)
                        },
                        activated: function() {
                            this.scrollParent.addEventListener("scroll", this.scrollHandler, r)
                        },
                        methods: {
                            attemptLoad: function(t) {
                                var e = this;
                                this.status !== s.COMPLETE && k(this.$el) && this.getCurrentDistance() <= this.distance ? (this.status = s.LOADING, "top" === this.direction && this.$nextTick((function() {
                                    v.save(e.scrollParent)
                                })), "function" == typeof this.onInfinite ? this.onInfinite.call(null, this.stateChanger) : this.$emit("infinite", this.stateChanger), !t || this.forceUseInfiniteWrapper || g.isChecked || g.track()) : this.status === s.LOADING && (this.status = s.READY)
                            },
                            getCurrentDistance: function() {
                                var t;
                                return t = "top" === this.direction ? "number" == typeof this.scrollParent.scrollTop ? this.scrollParent.scrollTop : this.scrollParent.pageYOffset : this.$el.getBoundingClientRect().top - (this.scrollParent === window ? window.innerHeight : this.scrollParent.getBoundingClientRect().bottom), t
                            },
                            getScrollParent: function() {
                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.$el;
                                return "string" == typeof this.forceUseInfiniteWrapper && (t = document.querySelector(this.forceUseInfiniteWrapper)), t || ("BODY" === e.tagName ? t = window : (!this.forceUseInfiniteWrapper && ["scroll", "auto"].indexOf(getComputedStyle(e).overflowY) > -1 || e.hasAttribute("infinite-wrapper") || e.hasAttribute("data-infinite-wrapper")) && (t = e)), t || this.getScrollParent(e.parentNode)
                            }
                        },
                        destroyed: function() {
                            !this.status !== s.COMPLETE && (f.reset(), v.remove(this.scrollParent), this.scrollParent.removeEventListener("scroll", this.scrollHandler, r))
                        }
                    }, (function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "infinite-loading-container"
                        }, [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isShowSpinner,
                                expression: "isShowSpinner"
                            }],
                            staticClass: "infinite-status-prompt",
                            style: t.slotStyles.spinner
                        }, [t._t("spinner", [n("spinner", {
                            attrs: {
                                spinner: t.spinner
                            }
                        })])], 2), t._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isShowNoResults,
                                expression: "isShowNoResults"
                            }],
                            staticClass: "infinite-status-prompt",
                            style: t.slotStyles.noResults
                        }, [t._t("no-results", [t.slots.noResults.render ? n(t.slots.noResults, {
                            tag: "component"
                        }) : [t._v(t._s(t.slots.noResults))]])], 2), t._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isShowNoMore,
                                expression: "isShowNoMore"
                            }],
                            staticClass: "infinite-status-prompt",
                            style: t.slotStyles.noMore
                        }, [t._t("no-more", [t.slots.noMore.render ? n(t.slots.noMore, {
                            tag: "component"
                        }) : [t._v(t._s(t.slots.noMore))]])], 2), t._v(" "), n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.isShowError,
                                expression: "isShowError"
                            }],
                            staticClass: "infinite-status-prompt",
                            style: t.slotStyles.error
                        }, [t._t("error", [t.slots.error.render ? n(t.slots.error, {
                            tag: "component",
                            attrs: {
                                trigger: t.attemptLoad
                            }
                        }) : [t._v("\n        " + t._s(t.slots.error) + "\n        "), n("br"), t._v(" "), n("button", {
                            staticClass: "btn-try-infinite",
                            domProps: {
                                textContent: t._s(t.slots.errorBtnText)
                            },
                            on: {
                                click: t.attemptLoad
                            }
                        })]], {
                            trigger: t.attemptLoad
                        })], 2)])
                    }), [], !1, (function(t) {
                        var e = n(7);
                        e.__inject__ && e.__inject__(t)
                    }), "644ea9c9", null).exports;

                    function O(t) {
                        c.mode = t.config.productionTip ? "development" : "production"
                    }
                    Object.defineProperty(y, "install", {
                        configurable: !1,
                        enumerable: !1,
                        value: function(t, e) {
                            Object.assign(c.props, e && e.props), Object.assign(c.slots, e && e.slots), Object.assign(c.system, e && e.system), t.component("infinite-loading", y), O(t)
                        }
                    }), "undefined" != typeof window && window.Vue && (window.Vue.component("infinite-loading", y), O(window.Vue)), e.default = y
                }])
            }))
        },
        e2fa: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        staticClass: "text-black",
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("base-menu", {
                        staticClass: "can-hover",
                        attrs: {
                            items: t.items,
                            asDecorator: ""
                        }
                    })], 1)
                },
                r = [],
                a = n("0d94"),
                o = '\ufeff.icon{background-image:var(--icon)}.winui-icon{display:inline-block}.winui-icon img{display:block}.winui-menu,.winui-menubar{background:#fff;margin:0;padding:0;list-style:none;cursor:default}.winui-menu.can-hover [role=menuitem]:hover>[role=menu],.winui-menubar.can-hover [role=menuitem]:hover>[role=menu]{display:block}.winui-menu [role=menuitem],.winui-menubar [role=menuitem]{position:relative}.winui-menu [role=menuitem]>input[type],.winui-menubar [role=menuitem]>input[type]{display:none}.winui-menu [role=menuitem]>input[type=radio]:checked+label::after,.winui-menubar [role=menuitem]>input[type=radio]:checked+label::after{content:"";width:var(--menu-radio);height:var(--menu-radio);position:absolute;top:calc(50% - var(--menu-radio)/2);left:calc((var(--menu-offset) - var(--menu-radio))/2);background:currentColor;border-radius:50%}.winui-menu [role=menuitem]>input[type=checkbox]:checked+label::after,.winui-menubar [role=menuitem]>input[type=checkbox]:checked+label::after{content:"✔";position:absolute;top:calc(50% - var(--menu-check)/2);left:calc((var(--menu-offset) - var(--menu-check))/2);width:var(--menu-check);height:var(--menu-check);line-height:var(--menu-check);font-size:var(--menu-check);font-weight:bold}.winui-menu [role=menuitem]>a:not(:disabled):hover,.winui-menu [role=menuitem]>a:not(:disabled):focus-visible,.winui-menu [role=menuitem]>button:not(:disabled):hover,.winui-menu [role=menuitem]>button:not(:disabled):focus-visible,.winui-menu [role=menuitem]>label:not(:disabled):hover,.winui-menu [role=menuitem]>label:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>a:not(:disabled):hover,.winui-menubar [role=menuitem]>a:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>button:not(:disabled):hover,.winui-menubar [role=menuitem]>button:not(:disabled):focus-visible,.winui-menubar [role=menuitem]>label:not(:disabled):hover,.winui-menubar [role=menuitem]>label:not(:disabled):focus-visible{background:rgba(0,0,0,.0666666667)}.winui-menu [role=menuitem]:focus>[role=menu],.winui-menu [role=menuitem]:focus-within>[role=menu],.winui-menubar [role=menuitem]:focus>[role=menu],.winui-menubar [role=menuitem]:focus-within>[role=menu]{display:block}.winui-menu [role=menuitem][aria-disabled],.winui-menubar [role=menuitem][aria-disabled]{filter:grayscale(100%);opacity:.5;pointer-events:none}.winui-menu [role=menuitem].has-divider::after,.winui-menubar [role=menuitem].has-divider::after{content:"";display:block;margin:4px 0;height:1px;background:#ddd}.winui-menubar{display:flex}.winui-menubar>[role=menuitem]{display:flex;align-items:center}.winui-menubar>[role=menuitem] button{width:100%;height:100%;display:flex;align-items:center;padding:4px 8px}.winui-menubar>[role=menuitem] .icon{width:16px;height:16px;margin-right:4px}.winui-menu{transition:opacity calc(0.2s * var(--effect-fade-menus));box-shadow:0 1px 20px rgba(0,0,0,.2);position:absolute;min-width:180px;opacity:1;padding:var(--menu-padding)}.winui-menu.inactive{opacity:0;visibility:hidden}[role=menuitem] .winui-menu{display:none;position:absolute;left:0;top:100%;z-index:99}.winui-menu [role=menuitem]>[role=menu]{top:0;left:100%}.winui-menu>[role=menuitem] img,.winui-menu>[role=menuitem] .icon{width:16px;height:16px;position:absolute;top:50%;left:calc((var(--menu-offset) - 16px)/2);margin:0;pointer-events:none;transform:translateY(-50%);z-index:1}.winui-menu>[role=menuitem]>a,.winui-menu>[role=menuitem]>button,.winui-menu>[role=menuitem]>label{position:relative;display:flex;justify-content:space-between;width:100%;padding:4px 8px 4px var(--menu-offset);line-height:1.25rem;white-space:nowrap}.winui-menu>[role=menuitem] button>span:last-child:not([class]){margin-left:32px}.winui-menu>[role=menuitem][aria-haspopup]::after{content:"";position:absolute;top:50%;right:2px;transform:translateY(-50%);border:4px solid rgba(0,0,0,0);border-left-color:currentColor}.winui-menu hr{background:rgba(0,0,0,.1333333333);height:1px;margin:4px 0}.winui-menu{position:relative}',
                s = n("56c8"),
                l = {
                    components: {
                        BaseMenu: a["a"]
                    },
                    name: "ContextMenu",
                    mixins: [Object(s["a"])(o)],
                    data() {
                        return {
                            items: [],
                            sizeOption: t => ({
                                type: "radio",
                                id: "icon-size-" + t,
                                name: "icon-size",
                                value: t
                            }),
                            showOption: {
                                type: "checkbox",
                                id: "show-icons"
                            },
                            autoOption: {
                                type: "checkbox",
                                id: "auto-icons"
                            }
                        }
                    },
                    mounted() {
                        this.items = [{
                            label: this.$t("view"),
                            children: [{
                                label: this.$t("lg-icons"),
                                option: this.sizeOption("lg")
                            }, {
                                label: this.$t("md-icons"),
                                option: this.sizeOption("md")
                            }, {
                                label: this.$t("sm-icons"),
                                option: this.sizeOption("sm"),
                                hasDivider: !0
                            }, {
                                label: this.$t("auto-desktop-icons"),
                                option: this.autoOption,
                                hasDivider: !0
                            }, {
                                label: this.$t("show-desktop-icons"),
                                option: this.showOption
                            }]
                        }, {
                            label: this.$t("refresh"),
                            hasDivider: !0
                        }, {
                            label: this.$t("paste"),
                            disabled: !0
                        }, {
                            label: this.$t("copy-path")
                        }, {
                            label: this.$t("upload-files-here"),
                            hasDivider: !0
                        }, {
                            label: this.$t("new"),
                            hasDivider: !0,
                            children: [{
                                label: this.$t("folder"),
                                icon: "folder-s"
                            }, {
                                label: this.$t("shortcut"),
                                icon: "shortcut",
                                hasDivider: !0
                            }, {
                                label: this.$t("rich-text-document"),
                                icon: "wordpad"
                            }, {
                                label: this.$t("text-document"),
                                icon: "text-s"
                            }]
                        }, {
                            label: this.$t("display"),
                            icon: "display-s"
                        }, {
                            label: this.$t("gadgets"),
                            icon: "gadgets-s"
                        }, {
                            label: this.$t("personalize"),
                            icon: "personal-s"
                        }]
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["default"] = u.exports
        },
        e4f8: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex gap-1 window__addressbar-nav",
                        attrs: {
                            "data-test-window-navigation": ""
                        }
                    }, [n("command-button", {
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
                    }, [t.useLineArrow ? n("iconify-icon", {
                        attrs: {
                            icon: "la:arrow-left"
                        }
                    }) : t.useChevron ? n("iconify-icon", {
                        attrs: {
                            icon: "la:angle-left"
                        }
                    }) : t.usePixel ? n("iconify-icon", {
                        attrs: {
                            icon: "pixelarticons:arrow-left"
                        }
                    }) : n("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-left"
                        }
                    })], 1), n("command-button", {
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
                    }, [t.useLineArrow ? n("iconify-icon", {
                        attrs: {
                            icon: "la:arrow-right"
                        }
                    }) : t.useChevron ? n("iconify-icon", {
                        attrs: {
                            icon: "la:angle-right"
                        }
                    }) : t.usePixel ? n("iconify-icon", {
                        attrs: {
                            icon: "pixelarticons:arrow-right"
                        }
                    }) : n("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-right"
                        }
                    })], 1)], 1)
                },
                r = [],
                a = n("bbbd"),
                o = n("55ab"),
                s = n("2f62"),
                l = {
                    props: {
                        activeBack: Boolean,
                        activeNext: Boolean,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(s["f"])({
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
                    methods: { ...a["e"].mapActions([a["b"].ProgramEvent]),
                        navigate(t) {
                            const e = "back" === t && this.activeBack,
                                n = "next" === t && this.activeNext;
                            (e || n) && (this.$emit("navigate", t), this[a["b"].ProgramEvent](a["c"].Explorer.StartNavigation))
                        }
                    },
                    components: {
                        CommandButton: o["a"]
                    }
                },
                c = l,
                d = n("2877"),
                u = Object(d["a"])(c, i, r, !1, null, null, null);
            e["a"] = u.exports
        },
        e6f1: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '.winui-menubar {\n}\n\n.winui-menubar > [role="menuitem"] > button {\n}\n'
        },
        e874: function(t, e, n) {},
        ea48: function(t, e, n) {},
        eb0f: function(t, e, n) {},
        eb17: function(t, e, n) {
            ! function(t, i) {
                i(e, n("2b0e"))
            }(0, (function(t, e) {
                "use strict";

                function n(t) {
                    return t && "object" == typeof t && "default" in t ? t : {
                        default: t
                    }
                }

                function i(t) {
                    r(t, t.childNodes)
                }

                function r(t, e) {
                    const n = document.createDocumentFragment();
                    for (const i of e) n.appendChild(i);
                    t.attachShadow({
                        mode: "open"
                    }).appendChild(n)
                }
                const a = n(e).default.extend({
                    render(t) {
                        return t(this.tag, {}, [this.pstatic ? this.$slots.default : t(this.slotTag, {
                            attrs: {
                                id: this.slotId
                            },
                            class: this.slotClass
                        }, [this.$slots.default])])
                    },
                    props: {
                        abstract: {
                            type: Boolean,
                            default: !1
                        },
                        static: {
                            type: Boolean,
                            default: !1
                        },
                        tag: {
                            type: String,
                            default: "div"
                        },
                        slotTag: {
                            type: String,
                            default: "div"
                        },
                        slotClass: {
                            type: String
                        },
                        slotId: {
                            type: String
                        }
                    },
                    data: function() {
                        return {
                            pabstract: !1,
                            pstatic: !1
                        }
                    },
                    beforeMount() {
                        this.pabstract = this.abstract, this.pstatic = this.static
                    },
                    mounted() {
                        try {
                            this.pabstract ? r(this.$el.parentElement, this.$el.childNodes) : i(this.$el)
                        } catch (t) {
                            console.error(t), this.$emit("error", t)
                        }
                    }
                });

                function o(t) {
                    t.component("shadow-root", a), t.directive("shadow", {
                        bind(t, e) {
                            try {
                                i(t)
                            } catch (t) {
                                if (console.error(t), e && "function" == typeof e.value) try {
                                    e.value(t)
                                } catch (t) {
                                    console.error(t)
                                }
                            }
                        }
                    })
                }
                null != typeof window && window.Vue && o(window.Vue);
                var s = {
                    ShadowRoot: a,
                    shadow_root: a,
                    install: o
                };
                t.ShadowRoot = a, t.default = s, t.install = o, t.shadow_root = a, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }))
        },
        ec23: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("div", {
                        staticClass: "mb-3"
                    }, [n("winui-dropdown", {
                        attrs: {
                            value: "landscape"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "landscape"
                        }
                    }, [t._v(t._s(t.$t("landscape")))]), n("option", [t._v(t._s(t.$t("portrait")))]), n("option", [t._v(t._s(t.$t("landscape")) + " (" + t._s(t.$t("flipped")) + ")")]), n("option", [t._v(t._s(t.$t("portrait")) + " (" + t._s(t.$t("flipped")) + ")")])])], 1), n("div", [n("winui-dropdown", {
                        attrs: {
                            value: "portrait",
                            disabled: ""
                        }
                    }, [n("option", {
                        attrs: {
                            value: "portrait"
                        }
                    }, [t._v(t._s(t.$t("portrait")))])])], 1)])
                },
                r = [],
                a = ".winui-dropdown:not([multiple]){background-color:#fff;border:1px solid rgba(0,0,0,.6);padding:2px 4px}.winui-dropdown:not([multiple]):not(:disabled):hover,.winui-dropdown:not([multiple]):not(:disabled):focus{background-color:rgba(0,0,0,.0666666667)}.winui-dropdown:not([multiple]):not(:disabled):active{background-color:rgba(0,0,0,.2)}.winui-dropdown:not([multiple]):disabled{opacity:.5}.winui-dropdown{width:100%}",
                o = n("56c8"),
                s = {
                    name: "Dropdown",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        ed93: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("preview-container", {
                        attrs: {
                            previewStyle: t.previewStyle,
                            localStyle: t.localStyle
                        }
                    }, [n("winui-textbox", {
                        attrs: {
                            placeholder: t.$t("text")
                        }
                    }), n("winui-textbox", {
                        attrs: {
                            placeholder: t.$t("text"),
                            disabled: ""
                        }
                    }), n("winui-textbox", {
                        attrs: {
                            type: "number",
                            placeholder: t.$t("number")
                        }
                    }), n("winui-textbox", {
                        attrs: {
                            type: "password",
                            placeholder: t.$t("password")
                        }
                    }), n("winui-textbox", {
                        attrs: {
                            type: "textarea",
                            placeholder: t.$t("textarea")
                        }
                    })], 1)
                },
                r = [],
                a = ".winui-textbox{background:#fff;border:1px solid rgba(0,0,0,.2);padding:4px 6px}.winui-textbox:focus{border-color:rgba(0,0,0,.6)}.winui-textbox:disabled{opacity:.5}.winui-textbox{display:block;margin-bottom:8px;min-width:200px}",
                o = n("56c8"),
                s = {
                    name: "Textbox",
                    mixins: [Object(o["a"])(a)]
                },
                l = s,
                c = n("2877"),
                d = Object(c["a"])(l, i, r, !1, null, null, null);
            e["default"] = d.exports
        },
        f36b: function(t, e, n) {},
        f389: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col justify-between bg-black/5 px-8 py-6 w-72 shrink-0 window__sidepane"
                    }, [t.$slots.top ? n("div", [t._t("top")], 2) : t._e(), t.$slots.bottom ? n("div", [t._t("bottom")], 2) : t._e(), t.$slots.default ? t._t("default") : t._e()], 2)
                },
                r = [],
                a = {},
                o = a,
                s = n("2877"),
                l = Object(s["a"])(o, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        f698: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = ".window__main {\n}\n\n.window__main.active {\n}\n\n.window__titlebar {\n}\n\n.window__control-list {\n}\n\n.window__control-item {\n}\n\n.window__addressbar {\n}\n\n.window__addressbar-input {\n}\n\n.window__body {\n}\n\n.window__sidepane {\n}\n\n.window__contentpane {\n}\n\n.window__statusbar {\n}\n\n.window__statusbar-item {\n}\n\n.window__footer {\n}\n"
        },
        f6f9: function(t, e, n) {
            "use strict";
            n.r(e), e["default"] = '.winui-checkbox input[type="checkbox"] + label::before {\n}\n\n.winui-checkbox input[type="checkbox"] + label::after {\n}\n\n.winui-checkbox input[type="checkbox"]:disabled + label::before {\n}\n\n.winui-checkbox input[type="checkbox"]:disabled + label::after {\n}\n'
        },
        fceb: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("window-main-static", {
                        attrs: {
                            parent: t.parent,
                            variant: "message"
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: t.title
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: t.theme,
                            close: function() {
                                return t.$emit("close")
                            }
                        }
                    })], 1), n("window-body", {
                        class: t.containerClass,
                        attrs: {
                            layout: "message"
                        }
                    }, [t.icon ? n("div", {
                        staticClass: "flex"
                    }, [n("base-icon", {
                        attrs: {
                            icon: t.icon
                        }
                    }), t.noPreTag ? t._t("default") : n("pre", {
                        staticClass: "p-2 font-[inherit] whitespace-pre-wrap"
                    }, [t._t("default")], 2)], 2) : [t._t("default")]], 2), n("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [t._t("footer")], 2)], 1)
                },
                r = [],
                a = n("58cd"),
                o = n("1521"),
                s = n("e863"),
                l = n("7073"),
                c = n("411e"),
                d = n("e314"),
                u = n("2f62"),
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
                    computed: { ...Object(u["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        icon() {
                            const t = this.theme ? this.themeAssets[this.theme] : this.themeData;
                            return t.icon[this.type]
                        }
                    },
                    components: {
                        BaseIcon: a["a"],
                        WindowBody: o["a"],
                        WindowFooter: l["a"],
                        WindowMainStatic: c["a"],
                        WindowControls: s["a"],
                        WindowTitlebar: d["a"]
                    }
                },
                p = h,
                m = (n("67ac"), n("2877")),
                b = Object(m["a"])(p, i, r, !1, null, null, null);
            e["a"] = b.exports
        },
        fd8a: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "fragment"
                    }, [t.showEditor ? n("theme-editor", {
                        attrs: {
                            id: t.id,
                            preload: t.loadedTheme
                        },
                        on: {
                            openHelp: t.openLink
                        }
                    }) : n("window-main", {
                        staticClass: "is-themestudio",
                        attrs: {
                            id: "window-" + t.id,
                            w: 600,
                            h: 420,
                            lock: t.showExplorer
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: t.$t(t.id)
                        }
                    }, [n("window-controls")], 1), n("window-body", [n("section", {
                        staticClass: "center-flex-y h-full"
                    }, [n("div", {
                        staticClass: "mx-0 mt-auto mb-6 text-center"
                    }, [n("base-icon", {
                        staticClass: "bg-white bg-opacity-10 rounded-full themestudio__logo",
                        attrs: {
                            id: "themestudio",
                            icon: t.icon
                        }
                    }), n("h2", {
                        staticClass: "mb-3 text-6xl"
                    }, [t._v(" " + t._s(t.$t("themestudio")) + " ")]), n("span", [t._v(t._s(t.$t("version")) + " 2.0.0")])], 1), n("div", {
                        staticClass: "flex flex-col mx-4 mt-0 mb-auto"
                    }, [n("winui-link", {
                        staticClass: "themestudio__link",
                        on: {
                            click: t.toggleEditor
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-3xl",
                        attrs: {
                            icon: "la:rocket"
                        }
                    }), n("span", [t._v(t._s(t.$t("start-new-project")))])], 1), n("winui-link", {
                        staticClass: "themestudio__link",
                        on: {
                            click: t.toggleExplorer
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-3xl",
                        attrs: {
                            icon: "la:file-import"
                        }
                    }), n("span", [t._v(t._s(t.$t("load-existing-project")))])], 1)], 1), n("div", {
                        staticClass: "flex"
                    }, [n("winui-link", {
                        staticClass: "themestudio__link",
                        on: {
                            click: function(e) {
                                return t.openLink("manual")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:book"
                        }
                    }), n("span", [t._v(t._s(t.$t("read-manual")))])], 1), n("winui-link", {
                        staticClass: "themestudio__link",
                        on: {
                            click: function(e) {
                                return t.openLink("video")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:youtube"
                        }
                    }), n("span", [t._v(t._s(t.$t("watch-tutorials")))])], 1)], 1)])])], 1), t.showExplorer ? n("theme-explorer", {
                        attrs: {
                            id: t.id
                        },
                        on: {
                            close: t.closeExplorer
                        }
                    }) : t._e()], 1)
                },
                r = [],
                a = n("b2e8"),
                o = n("58cd"),
                s = n("e5dd"),
                l = function() {
                    var t, e = this,
                        n = e.$createElement,
                        i = e._self._c || n;
                    return i("div", {
                        staticClass: "fragment"
                    }, [i("window-main", {
                        staticClass: "is-themestudio",
                        attrs: {
                            id: "window-" + e.id,
                            w: 640,
                            h: 420,
                            lock: e.isLocked
                        },
                        on: {
                            resize: e.handleResize
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            icon: e.id,
                            title: e.$t(e.id) + " - " + e.themeName
                        }
                    }, [i("window-controls", {
                        attrs: {
                            close: e.handleClose
                        }
                    })], 1), i("window-menubar", {
                        attrs: {
                            items: e.menubar
                        }
                    }), i("window-body", {
                        staticClass: "gap-4 p-3 w-full",
                        attrs: {
                            layout: "panel"
                        }
                    }, [i("window-sidepane", [i("winui-listbox", {
                        staticClass: "m-px h-full themestudio__editor-nav",
                        attrs: {
                            items: e.elementOptions,
                            value: e.activeElement
                        },
                        on: {
                            change: function(t) {
                                e.activeElement = t
                            }
                        }
                    })], 1), i("div", {
                        staticClass: "flex gap-4 w-full overflow-auto"
                    }, [i("div", {
                        staticClass: "flex flex-col flex-1 gap-4"
                    }, [i("div", {
                        class: ["relative winui-listbox themestudio__editor-pane is-source", e.hasPreviewer ? "h-1/2" : "h-full", e.compileError ? "has-error" : ""]
                    }, [i("span", {
                        staticClass: "themestudio__editor-title"
                    }, [e._v(e._s(e.$t("source-code")))]), e.editor ? i("codemirror-editor", {
                        staticClass: "min-h-0",
                        attrs: {
                            editor: e.editor
                        }
                    }) : e._e(), i("editor-indicator", {
                        attrs: {
                            message: e.compileError
                        }
                    })], 1), e.hasPreviewer ? i("div", {
                        class: ["h-1/2 winui-listbox themestudio__editor-pane is-preview", (t = {}, t["is-" + e.previewMode] = "default" !== e.previewMode, t)]
                    }, [i("span", {
                        staticClass: "themestudio__editor-title"
                    }, [e._v(e._s(e.$t("preview")))]), e.canShowPreview ? i("div", {
                        staticClass: "center-flex h-full"
                    }, [i(e.elements[e.activeElement].previewer, {
                        tag: "component",
                        attrs: {
                            previewStyle: e.data[e.activeElement]
                        }
                    })], 1) : i("div", {
                        staticClass: "center-flex p-4 h-full text-center italic"
                    }, [e._v(" " + e._s(e.$t("preview-bsod")) + " ")])]) : e._e()])]), i("editor-actions", {
                        staticClass: "winui-listbox shrink-0 themestudio__editor-pane is-actions",
                        attrs: {
                            fill: !e.allStyle,
                            apply: (e.isChanged || !!e.preload) && !e.compileError,
                            reset: e.isChanged,
                            save: e.isChanged && !e.compileError
                        },
                        on: {
                            load: e.toggleExplorer,
                            reset: e.toggleConfirmReset,
                            fill: e.fillSelectors,
                            apply: e.apply,
                            save: e.toggleSaveForm,
                            download: e.download
                        }
                    })], 1)], 1), e.showExplorer ? i("theme-explorer", {
                        attrs: {
                            id: e.id
                        },
                        on: {
                            close: e.toggleExplorer
                        }
                    }) : e._e(), e.showSaveForm ? i("save-form", {
                        attrs: {
                            data: e.savedTheme
                        },
                        on: {
                            save: e.save,
                            cancel: e.toggleSaveForm
                        }
                    }) : e._e(), e.showConfirmSave ? i("confirm-save", {
                        attrs: {
                            title: e.$t(e.id)
                        },
                        on: {
                            yes: e.closeSave,
                            no: e.close,
                            cancel: e.toggleConfirmSave
                        }
                    }) : e._e(), e.showConfirmReset ? i("message-warning", {
                        on: {
                            confirm: e.reset,
                            cancel: e.toggleConfirmReset
                        }
                    }, [e._v(" " + e._s(e.$t("confirm-reset-all")) + " ")]) : e._e(), e.runtimeError ? i("message-error", {
                        on: {
                            close: function(t) {
                                e.runtimeError = null
                            }
                        }
                    }, [e._v(e._s(e.runtimeError))]) : e._e()], 1)
                },
                c = [],
                d = n("02d1"),
                u = n("5070"),
                h = n("e47c"),
                p = n("20a0"),
                m = n("6fd3"),
                b = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col justify-between"
                    }, [n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button",
                        on: {
                            click: function(e) {
                                return t.$emit("load")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:file-import"
                        }
                    }), t._v(" " + t._s(t.$t("load")) + " ")], 1)], 1), n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button",
                        attrs: {
                            disabled: !t.fill
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("fill")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:edit"
                        }
                    }), t._v(" Autofill ")], 1)], 1), n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button",
                        attrs: {
                            disabled: !t.reset
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("reset")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:history"
                        }
                    }), t._v(" " + t._s(t.$t("reset")) + " ")], 1)], 1)]), n("div", {
                        staticClass: "flex flex-col gap-3"
                    }, [n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button",
                        on: {
                            click: function(e) {
                                return t.$emit("download")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:download"
                        }
                    }), t._v(" " + t._s(t.$t("download")) + " ")], 1)], 1), n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button",
                        attrs: {
                            disabled: !t.apply
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("apply")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:check"
                        }
                    }), t._v(" " + t._s(t.$t("apply")) + " ")], 1)], 1), n("div", [n("winui-button", {
                        staticClass: "themestudio__action-button default",
                        attrs: {
                            disabled: !t.save
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("save")
                            }
                        }
                    }, [n("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "la:save"
                        }
                    }), t._v(" " + t._s(t.$t("save")) + " ")], 1)], 1)])])
                },
                w = [],
                f = {
                    props: {
                        fill: Boolean,
                        reset: Boolean,
                        apply: Boolean,
                        save: Boolean
                    }
                },
                g = f,
                v = (n("91f4"), n("2877")),
                x = Object(v["a"])(g, b, w, !1, null, null, null),
                k = x.exports,
                y = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "right-0 bottom-0 absolute overflow-hidden"
                    }, [n("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeInUp faster",
                            "leave-active-class": "animated fadeOutDown fastest"
                        }
                    }, [t.message ? n("div", {
                        staticClass: "bg-red-700 p-2 rounded-tl-lg text-white"
                    }, [t._v(" " + t._s(t.message) + " ")]) : t._e()])], 1)
                },
                O = [],
                _ = {
                    props: {
                        message: String
                    }
                },
                S = _,
                $ = Object(v["a"])(S, y, O, !1, null, null, null),
                C = $.exports,
                Q = n("e1ea"),
                P = n("6792"),
                E = n("3780"),
                T = n("0f8d"),
                z = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("window-main", {
                        attrs: {
                            w: 430,
                            h: 280,
                            centered: ""
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: t.$t("save-as")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.handleClose
                        }
                    })], 1), n("window-body", [n("div", {
                        staticClass: "flex mb-3"
                    }, [n("label", {
                        staticClass: "min-w-40"
                    }, [t._v(t._s(t.$t("name")))]), n("winui-textbox", {
                        ref: "name",
                        attrs: {
                            maxlength: "50"
                        },
                        model: {
                            value: t.name,
                            callback: function(e) {
                                t.name = e
                            },
                            expression: "name"
                        }
                    })], 1), n("div", {
                        staticClass: "flex"
                    }, [n("label", {
                        staticClass: "min-w-40"
                    }, [t._v(t._s(t.$t("thumbnail")))]), n("div", [n("div", {
                        ref: "thumbnail",
                        staticClass: "relative bg-cover bg-no-repeat bg-center mb-3 themestudio__save-thumbnail",
                        style: {
                            "--bg": "url('" + (t.image || t.placeholder) + "')"
                        }
                    }, [t.isLoading ? n("div", {
                        staticClass: "top-0 right-0 bottom-0 left-0 absolute center-flex bg-black/40"
                    }, [n("spinner-win7")], 1) : t._e()]), t.fromUrl ? n("div", {
                        staticClass: "center-flex-x"
                    }, [n("winui-textbox", {
                        staticClass: "mr-3",
                        model: {
                            value: t.url,
                            callback: function(e) {
                                t.url = e
                            },
                            expression: "url"
                        }
                    }), n("winui-button", {
                        staticClass: "themestudio__save-button",
                        attrs: {
                            disabled: !t.url
                        },
                        on: {
                            click: t.load
                        }
                    }, [n("iconify-icon", {
                        attrs: {
                            icon: "fa:check"
                        }
                    })], 1), n("winui-button", {
                        staticClass: "themestudio__save-button",
                        on: {
                            click: t.toggleFromUrl
                        }
                    }, [n("iconify-icon", {
                        attrs: {
                            icon: "fa:times"
                        }
                    })], 1), t.errorMsg ? n("div", {
                        staticClass: "mt-2 text-red-500"
                    }, [t._v(" " + t._s(t.errorMsg) + " ")]) : t._e()], 1) : n("div", [n("winui-button", {
                        attrs: {
                            disabled: t.isLoading
                        },
                        on: {
                            click: t.capture
                        }
                    }, [t._v(" " + t._s(t.$t("take-screenshot")) + " ")]), n("winui-button", {
                        attrs: {
                            disabled: t.isLoading
                        },
                        on: {
                            click: t.toggleFromUrl
                        }
                    }, [t._v(" " + t._s(t.$t("from-url")) + " ")])], 1)])])]), n("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [n("winui-button", {
                        staticClass: "default",
                        attrs: {
                            disabled: !t.name
                        },
                        on: {
                            click: t.save
                        }
                    }, [t._v(" " + t._s(t.$t("save")) + " ")]), n("winui-button", {
                        on: {
                            click: t.handleClose
                        }
                    }, [t._v(t._s(t.$t("cancel")))])], 1)], 1)
                },
                A = [],
                j = n("0f35"),
                R = n("7ea9"),
                I = n("1521"),
                N = n("e863"),
                D = n("7073"),
                W = n("1d26"),
                X = n("e314"),
                L = n("8dc1"),
                U = n("26a1"),
                B = n("2f62"),
                M = n("0fbc"),
                Y = {
                    props: {
                        data: Object
                    },
                    data() {
                        return {
                            name: this.data ? this.data.lbl : null,
                            image: this.data ? this.data.pic : null,
                            url: null,
                            errorMsg: null,
                            fromUrl: !1,
                            isLoading: !1
                        }
                    },
                    computed: { ...Object(B["f"])({
                            assets: "assets"
                        }),
                        placeholder() {
                            return Object(j["a"])(this.assets.assetStore.misc, "noimage")
                        }
                    },
                    watch: {
                        data: {
                            deep: !0,
                            handler(t) {
                                this.name = t.lbl, this.image = t.pic
                            }
                        }
                    },
                    mounted() {
                        this.$refs.name.$el.focus()
                    },
                    methods: {
                        toggleFromUrl() {
                            this.fromUrl = !this.fromUrl, this.errorMsg = null
                        },
                        async capture() {
                            this.isLoading = !0;
                            const {
                                width: t,
                                height: e
                            } = this.$refs.thumbnail.getBoundingClientRect(), n = await Object(L["domToImage"])(Object(U["g"])()), i = document.createElement("canvas");
                            i.width = t, i.height = e, i.getContext("2d").drawImage(n, 0, 0, i.width, i.height), this.image = i.toDataURL(), this.isLoading = !1, i.remove()
                        },
                        async isValid(t) {
                            if (!t) return !0;
                            if (!Object(j["e"])(t)) return !1;
                            try {
                                return await Object(M["j"])(t), !0
                            } catch (e) {
                                return !1
                            }
                        },
                        async load() {
                            this.isLoading = !0, this.errorMsg = await this.isValid(this.url) ? null : this.$t("unsupported-type"), this.errorMsg || (this.image = this.url, this.toggleFromUrl()), this.isLoading = !1
                        },
                        handleClose() {
                            this.$emit("cancel")
                        },
                        save() {
                            this.name && this.$emit("save", {
                                name: this.name,
                                image: this.image
                            })
                        }
                    },
                    components: {
                        WindowMain: W["a"],
                        WindowBody: I["a"],
                        WindowFooter: D["a"],
                        WindowTitlebar: X["a"],
                        WindowControls: N["a"],
                        SpinnerWin7: R["a"]
                    }
                },
                F = Y,
                V = (n("487d"), Object(v["a"])(F, z, A, !1, null, null, null)),
                G = V.exports,
                q = n("968c"),
                Z = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "frag"
                    }, [t.showAd ? n("message-ad", {
                        on: {
                            cancel: function(e) {
                                return t.$emit("close")
                            },
                            close: function(e) {
                                t.showAd = !1
                            }
                        }
                    }) : n("window-main", {
                        attrs: {
                            w: 800,
                            h: 450,
                            parent: "themestudio",
                            centered: "",
                            fullscreen: t.fullscreen
                        },
                        on: {
                            resize: t.handleResize
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: t.$t(t.id)
                        }
                    }, [n("window-controls", {
                        attrs: {
                            disableMinimize: "",
                            maximize: t.handleMaximize,
                            close: t.close
                        }
                    })], 1), n("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [n("winui-tabs", {
                        attrs: {
                            tabs: t.tabs
                        },
                        on: {
                            change: t.handleTabChange
                        },
                        scopedSlots: t._u([{
                            key: "personal",
                            fn: function() {
                                return [n("personal", {
                                    attrs: {
                                        propertiesVisible: t.showProperties
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "community",
                            fn: function() {
                                return [n("community", {
                                    attrs: {
                                        propertiesVisible: t.showProperties
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "templates",
                            fn: function() {
                                return [n("templates")]
                            },
                            proxy: !0
                        }])
                    }), n("div", {
                        staticClass: "flex justify-between mt-3"
                    }, [n("div"), n("div", [n("winui-button", {
                        staticClass: "default",
                        attrs: {
                            disabled: !t.selectedTheme
                        },
                        on: {
                            click: t.loadTheme
                        }
                    }, [t._v(" " + t._s(t.$t("load")) + " ")]), n("winui-button", {
                        attrs: {
                            disabled: !t.selectedTheme
                        },
                        on: {
                            click: t.applyTheme
                        }
                    }, [t._v(" " + t._s(t.$t("apply")) + " ")]), n("winui-button", {
                        on: {
                            click: t.close
                        }
                    }, [t._v(t._s(t.$t("cancel")))])], 1)])], 1)], 1), t.isLoading ? n("loading") : t._e(), n("sponsor-ads", {
                        attrs: {
                            type: "interstitial"
                        }
                    })], 1)
                },
                H = [],
                K = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex h-full"
                    }, [n("div", {
                        staticClass: "flex flex-col w-full h-full"
                    }, [n("div", {
                        staticClass: "flex justify-end gap-4 mb-3"
                    }, [n("div", {
                        staticClass: "center-flex-x gap-1"
                    }, [n("span", {
                        staticClass: "mr-2"
                    }, [t._v(t._s(t.$t("sort-by")))]), n("winui-dropdown", {
                        model: {
                            value: t.sortBy,
                            callback: function(e) {
                                t.sortBy = e
                            },
                            expression: "sortBy"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "use"
                        }
                    }, [t._v(t._s(t.$t("most-uses")))]), n("option", {
                        attrs: {
                            value: "date"
                        }
                    }, [t._v(t._s(t.$t("newest")))])])], 1), n("winui-searchbox", {
                        attrs: {
                            placeholder: t.$t("search")
                        },
                        on: {
                            search: t.handleSearch
                        }
                    })], 1), t.searchByUser ? n("div", {
                        staticClass: "mb-3"
                    }, [n("h2", {
                        staticClass: "font-normal"
                    }, [t._v(" " + t._s(t.$t("viewing-creations-of")) + " "), n("b", [t._v(t._s(t.searchByUser))]), n("span", {
                        staticClass: "ml-1 text-sm"
                    }, [t._v("["), n("winui-link", {
                        staticClass: "inline",
                        attrs: {
                            text: t.$t("reset")
                        },
                        on: {
                            click: t.resetUser
                        }
                    }), t._v("]")], 1)])]) : t._e(), n("theme-listing", {
                        attrs: {
                            themes: t.themes,
                            sortBy: t.sortBy
                        }
                    }, [n("infinite-loading", {
                        staticClass: "w-full",
                        attrs: {
                            identifier: t.identifier
                        },
                        on: {
                            infinite: t.fetch
                        }
                    }, [n("div", {
                        attrs: {
                            slot: "no-more"
                        },
                        slot: "no-more"
                    }), n("div", {
                        attrs: {
                            slot: "no-results"
                        },
                        slot: "no-results"
                    }), n("template", {
                        slot: "spinner"
                    }, [n("spinner-win7", {
                        staticClass: "justify-center my-4"
                    }, [t._v(t._s(t.$t("wait")))])], 1)], 2)], 1)], 1), t.propertiesVisible ? n("theme-properties", {
                        attrs: {
                            data: t.metadata,
                            hasDelete: t.isAuthor
                        },
                        on: {
                            searchByUser: t.handleSearchByUser,
                            delete: t.handleDelete
                        }
                    }) : t._e()], 1)
                },
                J = [],
                tt = n("2866"),
                et = n("e166"),
                nt = n.n(et),
                it = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("base-scrollbox", {
                        attrs: {
                            containerClass: "flex flex-wrap items-start gap-2 themestudio__theme-list"
                        }
                    }, [t._l(t.themes, (function(e) {
                        return n("button", {
                            directives: [{
                                name: "tap",
                                rawName: "v-tap:400",
                                value: t.load,
                                expression: "load",
                                arg: "400"
                            }],
                            key: e.id,
                            class: ["relative flex flex-col p-3 w-52 text-left themestudio__theme-item", {
                                "is-selected": t.selectedTheme && t.selectedTheme.id === e.id
                            }],
                            on: {
                                click: function(n) {
                                    return t.selectTheme(e)
                                }
                            }
                        }, [n("span", {
                            staticClass: "mb-3 h-28 themestudio__theme-preview"
                        }, [n("lazy-image", {
                            staticClass: "w-full h-full object-cover themestudio__theme-image",
                            attrs: {
                                src: e.pic || t.placeholder,
                                alt: e.lbl
                            }
                        })], 1), n("span", {
                            staticClass: "w-full overflow-hidden font-semibold text-ellipsis whitespace-nowrap themestudio__theme-label"
                        }, [t._v(" " + t._s(e.lbl) + " ")])])
                    })), t._t("default")], 2)
                },
                rt = [],
                at = n("ad1f"),
                ot = n("d7a2"),
                st = {
                    props: {
                        themes: Array,
                        sortBy: String
                    },
                    computed: { ...a["c"].mapState(["selectedTheme"]),
                        ...Object(B["f"])({
                            assets: "assets"
                        }),
                        placeholder() {
                            return Object(j["a"])(this.assets.assetStore.misc, "noimage")
                        }
                    },
                    methods: { ...a["c"].mapActions([a["a"].SelectTheme, a["a"].LoadTheme]),
                        load(t, e) {
                            e && this[a["a"].LoadTheme]()
                        },
                        infinite(t) {
                            this.$emit("fetch", t)
                        }
                    },
                    components: {
                        BaseScrollbox: at["a"],
                        LazyImage: ot["a"]
                    }
                },
                lt = st,
                ct = (n("937b"), Object(v["a"])(lt, it, rt, !1, null, null, null)),
                dt = ct.exports,
                ut = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "relative flex flex-col ml-4 w-1/4 shrink-0"
                    }, [n("div", {
                        staticClass: "h-full overflow-auto"
                    }, [n("div", {
                        class: ["relative mb-2 w-full h-1/2 overflow-hidden", {
                            "bg-black/10": !t.data
                        }]
                    }, [t.data ? n("img", {
                        staticClass: "top-1/2 absolute w-full h-auto object-cover -translate-y-1/2",
                        attrs: {
                            src: t.data.pic || t.placeholder,
                            alt: t.data.lbl
                        }
                    }) : t._e()]), n("table", {
                        staticClass: "w-full themestudio__theme-props"
                    }, [n("tr", [n("td", {
                        staticClass: "align-top"
                    }, [t._v(t._s(t.$t("name")) + ":")]), n("td", {
                        staticClass: "font-semibold"
                    }, [t._v(t._s(t.data && t.data.lbl ? t.data.lbl : "--"))])]), n("tr", [n("td", [t._v(t._s(t.$t("created-by")) + ":")]), n("td", [t.data && t.data.author ? n("winui-link", {
                        staticClass: "break-all",
                        on: {
                            click: function(e) {
                                return t.$emit("searchByUser", {
                                    id: t.data.own,
                                    name: t.data.author
                                })
                            }
                        }
                    }, [t._v(" " + t._s(t.data.author) + " ")]) : [t._v("--")]], 2)]), n("tr", [n("td", [t._v(t._s(t.$t("date")) + ":")]), n("td", [t._v(t._s(t.data && t.data.date ? t.formatDate(t.data.date) : "--"))])]), n("tr", [n("td", [t._v(t._s(t.$t("downloads")) + ":")]), n("td", [t._v(t._s(t.data && t.data.use ? t.data.use : "--"))])])])]), t.data ? n("div", {
                        staticClass: "flex justify-center mt-3"
                    }, [t.hasPublish ? n("winui-button", {
                        staticClass: "w-full default",
                        on: {
                            click: function(e) {
                                return t.$emit("publish")
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("publish")) + " ")]) : t._e(), t.hasDelete ? n("winui-button", {
                        staticClass: "w-full",
                        on: {
                            click: function(e) {
                                return t.$emit("delete")
                            }
                        }
                    }, [t._v(t._s(t.$t("delete")))]) : t._e()], 1) : t._e()])
                },
                ht = [],
                pt = n("c466"),
                mt = {
                    props: {
                        data: Object,
                        hasPublish: Boolean,
                        hasDelete: Boolean
                    },
                    computed: { ...Object(B["f"])({
                            assets: "assets"
                        }),
                        placeholder() {
                            return Object(j["a"])(this.assets.assetStore.misc, "noimage")
                        }
                    },
                    methods: {
                        formatDate: pt["c"]
                    }
                },
                bt = mt,
                wt = (n("6529"), Object(v["a"])(bt, ut, ht, !1, null, null, null)),
                ft = wt.exports,
                gt = n("5500"),
                vt = n("51e6"),
                xt = {
                    components: {
                        ThemeListing: dt,
                        ThemeProperties: ft,
                        InfiniteLoading: nt.a,
                        SpinnerWin7: R["a"]
                    },
                    props: {
                        propertiesVisible: Boolean
                    },
                    data() {
                        return {
                            themes: null,
                            sortBy: "use",
                            page: 0,
                            identifier: Date.now(),
                            searchText: "",
                            searchByUser: null,
                            metadata: null
                        }
                    },
                    computed: { ...a["c"].mapState(["selectedTheme", "activeTab"]),
                        ...a["c"].mapGetters(["isAuthor"]),
                        replica() {
                            const t = "use" === this.sortBy ? tt["b"] : `${tt["b"]} (${this.sortBy})`;
                            return Object(tt["a"])(t)
                        }
                    },
                    watch: {
                        sortBy() {
                            this.reset()
                        },
                        async selectedTheme(t) {
                            if (!t || "community" !== this.activeTab) return void(this.metadata = null);
                            let e, n;
                            this[a["a"].SetLoading](!0);
                            try {
                                e = await Object(gt["get"])(`${a["b"]}/users/${t.id}`), n = await Object(gt["get"])(`users/${e.own}/name`)
                            } catch (i) {}
                            this.metadata = { ...e,
                                author: n
                            }, this[a["a"].SetLoading](!1)
                        }
                    },
                    mounted() {
                        this.fetch()
                    },
                    methods: { ...a["c"].mapActions([a["a"].SetLoading, a["a"].DeleteTheme]),
                        async fetch(t) {
                            const {
                                hits: e,
                                hitsPerPage: n
                            } = await this.replica.search(this.searchText, {
                                page: this.page++
                            });
                            this.themes = this.themes ? [...this.themes, ...e] : e, t && (e.length < n ? t.complete() : t.loaded())
                        },
                        reset() {
                            this.page = 0, this.themes = [], this.identifier = Date.now()
                        },
                        resetUser() {
                            this.searchText = "", this.searchByUser = null, this.reset()
                        },
                        async handleDelete() {
                            try {
                                const t = await this[a["a"].DeleteTheme]();
                                this.themes = this.themes.filter(e => e.id !== t), Object(vt["showToast"])(this.$t("theme-deleted-success"))
                            } catch (t) {
                                Object(vt["showToast"])(this.$t("theme-delete-error"))
                            }
                            this.$forceUpdate()
                        },
                        handleSearch(t, e = !0) {
                            e && this.resetUser(), this.searchText = t, this.reset()
                        },
                        handleSearchByUser(t) {
                            this.searchByUser = t.name, this.handleSearch(t.id, !1)
                        }
                    }
                },
                kt = xt,
                yt = Object(v["a"])(kt, K, J, !1, null, null, null),
                Ot = yt.exports,
                _t = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "top-0 left-0 absolute w-full h-full"
                    }, [n("window-main-static", {
                        attrs: {
                            variant: "wait"
                        }
                    }, [t._v(t._s(t.$t("wait")))])], 1)
                },
                St = [],
                $t = n("411e"),
                Ct = {
                    components: {
                        WindowMainStatic: $t["a"]
                    }
                },
                Qt = Ct,
                Pt = Object(v["a"])(Qt, _t, St, !1, null, null, null),
                Et = Pt.exports,
                Tt = n("47e9"),
                zt = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex h-full"
                    }, [n("div", {
                        staticClass: "flex flex-col w-full h-full"
                    }, [t.themes ? t.themes.length ? n("theme-listing", {
                        attrs: {
                            themes: t.themes
                        }
                    }) : n("div", {
                        staticClass: "opacity-40 p-4 text-center"
                    }, [n("iconify-icon", {
                        staticClass: "text-9xl",
                        attrs: {
                            icon: "la:inbox"
                        }
                    }), n("div", {
                        staticClass: "text-xl"
                    }, [t._v(t._s(t.$t("no-items")))])], 1) : n("spinner-win7", {
                        staticClass: "m-auto"
                    }, [t._v(t._s(t.$t("wait")))])], 1), t.propertiesVisible ? n("theme-properties", {
                        attrs: {
                            data: t.selectedTheme,
                            hasPublish: t.canPublish,
                            hasDelete: t.canPublish || t.isAuthor
                        },
                        on: {
                            delete: t.handleDelete,
                            publish: t.handlePublish
                        }
                    }) : t._e()], 1)
                },
                At = [],
                jt = n("243e"),
                Rt = n("0e9a"),
                It = {
                    components: {
                        SpinnerWin7: R["a"],
                        ThemeListing: dt,
                        ThemeProperties: ft
                    },
                    props: {
                        propertiesVisible: Boolean
                    },
                    data() {
                        return {
                            themes: null
                        }
                    },
                    computed: { ...Object(B["f"])(["user"]),
                        ...a["c"].mapState(["selectedTheme"]),
                        ...a["c"].mapGetters(["isAuthor", "canPublish"])
                    },
                    mounted() {
                        this.fetch()
                    },
                    methods: { ...a["c"].mapActions([a["a"].SelectTheme, a["a"].DeleteTheme, a["a"].SetLoading]),
                        async fetch() {
                            this.themes = await q["default"].local.get(a["b"], this.user) || []
                        },
                        async handlePublish() {
                            const {
                                style: t,
                                ...e
                            } = this.selectedTheme, n = `${a["b"]}/users/${e.id}`, i = await Object(gt["get"])(n + "/use"), r = this.themes.filter(t => t.id !== e.id);
                            if (e.use = i || 0, e.date = Date.now(), e.own = this.user.uid, this[a["a"].SetLoading](!0), Object(Rt["h"])(e.pic)) {
                                const t = Object(M["g"])(e.pic),
                                    i = n + ".png";
                                try {
                                    await Object(jt["c"])(i, t), e.pic = await Object(jt["a"])(i)
                                } catch (s) {}
                            }
                            const o = [Object(tt["a"])(tt["b"]).saveObject({ ...e,
                                objectID: e.id
                            }), Object(gt["update"])(n, e), Object(jt["c"])(n + ".css", t), q["default"].local.update(a["b"], this.user, r)];
                            try {
                                await Promise.all(o), Object(vt["showToast"])(this.$t("theme-publish-success"))
                            } catch (s) {
                                Object(vt["showToast"])(this.$t("theme-publish-error"))
                            }
                            this.themes = r, this[a["a"].SetLoading](!1), this[a["a"].SelectTheme](null)
                        },
                        async handleDelete() {
                            try {
                                const t = await this[a["a"].DeleteTheme]();
                                this.themes = this.themes.filter(e => e.id !== t), Object(vt["showToast"])(this.$t("theme-deleted-success"))
                            } catch (t) {
                                Object(vt["showToast"])(this.$t("theme-delete-error"))
                            }
                        }
                    }
                },
                Nt = It,
                Dt = Object(v["a"])(Nt, zt, At, !1, null, null, null),
                Wt = Dt.exports,
                Xt = n("c88e"),
                Lt = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        directives: [{
                            name: "frag",
                            rawName: "v-frag"
                        }]
                    }, [t.themes ? n("theme-listing", {
                        attrs: {
                            themes: t.themes
                        }
                    }) : n("spinner-win7", {
                        staticClass: "m-auto"
                    }, [t._v(t._s(t.$t("wait")))])], 1)
                },
                Ut = [],
                Bt = {
                    name: "Templates",
                    components: {
                        ThemeListing: dt,
                        SpinnerWin7: R["a"]
                    },
                    data() {
                        return {
                            themes: null
                        }
                    },
                    async mounted() {
                        const t = await Object(gt["get"])(a["b"] + "/templates");
                        this.themes = Object.values(t)
                    }
                },
                Mt = Bt,
                Yt = Object(v["a"])(Mt, Lt, Ut, !1, null, null, null),
                Ft = Yt.exports,
                Vt = n("d519"),
                Gt = {
                    props: {
                        id: String
                    },
                    data() {
                        return {
                            showAd: !0,
                            showProperties: !0,
                            fullscreen: !1,
                            tabs: {
                                personal: this.$t("my-creations"),
                                community: this.$t("public-gallery"),
                                templates: this.$t("templates")
                            }
                        }
                    },
                    computed: { ...a["c"].mapState(["selectedTheme", "isLoading"])
                    },
                    mounted() {
                        this[a["a"].ActiveTab]("personal")
                    },
                    methods: { ...a["c"].mapActions([a["a"].SelectTheme, a["a"].LoadTheme, a["a"].ApplyTheme, a["a"].ActiveTab]),
                        async handleMaximize() {
                            this.fullscreen = !this.fullscreen, await this.$nextTick(), this.showProperties = Object(Vt["a"])(this.$el, "down").clientWidth > 640
                        },
                        handleResize(t) {
                            this.showProperties = t > 640 || "full" === t
                        },
                        handleTabChange(t) {
                            this[a["a"].ActiveTab](t), this[a["a"].SelectTheme](null)
                        },
                        close() {
                            this[a["a"].SelectTheme](null), this.$emit("close")
                        }
                    },
                    components: {
                        WindowMain: W["a"],
                        WindowBody: I["a"],
                        WindowTitlebar: X["a"],
                        WindowControls: N["a"],
                        Loading: Et,
                        Community: Ot,
                        Templates: Ft,
                        Personal: Wt,
                        MessageAd: Tt["a"],
                        SponsorAds: Xt["a"]
                    }
                },
                qt = Gt,
                Zt = Object(v["a"])(qt, Z, H, !1, null, null, null),
                Ht = Zt.exports,
                Kt = n("01b4"),
                Jt = n("3cb5"),
                te = n("f389"),
                ee = n("0c40"),
                ne = n.n(ee),
                ie = n("2cfc"),
                re = n("5a84");
            const ae = 93,
                oe = 1,
                se = 94,
                le = 95,
                ce = 2,
                de = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
                ue = 58,
                he = 40,
                pe = 95,
                me = 91,
                be = 45,
                we = 46,
                fe = 35,
                ge = 37;

            function ve(t) {
                return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 161
            }

            function xe(t) {
                return t >= 48 && t <= 57
            }
            const ke = new ie["a"]((t, e) => {
                    for (let n = !1, i = 0, r = 0;; r++) {
                        let {
                            next: a
                        } = t;
                        if (!(ve(a) || a == be || a == pe || n && xe(a))) {
                            n && t.acceptToken(a == he ? se : 2 == i && e.canShift(ce) ? ce : le);
                            break
                        }!n && (a != be || r > 0) && (n = !0), i === r && a == be && i++, t.advance()
                    }
                }),
                ye = new ie["a"](t => {
                    if (de.includes(t.peek(-1))) {
                        let {
                            next: e
                        } = t;
                        (ve(e) || e == pe || e == fe || e == we || e == me || e == ue || e == be) && t.acceptToken(ae)
                    }
                }),
                Oe = new ie["a"](t => {
                    if (!de.includes(t.peek(-1))) {
                        let {
                            next: e
                        } = t;
                        if (e == ge && (t.advance(), t.acceptToken(oe)), ve(e)) {
                            do {
                                t.advance()
                            } while (ve(t.next));
                            t.acceptToken(oe)
                        }
                    }
                }),
                _e = Object(re["b"])({
                    "AtKeyword import charset namespace keyframes media supports": re["d"].definitionKeyword,
                    "from to selector": re["d"].keyword,
                    NamespaceName: re["d"].namespace,
                    KeyframeName: re["d"].labelName,
                    TagName: re["d"].tagName,
                    ClassName: re["d"].className,
                    PseudoClassName: re["d"].constant(re["d"].className),
                    IdName: re["d"].labelName,
                    "FeatureName PropertyName": re["d"].propertyName,
                    AttributeName: re["d"].attributeName,
                    NumberLiteral: re["d"].number,
                    KeywordQuery: re["d"].keyword,
                    UnaryQueryOp: re["d"].operatorKeyword,
                    "CallTag ValueName": re["d"].atom,
                    VariableName: re["d"].variableName,
                    Callee: re["d"].operatorKeyword,
                    Unit: re["d"].unit,
                    "UniversalSelector NestingSelector": re["d"].definitionOperator,
                    MatchOp: re["d"].compareOperator,
                    "ChildOp SiblingOp, LogicOp": re["d"].logicOperator,
                    BinOp: re["d"].arithmeticOperator,
                    Important: re["d"].modifier,
                    Comment: re["d"].blockComment,
                    ParenthesizedContent: re["d"].special(re["d"].name),
                    ColorLiteral: re["d"].color,
                    StringLiteral: re["d"].string,
                    ":": re["d"].punctuation,
                    "PseudoOp #": re["d"].derefOperator,
                    "; ,": re["d"].separator,
                    "( )": re["d"].paren,
                    "[ ]": re["d"].squareBracket,
                    "{ }": re["d"].brace
                }),
                Se = {
                    __proto__: null,
                    lang: 32,
                    "nth-child": 32,
                    "nth-last-child": 32,
                    "nth-of-type": 32,
                    "nth-last-of-type": 32,
                    dir: 32,
                    "host-context": 32,
                    url: 60,
                    "url-prefix": 60,
                    domain: 60,
                    regexp: 60,
                    selector: 134
                },
                $e = {
                    __proto__: null,
                    "@import": 114,
                    "@media": 138,
                    "@charset": 142,
                    "@namespace": 146,
                    "@keyframes": 152,
                    "@supports": 164
                },
                Ce = {
                    __proto__: null,
                    not: 128,
                    only: 128,
                    from: 158,
                    to: 160
                },
                Qe = ie["b"].deserialize({
                    version: 14,
                    states: "7WOYQ[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO!ZQ[O'#CfO!}QXO'#CaO#UQ[O'#ChO#aQ[O'#DPO#fQ[O'#DTOOQP'#Ec'#EcO#kQdO'#DeO$VQ[O'#DrO#kQdO'#DtO$hQ[O'#DvO$sQ[O'#DyO$xQ[O'#EPO%WQ[O'#EROOQS'#Eb'#EbOOQS'#ES'#ESQYQ[OOOOQP'#Cg'#CgOOQP,59Q,59QO!ZQ[O,59QO%_Q[O'#EVO%yQWO,58{O&RQ[O,59SO#aQ[O,59kO#fQ[O,59oO%_Q[O,59sO%_Q[O,59uO%_Q[O,59vO'bQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO'iQWO,59SO'nQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO'sQ`O,59oOOQS'#Cp'#CpO#kQdO'#CqO'{QvO'#CsO)VQtO,5:POOQO'#Cx'#CxO'nQWO'#CwO)kQWO'#CyOOQS'#Ef'#EfOOQO'#Dh'#DhO)pQ[O'#DoO*OQWO'#EiO$xQ[O'#DmO*^QWO'#DpOOQO'#Ej'#EjO%|QWO,5:^O*cQpO,5:`OOQS'#Dx'#DxO*kQWO,5:bO*pQ[O,5:bOOQO'#D{'#D{O*xQWO,5:eO*}QWO,5:kO+VQWO,5:mOOQS-E8Q-E8QOOQP1G.l1G.lO+yQXO,5:qOOQO-E8T-E8TOOQS1G.g1G.gOOQP1G.n1G.nO'iQWO1G.nO'nQWO1G.nOOQP1G/V1G/VO,WQ`O1G/ZO,qQXO1G/_O-XQXO1G/aO-oQXO1G/bO.VQXO'#CdO.zQWO'#DaOOQS,59z,59zO/PQWO,59zO/XQ[O,59zO/`Q[O'#DOO/gQdO'#CoOOQP1G/Z1G/ZO#kQdO1G/ZO/nQpO,59]OOQS,59_,59_O#kQdO,59aO/vQWO1G/kOOQS,59c,59cO/{Q!bO,59eO0TQWO'#DhO0`QWO,5:TO0eQWO,5:ZO$xQ[O,5:VO$xQ[O'#EYO0mQWO,5;TO0xQWO,5:XO%_Q[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O1ZQWO1G/|O1`QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XOOQP7+$Y7+$YOOQP7+$u7+$uO#kQdO7+$uO#kQdO,59{O1nQ[O'#EXO1xQWO1G/fOOQS1G/f1G/fO1xQWO1G/fO2QQXO'#EhO2XQWO,59jO2^QtO'#ETO3RQdO'#EeO3]QWO,59ZO3bQpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO3jQWO1G/PO#kQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO3oQWO,5:tOOQO-E8W-E8WO3}QXO1G/vOOQS7+%h7+%hO4UQYO'#CsO%|QWO'#EZO4^QdO,5:hOOQS,5:h,5:hO4lQpO<<HaO4tQtO1G/gOOQO,5:s,5:sO5XQ[O,5:sOOQO-E8V-E8VOOQS7+%Q7+%QO5cQWO7+%QO5kQWO,5;SOOQP1G/U1G/UOOQS-E8R-E8RO#kQdO'#EUO5sQWO,5;POOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO5{QdO7+%ZOOQO7+%b7+%bOOQS,5:u,5:uOOQS-E8X-E8XOOQS1G0S1G0SOOQPAN={AN={O6SQtO'#EWO#kQdO'#EWO6}QdO7+%ROOQO7+%R7+%ROOQO1G0_1G0_OOQS<<Hl<<HlO7_QdO,5:pOOQO-E8S-E8SOOQO<<Hu<<HuO7iQtO,5:rOOQS-E8U-E8UOOQO<<Hm<<Hm",
                    stateData: "8j~O#TOSROS~OUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#RPO#WRO~O#RcO~O]hO^hOpfOtiOxjO|kO!PmO#PlO#WeO~O!RnO~P!`O`tO#QqO#RpO~O#RuO~O#RwO~OQ!QObzOf!QOh!QOn!PO#Q}O#RyO#Z{O~Ob!SO!b!UO!e!VO#R!RO!R#]P~Oh![On!PO#R!ZO~O#R!^O~Ob!SO!b!UO!e!VO#R!RO~O!W#]P~P$VOUWOXWO]TO^TOtUOxVO#RPO#WRO~OpfO!RnO~O`!iO#QqO#RpO~OQ!pOUWOXWO]TO^TOtUOxVO!Y_O!ZXO!gYO!iZO!k[O!n]O!t^O#R!oO#WRO~O!Q!qO~P&^Ob!tO~Ob!uO~Ov!vOz!wO~OP!yObgXjgX!WgX!bgX!egX#RgXagXQgXfgXhgXngXpgX#QgX#ZgXvgX!QgX!VgX~Ob!SOj!zO!b!UO!e!VO#R!RO!W#]P~Ob!}O~Ob!SO!b!UO!e!VO#R#OO~Op#SO!`#RO!R#]X!W#]X~Ob#VO~Oj!zO!W#XO~O!W#YO~Oh#ZOn!PO~O!R#[O~O!RnO!`#RO~O!RnO!W#_O~O]hO^hOtiOxjO|kO!PmO#PlO#WeO~Op!ya!R!yaa!ya~P+_Ov#aOz#bO~O]hO^hOtiOxjO#WeO~Op{i|{i!P{i!R{i#P{ia{i~P,`Op}i|}i!P}i!R}i#P}ia}i~P,`Op!Oi|!Oi!P!Oi!R!Oi#P!Oia!Oi~P,`O]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#PWX#WWX~O]#cO~O!Q#fO!W#dO~O!Q#fO~P&^Oa#[P~P%_Oa#XP~P#kOa#nOj!zO~O!W#pO~Oh#qOo#qO~O]!^Xa![X!`![X~O]#rO~Oa#sO!`#RO~Op#SO!R#]a!W#]a~O!`#ROp!aa!R!aa!W!aaa!aa~O!W#xO~O!Q#|O!q#zO!r#zO#Z#yO~O!Q!{X!W!{X~P&^O!Q$SO!W#dO~Oa#[X~P!`Oa$VO~Oj!zOQ!wXa!wXb!wXf!wXh!wXn!wXp!wX#Q!wX#R!wX#Z!wX~Op$XOa#XX~P#kOa$ZO~Oj!zOv$[O~Oa$]O~O!`#ROp!|a!R!|a!W!|a~Oa$_O~P+_OP!yO!RgX~O!Q$bO!q#zO!r#zO#Z#yO~Oj!zOv$cO~Oj!zOp$eO!V$gO!Q!Ti!W!Ti~P#kO!Q!{a!W!{a~P&^O!Q$iO!W#dO~OpfOa#[a~Op$XOa#Xa~Oa$lO~P#kOj!zOQ!zXb!zXf!zXh!zXn!zXp!zX!Q!zX!V!zX!W!zX#Q!zX#R!zX#Z!zX~Op$eO!V$oO!Q!Tq!W!Tq~P#kOa!xap!xa~P#kOj!zOQ!zab!zaf!zah!zan!zap!za!Q!za!V!za!W!za#Q!za#R!za#Z!za~Oo#Zj!Pj~",
                    goto: ",O#_PPPPP#`P#h#vP#h$U#hPP$[PPP$b$k$kP$}P$kP$k%e%wPPP&a&g#hP&mP#hP&sP#hP#h#hPPP&y']'iPP#`PP'o'o'y'oP'oP'o'oP#`P#`P#`P'|#`P(P(SPP#`P#`(V(e(s(y)T)Z)e)kPPPPPP)q)yP*e*hP+^+a+j]`Obn!s#d$QiWObfklmn!s!t#V#d$QiQObfklmn!s!t#V#d$QQdRR!ceQrTR!ghQ!gtQ!|!OR#`!iq!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jp!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jT#z#[#{q!OXZz!u!w!z#b#c#k#r$O$X$^$e$f$jp!QXZz!u!w!z#b#c#k#r$O$X$^$e$f$jQ![[R#Z!]QsTR!hhQ!gsR#`!hQvUR!jiQxVR!kjQoSQ!fgQ#W!XQ#^!`Q#_!aR$`#zQ!rnQ#g!sQ$P#dR$h$QX!pn!s#d$Qa!WY^_|!S!U#R#SR#P!SR!][R!_]R#]!_QbOU!bb!s$QQ!snR$Q#dQ#k!uU$W#k$^$jQ$^#rR$j$XQ$Y#kR$k$YQgSS!eg$UR$U#hQ$f$OR$n$fQ#e!rS$R#e$TR$T#gQ#T!TR#v#TQ#{#[R$a#{]aObn!s#d$Q[SObn!s#d$QQ!dfQ!lkQ!mlQ!nmQ#h!tR#w#VR#l!uQ|XQ!YZQ!xz[#j!u#k#r$X$^$jQ#m!wQ#o!zQ#}#bQ$O#cS$d$O$fR$m$eR#i!tQ!XYQ!a_R!{|U!TY_|Q!`^Q#Q!SQ#U!UQ#t#RR#u#S",
                    nodeNames: "⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule",
                    maxTerm: 106,
                    nodeProps: [
                        ["openedBy", 17, "(", 48, "{"],
                        ["closedBy", 18, ")", 49, "}"]
                    ],
                    propSources: [_e],
                    skippedNodes: [0, 3],
                    repeatNodeCount: 8,
                    tokenData: "Ay~R![OX$wX^%]^p$wpq%]qr(crs+}st,otu2Uuv$wvw2rwx2}xy3jyz3uz{3z{|4_|}8U}!O8a!O!P8x!P!Q9Z!Q![;e![!]<Y!]!^<x!^!_$w!_!`=T!`!a=`!a!b$w!b!c>O!c!}$w!}#O?[#O#P$w#P#Q?g#Q#R2U#R#T$w#T#U?r#U#c$w#c#d@q#d#o$w#o#pAQ#p#q2U#q#rA]#r#sAh#s#y$w#y#z%]#z$f$w$f$g%]$g#BY$w#BY#BZ%]#BZ$IS$w$IS$I_%]$I_$I|$w$I|$JO%]$JO$JT$w$JT$JU%]$JU$KV$w$KV$KW%]$KW&FU$w&FU&FV%]&FV~$wW$zQOy%Qz~%QW%VQoWOy%Qz~%Q~%bf#T~OX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q~&}f#T~oWOX%QX^&v^p%Qpq&vqy%Qz#y%Q#y#z&v#z$f%Q$f$g&v$g#BY%Q#BY#BZ&v#BZ$IS%Q$IS$I_&v$I_$I|%Q$I|$JO&v$JO$JT%Q$JT$JU&v$JU$KV%Q$KV$KW&v$KW&FU%Q&FU&FV&v&FV~%Q^(fSOy%Qz#]%Q#]#^(r#^~%Q^(wSoWOy%Qz#a%Q#a#b)T#b~%Q^)YSoWOy%Qz#d%Q#d#e)f#e~%Q^)kSoWOy%Qz#c%Q#c#d)w#d~%Q^)|SoWOy%Qz#f%Q#f#g*Y#g~%Q^*_SoWOy%Qz#h%Q#h#i*k#i~%Q^*pSoWOy%Qz#T%Q#T#U*|#U~%Q^+RSoWOy%Qz#b%Q#b#c+_#c~%Q^+dSoWOy%Qz#h%Q#h#i+p#i~%Q^+wQ!VUoWOy%Qz~%Q~,QUOY+}Zr+}rs,ds#O+}#O#P,i#P~+}~,iOh~~,lPO~+}_,tWtPOy%Qz!Q%Q!Q![-^![!c%Q!c!i-^!i#T%Q#T#Z-^#Z~%Q^-cWoWOy%Qz!Q%Q!Q![-{![!c%Q!c!i-{!i#T%Q#T#Z-{#Z~%Q^.QWoWOy%Qz!Q%Q!Q![.j![!c%Q!c!i.j!i#T%Q#T#Z.j#Z~%Q^.qWfUoWOy%Qz!Q%Q!Q![/Z![!c%Q!c!i/Z!i#T%Q#T#Z/Z#Z~%Q^/bWfUoWOy%Qz!Q%Q!Q![/z![!c%Q!c!i/z!i#T%Q#T#Z/z#Z~%Q^0PWoWOy%Qz!Q%Q!Q![0i![!c%Q!c!i0i!i#T%Q#T#Z0i#Z~%Q^0pWfUoWOy%Qz!Q%Q!Q![1Y![!c%Q!c!i1Y!i#T%Q#T#Z1Y#Z~%Q^1_WoWOy%Qz!Q%Q!Q![1w![!c%Q!c!i1w!i#T%Q#T#Z1w#Z~%Q^2OQfUoWOy%Qz~%QY2XSOy%Qz!_%Q!_!`2e!`~%QY2lQzQoWOy%Qz~%QX2wQXPOy%Qz~%Q~3QUOY2}Zw2}wx,dx#O2}#O#P3d#P~2}~3gPO~2}_3oQbVOy%Qz~%Q~3zOa~_4RSUPjSOy%Qz!_%Q!_!`2e!`~%Q_4fUjS!PPOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q^4}SoWOy%Qz!Q%Q!Q![5Z![~%Q^5bWoW#ZUOy%Qz!Q%Q!Q![5Z![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q^6PWoWOy%Qz{%Q{|6i|}%Q}!O6i!O!Q%Q!Q![6z![~%Q^6nSoWOy%Qz!Q%Q!Q![6z![~%Q^7RSoW#ZUOy%Qz!Q%Q!Q![6z![~%Q^7fYoW#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%Q_8ZQpVOy%Qz~%Q^8fUjSOy%Qz!O%Q!O!P4x!P!Q%Q!Q![7_![~%Q_8}S#WPOy%Qz!Q%Q!Q![5Z![~%Q~9`RjSOy%Qz{9i{~%Q~9nSoWOy9iyz9zz{:o{~9i~9}ROz9zz{:W{~9z~:ZTOz9zz{:W{!P9z!P!Q:j!Q~9z~:oOR~~:tUoWOy9iyz9zz{:o{!P9i!P!Q;W!Q~9i~;_QoWR~Oy%Qz~%Q^;jY#ZUOy%Qz!O%Q!O!P5Z!P!Q%Q!Q![7_![!g%Q!g!h5z!h#X%Q#X#Y5z#Y~%QX<_S]POy%Qz![%Q![!]<k!]~%QX<rQ^PoWOy%Qz~%Q_<}Q!WVOy%Qz~%QY=YQzQOy%Qz~%QX=eS|POy%Qz!`%Q!`!a=q!a~%QX=xQ|PoWOy%Qz~%QX>RUOy%Qz!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX>lY!YPoWOy%Qz}%Q}!O>e!O!Q%Q!Q![>e![!c%Q!c!}>e!}#T%Q#T#o>e#o~%QX?aQxPOy%Qz~%Q^?lQvUOy%Qz~%QX?uSOy%Qz#b%Q#b#c@R#c~%QX@WSoWOy%Qz#W%Q#W#X@d#X~%QX@kQ!`PoWOy%Qz~%QX@tSOy%Qz#f%Q#f#g@d#g~%QXAVQ!RPOy%Qz~%Q_AbQ!QVOy%Qz~%QZAmS!PPOy%Qz!_%Q!_!`2e!`~%Q",
                    tokenizers: [ye, Oe, ke, 0, 1, 2, 3],
                    topRules: {
                        StyleSheet: [0, 4]
                    },
                    specialized: [{
                        term: 94,
                        get: t => Se[t] || -1
                    }, {
                        term: 56,
                        get: t => $e[t] || -1
                    }, {
                        term: 95,
                        get: t => Ce[t] || -1
                    }],
                    tokenPrec: 1078
                });
            var Pe = n("caa4"),
                Ee = n("9669");
            let Te = null;

            function ze() {
                if (!Te && "object" == typeof document && document.body) {
                    let {
                        style: t
                    } = document.body, e = [], n = new Set;
                    for (let i in t) "cssText" != i && "cssFloat" != i && "string" == typeof t[i] && (/[A-Z]/.test(i) && (i = i.replace(/[A-Z]/g, t => "-" + t.toLowerCase())), n.has(i) || (e.push(i), n.add(i)));
                    Te = e.sort().map(t => ({
                        type: "property",
                        label: t
                    }))
                }
                return Te || []
            }
            const Ae = ["active", "after", "any-link", "autofill", "backdrop", "before", "checked", "cue", "default", "defined", "disabled", "empty", "enabled", "file-selector-button", "first", "first-child", "first-letter", "first-line", "first-of-type", "focus", "focus-visible", "focus-within", "fullscreen", "has", "host", "host-context", "hover", "in-range", "indeterminate", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "marker", "modal", "not", "nth-child", "nth-last-child", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "part", "placeholder", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "selection", "slotted", "target", "target-text", "valid", "visited", "where"].map(t => ({
                    type: "class",
                    label: t
                })),
                je = ["above", "absolute", "activeborder", "additive", "activecaption", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "antialiased", "appworkspace", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic-abegede-gez", "ethiopic-halehame-aa-er", "ethiopic-halehame-gez", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "graytext", "grid", "groove", "hand", "hard-light", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "keep-all", "landscape", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lowercase", "ltr", "luminosity", "manipulation", "match", "matrix", "matrix3d", "medium", "menu", "menutext", "message-box", "middle", "min-intrinsic", "mix", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "text", "text-bottom", "text-top", "textarea", "textfield", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "to", "top", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-latin", "uppercase", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"].map(t => ({
                    type: "keyword",
                    label: t
                })).concat(["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"].map(t => ({
                    type: "constant",
                    label: t
                }))),
                Re = ["a", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "figcaption", "figure", "footer", "form", "header", "hgroup", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "meter", "nav", "ol", "output", "p", "pre", "ruby", "section", "select", "small", "source", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "tr", "u", "ul"].map(t => ({
                    type: "type",
                    label: t
                })),
                Ie = /^(\w[\w-]*|-\w[\w-]*|)$/,
                Ne = /^-(-[\w-]*)?$/;

            function De(t, e) {
                var n;
                if (("(" == t.name || t.type.isError) && (t = t.parent || t), "ArgList" != t.name) return !1;
                let i = null === (n = t.parent) || void 0 === n ? void 0 : n.firstChild;
                return "Callee" == (null === i || void 0 === i ? void 0 : i.name) && "var" == e.sliceString(i.from, i.to)
            }
            const We = new Ee["f"],
                Xe = ["Declaration"];

            function Le(t) {
                for (let e = t;;) {
                    if (e.type.isTop) return e;
                    if (!(e = e.parent)) return t
                }
            }

            function Ue(t, e, n) {
                if (e.to - e.from > 4096) {
                    let i = We.get(e);
                    if (i) return i;
                    let r = [],
                        a = new Set,
                        o = e.cursor(Ee["b"].IncludeAnonymous);
                    if (o.firstChild())
                        do {
                            for (let e of Ue(t, o.node, n)) a.has(e.label) || (a.add(e.label), r.push(e))
                        } while (o.nextSibling());
                    return We.set(e, r), r
                } {
                    let i = [],
                        r = new Set;
                    return e.cursor().iterate(e => {
                        var a;
                        if (n(e) && e.matchContext(Xe) && ":" == (null === (a = e.node.nextSibling) || void 0 === a ? void 0 : a.name)) {
                            let n = t.sliceString(e.from, e.to);
                            r.has(n) || (r.add(n), i.push({
                                label: n,
                                type: "variable"
                            }))
                        }
                    }), i
                }
            }
            const Be = t => e => {
                    let {
                        state: n,
                        pos: i
                    } = e, r = Object(Pe["t"])(n).resolveInner(i, -1), a = r.type.isError && r.from == r.to - 1 && "-" == n.doc.sliceString(r.from, r.to);
                    if ("PropertyName" == r.name || (a || "TagName" == r.name) && /^(Block|Styles)$/.test(r.resolve(r.to).name)) return {
                        from: r.from,
                        options: ze(),
                        validFor: Ie
                    };
                    if ("ValueName" == r.name) return {
                        from: r.from,
                        options: je,
                        validFor: Ie
                    };
                    if ("PseudoClassName" == r.name) return {
                        from: r.from,
                        options: Ae,
                        validFor: Ie
                    };
                    if (t(r) || (e.explicit || a) && De(r, n.doc)) return {
                        from: t(r) || a ? r.from : i,
                        options: Ue(n.doc, Le(r), t),
                        validFor: Ne
                    };
                    if ("TagName" == r.name) {
                        for (let {
                                parent: t
                            } = r; t; t = t.parent)
                            if ("Block" == t.name) return {
                                from: r.from,
                                options: ze(),
                                validFor: Ie
                            };
                        return {
                            from: r.from,
                            options: Re,
                            validFor: Ie
                        }
                    }
                    if (!e.explicit) return null;
                    let o = r.resolve(i),
                        s = o.childBefore(i);
                    return s && ":" == s.name && "PseudoClassSelector" == o.name ? {
                        from: i,
                        options: Ae,
                        validFor: Ie
                    } : s && ":" == s.name && "Declaration" == o.name || "ArgList" == o.name ? {
                        from: i,
                        options: je,
                        validFor: Ie
                    } : "Block" == o.name || "Styles" == o.name ? {
                        from: i,
                        options: ze(),
                        validFor: Ie
                    } : null
                },
                Me = Be(t => "VariableName" == t.name),
                Ye = Pe["c"].define({
                    name: "css",
                    parser: Qe.configure({
                        props: [Pe["n"].add({
                            Declaration: Object(Pe["f"])()
                        }), Pe["k"].add({
                            "Block KeyframeList": Pe["i"]
                        })]
                    }),
                    languageData: {
                        commentTokens: {
                            block: {
                                open: "/*",
                                close: "*/"
                            }
                        },
                        indentOnInput: /^\s*\}$/,
                        wordChars: "-"
                    }
                });

            function Fe() {
                return new Pe["d"](Ye, Ye.data.of({
                    autocomplete: Me
                }))
            }

            function Ve(t, e, n) {
                let i = null;
                return function() {
                    const r = this,
                        a = arguments,
                        o = function() {
                            i = null, n || t.apply(r, a)
                        },
                        s = n && !i;
                    i && clearTimeout(i), i = setTimeout(o, e), s && t.apply(r, a)
                }
            }
            const Ge = /\/([a-z]+)\/Preview\.vue$/,
                qe = /\/([a-z]+)\/selectors\.scss$/,
                Ze = n("0e89"),
                He = n("6265"),
                Ke = Ze.keys().reduce((t, e) => {
                    const n = Ze(e).default,
                        [, i] = Ge.exec(e);
                    return { ...t,
                        [i]: {
                            style: "",
                            label: n.name,
                            previewer: n
                        }
                    }
                }, {});
            Ke.misc = {
                style: "",
                previewer: null,
                selectors: "",
                label: "Misc"
            }, He.keys().forEach(t => {
                const [, e] = qe.exec(t);
                Ke[e].selectors = He(t).default
            });
            var Je = Ke;

            function tn(t) {
                const e = {};
                return Object.keys(Je).forEach(n => {
                    e[n] = t.style ? t.style[n] : Je[n].style
                }), e
            }
            var en = {
                    props: {
                        id: String,
                        preload: Object
                    },
                    data() {
                        const t = Object.keys(Je)[0],
                            e = tn(this.preload || Je);
                        return {
                            editor: null,
                            menubar: [],
                            savedTheme: ne()(this.preload),
                            content: null,
                            compileError: null,
                            runtimeError: null,
                            isChanged: !1,
                            showExplorer: !1,
                            showSaveForm: !1,
                            showConfirmSave: !1,
                            showConfirmReset: !1,
                            showPreview: !0,
                            canShowPreview: !1,
                            activeElement: t,
                            init: e,
                            data: ne()(e),
                            previewMode: "default"
                        }
                    },
                    computed: { ...Object(B["f"])({
                            theme: "theme",
                            user: "user"
                        }),
                        ...a["c"].mapState(["loadedTheme"]),
                        elements: () => Je,
                        elementOptions() {
                            return Object.keys(this.elements).map(t => ({
                                label: this.elements[t].label,
                                value: t
                            }))
                        },
                        hasPreviewer() {
                            return !!this.elements[this.activeElement].previewer && this.showPreview
                        },
                        allStyle() {
                            return Object.values(this.data).join("\n").trim()
                        },
                        isLocked() {
                            return this.showConfirmSave || this.showConfirmReset || this.showExplorer || this.showSaveForm || !!this.runtimeError
                        },
                        themeName() {
                            const t = this.savedTheme ? this.savedTheme.lbl : this.$t("untitled");
                            return t + (this.isChanged ? "*" : "")
                        }
                    },
                    watch: {
                        activeElement(t) {
                            this.updateContent(t ? this.data[t] : "")
                        },
                        content: Ve((function(t) {
                            this.data[this.activeElement] = t, this.lint(t)
                        }), 800),
                        allStyle(t) {
                            const e = Object.values(this.init).join("\n").trim();
                            this.isChanged = t !== e
                        },
                        loadedTheme: {
                            deep: !0,
                            handler(t) {
                                this.init = tn(t), this.data = ne()(this.init), this.savedTheme = t, this.updateContent(this.data[this.activeElement]), this.toggleExplorer()
                            }
                        }
                    },
                    mounted() {
                        this.editor = new d["c"]({
                            state: Q["g"].create({
                                doc: this.data[this.activeElement],
                                extensions: [u["a"], Fe(), d["c"].lineWrapping, d["c"].updateListener.of(this.handleUpdate)]
                            })
                        }), this.menubar = [{
                            label: this.$t("file"),
                            items: [{
                                click: this.toggleExplorer,
                                label: this.$t("load")
                            }, {
                                click: this.toggleConfirmReset,
                                label: this.$t("reset"),
                                disabled: !this.isChanged
                            }, {
                                click: this.apply,
                                label: this.$t("apply"),
                                disabled: !(this.isChanged || this.preload) || !!this.compileError
                            }, {
                                click: this.toggleSaveForm,
                                label: this.$t("save"),
                                disabled: !this.isChanged || !!this.compileError,
                                hasDivider: !0
                            }, {
                                shortcut: "Alt+4",
                                click: this.handleClose,
                                label: this.$t("exit")
                            }]
                        }, {
                            label: this.$t("view"),
                            items: [{
                                label: this.$t("preview"),
                                option: {
                                    id: "check-previewer",
                                    type: "checkbox",
                                    checked: this.showPreview
                                },
                                click: () => this.showPreview = !this.showPreview
                            }, {
                                label: this.$t("preview-mode"),
                                children: ["default", "light", "dark"].map(t => ({
                                    label: this.$t(t),
                                    option: {
                                        id: "preview-mode-" + t,
                                        type: "radio",
                                        name: "preview-mode",
                                        value: t,
                                        checked: this.previewMode === t
                                    },
                                    click: () => this.previewMode = t
                                }))
                            }]
                        }, {
                            label: this.$t("help"),
                            items: [{
                                click: () => this.$emit("openHelp", "manual"),
                                label: this.$t("read-manual")
                            }, {
                                click: () => this.$emit("openHelp", "video"),
                                label: this.$t("watch-tutorials")
                            }]
                        }]
                    },
                    methods: { ...h["d"].mapActions([h["b"].UnloadTheme]),
                        handleUpdate(t) {
                            t.docChanged && (this.content = t.state.doc.sliceString(0))
                        },
                        handleResize(t) {
                            this.canShowPreview = t > 800 || "full" === t
                        },
                        handleClose() {
                            this.isChanged ? this.toggleConfirmSave() : this.close()
                        },
                        async lint(t) {
                            try {
                                await Object(p["d"])(t), this.compileError = null
                            } catch (e) {
                                const {
                                    line: t,
                                    column: n,
                                    reason: i,
                                    name: r
                                } = e;
                                this.compileError = `${r}: ${i} at line ${t}, column ${n}.`
                            }
                        },
                        updateContent(t) {
                            this.editor.dispatch({
                                changes: {
                                    from: 0,
                                    to: this.editor.state.doc.length,
                                    insert: t
                                }
                            })
                        },
                        async save(t) {
                            const e = Object.keys(this.data).reduce((t, e) => `${t}/* ${e} */\n${this.data[e]||""}\n\n`, ""),
                                n = this.savedTheme && this.savedTheme.id.startsWith(p["e"]) ? this.savedTheme.id : Object(p["b"])();
                            this.savedTheme = {
                                id: n,
                                style: e,
                                lbl: t.name,
                                pic: t.image
                            };
                            const i = await q["default"].local.get(this.id, this.user) || [],
                                r = i.findIndex(t => t.id === n);
                            r > -1 ? i.splice(r, 1, this.savedTheme) : i.push(this.savedTheme), q["default"].local.update(this.id, this.user, i), this.isChanged = !1, this.init = ne()(this.data), this.toggleSaveForm()
                        },
                        fillSelectors() {
                            this.allStyle || (Object.keys(Je).forEach(t => {
                                this.data[t] = Je[t].selectors
                            }), this.updateContent(this.data[this.activeElement]))
                        },
                        async apply() {
                            try {
                                const t = Object(p["b"])();
                                this.$store.commit(Kt["a"].Theme, t), this[h["b"].UnloadTheme](), Object(p["f"])(), Object(p["a"])({
                                    id: t,
                                    style: this.allStyle
                                })
                            } catch (t) {
                                this.runtimeError = this.$t("cannot-apply-style")
                            }
                        },
                        reset() {
                            this.data = ne()(this.init), this.updateContent(this.data[this.activeElement]), this.isChanged = !1, this.toggleConfirmReset()
                        },
                        close() {
                            this.$root.$emit(P["c"].CloseWindow, this.id)
                        },
                        closeSave() {
                            this.toggleSaveForm(), this.toggleConfirmSave()
                        },
                        toggleExplorer() {
                            this.showExplorer = !this.showExplorer
                        },
                        toggleSaveForm() {
                            this.showSaveForm = !this.showSaveForm
                        },
                        toggleConfirmSave() {
                            this.showConfirmSave = !this.showConfirmSave
                        },
                        toggleConfirmReset() {
                            this.showConfirmReset = !this.showConfirmReset
                        },
                        download() {
                            Object(Rt["b"])(this.themeName + ".css", "text/css", this.allStyle)
                        }
                    },
                    components: {
                        WindowMain: W["a"],
                        WindowMenubar: Jt["a"],
                        WindowBody: I["a"],
                        WindowTitlebar: X["a"],
                        WindowControls: N["a"],
                        WindowSidepane: te["a"],
                        EditorActions: k,
                        EditorIndicator: C,
                        ConfirmSave: m["a"],
                        MessageWarning: T["a"],
                        ThemeExplorer: Ht,
                        SaveForm: G,
                        MessageError: E["a"]
                    }
                },
                nn = en,
                rn = (n("dccb"), Object(v["a"])(nn, l, c, !1, null, null, null)),
                an = rn.exports,
                on = {
                    data() {
                        return {
                            id: "themestudio",
                            showEditor: !1,
                            showExplorer: !1
                        }
                    },
                    computed: { ...a["c"].mapState(["loadedTheme"]),
                        ...Object(B["d"])({
                            themeData: "themeData"
                        }),
                        icon() {
                            return this.themeData.icon[this.id]
                        }
                    },
                    watch: {
                        "loadedTheme.id" () {
                            this.showEditor = !0, this.showExplorer = !1, this[a["a"].SelectTheme](null)
                        }
                    },
                    beforeDestroy() {
                        this[a["a"].Cleanup]()
                    },
                    methods: { ...a["c"].mapActions([a["a"].SelectTheme, a["a"].Cleanup]),
                        toggleEditor() {
                            this.showEditor = !this.showEditor
                        },
                        toggleExplorer() {
                            this.showExplorer = !this.showExplorer
                        },
                        closeExplorer() {
                            this.toggleExplorer(), this[a["a"].Cleanup]()
                        },
                        openLink(t) {
                            const e = "manual" === t ? "https://visnalize.com/win7simu/" + this.id : "https://youtube.com/playlist?list=PLztkJSxlj5P6lUgP806gAnAvgnCaSumsC";
                            s["a"].open({
                                url: e
                            })
                        }
                    },
                    components: {
                        BaseIcon: o["a"],
                        WindowControls: N["a"],
                        WindowTitlebar: X["a"],
                        WindowMain: W["a"],
                        WindowBody: I["a"],
                        ThemeEditor: an,
                        ThemeExplorer: Ht
                    }
                },
                sn = on,
                ln = (n("c1ff"), Object(v["a"])(sn, i, r, !1, null, null, null));
            e["default"] = ln.exports
        }
    }
]);