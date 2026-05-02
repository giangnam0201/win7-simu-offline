(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["ie", "device", "storage"], {
        "01b4": function(t, e, n) {
            "use strict";
            const i = {
                Theme: "setTheme",
                Color: "setColor",
                Background: "setBackground",
                AeroTransparent: "setAeroTransparent",
                User: "setUser",
                CurrentUser: "setCurrentUser",
                Start: "toggleStart",
                Popup: "togglePopup",
                Accounts: "accounts",
                WindowLocation: "setLocation",
                GameOpen: "openGame",
                GameClose: "closeGame",
                RecentPrograms: "setRecentPrograms",
                PinnedPrograms: "pins",
                ProgramPin: "pinProgram",
                ProgramUnpin: "unpinProgram",
                Shortcuts: "setShortcuts",
                ShortcutAdd: "addShortcut",
                ShortcutMove: "moveShortcut",
                ShortcutRemove: "removeShortcut",
                ShortcutRename: "renameShortcut",
                WindowAdd: "addWindow",
                WindowUpdate: "updateWindow",
                WindowRemove: "removeWindow",
                WindowFocus: "focusWindow",
                Trash: "setTrash",
                TrashAdd: "addTrash",
                TrashRemove: "removeTrash",
                TrashRestore: "restoreTrash",
                ClipboardItem: "setClipboardItem",
                Taskbar: "setTaskbar",
                ShowAds: "setShowAds",
                ForceUpdate: "forceUpdate",
                Path: "path",
                UnlockTheme: "unlockTheme"
            };
            e["a"] = i
        },
        "096e": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.show ? n("base-message", {
                        staticClass: "w-[400px]",
                        attrs: {
                            type: "warning",
                            noPreTag: ""
                        },
                        on: {
                            close: t.close
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-checkbox", {
                                    attrs: {
                                        id: "chk-hide"
                                    },
                                    model: {
                                        value: t.neverShow,
                                        callback: function(e) {
                                            t.neverShow = e
                                        },
                                        expression: "neverShow"
                                    }
                                }, [t._v("Don't show again")]), n("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: t.close
                                    }
                                }, [t._v(t._s(t.$t("ok")))])]
                            },
                            proxy: !0
                        }], null, !1, 2203637859)
                    }, [n("div", {
                        staticClass: "px-3"
                    }, [n("p", {
                        staticClass: "mb-2"
                    }, [t._v(t._s(t.browser || "This web browser") + " requires an extension to be fully functional.")]), n("p", [t._v(" Refer to "), n("a", {
                        attrs: {
                            href: "https://visnalize.com/blog/load-any-websites-in-iframes.html",
                            target: "_blank"
                        }
                    }, [t._v("this guide")]), t._v(" for how to install it. ")])])]) : t._e()
                },
                r = [],
                o = n("fceb"),
                s = n("968c"),
                a = n("f708");
            const c = "hideBrowserMessage";
            var u = {
                    props: {
                        browser: String
                    },
                    data() {
                        return {
                            show: !1,
                            neverShow: !1
                        }
                    },
                    async created() {
                        this.show = Object(a["d"])() && !await s["default"].local.get(c, null)
                    },
                    methods: {
                        close() {
                            this.show = !1, this.neverShow && s["default"].local.update(c, null, !0)
                        }
                    },
                    components: {
                        BaseMessage: o["a"]
                    }
                },
                d = u,
                l = n("2877"),
                T = Object(l["a"])(d, i, r, !1, null, null, null);
            e["a"] = T.exports
        },
        "0d94": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("winui-menu", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: function(e) {
                                return t.$emit("outclick", e)
                            },
                            expression: "(e) => $emit('outclick', e)"
                        }]
                    }, [t._l(t.items, (function(e, i) {
                        return [e.hidden ? t._e() : n("winui-menuitem", {
                            key: i,
                            attrs: {
                                "aria-disabled": e.disabled,
                                "data-test-menu-item": e.test
                            }
                        }, [e.icon ? n("base-icon", {
                            attrs: {
                                id: e.icon,
                                icon: t.icon[e.icon]
                            }
                        }) : t._e(), e.children && e.children.length ? [n("button", [t._v(t._s(e.label))]), n("winui-menu", {
                            style: t.subStyle,
                            attrs: {
                                "data-test-menu": e.test
                            }
                        }, [t._l(e.children, (function(e, i) {
                            return [e.hidden ? t._e() : n("winui-menuitem", {
                                key: i,
                                attrs: {
                                    "aria-disabled": e.disabled,
                                    "data-test-menu-item": e.test
                                }
                            }, [e.option ? [n("input", t._b({}, "input", e.option, !1)), n("label", {
                                attrs: {
                                    for: e.option.id
                                },
                                on: {
                                    click: function(n) {
                                        return n.stopPropagation(), t.safeClick(n, e.click)
                                    }
                                }
                            }, [t._v(t._s(e.label))])] : [e.icon ? n("base-icon", {
                                attrs: {
                                    id: e.icon,
                                    icon: t.icon[e.icon]
                                }
                            }) : t._e(), n("button", {
                                attrs: {
                                    disabled: e.disabled
                                },
                                on: {
                                    click: function(n) {
                                        return n.stopPropagation(), t.safeClick(n, e.click)
                                    }
                                }
                            }, [e.bold ? n("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? n("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)]], 2), e.hasDivider && !e.hidden ? n("hr", {
                                key: "hr" + i
                            }) : t._e()]
                        }))], 2)] : e.option ? [n("input", t._b({}, "input", e.option, !1)), n("label", {
                            attrs: {
                                for: e.option.id
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), t.safeClick(n, e.click)
                                }
                            }
                        }, [t._v(t._s(e.label))])] : n("button", {
                            attrs: {
                                disabled: e.disabled
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), t.safeClick(n, e.click)
                                }
                            }
                        }, [e.bold ? n("b", [t._v(t._s(e.label))]) : [t._v(t._s(e.label))], e.shortcut ? n("span", [t._v(t._s(e.shortcut))]) : t._e()], 2)], 2), e.hasDivider && !e.hidden ? n("hr", {
                            key: "hr" + i
                        }) : t._e()]
                    }))], 2)
                },
                r = [],
                o = n("58cd"),
                s = n("2f62"),
                a = {
                    props: {
                        items: Array,
                        subStyle: Object,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(s["d"])(["themeData", "themeAssets"]),
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
                        BaseIcon: o["a"]
                    }
                },
                c = a,
                u = n("2877"),
                d = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = d.exports
        },
        "0e9a": function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return r
            })), n.d(e, "f", (function() {
                return o
            })), n.d(e, "g", (function() {
                return s
            })), n.d(e, "j", (function() {
                return a
            })), n.d(e, "n", (function() {
                return c
            })), n.d(e, "m", (function() {
                return u
            })), n.d(e, "o", (function() {
                return d
            })), n.d(e, "e", (function() {
                return l
            })), n.d(e, "i", (function() {
                return T
            })), n.d(e, "d", (function() {
                return f
            })), n.d(e, "k", (function() {
                return _
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "q", (function() {
                return S
            })), n.d(e, "r", (function() {
                return I
            })), n.d(e, "c", (function() {
                return b
            })), n.d(e, "a", (function() {
                return w
            })), n.d(e, "b", (function() {
                return N
            })), n.d(e, "p", (function() {
                return p
            }));
            const i = /data:([^;]*)(;.*)*,(.+)/;

            function r(t) {
                return "string" === typeof t && i.test(t)
            }

            function o(t) {
                try {
                    return t.length > 3 && !(t.length % 4) && atob(t) && !0
                } catch (e) {
                    return !1
                }
            }

            function s(t) {
                return t.startsWith("blob:")
            }

            function a(t) {
                return m(t, /(webp|apng|png|jpg|jpeg|jfif|svg|gif|ico)$/)
            }

            function c(t) {
                return m(t, /(txt|text|readme|md|json|xml|rtf|wpl)$/)
            }

            function u(t) {
                return m(t, /rtf$/)
            }

            function d(t) {
                return m(t, /(webm|mp4|mpg|mpeg|ogm|wmv|avi|mov)$/)
            }

            function l(t) {
                return m(t, /(webm|mp3|ogg|wav|wma|aac|m4a|flac|mid)$/)
            }

            function T(t) {
                return m(t, /(exe|msi|apk)$/)
            }

            function f(t) {
                return m(t, /(zip)$/)
            }

            function _(t) {
                return m(t, /(pdf)$/)
            }

            function h(t) {
                return m(t, /(wpl)$/)
            }

            function S(t) {
                return m(t, /(html|htm)$/)
            }

            function m(t, e) {
                const {
                    ext: n
                } = I(t);
                return !!n && e.test(n.toLowerCase())
            }

            function I(t) {
                const e = b(t),
                    [, n, i] = Array.from(e.match(/(.*)\.(.*)$/) || []);
                return n || i ? {
                    name: decodeURIComponent(n),
                    ext: i
                } : {
                    name: e,
                    ext: null
                }
            }

            function b(t) {
                const e = t.split("/").filter(Boolean),
                    n = e.pop();
                return n ? decodeURIComponent(n) : ""
            }

            function w(t) {
                const e = t.match(i);
                return e ? {
                    mime: e[1],
                    data: e[3]
                } : null
            }

            function N(t, e, n) {
                const i = l(t) ? "audio" : a(t) ? "image" : null;
                let r = "";
                r = s(n) ? n : i ? `data:${i}/${e};base64,${n}` : `data:application/${e},${encodeURIComponent(n)}`;
                const o = document.createElement("a");
                o.download = t, o.href = r, o.click()
            }
            async function p(t) {
                return new Promise(e => {
                    const n = document.createElement("video");
                    n.src = t, n.onloadedmetadata = () => {
                        const t = n.videoWidth > 0 && n.videoHeight > 0;
                        n.remove(), e(t)
                    }
                })
            }
        },
        "0f35": function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return a
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "f", (function() {
                return u
            })), n.d(e, "b", (function() {
                return d
            })), n.d(e, "a", (function() {
                return l
            })), n.d(e, "k", (function() {
                return T
            })), n.d(e, "m", (function() {
                return f
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "h", (function() {
                return h
            })), n.d(e, "c", (function() {
                return S
            })), n.d(e, "p", (function() {
                return m
            })), n.d(e, "o", (function() {
                return I
            })), n.d(e, "q", (function() {
                return b
            })), n.d(e, "n", (function() {
                return w
            })), n.d(e, "j", (function() {
                return N
            })), n.d(e, "g", (function() {
                return p
            })), n.d(e, "i", (function() {
                return E
            }));
            var i = n("e5dd"),
                r = n("0fbc"),
                o = n("4cca"),
                s = n("0e9a");

            function a(t) {
                return /^https?:\/\//.test(t)
            }

            function c(t) {
                return /(img|media)\//.test(t)
            }

            function u(t) {
                return null === t || void 0 === t
            }

            function d(t) {
                return (a(t) ? t : "https://" + t).toLowerCase()
            }

            function l(t, e) {
                return t.find(t => new RegExp(`(img|media)/${e}\\.`, "g").test(t))
            }

            function T(t) {
                return (t < 10 ? "0" : "") + t
            }

            function f(t) {
                return new Promise((e, n) => {
                    const i = new Image;
                    i.onerror = n, i.onload = e, i.src = t
                })
            }

            function _(t) {
                const e = "string" === typeof t,
                    n = e && t.endsWith("mp4") || !e && t.type.includes("video"),
                    i = e ? t : Object(r["b"])(t.src, t.type);
                return {
                    url: i,
                    isAnimated: n
                }
            }

            function h(t) {
                try {
                    const {
                        hostname: e
                    } = new URL(t);
                    return /.+\..+/.test(e)
                } catch (e) {
                    return !1
                }
            }

            function S(t) {
                return t.startsWith("com.") || t.startsWith("org.chromium")
            }

            function m(t, e) {
                return e || (e = t, t = 0), Math.floor(Math.random() * (e - t + 1)) + t
            }

            function I(t = "") {
                return `${t}-${Math.random().toString(36).substring(2,9)}`
            }

            function b(t) {
                return new Promise(e => setTimeout(e, t))
            }
            async function w(t, e) {
                for (const n of t) await e(n)
            }

            function N() {
                i["a"].open({
                    url: "https://youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y"
                })
            }

            function p(t, e) {
                const n = Object(s["c"])(t);
                return Object(o["b"])(n) === e
            }

            function E(t, e, n, i, r) {
                t = Math.min(Math.max(t, e), n);
                const o = (t - e) / (n - e),
                    s = (r - i) * o + i;
                return s
            }
        },
        "0fbc": function(t, e, n) {
            "use strict";
            n.d(e, "e", (function() {
                return r
            })), n.d(e, "j", (function() {
                return o
            })), n.d(e, "i", (function() {
                return s
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "f", (function() {
                return c
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "a", (function() {
                return d
            })), n.d(e, "g", (function() {
                return l
            })), n.d(e, "h", (function() {
                return T
            })), n.d(e, "c", (function() {
                return f
            }));
            var i = n("0e9a");

            function r(t) {
                return t ? URL.createObjectURL(t) : null
            }

            function o(t) {
                return new Promise((e, n) => {
                    const i = new Image;
                    i.src = t, i.onload = () => e(i), i.onerror = () => n()
                })
            }

            function s(t, e = 0, n = 0) {
                const i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (!r) throw new Error("Failed to get canvas context");
                let o = e,
                    s = n;
                return o && s || (o = t.width || parseFloat(t.style.width) || parseFloat(getComputedStyle(t).width), s = t.height || parseFloat(t.style.height) || parseFloat(getComputedStyle(t).height)), i.width = o, i.height = s, r.drawImage(t, 0, 0, o, s), i
            }

            function a(t) {
                return new Promise(e => {
                    const n = new FileReader;
                    n.onloadend = () => e(n.result), n.readAsArrayBuffer(t)
                })
            }

            function c(t, e) {
                return new Promise((n, i) => {
                    t.toBlob(t => {
                        if (!t) return i("Failed to create blob from canvas");
                        a(t).then(n)
                    }, e)
                })
            }

            function u(t, e) {
                const n = new Blob([t], {
                    type: e || "application/octet-stream"
                });
                return r(n)
            }

            function d(t) {
                for (var e = "", n = new Uint8Array(t), i = n.byteLength, r = 0; r < i; r++) e += String.fromCharCode(n[r]);
                return window.btoa(e)
            }

            function l(t, e, n) {
                const r = Object(i["a"])(t),
                    o = r ? r.data : t,
                    s = e || 512,
                    a = atob(o),
                    c = [];
                for (let i = 0; i < a.length; i += s) {
                    const t = a.slice(i, i + s),
                        e = new Array(t.length);
                    for (let i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
                    const n = new Uint8Array(e);
                    c.push(n)
                }
                return new Blob(c, {
                    type: n || "image/webp"
                })
            }

            function T(t, e, n) {
                const i = l(t, e, n);
                return r(i)
            }

            function f(t, e = "webp") {
                return `data:image/${e};base64,${t}`
            }
        },
        1386: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("window-main", {
                        attrs: {
                            id: "window-ie"
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: "ie",
                            title: "Internet Explorer"
                        }
                    }, [n("window-controls")], 1), n("window-addressbar", [n("window-addressbar-nav", {
                        attrs: {
                            activeBack: t.activeBack,
                            activeNext: t.activeNext
                        },
                        on: {
                            navigate: t.navigate
                        }
                    }), n("winui-textbox", {
                        staticClass: "bg-white border border-black/30 border-solid w-full h-full text-base ie__addressbar-input",
                        attrs: {
                            "data-test-ie-address-input": ""
                        },
                        on: {
                            focus: function(t) {
                                return t.target.select()
                            },
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : function() {
                                    return t.load()
                                }()
                            }
                        },
                        model: {
                            value: t.url,
                            callback: function(e) {
                                t.url = e
                            },
                            expression: "url"
                        }
                    }), n("window-addressbar-search", {
                        attrs: {
                            location: "Bing"
                        },
                        on: {
                            search: t.search
                        }
                    })], 1), n("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), n("window-body", {
                        staticClass: "ie__body",
                        attrs: {
                            layout: "panel"
                        }
                    }, [n("iframe", {
                        ref: "iframe",
                        attrs: {
                            src: t.src,
                            "data-test-ie-iframe": ""
                        },
                        on: {
                            load: t.onLoaded
                        }
                    })]), n("window-statusbar", [n("div"), n("div", [n("winui-progress", {
                        directives: [{
                            name: "visible",
                            rawName: "v-visible",
                            value: t.showProgress,
                            expression: "showProgress"
                        }],
                        staticClass: "w-[100px]",
                        attrs: {
                            progress: t.progress
                        }
                    })], 1), n("div", {
                        staticClass: "flex"
                    }, [n("base-icon", {
                        attrs: {
                            icon: t.internetIcon
                        }
                    }), n("span", [t._v("Internet")])], 1)])], 1), n("message-browser", {
                        attrs: {
                            browser: "Internet Explorer"
                        }
                    })], 1)
                },
                r = [],
                o = n("0f35"),
                s = n("58cd"),
                a = n("096e"),
                c = n("3b99"),
                u = n("e4f8"),
                d = n("d65e"),
                l = n("1521"),
                T = n("e863"),
                f = n("1d26"),
                _ = n("3cb5"),
                h = n("5843"),
                S = n("e314"),
                m = n("617a");
            const I = "https://msn.com",
                b = "https://bing.com/search?q=";
            var w = {
                    data() {
                        const {
                            themeData: t
                        } = this.$store.getters;
                        return {
                            internetIcon: t.icon.internet,
                            progress: 50,
                            showProgress: !0,
                            src: Object(m["b"])(I),
                            url: I,
                            activeBack: !1,
                            activeNext: !1,
                            history: [],
                            historyIndex: -1
                        }
                    },
                    computed: {
                        toolbar() {
                            return [{
                                label: this.$t("favorites"),
                                disabled: !0
                            }, {
                                label: this.$t("bookmarks"),
                                disabled: !0
                            }]
                        }
                    },
                    watch: {
                        historyIndex(t) {
                            const {
                                history: e
                            } = this;
                            e.length && (t > 0 && (this.activeBack = !0), 0 === t && (this.activeBack = !1), t < e.length - 1 && (this.activeNext = !0), t >= e.length - 1 && (this.activeNext = !1))
                        }
                    },
                    methods: {
                        load(t) {
                            const e = Object(o["b"])(this.url);
                            this.url = e, this.src = Object(m["b"])(e), this.showProgress = !0, this.progress = Math.floor(50 * Math.random()) + 20, t || this.pushHistory()
                        },
                        search(t) {
                            this.url = b + encodeURIComponent(t), this.load()
                        },
                        async onLoaded() {
                            this.progress = 100, await Object(o["q"])(500), this.showProgress = !1
                        },
                        pushHistory() {
                            this.historyIndex++, this.history = this.history.slice(0, this.historyIndex), this.history.push(this.url)
                        },
                        navigate(t) {
                            let {
                                history: e,
                                historyIndex: n
                            } = this;
                            if ("back" === t && n > 0) this.url = e[--this.historyIndex];
                            else {
                                if (!("next" === t && n < e.length - 1)) return;
                                this.url = e[++this.historyIndex]
                            }
                            this.load(!0)
                        }
                    },
                    components: {
                        BaseIcon: s["a"],
                        WindowControls: T["a"],
                        WindowTitlebar: S["a"],
                        WindowMenubar: _["a"],
                        WindowMain: f["a"],
                        WindowBody: l["a"],
                        WindowAddressbar: c["a"],
                        WindowAddressbarNav: u["a"],
                        WindowAddressbarSearch: d["a"],
                        WindowStatusbar: h["a"],
                        MessageBrowser: a["a"]
                    }
                },
                N = w,
                p = n("2877"),
                E = Object(p["a"])(N, i, r, !1, null, null, null);
            e["default"] = E.exports
        },
        "15d4": function(t, e, n) {
            var i = {
                "./aeroNoir.scss": ["04d1", "theme-aeroNoir-scss"],
                "./chromeos.scss": ["13d0", "theme-chromeos-scss"],
                "./kubuntu.scss": ["18dd", "theme-kubuntu-scss"],
                "./macos.scss": ["f30c", "theme-macos-scss"],
                "./onebit.scss": ["cbbd", "theme-onebit-scss"],
                "./oxygen.scss": ["b514", "theme-oxygen-scss"],
                "./ubuntu.scss": ["c91b", "theme-ubuntu-scss"],
                "./win10.scss": ["a139", "theme-win10-scss"],
                "./win11.scss": ["f562", "theme-win11-scss"],
                "./win31.scss": ["7294", "theme-win31-scss"],
                "./win7-classic.scss": ["a5ab", "theme-win7-classic-scss"],
                "./win7.scss": ["e163", "theme-win7-scss"],
                "./win8.scss": ["8f05", "theme-win8-scss"],
                "./win9x.scss": ["ea0d", "theme-win9x-scss"],
                "./winW.scss": ["d857", "theme-winW-scss"],
                "./winlonghorn.scss": ["8456", "theme-winlonghorn-scss"],
                "./winvista.scss": ["9ba7", "theme-winvista-scss"],
                "./winxp.scss": ["a949", "theme-winxp-scss"]
            };

            function r(t) {
                if (!n.o(i, t)) return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }));
                var e = i[t],
                    r = e[0];
                return n.e(e[1]).then((function() {
                    return n(r)
                }))
            }
            r.keys = function() {
                return Object.keys(i)
            }, r.id = "15d4", t.exports = r
        },
        "15f0": function(t, e, n) {},
        "26a1": function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return r
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "e", (function() {
                return s
            })), n.d(e, "f", (function() {
                return a
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "b", (function() {
                return u
            })), n.d(e, "i", (function() {
                return d
            })), n.d(e, "j", (function() {
                return l
            })), n.d(e, "g", (function() {
                return T
            })), n.d(e, "k", (function() {
                return f
            })), n.d(e, "l", (function() {
                return _
            })), n.d(e, "n", (function() {
                return h
            })), n.d(e, "m", (function() {
                return S
            })), n.d(e, "h", (function() {
                return m
            }));
            const i = "#root",
                r = "#main",
                o = ".desktop__wrapper",
                s = ".taskbar__wrapper",
                a = ".taskbar-popup",
                c = ".startmenu__wrapper",
                u = ".listview__item";

            function d() {
                return document.body.querySelector(i)
            }

            function l() {
                return document.body.querySelector("#stage")
            }

            function T() {
                return document.body.querySelector(r)
            }

            function f() {
                return document.body.querySelector(s)
            }

            function _(t) {
                const e = `[data-target="${t}"]`;
                return document.body.querySelector(e)
            }

            function h({
                flag: t,
                id: e,
                content: n
            }) {
                if (t) {
                    const t = document.createElement("style");
                    t.id = e, t.innerHTML = n, document.body.append(t)
                } else {
                    const t = document.querySelector("#" + e);
                    t && t.remove()
                }
            }

            function S({
                type: t,
                url: e
            }) {
                if (document.querySelector(`link[href="${e}"]`)) return;
                const n = document.createElement("link");
                n.rel = "preload", n.as = t, n.href = e, document.head.appendChild(n)
            }

            function m(t) {
                const e = t.target,
                    {
                        top: n,
                        left: i,
                        width: r,
                        height: o
                    } = e.getBoundingClientRect(),
                    s = (t.clientX - i) / r,
                    a = (t.clientY - n) / o;
                return {
                    x: s,
                    y: a
                }
            }
        },
        "3cb5": function(t, e, n) {
            "use strict";
            var i = function() {
                    var t, e = this,
                        n = e.$createElement,
                        i = e._self._c || n;
                    return i("winui-menubar", {
                        class: ["window__menubar", (t = {
                            "is-toolbar": e.asToolbar
                        }, t["is-" + e.iconSize] = !!e.iconSize, t)]
                    }, [e._l(e.items, (function(t, n) {
                        return [i("winui-menuitem", {
                            key: n,
                            staticClass: "window__menubar-item",
                            attrs: {
                                "aria-disabled": t.disabled,
                                tabindex: "0",
                                "data-test-menu-item": t.label
                            }
                        }, [t.items && !t.disabled ? [i("menu-item-button", e._b({}, "menu-item-button", e.bindProps(t), !1)), i("base-menu", {
                            staticClass: "can-hover",
                            attrs: {
                                items: t.items
                            }
                        })] : i("menu-item-button", e._b({
                            attrs: {
                                disabled: t.disabled
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), e.click(t.click)
                                }
                            }
                        }, "menu-item-button", e.bindProps(t), !1))], 2)]
                    })), e._t("default")], 2)
                },
                r = [],
                o = n("0d94"),
                s = n("b5ba"),
                a = {
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
                                label: n
                            } = t;
                            return {
                                icon: e,
                                label: n,
                                hideLabel: this.hideLabel,
                                "data-test-menu-action": n
                            }
                        }
                    },
                    components: {
                        BaseMenu: o["a"],
                        MenuItemButton: s["a"]
                    }
                },
                c = a,
                u = (n("ce26"), n("2877")),
                d = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = d.exports
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
                o = n("1521"),
                s = n("7744"),
                a = {
                    mixins: [s["a"]],
                    props: {
                        variant: {
                            type: String,
                            validator: t => ["wait", "help", "message"].includes(t)
                        },
                        parent: String,
                        decentered: Boolean
                    },
                    components: {
                        WindowBody: o["a"]
                    }
                },
                c = a,
                u = (n("9312"), n("2877")),
                d = Object(u["a"])(c, i, r, !1, null, null, null);
            e["a"] = d.exports
        },
        4615: function(t, e, n) {},
        "4cca": function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return r
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "d", (function() {
                return s
            })), n.d(e, "g", (function() {
                return a
            })), n.d(e, "j", (function() {
                return u
            })), n.d(e, "e", (function() {
                return d
            })), n.d(e, "c", (function() {
                return l
            })), n.d(e, "b", (function() {
                return T
            })), n.d(e, "f", (function() {
                return f
            })), n.d(e, "i", (function() {
                return _
            }));
            var i = n("0e9a");

            function r(t) {
                const e = ["bytes", "KB", "MB", "GB", "TB"];
                if (0 === t) return "0 bytes";
                const n = Math.floor(Math.log(t) / Math.log(1024));
                return 0 === n ? `${t} ${e[n]}` : `${(t/Math.pow(1024,n)).toFixed(1)} ${e[n]}`
            }

            function o(t, e) {
                let n = 1;
                const r = t => {
                    const o = e.find(e => e.lbl === t);
                    if (!o) return t;
                    const {
                        ext: s,
                        name: a
                    } = Object(i["r"])(t), [c] = Array.from(/\s?\(\d+\).*/.exec(t) || []), u = ` (${++n})` + (s ? "." + s : "");
                    let d = t;
                    return d = c ? d.replace(c, u) : a + u, r(d)
                };
                return r(t)
            }

            function s(t, e) {
                return t + ` (${e.toUpperCase()}:)`
            }

            function a(t, e) {
                return ["computer", t, e].filter(Boolean).join("/")
            }
            const c = /(tmpZip)?(\/EXTERNAL\/)?computer\/drive\d+\/?|file:\/\/\/storage\/emulated\/\d+|Android\/data\/com.visnalize.win7simu\/files/g;

            function u(t) {
                return t ? t.replace(c, "") : null
            }

            function d(t, e) {
                return "directory" === e ? "folder" : Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "media" : Object(i["l"])(t) ? "wpl" : Object(i["n"])(t) ? "text" : Object(i["i"])(t) ? "executable" : Object(i["m"])(t) ? "richtext" : Object(i["d"])(t) ? "zip" : Object(i["r"])(t).ext ? "file" : "folder"
            }

            function l(t) {
                return "system" === t ? "disk-os" : "disk-data"
            }

            function T(t) {
                return Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "player" : Object(i["q"])(t) || Object(i["k"])(t) ? "chrome" : Object(i["m"])(t) ? "wordpad" : Object(i["n"])(t) ? "notepad" : Object(i["d"])(t) || !Object(i["r"])(t).ext ? "computer" : "file"
            }

            function f(t) {
                const e = t.split("/");
                return e.pop(), e.join("/")
            }

            function _(t, e) {
                return t.replace(/%APPDATA%/g, e.appDataPath || "").replace(/%USERPROFILE%/g, e.userPath || "").replace(/\\/g, "/")
            }
        },
        "51e6": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Action", (function() {
                return d["a"]
            })), n.d(e, "isTouchDevice", (function() {
                return l
            })), n.d(e, "isOnline", (function() {
                return T
            })), n.d(e, "getBattery", (function() {
                return f
            })), n.d(e, "showToast", (function() {
                return _
            })), n.d(e, "openFile", (function() {
                return h
            })), n.d(e, "getDeviceInfo", (function() {
                return S
            })), n.d(e, "getAndroidVersion", (function() {
                return m
            })), n.d(e, "launchApp", (function() {
                return I
            })), n.d(e, "launchSetting", (function() {
                return b
            })), n.d(e, "restart", (function() {
                return w
            })), n.d(e, "getWeiScore", (function() {
                return N
            })), n.d(e, "getWeiBaseScore", (function() {
                return p
            }));
            var i = n("1547");
            const r = Object(i["d"])("Device", {
                web: () => n.e("chunk-2d0c8407").then(n.bind(null, "53a4")).then(t => new t.DeviceWeb)
            });
            var o = n("a81a");
            const s = Object(i["d"])("Launcher", {
                web: () => n.e("launcher").then(n.bind(null, "d5b0")).then(t => new t.LauncherWeb)
            });
            var a = n("c8ec");
            const c = Object(i["d"])("Toast", {
                web: () => n.e("chunk-2d0a45fe").then(n.bind(null, "05be")).then(t => new t.ToastWeb)
            });
            var u = n("f708"),
                d = n("6792");
            const l = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                T = async () => Object(u["a"])() ? (await a["a"].getStatus()).connected : new Promise(t => {
                    const e = new Image;
                    e.src = "https://picsum.photos/1/1", e.onload = () => t(!0), e.onerror = () => t(!1)
                }),
                f = async () => {
                    try {
                        return await r.getBatteryInfo()
                    } catch (t) {
                        return {
                            batteryLevel: 1,
                            isCharging: !1
                        }
                    }
                },
                _ = async (t, e = "long") => {
                    await c.show({
                        text: "string" === typeof t ? t : null,
                        duration: e
                    });
                    const n = document.querySelector("pwa-toast");
                    n && n.setAttribute("style", "z-index: 9999")
                },
                h = (t = !1, e = "") => new Promise(n => {
                    const i = document.createElement("input");
                    i.type = "file", i.multiple = t, i.accept = e, i.click(), i.onchange = t => {
                        i.remove(), n(t.target)
                    }
                }),
                S = async () => {
                    const t = (await f()).batteryLevel || 1;
                    return { ...await r.getInfo(),
                        ...await o["a"].getInfo(),
                        battery: 100 * t
                    }
                },
                m = async () => {
                    if (!Object(u["a"])()) return null;
                    const {
                        osVersion: t
                    } = await r.getInfo();
                    return parseInt(t)
                },
                I = t => s.launchPackage({
                    packageName: t
                }),
                b = t => s.launchMiscellaneous({
                    target: t
                }),
                w = () => window.location.reload(),
                N = async () => {
                    const t = await o["a"].getInfo(),
                        e = t.cpuCores,
                        n = t.totalMemory / 1024 ** 3,
                        i = document.createElement("canvas"),
                        r = !(!window.WebGL2RenderingContext || !i.getContext("webgl2"));
                    return {
                        cpu: e >= 8 ? 7.9 : e >= 4 ? 7 : e >= 2 ? 5 : 2,
                        ram: n >= 8 ? 7.9 : n >= 4 ? 6 : n >= 2 ? 5 : 3,
                        graphics: r ? 7.9 : 4
                    }
                },
                p = async () => {
                    const t = await N();
                    return Math.min(...Object.values(t))
                }
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
                o = {
                    props: {
                        disabled: Boolean,
                        active: Boolean
                    }
                },
                s = o,
                a = n("2877"),
                c = Object(a["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        5843: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "relative flex justify-evenly bg-black/5 overflow-hidden text-black/60 text-base shrink-0 window__statusbar",
                        attrs: {
                            "data-test-status-bar": ""
                        }
                    }, [t._t("default")], 2)
                },
                r = [],
                o = {
                    mounted() {
                        this.addClass()
                    },
                    updated() {
                        this.addClass()
                    },
                    methods: {
                        addClass() {
                            try {
                                this.$slots.default.forEach(t => {
                                    const e = t.elm;
                                    e.classList.contains("window__statusbar-item") || e.classList.add("window__statusbar-item")
                                })
                            } catch (t) {
                                console.warn("Status bar rendering error: ", t)
                            }
                        }
                    }
                },
                s = o,
                a = (n("6dd9"), n("2877")),
                c = Object(a["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        "617a": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return o
            }));
            var i = n("f708");

            function r(t) {
                if (!t) throw new Error("URL is required");
                if (!Object(i["a"])()) return t;
                const e = t.includes("www.") ? t : t.replace("://", "://www.");
                return e + (e.includes("?") ? "&" : "?") + "xframe=true"
            }

            function o(t, e) {
                try {
                    const n = new URL(t),
                        i = new URL(e);
                    return n.href === i.href
                } catch (n) {
                    return t === e
                }
            }
        },
        6792: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "b", (function() {
                return s
            }));
            var i = n("8229");
            const r = {
                    ACTION_ACCESSIBILITY_SETTINGS: "android.settings.ACCESSIBILITY_SETTINGS",
                    ACTION_ADD_ACCOUNT: "android.settings.ADD_ACCOUNT",
                    ACTION_AIRPLANE_MODE_SETTINGS: "android.settings.AIRPLANE_MODE_SETTINGS",
                    ACTION_APN_SETTINGS: "android.settings.APN_SETTINGS",
                    ACTION_APPLICATION_DETAILS_SETTINGS: "android.settings.APPLICATION_DETAILS_SETTINGS",
                    ACTION_APPLICATION_DEVELOPMENT_SETTINGS: "android.settings.APPLICATION_DEVELOPMENT_SETTINGS",
                    ACTION_APPLICATION_SETTINGS: "android.settings.APPLICATION_SETTINGS",
                    ACTION_APP_NOTIFICATION_BUBBLE_SETTINGS: "android.settings.APP_NOTIFICATION_BUBBLE_SETTINGS",
                    ACTION_APP_NOTIFICATION_SETTINGS: "android.settings.APP_NOTIFICATION_SETTINGS",
                    ACTION_APP_SEARCH_SETTINGS: "android.settings.APP_SEARCH_SETTINGS",
                    ACTION_APP_USAGE_SETTINGS: "android.settings.APP_USAGE_SETTINGS",
                    ACTION_BATTERY_SAVER_SETTINGS: "android.settings.BATTERY_SAVER_SETTINGS",
                    ACTION_BLUETOOTH_SETTINGS: "android.settings.BLUETOOTH_SETTINGS",
                    ACTION_CAPTIONING_SETTINGS: "android.settings.CAPTIONING_SETTINGS",
                    ACTION_CAST_SETTINGS: "android.settings.CAST_SETTINGS",
                    ACTION_CHANNEL_NOTIFICATION_SETTINGS: "android.settings.CHANNEL_NOTIFICATION_SETTINGS",
                    ACTION_DATA_ROAMING_SETTINGS: "android.settings.DATA_ROAMING_SETTINGS",
                    ACTION_DATA_USAGE_SETTINGS: "android.settings.DATA_USAGE_SETTINGS",
                    ACTION_DATE_SETTINGS: "android.settings.DATE_SETTINGS",
                    ACTION_DEVICE_INFO_SETTINGS: "android.settings.DEVICE_INFO_SETTINGS",
                    ACTION_DISPLAY_SETTINGS: "android.settings.DISPLAY_SETTINGS",
                    ACTION_DREAM_SETTINGS: "android.settings.DREAM_SETTINGS",
                    ACTION_FINGERPRINT_ENROLL: "android.settings.FINGERPRINT_ENROLL",
                    ACTION_HARD_KEYBOARD_SETTINGS: "android.settings.HARD_KEYBOARD_SETTINGS",
                    ACTION_HOME_SETTINGS: "android.settings.HOME_SETTINGS",
                    ACTION_INPUT_METHOD_SETTINGS: "android.settings.INPUT_METHOD_SETTINGS",
                    ACTION_INPUT_METHOD_SUBTYPE_SETTINGS: "android.settings.INPUT_METHOD_SUBTYPE_SETTINGS",
                    ACTION_INTERNAL_STORAGE_SETTINGS: "android.settings.INTERNAL_STORAGE_SETTINGS",
                    ACTION_LOCALE_SETTINGS: "android.settings.LOCALE_SETTINGS",
                    ACTION_LOCATION_SOURCE_SETTINGS: "android.settings.LOCATION_SOURCE_SETTINGS",
                    ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS: "android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS",
                    ACTION_MANAGE_APPLICATIONS_SETTINGS: "android.settings.MANAGE_APPLICATIONS_SETTINGS",
                    ACTION_MANAGE_DEFAULT_APPS_SETTINGS: "android.settings.MANAGE_DEFAULT_APPS_SETTINGS",
                    ACTION_MANAGE_OVERLAY_PERMISSION: "android.settings.MANAGE_OVERLAY_PERMISSION",
                    ACTION_MANAGE_UNKNOWN_APP_SOURCES: "android.settings.MANAGE_UNKNOWN_APP_SOURCES",
                    ACTION_MANAGE_WRITE_SETTINGS: "android.settings.MANAGE_WRITE_SETTINGS",
                    ACTION_MEMORY_CARD_SETTINGS: "android.settings.MEMORY_CARD_SETTINGS",
                    ACTION_NETWORK_OPERATOR_SETTINGS: "android.settings.NETWORK_OPERATOR_SETTINGS",
                    ACTION_NIGHT_DISPLAY_SETTINGS: "android.settings.NIGHT_DISPLAY_SETTINGS",
                    ACTION_NOTIFICATION_ASSISTANT_SETTINGS: "android.settings.NOTIFICATION_ASSISTANT_SETTINGS",
                    ACTION_NOTIFICATION_LISTENER_SETTINGS: "android.settings.NOTIFICATION_LISTENER_SETTINGS",
                    ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS: "android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS",
                    ACTION_PRINT_SETTINGS: "android.settings.PRINT_SETTINGS",
                    ACTION_PRIVACY_SETTINGS: "android.settings.PRIVACY_SETTINGS",
                    ACTION_PROCESS_WIFI_EASY_CONNECT_URI: "android.settings.PROCESS_WIFI_EASY_CONNECT_URI",
                    ACTION_QUICK_LAUNCH_SETTINGS: "android.settings.QUICK_LAUNCH_SETTINGS",
                    ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS: "android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
                    ACTION_REQUEST_SET_AUTOFILL_SERVICE: "android.settings.REQUEST_SET_AUTOFILL_SERVICE",
                    ACTION_SEARCH_SETTINGS: "android.settings.SEARCH_SETTINGS",
                    ACTION_SECURITY_SETTINGS: "android.settings.SECURITY_SETTINGS",
                    ACTION_SHOW_REGULATORY_INFO: "android.settings.SHOW_REGULATORY_INFO",
                    ACTION_SOUND_SETTINGS: "android.settings.SOUND_SETTINGS",
                    ACTION_SYNC_SETTINGS: "android.settings.SYNC_SETTINGS",
                    ACTION_USAGE_ACCESS_SETTINGS: "android.settings.USAGE_ACCESS_SETTINGS",
                    ACTION_USER_DICTIONARY_SETTINGS: "android.settings.USER_DICTIONARY_SETTINGS",
                    ACTION_VOICE_CONTROL_AIRPLANE_MODE: "android.settings.VOICE_CONTROL_AIRPLANE_MODE",
                    ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE: "android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE",
                    ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE: "android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE",
                    ACTION_VOICE_INPUT_SETTINGS: "android.settings.VOICE_INPUT_SETTINGS",
                    ACTION_VPN_SETTINGS: "android.settings.VPN_SETTINGS",
                    ACTION_VR_LISTENER_SETTINGS: "android.settings.VR_LISTENER_SETTINGS",
                    ACTION_WIFI_IP_SETTINGS: "android.settings.WIFI_IP_SETTINGS",
                    ACTION_WIFI_SETTINGS: "android.settings.WIFI_SETTINGS"
                },
                o = {
                    ChangePage: "changePage",
                    OpenWindow: "open",
                    CloseWindow: "close",
                    PingWindow: "ping"
                },
                s = {
                    THEME: "aero-1",
                    SIZE_ICONS: "md",
                    SHOW_ICONS: !0,
                    AUTO_ICONS: !1,
                    SHOW_CURSOR: !0,
                    CURSOR_SCHEME: i["c"].Aero,
                    CURSOR_TRAIL: !1,
                    CURSOR_SHADOW: !1,
                    CURSOR_HIGHLIGHT: !1,
                    SCREENSAVER: {
                        type: null,
                        timeout: 1,
                        showLogon: !1
                    }
                }
        },
        "67ac": function(t, e, n) {
            "use strict";
            n("15f0")
        },
        "6dd9": function(t, e, n) {
            "use strict";
            n("e68e")
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
                o = {
                    props: {
                        variant: String
                    }
                },
                s = o,
                a = n("2877"),
                c = Object(a["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        8229: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "c", (function() {
                return r
            })), n.d(e, "d", (function() {
                return o
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "e", (function() {
                return a
            })), n.d(e, "f", (function() {
                return c
            }));
            const i = {
                    Default: 0,
                    Working: 1,
                    Busy: 2,
                    Precision: 3,
                    Typing: 4,
                    ResizeV: 6,
                    ResizeH: 7,
                    ResizeD1: 8,
                    ResizeD2: 9,
                    Move: 10,
                    Pencil: "pencil",
                    Picker: "picker",
                    Bucket: "bucket",
                    Eraser: "eraser",
                    Shape: "shape",
                    Brush: "brush"
                },
                r = {
                    Aero: 0,
                    Standard: 1,
                    Black: 2,
                    Magnified: 3,
                    ThreeD: 4,
                    Hand: 5,
                    MacOS: 6,
                    Ubuntu: 7
                },
                o = {
                    [r.Aero]: {
                        label: "Windows Aero",
                        suffix: "-aero"
                    },
                    [r.Standard]: {
                        label: "Windows Standard",
                        suffix: "-standard"
                    },
                    [r.Black]: {
                        label: "Windows Black",
                        suffix: "-black"
                    },
                    [r.Magnified]: {
                        label: "Magnified",
                        suffix: "-magnified"
                    },
                    [r.ThreeD]: {
                        label: "3d-White",
                        suffix: "-3d"
                    },
                    [r.Hand]: {
                        label: "Hands",
                        suffix: "-hand"
                    },
                    [r.MacOS]: {
                        label: "MacOS",
                        suffix: "-macos"
                    },
                    [r.Ubuntu]: {
                        label: "Ubuntu",
                        suffix: "-ubuntu"
                    }
                },
                s = {
                    [i.Default]: "default",
                    [i.Working]: "working",
                    [i.Busy]: "busy",
                    [i.Precision]: "precision",
                    [i.Typing]: "typing",
                    [i.ResizeV]: "resizev",
                    [i.ResizeH]: "resizeh",
                    [i.ResizeD1]: "resized1",
                    [i.ResizeD2]: "resized2",
                    [i.Move]: "move"
                },
                a = {
                    tl: i.ResizeD1,
                    br: i.ResizeD1,
                    tr: i.ResizeD2,
                    bl: i.ResizeD2,
                    tm: i.ResizeV,
                    mt: i.ResizeV,
                    bm: i.ResizeV,
                    mb: i.ResizeV,
                    ml: i.ResizeH,
                    mr: i.ResizeH,
                    "top-left": i.ResizeD1,
                    "bottom-right": i.ResizeD1,
                    "top-right": i.ResizeD2,
                    "bottom-left": i.ResizeD2,
                    top: i.ResizeV,
                    bottom: i.ResizeV,
                    left: i.ResizeH,
                    right: i.ResizeH
                },
                c = {
                    select: i.Shape,
                    pencil: i.Pencil,
                    bucket: i.Bucket,
                    text: i.Typing,
                    eraser: i.Eraser,
                    picker: i.Picker,
                    brush: i.Brush,
                    shape: i.Shape
                }
        },
        9312: function(t, e, n) {
            "use strict";
            n("eb0f")
        },
        "968c": function(t, e, n) {
            "use strict";
            n.r(e);
            const i = () => Promise.all([n.e("chunk-9691fd08"), n.e("database")]).then(n.bind(null, "5500")),
                r = async () => (await n.e("localforage").then(n.t.bind(null, "a002", 7))).default,
                o = (t, e, n) => t + e.uid + ("configs" !== n ? "/" + n : ""),
                s = (t, e) => e ? t + e.uid : t.replace(/\//g, ""),
                a = {
                    get: async (t, e, n) => e ? (await i()).get(o(t, e, n)) : (await r()).getItem(n),
                    update: async (t, e, n, s) => e ? (await i()).update(o(t, e, n), s) : a.get(t, e, n).then(async t => (await r()).setItem(n, { ...t,
                        ...s
                    })),
                    remove: async (t, e, n) => e ? (await i()).remove(o(t, e, n)) : (await r()).removeItem(n),
                    local: {}
                };
            a.local.update = async (t, e, n) => {
                const i = s(t, e);
                return (await r()).setItem(i, n)
            }, a.local.get = async (t, e) => {
                const n = s(t, e);
                return (await r()).getItem(n)
            }, a.local.remove = async (t, e) => {
                const n = s(t, e);
                return (await r()).removeItem(n)
            }, a.local.clean = async function(t) {
                const e = await r(),
                    n = await e.keys();
                return Promise.all(n.filter(e => e.includes(t)).map(t => this.remove(t)))
            }, e["default"] = a
        },
        a81a: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Device2", {
                web: () => n.e("device2").then(n.bind(null, "1b4b")).then(t => new t.DeviceWeb)
            })
        },
        b5ba: function(t, e, n) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", {
                        class: t.context + "-button",
                        on: {
                            click: function(e) {
                                return t.$emit("click", e)
                            }
                        }
                    }, [t.icon ? n("base-icon", {
                        class: t.context + "-icon",
                        attrs: {
                            icon: t.icon
                        }
                    }) : t._e(), t.hideLabel ? t._e() : n("span", {
                        class: t.context + "-label"
                    }, [t._v(t._s(t.label))])], 1)
                },
                r = [],
                o = n("58cd"),
                s = {
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
                        BaseIcon: o["a"]
                    }
                },
                a = s,
                c = n("2877"),
                u = Object(c["a"])(a, i, r, !1, null, null, null);
            e["a"] = u.exports
        },
        c8ec: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Network", {
                web: () => n.e("chunk-2d0abc10").then(n.bind(null, "172f")).then(t => new t.NetworkWeb)
            })
        },
        ce26: function(t, e, n) {
            "use strict";
            n("4615")
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
                o = {
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
                s = o,
                a = n("2877"),
                c = Object(a["a"])(s, i, r, !1, null, null, null);
            e["a"] = c.exports
        },
        e47c: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return s
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "b", (function() {
                return c
            })), n.d(e, "h", (function() {
                return d
            })), n.d(e, "f", (function() {
                return l
            })), n.d(e, "g", (function() {
                return T
            })), n.d(e, "a", (function() {
                return f
            }));
            var i = n("2f62"),
                r = n("3b8c");
            const o = {
                    TogglePreview: "togglePreview",
                    SetBootTheme: "setBootTheme",
                    LoadTheme: "loadTheme",
                    UnloadTheme: "unloadTheme"
                },
                s = "personalization",
                a = Object(i["a"])(s),
                c = o,
                u = {
                    win7: "win7",
                    "aero-1": "win7",
                    "aero-2": "win7",
                    "aero-3": "win7",
                    "aero-4": "win7",
                    "basic-1": "win7",
                    "basic-2": "win7-classic",
                    "basic-3": "win7-classic",
                    "basic-4": "win7-classic",
                    win95: "win9x",
                    win98: "win9x",
                    win2k: "win9x",
                    winxpE: "winxp",
                    winxpG: "winxp",
                    winxpN: "winxp",
                    winxpR: "winxp",
                    winxpS: "winxp",
                    winxpZ: "winxp",
                    win81: "win8",
                    win11dark: "win11",
                    winLP: "winlonghorn",
                    winLS: "winlonghorn"
                };
            e["e"] = {
                namespaced: !0,
                state() {
                    return {
                        bootTheme: null,
                        previewTheme: null,
                        loadedTheme: null
                    }
                },
                getters: {
                    themes: () => r["a"]
                },
                mutations: {
                    [o.TogglePreview]: (t, e) => {
                        t.previewTheme = e || null
                    },
                    [o.SetBootTheme]: (t, e) => {
                        t.bootTheme = e
                    },
                    [o.LoadTheme]: (t, e) => {
                        t.loadedTheme = e
                    }
                },
                actions: {
                    [o.TogglePreview]: ({
                        commit: t
                    }, e) => {
                        t(o.TogglePreview, e)
                    },
                    [o.LoadTheme]: async ({
                        commit: t,
                        dispatch: e
                    }, i) => {
                        if (i) {
                            await e(o.UnloadTheme);
                            try {
                                const e = l(i),
                                    {
                                        default: r
                                    } = await n("15d4")(`./${e}.scss`);
                                r.use(), t(o.LoadTheme, r)
                            } catch (r) {
                                console.error("Failed to load theme style for: " + i, r)
                            }
                        }
                    },
                    [o.UnloadTheme]: ({
                        state: t,
                        commit: e
                    }) => {
                        t.loadedTheme && (t.loadedTheme.unuse(), e(o.LoadTheme, null))
                    }
                }
            };
            const d = t => "win11dark" === t ? "win11" : "win81" === t ? "win8" : "winLP" === t ? "winLS" : /xp.{1}/.test(t) ? "winxp" : /^(aero|basic)-/.test(t) || "base" === t ? "win7" : t,
                l = t => u[t] || t,
                T = t => "win7" === t ? "aero-1" : t,
                f = {
                    AeroGlass: /^aero|winvista/,
                    AeroTaskbarItem: /^win8|^aero|basic-1/,
                    CenterTaskbar: /win11|chromeos/,
                    ChangeColor: /^aero|^win8|win10|^win11|kubuntu|ubuntu|oxygen/,
                    ChangeTransparency: /^aero|^win8|kubuntu/,
                    DarkMode: /basic-3|win11dark|macos|ubuntu|kubuntu|oxygen|aeroNoir/
                }
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
                o = n("bbbd"),
                s = n("55ab"),
                a = n("2f62"),
                c = {
                    props: {
                        activeBack: Boolean,
                        activeNext: Boolean,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(a["f"])({
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
                    methods: { ...o["e"].mapActions([o["b"].ProgramEvent]),
                        navigate(t) {
                            const e = "back" === t && this.activeBack,
                                n = "next" === t && this.activeNext;
                            (e || n) && (this.$emit("navigate", t), this[o["b"].ProgramEvent](o["c"].Explorer.StartNavigation))
                        }
                    },
                    components: {
                        CommandButton: s["a"]
                    }
                },
                u = c,
                d = n("2877"),
                l = Object(d["a"])(u, i, r, !1, null, null, null);
            e["a"] = l.exports
        },
        e5dd: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Browser", {
                web: () => n.e("chunk-2d0e2170").then(n.bind(null, "7ce3")).then(t => new t.BrowserWeb)
            })
        },
        e68e: function(t, e, n) {},
        eb0f: function(t, e, n) {},
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
                o = n("58cd"),
                s = n("1521"),
                a = n("e863"),
                c = n("7073"),
                u = n("411e"),
                d = n("e314"),
                l = n("2f62"),
                T = {
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
                    computed: { ...Object(l["d"])({
                            themeData: "themeData",
                            themeAssets: "themeAssets"
                        }),
                        icon() {
                            const t = this.theme ? this.themeAssets[this.theme] : this.themeData;
                            return t.icon[this.type]
                        }
                    },
                    components: {
                        BaseIcon: o["a"],
                        WindowBody: s["a"],
                        WindowFooter: c["a"],
                        WindowMainStatic: u["a"],
                        WindowControls: a["a"],
                        WindowTitlebar: d["a"]
                    }
                },
                f = T,
                _ = (n("67ac"), n("2877")),
                h = Object(_["a"])(f, i, r, !1, null, null, null);
            e["a"] = h.exports
        }
    }
]);