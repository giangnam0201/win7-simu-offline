(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["device"], {
        "51e6": function(T, e, n) {
            "use strict";
            n.r(e), n.d(e, "Action", (function() {
                return s["a"]
            })), n.d(e, "isTouchDevice", (function() {
                return A
            })), n.d(e, "isOnline", (function() {
                return O
            })), n.d(e, "getBattery", (function() {
                return r
            })), n.d(e, "showToast", (function() {
                return a
            })), n.d(e, "openFile", (function() {
                return d
            })), n.d(e, "getDeviceInfo", (function() {
                return o
            })), n.d(e, "getAndroidVersion", (function() {
                return C
            })), n.d(e, "launchApp", (function() {
                return c
            })), n.d(e, "launchSetting", (function() {
                return G
            })), n.d(e, "restart", (function() {
                return R
            })), n.d(e, "getWeiScore", (function() {
                return u
            })), n.d(e, "getWeiBaseScore", (function() {
                return g
            }));
            var t = n("1547");
            const I = Object(t["d"])("Device", {
                web: () => n.e("chunk-2d0c8407").then(n.bind(null, "53a4")).then(T => new T.DeviceWeb)
            });
            var S = n("a81a");
            const _ = Object(t["d"])("Launcher", {
                web: () => n.e("launcher").then(n.bind(null, "d5b0")).then(T => new T.LauncherWeb)
            });
            var N = n("c8ec");
            const i = Object(t["d"])("Toast", {
                web: () => n.e("chunk-2d0a45fe").then(n.bind(null, "05be")).then(T => new T.ToastWeb)
            });
            var E = n("f708"),
                s = n("6792");
            const A = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                O = async () => Object(E["a"])() ? (await N["a"].getStatus()).connected : new Promise(T => {
                    const e = new Image;
                    e.src = "https://picsum.photos/1/1", e.onload = () => T(!0), e.onerror = () => T(!1)
                }),
                r = async () => {
                    try {
                        return await I.getBatteryInfo()
                    } catch (T) {
                        return {
                            batteryLevel: 1,
                            isCharging: !1
                        }
                    }
                },
                a = async (T, e = "long") => {
                    await i.show({
                        text: "string" === typeof T ? T : null,
                        duration: e
                    });
                    const n = document.querySelector("pwa-toast");
                    n && n.setAttribute("style", "z-index: 9999")
                },
                d = (T = !1, e = "") => new Promise(n => {
                    const t = document.createElement("input");
                    t.type = "file", t.multiple = T, t.accept = e, t.click(), t.onchange = T => {
                        t.remove(), n(T.target)
                    }
                }),
                o = async () => {
                    const T = (await r()).batteryLevel || 1;
                    return { ...await I.getInfo(),
                        ...await S["a"].getInfo(),
                        battery: 100 * T
                    }
                },
                C = async () => {
                    if (!Object(E["a"])()) return null;
                    const {
                        osVersion: T
                    } = await I.getInfo();
                    return parseInt(T)
                },
                c = T => _.launchPackage({
                    packageName: T
                }),
                G = T => _.launchMiscellaneous({
                    target: T
                }),
                R = () => window.location.reload(),
                u = async () => {
                    const T = await S["a"].getInfo(),
                        e = T.cpuCores,
                        n = T.totalMemory / 1024 ** 3,
                        t = document.createElement("canvas"),
                        I = !(!window.WebGL2RenderingContext || !t.getContext("webgl2"));
                    return {
                        cpu: e >= 8 ? 7.9 : e >= 4 ? 7 : e >= 2 ? 5 : 2,
                        ram: n >= 8 ? 7.9 : n >= 4 ? 6 : n >= 2 ? 5 : 3,
                        graphics: I ? 7.9 : 4
                    }
                },
                g = async () => {
                    const T = await u();
                    return Math.min(...Object.values(T))
                }
        },
        6792: function(T, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            })), n.d(e, "c", (function() {
                return S
            })), n.d(e, "b", (function() {
                return _
            }));
            var t = n("8229");
            const I = {
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
                S = {
                    ChangePage: "changePage",
                    OpenWindow: "open",
                    CloseWindow: "close",
                    PingWindow: "ping"
                },
                _ = {
                    THEME: "aero-1",
                    SIZE_ICONS: "md",
                    SHOW_ICONS: !0,
                    AUTO_ICONS: !1,
                    SHOW_CURSOR: !0,
                    CURSOR_SCHEME: t["c"].Aero,
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
        8229: function(T, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return t
            })), n.d(e, "c", (function() {
                return I
            })), n.d(e, "d", (function() {
                return S
            })), n.d(e, "b", (function() {
                return _
            })), n.d(e, "e", (function() {
                return N
            })), n.d(e, "f", (function() {
                return i
            }));
            const t = {
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
                I = {
                    Aero: 0,
                    Standard: 1,
                    Black: 2,
                    Magnified: 3,
                    ThreeD: 4,
                    Hand: 5,
                    MacOS: 6,
                    Ubuntu: 7
                },
                S = {
                    [I.Aero]: {
                        label: "Windows Aero",
                        suffix: "-aero"
                    },
                    [I.Standard]: {
                        label: "Windows Standard",
                        suffix: "-standard"
                    },
                    [I.Black]: {
                        label: "Windows Black",
                        suffix: "-black"
                    },
                    [I.Magnified]: {
                        label: "Magnified",
                        suffix: "-magnified"
                    },
                    [I.ThreeD]: {
                        label: "3d-White",
                        suffix: "-3d"
                    },
                    [I.Hand]: {
                        label: "Hands",
                        suffix: "-hand"
                    },
                    [I.MacOS]: {
                        label: "MacOS",
                        suffix: "-macos"
                    },
                    [I.Ubuntu]: {
                        label: "Ubuntu",
                        suffix: "-ubuntu"
                    }
                },
                _ = {
                    [t.Default]: "default",
                    [t.Working]: "working",
                    [t.Busy]: "busy",
                    [t.Precision]: "precision",
                    [t.Typing]: "typing",
                    [t.ResizeV]: "resizev",
                    [t.ResizeH]: "resizeh",
                    [t.ResizeD1]: "resized1",
                    [t.ResizeD2]: "resized2",
                    [t.Move]: "move"
                },
                N = {
                    tl: t.ResizeD1,
                    br: t.ResizeD1,
                    tr: t.ResizeD2,
                    bl: t.ResizeD2,
                    tm: t.ResizeV,
                    mt: t.ResizeV,
                    bm: t.ResizeV,
                    mb: t.ResizeV,
                    ml: t.ResizeH,
                    mr: t.ResizeH,
                    "top-left": t.ResizeD1,
                    "bottom-right": t.ResizeD1,
                    "top-right": t.ResizeD2,
                    "bottom-left": t.ResizeD2,
                    top: t.ResizeV,
                    bottom: t.ResizeV,
                    left: t.ResizeH,
                    right: t.ResizeH
                },
                i = {
                    select: t.Shape,
                    pencil: t.Pencil,
                    bucket: t.Bucket,
                    text: t.Typing,
                    eraser: t.Eraser,
                    picker: t.Picker,
                    brush: t.Brush,
                    shape: t.Shape
                }
        },
        a81a: function(T, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            }));
            var t = n("1547");
            const I = Object(t["d"])("Device2", {
                web: () => n.e("device2").then(n.bind(null, "1b4b")).then(T => new T.DeviceWeb)
            })
        },
        c8ec: function(T, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            }));
            var t = n("1547");
            const I = Object(t["d"])("Network", {
                web: () => n.e("chunk-2d0abc10").then(n.bind(null, "172f")).then(T => new T.NetworkWeb)
            })
        }
    }
]);