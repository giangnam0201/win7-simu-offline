(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["assistive-panel"], {
        1850: function(e, t, s) {},
        1952: function(e, t, s) {
            "use strict";
            s("e7d7")
        },
        "81b8": function(e, t, s) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeIn fastest",
                            "leave-active-class": "animated fadeOut fastest"
                        }
                    }, [s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isVisible,
                            expression: "isVisible"
                        }],
                        staticClass: "top-0 left-0 fixed flex justify-center items-end bg-black/60 w-full h-full drawer",
                        attrs: {
                            "data-show-dummy-cursor": ""
                        },
                        on: {
                            click: e.dismiss
                        }
                    }, [s("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeInUp fastest",
                            "leave-active-class": "animated fadeOutDown fastest"
                        }
                    }, [e._t("default")], 2)], 1)])
                },
                i = [],
                a = {
                    props: {
                        isVisible: Boolean
                    },
                    methods: {
                        dismiss(e) {
                            e.target === this.$el && this.$emit("dismiss")
                        }
                    }
                },
                o = a,
                l = s("2877"),
                r = Object(l["a"])(o, n, i, !1, null, null, null);
            t["a"] = r.exports
        },
        8498: function(e, t, s) {
            "use strict";
            var n = s("2b0e");
            t["a"] = n["default"].extend({
                data() {
                    return {
                        showPanel: !1,
                        showControl: !0
                    }
                },
                mounted() {
                    this.$root.$on("assistivePanelVisible", e => {
                        this.showPanel = e
                    }), this.$root.$on("assistiveControlVisible", e => {
                        this.showControl = e
                    })
                },
                methods: {
                    togglePanel() {
                        this.$root.$emit("assistivePanelVisible", !this.showPanel)
                    },
                    toggleControl() {
                        this.$root.$emit("assistiveControlVisible", !this.showControl)
                    }
                }
            })
        },
        bccb: function(e, t, s) {
            ! function(t, s) {
                e.exports = s()
            }(0, (function() {
                "use strict";
                var e = ["", "webkit", "moz", "ms", "MS"],
                    t = ["fullscreen", "Fullscreen", "FullScreen"];

                function s(e, t) {
                    if ("object" != typeof document) return "";
                    var s, n = t ? document[t] : document;
                    return (s = e, s.reduce((function(e, t) {
                        return [].concat.apply([], e.map((function(e) {
                            return t.map((function(t) {
                                return "" + e + t
                            }))
                        })))
                    }), [""])).find((function(e) {
                        return Boolean(n && e && e in n)
                    })) || ""
                }
                var n = {
                        element: s([e, t, ["Element"]]),
                        exit: s([e, ["Exit", "exit", "Cancel", "cancel"], t]),
                        request: s([e, ["request", "Request"], t], "body"),
                        supported: s([e, t, ["Enabled"]])
                    },
                    i = {
                        change: s([
                            ["on"], e, t, ["change", "Change"]
                        ]).slice(2),
                        error: s([
                            ["on"], e, t, ["error", "Error"]
                        ]).slice(2)
                    },
                    a = {
                        get active() {
                            return Boolean(document[n.element])
                        },
                        get element() {
                            return document[n.element] || null
                        },
                        events: i,
                        exit: function() {
                            return n.exit && document[n.exit]()
                        },
                        off: function(e, t, s) {
                            return i[e] && document.removeEventListener(i[e], t, s)
                        },
                        on: function(e, t, s) {
                            return i[e] && document.addEventListener(i[e], t, s)
                        },
                        props: n,
                        request: function(e) {
                            return n.request && (e || document.documentElement)[n.request]()
                        },
                        get supported() {
                            return Boolean(document[n.supported])
                        },
                        toggle: function(e, t) {
                            return void 0 === t && (t = !a.element), t ? a.request(e) : a.exit()
                        }
                    };
                return a
            }))
        },
        e2a9: function(e, t, s) {
            "use strict";
            s.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("base-drawer", {
                        attrs: {
                            isVisible: e.showPanel
                        },
                        on: {
                            dismiss: e.togglePanel
                        }
                    }, [e.showPanel ? s("div", {
                        staticClass: "bg-white assistive__panel"
                    }, [s("div", {
                        staticClass: "controls"
                    }, [s("fieldset", {
                        staticClass: "mb-8 border-0"
                    }, [s("legend", {
                        staticClass: "mb-6 font-medium text-2xl"
                    }, [e._v("Assistive controls")]), s("div", {
                        staticClass: "flex flex-wrap justify-center"
                    }, e._l(e.controls, (function(t) {
                        return s("button", {
                            key: t.icon,
                            class: ["center-flex-y gap-2 mb-4 text-black cursor-pointer assistive__panel-button", {
                                "is-active": t.active && t.active(),
                                "opacity-40 pointer-events-none": t.disabled && t.disabled()
                            }],
                            on: {
                                click: t.click
                            }
                        }, [s("span", {
                            staticClass: "center-flex rounded-full assistive__panel-iconbox"
                        }, [s("iconify-icon", {
                            staticClass: "assistive__panel-icon",
                            attrs: {
                                icon: "fa:" + t.icon
                            }
                        })], 1), s("span", [e._v(e._s(t.text))])])
                    })), 0)])])]) : e._e()])
                },
                i = [],
                a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("share-network", {
                        staticClass: "center-flex p-0 rounded-full text-black assistive__share",
                        attrs: {
                            network: e.network,
                            url: e.shareUrl,
                            tag: "button",
                            title: "Win7 Simu - Experience Windows 7 in your web browser",
                            "twitter-user": "visnalize"
                        }
                    }, [s("iconify-icon", {
                        staticClass: "center-flex assistive__share-icon",
                        attrs: {
                            icon: "fa:" + ("hackernews" === e.network ? "hacker-news" : e.network)
                        }
                    })], 1)
                },
                o = [],
                l = {
                    props: {
                        network: String
                    },
                    data() {
                        return {
                            shareUrl: location.href
                        }
                    }
                },
                r = l,
                c = (s("f0db"), s("2877")),
                u = Object(c["a"])(r, a, o, !1, null, null, null),
                d = u.exports,
                f = s("81b8"),
                h = s("8498"),
                m = s("bccb"),
                p = s.n(m),
                v = {
                    mixins: [h["a"]],
                    data() {
                        return {
                            isFullscreen: !1,
                            pwaInstall: null,
                            controls: [{
                                text: "Shortcut keys",
                                icon: "keyboard-o",
                                click: () => this.openLink("https://visnalize.com/win7simu/keyboard-shortcuts.html")
                            }, {
                                text: "Go fullscreen",
                                icon: "expand",
                                active: () => this.isFullscreen,
                                click: () => p.a.supported && p.a.toggle()
                            }, {
                                text: "Hide assistive",
                                icon: "times-circle",
                                active: () => !this.showControl,
                                click: this.toggleControl
                            }, {
                                text: "Quick install",
                                icon: "download",
                                click: () => this.pwaInstall.install(),
                                disabled: () => !this.pwaInstall.isInstallAvailable
                            }, {
                                text: "Download app",
                                icon: "github",
                                click: () => this.openLink("https://github.com/giangnam0201/win7-simu-offline/releases")
                            }, {
                                text: "Project Source",
                                icon: "code",
                                click: () => this.openLink("https://github.com/giangnam0201/win7-simu-offline")
                            }],
                            shareNetworks: []
                        }
                    },
                    async mounted() {
                        p.a.on("change", () => this.isFullscreen = !this.isFullscreen), this.pwaInstall = document.querySelector("pwa-install"), this.pwaInstall || (this.pwaInstall = {
                            isInstallAvailable: !1,
                            install: () => {}
                        })
                    },
                    methods: {
                        openLink(e) {
                            window.open(e, "_blank")
                        }
                    },
                    components: {
                        BaseDrawer: f["a"],
                        AssistiveShare: d
                    }
                },
                b = v,
                w = (s("1952"), Object(c["a"])(b, n, i, !1, null, null, null));
            t["default"] = w.exports
        },
        e7d7: function(e, t, s) {},
        f0db: function(e, t, s) {
            "use strict";
            s("1850")
        }
    }
]);