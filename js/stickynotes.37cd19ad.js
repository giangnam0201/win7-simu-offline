(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["stickynotes", "storage"], {
        "01b4": function(t, n, e) {
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
            n["a"] = i
        },
        "0e9a": function(t, n, e) {
            "use strict";
            e.d(n, "h", (function() {
                return o
            })), e.d(n, "f", (function() {
                return r
            })), e.d(n, "g", (function() {
                return s
            })), e.d(n, "j", (function() {
                return a
            })), e.d(n, "n", (function() {
                return c
            })), e.d(n, "m", (function() {
                return u
            })), e.d(n, "o", (function() {
                return d
            })), e.d(n, "e", (function() {
                return T
            })), e.d(n, "i", (function() {
                return I
            })), e.d(n, "d", (function() {
                return S
            })), e.d(n, "k", (function() {
                return _
            })), e.d(n, "l", (function() {
                return N
            })), e.d(n, "q", (function() {
                return l
            })), e.d(n, "r", (function() {
                return f
            })), e.d(n, "c", (function() {
                return A
            })), e.d(n, "a", (function() {
                return O
            })), e.d(n, "b", (function() {
                return C
            })), e.d(n, "p", (function() {
                return h
            }));
            const i = /data:([^;]*)(;.*)*,(.+)/;

            function o(t) {
                return "string" === typeof t && i.test(t)
            }

            function r(t) {
                try {
                    return t.length > 3 && !(t.length % 4) && atob(t) && !0
                } catch (n) {
                    return !1
                }
            }

            function s(t) {
                return t.startsWith("blob:")
            }

            function a(t) {
                return E(t, /(webp|apng|png|jpg|jpeg|jfif|svg|gif|ico)$/)
            }

            function c(t) {
                return E(t, /(txt|text|readme|md|json|xml|rtf|wpl)$/)
            }

            function u(t) {
                return E(t, /rtf$/)
            }

            function d(t) {
                return E(t, /(webm|mp4|mpg|mpeg|ogm|wmv|avi|mov)$/)
            }

            function T(t) {
                return E(t, /(webm|mp3|ogg|wav|wma|aac|m4a|flac|mid)$/)
            }

            function I(t) {
                return E(t, /(exe|msi|apk)$/)
            }

            function S(t) {
                return E(t, /(zip)$/)
            }

            function _(t) {
                return E(t, /(pdf)$/)
            }

            function N(t) {
                return E(t, /(wpl)$/)
            }

            function l(t) {
                return E(t, /(html|htm)$/)
            }

            function E(t, n) {
                const {
                    ext: e
                } = f(t);
                return !!e && n.test(e.toLowerCase())
            }

            function f(t) {
                const n = A(t),
                    [, e, i] = Array.from(n.match(/(.*)\.(.*)$/) || []);
                return e || i ? {
                    name: decodeURIComponent(e),
                    ext: i
                } : {
                    name: n,
                    ext: null
                }
            }

            function A(t) {
                const n = t.split("/").filter(Boolean),
                    e = n.pop();
                return e ? decodeURIComponent(e) : ""
            }

            function O(t) {
                const n = t.match(i);
                return n ? {
                    mime: n[1],
                    data: n[3]
                } : null
            }

            function C(t, n, e) {
                const i = T(t) ? "audio" : a(t) ? "image" : null;
                let o = "";
                o = s(e) ? e : i ? `data:${i}/${n};base64,${e}` : `data:application/${n},${encodeURIComponent(e)}`;
                const r = document.createElement("a");
                r.download = t, r.href = o, r.click()
            }
            async function h(t) {
                return new Promise(n => {
                    const e = document.createElement("video");
                    e.src = t, e.onloadedmetadata = () => {
                        const t = e.videoWidth > 0 && e.videoHeight > 0;
                        e.remove(), n(t)
                    }
                })
            }
        },
        "0f35": function(t, n, e) {
            "use strict";
            e.d(n, "e", (function() {
                return a
            })), e.d(n, "d", (function() {
                return c
            })), e.d(n, "f", (function() {
                return u
            })), e.d(n, "b", (function() {
                return d
            })), e.d(n, "a", (function() {
                return T
            })), e.d(n, "k", (function() {
                return I
            })), e.d(n, "m", (function() {
                return S
            })), e.d(n, "l", (function() {
                return _
            })), e.d(n, "h", (function() {
                return N
            })), e.d(n, "c", (function() {
                return l
            })), e.d(n, "p", (function() {
                return E
            })), e.d(n, "o", (function() {
                return f
            })), e.d(n, "q", (function() {
                return A
            })), e.d(n, "n", (function() {
                return O
            })), e.d(n, "j", (function() {
                return C
            })), e.d(n, "g", (function() {
                return h
            })), e.d(n, "i", (function() {
                return g
            }));
            var i = e("e5dd"),
                o = e("0fbc"),
                r = e("4cca"),
                s = e("0e9a");

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

            function T(t, n) {
                return t.find(t => new RegExp(`(img|media)/${n}\\.`, "g").test(t))
            }

            function I(t) {
                return (t < 10 ? "0" : "") + t
            }

            function S(t) {
                return new Promise((n, e) => {
                    const i = new Image;
                    i.onerror = e, i.onload = n, i.src = t
                })
            }

            function _(t) {
                const n = "string" === typeof t,
                    e = n && t.endsWith("mp4") || !n && t.type.includes("video"),
                    i = n ? t : Object(o["b"])(t.src, t.type);
                return {
                    url: i,
                    isAnimated: e
                }
            }

            function N(t) {
                try {
                    const {
                        hostname: n
                    } = new URL(t);
                    return /.+\..+/.test(n)
                } catch (n) {
                    return !1
                }
            }

            function l(t) {
                return t.startsWith("com.") || t.startsWith("org.chromium")
            }

            function E(t, n) {
                return n || (n = t, t = 0), Math.floor(Math.random() * (n - t + 1)) + t
            }

            function f(t = "") {
                return `${t}-${Math.random().toString(36).substring(2,9)}`
            }

            function A(t) {
                return new Promise(n => setTimeout(n, t))
            }
            async function O(t, n) {
                for (const e of t) await n(e)
            }

            function C() {
                i["a"].open({
                    url: "https://youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y"
                })
            }

            function h(t, n) {
                const e = Object(s["c"])(t);
                return Object(r["b"])(e) === n
            }

            function g(t, n, e, i, o) {
                t = Math.min(Math.max(t, n), e);
                const r = (t - n) / (e - n),
                    s = (o - i) * r + i;
                return s
            }
        },
        "0f9f": function(t, n, e) {},
        "0fbc": function(t, n, e) {
            "use strict";
            e.d(n, "e", (function() {
                return o
            })), e.d(n, "j", (function() {
                return r
            })), e.d(n, "i", (function() {
                return s
            })), e.d(n, "d", (function() {
                return a
            })), e.d(n, "f", (function() {
                return c
            })), e.d(n, "b", (function() {
                return u
            })), e.d(n, "a", (function() {
                return d
            })), e.d(n, "g", (function() {
                return T
            })), e.d(n, "h", (function() {
                return I
            })), e.d(n, "c", (function() {
                return S
            }));
            var i = e("0e9a");

            function o(t) {
                return t ? URL.createObjectURL(t) : null
            }

            function r(t) {
                return new Promise((n, e) => {
                    const i = new Image;
                    i.src = t, i.onload = () => n(i), i.onerror = () => e()
                })
            }

            function s(t, n = 0, e = 0) {
                const i = document.createElement("canvas"),
                    o = i.getContext("2d");
                if (!o) throw new Error("Failed to get canvas context");
                let r = n,
                    s = e;
                return r && s || (r = t.width || parseFloat(t.style.width) || parseFloat(getComputedStyle(t).width), s = t.height || parseFloat(t.style.height) || parseFloat(getComputedStyle(t).height)), i.width = r, i.height = s, o.drawImage(t, 0, 0, r, s), i
            }

            function a(t) {
                return new Promise(n => {
                    const e = new FileReader;
                    e.onloadend = () => n(e.result), e.readAsArrayBuffer(t)
                })
            }

            function c(t, n) {
                return new Promise((e, i) => {
                    t.toBlob(t => {
                        if (!t) return i("Failed to create blob from canvas");
                        a(t).then(e)
                    }, n)
                })
            }

            function u(t, n) {
                const e = new Blob([t], {
                    type: n || "application/octet-stream"
                });
                return o(e)
            }

            function d(t) {
                for (var n = "", e = new Uint8Array(t), i = e.byteLength, o = 0; o < i; o++) n += String.fromCharCode(e[o]);
                return window.btoa(n)
            }

            function T(t, n, e) {
                const o = Object(i["a"])(t),
                    r = o ? o.data : t,
                    s = n || 512,
                    a = atob(r),
                    c = [];
                for (let i = 0; i < a.length; i += s) {
                    const t = a.slice(i, i + s),
                        n = new Array(t.length);
                    for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
                    const e = new Uint8Array(n);
                    c.push(e)
                }
                return new Blob(c, {
                    type: e || "image/webp"
                })
            }

            function I(t, n, e) {
                const i = T(t, n, e);
                return o(i)
            }

            function S(t, n = "webp") {
                return `data:image/${n};base64,${t}`
            }
        },
        2877: function(t, n, e) {
            "use strict";

            function i(t, n, e, i, o, r, s, a) {
                var c, u = "function" === typeof t ? t.options : t;
                if (n && (u.render = n, u.staticRenderFns = e, u._compiled = !0), i && (u.functional = !0), r && (u._scopeId = "data-v-" + r), s ? (c = function(t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s)
                    }, u._ssrRegister = c) : o && (c = a ? function() {
                        o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : o), c)
                    if (u.functional) {
                        u._injectStyles = c;
                        var d = u.render;
                        u.render = function(t, n) {
                            return c.call(n), d(t, n)
                        }
                    } else {
                        var T = u.beforeCreate;
                        u.beforeCreate = T ? [].concat(T, c) : [c]
                    }
                return {
                    exports: t,
                    options: u
                }
            }
            e.d(n, "a", (function() {
                return i
            }))
        },
        "4cca": function(t, n, e) {
            "use strict";
            e.d(n, "h", (function() {
                return o
            })), e.d(n, "a", (function() {
                return r
            })), e.d(n, "d", (function() {
                return s
            })), e.d(n, "g", (function() {
                return a
            })), e.d(n, "j", (function() {
                return u
            })), e.d(n, "e", (function() {
                return d
            })), e.d(n, "c", (function() {
                return T
            })), e.d(n, "b", (function() {
                return I
            })), e.d(n, "f", (function() {
                return S
            })), e.d(n, "i", (function() {
                return _
            }));
            var i = e("0e9a");

            function o(t) {
                const n = ["bytes", "KB", "MB", "GB", "TB"];
                if (0 === t) return "0 bytes";
                const e = Math.floor(Math.log(t) / Math.log(1024));
                return 0 === e ? `${t} ${n[e]}` : `${(t/Math.pow(1024,e)).toFixed(1)} ${n[e]}`
            }

            function r(t, n) {
                let e = 1;
                const o = t => {
                    const r = n.find(n => n.lbl === t);
                    if (!r) return t;
                    const {
                        ext: s,
                        name: a
                    } = Object(i["r"])(t), [c] = Array.from(/\s?\(\d+\).*/.exec(t) || []), u = ` (${++e})` + (s ? "." + s : "");
                    let d = t;
                    return d = c ? d.replace(c, u) : a + u, o(d)
                };
                return o(t)
            }

            function s(t, n) {
                return t + ` (${n.toUpperCase()}:)`
            }

            function a(t, n) {
                return ["computer", t, n].filter(Boolean).join("/")
            }
            const c = /(tmpZip)?(\/EXTERNAL\/)?computer\/drive\d+\/?|file:\/\/\/storage\/emulated\/\d+|Android\/data\/com.visnalize.win7simu\/files/g;

            function u(t) {
                return t ? t.replace(c, "") : null
            }

            function d(t, n) {
                return "directory" === n ? "folder" : Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "media" : Object(i["l"])(t) ? "wpl" : Object(i["n"])(t) ? "text" : Object(i["i"])(t) ? "executable" : Object(i["m"])(t) ? "richtext" : Object(i["d"])(t) ? "zip" : Object(i["r"])(t).ext ? "file" : "folder"
            }

            function T(t) {
                return "system" === t ? "disk-os" : "disk-data"
            }

            function I(t) {
                return Object(i["j"])(t) ? "photo" : Object(i["e"])(t) || Object(i["o"])(t) ? "player" : Object(i["q"])(t) || Object(i["k"])(t) ? "chrome" : Object(i["m"])(t) ? "wordpad" : Object(i["n"])(t) ? "notepad" : Object(i["d"])(t) || !Object(i["r"])(t).ext ? "computer" : "file"
            }

            function S(t) {
                const n = t.split("/");
                return n.pop(), n.join("/")
            }

            function _(t, n) {
                return t.replace(/%APPDATA%/g, n.appDataPath || "").replace(/%USERPROFILE%/g, n.userPath || "").replace(/\\/g, "/")
            }
        },
        "58cd": function(t, n, e) {
            "use strict";
            var i = function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("span", {
                        staticClass: "inline-block bg-contain bg-no-repeat bg-center w-[16px] h-[16px] shrink-0 icon",
                        style: t.style,
                        attrs: {
                            "data-icon": t.id
                        }
                    })
                },
                o = [],
                r = {
                    props: {
                        id: String,
                        icon: String
                    },
                    computed: {
                        style() {
                            return {
                                "--icon": `url('${this.icon}')`
                            }
                        }
                    }
                },
                s = r,
                a = (e("ce5d"), e("2877")),
                c = Object(a["a"])(s, i, o, !1, null, null, null);
            n["a"] = c.exports
        },
        6792: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return o
            })), e.d(n, "c", (function() {
                return r
            })), e.d(n, "b", (function() {
                return s
            }));
            var i = e("8229");
            const o = {
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
                r = {
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
        8229: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return i
            })), e.d(n, "c", (function() {
                return o
            })), e.d(n, "d", (function() {
                return r
            })), e.d(n, "b", (function() {
                return s
            })), e.d(n, "e", (function() {
                return a
            })), e.d(n, "f", (function() {
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
                o = {
                    Aero: 0,
                    Standard: 1,
                    Black: 2,
                    Magnified: 3,
                    ThreeD: 4,
                    Hand: 5,
                    MacOS: 6,
                    Ubuntu: 7
                },
                r = {
                    [o.Aero]: {
                        label: "Windows Aero",
                        suffix: "-aero"
                    },
                    [o.Standard]: {
                        label: "Windows Standard",
                        suffix: "-standard"
                    },
                    [o.Black]: {
                        label: "Windows Black",
                        suffix: "-black"
                    },
                    [o.Magnified]: {
                        label: "Magnified",
                        suffix: "-magnified"
                    },
                    [o.ThreeD]: {
                        label: "3d-White",
                        suffix: "-3d"
                    },
                    [o.Hand]: {
                        label: "Hands",
                        suffix: "-hand"
                    },
                    [o.MacOS]: {
                        label: "MacOS",
                        suffix: "-macos"
                    },
                    [o.Ubuntu]: {
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
        8490: function(t, n, e) {
            "use strict";
            e("aad4")
        },
        "968c": function(t, n, e) {
            "use strict";
            e.r(n);
            const i = () => Promise.all([e.e("chunk-9691fd08"), e.e("database")]).then(e.bind(null, "5500")),
                o = async () => (await e.e("localforage").then(e.t.bind(null, "a002", 7))).default,
                r = (t, n, e) => t + n.uid + ("configs" !== e ? "/" + e : ""),
                s = (t, n) => n ? t + n.uid : t.replace(/\//g, ""),
                a = {
                    get: async (t, n, e) => n ? (await i()).get(r(t, n, e)) : (await o()).getItem(e),
                    update: async (t, n, e, s) => n ? (await i()).update(r(t, n, e), s) : a.get(t, n, e).then(async t => (await o()).setItem(e, { ...t,
                        ...s
                    })),
                    remove: async (t, n, e) => n ? (await i()).remove(r(t, n, e)) : (await o()).removeItem(e),
                    local: {}
                };
            a.local.update = async (t, n, e) => {
                const i = s(t, n);
                return (await o()).setItem(i, e)
            }, a.local.get = async (t, n) => {
                const e = s(t, n);
                return (await o()).getItem(e)
            }, a.local.remove = async (t, n) => {
                const e = s(t, n);
                return (await o()).removeItem(e)
            }, a.local.clean = async function(t) {
                const n = await o(),
                    e = await n.keys();
                return Promise.all(e.filter(n => n.includes(t)).map(t => this.remove(t)))
            }, n["default"] = a
        },
        aad4: function(t, n, e) {},
        c19f: function(t, n, e) {
            "use strict";
            e.d(n, "b", (function() {
                return r
            })), e.d(n, "a", (function() {
                return s
            }));
            var i = e("968c");
            const o = {
                    SetNotes: "setNotes"
                },
                r = "stickynotes",
                s = o;
            n["c"] = {
                state() {
                    return {
                        notes: []
                    }
                },
                mutations: {
                    [o.SetNotes]: (t, n) => {
                        t.notes = n
                    }
                },
                actions: {
                    [o.SetNotes]: ({
                        commit: t,
                        rootState: n
                    }, e) => (t(o.SetNotes, e), i["default"].local.update("notes", n.user, e))
                }
            }
        },
        ce5d: function(t, n, e) {
            "use strict";
            e("0f9f")
        },
        e5dd: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return o
            }));
            var i = e("1547");
            const o = Object(i["d"])("Browser", {
                web: () => e.e("chunk-2d0e2170").then(e.bind(null, "7ce3")).then(t => new t.BrowserWeb)
            })
        },
        eee5: function(t, n, e) {
            "use strict";
            e.r(n);
            var i = function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.minimized,
                            expression: "!minimized"
                        }],
                        staticClass: "fragment",
                        style: {
                            zIndex: t.zIndex
                        },
                        attrs: {
                            id: "window-sticky"
                        }
                    }, t._l(t.notes, (function(n, i) {
                        return e("sticky-note", {
                            key: i,
                            class: ["flex flex-col border-0 note", "is-" + n.color],
                            style: {
                                "--note-color": t.getColor(n)
                            },
                            attrs: {
                                dragHandle: ".note__control-list",
                                active: !0,
                                "prevent-deactivation": !0,
                                x: n.x,
                                y: n.y,
                                w: n.w,
                                h: n.h,
                                minWidth: 150,
                                minHeight: 100,
                                "data-test-sticky-notes": ""
                            },
                            on: {
                                dragstop: function(n, e) {
                                    return t.onDragged(i, n, e)
                                },
                                resizestop: function(n, e, o, r) {
                                    return t.onResized(i, n, e, o, r)
                                }
                            },
                            nativeOn: {
                                click: function(n) {
                                    return t.focus(i)
                                }
                            }
                        }, [e("div", {
                            staticClass: "relative flex justify-between p-1.5 note__control-list"
                        }, [e("button", {
                            staticClass: "center-flex p-0.5 border-0 note__control-item",
                            attrs: {
                                "aria-label": "add"
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), t.add(n)
                                }
                            }
                        }, [e("base-icon", {
                            staticClass: "note__control-icon",
                            attrs: {
                                icon: t.getIcon("add")
                            }
                        })], 1), e("button", {
                            staticClass: "center-flex p-0.5 border-0 note__control-item",
                            attrs: {
                                "aria-label": "close"
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), t.close(i)
                                }
                            }
                        }, [e("base-icon", {
                            staticClass: "note__control-icon",
                            attrs: {
                                icon: t.getIcon("close")
                            }
                        })], 1)]), e("div", {
                            staticClass: "w-full h-full note__content"
                        }, [e("textarea", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: n.content,
                                expression: "note.content"
                            }],
                            ref: "note",
                            refInFor: !0,
                            staticClass: "flex bg-transparent p-2 border-0 w-full h-full text-xl leading-8 resize-none note__textarea",
                            domProps: {
                                value: n.content
                            },
                            on: {
                                input: function(e) {
                                    e.target.composing || t.$set(n, "content", e.target.value)
                                }
                            }
                        })])])
                    })), 1)
                },
                o = [],
                r = e("0f35"),
                s = e("2f62"),
                a = e("58cd"),
                c = e("6792"),
                u = e("fb19"),
                d = e.n(u),
                T = e("c19f"),
                I = e("01b4"),
                S = e("2299");
            const _ = ["blue", "green", "pink", "purple", "white", "yellow"],
                N = _.reduce((t, n, e) => ({ ...t,
                    [n]: S["b"][e]
                }), {});
            var l = {
                    data() {
                        const t = "sticky",
                            n = {
                                x: 0,
                                y: 0,
                                w: 200,
                                h: 200,
                                color: _[_.length - 1],
                                content: ""
                            };
                        return {
                            initial: n,
                            id: t,
                            notes: [],
                            timeout: null,
                            unsubscribe: null
                        }
                    },
                    computed: { ...Object(s["f"])(["assets", "user", "windows", "stickynotes"]),
                        ...Object(s["d"])(["isRtl"]),
                        window() {
                            return this.windows.find(t => t.id === this.id)
                        },
                        zIndex() {
                            return this.window ? this.window.index : 99
                        },
                        minimized() {
                            return !!this.window && this.window.minimized
                        }
                    },
                    watch: {
                        stickynotes: {
                            immediate: !0,
                            async handler(t) {
                                await this.$nextTick(), this.notes = t.notes.length ? t.notes : [{ ...this.initial
                                }]
                            }
                        },
                        notes: {
                            deep: !0,
                            handler(t, n) {
                                t.length !== n.length ? this.save() : (clearTimeout(this.timeout), this.timeout = setTimeout(this.save, 600))
                            }
                        }
                    },
                    mounted() {
                        this.initial.y = (window.innerHeight - this.initial.h) / 2, this.initial.x = (window.innerWidth - this.initial.w) / 2, this.initial.x *= this.isRtl ? -1 : 1
                    },
                    methods: { ...Object(s["c"])([T["a"].SetNotes]),
                        getIcon(t) {
                            return Object(r["a"])(this.assets.assetStore.misc, "stickynotes-" + t)
                        },
                        getColor(t) {
                            return N[t.color]
                        },
                        add() {
                            const t = _[Object(r["p"])(0, _.length - 1)];
                            this.notes.push({ ...this.initial,
                                color: t
                            })
                        },
                        async close(t) {
                            const n = 1 === this.notes.length;
                            this.notes.splice(t, 1), n && (await this.$nextTick(), this.$root.$emit(c["c"].CloseWindow, this.id))
                        },
                        focus(t) {
                            if (t < this.notes.length - 1) {
                                const [n] = this.notes.splice(t, 1);
                                this.notes.push(n)
                            }
                            this.$store.commit(I["a"].WindowFocus, this.id), this.$refs.note[this.notes.length - 1].focus()
                        },
                        save() {
                            this[T["a"].SetNotes](this.notes)
                        },
                        onDragged(t, n, e) {
                            this.notes[t].x = n, this.notes[t].y = e
                        },
                        onResized(t, n, e, i, o) {
                            this.notes[t].x = n, this.notes[t].y = e, this.notes[t].w = i, this.notes[t].h = o
                        }
                    },
                    components: {
                        BaseIcon: a["a"],
                        StickyNote: d.a
                    }
                },
                E = l,
                f = (e("8490"), e("2877")),
                A = Object(f["a"])(E, i, o, !1, null, null, null);
            n["default"] = A.exports
        }
    }
]);