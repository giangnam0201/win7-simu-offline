(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["bsod"], {
        "0cbd": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex h-screen text-white bsod__screen is-win8",
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [n("div", {
                        staticClass: "bsod__body"
                    }, [n("h1", {
                        staticClass: "mb-7 bsod__title"
                    }, [e._v(":(")]), e._m(0), n("p", {
                        staticClass: "font-thin text-2xl"
                    }, [e._v("You can contact an admin about this error: " + e._s(e.code))])])])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("p", {
                        staticClass: "mb-10 font-thin text-4xl bsod__text"
                    }, [e._v(" Your device ran into a problem that it couldn't handle."), n("br"), e._v(" Now press anywhere to restart it. ")])
                }],
                i = {
                    props: {
                        code: String
                    }
                },
                l = i,
                s = (n("34a8"), n("2877")),
                a = Object(s["a"])(l, o, r, !1, null, null, null);
            t["default"] = a.exports
        },
        "21a3": function(e, t, n) {},
        "34a8": function(e, t, n) {
            "use strict";
            n("ae70")
        },
        "3e38": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["flex h-screen bsod__screen is-win10", e.theme],
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [n("div", {
                        staticClass: "bsod__body"
                    }, [n("h1", {
                        staticClass: "mb-7 bsod__title"
                    }, [e._v(":(")]), e._m(0), n("div", {
                        staticClass: "flex items-center gap-4"
                    }, [n("img", {
                        staticClass: "bg-white p-1",
                        attrs: {
                            width: "100",
                            height: "100",
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACsAQMAAADc/9WbAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAABkElEQVR4nN3WPY6CQBQA4AcxUSpNLLaEzRYeA7DhHJi9gyEhMtgQL7HGI3iAzULiJayEA2ziVkJCYN/MiGJiK884DfDRvMz7mVHg7lJelAOWGW3WU3wUgzPXHBOrE1aqbO1N3ODCLgPl1LDfAxhuH82fPqgnx2YYgu76H2nxRsvTOcYI4RMwBoi7ZZSULJLmxJB9LQHK21xS8HQ+mc3b5SMKueHgtr4fyj8qLJb6leUyz8xue/4xbO5KgL8RNveaZe8V7+jnYp6+cnysVd2N8lrLQ6ZvLBqG4bFXAnKK09DDjMoAu2fze3zEn7zhmX5QL7nsnnGrzBh4gAct56eDlicWCZu73xEmLZTTp5+HERknopbxC4AfVLMFUPGuTKzh1q5wDoqe7+d0DD3809+vxejB7G1o+DwH44JvEtayy2gZAk92dpO05rrVOTsY4EHl0Yn+vh6jXXJzm+HRpTxpxBwXAznzXNncdDzltQMybxsilvfvxWpviJqpNXwhZMeOcOju8ZKHG9Yq5Cfgu+vF+B8M+XfpatSJnQAAAABJRU5ErkJggg=="
                        }
                    }), n("div", [n("p", {
                        staticClass: "mb-8 font-thin text-lg"
                    }, [e._v("For more information that would not help, visit https://visnalize.com")]), n("p", {
                        staticClass: "mb-2 font-thin text-lg"
                    }, [e._v("If you call an admin, give them this info:")]), n("p", {
                        staticClass: "mb-2 font-thin text-lg"
                    }, [e._v("Stop code: " + e._s(e.code))])])])])])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("p", {
                        staticClass: "mb-10 font-thin text-4xl bsod__text"
                    }, [e._v(" Your device ran into a problem and needs to restart."), n("br"), e._v(" We're not collecting any error info, please restart it"), n("br"), e._v(" by yourself. ")])
                }],
                i = {
                    props: {
                        code: String,
                        theme: String
                    }
                },
                l = i,
                s = (n("e7fd"), n("2877")),
                a = Object(s["a"])(l, o, r, !1, null, null, null);
            t["default"] = a.exports
        },
        "475f": function(e, t, n) {},
        "5cfe": function(e, t, n) {},
        "60fe": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("window-main", {
                        staticClass: "is-bsod",
                        attrs: {
                            id: "window-" + e.id
                        },
                        on: {
                            resize: e.handleResize
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: e.id,
                            title: e.$t(e.id)
                        }
                    }, [n("window-controls")], 1), n("window-body", {
                        class: {
                            "is-wide": e.isWide
                        }
                    }, [n("div", {
                        class: ["w-full", {
                            "mr-4 overflow-auto": e.isWide
                        }]
                    }, [e.isWide ? n(e.version, {
                        ref: "result",
                        tag: "component",
                        style: {
                            fontSize: e.fontSize + "px",
                            background: e.color
                        },
                        attrs: {
                            code: e.errorCode,
                            contenteditable: e.editable
                        },
                        on: {
                            click: e.exitFullscreen
                        }
                    }) : n("div", {
                        staticClass: "mb-2 py-4 border-dashed text-center italic"
                    }, [e._v(" " + e._s(e.$t("preview-bsod")) + " ")])], 1), n("div", {
                        class: ["flex flex-col justify-between min-w-60", e.isWide ? "w-1/4 overflow-auto" : "w-full"]
                    }, [n("div", {
                        staticClass: "flex flex-col gap-2 mb-4"
                    }, [n("winui-fieldset", {
                        attrs: {
                            label: e.$t("select-version")
                        }
                    }, e._l(e.versions, (function(t, o) {
                        return n("winui-radio", {
                            key: o,
                            attrs: {
                                id: "version-" + o,
                                nativeValue: o,
                                name: "version"
                            },
                            model: {
                                value: e.version,
                                callback: function(t) {
                                    e.version = t
                                },
                                expression: "version"
                            }
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 1), n("winui-fieldset", {
                        staticClass: "gap-2",
                        attrs: {
                            label: e.$t("customize")
                        }
                    }, [n("div", {
                        staticClass: "flex flex-col"
                    }, [n("winui-checkbox", {
                        attrs: {
                            id: "editable"
                        },
                        model: {
                            value: e.editable,
                            callback: function(t) {
                                e.editable = t
                            },
                            expression: "editable"
                        }
                    }, [e._v(e._s(e.$t("all-text-editable")))])], 1), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("label", [e._v(e._s(e.$t("error-code")))]), n("winui-textbox", {
                        attrs: {
                            disabled: e.editable
                        },
                        model: {
                            value: e.errorCode,
                            callback: function(t) {
                                e.errorCode = t
                            },
                            expression: "errorCode"
                        }
                    })], 1), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("label", [e._v(e._s(e.$t("color")))]), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.color,
                            expression: "color"
                        }],
                        staticClass: "rounded-none w-full",
                        attrs: {
                            type: "color"
                        },
                        domProps: {
                            value: e.color
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || (e.color = t.target.value)
                            }
                        }
                    })]), n("div", {
                        staticClass: "flex flex-col gap-1"
                    }, [n("label", {
                        class: {
                            "opacity-40": !e.canChangeFontSize
                        }
                    }, [e._v(e._s(e.$t("font")) + " (" + e._s(e.fontSize) + "px)")]), n("winui-slider", {
                        attrs: {
                            min: "10",
                            max: "30",
                            disabled: !e.canChangeFontSize
                        },
                        model: {
                            value: e.fontSize,
                            callback: function(t) {
                                e.fontSize = t
                            },
                            expression: "fontSize"
                        }
                    })], 1)]), n("winui-fieldset", {
                        attrs: {
                            label: e.$t("export")
                        }
                    }, [n("div", {
                        staticClass: "center-flex-x w-full"
                    }, [n("winui-textbox", {
                        staticClass: "w-full",
                        attrs: {
                            placeholder: "width",
                            type: "number",
                            min: "0",
                            max: "9999"
                        },
                        model: {
                            value: e.width,
                            callback: function(t) {
                                e.width = t
                            },
                            expression: "width"
                        }
                    }), n("span", {
                        staticClass: "font-mono"
                    }, [e._v("x")]), n("winui-textbox", {
                        staticClass: "w-full",
                        attrs: {
                            placeholder: "height",
                            type: "number",
                            min: "0",
                            max: "9999"
                        },
                        model: {
                            value: e.height,
                            callback: function(t) {
                                e.height = t
                            },
                            expression: "height"
                        }
                    })], 1), n("winui-button", {
                        attrs: {
                            disabled: !e.canExport
                        },
                        on: {
                            click: e.exportImage
                        }
                    }, [e._v(e._s(e.$t("export")))])], 1)], 1), n("div", {
                        staticClass: "center-flex-y gap-2 bsod__actions"
                    }, [e.canFullscreen ? n("winui-button", {
                        attrs: {
                            disabled: !e.canExport
                        },
                        on: {
                            click: e.showFullscreen
                        }
                    }, [e._v(" " + e._s(e.$t("show-fullscreen")) + " ")]) : e._e(), n("winui-button", {
                        on: {
                            click: e.exit
                        }
                    }, [e._v(e._s(e.$t("exit")))])], 1)])])], 1), e.showSave ? n("dialog-save", {
                        attrs: {
                            parent: e.id,
                            content: e.image,
                            dialogIcon: e.id,
                            dialogName: "save-as",
                            fileName: e.versions[e.version] + " BSOD",
                            fileTypes: {
                                png: "PNG (*.png)"
                            }
                        },
                        on: {
                            done: e.toggleShowSave,
                            cancel: e.toggleShowSave
                        }
                    }) : e._e()], 1)
                },
                r = [],
                i = n("9d9e"),
                l = n("6792"),
                s = n("3e38"),
                a = n("6e59"),
                c = n("6812"),
                u = n("0cbd"),
                d = n("1521"),
                f = n("e863"),
                h = n("1d26"),
                m = n("e314"),
                p = n("8dc1"),
                g = n("bccb"),
                w = n.n(g);
            const v = {
                win31: "#0000aa",
                win7: "#0100ad",
                win8: "#1173aa",
                win10: "#0079d8"
            };
            var b = {
                    data() {
                        return {
                            id: "bsod",
                            isWide: !1,
                            canFullscreen: w.a.supported,
                            editable: !1,
                            errorCode: "LOREM_IPSUM",
                            color: "#0100ad",
                            fontSize: 16,
                            width: null,
                            height: null,
                            version: "win7",
                            versions: {
                                win31: "Windows 3.1",
                                win7: "Windows 7",
                                win8: "Windows 8",
                                win10: "Windows 10"
                            },
                            showSave: !1,
                            image: null
                        }
                    },
                    computed: {
                        result() {
                            return this.$refs.result.$el
                        },
                        canExport() {
                            return this.isWide && this.width > 0 && this.height > 0 && this.width <= 9999 && this.height <= 9999
                        },
                        canChangeFontSize() {
                            return /win31|win7/.test(this.version)
                        }
                    },
                    watch: {
                        version() {
                            this.color = v[this.version]
                        }
                    },
                    mounted() {
                        this.width = window.outerWidth, this.height = window.outerHeight
                    },
                    methods: {
                        handleResize(e) {
                            this.isWide = e > 800 || "full" === e
                        },
                        exitFullscreen() {
                            w.a.active && w.a.exit()
                        },
                        showFullscreen() {
                            this.canExport && w.a.request(this.result)
                        },
                        async exportImage() {
                            this.canExport && (this.toggleShowSave(), this.image = await Object(p["domToCanvas"])(this.result, {
                                width: this.width,
                                height: this.height,
                                quality: 1
                            }))
                        },
                        toggleShowSave() {
                            this.showSave = !this.showSave
                        },
                        exit() {
                            this.$root.$emit(l["c"].CloseWindow, this.id)
                        }
                    },
                    components: {
                        DialogSave: i["a"],
                        WindowControls: f["a"],
                        WindowTitlebar: m["a"],
                        WindowMain: h["a"],
                        WindowBody: d["a"],
                        Win31: a["default"],
                        Win7: c["default"],
                        Win8: u["default"],
                        Win10: s["default"]
                    }
                },
                y = b,
                x = (n("7c75"), n("2877")),
                A = Object(x["a"])(y, o, r, !1, null, null, null);
            t["default"] = A.exports
        },
        6812: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex flex-col justify-evenly h-screen text-white text-xl bsod__screen is-win7",
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [n("div", [e._v("A problem has been detected and Windows has been shut down to prevent damage to your device.")]), n("div", [e._v("ERROR_" + e._s(e.code))]), "ADBLOCKER_DETECTED" === e.code ? [n("div", [e._v(" We have detected that you are using an Adblocker to prevent ads. Please know that we have done our best to keep the ads minimal and non-intrusive so you can have an enjoyable experience using the app. ")]), n("div", [e._v("Please support our work by disabling your Adblocker for this site. Thank you!")])] : [n("div", [e._v(" If this is the first time you've seen this Stop error screen, restart the app. If this screen appears again, follow these steps: ")]), n("div", [e._v(" Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need. ")]), n("div", [e._v(" If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. IF you need to use Safe Mode to remove or disable components, restart your device, press F8 to select Advanced Startup options, and then select Safe Mode. ")])], n("div", [e._v("Technical information:")]), n("div", [e._v("*** STOP: 0x000000000 (0x000000000, 0x000000000, 0x000000000)")]), n("div", [e._v("Contact your system administrator or technical support group for further assistance.")])], 2)
                },
                r = [],
                i = {
                    props: {
                        code: String
                    }
                },
                l = i,
                s = (n("ac73"), n("2877")),
                a = Object(s["a"])(l, o, r, !1, null, null, null);
            t["default"] = a.exports
        },
        "6e59": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "flex h-screen text-white text-xl bsod__screen is-win31",
                        on: {
                            click: function(t) {
                                return e.$emit("click")
                            }
                        }
                    }, [n("div", {
                        staticClass: "w-4/5 bsod__body"
                    }, [e._m(0), n("p", {
                        staticClass: "mb-7"
                    }, [e._v("An error has occurred. To continue:")]), e._m(1), n("p", {
                        staticClass: "mb-7"
                    }, [e._v("Error: " + e._s(e.code))]), n("p", {
                        staticClass: "text-center"
                    }, [e._v("Press anywhere to continue _")])])])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("h2", {
                        staticClass: "mb-7 font-bold text-center bsod__title"
                    }, [n("span", {
                        staticClass: "px-3 py-1 bsod__title-text"
                    }, [e._v("Windows")])])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("p", {
                        staticClass: "mb-7"
                    }, [e._v(" Press anywhere to restart your device. If you do this,"), n("br"), e._v(" you will not lose any unsaved information in all open applications. ")])
                }],
                i = {
                    props: {
                        code: String
                    }
                },
                l = i,
                s = (n("9bd2"), n("2877")),
                a = Object(s["a"])(l, o, r, !1, null, null, null);
            t["default"] = a.exports
        },
        "7c75": function(e, t, n) {
            "use strict";
            n("475f")
        },
        "8dc1": function(e, t, n) {
            (function(e, n) {
                n(t)
            })(0, (function(e) {
                var t, n = Object.defineProperty,
                    o = Object.defineProperties,
                    r = Object.getOwnPropertyDescriptors,
                    i = Object.getOwnPropertySymbols,
                    l = Object.prototype.hasOwnProperty,
                    s = Object.prototype.propertyIsEnumerable,
                    a = Math.pow,
                    c = (e, t, o) => t in e ? n(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: o
                    }) : e[t] = o,
                    u = (e, t) => {
                        for (var n in t || (t = {})) l.call(t, n) && c(e, n, t[n]);
                        if (i)
                            for (var n of i(t)) s.call(t, n) && c(e, n, t[n]);
                        return e
                    },
                    d = (e, t) => o(e, r(t)),
                    f = (e, t) => {
                        var n = {};
                        for (var o in e) l.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                        if (null != e && i)
                            for (var o of i(e)) t.indexOf(o) < 0 && s.call(e, o) && (n[o] = e[o]);
                        return n
                    },
                    h = (e, t, n) => new Promise((o, r) => {
                        var i = e => {
                                try {
                                    s(n.next(e))
                                } catch (A) {
                                    r(A)
                                }
                            },
                            l = e => {
                                try {
                                    s(n.throw(e))
                                } catch (A) {
                                    r(A)
                                }
                            },
                            s = e => e.done ? o(e.value) : Promise.resolve(e.value).then(i, l);
                        s((n = n.apply(e, t)).next())
                    });

                function m(e, t) {
                    return e[13] = 1, e[14] = t >> 8, e[15] = 255 & t, e[16] = t >> 8, e[17] = 255 & t, e
                }
                const p = "p".charCodeAt(0),
                    g = "H".charCodeAt(0),
                    w = "Y".charCodeAt(0),
                    v = "s".charCodeAt(0);
                let b;

                function y() {
                    const e = new Int32Array(256);
                    for (let t = 0; t < 256; t++) {
                        let n = t;
                        for (let e = 0; e < 8; e++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                        e[t] = n
                    }
                    return e
                }

                function x(e) {
                    let t = -1;
                    b || (b = y());
                    for (let n = 0; n < e.length; n++) t = b[255 & (t ^ e[n])] ^ t >>> 8;
                    return -1 ^ t
                }

                function A(e) {
                    const t = e.length - 1;
                    for (let n = t; n >= 4; n--)
                        if (9 === e[n - 4] && e[n - 3] === p && e[n - 2] === g && e[n - 1] === w && e[n] === v) return n - 3;
                    return 0
                }

                function C(e, t, n = !1) {
                    const o = new Uint8Array(13);
                    t *= 39.3701, o[0] = p, o[1] = g, o[2] = w, o[3] = v, o[4] = t >>> 24, o[5] = t >>> 16, o[6] = t >>> 8, o[7] = 255 & t, o[8] = o[4], o[9] = o[5], o[10] = o[6], o[11] = o[7], o[12] = 1;
                    const r = x(o),
                        i = new Uint8Array(4);
                    if (i[0] = r >>> 24, i[1] = r >>> 16, i[2] = r >>> 8, i[3] = 255 & r, n) {
                        const t = A(e);
                        return e.set(o, t), e.set(i, t + 13), e
                    } {
                        const t = new Uint8Array(4);
                        t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 9;
                        const n = new Uint8Array(54);
                        return n.set(e, 0), n.set(t, 33), n.set(o, 37), n.set(i, 50), n
                    }
                }
                const S = "AAlwSFlz",
                    _ = "AAAJcEhZ",
                    E = "AAAACXBI";

                function k(e) {
                    let t = e.indexOf(S);
                    return -1 === t && (t = e.indexOf(_)), -1 === t && (t = e.indexOf(E)), t
                }
                const T = "[modern-screenshot]",
                    N = "undefined" != typeof window,
                    D = N && "Worker" in window,
                    $ = N && "atob" in window,
                    O = N && "btoa" in window,
                    F = N ? null == (t = window.navigator) ? void 0 : t.userAgent : "",
                    P = F.includes("Chrome"),
                    I = F.includes("AppleWebKit") && !P,
                    j = F.includes("Firefox"),
                    R = e => e && "__CONTEXT__" in e,
                    W = e => "CSSFontFaceRule" === e.constructor.name,
                    B = e => "CSSImportRule" === e.constructor.name,
                    L = e => 1 === e.nodeType,
                    M = e => "object" == typeof e.className,
                    z = e => M(e) && "svg" === e.tagName,
                    U = e => M(e) && "image" === e.tagName,
                    q = e => L(e) && "undefined" != typeof e.style && !M(e),
                    H = e => 8 === e.nodeType,
                    V = e => 3 === e.nodeType,
                    J = e => "IMG" === e.tagName,
                    X = e => "VIDEO" === e.tagName,
                    Y = e => "CANVAS" === e.tagName,
                    Q = e => "TEXTAREA" === e.tagName,
                    G = e => "INPUT" === e.tagName,
                    K = e => "STYLE" === e.tagName,
                    Z = e => "SCRIPT" === e.tagName,
                    ee = e => "SELECT" === e.tagName,
                    te = e => "SLOT" === e.tagName,
                    ne = e => "IFRAME" === e.tagName,
                    oe = (...e) => console.warn(T, ...e),
                    re = e => console.time(`${T} ${e}`),
                    ie = e => console.timeEnd(`${T} ${e}`),
                    le = e => {
                        var t;
                        const n = null == (t = null == e ? void 0 : e.createElement) ? void 0 : t.call(e, "canvas");
                        return n && (n.height = n.width = 1), n && "toDataURL" in n && Boolean(n.toDataURL("image/webp").includes("image/webp"))
                    },
                    se = e => e.startsWith("data:");

                function ae(e, t) {
                    if (e.match(/^[a-z]+:\/\//i)) return e;
                    if (N && e.match(/^\/\//)) return window.location.protocol + e;
                    if (e.match(/^[a-z]+:/i) || !N) return e;
                    const n = ce().implementation.createHTMLDocument(),
                        o = n.createElement("base"),
                        r = n.createElement("a");
                    return n.head.appendChild(o), n.body.appendChild(r), t && (o.href = t), r.href = e, r.href
                }

                function ce(e) {
                    var t;
                    return null != (t = e && L(e) ? null == e ? void 0 : e.ownerDocument : e) ? t : window.document
                }
                const ue = "http://www.w3.org/2000/svg";

                function de(e, t, n) {
                    const o = ce(n).createElementNS(ue, "svg");
                    return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", t.toString()), o.setAttributeNS(null, "viewBox", `0 0 ${e} ${t}`), o
                }

                function fe(e, t) {
                    let n = (new XMLSerializer).serializeToString(e);
                    return t && (n = n.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu, "")), "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n)
                }

                function he(e, t = "image/png", n = 1) {
                    return h(this, null, (function*() {
                        try {
                            return yield new Promise((o, r) => {
                                e.toBlob(e => {
                                    e ? o(e) : r(new Error("Blob is null"))
                                }, t, n)
                            })
                        } catch (o) {
                            if ($) return oe("Failed canvas to blob", {
                                type: t,
                                quality: n
                            }, o), me(e.toDataURL(t, n));
                            throw o
                        }
                    }))
                }

                function me(e) {
                    var t, n;
                    const [o, r] = e.split(","), i = null != (n = null == (t = o.match(/data:(.+);/)) ? void 0 : t[1]) ? n : void 0, l = window.atob(r), s = l.length, a = new Uint8Array(s);
                    for (let c = 0; c < s; c += 1) a[c] = l.charCodeAt(c);
                    return new Blob([a], {
                        type: i
                    })
                }

                function pe(e, t) {
                    return new Promise((n, o) => {
                        const r = new FileReader;
                        r.onload = () => n(r.result), r.onerror = () => o(r.error), r.onabort = () => o(new Error("Failed read blob to " + t)), "dataUrl" === t ? r.readAsDataURL(e) : "arrayBuffer" === t && r.readAsArrayBuffer(e)
                    })
                }
                const ge = e => pe(e, "dataUrl"),
                    we = e => pe(e, "arrayBuffer");

                function ve(e, t) {
                    const n = ce(t).createElement("img");
                    return n.decoding = "sync", n.loading = "eager", n.src = e, n
                }

                function be(e, t) {
                    return new Promise(n => {
                        const {
                            timeout: o,
                            ownerDocument: r,
                            onError: i
                        } = null != t ? t : {}, l = "string" == typeof e ? ve(e, ce(r)) : e;
                        let s = null,
                            a = null;

                        function c() {
                            n(l), s && clearTimeout(s), null == a || a()
                        }
                        if (o && (s = setTimeout(c, o)), X(l)) {
                            const e = l.currentSrc || l.src;
                            if (!e) return l.poster ? be(l.poster, t).then(n) : c();
                            if (l.readyState >= 2) return c();
                            const o = c,
                                r = t => {
                                    oe("Failed video load", e, t), null == i || i(t), c()
                                };
                            a = () => {
                                l.removeEventListener("loadeddata", o), l.removeEventListener("error", r)
                            }, l.addEventListener("loadeddata", o, {
                                once: !0
                            }), l.addEventListener("error", r, {
                                once: !0
                            })
                        } else {
                            const e = U(l) ? l.href.baseVal : l.currentSrc || l.src;
                            if (!e) return c();
                            const t = () => h(this, null, (function*() {
                                    if (J(l) && "decode" in l) try {
                                        yield l.decode()
                                    } catch (t) {
                                        oe("Failed to decode image, trying to render anyway", l.dataset.originalSrc || e, t)
                                    }
                                    c()
                                })),
                                n = t => {
                                    oe("Failed image load", l.dataset.originalSrc || e, t), c()
                                };
                            if (J(l) && l.complete) return t();
                            a = () => {
                                l.removeEventListener("load", t), l.removeEventListener("error", n)
                            }, l.addEventListener("load", t, {
                                once: !0
                            }), l.addEventListener("error", n, {
                                once: !0
                            })
                        }
                    })
                }

                function ye(e, t) {
                    return h(this, null, (function*() {
                        q(e) && (J(e) || X(e) ? yield be(e, {
                            timeout: t
                        }): yield Promise.all(["img", "video"].flatMap(n => Array.from(e.querySelectorAll(n)).map(e => be(e, {
                            timeout: t
                        })))))
                    }))
                }
                const xe = function() {
                    let e = 0;
                    const t = () => ("0000" + (Math.random() * a(36, 4) << 0).toString(36)).slice(-4);
                    return () => (e += 1, `u${t()}${e}`)
                }();

                function Ae(e) {
                    return null == e ? void 0 : e.split(",").map(e => e.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean)
                }

                function Ce(e) {
                    return {
                        time: t => e && re(t),
                        timeEnd: t => e && ie(t),
                        warn: (...t) => e && oe(...t)
                    }
                }

                function Se(e) {
                    return {
                        cache: e ? "no-cache" : "force-cache"
                    }
                }

                function _e(e, t) {
                    return h(this, null, (function*() {
                        return R(e) ? e : Ee(e, d(u({}, t), {
                            autoDestruct: !0
                        }))
                    }))
                }

                function Ee(e, t) {
                    return h(this, null, (function*() {
                        var n, o, r, i, l;
                        const {
                            scale: s = 1,
                            workerUrl: a,
                            workerNumber: c = 1
                        } = t || {}, f = Boolean(null == t ? void 0 : t.debug), m = null == (n = null == t ? void 0 : t.features) || n, p = null != (o = e.ownerDocument) ? o : N ? window.document : void 0, g = null != (i = null == (r = e.ownerDocument) ? void 0 : r.defaultView) ? i : N ? window : void 0, w = new Map, v = d(u({
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
                            debug: f,
                            fetch: u({
                                requestInit: Se(null == (l = null == t ? void 0 : t.fetch) ? void 0 : l.bypassingCache),
                                placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                bypassingCache: !1
                            }, null == t ? void 0 : t.fetch),
                            font: {},
                            drawImageInterval: 100,
                            workerUrl: null,
                            workerNumber: c,
                            onCloneNode: null,
                            onEmbedNode: null,
                            onCreateForeignObjectSvg: null,
                            autoDestruct: !1
                        }, t), {
                            __CONTEXT__: !0,
                            log: Ce(f),
                            node: e,
                            ownerDocument: p,
                            ownerWindow: g,
                            dpi: 1 === s ? null : 96 * s,
                            svgStyleElement: ke(p),
                            svgDefsElement: null == p ? void 0 : p.createElementNS(ue, "defs"),
                            svgStyles: new Map,
                            defaultComputedStyles: new Map,
                            workers: [...new Array(D && a && c ? c : 0)].map(() => {
                                try {
                                    const e = new Worker(a);
                                    return e.onmessage = e => h(this, null, (function*() {
                                        var t, n, o, r;
                                        const {
                                            url: i,
                                            result: l
                                        } = e.data;
                                        l ? null == (n = null == (t = w.get(i)) ? void 0 : t.resovle) || n.call(t, l) : null == (r = null == (o = w.get(i)) ? void 0 : o.reject) || r.call(o, new Error("Error receiving message from worker: " + i))
                                    })), e.onmessageerror = e => {
                                        var t, n;
                                        const {
                                            url: o
                                        } = e.data;
                                        null == (n = null == (t = w.get(o)) ? void 0 : t.reject) || n.call(t, new Error("Error receiving message from worker: " + o))
                                    }, e
                                } catch (e) {
                                    return oe("Failed to new Worker", e), null
                                }
                            }).filter(Boolean),
                            fontFamilies: new Set,
                            fontCssTexts: new Map,
                            acceptOfImage: [le(p) && "image/webp", "image/svg+xml", "image/*", "*/*"].filter(Boolean).join(",") + ";q=0.8",
                            requests: w,
                            drawImageCount: 0,
                            tasks: [],
                            features: m,
                            isEnable: e => {
                                var t;
                                return "boolean" == typeof m ? m : null == (t = m[e]) || t
                            }
                        });
                        v.log.time("wait until load"), yield ye(e, v.timeout), v.log.timeEnd("wait until load");
                        const {
                            width: b,
                            height: y
                        } = Te(e, v);
                        return v.width = b, v.height = y, v
                    }))
                }

                function ke(e) {
                    if (!e) return;
                    const t = e.createElement("style"),
                        n = t.ownerDocument.createTextNode("\n.______background-clip--text {\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n");
                    return t.appendChild(n), t
                }

                function Te(e, t) {
                    let {
                        width: n,
                        height: o
                    } = t;
                    if (L(e) && (!n || !o)) {
                        const t = e.getBoundingClientRect();
                        n = n || t.width || Number(e.getAttribute("width")) || 0, o = o || t.height || Number(e.getAttribute("height")) || 0
                    }
                    return {
                        width: n,
                        height: o
                    }
                }

                function Ne(e, t) {
                    return h(this, null, (function*() {
                        const {
                            log: n,
                            timeout: o,
                            drawImageCount: r,
                            drawImageInterval: i
                        } = t;
                        n.time("image to canvas");
                        const l = yield be(e, {
                            timeout: o
                        }), {
                            canvas: s,
                            context2d: a
                        } = De(e.ownerDocument, t), c = () => {
                            try {
                                null == a || a.drawImage(l, 0, 0, s.width, s.height)
                            } catch (e) {
                                oe("Failed to drawImage", e)
                            }
                        };
                        if (c(), t.isEnable("fixSvgXmlDecode"))
                            for (let e = 0; e < r; e++) yield new Promise(t => {
                                setTimeout(() => {
                                    c(), t()
                                }, e + i)
                            });
                        return t.drawImageCount = 0, n.timeEnd("image to canvas"), s
                    }))
                }

                function De(e, t) {
                    const {
                        width: n,
                        height: o,
                        scale: r,
                        backgroundColor: i,
                        maximumCanvasSize: l
                    } = t, s = e.createElement("canvas");
                    s.width = Math.floor(n * r), s.height = Math.floor(o * r), s.style.width = n + "px", s.style.height = o + "px", l && (s.width > l || s.height > l) && (s.width > l && s.height > l ? s.width > s.height ? (s.height *= l / s.width, s.width = l) : (s.width *= l / s.height, s.height = l) : s.width > l ? (s.height *= l / s.width, s.width = l) : (s.width *= l / s.height, s.height = l));
                    const a = s.getContext("2d");
                    return a && i && (a.fillStyle = i, a.fillRect(0, 0, s.width, s.height)), {
                        canvas: s,
                        context2d: a
                    }
                }
                const $e = ["width", "height"],
                    Oe = ["stroke", "fill"];

                function Fe(e, t, n) {
                    var o;
                    const {
                        defaultComputedStyles: r,
                        ownerDocument: i
                    } = n, l = e.nodeName.toLowerCase(), s = M(e) && "svg" !== l, a = s ? Oe.map(t => [t, e.getAttribute(t)]).filter(([, e]) => null !== e) : [], c = [s && "svg", l, a.map((e, t) => `${e}=${t}`).join(","), t].filter(Boolean).join(":");
                    if (r.has(c)) return r.get(c);
                    let u = n.sandbox;
                    if (!u) try {
                        i && (u = i.createElement("iframe"), u.id = "__SANDBOX__-" + xe(), u.width = "0", u.height = "0", u.style.visibility = "hidden", u.style.position = "fixed", i.body.appendChild(u), null == (o = u.contentWindow) || o.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'), n.sandbox = u)
                    } catch (w) {
                        oe("Failed to create iframe sandbox", w)
                    }
                    if (!u) return new Map;
                    const d = u.contentWindow;
                    if (!d) return new Map;
                    const f = d.document;
                    let h, m;
                    s ? (h = f.createElementNS(ue, "svg"), m = h.ownerDocument.createElementNS(h.namespaceURI, l), a.forEach(([e, t]) => {
                        m.setAttributeNS(null, e, t)
                    }), h.appendChild(m)) : h = m = f.createElement(l), m.textContent = " ", f.body.appendChild(h);
                    const p = d.getComputedStyle(m, t),
                        g = new Map;
                    for (let v = p.length, b = 0; b < v; b++) {
                        const e = p.item(b);
                        $e.includes(e) || g.set(e, p.getPropertyValue(e))
                    }
                    return f.body.removeChild(h), r.set(c, g), g
                }

                function Pe(e, t) {
                    var n;
                    const o = new Map,
                        r = [],
                        i = new Map;
                    for (let l = e.length, s = 0; s < l; s++) {
                        const n = e.item(s),
                            l = e.getPropertyValue(n),
                            a = e.getPropertyPriority(n),
                            c = n.lastIndexOf("-"),
                            u = c > -1 ? n.substring(0, c) : void 0;
                        if (u) {
                            let e = i.get(u);
                            e || (e = new Map, i.set(u, e)), e.set(n, [l, a])
                        }
                        t.get(n) === l && !a || (u ? r.push(u) : o.set(n, [l, a]))
                    }
                    for (let l = r.length, s = 0; s < l; s++) null == (n = i.get(r[s])) || n.forEach((e, t) => o.set(t, e));
                    return o
                }
                const Ie = [":before", ":after"],
                    je = [":-webkit-scrollbar", ":-webkit-scrollbar-button", ":-webkit-scrollbar-thumb", ":-webkit-scrollbar-track", ":-webkit-scrollbar-track-piece", ":-webkit-scrollbar-corner", ":-webkit-resizer"];

                function Re(e, t, n, o) {
                    const {
                        ownerWindow: r,
                        svgStyleElement: i,
                        svgStyles: l
                    } = o;

                    function s(n) {
                        var i;
                        const s = r.getComputedStyle(e, n);
                        let a = s.getPropertyValue("content");
                        if (!a || "none" === a) return;
                        a = a.replace(/(')|(")|(counter\(.+\))/g, "");
                        const c = [xe()],
                            u = Fe(e, n, o),
                            d = [`content: '${a}';`],
                            f = Pe(s, u);
                        if (f.delete("content"), f.delete("-webkit-locale"), "text" === (null == (i = f.get("background-clip")) ? void 0 : i[0]) && t.classList.add("______background-clip--text"), f.forEach(([e, t], n) => {
                                d.push(`${n}: ${e}${t?" !important":""};`)
                            }), 1 === d.length) return;
                        try {
                            t.className = [t.className, ...c].join(" ")
                        } catch (p) {
                            return
                        }
                        const h = d.join("\n  ");
                        let m = l.get(h);
                        m || (m = [], l.set(h, m)), m.push(`.${c[0]}:${n}`)
                    }
                    i && r && (Ie.forEach(s), n && je.forEach(s))
                }

                function We(e, t) {
                    Q(e) && (t.innerHTML = e.value), (Q(e) || G(e) || ee(e)) && t.setAttribute("value", e.value)
                }

                function Be(e, t, n, o) {
                    var r, i, l, s;
                    const {
                        ownerWindow: a
                    } = o, c = t.style, u = a.getComputedStyle(e), d = Fe(e, null, o), f = Pe(u, d);
                    return f.delete("transition-property"), f.delete("all"), f.delete("d"), f.delete("content"), n && (f.delete("margin-top"), f.delete("margin-right"), f.delete("margin-bottom"), f.delete("margin-left"), f.delete("margin-block-start"), f.delete("margin-block-end"), f.delete("margin-inline-start"), f.delete("margin-inline-end"), f.set("box-sizing", ["border-box", ""])), "text" === (null == (r = f.get("background-clip")) ? void 0 : r[0]) && t.classList.add("______background-clip--text"), P && (f.has("font-kerning") || f.set("font-kerning", ["normal", ""]), ("hidden" === (null == (i = f.get("overflow-x")) ? void 0 : i[0]) || "hidden" === (null == (l = f.get("overflow-y")) ? void 0 : l[0])) && "ellipsis" === (null == (s = f.get("text-overflow")) ? void 0 : s[0]) && e.scrollWidth === e.clientWidth && f.set("text-overflow", ["clip", ""])), f.forEach(([e, t], n) => {
                        c.setProperty(n, e, t)
                    }), f
                }

                function Le(e, t) {
                    return h(this, null, (function*() {
                        var n, o, r;
                        const {
                            ownerDocument: i,
                            svgDefsElement: l
                        } = t, s = null != (o = null == (n = e.querySelectorAll) ? void 0 : n.call(e, "use")) ? o : [];
                        if (s.length)
                            for (let e = s.length, a = 0; a < e; a++) {
                                const e = s[a],
                                    n = null != (r = e.getAttribute("xlink:href")) ? r : e.getAttribute("href");
                                if (!n) continue;
                                const o = null == i ? void 0 : i.querySelector("svg " + n);
                                !o || null != l && l.querySelector(n) || null == l || l.appendChild(yield Qe(o, t))
                            }
                        return e.cloneNode(!1)
                    }))
                }

                function Me(e, t) {
                    var n;
                    try {
                        if (null != (n = null == e ? void 0 : e.contentDocument) && n.body) return Qe(e.contentDocument.body, t)
                    } catch (o) {
                        oe("Failed to clone iframe", o)
                    }
                    return e.cloneNode(!1)
                }

                function ze(e) {
                    if (e.ownerDocument) try {
                        const t = e.toDataURL();
                        if ("data:," !== t) return ve(t, e.ownerDocument)
                    } catch (r) {}
                    const t = e.cloneNode(!1),
                        n = e.getContext("2d"),
                        o = t.getContext("2d");
                    try {
                        return n && o && o.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0), t
                    } catch (r) {
                        oe("Failed to clone canvas", r)
                    }
                    return t
                }

                function Ue(e) {
                    return h(this, null, (function*() {
                        if (e.ownerDocument && !e.currentSrc && e.poster) return ve(e.poster, e.ownerDocument);
                        const t = e.cloneNode(!1);
                        t.crossOrigin = "anonymous", e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc);
                        const n = t.ownerDocument;
                        if (n) {
                            let r = !0;
                            if (yield be(t, {
                                    onError: () => r = !1
                                }), !r) return e.poster ? ve(e.poster, e.ownerDocument) : t;
                            t.currentTime = e.currentTime, yield new Promise(e => {
                                t.addEventListener("seeked", e, {
                                    once: !0
                                })
                            });
                            const i = n.createElement("canvas");
                            i.width = e.offsetWidth, i.height = e.offsetHeight;
                            try {
                                const e = i.getContext("2d");
                                e && e.drawImage(t, 0, 0, i.width, i.height)
                            } catch (o) {
                                return oe("Failed to clone video", o), e.poster ? ve(e.poster, e.ownerDocument) : t
                            }
                            return ze(i)
                        }
                        return t
                    }))
                }

                function qe(e) {
                    const t = e.cloneNode(!1);
                    return e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), "lazy" === t.loading && (t.loading = "eager"), t
                }

                function He(e, t) {
                    return Y(e) ? ze(e) : ne(e) ? Me(e, t) : J(e) ? qe(e) : X(e) ? Ue(e) : z(e) ? Le(e, t) : e.cloneNode(!1)
                }

                function Ve(e, t, n) {
                    return h(this, null, (function*() {
                        L(t) && (K(t) || Z(t)) || n.filter && !n.filter(t) || e.appendChild(yield Qe(t, n))
                    }))
                }

                function Je(e, t, n) {
                    return h(this, null, (function*() {
                        var o, r;
                        const i = null != (r = L(e) ? null == (o = e.shadowRoot) ? void 0 : o.firstChild : void 0) ? r : e.firstChild;
                        for (let e = i; e; e = e.nextSibling)
                            if (!H(e))
                                if (L(e) && te(e) && "function" == typeof e.assignedNodes) {
                                    const o = e.assignedNodes();
                                    for (let e = 0; e < o.length; e++) yield Ve(t, o[e], n)
                                } else yield Ve(t, e, n)
                    }))
                }

                function Xe(e, t) {
                    const {
                        backgroundColor: n,
                        width: o,
                        height: r,
                        style: i
                    } = t, l = e.style;
                    if (n && l.setProperty("background-color", n, "important"), o && l.setProperty("width", o + "px", "important"), r && l.setProperty("height", r + "px", "important"), i)
                        for (const s in i) l[s] = i[s]
                }
                const Ye = /^[\w-]+$/;

                function Qe(e, t, n = !1) {
                    return h(this, null, (function*() {
                        var o, r, i, l;
                        const {
                            ownerDocument: s,
                            ownerWindow: a,
                            fontFamilies: c
                        } = t;
                        if (s && V(e)) return s.createTextNode(e.data);
                        if (s && a && L(e) && (q(e) || M(e))) {
                            const s = yield He(e, t);
                            if (t.isEnable("removeAbnormalAttributes")) {
                                const e = s.getAttributeNames();
                                for (let t = e.length, n = 0; n < t; n++) {
                                    const t = e[n];
                                    Ye.test(t) || s.removeAttribute(t)
                                }
                            }
                            const a = Be(e, s, n, t);
                            n && Xe(s, t);
                            let u = !1;
                            if (t.isEnable("copyScrollbar")) {
                                const t = [null == (o = a.get("overflow-x")) ? void 0 : o[0], null == (r = a.get("overflow-y")) ? void 0 : r[1]];
                                u = t.includes("scroll") || (t.includes("auto") || t.includes("overlay")) && (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                            }
                            return Re(e, s, u, t), We(e, s), null == (l = Ae(null == (i = a.get("font-family")) ? void 0 : i[0])) || l.forEach(e => c.add(e)), X(e) || (yield Je(e, s, t)), s
                        }
                        const u = e.cloneNode(!1);
                        return yield Je(e, u, t), u
                    }))
                }

                function Ge(e) {
                    if (e.ownerDocument = void 0, e.ownerWindow = void 0, e.svgStyleElement = void 0, e.svgDefsElement = void 0, e.svgStyles.clear(), e.defaultComputedStyles.clear(), e.sandbox) {
                        try {
                            e.sandbox.remove()
                        } catch (t) {}
                        e.sandbox = void 0
                    }
                    e.workers = [], e.fontFamilies.clear(), e.fontCssTexts.clear(), e.requests.clear(), e.tasks = []
                }

                function Ke(e) {
                    const t = e,
                        {
                            url: n,
                            timeout: o,
                            responseType: r
                        } = t,
                        i = f(t, ["url", "timeout", "responseType"]),
                        l = new AbortController,
                        s = o ? setTimeout(() => l.abort(), o) : void 0;
                    return fetch(n, u({
                        signal: l.signal
                    }, i)).then(e => {
                        if (!e.ok) throw new Error("Failed fetch, not 2xx response", {
                            cause: e
                        });
                        switch (r) {
                            case "dataUrl":
                                return e.blob().then(ge);
                            case "text":
                            default:
                                return e.text()
                        }
                    }).finally(() => clearTimeout(s))
                }

                function Ze(e, t) {
                    const {
                        url: n,
                        requestType: o = "text",
                        responseType: r = "text",
                        imageDom: i
                    } = t;
                    let l = n;
                    const {
                        timeout: s,
                        acceptOfImage: a,
                        requests: c,
                        fetch: {
                            requestInit: d,
                            bypassingCache: f,
                            placeholderImage: h
                        },
                        workers: m
                    } = e;
                    "image" === o && (I || j) && e.drawImageCount++;
                    let p = c.get(n);
                    if (!p) {
                        f && (l += (/\?/.test(l) ? "&" : "?") + (new Date).getTime());
                        const e = u({
                            url: l,
                            timeout: s,
                            responseType: r,
                            headers: "image" === o ? {
                                accept: a
                            } : void 0
                        }, d);
                        p = {
                            type: o,
                            resovle: void 0,
                            reject: void 0,
                            response: null
                        }, p.response = (!I && n.startsWith("http") && m.length ? new Promise((t, o) => {
                            m[c.size & m.length - 1].postMessage(u({
                                rawUrl: n
                            }, e)), p.resovle = t, p.reject = o
                        }) : Ke(e)).catch(e => {
                            if (c.delete(n), "image" === o && h) return oe("Failed to fetch image base64, trying to use placeholder image", l), "string" == typeof h ? h : h(i);
                            throw e
                        }), c.set(n, p)
                    }
                    return p.response
                }

                function et(e, t, n, o) {
                    return h(this, null, (function*() {
                        if (!tt(e)) return e;
                        for (const [i, l] of ot(e, t)) try {
                            const t = yield Ze(n, {
                                url: l,
                                requestType: o ? "image" : "text",
                                responseType: "dataUrl"
                            });
                            e = e.replace(rt(i), `$1${t}$3`)
                        } catch (r) {
                            oe("Failed to fetch css data url", i, r)
                        }
                        return e
                    }))
                }

                function tt(e) {
                    return /url\((['"]?)([^'"]+?)\1\)/.test(e)
                }
                const nt = /url\((['"]?)([^'"]+?)\1\)/g;

                function ot(e, t) {
                    const n = [];
                    return e.replace(nt, (e, o, r) => (n.push([r, ae(r, t)]), e)), n.filter(([e]) => !se(e))
                }

                function rt(e) {
                    const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                    return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
                }

                function it(e, t) {
                    return h(this, null, (function*() {
                        const {
                            ownerDocument: e,
                            svgStyleElement: n,
                            fontFamilies: o,
                            fontCssTexts: r,
                            tasks: i,
                            font: l
                        } = t;
                        if (e && n && o.size)
                            if (l && l.cssText) {
                                const o = dt(l.cssText, t);
                                n.appendChild(e.createTextNode(o + "\n"))
                            } else {
                                const l = Array.from(e.styleSheets).filter(e => {
                                    try {
                                        return "cssRules" in e && Boolean(e.cssRules.length)
                                    } catch (t) {
                                        return oe("Error while reading CSS rules from " + e.href, t), !1
                                    }
                                });
                                yield Promise.all(l.flatMap(e => Array.from(e.cssRules).map((n, o) => h(this, null, (function*() {
                                    if (B(n)) {
                                        let l = o + 1;
                                        const s = n.href;
                                        let a = "";
                                        try {
                                            a = yield Ze(t, {
                                                url: s,
                                                requestType: "text",
                                                responseType: "text"
                                            })
                                        } catch (r) {
                                            oe("Error fetch remote css import from " + s, r)
                                        }
                                        const c = a.replace(nt, (e, t, n) => e.replace(n, ae(n, s)));
                                        for (const t of at(c)) try {
                                            e.insertRule(t, t.startsWith("@import") ? l += 1 : e.cssRules.length)
                                        } catch (i) {
                                            oe("Error inserting rule from remote css import", {
                                                rule: t,
                                                error: i
                                            })
                                        }
                                    }
                                }))))), l.flatMap(e => Array.from(e.cssRules)).filter(e => {
                                    var t;
                                    return W(e) && tt(e.style.getPropertyValue("src")) && (null == (t = Ae(e.style.getPropertyValue("font-family"))) ? void 0 : t.some(e => o.has(e)))
                                }).forEach(o => {
                                    const l = o,
                                        s = r.get(l.cssText);
                                    s ? n.appendChild(e.createTextNode(s + "\n")) : i.push(et(l.cssText, l.parentStyleSheet ? l.parentStyleSheet.href : null, t).then(o => {
                                        o = dt(o, t), r.set(l.cssText, o), n.appendChild(e.createTextNode(o + "\n"))
                                    }))
                                })
                            }
                    }))
                }
                const lt = /(\/\*[\s\S]*?\*\/)/gi,
                    st = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;

                function at(e) {
                    if (null == e) return [];
                    const t = [];
                    let n = e.replace(lt, "");
                    for (;;) {
                        const e = st.exec(n);
                        if (!e) break;
                        t.push(e[0])
                    }
                    n = n.replace(st, "");
                    const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                        r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
                    for (;;) {
                        let e = o.exec(n);
                        if (e) r.lastIndex = o.lastIndex;
                        else {
                            if (e = r.exec(n), !e) break;
                            o.lastIndex = r.lastIndex
                        }
                        t.push(e[0])
                    }
                    return t
                }
                const ct = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                    ut = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

                function dt(e, t) {
                    const {
                        font: n
                    } = t, o = n ? null == n ? void 0 : n.preferredFormat : void 0;
                    return o ? e.replace(ut, e => {
                        for (;;) {
                            const [t, , n] = ct.exec(e) || [];
                            if (!n) return "";
                            if (n === o) return `src: ${t};`
                        }
                    }) : e
                }

                function ft(e, t) {
                    if (J(e)) {
                        const n = e.currentSrc || e.src;
                        if (!se(n)) return [Ze(t, {
                            url: n,
                            imageDom: e,
                            requestType: "image",
                            responseType: "dataUrl"
                        }).then(t => {
                            t && (e.srcset = "", e.dataset.originalSrc = n, e.src = t || "")
                        })];
                        (I || j) && t.drawImageCount++
                    } else if (M(e) && !se(e.href.baseVal)) {
                        const n = e.href.baseVal;
                        return [Ze(t, {
                            url: n,
                            imageDom: e,
                            requestType: "image",
                            responseType: "dataUrl"
                        }).then(t => {
                            t && (e.dataset.originalSrc = n, e.href.baseVal = t || "")
                        })]
                    }
                    return []
                }
                const ht = ["background-image", "border-image-source", "-webkit-border-image", "-webkit-mask-image", "list-style-image"];

                function mt(e, t) {
                    return ht.map(n => {
                        const o = e.getPropertyValue(n);
                        return o ? ((I || j) && t.drawImageCount++, et(o, null, t, !0).then(t => {
                            !t || o === t || e.setProperty(n, t, e.getPropertyPriority(n))
                        })) : null
                    }).filter(Boolean)
                }

                function pt(e, t) {
                    const {
                        tasks: n
                    } = t;
                    L(e) && (J(e) || U(e)) && n.push(...ft(e, t)), q(e) && n.push(...mt(e.style, t)), e.childNodes.forEach(e => {
                        pt(e, t)
                    })
                }

                function gt(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t);
                        if (L(n.node) && M(n.node)) return n.node;
                        const {
                            ownerDocument: o,
                            log: r,
                            tasks: i,
                            svgStyleElement: l,
                            svgDefsElement: s,
                            svgStyles: a,
                            font: c,
                            progress: u,
                            autoDestruct: d,
                            onCloneNode: f,
                            onEmbedNode: m,
                            onCreateForeignObjectSvg: p
                        } = n;
                        r.time("clone node");
                        const g = yield Qe(n.node, n, !0);
                        if (l && o) {
                            let e = "";
                            a.forEach((t, n) => {
                                e += `${t.join(",\n")} {\n  ${n}\n}\n`
                            }), l.appendChild(o.createTextNode(e))
                        }
                        r.timeEnd("clone node"), null == f || f(g), !1 !== c && L(g) && (r.time("embed web font"), yield it(g, n), r.timeEnd("embed web font")), r.time("embed node"), pt(g, n);
                        const w = i.length;
                        let v = 0;
                        const b = () => h(this, null, (function*() {
                            for (;;) {
                                const t = i.pop();
                                if (!t) break;
                                try {
                                    yield t
                                } catch (e) {
                                    oe("Failed to run task", e)
                                }
                                null == u || u(++v, w)
                            }
                        }));
                        null == u || u(v, w), yield Promise.all([...Array(4)].map(b)), r.timeEnd("embed node"), null == m || m(g);
                        const y = wt(g, n);
                        return s && y.insertBefore(s, y.children[0]), l && y.insertBefore(l, y.children[0]), d && Ge(n), null == p || p(y), y
                    }))
                }

                function wt(e, t) {
                    const {
                        width: n,
                        height: o
                    } = t, r = de(n, o, e.ownerDocument), i = r.ownerDocument.createElementNS(r.namespaceURI, "foreignObject");
                    return i.setAttributeNS(null, "x", "0%"), i.setAttributeNS(null, "y", "0%"), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.append(e), r.appendChild(i), r
                }

                function vt(e, t) {
                    return h(this, null, (function*() {
                        var n;
                        const o = yield _e(e, t), r = yield gt(o), i = fe(r, o.isEnable("removeControlCharacter"));
                        o.autoDestruct || (o.svgStyleElement = ke(o.ownerDocument), o.svgDefsElement = null == (n = o.ownerDocument) ? void 0 : n.createElementNS(ue, "defs"), o.svgStyles.clear());
                        const l = ve(i, r.ownerDocument);
                        return yield Ne(l, o)
                    }))
                }

                function bt(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t), {
                            log: o,
                            type: r,
                            quality: i,
                            dpi: l
                        } = n, s = yield vt(n);
                        o.time("canvas to blob");
                        const a = yield he(s, r, i);
                        if (["image/png", "image/jpeg"].includes(r) && l) {
                            const e = yield we(a.slice(0, 33));
                            let t = new Uint8Array(e);
                            return "image/png" === r ? t = C(t, l) : "image/jpeg" === r && (t = m(t, l)), new Blob([t, a.slice(33)], {
                                type: r
                            })
                        }
                        return o.timeEnd("canvas to blob"), a
                    }))
                }

                function yt(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t), {
                            log: o,
                            quality: r,
                            type: i,
                            dpi: l
                        } = n, s = yield vt(n);
                        o.time("canvas to data url");
                        let a = s.toDataURL(i, r);
                        if (["image/png", "image/jpeg"].includes(i) && l && $ && O) {
                            const [e, t] = a.split(",");
                            let n = 0,
                                o = !1;
                            if ("image/png" === i) {
                                const e = k(t);
                                e >= 0 ? (n = 4 * Math.ceil((e + 28) / 3), o = !0) : n = 44
                            } else "image/jpeg" === i && (n = 24);
                            const r = t.substring(0, n),
                                s = t.substring(n),
                                c = window.atob(r),
                                u = new Uint8Array(c.length);
                            for (let i = 0; i < u.length; i++) u[i] = c.charCodeAt(i);
                            const d = "image/png" === i ? C(u, l, o) : m(u, l),
                                f = window.btoa(String.fromCharCode(...d));
                            a = [e, ",", f, s].join("")
                        }
                        return o.timeEnd("canvas to data url"), a
                    }))
                }

                function xt(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t), {
                            width: o,
                            height: r,
                            ownerDocument: i
                        } = n, l = yield yt(n), s = de(o, r, i), a = s.ownerDocument.createElementNS(s.namespaceURI, "image");
                        return a.setAttributeNS(null, "href", l), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "width", "100%"), s.appendChild(a), fe(s, n.isEnable("removeControlCharacter"))
                    }))
                }

                function At(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t), {
                            ownerDocument: o,
                            width: r,
                            height: i,
                            scale: l,
                            type: s
                        } = n, a = "image/svg+xml" === s ? yield xt(n): yield yt(n), c = ve(a, o);
                        return c.width = Math.floor(r * l), c.height = Math.floor(i * l), c.style.width = r + "px", c.style.height = i + "px", c
                    }))
                }

                function Ct(e, t) {
                    return h(this, null, (function*() {
                        return yt(yield _e(e, d(u({}, t), {
                            type: "image/jpeg"
                        })))
                    }))
                }

                function St(e, t) {
                    return h(this, null, (function*() {
                        const n = yield _e(e, t), o = yield vt(n);
                        return o.getContext("2d").getImageData(0, 0, o.width, o.height).data
                    }))
                }

                function _t(e, t) {
                    return h(this, null, (function*() {
                        return yt(yield _e(e, d(u({}, t), {
                            type: "image/png"
                        })))
                    }))
                }

                function Et(e, t) {
                    return h(this, null, (function*() {
                        return yt(yield _e(e, d(u({}, t), {
                            type: "image/webp"
                        })))
                    }))
                }
                e.createContext = Ee, e.destroyContext = Ge, e.domToBlob = bt, e.domToCanvas = vt, e.domToDataUrl = yt, e.domToForeignObjectSvg = gt, e.domToImage = At, e.domToJpeg = Ct, e.domToPixel = St, e.domToPng = _t, e.domToSvg = xt, e.domToWebp = Et, e.loadMedia = be, e.waitUntilLoad = ye, Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }))
        },
        "9bd2": function(e, t, n) {
            "use strict";
            n("21a3")
        },
        "9d9e": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("computer", {
                        attrs: {
                            dialog: "",
                            dialogIcon: e.dialogIcon,
                            dialogName: e.dialogName,
                            filter: ["directory"],
                            lock: e.showConfirmReplace,
                            parent: e.parent
                        },
                        on: {
                            close: e.cancel,
                            change: e.setPath
                        },
                        scopedSlots: e._u([{
                            key: "footer",
                            fn: function() {
                                return [n("div", {
                                    staticClass: "center-flex-x gap-2 mb-1"
                                }, [n("label", {
                                    staticClass: "w-28 text-right"
                                }, [e._v(e._s(e.$t("file-name")) + ":")]), n("winui-textbox", {
                                    staticClass: "flex-1",
                                    on: {
                                        keyup: function(t) {
                                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.saveFile(t)
                                        }
                                    },
                                    model: {
                                        value: e.name,
                                        callback: function(t) {
                                            e.name = t
                                        },
                                        expression: "name"
                                    }
                                })], 1), n("div", {
                                    staticClass: "center-flex-x gap-2 mb-2"
                                }, [n("label", {
                                    staticClass: "w-28 text-right"
                                }, [e._v(e._s(e.$t("save-as")) + ":")]), n("winui-dropdown", {
                                    staticClass: "flex-1",
                                    model: {
                                        value: e.type,
                                        callback: function(t) {
                                            e.type = t
                                        },
                                        expression: "type"
                                    }
                                }, e._l(e.fileTypes, (function(t, o) {
                                    return n("option", {
                                        key: o,
                                        domProps: {
                                            value: o
                                        }
                                    }, [e._v(" " + e._s(e.fileTypes[o]) + " ")])
                                })), 0)], 1), n("div", {
                                    staticClass: "flex justify-end"
                                }, [n("winui-button", {
                                    staticClass: "default",
                                    attrs: {
                                        disabled: !e.canSave
                                    },
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.saveFile(t)
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("save")) + " ")]), n("winui-button", {
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.cancel(t)
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("cancel")) + " ")])], 1)]
                            },
                            proxy: !0
                        }])
                    }), e.showConfirmReplace ? n("confirm-replace", {
                        attrs: {
                            title: e.$t(e.dialogName)
                        },
                        on: {
                            yes: function() {
                                return e.save(!0)
                            },
                            no: e.toggleConfirmReplace
                        }
                    }) : e._e()], 1)
                },
                r = [],
                i = n("4cca"),
                l = n("b47a"),
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("base-message", {
                        attrs: {
                            noPreTag: "",
                            type: "warning",
                            title: e.title
                        },
                        on: {
                            close: function(t) {
                                return e.$emit("no")
                            }
                        },
                        scopedSlots: e._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
                                    on: {
                                        click: function(t) {
                                            return e.$emit("yes")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("yes")) + " ")]), n("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(t) {
                                            return e.$emit("no")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("no")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [n("div", {
                        staticClass: "ml-3"
                    }, [e._v(" " + e._s(e.$t("filename-exist")) + " " + e._s(e.$t("confirm-replace")) + " ")])])
                },
                a = [],
                c = n("fceb"),
                u = {
                    props: {
                        title: String
                    },
                    components: {
                        BaseMessage: c["a"]
                    }
                },
                d = u,
                f = n("2877"),
                h = Object(f["a"])(d, s, a, !1, null, null, null),
                m = h.exports,
                p = n("04a5"),
                g = n("01b4"),
                w = n("0fbc"),
                v = n("f106"),
                b = n("2f62"),
                y = n("0e9a"),
                x = n("51e6"),
                A = {
                    props: {
                        parent: String,
                        dialogIcon: String,
                        dialogName: String,
                        fileName: String,
                        fileTypes: Object,
                        content: [String, Object, HTMLCanvasElement, ArrayBuffer],
                        parse: Function
                    },
                    data() {
                        return {
                            type: Object.keys(this.fileTypes)[0],
                            name: Object(y["r"])(this.fileName).name,
                            path: null,
                            showConfirmReplace: !1
                        }
                    },
                    computed: { ...Object(b["f"])({
                            user: "user",
                            desktopPath: "desktopPath"
                        }),
                        canSave() {
                            return !(!this.path || !this.name)
                        },
                        fullName() {
                            return this.name + "." + this.type
                        }
                    },
                    methods: {
                        setPath(e) {
                            this.path = e
                        },
                        saveFile() {
                            return this.save()
                        },
                        async save(e = !1) {
                            if (!this.canSave) return;
                            const t = this.content,
                                {
                                    path: n,
                                    fullName: o
                                } = this,
                                r = `${n}/${o}`;
                            let l = null;
                            l = this.parse ? this.parse(this.type) : t instanceof HTMLCanvasElement ? await Object(w["f"])(t, "image/" + this.type) : t;
                            try {
                                if (n === this.desktopPath) await this.$store.dispatch(g["a"].ShortcutAdd, {
                                    lbl: o,
                                    key: Object(i["b"])(o),
                                    icon: Object(i["e"])(o),
                                    data: l,
                                    type: "file",
                                    overwrite: e
                                });
                                else {
                                    const t = await v["a"].isExisting(r, n);
                                    if (t && !e) throw new Error(p["a"].NAME_EXISTS);
                                    await v["a"].write(l, r)
                                }
                                let t = 0;
                                l instanceof ArrayBuffer ? t = l.byteLength : "string" === typeof l && (t = (new TextEncoder).encode(l).length), this.$emit("done", {
                                    name: o,
                                    path: r,
                                    size: t
                                })
                            } catch (s) {
                                const e = s.message || s;
                                e === p["a"].NAME_EXISTS ? this.toggleConfirmReplace() : Object(x["showToast"])(e)
                            }
                        },
                        cancel() {
                            this.$emit("cancel")
                        },
                        toggleConfirmReplace() {
                            this.showConfirmReplace = !this.showConfirmReplace
                        }
                    },
                    components: {
                        Computer: l["default"],
                        ConfirmReplace: m
                    }
                },
                C = A,
                S = Object(f["a"])(C, o, r, !1, null, null, null);
            t["a"] = S.exports
        },
        ac73: function(e, t, n) {
            "use strict";
            n("5cfe")
        },
        ade6: function(e, t, n) {},
        ae70: function(e, t, n) {},
        bccb: function(e, t, n) {
            ! function(t, n) {
                e.exports = n()
            }(0, (function() {
                "use strict";
                var e = ["", "webkit", "moz", "ms", "MS"],
                    t = ["fullscreen", "Fullscreen", "FullScreen"];

                function n(e, t) {
                    if ("object" != typeof document) return "";
                    var n, o = t ? document[t] : document;
                    return (n = e, n.reduce((function(e, t) {
                        return [].concat.apply([], e.map((function(e) {
                            return t.map((function(t) {
                                return "" + e + t
                            }))
                        })))
                    }), [""])).find((function(e) {
                        return Boolean(o && e && e in o)
                    })) || ""
                }
                var o = {
                        element: n([e, t, ["Element"]]),
                        exit: n([e, ["Exit", "exit", "Cancel", "cancel"], t]),
                        request: n([e, ["request", "Request"], t], "body"),
                        supported: n([e, t, ["Enabled"]])
                    },
                    r = {
                        change: n([
                            ["on"], e, t, ["change", "Change"]
                        ]).slice(2),
                        error: n([
                            ["on"], e, t, ["error", "Error"]
                        ]).slice(2)
                    },
                    i = {
                        get active() {
                            return Boolean(document[o.element])
                        },
                        get element() {
                            return document[o.element] || null
                        },
                        events: r,
                        exit: function() {
                            return o.exit && document[o.exit]()
                        },
                        off: function(e, t, n) {
                            return r[e] && document.removeEventListener(r[e], t, n)
                        },
                        on: function(e, t, n) {
                            return r[e] && document.addEventListener(r[e], t, n)
                        },
                        props: o,
                        request: function(e) {
                            return o.request && (e || document.documentElement)[o.request]()
                        },
                        get supported() {
                            return Boolean(document[o.supported])
                        },
                        toggle: function(e, t) {
                            return void 0 === t && (t = !i.element), t ? i.request(e) : i.exit()
                        }
                    };
                return i
            }))
        },
        c8f9: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(e.component, {
                        tag: "component",
                        attrs: {
                            code: e.code,
                            theme: e.bsodTheme
                        },
                        on: {
                            click: e.doClick
                        }
                    })
                },
                r = [],
                i = n("e47c"),
                l = n("2f62"),
                s = n("51e6");
            const a = [{
                component: () => Promise.resolve().then(n.bind(null, "6812")),
                themes: []
            }, {
                component: () => Promise.resolve().then(n.bind(null, "6e59")),
                themes: ["win31", "win95", "win2k"]
            }, {
                component: () => Promise.resolve().then(n.bind(null, "0cbd")),
                themes: ["win8", "win81"]
            }, {
                component: () => Promise.resolve().then(n.bind(null, "3e38")),
                themes: ["win10", "win11", "win11dark"]
            }];
            var c = {
                    props: {
                        code: String,
                        click: [Function, Boolean]
                    },
                    computed: { ...Object(l["f"])({
                            theme: "themes"
                        }),
                        ...i["d"].mapState({
                            bootTheme: "bootTheme"
                        }),
                        bsodTheme() {
                            return this.theme || this.bootTheme
                        },
                        doClick() {
                            return "function" === typeof this.click ? this.click : s["restart"]
                        },
                        component() {
                            const e = a.find(e => e.themes.includes(this.bsodTheme)) || a[0];
                            return e.component
                        }
                    }
                },
                u = c,
                d = n("2877"),
                f = Object(d["a"])(u, o, r, !1, null, null, null);
            t["default"] = f.exports
        },
        e7fd: function(e, t, n) {
            "use strict";
            n("ade6")
        }
    }
]);