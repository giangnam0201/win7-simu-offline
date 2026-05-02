(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["listview-tiles"], {
        "3f1f": function(e, t, i) {
            "use strict";
            i("e6be")
        },
        7662: function(e, t, i) {
            "use strict";
            i.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "flex flex-wrap gap-2 w-full listview__view has-tiles"
                    }, [e._l(e.items, (function(t, s) {
                        return i("listview-item", {
                            key: s,
                            attrs: {
                                item: t
                            }
                        }, [t.extras ? [1 === t.extras.length ? i("listview-extra", [e._v(" " + e._s(t.extras[0].value) + " ")]) : e._l(t.extras, (function(t, s) {
                            return i("listview-extra", {
                                key: s
                            }, [e._v(" " + e._s(t.value) + " ")])
                        }))] : e._e()], 2)
                    })), e._t("default")], 2)
                },
                l = [],
                a = i("c162"),
                n = i("0616"),
                r = {
                    props: {
                        items: {
                            type: Array
                        }
                    },
                    components: {
                        ListviewItem: n["a"],
                        ListviewExtra: a["a"]
                    }
                },
                u = r,
                c = (i("3f1f"), i("2877")),
                f = Object(c["a"])(u, s, l, !1, null, null, null);
            t["default"] = f.exports
        },
        c162: function(e, t, i) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("span", {
                        staticClass: "opacity-70 overflow-hidden text-base text-ellipsis leading-5 whitespace-nowrap listview__item-extra"
                    }, [e._t("default")], 2)
                },
                l = [],
                a = {},
                n = a,
                r = i("2877"),
                u = Object(r["a"])(n, s, l, !1, null, null, null);
            t["a"] = u.exports
        },
        e6be: function(e, t, i) {}
    }
]);