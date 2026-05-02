(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["tetris"], {
        "0448": function(t, e, i) {
            t.exports = i.p + "media/tetris-burn.73862414.mp3"
        },
        "051a": function(t, e, i) {
            t.exports = i.p + "media/tetris-rotate.b19c7c35.mp3"
        },
        "13bc": function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "fragment game-container"
                    }, [i("window-main", {
                        attrs: {
                            id: "window-" + t.id,
                            resizable: !1,
                            lock: t.showHelp || t.showStats,
                            fullscreen: ""
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            title: t.$t("tetris"),
                            icon: t.id
                        }
                    }, [i("window-controls", {
                        attrs: {
                            disableMaximize: "",
                            close: t.exit
                        }
                    })], 1), i("window-menubar", {
                        attrs: {
                            items: t.toolbar
                        }
                    }), i("window-body", {
                        style: {
                            backgroundImage: "url(" + t.background + ")"
                        }
                    }, [i("canvas", {
                        ref: "gameCanvas",
                        staticClass: "z-1 w-full h-full"
                    }), i("button", {
                        ref: "btnPlay",
                        staticClass: "z-1 absolute center-flex bg-black text-white tetris__btn",
                        on: {
                            click: t.togglePlay
                        }
                    }, [t.isPlaying ? i("iconify-icon", {
                        attrs: {
                            icon: "fa:pause"
                        }
                    }) : i("iconify-icon", {
                        attrs: {
                            icon: "fa:play"
                        }
                    })], 1), i("button", {
                        ref: "btnNew",
                        staticClass: "z-1 absolute center-flex bg-black text-white tetris__btn is-new",
                        on: {
                            click: t.newGame
                        }
                    }, [i("iconify-icon", {
                        attrs: {
                            icon: "fa:rotate-left"
                        }
                    })], 1)])], 1), t.showHelp ? i("window-main-static", {
                        attrs: {
                            variant: "help",
                            parent: t.id
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            title: t.$t("help")
                        }
                    }, [i("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleHelp
                        }
                    })], 1), i("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [i("text-heading", [t._v("Controls")]), i("ul", [i("li", [t._v("Rotate piece: Tap the piece.")]), i("li", [t._v("Move piece: Drag the piece left/right.")]), i("li", [t._v("Drop piece: Drag the piece down.")])]), i("text-heading", [t._v("Credits")]), i("p", [t._v(" Classic Tetris is created by "), i("a", {
                        attrs: {
                            href: "https://github.com/llop",
                            target: "_blank"
                        }
                    }, [t._v("Albert Lobo")]), t._v(" and licensed MIT. ")]), i("p", [t._v(" Game icon is made available by "), i("a", {
                        attrs: {
                            href: "https://smashicons.com/",
                            target: "_blank"
                        }
                    }, [t._v("Smashicons")]), t._v(". ")])], 1)], 1) : t._e(), t.showStats ? i("window-main-static", {
                        staticClass: "tetris__stats",
                        attrs: {
                            parent: t.id
                        }
                    }, [i("window-titlebar", {
                        attrs: {
                            title: t.$t("statistics")
                        }
                    }, [i("window-controls", {
                        attrs: {
                            hideMaximize: "",
                            hideMinimize: "",
                            close: t.toggleStats
                        }
                    })], 1), i("window-body", {
                        attrs: {
                            layout: "dialog"
                        }
                    }, [i("div", {
                        staticClass: "mb-5"
                    }, [i("winui-fieldset", [i("legend", [t._v(t._s(t.$t("highscores")))]), t.statData && t.statData.scores ? i("table", {
                        staticClass: "w-full text-center"
                    }, [i("tr", [i("th", [t._v("Level")]), i("th", [t._v("Score")]), i("th", [t._v("Lines")])]), t._l(t.statData.scores, (function(e, s) {
                        return i("tr", {
                            key: s
                        }, [i("td", [t._v(t._s(e.level))]), i("td", [t._v(t._s(e.score))]), i("td", [t._v(t._s(e.lines))])])
                    }))], 2) : t._e()])], 1), i("div", {
                        staticClass: "mb-5"
                    }, [t.statData ? [i("div", [t._v(t._s(t.$t("games-played")) + ": " + t._s(t.statData.total))]), i("div", [t._v(t._s(t.$t("games-completed")) + ": " + t._s(t.statData.completed))]), i("div", [t._v(t._s(t.$t("completion-rate")) + ": " + t._s((t.statData.completed / t.statData.total * 100 || 0).toFixed()) + "%")])] : [i("div", [t._v(t._s(t.$t("games-played")) + ": 0")]), i("div", [t._v(t._s(t.$t("games-completed")) + ": 0%")]), i("div", [t._v(t._s(t.$t("completion-rate")) + ": 0%")])]], 2), i("div", {
                        staticClass: "text-center"
                    }, [i("winui-button", {
                        staticClass: "default",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleStats(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("close")))]), i("winui-button", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.toggleConfirm(e)
                            }
                        }
                    }, [t._v(t._s(t.$t("reset")))])], 1)])], 1) : t._e(), t.showConfirm ? i("confirm-reset", {
                        attrs: {
                            close: t.toggleConfirm
                        },
                        on: {
                            reset: t.resetStats
                        }
                    }) : t._e(), i("sponsor-ads", {
                        attrs: {
                            type: "interstitial"
                        }
                    })], 1)
                },
                o = [];

            function a(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            class h {
                constructor(t, {
                    boardWidth: e = h.BOARD_WIDTH,
                    boardHeight: i = h.BOARD_HEIGHT,
                    boardX: s = 30,
                    boardY: o = -35,
                    squareSide: n = 28,
                    scoreX: r = 330,
                    scoreY: l = 100,
                    levelX: c = 330,
                    levelY: d = 130,
                    linesX: _ = 330,
                    linesY: p = 160,
                    nextX: u = 330,
                    nextY: E = 260,
                    nextOffsetX: m = 330,
                    nextOffsetY: g = 280,
                    pauseX: v = 145,
                    pauseY: C = 220,
                    zColor: S = ["#a52d19", "#000"],
                    sColor: f = ["#4835ee", "#000"],
                    oColor: b = ["#126d12", "#000"],
                    lColor: P = ["#a52d19", "#000"],
                    jColor: T = ["#4835ee", "#000"],
                    tColor: w = ["#a52d19", "#000"],
                    iColor: x = ["#126d12", "#000"],
                    gameOverColor: O = ["#fff", "#000"],
                    ghostColor: A = ["#000", "#aaa"],
                    canvasFont: R = "17px verdana",
                    canvasFontColor: I = "#fff",
                    backgroundColor: y = "#222",
                    tetrisBackgroundColor: L = "#fff",
                    borderColor: D = "#fff",
                    gridColor: k = "#ddd",
                    tapClickMaxDuration: M = 500,
                    tapClickMaxDistance: G = 10,
                    rotateSound: N,
                    moveSound: H,
                    setSound: X,
                    gameOverSound: B,
                    lineSound: W,
                    tetrisSound: U,
                    levelChangeSound: V,
                    pauseSound: q,
                    gameTheme: Y
                } = {}) {
                    a(this, "_handleContextMenu", t => {
                        t.preventDefault()
                    }), a(this, "_handleKeyDown", t => {
                        switch (t.keyCode || t.which) {
                            case 37:
                            case 65:
                                t.preventDefault(), this.moveRight = !(this.moveLeft = !0);
                                break;
                            case 39:
                            case 68:
                                t.preventDefault(), this.moveLeft = !(this.moveRight = !0);
                                break;
                            case 38:
                            case 75:
                            case 87:
                            case 88:
                                t.preventDefault(), this.rotateAnticlockwise = !(this.rotateClockwise = !0);
                                break;
                            case 76:
                            case 90:
                                t.preventDefault(), this.rotateClockwise = !(this.rotateAnticlockwise = !0);
                                break;
                            case 40:
                            case 83:
                                t.preventDefault(), this.moveDown = !0;
                                break;
                            case 32:
                                t.preventDefault(), this.hardDrop = !0;
                                break;
                            case 27:
                            case 80:
                                t.preventDefault(), this.gameState != h.STATE_GAME_OVER && (this.doUndoPause = !0);
                                break
                        }
                    }), a(this, "_handlePointerMove", t => {
                        if (t.preventDefault(), this.gameState === h.STATE_PAUSE) return;
                        const {
                            x: e,
                            y: i
                        } = this._getEventCoords(t), s = (i - this.boardY) / this.squareSide | 0, o = (e - this.boardX) / this.squareSide | 0, {
                            top: a,
                            bottom: n,
                            left: r,
                            right: l
                        } = this._getPieceBounds(), c = (a + n) / 2 | 0, d = (r + l) / 2 | 0;
                        s <= n && (this.pointerMoveDownEnabled = !0), o < d && (this.moveRight = !(this.moveLeft = !0)), o > d && (this.moveLeft = !(this.moveRight = !0)), this.pointerMoveDownEnabled && s > c && (this.moveDown = !0)
                    }), a(this, "_handlePointerDown", t => {
                        if (this.gameState === h.STATE_PAUSE) return;
                        const {
                            x: e,
                            y: i
                        } = this._getEventCoords(t);
                        this.xIni = e, this.yIni = i, this.tIni = performance.now()
                    }), a(this, "_handlePointerUp", t => {
                        if (t.preventDefault(), this.gameState === h.STATE_PAUSE) return;
                        const {
                            x: e,
                            y: i
                        } = this._getEventCoords(t), s = this.xIni - e, o = this.yIni - i, a = Math.sqrt(s * s + o * o);
                        a <= this.tapClickMaxDistance && performance.now() - this.tIni <= this.tapClickMaxDuration && (0 === t.button ? this.rotateAnticlockwise = !(this.rotateClockwise = !0) : this.rotateClockwise = !(this.rotateAnticlockwise = !0))
                    }), a(this, "_handlePointerCancel", t => {
                        t.preventDefault(), this.pointerMoveDownEnabled = !1
                    }), a(this, "_handleWheel", t => {
                        t.preventDefault(), this.gameState !== h.STATE_PAUSE && (t.deltaY > 0 ? this.rotateAnticlockwise = !(this.rotateClockwise = !0) : t.deltaY < 0 && (this.rotateClockwise = !(this.rotateAnticlockwise = !0)))
                    }), this.canvas = t, this.context = this.canvas.getContext("2d"), this.context.lineJoin = "miter", this.boardWidth = e, this.boardHeight = i, this.board = [];
                    for (let a = 0; a < this.boardHeight; ++a) {
                        const t = [];
                        for (let e = 0; e < this.boardWidth; ++e) t.push(7);
                        this.board.push(t)
                    }
                    this.boardX = s, this.boardY = o, this.squareSide = n, this.boardBorder = [-.5 + this.boardX, -.5 + this.boardY + 2 * this.squareSide, .5 + this.boardX + this.boardWidth * this.squareSide, .5 + this.boardY + this.boardHeight * this.squareSide], this.scoreX = r, this.scoreY = l, this.levelX = c, this.levelY = d, this.linesX = _, this.linesY = p, this.nextX = u, this.nextY = E, this.nextOffsetX = m, this.nextOffsetY = g, this.pauseX = v, this.pauseY = C, this.canvasFont = R, this.canvasFontColor = I, this.zColor = [...S], this.sColor = [...f], this.oColor = [...b], this.lColor = [...P], this.jColor = [...T], this.tColor = [...w], this.iColor = [...x], this.gameOverColor = [...O], this.ghostColor = [...A], this.backgroundColor = y, this.tetrisBackgroundColor = L, this.borderColor = D, this.gridColor = k, this.tapClickMaxDuration = M, this.tapClickMaxDistance = G, this.rotateSound = N, this.moveSound = H, this.setSound = X, this.gameOverSound = B, this.lineSound = W, this.tetrisSound = U, this.levelChangeSound = V, this.pauseSound = q, this.gameTheme = Y, this.pieces = [{
                        id: 0,
                        name: h.Z_PIECE,
                        rot: h.Z_ROT,
                        iniPos: h.Z_INI_POS,
                        col: this.zColor,
                        box: h.Z_BOX
                    }, {
                        id: 1,
                        name: h.S_PIECE,
                        rot: h.S_ROT,
                        iniPos: h.S_INI_POS,
                        col: this.sColor,
                        box: h.S_BOX
                    }, {
                        id: 2,
                        name: h.O_PIECE,
                        rot: h.O_ROT,
                        iniPos: h.O_INI_POS,
                        col: this.oColor,
                        box: h.O_BOX
                    }, {
                        id: 3,
                        name: h.L_PIECE,
                        rot: h.L_ROT,
                        iniPos: h.L_INI_POS,
                        col: this.lColor,
                        box: h.L_BOX
                    }, {
                        id: 4,
                        name: h.J_PIECE,
                        rot: h.J_ROT,
                        iniPos: h.J_INI_POS,
                        col: this.jColor,
                        box: h.J_BOX
                    }, {
                        id: 5,
                        name: h.T_PIECE,
                        rot: h.T_ROT,
                        iniPos: h.T_INI_POS,
                        col: this.tColor,
                        box: h.T_BOX
                    }, {
                        id: 6,
                        name: h.I_PIECE,
                        rot: h.I_ROT,
                        iniPos: h.I_INI_POS,
                        col: this.iColor,
                        box: h.I_BOX
                    }], this.moveLeft = !1, this.moveRight = !1, this.moveDown = !1, this.rotateClockwise = !1, this.rotateAnticlockwise = !1, this.hardDrop = !0, this.doUndoPause = !1, this.xIni = void 0, this.yIni = void 0, this.tIni = void 0, this.pointerMoveDownEnabled = !1, this.playing = !1, this.gameLoop = !1, this.piece = this.pieces[0], this.piecePosition = [0, 0], this.pieceRotation = 0, this.next = this.pieces[0], this.startLevel = 0, this.level = 0, this.lines = 0, this.score = 0, this.pressDownScore = 0, this.handlers = new Map, this.handlers.set(h.GAME_START, []), this.handlers.set(h.GAME_OVER, []), this.handlers.set(h.GAME_OVER_START, []), this.handlers.set(h.GAME_OVER_END, []), this.handlers.set(h.GAME_PAUSE, []), this.handlers.set(h.GAME_RESUME, []), this.handlers.set(h.PIECE_MOVE_LEFT, []), this.handlers.set(h.PIECE_MOVE_RIGHT, []), this.handlers.set(h.PIECE_MOVE_DOWN, []), this.handlers.set(h.PIECE_HARD_DROP, []), this.handlers.set(h.PIECE_ROTATE_CLOCKWISE, []), this.handlers.set(h.PIECE_ROTATE_ANTICLOCKWISE, []), this.handlers.set(h.PIECE_LOCK, []), this.handlers.set(h.NEXT_PIECE, []), this.handlers.set(h.LEVEL_CHANGE, []), this.handlers.set(h.SCORE_CHANGE, []), this.handlers.set(h.LINE_CLEAR_START, []), this.handlers.set(h.LINE_CLEAR_END, []), this.handlers.set(h.LINE_CLEAR, []), this.frameCounter = 0, this.areFrames = -1, this.framesTilDrop = -1, this.columnsCleared = -1, this.gameOverLine = -1, this.previousGameState = h.STATE_GAME_OVER, this.gameState = h.STATE_GAME_OVER, this.emptyRow = [];
                    for (let a = 0; a < this.boardWidth; ++a) this.emptyRow.push(-1);
                    this._render()
                }
                setStartLevel(t) {
                    this.gameState === h.STATE_GAME_OVER && (this.startLevel = Math.max(0, Math.min(19, t)))
                }
                setGameOverColor(t) {
                    this.gameOverColor = [...t]
                }
                setGhostColor(t) {
                    this.ghostColor = [...t]
                }
                setPieceColor(t, e) {
                    switch (t) {
                        case h.Z_PIECE:
                            this.zColor = [...e];
                            break;
                        case h.S_PIECE:
                            this.sColor = [...e];
                            break;
                        case h.O_PIECE:
                            this.oColor = [...e];
                            break;
                        case h.L_PIECE:
                            this.lColor = [...e];
                            break;
                        case h.J_PIECE:
                            this.jColor = [...e];
                            break;
                        case h.T_PIECE:
                            this.tColor = [...e];
                            break;
                        case h.I_PIECE:
                            this.iColor = [...e];
                            break
                    }
                }
                _getFramesPerGridcell(t) {
                    return 0 === t ? 96 : 1 === t ? 86 : 2 === t ? 76 : 3 === t ? 66 : 4 === t ? 56 : 5 === t ? 46 : 6 === t ? 36 : 7 === t ? 26 : 8 === t ? 16 : 9 === t ? 12 : t <= 12 ? 10 : t <= 15 ? 8 : t <= 18 ? 6 : t <= 28 ? 4 : 2
                }
                togglePlayPause() {
                    this.playing ? this.doUndoPause = !0 : this.play()
                }
                quit() {
                    this.playing && this.gameState != h.STATE_GAME_OVER && this._triggerGameOver()
                }
                async play() {
                    if (!this.playing) {
                        this.playing = !0, this._disableUI(), this._addEventListeners(), this._resetParams(), this.gameTheme && (this.gameTheme.currentTime = 0, this.gameTheme.loop = !0, this.gameTheme.play()), this._dispatch(h.GAME_START, {
                            type: h.GAME_START,
                            level: this.level,
                            score: this.score,
                            lines: this.lines
                        }), this._dispatch(h.NEXT_PIECE, {
                            type: h.NEXT_PIECE,
                            piece: this.piece.name,
                            nextPiece: this.next.name
                        }), this.gameLoop = !0;
                        do {
                            this._process(), this._render(), await this._sleep()
                        } while (this.gameLoop);
                        this._removeEventListeners(), this._enableUI(), this.playing = !1, this._dispatch(h.GAME_OVER, {
                            type: h.GAME_OVER,
                            level: this.level,
                            score: this.score,
                            lines: this.lines
                        })
                    }
                }
                _resetParams() {
                    this.pointerMoveDownEnabled = !1, this.moveLeft = !1, this.moveRight = !1, this.moveDown = !1, this.rotateClockwise = !1, this.rotateAnticlockwise = !1, this.hardDrop = !1, this.doUndoPause = !1, this.xIni = void 0, this.yIni = void 0, this.tIni = void 0, this.piece = this.pieces[Math.random() * this.pieces.length | 0], this.next = this.pieces[this._nextPieceId()], this.piecePosition = this.piece.iniPos.slice(0), this.pieceRotation = 0, this.level = this.startLevel, this.lines = 0, this.score = 0, this.pressDownScore = 0;
                    for (let t = 0; t < this.boardHeight; ++t)
                        for (let e = 0; e < this.boardWidth; ++e) this.board[t][e] = -1;
                    this.frameCounter = 0, this.areFrames = -1, this.framesTilDrop = -1, this.columnsCleared = -1, this.gameOverLine = -1, this.framesTilDrop = 36 + this._getFramesPerGridcell(this.level), this.previousGameState = h.STATE_DROP, this.gameState = h.STATE_DROP
                }
                _addEventListeners() {
                    this.canvas.addEventListener("contextmenu", this._handleContextMenu, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("pointerdown", this._handlePointerDown, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("pointermove", this._handlePointerMove, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("pointerup", this._handlePointerUp, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("pointercancel", this._handlePointerCancel, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("wheel", this._handleWheel, {
                        capture: !0,
                        passive: !1
                    }), document.addEventListener("keydown", this._handleKeyDown, {
                        capture: !0,
                        passive: !1
                    })
                }
                _removeEventListeners() {
                    this.canvas.removeEventListener("contextmenu", this._handleContextMenu, !0), document.removeEventListener("pointerdown", this._handlePointerDown, !0), document.removeEventListener("pointermove", this._handlePointerMove, !0), document.removeEventListener("pointerup", this._handlePointerUp, !0), document.removeEventListener("pointercancel", this._handlePointerCancel, !0), document.removeEventListener("wheel", this._handleWheel, !0), document.removeEventListener("keydown", this._handleKeyDown, !0)
                }
                _disableUI() {
                    this.canvas.style.touchAction = "none"
                }
                _enableUI() {
                    this.canvas.style.touchAction = "auto"
                }
                _getEventCoords(t) {
                    const e = this.canvas.getBoundingClientRect();
                    return {
                        x: t.clientX - e.left,
                        y: t.clientY - e.top
                    }
                }
                _getPieceBounds() {
                    const t = this.piece.rot[this.pieceRotation];
                    let e = this.boardHeight,
                        i = 0,
                        s = this.boardWidth,
                        o = 0;
                    for (let a = 0; a < t.length; ++a)
                        for (let h = 0; h < t[a].length; ++h)
                            if (0 != t[a][h]) {
                                const t = this.piecePosition[0] + h,
                                    n = this.piecePosition[1] + a;
                                s = Math.min(s, t), o = Math.max(o, t), e = Math.min(e, n), i = Math.max(i, n)
                            }
                    return {
                        top: e,
                        bottom: i,
                        left: s,
                        right: o
                    }
                }
                _process() {
                    switch (this._pauseCheck(), this.gameState) {
                        case h.STATE_DROP:
                            this._processDrop();
                            break;
                        case h.STATE_BURN:
                            this._processBurn();
                            break;
                        case h.STATE_ARE:
                            this._processARE();
                            break;
                        case h.STATE_GAME_OVER:
                            this._processGameOver();
                            break;
                        case h.STATE_PAUSE:
                            break
                    }
                    this._resetInputs(), ++this.frameCounter
                }
                _processDrop() {
                    if (--this.framesTilDrop, this.moveLeft && this._canMovePiece(-1, 0)) {
                        const t = [...this.piecePosition];
                        --this.piecePosition[0], this.moveSound && (this.moveSound.currentTime = 0, this.moveSound.play()), this._dispatch(h.PIECE_MOVE_LEFT, {
                            type: h.PIECE_MOVE_LEFT,
                            piece: this.piece.name,
                            rotation: this.pieceRotation,
                            oldPosition: t,
                            newPosition: [...this.piecePosition]
                        })
                    }
                    if (this.moveRight && this._canMovePiece(1, 0)) {
                        const t = [...this.piecePosition];
                        ++this.piecePosition[0], this.moveSound && (this.moveSound.currentTime = 0, this.moveSound.play()), this._dispatch(h.PIECE_MOVE_RIGHT, {
                            type: h.PIECE_MOVE_RIGHT,
                            piece: this.piece.name,
                            rotation: this.pieceRotation,
                            oldPosition: t,
                            newPosition: [...this.piecePosition]
                        })
                    }
                    if (this.rotateClockwise && this._canRot((this.pieceRotation + 1) % this.piece.rot.length)) {
                        const t = this.pieceRotation;
                        this.pieceRotation = (this.pieceRotation + 1) % this.piece.rot.length, this.rotateSound && (this.rotateSound.currentTime = 0, this.rotateSound.play()), this._dispatch(h.PIECE_ROTATE_CLOCKWISE, {
                            type: h.PIECE_ROTATE_CLOCKWISE,
                            piece: this.piece.name,
                            position: [...this.piecePosition],
                            oldRotation: t,
                            newRotation: this.pieceRotation
                        })
                    }
                    if (this.rotateAnticlockwise && this._canRot((this.pieceRotation + this.piece.rot.length - 1) % this.piece.rot.length)) {
                        const t = this.pieceRotation;
                        this.pieceRotation = (this.pieceRotation + this.piece.rot.length - 1) % this.piece.rot.length, this.rotateSound && (this.rotateSound.currentTime = 0, this.rotateSound.play()), this._dispatch(h.PIECE_ROTATE_ANTICLOCKWISE, {
                            type: h.PIECE_ROTATE_ANTICLOCKWISE,
                            piece: this.piece.name,
                            position: [...this.piecePosition],
                            oldRotation: t,
                            newRotation: this.pieceRotation
                        })
                    }
                    if (this.hardDrop) {
                        const t = [...this.piecePosition];
                        while (this._canMovePiece(0, 1)) ++this.piecePosition[1], this.pressDownScore += 2;
                        this._dispatch(h.PIECE_HARD_DROP, {
                            type: h.PIECE_HARD_DROP,
                            piece: this.piece.name,
                            rotation: this.pieceRotation,
                            oldPosition: t,
                            newPosition: [...this.piecePosition]
                        }), this._lockPiece()
                    } else if (this.moveDown || 0 === this.framesTilDrop)
                        if (this._canMovePiece(0, 1)) {
                            this.moveDown && ++this.pressDownScore;
                            const t = [...this.piecePosition];
                            ++this.piecePosition[1], this.framesTilDrop = this._getFramesPerGridcell(this.level), this._dispatch(h.PIECE_MOVE_DOWN, {
                                type: h.PIECE_MOVE_DOWN,
                                piece: this.piece.name,
                                rotation: this.pieceRotation,
                                oldPosition: t,
                                newPosition: [...this.piecePosition],
                                downPressed: this.moveDown
                            })
                        } else this._lockPiece()
                }
                _lockPiece() {
                    if (this.framesTilDrop = -1, this._setPiece(), this._dispatch(h.PIECE_LOCK, {
                            type: h.PIECE_LOCK,
                            piece: this.piece.name,
                            rotation: this.pieceRotation,
                            position: [...this.piecePosition]
                        }), this.linesCleared = this._getLinesCleared(), this.linesCleared.length > 0) {
                        this.columnsCleared = 0, this.gameState = h.STATE_BURN;
                        const t = this.boardWidth / 2;
                        for (let i = 0; i < this.linesCleared.length; ++i) this.board[this.linesCleared[i]][t + this.columnsCleared] = -1, this.board[this.linesCleared[i]][t - 1 - this.columnsCleared] = -1;
                        const e = 4 === this.linesCleared.length ? this.tetrisSound : this.lineSound;
                        e && (e.currentTime = 0, e.play()), this._dispatch(h.LINE_CLEAR_START, {
                            type: h.LINE_CLEAR_START,
                            linesBurnt: [...this.linesCleared]
                        })
                    } else {
                        this.setSound && (this.setSound.currentTime = 0, this.setSound.play());
                        const t = this.score;
                        this.score += this.pressDownScore, this._dispatch(h.SCORE_CHANGE, {
                            type: h.SCORE_CHANGE,
                            oldScore: t,
                            newScore: this.score
                        }), this.areFrames = this._getARE(), this.gameState = h.STATE_ARE
                    }
                }
                _processBurn() {
                    if (this.frameCounter % 8 === 0)
                        if (++this.columnsCleared, this.columnsCleared < 5) {
                            const t = this.boardWidth / 2;
                            for (let e = 0; e < this.linesCleared.length; ++e) this.board[this.linesCleared[e]][t + this.columnsCleared] = -1, this.board[this.linesCleared[e]][t - 1 - this.columnsCleared] = -1
                        } else {
                            this.columnsCleared = -1;
                            for (let s = this.linesCleared.length - 1; s >= 0; --s) this.board.splice(this.linesCleared[s], 1);
                            while (this.board.length < this.boardHeight) this.board.unshift([...this.emptyRow]);
                            const t = this.score,
                                e = this.lines;
                            this.score += this.pressDownScore + this._getLinesScore(this.linesCleared.length, this.level), this.lines += this.linesCleared.length, this._dispatch(h.LINE_CLEAR_END, {
                                type: h.LINE_CLEAR_END,
                                linesBurnt: [...this.linesCleared]
                            }), this._dispatch(h.LINE_CLEAR, {
                                type: h.LINE_CLEAR,
                                oldLines: e,
                                newLines: this.lines
                            }), this._dispatch(h.SCORE_CHANGE, {
                                type: h.SCORE_CHANGE,
                                oldScore: t,
                                newScore: this.score
                            });
                            const i = this._getLevel();
                            if (this.level != i) {
                                const t = this.level;
                                this.level = i, this.levelChangeSound && (this.levelChangeSound.currentTime = 0, this.levelChangeSound.play()), this._dispatch(h.LEVEL_CHANGE, {
                                    type: h.LEVEL_CHANGE,
                                    oldLevel: t,
                                    newLevel: this.level
                                })
                            }
                            this.areFrames = this._getARE(), this.gameState = h.STATE_ARE
                        }
                }
                _processARE() {
                    --this.areFrames, 0 === this.areFrames && (this.areFrames = -1, this.pressDownScore = 0, this.pointerMoveDownEnabled = !1, this.piece = this.next, this.piecePosition = this.piece.iniPos.slice(0), this.pieceRotation = 0, this.next = this.pieces[this._nextPieceId()], this._canMovePiece(0, 0) ? (this.framesTilDrop = this._getFramesPerGridcell(this.level), this.gameState = h.STATE_DROP, this._dispatch(h.NEXT_PIECE, {
                        type: h.NEXT_PIECE,
                        piece: this.piece.name,
                        nextPiece: this.next.name
                    })) : (this._setPiece(), this._triggerGameOver()))
                }
                _triggerGameOver() {
                    this.gameTheme && this.gameTheme.pause(), this.gameOverSound && (this.gameOverSound.currentTime = 0, this.gameOverSound.play()), this.gameOverLine = 1, this.gameState = h.STATE_GAME_OVER, this._dispatch(h.GAME_OVER_START, {
                        type: h.GAME_OVER_START,
                        level: this.level,
                        score: this.score,
                        lines: this.lines
                    })
                }
                _processGameOver() {
                    if (this.frameCounter % 8 === 0)
                        if (++this.gameOverLine, this.gameOverLine < this.boardHeight)
                            for (let t = 0; t < this.boardWidth; ++t) this.board[this.gameOverLine][t] = 7;
                        else this.gameLoop = !1, this._dispatch(h.GAME_OVER_END, {
                            type: h.GAME_OVER_END,
                            level: this.level,
                            score: this.score,
                            lines: this.lines
                        })
                }
                _pauseCheck() {
                    this.doUndoPause && (this.gameState === h.STATE_PAUSE ? (this.gameState = this.previousGameState, this.pointerMoveDownEnabled = !1, this.gameTheme && this.gameTheme.play(), this._dispatch(h.GAME_RESUME, {
                        type: h.GAME_RESUME,
                        level: this.level,
                        score: this.score,
                        lines: this.lines
                    })) : (this.previousGameState = this.gameState, this.gameState = h.STATE_PAUSE, this.gameTheme && this.gameTheme.pause(), this.pauseSound && (this.pauseSound.currentTime = 0, this.pauseSound.play()), this._dispatch(h.GAME_PAUSE, {
                        type: h.GAME_PAUSE,
                        level: this.level,
                        score: this.score,
                        lines: this.lines
                    })))
                }
                _resetInputs() {
                    this.moveLeft = !1, this.moveRight = !1, this.moveDown = !1, this.rotateClockwise = !1, this.rotateAnticlockwise = !1, this.hardDrop = !1, this.doUndoPause = !1
                }
                _nextPieceId() {
                    let t = 8 * Math.random() | 0;
                    return 7 !== t && t !== this.piece.id || (t = 8 * Math.random() | 0, t = (t + this.piece.id) % 7), t
                }
                _getLinesScore(t, e) {
                    return 1 === t ? 40 * (e + 1) : 2 === t ? 100 * (e + 1) : 3 === t ? 300 * (e + 1) : 1200 * (e + 1)
                }
                _getARE() {
                    const t = this._getLockHeight(),
                        e = 10 + 2 * ((t + 2) / 4 | 0);
                    return 2 * e
                }
                _getLockHeight() {
                    let t = 0;
                    const e = this.piece.rot[this.pieceRotation];
                    for (let i = 0; i < e.length; ++i)
                        for (let s = 0; s < e[i].length; ++s) 0 != e[i][s] && (t = Math.max(t, this.piecePosition[1] + i));
                    return this.boardHeight - 1 - t
                }
                _getLevel() {
                    const t = this.lines - Math.min(10 * this.startLevel + 10, Math.max(100, 10 * this.startLevel - 50));
                    return this.startLevel + (t >= 0 ? 1 + (t / 10 | 0) : 0)
                }
                _getLinesCleared() {
                    const t = [];
                    for (let e = 0; e < this.boardHeight; ++e) {
                        let i = !0;
                        for (let t = 0; i && t < this.boardWidth; ++t) - 1 === this.board[e][t] && (i = !1);
                        i && t.push(e)
                    }
                    return t
                }
                _setPiece() {
                    const t = this.piece.rot[this.pieceRotation];
                    for (let e = 0; e < t.length; ++e)
                        for (let i = 0; i < t[e].length; ++i) 0 != t[e][i] && (this.board[this.piecePosition[1] + e][this.piecePosition[0] + i] = this.piece.id)
                }
                _canMovePiece(t, e) {
                    return this._canMove(this.piece, this.pieceRotation, this.piecePosition, t, e)
                }
                _canMove(t, e, i, s, o) {
                    const a = t.rot[e];
                    for (let h = 0; h < a.length; ++h)
                        for (let t = 0; t < a[h].length; ++t)
                            if (0 != a[h][t]) {
                                const e = s + i[0] + t,
                                    a = o + i[1] + h;
                                if (e < 0 || e >= this.boardWidth || a >= this.boardHeight || -1 != this.board[a][e]) return !1
                            }
                    return !0
                }
                _canRot(t) {
                    const e = this.piece.rot[t];
                    for (let i = 0; i < e.length; ++i)
                        for (let t = 0; t < e[i].length; ++t)
                            if (0 != e[i][t]) {
                                const e = this.piecePosition[0] + t,
                                    s = this.piecePosition[1] + i;
                                if (e < 0 || e >= this.boardWidth || s >= this.boardHeight || -1 != this.board[s][e]) return !1
                            }
                    return !0
                }
                _render() {
                    this._drawBackground(), this._drawBoard(), this._drawGhost(), this._drawPiece(), this._drawHUD(), this._drawNext()
                }
                _drawBackground() {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.lineWidth = 1;
                    const t = this.gameState === h.STATE_BURN && 4 === this.linesCleared.length && this.frameCounter % 8 ? this.tetrisBackgroundColor : this.backgroundColor;
                    if (this.context.beginPath(), this.context.moveTo(this.boardBorder[0], this.boardBorder[1]), this.context.lineTo(this.boardBorder[2], this.boardBorder[1]), this.context.lineTo(this.boardBorder[2], this.boardBorder[3]), this.context.lineTo(this.boardBorder[0], this.boardBorder[3]), this.context.closePath(), this.context.fillStyle = t, this.context.strokeStyle = this.borderColor, this.context.lineWidth = 6, this.context.fill(), this.context.stroke(), this.gameState === h.STATE_PAUSE) this.context.font = this.canvasFont, this.context.fillStyle = this.canvasFontColor, this.context.fillText("PAUSE", this.pauseX, this.pauseY);
                    else {
                        this.context.lineWidth = .5, this.context.strokeStyle = this.gridColor;
                        const t = this.boardX + this.squareSide * this.boardWidth;
                        for (let s = 3; s < this.boardHeight; ++s) {
                            const e = this.boardY + s * this.squareSide;
                            this.context.beginPath(), this.context.moveTo(this.boardX, e), this.context.lineTo(t, e), this.context.closePath(), this.context.stroke()
                        }
                        const e = this.boardY + 2 * this.squareSide,
                            i = this.boardY + this.boardHeight * this.squareSide;
                        for (let s = 0; s < this.boardWidth; ++s) {
                            const t = this.boardX + s * this.squareSide;
                            this.context.beginPath(), this.context.moveTo(t, e), this.context.lineTo(t, i), this.context.closePath(), this.context.stroke()
                        }
                        this.context.lineWidth = 1
                    }
                }
                _drawBoard() {
                    if (this.gameState !== h.STATE_PAUSE)
                        for (let t = 2; t < this.boardHeight; ++t)
                            for (let e = 0; e < this.boardWidth; ++e)
                                if (-1 != this.board[t][e]) {
                                    const i = 7 == this.board[t][e] ? this.gameOverColor : this.pieces[this.board[t][e]].col;
                                    this._drawSquare(this.boardX + e * this.squareSide, this.boardY + t * this.squareSide, i[0], i[1])
                                }
                }
                _drawPiece() {
                    if (this.gameState === h.STATE_DROP) {
                        const t = this.piece.rot[this.pieceRotation];
                        for (let e = 0; e < t.length; ++e)
                            for (let i = 0; i < t[e].length; ++i) 0 != t[e][i] && this.piecePosition[1] + e > 1 && this._drawSquare(this.boardX + (this.piecePosition[0] + i) * this.squareSide, this.boardY + (this.piecePosition[1] + e) * this.squareSide, this.piece.col[0], this.piece.col[1], this.piece.name)
                    }
                }
                _drawGhost() {
                    if (this.gameState === h.STATE_DROP) {
                        const t = [this.piecePosition[0], this.piecePosition[1]];
                        while (this._canMove(this.piece, this.pieceRotation, t, 0, 1)) ++t[1];
                        const e = this.piece.rot[this.pieceRotation];
                        for (let i = 0; i < e.length; ++i)
                            for (let s = 0; s < e[i].length; ++s) 0 != e[i][s] && t[1] + i > 1 && this._drawSquare(this.boardX + (t[0] + s) * this.squareSide, this.boardY + (t[1] + i) * this.squareSide, this.ghostColor[0], this.ghostColor[1], h.GHOST_PIECE)
                    }
                }
                _drawHUD() {
                    let t = "SCORE:  ",
                        e = "LEVEL:  ",
                        i = "LINES:  ",
                        s = "NEXT";
                    const o = 3,
                        a = 35,
                        {
                            scoreX: n,
                            scoreY: r,
                            nextX: l,
                            nextY: c
                        } = this;
                    this.gameState != h.STATE_PAUSE && (t += this.score, e += this.level, i += this.lines), this.context.fillStyle = this.borderColor, this.context.fillRect(n - o, r - o, 250 + 2 * o, 120 + 2 * o), this.context.fillStyle = this.backgroundColor, this.context.fillRect(n, r, 250, 120), this.context.fillStyle = this.borderColor, this.context.fillRect(l - o, c - o, 150 + 2 * o, 120 + 2 * o), this.context.fillStyle = this.backgroundColor, this.context.fillRect(l, c, 150, 120), this.context.font = this.canvasFont, this.context.fillStyle = this.canvasFontColor, this.context.fillText(t, n + a, r + a), this.context.fillText(e, n + a, r + 30 + a), this.context.fillText(i, n + a, r + 60 + a), this.context.fillText(s, l + a, c + a), this.nextOffsetX = l + a, this.nextOffsetY = c + a + 20
                }
                _drawNext() {
                    if (this.gameState === h.STATE_PAUSE || this.gameState === h.STATE_GAME_OVER) return;
                    const t = this.next.rot[0],
                        e = this.next.box;
                    for (let i = e[0]; i < e[0] + e[2]; ++i)
                        for (let s = e[1]; s < e[1] + e[3]; ++s) 0 != t[i][s] && this._drawSquare(this.nextOffsetX + (s - e[1]) * this.squareSide, this.nextOffsetY + (i - e[0]) * this.squareSide, this.next.col[0], this.next.col[1], this.next.name)
                }
                _drawSquare(t, e, i, s, o) {
                    const a = 3,
                        {
                            GHOST_PIECE: n
                        } = h;
                    this.context.beginPath(), this.context.moveTo(t + 1, e + 1), this.context.lineTo(t + this.squareSide - 1, e + 1), this.context.lineTo(t + this.squareSide - 1, e + this.squareSide - 1), this.context.lineTo(t + 1, e + this.squareSide - 1), this.context.closePath(), this.context.fillStyle = i, this.context.strokeStyle = s, this.context.fill(), this.context.stroke(), o !== n && (this.context.beginPath(), this.context.moveTo(t + 1, e + 1), this.context.lineTo(t + a, e + 1), this.context.lineTo(t + a, e + a), this.context.lineTo(t + 1, e + a), this.context.closePath(), this.context.fillStyle = "#fff", this.context.fill(), this.context.beginPath(), this.context.moveTo(t + a, e + a), this.context.lineTo(t + 3 * a, e + a), this.context.lineTo(t + 3 * a, e + 2 * a), this.context.lineTo(t + 2 * a, e + 2 * a), this.context.lineTo(t + 2 * a, e + 3 * a), this.context.lineTo(t + a, e + 3 * a), this.context.closePath(), this.context.fill())
                }
                _sleep() {
                    return new Promise(requestAnimationFrame)
                }
                on(t, e) {
                    const i = this.handlers.get(t);
                    i && i.push(e)
                }
                off(t, e) {
                    const i = this.handlers.get(t);
                    if (i) {
                        const t = i.indexOf(e); - 1 != t && i.splice(t, 1)
                    }
                }
                _dispatch(t, e) {
                    const i = this.handlers.get(t);
                    if (i)
                        for (const s of i) s(e)
                }
            }
            a(h, "Z_ROT", [
                [
                    [0, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1]
                ],
                [
                    [0, 0, 1],
                    [0, 1, 1],
                    [0, 1, 0]
                ]
            ]), a(h, "S_ROT", [
                [
                    [0, 0, 0],
                    [0, 1, 1],
                    [1, 1, 0]
                ],
                [
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 0, 1]
                ]
            ]), a(h, "O_ROT", [
                [
                    [1, 1],
                    [1, 1]
                ]
            ]), a(h, "L_ROT", [
                [
                    [0, 0, 0],
                    [1, 1, 1],
                    [1, 0, 0]
                ],
                [
                    [1, 1, 0],
                    [0, 1, 0],
                    [0, 1, 0]
                ],
                [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 0]
                ],
                [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1]
                ]
            ]), a(h, "J_ROT", [
                [
                    [0, 0, 0],
                    [1, 1, 1],
                    [0, 0, 1]
                ],
                [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0]
                ],
                [
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 0]
                ],
                [
                    [0, 1, 1],
                    [0, 1, 0],
                    [0, 1, 0]
                ]
            ]), a(h, "T_ROT", [
                [
                    [0, 0, 0],
                    [1, 1, 1],
                    [0, 1, 0]
                ],
                [
                    [0, 1, 0],
                    [1, 1, 0],
                    [0, 1, 0]
                ],
                [
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 0]
                ],
                [
                    [0, 1, 0],
                    [0, 1, 1],
                    [0, 1, 0]
                ]
            ]), a(h, "I_ROT", [
                [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ]
            ]), a(h, "Z_INI_POS", [4, 1]), a(h, "S_INI_POS", [4, 1]), a(h, "O_INI_POS", [4, 2]), a(h, "L_INI_POS", [4, 1]), a(h, "J_INI_POS", [4, 1]), a(h, "T_INI_POS", [4, 1]), a(h, "I_INI_POS", [3, 0]), a(h, "Z_BOX", [1, 0, 2, 3]), a(h, "S_BOX", [1, 0, 2, 3]), a(h, "O_BOX", [0, 0, 2, 2]), a(h, "L_BOX", [1, 0, 2, 3]), a(h, "J_BOX", [1, 0, 2, 3]), a(h, "T_BOX", [1, 0, 2, 3]), a(h, "I_BOX", [2, 0, 1, 4]), a(h, "Z_PIECE", "z"), a(h, "S_PIECE", "s"), a(h, "O_PIECE", "o"), a(h, "L_PIECE", "l"), a(h, "J_PIECE", "j"), a(h, "T_PIECE", "t"), a(h, "I_PIECE", "i"), a(h, "GHOST_PIECE", "ghost"), a(h, "STATE_DROP", 0), a(h, "STATE_BURN", 1), a(h, "STATE_ARE", 2), a(h, "STATE_GAME_OVER", 3), a(h, "STATE_PAUSE", 4), a(h, "GAME_START", "game-start"), a(h, "GAME_OVER", "game-over"), a(h, "GAME_OVER_START", "game-over-start"), a(h, "GAME_OVER_END", "game-over-end"), a(h, "GAME_PAUSE", "game-pause"), a(h, "GAME_RESUME", "game-resume"), a(h, "PIECE_MOVE_LEFT", "piece-move-left"), a(h, "PIECE_MOVE_RIGHT", "piece-move-right"), a(h, "PIECE_MOVE_DOWN", "piece-move-down"), a(h, "PIECE_HARD_DROP", "piece-hard-drop"), a(h, "PIECE_ROTATE_CLOCKWISE", "piece-rotate-clockwise"), a(h, "PIECE_ROTATE_ANTICLOCKWISE", "piece-rotate-anticlockwise"), a(h, "PIECE_LOCK", "piece-lock"), a(h, "NEXT_PIECE", "next-piece"), a(h, "LEVEL_CHANGE", "level-change"), a(h, "SCORE_CHANGE", "score-change"), a(h, "LINE_CLEAR_START", "line-clear-start"), a(h, "LINE_CLEAR_END", "line-clear-end"), a(h, "LINE_CLEAR", "line-clear"), a(h, "BOARD_WIDTH", 10), a(h, "BOARD_HEIGHT", 22);
            var n = i("a995"),
                r = i("6792"),
                l = i("e0b8"),
                c = i("c88e"),
                d = i("f9c9"),
                _ = i("1521"),
                p = i("e863"),
                u = i("1d26"),
                E = i("411e"),
                m = i("3cb5"),
                g = i("e314"),
                v = i("0f35"),
                C = i("ce02"),
                S = i("dd1a"),
                f = i.n(S),
                b = i("0448"),
                P = i.n(b),
                T = i("7cdc"),
                w = i.n(T),
                x = i("2045"),
                O = i.n(x),
                A = i("2fea"),
                R = i.n(A),
                I = i("7adb"),
                y = i.n(I),
                L = i("170f5"),
                D = i.n(L),
                k = i("051a"),
                M = i.n(k),
                G = {
                    data() {
                        const {
                            user: t,
                            assets: e
                        } = this.$store.state;
                        return {
                            id: "tetris",
                            background: Object(v["a"])(e.assetStore.games, "tetris-bg"),
                            showHelp: !1,
                            showStats: !1,
                            showConfirm: !1,
                            isNew: !0,
                            isPlaying: !1,
                            statData: null,
                            gameStats: new l["a"]("tetris", t),
                            game: null,
                            sound: {
                                bgm: new Audio(f.a),
                                rotate: new Audio(M.a),
                                lock: new Audio(R.a),
                                move: new Audio(y.a),
                                burn: new Audio(P.a),
                                quad: new Audio(D.a),
                                levelup: new Audio(O.a),
                                gameOver: new Audio(w.a)
                            }
                        }
                    },
                    computed: {
                        toolbar() {
                            return [{
                                label: this.$t("game"),
                                items: [{
                                    label: this.$t("new-game"),
                                    click: this.newGame,
                                    hasDivider: !0
                                }, {
                                    label: this.$t("statistics"),
                                    click: this.toggleStats
                                }, {
                                    label: this.$t("exit"),
                                    click: this.exit
                                }]
                            }, {
                                label: this.$t("help"),
                                items: [{
                                    label: `${this.$t("view")} ${this.$t("help")}`,
                                    click: this.toggleHelp
                                }]
                            }]
                        }
                    },
                    mounted() {
                        this.init(), document.addEventListener("click", this.pause)
                    },
                    beforeDestroy() {
                        document.removeEventListener("click", this.pause)
                    },
                    methods: {
                        init() {
                            const {
                                btnPlay: t,
                                btnNew: e
                            } = this.$refs, i = this.$refs.gameCanvas, {
                                clientWidth: s,
                                clientHeight: o
                            } = i.parentElement, a = t.getBoundingClientRect(), n = e.getBoundingClientRect(), r = 10, l = 20, c = o / l, d = (s - c * r) / 2;
                            i.height = o + 2 * c, i.width = s, t.style.left = d - a.width - c + "px", t.style.bottom = 2 * c + n.height + "px", e.style.left = d - n.width - c + "px", e.style.bottom = c + "px", this.game = new h(i, {
                                boardX: d,
                                boardY: -c,
                                boardWidth: r,
                                boardHeight: l + 2,
                                squareSide: c,
                                pauseX: (s - 60) / 2,
                                nextX: d - 153 - c,
                                nextY: c,
                                scoreX: d + c * r + c,
                                scoreY: c,
                                borderColor: "#9edbf2",
                                backgroundColor: "#000",
                                tetrisBackgroundColor: "#000",
                                gridColor: "#000",
                                ghostColor: ["#222", "#000"],
                                gameTheme: this.sound.bgm,
                                rotateSound: this.sound.rotate,
                                setSound: this.sound.lock,
                                moveSound: this.sound.move,
                                lineSound: this.sound.burn,
                                tetrisSound: this.sound.quad,
                                levelChangeSound: this.sound.levelup,
                                gameOverSound: this.sound.gameOver
                            }), this.game.on(h.GAME_OVER_END, this.handleGameOver)
                        },
                        newGame() {
                            this.game.quit(), this.isNew = !0
                        },
                        handleGameOver({
                            level: t,
                            score: e,
                            lines: i
                        }) {
                            if (!this.isNew) {
                                const s = (t, e) => e.score - t.score;
                                this.gameStats.saveScore({
                                    level: t,
                                    score: e,
                                    lines: i
                                }, s), this.toggleStats(), this.isNew = !0, Object(C["b"])()
                            }
                            this.togglePlay()
                        },
                        pause({
                            target: t
                        }) {
                            const {
                                gameCanvas: e,
                                btnPlay: i,
                                btnNew: s
                            } = this.$refs;
                            ![e, i, s].includes(t) && this.isPlaying && this.togglePlay()
                        },
                        togglePlay() {
                            this.isNew && (this.gameStats.init(0), this.isNew = !1), this.game.togglePlayPause(), this.isPlaying = !this.isPlaying
                        },
                        toggleHelp() {
                            this.showHelp = !this.showHelp
                        },
                        toggleStats() {
                            this.showStats = !this.showStats, this.statData = this.gameStats.getData()[0]
                        },
                        toggleConfirm() {
                            this.showConfirm = !this.showConfirm
                        },
                        resetStats() {
                            const {
                                gameStats: t
                            } = this;
                            t.reset(), this.statData = t.getData()[0], this.toggleConfirm()
                        },
                        exit() {
                            Object(C["b"])(), this.$root.$emit(r["c"].CloseWindow, "tetris"), this.game.gameLoop = !1, Object.values(this.sound).forEach(t => t.src = ""), document.removeEventListener("click", this.pause)
                        }
                    },
                    components: {
                        WindowControls: p["a"],
                        WindowTitlebar: g["a"],
                        WindowMenubar: m["a"],
                        WindowMain: u["a"],
                        WindowBody: _["a"],
                        WindowMainStatic: E["a"],
                        ConfirmReset: n["a"],
                        TextHeading: d["a"],
                        SponsorAds: c["a"]
                    }
                },
                N = G,
                H = (i("6e0d"), i("2877")),
                X = Object(H["a"])(N, s, o, !1, null, null, null);
            e["default"] = X.exports
        },
        "170f5": function(t, e, i) {
            t.exports = i.p + "media/tetris-quad.7a619527.mp3"
        },
        2045: function(t, e, i) {
            t.exports = i.p + "media/tetris-levelup.94899555.mp3"
        },
        "2fea": function(t, e, i) {
            t.exports = i.p + "media/tetris-lock.d3a08852.mp3"
        },
        "6e0d": function(t, e, i) {
            "use strict";
            i("c136")
        },
        "7adb": function(t, e, i) {
            t.exports = i.p + "media/tetris-move.4ca1112f.mp3"
        },
        "7cdc": function(t, e, i) {
            t.exports = i.p + "media/tetris-over.e473e7b4.mp3"
        },
        c136: function(t, e, i) {},
        c88e: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.showAds && t.isPwa ? i("div", {
                        attrs: {
                            id: "126352-" + t.adUnit
                        }
                    }, [i("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/gen.js?type=" + t.adUnit
                        }
                    }), i("script", {
                        tag: "component",
                        attrs: {
                            src: "//ads.themoneytizer.com/s/requestform.js?siteId=126352&formatId=" + t.adUnit
                        }
                    })], 1) : t._e()
                },
                o = [],
                a = i("f708"),
                h = i("2f62");
            const n = {
                slidein: 6,
                interstitial: 15,
                vertical: 20
            };
            var r = {
                    props: {
                        type: String
                    },
                    computed: { ...Object(h["f"])({
                            showAds: "showAds"
                        }),
                        adUnit() {
                            return n[this.type] || n.slidein
                        },
                        isPwa: () => Object(a["d"])()
                    }
                },
                l = r,
                c = i("2877"),
                d = Object(c["a"])(l, s, o, !1, null, null, null);
            e["a"] = d.exports
        },
        ce02: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "a", (function() {
                return r
            }));
            var s = i("4360");
            const o = 6e4;
            let a = 0;
            const h = async () => (await i.e("applovin").then(i.bind(null, "f42e"))).default,
                n = async () => {
                    if (!s["default"].state.showAds) return;
                    const t = Date.now();
                    a > 0 && t - a < o || (a = t, (await h()).showInterstitial().catch(() => {}))
                },
                r = async () => {
                    s["default"].state.showAds && (await h()).showRewarded().catch(() => {})
                }
        },
        dd1a: function(t, e, i) {
            t.exports = i.p + "media/tetris-bgm.4e25e1ef.mp3"
        },
        e0b8: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return h
            }));
            var s = i("968c");

            function o(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const a = {
                total: 0,
                completed: 0,
                won: 0,
                scores: []
            };
            class h {
                constructor(t, e) {
                    o(this, "user", void 0), o(this, "key", void 0), o(this, "level", void 0), o(this, "data", void 0), this.user = e, this.key = t, this.level = 0, this.data = [], s["default"].local.get("scores-" + t, this.user).then(t => {
                        this.data = t || {
                            0: { ...a
                            },
                            1: { ...a
                            },
                            2: { ...a
                            }
                        }
                    })
                }
                getData() {
                    return this.data
                }
                saveData() {
                    s["default"].local.update("scores-" + this.key, this.user, this.data)
                }
                init(t) {
                    this.level = t, this.data[this.level].total++, this.saveData()
                }
                saveScore(t, e = ((t, e) => t.time - e.time)) {
                    const {
                        scores: i
                    } = this.data[this.level];
                    i.push(t), i.sort(e), i.length > 5 && i.pop(), this.complete()
                }
                win() {
                    this.data[this.level].won++, this.saveData()
                }
                complete() {
                    this.data[this.level].completed++, this.saveData()
                }
                reset(t = this.key) {
                    s["default"].local.remove("scores-" + t, this.user), this.data = {
                        0: { ...a,
                            scores: []
                        },
                        1: { ...a,
                            scores: []
                        },
                        2: { ...a,
                            scores: []
                        }
                    }
                }
            }
        },
        f9c9: function(t, e, i) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "text-3xl typography is-heading"
                    }, [t._t("default")], 2)
                },
                o = [],
                a = {},
                h = a,
                n = i("2877"),
                r = Object(n["a"])(h, s, o, !1, null, null, null);
            e["a"] = r.exports
        }
    }
]);