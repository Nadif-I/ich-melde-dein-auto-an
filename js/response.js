/*!
 * response.js 0.8.0+201403151700
 * https://github.com/ryanve/response.js
 * MIT License (c) 2014 Ryan Van Etten
 */
! function (a, b, c) {
    var d = a.jQuery || a.Zepto || a.ender || a.elo;
    "undefined" != typeof module && module.exports ? module.exports = c(d) : a[b] = c(d)
}(this, "Response", function (a) {
    function b(a) {
        throw new TypeError(a ? S + "." + a : S)
    }

    function c(a) {
        return a === +a
    }

    function d(a, b, c) {
        for (var d = [], e = a.length, f = 0; e > f;) d[f] = b.call(c, a[f], f++, a);
        return d
    }

    function e(a) {
        return a ? h("string" == typeof a ? a.split(" ") : a) : []
    }

    function f(a, b, c) {
        if (null == a) return a;
        for (var d = a.length, e = 0; d > e;) b.call(c || a[e], a[e], e++, a);
        return a
    }

    function g(a, b, c) {
        null == b && (b = ""), null == c && (c = "");
        for (var d = [], e = a.length, f = 0; e > f; f++) null == a[f] || d.push(b + a[f] + c);
        return d
    }

    function h(a, b, c) {
        var d, e, f, g = [],
            h = 0,
            i = 0,
            j = "function" == typeof b,
            k = !0 === c;
        for (e = a && a.length, c = k ? null : c; e > i; i++) f = a[i], d = j ? !b.call(c, f, i, a) : b ? typeof f !== b : !f, d === k && (g[h++] = f);
        return g
    }

    function i(a, b) {
        if (null == a || null == b) return a;
        if ("object" == typeof b && c(b.length)) bb.apply(a, h(b, "undefined", !0));
        else
            for (var d in b) fb.call(b, d) && void 0 !== b[d] && (a[d] = b[d]);
        return a
    }

    function j(a, b, d) {
        return null == a ? a : ("object" == typeof a && !a.nodeType && c(a.length) ? f(a, b, d) : b.call(d || a, a), a)
    }

    function k(a) {
        return function (b, c) {
            var d = a();
            return d >= (b || 0) && (!c || c >= d)
        }
    }

    function l(a) {
        var b = V.devicePixelRatio;
        return null == a ? b || (l(2) ? 2 : l(1.5) ? 1.5 : l(1) ? 1 : 0) : isFinite(a) ? b && b > 0 ? b >= a : (a = "only all and (min--moz-device-pixel-ratio:" + a + ")", Cb(a).matches ? !0 : !!Cb(a.replace("-moz-", "")).matches) : !1
    }

    function m(a) {
        return a.replace(xb, "$1").replace(wb, function (a, b) {
            return b.toUpperCase()
        })
    }

    function n(a) {
        return "data-" + (a ? a.replace(xb, "$1").replace(vb, "$1-$2").toLowerCase() : a)
    }

    function o(a) {
        var b;
        return "string" == typeof a && a ? "false" === a ? !1 : "true" === a ? !0 : "null" === a ? null : "undefined" === a || (b = +a) || 0 === b || "NaN" === a ? b : a : a
    }

    function p(a) {
        return a ? 1 === a.nodeType ? a : a[0] && 1 === a[0].nodeType ? a[0] : !1 : !1
    }

    function q(a, b) {
        var c, d = arguments.length,
            e = p(this),
            g = {},
            h = !1;
        if (d) {
            if (gb(a) && (h = !0, a = a[0]), "string" == typeof a) {
                if (a = n(a), 1 === d) return g = e.getAttribute(a), h ? o(g) : g;
                if (this === e || 2 > (c = this.length || 1)) e.setAttribute(a, b);
                else
                    for (; c--;) c in this && q.apply(this[c], arguments)
            } else if (a instanceof Object)
                for (c in a) a.hasOwnProperty(c) && q.call(this, c, a[c]);
            return this
        }
        return e.dataset && "undefined" != typeof DOMStringMap ? e.dataset : (f(e.attributes, function (a) {
            a && (c = String(a.name).match(xb)) && (g[m(c[1])] = a.value)
        }), g)
    }

    function r(a) {
        return this && "string" == typeof a && (a = e(a), j(this, function (b) {
            f(a, function (a) {
                a && b.removeAttribute(n(a))
            })
        })), this
    }

    function s(a) {
        return q.apply(a, cb.call(arguments, 1))
    }

    function t(a, b) {
        return r.call(a, b)
    }

    function u(a) {
        for (var b, c = [], d = 0, e = a.length; e > d;)(b = a[d++]) && c.push("[" + n(b.replace(ub, "").replace(".", "\\.")) + "]");
        return c.join()
    }

    function v(b) {
        return a(u(e(b)))
    }

    function w() {
        return window.pageXOffset || X.scrollLeft
    }

    function x() {
        return window.pageYOffset || X.scrollTop
    }

    function y(a, b) {
        var c = a.getBoundingClientRect ? a.getBoundingClientRect() : {};
        return b = "number" == typeof b ? b || 0 : 0, {
            top: (c.top || 0) - b,
            left: (c.left || 0) - b,
            bottom: (c.bottom || 0) + b,
            right: (c.right || 0) + b
        }
    }

    function z(a, b) {
        var c = y(p(a), b);
        return !!c && c.right >= 0 && c.left <= Db()
    }

    function A(a, b) {
        var c = y(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Eb()
    }

    function B(a, b) {
        var c = y(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Eb() && c.right >= 0 && c.left <= Db()
    }

    function C(a) {
        var b = {
                img: 1,
                input: 1,
                source: 3,
                embed: 3,
                track: 3,
                iframe: 5,
                audio: 5,
                video: 5,
                script: 5
            },
            c = b[a.nodeName.toLowerCase()] || -1;
        return 4 > c ? c : null != a.getAttribute("src") ? 5 : -5
    }

    function D(a, c, d) {
        var e;
        return a && null != c || b("store"), d = "string" == typeof d && d, j(a, function (a) {
            e = d ? a.getAttribute(d) : 0 < C(a) ? a.getAttribute("src") : a.innerHTML, null == e ? t(a, c) : s(a, c, e)
        }), N
    }

    function E(a, b) {
        var c = [];
        return a && b && f(e(b), function (b) {
            c.push(s(a, b))
        }, a), c
    }

    function F(a, b) {
        return "string" == typeof a && "function" == typeof b && (jb[a] = b, kb[a] = 1), N
    }

    function G(a) {
        return Z.on("resize", a), N
    }

    function H(a, b) {
        var c, d, e = Ab.crossover;
        return "function" == typeof a && (c = b, b = a, a = c), d = a ? "" + a + e : e, Z.on(d, b), N
    }

    function I(a) {
        return j(a, function (a) {
            Y(a), G(a)
        }), N
    }

    function J(a) {
        return j(a, function (a) {
            "object" == typeof a || b("create @args");
            var c, d = yb(O).configure(a),
                e = d.verge,
                g = d.breakpoints,
                h = zb("scroll"),
                i = zb("resize");
            g.length && (c = g[0] || g[1] || !1, Y(function () {
                function a() {
                    d.reset(), f(d.$e, function (a, b) {
                        d[b].decideValue().updateDOM()
                    }).trigger(g)
                }

                function b() {
                    f(d.$e, function (a, b) {
                        B(d[b].$e, e) && d[b].updateDOM()
                    })
                }
                var g = Ab.allLoaded,
                    j = !!d.lazy;
                f(d.target().$e, function (a, b) {
                    d[b] = yb(d).prepareData(a), (!j || B(d[b].$e, e)) && d[b].updateDOM()
                }), d.dynamic && (d.custom || pb > c) && G(a, i), j && (Z.on(h, b), d.$e.one(g, function () {
                    Z.off(h, b)
                }))
            }))
        }), N
    }

    function K(a) {
        return R[S] === N && (R[S] = T), "function" == typeof a && a.call(R, N), N
    }

    function L(a, b) {
        return "function" == typeof a && a.fn && ((b || void 0 === a.fn.dataset) && (a.fn.dataset = q), (b || void 0 === a.fn.deletes) && (a.fn.deletes = r)), N
    }
    if ("function" != typeof a) try {
        return void console.warn("response.js aborted due to missing dependency")
    } catch (M) {}
    var N, O, P, Q, R = this,
        S = "Response",
        T = R[S],
        U = "init" + S,
        V = window,
        W = document,
        X = W.documentElement,
        Y = a.domReady || a,
        Z = a(V),
        $ = V.screen,
        _ = Array.prototype,
        ab = Object.prototype,
        bb = _.push,
        cb = _.slice,
        db = _.concat,
        eb = ab.toString,
        fb = ab.hasOwnProperty,
        gb = Array.isArray || function (a) {
            return "[object Array]" === eb.call(a)
        },
        hb = {
            width: [0, 320, 481, 641, 961, 1025, 1281],
            height: [0, 481],
            ratio: [1, 1.5, 2]
        },
        ib = {},
        jb = {},
        kb = {},
        lb = {
            all: []
        },
        mb = 1,
        nb = $.width,
        ob = $.height,
        pb = nb > ob ? nb : ob,
        qb = nb + ob - pb,
        rb = function () {
            return nb
        },
        sb = function () {
            return ob
        },
        tb = /[^a-z0-9_\-\.]/gi,
        ub = /^[\W\s]+|[\W\s]+$|/g,
        vb = /([a-z])([A-Z])/g,
        wb = /-(.)/g,
        xb = /^data-(.+)$/,
        yb = Object.create || function (a) {
            function b() {}
            return b.prototype = a, new b
        },
        zb = function (a, b) {
            return b = b || S, a.replace(ub, "") + "." + b.replace(ub, "")
        },
        Ab = {
            allLoaded: zb("allLoaded"),
            crossover: zb("crossover")
        },
        Bb = V.matchMedia || V.msMatchMedia,
        Cb = Bb || function () {
            return {}
        },
        Db = function () {
            var a = X.clientWidth,
                b = V.innerWidth;
            return b > a ? b : a
        },
        Eb = function () {
            var a = X.clientHeight,
                b = V.innerHeight;
            return b > a ? b : a
        };
    return P = k(Db), Q = k(Eb), ib.band = k(rb), ib.wave = k(sb), O = function () {
        function c(a) {
            return "string" == typeof a ? a.toLowerCase().replace(tb, "") : ""
        }

        function j(a, b) {
            return a - b
        }
        var k = Ab.crossover,
            l = Math.min;
        return {
            $e: 0,
            mode: 0,
            breakpoints: null,
            prefix: null,
            prop: "width",
            keys: [],
            dynamic: null,
            custom: 0,
            values: [],
            fn: 0,
            verge: null,
            newValue: 0,
            currValue: 1,
            aka: null,
            lazy: null,
            i: 0,
            uid: null,
            reset: function () {
                for (var a = this.breakpoints, b = a.length, c = 0; !c && b--;) this.fn(a[b]) && (c = b);
                return c !== this.i && (Z.trigger(k).trigger(this.prop + k), this.i = c || 0), this
            },
            configure: function (a) {
                i(this, a);
                var k, m, n, o, p, q = !0,
                    r = this.prop;
                if (this.uid = mb++, null == this.verge && (this.verge = l(pb, 500)), this.fn = jb[r] || b("create @fn"), null == this.dynamic && (this.dynamic = "device" !== r.slice(0, 6)), this.custom = kb[r], n = this.prefix ? h(d(e(this.prefix), c)) : ["min-" + r + "-"], o = 1 < n.length ? n.slice(1) : 0, this.prefix = n[0], m = this.breakpoints, gb(m) ? (f(m, function (a) {
                        if (!a && 0 !== a) throw "invalid breakpoint";
                        q = q && isFinite(a)
                    }), q && m.sort(j), m.length || b("create @breakpoints")) : m = hb[r] || hb[r.split("-").pop()] || b("create @prop"), this.breakpoints = q ? h(m, function (a) {
                        return pb >= a
                    }) : m, this.keys = g(this.breakpoints, this.prefix), this.aka = null, o) {
                    for (p = [], k = o.length; k--;) p.push(g(this.breakpoints, o[k]));
                    this.aka = p, this.keys = db.apply(this.keys, p)
                }
                return lb.all = lb.all.concat(lb[this.uid] = this.keys), this
            },
            target: function () {
                return this.$e = a(u(lb[this.uid])), D(this.$e, U), this.keys.push(U), this
            },
            decideValue: function () {
                for (var a = null, b = this.breakpoints, c = b.length, d = c; null == a && d--;) this.fn(b[d]) && (a = this.values[d]);
                return this.newValue = "string" == typeof a ? a : this.values[c], this
            },
            prepareData: function (b) {
                if (this.$e = a(b), this.mode = C(b), this.values = E(this.$e, this.keys), this.aka)
                    for (var c = this.aka.length; c--;) this.values = i(this.values, E(this.$e, this.aka[c]));
                return this.decideValue()
            },
            updateDOM: function () {
                return this.currValue === this.newValue ? this : (this.currValue = this.newValue, 0 < this.mode ? this.$e[0].setAttribute("src", this.newValue) : null == this.newValue ? this.$e.empty && this.$e.empty() : this.$e.html ? this.$e.html(this.newValue) : (this.$e.empty && this.$e.empty(), this.$e[0].innerHTML = this.newValue), this)
            }
        }
    }(), jb.width = P, jb.height = Q, jb["device-width"] = ib.band, jb["device-height"] = ib.wave, jb["device-pixel-ratio"] = l, N = {
        deviceMin: function () {
            return qb
        },
        deviceMax: function () {
            return pb
        },
        noConflict: K,
        bridge: L,
        create: J,
        addTest: F,
        datatize: n,
        camelize: m,
        render: o,
        store: D,
        access: E,
        target: v,
        object: yb,
        crossover: H,
        action: I,
        resize: G,
        ready: Y,
        affix: g,
        sift: h,
        dpr: l,
        deletes: t,
        scrollX: w,
        scrollY: x,
        deviceW: rb,
        deviceH: sb,
        device: ib,
        inX: z,
        inY: A,
        route: j,
        merge: i,
        media: Cb,
        wave: Q,
        band: P,
        map: d,
        each: f,
        inViewport: B,
        dataset: s,
        viewportH: Eb,
        viewportW: Db
    }, Y(function () {
        var b = s(W.body, "responsejs"),
            c = V.JSON && JSON.parse || a.parseJSON;
        b = b && c ? c(b) : b, b && b.create && J(b.create), X.className = X.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs "
    }), N
});
