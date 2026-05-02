(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["camera"], {
        2164: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "fragment"
                    }, [a("window-main", {
                        staticClass: "is-camera",
                        attrs: {
                            id: "window-" + t.id,
                            lock: t.isLocked
                        }
                    }, [a("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: t.$t(t.id)
                        }
                    }, [a("window-controls")], 1), a("window-body", {
                        staticClass: "gap-2.5"
                    }, [a("video", {
                        ref: "video",
                        staticClass: "w-full min-w-0 h-full"
                    }), a("div", {
                        staticClass: "flex flex-col justify-evenly items-end"
                    }, [a("button", {
                        staticClass: "center-flex hover:bg-white p-0 border-2 border-white border-solid rounded-full w-12 h-12 text-white hover:text-black transition",
                        on: {
                            click: t.switchFacing
                        }
                    }, [a("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "fa:refresh"
                        }
                    })], 1), a("button", {
                        staticClass: "center-flex bg-white hover:shadow-[0_0_0_3px_#fff] p-0 border-2 border-black border-solid rounded-full w-20 h-20 text-black transition",
                        on: {
                            click: t.captureImage
                        }
                    }, [a("iconify-icon", {
                        staticClass: "text-2xl",
                        attrs: {
                            icon: "fa:camera-retro"
                        }
                    })], 1), a("button", {
                        staticClass: "center-flex hover:bg-white p-0 border-2 border-white border-solid rounded-full w-12 h-12 text-white hover:text-black transition",
                        on: {
                            click: t.toggleShowConfig
                        }
                    }, [a("iconify-icon", {
                        staticClass: "text-xl",
                        attrs: {
                            icon: "fa:info"
                        }
                    })], 1)])])], 1), t.error ? a("message-error", {
                        on: {
                            close: function(e) {
                                t.error = null
                            }
                        }
                    }, [t._v(t._s(t.error) + ".")]) : t._e(), t.showConfig ? a("window-main-static", {
                        attrs: {
                            variant: "help"
                        }
                    }, [a("window-titlebar", {
                        attrs: {
                            title: t.$t("camera")
                        }
                    }, [a("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleShowConfig
                        }
                    })], 1), a("window-body", {
                        staticClass: "gap-1",
                        attrs: {
                            layout: "dialog"
                        }
                    }, [a("div", {
                        staticClass: "center-flex-x"
                    }, [a("span", {
                        staticClass: "min-w-36"
                    }, [t._v(t._s(t.$t("resolution")) + ":")]), t._v(" 1280x720 ")]), a("div", {
                        staticClass: "center-flex-x"
                    }, [a("span", {
                        staticClass: "min-w-36"
                    }, [t._v(t._s(t.$t("format")) + ":")]), t._v(" JPEG ")]), a("div", {
                        staticClass: "center-flex-x"
                    }, [a("span", {
                        staticClass: "min-w-36"
                    }, [t._v(t._s(t.$t("quality")) + ":")]), t._v(" 100% ")]), a("div", {
                        staticClass: "flex justify-end mt-4"
                    }, [a("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleShowConfig(e)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("ok")) + " ")]), a("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleShowConfig(e)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("cancel")) + " ")])], 1)])], 1) : t._e(), t.canSave ? a("dialog-save", {
                        attrs: {
                            parent: t.id,
                            dialogIcon: t.id,
                            dialogName: "save-as",
                            content: t.image,
                            fileName: t.fileName,
                            fileTypes: t.fileTypes
                        },
                        on: {
                            cancel: function(e) {
                                t.canSave = !1
                            },
                            done: function(e) {
                                t.canSave = !1
                            }
                        }
                    }) : t._e()], 1)
                },
                s = [],
                n = a("9d9e"),
                o = a("3780"),
                r = a("1521"),
                c = a("e863"),
                l = a("1d26"),
                f = a("411e"),
                d = a("e314"),
                u = a("0fbc"),
                h = {
                    data() {
                        return {
                            id: "camera",
                            stream: null,
                            error: null,
                            image: null,
                            showConfig: !1,
                            canSave: !1,
                            faceFront: !0,
                            fileName: Date.now().toString(),
                            fileTypes: {
                                jpeg: "JPEG file (*.jpeg)"
                            }
                        }
                    },
                    computed: {
                        isLocked() {
                            return !!this.error || this.showConfig || this.canSave
                        }
                    },
                    mounted() {
                        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return this.showError({
                            name: "NotSupportedError",
                            message: "Camera is not supported on this device"
                        });
                        this.getCamera()
                    },
                    destroyed() {
                        this.clearStream()
                    },
                    methods: {
                        getCamera() {
                            this.clearStream();
                            const t = {
                                width: 1280,
                                height: 720,
                                facingMode: this.faceFront ? "user" : "environment"
                            };
                            navigator.mediaDevices.getUserMedia({
                                video: t
                            }).then(this.captureStream).catch(this.showError)
                        },
                        captureStream(t) {
                            const {
                                video: e
                            } = this.$refs;
                            e.srcObject = t, e.onloadedmetadata = () => {
                                e.play(), this.stream = t
                            }
                        },
                        clearStream() {
                            if (!this.stream) return;
                            const [t] = this.stream.getVideoTracks();
                            t.stop()
                        },
                        captureImage() {
                            if (!this.stream) return;
                            const [t] = this.stream.getVideoTracks(), {
                                width: e,
                                height: a
                            } = t.getSettings();
                            this.image = Object(u["i"])(this.$refs.video, e, a), this.canSave = !0
                        },
                        switchFacing() {
                            this.faceFront = !this.faceFront, this.getCamera()
                        },
                        toggleShowConfig() {
                            this.showConfig = !this.showConfig
                        },
                        showError(t) {
                            this.error = t.message
                        }
                    },
                    components: {
                        WindowControls: c["a"],
                        WindowTitlebar: d["a"],
                        WindowMain: l["a"],
                        WindowBody: r["a"],
                        WindowMainStatic: f["a"],
                        MessageError: o["a"],
                        DialogSave: n["a"]
                    }
                },
                m = h,
                p = (a("fe69"), a("2877")),
                g = Object(p["a"])(m, i, s, !1, null, null, null);
            e["default"] = g.exports
        },
        "9d9e": function(t, e, a) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "fragment"
                    }, [a("computer", {
                        attrs: {
                            dialog: "",
                            dialogIcon: t.dialogIcon,
                            dialogName: t.dialogName,
                            filter: ["directory"],
                            lock: t.showConfirmReplace,
                            parent: t.parent
                        },
                        on: {
                            close: t.cancel,
                            change: t.setPath
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [a("div", {
                                    staticClass: "center-flex-x gap-2 mb-1"
                                }, [a("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("file-name")) + ":")]), a("winui-textbox", {
                                    staticClass: "flex-1",
                                    on: {
                                        keyup: function(e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.saveFile(e)
                                        }
                                    },
                                    model: {
                                        value: t.name,
                                        callback: function(e) {
                                            t.name = e
                                        },
                                        expression: "name"
                                    }
                                })], 1), a("div", {
                                    staticClass: "center-flex-x gap-2 mb-2"
                                }, [a("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("save-as")) + ":")]), a("winui-dropdown", {
                                    staticClass: "flex-1",
                                    model: {
                                        value: t.type,
                                        callback: function(e) {
                                            t.type = e
                                        },
                                        expression: "type"
                                    }
                                }, t._l(t.fileTypes, (function(e, i) {
                                    return a("option", {
                                        key: i,
                                        domProps: {
                                            value: i
                                        }
                                    }, [t._v(" " + t._s(t.fileTypes[i]) + " ")])
                                })), 0)], 1), a("div", {
                                    staticClass: "flex justify-end"
                                }, [a("winui-button", {
                                    staticClass: "default",
                                    attrs: {
                                        disabled: !t.canSave
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.saveFile(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("save")) + " ")]), a("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.cancel(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("cancel")) + " ")])], 1)]
                            },
                            proxy: !0
                        }])
                    }), t.showConfirmReplace ? a("confirm-replace", {
                        attrs: {
                            title: t.$t(t.dialogName)
                        },
                        on: {
                            yes: function() {
                                return t.save(!0)
                            },
                            no: t.toggleConfirmReplace
                        }
                    }) : t._e()], 1)
                },
                s = [],
                n = a("4cca"),
                o = a("b47a"),
                r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("base-message", {
                        attrs: {
                            noPreTag: "",
                            type: "warning",
                            title: t.title
                        },
                        on: {
                            close: function(e) {
                                return t.$emit("no")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [a("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return t.$emit("yes")
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("yes")) + " ")]), a("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(e) {
                                            return t.$emit("no")
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("no")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [a("div", {
                        staticClass: "ml-3"
                    }, [t._v(" " + t._s(t.$t("filename-exist")) + " " + t._s(t.$t("confirm-replace")) + " ")])])
                },
                c = [],
                l = a("fceb"),
                f = {
                    props: {
                        title: String
                    },
                    components: {
                        BaseMessage: l["a"]
                    }
                },
                d = f,
                u = a("2877"),
                h = Object(u["a"])(d, r, c, !1, null, null, null),
                m = h.exports,
                p = a("04a5"),
                g = a("01b4"),
                w = a("0fbc"),
                v = a("f106"),
                b = a("2f62"),
                C = a("0e9a"),
                y = a("51e6"),
                _ = {
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
                            name: Object(C["r"])(this.fileName).name,
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
                        setPath(t) {
                            this.path = t
                        },
                        saveFile() {
                            return this.save()
                        },
                        async save(t = !1) {
                            if (!this.canSave) return;
                            const e = this.content,
                                {
                                    path: a,
                                    fullName: i
                                } = this,
                                s = `${a}/${i}`;
                            let o = null;
                            o = this.parse ? this.parse(this.type) : e instanceof HTMLCanvasElement ? await Object(w["f"])(e, "image/" + this.type) : e;
                            try {
                                if (a === this.desktopPath) await this.$store.dispatch(g["a"].ShortcutAdd, {
                                    lbl: i,
                                    key: Object(n["b"])(i),
                                    icon: Object(n["e"])(i),
                                    data: o,
                                    type: "file",
                                    overwrite: t
                                });
                                else {
                                    const e = await v["a"].isExisting(s, a);
                                    if (e && !t) throw new Error(p["a"].NAME_EXISTS);
                                    await v["a"].write(o, s)
                                }
                                let e = 0;
                                o instanceof ArrayBuffer ? e = o.byteLength : "string" === typeof o && (e = (new TextEncoder).encode(o).length), this.$emit("done", {
                                    name: i,
                                    path: s,
                                    size: e
                                })
                            } catch (r) {
                                const t = r.message || r;
                                t === p["a"].NAME_EXISTS ? this.toggleConfirmReplace() : Object(y["showToast"])(t)
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
                        Computer: o["default"],
                        ConfirmReplace: m
                    }
                },
                x = _,
                k = Object(u["a"])(x, i, s, !1, null, null, null);
            e["a"] = k.exports
        },
        cf43: function(t, e, a) {},
        fe69: function(t, e, a) {
            "use strict";
            a("cf43")
        }
    }
]);