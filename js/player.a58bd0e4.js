(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["player"], {
        "043f": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("fieldset", {
                        class: ["center-flex gap-2 m-auto px-4 border border-black/20 border-solid rounded-full h-[32px] media__control-list", {
                            "is-dark": t.isDark
                        }],
                        attrs: {
                            disabled: t.disabled
                        }
                    }, [t._t("default")], 2)
                },
                a = [],
                n = {
                    props: {
                        disabled: Boolean,
                        isDark: Boolean
                    }
                },
                o = n,
                r = (i("444c"), i("2877")),
                l = Object(r["a"])(o, s, a, !1, null, null, null);
            e["a"] = l.exports
        },
        "13f0": function(t, e, i) {},
        "266d": function(t, e, i) {
            "use strict";
            i("6075")
        },
        3845: function(t, e, i) {},
        "40e0": function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i(t.$slots.default ? "div" : "button", {
                        tag: "component",
                        class: ["center-flex p-0 border border-transparent border-solid rounded-[3px] w-[24px] h-[24px] text-center media__control-item", {
                            "is-active bg-black/10": t.active,
                            "has-icon": !!t.icon
                        }],
                        attrs: {
                            disabled: t.disabled
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    }, [t.icon ? i("iconify-icon", {
                        staticClass: "media__control-icon",
                        attrs: {
                            icon: t.icon
                        }
                    }) : t._t("default")], 2)
                },
                a = [],
                n = {
                    props: {
                        icon: String,
                        active: Boolean,
                        disabled: Boolean
                    }
                },
                o = n,
                r = (i("4f45"), i("2877")),
                l = Object(r["a"])(o, s, a, !1, null, null, null);
            e["a"] = l.exports
        },
        "444c": function(t, e, i) {
            "use strict";
            i("13f0")
        },
        "4f45": function(t, e, i) {
            "use strict";
            i("3845")
        },
        6075: function(t, e, i) {},
        "9b15": function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = this,
                        i = e.$createElement,
                        s = e._self._c || i;
                    return s("div", {
                        staticClass: "fragment"
                    }, [s("window-main", {
                        class: ["is-player", {
                            "is-playing": e.isPlaying
                        }],
                        attrs: {
                            id: "window-" + e.id,
                            lock: e.showOpenDialog
                        },
                        on: {
                            resize: e.handleResize
                        }
                    }, [s("window-titlebar", {
                        attrs: {
                            icon: e.id,
                            title: e.$t(e.id)
                        }
                    }, [s("window-controls", {
                        attrs: {
                            close: e.exit
                        }
                    })], 1), s("window-addressbar", [s("window-addressbar-nav"), s("div", {
                        staticClass: "center-flex-x"
                    }, [s("window-addressbar-item", {
                        attrs: {
                            location: e.$t("library")
                        }
                    }), s("window-addressbar-item", {
                        attrs: {
                            location: e.library
                        }
                    })], 1)], 1), s("window-menubar", {
                        attrs: {
                            items: e.toolbar
                        }
                    }), s("window-body", {
                        class: {
                            "has-list": e.showList
                        }
                    }, [e.isPlaying ? e._e() : s("div", {
                        staticClass: "player__list"
                    }, [e.isLoading ? s("div", {
                        staticClass: "block p-6 text-gray-500 text-center italic"
                    }, [e._v(" " + e._s(e.$t("wait")) + " ")]) : [e.showList ? e._e() : s("div", {
                        staticClass: "block p-6 text-center"
                    }, [e._v(" " + e._s(e.$t("no-items-library")) + " "), s("br"), e._v(e._s(e.$t("click-organize")) + " ")]), e.showList ? s("play-list", {
                        attrs: {
                            files: e.list,
                            index: e.current
                        },
                        on: {
                            play: e.play
                        }
                    }) : e._e(), s("google-ads", {
                        attrs: {
                            infeed: ""
                        }
                    })]], 2), s("div", {
                        staticClass: "center-flex h-full player__media"
                    }, [s("audio", {
                        ref: "music",
                        attrs: {
                            hidden: ""
                        },
                        on: {
                            ended: function(t) {
                                e.current = e.current === e.list.length - 1 ? 0 : e.current + 1
                            },
                            timeupdate: function(e) {
                                return t.currentTime = e.target.currentTime
                            },
                            loadedmetadata: function(e) {
                                return t.duration = e.target.duration
                            }
                        }
                    }), s("video", {
                        ref: "videos",
                        staticClass: "hidden h-full player__overlay",
                        on: {
                            ended: function(t) {
                                e.current = e.current === e.list.length - 1 ? 0 : e.current + 1
                            },
                            timeupdate: function(e) {
                                return t.currentTime = e.target.currentTime
                            },
                            loadedmetadata: function(e) {
                                return t.duration = e.target.duration
                            }
                        }
                    }), s("img", {
                        ref: "pictures",
                        staticClass: "hidden h-full player__overlay"
                    })])]), s("window-footer", {
                        staticClass: "relative pb-4"
                    }, [s("input", {
                        staticClass: "bg-transparent mb-4 border border-black/30 border-solid rounded-md w-full h-[3px] appearance-none player__progress",
                        style: e.progressStyle,
                        attrs: {
                            type: "range",
                            max: Math.round(e.duration),
                            disabled: !e.showList
                        },
                        domProps: {
                            value: e.currentTime
                        },
                        on: {
                            input: e.progress
                        }
                    }), s("div", {
                        staticClass: "flex"
                    }, [s("media-control-list", {
                        attrs: {
                            isDark: e.isPlaying
                        }
                    }, [e.showAllControls ? [s("media-control-item", {
                        staticClass: "is-random",
                        attrs: {
                            icon: "fa:random",
                            active: e.isRandom
                        },
                        on: {
                            click: function(t) {
                                e.isRandom = !e.isRandom
                            }
                        }
                    }), s("media-control-item", {
                        staticClass: "is-loop",
                        attrs: {
                            icon: "fa:repeat",
                            active: e.isLoop
                        },
                        on: {
                            click: function(t) {
                                e.isLoop = !e.isLoop
                            }
                        }
                    })] : e._e(), s("media-control-item", {
                        attrs: {
                            icon: "fa:stop",
                            disabled: e.state === e.State.Stop
                        },
                        on: {
                            click: function(t) {
                                return e.control("stop")
                            }
                        }
                    }), s("media-control-item", {
                        staticClass: "is-nav is-prev",
                        attrs: {
                            icon: "fa:fast-backward",
                            disabled: !e.showList
                        },
                        on: {
                            click: function(t) {
                                return e.control("prev")
                            }
                        }
                    }), s("media-control-item", {
                        class: ["is-main is-play", {
                            "is-playing": e.state === e.State.Play
                        }],
                        attrs: {
                            icon: e.state === e.State.Play ? "fa:pause" : "fa:play",
                            disabled: !e.showList
                        },
                        on: {
                            click: function(t) {
                                return e.control("play")
                            }
                        }
                    }), s("media-control-item", {
                        staticClass: "is-nav is-next",
                        attrs: {
                            icon: "fa:fast-forward",
                            disabled: !e.showList
                        },
                        on: {
                            click: function(t) {
                                return e.control("next")
                            }
                        }
                    }), s("media-control-item", {
                        attrs: {
                            icon: e.volumeIcon
                        },
                        on: {
                            click: function(t) {
                                e.muted = !e.muted
                            }
                        }
                    }), e.showAllControls ? s("media-control-item", {
                        staticClass: "is-volume-slider"
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.volume,
                            expression: "volume"
                        }],
                        staticClass: "w-14 h-0.5 appearance-none",
                        attrs: {
                            type: "range",
                            min: "0",
                            max: "100",
                            step: "1"
                        },
                        domProps: {
                            value: e.volume
                        },
                        on: {
                            __r: function(t) {
                                e.volume = t.target.value
                            }
                        }
                    })]) : e._e()], 2)], 1)])], 1), e.showOpenDialog ? s("dialog-open", {
                        attrs: {
                            parent: e.id,
                            dialogIcon: e.id,
                            dialogName: "open",
                            filter: e.filter
                        },
                        on: {
                            cancel: function(t) {
                                e.showOpenDialog = !1
                            },
                            done: e.load
                        }
                    }) : e._e()], 1)
                },
                a = [],
                n = i("694c"),
                o = i("0e9a"),
                r = i("0f35"),
                l = i("d917"),
                c = i("6792"),
                u = i("6a11"),
                d = i("40e0"),
                p = i("043f"),
                h = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", [i("listview-column-header", {
                        attrs: {
                            columns: t.columns
                        }
                    }), i("listview-main", {
                        attrs: {
                            viewMode: "details",
                            items: t.rows
                        }
                    })], 1)
                },
                m = [],
                f = i("a321"),
                y = i("ed5d"),
                b = i("4cca"),
                w = i("cc1d"),
                v = i.n(w);
            const g = {
                month: "long",
                day: "numeric",
                year: "numeric"
            };

            function _(t) {
                return new Date(t).toLocaleDateString("en-US", g)
            }

            function $(t) {
                if (!t) return null;
                const e = Math.floor(t),
                    i = Math.floor(e / 3600),
                    s = Math.floor((e - 3600 * i) / 60),
                    a = e - 3600 * i - 60 * s,
                    n = i < 10 ? "0" + i : "" + i,
                    o = s < 10 ? "0" + s : "" + s,
                    r = a < 10 ? "0" + a : "" + a;
                return `${0===i?"":n+":"}${o}:${r}`
            }

            function x(t, e) {
                const i = v.a.lookup(e);
                if (!i || !/audio|video/.test(i)) return Promise.resolve(null);
                const s = document.createElement("video");
                return new Promise(e => {
                    s.setAttribute("src", t), s.onloadedmetadata = () => {
                        const t = s.duration;
                        s.remove(), e(t === 1 / 0 ? null : t)
                    }
                })
            }
            var k = {
                    props: {
                        files: Array,
                        index: Number
                    },
                    data() {
                        return {
                            rows: []
                        }
                    },
                    computed: {
                        columns() {
                            return ["name", "length", "size", "modified", "type"].map(t => ({
                                key: t
                            }))
                        }
                    },
                    watch: {
                        files: {
                            immediate: !0,
                            async handler(t) {
                                this.rows = await Promise.all(t.map(async (t, e) => {
                                    const {
                                        name: i,
                                        ext: s
                                    } = Object(o["r"])(t.name), a = await x(t.src, s), n = {
                                        label: i,
                                        labelWidth: "20%",
                                        extras: [{
                                            value: $(a)
                                        }, {
                                            value: Object(b["h"])(t.size)
                                        }, {
                                            value: _(t.mtime)
                                        }, {
                                            value: s
                                        }],
                                        active: this.index === e,
                                        click: () => this.$emit("play", e)
                                    };
                                    return n
                                }))
                            }
                        }
                    },
                    components: {
                        ListviewColumnHeader: f["b"],
                        ListviewMain: y["a"]
                    }
                },
                P = k,
                C = i("2877"),
                O = Object(C["a"])(P, h, m, !1, null, null, null),
                L = O.exports,
                j = i("bbbd"),
                S = i("3b99"),
                D = i("bd65"),
                M = i("e4f8"),
                A = i("1521"),
                T = i("e863"),
                R = i("7073"),
                V = i("1d26"),
                W = i("3cb5"),
                I = i("e314"),
                z = i("f106"),
                N = i("de73"),
                E = i("2f62"),
                B = i("ce02");
            const J = {
                Stop: 0,
                Play: 1,
                Pause: 2
            };

            function F(t, e) {
                const i = Object(r["p"])(e);
                return i === t ? F(t, e) : i
            }
            var G = {
                    data() {
                        return {
                            id: "player",
                            library: this.$t("music"),
                            accept: "",
                            showList: !1,
                            filter: [],
                            list: [],
                            current: -1,
                            duration: null,
                            currentTime: -1,
                            player: null,
                            playPromise: null,
                            isLoading: !1,
                            isPlaying: !1,
                            isRandom: !1,
                            isLoop: !1,
                            muted: !1,
                            volume: 100,
                            state: J.Stop,
                            State: J,
                            showAllControls: !0,
                            showOpenDialog: !1
                        }
                    },
                    computed: { ...Object(E["d"])({
                            isRtl: "isRtl"
                        }),
                        ...n["c"].mapState({
                            tempData: "tempData"
                        }),
                        ...j["e"].mapState({
                            sysVolume: "volume",
                            sysMuted: "isMuted"
                        }),
                        toolbar() {
                            return [{
                                label: this.$t("organize"),
                                items: [{
                                    label: this.$t("manage-libraries"),
                                    children: [{
                                        label: this.$t("music"),
                                        click: this.open("music")
                                    }, {
                                        label: this.$tc("video", 2),
                                        click: this.open("videos")
                                    }, {
                                        label: this.$t("pictures"),
                                        click: this.open("pictures")
                                    }]
                                }, {
                                    label: this.$t("options"),
                                    disabled: !0
                                }]
                            }, {
                                label: "Stream",
                                disabled: !0
                            }]
                        },
                        progressStyle() {
                            if (this.currentTime < 0 || this.duration <= 0) return {};
                            const t = this.currentTime / this.duration * 100,
                                e = [`var(--player-progress-color--filled, #000) ${t-1}%`, `var(--player-progress-color--empty, transparent) ${t}%`];
                            return {
                                background: `linear-gradient(to ${this.isRtl?"left":"right"}, ${e.join()})`
                            }
                        },
                        volumeIcon() {
                            return this.muted || this.volume < 1 || this.sysMuted || this.sysVolume < 1 ? "fa:volume-off" : this.volume > 50 ? "fa:volume-up" : "fa:volume-down"
                        }
                    },
                    watch: {
                        tempData: {
                            immediate: !0,
                            async handler(t) {
                                const e = t && t.path;
                                e && Object(r["g"])(e, "player") && (await this.load(e), this[n["a"].ClearTempData]())
                            }
                        },
                        state(t) {
                            if (!this.player) return;
                            const e = this.player === this.$refs.pictures,
                                i = this.player !== this.$refs.music;
                            t === J.Stop && (e || (this.playPromise.then(() => this.player.pause()), this.player.currentTime = 0), i && (this.isPlaying = !1, this.player.style.display = "")), t !== J.Pause || e || this.playPromise.then(() => this.player.pause()), t === J.Play && this.current >= 0 && (e || (this.player.src || (this.player.src = this.list[this.current].src), this.updateVolume(), this.playPromise = this.player.play()), i && (this.isPlaying = !0, this.player.style.display = "block"))
                        },
                        current(t) {
                            t < 0 || (this.player.src = this.list[t].src, this.state = J.Play, this.player !== this.$refs.pictures && (this.updateVolume(), this.playPromise = this.player.play()))
                        },
                        muted() {
                            this.updateVolume()
                        },
                        volume() {
                            this.updateVolume()
                        },
                        sysVolume() {
                            this.updateVolume()
                        },
                        sysMuted() {
                            this.updateVolume()
                        }
                    },
                    mounted() {},
                    methods: { ...n["c"].mapMutations([n["a"].ClearTempData]),
                        open(t) {
                            return () => {
                                this.filter = N["a"][t], this.library = this.$t(t), this.showOpenDialog = !0
                            }
                        },
                        async load(t) {
                            this.isLoading = !0, this.showOpenDialog = !1;
                            const e = await z["a"].stat(t),
                                i = await z["a"].read(t),
                                s = { ...e,
                                    src: i,
                                    name: Object(o["c"])(e.uri)
                                },
                                {
                                    ext: a
                                } = Object(o["r"])(t);
                            let n = null;
                            n = "webm" === a ? await Object(o["p"])(i) ? "videos" : "music" : Object.keys(N["a"]).find(t => N["a"][t].includes(a)), this.player = this.$refs[n], this.player.removeAttribute("src"), this.list = [s], this.current = 0, this.isLoading = !1, this.showList = !0
                        },
                        play(t) {
                            this.current = t, this.state = J.Play
                        },
                        control(t) {
                            if (!this.player) return;
                            const {
                                Play: e,
                                Pause: i,
                                Stop: s
                            } = J;
                            "play" === t ? this.state = this.state === e ? i : e : "stop" === t ? this.state = s : "next" === t ? this.isRandom ? this.current = F(this.current, this.list.length) : this.current = this.current === this.list.length - 1 ? 0 : this.current + 1 : "prev" === t && (this.isRandom ? this.current = F(this.current, this.list.length) : this.current = 0 === this.current ? this.list.length - 1 : this.current - 1)
                        },
                        progress(t) {
                            this.player && (this.player.currentTime = t.target.value)
                        },
                        updateVolume() {
                            this.player && (this.player.volume = this.volume / 100 * (this.sysVolume / 100), this.player.muted = this.muted || this.sysMuted)
                        },
                        handleResize(t) {
                            this.showAllControls = "full" === t || t >= 400
                        },
                        exit() {
                            Object(B["b"])(), this.$root.$emit(c["c"].CloseWindow, this.id)
                        }
                    },
                    components: {
                        MediaControlItem: d["a"],
                        MediaControlList: p["a"],
                        PlayList: L,
                        WindowMain: V["a"],
                        WindowControls: T["a"],
                        WindowTitlebar: I["a"],
                        WindowMenubar: W["a"],
                        WindowAddressbar: S["a"],
                        WindowAddressbarItem: D["a"],
                        WindowAddressbarNav: M["a"],
                        WindowBody: A["a"],
                        WindowFooter: R["a"],
                        DialogOpen: l["a"],
                        GoogleAds: u["a"]
                    }
                },
                H = G,
                U = (i("266d"), Object(C["a"])(H, s, a, !1, null, null, null));
            e["default"] = U.exports
        },
        ce02: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return r
            })), i.d(e, "a", (function() {
                return l
            }));
            var s = i("4360");
            const a = 6e4;
            let n = 0;
            const o = async () => (await i.e("applovin").then(i.bind(null, "f42e"))).default,
                r = async () => {
                    if (!s["default"].state.showAds) return;
                    const t = Date.now();
                    n > 0 && t - n < a || (n = t, (await o()).showInterstitial().catch(() => {}))
                },
                l = async () => {
                    s["default"].state.showAds && (await o()).showRewarded().catch(() => {})
                }
        },
        d917: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("computer", {
                        attrs: {
                            dialog: "",
                            dialogIcon: t.dialogIcon,
                            dialogName: t.dialogName,
                            filter: t.filters[t.option],
                            hoistedPath: t.dirPath,
                            parent: t.parent
                        },
                        on: {
                            close: t.cancel,
                            change: t.setPath
                        },
                        scopedSlots: t._u([{
                            key: "footer",
                            fn: function() {
                                return [i("div", {
                                    staticClass: "center-flex-x gap-2 mb-2"
                                }, [i("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("file-name")) + ":")]), i("winui-textbox", {
                                    staticClass: "flex-1"
                                }), i("winui-dropdown", {
                                    staticClass: "w-2/5",
                                    model: {
                                        value: t.option,
                                        callback: function(e) {
                                            t.option = e
                                        },
                                        expression: "option"
                                    }
                                }, t._l(t.options, (function(e, s) {
                                    return i("option", {
                                        key: s,
                                        domProps: {
                                            value: s
                                        }
                                    }, [t._v(" " + t._s(e) + " ")])
                                })), 0)], 1), i("div", {
                                    staticClass: "flex justify-end"
                                }, [i("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.open(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("open")) + " ")]), i("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.cancel(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("cancel")) + " ")])], 1)]
                            },
                            proxy: !0
                        }])
                    })
                },
                a = [],
                n = i("b47a"),
                o = i("0e9a"),
                r = {
                    props: {
                        dialogIcon: String,
                        dialogName: String,
                        parent: String,
                        filter: {
                            type: Array,
                            default: () => []
                        }
                    },
                    data() {
                        const t = [
                            []
                        ];
                        return this.filter.length && t.unshift(this.filter), {
                            option: 0,
                            path: null,
                            dirPath: null,
                            filters: t
                        }
                    },
                    computed: {
                        options() {
                            const t = [this.$t("all-files") + " (*.*)"];
                            if (this.filter.length) {
                                const e = this.filter.map(t => "*." + t).join();
                                t.unshift(`${this.$t("custom-files")} (${e})`)
                            }
                            return t
                        }
                    },
                    mounted() {
                        this.$bus.$on("openPath", t => this.$emit("done", t))
                    },
                    methods: {
                        setPath(t) {
                            this.path = t
                        },
                        open() {
                            Object(o["r"])(this.path).ext ? this.$emit("done", this.path) : this.dirPath = this.path
                        },
                        cancel() {
                            this.$emit("cancel")
                        }
                    },
                    components: {
                        Computer: n["default"]
                    }
                },
                l = r,
                c = i("2877"),
                u = Object(c["a"])(l, s, a, !1, null, null, null);
            e["a"] = u.exports
        },
        de73: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return o
            }));
            const s = ["webm", "wav", "ogg", "mp3", "wma"],
                a = ["webm", "ogg", "mp4"],
                n = ["bmp", "gif", "svg", "png", "jpg", "jpeg", "webp", "ico", "apng"],
                o = {
                    music: s,
                    videos: a,
                    pictures: n,
                    audio: s,
                    video: a,
                    image: n
                }
        }
    }
]);