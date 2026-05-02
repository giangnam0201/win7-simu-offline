(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["wordpad"], {
        "14c8": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.booleanProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(Boolean, t);
            e.booleanProp = o
        },
        1809: function(t, e, n) {},
        "21fc": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isNonNegative = void 0;
            const r = t => {
                if ("number" !== typeof t || t < 0 || Number.isNaN(t)) return "value should be a non-negative number"
            };
            e.isNonNegative = r
        },
        "2ec8": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.arrayProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(Array, t);
            e.arrayProp = o
        },
        "31a1": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isNonPositive = e.isNonNegative = e.isPositive = e.isNegative = e.instanceOfProp = e.oneOfTypesProp = e.oneOfObjectKeysProp = e.oneOfProp = e.functionProp = e.objectProp = e.arrayProp = e.anyProp = e.vueComponentProp = e.symbolProp = e.integerProp = e.numberProp = e.booleanProp = e.stringProp = void 0;
            var r = n("4ac1");
            Object.defineProperty(e, "stringProp", {
                enumerable: !0,
                get: function() {
                    return r.stringProp
                }
            });
            var o = n("14c8");
            Object.defineProperty(e, "booleanProp", {
                enumerable: !0,
                get: function() {
                    return o.booleanProp
                }
            });
            var i = n("bf6f");
            Object.defineProperty(e, "numberProp", {
                enumerable: !0,
                get: function() {
                    return i.numberProp
                }
            });
            var s = n("b049");
            Object.defineProperty(e, "integerProp", {
                enumerable: !0,
                get: function() {
                    return s.integerProp
                }
            });
            var a = n("d610");
            Object.defineProperty(e, "symbolProp", {
                enumerable: !0,
                get: function() {
                    return a.symbolProp
                }
            });
            var l = n("97ca");
            Object.defineProperty(e, "vueComponentProp", {
                enumerable: !0,
                get: function() {
                    return l.vueComponentProp
                }
            });
            var c = n("dfbe");
            Object.defineProperty(e, "anyProp", {
                enumerable: !0,
                get: function() {
                    return c.anyProp
                }
            });
            var d = n("2ec8");
            Object.defineProperty(e, "arrayProp", {
                enumerable: !0,
                get: function() {
                    return d.arrayProp
                }
            });
            var h = n("8fd9");
            Object.defineProperty(e, "objectProp", {
                enumerable: !0,
                get: function() {
                    return h.objectProp
                }
            });
            var u = n("e081");
            Object.defineProperty(e, "functionProp", {
                enumerable: !0,
                get: function() {
                    return u.functionProp
                }
            });
            var p = n("9bb7");
            Object.defineProperty(e, "oneOfProp", {
                enumerable: !0,
                get: function() {
                    return p.oneOfProp
                }
            });
            var f = n("99ae");
            Object.defineProperty(e, "oneOfObjectKeysProp", {
                enumerable: !0,
                get: function() {
                    return f.oneOfObjectKeysProp
                }
            });
            var m = n("86e0");
            Object.defineProperty(e, "oneOfTypesProp", {
                enumerable: !0,
                get: function() {
                    return m.oneOfTypesProp
                }
            });
            var g = n("c0f9");
            Object.defineProperty(e, "instanceOfProp", {
                enumerable: !0,
                get: function() {
                    return g.instanceOfProp
                }
            });
            var y = n("7074");
            Object.defineProperty(e, "isNegative", {
                enumerable: !0,
                get: function() {
                    return y.isNegative
                }
            });
            var b = n("f3d4");
            Object.defineProperty(e, "isPositive", {
                enumerable: !0,
                get: function() {
                    return b.isPositive
                }
            });
            var v = n("21fc");
            Object.defineProperty(e, "isNonNegative", {
                enumerable: !0,
                get: function() {
                    return v.isNonNegative
                }
            });
            var w = n("f0b7");
            Object.defineProperty(e, "isNonPositive", {
                enumerable: !0,
                get: function() {
                    return w.isNonPositive
                }
            })
        },
        "357a": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isInstanceOf = void 0;
            const r = t => e => {
                if (!(e instanceof t)) return "value should be an instance of " + t.name
            };
            e.isInstanceOf = r
        },
        "3b20": function(t, e, n) {},
        "3f3e": function(t, e, n) {
            "use strict";
            n("3b20")
        },
        "42b0": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("window-main", {
                        staticClass: "is-wordpad",
                        attrs: {
                            id: "window-" + t.id,
                            lock: t.isLocked
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            icon: t.id,
                            title: t.fileName + " - " + t.$t(t.id)
                        }
                    }, [n("window-controls", {
                        attrs: {
                            close: t.exit
                        }
                    })], 1), t.editor ? n("wordpad-ribbon", {
                        attrs: {
                            editor: t.editor,
                            ribbonShortcuts: t.ribbonShortcuts
                        },
                        on: {
                            open: t.handleOpenDialog
                        }
                    }) : t._e(), n("window-body", [t.editor ? n("tiptap-editor", {
                        attrs: {
                            editor: t.editor
                        },
                        model: {
                            value: t.content,
                            callback: function(e) {
                                t.content = e
                            },
                            expression: "content"
                        }
                    }) : t._e()], 1)], 1), t.showDatetimeDialog ? n("dialog-datetime", {
                        attrs: {
                            parentId: t.id
                        },
                        on: {
                            done: t.insertDatetime,
                            cancel: t.toggleDatetime
                        }
                    }) : t._e(), t.showSaveDialog ? n("dialog-save", {
                        attrs: {
                            parent: t.id,
                            dialogIcon: t.id,
                            dialogName: "save-as",
                            fileName: t.fileName,
                            fileTypes: t.fileTypes,
                            content: t.content
                        },
                        on: {
                            cancel: t.toggleSaveDialog,
                            done: t.handleSaveDone
                        }
                    }) : t._e(), t.showOpenDialog ? n("dialog-open", {
                        attrs: {
                            parent: t.id,
                            dialogIcon: t.id,
                            dialogName: "open",
                            filter: t.filter
                        },
                        on: {
                            cancel: t.toggleOpenDialog,
                            done: t.handleOpenDone
                        }
                    }) : t._e()], 1)
                },
                o = [],
                i = n("694c"),
                s = n("0e9a");

            function a(t) {
                this.content = t
            }
            a.prototype = {
                constructor: a,
                find: function(t) {
                    for (var e = 0; e < this.content.length; e += 2)
                        if (this.content[e] === t) return e;
                    return -1
                },
                get: function(t) {
                    var e = this.find(t);
                    return -1 == e ? void 0 : this.content[e + 1]
                },
                update: function(t, e, n) {
                    var r = n && n != t ? this.remove(n) : this,
                        o = r.find(t),
                        i = r.content.slice();
                    return -1 == o ? i.push(n || t, e) : (i[o + 1] = e, n && (i[o] = n)), new a(i)
                },
                remove: function(t) {
                    var e = this.find(t);
                    if (-1 == e) return this;
                    var n = this.content.slice();
                    return n.splice(e, 2), new a(n)
                },
                addToStart: function(t, e) {
                    return new a([t, e].concat(this.remove(t).content))
                },
                addToEnd: function(t, e) {
                    var n = this.remove(t).content.slice();
                    return n.push(t, e), new a(n)
                },
                addBefore: function(t, e, n) {
                    var r = this.remove(e),
                        o = r.content.slice(),
                        i = r.find(t);
                    return o.splice(-1 == i ? o.length : i, 0, e, n), new a(o)
                },
                forEach: function(t) {
                    for (var e = 0; e < this.content.length; e += 2) t(this.content[e], this.content[e + 1])
                },
                prepend: function(t) {
                    return t = a.from(t), t.size ? new a(t.content.concat(this.subtract(t).content)) : this
                },
                append: function(t) {
                    return t = a.from(t), t.size ? new a(this.subtract(t).content.concat(t.content)) : this
                },
                subtract: function(t) {
                    var e = this;
                    t = a.from(t);
                    for (var n = 0; n < t.content.length; n += 2) e = e.remove(t.content[n]);
                    return e
                },
                toObject: function() {
                    var t = {};
                    return this.forEach((function(e, n) {
                        t[e] = n
                    })), t
                },
                get size() {
                    return this.content.length >> 1
                }
            }, a.from = function(t) {
                if (t instanceof a) return t;
                var e = [];
                if (t)
                    for (var n in t) e.push(n, t[n]);
                return new a(e)
            };
            var l = a;

            function c(t, e, n) {
                for (let r = 0;; r++) {
                    if (r == t.childCount || r == e.childCount) return t.childCount == e.childCount ? null : n;
                    let o = t.child(r),
                        i = e.child(r);
                    if (o != i) {
                        if (!o.sameMarkup(i)) return n;
                        if (o.isText && o.text != i.text) {
                            for (let t = 0; o.text[t] == i.text[t]; t++) n++;
                            return n
                        }
                        if (o.content.size || i.content.size) {
                            let t = c(o.content, i.content, n + 1);
                            if (null != t) return t
                        }
                        n += o.nodeSize
                    } else n += o.nodeSize
                }
            }

            function d(t, e, n, r) {
                for (let o = t.childCount, i = e.childCount;;) {
                    if (0 == o || 0 == i) return o == i ? null : {
                        a: n,
                        b: r
                    };
                    let s = t.child(--o),
                        a = e.child(--i),
                        l = s.nodeSize;
                    if (s != a) {
                        if (!s.sameMarkup(a)) return {
                            a: n,
                            b: r
                        };
                        if (s.isText && s.text != a.text) {
                            let t = 0,
                                e = Math.min(s.text.length, a.text.length);
                            while (t < e && s.text[s.text.length - t - 1] == a.text[a.text.length - t - 1]) t++, n--, r--;
                            return {
                                a: n,
                                b: r
                            }
                        }
                        if (s.content.size || a.content.size) {
                            let t = d(s.content, a.content, n - 1, r - 1);
                            if (t) return t
                        }
                        n -= l, r -= l
                    } else n -= l, r -= l
                }
            }
            class h {
                constructor(t, e) {
                    if (this.content = t, this.size = e || 0, null == e)
                        for (let n = 0; n < t.length; n++) this.size += t[n].nodeSize
                }
                nodesBetween(t, e, n, r = 0, o) {
                    for (let i = 0, s = 0; s < e; i++) {
                        let a = this.content[i],
                            l = s + a.nodeSize;
                        if (l > t && !1 !== n(a, r + s, o || null, i) && a.content.size) {
                            let o = s + 1;
                            a.nodesBetween(Math.max(0, t - o), Math.min(a.content.size, e - o), n, r + o)
                        }
                        s = l
                    }
                }
                descendants(t) {
                    this.nodesBetween(0, this.size, t)
                }
                textBetween(t, e, n, r) {
                    let o = "",
                        i = !0;
                    return this.nodesBetween(t, e, (s, a) => {
                        let l = s.isText ? s.text.slice(Math.max(t, a) - a, e - a) : s.isLeaf ? r ? "function" === typeof r ? r(s) : r : s.type.spec.leafText ? s.type.spec.leafText(s) : "" : "";
                        s.isBlock && (s.isLeaf && l || s.isTextblock) && n && (i ? i = !1 : o += n), o += l
                    }, 0), o
                }
                append(t) {
                    if (!t.size) return this;
                    if (!this.size) return t;
                    let e = this.lastChild,
                        n = t.firstChild,
                        r = this.content.slice(),
                        o = 0;
                    for (e.isText && e.sameMarkup(n) && (r[r.length - 1] = e.withText(e.text + n.text), o = 1); o < t.content.length; o++) r.push(t.content[o]);
                    return new h(r, this.size + t.size)
                }
                cut(t, e = this.size) {
                    if (0 == t && e == this.size) return this;
                    let n = [],
                        r = 0;
                    if (e > t)
                        for (let o = 0, i = 0; i < e; o++) {
                            let s = this.content[o],
                                a = i + s.nodeSize;
                            a > t && ((i < t || a > e) && (s = s.isText ? s.cut(Math.max(0, t - i), Math.min(s.text.length, e - i)) : s.cut(Math.max(0, t - i - 1), Math.min(s.content.size, e - i - 1))), n.push(s), r += s.nodeSize), i = a
                        }
                    return new h(n, r)
                }
                cutByIndex(t, e) {
                    return t == e ? h.empty : 0 == t && e == this.content.length ? this : new h(this.content.slice(t, e))
                }
                replaceChild(t, e) {
                    let n = this.content[t];
                    if (n == e) return this;
                    let r = this.content.slice(),
                        o = this.size + e.nodeSize - n.nodeSize;
                    return r[t] = e, new h(r, o)
                }
                addToStart(t) {
                    return new h([t].concat(this.content), this.size + t.nodeSize)
                }
                addToEnd(t) {
                    return new h(this.content.concat(t), this.size + t.nodeSize)
                }
                eq(t) {
                    if (this.content.length != t.content.length) return !1;
                    for (let e = 0; e < this.content.length; e++)
                        if (!this.content[e].eq(t.content[e])) return !1;
                    return !0
                }
                get firstChild() {
                    return this.content.length ? this.content[0] : null
                }
                get lastChild() {
                    return this.content.length ? this.content[this.content.length - 1] : null
                }
                get childCount() {
                    return this.content.length
                }
                child(t) {
                    let e = this.content[t];
                    if (!e) throw new RangeError("Index " + t + " out of range for " + this);
                    return e
                }
                maybeChild(t) {
                    return this.content[t] || null
                }
                forEach(t) {
                    for (let e = 0, n = 0; e < this.content.length; e++) {
                        let r = this.content[e];
                        t(r, n, e), n += r.nodeSize
                    }
                }
                findDiffStart(t, e = 0) {
                    return c(this, t, e)
                }
                findDiffEnd(t, e = this.size, n = t.size) {
                    return d(this, t, e, n)
                }
                findIndex(t) {
                    if (0 == t) return p(0, t);
                    if (t == this.size) return p(this.content.length, t);
                    if (t > this.size || t < 0) throw new RangeError(`Position ${t} outside of fragment (${this})`);
                    for (let e = 0, n = 0;; e++) {
                        let r = this.child(e),
                            o = n + r.nodeSize;
                        if (o >= t) return o == t ? p(e + 1, o) : p(e, n);
                        n = o
                    }
                }
                toString() {
                    return "<" + this.toStringInner() + ">"
                }
                toStringInner() {
                    return this.content.join(", ")
                }
                toJSON() {
                    return this.content.length ? this.content.map(t => t.toJSON()) : null
                }
                static fromJSON(t, e) {
                    if (!e) return h.empty;
                    if (!Array.isArray(e)) throw new RangeError("Invalid input for Fragment.fromJSON");
                    return new h(e.map(t.nodeFromJSON))
                }
                static fromArray(t) {
                    if (!t.length) return h.empty;
                    let e, n = 0;
                    for (let r = 0; r < t.length; r++) {
                        let o = t[r];
                        n += o.nodeSize, r && o.isText && t[r - 1].sameMarkup(o) ? (e || (e = t.slice(0, r)), e[e.length - 1] = o.withText(e[e.length - 1].text + o.text)) : e && e.push(o)
                    }
                    return new h(e || t, n)
                }
                static from(t) {
                    if (!t) return h.empty;
                    if (t instanceof h) return t;
                    if (Array.isArray(t)) return this.fromArray(t);
                    if (t.attrs) return new h([t], t.nodeSize);
                    throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
                }
            }
            h.empty = new h([], 0);
            const u = {
                index: 0,
                offset: 0
            };

            function p(t, e) {
                return u.index = t, u.offset = e, u
            }

            function f(t, e) {
                if (t === e) return !0;
                if (!t || "object" != typeof t || !e || "object" != typeof e) return !1;
                let n = Array.isArray(t);
                if (Array.isArray(e) != n) return !1;
                if (n) {
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++)
                        if (!f(t[n], e[n])) return !1
                } else {
                    for (let n in t)
                        if (!(n in e) || !f(t[n], e[n])) return !1;
                    for (let n in e)
                        if (!(n in t)) return !1
                }
                return !0
            }
            class m {
                constructor(t, e) {
                    this.type = t, this.attrs = e
                }
                addToSet(t) {
                    let e, n = !1;
                    for (let r = 0; r < t.length; r++) {
                        let o = t[r];
                        if (this.eq(o)) return t;
                        if (this.type.excludes(o.type)) e || (e = t.slice(0, r));
                        else {
                            if (o.type.excludes(this.type)) return t;
                            !n && o.type.rank > this.type.rank && (e || (e = t.slice(0, r)), e.push(this), n = !0), e && e.push(o)
                        }
                    }
                    return e || (e = t.slice()), n || e.push(this), e
                }
                removeFromSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
                    return t
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (this.eq(t[e])) return !0;
                    return !1
                }
                eq(t) {
                    return this == t || this.type == t.type && f(this.attrs, t.attrs)
                }
                toJSON() {
                    let t = {
                        type: this.type.name
                    };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break
                    }
                    return t
                }
                static fromJSON(t, e) {
                    if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
                    let n = t.marks[e.type];
                    if (!n) throw new RangeError(`There is no mark type ${e.type} in this schema`);
                    let r = n.create(e.attrs);
                    return n.checkAttrs(r.attrs), r
                }
                static sameSet(t, e) {
                    if (t == e) return !0;
                    if (t.length != e.length) return !1;
                    for (let n = 0; n < t.length; n++)
                        if (!t[n].eq(e[n])) return !1;
                    return !0
                }
                static setFrom(t) {
                    if (!t || Array.isArray(t) && 0 == t.length) return m.none;
                    if (t instanceof m) return [t];
                    let e = t.slice();
                    return e.sort((t, e) => t.type.rank - e.type.rank), e
                }
            }
            m.none = [];
            class g extends Error {}
            class y {
                constructor(t, e, n) {
                    this.content = t, this.openStart = e, this.openEnd = n
                }
                get size() {
                    return this.content.size - this.openStart - this.openEnd
                }
                insertAt(t, e) {
                    let n = v(this.content, t + this.openStart, e);
                    return n && new y(n, this.openStart, this.openEnd)
                }
                removeBetween(t, e) {
                    return new y(b(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd)
                }
                eq(t) {
                    return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd
                }
                toString() {
                    return this.content + "(" + this.openStart + "," + this.openEnd + ")"
                }
                toJSON() {
                    if (!this.content.size) return null;
                    let t = {
                        content: this.content.toJSON()
                    };
                    return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t
                }
                static fromJSON(t, e) {
                    if (!e) return y.empty;
                    let n = e.openStart || 0,
                        r = e.openEnd || 0;
                    if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
                    return new y(h.fromJSON(t, e.content), n, r)
                }
                static maxOpen(t, e = !0) {
                    let n = 0,
                        r = 0;
                    for (let o = t.firstChild; o && !o.isLeaf && (e || !o.type.spec.isolating); o = o.firstChild) n++;
                    for (let o = t.lastChild; o && !o.isLeaf && (e || !o.type.spec.isolating); o = o.lastChild) r++;
                    return new y(t, n, r)
                }
            }

            function b(t, e, n) {
                let {
                    index: r,
                    offset: o
                } = t.findIndex(e), i = t.maybeChild(r), {
                    index: s,
                    offset: a
                } = t.findIndex(n);
                if (o == e || i.isText) {
                    if (a != n && !t.child(s).isText) throw new RangeError("Removing non-flat range");
                    return t.cut(0, e).append(t.cut(n))
                }
                if (r != s) throw new RangeError("Removing non-flat range");
                return t.replaceChild(r, i.copy(b(i.content, e - o - 1, n - o - 1)))
            }

            function v(t, e, n, r) {
                let {
                    index: o,
                    offset: i
                } = t.findIndex(e), s = t.maybeChild(o);
                if (i == e || s.isText) return r && !r.canReplace(o, o, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
                let a = v(s.content, e - i - 1, n, s);
                return a && t.replaceChild(o, s.copy(a))
            }

            function w(t, e, n) {
                if (n.openStart > t.depth) throw new g("Inserted content deeper than insertion position");
                if (t.depth - n.openStart != e.depth - n.openEnd) throw new g("Inconsistent open depths");
                return k(t, e, n, 0)
            }

            function k(t, e, n, r) {
                let o = t.index(r),
                    i = t.node(r);
                if (o == e.index(r) && r < t.depth - n.openStart) {
                    let s = k(t, e, n, r + 1);
                    return i.copy(i.content.replaceChild(o, s))
                }
                if (n.content.size) {
                    if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
                        let {
                            start: o,
                            end: s
                        } = N(n, t);
                        return O(i, T(t, o, s, e, r))
                    } {
                        let r = t.parent,
                            o = r.content;
                        return O(r, o.cut(0, t.parentOffset).append(n.content).append(o.cut(e.parentOffset)))
                    }
                }
                return O(i, A(t, e, r))
            }

            function x(t, e) {
                if (!e.type.compatibleContent(t.type)) throw new g("Cannot join " + e.type.name + " onto " + t.type.name)
            }

            function S(t, e, n) {
                let r = t.node(n);
                return x(r, e.node(n)), r
            }

            function M(t, e) {
                let n = e.length - 1;
                n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t)
            }

            function C(t, e, n, r) {
                let o = (e || t).node(n),
                    i = 0,
                    s = e ? e.index(n) : o.childCount;
                t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (M(t.nodeAfter, r), i++));
                for (let a = i; a < s; a++) M(o.child(a), r);
                e && e.depth == n && e.textOffset && M(e.nodeBefore, r)
            }

            function O(t, e) {
                return t.type.checkContent(e), t.copy(e)
            }

            function T(t, e, n, r, o) {
                let i = t.depth > o && S(t, e, o + 1),
                    s = r.depth > o && S(n, r, o + 1),
                    a = [];
                return C(null, t, o, a), i && s && e.index(o) == n.index(o) ? (x(i, s), M(O(i, T(t, e, n, r, o + 1)), a)) : (i && M(O(i, A(t, e, o + 1)), a), C(e, n, o, a), s && M(O(s, A(n, r, o + 1)), a)), C(r, null, o, a), new h(a)
            }

            function A(t, e, n) {
                let r = [];
                if (C(null, t, n, r), t.depth > n) {
                    let o = S(t, e, n + 1);
                    M(O(o, A(t, e, n + 1)), r)
                }
                return C(e, null, n, r), new h(r)
            }

            function N(t, e) {
                let n = e.depth - t.openStart,
                    r = e.node(n),
                    o = r.copy(t.content);
                for (let i = n - 1; i >= 0; i--) o = e.node(i).copy(h.from(o));
                return {
                    start: o.resolveNoCache(t.openStart + n),
                    end: o.resolveNoCache(o.content.size - t.openEnd - n)
                }
            }
            y.empty = new y(h.empty, 0, 0);
            class E {
                constructor(t, e, n) {
                    this.pos = t, this.path = e, this.parentOffset = n, this.depth = e.length / 3 - 1
                }
                resolveDepth(t) {
                    return null == t ? this.depth : t < 0 ? this.depth + t : t
                }
                get parent() {
                    return this.node(this.depth)
                }
                get doc() {
                    return this.node(0)
                }
                node(t) {
                    return this.path[3 * this.resolveDepth(t)]
                }
                index(t) {
                    return this.path[3 * this.resolveDepth(t) + 1]
                }
                indexAfter(t) {
                    return t = this.resolveDepth(t), this.index(t) + (t != this.depth || this.textOffset ? 1 : 0)
                }
                start(t) {
                    return t = this.resolveDepth(t), 0 == t ? 0 : this.path[3 * t - 1] + 1
                }
                end(t) {
                    return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size
                }
                before(t) {
                    if (t = this.resolveDepth(t), !t) throw new RangeError("There is no position before the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1]
                }
                after(t) {
                    if (t = this.resolveDepth(t), !t) throw new RangeError("There is no position after the top-level node");
                    return t == this.depth + 1 ? this.pos : this.path[3 * t - 1] + this.path[3 * t].nodeSize
                }
                get textOffset() {
                    return this.pos - this.path[this.path.length - 1]
                }
                get nodeAfter() {
                    let t = this.parent,
                        e = this.index(this.depth);
                    if (e == t.childCount) return null;
                    let n = this.pos - this.path[this.path.length - 1],
                        r = t.child(e);
                    return n ? t.child(e).cut(n) : r
                }
                get nodeBefore() {
                    let t = this.index(this.depth),
                        e = this.pos - this.path[this.path.length - 1];
                    return e ? this.parent.child(t).cut(0, e) : 0 == t ? null : this.parent.child(t - 1)
                }
                posAtIndex(t, e) {
                    e = this.resolveDepth(e);
                    let n = this.path[3 * e],
                        r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
                    for (let o = 0; o < t; o++) r += n.child(o).nodeSize;
                    return r
                }
                marks() {
                    let t = this.parent,
                        e = this.index();
                    if (0 == t.content.size) return m.none;
                    if (this.textOffset) return t.child(e).marks;
                    let n = t.maybeChild(e - 1),
                        r = t.maybeChild(e);
                    if (!n) {
                        let t = n;
                        n = r, r = t
                    }
                    let o = n.marks;
                    for (var i = 0; i < o.length; i++) !1 !== o[i].type.spec.inclusive || r && o[i].isInSet(r.marks) || (o = o[i--].removeFromSet(o));
                    return o
                }
                marksAcross(t) {
                    let e = this.parent.maybeChild(this.index());
                    if (!e || !e.isInline) return null;
                    let n = e.marks,
                        r = t.parent.maybeChild(t.index());
                    for (var o = 0; o < n.length; o++) !1 !== n[o].type.spec.inclusive || r && n[o].isInSet(r.marks) || (n = n[o--].removeFromSet(n));
                    return n
                }
                sharedDepth(t) {
                    for (let e = this.depth; e > 0; e--)
                        if (this.start(e) <= t && this.end(e) >= t) return e;
                    return 0
                }
                blockRange(t = this, e) {
                    if (t.pos < this.pos) return t.blockRange(this);
                    for (let n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--)
                        if (t.pos <= this.end(n) && (!e || e(this.node(n)))) return new L(this, t, n);
                    return null
                }
                sameParent(t) {
                    return this.pos - this.parentOffset == t.pos - t.parentOffset
                }
                max(t) {
                    return t.pos > this.pos ? t : this
                }
                min(t) {
                    return t.pos < this.pos ? t : this
                }
                toString() {
                    let t = "";
                    for (let e = 1; e <= this.depth; e++) t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
                    return t + ":" + this.parentOffset
                }
                static resolve(t, e) {
                    if (!(e >= 0 && e <= t.content.size)) throw new RangeError("Position " + e + " out of range");
                    let n = [],
                        r = 0,
                        o = e;
                    for (let i = t;;) {
                        let {
                            index: t,
                            offset: e
                        } = i.content.findIndex(o), s = o - e;
                        if (n.push(i, t, r + e), !s) break;
                        if (i = i.child(t), i.isText) break;
                        o = s - 1, r += e + 1
                    }
                    return new E(e, n, o)
                }
                static resolveCached(t, e) {
                    let n = R.get(t);
                    if (n)
                        for (let o = 0; o < n.elts.length; o++) {
                            let t = n.elts[o];
                            if (t.pos == e) return t
                        } else R.set(t, n = new D);
                    let r = n.elts[n.i] = E.resolve(t, e);
                    return n.i = (n.i + 1) % P, r
                }
            }
            class D {
                constructor() {
                    this.elts = [], this.i = 0
                }
            }
            const P = 12,
                R = new WeakMap;
            class L {
                constructor(t, e, n) {
                    this.$from = t, this.$to = e, this.depth = n
                }
                get start() {
                    return this.$from.before(this.depth + 1)
                }
                get end() {
                    return this.$to.after(this.depth + 1)
                }
                get parent() {
                    return this.$from.node(this.depth)
                }
                get startIndex() {
                    return this.$from.index(this.depth)
                }
                get endIndex() {
                    return this.$to.indexAfter(this.depth)
                }
            }
            const I = Object.create(null);
            class $ {
                constructor(t, e, n, r = m.none) {
                    this.type = t, this.attrs = e, this.marks = r, this.content = n || h.empty
                }
                get children() {
                    return this.content.content
                }
                get nodeSize() {
                    return this.isLeaf ? 1 : 2 + this.content.size
                }
                get childCount() {
                    return this.content.childCount
                }
                child(t) {
                    return this.content.child(t)
                }
                maybeChild(t) {
                    return this.content.maybeChild(t)
                }
                forEach(t) {
                    this.content.forEach(t)
                }
                nodesBetween(t, e, n, r = 0) {
                    this.content.nodesBetween(t, e, n, r, this)
                }
                descendants(t) {
                    this.nodesBetween(0, this.content.size, t)
                }
                get textContent() {
                    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
                }
                textBetween(t, e, n, r) {
                    return this.content.textBetween(t, e, n, r)
                }
                get firstChild() {
                    return this.content.firstChild
                }
                get lastChild() {
                    return this.content.lastChild
                }
                eq(t) {
                    return this == t || this.sameMarkup(t) && this.content.eq(t.content)
                }
                sameMarkup(t) {
                    return this.hasMarkup(t.type, t.attrs, t.marks)
                }
                hasMarkup(t, e, n) {
                    return this.type == t && f(this.attrs, e || t.defaultAttrs || I) && m.sameSet(this.marks, n || m.none)
                }
                copy(t = null) {
                    return t == this.content ? this : new $(this.type, this.attrs, t, this.marks)
                }
                mark(t) {
                    return t == this.marks ? this : new $(this.type, this.attrs, this.content, t)
                }
                cut(t, e = this.content.size) {
                    return 0 == t && e == this.content.size ? this : this.copy(this.content.cut(t, e))
                }
                slice(t, e = this.content.size, n = !1) {
                    if (t == e) return y.empty;
                    let r = this.resolve(t),
                        o = this.resolve(e),
                        i = n ? 0 : r.sharedDepth(e),
                        s = r.start(i),
                        a = r.node(i),
                        l = a.content.cut(r.pos - s, o.pos - s);
                    return new y(l, r.depth - i, o.depth - i)
                }
                replace(t, e, n) {
                    return w(this.resolve(t), this.resolve(e), n)
                }
                nodeAt(t) {
                    for (let e = this;;) {
                        let {
                            index: n,
                            offset: r
                        } = e.content.findIndex(t);
                        if (e = e.maybeChild(n), !e) return null;
                        if (r == t || e.isText) return e;
                        t -= r + 1
                    }
                }
                childAfter(t) {
                    let {
                        index: e,
                        offset: n
                    } = this.content.findIndex(t);
                    return {
                        node: this.content.maybeChild(e),
                        index: e,
                        offset: n
                    }
                }
                childBefore(t) {
                    if (0 == t) return {
                        node: null,
                        index: 0,
                        offset: 0
                    };
                    let {
                        index: e,
                        offset: n
                    } = this.content.findIndex(t);
                    if (n < t) return {
                        node: this.content.child(e),
                        index: e,
                        offset: n
                    };
                    let r = this.content.child(e - 1);
                    return {
                        node: r,
                        index: e - 1,
                        offset: n - r.nodeSize
                    }
                }
                resolve(t) {
                    return E.resolveCached(this, t)
                }
                resolveNoCache(t) {
                    return E.resolve(this, t)
                }
                rangeHasMark(t, e, n) {
                    let r = !1;
                    return e > t && this.nodesBetween(t, e, t => (n.isInSet(t.marks) && (r = !0), !r)), r
                }
                get isBlock() {
                    return this.type.isBlock
                }
                get isTextblock() {
                    return this.type.isTextblock
                }
                get inlineContent() {
                    return this.type.inlineContent
                }
                get isInline() {
                    return this.type.isInline
                }
                get isText() {
                    return this.type.isText
                }
                get isLeaf() {
                    return this.type.isLeaf
                }
                get isAtom() {
                    return this.type.isAtom
                }
                toString() {
                    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
                    let t = this.type.name;
                    return this.content.size && (t += "(" + this.content.toStringInner() + ")"), j(this.marks, t)
                }
                contentMatchAt(t) {
                    let e = this.type.contentMatch.matchFragment(this.content, 0, t);
                    if (!e) throw new Error("Called contentMatchAt on a node with invalid content");
                    return e
                }
                canReplace(t, e, n = h.empty, r = 0, o = n.childCount) {
                    let i = this.contentMatchAt(t).matchFragment(n, r, o),
                        s = i && i.matchFragment(this.content, e);
                    if (!s || !s.validEnd) return !1;
                    for (let a = r; a < o; a++)
                        if (!this.type.allowsMarks(n.child(a).marks)) return !1;
                    return !0
                }
                canReplaceWith(t, e, n, r) {
                    if (r && !this.type.allowsMarks(r)) return !1;
                    let o = this.contentMatchAt(t).matchType(n),
                        i = o && o.matchFragment(this.content, e);
                    return !!i && i.validEnd
                }
                canAppend(t) {
                    return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type)
                }
                check() {
                    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
                    let t = m.none;
                    for (let e = 0; e < this.marks.length; e++) {
                        let n = this.marks[e];
                        n.type.checkAttrs(n.attrs), t = n.addToSet(t)
                    }
                    if (!m.sameSet(t, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);
                    this.content.forEach(t => t.check())
                }
                toJSON() {
                    let t = {
                        type: this.type.name
                    };
                    for (let e in this.attrs) {
                        t.attrs = this.attrs;
                        break
                    }
                    return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map(t => t.toJSON())), t
                }
                static fromJSON(t, e) {
                    if (!e) throw new RangeError("Invalid input for Node.fromJSON");
                    let n = void 0;
                    if (e.marks) {
                        if (!Array.isArray(e.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
                        n = e.marks.map(t.markFromJSON)
                    }
                    if ("text" == e.type) {
                        if ("string" != typeof e.text) throw new RangeError("Invalid text node in JSON");
                        return t.text(e.text, n)
                    }
                    let r = h.fromJSON(t, e.content),
                        o = t.nodeType(e.type).create(e.attrs, r, n);
                    return o.type.checkAttrs(o.attrs), o
                }
            }
            $.prototype.text = void 0;
            class z extends $ {
                constructor(t, e, n, r) {
                    if (super(t, e, null, r), !n) throw new RangeError("Empty text nodes are not allowed");
                    this.text = n
                }
                toString() {
                    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : j(this.marks, JSON.stringify(this.text))
                }
                get textContent() {
                    return this.text
                }
                textBetween(t, e) {
                    return this.text.slice(t, e)
                }
                get nodeSize() {
                    return this.text.length
                }
                mark(t) {
                    return t == this.marks ? this : new z(this.type, this.attrs, this.text, t)
                }
                withText(t) {
                    return t == this.text ? this : new z(this.type, this.attrs, t, this.marks)
                }
                cut(t = 0, e = this.text.length) {
                    return 0 == t && e == this.text.length ? this : this.withText(this.text.slice(t, e))
                }
                eq(t) {
                    return this.sameMarkup(t) && this.text == t.text
                }
                toJSON() {
                    let t = super.toJSON();
                    return t.text = this.text, t
                }
            }

            function j(t, e) {
                for (let n = t.length - 1; n >= 0; n--) e = t[n].type.name + "(" + e + ")";
                return e
            }
            class B {
                constructor(t) {
                    this.validEnd = t, this.next = [], this.wrapCache = []
                }
                static parse(t, e) {
                    let n = new H(t, e);
                    if (null == n.next) return B.empty;
                    let r = V(n);
                    n.next && n.err("Unexpected trailing text");
                    let o = X(J(r));
                    return Q(o, n), o
                }
                matchType(t) {
                    for (let e = 0; e < this.next.length; e++)
                        if (this.next[e].type == t) return this.next[e].next;
                    return null
                }
                matchFragment(t, e = 0, n = t.childCount) {
                    let r = this;
                    for (let o = e; r && o < n; o++) r = r.matchType(t.child(o).type);
                    return r
                }
                get inlineContent() {
                    return 0 != this.next.length && this.next[0].type.isInline
                }
                get defaultType() {
                    for (let t = 0; t < this.next.length; t++) {
                        let {
                            type: e
                        } = this.next[t];
                        if (!e.isText && !e.hasRequiredAttrs()) return e
                    }
                    return null
                }
                compatible(t) {
                    for (let e = 0; e < this.next.length; e++)
                        for (let n = 0; n < t.next.length; n++)
                            if (this.next[e].type == t.next[n].type) return !0;
                    return !1
                }
                fillBefore(t, e = !1, n = 0) {
                    let r = [this];

                    function o(i, s) {
                        let a = i.matchFragment(t, n);
                        if (a && (!e || a.validEnd)) return h.from(s.map(t => t.createAndFill()));
                        for (let t = 0; t < i.next.length; t++) {
                            let {
                                type: e,
                                next: n
                            } = i.next[t];
                            if (!e.isText && !e.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                                r.push(n);
                                let t = o(n, s.concat(e));
                                if (t) return t
                            }
                        }
                        return null
                    }
                    return o(this, [])
                }
                findWrapping(t) {
                    for (let n = 0; n < this.wrapCache.length; n += 2)
                        if (this.wrapCache[n] == t) return this.wrapCache[n + 1];
                    let e = this.computeWrapping(t);
                    return this.wrapCache.push(t, e), e
                }
                computeWrapping(t) {
                    let e = Object.create(null),
                        n = [{
                            match: this,
                            type: null,
                            via: null
                        }];
                    while (n.length) {
                        let r = n.shift(),
                            o = r.match;
                        if (o.matchType(t)) {
                            let t = [];
                            for (let e = r; e.type; e = e.via) t.push(e.type);
                            return t.reverse()
                        }
                        for (let t = 0; t < o.next.length; t++) {
                            let {
                                type: i,
                                next: s
                            } = o.next[t];
                            i.isLeaf || i.hasRequiredAttrs() || i.name in e || r.type && !s.validEnd || (n.push({
                                match: i.contentMatch,
                                type: i,
                                via: r
                            }), e[i.name] = !0)
                        }
                    }
                    return null
                }
                get edgeCount() {
                    return this.next.length
                }
                edge(t) {
                    if (t >= this.next.length) throw new RangeError(`There's no ${t}th edge in this content match`);
                    return this.next[t]
                }
                toString() {
                    let t = [];

                    function e(n) {
                        t.push(n);
                        for (let r = 0; r < n.next.length; r++) - 1 == t.indexOf(n.next[r].next) && e(n.next[r].next)
                    }
                    return e(this), t.map((e, n) => {
                        let r = n + (e.validEnd ? "*" : " ") + " ";
                        for (let o = 0; o < e.next.length; o++) r += (o ? ", " : "") + e.next[o].type.name + "->" + t.indexOf(e.next[o].next);
                        return r
                    }).join("\n")
                }
            }
            B.empty = new B(!0);
            class H {
                constructor(t, e) {
                    this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.shift()
                }
                get next() {
                    return this.tokens[this.pos]
                }
                eat(t) {
                    return this.next == t && (this.pos++ || !0)
                }
                err(t) {
                    throw new SyntaxError(t + " (in content expression '" + this.string + "')")
                }
            }

            function V(t) {
                let e = [];
                do {
                    e.push(F(t))
                } while (t.eat("|"));
                return 1 == e.length ? e[0] : {
                    type: "choice",
                    exprs: e
                }
            }

            function F(t) {
                let e = [];
                do {
                    e.push(_(t))
                } while (t.next && ")" != t.next && "|" != t.next);
                return 1 == e.length ? e[0] : {
                    type: "seq",
                    exprs: e
                }
            }

            function _(t) {
                let e = U(t);
                for (;;)
                    if (t.eat("+")) e = {
                        type: "plus",
                        expr: e
                    };
                    else if (t.eat("*")) e = {
                    type: "star",
                    expr: e
                };
                else if (t.eat("?")) e = {
                    type: "opt",
                    expr: e
                };
                else {
                    if (!t.eat("{")) break;
                    e = q(t, e)
                }
                return e
            }

            function W(t) {
                /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
                let e = Number(t.next);
                return t.pos++, e
            }

            function q(t, e) {
                let n = W(t),
                    r = n;
                return t.eat(",") && (r = "}" != t.next ? W(t) : -1), t.eat("}") || t.err("Unclosed braced range"), {
                    type: "range",
                    min: n,
                    max: r,
                    expr: e
                }
            }

            function K(t, e) {
                let n = t.nodeTypes,
                    r = n[e];
                if (r) return [r];
                let o = [];
                for (let i in n) {
                    let t = n[i];
                    t.isInGroup(e) && o.push(t)
                }
                return 0 == o.length && t.err("No node type or group '" + e + "' found"), o
            }

            function U(t) {
                if (t.eat("(")) {
                    let e = V(t);
                    return t.eat(")") || t.err("Missing closing paren"), e
                }
                if (!/\W/.test(t.next)) {
                    let e = K(t, t.next).map(e => (null == t.inline ? t.inline = e.isInline : t.inline != e.isInline && t.err("Mixing inline and block content"), {
                        type: "name",
                        value: e
                    }));
                    return t.pos++, 1 == e.length ? e[0] : {
                        type: "choice",
                        exprs: e
                    }
                }
                t.err("Unexpected token '" + t.next + "'")
            }

            function J(t) {
                let e = [
                    []
                ];
                return o(i(t, 0), n()), e;

                function n() {
                    return e.push([]) - 1
                }

                function r(t, n, r) {
                    let o = {
                        term: r,
                        to: n
                    };
                    return e[t].push(o), o
                }

                function o(t, e) {
                    t.forEach(t => t.to = e)
                }

                function i(t, e) {
                    if ("choice" == t.type) return t.exprs.reduce((t, n) => t.concat(i(n, e)), []);
                    if ("seq" != t.type) {
                        if ("star" == t.type) {
                            let s = n();
                            return r(e, s), o(i(t.expr, s), s), [r(s)]
                        }
                        if ("plus" == t.type) {
                            let s = n();
                            return o(i(t.expr, e), s), o(i(t.expr, s), s), [r(s)]
                        }
                        if ("opt" == t.type) return [r(e)].concat(i(t.expr, e));
                        if ("range" == t.type) {
                            let s = e;
                            for (let e = 0; e < t.min; e++) {
                                let e = n();
                                o(i(t.expr, s), e), s = e
                            }
                            if (-1 == t.max) o(i(t.expr, s), s);
                            else
                                for (let e = t.min; e < t.max; e++) {
                                    let e = n();
                                    r(s, e), o(i(t.expr, s), e), s = e
                                }
                            return [r(s)]
                        }
                        if ("name" == t.type) return [r(e, void 0, t.value)];
                        throw new Error("Unknown expr type")
                    }
                    for (let r = 0;; r++) {
                        let s = i(t.exprs[r], e);
                        if (r == t.exprs.length - 1) return s;
                        o(s, e = n())
                    }
                }
            }

            function G(t, e) {
                return e - t
            }

            function Y(t, e) {
                let n = [];
                return r(e), n.sort(G);

                function r(e) {
                    let o = t[e];
                    if (1 == o.length && !o[0].term) return r(o[0].to);
                    n.push(e);
                    for (let t = 0; t < o.length; t++) {
                        let {
                            term: e,
                            to: i
                        } = o[t];
                        e || -1 != n.indexOf(i) || r(i)
                    }
                }
            }

            function X(t) {
                let e = Object.create(null);
                return n(Y(t, 0));

                function n(r) {
                    let o = [];
                    r.forEach(e => {
                        t[e].forEach(({
                            term: e,
                            to: n
                        }) => {
                            if (!e) return;
                            let r;
                            for (let t = 0; t < o.length; t++) o[t][0] == e && (r = o[t][1]);
                            Y(t, n).forEach(t => {
                                r || o.push([e, r = []]), -1 == r.indexOf(t) && r.push(t)
                            })
                        })
                    });
                    let i = e[r.join(",")] = new B(r.indexOf(t.length - 1) > -1);
                    for (let t = 0; t < o.length; t++) {
                        let r = o[t][1].sort(G);
                        i.next.push({
                            type: o[t][0],
                            next: e[r.join(",")] || n(r)
                        })
                    }
                    return i
                }
            }

            function Q(t, e) {
                for (let n = 0, r = [t]; n < r.length; n++) {
                    let t = r[n],
                        o = !t.validEnd,
                        i = [];
                    for (let e = 0; e < t.next.length; e++) {
                        let {
                            type: n,
                            next: s
                        } = t.next[e];
                        i.push(n.name), !o || n.isText || n.hasRequiredAttrs() || (o = !1), -1 == r.indexOf(s) && r.push(s)
                    }
                    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
                }
            }

            function Z(t) {
                let e = Object.create(null);
                for (let n in t) {
                    let r = t[n];
                    if (!r.hasDefault) return null;
                    e[n] = r.default
                }
                return e
            }

            function tt(t, e) {
                let n = Object.create(null);
                for (let r in t) {
                    let o = e && e[r];
                    if (void 0 === o) {
                        let e = t[r];
                        if (!e.hasDefault) throw new RangeError("No value supplied for attribute " + r);
                        o = e.default
                    }
                    n[r] = o
                }
                return n
            }

            function et(t, e, n, r) {
                for (let o in e)
                    if (!(o in t)) throw new RangeError(`Unsupported attribute ${o} for ${n} of type ${o}`);
                for (let o in t) {
                    let n = t[o];
                    n.validate && n.validate(e[o])
                }
            }

            function nt(t, e) {
                let n = Object.create(null);
                if (e)
                    for (let r in e) n[r] = new it(t, r, e[r]);
                return n
            }
            class rt {
                constructor(t, e, n) {
                    this.name = t, this.schema = e, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = nt(t, n.attrs), this.defaultAttrs = Z(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || "text" == t), this.isText = "text" == t
                }
                get isInline() {
                    return !this.isBlock
                }
                get isTextblock() {
                    return this.isBlock && this.inlineContent
                }
                get isLeaf() {
                    return this.contentMatch == B.empty
                }
                get isAtom() {
                    return this.isLeaf || !!this.spec.atom
                }
                isInGroup(t) {
                    return this.groups.indexOf(t) > -1
                }
                get whitespace() {
                    return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
                }
                hasRequiredAttrs() {
                    for (let t in this.attrs)
                        if (this.attrs[t].isRequired) return !0;
                    return !1
                }
                compatibleContent(t) {
                    return this == t || this.contentMatch.compatible(t.contentMatch)
                }
                computeAttrs(t) {
                    return !t && this.defaultAttrs ? this.defaultAttrs : tt(this.attrs, t)
                }
                create(t = null, e, n) {
                    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
                    return new $(this, this.computeAttrs(t), h.from(e), m.setFrom(n))
                }
                createChecked(t = null, e, n) {
                    return e = h.from(e), this.checkContent(e), new $(this, this.computeAttrs(t), e, m.setFrom(n))
                }
                createAndFill(t = null, e, n) {
                    if (t = this.computeAttrs(t), e = h.from(e), e.size) {
                        let t = this.contentMatch.fillBefore(e);
                        if (!t) return null;
                        e = t.append(e)
                    }
                    let r = this.contentMatch.matchFragment(e),
                        o = r && r.fillBefore(h.empty, !0);
                    return o ? new $(this, t, e.append(o), m.setFrom(n)) : null
                }
                validContent(t) {
                    let e = this.contentMatch.matchFragment(t);
                    if (!e || !e.validEnd) return !1;
                    for (let n = 0; n < t.childCount; n++)
                        if (!this.allowsMarks(t.child(n).marks)) return !1;
                    return !0
                }
                checkContent(t) {
                    if (!this.validContent(t)) throw new RangeError(`Invalid content for node ${this.name}: ${t.toString().slice(0,50)}`)
                }
                checkAttrs(t) {
                    et(this.attrs, t, "node", this.name)
                }
                allowsMarkType(t) {
                    return null == this.markSet || this.markSet.indexOf(t) > -1
                }
                allowsMarks(t) {
                    if (null == this.markSet) return !0;
                    for (let e = 0; e < t.length; e++)
                        if (!this.allowsMarkType(t[e].type)) return !1;
                    return !0
                }
                allowedMarks(t) {
                    if (null == this.markSet) return t;
                    let e;
                    for (let n = 0; n < t.length; n++) this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
                    return e ? e.length ? e : m.none : t
                }
                static compile(t, e) {
                    let n = Object.create(null);
                    t.forEach((t, r) => n[t] = new rt(t, e, r));
                    let r = e.spec.topNode || "doc";
                    if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
                    if (!n.text) throw new RangeError("Every schema needs a 'text' type");
                    for (let o in n.text.attrs) throw new RangeError("The text node type should not have attributes");
                    return n
                }
            }

            function ot(t, e, n) {
                let r = n.split("|");
                return n => {
                    let o = null === n ? "null" : typeof n;
                    if (r.indexOf(o) < 0) throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`)
                }
            }
            class it {
                constructor(t, e, n) {
                    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = "string" == typeof n.validate ? ot(t, e, n.validate) : n.validate
                }
                get isRequired() {
                    return !this.hasDefault
                }
            }
            class st {
                constructor(t, e, n, r) {
                    this.name = t, this.rank = e, this.schema = n, this.spec = r, this.attrs = nt(t, r.attrs), this.excluded = null;
                    let o = Z(this.attrs);
                    this.instance = o ? new m(this, o) : null
                }
                create(t = null) {
                    return !t && this.instance ? this.instance : new m(this, tt(this.attrs, t))
                }
                static compile(t, e) {
                    let n = Object.create(null),
                        r = 0;
                    return t.forEach((t, o) => n[t] = new st(t, r++, e, o)), n
                }
                removeFromSet(t) {
                    for (var e = 0; e < t.length; e++) t[e].type == this && (t = t.slice(0, e).concat(t.slice(e + 1)), e--);
                    return t
                }
                isInSet(t) {
                    for (let e = 0; e < t.length; e++)
                        if (t[e].type == this) return t[e]
                }
                checkAttrs(t) {
                    et(this.attrs, t, "mark", this.name)
                }
                excludes(t) {
                    return this.excluded.indexOf(t) > -1
                }
            }
            class at {
                constructor(t) {
                    this.linebreakReplacement = null, this.cached = Object.create(null);
                    let e = this.spec = {};
                    for (let r in t) e[r] = t[r];
                    e.nodes = l.from(t.nodes), e.marks = l.from(t.marks || {}), this.nodes = rt.compile(this.spec.nodes, this), this.marks = st.compile(this.spec.marks, this);
                    let n = Object.create(null);
                    for (let r in this.nodes) {
                        if (r in this.marks) throw new RangeError(r + " can not be both a node and a mark");
                        let t = this.nodes[r],
                            e = t.spec.content || "",
                            o = t.spec.marks;
                        if (t.contentMatch = n[e] || (n[e] = B.parse(e, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
                            if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                            if (!t.isInline || !t.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                            this.linebreakReplacement = t
                        }
                        t.markSet = "_" == o ? null : o ? lt(this, o.split(" ")) : "" != o && t.inlineContent ? null : []
                    }
                    for (let r in this.marks) {
                        let t = this.marks[r],
                            e = t.spec.excludes;
                        t.excluded = null == e ? [t] : "" == e ? [] : lt(this, e.split(" "))
                    }
                    this.nodeFromJSON = t => $.fromJSON(this, t), this.markFromJSON = t => m.fromJSON(this, t), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null)
                }
                node(t, e = null, n, r) {
                    if ("string" == typeof t) t = this.nodeType(t);
                    else {
                        if (!(t instanceof rt)) throw new RangeError("Invalid node type: " + t);
                        if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")")
                    }
                    return t.createChecked(e, n, r)
                }
                text(t, e) {
                    let n = this.nodes.text;
                    return new z(n, n.defaultAttrs, t, m.setFrom(e))
                }
                mark(t, e) {
                    return "string" == typeof t && (t = this.marks[t]), t.create(e)
                }
                nodeType(t) {
                    let e = this.nodes[t];
                    if (!e) throw new RangeError("Unknown node type: " + t);
                    return e
                }
            }

            function lt(t, e) {
                let n = [];
                for (let r = 0; r < e.length; r++) {
                    let o = e[r],
                        i = t.marks[o],
                        s = i;
                    if (i) n.push(i);
                    else
                        for (let e in t.marks) {
                            let r = t.marks[e];
                            ("_" == o || r.spec.group && r.spec.group.split(" ").indexOf(o) > -1) && n.push(s = r)
                        }
                    if (!s) throw new SyntaxError("Unknown mark type: '" + e[r] + "'")
                }
                return n
            }

            function ct(t) {
                return null != t.tag
            }

            function dt(t) {
                return null != t.style
            }
            class ht {
                constructor(t, e) {
                    this.schema = t, this.rules = e, this.tags = [], this.styles = [];
                    let n = this.matchedStyles = [];
                    e.forEach(t => {
                        if (ct(t)) this.tags.push(t);
                        else if (dt(t)) {
                            let e = /[^=]*/.exec(t.style)[0];
                            n.indexOf(e) < 0 && n.push(e), this.styles.push(t)
                        }
                    }), this.normalizeLists = !this.tags.some(e => {
                        if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
                        let n = t.nodes[e.node];
                        return n.contentMatch.matchType(n)
                    })
                }
                parse(t, e = {}) {
                    let n = new wt(this, e, !1);
                    return n.addAll(t, m.none, e.from, e.to), n.finish()
                }
                parseSlice(t, e = {}) {
                    let n = new wt(this, e, !0);
                    return n.addAll(t, m.none, e.from, e.to), y.maxOpen(n.finish())
                }
                matchTag(t, e, n) {
                    for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
                        let n = this.tags[r];
                        if (xt(t, n.tag) && (void 0 === n.namespace || t.namespaceURI == n.namespace) && (!n.context || e.matchesContext(n.context))) {
                            if (n.getAttrs) {
                                let e = n.getAttrs(t);
                                if (!1 === e) continue;
                                n.attrs = e || void 0
                            }
                            return n
                        }
                    }
                }
                matchStyle(t, e, n, r) {
                    for (let o = r ? this.styles.indexOf(r) + 1 : 0; o < this.styles.length; o++) {
                        let r = this.styles[o],
                            i = r.style;
                        if (!(0 != i.indexOf(t) || r.context && !n.matchesContext(r.context) || i.length > t.length && (61 != i.charCodeAt(t.length) || i.slice(t.length + 1) != e))) {
                            if (r.getAttrs) {
                                let t = r.getAttrs(e);
                                if (!1 === t) continue;
                                r.attrs = t || void 0
                            }
                            return r
                        }
                    }
                }
                static schemaRules(t) {
                    let e = [];

                    function n(t) {
                        let n = null == t.priority ? 50 : t.priority,
                            r = 0;
                        for (; r < e.length; r++) {
                            let t = e[r],
                                o = null == t.priority ? 50 : t.priority;
                            if (o < n) break
                        }
                        e.splice(r, 0, t)
                    }
                    for (let r in t.marks) {
                        let e = t.marks[r].spec.parseDOM;
                        e && e.forEach(t => {
                            n(t = St(t)), t.mark || t.ignore || t.clearMark || (t.mark = r)
                        })
                    }
                    for (let r in t.nodes) {
                        let e = t.nodes[r].spec.parseDOM;
                        e && e.forEach(t => {
                            n(t = St(t)), t.node || t.ignore || t.mark || (t.node = r)
                        })
                    }
                    return e
                }
                static fromSchema(t) {
                    return t.cached.domParser || (t.cached.domParser = new ht(t, ht.schemaRules(t)))
                }
            }
            const ut = {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    canvas: !0,
                    dd: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    figcaption: !0,
                    figure: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    li: !0,
                    noscript: !0,
                    ol: !0,
                    output: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    tfoot: !0,
                    ul: !0
                },
                pt = {
                    head: !0,
                    noscript: !0,
                    object: !0,
                    script: !0,
                    style: !0,
                    title: !0
                },
                ft = {
                    ol: !0,
                    ul: !0
                },
                mt = 1,
                gt = 2,
                yt = 4;

            function bt(t, e, n) {
                return null != e ? (e ? mt : 0) | ("full" === e ? gt : 0) : t && "pre" == t.whitespace ? mt | gt : n & ~yt
            }
            class vt {
                constructor(t, e, n, r, o, i) {
                    this.type = t, this.attrs = e, this.marks = n, this.solid = r, this.options = i, this.content = [], this.activeMarks = m.none, this.match = o || (i & yt ? null : t.contentMatch)
                }
                findWrapping(t) {
                    if (!this.match) {
                        if (!this.type) return [];
                        let e = this.type.contentMatch.fillBefore(h.from(t));
                        if (!e) {
                            let e, n = this.type.contentMatch;
                            return (e = n.findWrapping(t.type)) ? (this.match = n, e) : null
                        }
                        this.match = this.type.contentMatch.matchFragment(e)
                    }
                    return this.match.findWrapping(t.type)
                }
                finish(t) {
                    if (!(this.options & mt)) {
                        let t, e = this.content[this.content.length - 1];
                        if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
                            let n = e;
                            e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length))
                        }
                    }
                    let e = h.from(this.content);
                    return !t && this.match && (e = e.append(this.match.fillBefore(h.empty, !0))), this.type ? this.type.create(this.attrs, e, this.marks) : e
                }
                inlineContext(t) {
                    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : t.parentNode && !ut.hasOwnProperty(t.parentNode.nodeName.toLowerCase())
                }
            }
            class wt {
                constructor(t, e, n) {
                    this.parser = t, this.options = e, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
                    let r, o = e.topNode,
                        i = bt(null, e.preserveWhitespace, 0) | (n ? yt : 0);
                    r = o ? new vt(o.type, o.attrs, m.none, !0, e.topMatch || o.type.contentMatch, i) : new vt(n ? null : t.schema.topNodeType, null, m.none, !0, null, i), this.nodes = [r], this.find = e.findPositions, this.needsBlock = !1
                }
                get top() {
                    return this.nodes[this.open]
                }
                addDOM(t, e) {
                    3 == t.nodeType ? this.addTextNode(t, e) : 1 == t.nodeType && this.addElement(t, e)
                }
                addTextNode(t, e) {
                    let n = t.nodeValue,
                        r = this.top,
                        o = r.options & gt ? "full" : this.localPreserveWS || (r.options & mt) > 0,
                        {
                            schema: i
                        } = this.parser;
                    if ("full" === o || r.inlineContext(t) || /[^ \t\r\n\u000c]/.test(n)) {
                        if (o)
                            if ("full" === o) n = n.replace(/\r\n?/g, "\n");
                            else if (i.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(i.linebreakReplacement.create())) {
                            let t = n.split(/\r?\n|\r/);
                            for (let n = 0; n < t.length; n++) n && this.insertNode(i.linebreakReplacement.create(), e, !0), t[n] && this.insertNode(i.text(t[n]), e, !/\S/.test(t[n]));
                            n = ""
                        } else n = n.replace(/\r?\n|\r/g, " ");
                        else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
                            let e = r.content[r.content.length - 1],
                                o = t.previousSibling;
                            (!e || o && "BR" == o.nodeName || e.isText && /[ \t\r\n\u000c]$/.test(e.text)) && (n = n.slice(1))
                        }
                        n && this.insertNode(i.text(n), e, !/\S/.test(n)), this.findInText(t)
                    } else this.findInside(t)
                }
                addElement(t, e, n) {
                    let r = this.localPreserveWS,
                        o = this.top;
                    ("PRE" == t.tagName || /pre/.test(t.style && t.style.whiteSpace)) && (this.localPreserveWS = !0);
                    let i, s = t.nodeName.toLowerCase();
                    ft.hasOwnProperty(s) && this.parser.normalizeLists && kt(t);
                    let a = this.options.ruleFromNode && this.options.ruleFromNode(t) || (i = this.parser.matchTag(t, this, n));
                    t: if (a ? a.ignore : pt.hasOwnProperty(s)) this.findInside(t), this.ignoreFallback(t, e);
                        else
                    if (!a || a.skip || a.closeParent) {
                        a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (t = a.skip);
                        let n, r = this.needsBlock;
                        if (ut.hasOwnProperty(s)) o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), n = !0, o.type || (this.needsBlock = !0);
                        else if (!t.firstChild) {
                            this.leafFallback(t, e);
                            break t
                        }
                        let i = a && a.skip ? e : this.readStyles(t, e);
                        i && this.addAll(t, i), n && this.sync(o), this.needsBlock = r
                    } else {
                        let n = this.readStyles(t, e);
                        n && this.addElementByRule(t, a, n, !1 === a.consuming ? i : void 0)
                    }
                    this.localPreserveWS = r
                }
                leafFallback(t, e) {
                    "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode("\n"), e)
                }
                ignoreFallback(t, e) {
                    "BR" != t.nodeName || this.top.type && this.top.type.inlineContent || this.findPlace(this.parser.schema.text("-"), e, !0)
                }
                readStyles(t, e) {
                    let n = t.style;
                    if (n && n.length)
                        for (let r = 0; r < this.parser.matchedStyles.length; r++) {
                            let t = this.parser.matchedStyles[r],
                                o = n.getPropertyValue(t);
                            if (o)
                                for (let n = void 0;;) {
                                    let r = this.parser.matchStyle(t, o, this, n);
                                    if (!r) break;
                                    if (r.ignore) return null;
                                    if (e = r.clearMark ? e.filter(t => !r.clearMark(t)) : e.concat(this.parser.schema.marks[r.mark].create(r.attrs)), !1 !== r.consuming) break;
                                    n = r
                                }
                        }
                    return e
                }
                addElementByRule(t, e, n, r) {
                    let o, i;
                    if (e.node)
                        if (i = this.parser.schema.nodes[e.node], i.isLeaf) this.insertNode(i.create(e.attrs), n, "BR" == t.nodeName) || this.leafFallback(t, n);
                        else {
                            let t = this.enter(i, e.attrs || null, n, e.preserveWhitespace);
                            t && (o = !0, n = t)
                        }
                    else {
                        let t = this.parser.schema.marks[e.mark];
                        n = n.concat(t.create(e.attrs))
                    }
                    let s = this.top;
                    if (i && i.isLeaf) this.findInside(t);
                    else if (r) this.addElement(t, n, r);
                    else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach(t => this.insertNode(t, n, !1));
                    else {
                        let r = t;
                        "string" == typeof e.contentElement ? r = t.querySelector(e.contentElement) : "function" == typeof e.contentElement ? r = e.contentElement(t) : e.contentElement && (r = e.contentElement), this.findAround(t, r, !0), this.addAll(r, n), this.findAround(t, r, !1)
                    }
                    o && this.sync(s) && this.open--
                }
                addAll(t, e, n, r) {
                    let o = n || 0;
                    for (let i = n ? t.childNodes[n] : t.firstChild, s = null == r ? null : t.childNodes[r]; i != s; i = i.nextSibling, ++o) this.findAtPoint(t, o), this.addDOM(i, e);
                    this.findAtPoint(t, o)
                }
                findPlace(t, e, n) {
                    let r, o;
                    for (let i = this.open, s = 0; i >= 0; i--) {
                        let e = this.nodes[i],
                            a = e.findWrapping(t);
                        if (a && (!r || r.length > a.length + s) && (r = a, o = e, !a.length)) break;
                        if (e.solid) {
                            if (n) break;
                            s += 2
                        }
                    }
                    if (!r) return null;
                    this.sync(o);
                    for (let i = 0; i < r.length; i++) e = this.enterInner(r[i], null, e, !1);
                    return e
                }
                insertNode(t, e, n) {
                    if (t.isInline && this.needsBlock && !this.top.type) {
                        let t = this.textblockFromContext();
                        t && (e = this.enterInner(t, null, e))
                    }
                    let r = this.findPlace(t, e, n);
                    if (r) {
                        this.closeExtra();
                        let e = this.top;
                        e.match && (e.match = e.match.matchType(t.type));
                        let n = m.none;
                        for (let o of r.concat(t.marks))(e.type ? e.type.allowsMarkType(o.type) : Mt(o.type, t.type)) && (n = o.addToSet(n));
                        return e.content.push(t.mark(n)), !0
                    }
                    return !1
                }
                enter(t, e, n, r) {
                    let o = this.findPlace(t.create(e), n, !1);
                    return o && (o = this.enterInner(t, e, n, !0, r)), o
                }
                enterInner(t, e, n, r = !1, o) {
                    this.closeExtra();
                    let i = this.top;
                    i.match = i.match && i.match.matchType(t);
                    let s = bt(t, o, i.options);
                    i.options & yt && 0 == i.content.length && (s |= yt);
                    let a = m.none;
                    return n = n.filter(e => !(i.type ? i.type.allowsMarkType(e.type) : Mt(e.type, t)) || (a = e.addToSet(a), !1)), this.nodes.push(new vt(t, e, a, r, null, s)), this.open++, n
                }
                closeExtra(t = !1) {
                    let e = this.nodes.length - 1;
                    if (e > this.open) {
                        for (; e > this.open; e--) this.nodes[e - 1].content.push(this.nodes[e].finish(t));
                        this.nodes.length = this.open + 1
                    }
                }
                finish() {
                    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!(!this.isOpen && !this.options.topOpen))
                }
                sync(t) {
                    for (let e = this.open; e >= 0; e--) {
                        if (this.nodes[e] == t) return this.open = e, !0;
                        this.localPreserveWS && (this.nodes[e].options |= mt)
                    }
                    return !1
                }
                get currentPos() {
                    this.closeExtra();
                    let t = 0;
                    for (let e = this.open; e >= 0; e--) {
                        let n = this.nodes[e].content;
                        for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
                        e && t++
                    }
                    return t
                }
                findAtPoint(t, e) {
                    if (this.find)
                        for (let n = 0; n < this.find.length; n++) this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos)
                }
                findInside(t) {
                    if (this.find)
                        for (let e = 0; e < this.find.length; e++) null == this.find[e].pos && 1 == t.nodeType && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos)
                }
                findAround(t, e, n) {
                    if (t != e && this.find)
                        for (let r = 0; r < this.find.length; r++)
                            if (null == this.find[r].pos && 1 == t.nodeType && t.contains(this.find[r].node)) {
                                let t = e.compareDocumentPosition(this.find[r].node);
                                t & (n ? 2 : 4) && (this.find[r].pos = this.currentPos)
                            }
                }
                findInText(t) {
                    if (this.find)
                        for (let e = 0; e < this.find.length; e++) this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset))
                }
                matchesContext(t) {
                    if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
                    let e = t.split("/"),
                        n = this.options.context,
                        r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
                        o = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
                        i = (t, s) => {
                            for (; t >= 0; t--) {
                                let a = e[t];
                                if ("" == a) {
                                    if (t == e.length - 1 || 0 == t) continue;
                                    for (; s >= o; s--)
                                        if (i(t - 1, s)) return !0;
                                    return !1
                                } {
                                    let t = s > 0 || 0 == s && r ? this.nodes[s].type : n && s >= o ? n.node(s - o).type : null;
                                    if (!t || t.name != a && !t.isInGroup(a)) return !1;
                                    s--
                                }
                            }
                            return !0
                        };
                    return i(e.length - 1, this.open)
                }
                textblockFromContext() {
                    let t = this.options.context;
                    if (t)
                        for (let e = t.depth; e >= 0; e--) {
                            let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
                            if (n && n.isTextblock && n.defaultAttrs) return n
                        }
                    for (let e in this.parser.schema.nodes) {
                        let t = this.parser.schema.nodes[e];
                        if (t.isTextblock && t.defaultAttrs) return t
                    }
                }
            }

            function kt(t) {
                for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                    let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                    t && ft.hasOwnProperty(t) && n ? (n.appendChild(e), e = n) : "li" == t ? n = e : t && (n = null)
                }
            }

            function xt(t, e) {
                return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e)
            }

            function St(t) {
                let e = {};
                for (let n in t) e[n] = t[n];
                return e
            }

            function Mt(t, e) {
                let n = e.schema.nodes;
                for (let r in n) {
                    let o = n[r];
                    if (!o.allowsMarkType(t)) continue;
                    let i = [],
                        s = t => {
                            i.push(t);
                            for (let n = 0; n < t.edgeCount; n++) {
                                let {
                                    type: r,
                                    next: o
                                } = t.edge(n);
                                if (r == e) return !0;
                                if (i.indexOf(o) < 0 && s(o)) return !0
                            }
                        };
                    if (s(o.contentMatch)) return !0
                }
            }
            class Ct {
                constructor(t, e) {
                    this.nodes = t, this.marks = e
                }
                serializeFragment(t, e = {}, n) {
                    n || (n = Tt(e).createDocumentFragment());
                    let r = n,
                        o = [];
                    return t.forEach(t => {
                        if (o.length || t.marks.length) {
                            let n = 0,
                                i = 0;
                            while (n < o.length && i < t.marks.length) {
                                let e = t.marks[i];
                                if (this.marks[e.type.name]) {
                                    if (!e.eq(o[n][0]) || !1 === e.type.spec.spanning) break;
                                    n++, i++
                                } else i++
                            }
                            while (n < o.length) r = o.pop()[1];
                            while (i < t.marks.length) {
                                let n = t.marks[i++],
                                    s = this.serializeMark(n, t.isInline, e);
                                s && (o.push([n, r]), r.appendChild(s.dom), r = s.contentDOM || s.dom)
                            }
                        }
                        r.appendChild(this.serializeNodeInner(t, e))
                    }), n
                }
                serializeNodeInner(t, e) {
                    let {
                        dom: n,
                        contentDOM: r
                    } = Dt(Tt(e), this.nodes[t.type.name](t), null, t.attrs);
                    if (r) {
                        if (t.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
                        this.serializeFragment(t.content, e, r)
                    }
                    return n
                }
                serializeNode(t, e = {}) {
                    let n = this.serializeNodeInner(t, e);
                    for (let r = t.marks.length - 1; r >= 0; r--) {
                        let o = this.serializeMark(t.marks[r], t.isInline, e);
                        o && ((o.contentDOM || o.dom).appendChild(n), n = o.dom)
                    }
                    return n
                }
                serializeMark(t, e, n = {}) {
                    let r = this.marks[t.type.name];
                    return r && Dt(Tt(n), r(t, e), null, t.attrs)
                }
                static renderSpec(t, e, n = null, r) {
                    return Dt(t, e, n, r)
                }
                static fromSchema(t) {
                    return t.cached.domSerializer || (t.cached.domSerializer = new Ct(this.nodesFromSchema(t), this.marksFromSchema(t)))
                }
                static nodesFromSchema(t) {
                    let e = Ot(t.nodes);
                    return e.text || (e.text = t => t.text), e
                }
                static marksFromSchema(t) {
                    return Ot(t.marks)
                }
            }

            function Ot(t) {
                let e = {};
                for (let n in t) {
                    let r = t[n].spec.toDOM;
                    r && (e[n] = r)
                }
                return e
            }

            function Tt(t) {
                return t.document || window.document
            }
            const At = new WeakMap;

            function Nt(t) {
                let e = At.get(t);
                return void 0 === e && At.set(t, e = Et(t)), e
            }

            function Et(t) {
                let e = null;

                function n(t) {
                    if (t && "object" == typeof t)
                        if (Array.isArray(t))
                            if ("string" == typeof t[0]) e || (e = []), e.push(t);
                            else
                                for (let e = 0; e < t.length; e++) n(t[e]);
                    else
                        for (let e in t) n(t[e])
                }
                return n(t), e
            }

            function Dt(t, e, n, r) {
                if ("string" == typeof e) return {
                    dom: t.createTextNode(e)
                };
                if (null != e.nodeType) return {
                    dom: e
                };
                if (e.dom && null != e.dom.nodeType) return e;
                let o, i = e[0];
                if ("string" != typeof i) throw new RangeError("Invalid array passed to renderSpec");
                if (r && (o = Nt(r)) && o.indexOf(e) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
                let s, a = i.indexOf(" ");
                a > 0 && (n = i.slice(0, a), i = i.slice(a + 1));
                let l = n ? t.createElementNS(n, i) : t.createElement(i),
                    c = e[1],
                    d = 1;
                if (c && "object" == typeof c && null == c.nodeType && !Array.isArray(c)) {
                    d = 2;
                    for (let t in c)
                        if (null != c[t]) {
                            let e = t.indexOf(" ");
                            e > 0 ? l.setAttributeNS(t.slice(0, e), t.slice(e + 1), c[t]) : "style" == t && l.style ? l.style.cssText = c[t] : l.setAttribute(t, c[t])
                        }
                }
                for (let h = d; h < e.length; h++) {
                    let o = e[h];
                    if (0 === o) {
                        if (h < e.length - 1 || h > d) throw new RangeError("Content hole must be the only child of its parent node");
                        return {
                            dom: l,
                            contentDOM: l
                        }
                    } {
                        let {
                            dom: e,
                            contentDOM: i
                        } = Dt(t, o, n, r);
                        if (l.appendChild(e), i) {
                            if (s) throw new RangeError("Multiple content holes");
                            s = i
                        }
                    }
                }
                return {
                    dom: l,
                    contentDOM: s
                }
            }
            const Pt = 65535,
                Rt = Math.pow(2, 16);

            function Lt(t, e) {
                return t + e * Rt
            }

            function It(t) {
                return t & Pt
            }

            function $t(t) {
                return (t - (t & Pt)) / Rt
            }
            const zt = 1,
                jt = 2,
                Bt = 4,
                Ht = 8;
            class Vt {
                constructor(t, e, n) {
                    this.pos = t, this.delInfo = e, this.recover = n
                }
                get deleted() {
                    return (this.delInfo & Ht) > 0
                }
                get deletedBefore() {
                    return (this.delInfo & (zt | Bt)) > 0
                }
                get deletedAfter() {
                    return (this.delInfo & (jt | Bt)) > 0
                }
                get deletedAcross() {
                    return (this.delInfo & Bt) > 0
                }
            }
            class Ft {
                constructor(t, e = !1) {
                    if (this.ranges = t, this.inverted = e, !t.length && Ft.empty) return Ft.empty
                }
                recover(t) {
                    let e = 0,
                        n = It(t);
                    if (!this.inverted)
                        for (let r = 0; r < n; r++) e += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
                    return this.ranges[3 * n] + e + $t(t)
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1)
                }
                map(t, e = 1) {
                    return this._map(t, e, !0)
                }
                _map(t, e, n) {
                    let r = 0,
                        o = this.inverted ? 2 : 1,
                        i = this.inverted ? 1 : 2;
                    for (let s = 0; s < this.ranges.length; s += 3) {
                        let a = this.ranges[s] - (this.inverted ? r : 0);
                        if (a > t) break;
                        let l = this.ranges[s + o],
                            c = this.ranges[s + i],
                            d = a + l;
                        if (t <= d) {
                            let o = l ? t == a ? -1 : t == d ? 1 : e : e,
                                i = a + r + (o < 0 ? 0 : c);
                            if (n) return i;
                            let h = t == (e < 0 ? a : d) ? null : Lt(s / 3, t - a),
                                u = t == a ? jt : t == d ? zt : Bt;
                            return (e < 0 ? t != a : t != d) && (u |= Ht), new Vt(i, u, h)
                        }
                        r += c - l
                    }
                    return n ? t + r : new Vt(t + r, 0, null)
                }
                touches(t, e) {
                    let n = 0,
                        r = It(e),
                        o = this.inverted ? 2 : 1,
                        i = this.inverted ? 1 : 2;
                    for (let s = 0; s < this.ranges.length; s += 3) {
                        let e = this.ranges[s] - (this.inverted ? n : 0);
                        if (e > t) break;
                        let a = this.ranges[s + o],
                            l = e + a;
                        if (t <= l && s == 3 * r) return !0;
                        n += this.ranges[s + i] - a
                    }
                    return !1
                }
                forEach(t) {
                    let e = this.inverted ? 2 : 1,
                        n = this.inverted ? 1 : 2;
                    for (let r = 0, o = 0; r < this.ranges.length; r += 3) {
                        let i = this.ranges[r],
                            s = i - (this.inverted ? o : 0),
                            a = i + (this.inverted ? 0 : o),
                            l = this.ranges[r + e],
                            c = this.ranges[r + n];
                        t(s, s + l, a, a + c), o += c - l
                    }
                }
                invert() {
                    return new Ft(this.ranges, !this.inverted)
                }
                toString() {
                    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
                }
                static offset(t) {
                    return 0 == t ? Ft.empty : new Ft(t < 0 ? [0, -t, 0] : [0, 0, t])
                }
            }
            Ft.empty = new Ft([]);
            class _t {
                constructor(t, e, n = 0, r = (t ? t.length : 0)) {
                    this.mirror = e, this.from = n, this.to = r, this._maps = t || [], this.ownData = !(t || e)
                }
                get maps() {
                    return this._maps
                }
                slice(t = 0, e = this.maps.length) {
                    return new _t(this._maps, this.mirror, t, e)
                }
                appendMap(t, e) {
                    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(t), null != e && this.setMirror(this._maps.length - 1, e)
                }
                appendMapping(t) {
                    for (let e = 0, n = this._maps.length; e < t._maps.length; e++) {
                        let r = t.getMirror(e);
                        this.appendMap(t._maps[e], null != r && r < e ? n + r : void 0)
                    }
                }
                getMirror(t) {
                    if (this.mirror)
                        for (let e = 0; e < this.mirror.length; e++)
                            if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)]
                }
                setMirror(t, e) {
                    this.mirror || (this.mirror = []), this.mirror.push(t, e)
                }
                appendMappingInverted(t) {
                    for (let e = t.maps.length - 1, n = this._maps.length + t._maps.length; e >= 0; e--) {
                        let r = t.getMirror(e);
                        this.appendMap(t._maps[e].invert(), null != r && r > e ? n - r - 1 : void 0)
                    }
                }
                invert() {
                    let t = new _t;
                    return t.appendMappingInverted(this), t
                }
                map(t, e = 1) {
                    if (this.mirror) return this._map(t, e, !0);
                    for (let n = this.from; n < this.to; n++) t = this._maps[n].map(t, e);
                    return t
                }
                mapResult(t, e = 1) {
                    return this._map(t, e, !1)
                }
                _map(t, e, n) {
                    let r = 0;
                    for (let o = this.from; o < this.to; o++) {
                        let n = this._maps[o],
                            i = n.mapResult(t, e);
                        if (null != i.recover) {
                            let e = this.getMirror(o);
                            if (null != e && e > o && e < this.to) {
                                o = e, t = this._maps[e].recover(i.recover);
                                continue
                            }
                        }
                        r |= i.delInfo, t = i.pos
                    }
                    return n ? t : new Vt(t, r, null)
                }
            }
            const Wt = Object.create(null);
            class qt {
                getMap() {
                    return Ft.empty
                }
                merge(t) {
                    return null
                }
                static fromJSON(t, e) {
                    if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
                    let n = Wt[e.stepType];
                    if (!n) throw new RangeError(`No step type ${e.stepType} defined`);
                    return n.fromJSON(t, e)
                }
                static jsonID(t, e) {
                    if (t in Wt) throw new RangeError("Duplicate use of step JSON ID " + t);
                    return Wt[t] = e, e.prototype.jsonID = t, e
                }
            }
            class Kt {
                constructor(t, e) {
                    this.doc = t, this.failed = e
                }
                static ok(t) {
                    return new Kt(t, null)
                }
                static fail(t) {
                    return new Kt(null, t)
                }
                static fromReplace(t, e, n, r) {
                    try {
                        return Kt.ok(t.replace(e, n, r))
                    } catch (o) {
                        if (o instanceof g) return Kt.fail(o.message);
                        throw o
                    }
                }
            }

            function Ut(t, e, n) {
                let r = [];
                for (let o = 0; o < t.childCount; o++) {
                    let i = t.child(o);
                    i.content.size && (i = i.copy(Ut(i.content, e, i))), i.isInline && (i = e(i, n, o)), r.push(i)
                }
                return h.fromArray(r)
            }
            class Jt extends qt {
                constructor(t, e, n) {
                    super(), this.from = t, this.to = e, this.mark = n
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = t.resolve(this.from),
                        r = n.node(n.sharedDepth(this.to)),
                        o = new y(Ut(e.content, (t, e) => t.isAtom && e.type.allowsMarkType(this.mark.type) ? t.mark(this.mark.addToSet(t.marks)) : t, r), e.openStart, e.openEnd);
                    return Kt.fromReplace(t, this.from, this.to, o)
                }
                invert() {
                    return new Gt(this.from, this.to, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deleted && n.deleted || e.pos >= n.pos ? null : new Jt(e.pos, n.pos, this.mark)
                }
                merge(t) {
                    return t instanceof Jt && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new Jt(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null
                }
                toJSON() {
                    return {
                        stepType: "addMark",
                        mark: this.mark.toJSON(),
                        from: this.from,
                        to: this.to
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
                    return new Jt(e.from, e.to, t.markFromJSON(e.mark))
                }
            }
            qt.jsonID("addMark", Jt);
            class Gt extends qt {
                constructor(t, e, n) {
                    super(), this.from = t, this.to = e, this.mark = n
                }
                apply(t) {
                    let e = t.slice(this.from, this.to),
                        n = new y(Ut(e.content, t => t.mark(this.mark.removeFromSet(t.marks)), t), e.openStart, e.openEnd);
                    return Kt.fromReplace(t, this.from, this.to, n)
                }
                invert() {
                    return new Jt(this.from, this.to, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deleted && n.deleted || e.pos >= n.pos ? null : new Gt(e.pos, n.pos, this.mark)
                }
                merge(t) {
                    return t instanceof Gt && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new Gt(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null
                }
                toJSON() {
                    return {
                        stepType: "removeMark",
                        mark: this.mark.toJSON(),
                        from: this.from,
                        to: this.to
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
                    return new Gt(e.from, e.to, t.markFromJSON(e.mark))
                }
            }
            qt.jsonID("removeMark", Gt);
            class Yt extends qt {
                constructor(t, e) {
                    super(), this.pos = t, this.mark = e
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return Kt.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
                    return Kt.fromReplace(t, this.pos, this.pos + 1, new y(h.from(n), 0, e.isLeaf ? 0 : 1))
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    if (e) {
                        let t = this.mark.addToSet(e.marks);
                        if (t.length == e.marks.length) {
                            for (let n = 0; n < e.marks.length; n++)
                                if (!e.marks[n].isInSet(t)) return new Yt(this.pos, e.marks[n]);
                            return new Yt(this.pos, this.mark)
                        }
                    }
                    return new Xt(this.pos, this.mark)
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new Yt(e.pos, this.mark)
                }
                toJSON() {
                    return {
                        stepType: "addNodeMark",
                        pos: this.pos,
                        mark: this.mark.toJSON()
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
                    return new Yt(e.pos, t.markFromJSON(e.mark))
                }
            }
            qt.jsonID("addNodeMark", Yt);
            class Xt extends qt {
                constructor(t, e) {
                    super(), this.pos = t, this.mark = e
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return Kt.fail("No node at mark step's position");
                    let n = e.type.create(e.attrs, null, this.mark.removeFromSet(e.marks));
                    return Kt.fromReplace(t, this.pos, this.pos + 1, new y(h.from(n), 0, e.isLeaf ? 0 : 1))
                }
                invert(t) {
                    let e = t.nodeAt(this.pos);
                    return e && this.mark.isInSet(e.marks) ? new Yt(this.pos, this.mark) : this
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new Xt(e.pos, this.mark)
                }
                toJSON() {
                    return {
                        stepType: "removeNodeMark",
                        pos: this.pos,
                        mark: this.mark.toJSON()
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
                    return new Xt(e.pos, t.markFromJSON(e.mark))
                }
            }
            qt.jsonID("removeNodeMark", Xt);
            class Qt extends qt {
                constructor(t, e, n, r = !1) {
                    super(), this.from = t, this.to = e, this.slice = n, this.structure = r
                }
                apply(t) {
                    return this.structure && te(t, this.from, this.to) ? Kt.fail("Structure replace would overwrite content") : Kt.fromReplace(t, this.from, this.to, this.slice)
                }
                getMap() {
                    return new Ft([this.from, this.to - this.from, this.slice.size])
                }
                invert(t) {
                    return new Qt(this.from, this.from + this.slice.size, t.slice(this.from, this.to))
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1);
                    return e.deletedAcross && n.deletedAcross ? null : new Qt(e.pos, Math.max(e.pos, n.pos), this.slice, this.structure)
                }
                merge(t) {
                    if (!(t instanceof Qt) || t.structure || this.structure) return null;
                    if (this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart) {
                        if (t.to != this.from || this.slice.openStart || t.slice.openEnd) return null; {
                            let e = this.slice.size + t.slice.size == 0 ? y.empty : new y(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
                            return new Qt(t.from, this.to, e, this.structure)
                        }
                    } {
                        let e = this.slice.size + t.slice.size == 0 ? y.empty : new y(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
                        return new Qt(this.from, this.to + (t.to - t.from), e, this.structure)
                    }
                }
                toJSON() {
                    let t = {
                        stepType: "replace",
                        from: this.from,
                        to: this.to
                    };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
                    return new Qt(e.from, e.to, y.fromJSON(t, e.slice), !!e.structure)
                }
            }
            qt.jsonID("replace", Qt);
            class Zt extends qt {
                constructor(t, e, n, r, o, i, s = !1) {
                    super(), this.from = t, this.to = e, this.gapFrom = n, this.gapTo = r, this.slice = o, this.insert = i, this.structure = s
                }
                apply(t) {
                    if (this.structure && (te(t, this.from, this.gapFrom) || te(t, this.gapTo, this.to))) return Kt.fail("Structure gap-replace would overwrite content");
                    let e = t.slice(this.gapFrom, this.gapTo);
                    if (e.openStart || e.openEnd) return Kt.fail("Gap is not a flat range");
                    let n = this.slice.insertAt(this.insert, e.content);
                    return n ? Kt.fromReplace(t, this.from, this.to, n) : Kt.fail("Content does not fit in gap")
                }
                getMap() {
                    return new Ft([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
                }
                invert(t) {
                    let e = this.gapTo - this.gapFrom;
                    return new Zt(this.from, this.from + this.slice.size + e, this.from + this.insert, this.from + this.insert + e, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure)
                }
                map(t) {
                    let e = t.mapResult(this.from, 1),
                        n = t.mapResult(this.to, -1),
                        r = this.from == this.gapFrom ? e.pos : t.map(this.gapFrom, -1),
                        o = this.to == this.gapTo ? n.pos : t.map(this.gapTo, 1);
                    return e.deletedAcross && n.deletedAcross || r < e.pos || o > n.pos ? null : new Zt(e.pos, n.pos, r, o, this.slice, this.insert, this.structure)
                }
                toJSON() {
                    let t = {
                        stepType: "replaceAround",
                        from: this.from,
                        to: this.to,
                        gapFrom: this.gapFrom,
                        gapTo: this.gapTo,
                        insert: this.insert
                    };
                    return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.from || "number" != typeof e.to || "number" != typeof e.gapFrom || "number" != typeof e.gapTo || "number" != typeof e.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
                    return new Zt(e.from, e.to, e.gapFrom, e.gapTo, y.fromJSON(t, e.slice), e.insert, !!e.structure)
                }
            }

            function te(t, e, n) {
                let r = t.resolve(e),
                    o = n - e,
                    i = r.depth;
                while (o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount) i--, o--;
                if (o > 0) {
                    let t = r.node(i).maybeChild(r.indexAfter(i));
                    while (o > 0) {
                        if (!t || t.isLeaf) return !0;
                        t = t.firstChild, o--
                    }
                }
                return !1
            }

            function ee(t, e, n, r) {
                let o, i, s = [],
                    a = [];
                t.doc.nodesBetween(e, n, (t, l, c) => {
                    if (!t.isInline) return;
                    let d = t.marks;
                    if (!r.isInSet(d) && c.type.allowsMarkType(r.type)) {
                        let c = Math.max(l, e),
                            h = Math.min(l + t.nodeSize, n),
                            u = r.addToSet(d);
                        for (let t = 0; t < d.length; t++) d[t].isInSet(u) || (o && o.to == c && o.mark.eq(d[t]) ? o.to = h : s.push(o = new Gt(c, h, d[t])));
                        i && i.to == c ? i.to = h : a.push(i = new Jt(c, h, r))
                    }
                }), s.forEach(e => t.step(e)), a.forEach(e => t.step(e))
            }

            function ne(t, e, n, r) {
                let o = [],
                    i = 0;
                t.doc.nodesBetween(e, n, (t, s) => {
                    if (!t.isInline) return;
                    i++;
                    let a = null;
                    if (r instanceof st) {
                        let e, n = t.marks;
                        while (e = r.isInSet(n))(a || (a = [])).push(e), n = e.removeFromSet(n)
                    } else r ? r.isInSet(t.marks) && (a = [r]) : a = t.marks;
                    if (a && a.length) {
                        let r = Math.min(s + t.nodeSize, n);
                        for (let t = 0; t < a.length; t++) {
                            let n, l = a[t];
                            for (let t = 0; t < o.length; t++) {
                                let e = o[t];
                                e.step == i - 1 && l.eq(o[t].style) && (n = e)
                            }
                            n ? (n.to = r, n.step = i) : o.push({
                                style: l,
                                from: Math.max(s, e),
                                to: r,
                                step: i
                            })
                        }
                    }
                }), o.forEach(e => t.step(new Gt(e.from, e.to, e.style)))
            }

            function re(t, e, n, r = n.contentMatch, o = !0) {
                let i = t.doc.nodeAt(e),
                    s = [],
                    a = e + 1;
                for (let l = 0; l < i.childCount; l++) {
                    let e = i.child(l),
                        c = a + e.nodeSize,
                        d = r.matchType(e.type);
                    if (d) {
                        r = d;
                        for (let r = 0; r < e.marks.length; r++) n.allowsMarkType(e.marks[r].type) || t.step(new Gt(a, c, e.marks[r]));
                        if (o && e.isText && "pre" != n.whitespace) {
                            let t, r, o = /\r?\n|\r/g;
                            while (t = o.exec(e.text)) r || (r = new y(h.from(n.schema.text(" ", n.allowedMarks(e.marks))), 0, 0)), s.push(new Qt(a + t.index, a + t.index + t[0].length, r))
                        }
                    } else s.push(new Qt(a, c, y.empty));
                    a = c
                }
                if (!r.validEnd) {
                    let e = r.fillBefore(h.empty, !0);
                    t.replace(a, a, new y(e, 0, 0))
                }
                for (let l = s.length - 1; l >= 0; l--) t.step(s[l])
            }

            function oe(t, e, n) {
                return (0 == e || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n))
            }

            function ie(t) {
                let e = t.parent,
                    n = e.content.cutByIndex(t.startIndex, t.endIndex);
                for (let r = t.depth;; --r) {
                    let e = t.$from.node(r),
                        o = t.$from.index(r),
                        i = t.$to.indexAfter(r);
                    if (r < t.depth && e.canReplace(o, i, n)) return r;
                    if (0 == r || e.type.spec.isolating || !oe(e, o, i)) break
                }
                return null
            }

            function se(t, e, n) {
                let {
                    $from: r,
                    $to: o,
                    depth: i
                } = e, s = r.before(i + 1), a = o.after(i + 1), l = s, c = a, d = h.empty, u = 0;
                for (let m = i, g = !1; m > n; m--) g || r.index(m) > 0 ? (g = !0, d = h.from(r.node(m).copy(d)), u++) : l--;
                let p = h.empty,
                    f = 0;
                for (let m = i, g = !1; m > n; m--) g || o.after(m + 1) < o.end(m) ? (g = !0, p = h.from(o.node(m).copy(p)), f++) : c++;
                t.step(new Zt(l, c, s, a, new y(d.append(p), u, f), d.size - u, !0))
            }

            function ae(t, e, n = null, r = t) {
                let o = ce(t, e),
                    i = o && de(r, e);
                return i ? o.map(le).concat({
                    type: e,
                    attrs: n
                }).concat(i.map(le)) : null
            }

            function le(t) {
                return {
                    type: t,
                    attrs: null
                }
            }

            function ce(t, e) {
                let {
                    parent: n,
                    startIndex: r,
                    endIndex: o
                } = t, i = n.contentMatchAt(r).findWrapping(e);
                if (!i) return null;
                let s = i.length ? i[0] : e;
                return n.canReplaceWith(r, o, s) ? i : null
            }

            function de(t, e) {
                let {
                    parent: n,
                    startIndex: r,
                    endIndex: o
                } = t, i = n.child(r), s = e.contentMatch.findWrapping(i.type);
                if (!s) return null;
                let a = s.length ? s[s.length - 1] : e,
                    l = a.contentMatch;
                for (let c = r; l && c < o; c++) l = l.matchType(n.child(c).type);
                return l && l.validEnd ? s : null
            }

            function he(t, e, n) {
                let r = h.empty;
                for (let s = n.length - 1; s >= 0; s--) {
                    if (r.size) {
                        let t = n[s].type.contentMatch.matchFragment(r);
                        if (!t || !t.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
                    }
                    r = h.from(n[s].type.create(n[s].attrs, r))
                }
                let o = e.start,
                    i = e.end;
                t.step(new Zt(o, i, o, i, new y(r, 0, 0), n.length, !0))
            }

            function ue(t, e, n, r, o) {
                if (!r.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
                let i = t.steps.length;
                t.doc.nodesBetween(e, n, (e, n) => {
                    let s = "function" == typeof o ? o(e) : o;
                    if (e.isTextblock && !e.hasMarkup(r, s) && me(t.doc, t.mapping.slice(i).map(n), r)) {
                        let o = null;
                        if (r.schema.linebreakReplacement) {
                            let t = "pre" == r.whitespace,
                                e = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
                            t && !e ? o = !1 : !t && e && (o = !0)
                        }!1 === o && fe(t, e, n, i), re(t, t.mapping.slice(i).map(n, 1), r, void 0, null === o);
                        let a = t.mapping.slice(i),
                            l = a.map(n, 1),
                            c = a.map(n + e.nodeSize, 1);
                        return t.step(new Zt(l, c, l + 1, c - 1, new y(h.from(r.create(s, null, e.marks)), 0, 0), 1, !0)), !0 === o && pe(t, e, n, i), !1
                    }
                })
            }

            function pe(t, e, n, r) {
                e.forEach((o, i) => {
                    if (o.isText) {
                        let s, a = /\r?\n|\r/g;
                        while (s = a.exec(o.text)) {
                            let o = t.mapping.slice(r).map(n + 1 + i + s.index);
                            t.replaceWith(o, o + 1, e.type.schema.linebreakReplacement.create())
                        }
                    }
                })
            }

            function fe(t, e, n, r) {
                e.forEach((o, i) => {
                    if (o.type == o.type.schema.linebreakReplacement) {
                        let o = t.mapping.slice(r).map(n + 1 + i);
                        t.replaceWith(o, o + 1, e.type.schema.text("\n"))
                    }
                })
            }

            function me(t, e, n) {
                let r = t.resolve(e),
                    o = r.index();
                return r.parent.canReplaceWith(o, o + 1, n)
            }

            function ge(t, e, n, r, o) {
                let i = t.doc.nodeAt(e);
                if (!i) throw new RangeError("No node at given position");
                n || (n = i.type);
                let s = n.create(r, null, o || i.marks);
                if (i.isLeaf) return t.replaceWith(e, e + i.nodeSize, s);
                if (!n.validContent(i.content)) throw new RangeError("Invalid content for node type " + n.name);
                t.step(new Zt(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new y(h.from(s), 0, 0), 1, !0))
            }

            function ye(t, e, n = 1, r) {
                let o = t.resolve(e),
                    i = o.depth - n,
                    s = r && r[r.length - 1] || o.parent;
                if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount))) return !1;
                for (let c = o.depth - 1, d = n - 2; c > i; c--, d--) {
                    let t = o.node(c),
                        e = o.index(c);
                    if (t.type.spec.isolating) return !1;
                    let n = t.content.cutByIndex(e, t.childCount),
                        i = r && r[d + 1];
                    i && (n = n.replaceChild(0, i.type.create(i.attrs)));
                    let s = r && r[d] || t;
                    if (!t.canReplace(e + 1, t.childCount) || !s.type.validContent(n)) return !1
                }
                let a = o.indexAfter(i),
                    l = r && r[0];
                return o.node(i).canReplaceWith(a, a, l ? l.type : o.node(i + 1).type)
            }

            function be(t, e, n = 1, r) {
                let o = t.doc.resolve(e),
                    i = h.empty,
                    s = h.empty;
                for (let a = o.depth, l = o.depth - n, c = n - 1; a > l; a--, c--) {
                    i = h.from(o.node(a).copy(i));
                    let t = r && r[c];
                    s = h.from(t ? t.type.create(t.attrs, s) : o.node(a).copy(s))
                }
                t.step(new Qt(e, e, new y(i.append(s), n, n), !0))
            }

            function ve(t, e) {
                let n = t.resolve(e),
                    r = n.index();
                return ke(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1)
            }

            function we(t, e) {
                e.content.size || t.type.compatibleContent(e.type);
                let n = t.contentMatchAt(t.childCount),
                    {
                        linebreakReplacement: r
                    } = t.type.schema;
                for (let o = 0; o < e.childCount; o++) {
                    let i = e.child(o),
                        s = i.type == r ? t.type.schema.nodes.text : i.type;
                    if (n = n.matchType(s), !n) return !1;
                    if (!t.type.allowsMarks(i.marks)) return !1
                }
                return n.validEnd
            }

            function ke(t, e) {
                return !(!t || !e || t.isLeaf || !we(t, e))
            }

            function xe(t, e, n = -1) {
                let r = t.resolve(e);
                for (let o = r.depth;; o--) {
                    let t, i, s = r.index(o);
                    if (o == r.depth ? (t = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (t = r.node(o + 1), s++, i = r.node(o).maybeChild(s)) : (t = r.node(o).maybeChild(s - 1), i = r.node(o + 1)), t && !t.isTextblock && ke(t, i) && r.node(o).canReplace(s, s + 1)) return e;
                    if (0 == o) break;
                    e = n < 0 ? r.before(o) : r.after(o)
                }
            }

            function Se(t, e, n) {
                let r = null,
                    {
                        linebreakReplacement: o
                    } = t.doc.type.schema,
                    i = t.doc.resolve(e - n),
                    s = i.node().type;
                if (o && s.inlineContent) {
                    let t = "pre" == s.whitespace,
                        e = !!s.contentMatch.matchType(o);
                    t && !e ? r = !1 : !t && e && (r = !0)
                }
                let a = t.steps.length;
                if (!1 === r) {
                    let r = t.doc.resolve(e + n);
                    fe(t, r.node(), r.before(), a)
                }
                s.inlineContent && re(t, e + n - 1, s, i.node().contentMatchAt(i.index()), null == r);
                let l = t.mapping.slice(a),
                    c = l.map(e - n);
                if (t.step(new Qt(c, l.map(e + n, -1), y.empty, !0)), !0 === r) {
                    let e = t.doc.resolve(c);
                    pe(t, e.node(), e.before(), t.steps.length)
                }
                return t
            }

            function Me(t, e, n) {
                let r = t.resolve(e);
                if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
                if (0 == r.parentOffset)
                    for (let o = r.depth - 1; o >= 0; o--) {
                        let t = r.index(o);
                        if (r.node(o).canReplaceWith(t, t, n)) return r.before(o + 1);
                        if (t > 0) return null
                    }
                if (r.parentOffset == r.parent.content.size)
                    for (let o = r.depth - 1; o >= 0; o--) {
                        let t = r.indexAfter(o);
                        if (r.node(o).canReplaceWith(t, t, n)) return r.after(o + 1);
                        if (t < r.node(o).childCount) return null
                    }
                return null
            }

            function Ce(t, e, n) {
                let r = t.resolve(e);
                if (!n.content.size) return e;
                let o = n.content;
                for (let i = 0; i < n.openStart; i++) o = o.firstChild.content;
                for (let i = 1; i <= (0 == n.openStart && n.size ? 2 : 1); i++)
                    for (let t = r.depth; t >= 0; t--) {
                        let e = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1,
                            n = r.index(t) + (e > 0 ? 1 : 0),
                            s = r.node(t),
                            a = !1;
                        if (1 == i) a = s.canReplace(n, n, o);
                        else {
                            let t = s.contentMatchAt(n).findWrapping(o.firstChild.type);
                            a = t && s.canReplaceWith(n, n, t[0])
                        }
                        if (a) return 0 == e ? r.pos : e < 0 ? r.before(t + 1) : r.after(t + 1)
                    }
                return null
            }

            function Oe(t, e, n = e, r = y.empty) {
                if (e == n && !r.size) return null;
                let o = t.resolve(e),
                    i = t.resolve(n);
                return Te(o, i, r) ? new Qt(e, n, r) : new Ae(o, i, r).fit()
            }

            function Te(t, e, n) {
                return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content)
            }
            qt.jsonID("replaceAround", Zt);
            class Ae {
                constructor(t, e, n) {
                    this.$from = t, this.$to = e, this.unplaced = n, this.frontier = [], this.placed = h.empty;
                    for (let r = 0; r <= t.depth; r++) {
                        let e = t.node(r);
                        this.frontier.push({
                            type: e.type,
                            match: e.contentMatchAt(t.indexAfter(r))
                        })
                    }
                    for (let r = t.depth; r > 0; r--) this.placed = h.from(t.node(r).copy(this.placed))
                }
                get depth() {
                    return this.frontier.length - 1
                }
                fit() {
                    while (this.unplaced.size) {
                        let t = this.findFittable();
                        t ? this.placeNodes(t) : this.openMore() || this.dropNode()
                    }
                    let t = this.mustMoveInline(),
                        e = this.placed.size - this.depth - this.$from.depth,
                        n = this.$from,
                        r = this.close(t < 0 ? this.$to : n.doc.resolve(t));
                    if (!r) return null;
                    let o = this.placed,
                        i = n.depth,
                        s = r.depth;
                    while (i && s && 1 == o.childCount) o = o.firstChild.content, i--, s--;
                    let a = new y(o, i, s);
                    return t > -1 ? new Zt(n.pos, t, this.$to.pos, this.$to.end(), a, e) : a.size || n.pos != this.$to.pos ? new Qt(n.pos, r.pos, a) : null
                }
                findFittable() {
                    let t = this.unplaced.openStart;
                    for (let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < t; n++) {
                        let o = e.firstChild;
                        if (e.childCount > 1 && (r = 0), o.type.spec.isolating && r <= n) {
                            t = n;
                            break
                        }
                        e = o.content
                    }
                    for (let e = 1; e <= 2; e++)
                        for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
                            let t, r = null;
                            n ? (r = De(this.unplaced.content, n - 1).firstChild, t = r.content) : t = this.unplaced.content;
                            let o = t.firstChild;
                            for (let i = this.depth; i >= 0; i--) {
                                let t, {
                                        type: s,
                                        match: a
                                    } = this.frontier[i],
                                    l = null;
                                if (1 == e && (o ? a.matchType(o.type) || (l = a.fillBefore(h.from(o), !1)) : r && s.compatibleContent(r.type))) return {
                                    sliceDepth: n,
                                    frontierDepth: i,
                                    parent: r,
                                    inject: l
                                };
                                if (2 == e && o && (t = a.findWrapping(o.type))) return {
                                    sliceDepth: n,
                                    frontierDepth: i,
                                    parent: r,
                                    wrap: t
                                };
                                if (r && a.matchType(r.type)) break
                            }
                        }
                }
                openMore() {
                    let {
                        content: t,
                        openStart: e,
                        openEnd: n
                    } = this.unplaced, r = De(t, e);
                    return !(!r.childCount || r.firstChild.isLeaf) && (this.unplaced = new y(t, e + 1, Math.max(n, r.size + e >= t.size - n ? e + 1 : 0)), !0)
                }
                dropNode() {
                    let {
                        content: t,
                        openStart: e,
                        openEnd: n
                    } = this.unplaced, r = De(t, e);
                    if (r.childCount <= 1 && e > 0) {
                        let o = t.size - e <= e + r.size;
                        this.unplaced = new y(Ne(t, e - 1, 1), e - 1, o ? e - 1 : n)
                    } else this.unplaced = new y(Ne(t, e, 1), e, n)
                }
                placeNodes({
                    sliceDepth: t,
                    frontierDepth: e,
                    parent: n,
                    inject: r,
                    wrap: o
                }) {
                    while (this.depth > e) this.closeFrontierNode();
                    if (o)
                        for (let h = 0; h < o.length; h++) this.openFrontierNode(o[h]);
                    let i = this.unplaced,
                        s = n ? n.content : i.content,
                        a = i.openStart - t,
                        l = 0,
                        c = [],
                        {
                            match: d,
                            type: u
                        } = this.frontier[e];
                    if (r) {
                        for (let t = 0; t < r.childCount; t++) c.push(r.child(t));
                        d = d.matchFragment(r)
                    }
                    let p = s.size + t - (i.content.size - i.openEnd);
                    while (l < s.childCount) {
                        let t = s.child(l),
                            e = d.matchType(t.type);
                        if (!e) break;
                        l++, (l > 1 || 0 == a || t.content.size) && (d = e, c.push(Pe(t.mark(u.allowedMarks(t.marks)), 1 == l ? a : 0, l == s.childCount ? p : -1)))
                    }
                    let f = l == s.childCount;
                    f || (p = -1), this.placed = Ee(this.placed, e, h.from(c)), this.frontier[e].match = d, f && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
                    for (let h = 0, m = s; h < p; h++) {
                        let t = m.lastChild;
                        this.frontier.push({
                            type: t.type,
                            match: t.contentMatchAt(t.childCount)
                        }), m = t.content
                    }
                    this.unplaced = f ? 0 == t ? y.empty : new y(Ne(i.content, t - 1, 1), t - 1, p < 0 ? i.openEnd : t - 1) : new y(Ne(i.content, t, l), i.openStart, i.openEnd)
                }
                mustMoveInline() {
                    if (!this.$to.parent.isTextblock) return -1;
                    let t, e = this.frontier[this.depth];
                    if (!e.type.isTextblock || !Re(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
                    let {
                        depth: n
                    } = this.$to, r = this.$to.after(n);
                    while (n > 1 && r == this.$to.end(--n)) ++r;
                    return r
                }
                findCloseLevel(t) {
                    t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
                        let {
                            match: n,
                            type: r
                        } = this.frontier[e], o = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), i = Re(t, e, r, n, o);
                        if (i) {
                            for (let n = e - 1; n >= 0; n--) {
                                let {
                                    match: e,
                                    type: r
                                } = this.frontier[n], o = Re(t, n, r, e, !0);
                                if (!o || o.childCount) continue t
                            }
                            return {
                                depth: e,
                                fit: i,
                                move: o ? t.doc.resolve(t.after(e + 1)) : t
                            }
                        }
                    }
                }
                close(t) {
                    let e = this.findCloseLevel(t);
                    if (!e) return null;
                    while (this.depth > e.depth) this.closeFrontierNode();
                    e.fit.childCount && (this.placed = Ee(this.placed, e.depth, e.fit)), t = e.move;
                    for (let n = e.depth + 1; n <= t.depth; n++) {
                        let e = t.node(n),
                            r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
                        this.openFrontierNode(e.type, e.attrs, r)
                    }
                    return t
                }
                openFrontierNode(t, e = null, n) {
                    let r = this.frontier[this.depth];
                    r.match = r.match.matchType(t), this.placed = Ee(this.placed, this.depth, h.from(t.create(e, n))), this.frontier.push({
                        type: t,
                        match: t.contentMatch
                    })
                }
                closeFrontierNode() {
                    let t = this.frontier.pop(),
                        e = t.match.fillBefore(h.empty, !0);
                    e.childCount && (this.placed = Ee(this.placed, this.frontier.length, e))
                }
            }

            function Ne(t, e, n) {
                return 0 == e ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(Ne(t.firstChild.content, e - 1, n)))
            }

            function Ee(t, e, n) {
                return 0 == e ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(Ee(t.lastChild.content, e - 1, n)))
            }

            function De(t, e) {
                for (let n = 0; n < e; n++) t = t.firstChild.content;
                return t
            }

            function Pe(t, e, n) {
                if (e <= 0) return t;
                let r = t.content;
                return e > 1 && (r = r.replaceChild(0, Pe(r.firstChild, e - 1, 1 == r.childCount ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(h.empty, !0)))), t.copy(r)
            }

            function Re(t, e, n, r, o) {
                let i = t.node(e),
                    s = o ? t.indexAfter(e) : t.index(e);
                if (s == i.childCount && !n.compatibleContent(i.type)) return null;
                let a = r.fillBefore(i.content, !0, s);
                return a && !Le(n, i.content, s) ? a : null
            }

            function Le(t, e, n) {
                for (let r = n; r < e.childCount; r++)
                    if (!t.allowsMarks(e.child(r).marks)) return !0;
                return !1
            }

            function Ie(t) {
                return t.spec.defining || t.spec.definingForContent
            }

            function $e(t, e, n, r) {
                if (!r.size) return t.deleteRange(e, n);
                let o = t.doc.resolve(e),
                    i = t.doc.resolve(n);
                if (Te(o, i, r)) return t.step(new Qt(e, n, r));
                let s = He(o, t.doc.resolve(n));
                0 == s[s.length - 1] && s.pop();
                let a = -(o.depth + 1);
                s.unshift(a);
                for (let u = o.depth, p = o.pos - 1; u > 0; u--, p--) {
                    let t = o.node(u).type.spec;
                    if (t.defining || t.definingAsContext || t.isolating) break;
                    s.indexOf(u) > -1 ? a = u : o.before(u) == p && s.splice(1, 0, -u)
                }
                let l = s.indexOf(a),
                    c = [],
                    d = r.openStart;
                for (let u = r.content, p = 0;; p++) {
                    let t = u.firstChild;
                    if (c.push(t), p == r.openStart) break;
                    u = t.content
                }
                for (let u = d - 1; u >= 0; u--) {
                    let t = c[u],
                        e = Ie(t.type);
                    if (e && !t.sameMarkup(o.node(Math.abs(a) - 1))) d = u;
                    else if (e || !t.type.isTextblock) break
                }
                for (let u = r.openStart; u >= 0; u--) {
                    let e = (u + d + 1) % (r.openStart + 1),
                        a = c[e];
                    if (a)
                        for (let c = 0; c < s.length; c++) {
                            let d = s[(c + l) % s.length],
                                h = !0;
                            d < 0 && (h = !1, d = -d);
                            let u = o.node(d - 1),
                                p = o.index(d - 1);
                            if (u.canReplaceWith(p, p, a.type, a.marks)) return t.replace(o.before(d), h ? i.after(d) : n, new y(ze(r.content, 0, r.openStart, e), e, r.openEnd))
                        }
                }
                let h = t.steps.length;
                for (let u = s.length - 1; u >= 0; u--) {
                    if (t.replace(e, n, r), t.steps.length > h) break;
                    let a = s[u];
                    a < 0 || (e = o.before(a), n = i.after(a))
                }
            }

            function ze(t, e, n, r, o) {
                if (e < n) {
                    let o = t.firstChild;
                    t = t.replaceChild(0, o.copy(ze(o.content, e + 1, n, r, o)))
                }
                if (e > r) {
                    let e = o.contentMatchAt(0),
                        n = e.fillBefore(t).append(t);
                    t = n.append(e.matchFragment(n).fillBefore(h.empty, !0))
                }
                return t
            }

            function je(t, e, n, r) {
                if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
                    let o = Me(t.doc, e, r.type);
                    null != o && (e = n = o)
                }
                t.replaceRange(e, n, new y(h.from(r), 0, 0))
            }

            function Be(t, e, n) {
                let r = t.doc.resolve(e),
                    o = t.doc.resolve(n),
                    i = He(r, o);
                for (let s = 0; s < i.length; s++) {
                    let e = i[s],
                        n = s == i.length - 1;
                    if (n && 0 == e || r.node(e).type.contentMatch.validEnd) return t.delete(r.start(e), o.end(e));
                    if (e > 0 && (n || r.node(e - 1).canReplace(r.index(e - 1), o.indexAfter(e - 1)))) return t.delete(r.before(e), o.after(e))
                }
                for (let s = 1; s <= r.depth && s <= o.depth; s++)
                    if (e - r.start(s) == r.depth - s && n > r.end(s) && o.end(s) - n != o.depth - s && r.start(s - 1) == o.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), o.index(s - 1))) return t.delete(r.before(s), n);
                t.delete(e, n)
            }

            function He(t, e) {
                let n = [],
                    r = Math.min(t.depth, e.depth);
                for (let o = r; o >= 0; o--) {
                    let r = t.start(o);
                    if (r < t.pos - (t.depth - o) || e.end(o) > e.pos + (e.depth - o) || t.node(o).type.spec.isolating || e.node(o).type.spec.isolating) break;
                    (r == e.start(o) || o == t.depth && o == e.depth && t.parent.inlineContent && e.parent.inlineContent && o && e.start(o - 1) == r - 1) && n.push(o)
                }
                return n
            }
            class Ve extends qt {
                constructor(t, e, n) {
                    super(), this.pos = t, this.attr = e, this.value = n
                }
                apply(t) {
                    let e = t.nodeAt(this.pos);
                    if (!e) return Kt.fail("No node at attribute step's position");
                    let n = Object.create(null);
                    for (let o in e.attrs) n[o] = e.attrs[o];
                    n[this.attr] = this.value;
                    let r = e.type.create(n, null, e.marks);
                    return Kt.fromReplace(t, this.pos, this.pos + 1, new y(h.from(r), 0, e.isLeaf ? 0 : 1))
                }
                getMap() {
                    return Ft.empty
                }
                invert(t) {
                    return new Ve(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr])
                }
                map(t) {
                    let e = t.mapResult(this.pos, 1);
                    return e.deletedAfter ? null : new Ve(e.pos, this.attr, this.value)
                }
                toJSON() {
                    return {
                        stepType: "attr",
                        pos: this.pos,
                        attr: this.attr,
                        value: this.value
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos || "string" != typeof e.attr) throw new RangeError("Invalid input for AttrStep.fromJSON");
                    return new Ve(e.pos, e.attr, e.value)
                }
            }
            qt.jsonID("attr", Ve);
            class Fe extends qt {
                constructor(t, e) {
                    super(), this.attr = t, this.value = e
                }
                apply(t) {
                    let e = Object.create(null);
                    for (let r in t.attrs) e[r] = t.attrs[r];
                    e[this.attr] = this.value;
                    let n = t.type.create(e, t.content, t.marks);
                    return Kt.ok(n)
                }
                getMap() {
                    return Ft.empty
                }
                invert(t) {
                    return new Fe(this.attr, t.attrs[this.attr])
                }
                map(t) {
                    return this
                }
                toJSON() {
                    return {
                        stepType: "docAttr",
                        attr: this.attr,
                        value: this.value
                    }
                }
                static fromJSON(t, e) {
                    if ("string" != typeof e.attr) throw new RangeError("Invalid input for DocAttrStep.fromJSON");
                    return new Fe(e.attr, e.value)
                }
            }
            qt.jsonID("docAttr", Fe);
            let _e = class extends Error {};
            _e = function t(e) {
                let n = Error.call(this, e);
                return n.__proto__ = t.prototype, n
            }, _e.prototype = Object.create(Error.prototype), _e.prototype.constructor = _e, _e.prototype.name = "TransformError";
            class We {
                constructor(t) {
                    this.doc = t, this.steps = [], this.docs = [], this.mapping = new _t
                }
                get before() {
                    return this.docs.length ? this.docs[0] : this.doc
                }
                step(t) {
                    let e = this.maybeStep(t);
                    if (e.failed) throw new _e(e.failed);
                    return this
                }
                maybeStep(t) {
                    let e = t.apply(this.doc);
                    return e.failed || this.addStep(t, e.doc), e
                }
                get docChanged() {
                    return this.steps.length > 0
                }
                addStep(t, e) {
                    this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e
                }
                replace(t, e = t, n = y.empty) {
                    let r = Oe(this.doc, t, e, n);
                    return r && this.step(r), this
                }
                replaceWith(t, e, n) {
                    return this.replace(t, e, new y(h.from(n), 0, 0))
                }
                delete(t, e) {
                    return this.replace(t, e, y.empty)
                }
                insert(t, e) {
                    return this.replaceWith(t, t, e)
                }
                replaceRange(t, e, n) {
                    return $e(this, t, e, n), this
                }
                replaceRangeWith(t, e, n) {
                    return je(this, t, e, n), this
                }
                deleteRange(t, e) {
                    return Be(this, t, e), this
                }
                lift(t, e) {
                    return se(this, t, e), this
                }
                join(t, e = 1) {
                    return Se(this, t, e), this
                }
                wrap(t, e) {
                    return he(this, t, e), this
                }
                setBlockType(t, e = t, n, r = null) {
                    return ue(this, t, e, n, r), this
                }
                setNodeMarkup(t, e, n = null, r) {
                    return ge(this, t, e, n, r), this
                }
                setNodeAttribute(t, e, n) {
                    return this.step(new Ve(t, e, n)), this
                }
                setDocAttribute(t, e) {
                    return this.step(new Fe(t, e)), this
                }
                addNodeMark(t, e) {
                    return this.step(new Yt(t, e)), this
                }
                removeNodeMark(t, e) {
                    let n = this.doc.nodeAt(t);
                    if (!n) throw new RangeError("No node at position " + t);
                    if (e instanceof m) e.isInSet(n.marks) && this.step(new Xt(t, e));
                    else {
                        let r, o = n.marks,
                            i = [];
                        while (r = e.isInSet(o)) i.push(new Xt(t, r)), o = r.removeFromSet(o);
                        for (let t = i.length - 1; t >= 0; t--) this.step(i[t])
                    }
                    return this
                }
                split(t, e = 1, n) {
                    return be(this, t, e, n), this
                }
                addMark(t, e, n) {
                    return ee(this, t, e, n), this
                }
                removeMark(t, e, n) {
                    return ne(this, t, e, n), this
                }
                clearIncompatible(t, e, n) {
                    return re(this, t, e, n), this
                }
            }
            const qe = Object.create(null);
            class Ke {
                constructor(t, e, n) {
                    this.$anchor = t, this.$head = e, this.ranges = n || [new Ue(t.min(e), t.max(e))]
                }
                get anchor() {
                    return this.$anchor.pos
                }
                get head() {
                    return this.$head.pos
                }
                get from() {
                    return this.$from.pos
                }
                get to() {
                    return this.$to.pos
                }
                get $from() {
                    return this.ranges[0].$from
                }
                get $to() {
                    return this.ranges[0].$to
                }
                get empty() {
                    let t = this.ranges;
                    for (let e = 0; e < t.length; e++)
                        if (t[e].$from.pos != t[e].$to.pos) return !1;
                    return !0
                }
                content() {
                    return this.$from.doc.slice(this.from, this.to, !0)
                }
                replace(t, e = y.empty) {
                    let n = e.content.lastChild,
                        r = null;
                    for (let s = 0; s < e.openEnd; s++) r = n, n = n.lastChild;
                    let o = t.steps.length,
                        i = this.ranges;
                    for (let s = 0; s < i.length; s++) {
                        let {
                            $from: a,
                            $to: l
                        } = i[s], c = t.mapping.slice(o);
                        t.replaceRange(c.map(a.pos), c.map(l.pos), s ? y.empty : e), 0 == s && rn(t, o, (n ? n.isInline : r && r.isTextblock) ? -1 : 1)
                    }
                }
                replaceWith(t, e) {
                    let n = t.steps.length,
                        r = this.ranges;
                    for (let o = 0; o < r.length; o++) {
                        let {
                            $from: i,
                            $to: s
                        } = r[o], a = t.mapping.slice(n), l = a.map(i.pos), c = a.map(s.pos);
                        o ? t.deleteRange(l, c) : (t.replaceRangeWith(l, c, e), rn(t, n, e.isInline ? -1 : 1))
                    }
                }
                static findFrom(t, e, n = !1) {
                    let r = t.parent.inlineContent ? new Ye(t) : nn(t.node(0), t.parent, t.pos, t.index(), e, n);
                    if (r) return r;
                    for (let o = t.depth - 1; o >= 0; o--) {
                        let r = e < 0 ? nn(t.node(0), t.node(o), t.before(o + 1), t.index(o), e, n) : nn(t.node(0), t.node(o), t.after(o + 1), t.index(o) + 1, e, n);
                        if (r) return r
                    }
                    return null
                }
                static near(t, e = 1) {
                    return this.findFrom(t, e) || this.findFrom(t, -e) || new tn(t.node(0))
                }
                static atStart(t) {
                    return nn(t, t, 0, 0, 1) || new tn(t)
                }
                static atEnd(t) {
                    return nn(t, t, t.content.size, t.childCount, -1) || new tn(t)
                }
                static fromJSON(t, e) {
                    if (!e || !e.type) throw new RangeError("Invalid input for Selection.fromJSON");
                    let n = qe[e.type];
                    if (!n) throw new RangeError(`No selection type ${e.type} defined`);
                    return n.fromJSON(t, e)
                }
                static jsonID(t, e) {
                    if (t in qe) throw new RangeError("Duplicate use of selection JSON ID " + t);
                    return qe[t] = e, e.prototype.jsonID = t, e
                }
                getBookmark() {
                    return Ye.between(this.$anchor, this.$head).getBookmark()
                }
            }
            Ke.prototype.visible = !0;
            class Ue {
                constructor(t, e) {
                    this.$from = t, this.$to = e
                }
            }
            let Je = !1;

            function Ge(t) {
                Je || t.parent.inlineContent || (Je = !0, console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"))
            }
            class Ye extends Ke {
                constructor(t, e = t) {
                    Ge(t), Ge(e), super(t, e)
                }
                get $cursor() {
                    return this.$anchor.pos == this.$head.pos ? this.$head : null
                }
                map(t, e) {
                    let n = t.resolve(e.map(this.head));
                    if (!n.parent.inlineContent) return Ke.near(n);
                    let r = t.resolve(e.map(this.anchor));
                    return new Ye(r.parent.inlineContent ? r : n, n)
                }
                replace(t, e = y.empty) {
                    if (super.replace(t, e), e == y.empty) {
                        let e = this.$from.marksAcross(this.$to);
                        e && t.ensureMarks(e)
                    }
                }
                eq(t) {
                    return t instanceof Ye && t.anchor == this.anchor && t.head == this.head
                }
                getBookmark() {
                    return new Xe(this.anchor, this.head)
                }
                toJSON() {
                    return {
                        type: "text",
                        anchor: this.anchor,
                        head: this.head
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor || "number" != typeof e.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
                    return new Ye(t.resolve(e.anchor), t.resolve(e.head))
                }
                static create(t, e, n = e) {
                    let r = t.resolve(e);
                    return new this(r, n == e ? r : t.resolve(n))
                }
                static between(t, e, n) {
                    let r = t.pos - e.pos;
                    if (n && !r || (n = r >= 0 ? 1 : -1), !e.parent.inlineContent) {
                        let t = Ke.findFrom(e, n, !0) || Ke.findFrom(e, -n, !0);
                        if (!t) return Ke.near(e, n);
                        e = t.$head
                    }
                    return t.parent.inlineContent || (0 == r ? t = e : (t = (Ke.findFrom(t, -n, !0) || Ke.findFrom(t, n, !0)).$anchor, t.pos < e.pos != r < 0 && (t = e))), new Ye(t, e)
                }
            }
            Ke.jsonID("text", Ye);
            class Xe {
                constructor(t, e) {
                    this.anchor = t, this.head = e
                }
                map(t) {
                    return new Xe(t.map(this.anchor), t.map(this.head))
                }
                resolve(t) {
                    return Ye.between(t.resolve(this.anchor), t.resolve(this.head))
                }
            }
            class Qe extends Ke {
                constructor(t) {
                    let e = t.nodeAfter,
                        n = t.node(0).resolve(t.pos + e.nodeSize);
                    super(t, n), this.node = e
                }
                map(t, e) {
                    let {
                        deleted: n,
                        pos: r
                    } = e.mapResult(this.anchor), o = t.resolve(r);
                    return n ? Ke.near(o) : new Qe(o)
                }
                content() {
                    return new y(h.from(this.node), 0, 0)
                }
                eq(t) {
                    return t instanceof Qe && t.anchor == this.anchor
                }
                toJSON() {
                    return {
                        type: "node",
                        anchor: this.anchor
                    }
                }
                getBookmark() {
                    return new Ze(this.anchor)
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
                    return new Qe(t.resolve(e.anchor))
                }
                static create(t, e) {
                    return new Qe(t.resolve(e))
                }
                static isSelectable(t) {
                    return !t.isText && !1 !== t.type.spec.selectable
                }
            }
            Qe.prototype.visible = !1, Ke.jsonID("node", Qe);
            class Ze {
                constructor(t) {
                    this.anchor = t
                }
                map(t) {
                    let {
                        deleted: e,
                        pos: n
                    } = t.mapResult(this.anchor);
                    return e ? new Xe(n, n) : new Ze(n)
                }
                resolve(t) {
                    let e = t.resolve(this.anchor),
                        n = e.nodeAfter;
                    return n && Qe.isSelectable(n) ? new Qe(e) : Ke.near(e)
                }
            }
            class tn extends Ke {
                constructor(t) {
                    super(t.resolve(0), t.resolve(t.content.size))
                }
                replace(t, e = y.empty) {
                    if (e == y.empty) {
                        t.delete(0, t.doc.content.size);
                        let e = Ke.atStart(t.doc);
                        e.eq(t.selection) || t.setSelection(e)
                    } else super.replace(t, e)
                }
                toJSON() {
                    return {
                        type: "all"
                    }
                }
                static fromJSON(t) {
                    return new tn(t)
                }
                map(t) {
                    return new tn(t)
                }
                eq(t) {
                    return t instanceof tn
                }
                getBookmark() {
                    return en
                }
            }
            Ke.jsonID("all", tn);
            const en = {
                map() {
                    return this
                },
                resolve(t) {
                    return new tn(t)
                }
            };

            function nn(t, e, n, r, o, i = !1) {
                if (e.inlineContent) return Ye.create(t, n);
                for (let s = r - (o > 0 ? 0 : 1); o > 0 ? s < e.childCount : s >= 0; s += o) {
                    let r = e.child(s);
                    if (r.isAtom) {
                        if (!i && Qe.isSelectable(r)) return Qe.create(t, n - (o < 0 ? r.nodeSize : 0))
                    } else {
                        let e = nn(t, r, n + o, o < 0 ? r.childCount : 0, o, i);
                        if (e) return e
                    }
                    n += r.nodeSize * o
                }
                return null
            }

            function rn(t, e, n) {
                let r = t.steps.length - 1;
                if (r < e) return;
                let o = t.steps[r];
                if (!(o instanceof Qt || o instanceof Zt)) return;
                let i, s = t.mapping.maps[r];
                s.forEach((t, e, n, r) => {
                    null == i && (i = r)
                }), t.setSelection(Ke.near(t.doc.resolve(i), n))
            }
            const on = 1,
                sn = 2,
                an = 4;
            class ln extends We {
                constructor(t) {
                    super(t.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = t.selection, this.storedMarks = t.storedMarks
                }
                get selection() {
                    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection
                }
                setSelection(t) {
                    if (t.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
                    return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = (this.updated | on) & ~sn, this.storedMarks = null, this
                }
                get selectionSet() {
                    return (this.updated & on) > 0
                }
                setStoredMarks(t) {
                    return this.storedMarks = t, this.updated |= sn, this
                }
                ensureMarks(t) {
                    return m.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this
                }
                addStoredMark(t) {
                    return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()))
                }
                removeStoredMark(t) {
                    return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()))
                }
                get storedMarksSet() {
                    return (this.updated & sn) > 0
                }
                addStep(t, e) {
                    super.addStep(t, e), this.updated = this.updated & ~sn, this.storedMarks = null
                }
                setTime(t) {
                    return this.time = t, this
                }
                replaceSelection(t) {
                    return this.selection.replace(this, t), this
                }
                replaceSelectionWith(t, e = !0) {
                    let n = this.selection;
                    return e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || m.none))), n.replaceWith(this, t), this
                }
                deleteSelection() {
                    return this.selection.replace(this), this
                }
                insertText(t, e, n) {
                    let r = this.doc.type.schema;
                    if (null == e) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection(); {
                        if (null == n && (n = e), !t) return this.deleteRange(e, n);
                        let o = this.storedMarks;
                        if (!o) {
                            let t = this.doc.resolve(e);
                            o = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n))
                        }
                        return this.replaceRangeWith(e, n, r.text(t, o)), this.selection.empty || this.selection.to != e + t.length || this.setSelection(Ke.near(this.selection.$to)), this
                    }
                }
                setMeta(t, e) {
                    return this.meta["string" == typeof t ? t : t.key] = e, this
                }
                getMeta(t) {
                    return this.meta["string" == typeof t ? t : t.key]
                }
                get isGeneric() {
                    for (let t in this.meta) return !1;
                    return !0
                }
                scrollIntoView() {
                    return this.updated |= an, this
                }
                get scrolledIntoView() {
                    return (this.updated & an) > 0
                }
            }

            function cn(t, e) {
                return e && t ? t.bind(e) : t
            }
            class dn {
                constructor(t, e, n) {
                    this.name = t, this.init = cn(e.init, n), this.apply = cn(e.apply, n)
                }
            }
            const hn = [new dn("doc", {
                init(t) {
                    return t.doc || t.schema.topNodeType.createAndFill()
                },
                apply(t) {
                    return t.doc
                }
            }), new dn("selection", {
                init(t, e) {
                    return t.selection || Ke.atStart(e.doc)
                },
                apply(t) {
                    return t.selection
                }
            }), new dn("storedMarks", {
                init(t) {
                    return t.storedMarks || null
                },
                apply(t, e, n, r) {
                    return r.selection.$cursor ? t.storedMarks : null
                }
            }), new dn("scrollToSelection", {
                init() {
                    return 0
                },
                apply(t, e) {
                    return t.scrolledIntoView ? e + 1 : e
                }
            })];
            class un {
                constructor(t, e) {
                    this.schema = t, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = hn.slice(), e && e.forEach(t => {
                        if (this.pluginsByKey[t.key]) throw new RangeError("Adding different instances of a keyed plugin (" + t.key + ")");
                        this.plugins.push(t), this.pluginsByKey[t.key] = t, t.spec.state && this.fields.push(new dn(t.key, t.spec.state, t))
                    })
                }
            }
            class pn {
                constructor(t) {
                    this.config = t
                }
                get schema() {
                    return this.config.schema
                }
                get plugins() {
                    return this.config.plugins
                }
                apply(t) {
                    return this.applyTransaction(t).state
                }
                filterTransaction(t, e = -1) {
                    for (let n = 0; n < this.config.plugins.length; n++)
                        if (n != e) {
                            let e = this.config.plugins[n];
                            if (e.spec.filterTransaction && !e.spec.filterTransaction.call(e, t, this)) return !1
                        }
                    return !0
                }
                applyTransaction(t) {
                    if (!this.filterTransaction(t)) return {
                        state: this,
                        transactions: []
                    };
                    let e = [t],
                        n = this.applyInner(t),
                        r = null;
                    for (;;) {
                        let o = !1;
                        for (let i = 0; i < this.config.plugins.length; i++) {
                            let s = this.config.plugins[i];
                            if (s.spec.appendTransaction) {
                                let a = r ? r[i].n : 0,
                                    l = r ? r[i].state : this,
                                    c = a < e.length && s.spec.appendTransaction.call(s, a ? e.slice(a) : e, l, n);
                                if (c && n.filterTransaction(c, i)) {
                                    if (c.setMeta("appendedTransaction", t), !r) {
                                        r = [];
                                        for (let t = 0; t < this.config.plugins.length; t++) r.push(t < i ? {
                                            state: n,
                                            n: e.length
                                        } : {
                                            state: this,
                                            n: 0
                                        })
                                    }
                                    e.push(c), n = n.applyInner(c), o = !0
                                }
                                r && (r[i] = {
                                    state: n,
                                    n: e.length
                                })
                            }
                        }
                        if (!o) return {
                            state: n,
                            transactions: e
                        }
                    }
                }
                applyInner(t) {
                    if (!t.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
                    let e = new pn(this.config),
                        n = this.config.fields;
                    for (let r = 0; r < n.length; r++) {
                        let o = n[r];
                        e[o.name] = o.apply(t, this[o.name], this, e)
                    }
                    return e
                }
                get tr() {
                    return new ln(this)
                }
                static create(t) {
                    let e = new un(t.doc ? t.doc.type.schema : t.schema, t.plugins),
                        n = new pn(e);
                    for (let r = 0; r < e.fields.length; r++) n[e.fields[r].name] = e.fields[r].init(t, n);
                    return n
                }
                reconfigure(t) {
                    let e = new un(this.schema, t.plugins),
                        n = e.fields,
                        r = new pn(e);
                    for (let o = 0; o < n.length; o++) {
                        let e = n[o].name;
                        r[e] = this.hasOwnProperty(e) ? this[e] : n[o].init(t, r)
                    }
                    return r
                }
                toJSON(t) {
                    let e = {
                        doc: this.doc.toJSON(),
                        selection: this.selection.toJSON()
                    };
                    if (this.storedMarks && (e.storedMarks = this.storedMarks.map(t => t.toJSON())), t && "object" == typeof t)
                        for (let n in t) {
                            if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                            let r = t[n],
                                o = r.spec.state;
                            o && o.toJSON && (e[n] = o.toJSON.call(r, this[r.key]))
                        }
                    return e
                }
                static fromJSON(t, e, n) {
                    if (!e) throw new RangeError("Invalid input for EditorState.fromJSON");
                    if (!t.schema) throw new RangeError("Required config field 'schema' missing");
                    let r = new un(t.schema, t.plugins),
                        o = new pn(r);
                    return r.fields.forEach(r => {
                        if ("doc" == r.name) o.doc = $.fromJSON(t.schema, e.doc);
                        else if ("selection" == r.name) o.selection = Ke.fromJSON(o.doc, e.selection);
                        else if ("storedMarks" == r.name) e.storedMarks && (o.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
                        else {
                            if (n)
                                for (let i in n) {
                                    let s = n[i],
                                        a = s.spec.state;
                                    if (s.key == r.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(e, i)) return void(o[r.name] = a.fromJSON.call(s, t, e[i], o))
                                }
                            o[r.name] = r.init(t, o)
                        }
                    }), o
                }
            }

            function fn(t, e, n) {
                for (let r in t) {
                    let o = t[r];
                    o instanceof Function ? o = o.bind(e) : "handleDOMEvents" == r && (o = fn(o, e, {})), n[r] = o
                }
                return n
            }
            class mn {
                constructor(t) {
                    this.spec = t, this.props = {}, t.props && fn(t.props, this, this.props), this.key = t.key ? t.key.key : yn("plugin")
                }
                getState(t) {
                    return t[this.key]
                }
            }
            const gn = Object.create(null);

            function yn(t) {
                return t in gn ? t + "$" + ++gn[t] : (gn[t] = 0, t + "$")
            }
            class bn {
                constructor(t = "key") {
                    this.key = yn(t)
                }
                get(t) {
                    return t.config.pluginsByKey[this.key]
                }
                getState(t) {
                    return t[this.key]
                }
            }
            const vn = (t, e) => !t.selection.empty && (e && e(t.tr.deleteSelection().scrollIntoView()), !0);

            function wn(t, e) {
                let {
                    $cursor: n
                } = t.selection;
                return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n
            }
            const kn = (t, e, n) => {
                    let r = wn(t, n);
                    if (!r) return !1;
                    let o = Tn(r);
                    if (!o) {
                        let n = r.blockRange(),
                            o = n && ie(n);
                        return null != o && (e && e(t.tr.lift(n, o).scrollIntoView()), !0)
                    }
                    let i = o.nodeBefore;
                    if (qn(t, o, e, -1)) return !0;
                    if (0 == r.parent.content.size && (Cn(i, "end") || Qe.isSelectable(i)))
                        for (let s = r.depth;; s--) {
                            let n = Oe(t.doc, r.before(s), r.after(s), y.empty);
                            if (n && n.slice.size < n.to - n.from) {
                                if (e) {
                                    let r = t.tr.step(n);
                                    r.setSelection(Cn(i, "end") ? Ke.findFrom(r.doc.resolve(r.mapping.map(o.pos, -1)), -1) : Qe.create(r.doc, o.pos - i.nodeSize)), e(r.scrollIntoView())
                                }
                                return !0
                            }
                            if (1 == s || r.node(s - 1).childCount > 1) break
                        }
                    return !(!i.isAtom || o.depth != r.depth - 1) && (e && e(t.tr.delete(o.pos - i.nodeSize, o.pos).scrollIntoView()), !0)
                },
                xn = (t, e, n) => {
                    let r = wn(t, n);
                    if (!r) return !1;
                    let o = Tn(r);
                    return !!o && Mn(t, o, e)
                },
                Sn = (t, e, n) => {
                    let r = An(t, n);
                    if (!r) return !1;
                    let o = Dn(r);
                    return !!o && Mn(t, o, e)
                };

            function Mn(t, e, n) {
                let r = e.nodeBefore,
                    o = r,
                    i = e.pos - 1;
                for (; !o.isTextblock; i--) {
                    if (o.type.spec.isolating) return !1;
                    let t = o.lastChild;
                    if (!t) return !1;
                    o = t
                }
                let s = e.nodeAfter,
                    a = s,
                    l = e.pos + 1;
                for (; !a.isTextblock; l++) {
                    if (a.type.spec.isolating) return !1;
                    let t = a.firstChild;
                    if (!t) return !1;
                    a = t
                }
                let c = Oe(t.doc, i, l, y.empty);
                if (!c || c.from != i || c instanceof Qt && c.slice.size >= l - i) return !1;
                if (n) {
                    let e = t.tr.step(c);
                    e.setSelection(Ye.create(e.doc, i)), n(e.scrollIntoView())
                }
                return !0
            }

            function Cn(t, e, n = !1) {
                for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
                    if (r.isTextblock) return !0;
                    if (n && 1 != r.childCount) return !1
                }
                return !1
            }
            const On = (t, e, n) => {
                let {
                    $head: r,
                    empty: o
                } = t.selection, i = r;
                if (!o) return !1;
                if (r.parent.isTextblock) {
                    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0) return !1;
                    i = Tn(r)
                }
                let s = i && i.nodeBefore;
                return !(!s || !Qe.isSelectable(s)) && (e && e(t.tr.setSelection(Qe.create(t.doc, i.pos - s.nodeSize)).scrollIntoView()), !0)
            };

            function Tn(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
                        if (t.node(e).type.spec.isolating) break
                    }
                return null
            }

            function An(t, e) {
                let {
                    $cursor: n
                } = t.selection;
                return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n
            }
            const Nn = (t, e, n) => {
                    let r = An(t, n);
                    if (!r) return !1;
                    let o = Dn(r);
                    if (!o) return !1;
                    let i = o.nodeAfter;
                    if (qn(t, o, e, 1)) return !0;
                    if (0 == r.parent.content.size && (Cn(i, "start") || Qe.isSelectable(i))) {
                        let n = Oe(t.doc, r.before(), r.after(), y.empty);
                        if (n && n.slice.size < n.to - n.from) {
                            if (e) {
                                let r = t.tr.step(n);
                                r.setSelection(Cn(i, "start") ? Ke.findFrom(r.doc.resolve(r.mapping.map(o.pos)), 1) : Qe.create(r.doc, r.mapping.map(o.pos))), e(r.scrollIntoView())
                            }
                            return !0
                        }
                    }
                    return !(!i.isAtom || o.depth != r.depth - 1) && (e && e(t.tr.delete(o.pos, o.pos + i.nodeSize).scrollIntoView()), !0)
                },
                En = (t, e, n) => {
                    let {
                        $head: r,
                        empty: o
                    } = t.selection, i = r;
                    if (!o) return !1;
                    if (r.parent.isTextblock) {
                        if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size) return !1;
                        i = Dn(r)
                    }
                    let s = i && i.nodeAfter;
                    return !(!s || !Qe.isSelectable(s)) && (e && e(t.tr.setSelection(Qe.create(t.doc, i.pos)).scrollIntoView()), !0)
                };

            function Dn(t) {
                if (!t.parent.type.spec.isolating)
                    for (let e = t.depth - 1; e >= 0; e--) {
                        let n = t.node(e);
                        if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
                        if (n.type.spec.isolating) break
                    }
                return null
            }
            const Pn = (t, e) => {
                    let n, r = t.selection,
                        o = r instanceof Qe;
                    if (o) {
                        if (r.node.isTextblock || !ve(t.doc, r.from)) return !1;
                        n = r.from
                    } else if (n = xe(t.doc, r.from, -1), null == n) return !1;
                    if (e) {
                        let r = t.tr.join(n);
                        o && r.setSelection(Qe.create(r.doc, n - t.doc.resolve(n).nodeBefore.nodeSize)), e(r.scrollIntoView())
                    }
                    return !0
                },
                Rn = (t, e) => {
                    let n, r = t.selection;
                    if (r instanceof Qe) {
                        if (r.node.isTextblock || !ve(t.doc, r.to)) return !1;
                        n = r.to
                    } else if (n = xe(t.doc, r.to, 1), null == n) return !1;
                    return e && e(t.tr.join(n).scrollIntoView()), !0
                },
                Ln = (t, e) => {
                    let {
                        $from: n,
                        $to: r
                    } = t.selection, o = n.blockRange(r), i = o && ie(o);
                    return null != i && (e && e(t.tr.lift(o, i).scrollIntoView()), !0)
                },
                In = (t, e) => {
                    let {
                        $head: n,
                        $anchor: r
                    } = t.selection;
                    return !(!n.parent.type.spec.code || !n.sameParent(r)) && (e && e(t.tr.insertText("\n").scrollIntoView()), !0)
                };

            function $n(t) {
                for (let e = 0; e < t.edgeCount; e++) {
                    let {
                        type: n
                    } = t.edge(e);
                    if (n.isTextblock && !n.hasRequiredAttrs()) return n
                }
                return null
            }
            const zn = (t, e) => {
                    let {
                        $head: n,
                        $anchor: r
                    } = t.selection;
                    if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
                    let o = n.node(-1),
                        i = n.indexAfter(-1),
                        s = $n(o.contentMatchAt(i));
                    if (!s || !o.canReplaceWith(i, i, s)) return !1;
                    if (e) {
                        let r = n.after(),
                            o = t.tr.replaceWith(r, r, s.createAndFill());
                        o.setSelection(Ke.near(o.doc.resolve(r), 1)), e(o.scrollIntoView())
                    }
                    return !0
                },
                jn = (t, e) => {
                    let n = t.selection,
                        {
                            $from: r,
                            $to: o
                        } = n;
                    if (n instanceof tn || r.parent.inlineContent || o.parent.inlineContent) return !1;
                    let i = $n(o.parent.contentMatchAt(o.indexAfter()));
                    if (!i || !i.isTextblock) return !1;
                    if (e) {
                        let n = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos,
                            s = t.tr.insert(n, i.createAndFill());
                        s.setSelection(Ye.create(s.doc, n + 1)), e(s.scrollIntoView())
                    }
                    return !0
                },
                Bn = (t, e) => {
                    let {
                        $cursor: n
                    } = t.selection;
                    if (!n || n.parent.content.size) return !1;
                    if (n.depth > 1 && n.after() != n.end(-1)) {
                        let r = n.before();
                        if (ye(t.doc, r)) return e && e(t.tr.split(r).scrollIntoView()), !0
                    }
                    let r = n.blockRange(),
                        o = r && ie(r);
                    return null != o && (e && e(t.tr.lift(r, o).scrollIntoView()), !0)
                };

            function Hn(t) {
                return (e, n) => {
                    let {
                        $from: r,
                        $to: o
                    } = e.selection;
                    if (e.selection instanceof Qe && e.selection.node.isBlock) return !(!r.parentOffset || !ye(e.doc, r.pos)) && (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
                    if (!r.depth) return !1;
                    let i, s, a = [],
                        l = !1,
                        c = !1;
                    for (let p = r.depth;; p--) {
                        let e = r.node(p);
                        if (e.isBlock) {
                            l = r.end(p) == r.pos + (r.depth - p), c = r.start(p) == r.pos - (r.depth - p), s = $n(r.node(p - 1).contentMatchAt(r.indexAfter(p - 1)));
                            let e = t && t(o.parent, l, r);
                            a.unshift(e || (l && s ? {
                                type: s
                            } : null)), i = p;
                            break
                        }
                        if (1 == p) return !1;
                        a.unshift(null)
                    }
                    let d = e.tr;
                    (e.selection instanceof Ye || e.selection instanceof tn) && d.deleteSelection();
                    let h = d.mapping.map(r.pos),
                        u = ye(d.doc, h, a.length, a);
                    if (u || (a[0] = s ? {
                            type: s
                        } : null, u = ye(d.doc, h, a.length, a)), !u) return !1;
                    if (d.split(h, a.length, a), !l && c && r.node(i).type != s) {
                        let t = d.mapping.map(r.before(i)),
                            e = d.doc.resolve(t);
                        s && r.node(i - 1).canReplaceWith(e.index(), e.index() + 1, s) && d.setNodeMarkup(d.mapping.map(r.before(i)), s)
                    }
                    return n && n(d.scrollIntoView()), !0
                }
            }
            const Vn = Hn(),
                Fn = (t, e) => {
                    let n, {
                            $from: r,
                            to: o
                        } = t.selection,
                        i = r.sharedDepth(o);
                    return 0 != i && (n = r.before(i), e && e(t.tr.setSelection(Qe.create(t.doc, n))), !0)
                },
                _n = (t, e) => (e && e(t.tr.setSelection(new tn(t.doc))), !0);

            function Wn(t, e, n) {
                let r = e.nodeBefore,
                    o = e.nodeAfter,
                    i = e.index();
                return !!(r && o && r.type.compatibleContent(o.type)) && (!r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !(!e.parent.canReplace(i, i + 1) || !o.isTextblock && !ve(t.doc, e.pos)) && (n && n(t.tr.join(e.pos).scrollIntoView()), !0))
            }

            function qn(t, e, n, r) {
                let o, i, s = e.nodeBefore,
                    a = e.nodeAfter,
                    l = s.type.spec.isolating || a.type.spec.isolating;
                if (!l && Wn(t, e, n)) return !0;
                let c = !l && e.parent.canReplace(e.index(), e.index() + 1);
                if (c && (o = (i = s.contentMatchAt(s.childCount)).findWrapping(a.type)) && i.matchType(o[0] || a.type).validEnd) {
                    if (n) {
                        let r = e.pos + a.nodeSize,
                            i = h.empty;
                        for (let t = o.length - 1; t >= 0; t--) i = h.from(o[t].create(null, i));
                        i = h.from(s.copy(i));
                        let l = t.tr.step(new Zt(e.pos - 1, r, e.pos, r, new y(i, 1, 0), o.length, !0)),
                            c = l.doc.resolve(r + 2 * o.length);
                        c.nodeAfter && c.nodeAfter.type == s.type && ve(l.doc, c.pos) && l.join(c.pos), n(l.scrollIntoView())
                    }
                    return !0
                }
                let d = a.type.spec.isolating || r > 0 && l ? null : Ke.findFrom(e, 1),
                    u = d && d.$from.blockRange(d.$to),
                    p = u && ie(u);
                if (null != p && p >= e.depth) return n && n(t.tr.lift(u, p).scrollIntoView()), !0;
                if (c && Cn(a, "start", !0) && Cn(s, "end")) {
                    let r = s,
                        o = [];
                    for (;;) {
                        if (o.push(r), r.isTextblock) break;
                        r = r.lastChild
                    }
                    let i = a,
                        l = 1;
                    for (; !i.isTextblock; i = i.firstChild) l++;
                    if (r.canReplace(r.childCount, r.childCount, i.content)) {
                        if (n) {
                            let r = h.empty;
                            for (let t = o.length - 1; t >= 0; t--) r = h.from(o[t].copy(r));
                            let i = t.tr.step(new Zt(e.pos - o.length, e.pos + a.nodeSize, e.pos + l, e.pos + a.nodeSize - l, new y(r, o.length, 0), 0, !0));
                            n(i.scrollIntoView())
                        }
                        return !0
                    }
                }
                return !1
            }

            function Kn(t) {
                return function(e, n) {
                    let r = e.selection,
                        o = t < 0 ? r.$from : r.$to,
                        i = o.depth;
                    while (o.node(i).isInline) {
                        if (!i) return !1;
                        i--
                    }
                    return !!o.node(i).isTextblock && (n && n(e.tr.setSelection(Ye.create(e.doc, t < 0 ? o.start(i) : o.end(i)))), !0)
                }
            }
            const Un = Kn(-1),
                Jn = Kn(1);

            function Gn(t, e = null) {
                return function(n, r) {
                    let {
                        $from: o,
                        $to: i
                    } = n.selection, s = o.blockRange(i), a = s && ae(s, t, e);
                    return !!a && (r && r(n.tr.wrap(s, a).scrollIntoView()), !0)
                }
            }

            function Yn(t, e = null) {
                return function(n, r) {
                    let o = !1;
                    for (let i = 0; i < n.selection.ranges.length && !o; i++) {
                        let {
                            $from: {
                                pos: r
                            },
                            $to: {
                                pos: s
                            }
                        } = n.selection.ranges[i];
                        n.doc.nodesBetween(r, s, (r, i) => {
                            if (o) return !1;
                            if (r.isTextblock && !r.hasMarkup(t, e))
                                if (r.type == t) o = !0;
                                else {
                                    let e = n.doc.resolve(i),
                                        r = e.index();
                                    o = e.parent.canReplaceWith(r, r + 1, t)
                                }
                        })
                    }
                    if (!o) return !1;
                    if (r) {
                        let o = n.tr;
                        for (let r = 0; r < n.selection.ranges.length; r++) {
                            let {
                                $from: {
                                    pos: i
                                },
                                $to: {
                                    pos: s
                                }
                            } = n.selection.ranges[r];
                            o.setBlockType(i, s, t, e)
                        }
                        r(o.scrollIntoView())
                    }
                    return !0
                }
            }

            function Xn(...t) {
                return function(e, n, r) {
                    for (let o = 0; o < t.length; o++)
                        if (t[o](e, n, r)) return !0;
                    return !1
                }
            }
            let Qn = Xn(vn, kn, On),
                Zn = Xn(vn, Nn, En);
            const tr = {
                    Enter: Xn(In, jn, Bn, Vn),
                    "Mod-Enter": zn,
                    Backspace: Qn,
                    "Mod-Backspace": Qn,
                    "Shift-Backspace": Qn,
                    Delete: Zn,
                    "Mod-Delete": Zn,
                    "Mod-a": _n
                },
                er = {
                    "Ctrl-h": tr["Backspace"],
                    "Alt-Backspace": tr["Mod-Backspace"],
                    "Ctrl-d": tr["Delete"],
                    "Ctrl-Alt-Backspace": tr["Mod-Delete"],
                    "Alt-Delete": tr["Mod-Delete"],
                    "Alt-d": tr["Mod-Delete"],
                    "Ctrl-a": Un,
                    "Ctrl-e": Jn
                };
            for (let os in tr) er[os] = tr[os];
            "undefined" != typeof navigator ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !("undefined" == typeof os || !os.platform) && os.platform();

            function nr(t, e = null) {
                return function(n, r) {
                    let {
                        $from: o,
                        $to: i
                    } = n.selection, s = o.blockRange(i);
                    if (!s) return !1;
                    let a = r ? n.tr : null;
                    return !!rr(a, s, t, e) && (r && r(a.scrollIntoView()), !0)
                }
            }

            function rr(t, e, n, r = null) {
                let o = !1,
                    i = e,
                    s = e.$from.doc;
                if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && 0 == e.startIndex) {
                    if (0 == e.$from.index(e.depth - 1)) return !1;
                    let t = s.resolve(e.start - 2);
                    i = new L(t, t, e.depth), e.endIndex < e.parent.childCount && (e = new L(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), o = !0
                }
                let a = ae(i, n, r, e);
                return !!a && (t && or(t, e, a, o, n), !0)
            }

            function or(t, e, n, r, o) {
                let i = h.empty;
                for (let d = n.length - 1; d >= 0; d--) i = h.from(n[d].type.create(n[d].attrs, i));
                t.step(new Zt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new y(i, 0, 0), n.length, !0));
                let s = 0;
                for (let d = 0; d < n.length; d++) n[d].type == o && (s = d + 1);
                let a = n.length - s,
                    l = e.start + n.length - (r ? 2 : 0),
                    c = e.parent;
                for (let d = e.startIndex, h = e.endIndex, u = !0; d < h; d++, u = !1) !u && ye(t.doc, l, a) && (t.split(l, a), l += 2 * a), l += c.child(d).nodeSize;
                return t
            }

            function ir(t) {
                return function(e, n) {
                    let {
                        $from: r,
                        $to: o
                    } = e.selection, i = r.blockRange(o, e => e.childCount > 0 && e.firstChild.type == t);
                    return !!i && (!n || (r.node(i.depth - 1).type == t ? sr(e, n, t, i) : ar(e, n, i)))
                }
            }

            function sr(t, e, n, r) {
                let o = t.tr,
                    i = r.end,
                    s = r.$to.end(r.depth);
                i < s && (o.step(new Zt(i - 1, s, i, s, new y(h.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new L(o.doc.resolve(r.$from.pos), o.doc.resolve(s), r.depth));
                const a = ie(r);
                if (null == a) return !1;
                o.lift(r, a);
                let l = o.doc.resolve(o.mapping.map(i, -1) - 1);
                return ve(o.doc, l.pos) && l.nodeBefore.type == l.nodeAfter.type && o.join(l.pos), e(o.scrollIntoView()), !0
            }

            function ar(t, e, n) {
                let r = t.tr,
                    o = n.parent;
                for (let h = n.end, f = n.endIndex - 1, m = n.startIndex; f > m; f--) h -= o.child(f).nodeSize, r.delete(h - 1, h + 1);
                let i = r.doc.resolve(n.start),
                    s = i.nodeAfter;
                if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize) return !1;
                let a = 0 == n.startIndex,
                    l = n.endIndex == o.childCount,
                    c = i.node(-1),
                    d = i.index(-1);
                if (!c.canReplace(d + (a ? 0 : 1), d + 1, s.content.append(l ? h.empty : h.from(o)))) return !1;
                let u = i.pos,
                    p = u + s.nodeSize;
                return r.step(new Zt(u - (a ? 1 : 0), p + (l ? 1 : 0), u + 1, p - 1, new y((a ? h.empty : h.from(o.copy(h.empty))).append(l ? h.empty : h.from(o.copy(h.empty))), a ? 0 : 1, l ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0
            }

            function lr(t) {
                return function(e, n) {
                    let {
                        $from: r,
                        $to: o
                    } = e.selection, i = r.blockRange(o, e => e.childCount > 0 && e.firstChild.type == t);
                    if (!i) return !1;
                    let s = i.startIndex;
                    if (0 == s) return !1;
                    let a = i.parent,
                        l = a.child(s - 1);
                    if (l.type != t) return !1;
                    if (n) {
                        let r = l.lastChild && l.lastChild.type == a.type,
                            o = h.from(r ? t.create() : null),
                            s = new y(h.from(t.create(null, h.from(a.type.create(null, o)))), r ? 3 : 1, 0),
                            c = i.start,
                            d = i.end;
                        n(e.tr.step(new Zt(c - (r ? 3 : 1), d, c, d, s, 1, !0)).scrollIntoView())
                    }
                    return !0
                }
            }
            const cr = function(t) {
                    for (var e = 0;; e++)
                        if (t = t.previousSibling, !t) return e
                },
                dr = function(t) {
                    let e = t.assignedSlot || t.parentNode;
                    return e && 11 == e.nodeType ? e.host : e
                };
            let hr = null;
            const ur = function(t, e, n) {
                    let r = hr || (hr = document.createRange());
                    return r.setEnd(t, null == n ? t.nodeValue.length : n), r.setStart(t, e || 0), r
                },
                pr = function() {
                    hr = null
                },
                fr = function(t, e, n, r) {
                    return n && (gr(t, e, n, r, -1) || gr(t, e, n, r, 1))
                },
                mr = /^(img|br|input|textarea|hr)$/i;

            function gr(t, e, n, r, o) {
                for (var i;;) {
                    if (t == n && e == r) return !0;
                    if (e == (o < 0 ? 0 : yr(t))) {
                        let n = t.parentNode;
                        if (!n || 1 != n.nodeType || kr(t) || mr.test(t.nodeName) || "false" == t.contentEditable) return !1;
                        e = cr(t) + (o < 0 ? 0 : 1), t = n
                    } else {
                        if (1 != t.nodeType) return !1; {
                            let n = t.childNodes[e + (o < 0 ? -1 : 0)];
                            if (1 == n.nodeType && "false" == n.contentEditable) {
                                if (!(null === (i = n.pmViewDesc) || void 0 === i ? void 0 : i.ignoreForSelection)) return !1;
                                e += o
                            } else t = n, e = o < 0 ? yr(t) : 0
                        }
                    }
                }
            }

            function yr(t) {
                return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length
            }

            function br(t, e) {
                for (;;) {
                    if (3 == t.nodeType && e) return t;
                    if (1 == t.nodeType && e > 0) {
                        if ("false" == t.contentEditable) return null;
                        t = t.childNodes[e - 1], e = yr(t)
                    } else {
                        if (!t.parentNode || kr(t)) return null;
                        e = cr(t), t = t.parentNode
                    }
                }
            }

            function vr(t, e) {
                for (;;) {
                    if (3 == t.nodeType && e < t.nodeValue.length) return t;
                    if (1 == t.nodeType && e < t.childNodes.length) {
                        if ("false" == t.contentEditable) return null;
                        t = t.childNodes[e], e = 0
                    } else {
                        if (!t.parentNode || kr(t)) return null;
                        e = cr(t) + 1, t = t.parentNode
                    }
                }
            }

            function wr(t, e, n) {
                for (let r = 0 == e, o = e == yr(t); r || o;) {
                    if (t == n) return !0;
                    let e = cr(t);
                    if (t = t.parentNode, !t) return !1;
                    r = r && 0 == e, o = o && e == yr(t)
                }
            }

            function kr(t) {
                let e;
                for (let n = t; n; n = n.parentNode)
                    if (e = n.pmViewDesc) break;
                return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t)
            }
            const xr = function(t) {
                return t.focusNode && fr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
            };

            function Sr(t, e) {
                let n = document.createEvent("Event");
                return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n
            }

            function Mr(t) {
                let e = t.activeElement;
                while (e && e.shadowRoot) e = e.shadowRoot.activeElement;
                return e
            }

            function Cr(t, e, n) {
                if (t.caretPositionFromPoint) try {
                    let r = t.caretPositionFromPoint(e, n);
                    if (r) return {
                        node: r.offsetNode,
                        offset: Math.min(yr(r.offsetNode), r.offset)
                    }
                } catch (r) {}
                if (t.caretRangeFromPoint) {
                    let r = t.caretRangeFromPoint(e, n);
                    if (r) return {
                        node: r.startContainer,
                        offset: Math.min(yr(r.startContainer), r.startOffset)
                    }
                }
            }
            const Or = "undefined" != typeof navigator ? navigator : null,
                Tr = "undefined" != typeof document ? document : null,
                Ar = Or && Or.userAgent || "",
                Nr = /Edge\/(\d+)/.exec(Ar),
                Er = /MSIE \d/.exec(Ar),
                Dr = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ar),
                Pr = !!(Er || Dr || Nr),
                Rr = Er ? document.documentMode : Dr ? +Dr[1] : Nr ? +Nr[1] : 0,
                Lr = !Pr && /gecko\/(\d+)/i.test(Ar);
            Lr && (/Firefox\/(\d+)/.exec(Ar) || [0, 0])[1];
            const Ir = !Pr && /Chrome\/(\d+)/.exec(Ar),
                $r = !!Ir,
                zr = Ir ? +Ir[1] : 0,
                jr = !Pr && !!Or && /Apple Computer/.test(Or.vendor),
                Br = jr && (/Mobile\/\w+/.test(Ar) || !!Or && Or.maxTouchPoints > 2),
                Hr = Br || !!Or && /Mac/.test(Or.platform),
                Vr = !!Or && /Win/.test(Or.platform),
                Fr = /Android \d/.test(Ar),
                _r = !!Tr && "webkitFontSmoothing" in Tr.documentElement.style,
                Wr = _r ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

            function qr(t) {
                let e = t.defaultView && t.defaultView.visualViewport;
                return e ? {
                    left: 0,
                    right: e.width,
                    top: 0,
                    bottom: e.height
                } : {
                    left: 0,
                    right: t.documentElement.clientWidth,
                    top: 0,
                    bottom: t.documentElement.clientHeight
                }
            }

            function Kr(t, e) {
                return "number" == typeof t ? t : t[e]
            }

            function Ur(t) {
                let e = t.getBoundingClientRect(),
                    n = e.width / t.offsetWidth || 1,
                    r = e.height / t.offsetHeight || 1;
                return {
                    left: e.left,
                    right: e.left + t.clientWidth * n,
                    top: e.top,
                    bottom: e.top + t.clientHeight * r
                }
            }

            function Jr(t, e, n) {
                let r = t.someProp("scrollThreshold") || 0,
                    o = t.someProp("scrollMargin") || 5,
                    i = t.dom.ownerDocument;
                for (let s = n || t.dom;;) {
                    if (!s) break;
                    if (1 != s.nodeType) {
                        s = dr(s);
                        continue
                    }
                    let t = s,
                        n = t == i.body,
                        a = n ? qr(i) : Ur(t),
                        l = 0,
                        c = 0;
                    if (e.top < a.top + Kr(r, "top") ? c = -(a.top - e.top + Kr(o, "top")) : e.bottom > a.bottom - Kr(r, "bottom") && (c = e.bottom - e.top > a.bottom - a.top ? e.top + Kr(o, "top") - a.top : e.bottom - a.bottom + Kr(o, "bottom")), e.left < a.left + Kr(r, "left") ? l = -(a.left - e.left + Kr(o, "left")) : e.right > a.right - Kr(r, "right") && (l = e.right - a.right + Kr(o, "right")), l || c)
                        if (n) i.defaultView.scrollBy(l, c);
                        else {
                            let n = t.scrollLeft,
                                r = t.scrollTop;
                            c && (t.scrollTop += c), l && (t.scrollLeft += l);
                            let o = t.scrollLeft - n,
                                i = t.scrollTop - r;
                            e = {
                                left: e.left - o,
                                top: e.top - i,
                                right: e.right - o,
                                bottom: e.bottom - i
                            }
                        }
                    let d = n ? "fixed" : getComputedStyle(s).position;
                    if (/^(fixed|sticky)$/.test(d)) break;
                    s = "absolute" == d ? s.offsetParent : dr(s)
                }
            }

            function Gr(t) {
                let e, n, r = t.dom.getBoundingClientRect(),
                    o = Math.max(0, r.top);
                for (let i = (r.left + r.right) / 2, s = o + 1; s < Math.min(innerHeight, r.bottom); s += 5) {
                    let r = t.root.elementFromPoint(i, s);
                    if (!r || r == t.dom || !t.dom.contains(r)) continue;
                    let a = r.getBoundingClientRect();
                    if (a.top >= o - 20) {
                        e = r, n = a.top;
                        break
                    }
                }
                return {
                    refDOM: e,
                    refTop: n,
                    stack: Yr(t.dom)
                }
            }

            function Yr(t) {
                let e = [],
                    n = t.ownerDocument;
                for (let r = t; r; r = dr(r))
                    if (e.push({
                            dom: r,
                            top: r.scrollTop,
                            left: r.scrollLeft
                        }), t == n) break;
                return e
            }

            function Xr({
                refDOM: t,
                refTop: e,
                stack: n
            }) {
                let r = t ? t.getBoundingClientRect().top : 0;
                Qr(n, 0 == r ? 0 : r - e)
            }

            function Qr(t, e) {
                for (let n = 0; n < t.length; n++) {
                    let {
                        dom: r,
                        top: o,
                        left: i
                    } = t[n];
                    r.scrollTop != o + e && (r.scrollTop = o + e), r.scrollLeft != i && (r.scrollLeft = i)
                }
            }
            let Zr = null;

            function to(t) {
                if (t.setActive) return t.setActive();
                if (Zr) return t.focus(Zr);
                let e = Yr(t);
                t.focus(null == Zr ? {
                    get preventScroll() {
                        return Zr = {
                            preventScroll: !0
                        }, !0
                    }
                } : void 0), Zr || (Zr = !1, Qr(e, 0))
            }

            function eo(t, e) {
                let n, r, o, i, s = 2e8,
                    a = 0,
                    l = e.top,
                    c = e.top;
                for (let d = t.firstChild, h = 0; d; d = d.nextSibling, h++) {
                    let t;
                    if (1 == d.nodeType) t = d.getClientRects();
                    else {
                        if (3 != d.nodeType) continue;
                        t = ur(d).getClientRects()
                    }
                    for (let u = 0; u < t.length; u++) {
                        let p = t[u];
                        if (p.top <= l && p.bottom >= c) {
                            l = Math.max(p.bottom, l), c = Math.min(p.top, c);
                            let t = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
                            if (t < s) {
                                n = d, s = t, r = t && 3 == n.nodeType ? {
                                    left: p.right < e.left ? p.right : p.left,
                                    top: e.top
                                } : e, 1 == d.nodeType && t && (a = h + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
                                continue
                            }
                        } else p.top > e.top && !o && p.left <= e.left && p.right >= e.left && (o = d, i = {
                            left: Math.max(p.left, Math.min(p.right, e.left)),
                            top: p.top
                        });
                        !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (a = h + 1)
                    }
                }
                return !n && o && (n = o, r = i, s = 0), n && 3 == n.nodeType ? no(n, r) : !n || s && 1 == n.nodeType ? {
                    node: t,
                    offset: a
                } : eo(n, r)
            }

            function no(t, e) {
                let n = t.nodeValue.length,
                    r = document.createRange();
                for (let o = 0; o < n; o++) {
                    r.setEnd(t, o + 1), r.setStart(t, o);
                    let n = ho(r, 1);
                    if (n.top != n.bottom && ro(e, n)) return {
                        node: t,
                        offset: o + (e.left >= (n.left + n.right) / 2 ? 1 : 0)
                    }
                }
                return {
                    node: t,
                    offset: 0
                }
            }

            function ro(t, e) {
                return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1
            }

            function oo(t, e) {
                let n = t.parentNode;
                return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t
            }

            function io(t, e, n) {
                let {
                    node: r,
                    offset: o
                } = eo(e, n), i = -1;
                if (1 == r.nodeType && !r.firstChild) {
                    let t = r.getBoundingClientRect();
                    i = t.left != t.right && n.left > (t.left + t.right) / 2 ? 1 : -1
                }
                return t.docView.posFromDOM(r, o, i)
            }

            function so(t, e, n, r) {
                let o = -1;
                for (let i = e, s = !1;;) {
                    if (i == t.dom) break;
                    let e, n = t.docView.nearestDesc(i, !0);
                    if (!n) return null;
                    if (1 == n.dom.nodeType && (n.node.isBlock && n.parent || !n.contentDOM) && ((e = n.dom.getBoundingClientRect()).width || e.height) && (n.node.isBlock && n.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(n.dom.nodeName) && (!s && e.left > r.left || e.top > r.top ? o = n.posBefore : (!s && e.right < r.left || e.bottom < r.top) && (o = n.posAfter), s = !0), !n.contentDOM && o < 0 && !n.node.isText)) {
                        let t = n.node.isBlock ? r.top < (e.top + e.bottom) / 2 : r.left < (e.left + e.right) / 2;
                        return t ? n.posBefore : n.posAfter
                    }
                    i = n.dom.parentNode
                }
                return o > -1 ? o : t.docView.posFromDOM(e, n, -1)
            }

            function ao(t, e, n) {
                let r = t.childNodes.length;
                if (r && n.top < n.bottom)
                    for (let o = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), i = o;;) {
                        let n = t.childNodes[i];
                        if (1 == n.nodeType) {
                            let t = n.getClientRects();
                            for (let r = 0; r < t.length; r++) {
                                let o = t[r];
                                if (ro(e, o)) return ao(n, e, o)
                            }
                        }
                        if ((i = (i + 1) % r) == o) break
                    }
                return t
            }

            function lo(t, e) {
                let n, r = t.dom.ownerDocument,
                    o = 0,
                    i = Cr(r, e.left, e.top);
                i && ({
                    node: n,
                    offset: o
                } = i);
                let s, a = (t.root.elementFromPoint ? t.root : r).elementFromPoint(e.left, e.top);
                if (!a || !t.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
                    let n = t.dom.getBoundingClientRect();
                    if (!ro(e, n)) return null;
                    if (a = ao(t.dom, e, n), !a) return null
                }
                if (jr)
                    for (let c = a; n && c; c = dr(c)) c.draggable && (n = void 0);
                if (a = oo(a, e), n) {
                    if (Lr && 1 == n.nodeType && (o = Math.min(o, n.childNodes.length), o < n.childNodes.length)) {
                        let t, r = n.childNodes[o];
                        "IMG" == r.nodeName && (t = r.getBoundingClientRect()).right <= e.left && t.bottom > e.top && o++
                    }
                    let r;
                    _r && o && 1 == n.nodeType && 1 == (r = n.childNodes[o - 1]).nodeType && "false" == r.contentEditable && r.getBoundingClientRect().top >= e.top && o--, n == t.dom && o == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && e.top > n.lastChild.getBoundingClientRect().bottom ? s = t.state.doc.content.size : 0 != o && 1 == n.nodeType && "BR" == n.childNodes[o - 1].nodeName || (s = so(t, n, o, e))
                }
                null == s && (s = io(t, a, e));
                let l = t.docView.nearestDesc(a, !0);
                return {
                    pos: s,
                    inside: l ? l.posAtStart - l.border : -1
                }
            }

            function co(t) {
                return t.top < t.bottom || t.left < t.right
            }

            function ho(t, e) {
                let n = t.getClientRects();
                if (n.length) {
                    let t = n[e < 0 ? 0 : n.length - 1];
                    if (co(t)) return t
                }
                return Array.prototype.find.call(n, co) || t.getBoundingClientRect()
            }
            const uo = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

            function po(t, e, n) {
                let {
                    node: r,
                    offset: o,
                    atom: i
                } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = _r || Lr;
                if (3 == r.nodeType) {
                    if (!s || !uo.test(r.nodeValue) && (n < 0 ? o : o != r.nodeValue.length)) {
                        let t = o,
                            e = o,
                            i = n < 0 ? 1 : -1;
                        return n < 0 && !o ? (e++, i = -1) : n >= 0 && o == r.nodeValue.length ? (t--, i = 1) : n < 0 ? t-- : e++, fo(ho(ur(r, t, e), i), i < 0)
                    } {
                        let t = ho(ur(r, o, o), n);
                        if (Lr && o && /\s/.test(r.nodeValue[o - 1]) && o < r.nodeValue.length) {
                            let e = ho(ur(r, o - 1, o - 1), -1);
                            if (e.top == t.top) {
                                let n = ho(ur(r, o, o + 1), -1);
                                if (n.top != t.top) return fo(n, n.left < e.left)
                            }
                        }
                        return t
                    }
                }
                let a = t.state.doc.resolve(e - (i || 0));
                if (!a.parent.inlineContent) {
                    if (null == i && o && (n < 0 || o == yr(r))) {
                        let t = r.childNodes[o - 1];
                        if (1 == t.nodeType) return mo(t.getBoundingClientRect(), !1)
                    }
                    if (null == i && o < yr(r)) {
                        let t = r.childNodes[o];
                        if (1 == t.nodeType) return mo(t.getBoundingClientRect(), !0)
                    }
                    return mo(r.getBoundingClientRect(), n >= 0)
                }
                if (null == i && o && (n < 0 || o == yr(r))) {
                    let t = r.childNodes[o - 1],
                        e = 3 == t.nodeType ? ur(t, yr(t) - (s ? 0 : 1)) : 1 != t.nodeType || "BR" == t.nodeName && t.nextSibling ? null : t;
                    if (e) return fo(ho(e, 1), !1)
                }
                if (null == i && o < yr(r)) {
                    let t = r.childNodes[o];
                    while (t.pmViewDesc && t.pmViewDesc.ignoreForCoords) t = t.nextSibling;
                    let e = t ? 3 == t.nodeType ? ur(t, 0, s ? 0 : 1) : 1 == t.nodeType ? t : null : null;
                    if (e) return fo(ho(e, -1), !0)
                }
                return fo(ho(3 == r.nodeType ? ur(r) : r, -n), n >= 0)
            }

            function fo(t, e) {
                if (0 == t.width) return t;
                let n = e ? t.left : t.right;
                return {
                    top: t.top,
                    bottom: t.bottom,
                    left: n,
                    right: n
                }
            }

            function mo(t, e) {
                if (0 == t.height) return t;
                let n = e ? t.top : t.bottom;
                return {
                    top: n,
                    bottom: n,
                    left: t.left,
                    right: t.right
                }
            }

            function go(t, e, n) {
                let r = t.state,
                    o = t.root.activeElement;
                r != e && t.updateState(e), o != t.dom && t.focus();
                try {
                    return n()
                } finally {
                    r != e && t.updateState(r), o != t.dom && o && o.focus()
                }
            }

            function yo(t, e, n) {
                let r = e.selection,
                    o = "up" == n ? r.$from : r.$to;
                return go(t, e, () => {
                    let {
                        node: e
                    } = t.docView.domFromPos(o.pos, "up" == n ? -1 : 1);
                    for (;;) {
                        let n = t.docView.nearestDesc(e, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                            e = n.contentDOM || n.dom;
                            break
                        }
                        e = n.dom.parentNode
                    }
                    let r = po(t, o.pos, 1);
                    for (let t = e.firstChild; t; t = t.nextSibling) {
                        let e;
                        if (1 == t.nodeType) e = t.getClientRects();
                        else {
                            if (3 != t.nodeType) continue;
                            e = ur(t, 0, t.nodeValue.length).getClientRects()
                        }
                        for (let t = 0; t < e.length; t++) {
                            let o = e[t];
                            if (o.bottom > o.top + 1 && ("up" == n ? r.top - o.top > 2 * (o.bottom - r.top) : o.bottom - r.bottom > 2 * (r.bottom - o.top))) return !1
                        }
                    }
                    return !0
                })
            }
            const bo = /[\u0590-\u08ac]/;

            function vo(t, e, n) {
                let {
                    $head: r
                } = e.selection;
                if (!r.parent.isTextblock) return !1;
                let o = r.parentOffset,
                    i = !o,
                    s = o == r.parent.content.size,
                    a = t.domSelection();
                return a ? bo.test(r.parent.textContent) && a.modify ? go(t, e, () => {
                    let {
                        focusNode: e,
                        focusOffset: o,
                        anchorNode: i,
                        anchorOffset: s
                    } = t.domSelectionRange(), l = a.caretBidiLevel;
                    a.modify("move", n, "character");
                    let c = r.depth ? t.docView.domAfterPos(r.before()) : t.dom,
                        {
                            focusNode: d,
                            focusOffset: h
                        } = t.domSelectionRange(),
                        u = d && !c.contains(1 == d.nodeType ? d : d.parentNode) || e == d && o == h;
                    try {
                        a.collapse(i, s), e && (e != i || o != s) && a.extend && a.extend(e, o)
                    } catch (p) {}
                    return null != l && (a.caretBidiLevel = l), u
                }) : "left" == n || "backward" == n ? i : s : r.pos == r.start() || r.pos == r.end()
            }
            let wo = null,
                ko = null,
                xo = !1;

            function So(t, e, n) {
                return wo == e && ko == n ? xo : (wo = e, ko = n, xo = "up" == n || "down" == n ? yo(t, e, n) : vo(t, e, n))
            }
            const Mo = 0,
                Co = 1,
                Oo = 2,
                To = 3;
            class Ao {
                constructor(t, e, n, r) {
                    this.parent = t, this.children = e, this.dom = n, this.contentDOM = r, this.dirty = Mo, n.pmViewDesc = this
                }
                matchesWidget(t) {
                    return !1
                }
                matchesMark(t) {
                    return !1
                }
                matchesNode(t, e, n) {
                    return !1
                }
                matchesHack(t) {
                    return !1
                }
                parseRule() {
                    return null
                }
                stopEvent(t) {
                    return !1
                }
                get size() {
                    let t = 0;
                    for (let e = 0; e < this.children.length; e++) t += this.children[e].size;
                    return t
                }
                get border() {
                    return 0
                }
                destroy() {
                    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                    for (let t = 0; t < this.children.length; t++) this.children[t].destroy()
                }
                posBeforeChild(t) {
                    for (let e = 0, n = this.posAtStart;; e++) {
                        let r = this.children[e];
                        if (r == t) return n;
                        n += r.size
                    }
                }
                get posBefore() {
                    return this.parent.posBeforeChild(this)
                }
                get posAtStart() {
                    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
                }
                get posAfter() {
                    return this.posBefore + this.size
                }
                get posAtEnd() {
                    return this.posAtStart + this.size - 2 * this.border
                }
                localPosFromDOM(t, e, n) {
                    if (this.contentDOM && this.contentDOM.contains(1 == t.nodeType ? t : t.parentNode)) {
                        if (n < 0) {
                            let n, r;
                            if (t == this.contentDOM) n = t.childNodes[e - 1];
                            else {
                                while (t.parentNode != this.contentDOM) t = t.parentNode;
                                n = t.previousSibling
                            }
                            while (n && (!(r = n.pmViewDesc) || r.parent != this)) n = n.previousSibling;
                            return n ? this.posBeforeChild(r) + r.size : this.posAtStart
                        } {
                            let n, r;
                            if (t == this.contentDOM) n = t.childNodes[e];
                            else {
                                while (t.parentNode != this.contentDOM) t = t.parentNode;
                                n = t.nextSibling
                            }
                            while (n && (!(r = n.pmViewDesc) || r.parent != this)) n = n.nextSibling;
                            return n ? this.posBeforeChild(r) : this.posAtEnd
                        }
                    }
                    let r;
                    if (t == this.dom && this.contentDOM) r = e > cr(this.contentDOM);
                    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = 2 & t.compareDocumentPosition(this.contentDOM);
                    else if (this.dom.firstChild) {
                        if (0 == e)
                            for (let e = t;; e = e.parentNode) {
                                if (e == this.dom) {
                                    r = !1;
                                    break
                                }
                                if (e.previousSibling) break
                            }
                        if (null == r && e == t.childNodes.length)
                            for (let e = t;; e = e.parentNode) {
                                if (e == this.dom) {
                                    r = !0;
                                    break
                                }
                                if (e.nextSibling) break
                            }
                    }
                    return (null == r ? n > 0 : r) ? this.posAtEnd : this.posAtStart
                }
                nearestDesc(t, e = !1) {
                    for (let n = !0, r = t; r; r = r.parentNode) {
                        let o, i = this.getDesc(r);
                        if (i && (!e || i.node)) {
                            if (!n || !(o = i.nodeDOM) || (1 == o.nodeType ? o.contains(1 == t.nodeType ? t : t.parentNode) : o == t)) return i;
                            n = !1
                        }
                    }
                }
                getDesc(t) {
                    let e = t.pmViewDesc;
                    for (let n = e; n; n = n.parent)
                        if (n == this) return e
                }
                posFromDOM(t, e, n) {
                    for (let r = t; r; r = r.parentNode) {
                        let o = this.getDesc(r);
                        if (o) return o.localPosFromDOM(t, e, n)
                    }
                    return -1
                }
                descAt(t) {
                    for (let e = 0, n = 0; e < this.children.length; e++) {
                        let r = this.children[e],
                            o = n + r.size;
                        if (n == t && o != n) {
                            while (!r.border && r.children.length)
                                for (let t = 0; t < r.children.length; t++) {
                                    let e = r.children[t];
                                    if (e.size) {
                                        r = e;
                                        break
                                    }
                                }
                            return r
                        }
                        if (t < o) return r.descAt(t - n - r.border);
                        n = o
                    }
                }
                domFromPos(t, e) {
                    if (!this.contentDOM) return {
                        node: this.dom,
                        offset: 0,
                        atom: t + 1
                    };
                    let n, r = 0,
                        o = 0;
                    for (let i = 0; r < this.children.length; r++) {
                        let e = this.children[r],
                            n = i + e.size;
                        if (n > t || e instanceof Io) {
                            o = t - i;
                            break
                        }
                        i = n
                    }
                    if (o) return this.children[r].domFromPos(o - this.children[r].border, e);
                    for (; r && !(n = this.children[r - 1]).size && n instanceof No && n.side >= 0; r--);
                    if (e <= 0) {
                        let t, n = !0;
                        for (;; r--, n = !1)
                            if (t = r ? this.children[r - 1] : null, !t || t.dom.parentNode == this.contentDOM) break;
                        return t && e && n && !t.border && !t.domAtom ? t.domFromPos(t.size, e) : {
                            node: this.contentDOM,
                            offset: t ? cr(t.dom) + 1 : 0
                        }
                    } {
                        let t, n = !0;
                        for (;; r++, n = !1)
                            if (t = r < this.children.length ? this.children[r] : null, !t || t.dom.parentNode == this.contentDOM) break;
                        return t && n && !t.border && !t.domAtom ? t.domFromPos(0, e) : {
                            node: this.contentDOM,
                            offset: t ? cr(t.dom) : this.contentDOM.childNodes.length
                        }
                    }
                }
                parseRange(t, e, n = 0) {
                    if (0 == this.children.length) return {
                        node: this.contentDOM,
                        from: t,
                        to: e,
                        fromOffset: 0,
                        toOffset: this.contentDOM.childNodes.length
                    };
                    let r = -1,
                        o = -1;
                    for (let i = n, s = 0;; s++) {
                        let n = this.children[s],
                            a = i + n.size;
                        if (-1 == r && t <= a) {
                            let o = i + n.border;
                            if (t >= o && e <= a - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(t, e, o);
                            t = i;
                            for (let e = s; e > 0; e--) {
                                let n = this.children[e - 1];
                                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
                                    r = cr(n.dom) + 1;
                                    break
                                }
                                t -= n.size
                            } - 1 == r && (r = 0)
                        }
                        if (r > -1 && (a > e || s == this.children.length - 1)) {
                            e = a;
                            for (let t = s + 1; t < this.children.length; t++) {
                                let n = this.children[t];
                                if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
                                    o = cr(n.dom);
                                    break
                                }
                                e += n.size
                            } - 1 == o && (o = this.contentDOM.childNodes.length);
                            break
                        }
                        i = a
                    }
                    return {
                        node: this.contentDOM,
                        from: t,
                        to: e,
                        fromOffset: r,
                        toOffset: o
                    }
                }
                emptyChildAt(t) {
                    if (this.border || !this.contentDOM || !this.children.length) return !1;
                    let e = this.children[t < 0 ? 0 : this.children.length - 1];
                    return 0 == e.size || e.emptyChildAt(t)
                }
                domAfterPos(t) {
                    let {
                        node: e,
                        offset: n
                    } = this.domFromPos(t, 0);
                    if (1 != e.nodeType || n == e.childNodes.length) throw new RangeError("No node after pos " + t);
                    return e.childNodes[n]
                }
                setSelection(t, e, n, r = !1) {
                    let o = Math.min(t, e),
                        i = Math.max(t, e);
                    for (let p = 0, f = 0; p < this.children.length; p++) {
                        let s = this.children[p],
                            a = f + s.size;
                        if (o > f && i < a) return s.setSelection(t - f - s.border, e - f - s.border, n, r);
                        f = a
                    }
                    let s = this.domFromPos(t, t ? -1 : 1),
                        a = e == t ? s : this.domFromPos(e, e ? -1 : 1),
                        l = n.root.getSelection(),
                        c = n.domSelectionRange(),
                        d = !1;
                    if ((Lr || jr) && t == e) {
                        let {
                            node: t,
                            offset: e
                        } = s;
                        if (3 == t.nodeType) {
                            if (d = !(!e || "\n" != t.nodeValue[e - 1]), d && e == t.nodeValue.length)
                                for (let n, r = t; r; r = r.parentNode) {
                                    if (n = r.nextSibling) {
                                        "BR" == n.nodeName && (s = a = {
                                            node: n.parentNode,
                                            offset: cr(n) + 1
                                        });
                                        break
                                    }
                                    let t = r.pmViewDesc;
                                    if (t && t.node && t.node.isBlock) break
                                }
                        } else {
                            let n = t.childNodes[e - 1];
                            d = n && ("BR" == n.nodeName || "false" == n.contentEditable)
                        }
                    }
                    if (Lr && c.focusNode && c.focusNode != a.node && 1 == c.focusNode.nodeType) {
                        let t = c.focusNode.childNodes[c.focusOffset];
                        t && "false" == t.contentEditable && (r = !0)
                    }
                    if (!(r || d && jr) && fr(s.node, s.offset, c.anchorNode, c.anchorOffset) && fr(a.node, a.offset, c.focusNode, c.focusOffset)) return;
                    let h = !1;
                    if ((l.extend || t == e) && (!d || !Lr)) {
                        l.collapse(s.node, s.offset);
                        try {
                            t != e && l.extend(a.node, a.offset), h = !0
                        } catch (u) {}
                    }
                    if (!h) {
                        if (t > e) {
                            let t = s;
                            s = a, a = t
                        }
                        let n = document.createRange();
                        n.setEnd(a.node, a.offset), n.setStart(s.node, s.offset), l.removeAllRanges(), l.addRange(n)
                    }
                }
                ignoreMutation(t) {
                    return !this.contentDOM && "selection" != t.type
                }
                get contentLost() {
                    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
                }
                markDirty(t, e) {
                    for (let n = 0, r = 0; r < this.children.length; r++) {
                        let o = this.children[r],
                            i = n + o.size;
                        if (n == i ? t <= i && e >= n : t < i && e > n) {
                            let r = n + o.border,
                                s = i - o.border;
                            if (t >= r && e <= s) return this.dirty = t == n || e == i ? Oo : Co, void(t != r || e != s || !o.contentLost && o.dom.parentNode == this.contentDOM ? o.markDirty(t - r, e - r) : o.dirty = To);
                            o.dirty = o.dom != o.contentDOM || o.dom.parentNode != this.contentDOM || o.children.length ? To : Oo
                        }
                        n = i
                    }
                    this.dirty = Oo
                }
                markParentsDirty() {
                    let t = 1;
                    for (let e = this.parent; e; e = e.parent, t++) {
                        let n = 1 == t ? Oo : Co;
                        e.dirty < n && (e.dirty = n)
                    }
                }
                get domAtom() {
                    return !1
                }
                get ignoreForCoords() {
                    return !1
                }
                get ignoreForSelection() {
                    return !1
                }
                isText(t) {
                    return !1
                }
            }
            class No extends Ao {
                constructor(t, e, n, r) {
                    let o, i = e.type.toDOM;
                    if ("function" == typeof i && (i = i(n, () => o ? o.parent ? o.parent.posBeforeChild(o) : void 0 : r)), !e.type.spec.raw) {
                        if (1 != i.nodeType) {
                            let t = document.createElement("span");
                            t.appendChild(i), i = t
                        }
                        i.contentEditable = "false", i.classList.add("ProseMirror-widget")
                    }
                    super(t, [], i, null), this.widget = e, this.widget = e, o = this
                }
                matchesWidget(t) {
                    return this.dirty == Mo && t.type.eq(this.widget.type)
                }
                parseRule() {
                    return {
                        ignore: !0
                    }
                }
                stopEvent(t) {
                    let e = this.widget.spec.stopEvent;
                    return !!e && e(t)
                }
                ignoreMutation(t) {
                    return "selection" != t.type || this.widget.spec.ignoreSelection
                }
                destroy() {
                    this.widget.type.destroy(this.dom), super.destroy()
                }
                get domAtom() {
                    return !0
                }
                get ignoreForSelection() {
                    return !!this.widget.type.spec.relaxedSide
                }
                get side() {
                    return this.widget.type.side
                }
            }
            class Eo extends Ao {
                constructor(t, e, n, r) {
                    super(t, [], e, null), this.textDOM = n, this.text = r
                }
                get size() {
                    return this.text.length
                }
                localPosFromDOM(t, e) {
                    return t != this.textDOM ? this.posAtStart + (e ? this.size : 0) : this.posAtStart + e
                }
                domFromPos(t) {
                    return {
                        node: this.textDOM,
                        offset: t
                    }
                }
                ignoreMutation(t) {
                    return "characterData" === t.type && t.target.nodeValue == t.oldValue
                }
            }
            class Do extends Ao {
                constructor(t, e, n, r, o) {
                    super(t, [], n, r), this.mark = e, this.spec = o
                }
                static create(t, e, n, r) {
                    let o = r.nodeViews[e.type.name],
                        i = o && o(e, r, n);
                    return i && i.dom || (i = Ct.renderSpec(document, e.type.spec.toDOM(e, n), null, e.attrs)), new Do(t, e, i.dom, i.contentDOM || i.dom, i)
                }
                parseRule() {
                    return this.dirty & To || this.mark.type.spec.reparseInView ? null : {
                        mark: this.mark.type.name,
                        attrs: this.mark.attrs,
                        contentElement: this.contentDOM
                    }
                }
                matchesMark(t) {
                    return this.dirty != To && this.mark.eq(t)
                }
                markDirty(t, e) {
                    if (super.markDirty(t, e), this.dirty != Mo) {
                        let t = this.parent;
                        while (!t.node) t = t.parent;
                        t.dirty < this.dirty && (t.dirty = this.dirty), this.dirty = Mo
                    }
                }
                slice(t, e, n) {
                    let r = Do.create(this.parent, this.mark, !0, n),
                        o = this.children,
                        i = this.size;
                    e < i && (o = Qo(o, e, i, n)), t > 0 && (o = Qo(o, 0, t, n));
                    for (let s = 0; s < o.length; s++) o[s].parent = r;
                    return r.children = o, r
                }
                ignoreMutation(t) {
                    return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : super.ignoreMutation(t)
                }
                destroy() {
                    this.spec.destroy && this.spec.destroy(), super.destroy()
                }
            }
            class Po extends Ao {
                constructor(t, e, n, r, o, i, s, a, l) {
                    super(t, [], o, i), this.node = e, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = s
                }
                static create(t, e, n, r, o, i) {
                    let s, a = o.nodeViews[e.type.name],
                        l = a && a(e, o, () => s ? s.parent ? s.parent.posBeforeChild(s) : void 0 : i, n, r),
                        c = l && l.dom,
                        d = l && l.contentDOM;
                    if (e.isText)
                        if (c) {
                            if (3 != c.nodeType) throw new RangeError("Text must be rendered as a DOM text node")
                        } else c = document.createTextNode(e.text);
                    else if (!c) {
                        let t = Ct.renderSpec(document, e.type.spec.toDOM(e), null, e.attrs);
                        ({
                            dom: c,
                            contentDOM: d
                        } = t)
                    }
                    d || e.isText || "BR" == c.nodeName || (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), e.type.spec.draggable && (c.draggable = !0));
                    let h = c;
                    return c = _o(c, n, e), l ? s = new $o(t, e, n, r, c, d || null, h, l, o, i + 1) : e.isText ? new Lo(t, e, n, r, c, h, o) : new Po(t, e, n, r, c, d || null, h, o, i + 1)
                }
                parseRule() {
                    if (this.node.type.spec.reparseInView) return null;
                    let t = {
                        node: this.node.type.name,
                        attrs: this.node.attrs
                    };
                    if ("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"), this.contentDOM)
                        if (this.contentLost) {
                            for (let e = this.children.length - 1; e >= 0; e--) {
                                let n = this.children[e];
                                if (this.dom.contains(n.dom.parentNode)) {
                                    t.contentElement = n.dom.parentNode;
                                    break
                                }
                            }
                            t.contentElement || (t.getContent = () => h.empty)
                        } else t.contentElement = this.contentDOM;
                    else t.getContent = () => this.node.content;
                    return t
                }
                matchesNode(t, e, n) {
                    return this.dirty == Mo && t.eq(this.node) && Wo(e, this.outerDeco) && n.eq(this.innerDeco)
                }
                get size() {
                    return this.node.nodeSize
                }
                get border() {
                    return this.node.isLeaf ? 0 : 1
                }
                updateChildren(t, e) {
                    let n = this.node.inlineContent,
                        r = e,
                        o = t.composing ? this.localCompositionInfo(t, e) : null,
                        i = o && o.pos > -1 ? o : null,
                        s = o && o.pos < 0,
                        a = new Ko(this, i && i.node, t);
                    Go(this.node, this.innerDeco, (e, o, i) => {
                        e.spec.marks ? a.syncToMarks(e.spec.marks, n, t) : e.type.side >= 0 && !i && a.syncToMarks(o == this.node.childCount ? m.none : this.node.child(o).marks, n, t), a.placeWidget(e, t, r)
                    }, (e, i, l, c) => {
                        let d;
                        a.syncToMarks(e.marks, n, t), a.findNodeMatch(e, i, l, c) || s && t.state.selection.from > r && t.state.selection.to < r + e.nodeSize && (d = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(e, i, l, d, t) || a.updateNextNode(e, i, l, t, c, r) || a.addNode(e, i, l, t, r), r += e.nodeSize
                    }), a.syncToMarks([], n, t), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == Oo) && (i && this.protectLocalComposition(t, i), zo(this.contentDOM, this.children, t), Br && Yo(this.dom))
                }
                localCompositionInfo(t, e) {
                    let {
                        from: n,
                        to: r
                    } = t.state.selection;
                    if (!(t.state.selection instanceof Ye) || n < e || r > e + this.node.content.size) return null;
                    let o = t.input.compositionNode;
                    if (!o || !this.dom.contains(o.parentNode)) return null;
                    if (this.node.inlineContent) {
                        let t = o.nodeValue,
                            i = Xo(this.node.content, t, n - e, r - e);
                        return i < 0 ? null : {
                            node: o,
                            pos: i,
                            text: t
                        }
                    }
                    return {
                        node: o,
                        pos: -1,
                        text: ""
                    }
                }
                protectLocalComposition(t, {
                    node: e,
                    pos: n,
                    text: r
                }) {
                    if (this.getDesc(e)) return;
                    let o = e;
                    for (;; o = o.parentNode) {
                        if (o.parentNode == this.contentDOM) break;
                        while (o.previousSibling) o.parentNode.removeChild(o.previousSibling);
                        while (o.nextSibling) o.parentNode.removeChild(o.nextSibling);
                        o.pmViewDesc && (o.pmViewDesc = void 0)
                    }
                    let i = new Eo(this, o, e, r);
                    t.input.compositionNodes.push(i), this.children = Qo(this.children, n, n + r.length, t, i)
                }
                update(t, e, n, r) {
                    return !(this.dirty == To || !t.sameMarkup(this.node)) && (this.updateInner(t, e, n, r), !0)
                }
                updateInner(t, e, n, r) {
                    this.updateOuterDeco(e), this.node = t, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = Mo
                }
                updateOuterDeco(t) {
                    if (Wo(t, this.outerDeco)) return;
                    let e = 1 != this.nodeDOM.nodeType,
                        n = this.dom;
                    this.dom = Vo(this.dom, this.nodeDOM, Ho(this.outerDeco, this.node, e), Ho(t, this.node, e)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = t
                }
                selectNode() {
                    1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.nodeDOM.draggable = !0))
                }
                deselectNode() {
                    1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.nodeDOM.removeAttribute("draggable"))
                }
                get domAtom() {
                    return this.node.isAtom
                }
            }

            function Ro(t, e, n, r, o) {
                _o(r, e, t);
                let i = new Po(void 0, t, e, n, r, r, r, o, 0);
                return i.contentDOM && i.updateChildren(o, 0), i
            }
            class Lo extends Po {
                constructor(t, e, n, r, o, i, s) {
                    super(t, e, n, r, o, null, i, s, 0)
                }
                parseRule() {
                    let t = this.nodeDOM.parentNode;
                    while (t && t != this.dom && !t.pmIsDeco) t = t.parentNode;
                    return {
                        skip: t || !0
                    }
                }
                update(t, e, n, r) {
                    return !(this.dirty == To || this.dirty != Mo && !this.inParent() || !t.sameMarkup(this.node)) && (this.updateOuterDeco(e), this.dirty == Mo && t.text == this.node.text || t.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = t.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = t, this.dirty = Mo, !0)
                }
                inParent() {
                    let t = this.parent.contentDOM;
                    for (let e = this.nodeDOM; e; e = e.parentNode)
                        if (e == t) return !0;
                    return !1
                }
                domFromPos(t) {
                    return {
                        node: this.nodeDOM,
                        offset: t
                    }
                }
                localPosFromDOM(t, e, n) {
                    return t == this.nodeDOM ? this.posAtStart + Math.min(e, this.node.text.length) : super.localPosFromDOM(t, e, n)
                }
                ignoreMutation(t) {
                    return "characterData" != t.type && "selection" != t.type
                }
                slice(t, e, n) {
                    let r = this.node.cut(t, e),
                        o = document.createTextNode(r.text);
                    return new Lo(this.parent, r, this.outerDeco, this.innerDeco, o, o, n)
                }
                markDirty(t, e) {
                    super.markDirty(t, e), this.dom == this.nodeDOM || 0 != t && e != this.nodeDOM.nodeValue.length || (this.dirty = To)
                }
                get domAtom() {
                    return !1
                }
                isText(t) {
                    return this.node.text == t
                }
            }
            class Io extends Ao {
                parseRule() {
                    return {
                        ignore: !0
                    }
                }
                matchesHack(t) {
                    return this.dirty == Mo && this.dom.nodeName == t
                }
                get domAtom() {
                    return !0
                }
                get ignoreForCoords() {
                    return "IMG" == this.dom.nodeName
                }
            }
            class $o extends Po {
                constructor(t, e, n, r, o, i, s, a, l, c) {
                    super(t, e, n, r, o, i, s, l, c), this.spec = a
                }
                update(t, e, n, r) {
                    if (this.dirty == To) return !1;
                    if (this.spec.update && (this.node.type == t.type || this.spec.multiType)) {
                        let o = this.spec.update(t, e, n);
                        return o && this.updateInner(t, e, n, r), o
                    }
                    return !(!this.contentDOM && !t.isLeaf) && super.update(t, e, n, r)
                }
                selectNode() {
                    this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
                }
                deselectNode() {
                    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
                }
                setSelection(t, e, n, r) {
                    this.spec.setSelection ? this.spec.setSelection(t, e, n.root) : super.setSelection(t, e, n, r)
                }
                destroy() {
                    this.spec.destroy && this.spec.destroy(), super.destroy()
                }
                stopEvent(t) {
                    return !!this.spec.stopEvent && this.spec.stopEvent(t)
                }
                ignoreMutation(t) {
                    return this.spec.ignoreMutation ? this.spec.ignoreMutation(t) : super.ignoreMutation(t)
                }
            }

            function zo(t, e, n) {
                let r = t.firstChild,
                    o = !1;
                for (let i = 0; i < e.length; i++) {
                    let s = e[i],
                        a = s.dom;
                    if (a.parentNode == t) {
                        while (a != r) r = qo(r), o = !0;
                        r = r.nextSibling
                    } else o = !0, t.insertBefore(a, r);
                    if (s instanceof Do) {
                        let e = r ? r.previousSibling : t.lastChild;
                        zo(s.contentDOM, s.children, n), r = e ? e.nextSibling : t.firstChild
                    }
                }
                while (r) r = qo(r), o = !0;
                o && n.trackWrites == t && (n.trackWrites = null)
            }
            const jo = function(t) {
                t && (this.nodeName = t)
            };
            jo.prototype = Object.create(null);
            const Bo = [new jo];

            function Ho(t, e, n) {
                if (0 == t.length) return Bo;
                let r = n ? Bo[0] : new jo,
                    o = [r];
                for (let i = 0; i < t.length; i++) {
                    let s = t[i].type.attrs;
                    if (s) {
                        s.nodeName && o.push(r = new jo(s.nodeName));
                        for (let t in s) {
                            let i = s[t];
                            null != i && (n && 1 == o.length && o.push(r = new jo(e.isInline ? "span" : "div")), "class" == t ? r.class = (r.class ? r.class + " " : "") + i : "style" == t ? r.style = (r.style ? r.style + ";" : "") + i : "nodeName" != t && (r[t] = i))
                        }
                    }
                }
                return o
            }

            function Vo(t, e, n, r) {
                if (n == Bo && r == Bo) return e;
                let o = e;
                for (let i = 0; i < r.length; i++) {
                    let e = r[i],
                        s = n[i];
                    if (i) {
                        let n;
                        s && s.nodeName == e.nodeName && o != t && (n = o.parentNode) && n.nodeName.toLowerCase() == e.nodeName || (n = document.createElement(e.nodeName), n.pmIsDeco = !0, n.appendChild(o), s = Bo[0]), o = n
                    }
                    Fo(o, s || Bo[0], e)
                }
                return o
            }

            function Fo(t, e, n) {
                for (let r in e) "class" == r || "style" == r || "nodeName" == r || r in n || t.removeAttribute(r);
                for (let r in n) "class" != r && "style" != r && "nodeName" != r && n[r] != e[r] && t.setAttribute(r, n[r]);
                if (e.class != n.class) {
                    let r = e.class ? e.class.split(" ").filter(Boolean) : [],
                        o = n.class ? n.class.split(" ").filter(Boolean) : [];
                    for (let e = 0; e < r.length; e++) - 1 == o.indexOf(r[e]) && t.classList.remove(r[e]);
                    for (let e = 0; e < o.length; e++) - 1 == r.indexOf(o[e]) && t.classList.add(o[e]);
                    0 == t.classList.length && t.removeAttribute("class")
                }
                if (e.style != n.style) {
                    if (e.style) {
                        let n, r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
                        while (n = r.exec(e.style)) t.style.removeProperty(n[1])
                    }
                    n.style && (t.style.cssText += n.style)
                }
            }

            function _o(t, e, n) {
                return Vo(t, t, Bo, Ho(e, n, 1 != t.nodeType))
            }

            function Wo(t, e) {
                if (t.length != e.length) return !1;
                for (let n = 0; n < t.length; n++)
                    if (!t[n].type.eq(e[n].type)) return !1;
                return !0
            }

            function qo(t) {
                let e = t.nextSibling;
                return t.parentNode.removeChild(t), e
            }
            class Ko {
                constructor(t, e, n) {
                    this.lock = e, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = t, this.preMatch = Uo(t.node.content, t)
                }
                destroyBetween(t, e) {
                    if (t != e) {
                        for (let n = t; n < e; n++) this.top.children[n].destroy();
                        this.top.children.splice(t, e - t), this.changed = !0
                    }
                }
                destroyRest() {
                    this.destroyBetween(this.index, this.top.children.length)
                }
                syncToMarks(t, e, n) {
                    let r = 0,
                        o = this.stack.length >> 1,
                        i = Math.min(o, t.length);
                    while (r < i && (r == o - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(t[r]) && !1 !== t[r].type.spec.spanning) r++;
                    while (r < o) this.destroyRest(), this.top.dirty = Mo, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
                    while (o < t.length) {
                        this.stack.push(this.top, this.index + 1);
                        let r = -1;
                        for (let e = this.index; e < Math.min(this.index + 3, this.top.children.length); e++) {
                            let n = this.top.children[e];
                            if (n.matchesMark(t[o]) && !this.isLocked(n.dom)) {
                                r = e;
                                break
                            }
                        }
                        if (r > -1) r > this.index && (this.changed = !0, this.destroyBetween(this.index, r)), this.top = this.top.children[this.index];
                        else {
                            let r = Do.create(this.top, t[o], e, n);
                            this.top.children.splice(this.index, 0, r), this.top = r, this.changed = !0
                        }
                        this.index = 0, o++
                    }
                }
                findNodeMatch(t, e, n, r) {
                    let o, i = -1;
                    if (r >= this.preMatch.index && (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && o.matchesNode(t, e, n)) i = this.top.children.indexOf(o, this.index);
                    else
                        for (let s = this.index, a = Math.min(this.top.children.length, s + 5); s < a; s++) {
                            let r = this.top.children[s];
                            if (r.matchesNode(t, e, n) && !this.preMatch.matched.has(r)) {
                                i = s;
                                break
                            }
                        }
                    return !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0)
                }
                updateNodeAt(t, e, n, r, o) {
                    let i = this.top.children[r];
                    return i.dirty == To && i.dom == i.contentDOM && (i.dirty = Oo), !!i.update(t, e, n, o) && (this.destroyBetween(this.index, r), this.index++, !0)
                }
                findIndexWithChild(t) {
                    for (;;) {
                        let e = t.parentNode;
                        if (!e) return -1;
                        if (e == this.top.contentDOM) {
                            let e = t.pmViewDesc;
                            if (e)
                                for (let t = this.index; t < this.top.children.length; t++)
                                    if (this.top.children[t] == e) return t;
                            return -1
                        }
                        t = e
                    }
                }
                updateNextNode(t, e, n, r, o, i) {
                    for (let s = this.index; s < this.top.children.length; s++) {
                        let a = this.top.children[s];
                        if (a instanceof Po) {
                            let l = this.preMatch.matched.get(a);
                            if (null != l && l != o) return !1;
                            let c, d = a.dom,
                                h = this.isLocked(d) && !(t.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == t.text && a.dirty != To && Wo(e, a.outerDeco));
                            if (!h && a.update(t, e, n, r)) return this.destroyBetween(this.index, s), a.dom != d && (this.changed = !0), this.index++, !0;
                            if (!h && (c = this.recreateWrapper(a, t, e, n, r, i))) return this.destroyBetween(this.index, s), this.top.children[this.index] = c, c.contentDOM && (c.dirty = Oo, c.updateChildren(r, i + 1), c.dirty = Mo), this.changed = !0, this.index++, !0;
                            break
                        }
                    }
                    return !1
                }
                recreateWrapper(t, e, n, r, o, i) {
                    if (t.dirty || e.isAtom || !t.children.length || !t.node.content.eq(e.content) || !Wo(n, t.outerDeco) || !r.eq(t.innerDeco)) return null;
                    let s = Po.create(this.top, e, n, r, o, i);
                    if (s.contentDOM) {
                        s.children = t.children, t.children = [];
                        for (let t of s.children) t.parent = s
                    }
                    return t.destroy(), s
                }
                addNode(t, e, n, r, o) {
                    let i = Po.create(this.top, t, e, n, r, o);
                    i.contentDOM && i.updateChildren(r, o + 1), this.top.children.splice(this.index++, 0, i), this.changed = !0
                }
                placeWidget(t, e, n) {
                    let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
                    if (!r || !r.matchesWidget(t) || t != r.widget && r.widget.type.toDOM.parentNode) {
                        let r = new No(this.top, t, e, n);
                        this.top.children.splice(this.index++, 0, r), this.changed = !0
                    } else this.index++
                }
                addTextblockHacks() {
                    let t = this.top.children[this.index - 1],
                        e = this.top;
                    while (t instanceof Do) e = t, t = e.children[e.children.length - 1];
                    (!t || !(t instanceof Lo) || /\n$/.test(t.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(t.node.text)) && ((jr || $r) && t && "false" == t.dom.contentEditable && this.addHackNode("IMG", e), this.addHackNode("BR", this.top))
                }
                addHackNode(t, e) {
                    if (e == this.top && this.index < e.children.length && e.children[this.index].matchesHack(t)) this.index++;
                    else {
                        let n = document.createElement(t);
                        "IMG" == t && (n.className = "ProseMirror-separator", n.alt = ""), "BR" == t && (n.className = "ProseMirror-trailingBreak");
                        let r = new Io(this.top, [], n, null);
                        e != this.top ? e.children.push(r) : e.children.splice(this.index++, 0, r), this.changed = !0
                    }
                }
                isLocked(t) {
                    return this.lock && (t == this.lock || 1 == t.nodeType && t.contains(this.lock.parentNode))
                }
            }

            function Uo(t, e) {
                let n = e,
                    r = n.children.length,
                    o = t.childCount,
                    i = new Map,
                    s = [];
                t: while (o > 0) {
                    let a;
                    for (;;)
                        if (r) {
                            let t = n.children[r - 1];
                            if (!(t instanceof Do)) {
                                a = t, r--;
                                break
                            }
                            n = t, r = t.children.length
                        } else {
                            if (n == e) break t;
                            r = n.parent.children.indexOf(n), n = n.parent
                        }
                    let l = a.node;
                    if (l) {
                        if (l != t.child(o - 1)) break;
                        --o, i.set(a, o), s.push(a)
                    }
                }
                return {
                    index: o,
                    matched: i,
                    matches: s.reverse()
                }
            }

            function Jo(t, e) {
                return t.type.side - e.type.side
            }

            function Go(t, e, n, r) {
                let o = e.locals(t),
                    i = 0;
                if (0 == o.length) {
                    for (let n = 0; n < t.childCount; n++) {
                        let s = t.child(n);
                        r(s, o, e.forChild(i, s), n), i += s.nodeSize
                    }
                    return
                }
                let s = 0,
                    a = [],
                    l = null;
                for (let c = 0;;) {
                    let d, h, u, p;
                    while (s < o.length && o[s].to == i) {
                        let t = o[s++];
                        t.widget && (d ? (h || (h = [d])).push(t) : d = t)
                    }
                    if (d)
                        if (h) {
                            h.sort(Jo);
                            for (let t = 0; t < h.length; t++) n(h[t], c, !!l)
                        } else n(d, c, !!l);
                    if (l) p = -1, u = l, l = null;
                    else {
                        if (!(c < t.childCount)) break;
                        p = c, u = t.child(c++)
                    }
                    for (let t = 0; t < a.length; t++) a[t].to <= i && a.splice(t--, 1);
                    while (s < o.length && o[s].from <= i && o[s].to > i) a.push(o[s++]);
                    let f = i + u.nodeSize;
                    if (u.isText) {
                        let t = f;
                        s < o.length && o[s].from < t && (t = o[s].from);
                        for (let e = 0; e < a.length; e++) a[e].to < t && (t = a[e].to);
                        t < f && (l = u.cut(t - i), u = u.cut(0, t - i), f = t, p = -1)
                    } else
                        while (s < o.length && o[s].to < f) s++;
                    let m = u.isInline && !u.isLeaf ? a.filter(t => !t.inline) : a.slice();
                    r(u, m, e.forChild(i, u), p), i = f
                }
            }

            function Yo(t) {
                if ("UL" == t.nodeName || "OL" == t.nodeName) {
                    let e = t.style.cssText;
                    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e
                }
            }

            function Xo(t, e, n, r) {
                for (let o = 0, i = 0; o < t.childCount && i <= r;) {
                    let s = t.child(o++),
                        a = i;
                    if (i += s.nodeSize, !s.isText) continue;
                    let l = s.text;
                    while (o < t.childCount) {
                        let e = t.child(o++);
                        if (i += e.nodeSize, !e.isText) break;
                        l += e.text
                    }
                    if (i >= n) {
                        if (i >= r && l.slice(r - e.length - a, r - a) == e) return r - e.length;
                        let t = a < r ? l.lastIndexOf(e, r - a - 1) : -1;
                        if (t >= 0 && t + e.length + a >= n) return a + t;
                        if (n == r && l.length >= r + e.length - a && l.slice(r - a, r - a + e.length) == e) return r
                    }
                }
                return -1
            }

            function Qo(t, e, n, r, o) {
                let i = [];
                for (let s = 0, a = 0; s < t.length; s++) {
                    let l = t[s],
                        c = a,
                        d = a += l.size;
                    c >= n || d <= e ? i.push(l) : (c < e && i.push(l.slice(0, e - c, r)), o && (i.push(o), o = void 0), d > n && i.push(l.slice(n - c, l.size, r)))
                }
                return i
            }

            function Zo(t, e = null) {
                let n = t.domSelectionRange(),
                    r = t.state.doc;
                if (!n.focusNode) return null;
                let o = t.docView.nearestDesc(n.focusNode),
                    i = o && 0 == o.size,
                    s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
                if (s < 0) return null;
                let a, l, c = r.resolve(s);
                if (xr(n)) {
                    a = s;
                    while (o && !o.node) o = o.parent;
                    let t = o.node;
                    if (o && t.isAtom && Qe.isSelectable(t) && o.parent && (!t.isInline || !wr(n.focusNode, n.focusOffset, o.dom))) {
                        let t = o.posBefore;
                        l = new Qe(s == t ? c : r.resolve(t))
                    }
                } else {
                    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
                        let e = s,
                            o = s;
                        for (let r = 0; r < n.rangeCount; r++) {
                            let i = n.getRangeAt(r);
                            e = Math.min(e, t.docView.posFromDOM(i.startContainer, i.startOffset, 1)), o = Math.max(o, t.docView.posFromDOM(i.endContainer, i.endOffset, -1))
                        }
                        if (e < 0) return null;
                        [a, s] = o == t.state.selection.anchor ? [o, e] : [e, o], c = r.resolve(s)
                    } else a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                    if (a < 0) return null
                }
                let d = r.resolve(a);
                if (!l) {
                    let n = "pointer" == e || t.state.selection.head < c.pos && !i ? 1 : -1;
                    l = di(t, d, c, n)
                }
                return l
            }

            function ti(t) {
                return t.editable ? t.hasFocus() : ui(t) && document.activeElement && document.activeElement.contains(t.dom)
            }

            function ei(t, e = !1) {
                let n = t.state.selection;
                if (li(t, n), ti(t)) {
                    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && $r) {
                        let e = t.domSelectionRange(),
                            n = t.domObserver.currentSelection;
                        if (e.anchorNode && n.anchorNode && fr(e.anchorNode, e.anchorOffset, n.anchorNode, n.anchorOffset)) return t.input.mouseDown.delayedSelectionSync = !0, void t.domObserver.setCurSelection()
                    }
                    if (t.domObserver.disconnectSelection(), t.cursorWrapper) ai(t);
                    else {
                        let r, o, {
                            anchor: i,
                            head: s
                        } = n;
                        !ni || n instanceof Ye || (n.$from.parent.inlineContent || (r = ri(t, n.from)), n.empty || n.$from.parent.inlineContent || (o = ri(t, n.to))), t.docView.setSelection(i, s, t, e), ni && (r && ii(r), o && ii(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && si(t))
                    }
                    t.domObserver.setCurSelection(), t.domObserver.connectSelection()
                }
            }
            const ni = jr || $r && zr < 63;

            function ri(t, e) {
                let {
                    node: n,
                    offset: r
                } = t.docView.domFromPos(e, 0), o = r < n.childNodes.length ? n.childNodes[r] : null, i = r ? n.childNodes[r - 1] : null;
                if (jr && o && "false" == o.contentEditable) return oi(o);
                if ((!o || "false" == o.contentEditable) && (!i || "false" == i.contentEditable)) {
                    if (o) return oi(o);
                    if (i) return oi(i)
                }
            }

            function oi(t) {
                return t.contentEditable = "true", jr && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t
            }

            function ii(t) {
                t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null)
            }

            function si(t) {
                let e = t.dom.ownerDocument;
                e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
                let n = t.domSelectionRange(),
                    r = n.anchorNode,
                    o = n.anchorOffset;
                e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
                    n.anchorNode == r && n.anchorOffset == o || (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
                        ti(t) && !t.state.selection.visible || t.dom.classList.remove("ProseMirror-hideselection")
                    }, 20))
                })
            }

            function ai(t) {
                let e = t.domSelection();
                if (!e) return;
                let n = t.cursorWrapper.dom,
                    r = "IMG" == n.nodeName;
                r ? e.collapse(n.parentNode, cr(n) + 1) : e.collapse(n, 0), !r && !t.state.selection.visible && Pr && Rr <= 11 && (n.disabled = !0, n.disabled = !1)
            }

            function li(t, e) {
                if (e instanceof Qe) {
                    let n = t.docView.descAt(e.from);
                    n != t.lastSelectedViewDesc && (ci(t), n && n.selectNode(), t.lastSelectedViewDesc = n)
                } else ci(t)
            }

            function ci(t) {
                t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0)
            }

            function di(t, e, n, r) {
                return t.someProp("createSelectionBetween", r => r(t, e, n)) || Ye.between(e, n, r)
            }

            function hi(t) {
                return !(t.editable && !t.hasFocus()) && ui(t)
            }

            function ui(t) {
                let e = t.domSelectionRange();
                if (!e.anchorNode) return !1;
                try {
                    return t.dom.contains(3 == e.anchorNode.nodeType ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(3 == e.focusNode.nodeType ? e.focusNode.parentNode : e.focusNode))
                } catch (n) {
                    return !1
                }
            }

            function pi(t) {
                let e = t.docView.domFromPos(t.state.selection.anchor, 0),
                    n = t.domSelectionRange();
                return fr(e.node, e.offset, n.anchorNode, n.anchorOffset)
            }

            function fi(t, e) {
                let {
                    $anchor: n,
                    $head: r
                } = t.selection, o = e > 0 ? n.max(r) : n.min(r), i = o.parent.inlineContent ? o.depth ? t.doc.resolve(e > 0 ? o.after() : o.before()) : null : o;
                return i && Ke.findFrom(i, e)
            }

            function mi(t, e) {
                return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0
            }

            function gi(t, e, n) {
                let r = t.state.selection;
                if (!(r instanceof Ye)) {
                    if (r instanceof Qe && r.node.isInline) return mi(t, new Ye(e > 0 ? r.$to : r.$from)); {
                        let n = fi(t.state, e);
                        return !!n && mi(t, n)
                    }
                }
                if (n.indexOf("s") > -1) {
                    let {
                        $head: n
                    } = r, o = n.textOffset ? null : e < 0 ? n.nodeBefore : n.nodeAfter;
                    if (!o || o.isText || !o.isLeaf) return !1;
                    let i = t.state.doc.resolve(n.pos + o.nodeSize * (e < 0 ? -1 : 1));
                    return mi(t, new Ye(r.$anchor, i))
                }
                if (!r.empty) return !1;
                if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
                    let n = fi(t.state, e);
                    return !!(n && n instanceof Qe) && mi(t, n)
                }
                if (!(Hr && n.indexOf("m") > -1)) {
                    let n, o = r.$head,
                        i = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter;
                    if (!i || i.isText) return !1;
                    let s = e < 0 ? o.pos - i.nodeSize : o.pos;
                    return !!(i.isAtom || (n = t.docView.descAt(s)) && !n.contentDOM) && (Qe.isSelectable(i) ? mi(t, new Qe(e < 0 ? t.state.doc.resolve(o.pos - i.nodeSize) : o)) : !!_r && mi(t, new Ye(t.state.doc.resolve(e < 0 ? s : s + i.nodeSize))))
                }
            }

            function yi(t) {
                return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length
            }

            function bi(t, e) {
                let n = t.pmViewDesc;
                return n && 0 == n.size && (e < 0 || t.nextSibling || "BR" != t.nodeName)
            }

            function vi(t, e) {
                return e < 0 ? wi(t) : ki(t)
            }

            function wi(t) {
                let e = t.domSelectionRange(),
                    n = e.focusNode,
                    r = e.focusOffset;
                if (!n) return;
                let o, i, s = !1;
                for (Lr && 1 == n.nodeType && r < yi(n) && bi(n.childNodes[r], -1) && (s = !0);;)
                    if (r > 0) {
                        if (1 != n.nodeType) break; {
                            let t = n.childNodes[r - 1];
                            if (bi(t, -1)) o = n, i = --r;
                            else {
                                if (3 != t.nodeType) break;
                                n = t, r = n.nodeValue.length
                            }
                        }
                    } else {
                        if (xi(n)) break; {
                            let e = n.previousSibling;
                            while (e && bi(e, -1)) o = n.parentNode, i = cr(e), e = e.previousSibling;
                            if (e) n = e, r = yi(n);
                            else {
                                if (n = n.parentNode, n == t.dom) break;
                                r = 0
                            }
                        }
                    }
                s ? Ci(t, n, r) : o && Ci(t, o, i)
            }

            function ki(t) {
                let e = t.domSelectionRange(),
                    n = e.focusNode,
                    r = e.focusOffset;
                if (!n) return;
                let o, i, s = yi(n);
                for (;;)
                    if (r < s) {
                        if (1 != n.nodeType) break;
                        let t = n.childNodes[r];
                        if (!bi(t, 1)) break;
                        o = n, i = ++r
                    } else {
                        if (xi(n)) break; {
                            let e = n.nextSibling;
                            while (e && bi(e, 1)) o = e.parentNode, i = cr(e) + 1, e = e.nextSibling;
                            if (e) n = e, r = 0, s = yi(n);
                            else {
                                if (n = n.parentNode, n == t.dom) break;
                                r = s = 0
                            }
                        }
                    }
                o && Ci(t, o, i)
            }

            function xi(t) {
                let e = t.pmViewDesc;
                return e && e.node && e.node.isBlock
            }

            function Si(t, e) {
                while (t && e == t.childNodes.length && !kr(t)) e = cr(t) + 1, t = t.parentNode;
                while (t && e < t.childNodes.length) {
                    let n = t.childNodes[e];
                    if (3 == n.nodeType) return n;
                    if (1 == n.nodeType && "false" == n.contentEditable) break;
                    t = n, e = 0
                }
            }

            function Mi(t, e) {
                while (t && !e && !kr(t)) e = cr(t), t = t.parentNode;
                while (t && e) {
                    let n = t.childNodes[e - 1];
                    if (3 == n.nodeType) return n;
                    if (1 == n.nodeType && "false" == n.contentEditable) break;
                    t = n, e = t.childNodes.length
                }
            }

            function Ci(t, e, n) {
                if (3 != e.nodeType) {
                    let t, r;
                    (r = Si(e, n)) ? (e = r, n = 0) : (t = Mi(e, n)) && (e = t, n = t.nodeValue.length)
                }
                let r = t.domSelection();
                if (!r) return;
                if (xr(r)) {
                    let t = document.createRange();
                    t.setEnd(e, n), t.setStart(e, n), r.removeAllRanges(), r.addRange(t)
                } else r.extend && r.extend(e, n);
                t.domObserver.setCurSelection();
                let {
                    state: o
                } = t;
                setTimeout(() => {
                    t.state == o && ei(t)
                }, 50)
            }

            function Oi(t, e) {
                let n = t.state.doc.resolve(e);
                if (!$r && !Vr && n.parent.inlineContent) {
                    let r = t.coordsAtPos(e);
                    if (e > n.start()) {
                        let n = t.coordsAtPos(e - 1),
                            o = (n.top + n.bottom) / 2;
                        if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl"
                    }
                    if (e < n.end()) {
                        let n = t.coordsAtPos(e + 1),
                            o = (n.top + n.bottom) / 2;
                        if (o > r.top && o < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl"
                    }
                }
                let r = getComputedStyle(t.dom).direction;
                return "rtl" == r ? "rtl" : "ltr"
            }

            function Ti(t, e, n) {
                let r = t.state.selection;
                if (r instanceof Ye && !r.empty || n.indexOf("s") > -1) return !1;
                if (Hr && n.indexOf("m") > -1) return !1;
                let {
                    $from: o,
                    $to: i
                } = r;
                if (!o.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
                    let n = fi(t.state, e);
                    if (n && n instanceof Qe) return mi(t, n)
                }
                if (!o.parent.inlineContent) {
                    let n = e < 0 ? o : i,
                        s = r instanceof tn ? Ke.near(n, e) : Ke.findFrom(n, e);
                    return !!s && mi(t, s)
                }
                return !1
            }

            function Ai(t, e) {
                if (!(t.state.selection instanceof Ye)) return !0;
                let {
                    $head: n,
                    $anchor: r,
                    empty: o
                } = t.state.selection;
                if (!n.sameParent(r)) return !0;
                if (!o) return !1;
                if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
                let i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
                if (i && !i.isText) {
                    let r = t.state.tr;
                    return e < 0 ? r.delete(n.pos - i.nodeSize, n.pos) : r.delete(n.pos, n.pos + i.nodeSize), t.dispatch(r), !0
                }
                return !1
            }

            function Ni(t, e, n) {
                t.domObserver.stop(), e.contentEditable = n, t.domObserver.start()
            }

            function Ei(t) {
                if (!jr || t.state.selection.$head.parentOffset > 0) return !1;
                let {
                    focusNode: e,
                    focusOffset: n
                } = t.domSelectionRange();
                if (e && 1 == e.nodeType && 0 == n && e.firstChild && "false" == e.firstChild.contentEditable) {
                    let n = e.firstChild;
                    Ni(t, n, "true"), setTimeout(() => Ni(t, n, "false"), 20)
                }
                return !1
            }

            function Di(t) {
                let e = "";
                return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e
            }

            function Pi(t, e) {
                let n = e.keyCode,
                    r = Di(e);
                if (8 == n || Hr && 72 == n && "c" == r) return Ai(t, -1) || vi(t, -1);
                if (46 == n && !e.shiftKey || Hr && 68 == n && "c" == r) return Ai(t, 1) || vi(t, 1);
                if (13 == n || 27 == n) return !0;
                if (37 == n || Hr && 66 == n && "c" == r) {
                    let e = 37 == n ? "ltr" == Oi(t, t.state.selection.from) ? -1 : 1 : -1;
                    return gi(t, e, r) || vi(t, e)
                }
                if (39 == n || Hr && 70 == n && "c" == r) {
                    let e = 39 == n ? "ltr" == Oi(t, t.state.selection.from) ? 1 : -1 : 1;
                    return gi(t, e, r) || vi(t, e)
                }
                return 38 == n || Hr && 80 == n && "c" == r ? Ti(t, -1, r) || vi(t, -1) : 40 == n || Hr && 78 == n && "c" == r ? Ei(t) || Ti(t, 1, r) || vi(t, 1) : r == (Hr ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n)
            }

            function Ri(t, e) {
                t.someProp("transformCopied", n => {
                    e = n(e, t)
                });
                let n = [],
                    {
                        content: r,
                        openStart: o,
                        openEnd: i
                    } = e;
                while (o > 1 && i > 1 && 1 == r.childCount && 1 == r.firstChild.childCount) {
                    o--, i--;
                    let t = r.firstChild;
                    n.push(t.type.name, t.attrs != t.type.defaultAttrs ? t.attrs : null), r = t.content
                }
                let s = t.someProp("clipboardSerializer") || Ct.fromSchema(t.state.schema),
                    a = Wi(),
                    l = a.createElement("div");
                l.appendChild(s.serializeFragment(r, {
                    document: a
                }));
                let c, d = l.firstChild,
                    h = 0;
                while (d && 1 == d.nodeType && (c = Fi[d.nodeName.toLowerCase()])) {
                    for (let t = c.length - 1; t >= 0; t--) {
                        let e = a.createElement(c[t]);
                        while (l.firstChild) e.appendChild(l.firstChild);
                        l.appendChild(e), h++
                    }
                    d = l.firstChild
                }
                d && 1 == d.nodeType && d.setAttribute("data-pm-slice", `${o} ${i}${h?" -"+h:""} ${JSON.stringify(n)}`);
                let u = t.someProp("clipboardTextSerializer", n => n(e, t)) || e.content.textBetween(0, e.content.size, "\n\n");
                return {
                    dom: l,
                    text: u,
                    slice: e
                }
            }

            function Li(t, e, n, r, o) {
                let i, s, a = o.parent.type.spec.code;
                if (!n && !e) return null;
                let l = !!e && (r || a || !n);
                if (l) {
                    if (t.someProp("transformPastedText", n => {
                            e = n(e, a || r, t)
                        }), a) return s = new y(h.from(t.state.schema.text(e.replace(/\r\n?/g, "\n"))), 0, 0), t.someProp("transformPasted", e => {
                        s = e(s, t, !0)
                    }), s;
                    let n = t.someProp("clipboardTextParser", n => n(e, o, r, t));
                    if (n) s = n;
                    else {
                        let n = o.marks(),
                            {
                                schema: r
                            } = t.state,
                            s = Ct.fromSchema(r);
                        i = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach(t => {
                            let e = i.appendChild(document.createElement("p"));
                            t && e.appendChild(s.serializeNode(r.text(t, n)))
                        })
                    }
                } else t.someProp("transformPastedHTML", e => {
                    n = e(n, t)
                }), i = Ui(n), _r && Ji(i);
                let c = i && i.querySelector("[data-pm-slice]"),
                    d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
                if (d && d[3])
                    for (let h = +d[3]; h > 0; h--) {
                        let t = i.firstChild;
                        while (t && 1 != t.nodeType) t = t.nextSibling;
                        if (!t) break;
                        i = t
                    }
                if (!s) {
                    let e = t.someProp("clipboardParser") || t.someProp("domParser") || ht.fromSchema(t.state.schema);
                    s = e.parseSlice(i, {
                        preserveWhitespace: !(!l && !d),
                        context: o,
                        ruleFromNode(t) {
                            return "BR" != t.nodeName || t.nextSibling || !t.parentNode || Ii.test(t.parentNode.nodeName) ? null : {
                                ignore: !0
                            }
                        }
                    })
                }
                if (d) s = Gi(Vi(s, +d[1], +d[2]), d[4]);
                else if (s = y.maxOpen($i(s.content, o), !0), s.openStart || s.openEnd) {
                    let t = 0,
                        e = 0;
                    for (let n = s.content.firstChild; t < s.openStart && !n.type.spec.isolating; t++, n = n.firstChild);
                    for (let n = s.content.lastChild; e < s.openEnd && !n.type.spec.isolating; e++, n = n.lastChild);
                    s = Vi(s, t, e)
                }
                return t.someProp("transformPasted", e => {
                    s = e(s, t, l)
                }), s
            }
            const Ii = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

            function $i(t, e) {
                if (t.childCount < 2) return t;
                for (let n = e.depth; n >= 0; n--) {
                    let r, o = e.node(n),
                        i = o.contentMatchAt(e.index(n)),
                        s = [];
                    if (t.forEach(t => {
                            if (!s) return;
                            let e, n = i.findWrapping(t.type);
                            if (!n) return s = null;
                            if (e = s.length && r.length && ji(n, r, t, s[s.length - 1], 0)) s[s.length - 1] = e;
                            else {
                                s.length && (s[s.length - 1] = Bi(s[s.length - 1], r.length));
                                let e = zi(t, n);
                                s.push(e), i = i.matchType(e.type), r = n
                            }
                        }), s) return h.from(s)
                }
                return t
            }

            function zi(t, e, n = 0) {
                for (let r = e.length - 1; r >= n; r--) t = e[r].create(null, h.from(t));
                return t
            }

            function ji(t, e, n, r, o) {
                if (o < t.length && o < e.length && t[o] == e[o]) {
                    let i = ji(t, e, n, r.lastChild, o + 1);
                    if (i) return r.copy(r.content.replaceChild(r.childCount - 1, i));
                    let s = r.contentMatchAt(r.childCount);
                    if (s.matchType(o == t.length - 1 ? n.type : t[o + 1])) return r.copy(r.content.append(h.from(zi(n, t, o + 1))))
                }
            }

            function Bi(t, e) {
                if (0 == e) return t;
                let n = t.content.replaceChild(t.childCount - 1, Bi(t.lastChild, e - 1)),
                    r = t.contentMatchAt(t.childCount).fillBefore(h.empty, !0);
                return t.copy(n.append(r))
            }

            function Hi(t, e, n, r, o, i) {
                let s = e < 0 ? t.firstChild : t.lastChild,
                    a = s.content;
                return t.childCount > 1 && (i = 0), o < r - 1 && (a = Hi(a, e, n, r, o + 1, i)), o >= n && (a = e < 0 ? s.contentMatchAt(0).fillBefore(a, i <= o).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(h.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(a))
            }

            function Vi(t, e, n) {
                return e < t.openStart && (t = new y(Hi(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new y(Hi(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t
            }
            const Fi = {
                thead: ["table"],
                tbody: ["table"],
                tfoot: ["table"],
                caption: ["table"],
                colgroup: ["table"],
                col: ["table", "colgroup"],
                tr: ["table", "tbody"],
                td: ["table", "tbody", "tr"],
                th: ["table", "tbody", "tr"]
            };
            let _i = null;

            function Wi() {
                return _i || (_i = document.implementation.createHTMLDocument("title"))
            }
            let qi = null;

            function Ki(t) {
                let e = window.trustedTypes;
                return e ? (qi || (qi = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", {
                    createHTML: t => t
                })), qi.createHTML(t)) : t
            }

            function Ui(t) {
                let e = /^(\s*<meta [^>]*>)*/.exec(t);
                e && (t = t.slice(e[0].length));
                let n, r = Wi().createElement("div"),
                    o = /<([a-z][^>\s]+)/i.exec(t);
                if ((n = o && Fi[o[1].toLowerCase()]) && (t = n.map(t => "<" + t + ">").join("") + t + n.map(t => "</" + t + ">").reverse().join("")), r.innerHTML = Ki(t), n)
                    for (let i = 0; i < n.length; i++) r = r.querySelector(n[i]) || r;
                return r
            }

            function Ji(t) {
                let e = t.querySelectorAll($r ? "span:not([class]):not([style])" : "span.Apple-converted-space");
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    1 == r.childNodes.length && " " == r.textContent && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r)
                }
            }

            function Gi(t, e) {
                if (!t.size) return t;
                let n, r = t.content.firstChild.type.schema;
                try {
                    n = JSON.parse(e)
                } catch (a) {
                    return t
                }
                let {
                    content: o,
                    openStart: i,
                    openEnd: s
                } = t;
                for (let l = n.length - 2; l >= 0; l -= 2) {
                    let t = r.nodes[n[l]];
                    if (!t || t.hasRequiredAttrs()) break;
                    o = h.from(t.create(n[l + 1], o)), i++, s++
                }
                return new y(o, i, s)
            }
            const Yi = {},
                Xi = {},
                Qi = {
                    touchstart: !0,
                    touchmove: !0
                };
            class Zi {
                constructor() {
                    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
                        time: 0,
                        x: 0,
                        y: 0,
                        type: "",
                        button: 0
                    }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
                }
            }

            function ts(t) {
                for (let e in Yi) {
                    let n = Yi[e];
                    t.dom.addEventListener(e, t.input.eventHandlers[e] = e => {
                        !ss(t, e) || is(t, e) || !t.editable && e.type in Xi || n(t, e)
                    }, Qi[e] ? {
                        passive: !0
                    } : void 0)
                }
                jr && t.dom.addEventListener("input", () => null), rs(t)
            }

            function es(t, e) {
                t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now()
            }

            function ns(t) {
                t.domObserver.stop();
                for (let e in t.input.eventHandlers) t.dom.removeEventListener(e, t.input.eventHandlers[e]);
                clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout)
            }

            function rs(t) {
                t.someProp("handleDOMEvents", e => {
                    for (let n in e) t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = e => is(t, e))
                })
            }

            function is(t, e) {
                return t.someProp("handleDOMEvents", n => {
                    let r = n[e.type];
                    return !!r && (r(t, e) || e.defaultPrevented)
                })
            }

            function ss(t, e) {
                if (!e.bubbles) return !0;
                if (e.defaultPrevented) return !1;
                for (let n = e.target; n != t.dom; n = n.parentNode)
                    if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(e)) return !1;
                return !0
            }

            function as(t, e) {
                is(t, e) || !Yi[e.type] || !t.editable && e.type in Xi || Yi[e.type](t, e)
            }

            function ls(t) {
                return {
                    left: t.clientX,
                    top: t.clientY
                }
            }

            function cs(t, e) {
                let n = e.x - t.clientX,
                    r = e.y - t.clientY;
                return n * n + r * r < 100
            }

            function ds(t, e, n, r, o) {
                if (-1 == r) return !1;
                let i = t.state.doc.resolve(r);
                for (let s = i.depth + 1; s > 0; s--)
                    if (t.someProp(e, e => s > i.depth ? e(t, n, i.nodeAfter, i.before(s), o, !0) : e(t, n, i.node(s), i.before(s), o, !1))) return !0;
                return !1
            }

            function hs(t, e, n) {
                if (t.focused || t.focus(), t.state.selection.eq(e)) return;
                let r = t.state.tr.setSelection(e);
                "pointer" == n && r.setMeta("pointer", !0), t.dispatch(r)
            }

            function us(t, e) {
                if (-1 == e) return !1;
                let n = t.state.doc.resolve(e),
                    r = n.nodeAfter;
                return !!(r && r.isAtom && Qe.isSelectable(r)) && (hs(t, new Qe(n), "pointer"), !0)
            }

            function ps(t, e) {
                if (-1 == e) return !1;
                let n, r, o = t.state.selection;
                o instanceof Qe && (n = o.node);
                let i = t.state.doc.resolve(e);
                for (let s = i.depth + 1; s > 0; s--) {
                    let t = s > i.depth ? i.nodeAfter : i.node(s);
                    if (Qe.isSelectable(t)) {
                        r = n && o.$from.depth > 0 && s >= o.$from.depth && i.before(o.$from.depth + 1) == o.$from.pos ? i.before(o.$from.depth) : i.before(s);
                        break
                    }
                }
                return null != r && (hs(t, Qe.create(t.state.doc, r), "pointer"), !0)
            }

            function fs(t, e, n, r, o) {
                return ds(t, "handleClickOn", e, n, r) || t.someProp("handleClick", n => n(t, e, r)) || (o ? ps(t, n) : us(t, n))
            }

            function ms(t, e, n, r) {
                return ds(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", n => n(t, e, r))
            }

            function gs(t, e, n, r) {
                return ds(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", n => n(t, e, r)) || ys(t, n, r)
            }

            function ys(t, e, n) {
                if (0 != n.button) return !1;
                let r = t.state.doc;
                if (-1 == e) return !!r.inlineContent && (hs(t, Ye.create(r, 0, r.content.size), "pointer"), !0);
                let o = r.resolve(e);
                for (let i = o.depth + 1; i > 0; i--) {
                    let e = i > o.depth ? o.nodeAfter : o.node(i),
                        n = o.before(i);
                    if (e.inlineContent) hs(t, Ye.create(r, n + 1, n + 1 + e.content.size), "pointer");
                    else {
                        if (!Qe.isSelectable(e)) continue;
                        hs(t, Qe.create(r, n), "pointer")
                    }
                    return !0
                }
            }

            function bs(t) {
                return Ts(t)
            }
            Xi.keydown = (t, e) => {
                let n = e;
                if (t.input.shiftKey = 16 == n.keyCode || n.shiftKey, !ks(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !Fr || !$r || 13 != n.keyCode))
                    if (229 != n.keyCode && t.domObserver.forceFlush(), !Br || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey) t.someProp("handleKeyDown", e => e(t, n)) || Pi(t, n) ? n.preventDefault() : es(t, "key");
                    else {
                        let e = Date.now();
                        t.input.lastIOSEnter = e, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                            t.input.lastIOSEnter == e && (t.someProp("handleKeyDown", e => e(t, Sr(13, "Enter"))), t.input.lastIOSEnter = 0)
                        }, 200)
                    }
            }, Xi.keyup = (t, e) => {
                16 == e.keyCode && (t.input.shiftKey = !1)
            }, Xi.keypress = (t, e) => {
                let n = e;
                if (ks(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Hr && n.metaKey) return;
                if (t.someProp("handleKeyPress", e => e(t, n))) return void n.preventDefault();
                let r = t.state.selection;
                if (!(r instanceof Ye) || !r.$from.sameParent(r.$to)) {
                    let e = String.fromCharCode(n.charCode),
                        o = () => t.state.tr.insertText(e).scrollIntoView();
                    /[\r\n]/.test(e) || t.someProp("handleTextInput", n => n(t, r.$from.pos, r.$to.pos, e, o)) || t.dispatch(o()), n.preventDefault()
                }
            };
            const vs = Hr ? "metaKey" : "ctrlKey";
            Yi.mousedown = (t, e) => {
                let n = e;
                t.input.shiftKey = n.shiftKey;
                let r = bs(t),
                    o = Date.now(),
                    i = "singleClick";
                o - t.input.lastClick.time < 500 && cs(n, t.input.lastClick) && !n[vs] && t.input.lastClick.button == n.button && ("singleClick" == t.input.lastClick.type ? i = "doubleClick" : "doubleClick" == t.input.lastClick.type && (i = "tripleClick")), t.input.lastClick = {
                    time: o,
                    x: n.clientX,
                    y: n.clientY,
                    type: i,
                    button: n.button
                };
                let s = t.posAtCoords(ls(n));
                s && ("singleClick" == i ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new ws(t, s, n, !!r)) : ("doubleClick" == i ? ms : gs)(t, s.pos, s.inside, n) ? n.preventDefault() : es(t, "pointer"))
            };
            class ws {
                constructor(t, e, n, r) {
                    let o, i;
                    if (this.view = t, this.pos = e, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = t.state.doc, this.selectNode = !!n[vs], this.allowDefault = n.shiftKey, e.inside > -1) o = t.state.doc.nodeAt(e.inside), i = e.inside;
                    else {
                        let n = t.state.doc.resolve(e.pos);
                        o = n.parent, i = n.depth ? n.before() : 0
                    }
                    const s = r ? null : n.target,
                        a = s ? t.docView.nearestDesc(s, !0) : null;
                    this.target = a && 1 == a.nodeDOM.nodeType ? a.nodeDOM : null;
                    let {
                        selection: l
                    } = t.state;
                    (0 == n.button && o.type.spec.draggable && !1 !== o.type.spec.selectable || l instanceof Qe && l.from <= i && l.to > i) && (this.mightDrag = {
                        node: o,
                        pos: i,
                        addAttr: !(!this.target || this.target.draggable),
                        setUneditable: !(!this.target || !Lr || this.target.hasAttribute("contentEditable"))
                    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
                        this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
                    }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), es(t, "pointer")
                }
                done() {
                    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => ei(this.view)), this.view.input.mouseDown = null
                }
                up(t) {
                    if (this.done(), !this.view.dom.contains(t.target)) return;
                    let e = this.pos;
                    this.view.state.doc != this.startDoc && (e = this.view.posAtCoords(ls(t))), this.updateAllowDefault(t), this.allowDefault || !e ? es(this.view, "pointer") : fs(this.view, e.pos, e.inside, t, this.selectNode) ? t.preventDefault() : 0 == t.button && (this.flushed || jr && this.mightDrag && !this.mightDrag.node.isAtom || $r && !this.view.state.selection.visible && Math.min(Math.abs(e.pos - this.view.state.selection.from), Math.abs(e.pos - this.view.state.selection.to)) <= 2) ? (hs(this.view, Ke.near(this.view.state.doc.resolve(e.pos)), "pointer"), t.preventDefault()) : es(this.view, "pointer")
                }
                move(t) {
                    this.updateAllowDefault(t), es(this.view, "pointer"), 0 == t.buttons && this.done()
                }
                updateAllowDefault(t) {
                    !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0)
                }
            }

            function ks(t, e) {
                return !!t.composing || !!(jr && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500) && (t.input.compositionEndedAt = -2e8, !0)
            }
            Yi.touchstart = t => {
                t.input.lastTouch = Date.now(), bs(t), es(t, "pointer")
            }, Yi.touchmove = t => {
                t.input.lastTouch = Date.now(), es(t, "pointer")
            }, Yi.contextmenu = t => bs(t);
            const xs = Fr ? 5e3 : -1;

            function Ss(t, e) {
                clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Ts(t), e))
            }

            function Ms(t) {
                t.composing && (t.input.composing = !1, t.input.compositionEndedAt = Os());
                while (t.input.compositionNodes.length > 0) t.input.compositionNodes.pop().markParentsDirty()
            }

            function Cs(t) {
                let e = t.domSelectionRange();
                if (!e.focusNode) return null;
                let n = br(e.focusNode, e.focusOffset),
                    r = vr(e.focusNode, e.focusOffset);
                if (n && r && n != r) {
                    let e = r.pmViewDesc,
                        o = t.domObserver.lastChangedTextNode;
                    if (n == o || r == o) return o;
                    if (!e || !e.isText(r.nodeValue)) return r;
                    if (t.input.compositionNode == r) {
                        let t = n.pmViewDesc;
                        if (t && t.isText(n.nodeValue)) return r
                    }
                }
                return n || r
            }

            function Os() {
                let t = document.createEvent("Event");
                return t.initEvent("event", !0, !0), t.timeStamp
            }

            function Ts(t, e = !1) {
                if (!(Fr && t.domObserver.flushingSoon >= 0)) {
                    if (t.domObserver.forceFlush(), Ms(t), e || t.docView && t.docView.dirty) {
                        let n = Zo(t),
                            r = t.state.selection;
                        return n && !n.eq(r) ? t.dispatch(t.state.tr.setSelection(n)) : !t.markCursor && !e || r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t.updateState(t.state) : t.dispatch(t.state.tr.deleteSelection()), !0
                    }
                    return !1
                }
            }

            function As(t, e) {
                if (!t.dom.parentNode) return;
                let n = t.dom.parentNode.appendChild(document.createElement("div"));
                n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                let r = getSelection(),
                    o = document.createRange();
                o.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(o), setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), t.focus()
                }, 50)
            }
            Xi.compositionstart = Xi.compositionupdate = t => {
                if (!t.composing) {
                    t.domObserver.flush();
                    let {
                        state: e
                    } = t, n = e.selection.$to;
                    if (e.selection instanceof Ye && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(t => !1 === t.type.spec.inclusive))) t.markCursor = t.state.storedMarks || n.marks(), Ts(t, !0), t.markCursor = null;
                    else if (Ts(t, !e.selection.empty), Lr && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
                        let e = t.domSelectionRange();
                        for (let n = e.focusNode, r = e.focusOffset; n && 1 == n.nodeType && 0 != r;) {
                            let e = r < 0 ? n.lastChild : n.childNodes[r - 1];
                            if (!e) break;
                            if (3 == e.nodeType) {
                                let n = t.domSelection();
                                n && n.collapse(e, e.nodeValue.length);
                                break
                            }
                            n = e, r = -1
                        }
                    }
                    t.input.composing = !0
                }
                Ss(t, xs)
            }, Xi.compositionend = (t, e) => {
                t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, Ss(t, 20))
            };
            const Ns = Pr && Rr < 15 || Br && Wr < 604;

            function Es(t) {
                return 0 == t.openStart && 0 == t.openEnd && 1 == t.content.childCount ? t.content.firstChild : null
            }

            function Ds(t, e) {
                if (!t.dom.parentNode) return;
                let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
                    r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
                let o = t.input.shiftKey && 45 != t.input.lastKeyCode;
                setTimeout(() => {
                    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Ps(t, r.value, null, o, e) : Ps(t, r.textContent, r.innerHTML, o, e)
                }, 50)
            }

            function Ps(t, e, n, r, o) {
                let i = Li(t, e, n, r, t.state.selection.$from);
                if (t.someProp("handlePaste", e => e(t, o, i || y.empty))) return !0;
                if (!i) return !1;
                let s = Es(i),
                    a = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(i);
                return t.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
            }

            function Rs(t) {
                let e = t.getData("text/plain") || t.getData("Text");
                if (e) return e;
                let n = t.getData("text/uri-list");
                return n ? n.replace(/\r?\n/g, " ") : ""
            }
            Yi.copy = Xi.cut = (t, e) => {
                let n = e,
                    r = t.state.selection,
                    o = "cut" == n.type;
                if (r.empty) return;
                let i = Ns ? null : n.clipboardData,
                    s = r.content(),
                    {
                        dom: a,
                        text: l
                    } = Ri(t, s);
                i ? (n.preventDefault(), i.clearData(), i.setData("text/html", a.innerHTML), i.setData("text/plain", l)) : As(t, a), o && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
            }, Xi.paste = (t, e) => {
                let n = e;
                if (t.composing && !Fr) return;
                let r = Ns ? null : n.clipboardData,
                    o = t.input.shiftKey && 45 != t.input.lastKeyCode;
                r && Ps(t, Rs(r), r.getData("text/html"), o, n) ? n.preventDefault() : Ds(t, n)
            };
            class Ls {
                constructor(t, e, n) {
                    this.slice = t, this.move = e, this.node = n
                }
            }
            const Is = Hr ? "altKey" : "ctrlKey";

            function $s(t, e) {
                let n = t.someProp("dragCopies", t => !t(e));
                return null != n ? n : !e[Is]
            }
            Yi.dragstart = (t, e) => {
                let n = e,
                    r = t.input.mouseDown;
                if (r && r.done(), !n.dataTransfer) return;
                let o, i = t.state.selection,
                    s = i.empty ? null : t.posAtCoords(ls(n));
                if (s && s.pos >= i.from && s.pos <= (i instanceof Qe ? i.to - 1 : i.to));
                else if (r && r.mightDrag) o = Qe.create(t.state.doc, r.mightDrag.pos);
                else if (n.target && 1 == n.target.nodeType) {
                    let e = t.docView.nearestDesc(n.target, !0);
                    e && e.node.type.spec.draggable && e != t.docView && (o = Qe.create(t.state.doc, e.posBefore))
                }
                let a = (o || t.state.selection).content(),
                    {
                        dom: l,
                        text: c,
                        slice: d
                    } = Ri(t, a);
                (!n.dataTransfer.files.length || !$r || zr > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Ns ? "Text" : "text/html", l.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Ns || n.dataTransfer.setData("text/plain", c), t.dragging = new Ls(d, $s(t, n), o)
            }, Yi.dragend = t => {
                let e = t.dragging;
                window.setTimeout(() => {
                    t.dragging == e && (t.dragging = null)
                }, 50)
            }, Xi.dragover = Xi.dragenter = (t, e) => e.preventDefault(), Xi.drop = (t, e) => {
                let n = e,
                    r = t.dragging;
                if (t.dragging = null, !n.dataTransfer) return;
                let o = t.posAtCoords(ls(n));
                if (!o) return;
                let i = t.state.doc.resolve(o.pos),
                    s = r && r.slice;
                s ? t.someProp("transformPasted", e => {
                    s = e(s, t, !1)
                }) : s = Li(t, Rs(n.dataTransfer), Ns ? null : n.dataTransfer.getData("text/html"), !1, i);
                let a = !(!r || !$s(t, n));
                if (t.someProp("handleDrop", e => e(t, n, s || y.empty, a))) return void n.preventDefault();
                if (!s) return;
                n.preventDefault();
                let l = s ? Ce(t.state.doc, i.pos, s) : i.pos;
                null == l && (l = i.pos);
                let c = t.state.tr;
                if (a) {
                    let {
                        node: t
                    } = r;
                    t ? t.replace(c) : c.deleteSelection()
                }
                let d = c.mapping.map(l),
                    h = 0 == s.openStart && 0 == s.openEnd && 1 == s.content.childCount,
                    u = c.doc;
                if (h ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), c.doc.eq(u)) return;
                let p = c.doc.resolve(d);
                if (h && Qe.isSelectable(s.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(s.content.firstChild)) c.setSelection(new Qe(p));
                else {
                    let e = c.mapping.map(l);
                    c.mapping.maps[c.mapping.maps.length - 1].forEach((t, n, r, o) => e = o), c.setSelection(di(t, p, c.doc.resolve(e)))
                }
                t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"))
            }, Yi.focus = t => {
                t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
                    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && ei(t)
                }, 20))
            }, Yi.blur = (t, e) => {
                let n = e;
                t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1)
            }, Yi.beforeinput = (t, e) => {
                let n = e;
                if ($r && Fr && "deleteContentBackward" == n.inputType) {
                    t.domObserver.flushSoon();
                    let {
                        domChangeCount: e
                    } = t.input;
                    setTimeout(() => {
                        if (t.input.domChangeCount != e) return;
                        if (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", e => e(t, Sr(8, "Backspace")))) return;
                        let {
                            $cursor: n
                        } = t.state.selection;
                        n && n.pos > 0 && t.dispatch(t.state.tr.delete(n.pos - 1, n.pos).scrollIntoView())
                    }, 50)
                }
            };
            for (let os in Xi) Yi[os] = Xi[os];

            function zs(t, e) {
                if (t == e) return !0;
                for (let n in t)
                    if (t[n] !== e[n]) return !1;
                for (let n in e)
                    if (!(n in t)) return !1;
                return !0
            }
            class js {
                constructor(t, e) {
                    this.toDOM = t, this.spec = e || _s, this.side = this.spec.side || 0
                }
                map(t, e, n, r) {
                    let {
                        pos: o,
                        deleted: i
                    } = t.mapResult(e.from + r, this.side < 0 ? -1 : 1);
                    return i ? null : new Vs(o - n, o - n, this)
                }
                valid() {
                    return !0
                }
                eq(t) {
                    return this == t || t instanceof js && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && zs(this.spec, t.spec))
                }
                destroy(t) {
                    this.spec.destroy && this.spec.destroy(t)
                }
            }
            class Bs {
                constructor(t, e) {
                    this.attrs = t, this.spec = e || _s
                }
                map(t, e, n, r) {
                    let o = t.map(e.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
                        i = t.map(e.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
                    return o >= i ? null : new Vs(o, i, this)
                }
                valid(t, e) {
                    return e.from < e.to
                }
                eq(t) {
                    return this == t || t instanceof Bs && zs(this.attrs, t.attrs) && zs(this.spec, t.spec)
                }
                static is(t) {
                    return t.type instanceof Bs
                }
                destroy() {}
            }
            class Hs {
                constructor(t, e) {
                    this.attrs = t, this.spec = e || _s
                }
                map(t, e, n, r) {
                    let o = t.mapResult(e.from + r, 1);
                    if (o.deleted) return null;
                    let i = t.mapResult(e.to + r, -1);
                    return i.deleted || i.pos <= o.pos ? null : new Vs(o.pos - n, i.pos - n, this)
                }
                valid(t, e) {
                    let n, {
                        index: r,
                        offset: o
                    } = t.content.findIndex(e.from);
                    return o == e.from && !(n = t.child(r)).isText && o + n.nodeSize == e.to
                }
                eq(t) {
                    return this == t || t instanceof Hs && zs(this.attrs, t.attrs) && zs(this.spec, t.spec)
                }
                destroy() {}
            }
            class Vs {
                constructor(t, e, n) {
                    this.from = t, this.to = e, this.type = n
                }
                copy(t, e) {
                    return new Vs(t, e, this.type)
                }
                eq(t, e = 0) {
                    return this.type.eq(t.type) && this.from + e == t.from && this.to + e == t.to
                }
                map(t, e, n) {
                    return this.type.map(t, this, e, n)
                }
                static widget(t, e, n) {
                    return new Vs(t, t, new js(e, n))
                }
                static inline(t, e, n, r) {
                    return new Vs(t, e, new Bs(n, r))
                }
                static node(t, e, n, r) {
                    return new Vs(t, e, new Hs(n, r))
                }
                get spec() {
                    return this.type.spec
                }
                get inline() {
                    return this.type instanceof Bs
                }
                get widget() {
                    return this.type instanceof js
                }
            }
            const Fs = [],
                _s = {};
            class Ws {
                constructor(t, e) {
                    this.local = t.length ? t : Fs, this.children = e.length ? e : Fs
                }
                static create(t, e) {
                    return e.length ? Qs(e, t, 0, _s) : qs
                }
                find(t, e, n) {
                    let r = [];
                    return this.findInner(null == t ? 0 : t, null == e ? 1e9 : e, r, 0, n), r
                }
                findInner(t, e, n, r, o) {
                    for (let i = 0; i < this.local.length; i++) {
                        let s = this.local[i];
                        s.from <= e && s.to >= t && (!o || o(s.spec)) && n.push(s.copy(s.from + r, s.to + r))
                    }
                    for (let i = 0; i < this.children.length; i += 3)
                        if (this.children[i] < e && this.children[i + 1] > t) {
                            let s = this.children[i] + 1;
                            this.children[i + 2].findInner(t - s, e - s, n, r + s, o)
                        }
                }
                map(t, e, n) {
                    return this == qs || 0 == t.maps.length ? this : this.mapInner(t, e, 0, 0, n || _s)
                }
                mapInner(t, e, n, r, o) {
                    let i;
                    for (let s = 0; s < this.local.length; s++) {
                        let a = this.local[s].map(t, n, r);
                        a && a.type.valid(e, a) ? (i || (i = [])).push(a) : o.onRemove && o.onRemove(this.local[s].spec)
                    }
                    return this.children.length ? Us(this.children, i || [], t, e, n, r, o) : i ? new Ws(i.sort(Zs), Fs) : qs
                }
                add(t, e) {
                    return e.length ? this == qs ? Ws.create(t, e) : this.addInner(t, e, 0) : this
                }
                addInner(t, e, n) {
                    let r, o = 0;
                    t.forEach((t, i) => {
                        let s, a = i + n;
                        if (s = Ys(e, t, a)) {
                            r || (r = this.children.slice());
                            while (o < r.length && r[o] < i) o += 3;
                            r[o] == i ? r[o + 2] = r[o + 2].addInner(t, s, a + 1) : r.splice(o, 0, i, i + t.nodeSize, Qs(s, t, a + 1, _s)), o += 3
                        }
                    });
                    let i = Js(o ? Xs(e) : e, -n);
                    for (let s = 0; s < i.length; s++) i[s].type.valid(t, i[s]) || i.splice(s--, 1);
                    return new Ws(i.length ? this.local.concat(i).sort(Zs) : this.local, r || this.children)
                }
                remove(t) {
                    return 0 == t.length || this == qs ? this : this.removeInner(t, 0)
                }
                removeInner(t, e) {
                    let n = this.children,
                        r = this.local;
                    for (let o = 0; o < n.length; o += 3) {
                        let r, i = n[o] + e,
                            s = n[o + 1] + e;
                        for (let e, n = 0; n < t.length; n++)(e = t[n]) && e.from > i && e.to < s && (t[n] = null, (r || (r = [])).push(e));
                        if (!r) continue;
                        n == this.children && (n = this.children.slice());
                        let a = n[o + 2].removeInner(r, i + 1);
                        a != qs ? n[o + 2] = a : (n.splice(o, 3), o -= 3)
                    }
                    if (r.length)
                        for (let o, i = 0; i < t.length; i++)
                            if (o = t[i])
                                for (let t = 0; t < r.length; t++) r[t].eq(o, e) && (r == this.local && (r = this.local.slice()), r.splice(t--, 1));
                    return n == this.children && r == this.local ? this : r.length || n.length ? new Ws(r, n) : qs
                }
                forChild(t, e) {
                    if (this == qs) return this;
                    if (e.isLeaf) return Ws.empty;
                    let n, r;
                    for (let s = 0; s < this.children.length; s += 3)
                        if (this.children[s] >= t) {
                            this.children[s] == t && (n = this.children[s + 2]);
                            break
                        }
                    let o = t + 1,
                        i = o + e.content.size;
                    for (let s = 0; s < this.local.length; s++) {
                        let t = this.local[s];
                        if (t.from < i && t.to > o && t.type instanceof Bs) {
                            let e = Math.max(o, t.from) - o,
                                n = Math.min(i, t.to) - o;
                            e < n && (r || (r = [])).push(t.copy(e, n))
                        }
                    }
                    if (r) {
                        let t = new Ws(r.sort(Zs), Fs);
                        return n ? new Ks([t, n]) : t
                    }
                    return n || qs
                }
                eq(t) {
                    if (this == t) return !0;
                    if (!(t instanceof Ws) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
                    for (let e = 0; e < this.local.length; e++)
                        if (!this.local[e].eq(t.local[e])) return !1;
                    for (let e = 0; e < this.children.length; e += 3)
                        if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
                    return !0
                }
                locals(t) {
                    return ta(this.localsInner(t))
                }
                localsInner(t) {
                    if (this == qs) return Fs;
                    if (t.inlineContent || !this.local.some(Bs.is)) return this.local;
                    let e = [];
                    for (let n = 0; n < this.local.length; n++) this.local[n].type instanceof Bs || e.push(this.local[n]);
                    return e
                }
                forEachSet(t) {
                    t(this)
                }
            }
            Ws.empty = new Ws([], []), Ws.removeOverlap = ta;
            const qs = Ws.empty;
            class Ks {
                constructor(t) {
                    this.members = t
                }
                map(t, e) {
                    const n = this.members.map(n => n.map(t, e, _s));
                    return Ks.from(n)
                }
                forChild(t, e) {
                    if (e.isLeaf) return Ws.empty;
                    let n = [];
                    for (let r = 0; r < this.members.length; r++) {
                        let o = this.members[r].forChild(t, e);
                        o != qs && (o instanceof Ks ? n = n.concat(o.members) : n.push(o))
                    }
                    return Ks.from(n)
                }
                eq(t) {
                    if (!(t instanceof Ks) || t.members.length != this.members.length) return !1;
                    for (let e = 0; e < this.members.length; e++)
                        if (!this.members[e].eq(t.members[e])) return !1;
                    return !0
                }
                locals(t) {
                    let e, n = !0;
                    for (let r = 0; r < this.members.length; r++) {
                        let o = this.members[r].localsInner(t);
                        if (o.length)
                            if (e) {
                                n && (e = e.slice(), n = !1);
                                for (let t = 0; t < o.length; t++) e.push(o[t])
                            } else e = o
                    }
                    return e ? ta(n ? e : e.sort(Zs)) : Fs
                }
                static from(t) {
                    switch (t.length) {
                        case 0:
                            return qs;
                        case 1:
                            return t[0];
                        default:
                            return new Ks(t.every(t => t instanceof Ws) ? t : t.reduce((t, e) => t.concat(e instanceof Ws ? e : e.members), []))
                    }
                }
                forEachSet(t) {
                    for (let e = 0; e < this.members.length; e++) this.members[e].forEachSet(t)
                }
            }

            function Us(t, e, n, r, o, i, s) {
                let a = t.slice();
                for (let c = 0, d = i; c < n.maps.length; c++) {
                    let t = 0;
                    n.maps[c].forEach((e, n, r, o) => {
                        let i = o - r - (n - e);
                        for (let s = 0; s < a.length; s += 3) {
                            let r = a[s + 1];
                            if (r < 0 || e > r + d - t) continue;
                            let o = a[s] + d - t;
                            n >= o ? a[s + 1] = e <= o ? -2 : -1 : e >= d && i && (a[s] += i, a[s + 1] += i)
                        }
                        t += i
                    }), d = n.maps[c].map(d, -1)
                }
                let l = !1;
                for (let c = 0; c < a.length; c += 3)
                    if (a[c + 1] < 0) {
                        if (-2 == a[c + 1]) {
                            l = !0, a[c + 1] = -1;
                            continue
                        }
                        let e = n.map(t[c] + i),
                            d = e - o;
                        if (d < 0 || d >= r.content.size) {
                            l = !0;
                            continue
                        }
                        let h = n.map(t[c + 1] + i, -1),
                            u = h - o,
                            {
                                index: p,
                                offset: f
                            } = r.content.findIndex(d),
                            m = r.maybeChild(p);
                        if (m && f == d && f + m.nodeSize == u) {
                            let r = a[c + 2].mapInner(n, m, e + 1, t[c] + i + 1, s);
                            r != qs ? (a[c] = d, a[c + 1] = u, a[c + 2] = r) : (a[c + 1] = -2, l = !0)
                        } else l = !0
                    }
                if (l) {
                    let l = Gs(a, t, e, n, o, i, s),
                        c = Qs(l, r, 0, s);
                    e = c.local;
                    for (let t = 0; t < a.length; t += 3) a[t + 1] < 0 && (a.splice(t, 3), t -= 3);
                    for (let t = 0, e = 0; t < c.children.length; t += 3) {
                        let n = c.children[t];
                        while (e < a.length && a[e] < n) e += 3;
                        a.splice(e, 0, c.children[t], c.children[t + 1], c.children[t + 2])
                    }
                }
                return new Ws(e.sort(Zs), a)
            }

            function Js(t, e) {
                if (!e || !t.length) return t;
                let n = [];
                for (let r = 0; r < t.length; r++) {
                    let o = t[r];
                    n.push(new Vs(o.from + e, o.to + e, o.type))
                }
                return n
            }

            function Gs(t, e, n, r, o, i, s) {
                function a(t, e) {
                    for (let i = 0; i < t.local.length; i++) {
                        let a = t.local[i].map(r, o, e);
                        a ? n.push(a) : s.onRemove && s.onRemove(t.local[i].spec)
                    }
                    for (let n = 0; n < t.children.length; n += 3) a(t.children[n + 2], t.children[n] + e + 1)
                }
                for (let l = 0; l < t.length; l += 3) - 1 == t[l + 1] && a(t[l + 2], e[l] + i + 1);
                return n
            }

            function Ys(t, e, n) {
                if (e.isLeaf) return null;
                let r = n + e.nodeSize,
                    o = null;
                for (let i, s = 0; s < t.length; s++)(i = t[s]) && i.from > n && i.to < r && ((o || (o = [])).push(i), t[s] = null);
                return o
            }

            function Xs(t) {
                let e = [];
                for (let n = 0; n < t.length; n++) null != t[n] && e.push(t[n]);
                return e
            }

            function Qs(t, e, n, r) {
                let o = [],
                    i = !1;
                e.forEach((e, s) => {
                    let a = Ys(t, e, s + n);
                    if (a) {
                        i = !0;
                        let t = Qs(a, e, n + s + 1, r);
                        t != qs && o.push(s, s + e.nodeSize, t)
                    }
                });
                let s = Js(i ? Xs(t) : t, -n).sort(Zs);
                for (let a = 0; a < s.length; a++) s[a].type.valid(e, s[a]) || (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
                return s.length || o.length ? new Ws(s, o) : qs
            }

            function Zs(t, e) {
                return t.from - e.from || t.to - e.to
            }

            function ta(t) {
                let e = t;
                for (let n = 0; n < e.length - 1; n++) {
                    let r = e[n];
                    if (r.from != r.to)
                        for (let o = n + 1; o < e.length; o++) {
                            let i = e[o];
                            if (i.from != r.from) {
                                i.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, i.from), ea(e, o, r.copy(i.from, r.to)));
                                break
                            }
                            i.to != r.to && (e == t && (e = t.slice()), e[o] = i.copy(i.from, r.to), ea(e, o + 1, i.copy(r.to, i.to)))
                        }
                }
                return e
            }

            function ea(t, e, n) {
                while (e < t.length && Zs(n, t[e]) > 0) e++;
                t.splice(e, 0, n)
            }

            function na(t) {
                let e = [];
                return t.someProp("decorations", n => {
                    let r = n(t.state);
                    r && r != qs && e.push(r)
                }), t.cursorWrapper && e.push(Ws.create(t.state.doc, [t.cursorWrapper.deco])), Ks.from(e)
            }
            const ra = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    subtree: !0
                },
                oa = Pr && Rr <= 11;
            class ia {
                constructor() {
                    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
                }
                set(t) {
                    this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset
                }
                clear() {
                    this.anchorNode = this.focusNode = null
                }
                eq(t) {
                    return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset
                }
            }
            class sa {
                constructor(t, e) {
                    this.view = t, this.handleDOMChange = e, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new ia, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(t => {
                        for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
                        Pr && Rr <= 11 && t.some(t => "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length) ? this.flushSoon() : this.flush()
                    }), oa && (this.onCharData = t => {
                        this.queue.push({
                            target: t.target,
                            type: "characterData",
                            oldValue: t.prevValue
                        }), this.flushSoon()
                    }), this.onSelectionChange = this.onSelectionChange.bind(this)
                }
                flushSoon() {
                    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
                        this.flushingSoon = -1, this.flush()
                    }, 20))
                }
                forceFlush() {
                    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
                }
                start() {
                    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, ra)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
                }
                stop() {
                    if (this.observer) {
                        let t = this.observer.takeRecords();
                        if (t.length) {
                            for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
                            window.setTimeout(() => this.flush(), 20)
                        }
                        this.observer.disconnect()
                    }
                    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
                }
                connectSelection() {
                    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
                }
                disconnectSelection() {
                    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
                }
                suppressSelectionUpdates() {
                    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50)
                }
                onSelectionChange() {
                    if (hi(this.view)) {
                        if (this.suppressingSelectionUpdates) return ei(this.view);
                        if (Pr && Rr <= 11 && !this.view.state.selection.empty) {
                            let t = this.view.domSelectionRange();
                            if (t.focusNode && fr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)) return this.flushSoon()
                        }
                        this.flush()
                    }
                }
                setCurSelection() {
                    this.currentSelection.set(this.view.domSelectionRange())
                }
                ignoreSelectionChange(t) {
                    if (!t.focusNode) return !0;
                    let e, n = new Set;
                    for (let o = t.focusNode; o; o = dr(o)) n.add(o);
                    for (let o = t.anchorNode; o; o = dr(o))
                        if (n.has(o)) {
                            e = o;
                            break
                        }
                    let r = e && this.view.docView.nearestDesc(e);
                    return r && r.ignoreMutation({
                        type: "selection",
                        target: 3 == e.nodeType ? e.parentNode : e
                    }) ? (this.setCurSelection(), !0) : void 0
                }
                pendingRecords() {
                    if (this.observer)
                        for (let t of this.observer.takeRecords()) this.queue.push(t);
                    return this.queue
                }
                flush() {
                    let {
                        view: t
                    } = this;
                    if (!t.docView || this.flushingSoon > -1) return;
                    let e = this.pendingRecords();
                    e.length && (this.queue = []);
                    let n = t.domSelectionRange(),
                        r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && hi(t) && !this.ignoreSelectionChange(n),
                        o = -1,
                        i = -1,
                        s = !1,
                        a = [];
                    if (t.editable)
                        for (let c = 0; c < e.length; c++) {
                            let t = this.registerMutation(e[c], a);
                            t && (o = o < 0 ? t.from : Math.min(t.from, o), i = i < 0 ? t.to : Math.max(t.to, i), t.typeOver && (s = !0))
                        }
                    if (Lr && a.length) {
                        let e = a.filter(t => "BR" == t.nodeName);
                        if (2 == e.length) {
                            let [t, n] = e;
                            t.parentNode && t.parentNode.parentNode == n.parentNode ? n.remove() : t.remove()
                        } else {
                            let {
                                focusNode: n
                            } = this.currentSelection;
                            for (let r of e) {
                                let e = r.parentNode;
                                !e || "LI" != e.nodeName || n && ua(t, n) == e || r.remove()
                            }
                        }
                    }
                    let l = null;
                    o < 0 && r && t.input.lastFocus > Date.now() - 200 && Math.max(t.input.lastTouch, t.input.lastClick.time) < Date.now() - 300 && xr(n) && (l = Zo(t)) && l.eq(Ke.near(t.state.doc.resolve(0), 1)) ? (t.input.lastFocus = 0, ei(t), this.currentSelection.set(n), t.scrollToSelection()) : (o > -1 || r) && (o > -1 && (t.docView.markDirty(o, i), ca(t)), this.handleDOMChange(o, i, s, a), t.docView && t.docView.dirty ? t.updateState(t.state) : this.currentSelection.eq(n) || ei(t), this.currentSelection.set(n))
                }
                registerMutation(t, e) {
                    if (e.indexOf(t.target) > -1) return null;
                    let n = this.view.docView.nearestDesc(t.target);
                    if ("attributes" == t.type && (n == this.view.docView || "contenteditable" == t.attributeName || "style" == t.attributeName && !t.oldValue && !t.target.getAttribute("style"))) return null;
                    if (!n || n.ignoreMutation(t)) return null;
                    if ("childList" == t.type) {
                        for (let n = 0; n < t.addedNodes.length; n++) {
                            let r = t.addedNodes[n];
                            e.push(r), 3 == r.nodeType && (this.lastChangedTextNode = r)
                        }
                        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(t.target)) return {
                            from: n.posBefore,
                            to: n.posAfter
                        };
                        let r = t.previousSibling,
                            o = t.nextSibling;
                        if (Pr && Rr <= 11 && t.addedNodes.length)
                            for (let e = 0; e < t.addedNodes.length; e++) {
                                let {
                                    previousSibling: n,
                                    nextSibling: i
                                } = t.addedNodes[e];
                                (!n || Array.prototype.indexOf.call(t.addedNodes, n) < 0) && (r = n), (!i || Array.prototype.indexOf.call(t.addedNodes, i) < 0) && (o = i)
                            }
                        let i = r && r.parentNode == t.target ? cr(r) + 1 : 0,
                            s = n.localPosFromDOM(t.target, i, -1),
                            a = o && o.parentNode == t.target ? cr(o) : t.target.childNodes.length,
                            l = n.localPosFromDOM(t.target, a, 1);
                        return {
                            from: s,
                            to: l
                        }
                    }
                    return "attributes" == t.type ? {
                        from: n.posAtStart - n.border,
                        to: n.posAtEnd + n.border
                    } : (this.lastChangedTextNode = t.target, {
                        from: n.posAtStart,
                        to: n.posAtEnd,
                        typeOver: t.target.nodeValue == t.oldValue
                    })
                }
            }
            let aa = new WeakMap,
                la = !1;

            function ca(t) {
                if (!aa.has(t) && (aa.set(t, null), -1 !== ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace))) {
                    if (t.requiresGeckoHackNode = Lr, la) return;
                    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), la = !0
                }
            }

            function da(t, e) {
                let n = e.startContainer,
                    r = e.startOffset,
                    o = e.endContainer,
                    i = e.endOffset,
                    s = t.domAtPos(t.state.selection.anchor);
                return fr(s.node, s.offset, o, i) && ([n, r, o, i] = [o, i, n, r]), {
                    anchorNode: n,
                    anchorOffset: r,
                    focusNode: o,
                    focusOffset: i
                }
            }

            function ha(t, e) {
                if (e.getComposedRanges) {
                    let n = e.getComposedRanges(t.root)[0];
                    if (n) return da(t, n)
                }
                let n;

                function r(t) {
                    t.preventDefault(), t.stopImmediatePropagation(), n = t.getTargetRanges()[0]
                }
                return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? da(t, n) : null
            }

            function ua(t, e) {
                for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
                    let e = t.docView.nearestDesc(n, !0);
                    if (e && e.node.isBlock) return n
                }
                return null
            }

            function pa(t, e, n) {
                let r, {
                        node: o,
                        fromOffset: i,
                        toOffset: s,
                        from: a,
                        to: l
                    } = t.docView.parseRange(e, n),
                    c = t.domSelectionRange(),
                    d = c.anchorNode;
                if (d && t.dom.contains(1 == d.nodeType ? d : d.parentNode) && (r = [{
                        node: d,
                        offset: c.anchorOffset
                    }], xr(c) || r.push({
                        node: c.focusNode,
                        offset: c.focusOffset
                    })), $r && 8 === t.input.lastKeyCode)
                    for (let g = s; g > i; g--) {
                        let t = o.childNodes[g - 1],
                            e = t.pmViewDesc;
                        if ("BR" == t.nodeName && !e) {
                            s = g;
                            break
                        }
                        if (!e || e.size) break
                    }
                let h = t.state.doc,
                    u = t.someProp("domParser") || ht.fromSchema(t.state.schema),
                    p = h.resolve(a),
                    f = null,
                    m = u.parse(o, {
                        topNode: p.parent,
                        topMatch: p.parent.contentMatchAt(p.index()),
                        topOpen: !0,
                        from: i,
                        to: s,
                        preserveWhitespace: "pre" != p.parent.type.whitespace || "full",
                        findPositions: r,
                        ruleFromNode: fa,
                        context: p
                    });
                if (r && null != r[0].pos) {
                    let t = r[0].pos,
                        e = r[1] && r[1].pos;
                    null == e && (e = t), f = {
                        anchor: t + a,
                        head: e + a
                    }
                }
                return {
                    doc: m,
                    sel: f,
                    from: a,
                    to: l
                }
            }

            function fa(t) {
                let e = t.pmViewDesc;
                if (e) return e.parseRule();
                if ("BR" == t.nodeName && t.parentNode) {
                    if (jr && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
                        let t = document.createElement("div");
                        return t.appendChild(document.createElement("li")), {
                            skip: t
                        }
                    }
                    if (t.parentNode.lastChild == t || jr && /^(tr|table)$/i.test(t.parentNode.nodeName)) return {
                        ignore: !0
                    }
                } else if ("IMG" == t.nodeName && t.getAttribute("mark-placeholder")) return {
                    ignore: !0
                };
                return null
            }
            const ma = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

            function ga(t, e, n, r, o) {
                let i = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
                if (t.input.compositionPendingChanges = 0, e < 0) {
                    let e = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null,
                        n = Zo(t, e);
                    if (n && !t.state.selection.eq(n)) {
                        if ($r && Fr && 13 === t.input.lastKeyCode && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", e => e(t, Sr(13, "Enter")))) return;
                        let r = t.state.tr.setSelection(n);
                        "pointer" == e ? r.setMeta("pointer", !0) : "key" == e && r.scrollIntoView(), i && r.setMeta("composition", i), t.dispatch(r)
                    }
                    return
                }
                let s = t.state.doc.resolve(e),
                    a = s.sharedDepth(n);
                e = s.before(a + 1), n = t.state.doc.resolve(n).after(a + 1);
                let l, c, d = t.state.selection,
                    h = pa(t, e, n),
                    u = t.state.doc,
                    p = u.slice(h.from, h.to);
                8 === t.input.lastKeyCode && Date.now() - 100 < t.input.lastKeyCodeTime ? (l = t.state.selection.to, c = "end") : (l = t.state.selection.from, c = "start"), t.input.lastKeyCode = null;
                let f = ka(p.content, h.doc.content, h.from, l, c);
                if (f && t.input.domChangeCount++, (Br && t.input.lastIOSEnter > Date.now() - 225 || Fr) && o.some(t => 1 == t.nodeType && !ma.test(t.nodeName)) && (!f || f.endA >= f.endB) && t.someProp("handleKeyDown", e => e(t, Sr(13, "Enter")))) return void(t.input.lastIOSEnter = 0);
                if (!f) {
                    if (!(r && d instanceof Ye && !d.empty && d.$head.sameParent(d.$anchor)) || t.composing || h.sel && h.sel.anchor != h.sel.head) {
                        if (h.sel) {
                            let e = ya(t, t.state.doc, h.sel);
                            if (e && !e.eq(t.state.selection)) {
                                let n = t.state.tr.setSelection(e);
                                i && n.setMeta("composition", i), t.dispatch(n)
                            }
                        }
                        return
                    }
                    f = {
                        start: d.from,
                        endA: d.to,
                        endB: d.to
                    }
                }
                t.state.selection.from < t.state.selection.to && f.start == f.endB && t.state.selection instanceof Ye && (f.start > t.state.selection.from && f.start <= t.state.selection.from + 2 && t.state.selection.from >= h.from ? f.start = t.state.selection.from : f.endA < t.state.selection.to && f.endA >= t.state.selection.to - 2 && t.state.selection.to <= h.to && (f.endB += t.state.selection.to - f.endA, f.endA = t.state.selection.to)), Pr && Rr <= 11 && f.endB == f.start + 1 && f.endA == f.start && f.start > h.from && "  " == h.doc.textBetween(f.start - h.from - 1, f.start - h.from + 1) && (f.start--, f.endA--, f.endB--);
                let m = h.doc.resolveNoCache(f.start - h.from),
                    g = h.doc.resolveNoCache(f.endB - h.from),
                    y = u.resolve(f.start),
                    b = m.sameParent(g) && m.parent.inlineContent && y.end() >= f.endA;
                if ((Br && t.input.lastIOSEnter > Date.now() - 225 && (!b || o.some(t => "DIV" == t.nodeName || "P" == t.nodeName)) || !b && m.pos < h.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(h.doc.textBetween(m.pos, g.pos, "", ""))) && t.someProp("handleKeyDown", e => e(t, Sr(13, "Enter")))) return void(t.input.lastIOSEnter = 0);
                if (t.state.selection.anchor > f.start && va(u, f.start, f.endA, m, g) && t.someProp("handleKeyDown", e => e(t, Sr(8, "Backspace")))) return void(Fr && $r && t.domObserver.suppressSelectionUpdates());
                $r && f.endB == f.start && (t.input.lastChromeDelete = Date.now()), Fr && !b && m.start() != g.start() && 0 == g.parentOffset && m.depth == g.depth && h.sel && h.sel.anchor == h.sel.head && h.sel.head == f.endA && (f.endB -= 2, g = h.doc.resolveNoCache(f.endB - h.from), setTimeout(() => {
                    t.someProp("handleKeyDown", (function(e) {
                        return e(t, Sr(13, "Enter"))
                    }))
                }, 20));
                let v, w = f.start,
                    k = f.endA,
                    x = e => {
                        let n = e || t.state.tr.replace(w, k, h.doc.slice(f.start - h.from, f.endB - h.from));
                        if (h.sel) {
                            let e = ya(t, n.doc, h.sel);
                            e && !($r && t.composing && e.empty && (f.start != f.endB || t.input.lastChromeDelete < Date.now() - 100) && (e.head == w || e.head == n.mapping.map(k) - 1) || Pr && e.empty && e.head == w) && n.setSelection(e)
                        }
                        return i && n.setMeta("composition", i), n.scrollIntoView()
                    };
                if (b)
                    if (m.pos == g.pos) {
                        Pr && Rr <= 11 && 0 == m.parentOffset && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => ei(t), 20));
                        let e = x(t.state.tr.delete(w, k)),
                            n = u.resolve(f.start).marksAcross(u.resolve(f.endA));
                        n && e.ensureMarks(n), t.dispatch(e)
                    } else if (f.endA == f.endB && (v = ba(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, f.endA - y.start())))) {
                    let e = x(t.state.tr);
                    "add" == v.type ? e.addMark(w, k, v.mark) : e.removeMark(w, k, v.mark), t.dispatch(e)
                } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
                    let e = m.parent.textBetween(m.parentOffset, g.parentOffset),
                        n = () => x(t.state.tr.insertText(e, w, k));
                    t.someProp("handleTextInput", r => r(t, w, k, e, n)) || t.dispatch(n())
                } else t.dispatch(x());
                else t.dispatch(x())
            }

            function ya(t, e, n) {
                return Math.max(n.anchor, n.head) > e.content.size ? null : di(t, e.resolve(n.anchor), e.resolve(n.head))
            }

            function ba(t, e) {
                let n, r, o, i = t.firstChild.marks,
                    s = e.firstChild.marks,
                    a = i,
                    l = s;
                for (let d = 0; d < s.length; d++) a = s[d].removeFromSet(a);
                for (let d = 0; d < i.length; d++) l = i[d].removeFromSet(l);
                if (1 == a.length && 0 == l.length) r = a[0], n = "add", o = t => t.mark(r.addToSet(t.marks));
                else {
                    if (0 != a.length || 1 != l.length) return null;
                    r = l[0], n = "remove", o = t => t.mark(r.removeFromSet(t.marks))
                }
                let c = [];
                for (let d = 0; d < e.childCount; d++) c.push(o(e.child(d)));
                if (h.from(c).eq(t)) return {
                    mark: r,
                    type: n
                }
            }

            function va(t, e, n, r, o) {
                if (n - e <= o.pos - r.pos || wa(r, !0, !1) < o.pos) return !1;
                let i = t.resolve(e);
                if (!r.parent.isTextblock) {
                    let t = i.nodeAfter;
                    return null != t && n == e + t.nodeSize
                }
                if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                let s = t.resolve(wa(i, !0, !0));
                return !(!s.parent.isTextblock || s.pos > n || wa(s, !0, !1) < n) && r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            }

            function wa(t, e, n) {
                let r = t.depth,
                    o = e ? t.end() : t.pos;
                while (r > 0 && (e || t.indexAfter(r) == t.node(r).childCount)) r--, o++, e = !1;
                if (n) {
                    let e = t.node(r).maybeChild(t.indexAfter(r));
                    while (e && !e.isLeaf) e = e.firstChild, o++
                }
                return o
            }

            function ka(t, e, n, r, o) {
                let i = t.findDiffStart(e, n);
                if (null == i) return null;
                let {
                    a: s,
                    b: a
                } = t.findDiffEnd(e, n + t.size, n + e.size);
                if ("end" == o) {
                    let t = Math.max(0, i - Math.min(s, a));
                    r -= s + t - i
                }
                if (s < i && t.size < e.size) {
                    let t = r <= i && r >= s ? i - r : 0;
                    i -= t, i && i < e.size && xa(e.textBetween(i - 1, i + 1)) && (i += t ? 1 : -1), a = i + (a - s), s = i
                } else if (a < i) {
                    let e = r <= i && r >= a ? i - r : 0;
                    i -= e, i && i < t.size && xa(t.textBetween(i - 1, i + 1)) && (i += e ? 1 : -1), s = i + (s - a), a = i
                }
                return {
                    start: i,
                    endA: s,
                    endB: a
                }
            }

            function xa(t) {
                if (2 != t.length) return !1;
                let e = t.charCodeAt(0),
                    n = t.charCodeAt(1);
                return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319
            }
            class Sa {
                constructor(t, e) {
                    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Zi, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = e, this.state = e.state, this.directPlugins = e.plugins || [], this.directPlugins.forEach(Ea), this.dispatch = this.dispatch.bind(this), this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = Oa(this), Ca(this), this.nodeViews = Aa(this), this.docView = Ro(this.state.doc, Ma(this), na(this), this.dom, this), this.domObserver = new sa(this, (t, e, n, r) => ga(this, t, e, n, r)), this.domObserver.start(), ts(this), this.updatePluginViews()
                }
                get composing() {
                    return this.input.composing
                }
                get props() {
                    if (this._props.state != this.state) {
                        let t = this._props;
                        this._props = {};
                        for (let e in t) this._props[e] = t[e];
                        this._props.state = this.state
                    }
                    return this._props
                }
                update(t) {
                    t.handleDOMEvents != this._props.handleDOMEvents && rs(this);
                    let e = this._props;
                    this._props = t, t.plugins && (t.plugins.forEach(Ea), this.directPlugins = t.plugins), this.updateStateInner(t.state, e)
                }
                setProps(t) {
                    let e = {};
                    for (let n in this._props) e[n] = this._props[n];
                    e.state = this.state;
                    for (let n in t) e[n] = t[n];
                    this.update(e)
                }
                updateState(t) {
                    this.updateStateInner(t, this._props)
                }
                updateStateInner(t, e) {
                    var n;
                    let r = this.state,
                        o = !1,
                        i = !1;
                    t.storedMarks && this.composing && (Ms(this), i = !0), this.state = t;
                    let s = r.plugins != t.plugins || this._props.plugins != e.plugins;
                    if (s || this._props.plugins != e.plugins || this._props.nodeViews != e.nodeViews) {
                        let t = Aa(this);
                        Na(t, this.nodeViews) && (this.nodeViews = t, o = !0)
                    }(s || e.handleDOMEvents != this._props.handleDOMEvents) && rs(this), this.editable = Oa(this), Ca(this);
                    let a = na(this),
                        l = Ma(this),
                        c = r.plugins == t.plugins || r.doc.eq(t.doc) ? t.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve" : "reset",
                        d = o || !this.docView.matchesNode(t.doc, l, a);
                    !d && t.selection.eq(r.selection) || (i = !0);
                    let h = "preserve" == c && i && null == this.dom.style.overflowAnchor && Gr(this);
                    if (i) {
                        this.domObserver.stop();
                        let e = d && (Pr || $r) && !this.composing && !r.selection.empty && !t.selection.empty && Ta(r.selection, t.selection);
                        if (d) {
                            let n = $r ? this.trackWrites = this.domSelectionRange().focusNode : null;
                            this.composing && (this.input.compositionNode = Cs(this)), !o && this.docView.update(t.doc, l, a, this) || (this.docView.updateOuterDeco(l), this.docView.destroy(), this.docView = Ro(t.doc, l, a, this.dom, this)), n && !this.trackWrites && (e = !0)
                        }
                        e || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && pi(this)) ? ei(this, e) : (li(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start()
                    }
                    this.updatePluginViews(r), (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) && !r.doc.eq(t.doc) && this.updateDraggedNode(this.dragging, r), "reset" == c ? this.dom.scrollTop = 0 : "to selection" == c ? this.scrollToSelection() : h && Xr(h)
                }
                scrollToSelection() {
                    let t = this.domSelectionRange().focusNode;
                    if (t && this.dom.contains(1 == t.nodeType ? t : t.parentNode))
                        if (this.someProp("handleScrollToSelection", t => t(this)));
                        else if (this.state.selection instanceof Qe) {
                        let e = this.docView.domAfterPos(this.state.selection.from);
                        1 == e.nodeType && Jr(this, e.getBoundingClientRect(), t)
                    } else Jr(this, this.coordsAtPos(this.state.selection.head, 1), t);
                    else;
                }
                destroyPluginViews() {
                    let t;
                    while (t = this.pluginViews.pop()) t.destroy && t.destroy()
                }
                updatePluginViews(t) {
                    if (t && t.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                        for (let e = 0; e < this.pluginViews.length; e++) {
                            let n = this.pluginViews[e];
                            n.update && n.update(this, t)
                        } else {
                            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
                            for (let t = 0; t < this.directPlugins.length; t++) {
                                let e = this.directPlugins[t];
                                e.spec.view && this.pluginViews.push(e.spec.view(this))
                            }
                            for (let t = 0; t < this.state.plugins.length; t++) {
                                let e = this.state.plugins[t];
                                e.spec.view && this.pluginViews.push(e.spec.view(this))
                            }
                        }
                }
                updateDraggedNode(t, e) {
                    let n = t.node,
                        r = -1;
                    if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;
                    else {
                        let t = n.from + (this.state.doc.content.size - e.doc.content.size),
                            o = t > 0 && this.state.doc.nodeAt(t);
                        o == n.node && (r = t)
                    }
                    this.dragging = new Ls(t.slice, t.move, r < 0 ? void 0 : Qe.create(this.state.doc, r))
                }
                someProp(t, e) {
                    let n, r = this._props && this._props[t];
                    if (null != r && (n = e ? e(r) : r)) return n;
                    for (let i = 0; i < this.directPlugins.length; i++) {
                        let r = this.directPlugins[i].props[t];
                        if (null != r && (n = e ? e(r) : r)) return n
                    }
                    let o = this.state.plugins;
                    if (o)
                        for (let i = 0; i < o.length; i++) {
                            let r = o[i].props[t];
                            if (null != r && (n = e ? e(r) : r)) return n
                        }
                }
                hasFocus() {
                    if (Pr) {
                        let t = this.root.activeElement;
                        if (t == this.dom) return !0;
                        if (!t || !this.dom.contains(t)) return !1;
                        while (t && this.dom != t && this.dom.contains(t)) {
                            if ("false" == t.contentEditable) return !1;
                            t = t.parentElement
                        }
                        return !0
                    }
                    return this.root.activeElement == this.dom
                }
                focus() {
                    this.domObserver.stop(), this.editable && to(this.dom), ei(this), this.domObserver.start()
                }
                get root() {
                    let t = this._root;
                    if (null == t)
                        for (let e = this.dom.parentNode; e; e = e.parentNode)
                            if (9 == e.nodeType || 11 == e.nodeType && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
                    return t || document
                }
                updateRoot() {
                    this._root = null
                }
                posAtCoords(t) {
                    return lo(this, t)
                }
                coordsAtPos(t, e = 1) {
                    return po(this, t, e)
                }
                domAtPos(t, e = 0) {
                    return this.docView.domFromPos(t, e)
                }
                nodeDOM(t) {
                    let e = this.docView.descAt(t);
                    return e ? e.nodeDOM : null
                }
                posAtDOM(t, e, n = -1) {
                    let r = this.docView.posFromDOM(t, e, n);
                    if (null == r) throw new RangeError("DOM position not inside the editor");
                    return r
                }
                endOfTextblock(t, e) {
                    return So(this, e || this.state, t)
                }
                pasteHTML(t, e) {
                    return Ps(this, "", t, !1, e || new ClipboardEvent("paste"))
                }
                pasteText(t, e) {
                    return Ps(this, t, null, !0, e || new ClipboardEvent("paste"))
                }
                serializeForClipboard(t) {
                    return Ri(this, t)
                }
                destroy() {
                    this.docView && (ns(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], na(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, pr())
                }
                get isDestroyed() {
                    return null == this.docView
                }
                dispatchEvent(t) {
                    return as(this, t)
                }
                domSelectionRange() {
                    let t = this.domSelection();
                    return t ? jr && 11 === this.root.nodeType && Mr(this.dom.ownerDocument) == this.dom && ha(this, t) || t : {
                        focusNode: null,
                        focusOffset: 0,
                        anchorNode: null,
                        anchorOffset: 0
                    }
                }
                domSelection() {
                    return this.root.getSelection()
                }
            }

            function Ma(t) {
                let e = Object.create(null);
                return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", n => {
                    if ("function" == typeof n && (n = n(t.state)), n)
                        for (let t in n) "class" == t ? e.class += " " + n[t] : "style" == t ? e.style = (e.style ? e.style + ";" : "") + n[t] : e[t] || "contenteditable" == t || "nodeName" == t || (e[t] = String(n[t]))
                }), e.translate || (e.translate = "no"), [Vs.node(0, t.state.doc.content.size, e)]
            }

            function Ca(t) {
                if (t.markCursor) {
                    let e = document.createElement("img");
                    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = {
                        dom: e,
                        deco: Vs.widget(t.state.selection.from, e, {
                            raw: !0,
                            marks: t.markCursor
                        })
                    }
                } else t.cursorWrapper = null
            }

            function Oa(t) {
                return !t.someProp("editable", e => !1 === e(t.state))
            }

            function Ta(t, e) {
                let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
                return t.$anchor.start(n) != e.$anchor.start(n)
            }

            function Aa(t) {
                let e = Object.create(null);

                function n(t) {
                    for (let n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n])
                }
                return t.someProp("nodeViews", n), t.someProp("markViews", n), e
            }

            function Na(t, e) {
                let n = 0,
                    r = 0;
                for (let o in t) {
                    if (t[o] != e[o]) return !0;
                    n++
                }
                for (let o in e) r++;
                return n != r
            }

            function Ea(t) {
                if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
            }
            Sa.prototype.dispatch = function(t) {
                let e = this._props.dispatchTransaction;
                e ? e.call(this, t) : this.updateState(this.state.apply(t))
            };
            for (var Da = {
                    8: "Backspace",
                    9: "Tab",
                    10: "Enter",
                    12: "NumLock",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    44: "PrintScreen",
                    45: "Insert",
                    46: "Delete",
                    59: ";",
                    61: "=",
                    91: "Meta",
                    92: "Meta",
                    106: "*",
                    107: "+",
                    108: ",",
                    109: "-",
                    110: ".",
                    111: "/",
                    144: "NumLock",
                    145: "ScrollLock",
                    160: "Shift",
                    161: "Shift",
                    162: "Control",
                    163: "Control",
                    164: "Alt",
                    165: "Alt",
                    173: "-",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, Pa = {
                    48: ")",
                    49: "!",
                    50: "@",
                    51: "#",
                    52: "$",
                    53: "%",
                    54: "^",
                    55: "&",
                    56: "*",
                    57: "(",
                    59: ":",
                    61: "+",
                    173: "_",
                    186: ":",
                    187: "+",
                    188: "<",
                    189: "_",
                    190: ">",
                    191: "?",
                    192: "~",
                    219: "{",
                    220: "|",
                    221: "}",
                    222: '"'
                }, Ra = "undefined" != typeof navigator && /Mac/.test(navigator.platform), La = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Ia = 0; Ia < 10; Ia++) Da[48 + Ia] = Da[96 + Ia] = String(Ia);
            for (Ia = 1; Ia <= 24; Ia++) Da[Ia + 111] = "F" + Ia;
            for (Ia = 65; Ia <= 90; Ia++) Da[Ia] = String.fromCharCode(Ia + 32), Pa[Ia] = String.fromCharCode(Ia);
            for (var $a in Da) Pa.hasOwnProperty($a) || (Pa[$a] = Da[$a]);

            function za(t) {
                var e = Ra && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || La && t.shiftKey && t.key && 1 == t.key.length || "Unidentified" == t.key,
                    n = !e && t.key || (t.shiftKey ? Pa : Da)[t.keyCode] || t.key || "Unidentified";
                return "Esc" == n && (n = "Escape"), "Del" == n && (n = "Delete"), "Left" == n && (n = "ArrowLeft"), "Up" == n && (n = "ArrowUp"), "Right" == n && (n = "ArrowRight"), "Down" == n && (n = "ArrowDown"), n
            }
            const ja = "undefined" != typeof navigator && /Mac|iP(hone|[oa]d)/.test(navigator.platform),
                Ba = "undefined" != typeof navigator && /Win/.test(navigator.platform);

            function Ha(t) {
                let e, n, r, o, i = t.split(/-(?!$)/),
                    s = i[i.length - 1];
                "Space" == s && (s = " ");
                for (let a = 0; a < i.length - 1; a++) {
                    let t = i[a];
                    if (/^(cmd|meta|m)$/i.test(t)) o = !0;
                    else if (/^a(lt)?$/i.test(t)) e = !0;
                    else if (/^(c|ctrl|control)$/i.test(t)) n = !0;
                    else if (/^s(hift)?$/i.test(t)) r = !0;
                    else {
                        if (!/^mod$/i.test(t)) throw new Error("Unrecognized modifier name: " + t);
                        ja ? o = !0 : n = !0
                    }
                }
                return e && (s = "Alt-" + s), n && (s = "Ctrl-" + s), o && (s = "Meta-" + s), r && (s = "Shift-" + s), s
            }

            function Va(t) {
                let e = Object.create(null);
                for (let n in t) e[Ha(n)] = t[n];
                return e
            }

            function Fa(t, e, n = !0) {
                return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t
            }

            function _a(t) {
                return new mn({
                    props: {
                        handleKeyDown: Wa(t)
                    }
                })
            }

            function Wa(t) {
                let e = Va(t);
                return function(t, n) {
                    let r, o = za(n),
                        i = e[Fa(o, n)];
                    if (i && i(t.state, t.dispatch, t)) return !0;
                    if (1 == o.length && " " != o) {
                        if (n.shiftKey) {
                            let r = e[Fa(o, n, !1)];
                            if (r && r(t.state, t.dispatch, t)) return !0
                        }
                        if ((n.altKey || n.metaKey || n.ctrlKey) && !(Ba && n.ctrlKey && n.altKey) && (r = Da[n.keyCode]) && r != o) {
                            let o = e[Fa(r, n)];
                            if (o && o(t.state, t.dispatch, t)) return !0
                        }
                    }
                    return !1
                }
            }
            var qa = Object.defineProperty,
                Ka = (t, e) => {
                    for (var n in e) qa(t, n, {
                        get: e[n],
                        enumerable: !0
                    })
                };

            function Ua(t) {
                const {
                    state: e,
                    transaction: n
                } = t;
                let {
                    selection: r
                } = n, {
                    doc: o
                } = n, {
                    storedMarks: i
                } = n;
                return { ...e,
                    apply: e.apply.bind(e),
                    applyTransaction: e.applyTransaction.bind(e),
                    plugins: e.plugins,
                    schema: e.schema,
                    reconfigure: e.reconfigure.bind(e),
                    toJSON: e.toJSON.bind(e),
                    get storedMarks() {
                        return i
                    },
                    get selection() {
                        return r
                    },
                    get doc() {
                        return o
                    },
                    get tr() {
                        return r = n.selection, o = n.doc, i = n.storedMarks, n
                    }
                }
            }
            var Ja = class {
                    constructor(t) {
                        this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state
                    }
                    get hasCustomState() {
                        return !!this.customState
                    }
                    get state() {
                        return this.customState || this.editor.state
                    }
                    get commands() {
                        const {
                            rawCommands: t,
                            editor: e,
                            state: n
                        } = this, {
                            view: r
                        } = e, {
                            tr: o
                        } = n, i = this.buildProps(o);
                        return Object.fromEntries(Object.entries(t).map(([t, e]) => {
                            const n = (...t) => {
                                const n = e(...t)(i);
                                return o.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(o), n
                            };
                            return [t, n]
                        }))
                    }
                    get chain() {
                        return () => this.createChain()
                    }
                    get can() {
                        return () => this.createCan()
                    }
                    createChain(t, e = !0) {
                        const {
                            rawCommands: n,
                            editor: r,
                            state: o
                        } = this, {
                            view: i
                        } = r, s = [], a = !!t, l = t || o.tr, c = () => (a || !e || l.getMeta("preventDispatch") || this.hasCustomState || i.dispatch(l), s.every(t => !0 === t)), d = { ...Object.fromEntries(Object.entries(n).map(([t, n]) => {
                                const r = (...t) => {
                                    const r = this.buildProps(l, e),
                                        o = n(...t)(r);
                                    return s.push(o), d
                                };
                                return [t, r]
                            })),
                            run: c
                        };
                        return d
                    }
                    createCan(t) {
                        const {
                            rawCommands: e,
                            state: n
                        } = this, r = !1, o = t || n.tr, i = this.buildProps(o, r), s = Object.fromEntries(Object.entries(e).map(([t, e]) => [t, (...t) => e(...t)({ ...i,
                            dispatch: void 0
                        })]));
                        return { ...s,
                            chain: () => this.createChain(o, r)
                        }
                    }
                    buildProps(t, e = !0) {
                        const {
                            rawCommands: n,
                            editor: r,
                            state: o
                        } = this, {
                            view: i
                        } = r, s = {
                            tr: t,
                            editor: r,
                            view: i,
                            state: Ua({
                                state: o,
                                transaction: t
                            }),
                            dispatch: e ? () => {} : void 0,
                            chain: () => this.createChain(t, e),
                            can: () => this.createCan(t),
                            get commands() {
                                return Object.fromEntries(Object.entries(n).map(([t, e]) => [t, (...t) => e(...t)(s)]))
                            }
                        };
                        return s
                    }
                },
                Ga = {};
            Ka(Ga, {
                blur: () => Ya,
                clearContent: () => Xa,
                clearNodes: () => Qa,
                command: () => Za,
                createParagraphNear: () => tl,
                cut: () => el,
                deleteCurrentNode: () => nl,
                deleteNode: () => ol,
                deleteRange: () => il,
                deleteSelection: () => sl,
                enter: () => al,
                exitCode: () => ll,
                extendMarkRange: () => ml,
                first: () => gl,
                focus: () => xl,
                forEach: () => Sl,
                insertContent: () => Ml,
                insertContentAt: () => El,
                joinBackward: () => Rl,
                joinDown: () => Pl,
                joinForward: () => Ll,
                joinItemBackward: () => Il,
                joinItemForward: () => $l,
                joinTextblockBackward: () => zl,
                joinTextblockForward: () => jl,
                joinUp: () => Dl,
                keyboardShortcut: () => Vl,
                lift: () => _l,
                liftEmptyBlock: () => Wl,
                liftListItem: () => ql,
                newlineInCode: () => Kl,
                resetAttributes: () => Gl,
                scrollIntoView: () => Yl,
                selectAll: () => Xl,
                selectNodeBackward: () => Ql,
                selectNodeForward: () => Zl,
                selectParentNode: () => tc,
                selectTextblockEnd: () => ec,
                selectTextblockStart: () => nc,
                setContent: () => oc,
                setMark: () => Xc,
                setMeta: () => Qc,
                setNode: () => Zc,
                setNodeSelection: () => td,
                setTextDirection: () => ed,
                setTextSelection: () => nd,
                sinkListItem: () => rd,
                splitBlock: () => id,
                splitListItem: () => sd,
                toggleList: () => cd,
                toggleMark: () => dd,
                toggleNode: () => hd,
                toggleWrap: () => ud,
                undoInputRule: () => pd,
                unsetAllMarks: () => fd,
                unsetMark: () => md,
                unsetTextDirection: () => gd,
                updateAttributes: () => yd,
                wrapIn: () => bd,
                wrapInList: () => vd
            });
            var Ya = () => ({
                    editor: t,
                    view: e
                }) => (requestAnimationFrame(() => {
                    var n;
                    t.isDestroyed || (e.dom.blur(), null == (n = null == window ? void 0 : window.getSelection()) || n.removeAllRanges())
                }), !0),
                Xa = (t = !0) => ({
                    commands: e
                }) => e.setContent("", {
                    emitUpdate: t
                }),
                Qa = () => ({
                    state: t,
                    tr: e,
                    dispatch: n
                }) => {
                    const {
                        selection: r
                    } = e, {
                        ranges: o
                    } = r;
                    return !n || (o.forEach(({
                        $from: n,
                        $to: r
                    }) => {
                        t.doc.nodesBetween(n.pos, r.pos, (t, n) => {
                            if (t.type.isText) return;
                            const {
                                doc: r,
                                mapping: o
                            } = e, i = r.resolve(o.map(n)), s = r.resolve(o.map(n + t.nodeSize)), a = i.blockRange(s);
                            if (!a) return;
                            const l = ie(a);
                            if (t.type.isTextblock) {
                                const {
                                    defaultType: t
                                } = i.parent.contentMatchAt(i.index());
                                e.setNodeMarkup(a.start, t)
                            }(l || 0 === l) && e.lift(a, l)
                        })
                    }), !0)
                },
                Za = t => e => t(e),
                tl = () => ({
                    state: t,
                    dispatch: e
                }) => jn(t, e),
                el = (t, e) => ({
                    editor: n,
                    tr: r
                }) => {
                    const {
                        state: o
                    } = n, i = o.doc.slice(t.from, t.to);
                    r.deleteRange(t.from, t.to);
                    const s = r.mapping.map(e);
                    return r.insert(s, i.content), r.setSelection(new Ye(r.doc.resolve(Math.max(s - 1, 0)))), !0
                },
                nl = () => ({
                    tr: t,
                    dispatch: e
                }) => {
                    const {
                        selection: n
                    } = t, r = n.$anchor.node();
                    if (r.content.size > 0) return !1;
                    const o = t.selection.$anchor;
                    for (let i = o.depth; i > 0; i -= 1) {
                        const n = o.node(i);
                        if (n.type === r.type) {
                            if (e) {
                                const e = o.before(i),
                                    n = o.after(i);
                                t.delete(e, n).scrollIntoView()
                            }
                            return !0
                        }
                    }
                    return !1
                };

            function rl(t, e) {
                if ("string" === typeof t) {
                    if (!e.nodes[t]) throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
                    return e.nodes[t]
                }
                return t
            }
            var ol = t => ({
                    tr: e,
                    state: n,
                    dispatch: r
                }) => {
                    const o = rl(t, n.schema),
                        i = e.selection.$anchor;
                    for (let t = i.depth; t > 0; t -= 1) {
                        const n = i.node(t);
                        if (n.type === o) {
                            if (r) {
                                const n = i.before(t),
                                    r = i.after(t);
                                e.delete(n, r).scrollIntoView()
                            }
                            return !0
                        }
                    }
                    return !1
                },
                il = t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    const {
                        from: r,
                        to: o
                    } = t;
                    return n && e.delete(r, o), !0
                },
                sl = () => ({
                    state: t,
                    dispatch: e
                }) => vn(t, e),
                al = () => ({
                    commands: t
                }) => t.keyboardShortcut("Enter"),
                ll = () => ({
                    state: t,
                    dispatch: e
                }) => zn(t, e);

            function cl(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }

            function dl(t, e, n = {
                strict: !0
            }) {
                const r = Object.keys(e);
                return !r.length || r.every(r => n.strict ? e[r] === t[r] : cl(e[r]) ? e[r].test(t[r]) : e[r] === t[r])
            }

            function hl(t, e, n = {}) {
                return t.find(t => t.type === e && dl(Object.fromEntries(Object.keys(n).map(e => [e, t.attrs[e]])), n))
            }

            function ul(t, e, n = {}) {
                return !!hl(t, e, n)
            }

            function pl(t, e, n) {
                var r;
                if (!t || !e) return;
                let o = t.parent.childAfter(t.parentOffset);
                if (o.node && o.node.marks.some(t => t.type === e) || (o = t.parent.childBefore(t.parentOffset)), !o.node || !o.node.marks.some(t => t.type === e)) return;
                n = n || (null == (r = o.node.marks[0]) ? void 0 : r.attrs);
                const i = hl([...o.node.marks], e, n);
                if (!i) return;
                let s = o.index,
                    a = t.start() + o.offset,
                    l = s + 1,
                    c = a + o.node.nodeSize;
                while (s > 0 && ul([...t.parent.child(s - 1).marks], e, n)) s -= 1, a -= t.parent.child(s).nodeSize;
                while (l < t.parent.childCount && ul([...t.parent.child(l).marks], e, n)) c += t.parent.child(l).nodeSize, l += 1;
                return {
                    from: a,
                    to: c
                }
            }

            function fl(t, e) {
                if ("string" === typeof t) {
                    if (!e.marks[t]) throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
                    return e.marks[t]
                }
                return t
            }
            var ml = (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    const i = fl(t, r.schema),
                        {
                            doc: s,
                            selection: a
                        } = n,
                        {
                            $from: l,
                            from: c,
                            to: d
                        } = a;
                    if (o) {
                        const t = pl(l, i, e);
                        if (t && t.from <= c && t.to >= d) {
                            const e = Ye.create(s, t.from, t.to);
                            n.setSelection(e)
                        }
                    }
                    return !0
                },
                gl = t => e => {
                    const n = "function" === typeof t ? t(e) : t;
                    for (let t = 0; t < n.length; t += 1)
                        if (n[t](e)) return !0;
                    return !1
                };

            function yl(t) {
                return t instanceof Ye
            }

            function bl(t = 0, e = 0, n = 0) {
                return Math.min(Math.max(t, e), n)
            }

            function vl(t, e = null) {
                if (!e) return null;
                const n = Ke.atStart(t),
                    r = Ke.atEnd(t);
                if ("start" === e || !0 === e) return n;
                if ("end" === e) return r;
                const o = n.from,
                    i = r.to;
                return "all" === e ? Ye.create(t, bl(0, o, i), bl(t.content.size, o, i)) : Ye.create(t, bl(e, o, i), bl(e, o, i))
            }

            function wl() {
                return "Android" === navigator.platform || /android/i.test(navigator.userAgent)
            }

            function kl() {
                return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            }
            var xl = (t = null, e = {}) => ({
                    editor: n,
                    view: r,
                    tr: o,
                    dispatch: i
                }) => {
                    e = {
                        scrollIntoView: !0,
                        ...e
                    };
                    const s = () => {
                        (kl() || wl()) && r.dom.focus(), requestAnimationFrame(() => {
                            n.isDestroyed || (r.focus(), (null == e ? void 0 : e.scrollIntoView) && n.commands.scrollIntoView())
                        })
                    };
                    if (r.hasFocus() && null === t || !1 === t) return !0;
                    if (i && null === t && !yl(n.state.selection)) return s(), !0;
                    const a = vl(o.doc, t) || n.state.selection,
                        l = n.state.selection.eq(a);
                    return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0
                },
                Sl = (t, e) => n => t.every((t, r) => e(t, { ...n,
                    index: r
                })),
                Ml = (t, e) => ({
                    tr: n,
                    commands: r
                }) => r.insertContentAt({
                    from: n.selection.from,
                    to: n.selection.to
                }, t, e),
                Cl = t => {
                    const e = t.childNodes;
                    for (let n = e.length - 1; n >= 0; n -= 1) {
                        const r = e[n];
                        3 === r.nodeType && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : 1 === r.nodeType && Cl(r)
                    }
                    return t
                };

            function Ol(t) {
                if ("undefined" === typeof window) throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
                const e = `<body>${t}</body>`,
                    n = (new window.DOMParser).parseFromString(e, "text/html").body;
                return Cl(n)
            }

            function Tl(t, e, n) {
                if (t instanceof $ || t instanceof h) return t;
                n = {
                    slice: !0,
                    parseOptions: {},
                    ...n
                };
                const r = "object" === typeof t && null !== t,
                    o = "string" === typeof t;
                if (r) try {
                    const r = Array.isArray(t) && t.length > 0;
                    if (r) return h.fromArray(t.map(t => e.nodeFromJSON(t)));
                    const o = e.nodeFromJSON(t);
                    return n.errorOnInvalidContent && o.check(), o
                } catch (i) {
                    if (n.errorOnInvalidContent) throw new Error("[tiptap error]: Invalid JSON content", {
                        cause: i
                    });
                    return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", i), Tl("", e, n)
                }
                if (o) {
                    if (n.errorOnInvalidContent) {
                        let r = !1,
                            o = "";
                        const i = new at({
                            topNode: e.spec.topNode,
                            marks: e.spec.marks,
                            nodes: e.spec.nodes.append({
                                __tiptap__private__unknown__catch__all__node: {
                                    content: "inline*",
                                    group: "block",
                                    parseDOM: [{
                                        tag: "*",
                                        getAttrs: t => (r = !0, o = "string" === typeof t ? t : t.outerHTML, null)
                                    }]
                                }
                            })
                        });
                        if (n.slice ? ht.fromSchema(i).parseSlice(Ol(t), n.parseOptions) : ht.fromSchema(i).parse(Ol(t), n.parseOptions), n.errorOnInvalidContent && r) throw new Error("[tiptap error]: Invalid HTML content", {
                            cause: new Error("Invalid element found: " + o)
                        })
                    }
                    const r = ht.fromSchema(e);
                    return n.slice ? r.parseSlice(Ol(t), n.parseOptions).content : r.parse(Ol(t), n.parseOptions)
                }
                return Tl("", e, n)
            }

            function Al(t, e, n) {
                const r = t.steps.length - 1;
                if (r < e) return;
                const o = t.steps[r];
                if (!(o instanceof Qt || o instanceof Zt)) return;
                const i = t.mapping.maps[r];
                let s = 0;
                i.forEach((t, e, n, r) => {
                    0 === s && (s = r)
                }), t.setSelection(Ke.near(t.doc.resolve(s), n))
            }
            var Nl = t => !("type" in t),
                El = (t, e, n) => ({
                    tr: r,
                    dispatch: o,
                    editor: i
                }) => {
                    var s;
                    if (o) {
                        let o;
                        n = {
                            parseOptions: i.options.parseOptions,
                            updateSelection: !0,
                            applyInputRules: !1,
                            applyPasteRules: !1,
                            ...n
                        };
                        const l = t => {
                                i.emit("contentError", {
                                    editor: i,
                                    error: t,
                                    disableCollaboration: () => {
                                        "collaboration" in i.storage && "object" === typeof i.storage.collaboration && i.storage.collaboration && (i.storage.collaboration.isDisabled = !0)
                                    }
                                })
                            },
                            c = {
                                preserveWhitespace: "full",
                                ...n.parseOptions
                            };
                        if (!n.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError) try {
                            Tl(e, i.schema, {
                                parseOptions: c,
                                errorOnInvalidContent: !0
                            })
                        } catch (a) {
                            l(a)
                        }
                        try {
                            o = Tl(e, i.schema, {
                                parseOptions: c,
                                errorOnInvalidContent: null != (s = n.errorOnInvalidContent) ? s : i.options.enableContentCheck
                            })
                        } catch (a) {
                            return l(a), !1
                        }
                        let {
                            from: d,
                            to: u
                        } = "number" === typeof t ? {
                            from: t,
                            to: t
                        } : {
                            from: t.from,
                            to: t.to
                        }, p = !0, f = !0;
                        const m = Nl(o) ? o : [o];
                        if (m.forEach(t => {
                                t.check(), p = !!p && (t.isText && 0 === t.marks.length), f = !!f && t.isBlock
                            }), d === u && f) {
                            const {
                                parent: t
                            } = r.doc.resolve(d), e = t.isTextblock && !t.type.spec.code && !t.childCount;
                            e && (d -= 1, u += 1)
                        }
                        let g;
                        if (p) {
                            if (Array.isArray(e)) g = e.map(t => t.text || "").join("");
                            else if (e instanceof h) {
                                let t = "";
                                e.forEach(e => {
                                    e.text && (t += e.text)
                                }), g = t
                            } else g = "object" === typeof e && e && e.text ? e.text : e;
                            r.insertText(g, d, u)
                        } else {
                            g = o;
                            const t = r.doc.resolve(d),
                                e = t.node(),
                                n = 0 === t.parentOffset,
                                i = e.isText || e.isTextblock,
                                s = e.content.size > 0;
                            n && i && s && (d = Math.max(0, d - 1)), r.replaceWith(d, u, g)
                        }
                        n.updateSelection && Al(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
                            from: d,
                            text: g
                        }), n.applyPasteRules && r.setMeta("applyPasteRules", {
                            from: d,
                            text: g
                        })
                    }
                    return !0
                },
                Dl = () => ({
                    state: t,
                    dispatch: e
                }) => Pn(t, e),
                Pl = () => ({
                    state: t,
                    dispatch: e
                }) => Rn(t, e),
                Rl = () => ({
                    state: t,
                    dispatch: e
                }) => kn(t, e),
                Ll = () => ({
                    state: t,
                    dispatch: e
                }) => Nn(t, e),
                Il = () => ({
                    state: t,
                    dispatch: e,
                    tr: n
                }) => {
                    try {
                        const r = xe(t.doc, t.selection.$from.pos, -1);
                        return null !== r && void 0 !== r && (n.join(r, 2), e && e(n), !0)
                    } catch {
                        return !1
                    }
                },
                $l = () => ({
                    state: t,
                    dispatch: e,
                    tr: n
                }) => {
                    try {
                        const r = xe(t.doc, t.selection.$from.pos, 1);
                        return null !== r && void 0 !== r && (n.join(r, 2), e && e(n), !0)
                    } catch {
                        return !1
                    }
                },
                zl = () => ({
                    state: t,
                    dispatch: e
                }) => xn(t, e),
                jl = () => ({
                    state: t,
                    dispatch: e
                }) => Sn(t, e);

            function Bl() {
                return "undefined" !== typeof navigator && /Mac/.test(navigator.platform)
            }

            function Hl(t) {
                const e = t.split(/-(?!$)/);
                let n, r, o, i, s = e[e.length - 1];
                "Space" === s && (s = " ");
                for (let a = 0; a < e.length - 1; a += 1) {
                    const t = e[a];
                    if (/^(cmd|meta|m)$/i.test(t)) i = !0;
                    else if (/^a(lt)?$/i.test(t)) n = !0;
                    else if (/^(c|ctrl|control)$/i.test(t)) r = !0;
                    else if (/^s(hift)?$/i.test(t)) o = !0;
                    else {
                        if (!/^mod$/i.test(t)) throw new Error("Unrecognized modifier name: " + t);
                        kl() || Bl() ? i = !0 : r = !0
                    }
                }
                return n && (s = "Alt-" + s), r && (s = "Ctrl-" + s), i && (s = "Meta-" + s), o && (s = "Shift-" + s), s
            }
            var Vl = t => ({
                editor: e,
                view: n,
                tr: r,
                dispatch: o
            }) => {
                const i = Hl(t).split(/-(?!$)/),
                    s = i.find(t => !["Alt", "Ctrl", "Meta", "Shift"].includes(t)),
                    a = new KeyboardEvent("keydown", {
                        key: "Space" === s ? " " : s,
                        altKey: i.includes("Alt"),
                        ctrlKey: i.includes("Ctrl"),
                        metaKey: i.includes("Meta"),
                        shiftKey: i.includes("Shift"),
                        bubbles: !0,
                        cancelable: !0
                    }),
                    l = e.captureTransaction(() => {
                        n.someProp("handleKeyDown", t => t(n, a))
                    });
                return null == l || l.steps.forEach(t => {
                    const e = t.map(r.mapping);
                    e && o && r.maybeStep(e)
                }), !0
            };

            function Fl(t, e, n = {}) {
                const {
                    from: r,
                    to: o,
                    empty: i
                } = t.selection, s = e ? rl(e, t.schema) : null, a = [];
                t.doc.nodesBetween(r, o, (t, e) => {
                    if (t.isText) return;
                    const n = Math.max(r, e),
                        i = Math.min(o, e + t.nodeSize);
                    a.push({
                        node: t,
                        from: n,
                        to: i
                    })
                });
                const l = o - r,
                    c = a.filter(t => !s || s.name === t.node.type.name).filter(t => dl(t.node.attrs, n, {
                        strict: !1
                    }));
                if (i) return !!c.length;
                const d = c.reduce((t, e) => t + e.to - e.from, 0);
                return d >= l
            }
            var _l = (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    const o = rl(t, n.schema),
                        i = Fl(n, o, e);
                    return !!i && Ln(n, r)
                },
                Wl = () => ({
                    state: t,
                    dispatch: e
                }) => Bn(t, e),
                ql = t => ({
                    state: e,
                    dispatch: n
                }) => {
                    const r = rl(t, e.schema);
                    return ir(r)(e, n)
                },
                Kl = () => ({
                    state: t,
                    dispatch: e
                }) => In(t, e);

            function Ul(t, e) {
                return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null
            }

            function Jl(t, e) {
                const n = "string" === typeof e ? [e] : e;
                return Object.keys(t).reduce((e, r) => (n.includes(r) || (e[r] = t[r]), e), {})
            }
            var Gl = (t, e) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null;
                    const a = Ul("string" === typeof t ? t : t.name, r.schema);
                    if (!a) return !1;
                    "node" === a && (i = rl(t, r.schema)), "mark" === a && (s = fl(t, r.schema));
                    let l = !1;
                    return n.selection.ranges.forEach(t => {
                        r.doc.nodesBetween(t.$from.pos, t.$to.pos, (t, r) => {
                            i && i === t.type && (l = !0, o && n.setNodeMarkup(r, void 0, Jl(t.attrs, e))), s && t.marks.length && t.marks.forEach(i => {
                                s === i.type && (l = !0, o && n.addMark(r, r + t.nodeSize, s.create(Jl(i.attrs, e))))
                            })
                        })
                    }), l
                },
                Yl = () => ({
                    tr: t,
                    dispatch: e
                }) => (e && t.scrollIntoView(), !0),
                Xl = () => ({
                    tr: t,
                    dispatch: e
                }) => {
                    if (e) {
                        const e = new tn(t.doc);
                        t.setSelection(e)
                    }
                    return !0
                },
                Ql = () => ({
                    state: t,
                    dispatch: e
                }) => On(t, e),
                Zl = () => ({
                    state: t,
                    dispatch: e
                }) => En(t, e),
                tc = () => ({
                    state: t,
                    dispatch: e
                }) => Fn(t, e),
                ec = () => ({
                    state: t,
                    dispatch: e
                }) => Jn(t, e),
                nc = () => ({
                    state: t,
                    dispatch: e
                }) => Un(t, e);

            function rc(t, e, n = {}, r = {}) {
                return Tl(t, e, {
                    slice: !1,
                    parseOptions: n,
                    errorOnInvalidContent: r.errorOnInvalidContent
                })
            }
            var oc = (t, {
                errorOnInvalidContent: e,
                emitUpdate: n = !0,
                parseOptions: r = {}
            } = {}) => ({
                editor: o,
                tr: i,
                dispatch: s,
                commands: a
            }) => {
                const {
                    doc: l
                } = i;
                if ("full" !== r.preserveWhitespace) {
                    const a = rc(t, o.schema, r, {
                        errorOnInvalidContent: null != e ? e : o.options.enableContentCheck
                    });
                    return s && i.replaceWith(0, l.content.size, a).setMeta("preventUpdate", !n), !0
                }
                return s && i.setMeta("preventUpdate", !n), a.insertContentAt({
                    from: 0,
                    to: l.content.size
                }, t, {
                    parseOptions: r,
                    errorOnInvalidContent: null != e ? e : o.options.enableContentCheck
                })
            };

            function ic(t, e) {
                const n = fl(e, t.schema),
                    {
                        from: r,
                        to: o,
                        empty: i
                    } = t.selection,
                    s = [];
                i ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, o, t => {
                    s.push(...t.marks)
                });
                const a = s.find(t => t.type.name === n.name);
                return a ? { ...a.attrs
                } : {}
            }

            function sc(t, e) {
                const n = new We(t);
                return e.forEach(t => {
                    t.steps.forEach(t => {
                        n.step(t)
                    })
                }), n
            }

            function ac(t) {
                for (let e = 0; e < t.edgeCount; e += 1) {
                    const {
                        type: n
                    } = t.edge(e);
                    if (n.isTextblock && !n.hasRequiredAttrs()) return n
                }
                return null
            }

            function lc(t, e, n) {
                const r = [];
                return t.nodesBetween(e.from, e.to, (t, e) => {
                    n(t) && r.push({
                        node: t,
                        pos: e
                    })
                }), r
            }

            function cc(t, e) {
                for (let n = t.depth; n > 0; n -= 1) {
                    const r = t.node(n);
                    if (e(r)) return {
                        pos: n > 0 ? t.before(n) : 0,
                        start: t.start(n),
                        depth: n,
                        node: r
                    }
                }
            }

            function dc(t) {
                return e => cc(e.$from, t)
            }

            function hc(t, e, n) {
                if (void 0 === t.config[e] && t.parent) return hc(t.parent, e, n);
                if ("function" === typeof t.config[e]) {
                    const r = t.config[e].bind({ ...n,
                        parent: t.parent ? hc(t.parent, e, n) : null
                    });
                    return r
                }
                return t.config[e]
            }

            function uc(t) {
                return t.map(t => {
                    const e = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        },
                        n = hc(t, "addExtensions", e);
                    return n ? [t, ...uc(n())] : t
                }).flat(10)
            }

            function pc(t, e) {
                const n = Ct.fromSchema(e).serializeFragment(t),
                    r = document.implementation.createHTMLDocument(),
                    o = r.createElement("div");
                return o.appendChild(n), o.innerHTML
            }

            function fc(t) {
                return "function" === typeof t
            }

            function mc(t, e, ...n) {
                return fc(t) ? e ? t.bind(e)(...n) : t(...n) : t
            }

            function gc(t = {}) {
                return 0 === Object.keys(t).length && t.constructor === Object
            }

            function yc(t) {
                const e = t.filter(t => "extension" === t.type),
                    n = t.filter(t => "node" === t.type),
                    r = t.filter(t => "mark" === t.type);
                return {
                    baseExtensions: e,
                    nodeExtensions: n,
                    markExtensions: r
                }
            }

            function bc(t) {
                const e = [],
                    {
                        nodeExtensions: n,
                        markExtensions: r
                    } = yc(t),
                    o = [...n, ...r],
                    i = {
                        default: null,
                        validate: void 0,
                        rendered: !0,
                        renderHTML: null,
                        parseHTML: null,
                        keepOnSplit: !0,
                        isRequired: !1
                    };
                return t.forEach(t => {
                    const n = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage,
                            extensions: o
                        },
                        r = hc(t, "addGlobalAttributes", n);
                    if (!r) return;
                    const s = r();
                    s.forEach(t => {
                        t.types.forEach(n => {
                            Object.entries(t.attributes).forEach(([t, r]) => {
                                e.push({
                                    type: n,
                                    name: t,
                                    attribute: { ...i,
                                        ...r
                                    }
                                })
                            })
                        })
                    })
                }), o.forEach(t => {
                    const n = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        },
                        r = hc(t, "addAttributes", n);
                    if (!r) return;
                    const o = r();
                    Object.entries(o).forEach(([n, r]) => {
                        const o = { ...i,
                            ...r
                        };
                        "function" === typeof(null == o ? void 0 : o.default) && (o.default = o.default()), (null == o ? void 0 : o.isRequired) && void 0 === (null == o ? void 0 : o.default) && delete o.default, e.push({
                            type: t.name,
                            name: n,
                            attribute: o
                        })
                    })
                }), e
            }

            function vc(...t) {
                return t.filter(t => !!t).reduce((t, e) => {
                    const n = { ...t
                    };
                    return Object.entries(e).forEach(([t, e]) => {
                        const r = n[t];
                        if (r)
                            if ("class" === t) {
                                const r = e ? String(e).split(" ") : [],
                                    o = n[t] ? n[t].split(" ") : [],
                                    i = r.filter(t => !o.includes(t));
                                n[t] = [...o, ...i].join(" ")
                            } else if ("style" === t) {
                            const r = e ? e.split(";").map(t => t.trim()).filter(Boolean) : [],
                                o = n[t] ? n[t].split(";").map(t => t.trim()).filter(Boolean) : [],
                                i = new Map;
                            o.forEach(t => {
                                const [e, n] = t.split(":").map(t => t.trim());
                                i.set(e, n)
                            }), r.forEach(t => {
                                const [e, n] = t.split(":").map(t => t.trim());
                                i.set(e, n)
                            }), n[t] = Array.from(i.entries()).map(([t, e]) => `${t}: ${e}`).join("; ")
                        } else n[t] = e;
                        else n[t] = e
                    }), n
                }, {})
            }

            function wc(t, e) {
                return e.filter(e => e.type === t.type.name).filter(t => t.attribute.rendered).map(e => e.attribute.renderHTML ? e.attribute.renderHTML(t.attrs) || {} : {
                    [e.name]: t.attrs[e.name]
                }).reduce((t, e) => vc(t, e), {})
            }

            function kc(t) {
                return "string" !== typeof t ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : "true" === t || "false" !== t && t
            }

            function xc(t, e) {
                return "style" in t ? t : { ...t,
                    getAttrs: n => {
                        const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
                        if (!1 === r) return !1;
                        const o = e.reduce((t, e) => {
                            const r = e.attribute.parseHTML ? e.attribute.parseHTML(n) : kc(n.getAttribute(e.name));
                            return null === r || void 0 === r ? t : { ...t,
                                [e.name]: r
                            }
                        }, {});
                        return { ...r,
                            ...o
                        }
                    }
                }
            }

            function Sc(t) {
                return Object.fromEntries(Object.entries(t).filter(([t, e]) => ("attrs" !== t || !gc(e)) && (null !== e && void 0 !== e)))
            }

            function Mc(t) {
                var e, n;
                const r = {};
                return !(null == (e = null == t ? void 0 : t.attribute) ? void 0 : e.isRequired) && "default" in ((null == t ? void 0 : t.attribute) || {}) && (r.default = t.attribute.default), void 0 !== (null == (n = null == t ? void 0 : t.attribute) ? void 0 : n.validate) && (r.validate = t.attribute.validate), [t.name, r]
            }

            function Cc(t, e) {
                var n;
                const r = bc(t),
                    {
                        nodeExtensions: o,
                        markExtensions: i
                    } = yc(t),
                    s = null == (n = o.find(t => hc(t, "topNode"))) ? void 0 : n.name,
                    a = Object.fromEntries(o.map(n => {
                        const o = r.filter(t => t.type === n.name),
                            i = {
                                name: n.name,
                                options: n.options,
                                storage: n.storage,
                                editor: e
                            },
                            s = t.reduce((t, e) => {
                                const r = hc(e, "extendNodeSchema", i);
                                return { ...t,
                                    ...r ? r(n) : {}
                                }
                            }, {}),
                            a = Sc({ ...s,
                                content: mc(hc(n, "content", i)),
                                marks: mc(hc(n, "marks", i)),
                                group: mc(hc(n, "group", i)),
                                inline: mc(hc(n, "inline", i)),
                                atom: mc(hc(n, "atom", i)),
                                selectable: mc(hc(n, "selectable", i)),
                                draggable: mc(hc(n, "draggable", i)),
                                code: mc(hc(n, "code", i)),
                                whitespace: mc(hc(n, "whitespace", i)),
                                linebreakReplacement: mc(hc(n, "linebreakReplacement", i)),
                                defining: mc(hc(n, "defining", i)),
                                isolating: mc(hc(n, "isolating", i)),
                                attrs: Object.fromEntries(o.map(Mc))
                            }),
                            l = mc(hc(n, "parseHTML", i));
                        l && (a.parseDOM = l.map(t => xc(t, o)));
                        const c = hc(n, "renderHTML", i);
                        c && (a.toDOM = t => c({
                            node: t,
                            HTMLAttributes: wc(t, o)
                        }));
                        const d = hc(n, "renderText", i);
                        return d && (a.toText = d), [n.name, a]
                    })),
                    l = Object.fromEntries(i.map(n => {
                        const o = r.filter(t => t.type === n.name),
                            i = {
                                name: n.name,
                                options: n.options,
                                storage: n.storage,
                                editor: e
                            },
                            s = t.reduce((t, e) => {
                                const r = hc(e, "extendMarkSchema", i);
                                return { ...t,
                                    ...r ? r(n) : {}
                                }
                            }, {}),
                            a = Sc({ ...s,
                                inclusive: mc(hc(n, "inclusive", i)),
                                excludes: mc(hc(n, "excludes", i)),
                                group: mc(hc(n, "group", i)),
                                spanning: mc(hc(n, "spanning", i)),
                                code: mc(hc(n, "code", i)),
                                attrs: Object.fromEntries(o.map(Mc))
                            }),
                            l = mc(hc(n, "parseHTML", i));
                        l && (a.parseDOM = l.map(t => xc(t, o)));
                        const c = hc(n, "renderHTML", i);
                        return c && (a.toDOM = t => c({
                            mark: t,
                            HTMLAttributes: wc(t, o)
                        })), [n.name, a]
                    }));
                return new at({
                    topNode: s,
                    nodes: a,
                    marks: l
                })
            }

            function Oc(t) {
                const e = t.filter((e, n) => t.indexOf(e) !== n);
                return Array.from(new Set(e))
            }

            function Tc(t) {
                const e = 100;
                return t.sort((t, n) => {
                    const r = hc(t, "priority") || e,
                        o = hc(n, "priority") || e;
                    return r > o ? -1 : r < o ? 1 : 0
                })
            }

            function Ac(t) {
                const e = Tc(uc(t)),
                    n = Oc(e.map(t => t.name));
                return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map(t=>`'${t}'`).join(", ")}]. This can lead to issues.`), e
            }

            function Nc(t, e, n) {
                const {
                    from: r,
                    to: o
                } = e, {
                    blockSeparator: i = "\n\n",
                    textSerializers: s = {}
                } = n || {};
                let a = "";
                return t.nodesBetween(r, o, (t, n, l, c) => {
                    var d;
                    t.isBlock && n > r && (a += i);
                    const h = null == s ? void 0 : s[t.type.name];
                    if (h) return l && (a += h({
                        node: t,
                        pos: n,
                        parent: l,
                        index: c,
                        range: e
                    })), !1;
                    t.isText && (a += null == (d = null == t ? void 0 : t.text) ? void 0 : d.slice(Math.max(r, n) - n, o - n))
                }), a
            }

            function Ec(t, e) {
                const n = {
                    from: 0,
                    to: t.content.size
                };
                return Nc(t, n, e)
            }

            function Dc(t) {
                return Object.fromEntries(Object.entries(t.nodes).filter(([, t]) => t.spec.toText).map(([t, e]) => [t, e.spec.toText]))
            }

            function Pc(t, e) {
                const n = rl(e, t.schema),
                    {
                        from: r,
                        to: o
                    } = t.selection,
                    i = [];
                t.doc.nodesBetween(r, o, t => {
                    i.push(t)
                });
                const s = i.reverse().find(t => t.type.name === n.name);
                return s ? { ...s.attrs
                } : {}
            }

            function Rc(t, e) {
                const n = Ul("string" === typeof e ? e : e.name, t.schema);
                return "node" === n ? Pc(t, e) : "mark" === n ? ic(t, e) : {}
            }

            function Lc(t, e = JSON.stringify) {
                const n = {};
                return t.filter(t => {
                    const r = e(t);
                    return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0)
                })
            }

            function Ic(t) {
                const e = Lc(t);
                return 1 === e.length ? e : e.filter((t, n) => {
                    const r = e.filter((t, e) => e !== n);
                    return !r.some(e => t.oldRange.from >= e.oldRange.from && t.oldRange.to <= e.oldRange.to && t.newRange.from >= e.newRange.from && t.newRange.to <= e.newRange.to)
                })
            }

            function $c(t) {
                const {
                    mapping: e,
                    steps: n
                } = t, r = [];
                return e.maps.forEach((t, o) => {
                    const i = [];
                    if (t.ranges.length) t.forEach((t, e) => {
                        i.push({
                            from: t,
                            to: e
                        })
                    });
                    else {
                        const {
                            from: t,
                            to: e
                        } = n[o];
                        if (void 0 === t || void 0 === e) return;
                        i.push({
                            from: t,
                            to: e
                        })
                    }
                    i.forEach(({
                        from: t,
                        to: n
                    }) => {
                        const i = e.slice(o).map(t, -1),
                            s = e.slice(o).map(n),
                            a = e.invert().map(i, -1),
                            l = e.invert().map(s);
                        r.push({
                            oldRange: {
                                from: a,
                                to: l
                            },
                            newRange: {
                                from: i,
                                to: s
                            }
                        })
                    })
                }), Ic(r)
            }

            function zc(t, e, n) {
                const r = [];
                return t === e ? n.resolve(t).marks().forEach(e => {
                    const o = n.resolve(t),
                        i = pl(o, e.type);
                    i && r.push({
                        mark: e,
                        ...i
                    })
                }) : n.nodesBetween(t, e, (t, e) => {
                    t && void 0 !== (null == t ? void 0 : t.nodeSize) && r.push(...t.marks.map(n => ({
                        from: e,
                        to: e + t.nodeSize,
                        mark: n
                    })))
                }), r
            }
            var jc = (t, e, n, r = 20) => {
                const o = t.doc.resolve(n);
                let i = r,
                    s = null;
                while (i > 0 && null === s) {
                    const t = o.node(i);
                    (null == t ? void 0 : t.type.name) === e ? s = t : i -= 1
                }
                return [s, i]
            };

            function Bc(t, e) {
                return e.nodes[t] || e.marks[t] || null
            }

            function Hc(t, e, n) {
                return Object.fromEntries(Object.entries(n).filter(([n]) => {
                    const r = t.find(t => t.type === e && t.name === n);
                    return !!r && r.attribute.keepOnSplit
                }))
            }
            var Vc = (t, e = 500) => {
                let n = "";
                const r = t.parentOffset;
                return t.parent.nodesBetween(Math.max(0, r - e), r, (t, e, o, i) => {
                    var s, a;
                    const l = (null == (a = (s = t.type.spec).toText) ? void 0 : a.call(s, {
                        node: t,
                        pos: e,
                        parent: o,
                        index: i
                    })) || t.textContent || "%leaf%";
                    n += t.isAtom && !t.isText ? l : l.slice(0, Math.max(0, r - e))
                }), n
            };

            function Fc(t, e, n = {}) {
                const {
                    empty: r,
                    ranges: o
                } = t.selection, i = e ? fl(e, t.schema) : null;
                if (r) return !!(t.storedMarks || t.selection.$from.marks()).filter(t => !i || i.name === t.type.name).find(t => dl(t.attrs, n, {
                    strict: !1
                }));
                let s = 0;
                const a = [];
                if (o.forEach(({
                        $from: e,
                        $to: n
                    }) => {
                        const r = e.pos,
                            o = n.pos;
                        t.doc.nodesBetween(r, o, (t, e) => {
                            if (!t.isText && !t.marks.length) return;
                            const n = Math.max(r, e),
                                i = Math.min(o, e + t.nodeSize),
                                l = i - n;
                            s += l, a.push(...t.marks.map(t => ({
                                mark: t,
                                from: n,
                                to: i
                            })))
                        })
                    }), 0 === s) return !1;
                const l = a.filter(t => !i || i.name === t.mark.type.name).filter(t => dl(t.mark.attrs, n, {
                        strict: !1
                    })).reduce((t, e) => t + e.to - e.from, 0),
                    c = a.filter(t => !i || t.mark.type !== i && t.mark.type.excludes(i)).reduce((t, e) => t + e.to - e.from, 0),
                    d = l > 0 ? l + c : l;
                return d >= s
            }

            function _c(t, e, n = {}) {
                if (!e) return Fl(t, null, n) || Fc(t, null, n);
                const r = Ul(e, t.schema);
                return "node" === r ? Fl(t, e, n) : "mark" === r && Fc(t, e, n)
            }
            var Wc = (t, e) => {
                    const {
                        $from: n,
                        $to: r,
                        $anchor: o
                    } = t.selection;
                    if (e) {
                        const n = dc(t => t.type.name === e)(t.selection);
                        if (!n) return !1;
                        const r = t.doc.resolve(n.pos + 1);
                        return o.pos + 1 === r.end()
                    }
                    return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos)
                },
                qc = t => {
                    const {
                        $from: e,
                        $to: n
                    } = t.selection;
                    return !(e.parentOffset > 0 || e.pos !== n.pos)
                };

            function Kc(t, e) {
                return Array.isArray(e) ? e.some(e => {
                    const n = "string" === typeof e ? e : e.name;
                    return n === t.name
                }) : e
            }

            function Uc(t, e) {
                const {
                    nodeExtensions: n
                } = yc(e), r = n.find(e => e.name === t);
                if (!r) return !1;
                const o = {
                        name: r.name,
                        options: r.options,
                        storage: r.storage
                    },
                    i = mc(hc(r, "group", o));
                return "string" === typeof i && i.split(" ").includes("list")
            }

            function Jc(t, {
                checkChildren: e = !0,
                ignoreWhitespace: n = !1
            } = {}) {
                var r;
                if (n) {
                    if ("hardBreak" === t.type.name) return !0;
                    if (t.isText) return /^\s*$/m.test(null != (r = t.text) ? r : "")
                }
                if (t.isText) return !t.text;
                if (t.isAtom || t.isLeaf) return !1;
                if (0 === t.content.childCount) return !0;
                if (e) {
                    let r = !0;
                    return t.content.forEach(t => {
                        !1 !== r && (Jc(t, {
                            ignoreWhitespace: n,
                            checkChildren: e
                        }) || (r = !1))
                    }), r
                }
                return !1
            }

            function Gc(t) {
                return t instanceof Qe
            }

            function Yc(t, e, n) {
                var r;
                const {
                    selection: o
                } = e;
                let i = null;
                if (yl(o) && (i = o.$cursor), i) {
                    const e = null != (r = t.storedMarks) ? r : i.marks(),
                        o = i.parent.type.allowsMarkType(n);
                    return o && (!!n.isInSet(e) || !e.some(t => t.type.excludes(n)))
                }
                const {
                    ranges: s
                } = o;
                return s.some(({
                    $from: e,
                    $to: r
                }) => {
                    let o = 0 === e.depth && (t.doc.inlineContent && t.doc.type.allowsMarkType(n));
                    return t.doc.nodesBetween(e.pos, r.pos, (t, e, r) => {
                        if (o) return !1;
                        if (t.isInline) {
                            const e = !r || r.type.allowsMarkType(n),
                                i = !!n.isInSet(t.marks) || !t.marks.some(t => t.type.excludes(n));
                            o = e && i
                        }
                        return !o
                    }), o
                })
            }
            var Xc = (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    const {
                        selection: i
                    } = n, {
                        empty: s,
                        ranges: a
                    } = i, l = fl(t, r.schema);
                    if (o)
                        if (s) {
                            const t = ic(r, l);
                            n.addStoredMark(l.create({ ...t,
                                ...e
                            }))
                        } else a.forEach(t => {
                            const o = t.$from.pos,
                                i = t.$to.pos;
                            r.doc.nodesBetween(o, i, (t, r) => {
                                const s = Math.max(r, o),
                                    a = Math.min(r + t.nodeSize, i),
                                    c = t.marks.find(t => t.type === l);
                                c ? t.marks.forEach(t => {
                                    l === t.type && n.addMark(s, a, l.create({ ...t.attrs,
                                        ...e
                                    }))
                                }) : n.addMark(s, a, l.create(e))
                            })
                        });
                    return Yc(r, n, l)
                },
                Qc = (t, e) => ({
                    tr: n
                }) => (n.setMeta(t, e), !0),
                Zc = (t, e = {}) => ({
                    state: n,
                    dispatch: r,
                    chain: o
                }) => {
                    const i = rl(t, n.schema);
                    let s;
                    return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), i.isTextblock ? o().command(({
                        commands: t
                    }) => {
                        const r = Yn(i, { ...s,
                            ...e
                        })(n);
                        return !!r || t.clearNodes()
                    }).command(({
                        state: t
                    }) => Yn(i, { ...s,
                        ...e
                    })(t, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1)
                },
                td = t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    if (n) {
                        const {
                            doc: n
                        } = e, r = bl(t, 0, n.content.size), o = Qe.create(n, r);
                        e.setSelection(o)
                    }
                    return !0
                },
                ed = (t, e) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    const {
                        selection: i
                    } = r;
                    let s, a;
                    return "number" === typeof e ? (s = e, a = e) : e && "from" in e && "to" in e ? (s = e.from, a = e.to) : (s = i.from, a = i.to), o && n.doc.nodesBetween(s, a, (e, r) => {
                        e.isText || n.setNodeMarkup(r, void 0, { ...e.attrs,
                            dir: t
                        })
                    }), !0
                },
                nd = t => ({
                    tr: e,
                    dispatch: n
                }) => {
                    if (n) {
                        const {
                            doc: n
                        } = e, {
                            from: r,
                            to: o
                        } = "number" === typeof t ? {
                            from: t,
                            to: t
                        } : t, i = Ye.atStart(n).from, s = Ye.atEnd(n).to, a = bl(r, i, s), l = bl(o, i, s), c = Ye.create(n, a, l);
                        e.setSelection(c)
                    }
                    return !0
                },
                rd = t => ({
                    state: e,
                    dispatch: n
                }) => {
                    const r = rl(t, e.schema);
                    return lr(r)(e, n)
                };

            function od(t, e) {
                const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
                if (n) {
                    const r = n.filter(t => null == e ? void 0 : e.includes(t.type.name));
                    t.tr.ensureMarks(r)
                }
            }
            var id = ({
                    keepMarks: t = !0
                } = {}) => ({
                    tr: e,
                    state: n,
                    dispatch: r,
                    editor: o
                }) => {
                    const {
                        selection: i,
                        doc: s
                    } = e, {
                        $from: a,
                        $to: l
                    } = i, c = o.extensionManager.attributes, d = Hc(c, a.node().type.name, a.node().attrs);
                    if (i instanceof Qe && i.node.isBlock) return !(!a.parentOffset || !ye(s, a.pos)) && (r && (t && od(n, o.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
                    if (!a.parent.isBlock) return !1;
                    const h = l.parentOffset === l.parent.content.size,
                        u = 0 === a.depth ? void 0 : ac(a.node(-1).contentMatchAt(a.indexAfter(-1)));
                    let p = h && u ? [{
                            type: u,
                            attrs: d
                        }] : void 0,
                        f = ye(e.doc, e.mapping.map(a.pos), 1, p);
                    if (p || f || !ye(e.doc, e.mapping.map(a.pos), 1, u ? [{
                            type: u
                        }] : void 0) || (f = !0, p = u ? [{
                            type: u,
                            attrs: d
                        }] : void 0), r) {
                        if (f && (i instanceof Ye && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, p), u && !h && !a.parentOffset && a.parent.type !== u)) {
                            const t = e.mapping.map(a.before()),
                                n = e.doc.resolve(t);
                            a.node(-1).canReplaceWith(n.index(), n.index() + 1, u) && e.setNodeMarkup(e.mapping.map(a.before()), u)
                        }
                        t && od(n, o.extensionManager.splittableMarks), e.scrollIntoView()
                    }
                    return f
                },
                sd = (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o,
                    editor: i
                }) => {
                    var s;
                    const a = rl(t, r.schema),
                        {
                            $from: l,
                            $to: c
                        } = r.selection,
                        d = r.selection.node;
                    if (d && d.isBlock || l.depth < 2 || !l.sameParent(c)) return !1;
                    const u = l.node(-1);
                    if (u.type !== a) return !1;
                    const p = i.extensionManager.attributes;
                    if (0 === l.parent.content.size && l.node(-1).childCount === l.indexAfter(-1)) {
                        if (2 === l.depth || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1) return !1;
                        if (o) {
                            let t = h.empty;
                            const r = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
                            for (let e = l.depth - r; e >= l.depth - 3; e -= 1) t = h.from(l.node(e).copy(t));
                            const o = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3,
                                i = { ...Hc(p, l.node().type.name, l.node().attrs),
                                    ...e
                                },
                                c = (null == (s = a.contentMatch.defaultType) ? void 0 : s.createAndFill(i)) || void 0;
                            t = t.append(h.from(a.createAndFill(null, c) || void 0));
                            const d = l.before(l.depth - (r - 1));
                            n.replace(d, l.after(-o), new y(t, 4 - r, 0));
                            let u = -1;
                            n.doc.nodesBetween(d, n.doc.content.size, (t, e) => {
                                if (u > -1) return !1;
                                t.isTextblock && 0 === t.content.size && (u = e + 1)
                            }), u > -1 && n.setSelection(Ye.near(n.doc.resolve(u))), n.scrollIntoView()
                        }
                        return !0
                    }
                    const f = c.pos === l.end() ? u.contentMatchAt(0).defaultType : null,
                        m = { ...Hc(p, u.type.name, u.attrs),
                            ...e
                        },
                        g = { ...Hc(p, l.node().type.name, l.node().attrs),
                            ...e
                        };
                    n.delete(l.pos, c.pos);
                    const b = f ? [{
                        type: a,
                        attrs: m
                    }, {
                        type: f,
                        attrs: g
                    }] : [{
                        type: a,
                        attrs: m
                    }];
                    if (!ye(n.doc, l.pos, 2)) return !1;
                    if (o) {
                        const {
                            selection: t,
                            storedMarks: e
                        } = r, {
                            splittableMarks: s
                        } = i.extensionManager, a = e || t.$to.parentOffset && t.$from.marks();
                        if (n.split(l.pos, 2, b).scrollIntoView(), !a || !o) return !0;
                        const c = a.filter(t => s.includes(t.type.name));
                        n.ensureMarks(c)
                    }
                    return !0
                },
                ad = (t, e) => {
                    const n = dc(t => t.type === e)(t.selection);
                    if (!n) return !0;
                    const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
                    if (void 0 === r) return !0;
                    const o = t.doc.nodeAt(r),
                        i = n.node.type === (null == o ? void 0 : o.type) && ve(t.doc, n.pos);
                    return !i || (t.join(n.pos), !0)
                },
                ld = (t, e) => {
                    const n = dc(t => t.type === e)(t.selection);
                    if (!n) return !0;
                    const r = t.doc.resolve(n.start).after(n.depth);
                    if (void 0 === r) return !0;
                    const o = t.doc.nodeAt(r),
                        i = n.node.type === (null == o ? void 0 : o.type) && ve(t.doc, r);
                    return !i || (t.join(r), !0)
                },
                cd = (t, e, n, r = {}) => ({
                    editor: o,
                    tr: i,
                    state: s,
                    dispatch: a,
                    chain: l,
                    commands: c,
                    can: d
                }) => {
                    const {
                        extensions: h,
                        splittableMarks: u
                    } = o.extensionManager, p = rl(t, s.schema), f = rl(e, s.schema), {
                        selection: m,
                        storedMarks: g
                    } = s, {
                        $from: y,
                        $to: b
                    } = m, v = y.blockRange(b), w = g || m.$to.parentOffset && m.$from.marks();
                    if (!v) return !1;
                    const k = dc(t => Uc(t.type.name, h))(m);
                    if (v.depth >= 1 && k && v.depth - k.depth <= 1) {
                        if (k.node.type === p) return c.liftListItem(f);
                        if (Uc(k.node.type.name, h) && p.validContent(k.node.content) && a) return l().command(() => (i.setNodeMarkup(k.pos, p), !0)).command(() => ad(i, p)).command(() => ld(i, p)).run()
                    }
                    return n && w && a ? l().command(() => {
                        const t = d().wrapInList(p, r),
                            e = w.filter(t => u.includes(t.type.name));
                        return i.ensureMarks(e), !!t || c.clearNodes()
                    }).wrapInList(p, r).command(() => ad(i, p)).command(() => ld(i, p)).run() : l().command(() => {
                        const t = d().wrapInList(p, r);
                        return !!t || c.clearNodes()
                    }).wrapInList(p, r).command(() => ad(i, p)).command(() => ld(i, p)).run()
                },
                dd = (t, e = {}, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    const {
                        extendEmptyMarkRange: i = !1
                    } = n, s = fl(t, r.schema), a = Fc(r, s, e);
                    return a ? o.unsetMark(s, {
                        extendEmptyMarkRange: i
                    }) : o.setMark(s, e)
                },
                hd = (t, e, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    const i = rl(t, r.schema),
                        s = rl(e, r.schema),
                        a = Fl(r, i, n);
                    let l;
                    return r.selection.$anchor.sameParent(r.selection.$head) && (l = r.selection.$anchor.parent.attrs), a ? o.setNode(s, l) : o.setNode(i, { ...l,
                        ...n
                    })
                },
                ud = (t, e = {}) => ({
                    state: n,
                    commands: r
                }) => {
                    const o = rl(t, n.schema),
                        i = Fl(n, o, e);
                    return i ? r.lift(o) : r.wrapIn(o, e)
                },
                pd = () => ({
                    state: t,
                    dispatch: e
                }) => {
                    const n = t.plugins;
                    for (let r = 0; r < n.length; r += 1) {
                        const o = n[r];
                        let i;
                        if (o.spec.isInputRules && (i = o.getState(t))) {
                            if (e) {
                                const e = t.tr,
                                    n = i.transform;
                                for (let t = n.steps.length - 1; t >= 0; t -= 1) e.step(n.steps[t].invert(n.docs[t]));
                                if (i.text) {
                                    const n = e.doc.resolve(i.from).marks();
                                    e.replaceWith(i.from, i.to, t.schema.text(i.text, n))
                                } else e.delete(i.from, i.to)
                            }
                            return !0
                        }
                    }
                    return !1
                },
                fd = () => ({
                    tr: t,
                    dispatch: e
                }) => {
                    const {
                        selection: n
                    } = t, {
                        empty: r,
                        ranges: o
                    } = n;
                    return r || e && o.forEach(e => {
                        t.removeMark(e.$from.pos, e.$to.pos)
                    }), !0
                },
                md = (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    var i;
                    const {
                        extendEmptyMarkRange: s = !1
                    } = e, {
                        selection: a
                    } = n, l = fl(t, r.schema), {
                        $from: c,
                        empty: d,
                        ranges: h
                    } = a;
                    if (!o) return !0;
                    if (d && s) {
                        let {
                            from: t,
                            to: e
                        } = a;
                        const r = null == (i = c.marks().find(t => t.type === l)) ? void 0 : i.attrs,
                            o = pl(c, l, r);
                        o && (t = o.from, e = o.to), n.removeMark(t, e, l)
                    } else h.forEach(t => {
                        n.removeMark(t.$from.pos, t.$to.pos, l)
                    });
                    return n.removeStoredMark(l), !0
                },
                gd = t => ({
                    tr: e,
                    state: n,
                    dispatch: r
                }) => {
                    const {
                        selection: o
                    } = n;
                    let i, s;
                    return "number" === typeof t ? (i = t, s = t) : t && "from" in t && "to" in t ? (i = t.from, s = t.to) : (i = o.from, s = o.to), r && e.doc.nodesBetween(i, s, (t, n) => {
                        if (t.isText) return;
                        const r = { ...t.attrs
                        };
                        delete r.dir, e.setNodeMarkup(n, void 0, r)
                    }), !0
                },
                yd = (t, e = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null;
                    const a = Ul("string" === typeof t ? t : t.name, r.schema);
                    if (!a) return !1;
                    "node" === a && (i = rl(t, r.schema)), "mark" === a && (s = fl(t, r.schema));
                    let l = !1;
                    return n.selection.ranges.forEach(t => {
                        const a = t.$from.pos,
                            c = t.$to.pos;
                        let d, h, u, p;
                        n.selection.empty ? r.doc.nodesBetween(a, c, (t, e) => {
                            i && i === t.type && (l = !0, u = Math.max(e, a), p = Math.min(e + t.nodeSize, c), d = e, h = t)
                        }) : r.doc.nodesBetween(a, c, (t, r) => {
                            r < a && i && i === t.type && (l = !0, u = Math.max(r, a), p = Math.min(r + t.nodeSize, c), d = r, h = t), r >= a && r <= c && (i && i === t.type && (l = !0, o && n.setNodeMarkup(r, void 0, { ...t.attrs,
                                ...e
                            })), s && t.marks.length && t.marks.forEach(i => {
                                if (s === i.type && (l = !0, o)) {
                                    const o = Math.max(r, a),
                                        l = Math.min(r + t.nodeSize, c);
                                    n.addMark(o, l, s.create({ ...i.attrs,
                                        ...e
                                    }))
                                }
                            }))
                        }), h && (void 0 !== d && o && n.setNodeMarkup(d, void 0, { ...h.attrs,
                            ...e
                        }), s && h.marks.length && h.marks.forEach(t => {
                            s === t.type && o && n.addMark(u, p, s.create({ ...t.attrs,
                                ...e
                            }))
                        }))
                    }), l
                },
                bd = (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    const o = rl(t, n.schema);
                    return Gn(o, e)(n, r)
                },
                vd = (t, e = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    const o = rl(t, n.schema);
                    return nr(o, e)(n, r)
                },
                wd = class {
                    constructor() {
                        this.callbacks = {}
                    }
                    on(t, e) {
                        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this
                    }
                    emit(t, ...e) {
                        const n = this.callbacks[t];
                        return n && n.forEach(t => t.apply(this, e)), this
                    }
                    off(t, e) {
                        const n = this.callbacks[t];
                        return n && (e ? this.callbacks[t] = n.filter(t => t !== e) : delete this.callbacks[t]), this
                    }
                    once(t, e) {
                        const n = (...r) => {
                            this.off(t, n), e.apply(this, r)
                        };
                        return this.on(t, n)
                    }
                    removeAllListeners() {
                        this.callbacks = {}
                    }
                },
                kd = class {
                    constructor(t) {
                        var e;
                        this.find = t.find, this.handler = t.handler, this.undoable = null == (e = t.undoable) || e
                    }
                },
                xd = (t, e) => {
                    if (cl(e)) return e.exec(t);
                    const n = e(t);
                    if (!n) return null;
                    const r = [n.text];
                    return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r
                };

            function Sd(t) {
                var e;
                const {
                    editor: n,
                    from: r,
                    to: o,
                    text: i,
                    rules: s,
                    plugin: a
                } = t, {
                    view: l
                } = n;
                if (l.composing) return !1;
                const c = l.state.doc.resolve(r);
                if (c.parent.type.spec.code || (null == (e = c.nodeBefore || c.nodeAfter) ? void 0 : e.marks.find(t => t.type.spec.code))) return !1;
                let d = !1;
                const h = Vc(c) + i;
                return s.forEach(t => {
                    if (d) return;
                    const e = xd(h, t.find);
                    if (!e) return;
                    const s = l.state.tr,
                        c = Ua({
                            state: l.state,
                            transaction: s
                        }),
                        u = {
                            from: r - (e[0].length - i.length),
                            to: o
                        },
                        {
                            commands: p,
                            chain: f,
                            can: m
                        } = new Ja({
                            editor: n,
                            state: c
                        }),
                        g = t.handler({
                            state: c,
                            range: u,
                            match: e,
                            commands: p,
                            chain: f,
                            can: m
                        });
                    null !== g && s.steps.length && (t.undoable && s.setMeta(a, {
                        transform: s,
                        from: r,
                        to: o,
                        text: i
                    }), l.dispatch(s), d = !0)
                }), d
            }

            function Md(t) {
                const {
                    editor: e,
                    rules: n
                } = t, r = new mn({
                    state: {
                        init() {
                            return null
                        },
                        apply(t, o, i) {
                            const s = t.getMeta(r);
                            if (s) return s;
                            const a = t.getMeta("applyInputRules"),
                                l = !!a;
                            return l && setTimeout(() => {
                                let {
                                    text: t
                                } = a;
                                t = "string" === typeof t ? t : pc(h.from(t), i.schema);
                                const {
                                    from: o
                                } = a, s = o + t.length;
                                Sd({
                                    editor: e,
                                    from: o,
                                    to: s,
                                    text: t,
                                    rules: n,
                                    plugin: r
                                })
                            }), t.selectionSet || t.docChanged ? null : o
                        }
                    },
                    props: {
                        handleTextInput(t, o, i, s) {
                            return Sd({
                                editor: e,
                                from: o,
                                to: i,
                                text: s,
                                rules: n,
                                plugin: r
                            })
                        },
                        handleDOMEvents: {
                            compositionend: t => (setTimeout(() => {
                                const {
                                    $cursor: o
                                } = t.state.selection;
                                o && Sd({
                                    editor: e,
                                    from: o.pos,
                                    to: o.pos,
                                    text: "",
                                    rules: n,
                                    plugin: r
                                })
                            }), !1)
                        },
                        handleKeyDown(t, o) {
                            if ("Enter" !== o.key) return !1;
                            const {
                                $cursor: i
                            } = t.state.selection;
                            return !!i && Sd({
                                editor: e,
                                from: i.pos,
                                to: i.pos,
                                text: "\n",
                                rules: n,
                                plugin: r
                            })
                        }
                    },
                    isInputRules: !0
                });
                return r
            }

            function Cd(t) {
                return Object.prototype.toString.call(t).slice(8, -1)
            }

            function Od(t) {
                return "Object" === Cd(t) && (t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype)
            }

            function Td(t, e) {
                const n = { ...t
                };
                return Od(t) && Od(e) && Object.keys(e).forEach(r => {
                    Od(e[r]) && Od(t[r]) ? n[r] = Td(t[r], e[r]) : n[r] = e[r]
                }), n
            }
            var Ad = class {
                    constructor(t = {}) {
                        this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
                            name: this.name
                        }, this.config = { ...this.config,
                            ...t
                        }, this.name = this.config.name
                    }
                    get options() {
                        return { ...mc(hc(this, "addOptions", {
                                name: this.name
                            })) || {}
                        }
                    }
                    get storage() {
                        return { ...mc(hc(this, "addStorage", {
                                name: this.name,
                                options: this.options
                            })) || {}
                        }
                    }
                    configure(t = {}) {
                        const e = this.extend({ ...this.config,
                            addOptions: () => Td(this.options, t)
                        });
                        return e.name = this.name, e.parent = this.parent, e
                    }
                    extend(t = {}) {
                        const e = new this.constructor({ ...this.config,
                            ...t
                        });
                        return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e
                    }
                },
                Nd = class t extends Ad {
                    constructor() {
                        super(...arguments), this.type = "mark"
                    }
                    static create(e = {}) {
                        const n = "function" === typeof e ? e() : e;
                        return new t(n)
                    }
                    static handleExit({
                        editor: t,
                        mark: e
                    }) {
                        const {
                            tr: n
                        } = t.state, r = t.state.selection.$from, o = r.pos === r.end();
                        if (o) {
                            const o = r.marks(),
                                i = !!o.find(t => (null == t ? void 0 : t.type.name) === e.name);
                            if (!i) return !1;
                            const s = o.find(t => (null == t ? void 0 : t.type.name) === e.name);
                            return s && n.removeStoredMark(s), n.insertText(" ", r.pos), t.view.dispatch(n), !0
                        }
                        return !1
                    }
                    configure(t) {
                        return super.configure(t)
                    }
                    extend(t) {
                        const e = "function" === typeof t ? t() : t;
                        return super.extend(e)
                    }
                };

            function Ed(t) {
                return "number" === typeof t
            }
            var Dd = class {
                    constructor(t) {
                        this.find = t.find, this.handler = t.handler
                    }
                },
                Pd = (t, e, n) => {
                    if (cl(e)) return [...t.matchAll(e)];
                    const r = e(t, n);
                    return r ? r.map(e => {
                        const n = [e.text];
                        return n.index = e.index, n.input = t, n.data = e.data, e.replaceWith && (e.text.includes(e.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(e.replaceWith)), n
                    }) : []
                };

            function Rd(t) {
                const {
                    editor: e,
                    state: n,
                    from: r,
                    to: o,
                    rule: i,
                    pasteEvent: s,
                    dropEvent: a
                } = t, {
                    commands: l,
                    chain: c,
                    can: d
                } = new Ja({
                    editor: e,
                    state: n
                }), h = [];
                n.doc.nodesBetween(r, o, (t, e) => {
                    var u, p, f, m, g;
                    if ((null == (p = null == (u = t.type) ? void 0 : u.spec) ? void 0 : p.code) || !(t.isText || t.isTextblock || t.isInline)) return;
                    const y = null != (g = null != (m = null == (f = t.content) ? void 0 : f.size) ? m : t.nodeSize) ? g : 0,
                        b = Math.max(r, e),
                        v = Math.min(o, e + y);
                    if (b >= v) return;
                    const w = t.isText ? t.text || "" : t.textBetween(b - e, v - e, void 0, "￼"),
                        k = Pd(w, i.find, s);
                    k.forEach(t => {
                        if (void 0 === t.index) return;
                        const e = b + t.index + 1,
                            r = e + t[0].length,
                            o = {
                                from: n.tr.mapping.map(e),
                                to: n.tr.mapping.map(r)
                            },
                            u = i.handler({
                                state: n,
                                range: o,
                                match: t,
                                commands: l,
                                chain: c,
                                can: d,
                                pasteEvent: s,
                                dropEvent: a
                            });
                        h.push(u)
                    })
                });
                const u = h.every(t => null !== t);
                return u
            }
            var Ld = null,
                Id = t => {
                    var e;
                    const n = new ClipboardEvent("paste", {
                        clipboardData: new DataTransfer
                    });
                    return null == (e = n.clipboardData) || e.setData("text/html", t), n
                };

            function $d(t) {
                const {
                    editor: e,
                    rules: n
                } = t;
                let r, o = null,
                    i = !1,
                    s = !1,
                    a = "undefined" !== typeof ClipboardEvent ? new ClipboardEvent("paste") : null;
                try {
                    r = "undefined" !== typeof DragEvent ? new DragEvent("drop") : null
                } catch {
                    r = null
                }
                const l = ({
                        state: t,
                        from: n,
                        to: o,
                        rule: i,
                        pasteEvt: s
                    }) => {
                        const l = t.tr,
                            c = Ua({
                                state: t,
                                transaction: l
                            }),
                            d = Rd({
                                editor: e,
                                state: c,
                                from: Math.max(n - 1, 0),
                                to: o.b - 1,
                                rule: i,
                                pasteEvent: s,
                                dropEvent: r
                            });
                        if (d && l.steps.length) {
                            try {
                                r = "undefined" !== typeof DragEvent ? new DragEvent("drop") : null
                            } catch {
                                r = null
                            }
                            return a = "undefined" !== typeof ClipboardEvent ? new ClipboardEvent("paste") : null, l
                        }
                    },
                    c = n.map(t => new mn({
                        view(t) {
                            const n = n => {
                                    var r;
                                    o = (null == (r = t.dom.parentElement) ? void 0 : r.contains(n.target)) ? t.dom.parentElement : null, o && (Ld = e)
                                },
                                r = () => {
                                    Ld && (Ld = null)
                                };
                            return window.addEventListener("dragstart", n), window.addEventListener("dragend", r), {
                                destroy() {
                                    window.removeEventListener("dragstart", n), window.removeEventListener("dragend", r)
                                }
                            }
                        },
                        props: {
                            handleDOMEvents: {
                                drop: (t, e) => {
                                    if (s = o === t.dom.parentElement, r = e, !s) {
                                        const t = Ld;
                                        (null == t ? void 0 : t.isEditable) && setTimeout(() => {
                                            const e = t.state.selection;
                                            e && t.commands.deleteRange({
                                                from: e.from,
                                                to: e.to
                                            })
                                        }, 10)
                                    }
                                    return !1
                                },
                                paste: (t, e) => {
                                    var n;
                                    const r = null == (n = e.clipboardData) ? void 0 : n.getData("text/html");
                                    return a = e, i = !!(null == r ? void 0 : r.includes("data-pm-slice")), !1
                                }
                            }
                        },
                        appendTransaction: (e, n, r) => {
                            const o = e[0],
                                c = "paste" === o.getMeta("uiEvent") && !i,
                                d = "drop" === o.getMeta("uiEvent") && !s,
                                u = o.getMeta("applyPasteRules"),
                                p = !!u;
                            if (!c && !d && !p) return;
                            if (p) {
                                let {
                                    text: e
                                } = u;
                                e = "string" === typeof e ? e : pc(h.from(e), r.schema);
                                const {
                                    from: n
                                } = u, o = n + e.length, i = Id(e);
                                return l({
                                    rule: t,
                                    state: r,
                                    from: n,
                                    to: {
                                        b: o
                                    },
                                    pasteEvt: i
                                })
                            }
                            const f = n.doc.content.findDiffStart(r.doc.content),
                                m = n.doc.content.findDiffEnd(r.doc.content);
                            return Ed(f) && m && f !== m.b ? l({
                                rule: t,
                                state: r,
                                from: f,
                                to: m,
                                pasteEvt: a
                            }) : void 0
                        }
                    }));
                return c
            }
            var zd = class {
                constructor(t, e) {
                    this.splittableMarks = [], this.editor = e, this.baseExtensions = t, this.extensions = Ac(t), this.schema = Cc(this.extensions, e), this.setupExtensions()
                }
                get commands() {
                    return this.extensions.reduce((t, e) => {
                        const n = {
                                name: e.name,
                                options: e.options,
                                storage: this.editor.extensionStorage[e.name],
                                editor: this.editor,
                                type: Bc(e.name, this.schema)
                            },
                            r = hc(e, "addCommands", n);
                        return r ? { ...t,
                            ...r()
                        } : t
                    }, {})
                }
                get plugins() {
                    const {
                        editor: t
                    } = this, e = Tc([...this.extensions].reverse()), n = e.flatMap(e => {
                        const n = {
                                name: e.name,
                                options: e.options,
                                storage: this.editor.extensionStorage[e.name],
                                editor: t,
                                type: Bc(e.name, this.schema)
                            },
                            r = [],
                            o = hc(e, "addKeyboardShortcuts", n);
                        let i = {};
                        if ("mark" === e.type && hc(e, "exitable", n) && (i.ArrowRight = () => Nd.handleExit({
                                editor: t,
                                mark: e
                            })), o) {
                            const e = Object.fromEntries(Object.entries(o()).map(([e, n]) => [e, () => n({
                                editor: t
                            })]));
                            i = { ...i,
                                ...e
                            }
                        }
                        const s = _a(i);
                        r.push(s);
                        const a = hc(e, "addInputRules", n);
                        if (Kc(e, t.options.enableInputRules) && a) {
                            const e = a();
                            if (e && e.length) {
                                const n = Md({
                                        editor: t,
                                        rules: e
                                    }),
                                    o = Array.isArray(n) ? n : [n];
                                r.push(...o)
                            }
                        }
                        const l = hc(e, "addPasteRules", n);
                        if (Kc(e, t.options.enablePasteRules) && l) {
                            const e = l();
                            if (e && e.length) {
                                const n = $d({
                                    editor: t,
                                    rules: e
                                });
                                r.push(...n)
                            }
                        }
                        const c = hc(e, "addProseMirrorPlugins", n);
                        if (c) {
                            const t = c();
                            r.push(...t)
                        }
                        return r
                    });
                    return n
                }
                get attributes() {
                    return bc(this.extensions)
                }
                get nodeViews() {
                    const {
                        editor: t
                    } = this, {
                        nodeExtensions: e
                    } = yc(this.extensions);
                    return Object.fromEntries(e.filter(t => !!hc(t, "addNodeView")).map(e => {
                        const n = this.attributes.filter(t => t.type === e.name),
                            r = {
                                name: e.name,
                                options: e.options,
                                storage: this.editor.extensionStorage[e.name],
                                editor: t,
                                type: rl(e.name, this.schema)
                            },
                            o = hc(e, "addNodeView", r);
                        if (!o) return [];
                        const i = o();
                        if (!i) return [];
                        const s = (r, o, s, a, l) => {
                            const c = wc(r, n);
                            return i({
                                node: r,
                                view: o,
                                getPos: s,
                                decorations: a,
                                innerDecorations: l,
                                editor: t,
                                extension: e,
                                HTMLAttributes: c
                            })
                        };
                        return [e.name, s]
                    }))
                }
                get markViews() {
                    const {
                        editor: t
                    } = this, {
                        markExtensions: e
                    } = yc(this.extensions);
                    return Object.fromEntries(e.filter(t => !!hc(t, "addMarkView")).map(e => {
                        const n = this.attributes.filter(t => t.type === e.name),
                            r = {
                                name: e.name,
                                options: e.options,
                                storage: this.editor.extensionStorage[e.name],
                                editor: t,
                                type: fl(e.name, this.schema)
                            },
                            o = hc(e, "addMarkView", r);
                        if (!o) return [];
                        const i = (r, i, s) => {
                            const a = wc(r, n);
                            return o()({
                                mark: r,
                                view: i,
                                inline: s,
                                editor: t,
                                extension: e,
                                HTMLAttributes: a,
                                updateAttributes: e => {
                                    bh(r, t, e)
                                }
                            })
                        };
                        return [e.name, i]
                    }))
                }
                setupExtensions() {
                    const t = this.extensions;
                    this.editor.extensionStorage = Object.fromEntries(t.map(t => [t.name, t.storage])), t.forEach(t => {
                        var e;
                        const n = {
                            name: t.name,
                            options: t.options,
                            storage: this.editor.extensionStorage[t.name],
                            editor: this.editor,
                            type: Bc(t.name, this.schema)
                        };
                        if ("mark" === t.type) {
                            const r = null == (e = mc(hc(t, "keepOnSplit", n))) || e;
                            r && this.splittableMarks.push(t.name)
                        }
                        const r = hc(t, "onBeforeCreate", n),
                            o = hc(t, "onCreate", n),
                            i = hc(t, "onUpdate", n),
                            s = hc(t, "onSelectionUpdate", n),
                            a = hc(t, "onTransaction", n),
                            l = hc(t, "onFocus", n),
                            c = hc(t, "onBlur", n),
                            d = hc(t, "onDestroy", n);
                        r && this.editor.on("beforeCreate", r), o && this.editor.on("create", o), i && this.editor.on("update", i), s && this.editor.on("selectionUpdate", s), a && this.editor.on("transaction", a), l && this.editor.on("focus", l), c && this.editor.on("blur", c), d && this.editor.on("destroy", d)
                    })
                }
            };
            zd.resolve = Ac, zd.sort = Tc, zd.flatten = uc;
            var jd = {};
            Ka(jd, {
                ClipboardTextSerializer: () => Hd,
                Commands: () => Vd,
                Delete: () => Fd,
                Drop: () => _d,
                Editable: () => Wd,
                FocusEvents: () => Kd,
                Keymap: () => Ud,
                Paste: () => Jd,
                Tabindex: () => Gd,
                TextDirection: () => Yd,
                focusEventsPluginKey: () => qd
            });
            var Bd = class t extends Ad {
                    constructor() {
                        super(...arguments), this.type = "extension"
                    }
                    static create(e = {}) {
                        const n = "function" === typeof e ? e() : e;
                        return new t(n)
                    }
                    configure(t) {
                        return super.configure(t)
                    }
                    extend(t) {
                        const e = "function" === typeof t ? t() : t;
                        return super.extend(e)
                    }
                },
                Hd = Bd.create({
                    name: "clipboardTextSerializer",
                    addOptions() {
                        return {
                            blockSeparator: void 0
                        }
                    },
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("clipboardTextSerializer"),
                            props: {
                                clipboardTextSerializer: () => {
                                    const {
                                        editor: t
                                    } = this, {
                                        state: e,
                                        schema: n
                                    } = t, {
                                        doc: r,
                                        selection: o
                                    } = e, {
                                        ranges: i
                                    } = o, s = Math.min(...i.map(t => t.$from.pos)), a = Math.max(...i.map(t => t.$to.pos)), l = Dc(n), c = {
                                        from: s,
                                        to: a
                                    };
                                    return Nc(r, c, { ...void 0 !== this.options.blockSeparator ? {
                                            blockSeparator: this.options.blockSeparator
                                        } : {},
                                        textSerializers: l
                                    })
                                }
                            }
                        })]
                    }
                }),
                Vd = Bd.create({
                    name: "commands",
                    addCommands() {
                        return { ...Ga
                        }
                    }
                }),
                Fd = Bd.create({
                    name: "delete",
                    onUpdate({
                        transaction: t,
                        appendedTransactions: e
                    }) {
                        var n, r, o;
                        const i = () => {
                            var n, r, o, i;
                            if (null != (i = null == (o = null == (r = null == (n = this.editor.options.coreExtensionOptions) ? void 0 : n.delete) ? void 0 : r.filterTransaction) ? void 0 : o.call(r, t)) ? i : t.getMeta("y-sync$")) return;
                            const s = sc(t.before, [t, ...e]),
                                a = $c(s);
                            a.forEach(e => {
                                s.mapping.mapResult(e.oldRange.from).deletedAfter && s.mapping.mapResult(e.oldRange.to).deletedBefore && s.before.nodesBetween(e.oldRange.from, e.oldRange.to, (n, r) => {
                                    const o = r + n.nodeSize - 2,
                                        i = e.oldRange.from <= r && o <= e.oldRange.to;
                                    this.editor.emit("delete", {
                                        type: "node",
                                        node: n,
                                        from: r,
                                        to: o,
                                        newFrom: s.mapping.map(r),
                                        newTo: s.mapping.map(o),
                                        deletedRange: e.oldRange,
                                        newRange: e.newRange,
                                        partial: !i,
                                        editor: this.editor,
                                        transaction: t,
                                        combinedTransform: s
                                    })
                                })
                            });
                            const l = s.mapping;
                            s.steps.forEach((e, n) => {
                                var r, o;
                                if (e instanceof Gt) {
                                    const i = l.slice(n).map(e.from, -1),
                                        a = l.slice(n).map(e.to),
                                        c = l.invert().map(i, -1),
                                        d = l.invert().map(a),
                                        h = null == (r = s.doc.nodeAt(i - 1)) ? void 0 : r.marks.some(t => t.eq(e.mark)),
                                        u = null == (o = s.doc.nodeAt(a)) ? void 0 : o.marks.some(t => t.eq(e.mark));
                                    this.editor.emit("delete", {
                                        type: "mark",
                                        mark: e.mark,
                                        from: e.from,
                                        to: e.to,
                                        deletedRange: {
                                            from: c,
                                            to: d
                                        },
                                        newRange: {
                                            from: i,
                                            to: a
                                        },
                                        partial: Boolean(u || h),
                                        editor: this.editor,
                                        transaction: t,
                                        combinedTransform: s
                                    })
                                }
                            })
                        };
                        null == (o = null == (r = null == (n = this.editor.options.coreExtensionOptions) ? void 0 : n.delete) ? void 0 : r.async) || o ? setTimeout(i, 0) : i()
                    }
                }),
                _d = Bd.create({
                    name: "drop",
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("tiptapDrop"),
                            props: {
                                handleDrop: (t, e, n, r) => {
                                    this.editor.emit("drop", {
                                        editor: this.editor,
                                        event: e,
                                        slice: n,
                                        moved: r
                                    })
                                }
                            }
                        })]
                    }
                }),
                Wd = Bd.create({
                    name: "editable",
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("editable"),
                            props: {
                                editable: () => this.editor.options.editable
                            }
                        })]
                    }
                }),
                qd = new bn("focusEvents"),
                Kd = Bd.create({
                    name: "focusEvents",
                    addProseMirrorPlugins() {
                        const {
                            editor: t
                        } = this;
                        return [new mn({
                            key: qd,
                            props: {
                                handleDOMEvents: {
                                    focus: (e, n) => {
                                        t.isFocused = !0;
                                        const r = t.state.tr.setMeta("focus", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return e.dispatch(r), !1
                                    },
                                    blur: (e, n) => {
                                        t.isFocused = !1;
                                        const r = t.state.tr.setMeta("blur", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return e.dispatch(r), !1
                                    }
                                }
                            }
                        })]
                    }
                }),
                Ud = Bd.create({
                    name: "keymap",
                    addKeyboardShortcuts() {
                        const t = () => this.editor.commands.first(({
                                commands: t
                            }) => [() => t.undoInputRule(), () => t.command(({
                                tr: e
                            }) => {
                                const {
                                    selection: n,
                                    doc: r
                                } = e, {
                                    empty: o,
                                    $anchor: i
                                } = n, {
                                    pos: s,
                                    parent: a
                                } = i, l = i.parent.isTextblock && s > 0 ? e.doc.resolve(s - 1) : i, c = l.parent.type.spec.isolating, d = i.pos - i.parentOffset, h = c && 1 === l.parent.childCount ? d === i.pos : Ke.atStart(r).from === s;
                                return !(!o || !a.type.isTextblock || a.textContent.length || !h || h && "paragraph" === i.parent.type.name) && t.clearNodes()
                            }), () => t.deleteSelection(), () => t.joinBackward(), () => t.selectNodeBackward()]),
                            e = () => this.editor.commands.first(({
                                commands: t
                            }) => [() => t.deleteSelection(), () => t.deleteCurrentNode(), () => t.joinForward(), () => t.selectNodeForward()]),
                            n = () => this.editor.commands.first(({
                                commands: t
                            }) => [() => t.newlineInCode(), () => t.createParagraphNear(), () => t.liftEmptyBlock(), () => t.splitBlock()]),
                            r = {
                                Enter: n,
                                "Mod-Enter": () => this.editor.commands.exitCode(),
                                Backspace: t,
                                "Mod-Backspace": t,
                                "Shift-Backspace": t,
                                Delete: e,
                                "Mod-Delete": e,
                                "Mod-a": () => this.editor.commands.selectAll()
                            },
                            o = { ...r
                            },
                            i = { ...r,
                                "Ctrl-h": t,
                                "Alt-Backspace": t,
                                "Ctrl-d": e,
                                "Ctrl-Alt-Backspace": e,
                                "Alt-Delete": e,
                                "Alt-d": e,
                                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                                "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
                            };
                        return kl() || Bl() ? i : o
                    },
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("clearDocument"),
                            appendTransaction: (t, e, n) => {
                                if (t.some(t => t.getMeta("composition"))) return;
                                const r = t.some(t => t.docChanged) && !e.doc.eq(n.doc),
                                    o = t.some(t => t.getMeta("preventClearDocument"));
                                if (!r || o) return;
                                const {
                                    empty: i,
                                    from: s,
                                    to: a
                                } = e.selection, l = Ke.atStart(e.doc).from, c = Ke.atEnd(e.doc).to, d = s === l && a === c;
                                if (i || !d) return;
                                const h = Jc(n.doc);
                                if (!h) return;
                                const u = n.tr,
                                    p = Ua({
                                        state: n,
                                        transaction: u
                                    }),
                                    {
                                        commands: f
                                    } = new Ja({
                                        editor: this.editor,
                                        state: p
                                    });
                                return f.clearNodes(), u.steps.length ? u : void 0
                            }
                        })]
                    }
                }),
                Jd = Bd.create({
                    name: "paste",
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("tiptapPaste"),
                            props: {
                                handlePaste: (t, e, n) => {
                                    this.editor.emit("paste", {
                                        editor: this.editor,
                                        event: e,
                                        slice: n
                                    })
                                }
                            }
                        })]
                    }
                }),
                Gd = Bd.create({
                    name: "tabindex",
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("tabindex"),
                            props: {
                                attributes: () => this.editor.isEditable ? {
                                    tabindex: "0"
                                } : {}
                            }
                        })]
                    }
                }),
                Yd = Bd.create({
                    name: "textDirection",
                    addOptions() {
                        return {
                            direction: void 0
                        }
                    },
                    addGlobalAttributes() {
                        if (!this.options.direction) return [];
                        const {
                            nodeExtensions: t
                        } = yc(this.extensions);
                        return [{
                            types: t.filter(t => "text" !== t.name).map(t => t.name),
                            attributes: {
                                dir: {
                                    default: this.options.direction,
                                    parseHTML: t => {
                                        const e = t.getAttribute("dir");
                                        return !e || "ltr" !== e && "rtl" !== e && "auto" !== e ? this.options.direction : e
                                    },
                                    renderHTML: t => t.dir ? {
                                        dir: t.dir
                                    } : {}
                                }
                            }
                        }]
                    },
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("textDirection"),
                            props: {
                                attributes: () => {
                                    const t = this.options.direction;
                                    return t ? {
                                        dir: t
                                    } : {}
                                }
                            }
                        })]
                    }
                }),
                Xd = class t {
                    constructor(t, e, n = !1, r = null) {
                        this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = t, this.editor = e, this.currentNode = r
                    }
                    get name() {
                        return this.node.type.name
                    }
                    get node() {
                        return this.currentNode || this.resolvedPos.node()
                    }
                    get element() {
                        return this.editor.view.domAtPos(this.pos).node
                    }
                    get depth() {
                        var t;
                        return null != (t = this.actualDepth) ? t : this.resolvedPos.depth
                    }
                    get pos() {
                        return this.resolvedPos.pos
                    }
                    get content() {
                        return this.node.content
                    }
                    set content(t) {
                        let e = this.from,
                            n = this.to;
                        if (this.isBlock) {
                            if (0 === this.content.size) return void console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                            e = this.from + 1, n = this.to - 1
                        }
                        this.editor.commands.insertContentAt({
                            from: e,
                            to: n
                        }, t)
                    }
                    get attributes() {
                        return this.node.attrs
                    }
                    get textContent() {
                        return this.node.textContent
                    }
                    get size() {
                        return this.node.nodeSize
                    }
                    get from() {
                        return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth)
                    }
                    get range() {
                        return {
                            from: this.from,
                            to: this.to
                        }
                    }
                    get to() {
                        return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1)
                    }
                    get parent() {
                        if (0 === this.depth) return null;
                        const e = this.resolvedPos.start(this.resolvedPos.depth - 1),
                            n = this.resolvedPos.doc.resolve(e);
                        return new t(n, this.editor)
                    }
                    get before() {
                        let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
                        return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new t(e, this.editor)
                    }
                    get after() {
                        let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
                        return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new t(e, this.editor)
                    }
                    get children() {
                        const e = [];
                        return this.node.content.forEach((n, r) => {
                            const o = n.isBlock && !n.isTextblock,
                                i = n.isAtom && !n.isText,
                                s = this.pos + r + (i ? 0 : 1);
                            if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
                            const a = this.resolvedPos.doc.resolve(s);
                            if (!o && a.depth <= this.depth) return;
                            const l = new t(a, this.editor, o, o ? n : null);
                            o && (l.actualDepth = this.depth + 1), e.push(new t(a, this.editor, o, o ? n : null))
                        }), e
                    }
                    get firstChild() {
                        return this.children[0] || null
                    }
                    get lastChild() {
                        const t = this.children;
                        return t[t.length - 1] || null
                    }
                    closest(t, e = {}) {
                        let n = null,
                            r = this.parent;
                        while (r && !n) {
                            if (r.node.type.name === t)
                                if (Object.keys(e).length > 0) {
                                    const t = r.node.attrs,
                                        n = Object.keys(e);
                                    for (let r = 0; r < n.length; r += 1) {
                                        const o = n[r];
                                        if (t[o] !== e[o]) break
                                    }
                                } else n = r;
                            r = r.parent
                        }
                        return n
                    }
                    querySelector(t, e = {}) {
                        return this.querySelectorAll(t, e, !0)[0] || null
                    }
                    querySelectorAll(t, e = {}, n = !1) {
                        let r = [];
                        if (!this.children || 0 === this.children.length) return r;
                        const o = Object.keys(e);
                        return this.children.forEach(i => {
                            if (!(n && r.length > 0)) {
                                if (i.node.type.name === t) {
                                    const t = o.every(t => e[t] === i.node.attrs[t]);
                                    t && r.push(i)
                                }
                                n && r.length > 0 || (r = r.concat(i.querySelectorAll(t, e, n)))
                            }
                        }), r
                    }
                    setAttribute(t) {
                        const {
                            tr: e
                        } = this.editor.state;
                        e.setNodeMarkup(this.from, void 0, { ...this.node.attrs,
                            ...t
                        }), this.editor.view.dispatch(e)
                    }
                },
                Qd = '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}';

            function Zd(t, e, n) {
                const r = document.querySelector(`style[data-tiptap-style${n?"-"+n:""}]`);
                if (null !== r) return r;
                const o = document.createElement("style");
                return e && o.setAttribute("nonce", e), o.setAttribute("data-tiptap-style" + (n ? "-" + n : ""), ""), o.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(o), o
            }
            var th = class extends wd {
                constructor(t = {}) {
                    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
                        element: "undefined" !== typeof document ? document.createElement("div") : null,
                        content: "",
                        injectCSS: !0,
                        injectNonce: void 0,
                        extensions: [],
                        autofocus: !1,
                        editable: !0,
                        textDirection: void 0,
                        editorProps: {},
                        parseOptions: {},
                        coreExtensionOptions: {},
                        enableInputRules: !0,
                        enablePasteRules: !0,
                        enableCoreExtensions: !0,
                        enableContentCheck: !1,
                        emitContentError: !1,
                        onBeforeCreate: () => null,
                        onCreate: () => null,
                        onMount: () => null,
                        onUnmount: () => null,
                        onUpdate: () => null,
                        onSelectionUpdate: () => null,
                        onTransaction: () => null,
                        onFocus: () => null,
                        onBlur: () => null,
                        onDestroy: () => null,
                        onContentError: ({
                            error: t
                        }) => {
                            throw t
                        },
                        onPaste: () => null,
                        onDrop: () => null,
                        onDelete: () => null
                    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
                        editor: this
                    }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({
                        event: t,
                        slice: e,
                        moved: n
                    }) => this.options.onDrop(t, e, n)), this.on("paste", ({
                        event: t,
                        slice: e
                    }) => this.options.onPaste(t, e)), this.on("delete", this.options.onDelete);
                    const e = this.createDoc(),
                        n = vl(e, this.options.autofocus);
                    this.editorState = pn.create({
                        doc: e,
                        schema: this.schema,
                        selection: n || void 0
                    }), this.options.element && this.mount(this.options.element)
                }
                mount(t) {
                    if ("undefined" === typeof document) throw new Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
                    this.createView(t), this.emit("mount", {
                        editor: this
                    }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
                        this.isDestroyed || (!1 !== this.options.autofocus && null !== this.options.autofocus && this.commands.focus(this.options.autofocus), this.emit("create", {
                            editor: this
                        }), this.isInitialized = !0)
                    }, 0)
                }
                unmount() {
                    if (this.editorView) {
                        const t = this.editorView.dom;
                        (null == t ? void 0 : t.editor) && delete t.editor, this.editorView.destroy()
                    }
                    if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll("." + this.className).length) try {
                        "function" === typeof this.css.remove ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css)
                    } catch (t) {
                        console.warn("Failed to remove CSS element:", t)
                    }
                    this.css = null, this.emit("unmount", {
                        editor: this
                    })
                }
                get storage() {
                    return this.extensionStorage
                }
                get commands() {
                    return this.commandManager.commands
                }
                chain() {
                    return this.commandManager.chain()
                }
                can() {
                    return this.commandManager.can()
                }
                injectCSS() {
                    this.options.injectCSS && "undefined" !== typeof document && (this.css = Zd(Qd, this.options.injectNonce))
                }
                setOptions(t = {}) {
                    this.options = { ...this.options,
                        ...t
                    }, this.editorView && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state))
                }
                setEditable(t, e = !0) {
                    this.setOptions({
                        editable: t
                    }), e && this.emit("update", {
                        editor: this,
                        transaction: this.state.tr,
                        appendedTransactions: []
                    })
                }
                get isEditable() {
                    return this.options.editable && this.view && this.view.editable
                }
                get view() {
                    return this.editorView ? this.editorView : new Proxy({
                        state: this.editorState,
                        updateState: t => {
                            this.editorState = t
                        },
                        dispatch: t => {
                            this.dispatchTransaction(t)
                        },
                        composing: !1,
                        dragging: null,
                        editable: !0,
                        isDestroyed: !1
                    }, {
                        get: (t, e) => {
                            if (this.editorView) return this.editorView[e];
                            if ("state" === e) return this.editorState;
                            if (e in t) return Reflect.get(t, e);
                            throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`)
                        }
                    })
                }
                get state() {
                    return this.editorView && (this.editorState = this.view.state), this.editorState
                }
                registerPlugin(t, e) {
                    const n = fc(e) ? e(t, [...this.state.plugins]) : [...this.state.plugins, t],
                        r = this.state.reconfigure({
                            plugins: n
                        });
                    return this.view.updateState(r), r
                }
                unregisterPlugin(t) {
                    if (this.isDestroyed) return;
                    const e = this.state.plugins;
                    let n = e;
                    if ([].concat(t).forEach(t => {
                            const e = "string" === typeof t ? t + "$" : t.key;
                            n = n.filter(t => !t.key.startsWith(e))
                        }), e.length === n.length) return;
                    const r = this.state.reconfigure({
                        plugins: n
                    });
                    return this.view.updateState(r), r
                }
                createExtensionManager() {
                    var t, e;
                    const n = this.options.enableCoreExtensions ? [Wd, Hd.configure({
                            blockSeparator: null == (e = null == (t = this.options.coreExtensionOptions) ? void 0 : t.clipboardTextSerializer) ? void 0 : e.blockSeparator
                        }), Vd, Kd, Ud, Gd, _d, Jd, Fd, Yd.configure({
                            direction: this.options.textDirection
                        })].filter(t => "object" !== typeof this.options.enableCoreExtensions || !1 !== this.options.enableCoreExtensions[t.name]) : [],
                        r = [...n, ...this.options.extensions].filter(t => ["extension", "node", "mark"].includes(null == t ? void 0 : t.type));
                    this.extensionManager = new zd(r, this)
                }
                createCommandManager() {
                    this.commandManager = new Ja({
                        editor: this
                    })
                }
                createSchema() {
                    this.schema = this.extensionManager.schema
                }
                createDoc() {
                    let t;
                    try {
                        t = rc(this.options.content, this.schema, this.options.parseOptions, {
                            errorOnInvalidContent: this.options.enableContentCheck
                        })
                    } catch (e) {
                        if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
                        this.emit("contentError", {
                            editor: this,
                            error: e,
                            disableCollaboration: () => {
                                "collaboration" in this.storage && "object" === typeof this.storage.collaboration && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter(t => "collaboration" !== t.name), this.createExtensionManager()
                            }
                        }), t = rc(this.options.content, this.schema, this.options.parseOptions, {
                            errorOnInvalidContent: !1
                        })
                    }
                    return t
                }
                createView(t) {
                    var e;
                    this.editorView = new Sa(t, { ...this.options.editorProps,
                        attributes: {
                            role: "textbox",
                            ...null == (e = this.options.editorProps) ? void 0 : e.attributes
                        },
                        dispatchTransaction: this.dispatchTransaction.bind(this),
                        state: this.editorState,
                        markViews: this.extensionManager.markViews,
                        nodeViews: this.extensionManager.nodeViews
                    });
                    const n = this.state.reconfigure({
                        plugins: this.extensionManager.plugins
                    });
                    this.view.updateState(n), this.prependClass(), this.injectCSS();
                    const r = this.view.dom;
                    r.editor = this
                }
                createNodeViews() {
                    this.view.isDestroyed || this.view.setProps({
                        markViews: this.extensionManager.markViews,
                        nodeViews: this.extensionManager.nodeViews
                    })
                }
                prependClass() {
                    this.view.dom.className = `${this.className} ${this.view.dom.className}`
                }
                captureTransaction(t) {
                    this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
                    const e = this.capturedTransaction;
                    return this.capturedTransaction = null, e
                }
                dispatchTransaction(t) {
                    if (this.view.isDestroyed) return;
                    if (this.isCapturingTransaction) return this.capturedTransaction ? void t.steps.forEach(t => {
                        var e;
                        return null == (e = this.capturedTransaction) ? void 0 : e.step(t)
                    }) : void(this.capturedTransaction = t);
                    const {
                        state: e,
                        transactions: n
                    } = this.state.applyTransaction(t), r = !this.state.selection.eq(e.selection), o = n.includes(t), i = this.state;
                    if (this.emit("beforeTransaction", {
                            editor: this,
                            transaction: t,
                            nextState: e
                        }), !o) return;
                    this.view.updateState(e), this.emit("transaction", {
                        editor: this,
                        transaction: t,
                        appendedTransactions: n.slice(1)
                    }), r && this.emit("selectionUpdate", {
                        editor: this,
                        transaction: t
                    });
                    const s = n.findLast(t => t.getMeta("focus") || t.getMeta("blur")),
                        a = null == s ? void 0 : s.getMeta("focus"),
                        l = null == s ? void 0 : s.getMeta("blur");
                    a && this.emit("focus", {
                        editor: this,
                        event: a.event,
                        transaction: s
                    }), l && this.emit("blur", {
                        editor: this,
                        event: l.event,
                        transaction: s
                    }), t.getMeta("preventUpdate") || !n.some(t => t.docChanged) || i.doc.eq(e.doc) || this.emit("update", {
                        editor: this,
                        transaction: t,
                        appendedTransactions: n.slice(1)
                    })
                }
                getAttributes(t) {
                    return Rc(this.state, t)
                }
                isActive(t, e) {
                    const n = "string" === typeof t ? t : null,
                        r = "string" === typeof t ? e : t;
                    return _c(this.state, n, r)
                }
                getJSON() {
                    return this.state.doc.toJSON()
                }
                getHTML() {
                    return pc(this.state.doc.content, this.schema)
                }
                getText(t) {
                    const {
                        blockSeparator: e = "\n\n",
                        textSerializers: n = {}
                    } = t || {};
                    return Ec(this.state.doc, {
                        blockSeparator: e,
                        textSerializers: { ...Dc(this.schema),
                            ...n
                        }
                    })
                }
                get isEmpty() {
                    return Jc(this.state.doc)
                }
                destroy() {
                    this.emit("destroy"), this.unmount(), this.removeAllListeners()
                }
                get isDestroyed() {
                    var t, e;
                    return null == (e = null == (t = this.editorView) ? void 0 : t.isDestroyed) || e
                }
                $node(t, e) {
                    var n;
                    return (null == (n = this.$doc) ? void 0 : n.querySelector(t, e)) || null
                }
                $nodes(t, e) {
                    var n;
                    return (null == (n = this.$doc) ? void 0 : n.querySelectorAll(t, e)) || null
                }
                $pos(t) {
                    const e = this.state.doc.resolve(t);
                    return new Xd(e, this)
                }
                get $doc() {
                    return this.$pos(0)
                }
            };

            function eh(t) {
                return new kd({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = mc(t.getAttributes, void 0, r);
                        if (!1 === o || null === o) return null;
                        const {
                            tr: i
                        } = e, s = r[r.length - 1], a = r[0];
                        if (s) {
                            const r = a.search(/\S/),
                                l = n.from + a.indexOf(s),
                                c = l + s.length,
                                d = zc(n.from, n.to, e.doc).filter(e => {
                                    const n = e.mark.type.excluded;
                                    return n.find(n => n === t.type && n !== e.mark.type)
                                }).filter(t => t.to > l);
                            if (d.length) return null;
                            c < n.to && i.delete(c, n.to), l > n.from && i.delete(n.from + r, l);
                            const h = n.from + r + s.length;
                            i.addMark(n.from + r, h, t.type.create(o || {})), i.removeStoredMark(t.type)
                        }
                    },
                    undoable: t.undoable
                })
            }

            function nh(t) {
                return new kd({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = mc(t.getAttributes, void 0, r) || {},
                            {
                                tr: i
                            } = e,
                            s = n.from;
                        let a = n.to;
                        const l = t.type.create(o);
                        if (r[1]) {
                            const t = r[0].lastIndexOf(r[1]);
                            let e = s + t;
                            e > a ? e = a : a = e + r[1].length;
                            const n = r[0][r[0].length - 1];
                            i.insertText(n, s + r[0].length - 1), i.replaceWith(e, a, l)
                        } else if (r[0]) {
                            const e = t.type.isInline ? s : s - 1;
                            i.insert(e, t.type.create(o)).delete(i.mapping.map(s), i.mapping.map(a))
                        }
                        i.scrollIntoView()
                    },
                    undoable: t.undoable
                })
            }

            function rh(t) {
                return new kd({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r
                    }) => {
                        const o = e.doc.resolve(n.from),
                            i = mc(t.getAttributes, void 0, r) || {};
                        if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t.type)) return null;
                        e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, i)
                    },
                    undoable: t.undoable
                })
            }

            function oh(t) {
                return new kd({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r,
                        chain: o
                    }) => {
                        const i = mc(t.getAttributes, void 0, r) || {},
                            s = e.tr.delete(n.from, n.to),
                            a = s.doc.resolve(n.from),
                            l = a.blockRange(),
                            c = l && ae(l, t.type, i);
                        if (!c) return null;
                        if (s.wrap(l, c), t.keepMarks && t.editor) {
                            const {
                                selection: n,
                                storedMarks: r
                            } = e, {
                                splittableMarks: o
                            } = t.editor.extensionManager, i = r || n.$to.parentOffset && n.$from.marks();
                            if (i) {
                                const t = i.filter(t => o.includes(t.type.name));
                                s.ensureMarks(t)
                            }
                        }
                        if (t.keepAttributes) {
                            const e = "bulletList" === t.type.name || "orderedList" === t.type.name ? "listItem" : "taskList";
                            o().updateAttributes(e, i).run()
                        }
                        const d = s.doc.resolve(n.from - 1).nodeBefore;
                        d && d.type === t.type && ve(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, d)) && s.join(n.from - 1)
                    },
                    undoable: t.undoable
                })
            }
            var ih = t => "touches" in t,
                sh = class {
                    constructor(t) {
                        var e, n, r, o, i;
                        this.directions = ["bottom-left", "bottom-right", "top-left", "top-right"], this.minSize = {
                            height: 8,
                            width: 8
                        }, this.preserveAspectRatio = !1, this.classNames = {
                            container: "",
                            wrapper: "",
                            handle: "",
                            resizing: ""
                        }, this.initialWidth = 0, this.initialHeight = 0, this.aspectRatio = 1, this.isResizing = !1, this.activeHandle = null, this.startX = 0, this.startY = 0, this.startWidth = 0, this.startHeight = 0, this.isShiftKeyPressed = !1, this.handleMouseMove = t => {
                            if (!this.isResizing || !this.activeHandle) return;
                            const e = t.clientX - this.startX,
                                n = t.clientY - this.startY;
                            this.handleResize(e, n)
                        }, this.handleTouchMove = t => {
                            if (!this.isResizing || !this.activeHandle) return;
                            const e = t.touches[0];
                            if (!e) return;
                            const n = e.clientX - this.startX,
                                r = e.clientY - this.startY;
                            this.handleResize(n, r)
                        }, this.handleMouseUp = () => {
                            if (!this.isResizing) return;
                            const t = this.element.offsetWidth,
                                e = this.element.offsetHeight;
                            this.onCommit(t, e), this.isResizing = !1, this.activeHandle = null, this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp)
                        }, this.handleKeyDown = t => {
                            "Shift" === t.key && (this.isShiftKeyPressed = !0)
                        }, this.handleKeyUp = t => {
                            "Shift" === t.key && (this.isShiftKeyPressed = !1)
                        }, this.node = t.node, this.element = t.element, this.contentElement = t.contentElement, this.getPos = t.getPos, this.onResize = t.onResize, this.onCommit = t.onCommit, this.onUpdate = t.onUpdate, (null == (e = t.options) ? void 0 : e.min) && (this.minSize = { ...this.minSize,
                            ...t.options.min
                        }), (null == (n = t.options) ? void 0 : n.max) && (this.maxSize = t.options.max), (null == (r = null == t ? void 0 : t.options) ? void 0 : r.directions) && (this.directions = t.options.directions), (null == (o = t.options) ? void 0 : o.preserveAspectRatio) && (this.preserveAspectRatio = t.options.preserveAspectRatio), (null == (i = t.options) ? void 0 : i.className) && (this.classNames = {
                            container: t.options.className.container || "",
                            wrapper: t.options.className.wrapper || "",
                            handle: t.options.className.handle || "",
                            resizing: t.options.className.resizing || ""
                        }), this.wrapper = this.createWrapper(), this.container = this.createContainer(), this.applyInitialSize(), this.attachHandles()
                    }
                    get dom() {
                        return this.container
                    }
                    get contentDOM() {
                        return this.contentElement
                    }
                    update(t, e, n) {
                        return t.type === this.node.type && (this.node = t, !this.onUpdate || this.onUpdate(t, e, n))
                    }
                    destroy() {
                        this.isResizing && (this.container.dataset.resizeState = "false", this.classNames.resizing && this.container.classList.remove(this.classNames.resizing), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp), this.isResizing = !1, this.activeHandle = null), this.container.remove()
                    }
                    createContainer() {
                        const t = document.createElement("div");
                        return t.dataset.resizeContainer = "", t.dataset.node = this.node.type.name, t.style.display = "flex", t.style.justifyContent = "flex-start", t.style.alignItems = "flex-start", this.classNames.container && (t.className = this.classNames.container), t.appendChild(this.wrapper), t
                    }
                    createWrapper() {
                        const t = document.createElement("div");
                        return t.style.position = "relative", t.style.display = "block", t.dataset.resizeWrapper = "", this.classNames.wrapper && (t.className = this.classNames.wrapper), t.appendChild(this.element), t
                    }
                    createHandle(t) {
                        const e = document.createElement("div");
                        return e.dataset.resizeHandle = t, e.style.position = "absolute", this.classNames.handle && (e.className = this.classNames.handle), e
                    }
                    positionHandle(t, e) {
                        const n = e.includes("top"),
                            r = e.includes("bottom"),
                            o = e.includes("left"),
                            i = e.includes("right");
                        n && (t.style.top = "0"), r && (t.style.bottom = "0"), o && (t.style.left = "0"), i && (t.style.right = "0"), "top" !== e && "bottom" !== e || (t.style.left = "0", t.style.right = "0"), "left" !== e && "right" !== e || (t.style.top = "0", t.style.bottom = "0")
                    }
                    attachHandles() {
                        this.directions.forEach(t => {
                            const e = this.createHandle(t);
                            this.positionHandle(e, t), e.addEventListener("mousedown", e => this.handleResizeStart(e, t)), e.addEventListener("touchstart", e => this.handleResizeStart(e, t)), this.wrapper.appendChild(e)
                        })
                    }
                    applyInitialSize() {
                        const t = this.node.attrs.width,
                            e = this.node.attrs.height;
                        t ? (this.element.style.width = t + "px", this.initialWidth = t) : this.initialWidth = this.element.offsetWidth, e ? (this.element.style.height = e + "px", this.initialHeight = e) : this.initialHeight = this.element.offsetHeight, this.initialWidth > 0 && this.initialHeight > 0 && (this.aspectRatio = this.initialWidth / this.initialHeight)
                    }
                    handleResizeStart(t, e) {
                        t.preventDefault(), t.stopPropagation(), this.isResizing = !0, this.activeHandle = e, ih(t) ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), this.startWidth = this.element.offsetWidth, this.startHeight = this.element.offsetHeight, this.startWidth > 0 && this.startHeight > 0 && (this.aspectRatio = this.startWidth / this.startHeight);
                        this.getPos();
                        this.container.dataset.resizeState = "true", this.classNames.resizing && this.container.classList.add(this.classNames.resizing), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleTouchMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp)
                    }
                    handleResize(t, e) {
                        if (!this.activeHandle) return;
                        const n = this.preserveAspectRatio || this.isShiftKeyPressed,
                            {
                                width: r,
                                height: o
                            } = this.calculateNewDimensions(this.activeHandle, t, e),
                            i = this.applyConstraints(r, o, n);
                        this.element.style.width = i.width + "px", this.element.style.height = i.height + "px", this.onResize && this.onResize(i.width, i.height)
                    }
                    calculateNewDimensions(t, e, n) {
                        let r = this.startWidth,
                            o = this.startHeight;
                        const i = t.includes("right"),
                            s = t.includes("left"),
                            a = t.includes("bottom"),
                            l = t.includes("top");
                        i ? r = this.startWidth + e : s && (r = this.startWidth - e), a ? o = this.startHeight + n : l && (o = this.startHeight - n), "right" !== t && "left" !== t || (r = this.startWidth + (i ? e : -e)), "top" !== t && "bottom" !== t || (o = this.startHeight + (a ? n : -n));
                        const c = this.preserveAspectRatio || this.isShiftKeyPressed;
                        return c ? this.applyAspectRatio(r, o, t) : {
                            width: r,
                            height: o
                        }
                    }
                    applyConstraints(t, e, n) {
                        var r, o, i, s;
                        if (!n) {
                            let n = Math.max(this.minSize.width, t),
                                i = Math.max(this.minSize.height, e);
                            return (null == (r = this.maxSize) ? void 0 : r.width) && (n = Math.min(this.maxSize.width, n)), (null == (o = this.maxSize) ? void 0 : o.height) && (i = Math.min(this.maxSize.height, i)), {
                                width: n,
                                height: i
                            }
                        }
                        let a = t,
                            l = e;
                        return a < this.minSize.width && (a = this.minSize.width, l = a / this.aspectRatio), l < this.minSize.height && (l = this.minSize.height, a = l * this.aspectRatio), (null == (i = this.maxSize) ? void 0 : i.width) && a > this.maxSize.width && (a = this.maxSize.width, l = a / this.aspectRatio), (null == (s = this.maxSize) ? void 0 : s.height) && l > this.maxSize.height && (l = this.maxSize.height, a = l * this.aspectRatio), {
                            width: a,
                            height: l
                        }
                    }
                    applyAspectRatio(t, e, n) {
                        const r = "left" === n || "right" === n,
                            o = "top" === n || "bottom" === n;
                        return r ? {
                            width: t,
                            height: t / this.aspectRatio
                        } : o ? {
                            width: e * this.aspectRatio,
                            height: e
                        } : {
                            width: t,
                            height: t / this.aspectRatio
                        }
                    }
                };

            function ah(t, e) {
                const {
                    selection: n
                } = t, {
                    $from: r
                } = n;
                if (n instanceof Qe) {
                    const t = r.index(),
                        n = r.parent;
                    return n.canReplaceWith(t, t + 1, e)
                }
                let o = r.depth;
                while (o >= 0) {
                    const t = r.index(o),
                        n = r.node(o),
                        i = n.contentMatchAt(t);
                    if (i.matchType(e)) return !0;
                    o -= 1
                }
                return !1
            }
            var lh = {};

            function ch(t) {
                if (!(null == t ? void 0 : t.trim())) return {};
                const e = {},
                    n = [],
                    r = t.replace(/["']([^"']*)["']/g, t => (n.push(t), `__QUOTED_${n.length-1}__`)),
                    o = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
                if (o) {
                    const t = o.map(t => t.trim().slice(1));
                    e.class = t.join(" ")
                }
                const i = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
                i && (e.id = i[1]);
                const s = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g,
                    a = Array.from(r.matchAll(s));
                a.forEach(([, t, r]) => {
                    var o;
                    const i = parseInt((null == (o = r.match(/__QUOTED_(\d+)__/)) ? void 0 : o[1]) || "0", 10),
                        s = n[i];
                    s && (e[t] = s.slice(1, -1))
                });
                const l = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
                if (l) {
                    const t = l.split(/\s+/).filter(Boolean);
                    t.forEach(t => {
                        t.match(/^[a-zA-Z][\w-]*$/) && (e[t] = !0)
                    })
                }
                return e
            }

            function dh(t) {
                if (!t || 0 === Object.keys(t).length) return "";
                const e = [];
                if (t.class) {
                    const n = String(t.class).split(/\s+/).filter(Boolean);
                    n.forEach(t => e.push("." + t))
                }
                return t.id && e.push("#" + t.id), Object.entries(t).forEach(([t, n]) => {
                    "class" !== t && "id" !== t && (!0 === n ? e.push(t) : !1 !== n && null != n && e.push(`${t}="${String(n)}"`))
                }), e.join(" ")
            }

            function hh(t) {
                const {
                    nodeName: e,
                    name: n,
                    parseAttributes: r = ch,
                    serializeAttributes: o = dh,
                    defaultAttributes: i = {},
                    requiredAttributes: s = [],
                    allowedAttributes: a
                } = t, l = n || e, c = t => {
                    if (!a) return t;
                    const e = {};
                    return a.forEach(n => {
                        n in t && (e[n] = t[n])
                    }), e
                };
                return {
                    parseMarkdown: (t, n) => {
                        const r = { ...i,
                            ...t.attributes
                        };
                        return n.createNode(e, r, [])
                    },
                    markdownTokenizer: {
                        name: e,
                        level: "block",
                        start(t) {
                            var e;
                            const n = new RegExp(`^:::${l}(?:\\s|$)`, "m"),
                                r = null == (e = t.match(n)) ? void 0 : e.index;
                            return void 0 !== r ? r : -1
                        },
                        tokenize(t, n, o) {
                            const i = new RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`),
                                a = t.match(i);
                            if (!a) return;
                            const c = a[1] || "",
                                d = r(c),
                                h = s.find(t => !(t in d));
                            return h ? void 0 : {
                                type: e,
                                raw: a[0],
                                attributes: d
                            }
                        }
                    },
                    renderMarkdown: t => {
                        const e = c(t.attrs || {}),
                            n = o(e),
                            r = n ? ` {${n}}` : "";
                        return `:::${l}${r} :::`
                    }
                }
            }

            function uh(t) {
                const {
                    nodeName: e,
                    name: n,
                    getContent: r,
                    parseAttributes: o = ch,
                    serializeAttributes: i = dh,
                    defaultAttributes: s = {},
                    content: a = "block",
                    allowedAttributes: l
                } = t, c = n || e, d = t => {
                    if (!l) return t;
                    const e = {};
                    return l.forEach(n => {
                        n in t && (e[n] = t[n])
                    }), e
                };
                return {
                    parseMarkdown: (t, n) => {
                        let o;
                        if (r) {
                            const e = r(t);
                            o = "string" === typeof e ? [{
                                type: "text",
                                text: e
                            }] : e
                        } else o = "block" === a ? n.parseChildren(t.tokens || []) : n.parseInline(t.tokens || []);
                        const i = { ...s,
                            ...t.attributes
                        };
                        return n.createNode(e, i, o)
                    },
                    markdownTokenizer: {
                        name: e,
                        level: "block",
                        start(t) {
                            var e;
                            const n = new RegExp("^:::" + c, "m"),
                                r = null == (e = t.match(n)) ? void 0 : e.index;
                            return void 0 !== r ? r : -1
                        },
                        tokenize(t, n, r) {
                            var i;
                            const s = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`),
                                l = t.match(s);
                            if (!l) return;
                            const [d, h = ""] = l, u = o(h);
                            let p = 1;
                            const f = d.length;
                            let m = "";
                            const g = /^:::([\w-]*)(\s.*)?/gm,
                                y = t.slice(f);
                            for (g.lastIndex = 0;;) {
                                const n = g.exec(y);
                                if (null === n) break;
                                const o = n.index,
                                    s = n[1];
                                if (!(null == (i = n[2]) ? void 0 : i.endsWith(":::")))
                                    if (s) p += 1;
                                    else if (p -= 1, 0 === p) {
                                    const i = y.slice(0, o);
                                    m = i.trim();
                                    const s = t.slice(0, f + o + n[0].length);
                                    let l = [];
                                    if (m)
                                        if ("block" === a) {
                                            l = r.blockTokens(i), l.forEach(t => {
                                                !t.text || t.tokens && 0 !== t.tokens.length || (t.tokens = r.inlineTokens(t.text))
                                            });
                                            while (l.length > 0) {
                                                const t = l[l.length - 1];
                                                if ("paragraph" !== t.type || t.text && "" !== t.text.trim()) break;
                                                l.pop()
                                            }
                                        } else l = r.inlineTokens(m);
                                    return {
                                        type: e,
                                        raw: s,
                                        attributes: u,
                                        content: m,
                                        tokens: l
                                    }
                                }
                            }
                        }
                    },
                    renderMarkdown: (t, e) => {
                        const n = d(t.attrs || {}),
                            r = i(n),
                            o = r ? ` {${r}}` : "",
                            s = e.renderChildren(t.content || [], "\n\n");
                        return `:::${c}${o}\n\n${s}\n\n:::`
                    }
                }
            }

            function ph(t) {
                if (!t.trim()) return {};
                const e = {},
                    n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
                let r = n.exec(t);
                while (null !== r) {
                    const [, o, i, s] = r;
                    e[o] = i || s, r = n.exec(t)
                }
                return e
            }

            function fh(t) {
                return Object.entries(t).filter(([, t]) => void 0 !== t && null !== t).map(([t, e]) => `${t}="${e}"`).join(" ")
            }

            function mh(t) {
                const {
                    nodeName: e,
                    name: n,
                    getContent: r,
                    parseAttributes: o = ph,
                    serializeAttributes: i = fh,
                    defaultAttributes: s = {},
                    selfClosing: a = !1,
                    allowedAttributes: l
                } = t, c = n || e, d = t => {
                    if (!l) return t;
                    const e = {};
                    return l.forEach(n => {
                        n in t && (e[n] = t[n])
                    }), e
                }, h = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                return {
                    parseMarkdown: (t, n) => {
                        const o = { ...s,
                            ...t.attributes
                        };
                        if (a) return n.createNode(e, o);
                        const i = r ? r(t) : t.content || "";
                        return i ? n.createNode(e, o, [n.createTextNode(i)]) : n.createNode(e, o, [])
                    },
                    markdownTokenizer: {
                        name: e,
                        level: "inline",
                        start(t) {
                            const e = a ? new RegExp(`\\[${h}\\s*[^\\]]*\\]`) : new RegExp(`\\[${h}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${h}\\]`),
                                n = t.match(e),
                                r = null == n ? void 0 : n.index;
                            return void 0 !== r ? r : -1
                        },
                        tokenize(t, n, r) {
                            const i = a ? new RegExp(`^\\[${h}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${h}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${h}\\]`),
                                s = t.match(i);
                            if (!s) return;
                            let l = "",
                                c = "";
                            if (a) {
                                const [, t] = s;
                                c = t
                            } else {
                                const [, t, e] = s;
                                c = t, l = e || ""
                            }
                            const d = o(c.trim());
                            return {
                                type: e,
                                raw: s[0],
                                content: l.trim(),
                                attributes: d
                            }
                        }
                    },
                    renderMarkdown: t => {
                        let e = "";
                        r ? e = r(t) : t.content && t.content.length > 0 && (e = t.content.filter(t => "text" === t.type).map(t => t.text).join(""));
                        const n = d(t.attrs || {}),
                            o = i(n),
                            s = o ? " " + o : "";
                        return a ? `[${c}${s}]` : `[${c}${s}]${e}[/${c}]`
                    }
                }
            }

            function gh(t, e, n) {
                var r, o, i, s;
                const a = t.split("\n"),
                    l = [];
                let c = "",
                    d = 0;
                const h = e.baseIndentSize || 2;
                while (d < a.length) {
                    const t = a[d],
                        u = t.match(e.itemPattern);
                    if (!u) {
                        if (l.length > 0) break;
                        if ("" === t.trim()) {
                            d += 1, c = `${c}${t}\n`;
                            continue
                        }
                        return
                    }
                    const p = e.extractItemData(u),
                        {
                            indentLevel: f,
                            mainContent: m
                        } = p;
                    c = `${c}${t}\n`;
                    const g = [m];
                    d += 1;
                    while (d < a.length) {
                        const t = a[d];
                        if ("" === t.trim()) {
                            const e = a.slice(d + 1).findIndex(t => "" !== t.trim());
                            if (-1 === e) break;
                            const n = a[d + 1 + e],
                                i = (null == (o = null == (r = n.match(/^(\s*)/)) ? void 0 : r[1]) ? void 0 : o.length) || 0;
                            if (i > f) {
                                g.push(t), c = `${c}${t}\n`, d += 1;
                                continue
                            }
                            break
                        }
                        const e = (null == (s = null == (i = t.match(/^(\s*)/)) ? void 0 : i[1]) ? void 0 : s.length) || 0;
                        if (!(e > f)) break;
                        g.push(t), c = `${c}${t}\n`, d += 1
                    }
                    let y;
                    const b = g.slice(1);
                    if (b.length > 0) {
                        const t = b.map(t => t.slice(f + h)).join("\n");
                        t.trim() && (y = e.customNestedParser ? e.customNestedParser(t) : n.blockTokens(t))
                    }
                    const v = e.createToken(p, y);
                    l.push(v)
                }
                if (0 !== l.length) return {
                    items: l,
                    raw: c
                }
            }

            function yh(t, e, n, r) {
                if (!t || !Array.isArray(t.content)) return "";
                const o = "function" === typeof n ? n(r) : n,
                    [i, ...s] = t.content,
                    a = e.renderChildren([i]),
                    l = [`${o}${a}`];
                return s && s.length > 0 && s.forEach(t => {
                    const n = e.renderChildren([t]);
                    if (n) {
                        const t = n.split("\n").map(t => t ? e.indent(t) : "").join("\n");
                        l.push(t)
                    }
                }), l.join("\n")
            }

            function bh(t, e, n = {}) {
                const {
                    state: r
                } = e, {
                    doc: o,
                    tr: i
                } = r, s = t;
                o.descendants((e, r) => {
                    const o = i.mapping.map(r),
                        a = i.mapping.map(r) + e.nodeSize;
                    let l = null;
                    if (e.marks.forEach(t => {
                            if (t !== s) return !1;
                            l = t
                        }), !l) return;
                    let c = !1;
                    if (Object.keys(n).forEach(t => {
                            n[t] !== l.attrs[t] && (c = !0)
                        }), c) {
                        const e = t.type.create({ ...t.attrs,
                            ...n
                        });
                        i.removeMark(o, a, t.type), i.addMark(o, a, e)
                    }
                }), i.docChanged && e.view.dispatch(i)
            }
            Ka(lh, {
                createAtomBlockMarkdownSpec: () => hh,
                createBlockMarkdownSpec: () => uh,
                createInlineMarkdownSpec: () => mh,
                parseAttributes: () => ch,
                parseIndentedBlocks: () => gh,
                renderNestedMarkdownContent: () => yh,
                serializeAttributes: () => dh
            });
            var vh = class t extends Ad {
                constructor() {
                    super(...arguments), this.type = "node"
                }
                static create(e = {}) {
                    const n = "function" === typeof e ? e() : e;
                    return new t(n)
                }
                configure(t) {
                    return super.configure(t)
                }
                extend(t) {
                    const e = "function" === typeof t ? t() : t;
                    return super.extend(e)
                }
            };

            function wh(t) {
                return new Dd({
                    find: t.find,
                    handler: ({
                        state: e,
                        range: n,
                        match: r,
                        pasteEvent: o
                    }) => {
                        const i = mc(t.getAttributes, void 0, r, o);
                        if (!1 === i || null === i) return null;
                        const {
                            tr: s
                        } = e, a = r[r.length - 1], l = r[0];
                        let c = n.to;
                        if (a) {
                            const r = l.search(/\S/),
                                o = n.from + l.indexOf(a),
                                d = o + a.length,
                                h = zc(n.from, n.to, e.doc).filter(e => {
                                    const n = e.mark.type.excluded;
                                    return n.find(n => n === t.type && n !== e.mark.type)
                                }).filter(t => t.to > o);
                            if (h.length) return null;
                            d < n.to && s.delete(d, n.to), o > n.from && s.delete(n.from + r, o), c = n.from + r + a.length, s.addMark(n.from + r, c, t.type.create(i || {})), s.removeStoredMark(t.type)
                        }
                    }
                })
            }

            function kh(t) {
                return Math.round(4 * t / 3)
            }

            function xh(t) {
                return Math.round(3 * t / 4)
            }

            function Sh(t, e, n) {
                return e === n ? t : "pt" === e && "px" === n ? kh(t) : "px" === e && "pt" === n ? xh(t) : void 0
            }
            const Mh = Bd.create({
                addOptions() {
                    return {
                        defaultLineHeight: "1.0",
                        afterSpace: 0
                    }
                },
                addGlobalAttributes() {
                    return [{
                        types: ["paragraph"],
                        attributes: {
                            lineHeight: {
                                default: this.options.defaultLineHeight,
                                parseHTML: t => t.style.lineHeight || this.options.defaultLineHeight,
                                renderHTML: t => t.lineHeight ? {
                                    style: "line-height: " + t.lineHeight
                                } : {}
                            }
                        }
                    }, {
                        types: ["paragraph"],
                        attributes: {
                            afterSpace: {
                                default: this.options.afterSpace,
                                parseHTML: t => parseInt(t.style.marginBottom) || this.options.afterSpace,
                                renderHTML: t => t.afterSpace ? {
                                    style: `margin-bottom: ${Sh(t.afterSpace,"pt","px")}px`
                                } : {}
                            }
                        }
                    }]
                },
                addCommands() {
                    return {
                        setLineHeight: t => ({
                            chain: e
                        }) => e().updateAttributes("paragraph", {
                            lineHeight: t
                        }).run(),
                        toggleAfterSpace: () => ({
                            editor: t,
                            chain: e
                        }) => {
                            const n = t.isActive("paragraph", {
                                afterSpace: 0
                            });
                            return e().updateAttributes("paragraph", {
                                afterSpace: n ? this.options.afterSpace : 0
                            }).run()
                        }
                    }
                }
            });
            var Ch = Object.defineProperty,
                Oh = (t, e) => {
                    for (var n in e) Ch(t, n, {
                        get: e[n],
                        enumerable: !0
                    })
                },
                Th = "listItem",
                Ah = "textStyle",
                Nh = /^\s*([-+*])\s$/,
                Eh = vh.create({
                    name: "bulletList",
                    addOptions() {
                        return {
                            itemTypeName: "listItem",
                            HTMLAttributes: {},
                            keepMarks: !1,
                            keepAttributes: !1
                        }
                    },
                    group: "block list",
                    content() {
                        return this.options.itemTypeName + "+"
                    },
                    parseHTML() {
                        return [{
                            tag: "ul"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["ul", vc(this.options.HTMLAttributes, t), 0]
                    },
                    markdownTokenName: "list",
                    parseMarkdown: (t, e) => "list" !== t.type || t.ordered ? [] : {
                        type: "bulletList",
                        content: t.items ? e.parseChildren(t.items) : []
                    },
                    renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, "\n") : "",
                    markdownOptions: {
                        indentsContent: !0
                    },
                    addCommands() {
                        return {
                            toggleBulletList: () => ({
                                commands: t,
                                chain: e
                            }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Th, this.editor.getAttributes(Ah)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
                        }
                    },
                    addInputRules() {
                        let t = oh({
                            find: Nh,
                            type: this.type
                        });
                        return (this.options.keepMarks || this.options.keepAttributes) && (t = oh({
                            find: Nh,
                            type: this.type,
                            keepMarks: this.options.keepMarks,
                            keepAttributes: this.options.keepAttributes,
                            getAttributes: () => this.editor.getAttributes(Ah),
                            editor: this.editor
                        })), [t]
                    }
                }),
                Dh = vh.create({
                    name: "listItem",
                    addOptions() {
                        return {
                            HTMLAttributes: {},
                            bulletListTypeName: "bulletList",
                            orderedListTypeName: "orderedList"
                        }
                    },
                    content: "paragraph block*",
                    defining: !0,
                    parseHTML() {
                        return [{
                            tag: "li"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["li", vc(this.options.HTMLAttributes, t), 0]
                    },
                    markdownTokenName: "list_item",
                    parseMarkdown: (t, e) => {
                        if ("list_item" !== t.type) return [];
                        let n = [];
                        if (t.tokens && t.tokens.length > 0) {
                            const r = t.tokens.some(t => "paragraph" === t.type);
                            if (r) n = e.parseChildren(t.tokens);
                            else {
                                const r = t.tokens[0];
                                if (r && "text" === r.type && r.tokens && r.tokens.length > 0) {
                                    const o = e.parseInline(r.tokens);
                                    if (n = [{
                                            type: "paragraph",
                                            content: o
                                        }], t.tokens.length > 1) {
                                        const r = t.tokens.slice(1),
                                            o = e.parseChildren(r);
                                        n.push(...o)
                                    }
                                } else n = e.parseChildren(t.tokens)
                            }
                        }
                        return 0 === n.length && (n = [{
                            type: "paragraph",
                            content: []
                        }]), {
                            type: "listItem",
                            content: n
                        }
                    },
                    renderMarkdown: (t, e, n) => yh(t, e, t => "bulletList" === t.parentType ? "- " : "orderedList" === t.parentType ? t.index + 1 + ". " : "- ", n),
                    addKeyboardShortcuts() {
                        return {
                            Enter: () => this.editor.commands.splitListItem(this.name),
                            Tab: () => this.editor.commands.sinkListItem(this.name),
                            "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
                        }
                    }
                }),
                Ph = {};
            Oh(Ph, {
                findListItemPos: () => Rh,
                getNextListDepth: () => Lh,
                handleBackspace: () => jh,
                handleDelete: () => Vh,
                hasListBefore: () => Ih,
                hasListItemAfter: () => Fh,
                hasListItemBefore: () => $h,
                listItemHasSubList: () => zh,
                nextListIsDeeper: () => Bh,
                nextListIsHigher: () => Hh
            });
            var Rh = (t, e) => {
                    const {
                        $from: n
                    } = e.selection, r = rl(t, e.schema);
                    let o = null,
                        i = n.depth,
                        s = n.pos,
                        a = null;
                    while (i > 0 && null === a) o = n.node(i), o.type === r ? a = i : (i -= 1, s -= 1);
                    return null === a ? null : {
                        $pos: e.doc.resolve(s),
                        depth: a
                    }
                },
                Lh = (t, e) => {
                    const n = Rh(t, e);
                    if (!n) return !1;
                    const [, r] = jc(e, t, n.$pos.pos + 4);
                    return r
                },
                Ih = (t, e, n) => {
                    const {
                        $anchor: r
                    } = t.selection, o = Math.max(0, r.pos - 2), i = t.doc.resolve(o).node();
                    return !(!i || !n.includes(i.type.name))
                },
                $h = (t, e) => {
                    var n;
                    const {
                        $anchor: r
                    } = e.selection, o = e.doc.resolve(r.pos - 2);
                    return 0 !== o.index() && (null == (n = o.nodeBefore) ? void 0 : n.type.name) === t
                },
                zh = (t, e, n) => {
                    if (!n) return !1;
                    const r = rl(t, e.schema);
                    let o = !1;
                    return n.descendants(t => {
                        t.type === r && (o = !0)
                    }), o
                },
                jh = (t, e, n) => {
                    if (t.commands.undoInputRule()) return !0;
                    if (t.state.selection.from !== t.state.selection.to) return !1;
                    if (!Fl(t.state, e) && Ih(t.state, e, n)) {
                        const {
                            $anchor: n
                        } = t.state.selection, r = t.state.doc.resolve(n.before() - 1), o = [];
                        r.node().descendants((t, n) => {
                            t.type.name === e && o.push({
                                node: t,
                                pos: n
                            })
                        });
                        const i = o.at(-1);
                        if (!i) return !1;
                        const s = t.state.doc.resolve(r.start() + i.pos + 1);
                        return t.chain().cut({
                            from: n.start() - 1,
                            to: n.end() + 1
                        }, s.end()).joinForward().run()
                    }
                    if (!Fl(t.state, e)) return !1;
                    if (!qc(t.state)) return !1;
                    const r = Rh(e, t.state);
                    if (!r) return !1;
                    const o = t.state.doc.resolve(r.$pos.pos - 2),
                        i = o.node(r.depth),
                        s = zh(e, t.state, i);
                    return $h(e, t.state) && !s ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run()
                },
                Bh = (t, e) => {
                    const n = Lh(t, e),
                        r = Rh(t, e);
                    return !(!r || !n) && n > r.depth
                },
                Hh = (t, e) => {
                    const n = Lh(t, e),
                        r = Rh(t, e);
                    return !(!r || !n) && n < r.depth
                },
                Vh = (t, e) => {
                    if (!Fl(t.state, e)) return !1;
                    if (!Wc(t.state, e)) return !1;
                    const {
                        selection: n
                    } = t.state, {
                        $from: r,
                        $to: o
                    } = n;
                    return !(!n.empty && r.sameParent(o)) && (Bh(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : Hh(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward())
                },
                Fh = (t, e) => {
                    var n;
                    const {
                        $anchor: r
                    } = e.selection, o = e.doc.resolve(r.pos - r.parentOffset - 2);
                    return o.index() !== o.parent.childCount - 1 && (null == (n = o.nodeAfter) ? void 0 : n.type.name) === t
                },
                _h = Bd.create({
                    name: "listKeymap",
                    addOptions() {
                        return {
                            listTypes: [{
                                itemName: "listItem",
                                wrapperNames: ["bulletList", "orderedList"]
                            }, {
                                itemName: "taskItem",
                                wrapperNames: ["taskList"]
                            }]
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            Delete: ({
                                editor: t
                            }) => {
                                let e = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n
                                }) => {
                                    void 0 !== t.state.schema.nodes[n] && Vh(t, n) && (e = !0)
                                }), e
                            },
                            "Mod-Delete": ({
                                editor: t
                            }) => {
                                let e = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n
                                }) => {
                                    void 0 !== t.state.schema.nodes[n] && Vh(t, n) && (e = !0)
                                }), e
                            },
                            Backspace: ({
                                editor: t
                            }) => {
                                let e = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n,
                                    wrapperNames: r
                                }) => {
                                    void 0 !== t.state.schema.nodes[n] && jh(t, n, r) && (e = !0)
                                }), e
                            },
                            "Mod-Backspace": ({
                                editor: t
                            }) => {
                                let e = !1;
                                return this.options.listTypes.forEach(({
                                    itemName: n,
                                    wrapperNames: r
                                }) => {
                                    void 0 !== t.state.schema.nodes[n] && jh(t, n, r) && (e = !0)
                                }), e
                            }
                        }
                    }
                }),
                Wh = /^(\s*)(\d+)\.\s+(.*)$/,
                qh = /^\s/;

            function Kh(t) {
                const e = [];
                let n = 0,
                    r = 0;
                while (n < t.length) {
                    const o = t[n],
                        i = o.match(Wh);
                    if (!i) break;
                    const [, s, a, l] = i, c = s.length;
                    let d = l,
                        h = n + 1;
                    const u = [o];
                    while (h < t.length) {
                        const e = t[h],
                            n = e.match(Wh);
                        if (n) break;
                        if ("" === e.trim()) u.push(e), d += "\n", h += 1;
                        else {
                            if (!e.match(qh)) break;
                            u.push(e), d += "\n" + e.slice(c + 2), h += 1
                        }
                    }
                    e.push({
                        indent: c,
                        number: parseInt(a, 10),
                        content: d.trim(),
                        raw: u.join("\n")
                    }), r = h, n = h
                }
                return [e, r]
            }

            function Uh(t, e, n) {
                var r;
                const o = [];
                let i = 0;
                while (i < t.length) {
                    const s = t[i];
                    if (s.indent === e) {
                        const a = s.content.split("\n"),
                            l = (null == (r = a[0]) ? void 0 : r.trim()) || "",
                            c = [];
                        l && c.push({
                            type: "paragraph",
                            raw: l,
                            tokens: n.inlineTokens(l)
                        });
                        const d = a.slice(1).join("\n").trim();
                        if (d) {
                            const t = n.blockTokens(d);
                            c.push(...t)
                        }
                        let h = i + 1;
                        const u = [];
                        while (h < t.length && t[h].indent > e) u.push(t[h]), h += 1;
                        if (u.length > 0) {
                            const t = Math.min(...u.map(t => t.indent)),
                                e = Uh(u, t, n);
                            c.push({
                                type: "list",
                                ordered: !0,
                                start: u[0].number,
                                items: e,
                                raw: u.map(t => t.raw).join("\n")
                            })
                        }
                        o.push({
                            type: "list_item",
                            raw: s.raw,
                            tokens: c
                        }), i = h
                    } else i += 1
                }
                return o
            }

            function Jh(t, e) {
                return t.map(t => {
                    if ("list_item" !== t.type) return e.parseChildren([t])[0];
                    const n = [];
                    return t.tokens && t.tokens.length > 0 && t.tokens.forEach(t => {
                        if ("paragraph" === t.type || "list" === t.type || "blockquote" === t.type || "code" === t.type) n.push(...e.parseChildren([t]));
                        else if ("text" === t.type && t.tokens) {
                            const r = e.parseChildren([t]);
                            n.push({
                                type: "paragraph",
                                content: r
                            })
                        } else {
                            const r = e.parseChildren([t]);
                            r.length > 0 && n.push(...r)
                        }
                    }), {
                        type: "listItem",
                        content: n
                    }
                })
            }
            var Gh = "listItem",
                Yh = "textStyle",
                Xh = /^(\d+)\.\s$/,
                Qh = vh.create({
                    name: "orderedList",
                    addOptions() {
                        return {
                            itemTypeName: "listItem",
                            HTMLAttributes: {},
                            keepMarks: !1,
                            keepAttributes: !1
                        }
                    },
                    group: "block list",
                    content() {
                        return this.options.itemTypeName + "+"
                    },
                    addAttributes() {
                        return {
                            start: {
                                default: 1,
                                parseHTML: t => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
                            },
                            type: {
                                default: null,
                                parseHTML: t => t.getAttribute("type")
                            }
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "ol"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        const {
                            start: e,
                            ...n
                        } = t;
                        return 1 === e ? ["ol", vc(this.options.HTMLAttributes, n), 0] : ["ol", vc(this.options.HTMLAttributes, t), 0]
                    },
                    markdownTokenName: "list",
                    parseMarkdown: (t, e) => {
                        if ("list" !== t.type || !t.ordered) return [];
                        const n = t.start || 1,
                            r = t.items ? Jh(t.items, e) : [];
                        return 1 !== n ? {
                            type: "orderedList",
                            attrs: {
                                start: n
                            },
                            content: r
                        } : {
                            type: "orderedList",
                            content: r
                        }
                    },
                    renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, "\n") : "",
                    markdownTokenizer: {
                        name: "orderedList",
                        level: "block",
                        start: t => {
                            const e = t.match(/^(\s*)(\d+)\.\s+/),
                                n = null == e ? void 0 : e.index;
                            return void 0 !== n ? n : -1
                        },
                        tokenize: (t, e, n) => {
                            var r;
                            const o = t.split("\n"),
                                [i, s] = Kh(o);
                            if (0 === i.length) return;
                            const a = Uh(i, 0, n);
                            if (0 === a.length) return;
                            const l = (null == (r = i[0]) ? void 0 : r.number) || 1;
                            return {
                                type: "list",
                                ordered: !0,
                                start: l,
                                items: a,
                                raw: o.slice(0, s).join("\n")
                            }
                        }
                    },
                    markdownOptions: {
                        indentsContent: !0
                    },
                    addCommands() {
                        return {
                            toggleOrderedList: () => ({
                                commands: t,
                                chain: e
                            }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Gh, this.editor.getAttributes(Yh)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
                        }
                    },
                    addInputRules() {
                        let t = oh({
                            find: Xh,
                            type: this.type,
                            getAttributes: t => ({
                                start: +t[1]
                            }),
                            joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1]
                        });
                        return (this.options.keepMarks || this.options.keepAttributes) && (t = oh({
                            find: Xh,
                            type: this.type,
                            keepMarks: this.options.keepMarks,
                            keepAttributes: this.options.keepAttributes,
                            getAttributes: t => ({
                                start: +t[1],
                                ...this.editor.getAttributes(Yh)
                            }),
                            joinPredicate: (t, e) => e.childCount + e.attrs.start === +t[1],
                            editor: this.editor
                        })), [t]
                    }
                }),
                Zh = /^\s*(\[([( |x])?\])\s$/,
                tu = vh.create({
                    name: "taskItem",
                    addOptions() {
                        return {
                            nested: !1,
                            HTMLAttributes: {},
                            taskListTypeName: "taskList",
                            a11y: void 0
                        }
                    },
                    content() {
                        return this.options.nested ? "paragraph block*" : "paragraph+"
                    },
                    defining: !0,
                    addAttributes() {
                        return {
                            checked: {
                                default: !1,
                                keepOnSplit: !1,
                                parseHTML: t => {
                                    const e = t.getAttribute("data-checked");
                                    return "" === e || "true" === e
                                },
                                renderHTML: t => ({
                                    "data-checked": t.checked
                                })
                            }
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: `li[data-type="${this.name}"]`,
                            priority: 51
                        }]
                    },
                    renderHTML({
                        node: t,
                        HTMLAttributes: e
                    }) {
                        return ["li", vc(this.options.HTMLAttributes, e, {
                                "data-type": this.name
                            }), ["label", ["input", {
                                    type: "checkbox",
                                    checked: t.attrs.checked ? "checked" : null
                                }],
                                ["span"]
                            ],
                            ["div", 0]
                        ]
                    },
                    parseMarkdown: (t, e) => {
                        const n = [];
                        if (t.tokens && t.tokens.length > 0 ? n.push(e.createNode("paragraph", {}, e.parseInline(t.tokens))) : t.text ? n.push(e.createNode("paragraph", {}, [e.createNode("text", {
                                text: t.text
                            })])) : n.push(e.createNode("paragraph", {}, [])), t.nestedTokens && t.nestedTokens.length > 0) {
                            const r = e.parseChildren(t.nestedTokens);
                            n.push(...r)
                        }
                        return e.createNode("taskItem", {
                            checked: t.checked || !1
                        }, n)
                    },
                    renderMarkdown: (t, e) => {
                        var n;
                        const r = (null == (n = t.attrs) ? void 0 : n.checked) ? "x" : " ",
                            o = `- [${r}] `;
                        return yh(t, e, o)
                    },
                    addKeyboardShortcuts() {
                        const t = {
                            Enter: () => this.editor.commands.splitListItem(this.name),
                            "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
                        };
                        return this.options.nested ? { ...t,
                            Tab: () => this.editor.commands.sinkListItem(this.name)
                        } : t
                    },
                    addNodeView() {
                        return ({
                            node: t,
                            HTMLAttributes: e,
                            getPos: n,
                            editor: r
                        }) => {
                            const o = document.createElement("li"),
                                i = document.createElement("label"),
                                s = document.createElement("span"),
                                a = document.createElement("input"),
                                l = document.createElement("div"),
                                c = t => {
                                    var e, n;
                                    a.ariaLabel = (null == (n = null == (e = this.options.a11y) ? void 0 : e.checkboxLabel) ? void 0 : n.call(e, t, a.checked)) || "Task item checkbox for " + (t.textContent || "empty task item")
                                };
                            return c(t), i.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", t => t.preventDefault()), a.addEventListener("change", e => {
                                if (!r.isEditable && !this.options.onReadOnlyChecked) return void(a.checked = !a.checked);
                                const {
                                    checked: o
                                } = e.target;
                                r.isEditable && "function" === typeof n && r.chain().focus(void 0, {
                                    scrollIntoView: !1
                                }).command(({
                                    tr: t
                                }) => {
                                    const e = n();
                                    if ("number" !== typeof e) return !1;
                                    const r = t.doc.nodeAt(e);
                                    return t.setNodeMarkup(e, void 0, { ...null == r ? void 0 : r.attrs,
                                        checked: o
                                    }), !0
                                }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, o) || (a.checked = !a.checked))
                            }), Object.entries(this.options.HTMLAttributes).forEach(([t, e]) => {
                                o.setAttribute(t, e)
                            }), o.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, i.append(a, s), o.append(i, l), Object.entries(e).forEach(([t, e]) => {
                                o.setAttribute(t, e)
                            }), {
                                dom: o,
                                contentDOM: l,
                                update: t => t.type === this.type && (o.dataset.checked = t.attrs.checked, a.checked = t.attrs.checked, c(t), !0)
                            }
                        }
                    },
                    addInputRules() {
                        return [oh({
                            find: Zh,
                            type: this.type,
                            getAttributes: t => ({
                                checked: "x" === t[t.length - 1]
                            })
                        })]
                    }
                }),
                eu = vh.create({
                    name: "taskList",
                    addOptions() {
                        return {
                            itemTypeName: "taskItem",
                            HTMLAttributes: {}
                        }
                    },
                    group: "block list",
                    content() {
                        return this.options.itemTypeName + "+"
                    },
                    parseHTML() {
                        return [{
                            tag: `ul[data-type="${this.name}"]`,
                            priority: 51
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["ul", vc(this.options.HTMLAttributes, t, {
                            "data-type": this.name
                        }), 0]
                    },
                    parseMarkdown: (t, e) => e.createNode("taskList", {}, e.parseChildren(t.items || [])),
                    renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, "\n") : "",
                    markdownTokenizer: {
                        name: "taskList",
                        level: "block",
                        start(t) {
                            var e;
                            const n = null == (e = t.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) ? void 0 : e.index;
                            return void 0 !== n ? n : -1
                        },
                        tokenize(t, e, n) {
                            const r = t => {
                                    const e = gh(t, {
                                        itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                                        extractItemData: t => ({
                                            indentLevel: t[1].length,
                                            mainContent: t[4],
                                            checked: "x" === t[3].toLowerCase()
                                        }),
                                        createToken: (t, e) => ({
                                            type: "taskItem",
                                            raw: "",
                                            mainContent: t.mainContent,
                                            indentLevel: t.indentLevel,
                                            checked: t.checked,
                                            text: t.mainContent,
                                            tokens: n.inlineTokens(t.mainContent),
                                            nestedTokens: e
                                        }),
                                        customNestedParser: r
                                    }, n);
                                    return e ? [{
                                        type: "taskList",
                                        raw: e.raw,
                                        items: e.items
                                    }] : n.blockTokens(t)
                                },
                                o = gh(t, {
                                    itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                                    extractItemData: t => ({
                                        indentLevel: t[1].length,
                                        mainContent: t[4],
                                        checked: "x" === t[3].toLowerCase()
                                    }),
                                    createToken: (t, e) => ({
                                        type: "taskItem",
                                        raw: "",
                                        mainContent: t.mainContent,
                                        indentLevel: t.indentLevel,
                                        checked: t.checked,
                                        text: t.mainContent,
                                        tokens: n.inlineTokens(t.mainContent),
                                        nestedTokens: e
                                    }),
                                    customNestedParser: r
                                }, n);
                            if (o) return {
                                type: "taskList",
                                raw: o.raw,
                                items: o.items
                            }
                        }
                    },
                    markdownOptions: {
                        indentsContent: !0
                    },
                    addCommands() {
                        return {
                            toggleTaskList: () => ({
                                commands: t
                            }) => t.toggleList(this.name, this.options.itemTypeName)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
                        }
                    }
                }),
                nu = (Bd.create({
                    name: "listKit",
                    addExtensions() {
                        const t = [];
                        return !1 !== this.options.bulletList && t.push(Eh.configure(this.options.bulletList)), !1 !== this.options.listItem && t.push(Dh.configure(this.options.listItem)), !1 !== this.options.listKeymap && t.push(_h.configure(this.options.listKeymap)), !1 !== this.options.orderedList && t.push(Qh.configure(this.options.orderedList)), !1 !== this.options.taskItem && t.push(tu.configure(this.options.taskItem)), !1 !== this.options.taskList && t.push(eu.configure(this.options.taskList)), t
                    }
                }), n("5440"));
            const ru = "orderedList",
                ou = Qh.extend({
                    addOptions() {
                        var t;
                        return { ...null === (t = this.parent) || void 0 === t ? void 0 : t.call(this),
                            className: ""
                        }
                    },
                    addAttributes() {
                        return {
                            class: {
                                default: this.options.className
                            },
                            listType: {
                                default: null,
                                renderHTML: t => {
                                    const e = Sh(nu["c"].fontSize, "pt", "px"),
                                        n = `list-style-type: ${t.listType}; font-size: ${e}px;`;
                                    return {
                                        style: t.listType ? n : ""
                                    }
                                }
                            }
                        }
                    },
                    addCommands() {
                        var t;
                        return { ...null === (t = this.parent) || void 0 === t ? void 0 : t.call(this),
                            disableCustomList: () => ({
                                editor: t,
                                chain: e
                            }) => {
                                if (t.isActive(this.name)) return e().toggleOrderedList().run()
                            },
                            toggleCustomList: t => ({
                                editor: e,
                                chain: n
                            }) => {
                                const r = e.isActive(this.name, {
                                    listType: t
                                });
                                return n().toggleOrderedList().updateAttributes(this.name, {
                                    listType: r ? null : t
                                }).run()
                            },
                            changeCustomList: t => ({
                                editor: e,
                                chain: n
                            }) => "none" === t ? n().disableCustomList().run() : (e.isActive(this.name) || n().toggleOrderedList(), n().updateAttributes(this.name, {
                                listType: t
                            }).run())
                        }
                    }
                });
            var iu = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("window-main", {
                        attrs: {
                            centered: "",
                            w: 350,
                            h: 400,
                            parent: t.parentId
                        }
                    }, [n("window-titlebar", {
                        attrs: {
                            title: t.$t("date") + t.$t("time")
                        }
                    }, [n("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: function() {
                                return t.$emit("cancel")
                            }
                        }
                    })], 1), n("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [n("winui-listbox", {
                        staticClass: "mb-3 h-full",
                        attrs: {
                            items: t.datetimeOptions,
                            value: t.initialSelection
                        },
                        on: {
                            change: t.selectDatetime
                        }
                    }), n("div", {
                        staticClass: "flex justify-end"
                    }, [n("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.$emit("done", t.datetime)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("ok")) + " ")]), n("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.$emit("cancel")
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("cancel")) + " ")])], 1)], 1)], 1)
                },
                su = [],
                au = n("1521"),
                lu = n("e863"),
                cu = n("1d26"),
                du = n("e314"),
                hu = n("c466"),
                uu = n("0f35"),
                pu = {
                    props: {
                        parentId: String
                    },
                    data() {
                        return {
                            datetime: ""
                        }
                    },
                    computed: {
                        datetimeOptions() {
                            return [{
                                label: this.getDatetime("m/dd/yyyy"),
                                value: "m/dd/yyyy"
                            }, {
                                label: this.getDatetime("m/dd/yy"),
                                value: "m/dd/yy"
                            }, {
                                label: this.getDatetime("mm/dd/yyyy"),
                                value: "mm/dd/yyyy"
                            }, {
                                label: this.getDatetime("mm/dd/yy"),
                                value: "mm/dd/yy"
                            }, {
                                label: this.getDatetime("yy/mm/dd"),
                                value: "yy/mm/dd"
                            }, {
                                label: this.getDatetime("yyyy-mm-dd"),
                                value: "yyyy-mm-dd"
                            }, {
                                label: this.getDatetime("month dd, yyyy"),
                                value: "month dd, yyyy"
                            }, {
                                label: this.getDatetime("dd month, yyyy"),
                                value: "dd month, yyyy"
                            }, {
                                label: this.getDatetime("d, month dd, yyyy"),
                                value: "d, month dd, yyyy"
                            }, {
                                label: this.getDatetime("HH:MM"),
                                value: "HH:MM"
                            }, {
                                label: this.getDatetime("HH:MM:SS"),
                                value: "HH:MM:SS"
                            }]
                        },
                        initialSelection() {
                            return this.datetimeOptions[0].value
                        }
                    },
                    methods: {
                        getDatetime(t) {
                            const {
                                day: e,
                                date: n,
                                month: r,
                                year: o
                            } = Object(hu["b"])(null, this.$i18n.locale), i = (new Date).getMonth() + 1, s = Object(uu["k"])(i), a = o.substring(2), l = new Date, [c, d, h] = [l.getHours(), l.getMinutes(), l.getSeconds()].map(uu["k"]);
                            if ("m/dd/yyyy" === t) return `${i}/${n}/${o}`;
                            if ("m/dd/yy" === t) return `${i}/${n}/${a}`;
                            if ("mm/dd/yyyy" === t) return `${s}/${n}/${o}`;
                            if ("mm/dd/yy" === t) return `${s}/${n}/${a}`;
                            if ("yy/mm/dd" === t) return `${a}/${s}/${n}`;
                            if ("yyyy-mm-dd" === t) return `${o}-${s}-${n}`;
                            if ("month dd, yyyy" === t) return `${r} ${n}, ${o}`;
                            if ("dd month, yyyy" === t) return `${n} ${r}, ${o}`;
                            if ("d, month dd, yyyy" === t) return `${e}, ${r} ${n}, ${o}`;
                            if ("HH:MM" === t) return `${c}:${d}`;
                            if ("HH:MM:SS" === t) return `${c}:${d}:${h}`;
                            throw new Error("Unrecognized format")
                        },
                        selectDatetime(t) {
                            this.datetime = this.getDatetime(t)
                        }
                    },
                    components: {
                        WindowMain: cu["a"],
                        WindowTitlebar: du["a"],
                        WindowBody: au["a"],
                        WindowControls: lu["a"]
                    }
                },
                fu = pu,
                mu = n("2877"),
                gu = Object(mu["a"])(fu, iu, su, !1, null, null, null),
                yu = gu.exports,
                bu = n("d917"),
                vu = n("9d9e"),
                wu = n("31a1"),
                ku = n("2b0e"),
                xu = class extends th {
                    constructor() {
                        super(...arguments), this.contentComponent = null
                    }
                },
                Su = {
                    name: "EditorContent",
                    props: {
                        editor: {
                            default: null,
                            type: Object
                        }
                    },
                    watch: {
                        editor: {
                            immediate: !0,
                            handler(t) {
                                t && t.options.element && this.$nextTick(() => {
                                    var e;
                                    const n = this.$el;
                                    n && (null == (e = t.view.dom) ? void 0 : e.firstChild) && (n.append(t.view.dom), t.contentComponent = this, t.setOptions({
                                        element: n
                                    }), t.createNodeViews())
                                })
                            }
                        }
                    },
                    render(t) {
                        return t("div")
                    },
                    beforeDestroy() {
                        var t;
                        const {
                            editor: e
                        } = this;
                        if (!e) return;
                        if (e.isDestroyed || e.view.setProps({
                                nodeViews: {}
                            }), e.contentComponent = null, !(null == (t = e.view.dom) ? void 0 : t.firstChild)) return;
                        const n = document.createElement("div");
                        n.append(e.view.dom), e.setOptions({
                            element: n
                        })
                    }
                };
            ku["default"], Object(wu["objectProp"])().required, Object(wu["objectProp"])().required, Object(wu["objectProp"])().required, Object(wu["booleanProp"])().required, Object(wu["objectProp"])().required, Object(wu["functionProp"])().required, Object(wu["functionProp"])().required, Object(wu["functionProp"])().required;
            var Mu = n("6792"),
                Cu = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,
                Ou = vh.create({
                    name: "image",
                    addOptions() {
                        return {
                            inline: !1,
                            allowBase64: !1,
                            HTMLAttributes: {},
                            resize: !1
                        }
                    },
                    inline() {
                        return this.options.inline
                    },
                    group() {
                        return this.options.inline ? "inline" : "block"
                    },
                    draggable: !0,
                    addAttributes() {
                        return {
                            src: {
                                default: null
                            },
                            alt: {
                                default: null
                            },
                            title: {
                                default: null
                            },
                            width: {
                                default: null
                            },
                            height: {
                                default: null
                            }
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["img", vc(this.options.HTMLAttributes, t)]
                    },
                    parseMarkdown: (t, e) => e.createNode("image", {
                        src: t.href,
                        title: t.title,
                        alt: t.text
                    }),
                    renderMarkdown: t => {
                        var e, n, r, o, i, s;
                        const a = null != (n = null == (e = t.attrs) ? void 0 : e.src) ? n : "",
                            l = null != (o = null == (r = t.attrs) ? void 0 : r.alt) ? o : "",
                            c = null != (s = null == (i = t.attrs) ? void 0 : i.title) ? s : "";
                        return c ? `![${l}](${a} "${c}")` : `![${l}](${a})`
                    },
                    addNodeView() {
                        if (!this.options.resize || !this.options.resize.enabled || "undefined" === typeof document || !this.editor.isEditable) return null;
                        const {
                            directions: t,
                            minWidth: e,
                            minHeight: n,
                            alwaysPreserveAspectRatio: r
                        } = this.options.resize;
                        return ({
                            node: o,
                            getPos: i,
                            HTMLAttributes: s
                        }) => {
                            const a = document.createElement("img");
                            Object.entries(s).forEach(([t, e]) => {
                                if (null != e) switch (t) {
                                    case "width":
                                    case "height":
                                        break;
                                    default:
                                        a.setAttribute(t, e);
                                        break
                                }
                            }), a.src = s.src;
                            const l = new sh({
                                    element: a,
                                    node: o,
                                    getPos: i,
                                    onResize: (t, e) => {
                                        a.style.width = t + "px", a.style.height = e + "px"
                                    },
                                    onCommit: (t, e) => {
                                        const n = i();
                                        void 0 !== n && this.editor.chain().setNodeSelection(n).updateAttributes(this.name, {
                                            width: t,
                                            height: e
                                        }).run()
                                    },
                                    onUpdate: (t, e, n) => t.type === o.type,
                                    options: {
                                        directions: t,
                                        min: {
                                            width: e,
                                            height: n
                                        },
                                        preserveAspectRatio: !0 === r
                                    }
                                }),
                                c = l.dom;
                            return c.style.visibility = "hidden", c.style.pointerEvents = "none", a.onload = () => {
                                c.style.visibility = "", c.style.pointerEvents = ""
                            }, l
                        }
                    },
                    addCommands() {
                        return {
                            setImage: t => ({
                                commands: e
                            }) => e.insertContent({
                                type: this.name,
                                attrs: t
                            })
                        }
                    },
                    addInputRules() {
                        return [nh({
                            find: Cu,
                            type: this.type,
                            getAttributes: t => {
                                const [, , e, n, r] = t;
                                return {
                                    src: n,
                                    alt: e,
                                    title: r
                                }
                            }
                        })]
                    }
                }),
                Tu = n("7f29");

            function Au(t, e, n, r) {
                if (!t.doc) return t;
                const o = t.doc.nodeAt(e);
                if (!o) return t;
                const i = 0,
                    s = r.indentStep * r.maximumIndentLevel,
                    a = Object(Tu["a"])((o.attrs.indent || 0) + n, i, s);
                if (a === o.attrs.indent) return t;
                const l = { ...o.attrs,
                    indent: a
                };
                return t.setNodeMarkup(e, o.type, l, o.marks)
            }

            function Nu(t, e, n) {
                const {
                    doc: r,
                    selection: o
                } = t;
                if (!r || !o) return t;
                if (!(o instanceof Ye || o instanceof tn)) return t;
                const {
                    from: i,
                    to: s
                } = o;
                return r.nodesBetween(i, s, (r, o) => !n.types.includes(r.type.name) || (t = Au(t, o, e, n), !1)), t
            }
            const Eu = (t, e) => n => {
                    const {
                        tr: r,
                        state: o,
                        dispatch: i,
                        editor: s
                    } = n, {
                        selection: a
                    } = o;
                    let l = r.setSelection(a);
                    return l = Nu(l, t, e), l.docChanged ? (i && i(l), !0) : (s.chain().focus().run(), !1)
                },
                Du = Bd.create({
                    name: "indent",
                    addOptions() {
                        return {
                            types: ["heading", "paragraph"],
                            indentStep: 32,
                            defaultIndentLevel: 0,
                            maximumIndentLevel: 7
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                indent: {
                                    default: this.options.defaultIndentLevel,
                                    renderHTML: t => ({
                                        style: `padding-left: ${t.indent}px;`
                                    }),
                                    parseHTML: t => parseInt(t.style.paddingLeft) || this.options.defaultIndentLevel
                                }
                            }
                        }]
                    },
                    addCommands() {
                        const {
                            indentStep: t
                        } = this.options;
                        return {
                            indent: () => Eu(t, this.options),
                            dedent: () => Eu(-t, this.options)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            Tab: () => {
                                if (!this.editor.isActive(ru)) return this.editor.commands.indent()
                            },
                            "Shift-Tab": () => {
                                if (!this.editor.isActive(ru)) return this.editor.commands.dedent()
                            }
                        }
                    }
                });
            var Pu = (t, e) => {
                    if ("slot" === t) return 0;
                    if (t instanceof Function) return t(e);
                    const {
                        children: n,
                        ...r
                    } = null != e ? e : {};
                    if ("svg" === t) throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
                    return [t, r, n]
                },
                Ru = /^\s*>\s$/,
                Lu = vh.create({
                    name: "blockquote",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    content: "block+",
                    group: "block",
                    defining: !0,
                    parseHTML() {
                        return [{
                            tag: "blockquote"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return Pu("blockquote", { ...vc(this.options.HTMLAttributes, t),
                            children: Pu("slot", {})
                        })
                    },
                    parseMarkdown: (t, e) => e.createNode("blockquote", void 0, e.parseChildren(t.tokens || [])),
                    renderMarkdown: (t, e) => {
                        if (!t.content) return "";
                        const n = ">",
                            r = [];
                        return t.content.forEach(t => {
                            const o = e.renderChildren([t]),
                                i = o.split("\n"),
                                s = i.map(t => "" === t.trim() ? n : `${n} ${t}`);
                            r.push(s.join("\n"))
                        }), r.join(`\n${n}\n`)
                    },
                    addCommands() {
                        return {
                            setBlockquote: () => ({
                                commands: t
                            }) => t.wrapIn(this.name),
                            toggleBlockquote: () => ({
                                commands: t
                            }) => t.toggleWrap(this.name),
                            unsetBlockquote: () => ({
                                commands: t
                            }) => t.lift(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
                        }
                    },
                    addInputRules() {
                        return [oh({
                            find: Ru,
                            type: this.type
                        })]
                    }
                }),
                Iu = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
                $u = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
                zu = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
                ju = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
                Bu = Nd.create({
                    name: "bold",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "strong"
                        }, {
                            tag: "b",
                            getAttrs: t => "normal" !== t.style.fontWeight && null
                        }, {
                            style: "font-weight=400",
                            clearMark: t => t.type.name === this.name
                        }, {
                            style: "font-weight",
                            getAttrs: t => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return Pu("strong", { ...vc(this.options.HTMLAttributes, t),
                            children: Pu("slot", {})
                        })
                    },
                    markdownTokenName: "strong",
                    parseMarkdown: (t, e) => e.applyMark("bold", e.parseInline(t.tokens || [])),
                    renderMarkdown: (t, e) => `**${e.renderChildren(t)}**`,
                    addCommands() {
                        return {
                            setBold: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleBold: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetBold: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-b": () => this.editor.commands.toggleBold(),
                            "Mod-B": () => this.editor.commands.toggleBold()
                        }
                    },
                    addInputRules() {
                        return [eh({
                            find: Iu,
                            type: this.type
                        }), eh({
                            find: zu,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [wh({
                            find: $u,
                            type: this.type
                        }), wh({
                            find: ju,
                            type: this.type
                        })]
                    }
                }),
                Hu = /(^|[^`])`([^`]+)`(?!`)$/,
                Vu = /(^|[^`])`([^`]+)`(?!`)/g,
                Fu = Nd.create({
                    name: "code",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    excludes: "_",
                    code: !0,
                    exitable: !0,
                    parseHTML() {
                        return [{
                            tag: "code"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["code", vc(this.options.HTMLAttributes, t), 0]
                    },
                    markdownTokenName: "codespan",
                    parseMarkdown: (t, e) => e.applyMark("code", [{
                        type: "text",
                        text: t.text || ""
                    }]),
                    renderMarkdown: (t, e) => t.content ? `\`${e.renderChildren(t.content)}\`` : "",
                    addCommands() {
                        return {
                            setCode: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleCode: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetCode: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-e": () => this.editor.commands.toggleCode()
                        }
                    },
                    addInputRules() {
                        return [eh({
                            find: Hu,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [wh({
                            find: Vu,
                            type: this.type
                        })]
                    }
                }),
                _u = 4,
                Wu = /^```([a-z]+)?[\s\n]$/,
                qu = /^~~~([a-z]+)?[\s\n]$/,
                Ku = vh.create({
                    name: "codeBlock",
                    addOptions() {
                        return {
                            languageClassPrefix: "language-",
                            exitOnTripleEnter: !0,
                            exitOnArrowDown: !0,
                            defaultLanguage: null,
                            enableTabIndentation: !1,
                            tabSize: _u,
                            HTMLAttributes: {}
                        }
                    },
                    content: "text*",
                    marks: "",
                    group: "block",
                    code: !0,
                    defining: !0,
                    addAttributes() {
                        return {
                            language: {
                                default: this.options.defaultLanguage,
                                parseHTML: t => {
                                    var e;
                                    const {
                                        languageClassPrefix: n
                                    } = this.options;
                                    if (!n) return null;
                                    const r = [...(null == (e = t.firstElementChild) ? void 0 : e.classList) || []],
                                        o = r.filter(t => t.startsWith(n)).map(t => t.replace(n, "")),
                                        i = o[0];
                                    return i || null
                                },
                                rendered: !1
                            }
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "pre",
                            preserveWhitespace: "full"
                        }]
                    },
                    renderHTML({
                        node: t,
                        HTMLAttributes: e
                    }) {
                        return ["pre", vc(this.options.HTMLAttributes, e), ["code", {
                            class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
                        }, 0]]
                    },
                    markdownTokenName: "code",
                    parseMarkdown: (t, e) => {
                        var n;
                        return !1 === (null == (n = t.raw) ? void 0 : n.startsWith("```")) && "indented" !== t.codeBlockStyle ? [] : e.createNode("codeBlock", {
                            language: t.lang || null
                        }, t.text ? [e.createTextNode(t.text)] : [])
                    },
                    renderMarkdown: (t, e) => {
                        var n;
                        let r = "";
                        const o = (null == (n = t.attrs) ? void 0 : n.language) || "";
                        if (t.content) {
                            const n = ["```" + o, e.renderChildren(t.content), "```"];
                            r = n.join("\n")
                        } else r = `\`\`\`${o}\n\n\`\`\``;
                        return r
                    },
                    addCommands() {
                        return {
                            setCodeBlock: t => ({
                                commands: e
                            }) => e.setNode(this.name, t),
                            toggleCodeBlock: t => ({
                                commands: e
                            }) => e.toggleNode(this.name, "paragraph", t)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
                            Backspace: () => {
                                const {
                                    empty: t,
                                    $anchor: e
                                } = this.editor.state.selection, n = 1 === e.pos;
                                return !(!t || e.parent.type.name !== this.name) && (!(!n && e.parent.textContent.length) && this.editor.commands.clearNodes())
                            },
                            Tab: ({
                                editor: t
                            }) => {
                                var e;
                                if (!this.options.enableTabIndentation) return !1;
                                const n = null != (e = this.options.tabSize) ? e : _u,
                                    {
                                        state: r
                                    } = t,
                                    {
                                        selection: o
                                    } = r,
                                    {
                                        $from: i,
                                        empty: s
                                    } = o;
                                if (i.parent.type !== this.type) return !1;
                                const a = " ".repeat(n);
                                return s ? t.commands.insertContent(a) : t.commands.command(({
                                    tr: t
                                }) => {
                                    const {
                                        from: e,
                                        to: n
                                    } = o, i = r.doc.textBetween(e, n, "\n", "\n"), s = i.split("\n"), l = s.map(t => a + t).join("\n");
                                    return t.replaceWith(e, n, r.schema.text(l)), !0
                                })
                            },
                            "Shift-Tab": ({
                                editor: t
                            }) => {
                                var e;
                                if (!this.options.enableTabIndentation) return !1;
                                const n = null != (e = this.options.tabSize) ? e : _u,
                                    {
                                        state: r
                                    } = t,
                                    {
                                        selection: o
                                    } = r,
                                    {
                                        $from: i,
                                        empty: s
                                    } = o;
                                return i.parent.type === this.type && (s ? t.commands.command(({
                                    tr: t
                                }) => {
                                    var e;
                                    const {
                                        pos: o
                                    } = i, s = i.start(), a = i.end(), l = r.doc.textBetween(s, a, "\n", "\n"), c = l.split("\n");
                                    let d = 0,
                                        h = 0;
                                    const u = o - s;
                                    for (let n = 0; n < c.length; n += 1) {
                                        if (h + c[n].length >= u) {
                                            d = n;
                                            break
                                        }
                                        h += c[n].length + 1
                                    }
                                    const p = c[d],
                                        f = (null == (e = p.match(/^ */)) ? void 0 : e[0]) || "",
                                        m = Math.min(f.length, n);
                                    if (0 === m) return !0;
                                    let g = s;
                                    for (let n = 0; n < d; n += 1) g += c[n].length + 1;
                                    t.delete(g, g + m);
                                    const y = o - g;
                                    return y <= m && t.setSelection(Ye.create(t.doc, g)), !0
                                }) : t.commands.command(({
                                    tr: t
                                }) => {
                                    const {
                                        from: e,
                                        to: i
                                    } = o, s = r.doc.textBetween(e, i, "\n", "\n"), a = s.split("\n"), l = a.map(t => {
                                        var e;
                                        const r = (null == (e = t.match(/^ */)) ? void 0 : e[0]) || "",
                                            o = Math.min(r.length, n);
                                        return t.slice(o)
                                    }).join("\n");
                                    return t.replaceWith(e, i, r.schema.text(l)), !0
                                }))
                            },
                            Enter: ({
                                editor: t
                            }) => {
                                if (!this.options.exitOnTripleEnter) return !1;
                                const {
                                    state: e
                                } = t, {
                                    selection: n
                                } = e, {
                                    $from: r,
                                    empty: o
                                } = n;
                                if (!o || r.parent.type !== this.type) return !1;
                                const i = r.parentOffset === r.parent.nodeSize - 2,
                                    s = r.parent.textContent.endsWith("\n\n");
                                return !(!i || !s) && t.chain().command(({
                                    tr: t
                                }) => (t.delete(r.pos - 2, r.pos), !0)).exitCode().run()
                            },
                            ArrowDown: ({
                                editor: t
                            }) => {
                                if (!this.options.exitOnArrowDown) return !1;
                                const {
                                    state: e
                                } = t, {
                                    selection: n,
                                    doc: r
                                } = e, {
                                    $from: o,
                                    empty: i
                                } = n;
                                if (!i || o.parent.type !== this.type) return !1;
                                const s = o.parentOffset === o.parent.nodeSize - 2;
                                if (!s) return !1;
                                const a = o.after();
                                if (void 0 === a) return !1;
                                const l = r.nodeAt(a);
                                return l ? t.commands.command(({
                                    tr: t
                                }) => (t.setSelection(Ke.near(r.resolve(a))), !0)) : t.commands.exitCode()
                            }
                        }
                    },
                    addInputRules() {
                        return [rh({
                            find: Wu,
                            type: this.type,
                            getAttributes: t => ({
                                language: t[1]
                            })
                        }), rh({
                            find: qu,
                            type: this.type,
                            getAttributes: t => ({
                                language: t[1]
                            })
                        })]
                    },
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("codeBlockVSCodeHandler"),
                            props: {
                                handlePaste: (t, e) => {
                                    if (!e.clipboardData) return !1;
                                    if (this.editor.isActive(this.type.name)) return !1;
                                    const n = e.clipboardData.getData("text/plain"),
                                        r = e.clipboardData.getData("vscode-editor-data"),
                                        o = r ? JSON.parse(r) : void 0,
                                        i = null == o ? void 0 : o.mode;
                                    if (!n || !i) return !1;
                                    const {
                                        tr: s,
                                        schema: a
                                    } = t.state, l = a.text(n.replace(/\r\n?/g, "\n"));
                                    return s.replaceSelectionWith(this.type.create({
                                        language: i
                                    }, l)), s.selection.$from.parent.type !== this.type && s.setSelection(Ye.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), t.dispatch(s), !0
                                }
                            }
                        })]
                    }
                }),
                Uu = vh.create({
                    name: "doc",
                    topNode: !0,
                    content: "block+",
                    renderMarkdown: (t, e) => t.content ? e.renderChildren(t.content, "\n\n") : ""
                }),
                Ju = vh.create({
                    name: "hardBreak",
                    markdownTokenName: "br",
                    addOptions() {
                        return {
                            keepMarks: !0,
                            HTMLAttributes: {}
                        }
                    },
                    inline: !0,
                    group: "inline",
                    selectable: !1,
                    linebreakReplacement: !0,
                    parseHTML() {
                        return [{
                            tag: "br"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["br", vc(this.options.HTMLAttributes, t)]
                    },
                    renderText() {
                        return "\n"
                    },
                    renderMarkdown: () => "  \n",
                    parseMarkdown: () => ({
                        type: "hardBreak"
                    }),
                    addCommands() {
                        return {
                            setHardBreak: () => ({
                                commands: t,
                                chain: e,
                                state: n,
                                editor: r
                            }) => t.first([() => t.exitCode(), () => t.command(() => {
                                const {
                                    selection: t,
                                    storedMarks: o
                                } = n;
                                if (t.$from.parent.type.spec.isolating) return !1;
                                const {
                                    keepMarks: i
                                } = this.options, {
                                    splittableMarks: s
                                } = r.extensionManager, a = o || t.$to.parentOffset && t.$from.marks();
                                return e().insertContent({
                                    type: this.name
                                }).command(({
                                    tr: t,
                                    dispatch: e
                                }) => {
                                    if (e && a && i) {
                                        const e = a.filter(t => s.includes(t.type.name));
                                        t.ensureMarks(e)
                                    }
                                    return !0
                                }).run()
                            })])
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Enter": () => this.editor.commands.setHardBreak(),
                            "Shift-Enter": () => this.editor.commands.setHardBreak()
                        }
                    }
                }),
                Gu = vh.create({
                    name: "heading",
                    addOptions() {
                        return {
                            levels: [1, 2, 3, 4, 5, 6],
                            HTMLAttributes: {}
                        }
                    },
                    content: "inline*",
                    group: "block",
                    defining: !0,
                    addAttributes() {
                        return {
                            level: {
                                default: 1,
                                rendered: !1
                            }
                        }
                    },
                    parseHTML() {
                        return this.options.levels.map(t => ({
                            tag: "h" + t,
                            attrs: {
                                level: t
                            }
                        }))
                    },
                    renderHTML({
                        node: t,
                        HTMLAttributes: e
                    }) {
                        const n = this.options.levels.includes(t.attrs.level),
                            r = n ? t.attrs.level : this.options.levels[0];
                        return ["h" + r, vc(this.options.HTMLAttributes, e), 0]
                    },
                    parseMarkdown: (t, e) => e.createNode("heading", {
                        level: t.depth || 1
                    }, e.parseInline(t.tokens || [])),
                    renderMarkdown: (t, e) => {
                        var n;
                        const r = (null == (n = t.attrs) ? void 0 : n.level) ? parseInt(t.attrs.level, 10) : 1,
                            o = "#".repeat(r);
                        return t.content ? `${o} ${e.renderChildren(t.content)}` : ""
                    },
                    addCommands() {
                        return {
                            setHeading: t => ({
                                commands: e
                            }) => !!this.options.levels.includes(t.level) && e.setNode(this.name, t),
                            toggleHeading: t => ({
                                commands: e
                            }) => !!this.options.levels.includes(t.level) && e.toggleNode(this.name, "paragraph", t)
                        }
                    },
                    addKeyboardShortcuts() {
                        return this.options.levels.reduce((t, e) => ({ ...t,
                            ["Mod-Alt-" + e]: () => this.editor.commands.toggleHeading({
                                level: e
                            })
                        }), {})
                    },
                    addInputRules() {
                        return this.options.levels.map(t => rh({
                            find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
                            type: this.type,
                            getAttributes: {
                                level: t
                            }
                        }))
                    }
                }),
                Yu = vh.create({
                    name: "horizontalRule",
                    addOptions() {
                        return {
                            HTMLAttributes: {},
                            nextNodeType: "paragraph"
                        }
                    },
                    group: "block",
                    parseHTML() {
                        return [{
                            tag: "hr"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["hr", vc(this.options.HTMLAttributes, t)]
                    },
                    markdownTokenName: "hr",
                    parseMarkdown: (t, e) => e.createNode("horizontalRule"),
                    renderMarkdown: () => "---",
                    addCommands() {
                        return {
                            setHorizontalRule: () => ({
                                chain: t,
                                state: e
                            }) => {
                                if (!ah(e, e.schema.nodes[this.name])) return !1;
                                const {
                                    selection: n
                                } = e, {
                                    $to: r
                                } = n, o = t();
                                return Gc(n) ? o.insertContentAt(r.pos, {
                                    type: this.name
                                }) : o.insertContent({
                                    type: this.name
                                }), o.command(({
                                    state: t,
                                    tr: e,
                                    dispatch: n
                                }) => {
                                    if (n) {
                                        const {
                                            $to: n
                                        } = e.selection, r = n.end();
                                        if (n.nodeAfter) n.nodeAfter.isTextblock ? e.setSelection(Ye.create(e.doc, n.pos + 1)) : n.nodeAfter.isBlock ? e.setSelection(Qe.create(e.doc, n.pos)) : e.setSelection(Ye.create(e.doc, n.pos));
                                        else {
                                            const o = t.schema.nodes[this.options.nextNodeType] || n.parent.type.contentMatch.defaultType,
                                                i = null == o ? void 0 : o.create();
                                            i && (e.insert(r, i), e.setSelection(Ye.create(e.doc, r + 1)))
                                        }
                                        e.scrollIntoView()
                                    }
                                    return !0
                                }).run()
                            }
                        }
                    },
                    addInputRules() {
                        return [nh({
                            find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                            type: this.type
                        })]
                    }
                }),
                Xu = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
                Qu = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
                Zu = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
                tp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g,
                ep = Nd.create({
                    name: "italic",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "em"
                        }, {
                            tag: "i",
                            getAttrs: t => "normal" !== t.style.fontStyle && null
                        }, {
                            style: "font-style=normal",
                            clearMark: t => t.type.name === this.name
                        }, {
                            style: "font-style=italic"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["em", vc(this.options.HTMLAttributes, t), 0]
                    },
                    addCommands() {
                        return {
                            setItalic: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleItalic: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetItalic: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    markdownTokenName: "em",
                    parseMarkdown: (t, e) => e.applyMark("italic", e.parseInline(t.tokens || [])),
                    renderMarkdown: (t, e) => `*${e.renderChildren(t)}*`,
                    addKeyboardShortcuts() {
                        return {
                            "Mod-i": () => this.editor.commands.toggleItalic(),
                            "Mod-I": () => this.editor.commands.toggleItalic()
                        }
                    },
                    addInputRules() {
                        return [eh({
                            find: Xu,
                            type: this.type
                        }), eh({
                            find: Zu,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [wh({
                            find: Qu,
                            type: this.type
                        }), wh({
                            find: tp,
                            type: this.type
                        })]
                    }
                });
            const np = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
                rp = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
                op = "numeric",
                ip = "ascii",
                sp = "alpha",
                ap = "asciinumeric",
                lp = "alphanumeric",
                cp = "domain",
                dp = "emoji",
                hp = "scheme",
                up = "slashscheme",
                pp = "whitespace";

            function fp(t, e) {
                return t in e || (e[t] = []), e[t]
            }

            function mp(t, e, n) {
                e[op] && (e[ap] = !0, e[lp] = !0), e[ip] && (e[ap] = !0, e[sp] = !0), e[ap] && (e[lp] = !0), e[sp] && (e[lp] = !0), e[lp] && (e[cp] = !0), e[dp] && (e[cp] = !0);
                for (const r in e) {
                    const e = fp(r, n);
                    e.indexOf(t) < 0 && e.push(t)
                }
            }

            function gp(t, e) {
                const n = {};
                for (const r in e) e[r].indexOf(t) >= 0 && (n[r] = !0);
                return n
            }

            function yp(t = null) {
                this.j = {}, this.jr = [], this.jd = null, this.t = t
            }
            yp.groups = {}, yp.prototype = {
                accepts() {
                    return !!this.t
                },
                go(t) {
                    const e = this,
                        n = e.j[t];
                    if (n) return n;
                    for (let r = 0; r < e.jr.length; r++) {
                        const n = e.jr[r][0],
                            o = e.jr[r][1];
                        if (o && n.test(t)) return o
                    }
                    return e.jd
                },
                has(t, e = !1) {
                    return e ? t in this.j : !!this.go(t)
                },
                ta(t, e, n, r) {
                    for (let o = 0; o < t.length; o++) this.tt(t[o], e, n, r)
                },
                tr(t, e, n, r) {
                    let o;
                    return r = r || yp.groups, e && e.j ? o = e : (o = new yp(e), n && r && mp(e, n, r)), this.jr.push([t, o]), o
                },
                ts(t, e, n, r) {
                    let o = this;
                    const i = t.length;
                    if (!i) return o;
                    for (let s = 0; s < i - 1; s++) o = o.tt(t[s]);
                    return o.tt(t[i - 1], e, n, r)
                },
                tt(t, e, n, r) {
                    r = r || yp.groups;
                    const o = this;
                    if (e && e.j) return o.j[t] = e, e;
                    const i = e;
                    let s, a = o.go(t);
                    if (a ? (s = new yp, Object.assign(s.j, a.j), s.jr.push.apply(s.jr, a.jr), s.jd = a.jd, s.t = a.t) : s = new yp, i) {
                        if (r)
                            if (s.t && "string" === typeof s.t) {
                                const t = Object.assign(gp(s.t, r), n);
                                mp(i, t, r)
                            } else n && mp(i, n, r);
                        s.t = i
                    }
                    return o.j[t] = s, s
                }
            };
            const bp = (t, e, n, r, o) => t.ta(e, n, r, o),
                vp = (t, e, n, r, o) => t.tr(e, n, r, o),
                wp = (t, e, n, r, o) => t.ts(e, n, r, o),
                kp = (t, e, n, r, o) => t.tt(e, n, r, o),
                xp = "WORD",
                Sp = "UWORD",
                Mp = "ASCIINUMERICAL",
                Cp = "ALPHANUMERICAL",
                Op = "LOCALHOST",
                Tp = "TLD",
                Ap = "UTLD",
                Np = "SCHEME",
                Ep = "SLASH_SCHEME",
                Dp = "NUM",
                Pp = "WS",
                Rp = "NL",
                Lp = "OPENBRACE",
                Ip = "CLOSEBRACE",
                $p = "OPENBRACKET",
                zp = "CLOSEBRACKET",
                jp = "OPENPAREN",
                Bp = "CLOSEPAREN",
                Hp = "OPENANGLEBRACKET",
                Vp = "CLOSEANGLEBRACKET",
                Fp = "FULLWIDTHLEFTPAREN",
                _p = "FULLWIDTHRIGHTPAREN",
                Wp = "LEFTCORNERBRACKET",
                qp = "RIGHTCORNERBRACKET",
                Kp = "LEFTWHITECORNERBRACKET",
                Up = "RIGHTWHITECORNERBRACKET",
                Jp = "FULLWIDTHLESSTHAN",
                Gp = "FULLWIDTHGREATERTHAN",
                Yp = "AMPERSAND",
                Xp = "APOSTROPHE",
                Qp = "ASTERISK",
                Zp = "AT",
                tf = "BACKSLASH",
                ef = "BACKTICK",
                nf = "CARET",
                rf = "COLON",
                of = "COMMA",
                sf = "DOLLAR",
                af = "DOT",
                lf = "EQUALS",
                cf = "EXCLAMATION",
                df = "HYPHEN",
                hf = "PERCENT",
                uf = "PIPE",
                pf = "PLUS",
                ff = "POUND",
                mf = "QUERY",
                gf = "QUOTE",
                yf = "FULLWIDTHMIDDLEDOT",
                bf = "SEMI",
                vf = "SLASH",
                wf = "TILDE",
                kf = "UNDERSCORE",
                xf = "EMOJI",
                Sf = "SYM";
            var Mf = Object.freeze({
                __proto__: null,
                ALPHANUMERICAL: Cp,
                AMPERSAND: Yp,
                APOSTROPHE: Xp,
                ASCIINUMERICAL: Mp,
                ASTERISK: Qp,
                AT: Zp,
                BACKSLASH: tf,
                BACKTICK: ef,
                CARET: nf,
                CLOSEANGLEBRACKET: Vp,
                CLOSEBRACE: Ip,
                CLOSEBRACKET: zp,
                CLOSEPAREN: Bp,
                COLON: rf,
                COMMA: of ,
                DOLLAR: sf,
                DOT: af,
                EMOJI: xf,
                EQUALS: lf,
                EXCLAMATION: cf,
                FULLWIDTHGREATERTHAN: Gp,
                FULLWIDTHLEFTPAREN: Fp,
                FULLWIDTHLESSTHAN: Jp,
                FULLWIDTHMIDDLEDOT: yf,
                FULLWIDTHRIGHTPAREN: _p,
                HYPHEN: df,
                LEFTCORNERBRACKET: Wp,
                LEFTWHITECORNERBRACKET: Kp,
                LOCALHOST: Op,
                NL: Rp,
                NUM: Dp,
                OPENANGLEBRACKET: Hp,
                OPENBRACE: Lp,
                OPENBRACKET: $p,
                OPENPAREN: jp,
                PERCENT: hf,
                PIPE: uf,
                PLUS: pf,
                POUND: ff,
                QUERY: mf,
                QUOTE: gf,
                RIGHTCORNERBRACKET: qp,
                RIGHTWHITECORNERBRACKET: Up,
                SCHEME: Np,
                SEMI: bf,
                SLASH: vf,
                SLASH_SCHEME: Ep,
                SYM: Sf,
                TILDE: wf,
                TLD: Tp,
                UNDERSCORE: kf,
                UTLD: Ap,
                UWORD: Sp,
                WORD: xp,
                WS: Pp
            });
            const Cf = /[a-z]/,
                Of = /\p{L}/u,
                Tf = /\p{Emoji}/u,
                Af = /\d/,
                Nf = /\s/;
            const Ef = "\r",
                Df = "\n",
                Pf = "️",
                Rf = "‍",
                Lf = "￼";
            let If = null,
                $f = null;

            function zf(t = []) {
                const e = {};
                yp.groups = e;
                const n = new yp;
                null == If && (If = Vf(np)), null == $f && ($f = Vf(rp)), kp(n, "'", Xp), kp(n, "{", Lp), kp(n, "}", Ip), kp(n, "[", $p), kp(n, "]", zp), kp(n, "(", jp), kp(n, ")", Bp), kp(n, "<", Hp), kp(n, ">", Vp), kp(n, "（", Fp), kp(n, "）", _p), kp(n, "「", Wp), kp(n, "」", qp), kp(n, "『", Kp), kp(n, "』", Up), kp(n, "＜", Jp), kp(n, "＞", Gp), kp(n, "&", Yp), kp(n, "*", Qp), kp(n, "@", Zp), kp(n, "`", ef), kp(n, "^", nf), kp(n, ":", rf), kp(n, ",", of ), kp(n, "$", sf), kp(n, ".", af), kp(n, "=", lf), kp(n, "!", cf), kp(n, "-", df), kp(n, "%", hf), kp(n, "|", uf), kp(n, "+", pf), kp(n, "#", ff), kp(n, "?", mf), kp(n, '"', gf), kp(n, "/", vf), kp(n, ";", bf), kp(n, "~", wf), kp(n, "_", kf), kp(n, "\\", tf), kp(n, "・", yf);
                const r = vp(n, Af, Dp, {
                    [op]: !0
                });
                vp(r, Af, r);
                const o = vp(r, Cf, Mp, {
                        [ap]: !0
                    }),
                    i = vp(r, Of, Cp, {
                        [lp]: !0
                    }),
                    s = vp(n, Cf, xp, {
                        [ip]: !0
                    });
                vp(s, Af, o), vp(s, Cf, s), vp(o, Af, o), vp(o, Cf, o);
                const a = vp(n, Of, Sp, {
                    [sp]: !0
                });
                vp(a, Cf), vp(a, Af, i), vp(a, Of, a), vp(i, Af, i), vp(i, Cf), vp(i, Of, i);
                const l = kp(n, Df, Rp, {
                        [pp]: !0
                    }),
                    c = kp(n, Ef, Pp, {
                        [pp]: !0
                    }),
                    d = vp(n, Nf, Pp, {
                        [pp]: !0
                    });
                kp(n, Lf, d), kp(c, Df, l), kp(c, Lf, d), vp(c, Nf, d), kp(d, Ef), kp(d, Df), vp(d, Nf, d), kp(d, Lf, d);
                const h = vp(n, Tf, xf, {
                    [dp]: !0
                });
                kp(h, "#"), vp(h, Tf, h), kp(h, Pf, h);
                const u = kp(h, Rf);
                kp(u, "#"), vp(u, Tf, h);
                const p = [
                        [Cf, s],
                        [Af, o]
                    ],
                    f = [
                        [Cf, null],
                        [Of, a],
                        [Af, i]
                    ];
                for (let m = 0; m < If.length; m++) Hf(n, If[m], Tp, xp, p);
                for (let m = 0; m < $f.length; m++) Hf(n, $f[m], Ap, Sp, f);
                mp(Tp, {
                    tld: !0,
                    ascii: !0
                }, e), mp(Ap, {
                    utld: !0,
                    alpha: !0
                }, e), Hf(n, "file", Np, xp, p), Hf(n, "mailto", Np, xp, p), Hf(n, "http", Ep, xp, p), Hf(n, "https", Ep, xp, p), Hf(n, "ftp", Ep, xp, p), Hf(n, "ftps", Ep, xp, p), mp(Np, {
                    scheme: !0,
                    ascii: !0
                }, e), mp(Ep, {
                    slashscheme: !0,
                    ascii: !0
                }, e), t = t.sort((t, e) => t[0] > e[0] ? 1 : -1);
                for (let m = 0; m < t.length; m++) {
                    const e = t[m][0],
                        r = t[m][1],
                        o = r ? {
                            [hp]: !0
                        } : {
                            [up]: !0
                        };
                    e.indexOf("-") >= 0 ? o[cp] = !0 : Cf.test(e) ? Af.test(e) ? o[ap] = !0 : o[ip] = !0 : o[op] = !0, wp(n, e, e, o)
                }
                return wp(n, "localhost", Op, {
                    ascii: !0
                }), n.jd = new yp(Sf), {
                    start: n,
                    tokens: Object.assign({
                        groups: e
                    }, Mf)
                }
            }

            function jf(t, e) {
                const n = Bf(e.replace(/[A-Z]/g, t => t.toLowerCase())),
                    r = n.length,
                    o = [];
                let i = 0,
                    s = 0;
                while (s < r) {
                    let a = t,
                        l = null,
                        c = 0,
                        d = null,
                        h = -1,
                        u = -1;
                    while (s < r && (l = a.go(n[s]))) a = l, a.accepts() ? (h = 0, u = 0, d = a) : h >= 0 && (h += n[s].length, u++), c += n[s].length, i += n[s].length, s++;
                    i -= h, s -= u, c -= h, o.push({
                        t: d.t,
                        v: e.slice(i - c, i),
                        s: i - c,
                        e: i
                    })
                }
                return o
            }

            function Bf(t) {
                const e = [],
                    n = t.length;
                let r = 0;
                while (r < n) {
                    let o, i = t.charCodeAt(r),
                        s = i < 55296 || i > 56319 || r + 1 === n || (o = t.charCodeAt(r + 1)) < 56320 || o > 57343 ? t[r] : t.slice(r, r + 2);
                    e.push(s), r += s.length
                }
                return e
            }

            function Hf(t, e, n, r, o) {
                let i;
                const s = e.length;
                for (let a = 0; a < s - 1; a++) {
                    const n = e[a];
                    t.j[n] ? i = t.j[n] : (i = new yp(r), i.jr = o.slice(), t.j[n] = i), t = i
                }
                return i = new yp(n), i.jr = o.slice(), t.j[e[s - 1]] = i, i
            }

            function Vf(t) {
                const e = [],
                    n = [];
                let r = 0,
                    o = "0123456789";
                while (r < t.length) {
                    let i = 0;
                    while (o.indexOf(t[r + i]) >= 0) i++;
                    if (i > 0) {
                        e.push(n.join(""));
                        for (let e = parseInt(t.substring(r, r + i), 10); e > 0; e--) n.pop();
                        r += i
                    } else n.push(t[r]), r++
                }
                return e
            }
            const Ff = {
                defaultProtocol: "http",
                events: null,
                format: Wf,
                formatHref: Wf,
                nl2br: !1,
                tagName: "a",
                target: null,
                rel: null,
                validate: !0,
                truncate: 1 / 0,
                className: null,
                attributes: null,
                ignoreTags: [],
                render: null
            };

            function _f(t, e = null) {
                let n = Object.assign({}, Ff);
                t && (n = Object.assign(n, t instanceof _f ? t.o : t));
                const r = n.ignoreTags,
                    o = [];
                for (let i = 0; i < r.length; i++) o.push(r[i].toUpperCase());
                this.o = n, e && (this.defaultRender = e), this.ignoreTags = o
            }

            function Wf(t) {
                return t
            }
            _f.prototype = {
                o: Ff,
                ignoreTags: [],
                defaultRender(t) {
                    return t
                },
                check(t) {
                    return this.get("validate", t.toString(), t)
                },
                get(t, e, n) {
                    const r = null != e;
                    let o = this.o[t];
                    return o ? ("object" === typeof o ? (o = n.t in o ? o[n.t] : Ff[t], "function" === typeof o && r && (o = o(e, n))) : "function" === typeof o && r && (o = o(e, n.t, n)), o) : o
                },
                getObj(t, e, n) {
                    let r = this.o[t];
                    return "function" === typeof r && null != e && (r = r(e, n.t, n)), r
                },
                render(t) {
                    const e = t.render(this),
                        n = this.get("render", null, t) || this.defaultRender;
                    return n(e, t.t, t)
                }
            };

            function qf(t, e) {
                this.t = "token", this.v = t, this.tk = e
            }

            function Kf(t, e) {
                class n extends qf {
                    constructor(e, n) {
                        super(e, n), this.t = t
                    }
                }
                for (const r in e) n.prototype[r] = e[r];
                return n.t = t, n
            }
            qf.prototype = {
                isLink: !1,
                toString() {
                    return this.v
                },
                toHref(t) {
                    return this.toString()
                },
                toFormattedString(t) {
                    const e = this.toString(),
                        n = t.get("truncate", e, this),
                        r = t.get("format", e, this);
                    return n && r.length > n ? r.substring(0, n) + "…" : r
                },
                toFormattedHref(t) {
                    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this)
                },
                startIndex() {
                    return this.tk[0].s
                },
                endIndex() {
                    return this.tk[this.tk.length - 1].e
                },
                toObject(t = Ff.defaultProtocol) {
                    return {
                        type: this.t,
                        value: this.toString(),
                        isLink: this.isLink,
                        href: this.toHref(t),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                toFormattedObject(t) {
                    return {
                        type: this.t,
                        value: this.toFormattedString(t),
                        isLink: this.isLink,
                        href: this.toFormattedHref(t),
                        start: this.startIndex(),
                        end: this.endIndex()
                    }
                },
                validate(t) {
                    return t.get("validate", this.toString(), this)
                },
                render(t) {
                    const e = this,
                        n = this.toHref(t.get("defaultProtocol")),
                        r = t.get("formatHref", n, this),
                        o = t.get("tagName", n, e),
                        i = this.toFormattedString(t),
                        s = {},
                        a = t.get("className", n, e),
                        l = t.get("target", n, e),
                        c = t.get("rel", n, e),
                        d = t.getObj("attributes", n, e),
                        h = t.getObj("events", n, e);
                    return s.href = r, a && (s.class = a), l && (s.target = l), c && (s.rel = c), d && Object.assign(s, d), {
                        tagName: o,
                        attributes: s,
                        content: i,
                        eventListeners: h
                    }
                }
            };
            const Uf = Kf("email", {
                    isLink: !0,
                    toHref() {
                        return "mailto:" + this.toString()
                    }
                }),
                Jf = Kf("text"),
                Gf = Kf("nl"),
                Yf = Kf("url", {
                    isLink: !0,
                    toHref(t = Ff.defaultProtocol) {
                        return this.hasProtocol() ? this.v : `${t}://${this.v}`
                    },
                    hasProtocol() {
                        const t = this.tk;
                        return t.length >= 2 && t[0].t !== Op && t[1].t === rf
                    }
                });
            const Xf = t => new yp(t);

            function Qf({
                groups: t
            }) {
                const e = t.domain.concat([Yp, Qp, Zp, tf, ef, nf, sf, lf, df, Dp, hf, uf, pf, ff, vf, Sf, wf, kf]),
                    n = [Xp, rf, of , af, cf, hf, mf, gf, bf, Hp, Vp, Lp, Ip, zp, $p, jp, Bp, Fp, _p, Wp, qp, Kp, Up, Jp, Gp],
                    r = [Yp, Xp, Qp, tf, ef, nf, sf, lf, df, Lp, Ip, hf, uf, pf, ff, mf, vf, Sf, wf, kf],
                    o = Xf(),
                    i = kp(o, wf);
                bp(i, r, i), bp(i, t.domain, i);
                const s = Xf(),
                    a = Xf(),
                    l = Xf();
                bp(o, t.domain, s), bp(o, t.scheme, a), bp(o, t.slashscheme, l), bp(s, r, i), bp(s, t.domain, s);
                const c = kp(s, Zp);
                kp(i, Zp, c), kp(a, Zp, c), kp(l, Zp, c);
                const d = kp(i, af);
                bp(d, r, i), bp(d, t.domain, i);
                const h = Xf();
                bp(c, t.domain, h), bp(h, t.domain, h);
                const u = kp(h, af);
                bp(u, t.domain, h);
                const p = Xf(Uf);
                bp(u, t.tld, p), bp(u, t.utld, p), kp(c, Op, p);
                const f = kp(h, df);
                kp(f, df, f), bp(f, t.domain, h), bp(p, t.domain, h), kp(p, af, u), kp(p, df, f);
                const m = kp(p, rf);
                bp(m, t.numeric, Uf);
                const g = kp(s, df),
                    y = kp(s, af);
                kp(g, df, g), bp(g, t.domain, s), bp(y, r, i), bp(y, t.domain, s);
                const b = Xf(Yf);
                bp(y, t.tld, b), bp(y, t.utld, b), bp(b, t.domain, s), bp(b, r, i), kp(b, af, y), kp(b, df, g), kp(b, Zp, c);
                const v = kp(b, rf),
                    w = Xf(Yf);
                bp(v, t.numeric, w);
                const k = Xf(Yf),
                    x = Xf();
                bp(k, e, k), bp(k, n, x), bp(x, e, k), bp(x, n, x), kp(b, vf, k), kp(w, vf, k);
                const S = kp(a, rf),
                    M = kp(l, rf),
                    C = kp(M, vf),
                    O = kp(C, vf);
                bp(a, t.domain, s), kp(a, af, y), kp(a, df, g), bp(l, t.domain, s), kp(l, af, y), kp(l, df, g), bp(S, t.domain, k), kp(S, vf, k), kp(S, mf, k), bp(O, t.domain, k), bp(O, e, k), kp(O, vf, k);
                const T = [
                    [Lp, Ip],
                    [$p, zp],
                    [jp, Bp],
                    [Hp, Vp],
                    [Fp, _p],
                    [Wp, qp],
                    [Kp, Up],
                    [Jp, Gp]
                ];
                for (let A = 0; A < T.length; A++) {
                    const [t, r] = T[A], o = kp(k, t);
                    kp(x, t, o), kp(o, r, k);
                    const i = Xf(Yf);
                    bp(o, e, i);
                    const s = Xf();
                    bp(o, n), bp(i, e, i), bp(i, n, s), bp(s, e, i), bp(s, n, s), kp(i, r, k), kp(s, r, k)
                }
                return kp(o, Op, b), kp(o, Rp, Gf), {
                    start: o,
                    tokens: Mf
                }
            }

            function Zf(t, e, n) {
                let r = n.length,
                    o = 0,
                    i = [],
                    s = [];
                while (o < r) {
                    let a = t,
                        l = null,
                        c = null,
                        d = 0,
                        h = null,
                        u = -1;
                    while (o < r && !(l = a.go(n[o].t))) s.push(n[o++]);
                    while (o < r && (c = l || a.go(n[o].t))) l = null, a = c, a.accepts() ? (u = 0, h = a) : u >= 0 && u++, o++, d++;
                    if (u < 0) o -= d, o < r && (s.push(n[o]), o++);
                    else {
                        s.length > 0 && (i.push(tm(Jf, e, s)), s = []), o -= u, d -= u;
                        const t = h.t,
                            r = n.slice(o - d, o);
                        i.push(tm(t, e, r))
                    }
                }
                return s.length > 0 && i.push(tm(Jf, e, s)), i
            }

            function tm(t, e, n) {
                const r = n[0].s,
                    o = n[n.length - 1].e,
                    i = e.slice(r, o);
                return new t(i, n)
            }
            const em = "undefined" !== typeof console && console && console.warn || (() => {}),
                nm = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.",
                rm = {
                    scanner: null,
                    parser: null,
                    tokenQueue: [],
                    pluginQueue: [],
                    customSchemes: [],
                    initialized: !1
                };

            function om() {
                return yp.groups = {}, rm.scanner = null, rm.parser = null, rm.tokenQueue = [], rm.pluginQueue = [], rm.customSchemes = [], rm.initialized = !1, rm
            }

            function im(t, e = !1) {
                if (rm.initialized && em(`linkifyjs: already initialized - will not register custom scheme "${t}" ${nm}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t)) throw new Error('linkifyjs: incorrect scheme format.\n1. Must only contain digits, lowercase ASCII letters or "-"\n2. Cannot start or end with "-"\n3. "-" cannot repeat');
                rm.customSchemes.push([t, e])
            }

            function sm() {
                rm.scanner = zf(rm.customSchemes);
                for (let t = 0; t < rm.tokenQueue.length; t++) rm.tokenQueue[t][1]({
                    scanner: rm.scanner
                });
                rm.parser = Qf(rm.scanner.tokens);
                for (let t = 0; t < rm.pluginQueue.length; t++) rm.pluginQueue[t][1]({
                    scanner: rm.scanner,
                    parser: rm.parser
                });
                return rm.initialized = !0, rm
            }

            function am(t) {
                return rm.initialized || sm(), Zf(rm.parser.start, t, jf(rm.scanner.start, t))
            }

            function lm(t, e = null, n = null) {
                if (e && "object" === typeof e) {
                    if (n) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
                    n = e, e = null
                }
                const r = new _f(n),
                    o = am(t),
                    i = [];
                for (let s = 0; s < o.length; s++) {
                    const t = o[s];
                    !t.isLink || e && t.t !== e || !r.check(t) || i.push(t.toFormattedObject(r))
                }
                return i
            }
            am.scan = jf;
            var cm = "[\0-   ᠎ -\u2029 　]",
                dm = new RegExp(cm),
                hm = new RegExp(cm + "$"),
                um = new RegExp(cm, "g");

            function pm(t) {
                return 1 === t.length ? t[0].isLink : !(3 !== t.length || !t[1].isLink) && ["()", "[]"].includes(t[0].value + t[2].value)
            }

            function fm(t) {
                return new mn({
                    key: new bn("autolink"),
                    appendTransaction: (e, n, r) => {
                        const o = e.some(t => t.docChanged) && !n.doc.eq(r.doc),
                            i = e.some(t => t.getMeta("preventAutolink"));
                        if (!o || i) return;
                        const {
                            tr: s
                        } = r, a = sc(n.doc, [...e]), l = $c(a);
                        return l.forEach(({
                            newRange: e
                        }) => {
                            const n = lc(r.doc, e, t => t.isTextblock);
                            let o, i;
                            if (n.length > 1) o = n[0], i = r.doc.textBetween(o.pos, o.pos + o.node.nodeSize, void 0, " ");
                            else if (n.length) {
                                const t = r.doc.textBetween(e.from, e.to, " ", " ");
                                if (!hm.test(t)) return;
                                o = n[0], i = r.doc.textBetween(o.pos, e.to, void 0, " ")
                            }
                            if (o && i) {
                                const e = i.split(dm).filter(Boolean);
                                if (e.length <= 0) return !1;
                                const n = e[e.length - 1],
                                    a = o.pos + i.lastIndexOf(n);
                                if (!n) return !1;
                                const l = am(n).map(e => e.toObject(t.defaultProtocol));
                                if (!pm(l)) return !1;
                                l.filter(t => t.isLink).map(t => ({ ...t,
                                    from: a + t.start + 1,
                                    to: a + t.end + 1
                                })).filter(t => !r.schema.marks.code || !r.doc.rangeHasMark(t.from, t.to, r.schema.marks.code)).filter(e => t.validate(e.value)).filter(e => t.shouldAutoLink(e.value)).forEach(e => {
                                    zc(e.from, e.to, r.doc).some(e => e.mark.type === t.type) || s.addMark(e.from, e.to, t.type.create({
                                        href: e.href
                                    }))
                                })
                            }
                        }), s.steps.length ? s : void 0
                    }
                })
            }

            function mm(t) {
                return new mn({
                    key: new bn("handleClickLink"),
                    props: {
                        handleClick: (e, n, r) => {
                            var o, i;
                            if (0 !== r.button) return !1;
                            if (!e.editable) return !1;
                            let s = null;
                            if (r.target instanceof HTMLAnchorElement) s = r.target;
                            else {
                                let t = r.target;
                                const e = [];
                                while ("DIV" !== t.nodeName) e.push(t), t = t.parentNode;
                                s = e.find(t => "A" === t.nodeName)
                            }
                            if (!s) return !1;
                            const a = Rc(e.state, t.type.name),
                                l = null != (o = null == s ? void 0 : s.href) ? o : a.href,
                                c = null != (i = null == s ? void 0 : s.target) ? i : a.target;
                            return t.enableClickSelection && t.editor.commands.extendMarkRange(t.type.name), !(!s || !l) && (window.open(l, c), !0)
                        }
                    }
                })
            }

            function gm(t) {
                return new mn({
                    key: new bn("handlePasteLink"),
                    props: {
                        handlePaste: (e, n, r) => {
                            const {
                                shouldAutoLink: o
                            } = t, {
                                state: i
                            } = e, {
                                selection: s
                            } = i, {
                                empty: a
                            } = s;
                            if (a) return !1;
                            let l = "";
                            r.content.forEach(t => {
                                l += t.textContent
                            });
                            const c = lm(l, {
                                defaultProtocol: t.defaultProtocol
                            }).find(t => t.isLink && t.value === l);
                            return !(!l || !c || void 0 !== o && !o(c.href)) && t.editor.commands.setMark(t.type, {
                                href: c.href
                            })
                        }
                    }
                })
            }

            function ym(t, e) {
                const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
                return e && e.forEach(t => {
                    const e = "string" === typeof t ? t : t.scheme;
                    e && n.push(e)
                }), !t || t.replace(um, "").match(new RegExp(`^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"))
            }
            var bm = Nd.create({
                    name: "link",
                    priority: 1e3,
                    keepOnSplit: !1,
                    exitable: !0,
                    onCreate() {
                        this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach(t => {
                            "string" !== typeof t ? im(t.scheme, t.optionalSlashes) : im(t)
                        })
                    },
                    onDestroy() {
                        om()
                    },
                    inclusive() {
                        return this.options.autolink
                    },
                    addOptions() {
                        return {
                            openOnClick: !0,
                            enableClickSelection: !1,
                            linkOnPaste: !0,
                            autolink: !0,
                            protocols: [],
                            defaultProtocol: "http",
                            HTMLAttributes: {
                                target: "_blank",
                                rel: "noopener noreferrer nofollow",
                                class: null
                            },
                            isAllowedUri: (t, e) => !!ym(t, e.protocols),
                            validate: t => !!t,
                            shouldAutoLink: t => !!t
                        }
                    },
                    addAttributes() {
                        return {
                            href: {
                                default: null,
                                parseHTML(t) {
                                    return t.getAttribute("href")
                                }
                            },
                            target: {
                                default: this.options.HTMLAttributes.target
                            },
                            rel: {
                                default: this.options.HTMLAttributes.rel
                            },
                            class: {
                                default: this.options.HTMLAttributes.class
                            }
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "a[href]",
                            getAttrs: t => {
                                const e = t.getAttribute("href");
                                return !(!e || !this.options.isAllowedUri(e, {
                                    defaultValidate: t => !!ym(t, this.options.protocols),
                                    protocols: this.options.protocols,
                                    defaultProtocol: this.options.defaultProtocol
                                })) && null
                            }
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return this.options.isAllowedUri(t.href, {
                            defaultValidate: t => !!ym(t, this.options.protocols),
                            protocols: this.options.protocols,
                            defaultProtocol: this.options.defaultProtocol
                        }) ? ["a", vc(this.options.HTMLAttributes, t), 0] : ["a", vc(this.options.HTMLAttributes, { ...t,
                            href: ""
                        }), 0]
                    },
                    markdownTokenName: "link",
                    parseMarkdown: (t, e) => e.applyMark("link", e.parseInline(t.tokens || []), {
                        href: t.href,
                        title: t.title || null
                    }),
                    renderMarkdown: (t, e) => {
                        var n;
                        const r = (null == (n = t.attrs) ? void 0 : n.href) || "",
                            o = e.renderChildren(t);
                        return `[${o}](${r})`
                    },
                    addCommands() {
                        return {
                            setLink: t => ({
                                chain: e
                            }) => {
                                const {
                                    href: n
                                } = t;
                                return !!this.options.isAllowedUri(n, {
                                    defaultValidate: t => !!ym(t, this.options.protocols),
                                    protocols: this.options.protocols,
                                    defaultProtocol: this.options.defaultProtocol
                                }) && e().setMark(this.name, t).setMeta("preventAutolink", !0).run()
                            },
                            toggleLink: t => ({
                                chain: e
                            }) => {
                                const {
                                    href: n
                                } = t || {};
                                return !(n && !this.options.isAllowedUri(n, {
                                    defaultValidate: t => !!ym(t, this.options.protocols),
                                    protocols: this.options.protocols,
                                    defaultProtocol: this.options.defaultProtocol
                                })) && e().toggleMark(this.name, t, {
                                    extendEmptyMarkRange: !0
                                }).setMeta("preventAutolink", !0).run()
                            },
                            unsetLink: () => ({
                                chain: t
                            }) => t().unsetMark(this.name, {
                                extendEmptyMarkRange: !0
                            }).setMeta("preventAutolink", !0).run()
                        }
                    },
                    addPasteRules() {
                        return [wh({
                            find: t => {
                                const e = [];
                                if (t) {
                                    const {
                                        protocols: n,
                                        defaultProtocol: r
                                    } = this.options, o = lm(t).filter(t => t.isLink && this.options.isAllowedUri(t.value, {
                                        defaultValidate: t => !!ym(t, n),
                                        protocols: n,
                                        defaultProtocol: r
                                    }));
                                    o.length && o.forEach(t => {
                                        this.options.shouldAutoLink(t.value) && e.push({
                                            text: t.value,
                                            data: {
                                                href: t.href
                                            },
                                            index: t.start
                                        })
                                    })
                                }
                                return e
                            },
                            type: this.type,
                            getAttributes: t => {
                                var e;
                                return {
                                    href: null == (e = t.data) ? void 0 : e.href
                                }
                            }
                        })]
                    },
                    addProseMirrorPlugins() {
                        const t = [],
                            {
                                protocols: e,
                                defaultProtocol: n
                            } = this.options;
                        return this.options.autolink && t.push(fm({
                            type: this.type,
                            defaultProtocol: this.options.defaultProtocol,
                            validate: t => this.options.isAllowedUri(t, {
                                defaultValidate: t => !!ym(t, e),
                                protocols: e,
                                defaultProtocol: n
                            }),
                            shouldAutoLink: this.options.shouldAutoLink
                        })), !0 === this.options.openOnClick && t.push(mm({
                            type: this.type,
                            editor: this.editor,
                            enableClickSelection: this.options.enableClickSelection
                        })), this.options.linkOnPaste && t.push(gm({
                            editor: this.editor,
                            defaultProtocol: this.options.defaultProtocol,
                            type: this.type,
                            shouldAutoLink: this.options.shouldAutoLink
                        })), t
                    }
                }),
                vm = vh.create({
                    name: "paragraph",
                    priority: 1e3,
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    group: "block",
                    content: "inline*",
                    parseHTML() {
                        return [{
                            tag: "p"
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["p", vc(this.options.HTMLAttributes, t), 0]
                    },
                    parseMarkdown: (t, e) => {
                        const n = t.tokens || [];
                        return 1 === n.length && "image" === n[0].type ? e.parseChildren([n[0]]) : e.createNode("paragraph", void 0, e.parseInline(n))
                    },
                    renderMarkdown: (t, e) => t && Array.isArray(t.content) ? e.renderChildren(t.content) : "",
                    addCommands() {
                        return {
                            setParagraph: () => ({
                                commands: t
                            }) => t.setNode(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Alt-0": () => this.editor.commands.setParagraph()
                        }
                    }
                }),
                wm = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/,
                km = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g,
                xm = Nd.create({
                    name: "strike",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "s"
                        }, {
                            tag: "del"
                        }, {
                            tag: "strike"
                        }, {
                            style: "text-decoration",
                            consuming: !1,
                            getAttrs: t => !!t.includes("line-through") && {}
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["s", vc(this.options.HTMLAttributes, t), 0]
                    },
                    markdownTokenName: "del",
                    parseMarkdown: (t, e) => e.applyMark("strike", e.parseInline(t.tokens || [])),
                    renderMarkdown: (t, e) => `~~${e.renderChildren(t)}~~`,
                    addCommands() {
                        return {
                            setStrike: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleStrike: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetStrike: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-s": () => this.editor.commands.toggleStrike()
                        }
                    },
                    addInputRules() {
                        return [eh({
                            find: wm,
                            type: this.type
                        })]
                    },
                    addPasteRules() {
                        return [wh({
                            find: km,
                            type: this.type
                        })]
                    }
                }),
                Sm = vh.create({
                    name: "text",
                    group: "inline",
                    parseMarkdown: t => ({
                        type: "text",
                        text: t.text || ""
                    }),
                    renderMarkdown: t => t.text || ""
                }),
                Mm = Nd.create({
                    name: "underline",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "u"
                        }, {
                            style: "text-decoration",
                            consuming: !1,
                            getAttrs: t => !!t.includes("underline") && {}
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["u", vc(this.options.HTMLAttributes, t), 0]
                    },
                    parseMarkdown(t, e) {
                        return e.applyMark(this.name || "underline", e.parseInline(t.tokens || []))
                    },
                    renderMarkdown(t, e) {
                        return `++${e.renderChildren(t)}++`
                    },
                    markdownTokenizer: {
                        name: "underline",
                        level: "inline",
                        start(t) {
                            return t.indexOf("++")
                        },
                        tokenize(t, e, n) {
                            const r = /^(\+\+)([\s\S]+?)(\+\+)/,
                                o = r.exec(t);
                            if (!o) return;
                            const i = o[2].trim();
                            return {
                                type: "underline",
                                raw: o[0],
                                text: i,
                                tokens: n.inlineTokens(i)
                            }
                        }
                    },
                    addCommands() {
                        return {
                            setUnderline: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleUnderline: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetUnderline: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-u": () => this.editor.commands.toggleUnderline(),
                            "Mod-U": () => this.editor.commands.toggleUnderline()
                        }
                    }
                });

            function Cm(t = {}) {
                return new mn({
                    view(e) {
                        return new Om(e, t)
                    }
                })
            }
            class Om {
                constructor(t, e) {
                    var n;
                    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = null !== (n = e.width) && void 0 !== n ? n : 1, this.color = !1 === e.color ? void 0 : e.color || "black", this.class = e.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(e => {
                        let n = t => {
                            this[e](t)
                        };
                        return t.dom.addEventListener(e, n), {
                            name: e,
                            handler: n
                        }
                    })
                }
                destroy() {
                    this.handlers.forEach(({
                        name: t,
                        handler: e
                    }) => this.editorView.dom.removeEventListener(t, e))
                }
                update(t, e) {
                    null != this.cursorPos && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay())
                }
                setCursor(t) {
                    t != this.cursorPos && (this.cursorPos = t, null == t ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay())
                }
                updateOverlay() {
                    let t, e = this.editorView.state.doc.resolve(this.cursorPos),
                        n = !e.parent.inlineContent,
                        r = this.editorView.dom,
                        o = r.getBoundingClientRect(),
                        i = o.width / r.offsetWidth,
                        s = o.height / r.offsetHeight;
                    if (n) {
                        let n = e.nodeBefore,
                            r = e.nodeAfter;
                        if (n || r) {
                            let e = this.editorView.nodeDOM(this.cursorPos - (n ? n.nodeSize : 0));
                            if (e) {
                                let o = e.getBoundingClientRect(),
                                    i = n ? o.bottom : o.top;
                                n && r && (i = (i + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
                                let a = this.width / 2 * s;
                                t = {
                                    left: o.left,
                                    right: o.right,
                                    top: i - a,
                                    bottom: i + a
                                }
                            }
                        }
                    }
                    if (!t) {
                        let e = this.editorView.coordsAtPos(this.cursorPos),
                            n = this.width / 2 * i;
                        t = {
                            left: e.left - n,
                            right: e.left + n,
                            top: e.top,
                            bottom: e.bottom
                        }
                    }
                    let a, l, c = this.editorView.dom.offsetParent;
                    if (this.element || (this.element = c.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n), !c || c == document.body && "static" == getComputedStyle(c).position) a = -pageXOffset, l = -pageYOffset;
                    else {
                        let t = c.getBoundingClientRect(),
                            e = t.width / c.offsetWidth,
                            n = t.height / c.offsetHeight;
                        a = t.left - c.scrollLeft * e, l = t.top - c.scrollTop * n
                    }
                    this.element.style.left = (t.left - a) / i + "px", this.element.style.top = (t.top - l) / s + "px", this.element.style.width = (t.right - t.left) / i + "px", this.element.style.height = (t.bottom - t.top) / s + "px"
                }
                scheduleRemoval(t) {
                    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t)
                }
                dragover(t) {
                    if (!this.editorView.editable) return;
                    let e = this.editorView.posAtCoords({
                            left: t.clientX,
                            top: t.clientY
                        }),
                        n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside),
                        r = n && n.type.spec.disableDropCursor,
                        o = "function" == typeof r ? r(this.editorView, e, t) : r;
                    if (e && !o) {
                        let t = e.pos;
                        if (this.editorView.dragging && this.editorView.dragging.slice) {
                            let e = Ce(this.editorView.state.doc, t, this.editorView.dragging.slice);
                            null != e && (t = e)
                        }
                        this.setCursor(t), this.scheduleRemoval(5e3)
                    }
                }
                dragend() {
                    this.scheduleRemoval(20)
                }
                drop() {
                    this.scheduleRemoval(20)
                }
                dragleave(t) {
                    this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null)
                }
            }
            class Tm extends Ke {
                constructor(t) {
                    super(t, t)
                }
                map(t, e) {
                    let n = t.resolve(e.map(this.head));
                    return Tm.valid(n) ? new Tm(n) : Ke.near(n)
                }
                content() {
                    return y.empty
                }
                eq(t) {
                    return t instanceof Tm && t.head == this.head
                }
                toJSON() {
                    return {
                        type: "gapcursor",
                        pos: this.head
                    }
                }
                static fromJSON(t, e) {
                    if ("number" != typeof e.pos) throw new RangeError("Invalid input for GapCursor.fromJSON");
                    return new Tm(t.resolve(e.pos))
                }
                getBookmark() {
                    return new Am(this.anchor)
                }
                static valid(t) {
                    let e = t.parent;
                    if (e.isTextblock || !Em(t) || !Dm(t)) return !1;
                    let n = e.type.spec.allowGapCursor;
                    if (null != n) return n;
                    let r = e.contentMatchAt(t.index()).defaultType;
                    return r && r.isTextblock
                }
                static findGapCursorFrom(t, e, n = !1) {
                    t: for (;;) {
                        if (!n && Tm.valid(t)) return t;
                        let r = t.pos,
                            o = null;
                        for (let n = t.depth;; n--) {
                            let i = t.node(n);
                            if (e > 0 ? t.indexAfter(n) < i.childCount : t.index(n) > 0) {
                                o = i.child(e > 0 ? t.indexAfter(n) : t.index(n) - 1);
                                break
                            }
                            if (0 == n) return null;
                            r += e;
                            let s = t.doc.resolve(r);
                            if (Tm.valid(s)) return s
                        }
                        for (;;) {
                            let i = e > 0 ? o.firstChild : o.lastChild;
                            if (!i) {
                                if (o.isAtom && !o.isText && !Qe.isSelectable(o)) {
                                    t = t.doc.resolve(r + o.nodeSize * e), n = !1;
                                    continue t
                                }
                                break
                            }
                            o = i, r += e;
                            let s = t.doc.resolve(r);
                            if (Tm.valid(s)) return s
                        }
                        return null
                    }
                }
            }
            Tm.prototype.visible = !1, Tm.findFrom = Tm.findGapCursorFrom, Ke.jsonID("gapcursor", Tm);
            class Am {
                constructor(t) {
                    this.pos = t
                }
                map(t) {
                    return new Am(t.map(this.pos))
                }
                resolve(t) {
                    let e = t.resolve(this.pos);
                    return Tm.valid(e) ? new Tm(e) : Ke.near(e)
                }
            }

            function Nm(t) {
                return t.isAtom || t.spec.isolating || t.spec.createGapCursor
            }

            function Em(t) {
                for (let e = t.depth; e >= 0; e--) {
                    let n = t.index(e),
                        r = t.node(e);
                    if (0 != n)
                        for (let t = r.child(n - 1);; t = t.lastChild) {
                            if (0 == t.childCount && !t.inlineContent || Nm(t.type)) return !0;
                            if (t.inlineContent) return !1
                        } else if (r.type.spec.isolating) return !0
                }
                return !0
            }

            function Dm(t) {
                for (let e = t.depth; e >= 0; e--) {
                    let n = t.indexAfter(e),
                        r = t.node(e);
                    if (n != r.childCount)
                        for (let t = r.child(n);; t = t.firstChild) {
                            if (0 == t.childCount && !t.inlineContent || Nm(t.type)) return !0;
                            if (t.inlineContent) return !1
                        } else if (r.type.spec.isolating) return !0
                }
                return !0
            }

            function Pm() {
                return new mn({
                    props: {
                        decorations: zm,
                        createSelectionBetween(t, e, n) {
                            return e.pos == n.pos && Tm.valid(n) ? new Tm(n) : null
                        },
                        handleClick: Im,
                        handleKeyDown: Rm,
                        handleDOMEvents: {
                            beforeinput: $m
                        }
                    }
                })
            }
            const Rm = Wa({
                ArrowLeft: Lm("horiz", -1),
                ArrowRight: Lm("horiz", 1),
                ArrowUp: Lm("vert", -1),
                ArrowDown: Lm("vert", 1)
            });

            function Lm(t, e) {
                const n = "vert" == t ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
                return function(t, r, o) {
                    let i = t.selection,
                        s = e > 0 ? i.$to : i.$from,
                        a = i.empty;
                    if (i instanceof Ye) {
                        if (!o.endOfTextblock(n) || 0 == s.depth) return !1;
                        a = !1, s = t.doc.resolve(e > 0 ? s.after() : s.before())
                    }
                    let l = Tm.findGapCursorFrom(s, e, a);
                    return !!l && (r && r(t.tr.setSelection(new Tm(l))), !0)
                }
            }

            function Im(t, e, n) {
                if (!t || !t.editable) return !1;
                let r = t.state.doc.resolve(e);
                if (!Tm.valid(r)) return !1;
                let o = t.posAtCoords({
                    left: n.clientX,
                    top: n.clientY
                });
                return !(o && o.inside > -1 && Qe.isSelectable(t.state.doc.nodeAt(o.inside))) && (t.dispatch(t.state.tr.setSelection(new Tm(r))), !0)
            }

            function $m(t, e) {
                if ("insertCompositionText" != e.inputType || !(t.state.selection instanceof Tm)) return !1;
                let {
                    $from: n
                } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
                if (!r) return !1;
                let o = h.empty;
                for (let s = r.length - 1; s >= 0; s--) o = h.from(r[s].createAndFill(null, o));
                let i = t.state.tr.replace(n.pos, n.pos, new y(o, 0, 0));
                return i.setSelection(Ye.near(i.doc.resolve(n.pos + 1))), t.dispatch(i), !1
            }

            function zm(t) {
                if (!(t.selection instanceof Tm)) return null;
                let e = document.createElement("div");
                return e.className = "ProseMirror-gapcursor", Ws.create(t.doc, [Vs.widget(t.selection.head, e, {
                    key: "gapcursor"
                })])
            }
            var jm = 200,
                Bm = function() {};
            Bm.prototype.append = function(t) {
                return t.length ? (t = Bm.from(t), !this.length && t || t.length < jm && this.leafAppend(t) || this.length < jm && t.leafPrepend(this) || this.appendInner(t)) : this
            }, Bm.prototype.prepend = function(t) {
                return t.length ? Bm.from(t).append(this) : this
            }, Bm.prototype.appendInner = function(t) {
                return new Vm(this, t)
            }, Bm.prototype.slice = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = this.length), t >= e ? Bm.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, e))
            }, Bm.prototype.get = function(t) {
                if (!(t < 0 || t >= this.length)) return this.getInner(t)
            }, Bm.prototype.forEach = function(t, e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = this.length), e <= n ? this.forEachInner(t, e, n, 0) : this.forEachInvertedInner(t, e, n, 0)
            }, Bm.prototype.map = function(t, e, n) {
                void 0 === e && (e = 0), void 0 === n && (n = this.length);
                var r = [];
                return this.forEach((function(e, n) {
                    return r.push(t(e, n))
                }), e, n), r
            }, Bm.from = function(t) {
                return t instanceof Bm ? t : t && t.length ? new Hm(t) : Bm.empty
            };
            var Hm = function(t) {
                function e(e) {
                    t.call(this), this.values = e
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var n = {
                    length: {
                        configurable: !0
                    },
                    depth: {
                        configurable: !0
                    }
                };
                return e.prototype.flatten = function() {
                    return this.values
                }, e.prototype.sliceInner = function(t, n) {
                    return 0 == t && n == this.length ? this : new e(this.values.slice(t, n))
                }, e.prototype.getInner = function(t) {
                    return this.values[t]
                }, e.prototype.forEachInner = function(t, e, n, r) {
                    for (var o = e; o < n; o++)
                        if (!1 === t(this.values[o], r + o)) return !1
                }, e.prototype.forEachInvertedInner = function(t, e, n, r) {
                    for (var o = e - 1; o >= n; o--)
                        if (!1 === t(this.values[o], r + o)) return !1
                }, e.prototype.leafAppend = function(t) {
                    if (this.length + t.length <= jm) return new e(this.values.concat(t.flatten()))
                }, e.prototype.leafPrepend = function(t) {
                    if (this.length + t.length <= jm) return new e(t.flatten().concat(this.values))
                }, n.length.get = function() {
                    return this.values.length
                }, n.depth.get = function() {
                    return 0
                }, Object.defineProperties(e.prototype, n), e
            }(Bm);
            Bm.empty = new Hm([]);
            var Vm = function(t) {
                    function e(e, n) {
                        t.call(this), this.left = e, this.right = n, this.length = e.length + n.length, this.depth = Math.max(e.depth, n.depth) + 1
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
                        return this.left.flatten().concat(this.right.flatten())
                    }, e.prototype.getInner = function(t) {
                        return t < this.left.length ? this.left.get(t) : this.right.get(t - this.left.length)
                    }, e.prototype.forEachInner = function(t, e, n, r) {
                        var o = this.left.length;
                        return !(e < o && !1 === this.left.forEachInner(t, e, Math.min(n, o), r)) && (!(n > o && !1 === this.right.forEachInner(t, Math.max(e - o, 0), Math.min(this.length, n) - o, r + o)) && void 0)
                    }, e.prototype.forEachInvertedInner = function(t, e, n, r) {
                        var o = this.left.length;
                        return !(e > o && !1 === this.right.forEachInvertedInner(t, e - o, Math.max(n, o) - o, r + o)) && (!(n < o && !1 === this.left.forEachInvertedInner(t, Math.min(e, o), n, r)) && void 0)
                    }, e.prototype.sliceInner = function(t, e) {
                        if (0 == t && e == this.length) return this;
                        var n = this.left.length;
                        return e <= n ? this.left.slice(t, e) : t >= n ? this.right.slice(t - n, e - n) : this.left.slice(t, n).append(this.right.slice(0, e - n))
                    }, e.prototype.leafAppend = function(t) {
                        var n = this.right.leafAppend(t);
                        if (n) return new e(this.left, n)
                    }, e.prototype.leafPrepend = function(t) {
                        var n = this.left.leafPrepend(t);
                        if (n) return new e(n, this.right)
                    }, e.prototype.appendInner = function(t) {
                        return this.left.depth >= Math.max(this.right.depth, t.depth) + 1 ? new e(this.left, new e(this.right, t)) : new e(this, t)
                    }, e
                }(Bm),
                Fm = Bm;
            const _m = 500;
            class Wm {
                constructor(t, e) {
                    this.items = t, this.eventCount = e
                }
                popEvent(t, e) {
                    if (0 == this.eventCount) return null;
                    let n, r, o = this.items.length;
                    for (;; o--) {
                        let t = this.items.get(o - 1);
                        if (t.selection) {
                            --o;
                            break
                        }
                    }
                    e && (n = this.remapping(o, this.items.length), r = n.maps.length);
                    let i, s, a = t.tr,
                        l = [],
                        c = [];
                    return this.items.forEach((t, e) => {
                        if (!t.step) return n || (n = this.remapping(o, e + 1), r = n.maps.length), r--, void c.push(t);
                        if (n) {
                            c.push(new Km(t.map));
                            let e, o = t.step.map(n.slice(r));
                            o && a.maybeStep(o).doc && (e = a.mapping.maps[a.mapping.maps.length - 1], l.push(new Km(e, void 0, void 0, l.length + c.length))), r--, e && n.appendMap(e, r)
                        } else a.maybeStep(t.step);
                        return t.selection ? (i = n ? t.selection.map(n.slice(r)) : t.selection, s = new Wm(this.items.slice(0, o).append(c.reverse().concat(l)), this.eventCount - 1), !1) : void 0
                    }, this.items.length, 0), {
                        remaining: s,
                        transform: a,
                        selection: i
                    }
                }
                addTransform(t, e, n, r) {
                    let o = [],
                        i = this.eventCount,
                        s = this.items,
                        a = !r && s.length ? s.get(s.length - 1) : null;
                    for (let c = 0; c < t.steps.length; c++) {
                        let n, l = t.steps[c].invert(t.docs[c]),
                            d = new Km(t.mapping.maps[c], l, e);
                        (n = a && a.merge(d)) && (d = n, c ? o.pop() : s = s.slice(0, s.length - 1)), o.push(d), e && (i++, e = void 0), r || (a = d)
                    }
                    let l = i - n.depth;
                    return l > Jm && (s = qm(s, l), i -= l), new Wm(s.append(o), i)
                }
                remapping(t, e) {
                    let n = new _t;
                    return this.items.forEach((e, r) => {
                        let o = null != e.mirrorOffset && r - e.mirrorOffset >= t ? n.maps.length - e.mirrorOffset : void 0;
                        n.appendMap(e.map, o)
                    }, t, e), n
                }
                addMaps(t) {
                    return 0 == this.eventCount ? this : new Wm(this.items.append(t.map(t => new Km(t))), this.eventCount)
                }
                rebased(t, e) {
                    if (!this.eventCount) return this;
                    let n = [],
                        r = Math.max(0, this.items.length - e),
                        o = t.mapping,
                        i = t.steps.length,
                        s = this.eventCount;
                    this.items.forEach(t => {
                        t.selection && s--
                    }, r);
                    let a = e;
                    this.items.forEach(e => {
                        let r = o.getMirror(--a);
                        if (null == r) return;
                        i = Math.min(i, r);
                        let l = o.maps[r];
                        if (e.step) {
                            let i = t.steps[r].invert(t.docs[r]),
                                c = e.selection && e.selection.map(o.slice(a + 1, r));
                            c && s++, n.push(new Km(l, i, c))
                        } else n.push(new Km(l))
                    }, r);
                    let l = [];
                    for (let h = e; h < i; h++) l.push(new Km(o.maps[h]));
                    let c = this.items.slice(0, r).append(l).append(n),
                        d = new Wm(c, s);
                    return d.emptyItemCount() > _m && (d = d.compress(this.items.length - n.length)), d
                }
                emptyItemCount() {
                    let t = 0;
                    return this.items.forEach(e => {
                        e.step || t++
                    }), t
                }
                compress(t = this.items.length) {
                    let e = this.remapping(0, t),
                        n = e.maps.length,
                        r = [],
                        o = 0;
                    return this.items.forEach((i, s) => {
                        if (s >= t) r.push(i), i.selection && o++;
                        else if (i.step) {
                            let t = i.step.map(e.slice(n)),
                                s = t && t.getMap();
                            if (n--, s && e.appendMap(s, n), t) {
                                let a = i.selection && i.selection.map(e.slice(n));
                                a && o++;
                                let l, c = new Km(s.invert(), t, a),
                                    d = r.length - 1;
                                (l = r.length && r[d].merge(c)) ? r[d] = l: r.push(c)
                            }
                        } else i.map && n--
                    }, this.items.length, 0), new Wm(Fm.from(r.reverse()), o)
                }
            }

            function qm(t, e) {
                let n;
                return t.forEach((t, r) => {
                    if (t.selection && 0 == e--) return n = r, !1
                }), t.slice(n)
            }
            Wm.empty = new Wm(Fm.empty, 0);
            class Km {
                constructor(t, e, n, r) {
                    this.map = t, this.step = e, this.selection = n, this.mirrorOffset = r
                }
                merge(t) {
                    if (this.step && t.step && !t.selection) {
                        let e = t.step.merge(this.step);
                        if (e) return new Km(e.getMap().invert(), e, this.selection)
                    }
                }
            }
            class Um {
                constructor(t, e, n, r, o) {
                    this.done = t, this.undone = e, this.prevRanges = n, this.prevTime = r, this.prevComposition = o
                }
            }
            const Jm = 20;

            function Gm(t, e, n, r) {
                let o, i = n.getMeta(rg);
                if (i) return i.historyState;
                n.getMeta(og) && (t = new Um(t.done, t.undone, null, 0, -1));
                let s = n.getMeta("appendedTransaction");
                if (0 == n.steps.length) return t;
                if (s && s.getMeta(rg)) return s.getMeta(rg).redo ? new Um(t.done.addTransform(n, void 0, r, ng(e)), t.undone, Xm(n.mapping.maps), t.prevTime, t.prevComposition) : new Um(t.done, t.undone.addTransform(n, void 0, r, ng(e)), null, t.prevTime, t.prevComposition);
                if (!1 === n.getMeta("addToHistory") || s && !1 === s.getMeta("addToHistory")) return (o = n.getMeta("rebased")) ? new Um(t.done.rebased(n, o), t.undone.rebased(n, o), Qm(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new Um(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), Qm(t.prevRanges, n.mapping), t.prevTime, t.prevComposition); {
                    let o = n.getMeta("composition"),
                        i = 0 == t.prevTime || !s && t.prevComposition != o && (t.prevTime < (n.time || 0) - r.newGroupDelay || !Ym(n, t.prevRanges)),
                        a = s ? Qm(t.prevRanges, n.mapping) : Xm(n.mapping.maps);
                    return new Um(t.done.addTransform(n, i ? e.selection.getBookmark() : void 0, r, ng(e)), Wm.empty, a, n.time, null == o ? t.prevComposition : o)
                }
            }

            function Ym(t, e) {
                if (!e) return !1;
                if (!t.docChanged) return !0;
                let n = !1;
                return t.mapping.maps[0].forEach((t, r) => {
                    for (let o = 0; o < e.length; o += 2) t <= e[o + 1] && r >= e[o] && (n = !0)
                }), n
            }

            function Xm(t) {
                let e = [];
                for (let n = t.length - 1; n >= 0 && 0 == e.length; n--) t[n].forEach((t, n, r, o) => e.push(r, o));
                return e
            }

            function Qm(t, e) {
                if (!t) return null;
                let n = [];
                for (let r = 0; r < t.length; r += 2) {
                    let o = e.map(t[r], 1),
                        i = e.map(t[r + 1], -1);
                    o <= i && n.push(o, i)
                }
                return n
            }

            function Zm(t, e, n) {
                let r = ng(e),
                    o = rg.get(e).spec.config,
                    i = (n ? t.undone : t.done).popEvent(e, r);
                if (!i) return null;
                let s = i.selection.resolve(i.transform.doc),
                    a = (n ? t.done : t.undone).addTransform(i.transform, e.selection.getBookmark(), o, r),
                    l = new Um(n ? a : i.remaining, n ? i.remaining : a, null, 0, -1);
                return i.transform.setSelection(s).setMeta(rg, {
                    redo: n,
                    historyState: l
                })
            }
            let tg = !1,
                eg = null;

            function ng(t) {
                let e = t.plugins;
                if (eg != e) {
                    tg = !1, eg = e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t].spec.historyPreserveItems) {
                            tg = !0;
                            break
                        }
                }
                return tg
            }
            const rg = new bn("history"),
                og = new bn("closeHistory");

            function ig(t = {}) {
                return t = {
                    depth: t.depth || 100,
                    newGroupDelay: t.newGroupDelay || 500
                }, new mn({
                    key: rg,
                    state: {
                        init() {
                            return new Um(Wm.empty, Wm.empty, null, 0, -1)
                        },
                        apply(e, n, r) {
                            return Gm(n, r, e, t)
                        }
                    },
                    config: t,
                    props: {
                        handleDOMEvents: {
                            beforeinput(t, e) {
                                let n = e.inputType,
                                    r = "historyUndo" == n ? ag : "historyRedo" == n ? lg : null;
                                return !!r && (e.preventDefault(), r(t.state, t.dispatch))
                            }
                        }
                    }
                })
            }

            function sg(t, e) {
                return (n, r) => {
                    let o = rg.getState(n);
                    if (!o || 0 == (t ? o.undone : o.done).eventCount) return !1;
                    if (r) {
                        let i = Zm(o, n, t);
                        i && r(e ? i.scrollIntoView() : i)
                    }
                    return !0
                }
            }
            const ag = sg(!1, !0),
                lg = sg(!0, !0);
            sg(!1, !1), sg(!0, !1);
            Bd.create({
                name: "characterCount",
                addOptions() {
                    return {
                        limit: null,
                        mode: "textSize",
                        textCounter: t => t.length,
                        wordCounter: t => t.split(" ").filter(t => "" !== t).length
                    }
                },
                addStorage() {
                    return {
                        characters: () => 0,
                        words: () => 0
                    }
                },
                onBeforeCreate() {
                    this.storage.characters = t => {
                        const e = (null == t ? void 0 : t.node) || this.editor.state.doc,
                            n = (null == t ? void 0 : t.mode) || this.options.mode;
                        if ("textSize" === n) {
                            const t = e.textBetween(0, e.content.size, void 0, " ");
                            return this.options.textCounter(t)
                        }
                        return e.nodeSize
                    }, this.storage.words = t => {
                        const e = (null == t ? void 0 : t.node) || this.editor.state.doc,
                            n = e.textBetween(0, e.content.size, " ", " ");
                        return this.options.wordCounter(n)
                    }
                },
                addProseMirrorPlugins() {
                    let t = !1;
                    return [new mn({
                        key: new bn("characterCount"),
                        appendTransaction: (e, n, r) => {
                            if (t) return;
                            const o = this.options.limit;
                            if (null === o || void 0 === o || 0 === o) return void(t = !0);
                            const i = this.storage.characters({
                                node: r.doc
                            });
                            if (i > o) {
                                const e = i - o,
                                    n = 0,
                                    s = e;
                                console.warn(`[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`);
                                const a = r.tr.deleteRange(n, s);
                                return t = !0, a
                            }
                            t = !0
                        },
                        filterTransaction: (t, e) => {
                            const n = this.options.limit;
                            if (!t.docChanged || 0 === n || null === n || void 0 === n) return !0;
                            const r = this.storage.characters({
                                    node: e.doc
                                }),
                                o = this.storage.characters({
                                    node: t.doc
                                });
                            if (o <= n) return !0;
                            if (r > n && o > n && o <= r) return !0;
                            if (r > n && o > n && o > r) return !1;
                            const i = t.getMeta("paste");
                            if (!i) return !1;
                            const s = t.selection.$head.pos,
                                a = o - n,
                                l = s - a,
                                c = s;
                            t.deleteRange(l, c);
                            const d = this.storage.characters({
                                node: t.doc
                            });
                            return !(d > n)
                        }
                    })]
                }
            });
            var cg = Bd.create({
                    name: "dropCursor",
                    addOptions() {
                        return {
                            color: "currentColor",
                            width: 1,
                            class: void 0
                        }
                    },
                    addProseMirrorPlugins() {
                        return [Cm(this.options)]
                    }
                }),
                dg = (Bd.create({
                    name: "focus",
                    addOptions() {
                        return {
                            className: "has-focus",
                            mode: "all"
                        }
                    },
                    addProseMirrorPlugins() {
                        return [new mn({
                            key: new bn("focus"),
                            props: {
                                decorations: ({
                                    doc: t,
                                    selection: e
                                }) => {
                                    const {
                                        isEditable: n,
                                        isFocused: r
                                    } = this.editor, {
                                        anchor: o
                                    } = e, i = [];
                                    if (!n || !r) return Ws.create(t, []);
                                    let s = 0;
                                    "deepest" === this.options.mode && t.descendants((t, e) => {
                                        if (t.isText) return;
                                        const n = o >= e && o <= e + t.nodeSize - 1;
                                        if (!n) return !1;
                                        s += 1
                                    });
                                    let a = 0;
                                    return t.descendants((t, e) => {
                                        if (t.isText) return !1;
                                        const n = o >= e && o <= e + t.nodeSize - 1;
                                        if (!n) return !1;
                                        a += 1;
                                        const r = "deepest" === this.options.mode && s - a > 0 || "shallowest" === this.options.mode && a > 1;
                                        if (r) return "deepest" === this.options.mode;
                                        i.push(Vs.node(e, e + t.nodeSize, {
                                            class: this.options.className
                                        }))
                                    }), Ws.create(t, i)
                                }
                            }
                        })]
                    }
                }), Bd.create({
                    name: "gapCursor",
                    addProseMirrorPlugins() {
                        return [Pm()]
                    },
                    extendNodeSchema(t) {
                        var e;
                        const n = {
                            name: t.name,
                            options: t.options,
                            storage: t.storage
                        };
                        return {
                            allowGapCursor: null != (e = mc(hc(t, "allowGapCursor", n))) ? e : null
                        }
                    }
                }));
            Bd.create({
                name: "placeholder",
                addOptions() {
                    return {
                        emptyEditorClass: "is-editor-empty",
                        emptyNodeClass: "is-empty",
                        placeholder: "Write something …",
                        showOnlyWhenEditable: !0,
                        showOnlyCurrent: !0,
                        includeChildren: !1
                    }
                },
                addProseMirrorPlugins() {
                    return [new mn({
                        key: new bn("placeholder"),
                        props: {
                            decorations: ({
                                doc: t,
                                selection: e
                            }) => {
                                const n = this.editor.isEditable || !this.options.showOnlyWhenEditable,
                                    {
                                        anchor: r
                                    } = e,
                                    o = [];
                                if (!n) return null;
                                const i = this.editor.isEmpty;
                                return t.descendants((t, e) => {
                                    const n = r >= e && r <= e + t.nodeSize,
                                        s = !t.isLeaf && Jc(t);
                                    if ((n || !this.options.showOnlyCurrent) && s) {
                                        const r = [this.options.emptyNodeClass];
                                        i && r.push(this.options.emptyEditorClass);
                                        const s = Vs.node(e, e + t.nodeSize, {
                                            class: r.join(" "),
                                            "data-placeholder": "function" === typeof this.options.placeholder ? this.options.placeholder({
                                                editor: this.editor,
                                                node: t,
                                                pos: e,
                                                hasAnchor: n
                                            }) : this.options.placeholder
                                        });
                                        o.push(s)
                                    }
                                    return this.options.includeChildren
                                }), Ws.create(t, o)
                            }
                        }
                    })]
                }
            }), Bd.create({
                name: "selection",
                addOptions() {
                    return {
                        className: "selection"
                    }
                },
                addProseMirrorPlugins() {
                    const {
                        editor: t,
                        options: e
                    } = this;
                    return [new mn({
                        key: new bn("selection"),
                        props: {
                            decorations(n) {
                                return n.selection.empty || t.isFocused || !t.isEditable || Gc(n.selection) || t.view.dragging ? null : Ws.create(n.doc, [Vs.inline(n.selection.from, n.selection.to, {
                                    class: e.className
                                })])
                            }
                        }
                    })]
                }
            });

            function hg({
                types: t,
                node: e
            }) {
                return e && Array.isArray(t) && t.includes(e.type) || (null == e ? void 0 : e.type) === t
            }
            var ug = Bd.create({
                    name: "trailingNode",
                    addOptions() {
                        return {
                            node: void 0,
                            notAfter: []
                        }
                    },
                    addProseMirrorPlugins() {
                        var t;
                        const e = new bn(this.name),
                            n = this.options.node || (null == (t = this.editor.schema.topNodeType.contentMatch.defaultType) ? void 0 : t.name) || "paragraph",
                            r = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter(t => (this.options.notAfter || []).concat(n).includes(t.name));
                        return [new mn({
                            key: e,
                            appendTransaction: (t, r, o) => {
                                const {
                                    doc: i,
                                    tr: s,
                                    schema: a
                                } = o, l = e.getState(o), c = i.content.size, d = a.nodes[n];
                                if (l) return s.insert(c, d.create())
                            },
                            state: {
                                init: (t, e) => {
                                    const n = e.tr.doc.lastChild;
                                    return !hg({
                                        node: n,
                                        types: r
                                    })
                                },
                                apply: (t, e) => {
                                    if (!t.docChanged) return e;
                                    if (t.getMeta("__uniqueIDTransaction")) return e;
                                    const n = t.doc.lastChild;
                                    return !hg({
                                        node: n,
                                        types: r
                                    })
                                }
                            }
                        })]
                    }
                }),
                pg = Bd.create({
                    name: "undoRedo",
                    addOptions() {
                        return {
                            depth: 100,
                            newGroupDelay: 500
                        }
                    },
                    addCommands() {
                        return {
                            undo: () => ({
                                state: t,
                                dispatch: e
                            }) => ag(t, e),
                            redo: () => ({
                                state: t,
                                dispatch: e
                            }) => lg(t, e)
                        }
                    },
                    addProseMirrorPlugins() {
                        return [ig(this.options)]
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-z": () => this.editor.commands.undo(),
                            "Shift-Mod-z": () => this.editor.commands.redo(),
                            "Mod-y": () => this.editor.commands.redo(),
                            "Mod-я": () => this.editor.commands.undo(),
                            "Shift-Mod-я": () => this.editor.commands.redo()
                        }
                    }
                }),
                fg = Bd.create({
                    name: "starterKit",
                    addExtensions() {
                        var t, e, n, r;
                        const o = [];
                        return !1 !== this.options.bold && o.push(Bu.configure(this.options.bold)), !1 !== this.options.blockquote && o.push(Lu.configure(this.options.blockquote)), !1 !== this.options.bulletList && o.push(Eh.configure(this.options.bulletList)), !1 !== this.options.code && o.push(Fu.configure(this.options.code)), !1 !== this.options.codeBlock && o.push(Ku.configure(this.options.codeBlock)), !1 !== this.options.document && o.push(Uu.configure(this.options.document)), !1 !== this.options.dropcursor && o.push(cg.configure(this.options.dropcursor)), !1 !== this.options.gapcursor && o.push(dg.configure(this.options.gapcursor)), !1 !== this.options.hardBreak && o.push(Ju.configure(this.options.hardBreak)), !1 !== this.options.heading && o.push(Gu.configure(this.options.heading)), !1 !== this.options.undoRedo && o.push(pg.configure(this.options.undoRedo)), !1 !== this.options.horizontalRule && o.push(Yu.configure(this.options.horizontalRule)), !1 !== this.options.italic && o.push(ep.configure(this.options.italic)), !1 !== this.options.listItem && o.push(Dh.configure(this.options.listItem)), !1 !== this.options.listKeymap && o.push(_h.configure(null == (t = this.options) ? void 0 : t.listKeymap)), !1 !== this.options.link && o.push(bm.configure(null == (e = this.options) ? void 0 : e.link)), !1 !== this.options.orderedList && o.push(Qh.configure(this.options.orderedList)), !1 !== this.options.paragraph && o.push(vm.configure(this.options.paragraph)), !1 !== this.options.strike && o.push(xm.configure(this.options.strike)), !1 !== this.options.text && o.push(Sm.configure(this.options.text)), !1 !== this.options.underline && o.push(Mm.configure(null == (n = this.options) ? void 0 : n.underline)), !1 !== this.options.trailingNode && o.push(ug.configure(null == (r = this.options) ? void 0 : r.trailingNode)), o
                    }
                }),
                mg = Nd.create({
                    name: "subscript",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "sub"
                        }, {
                            style: "vertical-align",
                            getAttrs(t) {
                                return "sub" === t && null
                            }
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["sub", vc(this.options.HTMLAttributes, t), 0]
                    },
                    addCommands() {
                        return {
                            setSubscript: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleSubscript: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetSubscript: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-,": () => this.editor.commands.toggleSubscript()
                        }
                    }
                }),
                gg = Nd.create({
                    name: "superscript",
                    addOptions() {
                        return {
                            HTMLAttributes: {}
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "sup"
                        }, {
                            style: "vertical-align",
                            getAttrs(t) {
                                return "super" === t && null
                            }
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["sup", vc(this.options.HTMLAttributes, t), 0]
                    },
                    addCommands() {
                        return {
                            setSuperscript: () => ({
                                commands: t
                            }) => t.setMark(this.name),
                            toggleSuperscript: () => ({
                                commands: t
                            }) => t.toggleMark(this.name),
                            unsetSuperscript: () => ({
                                commands: t
                            }) => t.unsetMark(this.name)
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-.": () => this.editor.commands.toggleSuperscript()
                        }
                    }
                }),
                yg = Bd.create({
                    name: "textAlign",
                    addOptions() {
                        return {
                            types: [],
                            alignments: ["left", "center", "right", "justify"],
                            defaultAlignment: null
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                textAlign: {
                                    default: this.options.defaultAlignment,
                                    parseHTML: t => {
                                        const e = t.style.textAlign;
                                        return this.options.alignments.includes(e) ? e : this.options.defaultAlignment
                                    },
                                    renderHTML: t => t.textAlign ? {
                                        style: "text-align: " + t.textAlign
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setTextAlign: t => ({
                                commands: e
                            }) => !!this.options.alignments.includes(t) && this.options.types.map(n => e.updateAttributes(n, {
                                textAlign: t
                            })).some(t => t),
                            unsetTextAlign: () => ({
                                commands: t
                            }) => this.options.types.map(e => t.resetAttributes(e, "textAlign")).some(t => t),
                            toggleTextAlign: t => ({
                                editor: e,
                                commands: n
                            }) => !!this.options.alignments.includes(t) && (e.isActive({
                                textAlign: t
                            }) ? n.unsetTextAlign() : n.setTextAlign(t))
                        }
                    },
                    addKeyboardShortcuts() {
                        return {
                            "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
                            "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
                            "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
                            "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
                        }
                    }
                }),
                bg = 20,
                vg = (t, e = 0) => {
                    const n = [];
                    return !t.children.length || e > bg || Array.from(t.children).forEach(t => {
                        "SPAN" === t.tagName ? n.push(t) : t.children.length && n.push(...vg(t, e + 1))
                    }), n
                },
                wg = t => {
                    if (!t.children.length) return;
                    const e = vg(t);
                    e && e.forEach(t => {
                        var e, n;
                        const r = t.getAttribute("style"),
                            o = null == (n = null == (e = t.parentElement) ? void 0 : e.closest("span")) ? void 0 : n.getAttribute("style");
                        t.setAttribute("style", `${o};${r}`)
                    })
                },
                kg = Nd.create({
                    name: "textStyle",
                    priority: 101,
                    addOptions() {
                        return {
                            HTMLAttributes: {},
                            mergeNestedSpanStyles: !0
                        }
                    },
                    parseHTML() {
                        return [{
                            tag: "span",
                            consuming: !1,
                            getAttrs: t => {
                                const e = t.hasAttribute("style");
                                return !!e && (this.options.mergeNestedSpanStyles && wg(t), {})
                            }
                        }]
                    },
                    renderHTML({
                        HTMLAttributes: t
                    }) {
                        return ["span", vc(this.options.HTMLAttributes, t), 0]
                    },
                    addCommands() {
                        return {
                            toggleTextStyle: t => ({
                                commands: e
                            }) => e.toggleMark(this.name, t),
                            removeEmptyTextStyle: () => ({
                                tr: t
                            }) => {
                                const {
                                    selection: e
                                } = t;
                                return t.doc.nodesBetween(e.from, e.to, (e, n) => {
                                    if (e.isTextblock) return !0;
                                    e.marks.filter(t => t.type === this.type).some(t => Object.values(t.attrs).some(t => !!t)) || t.removeMark(n, n + e.nodeSize, this.type)
                                }), !0
                            }
                        }
                    }
                }),
                xg = Bd.create({
                    name: "backgroundColor",
                    addOptions() {
                        return {
                            types: ["textStyle"]
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                backgroundColor: {
                                    default: null,
                                    parseHTML: t => {
                                        var e;
                                        const n = t.getAttribute("style");
                                        if (n) {
                                            const t = n.split(";").map(t => t.trim()).filter(Boolean);
                                            for (let e = t.length - 1; e >= 0; e -= 1) {
                                                const n = t[e].split(":");
                                                if (n.length >= 2) {
                                                    const t = n[0].trim().toLowerCase(),
                                                        e = n.slice(1).join(":").trim();
                                                    if ("background-color" === t) return e.replace(/['"]+/g, "")
                                                }
                                            }
                                        }
                                        return null == (e = t.style.backgroundColor) ? void 0 : e.replace(/['"]+/g, "")
                                    },
                                    renderHTML: t => t.backgroundColor ? {
                                        style: "background-color: " + t.backgroundColor
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setBackgroundColor: t => ({
                                chain: e
                            }) => e().setMark("textStyle", {
                                backgroundColor: t
                            }).run(),
                            unsetBackgroundColor: () => ({
                                chain: t
                            }) => t().setMark("textStyle", {
                                backgroundColor: null
                            }).removeEmptyTextStyle().run()
                        }
                    }
                }),
                Sg = Bd.create({
                    name: "color",
                    addOptions() {
                        return {
                            types: ["textStyle"]
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                color: {
                                    default: null,
                                    parseHTML: t => {
                                        var e;
                                        const n = t.getAttribute("style");
                                        if (n) {
                                            const t = n.split(";").map(t => t.trim()).filter(Boolean);
                                            for (let e = t.length - 1; e >= 0; e -= 1) {
                                                const n = t[e].split(":");
                                                if (n.length >= 2) {
                                                    const t = n[0].trim().toLowerCase(),
                                                        e = n.slice(1).join(":").trim();
                                                    if ("color" === t) return e.replace(/['"]+/g, "")
                                                }
                                            }
                                        }
                                        return null == (e = t.style.color) ? void 0 : e.replace(/['"]+/g, "")
                                    },
                                    renderHTML: t => t.color ? {
                                        style: "color: " + t.color
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setColor: t => ({
                                chain: e
                            }) => e().setMark("textStyle", {
                                color: t
                            }).run(),
                            unsetColor: () => ({
                                chain: t
                            }) => t().setMark("textStyle", {
                                color: null
                            }).removeEmptyTextStyle().run()
                        }
                    }
                }),
                Mg = Bd.create({
                    name: "fontFamily",
                    addOptions() {
                        return {
                            types: ["textStyle"]
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                fontFamily: {
                                    default: null,
                                    parseHTML: t => t.style.fontFamily,
                                    renderHTML: t => t.fontFamily ? {
                                        style: "font-family: " + t.fontFamily
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setFontFamily: t => ({
                                chain: e
                            }) => e().setMark("textStyle", {
                                fontFamily: t
                            }).run(),
                            unsetFontFamily: () => ({
                                chain: t
                            }) => t().setMark("textStyle", {
                                fontFamily: null
                            }).removeEmptyTextStyle().run()
                        }
                    }
                }),
                Cg = Bd.create({
                    name: "fontSize",
                    addOptions() {
                        return {
                            types: ["textStyle"]
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                fontSize: {
                                    default: null,
                                    parseHTML: t => t.style.fontSize,
                                    renderHTML: t => t.fontSize ? {
                                        style: "font-size: " + t.fontSize
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setFontSize: t => ({
                                chain: e
                            }) => e().setMark("textStyle", {
                                fontSize: t
                            }).run(),
                            unsetFontSize: () => ({
                                chain: t
                            }) => t().setMark("textStyle", {
                                fontSize: null
                            }).removeEmptyTextStyle().run()
                        }
                    }
                }),
                Og = Bd.create({
                    name: "lineHeight",
                    addOptions() {
                        return {
                            types: ["textStyle"]
                        }
                    },
                    addGlobalAttributes() {
                        return [{
                            types: this.options.types,
                            attributes: {
                                lineHeight: {
                                    default: null,
                                    parseHTML: t => t.style.lineHeight,
                                    renderHTML: t => t.lineHeight ? {
                                        style: "line-height: " + t.lineHeight
                                    } : {}
                                }
                            }
                        }]
                    },
                    addCommands() {
                        return {
                            setLineHeight: t => ({
                                chain: e
                            }) => e().setMark("textStyle", {
                                lineHeight: t
                            }).run(),
                            unsetLineHeight: () => ({
                                chain: t
                            }) => t().setMark("textStyle", {
                                lineHeight: null
                            }).removeEmptyTextStyle().run()
                        }
                    }
                }),
                Tg = Bd.create({
                    name: "textStyleKit",
                    addExtensions() {
                        const t = [];
                        return !1 !== this.options.backgroundColor && t.push(xg.configure(this.options.backgroundColor)), !1 !== this.options.color && t.push(Sg.configure(this.options.color)), !1 !== this.options.fontFamily && t.push(Mg.configure(this.options.fontFamily)), !1 !== this.options.fontSize && t.push(Cg.configure(this.options.fontSize)), !1 !== this.options.lineHeight && t.push(Og.configure(this.options.lineHeight)), !1 !== this.options.textStyle && t.push(kg.configure(this.options.textStyle)), t
                    }
                }),
                Ag = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("scrollbar-container", [n("editor-content", {
                        attrs: {
                            editor: t.editor
                        }
                    })], 1)
                },
                Ng = [],
                Eg = n("6fba"),
                Dg = {
                    name: "TiptapEditor",
                    props: {
                        editor: {
                            type: Object,
                            required: !0
                        },
                        value: {
                            type: String
                        }
                    },
                    watch: {
                        value(t) {
                            var e;
                            t !== (null === (e = this.editor) || void 0 === e ? void 0 : e.getHTML()) && this.editor.commands.setContent(t || "")
                        }
                    },
                    mounted() {
                        this.editor.on("update", () => this.$emit("input", this.editor.getHTML()))
                    },
                    beforeDestroy() {
                        this.$tiptap.dispose(this.editor)
                    },
                    components: {
                        EditorContent: Su,
                        ScrollbarContainer: Eg["a"]
                    }
                },
                Pg = Dg,
                Rg = (n("7ae6"), Object(mu["a"])(Pg, Ag, Ng, !1, null, null, null)),
                Lg = Rg.exports,
                Ig = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ribbon", {
                        attrs: {
                            id: "ribbon-wordpad"
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-file-menu-main", {
                                    attrs: {
                                        items: t.ribbonShortcuts
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "extra",
                            fn: function() {
                                return [n("ribbon-file-menu-extra", {
                                    attrs: {
                                        title: t.$t("recent-documents")
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, [n("ribbon-tab", {
                        attrs: {
                            id: "wordpad-home",
                            title: t.$t("home"),
                            isDefault: ""
                        }
                    }, [n("ribbon-group-clipboard"), n("ribbon-group", {
                        staticClass: "flex flex-col justify-center gap-2",
                        attrs: {
                            title: t.$t("font")
                        }
                    }, [n("div", {
                        staticClass: "flex gap-1"
                    }, [n("ribbon-item-group", [n("ribbon-item-combobox", {
                        staticClass: "w-[128px]",
                        attrs: {
                            items: t.fonts,
                            value: t.fontFamily
                        },
                        on: {
                            input: function(e) {
                                return t.setFontFamily(e)
                            }
                        }
                    }), n("ribbon-item-combobox", {
                        staticClass: "w-[48px]",
                        attrs: {
                            items: t.sizes,
                            value: t.fontSize
                        },
                        on: {
                            input: function(e) {
                                return t.setFontSize(e)
                            }
                        }
                    })], 1), n("ribbon-item-group", {
                        staticClass: "is-text-size"
                    }, [n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontgrow"]
                        },
                        on: {
                            click: function(e) {
                                return t.setFontSize("+")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontshrink"]
                        },
                        on: {
                            click: function(e) {
                                return t.setFontSize("-")
                            }
                        }
                    })], 1)], 1), n("div", {
                        staticClass: "flex gap-1"
                    }, [n("ribbon-item-group", {
                        staticClass: "is-text-style"
                    }, [n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontbold"],
                            active: t.isActive("bold")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleBold")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontitalic"],
                            active: t.isActive("italic")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleItalic")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontunderline"],
                            active: t.isActive("underline")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleUnderline")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontstrike"],
                            active: t.isActive("strike")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleStrike")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontsub"],
                            active: t.isActive("subscript")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleSubscript")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontsuper"],
                            active: t.isActive("superscript")
                        },
                        on: {
                            click: function(e) {
                                return t.run("toggleSuperscript")
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "flex"
                    }, [n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fonthighlight"],
                            variant: "split"
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "has-colors"
                                }, [n("div", {
                                    staticClass: "gap-1 grid grid-cols-5 p-1"
                                }, t._l(t.highlightColors, (function(e) {
                                    return n("ribbon-item", {
                                        key: e,
                                        attrs: {
                                            active: t.highlightColor === e
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.setHighlightColor(e)
                                            }
                                        }
                                    }, [n("ribbon-item-color", {
                                        staticClass: "p-px w-[32px] h-[32px]",
                                        attrs: {
                                            color: e
                                        }
                                    })], 1)
                                })), 1), n("ribbon-item-button", {
                                    attrs: {
                                        selected: !t.highlightColor
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.setHighlightColor(null)
                                        }
                                    }
                                }, [n("ribbon-item-color", {
                                    staticClass: "p-px w-[20px] h-[20px]",
                                    attrs: {
                                        color: "transparent"
                                    }
                                }), n("span", {
                                    staticClass: "ribbon__item-label"
                                }, [t._v("No color")])], 1)], 1)]
                            },
                            proxy: !0
                        }])
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-fontcolor"],
                            variant: "split"
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "has-colors"
                                }, [n("div", {
                                    staticClass: "gap-x-2 grid grid-cols-5 p-2"
                                }, t._l(t.textColors, (function(e) {
                                    return n("ribbon-item", {
                                        key: e,
                                        attrs: {
                                            active: t.textColor === e
                                        },
                                        on: {
                                            click: function(n) {
                                                return t.setColor(e)
                                            }
                                        }
                                    }, [n("ribbon-item-color", {
                                        staticClass: "p-px w-[20px] h-[20px]",
                                        attrs: {
                                            color: e
                                        }
                                    })], 1)
                                })), 1)])]
                            },
                            proxy: !0
                        }])
                    })], 1)], 1)]), n("ribbon-group", {
                        staticClass: "flex flex-col justify-center gap-2",
                        attrs: {
                            title: t.$t("paragraph")
                        }
                    }, [n("div", {
                        staticClass: "flex gap-1"
                    }, [n("ribbon-item-group", {
                        staticClass: "is-text-indent"
                    }, [n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-textdedent"]
                        },
                        on: {
                            click: function(e) {
                                return t.run("dedent")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-textindent"]
                        },
                        on: {
                            click: function(e) {
                                return t.run("indent")
                            }
                        }
                    })], 1), n("ribbon-item", {
                        staticClass: "is-text-list",
                        attrs: {
                            variant: "split",
                            icon: t.icon["ribbon-textlist"],
                            active: t.isActive(t.CUSTOM_LIST_NAME)
                        },
                        on: {
                            click: t.toggleList
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    staticClass: "grid grid-cols-3 is-list"
                                }, t._l(t.listMenuItems, (function(e) {
                                    return n("ribbon-item-button", {
                                        key: e.value,
                                        attrs: {
                                            "aria-label": e.label,
                                            title: e.label,
                                            selected: e.value === t.listType
                                        },
                                        on: {
                                            click: e.click
                                        }
                                    }, [n("img", {
                                        attrs: {
                                            src: e.icon,
                                            alt: e.label,
                                            width: "72",
                                            height: "72"
                                        }
                                    })])
                                })), 1)]
                            },
                            proxy: !0
                        }])
                    }), n("ribbon-item", {
                        staticClass: "is-text-lineheight",
                        attrs: {
                            variant: "dropdown",
                            icon: t.icon["ribbon-textlineheight"]
                        },
                        scopedSlots: t._u([{
                            key: "menu",
                            fn: function() {
                                return [n("ribbon-item-menu", {
                                    attrs: {
                                        items: t.lineHeightMenuItems
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1), n("div", {
                        staticClass: "flex gap-1"
                    }, [n("ribbon-item-group", {
                        staticClass: "is-text-alignment"
                    }, t._l(t.textAlignments, (function(e) {
                        return n("ribbon-item", {
                            key: e,
                            attrs: {
                                icon: t.icon["ribbon-text" + e],
                                active: t.isActive({
                                    textAlign: e
                                })
                            },
                            on: {
                                click: function(n) {
                                    return t.run("setTextAlign", e)
                                }
                            }
                        })
                    })), 1), n("ribbon-item-group", [n("ribbon-item", {
                        attrs: {
                            icon: t.icon["ribbon-textdialog"],
                            disabled: ""
                        }
                    })], 1)], 1)]), n("ribbon-group", {
                        staticClass: "flex",
                        attrs: {
                            title: t.$t("insert")
                        }
                    }, [n("ribbon-item", {
                        attrs: {
                            size: "large",
                            icon: t.icon.photo,
                            name: t.$t("picture")
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("open", "image")
                            }
                        }
                    }), n("ribbon-item", {
                        attrs: {
                            size: "large",
                            icon: t.icon["ribbon-datetime"],
                            name: t.$t("date") + t.$t("time")
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("open", "datetime")
                            }
                        }
                    })], 1)], 1)], 1)
                },
                $g = [],
                zg = n("bb45"),
                jg = n("2299"),
                Bg = n("7257"),
                Hg = n("a3d5"),
                Vg = n("c838"),
                Fg = n("74f2"),
                _g = n("4761"),
                Wg = n("9b10"),
                qg = n("92fc"),
                Kg = n("382f"),
                Ug = n("051f"),
                Jg = n("7abd"),
                Gg = n("038f"),
                Yg = n("90b4"),
                Xg = n("2f62"),
                Qg = {
                    props: {
                        editor: {
                            type: Object,
                            required: !0
                        },
                        ribbonShortcuts: {
                            type: Array,
                            required: !0
                        }
                    },
                    data() {
                        return { ...nu["c"],
                            textColor: null,
                            highlightColor: null,
                            listType: "none",
                            listTypeCache: "disc"
                        }
                    },
                    computed: { ...Object(Xg["d"])({
                            themeData: "themeData"
                        }),
                        fonts: () => Object.keys(zg["a"]).map(t => ({
                            label: zg["a"][t],
                            value: t
                        })),
                        sizes: () => zg["b"].map(t => ({
                            label: t.toString(),
                            value: t
                        })),
                        textColors: () => jg["e"],
                        highlightColors: () => jg["d"],
                        CUSTOM_LIST_NAME: () => ru,
                        icon() {
                            return this.themeData.icon
                        },
                        textAlignments() {
                            return ["left", "center", "right", "justify"]
                        },
                        listMenuItems() {
                            return [{
                                value: "none",
                                label: "None"
                            }, {
                                value: "disc",
                                label: "Bullet"
                            }, {
                                value: "decimal",
                                label: "Numbering"
                            }, {
                                value: "lower-latin",
                                label: "Alphabet - Lower case"
                            }, {
                                value: "upper-latin",
                                label: "Alphabet - Upper case"
                            }, {
                                value: "lower-roman",
                                label: "Roman numeral - Lower case"
                            }, {
                                value: "upper-roman",
                                label: "Roman numeral - Upper case"
                            }].map(t => ({ ...t,
                                icon: this.icon["ribbon-list" + t.value.replace("-", "")],
                                click: () => this.setListType(t.value)
                            }))
                        },
                        lineHeightMenuItems() {
                            return [...["1.0", "1.15", "1.5", "2"].map(t => ({
                                label: t,
                                value: t,
                                icon: "checkbox",
                                selected: this.isActive({
                                    lineHeight: t
                                }),
                                click: () => this.run("setLineHeight", t)
                            })), {
                                label: "Add 10pt space after paragraphs",
                                value: "10pt",
                                icon: "checkbox",
                                selected: this.isActive({
                                    afterSpace: 10
                                }),
                                click: () => this.run("toggleAfterSpace")
                            }]
                        }
                    },
                    watch: {
                        listType(t, e) {
                            "none" === t && (this.listTypeCache = e)
                        }
                    },
                    mounted() {
                        this.editor.on("selectionUpdate", this.handleSelectionUpdate)
                    },
                    methods: {
                        setFontFamily(t) {
                            this.fontFamily = t, this.run("setFontFamily", t)
                        },
                        setFontSize(t) {
                            if ("+" === t || "-" === t) {
                                const e = "+" === t ? 1 : -1,
                                    n = zg["b"].indexOf(this.fontSize),
                                    r = n + e;
                                r >= 0 && r < zg["b"].length && (this.fontSize = zg["b"][r])
                            } else this.fontSize = t;
                            this.run("setFontSize", this.fontSize + "pt")
                        },
                        setHighlightColor(t) {
                            this.highlightColor = t, this.run("setBackgroundColor", t)
                        },
                        setColor(t) {
                            this.textColor = t, this.run("setColor", t)
                        },
                        setListType(t) {
                            this.listType = t, this.run("changeCustomList", t)
                        },
                        toggleList() {
                            this.listType = "none" === this.listType ? this.listTypeCache : this.listType, this.run("toggleCustomList", this.listType)
                        },
                        isActive(t) {
                            return this.$tiptap.isActive(this.editor, t)
                        },
                        run(t, ...e) {
                            return this.$tiptap.run(this.editor, t, ...e)
                        },
                        handleSelectionUpdate({
                            editor: t
                        }) {
                            const e = t.getAttributes("textStyle");
                            this.fontSize = parseFloat(e.fontSize) || nu["c"].fontSize, this.fontFamily = e.fontFamily || nu["c"].fontFamily, this.listType = t.getAttributes(ru).listType || "none"
                        }
                    },
                    components: {
                        Ribbon: Bg["a"],
                        RibbonFileMenuExtra: Hg["a"],
                        RibbonFileMenuMain: Vg["a"],
                        RibbonTab: Yg["a"],
                        RibbonGroup: Fg["a"],
                        RibbonGroupClipboard: _g["a"],
                        RibbonItem: Wg["a"],
                        RibbonItemButton: qg["a"],
                        RibbonItemColor: Kg["a"],
                        RibbonItemCombobox: Ug["a"],
                        RibbonItemGroup: Jg["a"],
                        RibbonItemMenu: Gg["a"]
                    }
                },
                Zg = Qg,
                ty = (n("9bf8"), Object(mu["a"])(Zg, Ig, $g, !1, null, null, null)),
                ey = ty.exports,
                ny = n("0fbc"),
                ry = n("f106"),
                oy = n("de73"),
                iy = n("ce02"),
                sy = n("51e6");
            const ay = "wordpad__editor";
            var ly = {
                    data() {
                        return {
                            id: "wordpad",
                            fileTypes: {
                                rtf: "Rich Text Format (*.rtf)",
                                txt: "Text Documents (*.txt)"
                            },
                            path: null,
                            editor: null,
                            fileName: "Document",
                            content: null,
                            filter: [],
                            showDatetimeDialog: !1,
                            showSaveDialog: !1,
                            showOpenDialog: !1
                        }
                    },
                    computed: { ...i["c"].mapState({
                            tempData: "tempData"
                        }),
                        isLocked() {
                            return this.showDatetimeDialog || this.showSaveDialog || this.showOpenDialog
                        },
                        ribbonShortcuts() {
                            return [{
                                shortcut: "Alt+N",
                                icon: "file",
                                label: this.$t("new"),
                                click: this.clean
                            }, {
                                shortcut: "Alt+O",
                                icon: "open",
                                label: this.$t("open"),
                                click: () => this.handleOpen(Object.keys(this.fileTypes))
                            }, {
                                shortcut: "Alt+S",
                                icon: "save",
                                label: this.$t("save"),
                                click: this.save
                            }, {
                                shortcut: "Alt+Shift+S",
                                icon: "save-as",
                                label: this.$t("save-as"),
                                click: this.saveAs
                            }, {
                                shortcut: "Alt+4",
                                icon: "exit",
                                label: this.$t("exit"),
                                click: this.exit
                            }]
                        }
                    },
                    mounted() {
                        this.tempData && this.tempData.path && (this.open(this.tempData.path), this[i["a"].ClearTempData]());
                        const {
                            fontFamily: t,
                            fontSize: e
                        } = nu["c"];
                        this.editor = new xu({
                            content: this.content,
                            extensions: [fg.configure({
                                bulletList: !1,
                                orderedList: !1
                            }), Tg.configure({
                                lineHeight: !1
                            }), mg, gg, Ou.configure({
                                allowBase64: !0,
                                resize: {
                                    enabled: !0,
                                    alwaysPreserveAspectRatio: !0,
                                    directions: ["top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"],
                                    minWidth: 40,
                                    minHeight: 40
                                }
                            }), Du, yg.configure({
                                types: ["paragraph"],
                                defaultAlignment: "left"
                            }), Mh.configure({
                                defaultLineHeight: "1.15",
                                afterSpace: 10
                            }), ou.configure({
                                className: ay + "-list"
                            })],
                            editorProps: {
                                attributes: {
                                    class: ay,
                                    style: `font-family: ${t}; font-size: ${e}pt`
                                }
                            }
                        })
                    },
                    methods: { ...i["c"].mapMutations([i["a"].ClearTempData]),
                        clean() {
                            this.content = ""
                        },
                        async open(t) {
                            try {
                                const e = await ry["a"].read(t, !0);
                                this.fileName = Object(s["c"])(t), this.path = t, this.content = e
                            } catch (e) {
                                Object(sy["showToast"])(e)
                            }
                        },
                        exit() {
                            Object(iy["b"])(), this.$root.$emit(Mu["c"].CloseWindow, this.id)
                        },
                        toggleSaveDialog() {
                            this.showSaveDialog = !this.showSaveDialog
                        },
                        toggleOpenDialog() {
                            this.showOpenDialog = !this.showOpenDialog
                        },
                        toggleDatetime() {
                            this.showDatetimeDialog = !this.showDatetimeDialog
                        },
                        async save() {
                            if (this.path) try {
                                await ry["a"].write(this.content, this.path), Object(sy["showToast"])("File saved.")
                            } catch (t) {
                                Object(sy["showToast"])(t)
                            } else this.saveAs()
                        },
                        saveAs() {
                            this.toggleSaveDialog()
                        },
                        handleOpenDialog(t) {
                            "datetime" === t ? this.toggleDatetime() : "image" === t && this.handleOpen(oy["a"].image)
                        },
                        handleOpen(t) {
                            this.filter = t, this.toggleOpenDialog()
                        },
                        handleOpenDone(t) {
                            const {
                                ext: e
                            } = Object(s["r"])(t), n = oy["a"].image.includes(e);
                            n ? this.insertImage(t, e) : this.open(t), this.toggleOpenDialog()
                        },
                        handleSaveDone({
                            name: t,
                            path: e
                        }) {
                            this.fileName = t, this.path = e, this.toggleSaveDialog()
                        },
                        async insertImage(t, e) {
                            const n = await ry["a"].read(t, !1, "base64");
                            this.$tiptap.run(this.editor, "setImage", {
                                src: Object(ny["c"])(n, e)
                            })
                        },
                        insertDatetime(t) {
                            this.$tiptap.run(this.editor, "insertContent", t), this.toggleDatetime()
                        }
                    },
                    components: {
                        WindowControls: lu["a"],
                        WindowTitlebar: du["a"],
                        WindowMain: cu["a"],
                        WindowBody: au["a"],
                        DialogSave: vu["a"],
                        DialogOpen: bu["a"],
                        DialogDatetime: yu,
                        WordpadRibbon: ey,
                        TiptapEditor: Lg
                    }
                },
                cy = ly,
                dy = (n("3f3e"), Object(mu["a"])(cy, r, o, !1, null, null, null));
            e["default"] = dy.exports
        },
        "4ac1": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.stringProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(String, t);
            e.stringProp = o
        },
        "64b0": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isOneOf = void 0;
            const r = t => e => {
                if (!t.includes(e)) return `value should be one of "${t.join('", "')}"`
            };
            e.isOneOf = r
        },
        7074: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isNegative = void 0;
            const r = t => {
                if ("number" !== typeof t || t >= 0 || Number.isNaN(t)) return "value should be a negative number"
            };
            e.isNegative = r
        },
        "77b7": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isInteger = void 0;
            const r = t => {
                if ("number" !== typeof t || !Number.isInteger(t)) return "value should be an integer"
            };
            e.isInteger = r
        },
        "7ae6": function(t, e, n) {
            "use strict";
            n("1809")
        },
        "86e0": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.oneOfTypesProp = void 0;
            const r = n("cf27"),
                o = (t, e) => (0, r.propOptionsGenerator)(t, e);
            e.oneOfTypesProp = o
        },
        "8fd9": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.objectProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(Object, t);
            e.objectProp = o
        },
        "97ca": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.vueComponentProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)([Object, String], t);
            e.vueComponentProp = o
        },
        "99ae": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.oneOfObjectKeysProp = void 0;
            const r = n("9bb7"),
                o = (t, e) => (0, r.oneOfProp)(Object.keys(t), e);
            e.oneOfObjectKeysProp = o
        },
        "9bb7": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.oneOfProp = void 0;
            const r = n("cf27"),
                o = n("dea8"),
                i = t => {
                    const e = [...new Set(t.flatMap(t => {
                        var e;
                        return null === t || void 0 === t ? [] : null !== (e = t.constructor) && void 0 !== e ? e : []
                    }))];
                    if (0 !== e.length) return 1 === e.length ? e[0] : e
                },
                s = (t, e) => (0, r.propOptionsGenerator)(i(t), e, (0, o.isOneOf)(t));
            e.oneOfProp = s
        },
        "9bf8": function(t, e, n) {
            "use strict";
            n("be8a")
        },
        "9d9e": function(t, e, n) {
            "use strict";
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "fragment"
                    }, [n("computer", {
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
                                return [n("div", {
                                    staticClass: "center-flex-x gap-2 mb-1"
                                }, [n("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("file-name")) + ":")]), n("winui-textbox", {
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
                                })], 1), n("div", {
                                    staticClass: "center-flex-x gap-2 mb-2"
                                }, [n("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("save-as")) + ":")]), n("winui-dropdown", {
                                    staticClass: "flex-1",
                                    model: {
                                        value: t.type,
                                        callback: function(e) {
                                            t.type = e
                                        },
                                        expression: "type"
                                    }
                                }, t._l(t.fileTypes, (function(e, r) {
                                    return n("option", {
                                        key: r,
                                        domProps: {
                                            value: r
                                        }
                                    }, [t._v(" " + t._s(t.fileTypes[r]) + " ")])
                                })), 0)], 1), n("div", {
                                    staticClass: "flex justify-end"
                                }, [n("winui-button", {
                                    staticClass: "default",
                                    attrs: {
                                        disabled: !t.canSave
                                    },
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.saveFile(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("save")) + " ")]), n("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.cancel(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("cancel")) + " ")])], 1)]
                            },
                            proxy: !0
                        }])
                    }), t.showConfirmReplace ? n("confirm-replace", {
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
                o = [],
                i = n("4cca"),
                s = n("b47a"),
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("base-message", {
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
                                return [n("winui-button", {
                                    on: {
                                        click: function(e) {
                                            return t.$emit("yes")
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("yes")) + " ")]), n("winui-button", {
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
                    }, [n("div", {
                        staticClass: "ml-3"
                    }, [t._v(" " + t._s(t.$t("filename-exist")) + " " + t._s(t.$t("confirm-replace")) + " ")])])
                },
                l = [],
                c = n("fceb"),
                d = {
                    props: {
                        title: String
                    },
                    components: {
                        BaseMessage: c["a"]
                    }
                },
                h = d,
                u = n("2877"),
                p = Object(u["a"])(h, a, l, !1, null, null, null),
                f = p.exports,
                m = n("04a5"),
                g = n("01b4"),
                y = n("0fbc"),
                b = n("f106"),
                v = n("2f62"),
                w = n("0e9a"),
                k = n("51e6"),
                x = {
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
                            name: Object(w["r"])(this.fileName).name,
                            path: null,
                            showConfirmReplace: !1
                        }
                    },
                    computed: { ...Object(v["f"])({
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
                                    path: n,
                                    fullName: r
                                } = this,
                                o = `${n}/${r}`;
                            let s = null;
                            s = this.parse ? this.parse(this.type) : e instanceof HTMLCanvasElement ? await Object(y["f"])(e, "image/" + this.type) : e;
                            try {
                                if (n === this.desktopPath) await this.$store.dispatch(g["a"].ShortcutAdd, {
                                    lbl: r,
                                    key: Object(i["b"])(r),
                                    icon: Object(i["e"])(r),
                                    data: s,
                                    type: "file",
                                    overwrite: t
                                });
                                else {
                                    const e = await b["a"].isExisting(o, n);
                                    if (e && !t) throw new Error(m["a"].NAME_EXISTS);
                                    await b["a"].write(s, o)
                                }
                                let e = 0;
                                s instanceof ArrayBuffer ? e = s.byteLength : "string" === typeof s && (e = (new TextEncoder).encode(s).length), this.$emit("done", {
                                    name: r,
                                    path: o,
                                    size: e
                                })
                            } catch (a) {
                                const t = a.message || a;
                                t === m["a"].NAME_EXISTS ? this.toggleConfirmReplace() : Object(k["showToast"])(t)
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
                        ConfirmReplace: f
                    }
                },
                S = x,
                M = Object(u["a"])(S, r, o, !1, null, null, null);
            e["a"] = M.exports
        },
        b049: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.integerProp = void 0;
            const r = n("cf27"),
                o = n("dea8"),
                i = t => (0, r.propOptionsGenerator)(Number, t, o.isInteger);
            e.integerProp = i
        },
        be8a: function(t, e, n) {},
        bf6f: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.numberProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(Number, t);
            e.numberProp = o
        },
        c0f9: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.instanceOfProp = void 0;
            const r = n("cf27"),
                o = n("dea8"),
                i = (t, e) => (0, r.propOptionsGenerator)(t, e, (0, o.isInstanceOf)(t));
            e.instanceOfProp = i
        },
        c466: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return o
            })), n.d(e, "a", (function() {
                return i
            })), n.d(e, "c", (function() {
                return s
            }));
            var r = n("0f35");

            function o(t, e) {
                const n = t ? new Date(t) : new Date;
                return {
                    day: n.toLocaleDateString(e, {
                        weekday: "long"
                    }),
                    date: n.toLocaleDateString(e, {
                        day: "numeric"
                    }),
                    month: n.toLocaleDateString(e, {
                        month: "long"
                    }),
                    year: n.toLocaleDateString(e, {
                        year: "numeric"
                    })
                }
            }

            function i(t, e, n) {
                const r = t ? new Date(t) : new Date;
                return r.toLocaleDateString(e, {
                    weekday: n ? "short" : "long",
                    year: n ? void 0 : "numeric",
                    month: n ? "short" : "long",
                    day: "numeric"
                })
            }

            function s(t, e = "/") {
                const n = t ? new Date(t) : new Date;
                return [n.getDate(), n.getMonth() + 1, n.getFullYear()].map(r["k"]).join(e)
            }
        },
        cf27: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.propOptionsGenerator = void 0;
            const r = n("dea8"),
                o = (t, e, ...n) => ({
                    optional: {
                        type: t,
                        required: !1,
                        default: void 0,
                        validator: (0, r.vuePropValidator)(e, ...n)
                    },
                    nullable: {
                        type: t,
                        required: !1,
                        default: null,
                        validator: (0, r.vuePropValidator)(e, ...n)
                    },
                    withDefault: o => ({
                        type: t,
                        required: !1,
                        default: o,
                        validator: (0, r.vuePropValidator)(e, ...n)
                    }),
                    required: {
                        type: t,
                        required: !0,
                        validator: (0, r.vuePropValidator)(e, ...n)
                    }
                });
            e.propOptionsGenerator = o
        },
        d13e: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isSymbol = void 0;
            const r = t => {
                if ("symbol" !== typeof t) return "value should be a symbol"
            };
            e.isSymbol = r
        },
        d610: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.symbolProp = void 0;
            const r = n("cf27"),
                o = n("dea8"),
                i = t => (0, r.propOptionsGenerator)(void 0, t, o.isSymbol);
            e.symbolProp = i
        },
        d917: function(t, e, n) {
            "use strict";
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("computer", {
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
                                return [n("div", {
                                    staticClass: "center-flex-x gap-2 mb-2"
                                }, [n("label", {
                                    staticClass: "w-28 text-right"
                                }, [t._v(t._s(t.$t("file-name")) + ":")]), n("winui-textbox", {
                                    staticClass: "flex-1"
                                }), n("winui-dropdown", {
                                    staticClass: "w-2/5",
                                    model: {
                                        value: t.option,
                                        callback: function(e) {
                                            t.option = e
                                        },
                                        expression: "option"
                                    }
                                }, t._l(t.options, (function(e, r) {
                                    return n("option", {
                                        key: r,
                                        domProps: {
                                            value: r
                                        }
                                    }, [t._v(" " + t._s(e) + " ")])
                                })), 0)], 1), n("div", {
                                    staticClass: "flex justify-end"
                                }, [n("winui-button", {
                                    staticClass: "default",
                                    on: {
                                        click: function(e) {
                                            return e.stopPropagation(), t.open(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("open")) + " ")]), n("winui-button", {
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
                o = [],
                i = n("b47a"),
                s = n("0e9a"),
                a = {
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
                            Object(s["r"])(this.path).ext ? this.$emit("done", this.path) : this.dirPath = this.path
                        },
                        cancel() {
                            this.$emit("cancel")
                        }
                    },
                    components: {
                        Computer: i["default"]
                    }
                },
                l = a,
                c = n("2877"),
                d = Object(c["a"])(l, r, o, !1, null, null, null);
            e["a"] = d.exports
        },
        de73: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            const r = ["webm", "wav", "ogg", "mp3", "wma"],
                o = ["webm", "ogg", "mp4"],
                i = ["bmp", "gif", "svg", "png", "jpg", "jpeg", "webp", "ico", "apng"],
                s = {
                    music: r,
                    videos: o,
                    pictures: i,
                    audio: r,
                    video: o,
                    image: i
                }
        },
        dea8: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isSymbol = e.isOneOf = e.isInteger = e.isInstanceOf = e.vuePropValidator = void 0;
            const o = r(n("2b0e"));

            function i(t, ...e) {
                const n = t ? [...e, t] : e;
                if (0 !== n.length) return t => {
                    for (const e of n) {
                        const n = e(t);
                        if (n) return "object" === typeof o.default && "util" in o.default ? o.default.util.warn(`${n} (received: '${String(t)}')`) : console.warn(`${n} (received: '${String(t)}')`), !1
                    }
                    return !0
                }
            }
            e.vuePropValidator = i;
            var s = n("357a");
            Object.defineProperty(e, "isInstanceOf", {
                enumerable: !0,
                get: function() {
                    return s.isInstanceOf
                }
            });
            var a = n("77b7");
            Object.defineProperty(e, "isInteger", {
                enumerable: !0,
                get: function() {
                    return a.isInteger
                }
            });
            var l = n("64b0");
            Object.defineProperty(e, "isOneOf", {
                enumerable: !0,
                get: function() {
                    return l.isOneOf
                }
            });
            var c = n("d13e");
            Object.defineProperty(e, "isSymbol", {
                enumerable: !0,
                get: function() {
                    return c.isSymbol
                }
            })
        },
        dfbe: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.anyProp = void 0;
            const r = n("cf27"),
                o = t => (0, r.propOptionsGenerator)(void 0, t);
            e.anyProp = o
        },
        e081: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.functionProp = void 0;
            const r = n("dea8"),
                o = t => ({
                    optional: {
                        type: Function,
                        required: !1,
                        default: void 0,
                        validator: (0, r.vuePropValidator)(t)
                    },
                    nullable: {
                        type: Function,
                        required: !1,
                        default: null,
                        validator: (0, r.vuePropValidator)(t)
                    },
                    required: {
                        type: Function,
                        required: !0,
                        validator: (0, r.vuePropValidator)(t)
                    }
                });
            e.functionProp = o
        },
        f0b7: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isNonPositive = void 0;
            const r = t => {
                if ("number" !== typeof t || t > 0 || Number.isNaN(t)) return "value should be a non-positive number"
            };
            e.isNonPositive = r
        },
        f3d4: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isPositive = void 0;
            const r = t => {
                if ("number" !== typeof t || t <= 0 || Number.isNaN(t)) return "value should be a positive number"
            };
            e.isPositive = r
        }
    }
]);