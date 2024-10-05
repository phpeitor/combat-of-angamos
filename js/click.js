function FastClick(t) {
	var e, i = this;
	if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0, this.touchBoundary = 10, this.layer = t, !t || !t.nodeType) throw new TypeError("Layer must be a document node");
	this.onClick = function() {
		return FastClick.prototype.onClick.apply(i, arguments)
	}, this.onMouse = function() {
		return FastClick.prototype.onMouse.apply(i, arguments)
	}, this.onTouchStart = function() {
		return FastClick.prototype.onTouchStart.apply(i, arguments)
	}, this.onTouchEnd = function() {
		return FastClick.prototype.onTouchEnd.apply(i, arguments)
	}, this.onTouchCancel = function() {
		return FastClick.prototype.onTouchCancel.apply(i, arguments)
	}, FastClick.notNeeded(t) || (this.deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, n) {
		var r = Node.prototype.removeEventListener;
		"click" === e ? r.call(t, e, i.hijacked || i, n) : r.call(t, e, i, n)
	}, t.addEventListener = function(e, i, n) {
		var r = Node.prototype.addEventListener;
		"click" === e ? r.call(t, e, i.hijacked || (i.hijacked = function(t) {
			t.propagationStopped || i(t)
		}), n) : r.call(t, e, i, n)
	}), "function" == typeof t.onclick && (e = t.onclick, t.addEventListener("click", function(t) {
		e(t)
	}, !1), t.onclick = null))
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
				var n = function(t) {
						var e, i = [],
							n = t.length;
						for (e = 0; e !== n; i.push(t[e++]));
						return i
					},
					r = function(t, e, i) {
						var n, r, s = t.cycle;
						for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
						delete t.cycle
					},
					s = function(t, e, n) {
						i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
					},
					o = 1e-10,
					a = i._internals,
					l = a.isSelector,
					u = a.isArray,
					c = s.prototype = i.to({}, .1, {}),
					h = [];
				s.version = "1.19.0", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
				}, c.updateTo = function(t, e) {
					var n, r = this.ratio,
						s = this.vars.immediateRender || t.immediateRender;
					e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
					for (n in t) this.vars[n] = t[n];
					if (this._initted || s)
						if (e) this._initted = !1, s && this.render(0, !0, !0);
						else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
						var o = this._totalTime;
						this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
					} else if (this._initted = !1, this._init(), this._time > 0 || s)
						for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
					return this
				}, c.render = function(t, e, i) {
					this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
					var n, r, s, l, u, c, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						m = this._totalTime,
						g = this._cycle,
						_ = this._duration,
						y = this._rawPrevTime;
					if (t >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > y || 0 >= t && t >= -1e-7 || y === o && "isPause" !== this.data) && y !== t && (i = !0, y > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === _ && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / _, c = this._easeType, h = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / _ < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / _)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
						this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
					this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === _ && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
				}, s.to = function(t, e, i) {
					return new s(t, e, i)
				}, s.from = function(t, e, i) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
				}, s.fromTo = function(t, e, i, n) {
					return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
				}, s.staggerTo = s.allTo = function(t, e, o, a, c, p, f) {
					a = a || 0;
					var d, m, g, _, y = 0,
						v = [],
						x = function() {
							o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(f || o.callbackScope || this, p || h)
						},
						b = o.cycle,
						T = o.startAt && o.startAt.cycle;
					for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
						m = {};
						for (_ in o) m[_] = o[_];
						if (b && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), T) {
							T = m.startAt = {};
							for (_ in o.startAt) T[_] = o.startAt[_];
							r(m.startAt, t, g)
						}
						m.delay = y + (m.delay || 0), g === d && c && (m.onComplete = x), v[g] = new s(t[g], e, m), y += a
					}
					return v
				}, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
					return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
				}, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
					return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
				}, s.delayedCall = function(t, e, i, n, r) {
					return new s(e, 0, {
						delay: t,
						onComplete: e,
						onCompleteParams: i,
						callbackScope: n,
						onReverseComplete: e,
						onReverseCompleteParams: i,
						immediateRender: !1,
						useFrames: r,
						overwrite: 0
					})
				}, s.set = function(t, e) {
					return new s(t, 0, e)
				}, s.isTweening = function(t) {
					return i.getTweensOf(t, !0).length > 0
				};
				var p = function(t, e) {
						for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
						return n
					},
					f = s.getAllTweens = function(e) {
						return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
					};
				s.killAll = function(t, i, n, r) {
					null == i && (i = !0), null == n && (n = !0);
					var s, o, a, l = f(0 != r),
						u = l.length,
						c = i && n && r;
					for (a = 0; u > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
				}, s.killChildTweensOf = function(t, e) {
					if (null != t) {
						var r, o, c, h, p, f = a.tweenLookup;
						if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
							for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
						else {
							r = [];
							for (c in f)
								for (o = f[c].target.parentNode; o;) o === t && (r = r.concat(f[c].tweens)), o = o.parentNode;
							for (p = r.length, h = 0; p > h; h++) e && r[h].totalTime(r[h].totalDuration()), r[h]._enabled(!1, !1)
						}
					}
				};
				var d = function(t, i, n, r) {
					i = i !== !1, n = n !== !1, r = r !== !1;
					for (var s, o, a = f(r), l = i && n && r, u = a.length; --u > -1;) o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
				};
				return s.pauseAll = function(t, e, i) {
					d(!0, t, e, i)
				}, s.resumeAll = function(t, e, i) {
					d(!1, t, e, i)
				}, s.globalTimeScale = function(e) {
					var n = t._rootTimeline,
						r = i.ticker.time;
					return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
				}, c.progress = function(t, e) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
				}, c.totalProgress = function(t, e) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
				}, c.time = function(t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, c.duration = function(e) {
					return arguments.length ? t.prototype.duration.call(this, e) : this._duration
				}, c.totalDuration = function(t) {
					return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, c.repeat = function(t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function(t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function(t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, s
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
				var n = function(t) {
						e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var i, n, r = this.vars;
						for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
						l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
					},
					r = 1e-10,
					s = i._internals,
					o = n._internals = {},
					a = s.isSelector,
					l = s.isArray,
					u = s.lazyTweens,
					c = s.lazyRender,
					h = _gsScope._gsDefine.globals,
					p = function(t) {
						var e, i = {};
						for (e in t) i[e] = t[e];
						return i
					},
					f = function(t, e, i) {
						var n, r, s = t.cycle;
						for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
						delete t.cycle
					},
					d = o.pauseCallback = function() {},
					m = function(t) {
						var e, i = [],
							n = t.length;
						for (e = 0; e !== n; i.push(t[e++]));
						return i
					},
					g = n.prototype = new e;
				return n.version = "1.19.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, r) {
					var s = n.repeat && h.TweenMax || i;
					return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
				}, g.from = function(t, e, n, r) {
					return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
				}, g.fromTo = function(t, e, n, r, s) {
					var o = r.repeat && h.TweenMax || i;
					return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
				}, g.staggerTo = function(t, e, r, s, o, l, u, c) {
					var h, d, g = new n({
							onComplete: l,
							onCompleteParams: u,
							callbackScope: c,
							smoothChildTiming: this.smoothChildTiming
						}),
						_ = r.cycle;
					for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), d = 0; d < t.length; d++) h = p(r), h.startAt && (h.startAt = p(h.startAt), h.startAt.cycle && f(h.startAt, t, d)), _ && (f(h, t, d), null != h.duration && (e = h.duration, delete h.duration)), g.to(t[d], e, h, d * s);
					return this.add(g, o)
				}, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
					return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
				}, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
					return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
				}, g.call = function(t, e, n, r) {
					return this.add(i.delayedCall(0, t, e, n), r)
				}, g.set = function(t, e, n) {
					return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
				}, n.exportRoot = function(t, e) {
					t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
					var r, s, o = new n(t),
						a = o._timeline;
					for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
					return a.add(o, 0), o
				}, g.add = function(r, s, o, a) {
					var u, c, h, p, f, d;
					if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
						if (r instanceof Array || r && r.push && l(r)) {
							for (o = o || "normal", a = a || 0, u = s, c = r.length, h = 0; c > h; h++) l(p = r[h]) && (p = new n({
								tweens: p
							})), this.add(p, u), "string" != typeof p && "function" != typeof p && ("sequence" === o ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), u += a;
							return this._uncache(!0)
						}
						if ("string" == typeof r) return this.addLabel(r, s);
						if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
						r = i.delayedCall(0, r)
					}
					if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
						for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
					return this
				}, g.remove = function(e) {
					if (e instanceof t) {
						this._remove(e, !1);
						var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
						return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
					}
					if (e instanceof Array || e && e.push && l(e)) {
						for (var n = e.length; --n > -1;) this.remove(e[n]);
						return this
					}
					return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
				}, g._remove = function(t, i) {
					e.prototype._remove.call(this, t, i);
					var n = this._last;
					return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
				}, g.append = function(t, e) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
				}, g.insert = g.insertMultiple = function(t, e, i, n) {
					return this.add(t, e || 0, i, n)
				}, g.appendMultiple = function(t, e, i, n) {
					return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
				}, g.addLabel = function(t, e) {
					return this._labels[t] = this._parseTimeOrLabel(e), this
				}, g.addPause = function(t, e, n, r) {
					var s = i.delayedCall(0, d, n, r || this);
					return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
				}, g.removeLabel = function(t) {
					return delete this._labels[t], this
				}, g.getLabelTime = function(t) {
					return null != this._labels[t] ? this._labels[t] : -1
				}, g._parseTimeOrLabel = function(e, i, n, r) {
					var s;
					if (r instanceof t && r.timeline === this) this.remove(r);
					else if (r && (r instanceof Array || r.push && l(r)))
						for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
					if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
					if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
					else {
						if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
						i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
					}
					return Number(e) + i
				}, g.seek = function(t, e) {
					return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
				}, g.stop = function() {
					return this.paused(!0)
				}, g.gotoAndPlay = function(t, e) {
					return this.play(t, e)
				}, g.gotoAndStop = function(t, e) {
					return this.pause(t, e)
				}, g.render = function(t, e, i) {
					this._gc && this._enabled(!0, !1);
					var n, s, o, a, l, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
						d = this._time,
						m = this._startTime,
						g = this._timeScale,
						_ = this._paused;
					if (t >= f - 1e-7) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
					else if (1e-7 > t)
						if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
								for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
							t = 0, this._initted || (l = !0)
						}
					else {
						if (this._hasPause && !this._forcingPlayhead && !e) {
							if (t >= d)
								for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
							else
								for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
							h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						this._totalTime = this._time = this._rawPrevTime = t
					}
					if (this._time !== d && this._first || i || l || h) {
						if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), p = this._time, p >= d)
							for (n = this._first; n && (o = n._next, p === this._time && (!this._paused || _));)(n._active || n._startTime <= p && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
						else
							for (n = this._last; n && (o = n._prev, p === this._time && (!this._paused || _));) {
								if (n._active || n._startTime <= d && !n._paused && !n._gc) {
									if (h === n) {
										for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
										h = null, this.pause()
									}
									n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
								}
								n = o
							}
						this._onUpdate && (e || (u.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (u.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
					}
				}, g._hasPausedChild = function() {
					for (var t = this._first; t;) {
						if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
						t = t._next
					}
					return !1
				}, g.getChildren = function(t, e, n, r) {
					r = r || -9999999999;
					for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
					return s
				}, g.getTweensOf = function(t, e) {
					var n, r, s = this._gc,
						o = [],
						a = 0;
					for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
					return s && this._enabled(!1, !0), o
				}, g.recent = function() {
					return this._recent
				}, g._contains = function(t) {
					for (var e = t.timeline; e;) {
						if (e === this) return !0;
						e = e.timeline
					}
					return !1
				}, g.shiftChildren = function(t, e, i) {
					i = i || 0;
					for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
					if (e)
						for (n in s) s[n] >= i && (s[n] += t);
					return this._uncache(!0)
				}, g._kill = function(t, e) {
					if (!t && !e) return this._enabled(!1, !1);
					for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
					return r
				}, g.clear = function(t) {
					var e = this.getChildren(!1, !0, !0),
						i = e.length;
					for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
					return t !== !1 && (this._labels = {}), this._uncache(!0)
				}, g.invalidate = function() {
					for (var e = this._first; e;) e.invalidate(), e = e._next;
					return t.prototype.invalidate.call(this)
				}, g._enabled = function(t, i) {
					if (t === this._gc)
						for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
					return e.prototype._enabled.call(this, t, i)
				}, g.totalTime = function(e, i, n) {
					this._forcingPlayhead = !0;
					var r = t.prototype.totalTime.apply(this, arguments);
					return this._forcingPlayhead = !1, r
				}, g.duration = function(t) {
					return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
				}, g.totalDuration = function(t) {
					if (!arguments.length) {
						if (this._dirty) {
							for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
							this._duration = this._totalDuration = n, this._dirty = !1
						}
						return this._totalDuration
					}
					return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
				}, g.paused = function(e) {
					if (!e)
						for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
					return t.prototype.paused.apply(this, arguments)
				}, g.usesFrames = function() {
					for (var e = this._timeline; e._timeline;) e = e._timeline;
					return e === t._rootFramesTimeline
				}, g.rawTime = function() {
					return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
				}, n
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
				var n = function(e) {
						t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					r = 1e-10,
					s = e._internals,
					o = s.lazyTweens,
					a = s.lazyRender,
					l = _gsScope._gsDefine.globals,
					u = new i(null, null, 1, 0),
					c = n.prototype = new t;
				return c.constructor = n, c.kill()._gc = !1, n.version = "1.19.0", c.invalidate = function() {
					return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
				}, c.addCallback = function(t, i, n, r) {
					return this.add(e.delayedCall(0, t, n, r), i)
				}, c.removeCallback = function(t, e) {
					if (t)
						if (null == e) this._kill(null, t);
						else
							for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
					return this
				}, c.removePause = function(e) {
					return this.removeCallback(t._internals.pauseCallback, e)
				}, c.tweenTo = function(t, i) {
					i = i || {};
					var n, r, s, o = {
							ease: u,
							useFrames: this.usesFrames(),
							immediateRender: !1
						},
						a = i.repeat && l.TweenMax || e;
					for (r in i) o[r] = i[r];
					return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function() {
						s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
					}, s
				}, c.tweenFromTo = function(t, e, i) {
					i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
						onComplete: this.seek,
						onCompleteParams: [t],
						callbackScope: this
					}, i.immediateRender = i.immediateRender !== !1;
					var n = this.tweenTo(e, i);
					return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
				}, c.render = function(t, e, i) {
					this._gc && this._enabled(!0, !1);
					var n, s, l, u, c, h, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
						m = this._duration,
						g = this._time,
						_ = this._totalTime,
						y = this._startTime,
						v = this._timeScale,
						x = this._rawPrevTime,
						b = this._paused,
						T = this._cycle;
					if (t >= d - 1e-7) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === r) && x !== t && this._first && (c = !0, x > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
					else if (1e-7 > t)
						if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && x !== r && (x > 0 || 0 > t && x >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, u = "onReverseComplete") : x >= 0 && this._first && (c = !0), this._rawPrevTime = t;
						else {
							if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
								for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
							t = 0, this._initted || (c = !0)
						}
					else if (0 === m && 0 > x && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = m + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
						if (t = this._time, t >= g)
							for (n = this._first; n && n._startTime <= t && !p;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n), n = n._next;
						else
							for (n = this._last; n && n._startTime >= t && !p;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n), n = n._prev;
						p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
					}
					if (this._cycle !== T && !this._locked) {
						var w = this._yoyo && 0 !== (1 & T),
							k = w === (this._yoyo && 0 !== (1 & this._cycle)),
							E = this._totalTime,
							C = this._cycle,
							S = this._rawPrevTime,
							P = this._time;
						if (this._totalTime = T * m, this._cycle < T ? w = !w : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? x - 1e-4 : x, this._cycle = T, this._locked = !0, g = w ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
						if (k && (g = w ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
						this._time = P, this._totalTime = E, this._cycle = C, this._rawPrevTime = S
					}
					if (!(this._time !== g && this._first || i || c || p)) return void(_ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), f = this._time, f >= g)
						for (n = this._first; n && (l = n._next, f === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
					else
						for (n = this._last; n && (l = n._prev, f === this._time && (!this._paused || b));) {
							if (n._active || n._startTime <= g && !n._paused && !n._gc) {
								if (p === n) {
									for (p = n._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
									p = null, this.pause()
								}
								n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
							}
							n = l
						}
					this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (y === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
				}, c.getActive = function(t, e, i) {
					null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
					var n, r, s = [],
						o = this.getChildren(t, e, i),
						a = 0,
						l = o.length;
					for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
					return s
				}, c.getLabelAfter = function(t) {
					t || 0 !== t && (t = this._time);
					var e, i = this.getLabelsArray(),
						n = i.length;
					for (e = 0; n > e; e++)
						if (i[e].time > t) return i[e].name;
					return null
				}, c.getLabelBefore = function(t) {
					null == t && (t = this._time);
					for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
						if (e[i].time < t) return e[i].name;
					return null
				}, c.getLabelsArray = function() {
					var t, e = [],
						i = 0;
					for (t in this._labels) e[i++] = {
						time: this._labels[t],
						name: t
					};
					return e.sort(function(t, e) {
						return t.time - e.time
					}), e
				}, c.progress = function(t, e) {
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
				}, c.totalProgress = function(t, e) {
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
				}, c.totalDuration = function(e) {
					return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
				}, c.time = function(t, e) {
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, c.repeat = function(t) {
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function(t) {
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function(t) {
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, c.currentLabel = function(t) {
					return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
				}, n
			}, !0),
			function() {
				var t = 180 / Math.PI,
					e = [],
					i = [],
					n = [],
					r = {},
					s = _gsScope._gsDefine.globals,
					o = function(t, e, i, n) {
						i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
					},
					a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					l = function(t, e, i, n) {
						var r = {
								a: t
							},
							s = {},
							o = {},
							a = {
								c: n
							},
							l = (t + e) / 2,
							u = (e + i) / 2,
							c = (i + n) / 2,
							h = (l + u) / 2,
							p = (u + c) / 2,
							f = (p - h) / 8;
						return r.b = l + (t - l) / 4, s.b = h + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + p) / 2, o.b = p - f, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
					},
					u = function(t, r, s, o, a) {
						var u, c, h, p, f, d, m, g, _, y, v, x, b, T = t.length - 1,
							w = 0,
							k = t[0].a;
						for (u = 0; T > u; u++) f = t[w], c = f.a, h = f.d, p = t[w + 1].d, a ? (v = e[u], x = i[u], b = (x + v) * r * .25 / (o ? .5 : n[u] || .5), d = h - (h - c) * (o ? .5 * r : 0 !== v ? b / v : 0), m = h + (p - h) * (o ? .5 * r : 0 !== x ? b / x : 0), g = h - (d + ((m - d) * (3 * v / (v + x) + .5) / 4 || 0))) : (d = h - (h - c) * r * .5, m = h + (p - h) * r * .5, g = h - (d + m) / 2), d += g, m += g, f.c = _ = d, 0 !== u ? f.b = k : f.b = k = f.a + .6 * (f.c - f.a), f.da = h - c, f.ca = _ - c, f.ba = k - c, s ? (y = l(c, k, _, h), t.splice(w, 1, y[0], y[1], y[2], y[3]), w += 4) : w++, k = m;
						f = t[w], f.b = k, f.c = k + .4 * (f.d - k), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = k - f.a, s && (y = l(f.a, k, f.c, f.d), t.splice(w, 1, y[0], y[1], y[2], y[3]))
					},
					c = function(t, n, r, s) {
						var a, l, u, c, h, p, f = [];
						if (s)
							for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
						if (a = t.length - 2, 0 > a) return f[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
						for (l = 0; a > l; l++) u = t[l][n], c = t[l + 1][n], f[l] = new o(u, 0, 0, c), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (c - u) * (c - u), i[l] = (i[l] || 0) + (h - c) * (h - c));
						return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
					},
					h = function(t, s, o, l, h, p) {
						var f, d, m, g, _, y, v, x, b = {},
							T = [],
							w = p || t[0];
						h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
						for (d in t[0]) T.push(d);
						if (t.length > 1) {
							for (x = t[t.length - 1], v = !0, f = T.length; --f > -1;)
								if (d = T[f], Math.abs(w[d] - x[d]) > .05) {
									v = !1;
									break
								}
							v && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
						}
						for (e.length = i.length = n.length = 0, f = T.length; --f > -1;) d = T[f], r[d] = -1 !== h.indexOf("," + d + ","), b[d] = c(t, d, r[d], p);
						for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
						if (!l) {
							for (f = T.length; --f > -1;)
								if (r[d])
									for (m = b[T[f]], y = m.length - 1, g = 0; y > g; g++) _ = m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[g] || 0) + _ * _;
							for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
						}
						for (f = T.length, g = o ? 4 : 1; --f > -1;) d = T[f], m = b[d], u(m, s, o, l, r[d]), v && (m.splice(0, g), m.splice(m.length - g, g));
						return b
					},
					p = function(t, e, i) {
						e = e || "soft";
						var n, r, s, a, l, u, c, h, p, f, d, m = {},
							g = "cubic" === e ? 3 : 2,
							_ = "soft" === e,
							y = [];
						if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
						for (p in t[0]) y.push(p);
						for (u = y.length; --u > -1;) {
							for (p = y[u], m[p] = l = [], f = 0, h = t.length, c = 0; h > c; c++) n = null == i ? t[c][p] : "string" == typeof(d = t[c][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && c > 1 && h - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
							for (h = f - g + 1, f = 0, c = 0; h > c; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[f++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
							l.length = f
						}
						return m
					},
					f = function(t, e, i) {
						for (var n, r, s, o, a, l, u, c, h, p, f, d = 1 / i, m = t.length; --m > -1;)
							for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; i >= c; c++) u = d * c, h = 1 - u, n = r - (r = (u * u * o + 3 * h * (u * a + h * l)) * u), f = m * i + c - 1, e[f] = (e[f] || 0) + n * n
					},
					d = function(t, e) {
						e = e >> 0 || 6;
						var i, n, r, s, o = [],
							a = [],
							l = 0,
							u = 0,
							c = e - 1,
							h = [],
							p = [];
						for (i in t) f(t[i], o, e);
						for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === c && (u += l, s = n / e >> 0, h[s] = p, a[s] = u, l = 0, p = []);
						return {
							length: u,
							lengths: a,
							segments: h
						}
					},
					m = _gsScope._gsDefine.plugin({
						propName: "bezier",
						priority: -1,
						version: "1.3.7",
						API: 2,
						global: !0,
						init: function(t, e, i) {
							this._target = t, e instanceof Array && (e = {
								values: e
							}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
							var n, r, s, o, a, l = e.values || [],
								u = {},
								c = l[0],
								f = e.autoRotate || i.vars.orientToBezier;
							this._autoRotate = f ? f instanceof Array ? f : [
								["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
							] : null;
							for (n in c) this._props.push(n);
							for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
							if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
								var m = d(this._beziers, this._timeRes);
								this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if (f = this._autoRotate)
								for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
									for (o = 0; 3 > o; o++) n = f[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
									n = f[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
								}
							return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
						},
						set: function(e) {
							var i, n, r, s, o, a, l, u, c, h, p = this._segCount,
								f = this._func,
								d = this._target,
								m = e !== this._startRatio;
							if (this._timeRes) {
								if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
									for (u = p - 1; u > r && (this._l2 = c[++r]) <= e;);
									this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
								} else if (e < this._l1 && r > 0) {
									for (; r > 0 && (this._l1 = c[--r]) >= e;);
									0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
								}
								if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
									for (u = h.length - 1; u > r && (this._s2 = h[++r]) <= e;);
									this._s1 = h[r - 1], this._si = r
								} else if (e < this._s1 && r > 0) {
									for (; r > 0 && (this._s1 = h[--r]) >= e;);
									0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
								}
								a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
							} else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
							for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, d)), f[s] ? d[s](l) : d[s] = l;
							if (this._autoRotate) {
								var g, _, y, v, x, b, T, w = this._autoRotate;
								for (r = w.length; --r > -1;) s = w[r][2], b = w[r][3] || 0, T = w[r][4] === !0 ? 1 : t, o = this._beziers[w[r][0]], g = this._beziers[w[r][1]], o && g && (o = o[i], g = g[i], _ = o.a + (o.b - o.a) * a, v = o.b + (o.c - o.b) * a, _ += (v - _) * a, v += (o.c + (o.d - o.c) * a - v) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, v - _) * T + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, d)), f[s] ? d[s](l) : d[s] = l)
							}
						}
					}),
					g = m.prototype;
				m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
					return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
				}, m._cssRegister = function() {
					var t = s.CSSPlugin;
					if (t) {
						var e = t._internals,
							i = e._parseToProxy,
							n = e._setPluginRatio,
							r = e.CSSPropTween;
						e._registerComplexSpecialProp("bezier", {
							parser: function(t, e, s, o, a, l) {
								e instanceof Array && (e = {
									values: e
								}), l = new m;
								var u, c, h, p = e.values,
									f = p.length - 1,
									d = [],
									g = {};
								if (0 > f) return a;
								for (u = 0; f >= u; u++) h = i(t, p[u], o, a, l, f !== u), d[u] = h.end;
								for (c in e) g[c] = e[c];
								return g.values = d, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
									["left", "top", "rotation", u, !1]
								] : null != h.end.x && [
									["x", "y", "rotation", u, !1]
								]), g.autoRotate && (o._transform || o._enableTransforms(!1), h.autoRotate = o._target._gsTransform, h.proxy.rotation = h.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(h.proxy, g, o._tween), a
							}
						})
					}
				}, g._mod = function(t) {
					for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = t[i[n]], e && "function" == typeof e && (this._mod[i[n]] = e)
				}, g._kill = function(t) {
					var e, i, n = this._props;
					for (e in this._beziers)
						if (e in t)
							for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
					if (n = this._autoRotate)
						for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
					return this._super._kill.call(this, t)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
				var i, n, r, s, o = function() {
						t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
					},
					a = _gsScope._gsDefine.globals,
					l = {},
					u = o.prototype = new t("css");
				u.constructor = o, o.version = "1.19.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = {
					top: u,
					right: u,
					bottom: u,
					left: u,
					width: u,
					height: u,
					fontSize: u,
					padding: u,
					margin: u,
					perspective: u,
					lineHeight: ""
				};
				var c, h, p, f, d, m, g, _, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
					v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					T = /(?:\d|\-|\+|=|#|\.)*/g,
					w = /opacity *= *([^)]*)/i,
					k = /opacity:([^;]*)/i,
					E = /alpha\(opacity *=.+?\)/i,
					C = /^(rgb|hsl)/,
					S = /([A-Z])/g,
					P = /-([a-z])/gi,
					O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					N = function(t, e) {
						return e.toUpperCase()
					},
					A = /(?:Left|Right|Width)/i,
					D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					M = /,(?=[^\)]*(?:\(|$))/gi,
					F = /[\s,\(]/i,
					L = Math.PI / 180,
					I = 180 / Math.PI,
					j = {},
					X = document,
					z = function(t) {
						return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t)
					},
					H = z("div"),
					B = z("img"),
					Y = o._internals = {
						_specialProps: l
					},
					q = navigator.userAgent,
					$ = function() {
						var t = q.indexOf("Android"),
							e = z("a");
						return p = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), d = p && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
					}(),
					V = function(t) {
						return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					W = function(t) {
						window.console && console.log(t)
					},
					U = "",
					G = "",
					Z = function(t, e) {
						e = e || H;
						var i, n, r = e.style;
						if (void 0 !== r[t]) return t;
						for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
						return n >= 0 ? (G = 3 === n ? "ms" : i[n], U = "-" + G.toLowerCase() + "-", G + t) : null
					},
					Q = X.defaultView ? X.defaultView.getComputedStyle : function() {},
					K = o.getStyle = function(t, e, i, n, r) {
						var s;
						return $ || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || Q(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
					},
					J = Y.convertToPixels = function(t, i, n, r, s) {
						if ("px" === r || !r) return n;
						if ("auto" === r || !n) return 0;
						var a, l, u, c = A.test(i),
							h = t,
							p = H.style,
							f = 0 > n,
							d = 1 === n;
						if (f && (n = -n), d && (n *= 100), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
						else {
							if (p.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
							else {
								if (h = t.parentNode || X.body, l = h._gsCache, u = e.ticker.frame, l && c && l.time === u) return l.width * n / 100;
								p[c ? "width" : "height"] = n + r
							}
							h.appendChild(H), a = parseFloat(H[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(H), c && "%" === r && o.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || s || (a = J(t, i, n, r, !0))
						}
						return d && (a /= 100), f ? -a : a
					},
					tt = Y.calculateOffset = function(t, e, i) {
						if ("absolute" !== K(t, "position", i)) return 0;
						var n = "left" === e ? "Left" : "Top",
							r = K(t, "margin" + n, i);
						return t["offset" + n] - (J(t, e, parseFloat(r), r.replace(T, "")) || 0)
					},
					et = function(t, e) {
						var i, n, r, s = {};
						if (e = e || Q(t, null))
							if (i = e.length)
								for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pt === r) && (s[r.replace(P, N)] = e.getPropertyValue(r));
							else
								for (i in e)(-1 === i.indexOf("Transform") || St === i) && (s[i] = e[i]);
						else if (e = t.currentStyle || t.style)
							for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(P, N)] = e[i]);
						return $ || (s.opacity = V(t)), n = Ht(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Nt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
					},
					it = function(t, e, i, n, r) {
						var s, o, a, l = {},
							u = t.style;
						for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : tt(t, o), void 0 !== u[o] && (a = new _t(u, o, u[o], a)));
						if (n)
							for (o in n) "className" !== o && (l[o] = n[o]);
						return {
							difs: l,
							firstMPT: a
						}
					},
					nt = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					st = function(t, e, i) {
						if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Q(t))[e] || 0;
						if (t.getBBox && jt(t)) return t.getBBox()[e] || 0;
						var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
							r = nt[e],
							s = r.length;
						for (i = i || Q(t, null); --s > -1;) n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0;
						return n
					},
					ot = function(t, e) {
						if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
						(null == t || "" === t) && (t = "0 0");
						var i, n = t.split(" "),
							r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
							s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
						if (n.length > 3 && !e) {
							for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ot(n[i]));
							return t.join(",")
						}
						return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
					},
					at = function(t, e) {
						return "function" == typeof t && (t = t(_, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
					},
					lt = function(t, e) {
						return "function" == typeof t && (t = t(_, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
					},
					ut = function(t, e, i, n) {
						var r, s, o, a, l, u = 1e-6;
						return "function" == typeof t && (t = t(_, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), u > a && a > -u && (a = 0), a
					},
					ct = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					ht = function(t, e, i) {
						return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
					},
					pt = o.parseColor = function(t, e) {
						var i, n, r, s, o, a, l, u, c, h, p;
						if (t)
							if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
							else {
								if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
								else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
								else if ("hsl" === t.substr(0, 3))
									if (i = p = t.match(y), e) {
										if (-1 !== t.indexOf("=")) return t.match(v)
									} else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = ht(o + 1 / 3, n, r), i[1] = ht(o, n, r), i[2] = ht(o - 1 / 3, n, r);
								else i = t.match(y) || ct.transparent;
								i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
							}
						else i = ct.black;
						return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), c = Math.min(n, r, s), l = (u + c) / 2, u === c ? o = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (s > r ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
					},
					ft = function(t, e) {
						var i, n, r, s = t.match(dt) || [],
							o = 0,
							a = s.length ? "" : t;
						for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = pt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
						return a + t.substr(o)
					},
					dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (u in ct) dt += "|" + u + "\\b";
				dt = new RegExp(dt + ")", "gi"), o.colorStringFilter = function(t) {
					var e, i = t[0] + t[1];
					dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), dt.lastIndex = 0
				}, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
				var mt = function(t, e, i, n) {
						if (null == t) return function(t) {
							return t
						};
						var r, s = e ? (t.match(dt) || [""])[0] : "",
							o = t.split(s).join("").match(x) || [],
							a = t.substr(0, t.indexOf(o[0])),
							l = ")" === t.charAt(t.length - 1) ? ")" : "",
							u = -1 !== t.indexOf(" ") ? " " : ",",
							c = o.length,
							h = c > 0 ? o[0].replace(y, "") : "";
						return c ? r = e ? function(t) {
							var e, p, f, d;
							if ("number" == typeof t) t += h;
							else if (n && M.test(t)) {
								for (d = t.replace(M, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]);
								return d.join(",")
							}
							if (e = (t.match(dt) || [s])[0], p = t.split(e).join("").match(x) || [], f = p.length, c > f--)
								for (; ++f < c;) p[f] = i ? p[(f - 1) / 2 | 0] : o[f];
							return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
						} : function(t) {
							var e, s, p;
							if ("number" == typeof t) t += h;
							else if (n && M.test(t)) {
								for (s = t.replace(M, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]);
								return s.join(",")
							}
							if (e = t.match(x) || [], p = e.length, c > p--)
								for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
							return a + e.join(u) + l
						} : function(t) {
							return t
						}
					},
					gt = function(t) {
						return t = t.split(","),
							function(e, i, n, r, s, o, a) {
								var l, u = (i + "").split(" ");
								for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
								return r.parse(e, a, s, o)
							}
					},
					_t = (Y._setPluginRatio = function(t) {
						this.plugin.setRatio(t);
						for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT, u = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : u > e && e > -u && (e = 0), l.t[l.p] = e, l = l._next;
						if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
							for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
								if (i = l.t, i.type) {
									if (1 === i.type) {
										for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
										i[s] = r
									}
								} else i[s] = i.s + i.xs0;
								l = l._next
							}
					}, function(t, e, i, n, r) {
						this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
					}),
					yt = (Y._parseToProxy = function(t, e, i, n, r, s) {
						var o, a, l, u, c, h = n,
							p = {},
							f = {},
							d = i._transform,
							m = j;
						for (i._transform = null, j = e, n = c = i.parse(t, e, n, r), j = m, s && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
							if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, s || (u = new _t(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
								for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], s || (u = new _t(n, l, a, u, n.rxp[l]));
							n = n._next
						}
						return {
							proxy: p,
							end: f,
							firstMPT: u,
							pt: c
						}
					}, Y.CSSPropTween = function(t, e, n, r, o, a, l, u, c, h, p) {
						this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof yt || s.push(this.n), this.r = u, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
					}),
					vt = function(t, e, i, n, r, s) {
						var o = new yt(t, e, i, n - i, r, (-1), s);
						return o.b = i, o.e = o.xs0 = n, o
					},
					xt = o.parseComplex = function(t, e, i, n, r, s, a, l, u, h) {
						i = i || s || "", "function" == typeof n && (n = n(_, g)), a = new yt(t, e, 0, 0, a, h ? 2 : 1, null, (!1), l, i, n), n += "", r && dt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
						var p, f, d, m, x, b, T, w, k, E, C, S, P, O = i.split(", ").join(",").split(" "),
							N = n.split(", ").join(",").split(" "),
							A = O.length,
							D = c !== !1;
						for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(M, ", ").split(" "), N = N.join(" ").replace(M, ", ").split(" "), A = O.length), A !== N.length && (O = (s || "").split(" "), A = O.length), a.plugin = u, a.setRatio = h, dt.lastIndex = 0, p = 0; A > p; p++)
							if (m = O[p], x = N[p], w = parseFloat(m), w || 0 === w) a.appendXtra("", w, at(x, w), x.replace(v, ""), D && -1 !== x.indexOf("px"), !0);
							else if (r && dt.test(m)) S = x.indexOf(")") + 1, S = ")" + (S ? x.substr(S) : ""), P = -1 !== x.indexOf("hsl") && $, m = pt(m, P), x = pt(x, P), k = m.length + x.length > 6, k && !$ && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(N[p]).join("transparent")) : ($ || (k = !1), P ? a.appendXtra(k ? "hsla(" : "hsl(", m[0], at(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], at(x[1], m[1]), "%,", !1).appendXtra("", m[2], at(x[2], m[2]), k ? "%," : "%" + S, !1) : a.appendXtra(k ? "rgba(" : "rgb(", m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], k ? "," : S, !0), k && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, S, !1))), dt.lastIndex = 0;
						else if (b = m.match(y)) {
							if (T = x.match(v), !T || T.length !== b.length) return a;
							for (d = 0, f = 0; f < b.length; f++) C = b[f], E = m.indexOf(C, d), a.appendXtra(m.substr(d, E - d), Number(C), at(T[f], C), "", D && "px" === m.substr(E + C.length, 2), 0 === f), d = E + C.length;
							a["xs" + a.l] += m.substr(d)
						} else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
						if (-1 !== n.indexOf("=") && a.data) {
							for (S = a.xs0 + a.data.s, p = 1; p < a.l; p++) S += a["xs" + p] + a.data["xn" + p];
							a.e = S + a["xs" + p]
						}
						return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
					},
					bt = 9;
				for (u = yt.prototype, u.l = u.pr = 0; --bt > 0;) u["xn" + bt] = 0, u["xs" + bt] = "";
				u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
					var o = this,
						a = o.l;
					return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new yt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
						s: e + i
					}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
				};
				var Tt = function(t, e) {
						e = e || {}, this.p = e.prefix ? Z(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
					},
					wt = Y._registerComplexSpecialProp = function(t, e, i) {
						"object" != typeof e && (e = {
							parser: i
						});
						var n, r, s = t.split(","),
							o = e.defaultValue;
						for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new Tt(s[n], e)
					},
					kt = Y._registerPluginProp = function(t) {
						if (!l[t]) {
							var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
							wt(t, {
								parser: function(t, i, n, r, s, o, u) {
									var c = a.com.greensock.plugins[e];
									return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, u)) : (W("Error: " + e + " js file not loaded."), s)
								}
							})
						}
					};
				u = Tt.prototype, u.parseComplex = function(t, e, i, n, r, s) {
					var o, a, l, u, c, h, p = this.keyword;
					if (this.multi && (M.test(i) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : p && (a = [e], l = [i])), l) {
						for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), h = i.indexOf(p), c !== h && (-1 === h ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
						e = a.join(", "), i = l.join(", ")
					}
					return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
				}, u.parse = function(t, e, i, n, s, o, a) {
					return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
				}, o.registerSpecialProp = function(t, e, i) {
					wt(t, {
						parser: function(t, n, r, s, o, a, l) {
							var u = new yt(t, r, 0, 0, o, 2, r, (!1), i);
							return u.plugin = a, u.setRatio = e(t, n, s._tween, r), u
						},
						priority: i
					})
				}, o.useSVGTransformAttr = p || f;
				var Et, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					St = Z("transform"),
					Pt = U + "transform",
					Ot = Z("transformOrigin"),
					Nt = null !== Z("perspective"),
					At = Y.Transform = function() {
						this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !Nt) && (o.defaultForce3D || "auto")
					},
					Dt = window.SVGElement,
					Rt = function(t, e, i) {
						var n, r = X.createElementNS("http://www.w3.org/2000/svg", t),
							s = /([a-z])([A-Z])/g;
						for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
						return e.appendChild(r), r
					},
					Mt = X.documentElement,
					Ft = function() {
						var t, e, i, n = m || /Android/i.test(q) && !window.chrome;
						return X.createElementNS && !n && (t = Rt("svg", Mt), e = Rt("rect", t, {
							width: 100,
							height: 50,
							x: 100
						}), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[St] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Nt), Mt.removeChild(t)), n
					}(),
					Lt = function(t, e, i, n, r, s) {
						var a, l, u, c, h, p, f, d, m, g, _, y, v, x, b = t._gsTransform,
							T = zt(t, !0);
						b && (v = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(), e = ot(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = h = parseFloat(a[1]), n && T !== Xt && (p = T[0], f = T[1], d = T[2], m = T[3], g = T[4], _ = T[5], y = p * m - f * d, l = c * (m / y) + h * (-d / y) + (d * _ - m * g) / y, u = c * (-f / y) + h * (p / y) - (p * _ - f * g) / y, c = i.xOrigin = a[0] = l, h = i.yOrigin = a[1] = u), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (l = c - v, u = h - x, b.xOffset += l * T[0] + u * T[2] - l, b.yOffset += l * T[1] + u * T[3] - u) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
					},
					It = function(t) {
						try {
							return t.getBBox()
						} catch (t) {}
					},
					jt = function(t) {
						return !!(Dt && t.getBBox && t.getCTM && It(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
					},
					Xt = [1, 0, 0, 1, 0, 0],
					zt = function(t, e) {
						var i, n, r, s, o, a, l = t._gsTransform || new At,
							u = 1e5,
							c = t.style;
						if (St ? n = K(t, Pt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(D), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && St && ((a = "none" === Q(t).display) || !t.parentNode) && (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, Mt.appendChild(t)), n = K(t, Pt, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && $t(c, "display"), o && Mt.removeChild(t)), (l.svg || t.getBBox && jt(t)) && (i && -1 !== (c[St] + "").indexOf("matrix") && (n = c[St], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xt;
						for (r = (n || "").match(y) || [], bt = r.length; --bt > -1;) s = Number(r[bt]), r[bt] = (o = s - (s |= 0)) ? (o * u + (0 > o ? -.5 : .5) | 0) / u + s : s;
						return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
					},
					Ht = Y.getTransform = function(t, i, n, r) {
						if (t._gsTransform && n && !r) return t._gsTransform;
						var s, a, l, u, c, h, p = n ? t._gsTransform || new At : new At,
							f = p.scaleX < 0,
							d = 2e-5,
							m = 1e5,
							g = Nt ? parseFloat(K(t, Ot, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
							_ = parseFloat(o.defaultTransformPerspective) || 0;
						if (p.svg = !(!t.getBBox || !jt(t)), p.svg && (Lt(t, K(t, Ot, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Et = o.useSVGTransformAttr || Ft), s = zt(t), s !== Xt) {
							if (16 === s.length) {
								var y, v, x, b, T, w = s[0],
									k = s[1],
									E = s[2],
									C = s[3],
									S = s[4],
									P = s[5],
									O = s[6],
									N = s[7],
									A = s[8],
									D = s[9],
									R = s[10],
									M = s[12],
									F = s[13],
									L = s[14],
									j = s[11],
									X = Math.atan2(O, R);
								p.zOrigin && (L = -p.zOrigin, M = A * L - s[12], F = D * L - s[13], L = R * L + p.zOrigin - s[14]), p.rotationX = X * I, X && (b = Math.cos(-X), T = Math.sin(-X), y = S * b + A * T, v = P * b + D * T, x = O * b + R * T, A = S * -T + A * b, D = P * -T + D * b, R = O * -T + R * b, j = N * -T + j * b, S = y, P = v, O = x), X = Math.atan2(-E, R), p.rotationY = X * I, X && (b = Math.cos(-X), T = Math.sin(-X), y = w * b - A * T, v = k * b - D * T, x = E * b - R * T, D = k * T + D * b, R = E * T + R * b, j = C * T + j * b, w = y, k = v, E = x), X = Math.atan2(k, w), p.rotation = X * I, X && (b = Math.cos(-X), T = Math.sin(-X), w = w * b + S * T, v = k * b + P * T, P = k * -T + P * b, O = E * -T + O * b, k = v), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), p.scaleX = (Math.sqrt(w * w + k * k) * m + .5 | 0) / m, p.scaleY = (Math.sqrt(P * P + D * D) * m + .5 | 0) / m, p.scaleZ = (Math.sqrt(O * O + R * R) * m + .5 | 0) / m, p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = S || P ? Math.atan2(S, P) * I + p.rotation : p.skewX || 0, Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180))), p.perspective = j ? 1 / (0 > j ? -j : j) : 0, p.x = M, p.y = F, p.z = L, p.svg && (p.x -= p.xOrigin - (p.xOrigin * w - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * k - p.xOrigin * P))
							} else if (!Nt || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
								var z = s.length >= 6,
									H = z ? s[0] : 1,
									B = s[1] || 0,
									Y = s[2] || 0,
									q = z ? s[3] : 1;
								p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(H * H + B * B), u = Math.sqrt(q * q + Y * Y), c = H || B ? Math.atan2(B, H) * I : p.rotation || 0, h = Y || q ? Math.atan2(Y, q) * I + c : p.skewX || 0, Math.abs(h) > 90 && Math.abs(h) < 270 && (f ? (l *= -1, h += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, h += 0 >= h ? 180 : -180)), p.scaleX = l, p.scaleY = u, p.rotation = c, p.skewX = h, Nt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * Y), p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * q))
							}
							p.zOrigin = g;
							for (a in p) p[a] < d && p[a] > -d && (p[a] = 0)
						}
						return n && (t._gsTransform = p, p.svg && (Et && t.style[St] ? e.delayedCall(.001, function() {
							$t(t.style, St)
						}) : !Et && t.getAttribute("transform") && e.delayedCall(.001, function() {
							t.removeAttribute("transform")
						}))), p
					},
					Bt = function(t) {
						var e, i, n = this.data,
							r = -n.rotation * L,
							s = r + n.skewX * L,
							o = 1e5,
							a = (Math.cos(r) * n.scaleX * o | 0) / o,
							l = (Math.sin(r) * n.scaleX * o | 0) / o,
							u = (Math.sin(s) * -n.scaleY * o | 0) / o,
							c = (Math.cos(s) * n.scaleY * o | 0) / o,
							h = this.t.style,
							p = this.t.currentStyle;
						if (p) {
							i = l, l = -u, u = -i, e = p.filter, h.filter = "";
							var f, d, g = this.t.offsetWidth,
								_ = this.t.offsetHeight,
								y = "absolute" !== p.position,
								v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
								x = n.x + g * n.xPercent / 100,
								b = n.y + _ * n.yPercent / 100;
							if (null != n.ox && (f = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, d = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2, x += f - (f * a + d * l), b += d - (f * u + d * c)), y ? (f = g / 2, d = _ / 2, v += ", Dx=" + (f - (f * a + d * l) + x) + ", Dy=" + (d - (f * u + d * c) + b) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(R, v) : h.filter = v + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === c && (y && -1 === v.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
								var k, E, C, S = 8 > m ? 1 : -1;
								for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + x), n.ieOffsetY = Math.round((_ - ((0 > c ? -c : c) * _ + (0 > u ? -u : u) * g)) / 2 + b), bt = 0; 4 > bt; bt++) E = rt[bt], k = p[E], i = -1 !== k.indexOf("px") ? parseFloat(k) : J(this.t, E, parseFloat(k), k.replace(T, "")) || 0, C = i !== n[E] ? 2 > bt ? -n.ieOffsetX : -n.ieOffsetY : 2 > bt ? f - n.ieOffsetX : d - n.ieOffsetY, h[E] = (n[E] = Math.round(i - C * (0 === bt || 2 === bt ? 1 : S))) + "px"
							}
						}
					},
					Yt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
						var e, i, n, r, s, o, a, l, u, c, h, p, d, m, g, _, y, v, x, b, T, w, k, E = this.data,
							C = this.t.style,
							S = E.rotation,
							P = E.rotationX,
							O = E.rotationY,
							N = E.scaleX,
							A = E.scaleY,
							D = E.scaleZ,
							R = E.x,
							M = E.y,
							F = E.z,
							I = E.svg,
							j = E.perspective,
							X = E.force3D;
						if (((1 === t || 0 === t) && "auto" === X && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !X) && !F && !j && !O && !P && 1 === D || Et && I || !Nt) return void(S || E.skewX || I ? (S *= L, w = E.skewX * L, k = 1e5, e = Math.cos(S) * N, r = Math.sin(S) * N, i = Math.sin(S - w) * -A, s = Math.cos(S - w) * A, w && "simple" === E.skewType && (y = Math.tan(w - E.skewY * L), y = Math.sqrt(1 + y * y), i *= y, s *= y, E.skewY && (y = Math.tan(E.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y)), I && (R += E.xOrigin - (E.xOrigin * e + E.yOrigin * i) + E.xOffset, M += E.yOrigin - (E.xOrigin * r + E.yOrigin * s) + E.yOffset, Et && (E.xPercent || E.yPercent) && (m = this.t.getBBox(), R += .01 * E.xPercent * m.width, M += .01 * E.yPercent * m.height), m = 1e-6, m > R && R > -m && (R = 0), m > M && M > -m && (M = 0)), x = (e * k | 0) / k + "," + (r * k | 0) / k + "," + (i * k | 0) / k + "," + (s * k | 0) / k + "," + R + "," + M + ")", I && Et ? this.t.setAttribute("transform", "matrix(" + x) : C[St] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) matrix(" : "matrix(") + x) : C[St] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) matrix(" : "matrix(") + N + ",0,0," + A + "," + R + "," + M + ")");
						if (f && (m = 1e-4, m > N && N > -m && (N = D = 2e-5), m > A && A > -m && (A = D = 2e-5), !j || E.z || E.rotationX || E.rotationY || (j = 0)), S || E.skewX) S *= L, g = e = Math.cos(S), _ = r = Math.sin(S), E.skewX && (S -= E.skewX * L, g = Math.cos(S), _ = Math.sin(S), "simple" === E.skewType && (y = Math.tan((E.skewX - E.skewY) * L), y = Math.sqrt(1 + y * y), g *= y, _ *= y, E.skewY && (y = Math.tan(E.skewY * L), y = Math.sqrt(1 + y * y), e *= y, r *= y))), i = -_, s = g;
						else {
							if (!(O || P || 1 !== D || j || I)) return void(C[St] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + M + "px," + F + "px)" + (1 !== N || 1 !== A ? " scale(" + N + "," + A + ")" : ""));
							e = s = 1, i = r = 0
						}
						u = 1, n = o = a = l = c = h = 0, p = j ? -1 / j : 0, d = E.zOrigin, m = 1e-6, b = ",", T = "0", S = O * L, S && (g = Math.cos(S), _ = Math.sin(S), a = -_, c = p * -_, n = e * _, o = r * _, u = g, p *= g, e *= g, r *= g), S = P * L, S && (g = Math.cos(S), _ = Math.sin(S), y = i * g + n * _, v = s * g + o * _, l = u * _, h = p * _, n = i * -_ + n * g, o = s * -_ + o * g, u *= g, p *= g, i = y, s = v), 1 !== D && (n *= D, o *= D, u *= D, p *= D), 1 !== A && (i *= A, s *= A, l *= A, h *= A), 1 !== N && (e *= N, r *= N, a *= N, c *= N), (d || I) && (d && (R += n * -d, M += o * -d, F += u * -d + d), I && (R += E.xOrigin - (E.xOrigin * e + E.yOrigin * i) + E.xOffset, M += E.yOrigin - (E.xOrigin * r + E.yOrigin * s) + E.yOffset), m > R && R > -m && (R = T), m > M && M > -m && (M = T), m > F && F > -m && (F = 0)), x = E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? T : e) + b + (m > r && r > -m ? T : r) + b + (m > a && a > -m ? T : a), x += b + (m > c && c > -m ? T : c) + b + (m > i && i > -m ? T : i) + b + (m > s && s > -m ? T : s), P || O || 1 !== D ? (x += b + (m > l && l > -m ? T : l) + b + (m > h && h > -m ? T : h) + b + (m > n && n > -m ? T : n), x += b + (m > o && o > -m ? T : o) + b + (m > u && u > -m ? T : u) + b + (m > p && p > -m ? T : p) + b) : x += ",0,0,0,0,1,0,", x += R + b + M + b + F + b + (j ? 1 + -F / j : 1) + ")", C[St] = x
					};
				u = At.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
					parser: function(t, e, i, n, s, a, l) {
						if (n._lastParsedTransform === l) return s;
						n._lastParsedTransform = l;
						var u;
						"function" == typeof l[i] && (u = l[i], l[i] = e);
						var c, h, p, f, d, m, y, v, x, b = t._gsTransform,
							T = t.style,
							w = 1e-6,
							k = Ct.length,
							E = l,
							C = {},
							S = "transformOrigin",
							P = Ht(t, r, !0, E.parseTransform),
							O = E.transform && ("function" == typeof E.transform ? E.transform(_, g) : E.transform);
						if (n._transform = P, O && "string" == typeof O && St) h = H.style, h[St] = O, h.display = "block", h.position = "absolute", X.body.appendChild(H), c = Ht(H, null, !1), P.svg && (m = P.xOrigin, y = P.yOrigin, c.x -= P.xOffset, c.y -= P.yOffset, (E.transformOrigin || E.svgOrigin) && (O = {}, Lt(t, ot(E.transformOrigin), O, E.svgOrigin, E.smoothOrigin, !0), m = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset - P.xOffset, c.y -= O.yOffset - P.yOffset), (m || y) && (v = zt(H, !0), c.x -= m - (m * v[0] + y * v[2]), c.y -= y - (m * v[1] + y * v[3]))), X.body.removeChild(H), c.perspective || (c.perspective = P.perspective),
							null != E.xPercent && (c.xPercent = lt(E.xPercent, P.xPercent)), null != E.yPercent && (c.yPercent = lt(E.yPercent, P.yPercent));
						else if ("object" == typeof E) {
							if (c = {
									scaleX: lt(null != E.scaleX ? E.scaleX : E.scale, P.scaleX),
									scaleY: lt(null != E.scaleY ? E.scaleY : E.scale, P.scaleY),
									scaleZ: lt(E.scaleZ, P.scaleZ),
									x: lt(E.x, P.x),
									y: lt(E.y, P.y),
									z: lt(E.z, P.z),
									xPercent: lt(E.xPercent, P.xPercent),
									yPercent: lt(E.yPercent, P.yPercent),
									perspective: lt(E.transformPerspective, P.perspective)
								}, d = E.directionalRotation, null != d)
								if ("object" == typeof d)
									for (h in d) E[h] = d[h];
								else E.rotation = d;
								"string" == typeof E.x && -1 !== E.x.indexOf("%") && (c.x = 0, c.xPercent = lt(E.x, P.xPercent)), "string" == typeof E.y && -1 !== E.y.indexOf("%") && (c.y = 0, c.yPercent = lt(E.y, P.yPercent)), c.rotation = ut("rotation" in E ? E.rotation : "shortRotation" in E ? E.shortRotation + "_short" : "rotationZ" in E ? E.rotationZ : P.rotation - P.skewY, P.rotation - P.skewY, "rotation", C), Nt && (c.rotationX = ut("rotationX" in E ? E.rotationX : "shortRotationX" in E ? E.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", C), c.rotationY = ut("rotationY" in E ? E.rotationY : "shortRotationY" in E ? E.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", C)), c.skewX = ut(E.skewX, P.skewX - P.skewY), (c.skewY = ut(E.skewY, P.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
						}
						for (Nt && null != E.force3D && (P.force3D = E.force3D, f = !0), P.skewType = E.skewType || P.skewType || o.defaultSkewType, p = P.force3D || P.z || P.rotationX || P.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == E.scale || (c.scaleZ = 1); --k > -1;) x = Ct[k], O = c[x] - P[x], (O > w || -w > O || null != E[x] || null != j[x]) && (f = !0, s = new yt(P, x, P[x], O, s), x in C && (s.e = C[x]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
						return O = E.transformOrigin, P.svg && (O || E.svgOrigin) && (m = P.xOffset, y = P.yOffset, Lt(t, ot(O), c, E.svgOrigin, E.smoothOrigin), s = vt(P, "xOrigin", (b ? P : c).xOrigin, c.xOrigin, s, S), s = vt(P, "yOrigin", (b ? P : c).yOrigin, c.yOrigin, s, S), (m !== P.xOffset || y !== P.yOffset) && (s = vt(P, "xOffset", b ? m : P.xOffset, P.xOffset, s, S), s = vt(P, "yOffset", b ? y : P.yOffset, P.yOffset, s, S)), O = Et ? null : "0px 0px"), (O || Nt && p && P.zOrigin) && (St ? (f = !0, x = Ot, O = (O || K(t, x, r, !1, "50% 50%")) + "", s = new yt(T, x, 0, 0, s, (-1), S), s.b = T[x], s.plugin = a, Nt ? (h = P.zOrigin, O = O.split(" "), P.zOrigin = (O.length > 2 && (0 === h || "0px" !== O[2]) ? parseFloat(O[2]) : h) || 0, s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px", s = new yt(P, "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = P.zOrigin) : s.xs0 = s.e = O) : ot(O + "", P)), f && (n._transformType = P.svg && Et || !p && 3 !== this._transformType ? 2 : 3), u && (l[i] = u), s
					},
					prefix: !0
				}), wt("boxShadow", {
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), wt("borderRadius", {
					defaultValue: "0px",
					parser: function(t, e, i, s, o, a) {
						e = this.format(e);
						var l, u, c, h, p, f, d, m, g, _, y, v, x, b, T, w, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							E = t.style;
						for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < k.length; u++) this.p.indexOf("border") && (k[u] = Z(k[u])), p = h = K(t, k[u], r, !1, "0px"), -1 !== p.indexOf(" ") && (h = p.split(" "), p = h[0], h = h[1]), f = c = l[u], d = parseFloat(p), v = p.substr((d + "").length), x = "=" === f.charAt(1), x ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = n[i] || v), y !== v && (b = J(t, "borderLeft", d, v), T = J(t, "borderTop", d, v), "%" === y ? (p = b / g * 100 + "%", h = T / _ * 100 + "%") : "em" === y ? (w = J(t, "borderLeft", 1, "em"), p = b / w + "em", h = T / w + "em") : (p = b + "px", h = T + "px"), x && (f = parseFloat(p) + m + y, c = parseFloat(h) + m + y)), o = xt(E, k[u], p + " " + h, f + " " + c, !1, "0px", o);
						return o
					},
					prefix: !0,
					formatter: mt("0px 0px 0px 0px", !1, !0)
				}), wt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
					defaultValue: "0px",
					parser: function(t, e, i, n, s, o) {
						return xt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
					},
					prefix: !0,
					formatter: mt("0px 0px", !1, !0)
				}), wt("backgroundPosition", {
					defaultValue: "0 0",
					parser: function(t, e, i, n, s, o) {
						var a, l, u, c, h, p, f = "background-position",
							d = r || Q(t, null),
							g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
							_ = this.format(e);
						if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (p = K(t, "backgroundImage").replace(O, ""), p && "none" !== p)) {
							for (a = g.split(" "), l = _.split(" "), B.setAttribute("src", p), u = 2; --u > -1;) g = a[u], c = -1 !== g.indexOf("%"), c !== (-1 !== l[u].indexOf("%")) && (h = 0 === u ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[u] = c ? parseFloat(g) / 100 * h + "px" : parseFloat(g) / h * 100 + "%");
							g = a.join(" ")
						}
						return this.parseComplex(t.style, g, _, s, o)
					},
					formatter: ot
				}), wt("backgroundSize", {
					defaultValue: "0 0",
					formatter: function(t) {
						return t += "", ot(-1 === t.indexOf(" ") ? t + " " + t : t)
					}
				}), wt("perspective", {
					defaultValue: "0px",
					prefix: !0
				}), wt("perspectiveOrigin", {
					defaultValue: "50% 50%",
					prefix: !0
				}), wt("transformStyle", {
					prefix: !0
				}), wt("backfaceVisibility", {
					prefix: !0
				}), wt("userSelect", {
					prefix: !0
				}), wt("margin", {
					parser: gt("marginTop,marginRight,marginBottom,marginLeft")
				}), wt("padding", {
					parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), wt("clip", {
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function(t, e, i, n, s, o) {
						var a, l, u;
						return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
					}
				}), wt("textShadow", {
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), wt("autoRound,strictUnits", {
					parser: function(t, e, i, n, r) {
						return r
					}
				}), wt("border", {
					defaultValue: "0px solid #000",
					parser: function(t, e, i, n, s, o) {
						var a = K(t, "borderTopWidth", r, !1, "0px"),
							l = this.format(e).split(" "),
							u = l[0].replace(T, "");
						return "px" !== u && (a = parseFloat(a) / J(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
					},
					color: !0,
					formatter: function(t) {
						var e = t.split(" ");
						return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
					}
				}), wt("borderWidth", {
					parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), wt("float,cssFloat,styleFloat", {
					parser: function(t, e, i, n, r, s) {
						var o = t.style,
							a = "cssFloat" in o ? "cssFloat" : "styleFloat";
						return new yt(o, a, 0, 0, r, (-1), i, (!1), 0, o[a], e)
					}
				});
				var qt = function(t) {
					var e, i = this.t,
						n = i.filter || K(this.data, "filter") || "",
						r = this.s + this.c * t | 0;
					100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(E, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
				};
				wt("opacity,alpha,autoAlpha", {
					defaultValue: "1",
					parser: function(t, e, i, n, s, o) {
						var a = parseFloat(K(t, "opacity", r, !1, "1")),
							l = t.style,
							u = "autoAlpha" === i;
						return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), $ ? s = new yt(l, "opacity", a, e - a, s) : (s = new yt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = qt), u && (s = new yt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
					}
				});
				var $t = function(t, e) {
						e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
					},
					Vt = function(t) {
						if (this.t._gsClassPT = this, 1 === t || 0 === t) {
							this.t.setAttribute("class", 0 === t ? this.b : this.e);
							for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
							1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				wt("className", {
					parser: function(t, e, n, s, o, a, l) {
						var u, c, h, p, f, d = t.getAttribute("class") || "",
							m = t.style.cssText;
						if (o = s._classNamePT = new yt(t, n, 0, 0, o, 2), o.setRatio = Vt, o.pr = -11, i = !0, o.b = d, c = et(t, r), h = t._gsClassPT) {
							for (p = {}, f = h.data; f;) p[f.p] = 1, f = f._next;
							h.setRatio(1)
						}
						return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), u = it(t, c, et(t), l, p), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)
					}
				});
				var Wt = function(t) {
					if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
						var e, i, n, r, s, o = this.t.style,
							a = l.transform.parse;
						if ("all" === this.e) o.cssText = "", r = !0;
						else
							for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p), $t(o, i);
						r && ($t(o, St), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for (wt("clearProps", {
						parser: function(t, e, n, r, s) {
							return s = new yt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
						}
					}), u = "bezier,throwProps,physicsProps,physics2D".split(","), bt = u.length; bt--;) kt(u[bt]);
				u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, u) {
					if (!t.nodeType) return !1;
					this._target = g = t, this._tween = a, this._vars = e, _ = u, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = Q(t, ""), s = this._overwriteProps;
					var f, m, y, v, x, b, T, w, E, C = t.style;
					if (h && "" === C.zIndex && (f = K(t, "zIndex", r), ("auto" === f || "" === f) && this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (v = C.cssText, f = et(t, r), C.cssText = v + ";" + e, f = it(t, f, et(t)).difs, !$ && k.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, C.cssText = v), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
						for (E = 3 === this._transformType, St ? p && (h = !0, "" === C.zIndex && (T = K(t, "zIndex", r), ("auto" === T || "" === T) && this._addLazySet(C, "zIndex", 0)), d && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (E ? "visible" : "hidden"))) : C.zoom = 1, y = m; y && y._next;) y = y._next;
						w = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, y), w.setRatio = St ? Yt : Bt, w.data = this._transform || Ht(t, r, !0), w.tween = a, w.pr = -1, s.pop()
					}
					if (i) {
						for (; m;) {
							for (b = m._next, y = v; y && y.pr > m.pr;) y = y._next;
							(m._prev = y ? y._prev : x) ? m._prev._next = m: v = m, (m._next = y) ? y._prev = m : x = m, m = b
						}
						this._firstPT = v
					}
					return !0
				}, u.parse = function(t, e, i, s) {
					var o, a, u, h, p, f, d, m, y, v, x = t.style;
					for (o in e) f = e[o], "function" == typeof f && (f = f(_, g)), a = l[o], a ? i = a.parse(t, f, o, this, i, s, e) : (p = K(t, o, r) + "", y = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && C.test(f) ? (y || (f = pt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = xt(x, o, p, f, !0, "transparent", i, 0, s)) : y && F.test(f) ? i = xt(x, o, p, f, !0, null, i, 0, s) : (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (u = st(t, o, r), d = "px") : "left" === o || "top" === o ? (u = tt(t, o, r), d = "px") : (u = "opacity" !== o ? 0 : 1, d = "")), v = y && "=" === f.charAt(1), v ? (h = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), h *= parseFloat(f), m = f.replace(T, "")) : (h = parseFloat(f), m = y ? f.replace(T, "") : ""), "" === m && (m = o in n ? n[o] : d), f = h || 0 === h ? (v ? h + u : h) + m : e[o], d !== m && "" !== m && (h || 0 === h) && u && (u = J(t, o, u, d), "%" === m ? (u /= J(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? u /= J(t, o, 1, m) : "px" !== m && (h = J(t, o, h, m), m = "px"), v && (h || 0 === h) && (f = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== x[o] && (f || f + "" != "NaN" && null != f) ? (i = new yt(x, o, h || u || 0, 0, i, (-1), o, (!1), 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : W("invalid " + o + " tween value: " + e[o]) : (i = new yt(x, o, u, h - u, i, 0, o, c !== !1 && ("px" === m || "zIndex" === o), 0, p, f), i.xs0 = m))), s && i && !i.plugin && (i.plugin = s);
					return i
				}, u.setRatio = function(t) {
					var e, i, n, r = this._firstPT,
						s = 1e-6;
					if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
							for (; r;) {
								if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
									if (1 === r.type)
										if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
										else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
								else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
								else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
								else {
									for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
									r.t[r.p] = i
								} else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
								else r.t[r.p] = e + r.xs0;
								r = r._next
							} else
								for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
						else
							for (; r;) {
								if (2 !== r.type)
									if (r.r && -1 !== r.type)
										if (e = Math.round(r.s + r.c), r.type) {
											if (1 === r.type) {
												for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
												r.t[r.p] = i
											}
										} else r.t[r.p] = e + r.xs0;
								else r.t[r.p] = r.e;
								else r.setRatio(t);
								r = r._next
							}
				}, u._enableTransforms = function(t) {
					this._transform = this._transform || Ht(this._target, r, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
				};
				var Ut = function(t) {
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				u._addLazySet = function(t, e, i) {
					var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
					n.e = i, n.setRatio = Ut, n.data = this
				}, u._linkCSSP = function(t, e, i, n) {
					return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
				}, u._mod = function(t) {
					for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
				}, u._kill = function(e) {
					var i, n, r, s = e;
					if (e.autoAlpha || e.alpha) {
						s = {};
						for (n in e) s[n] = e[n];
						s.opacity = 1, s.autoAlpha && (s.visibility = 1)
					}
					for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
					return t.prototype._kill.call(this, s)
				};
				var Gt = function(t, e, i) {
					var n, r, s, o;
					if (t.slice)
						for (r = t.length; --r > -1;) Gt(t[r], e, i);
					else
						for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(et(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Gt(s, e, i)
				};
				return o.cascadeTo = function(t, i, n) {
					var r, s, o, a, l = e.to(t, i, n),
						u = [l],
						c = [],
						h = [],
						p = [],
						f = e._internals.reservedProps;
					for (t = l._targets || l.target, Gt(t, c, p), l.render(i, !0, !0), Gt(t, h), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
						if (s = it(p[r], c[r], h[r]), s.firstMPT) {
							s = s.difs;
							for (o in n) f[o] && (s[o] = n[o]);
							a = {};
							for (o in s) a[o] = c[r][o];
							u.push(e.fromTo(p[r], i, a, s))
						}
					return u
				}, t.activate([o]), o
			}, !0),
			function() {
				var t = _gsScope._gsDefine.plugin({
						propName: "roundProps",
						version: "1.6.0",
						priority: -1,
						API: 2,
						init: function(t, e, i) {
							return this._tween = i, !0
						}
					}),
					e = function(t) {
						for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
					},
					i = t.prototype;
				i._onInitAllProps = function() {
					for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
					for (o = s.length; --o > -1;)
						for (t = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = l)), i = n;
					return !1
				}, i._add = function(t, e, i, n) {
					this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
				}
			}(),
			function() {
				_gsScope._gsDefine.plugin({
					propName: "attr",
					API: 2,
					version: "0.6.0",
					init: function(t, e, i, n) {
						var r, s;
						if ("function" != typeof t.setAttribute) return !1;
						for (r in e) s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
						return !0
					}
				})
			}(), _gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.3.0",
				API: 2,
				init: function(t, e, i, n) {
					"object" != typeof e && (e = {
						rotation: e
					}), this.finals = {};
					var r, s, o, a, l, u, c = e.useRadians === !0 ? 2 * Math.PI : 360,
						h = 1e-6;
					for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), u = (a + "").split("_"), s = u[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, u.length && (s = u.join("_"), -1 !== s.indexOf("short") && (l %= c, l !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > h || -h > l) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
					return !0
				},
				set: function(t) {
					var e;
					if (1 !== t) this._super.setRatio.call(this, t);
					else
						for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
				}
			})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
				var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
					s = r.com.greensock,
					o = 2 * Math.PI,
					a = Math.PI / 2,
					l = s._class,
					u = function(e, i) {
						var n = l("easing." + e, function() {}, !0),
							r = n.prototype = new t;
						return r.constructor = n, r.getRatio = i, n
					},
					c = t.register || function() {},
					h = function(t, e, i, n, r) {
						var s = l("easing." + t, {
							easeOut: new e,
							easeIn: new i,
							easeInOut: new n
						}, !0);
						return c(s, t), s
					},
					p = function(t, e, i) {
						this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
					},
					f = function(e, i) {
						var n = l("easing." + e, function(t) {
								this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							r = n.prototype = new t;
						return r.constructor = n, r.getRatio = i, r.config = function(t) {
							return new n(t)
						}, n
					},
					d = h("Back", f("BackOut", function(t) {
						return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
					}), f("BackIn", function(t) {
						return t * t * ((this._p1 + 1) * t - this._p1)
					}), f("BackInOut", function(t) {
						return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
					})),
					m = l("easing.SlowMo", function(t, e, i) {
						e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
					}, !0),
					g = m.prototype = new t;
				return g.constructor = m, g.getRatio = function(t) {
					var e = t + (.5 - t) * this._p;
					return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
				}, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
					return new m(t, e, i)
				}, e = l("easing.SteppedEase", function(t) {
					t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
				}, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
					return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
				}, g.config = e.config = function(t) {
					return new e(t)
				}, i = l("easing.RoughEase", function(e) {
					e = e || {};
					for (var i, n, r, s, o, a, l = e.taper || "none", u = [], c = 0, h = 0 | (e.points || 20), f = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / h * f, n = g ? g.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : .5 > i ? (s = 2 * i, r = s * s * .5 * _) : (s = 2 * (1 - i), r = s * s * .5 * _), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[c++] = {
						x: i,
						y: n
					};
					for (u.sort(function(t, e) {
							return t.x - e.x
						}), a = new p(1, 1, null), f = h; --f > -1;) o = u[f], a = new p(o.x, o.y, a);
					this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
				}, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
					var e = this._prev;
					if (t > e.t) {
						for (; e.next && t >= e.t;) e = e.next;
						e = e.prev
					} else
						for (; e.prev && t <= e.t;) e = e.prev;
					return this._prev = e, e.v + (t - e.t) / e.gap * e.c
				}, g.config = function(t) {
					return new i(t)
				}, i.ease = new i, h("Bounce", u("BounceOut", function(t) {
					return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
				}), u("BounceIn", function(t) {
					return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
				}), u("BounceInOut", function(t) {
					var e = .5 > t;
					return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
				})), h("Circ", u("CircOut", function(t) {
					return Math.sqrt(1 - (t -= 1) * t)
				}), u("CircIn", function(t) {
					return -(Math.sqrt(1 - t * t) - 1)
				}), u("CircInOut", function(t) {
					return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
				})), n = function(e, i, n) {
					var r = l("easing." + e, function(t, e) {
							this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
						}, !0),
						s = r.prototype = new t;
					return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
						return new r(t, e)
					}, r
				}, h("Elastic", n("ElasticOut", function(t) {
					return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
				}, .3), n("ElasticIn", function(t) {
					return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
				}, .3), n("ElasticInOut", function(t) {
					return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
				}, .45)), h("Expo", u("ExpoOut", function(t) {
					return 1 - Math.pow(2, -10 * t)
				}), u("ExpoIn", function(t) {
					return Math.pow(2, 10 * (t - 1)) - .001
				}), u("ExpoInOut", function(t) {
					return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
				})), h("Sine", u("SineOut", function(t) {
					return Math.sin(t * a)
				}), u("SineIn", function(t) {
					return -Math.cos(t * a) + 1
				}), u("SineInOut", function(t) {
					return -.5 * (Math.cos(Math.PI * t) - 1)
				})), l("easing.EaseLookup", {
					find: function(e) {
						return t.map[e]
					}
				}, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(t, e) {
		"use strict";
		var i = {},
			n = t.GreenSockGlobals = t.GreenSockGlobals || t;
		if (!n.TweenLite) {
			var r, s, o, a, l, u = function(t) {
					var e, i = t.split("."),
						r = n;
					for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
					return r
				},
				c = u("com.greensock"),
				h = 1e-10,
				p = function(t) {
					var e, i = [],
						n = t.length;
					for (e = 0; e !== n; i.push(t[e++]));
					return i
				},
				f = function() {},
				d = function() {
					var t = Object.prototype.toString,
						e = t.call([]);
					return function(i) {
						return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
					}
				}(),
				m = {},
				g = function(r, s, o, a) {
					this.sc = m[r] ? m[r].sc : [], m[r] = this, this.gsClass = null, this.func = o;
					var l = [];
					this.check = function(c) {
						for (var h, p, f, d, _, y = s.length, v = y; --y > -1;)(h = m[s[y]] || new g(s[y], [])).gsClass ? (l[y] = h.gsClass, v--) : c && h.sc.push(this);
						if (0 === v && o) {
							if (p = ("com.greensock." + r).split("."), f = p.pop(), d = u(p.join("."))[f] = this.gsClass = o.apply(o, l), a)
								if (n[f] = i[f] = d, _ = "undefined" != typeof module && module.exports, !_ && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
									return d
								});
								else if (_)
								if (r === e) {
									module.exports = i[e] = d;
									for (y in i) d[y] = i[y]
								} else i[e] && (i[e][f] = d);
							for (y = 0; y < this.sc.length; y++) this.sc[y].check()
						}
					}, this.check(!0)
				},
				_ = t._gsDefine = function(t, e, i, n) {
					return new g(t, e, i, n)
				},
				y = c._class = function(t, e, i) {
					return e = e || function() {}, _(t, [], function() {
						return e
					}, i), e
				};
			_.globals = n;
			var v = [0, 0, 1, 1],
				x = y("easing.Ease", function(t, e, i, n) {
					this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
				}, !0),
				b = x.map = {},
				T = x.register = function(t, e, i, n) {
					for (var r, s, o, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
						for (s = l[u], r = n ? y("easing." + s, null, !0) : c.easing[s] || {}, o = h.length; --o > -1;) a = h[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
				};
			for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
					if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
					var e = this._type,
						i = this._power,
						n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
					return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
				}, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = r.length; --s > -1;) o = r[s] + ",Power" + s, T(new x(null, null, 1, s), o, "easeOut", !0), T(new x(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), T(new x(null, null, 3, s), o, "easeInOut");
			b.linear = c.easing.Linear.easeIn, b.swing = c.easing.Quad.easeInOut;
			var w = y("events.EventDispatcher", function(t) {
				this._listeners = {}, this._eventTarget = t || this
			});
			o = w.prototype, o.addEventListener = function(t, e, i, n, r) {
				r = r || 0;
				var s, o, u = this._listeners[t],
					c = 0;
				for (this !== a || l || a.wake(), null == u && (this._listeners[t] = u = []), o = u.length; --o > -1;) s = u[o], s.c === e && s.s === i ? u.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
				u.splice(c, 0, {
					c: e,
					s: i,
					up: n,
					pr: r
				})
			}, o.removeEventListener = function(t, e) {
				var i, n = this._listeners[t];
				if (n)
					for (i = n.length; --i > -1;)
						if (n[i].c === e) return void n.splice(i, 1)
			}, o.dispatchEvent = function(t) {
				var e, i, n, r = this._listeners[t];
				if (r)
					for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
						type: t,
						target: i
					}) : n.c.call(n.s || i))
			};
			var k = t.requestAnimationFrame,
				E = t.cancelAnimationFrame,
				C = Date.now || function() {
					return (new Date).getTime()
				},
				S = C();
			for (r = ["ms", "moz", "webkit", "o"], s = r.length; --s > -1 && !k;) k = t[r[s] + "RequestAnimationFrame"], E = t[r[s] + "CancelAnimationFrame"] || t[r[s] + "CancelRequestAnimationFrame"];
			y("Ticker", function(t, e) {
				var i, n, r, s, o, u = this,
					c = C(),
					p = !(e === !1 || !k) && "auto",
					d = 500,
					m = 33,
					g = "tick",
					_ = function(t) {
						var e, a, l = C() - S;
						l > d && (c += l - m), S += l, u.time = (S - c) / 1e3, e = u.time - o, (!i || e > 0 || t === !0) && (u.frame++, o += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = n(_)), a && u.dispatchEvent(g)
					};
				w.call(u), u.time = u.frame = 0, u.tick = function() {
					_(!0)
				}, u.lagSmoothing = function(t, e) {
					d = t || 1 / h, m = Math.min(e, d, 0)
				}, u.sleep = function() {
					null != r && (p && E ? E(r) : clearTimeout(r), n = f, r = null, u === a && (l = !1))
				}, u.wake = function(t) {
					null !== r ? u.sleep() : t ? c += -S + (S = C()) : u.frame > 10 && (S = C() - d + 5), n = 0 === i ? f : p && k ? k : function(t) {
						return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
					}, u === a && (l = !0), _(2)
				}, u.fps = function(t) {
					return arguments.length ? (i = t, s = 1 / (i || 60), o = this.time + s, void u.wake()) : i
				}, u.useRAF = function(t) {
					return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
				}, u.fps(t), setTimeout(function() {
					"auto" === p && u.frame < 5 && "hidden" !== document.visibilityState && u.useRAF(!1)
				}, 1500)
			}), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
			var P = y("core.Animation", function(t, e) {
				if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
					l || a.wake();
					var i = this.vars.useFrames ? V : W;
					i.add(this, i._time), this.vars.paused && this.paused(!0)
				}
			});
			a = P.ticker = new c.Ticker, o = P.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
			var O = function() {
				l && C() - S > 2e3 && a.wake(), setTimeout(O, 2e3)
			};
			O(), o.play = function(t, e) {
				return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
			}, o.pause = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!0)
			}, o.resume = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!1)
			}, o.seek = function(t, e) {
				return this.totalTime(Number(t), e !== !1)
			}, o.restart = function(t, e) {
				return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
			}, o.reverse = function(t, e) {
				return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
			}, o.render = function(t, e, i) {}, o.invalidate = function() {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, o.isActive = function() {
				var t, e = this._timeline,
					i = this._startTime;
				return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
			}, o._enabled = function(t, e) {
				return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
			}, o._kill = function(t, e) {
				return this._enabled(!1, !1)
			}, o.kill = function(t, e) {
				return this._kill(t, e), this
			}, o._uncache = function(t) {
				for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
				return this
			}, o._swapSelfInParams = function(t) {
				for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
				return i
			}, o._callback = function(t) {
				var e = this.vars,
					i = e[t],
					n = e[t + "Params"],
					r = e[t + "Scope"] || e.callbackScope || this,
					s = n ? n.length : 0;
				switch (s) {
					case 0:
						i.call(r);
						break;
					case 1:
						i.call(r, n[0]);
						break;
					case 2:
						i.call(r, n[0], n[1]);
						break;
					default:
						i.apply(r, n)
				}
			}, o.eventCallback = function(t, e, i, n) {
				if ("on" === (t || "").substr(0, 2)) {
					var r = this.vars;
					if (1 === arguments.length) return r[t];
					null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
				}
				return this
			}, o.delay = function(t) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
			}, o.duration = function(t) {
				return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, o.totalDuration = function(t) {
				return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
			}, o.time = function(t, e) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
			}, o.totalTime = function(t, e, i) {
				if (l || a.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var n = this._totalDuration,
							r = this._timeline;
						if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
							for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (M.length && G(), this.render(t, e, !1), M.length && G())
				}
				return this
			}, o.progress = o.totalProgress = function(t, e) {
				var i = this.duration();
				return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
			}, o.startTime = function(t) {
				return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
			}, o.endTime = function(t) {
				return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
			}, o.timeScale = function(t) {
				if (!arguments.length) return this._timeScale;
				if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
					var e = this._pauseTime,
						i = e || 0 === e ? e : this._timeline.totalTime();
					this._startTime = i - (i - this._startTime) * this._timeScale / t
				}
				return this._timeScale = t, this._uncache(!1)
			}, o.reversed = function(t) {
				return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, o.paused = function(t) {
				if (!arguments.length) return this._paused;
				var e, i, n = this._timeline;
				return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
			};
			var N = y("core.SimpleTimeline", function(t) {
				P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			o = N.prototype = new P, o.constructor = N, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, n) {
				var r, s;
				if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
					for (s = t._startTime; r && r._startTime > s;) r = r._prev;
				return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
			}, o._remove = function(t, e) {
				return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last),
					this._timeline && this._uncache(!0)), this
			}, o.render = function(t, e, i) {
				var n, r = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
			}, o.rawTime = function() {
				return l || a.wake(), this._totalTime
			};
			var A = y("TweenLite", function(e, i, n) {
					if (P.call(this, i, n), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
					this.target = e = "string" != typeof e ? e : A.selector(e) || e;
					var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
						l = this.vars.overwrite;
					if (this._overwrite = l = null == l ? $[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
						for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Z(s, this, !1), 1 === l && this._siblings[r].length > 1 && K(s, this, null, 1, this._siblings[r])) : (s = o[r--] = A.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
					else this._propLookup = {}, this._siblings = Z(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(Math.min(0, -this._delay)))
				}, !0),
				D = function(e) {
					return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
				},
				R = function(t, e) {
					var i, n = {};
					for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
					t.css = n
				};
			o = A.prototype = new P, o.constructor = A, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, A.version = "1.19.0", A.defaultEase = o._ease = new x(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = a, A.autoSleep = 120, A.lagSmoothing = function(t, e) {
				a.lagSmoothing(t, e)
			}, A.selector = t.$ || t.jQuery || function(e) {
				var i = t.$ || t.jQuery;
				return i ? (A.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
			};
			var M = [],
				F = {},
				L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				I = function(t) {
					for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
				},
				j = function(t, e, i, n) {
					var r, s, o, a, l, u, c, h = [t, e],
						p = 0,
						f = "",
						d = 0;
					for (h.start = t, i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(L) || [], s = e.match(L) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = s.length, a = 0; l > a; a++) c = s[a], u = e.substr(p, e.indexOf(c, p) - p), f += u || !a ? u : ",", p += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? f += c : (f && (h.push(f), f = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
						_next: h._firstPT,
						t: h,
						p: h.length - 1,
						s: o,
						c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
						f: 0,
						m: d && 4 > d ? Math.round : 0
					}), p += c.length;
					return f += e.substr(p), f && h.push(f), h.setRatio = I, h
				},
				X = function(t, e, i, n, r, s, o, a, l) {
					"function" == typeof n && (n = n(l || 0, t));
					var u, c, h = "get" === i ? t[e] : i,
						p = typeof t[e],
						f = "string" == typeof n && "=" === n.charAt(1),
						d = {
							t: t,
							p: e,
							s: h,
							f: "function" === p,
							pg: 0,
							n: r || e,
							m: s ? "function" == typeof s ? s : Math.round : 0,
							pr: 0,
							c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
						};
					return "number" !== p && ("function" === p && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), d.s = h = o ? t[c](o) : t[c]()), "string" == typeof h && (o || isNaN(h)) ? (d.fp = o, u = j(h, n, a || A.defaultStringFilter, d), d = {
						t: u,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: r || e,
						pr: 0,
						m: 0
					}) : f || (d.s = parseFloat(h), d.c = parseFloat(n) - d.s || 0)), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
				},
				z = A._internals = {
					isArray: d,
					isSelector: D,
					lazyTweens: M,
					blobDif: j
				},
				H = A._plugins = {},
				B = z.tweenLookup = {},
				Y = 0,
				q = z.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1
				},
				$ = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				V = P._rootFramesTimeline = new N,
				W = P._rootTimeline = new N,
				U = 30,
				G = z.lazyRender = function() {
					var t, e = M.length;
					for (F = {}; --e > -1;) t = M[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
					M.length = 0
				};
			W._startTime = a.time, V._startTime = a.frame, W._active = V._active = !0, setTimeout(G, 1), P._updateRoot = A.render = function() {
				var t, e, i;
				if (M.length && G(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), V.render((a.frame - V._startTime) * V._timeScale, !1, !1), M.length && G(), a.frame >= U) {
					U = a.frame + (parseInt(A.autoSleep, 10) || 120);
					for (i in B) {
						for (e = B[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
						0 === e.length && delete B[i]
					}
					if (i = W._first, (!i || i._paused) && A.autoSleep && !V._first && 1 === a._listeners.tick.length) {
						for (; i && i._paused;) i = i._next;
						i || a.sleep()
					}
				}
			}, a.addEventListener("tick", P._updateRoot);
			var Z = function(t, e, i) {
					var n, r, s = t._gsTweenID;
					if (B[s || (t._gsTweenID = s = "t" + Y++)] || (B[s] = {
							target: t,
							tweens: []
						}), e && (n = B[s].tweens, n[r = n.length] = e, i))
						for (; --r > -1;) n[r] === e && n.splice(r, 1);
					return B[s].tweens
				},
				Q = function(t, e, i, n) {
					var r, s, o = t.vars.onOverwrite;
					return o && (r = o(t, e, i, n)), o = A.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
				},
				K = function(t, e, i, n, r) {
					var s, o, a, l;
					if (1 === n || n >= 4) {
						for (l = r.length, s = 0; l > s; s++)
							if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
							else if (5 === n) break;
						return o
					}
					var u, c = e._startTime + h,
						p = [],
						f = 0,
						d = 0 === e._duration;
					for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || J(e, 0, d), 0 === J(a, u, d) && (p[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (p[f++] = a)));
					for (s = f; --s > -1;)
						if (a = p[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
							if (2 !== n && !Q(a, e)) continue;
							a._enabled(!1, !1) && (o = !0)
						}
					return o
				},
				J = function(t, e, i) {
					for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
						if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
						n = n._timeline
					}
					return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
				};
			o._init = function() {
				var t, e, i, n, r, s, o = this.vars,
					a = this._overwrittenProps,
					l = this._duration,
					u = !!o.immediateRender,
					c = o.ease;
				if (o.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
					for (n in o.startAt) r[n] = o.startAt[n];
					if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = A.to(this.target, 0, r), u)
						if (this._time > 0) this._startAt = null;
						else if (0 !== l) return
				} else if (o.runBackwards && 0 !== l)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (u = !1), i = {};
						for (n in o) q[n] && "autoCSS" !== n || (i[n] = o[n]);
						if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && o.lazy !== !1, i.immediateRender = u, this._startAt = A.to(this.target, 0, i), u) {
							if (0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || A.defaultEase : A.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
				else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
				if (e && A._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
					for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
				this._onUpdate = o.onUpdate, this._initted = !0
			}, o._initProps = function(e, i, n, r, s) {
				var o, a, l, u, c, h;
				if (null == e) return !1;
				F[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && R(this.vars, e);
				for (o in this.vars)
					if (h = this.vars[o], q[o]) h && (h instanceof Array || h.push && d(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
					else if (H[o] && (u = new H[o])._onInitTween(e, this.vars[o], this, s)) {
					for (this._firstPT = c = {
							_next: this._firstPT,
							t: u,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: o,
							pg: 1,
							pr: u._priority,
							m: 0
						}, a = u._overwriteProps.length; --a > -1;) i[u._overwriteProps[a]] = this._firstPT;
					(u._priority || u._onInitAllProps) && (l = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
				} else i[o] = X.call(this, e, o, "get", h, o, 0, null, this.vars.stringFilter, s);
				return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
			}, o.render = function(t, e, i) {
				var n, r, s, o, a = this._time,
					l = this._duration,
					u = this._rawPrevTime;
				if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > u || 0 >= t && t >= -1e-7 || u === h && "isPause" !== this.data) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : h);
				else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : h)), this._initted || (i = !0);
				else if (this._totalTime = this._time = t, this._easeType) {
					var c = t / l,
						p = this._easeType,
						f = this._easePower;
					(1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), 1 === p ? this.ratio = 1 - c : 2 === p ? this.ratio = c : .5 > t / l ? this.ratio = c / 2 : this.ratio = 1 - c / 2
				} else this.ratio = this._ease.getRatio(t / l);
				if (this._time !== a || i) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void(this._lazy = [t, e]);
						this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
					this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
				}
			}, o._kill = function(t, e, i) {
				if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
				var n, r, s, o, a, l, u, c, h, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
				if ((d(e) || D(e)) && "number" != typeof e[0])
					for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
				else {
					if (this._targets) {
						for (n = this._targets.length; --n > -1;)
							if (e === this._targets[n]) {
								a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
								break
							}
					} else {
						if (e !== this.target) return !1;
						a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
					}
					if (a) {
						if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
							for (s in u) a[s] && (h || (h = []), h.push(s));
							if ((h || !t) && !Q(this, i, e, h)) return !1
						}
						for (s in u)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return l
			}, o.invalidate = function() {
				return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(Math.min(0, -this._delay))), this
			}, o._enabled = function(t, e) {
				if (l || a.wake(), t && this._gc) {
					var i, n = this._targets;
					if (n)
						for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
					else this._siblings = Z(this.target, this, !0)
				}
				return P.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
			}, A.to = function(t, e, i) {
				return new A(t, e, i)
			}, A.from = function(t, e, i) {
				return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
			}, A.fromTo = function(t, e, i, n) {
				return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new A(t, e, n)
			}, A.delayedCall = function(t, e, i, n, r) {
				return new A(e, 0, {
					delay: t,
					onComplete: e,
					onCompleteParams: i,
					callbackScope: n,
					onReverseComplete: e,
					onReverseCompleteParams: i,
					immediateRender: !1,
					lazy: !1,
					useFrames: r,
					overwrite: 0
				})
			}, A.set = function(t, e) {
				return new A(t, 0, e)
			}, A.getTweensOf = function(t, e) {
				if (null == t) return [];
				t = "string" != typeof t ? t : A.selector(t) || t;
				var i, n, r, s;
				if ((d(t) || D(t)) && "number" != typeof t[0]) {
					for (i = t.length, n = []; --i > -1;) n = n.concat(A.getTweensOf(t[i], e));
					for (i = n.length; --i > -1;)
						for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
				} else
					for (n = Z(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
				return n
			}, A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
				"object" == typeof e && (i = e, e = !1);
				for (var n = A.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
			};
			var tt = y("plugins.TweenPlugin", function(t, e) {
				this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
			}, !0);
			if (o = tt.prototype, tt.version = "1.19.0", tt.API = 2, o._firstPT = null, o._addTween = X, o.setRatio = I, o._kill = function(t) {
					var e, i = this._overwriteProps,
						n = this._firstPT;
					if (null != t[this._propName]) this._overwriteProps = [];
					else
						for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
					for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
					return !1
				}, o._mod = o._roundProps = function(t) {
					for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
				}, A._onPluginEvent = function(t, e) {
					var i, n, r, s, o, a = e._firstPT;
					if ("_onInitAllProps" === t) {
						for (; a;) {
							for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
							(a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
						}
						a = e._firstPT = r
					}
					for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
					return i
				}, tt.activate = function(t) {
					for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
					return !0
				}, _.plugin = function(t) {
					if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
					var e, i = t.propName,
						n = t.priority || 0,
						r = t.overwriteProps,
						s = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
							tt.call(this, i, n), this._overwriteProps = r || []
						}, t.global === !0),
						a = o.prototype = new tt(i);
					a.constructor = o, o.API = t.API;
					for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
					return o.version = t.version, tt.activate([o]), o
				}, r = t._gsQueue) {
				for (s = 0; s < r.length; s++) r[s]();
				for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
			}
			l = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), FastClick.prototype.deviceIsAndroid = 0 < navigator.userAgent.indexOf("Android"), FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(t) {
		switch (t.nodeName.toLowerCase()) {
			case "button":
			case "select":
			case "textarea":
				if (t.disabled) return !0;
				break;
			case "input":
				if (this.deviceIsIOS && "file" === t.type || t.disabled) return !0;
				break;
			case "label":
			case "video":
				return !0
		}
		return /\bneedsclick\b/.test(t.className)
	}, FastClick.prototype.needsFocus = function(t) {
		switch (t.nodeName.toLowerCase()) {
			case "textarea":
			case "select":
				return !0;
			case "input":
				switch (t.type) {
					case "button":
					case "checkbox":
					case "file":
					case "image":
					case "radio":
					case "submit":
						return !1
				}
				return !t.disabled && !t.readOnly;
			default:
				return /\bneedsfocus\b/.test(t.className)
		}
	}, FastClick.prototype.sendClick = function(t, e) {
		var i, n;
		document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
	}, FastClick.prototype.focus = function(t) {
		var e;
		this.deviceIsIOS && t.setSelectionRange ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
	}, FastClick.prototype.updateScrollParent = function(t) {
		var e, i;
		if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
			i = t;
			do {
				if (i.scrollHeight > i.offsetHeight) {
					e = i, t.fastClickScrollParent = i;
					break
				}
				i = i.parentElement
			} while (i)
		}
		e && (e.fastClickLastScrollTop = e.scrollTop)
	}, FastClick.prototype.getTargetElementFromEventTarget = function(t) {
		return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
	}, FastClick.prototype.onTouchStart = function(t) {
		var e, i, n;
		if (1 < t.targetTouches.length) return !0;
		if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], this.deviceIsIOS) {
			if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
			if (!this.deviceIsIOS4) {
				if (i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
				this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
			}
		}
		return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, 200 > t.timeStamp - this.lastClickTime && t.preventDefault(), !0
	}, FastClick.prototype.touchHasMoved = function(t) {
		t = t.changedTouches[0];
		var e = this.touchBoundary;
		return Math.abs(t.pageX - this.touchStartX) > e || Math.abs(t.pageY - this.touchStartY) > e
	}, FastClick.prototype.findControl = function(t) {
		return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
	}, FastClick.prototype.onTouchEnd = function(t) {
		var e, i, n;
		if (n = this.targetElement, this.touchHasMoved(t) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return !0;
		if (200 > t.timeStamp - this.lastClickTime) return this.cancelNextClick = !0;
		if (this.lastClickTime = t.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (n = t.changedTouches[0], n = document.elementFromPoint(n.pageX - window.pageXOffset, n.pageY - window.pageYOffset)), i = n.tagName.toLowerCase(), "label" === i) {
			if (e = this.findControl(n)) {
				if (this.focus(n), this.deviceIsAndroid) return !1;
				n = e
			}
		} else if (this.needsFocus(n)) return 100 < t.timeStamp - e || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(n), this.deviceIsIOS4 && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
		return !(!this.deviceIsIOS || this.deviceIsIOS4 || !(e = n.fastClickScrollParent) || e.fastClickLastScrollTop === e.scrollTop) || (this.needsClick(n) || (t.preventDefault(), this.sendClick(n, t)), !1)
	}, FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = !1, this.targetElement = null
	}, FastClick.prototype.onMouse = function(t) {
		return !(this.targetElement && !t.forwardedTouchEvent && t.cancelable) || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))
	}, FastClick.prototype.onClick = function(t) {
		return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (t = this.onMouse(t), t || (this.targetElement = null), t)
	}, FastClick.prototype.destroy = function() {
		var t = this.layer;
		this.deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
	}, FastClick.notNeeded = function(t) {
		var e;
		if ("undefined" == typeof window.ontouchstart) return !0;
		if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
			if (!FastClick.prototype.deviceIsAndroid) return !0;
			if ((e = document.querySelector("meta[name=viewport]")) && -1 !== e.content.indexOf("user-scalable=no")) return !0
		}
		return "none" === t.style.msTouchAction
	}, FastClick.attach = function(t) {
		return new FastClick(t)
	}, "undefined" != typeof define && define.amd ? define(function() {
		return FastClick
	}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
	function(t, e) {
		function i(t) {
			var e = t.length,
				i = ct.type(t);
			return !ct.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
		}

		function n(t) {
			var e = Et[t] = {};
			return ct.each(t.match(pt) || [], function(t, i) {
				e[i] = !0
			}), e
		}

		function r(t, i, n, r) {
			if (ct.acceptData(t)) {
				var s, o, a = ct.expando,
					l = t.nodeType,
					u = l ? ct.cache : t,
					c = l ? t[a] : t[a] && a;
				if (c && u[c] && (r || u[c].data) || n !== e || "string" != typeof i) return c || (c = l ? t[a] = et.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
					toJSON: ct.noop
				}), ("object" == typeof i || "function" == typeof i) && (r ? u[c] = ct.extend(u[c], i) : u[c].data = ct.extend(u[c].data, i)), o = u[c], r || (o.data || (o.data = {}), o = o.data), n !== e && (o[ct.camelCase(i)] = n), "string" == typeof i ? (s = o[i], null == s && (s = o[ct.camelCase(i)])) : s = o, s
			}
		}

		function s(t, e, i) {
			if (ct.acceptData(t)) {
				var n, r, s = t.nodeType,
					o = s ? ct.cache : t,
					l = s ? t[ct.expando] : ct.expando;
				if (o[l]) {
					if (e && (n = i ? o[l] : o[l].data)) {
						ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in n ? e = [e] : (e = ct.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
						for (; r--;) delete n[e[r]];
						if (i ? !a(n) : !ct.isEmptyObject(n)) return
					}(i || (delete o[l].data, a(o[l]))) && (s ? ct.cleanData([t], !0) : ct.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
				}
			}
		}

		function o(t, i, n) {
			if (n === e && 1 === t.nodeType) {
				var r = "data-" + i.replace(St, "-$1").toLowerCase();
				if (n = t.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ct.parseJSON(n) : n)
					} catch (s) {}
					ct.data(t, i, n)
				} else n = e
			}
			return n
		}

		function a(t) {
			var e;
			for (e in t)
				if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
			return !0
		}

		function l() {
			return !0
		}

		function u() {
			return !1
		}

		function c() {
			try {
				return Z.activeElement
			} catch (t) {}
		}

		function h(t, e) {
			do t = t[e]; while (t && 1 !== t.nodeType);
			return t
		}

		function p(t, e, i) {
			if (ct.isFunction(e)) return ct.grep(t, function(t, n) {
				return !!e.call(t, n, t) !== i
			});
			if (e.nodeType) return ct.grep(t, function(t) {
				return t === e !== i
			});
			if ("string" == typeof e) {
				if (Bt.test(e)) return ct.filter(e, t, i);
				e = ct.filter(e, t)
			}
			return ct.grep(t, function(t) {
				return ct.inArray(t, e) >= 0 !== i
			})
		}

		function f(t) {
			var e = Vt.split("|"),
				i = t.createDocumentFragment();
			if (i.createElement)
				for (; e.length;) i.createElement(e.pop());
			return i
		}

		function d(t, e) {
			return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
		}

		function m(t) {
			return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
		}

		function g(t) {
			var e = re.exec(t.type);
			return e ? t.type = e[1] : t.removeAttribute("type"), t
		}

		function _(t, e) {
			for (var i, n = 0; null != (i = t[n]); n++) ct._data(i, "globalEval", !e || ct._data(e[n], "globalEval"))
		}

		function y(t, e) {
			if (1 === e.nodeType && ct.hasData(t)) {
				var i, n, r, s = ct._data(t),
					o = ct._data(e, s),
					a = s.events;
				if (a) {
					delete o.handle, o.events = {};
					for (i in a)
						for (n = 0, r = a[i].length; r > n; n++) ct.event.add(e, i, a[i][n])
				}
				o.data && (o.data = ct.extend({}, o.data))
			}
		}

		function v(t, e) {
			var i, n, r;
			if (1 === e.nodeType) {
				if (i = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
					r = ct._data(e);
					for (n in r.events) ct.removeEvent(e, n, r.handle);
					e.removeAttribute(ct.expando)
				}
				"script" === i && e.text !== t.text ? (m(e).text = t.text, g(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
			}
		}

		function x(t, i) {
			var n, r, s = 0,
				o = typeof t.getElementsByTagName !== U ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== U ? t.querySelectorAll(i || "*") : e;
			if (!o)
				for (o = [], n = t.childNodes || t; null != (r = n[s]); s++) !i || ct.nodeName(r, i) ? o.push(r) : ct.merge(o, x(r, i));
			return i === e || i && ct.nodeName(t, i) ? ct.merge([t], o) : o
		}

		function b(t) {
			ee.test(t.type) && (t.defaultChecked = t.checked)
		}

		function T(t, e) {
			if (e in t) return e;
			for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = ke.length; r--;)
				if (e = ke[r] + i, e in t) return e;
			return n
		}

		function w(t, e) {
			return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
		}

		function k(t, e) {
			for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = ct._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && w(n) && (s[o] = ct._data(n, "olddisplay", P(n.nodeName)))) : s[o] || (r = w(n), (i && "none" !== i || !r) && ct._data(n, "olddisplay", r ? i : ct.css(n, "display"))));
			for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
			return t
		}

		function E(t, e, i) {
			var n = _e.exec(e);
			return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
		}

		function C(t, e, i, n, r) {
			for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += ct.css(t, i + we[s], !0, r)), n ? ("content" === i && (o -= ct.css(t, "padding" + we[s], !0, r)), "margin" !== i && (o -= ct.css(t, "border" + we[s] + "Width", !0, r))) : (o += ct.css(t, "padding" + we[s], !0, r), "padding" !== i && (o += ct.css(t, "border" + we[s] + "Width", !0, r)));
			return o
		}

		function S(t, e, i) {
			var n = !0,
				r = "width" === e ? t.offsetWidth : t.offsetHeight,
				s = ce(t),
				o = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, s);
			if (0 >= r || null == r) {
				if (r = he(t, e, s), (0 > r || null == r) && (r = t.style[e]), ye.test(r)) return r;
				n = o && (ct.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
			}
			return r + C(t, e, i || (o ? "border" : "content"), n, s) + "px"
		}

		function P(t) {
			var e = Z,
				i = xe[t];
			return i || (i = O(t, e), "none" !== i && i || (ue = (ue || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = O(t, e), ue.detach()), xe[t] = i), i
		}

		function O(t, e) {
			var i = ct(e.createElement(t)).appendTo(e.body),
				n = ct.css(i[0], "display");
			return i.remove(), n
		}

		function N(t, e, i, n) {
			var r;
			if (ct.isArray(e)) ct.each(e, function(e, r) {
				i || Ce.test(t) ? n(t, r) : N(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
			});
			else if (i || "object" !== ct.type(e)) n(t, e);
			else
				for (r in e) N(t + "[" + r + "]", e[r], i, n)
		}

		function A(t) {
			return function(e, i) {
				"string" != typeof e && (i = e, e = "*");
				var n, r = 0,
					s = e.toLowerCase().match(pt) || [];
				if (ct.isFunction(i))
					for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
			}
		}

		function D(t, i, n, r) {
			function s(l) {
				var u;
				return o[l] = !0, ct.each(t[l] || [], function(t, l) {
					var c = l(i, n, r);
					return "string" != typeof c || a || o[c] ? a ? !(u = c) : e : (i.dataTypes.unshift(c), s(c), !1)
				}), u
			}
			var o = {},
				a = t === Ye;
			return s(i.dataTypes[0]) || !o["*"] && s("*")
		}

		function R(t, i) {
			var n, r, s = ct.ajaxSettings.flatOptions || {};
			for (r in i) i[r] !== e && ((s[r] ? t : n || (n = {}))[r] = i[r]);
			return n && ct.extend(!0, t, n), t
		}

		function M(t, i, n) {
			for (var r, s, o, a, l = t.contents, u = t.dataTypes;
				"*" === u[0];) u.shift(), s === e && (s = t.mimeType || i.getResponseHeader("Content-Type"));
			if (s)
				for (a in l)
					if (l[a] && l[a].test(s)) {
						u.unshift(a);
						break
					}
			if (u[0] in n) o = u[0];
			else {
				for (a in n) {
					if (!u[0] || t.converters[a + " " + u[0]]) {
						o = a;
						break
					}
					r || (r = a)
				}
				o = o || r
			}
			return o ? (o !== u[0] && u.unshift(o), n[o]) : e
		}

		function F(t, e, i, n) {
			var r, s, o, a, l, u = {},
				c = t.dataTypes.slice();
			if (c[1])
				for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
			for (s = c.shift(); s;)
				if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
					if ("*" === s) s = l;
					else if ("*" !== l && l !== s) {
				if (o = u[l + " " + s] || u["* " + s], !o)
					for (r in u)
						if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
							o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
							break
						}
				if (o !== !0)
					if (o && t["throws"]) e = o(e);
					else try {
						e = o(e)
					} catch (h) {
						return {
							state: "parsererror",
							error: o ? h : "No conversion from " + l + " to " + s
						}
					}
			}
			return {
				state: "success",
				data: e
			}
		}

		function L() {
			try {
				return new t.XMLHttpRequest
			} catch (e) {}
		}

		function I() {
			try {
				return new t.ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {}
		}

		function j() {
			return setTimeout(function() {
				Ke = e
			}), Ke = ct.now()
		}

		function X(t, e, i) {
			for (var n, r = (ri[e] || []).concat(ri["*"]), s = 0, o = r.length; o > s; s++)
				if (n = r[s].call(i, e, t)) return n
		}

		function z(t, e, i) {
			var n, r, s = 0,
				o = ni.length,
				a = ct.Deferred().always(function() {
					delete l.elem
				}),
				l = function() {
					if (r) return !1;
					for (var e = Ke || j(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
					return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
				},
				u = a.promise({
					elem: t,
					props: ct.extend({}, e),
					opts: ct.extend(!0, {
						specialEasing: {}
					}, i),
					originalProperties: e,
					originalOptions: i,
					startTime: Ke || j(),
					duration: i.duration,
					tweens: [],
					createTween: function(e, i) {
						var n = ct.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
						return u.tweens.push(n), n
					},
					stop: function(e) {
						var i = 0,
							n = e ? u.tweens.length : 0;
						if (r) return this;
						for (r = !0; n > i; i++) u.tweens[i].run(1);
						return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
					}
				}),
				c = u.props;
			for (H(c, u.opts.specialEasing); o > s; s++)
				if (n = ni[s].call(u, t, c, u.opts)) return n;
			return ct.map(c, X, u), ct.isFunction(u.opts.start) && u.opts.start.call(t, u), ct.fx.timer(ct.extend(l, {
				elem: t,
				anim: u,
				queue: u.opts.queue
			})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}

		function H(t, e) {
			var i, n, r, s, o;
			for (i in t)
				if (n = ct.camelCase(i), r = e[n], s = t[i], ct.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = ct.cssHooks[n], o && "expand" in o) {
					s = o.expand(s), delete t[n];
					for (i in s) i in t || (t[i] = s[i], e[i] = r)
				} else e[n] = r
		}

		function B(t, e, i) {
			var n, r, s, o, a, l, u = this,
				c = {},
				h = t.style,
				p = t.nodeType && w(t),
				f = ct._data(t, "fxshow");
			i.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
				a.unqueued || l()
			}), a.unqueued++, u.always(function() {
				u.always(function() {
					a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
				})
			})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
				h.overflow = i.overflow[0], h.overflowX = i.overflow[1],
					h.overflowY = i.overflow[2]
			}));
			for (n in e)
				if (r = e[n], ti.exec(r)) {
					if (delete e[n], s = s || "toggle" === r, r === (p ? "hide" : "show")) continue;
					c[n] = f && f[n] || ct.style(t, n)
				}
			if (!ct.isEmptyObject(c)) {
				f ? "hidden" in f && (p = f.hidden) : f = ct._data(t, "fxshow", {}), s && (f.hidden = !p), p ? ct(t).show() : u.done(function() {
					ct(t).hide()
				}), u.done(function() {
					var e;
					ct._removeData(t, "fxshow");
					for (e in c) ct.style(t, e, c[e])
				});
				for (n in c) o = X(p ? f[n] : 0, n, u), n in f || (f[n] = o.start, p && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
			}
		}

		function Y(t, e, i, n, r) {
			return new Y.prototype.init(t, e, i, n, r)
		}

		function q(t, e) {
			var i, n = {
					height: t
				},
				r = 0;
			for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = we[r], n["margin" + i] = n["padding" + i] = t;
			return e && (n.opacity = n.width = t), n
		}

		function $(t) {
			return ct.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
		}
		var V, W, U = typeof e,
			G = t.location,
			Z = t.document,
			Q = Z.documentElement,
			K = t.jQuery,
			J = t.$,
			tt = {},
			et = [],
			it = "1.10.2",
			nt = et.concat,
			rt = et.push,
			st = et.slice,
			ot = et.indexOf,
			at = tt.toString,
			lt = tt.hasOwnProperty,
			ut = it.trim,
			ct = function(t, e) {
				return new ct.fn.init(t, e, W)
			},
			ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			pt = /\S+/g,
			ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			gt = /^[\],:{}\s]*$/,
			_t = /(?:^|:|,)(?:\s*\[)+/g,
			yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
			vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
			xt = /^-ms-/,
			bt = /-([\da-z])/gi,
			Tt = function(t, e) {
				return e.toUpperCase()
			},
			wt = function(t) {
				(Z.addEventListener || "load" === t.type || "complete" === Z.readyState) && (kt(), ct.ready())
			},
			kt = function() {
				Z.addEventListener ? (Z.removeEventListener("DOMContentLoaded", wt, !1), t.removeEventListener("load", wt, !1)) : (Z.detachEvent("onreadystatechange", wt), t.detachEvent("onload", wt))
			};
		ct.fn = ct.prototype = {
				jquery: it,
				constructor: ct,
				init: function(t, i, n) {
					var r, s;
					if (!t) return this;
					if ("string" == typeof t) {
						if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : dt.exec(t), !r || !r[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
						if (r[1]) {
							if (i = i instanceof ct ? i[0] : i, ct.merge(this, ct.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : Z, !0)), mt.test(r[1]) && ct.isPlainObject(i))
								for (r in i) ct.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
							return this
						}
						if (s = Z.getElementById(r[2]), s && s.parentNode) {
							if (s.id !== r[2]) return n.find(t);
							this.length = 1, this[0] = s
						}
						return this.context = Z, this.selector = t, this
					}
					return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
				},
				selector: "",
				length: 0,
				toArray: function() {
					return st.call(this)
				},
				get: function(t) {
					return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
				},
				pushStack: function(t) {
					var e = ct.merge(this.constructor(), t);
					return e.prevObject = this, e.context = this.context, e
				},
				each: function(t, e) {
					return ct.each(this, t, e)
				},
				ready: function(t) {
					return ct.ready.promise().done(t), this
				},
				slice: function() {
					return this.pushStack(st.apply(this, arguments))
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				eq: function(t) {
					var e = this.length,
						i = +t + (0 > t ? e : 0);
					return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
				},
				map: function(t) {
					return this.pushStack(ct.map(this, function(e, i) {
						return t.call(e, i, e)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: rt,
				sort: [].sort,
				splice: [].splice
			}, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
				var t, i, n, r, s, o, a = arguments[0] || {},
					l = 1,
					u = arguments.length,
					c = !1;
				for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
					if (null != (s = arguments[l]))
						for (r in s) t = a[r], n = s[r], a !== n && (c && n && (ct.isPlainObject(n) || (i = ct.isArray(n))) ? (i ? (i = !1, o = t && ct.isArray(t) ? t : []) : o = t && ct.isPlainObject(t) ? t : {}, a[r] = ct.extend(c, o, n)) : n !== e && (a[r] = n));
				return a
			}, ct.extend({
				expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
				noConflict: function(e) {
					return t.$ === ct && (t.$ = J), e && t.jQuery === ct && (t.jQuery = K), ct
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(t) {
					t ? ct.readyWait++ : ct.ready(!0)
				},
				ready: function(t) {
					if (t === !0 ? !--ct.readyWait : !ct.isReady) {
						if (!Z.body) return setTimeout(ct.ready);
						ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (V.resolveWith(Z, [ct]), ct.fn.trigger && ct(Z).trigger("ready").off("ready"))
					}
				},
				isFunction: function(t) {
					return "function" === ct.type(t)
				},
				isArray: Array.isArray || function(t) {
					return "array" === ct.type(t)
				},
				isWindow: function(t) {
					return null != t && t == t.window
				},
				isNumeric: function(t) {
					return !isNaN(parseFloat(t)) && isFinite(t)
				},
				type: function(t) {
					return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
				},
				isPlainObject: function(t) {
					var i;
					if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
					try {
						if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
					} catch (n) {
						return !1
					}
					if (ct.support.ownLast)
						for (i in t) return lt.call(t, i);
					for (i in t);
					return i === e || lt.call(t, i)
				},
				isEmptyObject: function(t) {
					var e;
					for (e in t) return !1;
					return !0
				},
				error: function(t) {
					throw Error(t)
				},
				parseHTML: function(t, e, i) {
					if (!t || "string" != typeof t) return null;
					"boolean" == typeof e && (i = e, e = !1), e = e || Z;
					var n = mt.exec(t),
						r = !i && [];
					return n ? [e.createElement(n[1])] : (n = ct.buildFragment([t], e, r), r && ct(r).remove(), ct.merge([], n.childNodes))
				},
				parseJSON: function(i) {
					return t.JSON && t.JSON.parse ? t.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = ct.trim(i), i && gt.test(i.replace(yt, "@").replace(vt, "]").replace(_t, ""))) ? Function("return " + i)() : (ct.error("Invalid JSON: " + i), e)
				},
				parseXML: function(i) {
					var n, r;
					if (!i || "string" != typeof i) return null;
					try {
						t.DOMParser ? (r = new DOMParser, n = r.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
					} catch (s) {
						n = e
					}
					return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + i), n
				},
				noop: function() {},
				globalEval: function(e) {
					e && ct.trim(e) && (t.execScript || function(e) {
						t.eval.call(t, e)
					})(e)
				},
				camelCase: function(t) {
					return t.replace(xt, "ms-").replace(bt, Tt)
				},
				nodeName: function(t, e) {
					return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
				},
				each: function(t, e, n) {
					var r, s = 0,
						o = t.length,
						a = i(t);
					if (n) {
						if (a)
							for (; o > s && (r = e.apply(t[s], n), r !== !1); s++);
						else
							for (s in t)
								if (r = e.apply(t[s], n), r === !1) break
					} else if (a)
						for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
					else
						for (s in t)
							if (r = e.call(t[s], s, t[s]), r === !1) break; return t
				},
				trim: ut && !ut.call("\ufeff ") ? function(t) {
					return null == t ? "" : ut.call(t)
				} : function(t) {
					return null == t ? "" : (t + "").replace(ft, "")
				},
				makeArray: function(t, e) {
					var n = e || [];
					return null != t && (i(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n
				},
				inArray: function(t, e, i) {
					var n;
					if (e) {
						if (ot) return ot.call(e, t, i);
						for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
							if (i in e && e[i] === t) return i
					}
					return -1
				},
				merge: function(t, i) {
					var n = i.length,
						r = t.length,
						s = 0;
					if ("number" == typeof n)
						for (; n > s; s++) t[r++] = i[s];
					else
						for (; i[s] !== e;) t[r++] = i[s++];
					return t.length = r, t
				},
				grep: function(t, e, i) {
					var n, r = [],
						s = 0,
						o = t.length;
					for (i = !!i; o > s; s++) n = !!e(t[s], s), i !== n && r.push(t[s]);
					return r
				},
				map: function(t, e, n) {
					var r, s = 0,
						o = t.length,
						a = i(t),
						l = [];
					if (a)
						for (; o > s; s++) r = e(t[s], s, n), null != r && (l[l.length] = r);
					else
						for (s in t) r = e(t[s], s, n), null != r && (l[l.length] = r);
					return nt.apply([], l)
				},
				guid: 1,
				proxy: function(t, i) {
					var n, r, s;
					return "string" == typeof i && (s = t[i], i = t, t = s), ct.isFunction(t) ? (n = st.call(arguments, 2), r = function() {
						return t.apply(i || this, n.concat(st.call(arguments)))
					}, r.guid = t.guid = t.guid || ct.guid++, r) : e
				},
				access: function(t, i, n, r, s, o, a) {
					var l = 0,
						u = t.length,
						c = null == n;
					if ("object" === ct.type(n)) {
						s = !0;
						for (l in n) ct.access(t, i, l, n[l], !0, o, a)
					} else if (r !== e && (s = !0, ct.isFunction(r) || (a = !0), c && (a ? (i.call(t, r), i = null) : (c = i, i = function(t, e, i) {
							return c.call(ct(t), i)
						})), i))
						for (; u > l; l++) i(t[l], n, a ? r : r.call(t[l], l, i(t[l], n)));
					return s ? t : c ? i.call(t) : u ? i(t[0], n) : o
				},
				now: function() {
					return (new Date).getTime()
				},
				swap: function(t, e, i, n) {
					var r, s, o = {};
					for (s in e) o[s] = t.style[s], t.style[s] = e[s];
					r = i.apply(t, n || []);
					for (s in e) t.style[s] = o[s];
					return r
				}
			}), ct.ready.promise = function(e) {
				if (!V)
					if (V = ct.Deferred(), "complete" === Z.readyState) setTimeout(ct.ready);
					else if (Z.addEventListener) Z.addEventListener("DOMContentLoaded", wt, !1), t.addEventListener("load", wt, !1);
				else {
					Z.attachEvent("onreadystatechange", wt), t.attachEvent("onload", wt);
					var i = !1;
					try {
						i = null == t.frameElement && Z.documentElement
					} catch (n) {}
					i && i.doScroll && function r() {
						if (!ct.isReady) {
							try {
								i.doScroll("left")
							} catch (t) {
								return setTimeout(r, 50)
							}
							kt(), ct.ready()
						}
					}()
				}
				return V.promise(e)
			}, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
				tt["[object " + e + "]"] = e.toLowerCase()
			}), W = ct(Z),
			function(t, e) {
				function i(t, e, i, n) {
					var r, s, o, a, l, u, c, h, d, m;
					if ((e ? e.ownerDocument || e : z) !== D && A(e), e = e || D, i = i || [], !t || "string" != typeof t) return i;
					if (1 !== (a = e.nodeType) && 9 !== a) return [];
					if (M && !n) {
						if (r = vt.exec(t))
							if (o = r[1]) {
								if (9 === a) {
									if (s = e.getElementById(o), !s || !s.parentNode) return i;
									if (s.id === o) return i.push(s), i
								} else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && j(e, s) && s.id === o) return i.push(s), i
							} else {
								if (r[2]) return tt.apply(i, e.getElementsByTagName(t)), i;
								if ((o = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return tt.apply(i, e.getElementsByClassName(o)), i
							}
						if (w.qsa && (!F || !F.test(t))) {
							if (h = c = X, d = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
								for (u = p(t), (c = e.getAttribute("id")) ? h = c.replace(Tt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + f(u[l]);
								d = ft.test(t) && e.parentNode || e, m = u.join(",")
							}
							if (m) try {
								return tt.apply(i, d.querySelectorAll(m)), i
							} catch (g) {} finally {
								c || e.removeAttribute("id")
							}
						}
					}
					return b(t.replace(ut, "$1"), e, i, n)
				}

				function n() {
					function t(i, n) {
						return e.push(i += " ") > E.cacheLength && delete t[e.shift()], t[i] = n
					}
					var e = [];
					return t
				}

				function r(t) {
					return t[X] = !0, t
				}

				function s(t) {
					var e = D.createElement("div");
					try {
						return !!t(e)
					} catch (i) {
						return !1
					} finally {
						e.parentNode && e.parentNode.removeChild(e), e = null
					}
				}

				function o(t, e) {
					for (var i = t.split("|"), n = t.length; n--;) E.attrHandle[i[n]] = e
				}

				function a(t, e) {
					var i = e && t,
						n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
					if (n) return n;
					if (i)
						for (; i = i.nextSibling;)
							if (i === e) return -1;
					return t ? 1 : -1
				}

				function l(t) {
					return function(e) {
						var i = e.nodeName.toLowerCase();
						return "input" === i && e.type === t
					}
				}

				function u(t) {
					return function(e) {
						var i = e.nodeName.toLowerCase();
						return ("input" === i || "button" === i) && e.type === t
					}
				}

				function c(t) {
					return r(function(e) {
						return e = +e, r(function(i, n) {
							for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
						})
					})
				}

				function h() {}

				function p(t, e) {
					var n, r, s, o, a, l, u, c = q[t + " "];
					if (c) return e ? 0 : c.slice(0);
					for (a = t, l = [], u = E.preFilter; a;) {
						(!n || (r = ht.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = pt.exec(a)) && (n = r.shift(), s.push({
							value: n,
							type: r[0].replace(ut, " ")
						}), a = a.slice(n.length));
						for (o in E.filter) !(r = _t[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
							value: n,
							type: o,
							matches: r
						}), a = a.slice(n.length));
						if (!n) break
					}
					return e ? a.length : a ? i.error(t) : q(t, l).slice(0)
				}

				function f(t) {
					for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
					return n
				}

				function d(t, e, i) {
					var n = e.dir,
						r = i && "parentNode" === n,
						s = B++;
					return e.first ? function(e, i, s) {
						for (; e = e[n];)
							if (1 === e.nodeType || r) return t(e, i, s)
					} : function(e, i, o) {
						var a, l, u, c = H + " " + s;
						if (o) {
							for (; e = e[n];)
								if ((1 === e.nodeType || r) && t(e, i, o)) return !0
						} else
							for (; e = e[n];)
								if (1 === e.nodeType || r)
									if (u = e[X] || (e[X] = {}), (l = u[n]) && l[0] === c) {
										if ((a = l[1]) === !0 || a === k) return a === !0
									} else if (l = u[n] = [c], l[1] = t(e, i, o) || k, l[1] === !0) return !0
					}
				}

				function m(t) {
					return t.length > 1 ? function(e, i, n) {
						for (var r = t.length; r--;)
							if (!t[r](e, i, n)) return !1;
						return !0
					} : t[0]
				}

				function g(t, e, i, n, r) {
					for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
					return o
				}

				function _(t, e, i, n, s, o) {
					return n && !n[X] && (n = _(n)), s && !s[X] && (s = _(s, o)), r(function(r, o, a, l) {
						var u, c, h, p = [],
							f = [],
							d = o.length,
							m = r || x(e || "*", a.nodeType ? [a] : a, []),
							_ = !t || !r && e ? m : g(m, p, t, a, l),
							y = i ? s || (r ? t : d || n) ? [] : o : _;
						if (i && i(_, y, a, l), n)
							for (u = g(y, f), n(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[f[c]] = !(_[f[c]] = h));
						if (r) {
							if (s || t) {
								if (s) {
									for (u = [], c = y.length; c--;)(h = y[c]) && u.push(_[c] = h);
									s(null, y = [], u, l)
								}
								for (c = y.length; c--;)(h = y[c]) && (u = s ? it.call(r, h) : p[c]) > -1 && (r[u] = !(o[u] = h))
							}
						} else y = g(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : tt.apply(o, y)
					})
				}

				function y(t) {
					for (var e, i, n, r = t.length, s = E.relative[t[0].type], o = s || E.relative[" "], a = s ? 1 : 0, l = d(function(t) {
							return t === e
						}, o, !0), u = d(function(t) {
							return it.call(e, t) > -1
						}, o, !0), c = [function(t, i, n) {
							return !s && (n || i !== O) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
						}]; r > a; a++)
						if (i = E.relative[t[a].type]) c = [d(m(c), i)];
						else {
							if (i = E.filter[t[a].type].apply(null, t[a].matches), i[X]) {
								for (n = ++a; r > n && !E.relative[t[n].type]; n++);
								return _(a > 1 && m(c), a > 1 && f(t.slice(0, a - 1).concat({
									value: " " === t[a - 2].type ? "*" : ""
								})).replace(ut, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && f(t))
							}
							c.push(i)
						}
					return m(c)
				}

				function v(t, e) {
					var n = 0,
						s = e.length > 0,
						o = t.length > 0,
						a = function(r, a, l, u, c) {
							var h, p, f, d = [],
								m = 0,
								_ = "0",
								y = r && [],
								v = null != c,
								x = O,
								b = r || o && E.find.TAG("*", c && a.parentNode || a),
								T = H += null == x ? 1 : Math.random() || .1;
							for (v && (O = a !== D && a, k = n); null != (h = b[_]); _++) {
								if (o && h) {
									for (p = 0; f = t[p++];)
										if (f(h, a, l)) {
											u.push(h);
											break
										}
									v && (H = T, k = ++n)
								}
								s && ((h = !f && h) && m--, r && y.push(h))
							}
							if (m += _, s && _ !== m) {
								for (p = 0; f = e[p++];) f(y, d, a, l);
								if (r) {
									if (m > 0)
										for (; _--;) y[_] || d[_] || (d[_] = K.call(u));
									d = g(d)
								}
								tt.apply(u, d), v && !r && d.length > 0 && m + e.length > 1 && i.uniqueSort(u)
							}
							return v && (H = T, O = x), y
						};
					return s ? r(a) : a
				}

				function x(t, e, n) {
					for (var r = 0, s = e.length; s > r; r++) i(t, e[r], n);
					return n
				}

				function b(t, e, i, n) {
					var r, s, o, a, l, u = p(t);
					if (!n && 1 === u.length) {
						if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && M && E.relative[s[1].type]) {
							if (e = (E.find.ID(o.matches[0].replace(wt, kt), e) || [])[0], !e) return i;
							t = t.slice(s.shift().value.length)
						}
						for (r = _t.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !E.relative[a = o.type]);)
							if ((l = E.find[a]) && (n = l(o.matches[0].replace(wt, kt), ft.test(s[0].type) && e.parentNode || e))) {
								if (s.splice(r, 1), t = n.length && f(s), !t) return tt.apply(i, n), i;
								break
							}
					}
					return P(t, u)(n, e, !M, i, ft.test(t)), i
				}
				var T, w, k, E, C, S, P, O, N, A, D, R, M, F, L, I, j, X = "sizzle" + -new Date,
					z = t.document,
					H = 0,
					B = 0,
					Y = n(),
					q = n(),
					$ = n(),
					V = !1,
					W = function(t, e) {
						return t === e ? (V = !0, 0) : 0
					},
					U = typeof e,
					G = 1 << 31,
					Z = {}.hasOwnProperty,
					Q = [],
					K = Q.pop,
					J = Q.push,
					tt = Q.push,
					et = Q.slice,
					it = Q.indexOf || function(t) {
						for (var e = 0, i = this.length; i > e; e++)
							if (this[e] === t) return e;
						return -1
					},
					nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					rt = "[\\x20\\t\\r\\n\\f]",
					st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					ot = st.replace("w", "w#"),
					at = "\\[" + rt + "*(" + st + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
					lt = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
					ut = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
					ht = RegExp("^" + rt + "*," + rt + "*"),
					pt = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
					ft = RegExp(rt + "*[+~]"),
					dt = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
					mt = RegExp(lt),
					gt = RegExp("^" + ot + "$"),
					_t = {
						ID: RegExp("^#(" + st + ")"),
						CLASS: RegExp("^\\.(" + st + ")"),
						TAG: RegExp("^(" + st.replace("w", "w*") + ")"),
						ATTR: RegExp("^" + at),
						PSEUDO: RegExp("^" + lt),
						CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
						bool: RegExp("^(?:" + nt + ")$", "i"),
						needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
					},
					yt = /^[^{]+\{\s*\[native \w/,
					vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					xt = /^(?:input|select|textarea|button)$/i,
					bt = /^h\d$/i,
					Tt = /'|\\/g,
					wt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
					kt = function(t, e, i) {
						var n = "0x" + e - 65536;
						return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
					};
				try {
					tt.apply(Q = et.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
				} catch (Et) {
					tt = {
						apply: Q.length ? function(t, e) {
							J.apply(t, et.call(e))
						} : function(t, e) {
							for (var i = t.length, n = 0; t[i++] = e[n++];);
							t.length = i - 1
						}
					}
				}
				S = i.isXML = function(t) {
					var e = t && (t.ownerDocument || t).documentElement;
					return !!e && "HTML" !== e.nodeName
				}, w = i.support = {}, A = i.setDocument = function(t) {
					var i = t ? t.ownerDocument || t : z,
						n = i.defaultView;
					return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, R = i.documentElement, M = !S(i), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
						A()
					}), w.attributes = s(function(t) {
						return t.className = "i", !t.getAttribute("className")
					}), w.getElementsByTagName = s(function(t) {
						return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
					}), w.getElementsByClassName = s(function(t) {
						return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
					}), w.getById = s(function(t) {
						return R.appendChild(t).id = X, !i.getElementsByName || !i.getElementsByName(X).length
					}), w.getById ? (E.find.ID = function(t, e) {
						if (typeof e.getElementById !== U && M) {
							var i = e.getElementById(t);
							return i && i.parentNode ? [i] : []
						}
					}, E.filter.ID = function(t) {
						var e = t.replace(wt, kt);
						return function(t) {
							return t.getAttribute("id") === e
						}
					}) : (delete E.find.ID, E.filter.ID = function(t) {
						var e = t.replace(wt, kt);
						return function(t) {
							var i = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
							return i && i.value === e
						}
					}), E.find.TAG = w.getElementsByTagName ? function(t, i) {
						return typeof i.getElementsByTagName !== U ? i.getElementsByTagName(t) : e
					} : function(t, e) {
						var i, n = [],
							r = 0,
							s = e.getElementsByTagName(t);
						if ("*" === t) {
							for (; i = s[r++];) 1 === i.nodeType && n.push(i);
							return n
						}
						return s
					}, E.find.CLASS = w.getElementsByClassName && function(t, i) {
						return typeof i.getElementsByClassName !== U && M ? i.getElementsByClassName(t) : e
					}, L = [], F = [], (w.qsa = yt.test(i.querySelectorAll)) && (s(function(t) {
						t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || F.push("\\[" + rt + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || F.push(":checked")
					}), s(function(t) {
						var e = i.createElement("input");
						e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && F.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
					})), (w.matchesSelector = yt.test(I = R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && s(function(t) {
						w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), L.push("!=", lt)
					}), F = F.length && RegExp(F.join("|")), L = L.length && RegExp(L.join("|")), j = yt.test(R.contains) || R.compareDocumentPosition ? function(t, e) {
						var i = 9 === t.nodeType ? t.documentElement : t,
							n = e && e.parentNode;
						return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
					} : function(t, e) {
						if (e)
							for (; e = e.parentNode;)
								if (e === t) return !0;
						return !1
					}, W = R.compareDocumentPosition ? function(t, e) {
						if (t === e) return V = !0, 0;
						var n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
						return n ? 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || j(z, t) ? -1 : e === i || j(z, e) ? 1 : N ? it.call(N, t) - it.call(N, e) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
					} : function(t, e) {
						var n, r = 0,
							s = t.parentNode,
							o = e.parentNode,
							l = [t],
							u = [e];
						if (t === e) return V = !0, 0;
						if (!s || !o) return t === i ? -1 : e === i ? 1 : s ? -1 : o ? 1 : N ? it.call(N, t) - it.call(N, e) : 0;
						if (s === o) return a(t, e);
						for (n = t; n = n.parentNode;) l.unshift(n);
						for (n = e; n = n.parentNode;) u.unshift(n);
						for (; l[r] === u[r];) r++;
						return r ? a(l[r], u[r]) : l[r] === z ? -1 : u[r] === z ? 1 : 0
					}, i) : D
				}, i.matches = function(t, e) {
					return i(t, null, null, e)
				}, i.matchesSelector = function(t, e) {
					if ((t.ownerDocument || t) !== D && A(t), e = e.replace(dt, "='$1']"), !(!w.matchesSelector || !M || L && L.test(e) || F && F.test(e))) try {
						var n = I.call(t, e);
						if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
					} catch (r) {}
					return i(e, D, null, [t]).length > 0
				}, i.contains = function(t, e) {
					return (t.ownerDocument || t) !== D && A(t), j(t, e)
				}, i.attr = function(t, i) {
					(t.ownerDocument || t) !== D && A(t);
					var n = E.attrHandle[i.toLowerCase()],
						r = n && Z.call(E.attrHandle, i.toLowerCase()) ? n(t, i, !M) : e;
					return r === e ? w.attributes || !M ? t.getAttribute(i) : (r = t.getAttributeNode(i)) && r.specified ? r.value : null : r
				}, i.error = function(t) {
					throw Error("Syntax error, unrecognized expression: " + t)
				}, i.uniqueSort = function(t) {
					var e, i = [],
						n = 0,
						r = 0;
					if (V = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(W), V) {
						for (; e = t[r++];) e === t[r] && (n = i.push(r));
						for (; n--;) t.splice(i[n], 1)
					}
					return t
				}, C = i.getText = function(t) {
					var e, i = "",
						n = 0,
						r = t.nodeType;
					if (r) {
						if (1 === r || 9 === r || 11 === r) {
							if ("string" == typeof t.textContent) return t.textContent;
							for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
						} else if (3 === r || 4 === r) return t.nodeValue
					} else
						for (; e = t[n]; n++) i += C(e);
					return i
				}, E = i.selectors = {
					cacheLength: 50,
					createPseudo: r,
					match: _t,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(t) {
							return t[1] = t[1].replace(wt, kt), t[3] = (t[4] || t[5] || "").replace(wt, kt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
						},
						CHILD: function(t) {
							return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
						},
						PSEUDO: function(t) {
							var i, n = !t[5] && t[2];
							return _t.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && mt.test(n) && (i = p(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
						}
					},
					filter: {
						TAG: function(t) {
							var e = t.replace(wt, kt).toLowerCase();
							return "*" === t ? function() {
								return !0
							} : function(t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							}
						},
						CLASS: function(t) {
							var e = Y[t + " "];
							return e || (e = RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && Y(t, function(t) {
								return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
							})
						},
						ATTR: function(t, e, n) {
							return function(r) {
								var s = i.attr(r, t);
								return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === n : "!=" === e ? s !== n : "^=" === e ? n && 0 === s.indexOf(n) : "*=" === e ? n && s.indexOf(n) > -1 : "$=" === e ? n && s.slice(-n.length) === n : "~=" === e ? (" " + s + " ").indexOf(n) > -1 : "|=" === e && (s === n || s.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(t, e, i, n, r) {
							var s = "nth" !== t.slice(0, 3),
								o = "last" !== t.slice(-4),
								a = "of-type" === e;
							return 1 === n && 0 === r ? function(t) {
								return !!t.parentNode
							} : function(e, i, l) {
								var u, c, h, p, f, d, m = s !== o ? "nextSibling" : "previousSibling",
									g = e.parentNode,
									_ = a && e.nodeName.toLowerCase(),
									y = !l && !a;
								if (g) {
									if (s) {
										for (; m;) {
											for (h = e; h = h[m];)
												if (a ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
											d = m = "only" === t && !d && "nextSibling"
										}
										return !0
									}
									if (d = [o ? g.firstChild : g.lastChild], o && y) {
										for (c = g[X] || (g[X] = {}), u = c[t] || [], f = u[0] === H && u[1], p = u[0] === H && u[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (p = f = 0) || d.pop();)
											if (1 === h.nodeType && ++p && h === e) {
												c[t] = [H, f, p];
												break
											}
									} else if (y && (u = (e[X] || (e[X] = {}))[t]) && u[0] === H) p = u[1];
									else
										for (;
											(h = ++f && h && h[m] || (p = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++p || (y && ((h[X] || (h[X] = {}))[t] = [H, p]), h !== e)););
									return p -= r, p === n || 0 === p % n && p / n >= 0
								}
							}
						},
						PSEUDO: function(t, e) {
							var n, s = E.pseudos[t] || E.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
							return s[X] ? s(e) : s.length > 1 ? (n = [t, t, "", e], E.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, i) {
								for (var n, r = s(t, e), o = r.length; o--;) n = it.call(t, r[o]), t[n] = !(i[n] = r[o])
							}) : function(t) {
								return s(t, 0, n)
							}) : s
						}
					},
					pseudos: {
						not: r(function(t) {
							var e = [],
								i = [],
								n = P(t.replace(ut, "$1"));
							return n[X] ? r(function(t, e, i, r) {
								for (var s, o = n(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
							}) : function(t, r, s) {
								return e[0] = t, n(e, null, s, i), !i.pop()
							}
						}),
						has: r(function(t) {
							return function(e) {
								return i(t, e).length > 0
							}
						}),
						contains: r(function(t) {
							return function(e) {
								return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
							}
						}),
						lang: r(function(t) {
							return gt.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(wt, kt).toLowerCase(),
								function(e) {
									var i;
									do
										if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
									while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e) {
							var i = t.location && t.location.hash;
							return i && i.slice(1) === e.id
						},
						root: function(t) {
							return t === R
						},
						focus: function(t) {
							return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
						},
						enabled: function(t) {
							return t.disabled === !1
						},
						disabled: function(t) {
							return t.disabled === !0
						},
						checked: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && !!t.checked || "option" === e && !!t.selected
						},
						selected: function(t) {
							return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
						},
						empty: function(t) {
							for (t = t.firstChild; t; t = t.nextSibling)
								if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
							return !0
						},
						parent: function(t) {
							return !E.pseudos.empty(t)
						},
						header: function(t) {
							return bt.test(t.nodeName)
						},
						input: function(t) {
							return xt.test(t.nodeName)
						},
						button: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && "button" === t.type || "button" === e
						},
						text: function(t) {
							var e;
							return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
						},
						first: c(function() {
							return [0]
						}),
						last: c(function(t, e) {
							return [e - 1]
						}),
						eq: c(function(t, e, i) {
							return [0 > i ? i + e : i]
						}),
						even: c(function(t, e) {
							for (var i = 0; e > i; i += 2) t.push(i);
							return t
						}),
						odd: c(function(t, e) {
							for (var i = 1; e > i; i += 2) t.push(i);
							return t
						}),
						lt: c(function(t, e, i) {
							for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
							return t
						}),
						gt: c(function(t, e, i) {
							for (var n = 0 > i ? i + e : i; e > ++n;) t.push(n);
							return t
						})
					}
				}, E.pseudos.nth = E.pseudos.eq;
				for (T in {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) E.pseudos[T] = l(T);
				for (T in {
						submit: !0,
						reset: !0
					}) E.pseudos[T] = u(T);
				h.prototype = E.filters = E.pseudos, E.setFilters = new h, P = i.compile = function(t, e) {
					var i, n = [],
						r = [],
						s = $[t + " "];
					if (!s) {
						for (e || (e = p(t)), i = e.length; i--;) s = y(e[i]), s[X] ? n.push(s) : r.push(s);
						s = $(t, v(r, n))
					}
					return s
				}, w.sortStable = X.split("").sort(W).join("") === X, w.detectDuplicates = V, A(), w.sortDetached = s(function(t) {
					return 1 & t.compareDocumentPosition(D.createElement("div"))
				}), s(function(t) {
					return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
				}) || o("type|href|height|width", function(t, i, n) {
					return n ? e : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
				}), w.attributes && s(function(t) {
					return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
				}) || o("value", function(t, i, n) {
					return n || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
				}), s(function(t) {
					return null == t.getAttribute("disabled")
				}) || o(nt, function(t, i, n) {
					var r;
					return n ? e : (r = t.getAttributeNode(i)) && r.specified ? r.value : t[i] === !0 ? i.toLowerCase() : null
				}), ct.find = i, ct.expr = i.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = i.uniqueSort, ct.text = i.getText, ct.isXMLDoc = i.isXML, ct.contains = i.contains
			}(t);
		var Et = {};
		ct.Callbacks = function(t) {
			t = "string" == typeof t ? Et[t] || n(t) : ct.extend({}, t);
			var i, r, s, o, a, l, u = [],
				c = !t.once && [],
				h = function(e) {
					for (r = t.memory && e, s = !0, a = l || 0, l = 0, o = u.length, i = !0; u && o > a; a++)
						if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
							r = !1;
							break
						}
					i = !1, u && (c ? c.length && h(c.shift()) : r ? u = [] : p.disable())
				},
				p = {
					add: function() {
						if (u) {
							var e = u.length;
							! function n(e) {
								ct.each(e, function(e, i) {
									var r = ct.type(i);
									"function" === r ? t.unique && p.has(i) || u.push(i) : i && i.length && "string" !== r && n(i)
								})
							}(arguments), i ? o = u.length : r && (l = e, h(r))
						}
						return this
					},
					remove: function() {
						return u && ct.each(arguments, function(t, e) {
							for (var n;
								(n = ct.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (o >= n && o--, a >= n && a--)
						}), this
					},
					has: function(t) {
						return t ? ct.inArray(t, u) > -1 : !(!u || !u.length)
					},
					empty: function() {
						return u = [], o = 0, this
					},
					disable: function() {
						return u = c = r = e, this
					},
					disabled: function() {
						return !u
					},
					lock: function() {
						return c = e, r || p.disable(), this
					},
					locked: function() {
						return !c
					},
					fireWith: function(t, e) {
						return !u || s && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : h(e)), this
					},
					fire: function() {
						return p.fireWith(this, arguments), this
					},
					fired: function() {
						return !!s
					}
				};
			return p
		}, ct.extend({
			Deferred: function(t) {
				var e = [
						["resolve", "done", ct.Callbacks("once memory"), "resolved"],
						["reject", "fail", ct.Callbacks("once memory"), "rejected"],
						["notify", "progress", ct.Callbacks("memory")]
					],
					i = "pending",
					n = {
						state: function() {
							return i
						},
						always: function() {
							return r.done(arguments).fail(arguments), this
						},
						then: function() {
							var t = arguments;
							return ct.Deferred(function(i) {
								ct.each(e, function(e, s) {
									var o = s[0],
										a = ct.isFunction(t[e]) && t[e];
									r[s[1]](function() {
										var t = a && a.apply(this, arguments);
										t && ct.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
									})
								}), t = null
							}).promise()
						},
						promise: function(t) {
							return null != t ? ct.extend(t, n) : n
						}
					},
					r = {};
				return n.pipe = n.then, ct.each(e, function(t, s) {
					var o = s[2],
						a = s[3];
					n[s[1]] = o.add, a && o.add(function() {
						i = a
					}, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
						return r[s[0] + "With"](this === r ? n : this, arguments), this
					}, r[s[0] + "With"] = o.fireWith
				}), n.promise(r), t && t.call(r, r), r
			},
			when: function(t) {
				var e, i, n, r = 0,
					s = st.call(arguments),
					o = s.length,
					a = 1 !== o || t && ct.isFunction(t.promise) ? o : 0,
					l = 1 === a ? t : ct.Deferred(),
					u = function(t, i, n) {
						return function(r) {
							i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
						}
					};
				if (o > 1)
					for (e = Array(o), i = Array(o), n = Array(o); o > r; r++) s[r] && ct.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
				return a || l.resolveWith(n, s), l.promise()
			}
		}), ct.support = function(e) {
			var i, n, r, s, o, a, l, u, c, h = Z.createElement("div");
			if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = h.getElementsByTagName("*") || [], n = h.getElementsByTagName("a")[0], !n || !n.style || !i.length) return e;
			s = Z.createElement("select"), a = s.appendChild(Z.createElement("option")), r = h.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== h.className, e.leadingWhitespace = 3 === h.firstChild.nodeType, e.tbody = !h.getElementsByTagName("tbody").length, e.htmlSerialize = !!h.getElementsByTagName("link").length, e.style = /top/.test(n.getAttribute("style")), e.hrefNormalized = "/a" === n.getAttribute("href"), e.opacity = /^0.5/.test(n.style.opacity), e.cssFloat = !!n.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!Z.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== Z.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !a.disabled;
			try {
				delete h.test
			} catch (p) {
				e.deleteExpando = !1
			}
			r = Z.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = Z.createDocumentFragment(), o.appendChild(r), e.appendChecked = r.checked, e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
				e.noCloneEvent = !1
			}), h.cloneNode(!0).click());
			for (c in {
					submit: !0,
					change: !0,
					focusin: !0
				}) h.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
			h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === h.style.backgroundClip;
			for (c in ct(e)) break;
			return e.ownLast = "0" !== c, ct(function() {
				var i, n, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
					o = Z.getElementsByTagName("body")[0];
				o && (i = Z.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = h.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(o, null != o.style.zoom ? {
					zoom: 1
				} : {}, function() {
					e.boxSizing = 4 === h.offsetWidth
				}), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
					width: "4px"
				}).width, n = h.appendChild(Z.createElement("div")), n.style.cssText = h.style.cssText = s, n.style.marginRight = n.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof h.style.zoom !== U && (h.innerHTML = "", h.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(i), i = h = r = n = null)
			}), i = s = o = a = n = r = null, e
		}({});
		var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
			St = /([A-Z])/g;
		ct.extend({
			cache: {},
			noData: {
				applet: !0,
				embed: !0,
				object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(t) {
				return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
			},
			data: function(t, e, i) {
				return r(t, e, i)
			},
			removeData: function(t, e) {
				return s(t, e)
			},
			_data: function(t, e, i) {
				return r(t, e, i, !0)
			},
			_removeData: function(t, e) {
				return s(t, e, !0)
			},
			acceptData: function(t) {
				if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
				var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
				return !e || e !== !0 && t.getAttribute("classid") === e
			}
		}), ct.fn.extend({
			data: function(t, i) {
				var n, r, s = null,
					a = 0,
					l = this[0];
				if (t === e) {
					if (this.length && (s = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
						for (n = l.attributes; n.length > a; a++) r = n[a].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), o(l, r, s[r]));
						ct._data(l, "parsedAttrs", !0)
					}
					return s
				}
				return "object" == typeof t ? this.each(function() {
					ct.data(this, t)
				}) : arguments.length > 1 ? this.each(function() {
					ct.data(this, t, i)
				}) : l ? o(l, t, ct.data(l, t)) : null
			},
			removeData: function(t) {
				return this.each(function() {
					ct.removeData(this, t)
				})
			}
		}), ct.extend({
			queue: function(t, i, n) {
				var r;
				return t ? (i = (i || "fx") + "queue", r = ct._data(t, i), n && (!r || ct.isArray(n) ? r = ct._data(t, i, ct.makeArray(n)) : r.push(n)), r || []) : e
			},
			dequeue: function(t, e) {
				e = e || "fx";
				var i = ct.queue(t, e),
					n = i.length,
					r = i.shift(),
					s = ct._queueHooks(t, e),
					o = function() {
						ct.dequeue(t, e)
					};
				"inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
			},
			_queueHooks: function(t, e) {
				var i = e + "queueHooks";
				return ct._data(t, i) || ct._data(t, i, {
					empty: ct.Callbacks("once memory").add(function() {
						ct._removeData(t, e + "queue"), ct._removeData(t, i)
					})
				})
			}
		}), ct.fn.extend({
			queue: function(t, i) {
				var n = 2;
				return "string" != typeof t && (i = t, t = "fx", n--), n > arguments.length ? ct.queue(this[0], t) : i === e ? this : this.each(function() {
					var e = ct.queue(this, t, i);
					ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
				})
			},
			dequeue: function(t) {
				return this.each(function() {
					ct.dequeue(this, t)
				})
			},
			delay: function(t, e) {
				return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
					var n = setTimeout(e, t);
					i.stop = function() {
						clearTimeout(n)
					}
				})
			},
			clearQueue: function(t) {
				return this.queue(t || "fx", [])
			},
			promise: function(t, i) {
				var n, r = 1,
					s = ct.Deferred(),
					o = this,
					a = this.length,
					l = function() {
						--r || s.resolveWith(o, [o])
					};
				for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = ct._data(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
				return l(), s.promise(i)
			}
		});
		var Pt, Ot, Nt = /[\t\r\n\f]/g,
			At = /\r/g,
			Dt = /^(?:input|select|textarea|button|object)$/i,
			Rt = /^(?:a|area)$/i,
			Mt = /^(?:checked|selected)$/i,
			Ft = ct.support.getSetAttribute,
			Lt = ct.support.input;
		ct.fn.extend({
			attr: function(t, e) {
				return ct.access(this, ct.attr, t, e, arguments.length > 1)
			},
			removeAttr: function(t) {
				return this.each(function() {
					ct.removeAttr(this, t)
				})
			},
			prop: function(t, e) {
				return ct.access(this, ct.prop, t, e, arguments.length > 1)
			},
			removeProp: function(t) {
				return t = ct.propFix[t] || t, this.each(function() {
					try {
						this[t] = e, delete this[t]
					} catch (i) {}
				})
			},
			addClass: function(t) {
				var e, i, n, r, s, o = 0,
					a = this.length,
					l = "string" == typeof t && t;
				if (ct.isFunction(t)) return this.each(function(e) {
					ct(this).addClass(t.call(this, e, this.className))
				});
				if (l)
					for (e = (t || "").match(pt) || []; a > o; o++)
						if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Nt, " ") : " ")) {
							for (s = 0; r = e[s++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
							i.className = ct.trim(n)
						}
				return this
			},
			removeClass: function(t) {
				var e, i, n, r, s, o = 0,
					a = this.length,
					l = 0 === arguments.length || "string" == typeof t && t;
				if (ct.isFunction(t)) return this.each(function(e) {
					ct(this).removeClass(t.call(this, e, this.className))
				});
				if (l)
					for (e = (t || "").match(pt) || []; a > o; o++)
						if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Nt, " ") : "")) {
							for (s = 0; r = e[s++];)
								for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
							i.className = t ? ct.trim(n) : ""
						}
				return this
			},
			toggleClass: function(t, e) {
				var i = typeof t;
				return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(i) {
					ct(this).toggleClass(t.call(this, i, this.className, e), e)
				}) : this.each(function() {
					if ("string" === i)
						for (var e, n = 0, r = ct(this), s = t.match(pt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
					else(i === U || "boolean" === i) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
				})
			},
			hasClass: function(t) {
				for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
					if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Nt, " ").indexOf(e) >= 0) return !0;
				return !1
			},
			val: function(t) {
				var i, n, r, s = this[0];
				return arguments.length ? (r = ct.isFunction(t), this.each(function(i) {
					var s;
					1 === this.nodeType && (s = r ? t.call(this, i, ct(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ct.isArray(s) && (s = ct.map(s, function(t) {
						return null == t ? "" : t + ""
					})), n = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, s, "value") !== e || (this.value = s))
				})) : s ? (n = ct.valHooks[s.type] || ct.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== e ? i : (i = s.value, "string" == typeof i ? i.replace(At, "") : null == i ? "" : i)) : void 0
			}
		}), ct.extend({
			valHooks: {
				option: {
					get: function(t) {
						var e = ct.find.attr(t, "value");
						return null != e ? e : t.text
					}
				},
				select: {
					get: function(t) {
						for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
							if (i = n[l], !(!i.selected && l !== r || (ct.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ct.nodeName(i.parentNode, "optgroup"))) {
								if (e = ct(i).val(), s) return e;
								o.push(e)
							}
						return o
					},
					set: function(t, e) {
						for (var i, n, r = t.options, s = ct.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = ct.inArray(ct(n).val(), s) >= 0) && (i = !0);
						return i || (t.selectedIndex = -1), s
					}
				}
			},
			attr: function(t, i, n) {
				var r, s, o = t.nodeType;
				if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === U ? ct.prop(t, i, n) : (1 === o && ct.isXMLDoc(t) || (i = i.toLowerCase(), r = ct.attrHooks[i] || (ct.expr.match.bool.test(i) ? Ot : Pt)), n === e ? r && "get" in r && null !== (s = r.get(t, i)) ? s : (s = ct.find.attr(t, i), null == s ? e : s) : null !== n ? r && "set" in r && (s = r.set(t, n, i)) !== e ? s : (t.setAttribute(i, n + ""), n) : (ct.removeAttr(t, i), e))
			},
			removeAttr: function(t, e) {
				var i, n, r = 0,
					s = e && e.match(pt);
				if (s && 1 === t.nodeType)
					for (; i = s[r++];) n = ct.propFix[i] || i, ct.expr.match.bool.test(i) ? Lt && Ft || !Mt.test(i) ? t[n] = !1 : t[ct.camelCase("default-" + i)] = t[n] = !1 : ct.attr(t, i, ""), t.removeAttribute(Ft ? i : n)
			},
			attrHooks: {
				type: {
					set: function(t, e) {
						if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
							var i = t.value;
							return t.setAttribute("type", e), i && (t.value = i), e
						}
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(t, i, n) {
				var r, s, o, a = t.nodeType;
				if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ct.isXMLDoc(t), o && (i = ct.propFix[i] || i, s = ct.propHooks[i]), n !== e ? s && "set" in s && (r = s.set(t, n, i)) !== e ? r : t[i] = n : s && "get" in s && null !== (r = s.get(t, i)) ? r : t[i]
			},
			propHooks: {
				tabIndex: {
					get: function(t) {
						var e = ct.find.attr(t, "tabindex");
						return e ? parseInt(e, 10) : Dt.test(t.nodeName) || Rt.test(t.nodeName) && t.href ? 0 : -1
					}
				}
			}
		}), Ot = {
			set: function(t, e, i) {
				return e === !1 ? ct.removeAttr(t, i) : Lt && Ft || !Mt.test(i) ? t.setAttribute(!Ft && ct.propFix[i] || i, i) : t[ct.camelCase("default-" + i)] = t[i] = !0, i
			}
		}, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, i) {
			var n = ct.expr.attrHandle[i] || ct.find.attr;
			ct.expr.attrHandle[i] = Lt && Ft || !Mt.test(i) ? function(t, i, r) {
				var s = ct.expr.attrHandle[i],
					o = r ? e : (ct.expr.attrHandle[i] = e) != n(t, i, r) ? i.toLowerCase() : null;
				return ct.expr.attrHandle[i] = s, o
			} : function(t, i, n) {
				return n ? e : t[ct.camelCase("default-" + i)] ? i.toLowerCase() : null
			}
		}), Lt && Ft || (ct.attrHooks.value = {
			set: function(t, i, n) {
				return ct.nodeName(t, "input") ? (t.defaultValue = i, e) : Pt && Pt.set(t, i, n)
			}
		}), Ft || (Pt = {
			set: function(t, i, n) {
				var r = t.getAttributeNode(n);
				return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
			}
		}, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, i, n) {
			var r;
			return n ? e : (r = t.getAttributeNode(i)) && "" !== r.value ? r.value : null
		}, ct.valHooks.button = {
			get: function(t, i) {
				var n = t.getAttributeNode(i);
				return n && n.specified ? n.value : e
			},
			set: Pt.set
		}, ct.attrHooks.contenteditable = {
			set: function(t, e, i) {
				Pt.set(t, "" !== e && e, i)
			}
		}, ct.each(["width", "height"], function(t, i) {
			ct.attrHooks[i] = {
				set: function(t, n) {
					return "" === n ? (t.setAttribute(i, "auto"), n) : e
				}
			}
		})), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
			ct.propHooks[e] = {
				get: function(t) {
					return t.getAttribute(e, 4)
				}
			}
		}), ct.support.style || (ct.attrHooks.style = {
			get: function(t) {
				return t.style.cssText || e
			},
			set: function(t, e) {
				return t.style.cssText = e + ""
			}
		}), ct.support.optSelected || (ct.propHooks.selected = {
			get: function(t) {
				var e = t.parentNode;
				return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
			}
		}), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			ct.propFix[this.toLowerCase()] = this
		}), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
			ct.valHooks[this] = {
				set: function(t, i) {
					return ct.isArray(i) ? t.checked = ct.inArray(ct(t).val(), i) >= 0 : e
				}
			}, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		});
		var It = /^(?:input|select|textarea)$/i,
			jt = /^key/,
			Xt = /^(?:mouse|contextmenu)|click/,
			zt = /^(?:focusinfocus|focusoutblur)$/,
			Ht = /^([^.]*)(?:\.(.+)|)$/;
		ct.event = {
			global: {},
			add: function(t, i, n, r, s) {
				var o, a, l, u, c, h, p, f, d, m, g, _ = ct._data(t);
				if (_) {
					for (n.handler && (u = n, n = u.handler, s = u.selector), n.guid || (n.guid = ct.guid++), (a = _.events) || (a = _.events = {}), (h = _.handle) || (h = _.handle = function(t) {
							return typeof ct === U || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(h.elem, arguments)
						}, h.elem = t), i = (i || "").match(pt) || [""], l = i.length; l--;) o = Ht.exec(i[l]) || [], d = g = o[1], m = (o[2] || "").split(".").sort(), d && (c = ct.event.special[d] || {}, d = (s ? c.delegateType : c.bindType) || d, c = ct.event.special[d] || {}, p = ct.extend({
						type: d,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: s,
						needsContext: s && ct.expr.match.needsContext.test(s),
						namespace: m.join(".")
					}, u), (f = a[d]) || (f = a[d] = [], f.delegateCount = 0, c.setup && c.setup.call(t, r, m, h) !== !1 || (t.addEventListener ? t.addEventListener(d, h, !1) : t.attachEvent && t.attachEvent("on" + d, h))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), s ? f.splice(f.delegateCount++, 0, p) : f.push(p), ct.event.global[d] = !0);
					t = null
				}
			},
			remove: function(t, e, i, n, r) {
				var s, o, a, l, u, c, h, p, f, d, m, g = ct.hasData(t) && ct._data(t);
				if (g && (c = g.events)) {
					for (e = (e || "").match(pt) || [""], u = e.length; u--;)
						if (a = Ht.exec(e[u]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
							for (h = ct.event.special[f] || {}, f = (n ? h.delegateType : h.bindType) || f, p = c[f] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) o = p[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (p.splice(s, 1), o.selector && p.delegateCount--, h.remove && h.remove.call(t, o));
							l && !p.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || ct.removeEvent(t, f, g.handle), delete c[f])
						} else
							for (f in c) ct.event.remove(t, f + e[u], i, n, !0);
					ct.isEmptyObject(c) && (delete g.handle, ct._removeData(t, "events"))
				}
			},
			trigger: function(i, n, r, s) {
				var o, a, l, u, c, h, p, f = [r || Z],
					d = lt.call(i, "type") ? i.type : i,
					m = lt.call(i, "namespace") ? i.namespace.split(".") : [];
				if (l = h = r = r || Z, 3 !== r.nodeType && 8 !== r.nodeType && !zt.test(d + ct.event.triggered) && (d.indexOf(".") >= 0 && (m = d.split("."), d = m.shift(), m.sort()), a = 0 > d.indexOf(":") && "on" + d, i = i[ct.expando] ? i : new ct.Event(d, "object" == typeof i && i), i.isTrigger = s ? 2 : 3, i.namespace = m.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = r), n = null == n ? [i] : ct.makeArray(n, [i]), c = ct.event.special[d] || {}, s || !c.trigger || c.trigger.apply(r, n) !== !1)) {
					if (!s && !c.noBubble && !ct.isWindow(r)) {
						for (u = c.delegateType || d, zt.test(u + d) || (l = l.parentNode); l; l = l.parentNode) f.push(l), h = l;
						h === (r.ownerDocument || Z) && f.push(h.defaultView || h.parentWindow || t)
					}
					for (p = 0;
						(l = f[p++]) && !i.isPropagationStopped();) i.type = p > 1 ? u : c.bindType || d, o = (ct._data(l, "events") || {})[i.type] && ct._data(l, "handle"), o && o.apply(l, n), o = a && l[a], o && ct.acceptData(l) && o.apply && o.apply(l, n) === !1 && i.preventDefault();
					if (i.type = d, !s && !i.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ct.acceptData(r) && a && r[d] && !ct.isWindow(r)) {
						h = r[a], h && (r[a] = null), ct.event.triggered = d;
						try {
							r[d]()
						} catch (g) {}
						ct.event.triggered = e, h && (r[a] = h)
					}
					return i.result
				}
			},
			dispatch: function(t) {
				t = ct.event.fix(t);
				var i, n, r, s, o, a = [],
					l = st.call(arguments),
					u = (ct._data(this, "events") || {})[t.type] || [],
					c = ct.event.special[t.type] || {};
				if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
					for (a = ct.event.handlers.call(this, t, u), i = 0;
						(s = a[i++]) && !t.isPropagationStopped();)
						for (t.currentTarget = s.elem, o = 0;
							(r = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
					return c.postDispatch && c.postDispatch.call(this, t), t.result
				}
			},
			handlers: function(t, i) {
				var n, r, s, o, a = [],
					l = i.delegateCount,
					u = t.target;
				if (l && u.nodeType && (!t.button || "click" !== t.type))
					for (; u != this; u = u.parentNode || this)
						if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
							for (s = [], o = 0; l > o; o++) r = i[o], n = r.selector + " ", s[n] === e && (s[n] = r.needsContext ? ct(n, this).index(u) >= 0 : ct.find(n, this, null, [u]).length), s[n] && s.push(r);
							s.length && a.push({
								elem: u,
								handlers: s
							})
						}
				return i.length > l && a.push({
					elem: this,
					handlers: i.slice(l)
				}), a
			},
			fix: function(t) {
				if (t[ct.expando]) return t;
				var e, i, n, r = t.type,
					s = t,
					o = this.fixHooks[r];
				for (o || (this.fixHooks[r] = o = Xt.test(r) ? this.mouseHooks : jt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new ct.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
				return t.target || (t.target = s.srcElement || Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(t, e) {
					return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(t, i) {
					var n, r, s, o = i.button,
						a = i.fromElement;
					return null == t.pageX && null != i.clientX && (r = t.target.ownerDocument || Z, s = r.documentElement, n = r.body, t.pageX = i.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || o === e || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if (this !== c() && this.focus) try {
							return this.focus(), !1
						} catch (t) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === c() && this.blur ? (this.blur(), !1) : e
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
					},
					_default: function(t) {
						return ct.nodeName(t.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(t) {
						t.result !== e && (t.originalEvent.returnValue = t.result)
					}
				}
			},
			simulate: function(t, e, i, n) {
				var r = ct.extend(new ct.Event, i, {
					type: t,
					isSimulated: !0,
					originalEvent: {}
				});
				n ? ct.event.trigger(r, null, e) : ct.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
			}
		}, ct.removeEvent = Z.removeEventListener ? function(t, e, i) {
			t.removeEventListener && t.removeEventListener(e, i, !1)
		} : function(t, e, i) {
			var n = "on" + e;
			t.detachEvent && (typeof t[n] === U && (t[n] = null), t.detachEvent(n, i))
		}, ct.Event = function(t, i) {
			return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, i && ct.extend(this, i), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, i)
		}, ct.Event.prototype = {
			isDefaultPrevented: u,
			isPropagationStopped: u,
			isImmediatePropagationStopped: u,
			preventDefault: function() {
				var t = this.originalEvent;
				this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
			},
			stopPropagation: function() {
				var t = this.originalEvent;
				this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = l, this.stopPropagation()
			}
		}, ct.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(t, e) {
			ct.event.special[t] = {
				delegateType: e,
				bindType: e,
				handle: function(t) {
					var i, n = this,
						r = t.relatedTarget,
						s = t.handleObj;
					return (!r || r !== n && !ct.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
				}
			}
		}), ct.support.submitBubbles || (ct.event.special.submit = {
			setup: function() {
				return !ct.nodeName(this, "form") && (ct.event.add(this, "click._submit keypress._submit", function(t) {
					var i = t.target,
						n = ct.nodeName(i, "input") || ct.nodeName(i, "button") ? i.form : e;
					n && !ct._data(n, "submitBubbles") && (ct.event.add(n, "submit._submit", function(t) {
						t._submit_bubble = !0
					}), ct._data(n, "submitBubbles", !0))
				}), e)
			},
			postDispatch: function(t) {
				t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
			},
			teardown: function() {
				return !ct.nodeName(this, "form") && (ct.event.remove(this, "._submit"), e)
			}
		}), ct.support.changeBubbles || (ct.event.special.change = {
			setup: function() {
				return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(t) {
					"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
				}), ct.event.add(this, "click._change", function(t) {
					this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
				})), !1) : (ct.event.add(this, "beforeactivate._change", function(t) {
					var e = t.target;
					It.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
						!this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
					}), ct._data(e, "changeBubbles", !0))
				}), e)
			},
			handle: function(t) {
				var i = t.target;
				return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : e
			},
			teardown: function() {
				return ct.event.remove(this, "._change"), !It.test(this.nodeName)
			}
		}), ct.support.focusinBubbles || ct.each({
			focus: "focusin",
			blur: "focusout"
		}, function(t, e) {
			var i = 0,
				n = function(t) {
					ct.event.simulate(e, t.target, ct.event.fix(t), !0)
				};
			ct.event.special[e] = {
				setup: function() {
					0 === i++ && Z.addEventListener(t, n, !0)
				},
				teardown: function() {
					0 === --i && Z.removeEventListener(t, n, !0)
				}
			}
		}), ct.fn.extend({
			on: function(t, i, n, r, s) {
				var o, a;
				if ("object" == typeof t) {
					"string" != typeof i && (n = n || i, i = e);
					for (o in t) this.on(o, i, n, t[o], s);
					return this
				}
				if (null == n && null == r ? (r = i, n = i = e) : null == r && ("string" == typeof i ? (r = n, n = e) : (r = n, n = i, i = e)), r === !1) r = u;
				else if (!r) return this;
				return 1 === s && (a = r, r = function(t) {
					return ct().off(t), a.apply(this, arguments)
				}, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
					ct.event.add(this, t, r, n, i)
				})
			},
			one: function(t, e, i, n) {
				return this.on(t, e, i, n, 1)
			},
			off: function(t, i, n) {
				var r, s;
				if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ct(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof t) {
					for (s in t) this.off(s, i, t[s]);
					return this
				}
				return (i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = u), this.each(function() {
					ct.event.remove(this, t, n, i)
				})
			},
			trigger: function(t, e) {
				return this.each(function() {
					ct.event.trigger(t, e, this)
				})
			},
			triggerHandler: function(t, i) {
				var n = this[0];
				return n ? ct.event.trigger(t, i, n, !0) : e
			}
		});
		var Bt = /^.[^:#\[\.,]*$/,
			Yt = /^(?:parents|prev(?:Until|All))/,
			qt = ct.expr.match.needsContext,
			$t = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ct.fn.extend({
			find: function(t) {
				var e, i = [],
					n = this,
					r = n.length;
				if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
					for (e = 0; r > e; e++)
						if (ct.contains(n[e], this)) return !0
				}));
				for (e = 0; r > e; e++) ct.find(t, n[e], i);
				return i = this.pushStack(r > 1 ? ct.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
			},
			has: function(t) {
				var e, i = ct(t, this),
					n = i.length;
				return this.filter(function() {
					for (e = 0; n > e; e++)
						if (ct.contains(this, i[e])) return !0
				})
			},
			not: function(t) {
				return this.pushStack(p(this, t || [], !0))
			},
			filter: function(t) {
				return this.pushStack(p(this, t || [], !1))
			},
			is: function(t) {
				return !!p(this, "string" == typeof t && qt.test(t) ? ct(t) : t || [], !1).length
			},
			closest: function(t, e) {
				for (var i, n = 0, r = this.length, s = [], o = qt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; r > n; n++)
					for (i = this[n]; i && i !== e; i = i.parentNode)
						if (11 > i.nodeType && (o ? o.index(i) > -1 : 1 === i.nodeType && ct.find.matchesSelector(i, t))) {
							i = s.push(i);
							break
						}
				return this.pushStack(s.length > 1 ? ct.unique(s) : s)
			},
			index: function(t) {
				return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(t, e) {
				var i = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
					n = ct.merge(this.get(), i);
				return this.pushStack(ct.unique(n))
			},
			addBack: function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), ct.each({
			parent: function(t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			parents: function(t) {
				return ct.dir(t, "parentNode")
			},
			parentsUntil: function(t, e, i) {
				return ct.dir(t, "parentNode", i)
			},
			next: function(t) {
				return h(t, "nextSibling")
			},
			prev: function(t) {
				return h(t, "previousSibling")
			},
			nextAll: function(t) {
				return ct.dir(t, "nextSibling")
			},
			prevAll: function(t) {
				return ct.dir(t, "previousSibling")
			},
			nextUntil: function(t, e, i) {
				return ct.dir(t, "nextSibling", i)
			},
			prevUntil: function(t, e, i) {
				return ct.dir(t, "previousSibling", i)
			},
			siblings: function(t) {
				return ct.sibling((t.parentNode || {}).firstChild, t)
			},
			children: function(t) {
				return ct.sibling(t.firstChild)
			},
			contents: function(t) {
				return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
			}
		}, function(t, e) {
			ct.fn[t] = function(i, n) {
				var r = ct.map(this, e, i);
				return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = ct.filter(n, r)), this.length > 1 && ($t[t] || (r = ct.unique(r)), Yt.test(t) && (r = r.reverse())), this.pushStack(r)
			}
		}), ct.extend({
			filter: function(t, e, i) {
				var n = e[0];
				return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ct.find.matchesSelector(n, t) ? [n] : [] : ct.find.matches(t, ct.grep(e, function(t) {
					return 1 === t.nodeType
				}))
			},
			dir: function(t, i, n) {
				for (var r = [], s = t[i]; s && 9 !== s.nodeType && (n === e || 1 !== s.nodeType || !ct(s).is(n));) 1 === s.nodeType && r.push(s), s = s[i];
				return r
			},
			sibling: function(t, e) {
				for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
				return i
			}
		});
		var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Wt = / jQuery\d+="(?:null|\d+)"/g,
			Ut = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
			Gt = /^\s+/,
			Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Qt = /<([\w:]+)/,
			Kt = /<tbody/i,
			Jt = /<|&#?\w+;/,
			te = /<(?:script|style|link)/i,
			ee = /^(?:checkbox|radio)$/i,
			ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
			ne = /^$|\/(?:java|ecma)script/i,
			re = /^true\/(.*)/,
			se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			oe = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			ae = f(Z),
			le = ae.appendChild(Z.createElement("div"));
		oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td, ct.fn.extend({
			text: function(t) {
				return ct.access(this, function(t) {
					return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Z).createTextNode(t))
				}, null, t, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = d(this, t);
						e.appendChild(t)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = d(this, t);
						e.insertBefore(t, e.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
				})
			},
			remove: function(t, e) {
				for (var i, n = t ? ct.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || ct.cleanData(x(i)), i.parentNode && (e && ct.contains(i.ownerDocument, i) && _(x(i, "script")), i.parentNode.removeChild(i));
				return this
			},
			empty: function() {
				for (var t, e = 0; null != (t = this[e]); e++) {
					for (1 === t.nodeType && ct.cleanData(x(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
					t.options && ct.nodeName(t, "select") && (t.options.length = 0)
				}
				return this
			},
			clone: function(t, e) {
				return t = null != t && t, e = null == e ? t : e, this.map(function() {
					return ct.clone(this, t, e)
				})
			},
			html: function(t) {
				return ct.access(this, function(t) {
					var i = this[0] || {},
						n = 0,
						r = this.length;
					if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Wt, "") : e;
					if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Ut.test(t) || !ct.support.leadingWhitespace && Gt.test(t) || oe[(Qt.exec(t) || ["", ""])[1].toLowerCase()])) {
						t = t.replace(Zt, "<$1></$2>");
						try {
							for (; r > n; n++) i = this[n] || {}, 1 === i.nodeType && (ct.cleanData(x(i, !1)), i.innerHTML = t);
							i = 0
						} catch (s) {}
					}
					i && this.empty().append(t)
				}, null, t, arguments.length)
			},
			replaceWith: function() {
				var t = ct.map(this, function(t) {
						return [t.nextSibling, t.parentNode]
					}),
					e = 0;
				return this.domManip(arguments, function(i) {
					var n = t[e++],
						r = t[e++];
					r && (n && n.parentNode !== r && (n = this.nextSibling), ct(this).remove(), r.insertBefore(i, n))
				}, !0), e ? this : this.remove()
			},
			detach: function(t) {
				return this.remove(t, !0)
			},
			domManip: function(t, e, i) {
				t = nt.apply([], t);
				var n, r, s, o, a, l, u = 0,
					c = this.length,
					h = this,
					p = c - 1,
					f = t[0],
					d = ct.isFunction(f);
				if (d || !(1 >= c || "string" != typeof f || ct.support.checkClone) && ie.test(f)) return this.each(function(n) {
					var r = h.eq(n);
					d && (t[0] = f.call(this, n, r.html())), r.domManip(t, e, i)
				});
				if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
					for (o = ct.map(x(l, "script"), m), s = o.length; c > u; u++) r = l, u !== p && (r = ct.clone(r, !0, !0), s && ct.merge(o, x(r, "script"))), e.call(this[u], r, u);
					if (s)
						for (a = o[o.length - 1].ownerDocument, ct.map(o, g), u = 0; s > u; u++) r = o[u], ne.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(se, "")));
					l = n = null
				}
				return this
			}
		}), ct.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(t, e) {
			ct.fn[t] = function(t) {
				for (var i, n = 0, r = [], s = ct(t), o = s.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), ct(s[n])[e](i), rt.apply(r, i.get());
				return this.pushStack(r)
			}
		}), ct.extend({
			clone: function(t, e, i) {
				var n, r, s, o, a, l = ct.contains(t.ownerDocument, t);
				if (ct.support.html5Clone || ct.isXMLDoc(t) || !Ut.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(s = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
					for (n = x(s), a = x(t), o = 0; null != (r = a[o]); ++o) n[o] && v(r, n[o]);
				if (e)
					if (i)
						for (a = a || x(t), n = n || x(s), o = 0; null != (r = a[o]); o++) y(r, n[o]);
					else y(t, s);
				return n = x(s, "script"), n.length > 0 && _(n, !l && x(t, "script")), n = a = r = null, s
			},
			buildFragment: function(t, e, i, n) {
				for (var r, s, o, a, l, u, c, h = t.length, p = f(e), d = [], m = 0; h > m; m++)
					if (s = t[m], s || 0 === s)
						if ("object" === ct.type(s)) ct.merge(d, s.nodeType ? [s] : s);
						else if (Jt.test(s)) {
					for (a = a || p.appendChild(e.createElement("div")), l = (Qt.exec(s) || ["", ""])[1].toLowerCase(), c = oe[l] || oe._default, a.innerHTML = c[1] + s.replace(Zt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
					if (!ct.support.leadingWhitespace && Gt.test(s) && d.push(e.createTextNode(Gt.exec(s)[0])), !ct.support.tbody)
						for (s = "table" !== l || Kt.test(s) ? "<table>" !== c[1] || Kt.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) ct.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
					for (ct.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
					a = p.lastChild
				} else d.push(e.createTextNode(s));
				for (a && p.removeChild(a), ct.support.appendChecked || ct.grep(x(d, "input"), b), m = 0; s = d[m++];)
					if ((!n || -1 === ct.inArray(s, n)) && (o = ct.contains(s.ownerDocument, s), a = x(p.appendChild(s), "script"), o && _(a), i))
						for (r = 0; s = a[r++];) ne.test(s.type || "") && i.push(s);
				return a = null, p
			},
			cleanData: function(t, e) {
				for (var i, n, r, s, o = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (i = t[o]); o++)
					if ((e || ct.acceptData(i)) && (r = i[a], s = r && l[r])) {
						if (s.events)
							for (n in s.events) c[n] ? ct.event.remove(i, n) : ct.removeEvent(i, n, s.handle);
						l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== U ? i.removeAttribute(a) : i[a] = null, et.push(r))
					}
			},
			_evalUrl: function(t) {
				return ct.ajax({
					url: t,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				})
			}
		}), ct.fn.extend({
			wrapAll: function(t) {
				if (ct.isFunction(t)) return this.each(function(e) {
					ct(this).wrapAll(t.call(this, e))
				});
				if (this[0]) {
					var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
						for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
						return t
					}).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				return ct.isFunction(t) ? this.each(function(e) {
					ct(this).wrapInner(t.call(this, e))
				}) : this.each(function() {
					var e = ct(this),
						i = e.contents();
					i.length ? i.wrapAll(t) : e.append(t)
				})
			},
			wrap: function(t) {
				var e = ct.isFunction(t);
				return this.each(function(i) {
					ct(this).wrapAll(e ? t.call(this, i) : t)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
				}).end()
			}
		});
		var ue, ce, he, pe = /alpha\([^)]*\)/i,
			fe = /opacity\s*=\s*([^)]*)/,
			de = /^(top|right|bottom|left)$/,
			me = /^(none|table(?!-c[ea]).+)/,
			ge = /^margin/,
			_e = RegExp("^(" + ht + ")(.*)$", "i"),
			ye = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
			ve = RegExp("^([+-])=(" + ht + ")", "i"),
			xe = {
				BODY: "block"
			},
			be = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Te = {
				letterSpacing: 0,
				fontWeight: 400
			},
			we = ["Top", "Right", "Bottom", "Left"],
			ke = ["Webkit", "O", "Moz", "ms"];
		ct.fn.extend({
			css: function(t, i) {
				return ct.access(this, function(t, i, n) {
					var r, s, o = {},
						a = 0;
					if (ct.isArray(i)) {
						for (s = ce(t), r = i.length; r > a; a++) o[i[a]] = ct.css(t, i[a], !1, s);
						return o
					}
					return n !== e ? ct.style(t, i, n) : ct.css(t, i)
				}, t, i, arguments.length > 1)
			},
			show: function() {
				return k(this, !0)
			},
			hide: function() {
				return k(this)
			},
			toggle: function(t) {
				return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
					w(this) ? ct(this).show() : ct(this).hide()
				})
			}
		}), ct.extend({
			cssHooks: {
				opacity: {
					get: function(t, e) {
						if (e) {
							var i = he(t, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(t, i, n, r) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var s, o, a, l = ct.camelCase(i),
						u = t.style;
					if (i = ct.cssProps[l] || (ct.cssProps[l] = T(u, l)), a = ct.cssHooks[i] || ct.cssHooks[l], n === e) return a && "get" in a && (s = a.get(t, !1, r)) !== e ? s : u[i];
					if (o = typeof n, "string" === o && (s = ve.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(ct.css(t, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || ct.cssNumber[l] || (n += "px"), ct.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (u[i] = "inherit"),
							a && "set" in a && (n = a.set(t, n, r)) === e))) try {
						u[i] = n
					} catch (c) {}
				}
			},
			css: function(t, i, n, r) {
				var s, o, a, l = ct.camelCase(i);
				return i = ct.cssProps[l] || (ct.cssProps[l] = T(t.style, l)), a = ct.cssHooks[i] || ct.cssHooks[l], a && "get" in a && (o = a.get(t, !0, n)), o === e && (o = he(t, i, r)), "normal" === o && i in Te && (o = Te[i]), "" === n || n ? (s = parseFloat(o), n === !0 || ct.isNumeric(s) ? s || 0 : o) : o
			}
		}), t.getComputedStyle ? (ce = function(e) {
			return t.getComputedStyle(e, null)
		}, he = function(t, i, n) {
			var r, s, o, a = n || ce(t),
				l = a ? a.getPropertyValue(i) || a[i] : e,
				u = t.style;
			return a && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, i)), ye.test(l) && ge.test(i) && (r = u.width, s = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = s, u.maxWidth = o)), l
		}) : Z.documentElement.currentStyle && (ce = function(t) {
			return t.currentStyle
		}, he = function(t, i, n) {
			var r, s, o, a = n || ce(t),
				l = a ? a[i] : e,
				u = t.style;
			return null == l && u && u[i] && (l = u[i]), ye.test(l) && !de.test(i) && (r = u.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), u.left = "fontSize" === i ? "1em" : l, l = u.pixelLeft + "px", u.left = r, o && (s.left = o)), "" === l ? "auto" : l
		}), ct.each(["height", "width"], function(t, i) {
			ct.cssHooks[i] = {
				get: function(t, n, r) {
					return n ? 0 === t.offsetWidth && me.test(ct.css(t, "display")) ? ct.swap(t, be, function() {
						return S(t, i, r)
					}) : S(t, i, r) : e
				},
				set: function(t, e, n) {
					var r = n && ce(t);
					return E(t, e, n ? C(t, i, n, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r), r) : 0)
				}
			}
		}), ct.support.opacity || (ct.cssHooks.opacity = {
			get: function(t, e) {
				return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
			},
			set: function(t, e) {
				var i = t.style,
					n = t.currentStyle,
					r = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
					s = n && n.filter || i.filter || "";
				i.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(s.replace(pe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = pe.test(s) ? s.replace(pe, r) : s + " " + r)
			}
		}), ct(function() {
			ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
				get: function(t, i) {
					return i ? ct.swap(t, {
						display: "inline-block"
					}, he, [t, "marginRight"]) : e
				}
			}), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, i) {
				ct.cssHooks[i] = {
					get: function(t, n) {
						return n ? (n = he(t, i), ye.test(n) ? ct(t).position()[i] + "px" : n) : e
					}
				}
			})
		}), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
			return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
		}, ct.expr.filters.visible = function(t) {
			return !ct.expr.filters.hidden(t)
		}), ct.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(t, e) {
			ct.cssHooks[t + e] = {
				expand: function(i) {
					for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + we[n] + e] = s[n] || s[n - 2] || s[0];
					return r
				}
			}, ge.test(t) || (ct.cssHooks[t + e].set = E)
		});
		var Ee = /%20/g,
			Ce = /\[\]$/,
			Se = /\r?\n/g,
			Pe = /^(?:submit|button|image|reset|file)$/i,
			Oe = /^(?:input|select|textarea|keygen)/i;
		ct.fn.extend({
			serialize: function() {
				return ct.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var t = ct.prop(this, "elements");
					return t ? ct.makeArray(t) : this
				}).filter(function() {
					var t = this.type;
					return this.name && !ct(this).is(":disabled") && Oe.test(this.nodeName) && !Pe.test(t) && (this.checked || !ee.test(t))
				}).map(function(t, e) {
					var i = ct(this).val();
					return null == i ? null : ct.isArray(i) ? ct.map(i, function(t) {
						return {
							name: e.name,
							value: t.replace(Se, "\r\n")
						}
					}) : {
						name: e.name,
						value: i.replace(Se, "\r\n")
					}
				}).get()
			}
		}), ct.param = function(t, i) {
			var n, r = [],
				s = function(t, e) {
					e = ct.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
			if (i === e && (i = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
				s(this.name, this.value)
			});
			else
				for (n in t) N(n, t[n], i, s);
			return r.join("&").replace(Ee, "+")
		}, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
			ct.fn[e] = function(t, i) {
				return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
			}
		}), ct.fn.extend({
			hover: function(t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			},
			bind: function(t, e, i) {
				return this.on(t, null, e, i)
			},
			unbind: function(t, e) {
				return this.off(t, null, e)
			},
			delegate: function(t, e, i, n) {
				return this.on(e, t, i, n)
			},
			undelegate: function(t, e, i) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
			}
		});
		var Ne, Ae, De = ct.now(),
			Re = /\?/,
			Me = /#.*$/,
			Fe = /([?&])_=[^&]*/,
			Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			je = /^(?:GET|HEAD)$/,
			Xe = /^\/\//,
			ze = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
			He = ct.fn.load,
			Be = {},
			Ye = {},
			qe = "*/".concat("*");
		try {
			Ae = G.href
		} catch ($e) {
			Ae = Z.createElement("a"), Ae.href = "", Ae = Ae.href
		}
		Ne = ze.exec(Ae.toLowerCase()) || [], ct.fn.load = function(t, i, n) {
			if ("string" != typeof t && He) return He.apply(this, arguments);
			var r, s, o, a = this,
				l = t.indexOf(" ");
			return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ct.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (o = "POST"), a.length > 0 && ct.ajax({
				url: t,
				type: o,
				dataType: "html",
				data: i
			}).done(function(t) {
				s = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(t)).find(r) : t)
			}).complete(n && function(t, e) {
				a.each(n, s || [t.responseText, e, t])
			}), this
		}, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
			ct.fn[e] = function(t) {
				return this.on(e, t)
			}
		}), ct.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ae,
				type: "GET",
				isLocal: Ie.test(Ne[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": qe,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": ct.parseJSON,
					"text xml": ct.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(t, e) {
				return e ? R(R(t, ct.ajaxSettings), e) : R(ct.ajaxSettings, t)
			},
			ajaxPrefilter: A(Be),
			ajaxTransport: A(Ye),
			ajax: function(t, i) {
				function n(t, i, n, r) {
					var s, h, y, v, b, w = i;
					2 !== x && (x = 2, l && clearTimeout(l), c = e, a = r || "", T.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (v = M(p, T, n)), v = F(p, v, T, s), s ? (p.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ct.lastModified[o] = b), b = T.getResponseHeader("etag"), b && (ct.etag[o] = b)), 204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = v.state, h = v.data, y = v.error, s = !y)) : (y = w, (t || !w) && (w = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (i || w) + "", s ? m.resolveWith(f, [h, w, T]) : m.rejectWith(f, [T, w, y]), T.statusCode(_), _ = e, u && d.trigger(s ? "ajaxSuccess" : "ajaxError", [T, p, s ? h : y]), g.fireWith(f, [T, w]), u && (d.trigger("ajaxComplete", [T, p]), --ct.active || ct.event.trigger("ajaxStop")))
				}
				"object" == typeof t && (i = t, t = e), i = i || {};
				var r, s, o, a, l, u, c, h, p = ct.ajaxSetup({}, i),
					f = p.context || p,
					d = p.context && (f.nodeType || f.jquery) ? ct(f) : ct.event,
					m = ct.Deferred(),
					g = ct.Callbacks("once memory"),
					_ = p.statusCode || {},
					y = {},
					v = {},
					x = 0,
					b = "canceled",
					T = {
						readyState: 0,
						getResponseHeader: function(t) {
							var e;
							if (2 === x) {
								if (!h)
									for (h = {}; e = Le.exec(a);) h[e[1].toLowerCase()] = e[2];
								e = h[t.toLowerCase()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders: function() {
							return 2 === x ? a : null
						},
						setRequestHeader: function(t, e) {
							var i = t.toLowerCase();
							return x || (t = v[i] = v[i] || t, y[t] = e), this
						},
						overrideMimeType: function(t) {
							return x || (p.mimeType = t), this
						},
						statusCode: function(t) {
							var e;
							if (t)
								if (2 > x)
									for (e in t) _[e] = [_[e], t[e]];
								else T.always(t[T.status]);
							return this
						},
						abort: function(t) {
							var e = t || b;
							return c && c.abort(e), n(0, e), this
						}
					};
				if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || Ae) + "").replace(Me, "").replace(Xe, Ne[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (r = ze.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Ne[1] && r[2] === Ne[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ne[3] || ("http:" === Ne[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), D(Be, p, i, T), 2 === x) return T;
				u = p.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !je.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Re.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fe.test(o) ? o.replace(Fe, "$1_=" + De++) : o + (Re.test(o) ? "&" : "?") + "_=" + De++)), p.ifModified && (ct.lastModified[o] && T.setRequestHeader("If-Modified-Since", ct.lastModified[o]), ct.etag[o] && T.setRequestHeader("If-None-Match", ct.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]);
				for (s in p.headers) T.setRequestHeader(s, p.headers[s]);
				if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === x)) return T.abort();
				b = "abort";
				for (s in {
						success: 1,
						error: 1,
						complete: 1
					}) T[s](p[s]);
				if (c = D(Ye, p, i, T)) {
					T.readyState = 1, u && d.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
						T.abort("timeout")
					}, p.timeout));
					try {
						x = 1, c.send(y, n)
					} catch (w) {
						if (!(2 > x)) throw w;
						n(-1, w)
					}
				} else n(-1, "No Transport");
				return T
			},
			getJSON: function(t, e, i) {
				return ct.get(t, e, i, "json")
			},
			getScript: function(t, i) {
				return ct.get(t, e, i, "script")
			}
		}), ct.each(["get", "post"], function(t, i) {
			ct[i] = function(t, n, r, s) {
				return ct.isFunction(n) && (s = s || r, r = n, n = e), ct.ajax({
					url: t,
					type: i,
					dataType: s,
					data: n,
					success: r
				})
			}
		}), ct.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(t) {
					return ct.globalEval(t), t
				}
			}
		}), ct.ajaxPrefilter("script", function(t) {
			t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
		}), ct.ajaxTransport("script", function(t) {
			if (t.crossDomain) {
				var i, n = Z.head || ct("head")[0] || Z.documentElement;
				return {
					send: function(e, r) {
						i = Z.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
							(e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || r(200, "success"))
						}, n.insertBefore(i, n.firstChild)
					},
					abort: function() {
						i && i.onload(e, !0)
					}
				}
			}
		});
		var Ve = [],
			We = /(=)\?(?=&|$)|\?\?/;
		ct.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var t = Ve.pop() || ct.expando + "_" + De++;
				return this[t] = !0, t
			}
		}), ct.ajaxPrefilter("json jsonp", function(i, n, r) {
			var s, o, a, l = i.jsonp !== !1 && (We.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && We.test(i.data) && "data");
			return l || "jsonp" === i.dataTypes[0] ? (s = i.jsonpCallback = ct.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(We, "$1" + s) : i.jsonp !== !1 && (i.url += (Re.test(i.url) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function() {
				return a || ct.error(s + " was not called"), a[0]
			}, i.dataTypes[0] = "json", o = t[s], t[s] = function() {
				a = arguments
			}, r.always(function() {
				t[s] = o, i[s] && (i.jsonpCallback = n.jsonpCallback, Ve.push(s)), a && ct.isFunction(o) && o(a[0]), a = o = e
			}), "script") : e
		});
		var Ue, Ge, Ze = 0,
			Qe = t.ActiveXObject && function() {
				var t;
				for (t in Ue) Ue[t](e, !0)
			};
		ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
			return !this.isLocal && L() || I()
		} : L, Ge = ct.ajaxSettings.xhr(), ct.support.cors = !!Ge && "withCredentials" in Ge, Ge = ct.support.ajax = !!Ge, Ge && ct.ajaxTransport(function(i) {
			if (!i.crossDomain || ct.support.cors) {
				var n;
				return {
					send: function(r, s) {
						var o, a, l = i.xhr();
						if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
							for (a in i.xhrFields) l[a] = i.xhrFields[a];
						i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
						try {
							for (a in r) l.setRequestHeader(a, r[a])
						} catch (u) {}
						l.send(i.hasContent && i.data || null), n = function(t, r) {
							var a, u, c, h;
							try {
								if (n && (r || 4 === l.readyState))
									if (n = e, o && (l.onreadystatechange = ct.noop, Qe && delete Ue[o]), r) 4 !== l.readyState && l.abort();
									else {
										h = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
										try {
											c = l.statusText
										} catch (p) {
											c = ""
										}
										a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
									}
							} catch (f) {
								r || s(-1, f)
							}
							h && s(a, c, h, u)
						}, i.async ? 4 === l.readyState ? setTimeout(n) : (o = ++Ze, Qe && (Ue || (Ue = {}, ct(t).unload(Qe)), Ue[o] = n), l.onreadystatechange = n) : n()
					},
					abort: function() {
						n && n(e, !0)
					}
				}
			}
		});
		var Ke, Je, ti = /^(?:toggle|show|hide)$/,
			ei = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
			ii = /queueHooks$/,
			ni = [B],
			ri = {
				"*": [function(t, e) {
					var i = this.createTween(t, e),
						n = i.cur(),
						r = ei.exec(e),
						s = r && r[3] || (ct.cssNumber[t] ? "" : "px"),
						o = (ct.cssNumber[t] || "px" !== s && +n) && ei.exec(ct.css(i.elem, t)),
						a = 1,
						l = 20;
					if (o && o[3] !== s) {
						s = s || o[3], r = r || [], o = +n || 1;
						do a = a || ".5", o /= a, ct.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
					}
					return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
				}]
			};
		ct.Animation = ct.extend(z, {
			tweener: function(t, e) {
				ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
				for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ri[i] = ri[i] || [], ri[i].unshift(e)
			},
			prefilter: function(t, e) {
				e ? ni.unshift(t) : ni.push(t)
			}
		}), ct.Tween = Y, Y.prototype = {
			constructor: Y,
			init: function(t, e, i, n, r, s) {
				this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ct.cssNumber[i] ? "" : "px")
			},
			cur: function() {
				var t = Y.propHooks[this.prop];
				return t && t.get ? t.get(this) : Y.propHooks._default.get(this)
			},
			run: function(t) {
				var e, i = Y.propHooks[this.prop];
				return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Y.propHooks._default.set(this), this
			}
		}, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
			_default: {
				get: function(t) {
					var e;
					return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
				},
				set: function(t) {
					ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
				}
			}
		}, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
			set: function(t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, ct.each(["toggle", "show", "hide"], function(t, e) {
			var i = ct.fn[e];
			ct.fn[e] = function(t, n, r) {
				return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(q(e, !0), t, n, r)
			}
		}), ct.fn.extend({
			fadeTo: function(t, e, i, n) {
				return this.filter(w).css("opacity", 0).show().end().animate({
					opacity: e
				}, t, i, n)
			},
			animate: function(t, e, i, n) {
				var r = ct.isEmptyObject(t),
					s = ct.speed(e, i, n),
					o = function() {
						var e = z(this, ct.extend({}, t), s);
						(r || ct._data(this, "finish")) && e.stop(!0)
					};
				return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
			},
			stop: function(t, i, n) {
				var r = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
				return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
					var e = !0,
						i = null != t && t + "queueHooks",
						s = ct.timers,
						o = ct._data(this);
					if (i) o[i] && o[i].stop && r(o[i]);
					else
						for (i in o) o[i] && o[i].stop && ii.test(i) && r(o[i]);
					for (i = s.length; i--;) s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n), e = !1, s.splice(i, 1));
					(e || !n) && ct.dequeue(this, t)
				})
			},
			finish: function(t) {
				return t !== !1 && (t = t || "fx"), this.each(function() {
					var e, i = ct._data(this),
						n = i[t + "queue"],
						r = i[t + "queueHooks"],
						s = ct.timers,
						o = n ? n.length : 0;
					for (i.finish = !0, ct.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
					for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete i.finish
				})
			}
		}), ct.each({
			slideDown: q("show"),
			slideUp: q("hide"),
			slideToggle: q("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(t, e) {
			ct.fn[t] = function(t, i, n) {
				return this.animate(e, t, i, n)
			}
		}), ct.speed = function(t, e, i) {
			var n = t && "object" == typeof t ? ct.extend({}, t) : {
				complete: i || !i && e || ct.isFunction(t) && t,
				duration: t,
				easing: i && e || e && !ct.isFunction(e) && e
			};
			return n.duration = ct.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ct.fx.speeds ? ct.fx.speeds[n.duration] : ct.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
				ct.isFunction(n.old) && n.old.call(this), n.queue && ct.dequeue(this, n.queue)
			}, n
		}, ct.easing = {
			linear: function(t) {
				return t
			},
			swing: function(t) {
				return .5 - Math.cos(t * Math.PI) / 2
			}
		}, ct.timers = [], ct.fx = Y.prototype.init, ct.fx.tick = function() {
			var t, i = ct.timers,
				n = 0;
			for (Ke = ct.now(); i.length > n; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
			i.length || ct.fx.stop(), Ke = e
		}, ct.fx.timer = function(t) {
			t() && ct.timers.push(t) && ct.fx.start()
		}, ct.fx.interval = 13, ct.fx.start = function() {
			Je || (Je = setInterval(ct.fx.tick, ct.fx.interval))
		}, ct.fx.stop = function() {
			clearInterval(Je), Je = null
		}, ct.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
			return ct.grep(ct.timers, function(e) {
				return t === e.elem
			}).length
		}), ct.fn.offset = function(t) {
			if (arguments.length) return t === e ? this : this.each(function(e) {
				ct.offset.setOffset(this, t, e)
			});
			var i, n, r = {
					top: 0,
					left: 0
				},
				s = this[0],
				o = s && s.ownerDocument;
			return o ? (i = o.documentElement, ct.contains(i, s) ? (typeof s.getBoundingClientRect !== U && (r = s.getBoundingClientRect()), n = $(o), {
				top: r.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
				left: r.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
			}) : r) : void 0
		}, ct.offset = {
			setOffset: function(t, e, i) {
				var n = ct.css(t, "position");
				"static" === n && (t.style.position = "relative");
				var r, s, o = ct(t),
					a = o.offset(),
					l = ct.css(t, "top"),
					u = ct.css(t, "left"),
					c = ("absolute" === n || "fixed" === n) && ct.inArray("auto", [l, u]) > -1,
					h = {},
					p = {};
				c ? (p = o.position(), r = p.top, s = p.left) : (r = parseFloat(l) || 0, s = parseFloat(u) || 0), ct.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + r), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : o.css(h)
			}
		}, ct.fn.extend({
			position: function() {
				if (this[0]) {
					var t, e, i = {
							top: 0,
							left: 0
						},
						n = this[0];
					return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (i = t.offset()), i.top += ct.css(t[0], "borderTopWidth", !0), i.left += ct.css(t[0], "borderLeftWidth", !0)), {
						top: e.top - i.top - ct.css(n, "marginTop", !0),
						left: e.left - i.left - ct.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || Q; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
					return t || Q
				})
			}
		}), ct.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(t, i) {
			var n = /Y/.test(i);
			ct.fn[t] = function(r) {
				return ct.access(this, function(t, r, s) {
					var o = $(t);
					return s === e ? o ? i in o ? o[i] : o.document.documentElement[r] : t[r] : (o ? o.scrollTo(n ? ct(o).scrollLeft() : s, n ? s : ct(o).scrollTop()) : t[r] = s, e)
				}, t, r, arguments.length, null)
			}
		}), ct.each({
			Height: "height",
			Width: "width"
		}, function(t, i) {
			ct.each({
				padding: "inner" + t,
				content: i,
				"": "outer" + t
			}, function(n, r) {
				ct.fn[r] = function(r, s) {
					var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || s === !0 ? "margin" : "border");
					return ct.access(this, function(i, n, r) {
						var s;
						return ct.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + t], s["scroll" + t], i.body["offset" + t], s["offset" + t], s["client" + t])) : r === e ? ct.css(i, n, a) : ct.style(i, n, r, a)
					}, i, o ? r : e, o, null)
				}
			})
		}), ct.fn.size = function() {
			return this.length
		}, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
			return ct
		}))
	}(window),
	function(t, e) {
		"use strict";

		function i() {
			if (!n.READY) {
				n.event.determineEventTypes();
				for (var t in n.gestures) n.gestures.hasOwnProperty(t) && n.detection.register(n.gestures[t]);
				n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
			}
		}
		var n = function(t, e) {
			return new n.Instance(t, e || {})
		};
		n.defaults = {
			stop_browser_behavior: {
				userSelect: "none",
				touchAction: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		}, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in t, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function(t, e) {
			var r = this;
			return i(), this.element = t, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), e || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(t, n.EVENT_START, function(t) {
				r.enabled && n.detection.startDetect(r, t)
			}), this
		}, n.Instance.prototype = {
			on: function(t, e) {
				for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.addEventListener(i[n], e, !1);
				return this
			},
			off: function(t, e) {
				for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.removeEventListener(i[n], e, !1);
				return this
			},
			trigger: function(t, e) {
				var i = n.DOCUMENT.createEvent("Event");
				i.initEvent(t, !0, !0), i.gesture = e;
				var r = this.element;
				return n.utils.hasParent(e.target, r) && (r = e.target), r.dispatchEvent(i), this
			},
			enable: function(t) {
				return this.enabled = t, this
			}
		};
		var r = null,
			s = !1,
			o = !1;
		n.event = {
			bindDom: function(t, e, i) {
				for (var n = e.split(" "), r = 0; n.length > r; r++) t.addEventListener(n[r], i, !1)
			},
			onTouch: function(t, e, i) {
				var a = this;
				this.bindDom(t, n.EVENT_TYPES[e], function(l) {
					var u = l.type.toLowerCase();
					if (!u.match(/mouse/) || !o) {
						(u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === l.which) && (s = !0), u.match(/touch|pointer/) && (o = !0);
						var c = 0;
						s && (n.HAS_POINTEREVENTS && e != n.EVENT_END ? c = n.PointerEvent.updatePointer(e, l) : u.match(/touch/) ? c = l.touches.length : o || (c = u.match(/up/) ? 0 : 1), c > 0 && e == n.EVENT_END ? e = n.EVENT_MOVE : c || (e = n.EVENT_END), c || null === r ? r = l : l = r, i.call(n.detection, a.collectEventData(t, e, l)), n.HAS_POINTEREVENTS && e == n.EVENT_END && (c = n.PointerEvent.updatePointer(e, l))), c || (r = null, s = !1, o = !1, n.PointerEvent.reset())
					}
				})
			},
			determineEventTypes: function() {
				var t;
				t = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = t[0], n.EVENT_TYPES[n.EVENT_MOVE] = t[1], n.EVENT_TYPES[n.EVENT_END] = t[2]
			},
			getTouchList: function(t) {
				return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : t.touches ? t.touches : [{
					identifier: 1,
					pageX: t.pageX,
					pageY: t.pageY,
					target: t.target
				}]
			},
			collectEventData: function(t, e, i) {
				var r = this.getTouchList(i, e),
					s = n.POINTER_TOUCH;
				return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (s = n.POINTER_MOUSE), {
					center: n.utils.getCenter(r),
					timeStamp: (new Date).getTime(),
					target: i.target,
					touches: r,
					eventType: e,
					pointerType: s,
					srcEvent: i,
					preventDefault: function() {
						this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
					},
					stopPropagation: function() {
						this.srcEvent.stopPropagation()
					},
					stopDetect: function() {
						return n.detection.stopDetect()
					}
				}
			}
		}, n.PointerEvent = {
			pointers: {},
			getTouchList: function() {
				var t = this,
					e = [];
				return Object.keys(t.pointers).sort().forEach(function(i) {
					e.push(t.pointers[i])
				}), e
			},
			updatePointer: function(t, e) {
				return t == n.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
			},
			matchType: function(t, e) {
				if (!e.pointerType) return !1;
				var i = {};
				return i[n.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == n.POINTER_PEN, i[t]
			},
			getEvents: function() {
				return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
			},
			reset: function() {
				this.pointers = {}
			}
		}, n.utils = {
			extend: function(t, i, n) {
				for (var r in i) t[r] !== e && n || (t[r] = i[r]);
				return t
			},
			hasParent: function(t, e) {
				for (; t;) {
					if (t == e) return !0;
					t = t.parentNode
				}
				return !1
			},
			getCenter: function(t) {
				for (var e = [], i = [], n = 0, r = t.length; r > n; n++) e.push(t[n].pageX), i.push(t[n].pageY);
				return {
					pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
					pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
				}
			},
			getVelocity: function(t, e, i) {
				return {
					x: Math.abs(e / t) || 0,
					y: Math.abs(i / t) || 0
				}
			},
			getAngle: function(t, e) {
				var i = e.pageY - t.pageY,
					n = e.pageX - t.pageX;
				return 180 * Math.atan2(i, n) / Math.PI
			},
			getDirection: function(t, e) {
				var i = Math.abs(t.pageX - e.pageX),
					r = Math.abs(t.pageY - e.pageY);
				return i >= r ? t.pageX - e.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
			},
			getDistance: function(t, e) {
				var i = e.pageX - t.pageX,
					n = e.pageY - t.pageY;
				return Math.sqrt(i * i + n * n)
			},
			getScale: function(t, e) {
				return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
			},
			getRotation: function(t, e) {
				return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
			},
			isVertical: function(t) {
				return t == n.DIRECTION_UP || t == n.DIRECTION_DOWN
			},
			stopDefaultBrowserBehavior: function(t, e) {
				var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
				if (e && t.style) {
					for (var r = 0; n.length > r; r++)
						for (var s in e) e.hasOwnProperty(s) && (i = s, n[r] && (i = n[r] + i.substring(0, 1).toUpperCase() + i.substring(1)), t.style[i] = e[s]);
					"none" == e.userSelect && (t.onselectstart = function() {
						return !1
					})
				}
			}
		}, n.detection = {
			gestures: [],
			current: null,
			previous: null,
			stopped: !1,
			startDetect: function(t, e) {
				this.current || (this.stopped = !1, this.current = {
					inst: t,
					startEvent: n.utils.extend({}, e),
					lastEvent: !1,
					name: ""
				}, this.detect(e))
			},
			detect: function(t) {
				if (this.current && !this.stopped) {
					t = this.extendEventData(t);
					for (var e = this.current.inst.options, i = 0, r = this.gestures.length; r > i; i++) {
						var s = this.gestures[i];
						if (!this.stopped && e[s.name] !== !1 && s.handler.call(s, t, this.current.inst) === !1) {
							this.stopDetect();
							break
						}
					}
					return this.current && (this.current.lastEvent = t), t.eventType == n.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
				}
			},
			stopDetect: function() {
				this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
			},
			extendEventData: function(t) {
				var e = this.current.startEvent;
				if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
					e.touches = [];
					for (var i = 0, r = t.touches.length; r > i; i++) e.touches.push(n.utils.extend({}, t.touches[i]))
				}
				var s = t.timeStamp - e.timeStamp,
					o = t.center.pageX - e.center.pageX,
					a = t.center.pageY - e.center.pageY,
					l = n.utils.getVelocity(s, o, a);
				return n.utils.extend(t, {
					deltaTime: s,
					deltaX: o,
					deltaY: a,
					velocityX: l.x,
					velocityY: l.y,
					distance: n.utils.getDistance(e.center, t.center),
					angle: n.utils.getAngle(e.center, t.center),
					direction: n.utils.getDirection(e.center, t.center),
					scale: n.utils.getScale(e.touches, t.touches),
					rotation: n.utils.getRotation(e.touches, t.touches),
					startEvent: e
				}), t
			},
			register: function(t) {
				var i = t.defaults || {};
				return i[t.name] === e && (i[t.name] = !0), n.utils.extend(n.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function(t, e) {
					return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
				}), this.gestures
			}
		}, n.gestures = n.gestures || {}, n.gestures.Hold = {
			name: "hold",
			index: 10,
			defaults: {
				hold_timeout: 500,
				hold_threshold: 1
			},
			timer: null,
			handler: function(t, e) {
				switch (t.eventType) {
					case n.EVENT_START:
						clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function() {
							"hold" == n.detection.current.name && e.trigger("hold", t)
						}, e.options.hold_timeout);
						break;
					case n.EVENT_MOVE:
						t.distance > e.options.hold_threshold && clearTimeout(this.timer);
						break;
					case n.EVENT_END:
						clearTimeout(this.timer)
				}
			}
		}, n.gestures.Tap = {
			name: "tap",
			index: 100,
			defaults: {
				tap_max_touchtime: 250,
				tap_max_distance: 10,
				tap_always: !0,
				doubletap_distance: 20,
				doubletap_interval: 300
			},
			handler: function(t, e) {
				if (t.eventType == n.EVENT_END) {
					var i = n.detection.previous,
						r = !1;
					if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
					i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), r = !0), (!r || e.options.tap_always) && (n.detection.current.name = "tap", e.trigger(n.detection.current.name, t))
				}
			}
		}, n.gestures.Swipe = {
			name: "swipe",
			index: 40,
			defaults: {
				swipe_max_touches: 1,
				swipe_velocity: .7
			},
			handler: function(t, e) {
				if (t.eventType == n.EVENT_END) {
					if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
					(t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
				}
			}
		}, n.gestures.Drag = {
			name: "drag",
			index: 50,
			defaults: {
				drag_min_distance: 10,
				drag_max_touches: 1,
				drag_block_horizontal: !1,
				drag_block_vertical: !1,
				drag_lock_to_axis: !1,
				drag_lock_min_distance: 25
			},
			triggered: !1,
			handler: function(t, i) {
				if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
				if (!(i.options.drag_max_touches > 0 && t.touches.length > i.options.drag_max_touches)) switch (t.eventType) {
					case n.EVENT_START:
						this.triggered = !1;
						break;
					case n.EVENT_MOVE:
						if (t.distance < i.options.drag_min_distance && n.detection.current.name != this.name) return;
						n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || i.options.drag_lock_to_axis && i.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
						var r = n.detection.current.lastEvent.direction;
						t.drag_locked_to_axis && r !== t.direction && (t.direction = n.utils.isVertical(r) ? 0 > t.deltaY ? n.DIRECTION_UP : n.DIRECTION_DOWN : 0 > t.deltaX ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), i.trigger(this.name + t.direction, t), (i.options.drag_block_vertical && n.utils.isVertical(t.direction) || i.options.drag_block_horizontal && !n.utils.isVertical(t.direction)) && t.preventDefault();
						break;
					case n.EVENT_END:
						this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
				}
			}
		}, n.gestures.Transform = {
			name: "transform",
			index: 45,
			defaults: {
				transform_min_scale: .01,
				transform_min_rotation: 1,
				transform_always_block: !1
			},
			triggered: !1,
			handler: function(t, i) {
				if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
				if (!(2 > t.touches.length)) switch (i.options.transform_always_block && t.preventDefault(), t.eventType) {
					case n.EVENT_START:
						this.triggered = !1;
						break;
					case n.EVENT_MOVE:
						var r = Math.abs(1 - t.scale),
							s = Math.abs(t.rotation);
						if (i.options.transform_min_scale > r && i.options.transform_min_rotation > s) return;
						n.detection.current.name = this.name, this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), s > i.options.transform_min_rotation && i.trigger("rotate", t), r > i.options.transform_min_scale && (i.trigger("pinch", t), i.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
						break;
					case n.EVENT_END:
						this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
				}
			}
		}, n.gestures.Touch = {
			name: "touch",
			index: -1 / 0,
			defaults: {
				prevent_default: !1,
				prevent_mouseevents: !1
			},
			handler: function(t, i) {
				return i.options.prevent_mouseevents && t.pointerType == n.POINTER_MOUSE ? (t.stopDetect(), e) : (i.options.prevent_default && t.preventDefault(), t.eventType == n.EVENT_START && i.trigger(this.name, t), e)
			}
		}, n.gestures.Release = {
			name: "release",
			index: 1 / 0,
			handler: function(t, e) {
				t.eventType == n.EVENT_END && e.trigger(this.name, t)
			}
		}, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (t.Hammer = n, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function() {
			return n
		}))
	}(this),
	function(t, e) {
		"use strict";
		t !== e && (Hammer.event.bindDom = function(i, n, r) {
			t(i).on(n, function(t) {
				var i = t.originalEvent || t;
				i.pageX === e && (i.pageX = t.pageX, i.pageY = t.pageY), i.target || (i.target = t.target), i.which === e && (i.which = i.button), i.preventDefault || (i.preventDefault = t.preventDefault), i.stopPropagation || (i.stopPropagation = t.stopPropagation), r.call(this, i)
			})
		}, Hammer.Instance.prototype.on = function(e, i) {
			return t(this.element).on(e, i);
		}, Hammer.Instance.prototype.off = function(e, i) {
			return t(this.element).off(e, i)
		}, Hammer.Instance.prototype.trigger = function(e, i) {
			var n = t(this.element);
			return n.has(i.target).length && (n = t(i.target)), n.trigger({
				type: e,
				gesture: i
			})
		}, t.fn.hammer = function(e) {
			return this.each(function() {
				var i = t(this),
					n = i.data("hammer");
				n ? n && e && Hammer.utils.extend(n.options, e) : i.data("hammer", new Hammer(this, e || {}))
			})
		})
	}(window.jQuery || window.Zepto),
	function() {
		var t = this,
			e = t._,
			i = {},
			n = Array.prototype,
			r = Object.prototype,
			s = Function.prototype,
			o = n.push,
			a = n.slice,
			l = n.concat,
			u = (n.unshift, r.toString),
			c = r.hasOwnProperty,
			h = n.forEach,
			p = n.map,
			f = n.reduce,
			d = n.reduceRight,
			m = n.filter,
			g = n.every,
			_ = n.some,
			y = n.indexOf,
			v = n.lastIndexOf,
			x = Array.isArray,
			b = Object.keys,
			T = s.bind,
			w = function(t) {
				return t instanceof w ? t : this instanceof w ? void(this._wrapped = t) : new w(t)
			};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : t._ = w, w.VERSION = "1.4.2";
		var k = w.each = w.forEach = function(t, e, n) {
			if (null != t)
				if (h && t.forEach === h) t.forEach(e, n);
				else if (t.length === +t.length) {
				for (var r = 0, s = t.length; r < s; r++)
					if (e.call(n, t[r], r, t) === i) return
			} else
				for (var o in t)
					if (w.has(t, o) && e.call(n, t[o], o, t) === i) return
		};
		w.map = w.collect = function(t, e, i) {
			var n = [];
			return null == t ? n : p && t.map === p ? t.map(e, i) : (k(t, function(t, r, s) {
				n[n.length] = e.call(i, t, r, s)
			}), n)
		}, w.reduce = w.foldl = w.inject = function(t, e, i, n) {
			var r = arguments.length > 2;
			if (null == t && (t = []), f && t.reduce === f) return n && (e = w.bind(e, n)), r ? t.reduce(e, i) : t.reduce(e);
			if (k(t, function(t, s, o) {
					r ? i = e.call(n, i, t, s, o) : (i = t, r = !0)
				}), !r) throw new TypeError("Reduce of empty array with no initial value");
			return i
		}, w.reduceRight = w.foldr = function(t, e, i, n) {
			var r = arguments.length > 2;
			if (null == t && (t = []), d && t.reduceRight === d) return n && (e = w.bind(e, n)), arguments.length > 2 ? t.reduceRight(e, i) : t.reduceRight(e);
			var s = t.length;
			if (s !== +s) {
				var o = w.keys(t);
				s = o.length
			}
			if (k(t, function(a, l, u) {
					l = o ? o[--s] : --s, r ? i = e.call(n, i, t[l], l, u) : (i = t[l], r = !0)
				}), !r) throw new TypeError("Reduce of empty array with no initial value");
			return i
		}, w.find = w.detect = function(t, e, i) {
			var n;
			return E(t, function(t, r, s) {
				if (e.call(i, t, r, s)) return n = t, !0
			}), n
		}, w.filter = w.select = function(t, e, i) {
			var n = [];
			return null == t ? n : m && t.filter === m ? t.filter(e, i) : (k(t, function(t, r, s) {
				e.call(i, t, r, s) && (n[n.length] = t)
			}), n)
		}, w.reject = function(t, e, i) {
			var n = [];
			return null == t ? n : (k(t, function(t, r, s) {
				e.call(i, t, r, s) || (n[n.length] = t)
			}), n)
		}, w.every = w.all = function(t, e, n) {
			e || (e = w.identity);
			var r = !0;
			return null == t ? r : g && t.every === g ? t.every(e, n) : (k(t, function(t, s, o) {
				if (!(r = r && e.call(n, t, s, o))) return i
			}), !!r)
		};
		var E = w.some = w.any = function(t, e, n) {
			e || (e = w.identity);
			var r = !1;
			return null == t ? r : _ && t.some === _ ? t.some(e, n) : (k(t, function(t, s, o) {
				if (r || (r = e.call(n, t, s, o))) return i
			}), !!r)
		};
		w.contains = w.include = function(t, e) {
			var i = !1;
			return null == t ? i : y && t.indexOf === y ? t.indexOf(e) != -1 : i = E(t, function(t) {
				return t === e
			})
		}, w.invoke = function(t, e) {
			var i = a.call(arguments, 2);
			return w.map(t, function(t) {
				return (w.isFunction(e) ? e : t[e]).apply(t, i)
			})
		}, w.pluck = function(t, e) {
			return w.map(t, function(t) {
				return t[e]
			})
		}, w.where = function(t, e) {
			return w.isEmpty(e) ? [] : w.filter(t, function(t) {
				for (var i in e)
					if (e[i] !== t[i]) return !1;
				return !0
			})
		}, w.max = function(t, e, i) {
			if (!e && w.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
			if (!e && w.isEmpty(t)) return -(1 / 0);
			var n = {
				computed: -(1 / 0)
			};
			return k(t, function(t, r, s) {
				var o = e ? e.call(i, t, r, s) : t;
				o >= n.computed && (n = {
					value: t,
					computed: o
				})
			}), n.value
		}, w.min = function(t, e, i) {
			if (!e && w.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
			if (!e && w.isEmpty(t)) return 1 / 0;
			var n = {
				computed: 1 / 0
			};
			return k(t, function(t, r, s) {
				var o = e ? e.call(i, t, r, s) : t;
				o < n.computed && (n = {
					value: t,
					computed: o
				})
			}), n.value
		}, w.shuffle = function(t) {
			var e, i = 0,
				n = [];
			return k(t, function(t) {
				e = w.random(i++), n[i - 1] = n[e], n[e] = t
			}), n
		};
		var C = function(t) {
			return w.isFunction(t) ? t : function(e) {
				return e[t]
			}
		};
		w.sortBy = function(t, e, i) {
			var n = C(e);
			return w.pluck(w.map(t, function(t, e, r) {
				return {
					value: t,
					index: e,
					criteria: n.call(i, t, e, r)
				}
			}).sort(function(t, e) {
				var i = t.criteria,
					n = e.criteria;
				if (i !== n) {
					if (i > n || void 0 === i) return 1;
					if (i < n || void 0 === n) return -1
				}
				return t.index < e.index ? -1 : 1
			}), "value")
		};
		var S = function(t, e, i, n) {
			var r = {},
				s = C(e);
			return k(t, function(e, o) {
				var a = s.call(i, e, o, t);
				n(r, a, e)
			}), r
		};
		w.groupBy = function(t, e, i) {
			return S(t, e, i, function(t, e, i) {
				(w.has(t, e) ? t[e] : t[e] = []).push(i)
			})
		}, w.countBy = function(t, e, i) {
			return S(t, e, i, function(t, e, i) {
				w.has(t, e) || (t[e] = 0), t[e]++
			})
		}, w.sortedIndex = function(t, e, i, n) {
			i = null == i ? w.identity : C(i);
			for (var r = i.call(n, e), s = 0, o = t.length; s < o;) {
				var a = s + o >>> 1;
				i.call(n, t[a]) < r ? s = a + 1 : o = a
			}
			return s
		}, w.toArray = function(t) {
			return t ? t.length === +t.length ? a.call(t) : w.values(t) : []
		}, w.size = function(t) {
			return t.length === +t.length ? t.length : w.keys(t).length
		}, w.first = w.head = w.take = function(t, e, i) {
			return null == e || i ? t[0] : a.call(t, 0, e)
		}, w.initial = function(t, e, i) {
			return a.call(t, 0, t.length - (null == e || i ? 1 : e))
		}, w.last = function(t, e, i) {
			return null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
		}, w.rest = w.tail = w.drop = function(t, e, i) {
			return a.call(t, null == e || i ? 1 : e)
		}, w.compact = function(t) {
			return w.filter(t, function(t) {
				return !!t
			})
		};
		var P = function(t, e, i) {
			return k(t, function(t) {
				w.isArray(t) ? e ? o.apply(i, t) : P(t, e, i) : i.push(t)
			}), i
		};
		w.flatten = function(t, e) {
			return P(t, e, [])
		}, w.without = function(t) {
			return w.difference(t, a.call(arguments, 1))
		}, w.uniq = w.unique = function(t, e, i, n) {
			var r = i ? w.map(t, i, n) : t,
				s = [],
				o = [];
			return k(r, function(i, n) {
				(e ? n && o[o.length - 1] === i : w.contains(o, i)) || (o.push(i), s.push(t[n]))
			}), s
		}, w.union = function() {
			return w.uniq(l.apply(n, arguments))
		}, w.intersection = function(t) {
			var e = a.call(arguments, 1);
			return w.filter(w.uniq(t), function(t) {
				return w.every(e, function(e) {
					return w.indexOf(e, t) >= 0
				})
			})
		}, w.difference = function(t) {
			var e = l.apply(n, a.call(arguments, 1));
			return w.filter(t, function(t) {
				return !w.contains(e, t)
			})
		}, w.zip = function() {
			for (var t = a.call(arguments), e = w.max(w.pluck(t, "length")), i = new Array(e), n = 0; n < e; n++) i[n] = w.pluck(t, "" + n);
			return i
		}, w.object = function(t, e) {
			for (var i = {}, n = 0, r = t.length; n < r; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
			return i
		}, w.indexOf = function(t, e, i) {
			if (null == t) return -1;
			var n = 0,
				r = t.length;
			if (i) {
				if ("number" != typeof i) return n = w.sortedIndex(t, e), t[n] === e ? n : -1;
				n = i < 0 ? Math.max(0, r + i) : i
			}
			if (y && t.indexOf === y) return t.indexOf(e, i);
			for (; n < r; n++)
				if (t[n] === e) return n;
			return -1
		}, w.lastIndexOf = function(t, e, i) {
			if (null == t) return -1;
			var n = null != i;
			if (v && t.lastIndexOf === v) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
			for (var r = n ? i : t.length; r--;)
				if (t[r] === e) return r;
			return -1
		}, w.range = function(t, e, i) {
			arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
			for (var n = Math.max(Math.ceil((e - t) / i), 0), r = 0, s = new Array(n); r < n;) s[r++] = t, t += i;
			return s
		};
		var O = function() {};
		w.bind = function(t, e) {
			var i, n;
			if (t.bind === T && T) return T.apply(t, a.call(arguments, 1));
			if (!w.isFunction(t)) throw new TypeError;
			return n = a.call(arguments, 2), i = function() {
				if (this instanceof i) {
					O.prototype = t.prototype;
					var r = new O,
						s = t.apply(r, n.concat(a.call(arguments)));
					return Object(s) === s ? s : r
				}
				return t.apply(e, n.concat(a.call(arguments)))
			}
		}, w.bindAll = function(t) {
			var e = a.call(arguments, 1);
			return 0 == e.length && (e = w.functions(t)), k(e, function(e) {
				t[e] = w.bind(t[e], t)
			}), t
		}, w.memoize = function(t, e) {
			var i = {};
			return e || (e = w.identity),
				function() {
					var n = e.apply(this, arguments);
					return w.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
				}
		}, w.delay = function(t, e) {
			var i = a.call(arguments, 2);
			return setTimeout(function() {
				return t.apply(null, i)
			}, e)
		}, w.defer = function(t) {
			return w.delay.apply(w, [t, 1].concat(a.call(arguments, 1)))
		}, w.throttle = function(t, e) {
			var i, n, r, s, o, a, l = w.debounce(function() {
				o = s = !1
			}, e);
			return function() {
				i = this, n = arguments;
				var u = function() {
					r = null, o && (a = t.apply(i, n)), l()
				};
				return r || (r = setTimeout(u, e)), s ? o = !0 : (s = !0, a = t.apply(i, n)), l(), a
			}
		}, w.debounce = function(t, e, i) {
			var n, r;
			return function() {
				var s = this,
					o = arguments,
					a = function() {
						n = null, i || (r = t.apply(s, o))
					},
					l = i && !n;
				return clearTimeout(n), n = setTimeout(a, e), l && (r = t.apply(s, o)), r
			}
		}, w.once = function(t) {
			var e, i = !1;
			return function() {
				return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
			}
		}, w.wrap = function(t, e) {
			return function() {
				var i = [t];
				return o.apply(i, arguments), e.apply(this, i)
			}
		}, w.compose = function() {
			var t = arguments;
			return function() {
				for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
				return e[0]
			}
		}, w.after = function(t, e) {
			return t <= 0 ? e() : function() {
				if (--t < 1) return e.apply(this, arguments)
			}
		}, w.keys = b || function(t) {
			if (t !== Object(t)) throw new TypeError("Invalid object");
			var e = [];
			for (var i in t) w.has(t, i) && (e[e.length] = i);
			return e
		}, w.values = function(t) {
			var e = [];
			for (var i in t) w.has(t, i) && e.push(t[i]);
			return e
		}, w.pairs = function(t) {
			var e = [];
			for (var i in t) w.has(t, i) && e.push([i, t[i]]);
			return e
		}, w.invert = function(t) {
			var e = {};
			for (var i in t) w.has(t, i) && (e[t[i]] = i);
			return e
		}, w.functions = w.methods = function(t) {
			var e = [];
			for (var i in t) w.isFunction(t[i]) && e.push(i);
			return e.sort()
		}, w.extend = function(t) {
			return k(a.call(arguments, 1), function(e) {
				for (var i in e) t[i] = e[i]
			}), t
		}, w.pick = function(t) {
			var e = {},
				i = l.apply(n, a.call(arguments, 1));
			return k(i, function(i) {
				i in t && (e[i] = t[i])
			}), e
		}, w.omit = function(t) {
			var e = {},
				i = l.apply(n, a.call(arguments, 1));
			for (var r in t) w.contains(i, r) || (e[r] = t[r]);
			return e
		}, w.defaults = function(t) {
			return k(a.call(arguments, 1), function(e) {
				for (var i in e) null == t[i] && (t[i] = e[i])
			}), t
		}, w.clone = function(t) {
			return w.isObject(t) ? w.isArray(t) ? t.slice() : w.extend({}, t) : t
		}, w.tap = function(t, e) {
			return e(t), t
		};
		var N = function(t, e, i, n) {
			if (t === e) return 0 !== t || 1 / t == 1 / e;
			if (null == t || null == e) return t === e;
			t instanceof w && (t = t._wrapped), e instanceof w && (e = e._wrapped);
			var r = u.call(t);
			if (r != u.call(e)) return !1;
			switch (r) {
				case "[object String]":
					return t == String(e);
				case "[object Number]":
					return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
				case "[object Date]":
				case "[object Boolean]":
					return +t == +e;
				case "[object RegExp]":
					return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
			}
			if ("object" != typeof t || "object" != typeof e) return !1;
			for (var s = i.length; s--;)
				if (i[s] == t) return n[s] == e;
			i.push(t), n.push(e);
			var o = 0,
				a = !0;
			if ("[object Array]" == r) {
				if (o = t.length, a = o == e.length)
					for (; o-- && (a = N(t[o], e[o], i, n)););
			} else {
				var l = t.constructor,
					c = e.constructor;
				if (l !== c && !(w.isFunction(l) && l instanceof l && w.isFunction(c) && c instanceof c)) return !1;
				for (var h in t)
					if (w.has(t, h) && (o++, !(a = w.has(e, h) && N(t[h], e[h], i, n)))) break;
				if (a) {
					for (h in e)
						if (w.has(e, h) && !o--) break;
					a = !o
				}
			}
			return i.pop(), n.pop(), a
		};
		w.isEqual = function(t, e) {
			return N(t, e, [], [])
		}, w.isEmpty = function(t) {
			if (null == t) return !0;
			if (w.isArray(t) || w.isString(t)) return 0 === t.length;
			for (var e in t)
				if (w.has(t, e)) return !1;
			return !0
		}, w.isElement = function(t) {
			return !!t && 1 === t.nodeType
		}, w.isArray = x || function(t) {
			return "[object Array]" == u.call(t)
		}, w.isObject = function(t) {
			return t === Object(t)
		}, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
			w["is" + t] = function(e) {
				return u.call(e) == "[object " + t + "]"
			}
		}), w.isArguments(arguments) || (w.isArguments = function(t) {
			return !!t && !!w.has(t, "callee")
		}), "function" != typeof /./ && (w.isFunction = function(t) {
			return "function" == typeof t
		}), w.isFinite = function(t) {
			return w.isNumber(t) && isFinite(t)
		}, w.isNaN = function(t) {
			return w.isNumber(t) && t != +t
		}, w.isBoolean = function(t) {
			return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
		}, w.isNull = function(t) {
			return null === t
		}, w.isUndefined = function(t) {
			return void 0 === t
		}, w.has = function(t, e) {
			return c.call(t, e)
		}, w.noConflict = function() {
			return t._ = e, this
		}, w.identity = function(t) {
			return t
		}, w.times = function(t, e, i) {
			for (var n = 0; n < t; n++) e.call(i, n)
		}, w.random = function(t, e) {
			return null == e && (e = t, t = 0), t + (0 | Math.random() * (e - t + 1))
		};
		var A = {
			escape: {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"/": "&#x2F;"
			}
		};
		A.unescape = w.invert(A.escape);
		var D = {
			escape: new RegExp("[" + w.keys(A.escape).join("") + "]", "g"),
			unescape: new RegExp("(" + w.keys(A.unescape).join("|") + ")", "g")
		};
		w.each(["escape", "unescape"], function(t) {
			w[t] = function(e) {
				return null == e ? "" : ("" + e).replace(D[t], function(e) {
					return A[t][e]
				})
			}
		}), w.result = function(t, e) {
			if (null == t) return null;
			var i = t[e];
			return w.isFunction(i) ? i.call(t) : i
		}, w.mixin = function(t) {
			k(w.functions(t), function(e) {
				var i = w[e] = t[e];
				w.prototype[e] = function() {
					var t = [this._wrapped];
					return o.apply(t, arguments), I.call(this, i.apply(w, t))
				}
			})
		};
		var R = 0;
		w.uniqueId = function(t) {
			var e = R++;
			return t ? t + e : e
		}, w.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var M = /(.)^/,
			F = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"  ": "t",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
		w.template = function(t, e, i) {
			i = w.defaults({}, i, w.templateSettings);
			var n = new RegExp([(i.escape || M).source, (i.interpolate || M).source, (i.evaluate || M).source].join("|") + "|$", "g"),
				r = 0,
				s = "__p+='";
			t.replace(n, function(e, i, n, o, a) {
				s += t.slice(r, a).replace(L, function(t) {
					return "\\" + F[t]
				}), s += i ? "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : o ? "';\n" + o + "\n__p+='" : "", r = a + e.length
			}), s += "';\n", i.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
			try {
				var o = new Function(i.variable || "obj", "_", s)
			} catch (a) {
				throw a.source = s, a
			}
			if (e) return o(e, w);
			var l = function(t) {
				return o.call(this, t, w)
			};
			return l.source = "function(" + (i.variable || "obj") + "){\n" + s + "}", l
		}, w.chain = function(t) {
			return w(t).chain()
		};
		var I = function(t) {
			return this._chain ? w(t).chain() : t
		};
		w.mixin(w), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
			var e = n[t];
			w.prototype[t] = function() {
				var i = this._wrapped;
				return e.apply(i, arguments), ("shift" == t || "splice" == t) && 0 === i.length && delete i[0], I.call(this, i)
			}
		}), k(["concat", "join", "slice"], function(t) {
			var e = n[t];
			w.prototype[t] = function() {
				return I.call(this, e.apply(this._wrapped, arguments))
			}
		}), w.extend(w.prototype, {
			chain: function() {
				return this._chain = !0, this
			},
			value: function() {
				return this._wrapped
			}
		})
	}.call(this), _ = _ || {}, _.tap = function(t, e, i) {
		i = i || 400, e ? t.on("tap", e, function(t) {
			var e = $(t.currentTarget),
				n = e.data("debounce");
			n || (n = _.debounce(function(t) {
				t.removeClass("tap")
			}, i), e.data("debounce", n)), e.addClass("tap"), n(e)
		}) : t.each(function(t, e) {
			var n = _.debounce(function(t) {
				t.removeClass("tap")
			}, i);
			$(e).on("tap", function(t) {
				var e = $(t.currentTarget);
				e.addClass("tap"), n(e)
			})
		})
	},
	function(t, e, i, n) {
		"use strict";

		function r(e, i) {
			this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
			var n = {
				calibrateX: this.$context.data("calibrate-x") || null,
				calibrateY: this.$context.data("calibrate-y") || null,
				invertX: this.$context.data("invert-x") || null,
				invertY: this.$context.data("invert-y") || null,
				limitX: parseFloat(this.$context.data("limit-x")) || null,
				limitY: parseFloat(this.$context.data("limit-y")) || null,
				scalarX: parseFloat(this.$context.data("scalar-x")) || null,
				scalarY: parseFloat(this.$context.data("scalar-y")) || null,
				frictionX: parseFloat(this.$context.data("friction-x")) || null,
				frictionY: parseFloat(this.$context.data("friction-y")) || null,
				originX: parseFloat(this.$context.data("origin-x")) || null,
				originY: parseFloat(this.$context.data("origin-y")) || null,
				pointerEvents: this.$context.data("pointer-events") || !0,
				precision: parseFloat(this.$context.data("precision")) || 1
			};
			for (var r in n) null === n[r] && delete n[r];
			t.extend(this, a, i, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
		}
		var s = "parallax",
			o = 30,
			a = {
				relativeInput: !1,
				clipRelativeInput: !1,
				calibrationThreshold: 100,
				calibrationDelay: 500,
				supportDelay: 500,
				calibrateX: !1,
				calibrateY: !0,
				invertX: !0,
				invertY: !0,
				limitX: !1,
				limitY: !1,
				scalarX: 10,
				scalarY: 10,
				frictionX: .1,
				frictionY: .1,
				originX: .5,
				originY: .5,
				pointerEvents: !0,
				precision: 1
			};
		r.prototype.transformSupport = function(t) {
			for (var r = i.createElement("div"), s = !1, o = null, a = !1, l = null, u = null, c = 0, h = this.vendors.length; c < h; c++)
				if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", u = this.vendors[c][1] + "Transform") : (l = "transform", u = "transform"), r.style[u] !== n) {
					s = !0;
					break
				}
			switch (t) {
				case "2D":
					a = s;
					break;
				case "3D":
					if (s) {
						var p = i.body || i.createElement("body"),
							f = i.documentElement,
							d = f.style.overflow,
							m = !1;
						i.body || (m = !0, f.style.overflow = "hidden", f.appendChild(p), p.style.overflow = "hidden", p.style.background = ""), p.appendChild(r), r.style[u] = "translate3d(1px,1px,1px)", o = e.getComputedStyle(r).getPropertyValue(l), a = o !== n && o.length > 0 && "none" !== o, f.style.overflow = d, p.removeChild(r), m && (p.removeAttribute("style"), p.parentNode.removeChild(p))
					}
			}
			return a
		}, r.prototype.ww = null, r.prototype.wh = null, r.prototype.wcx = null, r.prototype.wcy = null, r.prototype.wrx = null, r.prototype.wry = null, r.prototype.portrait = null, r.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.prototype.vendors = [null, ["-webkit-", "webkit"],
			["-moz-", "Moz"],
			["-o-", "O"],
			["-ms-", "ms"]
		], r.prototype.motionSupport = !!e.DeviceMotionEvent, r.prototype.orientationSupport = !!e.DeviceOrientationEvent, r.prototype.orientationStatus = 0, r.prototype.transform2DSupport = r.prototype.transformSupport("2D"), r.prototype.transform3DSupport = r.prototype.transformSupport("3D"), r.prototype.propertyCache = {}, r.prototype.initialise = function() {
			"static" === this.$context.css("position") && this.$context.css({
				position: "relative"
			}), this.pointerEvents || this.$context.css({
				pointerEvents: "none"
			}), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
		}, r.prototype.updateLayers = function() {
			this.$layers = this.$context.find(".layer"), this.depthsX = [], this.depthsY = [], this.$layers.css({
				position: "absolute",
				display: "block",
				left: 0,
				top: 0
			}), this.$layers.first().css({
				position: "relative"
			}), this.accelerate(this.$layers), this.$layers.each(t.proxy(function(e, i) {
				var n = t(i).data("depth") || 0;
				this.depthsX.push(t(i).data("depth-x") || n), this.depthsY.push(t(i).data("depth-y") || n)
			}, this))
		}, r.prototype.updateDimensions = function() {
			this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
		}, r.prototype.updateBounds = function() {
			this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
		}, r.prototype.queueCalibration = function(t) {
			clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
		}, r.prototype.enable = function() {
			this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
		}, r.prototype.disable = function() {
			this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
		}, r.prototype.calibrate = function(t, e) {
			this.calibrateX = t === n ? this.calibrateX : t, this.calibrateY = e === n ? this.calibrateY : e
		}, r.prototype.invert = function(t, e) {
			this.invertX = t === n ? this.invertX : t, this.invertY = e === n ? this.invertY : e
		}, r.prototype.friction = function(t, e) {
			this.frictionX = t === n ? this.frictionX : t, this.frictionY = e === n ? this.frictionY : e
		}, r.prototype.scalar = function(t, e) {
			this.scalarX = t === n ? this.scalarX : t, this.scalarY = e === n ? this.scalarY : e
		}, r.prototype.limit = function(t, e) {
			this.limitX = t === n ? this.limitX : t, this.limitY = e === n ? this.limitY : e
		}, r.prototype.origin = function(t, e) {
			this.originX = t === n ? this.originX : t, this.originY = e === n ? this.originY : e
		}, r.prototype.clamp = function(t, e, i) {
			return t = Math.max(t, e), t = Math.min(t, i)
		}, r.prototype.css = function(e, i, r) {
			var s = this.propertyCache[i];
			if (!s)
				for (var o = 0, a = this.vendors.length; o < a; o++)
					if (s = null !== this.vendors[o] ? t.camelCase(this.vendors[o][1] + "-" + i) : i, e.style[s] !== n) {
						this.propertyCache[i] = s;
						break
					}
			e.style[s] = r
		}, r.prototype.accelerate = function(t) {
			for (var e = 0, i = t.length; e < i; e++) {
				var n = t[e];
				this.css(n, "transform", "translate3d(0,0,0)"), this.css(n, "transform-style", "preserve-3d"), this.css(n, "backface-visibility", "hidden")
			}
		}, r.prototype.setPosition = function(t, e, i) {
			e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
		}, r.prototype.onOrientationTimer = function(t) {
			this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
		}, r.prototype.onCalibrationTimer = function(t) {
			this.calibrationFlag = !0
		}, r.prototype.onWindowResize = function(t) {
			this.updateDimensions()
		}, r.prototype.onAnimationFrame = function() {
			this.updateBounds();
			var t = this.ix - this.cx,
				e = this.iy - this.cy;
			(Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
			for (var i = 0, n = this.$layers.length; i < n; i++) {
				var r = this.depthsX[i],
					s = this.depthsY[i],
					o = this.$layers[i],
					a = this.vx * (r * (this.invertX ? -1 : 1)),
					l = this.vy * (s * (this.invertY ? -1 : 1));
				this.setPosition(o, a, l)
			}
			this.raf = requestAnimationFrame(this.onAnimationFrame)
		}, r.prototype.onDeviceOrientation = function(t) {
			if (!this.desktop && null !== t.beta && null !== t.gamma) {
				this.orientationStatus = 1;
				var i = (t.beta || 0) / o,
					n = (t.gamma || 0) / o,
					r = e.innerHeight > e.innerWidth;
				this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = n), this.ix = i, this.iy = n
			}
		}, r.prototype.onMouseMove = function(t) {
			var e = t.clientX,
				i = t.clientY;
			!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
		};
		var l = {
			enable: r.prototype.enable,
			disable: r.prototype.disable,
			updateLayers: r.prototype.updateLayers,
			calibrate: r.prototype.calibrate,
			friction: r.prototype.friction,
			invert: r.prototype.invert,
			scalar: r.prototype.scalar,
			limit: r.prototype.limit,
			origin: r.prototype.origin
		};
		t.fn[s] = function(e) {
			var i = arguments;
			return this.each(function() {
				var n = t(this),
					o = n.data(s);
				o || (o = new r(this, e), n.data(s, o)), l[e] && o[e].apply(o, Array.prototype.slice.call(i, 1))
			})
		}
	}(window.jQuery || window.Zepto, window, document),
	function() {
		for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
		window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
			var n = (new Date).getTime(),
				r = Math.max(0, 16 - (n - t)),
				s = window.setTimeout(function() {
					e(n + r)
				}, r);
			return t = n + r, s
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
			clearTimeout(t)
		})
	}(),
	function() {
		"use strict";

		function t(t, e) {
			function i(t, e) {
				u(), a(t), v && v.flags.indexOf("+") > -1 && (t = "value"), b = t, T = e, c(t, {
					replace: !0
				})
			}

			function n(t) {
				u(), v.arrayType = v.arrayType || "simple", v.array.push(""), b = v.array, T = t, c(v.array, {
					replace: !0
				})
			}

			function r(e) {
				if (w && "endskip" !== e && "ignore" !== e) return u();
				switch (e) {
					case "end":
						return void(b && c(b, {
							replace: !1
						}));
					case "ignore":
						t = "";
						break;
					case "skip":
						w = !0;
						break;
					case "endskip":
						w = !1
				}
				u()
			}

			function s(t, e, i) {
				if (u(), "" == i) {
					var n = y.pop();
					_ = (n ? n.scope : g) || g, v = y[y.length - 1]
				} else if ("[" === t || "{" === t) {
					var r = !1,
						s = g;
					e.indexOf(".") > -1 && (a(i, e), r = !0, v && (s = _));
					for (var o = i.split("."), l = 0; l < o.length - 1; l++) s = s[o[l]] = s[o[l]] || {};
					var c = o[o.length - 1];
					v && v.flags.indexOf("+") > -1 && e.indexOf(".") > -1 && ("[" === t ? c = "value" : "{" === t && (_ = _.value = {}));
					var h = {
						array: null,
						arrayType: null,
						arrayFirstKey: null,
						flags: e,
						scope: _
					};
					"[" == t ? (h.array = s[c] = [], r ? y.push(h) : y = [h], v = y[y.length - 1]) : "{" == t && (r ? y.push(h) : (_ = s[c] = "object" == typeof s[c] ? s[c] : {}, y = [h]), v = y[y.length - 1])
				}
			}

			function o(e) {
				v && v.flags.indexOf("+") > -1 && e.match(/[^\n\r\s]/) ? v.array.push({
					type: "text",
					value: e.replace(/(^\s*)|(\s*$)/g, "")
				}) : T += t.substring(0, e.length)
			}

			function a(t) {
				if (v && v.array) {
					if (v.arrayType = v.arrayType || "complex", "simple" === v.arrayType) return;
					null !== v.arrayFirstKey && v.arrayFirstKey !== t || v.array.push(_ = {}), v.flags.indexOf("+") > -1 ? _.type = t : v.arrayFirstKey = v.arrayFirstKey || t
				}
			}

			function l(t, i) {
				return e.comments && (t = t.replace(/(?:^\\)?\[[^\[\]\n\r]*\](?!\])/gm, ""), t = t.replace(/\[\[([^\[\]\n\r]*)\]\]/g, "[$1]")), "append" == i && (t = t.replace(new RegExp("^(\\s*)\\\\", "gm"), "$1")), t
			}

			function u() {
				var t = T + "";
				return T = "", b = null, t
			}

			function c(t, e) {
				e = e || {};
				var i = b,
					n = u();
				if (e.replace ? (n = l(n, "replace").replace(new RegExp("^\\s*"), ""), T = new RegExp("\\s*$").exec(n)[0], b = i) : n = l(n, "append"), "object" == typeof t) e.replace && (t[t.length - 1] = ""), t[t.length - 1] += n.replace(new RegExp("\\s*$"), "");
				else {
					var r = t.split(".");
					x = _;
					for (var s = 0; s < r.length - 1; s++) "string" == typeof x[r[s]] && (x[r[s]] = {}), x = x[r[s]] = x[r[s]] || {};
					e.replace && (x[r[r.length - 1]] = ""), x[r[r.length - 1]] += n.replace(new RegExp("\\s*$"), "")
				}
			}
			var h = new RegExp(".*((\r|\n)+)"),
				p = new RegExp("^\\s*([A-Za-z0-9-_.]+)[ \t\r]*:[ \t\r]*(.*(?:\n|\r|$))"),
				f = new RegExp("^\\s*:[ \t\r]*(endskip|ignore|skip|end).*?(\n|\r|$)", "i"),
				d = new RegExp("^\\s*\\*[ \t\r]*(.*(?:\n|\r|$))"),
				m = new RegExp("^\\s*(\\[|\\{)[ \t\r]*([+.]*)[ \t\r]*([A-Za-z0-9-_.]*)[ \t\r]*(?:\\]|\\}).*?(\n|\r|$)"),
				g = {},
				_ = g,
				y = [],
				v = void 0,
				x = null,
				b = null,
				T = "",
				w = !1,
				e = e || {};
			for (e.comments !== !0 && (e.comments = !1); t;) {
				var k;
				f.exec(t) ? (k = f.exec(t), r(k[1].toLowerCase())) : w || !p.exec(t) || v && "simple" === v.arrayType ? !w && d.exec(t) && v && "complex" !== v.arrayType ? (k = d.exec(t), n(k[1])) : !w && m.exec(t) ? (k = m.exec(t), s(k[1], k[2], k[3])) : h.exec(t) ? (k = h.exec(t), o(k[0])) : t = "" : (k = p.exec(t), i(k[1], k[2] || "")), k && (t = t.substring(k[0].length))
			}
			return u(), g
		}
		var e = {
			load: t
		};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.archieml = e) : this.archieml = e, "function" == typeof define && define.amd && define("archieml", [], function() {
			return e
		})
	}.call(this);