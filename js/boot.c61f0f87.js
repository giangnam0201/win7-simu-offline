(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["boot"], {
        "002a": function(e, t, s) {
            "use strict";
            s("8e3e")
        },
        "05c4": function(e, t, s) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "spinner",
                        style: e.style
                    }, e._l(5, (function(e) {
                        return s("div", {
                            key: e,
                            staticClass: "spinner-ball absolute opacity-0"
                        }, [s("span", {
                            staticClass: "absolute bg-white left-0 top-0 rounded-full"
                        })])
                    })), 0)
                },
                o = [],
                n = {
                    props: {
                        size: Number
                    },
                    computed: {
                        style() {
                            return this.size ? {
                                "--spinner-size": this.size + "px"
                            } : null
                        }
                    }
                },
                i = n,
                c = (s("aa6c"), s("2877")),
                r = Object(c["a"])(i, a, o, !1, null, "41df070a", null);
            t["a"] = r.exports
        },
        "1f42": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    InitConfigs: "initConfigs",
                    SetShowStatus: "setShowStatus"
                },
                i = "paint",
                c = Object(o["a"])(i),
                r = n;
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        showStatus: !0
                    }
                },
                getters: {},
                mutations: {
                    [n.SetShowStatus]: (e, t) => {
                        e.showStatus = t
                    }
                },
                actions: {
                    [n.InitConfigs]: async ({
                        commit: e,
                        rootState: t
                    }) => {
                        const s = await a["default"].local.get("paint", t.user);
                        e(n.SetShowStatus, !s || void 0 === s.showStatus || s.showStatus)
                    },
                    [n.SetShowStatus]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetShowStatus, s), a["default"].local.update("paint", t.user, {
                        showStatus: s
                    }))
                }
            }
        },
        3294: function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            })), s.d(t, "e", (function() {
                return l
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    SetScreensaver: "setScreensaver"
                },
                i = "screensaver",
                c = Object(o["a"])(i),
                r = n,
                l = {
                    None: {
                        value: null,
                        label: "none"
                    },
                    Blank: {
                        value: "blank",
                        label: "blank"
                    },
                    Bubbles: {
                        value: "bubbles",
                        label: "bubbles"
                    },
                    Pictures: {
                        value: "pictures",
                        label: "pictures"
                    }
                };
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        type: null,
                        timeout: 1,
                        showLogon: !1
                    }
                },
                getters: {},
                mutations: {
                    [n.SetScreensaver]: (e, {
                        type: t,
                        timeout: s,
                        showLogon: a
                    }) => {
                        e.type = t, e.timeout = s, e.showLogon = a
                    }
                },
                actions: {
                    [n.SetScreensaver]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetScreensaver, s), a["default"].update("/configs/", t.user, "configs", {
                        screensaver: s
                    }))
                }
            }
        },
        "38c9": function(e, t, s) {
            var a, o, n;
            (function(s, i, c) {
                o = [], a = c, n = "function" === typeof a ? a.apply(t, o) : a, void 0 === n || (e.exports = n)
            })("undefined" !== typeof self && self, document, (function() {
                "use strict";
                var e = document.documentElement,
                    t = window.navigator || {},
                    s = {
                        create: function(e) {
                            return document.createElement(e)
                        },
                        old: !!/(Android\s(1\.|2\.))|(Silk\/1\.)/i.test(t.userAgent),
                        pfx: function() {
                            var e = document.createElement("dummy").style,
                                t = ["Webkit", "Moz", "O", "ms"],
                                s = {};
                            return function(a) {
                                if ("undefined" === typeof s[a]) {
                                    var o = a.charAt(0).toUpperCase() + a.substr(1),
                                        n = t.join(o + " "),
                                        i = (a + " " + n + o).split(" ");
                                    for (var c in s[a] = null, i)
                                        if (void 0 !== e[i[c]]) {
                                            s[a] = i[c];
                                            break
                                        }
                                }
                                return s[a]
                            }
                        }()
                    },
                    a = {
                        css3Dtransform: function() {
                            var e = !s.old && null !== s.pfx("perspective");
                            return !!e
                        }(),
                        cssTransform: function() {
                            var e = !s.old && null !== s.pfx("transformOrigin");
                            return !!e
                        }(),
                        cssTransition: function() {
                            var e = null !== s.pfx("transition");
                            return !!e
                        }(),
                        addEventListener: !!window.addEventListener,
                        querySelectorAll: !!document.querySelectorAll,
                        matchMedia: !!window.matchMedia,
                        deviceMotion: "DeviceMotionEvent" in window,
                        deviceOrientation: "DeviceOrientationEvent" in window,
                        contextMenu: "contextMenu" in e && "HTMLMenuItemElement" in window,
                        classList: "classList" in e,
                        placeholder: "placeholder" in s.create("input"),
                        localStorage: function() {
                            try {
                                return window.localStorage.setItem("featurejs-test", "foobar"), window.localStorage.removeItem("featurejs-test"), !0
                            } catch (e) {
                                return !!window.localStorage.length
                            }
                        }(),
                        historyAPI: window.history && "pushState" in window.history,
                        serviceWorker: "serviceWorker" in t,
                        viewportUnit: function(e) {
                            try {
                                e.style.width = "1vw";
                                var t = "" !== e.style.width;
                                return !!t
                            } catch (s) {
                                return !1
                            }
                        }(s.create("dummy")),
                        remUnit: function(e) {
                            try {
                                e.style.width = "1rem";
                                var t = "" !== e.style.width;
                                return !!t
                            } catch (s) {
                                return !1
                            }
                        }(s.create("dummy")),
                        canvas: function(e) {
                            return !(!e.getContext || !e.getContext("2d"))
                        }(s.create("canvas")),
                        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        webGL: function(e) {
                            try {
                                return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
                            } catch (t) {
                                return !1
                            }
                        }(s.create("canvas")),
                        cors: "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest,
                        touch: !!("ontouchstart" in window || t.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch),
                        async: "async" in s.create("script"),
                        defer: "defer" in s.create("script"),
                        geolocation: "geolocation" in t,
                        srcset: "srcset" in s.create("img"),
                        sizes: "sizes" in s.create("img"),
                        pictureElement: "HTMLPictureElement" in window,
                        fetch: "fetch" in window,
                        testAll: function() {
                            var t = " js";
                            for (var s in this) "testAll" !== s && "extend" !== s && this[s] && (t += " " + s);
                            e.className += t.toLowerCase()
                        },
                        extend: function(e, t) {
                            if ("function" !== typeof t) throw new TypeError("Feature.extend: `callback` is not a Function");
                            return this[e] = !!t(s), this
                        }
                    };
                return a
            }))
        },
        "39b3": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return n
            })), s.d(t, "c", (function() {
                return i
            })), s.d(t, "a", (function() {
                return c
            }));
            var a = s("2f62");
            const o = {
                    OpenContextMenu: "openContextMenu"
                },
                n = "scrollbar",
                i = Object(a["a"])(n),
                c = o;
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        contextMenu: void 0
                    }
                },
                getters: {},
                mutations: {
                    [o.OpenContextMenu](e, t) {
                        e.contextMenu = t
                    }
                },
                actions: {}
            }
        },
        "3eac": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return o
            })), s.d(t, "b", (function() {
                return n
            }));
            var a = s("2f62");
            const o = "windowsManager",
                n = Object(a["a"])(o);
            t["c"] = {
                namespaced: !0,
                state() {
                    return {}
                },
                getters: {
                    hasMaximizedWindows: (e, t, s) => s.windows.some(e => e.maximized && !e.minimized)
                },
                mutations: {},
                actions: {}
            }
        },
        "4b77": function(e, t, s) {},
        "4ed2": function(e, t, s) {},
        "554d": function(e, t, s) {
            "use strict";
            s.d(t, "c", (function() {
                return r
            })), s.d(t, "d", (function() {
                return l
            })), s.d(t, "b", (function() {
                return u
            })), s.d(t, "a", (function() {
                return m
            }));
            var a = s("968c"),
                o = s("0d26"),
                n = s("2f62"),
                i = s("51e6");
            const c = {
                    SetEffects: "setEffects",
                    SaveEffects: "saveEffects",
                    GetPresetAuto: "getPresetAuto"
                },
                r = "effects",
                l = Object(n["a"])(r),
                u = c,
                d = {
                    animateControls: !0,
                    animateWindows: !1,
                    animateTaskbar: !1,
                    enableAeroPeek: !1,
                    enableComposition: !1,
                    enableGlass: !1,
                    fadeMenus: !0,
                    fadeTooltips: !1,
                    fadeMenuItems: !1,
                    saveTaskbarThumbnails: !1,
                    showMouseShadows: !0,
                    showWindowShadows: !0,
                    showThumbnails: !1,
                    showSelectionRectangle: !1,
                    showWindowOnDrag: !1,
                    slideComboBoxes: !1,
                    smoothText: !1,
                    smoothScroll: !1,
                    desktopIconShadow: !0
                },
                m = ["enableAeroPeek", "enableComposition", "fadeTooltips", "fadeMenuItems", "saveTaskbarThumbnails", "showThumbnails", "showSelectionRectangle", "slideComboBoxes", "smoothText", "smoothScroll"],
                S = e => Object.keys(d).reduce((t, s) => {
                    const a = m.includes(s);
                    return { ...t,
                        [s]: "appearance" === e && !a
                    }
                }, {
                    preset: e
                });
            t["e"] = {
                namespaced: !0,
                state() {
                    return Object.keys(d).reduce((e, t) => ({ ...e,
                        [t]: null
                    }), {})
                },
                getters: {
                    presetAppearance: () => S("appearance"),
                    presetPerformance: () => S("performance")
                },
                mutations: {
                    [c.SetEffects]: (e, t) => {
                        Object.assign(e, t)
                    }
                },
                actions: {
                    [c.SetEffects]: async ({
                        commit: e,
                        dispatch: t
                    }, s) => {
                        if (s) e(c.SetEffects, s);
                        else {
                            const s = await t(c.GetPresetAuto);
                            e(c.SetEffects, s)
                        }
                    },
                    [c.SaveEffects]: async ({
                        state: e,
                        rootState: t
                    }) => a["default"].update("/configs/", t.user, "configs", {
                        effects: e
                    }),
                    [c.GetPresetAuto]: async ({
                        getters: e
                    }) => {
                        let t = await Object(i["getWeiBaseScore"])();
                        o["default"].enabled && o["default"].get("wei") && (t = parseFloat(o["default"].get("wei")));
                        const s = t > 4 ? e.presetAppearance : t >= 3 ? d : e.presetPerformance;
                        return { ...s,
                            preset: "auto"
                        }
                    }
                }
            }
        },
        "5cb0": function(e, t, s) {
            "use strict";
            s("4b77")
        },
        "694c": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return n
            })), s.d(t, "c", (function() {
                return i
            })), s.d(t, "a", (function() {
                return c
            }));
            var a = s("2f62");
            const o = {
                    SetTempData: "setTempData",
                    ClearTempData: "clearTempData",
                    OpenContextMenu: "openContextMenu",
                    SelectItem: "selectItem",
                    RenameItem: "renameItem"
                },
                n = "fileexplorer",
                i = Object(a["a"])(n),
                c = o;
            t["d"] = {
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
                    [o.SetTempData](e, t) {
                        e.tempData = t
                    },
                    [o.ClearTempData](e) {
                        e.tempData = void 0
                    },
                    [o.OpenContextMenu](e, t) {
                        e.contextMenu = t
                    },
                    [o.SelectItem](e, t) {
                        e.selectedItemPath = t
                    },
                    [o.RenameItem](e, t) {
                        e.renamingItemPath = t
                    }
                },
                actions: {}
            }
        },
        "69f0": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    DecreaseVolume: "decreaseVol",
                    Exclude: "setExcludeSongs",
                    ExcludeAdd: "addExcludeSong",
                    FavMusicUseMostPlayed: "setFavMusicUseMostPlayed",
                    FavMusicUsePlaylist: "setFavMusicUsePlaylist",
                    FavMusicUseRatedSongs: "setFavMusicUseRatedSongs",
                    FavMusicUseSongs: "setFavMusicUseSongs",
                    FavPictUseFolder: "setFavPictUseFolder",
                    FavPictUseRatedPicts: "setFavPictUseRatedPicts",
                    FavPictUseSlideShow: "setFavPictUseSlideShow",
                    FavPictUseUnratedPicts: "setFavPictUseUnratedPicts",
                    FavPicts: "setFavPicts",
                    IncreaseVolume: "increaseVol",
                    InitConfigs: "initConfigs",
                    Loop: "setLoop",
                    Mute: "setMute",
                    NpBg: "setNpBg",
                    PlayNavSound: "setPlayNavSound",
                    Rating: "setRating",
                    RatingAdd: "addRating",
                    RatingRemove: "removeRating",
                    Repeat: "setRepeat",
                    ScreenSaverTimeout: "setScreenSaverTimeout",
                    SearchFolders: "setSearchFolders",
                    Shuffle: "setShuffle",
                    SlideShowBgColor: "setSlideShowBgColor",
                    SlideShowInfo: "setSlideShowInfo",
                    SlideShowPictDuration: "setSlideShowDuration",
                    SlideShowRandom: "setSlideShowRandom",
                    SlideShowSongInfo: "setSlideShowSongInfo",
                    UseAnims: "setUseAnims",
                    UsePanAndZoom: "setUsePanAndZoom",
                    UseRatingShortcut: "setUseRatingShortcut",
                    UseScreenSaver: "setUseScreenSaver",
                    Volume: "setVolume"
                },
                i = "wmc",
                c = Object(o["a"])(i),
                r = n;
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        excludedSongs: [],
                        favMusicUseMostPlayed: !0,
                        favMusicUsePlaylist: "",
                        favMusicUseRatedSongs: !0,
                        favMusicUseSongs: !0,
                        favPictUseFolder: "",
                        favPictUseRatedPicts: !0,
                        favPictUseSlideShow: "",
                        favPictUseUnratedPicts: !0,
                        favPicts: "user-defined",
                        isLooped: !1,
                        isMuted: !1,
                        isRepeated: !1,
                        isShuffled: !1,
                        npBg: "moving",
                        playNavSound: !0,
                        ratings: {},
                        screenSaverTimeout: 10,
                        searchFolders: {
                            music: [],
                            picture: [],
                            video: []
                        },
                        slideShowBgColor: "#000",
                        slideShowDuration: 12,
                        slideShowInfo: !0,
                        slideShowRandom: !0,
                        slideShowSongInfo: !0,
                        useAnims: !0,
                        usePanAndZoom: !0,
                        useRatingShortcut: !1,
                        useScreenSaver: !1,
                        volume: 50
                    }
                },
                getters: {},
                mutations: {
                    [n.Volume]: (e, t) => {
                        e.volume = Math.min(Math.max(t, 0), 50)
                    },
                    [n.IncreaseVolume]: e => {
                        const t = e.volume + 1;
                        e.volume = Math.min(t, 50), e.isMuted = !1
                    },
                    [n.DecreaseVolume]: e => {
                        const t = e.volume - 1;
                        e.volume = Math.max(t, 0), e.isMuted = !e.volume
                    },
                    [n.Mute]: (e, t) => {
                        e.isMuted = t
                    },
                    [n.Loop]: (e, t) => {
                        e.isLooped = t
                    },
                    [n.Repeat]: (e, t) => {
                        e.isRepeated = t
                    },
                    [n.Shuffle]: (e, t) => {
                        e.isShuffled = t
                    },
                    [n.UseAnims]: (e, t) => {
                        e.useAnims = t
                    },
                    [n.PlayNavSound]: (e, t) => {
                        e.playNavSound = t
                    },
                    [n.NpBg]: (e, t) => {
                        ["moving", "still", "none"].includes(t) ? e.npBg = t : e.npBg = "moving"
                    },
                    [n.SlideShowRandom]: (e, t) => {
                        e.slideShowRandom = t
                    },
                    [n.SlideShowInfo]: (e, t) => {
                        e.slideShowInfo = t
                    },
                    [n.SlideShowSongInfo]: (e, t) => {
                        e.slideShowSongInfo = t
                    },
                    [n.UsePanAndZoom]: (e, t) => {
                        e.usePanAndZoom = t
                    },
                    [n.SlideShowPictDuration]: (e, t) => {
                        e.slideShowDuration = Math.max(Math.min(t, 60), 2)
                    },
                    [n.SlideShowBgColor]: (e, t) => {
                        ["#000", "#888", "#fff"].includes(t) ? e.slideShowBgColor = t : e.slideShowBgColor = "#000"
                    },
                    [n.UseScreenSaver]: (e, t) => {
                        e.useScreenSaver = t
                    },
                    [n.ScreenSaverTimeout]: (e, t) => {
                        e.screenSaverTimeout = Math.max(Math.min(t, 9999), 1)
                    },
                    [n.UseRatingShortcut]: (e, t) => {
                        e.useRatingShortcut = t
                    },
                    [n.FavMusicUseSongs]: (e, t) => {
                        e.favMusicUseSongs = t
                    },
                    [n.FavMusicUseRatedSongs]: (e, t) => {
                        e.favMusicUseRatedSongs = t
                    },
                    [n.FavMusicUseMostPlayed]: (e, t) => {
                        e.favMusicUseMostPlayed = t
                    },
                    [n.FavMusicUsePlaylist]: (e, t) => {
                        e.favMusicUsePlaylist = t
                    },
                    [n.FavPicts]: (e, t) => {
                        e.favPicts = t
                    },
                    [n.FavPictUseRatedPicts]: (e, t) => {
                        e.favPictUseRatedPicts = t
                    },
                    [n.FavPictUseUnratedPicts]: (e, t) => {
                        e.favPictUseUnratedPicts = t
                    },
                    [n.FavPictUseSlideShow]: (e, t) => {
                        e.favPictUseSlideShow = t
                    },
                    [n.FavPictUseFolder]: (e, t) => {
                        e.favPictUseFolder = t
                    },
                    [n.Rating]: (e, t) => {
                        e.ratings = t
                    },
                    [n.RatingAdd]: (e, {
                        path: t,
                        rating: s
                    }) => {
                        e.ratings[t] = s
                    },
                    [n.RatingRemove]: (e, t) => {
                        delete e.ratings[t]
                    },
                    [n.Exclude]: (e, t) => {
                        e.excludedSongs = t
                    },
                    [n.SearchFolders]: (e, t) => {
                        e.searchFolders = t
                    }
                },
                actions: {
                    [n.InitConfigs]: async ({
                        commit: e,
                        rootState: t
                    }) => {
                        const s = await a["default"].local.get("wmc", t.user),
                            o = await a["default"].local.get("ratings", t.user);
                        e(n.Rating, o || {});
                        const i = (e, t) => s && void 0 !== s[e] ? s[e] : t;
                        e(n.Exclude, i("exclude", [])), e(n.FavMusicUseMostPlayed, i("useMostPlayed", !0)), e(n.FavMusicUsePlaylist, i("usePlaylist", "")), e(n.FavMusicUseRatedSongs, i("useRatedSongs", !0)), e(n.FavMusicUseSongs, i("useSongs", !0)), e(n.FavPictUseFolder, i("useFolder", "")), e(n.FavPictUseRatedPicts, i("useRatedPicts", !0)), e(n.FavPictUseSlideShow, i("useSlideShow", "")), e(n.FavPictUseUnratedPicts, i("useUnratedPicts", !0)), e(n.FavPicts, i("favPicts", "user-defined")), e(n.Loop, i("isLooped", !1)), e(n.Mute, i("isMuted", !1)), e(n.NpBg, i("npBg", "moving")), e(n.PlayNavSound, i("playNavSound", !0)), e(n.Repeat, i("isRepeated", !1)), e(n.ScreenSaverTimeout, i("screenSaverTimeout", 10)), e(n.SearchFolders, i("searchFolders", {
                            music: [],
                            picture: [],
                            video: []
                        })), e(n.Shuffle, i("isShuffled", !1)), e(n.SlideShowBgColor, i("slideShowBgColor", "#000")), e(n.SlideShowInfo, i("slideShowInfo", !0)), e(n.SlideShowPictDuration, i("slideShowPictDuration", 12)), e(n.SlideShowRandom, i("isSlideShowRandom", !0)), e(n.SlideShowSongInfo, i("slideShowSongInfo", !0)), e(n.UseAnims, i("useAnims", !0)), e(n.UsePanAndZoom, i("usePanAndZoom", !0)), e(n.UseRatingShortcut, i("useRatingShortcut", !1)), e(n.UseScreenSaver, i("useScreenSaver", !0)), e(n.Volume, i("volume", 50))
                    },
                    [n.DecreaseVolume]: async ({
                        commit: e,
                        state: t,
                        rootState: s
                    }) => {
                        e(n.DecreaseVolume);
                        const o = await a["default"].local.get("wmc", s.user);
                        return a["default"].local.update("wmc", s.user, { ...o,
                            volume: t.volume
                        })
                    },
                    [n.IncreaseVolume]: async ({
                        commit: e,
                        state: t,
                        rootState: s
                    }) => {
                        e(n.IncreaseVolume);
                        const o = await a["default"].local.get("wmc", s.user);
                        return a["default"].local.update("wmc", s.user, { ...o,
                            volume: t.volume
                        })
                    },
                    [n.Mute]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.Mute, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            isMuted: s
                        })
                    },
                    [n.Loop]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.Loop, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            isLooped: s
                        })
                    },
                    [n.Repeat]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.Repeat, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            isRepeated: s
                        })
                    },
                    [n.Shuffle]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.Shuffle, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            isShuffled: s
                        })
                    },
                    [n.UseAnims]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.UseAnims, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useAnims: s
                        })
                    },
                    [n.PlayNavSound]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.PlayNavSound, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            playNavSound: s
                        })
                    },
                    [n.NpBg]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.NpBg, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            npBg: s
                        })
                    },
                    [n.SlideShowRandom]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SlideShowRandom, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            isSlideShowRandom: s
                        })
                    },
                    [n.SlideShowInfo]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SlideShowInfo, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            slideShowInfo: s
                        })
                    },
                    [n.SlideShowSongInfo]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SlideShowSongInfo, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            slideShowSongInfo: s
                        })
                    },
                    [n.UsePanAndZoom]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.UsePanAndZoom, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            usePanAndZoom: s
                        })
                    },
                    [n.SlideShowPictDuration]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SlideShowPictDuration, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            slideShowPictDuration: s
                        })
                    },
                    [n.SlideShowBgColor]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SlideShowBgColor, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            slideShowBgColor: s
                        })
                    },
                    [n.UseScreenSaver]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.UseScreenSaver, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useScreenSaver: s
                        })
                    },
                    [n.ScreenSaverTimeout]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.ScreenSaverTimeout, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            screenSaverTimeout: s
                        })
                    },
                    [n.UseRatingShortcut]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.UseRatingShortcut, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useRatingShortcut: s
                        })
                    },
                    [n.FavMusicUseSongs]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavMusicUseSongs, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useSongs: s
                        })
                    },
                    [n.FavMusicUseRatedSongs]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavMusicUseRatedSongs, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useRatedSongs: s
                        })
                    },
                    [n.FavMusicUseMostPlayed]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavMusicUseMostPlayed, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useMostPlayed: s
                        })
                    },
                    [n.FavMusicUsePlaylist]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavMusicUsePlaylist, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            usePlaylist: s
                        })
                    },
                    [n.FavPicts]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavPicts, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            favPicts: s
                        })
                    },
                    [n.FavPictUseRatedPicts]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavPictUseRatedPicts, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useRatedPicts: s
                        })
                    },
                    [n.FavPictUseUnratedPicts]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavPictUseUnratedPicts, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useUnratedPicts: s
                        })
                    },
                    [n.FavPictUseSlideShow]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavPictUseSlideShow, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useSlideShow: s
                        })
                    },
                    [n.FavPictUseFolder]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.FavPictUseFolder, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            useFolder: s
                        })
                    },
                    [n.RatingAdd]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, {
                        path: o,
                        rating: i
                    }) => (e(n.RatingAdd, {
                        path: o,
                        rating: i
                    }), a["default"].local.update("ratings", s.user, t.ratings)),
                    [n.RatingRemove]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, o) => (e(n.RatingRemove, o), a["default"].local.update("ratings", s.user, t.ratings)),
                    [n.Exclude]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.Exclude, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            exclude: s
                        })
                    },
                    [n.ExcludeAdd]: async ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, o) => {
                        const i = [...t.excludedSongs || [], o];
                        e(n.Exclude, i);
                        const c = await a["default"].local.get("wmc", s.user);
                        return a["default"].local.update("wmc", s.user, { ...c,
                            exclude: i
                        })
                    },
                    [n.SearchFolders]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SearchFolders, s);
                        const o = await a["default"].local.get("wmc", t.user);
                        return a["default"].local.update("wmc", t.user, { ...o,
                            searchFolders: s
                        })
                    }
                }
            }
        },
        "6b91": function(e, t, s) {
            "use strict";
            s("c0d3")
        },
        "743b": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    SetIconSize: "setIconSize",
                    SetIconShow: "setIconShow",
                    SetIconAuto: "setIconAuto"
                },
                i = "desktop",
                c = Object(o["a"])(i),
                r = n;
            t["d"] = {
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
                    [n.SetIconSize]: (e, t) => {
                        e.sizeIcons = t
                    },
                    [n.SetIconShow]: (e, t) => {
                        e.showIcons = t
                    },
                    [n.SetIconAuto]: (e, t) => {
                        e.autoIcons = t
                    }
                },
                actions: {
                    [n.SetIconSize]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetIconSize, s), a["default"].update("/configs/", t.user, "configs", {
                        sizeIcons: s
                    })),
                    [n.SetIconShow]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetIconShow, s), a["default"].update("/configs/", t.user, "configs", {
                        showIcons: s
                    })),
                    [n.SetIconAuto]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetIconAuto, s), a["default"].update("/configs/", t.user, "configs", {
                        autoIcons: s
                    }))
                }
            }
        },
        8151: function(e, t, s) {
            "use strict";
            s.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("main", {
                        staticClass: "flex justify-center items-center bg-black outline-none w-screen h-screen",
                        attrs: {
                            id: "boot",
                            tabindex: "-1"
                        }
                    }, [e.showBooting ? s("div", {
                        staticClass: "flex flex-col justify-between items-start px-4 py-8 w-full h-full text-gray-300 leading-6 bootinfo"
                    }, [s("pre", {
                        staticClass: "m-0 whitespace-pre-wrap"
                    }, [e._v(e._s(e.metaInfo.join("\n")))]), s("pre", {
                        ref: "bootInfo",
                        staticClass: "m-0 mb-12 h-full overflow-hidden whitespace-pre-wrap"
                    }, [e._v(e._s(e.bootInfo.join("\n")))]), s("button", {
                        staticClass: "inline-block py-2 text-gray-500",
                        attrs: {
                            "data-test-bios-button": ""
                        },
                        on: {
                            click: e.runBios
                        }
                    }, [e._v(" BIOS Setup (Press here) ")])]) : e._e(), s("transition", {
                        attrs: {
                            "enter-active-class": "animated fadeIn slow",
                            "leave-active-class": "animated fadeOut faster"
                        }
                    }, [e.showAnimation ? ["win31" === e.type ? s("boot-win31") : e.isWin9x ? s("boot-win9x", {
                        attrs: {
                            theme: e.type
                        }
                    }) : "chromeos" === e.type ? s("boot-chromeos") : "kubuntu" === e.type ? s("boot-kubuntu") : "ubuntu" === e.type ? s("boot-ubuntu") : "aeroNoir" === e.type ? s("boot-aeronoir") : "oxygen" === e.type ? s("boot-oxygen") : "onebit" === e.type ? s("boot-onebit") : "macos" === e.type ? s("boot-macos", {
                        attrs: {
                            progress: e.progress
                        }
                    }) : e.isWinMixed ? s("boot-win-mixed", {
                        attrs: {
                            theme: e.type
                        }
                    }) : e.isWinX ? s("boot-win-x", {
                        attrs: {
                            theme: e.type
                        }
                    }) : s("boot-win7", {
                        ref: "video"
                    })] : e._e()], 2)], 1)
                },
                o = [],
                n = s("bbbd"),
                i = s("e47c"),
                c = s("0f35"),
                r = function() {
                    var e = this,
                        t = e.$createElement;
                    e._self._c;
                    return e._m(0)
                },
                l = [function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center w-full h-full boot__main is-aeroNoir",
                        attrs: {
                            "data-test-boot-theme": "aeroNoir"
                        }
                    }, [s("div", {
                        staticClass: "bg-gray-600 bg-clip-text bg-no-repeat font-bold text-transparent text-4xl uppercase logo"
                    }, [e._v(" Win7 Simu ")])])
                }],
                u = {},
                d = u,
                m = (s("5cb0"), s("2877")),
                S = Object(m["a"])(d, r, l, !1, null, null, null),
                f = S.exports,
                h = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center bg-white w-full h-full",
                        attrs: {
                            "data-test-boot-theme": "chromeos"
                        }
                    }, [s("img", {
                        staticClass: "w-1/5 h-1/5",
                        attrs: {
                            src: e.logo
                        }
                    })])
                },
                g = [],
                w = s("2f62"),
                p = {
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "boot-chromeos")
                        }
                    }
                },
                v = p,
                b = Object(m["a"])(v, h, g, !1, null, null, null),
                y = b.exports,
                P = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center w-full h-full boot__main is-kubuntu",
                        attrs: {
                            "data-test-boot-theme": "kubuntu"
                        }
                    }, [s("img", {
                        staticClass: "w-auto h-12 logo",
                        attrs: {
                            src: e.logo
                        }
                    })])
                },
                x = [],
                M = {
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "boot-kubuntu")
                        }
                    }
                },
                C = M,
                R = (s("002a"), Object(m["a"])(C, P, x, !1, null, null, null)),
                U = R.exports,
                I = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-between items-center h-64",
                        attrs: {
                            "data-test-boot-theme": "macos"
                        }
                    }, [s("iconify-icon", {
                        staticClass: "m-auto text-white text-7xl",
                        attrs: {
                            icon: "fa:apple"
                        }
                    }), s("winui-progress", {
                        staticClass: "shadow-none border-0 rounded-full is-macos",
                        attrs: {
                            progress: e.progress
                        }
                    })], 1)
                },
                A = [],
                O = {
                    props: {
                        progress: Number
                    },
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "boot-chromeos")
                        }
                    }
                },
                F = O,
                j = (s("bd37"), Object(m["a"])(F, I, A, !1, null, null, null)),
                E = j.exports,
                B = function() {
                    var e = this,
                        t = e.$createElement;
                    e._self._c;
                    return e._m(0)
                },
                G = [function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center gap-6 w-screen h-screen boot__main is-onebit",
                        attrs: {
                            "data-test-boot-theme": "onebit"
                        }
                    }, [s("div", {
                        staticClass: "w-[72px] h-[72px]"
                    }, [s("div", {
                        staticClass: "logo"
                    })]), s("div", {
                        staticClass: "text-2xl"
                    }, [e._v("Starting in Onebit")])])
                }],
                T = {},
                D = T,
                _ = (s("6b91"), Object(m["a"])(D, B, G, !1, null, null, null)),
                L = _.exports,
                W = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center w-full h-full overflow-hidden boot__main is-oxygen",
                        attrs: {
                            "data-test-boot-theme": "oxygen"
                        }
                    }, [s("img", {
                        staticClass: "w-auto h-2/6 logo",
                        attrs: {
                            src: e.logo
                        }
                    }), e._l(7, (function(e) {
                        return s("div", {
                            key: e,
                            staticClass: "opacity-70 rounded-full w-1 h-1 particle"
                        })
                    }))], 2)
                },
                k = [],
                V = {
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "logovisnalize")
                        }
                    }
                },
                $ = V,
                N = (s("f58f"), Object(m["a"])($, W, k, !1, null, null, null)),
                z = N.exports,
                H = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-center items-center w-full h-full",
                        attrs: {
                            "data-test-boot-theme": "ubuntu"
                        }
                    }, [s("div", {
                        staticClass: "m-auto w-36"
                    }, [s("img", {
                        staticClass: "mb-16",
                        attrs: {
                            src: e.logo.graphic
                        }
                    }), s("spinner-ubuntu", {
                        staticClass: "w-14"
                    })], 1), s("img", {
                        staticClass: "bottom-8 absolute m-auto w-52",
                        attrs: {
                            src: e.logo.banner
                        }
                    })])
                },
                q = [],
                Q = s("ad56"),
                Z = {
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return {
                                graphic: Object(c["a"])(e.assetStore.boot, "boot-ubuntu"),
                                banner: Object(c["a"])(e.assetStore.icos, "logo-ubuntu")
                            }
                        }
                    },
                    components: {
                        SpinnerUbuntu: Q["a"]
                    }
                },
                X = Z,
                J = Object(m["a"])(X, H, q, !1, null, null, null),
                Y = J.exports,
                K = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("img", {
                        staticClass: "h-5/6 pointer-events-none",
                        attrs: {
                            src: e.logo,
                            "data-test-boot-theme": "win31"
                        }
                    })
                },
                ee = [],
                te = {
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "boot-win31")
                        }
                    }
                },
                se = te,
                ae = Object(m["a"])(se, K, ee, !1, null, null, null),
                oe = ae.exports,
                ne = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("video", {
                        attrs: {
                            hidden: "",
                            muted: "",
                            playsinline: "",
                            "data-test-boot-theme": "win7"
                        },
                        domProps: {
                            muted: !0
                        },
                        on: {
                            play: e.play
                        }
                    }, [s("source", {
                        attrs: {
                            src: e.video,
                            type: "video/mp4"
                        }
                    })])
                },
                ie = [],
                ce = {
                    computed: { ...Object(w["f"])(["assets"]),
                        video({
                            assets: e
                        }) {
                            return Object(c["a"])(e.assetStore.boot, "boot-win7")
                        }
                    },
                    methods: {
                        play() {
                            const e = this.$el;
                            setTimeout(() => e.hidden = !1, 500)
                        }
                    }
                },
                re = ce,
                le = Object(m["a"])(re, ne, ie, !1, null, null, null),
                ue = le.exports,
                de = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("img", {
                        staticClass: "w-full h-full pointer-events-none",
                        attrs: {
                            src: e.logo,
                            "data-test-boot-theme": e.theme
                        }
                    })
                },
                me = [],
                Se = {
                    props: {
                        theme: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            theme: e,
                            assets: t
                        }) {
                            return Object(c["a"])(t.assetStore.boot, "boot-" + e)
                        }
                    }
                },
                fe = Se,
                he = Object(m["a"])(fe, de, me, !1, null, null, null),
                ge = he.exports,
                we = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("img", {
                        staticClass: "max-h-full pointer-events-none",
                        attrs: {
                            src: e.logo,
                            "data-test-boot-theme": e.theme
                        }
                    })
                },
                pe = [],
                ve = {
                    props: {
                        theme: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            theme: e,
                            assets: t
                        }) {
                            const s = ["winLP", "winLS"].includes(e) ? "winL" : e;
                            return Object(c["a"])(t.assetStore.boot, "boot-" + s)
                        }
                    }
                },
                be = ve,
                ye = Object(m["a"])(be, we, pe, !1, null, null, null),
                Pe = ye.exports,
                xe = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "flex flex-col justify-between items-center h-64",
                        attrs: {
                            "data-test-boot-theme": "winx"
                        }
                    }, [s("img", {
                        attrs: {
                            src: e.logo,
                            width: "100"
                        }
                    }), s("spinner-ball", {
                        attrs: {
                            size: 25
                        }
                    })], 1)
                },
                Me = [],
                Ce = s("05c4"),
                Re = {
                    props: {
                        theme: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: { ...Object(w["f"])(["assets"]),
                        logo({
                            theme: e,
                            assets: t
                        }) {
                            return Object(c["a"])(t.assetStore.boot, "boot-" + ("win11" === e ? "win11" : "win8"))
                        }
                    },
                    components: {
                        SpinnerBall: Ce["a"]
                    }
                },
                Ue = Re,
                Ie = Object(m["a"])(Ue, xe, Me, !1, null, null, null),
                Ae = Ie.exports,
                Oe = s("6792"),
                Fe = s("a81a");
            const je = {
                    LoadApps: "loadApps"
                },
                Ee = "misc",
                Be = (Object(w["a"])(Ee), je);
            var Ge = {
                    state() {
                        return {
                            apps: {}
                        }
                    },
                    getters: {},
                    mutations: {
                        [je.LoadApps]: (e, t) => {
                            e.apps = t
                        }
                    },
                    actions: {
                        [je.LoadApps]: async ({
                            commit: e
                        }) => {
                            const t = await Fe["a"].getInstalledApps();
                            e(je.LoadApps, t)
                        }
                    }
                },
                Te = s("968c"),
                De = s("0d26"),
                _e = s("01b4"),
                Le = s("f106"),
                We = s("38c9"),
                ke = s.n(We),
                Ve = s("bf0f"),
                $e = s("7d26"),
                Ne = s("8494"),
                ze = s("90b3"),
                He = s("743b"),
                qe = s("554d"),
                Qe = s("694c"),
                Ze = s("8d06"),
                Xe = s("69f0"),
                Je = s("1f42"),
                Ye = s("3294"),
                Ke = s("39b3"),
                et = s("c19f"),
                tt = s("b2e8"),
                st = s("3eac"),
                at = s("4360");
            const ot = {
                    [$e["a"]]: $e["b"],
                    [Ne["b"]]: Ne["d"],
                    [ze["b"]]: ze["d"],
                    [He["b"]]: He["d"],
                    [qe["c"]]: qe["e"],
                    [Qe["b"]]: Qe["d"],
                    [Ze["b"]]: Ze["c"],
                    [Ee]: Ge,
                    [Je["b"]]: Je["d"],
                    [Ye["b"]]: Ye["d"],
                    [Ke["b"]]: Ke["d"],
                    [n["d"]]: n["f"],
                    [et["b"]]: et["c"],
                    [tt["b"]]: tt["d"],
                    [st["a"]]: st["c"],
                    [Xe["b"]]: Xe["d"]
                },
                nt = () => {
                    Object.keys(ot).forEach(e => {
                        at["default"].hasModule(e) && at["default"].unregisterModule(e), at["default"].registerModule(e, ot[e])
                    })
                };
            var it = nt,
                ct = s("9224");
            const rt = ["Win7 Simu BIOS v" + ct["a"], "Copyright 2020-" + (new Date).getFullYear() + ", Visnalize", "Windows 7 Copyright 2009-2022, Microsoft Corporation.\n", "Engine: " + navigator.userAgent + "\n", "Checking core features"],
                lt = [],
                ut = ["testAll", "extend", "placeholder", "cors", "sizes"];
            ke.a.extend("indexedDB", () => "indexedDB" in window);
            for (let ft in ke.a) {
                if (ut.includes(ft)) continue;
                let e = ke.a[ft] ? "ready" : "not supported";
                lt.push(`${ft}................${e}`)
            }
            var dt = {
                    data() {
                        return {
                            progress: 0,
                            type: null,
                            instant: !1,
                            installer: !1,
                            showBooting: !0,
                            showAnimation: !1,
                            metaInfo: [],
                            bootInfo: [],
                            bootTheme: "win7"
                        }
                    },
                    computed: {
                        isWin9x() {
                            return /win95|win98|win2k/.test(this.type)
                        },
                        isWinMixed() {
                            return /winxp|winvista|winLP|winLS|winW/.test(this.type)
                        },
                        isWinX() {
                            return /win8|win10|^win11/.test(this.type)
                        }
                    },
                    watch: {
                        showBooting(e) {
                            e || this.bootup()
                        },
                        bootInfo() {
                            const e = this.$refs.bootInfo;
                            e.scrollTo(0, e.scrollHeight)
                        }
                    },
                    async mounted() {
                        it(), this.$el.focus();
                        const e = await Te["default"].local.get("bios");
                        if (e && (this.instant = e.instantBoot, this.installer = e.installer, this.type = e.installer ? null : e.bootTheme, this.bootTheme = e.bootTheme || this.bootTheme), De["default"].enabled) {
                            if (De["default"].get("app")) return this.$bus.$emit("changeView", {
                                view: "Main"
                            }), this.$store.commit(_e["a"].Theme, Oe["b"].THEME), this.$store.commit(_e["a"].Shortcuts, []), void this[Be.LoadApps]();
                            const e = Object(i["h"])(De["default"].get("theme") || this.bootTheme);
                            return this.instant = !De["default"].get("boot"), this.installer = De["default"].get("dummyInstaller") || this.installer, this.showBooting = !1, this.type = e, void(this.bootTheme = e)
                        }
                        await Object(c["n"])(rt, async e => {
                            this.metaInfo.push(e), await Object(c["q"])(1e3 / rt.length)
                        }), await Object(c["n"])(lt, async e => {
                            this.bootInfo.push(e), await Object(c["q"])(1e3 / lt.length)
                        }), await Object(c["q"])(500), this.showBooting = !1
                    },
                    methods: { ...Object(w["c"])([Be.LoadApps]),
                        ...i["d"].mapMutations([i["b"].SetBootTheme]),
                        ...n["e"].mapMutations([n["b"].SetSoundSchemeFromTheme]),
                        async animate() {
                            var e;
                            this.showAnimation = !0, await this.$nextTick();
                            const t = null === (e = this.$refs.video) || void 0 === e ? void 0 : e.$el;
                            if (t && (t.addEventListener("canplay", () => t.play()), await Object(c["q"])(2e3)), "macos" === this.type) {
                                const e = setInterval(() => {
                                    this.progress < 100 ? this.progress += 20 : clearInterval(e)
                                }, 1e3)
                            }
                            await Object(c["q"])(6e3)
                        },
                        async bootup() {
                            this.instant || await this.animate();
                            try {
                                const {
                                    getAuth: e,
                                    onAuthStateChanged: t
                                } = await s.e("firebase-auth").then(s.bind(null, "be8c"));
                                await new Promise(s => {
                                    t(e(), e => {
                                        this.$store.commit(_e["a"].CurrentUser, e), s()
                                    })
                                })
                            } catch (e) {
                                console.error("Boot - auth", e)
                            }
                            this.showAnimation = !1;
                            try {
                                await Promise.all([this[Be.LoadApps](), Object(Ve["loadTranslations"])(), Le["a"].init()])
                            } catch (e) {
                                console.error("Boot - apps & assets", e)
                            }
                            this[i["b"].SetBootTheme](this.bootTheme), this[n["b"].SetSoundSchemeFromTheme](this.bootTheme), this.$bus.$emit("changeView", {
                                view: this.installer ? "Installer" : "Logon"
                            })
                        },
                        runBios() {
                            this.$bus.$emit("changeView", {
                                view: "Bios"
                            })
                        }
                    },
                    components: {
                        BootAeronoir: f,
                        BootChromeos: y,
                        BootKubuntu: U,
                        BootMacos: E,
                        BootOnebit: L,
                        BootOxygen: z,
                        BootUbuntu: Y,
                        BootWin31: oe,
                        BootWin7: ue,
                        BootWin9x: ge,
                        BootWinMixed: Pe,
                        BootWinX: Ae
                    }
                },
                mt = dt,
                St = (s("e398"), Object(m["a"])(mt, a, o, !1, null, null, null));
            t["default"] = St.exports
        },
        "827b": function(e, t, s) {},
        8494: function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    InitConfigs: "initConfigs",
                    SetPlayAsWhite: "setPlayAsWhite",
                    SetPlayAnimation: "setPlayAnimation",
                    SetPlaySounds: "setPlaySounds",
                    SetShowTips: "setShowTips",
                    SetContinueSavedGame: "setContinueSavedGame",
                    SetSaveOnExit: "setSaveOnExit",
                    SetShowLastMove: "setShowLastMove",
                    SetShowValidMoves: "setShowValidMoves",
                    SetRotateBoard: "setRotateBoard",
                    SetShowTopDownView: "setShowTopDownView",
                    SetShouldResetCamera: "setShouldResetCamera",
                    SetLevel: "setLevel",
                    SetGraphicsQuality: "setGraphicsQuality",
                    SetPieceStyle: "setPieceStyle",
                    SetBoardStyle: "setBoardStyle",
                    SetRandomStyles: "setRandomStyles",
                    SetHistory: "setHistory",
                    AddHistory: "addHistory",
                    ResetHistory: "resetHistory",
                    SetSavedGame: "setSavedGame",
                    ClearSavedGame: "clearSavedGame",
                    SetGraphicsWarningDismiss: "setGraphicsWarningDismiss",
                    SetMissingFeatsWarningDismiss: "setMissingFeatsWarningDismiss"
                },
                i = "chess",
                c = Object(o["a"])(i),
                r = n;
            t["d"] = {
                namespaced: !0,
                state() {
                    return {
                        playAsWhite: !0,
                        playAnimation: !0,
                        playSounds: !0,
                        showTips: !0,
                        continueSavedGame: !1,
                        saveOnExit: !1,
                        showLastMove: !0,
                        showValidMoves: !0,
                        rotateBoard: !0,
                        showTopDownView: !1,
                        shouldResetCamera: !0,
                        level: 1,
                        graphicsQuality: 5,
                        pieceStyle: "wood",
                        boardStyle: "wood",
                        randomStyles: !1,
                        history: {},
                        savedGame: null,
                        graphicsWarningDismiss: !1,
                        missingFeatsWarningDismiss: !1
                    }
                },
                getters: {},
                mutations: {
                    [n.SetPlayAsWhite]: (e, t) => {
                        e.playAsWhite = t
                    },
                    [n.SetPlayAnimation]: (e, t) => {
                        e.playAnimation = t
                    },
                    [n.SetPlaySounds]: (e, t) => {
                        e.playSounds = t
                    },
                    [n.SetShowTips]: (e, t) => {
                        e.showTips = t
                    },
                    [n.SetContinueSavedGame]: (e, t) => {
                        e.continueSavedGame = t
                    },
                    [n.SetSaveOnExit]: (e, t) => {
                        e.saveOnExit = t
                    },
                    [n.SetShowLastMove]: (e, t) => {
                        e.showLastMove = t
                    },
                    [n.SetShowValidMoves]: (e, t) => {
                        e.showValidMoves = t
                    },
                    [n.SetRotateBoard]: (e, t) => {
                        e.rotateBoard = t
                    },
                    [n.SetShowTopDownView]: (e, t) => {
                        e.showTopDownView = t
                    },
                    [n.SetShouldResetCamera]: (e, t) => {
                        e.shouldResetCamera = t
                    },
                    [n.SetLevel]: (e, t) => {
                        e.level = t
                    },
                    [n.SetGraphicsQuality]: (e, t) => {
                        e.graphicsQuality = t
                    },
                    [n.SetPieceStyle]: (e, t) => {
                        e.pieceStyle = t
                    },
                    [n.SetBoardStyle]: (e, t) => {
                        e.boardStyle = t
                    },
                    [n.SetRandomStyles]: (e, t) => {
                        e.randomStyles = t
                    },
                    [n.SetHistory]: (e, t) => {
                        e.history = t
                    },
                    [n.AddHistory]: (e, {
                        level: t,
                        time: s,
                        result: a
                    }) => {
                        e.history[t] || (e.history[t] = {}), e.history[t][s] = a
                    },
                    [n.ResetHistory]: e => {
                        e.history = {}
                    },
                    [n.SetSavedGame]: (e, t) => {
                        e.savedGame = t
                    },
                    [n.ClearSavedGame]: e => {
                        e.savedGame = null
                    },
                    [n.SetGraphicsWarningDismiss]: (e, t) => {
                        e.graphicsWarningDismiss = t
                    },
                    [n.SetMissingFeatsWarningDismiss]: (e, t) => {
                        e.missingFeatsWarningDismiss = t
                    }
                },
                actions: {
                    [n.InitConfigs]: async ({
                        commit: e,
                        rootState: t
                    }) => {
                        const s = await a["default"].local.get("chess", t.user),
                            o = (e, t) => s && void 0 !== s[e] ? s[e] : t;
                        e(n.SetPlayAsWhite, o("playAsWhite", !0)), e(n.SetPlayAnimation, o("playAnimation", !0)), e(n.SetPlaySounds, o("playSounds", !0)), e(n.SetShowTips, o("showTips", !0)), e(n.SetContinueSavedGame, o("continueSavedGame", !1)), e(n.SetSaveOnExit, o("saveOnExit", !1)), e(n.SetShowLastMove, o("showLastMove", !0)), e(n.SetShowValidMoves, o("showValidMoves", !0)), e(n.SetRotateBoard, o("rotateBoard", !1)), e(n.SetShowTopDownView, o("showTopDownView", !1)), e(n.SetShouldResetCamera, o("shouldResetCamera", !0)), e(n.SetLevel, o("level", 1)), e(n.SetGraphicsQuality, o("graphicsQuality", 1)), e(n.SetPieceStyle, o("pieceStyle", "wood")), e(n.SetBoardStyle, o("boardStyle", "wood")), e(n.SetRandomStyles, o("randomStyles", !1)), e(n.SetHistory, o("history", {})), e(n.SetSavedGame, o("savedGame", null)), e(n.SetGraphicsWarningDismiss, o("graphicsWarningDismiss", !1))
                    },
                    [n.SetPlayAsWhite]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetPlayAsWhite, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            playAsWhite: s
                        })
                    },
                    [n.SetPlayAnimation]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetPlayAnimation, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            playAnimation: s
                        })
                    },
                    [n.SetPlaySounds]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetPlaySounds, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            playSounds: s
                        })
                    },
                    [n.SetShowTips]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetShowTips, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            showTips: s
                        })
                    },
                    [n.SetContinueSavedGame]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetContinueSavedGame, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            continueSavedGame: s
                        })
                    },
                    [n.SetSaveOnExit]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetSaveOnExit, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            saveOnExit: s
                        })
                    },
                    [n.SetShowLastMove]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetShowLastMove, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            showLastMove: s
                        })
                    },
                    [n.SetShowValidMoves]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetShowValidMoves, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            showValidMoves: s
                        })
                    },
                    [n.SetRotateBoard]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetRotateBoard, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            rotateBoard: s
                        })
                    },
                    [n.SetShowTopDownView]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetShowTopDownView, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            showTopDownView: s
                        })
                    },
                    [n.SetShouldResetCamera]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetShouldResetCamera, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            shouldResetCamera: s
                        })
                    },
                    [n.SetLevel]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetLevel, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            level: s
                        })
                    },
                    [n.SetGraphicsQuality]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetGraphicsQuality, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            graphicsQuality: s
                        })
                    },
                    [n.SetPieceStyle]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetPieceStyle, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            pieceStyle: s
                        })
                    },
                    [n.SetBoardStyle]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetBoardStyle, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            boardStyle: s
                        })
                    },
                    [n.SetRandomStyles]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetRandomStyles, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            randomStyles: s
                        })
                    },
                    [n.SetHistory]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetHistory, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            history: s
                        })
                    },
                    [n.AddHistory]: async ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, {
                        level: o,
                        time: i,
                        result: c
                    }) => {
                        e(n.AddHistory, {
                            level: o,
                            time: i,
                            result: c
                        });
                        const r = await a["default"].local.get("chess", s.user);
                        return a["default"].local.update("chess", s.user, { ...r,
                            history: t.history
                        })
                    },
                    [n.ResetHistory]: async ({
                        commit: e,
                        rootState: t
                    }) => {
                        e(n.ResetHistory);
                        const s = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...s,
                            history: {}
                        })
                    },
                    [n.SetSavedGame]: async ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, o) => {
                        e(n.SetSavedGame, o);
                        const i = await a["default"].local.get("chess", s.user);
                        return a["default"].local.update("chess", s.user, { ...i,
                            savedGame: t.savedGame
                        })
                    },
                    [n.ClearSavedGame]: async ({
                        commit: e,
                        rootState: t
                    }) => {
                        e(n.ClearSavedGame);
                        const s = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...s,
                            savedGame: null
                        })
                    },
                    [n.SetGraphicsWarningDismiss]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetGraphicsWarningDismiss, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            graphicsWarningDismiss: s
                        })
                    },
                    [n.SetMissingFeatsWarningDismiss]: async ({
                        commit: e,
                        rootState: t
                    }, s) => {
                        e(n.SetMissingFeatsWarningDismiss, s);
                        const o = await a["default"].local.get("chess", t.user);
                        return a["default"].local.update("chess", t.user, { ...o,
                            missingFeatsWarningDismiss: s
                        })
                    }
                }
            }
        },
        "8d06": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return n
            })), s.d(t, "a", (function() {
                return i
            }));
            var a = s("968c");
            const o = {
                    SetGadgets: "setGadgets",
                    AddGadget: "addGadget",
                    SwapGadget: "swapGadgets",
                    RemoveGadget: "removeGadget",
                    ConfigGadget: "configGadget"
                },
                n = "gadgets",
                i = o;
            t["c"] = {
                state() {
                    return {
                        gadgets: []
                    }
                },
                getters: {},
                mutations: {
                    [o.SetGadgets]: (e, t) => {
                        e.gadgets = t
                    },
                    [o.AddGadget]: (e, t) => {
                        const {
                            gadgets: s
                        } = e;
                        t.id += Date.now(), e.gadgets = [...s, t]
                    },
                    [o.SwapGadget]: (e, t) => {
                        const {
                            gadgets: s
                        } = e, a = s.findIndex(e => e.id === t), o = s.splice(a, 1)[0];
                        s.push(o), e.gadgets = [...s]
                    },
                    [o.RemoveGadget]: (e, t) => {
                        const {
                            gadgets: s
                        } = e, a = s.findIndex(e => e.id === t);
                        s.splice(a, 1), e.gadgets = [...s]
                    },
                    [o.ConfigGadget]: (e, t) => {
                        const {
                            gadgets: s
                        } = e, a = s.findIndex(e => e.id === t.id);
                        e.gadgets[a].config = { ...s[a].config,
                            ...t.config
                        }
                    }
                },
                actions: {
                    [o.AddGadget]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, n) => {
                        e(o.AddGadget, n);
                        const {
                            gadgets: i
                        } = t;
                        return a["default"].update("/configs/", s.user, "configs", {
                            gadgets: i
                        })
                    },
                    [o.SwapGadget]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, n) => {
                        e(o.SwapGadget, n);
                        const {
                            gadgets: i
                        } = t;
                        return a["default"].update("/configs/", s.user, "configs", {
                            gadgets: i
                        })
                    },
                    [o.RemoveGadget]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, n) => {
                        e(o.RemoveGadget, n);
                        const {
                            gadgets: i
                        } = t;
                        return a["default"].update("/configs/", s.user, "configs", {
                            gadgets: i
                        })
                    },
                    [o.ConfigGadget]: ({
                        commit: e,
                        state: t,
                        rootState: s
                    }, n) => {
                        e(o.ConfigGadget, n);
                        const {
                            gadgets: i
                        } = t;
                        return a["default"].update("/configs/", s.user, "configs", {
                            gadgets: i
                        })
                    }
                }
            }
        },
        "8e3e": function(e, t, s) {},
        "90b3": function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return i
            })), s.d(t, "c", (function() {
                return c
            })), s.d(t, "a", (function() {
                return r
            }));
            var a = s("968c"),
                o = s("2f62");
            const n = {
                    InitSettings: "InitSettings",
                    SetSearchEngine: "SetSearchEngine"
                },
                i = "chrome",
                c = Object(o["a"])(i),
                r = n;
            t["d"] = {
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
                    [n.SetSearchEngine]: (e, t) => {
                        e.searchEngine = t
                    }
                },
                actions: {
                    [n.InitSettings]: async ({
                        commit: e,
                        rootState: t,
                        state: s
                    }) => {
                        const o = await a["default"].local.get("chrome", t.user);
                        e(n.SetSearchEngine, (null === o || void 0 === o ? void 0 : o.searchEngine) || s.searchEngine)
                    },
                    [n.SetSearchEngine]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(n.SetSearchEngine, s), a["default"].local.update("chrome", t.user, {
                        searchEngine: s
                    }))
                }
            }
        },
        9224: function(e) {
            e.exports = JSON.parse('{"a":"4.3.0"}')
        },
        a10f: function(e, t, s) {},
        aa6c: function(e, t, s) {
            "use strict";
            s("d606")
        },
        ad56: function(e, t, s) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("span", {
                        staticClass: "flex items-center gap-1 m-auto"
                    }, [s("img", {
                        staticClass: "w-full h-full animate-spin",
                        attrs: {
                            src: e.loading
                        }
                    }), e._t("default")], 2)
                },
                o = [],
                n = s("0f35"),
                i = s("2f62"),
                c = {
                    computed: { ...Object(i["f"])({
                            assets: "assets"
                        }),
                        loading() {
                            return Object(n["a"])(this.assets.assetStore.icos, "spinner-ubuntu")
                        }
                    }
                },
                r = c,
                l = s("2877"),
                u = Object(l["a"])(r, a, o, !1, null, null, null);
            t["a"] = u.exports
        },
        bd37: function(e, t, s) {
            "use strict";
            s("4ed2")
        },
        c0d3: function(e, t, s) {},
        c19f: function(e, t, s) {
            "use strict";
            s.d(t, "b", (function() {
                return n
            })), s.d(t, "a", (function() {
                return i
            }));
            var a = s("968c");
            const o = {
                    SetNotes: "setNotes"
                },
                n = "stickynotes",
                i = o;
            t["c"] = {
                state() {
                    return {
                        notes: []
                    }
                },
                mutations: {
                    [o.SetNotes]: (e, t) => {
                        e.notes = t
                    }
                },
                actions: {
                    [o.SetNotes]: ({
                        commit: e,
                        rootState: t
                    }, s) => (e(o.SetNotes, s), a["default"].local.update("notes", t.user, s))
                }
            }
        },
        d606: function(e, t, s) {},
        e398: function(e, t, s) {
            "use strict";
            s("827b")
        },
        f58f: function(e, t, s) {
            "use strict";
            s("a10f")
        }
    }
]);