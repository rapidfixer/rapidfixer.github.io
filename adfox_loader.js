! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "https://yastatic.net/pcode-bundles/", e(0)
}([function(t, e, n) {
    t.exports = n(1)
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = new T(A, t);
        return B.push(e), e.initialize(), e
    }

    function o(t, e, n) {
        var r = new T(A, t);
        return B.push(r), f(I, function() {
            var o = k(t);
            O(A, o.container, function() {
                e ? c(r, e, n) : r.initialize()
            }, !0)
        }), r
    }

    function i(t, e, n) {
        var r = new T(A, t);
        return B.push(r), c(r, e, n), r
    }

    function a(t) {
        if (s(), "string" == typeof t)
            for (var e = 0; e < B.length; e++) B[e].getContainerId() === t && B[e].reload();
        else
            for (var n = 0; n < B.length; n++) try {
                B[n].reload()
            } catch (t) {
                A.console && A.console.error(t)
            }
    }

    function s() {
        w.pr = A.pr = x()
    }

    function c(t, e, n) {
        var r = w.ac || (w.ac = new C(A));
        r.addBanner(t, e, n)
    }

    function d(t, e, n) {
        var o = E(e, n);
        o && r(o)
    }
    var u = n(2),
        f = u.onDocumentReady,
        l = n(3),
        h = l.addEvent,
        p = n(4),
        _ = p.isIe,
        v = p.ieVer,
        m = n(5),
        g = m.processWindowError,
        y = m.processErrorEvent,
        b = m.createErrorReport,
        w = n(7),
        x = n(8),
        C = n(9),
        k = n(10),
        S = n(11),
        E = n(12),
        O = n(13),
        T = n(16),
        A = window,
        I = A.document,
        B = [];
    "number" != typeof A.pr && (A.pr = x()), w.pr || (S(.1, function() {
        var t = n(32),
            e = t.create(39394400),
            r = 0,
            o = function(t) {
                if (r <= 10) {
                    var n = t.message.indexOf("adfox#") !== -1,
                        o = /(\/(adfox|adfox\/loader)\.js$)|pcode-bundles/.test(t.file),
                        i = /([_a-z]+).js$/.exec(t.file),
                        a = i && i[1] ? i[1] : "loader";
                    !n && o && (r++, e.params({
                        mediaError: b(A, t, {
                            bundleName: a
                        })
                    }))
                }
            };
        if (_ && v <= 9) {
            var i = A.onerror;
            A.onerror = function() {
                var t = g.apply(void 0, arguments);
                if (o(t), "function" == typeof i) return i()
            }
        } else h(A, "error", function(t) {
            return o(y(t))
        })
    }), w.pr = A.pr, w.create = r, w.createScroll = o, w.reload = a, w.createAdaptive = i, w.clearSession = s, "function" != typeof A.AdFox_getCodeScript && (A.AdFox_getCodeScript = d))
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return "loading" !== t.readyState
    }

    function o(t, e) {
        if (r(t)) e();
        else {
            var n = function n() {
                r(t) && (i.removeEvent(t, "readystatechange", n), e())
            };
            i.addEvent(t, "readystatechange", n)
        }
    }
    var i = n(3);
    t.exports = {
        isDocumentReady: r,
        onDocumentReady: o
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        t.addEventListener ? t.addEventListener(e, n, !!s.isSupportPassiveEvents && r) : t.attachEvent("on" + e, n)
    }

    function o(t, e, n) {
        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n)
    }

    function i(t, e, n, i) {
        return r(t, e, n, i),
            function() {
                o(t, e, n)
            }
    }

    function a(t) {
        t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : (t.returnValue = !1, t.cancelBubble = !0)
    }
    var s = n(4);
    t.exports = {
        addEvent: r,
        on: i,
        removeEvent: o,
        stop: a
    }
}, function(t, e) {
    "use strict";

    function n() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === ("undefined" != typeof SVGRect && t.firstChild && t.firstChild.namespaceURI)
    }

    function r() {
        var t = document.createElement("canvas");
        return Boolean(t && t.getContext && t.getContext("2d"))
    }

    function o() {
        var t = document.createElement("video");
        return Boolean(t && t.canPlayType && t.canPlayType("video/mp4"))
    }

    function i(t) {
        var e = s.match(new RegExp(t + "/([\\d.]+)"));
        return e && e[1] || "0"
    }

    function a() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("test", null, e)
        } catch (t) {}
        return t
    }
    var s = (navigator || {}).userAgent || "",
        c = (navigator || {}).platform || "",
        d = "undefined" != typeof window.ontouchstart,
        u = function() {
            for (var t, e = 8, n = document.createElement("div"), r = n.getElementsByTagName("i"); e < 11 && (n.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", !r[0]); e++);
            return e > 11 ? t : e
        }();
    t.exports = {
        isAMP: Boolean(window.ampSeen),
        chromeVersion: i("Chrome"),
        firefoxVersion: i("Firefox"),
        ieVer: u,
        IS_DESKTOP: !d && screen.width >= 1024 && screen.height >= 728,
        IS_IE8: 8 === u,
        isChrome: /Chrome/gi.test(s),
        isEdge: /Edge/gi.test(s),
        isFirefox: /Firefox/gi.test(s),
        isIe: Boolean(u),
        isIEMobile: /IEMobile|Nokia|Lumia/gi.test(s),
        isSupportCanvas: r(),
        isSupportMP4Video: o(),
        isSupportPassiveEvents: a(),
        isSVGSupported: n(),
        isTouch: d,
        isWebkit: /WebKit/gi.test(s),
        isWin: /Windows NT/gi.test(c),
        isYaBro: /YaBrowser/gi.test(s),
        operaVersion: i("Opera"),
        safariVersion: i("Safari"),
        yaBroVersion: i("YaBrowser")
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = {},
            i = r[n.bundleName] = {},
            a = e.message;
        return i[a] = s(e, {
            params: n.adParams,
            userAgent: navigator.userAgent,
            viewport: [t.screen.width, t.screen.height].join("x"),
            date: String(new Date),
            href: location.href
        }), "undefined" != typeof JSON && (i[a] = JSON.stringify(i[a])), o(r)
    }

    function o(t) {
        var e = {},
            n = e[d] = {};
        return n[u] = t, e
    }

    function i(t, e, n, r, o) {
        var i = void 0;
        if (t && "string" != typeof t) {
            if (t.type && t.target) try {
                e = t.target.src
            } catch (t) {}
            i = [];
            var a = void 0;
            for (a in t) i.push(a + ": " + t[a]);
            i = i.join(","), t = "Error object. Look at details"
        }
        return {
            message: t || f,
            file: e,
            line: n,
            column: r ? r : "",
            stack: o && o.stack ? o.stack : o ? o : "",
            details: i
        }
    }

    function a(t) {
        var e = t.error;
        return {
            message: e && e.message || t.message || f,
            file: t.filename,
            line: t.lineno,
            column: t.colno,
            stack: e && e.stack || ""
        }
    }
    var s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        c = n(6),
        d = c.loaderVersion,
        u = c.bundleVersion,
        f = "Unrecognized script error";
    t.exports = {
        createErrorReport: r,
        createReport: o,
        processWindowError: i,
        processErrorEvent: a
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        for (var e = t[0][0], n = void 0, r = 0; r < t.length && (n = t[r], !(a <= e)); r++) e += t[r][0];
        return n[1]
    }

    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = s.freezeBundles || [],
            n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t.name + "_v_" + t.version : t,
            r = c;
        return e.forEach(function(e) {
            var o = e.bannerType,
                i = void 0 === o ? "" : o,
                a = e.bannerVersion,
                s = e.packetVersion;
            n.indexOf(i) > -1 && a === t.version && (r = s)
        }), {
            bundleName: n,
            packetVersion: r
        }
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = Math.random(),
        s = {
            loader: 392,
            bundles: [
                [1, 392]
            ],
            freezeBundles: [{
                bannerType: "media-banner_theme",
                bannerVersion: 1,
                packetVersion: 282
            }, {
                bannerType: "media-banner_theme",
                bannerVersion: 2,
                packetVersion: 358
            }]
        },
        c = r(s.bundles);
    t.exports = {
        loaderVersion: s.loader,
        bundleVersion: c,
        getPacketVersionAndBundleName: o
    }
}, function(t, e) {
    "use strict";
    window.Ya || (window.Ya = {}), window.Ya.adfoxCode || (window.Ya.adfoxCode = {}), t.exports = window.Ya.adfoxCode
}, function(t, e) {
    "use strict";
    var n = 4294967295;
    t.exports = function() {
        return Math.floor(Math.random() * n) + 1
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        this._win = t, this._banners = [], this._stateDesktop = "desktop", this._stateTablet = "tablet", this._statePhone = "phone", this._initResizeEvents()
    }
    var o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        i = n(3);
    r.prototype = {
        constructor: r,
        addBanner: function(t, e, n) {
            var r = {
                adaptiveOptions: o(this._getDefaultBannerAdaptiveOptions(), n || {}),
                adInstance: t,
                isVisible: !1,
                state: null,
                states: e
            };
            this._banners.push(r), this._checkBannerState(r)
        },
        _getDefaultBannerAdaptiveOptions: function() {
            return {
                tabletWidth: 830,
                phoneWidth: 480,
                isAutoReloads: !1
            }
        },
        _checkState: function() {
            for (var t = 0; t < this._banners.length; t++) this._checkBannerState(this._banners[t])
        },
        _checkBannerState: function(t) {
            var e = this._win.document.documentElement.clientWidth,
                n = t.adaptiveOptions,
                r = null;
            r = e > n.tabletWidth ? this._stateDesktop : e <= n.tabletWidth && e > n.phoneWidth ? this._stateTablet : this._statePhone, r !== t.state && (t.state = r, this._toggleBannerState(t))
        },
        _initResizeEvents: function() {
            var t = this;
            i.addEvent(this._win, "resize", function() {
                return t._checkState()
            })
        },
        _toggleBannerState: function(t) {
            for (var e = !1, n = 0; n < t.states.length; n++)
                if (t.states[n] === t.state) {
                    e = !0;
                    break
                }
            e ? t.isVisible || this._showBanner(t) : t.isVisible && this._hideBanner(t)
        },
        _showBanner: function(t) {
            t.isVisible = !0, t.adInstance.initialize(), t.adaptiveOptions.isAutoReloads || t.adInstance.show()
        },
        _hideBanner: function(t) {
            t.isVisible = !1, t.adaptiveOptions.isAutoReloads ? t.adInstance.destroy() : t.adInstance.hide()
        }
    }, t.exports = r
}, function(t, e) {
    "use strict";

    function n(t, e, n) {
        var d = u({}, t);
        return i(t), o(t), r(t, d), a(t, d), "undefined" != typeof e && s(e), "undefined" != typeof n && c(n), d
    }

    function r(t, e) {
        t.element && t.element instanceof Element ? e.container = t.element : t.containerId && (e.container = window.document.getElementById(t.containerId))
    }

    function o(t) {
        for (var e = ["onError", "onRender", "onStub"], n = void 0, r = 0; r < e.length; r++)
            if (n = d(t[e[r]]), "undefined" !== n && "function" !== n) throw new Error("adfox#checkBannerOptions: " + e[r] + " must be function")
    }

    function i(t) {
        var e = null;
        if (t ? t.ownerId ? t.params ? t.element || t.containerId || (e = 'Banner options required "element" or "containerId"') : e = 'Banner option "params" is required' : e = 'Banner option "ownerId" is required' : e = "Banner options is required", e) throw new Error("adfox#checkBannerOptions: " + e)
    }

    function a(t, e) {
        if (!e.container) {
            var n = t.element ? "Element not found or is not instance of Element" : "Element with id #" + t.containerId + " not found";
            throw new Error("adfox#checkContainer: " + n)
        }
    }

    function s(t) {
        if ("[object Array]" !== Object.prototype.toString.call(t)) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option must be Array");
        if (t.length < 1) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option can not be empty")
    }

    function c(t) {
        if (t.tabletWidth && t.phoneWidth && t.tabletWidth < t.phoneWidth) throw new Error("adfox#checkAdaptiveOptions: phoneWidth must be less than tabletWidth")
    }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    t.exports = n
}, function(t, e) {
    "use strict";
    var n = Math.random();
    t.exports = function(t, e, r) {
        n <= t ? e() : r && r()
    }
}, function(t, e) {
    "use strict";

    function n() {
        return o || (o = document.createElement("a")), o
    }

    function r(t, e) {
        var r = {
                containerId: "AdFox_banner_" + t,
                params: {}
            },
            o = n();
        o.href = e;
        var i = o.pathname;
        "/" !== i[0] && (i = "/" + i);
        var a = /\/(\d+)\//.exec(i);
        a && a[1] && (r.ownerId = a[1]);
        for (var s = o.search.slice(1).replace(/&amp;/g, "&"), c = s.split("&"), d = 0; d < c.length; d++) {
            var u = c[d],
                f = u.indexOf("=");
            f > 0 && (r.params[u.substr(0, f)] = decodeURIComponent(u.substr(f + 1)))
        }
        return !(!s.length || !r.ownerId) && r
    }
    var o = void 0;
    t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = t.document;
        return function() {
            var o = r.documentElement.clientWidth,
                a = r.documentElement.clientHeight,
                s = i.elementOffset(e),
                c = i.pageOffset(t);
            c.top + a >= s.top && c.left + o >= s.left && n()
        }
    }

    function o(t, e, n, o) {
        function i() {
            a.removeEvent(t, "scroll", f), a.removeEvent(t, "resize", f)
        }

        function d() {
            o && i(), n()
        }
        var u = r(t, e, d),
            f = s.throttle(u, c);
        return a.addEvent(t, "scroll", f, {
            passive: !0
        }), a.addEvent(t, "resize", f, {
            passive: !0
        }), f(), i
    }
    var i = n(14),
        a = n(3),
        s = n(15),
        c = 300;
    t.exports = o
}, function(t, e, n) {
    "use strict";

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1];
        return "string" == typeof e && (t[h] = e), t[h] || ""
    }

    function o(t, e) {
        var n = t.getElementsByTagName(e);
        return n.length > 0 ? n[0] : null
    }

    function i(t) {
        var e = t.document,
            n = e.baseURI;
        if ("undefined" == typeof n) {
            var r = o(e, "base");
            n = r ? r.href : e.URL
        }
        return n
    }

    function a(t, e) {
        for (var n = void 0, r = null; t && 1 === t.nodeType;) {
            if (n = t.getAttribute(e)) {
                r = t;
                break
            }
            t = t.parentNode
        }
        return {
            element: r,
            value: n
        }
    }

    function s(t) {
        if (t.currentScript) return t.currentScript;
        var e = t.getElementsByTagName("script");
        return e[e.length - 1]
    }

    function c(t) {
        var e = t.getBoundingClientRect(),
            n = t.ownerDocument,
            r = n.documentElement,
            o = n.defaultView || n.parentWindow;
        return {
            top: e.top + (o.pageYOffset || r.scrollTop) - (r.clientTop || 0),
            left: e.left + (o.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
        }
    }

    function d(t) {
        var e = t.document,
            n = "undefined" != typeof t.pageXOffset,
            r = "CSS1Compat" === (e.compatMode || "");
        return {
            left: n ? t.pageXOffset : r ? e.documentElement.scrollLeft : e.body.scrollLeft,
            top: n ? t.pageYOffset : r ? e.documentElement.scrollTop : e.body.scrollTop
        }
    }

    function u(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }
    var f = n(4),
        l = f.IS_IE8,
        h = l ? "innerText" : "textContent",
        p = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.element,
                n = t.event,
                r = n.pageX,
                o = n.pageY,
                i = n.clientX,
                a = n.clientY,
                s = "undefined" == typeof r ? i : r,
                d = "undefined" == typeof o ? a : o,
                u = c(e),
                f = u.left,
                l = u.top,
                h = {
                    x: s - f,
                    y: d - l
                },
                p = h.x,
                _ = h.y;
            return {
                width: e.clientWidth,
                height: e.clientHeight,
                x: p,
                y: _
            }
        };
    t.exports = {
        text: r,
        getBaseURI: i,
        pageOffset: d,
        elementOffset: c,
        elementByTag: o,
        closestElementWithAttr: a,
        getCurrentScript: s,
        getCursorPositionOnElement: p,
        removeChildren: u
    }
}, function(t, e) {
    "use strict";

    function n(t, e, n) {
        var r = void 0,
            o = void 0,
            i = void 0;
        return function() {
            o = arguments, i = !0, n = n || null, r || function a() {
                i ? (t.apply(n, o), i = !1, r = setTimeout(a, e)) : r = null
            }()
        }
    }
    t.exports = {
        throttle: n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(17),
        o = n(10),
        i = n(19),
        a = r({
            __constructor: function(t, e) {
                this._isInitalized = !1, this._isHidden = !1, this._ad = null, this._win = t, this._bannerOptions = e
            },
            getContainerId: function() {
                return this._bannerOptions.containerId
            },
            initialize: function() {
                this._isInitalized || this._initAd()
            },
            destroy: function() {
                this._isInitalized && this._destroyAd()
            },
            reload: function() {
                this._isInitalized && !this._isHidden && (this._destroyAd(), this._initAd())
            },
            hide: function() {
                this._isInitalized && (this._isHidden = !0, this._ad.hide())
            },
            show: function() {
                this._isInitalized && (this._isHidden = !1, this._ad.show())
            },
            _initAd: function() {
                this._isInitalized = !0;
                var t = o(this._bannerOptions);
                this._ad = i(this._win, t)
            },
            _destroyAd: function() {
                this._ad.show(), this._ad.destroy(), this._ad = null, this._isInitalized = !1, this._isHidden = !1
            }
        });
    t.exports = a
}, function(t, e, n) {
    t.exports = n(18)
}, function(t, e, n) {
    var r;
    ! function(o) {
        function i(t) {
            var e = h(t);
            if (y)
                for (var n, r = 0; n = x[r++];) t.hasOwnProperty(n) && e.push(n);
            return e
        }

        function a(t, e, n) {
            for (var r, o, a = i(n), s = 0, c = a.length; s < c;) "__self" !== (r = a[s++]) && (o = n[r], !m(o) || o.prototype && o.prototype.__self || d && !(o.toString().indexOf(".__base") > -1) ? e[r] = o : e[r] = function(n, r) {
                var o = t[n] ? t[n] : "__constructor" === n ? e.__self.__parent : g,
                    i = function() {
                        var t = this.__base;
                        this.__base = i.__base;
                        var e = r.apply(this, arguments);
                        return this.__base = t, e
                    };
                return i.__base = o, i
            }(r, o))
        }

        function s(t, e) {
            for (var n, r = 1; n = t[r++];) e ? m(n) ? c.self(e, n.prototype, n) : c.self(e, n) : e = m(n) ? c(t[0], n.prototype, n) : c(t[0], n);
            return e || t[0]
        }

        function c() {
            var t = arguments,
                e = v(t[0]),
                n = e || m(t[0]),
                r = n ? e ? s(t[0]) : t[0] : u,
                o = t[n ? 1 : 0] || {},
                i = t[n ? 2 : 1],
                c = o.__constructor || n && r.prototype && r.prototype.__constructor ? function() {
                    return this.__constructor.apply(this, arguments)
                } : n ? function() {
                    return r.apply(this, arguments)
                } : function() {};
            if (!n) return c.prototype = o, c.prototype.__self = c.prototype.constructor = c, p(c, i);
            p(c, r), c.__parent = r;
            var d = r.prototype,
                f = c.prototype = l(d);
            return f.__self = f.constructor = c, o && a(d, f, o), i && a(r, c, i), c
        }
        var d = function() {
                return "_"
            }.toString().indexOf("_") > -1,
            u = function() {},
            f = Object.prototype.hasOwnProperty,
            l = Object.create || function(t) {
                var e = function() {};
                return e.prototype = t, new e
            },
            h = Object.keys || function(t) {
                var e = [];
                for (var n in t) f.call(t, n) && e.push(n);
                return e
            },
            p = function(t, e) {
                for (var n in e) f.call(e, n) && (t[n] = e[n]);
                return t
            },
            _ = Object.prototype.toString,
            v = Array.isArray || function(t) {
                return "[object Array]" === _.call(t)
            },
            m = function(t) {
                return "[object Function]" === _.call(t)
            },
            g = function() {},
            y = !0,
            b = {
                toString: ""
            };
        for (var w in b) b.hasOwnProperty(w) && (y = !1);
        var x = y ? ["toString", "valueOf"] : null;
        c.self = function() {
            var t = arguments,
                e = v(t[0]),
                n = e ? s(t[0], t[0][0]) : t[0],
                r = t[1],
                o = t[2],
                i = n.prototype;
            return r && a(i, i, r), o && a(n, n, o), n
        };
        var C = !0;
        t.exports = c, C = !1, "object" == typeof modules && "function" == typeof modules.define && (modules.define("inherit", function(t) {
            t(c)
        }), C = !1), r = function(t, e, n) {
            n.exports = c
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)), C = !1, C && (o.inherit = c)
    }(this)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        var n = new o(t, e);
        return u ? f.add(function(t) {
            d && (s.onRender = t), n.setCallback("onSkipTokenReceived", t), n.render()
        }) : n.render(), n
    }
    var o = n(20),
        i = n(28),
        a = n(31),
        s = n(7),
        c = n(4),
        d = c.isAMP,
        u = Boolean(a[window.location.host]),
        f = void 0;
    d && window.context.isMaster ? window.context.isMaster ? s.queue = f = i() : f = window.context.master.Ya.adfoxCode.queue : f = i(), t.exports = r
}, function(t, e, n) {
    "use strict";

    function r() {
        var t = window,
            e = "";
        return u && t.context.master.Ya && t.context.master.Ya.getSkipToken ? e = t.context.master.Ya.getSkipToken : t.Ya && t.Ya.Context && t.Ya.Context.AdvManager && t.Ya.Context.AdvManager.getSkipToken && (e = t.Ya.Context.AdvManager.getSkipToken()), e
    }

    function o(t, e) {
        var n = this;
        this._isSkipTokenReceived = !1, this._win = t, this._doc = t.document, this._loc = t.location, this._params = e.params, this._domain = e.customDomain || x, this._ownerId = e.ownerId, this._pr = l.pr, this._pr1 = f(), this._dt = new Date, this._directTimeoutTime = e.directTimeoutTime || b, this._isNoDestroy = e.isNoDestroy, this._container = e.container, this._callbacks = {
            onRender: e.onRender,
            onError: e.onError,
            onLoad: e.onLoad,
            onStub: e.onStub,
            onReset: function(t) {
                return n._resetBanner(t)
            },
            onDestroy: function() {
                return n.destroy()
            }
        }, this._transport = new g(this._pr1, this._win, this._container)
    }
    var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        a = n(21),
        s = a.addParamsToUrl,
        c = a.addParamToUrl,
        d = n(4),
        u = d.isAMP,
        f = n(8),
        l = n(7),
        h = n(6),
        p = h.loaderVersion,
        _ = h.bundleVersion,
        v = n(22),
        m = n(24)(l),
        g = n(26),
        y = n(27),
        b = 5e3,
        w = 2048,
        x = "/c55f0a7a0acd4bbd363c889e35f865bd/v1/4uj0bf9rwn8k/YWRzLmFkZm94LnJ1Lw==-";
    o.prototype = {
        constructor: o,
        render: function(t) {
            this._container.appendChild(this._getAdContainer()), this._initOnRenderEvent(), this._runTransport(t), this._initDirectTimeout()
        },
        destroy: function() {
            this._triggerCancelObserve(), this._destroyTransport(), this._destroyBundle(), this._container.innerHTML = ""
        },
        hide: function() {
            this._container && (this._container.style.display = "none")
        },
        show: function() {
            this._container && (this._container.style.display = "")
        },
        setCallback: function(t, e) {
            this._callbacks[t] = e
        },
        _initDirectTimeout: function() {
            var t = this;
            this._directTimeout = setTimeout(function() {
                return t._triggerCallback("onSkipTokenReceived")
            }, this._directTimeoutTime)
        },
        _resetBanner: function(t) {
            this._triggerCallback("onSkipTokenReceived"), this._destroyBundle(), t.options && (this._pr1 = f(), this._ownerId = t.options.ownerId || this._ownerId, this._params = t.options.params || this._params, this._domain = t.options.customDomain || x), this._transport = new g(this._pr1, this._win, this._container), this.render(t.prepareCodeUrl)
        },
        _runTransport: function(t) {
            var e = this;
            this._transport.setCallbacks({
                error: function(t) {
                    return e._handleTransportError(t)
                },
                load: function() {
                    return e._handleTransportLoad()
                },
                success: function(t) {
                    return e._handleTransportSuccess(t)
                }
            }), this._transport.setPrepareCodeUrl(t || this._getPrepareUrl())
        },
        _destroyTransport: function() {
            this._transport && (this._transport.destroy(), this._transport = null)
        },
        _destroyBundle: function() {
            this._bundle && (this._bundle.destroy(), this._bundle = null)
        },
        _getAdContainer: function() {
            return this._adContainer || (this._adContainer = this._doc.createElement("div"), this._adContainer.id = "AdFox_banner_" + this._pr1), this._adContainer
        },
        _getDefaultParams: function() {
            var t = this._win.context,
                e = u ? t.referrer : this._doc.referrer,
                n = u ? t.sourceUrl : this._loc;
            return {
                dl: n,
                pd: this._dt.getDate(),
                pdh: this._win.screen.height,
                pdw: this._win.screen.width,
                pr1: this._pr1,
                pr: this._pr,
                prr: e,
                pv: this._dt.getHours(),
                pw: this._dt.getDay(),
                skipToken: r(),
                ylv: "0." + p
            }
        },
        _addGrab: function(t) {
            return c(t, "grab", v(w - t.length))
        },
        _getPrepareUrl: function() {
            var t = "/" + this._ownerId + "/prepareCode",
                e = "https:" === this._loc.protocol ? "https:" : "http:",
                n = i(this._getDefaultParams(), this._params),
                r = e + "//" + this._domain + t;
            if (n.pk) try {
                n.pk = decodeURIComponent(n.pk)
            } catch (t) {}
            return r = s(r, n) + "&utf8=âœ“", this._addGrab(r)
        },
        _initOnRenderEvent: function() {
            var t = this,
                e = function() {
                    t._triggerCallback("onRender"), t._triggerCallback("onSkipTokenReceived")
                };
            this._cancelObserve = window.MutationObserver ? this._createObserver(e) : this._createObserverForOldBrowsers(e)
        },
        _createObserver: function(t) {
            function e() {
                n.disconnect()
            }
            var n = new MutationObserver(function() {
                    e(), t()
                }),
                r = {
                    childList: !0
                };
            return n.observe(this._adContainer, r), e
        },
        _handleTransportError: function(t) {
            this._triggerCallback("onError", t), this._triggerCallback("onSkipTokenReceived"), this._isNoDestroy || "adfoxBackend" !== t.type || this.destroy()
        },
        _handleTransportLoad: function() {
            this._onTransportLoad && this._onTransportLoad()
        },
        _createObserverForOldBrowsers: function(t) {
            var e = this;
            return this._onTransportLoad = t,
                function() {
                    return e._onTransportLoad = null
                }
        },
        _triggerCancelObserve: function() {
            this._cancelObserve && (this._cancelObserve(), this._cancelObserve = null)
        },
        _handleTransportSuccess: function(t) {
            this._triggerCancelObserve(), this._destroyTransport(), this._removeAdContainer(), t.data ? this._parseDataInResponse(t.data) : t.error && this._parseErrorInResponse(t.error)
        },
        _removeAdContainer: function() {
            this._adContainer.parentNode.removeChild(this._adContainer), this._adContainer = null
        },
        _parseDataInResponse: function(t) {
            if (t.length)
                for (var e = 0; e < t.length; e++) this._loadBundle(t[e].type, t[e].attributes);
            else this._triggerCallback("onStub"), this._triggerCallback("onSkipTokenReceived")
        },
        _parseErrorInResponse: function(t) {
            for (var e = 0; e < t.length; e++) this._triggerCallback("onError", {
                message: t[e],
                type: "adfoxBackend"
            });
            this._triggerCallback("onSkipTokenReceived")
        },
        _loadBundle: function(t, e) {
            var n = this,
                r = this._triggerCallback("onLoad", {
                    bundleName: t,
                    bundleParams: e
                });
            if (r === !1) this._triggerCallback("onRender");
            else {
                "banner.direct" !== t ? this._triggerCallback("onSkipTokenReceived") : this._callbacks.onDirectSkipTokenReceived = function() {
                    return n._triggerCallback("onSkipTokenReceived")
                }, "banner.html.expand" === t && (t = "banner.expand.html");
                var o = this._getScriptSrcFromBundleName(t);
                m(o, function(t) {
                    var r = new t(n._win, e, n._callbacks);
                    r.renderTo(n._container), n._bundle = r
                })
            }
        },
        _getScriptSrcFromBundleName: function(t) {
            return t = t.replace(/\./g, "_"), y(_) + t + "/" + t + ".js"
        },
        _triggerCallback: function(t) {
            if ("onSkipTokenReceived" === t) {
                if (this._isSkipTokenReceived) return;
                this._isSkipTokenReceived = !0, clearTimeout(this._directTimeout)
            }
            if (this._callbacks[t]) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this._callbacks[t].apply(this._win, e)
            }
        }
    }, t.exports = o
}, function(t, e) {
    "use strict";

    function n(t) {
        var e = d[t];
        if (e) return e;
        c.href = t;
        var n = c.pathname || "";
        "/" !== n.charAt(0) && (n = "/" + n);
        var r = {
            href: c.href,
            protocol: c.protocol,
            host: c.host,
            hostname: c.hostname,
            port: c.port,
            pathname: n,
            search: c.search,
            hash: c.hash
        };
        return d[t] = r, s({}, r)
    }

    function r(t) {
        var e = {};
        t = t.replace(/^\?+/, "");
        for (var n = t.split("&"), r = 0; r < n.length; r++) {
            var o = n[r].indexOf("="),
                i = n[r].slice(0, o),
                a = n[r].slice(o + 1);
            if (i) try {
                e[i] = decodeURIComponent(a)
            } catch (t) {
                e[i] = a
            }
        }
        return e
    }

    function o(t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n + "=" + encodeURIComponent(t[n]));
        return "?" + e.join("&")
    }

    function i(t, e, i) {
        var a = n(t),
            s = r(a.search);
        return s[e] = i, a.protocol + "//" + ("443" === a.port ? a.hostname : a.host) + a.pathname + o(s) + a.hash
    }

    function a(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t = i(t, n, e[n]));
        return t
    }
    var s = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    };
    e.__esModule = !0;
    var c = document.createElement("a"),
        d = {};
    e.parseUrl = n, e.parseQueryString = r, e.formatQueryString = o, e.addParamToUrl = i, e.addParamsToUrl = a
}, function(t, e, n) {
    function r() {
        return window
    }

    function o(t) {
        return t.location.host
    }

    function i(t, e) {
        var n = r(),
            i = n.document;
        if (e) {
            var s = o(i);
            if ((" " + d + " ").indexOf(" " + s + " ") > -1) return e
        }
        var u = a(t, i);
        if ("t\n" === u && n.top !== n.self) try {
            u = a(t, n.parent.document)
        } catch (t) {}
        return c.encode(u, t)
    }

    function a(t, e) {
        var n = [],
            r = 0;
        n.push("t" + (e.title || "")), r += n[0].length;
        for (var o, i, a, c = 1; c < 4 && r < t; c++) {
            o = e.getElementsByTagName("h" + c), i = o.length;
            for (var d = 0; d < i; d++) a = s(o[d]), r += a.length, n.push(c + "" + a)
        }
        return n.join("\n") + "\n"
    }

    function s(t) {
        var e = "",
            n = [];
        if (!t) return e;
        for (n.push(t); n.length > 0;) {
            t = n.pop();
            var r = t.nodeType;
            if (3 !== r) {
                if (t.childNodes && t.childNodes.length > 0)
                    for (var o = t.childNodes, i = o.length, a = i - 1; a >= 0; a--) {
                        var s = o[a];
                        n.push(s)
                    }
            } else e += t.nodeValue + " "
        }
        return e.replace(/\s+/g, " ")
    }
    var c = n(23),
        d = "yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr";
    t.exports = i
}, function(t, e) {
    function n(t, e) {
        e = e || 1e6;
        var n, o, i, s, c, d, u, f = "",
            l = 0;
        for (t = r(t, 3 * e / 4 | 0); l < t.length;) n = t.charCodeAt(l++), o = t.charCodeAt(l++), i = t.charCodeAt(l++), s = n >> 2, c = (3 & n) << 4 | o >> 4, d = (15 & o) << 2 | i >> 6, u = 63 & i, isNaN(o) ? d = u = 64 : isNaN(i) && (u = 64), f = f + a.charAt(s) + a.charAt(c) + a.charAt(d) + a.charAt(u);
        return f
    }

    function r(t, e) {
        t = t.replace(/\r\n/g, "\n");
        for (var n, r = "", o = 0; o < t.length; o++) {
            var i = t.charCodeAt(o);
            if (i < 128 ? n = s(i) : i > 127 && i < 2048 ? (n = s(i >> 6 | 192), n += s(63 & i | 128)) : (n = s(i >> 12 | 224), n += s(i >> 6 & 63 | 128), n += s(63 & i | 128)), r.length + n.length > e) break;
            r += n
        }
        return r
    }

    function o(t) {
        var e, n, r, o, s, c, d, u = "",
            f = 0;
        for (t = t.replace(/[^A-Za-z0-9\-\_\=]/g, ""); f < t.length;) o = a.indexOf(t.charAt(f++)), s = a.indexOf(t.charAt(f++)), c = a.indexOf(t.charAt(f++)), d = a.indexOf(t.charAt(f++)), e = o << 2 | s >> 4, n = (15 & s) << 4 | c >> 2, r = (3 & c) << 6 | d, u += String.fromCharCode(e), 64 != c && (u += String.fromCharCode(n)), 64 != d && (u += String.fromCharCode(r));
        return i(u)
    }

    function i(t) {
        for (var e = "", n = 0, r = 0, o = 0; n < t.length;)
            if (r = t.charCodeAt(n), r < 128) e += String.fromCharCode(r), n++;
            else if (r > 191 && r < 224) o = t.charCodeAt(n + 1), e += String.fromCharCode((31 & r) << 6 | 63 & o), n += 2;
        else {
            o = t.charCodeAt(n + 1);
            var i = t.charCodeAt(n + 2);
            e += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i), n += 3
        }
        return e
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        s = String.fromCharCode;
    t.exports = {
        encode: n,
        decode: o
    }
}, function(t, e, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = n(25),
        i = o.loadScript,
        a = {},
        s = {},
        c = [],
        d = [],
        u = {
            PENDING: "PENDING",
            LOADED: "LOADED"
        },
        f = function() {
            var t = function(t) {
                c.push(t)
            };
            return function() {
                var e = document.documentElement;
                e.codeLoader = e.codeLoader || t
            }
        }(),
        l = function(t) {
            a[t] = u.PENDING, i(window, t, function() {
                var e = c.shift();
                if (!e) throw new Error('loader: error of loading "' + t + '"');
                h(t, e), s[t] = e, a[t] = u.LOADED
            })
        },
        h = function(t, e) {
            for (var n = [], r = void 0, o = 0; o < d.length; o++) r = d[o], r.fileName === t ? r.callback(e) : n.push(r);
            d = n
        },
        p = function(t, e) {
            d.push({
                fileName: t,
                callback: e
            })
        };
    t.exports = function(t) {
        if ("object" !== ("undefined" == typeof t ? "undefined" : r(t))) throw new Error('"namespace" should be an object type');
        if ("function" == typeof t.moduleLoad) return t.moduleLoad;
        var e = function(t, e) {
            switch (a[t]) {
                case u.LOADED:
                    e(s[t]);
                    break;
                case u.PENDING:
                    p(t, e);
                    break;
                default:
                    f(), p(t, e), l(t)
            }
        };
        return t.moduleLoad = e, e
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = t.document,
            o = "script",
            i = r.createElement(o),
            s = a(r, o) || r.body;
        i.src = e, i.crossorigin = "anonymous", i.onload = i.onreadystatechange = function() {
            this.readyState && "complete" !== this.readyState && "loaded" !== this.readyState || (i.onload = i.onreadystatechange = null, "function" == typeof n && n())
        }, s.parentNode.insertBefore(i, s)
    }

    function o(t, e, n) {
        var r = t.document,
            o = "script",
            i = r.createElement(o),
            s = a(r, o) || r.body;
        i.text = e, s.parentNode.insertBefore(i, s), n()
    }
    var i = n(14),
        a = i.elementByTag;
    t.exports = {
        loadScript: r,
        executeScript: o
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        this._win = e, this._doc = e.document, this._pr1 = t, this._container = n, this._callbacks = {}, this._isDestroyed = !1
    }
    var o = n(3),
        i = o.addEvent,
        a = o.removeEvent,
        s = n(4),
        c = s.isFirefox,
        d = "adfox_transport_";
    r.prototype = {
        constructor: r,
        setPrepareCodeUrl: function(t) {
            this._prepareCodeUrl = t, this._init()
        },
        destroy: function() {
            this._isDestroyed = !0, this._beforeDestroy(), this._removeSandbox()
        },
        setCallbacks: function(t) {
            this._callbacks = t
        },
        _triggerCallback: function(t, e) {
            if (!this._isDestroyed) {
                if ("error" === t && (this._isCatchError = !0, this._isLoad || (this._closeSandboxDocument(), e.type = "adfoxBackend")), "load" === t && (this._isLoad = !0, this._isCatchError)) return;
                this._callbacks[t] && this._callbacks[t](e)
            }
        },
        _getSandbox: function() {
            return this._sandbox || (this._sandbox = this._doc.createElement("iframe"), this._sandbox.id = "AdFox_iframe_" + this._pr1, this._sandbox.name = d + this._pr1, this._sandbox.style.display = "none", this._container.appendChild(this._sandbox)), this._sandbox
        },
        _init: function() {
            var t = this;
            this._isDestroyed = !1;
            var e = this._getSandbox();
            c ? e.contentWindow.onload = function() {
                e.contentWindow.onload = null, t._insertContent(e)
            } : this._insertContent(e)
        },
        _insertContent: function(t) {
            var e = this._getPrepareCode(),
                n = this._getReadyCode(),
                r = t.contentDocument;
            this._isSandboxOpen = !0, r.open(), this._addSandboxEventListener(), r.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />'), r.write(e), r.write(n)
        },
        _addSandboxEventListener: function() {
            var t = this,
                e = this._sandbox.contentWindow;
            this._errorListener = function(e) {
                t._triggerCallback("error", {
                    type: "userScriptError",
                    message: e.message || "Script error in frame"
                })
            }, i(e, "error", this._errorListener), e.onPrepareCodeError = function() {
                t._triggerCallback("error", {
                    type: "adfoxBackend",
                    message: "Can't load AdFox prepare code"
                })
            }, e.onPrepareCodeLoad = function() {
                a(e, "error", t._errorListener), t._triggerCallback("load")
            }, e.loadAdFoxBundle = function(e) {
                t._triggerCallback("success", e)
            }
        },
        _getReadyCode: function() {
            return "<script>if(window.onPrepareCodeLoad){window.onPrepareCodeLoad()}</script>"
        },
        _getPrepareCode: function() {
            return '<script src="' + this._prepareCodeUrl + '" onerror="window.onPrepareCodeError()"></script>'
        },
        _beforeDestroy: function() {
            if (this._sandbox) {
                var t = this._sandbox.contentWindow;
                t && "function" == typeof t.adfoxRemoveBanner && t.adfoxRemoveBanner()
            }
        },
        _removeSandbox: function() {
            this._sandbox && (this._closeSandboxDocument(), this._sandbox.parentNode && this._sandbox.parentNode.removeChild(this._sandbox), this._sandbox = null)
        },
        _closeSandboxDocument: function() {
            this._isSandboxOpen && (this._sandbox.contentDocument && this._sandbox.contentDocument.close(), this._isSandboxOpen = !1)
        }
    }, t.exports = r
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e = n.p;
        return a.indexOf("betastatic.yastatic.net") !== -1 && (e = e.replace("yastatic", "betastatic.yastatic")), e += "0." + t + "/"
    }
    var o = n(14).getCurrentScript,
        i = o(document),
        a = i && i.src || "";
    t.exports = r
}, function(t, e, n) {
    var r = n(29);
    t.exports = function() {
        var t = [],
            e = !1,
            n = function(t) {
                r("queue", t, void 0, o)()
            },
            o = function() {
                t.length ? n(function() {
                    t.shift()(o)
                }) : e = !1
            };
        return {
            add: function(r) {
                e ? t.push(r) : (e = !0, n(function() {
                    r(o)
                }))
            }
        }
    }
}, function(t, e, n) {
    function r(t, e, n, i) {
        return function() {
            try {
                return e.apply(n || this, arguments)
            } catch (e) {
                if (o(i) && i(e), e.preventProtect === !0) throw e;
                r.log(e, t)
            }
        }
    }
    var o = n(30);
    r.log = function(t, e) {
        console.log("LOG:" + e + ":" + t)
    }, r.setTimeout = function(t, e, n, o) {
        return window.setTimeout(r("timeout", t, n, o), e)
    }, t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return "[object Function]" === {}.toString.call(t)
    }
}, function(t, e) {
    "use strict";
    t.exports = {
        "www.infox.tv": !0,
        "infox.tv": !0,
        "www.infox.ru": !0,
        "infox.ru": !0,
        "www.infox.sg": !0,
        "infox.sg": !0
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        this._counterId = t, this._yaCounterNs = "yaCounter" + t, this._isInited = !1
    }
    var o = "yandex_metrika_callbacks",
        i = ["addFileExtension", "extLink", "file", "hit", "notBounce", "params", "userParams", "setUserID", "getClientID", "reachGoal", "replacePhones"],
        a = {},
        s = n(25).loadScript;
    window.Ya && window.Ya.Metrika || s(window, "https://mc.yandex.ru/metrika/watch.js", function() {
        var t = void 0;
        for (t in a) a.hasOwnProperty(t) && (a[t]._isInited || a[t]._initCounter())
    }), r.prototype._initCounter = function() {
        return this._isInited || (window[this._yaCounterNs] = new window.Ya.Metrika({
            id: this._counterId
        }), this._isInited = !0), window[this._yaCounterNs]
    }, r.prototype._apply = function(t, e) {
        window[this._yaCounterNs][t].apply(window[this._yaCounterNs], e)
    }, r.prototype._createAndApply = function(t, e) {
        this._initCounter(), this._apply(t, e)
    };
    for (var c = function(t) {
            var e = i[t];
            r.prototype[e] = function() {
                for (var t = this, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                window[this._yaCounterNs] ? this._apply(e, r) : window.Ya && window.Ya.Metrika ? this._createAndApply(e, r) : (window[o] = window[o] || [], window[o].push(function() {
                    try {
                        t._createAndApply(e, r)
                    } catch (t) {}
                }))
            }
        }, d = 0; d < i.length; d++) c(d);
    t.exports = {
        McProxy: r,
        create: function(t) {
            return a[t] || (a[t] = new r(t)), a[t]
        }
    }
}]);
