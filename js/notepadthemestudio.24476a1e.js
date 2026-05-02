(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["notepad~themestudio"], {
        5070: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Li
            })), n.d(t, "b", (function() {
                return Ei
            }));
            var o = n("02d1"),
                i = n("e1ea"),
                r = n("caa4"),
                s = n("9669");
            const l = e => {
                let t = f(e.state);
                return t.line ? c(e) : !!t.block && u(e)
            };

            function a(e, t) {
                return ({
                    state: n,
                    dispatch: o
                }) => {
                    if (n.readOnly) return !1;
                    let i = e(t, n);
                    return !!i && (o(n.update(i)), !0)
                }
            }
            const c = a(v, 0),
                h = a(g, 0),
                u = a((e, t) => g(e, t, p(t)), 0);

            function f(e, t = e.selection.main.head) {
                let n = e.languageDataAt("commentTokens", t);
                return n.length ? n[0] : {}
            }
            const d = 50;

            function m(e, {
                open: t,
                close: n
            }, o, i) {
                let r, s, l = e.sliceDoc(o - d, o),
                    a = e.sliceDoc(i, i + d),
                    c = /\s*$/.exec(l)[0].length,
                    h = /^\s*/.exec(a)[0].length,
                    u = l.length - c;
                if (l.slice(u - t.length, u) == t && a.slice(h, h + n.length) == n) return {
                    open: {
                        pos: o - c,
                        margin: c && 1
                    },
                    close: {
                        pos: i + h,
                        margin: h && 1
                    }
                };
                i - o <= 2 * d ? r = s = e.sliceDoc(o, i) : (r = e.sliceDoc(o, o + d), s = e.sliceDoc(i - d, i));
                let f = /^\s*/.exec(r)[0].length,
                    m = /\s*$/.exec(s)[0].length,
                    p = s.length - m - n.length;
                return r.slice(f, f + t.length) == t && s.slice(p, p + n.length) == n ? {
                    open: {
                        pos: o + f + t.length,
                        margin: /\s/.test(r.charAt(f + t.length)) ? 1 : 0
                    },
                    close: {
                        pos: i - m - n.length,
                        margin: /\s/.test(s.charAt(p - 1)) ? 1 : 0
                    }
                } : null
            }

            function p(e) {
                let t = [];
                for (let n of e.selection.ranges) {
                    let o = e.doc.lineAt(n.from),
                        i = n.to <= o.to ? o : e.doc.lineAt(n.to),
                        r = t.length - 1;
                    r >= 0 && t[r].to > o.from ? t[r].to = i.to : t.push({
                        from: o.from,
                        to: i.to
                    })
                }
                return t
            }

            function g(e, t, n = t.selection.ranges) {
                let o = n.map(e => f(t, e.from).block);
                if (!o.every(e => e)) return null;
                let i = n.map((e, n) => m(t, o[n], e.from, e.to));
                if (2 != e && !i.every(e => e)) return {
                    changes: t.changes(n.map((e, t) => i[t] ? [] : [{
                        from: e.from,
                        insert: o[t].open + " "
                    }, {
                        from: e.to,
                        insert: " " + o[t].close
                    }]))
                };
                if (1 != e && i.some(e => e)) {
                    let e = [];
                    for (let t, n = 0; n < i.length; n++)
                        if (t = i[n]) {
                            let i = o[n],
                                {
                                    open: r,
                                    close: s
                                } = t;
                            e.push({
                                from: r.pos - i.open.length,
                                to: r.pos + r.margin
                            }, {
                                from: s.pos - s.margin,
                                to: s.pos + i.close.length
                            })
                        }
                    return {
                        changes: e
                    }
                }
                return null
            }

            function v(e, t, n = t.selection.ranges) {
                let o = [],
                    i = -1;
                for (let {
                        from: r,
                        to: s
                    } of n) {
                    let e = o.length,
                        n = 1e9;
                    for (let l = r; l <= s;) {
                        let e = t.doc.lineAt(l);
                        if (e.from > i && (r == s || s > e.from)) {
                            i = e.from;
                            let r = f(t, l).line;
                            if (!r) continue;
                            let s = /^\s*/.exec(e.text)[0].length,
                                a = s == e.length,
                                c = e.text.slice(s, s + r.length) == r ? s : -1;
                            s < e.text.length && s < n && (n = s), o.push({
                                line: e,
                                comment: c,
                                token: r,
                                indent: s,
                                empty: a,
                                single: !1
                            })
                        }
                        l = e.to + 1
                    }
                    if (n < 1e9)
                        for (let t = e; t < o.length; t++) o[t].indent < o[t].line.text.length && (o[t].indent = n);
                    o.length == e + 1 && (o[e].single = !0)
                }
                if (2 != e && o.some(e => e.comment < 0 && (!e.empty || e.single))) {
                    let e = [];
                    for (let {
                            line: t,
                            token: i,
                            indent: r,
                            empty: s,
                            single: l
                        } of o) !l && s || e.push({
                        from: t.from + r,
                        insert: i + " "
                    });
                    let n = t.changes(e);
                    return {
                        changes: n,
                        selection: t.selection.map(n, 1)
                    }
                }
                if (1 != e && o.some(e => e.comment >= 0)) {
                    let e = [];
                    for (let {
                            line: t,
                            comment: n,
                            token: i
                        } of o)
                        if (n >= 0) {
                            let o = t.from + n,
                                r = o + i.length;
                            " " == t.text[r - t.from] && r++, e.push({
                                from: o,
                                to: r
                            })
                        }
                    return {
                        changes: e
                    }
                }
                return null
            }
            const b = i["a"].define(),
                w = i["a"].define(),
                y = i["h"].define(),
                x = i["h"].define({
                    combine(e) {
                        return Object(i["t"])(e, {
                            minDepth: 100,
                            newGroupDelay: 500
                        }, {
                            minDepth: Math.max,
                            newGroupDelay: Math.min
                        })
                    }
                });

            function k(e) {
                let t = 0;
                return e.iterChangedRanges((e, n) => t = n), t
            }
            const O = i["o"].define({
                create() {
                    return U.empty
                },
                update(e, t) {
                    let n = t.state.facet(x),
                        o = t.annotation(b);
                    if (o) {
                        let r = t.docChanged ? i["f"].single(k(t.changes)) : void 0,
                            s = I.fromTransaction(t, r),
                            l = o.side,
                            a = 0 == l ? e.undone : e.done;
                        return a = s ? R(a, a.length, n.minDepth, s) : q(a, t.startState.selection), new U(0 == l ? o.rest : a, 0 == l ? a : o.rest)
                    }
                    let r = t.annotation(w);
                    if ("full" != r && "before" != r || (e = e.isolate()), !1 === t.annotation(i["q"].addToHistory)) return t.changes.empty ? e : e.addMapping(t.changes.desc);
                    let s = I.fromTransaction(t),
                        l = t.annotation(i["q"].time),
                        a = t.annotation(i["q"].userEvent);
                    return s ? e = e.addChanges(s, l, a, n.newGroupDelay, n.minDepth) : t.selection && (e = e.addSelection(t.startState.selection, l, a, n.newGroupDelay)), "full" != r && "after" != r || (e = e.isolate()), e
                },
                toJSON(e) {
                    return {
                        done: e.done.map(e => e.toJSON()),
                        undone: e.undone.map(e => e.toJSON())
                    }
                },
                fromJSON(e) {
                    return new U(e.done.map(I.fromJSON), e.undone.map(I.fromJSON))
                }
            });

            function A(e = {}) {
                return [O, x.of(e), o["c"].domEventHandlers({
                    beforeinput(e, t) {
                        let n = "historyUndo" == e.inputType ? S : "historyRedo" == e.inputType ? M : null;
                        return !!n && (e.preventDefault(), n(t))
                    }
                })]
            }

            function C(e, t) {
                return function({
                    state: n,
                    dispatch: o
                }) {
                    if (!t && n.readOnly) return !1;
                    let i = n.field(O, !1);
                    if (!i) return !1;
                    let r = i.pop(e, n, t);
                    return !!r && (o(r), !0)
                }
            }
            const S = C(0, !1),
                M = C(1, !1),
                D = C(0, !0),
                j = C(1, !0);
            class I {
                constructor(e, t, n, o, i) {
                    this.changes = e, this.effects = t, this.mapped = n, this.startSelection = o, this.selectionsAfter = i
                }
                setSelAfter(e) {
                    return new I(this.changes, this.effects, this.mapped, this.startSelection, e)
                }
                toJSON() {
                    var e, t, n;
                    return {
                        changes: null === (e = this.changes) || void 0 === e ? void 0 : e.toJSON(),
                        mapped: null === (t = this.mapped) || void 0 === t ? void 0 : t.toJSON(),
                        startSelection: null === (n = this.startSelection) || void 0 === n ? void 0 : n.toJSON(),
                        selectionsAfter: this.selectionsAfter.map(e => e.toJSON())
                    }
                }
                static fromJSON(e) {
                    return new I(e.changes && i["c"].fromJSON(e.changes), [], e.mapped && i["b"].fromJSON(e.mapped), e.startSelection && i["f"].fromJSON(e.startSelection), e.selectionsAfter.map(i["f"].fromJSON))
                }
                static fromTransaction(e, t) {
                    let n = P;
                    for (let o of e.startState.facet(y)) {
                        let t = o(e);
                        t.length && (n = n.concat(t))
                    }
                    return !n.length && e.changes.empty ? null : new I(e.changes.invert(e.startState.doc), n, void 0, t || e.startState.selection, P)
                }
                static selection(e) {
                    return new I(void 0, P, void 0, void 0, e)
                }
            }

            function R(e, t, n, o) {
                let i = t + 1 > n + 20 ? t - n - 1 : 0,
                    r = e.slice(i, t);
                return r.push(o), r
            }

            function L(e, t) {
                let n = [],
                    o = !1;
                return e.iterChangedRanges((e, t) => n.push(e, t)), t.iterChangedRanges((e, t, i, r) => {
                    for (let s = 0; s < n.length;) {
                        let e = n[s++],
                            t = n[s++];
                        r >= e && i <= t && (o = !0)
                    }
                }), o
            }

            function E(e, t) {
                return e.ranges.length == t.ranges.length && 0 === e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length
            }

            function B(e, t) {
                return e.length ? t.length ? e.concat(t) : e : t
            }
            const P = [],
                T = 200;

            function q(e, t) {
                if (e.length) {
                    let n = e[e.length - 1],
                        o = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - T));
                    return o.length && o[o.length - 1].eq(t) ? e : (o.push(t), R(e, e.length - 1, 1e9, n.setSelAfter(o)))
                }
                return [I.selection([t])]
            }

            function W(e) {
                let t = e[e.length - 1],
                    n = e.slice();
                return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n
            }

            function $(e, t) {
                if (!e.length) return e;
                let n = e.length,
                    o = P;
                while (n) {
                    let i = F(e[n - 1], t, o);
                    if (i.changes && !i.changes.empty || i.effects.length) {
                        let t = e.slice(0, n);
                        return t[n - 1] = i, t
                    }
                    t = i.mapped, n--, o = i.selectionsAfter
                }
                return o.length ? [I.selection(o)] : P
            }

            function F(e, t, n) {
                let o = B(e.selectionsAfter.length ? e.selectionsAfter.map(e => e.map(t)) : P, n);
                if (!e.changes) return I.selection(o);
                let r = e.changes.map(t),
                    s = t.mapDesc(e.changes, !0),
                    l = e.mapped ? e.mapped.composeDesc(s) : s;
                return new I(r, i["n"].mapEffects(e.effects, t), l, e.startSelection.map(s), o)
            }
            const N = /^(input\.type|delete)($|\.)/;
            class U {
                constructor(e, t, n = 0, o) {
                    this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = o
                }
                isolate() {
                    return this.prevTime ? new U(this.done, this.undone) : this
                }
                addChanges(e, t, n, o, i) {
                    let r = this.done,
                        s = r[r.length - 1];
                    return r = s && s.changes && !s.changes.empty && e.changes && (!n || N.test(n)) && (!s.selectionsAfter.length && t - this.prevTime < o && L(s.changes, e.changes) || "input.type.compose" == n) ? R(r, r.length - 1, i, new I(e.changes.compose(s.changes), B(e.effects, s.effects), s.mapped, s.startSelection, P)) : R(r, r.length, i, e), new U(r, P, t, n)
                }
                addSelection(e, t, n, o) {
                    let i = this.done.length ? this.done[this.done.length - 1].selectionsAfter : P;
                    return i.length > 0 && t - this.prevTime < o && n == this.prevUserEvent && n && /^select($|\.)/.test(n) && E(i[i.length - 1], e) ? this : new U(q(this.done, e), this.undone, t, n)
                }
                addMapping(e) {
                    return new U($(this.done, e), $(this.undone, e), this.prevTime, this.prevUserEvent)
                }
                pop(e, t, n) {
                    let o = 0 == e ? this.done : this.undone;
                    if (0 == o.length) return null;
                    let i = o[o.length - 1];
                    if (n && i.selectionsAfter.length) return t.update({
                        selection: i.selectionsAfter[i.selectionsAfter.length - 1],
                        annotations: b.of({
                            side: e,
                            rest: W(o)
                        }),
                        userEvent: 0 == e ? "select.undo" : "select.redo",
                        scrollIntoView: !0
                    });
                    if (i.changes) {
                        let n = 1 == o.length ? P : o.slice(0, o.length - 1);
                        return i.mapped && (n = $(n, i.mapped)), t.update({
                            changes: i.changes,
                            selection: i.startSelection,
                            effects: i.effects,
                            annotations: b.of({
                                side: e,
                                rest: n
                            }),
                            filter: !1,
                            userEvent: 0 == e ? "undo" : "redo",
                            scrollIntoView: !0
                        })
                    }
                    return null
                }
            }
            U.empty = new U(P, P);
            const V = [{
                key: "Mod-z",
                run: S,
                preventDefault: !0
            }, {
                key: "Mod-y",
                mac: "Mod-Shift-z",
                run: M,
                preventDefault: !0
            }, {
                linux: "Ctrl-Shift-z",
                run: M,
                preventDefault: !0
            }, {
                key: "Mod-u",
                run: D,
                preventDefault: !0
            }, {
                key: "Alt-u",
                mac: "Mod-Shift-u",
                run: j,
                preventDefault: !0
            }];

            function _(e, t) {
                return i["f"].create(e.ranges.map(t), e.mainIndex)
            }

            function z(e, t) {
                return e.update({
                    selection: t,
                    scrollIntoView: !0,
                    userEvent: "select"
                })
            }

            function H({
                state: e,
                dispatch: t
            }, n) {
                let o = _(e.selection, n);
                return !o.eq(e.selection) && (t(z(e, o)), !0)
            }

            function J(e, t) {
                return i["f"].cursor(t ? e.to : e.from)
            }

            function G(e, t) {
                return H(e, n => n.empty ? e.moveByChar(n, t) : J(n, t))
            }

            function Q(e) {
                return e.textDirectionAt(e.state.selection.main.head) == o["b"].LTR
            }
            const K = e => G(e, !Q(e)),
                X = e => G(e, Q(e));

            function Y(e, t) {
                return H(e, n => n.empty ? e.moveByGroup(n, t) : J(n, t))
            }
            const Z = e => Y(e, !Q(e)),
                ee = e => Y(e, Q(e));

            function te(e, t, n) {
                if (t.type.prop(n)) return !0;
                let o = t.to - t.from;
                return o && (o > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild
            }

            function ne(e, t, n) {
                let o = Object(r["t"])(e).resolveInner(t.head),
                    l = n ? s["c"].closedBy : s["c"].openedBy;
                for (let i = t.head;;) {
                    let t = n ? o.childAfter(i) : o.childBefore(i);
                    if (!t) break;
                    te(e, t, l) ? o = t : i = n ? t.to : t.from
                }
                let a, c, h = o.type.prop(l);
                return c = h && (a = n ? Object(r["r"])(e, o.from, 1) : Object(r["r"])(e, o.to, -1)) && a.matched ? n ? a.end.to : a.end.from : n ? o.to : o.from, i["f"].cursor(c, n ? -1 : 1)
            }
            const oe = e => H(e, t => ne(e.state, t, !Q(e))),
                ie = e => H(e, t => ne(e.state, t, Q(e)));

            function re(e, t) {
                return H(e, n => {
                    if (!n.empty) return J(n, t);
                    let o = e.moveVertically(n, t);
                    return o.head != n.head ? o : e.moveToLineBoundary(n, t)
                })
            }
            const se = e => re(e, !1),
                le = e => re(e, !0);

            function ae(e) {
                return Math.max(e.defaultLineHeight, Math.min(e.dom.clientHeight, innerHeight) - 5)
            }

            function ce(e, t) {
                let {
                    state: n
                } = e, i = _(n.selection, n => n.empty ? e.moveVertically(n, t, ae(e)) : J(n, t));
                if (i.eq(n.selection)) return !1;
                let r, s = e.coordsAtPos(n.selection.main.head),
                    l = e.scrollDOM.getBoundingClientRect();
                return s && s.top > l.top && s.bottom < l.bottom && s.top - l.top <= e.scrollDOM.scrollHeight - e.scrollDOM.scrollTop - e.scrollDOM.clientHeight && (r = o["c"].scrollIntoView(i.main.head, {
                    y: "start",
                    yMargin: s.top - l.top
                })), e.dispatch(z(n, i), {
                    effects: r
                }), !0
            }
            const he = e => ce(e, !1),
                ue = e => ce(e, !0);

            function fe(e, t, n) {
                let o = e.lineBlockAt(t.head),
                    r = e.moveToLineBoundary(t, n);
                if (r.head == t.head && r.head != (n ? o.to : o.from) && (r = e.moveToLineBoundary(t, n, !1)), !n && r.head == o.from && o.length) {
                    let n = /^\s*/.exec(e.state.sliceDoc(o.from, Math.min(o.from + 100, o.to)))[0].length;
                    n && t.head != o.from + n && (r = i["f"].cursor(o.from + n))
                }
                return r
            }
            const de = e => H(e, t => fe(e, t, !0)),
                me = e => H(e, t => fe(e, t, !1)),
                pe = e => H(e, t => fe(e, t, !Q(e))),
                ge = e => H(e, t => fe(e, t, Q(e))),
                ve = e => H(e, t => i["f"].cursor(e.lineBlockAt(t.head).from, 1)),
                be = e => H(e, t => i["f"].cursor(e.lineBlockAt(t.head).to, -1));

            function we(e, t, n) {
                let o = !1,
                    s = _(e.selection, t => {
                        let s = Object(r["r"])(e, t.head, -1) || Object(r["r"])(e, t.head, 1) || t.head > 0 && Object(r["r"])(e, t.head - 1, 1) || t.head < e.doc.length && Object(r["r"])(e, t.head + 1, -1);
                        if (!s || !s.end) return t;
                        o = !0;
                        let l = s.start.from == t.head ? s.end.to : s.end.from;
                        return n ? i["f"].range(t.anchor, l) : i["f"].cursor(l)
                    });
                return !!o && (t(z(e, s)), !0)
            }
            const ye = ({
                state: e,
                dispatch: t
            }) => we(e, t, !1);

            function xe(e, t) {
                let n = _(e.state.selection, e => {
                    let n = t(e);
                    return i["f"].range(e.anchor, n.head, n.goalColumn)
                });
                return !n.eq(e.state.selection) && (e.dispatch(z(e.state, n)), !0)
            }

            function ke(e, t) {
                return xe(e, n => e.moveByChar(n, t))
            }
            const Oe = e => ke(e, !Q(e)),
                Ae = e => ke(e, Q(e));

            function Ce(e, t) {
                return xe(e, n => e.moveByGroup(n, t))
            }
            const Se = e => Ce(e, !Q(e)),
                Me = e => Ce(e, Q(e));
            const De = e => xe(e, t => ne(e.state, t, !Q(e))),
                je = e => xe(e, t => ne(e.state, t, Q(e)));

            function Ie(e, t) {
                return xe(e, n => e.moveVertically(n, t))
            }
            const Re = e => Ie(e, !1),
                Le = e => Ie(e, !0);

            function Ee(e, t) {
                return xe(e, n => e.moveVertically(n, t, ae(e)))
            }
            const Be = e => Ee(e, !1),
                Pe = e => Ee(e, !0),
                Te = e => xe(e, t => fe(e, t, !0)),
                qe = e => xe(e, t => fe(e, t, !1)),
                We = e => xe(e, t => fe(e, t, !Q(e))),
                $e = e => xe(e, t => fe(e, t, Q(e))),
                Fe = e => xe(e, t => i["f"].cursor(e.lineBlockAt(t.head).from)),
                Ne = e => xe(e, t => i["f"].cursor(e.lineBlockAt(t.head).to)),
                Ue = ({
                    state: e,
                    dispatch: t
                }) => (t(z(e, {
                    anchor: 0
                })), !0),
                Ve = ({
                    state: e,
                    dispatch: t
                }) => (t(z(e, {
                    anchor: e.doc.length
                })), !0),
                _e = ({
                    state: e,
                    dispatch: t
                }) => (t(z(e, {
                    anchor: e.selection.main.anchor,
                    head: 0
                })), !0),
                ze = ({
                    state: e,
                    dispatch: t
                }) => (t(z(e, {
                    anchor: e.selection.main.anchor,
                    head: e.doc.length
                })), !0),
                He = ({
                    state: e,
                    dispatch: t
                }) => (t(e.update({
                    selection: {
                        anchor: 0,
                        head: e.doc.length
                    },
                    userEvent: "select"
                })), !0),
                Je = ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = at(e).map(({
                        from: t,
                        to: n
                    }) => i["f"].range(t, Math.min(n + 1, e.doc.length)));
                    return t(e.update({
                        selection: i["f"].create(n),
                        userEvent: "select"
                    })), !0
                },
                Ge = ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = _(e.selection, t => {
                        var n;
                        let o = Object(r["t"])(e).resolveInner(t.head, 1);
                        while (!(o.from < t.from && o.to >= t.to || o.to > t.to && o.from <= t.from) && (null === (n = o.parent) || void 0 === n ? void 0 : n.parent)) o = o.parent;
                        return i["f"].range(o.to, o.from)
                    });
                    return t(z(e, n)), !0
                },
                Qe = ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = e.selection,
                        o = null;
                    return n.ranges.length > 1 ? o = i["f"].create([n.main]) : n.main.empty || (o = i["f"].create([i["f"].cursor(n.main.head)])), !!o && (t(z(e, o)), !0)
                };

            function Ke(e, t) {
                if (e.state.readOnly) return !1;
                let n = "delete.selection",
                    {
                        state: r
                    } = e,
                    s = r.changeByRange(o => {
                        let {
                            from: r,
                            to: s
                        } = o;
                        if (r == s) {
                            let o = t(r);
                            o < r ? (n = "delete.backward", o = Xe(e, o, !1)) : o > r && (n = "delete.forward", o = Xe(e, o, !0)), r = Math.min(r, o), s = Math.max(s, o)
                        } else r = Xe(e, r, !1), s = Xe(e, s, !0);
                        return r == s ? {
                            range: o
                        } : {
                            changes: {
                                from: r,
                                to: s
                            },
                            range: i["f"].cursor(r)
                        }
                    });
                return !s.changes.empty && (e.dispatch(r.update(s, {
                    scrollIntoView: !0,
                    userEvent: n,
                    effects: "delete.selection" == n ? o["c"].announce.of(r.phrase("Selection deleted")) : void 0
                })), !0)
            }

            function Xe(e, t, n) {
                if (e instanceof o["c"])
                    for (let i of e.state.facet(o["c"].atomicRanges).map(t => t(e))) i.between(t, t, (e, o) => {
                        e < t && o > t && (t = n ? o : e)
                    });
                return t
            }
            const Ye = (e, t) => Ke(e, n => {
                    let o, s, {
                            state: l
                        } = e,
                        a = l.doc.lineAt(n);
                    if (!t && n > a.from && n < a.from + 200 && !/[^ \t]/.test(o = a.text.slice(0, n - a.from))) {
                        if ("\t" == o[o.length - 1]) return n - 1;
                        let e = Object(i["u"])(o, l.tabSize),
                            t = e % Object(r["l"])(l) || Object(r["l"])(l);
                        for (let i = 0; i < t && " " == o[o.length - 1 - i]; i++) n--;
                        s = n
                    } else s = Object(i["v"])(a.text, n - a.from, t, t) + a.from, s == n && a.number != (t ? l.doc.lines : 1) && (s += t ? 1 : -1);
                    return s
                }),
                Ze = e => Ye(e, !1),
                et = e => Ye(e, !0),
                tt = (e, t) => Ke(e, n => {
                    let o = n,
                        {
                            state: r
                        } = e,
                        s = r.doc.lineAt(o),
                        l = r.charCategorizer(o);
                    for (let e = null;;) {
                        if (o == (t ? s.to : s.from)) {
                            o == n && s.number != (t ? r.doc.lines : 1) && (o += t ? 1 : -1);
                            break
                        }
                        let a = Object(i["v"])(s.text, o - s.from, t) + s.from,
                            c = s.text.slice(Math.min(o, a) - s.from, Math.max(o, a) - s.from),
                            h = l(c);
                        if (null != e && h != e) break;
                        " " == c && o == n || (e = h), o = a
                    }
                    return o
                }),
                nt = e => tt(e, !1),
                ot = e => tt(e, !0),
                it = e => Ke(e, t => {
                    let n = e.lineBlockAt(t).to;
                    return t < n ? n : Math.min(e.state.doc.length, t + 1)
                }),
                rt = e => Ke(e, t => {
                    let n = e.lineBlockAt(t).from;
                    return t > n ? n : Math.max(0, t - 1)
                }),
                st = ({
                    state: e,
                    dispatch: t
                }) => {
                    if (e.readOnly) return !1;
                    let n = e.changeByRange(e => ({
                        changes: {
                            from: e.from,
                            to: e.to,
                            insert: i["p"].of(["", ""])
                        },
                        range: i["f"].cursor(e.from)
                    }));
                    return t(e.update(n, {
                        scrollIntoView: !0,
                        userEvent: "input"
                    })), !0
                },
                lt = ({
                    state: e,
                    dispatch: t
                }) => {
                    if (e.readOnly) return !1;
                    let n = e.changeByRange(t => {
                        if (!t.empty || 0 == t.from || t.from == e.doc.length) return {
                            range: t
                        };
                        let n = t.from,
                            o = e.doc.lineAt(n),
                            r = n == o.from ? n - 1 : Object(i["v"])(o.text, n - o.from, !1) + o.from,
                            s = n == o.to ? n + 1 : Object(i["v"])(o.text, n - o.from, !0) + o.from;
                        return {
                            changes: {
                                from: r,
                                to: s,
                                insert: e.doc.slice(n, s).append(e.doc.slice(r, n))
                            },
                            range: i["f"].cursor(s)
                        }
                    });
                    return !n.changes.empty && (t(e.update(n, {
                        scrollIntoView: !0,
                        userEvent: "move.character"
                    })), !0)
                };

            function at(e) {
                let t = [],
                    n = -1;
                for (let o of e.selection.ranges) {
                    let i = e.doc.lineAt(o.from),
                        r = e.doc.lineAt(o.to);
                    if (o.empty || o.to != r.from || (r = e.doc.lineAt(o.to - 1)), n >= i.number) {
                        let e = t[t.length - 1];
                        e.to = r.to, e.ranges.push(o)
                    } else t.push({
                        from: i.from,
                        to: r.to,
                        ranges: [o]
                    });
                    n = r.number + 1
                }
                return t
            }

            function ct(e, t, n) {
                if (e.readOnly) return !1;
                let o = [],
                    r = [];
                for (let s of at(e)) {
                    if (n ? s.to == e.doc.length : 0 == s.from) continue;
                    let t = e.doc.lineAt(n ? s.to + 1 : s.from - 1),
                        l = t.length + 1;
                    if (n) {
                        o.push({
                            from: s.to,
                            to: t.to
                        }, {
                            from: s.from,
                            insert: t.text + e.lineBreak
                        });
                        for (let t of s.ranges) r.push(i["f"].range(Math.min(e.doc.length, t.anchor + l), Math.min(e.doc.length, t.head + l)))
                    } else {
                        o.push({
                            from: t.from,
                            to: s.from
                        }, {
                            from: s.to,
                            insert: e.lineBreak + t.text
                        });
                        for (let e of s.ranges) r.push(i["f"].range(e.anchor - l, e.head - l))
                    }
                }
                return !!o.length && (t(e.update({
                    changes: o,
                    scrollIntoView: !0,
                    selection: i["f"].create(r, e.selection.mainIndex),
                    userEvent: "move.line"
                })), !0)
            }
            const ht = ({
                    state: e,
                    dispatch: t
                }) => ct(e, t, !1),
                ut = ({
                    state: e,
                    dispatch: t
                }) => ct(e, t, !0);

            function ft(e, t, n) {
                if (e.readOnly) return !1;
                let o = [];
                for (let i of at(e)) n ? o.push({
                    from: i.from,
                    insert: e.doc.slice(i.from, i.to) + e.lineBreak
                }) : o.push({
                    from: i.to,
                    insert: e.lineBreak + e.doc.slice(i.from, i.to)
                });
                return t(e.update({
                    changes: o,
                    scrollIntoView: !0,
                    userEvent: "input.copyline"
                })), !0
            }
            const dt = ({
                    state: e,
                    dispatch: t
                }) => ft(e, t, !1),
                mt = ({
                    state: e,
                    dispatch: t
                }) => ft(e, t, !0),
                pt = e => {
                    if (e.state.readOnly) return !1;
                    let {
                        state: t
                    } = e, n = t.changes(at(t).map(({
                        from: e,
                        to: n
                    }) => (e > 0 ? e-- : n < t.doc.length && n++, {
                        from: e,
                        to: n
                    }))), o = _(t.selection, t => e.moveVertically(t, !0)).map(n);
                    return e.dispatch({
                        changes: n,
                        selection: o,
                        scrollIntoView: !0,
                        userEvent: "delete.line"
                    }), !0
                };

            function gt(e, t) {
                if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
                    from: t,
                    to: t
                };
                let n, o = Object(r["t"])(e).resolveInner(t),
                    i = o.childBefore(t),
                    l = o.childAfter(t);
                return i && l && i.to <= t && l.from >= t && (n = i.type.prop(s["c"].closedBy)) && n.indexOf(l.name) > -1 && e.doc.lineAt(i.to).from == e.doc.lineAt(l.from).from ? {
                    from: i.to,
                    to: l.from
                } : null
            }
            const vt = wt(!1),
                bt = wt(!0);

            function wt(e) {
                return ({
                    state: t,
                    dispatch: n
                }) => {
                    if (t.readOnly) return !1;
                    let o = t.changeByRange(n => {
                        let {
                            from: o,
                            to: s
                        } = n, l = t.doc.lineAt(o), a = !e && o == s && gt(t, o);
                        e && (o = s = (s <= l.to ? l : t.doc.lineAt(s)).to);
                        let c = new r["b"](t, {
                                simulateBreak: o,
                                simulateDoubleBreak: !!a
                            }),
                            h = Object(r["m"])(c, o);
                        null == h && (h = /^\s*/.exec(t.doc.lineAt(o).text)[0].length);
                        while (s < l.to && /\s/.test(l.text[s - l.from])) s++;
                        a ? ({
                            from: o,
                            to: s
                        } = a) : o > l.from && o < l.from + 100 && !/\S/.test(l.text.slice(0, o)) && (o = l.from);
                        let u = ["", Object(r["p"])(t, h)];
                        return a && u.push(Object(r["p"])(t, c.lineIndent(l.from, -1))), {
                            changes: {
                                from: o,
                                to: s,
                                insert: i["p"].of(u)
                            },
                            range: i["f"].cursor(o + 1 + u[1].length)
                        }
                    });
                    return n(t.update(o, {
                        scrollIntoView: !0,
                        userEvent: "input"
                    })), !0
                }
            }

            function yt(e, t) {
                let n = -1;
                return e.changeByRange(o => {
                    let r = [];
                    for (let i = o.from; i <= o.to;) {
                        let s = e.doc.lineAt(i);
                        s.number > n && (o.empty || o.to > s.from) && (t(s, r, o), n = s.number), i = s.to + 1
                    }
                    let s = e.changes(r);
                    return {
                        changes: r,
                        range: i["f"].range(s.mapPos(o.anchor, 1), s.mapPos(o.head, 1))
                    }
                })
            }
            const xt = ({
                    state: e,
                    dispatch: t
                }) => {
                    if (e.readOnly) return !1;
                    let n = Object.create(null),
                        o = new r["b"](e, {
                            overrideIndentation: e => {
                                let t = n[e];
                                return null == t ? -1 : t
                            }
                        }),
                        i = yt(e, (t, i, s) => {
                            let l = Object(r["m"])(o, t.from);
                            if (null == l) return;
                            /\S/.test(t.text) || (l = 0);
                            let a = /^\s*/.exec(t.text)[0],
                                c = Object(r["p"])(e, l);
                            (a != c || s.from < t.from + a.length) && (n[t.from] = l, i.push({
                                from: t.from,
                                to: t.from + a.length,
                                insert: c
                            }))
                        });
                    return i.changes.empty || t(e.update(i, {
                        userEvent: "indent"
                    })), !0
                },
                kt = ({
                    state: e,
                    dispatch: t
                }) => !e.readOnly && (t(e.update(yt(e, (t, n) => {
                    n.push({
                        from: t.from,
                        insert: e.facet(r["q"])
                    })
                }), {
                    userEvent: "input.indent"
                })), !0),
                Ot = ({
                    state: e,
                    dispatch: t
                }) => !e.readOnly && (t(e.update(yt(e, (t, n) => {
                    let o = /^\s*/.exec(t.text)[0];
                    if (!o) return;
                    let s = Object(i["u"])(o, e.tabSize),
                        l = 0,
                        a = Object(r["p"])(e, Math.max(0, s - Object(r["l"])(e)));
                    while (l < o.length && l < a.length && o.charCodeAt(l) == a.charCodeAt(l)) l++;
                    n.push({
                        from: t.from + l,
                        to: t.from + o.length,
                        insert: a.slice(l)
                    })
                }), {
                    userEvent: "delete.dedent"
                })), !0),
                At = [{
                    key: "Ctrl-b",
                    run: K,
                    shift: Oe,
                    preventDefault: !0
                }, {
                    key: "Ctrl-f",
                    run: X,
                    shift: Ae
                }, {
                    key: "Ctrl-p",
                    run: se,
                    shift: Re
                }, {
                    key: "Ctrl-n",
                    run: le,
                    shift: Le
                }, {
                    key: "Ctrl-a",
                    run: ve,
                    shift: Fe
                }, {
                    key: "Ctrl-e",
                    run: be,
                    shift: Ne
                }, {
                    key: "Ctrl-d",
                    run: et
                }, {
                    key: "Ctrl-h",
                    run: Ze
                }, {
                    key: "Ctrl-k",
                    run: it
                }, {
                    key: "Ctrl-Alt-h",
                    run: nt
                }, {
                    key: "Ctrl-o",
                    run: st
                }, {
                    key: "Ctrl-t",
                    run: lt
                }, {
                    key: "Ctrl-v",
                    run: ue
                }],
                Ct = [{
                    key: "ArrowLeft",
                    run: K,
                    shift: Oe,
                    preventDefault: !0
                }, {
                    key: "Mod-ArrowLeft",
                    mac: "Alt-ArrowLeft",
                    run: Z,
                    shift: Se,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowLeft",
                    run: pe,
                    shift: We,
                    preventDefault: !0
                }, {
                    key: "ArrowRight",
                    run: X,
                    shift: Ae,
                    preventDefault: !0
                }, {
                    key: "Mod-ArrowRight",
                    mac: "Alt-ArrowRight",
                    run: ee,
                    shift: Me,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowRight",
                    run: ge,
                    shift: $e,
                    preventDefault: !0
                }, {
                    key: "ArrowUp",
                    run: se,
                    shift: Re,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowUp",
                    run: Ue,
                    shift: _e
                }, {
                    mac: "Ctrl-ArrowUp",
                    run: he,
                    shift: Be
                }, {
                    key: "ArrowDown",
                    run: le,
                    shift: Le,
                    preventDefault: !0
                }, {
                    mac: "Cmd-ArrowDown",
                    run: Ve,
                    shift: ze
                }, {
                    mac: "Ctrl-ArrowDown",
                    run: ue,
                    shift: Pe
                }, {
                    key: "PageUp",
                    run: he,
                    shift: Be
                }, {
                    key: "PageDown",
                    run: ue,
                    shift: Pe
                }, {
                    key: "Home",
                    run: me,
                    shift: qe,
                    preventDefault: !0
                }, {
                    key: "Mod-Home",
                    run: Ue,
                    shift: _e
                }, {
                    key: "End",
                    run: de,
                    shift: Te,
                    preventDefault: !0
                }, {
                    key: "Mod-End",
                    run: Ve,
                    shift: ze
                }, {
                    key: "Enter",
                    run: vt
                }, {
                    key: "Mod-a",
                    run: He
                }, {
                    key: "Backspace",
                    run: Ze,
                    shift: Ze
                }, {
                    key: "Delete",
                    run: et
                }, {
                    key: "Mod-Backspace",
                    mac: "Alt-Backspace",
                    run: nt
                }, {
                    key: "Mod-Delete",
                    mac: "Alt-Delete",
                    run: ot
                }, {
                    mac: "Mod-Backspace",
                    run: rt
                }, {
                    mac: "Mod-Delete",
                    run: it
                }].concat(At.map(e => ({
                    mac: e.key,
                    run: e.run,
                    shift: e.shift
                }))),
                St = [{
                    key: "Alt-ArrowLeft",
                    mac: "Ctrl-ArrowLeft",
                    run: oe,
                    shift: De
                }, {
                    key: "Alt-ArrowRight",
                    mac: "Ctrl-ArrowRight",
                    run: ie,
                    shift: je
                }, {
                    key: "Alt-ArrowUp",
                    run: ht
                }, {
                    key: "Shift-Alt-ArrowUp",
                    run: dt
                }, {
                    key: "Alt-ArrowDown",
                    run: ut
                }, {
                    key: "Shift-Alt-ArrowDown",
                    run: mt
                }, {
                    key: "Escape",
                    run: Qe
                }, {
                    key: "Mod-Enter",
                    run: bt
                }, {
                    key: "Alt-l",
                    mac: "Ctrl-l",
                    run: Je
                }, {
                    key: "Mod-i",
                    run: Ge,
                    preventDefault: !0
                }, {
                    key: "Mod-[",
                    run: Ot
                }, {
                    key: "Mod-]",
                    run: kt
                }, {
                    key: "Mod-Alt-\\",
                    run: xt
                }, {
                    key: "Shift-Mod-k",
                    run: pt
                }, {
                    key: "Shift-Mod-\\",
                    run: ye
                }, {
                    key: "Mod-/",
                    run: l
                }, {
                    key: "Alt-A",
                    run: h
                }].concat(Ct);

            function Mt() {
                var e = arguments[0];
                "string" == typeof e && (e = document.createElement(e));
                var t = 1,
                    n = arguments[1];
                if (n && "object" == typeof n && null == n.nodeType && !Array.isArray(n)) {
                    for (var o in n)
                        if (Object.prototype.hasOwnProperty.call(n, o)) {
                            var i = n[o];
                            "string" == typeof i ? e.setAttribute(o, i) : null != i && (e[o] = i)
                        }
                    t++
                }
                for (; t < arguments.length; t++) Dt(e, arguments[t]);
                return e
            }

            function Dt(e, t) {
                if ("string" == typeof t) e.appendChild(document.createTextNode(t));
                else if (null == t);
                else if (null != t.nodeType) e.appendChild(t);
                else {
                    if (!Array.isArray(t)) throw new RangeError("Unsupported child node: " + t);
                    for (var n = 0; n < t.length; n++) Dt(e, t[n])
                }
            }
            const jt = "function" == typeof String.prototype.normalize ? e => e.normalize("NFKD") : e => e;
            class It {
                constructor(e, t, n = 0, o = e.length, i, r) {
                    this.test = r, this.value = {
                        from: 0,
                        to: 0
                    }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, o), this.bufferStart = n, this.normalize = i ? e => i(jt(e)) : jt, this.query = this.normalize(t)
                }
                peek() {
                    if (this.bufferPos == this.buffer.length) {
                        if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
                        this.bufferPos = 0, this.buffer = this.iter.value
                    }
                    return Object(i["r"])(this.buffer, this.bufferPos)
                }
                next() {
                    while (this.matches.length) this.matches.pop();
                    return this.nextOverlapping()
                }
                nextOverlapping() {
                    for (;;) {
                        let e = this.peek();
                        if (e < 0) return this.done = !0, this;
                        let t = Object(i["x"])(e),
                            n = this.bufferStart + this.bufferPos;
                        this.bufferPos += Object(i["s"])(e);
                        let o = this.normalize(t);
                        for (let i = 0, r = n;; i++) {
                            let e = o.charCodeAt(i),
                                s = this.match(e, r);
                            if (s) return this.value = s, this;
                            if (i == o.length - 1) break;
                            r == n && i < t.length && t.charCodeAt(i) == e && r++
                        }
                    }
                }
                match(e, t) {
                    let n = null;
                    for (let o = 0; o < this.matches.length; o += 2) {
                        let i = this.matches[o],
                            r = !1;
                        this.query.charCodeAt(i) == e && (i == this.query.length - 1 ? n = {
                            from: this.matches[o + 1],
                            to: t + 1
                        } : (this.matches[o]++, r = !0)), r || (this.matches.splice(o, 2), o -= 2)
                    }
                    return this.query.charCodeAt(0) == e && (1 == this.query.length ? n = {
                        from: t,
                        to: t + 1
                    } : this.matches.push(1, t)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferPos) && (n = null), n
                }
            }
            "undefined" != typeof Symbol && (It.prototype[Symbol.iterator] = function() {
                return this
            });
            const Rt = {
                    from: -1,
                    to: -1,
                    match: /.*/.exec("")
                },
                Lt = "gm" + (null == /x/.unicode ? "" : "u");
            class Et {
                constructor(e, t, n, o = 0, i = e.length) {
                    if (this.text = e, this.to = i, this.curLine = "", this.done = !1, this.value = Rt, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new Tt(e, t, n, o, i);
                    this.re = new RegExp(t, Lt + ((null === n || void 0 === n ? void 0 : n.ignoreCase) ? "i" : "")), this.test = null === n || void 0 === n ? void 0 : n.test, this.iter = e.iter();
                    let r = e.lineAt(o);
                    this.curLineStart = r.from, this.matchPos = Wt(e, o), this.getLine(this.curLineStart)
                }
                getLine(e) {
                    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
                }
                nextLine() {
                    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
                }
                next() {
                    for (let e = this.matchPos - this.curLineStart;;) {
                        this.re.lastIndex = e;
                        let t = this.matchPos <= this.to && this.re.exec(this.curLine);
                        if (t) {
                            let n = this.curLineStart + t.index,
                                o = n + t[0].length;
                            if (this.matchPos = Wt(this.text, o + (n == o ? 1 : 0)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < o || n > this.value.to) && (!this.test || this.test(n, o, t))) return this.value = {
                                from: n,
                                to: o,
                                match: t
                            }, this;
                            e = this.matchPos - this.curLineStart
                        } else {
                            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
                            this.nextLine(), e = 0
                        }
                    }
                }
            }
            const Bt = new WeakMap;
            class Pt {
                constructor(e, t) {
                    this.from = e, this.text = t
                }
                get to() {
                    return this.from + this.text.length
                }
                static get(e, t, n) {
                    let o = Bt.get(e);
                    if (!o || o.from >= n || o.to <= t) {
                        let o = new Pt(t, e.sliceString(t, n));
                        return Bt.set(e, o), o
                    }
                    if (o.from == t && o.to == n) return o;
                    let {
                        text: i,
                        from: r
                    } = o;
                    return r > t && (i = e.sliceString(t, r) + i, r = t), o.to < n && (i += e.sliceString(o.to, n)), Bt.set(e, new Pt(r, i)), new Pt(t, i.slice(t - r, n - r))
                }
            }
            class Tt {
                constructor(e, t, n, o, i) {
                    this.text = e, this.to = i, this.done = !1, this.value = Rt, this.matchPos = Wt(e, o), this.re = new RegExp(t, Lt + ((null === n || void 0 === n ? void 0 : n.ignoreCase) ? "i" : "")), this.test = null === n || void 0 === n ? void 0 : n.test, this.flat = Pt.get(e, o, this.chunkEnd(o + 5e3))
                }
                chunkEnd(e) {
                    return e >= this.to ? this.to : this.text.lineAt(e).to
                }
                next() {
                    for (;;) {
                        let e = this.re.lastIndex = this.matchPos - this.flat.from,
                            t = this.re.exec(this.flat.text);
                        if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
                            let e = this.flat.from + t.index,
                                n = e + t[0].length;
                            if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, t))) return this.value = {
                                from: e,
                                to: n,
                                match: t
                            }, this.matchPos = Wt(this.text, n + (e == n ? 1 : 0)), this
                        }
                        if (this.flat.to == this.to) return this.done = !0, this;
                        this.flat = Pt.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
                    }
                }
            }

            function qt(e) {
                try {
                    return new RegExp(e, Lt), !0
                } catch (t) {
                    return !1
                }
            }

            function Wt(e, t) {
                if (t >= e.length) return t;
                let n, o = e.lineAt(t);
                while (t < o.to && (n = o.text.charCodeAt(t - o.from)) >= 56320 && n < 57344) t++;
                return t
            }

            function $t(e) {
                let t = Mt("input", {
                        class: "cm-textfield",
                        name: "line"
                    }),
                    n = Mt("form", {
                        class: "cm-gotoLine",
                        onkeydown: t => {
                            27 == t.keyCode ? (t.preventDefault(), e.dispatch({
                                effects: Ft.of(!1)
                            }), e.focus()) : 13 == t.keyCode && (t.preventDefault(), o())
                        },
                        onsubmit: e => {
                            e.preventDefault(), o()
                        }
                    }, Mt("label", e.state.phrase("Go to line"), ": ", t), " ", Mt("button", {
                        class: "cm-button",
                        type: "submit"
                    }, e.state.phrase("go")));

                function o() {
                    let n = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
                    if (!n) return;
                    let {
                        state: o
                    } = e, r = o.doc.lineAt(o.selection.main.head), [, s, l, a, c] = n, h = a ? +a.slice(1) : 0, u = l ? +l : r.number;
                    if (l && c) {
                        let e = u / 100;
                        s && (e = e * ("-" == s ? -1 : 1) + r.number / o.doc.lines), u = Math.round(o.doc.lines * e)
                    } else l && s && (u = u * ("-" == s ? -1 : 1) + r.number);
                    let f = o.doc.line(Math.max(1, Math.min(o.doc.lines, u)));
                    e.dispatch({
                        effects: Ft.of(!1),
                        selection: i["f"].cursor(f.from + Math.max(0, Math.min(h, f.length))),
                        scrollIntoView: !0
                    }), e.focus()
                }
                return {
                    dom: n
                }
            }
            "undefined" != typeof Symbol && (Et.prototype[Symbol.iterator] = Tt.prototype[Symbol.iterator] = function() {
                return this
            });
            const Ft = i["n"].define(),
                Nt = i["o"].define({
                    create() {
                        return !0
                    },
                    update(e, t) {
                        for (let n of t.effects) n.is(Ft) && (e = n.value);
                        return e
                    },
                    provide: e => o["v"].from(e, e => e ? $t : null)
                }),
                Ut = e => {
                    let t = Object(o["j"])(e, $t);
                    if (!t) {
                        let n = [Ft.of(!0)];
                        null == e.state.field(Nt, !1) && n.push(i["n"].appendConfig.of([Nt, Vt])), e.dispatch({
                            effects: n
                        }), t = Object(o["j"])(e, $t)
                    }
                    return t && t.dom.querySelector("input").focus(), !0
                },
                Vt = o["c"].baseTheme({
                    ".cm-panel.cm-gotoLine": {
                        padding: "2px 6px 4px",
                        "& label": {
                            fontSize: "80%"
                        }
                    }
                }),
                _t = {
                    highlightWordAroundCursor: !1,
                    minSelectionLength: 1,
                    maxMatches: 100,
                    wholeWords: !1
                },
                zt = i["h"].define({
                    combine(e) {
                        return Object(i["t"])(e, _t, {
                            highlightWordAroundCursor: (e, t) => e || t,
                            minSelectionLength: Math.min,
                            maxMatches: Math.min
                        })
                    }
                });

            function Ht(e) {
                let t = [Yt, Xt];
                return e && t.push(zt.of(e)), t
            }
            const Jt = o["a"].mark({
                    class: "cm-selectionMatch"
                }),
                Gt = o["a"].mark({
                    class: "cm-selectionMatch cm-selectionMatch-main"
                });

            function Qt(e, t, n, o) {
                return (0 == n || e(t.sliceDoc(n - 1, n)) != i["d"].Word) && (o == t.doc.length || e(t.sliceDoc(o, o + 1)) != i["d"].Word)
            }

            function Kt(e, t, n, o) {
                return e(t.sliceDoc(n, n + 1)) == i["d"].Word && e(t.sliceDoc(o - 1, o)) == i["d"].Word
            }
            const Xt = o["e"].fromClass(class {
                    constructor(e) {
                        this.decorations = this.getDeco(e)
                    }
                    update(e) {
                        (e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view))
                    }
                    getDeco(e) {
                        let t = e.state.facet(zt),
                            {
                                state: n
                            } = e,
                            i = n.selection;
                        if (i.ranges.length > 1) return o["a"].none;
                        let r, s = i.main,
                            l = null;
                        if (s.empty) {
                            if (!t.highlightWordAroundCursor) return o["a"].none;
                            let e = n.wordAt(s.head);
                            if (!e) return o["a"].none;
                            l = n.charCategorizer(s.head), r = n.sliceDoc(e.from, e.to)
                        } else {
                            let e = s.to - s.from;
                            if (e < t.minSelectionLength || e > 200) return o["a"].none;
                            if (t.wholeWords) {
                                if (r = n.sliceDoc(s.from, s.to), l = n.charCategorizer(s.head), !Qt(l, n, s.from, s.to) || !Kt(l, n, s.from, s.to)) return o["a"].none
                            } else if (r = n.sliceDoc(s.from, s.to).trim(), !r) return o["a"].none
                        }
                        let a = [];
                        for (let c of e.visibleRanges) {
                            let e = new It(n.doc, r, c.from, c.to);
                            while (!e.next().done) {
                                let {
                                    from: i,
                                    to: r
                                } = e.value;
                                if ((!l || Qt(l, n, i, r)) && (s.empty && i <= s.from && r >= s.to ? a.push(Gt.range(i, r)) : (i >= s.to || r <= s.from) && a.push(Jt.range(i, r)), a.length > t.maxMatches)) return o["a"].none
                            }
                        }
                        return o["a"].set(a)
                    }
                }, {
                    decorations: e => e.decorations
                }),
                Yt = o["c"].baseTheme({
                    ".cm-selectionMatch": {
                        backgroundColor: "#99ff7780"
                    },
                    ".cm-searchMatch .cm-selectionMatch": {
                        backgroundColor: "transparent"
                    }
                }),
                Zt = ({
                    state: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, o = i["f"].create(n.ranges.map(t => e.wordAt(t.head) || i["f"].cursor(t.head)), n.mainIndex);
                    return !o.eq(n) && (t(e.update({
                        selection: o
                    })), !0)
                };

            function en(e, t) {
                let {
                    main: n,
                    ranges: o
                } = e.selection, i = e.wordAt(n.head), r = i && i.from == n.from && i.to == n.to;
                for (let s = !1, l = new It(e.doc, t, o[o.length - 1].to);;) {
                    if (l.next(), !l.done) {
                        if (s && o.some(e => e.from == l.value.from)) continue;
                        if (r) {
                            let t = e.wordAt(l.value.from);
                            if (!t || t.from != l.value.from || t.to != l.value.to) continue
                        }
                        return l.value
                    }
                    if (s) return null;
                    l = new It(e.doc, t, 0, Math.max(0, o[o.length - 1].from - 1)), s = !0
                }
            }
            const tn = ({
                    state: e,
                    dispatch: t
                }) => {
                    let {
                        ranges: n
                    } = e.selection;
                    if (n.some(e => e.from === e.to)) return Zt({
                        state: e,
                        dispatch: t
                    });
                    let r = e.sliceDoc(n[0].from, n[0].to);
                    if (e.selection.ranges.some(t => e.sliceDoc(t.from, t.to) != r)) return !1;
                    let s = en(e, r);
                    return !!s && (t(e.update({
                        selection: e.selection.addRange(i["f"].range(s.from, s.to), !1),
                        effects: o["c"].scrollIntoView(s.to)
                    })), !0)
                },
                nn = i["h"].define({
                    combine(e) {
                        return Object(i["t"])(e, {
                            top: !1,
                            caseSensitive: !1,
                            literal: !1,
                            wholeWord: !1,
                            createPanel: e => new En(e)
                        })
                    }
                });
            class on {
                constructor(e) {
                    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || qt(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord
                }
                unquote(e) {
                    return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, t) => "n" == t ? "\n" : "r" == t ? "\r" : "t" == t ? "\t" : "\\")
                }
                eq(e) {
                    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord
                }
                create() {
                    return this.regexp ? new dn(this) : new an(this)
                }
                getCursor(e, t = 0, n) {
                    let o = e.doc ? e : i["g"].create({
                        doc: e
                    });
                    return null == n && (n = o.doc.length), this.regexp ? cn(this, o, t, n) : sn(this, o, t, n)
                }
            }
            class rn {
                constructor(e) {
                    this.spec = e
                }
            }

            function sn(e, t, n, o) {
                return new It(t.doc, e.unquoted, n, o, e.caseSensitive ? void 0 : e => e.toLowerCase(), e.wholeWord ? ln(t.doc, t.charCategorizer(t.selection.main.head)) : void 0)
            }

            function ln(e, t) {
                return (n, o, r, s) => ((s > n || s + r.length < o) && (s = Math.max(0, n - 2), r = e.sliceString(s, Math.min(e.length, o + 2))), (t(hn(r, n - s)) != i["d"].Word || t(un(r, n - s)) != i["d"].Word) && (t(un(r, o - s)) != i["d"].Word || t(hn(r, o - s)) != i["d"].Word))
            }
            class an extends rn {
                constructor(e) {
                    super(e)
                }
                nextMatch(e, t, n) {
                    let o = sn(this.spec, e, n, e.doc.length).nextOverlapping();
                    return o.done && (o = sn(this.spec, e, 0, t).nextOverlapping()), o.done ? null : o.value
                }
                prevMatchInRange(e, t, n) {
                    for (let o = n;;) {
                        let n = Math.max(t, o - 1e4 - this.spec.unquoted.length),
                            i = sn(this.spec, e, n, o),
                            r = null;
                        while (!i.nextOverlapping().done) r = i.value;
                        if (r) return r;
                        if (n == t) return null;
                        o -= 1e4
                    }
                }
                prevMatch(e, t, n) {
                    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length)
                }
                getReplacement(e) {
                    return this.spec.unquote(this.spec.replace)
                }
                matchAll(e, t) {
                    let n = sn(this.spec, e, 0, e.doc.length),
                        o = [];
                    while (!n.next().done) {
                        if (o.length >= t) return null;
                        o.push(n.value)
                    }
                    return o
                }
                highlight(e, t, n, o) {
                    let i = sn(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
                    while (!i.next().done) o(i.value.from, i.value.to)
                }
            }

            function cn(e, t, n, o) {
                return new Et(t.doc, e.search, {
                    ignoreCase: !e.caseSensitive,
                    test: e.wholeWord ? fn(t.charCategorizer(t.selection.main.head)) : void 0
                }, n, o)
            }

            function hn(e, t) {
                return e.slice(Object(i["v"])(e, t, !1), t)
            }

            function un(e, t) {
                return e.slice(t, Object(i["v"])(e, t))
            }

            function fn(e) {
                return (t, n, o) => !o[0].length || (e(hn(o.input, o.index)) != i["d"].Word || e(un(o.input, o.index)) != i["d"].Word) && (e(un(o.input, o.index + o[0].length)) != i["d"].Word || e(hn(o.input, o.index + o[0].length)) != i["d"].Word)
            }
            class dn extends rn {
                nextMatch(e, t, n) {
                    let o = cn(this.spec, e, n, e.doc.length).next();
                    return o.done && (o = cn(this.spec, e, 0, t).next()), o.done ? null : o.value
                }
                prevMatchInRange(e, t, n) {
                    for (let o = 1;; o++) {
                        let i = Math.max(t, n - 1e4 * o),
                            r = cn(this.spec, e, i, n),
                            s = null;
                        while (!r.next().done) s = r.value;
                        if (s && (i == t || s.from > i + 10)) return s;
                        if (i == t) return null
                    }
                }
                prevMatch(e, t, n) {
                    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length)
                }
                getReplacement(e) {
                    return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (t, n) => "$" == n ? "$" : "&" == n ? e.match[0] : "0" != n && +n < e.match.length ? e.match[n] : t))
                }
                matchAll(e, t) {
                    let n = cn(this.spec, e, 0, e.doc.length),
                        o = [];
                    while (!n.next().done) {
                        if (o.length >= t) return null;
                        o.push(n.value)
                    }
                    return o
                }
                highlight(e, t, n, o) {
                    let i = cn(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.doc.length));
                    while (!i.next().done) o(i.value.from, i.value.to)
                }
            }
            const mn = i["n"].define(),
                pn = i["n"].define(),
                gn = i["o"].define({
                    create(e) {
                        return new vn(jn(e).create(), null)
                    },
                    update(e, t) {
                        for (let n of t.effects) n.is(mn) ? e = new vn(n.value.create(), e.panel) : n.is(pn) && (e = new vn(e.query, n.value ? Dn : null));
                        return e
                    },
                    provide: e => o["v"].from(e, e => e.panel)
                });
            class vn {
                constructor(e, t) {
                    this.query = e, this.panel = t
                }
            }
            const bn = o["a"].mark({
                    class: "cm-searchMatch"
                }),
                wn = o["a"].mark({
                    class: "cm-searchMatch cm-searchMatch-selected"
                }),
                yn = o["e"].fromClass(class {
                    constructor(e) {
                        this.view = e, this.decorations = this.highlight(e.state.field(gn))
                    }
                    update(e) {
                        let t = e.state.field(gn);
                        (t != e.startState.field(gn) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(t))
                    }
                    highlight({
                        query: e,
                        panel: t
                    }) {
                        if (!t || !e.spec.valid) return o["a"].none;
                        let {
                            view: n
                        } = this, r = new i["l"];
                        for (let o = 0, i = n.visibleRanges, s = i.length; o < s; o++) {
                            let {
                                from: t,
                                to: l
                            } = i[o];
                            while (o < s - 1 && l > i[o + 1].from - 500) l = i[++o].to;
                            e.highlight(n.state, t, l, (e, t) => {
                                let o = n.state.selection.ranges.some(n => n.from == e && n.to == t);
                                r.add(e, t, o ? wn : bn)
                            })
                        }
                        return r.finish()
                    }
                }, {
                    decorations: e => e.decorations
                });

            function xn(e) {
                return t => {
                    let n = t.state.field(gn, !1);
                    return n && n.query.spec.valid ? e(t, n) : In(t)
                }
            }
            const kn = xn((e, {
                    query: t
                }) => {
                    let {
                        to: n
                    } = e.state.selection.main, o = t.nextMatch(e.state, n, n);
                    return !!o && (e.dispatch({
                        selection: {
                            anchor: o.from,
                            head: o.to
                        },
                        scrollIntoView: !0,
                        effects: qn(e, o),
                        userEvent: "select.search"
                    }), !0)
                }),
                On = xn((e, {
                    query: t
                }) => {
                    let {
                        state: n
                    } = e, {
                        from: o
                    } = n.selection.main, i = t.prevMatch(n, o, o);
                    return !!i && (e.dispatch({
                        selection: {
                            anchor: i.from,
                            head: i.to
                        },
                        scrollIntoView: !0,
                        effects: qn(e, i),
                        userEvent: "select.search"
                    }), !0)
                }),
                An = xn((e, {
                    query: t
                }) => {
                    let n = t.matchAll(e.state, 1e3);
                    return !(!n || !n.length) && (e.dispatch({
                        selection: i["f"].create(n.map(e => i["f"].range(e.from, e.to))),
                        userEvent: "select.search.matches"
                    }), !0)
                }),
                Cn = ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = e.selection;
                    if (n.ranges.length > 1 || n.main.empty) return !1;
                    let {
                        from: o,
                        to: r
                    } = n.main, s = [], l = 0;
                    for (let a = new It(e.doc, e.sliceDoc(o, r)); !a.next().done;) {
                        if (s.length > 1e3) return !1;
                        a.value.from == o && (l = s.length), s.push(i["f"].range(a.value.from, a.value.to))
                    }
                    return t(e.update({
                        selection: i["f"].create(s, l),
                        userEvent: "select.search.matches"
                    })), !0
                },
                Sn = xn((e, {
                    query: t
                }) => {
                    let {
                        state: n
                    } = e, {
                        from: i,
                        to: r
                    } = n.selection.main;
                    if (n.readOnly) return !1;
                    let s = t.nextMatch(n, i, i);
                    if (!s) return !1;
                    let l, a, c = [],
                        h = [];
                    if (s.from == i && s.to == r && (a = n.toText(t.getReplacement(s)), c.push({
                            from: s.from,
                            to: s.to,
                            insert: a
                        }), s = t.nextMatch(n, s.from, s.to), h.push(o["c"].announce.of(n.phrase("replaced match on line $", n.doc.lineAt(i).number) + "."))), s) {
                        let t = 0 == c.length || c[0].from >= s.to ? 0 : s.to - s.from - a.length;
                        l = {
                            anchor: s.from - t,
                            head: s.to - t
                        }, h.push(qn(e, s))
                    }
                    return e.dispatch({
                        changes: c,
                        selection: l,
                        scrollIntoView: !!l,
                        effects: h,
                        userEvent: "input.replace"
                    }), !0
                }),
                Mn = xn((e, {
                    query: t
                }) => {
                    if (e.state.readOnly) return !1;
                    let n = t.matchAll(e.state, 1e9).map(e => {
                        let {
                            from: n,
                            to: o
                        } = e;
                        return {
                            from: n,
                            to: o,
                            insert: t.getReplacement(e)
                        }
                    });
                    if (!n.length) return !1;
                    let i = e.state.phrase("replaced $ matches", n.length) + ".";
                    return e.dispatch({
                        changes: n,
                        effects: o["c"].announce.of(i),
                        userEvent: "input.replace.all"
                    }), !0
                });

            function Dn(e) {
                return e.state.facet(nn).createPanel(e)
            }

            function jn(e, t) {
                var n, o, i, r;
                let s = e.selection.main,
                    l = s.empty || s.to > s.from + 100 ? "" : e.sliceDoc(s.from, s.to);
                if (t && !l) return t;
                let a = e.facet(nn);
                return new on({
                    search: (null !== (n = null === t || void 0 === t ? void 0 : t.literal) && void 0 !== n ? n : a.literal) ? l : l.replace(/\n/g, "\\n"),
                    caseSensitive: null !== (o = null === t || void 0 === t ? void 0 : t.caseSensitive) && void 0 !== o ? o : a.caseSensitive,
                    literal: null !== (i = null === t || void 0 === t ? void 0 : t.literal) && void 0 !== i ? i : a.literal,
                    wholeWord: null !== (r = null === t || void 0 === t ? void 0 : t.wholeWord) && void 0 !== r ? r : a.wholeWord
                })
            }
            const In = e => {
                    let t = e.state.field(gn, !1);
                    if (t && t.panel) {
                        let n = Object(o["j"])(e, Dn);
                        if (!n) return !1;
                        let i = n.dom.querySelector("[main-field]");
                        if (i && i != e.root.activeElement) {
                            let n = jn(e.state, t.query.spec);
                            n.valid && e.dispatch({
                                effects: mn.of(n)
                            }), i.focus(), i.select()
                        }
                    } else e.dispatch({
                        effects: [pn.of(!0), t ? mn.of(jn(e.state, t.query.spec)) : i["n"].appendConfig.of($n)]
                    });
                    return !0
                },
                Rn = e => {
                    let t = e.state.field(gn, !1);
                    if (!t || !t.panel) return !1;
                    let n = Object(o["j"])(e, Dn);
                    return n && n.dom.contains(e.root.activeElement) && e.focus(), e.dispatch({
                        effects: pn.of(!1)
                    }), !0
                },
                Ln = [{
                    key: "Mod-f",
                    run: In,
                    scope: "editor search-panel"
                }, {
                    key: "F3",
                    run: kn,
                    shift: On,
                    scope: "editor search-panel",
                    preventDefault: !0
                }, {
                    key: "Mod-g",
                    run: kn,
                    shift: On,
                    scope: "editor search-panel",
                    preventDefault: !0
                }, {
                    key: "Escape",
                    run: Rn,
                    scope: "editor search-panel"
                }, {
                    key: "Mod-Shift-l",
                    run: Cn
                }, {
                    key: "Alt-g",
                    run: Ut
                }, {
                    key: "Mod-d",
                    run: tn,
                    preventDefault: !0
                }];
            class En {
                constructor(e) {
                    this.view = e;
                    let t = this.query = e.state.field(gn).query.spec;

                    function n(e, t, n) {
                        return Mt("button", {
                            class: "cm-button",
                            name: e,
                            onclick: t,
                            type: "button"
                        }, n)
                    }
                    this.commit = this.commit.bind(this), this.searchField = Mt("input", {
                        value: t.search,
                        placeholder: Bn(e, "Find"),
                        "aria-label": Bn(e, "Find"),
                        class: "cm-textfield",
                        name: "search",
                        form: "",
                        "main-field": "true",
                        onchange: this.commit,
                        onkeyup: this.commit
                    }), this.replaceField = Mt("input", {
                        value: t.replace,
                        placeholder: Bn(e, "Replace"),
                        "aria-label": Bn(e, "Replace"),
                        class: "cm-textfield",
                        name: "replace",
                        form: "",
                        onchange: this.commit,
                        onkeyup: this.commit
                    }), this.caseField = Mt("input", {
                        type: "checkbox",
                        name: "case",
                        form: "",
                        checked: t.caseSensitive,
                        onchange: this.commit
                    }), this.reField = Mt("input", {
                        type: "checkbox",
                        name: "re",
                        form: "",
                        checked: t.regexp,
                        onchange: this.commit
                    }), this.wordField = Mt("input", {
                        type: "checkbox",
                        name: "word",
                        form: "",
                        checked: t.wholeWord,
                        onchange: this.commit
                    }), this.dom = Mt("div", {
                        onkeydown: e => this.keydown(e),
                        class: "cm-search"
                    }, [this.searchField, n("next", () => kn(e), [Bn(e, "next")]), n("prev", () => On(e), [Bn(e, "previous")]), n("select", () => An(e), [Bn(e, "all")]), Mt("label", null, [this.caseField, Bn(e, "match case")]), Mt("label", null, [this.reField, Bn(e, "regexp")]), Mt("label", null, [this.wordField, Bn(e, "by word")]), ...e.state.readOnly ? [] : [Mt("br"), this.replaceField, n("replace", () => Sn(e), [Bn(e, "replace")]), n("replaceAll", () => Mn(e), [Bn(e, "replace all")]), Mt("button", {
                        name: "close",
                        onclick: () => Rn(e),
                        "aria-label": Bn(e, "close"),
                        type: "button"
                    }, ["×"])]])
                }
                commit() {
                    let e = new on({
                        search: this.searchField.value,
                        caseSensitive: this.caseField.checked,
                        regexp: this.reField.checked,
                        wholeWord: this.wordField.checked,
                        replace: this.replaceField.value
                    });
                    e.eq(this.query) || (this.query = e, this.view.dispatch({
                        effects: mn.of(e)
                    }))
                }
                keydown(e) {
                    Object(o["u"])(this.view, e, "search-panel") ? e.preventDefault() : 13 == e.keyCode && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? On : kn)(this.view)) : 13 == e.keyCode && e.target == this.replaceField && (e.preventDefault(), Sn(this.view))
                }
                update(e) {
                    for (let t of e.transactions)
                        for (let e of t.effects) e.is(mn) && !e.value.eq(this.query) && this.setQuery(e.value)
                }
                setQuery(e) {
                    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord
                }
                mount() {
                    this.searchField.select()
                }
                get pos() {
                    return 80
                }
                get top() {
                    return this.view.state.facet(nn).top
                }
            }

            function Bn(e, t) {
                return e.state.phrase(t)
            }
            const Pn = 30,
                Tn = /[\s\.,:;?!]/;

            function qn(e, {
                from: t,
                to: n
            }) {
                let i = e.state.doc.lineAt(t),
                    r = e.state.doc.lineAt(n).to,
                    s = Math.max(i.from, t - Pn),
                    l = Math.min(r, n + Pn),
                    a = e.state.sliceDoc(s, l);
                if (s != i.from)
                    for (let o = 0; o < Pn; o++)
                        if (!Tn.test(a[o + 1]) && Tn.test(a[o])) {
                            a = a.slice(o);
                            break
                        }
                if (l != r)
                    for (let o = a.length - 1; o > a.length - Pn; o--)
                        if (!Tn.test(a[o - 1]) && Tn.test(a[o])) {
                            a = a.slice(0, o);
                            break
                        }
                return o["c"].announce.of(`${e.state.phrase("current match")}. ${a} ${e.state.phrase("on line")} ${i.number}.`)
            }
            const Wn = o["c"].baseTheme({
                    ".cm-panel.cm-search": {
                        padding: "2px 6px 4px",
                        position: "relative",
                        "& [name=close]": {
                            position: "absolute",
                            top: "0",
                            right: "4px",
                            backgroundColor: "inherit",
                            border: "none",
                            font: "inherit",
                            padding: 0,
                            margin: 0
                        },
                        "& input, & button, & label": {
                            margin: ".2em .6em .2em 0"
                        },
                        "& input[type=checkbox]": {
                            marginRight: ".2em"
                        },
                        "& label": {
                            fontSize: "80%",
                            whiteSpace: "pre"
                        }
                    },
                    "&light .cm-searchMatch": {
                        backgroundColor: "#ffff0054"
                    },
                    "&dark .cm-searchMatch": {
                        backgroundColor: "#00ffff8a"
                    },
                    "&light .cm-searchMatch-selected": {
                        backgroundColor: "#ff6a0054"
                    },
                    "&dark .cm-searchMatch-selected": {
                        backgroundColor: "#ff00ff8a"
                    }
                }),
                $n = [gn, i["j"].lowest(yn), Wn];
            class Fn {
                constructor(e, t, n) {
                    this.state = e, this.pos = t, this.explicit = n, this.abortListeners = []
                }
                tokenBefore(e) {
                    let t = Object(r["t"])(this.state).resolveInner(this.pos, -1);
                    while (t && e.indexOf(t.name) < 0) t = t.parent;
                    return t ? {
                        from: t.from,
                        to: this.pos,
                        text: this.state.sliceDoc(t.from, this.pos),
                        type: t.type
                    } : null
                }
                matchBefore(e) {
                    let t = this.state.doc.lineAt(this.pos),
                        n = Math.max(t.from, this.pos - 250),
                        o = t.text.slice(n - t.from, this.pos - t.from),
                        i = o.search(Hn(e, !1));
                    return i < 0 ? null : {
                        from: n + i,
                        to: this.pos,
                        text: o.slice(i)
                    }
                }
                get aborted() {
                    return null == this.abortListeners
                }
                addEventListener(e, t) {
                    "abort" == e && this.abortListeners && this.abortListeners.push(t)
                }
            }

            function Nn(e) {
                let t = Object.keys(e).join(""),
                    n = /\w/.test(t);
                return n && (t = t.replace(/\w/g, "")), `[${n?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`
            }

            function Un(e) {
                let t = Object.create(null),
                    n = Object.create(null);
                for (let {
                        label: i
                    } of e) {
                    t[i[0]] = !0;
                    for (let e = 1; e < i.length; e++) n[i[e]] = !0
                }
                let o = Nn(t) + Nn(n) + "*$";
                return [new RegExp("^" + o), new RegExp(o)]
            }

            function Vn(e) {
                let t = e.map(e => "string" == typeof e ? {
                        label: e
                    } : e),
                    [n, o] = t.every(e => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : Un(t);
                return e => {
                    let i = e.matchBefore(o);
                    return i || e.explicit ? {
                        from: i ? i.from : e.pos,
                        options: t,
                        validFor: n
                    } : null
                }
            }
            class _n {
                constructor(e, t, n) {
                    this.completion = e, this.source = t, this.match = n
                }
            }

            function zn(e) {
                return e.selection.main.head
            }

            function Hn(e, t) {
                var n;
                let {
                    source: o
                } = e, i = t && "^" != o[0], r = "$" != o[o.length - 1];
                return i || r ? new RegExp(`${i?"^":""}(?:${o})${r?"$":""}`, null !== (n = e.flags) && void 0 !== n ? n : e.ignoreCase ? "i" : "") : e
            }

            function Jn(e, t, n, o) {
                return Object.assign(Object.assign({}, e.changeByRange(r => {
                    if (r == e.selection.main) return {
                        changes: {
                            from: n,
                            to: o,
                            insert: t
                        },
                        range: i["f"].cursor(n + t.length)
                    };
                    let s = o - n;
                    return !r.empty || s && e.sliceDoc(r.from - s, r.from) != e.sliceDoc(n, o) ? {
                        range: r
                    } : {
                        changes: {
                            from: r.from - s,
                            to: r.from,
                            insert: t
                        },
                        range: i["f"].cursor(r.from - s + t.length)
                    }
                })), {
                    userEvent: "input.complete"
                })
            }

            function Gn(e, t) {
                const n = t.completion.apply || t.completion.label;
                let o = t.source;
                "string" == typeof n ? e.dispatch(Jn(e.state, n, o.from, o.to)) : n(e, t.completion, o.from, o.to)
            }
            const Qn = new WeakMap;

            function Kn(e) {
                if (!Array.isArray(e)) return e;
                let t = Qn.get(e);
                return t || Qn.set(e, t = Vn(e)), t
            }
            class Xn {
                constructor(e) {
                    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
                    for (let t = 0; t < e.length;) {
                        let n = Object(i["r"])(e, t),
                            o = Object(i["s"])(n);
                        this.chars.push(n);
                        let r = e.slice(t, t + o),
                            s = r.toUpperCase();
                        this.folded.push(Object(i["r"])(s == r ? r.toLowerCase() : s, 0)), t += o
                    }
                    this.astral = e.length != this.chars.length
                }
                match(e) {
                    if (0 == this.pattern.length) return [0];
                    if (e.length < this.pattern.length) return null;
                    let {
                        chars: t,
                        folded: n,
                        any: o,
                        precise: r,
                        byWord: s
                    } = this;
                    if (1 == t.length) {
                        let o = Object(i["r"])(e, 0);
                        return o == t[0] ? [0, 0, Object(i["s"])(o)] : o == n[0] ? [-200, 0, Object(i["s"])(o)] : null
                    }
                    let l = e.indexOf(this.pattern);
                    if (0 == l) return [0, 0, this.pattern.length];
                    let a = t.length,
                        c = 0;
                    if (l < 0) {
                        for (let r = 0, s = Math.min(e.length, 200); r < s && c < a;) {
                            let s = Object(i["r"])(e, r);
                            s != t[c] && s != n[c] || (o[c++] = r), r += Object(i["s"])(s)
                        }
                        if (c < a) return null
                    }
                    let h = 0,
                        u = 0,
                        f = !1,
                        d = 0,
                        m = -1,
                        p = -1,
                        g = /[a-z]/.test(e),
                        v = !0;
                    for (let b = 0, w = Math.min(e.length, 200), y = 0; b < w && u < a;) {
                        let o = Object(i["r"])(e, b);
                        l < 0 && (h < a && o == t[h] && (r[h++] = b), d < a && (o == t[d] || o == n[d] ? (0 == d && (m = b), p = b + 1, d++) : d = 0));
                        let c, w = o < 255 ? o >= 48 && o <= 57 || o >= 97 && o <= 122 ? 2 : o >= 65 && o <= 90 ? 1 : 0 : (c = Object(i["x"])(o)) != c.toLowerCase() ? 1 : c != c.toUpperCase() ? 2 : 0;
                        (!b || 1 == w && g || 0 == y && 0 != w) && (t[u] == o || n[u] == o && (f = !0) ? s[u++] = b : s.length && (v = !1)), y = w, b += Object(i["s"])(o)
                    }
                    return u == a && 0 == s[0] && v ? this.result((f ? -200 : 0) - 100, s, e) : d == a && 0 == m ? [-200 - e.length, 0, p] : l > -1 ? [-700 - e.length, l, l + this.pattern.length] : d == a ? [-900 - e.length, m, p] : u == a ? this.result((f ? -200 : 0) - 100 - 700 + (v ? 0 : -1100), s, e) : 2 == t.length ? null : this.result((o[0] ? -700 : 0) - 200 - 1100, o, e)
                }
                result(e, t, n) {
                    let o = [e - n.length],
                        r = 1;
                    for (let s of t) {
                        let e = s + (this.astral ? Object(i["s"])(Object(i["r"])(n, s)) : 1);
                        r > 1 && o[r - 1] == s ? o[r - 1] = e : (o[r++] = s, o[r++] = e)
                    }
                    return o
                }
            }
            const Yn = i["h"].define({
                combine(e) {
                    return Object(i["t"])(e, {
                        activateOnTyping: !0,
                        selectOnOpen: !0,
                        override: null,
                        closeOnBlur: !0,
                        maxRenderedOptions: 100,
                        defaultKeymap: !0,
                        optionClass: () => "",
                        aboveCursor: !1,
                        icons: !0,
                        addToOptions: [],
                        compareCompletions: (e, t) => e.label.localeCompare(t.label),
                        interactionDelay: 75
                    }, {
                        defaultKeymap: (e, t) => e && t,
                        closeOnBlur: (e, t) => e && t,
                        icons: (e, t) => e && t,
                        optionClass: (e, t) => n => Zn(e(n), t(n)),
                        addToOptions: (e, t) => e.concat(t)
                    })
                }
            });

            function Zn(e, t) {
                return e ? t ? e + " " + t : e : t
            }

            function eo(e) {
                let t = e.addToOptions.slice();
                return e.icons && t.push({
                    render(e) {
                        let t = document.createElement("div");
                        return t.classList.add("cm-completionIcon"), e.type && t.classList.add(...e.type.split(/\s+/g).map(e => "cm-completionIcon-" + e)), t.setAttribute("aria-hidden", "true"), t
                    },
                    position: 20
                }), t.push({
                    render(e, t, n) {
                        let o = document.createElement("span");
                        o.className = "cm-completionLabel";
                        let {
                            label: i
                        } = e, r = 0;
                        for (let s = 1; s < n.length;) {
                            let e = n[s++],
                                t = n[s++];
                            e > r && o.appendChild(document.createTextNode(i.slice(r, e)));
                            let l = o.appendChild(document.createElement("span"));
                            l.appendChild(document.createTextNode(i.slice(e, t))), l.className = "cm-completionMatchedText", r = t
                        }
                        return r < i.length && o.appendChild(document.createTextNode(i.slice(r))), o
                    },
                    position: 50
                }, {
                    render(e) {
                        if (!e.detail) return null;
                        let t = document.createElement("span");
                        return t.className = "cm-completionDetail", t.textContent = e.detail, t
                    },
                    position: 80
                }), t.sort((e, t) => e.position - t.position).map(e => e.render)
            }

            function to(e, t, n) {
                if (e <= n) return {
                    from: 0,
                    to: e
                };
                if (t < 0 && (t = 0), t <= e >> 1) {
                    let e = Math.floor(t / n);
                    return {
                        from: e * n,
                        to: (e + 1) * n
                    }
                }
                let o = Math.floor((e - t) / n);
                return {
                    from: e - (o + 1) * n,
                    to: e - o * n
                }
            }
            class no {
                constructor(e, t) {
                    this.view = e, this.stateField = t, this.info = null, this.placeInfo = {
                        read: () => this.measureInfo(),
                        write: e => this.positionInfo(e),
                        key: this
                    };
                    let n = e.state.field(t),
                        {
                            options: o,
                            selected: i
                        } = n.open,
                        r = e.state.facet(Yn);
                    this.optionContent = eo(r), this.optionClass = r.optionClass, this.range = to(o.length, i, r.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.dom.addEventListener("mousedown", t => {
                        for (let n, i = t.target; i && i != this.dom; i = i.parentNode)
                            if ("LI" == i.nodeName && (n = /-(\d+)$/.exec(i.id)) && +n[1] < o.length) return Gn(e, o[+n[1]]), void t.preventDefault()
                    }), this.list = this.dom.appendChild(this.createListBox(o, n.id, this.range)), this.list.addEventListener("scroll", () => {
                        this.info && this.view.requestMeasure(this.placeInfo)
                    })
                }
                mount() {
                    this.updateSel()
                }
                update(e) {
                    e.state.field(this.stateField) != e.startState.field(this.stateField) && this.updateSel()
                }
                positioned() {
                    this.info && this.view.requestMeasure(this.placeInfo)
                }
                updateSel() {
                    let e = this.view.state.field(this.stateField),
                        t = e.open;
                    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = to(t.options.length, t.selected, this.view.state.facet(Yn).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t.options, e.id, this.range)), this.list.addEventListener("scroll", () => {
                            this.info && this.view.requestMeasure(this.placeInfo)
                        })), this.updateSelectedOption(t.selected)) {
                        this.info && (this.info.remove(), this.info = null);
                        let {
                            completion: n
                        } = t.options[t.selected], {
                            info: i
                        } = n;
                        if (!i) return;
                        let r = "string" === typeof i ? document.createTextNode(i) : i(n);
                        if (!r) return;
                        "then" in r ? r.then(t => {
                            t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t)
                        }).catch(e => Object(o["s"])(this.view.state, e, "completion info")) : this.addInfoPane(r)
                    }
                }
                addInfoPane(e) {
                    let t = this.info = document.createElement("div");
                    t.className = "cm-tooltip cm-completionInfo", t.appendChild(e), this.dom.appendChild(t), this.view.requestMeasure(this.placeInfo)
                }
                updateSelectedOption(e) {
                    let t = null;
                    for (let n = this.list.firstChild, o = this.range.from; n; n = n.nextSibling, o++) o == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
                    return t && io(this.list, t), t
                }
                measureInfo() {
                    let e = this.dom.querySelector("[aria-selected]");
                    if (!e || !this.info) return null;
                    let t = this.dom.ownerDocument.defaultView || window,
                        n = this.dom.getBoundingClientRect(),
                        i = this.info.getBoundingClientRect(),
                        r = e.getBoundingClientRect();
                    if (r.top > Math.min(t.innerHeight, n.bottom) - 10 || r.bottom < Math.max(0, n.top) + 10) return null;
                    let s, l = this.view.textDirection == o["b"].RTL,
                        a = l,
                        c = !1,
                        h = "",
                        u = "",
                        f = n.left,
                        d = t.innerWidth - n.right;
                    if (a && f < Math.min(i.width, d) ? a = !1 : !a && d < Math.min(i.width, f) && (a = !0), i.width <= (a ? f : d)) h = Math.max(0, Math.min(r.top, t.innerHeight - i.height)) - n.top + "px", s = Math.min(400, a ? f : d) + "px";
                    else {
                        c = !0, s = Math.min(400, (l ? n.right : t.innerWidth - n.left) - 30) + "px";
                        let e = t.innerHeight - n.bottom;
                        e >= i.height || e > n.top ? h = r.bottom - n.top + "px" : u = n.bottom - r.top + "px"
                    }
                    return {
                        top: h,
                        bottom: u,
                        maxWidth: s,
                        class: c ? l ? "left-narrow" : "right-narrow" : a ? "left" : "right"
                    }
                }
                positionInfo(e) {
                    this.info && (e ? (this.info.style.top = e.top, this.info.style.bottom = e.bottom, this.info.style.maxWidth = e.maxWidth, this.info.className = "cm-tooltip cm-completionInfo cm-completionInfo-" + e.class) : this.info.style.top = "-1e6px")
                }
                createListBox(e, t, n) {
                    const o = document.createElement("ul");
                    o.id = t, o.setAttribute("role", "listbox"), o.setAttribute("aria-expanded", "true"), o.setAttribute("aria-label", this.view.state.phrase("Completions"));
                    for (let i = n.from; i < n.to; i++) {
                        let {
                            completion: n,
                            match: r
                        } = e[i];
                        const s = o.appendChild(document.createElement("li"));
                        s.id = t + "-" + i, s.setAttribute("role", "option");
                        let l = this.optionClass(n);
                        l && (s.className = l);
                        for (let e of this.optionContent) {
                            let t = e(n, this.view.state, r);
                            t && s.appendChild(t)
                        }
                    }
                    return n.from && o.classList.add("cm-completionListIncompleteTop"), n.to < e.length && o.classList.add("cm-completionListIncompleteBottom"), o
                }
            }

            function oo(e) {
                return t => new no(t, e)
            }

            function io(e, t) {
                let n = e.getBoundingClientRect(),
                    o = t.getBoundingClientRect();
                o.top < n.top ? e.scrollTop -= n.top - o.top : o.bottom > n.bottom && (e.scrollTop += o.bottom - n.bottom)
            }

            function ro(e) {
                return 100 * (e.boost || 0) + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + (e.type ? 1 : 0)
            }

            function so(e, t) {
                let n = [],
                    o = 0;
                for (let l of e)
                    if (l.hasResult())
                        if (!1 === l.result.filter) {
                            let e = l.result.getMatch;
                            for (let t of l.result.options) {
                                let i = [1e9 - o++];
                                if (e)
                                    for (let n of e(t)) i.push(n);
                                n.push(new _n(t, l, i))
                            }
                        } else {
                            let e, o = new Xn(t.sliceDoc(l.from, l.to));
                            for (let t of l.result.options)(e = o.match(t.label)) && (null != t.boost && (e[0] += t.boost), n.push(new _n(t, l, e)))
                        }
                let i = [],
                    r = null,
                    s = t.facet(Yn).compareCompletions;
                for (let l of n.sort((e, t) => t.match[0] - e.match[0] || s(e.completion, t.completion))) !r || r.label != l.completion.label || r.detail != l.completion.detail || null != r.type && null != l.completion.type && r.type != l.completion.type || r.apply != l.completion.apply ? i.push(l) : ro(l.completion) > ro(r) && (i[i.length - 1] = l), r = l.completion;
                return i
            }
            class lo {
                constructor(e, t, n, o, i) {
                    this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = o, this.selected = i
                }
                setSelected(e, t) {
                    return e == this.selected || e >= this.options.length ? this : new lo(this.options, uo(t, e), this.tooltip, this.timestamp, e)
                }
                static build(e, t, n, o, i) {
                    let r = so(e, t);
                    if (!r.length) return null;
                    let s = t.facet(Yn).selectOnOpen ? 0 : -1;
                    if (o && o.selected != s && -1 != o.selected) {
                        let e = o.options[o.selected].completion;
                        for (let t = 0; t < r.length; t++)
                            if (r[t].completion == e) {
                                s = t;
                                break
                            }
                    }
                    return new lo(r, uo(n, s), {
                        pos: e.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
                        create: oo(ko),
                        above: i.aboveCursor
                    }, o ? o.timestamp : Date.now(), s)
                }
                map(e) {
                    return new lo(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
                        pos: e.mapPos(this.tooltip.pos)
                    }), this.timestamp, this.selected)
                }
            }
            class ao {
                constructor(e, t, n) {
                    this.active = e, this.id = t, this.open = n
                }
                static start() {
                    return new ao(fo, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
                }
                update(e) {
                    let {
                        state: t
                    } = e, n = t.facet(Yn), o = n.override || t.languageDataAt("autocomplete", zn(t)).map(Kn), i = o.map(t => {
                        let o = this.active.find(e => e.source == t) || new po(t, this.active.some(e => 0 != e.state) ? 1 : 0);
                        return o.update(e, n)
                    });
                    i.length == this.active.length && i.every((e, t) => e == this.active[t]) && (i = this.active);
                    let r = e.selection || i.some(t => t.hasResult() && e.changes.touchesRange(t.from, t.to)) || !co(i, this.active) ? lo.build(i, t, this.id, this.open, n) : this.open && e.docChanged ? this.open.map(e.changes) : this.open;
                    !r && i.every(e => 1 != e.state) && i.some(e => e.hasResult()) && (i = i.map(e => e.hasResult() ? new po(e.source, 0) : e));
                    for (let s of e.effects) s.is(xo) && (r = r && r.setSelected(s.value, this.id));
                    return i == this.active && r == this.open ? this : new ao(i, this.id, r)
                }
                get tooltip() {
                    return this.open ? this.open.tooltip : null
                }
                get attrs() {
                    return this.open ? this.open.attrs : ho
                }
            }

            function co(e, t) {
                if (e == t) return !0;
                for (let n = 0, o = 0;;) {
                    while (n < e.length && !e[n].hasResult) n++;
                    while (o < t.length && !t[o].hasResult) o++;
                    let i = n == e.length,
                        r = o == t.length;
                    if (i || r) return i == r;
                    if (e[n++].result != t[o++].result) return !1
                }
            }
            const ho = {
                "aria-autocomplete": "list"
            };

            function uo(e, t) {
                let n = {
                    "aria-autocomplete": "list",
                    "aria-haspopup": "listbox",
                    "aria-controls": e
                };
                return t > -1 && (n["aria-activedescendant"] = e + "-" + t), n
            }
            const fo = [];

            function mo(e) {
                return e.isUserEvent("input.type") ? "input" : e.isUserEvent("delete.backward") ? "delete" : null
            }
            class po {
                constructor(e, t, n = -1) {
                    this.source = e, this.state = t, this.explicitPos = n
                }
                hasResult() {
                    return !1
                }
                update(e, t) {
                    let n = mo(e),
                        o = this;
                    n ? o = o.handleUserEvent(e, n, t) : e.docChanged ? o = o.handleChange(e) : e.selection && 0 != o.state && (o = new po(o.source, 0));
                    for (let i of e.effects)
                        if (i.is(bo)) o = new po(o.source, 1, i.value ? zn(e.state) : -1);
                        else if (i.is(wo)) o = new po(o.source, 0);
                    else if (i.is(yo))
                        for (let e of i.value) e.source == o.source && (o = e);
                    return o
                }
                handleUserEvent(e, t, n) {
                    return "delete" != t && n.activateOnTyping ? new po(this.source, 1) : this.map(e.changes)
                }
                handleChange(e) {
                    return e.changes.touchesRange(zn(e.startState)) ? new po(this.source, 0) : this.map(e.changes)
                }
                map(e) {
                    return e.empty || this.explicitPos < 0 ? this : new po(this.source, this.state, e.mapPos(this.explicitPos))
                }
            }
            class go extends po {
                constructor(e, t, n, o, i) {
                    super(e, 2, t), this.result = n, this.from = o, this.to = i
                }
                hasResult() {
                    return !0
                }
                handleUserEvent(e, t, n) {
                    var o;
                    let i = e.changes.mapPos(this.from),
                        r = e.changes.mapPos(this.to, 1),
                        s = zn(e.state);
                    if ((this.explicitPos < 0 ? s <= i : s < this.from) || s > r || "delete" == t && zn(e.startState) == this.from) return new po(this.source, "input" == t && n.activateOnTyping ? 1 : 0);
                    let l, a = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
                    return vo(this.result.validFor, e.state, i, r) ? new go(this.source, a, this.result, i, r) : this.result.update && (l = this.result.update(this.result, i, r, new Fn(e.state, s, a >= 0))) ? new go(this.source, a, l, l.from, null !== (o = l.to) && void 0 !== o ? o : zn(e.state)) : new po(this.source, 1, a)
                }
                handleChange(e) {
                    return e.changes.touchesRange(this.from, this.to) ? new po(this.source, 0) : this.map(e.changes)
                }
                map(e) {
                    return e.empty ? this : new go(this.source, this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos), this.result, e.mapPos(this.from), e.mapPos(this.to, 1))
                }
            }

            function vo(e, t, n, o) {
                if (!e) return !1;
                let i = t.sliceDoc(n, o);
                return "function" == typeof e ? e(i, n, o, t) : Hn(e, !0).test(i)
            }
            const bo = i["n"].define(),
                wo = i["n"].define(),
                yo = i["n"].define({
                    map(e, t) {
                        return e.map(e => e.map(t))
                    }
                }),
                xo = i["n"].define(),
                ko = i["o"].define({
                    create() {
                        return ao.start()
                    },
                    update(e, t) {
                        return e.update(t)
                    },
                    provide: e => [o["w"].from(e, e => e.tooltip), o["c"].contentAttributes.from(e, e => e.attrs)]
                });

            function Oo(e, t = "option") {
                return n => {
                    let i = n.state.field(ko, !1);
                    if (!i || !i.open || Date.now() - i.open.timestamp < n.state.facet(Yn).interactionDelay) return !1;
                    let r, s = 1;
                    "page" == t && (r = Object(o["k"])(n, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
                    let {
                        length: l
                    } = i.open.options, a = i.open.selected > -1 ? i.open.selected + s * (e ? 1 : -1) : e ? 0 : l - 1;
                    return a < 0 ? a = "page" == t ? 0 : l - 1 : a >= l && (a = "page" == t ? l - 1 : 0), n.dispatch({
                        effects: xo.of(a)
                    }), !0
                }
            }
            const Ao = e => {
                    let t = e.state.field(ko, !1);
                    return !(e.state.readOnly || !t || !t.open || t.open.selected < 0 || Date.now() - t.open.timestamp < e.state.facet(Yn).interactionDelay) && (Gn(e, t.open.options[t.open.selected]), !0)
                },
                Co = e => {
                    let t = e.state.field(ko, !1);
                    return !!t && (e.dispatch({
                        effects: bo.of(!0)
                    }), !0)
                },
                So = e => {
                    let t = e.state.field(ko, !1);
                    return !(!t || !t.active.some(e => 0 != e.state)) && (e.dispatch({
                        effects: wo.of(null)
                    }), !0)
                };
            class Mo {
                constructor(e, t) {
                    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0
                }
            }
            const Do = 50,
                jo = 50,
                Io = 1e3,
                Ro = o["e"].fromClass(class {
                    constructor(e) {
                        this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
                        for (let t of e.state.field(ko).active) 1 == t.state && this.startQuery(t)
                    }
                    update(e) {
                        let t = e.state.field(ko);
                        if (!e.selectionSet && !e.docChanged && e.startState.field(ko) == t) return;
                        let n = e.transactions.some(e => (e.selection || e.docChanged) && !mo(e));
                        for (let r = 0; r < this.running.length; r++) {
                            let t = this.running[r];
                            if (n || t.updates.length + e.transactions.length > jo && Date.now() - t.time > Io) {
                                for (let e of t.context.abortListeners) try {
                                    e()
                                } catch (i) {
                                    Object(o["s"])(this.view.state, i)
                                }
                                t.context.abortListeners = null, this.running.splice(r--, 1)
                            } else t.updates.push(...e.transactions)
                        }
                        if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = t.active.some(e => 1 == e.state && !this.running.some(t => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), Do) : -1, 0 != this.composing)
                            for (let o of e.transactions) "input" == mo(o) ? this.composing = 2 : 2 == this.composing && o.selection && (this.composing = 3)
                    }
                    startUpdate() {
                        this.debounceUpdate = -1;
                        let {
                            state: e
                        } = this.view, t = e.field(ko);
                        for (let n of t.active) 1 != n.state || this.running.some(e => e.active.source == n.source) || this.startQuery(n)
                    }
                    startQuery(e) {
                        let {
                            state: t
                        } = this.view, n = zn(t), i = new Fn(t, n, e.explicitPos == n), r = new Mo(e, i);
                        this.running.push(r), Promise.resolve(e.source(i)).then(e => {
                            r.context.aborted || (r.done = e || null, this.scheduleAccept())
                        }, e => {
                            this.view.dispatch({
                                effects: wo.of(null)
                            }), Object(o["s"])(this.view.state, e)
                        })
                    }
                    scheduleAccept() {
                        this.running.every(e => void 0 !== e.done) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), Do))
                    }
                    accept() {
                        var e;
                        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
                        let t = [],
                            n = this.view.state.facet(Yn);
                        for (let o = 0; o < this.running.length; o++) {
                            let i = this.running[o];
                            if (void 0 === i.done) continue;
                            if (this.running.splice(o--, 1), i.done) {
                                let o = new go(i.active.source, i.active.explicitPos, i.done, i.done.from, null !== (e = i.done.to) && void 0 !== e ? e : zn(i.updates.length ? i.updates[0].startState : this.view.state));
                                for (let e of i.updates) o = o.update(e, n);
                                if (o.hasResult()) {
                                    t.push(o);
                                    continue
                                }
                            }
                            let r = this.view.state.field(ko).active.find(e => e.source == i.active.source);
                            if (r && 1 == r.state)
                                if (null == i.done) {
                                    let e = new po(i.active.source, 0);
                                    for (let t of i.updates) e = e.update(t, n);
                                    1 != e.state && t.push(e)
                                } else this.startQuery(r)
                        }
                        t.length && this.view.dispatch({
                            effects: yo.of(t)
                        })
                    }
                }, {
                    eventHandlers: {
                        blur() {
                            let e = this.view.state.field(ko, !1);
                            e && e.tooltip && this.view.state.facet(Yn).closeOnBlur && this.view.dispatch({
                                effects: wo.of(null)
                            })
                        },
                        compositionstart() {
                            this.composing = 1
                        },
                        compositionend() {
                            3 == this.composing && setTimeout(() => this.view.dispatch({
                                effects: bo.of(!1)
                            }), 20), this.composing = 0
                        }
                    }
                }),
                Lo = o["c"].baseTheme({
                    ".cm-tooltip.cm-tooltip-autocomplete": {
                        "& > ul": {
                            fontFamily: "monospace",
                            whiteSpace: "nowrap",
                            overflow: "hidden auto",
                            maxWidth_fallback: "700px",
                            maxWidth: "min(700px, 95vw)",
                            minWidth: "250px",
                            maxHeight: "10em",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            "& > li": {
                                overflowX: "hidden",
                                textOverflow: "ellipsis",
                                cursor: "pointer",
                                padding: "1px 3px",
                                lineHeight: 1.2
                            }
                        }
                    },
                    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
                        background: "#17c",
                        color: "white"
                    },
                    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
                        background: "#347",
                        color: "white"
                    },
                    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
                        content: '"···"',
                        opacity: .5,
                        display: "block",
                        textAlign: "center"
                    },
                    ".cm-tooltip.cm-completionInfo": {
                        position: "absolute",
                        padding: "3px 9px",
                        width: "max-content",
                        maxWidth: "400px",
                        boxSizing: "border-box"
                    },
                    ".cm-completionInfo.cm-completionInfo-left": {
                        right: "100%"
                    },
                    ".cm-completionInfo.cm-completionInfo-right": {
                        left: "100%"
                    },
                    ".cm-completionInfo.cm-completionInfo-left-narrow": {
                        right: "30px"
                    },
                    ".cm-completionInfo.cm-completionInfo-right-narrow": {
                        left: "30px"
                    },
                    "&light .cm-snippetField": {
                        backgroundColor: "#00000022"
                    },
                    "&dark .cm-snippetField": {
                        backgroundColor: "#ffffff22"
                    },
                    ".cm-snippetFieldPosition": {
                        verticalAlign: "text-top",
                        width: 0,
                        height: "1.15em",
                        display: "inline-block",
                        margin: "0 -0.7px -.7em",
                        borderLeft: "1.4px dotted #888"
                    },
                    ".cm-completionMatchedText": {
                        textDecoration: "underline"
                    },
                    ".cm-completionDetail": {
                        marginLeft: "0.5em",
                        fontStyle: "italic"
                    },
                    ".cm-completionIcon": {
                        fontSize: "90%",
                        width: ".8em",
                        display: "inline-block",
                        textAlign: "center",
                        paddingRight: ".6em",
                        opacity: "0.6"
                    },
                    ".cm-completionIcon-function, .cm-completionIcon-method": {
                        "&:after": {
                            content: "'ƒ'"
                        }
                    },
                    ".cm-completionIcon-class": {
                        "&:after": {
                            content: "'○'"
                        }
                    },
                    ".cm-completionIcon-interface": {
                        "&:after": {
                            content: "'◌'"
                        }
                    },
                    ".cm-completionIcon-variable": {
                        "&:after": {
                            content: "'𝑥'"
                        }
                    },
                    ".cm-completionIcon-constant": {
                        "&:after": {
                            content: "'𝐶'"
                        }
                    },
                    ".cm-completionIcon-type": {
                        "&:after": {
                            content: "'𝑡'"
                        }
                    },
                    ".cm-completionIcon-enum": {
                        "&:after": {
                            content: "'∪'"
                        }
                    },
                    ".cm-completionIcon-property": {
                        "&:after": {
                            content: "'□'"
                        }
                    },
                    ".cm-completionIcon-keyword": {
                        "&:after": {
                            content: "'🔑︎'"
                        }
                    },
                    ".cm-completionIcon-namespace": {
                        "&:after": {
                            content: "'▢'"
                        }
                    },
                    ".cm-completionIcon-text": {
                        "&:after": {
                            content: "'abc'",
                            fontSize: "50%",
                            verticalAlign: "middle"
                        }
                    }
                });
            const Eo = {
                    brackets: ["(", "[", "{", "'", '"'],
                    before: ")]}:;>",
                    stringPrefixes: []
                },
                Bo = i["n"].define({
                    map(e, t) {
                        let n = t.mapPos(e, -1, i["i"].TrackAfter);
                        return null == n ? void 0 : n
                    }
                }),
                Po = i["n"].define({
                    map(e, t) {
                        return t.mapPos(e)
                    }
                }),
                To = new class extends i["m"] {};
            To.startSide = 1, To.endSide = -1;
            const qo = i["o"].define({
                create() {
                    return i["k"].empty
                },
                update(e, t) {
                    if (t.selection) {
                        let n = t.state.doc.lineAt(t.selection.main.head).from,
                            o = t.startState.doc.lineAt(t.startState.selection.main.head).from;
                        n != t.changes.mapPos(o, -1) && (e = i["k"].empty)
                    }
                    e = e.map(t.changes);
                    for (let n of t.effects) n.is(Bo) ? e = e.update({
                        add: [To.range(n.value, n.value + 1)]
                    }) : n.is(Po) && (e = e.update({
                        filter: e => e != n.value
                    }));
                    return e
                }
            });

            function Wo() {
                return [Vo, qo]
            }
            const $o = "()[]{}<>";

            function Fo(e) {
                for (let t = 0; t < $o.length; t += 2)
                    if ($o.charCodeAt(t) == e) return $o.charAt(t + 1);
                return Object(i["x"])(e < 128 ? e : e + 1)
            }

            function No(e, t) {
                return e.languageDataAt("closeBrackets", t)[0] || Eo
            }
            const Uo = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
                Vo = o["c"].inputHandler.of((e, t, n, o) => {
                    if ((Uo ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
                    let r = e.state.selection.main;
                    if (o.length > 2 || 2 == o.length && 1 == Object(i["s"])(Object(i["r"])(o, 0)) || t != r.from || n != r.to) return !1;
                    let s = Ho(e.state, o);
                    return !!s && (e.dispatch(s), !0)
                }),
                _o = ({
                    state: e,
                    dispatch: t
                }) => {
                    if (e.readOnly) return !1;
                    let n = No(e, e.selection.main.head),
                        o = n.brackets || Eo.brackets,
                        r = null,
                        s = e.changeByRange(t => {
                            if (t.empty) {
                                let n = Qo(e.doc, t.head);
                                for (let r of o)
                                    if (r == n && Go(e.doc, t.head) == Fo(Object(i["r"])(r, 0))) return {
                                        changes: {
                                            from: t.head - r.length,
                                            to: t.head + r.length
                                        },
                                        range: i["f"].cursor(t.head - r.length)
                                    }
                            }
                            return {
                                range: r = t
                            }
                        });
                    return r || t(e.update(s, {
                        scrollIntoView: !0,
                        userEvent: "delete.backward"
                    })), !r
                },
                zo = [{
                    key: "Backspace",
                    run: _o
                }];

            function Ho(e, t) {
                let n = No(e, e.selection.main.head),
                    o = n.brackets || Eo.brackets;
                for (let r of o) {
                    let s = Fo(Object(i["r"])(r, 0));
                    if (t == r) return s == r ? Yo(e, r, o.indexOf(r + r + r) > -1, n) : Ko(e, r, s, n.before || Eo.before);
                    if (t == s && Jo(e, e.selection.main.from)) return Xo(e, r, s)
                }
                return null
            }

            function Jo(e, t) {
                let n = !1;
                return e.field(qo).between(0, e.doc.length, e => {
                    e == t && (n = !0)
                }), n
            }

            function Go(e, t) {
                let n = e.sliceString(t, t + 2);
                return n.slice(0, Object(i["s"])(Object(i["r"])(n, 0)))
            }

            function Qo(e, t) {
                let n = e.sliceString(t - 2, t);
                return Object(i["s"])(Object(i["r"])(n, 0)) == n.length ? n : n.slice(1)
            }

            function Ko(e, t, n, o) {
                let r = null,
                    s = e.changeByRange(s => {
                        if (!s.empty) return {
                            changes: [{
                                insert: t,
                                from: s.from
                            }, {
                                insert: n,
                                from: s.to
                            }],
                            effects: Bo.of(s.to + t.length),
                            range: i["f"].range(s.anchor + t.length, s.head + t.length)
                        };
                        let l = Go(e.doc, s.head);
                        return !l || /\s/.test(l) || o.indexOf(l) > -1 ? {
                            changes: {
                                insert: t + n,
                                from: s.head
                            },
                            effects: Bo.of(s.head + t.length),
                            range: i["f"].cursor(s.head + t.length)
                        } : {
                            range: r = s
                        }
                    });
                return r ? null : e.update(s, {
                    scrollIntoView: !0,
                    userEvent: "input.type"
                })
            }

            function Xo(e, t, n) {
                let o = null,
                    r = e.selection.ranges.map(t => t.empty && Go(e.doc, t.head) == n ? i["f"].cursor(t.head + n.length) : o = t);
                return o ? null : e.update({
                    selection: i["f"].create(r, e.selection.mainIndex),
                    scrollIntoView: !0,
                    effects: e.selection.ranges.map(({
                        from: e
                    }) => Po.of(e))
                })
            }

            function Yo(e, t, n, o) {
                let r = o.stringPrefixes || Eo.stringPrefixes,
                    s = null,
                    l = e.changeByRange(o => {
                        if (!o.empty) return {
                            changes: [{
                                insert: t,
                                from: o.from
                            }, {
                                insert: t,
                                from: o.to
                            }],
                            effects: Bo.of(o.to + t.length),
                            range: i["f"].range(o.anchor + t.length, o.head + t.length)
                        };
                        let l, a = o.head,
                            c = Go(e.doc, a);
                        if (c == t) {
                            if (Zo(e, a)) return {
                                changes: {
                                    insert: t + t,
                                    from: a
                                },
                                effects: Bo.of(a + t.length),
                                range: i["f"].cursor(a + t.length)
                            };
                            if (Jo(e, a)) {
                                let o = n && e.sliceDoc(a, a + 3 * t.length) == t + t + t;
                                return {
                                    range: i["f"].cursor(a + t.length * (o ? 3 : 1)),
                                    effects: Po.of(a)
                                }
                            }
                        } else {
                            if (n && e.sliceDoc(a - 2 * t.length, a) == t + t && (l = ti(e, a - 2 * t.length, r)) > -1 && Zo(e, l)) return {
                                changes: {
                                    insert: t + t + t + t,
                                    from: a
                                },
                                effects: Bo.of(a + t.length),
                                range: i["f"].cursor(a + t.length)
                            };
                            if (e.charCategorizer(a)(c) != i["d"].Word && ti(e, a, r) > -1 && !ei(e, a, t, r)) return {
                                changes: {
                                    insert: t + t,
                                    from: a
                                },
                                effects: Bo.of(a + t.length),
                                range: i["f"].cursor(a + t.length)
                            }
                        }
                        return {
                            range: s = o
                        }
                    });
                return s ? null : e.update(l, {
                    scrollIntoView: !0,
                    userEvent: "input.type"
                })
            }

            function Zo(e, t) {
                let n = Object(r["t"])(e).resolveInner(t + 1);
                return n.parent && n.from == t
            }

            function ei(e, t, n, o) {
                let i = Object(r["t"])(e).resolveInner(t, -1),
                    s = o.reduce((e, t) => Math.max(e, t.length), 0);
                for (let r = 0; r < 5; r++) {
                    let r = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + s)),
                        l = r.indexOf(n);
                    if (!l || l > -1 && o.indexOf(r.slice(0, l)) > -1) {
                        let t = i.firstChild;
                        while (t && t.from == i.from && t.to - t.from > n.length + l) {
                            if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
                            t = t.firstChild
                        }
                        return !0
                    }
                    let a = i.to == t && i.parent;
                    if (!a) break;
                    i = a
                }
                return !1
            }

            function ti(e, t, n) {
                let o = e.charCategorizer(t);
                if (o(e.sliceDoc(t - 1, t)) != i["d"].Word) return t;
                for (let r of n) {
                    let n = t - r.length;
                    if (e.sliceDoc(n, t) == r && o(e.sliceDoc(n - 1, n)) != i["d"].Word) return n
                }
                return -1
            }

            function ni(e = {}) {
                return [ko, Yn.of(e), Ro, ii, Lo]
            }
            const oi = [{
                    key: "Ctrl-Space",
                    run: Co
                }, {
                    key: "Escape",
                    run: So
                }, {
                    key: "ArrowDown",
                    run: Oo(!0)
                }, {
                    key: "ArrowUp",
                    run: Oo(!1)
                }, {
                    key: "PageDown",
                    run: Oo(!0, "page")
                }, {
                    key: "PageUp",
                    run: Oo(!1, "page")
                }, {
                    key: "Enter",
                    run: Ao
                }],
                ii = i["j"].highest(o["q"].computeN([Yn], e => e.facet(Yn).defaultKeymap ? [oi] : []));
            class ri {
                constructor(e, t, n) {
                    this.from = e, this.to = t, this.diagnostic = n
                }
            }
            class si {
                constructor(e, t, n) {
                    this.diagnostics = e, this.panel = t, this.selected = n
                }
                static init(e, t, n) {
                    let i = e,
                        r = n.facet(Oi).markerFilter;
                    r && (i = r(i));
                    let s = o["a"].set(i.map(e => e.from == e.to || e.from == e.to - 1 && n.doc.lineAt(e.from).to == e.from ? o["a"].widget({
                        widget: new Si(e),
                        diagnostic: e
                    }).range(e.from) : o["a"].mark({
                        attributes: {
                            class: "cm-lintRange cm-lintRange-" + e.severity
                        },
                        diagnostic: e
                    }).range(e.from, e.to)), !0);
                    return new si(s, t, li(s))
                }
            }

            function li(e, t = null, n = 0) {
                let o = null;
                return e.between(n, 1e9, (e, n, {
                    spec: i
                }) => {
                    if (!t || i.diagnostic == t) return o = new ri(e, n, i.diagnostic), !1
                }), o
            }

            function ai(e, t) {
                return !(!e.effects.some(e => e.is(ui)) && !e.changes.touchesRange(t.pos))
            }

            function ci(e, t) {
                return e.field(mi, !1) ? t : t.concat(i["n"].appendConfig.of([mi, o["c"].decorations.compute([mi], e => {
                    let {
                        selected: t,
                        panel: n
                    } = e.field(mi);
                    return t && n && t.from != t.to ? o["a"].set([pi.range(t.from, t.to)]) : o["a"].none
                }), Object(o["p"])(gi, {
                    hideOn: ai
                }), Ri]))
            }

            function hi(e, t) {
                return {
                    effects: ci(e, [ui.of(t)])
                }
            }
            const ui = i["n"].define(),
                fi = i["n"].define(),
                di = i["n"].define(),
                mi = i["o"].define({
                    create() {
                        return new si(o["a"].none, null, null)
                    },
                    update(e, t) {
                        if (t.docChanged) {
                            let n = e.diagnostics.map(t.changes),
                                o = null;
                            if (e.selected) {
                                let i = t.changes.mapPos(e.selected.from, 1);
                                o = li(n, e.selected.diagnostic, i) || li(n, null, i)
                            }
                            e = new si(n, e.panel, o)
                        }
                        for (let n of t.effects) n.is(ui) ? e = si.init(n.value, e.panel, t.state) : n.is(fi) ? e = new si(e.diagnostics, n.value ? Di.open : null, e.selected) : n.is(di) && (e = new si(e.diagnostics, e.panel, n.value));
                        return e
                    },
                    provide: e => [o["v"].from(e, e => e.panel), o["c"].decorations.from(e, e => e.diagnostics)]
                });
            const pi = o["a"].mark({
                class: "cm-lintRange cm-lintRange-active"
            });

            function gi(e, t, n) {
                let {
                    diagnostics: o
                } = e.state.field(mi), i = [], r = 2e8, s = 0;
                o.between(t - (n < 0 ? 1 : 0), t + (n > 0 ? 1 : 0), (e, o, {
                    spec: l
                }) => {
                    t >= e && t <= o && (e == o || (t > e || n > 0) && (t < o || n < 0)) && (i.push(l.diagnostic), r = Math.min(e, r), s = Math.max(o, s))
                });
                let l = e.state.facet(Oi).tooltipFilter;
                return l && (i = l(i)), i.length ? {
                    pos: r,
                    end: s,
                    above: e.state.doc.lineAt(r).to < s,
                    create() {
                        return {
                            dom: vi(e, i)
                        }
                    }
                } : null
            }

            function vi(e, t) {
                return Mt("ul", {
                    class: "cm-tooltip-lint"
                }, t.map(t => Ci(e, t, !1)))
            }
            const bi = e => {
                    let t = e.state.field(mi, !1);
                    t && t.panel || e.dispatch({
                        effects: ci(e.state, [fi.of(!0)])
                    });
                    let n = Object(o["j"])(e, Di.open);
                    return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0
                },
                wi = e => {
                    let t = e.state.field(mi, !1);
                    return !(!t || !t.panel) && (e.dispatch({
                        effects: fi.of(!1)
                    }), !0)
                },
                yi = e => {
                    let t = e.state.field(mi, !1);
                    if (!t) return !1;
                    let n = e.state.selection.main,
                        o = t.diagnostics.iter(n.to + 1);
                    return !(!o.value && (o = t.diagnostics.iter(0), !o.value || o.from == n.from && o.to == n.to)) && (e.dispatch({
                        selection: {
                            anchor: o.from,
                            head: o.to
                        },
                        scrollIntoView: !0
                    }), !0)
                },
                xi = [{
                    key: "Mod-Shift-m",
                    run: bi
                }, {
                    key: "F8",
                    run: yi
                }],
                ki = o["e"].fromClass(class {
                    constructor(e) {
                        this.view = e, this.timeout = -1, this.set = !0;
                        let {
                            delay: t
                        } = e.state.facet(Oi);
                        this.lintTime = Date.now() + t, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, t)
                    }
                    run() {
                        let e = Date.now();
                        if (e < this.lintTime - 10) setTimeout(this.run, this.lintTime - e);
                        else {
                            this.set = !1;
                            let {
                                state: e
                            } = this.view, {
                                sources: t
                            } = e.facet(Oi);
                            Promise.all(t.map(e => Promise.resolve(e(this.view)))).then(t => {
                                let n = t.reduce((e, t) => e.concat(t));
                                this.view.state.doc == e.doc && this.view.dispatch(hi(this.view.state, n))
                            }, e => {
                                Object(o["s"])(this.view.state, e)
                            })
                        }
                    }
                    update(e) {
                        let t = e.state.facet(Oi);
                        (e.docChanged || t != e.startState.facet(Oi)) && (this.lintTime = Date.now() + t.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, t.delay)))
                    }
                    force() {
                        this.set && (this.lintTime = Date.now(), this.run())
                    }
                    destroy() {
                        clearTimeout(this.timeout)
                    }
                }),
                Oi = i["h"].define({
                    combine(e) {
                        return Object.assign({
                            sources: e.map(e => e.source)
                        }, Object(i["t"])(e.map(e => e.config), {
                            delay: 750,
                            markerFilter: null,
                            tooltipFilter: null
                        }))
                    },
                    enables: ki
                });

            function Ai(e) {
                let t = [];
                if (e) e: for (let {
                        name: n
                    } of e) {
                    for (let e = 0; e < n.length; e++) {
                        let o = n[e];
                        if (/[a-zA-Z]/.test(o) && !t.some(e => e.toLowerCase() == o.toLowerCase())) {
                            t.push(o);
                            continue e
                        }
                    }
                    t.push("")
                }
                return t
            }

            function Ci(e, t, n) {
                var o;
                let i = n ? Ai(t.actions) : [];
                return Mt("li", {
                    class: "cm-diagnostic cm-diagnostic-" + t.severity
                }, Mt("span", {
                    class: "cm-diagnosticText"
                }, t.renderMessage ? t.renderMessage() : t.message), null === (o = t.actions) || void 0 === o ? void 0 : o.map((n, o) => {
                    let r = o => {
                            o.preventDefault();
                            let i = li(e.state.field(mi).diagnostics, t);
                            i && n.apply(e, i.from, i.to)
                        },
                        {
                            name: s
                        } = n,
                        l = i[o] ? s.indexOf(i[o]) : -1,
                        a = l < 0 ? s : [s.slice(0, l), Mt("u", s.slice(l, l + 1)), s.slice(l + 1)];
                    return Mt("button", {
                        type: "button",
                        class: "cm-diagnosticAction",
                        onclick: r,
                        onmousedown: r,
                        "aria-label": ` Action: ${s}${l<0?"":` (access key "${i[o]})"`}.`
                    }, a)
                }), t.source && Mt("div", {
                    class: "cm-diagnosticSource"
                }, t.source))
            }
            class Si extends o["f"] {
                constructor(e) {
                    super(), this.diagnostic = e
                }
                eq(e) {
                    return e.diagnostic == this.diagnostic
                }
                toDOM() {
                    return Mt("span", {
                        class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
                    })
                }
            }
            class Mi {
                constructor(e, t) {
                    this.diagnostic = t, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = Ci(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
                }
            }
            class Di {
                constructor(e) {
                    this.view = e, this.items = [];
                    let t = t => {
                            if (27 == t.keyCode) wi(this.view), this.view.focus();
                            else if (38 == t.keyCode || 33 == t.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
                            else if (40 == t.keyCode || 34 == t.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
                            else if (36 == t.keyCode) this.moveSelection(0);
                            else if (35 == t.keyCode) this.moveSelection(this.items.length - 1);
                            else if (13 == t.keyCode) this.view.focus();
                            else {
                                if (!(t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0)) return; {
                                    let {
                                        diagnostic: n
                                    } = this.items[this.selectedIndex], o = Ai(n.actions);
                                    for (let i = 0; i < o.length; i++)
                                        if (o[i].toUpperCase().charCodeAt(0) == t.keyCode) {
                                            let t = li(this.view.state.field(mi).diagnostics, n);
                                            t && n.actions[i].apply(e, t.from, t.to)
                                        }
                                }
                            }
                            t.preventDefault()
                        },
                        n = e => {
                            for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t)
                        };
                    this.list = Mt("ul", {
                        tabIndex: 0,
                        role: "listbox",
                        "aria-label": this.view.state.phrase("Diagnostics"),
                        onkeydown: t,
                        onclick: n
                    }), this.dom = Mt("div", {
                        class: "cm-panel-lint"
                    }, this.list, Mt("button", {
                        type: "button",
                        name: "close",
                        "aria-label": this.view.state.phrase("close"),
                        onclick: () => wi(this.view)
                    }, "×")), this.update()
                }
                get selectedIndex() {
                    let e = this.view.state.field(mi).selected;
                    if (!e) return -1;
                    for (let t = 0; t < this.items.length; t++)
                        if (this.items[t].diagnostic == e.diagnostic) return t;
                    return -1
                }
                update() {
                    let {
                        diagnostics: e,
                        selected: t
                    } = this.view.state.field(mi), n = 0, o = !1, i = null;
                    e.between(0, this.view.state.doc.length, (e, r, {
                        spec: s
                    }) => {
                        let l, a = -1;
                        for (let t = n; t < this.items.length; t++)
                            if (this.items[t].diagnostic == s.diagnostic) {
                                a = t;
                                break
                            }
                        a < 0 ? (l = new Mi(this.view, s.diagnostic), this.items.splice(n, 0, l), o = !0) : (l = this.items[a], a > n && (this.items.splice(n, a - n), o = !0)), t && l.diagnostic == t.diagnostic ? l.dom.hasAttribute("aria-selected") || (l.dom.setAttribute("aria-selected", "true"), i = l) : l.dom.hasAttribute("aria-selected") && l.dom.removeAttribute("aria-selected"), n++
                    });
                    while (n < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0)) o = !0, this.items.pop();
                    0 == this.items.length && (this.items.push(new Mi(this.view, {
                        from: -1,
                        to: -1,
                        severity: "info",
                        message: this.view.state.phrase("No diagnostics")
                    })), o = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
                        key: this,
                        read: () => ({
                            sel: i.dom.getBoundingClientRect(),
                            panel: this.list.getBoundingClientRect()
                        }),
                        write: ({
                            sel: e,
                            panel: t
                        }) => {
                            e.top < t.top ? this.list.scrollTop -= t.top - e.top : e.bottom > t.bottom && (this.list.scrollTop += e.bottom - t.bottom)
                        }
                    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), o && this.sync()
                }
                sync() {
                    let e = this.list.firstChild;

                    function t() {
                        let t = e;
                        e = t.nextSibling, t.remove()
                    }
                    for (let n of this.items)
                        if (n.dom.parentNode == this.list) {
                            while (e != n.dom) t();
                            e = n.dom.nextSibling
                        } else this.list.insertBefore(n.dom, e);
                    while (e) t()
                }
                moveSelection(e) {
                    if (this.selectedIndex < 0) return;
                    let t = this.view.state.field(mi),
                        n = li(t.diagnostics, this.items[e].diagnostic);
                    n && this.view.dispatch({
                        selection: {
                            anchor: n.from,
                            head: n.to
                        },
                        scrollIntoView: !0,
                        effects: di.of(n)
                    })
                }
                static open(e) {
                    return new Di(e)
                }
            }

            function ji(e, t = 'viewBox="0 0 40 40"') {
                return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`
            }

            function Ii(e) {
                return ji(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
            }
            const Ri = o["c"].baseTheme({
                ".cm-diagnostic": {
                    padding: "3px 6px 3px 8px",
                    marginLeft: "-1px",
                    display: "block",
                    whiteSpace: "pre-wrap"
                },
                ".cm-diagnostic-error": {
                    borderLeft: "5px solid #d11"
                },
                ".cm-diagnostic-warning": {
                    borderLeft: "5px solid orange"
                },
                ".cm-diagnostic-info": {
                    borderLeft: "5px solid #999"
                },
                ".cm-diagnosticAction": {
                    font: "inherit",
                    border: "none",
                    padding: "2px 4px",
                    backgroundColor: "#444",
                    color: "white",
                    borderRadius: "3px",
                    marginLeft: "8px"
                },
                ".cm-diagnosticSource": {
                    fontSize: "70%",
                    opacity: .7
                },
                ".cm-lintRange": {
                    backgroundPosition: "left bottom",
                    backgroundRepeat: "repeat-x",
                    paddingBottom: "0.7px"
                },
                ".cm-lintRange-error": {
                    backgroundImage: Ii("#d11")
                },
                ".cm-lintRange-warning": {
                    backgroundImage: Ii("orange")
                },
                ".cm-lintRange-info": {
                    backgroundImage: Ii("#999")
                },
                ".cm-lintRange-active": {
                    backgroundColor: "#ffdd9980"
                },
                ".cm-tooltip-lint": {
                    padding: 0,
                    margin: 0
                },
                ".cm-lintPoint": {
                    position: "relative",
                    "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "-2px",
                        borderLeft: "3px solid transparent",
                        borderRight: "3px solid transparent",
                        borderBottom: "4px solid #d11"
                    }
                },
                ".cm-lintPoint-warning": {
                    "&:after": {
                        borderBottomColor: "orange"
                    }
                },
                ".cm-lintPoint-info": {
                    "&:after": {
                        borderBottomColor: "#999"
                    }
                },
                ".cm-panel.cm-panel-lint": {
                    position: "relative",
                    "& ul": {
                        maxHeight: "100px",
                        overflowY: "auto",
                        "& [aria-selected]": {
                            backgroundColor: "#ddd",
                            "& u": {
                                textDecoration: "underline"
                            }
                        },
                        "&:focus [aria-selected]": {
                            background_fallback: "#bdf",
                            backgroundColor: "Highlight",
                            color_fallback: "white",
                            color: "HighlightText"
                        },
                        "& u": {
                            textDecoration: "none"
                        },
                        padding: 0,
                        margin: 0
                    },
                    "& [name=close]": {
                        position: "absolute",
                        top: "0",
                        right: "2px",
                        background: "inherit",
                        border: "none",
                        font: "inherit",
                        padding: 0,
                        margin: 0
                    }
                }
            });
            o["d"];
            const Li = (() => [Object(o["r"])(), Object(o["n"])(), Object(o["o"])(), A(), Object(r["h"])(), Object(o["h"])(), Object(o["i"])(), i["g"].allowMultipleSelections.of(!0), Object(r["o"])(), Object(r["s"])(r["g"], {
                    fallback: !0
                }), Object(r["e"])(), Wo(), ni(), Object(o["t"])(), Object(o["g"])(), Object(o["m"])(), Ht(), o["q"].of([...zo, ...St, ...Ln, ...V, ...r["j"], ...oi, ...xi])])(),
                Ei = (() => [Object(o["o"])(), A(), Object(o["h"])(), Object(r["s"])(r["g"], {
                    fallback: !0
                }), o["q"].of([...St, ...V])])()
        },
        5843: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "relative flex justify-evenly bg-black/5 overflow-hidden text-black/60 text-base shrink-0 window__statusbar",
                        attrs: {
                            "data-test-status-bar": ""
                        }
                    }, [e._t("default")], 2)
                },
                i = [],
                r = {
                    mounted() {
                        this.addClass()
                    },
                    updated() {
                        this.addClass()
                    },
                    methods: {
                        addClass() {
                            try {
                                this.$slots.default.forEach(e => {
                                    const t = e.elm;
                                    t.classList.contains("window__statusbar-item") || t.classList.add("window__statusbar-item")
                                })
                            } catch (e) {
                                console.warn("Status bar rendering error: ", e)
                            }
                        }
                    }
                },
                s = r,
                l = (n("6dd9"), n("2877")),
                a = Object(l["a"])(s, o, i, !1, null, null, null);
            t["a"] = a.exports
        },
        "6dd9": function(e, t, n) {
            "use strict";
            n("e68e")
        },
        "6fd3": function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("base-message", {
                        attrs: {
                            noPreTag: "",
                            title: e.title,
                            "data-test-confirm-save": ""
                        },
                        on: {
                            close: function(t) {
                                return e.$emit("cancel")
                            }
                        },
                        scopedSlots: e._u([{
                            key: "footer",
                            fn: function() {
                                return [n("winui-button", {
                                    staticClass: "default",
                                    attrs: {
                                        "data-test-save-yes": ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.$emit("yes")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("save")) + " ")]), n("winui-button", {
                                    attrs: {
                                        "data-test-save-no": ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.$emit("no")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("do-not-save")) + " ")]), n("winui-button", {
                                    attrs: {
                                        "data-test-save-cancel": ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.$emit("cancel")
                                        }
                                    }
                                }, [e._v(" " + e._s(e.$t("cancel")) + " ")])]
                            },
                            proxy: !0
                        }])
                    }, [n("text-instruction", [e._v(" " + e._s(e.formattedMessage) + " ")])], 1)
                },
                i = [],
                r = n("fceb"),
                s = n("b69c"),
                l = {
                    props: {
                        title: String,
                        maintext: String
                    },
                    computed: {
                        formattedMessage() {
                            return this.maintext || this.$t("confirm-save")
                        }
                    },
                    components: {
                        BaseMessage: r["a"],
                        TextInstruction: s["a"]
                    }
                },
                a = l,
                c = n("2877"),
                h = Object(c["a"])(a, o, i, !1, null, null, null);
            t["a"] = h.exports
        },
        b69c: function(e, t, n) {
            "use strict";
            var o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "mb-6 text-xl typography is-instruction"
                    }, [e._t("default")], 2)
                },
                i = [],
                r = {},
                s = r,
                l = n("2877"),
                a = Object(l["a"])(s, o, i, !1, null, null, null);
            t["a"] = a.exports
        },
        e68e: function(e, t, n) {}
    }
]);