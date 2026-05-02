(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["recorder"], {
        "01ef": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("window-main", {
                        staticClass: "is-recorder",
                        attrs: {
                            id: "window-" + e.id,
                            w: 480,
                            h: 90,
                            centered: "",
                            lock: e.canSave || e.error,
                            resizable: !1
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: e.id,
                            title: e.$t(e.id)
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: e.close
                        }
                    })], 1), n("window-body", [n("button", {
                        class: ["recorder__button", {
                            recording: e.isRecording
                        }],
                        attrs: {
                            disabled: e.isRecording && !e.recorder
                        },
                        on: {
                            click: e.toggleRecord
                        }
                    }, [e._v(" " + e._s(e.isRecording ? e.$t("stop") : e.$t("start")) + " ")]), n("span", [e._v(e._s(e.time))]), n("winui-progress", {
                        attrs: {
                            progress: e.frequency
                        }
                    }), n("button", {
                        staticClass: "center-flex recorder__button is-help"
                    }, [n("base-icon", {
                        attrs: {
                            icon: e.themeData.icon.help
                        }
                    })], 1)], 1)], 1), e.error ? n("message-error", {
                        on: {
                            close: function(t) {
                                e.error = null
                            }
                        }
                    }, [e._v(e._s(e.error) + ".")]) : e._e(), e.canSave ? n("dialog-save", {
                        attrs: {
                            parent: e.id,
                            dialogIcon: e.id,
                            dialogName: "save-as",
                            fileName: Date.now().toString(),
                            fileTypes: {
                                wav: "Waveform Audio File (*.wav)"
                            },
                            content: e.content
                        },
                        on: {
                            cancel: function(t) {
                                e.canSave = !1
                            },
                            done: function(t) {
                                e.canSave = !1
                            }
                        }
                    }) : e._e()], 1)
                },
                a = [],
                r = n("58cd"),
                s = n("9d9e"),
                o = n("6792"),
                c = n("3780"),
                l = n("1521"),
                u = n("e863"),
                d = n("1d26"),
                h = n("e314"),
                f = n("0fbc"),
                p = n("a146"),
                m = n("2f62"),
                g = {
                    data() {
                        return {
                            id: "recorder",
                            isRecording: !1,
                            canSave: !1,
                            count: 0,
                            timer: null,
                            framer: null,
                            error: null,
                            stream: null,
                            recorder: null,
                            analyzer: null,
                            content: null,
                            frequency: 0,
                            chunks: []
                        }
                    },
                    computed: { ...Object(m["d"])({
                            themeData: "themeData"
                        }),
                        time() {
                            return Object(p["d"])(this.count, !0)
                        }
                    },
                    mounted() {
                        navigator.mediaDevices && navigator.mediaDevices.getUserMedia || this.showError({
                            name: "NotSupportedError",
                            message: "Microphone is not supported on this device"
                        })
                    },
                    methods: {
                        toggleRecord() {
                            this.isRecording = !this.isRecording, this.isRecording ? this.start() : this.stop()
                        },
                        toggleSave() {
                            this.canSave = !this.canSave
                        },
                        start() {
                            this.error || navigator.mediaDevices.getUserMedia({
                                audio: !0,
                                video: !1
                            }).then(this.capture).catch(this.showError)
                        },
                        stop() {
                            if (clearInterval(this.timer), cancelAnimationFrame(this.framer), this.count = 0, this.frequency = 0, this.recorder && (this.recorder.stop(), this.recorder = null), this.stream) {
                                const [e] = this.stream.getAudioTracks();
                                e.stop()
                            }
                        },
                        capture(e) {
                            this.canSave = !1, this.timer = setInterval(() => this.count++, 1e3), this.stream = e, this.recorder = new MediaRecorder(e, {
                                mimeType: "audio/webm"
                            }), this.recorder.ondataavailable = e => this.chunks.push(e.data), this.recorder.onstop = this.save, this.recorder.start(), this.chunks = [], this.visualize(e)
                        },
                        visualize(e) {
                            const t = new(window.AudioContext || window.webkitAudioContext),
                                n = t.createAnalyser();
                            n.fftSize = 32, t.createMediaStreamSource(e).connect(n);
                            const i = new Uint8Array(n.frequencyBinCount),
                                a = () => {
                                    this.framer = requestAnimationFrame(a);
                                    const e = i.reduce((e, t) => e + t, 0);
                                    n.getByteFrequencyData(i), this.frequency = e / (2 * i.length)
                                };
                            a()
                        },
                        async save() {
                            this.content = await Object(f["d"])(new Blob(this.chunks)), this.canSave = !0
                        },
                        close() {
                            this.stop(), this.$root.$emit(o["c"].CloseWindow, this.id)
                        },
                        showError(e) {
                            this.error = e.message
                        }
                    },
                    components: {
                        WindowControls: u["a"],
                        WindowTitlebar: h["a"],
                        WindowMain: d["a"],
                        WindowBody: l["a"],
                        MessageError: c["a"],
                        BaseIcon: r["a"],
                        DialogSave: s["a"]
                    }
                },
                v = g,
                w = (n("973a"), n("2877")),
                b = Object(w["a"])(v, i, a, !1, null, null, null);
            t["default"] = b.exports
        },
        4804: function(e, t, n) {},
        "973a": function(e, t, n) {
            "use strict";
            n("4804")
        },
        "9d9e": function(e, t, n) {
            "use strict";
            var i = function() {
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
                                }, e._l(e.fileTypes, (function(t, i) {
                                    return n("option", {
                                        key: i,
                                        domProps: {
                                            value: i
                                        }
                                    }, [e._v(" " + e._s(e.fileTypes[i]) + " ")])
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
                a = [],
                r = n("4cca"),
                s = n("b47a"),
                o = function() {
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
                c = [],
                l = n("fceb"),
                u = {
                    props: {
                        title: String
                    },
                    components: {
                        BaseMessage: l["a"]
                    }
                },
                d = u,
                h = n("2877"),
                f = Object(h["a"])(d, o, c, !1, null, null, null),
                p = f.exports,
                m = n("04a5"),
                g = n("01b4"),
                v = n("0fbc"),
                w = n("f106"),
                b = n("2f62"),
                y = n("0e9a"),
                _ = n("51e6"),
                C = {
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
                                    fullName: i
                                } = this,
                                a = `${n}/${i}`;
                            let s = null;
                            s = this.parse ? this.parse(this.type) : t instanceof HTMLCanvasElement ? await Object(v["f"])(t, "image/" + this.type) : t;
                            try {
                                if (n === this.desktopPath) await this.$store.dispatch(g["a"].ShortcutAdd, {
                                    lbl: i,
                                    key: Object(r["b"])(i),
                                    icon: Object(r["e"])(i),
                                    data: s,
                                    type: "file",
                                    overwrite: e
                                });
                                else {
                                    const t = await w["a"].isExisting(a, n);
                                    if (t && !e) throw new Error(m["a"].NAME_EXISTS);
                                    await w["a"].write(s, a)
                                }
                                let t = 0;
                                s instanceof ArrayBuffer ? t = s.byteLength : "string" === typeof s && (t = (new TextEncoder).encode(s).length), this.$emit("done", {
                                    name: i,
                                    path: a,
                                    size: t
                                })
                            } catch (o) {
                                const e = o.message || o;
                                e === m["a"].NAME_EXISTS ? this.toggleConfirmReplace() : Object(_["showToast"])(e)
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
                        Computer: s["default"],
                        ConfirmReplace: p
                    }
                },
                S = C,
                k = Object(h["a"])(S, i, a, !1, null, null, null);
            t["a"] = k.exports
        },
        a146: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            }));
            var i = n("0f35");

            function a(e, t) {
                const n = 60;
                return e >= n ? `${Object(i["k"])(Number((e/n).toFixed()))}:${Object(i["k"])(e%n)}` : t ? "00:" + Object(i["k"])(e) : e + " seconds"
            }

            function r(e) {
                return new Date(e).toLocaleDateString("en-US")
            }
            const s = {
                    PurblePlace: "purbleplace",
                    PurblePair: "purblepair",
                    PurbleShop: "purbleshop",
                    ComfyCakes: "comfycakes"
                },
                o = {
                    Master: "Purble Master",
                    Champ: "Champion of Logic",
                    Detective: "Senior Detective"
                }
        }
    }
]);