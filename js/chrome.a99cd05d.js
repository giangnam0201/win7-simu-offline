(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chrome"], {
        "096e": function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return n.show ? A("base-message", {
                        staticClass: "w-[400px]",
                        attrs: {
                            type: "warning",
                            noPreTag: ""
                        },
                        on: {
                            close: n.close
                        },
                        scopedSlots: n._u([{
                            key: "footer",
                            fn: function() {
                                return [A("winui-checkbox", {
                                    attrs: {
                                        id: "chk-hide"
                                    },
                                    model: {
                                        value: n.neverShow,
                                        callback: function(e) {
                                            n.neverShow = e
                                        },
                                        expression: "neverShow"
                                    }
                                }, [n._v("Don't show again")]), A("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: n.close
                                    }
                                }, [n._v(n._s(n.$t("ok")))])]
                            },
                            proxy: !0
                        }], null, !1, 2203637859)
                    }, [A("div", {
                        staticClass: "px-3"
                    }, [A("p", {
                        staticClass: "mb-2"
                    }, [n._v(n._s(n.browser || "This web browser") + " requires an extension to be fully functional.")]), A("p", [n._v(" Refer to "), A("a", {
                        attrs: {
                            href: "https://visnalize.com/blog/load-any-websites-in-iframes.html",
                            target: "_blank"
                        }
                    }, [n._v("this guide")]), n._v(" for how to install it. ")])])]) : n._e()
                },
                i = [],
                s = A("fceb"),
                a = A("968c"),
                o = A("f708");
            const r = "hideBrowserMessage";
            var c = {
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
                        this.show = Object(o["d"])() && !await a["default"].local.get(r, null)
                    },
                    methods: {
                        close() {
                            this.show = !1, this.neverShow && a["default"].local.update(r, null, !0)
                        }
                    },
                    components: {
                        BaseMessage: s["a"]
                    }
                },
                h = c,
                l = A("2877"),
                d = Object(l["a"])(h, t, i, !1, null, null, null);
            e["a"] = d.exports
        },
        "0d94": function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("winui-menu", {
                        directives: [{
                            name: "clickout",
                            rawName: "v-clickout",
                            value: function(e) {
                                return n.$emit("outclick", e)
                            },
                            expression: "(e) => $emit('outclick', e)"
                        }]
                    }, [n._l(n.items, (function(e, t) {
                        return [e.hidden ? n._e() : A("winui-menuitem", {
                            key: t,
                            attrs: {
                                "aria-disabled": e.disabled,
                                "data-test-menu-item": e.test
                            }
                        }, [e.icon ? A("base-icon", {
                            attrs: {
                                id: e.icon,
                                icon: n.icon[e.icon]
                            }
                        }) : n._e(), e.children && e.children.length ? [A("button", [n._v(n._s(e.label))]), A("winui-menu", {
                            style: n.subStyle,
                            attrs: {
                                "data-test-menu": e.test
                            }
                        }, [n._l(e.children, (function(e, t) {
                            return [e.hidden ? n._e() : A("winui-menuitem", {
                                key: t,
                                attrs: {
                                    "aria-disabled": e.disabled,
                                    "data-test-menu-item": e.test
                                }
                            }, [e.option ? [A("input", n._b({}, "input", e.option, !1)), A("label", {
                                attrs: {
                                    for: e.option.id
                                },
                                on: {
                                    click: function(A) {
                                        return A.stopPropagation(), n.safeClick(A, e.click)
                                    }
                                }
                            }, [n._v(n._s(e.label))])] : [e.icon ? A("base-icon", {
                                attrs: {
                                    id: e.icon,
                                    icon: n.icon[e.icon]
                                }
                            }) : n._e(), A("button", {
                                attrs: {
                                    disabled: e.disabled
                                },
                                on: {
                                    click: function(A) {
                                        return A.stopPropagation(), n.safeClick(A, e.click)
                                    }
                                }
                            }, [e.bold ? A("b", [n._v(n._s(e.label))]) : [n._v(n._s(e.label))], e.shortcut ? A("span", [n._v(n._s(e.shortcut))]) : n._e()], 2)]], 2), e.hasDivider && !e.hidden ? A("hr", {
                                key: "hr" + t
                            }) : n._e()]
                        }))], 2)] : e.option ? [A("input", n._b({}, "input", e.option, !1)), A("label", {
                            attrs: {
                                for: e.option.id
                            },
                            on: {
                                click: function(A) {
                                    return A.stopPropagation(), n.safeClick(A, e.click)
                                }
                            }
                        }, [n._v(n._s(e.label))])] : A("button", {
                            attrs: {
                                disabled: e.disabled
                            },
                            on: {
                                click: function(A) {
                                    return A.stopPropagation(), n.safeClick(A, e.click)
                                }
                            }
                        }, [e.bold ? A("b", [n._v(n._s(e.label))]) : [n._v(n._s(e.label))], e.shortcut ? A("span", [n._v(n._s(e.shortcut))]) : n._e()], 2)], 2), e.hasDivider && !e.hidden ? A("hr", {
                            key: "hr" + t
                        }) : n._e()]
                    }))], 2)
                },
                i = [],
                s = A("58cd"),
                a = A("2f62"),
                o = {
                    props: {
                        items: Array,
                        subStyle: Object,
                        asDecorator: Boolean
                    },
                    computed: { ...Object(a["d"])(["themeData", "themeAssets"]),
                        icon() {
                            return this.asDecorator ? this.themeAssets.base.icon : this.themeData.icon
                        }
                    },
                    methods: {
                        safeClick(n, e) {
                            e && e(n)
                        }
                    },
                    components: {
                        BaseIcon: s["a"]
                    }
                },
                r = o,
                c = A("2877"),
                h = Object(c["a"])(r, t, i, !1, null, null, null);
            e["a"] = h.exports
        },
        "15f0": function(n, e, A) {},
        "18b8": function(n, e, A) {},
        2317: function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        staticClass: "inline-block relative spinner",
                        style: n.style
                    }, n._l(4, (function(n) {
                        return A("div", {
                            key: n,
                            staticClass: "w-full h-full block absolute rounded-full border-solid border-transparent spinner-ring"
                        })
                    })), 0)
                },
                i = [],
                s = {
                    props: {
                        size: {
                            type: Number,
                            default: 14
                        }
                    },
                    computed: {
                        style() {
                            return {
                                "--spinner-size": this.size + "px"
                            }
                        }
                    }
                },
                a = s,
                o = (A("c165"), A("2877")),
                r = Object(o["a"])(a, t, i, !1, null, "21967a68", null);
            e["a"] = r.exports
        },
        "25c3": function(n, e, A) {
            var t, i, s;
            (function(A, a) {
                i = [], t = a, s = "function" === typeof t ? t.apply(e, i) : t, void 0 === s || (n.exports = s)
            })(0, (function() {
                "use strict";
                if ("undefined" === typeof window || void 0 === window.navigator || void 0 === window.navigator.userAgent) return !1;
                let n = "2.3.0",
                    e = window,
                    A = e.navigator,
                    t = A.userAgent,
                    i = !1,
                    s = function() {
                        let n = void 0 !== e.chrome,
                            i = void 0 !== e.safari || void 0 !== A.vendor && /Apple/.test(A.vendor) && /Safari/.test(t),
                            s = void 0 !== e.Mozilla || /irefox/.test(t);
                        return n || i || s
                    },
                    a = function(n) {
                        var e = null;
                        try {
                            e = new ActiveXObject(n)
                        } catch (A) {
                            e = null
                        }
                        return !!e
                    },
                    o = function() {
                        return "ActiveXObject" in e && (a("AcroPDF.PDF") || a("PDF.PdfCtrl"))
                    },
                    r = function() {
                        let n = void 0 !== A.platform && "MacIntel" === A.platform && void 0 !== A.maxTouchPoints && A.maxTouchPoints > 1,
                            e = n || /Mobi|Tablet|Android|iPad|iPhone/.test(t);
                        if (e) return !1;
                        let i = "boolean" === typeof A.pdfViewerEnabled;
                        return !(i && !A.pdfViewerEnabled) && (i && A.pdfViewerEnabled || s() || o())
                    },
                    c = r(),
                    h = function(n) {
                        let e, A = "",
                            t = [],
                            i = "";
                        if ((n.comment || n.viewrect || n.highlight) && (n.page || (n.page = 1, l("The comment, viewrect, and highlight parameters require a page parameter, but none was specified. Defaulting to page 1."))), n.page && (t.push("page=" + encodeURIComponent(n.page)), delete n.page), n.fdf && (i = n.fdf, delete n.fdf), n) {
                            for (e in n) n.hasOwnProperty(e) && t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
                            i && t.push("fdf=" + encodeURIComponent(i)), A = t.join("&"), A && (A = "#" + A)
                        }
                        return A
                    },
                    l = function(n) {
                        return i || console.log("[PDFObject]", n), !1
                    },
                    d = function(n) {
                        while (n.firstChild) n.removeChild(n.firstChild)
                    },
                    u = function(n) {
                        let A = document.body;
                        return "string" === typeof n ? A = document.querySelector(n) : void 0 !== e.jQuery && n instanceof jQuery && n.length ? A = n.get(0) : void 0 !== n.nodeType && 1 === n.nodeType && (A = n), A
                    },
                    m = function(n, e, A, t) {
                        if (window.Blob && window.URL && window.URL.createObjectURL) {
                            var i = new XMLHttpRequest;
                            i.open("GET", n, !0), i.responseType = "blob", i.onload = function() {
                                if (200 === i.status) {
                                    var n = i.response,
                                        s = document.createElement("a");
                                    s.innerText = "Download PDF", s.href = URL.createObjectURL(n), s.setAttribute("download", e), A.innerHTML = t.replace(/\[pdflink\]/g, s.outerHTML)
                                }
                            }, i.send()
                        }
                    },
                    p = function(n, e, A, t, i, s, a, o, r, c, h) {
                        d(e);
                        let l = A;
                        if ("pdfjs" === n) {
                            let n = -1 !== h.indexOf("?") ? "&" : "?";
                            l = h + n + "file=" + encodeURIComponent(A) + t
                        } else l += t;
                        let u = document.createElement("iframe");
                        if (u.className = "pdfobject", u.type = "application/pdf", u.title = o, u.src = l, u.allow = "fullscreen", u.frameborder = "0", a && (u.id = a), !r) {
                            let n = "border: none;";
                            e !== document.body ? n += "width: " + i + "; height: " + s + ";" : n += "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;", u.style.cssText = n
                        }
                        let m = ["className", "type", "title", "src", "style", "id", "allow", "frameborder"];
                        return c && c.key && -1 === m.indexOf(c.key) && u.setAttribute(c.key, "undefined" !== typeof c.value ? c.value : ""), e.classList.add("pdfobject-container"), e.appendChild(u), e.getElementsByTagName("iframe")[0]
                    },
                    g = function(n, e, A) {
                        let t = e || !1,
                            s = A || {};
                        i = "boolean" === typeof s.suppressConsole && s.suppressConsole;
                        let a = "string" === typeof s.id ? s.id : "",
                            o = s.page || !1,
                            r = s.pdfOpenParams || {},
                            d = "string" !== typeof s.fallbackLink && "boolean" !== typeof s.fallbackLink || s.fallbackLink,
                            g = s.width || "100%",
                            f = s.height || "100%",
                            C = s.title || "Embedded PDF",
                            b = "boolean" === typeof s.forcePDFJS && s.forcePDFJS,
                            I = "boolean" === typeof s.omitInlineStyles && s.omitInlineStyles,
                            E = s.PDFJS_URL || !1,
                            x = u(t),
                            v = "",
                            S = s.customAttribute || {},
                            T = "<p>This browser does not support inline PDFs. Please download the PDF to view it: [pdflink]</p>";
                        if ("string" !== typeof n) return l("URL is not valid");
                        if (!x) return l("Target element cannot be determined");
                        if (o && (r.page = o), v = h(r), b && E) return p("pdfjs", x, n, v, g, f, a, C, I, S, E);
                        if (c) return p("iframe", x, n, v, g, f, a, C, I, S);
                        if (E) return p("pdfjs", x, n, v, g, f, a, C, I, S, E);
                        if (d)
                            if ("string" === typeof d) x.innerHTML = d.replace(/\[url\]/g, n);
                            else if (-1 !== n.indexOf("data:application/pdf;base64")) m(n, "file.pdf", x, T);
                        else {
                            let e = "<a href='" + n + "'>Download PDF</a>";
                            x.innerHTML = T.replace(/\[pdflink\]/g, e)
                        }
                        return l("This browser does not support embedded PDFs")
                    };
                return {
                    embed: function(n, e, A) {
                        return g(n, e, A)
                    },
                    pdfobjectversion: function() {
                        return n
                    }(),
                    supportsPDFs: function() {
                        return c
                    }()
                }
            }))
        },
        "328d": function(n, e, A) {
            "use strict";
            A("85bd")
        },
        "411e": function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        class: ["is-static p-1.5 window__main active", {
                            pinging: n.pinging
                        }, {
                            "center-absolute": !n.decentered
                        }, {
                            "w-[256px] is-wait": "wait" === n.variant
                        }, {
                            "w-[340px] is-help": "help" === n.variant
                        }, {
                            "w-[340px] is-message": "message" === n.variant
                        }]
                    }, ["wait" === n.variant ? A("window-body", {
                        staticClass: "is-wait"
                    }, [n._t("default")], 2) : n._t("default")], 2)
                },
                i = [],
                s = A("1521"),
                a = A("7744"),
                o = {
                    mixins: [a["a"]],
                    props: {
                        variant: {
                            type: String,
                            validator: n => ["wait", "help", "message"].includes(n)
                        },
                        parent: String,
                        decentered: Boolean
                    },
                    components: {
                        WindowBody: s["a"]
                    }
                },
                r = o,
                c = (A("9312"), A("2877")),
                h = Object(c["a"])(r, t, i, !1, null, null, null);
            e["a"] = h.exports
        },
        "436f": function(n, e, A) {
            "use strict";
            A("8c2e")
        },
        "5cc4": function(n, e, A) {
            "use strict";
            A.r(e);
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        staticClass: "fragment"
                    }, [A("message-browser", {
                        attrs: {
                            browser: "Chrome"
                        }
                    }), A("window-main", {
                        staticClass: "is-chrome",
                        attrs: {
                            id: "window-" + n.id
                        }
                    }, [A("window-titlebar", [A("window-controls")], 1), A("div", {
                        ref: "tabs",
                        staticClass: "flex flex-col -mt-5 h-full overflow-hidden chrome__tabs"
                    }, n._l(n.tabs, (function(e, t) {
                        return A("chrome-tab", {
                            key: t,
                            attrs: {
                                index: t,
                                tabData: e
                            },
                            on: {
                                update: n.updateTab,
                                addTab: function() {
                                    return n.addTab()
                                },
                                openSettings: function(e) {
                                    return n.addTab({
                                        url: "chrome://chrome/settings"
                                    })
                                },
                                exit: n.exit
                            }
                        })
                    })), 1)], 1)], 1)
                },
                i = [],
                s = A("90b3"),
                a = A("694c"),
                o = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("section", {
                        staticClass: "flex flex-col h-full overflow-hidden chrome__tab-body",
                        attrs: {
                            id: n.id,
                            default: n.tab.isActive
                        }
                    }, [A("div", {
                        staticClass: "title"
                    }, [n.tab.isLoading ? A("spinner-ring") : n.isValidUrl(n.tabIcon) ? A("img", {
                        staticClass: "w-4 h-4",
                        attrs: {
                            src: n.tabIcon
                        }
                    }) : A("iconify-icon", {
                        attrs: {
                            icon: n.tabIcon
                        }
                    }), A("span", [n._v(n._s(n.tab.title || n.$t("new-tab")))])], 1), A("window-addressbar", {
                        staticClass: "chrome__addressbar"
                    }, [A("chrome-addressbar-button", {
                        attrs: {
                            disabled: !n.tab.activeBack
                        },
                        on: {
                            click: function(e) {
                                return n.navigate("back")
                            }
                        }
                    }, [A("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-left"
                        }
                    })], 1), A("chrome-addressbar-button", {
                        attrs: {
                            disabled: !n.tab.activeNext
                        },
                        on: {
                            click: function(e) {
                                return n.navigate("next")
                            }
                        }
                    }, [A("iconify-icon", {
                        attrs: {
                            icon: "fa:arrow-right"
                        }
                    })], 1), A("chrome-addressbar-button", {
                        attrs: {
                            "data-test-reload-button": ""
                        },
                        on: {
                            click: n.reload
                        }
                    }, [A("iconify-icon", {
                        attrs: {
                            icon: "fa:rotate-right"
                        }
                    })], 1), A("chrome-addressbar-button", {
                        attrs: {
                            "data-test-home-button": ""
                        },
                        on: {
                            click: n.loadHome
                        }
                    }, [A("iconify-icon", {
                        attrs: {
                            icon: "fa:home"
                        }
                    })], 1), A("form", {
                        staticClass: "center-flex w-full",
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), n.load(e)
                            }
                        }
                    }, [A("input", {
                        ref: "addressInput",
                        staticClass: "bg-white border border-black/30 border-solid rounded-sm w-full h-7 chrome__addressbar-input",
                        attrs: {
                            "data-test-input-web-address": ""
                        },
                        domProps: {
                            value: n.displayUrl
                        },
                        on: {
                            focus: n.focusAddress
                        }
                    })]), A("chrome-addressbar-button", {
                        ref: "menuButton",
                        attrs: {
                            active: n.menuOpened,
                            "data-test-menu-button": ""
                        },
                        on: {
                            click: function(e) {
                                n.menuOpened = !n.menuOpened
                            }
                        }
                    }, [A("iconify-icon", {
                        attrs: {
                            icon: "fa:reorder"
                        }
                    })], 1), n.menuOpened ? A("base-menu", {
                        staticClass: "top-full right-0 absolute",
                        attrs: {
                            items: n.menuItems
                        },
                        on: {
                            outclick: n.handleMenuClickOutside
                        }
                    }) : n._e()], 1), A("window-body", {
                        staticClass: "chrome__body",
                        attrs: {
                            layout: "panel"
                        }
                    }, [n.tab.error ? A("iframe", {
                        attrs: {
                            srcdoc: n.ErrorPage
                        }
                    }) : n.tab.url ? "chrome://chrome/settings" === n.tab.url ? A("tab-chrome-settings") : n.isLocalFile(n.tab.url) ? A("div", {
                        staticClass: "w-full h-full",
                        attrs: {
                            id: "file-viewer-" + n.index
                        }
                    }) : A("iframe", {
                        attrs: {
                            src: n.tab.url,
                            "data-index": n.index,
                            "data-test-web-iframe": ""
                        },
                        on: {
                            load: n.handleIframeLoad
                        }
                    }) : A("tab-blank", {
                        on: {
                            search: n.load
                        }
                    })], 1)], 1)
                },
                r = [],
                c = A("617a"),
                h = A("0f35"),
                l = A("0e9a"),
                d = A("0d94"),
                u = A("e5dd"),
                m = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("button", {
                        class: ["center-flex p-0 border-0 rounded-sm shrink-0 chrome__addressbar-button", {
                            "is-active": n.active
                        }],
                        on: {
                            click: function(e) {
                                return n.$emit("click")
                            }
                        }
                    }, [n._t("default")], 2)
                },
                p = [],
                g = {
                    props: {
                        active: Boolean
                    }
                },
                f = g,
                C = (A("436f"), A("2877")),
                b = Object(C["a"])(f, m, p, !1, null, null, null),
                I = b.exports,
                E = A("17b6"),
                x = A("d77d"),
                v = A.n(x),
                S = A("f868"),
                T = A.n(S),
                D = A("5b62"),
                w = A.n(D),
                R = A("0535"),
                B = A.n(R),
                y = `\n\x3c!--\nCopyright (c) 2014 The Chromium Authors. All rights reserved.\nUse of this source code is governed by a BSD-style license that\ncan be found in the LICENSE file.\n--\x3e\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">\n    <style>\n        html,\n        body {\n            padding: 0;\n            margin: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        .icon {\n            -webkit-user-select: none;\n            user-select: none;\n            display: inline-block;\n        }\n\n        .icon-offline {\n            content: -webkit-image-set(url(${v.a}) 1x, url(${T.a}) 2x);\n            position: relative;\n        }\n\n        .hidden {\n            display: none;\n        }\n\n\n        /* Offline page */\n\n        .offline .interstitial-wrapper {\n            color: #2b2b2b;\n            font-family: "Segoe UI", sans-serif;\n            font-size: 1em;\n            line-height: 1.55;\n            margin: 0 auto;\n            max-width: 600px;\n            padding-top: 100px;\n            width: 100%;\n        }\n\n        h1 {\n            margin: 0;\n            font-size: 1.5em;\n            font-weight: 400;\n        }\n\n        p, ul {\n            margin: 0.4em 0;\n            color: #333;\n        }\n\n        .text-muted {\n            color: #aaa;\n        }\n      \n        .offline .runner-container {\n            width: 44px;\n            height: 150px;\n            max-width: 600px;\n            overflow: hidden;\n            position: absolute;\n            top: 35px;\n        }\n\n        .offline .runner-canvas {\n            height: 150px;\n            max-width: 600px;\n            opacity: 1;\n            overflow: hidden;\n            position: absolute;\n            top: 0;\n            z-index: 2;\n        }\n\n        .offline .controller {\n            background: rgba(247, 247, 247, .1);\n            height: 100vh;\n            left: 0;\n            position: absolute;\n            top: 0;\n            width: 100vw;\n            z-index: 1;\n        }\n\n        #offline-resources {\n            display: none;\n        }\n\n        @media (max-width: 420px) {\n\n            .suggested-left>#control-buttons,\n            .suggested-right>#control-buttons {\n                float: none;\n            }\n\n            .snackbar {\n                left: 0;\n                bottom: 0;\n                width: 100%;\n                border-radius: 0;\n            }\n        }\n\n        @media (max-height: 350px) {\n            h1 {\n                margin: 0 0 15px;\n            }\n\n            .icon-offline {\n                margin: 0 0 10px;\n            }\n\n            .interstitial-wrapper {\n                margin-top: 5%;\n            }\n\n            .nav-wrapper {\n                margin-top: 30px;\n            }\n        }\n\n        @media (min-width: 600px) and (max-width: 736px) and (orientation: landscape) {\n            .offline .interstitial-wrapper {\n                margin-left: 0;\n                margin-right: 0;\n            }\n        }\n\n        @media (min-width: 420px) and (max-width: 736px) and (min-height: 240px) and (max-height: 420px) and (orientation:landscape) {\n            .interstitial-wrapper {\n                margin-bottom: 100px;\n            }\n        }\n\n        @media (min-height: 240px) and (orientation: landscape) {\n            .offline .interstitial-wrapper {\n                margin-bottom: 90px;\n            }\n\n            .icon-offline {\n                margin-bottom: 15px;\n            }\n        }\n\n        @media (max-height: 320px) and (orientation: landscape) {\n            .icon-offline {\n                margin-bottom: 0;\n            }\n\n            .offline .runner-container {\n                top: 10px;\n            }\n        }\n\n        @media (max-width: 240px) {\n            .interstitial-wrapper {\n                overflow: inherit;\n                padding: 0 8px;\n            }\n        }\n    </style>\n    <script>\n        (function () {\n            "use strict";\n            /**\n             * T-Rex runner.\n             * @param {string} outerContainerId Outer containing element id.\n             * @param {Object} opt_config\n             * @constructor\n             * @export\n             */\n            function Runner(outerContainerId, opt_config) {\n                // Singleton\n                if (Runner.instance_) {\n                    return Runner.instance_;\n                }\n                Runner.instance_ = this;\n\n                this.outerContainerEl = document.querySelector(outerContainerId);\n                this.containerEl = null;\n                this.snackbarEl = null;\n                this.detailsButton = this.outerContainerEl.querySelector("#details-button");\n\n                this.config = opt_config || Runner.config;\n\n                this.dimensions = Runner.defaultDimensions;\n\n                this.canvas = null;\n                this.canvasCtx = null;\n\n                this.tRex = null;\n\n                this.distanceMeter = null;\n                this.distanceRan = 0;\n\n                this.highestScore = 0;\n\n                this.time = 0;\n                this.runningTime = 0;\n                this.msPerFrame = 1000 / FPS;\n                this.currentSpeed = this.config.SPEED;\n\n                this.obstacles = [];\n\n                this.activated = false; // Whether the easter egg has been activated.\n                this.playing = false; // Whether the game is currently in play state.\n                this.crashed = false;\n                this.paused = false;\n                this.inverted = false;\n                this.invertTimer = 0;\n                this.resizeTimerId_ = null;\n\n                this.playCount = 0;\n\n                // Sound FX.\n                this.audioBuffer = null;\n                this.soundFx = {};\n\n                // Global web audio context for playing sounds.\n                this.audioContext = null;\n\n                // Images.\n                this.images = {};\n                this.imagesLoaded = 0;\n\n                if (this.isDisabled()) {\n                    this.setupDisabledRunner();\n                } else {\n                    this.loadImages();\n                }\n            }\n            window["Runner"] = Runner;\n\n\n            /**\n             * Default game width.\n             * @const\n             */\n            var DEFAULT_WIDTH = 600;\n\n            /**\n             * Frames per second.\n             * @const\n             */\n            var FPS = 60;\n\n            /** @const */\n            var IS_HIDPI = window.devicePixelRatio > 1;\n\n            /** @const */\n            var IS_IOS = /iPad|iPhone|iPod/.test(window.navigator.platform);\n\n            /** @const */\n            var IS_MOBILE = /Android/.test(window.navigator.userAgent) || IS_IOS;\n\n            /** @const */\n            var IS_TOUCH_ENABLED = "ontouchstart" in window;\n\n            /**\n             * Default game configuration.\n             * @enum {number}\n             */\n            Runner.config = {\n                ACCELERATION: 0.001,\n                BG_CLOUD_SPEED: 0.2,\n                BOTTOM_PAD: 10,\n                CLEAR_TIME: 3000,\n                CLOUD_FREQUENCY: 0.5,\n                GAMEOVER_CLEAR_TIME: 750,\n                GAP_COEFFICIENT: 0.6,\n                GRAVITY: 0.6,\n                INITIAL_JUMP_VELOCITY: 12,\n                INVERT_FADE_DURATION: 12000,\n                INVERT_DISTANCE: 700,\n                MAX_BLINK_COUNT: 3,\n                MAX_CLOUDS: 6,\n                MAX_OBSTACLE_LENGTH: 3,\n                MAX_OBSTACLE_DUPLICATION: 2,\n                MAX_SPEED: 13,\n                MIN_JUMP_HEIGHT: 35,\n                MOBILE_SPEED_COEFFICIENT: 1.2,\n                RESOURCE_TEMPLATE_ID: "audio-resources",\n                SPEED: 6,\n                SPEED_DROP_COEFFICIENT: 3\n            };\n\n\n            /**\n             * Default dimensions.\n             * @enum {string}\n             */\n            Runner.defaultDimensions = {\n                WIDTH: DEFAULT_WIDTH,\n                HEIGHT: 150\n            };\n\n\n            /**\n             * CSS class names.\n             * @enum {string}\n             */\n            Runner.classes = {\n                CANVAS: "runner-canvas",\n                CONTAINER: "runner-container",\n                CRASHED: "crashed",\n                ICON: "icon-offline",\n                INVERTED: "inverted",\n                SNACKBAR: "snackbar",\n                SNACKBAR_SHOW: "snackbar-show",\n                TOUCH_CONTROLLER: "controller"\n            };\n\n\n            /**\n             * Sprite definition layout of the spritesheet.\n             * @enum {Object}\n             */\n            Runner.spriteDefinition = {\n                LDPI: {\n                    CACTUS_LARGE: { x: 332, y: 2 },\n                    CACTUS_SMALL: { x: 228, y: 2 },\n                    CLOUD: { x: 86, y: 2 },\n                    HORIZON: { x: 2, y: 54 },\n                    MOON: { x: 484, y: 2 },\n                    PTERODACTYL: { x: 134, y: 2 },\n                    RESTART: { x: 2, y: 2 },\n                    TEXT_SPRITE: { x: 655, y: 2 },\n                    TREX: { x: 848, y: 2 },\n                    STAR: { x: 645, y: 2 }\n                },\n                HDPI: {\n                    CACTUS_LARGE: { x: 652, y: 2 },\n                    CACTUS_SMALL: { x: 446, y: 2 },\n                    CLOUD: { x: 166, y: 2 },\n                    HORIZON: { x: 2, y: 104 },\n                    MOON: { x: 954, y: 2 },\n                    PTERODACTYL: { x: 260, y: 2 },\n                    RESTART: { x: 2, y: 2 },\n                    TEXT_SPRITE: { x: 1294, y: 2 },\n                    TREX: { x: 1678, y: 2 },\n                    STAR: { x: 1276, y: 2 }\n                }\n            };\n\n\n            /**\n             * Sound FX. Reference to the ID of the audio tag on interstitial page.\n             * @enum {string}\n             */\n            Runner.sounds = {\n                BUTTON_PRESS: "offline-sound-press",\n                HIT: "offline-sound-hit",\n                SCORE: "offline-sound-reached"\n            };\n\n\n            /**\n             * Key code mapping.\n             * @enum {Object}\n             */\n            Runner.keycodes = {\n                JUMP: { "38": 1, "32": 1 },  // Up, spacebar\n                DUCK: { "40": 1 },  // Down\n                RESTART: { "13": 1 }  // Enter\n            };\n\n\n            /**\n             * Runner event names.\n             * @enum {string}\n             */\n            Runner.events = {\n                ANIM_END: "webkitAnimationEnd",\n                CLICK: "click",\n                KEYDOWN: "keydown",\n                KEYUP: "keyup",\n                MOUSEDOWN: "mousedown",\n                MOUSEUP: "mouseup",\n                RESIZE: "resize",\n                TOUCHEND: "touchend",\n                TOUCHSTART: "touchstart",\n                VISIBILITY: "visibilitychange",\n                BLUR: "blur",\n                FOCUS: "focus",\n                LOAD: "load"\n            };\n\n\n            Runner.prototype = {\n                /**\n                 * Whether the easter egg has been disabled. CrOS enterprise enrolled devices.\n                 * @return {boolean}\n                 */\n                isDisabled: function () {\n                    // return loadTimeData && loadTimeData.valueExists("disabledEasterEgg");\n                    return false;\n                },\n\n                /**\n                 * For disabled instances, set up a snackbar with the disabled message.\n                 */\n                setupDisabledRunner: function () {\n                    this.containerEl = document.createElement("div");\n                    this.containerEl.className = Runner.classes.SNACKBAR;\n                    this.containerEl.textContent = loadTimeData.getValue("disabledEasterEgg");\n                    this.outerContainerEl.appendChild(this.containerEl);\n\n                    // Show notification when the activation key is pressed.\n                    document.addEventListener(Runner.events.KEYDOWN, function (e) {\n                        if (Runner.keycodes.JUMP[e.keyCode]) {\n                            this.containerEl.classList.add(Runner.classes.SNACKBAR_SHOW);\n                            document.querySelector(".icon").classList.add("icon-disabled");\n                        }\n                    }.bind(this));\n                },\n\n                /**\n                 * Setting individual settings for debugging.\n                 * @param {string} setting\n                 * @param {*} value\n                 */\n                updateConfigSetting: function (setting, value) {\n                    if (setting in this.config && value != undefined) {\n                        this.config[setting] = value;\n\n                        switch (setting) {\n                            case "GRAVITY":\n                            case "MIN_JUMP_HEIGHT":\n                            case "SPEED_DROP_COEFFICIENT":\n                                this.tRex.config[setting] = value;\n                                break;\n                            case "INITIAL_JUMP_VELOCITY":\n                                this.tRex.setJumpVelocity(value);\n                                break;\n                            case "SPEED":\n                                this.setSpeed(value);\n                                break;\n                        }\n                    }\n                },\n\n                /**\n                 * Cache the appropriate image sprite from the page and get the sprite sheet\n                 * definition.\n                 */\n                loadImages: function () {\n                    if (IS_HIDPI) {\n                        Runner.imageSprite = document.getElementById("offline-resources-2x");\n                        this.spriteDef = Runner.spriteDefinition.HDPI;\n                    } else {\n                        Runner.imageSprite = document.getElementById("offline-resources-1x");\n                        this.spriteDef = Runner.spriteDefinition.LDPI;\n                    }\n\n                    if (Runner.imageSprite.complete) {\n                        this.init();\n                    } else {\n                        // If the images are not yet loaded, add a listener.\n                        Runner.imageSprite.addEventListener(Runner.events.LOAD,\n                            this.init.bind(this));\n                    }\n                },\n\n                /**\n                 * Load and decode base 64 encoded sounds.\n                 */\n                loadSounds: function () {\n                    if (!IS_IOS) {\n                        this.audioContext = new AudioContext();\n\n                        var resourceTemplate =\n                            document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;\n\n                        for (var sound in Runner.sounds) {\n                            var soundSrc =\n                                resourceTemplate.getElementById(Runner.sounds[sound]).src;\n                            soundSrc = soundSrc.substr(soundSrc.indexOf(",") + 1);\n                            var buffer = decodeBase64ToArrayBuffer(soundSrc);\n\n                            // Async, so no guarantee of order in array.\n                            this.audioContext.decodeAudioData(buffer, function (index, audioData) {\n                                this.soundFx[index] = audioData;\n                            }.bind(this, sound));\n                        }\n                    }\n                },\n\n                /**\n                 * Sets the game speed. Adjust the speed accordingly if on a smaller screen.\n                 * @param {number} opt_speed\n                 */\n                setSpeed: function (opt_speed) {\n                    var speed = opt_speed || this.currentSpeed;\n\n                    // Reduce the speed on smaller mobile screens.\n                    if (this.dimensions.WIDTH < DEFAULT_WIDTH) {\n                        var mobileSpeed = speed * this.dimensions.WIDTH / DEFAULT_WIDTH *\n                            this.config.MOBILE_SPEED_COEFFICIENT;\n                        this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;\n                    } else if (opt_speed) {\n                        this.currentSpeed = opt_speed;\n                    }\n                },\n\n                /**\n                 * Game initialiser.\n                 */\n                init: function () {\n                    // Hide the static icon.\n                    document.querySelector("." + Runner.classes.ICON).style.visibility =\n                        "hidden";\n\n                    this.adjustDimensions();\n                    this.setSpeed();\n\n                    this.containerEl = document.createElement("div");\n                    this.containerEl.className = Runner.classes.CONTAINER;\n\n                    // Player canvas container.\n                    this.canvas = createCanvas(this.containerEl, this.dimensions.WIDTH,\n                        this.dimensions.HEIGHT, Runner.classes.PLAYER);\n\n                    this.canvasCtx = this.canvas.getContext("2d");\n                    this.canvasCtx.fillStyle = "#f7f7f7";\n                    this.canvasCtx.fill();\n                    Runner.updateCanvasScaling(this.canvas);\n\n                    // Horizon contains clouds, obstacles and the ground.\n                    this.horizon = new Horizon(this.canvas, this.spriteDef, this.dimensions,\n                        this.config.GAP_COEFFICIENT);\n\n                    // Distance meter\n                    this.distanceMeter = new DistanceMeter(this.canvas,\n                        this.spriteDef.TEXT_SPRITE, this.dimensions.WIDTH);\n\n                    // Draw t-rex\n                    this.tRex = new Trex(this.canvas, this.spriteDef.TREX);\n\n                    this.outerContainerEl.appendChild(this.containerEl);\n\n                    if (IS_MOBILE) {\n                        this.createTouchController();\n                    }\n\n                    this.startListening();\n                    this.update();\n\n                    window.addEventListener(Runner.events.RESIZE,\n                        this.debounceResize.bind(this));\n                },\n\n                /**\n                 * Create the touch controller. A div that covers whole screen.\n                 */\n                createTouchController: function () {\n                    this.touchController = document.createElement("div");\n                    this.touchController.className = Runner.classes.TOUCH_CONTROLLER;\n                    this.outerContainerEl.appendChild(this.touchController);\n                },\n\n                /**\n                 * Debounce the resize event.\n                 */\n                debounceResize: function () {\n                    if (!this.resizeTimerId_) {\n                        this.resizeTimerId_ =\n                            setInterval(this.adjustDimensions.bind(this), 250);\n                    }\n                },\n\n                /**\n                 * Adjust game space dimensions on resize.\n                 */\n                adjustDimensions: function () {\n                    clearInterval(this.resizeTimerId_);\n                    this.resizeTimerId_ = null;\n\n                    var boxStyles = window.getComputedStyle(this.outerContainerEl);\n                    var padding = Number(boxStyles.paddingLeft.substr(0,\n                        boxStyles.paddingLeft.length - 2));\n\n                    this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;\n\n                    // Redraw the elements back onto the canvas.\n                    if (this.canvas) {\n                        this.canvas.width = this.dimensions.WIDTH;\n                        this.canvas.height = this.dimensions.HEIGHT;\n\n                        Runner.updateCanvasScaling(this.canvas);\n\n                        this.distanceMeter.calcXPos(this.dimensions.WIDTH);\n                        this.clearCanvas();\n                        this.horizon.update(0, 0, true);\n                        this.tRex.update(0);\n\n                        // Outer container and distance meter.\n                        if (this.playing || this.crashed || this.paused) {\n                            this.containerEl.style.width = this.dimensions.WIDTH + "px";\n                            this.containerEl.style.height = this.dimensions.HEIGHT + "px";\n                            this.distanceMeter.update(0, Math.ceil(this.distanceRan));\n                            this.stop();\n                        } else {\n                            this.tRex.draw(0, 0);\n                        }\n\n                        // Game over panel.\n                        if (this.crashed && this.gameOverPanel) {\n                            this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);\n                            this.gameOverPanel.draw();\n                        }\n                    }\n                },\n\n                /**\n                 * Play the game intro.\n                 * Canvas container width expands out to the full width.\n                 */\n                playIntro: function () {\n                    if (!this.activated && !this.crashed) {\n                        this.playingIntro = true;\n                        this.tRex.playingIntro = true;\n\n                        // CSS animation definition.\n                        var keyframes = "@-webkit-keyframes intro { " +\n                            "from { width:" + Trex.config.WIDTH + "px }" +\n                            "to { width: " + this.dimensions.WIDTH + "px }" +\n                            "}";\n\n                        // create a style sheet to put the keyframe rule in \n                        // and then place the style sheet in the html head    \n                        var sheet = document.createElement("style");\n                        sheet.innerHTML = keyframes;\n                        document.head.appendChild(sheet);\n\n                        this.containerEl.addEventListener(Runner.events.ANIM_END,\n                            this.startGame.bind(this));\n\n                        this.containerEl.style.webkitAnimation = "intro .4s ease-out 1 both";\n                        this.containerEl.style.width = this.dimensions.WIDTH + "px";\n\n                        // if (this.touchController) {\n                        //     this.outerContainerEl.appendChild(this.touchController);\n                        // }\n                        this.playing = true;\n                        this.activated = true;\n                    } else if (this.crashed) {\n                        this.restart();\n                    }\n                },\n\n\n                /**\n                 * Update the game status to started.\n                 */\n                startGame: function () {\n                    this.runningTime = 0;\n                    this.playingIntro = false;\n                    this.tRex.playingIntro = false;\n                    this.containerEl.style.webkitAnimation = "";\n                    this.playCount++;\n\n                    // Handle tabbing off the page. Pause the current game.\n                    document.addEventListener(Runner.events.VISIBILITY,\n                        this.onVisibilityChange.bind(this));\n\n                    window.addEventListener(Runner.events.BLUR,\n                        this.onVisibilityChange.bind(this));\n\n                    window.addEventListener(Runner.events.FOCUS,\n                        this.onVisibilityChange.bind(this));\n                },\n\n                clearCanvas: function () {\n                    this.canvasCtx.clearRect(0, 0, this.dimensions.WIDTH,\n                        this.dimensions.HEIGHT);\n                },\n\n                /**\n                 * Update the game frame and schedules the next one.\n                 */\n                update: function () {\n                    this.updatePending = false;\n\n                    var now = getTimeStamp();\n                    var deltaTime = now - (this.time || now);\n                    this.time = now;\n\n                    if (this.playing) {\n                        this.clearCanvas();\n\n                        if (this.tRex.jumping) {\n                            this.tRex.updateJump(deltaTime);\n                        }\n\n                        this.runningTime += deltaTime;\n                        var hasObstacles = this.runningTime > this.config.CLEAR_TIME;\n\n                        // First jump triggers the intro.\n                        if (this.tRex.jumpCount == 1 && !this.playingIntro) {\n                            this.playIntro();\n                        }\n\n                        // The horizon doesn"t move until the intro is over.\n                        if (this.playingIntro) {\n                            this.horizon.update(0, this.currentSpeed, hasObstacles);\n                        } else {\n                            deltaTime = !this.activated ? 0 : deltaTime;\n                            this.horizon.update(deltaTime, this.currentSpeed, hasObstacles,\n                                this.inverted);\n                        }\n\n                        // Check for collisions.\n                        var collision = hasObstacles &&\n                            checkForCollision(this.horizon.obstacles[0], this.tRex);\n\n                        if (!collision) {\n                            this.distanceRan += this.currentSpeed * deltaTime / this.msPerFrame;\n\n                            if (this.currentSpeed < this.config.MAX_SPEED) {\n                                this.currentSpeed += this.config.ACCELERATION;\n                            }\n                        } else {\n                            this.gameOver();\n                        }\n\n                        var playAchievementSound = this.distanceMeter.update(deltaTime,\n                            Math.ceil(this.distanceRan));\n\n                        if (playAchievementSound) {\n                            this.playSound(this.soundFx.SCORE);\n                        }\n\n                        // Night mode.\n                        if (this.invertTimer > this.config.INVERT_FADE_DURATION) {\n                            this.invertTimer = 0;\n                            this.invertTrigger = false;\n                            this.invert();\n                        } else if (this.invertTimer) {\n                            this.invertTimer += deltaTime;\n                        } else {\n                            var actualDistance =\n                                this.distanceMeter.getActualDistance(Math.ceil(this.distanceRan));\n\n                            if (actualDistance > 0) {\n                                this.invertTrigger = !(actualDistance %\n                                    this.config.INVERT_DISTANCE);\n\n                                if (this.invertTrigger && this.invertTimer === 0) {\n                                    this.invertTimer += deltaTime;\n                                    this.invert();\n                                }\n                            }\n                        }\n                    }\n\n                    if (this.playing || (!this.activated &&\n                        this.tRex.blinkCount < Runner.config.MAX_BLINK_COUNT)) {\n                        this.tRex.update(deltaTime);\n                        this.scheduleNextUpdate();\n                    }\n                },\n\n                /**\n                 * Event handler.\n                 */\n                handleEvent: function (e) {\n                    return (function (evtType, events) {\n                        switch (evtType) {\n                            case events.KEYDOWN:\n                            case events.TOUCHSTART:\n                            case events.MOUSEDOWN:\n                                this.onKeyDown(e);\n                                break;\n                            case events.KEYUP:\n                            case events.TOUCHEND:\n                            case events.MOUSEUP:\n                                this.onKeyUp(e);\n                                break;\n                        }\n                    }.bind(this))(e.type, Runner.events);\n                },\n\n                /**\n                 * Bind relevant key / mouse / touch listeners.\n                 */\n                startListening: function () {\n                    // Keys.\n                    document.addEventListener(Runner.events.KEYDOWN, this);\n                    document.addEventListener(Runner.events.KEYUP, this);\n\n                    if (IS_MOBILE) {\n                        // Mobile only touch devices.\n                        this.touchController.addEventListener(Runner.events.TOUCHSTART, this);\n                        this.touchController.addEventListener(Runner.events.TOUCHEND, this);\n                        this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);\n                    } else {\n                        // Mouse.\n                        document.addEventListener(Runner.events.MOUSEDOWN, this);\n                        document.addEventListener(Runner.events.MOUSEUP, this);\n                    }\n                },\n\n                /**\n                 * Remove all listeners.\n                 */\n                stopListening: function () {\n                    document.removeEventListener(Runner.events.KEYDOWN, this);\n                    document.removeEventListener(Runner.events.KEYUP, this);\n\n                    if (IS_MOBILE) {\n                        this.touchController.removeEventListener(Runner.events.TOUCHSTART, this);\n                        this.touchController.removeEventListener(Runner.events.TOUCHEND, this);\n                        this.containerEl.removeEventListener(Runner.events.TOUCHSTART, this);\n                    } else {\n                        document.removeEventListener(Runner.events.MOUSEDOWN, this);\n                        document.removeEventListener(Runner.events.MOUSEUP, this);\n                    }\n                },\n\n                /**\n                 * Process keydown.\n                 * @param {Event} e\n                 */\n                onKeyDown: function (e) {\n                    // Prevent native page scrolling whilst tapping on mobile.\n                    if (IS_MOBILE && this.playing) {\n                        e.preventDefault();\n                    }\n\n                    if (e.target != this.detailsButton) {\n                        if (!this.crashed && (Runner.keycodes.JUMP[e.keyCode] ||\n                            e.type == Runner.events.TOUCHSTART)) {\n                            if (!this.playing) {\n                                this.loadSounds();\n                                this.playing = true;\n                                this.update();\n                                if (window.errorPageController) {\n                                    errorPageController.trackEasterEgg();\n                                }\n                            }\n                            //  Play sound effect and jump on starting the game for the first time.\n                            if (!this.tRex.jumping && !this.tRex.ducking) {\n                                this.playSound(this.soundFx.BUTTON_PRESS);\n                                this.tRex.startJump(this.currentSpeed);\n                            }\n                        }\n\n                        if (this.crashed && e.type == Runner.events.TOUCHSTART &&\n                            e.currentTarget == this.containerEl) {\n                            this.restart();\n                        }\n                    }\n\n                    if (this.playing && !this.crashed && Runner.keycodes.DUCK[e.keyCode]) {\n                        e.preventDefault();\n                        if (this.tRex.jumping) {\n                            // Speed drop, activated only when jump key is not pressed.\n                            this.tRex.setSpeedDrop();\n                        } else if (!this.tRex.jumping && !this.tRex.ducking) {\n                            // Duck.\n                            this.tRex.setDuck(true);\n                        }\n                    }\n                },\n\n\n                /**\n                 * Process key up.\n                 * @param {Event} e\n                 */\n                onKeyUp: function (e) {\n                    var keyCode = String(e.keyCode);\n                    var isjumpKey = Runner.keycodes.JUMP[keyCode] ||\n                        e.type == Runner.events.TOUCHEND ||\n                        e.type == Runner.events.MOUSEDOWN;\n\n                    if (this.isRunning() && isjumpKey) {\n                        this.tRex.endJump();\n                    } else if (Runner.keycodes.DUCK[keyCode]) {\n                        this.tRex.speedDrop = false;\n                        this.tRex.setDuck(false);\n                    } else if (this.crashed) {\n                        // Check that enough time has elapsed before allowing jump key to restart.\n                        var deltaTime = getTimeStamp() - this.time;\n\n                        if (Runner.keycodes.RESTART[keyCode] || this.isLeftClickOnCanvas(e) ||\n                            (deltaTime >= this.config.GAMEOVER_CLEAR_TIME &&\n                                Runner.keycodes.JUMP[keyCode])) {\n                            this.restart();\n                        }\n                    } else if (this.paused && isjumpKey) {\n                        // Reset the jump state\n                        this.tRex.reset();\n                        this.play();\n                    }\n                },\n\n                /**\n                 * Returns whether the event was a left click on canvas.\n                 * On Windows right click is registered as a click.\n                 * @param {Event} e\n                 * @return {boolean}\n                 */\n                isLeftClickOnCanvas: function (e) {\n                    return e.button != null && e.button < 2 &&\n                        e.type == Runner.events.MOUSEUP && e.target == this.canvas;\n                },\n\n                /**\n                 * RequestAnimationFrame wrapper.\n                 */\n                scheduleNextUpdate: function () {\n                    if (!this.updatePending) {\n                        this.updatePending = true;\n                        this.raqId = requestAnimationFrame(this.update.bind(this));\n                    }\n                },\n\n                /**\n                 * Whether the game is running.\n                 * @return {boolean}\n                 */\n                isRunning: function () {\n                    return !!this.raqId;\n                },\n\n                /**\n                 * Game over state.\n                 */\n                gameOver: function () {\n                    this.playSound(this.soundFx.HIT);\n                    vibrate(200);\n\n                    this.stop();\n                    this.crashed = true;\n                    this.distanceMeter.acheivement = false;\n\n                    this.tRex.update(100, Trex.status.CRASHED);\n\n                    // Game over panel.\n                    if (!this.gameOverPanel) {\n                        this.gameOverPanel = new GameOverPanel(this.canvas,\n                            this.spriteDef.TEXT_SPRITE, this.spriteDef.RESTART,\n                            this.dimensions);\n                    } else {\n                        this.gameOverPanel.draw();\n                    }\n\n                    // Update the high score.\n                    if (this.distanceRan > this.highestScore) {\n                        this.highestScore = Math.ceil(this.distanceRan);\n                        this.distanceMeter.setHighScore(this.highestScore);\n                    }\n\n                    // Reset the time clock.\n                    this.time = getTimeStamp();\n                },\n\n                stop: function () {\n                    this.playing = false;\n                    this.paused = true;\n                    cancelAnimationFrame(this.raqId);\n                    this.raqId = 0;\n                },\n\n                play: function () {\n                    if (!this.crashed) {\n                        this.playing = true;\n                        this.paused = false;\n                        this.tRex.update(0, Trex.status.RUNNING);\n                        this.time = getTimeStamp();\n                        this.update();\n                    }\n                },\n\n                restart: function () {\n                    if (!this.raqId) {\n                        this.playCount++;\n                        this.runningTime = 0;\n                        this.playing = true;\n                        this.crashed = false;\n                        this.distanceRan = 0;\n                        this.setSpeed(this.config.SPEED);\n                        this.time = getTimeStamp();\n                        this.containerEl.classList.remove(Runner.classes.CRASHED);\n                        this.clearCanvas();\n                        this.distanceMeter.reset(this.highestScore);\n                        this.horizon.reset();\n                        this.tRex.reset();\n                        this.playSound(this.soundFx.BUTTON_PRESS);\n                        this.invert(true);\n                        this.update();\n                    }\n                },\n\n                /**\n                 * Pause the game if the tab is not in focus.\n                 */\n                onVisibilityChange: function (e) {\n                    if (document.hidden || document.webkitHidden || e.type == "blur" ||\n                        document.visibilityState != "visible") {\n                        this.stop();\n                    } else if (!this.crashed) {\n                        this.tRex.reset();\n                        this.play();\n                    }\n                },\n\n                /**\n                 * Play a sound.\n                 * @param {SoundBuffer} soundBuffer\n                 */\n                playSound: function (soundBuffer) {\n                    if (soundBuffer) {\n                        var sourceNode = this.audioContext.createBufferSource();\n                        sourceNode.buffer = soundBuffer;\n                        sourceNode.connect(this.audioContext.destination);\n                        sourceNode.start(0);\n                    }\n                },\n\n                /**\n                 * Inverts the current page / canvas colors.\n                 * @param {boolean} Whether to reset colors.\n                 */\n                invert: function (reset) {\n                    if (reset) {\n                        document.body.classList.toggle(Runner.classes.INVERTED, false);\n                        this.invertTimer = 0;\n                        this.inverted = false;\n                    } else {\n                        this.inverted = document.body.classList.toggle(Runner.classes.INVERTED,\n                            this.invertTrigger);\n                    }\n                }\n            };\n\n\n            /**\n             * Updates the canvas size taking into\n             * account the backing store pixel ratio and\n             * the device pixel ratio.\n             *\n             * See article by Paul Lewis:\n             * http://www.html5rocks.com/en/tutorials/canvas/hidpi/\n             *\n             * @param {HTMLCanvasElement} canvas\n             * @param {number} opt_width\n             * @param {number} opt_height\n             * @return {boolean} Whether the canvas was scaled.\n             */\n            Runner.updateCanvasScaling = function (canvas, opt_width, opt_height) {\n                var context = canvas.getContext("2d");\n\n                // Query the various pixel ratios\n                var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;\n                var backingStoreRatio = Math.floor(context.webkitBackingStorePixelRatio) || 1;\n                var ratio = devicePixelRatio / backingStoreRatio;\n\n                // Upscale the canvas if the two ratios don"t match\n                if (devicePixelRatio !== backingStoreRatio) {\n                    var oldWidth = opt_width || canvas.width;\n                    var oldHeight = opt_height || canvas.height;\n\n                    canvas.width = oldWidth * ratio;\n                    canvas.height = oldHeight * ratio;\n\n                    canvas.style.width = oldWidth + "px";\n                    canvas.style.height = oldHeight + "px";\n\n                    // Scale the context to counter the fact that we"ve manually scaled\n                    // our canvas element.\n                    context.scale(ratio, ratio);\n                    return true;\n                } else if (devicePixelRatio == 1) {\n                    // Reset the canvas width / height. Fixes scaling bug when the page is\n                    // zoomed and the devicePixelRatio changes accordingly.\n                    canvas.style.width = canvas.width + "px";\n                    canvas.style.height = canvas.height + "px";\n                }\n                return false;\n            };\n\n\n            /**\n             * Get random number.\n             * @param {number} min\n             * @param {number} max\n             * @param {number}\n             */\n            function getRandomNum(min, max) {\n                return Math.floor(Math.random() * (max - min + 1)) + min;\n            }\n\n\n            /**\n             * Vibrate on mobile devices.\n             * @param {number} duration Duration of the vibration in milliseconds.\n             */\n            function vibrate(duration) {\n                if (IS_MOBILE && window.navigator.vibrate) {\n                    window.navigator.vibrate(duration);\n                }\n            }\n\n\n            /**\n             * Create canvas element.\n             * @param {HTMLElement} container Element to append canvas to.\n             * @param {number} width\n             * @param {number} height\n             * @param {string} opt_classname\n             * @return {HTMLCanvasElement}\n             */\n            function createCanvas(container, width, height, opt_classname) {\n                var canvas = document.createElement("canvas");\n                canvas.className = opt_classname ? Runner.classes.CANVAS + " " +\n                    opt_classname : Runner.classes.CANVAS;\n                canvas.width = width;\n                canvas.height = height;\n                container.appendChild(canvas);\n\n                return canvas;\n            }\n\n\n            /**\n             * Decodes the base 64 audio to ArrayBuffer used by Web Audio.\n             * @param {string} base64String\n             */\n            function decodeBase64ToArrayBuffer(base64String) {\n                var len = (base64String.length / 4) * 3;\n                var str = atob(base64String);\n                var arrayBuffer = new ArrayBuffer(len);\n                var bytes = new Uint8Array(arrayBuffer);\n\n                for (var i = 0; i < len; i++) {\n                    bytes[i] = str.charCodeAt(i);\n                }\n                return bytes.buffer;\n            }\n\n\n            /**\n             * Return the current timestamp.\n             * @return {number}\n             */\n            function getTimeStamp() {\n                return IS_IOS ? new Date().getTime() : performance.now();\n            }\n\n\n            //******************************************************************************\n\n\n            /**\n             * Game over panel.\n             * @param {!HTMLCanvasElement} canvas\n             * @param {Object} textImgPos\n             * @param {Object} restartImgPos\n             * @param {!Object} dimensions Canvas dimensions.\n             * @constructor\n             */\n            function GameOverPanel(canvas, textImgPos, restartImgPos, dimensions) {\n                this.canvas = canvas;\n                this.canvasCtx = canvas.getContext("2d");\n                this.canvasDimensions = dimensions;\n                this.textImgPos = textImgPos;\n                this.restartImgPos = restartImgPos;\n                this.draw();\n            };\n\n\n            /**\n             * Dimensions used in the panel.\n             * @enum {number}\n             */\n            GameOverPanel.dimensions = {\n                TEXT_X: 0,\n                TEXT_Y: 13,\n                TEXT_WIDTH: 191,\n                TEXT_HEIGHT: 11,\n                RESTART_WIDTH: 36,\n                RESTART_HEIGHT: 32\n            };\n\n\n            GameOverPanel.prototype = {\n                /**\n                 * Update the panel dimensions.\n                 * @param {number} width New canvas width.\n                 * @param {number} opt_height Optional new canvas height.\n                 */\n                updateDimensions: function (width, opt_height) {\n                    this.canvasDimensions.WIDTH = width;\n                    if (opt_height) {\n                        this.canvasDimensions.HEIGHT = opt_height;\n                    }\n                },\n\n                /**\n                 * Draw the panel.\n                 */\n                draw: function () {\n                    var dimensions = GameOverPanel.dimensions;\n\n                    var centerX = this.canvasDimensions.WIDTH / 2;\n\n                    // Game over text.\n                    var textSourceX = dimensions.TEXT_X;\n                    var textSourceY = dimensions.TEXT_Y;\n                    var textSourceWidth = dimensions.TEXT_WIDTH;\n                    var textSourceHeight = dimensions.TEXT_HEIGHT;\n\n                    var textTargetX = Math.round(centerX - (dimensions.TEXT_WIDTH / 2));\n                    var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);\n                    var textTargetWidth = dimensions.TEXT_WIDTH;\n                    var textTargetHeight = dimensions.TEXT_HEIGHT;\n\n                    var restartSourceWidth = dimensions.RESTART_WIDTH;\n                    var restartSourceHeight = dimensions.RESTART_HEIGHT;\n                    var restartTargetX = centerX - (dimensions.RESTART_WIDTH / 2);\n                    var restartTargetY = this.canvasDimensions.HEIGHT / 2;\n\n                    if (IS_HIDPI) {\n                        textSourceY *= 2;\n                        textSourceX *= 2;\n                        textSourceWidth *= 2;\n                        textSourceHeight *= 2;\n                        restartSourceWidth *= 2;\n                        restartSourceHeight *= 2;\n                    }\n\n                    textSourceX += this.textImgPos.x;\n                    textSourceY += this.textImgPos.y;\n\n                    // Game over text from sprite.\n                    this.canvasCtx.drawImage(Runner.imageSprite,\n                        textSourceX, textSourceY, textSourceWidth, textSourceHeight,\n                        textTargetX, textTargetY, textTargetWidth, textTargetHeight);\n\n                    // Restart button.\n                    this.canvasCtx.drawImage(Runner.imageSprite,\n                        this.restartImgPos.x, this.restartImgPos.y,\n                        restartSourceWidth, restartSourceHeight,\n                        restartTargetX, restartTargetY, dimensions.RESTART_WIDTH,\n                        dimensions.RESTART_HEIGHT);\n                }\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Check for a collision.\n             * @param {!Obstacle} obstacle\n             * @param {!Trex} tRex T-rex object.\n             * @param {HTMLCanvasContext} opt_canvasCtx Optional canvas context for drawing\n             *    collision boxes.\n             * @return {Array<CollisionBox>}\n             */\n            function checkForCollision(obstacle, tRex, opt_canvasCtx) {\n                var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos;\n\n                // Adjustments are made to the bounding box as there is a 1 pixel white\n                // border around the t-rex and obstacles.\n                var tRexBox = new CollisionBox(\n                    tRex.xPos + 1,\n                    tRex.yPos + 1,\n                    tRex.config.WIDTH - 2,\n                    tRex.config.HEIGHT - 2);\n\n                var obstacleBox = new CollisionBox(\n                    obstacle.xPos + 1,\n                    obstacle.yPos + 1,\n                    obstacle.typeConfig.width * obstacle.size - 2,\n                    obstacle.typeConfig.height - 2);\n\n                // Debug outer box\n                if (opt_canvasCtx) {\n                    drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);\n                }\n\n                // Simple outer bounds check.\n                if (boxCompare(tRexBox, obstacleBox)) {\n                    var collisionBoxes = obstacle.collisionBoxes;\n                    var tRexCollisionBoxes = tRex.ducking ?\n                        Trex.collisionBoxes.DUCKING : Trex.collisionBoxes.RUNNING;\n\n                    // Detailed axis aligned box check.\n                    for (var t = 0; t < tRexCollisionBoxes.length; t++) {\n                        for (var i = 0; i < collisionBoxes.length; i++) {\n                            // Adjust the box to actual positions.\n                            var adjTrexBox =\n                                createAdjustedCollisionBox(tRexCollisionBoxes[t], tRexBox);\n                            var adjObstacleBox =\n                                createAdjustedCollisionBox(collisionBoxes[i], obstacleBox);\n                            var crashed = boxCompare(adjTrexBox, adjObstacleBox);\n\n                            // Draw boxes for debug.\n                            if (opt_canvasCtx) {\n                                drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);\n                            }\n\n                            if (crashed) {\n                                return [adjTrexBox, adjObstacleBox];\n                            }\n                        }\n                    }\n                }\n                return false;\n            };\n\n\n            /**\n             * Adjust the collision box.\n             * @param {!CollisionBox} box The original box.\n             * @param {!CollisionBox} adjustment Adjustment box.\n             * @return {CollisionBox} The adjusted collision box object.\n             */\n            function createAdjustedCollisionBox(box, adjustment) {\n                return new CollisionBox(\n                    box.x + adjustment.x,\n                    box.y + adjustment.y,\n                    box.width,\n                    box.height);\n            };\n\n\n            /**\n             * Draw the collision boxes for debug.\n             */\n            function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {\n                canvasCtx.save();\n                canvasCtx.strokeStyle = "#f00";\n                canvasCtx.strokeRect(tRexBox.x, tRexBox.y, tRexBox.width, tRexBox.height);\n\n                canvasCtx.strokeStyle = "#0f0";\n                canvasCtx.strokeRect(obstacleBox.x, obstacleBox.y,\n                    obstacleBox.width, obstacleBox.height);\n                canvasCtx.restore();\n            };\n\n\n            /**\n             * Compare two collision boxes for a collision.\n             * @param {CollisionBox} tRexBox\n             * @param {CollisionBox} obstacleBox\n             * @return {boolean} Whether the boxes intersected.\n             */\n            function boxCompare(tRexBox, obstacleBox) {\n                var crashed = false;\n                var tRexBoxX = tRexBox.x;\n                var tRexBoxY = tRexBox.y;\n\n                var obstacleBoxX = obstacleBox.x;\n                var obstacleBoxY = obstacleBox.y;\n\n                // Axis-Aligned Bounding Box method.\n                if (tRexBox.x < obstacleBoxX + obstacleBox.width &&\n                    tRexBox.x + tRexBox.width > obstacleBoxX &&\n                    tRexBox.y < obstacleBox.y + obstacleBox.height &&\n                    tRexBox.height + tRexBox.y > obstacleBox.y) {\n                    crashed = true;\n                }\n\n                return crashed;\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Collision box object.\n             * @param {number} x X position.\n             * @param {number} y Y Position.\n             * @param {number} w Width.\n             * @param {number} h Height.\n             */\n            function CollisionBox(x, y, w, h) {\n                this.x = x;\n                this.y = y;\n                this.width = w;\n                this.height = h;\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Obstacle.\n             * @param {HTMLCanvasCtx} canvasCtx\n             * @param {Obstacle.type} type\n             * @param {Object} spritePos Obstacle position in sprite.\n             * @param {Object} dimensions\n             * @param {number} gapCoefficient Mutipler in determining the gap.\n             * @param {number} speed\n             * @param {number} opt_xOffset\n             */\n            function Obstacle(canvasCtx, type, spriteImgPos, dimensions,\n                gapCoefficient, speed, opt_xOffset) {\n\n                this.canvasCtx = canvasCtx;\n                this.spritePos = spriteImgPos;\n                this.typeConfig = type;\n                this.gapCoefficient = gapCoefficient;\n                this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);\n                this.dimensions = dimensions;\n                this.remove = false;\n                this.xPos = dimensions.WIDTH + (opt_xOffset || 0);\n                this.yPos = 0;\n                this.width = 0;\n                this.collisionBoxes = [];\n                this.gap = 0;\n                this.speedOffset = 0;\n\n                // For animated obstacles.\n                this.currentFrame = 0;\n                this.timer = 0;\n\n                this.init(speed);\n            };\n\n            /**\n             * Coefficient for calculating the maximum gap.\n             * @const\n             */\n            Obstacle.MAX_GAP_COEFFICIENT = 1.5;\n\n            /**\n             * Maximum obstacle grouping count.\n             * @const\n             */\n            Obstacle.MAX_OBSTACLE_LENGTH = 3,\n\n\n                Obstacle.prototype = {\n                    /**\n                     * Initialise the DOM for the obstacle.\n                     * @param {number} speed\n                     */\n                    init: function (speed) {\n                        this.cloneCollisionBoxes();\n\n                        // Only allow sizing if we"re at the right speed.\n                        if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {\n                            this.size = 1;\n                        }\n\n                        this.width = this.typeConfig.width * this.size;\n\n                        // Check if obstacle can be positioned at various heights.\n                        if (Array.isArray(this.typeConfig.yPos)) {\n                            var yPosConfig = IS_MOBILE ? this.typeConfig.yPosMobile :\n                                this.typeConfig.yPos;\n                            this.yPos = yPosConfig[getRandomNum(0, yPosConfig.length - 1)];\n                        } else {\n                            this.yPos = this.typeConfig.yPos;\n                        }\n\n                        this.draw();\n\n                        // Make collision box adjustments,\n                        // Central box is adjusted to the size as one box.\n                        //      ____        ______        ________\n                        //    _|   |-|    _|     |-|    _|       |-|\n                        //   | |<->| |   | |<---\x3e| |   | |<-----\x3e| |\n                        //   | | 1 | |   | |  2  | |   | |   3   | |\n                        //   |_|___|_|   |_|_____|_|   |_|_______|_|\n                        //\n                        if (this.size > 1) {\n                            this.collisionBoxes[1].width = this.width - this.collisionBoxes[0].width -\n                                this.collisionBoxes[2].width;\n                            this.collisionBoxes[2].x = this.width - this.collisionBoxes[2].width;\n                        }\n\n                        // For obstacles that go at a different speed from the horizon.\n                        if (this.typeConfig.speedOffset) {\n                            this.speedOffset = Math.random() > 0.5 ? this.typeConfig.speedOffset :\n                                -this.typeConfig.speedOffset;\n                        }\n\n                        this.gap = this.getGap(this.gapCoefficient, speed);\n                    },\n\n                    /**\n                     * Draw and crop based on size.\n                     */\n                    draw: function () {\n                        var sourceWidth = this.typeConfig.width;\n                        var sourceHeight = this.typeConfig.height;\n\n                        if (IS_HIDPI) {\n                            sourceWidth = sourceWidth * 2;\n                            sourceHeight = sourceHeight * 2;\n                        }\n\n                        // X position in sprite.\n                        var sourceX = (sourceWidth * this.size) * (0.5 * (this.size - 1)) +\n                            this.spritePos.x;\n\n                        // Animation frames.\n                        if (this.currentFrame > 0) {\n                            sourceX += sourceWidth * this.currentFrame;\n                        }\n\n                        this.canvasCtx.drawImage(Runner.imageSprite,\n                            sourceX, this.spritePos.y,\n                            sourceWidth * this.size, sourceHeight,\n                            this.xPos, this.yPos,\n                            this.typeConfig.width * this.size, this.typeConfig.height);\n                    },\n\n                    /**\n                     * Obstacle frame update.\n                     * @param {number} deltaTime\n                     * @param {number} speed\n                     */\n                    update: function (deltaTime, speed) {\n                        if (!this.remove) {\n                            if (this.typeConfig.speedOffset) {\n                                speed += this.speedOffset;\n                            }\n                            this.xPos -= Math.floor((speed * FPS / 1000) * deltaTime);\n\n                            // Update frame\n                            if (this.typeConfig.numFrames) {\n                                this.timer += deltaTime;\n                                if (this.timer >= this.typeConfig.frameRate) {\n                                    this.currentFrame =\n                                        this.currentFrame == this.typeConfig.numFrames - 1 ?\n                                            0 : this.currentFrame + 1;\n                                    this.timer = 0;\n                                }\n                            }\n                            this.draw();\n\n                            if (!this.isVisible()) {\n                                this.remove = true;\n                            }\n                        }\n                    },\n\n                    /**\n                     * Calculate a random gap size.\n                     * - Minimum gap gets wider as speed increses\n                     * @param {number} gapCoefficient\n                     * @param {number} speed\n                     * @return {number} The gap size.\n                     */\n                    getGap: function (gapCoefficient, speed) {\n                        var minGap = Math.round(this.width * speed +\n                            this.typeConfig.minGap * gapCoefficient);\n                        var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);\n                        return getRandomNum(minGap, maxGap);\n                    },\n\n                    /**\n                     * Check if obstacle is visible.\n                     * @return {boolean} Whether the obstacle is in the game area.\n                     */\n                    isVisible: function () {\n                        return this.xPos + this.width > 0;\n                    },\n\n                    /**\n                     * Make a copy of the collision boxes, since these will change based on\n                     * obstacle type and size.\n                     */\n                    cloneCollisionBoxes: function () {\n                        var collisionBoxes = this.typeConfig.collisionBoxes;\n\n                        for (var i = collisionBoxes.length - 1; i >= 0; i--) {\n                            this.collisionBoxes[i] = new CollisionBox(collisionBoxes[i].x,\n                                collisionBoxes[i].y, collisionBoxes[i].width,\n                                collisionBoxes[i].height);\n                        }\n                    }\n                };\n\n\n            /**\n             * Obstacle definitions.\n             * minGap: minimum pixel space betweeen obstacles.\n             * multipleSpeed: Speed at which multiples are allowed.\n             * speedOffset: speed faster / slower than the horizon.\n             * minSpeed: Minimum speed which the obstacle can make an appearance.\n             */\n            Obstacle.types = [\n                {\n                    type: "CACTUS_SMALL",\n                    width: 17,\n                    height: 35,\n                    yPos: 105,\n                    multipleSpeed: 4,\n                    minGap: 120,\n                    minSpeed: 0,\n                    collisionBoxes: [\n                        new CollisionBox(0, 7, 5, 27),\n                        new CollisionBox(4, 0, 6, 34),\n                        new CollisionBox(10, 4, 7, 14)\n                    ]\n                },\n                {\n                    type: "CACTUS_LARGE",\n                    width: 25,\n                    height: 50,\n                    yPos: 90,\n                    multipleSpeed: 7,\n                    minGap: 120,\n                    minSpeed: 0,\n                    collisionBoxes: [\n                        new CollisionBox(0, 12, 7, 38),\n                        new CollisionBox(8, 0, 7, 49),\n                        new CollisionBox(13, 10, 10, 38)\n                    ]\n                },\n                {\n                    type: "PTERODACTYL",\n                    width: 46,\n                    height: 40,\n                    yPos: [100, 75, 50], // Variable height.\n                    yPosMobile: [100, 50], // Variable height mobile.\n                    multipleSpeed: 999,\n                    minSpeed: 8.5,\n                    minGap: 150,\n                    collisionBoxes: [\n                        new CollisionBox(15, 15, 16, 5),\n                        new CollisionBox(18, 21, 24, 6),\n                        new CollisionBox(2, 14, 4, 3),\n                        new CollisionBox(6, 10, 4, 7),\n                        new CollisionBox(10, 8, 6, 9)\n                    ],\n                    numFrames: 2,\n                    frameRate: 1000 / 6,\n                    speedOffset: .8\n                }\n            ];\n\n\n            //******************************************************************************\n            /**\n             * T-rex game character.\n             * @param {HTMLCanvas} canvas\n             * @param {Object} spritePos Positioning within image sprite.\n             * @constructor\n             */\n            function Trex(canvas, spritePos) {\n                this.canvas = canvas;\n                this.canvasCtx = canvas.getContext("2d");\n                this.spritePos = spritePos;\n                this.xPos = 0;\n                this.yPos = 0;\n                // Position when on the ground.\n                this.groundYPos = 0;\n                this.currentFrame = 0;\n                this.currentAnimFrames = [];\n                this.blinkDelay = 0;\n                this.blinkCount = 0;\n                this.animStartTime = 0;\n                this.timer = 0;\n                this.msPerFrame = 1000 / FPS;\n                this.config = Trex.config;\n                // Current status.\n                this.status = Trex.status.WAITING;\n\n                this.jumping = false;\n                this.ducking = false;\n                this.jumpVelocity = 0;\n                this.reachedMinHeight = false;\n                this.speedDrop = false;\n                this.jumpCount = 0;\n                this.jumpspotX = 0;\n\n                this.init();\n            };\n\n\n            /**\n             * T-rex player config.\n             * @enum {number}\n             */\n            Trex.config = {\n                DROP_VELOCITY: -5,\n                GRAVITY: 0.6,\n                HEIGHT: 47,\n                HEIGHT_DUCK: 25,\n                INIITAL_JUMP_VELOCITY: -10,\n                INTRO_DURATION: 1500,\n                MAX_JUMP_HEIGHT: 30,\n                MIN_JUMP_HEIGHT: 30,\n                SPEED_DROP_COEFFICIENT: 3,\n                SPRITE_WIDTH: 262,\n                START_X_POS: 50,\n                WIDTH: 44,\n                WIDTH_DUCK: 59\n            };\n\n\n            /**\n             * Used in collision detection.\n             * @type {Array<CollisionBox>}\n             */\n            Trex.collisionBoxes = {\n                DUCKING: [\n                    new CollisionBox(1, 18, 55, 25)\n                ],\n                RUNNING: [\n                    new CollisionBox(22, 0, 17, 16),\n                    new CollisionBox(1, 18, 30, 9),\n                    new CollisionBox(10, 35, 14, 8),\n                    new CollisionBox(1, 24, 29, 5),\n                    new CollisionBox(5, 30, 21, 4),\n                    new CollisionBox(9, 34, 15, 4)\n                ]\n            };\n\n\n            /**\n             * Animation states.\n             * @enum {string}\n             */\n            Trex.status = {\n                CRASHED: "CRASHED",\n                DUCKING: "DUCKING",\n                JUMPING: "JUMPING",\n                RUNNING: "RUNNING",\n                WAITING: "WAITING"\n            };\n\n            /**\n             * Blinking coefficient.\n             * @const\n             */\n            Trex.BLINK_TIMING = 7000;\n\n\n            /**\n             * Animation config for different states.\n             * @enum {Object}\n             */\n            Trex.animFrames = {\n                WAITING: {\n                    frames: [44, 0],\n                    msPerFrame: 1000 / 3\n                },\n                RUNNING: {\n                    frames: [88, 132],\n                    msPerFrame: 1000 / 12\n                },\n                CRASHED: {\n                    frames: [220],\n                    msPerFrame: 1000 / 60\n                },\n                JUMPING: {\n                    frames: [0],\n                    msPerFrame: 1000 / 60\n                },\n                DUCKING: {\n                    frames: [264, 323],\n                    msPerFrame: 1000 / 8\n                }\n            };\n\n\n            Trex.prototype = {\n                /**\n                 * T-rex player initaliser.\n                 * Sets the t-rex to blink at random intervals.\n                 */\n                init: function () {\n                    this.groundYPos = Runner.defaultDimensions.HEIGHT - this.config.HEIGHT -\n                        Runner.config.BOTTOM_PAD;\n                    this.yPos = this.groundYPos;\n                    this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;\n\n                    this.draw(0, 0);\n                    this.update(0, Trex.status.WAITING);\n                },\n\n                /**\n                 * Setter for the jump velocity.\n                 * The approriate drop velocity is also set.\n                 */\n                setJumpVelocity: function (setting) {\n                    this.config.INIITAL_JUMP_VELOCITY = -setting;\n                    this.config.DROP_VELOCITY = -setting / 2;\n                },\n\n                /**\n                 * Set the animation status.\n                 * @param {!number} deltaTime\n                 * @param {Trex.status} status Optional status to switch to.\n                 */\n                update: function (deltaTime, opt_status) {\n                    this.timer += deltaTime;\n\n                    // Update the status.\n                    if (opt_status) {\n                        this.status = opt_status;\n                        this.currentFrame = 0;\n                        this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;\n                        this.currentAnimFrames = Trex.animFrames[opt_status].frames;\n\n                        if (opt_status == Trex.status.WAITING) {\n                            this.animStartTime = getTimeStamp();\n                            this.setBlinkDelay();\n                        }\n                    }\n\n                    // Game intro animation, T-rex moves in from the left.\n                    if (this.playingIntro && this.xPos < this.config.START_X_POS) {\n                        this.xPos += Math.round((this.config.START_X_POS /\n                            this.config.INTRO_DURATION) * deltaTime);\n                    }\n\n                    if (this.status == Trex.status.WAITING) {\n                        this.blink(getTimeStamp());\n                    } else {\n                        this.draw(this.currentAnimFrames[this.currentFrame], 0);\n                    }\n\n                    // Update the frame position.\n                    if (this.timer >= this.msPerFrame) {\n                        this.currentFrame = this.currentFrame ==\n                            this.currentAnimFrames.length - 1 ? 0 : this.currentFrame + 1;\n                        this.timer = 0;\n                    }\n\n                    // Speed drop becomes duck if the down key is still being pressed.\n                    if (this.speedDrop && this.yPos == this.groundYPos) {\n                        this.speedDrop = false;\n                        this.setDuck(true);\n                    }\n                },\n\n                /**\n                 * Draw the t-rex to a particular position.\n                 * @param {number} x\n                 * @param {number} y\n                 */\n                draw: function (x, y) {\n                    var sourceX = x;\n                    var sourceY = y;\n                    var sourceWidth = this.ducking && this.status != Trex.status.CRASHED ?\n                        this.config.WIDTH_DUCK : this.config.WIDTH;\n                    var sourceHeight = this.config.HEIGHT;\n\n                    if (IS_HIDPI) {\n                        sourceX *= 2;\n                        sourceY *= 2;\n                        sourceWidth *= 2;\n                        sourceHeight *= 2;\n                    }\n\n                    // Adjustments for sprite sheet position.\n                    sourceX += this.spritePos.x;\n                    sourceY += this.spritePos.y;\n\n                    // Ducking.\n                    if (this.ducking && this.status != Trex.status.CRASHED) {\n                        this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,\n                            sourceWidth, sourceHeight,\n                            this.xPos, this.yPos,\n                            this.config.WIDTH_DUCK, this.config.HEIGHT);\n                    } else {\n                        // Crashed whilst ducking. Trex is standing up so needs adjustment.\n                        if (this.ducking && this.status == Trex.status.CRASHED) {\n                            this.xPos++;\n                        }\n                        // Standing / running\n                        this.canvasCtx.drawImage(Runner.imageSprite, sourceX, sourceY,\n                            sourceWidth, sourceHeight,\n                            this.xPos, this.yPos,\n                            this.config.WIDTH, this.config.HEIGHT);\n                    }\n                },\n\n                /**\n                 * Sets a random time for the blink to happen.\n                 */\n                setBlinkDelay: function () {\n                    this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);\n                },\n\n                /**\n                 * Make t-rex blink at random intervals.\n                 * @param {number} time Current time in milliseconds.\n                 */\n                blink: function (time) {\n                    var deltaTime = time - this.animStartTime;\n\n                    if (deltaTime >= this.blinkDelay) {\n                        this.draw(this.currentAnimFrames[this.currentFrame], 0);\n\n                        if (this.currentFrame == 1) {\n                            // Set new random delay to blink.\n                            this.setBlinkDelay();\n                            this.animStartTime = time;\n                            this.blinkCount++;\n                        }\n                    }\n                },\n\n                /**\n                 * Initialise a jump.\n                 * @param {number} speed\n                 */\n                startJump: function (speed) {\n                    if (!this.jumping) {\n                        this.update(0, Trex.status.JUMPING);\n                        // Tweak the jump velocity based on the speed.\n                        this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY - (speed / 10);\n                        this.jumping = true;\n                        this.reachedMinHeight = false;\n                        this.speedDrop = false;\n                    }\n                },\n\n                /**\n                 * Jump is complete, falling down.\n                 */\n                endJump: function () {\n                    if (this.reachedMinHeight &&\n                        this.jumpVelocity < this.config.DROP_VELOCITY) {\n                        this.jumpVelocity = this.config.DROP_VELOCITY;\n                    }\n                },\n\n                /**\n                 * Update frame for a jump.\n                 * @param {number} deltaTime\n                 * @param {number} speed\n                 */\n                updateJump: function (deltaTime, speed) {\n                    var msPerFrame = Trex.animFrames[this.status].msPerFrame;\n                    var framesElapsed = deltaTime / msPerFrame;\n\n                    // Speed drop makes Trex fall faster.\n                    if (this.speedDrop) {\n                        this.yPos += Math.round(this.jumpVelocity *\n                            this.config.SPEED_DROP_COEFFICIENT * framesElapsed);\n                    } else {\n                        this.yPos += Math.round(this.jumpVelocity * framesElapsed);\n                    }\n\n                    this.jumpVelocity += this.config.GRAVITY * framesElapsed;\n\n                    // Minimum height has been reached.\n                    if (this.yPos < this.minJumpHeight || this.speedDrop) {\n                        this.reachedMinHeight = true;\n                    }\n\n                    // Reached max height\n                    if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {\n                        this.endJump();\n                    }\n\n                    // Back down at ground level. Jump completed.\n                    if (this.yPos > this.groundYPos) {\n                        this.reset();\n                        this.jumpCount++;\n                    }\n\n                    this.update(deltaTime);\n                },\n\n                /**\n                 * Set the speed drop. Immediately cancels the current jump.\n                 */\n                setSpeedDrop: function () {\n                    this.speedDrop = true;\n                    this.jumpVelocity = 1;\n                },\n\n                /**\n                 * @param {boolean} isDucking.\n                 */\n                setDuck: function (isDucking) {\n                    if (isDucking && this.status != Trex.status.DUCKING) {\n                        this.update(0, Trex.status.DUCKING);\n                        this.ducking = true;\n                    } else if (this.status == Trex.status.DUCKING) {\n                        this.update(0, Trex.status.RUNNING);\n                        this.ducking = false;\n                    }\n                },\n\n                /**\n                 * Reset the t-rex to running at start of game.\n                 */\n                reset: function () {\n                    this.yPos = this.groundYPos;\n                    this.jumpVelocity = 0;\n                    this.jumping = false;\n                    this.ducking = false;\n                    this.update(0, Trex.status.RUNNING);\n                    this.midair = false;\n                    this.speedDrop = false;\n                    this.jumpCount = 0;\n                }\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Handles displaying the distance meter.\n             * @param {!HTMLCanvasElement} canvas\n             * @param {Object} spritePos Image position in sprite.\n             * @param {number} canvasWidth\n             * @constructor\n             */\n            function DistanceMeter(canvas, spritePos, canvasWidth) {\n                this.canvas = canvas;\n                this.canvasCtx = canvas.getContext("2d");\n                this.image = Runner.imageSprite;\n                this.spritePos = spritePos;\n                this.x = 0;\n                this.y = 5;\n\n                this.currentDistance = 0;\n                this.maxScore = 0;\n                this.highScore = 0;\n                this.container = null;\n\n                this.digits = [];\n                this.acheivement = false;\n                this.defaultString = "";\n                this.flashTimer = 0;\n                this.flashIterations = 0;\n                this.invertTrigger = false;\n\n                this.config = DistanceMeter.config;\n                this.maxScoreUnits = this.config.MAX_DISTANCE_UNITS;\n                this.init(canvasWidth);\n            };\n\n\n            /**\n             * @enum {number}\n             */\n            DistanceMeter.dimensions = {\n                WIDTH: 10,\n                HEIGHT: 13,\n                DEST_WIDTH: 11\n            };\n\n\n            /**\n             * Y positioning of the digits in the sprite sheet.\n             * X position is always 0.\n             * @type {Array<number>}\n             */\n            DistanceMeter.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];\n\n\n            /**\n             * Distance meter config.\n             * @enum {number}\n             */\n            DistanceMeter.config = {\n                // Number of digits.\n                MAX_DISTANCE_UNITS: 5,\n\n                // Distance that causes achievement animation.\n                ACHIEVEMENT_DISTANCE: 100,\n\n                // Used for conversion from pixel distance to a scaled unit.\n                COEFFICIENT: 0.025,\n\n                // Flash duration in milliseconds.\n                FLASH_DURATION: 1000 / 4,\n\n                // Flash iterations for achievement animation.\n                FLASH_ITERATIONS: 3\n            };\n\n\n            DistanceMeter.prototype = {\n                /**\n                 * Initialise the distance meter to "00000".\n                 * @param {number} width Canvas width in px.\n                 */\n                init: function (width) {\n                    var maxDistanceStr = "";\n\n                    this.calcXPos(width);\n                    this.maxScore = this.maxScoreUnits;\n                    for (var i = 0; i < this.maxScoreUnits; i++) {\n                        this.draw(i, 0);\n                        this.defaultString += "0";\n                        maxDistanceStr += "9";\n                    }\n\n                    this.maxScore = parseInt(maxDistanceStr);\n                },\n\n                /**\n                 * Calculate the xPos in the canvas.\n                 * @param {number} canvasWidth\n                 */\n                calcXPos: function (canvasWidth) {\n                    this.x = canvasWidth - (DistanceMeter.dimensions.DEST_WIDTH *\n                        (this.maxScoreUnits + 1));\n                },\n\n                /**\n                 * Draw a digit to canvas.\n                 * @param {number} digitPos Position of the digit.\n                 * @param {number} value Digit value 0-9.\n                 * @param {boolean} opt_highScore Whether drawing the high score.\n                 */\n                draw: function (digitPos, value, opt_highScore) {\n                    var sourceWidth = DistanceMeter.dimensions.WIDTH;\n                    var sourceHeight = DistanceMeter.dimensions.HEIGHT;\n                    var sourceX = DistanceMeter.dimensions.WIDTH * value;\n                    var sourceY = 0;\n\n                    var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;\n                    var targetY = this.y;\n                    var targetWidth = DistanceMeter.dimensions.WIDTH;\n                    var targetHeight = DistanceMeter.dimensions.HEIGHT;\n\n                    // For high DPI we 2x source values.\n                    if (IS_HIDPI) {\n                        sourceWidth *= 2;\n                        sourceHeight *= 2;\n                        sourceX *= 2;\n                    }\n\n                    sourceX += this.spritePos.x;\n                    sourceY += this.spritePos.y;\n\n                    this.canvasCtx.save();\n\n                    if (opt_highScore) {\n                        // Left of the current score.\n                        var highScoreX = this.x - (this.maxScoreUnits * 2) *\n                            DistanceMeter.dimensions.WIDTH;\n                        this.canvasCtx.translate(highScoreX, this.y);\n                    } else {\n                        this.canvasCtx.translate(this.x, this.y);\n                    }\n\n                    this.canvasCtx.drawImage(this.image, sourceX, sourceY,\n                        sourceWidth, sourceHeight,\n                        targetX, targetY,\n                        targetWidth, targetHeight\n                    );\n\n                    this.canvasCtx.restore();\n                },\n\n                /**\n                 * Covert pixel distance to a "real" distance.\n                 * @param {number} distance Pixel distance ran.\n                 * @return {number} The "real" distance ran.\n                 */\n                getActualDistance: function (distance) {\n                    return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;\n                },\n\n                /**\n                 * Update the distance meter.\n                 * @param {number} distance\n                 * @param {number} deltaTime\n                 * @return {boolean} Whether the acheivement sound fx should be played.\n                 */\n                update: function (deltaTime, distance) {\n                    var paint = true;\n                    var playSound = false;\n\n                    if (!this.acheivement) {\n                        distance = this.getActualDistance(distance);\n                        // Score has gone beyond the initial digit count.\n                        if (distance > this.maxScore && this.maxScoreUnits ==\n                            this.config.MAX_DISTANCE_UNITS) {\n                            this.maxScoreUnits++;\n                            this.maxScore = parseInt(this.maxScore + "9");\n                        } else {\n                            this.distance = 0;\n                        }\n\n                        if (distance > 0) {\n                            // Acheivement unlocked\n                            if (distance % this.config.ACHIEVEMENT_DISTANCE == 0) {\n                                // Flash score and play sound.\n                                this.acheivement = true;\n                                this.flashTimer = 0;\n                                playSound = true;\n                            }\n\n                            // Create a string representation of the distance with leading 0.\n                            var distanceStr = (this.defaultString +\n                                distance).substr(-this.maxScoreUnits);\n                            this.digits = distanceStr.split("");\n                        } else {\n                            this.digits = this.defaultString.split("");\n                        }\n                    } else {\n                        // Control flashing of the score on reaching acheivement.\n                        if (this.flashIterations <= this.config.FLASH_ITERATIONS) {\n                            this.flashTimer += deltaTime;\n\n                            if (this.flashTimer < this.config.FLASH_DURATION) {\n                                paint = false;\n                            } else if (this.flashTimer >\n                                this.config.FLASH_DURATION * 2) {\n                                this.flashTimer = 0;\n                                this.flashIterations++;\n                            }\n                        } else {\n                            this.acheivement = false;\n                            this.flashIterations = 0;\n                            this.flashTimer = 0;\n                        }\n                    }\n\n                    // Draw the digits if not flashing.\n                    if (paint) {\n                        for (var i = this.digits.length - 1; i >= 0; i--) {\n                            this.draw(i, parseInt(this.digits[i]));\n                        }\n                    }\n\n                    this.drawHighScore();\n                    return playSound;\n                },\n\n                /**\n                 * Draw the high score.\n                 */\n                drawHighScore: function () {\n                    this.canvasCtx.save();\n                    this.canvasCtx.globalAlpha = .8;\n                    for (var i = this.highScore.length - 1; i >= 0; i--) {\n                        this.draw(i, parseInt(this.highScore[i], 10), true);\n                    }\n                    this.canvasCtx.restore();\n                },\n\n                /**\n                 * Set the highscore as a array string.\n                 * Position of char in the sprite: H - 10, I - 11.\n                 * @param {number} distance Distance ran in pixels.\n                 */\n                setHighScore: function (distance) {\n                    distance = this.getActualDistance(distance);\n                    var highScoreStr = (this.defaultString +\n                        distance).substr(-this.maxScoreUnits);\n\n                    this.highScore = ["10", "11", ""].concat(highScoreStr.split(""));\n                },\n\n                /**\n                 * Reset the distance meter back to "00000".\n                 */\n                reset: function () {\n                    this.update(0);\n                    this.acheivement = false;\n                }\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Cloud background item.\n             * Similar to an obstacle object but without collision boxes.\n             * @param {HTMLCanvasElement} canvas Canvas element.\n             * @param {Object} spritePos Position of image in sprite.\n             * @param {number} containerWidth\n             */\n            function Cloud(canvas, spritePos, containerWidth) {\n                this.canvas = canvas;\n                this.canvasCtx = this.canvas.getContext("2d");\n                this.spritePos = spritePos;\n                this.containerWidth = containerWidth;\n                this.xPos = containerWidth;\n                this.yPos = 0;\n                this.remove = false;\n                this.cloudGap = getRandomNum(Cloud.config.MIN_CLOUD_GAP,\n                    Cloud.config.MAX_CLOUD_GAP);\n\n                this.init();\n            };\n\n\n            /**\n             * Cloud object config.\n             * @enum {number}\n             */\n            Cloud.config = {\n                HEIGHT: 14,\n                MAX_CLOUD_GAP: 400,\n                MAX_SKY_LEVEL: 30,\n                MIN_CLOUD_GAP: 100,\n                MIN_SKY_LEVEL: 71,\n                WIDTH: 46\n            };\n\n\n            Cloud.prototype = {\n                /**\n                 * Initialise the cloud. Sets the Cloud height.\n                 */\n                init: function () {\n                    this.yPos = getRandomNum(Cloud.config.MAX_SKY_LEVEL,\n                        Cloud.config.MIN_SKY_LEVEL);\n                    this.draw();\n                },\n\n                /**\n                 * Draw the cloud.\n                 */\n                draw: function () {\n                    this.canvasCtx.save();\n                    var sourceWidth = Cloud.config.WIDTH;\n                    var sourceHeight = Cloud.config.HEIGHT;\n\n                    if (IS_HIDPI) {\n                        sourceWidth = sourceWidth * 2;\n                        sourceHeight = sourceHeight * 2;\n                    }\n\n                    this.canvasCtx.drawImage(Runner.imageSprite, this.spritePos.x,\n                        this.spritePos.y,\n                        sourceWidth, sourceHeight,\n                        this.xPos, this.yPos,\n                        Cloud.config.WIDTH, Cloud.config.HEIGHT);\n\n                    this.canvasCtx.restore();\n                },\n\n                /**\n                 * Update the cloud position.\n                 * @param {number} speed\n                 */\n                update: function (speed) {\n                    if (!this.remove) {\n                        this.xPos -= Math.ceil(speed);\n                        this.draw();\n\n                        // Mark as removeable if no longer in the canvas.\n                        if (!this.isVisible()) {\n                            this.remove = true;\n                        }\n                    }\n                },\n\n                /**\n                 * Check if the cloud is visible on the stage.\n                 * @return {boolean}\n                 */\n                isVisible: function () {\n                    return this.xPos + Cloud.config.WIDTH > 0;\n                }\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Nightmode shows a moon and stars on the horizon.\n             */\n            function NightMode(canvas, spritePos, containerWidth) {\n                this.spritePos = spritePos;\n                this.canvas = canvas;\n                this.canvasCtx = canvas.getContext("2d");\n                this.xPos = containerWidth - 50;\n                this.yPos = 30;\n                this.currentPhase = 0;\n                this.opacity = 0;\n                this.containerWidth = containerWidth;\n                this.stars = [];\n                this.drawStars = false;\n                this.placeStars();\n            };\n\n            /**\n             * @enum {number}\n             */\n            NightMode.config = {\n                FADE_SPEED: 0.035,\n                HEIGHT: 40,\n                MOON_SPEED: 0.25,\n                NUM_STARS: 2,\n                STAR_SIZE: 9,\n                STAR_SPEED: 0.3,\n                STAR_MAX_Y: 70,\n                WIDTH: 20\n            };\n\n            NightMode.phases = [140, 120, 100, 60, 40, 20, 0];\n\n            NightMode.prototype = {\n                /**\n                 * Update moving moon, changing phases.\n                 * @param {boolean} activated Whether night mode is activated.\n                 * @param {number} delta\n                 */\n                update: function (activated, delta) {\n                    // Moon phase.\n                    if (activated && this.opacity == 0) {\n                        this.currentPhase++;\n\n                        if (this.currentPhase >= NightMode.phases.length) {\n                            this.currentPhase = 0;\n                        }\n                    }\n\n                    // Fade in / out.\n                    if (activated && (this.opacity < 1 || this.opacity == 0)) {\n                        this.opacity += NightMode.config.FADE_SPEED;\n                    } else if (this.opacity > 0) {\n                        this.opacity -= NightMode.config.FADE_SPEED;\n                    }\n\n                    // Set moon positioning.\n                    if (this.opacity > 0) {\n                        this.xPos = this.updateXPos(this.xPos, NightMode.config.MOON_SPEED);\n\n                        // Update stars.\n                        if (this.drawStars) {\n                            for (var i = 0; i < NightMode.config.NUM_STARS; i++) {\n                                this.stars[i].x = this.updateXPos(this.stars[i].x,\n                                    NightMode.config.STAR_SPEED);\n                            }\n                        }\n                        this.draw();\n                    } else {\n                        this.opacity = 0;\n                        this.placeStars();\n                    }\n                    this.drawStars = true;\n                },\n\n                updateXPos: function (currentPos, speed) {\n                    if (currentPos < -NightMode.config.WIDTH) {\n                        currentPos = this.containerWidth;\n                    } else {\n                        currentPos -= speed;\n                    }\n                    return currentPos;\n                },\n\n                draw: function () {\n                    var moonSourceWidth = this.currentPhase == 3 ? NightMode.config.WIDTH * 2 :\n                        NightMode.config.WIDTH;\n                    var moonSourceHeight = NightMode.config.HEIGHT;\n                    var moonSourceX = this.spritePos.x + NightMode.phases[this.currentPhase];\n                    var moonOutputWidth = moonSourceWidth;\n                    var starSize = NightMode.config.STAR_SIZE;\n                    var starSourceX = Runner.spriteDefinition.LDPI.STAR.x;\n\n                    if (IS_HIDPI) {\n                        moonSourceWidth *= 2;\n                        moonSourceHeight *= 2;\n                        moonSourceX = this.spritePos.x +\n                            (NightMode.phases[this.currentPhase] * 2);\n                        starSize *= 2;\n                        starSourceX = Runner.spriteDefinition.HDPI.STAR.x;\n                    }\n\n                    this.canvasCtx.save();\n                    this.canvasCtx.globalAlpha = this.opacity;\n\n                    // Stars.\n                    if (this.drawStars) {\n                        for (var i = 0; i < NightMode.config.NUM_STARS; i++) {\n                            this.canvasCtx.drawImage(Runner.imageSprite,\n                                starSourceX, this.stars[i].sourceY, starSize, starSize,\n                                Math.round(this.stars[i].x), this.stars[i].y,\n                                NightMode.config.STAR_SIZE, NightMode.config.STAR_SIZE);\n                        }\n                    }\n\n                    // Moon.\n                    this.canvasCtx.drawImage(Runner.imageSprite, moonSourceX,\n                        this.spritePos.y, moonSourceWidth, moonSourceHeight,\n                        Math.round(this.xPos), this.yPos,\n                        moonOutputWidth, NightMode.config.HEIGHT);\n\n                    this.canvasCtx.globalAlpha = 1;\n                    this.canvasCtx.restore();\n                },\n\n                // Do star placement.\n                placeStars: function () {\n                    var segmentSize = Math.round(this.containerWidth /\n                        NightMode.config.NUM_STARS);\n\n                    for (var i = 0; i < NightMode.config.NUM_STARS; i++) {\n                        this.stars[i] = {};\n                        this.stars[i].x = getRandomNum(segmentSize * i, segmentSize * (i + 1));\n                        this.stars[i].y = getRandomNum(0, NightMode.config.STAR_MAX_Y);\n\n                        if (IS_HIDPI) {\n                            this.stars[i].sourceY = Runner.spriteDefinition.HDPI.STAR.y +\n                                NightMode.config.STAR_SIZE * 2 * i;\n                        } else {\n                            this.stars[i].sourceY = Runner.spriteDefinition.LDPI.STAR.y +\n                                NightMode.config.STAR_SIZE * i;\n                        }\n                    }\n                },\n\n                reset: function () {\n                    this.currentPhase = 0;\n                    this.opacity = 0;\n                    this.update(false);\n                }\n\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Horizon Line.\n             * Consists of two connecting lines. Randomly assigns a flat / bumpy horizon.\n             * @param {HTMLCanvasElement} canvas\n             * @param {Object} spritePos Horizon position in sprite.\n             * @constructor\n             */\n            function HorizonLine(canvas, spritePos) {\n                this.spritePos = spritePos;\n                this.canvas = canvas;\n                this.canvasCtx = canvas.getContext("2d");\n                this.sourceDimensions = {};\n                this.dimensions = HorizonLine.dimensions;\n                this.sourceXPos = [this.spritePos.x, this.spritePos.x +\n                    this.dimensions.WIDTH];\n                this.xPos = [];\n                this.yPos = 0;\n                this.bumpThreshold = 0.5;\n\n                this.setSourceDimensions();\n                this.draw();\n            };\n\n\n            /**\n             * Horizon line dimensions.\n             * @enum {number}\n             */\n            HorizonLine.dimensions = {\n                WIDTH: 600,\n                HEIGHT: 12,\n                YPOS: 127\n            };\n\n\n            HorizonLine.prototype = {\n                /**\n                 * Set the source dimensions of the horizon line.\n                 */\n                setSourceDimensions: function () {\n\n                    for (var dimension in HorizonLine.dimensions) {\n                        if (IS_HIDPI) {\n                            if (dimension != "YPOS") {\n                                this.sourceDimensions[dimension] =\n                                    HorizonLine.dimensions[dimension] * 2;\n                            }\n                        } else {\n                            this.sourceDimensions[dimension] =\n                                HorizonLine.dimensions[dimension];\n                        }\n                        this.dimensions[dimension] = HorizonLine.dimensions[dimension];\n                    }\n\n                    this.xPos = [0, HorizonLine.dimensions.WIDTH];\n                    this.yPos = HorizonLine.dimensions.YPOS;\n                },\n\n                /**\n                 * Return the crop x position of a type.\n                 */\n                getRandomType: function () {\n                    return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;\n                },\n\n                /**\n                 * Draw the horizon line.\n                 */\n                draw: function () {\n                    this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[0],\n                        this.spritePos.y,\n                        this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,\n                        this.xPos[0], this.yPos,\n                        this.dimensions.WIDTH, this.dimensions.HEIGHT);\n\n                    this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[1],\n                        this.spritePos.y,\n                        this.sourceDimensions.WIDTH, this.sourceDimensions.HEIGHT,\n                        this.xPos[1], this.yPos,\n                        this.dimensions.WIDTH, this.dimensions.HEIGHT);\n                },\n\n                /**\n                 * Update the x position of an indivdual piece of the line.\n                 * @param {number} pos Line position.\n                 * @param {number} increment\n                 */\n                updateXPos: function (pos, increment) {\n                    var line1 = pos;\n                    var line2 = pos == 0 ? 1 : 0;\n\n                    this.xPos[line1] -= increment;\n                    this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;\n\n                    if (this.xPos[line1] <= -this.dimensions.WIDTH) {\n                        this.xPos[line1] += this.dimensions.WIDTH * 2;\n                        this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;\n                        this.sourceXPos[line1] = this.getRandomType() + this.spritePos.x;\n                    }\n                },\n\n                /**\n                 * Update the horizon line.\n                 * @param {number} deltaTime\n                 * @param {number} speed\n                 */\n                update: function (deltaTime, speed) {\n                    var increment = Math.floor(speed * (FPS / 1000) * deltaTime);\n\n                    if (this.xPos[0] <= 0) {\n                        this.updateXPos(0, increment);\n                    } else {\n                        this.updateXPos(1, increment);\n                    }\n                    this.draw();\n                },\n\n                /**\n                 * Reset horizon to the starting position.\n                 */\n                reset: function () {\n                    this.xPos[0] = 0;\n                    this.xPos[1] = HorizonLine.dimensions.WIDTH;\n                }\n            };\n\n\n            //******************************************************************************\n\n            /**\n             * Horizon background class.\n             * @param {HTMLCanvasElement} canvas\n             * @param {Object} spritePos Sprite positioning.\n             * @param {Object} dimensions Canvas dimensions.\n             * @param {number} gapCoefficient\n             * @constructor\n             */\n            function Horizon(canvas, spritePos, dimensions, gapCoefficient) {\n                this.canvas = canvas;\n                this.canvasCtx = this.canvas.getContext("2d");\n                this.config = Horizon.config;\n                this.dimensions = dimensions;\n                this.gapCoefficient = gapCoefficient;\n                this.obstacles = [];\n                this.obstacleHistory = [];\n                this.horizonOffsets = [0, 0];\n                this.cloudFrequency = this.config.CLOUD_FREQUENCY;\n                this.spritePos = spritePos;\n                this.nightMode = null;\n\n                // Cloud\n                this.clouds = [];\n                this.cloudSpeed = this.config.BG_CLOUD_SPEED;\n\n                // Horizon\n                this.horizonLine = null;\n                this.init();\n            };\n\n\n            /**\n             * Horizon config.\n             * @enum {number}\n             */\n            Horizon.config = {\n                BG_CLOUD_SPEED: 0.2,\n                BUMPY_THRESHOLD: .3,\n                CLOUD_FREQUENCY: .5,\n                HORIZON_HEIGHT: 16,\n                MAX_CLOUDS: 6\n            };\n\n\n            Horizon.prototype = {\n                /**\n                 * Initialise the horizon. Just add the line and a cloud. No obstacles.\n                 */\n                init: function () {\n                    this.addCloud();\n                    this.horizonLine = new HorizonLine(this.canvas, this.spritePos.HORIZON);\n                    this.nightMode = new NightMode(this.canvas, this.spritePos.MOON,\n                        this.dimensions.WIDTH);\n                },\n\n                /**\n                 * @param {number} deltaTime\n                 * @param {number} currentSpeed\n                 * @param {boolean} updateObstacles Used as an override to prevent\n                 *     the obstacles from being updated / added. This happens in the\n                 *     ease in section.\n                 * @param {boolean} showNightMode Night mode activated.\n                 */\n                update: function (deltaTime, currentSpeed, updateObstacles, showNightMode) {\n                    this.runningTime += deltaTime;\n                    this.horizonLine.update(deltaTime, currentSpeed);\n                    this.nightMode.update(showNightMode);\n                    this.updateClouds(deltaTime, currentSpeed);\n\n                    if (updateObstacles) {\n                        this.updateObstacles(deltaTime, currentSpeed);\n                    }\n                },\n\n                /**\n                 * Update the cloud positions.\n                 * @param {number} deltaTime\n                 * @param {number} currentSpeed\n                 */\n                updateClouds: function (deltaTime, speed) {\n                    var cloudSpeed = this.cloudSpeed / 1000 * deltaTime * speed;\n                    var numClouds = this.clouds.length;\n\n                    if (numClouds) {\n                        for (var i = numClouds - 1; i >= 0; i--) {\n                            this.clouds[i].update(cloudSpeed);\n                        }\n\n                        var lastCloud = this.clouds[numClouds - 1];\n\n                        // Check for adding a new cloud.\n                        if (numClouds < this.config.MAX_CLOUDS &&\n                            (this.dimensions.WIDTH - lastCloud.xPos) > lastCloud.cloudGap &&\n                            this.cloudFrequency > Math.random()) {\n                            this.addCloud();\n                        }\n\n                        // Remove expired clouds.\n                        this.clouds = this.clouds.filter(function (obj) {\n                            return !obj.remove;\n                        });\n                    } else {\n                        this.addCloud();\n                    }\n                },\n\n                /**\n                 * Update the obstacle positions.\n                 * @param {number} deltaTime\n                 * @param {number} currentSpeed\n                 */\n                updateObstacles: function (deltaTime, currentSpeed) {\n                    // Obstacles, move to Horizon layer.\n                    var updatedObstacles = this.obstacles.slice(0);\n\n                    for (var i = 0; i < this.obstacles.length; i++) {\n                        var obstacle = this.obstacles[i];\n                        obstacle.update(deltaTime, currentSpeed);\n\n                        // Clean up existing obstacles.\n                        if (obstacle.remove) {\n                            updatedObstacles.shift();\n                        }\n                    }\n                    this.obstacles = updatedObstacles;\n\n                    if (this.obstacles.length > 0) {\n                        var lastObstacle = this.obstacles[this.obstacles.length - 1];\n\n                        if (lastObstacle && !lastObstacle.followingObstacleCreated &&\n                            lastObstacle.isVisible() &&\n                            (lastObstacle.xPos + lastObstacle.width + lastObstacle.gap) <\n                            this.dimensions.WIDTH) {\n                            this.addNewObstacle(currentSpeed);\n                            lastObstacle.followingObstacleCreated = true;\n                        }\n                    } else {\n                        // Create new obstacles.\n                        this.addNewObstacle(currentSpeed);\n                    }\n                },\n\n                removeFirstObstacle: function () {\n                    this.obstacles.shift();\n                },\n\n                /**\n                 * Add a new obstacle.\n                 * @param {number} currentSpeed\n                 */\n                addNewObstacle: function (currentSpeed) {\n                    var obstacleTypeIndex = getRandomNum(0, Obstacle.types.length - 1);\n                    var obstacleType = Obstacle.types[obstacleTypeIndex];\n\n                    // Check for multiples of the same type of obstacle.\n                    // Also check obstacle is available at current speed.\n                    if (this.duplicateObstacleCheck(obstacleType.type) ||\n                        currentSpeed < obstacleType.minSpeed) {\n                        this.addNewObstacle(currentSpeed);\n                    } else {\n                        var obstacleSpritePos = this.spritePos[obstacleType.type];\n\n                        this.obstacles.push(new Obstacle(this.canvasCtx, obstacleType,\n                            obstacleSpritePos, this.dimensions,\n                            this.gapCoefficient, currentSpeed, obstacleType.width));\n\n                        this.obstacleHistory.unshift(obstacleType.type);\n\n                        if (this.obstacleHistory.length > 1) {\n                            this.obstacleHistory.splice(Runner.config.MAX_OBSTACLE_DUPLICATION);\n                        }\n                    }\n                },\n\n                /**\n                 * Returns whether the previous two obstacles are the same as the next one.\n                 * Maximum duplication is set in config value MAX_OBSTACLE_DUPLICATION.\n                 * @return {boolean}\n                 */\n                duplicateObstacleCheck: function (nextObstacleType) {\n                    var duplicateCount = 0;\n\n                    for (var i = 0; i < this.obstacleHistory.length; i++) {\n                        duplicateCount = this.obstacleHistory[i] == nextObstacleType ?\n                            duplicateCount + 1 : 0;\n                    }\n                    return duplicateCount >= Runner.config.MAX_OBSTACLE_DUPLICATION;\n                },\n\n                /**\n                 * Reset the horizon layer.\n                 * Remove existing obstacles and reposition the horizon line.\n                 */\n                reset: function () {\n                    this.obstacles = [];\n                    this.horizonLine.reset();\n                    this.nightMode.reset();\n                },\n\n                /**\n                 * Update the canvas width and scaling.\n                 * @param {number} width Canvas width.\n                 * @param {number} height Canvas height.\n                 */\n                resize: function (width, height) {\n                    this.canvas.width = width;\n                    this.canvas.height = height;\n                },\n\n                /**\n                 * Add a new cloud to the horizon.\n                 */\n                addCloud: function () {\n                    this.clouds.push(new Cloud(this.canvas, this.spritePos.CLOUD,\n                        this.dimensions.WIDTH));\n                }\n            };\n        })();\n\n\n        function onDocumentLoad() {\n            new Runner(".interstitial-wrapper");\n        }\n\n        document.addEventListener("DOMContentLoaded", onDocumentLoad);\n    <\/script>\n</head>\n\n<body id="t" class="offline">\n    <div id="main-frame-error" class="interstitial-wrapper">\n        <div id="main-content">\n            <div class="icon icon-offline" alt=""></div>\n            <h1>No internet</h1>\n            <p>Try:\n            <ul>\n                <li>Checking the internet connection</li>\n                <li>Checking the address</li>\n            </ul>\n            </p>\n            <p class="text-muted">ERR_INTERNET_DISCONNECTED</p>\n        </div>\n        <div id="offline-resources">\n            <img id="offline-resources-1x" src="${w.a}">\n            <img id="offline-resources-2x" src="${B.a}">\n            <template id="audio-resources">\n                <audio id="offline-sound-press"\n                    src="data:audio/mpeg;base64,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"></audio>\n                <audio id="offline-sound-hit"\n                    src="data:audio/mpeg;base64,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"></audio>\n                <audio id="offline-sound-reached"\n                    src="data:audio/mpeg;base64,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"></audio>\n            </template>\n        </div>\n    </div>\n</body>\n\n</html>`,
                M = A("2317"),
                Q = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        staticClass: "center-flex flex-col px-4 w-full h-full chrome__blank"
                    }, [A("img", {
                        staticClass: "chrome__blank-logo",
                        attrs: {
                            src: n.logo
                        }
                    }), A("form", {
                        staticClass: "relative w-full max-w-lg",
                        on: {
                            submit: function(e) {
                                return e.preventDefault(),
                                    function(e) {
                                        return n.$emit("search", e)
                                    }(e)
                            }
                        }
                    }, [A("input", {
                        staticClass: "block bg-transparent px-2.5 py-2 border border-gray-400 border-solid w-full h-full text-current chrome__blank-search",
                        attrs: {
                            type: "search",
                            placeholder: n.$t("google")
                        }
                    }), A("button", {
                        staticClass: "top-0 right-0 absolute center-flex px-1.5 h-full"
                    }, [A("img", {
                        attrs: {
                            src: n.mic
                        }
                    })])])])
                },
                V = [],
                k = A("2f62"),
                H = {
                    computed: { ...Object(k["f"])({
                            assets: "assets"
                        }),
                        logo() {
                            return Object(h["a"])(this.assets.assetStore.misc, "google")
                        },
                        mic() {
                            return Object(h["a"])(this.assets.assetStore.misc, "google-mic")
                        }
                    }
                },
                U = H,
                P = (A("9204"), Object(C["a"])(U, Q, V, !1, null, null, null)),
                O = P.exports,
                N = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("tab-chrome", {
                        attrs: {
                            activeItem: "settings"
                        },
                        scopedSlots: n._u([{
                            key: "title",
                            fn: function() {
                                return [n._v(n._s(n.$t("settings")))]
                            },
                            proxy: !0
                        }])
                    }, [A("section", [A("h3", [n._v(n._s(n.$t("on-startup")))]), A("p", {
                        staticClass: "flex items-center gap-2"
                    }, [A("input", {
                        attrs: {
                            checked: "",
                            type: "radio",
                            name: "startup",
                            id: "startup1",
                            value: "newtab"
                        }
                    }), A("label", {
                        attrs: {
                            for: "startup1"
                        }
                    }, [n._v(n._s(n.$t("open-new-tab")))])]), A("p", {
                        staticClass: "flex items-center gap-2"
                    }, [A("input", {
                        attrs: {
                            disabled: "",
                            type: "radio",
                            name: "startup",
                            id: "startup2",
                            value: "continue"
                        }
                    }), A("label", {
                        attrs: {
                            for: "startup2"
                        }
                    }, [n._v(n._s(n.$t("continue-left-off")))])]), A("p", {
                        staticClass: "flex items-center gap-2"
                    }, [A("input", {
                        attrs: {
                            disabled: "",
                            type: "radio",
                            name: "startup",
                            id: "startup3",
                            value: "specific"
                        }
                    }), A("label", {
                        attrs: {
                            for: "startup3"
                        }
                    }, [n._v(n._s(n.$t("open-specific-pages")))])])]), A("section", [A("h3", [n._v(n._s(n.$t("appearance")))]), A("p", {
                        staticClass: "flex gap-1"
                    }, [A("button", {
                        attrs: {
                            disabled: ""
                        }
                    }, [n._v(n._s(n.$t("get-themes")))]), A("button", {
                        attrs: {
                            disabled: ""
                        }
                    }, [n._v(n._s(n.$t("reset-default-theme")))])]), A("p", {
                        staticClass: "flex items-center gap-2"
                    }, [A("input", {
                        attrs: {
                            disabled: "",
                            checked: "",
                            type: "checkbox",
                            id: "showHomeButton"
                        }
                    }), A("label", {
                        attrs: {
                            for: "showHomeButton"
                        }
                    }, [n._v(n._s(n.$t("show-home-button")))])]), A("p", {
                        staticClass: "flex items-center gap-2"
                    }, [A("input", {
                        attrs: {
                            disabled: "",
                            type: "checkbox",
                            id: "showBookmarksBar"
                        }
                    }), A("label", {
                        attrs: {
                            for: "showBookmarksBar"
                        }
                    }, [n._v(n._s(n.$t("show-bookmarks-bar")))])])]), A("section", [A("h3", [n._v(n._s(n.$t("search")))]), A("i18n", {
                        attrs: {
                            path: "set-search-engine-info",
                            tag: "p"
                        }
                    }, [A("winui-link", {
                        attrs: {
                            target: "_blank",
                            href: "https://support.google.com/chrome?p=settings_omnibox",
                            text: "omnibox"
                        }
                    })], 1), A("p", {
                        staticClass: "flex items-center gap-1"
                    }, [A("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: n._searchEngine,
                            expression: "_searchEngine"
                        }],
                        on: {
                            change: function(e) {
                                var A = Array.prototype.filter.call(e.target.options, (function(n) {
                                    return n.selected
                                })).map((function(n) {
                                    var e = "_value" in n ? n._value : n.value;
                                    return e
                                }));
                                n._searchEngine = e.target.multiple ? A : A[0]
                            }
                        }
                    }, n._l(n.searchEngines, (function(e) {
                        return A("option", {
                            key: e.value,
                            domProps: {
                                value: e.value
                            }
                        }, [n._v(n._s(e.label))])
                    })), 0), A("button", {
                        attrs: {
                            disabled: ""
                        }
                    }, [n._v(n._s(n.$t("manage-search-engines")))])])], 1)])
                },
                F = [],
                W = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        staticClass: "flex chrome__internal"
                    }, [A("div", {
                        staticClass: "px-6 py-4 shrink-0 chrome__internal-sidebar"
                    }, [A("h2", [n._v("Chrome")]), A("ul", n._l(n.items, (function(e) {
                        return A("li", {
                            key: e.id,
                            class: {
                                active: e.id === n.activeItem
                            }
                        }, [A("button", {
                            on: {
                                click: e.click
                            }
                        }, [n._v(n._s(n.$t(e.id)))])])
                    })), 0)]), A("div", {
                        staticClass: "p-4 chrome__internal-main"
                    }, [A("h2", [n._t("title")], 2), n._t("default")], 2)])
                },
                q = [],
                K = {
                    props: {
                        activeItem: String
                    },
                    data() {
                        return {
                            items: [{
                                id: "history",
                                click: () => {}
                            }, {
                                id: "extensions",
                                click: () => {}
                            }, {
                                id: "settings",
                                click: () => {}
                            }, {
                                id: "help",
                                click: () => {
                                    u["a"].open({
                                        url: "https://visnalize.com/win7simu/simulated/chrome"
                                    })
                                }
                            }]
                        }
                    },
                    methods: {}
                },
                L = K,
                G = (A("ca43"), Object(C["a"])(L, W, q, !1, null, null, null)),
                _ = G.exports,
                Y = {
                    data() {
                        return {}
                    },
                    computed: { ...s["c"].mapState(["searchEngine", "searchEngines"]),
                        ...Object(k["d"])({
                            themeData: "themeData"
                        }),
                        warningIcon() {
                            return this.themeData.icon.warning
                        },
                        _searchEngine: {
                            get() {
                                return this.searchEngine
                            },
                            set(n) {
                                this[s["a"].SetSearchEngine](n)
                            }
                        }
                    },
                    methods: { ...s["c"].mapActions([s["a"].SetSearchEngine])
                    },
                    components: {
                        TabChrome: _
                    }
                },
                J = Y,
                j = Object(C["a"])(J, N, F, !1, null, null, null),
                z = j.exports,
                X = A("3b99"),
                Z = A("1521"),
                $ = A("1547");
            const nn = Object($["d"])("Xframe", {
                web: () => A.e("chunk-2d221815").then(A.bind(null, "cb44")).then(n => new n.XframeWeb)
            });
            var en = A("f106"),
                An = A("f708"),
                tn = A("25c3"),
                sn = A.n(tn),
                an = {
                    props: {
                        tabData: Object,
                        index: Number
                    },
                    data() {
                        return {
                            tab: this.tabData,
                            localFile: null,
                            ErrorPage: y,
                            xframeLoadListener: null,
                            xframeErrorListener: null,
                            menuOpened: !1,
                            menuItems: [{
                                label: this.$t("new-tab"),
                                shortcut: "Alt+T",
                                click: () => this.$emit("addTab")
                            }, {
                                label: this.$t("new-incognito-window"),
                                shortcut: "Alt+Shift+N",
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("bookmarks"),
                                click: () => {},
                                disabled: !0,
                                hasDivider: !0
                            }, {
                                label: this.$t("save-page-as"),
                                shortcut: "Alt+S",
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("find"),
                                shortcut: "Alt+F",
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("history"),
                                shortcut: "Alt+H",
                                click: () => {},
                                disabled: !0,
                                hasDivider: !0
                            }, {
                                label: this.$t("settings"),
                                click: () => this.$emit("openSettings")
                            }, {
                                label: this.$t("about-chrome"),
                                click: () => {},
                                disabled: !0
                            }, {
                                label: this.$t("help"),
                                click: () => u["a"].open({
                                    url: "https://visnalize.com/win7simu/simulated/chrome"
                                }),
                                hasDivider: !0
                            }, {
                                label: this.$t("exit"),
                                click: () => this.$emit("exit")
                            }]
                        }
                    },
                    computed: { ...s["c"].mapState({
                            searchEngine: "searchEngine",
                            searchEngines: "searchEngines"
                        }),
                        id() {
                            return "tab" + this.index
                        },
                        tabIcon() {
                            return "chrome://chrome" === this.tab.url ? "fa:chrome" : "chrome://chrome/settings" === this.tab.url ? "fa:wrench" : this.tab.favicon ? this.tab.favicon : "fa:globe"
                        },
                        displayUrl() {
                            return this.stripXframeSuffix(this.tab.url)
                        },
                        searchUrl() {
                            const n = this.searchEngines.find(n => n.value === this.searchEngine);
                            return (n || this.searchEngines[0]).url
                        }
                    },
                    watch: {
                        tabData(n) {
                            this.tab = n
                        },
                        "tab.historyIndex" (n) {
                            const {
                                history: e
                            } = this.tab;
                            e.length && (n > 0 && (this.tab.activeBack = !0), 0 === n && (this.tab.activeBack = !1), n < e.length - 1 && (this.tab.activeNext = !0), n >= e.length - 1 && (this.tab.activeNext = !1), this.updateTab())
                        },
                        "tab.url": {
                            immediate: !0,
                            handler(n) {
                                this.isLocalFile(n) && this.loadFile(n), "chrome://chrome" === n && (this.tab.title = "About"), "chrome://chrome/settings" === n && (this.tab.title = "Settings")
                            }
                        }
                    },
                    async mounted() {
                        this.focusAddress(), this.xframeLoadListener = await nn.addListener("onLoad", this.handleXframeLoad), this.xframeErrorListener = await nn.addListener("onError", this.handleXframeError)
                    },
                    beforeDestroy() {
                        var n, e;
                        null === (n = this.xframeLoadListener) || void 0 === n || n.remove(), null === (e = this.xframeErrorListener) || void 0 === e || e.remove(), this.localFile && en["a"].revoke(this.localFile)
                    },
                    methods: {
                        isValidUrl: h["h"],
                        appendXframeSuffix(n) {
                            return n.startsWith("chrome://") || this.isLocalFile(n) ? n : Object(c["b"])(n)
                        },
                        stripXframeSuffix(n) {
                            if (!n || n.startsWith("chrome://") || this.isLocalFile(n)) return n;
                            try {
                                const e = new URL(n);
                                return e.searchParams.delete("xframe"), e.toString()
                            } catch (e) {
                                return n
                            }
                        },
                        isLocalFile(n) {
                            return n.startsWith("/" + E["a"].External)
                        },
                        updateTab() {
                            this.$emit("update", {
                                index: this.index,
                                data: this.tab
                            })
                        },
                        load({
                            target: n
                        }) {
                            const e = n[0].value || "",
                                A = e.toLowerCase(),
                                t = this.stripXframeSuffix(this.tab.url).toLowerCase();
                            if (!A || A === t) return;
                            const i = Object(h["b"])(A);
                            Object(h["h"])(i) ? (this.tab.url = i, this.tab.isLoading = !0) : this.isLocalFile(e) ? this.tab.url = e : (this.tab.url = Object(h["b"])(this.searchUrl + A.replace(/ /g, "+")), this.tab.isLoading = !0), this.tab.url = this.appendXframeSuffix(this.tab.url), this.tab.error = !1, this.pushHistory()
                        },
                        handleIframeLoad() {
                            Object(An["a"])() || (this.tab.title = new URL(this.tab.url).hostname, this.handlePostLoad())
                        },
                        handleXframeLoad(n) {
                            const {
                                url: e,
                                title: A,
                                favicon: t
                            } = n;
                            Object(c["a"])(this.tab.url, e) && (this.tab.url = e, this.tab.title = A || new URL(e).hostname, this.tab.favicon = t, this.handlePostLoad())
                        },
                        handlePostLoad() {
                            this.tab.isLoading = !1, this.updateTab()
                        },
                        handleXframeError(n) {
                            Object(c["a"])(this.tab.url, n.url) && (this.tab.isLoading = !1, this.tab.error = !0, this.updateTab())
                        },
                        loadHome() {
                            this.tab.url && (this.tab.url = "", this.tab.title = "", this.tab.isLoading = !1, this.pushHistory())
                        },
                        async loadFile(n) {
                            this.tab.title = Object(l["c"])(n), this.localFile = await en["a"].read(n);
                            const e = "#file-viewer-" + this.index;
                            if (Object(l["k"])(n) && sn.a.embed(this.localFile, e, {
                                    PDFJS_URL: "/pdfjs/web/viewer.html"
                                }), Object(l["q"])(n)) {
                                const n = document.createElement("iframe");
                                n.srcdoc = this.localFile, this.$el.querySelector(e).innerHTML = "", this.$el.querySelector(e).appendChild(n)
                            }
                        },
                        navigate(n) {
                            let {
                                history: e,
                                historyIndex: A
                            } = this.tab;
                            if ("back" === n && A > 0) this.tab.url = e[--this.tab.historyIndex];
                            else {
                                if (!("next" === n && A < e.length - 1)) return;
                                this.tab.url = e[++this.tab.historyIndex]
                            }
                            this.tab.isLoading = "" !== this.tab.url && !this.isLocalFile(this.tab.url), this.tab.title = "" === this.tab.url ? "" : this.tab.title, this.tab.error = !1, this.updateTab()
                        },
                        pushHistory() {
                            this.tab.historyIndex++, this.tab.history = this.tab.history.slice(0, this.tab.historyIndex), this.tab.history.push(this.tab.url), this.updateTab()
                        },
                        reload() {
                            if (Object(h["h"])(this.tab.url)) {
                                const n = this.$el.querySelector("iframe");
                                n.src = this.tab.url
                            }
                            this.isLocalFile(this.tab.url) && this.loadFile(this.tab.url)
                        },
                        focusAddress() {
                            const n = this.$refs.addressInput;
                            n.select()
                        },
                        handleMenuClickOutside(n) {
                            const e = this.$refs.menuButton;
                            e.$el.contains(n.target) || (this.menuOpened = !1)
                        }
                    },
                    components: {
                        ChromeAddressbarButton: I,
                        SpinnerRing: M["a"],
                        BaseMenu: d["a"],
                        TabBlank: O,
                        TabChromeSettings: z,
                        WindowAddressbar: X["a"],
                        WindowBody: Z["a"]
                    }
                },
                on = an,
                rn = (A("328d"), Object(C["a"])(on, o, r, !1, null, null, null)),
                cn = rn.exports,
                hn = A("6792"),
                ln = A("096e"),
                dn = A("e863"),
                un = A("1d26"),
                mn = A("e314"),
                pn = A("2ea7"),
                gn = A("e716"),
                fn = {
                    components: {
                        WindowControls: dn["a"],
                        WindowTitlebar: mn["a"],
                        WindowMain: un["a"],
                        ChromeTab: cn,
                        MessageBrowser: ln["a"]
                    },
                    data() {
                        const {
                            themeData: n
                        } = this.$store.getters, e = {
                            title: "",
                            url: "",
                            favicon: "fa:globe",
                            isLoading: !1,
                            isActive: !0,
                            error: !1,
                            activeBack: !1,
                            activeNext: !1,
                            history: [],
                            historyIndex: -1
                        };
                        return {
                            id: "chrome",
                            icon: n.icon.chrome,
                            tabs: [{ ...e
                            }],
                            newTab: e
                        }
                    },
                    computed: a["c"].mapState(["tempData"]),
                    watch: {
                        tabs() {
                            this.$nextTick().then(this.renderTabs).then(() => {
                                this.tabs.length <= 3 || this.$el.querySelectorAll(".tab").forEach(n => {
                                    n.style.width = 100 / (this.tabs.length + 1) + "%", this.$el.querySelector(".tabs").scrollLeft = n.offsetLeft
                                })
                            })
                        },
                        tempData: {
                            immediate: !0,
                            async handler(n) {
                                n && n.path && Object(h["g"])(n.path, "chrome") && (this.addTab({
                                    url: n.path
                                }), this[a["a"].ClearTempData]())
                            }
                        }
                    },
                    mounted() {
                        const n = () => {
                            this.addTab()
                        };
                        this[s["a"].InitSettings](), this.renderTabs(), pn["default"].on("alt+t", n, "New Tab", this.id)
                    },
                    methods: { ...a["c"].mapMutations([a["a"].ClearTempData]),
                        ...s["c"].mapActions([s["a"].InitSettings]),
                        renderTabs() {
                            Object(gn["a"])(this.$refs.tabs, {
                                anchor: !1,
                                closable: !0,
                                addTab: this.addTab,
                                onActive: this.activateTab,
                                onClose: this.closeTab,
                                tabsClass: "chrome__tab-list",
                                tabClass: "chrome__tab-item",
                                selClass: "is-selected",
                                sectionClass: "chrome__tab-body",
                                addTabClass: "chrome__tab-add"
                            })
                        },
                        async addTab(n) {
                            const {
                                length: e
                            } = this.tabs;
                            this.tabs.push({ ...this.newTab,
                                ...n || {}
                            }), await this.$nextTick(), this.activateTab(e - 1), e > 15 && this.$bus.$emit("changeView", {
                                view: "Bsod",
                                error: "LEAKED_MEMORY"
                            })
                        },
                        activateTab(n) {
                            const e = "number" === typeof n,
                                A = e ? n : +n.split("tab")[1];
                            this.tabs.forEach((n, e) => this.tabs[e].isActive = !1), this.tabs[A].isActive = !0
                        },
                        updateTab({
                            index: n,
                            data: e
                        }) {
                            this.tabs.splice(n, 1, e), this.activateTab(n)
                        },
                        closeTab(n) {
                            if (1 === this.tabs.length) return this.exit();
                            const e = +n.split("tab")[1],
                                [A] = this.tabs.splice(e, 1);
                            A.isActive && this.activateTab(Math.max(e - 1, 0))
                        },
                        exit() {
                            this.$root.$emit(hn["c"].CloseWindow, this.id)
                        }
                    }
                },
                Cn = fn,
                bn = (A("e26f"), Object(C["a"])(Cn, t, i, !1, null, null, null));
            e["default"] = bn.exports
        },
        "617a": function(n, e, A) {
            "use strict";
            A.d(e, "b", (function() {
                return i
            })), A.d(e, "a", (function() {
                return s
            }));
            var t = A("f708");

            function i(n) {
                if (!n) throw new Error("URL is required");
                if (!Object(t["a"])()) return n;
                const e = n.includes("www.") ? n : n.replace("://", "://www.");
                return e + (e.includes("?") ? "&" : "?") + "xframe=true"
            }

            function s(n, e) {
                try {
                    const A = new URL(n),
                        t = new URL(e);
                    return A.href === t.href
                } catch (A) {
                    return n === e
                }
            }
        },
        "67ac": function(n, e, A) {
            "use strict";
            A("15f0")
        },
        "694c": function(n, e, A) {
            "use strict";
            A.d(e, "b", (function() {
                return s
            })), A.d(e, "c", (function() {
                return a
            })), A.d(e, "a", (function() {
                return o
            }));
            var t = A("2f62");
            const i = {
                    SetTempData: "setTempData",
                    ClearTempData: "clearTempData",
                    OpenContextMenu: "openContextMenu",
                    SelectItem: "selectItem",
                    RenameItem: "renameItem"
                },
                s = "fileexplorer",
                a = Object(t["a"])(s),
                o = i;
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
                    [i.SetTempData](n, e) {
                        n.tempData = e
                    },
                    [i.ClearTempData](n) {
                        n.tempData = void 0
                    },
                    [i.OpenContextMenu](n, e) {
                        n.contextMenu = e
                    },
                    [i.SelectItem](n, e) {
                        n.selectedItemPath = e
                    },
                    [i.RenameItem](n, e) {
                        n.renamingItemPath = e
                    }
                },
                actions: {}
            }
        },
        7073: function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("div", {
                        class: ["p-3 window__footer", {
                            "flex justify-end": "action" === n.variant
                        }]
                    }, [n._t("default")], 2)
                },
                i = [],
                s = {
                    props: {
                        variant: String
                    }
                },
                a = s,
                o = A("2877"),
                r = Object(o["a"])(a, t, i, !1, null, null, null);
            e["a"] = r.exports
        },
        "7839a": function(n, e, A) {},
        "85bd": function(n, e, A) {},
        "8c2e": function(n, e, A) {},
        "90b3": function(n, e, A) {
            "use strict";
            A.d(e, "b", (function() {
                return a
            })), A.d(e, "c", (function() {
                return o
            })), A.d(e, "a", (function() {
                return r
            }));
            var t = A("968c"),
                i = A("2f62");
            const s = {
                    InitSettings: "InitSettings",
                    SetSearchEngine: "SetSearchEngine"
                },
                a = "chrome",
                o = Object(i["a"])(a),
                r = s;
            e["d"] = {
                namespaced: !0,
                state() {
                    return {
                        searchEngine: "google",
                        searchEngines: [{
                            value: "google",
                            label: "Google",
                            url: "google.com/search?q="
                        }, {
                            value: "bing",
                            label: "Bing",
                            url: "bing.com/search?q="
                        }, {
                            value: "yahoo",
                            label: "Yahoo",
                            url: "search.yahoo.com/search?p="
                        }, {
                            value: "baidu",
                            label: "Baidu",
                            url: "baidu.com/s?wd="
                        }, {
                            value: "yandex",
                            label: "Yandex",
                            url: "yandex.com/search/?text="
                        }, {
                            value: "duckduckgo",
                            label: "DuckDuckGo",
                            url: "duckduckgo.com/?q="
                        }]
                    }
                },
                getters: {},
                mutations: {
                    [s.SetSearchEngine]: (n, e) => {
                        n.searchEngine = e
                    }
                },
                actions: {
                    [s.InitSettings]: async ({
                        commit: n,
                        rootState: e,
                        state: A
                    }) => {
                        const i = await t["default"].local.get("chrome", e.user);
                        n(s.SetSearchEngine, (null === i || void 0 === i ? void 0 : i.searchEngine) || A.searchEngine)
                    },
                    [s.SetSearchEngine]: ({
                        commit: n,
                        rootState: e
                    }, A) => (n(s.SetSearchEngine, A), t["default"].local.update("chrome", e.user, {
                        searchEngine: A
                    }))
                }
            }
        },
        9204: function(n, e, A) {
            "use strict";
            A("18b8")
        },
        9312: function(n, e, A) {
            "use strict";
            A("eb0f")
        },
        a419: function(n, e, A) {},
        c165: function(n, e, A) {
            "use strict";
            A("d3d8")
        },
        ca43: function(n, e, A) {
            "use strict";
            A("7839a")
        },
        d3d8: function(n, e, A) {},
        e26f: function(n, e, A) {
            "use strict";
            A("a419")
        },
        e716: function(n, e, A) {
            "use strict";

            function t(n, e) {
                var A, t = {
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
                    i = {},
                    s = "";

                function a() {
                    A = n.querySelector("." + t.tabsClass), A && n.removeChild(A), A = document.createElement("nav"), A.classList.add(t.tabsClass), n.classList.add("tinytabs"), n.prepend(A);
                    var e = n.querySelectorAll("." + t.sectionClass);
                    Array.from(e).forEach((e, a) => {
                        var r = e.getAttribute("id"),
                            h = e.querySelector("." + t.titleClass),
                            l = e.hasAttribute("default"),
                            d = e.hasAttribute("hidden");
                        if (e.setAttribute("data-test-tab-section", r), !r) return !0;
                        (0 === a || l) && (s = r), i[r] = e, t.hideTitle && o(h);
                        var u = document.createElement("a");
                        if (u.classList.add(t.tabClass, "tab-" + r), u.setAttribute("href", "#tab-" + r), u.setAttribute("data-id", r), u.setAttribute("data-test-tab-button", r), u.innerHTML = `<span>${h.innerHTML}</span>`, u.hidden = d, u.onclick = function() {
                                return t.onActive && t.onActive(r), c(r), t.anchor
                            }, t.closable) {
                            var m = document.createElement("span");
                            m.classList.add("close"), m.setAttribute("data-id", "close-" + r), m.setAttribute("data-test-tab-close", r), m.innerHTML = "×", m.onclick = function(e) {
                                var i = e.currentTarget,
                                    s = i.getAttribute("data-id").split("-")[1],
                                    a = document.querySelector(".tab-" + s),
                                    o = a.nextElementSibling,
                                    h = a.previousElementSibling;
                                return t.onClose && (n.removeChild(A), t.onClose(r)), o ? c(o.getAttribute("data-id")) : h && c(h.getAttribute("data-id")), e.stopPropagation(), !1
                            }, u.appendChild(m)
                        }
                        A.appendChild(u)
                    });
                    var a = document.location.hash.replace("#tab-", "");
                    if (t.anchor && a ? c(a) : c(s), t.addTab) {
                        var r = document.createElement("button");
                        r.className = t.addTabClass, r.setAttribute("data-test-tab-add", "true"), r.onclick = () => t.addTab(), A.appendChild(r)
                    }
                }

                function o(n) {
                    n.style.display = "none"
                }

                function r(n) {
                    n.style.display = ""
                }

                function c(n) {
                    if (!i[n]) return !1;
                    h();
                    var e = A.querySelector(".tab-" + n);
                    return e && e.classList.add(t.selClass), t.onBefore && t.onBefore(n, e), r(i[n]), t.onAfter && t.onAfter(n, e), t.anchor && (document.location.href = "#tab-" + n), !0
                }

                function h() {
                    Array.from(A.querySelectorAll("." + t.tabClass)).map(n => n.classList.remove(t.selClass)), Object.values(i).map(o)
                }
                t = Object.assign(t, e), a()
            }
            A.d(e, "a", (function() {
                return t
            }))
        },
        eb0f: function(n, e, A) {},
        fceb: function(n, e, A) {
            "use strict";
            var t = function() {
                    var n = this,
                        e = n.$createElement,
                        A = n._self._c || e;
                    return A("window-main-static", {
                        attrs: {
                            parent: n.parent,
                            variant: "message"
                        }
                    }, [A("window-titlebar", {
                        attrs: {
                            title: n.title
                        }
                    }, [A("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            theme: n.theme,
                            close: function() {
                                return n.$emit("close")
                            }
                        }
                    })], 1), A("window-body", {
                        class: n.containerClass,
                        attrs: {
                            layout: "message"
                        }
                    }, [n.icon ? A("div", {
                        staticClass: "flex"
                    }, [A("base-icon", {
                        attrs: {
                            icon: n.icon
                        }
                    }), n.noPreTag ? n._t("default") : A("pre", {
                        staticClass: "p-2 font-[inherit] whitespace-pre-wrap"
                    }, [n._t("default")], 2)], 2) : [n._t("default")]], 2), A("window-footer", {
                        attrs: {
                            variant: "action"
                        }
                    }, [n._t("footer")], 2)], 1)
                },
                i = [],
                s = A("58cd"),
                a = A("1521"),
                o = A("e863"),
                r = A("7073"),
                c = A("411e"),
                h = A("e314"),
                l = A("2f62"),
                d = {
                    props: {
                        type: {
                            type: String,
                            validator: n => ["warning", "error"].includes(n)
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
                            const n = this.theme ? this.themeAssets[this.theme] : this.themeData;
                            return n.icon[this.type]
                        }
                    },
                    components: {
                        BaseIcon: s["a"],
                        WindowBody: a["a"],
                        WindowFooter: r["a"],
                        WindowMainStatic: c["a"],
                        WindowControls: o["a"],
                        WindowTitlebar: h["a"]
                    }
                },
                u = d,
                m = (A("67ac"), A("2877")),
                p = Object(m["a"])(u, t, i, !1, null, null, null);
            e["a"] = p.exports
        }
    }
]);