(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["vue-store", "testmode"], {
        "0d26": function(e, c, a) {
            "use strict";
            a.r(c), a.d(c, "TestParam", (function() {
                return s
            }));
            var r = a("f708"),
                o = a("c170"),
                n = a("3b8c");
            const s = {
                    app: {
                        type: "select",
                        values: [null, ...o["d"]]
                    },
                    theme: {
                        type: "select",
                        values: [null, ...Object.keys(n["a"])]
                    },
                    locale: {
                        type: "text",
                        placeholder: "ar"
                    },
                    wei: {
                        type: "number",
                        placeholder: "1.0 - 7.9"
                    },
                    boot: {
                        type: "checkbox"
                    },
                    cursor: {
                        type: "checkbox"
                    },
                    outline: {
                        type: "checkbox"
                    },
                    subscribed: {
                        type: "checkbox"
                    },
                    hideTestbox: {
                        type: "checkbox"
                    },
                    notification: {
                        type: "checkbox"
                    },
                    dummyInstaller: {
                        type: "checkbox"
                    }
                },
                m = {
                    query: null,
                    enabled: !1,
                    init() {
                        !this.query && Object(r["b"])() && (this.query = new URLSearchParams(location.search), this.enabled = !!this.query.get("testmode"))
                    },
                    get(e) {
                        return this.query ? this.query.get(e) : null
                    }
                };
            c["default"] = m
        },
        2299: function(e, c, a) {
            "use strict";
            a.d(c, "c", (function() {
                return r
            })), a.d(c, "a", (function() {
                return o
            })), a.d(c, "b", (function() {
                return n
            })), a.d(c, "e", (function() {
                return s
            })), a.d(c, "d", (function() {
                return m
            }));
            const r = ["#aad1fb", "#5986ca", "#61d4d7", "#6bc35b", "#b3e165", "#fcec8a", "#f0b85b", "#d35352", "#fb83cb", "#fbd7f9", "#9f81bf", "#d9c8db", "#cbc2a5", "#8c6a6b", "#ababab", "#e9e9e9", "#ffb900", "#f7630c", "#da3b01", "#d13438", "#e74856", "#ea005e", "#e3008c", "#c239b3", "#0078d7", "#8e8cd8", "#8764b8", "#b146c2", "#0099bc", "#00b7c3", "#00b294", "#00cc6a"],
                o = ["#000000", "#7f7f7f", "#880015", "#ed1c24", "#ff7f27", "#fff200", "#22b14c", "#00a2e8", "#3f48cc", "#a349a4", "#ffffff", "#c3c3c3", "#b97a57", "#ffaec9", "#ffc90e", "#efe4b0", "#b5e61d", "#99d9ea", "#7092be", "#c8bfe7"],
                n = ["#c3f3fa", "#c8fec0", "#f9ccf8", "#d2d7fc", "#eaeaea", "#fffeb3"],
                s = ["#fff", "#f00", "#c0504d", "#d16349", "#dd8484", "#ccc", "#ffc000", "#f79646", "#d19049", "#f3a447", "#a5a5a5", "#ff0", "#9bbb59", "#ccb400", "#dfce04", "#666", "#00b050", "#4bacc6", "#8fb08c", "#a5b592", "#333", "#004dbb", "#4f81bd", "#646b86", "#809ec2", "#000", "#9b00d3", "#8064a2", "#9e7c7c", "#9c85c0"],
                m = ["#ff0", "#0f0", "#0ff", "#f0f", "#00f", "#f00", "#000080", "#008080", "#008000", "#800080", "#800000", "#808000", "#808080", "#c0c0c0", "#000"]
        },
        "3b8c": function(e, c, a) {
            "use strict";
            a.d(c, "a", (function() {
                return n
            }));
            var r = a("2299");
            const o = "Windows Default",
                n = {
                    base: {
                        name: "Base theme",
                        bg: "#fffd"
                    },
                    "aero-1": {
                        name: "Windows 7",
                        color: r["c"][0],
                        category: "aero",
                        transparent: !0,
                        sound: o
                    },
                    "aero-2": {
                        name: "Architecture",
                        bg: "architecture",
                        color: r["c"][1],
                        category: "aero",
                        transparent: !0,
                        sound: "Cityscape"
                    },
                    "aero-3": {
                        name: "Landscape",
                        bg: "landscape",
                        color: r["c"][14],
                        category: "aero",
                        transparent: !0,
                        sound: "Landscape"
                    },
                    "aero-4": {
                        name: "Nature",
                        bg: "nature",
                        color: r["c"][10],
                        category: "aero",
                        transparent: !0,
                        sound: "Garden"
                    },
                    "basic-1": {
                        name: "Windows 7 Basic",
                        category: "basic",
                        color: "#a7c0dc",
                        sound: o
                    },
                    "basic-2": {
                        name: "Windows Classic",
                        bg: "#3b6ea4",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
                    },
                    "basic-3": {
                        name: "High Contrast Black",
                        bg: "#000",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
                    },
                    "basic-4": {
                        name: "High Contrast White",
                        bg: "#fff",
                        iconPack: "win7classic",
                        category: "basic",
                        sound: o
                    },
                    win31: {
                        name: "Windows 3.1",
                        bg: "#bfbdc0",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 3.1"
                    },
                    win95: {
                        name: "Windows 95",
                        bg: "#007d7b",
                        category: "wins",
                        sound: "Windows 95"
                    },
                    win98: {
                        name: "Windows 98",
                        bg: "#57a8a8",
                        iconPack: "win95",
                        category: "wins",
                        sound: "Windows 98"
                    },
                    win2k: {
                        name: "Windows 2000",
                        bg: "#3b6ea4",
                        category: "wins",
                        sound: "Window 2000"
                    },
                    winxp: {
                        name: "Windows XP",
                        bg: "winxp",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows XP"
                    },
                    winxpE: {
                        name: "Windows XP (Embedded)",
                        bg: "winxp",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpG: {
                        name: "Windows XP (Olive Green)",
                        bg: "autumn",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpN: {
                        name: "Windows XP (Royale Noir)",
                        bg: "winxp",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpR: {
                        name: "Windows XP (Royale)",
                        bg: "follows",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpS: {
                        name: "Windows XP (Silver)",
                        bg: "azul",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winxpZ: {
                        name: "Windows XP (Zune)",
                        bg: "ascent",
                        iconPack: "winxp",
                        premiumId: "winxp",
                        premium: "pay",
                        sound: "Windows XP"
                    },
                    winvista: {
                        name: "Windows Vista",
                        bg: "winvista",
                        color: "#14A3C7",
                        category: "wins",
                        transparent: !0,
                        sound: o
                    },
                    win8: {
                        name: "Windows 8",
                        bg: "win8",
                        color: "#69aef7",
                        category: "wins",
                        sound: o
                    },
                    win81: {
                        name: "Windows 8.1",
                        bg: "win81",
                        color: "#f0c869",
                        iconPack: "win8",
                        category: "wins",
                        sound: o
                    },
                    win10: {
                        name: "Windows 10",
                        bg: "win10",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 10"
                    },
                    win11: {
                        name: "Windows 11 (Light)",
                        bg: "win11",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 11"
                    },
                    win11dark: {
                        name: "Windows 11 (Dark)",
                        bg: "win11dark",
                        color: "#0078d7",
                        premium: "ad",
                        category: "wins",
                        sound: "Windows 11"
                    },
                    macos: {
                        name: "MacOS",
                        bg: "macos",
                        premium: "ad",
                        sound: "MacOS"
                    },
                    chromeos: {
                        name: "ChromeOS",
                        bg: "chromeos",
                        premium: "ad",
                        sound: "ChromeOS"
                    },
                    ubuntu: {
                        name: "Ubuntu",
                        bg: "ubuntu",
                        color: r["c"][6],
                        premium: "pay"
                    },
                    kubuntu: {
                        name: "Kubuntu (Breeze)",
                        bg: "kubuntu",
                        color: r["c"][1],
                        premium: "ad"
                    },
                    winLS: {
                        name: "Windows Longhorn (Slate)",
                        bg: "winLS",
                        iconPack: "winxp",
                        premium: "ad",
                        sound: "Windows Longhorn"
                    },
                    winLP: {
                        name: "Windows Longhorn (Plex)",
                        bg: "winLP",
                        premium: "ad",
                        sound: "Windows Longhorn"
                    },
                    aeroNoir: {
                        name: "Aero Noir",
                        bg: "aeroNoir",
                        color: r["c"][3],
                        premiumId: "aeronoir",
                        premium: "pay",
                        transparent: !0,
                        sound: o
                    },
                    oxygen: {
                        name: "Oxygen",
                        bg: "oxygen",
                        color: r["c"][4],
                        premium: "pay"
                    },
                    winW: {
                        name: "Windows Whistler",
                        bg: "winW",
                        premium: "ad",
                        sound: "Windows Whistler"
                    },
                    onebit: {
                        name: "Onebit",
                        bg: "#352b30",
                        premium: "pay"
                    }
                }
        },
        c170: function(e, c, a) {
            "use strict";
            a.d(c, "b", (function() {
                return r
            })), a.d(c, "a", (function() {
                return o
            })), a.d(c, "c", (function() {
                return n
            }));
            const r = {
                    About: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("about")]).then(a.bind(null, "52fa")),
                    Bin: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("bin")]).then(a.bind(null, "030f")),
                    Bsod: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("bsod")]).then(a.bind(null, "60fe")),
                    Calc: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("calc")]).then(a.bind(null, "e77c")),
                    Camera: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("camera")]).then(a.bind(null, "2164")),
                    Chess: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("chess")]).then(a.bind(null, "fc19")),
                    Chrome: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("chrome")]).then(a.bind(null, "5cc4")),
                    Cmd: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("cmd")]).then(a.bind(null, "b894")),
                    Computer: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer")]).then(a.bind(null, "b47a")),
                    Cpanel: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("firebase-auth"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("cpanel")]).then(a.bind(null, "a259")),
                    GadgetBattery: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-battery")]).then(a.bind(null, "9273")),
                    GadgetCalendar: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-calendar~logon-ubuntu~themestudio~windows"), a.e("g-calendar")]).then(a.bind(null, "4b83")),
                    GadgetClock: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("g-clock")]).then(a.bind(null, "a62c")),
                    GadgetCurrency: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("localforage"), a.e("g-currency")]).then(a.bind(null, "3723")),
                    GadgetWeather: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("vue-i18n"), a.e("g-weather~mediacenter"), a.e("g-weather")]).then(a.bind(null, "52b4")),
                    Gadgets: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("gadgets")]).then(a.bind(null, "cd42")),
                    Games: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("games")]).then(a.bind(null, "0dfb")),
                    Ie: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("ie")]).then(a.bind(null, "1386")),
                    Installer: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("installer~logon-ubuntu~windows"), a.e("installer")]).then(a.bind(null, "f354")),
                    Magnifier: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("magnifier")]).then(a.bind(null, "7682")),
                    Mediacenter: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("firebase-auth"), a.e("g-weather~mediacenter"), a.e("mediacenter")]).then(a.bind(null, "a4c1")),
                    Minesweeper: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("minesweeper")]).then(a.bind(null, "245c")),
                    Mouse: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("mouse~sound~system"), a.e("mouse")]).then(a.bind(null, "9231")),
                    Notepad: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("notepad~plugin-codemirror~themestudio"), a.e("notepad~themestudio"), a.e("notepad")]).then(a.bind(null, "8859")),
                    OnlineGame: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("onlinegame")]).then(a.bind(null, "9c9f")),
                    Paint: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("paint~themestudio~wordpad"), a.e("paint")]).then(a.bind(null, "e770")),
                    Personalize: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("personalize~plugin-cssvar"), a.e("personalize")]).then(a.bind(null, "7c28")),
                    Photo: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("photo")]).then(a.bind(null, "273a")),
                    Player: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("mime-types"), a.e("player")]).then(a.bind(null, "9b15")),
                    Purbleplace: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("purbleplace")]).then(a.bind(null, "b055")),
                    Recorder: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("recorder")]).then(a.bind(null, "01ef")),
                    Region: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("vue-i18n"), a.e("region")]).then(a.bind(null, "344b")),
                    Run: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("run")]).then(a.bind(null, "dc68")),
                    Screensaver: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("screensaver")]).then(a.bind(null, "06e4")),
                    Shortcut: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("shortcutwiz")]).then(a.bind(null, "a8a1")),
                    Snipping: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("snipping")]).then(a.bind(null, "331a")),
                    Solitaire: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("solitaire")]).then(a.bind(null, "67ef")),
                    Sound: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("mouse~sound~system"), a.e("sound")]).then(a.bind(null, "9ad7")),
                    Sticky: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("stickynotes")]).then(a.bind(null, "eee5")),
                    System: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("mouse~sound~system"), a.e("system")]).then(a.bind(null, "508f")),
                    Taskbar: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("taskbar")]).then(a.bind(null, "1465")),
                    Taskmgr: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("taskmgr")]).then(a.bind(null, "d64a")),
                    Tetris: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("chess~minesweeper~purbleplace~solitaire~tetris"), a.e("tetris")]).then(a.bind(null, "13bc")),
                    Themestudio: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("firebase-auth"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("g-calendar~logon-ubuntu~themestudio~windows"), a.e("notepad~plugin-codemirror~themestudio"), a.e("logon-ubuntu~themestudio~windows"), a.e("paint~themestudio~wordpad"), a.e("notepad~themestudio"), a.e("startmenu~themestudio"), a.e("themestudio")]).then(a.bind(null, "fd8a")),
                    Webapp: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("webapp")]).then(a.bind(null, "99c7")),
                    Wordpad: () => Promise.all([a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~bd97ba14"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~g-battery~g-calendar~g-clock~g-currency~~c70535d0"), a.e("about~bin~boot~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~logon~ma~120e0812"), a.e("about~assistive-control~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~insta~d6760f62"), a.e("about~bin~bsod~calc~camera~chess~chrome~cmd~computer~cpanel~gadgets~games~ie~installer~magnifier~med~2f5a35eb"), a.e("chunk-9691fd08"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~g-weather~games~installer~mediacenter~mouse~not~67b48468"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~cpanel~installer~mediacenter~mouse~notepad~onlinegame~pain~47ce5097"), a.e("database"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~g-currency~games~installer~mediacenter~mouse~notepad~onlin~e05a27b6"), a.e("bin~bsod~camera~chess~chrome~cmd~computer~installer~mediacenter~mouse~notepad~onlinegame~paint~perso~bed98dc7"), a.e("bin~bsod~camera~chrome~computer~cpanel~games~ie~notepad~paint~personalize~player~recorder~snipping~t~f4693ee1"), a.e("bin~bsod~camera~computer~games~notepad~paint~personalize~player~recorder~snipping~wordpad"), a.e("computer"), a.e("paint~themestudio~wordpad"), a.e("wordpad")]).then(a.bind(null, "42b0"))
                },
                o = {
                    about: ["winver"],
                    calc: ["calculator"],
                    computer: ["explorer", "documents", "music", "pictures"],
                    cpanel: ["control"],
                    paint: ["mspaint"],
                    player: ["wmplayer"],
                    snipping: ["snippingtool"],
                    sticky: ["notes", "stickynotes"],
                    taskmgr: ["taskmgr"]
                },
                n = ["data", "datetime", "default", "storage", "display", "access", "gadgets", "keyboard", "mouse", "personalize", "power", "programs", "region", "sound", "speech", "sync", "system", "taskbar", "accounts", "defender", "update"],
                s = ["about", "bsod", "calc", "camera", "chrome", "cmd", "games", "ie", "installer", "magnifier", "mediacenter", "notepad", "paint", "player", "recorder", "run", "snipping", "sticky", "themestudio", "wordpad"];
            c["d"] = s
        }
    }
]);