(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["games", "device"], {
        "0003": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var i = n("cee4");
            const r = "https://raw.githubusercontent.com/Visnalize/resources/main/";
            async function o(e, t) {
                if (!e) throw new Error("Resource endpoint is required");
                return (await i["a"].get(r + e, {
                    responseType: t
                })).data
            }
        },
        "01b4": function(e, t, n) {
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
            t["a"] = i
        },
        "0616": function(e, t, n) {
            "use strict";
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("button", {
                        directives: [{
                            name: "tap",
                            rawName: "v-tap:400",
                            value: e.handleDoubleClick,
                            expression: "handleDoubleClick",
                            arg: "400"
                        }, {
                            name: "clickout",
                            rawName: "v-clickout",
                            value: e.handleClickOutside,
                            expression: "handleClickOutside"
                        }, {
                            name: "touch",
                            rawName: "v-touch:touchhold",
                            value: e.handleOpenMenu,
                            expression: "handleOpenMenu",
                            arg: "touchhold"
                        }],
                        class: ["p-0 text-left listview__item", {
                            "is-active": e.item.active
                        }],
                        style: e.shortcutIcon,
                        attrs: {
                            title: e.item.label,
                            "data-test-listview-item": e.item.type
                        },
                        on: {
                            contextmenu: e.handleOpenMenu,
                            click: function(t) {
                                return t.stopPropagation(), e.handleClick(t)
                            }
                        }
                    }, [e.item.icon ? n("span", {
                        staticClass: "listview__item-iconbox shrink-0",
                        style: e.item.iconSize ? {
                            width: e.item.iconSize + "px",
                            height: e.item.iconSize + "px"
                        } : {}
                    }, [n("base-icon", {
                        staticClass: "w-full h-full listview__item-icon",
                        attrs: {
                            id: e.item.type,
                            icon: e.item.icon
                        }
                    })], 1) : e._e(), n("span", {
                        staticClass: "w-full overflow-hidden listview__item-info"
                    }, [e.item.renaming ? n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.newFullName.name,
                            expression: "newFullName.name"
                        }],
                        ref: "input",
                        staticClass: "p-0 border border-current border-solid leading-5 listview__item-label is-input",
                        attrs: {
                            maxlength: "30"
                        },
                        domProps: {
                            value: e.newFullName.name
                        },
                        on: {
                            blur: e.rename,
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.blur(t)
                            },
                            input: function(t) {
                                t.target.composing || e.$set(e.newFullName, "name", t.target.value)
                            }
                        }
                    }) : n("span", {
                        staticClass: "block border border-transparent border-solid overflow-hidden text-base text-ellipsis leading-5 whitespace-nowrap shrink-0 listview__item-label",
                        style: {
                            width: e.item.labelWidth ? e.normalizeWidth(e.item.labelWidth) : void 0
                        }
                    }, [e._v(" " + e._s(e.item.label) + " ")]), e._t("default")], 2)])
                },
                r = [],
                o = n("58cd"),
                s = n("a321"),
                a = n("2f62"),
                c = n("0e9a"),
                u = {
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            newFullName: Object(c["r"])(this.item.label.toString())
                        }
                    },
                    computed: { ...Object(a["d"])({
                            themeData: "themeData"
                        }),
                        shortcutIcon() {
                            return {
                                "--shortcut": `url('${this.themeData.icon.shortcut}')`
                            }
                        }
                    },
                    watch: {
                        "item.renaming" (e) {
                            e ? this.$nextTick().then(() => this.$refs.input.select()) : this.newFullName.name || (this.newFullName = Object(c["r"])(this.item.label.toString()))
                        }
                    },
                    mounted() {
                        this.$bus.$on("refresh", this.refresh)
                    },
                    beforeDestroy() {
                        this.$bus.$off("refresh", this.refresh)
                    },
                    methods: {
                        normalizeWidth(e) {
                            return s["a"].normalizeWidth(e, this.item.extras.length, !0)
                        },
                        handleClick() {
                            this.item.click && this.item.click()
                        },
                        handleDoubleClick(e, t) {
                            "INPUT" !== e.target.tagName && t && this.item.dblclick && this.item.dblclick(e)
                        },
                        handleOpenMenu(e) {
                            this.item.openMenu && this.item.openMenu(e)
                        },
                        handleClickOutside(e) {
                            this.item.outclick && this.item.outclick(e)
                        },
                        rename() {
                            this.item.rename && this.item.rename(this.newFullName)
                        },
                        blur() {
                            this.$refs.input.blur()
                        },
                        refresh() {
                            const e = this.$el;
                            e.style.opacity = "0", setTimeout(() => e.style.opacity = null, 50)
                        }
                    },
                    components: {
                        BaseIcon: o["a"]
                    }
                },
                d = u,
                l = (n("f746"), n("2877")),
                T = Object(l["a"])(d, i, r, !1, null, null, null);
            t["a"] = T.exports
        },
        "0dfb": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("window-main", {
                        attrs: {
                            id: "window-games"
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: "games",
                            title: e.$t("games")
                        }
                    }, [n("window-controls")], 1), n("window-addressbar", {
                        attrs: {
                            icon: "games",
                            location: e.$t("games")
                        },
                        scopedSlots: e._u([{
                            key: "search",
                            fn: function() {
                                return [n("window-addressbar-search", {
                                    attrs: {
                                        location: e.$t("games"),
                                        instant: ""
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, [n("window-addressbar-nav")], 1), n("window-body", {
                        attrs: {
                            layout: "panel"
                        }
                    }, [n("scrollbar-container", [n("div", {
                        staticClass: "p-2 w-full"
                    }, [n("collapse-list", {
                        attrs: {
                            title: e.$t("games"),
                            count: e.offlineGameItems.length
                        }
                    }, [n("listview-main", {
                        attrs: {
                            viewMode: "tiles",
                            items: e.offlineGameItems
                        }
                    })], 1), n("google-ads"), n("collapse-list", {
                        attrs: {
                            title: e.$t("online-games"),
                            count: e.onlineGameItems.length
                        }
                    }, [n("listview-main", {
                        staticClass: "mb-2",
                        attrs: {
                            viewMode: "tiles",
                            items: e.onlineGameItems
                        }
                    }), n("div", {
                        staticClass: "center-flex mx-auto py-5 border border-gray-400 border-dashed rounded-md w-96"
                    }, [n("winui-button", {
                        on: {
                            click: e.openLink
                        }
                    }, [e._v("Suggest a game")])], 1)], 1)], 1)])], 1)], 1)
                },
                r = [],
                o = n("2f62"),
                s = n("e5dd"),
                a = n("e12e"),
                c = n("6792"),
                u = n("6a11"),
                d = n("ed5d"),
                l = n("6fba"),
                T = n("01b4"),
                m = n("3b99"),
                f = n("e4f8"),
                S = n("d65e"),
                I = n("1521"),
                _ = n("e863"),
                h = n("1d26"),
                N = n("e314"),
                w = n("0003"),
                p = n("f708"),
                E = n("a6ed"),
                O = {
                    data() {
                        return {
                            onlineGames: []
                        }
                    },
                    computed: { ...Object(o["f"])(["windows"]),
                        ...Object(o["d"])({
                            themeData: "themeData"
                        }),
                        offlineGameItems() {
                            return E["a"].map(e => ({
                                type: "game_" + e.id,
                                label: e.name,
                                icon: this.themeData.icon[e.id],
                                extras: [{
                                    value: "Microsoft Corporation"
                                }],
                                click: () => this.open(e.id)
                            }))
                        },
                        onlineGameItems() {
                            return this.onlineGames.map(e => ({
                                type: e.id,
                                label: e.name,
                                icon: e.icon,
                                extras: [{
                                    value: e.creator
                                }],
                                click: () => this.open(e.id)
                            }))
                        }
                    },
                    async mounted() {
                        try {
                            this.onlineGames = await Object(w["a"])("games.json")
                        } catch (e) {}
                    },
                    methods: {
                        open(e) {
                            const t = this.onlineGames.find(t => t.id === e);
                            t && this.$store.commit(T["a"].GameOpen, t), t && t.openInTab ? s["a"].open({
                                url: Object(p["a"])() && t.mUrl ? t.mUrl : t.url
                            }) : this.$root.$emit(c["c"].OpenWindow, e)
                        },
                        openLink() {
                            s["a"].open({
                                url: "https://github.com/Visnalize/resources/issues/new?template=suggest-game.yaml"
                            })
                        }
                    },
                    components: {
                        CollapseList: a["a"],
                        ListviewMain: d["a"],
                        ScrollbarContainer: l["a"],
                        WindowControls: _["a"],
                        WindowMain: h["a"],
                        WindowAddressbar: m["a"],
                        WindowAddressbarNav: f["a"],
                        WindowAddressbarSearch: S["a"],
                        WindowBody: I["a"],
                        WindowTitlebar: N["a"],
                        GoogleAds: u["a"]
                    }
                },
                A = O,
                b = (n("313dd"), n("2877")),
                g = Object(b["a"])(A, i, r, !1, null, null, null);
            t["default"] = g.exports
        },
        "0e9a": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return r
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "j", (function() {
                return a
            })), n.d(t, "n", (function() {
                return c
            })), n.d(t, "m", (function() {
                return u
            })), n.d(t, "o", (function() {
                return d
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "i", (function() {
                return T
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "k", (function() {
                return f
            })), n.d(t, "l", (function() {
                return S
            })), n.d(t, "q", (function() {
                return I
            })), n.d(t, "r", (function() {
                return h
            })), n.d(t, "c", (function() {
                return N
            })), n.d(t, "a", (function() {
                return w
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "p", (function() {
                return E
            }));
            const i = /data:([^;]*)(;.*)*,(.+)/;

            function r(e) {
                return "string" === typeof e && i.test(e)
            }

            function o(e) {
                try {
                    return e.length > 3 && !(e.length % 4) && atob(e) && !0
                } catch (t) {
                    return !1
                }
            }

            function s(e) {
                return e.startsWith("blob:")
            }

            function a(e) {
                return _(e, /(webp|apng|png|jpg|jpeg|jfif|svg|gif|ico)$/)
            }

            function c(e) {
                return _(e, /(txt|text|readme|md|json|xml|rtf|wpl)$/)
            }

            function u(e) {
                return _(e, /rtf$/)
            }

            function d(e) {
                return _(e, /(webm|mp4|mpg|mpeg|ogm|wmv|avi|mov)$/)
            }

            function l(e) {
                return _(e, /(webm|mp3|ogg|wav|wma|aac|m4a|flac|mid)$/)
            }

            function T(e) {
                return _(e, /(exe|msi|apk)$/)
            }

            function m(e) {
                return _(e, /(zip)$/)
            }

            function f(e) {
                return _(e, /(pdf)$/)
            }

            function S(e) {
                return _(e, /(wpl)$/)
            }

            function I(e) {
                return _(e, /(html|htm)$/)
            }

            function _(e, t) {
                const {
                    ext: n
                } = h(e);
                return !!n && t.test(n.toLowerCase())
            }

            function h(e) {
                const t = N(e),
                    [, n, i] = Array.from(t.match(/(.*)\.(.*)$/) || []);
                return n || i ? {
                    name: decodeURIComponent(n),
                    ext: i
                } : {
                    name: t,
                    ext: null
                }
            }

            function N(e) {
                const t = e.split("/").filter(Boolean),
                    n = t.pop();
                return n ? decodeURIComponent(n) : ""
            }

            function w(e) {
                const t = e.match(i);
                return t ? {
                    mime: t[1],
                    data: t[3]
                } : null
            }

            function p(e, t, n) {
                const i = l(e) ? "audio" : a(e) ? "image" : null;
                let r = "";
                r = s(n) ? n : i ? `data:${i}/${t};base64,${n}` : `data:application/${t},${encodeURIComponent(n)}`;
                const o = document.createElement("a");
                o.download = e, o.href = r, o.click()
            }
            async function E(e) {
                return new Promise(t => {
                    const n = document.createElement("video");
                    n.src = e, n.onloadedmetadata = () => {
                        const e = n.videoWidth > 0 && n.videoHeight > 0;
                        n.remove(), t(e)
                    }
                })
            }
        },
        "0f35": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "k", (function() {
                return T
            })), n.d(t, "m", (function() {
                return m
            })), n.d(t, "l", (function() {
                return f
            })), n.d(t, "h", (function() {
                return S
            })), n.d(t, "c", (function() {
                return I
            })), n.d(t, "p", (function() {
                return _
            })), n.d(t, "o", (function() {
                return h
            })), n.d(t, "q", (function() {
                return N
            })), n.d(t, "n", (function() {
                return w
            })), n.d(t, "j", (function() {
                return p
            })), n.d(t, "g", (function() {
                return E
            })), n.d(t, "i", (function() {
                return O
            }));
            var i = n("e5dd"),
                r = n("0fbc"),
                o = n("4cca"),
                s = n("0e9a");

            function a(e) {
                return /^https?:\/\//.test(e)
            }

            function c(e) {
                return /(img|media)\//.test(e)
            }

            function u(e) {
                return null === e || void 0 === e
            }

            function d(e) {
                return (a(e) ? e : "https://" + e).toLowerCase()
            }

            function l(e, t) {
                return e.find(e => new RegExp(`(img|media)/${t}\\.`, "g").test(e))
            }

            function T(e) {
                return (e < 10 ? "0" : "") + e
            }

            function m(e) {
                return new Promise((t, n) => {
                    const i = new Image;
                    i.onerror = n, i.onload = t, i.src = e
                })
            }

            function f(e) {
                const t = "string" === typeof e,
                    n = t && e.endsWith("mp4") || !t && e.type.includes("video"),
                    i = t ? e : Object(r["b"])(e.src, e.type);
                return {
                    url: i,
                    isAnimated: n
                }
            }

            function S(e) {
                try {
                    const {
                        hostname: t
                    } = new URL(e);
                    return /.+\..+/.test(t)
                } catch (t) {
                    return !1
                }
            }

            function I(e) {
                return e.startsWith("com.") || e.startsWith("org.chromium")
            }

            function _(e, t) {
                return t || (t = e, e = 0), Math.floor(Math.random() * (t - e + 1)) + e
            }

            function h(e = "") {
                return `${e}-${Math.random().toString(36).substring(2,9)}`
            }

            function N(e) {
                return new Promise(t => setTimeout(t, e))
            }
            async function w(e, t) {
                for (const n of e) await t(n)
            }

            function p() {
                i["a"].open({
                    url: "https://youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y"
                })
            }

            function E(e, t) {
                const n = Object(s["c"])(e);
                return Object(o["b"])(n) === t
            }

            function O(e, t, n, i, r) {
                e = Math.min(Math.max(e, t), n);
                const o = (e - t) / (n - t),
                    s = (r - i) * o + i;
                return s
            }
        },
        "0f5c": function(e, t, n) {},
        "0fbc": function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return r
            })), n.d(t, "j", (function() {
                return o
            })), n.d(t, "i", (function() {
                return s
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "f", (function() {
                return c
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "g", (function() {
                return l
            })), n.d(t, "h", (function() {
                return T
            })), n.d(t, "c", (function() {
                return m
            }));
            var i = n("0e9a");

            function r(e) {
                return e ? URL.createObjectURL(e) : null
            }

            function o(e) {
                return new Promise((t, n) => {
                    const i = new Image;
                    i.src = e, i.onload = () => t(i), i.onerror = () => n()
                })
            }

            function s(e, t = 0, n = 0) {
                const i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (!r) throw new Error("Failed to get canvas context");
                let o = t,
                    s = n;
                return o && s || (o = e.width || parseFloat(e.style.width) || parseFloat(getComputedStyle(e).width), s = e.height || parseFloat(e.style.height) || parseFloat(getComputedStyle(e).height)), i.width = o, i.height = s, r.drawImage(e, 0, 0, o, s), i
            }

            function a(e) {
                return new Promise(t => {
                    const n = new FileReader;
                    n.onloadend = () => t(n.result), n.readAsArrayBuffer(e)
                })
            }

            function c(e, t) {
                return new Promise((n, i) => {
                    e.toBlob(e => {
                        if (!e) return i("Failed to create blob from canvas");
                        a(e).then(n)
                    }, t)
                })
            }

            function u(e, t) {
                const n = new Blob([e], {
                    type: t || "application/octet-stream"
                });
                return r(n)
            }

            function d(e) {
                for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
                return window.btoa(t)
            }

            function l(e, t, n) {
                const r = Object(i["a"])(e),
                    o = r ? r.data : e,
                    s = t || 512,
                    a = atob(o),
                    c = [];
                for (let i = 0; i < a.length; i += s) {
                    const e = a.slice(i, i + s),
                        t = new Array(e.length);
                    for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
                    const n = new Uint8Array(t);
                    c.push(n)
                }
                return new Blob(c, {
                    type: n || "image/webp"
                })
            }

            function T(e, t, n) {
                const i = l(e, t, n);
                return r(i)
            }

            function m(e, t = "webp") {
                return `data:image/${t};base64,${e}`
            }
        },
        "15d4": function(e, t, n) {
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

            function r(e) {
                if (!n.o(i, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = i[e],
                    r = t[0];
                return n.e(t[1]).then((function() {
                    return n(r)
                }))
            }
            r.keys = function() {
                return Object.keys(i)
            }, r.id = "15d4", e.exports = r
        },
        "26a1": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return a
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "k", (function() {
                return m
            })), n.d(t, "l", (function() {
                return f
            })), n.d(t, "n", (function() {
                return S
            })), n.d(t, "m", (function() {
                return I
            })), n.d(t, "h", (function() {
                return _
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

            function m() {
                return document.body.querySelector(s)
            }

            function f(e) {
                const t = `[data-target="${e}"]`;
                return document.body.querySelector(t)
            }

            function S({
                flag: e,
                id: t,
                content: n
            }) {
                if (e) {
                    const e = document.createElement("style");
                    e.id = t, e.innerHTML = n, document.body.append(e)
                } else {
                    const e = document.querySelector("#" + t);
                    e && e.remove()
                }
            }

            function I({
                type: e,
                url: t
            }) {
                if (document.querySelector(`link[href="${t}"]`)) return;
                const n = document.createElement("link");
                n.rel = "preload", n.as = e, n.href = t, document.head.appendChild(n)
            }

            function _(e) {
                const t = e.target,
                    {
                        top: n,
                        left: i,
                        width: r,
                        height: o
                    } = t.getBoundingClientRect(),
                    s = (e.clientX - i) / r,
                    a = (e.clientY - n) / o;
                return {
                    x: s,
                    y: a
                }
            }
        },
        "313dd": function(e, t, n) {
            "use strict";
            n("0f5c")
        },
        "4cca": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "g", (function() {
                return a
            })), n.d(t, "j", (function() {
                return u
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "b", (function() {
                return T
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "i", (function() {
                return f
            }));
            var i = n("0e9a");

            function r(e) {
                const t = ["bytes", "KB", "MB", "GB", "TB"];
                if (0 === e) return "0 bytes";
                const n = Math.floor(Math.log(e) / Math.log(1024));
                return 0 === n ? `${e} ${t[n]}` : `${(e/Math.pow(1024,n)).toFixed(1)} ${t[n]}`
            }

            function o(e, t) {
                let n = 1;
                const r = e => {
                    const o = t.find(t => t.lbl === e);
                    if (!o) return e;
                    const {
                        ext: s,
                        name: a
                    } = Object(i["r"])(e), [c] = Array.from(/\s?\(\d+\).*/.exec(e) || []), u = ` (${++n})` + (s ? "." + s : "");
                    let d = e;
                    return d = c ? d.replace(c, u) : a + u, r(d)
                };
                return r(e)
            }

            function s(e, t) {
                return e + ` (${t.toUpperCase()}:)`
            }

            function a(e, t) {
                return ["computer", e, t].filter(Boolean).join("/")
            }
            const c = /(tmpZip)?(\/EXTERNAL\/)?computer\/drive\d+\/?|file:\/\/\/storage\/emulated\/\d+|Android\/data\/com.visnalize.win7simu\/files/g;

            function u(e) {
                return e ? e.replace(c, "") : null
            }

            function d(e, t) {
                return "directory" === t ? "folder" : Object(i["j"])(e) ? "photo" : Object(i["e"])(e) || Object(i["o"])(e) ? "media" : Object(i["l"])(e) ? "wpl" : Object(i["n"])(e) ? "text" : Object(i["i"])(e) ? "executable" : Object(i["m"])(e) ? "richtext" : Object(i["d"])(e) ? "zip" : Object(i["r"])(e).ext ? "file" : "folder"
            }

            function l(e) {
                return "system" === e ? "disk-os" : "disk-data"
            }

            function T(e) {
                return Object(i["j"])(e) ? "photo" : Object(i["e"])(e) || Object(i["o"])(e) ? "player" : Object(i["q"])(e) || Object(i["k"])(e) ? "chrome" : Object(i["m"])(e) ? "wordpad" : Object(i["n"])(e) ? "notepad" : Object(i["d"])(e) || !Object(i["r"])(e).ext ? "computer" : "file"
            }

            function m(e) {
                const t = e.split("/");
                return t.pop(), t.join("/")
            }

            function f(e, t) {
                return e.replace(/%APPDATA%/g, t.appDataPath || "").replace(/%USERPROFILE%/g, t.userPath || "").replace(/\\/g, "/")
            }
        },
        "51e6": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Action", (function() {
                return d["a"]
            })), n.d(t, "isTouchDevice", (function() {
                return l
            })), n.d(t, "isOnline", (function() {
                return T
            })), n.d(t, "getBattery", (function() {
                return m
            })), n.d(t, "showToast", (function() {
                return f
            })), n.d(t, "openFile", (function() {
                return S
            })), n.d(t, "getDeviceInfo", (function() {
                return I
            })), n.d(t, "getAndroidVersion", (function() {
                return _
            })), n.d(t, "launchApp", (function() {
                return h
            })), n.d(t, "launchSetting", (function() {
                return N
            })), n.d(t, "restart", (function() {
                return w
            })), n.d(t, "getWeiScore", (function() {
                return p
            })), n.d(t, "getWeiBaseScore", (function() {
                return E
            }));
            var i = n("1547");
            const r = Object(i["d"])("Device", {
                web: () => n.e("chunk-2d0c8407").then(n.bind(null, "53a4")).then(e => new e.DeviceWeb)
            });
            var o = n("a81a");
            const s = Object(i["d"])("Launcher", {
                web: () => n.e("launcher").then(n.bind(null, "d5b0")).then(e => new e.LauncherWeb)
            });
            var a = n("c8ec");
            const c = Object(i["d"])("Toast", {
                web: () => n.e("chunk-2d0a45fe").then(n.bind(null, "05be")).then(e => new e.ToastWeb)
            });
            var u = n("f708"),
                d = n("6792");
            const l = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                T = async () => Object(u["a"])() ? (await a["a"].getStatus()).connected : new Promise(e => {
                    const t = new Image;
                    t.src = "https://picsum.photos/1/1", t.onload = () => e(!0), t.onerror = () => e(!1)
                }),
                m = async () => {
                    try {
                        return await r.getBatteryInfo()
                    } catch (e) {
                        return {
                            batteryLevel: 1,
                            isCharging: !1
                        }
                    }
                },
                f = async (e, t = "long") => {
                    await c.show({
                        text: "string" === typeof e ? e : null,
                        duration: t
                    });
                    const n = document.querySelector("pwa-toast");
                    n && n.setAttribute("style", "z-index: 9999")
                },
                S = (e = !1, t = "") => new Promise(n => {
                    const i = document.createElement("input");
                    i.type = "file", i.multiple = e, i.accept = t, i.click(), i.onchange = e => {
                        i.remove(), n(e.target)
                    }
                }),
                I = async () => {
                    const e = (await m()).batteryLevel || 1;
                    return { ...await r.getInfo(),
                        ...await o["a"].getInfo(),
                        battery: 100 * e
                    }
                },
                _ = async () => {
                    if (!Object(u["a"])()) return null;
                    const {
                        osVersion: e
                    } = await r.getInfo();
                    return parseInt(e)
                },
                h = e => s.launchPackage({
                    packageName: e
                }),
                N = e => s.launchMiscellaneous({
                    target: e
                }),
                w = () => window.location.reload(),
                p = async () => {
                    const e = await o["a"].getInfo(),
                        t = e.cpuCores,
                        n = e.totalMemory / 1024 ** 3,
                        i = document.createElement("canvas"),
                        r = !(!window.WebGL2RenderingContext || !i.getContext("webgl2"));
                    return {
                        cpu: t >= 8 ? 7.9 : t >= 4 ? 7 : t >= 2 ? 5 : 2,
                        ram: n >= 8 ? 7.9 : n >= 4 ? 6 : n >= 2 ? 5 : 3,
                        graphics: r ? 7.9 : 4
                    }
                },
                E = async () => {
                    const e = await p();
                    return Math.min(...Object.values(e))
                }
        },
        6792: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
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
        8229: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "f", (function() {
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
        9812: function(e, t, n) {},
        a321: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex center-flex-x border border-black/20 border-solid min-w-fit listview__header"
                    }, e._l(e.columns, (function(t) {
                        return n("button", {
                            key: t.key,
                            class: ["relative p-1 border-black/20 border-r border-solid overflow-hidden text-base text-left text-ellipsis whitespace-nowrap listview__header-column", {
                                "shrink-0": e.isFixedWidth(t.width)
                            }],
                            style: {
                                width: e.normalizeWidth(t.width)
                            }
                        }, [e._v(" " + e._s(void 0 !== t.label ? t.label : e.$t(t.key)) + " ")])
                    })), 0)
                },
                r = [];
            const o = {
                isFixedWidth(e) {
                    return "number" === typeof e
                },
                normalizeWidth(e, t, n) {
                    const i = n ? 1 : 0;
                    return e ? this.isFixedWidth(e) ? e + "px" : e.toString() : 100 / (t + i) + "%"
                }
            };
            var s = {
                    props: {
                        columns: {
                            type: Array,
                            required: !0
                        }
                    },
                    methods: {
                        isFixedWidth: o.isFixedWidth,
                        normalizeWidth(e) {
                            return o.normalizeWidth(e, this.columns.length)
                        }
                    }
                },
                a = s,
                c = n("2877"),
                u = Object(c["a"])(a, i, r, !1, null, null, null);
            t["b"] = u.exports
        },
        a4ed: function(e, t, n) {
            "use strict";
            n("9812")
        },
        a6ed: function(e, t, n) {
            "use strict";
            t["a"] = [{
                id: "chess",
                name: "Chess Titans"
            }, {
                id: "minesweeper",
                name: "Minesweeper"
            }, {
                id: "purbleplace",
                name: "Purble Place"
            }, {
                id: "solitaire",
                name: "Solitaire"
            }, {
                id: "tetris",
                name: "Classic Tetris",
                creator: "Albert Lobo"
            }]
        },
        a77a: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "iconSizeMap", (function() {
                return s
            })), n.d(t, "listviewProps", (function() {
                return a
            }));
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["flex flex-wrap gap-1 listview__view has-icons", e.sizeClass]
                    }, e._l(e.items, (function(e, t) {
                        return n("listview-item", {
                            key: t,
                            attrs: {
                                item: e
                            }
                        })
                    })), 1)
                },
                r = [],
                o = n("0616");
            const s = {
                    sm: "small",
                    md: "medium",
                    lg: "large",
                    xl: "extra"
                },
                a = {
                    items: {
                        type: Array,
                        required: !0
                    },
                    size: {
                        type: [String, Number],
                        validator: e => "string" === typeof e ? Object.values(s).includes(e) : e % 4 === 0
                    }
                };
            var c = {
                    props: a,
                    computed: {
                        sizeClass() {
                            return "string" === typeof this.size ? "is-" + this.size : ""
                        }
                    },
                    components: {
                        ListviewItem: o["a"]
                    }
                },
                u = c,
                d = (n("a4ed"), n("2877")),
                l = Object(d["a"])(u, i, r, !1, null, null, null);
            t["default"] = l.exports
        },
        a81a: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Device2", {
                web: () => n.e("device2").then(n.bind(null, "1b4b")).then(e => new e.DeviceWeb)
            })
        },
        c8ec: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Network", {
                web: () => n.e("chunk-2d0abc10").then(n.bind(null, "172f")).then(e => new e.NetworkWeb)
            })
        },
        d65e: function(e, t, n) {
            "use strict";
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("winui-searchbox", {
                        staticClass: "window__addressbar-search",
                        attrs: {
                            instant: e.instant,
                            placeholder: e.$t("search") + " " + e.currentLocation,
                            "data-test-addressbar-search": ""
                        },
                        on: {
                            search: function(t) {
                                return e.$emit("search", t)
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
                            const e = this.location.slice(0);
                            return "string" === typeof e ? e : e.pop()
                        }
                    }
                },
                s = o,
                a = n("2877"),
                c = Object(a["a"])(s, i, r, !1, null, null, null);
            t["a"] = c.exports
        },
        e47c: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "a", (function() {
                return m
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
            t["e"] = {
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
                    [o.TogglePreview]: (e, t) => {
                        e.previewTheme = t || null
                    },
                    [o.SetBootTheme]: (e, t) => {
                        e.bootTheme = t
                    },
                    [o.LoadTheme]: (e, t) => {
                        e.loadedTheme = t
                    }
                },
                actions: {
                    [o.TogglePreview]: ({
                        commit: e
                    }, t) => {
                        e(o.TogglePreview, t)
                    },
                    [o.LoadTheme]: async ({
                        commit: e,
                        dispatch: t
                    }, i) => {
                        if (i) {
                            await t(o.UnloadTheme);
                            try {
                                const t = l(i),
                                    {
                                        default: r
                                    } = await n("15d4")(`./${t}.scss`);
                                r.use(), e(o.LoadTheme, r)
                            } catch (r) {
                                console.error("Failed to load theme style for: " + i, r)
                            }
                        }
                    },
                    [o.UnloadTheme]: ({
                        state: e,
                        commit: t
                    }) => {
                        e.loadedTheme && (e.loadedTheme.unuse(), t(o.LoadTheme, null))
                    }
                }
            };
            const d = e => "win11dark" === e ? "win11" : "win81" === e ? "win8" : "winLP" === e ? "winLS" : /xp.{1}/.test(e) ? "winxp" : /^(aero|basic)-/.test(e) || "base" === e ? "win7" : e,
                l = e => u[e] || e,
                T = e => "win7" === e ? "aero-1" : e,
                m = {
                    AeroGlass: /^aero|winvista/,
                    AeroTaskbarItem: /^win8|^aero|basic-1/,
                    CenterTaskbar: /win11|chromeos/,
                    ChangeColor: /^aero|^win8|win10|^win11|kubuntu|ubuntu|oxygen/,
                    ChangeTransparency: /^aero|^win8|kubuntu/,
                    DarkMode: /basic-3|win11dark|macos|ubuntu|kubuntu|oxygen|aeroNoir/
                }
        },
        e5dd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var i = n("1547");
            const r = Object(i["d"])("Browser", {
                web: () => n.e("chunk-2d0e2170").then(n.bind(null, "7ce3")).then(e => new e.BrowserWeb)
            })
        },
        ed5d: function(e, t, n) {
            "use strict";
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(e.componentMap[e.viewMode], e._b({
                        tag: "component"
                    }, "component", e.listviewProps, !1))
                },
                r = [],
                o = n("a77a");
            const s = ["content", "details", "icons", "list", "tiles"],
                a = {
                    content: "ListviewViewContent",
                    details: "ListviewViewDetails",
                    icons: "ListviewViewIcons",
                    list: "ListviewViewList",
                    tiles: "ListviewViewTiles"
                };
            var c = {
                    props: { ...o["listviewProps"],
                        viewMode: {
                            type: String,
                            required: !0,
                            validator: e => s.includes(e)
                        }
                    },
                    computed: {
                        listviewProps() {
                            const {
                                items: e,
                                size: t
                            } = this;
                            return {
                                items: e,
                                size: t
                            }
                        },
                        componentMap: () => a
                    },
                    components: {
                        ListviewViewContent: () => n.e("listview-content").then(n.bind(null, "27b9")),
                        ListviewViewDetails: () => n.e("listview-details").then(n.bind(null, "32cd")),
                        ListviewViewIcons: () => Promise.resolve().then(n.bind(null, "a77a")),
                        ListviewViewList: () => n.e("listview-list").then(n.bind(null, "00d7")),
                        ListviewViewTiles: () => n.e("listview-tiles").then(n.bind(null, "7662"))
                    }
                },
                u = c,
                d = n("2877"),
                l = Object(d["a"])(u, i, r, !1, null, null, null);
            t["a"] = l.exports
        },
        f746: function(e, t, n) {
            "use strict";
            n("fc3e")
        },
        fc3e: function(e, t, n) {}
    }
]);