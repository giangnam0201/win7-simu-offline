(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["device2"], {
        "1b4b": function(e, n, o) {
            "use strict";
            o.r(n), o.d(n, "DeviceWeb", (function() {
                return a
            }));
            var t = o("1547");
            class a extends t["b"] {
                getInstalledApps() {
                    return {}
                }
                getInfo() {
                    const e = 16 * 1024 ** 3;
                    return {
                        locale: navigator.languages[0] || navigator.language,
                        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                        totalMemory: e,
                        availMemory: e,
                        cpuCores: navigator.hardwareConcurrency || 1,
                        display: window ? window.innerHeight + "x" + window.innerWidth : ""
                    }
                }
            }
        }
    }
]);