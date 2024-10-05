function initFeature() {
	function e() {
		
			var e = document.getElementById("gi-body-content");
			if (!e) return; 
			var t = e.offsetTop,
				n = document.getElementById("gi-trigger");
			if (!n) return;
			var o = n.offsetTop;
			i = n.offsetHeight,
			r = window.innerHeight,
			l = window.scrollY,
			m = l + r - i,
			c = o - i;
		l >= t && m < c ? (a.classList.add("gi-header__active"), s.classList = "", s.classList.add("nav-animate", "nav-animate__partial")) : m >= c - 321 ? (s.classList = "", s.classList.add("nav-show", "nav-show__partial")) : (a.classList.remove("gi-header__active"), s.classList = "")
	}

	function t(e, t, a) {
		var s = screen.width / 2 - t / 2,
			n = screen.height / 2 - a / 2;
		window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + t + ",height=" + a + ",top=" + n + ",left=" + s)
	}
	var a = document.querySelector(".gi-header"),
		s = document.querySelector("nav"),
		n = document.querySelector(".books-icon"),
		o = document.querySelector(".close-icon"),
		i = window.innerWidth,
		r = document.getElementById("main-art");
	s.addEventListener("click", function() {
		this.classList.contains("nav-animate__partial") ? (s.classList.toggle("nav-animate__full"), TweenMax.fromTo(o, .05, {
			y: 0,
			ease: Power1.easeIn
		}, {
			y: 40,
			ease: Power1.easeIn
		})) : TweenMax.fromTo(n, .05, {
			y: 40,
			ease: Power1.easeIn
		}, {
			y: 0,
			ease: Power1.easeIn,
			delay: .35
		})
	}), window.addEventListener("scroll", e), i < 620 && r.setAttribute("viewBox", "0 -150 810 578");
	var l = document.getElementsByClassName("eyes"),
		m = document.getElementsByClassName("faceshadow"),
		c = document.getElementsByClassName("body"),
		d = document.getElementsByClassName("upperarm"),
		u = document.getElementsByClassName("lowerarm"),
		g = document.getElementsByClassName("background-cloud"),
		y = document.getElementsByClassName("backshoe"),
		w = document.getElementsByClassName("flag"),
		f = document.getElementsByClassName("fumesgroup"),
		h = (document.getElementsByClassName("fume1"), document.getElementsByClassName("fume2"), document.getElementsByClassName("fume3"), document.getElementsByClassName("fumeshape1")),
		v = document.getElementsByClassName("fumeshape2"),
		p = document.getElementsByClassName("fumeshape2static"),
		E = document.getElementsByClassName("fumeshape2static2"),
		C = document.getElementsByClassName("fumeshape3"),
		x = new TimelineMax({
			repeat: -1,
			yoyo: !0
		});
	x.to(g, 30, {
		x: -40
	});
	var B = new TimelineMax({
		repeat: -1
	});
	B.to(w, 1.5, {
		skewY: -10
	}), B.to(w, 2, {
		skewY: 0
	});
	var T = new TimelineMax({
		repeat: -1
	});
	T.set(l, {
		scaleX: 1.2,
		scaleY: 1.05,
		x: -1.8
	}).set(m, {
		transformOrigin: "50% 0%",
		scaleX: 1,
		scaleY: .77
	}).to(l, .2, {
		opacity: 0
	}, 3.8).to(l, .2, {
		opacity: 1
	});
	var N = new TimelineMax({
		repeat: -1,
		yoyo: !0
	});
	N.to(c, 5, {
		transformOrigin: "50% 100%",
		scaleY: 1.02
	});
	var k = new TimelineMax;
	k.set(d, {
		transformOrigin: "10% 50%"
	}).to([d, u], 5, {
		y: -2.5,
		repeat: -1,
		yoyo: !0
	});
	var M = new TimelineMax({
		repeat: -1,
		yoyo: !0
	});
	M.set(u, {
		transformOrigin: "15% 65%"
	}).to(u, 1, {
		rotation: -4
	}, 1.5).to(u, 2.8, {
		rotation: 0
	}, 8);
	var L = new TimelineMax({
		repeat: -1
	});
	L.set(y, {
		transformOrigin: "40% 50%"
	}).to(y, 1, {
		rotation: 5
	}, 5).to(y, .7, {
		rotation: 0
	});
	var X = new TimelineMax;
	X.set(f, {
		y: -80
	});
	var Y = new TimelineMax({
		repeat: -1
	});
	Y.set([h, v, C], {
		transformOrigin: "50% 50%"
	}).set([v, p], {
		x: 75,
		y: -89,
		scaleY: 1.1,
		scaleX: 1.55
	}).set(E, {
		x: 50,
		y: -60,
		scaleY: 1.1,
		scaleX: 1.55
	}).set(C, {
		x: 220,
		y: -185,
		scaleY: 1.8,
		scaleX: 3.3
	}), Y.to(C, 3, {
		scaleY: 1.3,
		scaleX: 2.5
	}).to(v, 3, {
		ease: "linear",
		x: 220,
		y: -185,
		scaleY: 1.8,
		scaleX: 3.3
	}, "-=3").to(h, 2.3, {
		ease: "linear",
		x: 75,
		y: -89,
		scaleY: 1.1,
		scaleX: 1.55
	}, "-=2.2");
	var _ = document.getElementsByClassName("roundtree"),
		b = document.getElementsByClassName("hightree"),
		O = document.getElementsByClassName("grass"),
		I = new TimelineMax;
	I.staggerFromTo(O, 1, {
		transformOrigin: "0% 100%",
		skewX: "12.5deg"
	}, {
		skewX: "-12.5deg",
		repeat: -1,
		yoyo: !0
	}, .3);
	var S = new TimelineMax;
	S.staggerFromTo(_, 1, {
		transformOrigin: "0% 100%",
		skewX: "3.4deg"
	}, {
		skewX: "-3.4deg",
		repeat: -1,
		yoyo: !0
	}, 1.5);
	var F = new TimelineMax;
	F.staggerFromTo(b, 2, {
		transformOrigin: "0% 100%",
		skewX: "1.8deg"
	}, {
		skewX: "-1.8deg",
		repeat: -1,
		yoyo: !0,
		delay: 2
	}, 1);
	var q = ($("html"), $("#prompt")),
		P = $("#toggle"),
		W = $("#gi-parallax-hook");
	FastClick.attach(document.body), W.parallax({
		limitY: 10
	}), setTimeout(function() {
		"cursor" === W.data("mode") && (q.removeClass("hide"), window.innerWidth < 600 && P.addClass("hide"), q.on("click", function(e) {
			q.addClass("hide"), window.innerWidth < 600 && setTimeout(function() {
				P.removeClass("hide")
			}, 1200)
		}))
	}, 1e3);
	var A = function(e) {
		"interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
	};
	A(function() {
		var e = document.querySelectorAll(".js-gi-share");
		e && [].forEach.call(e, function(e) {
			e.addEventListener("click", function(e) {
				e.preventDefault(), t(this.href, 600, 620)
			})
		})
	})
}
initFeature();