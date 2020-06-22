/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).tf = t.tf || {})
}(this, (function(t) {
    "use strict";
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, n)
    };
    function n(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n),
        t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
        new r)
    }
    function r(t, e, n, r) {
        return new (n || (n = Promise))((function(o, a) {
            function i(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    a(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    a(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n((function(e) {
                    e(t.value)
                }
                )).then(i, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        ))
    }
    function o(t, e) {
        var n, r, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }
        ),
        a;
        function u(a) {
            return function(u) {
                return function(a) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; i; )
                        try {
                            if (n = 1,
                            r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, a[1])).done)
                                return o;
                            switch (r = 0,
                            o && (a = [2 & a[0], o.value]),
                            a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++,
                                {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                r = a[1],
                                a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (!(o = i.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1],
                                    o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2],
                                    i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            a = e.call(t, i)
                        } catch (t) {
                            a = [6, t],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & a[0])
                        throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    }
    var a, i = function() {
        function t(t) {
            this.global = t,
            this.flags = {},
            this.flagRegistry = {},
            this.urlFlags = {},
            this.populateURLFlags()
        }
        return t.prototype.setPlatform = function(t, e) {
            null != this.platform && console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + e + "."),
            this.platformName = t,
            this.platform = e
        }
        ,
        t.prototype.registerFlag = function(t, e, n) {
            if (this.flagRegistry[t] = {
                evaluationFn: e,
                setHook: n
            },
            null != this.urlFlags[t]) {
                var r = this.urlFlags[t];
                console.warn("Setting feature override from URL " + t + ": " + r + "."),
                this.set(t, r)
            }
        }
        ,
        t.prototype.getAsync = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t in this.flags ? [2, this.flags[t]] : (e = this.flags,
                        n = t,
                        [4, this.evaluateFlag(t)]);
                    case 1:
                        return e[n] = r.sent(),
                        [2, this.flags[t]]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.get = function(t) {
            if (t in this.flags)
                return this.flags[t];
            var e = this.evaluateFlag(t);
            if (e instanceof Promise)
                throw new Error("Flag " + t + " cannot be synchronously evaluated. Please use getAsync() instead.");
            return this.flags[t] = e,
            this.flags[t]
        }
        ,
        t.prototype.getNumber = function(t) {
            return this.get(t)
        }
        ,
        t.prototype.getBool = function(t) {
            return this.get(t)
        }
        ,
        t.prototype.getFlags = function() {
            return this.flags
        }
        ,
        Object.defineProperty(t.prototype, "features", {
            get: function() {
                return this.flags
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.set = function(t, e) {
            if (null == this.flagRegistry[t])
                throw new Error("Cannot set flag " + t + " as it has not been registered.");
            this.flags[t] = e,
            null != this.flagRegistry[t].setHook && this.flagRegistry[t].setHook(e)
        }
        ,
        t.prototype.evaluateFlag = function(t) {
            if (null == this.flagRegistry[t])
                throw new Error("Cannot evaluate flag '" + t + "': no evaluation function found.");
            return this.flagRegistry[t].evaluationFn()
        }
        ,
        t.prototype.setFlags = function(t) {
            this.flags = Object.assign({}, t)
        }
        ,
        t.prototype.reset = function() {
            this.flags = {},
            this.urlFlags = {},
            this.populateURLFlags()
        }
        ,
        t.prototype.populateURLFlags = function() {
            var t = this;
            if (void 0 !== this.global && void 0 !== this.global.location && void 0 !== this.global.location.search) {
                var e, n, r = (e = this.global.location.search,
                n = {},
                e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (function(t) {
                    for (var e = [], r = 1; r < arguments.length; r++)
                        e[r - 1] = arguments[r];
                    return u(n, e[0], e[1]),
                    e.join("=")
                }
                )),
                n);
                if ("tfjsflags"in r)
                    r.tfjsflags.split(",").forEach((function(e) {
                        var n = e.split(":")
                          , r = n[0]
                          , o = n[1];
                        t.urlFlags[r] = function(t, e) {
                            if ("true" === (e = e.toLowerCase()) || "false" === e)
                                return "true" === e;
                            if ("" + +e === e)
                                return +e;
                            throw new Error("Could not parse value flag value " + e + " for flag " + t + ".")
                        }(r, o)
                    }
                    ))
            }
        }
        ,
        t
    }();
    function u(t, e, n) {
        t[decodeURIComponent(e)] = decodeURIComponent(n || "")
    }
    function s() {
        return t.ENV
    }
    function c() {
        if (null == a) {
            var t = void 0;
            if ("undefined" != typeof window)
                t = window;
            else if ("undefined" != typeof global)
                t = global;
            else if ("undefined" != typeof process)
                t = process;
            else {
                if ("undefined" == typeof self)
                    throw new Error("Could not find a global object");
                t = self
            }
            a = t
        }
        return a
    }
    function l(t, e) {
        var n, r = (null == (n = c())._tfGlobals && (n._tfGlobals = new Map),
        n._tfGlobals);
        if (r.has(t))
            return r.get(t);
        var o = e();
        return r.set(t, o),
        r.get(t)
    }
    t.ENV = null;
    var f = l("kernelRegistry", (function() {
        return new Map
    }
    ))
      , p = l("gradRegistry", (function() {
        return new Map
    }
    ));
    function h(t, e) {
        var n = g(t, e);
        return f.get(n)
    }
    function d(t) {
        return p.get(t)
    }
    function v(t) {
        for (var e = f.entries(), n = []; ; ) {
            var r = e.next()
              , o = r.done
              , a = r.value;
            if (o)
                break;
            var i = a[0]
              , u = a[1];
            i.split("_")[0] === t && n.push(u)
        }
        return n
    }
    function m(t) {
        var e = t.kernelName;
        p.has(e) && console.warn("Overriding the gradient for '" + e + "'"),
        p.set(e, t)
    }
    function g(t, e) {
        return e + "_" + t
    }
    function y(t) {
        for (var e = t.length, n = 0, r = 0; e > 0; )
            r = Math.random() * e | 0,
            n = t[--e],
            t[e] = t[r],
            t[r] = n
    }
    function b(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }
    function w(t, e) {
        if (!t)
            throw new Error("string" == typeof e ? e : e())
    }
    function k(t, e, n) {
        void 0 === n && (n = ""),
        w(D(t, e), (function() {
            return n + " Shapes " + t + " and " + e + " must match"
        }
        ))
    }
    function x(t) {
        w(null != t, (function() {
            return "The input to the tensor constructor must be a non-null value."
        }
        ))
    }
    function E(t, e, n) {
        if (void 0 === e && (e = []),
        void 0 === n && (n = !1),
        null == e && (e = []),
        Array.isArray(t) || P(t) && !n)
            for (var r = 0; r < t.length; ++r)
                E(t[r], e, n);
        else
            e.push(t);
        return e
    }
    function S(t) {
        if (0 === t.length)
            return 1;
        for (var e = t[0], n = 1; n < t.length; n++)
            e *= t[n];
        return e
    }
    function D(t, e) {
        if (t === e)
            return !0;
        if (null == t || null == e)
            return !1;
        if (t.length !== e.length)
            return !1;
        for (var n = 0; n < t.length; n++)
            if (t[n] !== e[n])
                return !1;
        return !0
    }
    function I(t) {
        return t % 1 == 0
    }
    function N(t, e) {
        return e <= t.length ? t : t + " ".repeat(e - t.length)
    }
    function F(t, e) {
        for (var n = 1, r = -1, o = 0; o < t.length; ++o)
            if (t[o] >= 0)
                n *= t[o];
            else if (-1 === t[o]) {
                if (-1 !== r)
                    throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + o);
                r = o
            } else if (t[o] < 0)
                throw Error("Shapes can not be < 0. Found " + t[o] + " at dim " + o);
        if (-1 === r) {
            if (e > 0 && e !== n)
                throw Error("Size(" + e + ") must match the product of shape " + t);
            return t
        }
        if (0 === n)
            throw Error("Cannot infer the missing size in [" + t + "] when there are 0 elements");
        if (e % n != 0)
            throw Error("The implicit shape can't be a fractional number. Got " + e + " / " + n);
        var a = t.slice();
        return a[r] = e / n,
        a
    }
    function M(t, e) {
        var n = e.length;
        return w((t = null == t ? e.map((function(t, e) {
            return e
        }
        )) : [].concat(t)).every((function(t) {
            return t >= -n && t < n
        }
        )), (function() {
            return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + t
        }
        )),
        w(t.every((function(t) {
            return I(t)
        }
        )), (function() {
            return "All values in axis param must be integers but got axis " + t
        }
        )),
        t.map((function(t) {
            return t < 0 ? n + t : t
        }
        ))
    }
    function A(t, e) {
        for (var n = [], r = [], o = null != e && Array.isArray(e) && 0 === e.length, a = null == e || o ? null : M(e, t).sort(), i = 0, u = 0; u < t.length; ++u) {
            if (null != a) {
                if (a[i] === u && 1 !== t[u])
                    throw new Error("Can't squeeze axis " + u + " since its dim '" + t[u] + "' is not 1");
                (null == a[i] || a[i] > u) && 1 === t[u] && (n.push(t[u]),
                r.push(u)),
                a[i] <= u && i++
            }
            1 !== t[u] && (n.push(t[u]),
            r.push(u))
        }
        return {
            newShape: n,
            keptDims: r
        }
    }
    function _(t, e) {
        var n = null;
        if (null == t || "float32" === t)
            n = new Float32Array(e);
        else if ("int32" === t)
            n = new Int32Array(e);
        else {
            if ("bool" !== t)
                throw new Error("Unknown data type " + t);
            n = new Uint8Array(e)
        }
        return n
    }
    function T(t, e) {
        var n = null;
        if (null == t || "float32" === t)
            n = new Float32Array(e);
        else if ("int32" === t)
            n = new Int32Array(e);
        else if ("bool" === t)
            n = new Uint8Array(e);
        else {
            if ("string" !== t)
                throw new Error("Unknown data type " + t);
            n = new Array(e)
        }
        return n
    }
    function B(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (isNaN(r) || !isFinite(r))
                throw Error("A tensor of type " + e + " being uploaded contains " + r + ".")
        }
    }
    function C(t) {
        return "bool" === t || "complex64" === t || "float32" === t || "int32" === t || "string" === t
    }
    function R(t, e) {
        return "complex64" !== e && (("float32" !== e || "complex64" === t) && (("int32" !== e || "float32" === t || "complex64" === t) && ("bool" !== e || "bool" !== t)))
    }
    function P(t) {
        return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array
    }
    function q(t) {
        if ("float32" === t || "int32" === t)
            return 4;
        if ("complex64" === t)
            return 8;
        if ("bool" === t)
            return 1;
        throw new Error("Unknown dtype " + t)
    }
    function z(t) {
        if (null == t)
            return 0;
        var e = 0;
        return t.forEach((function(t) {
            return e += t.length
        }
        )),
        e
    }
    function L(t) {
        return "string" == typeof t || t instanceof String
    }
    function O(t) {
        return "boolean" == typeof t
    }
    function W(t) {
        return "number" == typeof t
    }
    function K(t) {
        return Array.isArray(t) ? K(t[0]) : t instanceof Float32Array ? "float32" : t instanceof Int32Array || t instanceof Uint8Array ? "int32" : W(t) ? "float32" : L(t) ? "string" : O(t) ? "bool" : "float32"
    }
    function G(t) {
        return !!(t && t.constructor && t.call && t.apply)
    }
    function U(t, e) {
        for (var n = e; n < t; ++n)
            if (t % n == 0)
                return n;
        return t
    }
    function H(t) {
        var e = t.length;
        if (e < 2)
            return [];
        var n = new Array(e - 1);
        n[e - 2] = t[e - 1];
        for (var r = e - 3; r >= 0; --r)
            n[r] = n[r + 1] * t[r + 1];
        return n
    }
    function V(t, e, n) {
        if ("string" === e)
            throw new Error("Cannot convert a string[] to a TypedArray");
        if (Array.isArray(t) && (t = E(t)),
        n && B(t, e),
        function(t, e) {
            return t instanceof Float32Array && "float32" === e || t instanceof Int32Array && "int32" === e || t instanceof Uint8Array && "bool" === e
        }(t, e))
            return t;
        if (null == e || "float32" === e || "complex64" === e)
            return new Float32Array(t);
        if ("int32" === e)
            return new Int32Array(t);
        if ("bool" === e) {
            for (var r = new Uint8Array(t.length), o = 0; o < r.length; ++o)
                0 !== Math.round(t[o]) && (r[o] = 1);
            return r
        }
        throw new Error("Unknown data type " + e)
    }
    function j(t, e) {
        if (0 === t.length)
            return e[0];
        var n = t.reduce((function(t, e) {
            return t * e
        }
        ));
        if (0 === n)
            return [];
        if (n !== e.length)
            throw new Error("[" + t + "] does not match the input size.");
        return function t(e, n, r) {
            var o = new Array;
            if (1 === n.length)
                for (var a = n[0], i = 0; i < a; i++)
                    o[i] = r[e + i];
            else {
                a = n[0];
                var u = n.slice(1)
                  , s = u.reduce((function(t, e) {
                    return t * e
                }
                ));
                for (i = 0; i < a; i++)
                    o[i] = t(e + i * s, u, r)
            }
            return o
        }(0, t, e)
    }
    function $(t, e) {
        for (var n = J(t, e), r = 0; r < n.length; r++)
            n[r] = 1;
        return n
    }
    function J(t, e) {
        if (null == e || "float32" === e || "complex64" === e)
            return new Float32Array(t);
        if ("int32" === e)
            return new Int32Array(t);
        if ("bool" === e)
            return new Uint8Array(t);
        throw new Error("Unknown data type " + e)
    }
    function Y() {
        return s().platform.now()
    }
    function X(t) {
        t.forEach((function(e) {
            w(Number.isInteger(e) && e >= 0, (function() {
                return "Tensor must have a shape comprised of positive integers but got shape [" + t + "]."
            }
            ))
        }
        ))
    }
    function Z(t, e) {
        return void 0 === e && (e = "utf-8"),
        e = e || "utf-8",
        s().platform.encode(t, e)
    }
    function Q(t, e) {
        return void 0 === e && (e = "utf-8"),
        e = e || "utf-8",
        s().platform.decode(t, e)
    }
    var tt = {
        __proto__: null,
        shuffle: y,
        clamp: b,
        nearestLargerEven: function(t) {
            return t % 2 == 0 ? t : t + 1
        },
        sum: function(t) {
            for (var e = 0, n = 0; n < t.length; n++)
                e += t[n];
            return e
        },
        randUniform: function(t, e) {
            var n = Math.random();
            return e * n + (1 - n) * t
        },
        distSquared: function(t, e) {
            for (var n = 0, r = 0; r < t.length; r++) {
                var o = Number(t[r]) - Number(e[r]);
                n += o * o
            }
            return n
        },
        assert: w,
        assertShapesMatch: k,
        assertNonNull: x,
        flatten: E,
        sizeFromShape: S,
        isScalarShape: function(t) {
            return 0 === t.length
        },
        arraysEqual: D,
        isInt: I,
        tanh: function(t) {
            if (null != Math.tanh)
                return Math.tanh(t);
            if (t === 1 / 0)
                return 1;
            if (t === -1 / 0)
                return -1;
            var e = Math.exp(2 * t);
            return (e - 1) / (e + 1)
        },
        sizeToSquarishShape: function(t) {
            var e = Math.ceil(Math.sqrt(t));
            return [e, Math.ceil(t / e)]
        },
        createShuffledIndices: function(t) {
            for (var e = new Uint32Array(t), n = 0; n < t; ++n)
                e[n] = n;
            return y(e),
            e
        },
        rightPad: N,
        repeatedTry: function(t, e, n) {
            return void 0 === e && (e = function(t) {
                return 0
            }
            ),
            new Promise((function(r, o) {
                var a = 0
                  , i = function() {
                    if (t())
                        r();
                    else {
                        a++;
                        var u = e(a);
                        null != n && a >= n ? o() : setTimeout(i, u)
                    }
                };
                i()
            }
            ))
        },
        inferFromImplicitShape: F,
        parseAxisParam: M,
        squeezeShape: A,
        getTypedArrayFromDType: _,
        getArrayFromDType: T,
        checkConversionForErrors: B,
        isValidDtype: C,
        hasEncodingLoss: R,
        isTypedArray: P,
        bytesPerElement: q,
        bytesFromStringArray: z,
        isString: L,
        isBoolean: O,
        isNumber: W,
        inferDtype: K,
        isFunction: G,
        nearestDivisor: U,
        computeStrides: H,
        toTypedArray: V,
        toNestedArray: j,
        makeOnesTypedArray: $,
        makeZerosTypedArray: J,
        now: Y,
        assertNonNegativeIntegerDimensions: X,
        fetch: function(t, e) {
            return s().platform.fetch(t, e)
        },
        encodeString: Z,
        decodeString: Q,
        locToIndex: function(t, e, n) {
            if (0 === e)
                return 0;
            if (1 === e)
                return t[0];
            for (var r = t[t.length - 1], o = 0; o < t.length - 1; ++o)
                r += n[o] * t[o];
            return r
        },
        indexToLoc: function(t, e, n) {
            if (0 === e)
                return [];
            if (1 === e)
                return [t];
            for (var r = new Array(e), o = 0; o < r.length - 1; ++o)
                r[o] = Math.floor(t / n[o]),
                t -= r[o] * n[o];
            return r[r.length - 1] = t,
            r
        }
    }
      , et = function() {
        function t(t, e) {
            this.backendTimer = t,
            this.logger = e,
            null == e && (this.logger = new nt)
        }
        return t.prototype.profileKernel = function(t, e, n) {
            var r, o = this, a = this.backendTimer.time((function() {
                r = n()
            }
            ));
            return r.forEach((function(n) {
                n.data().then((function(r) {
                    !function(t, e, n) {
                        if ("float32" !== e)
                            return !1;
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            if (isNaN(o) || !isFinite(o))
                                return console.warn("Found " + o + " in the result of '" + n + "'"),
                                !0
                        }
                    }(r, n.dtype, t),
                    a.then((function(a) {
                        var i = "";
                        null != a.getExtraProfileInfo && (i = a.getExtraProfileInfo()),
                        o.logger.logKernelProfile(t, n, r, a.kernelMs, e, i)
                    }
                    ))
                }
                ))
            }
            )),
            r
        }
        ,
        t
    }();
    var nt = function() {
        function t() {}
        return t.prototype.logKernelProfile = function(t, e, n, r, o, a) {
            var i = "number" == typeof r ? N(r + "ms", 9) : r.error
              , u = N(t, 25)
              , s = e.rank
              , c = e.size
              , l = N(e.shape.toString(), 14)
              , f = "";
            for (var p in o) {
                var h = o[p].shape || e.shape
                  , d = h.length;
                f += p + ": " + d + "D " + (d > 0 ? h : "") + " "
            }
            console.log("%c" + u + "\t%c" + i + "\t%c" + s + "D " + l + "\t%c" + c + "\t%c" + f + "\t%c" + a, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue")
        }
        ,
        t
    }();
    function rt(t, e, n, r) {
        var o = H(e)
          , a = function(t, e, n, r) {
            var o = S(e)
              , a = r[r.length - 1]
              , i = new Array(a).fill(0)
              , u = e.length
              , s = "complex64" === n ? it(t) : t;
            if (u > 1)
                for (var c = 0; c < o / a; c++)
                    for (var l = c * a, f = 0; f < a; f++)
                        i[f] = Math.max(i[f], ot(s[l + f], 0, n).length);
            return i
        }(t, e, n, o)
          , i = e.length
          , u = function t(e, n, r, o, a, i) {
            void 0 === i && (i = !0);
            var u = "complex64" === r ? 2 : 1
              , s = n[0]
              , c = n.length;
            if (0 === c) {
                return "complex64" === r ? [ot(it(e)[0], 0, r)] : "bool" === r ? [at(e[0])] : [e[0].toString()]
            }
            if (1 === c) {
                if (s > 20) {
                    var l = 3 * u
                      , f = Array.from(e.slice(0, l))
                      , p = Array.from(e.slice((s - 3) * u, s * u));
                    return "complex64" === r && (f = it(f),
                    p = it(p)),
                    ["[" + f.map((function(t, e) {
                        return ot(t, a[e], r)
                    }
                    )).join(", ") + ", ..., " + p.map((function(t, e) {
                        return ot(t, a[s - 3 + e], r)
                    }
                    )).join(", ") + "]"]
                }
                return ["[" + ("complex64" === r ? it(e) : Array.from(e)).map((function(t, e) {
                    return ot(t, a[e], r)
                }
                )).join(", ") + "]"]
            }
            var h = n.slice(1)
              , d = o.slice(1)
              , v = o[0] * u
              , m = [];
            if (s > 20) {
                for (var g = 0; g < 3; g++) {
                    var y = (b = g * v) + v;
                    m.push.apply(m, t(e.slice(b, y), h, r, d, a, !1))
                }
                m.push("...");
                for (g = s - 3; g < s; g++) {
                    y = (b = g * v) + v;
                    m.push.apply(m, t(e.slice(b, y), h, r, d, a, g === s - 1))
                }
            } else
                for (g = 0; g < s; g++) {
                    var b;
                    y = (b = g * v) + v;
                    m.push.apply(m, t(e.slice(b, y), h, r, d, a, g === s - 1))
                }
            var w = 2 === c ? "," : "";
            m[0] = "[" + m[0] + w;
            for (g = 1; g < m.length - 1; g++)
                m[g] = " " + m[g] + w;
            var k = ",\n";
            for (g = 2; g < c; g++)
                k += "\n";
            return m[m.length - 1] = " " + m[m.length - 1] + "]" + (i ? "" : k),
            m
        }(t, e, n, o, a)
          , s = ["Tensor"];
        return r && (s.push("  dtype: " + n),
        s.push("  rank: " + i),
        s.push("  shape: [" + e + "]"),
        s.push("  values:")),
        s.push(u.map((function(t) {
            return "    " + t
        }
        )).join("\n")),
        s.join("\n")
    }
    function ot(t, e, n) {
        return N(Array.isArray(t) ? parseFloat(t[0].toFixed(7)) + " + " + parseFloat(t[1].toFixed(7)) + "j" : L(t) ? "'" + t + "'" : "bool" === n ? at(t) : parseFloat(t.toFixed(7)).toString(), e)
    }
    function at(t) {
        return 0 === t ? "false" : "true"
    }
    function it(t) {
        for (var e = [], n = 0; n < t.length; n += 2)
            e.push([t[n], t[n + 1]]);
        return e
    }
    var ut = function() {
        function t(t, e, n) {
            var r = this;
            if (this.dtype = e,
            this.shape = t.slice(),
            this.size = S(t),
            null != n) {
                var o = n.length;
                w(o === this.size, (function() {
                    return "Length of values '" + o + "' does not match the size inferred by the shape '" + r.size + "'."
                }
                ))
            }
            if ("complex64" === e)
                throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
            this.values = n || T(e, this.size),
            this.strides = H(t)
        }
        return t.prototype.set = function(t) {
            for (var e = this, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            0 === n.length && (n = [0]),
            w(n.length === this.rank, (function() {
                return "The number of provided coordinates (" + n.length + ") must match the rank (" + e.rank + ")"
            }
            ));
            var o = this.locToIndex(n);
            this.values[o] = t
        }
        ,
        t.prototype.get = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            0 === t.length && (t = [0]);
            for (var n = 0, r = 0, o = t; r < o.length; r++) {
                var a = o[r];
                if (a < 0 || a >= this.shape[n]) {
                    var i = "Requested out of range element at " + t + ".   Buffer shape=" + this.shape;
                    throw new Error(i)
                }
                n++
            }
            for (var u = t[t.length - 1], s = 0; s < t.length - 1; ++s)
                u += this.strides[s] * t[s];
            return this.values[u]
        }
        ,
        t.prototype.locToIndex = function(t) {
            if (0 === this.rank)
                return 0;
            if (1 === this.rank)
                return t[0];
            for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n)
                e += this.strides[n] * t[n];
            return e
        }
        ,
        t.prototype.indexToLoc = function(t) {
            if (0 === this.rank)
                return [];
            if (1 === this.rank)
                return [t];
            for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n)
                e[n] = Math.floor(t / this.strides[n]),
                t -= e[n] * this.strides[n];
            return e[e.length - 1] = t,
            e
        }
        ,
        Object.defineProperty(t.prototype, "rank", {
            get: function() {
                return this.shape.length
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.toTensor = function() {
            return st().makeTensor(this.values, this.shape, this.dtype)
        }
        ,
        t
    }()
      , st = null
      , ct = null;
    var lt = function() {
        function t(t, e, n, r) {
            this.kept = !1,
            this.isDisposedInternal = !1,
            this.shape = t.slice(),
            this.dtype = e || "float32",
            this.size = S(t),
            this.strides = H(t),
            this.dataId = n,
            this.id = r,
            this.rankType = this.rank < 5 ? this.rank.toString() : "higher"
        }
        return t.prototype.flatten = function() {
            return this.throwIfDisposed(),
            this.as1D()
        }
        ,
        t.prototype.asScalar = function() {
            return this.throwIfDisposed(),
            w(1 === this.size, (function() {
                return "The array must have only 1 element."
            }
            )),
            this.reshape([])
        }
        ,
        t.prototype.as1D = function() {
            return this.throwIfDisposed(),
            this.reshape([this.size])
        }
        ,
        t.prototype.as2D = function(t, e) {
            return this.throwIfDisposed(),
            this.reshape([t, e])
        }
        ,
        t.prototype.as3D = function(t, e, n) {
            return this.throwIfDisposed(),
            this.reshape([t, e, n])
        }
        ,
        t.prototype.as4D = function(t, e, n, r) {
            return this.throwIfDisposed(),
            this.reshape([t, e, n, r])
        }
        ,
        t.prototype.as5D = function(t, e, n, r, o) {
            return this.throwIfDisposed(),
            this.reshape([t, e, n, r, o])
        }
        ,
        t.prototype.asType = function(t) {
            return this.throwIfDisposed(),
            ct.cast(this, t)
        }
        ,
        Object.defineProperty(t.prototype, "rank", {
            get: function() {
                return this.shape.length
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.buffer = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return t = e.sent(),
                        [2, ct.buffer(this.shape, this.dtype, t)]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.bufferSync = function() {
            return ct.buffer(this.shape, this.dtype, this.dataSync())
        }
        ,
        t.prototype.array = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return t = e.sent(),
                        [2, j(this.shape, t)]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.arraySync = function() {
            return j(this.shape, this.dataSync())
        }
        ,
        t.prototype.data = function() {
            return r(this, void 0, void 0, (function() {
                var t, e;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        t = st().read(this.dataId),
                        "string" !== this.dtype ? [3, 2] : [4, t];
                    case 1:
                        e = n.sent();
                        try {
                            return [2, e.map((function(t) {
                                return Q(t)
                            }
                            ))]
                        } catch (t) {
                            throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                        }
                        n.label = 2;
                    case 2:
                        return [2, t]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.dataSync = function() {
            this.throwIfDisposed();
            var t = st().readSync(this.dataId);
            if ("string" === this.dtype)
                try {
                    return t.map((function(t) {
                        return Q(t)
                    }
                    ))
                } catch (t) {
                    throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                }
            return t
        }
        ,
        t.prototype.bytes = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        [4, st().read(this.dataId)];
                    case 1:
                        return t = e.sent(),
                        "string" === this.dtype ? [2, t] : [2, new Uint8Array(t.buffer)]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.dispose = function() {
            this.isDisposed || (st().disposeTensor(this),
            this.isDisposedInternal = !0)
        }
        ,
        Object.defineProperty(t.prototype, "isDisposed", {
            get: function() {
                return this.isDisposedInternal
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.throwIfDisposed = function() {
            if (this.isDisposed)
                throw new Error("Tensor is disposed.")
        }
        ,
        t.prototype.toFloat = function() {
            return this.asType("float32")
        }
        ,
        t.prototype.toInt = function() {
            return this.asType("int32")
        }
        ,
        t.prototype.toBool = function() {
            return this.asType("bool")
        }
        ,
        t.prototype.print = function(t) {
            return void 0 === t && (t = !1),
            ct.print(this, t)
        }
        ,
        t.prototype.reshape = function(t) {
            return this.throwIfDisposed(),
            ct.reshape(this, t)
        }
        ,
        t.prototype.reshapeAs = function(t) {
            return this.throwIfDisposed(),
            this.reshape(t.shape)
        }
        ,
        t.prototype.expandDims = function(t) {
            return void 0 === t && (t = 0),
            ct.expandDims(this, t)
        }
        ,
        t.prototype.squeeze = function(t) {
            return this.throwIfDisposed(),
            ct.squeeze(this, t)
        }
        ,
        t.prototype.clone = function() {
            return this.throwIfDisposed(),
            ct.clone(this)
        }
        ,
        t.prototype.toString = function(t) {
            return void 0 === t && (t = !1),
            rt(this.dataSync(), this.shape, this.dtype, t)
        }
        ,
        t.prototype.gather = function(t, e) {
            return void 0 === e && (e = 0),
            this.throwIfDisposed(),
            ct.gather(this, t, e)
        }
        ,
        t.prototype.norm = function(t, e, n) {
            return void 0 === t && (t = "euclidean"),
            void 0 === e && (e = null),
            void 0 === n && (n = !1),
            this.throwIfDisposed(),
            ct.norm(this, t, e, n)
        }
        ,
        t.prototype.slice = function(t, e) {
            return this.throwIfDisposed(),
            ct.slice(this, t, e)
        }
        ,
        t.prototype.reverse = function(t) {
            return this.throwIfDisposed(),
            ct.reverse(this, t)
        }
        ,
        t.prototype.stack = function(t, e) {
            return void 0 === e && (e = 0),
            ct.stack([this, t], e)
        }
        ,
        t.prototype.unstack = function(t) {
            return void 0 === t && (t = 0),
            ct.unstack(this, t)
        }
        ,
        t.prototype.all = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.all(this, t, e)
        }
        ,
        t.prototype.any = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.any(this, t, e)
        }
        ,
        t.prototype.logSumExp = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.logSumExp(this, t, e)
        }
        ,
        t.prototype.sum = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.sum(this, t, e)
        }
        ,
        t.prototype.prod = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.prod(this, t, e)
        }
        ,
        t.prototype.mean = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.mean(this, t, e)
        }
        ,
        t.prototype.min = function(t, e) {
            return void 0 === t && (t = null),
            void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.min(this, t, e)
        }
        ,
        t.prototype.argMin = function(t) {
            return void 0 === t && (t = null),
            this.throwIfDisposed(),
            ct.argMin(this, t)
        }
        ,
        t.prototype.argMax = function(t) {
            return void 0 === t && (t = null),
            this.throwIfDisposed(),
            ct.argMax(this, t)
        }
        ,
        t.prototype.cast = function(t) {
            return this.throwIfDisposed(),
            ct.cast(this, t)
        }
        ,
        t.prototype.addStrict = function(t) {
            return this.throwIfDisposed(),
            ct.addStrict(this, t)
        }
        ,
        t.prototype.subStrict = function(t) {
            return this.throwIfDisposed(),
            ct.subStrict(this, t)
        }
        ,
        t.prototype.powStrict = function(t) {
            return this.throwIfDisposed(),
            ct.powStrict(this, t)
        }
        ,
        t.prototype.mulStrict = function(t) {
            return this.throwIfDisposed(),
            ct.mulStrict(this, t)
        }
        ,
        t.prototype.divStrict = function(t) {
            return this.throwIfDisposed(),
            ct.divStrict(this, t)
        }
        ,
        t.prototype.minimumStrict = function(t) {
            return this.throwIfDisposed(),
            ct.minimumStrict(this, t)
        }
        ,
        t.prototype.maximumStrict = function(t) {
            return this.throwIfDisposed(),
            ct.maximumStrict(this, t)
        }
        ,
        t.prototype.modStrict = function(t) {
            return this.throwIfDisposed(),
            ct.modStrict(this, t)
        }
        ,
        t.prototype.squaredDifferenceStrict = function(t) {
            return this.throwIfDisposed(),
            ct.squaredDifferenceStrict(this, t)
        }
        ,
        t.prototype.notEqualStrict = function(t) {
            return this.throwIfDisposed(),
            ct.notEqualStrict(this, t)
        }
        ,
        t.prototype.lessStrict = function(t) {
            return this.throwIfDisposed(),
            ct.lessStrict(this, t)
        }
        ,
        t.prototype.equalStrict = function(t) {
            return this.throwIfDisposed(),
            ct.equalStrict(this, t)
        }
        ,
        t.prototype.lessEqualStrict = function(t) {
            return this.throwIfDisposed(),
            ct.lessEqualStrict(this, t)
        }
        ,
        t.prototype.greaterStrict = function(t) {
            return this.throwIfDisposed(),
            ct.greaterStrict(this, t)
        }
        ,
        t.prototype.greaterEqualStrict = function(t) {
            return this.throwIfDisposed(),
            ct.greaterEqualStrict(this, t)
        }
        ,
        t.prototype.logicalAnd = function(t) {
            return this.throwIfDisposed(),
            ct.logicalAnd(this, t)
        }
        ,
        t.prototype.logicalOr = function(t) {
            return this.throwIfDisposed(),
            ct.logicalOr(this, t)
        }
        ,
        t.prototype.logicalNot = function() {
            return this.throwIfDisposed(),
            ct.logicalNot(this)
        }
        ,
        t.prototype.logicalXor = function(t) {
            return this.throwIfDisposed(),
            ct.logicalXor(this, t)
        }
        ,
        t.prototype.where = function(t, e) {
            return this.throwIfDisposed(),
            ct.where(t, this, e)
        }
        ,
        t.prototype.neg = function() {
            return this.throwIfDisposed(),
            ct.neg(this)
        }
        ,
        t.prototype.ceil = function() {
            return this.throwIfDisposed(),
            ct.ceil(this)
        }
        ,
        t.prototype.floor = function() {
            return this.throwIfDisposed(),
            ct.floor(this)
        }
        ,
        t.prototype.sign = function() {
            return this.throwIfDisposed(),
            ct.sign(this)
        }
        ,
        t.prototype.isNaN = function() {
            return this.throwIfDisposed(),
            ct.isNaN(this)
        }
        ,
        t.prototype.isInf = function() {
            return this.throwIfDisposed(),
            ct.isInf(this)
        }
        ,
        t.prototype.isFinite = function() {
            return this.throwIfDisposed(),
            ct.isFinite(this)
        }
        ,
        t.prototype.exp = function() {
            return this.throwIfDisposed(),
            ct.exp(this)
        }
        ,
        t.prototype.expm1 = function() {
            return this.throwIfDisposed(),
            ct.expm1(this)
        }
        ,
        t.prototype.log = function() {
            return this.throwIfDisposed(),
            ct.log(this)
        }
        ,
        t.prototype.log1p = function() {
            return this.throwIfDisposed(),
            ct.log1p(this)
        }
        ,
        t.prototype.sqrt = function() {
            return this.throwIfDisposed(),
            ct.sqrt(this)
        }
        ,
        t.prototype.rsqrt = function() {
            return this.throwIfDisposed(),
            ct.rsqrt(this)
        }
        ,
        t.prototype.square = function() {
            return this.throwIfDisposed(),
            ct.square(this)
        }
        ,
        t.prototype.reciprocal = function() {
            return this.throwIfDisposed(),
            ct.reciprocal(this)
        }
        ,
        t.prototype.abs = function() {
            return this.throwIfDisposed(),
            ct.abs(this)
        }
        ,
        t.prototype.clipByValue = function(t, e) {
            return this.throwIfDisposed(),
            ct.clipByValue(this, t, e)
        }
        ,
        t.prototype.sigmoid = function() {
            return this.throwIfDisposed(),
            ct.sigmoid(this)
        }
        ,
        t.prototype.logSigmoid = function() {
            return this.throwIfDisposed(),
            ct.logSigmoid(this)
        }
        ,
        t.prototype.softplus = function() {
            return this.throwIfDisposed(),
            ct.softplus(this)
        }
        ,
        t.prototype.zerosLike = function() {
            return this.throwIfDisposed(),
            ct.zerosLike(this)
        }
        ,
        t.prototype.onesLike = function() {
            return this.throwIfDisposed(),
            ct.onesLike(this)
        }
        ,
        t.prototype.sin = function() {
            return this.throwIfDisposed(),
            ct.sin(this)
        }
        ,
        t.prototype.cos = function() {
            return this.throwIfDisposed(),
            ct.cos(this)
        }
        ,
        t.prototype.tan = function() {
            return this.throwIfDisposed(),
            ct.tan(this)
        }
        ,
        t.prototype.asin = function() {
            return this.throwIfDisposed(),
            ct.asin(this)
        }
        ,
        t.prototype.acos = function() {
            return this.throwIfDisposed(),
            ct.acos(this)
        }
        ,
        t.prototype.atan = function() {
            return this.throwIfDisposed(),
            ct.atan(this)
        }
        ,
        t.prototype.sinh = function() {
            return this.throwIfDisposed(),
            ct.sinh(this)
        }
        ,
        t.prototype.cosh = function() {
            return this.throwIfDisposed(),
            ct.cosh(this)
        }
        ,
        t.prototype.tanh = function() {
            return this.throwIfDisposed(),
            ct.tanh(this)
        }
        ,
        t.prototype.asinh = function() {
            return this.throwIfDisposed(),
            ct.asinh(this)
        }
        ,
        t.prototype.acosh = function() {
            return this.throwIfDisposed(),
            ct.acosh(this)
        }
        ,
        t.prototype.atanh = function() {
            return this.throwIfDisposed(),
            ct.atanh(this)
        }
        ,
        t.prototype.erf = function() {
            return this.throwIfDisposed(),
            ct.erf(this)
        }
        ,
        t.prototype.round = function() {
            return this.throwIfDisposed(),
            ct.round(this)
        }
        ,
        t.prototype.step = function(t) {
            return void 0 === t && (t = 0),
            this.throwIfDisposed(),
            ct.step(this, t)
        }
        ,
        t.prototype.softmax = function(t) {
            return void 0 === t && (t = -1),
            this.throwIfDisposed(),
            ct.softmax(this, t)
        }
        ,
        t.prototype.logSoftmax = function(t) {
            return void 0 === t && (t = -1),
            this.throwIfDisposed(),
            ct.logSoftmax(this, t)
        }
        ,
        t.prototype.resizeBilinear = function(t, e) {
            return void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.image.resizeBilinear(this, t, e)
        }
        ,
        t.prototype.resizeNearestNeighbor = function(t, e) {
            return void 0 === e && (e = !1),
            this.throwIfDisposed(),
            ct.image.resizeNearestNeighbor(this, t, e)
        }
        ,
        t.prototype.variable = function(t, e, n) {
            return void 0 === t && (t = !0),
            this.throwIfDisposed(),
            st().makeVariable(this, t, e, n)
        }
        ,
        t.prototype.unsortedSegmentSum = function(t, e) {
            return this.throwIfDisposed(),
            ct.unsortedSegmentSum(this, t, e)
        }
        ,
        t.prototype.topk = function(t, e) {
            return void 0 === t && (t = 1),
            void 0 === e && (e = !0),
            this.throwIfDisposed(),
            ct.topk(this, t, e)
        }
        ,
        t.prototype.stridedSlice = function(t, e, n, r, o, a, i, u) {
            return void 0 === r && (r = 0),
            void 0 === o && (o = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            void 0 === u && (u = 0),
            this.throwIfDisposed(),
            ct.stridedSlice(this, t, e, n, r, o, a, i, u)
        }
        ,
        t.prototype.fft = function() {
            return this.throwIfDisposed(),
            ct.spectral.fft(this)
        }
        ,
        t.prototype.ifft = function() {
            return this.throwIfDisposed(),
            ct.spectral.ifft(this)
        }
        ,
        t.prototype.rfft = function() {
            return this.throwIfDisposed(),
            ct.spectral.rfft(this)
        }
        ,
        t.prototype.irfft = function() {
            return this.throwIfDisposed(),
            ct.spectral.irfft(this)
        }
        ,
        t
    }();
    Object.defineProperty(lt, Symbol.hasInstance, {
        value: function(t) {
            return !!t && null != t.dataId && null != t.shape && null != t.dtype
        }
    });
    var ft, pt, ht, dt, vt, mt = function(t) {
        function e(e, n, r, o) {
            var a = t.call(this, e.shape, e.dtype, e.dataId, o) || this;
            return a.trainable = n,
            a.name = r,
            a
        }
        return n(e, t),
        e.prototype.assign = function(t) {
            if (t.dtype !== this.dtype)
                throw new Error("dtype of the new value (" + t.dtype + ") and previous value (" + this.dtype + ") must match");
            if (!D(t.shape, this.shape))
                throw new Error("shape of the new value (" + t.shape + ") and previous value (" + this.shape + ") must match");
            st().disposeTensor(this),
            this.dataId = t.dataId,
            st().incRef(this, null)
        }
        ,
        e.prototype.dispose = function() {
            st().disposeVariable(this),
            this.isDisposedInternal = !0
        }
        ,
        e
    }(lt);
    Object.defineProperty(mt, Symbol.hasInstance, {
        value: function(t) {
            return t instanceof lt && null != t.assign && t.assign instanceof Function
        }
    }),
    (ft = t.Rank || (t.Rank = {})).R0 = "R0",
    ft.R1 = "R1",
    ft.R2 = "R2",
    ft.R3 = "R3",
    ft.R4 = "R4",
    ft.R5 = "R5",
    ft.R6 = "R6",
    function(t) {
        t.float32 = "float32",
        t.int32 = "int32",
        t.bool = "int32",
        t.complex64 = "complex64"
    }(pt || (pt = {})),
    function(t) {
        t.float32 = "float32",
        t.int32 = "int32",
        t.bool = "bool",
        t.complex64 = "complex64"
    }(ht || (ht = {})),
    function(t) {
        t.float32 = "float32",
        t.int32 = "float32",
        t.bool = "float32",
        t.complex64 = "complex64"
    }(dt || (dt = {})),
    function(t) {
        t.float32 = "complex64",
        t.int32 = "complex64",
        t.bool = "complex64",
        t.complex64 = "complex64"
    }(vt || (vt = {}));
    var gt = {
        float32: dt,
        int32: pt,
        bool: ht,
        complex64: vt
    };
    function yt(t, e) {
        if ("string" === t || "string" === e) {
            if ("string" === t && "string" === e)
                return "string";
            throw new Error("Can not upcast " + t + " with " + e)
        }
        return gt[t][e]
    }
    function bt(t, e) {
        if (t.dtype === e.dtype)
            return [t, e];
        var n = yt(t.dtype, e.dtype);
        return [t.cast(n), e.cast(n)]
    }
    function wt(t, e) {
        w(t.dtype === e.dtype, (function() {
            return "The dtypes of the first(" + t.dtype + ") and second(" + e.dtype + ") input must match"
        }
        ))
    }
    function kt(t) {
        var e = [];
        return function t(e, n, r) {
            if (null == e)
                return;
            if (e instanceof lt)
                return void n.push(e);
            if (o = e,
            !Array.isArray(o) && "object" != typeof o)
                return;
            var o;
            var a = e;
            for (var i in a) {
                var u = a[i];
                r.has(u) || (r.add(u),
                t(u, n, r))
            }
        }(t, e, new Set),
        e
    }
    var xt = {
        __proto__: null,
        makeTypesMatch: bt,
        assertTypesMatch: wt,
        isTensorInList: function(t, e) {
            return e.some((function(e) {
                return e.id === t.id
            }
            ))
        },
        getTensorsInContainer: kt
    }
      , Et = function() {
        function t() {
            this.registeredVariables = {},
            this.nextTapeNodeId = 0,
            this.numBytes = 0,
            this.numTensors = 0,
            this.numStringTensors = 0,
            this.numDataBuffers = 0,
            this.gradientDepth = 0,
            this.kernelDepth = 0,
            this.scopeStack = [],
            this.numDataMovesStack = [],
            this.nextScopeId = 0,
            this.tensorInfo = new WeakMap,
            this.profiling = !1,
            this.activeProfile = {
                newBytes: 0,
                newTensors: 0,
                peakBytes: 0,
                kernels: [],
                result: null
            }
        }
        return t.prototype.dispose = function() {
            for (var t in this.registeredVariables)
                this.registeredVariables[t].dispose()
        }
        ,
        t
    }()
      , St = function() {
        function t(t) {
            this.ENV = t,
            this.registry = {},
            this.registryFactory = {},
            this.pendingBackendInitId = 0,
            this.state = new Et
        }
        return t.prototype.ready = function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (null != this.pendingBackendInit)
                            return [2, this.pendingBackendInit.then((function() {}
                            ))];
                        if (null != this.backendInstance)
                            return [2];
                        t = this.getSortedBackends(),
                        e = 0,
                        r.label = 1;
                    case 1:
                        return e < t.length ? (n = t[e],
                        [4, this.initializeBackend(n).success]) : [3, 5];
                    case 2:
                        return r.sent() ? [4, this.setBackend(n)] : [3, 4];
                    case 3:
                        return r.sent(),
                        [2];
                    case 4:
                        return e++,
                        [3, 1];
                    case 5:
                        throw new Error("Could not initialize any backends, all backend initializations failed.")
                    }
                }
                ))
            }
            ))
        }
        ,
        Object.defineProperty(t.prototype, "backend", {
            get: function() {
                if (null != this.pendingBackendInit)
                    throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                if (null == this.backendInstance) {
                    var t = this.initializeBackendsAndReturnBest()
                      , e = t.name;
                    if (t.asyncInit)
                        throw new Error("The highest priority backend '" + e + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                    this.setBackend(e)
                }
                return this.backendInstance
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.backendNames = function() {
            return Object.keys(this.registryFactory)
        }
        ,
        t.prototype.findBackend = function(t) {
            if (!(t in this.registry)) {
                if (!(t in this.registryFactory))
                    return null;
                if (this.initializeBackend(t).asyncInit)
                    return null
            }
            return this.registry[t]
        }
        ,
        t.prototype.findBackendFactory = function(t) {
            return t in this.registryFactory ? this.registryFactory[t].factory : null
        }
        ,
        t.prototype.registerBackend = function(t, e, n) {
            return void 0 === n && (n = 1),
            t in this.registryFactory ? (console.warn(t + " backend was already registered. Reusing existing backend factory."),
            !1) : (this.registryFactory[t] = {
                factory: e,
                priority: n
            },
            !0)
        }
        ,
        t.prototype.setBackend = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n, r;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (null == this.registryFactory[t])
                            throw new Error("Backend name '" + t + "' not found in registry");
                        return this.backendName = t,
                        null != this.registry[t] ? [3, 4] : (this.backendInstance = null,
                        e = this.initializeBackend(t),
                        n = e.success,
                        e.asyncInit ? [4, n] : [3, 2]);
                    case 1:
                        return r = o.sent(),
                        [3, 3];
                    case 2:
                        r = n,
                        o.label = 3;
                    case 3:
                        if (!r)
                            return [2, !1];
                        o.label = 4;
                    case 4:
                        return this.backendInstance = this.registry[t],
                        this.setupRegisteredKernels(),
                        this.profiler = new et(this.backendInstance),
                        [2, !0]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setupRegisteredKernels = function() {
            var t = this;
            v(this.backendName).forEach((function(e) {
                null != e.setupFunc && e.setupFunc(t.backendInstance)
            }
            ))
        }
        ,
        t.prototype.disposeRegisteredKernels = function(t) {
            var e = this;
            v(t).forEach((function(n) {
                null != n.disposeFunc && n.disposeFunc(e.registry[t])
            }
            ))
        }
        ,
        t.prototype.initializeBackend = function(t) {
            var e = this
              , n = this.registryFactory[t];
            if (null == n)
                throw new Error("Cannot initialize backend " + t + ", no registration found.");
            try {
                var r = n.factory();
                if (Promise.resolve(r) === r) {
                    var o = ++this.pendingBackendInitId
                      , a = r.then((function(n) {
                        return !(o < e.pendingBackendInitId) && (e.registry[t] = n,
                        e.pendingBackendInit = null,
                        !0)
                    }
                    )).catch((function(n) {
                        return o < e.pendingBackendInitId || (e.pendingBackendInit = null,
                        console.warn("Initialization of backend " + t + " failed"),
                        console.warn(n.stack || n.message)),
                        !1
                    }
                    ));
                    return this.pendingBackendInit = a,
                    {
                        success: a,
                        asyncInit: !0
                    }
                }
                return this.registry[t] = r,
                {
                    success: !0,
                    asyncInit: !1
                }
            } catch (e) {
                return console.warn("Initialization of backend " + t + " failed"),
                console.warn(e.stack || e.message),
                {
                    success: !1,
                    asyncInit: !1
                }
            }
        }
        ,
        t.prototype.removeBackend = function(t) {
            if (!(t in this.registryFactory))
                throw new Error(t + " backend not found in registry");
            this.backendName === t && null != this.pendingBackendInit && this.pendingBackendInitId++,
            t in this.registry && (this.disposeRegisteredKernels(t),
            this.registry[t].dispose(),
            delete this.registry[t]),
            delete this.registryFactory[t],
            this.backendName === t && (this.pendingBackendInit = null,
            this.backendName = null,
            this.backendInstance = null)
        }
        ,
        t.prototype.getSortedBackends = function() {
            var t = this;
            if (0 === Object.keys(this.registryFactory).length)
                throw new Error("No backend found in registry.");
            return Object.keys(this.registryFactory).sort((function(e, n) {
                return t.registryFactory[n].priority - t.registryFactory[e].priority
            }
            ))
        }
        ,
        t.prototype.initializeBackendsAndReturnBest = function() {
            for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
                var n = t[e]
                  , r = this.initializeBackend(n)
                  , o = r.success
                  , a = r.asyncInit;
                if (a || o)
                    return {
                        name: n,
                        asyncInit: a
                    }
            }
            throw new Error("Could not initialize any backends, all backend initializations failed.")
        }
        ,
        t.prototype.moveData = function(t, e) {
            var n = this.state.tensorInfo.get(e)
              , r = n.backend
              , o = this.readSync(e);
            r.disposeData(e),
            n.backend = t,
            t.move(e, o, n.shape, n.dtype),
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++
        }
        ,
        t.prototype.tidy = function(t, e) {
            var n, r = this, o = null;
            if (null == e) {
                if ("function" != typeof t)
                    throw new Error("Please provide a function to tidy()");
                e = t
            } else {
                if ("string" != typeof t && !(t instanceof String))
                    throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
                if ("function" != typeof e)
                    throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
                o = t
            }
            return this.scopedRun((function() {
                return r.startScope(o)
            }
            ), (function() {
                return r.endScope(n)
            }
            ), (function() {
                return (n = e())instanceof Promise && console.error("Cannot return a Promise inside of tidy."),
                n
            }
            ))
        }
        ,
        t.prototype.scopedRun = function(t, e, n) {
            t();
            try {
                var r = n();
                return e(),
                r
            } catch (t) {
                throw e(),
                t
            }
        }
        ,
        t.prototype.nextTensorId = function() {
            return t.nextTensorId++
        }
        ,
        t.prototype.nextVariableId = function() {
            return t.nextVariableId++
        }
        ,
        t.prototype.clone = function(t) {
            var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype)
              , n = {
                x: t
            };
            return this.addTapeNode(this.state.activeScope.name, n, [e], (function(t) {
                return {
                    x: function() {
                        return t.toFloat()
                    }
                }
            }
            ), [], {}),
            e
        }
        ,
        t.prototype.runKernel = function(t, e, n, r, o) {
            return this.runKernelFunc(null, e, null, t, n, r, o)
        }
        ,
        t.prototype.shouldCheckForMemLeaks = function() {
            return this.ENV.getBool("IS_TEST")
        }
        ,
        t.prototype.checkKernelForMemLeak = function(t, e, n) {
            var r = this.backend.numDataIds()
              , o = 0;
            n.forEach((function(t) {
                o += "complex64" === t.dtype ? 3 : 1
            }
            ));
            var a = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]
              , i = r - e - o - a;
            if (i > 0)
                throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + i + " data ids) after running '" + t + "'")
        }
        ,
        t.prototype.runKernelFunc = function(t, e, n, r, o, a, i) {
            var u, s = this, c = [], l = this.isTapeOn();
            null == r && (r = null != this.state.activeScope ? this.state.activeScope.name : "");
            var f, p = this.state.numBytes, d = this.state.numTensors;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
            var v, m = h(r, this.backendName);
            if (null != m)
                f = function() {
                    var t = s.backend.numDataIds();
                    v = m.kernelFunc({
                        inputs: e,
                        attrs: o,
                        backend: s.backend
                    });
                    var n = Array.isArray(v) ? v : [v];
                    s.shouldCheckForMemLeaks() && s.checkKernelForMemLeak(r, t, n);
                    var u = n.map((function(t) {
                        var e = t.dataId
                          , n = t.shape
                          , r = t.dtype;
                        return s.makeTensorFromDataId(e, n, r)
                    }
                    ));
                    if (l) {
                        var f = s.getTensorsForGradient(r, e, u);
                        if (null == f) {
                            null == i && (i = []);
                            var p = u.filter((function(t, e) {
                                return i[e]
                            }
                            ));
                            f = (a || []).slice().concat(p)
                        }
                        c = s.saveTensorsForBackwardMode(f)
                    }
                    return u
                }
                ;
            else {
                var g = function(t) {
                    l && (c = t.map((function(t) {
                        return s.keep(s.clone(t))
                    }
                    )))
                };
                f = function() {
                    var e = s.backend.numDataIds();
                    v = s.tidy((function() {
                        return t(s.backend, g)
                    }
                    ));
                    var n = Array.isArray(v) ? v : [v];
                    return s.shouldCheckForMemLeaks() && s.checkKernelForMemLeak(r, e, n),
                    n
                }
            }
            return this.scopedRun((function() {
                return s.state.kernelDepth++
            }
            ), (function() {
                return s.state.kernelDepth--
            }
            ), (function() {
                u = s.ENV.getBool("DEBUG") ? s.profiler.profileKernel(r, e, (function() {
                    return f()
                }
                )) : f()
            }
            )),
            l && this.addTapeNode(r, e, u, n, c, o),
            this.state.profiling && this.state.activeProfile.kernels.push({
                name: r,
                bytesAdded: this.state.numBytes - p,
                totalBytesSnapshot: this.state.numBytes,
                tensorsAdded: this.state.numTensors - d,
                totalTensorsSnapshot: this.state.numTensors,
                inputShapes: Object.keys(e).map((function(t) {
                    return e[t].shape
                }
                )),
                outputShapes: u.map((function(t) {
                    return t.shape
                }
                ))
            }),
            Array.isArray(v) ? u : u[0]
        }
        ,
        t.prototype.saveTensorsForBackwardMode = function(t) {
            var e = this;
            return t.map((function(t) {
                return e.keep(e.clone(t))
            }
            ))
        }
        ,
        t.prototype.getTensorsForGradient = function(t, e, n) {
            var r = d(t);
            if (null != r) {
                var o = r.inputsToSave || []
                  , a = r.outputsToSave || []
                  , i = void 0;
                r.saveAllInputs ? (w(Array.isArray(e), (function() {
                    return "saveAllInputs is true, expected inputs to be an array."
                }
                )),
                i = Object.keys(e).map((function(t) {
                    return e[t]
                }
                ))) : i = o.map((function(t) {
                    return e[t]
                }
                ));
                var u = n.filter((function(t, e) {
                    return a[e]
                }
                ));
                return i.concat(u)
            }
            return null
        }
        ,
        t.prototype.makeTensor = function(t, e, n, r) {
            if (null == t)
                throw new Error("Values passed to engine.makeTensor() are null");
            n = n || "float32",
            r = r || this.backend;
            var o = t;
            "string" === n && L(t[0]) && (o = t.map((function(t) {
                return Z(t)
            }
            )));
            var a = r.write(o, e, n)
              , i = new lt(e,n,a,this.nextTensorId());
            if (this.incRef(i, r),
            "string" === n) {
                var u = this.state.tensorInfo.get(a)
                  , s = z(o);
                this.state.numBytes += s - u.bytes,
                u.bytes = s
            }
            return i
        }
        ,
        t.prototype.makeTensorFromDataId = function(t, e, n, r) {
            var o = new lt(e,n = n || "float32",t,this.nextTensorId());
            return this.incRef(o, r),
            o
        }
        ,
        t.prototype.makeVariable = function(t, e, n, r) {
            void 0 === e && (e = !0),
            n = n || this.nextVariableId().toString(),
            null != r && r !== t.dtype && (t = t.asType(r));
            var o = new mt(t,e,n,this.nextTensorId());
            if (null != this.state.registeredVariables[o.name])
                throw new Error("Variable with name " + o.name + " was already registered");
            return this.state.registeredVariables[o.name] = o,
            this.incRef(o, this.backend),
            o
        }
        ,
        t.prototype.incRef = function(t, e) {
            var n = this.state.tensorInfo.has(t.dataId) ? this.state.tensorInfo.get(t.dataId).refCount : 0;
            if (this.state.numTensors++,
            "string" === t.dtype && this.state.numStringTensors++,
            0 === n) {
                this.state.numDataBuffers++;
                var r = 0;
                "complex64" !== t.dtype && "string" !== t.dtype && (r = t.size * q(t.dtype)),
                this.state.tensorInfo.set(t.dataId, {
                    backend: e || this.backend,
                    dtype: t.dtype,
                    shape: t.shape,
                    bytes: r,
                    refCount: 0
                }),
                this.state.numBytes += r
            }
            this.state.tensorInfo.get(t.dataId).refCount++,
            t instanceof mt || this.track(t)
        }
        ,
        t.prototype.disposeTensor = function(t) {
            if (this.state.tensorInfo.has(t.dataId)) {
                this.state.numTensors--,
                "string" === t.dtype && this.state.numStringTensors--;
                var e = this.state.tensorInfo.get(t.dataId);
                e.refCount <= 1 ? ("complex64" !== t.dtype && (this.state.numBytes -= e.bytes),
                this.state.numDataBuffers--,
                e.backend.disposeData(t.dataId),
                this.state.tensorInfo.delete(t.dataId)) : this.state.tensorInfo.get(t.dataId).refCount--
            }
        }
        ,
        t.prototype.disposeVariables = function() {
            for (var t in this.state.registeredVariables) {
                var e = this.state.registeredVariables[t];
                this.disposeVariable(e)
            }
        }
        ,
        t.prototype.disposeVariable = function(t) {
            this.disposeTensor(t),
            null != this.state.registeredVariables[t.name] && delete this.state.registeredVariables[t.name]
        }
        ,
        t.prototype.memory = function() {
            var t = this.backend.memory();
            return t.numTensors = this.state.numTensors,
            t.numDataBuffers = this.state.numDataBuffers,
            t.numBytes = this.state.numBytes,
            this.state.numStringTensors > 0 && (t.unreliable = !0,
            null == t.reasons && (t.reasons = []),
            t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),
            t
        }
        ,
        t.prototype.profile = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n;
                return o(this, (function(r) {
                    return this.state.profiling = !0,
                    e = this.state.numBytes,
                    n = this.state.numTensors,
                    this.state.activeProfile.kernels = [],
                    this.state.activeProfile.result = t(),
                    this.state.profiling = !1,
                    this.state.activeProfile.peakBytes = Math.max.apply(Math, this.state.activeProfile.kernels.map((function(t) {
                        return t.totalBytesSnapshot
                    }
                    ))),
                    this.state.activeProfile.newBytes = this.state.numBytes - e,
                    this.state.activeProfile.newTensors = this.state.numTensors - n,
                    [2, this.state.activeProfile]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.isTapeOn = function() {
            return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth
        }
        ,
        t.prototype.addTapeNode = function(t, e, n, r, o, a) {
            var i = this
              , u = {
                id: this.state.nextTapeNodeId++,
                kernelName: t,
                inputs: e,
                outputs: n,
                saved: o
            }
              , s = d(t);
            null != s && (r = s.gradFunc),
            null != r && (u.gradient = function(t) {
                return t = t.map((function(t, e) {
                    if (null == t) {
                        var r = n[e]
                          , o = J(r.size, r.dtype);
                        return i.makeTensor(o, r.shape, r.dtype)
                    }
                    return t
                }
                )),
                r(t.length > 1 ? t : t[0], o, a)
            }
            ),
            this.state.activeTape.push(u)
        }
        ,
        t.prototype.keep = function(t) {
            return t.kept = !0,
            t
        }
        ,
        t.prototype.startTape = function() {
            0 === this.state.gradientDepth && (this.state.activeTape = []),
            this.state.gradientDepth++
        }
        ,
        t.prototype.endTape = function() {
            this.state.gradientDepth--
        }
        ,
        t.prototype.startScope = function(t) {
            var e = {
                track: [],
                name: "unnamed scope",
                id: this.state.nextScopeId++
            };
            t && (e.name = t),
            this.state.scopeStack.push(e),
            this.state.activeScope = e
        }
        ,
        t.prototype.endScope = function(t) {
            for (var e = this, n = kt(t), r = new Set(n.map((function(t) {
                return t.id
            }
            ))), o = 0; o < this.state.activeScope.track.length; o++) {
                var a = this.state.activeScope.track[o];
                a.kept || r.has(a.id) || a.dispose()
            }
            var i = this.state.scopeStack.pop();
            this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1],
            n.forEach((function(t) {
                t.kept || t.scopeId !== i.id || e.track(t)
            }
            ))
        }
        ,
        t.prototype.gradients = function(t, e, n, r) {
            var o = this;
            if (void 0 === r && (r = !1),
            w(e.length > 0, (function() {
                return "gradients() received an empty list of xs."
            }
            )),
            null != n && "float32" !== n.dtype)
                throw new Error("dy must have 'float32' dtype, but has '" + n.dtype + "'");
            var a = this.scopedRun((function() {
                return o.startTape()
            }
            ), (function() {
                return o.endTape()
            }
            ), (function() {
                return o.tidy("forward", t)
            }
            ));
            w(a instanceof lt, (function() {
                return "The result y returned by f() must be a tensor."
            }
            ));
            var i = function(t, e, n) {
                for (var r = {}, o = {}, a = 0; a < e.length; a++)
                    r[e[a].id] = !0;
                for (a = 0; a < t.length; a++) {
                    var i = (d = t[a]).inputs;
                    for (var u in i) {
                        for (var s = i[u], c = !1, l = 0; l < e.length; l++)
                            if (r[s.id]) {
                                d.outputs.forEach((function(t) {
                                    return r[t.id] = !0
                                }
                                )),
                                c = !0,
                                o[d.id] = !0;
                                break
                            }
                        if (c)
                            break
                    }
                }
                var f = {};
                f[n.id] = !0;
                var p = {};
                for (a = t.length - 1; a >= 0; a--)
                    for (i = (d = t[a]).inputs,
                    l = 0; l < d.outputs.length; l++)
                        if (f[d.outputs[l].id]) {
                            for (var u in i)
                                f[i[u].id] = !0,
                                p[d.id] = !0;
                            break
                        }
                var h = [];
                for (a = 0; a < t.length; a++) {
                    var d;
                    if (o[(d = t[a]).id] && p[d.id]) {
                        var v = {};
                        for (var u in d.inputs) {
                            var m = d.inputs[u];
                            r[m.id] && (v[u] = m)
                        }
                        var g = Object.assign({}, d);
                        g.inputs = v,
                        g.outputs = d.outputs,
                        h.push(g)
                    }
                }
                return h
            }(this.state.activeTape, e, a);
            if (!r && 0 === i.length && e.length > 0)
                throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
            return this.tidy("backward", (function() {
                var t, r, u = {};
                u[a.id] = null == n ? (t = a.shape,
                r = $(S(t), "float32"),
                Dt.makeTensor(r, t, "float32")) : n,
                function(t, e, n) {
                    for (var r = function(r) {
                        var o = e[r]
                          , a = [];
                        if (o.outputs.forEach((function(e) {
                            var n = t[e.id];
                            null != n ? a.push(n) : a.push(null)
                        }
                        )),
                        null == o.gradient)
                            throw new Error("Cannot compute gradient: gradient function not found for " + o.kernelName + ".");
                        var i = o.gradient(a)
                          , u = function(e) {
                            if (!(e in i))
                                throw new Error("Cannot backprop through input " + e + ". Available gradients found: " + Object.keys(i) + ".");
                            var r = n((function() {
                                return i[e]()
                            }
                            ));
                            if ("float32" !== r.dtype)
                                throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input " + e + " must have 'float32' dtype, but has '" + r.dtype + "'");
                            var a = o.inputs[e];
                            if (!D(r.shape, a.shape))
                                throw new Error("Error in gradient for op " + o.kernelName + ". The gradient of input '" + e + "' has shape '" + r.shape + "', which does not match the shape of the input '" + a.shape + "'");
                            if (null == t[a.id])
                                t[a.id] = r;
                            else {
                                var u = t[a.id];
                                t[a.id] = u.add(r),
                                u.dispose()
                            }
                        };
                        for (var s in o.inputs)
                            u(s)
                    }, o = e.length - 1; o >= 0; o--)
                        r(o)
                }(u, i, (function(t) {
                    return o.tidy(t)
                }
                ));
                var s = e.map((function(t) {
                    return u[t.id]
                }
                ));
                return 0 === o.state.gradientDepth && (o.state.activeTape.forEach((function(t) {
                    for (var e = 0, n = t.saved; e < n.length; e++) {
                        n[e].dispose()
                    }
                }
                )),
                o.state.activeTape = null),
                {
                    value: a,
                    grads: s
                }
            }
            ))
        }
        ,
        t.prototype.customGrad = function(t) {
            var e = this;
            return w(G(t), (function() {
                return "The f passed in customGrad(f) must be a function."
            }
            )),
            function() {
                for (var n, r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                w(r.every((function(t) {
                    return t instanceof lt
                }
                )), (function() {
                    return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
                }
                ));
                var a = {};
                return r.forEach((function(t, e) {
                    a[e] = t
                }
                )),
                e.runKernelFunc((function(e, o) {
                    return w((n = t.apply(void 0, r.concat([o]))).value instanceof lt, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
                    }
                    )),
                    w(G(n.gradFunc), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
                    }
                    )),
                    n.value
                }
                ), a, (function(t, e) {
                    var o = n.gradFunc(t, e)
                      , a = Array.isArray(o) ? o : [o];
                    w(a.length === r.length, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
                    }
                    )),
                    w(a.every((function(t) {
                        return t instanceof lt
                    }
                    )), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
                    }
                    ));
                    var i = {};
                    return a.forEach((function(t, e) {
                        i[e] = function() {
                            return t
                        }
                    }
                    )),
                    i
                }
                ))
            }
        }
        ,
        t.prototype.readSync = function(t) {
            return this.state.tensorInfo.get(t).backend.readSync(t)
        }
        ,
        t.prototype.read = function(t) {
            return this.state.tensorInfo.get(t).backend.read(t)
        }
        ,
        t.prototype.time = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e = Y(),
                        [4, this.backend.time(t)];
                    case 1:
                        return (n = r.sent()).wallMs = Y() - e,
                        [2, n]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.track = function(t) {
            return null != this.state.activeScope && (t.scopeId = this.state.activeScope.id,
            this.state.activeScope.track.push(t)),
            t
        }
        ,
        Object.defineProperty(t.prototype, "registeredVariables", {
            get: function() {
                return this.state.registeredVariables
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.reset = function() {
            for (var t in this.pendingBackendInitId++,
            this.state.dispose(),
            this.ENV.reset(),
            this.state = new Et,
            this.registry)
                this.disposeRegisteredKernels(t),
                this.registry[t].dispose(),
                delete this.registry[t];
            this.backendName = null,
            this.backendInstance = null,
            this.pendingBackendInit = null
        }
        ,
        t.nextTensorId = 0,
        t.nextVariableId = 0,
        t
    }();
    var Dt = function() {
        var e = c();
        if (null == e._tfengine) {
            var n = new i(e);
            e._tfengine = new St(n)
        }
        return function(e) {
            t.ENV = e
        }(e._tfengine.ENV),
        st = function() {
            return e._tfengine
        }
        ,
        e._tfengine
    }();
    function It() {
        return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope
    }
    var Nt = {
        __proto__: null,
        isMobile: function() {
            if ("undefined" != typeof navigator && null != navigator) {
                var t = navigator.userAgent || navigator.vendor || window.opera;
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
            }
            return !1
        },
        isBrowser: It
    }
      , Ft = s();
    Ft.registerFlag("DEBUG", (function() {
        return !1
    }
    ), (function(t) {
        t && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
    }
    )),
    Ft.registerFlag("IS_BROWSER", (function() {
        return It()
    }
    )),
    Ft.registerFlag("IS_NODE", (function() {
        return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node
    }
    )),
    Ft.registerFlag("IS_CHROME", (function() {
        return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    }
    )),
    Ft.registerFlag("PROD", (function() {
        return !1
    }
    )),
    Ft.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", (function() {
        return Ft.getBool("DEBUG")
    }
    )),
    Ft.registerFlag("DEPRECATION_WARNINGS_ENABLED", (function() {
        return !0
    }
    )),
    Ft.registerFlag("IS_TEST", (function() {
        return !1
    }
    ));
    function Mt(t, e) {
        for (var n = [], r = 0; r < e.length; r++) {
            var o = t[t.length - r - 1]
              , a = e.length - r - 1
              , i = e[a];
            (null == o || 1 === o && i > 1) && n.unshift(a)
        }
        return n
    }
    function At(t, e) {
        for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
            var a = t[t.length - o - 1];
            null == a && (a = 1);
            var i = e[e.length - o - 1];
            if (null == i && (i = 1),
            1 === a)
                n.unshift(i);
            else if (1 === i)
                n.unshift(a);
            else {
                if (a !== i)
                    throw Error("Operands could not be broadcast together with shapes " + t + " and " + e + ".");
                n.unshift(a)
            }
        }
        return n
    }
    var _t = {
        kernelName: "Add",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = t
                      , r = Mt(n.shape, o);
                    return r.length > 0 && (e = e.sum(r)),
                    e.reshape(n.shape)
                },
                b: function() {
                    var e = t
                      , n = Mt(r.shape, o);
                    return n.length > 0 && (e = e.sum(n)),
                    e.reshape(r.shape)
                }
            }
        }
    }
      , Tt = {
        kernelName: "AddN",
        saveAllInputs: !0,
        gradFunc: function(t, e) {
            var n = {};
            return e.forEach((function(e, r) {
                n[r] = function() {
                    return t.clone()
                }
            }
            )),
            n
        }
    };
    function Bt(t, e) {
        var n = t;
        if (P(t))
            return "string" === e ? [] : [t.length];
        if (!Array.isArray(t))
            return [];
        for (var r = []; Array.isArray(n) || P(n) && "string" !== e; )
            r.push(n.length),
            n = n[0];
        return Array.isArray(t) && s().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t(e, n, r) {
            if (r = r || [],
            !Array.isArray(e) && !P(e))
                return void w(0 === n.length, (function() {
                    return "Element arr[" + r.join("][") + "] is a primitive, but should be an array/TypedArray of " + n[0] + " elements"
                }
                ));
            w(n.length > 0, (function() {
                return "Element arr[" + r.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
            }
            )),
            w(e.length === n[0], (function() {
                return "Element arr[" + r.join("][") + "] should have " + n[0] + " elements, but has " + e.length + " elements"
            }
            ));
            for (var o = n.slice(1), a = 0; a < e.length; ++a)
                t(e[a], o, r.concat(a))
        }(t, r, []),
        r
    }
    function Ct(t, e, n, r) {
        if (null != t && ("numeric" !== t && t !== e || "numeric" === t && "string" === e))
            throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + t + " tensor, but got " + e + " tensor")
    }
    function Rt(t, e, n, r) {
        if (void 0 === r && (r = "numeric"),
        t instanceof lt)
            return Ct(r, t.dtype, e, n),
            t;
        var o = K(t);
        if ("string" !== o && ["bool", "int32", "float32"].indexOf(r) >= 0 && (o = r),
        Ct(r, o, e, n),
        null == t || !P(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) {
            var a = null == t ? "null" : t.constructor.name;
            throw new Error("Argument '" + e + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + a + "'")
        }
        var i = Bt(t, o);
        P(t) || Array.isArray(t) || (t = [t]);
        var u = "string" !== o ? V(t, o, s().getBool("DEBUG")) : E(t, [], !0);
        return Dt.makeTensor(u, i, o)
    }
    function Pt(t, e, n, r) {
        if (void 0 === r && (r = "numeric"),
        !Array.isArray(t))
            throw new Error("Argument " + e + " passed to " + n + " must be a `Tensor[]` or `TensorLike[]`");
        return t.map((function(t, r) {
            return Rt(t, e + "[" + r + "]", n)
        }
        ), r)
    }
    function qt(t) {
        var e = Object.keys(t);
        if (1 !== e.length)
            throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e.length + " keys.");
        var n = e[0]
          , r = t[n];
        n.endsWith("_") && (n = n.substring(0, n.length - 1));
        var o = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            Dt.startScope(n);
            try {
                var o = r.apply(void 0, t);
                return o instanceof Promise && console.error("Cannot return a Promise inside of tidy."),
                Dt.endScope(o),
                o
            } catch (t) {
                throw Dt.endScope(null),
                t
            }
        };
        return Object.defineProperty(o, "name", {
            value: n,
            configurable: !0
        }),
        o
    }
    var zt = qt({
        add_: function(t, e) {
            var n, r = Rt(t, "a", "add"), o = Rt(e, "b", "add");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.add(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Add")
        }
    });
    function Lt(t, e) {
        var n = t[0].length;
        t.forEach((function(t, e) {
            w(t.length === n, (function() {
                return "Error in concat" + n + "D: rank of tensors[" + e + "] must be the same as the rank of the rest (" + n + ")"
            }
            ))
        }
        )),
        w(e >= 0 && e < n, (function() {
            return "Error in concat" + n + "D: axis must be between 0 and " + (n - 1) + "."
        }
        ));
        var r = t[0];
        t.forEach((function(t, o) {
            for (var a = 0; a < n; a++)
                w(a === e || t[a] === r[a], (function() {
                    return "Error in concat" + n + "D: Shape of tensors[" + o + "] (" + t + ") does not match the shape of the rest (" + r + ") along the non-concatenated axis " + o + "."
                }
                ))
        }
        ))
    }
    function Ot(t, e) {
        for (var n = t[0].slice(), r = 1; r < t.length; r++)
            n[e] += t[r][e];
        return n
    }
    var Wt = qt({
        complex_: function(t, e) {
            var n = Rt(t, "real", "complex")
              , r = Rt(e, "imag", "complex");
            k(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex().");
            var o = {
                real: n,
                imag: r
            };
            return Dt.runKernelFunc((function(t) {
                return t.complex(n, r)
            }
            ), o, null, "Complex")
        }
    });
    var Kt = qt({
        imag_: function(t) {
            var e = Rt(t, "input", "imag")
              , n = {
                input: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.imag(e)
            }
            ), n, null, "Imag")
        }
    });
    var Gt = qt({
        real_: function(t) {
            var e = Rt(t, "input", "real")
              , n = {
                input: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.real(e)
            }
            ), n, null, "Real")
        }
    });
    function Ut(t, e, n) {
        return Ht(t, e, Bt(t, n), n)
    }
    function Ht(t, e, n, r) {
        if (null == r && (r = K(t)),
        "complex64" === r)
            throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
        if (!P(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t)
            throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
        if (null != e) {
            X(e);
            var o = S(e)
              , a = S(n);
            w(o === a, (function() {
                return "Based on the provided shape, [" + e + "], the tensor should have " + o + " values but has " + a
            }
            ));
            for (var i = 0; i < n.length; ++i) {
                var u = n[i]
                  , c = i !== n.length - 1 || u !== S(e.slice(i));
                w(n[i] === e[i] || !c, (function() {
                    return "Error creating a new Tensor. Inferred shape (" + n + ") does not match the provided shape (" + e + "). "
                }
                ))
            }
        }
        return P(t) || Array.isArray(t) || (t = [t]),
        e = e || n,
        t = "string" !== r ? V(t, r, s().getBool("DEBUG")) : E(t, [], !0),
        Dt.makeTensor(t, e, r)
    }
    function Vt(t, e) {
        if ((P(t) && "string" !== e || Array.isArray(t)) && "complex64" !== e)
            throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
        if ("string" === e && P(t) && !(t instanceof Uint8Array))
            throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
        return Ht(t, [], [], e)
    }
    function jt(t, e) {
        x(t);
        var n = Bt(t, e);
        if (1 !== n.length)
            throw new Error("tensor1d() requires values to be a flat/TypedArray");
        return Ht(t, null, n, e)
    }
    function $t(t, e, n) {
        if (x(t),
        null != e && 2 !== e.length)
            throw new Error("tensor2d() requires shape to have two numbers");
        var r = Bt(t, n);
        if (2 !== r.length && 1 !== r.length)
            throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
        if (1 === r.length && null == e)
            throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
        return Ht(t, e, r, n)
    }
    function Jt(t, e, n) {
        if (x(t),
        null != e && 3 !== e.length)
            throw new Error("tensor3d() requires shape to have three numbers");
        var r = Bt(t, n);
        if (3 !== r.length && 1 !== r.length)
            throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
        if (1 === r.length && null == e)
            throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
        return Ht(t, e, r, n)
    }
    function Yt(t, e, n) {
        if (x(t),
        null != e && 4 !== e.length)
            throw new Error("tensor4d() requires shape to have four numbers");
        var r = Bt(t, n);
        if (4 !== r.length && 1 !== r.length)
            throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
        if (1 === r.length && null == e)
            throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
        return Ht(t, e, r, n)
    }
    function Xt(t, e, n) {
        if (x(t),
        null != e && 5 !== e.length)
            throw new Error("tensor5d() requires shape to have five numbers");
        var r = Bt(t, n);
        if (5 !== r.length && 1 !== r.length)
            throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
        if (1 === r.length && null == e)
            throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
        return Ht(t, e, r, n)
    }
    function Zt(t, e, n) {
        if (x(t),
        null != e && 6 !== e.length)
            throw new Error("tensor6d() requires shape to have six numbers");
        var r = Bt(t, n);
        if (6 !== r.length && 1 !== r.length)
            throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
        if (1 === r.length && null == e)
            throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
        return Ht(t, e = e || r, r, n)
    }
    function Qt(t, e, n, r) {
        return void 0 === e && (e = !0),
        Dt.makeVariable(t, e, n, r)
    }
    function te(t, e) {
        if (void 0 === e && (e = "float32"),
        "complex64" === e) {
            var n = te(t, "float32")
              , r = ee(t, "float32");
            return Wt(n, r)
        }
        var o = $(S(t), e);
        return Dt.makeTensor(o, t, e)
    }
    function ee(t, e) {
        if (void 0 === e && (e = "float32"),
        "complex64" === e) {
            var n = ee(t, "float32")
              , r = ee(t, "float32");
            return Wt(n, r)
        }
        var o = J(S(t), e);
        return Dt.makeTensor(o, t, e)
    }
    function ne(t, e, n) {
        if (n <= 0)
            throw new Error("The number of values should be positive.");
        return Dt.runKernelFunc((function(r) {
            return r.linspace(t, e, n)
        }
        ), {})
    }
    function re(t, e, n, r) {
        if (void 0 === n && (n = 1),
        void 0 === r && (r = "float32"),
        0 === n)
            throw new Error("Cannot have a step of zero");
        if (t === e || t < e && n < 0 || e < t && n > 1)
            return ee([0], r);
        var o = J(Math.abs(Math.ceil((e - t) / n)), r);
        e < t && 1 === n && (n = -1),
        o[0] = t;
        for (var a = 1; a < o.length; a++)
            o[a] = o[a - 1] + n;
        return jt(o, r)
    }
    var oe = qt({
        onesLike_: function(t) {
            var e = Rt(t, "x", "onesLike");
            if ("complex64" === e.dtype) {
                var n = oe(Gt(e))
                  , r = ae(Kt(e));
                return Wt(n, r)
            }
            return Dt.runKernelFunc((function(t) {
                return t.onesLike(e)
            }
            ), {
                x: e
            }, (function(t, e) {
                return {
                    x: function() {
                        return ae(t)
                    }
                }
            }
            ), "OnesLike")
        }
    })
      , ae = qt({
        zerosLike_: function(t) {
            var e = Rt(t, "x", "zerosLike");
            return Dt.runKernelFunc((function(t) {
                return t.zerosLike(e)
            }
            ), {
                x: e
            }, (function(t, e) {
                return {
                    x: function() {
                        return ae(t)
                    }
                }
            }
            ), "ZerosLike")
        }
    });
    var ie = qt({
        concat_: function(t, e) {
            void 0 === e && (e = 0),
            w(t.length >= 1, (function() {
                return "Pass at least one tensor to concat"
            }
            ));
            var n = Pt(t, "tensors", "concat");
            "complex64" === n[0].dtype && n.forEach((function(t) {
                if ("complex64" !== t.dtype)
                    throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + t.dtype + ". ")
            }
            ));
            var r = M(e, n[0].shape)[0]
              , o = Ot(n.map((function(t) {
                return t.shape
            }
            )), r);
            if (0 === S(o))
                return Ut([], o);
            if (1 === (n = n.filter((function(t) {
                return t.size > 0
            }
            ))).length)
                return n[0];
            Lt(n.map((function(t) {
                return t.shape
            }
            )), r);
            var a = n
              , i = {
                axis: e
            };
            return Dt.runKernelFunc((function(t, e) {
                var o = t.concat(n, r);
                return e(n),
                o
            }
            ), a, null, "Concat", i)
        }
    });
    function ue(t, e, n) {
        return void 0 === e && (e = "float32"),
        e = e || "float32",
        X(t),
        new ut(t,e,n)
    }
    function se(t, e) {
        void 0 === e && (e = !1),
        console.log(t.toString(e))
    }
    var ce = qt({
        cast_: function(t, e) {
            var n = Rt(t, "x", "cast");
            if (!C(e))
                throw new Error("Failed to cast to unknown dtype " + e);
            if ("string" === e && "string" !== n.dtype || "string" !== e && "string" === n.dtype)
                throw new Error("Only strings can be casted to strings");
            var r = {
                dtype: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.cast(n, e)
            }
            ), {
                x: n
            }, (function(t) {
                return {
                    x: function() {
                        return t.clone()
                    }
                }
            }
            ), "Cast", r)
        }
    })
      , le = qt({
        expandDims_: function(t, e) {
            void 0 === e && (e = 0);
            var n = Rt(t, "x", "expandDims", null);
            w(e <= n.rank, (function() {
                return "Axis must be <= rank of the tensor"
            }
            ));
            var r = n.shape.slice();
            return e < 0 && (w(-(n.rank + 1) <= e, (function() {
                return "Axis must be in the interval [" + -(n.rank + 1) + ", " + n.rank + "]"
            }
            )),
            e = n.rank + e + 1),
            r.splice(e, 0, 1),
            fe(n, r)
        }
    })
      , fe = qt({
        reshape_: function(t, e) {
            var n = Rt(t, "x", "reshape", null);
            e = F(e, n.size),
            w(n.size === S(e), (function() {
                return "new shape and old shape must have the same number of elements."
            }
            ));
            var r = {
                shape: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.reshape(n, e)
            }
            ), {
                x: n
            }, (function(t) {
                return {
                    x: function() {
                        return t.reshape(n.shape)
                    }
                }
            }
            ), "Reshape", r)
        }
    })
      , pe = qt({
        squeeze_: function(t, e) {
            var n = Rt(t, "x", "squeeze");
            return fe(n, A(n.shape, e).newShape)
        }
    })
      , he = qt({
        stack_: function(t, e) {
            void 0 === e && (e = 0);
            var n = Pt(t, "tensors", "stack");
            if (w(n.length >= 1, (function() {
                return "Pass at least one tensor to tf.stack"
            }
            )),
            1 === n.length)
                return n[0].expandDims(e);
            var r = n[0].rank
              , o = n[0].shape
              , a = n[0].dtype;
            w(e <= r, (function() {
                return "Axis must be <= rank of the tensor"
            }
            )),
            n.forEach((function(t) {
                k(o, t.shape, "All tensors passed to stack must have matching shapes")
            }
            )),
            n.forEach((function(t) {
                w(a === t.dtype, (function() {
                    return "All tensors passed to stack must have matching dtypes"
                }
                ))
            }
            ));
            var i = n.map((function(t) {
                return t.expandDims(e)
            }
            ));
            return ie(i, e)
        }
    })
      , de = qt({
        unstack_: function(t, e) {
            void 0 === e && (e = 0),
            e = e || 0;
            var n = Rt(t, "x", "unstack");
            w(e >= -n.shape.length && e < n.shape.length, (function() {
                return "Axis = " + e + " is not in [-" + n.shape.length + ", " + n.shape.length + ")"
            }
            )),
            e < 0 && (e += n.shape.length);
            var r = {
                axis: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.unstack(n, e)
            }
            ), {
                x: n
            }, (function(t) {
                return {
                    x: function() {
                        return he(t, e)
                    }
                }
            }
            ), "Unpack", r)
        }
    })
      , ve = function(t, e) {
        return r(this, void 0, void 0, (function() {
            var n, r, a, i, u, s, c, l, f, p;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return n = Rt(t, "x", "setdiff1d"),
                    r = Rt(e, "y", "setdiff1d"),
                    w(n.dtype === r.dtype, (function() {
                        return "x and y should have the same dtype, but got x (" + n.dtype + ") and y (" + r.dtype + ")."
                    }
                    )),
                    w(1 === n.rank, (function() {
                        return "x should be 1D tensor, but got x (" + n.shape + ")."
                    }
                    )),
                    w(1 === r.rank, (function() {
                        return "y should be 1D tensor, but got y (" + r.shape + ")."
                    }
                    )),
                    [4, n.data()];
                case 1:
                    return a = o.sent(),
                    [4, r.data()];
                case 2:
                    for (i = o.sent(),
                    u = new Set(i),
                    s = 0,
                    f = 0; f < a.length; f++)
                        u.has(a[f]) || s++;
                    for (c = new ut([s],n.dtype),
                    l = new ut([s],"int32"),
                    f = 0,
                    p = 0; f < a.length; f++)
                        u.has(a[f]) || (c.values[p] = a[f],
                        l.values[p] = f,
                        p++);
                    return [2, [c.toTensor(), l.toTensor()]]
                }
            }
            ))
        }
        ))
    };
    var me = qt({
        floorDiv_: function(t, e) {
            var n, r = Rt(t, "a", "floorDiv"), o = Rt(e, "b", "floorDiv");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.floorDiv(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "FloorDiv")
        }
    });
    var ge = qt({
        div_: function(t, e) {
            var n, r = Rt(t, "a", "div"), o = Rt(e, "b", "div");
            if (n = bt(r, o),
            r = n[0],
            o = n[1],
            "int32" === r.dtype && "int32" === o.dtype)
                return me(r, o);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.realDivide(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Div", {})
        }
    });
    var ye = qt({
        mul_: function(t, e) {
            var n, r = Rt(t, "a", "mul"), o = Rt(e, "b", "mul");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.multiply(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Multiply")
        }
    });
    function be(t, e) {
        w(G(t), (function() {
            return "The f passed in variableGrads(f) must be a function"
        }
        )),
        w(null == e || Array.isArray(e) && e.every((function(t) {
            return t instanceof mt
        }
        )), (function() {
            return "The varList passed in variableGrads(f, varList) must be an array of variables"
        }
        ));
        var n = null != e;
        if (!n)
            for (var r in e = [],
            Dt.registeredVariables)
                e.push(Dt.registeredVariables[r]);
        var o = n ? e.filter((function(t) {
            return !t.trainable
        }
        )) : null
          , a = e.length;
        w((e = e.filter((function(t) {
            return t.trainable
        }
        ))).length > 0, (function() {
            return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + a + " variables is trainable."
        }
        ));
        var i = Dt.gradients(t, e, null, !0)
          , u = i.value
          , s = i.grads;
        w(s.some((function(t) {
            return null != t
        }
        )), (function() {
            return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."
        }
        )),
        w(0 === u.rank, (function() {
            return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + u.rank + " tensor"
        }
        ));
        var c = {};
        return e.forEach((function(t, e) {
            null != s[e] && (c[t.name] = s[e])
        }
        )),
        null != o && o.forEach((function(t) {
            return c[t.name] = null
        }
        )),
        {
            value: u,
            grads: c
        }
    }
    function we(t) {
        return Dt.customGrad(t)
    }
    function ke(t) {
        if (t.filter((function(t) {
            return null == t
        }
        )).length > 0)
            throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
    }
    function xe(t, e) {
        for (var n = 0; n < t.length; ++n)
            if (t[t.length - n - 1] !== e - 1 - n)
                return !1;
        return !0
    }
    function Ee(t, e, n) {
        for (var r = t.length + e.length, o = [], a = 0, i = 0, u = 0; u < r; u++)
            -1 === n.indexOf(u) ? o.push(t[a++]) : o.push(e[i++]);
        return o
    }
    function Se(t, e) {
        for (var n = [], r = t.length, o = 0; o < r; o++)
            -1 === e.indexOf(o) && n.push(t[o]);
        return [n, e.map((function(e) {
            return t[e]
        }
        ))]
    }
    function De(t, e) {
        return Ee(t, e.map((function(t) {
            return 1
        }
        )), e)
    }
    function Ie(t, e) {
        if (xe(t, e))
            return null;
        for (var n = [], r = 0; r < e; ++r)
            -1 === t.indexOf(r) && n.push(r);
        return t.forEach((function(t) {
            return n.push(t)
        }
        )),
        n
    }
    function Ne(t) {
        return t.map((function(t, e) {
            return [e, t]
        }
        )).sort((function(t, e) {
            return t[1] - e[1]
        }
        )).map((function(t) {
            return t[0]
        }
        ))
    }
    function Fe(t, e) {
        for (var n = [], r = e - t; r < e; ++r)
            n.push(r);
        return n
    }
    function Me(t, e, n, r, o) {
        return e.rank < n.rank && (e = e.reshape(De(e.shape, r))),
        t.rank < n.rank && (t = t.reshape(De(t.shape, r))),
        {
            x: function() {
                var r = t.mul(n.equal(e).cast(t.dtype));
                return null == o ? r : r.transpose(o)
            }
        }
    }
    var Ae = qt({
        all_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "all", "bool")
              , o = M(e, r.shape)
              , a = o
              , i = Ie(a, r.rank);
            null != i && (r = r.transpose(i),
            a = Fe(a.length, r.rank));
            var u = Dt.runKernelFunc((function(t) {
                return t.all(r, a)
            }
            ), {
                $x: r
            });
            if (n) {
                var s = De(u.shape, o);
                return u.reshape(s)
            }
            return u
        }
    })
      , _e = qt({
        any_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "any", "bool")
              , o = M(e, r.shape)
              , a = o
              , i = Ie(a, r.rank);
            null != i && (r = r.transpose(i),
            a = Fe(a.length, r.rank));
            var u = Dt.runKernelFunc((function(t) {
                return t.any(r, a)
            }
            ), {
                $x: r
            });
            if (n) {
                var s = De(u.shape, o);
                return u.reshape(s)
            }
            return u
        }
    })
      , Te = qt({
        argMax_: function(t, e) {
            void 0 === e && (e = 0);
            var n = Rt(t, "x", "argMax");
            null == e && (e = 0);
            var r = M(e, n.shape)
              , o = Ie(r, n.rank);
            null != o && (n = n.transpose(o),
            r = Fe(r.length, n.rank));
            var a = {
                axis: r[0]
            }
              , i = [n];
            return Dt.runKernelFunc((function(t, e) {
                var o = t.argMax(n, r[0]);
                return e([n]),
                o
            }
            ), {
                x: n
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return ae(n)
                    }
                }
            }
            ), "ArgMax", a, i)
        }
    })
      , Be = qt({
        argMin_: function(t, e) {
            void 0 === e && (e = 0);
            var n = Rt(t, "x", "argMin");
            null == e && (e = 0);
            var r = M(e, n.shape)
              , o = Ie(r, n.rank);
            return null != o && (n = n.transpose(o),
            r = Fe(r.length, n.rank)),
            Dt.runKernelFunc((function(t, e) {
                var o = t.argMin(n, r[0]);
                return e([n]),
                o
            }
            ), {
                $x: n
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return ae(n)
                    }
                }
            }
            ))
        }
    })
      , Ce = qt({
        logSumExp_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "logSumExp")
              , o = M(e, r.shape)
              , a = r.max(o, !0)
              , i = r.sub(a).exp().sum(o).log()
              , u = a.reshape(i.shape).add(i);
            if (n) {
                var s = De(u.shape, o);
                return u.reshape(s)
            }
            return u
        }
    })
      , Re = qt({
        mean_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "mean")
              , o = M(e, r.shape)
              , a = S(Se(r.shape, o)[1]);
            return we((function(t) {
                var r = Vt(a);
                return {
                    value: (r.dtype === t.dtype ? t : t.cast(r.dtype)).div(r).sum(e, n),
                    gradFunc: function(e) {
                        var n = t.shape.slice();
                        return o.forEach((function(t) {
                            n[t] = 1
                        }
                        )),
                        e.reshape(n).mul(te(t.shape, "float32")).div(a)
                    }
                }
            }
            ))(r)
        }
    })
      , Pe = qt({
        min_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "min")
              , o = r
              , a = M(e, r.shape)
              , i = a
              , u = Ie(i, r.rank);
            null != u && (r = r.transpose(u),
            i = Fe(i.length, r.rank));
            var s = [r]
              , c = Dt.runKernelFunc((function(t, e) {
                var n = t.min(r, i);
                return e([o, n]),
                n
            }
            ), {
                x: r
            }, (function(t, e) {
                return Me(t, e[1], e[0], a, u)
            }
            ), "Min", {
                axes: i
            }, s, [!0]);
            if (n) {
                var l = De(c.shape, a);
                c = c.reshape(l)
            }
            return c
        }
    })
      , qe = qt({
        moments_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = M(e, (t = Rt(t, "x", "moments")).shape)
              , o = t.mean(r, n)
              , a = o.shape;
            n || (a = De(o.shape, r));
            var i = t.toFloat().sub(o.reshape(a)).square();
            return {
                mean: o,
                variance: i.mean(r, n)
            }
        }
    })
      , ze = qt({
        sum_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "sum");
            "bool" === r.dtype && (r = r.toInt());
            var o = M(e, r.shape);
            return we((function(t) {
                var e = Ie(o, t.rank)
                  , r = o
                  , a = t;
                null != e && (a = t.transpose(e),
                r = Fe(r.length, t.rank));
                var i = function(e) {
                    var n = t.shape.slice();
                    return o.forEach((function(t) {
                        n[t] = 1
                    }
                    )),
                    e.reshape(n).mul(te(t.shape, "float32"))
                }
                  , u = {
                    axes: r
                }
                  , s = Dt.runKernelFunc((function(t) {
                    return t.sum(a, r)
                }
                ), {
                    x: a
                }, (function(t) {
                    return {
                        x: function() {
                            return i(t)
                        }
                    }
                }
                ), "Sum", u);
                if (n) {
                    var c = De(s.shape, o);
                    s = s.reshape(c)
                }
                return {
                    value: s,
                    gradFunc: i
                }
            }
            ))(r)
        }
    })
      , Le = qt({
        prod_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "prod");
            "bool" === r.dtype && (r = r.toInt());
            var o = M(e, r.shape)
              , a = Ie(o, r.rank)
              , i = o
              , u = r;
            null != a && (u = r.transpose(a),
            i = Fe(i.length, r.rank));
            var s = Dt.runKernelFunc((function(t) {
                return t.prod(u, i)
            }
            ), {
                permutedX: u
            });
            if (n) {
                var c = De(s.shape, o);
                s = s.reshape(c)
            }
            return s
        }
    });
    var Oe = qt({
        square_: function(t) {
            var e = Rt(t, "x", "square")
              , n = [e];
            return Dt.runKernelFunc((function(t, n) {
                return n([e]),
                t.square(e)
            }
            ), {
                x: e
            }, null, "Square", {}, n, [])
        }
    });
    var We = qt({
        abs_: function(t) {
            var e = Rt(t, "x", "abs");
            return "complex64" === e.dtype ? Dt.runKernelFunc((function(t) {
                return t.complexAbs(e)
            }
            ), {
                $x: e
            }) : Dt.runKernelFunc((function(t, n) {
                var r = t.abs(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return t.mul(n.toFloat().step(-1))
                    }
                }
            }
            ), "Abs")
        }
    })
      , Ke = qt({
        acos_: function(t) {
            var e = Rt(t, "x", "acos");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.acos(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        var e = n.toFloat().square()
                          , r = Vt(1).sub(e).sqrt();
                        return t.div(r).neg()
                    }
                }
            }
            ))
        }
    })
      , Ge = qt({
        acosh_: function(t) {
            var e = Rt(t, "x", "acosh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.acosh(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        var e = n.toFloat().square().sub(1).sqrt();
                        return t.div(e)
                    }
                }
            }
            ))
        }
    })
      , Ue = qt({
        asin_: function(t) {
            var e = Rt(t, "x", "asin");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.asin(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(Vt(1).sub(n.toFloat().square()).sqrt())
                    }
                }
            }
            ))
        }
    })
      , He = qt({
        asinh_: function(t) {
            var e = Rt(t, "x", "asinh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.asinh(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        var e = Vt(1).add(n.toFloat().square()).sqrt();
                        return t.div(e)
                    }
                }
            }
            ))
        }
    })
      , Ve = qt({
        atan_: function(t) {
            var e = Rt(t, "x", "atan");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.atan(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(n.toFloat().square().add(1))
                    }
                }
            }
            ))
        }
    })
      , je = qt({
        atanh_: function(t) {
            var e = Rt(t, "x", "atanh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.atanh(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(Vt(1).sub(n.toFloat().square()))
                    }
                }
            }
            ))
        }
    })
      , $e = qt({
        ceil_: function(t) {
            var e = Rt(t, "x", "ceil");
            return Dt.runKernelFunc((function(t) {
                return t.ceil(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , Je = qt({
        clipByValue_: function(t, e, n) {
            var r = Rt(t, "x", "clipByValue");
            w(e <= n, (function() {
                return "Error in clip: min (" + e + ") must be less than or equal to max (" + n + ")."
            }
            ));
            var o = [r]
              , a = {
                min: e,
                max: n
            };
            return Dt.runKernelFunc((function(t, o) {
                var a = t.clip(r, e, n);
                return o([r]),
                a
            }
            ), {
                x: r
            }, (function(t, r) {
                var o = r[0];
                return {
                    x: function() {
                        return t.where(o.greaterEqual(e).logicalAnd(o.lessEqual(n)), ae(t))
                    }
                }
            }
            ), "ClipByValue", a, o)
        }
    })
      , Ye = qt({
        cos_: function(t) {
            var e = Rt(t, "x", "cos")
              , n = [e];
            return Dt.runKernelFunc((function(t, n) {
                var r = t.cos(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return n.toFloat().sin().neg().mul(t)
                    }
                }
            }
            ), "Cos", {}, n)
        }
    })
      , Xe = qt({
        cosh_: function(t) {
            var e = Rt(t, "x", "cosh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.cosh(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return n.toFloat().sinh().mul(t)
                    }
                }
            }
            ))
        }
    })
      , Ze = qt({
        erf_: function(t) {
            var e = Rt(t, "x", "erf");
            return w("int32" === e.dtype || "float32" === e.dtype, (function() {
                return "Input dtype must be `int32` or `float32`."
            }
            )),
            "int32" === e.dtype && (e = e.toFloat()),
            Dt.runKernelFunc((function(t, n) {
                var r = t.erf(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.mul(n.square().neg().exp().mul(2 / Math.sqrt(Math.PI)))
                    }
                }
            }
            ))
        }
    })
      , Qe = qt({
        exp_: function(t) {
            var e = Rt(t, "x", "exp");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.exp(e);
                return n([r]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                return {
                    x: function() {
                        return t.mul(e[0])
                    }
                }
            }
            ), "Exp", {}, [], [!0])
        }
    })
      , tn = qt({
        expm1_: function(t) {
            var e = Rt(t, "x", "expm1");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.expm1(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.mul(n.exp())
                    }
                }
            }
            ))
        }
    })
      , en = qt({
        floor_: function(t) {
            var e = Rt(t, "x", "floor");
            return Dt.runKernelFunc((function(t) {
                return t.floor(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , nn = qt({
        log_: function(t) {
            var e = Rt(t, "x", "log")
              , n = [e];
            return Dt.runKernelFunc((function(t, n) {
                var r = t.log(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return t.div(n.toFloat())
                    }
                }
            }
            ), "Log", {}, n)
        }
    })
      , rn = qt({
        log1p_: function(t) {
            var e = Rt(t, "x", "log1p");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.log1p(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(n.add(1))
                    }
                }
            }
            ))
        }
    })
      , on = qt({
        logSigmoid_: function(t) {
            var e = Rt(t, "x", "logSigmoid");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.softplus(e.neg()).neg();
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.mul(n.neg().sigmoid())
                    }
                }
            }
            ))
        }
    })
      , an = qt({
        neg_: function(t) {
            var e = Rt(t, "x", "neg")
              , n = [e];
            return Dt.runKernelFunc((function(t) {
                return t.neg(e)
            }
            ), {
                x: e
            }, (function(t) {
                return {
                    x: function() {
                        return t.neg()
                    }
                }
            }
            ), "Neg", {}, n)
        }
    })
      , un = qt({
        reciprocal_: function(t) {
            var e = Rt(t, "x", "reciprocal");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.reciprocal(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(n.square().neg())
                    }
                }
            }
            ))
        }
    })
      , sn = qt({
        round_: function(t) {
            var e = Rt(t, "x", "round");
            return Dt.runKernelFunc((function(t) {
                return t.round(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , cn = qt({
        rsqrt_: function(t) {
            var e = Rt(t, "x", "rsqrt")
              , n = [e];
            return Dt.runKernelFunc((function(t, n) {
                var r = t.rsqrt(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return t.div(n.pow(1.5).mul(2)).neg()
                    }
                }
            }
            ), "Rsqrt", {}, n)
        }
    })
      , ln = qt({
        sigmoid_: function(t) {
            var e = Rt(t, "x", "sigmoid");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.sigmoid(e);
                return n([r]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return t.mul(n.mul(Vt(1).sub(n)))
                    }
                }
            }
            ), "Sigmoid")
        }
    })
      , fn = qt({
        sign_: function(t) {
            var e = Rt(t, "x", "sign");
            return Dt.runKernelFunc((function(t) {
                return t.sign(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , pn = qt({
        isNaN_: function(t) {
            var e = Rt(t, "x", "isNaN");
            return Dt.runKernelFunc((function(t) {
                return t.isNaN(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , hn = qt({
        isInf_: function(t) {
            var e = Rt(t, "x", "isInf");
            return Dt.runKernelFunc((function(t) {
                return t.isInf(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , dn = qt({
        isFinite_: function(t) {
            var e = Rt(t, "x", "isFinite");
            return Dt.runKernelFunc((function(t) {
                return t.isFinite(e)
            }
            ), {
                $x: e
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , vn = qt({
        sin_: function(t) {
            var e = Rt(t, "x", "sin")
              , n = [e];
            return Dt.runKernelFunc((function(t, n) {
                var r = t.sin(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return n.toFloat().cos().mul(t)
                    }
                }
            }
            ), "Sin", {}, n)
        }
    })
      , mn = qt({
        sinh_: function(t) {
            var e = Rt(t, "x", "sinh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.sinh(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return n.toFloat().cosh().mul(t)
                    }
                }
            }
            ))
        }
    })
      , gn = qt({
        softplus_: function(t) {
            var e = Rt(t, "x", "softplus");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.softplus(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.mul(n.sigmoid())
                    }
                }
            }
            ))
        }
    })
      , yn = qt({
        sqrt_: function(t) {
            var e = Rt(t, "x", "sqrt");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.sqrt(e);
                return n([e]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return t.div(n.toFloat().sqrt().mul(2))
                    }
                }
            }
            ), "Sqrt", {})
        }
    })
      , bn = qt({
        step_: function(t, e) {
            void 0 === e && (e = 0);
            var n = Rt(t, "x", "step");
            return Dt.runKernelFunc((function(t) {
                return t.step(n, e)
            }
            ), {
                $x: n
            }, (function(t) {
                return {
                    $x: function() {
                        return ae(t)
                    }
                }
            }
            ))
        }
    })
      , wn = qt({
        tan_: function(t) {
            var e = Rt(t, "x", "tan");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.tan(e);
                return n([e]),
                r
            }
            ), {
                $x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return t.div(n.cos().square())
                    }
                }
            }
            ))
        }
    })
      , kn = qt({
        tanh_: function(t) {
            var e = Rt(t, "x", "tanh");
            return Dt.runKernelFunc((function(t, n) {
                var r = t.tanh(e);
                return n([r]),
                r
            }
            ), {
                x: e
            }, (function(t, e) {
                var n = e[0];
                return {
                    x: function() {
                        return Vt(1).sub(n.square()).mul(t)
                    }
                }
            }
            ), "Tanh", {}, null, [!0])
        }
    })
      , xn = {
        kernelName: "Atan2",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = zt(Oe(n), Oe(r))
                      , a = ye(t, ge(r, e))
                      , i = Mt(n.shape, o);
                    return i.length > 0 && (a = ze(a, i)),
                    fe(a, n.shape)
                },
                b: function() {
                    var e = zt(Oe(n), Oe(r))
                      , a = an(ye(t, ge(n, e)))
                      , i = Mt(r.shape, o);
                    return i.length > 0 && (a = ze(a, i)),
                    fe(a, r.shape)
                }
            }
        }
    };
    function En(t, e, n, r, o, a, i) {
        void 0 === i && (i = "channelsLast");
        var u, s = Fn(e), c = s[0], l = s[1];
        if ("channelsLast" === i)
            u = [c, l, t[3], t[3]];
        else {
            if ("channelsFirst" !== i)
                throw new Error("Unknown dataFormat " + i);
            u = [c, l, t[1], t[1]]
        }
        return Dn(t, u, n, r, o, a, !1, i)
    }
    function Sn(t, e, n, r, o, a, i) {
        void 0 === i && (i = "NDHWC");
        var u, s, c = Mn(e), l = c[0], f = c[1], p = c[2];
        if ("NDHWC" === i)
            s = "channelsLast",
            u = [l, f, p, t[4], t[4]];
        else {
            if ("NCDHW" !== i)
                throw new Error("Unknown dataFormat " + i);
            s = "channelsFirst",
            u = [l, f, p, t[1], t[1]]
        }
        return In(t, u, n, r, o, !1, s, a)
    }
    function Dn(t, e, n, r, o, a, i, u) {
        void 0 === i && (i = !1),
        void 0 === u && (u = "channelsLast");
        var s = [-1, -1, -1, -1]
          , c = s[0]
          , l = s[1]
          , f = s[2]
          , p = s[3];
        if ("channelsLast" === u)
            c = t[0],
            l = t[1],
            f = t[2],
            p = t[3];
        else {
            if ("channelsFirst" !== u)
                throw new Error("Unknown dataFormat " + u);
            c = t[0],
            p = t[1],
            l = t[2],
            f = t[3]
        }
        var h, d = e[0], v = e[1], m = e[3], g = Fn(n), y = g[0], b = g[1], k = Fn(r), x = k[0], E = k[1], S = An(d, x), D = An(v, E), N = function(t, e, n, r, o, a, i, u, s) {
            var c, l, f;
            if ("number" == typeof t) {
                c = {
                    top: t,
                    bottom: t,
                    left: t,
                    right: t,
                    type: 0 === t ? "VALID" : "NUMBER"
                };
                var p = function(t, e, n, r, o) {
                    null == r && (r = Nn(t, e, n));
                    var a = t[0]
                      , i = t[1]
                      , u = _n((a - e + 2 * r) / n + 1, o);
                    w(I(u), (function() {
                        return "The output # of rows (" + u + ") must be an integer. Change the stride and/or zero pad parameters"
                    }
                    ));
                    var s = _n((i - e + 2 * r) / n + 1, o);
                    return w(I(s), (function() {
                        return "The output # of columns (" + s + ") must be an integer. Change the stride and/or zero pad parameters"
                    }
                    )),
                    [u, s]
                }([e, n], a, r, t, u);
                l = p[0],
                f = p[1]
            } else if ("same" === t) {
                l = Math.ceil(e / r),
                f = Math.ceil(n / o);
                var h = Math.max(0, (l - 1) * r + a - e)
                  , d = Math.max(0, (f - 1) * o + i - n)
                  , v = Math.floor(h / 2)
                  , m = h - v
                  , g = Math.floor(d / 2);
                c = {
                    top: v,
                    bottom: m,
                    left: g,
                    right: b = d - g,
                    type: "SAME"
                }
            } else if ("valid" === t)
                c = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    type: "VALID"
                },
                l = Math.ceil((e - a + 1) / r),
                f = Math.ceil((n - i + 1) / o);
            else {
                if ("object" != typeof t)
                    throw Error("Unknown padding parameter: " + t);
                var y = "channelsLast" === s ? t[1][0] : t[2][0]
                  , b = (m = "channelsLast" === s ? t[1][1] : t[2][1],
                g = "channelsLast" === s ? t[2][0] : t[3][0],
                "channelsLast" === s ? t[2][1] : t[3][1]);
                c = {
                    top: y,
                    bottom: m,
                    left: g,
                    right: b,
                    type: 0 === y && 0 === m && 0 === g && 0 === b ? "VALID" : "EXPLICIT"
                },
                l = _n((e - a + y + m) / r + 1, u),
                f = _n((n - i + g + b) / o + 1, u)
            }
            return {
                padInfo: c,
                outHeight: l,
                outWidth: f
            }
        }(o, l, f, y, b, S, D, a, u), F = N.padInfo, M = N.outHeight, A = N.outWidth, _ = i ? m * p : m;
        return "channelsFirst" === u ? h = [c, _, M, A] : "channelsLast" === u && (h = [c, M, A, _]),
        {
            batchSize: c,
            dataFormat: u,
            inHeight: l,
            inWidth: f,
            inChannels: p,
            outHeight: M,
            outWidth: A,
            outChannels: _,
            padInfo: F,
            strideHeight: y,
            strideWidth: b,
            filterHeight: d,
            filterWidth: v,
            effectiveFilterHeight: S,
            effectiveFilterWidth: D,
            dilationHeight: x,
            dilationWidth: E,
            inShape: t,
            outShape: h,
            filterShape: e
        }
    }
    function In(t, e, n, r, o, a, i, u) {
        void 0 === a && (a = !1),
        void 0 === i && (i = "channelsLast");
        var s = [-1, -1, -1, -1, -1]
          , c = s[0]
          , l = s[1]
          , f = s[2]
          , p = s[3]
          , h = s[4];
        if ("channelsLast" === i)
            c = t[0],
            l = t[1],
            f = t[2],
            p = t[3],
            h = t[4];
        else {
            if ("channelsFirst" !== i)
                throw new Error("Unknown dataFormat " + i);
            c = t[0],
            h = t[1],
            l = t[2],
            f = t[3],
            p = t[4]
        }
        var d, v = e[0], m = e[1], g = e[2], y = e[4], b = Mn(n), k = b[0], x = b[1], E = b[2], S = Mn(r), D = S[0], N = S[1], F = S[2], M = An(v, D), A = An(m, N), _ = An(g, F), T = function(t, e, n, r, o, a, i, u, s, c, l) {
            var f, p, h, d;
            if ("number" == typeof t) {
                f = {
                    top: t,
                    bottom: t,
                    left: t,
                    right: t,
                    front: t,
                    back: t,
                    type: 0 === t ? "VALID" : "NUMBER"
                };
                var v = function(t, e, n, r, o, a) {
                    null == o && (o = Nn(t, e, r));
                    var i = t[0]
                      , u = t[1]
                      , s = t[2]
                      , c = _n((i - e + 2 * o) / r + 1, a);
                    w(I(c), (function() {
                        return "The output # of depths (" + c + ") must be an integer. Change the stride and/or zero pad parameters"
                    }
                    ));
                    var l = _n((u - e + 2 * o) / r + 1, a);
                    w(I(l), (function() {
                        return "The output # of rows (" + l + ") must be an integer. Change the stride and/or zero pad parameters"
                    }
                    ));
                    var f = _n((s - e + 2 * o) / r + 1, a);
                    return w(I(f), (function() {
                        return "The output # of columns (" + f + ") must be an integer. Change the stride and/or zero pad parameters"
                    }
                    )),
                    [c, l, f, n]
                }([e, n, r, 1], u, 1, o, t, l);
                p = v[0],
                h = v[1],
                d = v[2]
            } else if ("same" === t) {
                p = Math.ceil(e / o),
                h = Math.ceil(n / a),
                d = Math.ceil(r / i);
                var m = (p - 1) * o + u - e
                  , g = (h - 1) * a + s - n
                  , y = (d - 1) * i + c - r
                  , b = Math.floor(m / 2)
                  , k = m - b
                  , x = Math.floor(g / 2)
                  , E = g - x
                  , S = Math.floor(y / 2);
                f = {
                    top: x,
                    bottom: E,
                    left: S,
                    right: y - S,
                    front: b,
                    back: k,
                    type: "SAME"
                }
            } else {
                if ("valid" !== t)
                    throw Error("Unknown padding parameter: " + t);
                f = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    front: 0,
                    back: 0,
                    type: "VALID"
                },
                p = Math.ceil((e - u + 1) / o),
                h = Math.ceil((n - s + 1) / a),
                d = Math.ceil((r - c + 1) / i)
            }
            return {
                padInfo: f,
                outDepth: p,
                outHeight: h,
                outWidth: d
            }
        }(o, l, f, p, k, x, E, M, A, _, u), B = T.padInfo, C = T.outDepth, R = T.outHeight, P = T.outWidth, q = a ? y * h : y;
        return "channelsFirst" === i ? d = [c, q, C, R, P] : "channelsLast" === i && (d = [c, C, R, P, q]),
        {
            batchSize: c,
            dataFormat: i,
            inDepth: l,
            inHeight: f,
            inWidth: p,
            inChannels: h,
            outDepth: C,
            outHeight: R,
            outWidth: P,
            outChannels: q,
            padInfo: B,
            strideDepth: k,
            strideHeight: x,
            strideWidth: E,
            filterDepth: v,
            filterHeight: m,
            filterWidth: g,
            effectiveFilterDepth: M,
            effectiveFilterHeight: A,
            effectiveFilterWidth: _,
            dilationDepth: D,
            dilationHeight: N,
            dilationWidth: F,
            inShape: t,
            outShape: d,
            filterShape: e
        }
    }
    function Nn(t, e, n, r) {
        void 0 === r && (r = 1);
        var o = An(e, r);
        return Math.floor((t[0] * (n - 1) - n + o) / 2)
    }
    function Fn(t) {
        return "number" == typeof t ? [t, t, t] : 2 === t.length ? [t[0], t[1], 1] : t
    }
    function Mn(t) {
        return "number" == typeof t ? [t, t, t] : t
    }
    function An(t, e) {
        return e <= 1 ? t : t + (t - 1) * (e - 1)
    }
    function _n(t, e) {
        if (!e)
            return t;
        switch (e) {
        case "round":
            return Math.round(t);
        case "ceil":
            return Math.ceil(t);
        case "floor":
            return Math.floor(t);
        default:
            throw new Error("Unknown roundingMode " + e)
        }
    }
    function Tn(t) {
        var e = Fn(t)
          , n = e[0]
          , r = e[1]
          , o = e[2];
        return 1 === n && 1 === r && 1 === o
    }
    function Bn(t, e) {
        return Tn(t) || Tn(e)
    }
    function Cn(t) {
        if ("NHWC" === t)
            return "channelsLast";
        if ("NCHW" === t)
            return "channelsFirst";
        throw new Error("Unknown dataFormat " + t)
    }
    var Rn = qt({
        avgPool3dBackprop_: function(t, e, n, r, o, a, i) {
            void 0 === o && (o = [1, 1, 1]);
            var u = Rt(t, "dy", "avgPool3dBackprop")
              , s = Rt(e, "input", "avgPool3dBackprop")
              , c = u
              , l = s
              , f = !1;
            4 === s.rank && (f = !0,
            c = fe(u, [1, u.shape[0], u.shape[1], u.shape[2], u.shape[3]]),
            l = fe(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]])),
            w(5 === c.rank, (function() {
                return "Error in avgPool3dBackprop: dy must be rank 5 but got rank " + c.rank + "."
            }
            )),
            w(5 === l.rank, (function() {
                return "Error in avgPool3dBackprop: input must be rank 5 but got rank " + l.rank + "."
            }
            )),
            w(Bn(r, o), (function() {
                return "Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + o + "'"
            }
            )),
            null != i && w(I(a), (function() {
                return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + a + "."
            }
            ));
            var p = {
                dy: c,
                input: l
            }
              , h = {
                filterSize: n,
                strides: r,
                dilations: o,
                pad: a,
                dimRoundingMode: i
            }
              , d = Dt.runKernelFunc((function(t) {
                var e = Sn(l.shape, n, r, o, a, i);
                return t.avgPool3dBackprop(c, l, e)
            }
            ), p, null, "AvgPool3DBackprop", h);
            return f ? fe(d, [d.shape[1], d.shape[2], d.shape[3], d.shape[4]]) : d
        }
    })
      , Pn = {
        kernelName: "AvgPool3D",
        inputsToSave: ["x"],
        gradFunc: function(t, e, n) {
            var r = e[0]
              , o = n
              , a = o.filterSize
              , i = o.strides
              , u = o.dilations
              , s = o.pad
              , c = o.dimRoundingMode
              , l = null == u ? [1, 1, 1] : u;
            return {
                x: function() {
                    return Rn(t, r, a, i, l, s, c)
                }
            }
        }
    };
    var qn = qt({
        avgPoolBackprop_: function(t, e, n, r, o) {
            var a = Rt(t, "dy", "avgPoolBackprop")
              , i = Rt(e, "input", "avgPoolBackprop");
            w(i.rank === a.rank, (function() {
                return "Rank of input (" + i.rank + ") does not match rank of dy (" + a.rank + ")"
            }
            ));
            var u = i
              , s = a
              , c = !1;
            3 === i.rank && (c = !0,
            u = fe(i, [1, i.shape[0], i.shape[1], i.shape[2]]),
            s = fe(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            w(4 === s.rank, (function() {
                return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + s.rank + "."
            }
            )),
            w(4 === u.rank, (function() {
                return "Error in avgPoolBackprop: input must be rank 4 but got rank " + u.rank + "."
            }
            ));
            var l = {
                dy: s,
                input: u
            }
              , f = {
                filterSize: n,
                strides: r,
                pad: o
            }
              , p = Dt.runKernelFunc((function(t) {
                var e = En(u.shape, n, r, 1, o);
                return t.avgPoolBackprop(s, u, e)
            }
            ), l, null, "AvgPoolBackprop", f);
            return c ? fe(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
        }
    })
      , zn = {
        kernelName: "AvgPool",
        inputsToSave: ["x"],
        gradFunc: function(t, e, n) {
            var r = e[0]
              , o = n
              , a = o.filterSize
              , i = o.strides
              , u = o.pad;
            return {
                x: function() {
                    return qn(t, r, a, i, u)
                }
            }
        }
    };
    var Ln = qt({
        matMul_: function(t, e, n, r) {
            var o;
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = Rt(t, "a", "matMul")
              , i = Rt(e, "b", "matMul");
            o = bt(a, i),
            a = o[0],
            i = o[1],
            w(a.rank >= 2 && i.rank >= 2 && a.rank === i.rank, (function() {
                return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + a.rank + " and " + i.rank + "."
            }
            ));
            var u = n ? a.shape[a.rank - 2] : a.shape[a.rank - 1]
              , s = r ? i.shape[i.rank - 1] : i.shape[i.rank - 2]
              , c = n ? a.shape[a.rank - 1] : a.shape[a.rank - 2]
              , l = r ? i.shape[i.rank - 2] : i.shape[i.rank - 1]
              , f = a.shape.slice(0, -2)
              , p = i.shape.slice(0, -2)
              , h = S(f)
              , d = S(p);
            w(D(f, p), (function() {
                return "Error in matMul: outer dimensions (" + f + ") and (" + p + ") of Tensors with shapes " + a.shape + " and " + i.shape + " must match."
            }
            )),
            w(u === s, (function() {
                return "Error in matMul: inner shapes (" + u + ") and (" + s + ") of Tensors with shapes " + a.shape + " and " + i.shape + " and transposeA=" + n + " and transposeB=" + r + " must match."
            }
            ));
            var v = a.shape.slice(0, -2).concat([c, l])
              , m = fe(a, n ? [h, u, c] : [h, c, u])
              , g = fe(i, r ? [d, l, s] : [d, s, l])
              , y = {
                a: m,
                b: g
            }
              , b = {
                transposeA: n,
                transposeB: r
            }
              , k = Dt.runKernelFunc((function(t, e) {
                return e([m, g]),
                t.batchMatMul(m, g, n, r)
            }
            ), y, null, "BatchMatMul", b);
            return fe(k, v)
        }
    })
      , On = {
        kernelName: "BatchMatMul",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.transposeA
              , s = i.transposeB;
            return u || s ? !u && s ? {
                a: function() {
                    return Ln(t, a, !1, !1)
                },
                b: function() {
                    return Ln(t, o, !0, !1)
                }
            } : u && !s ? {
                a: function() {
                    return Ln(a, t, !1, !0)
                },
                b: function() {
                    return Ln(o, t, !1, !1)
                }
            } : {
                a: function() {
                    return Ln(a, t, !0, !0)
                },
                b: function() {
                    return Ln(t, o, !0, !0)
                }
            } : {
                a: function() {
                    return Ln(t, a, !1, !0)
                },
                b: function() {
                    return Ln(o, t, !0, !1)
                }
            }
        }
    };
    var Wn = qt({
        spaceToBatchND_: function(t, e, n) {
            var r = Rt(t, "x", "spaceToBatchND");
            w(r.rank >= 1 + e.length, (function() {
                return "input rank " + r.rank + " should be > than [blockShape] " + e.length
            }
            )),
            w(n.length === e.length, (function() {
                return "paddings.shape[0] " + n.length + " must be equal to [blockShape] " + e.length
            }
            )),
            w(r.shape.reduce((function(t, r, o) {
                return o > 0 && o <= e.length ? t && (r + n[o - 1][0] + n[o - 1][1]) % e[o - 1] == 0 : t
            }
            ), !0), (function() {
                return "input spatial dimensions " + r.shape.slice(1) + " with paddings " + n.toString() + " must be divisible by blockShapes " + e.toString()
            }
            ));
            var o = {
                x: r
            }
              , a = {
                blockShape: e,
                paddings: n
            };
            return Dt.runKernelFunc((function(t) {
                return t.spaceToBatchND(r, e, n)
            }
            ), o, null, "SpaceToBatchND", a)
        }
    })
      , Kn = {
        kernelName: "BatchToSpaceND",
        gradFunc: function(t, e, n) {
            var r = n
              , o = r.blockShape
              , a = r.crops;
            return {
                x: function() {
                    return Wn(t, o, a)
                }
            }
        }
    }
      , Gn = {
        kernelName: "BroadcastTo",
        gradFunc: function(t, e, n) {
            for (var r = n, o = r.inputShape, a = r.shape, i = Array.from(a), u = o.length - 1; u >= 0; u--)
                if (o[u] === a[u])
                    i[u] = 1;
                else if (1 !== o[u])
                    throw new Error("broadcastTo(): [" + o + "] cannot be broadcast to [" + a + "].");
            var s = [];
            for (u = 0; u < i.length; u++)
                i[u] > 1 && s.push(u);
            return {
                x: function() {
                    return ze(t, s, !0)
                }
            }
        }
    };
    var Un = qt({
        split_: function(t, e, n) {
            void 0 === n && (n = 0);
            var r, o = Rt(t, "x", "split"), a = M(n, o.shape)[0];
            "number" == typeof e ? (w(o.shape[a] % e == 0, (function() {
                return "Number of splits must evenly divide the axis."
            }
            )),
            r = new Array(e).fill(o.shape[a] / e)) : (w(o.shape[a] === e.reduce((function(t, e) {
                return t + e
            }
            )), (function() {
                return "The sum of sizes must match the size of the axis dimension."
            }
            )),
            r = e);
            var i = {
                x: o
            }
              , u = {
                numOrSizeSplits: e,
                axis: n
            };
            return Dt.runKernelFunc((function(t, e) {
                return t.split(o, r, a)
            }
            ), i, null, "SplitV", u)
        }
    })
      , Hn = {
        kernelName: "Concat",
        saveAllInputs: !0,
        gradFunc: function(t, e, n) {
            var r = e.map((function(t) {
                return t.shape
            }
            ))
              , o = M(n.axis, e[0].shape)[0]
              , a = r.map((function(t) {
                return t[o]
            }
            ));
            return Un(t, a, o).map((function(t) {
                return function() {
                    return t
                }
            }
            ))
        }
    };
    var Vn = qt({
        conv2DBackpropFilter_: function(t, e, n, r, o, a, i) {
            void 0 === a && (a = "NHWC");
            var u = t;
            3 === t.rank && (u = fe(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var s = e;
            3 === s.rank && (s = fe(e, [1, e.shape[0], e.shape[1], e.shape[2]])),
            w(4 === u.rank, (function() {
                return "Error in conv2dDerFilter: input must be rank 4, but got shape " + u.shape + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + s.shape + "."
            }
            )),
            w(4 === n.length, (function() {
                return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."
            }
            ));
            var c = "NHWC" === a ? u.shape[3] : u.shape[1]
              , l = "NHWC" === a ? s.shape[3] : s.shape[1];
            w(c === n[2], (function() {
                return "Error in conv2dDerFilter: depth of input " + c + ") must match input depth in filter (" + n[2] + "."
            }
            )),
            w(l === n[3], (function() {
                return "Error in conv2dDerFilter: depth of dy (" + l + ") must match output depth for filter (" + n[3] + ")."
            }
            )),
            null != i && w(I(o), (function() {
                return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + "."
            }
            ));
            var f = {
                x: u,
                dy: s
            }
              , p = {
                strides: r,
                pad: o,
                dataFormat: a,
                dimRoundingMode: i
            };
            return Dt.runKernelFunc((function(t) {
                var e = Cn(a)
                  , c = Dn(u.shape, n, r, 1, o, i, !1, e);
                return t.conv2dDerFilter(u, s, c)
            }
            ), f, null, "Conv2DBackpropFilter", p)
        }
    });
    var jn = qt({
        conv2DBackpropInput_: function(t, e, n, r, o, a, i) {
            void 0 === a && (a = "NHWC"),
            w(t.length === e.rank, (function() {
                return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
            }
            ));
            var u = t
              , s = e
              , c = !1;
            3 === e.rank && (c = !0,
            s = fe(e, [1, e.shape[0], e.shape[1], e.shape[2]]),
            u = [1, t[0], t[1], t[2]]),
            w(4 === u.length, (function() {
                return "Error in conv2dDerInput: inShape must be length 4, but got length " + u.length + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in conv2dDerInput: dy must be rank 4, but got rank " + s.rank
            }
            )),
            w(4 === n.rank, (function() {
                return "Error in conv2dDerInput: filter must be rank 4, but got rank " + n.rank
            }
            ));
            var l = "NHWC" === a ? u[3] : u[1]
              , f = "NHWC" === a ? s.shape[3] : s.shape[1];
            w(l === n.shape[2], (function() {
                return "Error in conv2dDerInput: depth of input (" + l + ") must match input depth for filter " + n.shape[2] + "."
            }
            )),
            w(f === n.shape[3], (function() {
                return "Error in conv2dDerInput: depth of output (" + f + ") must match output depth for filter " + n.shape[3] + "."
            }
            )),
            null != i && w(I(o), (function() {
                return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + "."
            }
            ));
            var p = {
                dy: s,
                filter: n
            }
              , h = {
                strides: r,
                pad: o,
                dataFormat: a,
                dimRoundingMode: i
            }
              , d = Dt.runKernelFunc((function(t, e) {
                var c = Cn(a)
                  , l = Dn(u, n.shape, r, 1, o, i, !1, c)
                  , f = t.conv2dDerInput(s, n, l);
                return e([s, n]),
                f
            }
            ), p, null, "Conv2DBackpropInput", h);
            return c ? fe(d, [d.shape[1], d.shape[2], d.shape[3]]) : d
        }
    })
      , $n = {
        kernelName: "Conv2D",
        inputsToSave: ["x", "filter"],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.dilations
              , s = i.strides
              , c = i.pad
              , l = i.dataFormat;
            return w(Tn(u), (function() {
                return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u + "'"
            }
            )),
            {
                x: function() {
                    return jn(o.shape, t, a, s, c, l)
                },
                filter: function() {
                    return Vn(o, t, a.shape, s, c, l)
                }
            }
        }
    };
    var Jn = qt({
        conv2d_: function(t, e, n, r, o, a, i) {
            void 0 === o && (o = "NHWC"),
            void 0 === a && (a = [1, 1]);
            var u = Rt(t, "x", "conv2d")
              , s = Rt(e, "filter", "conv2d")
              , c = u
              , l = !1;
            3 === u.rank && (l = !0,
            c = fe(u, [1, u.shape[0], u.shape[1], u.shape[2]])),
            w(4 === c.rank, (function() {
                return "Error in conv2d: input must be rank 4, but got rank " + c.rank + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in conv2d: filter must be rank 4, but got rank " + s.rank + "."
            }
            )),
            null != i && w(I(r), (function() {
                return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + r + "."
            }
            ));
            var f = "NHWC" === o ? c.shape[3] : c.shape[1];
            w(f === s.shape[2], (function() {
                return "Error in conv2d: depth of input (" + f + ") must match input depth for filter " + s.shape[2] + "."
            }
            )),
            w(Bn(n, a), (function() {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + a + "'"
            }
            ));
            var p = {
                x: c,
                filter: s
            }
              , h = {
                strides: n,
                pad: r,
                dataFormat: o,
                dilations: a,
                dimRoundingMode: i
            }
              , d = Dt.runKernelFunc((function(t, e) {
                var u = Cn(o)
                  , l = Dn(c.shape, s.shape, n, a, r, i, !1, u)
                  , f = t.conv2d(c, s, l);
                return e([c, s]),
                f
            }
            ), p, null, "Conv2D", h);
            return l ? fe(d, [d.shape[1], d.shape[2], d.shape[3]]) : d
        }
    })
      , Yn = {
        kernelName: "Conv2DBackpropInput",
        inputsToSave: ["dy", "filter"],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.strides
              , s = i.pad
              , c = i.dataFormat
              , l = i.dimRoundingMode;
            return {
                dy: function() {
                    return Jn(t, a, u, s, c, 1, l)
                },
                filter: function() {
                    return Vn(t, o, a.shape, u, s, c, l)
                }
            }
        }
    };
    var Xn = qt({
        conv3DBackpropFilter_: function(t, e, n, r, o) {
            var a = t;
            4 === t.rank && (a = fe(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]]));
            var i = e;
            4 === i.rank && (i = fe(e, [1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]])),
            w(5 === a.rank, (function() {
                return "Error in conv3dDerFilter: input must be rank 5, but got shape " + a.shape + "."
            }
            )),
            w(5 === i.rank, (function() {
                return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + i.shape + "."
            }
            )),
            w(5 === n.length, (function() {
                return "Error in conv3dDerFilter: filterShape must be length 5, but got " + n + "."
            }
            )),
            w(a.shape[4] === n[3], (function() {
                return "Error in conv3dDerFilter: depth of input " + a.shape[4] + ") must match input depth in filter (" + n[3] + "."
            }
            )),
            w(i.shape[4] === n[4], (function() {
                return "Error in conv3dDerFilter: depth of dy (" + i.shape[4] + ") must match output depth for filter (" + n[4] + ")."
            }
            ));
            var u = {
                x: a,
                y: i
            }
              , s = {
                strides: r,
                pad: o
            };
            return Dt.runKernelFunc((function(t) {
                var e = In(a.shape, n, r, 1, o);
                return t.conv3dDerFilter(a, i, e)
            }
            ), u, null, "Conv3DBackpropFilterV2", s)
        }
    });
    var Zn = qt({
        conv3DBackpropInput_: function(t, e, n, r, o) {
            w(t.length === e.rank, (function() {
                return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
            }
            ));
            var a = t
              , i = e
              , u = !1;
            4 === e.rank && (u = !0,
            i = fe(e, [1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]]),
            a = [1, t[0], t[1], t[2], t[3]]);
            var s = a[4]
              , c = i.shape[4];
            w(5 === a.length, (function() {
                return "Error in conv3dDerInput: inShape must be length 5, but got length " + a.length + "."
            }
            )),
            w(5 === i.rank, (function() {
                return "Error in conv3dDerInput: dy must be rank 5, but got rank " + i.rank
            }
            )),
            w(5 === n.rank, (function() {
                return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank
            }
            )),
            w(s === n.shape[3], (function() {
                return "Error in conv3dDerInput: depth of input (" + s + ") must match input depth for filter " + n.shape[3] + "."
            }
            )),
            w(c === n.shape[4], (function() {
                return "Error in conv3dDerInput: depth of output (" + c + ") must match output depth for filter " + n.shape[4] + "."
            }
            ));
            var l = {
                dy: i
            }
              , f = {
                pad: o
            }
              , p = Dt.runKernelFunc((function(t) {
                var e = In(a, n.shape, r, 1, o);
                return t.conv3dDerInput(i, n, e)
            }
            ), l, null, "Conv3DBackpropInputV2", f);
            return u ? fe(p, [p.shape[1], p.shape[2], p.shape[3], p.shape[4]]) : p
        }
    })
      , Qn = {
        kernelName: "Conv3D",
        inputsToSave: ["x", "filter"],
        gradFunc: function(t, e, n) {
            var r = n
              , o = r.dilations
              , a = r.strides
              , i = r.pad;
            w(Tn(o), (function() {
                return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + o + "'"
            }
            ));
            var u = e[0]
              , s = e[1];
            return {
                x: function() {
                    return Zn(u.shape, t, s, a, i)
                },
                filter: function() {
                    return Xn(u, t, s.shape, a, i)
                }
            }
        }
    };
    var tr = qt({
        transpose_: function(t, e) {
            var n = Rt(t, "x", "transpose");
            if (null == e && (e = n.shape.map((function(t, e) {
                return e
            }
            )).reverse()),
            w(n.rank === e.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of perm " + e + "."
            }
            )),
            e.forEach((function(t) {
                w(t >= 0 && t < n.rank, (function() {
                    return "All entries in 'perm' must be between 0 and " + (n.rank - 1) + " but got " + e
                }
                ))
            }
            )),
            n.rank <= 1)
                return n.clone();
            var r = {
                perm: e
            };
            return Dt.runKernelFunc((function(t) {
                return t.transpose(n, e)
            }
            ), {
                x: n
            }, null, "Transpose", r)
        }
    });
    var er = qt({
        cumsum_: function(t, e, n, r) {
            void 0 === e && (e = 0),
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var o = Rt(t, "x", "cumsum")
              , a = {
                x: o
            }
              , i = {
                axis: e,
                exclusive: n,
                reverse: r
            };
            return Dt.runKernelFunc((function(t, a) {
                var i = Ie([e], o.rank)
                  , u = o;
                null != i && (u = tr(o, i));
                var s = Fe(1, o.rank)[0]
                  , c = t.cumsum(u, s, n, r);
                return a([o]),
                null != i && (c = tr(c, i)),
                c
            }
            ), a, null, "Cumsum", i)
        }
    })
      , nr = {
        kernelName: "Cumsum",
        inputsToSave: ["x"],
        gradFunc: function(t, e, n) {
            var r = e[0]
              , o = n
              , a = o.axis
              , i = o.exclusive
              , u = o.reverse;
            return {
                x: function() {
                    var e = Ie([a], r.rank)
                      , n = er(t, a, i, !u);
                    return null != e && (n = tr(n, e)),
                    n
                }
            }
        }
    };
    var rr = qt({
        depthwiseConv2dNativeBackpropFilter_: function(t, e, n, r) {
            var o = t;
            3 === t.rank && (o = fe(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var a = e;
            3 === a.rank && (a = fe(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var i = {
                x: o,
                dy: a
            };
            return Dt.runKernelFunc((function(t) {
                return t.depthwiseConv2DDerFilter(o, a, r)
            }
            ), i, null, "DepthwiseConv2dNativeBackpropFilter")
        }
    });
    var or = qt({
        depthwiseConv2dNativeBackpropInput_: function(t, e, n, r) {
            var o = e
              , a = !1;
            3 === e.rank && (a = !0,
            o = fe(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var i = {
                dy: o
            }
              , u = Dt.runKernelFunc((function(t) {
                return t.depthwiseConv2DDerInput(o, n, r)
            }
            ), i, null, "DepthwiseConv2dNativeBackpropInput");
            return a ? fe(u, [u.shape[1], u.shape[2], u.shape[3]]) : u
        }
    })
      , ar = {
        kernelName: "DepthwiseConv2dNative",
        inputsToSave: ["x", "filter"],
        gradFunc: function(t, e, n) {
            var r = n
              , o = r.dilations
              , a = r.strides
              , i = r.pad
              , u = r.dimRoundingMode
              , s = null == o ? [1, 1] : o;
            w(Tn(s), (function() {
                return "Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '" + s + "'"
            }
            ));
            var c = e
              , l = c[0]
              , f = c[1];
            w(4 === l.rank, (function() {
                return "Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank " + l.rank + "."
            }
            )),
            w(4 === f.rank, (function() {
                return "Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank " + f.rank + "."
            }
            )),
            w(l.shape[3] === f.shape[2], (function() {
                return "Error in gradient of depthwiseConv2d: number of input channels (" + l.shape[3] + ") must match the inChannels dimension in filter " + f.shape[2] + "."
            }
            )),
            w(Bn(a, s), (function() {
                return "Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides " + a + " and dilations '" + s + "'."
            }
            )),
            null != u && w(I(i), (function() {
                return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + u + " but got pad " + i + "."
            }
            ));
            var p = Dn(l.shape, f.shape, a, s, i, u, !0);
            return {
                x: function() {
                    return or(l.shape, t, f, p)
                },
                filter: function() {
                    return rr(l, t, f.shape, p)
                }
            }
        }
    }
      , ir = {
        kernelName: "Div",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = ge(t, r.toFloat())
                      , a = Mt(n.shape, o);
                    return a.length > 0 ? ze(e, a).reshape(n.shape) : e
                },
                b: function() {
                    var e = ye(t, n.toFloat())
                      , a = Mt(r.shape, o);
                    a.length > 0 && (e = fe(ze(e, a), r.shape));
                    var i = Oe(r);
                    return an(ge(e, i.toFloat()))
                }
            }
        }
    }
      , ur = {
        kernelName: "Elu",
        outputsToSave: [!0],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = function(e) {
                return e.eluDer(t, n)
            }
              , o = {
                dy: t,
                y: n
            };
            return {
                x: function() {
                    return Dt.runKernelFunc(r, o, null, "EluGrad")
                }
            }
        }
    }
      , sr = {
        kernelName: "FloorDiv",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = t.div(r.toFloat())
                      , a = Mt(n.shape, o);
                    return a.length > 0 ? e.sum(a).reshape(n.shape) : e
                },
                b: function() {
                    var e = t.mul(n.toFloat())
                      , a = Mt(r.shape, o);
                    a.length > 0 && (e = e.sum(a).reshape(r.shape));
                    var i = r.square();
                    return e.div(i.toFloat()).neg()
                }
            }
        }
    };
    var cr = qt({
        sub_: function(t, e) {
            var n, r = Rt(t, "a", "sub"), o = Rt(e, "b", "sub");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.subtract(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Sub")
        }
    });
    var lr = qt({
        tile_: function(t, e) {
            var n = Rt(t, "x", "tile", null);
            w(n.rank === e.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of reps " + e + "."
            }
            ));
            var r = [n]
              , o = {
                x: n
            }
              , a = {
                reps: e
            };
            return Dt.runKernelFunc((function(t, r) {
                var o = t.tile(n, e);
                return r([n]),
                o
            }
            ), o, null, "Tile", a, r)
        }
    })
      , fr = {
        kernelName: "FusedBatchNorm",
        inputsToSave: ["x", "mean", "variance", "scale"],
        gradFunc: function(t, e, n) {
            var r = n.varianceEpsilon
              , o = e[0]
              , a = e[1]
              , i = e[2]
              , u = e[3]
              , s = null == u ? Vt(1) : u
              , c = Mt(a.shape, o.shape)
              , l = [];
            if (1 === a.rank) {
                for (var f = 0; f < o.shape.length - 1; ++f)
                    l.push(o.shape[f]);
                l.push(1)
            }
            var p = cr(o, a)
              , h = ye(t, s)
              , d = cn(zt(i, Vt(r)))
              , v = ye(ye(ye(d, d), d), Vt(-.5));
            return {
                x: function() {
                    return 1 === a.rank ? fe(ye(ye(t, lr(d.as4D(1, 1, 1, a.shape[0]), l)), s), o.shape) : fe(ye(ye(t, d), s), o.shape)
                },
                mean: function() {
                    var t = ye(ye(d, Vt(-1)), h);
                    return 1 === a.rank && (t = ze(t, c)),
                    fe(t, a.shape)
                },
                variance: function() {
                    var t = ye(ye(v, p), h);
                    return 1 === a.rank && (t = ze(t, c)),
                    fe(t, a.shape)
                },
                scale: function() {
                    var e = ye(p, d)
                      , n = ye(t, e);
                    return 1 === a.rank && (n = ze(n, c)),
                    fe(n, a.shape)
                },
                offset: function() {
                    var e = t;
                    return 1 === a.rank && (e = ze(e, c)),
                    fe(e, a.shape)
                }
            }
        }
    }
      , pr = {
        kernelName: "GreaterEqual",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1];
            return {
                a: function() {
                    return ae(n)
                },
                b: function() {
                    return ae(r)
                }
            }
        }
    }
      , hr = {
        kernelName: "Identity",
        gradFunc: function(t) {
            return {
                x: function() {
                    return t.toFloat()
                }
            }
        }
    };
    var dr = qt({
        localResponseNormalizationBackprop_: function(t, e, n, r, o, a, i) {
            void 0 === r && (r = 5),
            void 0 === o && (o = 1),
            void 0 === a && (a = 1),
            void 0 === i && (i = .5);
            var u = {
                x: t,
                y: e,
                dy: n
            }
              , s = {
                depthRadius: r,
                bias: o,
                alpha: a,
                beta: i
            };
            return Dt.runKernelFunc((function(u) {
                return u.LRNGrad(n, t, e, r, o, a, i)
            }
            ), u, null, "LRNBackprop", s)
        }
    })
      , vr = {
        kernelName: "LRN",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.depthRadius
              , s = i.bias
              , c = i.alpha
              , l = i.beta;
            return {
                x: function() {
                    return dr(o, a, t, u, s, c, l)
                }
            }
        }
    }
      , mr = {
        kernelName: "Max",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function(t, e, n) {
            var r = n.reductionIndices
              , o = e[0]
              , a = e[1]
              , i = M(r, o.shape)
              , u = Ie(i, o.rank)
              , s = Me(t, a, o, i, u);
            return {
                x: function() {
                    var t = s.x();
                    return null != u && (t = tr(t)),
                    t
                }
            }
        }
    };
    var gr = qt({
        greaterEqual_: function(t, e) {
            var n, r = Rt(t, "a", "greaterEqual"), o = Rt(e, "b", "greaterEqual");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.greaterEqual(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "GreaterEqual")
        }
    });
    var yr = qt({
        less_: function(t, e) {
            var n, r = Rt(t, "a", "less"), o = Rt(e, "b", "less");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.less(r, o)
            }
            ), a, null, "Less")
        }
    })
      , br = {
        kernelName: "Maximum",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1];
            return {
                a: function() {
                    return ye(t, ce(gr(n, r), "float32"))
                },
                b: function() {
                    return ye(t, ce(yr(n, r), "float32"))
                }
            }
        }
    };
    var wr = qt({
        maxPool3dBackprop_: function(t, e, n, r, o, a, i, u) {
            void 0 === a && (a = [1, 1, 1]);
            var s = Rt(t, "dy", "maxPool3dBackprop")
              , c = Rt(e, "input", "maxPool3dBackprop")
              , l = Rt(n, "output", "maxPool3dBackprop")
              , f = s
              , p = c
              , h = l
              , d = !1;
            4 === c.rank && (d = !0,
            f = fe(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]]),
            p = fe(c, [1, c.shape[0], c.shape[1], c.shape[2], c.shape[3]]),
            h = fe(l, [1, l.shape[0], l.shape[1], l.shape[2], l.shape[3]])),
            w(5 === f.rank, (function() {
                return "Error in maxPool3dBackprop: dy must be rank 5 but got rank " + f.rank + "."
            }
            )),
            w(5 === p.rank, (function() {
                return "Error in maxPool3dBackprop: input must be rank 5 but got rank " + p.rank + "."
            }
            )),
            w(5 === h.rank, (function() {
                return "Error in maxPool3dBackprop: output must be rank 5 but got rank " + h.rank + "."
            }
            )),
            w(Bn(o, a), (function() {
                return "Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + a + "'"
            }
            )),
            null != u && w(I(i), (function() {
                return "Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode " + u + " but got pad " + i + "."
            }
            ));
            var v = {
                dy: f,
                input: p,
                output: h
            }
              , m = {
                filterSize: r,
                strides: o,
                dilations: a,
                pad: i,
                dimRoundingMode: u
            }
              , g = Dt.runKernelFunc((function(t) {
                var e = Sn(p.shape, r, o, a, i, u);
                return t.maxPool3dBackprop(f, p, h, e)
            }
            ), v, null, "MaxPool3DBackprop", m);
            return d ? fe(g, [g.shape[1], g.shape[2], g.shape[3], g.shape[4]]) : g
        }
    })
      , kr = {
        kernelName: "MaxPool3D",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.filterSize
              , s = i.strides
              , c = i.dilations
              , l = i.pad
              , f = i.dimRoundingMode
              , p = null == c ? [1, 1, 1] : c;
            return {
                x: function() {
                    return wr(t, o, a, u, s, p, l, f)
                }
            }
        }
    };
    var xr = qt({
        maxPoolBackprop_: function(t, e, n, r, o, a, i) {
            var u = Rt(t, "dy", "maxPoolBackprop")
              , s = Rt(e, "input", "maxPoolBackprop")
              , c = Rt(n, "output", "maxPoolBackprop");
            w(s.rank === u.rank, (function() {
                return "Rank of input (" + s.rank + ") does not match rank of dy (" + u.rank + ")"
            }
            )),
            w(4 === u.rank, (function() {
                return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + u.rank + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in maxPoolBackprop: input must be rank 4 but got rank " + s.rank + "."
            }
            )),
            null != i && w(I(a), (function() {
                return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + a + "."
            }
            ));
            var l = {
                dy: u,
                input: s,
                output: c
            }
              , f = {
                filterSize: r,
                strides: o,
                pad: a,
                dimRoundingMode: i
            };
            return Dt.runKernelFunc((function(t) {
                var e = En(s.shape, r, o, 1, a, i);
                return t.maxPoolBackprop(u, s, c, e)
            }
            ), l, null, "MaxPoolBackprop", f)
        }
    })
      , Er = {
        kernelName: "MaxPool",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function(t, e, n) {
            var r = e
              , o = r[0]
              , a = r[1]
              , i = n
              , u = i.filterSize
              , s = i.strides
              , c = i.pad;
            return {
                x: function() {
                    return xr(t, o, a, u, s, c)
                }
            }
        }
    };
    var Sr = qt({
        greater_: function(t, e) {
            var n, r = Rt(t, "a", "greater"), o = Rt(e, "b", "greater");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.greater(r, o)
            }
            ), a, null, "Greater")
        }
    });
    var Dr = qt({
        lessEqual_: function(t, e) {
            var n, r = Rt(t, "a", "lessEqual"), o = Rt(e, "b", "lessEqual");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.lessEqual(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "LessEqual")
        }
    })
      , Ir = {
        kernelName: "Minimum",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1];
            return {
                a: function() {
                    return ye(t, ce(Dr(n, r), "float32"))
                },
                b: function() {
                    return ye(t, ce(Sr(n, r), "float32"))
                }
            }
        }
    }
      , Nr = {
        kernelName: "Mod",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = Mt(n.shape, o);
                    return e.length > 0 ? fe(ze(t, e), n.shape) : t
                },
                b: function() {
                    var e = ye(t, an(en(ge(n, r))))
                      , a = Mt(r.shape, o);
                    return a.length > 0 ? fe(ze(e, a), r.shape) : e
                }
            }
        }
    }
      , Fr = {
        kernelName: "Multiply",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = ye(t, ce(r, "float32"))
                      , a = Mt(n.shape, o);
                    return a.length > 0 ? fe(ze(e, a), n.shape) : e
                },
                b: function() {
                    var e = ye(t, ce(n, "float32"))
                      , a = Mt(r.shape, o);
                    return a.length > 0 ? fe(ze(e, a), r.shape) : e
                }
            }
        }
    }
      , Mr = {
        kernelName: "OneHot",
        inputsToSave: ["indices"],
        gradFunc: function(t, e) {
            var n = e[0];
            return {
                indices: function() {
                    return ee(n.shape, "float32")
                }
            }
        }
    }
      , Ar = {
        kernelName: "PadV2",
        inputsToSave: ["x"],
        gradFunc: function(t, e, n) {
            var r = e[0]
              , o = n.paddings.map((function(t) {
                return t[0]
            }
            ));
            return {
                x: function() {
                    return t.slice(o, r.shape)
                }
            }
        }
    };
    function _r(t, e) {
        for (var n = [], r = 0; r < e.length; r++)
            e[r] && n.push(r);
        var o = ue(t, "int32")
          , a = ue([n.length, t.length], "int32");
        for (r = 0; r < n.length; r++) {
            var i = o.indexToLoc(n[r])
              , u = r * t.length;
            a.values.set(i, u)
        }
        return a.toTensor()
    }
    var Tr = qt({
        logicalAnd_: function(t, e) {
            var n = Rt(t, "a", "logicalAnd", "bool")
              , r = Rt(e, "b", "logicalAnd", "bool");
            return At(n.shape, r.shape),
            Dt.runKernelFunc((function(t) {
                return t.logicalAnd(n, r)
            }
            ), {
                a: n,
                b: r
            }, null, "LogicalAnd")
        }
    })
      , Br = qt({
        logicalNot_: function(t) {
            var e = Rt(t, "x", "logicalNot", "bool");
            return Dt.runKernelFunc((function(t) {
                return t.logicalNot(e)
            }
            ), {
                $x: e
            })
        }
    })
      , Cr = qt({
        logicalOr_: function(t, e) {
            var n = Rt(t, "a", "logicalOr", "bool")
              , r = Rt(e, "b", "logicalOr", "bool");
            return At(n.shape, r.shape),
            Dt.runKernelFunc((function(t) {
                return t.logicalOr(n, r)
            }
            ), {
                $a: n,
                $b: r
            })
        }
    })
      , Rr = qt({
        logicalXor_: function(t, e) {
            var n = Rt(t, "a", "logicalXor", "bool")
              , r = Rt(e, "b", "logicalXor", "bool");
            return At(n.shape, r.shape),
            Cr(t, e).logicalAnd(Tr(t, e).logicalNot())
        }
    })
      , Pr = qt({
        where_: function(t, e, n) {
            var r = Rt(e, "a", "where")
              , o = Rt(n, "b", "where")
              , a = Rt(t, "condition", "where", "bool");
            k(r.shape, o.shape, "Error in where: "),
            1 === a.rank ? w(a.shape[0] === r.shape[0], (function() {
                return "The first dimension of `a` must match the size of `condition`."
            }
            )) : k(a.shape, o.shape, "Error in where: ");
            var i = {
                condition: a,
                t: r,
                e: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.select(a, r, o);
                return e([a]),
                n
            }
            ), i, (function(t, e) {
                var n = e[0];
                return {
                    condition: function() {
                        return ae(n).toFloat()
                    },
                    t: function() {
                        return t.mul(n.cast(t.dtype))
                    },
                    e: function() {
                        return t.mul(n.logicalNot().cast(t.dtype))
                    }
                }
            }
            ), "SelectV2")
        }
    })
      , qr = function(t) {
        return r(this, void 0, void 0, (function() {
            var e, n, r;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return [4, (e = Rt(t, "condition", "whereAsync", "bool")).data()];
                case 1:
                    return n = o.sent(),
                    r = _r(e.shape, n),
                    t !== e && e.dispose(),
                    [2, r]
                }
            }
            ))
        }
        ))
    };
    var zr = qt({
        pow_: function(t, e) {
            var n, r = Rt(t, "base", "pow"), o = Rt(e, "exp", "pow");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.pow(r, o);
                return e([r, o, n]),
                n
            }
            ), a, null, "Pow")
        }
    })
      , Lr = {
        kernelName: "Pow",
        inputsToSave: ["a", "b"],
        outputsToSave: [!0],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = e[2]
              , a = n
              , i = r
              , u = At(a.shape, i.shape);
            return {
                a: function() {
                    var e = ce(i, "float32")
                      , n = ye(t, ye(e, zr(a, cr(e, Vt(1)))))
                      , r = Mt(a.shape, u);
                    return r.length > 0 && (n = ze(n, r)),
                    fe(n, a.shape)
                },
                b: function() {
                    var e = Sr(a, 0)
                      , n = Pr(e, nn(a), ae(a))
                      , r = ye(t, ye(o, n))
                      , s = Mt(i.shape, u);
                    return s.length > 0 && (r = ze(r, s)),
                    fe(r, i.shape)
                }
            }
        }
    }
      , Or = {
        kernelName: "Prelu",
        inputsToSave: ["x", "alpha"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = Sr(n, 0);
            return {
                x: function() {
                    return Pr(o, t, ye(t, r))
                },
                alpha: function() {
                    var e = Pr(o, ae(t), ye(t, n))
                      , a = Mt(r.shape, t.shape);
                    return a.length > 0 && (e = ze(e, a)),
                    fe(e, r.shape)
                }
            }
        }
    }
      , Wr = {
        kernelName: "Relu6",
        inputsToSave: ["x"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = ye(Dr(n, 6), bn(n));
            return {
                x: function() {
                    return ye(t, ce(r, "float32"))
                }
            }
        }
    }
      , Kr = {
        kernelName: "Relu",
        inputsToSave: ["x"],
        gradFunc: function(t, e) {
            var n = e[0];
            return {
                x: function() {
                    return ye(t, ce(bn(n), "float32"))
                }
            }
        }
    }
      , Gr = {
        kernelName: "Selu",
        inputsToSave: ["x"],
        gradFunc: function(t, e) {
            var n = e[0];
            return {
                x: function() {
                    var e = Sr(n, Vt(0))
                      , r = Vt(1.7580993408473768)
                      , o = Vt(1.0507009873554805)
                      , a = ye(t, o)
                      , i = ye(ye(t, r), Qe(ce(n, "float32")));
                    return Pr(e, a, i)
                }
            }
        }
    };
    var Ur = qt({
        batchToSpaceND_: function(t, e, n) {
            var r = Rt(t, "x", "batchToSpaceND")
              , o = e.reduce((function(t, e) {
                return t * e
            }
            ));
            w(r.rank >= 1 + e.length, (function() {
                return "input rank is " + r.rank + " but should be > than blockShape.length " + e.length
            }
            )),
            w(n.length === e.length, (function() {
                return "crops.length is " + n.length + " but should be equal to blockShape.length  " + e.length
            }
            )),
            w(r.shape[0] % o == 0, (function() {
                return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + e.join(" * ") + " === " + o
            }
            ));
            var a = {
                x: r
            }
              , i = {
                blockShape: e,
                crops: n
            };
            return Dt.runKernelFunc((function(t) {
                return t.batchToSpaceND(r, e, n)
            }
            ), a, null, "BatchToSpaceND", i)
        }
    })
      , Hr = {
        kernelName: "SpaceToBatchND",
        gradFunc: function(t, e, n) {
            var r = n
              , o = r.blockShape
              , a = r.paddings;
            return {
                x: function() {
                    return Ur(t, o, a)
                }
            }
        }
    }
      , Vr = {
        kernelName: "SplitV",
        gradFunc: function(t, e, n) {
            var r = n.axis;
            return {
                x: function() {
                    return ie(t, r)
                }
            }
        }
    }
      , jr = {
        kernelName: "Square",
        inputsToSave: ["x"],
        gradFunc: function(t, e) {
            var n = e[0];
            return {
                x: function() {
                    return ye(t, ye(n.toFloat(), 2))
                }
            }
        }
    }
      , $r = {
        kernelName: "SquaredDifference",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = Vt(2);
            return {
                a: function() {
                    return ye(t, ye(o, cr(n, r)))
                },
                b: function() {
                    return ye(t, ye(o, cr(r, n)))
                }
            }
        }
    }
      , Jr = {
        kernelName: "Sub",
        inputsToSave: ["a", "b"],
        gradFunc: function(t, e) {
            var n = e[0]
              , r = e[1]
              , o = At(n.shape, r.shape);
            return {
                a: function() {
                    var e = t
                      , r = Mt(n.shape, o);
                    return r.length > 0 && (e = ze(e, r)),
                    fe(e, n.shape)
                },
                b: function() {
                    var e = t
                      , n = Mt(r.shape, o);
                    return n.length > 0 && (e = ze(e, n)),
                    fe(an(e), r.shape)
                }
            }
        }
    };
    var Yr = qt({
        pad_: function(t, e, n) {
            void 0 === n && (n = 0);
            var r = Rt(t, "x", "pad");
            if (0 === r.rank)
                throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
            var o = {
                paddings: e,
                constantValue: n
            }
              , a = {
                x: r
            };
            return Dt.runKernelFunc((function(t, o) {
                return o([r]),
                t.pad(r, e, n)
            }
            ), a, null, "PadV2", o)
        }
    });
    function Xr(t, e, n) {
        w(t.rank === e.length, (function() {
            return "Error in slice" + t.rank + "D: Length of begin " + e + " must match the rank of the array (" + t.rank + ")."
        }
        )),
        w(t.rank === n.length, (function() {
            return "Error in slice" + t.rank + "D: Length of size " + n + " must match the rank of the array (" + t.rank + ")."
        }
        ));
        for (var r = function(r) {
            w(e[r] + n[r] <= t.shape[r], (function() {
                return "Error in slice" + t.rank + "D: begin[" + r + "] + size[" + r + "] (" + (e[r] + n[r]) + ") would overflow input.shape[" + r + "] (" + t.shape[r] + ")"
            }
            ))
        }, o = 0; o < t.rank; ++o)
            r(o)
    }
    function Zr(t) {
        for (var e = [], n = 0; t > 0; )
            1 & t && e.push(n),
            t /= 2,
            n++;
        return e
    }
    function Qr(t, e, n) {
        for (var r = [], o = 0; o < t.length; o++)
            r[o] = Math.ceil((e[o] - t[o]) / n[o]);
        return r
    }
    function to(t, e, n) {
        for (var r = t.slice(), o = 0; o < n; o++)
            0 === o ? r[e] = 1 : (r.splice(e, 0, 1),
            r.pop());
        return r
    }
    function eo(t, e, n) {
        for (var r = t.slice(), o = 0; o < n; o++)
            0 === o ? r[e] = 0 : (r.splice(e, 0, 0),
            r.pop());
        return r
    }
    function no(t, e, n, r) {
        for (var o = t.slice(), a = 0; a < n; a++)
            0 === a ? o[e] = Number.MAX_SAFE_INTEGER : (o.splice(e, 0, Number.MAX_SAFE_INTEGER),
            o.pop());
        for (a = 0; a < o.length; a++)
            o[a] = b(0, o[a], r[a]);
        return o
    }
    function ro(t, e, n) {
        var r = t[e];
        return (n & 1 << e || null == r) && (r = 1),
        r
    }
    function oo(t, e, n, r, o, a) {
        var i = e[o]
          , u = n[o] || 1;
        (t & 1 << o || a & 1 << o || null == i) && (i = u > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s),
        i = b(0, i, s - 1)
    }
    function ao(t, e, n, r, o, a) {
        var i = e[o]
          , u = n[o] || 1;
        (t & 1 << o || a & 1 << o || null == i) && (i = u > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s),
        i = u > 0 ? b(0, i, s) : b(-1, i, s - 1)
    }
    var io = {
        __proto__: null,
        assertParamsValid: Xr,
        maskToAxes: Zr,
        computeOutShape: Qr,
        stridesWithElidedDims: to,
        startIndicesWithElidedDims: eo,
        stopIndicesWithElidedDims: no,
        stridesForAxis: ro,
        startForAxis: oo,
        stopForAxis: ao,
        isSliceContinous: function(t, e, n) {
            for (var r = n.length, o = 0; o < n.length; o++)
                if (n[o] > 1) {
                    r = o;
                    break
                }
            for (o = r + 1; o < n.length; o++)
                if (e[o] > 0 || n[o] !== t[o])
                    return !1;
            return !0
        },
        computeFlatOffset: function(t, e) {
            for (var n = t.length > 0 ? t[t.length - 1] : 1, r = 0; r < t.length - 1; r++)
                n += t[r] * e[r];
            return n
        }
    };
    for (var uo = qt({
        slice_: function(t, e, n) {
            var r, o, a = Rt(t, "x", "slice");
            if (0 === a.rank)
                throw new Error("Slicing scalar is not possible");
            (r = "number" == typeof e ? [e].concat(new Array(a.rank - 1).fill(0)) : e.length < a.rank ? e.concat(new Array(a.rank - e.length).fill(0)) : e.slice()).forEach((function(t) {
                w(-1 !== t, (function() {
                    return "slice() does not support negative begin indexing."
                }
                ))
            }
            )),
            o = (o = null == n ? new Array(a.rank).fill(-1) : "number" == typeof n ? [n].concat(new Array(a.rank - 1).fill(-1)) : n.length < a.rank ? n.concat(new Array(a.rank - n.length).fill(-1)) : n).map((function(t, e) {
                return t >= 0 ? t : (w(-1 === t, (function() {
                    return "Negative size values should be exactly -1 but got " + t + " for the slice() size at index " + e + "."
                }
                )),
                a.shape[e] - r[e])
            }
            )),
            Xr(a, r, o);
            var i = a.shape
              , u = {
                begin: r,
                size: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.slice(a, r, o)
            }
            ), {
                x: a
            }, (function(t) {
                for (var e = [], n = 0; n < t.rank; n++)
                    e.push([r[n], i[n] - r[n] - o[n]]);
                return {
                    x: function() {
                        return Yr(t, e)
                    }
                }
            }
            ), "Slice", u)
        }
    }), so = qt({
        slice1d_: function(t, e, n) {
            var r = Rt(t, "x", "slice1d");
            return w(1 === r.rank, (function() {
                return "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            uo(r, [e], [n])
        }
    }), co = qt({
        slice2d_: function(t, e, n) {
            var r = Rt(t, "x", "slice2d");
            return w(2 === r.rank, (function() {
                return "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            uo(r, e, n)
        }
    }), lo = qt({
        slice3d_: function(t, e, n) {
            var r = Rt(t, "x", "slice3d");
            return w(3 === r.rank, (function() {
                return "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            uo(r, e, n)
        }
    }), fo = qt({
        slice4d_: function(t, e, n) {
            var r = Rt(t, "x", "slice4d");
            return w(4 === r.rank, (function() {
                return "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            uo(r, e, n)
        }
    }), po = 0, ho = [_t, Tt, xn, zn, Pn, On, Kn, Gn, Hn, $n, Yn, Qn, nr, ar, ir, ur, sr, fr, pr, hr, vr, Mr, Ar, Vr, mr, Hr, mr, br, Er, kr, Ir, Nr, Fr, Mr, Ar, Lr, Or, Kr, Wr, Gr, Hr, Vr, jr, $r, {
        kernelName: "Tile",
        inputsToSave: ["x"],
        gradFunc: function(t, e, n) {
            var r = e[0]
              , o = n.reps;
            return {
                x: function() {
                    var e = ae(r);
                    if (1 === r.rank)
                        for (var n = 0; n < o[0]; ++n)
                            e = zt(e, uo(t, [n * r.shape[0]], [r.shape[0]]));
                    else if (2 === r.rank)
                        for (n = 0; n < o[0]; ++n)
                            for (var a = 0; a < o[1]; ++a)
                                e = zt(e, uo(t, [n * r.shape[0], a * r.shape[1]], [r.shape[0], r.shape[1]]));
                    else if (3 === r.rank)
                        for (n = 0; n < o[0]; ++n)
                            for (a = 0; a < o[1]; ++a)
                                for (var i = 0; i < o[2]; ++i)
                                    e = zt(e, uo(t, [n * r.shape[0], a * r.shape[1], i * r.shape[2]], [r.shape[0], r.shape[1], r.shape[2]]));
                    else {
                        if (4 !== r.rank)
                            throw new Error("Gradient for tile operation is not implemented for rank-" + r.rank + " tensors yet.");
                        for (n = 0; n < o[0]; ++n)
                            for (a = 0; a < o[1]; ++a)
                                for (i = 0; i < o[2]; ++i)
                                    for (var u = 0; u < o[3]; ++u)
                                        e = zt(e, uo(t, [n * r.shape[0], a * r.shape[1], i * r.shape[2], u * r.shape[3]], [r.shape[0], r.shape[1], r.shape[2], r.shape[3]]))
                    }
                    return e
                }
            }
        }
    }, {
        kernelName: "Transpose",
        gradFunc: function(t, e, n) {
            var r = Ne(n.perm);
            return {
                x: function() {
                    return tr(t, r)
                }
            }
        }
    }, Jr]; po < ho.length; po++) {
        m(ho[po])
    }
    var vo = function() {
        function t() {}
        return t.prototype.fetch = function(t, e) {
            return fetch(t, e)
        }
        ,
        t.prototype.now = function() {
            return performance.now()
        }
        ,
        t.prototype.encode = function(t, e) {
            if ("utf-8" !== e && "utf8" !== e)
                throw new Error("Browser's encoder only supports utf-8, but got " + e);
            return null == this.textEncoder && (this.textEncoder = new TextEncoder),
            this.textEncoder.encode(t)
        }
        ,
        t.prototype.decode = function(t, e) {
            return new TextDecoder(e).decode(t)
        }
        ,
        t
    }();
    s().get("IS_BROWSER") && s().setPlatform("browser", new vo);
    var mo, go = function() {
        return require("node-fetch")
    }, yo = function() {
        function t() {
            this.util = require("util"),
            this.textEncoder = new this.util.TextEncoder
        }
        return t.prototype.fetch = function(t, e) {
            return null != s().global.fetch ? s().global.fetch(t, e) : (null == mo && (mo = go()),
            mo(t, e))
        }
        ,
        t.prototype.now = function() {
            var t = process.hrtime();
            return 1e3 * t[0] + t[1] / 1e6
        }
        ,
        t.prototype.encode = function(t, e) {
            if ("utf-8" !== e && "utf8" !== e)
                throw new Error("Node built-in encoder only supports utf-8, but got " + e);
            return this.textEncoder.encode(t)
        }
        ,
        t.prototype.decode = function(t, e) {
            return 0 === t.length ? "" : new this.util.TextDecoder(e).decode(t)
        }
        ,
        t
    }();
    s().get("IS_NODE") && s().setPlatform("node", new yo);
    var bo = {
        float32: 4,
        float16: 2,
        int32: 4,
        uint16: 2,
        uint8: 1,
        bool: 1,
        complex64: 8
    };
    function wo(t, e) {
        for (var n, r = {}, o = 0, a = 0, i = e; a < i.length; a++) {
            var u = i[a]
              , s = u.name
              , c = u.dtype
              , l = u.shape
              , f = S(l)
              , p = void 0;
            if ("quantization"in u) {
                var h = u.quantization;
                if ("uint8" === h.dtype || "uint16" === h.dtype) {
                    if (!("min"in h) || !("scale"in h))
                        throw new Error("Weight " + u.name + " with quantization " + h.dtype + " doesn't have corresponding metadata min and scale.")
                } else {
                    if ("float16" !== h.dtype)
                        throw new Error("Weight " + u.name + " has unknown quantization dtype " + h.dtype + ". Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.");
                    if ("float32" !== c)
                        throw new Error("Weight " + u.name + " is quantized with " + h.dtype + " which only supports weights of type float32 not " + c + ".")
                }
                var d = bo[h.dtype]
                  , v = t.slice(o, o + f * d)
                  , m = "uint8" === h.dtype ? new Uint8Array(v) : new Uint16Array(v);
                if ("float32" === c)
                    if ("uint8" === h.dtype || "uint16" === h.dtype) {
                        p = new Float32Array(m.length);
                        for (var g = 0; g < m.length; g++) {
                            var y = m[g];
                            p[g] = y * h.scale + h.min
                        }
                    } else {
                        if ("float16" !== h.dtype)
                            throw new Error("Unsupported quantization type " + h.dtype + " for weight type float32.");
                        void 0 === n && (n = No()),
                        p = n(m)
                    }
                else {
                    if ("int32" !== c)
                        throw new Error("Unsupported dtype in weight '" + s + "': " + c);
                    if ("uint8" !== h.dtype && "uint16" !== h.dtype)
                        throw new Error("Unsupported quantization type " + h.dtype + " for weight type int32.");
                    p = new Int32Array(m.length);
                    for (g = 0; g < m.length; g++) {
                        y = m[g];
                        p[g] = Math.round(y * h.scale + h.min)
                    }
                }
                o += f * d
            } else if ("string" === c) {
                var b = S(u.shape);
                p = [];
                for (g = 0; g < b; g++) {
                    var w = new Uint32Array(t.slice(o, o + 4))[0];
                    o += 4;
                    var k = new Uint8Array(t.slice(o, o + w));
                    p.push(k),
                    o += w
                }
            } else {
                var x = bo[c];
                v = t.slice(o, o + f * x);
                if ("float32" === c)
                    p = new Float32Array(v);
                else if ("int32" === c)
                    p = new Int32Array(v);
                else if ("bool" === c)
                    p = new Uint8Array(v);
                else {
                    if ("complex64" !== c)
                        throw new Error("Unsupported dtype in weight '" + s + "': " + c);
                    p = new Float32Array(v);
                    var E = new Float32Array(p.length / 2)
                      , D = new Float32Array(p.length / 2);
                    for (g = 0; g < E.length; g++)
                        E[g] = p[2 * g],
                        D[g] = p[2 * g + 1];
                    var I = Ut(E, l, "float32")
                      , N = Ut(D, l, "float32");
                    r[s] = Wt(I, N)
                }
                o += f * x
            }
            "complex64" !== c && (r[s] = Ut(p, l, c))
        }
        return r
    }
    function ko(t) {
        if (null === t)
            throw new Error("Invalid input value: " + JSON.stringify(t));
        var e = 0
          , n = [];
        t.forEach((function(t) {
            if (e += t.byteLength,
            n.push(t.byteLength === t.buffer.byteLength ? t : new t.constructor(t)),
            !(t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array))
                throw new Error("Unsupported TypedArray subtype: " + t.constructor.name)
        }
        ));
        var r = new Uint8Array(e)
          , o = 0;
        return n.forEach((function(t) {
            r.set(new Uint8Array(t.buffer), o),
            o += t.byteLength
        }
        )),
        r.buffer
    }
    var xo = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
    function Eo(t) {
        return xo ? Buffer.byteLength(t) : new Blob([t]).size
    }
    function So(t) {
        if (1 === t.length)
            return t[0];
        var e = 0;
        t.forEach((function(t) {
            e += t.byteLength
        }
        ));
        var n = new Uint8Array(e)
          , r = 0;
        return t.forEach((function(t) {
            n.set(new Uint8Array(t), r),
            r += t.byteLength
        }
        )),
        n.buffer
    }
    function Do(t) {
        for (t = t.trim(); t.endsWith("/"); )
            t = t.slice(0, t.length - 1);
        var e = t.split("/");
        return e[e.length - 1]
    }
    function Io(t) {
        if (t.modelTopology instanceof ArrayBuffer)
            throw new Error("Expected JSON model topology, received ArrayBuffer.");
        return {
            dateSaved: new Date,
            modelTopologyType: "JSON",
            modelTopologyBytes: null == t.modelTopology ? 0 : Eo(JSON.stringify(t.modelTopology)),
            weightSpecsBytes: null == t.weightSpecs ? 0 : Eo(JSON.stringify(t.weightSpecs)),
            weightDataBytes: null == t.weightData ? 0 : t.weightData.byteLength
        }
    }
    function No() {
        var t = function() {
            var t = function(t) {
                for (var e = t << 13, n = 0; 0 == (8388608 & e); )
                    n -= 8388608,
                    e <<= 1;
                return (e &= -8388609) | (n += 947912704)
            }
              , e = new Uint32Array(2048);
            e[0] = 0;
            for (var n = 1; n < 1024; n++)
                e[n] = t(n);
            for (n = 1024; n < 2048; n++)
                e[n] = 939524096 + (n - 1024 << 13);
            return e
        }()
          , e = function() {
            var t = new Uint32Array(64);
            t[0] = 0,
            t[31] = 1199570944,
            t[32] = 2147483648,
            t[63] = 3347054592;
            for (var e = 1; e < 31; e++)
                t[e] = e << 23;
            for (e = 33; e < 63; e++)
                t[e] = 2147483648 + (e - 32 << 23);
            return t
        }()
          , n = function() {
            for (var t = new Uint32Array(64), e = 0; e < 64; e++)
                t[e] = 1024;
            return t[0] = t[32] = 0,
            t
        }();
        return function(r) {
            for (var o = new ArrayBuffer(4 * r.length), a = new Uint32Array(o), i = 0; i < r.length; i++) {
                var u = r[i]
                  , s = t[n[u >> 10] + (1023 & u)] + e[u >> 10];
                a[i] = s
            }
            return new Float32Array(o)
        }
    }
    var Fo = function() {
        function t() {
            this.saveRouters = [],
            this.loadRouters = []
        }
        return t.getInstance = function() {
            return null == t.instance && (t.instance = new t),
            t.instance
        }
        ,
        t.registerSaveRouter = function(e) {
            t.getInstance().saveRouters.push(e)
        }
        ,
        t.registerLoadRouter = function(e) {
            t.getInstance().loadRouters.push(e)
        }
        ,
        t.getSaveHandlers = function(e) {
            return t.getHandlers(e, "save")
        }
        ,
        t.getLoadHandlers = function(e, n) {
            return t.getHandlers(e, "load", n)
        }
        ,
        t.getHandlers = function(e, n, r) {
            var o = [];
            return ("load" === n ? t.getInstance().loadRouters : t.getInstance().saveRouters).forEach((function(t) {
                var n = t(e, r);
                null !== n && o.push(n)
            }
            )),
            o
        }
        ,
        t
    }()
      , Mo = function() {
        function t() {
            this.managers = {}
        }
        return t.getInstance = function() {
            return null == t.instance && (t.instance = new t),
            t.instance
        }
        ,
        t.registerManager = function(e, n) {
            w(null != e, (function() {
                return "scheme must not be undefined or null."
            }
            )),
            e.endsWith("://") && (e = e.slice(0, e.indexOf("://"))),
            w(e.length > 0, (function() {
                return "scheme must not be an empty string."
            }
            ));
            var r = t.getInstance();
            w(null == r.managers[e], (function() {
                return "A model store manager is already registered for scheme '" + e + "'."
            }
            )),
            r.managers[e] = n
        }
        ,
        t.getManager = function(t) {
            var e = this.getInstance().managers[t];
            if (null == e)
                throw new Error("Cannot find model manager for scheme '" + t + "'");
            return e
        }
        ,
        t.getSchemes = function() {
            return Object.keys(this.getInstance().managers)
        }
        ,
        t
    }();
    function Ao(t) {
        if (-1 === t.indexOf("://"))
            throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + Mo.getSchemes().join(","));
        return {
            scheme: t.split("://")[0],
            path: t.split("://")[1]
        }
    }
    function _o(t, e, n) {
        return void 0 === n && (n = !1),
        r(this, void 0, void 0, (function() {
            var r, a, i, u, s, c, l, f, p;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return w(t !== e, (function() {
                        return "Old path and new path are the same: '" + t + "'"
                    }
                    )),
                    w((r = Fo.getLoadHandlers(t)).length > 0, (function() {
                        return "Copying failed because no load handler is found for source URL " + t + "."
                    }
                    )),
                    w(r.length < 2, (function() {
                        return "Copying failed because more than one (" + r.length + ") load handlers for source URL " + t + "."
                    }
                    )),
                    a = r[0],
                    w((i = Fo.getSaveHandlers(e)).length > 0, (function() {
                        return "Copying failed because no save handler is found for destination URL " + e + "."
                    }
                    )),
                    w(i.length < 2, (function() {
                        return "Copying failed because more than one (" + r.length + ") save handlers for destination URL " + e + "."
                    }
                    )),
                    u = i[0],
                    s = Ao(t).scheme,
                    c = Ao(t).path,
                    l = s === Ao(t).scheme,
                    [4, a.load()];
                case 1:
                    return f = o.sent(),
                    n && l ? [4, Mo.getManager(s).removeModel(c)] : [3, 3];
                case 2:
                    o.sent(),
                    o.label = 3;
                case 3:
                    return [4, u.save(f)];
                case 4:
                    return p = o.sent(),
                    !n || l ? [3, 6] : [4, Mo.getManager(s).removeModel(c)];
                case 5:
                    o.sent(),
                    o.label = 6;
                case 6:
                    return [2, p.modelArtifactsInfo]
                }
            }
            ))
        }
        ))
    }
    function To() {
        if (!s().getBool("IS_BROWSER"))
            throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
        var t = "undefined" == typeof window ? self : window
          , e = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB || t.shimIndexedDB;
        if (null == e)
            throw new Error("The current browser does not appear to support IndexedDB.");
        return e
    }
    function Bo(t) {
        var e = t.result;
        e.createObjectStore("models_store", {
            keyPath: "modelPath"
        }),
        e.createObjectStore("model_info_store", {
            keyPath: "modelPath"
        })
    }
    var Co = function() {
        function t(t) {
            if (this.indexedDB = To(),
            null == t || !t)
                throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
            this.modelPath = t
        }
        return t.prototype.save = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(e) {
                    if (t.modelTopology instanceof ArrayBuffer)
                        throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                    return [2, this.databaseAction(this.modelPath, t)]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.load = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    return [2, this.databaseAction(this.modelPath)]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.databaseAction = function(t, e) {
            var n = this;
            return new Promise((function(t, r) {
                var o = n.indexedDB.open("tensorflowjs", 1);
                o.onupgradeneeded = function() {
                    return Bo(o)
                }
                ,
                o.onsuccess = function() {
                    var a = o.result;
                    if (null == e) {
                        var i = a.transaction("models_store", "readonly")
                          , u = i.objectStore("models_store").get(n.modelPath);
                        u.onsuccess = function() {
                            if (null == u.result)
                                return a.close(),
                                r(new Error("Cannot find model with path '" + n.modelPath + "' in IndexedDB."));
                            t(u.result.modelArtifacts)
                        }
                        ,
                        u.onerror = function(t) {
                            return a.close(),
                            r(u.error)
                        }
                        ,
                        i.oncomplete = function() {
                            return a.close()
                        }
                    } else {
                        var s, c = Io(e), l = a.transaction("model_info_store", "readwrite"), f = l.objectStore("model_info_store"), p = f.put({
                            modelPath: n.modelPath,
                            modelArtifactsInfo: c
                        });
                        p.onsuccess = function() {
                            var o = (s = a.transaction("models_store", "readwrite")).objectStore("models_store").put({
                                modelPath: n.modelPath,
                                modelArtifacts: e,
                                modelArtifactsInfo: c
                            });
                            o.onsuccess = function() {
                                return t({
                                    modelArtifactsInfo: c
                                })
                            }
                            ,
                            o.onerror = function(t) {
                                var e = (f = l.objectStore("model_info_store")).delete(n.modelPath);
                                e.onsuccess = function() {
                                    return a.close(),
                                    r(o.error)
                                }
                                ,
                                e.onerror = function(t) {
                                    return a.close(),
                                    r(o.error)
                                }
                            }
                        }
                        ,
                        p.onerror = function(t) {
                            return a.close(),
                            r(p.error)
                        }
                        ,
                        l.oncomplete = function() {
                            null == s ? a.close() : s.oncomplete = function() {
                                return a.close()
                            }
                        }
                    }
                }
                ,
                o.onerror = function(t) {
                    return r(o.error)
                }
            }
            ))
        }
        ,
        t.URL_SCHEME = "indexeddb://",
        t
    }()
      , Ro = function(t) {
        return s().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Co.URL_SCHEME) ? (e = t.slice(Co.URL_SCHEME.length),
        new Co(e)) : null;
        var e
    };
    Fo.registerSaveRouter(Ro),
    Fo.registerLoadRouter(Ro);
    var Po = function() {
        function t() {
            this.indexedDB = To()
        }
        return t.prototype.listModels = function() {
            return r(this, void 0, void 0, (function() {
                var t = this;
                return o(this, (function(e) {
                    return [2, new Promise((function(e, n) {
                        var r = t.indexedDB.open("tensorflowjs", 1);
                        r.onupgradeneeded = function() {
                            return Bo(r)
                        }
                        ,
                        r.onsuccess = function() {
                            var t = r.result
                              , o = t.transaction("model_info_store", "readonly")
                              , a = o.objectStore("model_info_store").getAll();
                            a.onsuccess = function() {
                                for (var t = {}, n = 0, r = a.result; n < r.length; n++) {
                                    var o = r[n];
                                    t[o.modelPath] = o.modelArtifactsInfo
                                }
                                e(t)
                            }
                            ,
                            a.onerror = function(e) {
                                return t.close(),
                                n(a.error)
                            }
                            ,
                            o.oncomplete = function() {
                                return t.close()
                            }
                        }
                        ,
                        r.onerror = function(t) {
                            return n(r.error)
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.removeModel = function(t) {
            return r(this, void 0, void 0, (function() {
                var e = this;
                return o(this, (function(n) {
                    var r;
                    return t = (r = t).startsWith(Co.URL_SCHEME) ? r.slice(Co.URL_SCHEME.length) : r,
                    [2, new Promise((function(n, r) {
                        var o = e.indexedDB.open("tensorflowjs", 1);
                        o.onupgradeneeded = function() {
                            return Bo(o)
                        }
                        ,
                        o.onsuccess = function() {
                            var e, a = o.result, i = a.transaction("model_info_store", "readwrite"), u = i.objectStore("model_info_store"), s = u.get(t);
                            s.onsuccess = function() {
                                if (null == s.result)
                                    return a.close(),
                                    r(new Error("Cannot find model with path '" + t + "' in IndexedDB."));
                                var o = u.delete(t)
                                  , i = function() {
                                    var o = (e = a.transaction("models_store", "readwrite")).objectStore("models_store").delete(t);
                                    o.onsuccess = function() {
                                        return n(s.result.modelArtifactsInfo)
                                    }
                                    ,
                                    o.onerror = function(t) {
                                        return r(s.error)
                                    }
                                };
                                o.onsuccess = i,
                                o.onerror = function(t) {
                                    return i(),
                                    a.close(),
                                    r(s.error)
                                }
                            }
                            ,
                            s.onerror = function(t) {
                                return a.close(),
                                r(s.error)
                            }
                            ,
                            i.oncomplete = function() {
                                null == e ? a.close() : e.oncomplete = function() {
                                    return a.close()
                                }
                            }
                        }
                        ,
                        o.onerror = function(t) {
                            return r(o.error)
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t
    }();
    if (s().getBool("IS_BROWSER"))
        try {
            Mo.registerManager(Co.URL_SCHEME, new Po)
        } catch (t) {}
    var qo = "tensorflowjs_models"
      , zo = "info"
      , Lo = "model_topology"
      , Oo = "weight_specs"
      , Wo = "weight_data"
      , Ko = "model_metadata";
    function Go(t) {
        return {
            info: [qo, t, zo].join("/"),
            topology: [qo, t, Lo].join("/"),
            weightSpecs: [qo, t, Oo].join("/"),
            weightData: [qo, t, Wo].join("/"),
            modelMetadata: [qo, t, Ko].join("/")
        }
    }
    function Uo(t) {
        var e = t.split("/");
        if (e.length < 3)
            throw new Error("Invalid key format: " + t);
        return e.slice(1, e.length - 1).join("/")
    }
    var Ho = function() {
        function t(t) {
            if (!s().getBool("IS_BROWSER") || "undefined" == typeof window || void 0 === window.localStorage)
                throw new Error("The current environment does not support local storage.");
            if (this.LS = window.localStorage,
            null == t || !t)
                throw new Error("For local storage, modelPath must not be null, undefined or empty.");
            this.modelPath = t,
            this.keys = Go(this.modelPath)
        }
        return t.prototype.save = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n, r;
                return o(this, (function(o) {
                    if (t.modelTopology instanceof ArrayBuffer)
                        throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                    e = JSON.stringify(t.modelTopology),
                    n = JSON.stringify(t.weightSpecs),
                    r = Io(t);
                    try {
                        return this.LS.setItem(this.keys.info, JSON.stringify(r)),
                        this.LS.setItem(this.keys.topology, e),
                        this.LS.setItem(this.keys.weightSpecs, n),
                        this.LS.setItem(this.keys.weightData, function(t) {
                            if (xo)
                                return Buffer.from(t).toString("base64");
                            for (var e = new Uint8Array(t), n = "", r = 0, o = e.length; r < o; r++)
                                n += String.fromCharCode(e[r]);
                            return btoa(n)
                        }(t.weightData)),
                        this.LS.setItem(this.keys.modelMetadata, JSON.stringify({
                            format: t.format,
                            generatedBy: t.generatedBy,
                            convertedBy: t.convertedBy,
                            userDefinedMetadata: t.userDefinedMetadata
                        })),
                        [2, {
                            modelArtifactsInfo: r
                        }]
                    } catch (t) {
                        throw this.LS.removeItem(this.keys.info),
                        this.LS.removeItem(this.keys.topology),
                        this.LS.removeItem(this.keys.weightSpecs),
                        this.LS.removeItem(this.keys.weightData),
                        this.LS.removeItem(this.keys.modelMetadata),
                        new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + r.modelTopologyBytes + ", weightSpecsBytes=" + r.weightSpecsBytes + ", weightDataBytes=" + r.weightDataBytes + ".")
                    }
                    return [2]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.load = function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n, r, a, i, u;
                return o(this, (function(o) {
                    if (null == (t = JSON.parse(this.LS.getItem(this.keys.info))))
                        throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                    if ("JSON" !== t.modelTopologyType)
                        throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
                    if (e = {},
                    null == (n = JSON.parse(this.LS.getItem(this.keys.topology))))
                        throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
                    if (e.modelTopology = n,
                    null == (r = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
                        throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
                    if (e.weightSpecs = r,
                    null != (a = this.LS.getItem(this.keys.modelMetadata)) && (i = JSON.parse(a),
                    e.format = i.format,
                    e.generatedBy = i.generatedBy,
                    e.convertedBy = i.convertedBy,
                    e.userDefinedMetadata = i.userDefinedMetadata),
                    null == (u = this.LS.getItem(this.keys.weightData)))
                        throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
                    return e.weightData = function(t) {
                        if (xo) {
                            var e = Buffer.from(t, "base64");
                            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                        }
                        for (var n = atob(t), r = new Uint8Array(n.length), o = 0; o < n.length; ++o)
                            r.set([n.charCodeAt(o)], o);
                        return r.buffer
                    }(u),
                    [2, e]
                }
                ))
            }
            ))
        }
        ,
        t.URL_SCHEME = "localstorage://",
        t
    }()
      , Vo = function(t) {
        return s().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Ho.URL_SCHEME) ? (e = t.slice(Ho.URL_SCHEME.length),
        new Ho(e)) : null;
        var e
    };
    Fo.registerSaveRouter(Vo),
    Fo.registerLoadRouter(Vo);
    var jo = function() {
        function t() {
            w(s().getBool("IS_BROWSER"), (function() {
                return "Current environment is not a web browser"
            }
            )),
            w("undefined" == typeof window || void 0 !== window.localStorage, (function() {
                return "Current browser does not appear to support localStorage"
            }
            )),
            this.LS = window.localStorage
        }
        return t.prototype.listModels = function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n, r, a, i;
                return o(this, (function(o) {
                    for (t = {},
                    e = qo + "/",
                    n = "/" + zo,
                    r = 0; r < this.LS.length; ++r)
                        (a = this.LS.key(r)).startsWith(e) && a.endsWith(n) && (i = Uo(a),
                        t[i] = JSON.parse(this.LS.getItem(a)));
                    return [2, t]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.removeModel = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n;
                return o(this, (function(r) {
                    var o;
                    if (t = (o = t).startsWith(Ho.URL_SCHEME) ? o.slice(Ho.URL_SCHEME.length) : o,
                    e = Go(t),
                    null == this.LS.getItem(e.info))
                        throw new Error("Cannot find model at path '" + t + "'");
                    return n = JSON.parse(this.LS.getItem(e.info)),
                    this.LS.removeItem(e.info),
                    this.LS.removeItem(e.topology),
                    this.LS.removeItem(e.weightSpecs),
                    this.LS.removeItem(e.weightData),
                    [2, n]
                }
                ))
            }
            ))
        }
        ,
        t
    }();
    if (s().getBool("IS_BROWSER"))
        try {
            Mo.registerManager(Ho.URL_SCHEME, new jo)
        } catch (t) {}
    function $o(t) {
        return new Promise((function(t) {
            return setTimeout(t)
        }
        )).then(t)
    }
    var Jo = function() {
        function t(e) {
            if (!s().getBool("IS_BROWSER"))
                throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
            e.startsWith(t.URL_SCHEME) && (e = e.slice(t.URL_SCHEME.length)),
            null != e && 0 !== e.length || (e = "model"),
            this.modelTopologyFileName = e + ".json",
            this.weightDataFileName = e + ".weights.bin"
        }
        return t.prototype.save = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n, r, a, i, u;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if ("undefined" == typeof document)
                            throw new Error("Browser downloads are not supported in this environment since `document` is not present");
                        if (e = window.URL.createObjectURL(new Blob([t.weightData],{
                            type: "application/octet-stream"
                        })),
                        !(t.modelTopology instanceof ArrayBuffer))
                            return [3, 1];
                        throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
                    case 1:
                        return n = [{
                            paths: ["./" + this.weightDataFileName],
                            weights: t.weightSpecs
                        }],
                        r = {
                            modelTopology: t.modelTopology,
                            format: t.format,
                            generatedBy: t.generatedBy,
                            convertedBy: t.convertedBy,
                            weightsManifest: n
                        },
                        a = window.URL.createObjectURL(new Blob([JSON.stringify(r)],{
                            type: "application/json"
                        })),
                        (i = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName,
                        i.href = a,
                        [4, $o((function() {
                            return i.dispatchEvent(new MouseEvent("click"))
                        }
                        ))];
                    case 2:
                        return o.sent(),
                        null == t.weightData ? [3, 4] : ((u = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName,
                        u.href = e,
                        [4, $o((function() {
                            return u.dispatchEvent(new MouseEvent("click"))
                        }
                        ))]);
                    case 3:
                        o.sent(),
                        o.label = 4;
                    case 4:
                        return [2, {
                            modelArtifactsInfo: Io(t)
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.URL_SCHEME = "downloads://",
        t
    }()
      , Yo = function() {
        function t(t) {
            if (null == t || t.length < 1)
                throw new Error("When calling browserFiles, at least 1 file is required, but received " + t);
            this.files = t
        }
        return t.prototype.load = function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n = this;
                return o(this, (function(r) {
                    return t = this.files[0],
                    e = this.files.slice(1),
                    [2, new Promise((function(r, o) {
                        var a = new FileReader;
                        a.onload = function(a) {
                            var i = JSON.parse(a.target.result)
                              , u = i.modelTopology;
                            if (null != u) {
                                0 === e.length && r({
                                    modelTopology: u
                                });
                                var s = i.weightsManifest;
                                if (null != s) {
                                    var c;
                                    try {
                                        c = n.checkManifestAndWeightFiles(s, e)
                                    } catch (t) {
                                        return void o(t)
                                    }
                                    var l = []
                                      , f = []
                                      , p = [];
                                    s.forEach((function(t) {
                                        t.paths.forEach((function(t) {
                                            f.push(t),
                                            p.push(null)
                                        }
                                        )),
                                        l.push.apply(l, t.weights)
                                    }
                                    )),
                                    s.forEach((function(t) {
                                        t.paths.forEach((function(t) {
                                            var e = new FileReader;
                                            e.onload = function(e) {
                                                var n = e.target.result
                                                  , o = f.indexOf(t);
                                                p[o] = n,
                                                -1 === p.indexOf(null) && r({
                                                    modelTopology: u,
                                                    weightSpecs: l,
                                                    weightData: So(p),
                                                    format: i.format,
                                                    generatedBy: i.generatedBy,
                                                    convertedBy: i.convertedBy,
                                                    userDefinedMetadata: i.userDefinedMetadata
                                                })
                                            }
                                            ,
                                            e.onerror = function(e) {
                                                return o("Failed to weights data from file of path '" + t + "'.")
                                            }
                                            ,
                                            e.readAsArrayBuffer(c[t])
                                        }
                                        ))
                                    }
                                    ))
                                } else
                                    o(new Error("weightManifest field is missing from file " + t.name))
                            } else
                                o(new Error("modelTopology field is missing from file " + t.name))
                        }
                        ,
                        a.onerror = function(e) {
                            return o("Failed to read model topology and weights manifest JSON from file '" + t.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")
                        }
                        ,
                        a.readAsText(t)
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.checkManifestAndWeightFiles = function(t, e) {
            for (var n = [], r = e.map((function(t) {
                return Do(t.name)
            }
            )), o = {}, a = 0, i = t; a < i.length; a++) {
                i[a].paths.forEach((function(t) {
                    var a = Do(t);
                    if (-1 !== n.indexOf(a))
                        throw new Error("Duplicate file basename found in weights manifest: '" + a + "'");
                    if (n.push(a),
                    -1 === r.indexOf(a))
                        throw new Error("Weight file with basename '" + a + "' is not provided.");
                    o[t] = e[r.indexOf(a)]
                }
                ))
            }
            if (n.length !== e.length)
                throw new Error("Mismatch in the number of files in weights manifest (" + n.length + ") and the number of weight files provided (" + e.length + ").");
            return o
        }
        ,
        t
    }();
    function Xo(t, e, n, r) {
        !function(t) {
            w(null != t && Array.isArray(t) && t.length > 0, (function() {
                return "promises must be a none empty array"
            }
            ))
        }(t),
        function(t, e) {
            w(t >= 0 && t <= 1, (function() {
                return "Progress fraction must be in range [0, 1], but got startFraction " + t
            }
            )),
            w(e >= 0 && e <= 1, (function() {
                return "Progress fraction must be in range [0, 1], but got endFraction " + e
            }
            )),
            w(e >= t, (function() {
                return "startFraction must be no more than endFraction, but got startFraction " + t + " and endFraction " + e
            }
            ))
        }(n = null == n ? 0 : n, r = null == r ? 1 : r);
        var o = 0;
        return Promise.all(t.map((function(a) {
            return a.then((function(a) {
                var i = n + ++o / t.length * (r - n);
                return e(i),
                a
            }
            )),
            a
        }
        )))
    }
    function Zo(t, e) {
        return r(this, void 0, void 0, (function() {
            var n, r, a, i, u, c, l, f, p;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return null == e && (e = {}),
                    n = null == e.fetchFunc ? s().platform.fetch : e.fetchFunc,
                    r = t.map((function(t) {
                        return n(t, e.requestInit, {
                            isBinary: !0
                        })
                    }
                    )),
                    a = 0,
                    i = .5,
                    null != e.onProgress ? [3, 2] : [4, Promise.all(r)];
                case 1:
                    return u = o.sent(),
                    [3, 4];
                case 2:
                    return [4, Xo(r, e.onProgress, a, i)];
                case 3:
                    u = o.sent(),
                    o.label = 4;
                case 4:
                    return c = u.map((function(t) {
                        return t.arrayBuffer()
                    }
                    )),
                    l = .5,
                    f = 1,
                    null != e.onProgress ? [3, 6] : [4, Promise.all(c)];
                case 5:
                    return p = o.sent(),
                    [3, 8];
                case 6:
                    return [4, Xo(c, e.onProgress, l, f)];
                case 7:
                    p = o.sent(),
                    o.label = 8;
                case 8:
                    return [2, p]
                }
            }
            ))
        }
        ))
    }
    function Qo(t) {
        var e = this;
        return function(n, a, i) {
            return void 0 === a && (a = ""),
            r(e, void 0, void 0, (function() {
                var e, r, u, s, c, l, f, p, h, d;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (e = n.map((function() {
                            return !1
                        }
                        )),
                        r = {},
                        u = null != i ? i.map((function() {
                            return !1
                        }
                        )) : [],
                        s = [],
                        n.forEach((function(t, n) {
                            var o = 0;
                            t.weights.forEach((function(t) {
                                var a = "quantization"in t ? t.quantization.dtype : t.dtype
                                  , c = bo[a] * S(t.shape)
                                  , l = function() {
                                    e[n] = !0,
                                    null == r[n] && (r[n] = []),
                                    r[n].push({
                                        manifestEntry: t,
                                        groupOffset: o,
                                        sizeBytes: c
                                    })
                                };
                                null != i ? i.forEach((function(e, n) {
                                    e === t.name && (l(),
                                    u[n] = !0)
                                }
                                )) : l(),
                                s.push(t.name),
                                o += c
                            }
                            ))
                        }
                        )),
                        !u.every((function(t) {
                            return t
                        }
                        )))
                            throw c = i.filter((function(t, e) {
                                return !u[e]
                            }
                            )),
                            new Error("Could not find weights in manifest with names: " + c.join(", ") + ". \nManifest JSON has weights with names: " + s.join(", ") + ".");
                        return l = e.reduce((function(t, e, n) {
                            return e && t.push(n),
                            t
                        }
                        ), []),
                        f = [],
                        l.forEach((function(t) {
                            n[t].paths.forEach((function(t) {
                                var e = a + (a.endsWith("/") ? "" : "/") + t;
                                f.push(e)
                            }
                            ))
                        }
                        )),
                        [4, t(f)];
                    case 1:
                        return p = o.sent(),
                        h = {},
                        d = 0,
                        l.forEach((function(t) {
                            for (var e = n[t].paths.length, o = 0, a = 0; a < e; a++)
                                o += p[d + a].byteLength;
                            for (var i = new ArrayBuffer(o), u = new Uint8Array(i), s = 0, c = 0; c < e; c++) {
                                var l = new Uint8Array(p[d + c]);
                                u.set(l, s),
                                s += l.byteLength
                            }
                            r[t].forEach((function(t) {
                                var e = wo(i.slice(t.groupOffset, t.groupOffset + t.sizeBytes), [t.manifestEntry]);
                                for (var n in e)
                                    h[n] = e[n]
                            }
                            )),
                            d += e
                        }
                        )),
                        [2, h]
                    }
                }
                ))
            }
            ))
        }
    }
    Fo.registerSaveRouter((function(t) {
        return s().getBool("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Jo.URL_SCHEME) ? function(t) {
            void 0 === t && (t = "model");
            return new Jo(t)
        }(t.slice(Jo.URL_SCHEME.length)) : null
    }
    ));
    var ta = function() {
        function t(t, e) {
            if (this.DEFAULT_METHOD = "POST",
            null == e && (e = {}),
            this.weightPathPrefix = e.weightPathPrefix,
            this.onProgress = e.onProgress,
            null != e.fetchFunc ? (w("function" == typeof e.fetchFunc, (function() {
                return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"
            }
            )),
            this.fetch = e.fetchFunc) : this.fetch = s().platform.fetch,
            w(null != t && t.length > 0, (function() {
                return "URL path for http must not be null, undefined or empty."
            }
            )),
            Array.isArray(t) && w(2 === t.length, (function() {
                return "URL paths for http must have a length of 2, (actual length is " + t.length + ")."
            }
            )),
            this.path = t,
            null != e.requestInit && null != e.requestInit.body)
                throw new Error("requestInit is expected to have no pre-existing body, but has one.");
            this.requestInit = e.requestInit || {}
        }
        return t.prototype.save = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n, r, a;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (t.modelTopology instanceof ArrayBuffer)
                            throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
                        return (e = Object.assign({
                            method: this.DEFAULT_METHOD
                        }, this.requestInit)).body = new FormData,
                        n = [{
                            paths: ["./model.weights.bin"],
                            weights: t.weightSpecs
                        }],
                        r = {
                            modelTopology: t.modelTopology,
                            format: t.format,
                            generatedBy: t.generatedBy,
                            convertedBy: t.convertedBy,
                            userDefinedMetadata: t.userDefinedMetadata,
                            weightsManifest: n
                        },
                        e.body.append("model.json", new Blob([JSON.stringify(r)],{
                            type: "application/json"
                        }), "model.json"),
                        null != t.weightData && e.body.append("model.weights.bin", new Blob([t.weightData],{
                            type: "application/octet-stream"
                        }), "model.weights.bin"),
                        [4, this.fetch(this.path, e)];
                    case 1:
                        if ((a = o.sent()).ok)
                            return [2, {
                                modelArtifactsInfo: Io(t),
                                responses: [a]
                            }];
                        throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + a.status + ".")
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.load = function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n, r, a, i, u, s, c, l, f, p;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, this.fetch(this.path, this.requestInit)];
                    case 1:
                        if (!(t = o.sent()).ok)
                            throw new Error("Request to " + this.path + " failed with status code " + t.status + ". Please verify this URL points to the model JSON of the model to load.");
                        o.label = 2;
                    case 2:
                        return o.trys.push([2, 4, , 5]),
                        [4, t.json()];
                    case 3:
                        return e = o.sent(),
                        [3, 5];
                    case 4:
                        throw o.sent(),
                        n = "Failed to parse model JSON of response from " + this.path + ".",
                        this.path.endsWith(".pb") ? n += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : n += " Please make sure the server is serving valid JSON for this request.",
                        new Error(n);
                    case 5:
                        if (r = e.modelTopology,
                        a = e.weightsManifest,
                        i = e.generatedBy,
                        u = e.convertedBy,
                        s = e.format,
                        c = e.userDefinedMetadata,
                        null == r && null == a)
                            throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
                        return null == a ? [3, 7] : [4, this.loadWeights(a)];
                    case 6:
                        p = o.sent(),
                        l = p[0],
                        f = p[1],
                        o.label = 7;
                    case 7:
                        return [2, {
                            modelTopology: r,
                            weightSpecs: l,
                            weightData: f,
                            userDefinedMetadata: c,
                            generatedBy: i,
                            convertedBy: u,
                            format: s
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.loadWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n, r, a, i, u, s, c, l, f, p;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        for (e = Array.isArray(this.path) ? this.path[1] : this.path,
                        n = function(t) {
                            var e = t.lastIndexOf("/")
                              , n = t.lastIndexOf("?")
                              , r = t.substring(0, e)
                              , o = n > e ? t.substring(n) : "";
                            return [r + "/", o]
                        }(e),
                        r = n[0],
                        a = n[1],
                        i = this.weightPathPrefix || r,
                        u = [],
                        s = 0,
                        c = t; s < c.length; s++)
                            l = c[s],
                            u.push.apply(u, l.weights);
                        return f = [],
                        t.forEach((function(t) {
                            t.paths.forEach((function(t) {
                                f.push(i + t + a)
                            }
                            ))
                        }
                        )),
                        [4, Zo(f, {
                            requestInit: this.requestInit,
                            fetchFunc: this.fetch,
                            onProgress: this.onProgress
                        })];
                    case 1:
                        return p = o.sent(),
                        [2, [u, So(p)]]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.URL_SCHEME_REGEX = /^https?:\/\//,
        t
    }();
    function ea(t) {
        return null != t.match(ta.URL_SCHEME_REGEX)
    }
    var na = function(t, e) {
        if ("undefined" == typeof fetch && (null == e || null == e.fetchFunc))
            return null;
        return (Array.isArray(t) ? t.every((function(t) {
            return ea(t)
        }
        )) : ea(t)) ? ra(t, e) : null
    };
    function ra(t, e) {
        return new ta(t,e)
    }
    Fo.registerSaveRouter(na),
    Fo.registerLoadRouter(na);
    var oa = function() {
        function t(t) {
            this.modelArtifacts = t
        }
        return t.prototype.load = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    return [2, this.modelArtifacts]
                }
                ))
            }
            ))
        }
        ,
        t
    }()
      , aa = function() {
        function t(t) {
            this.saveHandler = t
        }
        return t.prototype.save = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(e) {
                    return [2, this.saveHandler(t)]
                }
                ))
            }
            ))
        }
        ,
        t
    }();
    var ia = {
        __proto__: null,
        browserFiles: function(t) {
            return new Yo(t)
        },
        browserHTTPRequest: function(t, e) {
            return ra(t, e)
        },
        concatenateArrayBuffers: So,
        decodeWeights: wo,
        encodeWeights: function(t, e) {
            return r(this, void 0, void 0, (function() {
                var n, a, i, u, s, c = this;
                return o(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        for (n = [],
                        a = [],
                        i = Array.isArray(t) ? t.map((function(t) {
                            return t.name
                        }
                        )) : Object.keys(t),
                        u = function(u) {
                            var s = i[u]
                              , l = Array.isArray(t) ? t[u].tensor : t[s];
                            if ("float32" !== l.dtype && "int32" !== l.dtype && "bool" !== l.dtype && "string" !== l.dtype && "complex64" !== l.dtype)
                                throw new Error("Unsupported dtype in weight '" + s + "': " + l.dtype);
                            var f = {
                                name: s,
                                shape: l.shape,
                                dtype: l.dtype
                            };
                            if ("string" === l.dtype) {
                                var p = new Promise((function(t) {
                                    return r(c, void 0, void 0, (function() {
                                        var e, n, r, a, i, u, s;
                                        return o(this, (function(o) {
                                            switch (o.label) {
                                            case 0:
                                                return [4, l.bytes()];
                                            case 1:
                                                for (e = o.sent(),
                                                n = e.reduce((function(t, e) {
                                                    return t + e.length
                                                }
                                                ), 0) + 4 * e.length,
                                                r = new Uint8Array(n),
                                                a = 0,
                                                i = 0; i < e.length; i++)
                                                    u = e[i],
                                                    s = new Uint8Array(new Uint32Array([u.length]).buffer),
                                                    r.set(s, a),
                                                    a += 4,
                                                    r.set(u, a),
                                                    a += u.length;
                                                return t(r),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ));
                                a.push(p)
                            } else
                                a.push(l.data());
                            null != e && (f.group = e),
                            n.push(f)
                        }
                        ,
                        s = 0; s < i.length; ++s)
                            u(s);
                        return [4, Promise.all(a)];
                    case 1:
                        return [2, {
                            data: ko(l.sent()),
                            specs: n
                        }]
                    }
                }
                ))
            }
            ))
        },
        fromMemory: function(t, e, n, r) {
            if (1 === arguments.length) {
                var o = null != t.modelTopology || null != t.weightSpecs;
                return o ? new oa(t) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),
                new oa({
                    modelTopology: t
                }))
            }
            return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),
            new oa({
                modelTopology: t,
                weightSpecs: e,
                weightData: n,
                trainingConfig: r
            })
        },
        getLoadHandlers: function(t, e) {
            return Fo.getLoadHandlers(t, e)
        },
        getModelArtifactsInfoForJSON: Io,
        getSaveHandlers: function(t) {
            return Fo.getSaveHandlers(t)
        },
        http: ra,
        isHTTPScheme: ea,
        loadWeights: function(t, e, n, a) {
            return void 0 === e && (e = ""),
            r(this, void 0, void 0, (function() {
                return o(this, (function(r) {
                    return [2, Qo((function(t) {
                        return Zo(t, {
                            requestInit: a
                        })
                    }
                    ))(t, e, n)]
                }
                ))
            }
            ))
        },
        registerLoadRouter: function(t) {
            return Fo.registerLoadRouter(t)
        },
        registerSaveRouter: function(t) {
            return Fo.registerSaveRouter(t)
        },
        weightsLoaderFactory: Qo,
        withSaveHandler: function(t) {
            return new aa(t)
        },
        copyModel: function(t, e) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(n) {
                    return !1,
                    [2, _o(t, e, !1)]
                }
                ))
            }
            ))
        },
        listModels: function() {
            return r(this, void 0, void 0, (function() {
                var t, e, n, r, a, i, u;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        t = Mo.getSchemes(),
                        e = {},
                        n = 0,
                        r = t,
                        o.label = 1;
                    case 1:
                        return n < r.length ? (a = r[n],
                        [4, Mo.getManager(a).listModels()]) : [3, 4];
                    case 2:
                        for (u in i = o.sent())
                            e[a + "://" + u] = i[u];
                        o.label = 3;
                    case 3:
                        return n++,
                        [3, 1];
                    case 4:
                        return [2, e]
                    }
                }
                ))
            }
            ))
        },
        moveModel: function(t, e) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(n) {
                    return !0,
                    [2, _o(t, e, !0)]
                }
                ))
            }
            ))
        },
        removeModel: function(t) {
            return r(this, void 0, void 0, (function() {
                var e;
                return o(this, (function(n) {
                    return e = Ao(t),
                    [2, Mo.getManager(e.scheme).removeModel(e.path)]
                }
                ))
            }
            ))
        }
    };
    var ua = qt({
        oneHot_: function(t, e, n, r) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = 0),
            e < 2)
                throw new Error("Error in oneHot: depth must be >=2, but it is " + e);
            var o = Rt(t, "indices", "oneHot", "int32")
              , a = o.shape.concat([e])
              , i = {
                indices: o = o.flatten()
            }
              , u = {
                depth: e,
                onValue: n,
                offValue: r
            };
            return Dt.runKernelFunc((function(t, i) {
                return i([o]),
                fe(t.oneHot(o, e, n, r), a)
            }
            ), i, null, "OneHot", u)
        }
    });
    var sa, ca = {
        __proto__: null,
        confusionMatrix: qt({
            confusionMatrix_: function(t, e, n) {
                var r = Rt(t, "labels", "confusionMatrix")
                  , o = Rt(e, "predictions", "confusionMatrix");
                w(null == n || n > 0 && Number.isInteger(n), (function() {
                    return "If provided, numClasses must be a positive integer, but got " + n
                }
                )),
                w(1 === r.rank, (function() {
                    return "Expected the rank of labels to be 1, but got " + r.rank
                }
                )),
                w(1 === o.rank, (function() {
                    return "Expected the rank of predictions to be 1, but got " + o.rank
                }
                )),
                w(r.shape[0] === o.shape[0], (function() {
                    return "Mismatch in the number of examples: " + r.shape[0] + " vs. " + o.shape[0] + ". Labels and predictions should have the same number of elements."
                }
                )),
                w(n > 0 && Number.isInteger(n), (function() {
                    return "numClasses is required to be a positive integer, but got " + n
                }
                ));
                var a = ua(r.asType("int32"), n)
                  , i = ua(o.asType("int32"), n);
                return a.transpose().matMul(i).asType("int32")
            }
        })
    };
    var la = {
        __proto__: null,
        toPixels: function(t, e) {
            return r(this, void 0, void 0, (function() {
                var n, r, a, i, u, s, c, l, f, p, h, d, v, m, g, y, b, w, k, x, E, S, D, I;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (n = Rt(t, "img", "toPixels"),
                        t instanceof lt || (n = (r = n).toInt(),
                        r.dispose()),
                        2 !== n.rank && 3 !== n.rank)
                            throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + n.rank + ".");
                        if (a = n.shape.slice(0, 2),
                        i = a[0],
                        u = a[1],
                        (s = 2 === n.rank ? 1 : n.shape[2]) > 4 || 2 === s)
                            throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + s);
                        return [4, n.data()];
                    case 1:
                        return c = o.sent(),
                        l = n.min(),
                        f = n.max(),
                        [4, Promise.all([l.data(), f.data()])];
                    case 2:
                        if (p = o.sent(),
                        h = p[0],
                        d = p[1],
                        v = h[0],
                        m = d[0],
                        l.dispose(),
                        f.dispose(),
                        "float32" === n.dtype) {
                            if (v < 0 || m > 1)
                                throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + v + " - " + m + "].")
                        } else {
                            if ("int32" !== n.dtype)
                                throw new Error("Unsupported type for toPixels: " + n.dtype + ". Please use float32 or int32 tensors.");
                            if (v < 0 || m > 255)
                                throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + v + " - " + m + "].")
                        }
                        for (g = "float32" === n.dtype ? 255 : 1,
                        y = new Uint8ClampedArray(u * i * 4),
                        b = 0; b < i * u; ++b)
                            w = void 0,
                            k = void 0,
                            x = void 0,
                            E = void 0,
                            1 === s ? (w = c[b] * g,
                            k = c[b] * g,
                            x = c[b] * g,
                            E = 255) : 3 === s ? (w = c[3 * b] * g,
                            k = c[3 * b + 1] * g,
                            x = c[3 * b + 2] * g,
                            E = 255) : 4 === s && (w = c[4 * b] * g,
                            k = c[4 * b + 1] * g,
                            x = c[4 * b + 2] * g,
                            E = c[4 * b + 3] * g),
                            y[(S = 4 * b) + 0] = Math.round(w),
                            y[S + 1] = Math.round(k),
                            y[S + 2] = Math.round(x),
                            y[S + 3] = Math.round(E);
                        return null != e && (e.width = u,
                        e.height = i,
                        D = e.getContext("2d"),
                        I = new ImageData(y,u,i),
                        D.putImageData(I, 0, 0)),
                        n !== t && n.dispose(),
                        [2, y]
                    }
                }
                ))
            }
            ))
        },
        fromPixels: qt({
            fromPixels_: function(t, e) {
                if (void 0 === e && (e = 3),
                e > 4)
                    throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
                if (null == t)
                    throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
                var n = !1
                  , r = !1
                  , o = !1
                  , a = !1
                  , i = !1;
                if (t.data instanceof Uint8Array)
                    n = !0;
                else if ("undefined" != typeof ImageData && t instanceof ImageData)
                    r = !0;
                else if ("undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement)
                    o = !0;
                else if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement)
                    a = !0;
                else {
                    if (null == t.getContext)
                        throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + t.constructor.name);
                    i = !0
                }
                if (o) {
                    if (o && t.readyState < 2)
                        throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")
                }
                if (null != h("FromPixels", Dt.backendName)) {
                    var u = {
                        pixels: t
                    }
                      , s = {
                        numChannels: e
                    };
                    return Dt.runKernel("FromPixels", u, s)
                }
                var c, l, f = o ? [t.videoWidth, t.videoHeight] : [t.width, t.height], p = f[0], d = f[1];
                if (i ? c = t.getContext("2d").getImageData(0, 0, p, d).data : r || n ? c = t.data : (a || o) && (null == sa && (sa = document.createElement("canvas").getContext("2d")),
                sa.canvas.width = p,
                sa.canvas.height = d,
                sa.drawImage(t, 0, 0, p, d),
                c = sa.getImageData(0, 0, p, d).data),
                4 === e)
                    l = new Int32Array(c);
                else {
                    var v = p * d;
                    l = new Int32Array(v * e);
                    for (var m = 0; m < v; m++)
                        for (var g = 0; g < e; ++g)
                            l[m * e + g] = c[4 * m + g]
                }
                return Jt(l, [d, p, e], "int32")
            }
        })
    };
    function fa(t, e) {
        if (t.rank < 1)
            throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t.rank + ".");
        if (e.rank < 1)
            throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if ("int32" !== e.dtype)
            throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
        if (e.shape[e.rank - 1] > t.rank)
            throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e.shape[e.rank - 1] + " vs. " + t.rank);
        if (0 === t.size)
            throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t.shape + ".");
        for (var n = e.shape, r = n[n.length - 1], o = 1, a = 0; a < n.length - 1; ++a)
            o *= n[a];
        var i = t.shape
          , u = n.slice();
        u.pop();
        var s = 1;
        for (a = r; a < t.rank; ++a)
            s *= i[a],
            u.push(i[a]);
        var c = H(t.shape).map((function(t) {
            return t / s
        }
        )).concat([1]).slice(0, r);
        return [u, o, s, c]
    }
    var pa = {
        __proto__: null,
        prepareAndValidate: fa
    };
    function ha(t, e, n) {
        var r = e.rank > 1 ? e.shape[e.rank - 1] : 1
          , o = e.rank > 1 ? e.rank - 1 : 1
          , a = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + e.shape + ", shape: " + t + ", sliceDim: " + r + ", and batchDim: " + o + ".";
        if (n.rank < o)
            throw new Error(a + " update.rank < " + o + ". ");
        if (t.length < r + (n.rank - o))
            throw new Error(a + " Output shape length < " + (r + (n.rank - o)));
        if (n.rank !== o + t.length - r)
            throw new Error(a + " update.rank != " + (o + t.length - r));
        for (var i = 0; i < o; ++i)
            if (n.shape[i] !== e.shape[i])
                throw new Error(a + " updates.shape[" + i + "] (" + n.shape[i] + ") != indices.shape[" + i + "] (" + e.shape[i] + ").");
        for (i = 0; i < n.rank - o; ++i)
            if (n.shape[i + o] !== t[i + r])
                throw new Error(a + " updates.shape[" + (i + o) + "] (" + n.shape[i + o] + ") != shape[" + (i + o) + "] (" + t[i + o] + ")")
    }
    function da(t, e, n) {
        if (e.rank < 1)
            throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if (t.rank < 1)
            throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t.rank + ".");
        if ("int32" !== e.dtype)
            throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e.dtype);
        if (n.length < 1)
            throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
        if (0 === n.length) {
            if (0 === e.size)
                throw new Error("Indices specified for empty output. indices shape: " + e.shape);
            if (0 === t.size)
                throw new Error("Updates specified for empty output. updates shape: " + t.shape)
        }
        ha(n, e, t)
    }
    function va(t, e, n) {
        for (var r = e.shape.length, o = r > 1 ? e.shape[r - 1] : 1, a = n.length, i = 1, u = o; u < a; ++u)
            i *= n[u];
        var s = o < 1 ? 1 : o;
        return {
            sliceRank: o,
            numUpdates: S(e.shape) / s,
            sliceSize: i,
            strides: H(n.slice(0, o)).concat([1]),
            outputSize: S(n)
        }
    }
    var ma = {
        __proto__: null,
        validateUpdateShape: ha,
        validateInput: da,
        calculateShapes: va
    }
      , ga = function() {
        function t() {}
        return t.prototype.getClassName = function() {
            return this.constructor.className
        }
        ,
        t.fromConfig = function(t, e) {
            return new t(e)
        }
        ,
        t
    }()
      , ya = function() {
        function t() {
            this.classNameMap = {}
        }
        return t.getMap = function() {
            return null == t.instance && (t.instance = new t),
            t.instance
        }
        ,
        t.register = function(e) {
            t.getMap().classNameMap[e.className] = [e, e.fromConfig]
        }
        ,
        t
    }();
    function ba(t) {
        w(null != t.className, (function() {
            return "Class being registered does not have the static className property defined."
        }
        )),
        w("string" == typeof t.className, (function() {
            return "className is required to be a string, but got type " + typeof t.className
        }
        )),
        w(t.className.length > 0, (function() {
            return "Class being registered has an empty-string as its className, which is disallowed."
        }
        )),
        ya.register(t)
    }
    var wa = {
        __proto__: null,
        Serializable: ga,
        SerializationMap: ya,
        registerClass: ba
    };
    function ka() {
        return 32 === Dt.backend.floatPrecision() ? .001 : .1
    }
    function xa(t, e, n) {
        var r = !0;
        if ((P(t) || P(e)) && (r = !1),
        P(t) && P(e) && (r = !0),
        r) {
            var o = t.constructor.name
              , a = e.constructor.name;
            if (o !== a)
                throw new Error("Arrays are of different type. Actual: " + o + ". Expected: " + a)
        }
        if (Array.isArray(t) && Array.isArray(e)) {
            var i = Bt(t)
              , u = Bt(e);
            if (!D(i, u))
                throw new Error("Arrays have different shapes. Actual: [" + i + "]. Expected: [" + u + "]")
        }
        var s = P(t) ? t : E(t)
          , c = P(e) ? e : E(e);
        if (s.length !== c.length)
            throw new Error("Arrays have different lengths actual: " + s.length + " vs expected: " + c.length + ".\nActual:   " + s + ".\nExpected: " + c + ".");
        for (var l = 0; l < c.length; ++l) {
            var f = s[l]
              , p = c[l];
            if (!n(f, p))
                throw new Error("Arrays differ: actual[" + l + "] = " + f + ", expected[" + l + "] = " + p + ".\nActual:   " + s + ".\nExpected: " + c + ".")
        }
    }
    function Ea(t, e, n) {
        return !isFinite(t) && !isFinite(e) || !(isNaN(t) || isNaN(e) || Math.abs(t - e) > n)
    }
    var Sa = {
        __proto__: null,
        TEST_EPSILON_FLOAT16: .1,
        expectArraysClose: function(t, e, n) {
            return null == n && (n = ka()),
            xa(t, e, (function(t, e) {
                return Ea(t, e, n)
            }
            ))
        },
        testEpsilon: ka,
        expectPromiseToFail: function(t, e) {
            t().then((function() {
                return e.fail()
            }
            ), (function() {
                return e()
            }
            ))
        },
        expectArraysEqual: function(t, e) {
            var n = "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? [e] : e;
            return L(t) || L(t[0]) || L(e) || L(e[0]) ? xa(t, n, (function(t, e) {
                return t == e
            }
            )) : xa(t, e, (function(t, e) {
                return Ea(t, e, 0)
            }
            ))
        },
        expectNumbersClose: function(t, e, n) {
            if (null == n && (n = ka()),
            !Ea(t, e, n))
                throw new Error("Numbers differ: actual === " + t + ", expected === " + e)
        },
        expectValuesInRange: function(t, e, n) {
            for (var r = 0; r < t.length; r++)
                if (t[r] < e || t[r] > n)
                    throw new Error("Value out of range:" + t[r] + " low: " + e + ", high: " + n)
        },
        expectArrayBuffersEqual: function(t, e) {
            expect(new Float32Array(t)).toEqual(new Float32Array(e))
        }
    };
    function Da(t) {
        s().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(t + " You can disable deprecation warnings with tf.disableDeprecationWarnings().")
    }
    function Ia(t, e) {
        return Dt.tidy(t, e)
    }
    function Na(t) {
        kt(t).forEach((function(t) {
            return t.dispose()
        }
        ))
    }
    function Fa(t) {
        return Dt.keep(t)
    }
    var Ma = qt({
        addN_: function(t) {
            w(Array.isArray(t), (function() {
                return "The argument passed to tf.addN() must be a list of tensors"
            }
            )),
            w(t.length >= 1, (function() {
                return "Must pass at least one tensor to tf.addN(), but got " + t.length
            }
            ));
            var e = t.map((function(t, e) {
                return Rt(t, "tensors" + e, "addN")
            }
            ))
              , n = e[0];
            e.forEach((function(t) {
                if (t.dtype !== n.dtype)
                    throw new Error("All tensors passed to tf.addN() must have the same dtype")
            }
            )),
            e.forEach((function(t) {
                if (!D(t.shape, n.shape))
                    throw new Error("All tensors passed to tf.addN() must have the same shape")
            }
            ));
            var r = e;
            return Dt.runKernelFunc((function(t, n) {
                var r = t.addN(e);
                return n(e),
                r
            }
            ), r, null, "AddN")
        }
    });
    var Aa = qt({
        atan2_: function(t, e) {
            var n, r = Rt(t, "a", "atan2"), o = Rt(e, "b", "atan2");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.atan2(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Atan2")
        }
    });
    var _a = qt({
        avgPool_: function(t, e, n, r, o) {
            var a = Rt(t, "x", "avgPool", "float32");
            w(Bn(n, 1), (function() {
                return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            ));
            var i = a
              , u = !1;
            3 === a.rank && (u = !0,
            i = fe(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            w(4 === i.rank, (function() {
                return "Error in avgPool: x must be rank 4 but got rank " + i.rank + "."
            }
            )),
            null != o && w(I(r), (function() {
                return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + r + "."
            }
            ));
            var s = {
                x: i
            }
              , c = {
                filterSize: e,
                strides: n,
                pad: r,
                dimRoundingMode: o
            }
              , l = Dt.runKernelFunc((function(t, a) {
                var u = En(i.shape, e, n, 1, r, o);
                return a([i]),
                1 === u.filterWidth && 1 === u.filterHeight && D(u.inShape, u.outShape) ? i.clone() : t.avgPool(i, u)
            }
            ), s, null, "AvgPool", c);
            return l = ce(l, a.dtype),
            u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
        }
    });
    var Ta = qt({
        avgPool3d_: function(t, e, n, r, o, a, i) {
            void 0 === a && (a = "NDHWC"),
            null == i ? i = [1, 1, 1] : Da("dilations is deprecated, this field will be gone in v3.0.0.");
            var u = Rt(t, "x", "avgPool3d", "float32")
              , s = u
              , c = !1;
            4 === u.rank && (c = !0,
            s = fe(u, [1, u.shape[0], u.shape[1], u.shape[2], u.shape[3]])),
            w(5 === s.rank, (function() {
                return "Error in avgPool3d: x must be rank 5 but got rank " + s.rank + "."
            }
            )),
            w("NDHWC" === a, (function() {
                return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + a
            }
            )),
            w(Bn(n, i), (function() {
                return "Error in avgPool3d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
            }
            )),
            null != o && w(I(r), (function() {
                return "Error in avgPool3d: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + r + "."
            }
            ));
            var l = {
                x: s
            }
              , f = {
                filterSize: e,
                strides: n,
                pad: r,
                dimRoundingMode: o,
                dataFormat: a,
                dilations: i
            }
              , p = Dt.runKernelFunc((function(t, u) {
                null == i && (i = [1, 1, 1]);
                var c = Sn(s.shape, e, n, i, r, o, a);
                return u([s]),
                t.avgPool3d(s, c)
            }
            ), l, null, "AvgPool3D", f);
            return p = ce(p, s.dtype),
            c ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p
        }
    });
    function Ba(t) {
        return null == t ? null : 0 === t.rank ? t.as1D() : 1 === t.rank ? t : 2 === t.rank ? t.as4D(1, 1, t.shape[0], t.shape[1]) : 3 === t.rank ? t.as4D(1, t.shape[0], t.shape[1], t.shape[2]) : t
    }
    var Ca = qt({
        batchNorm_: function(t, e, n, r, o, a) {
            null == a && (a = .001);
            var i, u, s = Rt(t, "x", "batchNorm"), c = Rt(e, "mean", "batchNorm"), l = Rt(n, "variance", "batchNorm");
            null != o && (i = Rt(o, "scale", "batchNorm")),
            null != r && (u = Rt(r, "offset", "batchNorm")),
            w(c.rank === l.rank, (function() {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            }
            )),
            w(null == u || c.rank === u.rank, (function() {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            }
            )),
            w(null == i || c.rank === i.rank, (function() {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            }
            ));
            var f = function(t) {
                return 0 === t.rank || 1 === t.rank ? t.as4D(1, 1, 1, t.size) : 2 === t.rank ? t.as4D(1, 1, t.shape[0], t.shape[1]) : 3 === t.rank ? t.as4D(1, t.shape[0], t.shape[1], t.shape[2]) : t
            }(s)
              , p = {
                x: f,
                scale: i,
                offset: u,
                mean: c,
                variance: l
            }
              , h = {
                varianceEpsilon: a
            }
              , d = Dt.runKernelFunc((function(t, e) {
                return e([f, c, l, i]),
                t.batchNorm(f, Ba(c), Ba(l), Ba(u), Ba(i), a)
            }
            ), p, null, "FusedBatchNorm", h);
            return fe(d, s.shape)
        }
    });
    var Ra = qt({
        batchNorm2d_: function(t, e, n, r, o, a) {
            var i, u, s = Rt(t, "x", "batchNorm"), c = Rt(e, "mean", "batchNorm"), l = Rt(n, "variance", "batchNorm");
            return null != o && (i = Rt(o, "scale", "batchNorm")),
            null != r && (u = Rt(r, "offset", "batchNorm")),
            w(2 === s.rank, (function() {
                return "Error in batchNorm3D: x must be rank 3 but got rank " + s.rank + "."
            }
            )),
            w(2 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c.rank + "."
            }
            )),
            w(2 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != i && w(2 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + i.rank + "."
            }
            )),
            null != u && w(2 === u.rank || 1 === u.rank, (function() {
                return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + u.rank + "."
            }
            )),
            Ca(s, c, l, u, i, a)
        }
    });
    var Pa = qt({
        batchNorm3d_: function(t, e, n, r, o, a) {
            var i, u, s = Rt(t, "x", "batchNorm"), c = Rt(e, "mean", "batchNorm"), l = Rt(n, "variance", "batchNorm");
            return null != o && (i = Rt(o, "scale", "batchNorm")),
            null != r && (u = Rt(r, "offset", "batchNorm")),
            w(3 === s.rank, (function() {
                return "Error in batchNorm3D: x must be rank 3 but got rank " + s.rank + "."
            }
            )),
            w(3 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c.rank + "."
            }
            )),
            w(3 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != i && w(3 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + i.rank + "."
            }
            )),
            null != u && w(3 === u.rank || 1 === u.rank, (function() {
                return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + u.rank + "."
            }
            )),
            Ca(s, c, l, u, i, a)
        }
    });
    var qa = qt({
        batchNorm4d_: function(t, e, n, r, o, a) {
            var i, u, s = Rt(t, "x", "batchNorm"), c = Rt(e, "mean", "batchNorm"), l = Rt(n, "variance", "batchNorm");
            return null != o && (i = Rt(o, "scale", "batchNorm")),
            null != r && (u = Rt(r, "offset", "batchNorm")),
            w(4 === s.rank, (function() {
                return "Error in batchNorm4D: x must be rank 4 but got rank " + s.rank + "."
            }
            )),
            w(4 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c.rank + "."
            }
            )),
            w(4 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != i && w(4 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + i.rank + "."
            }
            )),
            null != u && w(4 === u.rank || 1 === u.rank, (function() {
                return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + u.rank + "."
            }
            )),
            Ca(s, c, l, u, i, a)
        }
    });
    var za = qt({
        clone_: function(t) {
            var e = Rt(t, "x", "clone", null);
            return Dt.runKernelFunc((function() {
                return Dt.makeTensorFromDataId(e.dataId, e.shape, e.dtype)
            }
            ), {
                x: e
            }, null, "Identity")
        }
    });
    var La = qt({
        broadcastTo_: function(t, e) {
            var n = Rt(t, "broadcastTo", "x")
              , r = n.shape;
            if (e.some((function(t) {
                return !(t > 0) || t % 1 != 0
            }
            )))
                throw new Error("broadcastTo(): Invalid broadcast shape [" + e + "].");
            if (e.length < n.rank)
                throw new Error("broadcastTo(): shape.length=" + e.length + " < input.rank=" + n.rank + ".");
            if (e.length > n.rank) {
                for (var o = n.shape.slice(); o.length < e.length; )
                    o.unshift(1);
                n = fe(n, o)
            }
            for (var a = n.shape, i = Array.from(e), u = e.length - 1; u >= 0; u--)
                if (a[u] === e[u])
                    i[u] = 1;
                else if (1 !== n.shape[u])
                    throw new Error("broadcastTo(): [" + r + "] cannot be broadcast to [" + e + "].");
            if (0 === i.map((function(t, e) {
                return t > 1 ? e : -1
            }
            )).filter((function(t) {
                return t >= 0
            }
            )).length)
                return za(n);
            var s = {
                x: n
            }
              , c = {
                shape: e,
                inputShape: a
            };
            return Dt.runKernelFunc((function(t) {
                return t.tile(n, i)
            }
            ), s, null, "BroadcastTo", c)
        }
    });
    var Oa = qt({
        concat1d_: function(t) {
            return ie(t, 0)
        }
    });
    var Wa = qt({
        concat2d_: function(t, e) {
            return ie(t, e)
        }
    });
    var Ka = qt({
        concat3d_: function(t, e) {
            return ie(t, e)
        }
    });
    var Ga = qt({
        concat4d_: function(t, e) {
            return ie(t, e)
        }
    });
    var Ua = qt({
        conv1d_: function(t, e, n, r, o, a, i) {
            void 0 === o && (o = "NWC"),
            void 0 === a && (a = 1);
            var u = Rt(t, "x", "conv1d")
              , s = Rt(e, "filter", "conv1d")
              , c = u
              , l = !1;
            2 === u.rank && (l = !0,
            c = fe(u, [1, u.shape[0], u.shape[1]])),
            w(3 === c.rank, (function() {
                return "Error in conv1d: input must be rank 3, but got rank " + c.rank + "."
            }
            )),
            w(3 === s.rank, (function() {
                return "Error in conv1d: filter must be rank 3, but got rank " + s.rank + "."
            }
            )),
            null != i && w(I(r), (function() {
                return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + r + "."
            }
            )),
            w(c.shape[2] === s.shape[1], (function() {
                return "Error in conv1d: depth of input (" + c.shape[2] + ") must match input depth for filter " + s.shape[1] + "."
            }
            )),
            w(Bn(n, a), (function() {
                return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + a + "'"
            }
            )),
            w("NWC" === o, (function() {
                return "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported."
            }
            ));
            var f = fe(s, [1, s.shape[0], s.shape[1], s.shape[2]])
              , p = fe(c, [c.shape[0], 1, c.shape[1], c.shape[2]])
              , h = Jn(p, f, [1, n], r, "NHWC", [1, a], i);
            return fe(h, l ? [h.shape[2], h.shape[3]] : [h.shape[0], h.shape[2], h.shape[3]])
        }
    });
    var Ha = qt({
        conv2dTranspose_: function(t, e, n, r, o, a) {
            var i = Rt(t, "x", "conv2dTranspose")
              , u = Rt(e, "filter", "conv2dTranspose");
            return jn(n, i, u, r, o, "NHWC", a)
        }
    });
    var Va = qt({
        conv3d_: function(t, e, n, r, o, a) {
            void 0 === o && (o = "NDHWC"),
            void 0 === a && (a = [1, 1, 1]);
            var i = Rt(t, "x", "conv3d")
              , u = Rt(e, "filter", "conv3d")
              , s = i
              , c = !1;
            4 === i.rank && (c = !0,
            s = fe(i, [1, i.shape[0], i.shape[1], i.shape[2], i.shape[3]])),
            w(5 === s.rank, (function() {
                return "Error in conv3d: input must be rank 5, but got rank " + s.rank + "."
            }
            )),
            w(5 === u.rank, (function() {
                return "Error in conv3d: filter must be rank 5, but got rank " + u.rank + "."
            }
            )),
            w(s.shape[4] === u.shape[3], (function() {
                return "Error in conv3d: depth of input (" + s.shape[4] + ") must match input depth for filter " + u.shape[3] + "."
            }
            )),
            w(Bn(n, a), (function() {
                return "Error in conv3D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + a + "'"
            }
            )),
            w("NDHWC" === o, (function() {
                return "Error in conv3d: got dataFormat of " + o + " but only NDHWC is currently supported."
            }
            ));
            var l = {
                x: s,
                filter: u
            }
              , f = {
                strides: n,
                pad: r,
                dataFormat: o,
                dilations: a
            }
              , p = Dt.runKernelFunc((function(t, e) {
                var o = In(s.shape, u.shape, n, a, r)
                  , i = t.conv3d(s, u, o);
                return e([s, u]),
                i
            }
            ), l, null, "Conv3D", f);
            return c ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p
        }
    });
    var ja = qt({
        conv3dTranspose_: function(t, e, n, r, o) {
            var a = Rt(t, "x", "conv3dTranspose")
              , i = Rt(e, "filter", "conv3dTranspose");
            return Zn(n, a, i, r, o)
        }
    });
    var $a = qt({
        depthToSpace_: function(t, e, n) {
            void 0 === n && (n = "NHWC");
            var r = Rt(t, "x", "depthToSpace")
              , o = "NHWC" === n ? r.shape[1] : r.shape[2]
              , a = "NHWC" === n ? r.shape[2] : r.shape[3]
              , i = "NHWC" === n ? r.shape[3] : r.shape[1];
            w(o * e >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + o + " and " + e + "  for depthToSpace with input shape\n    " + r.shape
            }
            )),
            w(a * e >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + a + " and " + e + " for depthToSpace with input shape\n        " + r.shape
            }
            )),
            w(i % (e * e) == 0, (function() {
                return "Dimension size must be evenly divisible by " + e * e + " but is " + i + " for depthToSpace with input shape " + r.shape
            }
            ));
            var u = {
                x: r
            }
              , s = {
                blockSize: e,
                dataFormat: n
            };
            return Dt.runKernelFunc((function(t) {
                return t.depthToSpace(r, e, n)
            }
            ), u, null, "DepthToSpace", s)
        }
    });
    var Ja = qt({
        depthwiseConv2d_: function(t, e, n, r, o, a, i) {
            void 0 === o && (o = "NHWC"),
            void 0 === a && (a = [1, 1]);
            var u = Rt(t, "x", "depthwiseConv2d")
              , s = Rt(e, "filter", "depthwiseConv2d")
              , c = u
              , l = !1;
            3 === u.rank && (l = !0,
            c = fe(u, [1, u.shape[0], u.shape[1], u.shape[2]])),
            w(4 === c.rank, (function() {
                return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c.rank + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + s.rank + "."
            }
            )),
            w(c.shape[3] === s.shape[2], (function() {
                return "Error in depthwiseConv2d: number of input channels (" + c.shape[3] + ") must match the inChannels dimension in filter " + s.shape[2] + "."
            }
            )),
            null != i && w(I(r), (function() {
                return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + r + "."
            }
            ));
            var f = {
                x: c,
                filter: s
            }
              , p = {
                strides: n,
                pad: r,
                dataFormat: o,
                dilations: a,
                dimRoundingMode: i
            }
              , h = Dt.runKernelFunc((function(t, e) {
                null == a && (a = [1, 1]),
                w(Bn(n, a), (function() {
                    return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + a + "'"
                }
                ));
                var o = Dn(c.shape, s.shape, n, a, r, i, !0)
                  , u = t.depthwiseConv2D(c, s, o);
                return e([c, s]),
                u
            }
            ), f, null, "DepthwiseConv2dNative", p);
            return l ? fe(h, [h.shape[1], h.shape[2], h.shape[3]]) : h
        }
    });
    var Ya = qt({
        diag_: function(t) {
            var e = Rt(t, "x", "diag").flatten()
              , n = {
                x: e
            };
            return Dt.runKernelFunc((function(n) {
                var r = n.diag(e)
                  , o = t.shape.concat(t.shape);
                return fe(r, o)
            }
            ), n, null, "Diag")
        }
    });
    var Xa = qt({
        divNoNan_: function(t, e) {
            var n, r = Rt(t, "a", "div"), o = Rt(e, "b", "div");
            r = (n = bt(r, o))[0],
            o = n[1];
            var a = ge(r, o)
              , i = ae(a)
              , u = o.equal(i);
            return Pr(u, i, a)
        }
    });
    var Za = qt({
        dot_: function(t, e) {
            var n = Rt(t, "t1", "dot")
              , r = Rt(e, "t2", "dot");
            w(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), (function() {
                return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var o = 1 === n.rank ? n.size : n.shape[1]
              , a = 1 === r.rank ? r.size : r.shape[0];
            if (w(o === a, (function() {
                return "Error in dot: inner dimensions of inputs must match, but got " + o + " and " + a + "."
            }
            )),
            1 === n.rank && 1 === r.rank) {
                var i = fe(n, [1, -1])
                  , u = fe(r, [-1, 1])
                  , s = Ln(i, u);
                return fe(s, [])
            }
            if (1 === n.rank && 2 === r.rank) {
                i = fe(n, [1, -1]),
                u = fe(r, [r.shape[0], r.shape[1]]),
                s = Ln(i, u);
                return fe(s, [s.size])
            }
            if (2 === n.rank && 1 === r.rank) {
                u = fe(r, [-1, 1]),
                s = Ln(n, u);
                return fe(s, [s.size])
            }
            return u = fe(r, [r.shape[0], r.shape[1]]),
            s = Ln(n, u)
        }
    });
    var Qa = qt({
        elu_: function(t) {
            var e = Rt(t, "x", "elu")
              , n = {
                x: e
            };
            return Dt.runKernelFunc((function(t, n) {
                var r = t.elu(e);
                return n([r]),
                r
            }
            ), n, null, "Elu")
        }
    });
    var ti = qt({
        equal_: function(t, e) {
            var n, r = Rt(t, "a", "equal"), o = Rt(e, "b", "equal");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.equal(r, o)
            }
            ), a, null, "Equal")
        }
    });
    var ei = qt({
        eye_: function(t, e, n, r) {
            void 0 === r && (r = "float32"),
            null == e && (e = t);
            for (var o = ue([t, e], r), a = t <= e ? t : e, i = 0; i < a; ++i)
                o.set(1, i, i);
            var u = o.toTensor().as2D(t, e);
            if (null == n)
                return u;
            if (1 === n.length)
                return lr(le(u, 0), [n[0], 1, 1]);
            if (2 === n.length)
                return lr(le(le(u, 0), 0), [n[0], n[1], 1, 1]);
            if (3 === n.length)
                return lr(le(le(le(u, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
            throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
        }
    });
    function ni(t, e, n) {
        var r = {
            shape: t,
            value: e,
            dtype: n
        };
        return Dt.runKernelFunc((function(r) {
            return r.fill(t, e, n)
        }
        ), {}, null, "Fill", r)
    }
    var ri = qt({
        maximum_: function(t, e) {
            var n, r = Rt(t, "a", "maximum"), o = Rt(e, "b", "maximum");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            "bool" === r.dtype && (r = ce(r, "int32"),
            o = ce(o, "int32")),
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.maximum(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Maximum")
        }
    });
    var oi = qt({
        leakyRelu_: function(t, e) {
            void 0 === e && (e = .2);
            var n = Rt(t, "x", "leakyRelu");
            return ri(ye(Vt(e), n), n)
        }
    });
    var ai = qt({
        localResponseNormalization_: function(t, e, n, r, o) {
            void 0 === e && (e = 5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === o && (o = .5);
            var a = Rt(t, "x", "localResponseNormalization");
            w(4 === a.rank || 3 === a.rank, (function() {
                return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + a.rank + "."
            }
            )),
            w(I(e), (function() {
                return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + e + "."
            }
            ));
            var i = a
              , u = !1;
            3 === a.rank && (u = !0,
            i = fe(a, [1, a.shape[0], a.shape[1], a.shape[2]]));
            var s = {
                x: i
            }
              , c = {
                depthRadius: e,
                bias: n,
                alpha: r,
                beta: o
            }
              , l = Dt.runKernelFunc((function(t, a) {
                var u = t.localResponseNormalization4D(i, e, n, r, o);
                return a([i, u]),
                u
            }
            ), s, null, "LRN", c);
            return u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
        }
    });
    var ii = qt({
        max_: function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = !1);
            var r = Rt(t, "x", "max")
              , o = {
                x: r
            }
              , a = {
                reductionIndices: e,
                keepDims: n
            }
              , i = Dt.runKernelFunc((function(t, n) {
                var o = M(e, r.shape)
                  , a = Ie(o, r.rank)
                  , i = r;
                null != a && (i = tr(r, a),
                o = Fe(o.length, i.rank));
                var u = t.max(i, o);
                return n([r, u]),
                null != a && t.disposeData(i.dataId),
                u
            }
            ), o, null, "Max", a);
            return n ? fe(i, De(i.shape, M(e, r.shape))) : i
        }
    });
    var ui = qt({
        maxPool_: function(t, e, n, r, o) {
            var a = Rt(t, "x", "maxPool")
              , i = a
              , u = !1;
            3 === a.rank && (u = !0,
            i = fe(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            w(4 === i.rank, (function() {
                return "Error in maxPool: input must be rank 4 but got rank " + i.rank + "."
            }
            )),
            w(Bn(n, 1), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            )),
            null != o && w(I(r), (function() {
                return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + r + "."
            }
            ));
            var s = {
                x: i
            }
              , c = {
                filterSize: e,
                strides: n,
                pad: r,
                dimRoundingMode: o
            }
              , l = Dt.runKernelFunc((function(t, a) {
                var u, s = En(i.shape, e, n, 1, r, o);
                return u = 1 === s.filterWidth && 1 === s.filterHeight && D(s.inShape, s.outShape) ? i.clone() : t.maxPool(i, s),
                a([i, u]),
                u
            }
            ), s, null, "MaxPool", c);
            return u ? fe(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
        }
    });
    var si = qt({
        maxPool3d_: function(t, e, n, r, o, a, i) {
            void 0 === e && (e = [1, 1, 1]),
            void 0 === a && (a = "NDHWC"),
            null == i ? i = [1, 1, 1] : Da("dilations is deprecated, this field will be gone in v3.0.0.");
            var u = Rt(t, "x", "maxPool3d")
              , s = u
              , c = !1;
            4 === u.rank && (c = !0,
            s = u.as5D(1, u.shape[0], u.shape[1], u.shape[2], u.shape[3])),
            w(5 === s.rank, (function() {
                return "Error in maxPool3d: x must be rank 5 but got rank " + s.rank + "."
            }
            )),
            w("NDHWC" === a, (function() {
                return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + a
            }
            )),
            w(Bn(n, i), (function() {
                return "Error in maxPool3d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
            }
            )),
            null != o && w(I(r), (function() {
                return "Error in maxPool3d: pad must be an integer when using, dimRoundingMode " + o + " but got pad " + r + "."
            }
            ));
            var l = {
                x: s
            }
              , f = {
                filterSize: e,
                strides: n,
                pad: r,
                dimRoundingMode: o,
                dataFormat: a,
                dilations: i
            }
              , p = Dt.runKernelFunc((function(t, u) {
                null == i && (i = [1, 1, 1]);
                var c = Sn(s.shape, e, n, i, r, o, a)
                  , l = t.maxPool3d(s, c);
                return u([s, l]),
                l
            }
            ), l, null, "MaxPool3D", f);
            return c ? fe(p, [p.shape[1], p.shape[2], p.shape[3], p.shape[4]]) : p
        }
    });
    var ci = qt({
        maxPoolWithArgmax_: function(t, e, n, r, o) {
            void 0 === o && (o = !1);
            var a = {
                x: Rt(t, "x", "maxPoolWithArgmax")
            }
              , i = {
                filterSize: e,
                strides: n,
                pad: r,
                includeBatchInIndex: o
            }
              , u = Dt.runKernel("MaxPoolWithArgmax", a, i);
            return {
                result: u[0],
                indexes: u[1]
            }
        }
    });
    var li = qt({
        minimum_: function(t, e) {
            var n, r = Rt(t, "a", "minimum"), o = Rt(e, "b", "minimum");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            "bool" === r.dtype && (r = ce(r, "int32"),
            o = ce(o, "int32")),
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.minimum(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Minimum")
        }
    });
    var fi = qt({
        mod_: function(t, e) {
            var n, r = Rt(t, "a", "mod"), o = Rt(e, "b", "mod");
            n = bt(r, o),
            r = n[0],
            o = n[1];
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.mod(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "Mod")
        }
    });
    var pi = qt({
        multinomial_: function(t, e, n, r) {
            void 0 === r && (r = !1);
            var o = Rt(t, "logits", "multinomial")
              , a = o.size
              , i = o.rank;
            if (a < 2)
                throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + a + ".");
            if (i > 2)
                throw new Error("Rank of probabilities must be 1 or 2, but is " + i);
            n = n || Math.random();
            var u = 1 === i ? o.as2D(1, -1) : o
              , s = Dt.runKernelFunc((function(t) {
                return t.multinomial(u, r, e, n)
            }
            ), {
                logits2D: u
            });
            return 1 === i ? s.as1D() : s
        }
    });
    var hi = qt({
        notEqual_: function(t, e) {
            var n, r = Rt(t, "a", "notEqual"), o = Rt(e, "b", "notEqual");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.notEqual(r, o)
            }
            ), a, null, "NotEqual")
        }
    });
    var di = qt({
        outerProduct_: function(t, e) {
            var n = Rt(t, "v1", "outerProduct")
              , r = Rt(e, "v2", "outerProduct");
            w(1 === n.rank && 1 === r.rank, (function() {
                return "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var o = fe(n, [-1, 1])
              , a = fe(r, [1, -1]);
            return Ln(o, a)
        }
    });
    var vi = qt({
        pad1d_: function(t, e, n) {
            return void 0 === n && (n = 0),
            w(2 === e.length, (function() {
                return "Invalid number of paddings. Must be length of 2."
            }
            )),
            Yr(t, [e], n)
        }
    });
    var mi = qt({
        pad2d_: function(t, e, n) {
            return void 0 === n && (n = 0),
            w(2 === e.length && 2 === e[0].length && 2 === e[1].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Yr(t, e, n)
        }
    });
    var gi = qt({
        pad3d_: function(t, e, n) {
            return void 0 === n && (n = 0),
            w(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Yr(t, e, n)
        }
    });
    var yi = qt({
        pad4d_: function(t, e, n) {
            return void 0 === n && (n = 0),
            w(4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Yr(t, e, n)
        }
    });
    var bi = qt({
        pool_: function(t, e, n, r, o, a) {
            null == o && (o = [1, 1]),
            null == a && (a = 1),
            0 === r && (r = "valid");
            var i = Rt(t, "x", "maxPool")
              , u = i
              , s = !1;
            3 === i.rank && (s = !0,
            u = fe(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            w(Bn(a, o), (function() {
                return "Error in pool: Either strides or dilations must be 1. Got strides " + a + " and dilations '" + o + "'"
            }
            ));
            var c, l = En(u.shape, e, a, o, r), f = [l.dilationHeight, l.dilationWidth];
            c = "same" === r ? function(t, e) {
                var n = t.map((function(t, n) {
                    return t + (t - 1) * (e[n] - 1)
                }
                )).map((function(t) {
                    return t - 1
                }
                ))
                  , r = n.map((function(t) {
                    return Math.floor(t / 2)
                }
                ))
                  , o = n.map((function(t, e) {
                    return t - r[e]
                }
                ));
                return n.map((function(t, e) {
                    return [r[e], o[e]]
                }
                ))
            }([l.filterHeight, l.filterWidth], f) : [[0, 0], [0, 0]];
            var p = 1 === f[0] && 1 === f[1]
              , h = function(t, e, n) {
                var r = n.map((function(t) {
                    return t[0]
                }
                ))
                  , o = n.map((function(t) {
                    return t[1]
                }
                ))
                  , a = t.concat(r, o)
                  , i = e.map((function(t, e) {
                    return (t - a[e] % t) % t
                }
                ))
                  , u = o.map((function(t, e) {
                    return t + i[e]
                }
                ))
                  , s = e.map((function(t, e) {
                    return [r[e], u[e]]
                }
                ))
                  , c = e.map((function(t, e) {
                    return [0, i[e]]
                }
                ));
                return [s, c]
            }([l.inHeight, l.inWidth], f, c)
              , d = h[0]
              , v = h[1]
              , m = p ? r : "valid"
              , g = p ? u : Wn(u, f, d)
              , y = ("avg" === n ? function() {
                return _a(g, e, a, m)
            }
            : function() {
                return ui(g, e, a, m)
            }
            )()
              , b = p ? y : Ur(y, f, v);
            return s ? fe(b, [b.shape[1], b.shape[2], b.shape[3]]) : b
        }
    });
    var wi = qt({
        prelu_: function(t, e) {
            var n = Rt(t, "x", "prelu")
              , r = Rt(e, "alpha", "prelu")
              , o = {
                x: n,
                alpha: r
            };
            return Dt.runKernelFunc((function(t, e) {
                var o = t.prelu(n, r);
                return e([n, r]),
                o
            }
            ), o, null, "Prelu")
        }
    });
    var ki = qt({
        rand_: function(t, e, n) {
            var r = S(t)
              , o = null;
            if (null == n || "float32" === n)
                o = new Float32Array(r);
            else if ("int32" === n)
                o = new Int32Array(r);
            else {
                if ("bool" !== n)
                    throw new Error("Unknown data type " + n);
                o = new Uint8Array(r)
            }
            for (var a = 0; a < r; a++)
                o[a] = e();
            return Dt.makeTensor(o, t, n)
        }
    });
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function xi(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var Ei = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e, n = this, r = (e = 4022871197,
                function(t) {
                    t = t.toString();
                    for (var n = 0; n < t.length; n++) {
                        var r = .02519603282416938 * (e += t.charCodeAt(n));
                        r -= e = r >>> 0,
                        e = (r *= e) >>> 0,
                        e += 4294967296 * (r -= e)
                    }
                    return 2.3283064365386963e-10 * (e >>> 0)
                }
                );
                n.next = function() {
                    var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
                    return n.s0 = n.s1,
                    n.s1 = n.s2,
                    n.s2 = t - (n.c = 0 | t)
                }
                ,
                n.c = 1,
                n.s0 = r(" "),
                n.s1 = r(" "),
                n.s2 = r(" "),
                n.s0 -= r(t),
                n.s0 < 0 && (n.s0 += 1),
                n.s1 -= r(t),
                n.s1 < 0 && (n.s1 += 1),
                n.s2 -= r(t),
                n.s2 < 0 && (n.s2 += 1),
                r = null
            }
            function o(t, e) {
                return e.c = t.c,
                e.s0 = t.s0,
                e.s1 = t.s1,
                e.s2 = t.s2,
                e
            }
            function a(t, e) {
                var n = new r(t)
                  , a = e && e.state
                  , i = n.next;
                return i.int32 = function() {
                    return 4294967296 * n.next() | 0
                }
                ,
                i.double = function() {
                    return i() + 11102230246251565e-32 * (2097152 * i() | 0)
                }
                ,
                i.quick = i,
                a && ("object" == typeof a && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.alea = a
        }(0, t, !1)
    }
    ))
      , Si = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e = this
                  , n = "";
                e.x = 0,
                e.y = 0,
                e.z = 0,
                e.w = 0,
                e.next = function() {
                    var t = e.x ^ e.x << 11;
                    return e.x = e.y,
                    e.y = e.z,
                    e.z = e.w,
                    e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                }
                ,
                t === (0 | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++)
                    e.x ^= 0 | n.charCodeAt(r),
                    e.next()
            }
            function o(t, e) {
                return e.x = t.x,
                e.y = t.y,
                e.z = t.z,
                e.w = t.w,
                e
            }
            function a(t, e) {
                var n = new r(t)
                  , a = e && e.state
                  , i = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return i.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);return t
                }
                ,
                i.int32 = n.next,
                i.quick = i,
                a && ("object" == typeof a && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.xor128 = a
        }(0, t, !1)
    }
    ))
      , Di = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e = this
                  , n = "";
                e.next = function() {
                    var t = e.x ^ e.x >>> 2;
                    return e.x = e.y,
                    e.y = e.z,
                    e.z = e.w,
                    e.w = e.v,
                    (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
                }
                ,
                e.x = 0,
                e.y = 0,
                e.z = 0,
                e.w = 0,
                e.v = 0,
                t === (0 | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++)
                    e.x ^= 0 | n.charCodeAt(r),
                    r == n.length && (e.d = e.x << 10 ^ e.x >>> 4),
                    e.next()
            }
            function o(t, e) {
                return e.x = t.x,
                e.y = t.y,
                e.z = t.z,
                e.w = t.w,
                e.v = t.v,
                e.d = t.d,
                e
            }
            function a(t, e) {
                var n = new r(t)
                  , a = e && e.state
                  , i = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return i.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);return t
                }
                ,
                i.int32 = n.next,
                i.quick = i,
                a && ("object" == typeof a && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.xorwow = a
        }(0, t, !1)
    }
    ))
      , Ii = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e = this;
                e.next = function() {
                    var t, n, r = e.x, o = e.i;
                    return t = r[o],
                    n = (t ^= t >>> 7) ^ t << 24,
                    n ^= (t = r[o + 1 & 7]) ^ t >>> 10,
                    n ^= (t = r[o + 3 & 7]) ^ t >>> 3,
                    n ^= (t = r[o + 4 & 7]) ^ t << 7,
                    t = r[o + 7 & 7],
                    n ^= (t ^= t << 13) ^ t << 9,
                    r[o] = n,
                    e.i = o + 1 & 7,
                    n
                }
                ,
                function(t, e) {
                    var n, r = [];
                    if (e === (0 | e))
                        r[0] = e;
                    else
                        for (e = "" + e,
                        n = 0; n < e.length; ++n)
                            r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                    for (; r.length < 8; )
                        r.push(0);
                    for (n = 0; n < 8 && 0 === r[n]; ++n)
                        ;
                    for (8 == n ? r[7] = -1 : r[n],
                    t.x = r,
                    t.i = 0,
                    n = 256; n > 0; --n)
                        t.next()
                }(e, t)
            }
            function o(t, e) {
                return e.x = t.x.slice(),
                e.i = t.i,
                e
            }
            function a(t, e) {
                null == t && (t = +new Date);
                var n = new r(t)
                  , a = e && e.state
                  , i = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return i.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);return t
                }
                ,
                i.int32 = n.next,
                i.quick = i,
                a && (a.x && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.xorshift7 = a
        }(0, t, !1)
    }
    ))
      , Ni = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e = this;
                e.next = function() {
                    var t, n, r = e.w, o = e.X, a = e.i;
                    return e.w = r = r + 1640531527 | 0,
                    n = o[a + 34 & 127],
                    t = o[a = a + 1 & 127],
                    n ^= n << 13,
                    t ^= t << 17,
                    n ^= n >>> 15,
                    t ^= t >>> 12,
                    n = o[a] = n ^ t,
                    e.i = a,
                    n + (r ^ r >>> 16) | 0
                }
                ,
                function(t, e) {
                    var n, r, o, a, i, u = [], s = 128;
                    for (e === (0 | e) ? (r = e,
                    e = null) : (e += "\0",
                    r = 0,
                    s = Math.max(s, e.length)),
                    o = 0,
                    a = -32; a < s; ++a)
                        e && (r ^= e.charCodeAt((a + 32) % e.length)),
                        0 === a && (i = r),
                        r ^= r << 10,
                        r ^= r >>> 15,
                        r ^= r << 4,
                        r ^= r >>> 13,
                        a >= 0 && (i = i + 1640531527 | 0,
                        o = 0 == (n = u[127 & a] ^= r + i) ? o + 1 : 0);
                    for (o >= 128 && (u[127 & (e && e.length || 0)] = -1),
                    o = 127,
                    a = 512; a > 0; --a)
                        r = u[o + 34 & 127],
                        n = u[o = o + 1 & 127],
                        r ^= r << 13,
                        n ^= n << 17,
                        r ^= r >>> 15,
                        n ^= n >>> 12,
                        u[o] = r ^ n;
                    t.w = i,
                    t.X = u,
                    t.i = o
                }(e, t)
            }
            function o(t, e) {
                return e.i = t.i,
                e.w = t.w,
                e.X = t.X.slice(),
                e
            }
            function a(t, e) {
                null == t && (t = +new Date);
                var n = new r(t)
                  , a = e && e.state
                  , i = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return i.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);return t
                }
                ,
                i.int32 = n.next,
                i.quick = i,
                a && (a.X && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.xor4096 = a
        }(0, t, !1)
    }
    ))
      , Fi = xi((function(t) {
        !function(t, e, n) {
            function r(t) {
                var e = this
                  , n = "";
                e.next = function() {
                    var t = e.b
                      , n = e.c
                      , r = e.d
                      , o = e.a;
                    return t = t << 25 ^ t >>> 7 ^ n,
                    n = n - r | 0,
                    r = r << 24 ^ r >>> 8 ^ o,
                    o = o - t | 0,
                    e.b = t = t << 20 ^ t >>> 12 ^ n,
                    e.c = n = n - r | 0,
                    e.d = r << 16 ^ n >>> 16 ^ o,
                    e.a = o - t | 0
                }
                ,
                e.a = 0,
                e.b = 0,
                e.c = -1640531527,
                e.d = 1367130551,
                t === Math.floor(t) ? (e.a = t / 4294967296 | 0,
                e.b = 0 | t) : n += t;
                for (var r = 0; r < n.length + 20; r++)
                    e.b ^= 0 | n.charCodeAt(r),
                    e.next()
            }
            function o(t, e) {
                return e.a = t.a,
                e.b = t.b,
                e.c = t.c,
                e.d = t.d,
                e
            }
            function a(t, e) {
                var n = new r(t)
                  , a = e && e.state
                  , i = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return i.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);return t
                }
                ,
                i.int32 = n.next,
                i.quick = i,
                a && ("object" == typeof a && o(a, n),
                i.state = function() {
                    return o(n, {})
                }
                ),
                i
            }
            e && e.exports ? e.exports = a : n && n.amd ? n((function() {
                return a
            }
            )) : this.tychei = a
        }(0, t, !1)
    }
    ))
      , Mi = xi((function(t) {
        !function(e, n) {
            var r, o = this, a = n.pow(256, 6), i = n.pow(2, 52), u = 2 * i;
            function s(t, s, h) {
                var d = []
                  , v = f(function t(e, n) {
                    var r, o = [], a = typeof e;
                    if (n && "object" == a)
                        for (r in e)
                            try {
                                o.push(t(e[r], n - 1))
                            } catch (t) {}
                    return o.length ? o : "string" == a ? e : e + "\0"
                }((s = 1 == s ? {
                    entropy: !0
                } : s || {}).entropy ? [t, p(e)] : null == t ? function() {
                    try {
                        var t;
                        return r && (t = r.randomBytes) ? t = t(256) : (t = new Uint8Array(256),
                        (o.crypto || o.msCrypto).getRandomValues(t)),
                        p(t)
                    } catch (t) {
                        var n = o.navigator
                          , a = n && n.plugins;
                        return [+new Date, o, a, o.screen, p(e)]
                    }
                }() : t, 3), d)
                  , m = new c(d)
                  , g = function() {
                    for (var t = m.g(6), e = a, n = 0; t < i; )
                        t = 256 * (t + n),
                        e *= 256,
                        n = m.g(1);
                    for (; t >= u; )
                        t /= 2,
                        e /= 2,
                        n >>>= 1;
                    return (t + n) / e
                };
                return g.int32 = function() {
                    return 0 | m.g(4)
                }
                ,
                g.quick = function() {
                    return m.g(4) / 4294967296
                }
                ,
                g.double = g,
                f(p(m.S), e),
                (s.pass || h || function(t, e, r, o) {
                    return o && (o.S && l(o, m),
                    t.state = function() {
                        return l(m, {})
                    }
                    ),
                    r ? (n.random = t,
                    e) : t
                }
                )(g, v, "global"in s ? s.global : this == n, s.state)
            }
            function c(t) {
                var e, n = t.length, r = this, o = 0, a = r.i = r.j = 0, i = r.S = [];
                for (n || (t = [n++]); o < 256; )
                    i[o] = o++;
                for (o = 0; o < 256; o++)
                    i[o] = i[a = 255 & a + t[o % n] + (e = i[o])],
                    i[a] = e;
                (r.g = function(t) {
                    for (var e, n = 0, o = r.i, a = r.j, i = r.S; t--; )
                        e = i[o = 255 & o + 1],
                        n = 256 * n + i[255 & (i[o] = i[a = 255 & a + e]) + (i[a] = e)];
                    return r.i = o,
                    r.j = a,
                    n
                }
                )(256)
            }
            function l(t, e) {
                return e.i = t.i,
                e.j = t.j,
                e.S = t.S.slice(),
                e
            }
            function f(t, e) {
                for (var n, r = t + "", o = 0; o < r.length; )
                    e[255 & o] = 255 & (n ^= 19 * e[255 & o]) + r.charCodeAt(o++);
                return p(e)
            }
            function p(t) {
                return String.fromCharCode.apply(0, t)
            }
            if (n.seedrandom = s,
            f(n.random(), e),
            t.exports) {
                t.exports = s;
                try {
                    r = require("crypto")
                } catch (t) {}
            }
        }([], Math)
    }
    ));
    Mi.alea = Ei,
    Mi.xor128 = Si,
    Mi.xorwow = Di,
    Mi.xorshift7 = Ii,
    Mi.xor4096 = Ni,
    Mi.tychei = Fi;
    var Ai = Mi.alea
      , _i = function() {
        function t(t, e, n, r, o) {
            this.mean = t,
            this.stdDev = e,
            this.dtype = n,
            this.nextVal = NaN,
            this.truncated = r,
            this.truncated && (this.upper = this.mean + 2 * this.stdDev,
            this.lower = this.mean - 2 * this.stdDev);
            var a = o || Math.random();
            this.random = Ai(a.toString())
        }
        return t.prototype.nextValue = function() {
            if (!isNaN(this.nextVal)) {
                var t = this.nextVal;
                return this.nextVal = NaN,
                t
            }
            for (var e, n, r = !1; !r; ) {
                var o = void 0
                  , a = void 0
                  , i = void 0;
                do {
                    i = (o = 2 * this.random() - 1) * o + (a = 2 * this.random() - 1) * a
                } while (i >= 1 || 0 === i);var u = Math.sqrt(-2 * Math.log(i) / i);
                e = this.mean + this.stdDev * o * u,
                n = this.mean + this.stdDev * a * u,
                this.truncated && !this.isValidTruncated(e) || (r = !0)
            }
            return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)),
            this.convertValue(e)
        }
        ,
        t.prototype.convertValue = function(t) {
            return null == this.dtype || "float32" === this.dtype ? t : Math.round(t)
        }
        ,
        t.prototype.isValidTruncated = function(t) {
            return t <= this.upper && t >= this.lower
        }
        ,
        t
    }()
      , Ti = function() {
        function t(t, e, n, r) {
            this.alpha = t,
            this.beta = 1 / e,
            this.dtype = n;
            var o = r || Math.random();
            this.randu = Ai(o.toString()),
            this.randn = new _i(0,1,n,!1,this.randu()),
            this.d = t < 1 ? t + 2 / 3 : t - 1 / 3,
            this.c = 1 / Math.sqrt(9 * this.d)
        }
        return t.prototype.nextValue = function() {
            for (var t, e, n, r, o, a; ; ) {
                do {
                    r = this.randn.nextValue(),
                    a = 1 + this.c * r
                } while (a <= 0);if (a *= a * a,
                e = 1 - .331 * (t = r * r) * t,
                n = .5 * t + this.d * (1 - a + Math.log(a)),
                (o = this.randu()) < e || Math.log(o) < n)
                    break
            }
            return a = 1 / this.beta * this.d * a,
            this.alpha < 1 && (a *= Math.pow(this.randu(), 1 / this.alpha)),
            this.convertValue(a)
        }
        ,
        t.prototype.convertValue = function(t) {
            return "float32" === this.dtype ? t : Math.round(t)
        }
        ,
        t
    }()
      , Bi = function() {
        function t(t, e, n, r) {
            var o = this;
            if (void 0 === t && (t = 0),
            void 0 === e && (e = 1),
            this.canReturnFloat = function() {
                return null == o.dtype || "float32" === o.dtype
            }
            ,
            this.min = t,
            this.range = e - t,
            this.dtype = n,
            null == r && (r = Math.random()),
            "number" == typeof r && (r = r.toString()),
            !this.canReturnFloat() && this.range <= 1)
                throw new Error("The difference between " + t + " - " + e + " <= 1 and dtype is not float");
            this.random = Ai(r)
        }
        return t.prototype.convertValue = function(t) {
            return this.canReturnFloat() ? t : Math.round(t)
        }
        ,
        t.prototype.nextValue = function() {
            return this.convertValue(this.min + this.range * this.random())
        }
        ,
        t
    }();
    var Ci = qt({
        randomGamma_: function(t, e, n, r, o) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = "float32"),
            null == n && (n = 1),
            null == r && (r = "float32"),
            "float32" !== r && "int32" !== r)
                throw new Error("Unsupported data type " + r);
            for (var a = new Ti(e,n,r,o), i = ue(t, r), u = 0; u < i.values.length; u++)
                i.values[u] = a.nextValue();
            return i.toTensor()
        }
    });
    var Ri = qt({
        randomNormal_: function(t, e, n, r, o) {
            if (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type " + r);
            for (var a = new _i(e,n,r,!1,o), i = ue(t, r), u = 0; u < i.values.length; u++)
                i.values[u] = a.nextValue();
            return i.toTensor()
        }
    });
    var Pi = qt({
        randomUniform_: function(t, e, n, r, o) {
            void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = "float32");
            for (var a = ue(t, r), i = new Bi(e,n,null,o), u = 0; u < a.values.length; u++)
                a.values[u] = i.nextValue();
            return a.toTensor()
        }
    });
    var qi = qt({
        relu_: function(t) {
            var e = Rt(t, "x", "relu")
              , n = {
                x: e
            };
            return Dt.runKernelFunc((function(t, n) {
                return n([e]),
                "bool" === e.dtype ? e.toInt() : t.relu(e)
            }
            ), n, null, "Relu")
        }
    });
    var zi = qt({
        relu6_: function(t) {
            var e = Rt(t, "x", "relu6")
              , n = {
                x: e
            };
            return Dt.runKernelFunc((function(t, n) {
                return n([e]),
                "bool" === e.dtype ? ce(e, "int32") : t.relu6(e)
            }
            ), n, null, "Relu6")
        }
    });
    var Li = qt({
        selu_: function(t) {
            var e = Rt(t, "x", "selu")
              , n = {
                x: e
            };
            return Dt.runKernelFunc((function(t, n) {
                var r = t.selu(e);
                return n([e]),
                r
            }
            ), n, null, "Selu")
        }
    });
    var Oi = qt({
        separableConv2d_: function(t, e, n, r, o, a, i) {
            void 0 === a && (a = [1, 1]),
            void 0 === i && (i = "NHWC");
            var u = Rt(t, "x", "separableConv2d")
              , s = Rt(e, "depthwiseFilter", "separableConv2d")
              , c = Rt(n, "pointwiseFilter", "separableConv2d")
              , l = u
              , f = !1;
            if (3 === u.rank && (f = !0,
            l = u.as4D(1, u.shape[0], u.shape[1], u.shape[2])),
            "NCHW" === i)
                throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
            w(4 === l.rank, (function() {
                return "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + "."
            }
            )),
            w(4 === s.rank, (function() {
                return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + s.rank + "."
            }
            )),
            w(4 === c.rank, (function() {
                return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + s.rank + "."
            }
            )),
            w(1 === c.shape[0], (function() {
                return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c.shape[0] + "."
            }
            )),
            w(1 === c.shape[1], (function() {
                return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c.shape[1] + "."
            }
            ));
            var p = s.shape[2]
              , h = s.shape[3];
            w(c.shape[2] === p * h, (function() {
                return "Error in separableConv2d: the third dimension of pointwise filter must be " + p * h + ", but got " + c.shape[2] + "."
            }
            ));
            var d = Ja(l, s, r, o, i, a)
              , v = Jn(d, c, 1, "valid", i);
            return f ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v
        }
    });
    var Wi = qt({
        squaredDifference_: function(t, e) {
            var n, r = Rt(t, "a", "squaredDifference"), o = Rt(e, "b", "squaredDifference");
            n = bt(r, o),
            r = n[0],
            o = n[1],
            At(r.shape, o.shape);
            var a = {
                a: r,
                b: o
            };
            return Dt.runKernelFunc((function(t, e) {
                var n = t.squaredDifference(r, o);
                return e([r, o]),
                n
            }
            ), a, null, "SquaredDifference", {})
        }
    });
    var Ki = qt({
        truncatedNormal_: function(t, e, n, r, o) {
            if (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type $ { dtype }");
            for (var a = new _i(e,n,r,!0,o), i = ue(t, r), u = 0; u < i.values.length; u++)
                i.values[u] = a.nextValue();
            return i.toTensor()
        }
    });
    function Gi(t, e, n) {
        for (var r = t.shape[n], o = [], a = 1, i = 1, u = 0; u < n; u++)
            o.push(t.shape[u]),
            a *= t.shape[u];
        for (u = 0; u < e.rank; u++)
            o.push(e.shape[u]);
        for (u = n + 1; u < t.rank; u++)
            o.push(t.shape[u]),
            i *= t.shape[u];
        return {
            batchSize: a,
            sliceSize: i,
            dimSize: r,
            outputShape: o
        }
    }
    var Ui = {
        __proto__: null,
        segOpComputeOptimalWindowSize: function(t, e) {
            var n, r = !1;
            for (t <= 30 ? (n = t,
            r = !0) : n = U(t, Math.floor(Math.sqrt(t))); !r; )
                n > e || n === t ? r = !0 : n = U(t, n + 1);
            return n
        },
        computeOutShape: function(t, e, n) {
            for (var r = [], o = t.length, a = 0; a < o; a++)
                a !== e ? r.push(t[a]) : r.push(n);
            return r
        },
        collectGatherOpShapeInfo: Gi
    };
    function Hi(t, e) {
        for (var n = [], r = t; r < e; ++r)
            n.push(r);
        return n
    }
    function Vi(t) {
        for (var e = [], n = 0; n < t.length; ++n)
            for (var r = 0; r < t[n].length; ++r)
                e.push(t[n][r]);
        return e
    }
    var ji = qt({
        gather_: function(t, e, n) {
            void 0 === n && (n = 0);
            var r = Rt(t, "x", "gather")
              , o = Rt(e, "indices", "gather", "int32");
            n = M(n, r.shape)[0];
            var a = Gi(r, o, n);
            return Dt.runKernelFunc((function(t, e) {
                var a = t.gather(r, o.flatten(), n);
                return e([o]),
                a
            }
            ), {
                x: r,
                indices: o
            }, (function(t, e) {
                var o = e[0];
                return {
                    x: function() {
                        var e = r.shape
                          , a = o.size
                          , i = e.slice(0, n)
                          , u = i.length
                          , s = e.slice(n, e.length).slice(1)
                          , c = s.length
                          , l = Hi(0, u)
                          , f = Hi(u + 1, u + 1 + c)
                          , p = Vi([i, [a], s])
                          , h = t.reshape(p)
                          , d = o.reshape([a])
                          , v = Vi([[u], l, f])
                          , m = h.transpose(v)
                          , g = $i(m, d, r.shape[n])
                          , y = Ne(v);
                        return g = g.transpose(y)
                    },
                    indices: function() {
                        return o
                    }
                }
            }
            ), "Gather", {
                axis: n
            }).reshape(a.outputShape)
        }
    })
      , $i = qt({
        unsortedSegmentSum_: function(t, e, n) {
            var r = Rt(t, "x", "unsortedSegmentSum")
              , o = Rt(e, "segmentIds", "unsortedSegmentSum", "int32");
            return w(I(n), (function() {
                return "numSegments must be of dtype int"
            }
            )),
            Dt.runKernelFunc((function(t, e) {
                var a = t.unsortedSegmentSum(r, o, n);
                return e([o]),
                a
            }
            ), {
                $x: r
            }, (function(t, e) {
                var n = e[0];
                return {
                    $x: function() {
                        return function(t, e) {
                            for (var n = ri(e, ae(e)), r = ji(t, n), o = gr(e, Vt(0, "int32")), a = r.rank - o.rank, i = 0; i < a; ++i)
                                o = le(o, i + 1);
                            o = Tr(o, te(r.shape, "bool"));
                            var u = ae(r);
                            return Pr(o, r, u)
                        }(t, n)
                    }
                }
            }
            ))
        }
    });
    var Ji = function(t, e, n) {
        return r(this, void 0, void 0, (function() {
            var r, a, i, u, s, c, l, f, p, h, d, v, m;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    for (r = Rt(t, "tensor", "boolMask"),
                    a = Rt(e, "mask", "boolMask", "bool"),
                    i = null == n ? 0 : n,
                    u = a.rank,
                    s = r.shape,
                    w(u > 0, (function() {
                        return "mask cannot be scalar"
                    }
                    )),
                    k(s.slice(i, i + u), a.shape, "mask's shape must match the first K dimensions of tensor's shape,"),
                    c = 1,
                    l = i; l < i + u; l++)
                        c *= s[l];
                    return f = s.slice(0, i).concat([c], s.slice(i + u)),
                    p = r.reshape(f),
                    h = a.reshape([-1]),
                    [4, qr(h)];
                case 1:
                    return d = o.sent(),
                    v = d.squeeze([1]),
                    m = ji(p, v, i),
                    t !== r && r.dispose(),
                    e !== a && a.dispose(),
                    v.dispose(),
                    p.dispose(),
                    h.dispose(),
                    d.dispose(),
                    [2, m]
                }
            }
            ))
        }
        ))
    };
    var Yi = qt({
        reverse_: function(t, e) {
            var n = Rt(t, "x", "reverse");
            if (0 === n.rank)
                return n.clone();
            var r = M(e, n.shape);
            return Dt.runKernelFunc((function(t) {
                return t.reverse(n, r)
            }
            ), {
                $x: n
            }, (function(t) {
                return {
                    $x: function() {
                        return t.reverse(r)
                    }
                }
            }
            )).reshapeAs(n)
        }
    })
      , Xi = qt({
        reverse1d_: function(t) {
            var e = Rt(t, "x", "reverse");
            return w(1 === e.rank, (function() {
                return "Error in reverse1D: x must be rank 1 but got rank " + e.rank + "."
            }
            )),
            Yi(e, 0)
        }
    })
      , Zi = qt({
        reverse2d_: function(t, e) {
            var n = Rt(t, "x", "reverse");
            return w(2 === n.rank, (function() {
                return "Error in reverse2D: x must be rank 2 but got rank " + n.rank + "."
            }
            )),
            Yi(n, e)
        }
    })
      , Qi = qt({
        reverse3d_: function(t, e) {
            var n = Rt(t, "x", "reverse");
            return w(3 === n.rank, (function() {
                return "Error in reverse3D: x must be rank 3 but got rank " + n.rank + "."
            }
            )),
            Yi(n, e)
        }
    })
      , tu = qt({
        reverse4d_: function(t, e) {
            var n = Rt(t, "x", "reverse");
            return w(4 === n.rank, (function() {
                return "Error in reverse4D: x must be rank 4 but got rank " + n.rank + "."
            }
            )),
            Yi(n, e)
        }
    });
    var eu = qt({
        equalStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "equalStrict")
              , r = Rt(e, "b", "equalStrict");
            return k(n.shape, r.shape, "Error in equalStrict: "),
            n.equal(r)
        }
    })
      , nu = qt({
        greaterEqualStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "greaterEqualStrict")
              , r = Rt(e, "b", "greaterEqualStrict");
            return k(n.shape, r.shape, "Error in greaterEqualStrict: "),
            n.greaterEqual(r)
        }
    })
      , ru = qt({
        greaterStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "greaterStrict")
              , r = Rt(e, "b", "greaterStrict");
            return k(n.shape, r.shape, "Error in greaterStrict: "),
            n.greater(r)
        }
    })
      , ou = qt({
        lessEqualStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "lessEqualStrict")
              , r = Rt(e, "b", "lessEqualStrict");
            return k(n.shape, r.shape, "Error in lessEqualStrict: "),
            n.lessEqual(r)
        }
    })
      , au = qt({
        lessStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "lessStrict")
              , r = Rt(e, "b", "lessStrict");
            return k(n.shape, r.shape, "Error in lessStrict: "),
            n.less(r)
        }
    })
      , iu = qt({
        notEqualStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "notEqualStrict")
              , r = Rt(e, "b", "notEqualStrict");
            return k(n.shape, r.shape, "Error in notEqualStrict: "),
            n.notEqual(r)
        }
    });
    var uu = qt({
        addStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "addStrict")
              , r = Rt(e, "b", "addStrict");
            return k(n.shape, r.shape, "Error in addStrict: "),
            n.add(r)
        }
    })
      , su = qt({
        divStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "div")
              , r = Rt(e, "b", "div");
            return k(n.shape, r.shape, "Error in divideStrict: "),
            n.div(r)
        }
    })
      , cu = qt({
        maximumStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "maximumStrict")
              , r = Rt(e, "b", "maximumStrict");
            return k(n.shape, r.shape, "Error in maximumStrict: "),
            n.maximum(r)
        }
    })
      , lu = qt({
        minimumStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "minimumStrict")
              , r = Rt(e, "b", "minimumStrict");
            return k(n.shape, r.shape, "Error in minimumStrict: "),
            n.minimum(r)
        }
    })
      , fu = qt({
        modStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "modStrict")
              , r = Rt(e, "b", "modStrict");
            return k(n.shape, r.shape, "Error in modStrict: "),
            n.mod(r)
        }
    })
      , pu = qt({
        mulStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "mul")
              , r = Rt(e, "b", "mul");
            return k(n.shape, r.shape, "Error in multiplyStrict: "),
            n.mul(r)
        }
    })
      , hu = qt({
        powStrict_: function(t, e) {
            return Da("strict variants of ops have been deprecated and will be removed in future"),
            k(t.shape, e.shape, "Error in powStrict: "),
            t.pow(e)
        }
    })
      , du = qt({
        squaredDifferenceStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "squaredDifferenceStrict")
              , r = Rt(e, "b", "squaredDifferenceStrict");
            return k(n.shape, r.shape, "Error in squaredDifferenceStrict: "),
            n.squaredDifference(r)
        }
    })
      , vu = qt({
        subStrict_: function(t, e) {
            Da("strict variants of ops have been deprecated and will be removed in future");
            var n = Rt(t, "a", "subStrict")
              , r = Rt(e, "b", "subStrict");
            return k(n.shape, r.shape, "Error in subStrict: "),
            n.sub(r)
        }
    });
    var mu = qt({
        softmax_: function(t, e) {
            void 0 === e && (e = -1);
            var n = Rt(t, "logits", "softmax", "float32");
            if (-1 === e && (e = n.rank - 1),
            e !== n.rank - 1)
                throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and dim was " + e);
            return Dt.runKernelFunc((function(t, r) {
                var o = t.softmax(n, e);
                return r([o]),
                o
            }
            ), {
                logits: n
            }, (function(t, n) {
                var r = n[0]
                  , o = t.mul(r);
                return {
                    logits: function() {
                        return o.sub(o.sum([e], !0).mul(r))
                    }
                }
            }
            ), "Softmax", {
                dim: e
            }, [], [!0])
        }
    })
      , gu = qt({
        logSoftmax_: function(t, e) {
            void 0 === e && (e = -1);
            var n = Rt(t, "logits", "logSoftmax");
            if (-1 === e && (e = n.rank - 1),
            e !== n.rank - 1)
                throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and axis was " + e);
            return we((function(t, n) {
                var r = t.max(e, !0)
                  , o = t.sub(r)
                  , a = o.toFloat().sub(o.exp().sum(e, !0).log());
                n([a]);
                return {
                    value: a,
                    gradFunc: function(t, n) {
                        var r = n[0].exp();
                        return t.sub(t.sum(e, !0).mul(r))
                    }
                }
            }
            ))(n)
        }
    });
    var yu = qt({
        norm_: function(t, e, n, r) {
            void 0 === e && (e = "euclidean"),
            void 0 === n && (n = null),
            void 0 === r && (r = !1);
            var o = function t(e, n, r) {
                void 0 === r && (r = null);
                if (0 === e.rank)
                    return e.abs();
                if (1 !== e.rank && null === r)
                    return t(e.reshape([-1]), n, r);
                if (1 === e.rank || "number" == typeof r || Array.isArray(r) && 1 === r.length) {
                    if (1 === n)
                        return e.abs().sum(r);
                    if (n === 1 / 0)
                        return e.abs().max(r);
                    if (n === -1 / 0)
                        return e.abs().min(r);
                    if ("euclidean" === n || 2 === n)
                        return e.abs().pow(Vt(2, "int32")).sum(r).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + n)
                }
                if (Array.isArray(r) && 2 === r.length) {
                    if (1 === n)
                        return e.abs().sum(r[0]).max(r[1] - 1);
                    if (n === 1 / 0)
                        return e.abs().sum(r[1]).max(r[0]);
                    if (n === -1 / 0)
                        return e.abs().sum(r[1]).min(r[0]);
                    if ("fro" === n || "euclidean" === n)
                        return e.square().sum(r).sqrt();
                    throw new Error("Error in norm: invalid ord value: " + n)
                }
                throw new Error("Error in norm: invalid axis: " + r)
            }(t = Rt(t, "x", "norm"), e, n)
              , a = o.shape;
            if (r) {
                var i = M(n, t.shape);
                a = De(o.shape, i)
            }
            return o.reshape(a)
        }
    });
    var bu = qt({
        basicLSTMCell_: function(t, e, n, r, o, a) {
            var i = Rt(t, "forgetBias", "basicLSTMCell")
              , u = Rt(e, "lstmKernel", "basicLSTMCell")
              , s = Rt(n, "lstmBias", "basicLSTMCell")
              , c = Rt(r, "data", "basicLSTMCell")
              , l = Rt(o, "c", "basicLSTMCell")
              , f = Rt(a, "h", "basicLSTMCell")
              , p = c.concat(f, 1).matMul(u).add(s)
              , h = p.shape[0]
              , d = p.shape[1] / 4
              , v = [h, d]
              , m = p.slice([0, 0], v)
              , g = p.slice([0, d], v)
              , y = p.slice([0, 2 * d], v)
              , b = p.slice([0, 3 * d], v)
              , w = m.sigmoid().mul(g.tanh()).add(l.mul(i.add(y).sigmoid()))
              , k = w.tanh().mul(b.sigmoid());
            return [w, k]
        }
    })
      , wu = qt({
        multiRNNCell_: function(t, e, n, r) {
            for (var o = Rt(e, "data", "multiRNNCell"), a = Pt(n, "c", "multiRNNCell"), i = Pt(r, "h", "multiRNNCell"), u = o, s = [], c = 0; c < t.length; c++) {
                var l = t[c](u, a[c], i[c]);
                s.push(l[0]),
                s.push(l[1]),
                u = l[1]
            }
            var f = []
              , p = [];
            for (c = 0; c < s.length; c += 2)
                f.push(s[c]),
                p.push(s[c + 1]);
            return [f, p]
        }
    });
    var ku = qt({
        movingAverage_: function(t, e, n, r, o) {
            void 0 === o && (o = !0);
            var a = Rt(t, "v", "movingAverage")
              , i = Rt(e, "x", "movingAverage")
              , u = Rt(n, "decay", "movingAverage");
            wt(a, i),
            w(D(a.shape, i.shape), (function() {
                return "Shape mismatch in v and x"
            }
            ));
            var s = Vt(1)
              , c = s.sub(u)
              , l = i.sub(a).mul(c);
            if (o) {
                w(null != r, (function() {
                    return "When using zeroDebias: true, step is required."
                }
                ));
                var f = Rt(r, "step", "movingAverage");
                l = l.div(s.sub(zr(u, f)))
            }
            return a.add(l)
        }
    });
    var xu = qt({
        stridedSlice_: function(t, e, n, r, o, a, i, u, s) {
            void 0 === o && (o = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            void 0 === u && (u = 0),
            void 0 === s && (s = 0),
            null == r && (r = new Array(e.length));
            var c = Zr(i);
            if (c.length > 1)
                throw new Error("Multiple ellipses in slice is not allowed.");
            if (0 !== i && 0 !== u)
                throw new Error("Using both ellipsisMask and newAxisMask is not yet supported.");
            if (0 !== i && 0 !== s)
                throw new Error("Using both ellipsisMask and shrinkAxisMask is not yet supported.");
            var l = Rt(t, "x", "stridedSlice")
              , f = l.rank - e.length
              , p = Zr(u)
              , h = l.shape.slice();
            p.forEach((function(t) {
                e[t] = 0,
                n[t] = 1,
                h.splice(t, 0, 1)
            }
            )),
            l = l.reshape(h);
            for (var d = 0; d < l.rank; d++)
                e[d] = oo(o, e, r, l.shape, d, i),
                n[d] = ao(a, n, r, l.shape, d, i),
                r[d] = ro(r, d, i);
            if (c.length && f > 0) {
                var v = c[0]
                  , m = f + 1;
                e = eo(e, v, m),
                n = no(n, v, m, l.shape),
                r = to(r, v, m)
            }
            var g = Zr(s);
            g.forEach((function(t) {
                n[t] = e[t] + 1,
                r[t] = 1
            }
            ));
            var y = Qr(e, n, r)
              , b = y.filter((function(t, e) {
                return -1 === g.indexOf(e)
            }
            ));
            return r.every((function(t) {
                return 1 === t
            }
            )) ? uo(l, e, y).reshape(b) : Dt.runKernelFunc((function(t) {
                return t.stridedSlice(l, e, n, r)
            }
            ), {
                $x: l
            }).reshape(b)
        }
    });
    var Eu = qt({
        topk_: function(t, e, n) {
            void 0 === e && (e = 1),
            void 0 === n && (n = !0);
            var r = Rt(t, "x", "topk");
            if (0 === r.rank)
                throw new Error("topk() expects the input to be of rank 1 or higher");
            var o = r.shape[r.shape.length - 1];
            if (e > o)
                throw new Error("'k' passed to topk() must be <= the last dimension (" + o + ") but got " + e);
            var a = Dt.runKernelFunc((function(t) {
                return t.topk(r, e, n)
            }
            ), {
                $x: r
            });
            return {
                values: a[0],
                indices: a[1]
            }
        }
    });
    var Su = qt({
        scatterND_: function(t, e, n) {
            var r = Rt(t, "indices", "scatterND", "int32")
              , o = Rt(e, "updates", "scatterND");
            return da(o, r, n),
            Dt.runKernelFunc((function(t) {
                return t.scatterND(r, o, n)
            }
            ), {
                indices: r,
                updates: o
            }, null, "ScatterNd", {
                shape: n
            })
        }
    });
    var Du = qt({
        fft_: function(t) {
            w("complex64" === t.dtype, (function() {
                return "The dtype for tf.spectral.fft() must be complex64 but got " + t.dtype + "."
            }
            ));
            var e = t.shape[t.shape.length - 1]
              , n = t.size / e
              , r = t.as2D(n, e);
            return Dt.runKernelFunc((function(t) {
                return t.fft(r)
            }
            ), {
                input: t
            }).reshape(t.shape)
        }
    })
      , Iu = qt({
        ifft_: function(t) {
            w("complex64" === t.dtype, (function() {
                return "The dtype for tf.spectral.ifft() must be complex64 but got " + t.dtype + "."
            }
            ));
            var e = t.shape[t.shape.length - 1]
              , n = t.size / e
              , r = t.as2D(n, e);
            return Dt.runKernelFunc((function(t) {
                return t.ifft(r)
            }
            ), {
                input: t
            }).reshape(t.shape)
        }
    })
      , Nu = qt({
        rfft_: function(t, e) {
            w("float32" === t.dtype, (function() {
                return "The dtype for rfft() must be real value but got " + t.dtype
            }
            ));
            var n, r = t.shape[t.shape.length - 1], o = t.size / r;
            if (null != e && e < r) {
                var a = t.shape.map((function(t) {
                    return 0
                }
                ))
                  , i = t.shape.map((function(t) {
                    return t
                }
                ));
                i[t.shape.length - 1] = e,
                n = t.slice(a, i),
                r = e
            } else if (null != e && e > r) {
                var u = t.shape.map((function(t) {
                    return t
                }
                ));
                u[t.shape.length - 1] = e - r,
                n = t.concat(ee(u), t.shape.length - 1),
                r = e
            } else
                n = t;
            var s = n.zerosLike()
              , c = Wt(n, s).as2D(o, r)
              , l = Du(c)
              , f = Math.floor(r / 2) + 1
              , p = Gt(l)
              , h = Kt(l)
              , d = p.split([f, r - f], p.shape.length - 1)
              , v = h.split([f, r - f], h.shape.length - 1)
              , m = n.shape.slice();
            return m[n.shape.length - 1] = f,
            Wt(d[0], v[0]).reshape(m)
        }
    })
      , Fu = qt({
        irfft_: function(t) {
            var e = t.shape[t.shape.length - 1]
              , n = t.size / e;
            if (e <= 2) {
                var r = t.as2D(n, e)
                  , o = Iu(r);
                return Gt(o)
            }
            var a = [n, 2 * (e - 1)]
              , i = Gt(t).as2D(n, e)
              , u = Kt(t).as2D(n, e)
              , s = i.slice([0, 1], [n, e - 2]).reverse(1)
              , c = u.slice([0, 1], [n, e - 2]).reverse(1).mul(Vt(-1))
              , l = i.concat(s, 1)
              , f = u.concat(c, 1);
            return r = Wt(l, f).as2D(a[0], a[1]),
            o = Iu(r),
            Gt(o)
        }
    })
      , Mu = {
        __proto__: null,
        fft: Du,
        ifft: Iu,
        rfft: Nu,
        irfft: Fu
    };
    var Au = qt({
        sparseToDense_: function(t, e, n, r) {
            void 0 === r && (r = 0);
            var o = Rt(t, "sparseIndices", "sparseToDense", "int32")
              , a = Rt(e, "sparseValues", "sparseToDense")
              , i = Rt(r, "defaultValue", "sparseToDense", a.dtype);
            return function(t, e, n, r) {
                if ("int32" !== t.dtype)
                    throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
                if (t.rank > 2)
                    throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t.shape + ".");
                var o = t.rank > 0 ? t.shape[0] : 1
                  , a = t.rank > 1 ? t.shape[1] : 1;
                if (n.length !== a)
                    throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + a + ".");
                var i = e.size;
                if (0 !== e.rank && (1 !== e.rank || i !== o))
                    throw new Error("sparseValues has incorrect shape " + e.shape + ", should be [] or [" + o + "]");
                if (e.dtype !== r.dtype)
                    throw new Error("sparseValues.dtype must match defaultValues.dtype")
            }(o, a, n, i),
            Dt.runKernelFunc((function(t) {
                return t.sparseToDense(o, a, n, i)
            }
            ), {
                $sparseIndices: o,
                $sparseValues: a,
                $defaultValue: i
            })
        }
    });
    var _u = qt({
        gatherND_: function(t, e) {
            var n = Rt(e, "indices", "gatherND", "int32")
              , r = Rt(t, "x", "gatherND")
              , o = {
                params: r,
                indices: n
            };
            return Dt.runKernelFunc((function(t) {
                return t.gatherND(r, n)
            }
            ), o, null, "GatherNd")
        }
    });
    var Tu = qt({
        dropout_: function(t, e, n, r) {
            var o = Rt(t, "x", "dropout");
            if (w("float32" === o.dtype, (function() {
                return "x has to be a floating point tensor since it's going to be scaled, but got a " + o.dtype + " tensor instead."
            }
            )),
            w(e >= 0 && e < 1, (function() {
                return "rate must be a float in the range [0, 1), but got " + e + "."
            }
            )),
            0 === e)
                return t instanceof lt ? o.clone() : o;
            var a = function(t, e) {
                if (null == e)
                    return t.shape.slice();
                if (D(t.shape, e))
                    return e;
                if (t.shape.length === e.length) {
                    for (var n = [], r = 0; r < t.shape.length; r++)
                        null == e[r] && null != t.shape[r] ? n.push(t.shape[r]) : n.push(e[r]);
                    return n
                }
                return e
            }(o, n)
              , i = 1 - e
              , u = Pi(a, 0, 1, "float32", r).add(i).floor().div(i);
            return o.mul(u)
        }
    });
    function Bu(t, e, n) {
        for (var r = 1 - t % 2, o = new Float32Array(t), a = 0; a < t; ++a) {
            var i = 2 * Math.PI * a / (t + r - 1);
            o[a] = e - n * Math.cos(i)
        }
        return jt(o, "float32")
    }
    var Cu = qt({
        hannWindow_: function(t) {
            return Bu(t, .5, .5)
        }
    })
      , Ru = qt({
        hammingWindow_: function(t) {
            return Bu(t, .54, .46)
        }
    })
      , Pu = qt({
        frame_: function(t, e, n, r, o) {
            void 0 === r && (r = !1),
            void 0 === o && (o = 0);
            for (var a = 0, i = []; a + e <= t.size; )
                i.push(uo(t, a, e)),
                a += n;
            if (r)
                for (; a < t.size; ) {
                    var u = a + e - t.size
                      , s = ie([uo(t, a, e - u), ni([u], o)]);
                    i.push(s),
                    a += n
                }
            return 0 === i.length ? $t([], [0, e]) : ie(i).as2D(i.length, e)
        }
    })
      , qu = qt({
        stft_: function(t, e, n, r, o) {
            var a;
            void 0 === o && (o = Cu),
            null == r && (a = e,
            r = Math.floor(Math.pow(2, Math.ceil(Math.log(a) / Math.log(2)))));
            for (var i = Pu(t, e, n), u = ye(i, o(e)), s = [], c = 0; c < i.shape[0]; c++)
                s.push(Nu(u.slice([c, 0], [1, e]), r));
            return ie(s)
        }
    })
      , zu = {
        __proto__: null,
        hannWindow: Cu,
        hammingWindow: Ru,
        frame: Pu,
        stft: qu
    };
    var Lu, Ou = function(t, e, n) {
        return void 0 === n && (n = 1),
        r(this, void 0, void 0, (function() {
            var r, a, i, u, s, c, l, f, p, h, d, v, m, g;
            return o(this, (function(o) {
                switch (o.label) {
                case 0:
                    return r = Rt(t, "predictions", "inTopK"),
                    a = Rt(e, "targets", "inTopK"),
                    w(r.rank > 1, (function() {
                        return "inTopK() expects the predictions to be of rank 2 or higher, but got " + r.rank
                    }
                    )),
                    w(r.rank - 1 === a.rank, (function() {
                        return "predictions rank should be 1 larger than targets rank, but got predictions rank " + r.rank + " and targets rank " + a.rank
                    }
                    )),
                    k(r.shape.slice(0, r.shape.length - 1), a.shape, "predictions's shape should be align with the targets' shape, except the last dimension."),
                    i = r.shape[r.shape.length - 1],
                    w(n > 0 && n <= i, (function() {
                        return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + i + "), but got " + n
                    }
                    )),
                    [4, r.data()];
                case 1:
                    return u = o.sent(),
                    [4, a.data()];
                case 2:
                    for (s = o.sent(),
                    c = [u.length / i, i],
                    f = c[1],
                    p = _("bool", l = c[0]),
                    h = 0; h < l; h++) {
                        for (d = h * f,
                        v = u.subarray(d, d + f),
                        m = [],
                        g = 0; g < v.length; g++)
                            m.push({
                                value: v[g],
                                index: g
                            });
                        for (m.sort((function(t, e) {
                            return e.value - t.value
                        }
                        )),
                        p[h] = 0,
                        g = 0; g < n; g++)
                            if (m[g].index === s[h]) {
                                p[h] = 1;
                                break
                            }
                    }
                    return t !== r && r.dispose(),
                    e !== a && a.dispose(),
                    [2, Ut(p, a.shape, "bool")]
                }
            }
            ))
        }
        ))
    };
    (Lu = t.Reduction || (t.Reduction = {}))[Lu.NONE = 0] = "NONE",
    Lu[Lu.MEAN = 1] = "MEAN",
    Lu[Lu.SUM = 2] = "SUM",
    Lu[Lu.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
    var Wu = qt({
        absoluteDifference_: function(e, n, r, o) {
            void 0 === o && (o = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var a = Rt(e, "labels", "absoluteDifference")
              , i = Rt(n, "predictions", "absoluteDifference")
              , u = null;
            null != r && (u = Rt(r, "weights", "absoluteDifference")),
            k(a.shape, i.shape, "Error in absoluteDifference: ");
            var s = a.sub(i).abs();
            return Ku(s, u, o)
        }
    })
      , Ku = qt({
        computeWeightedLoss_: function(e, n, r) {
            void 0 === r && (r = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = Rt(e, "losses", "computeWeightedLoss")
              , a = null;
            null != n && (a = Rt(n, "weights", "computeWeightedLoss"));
            var i = null == a ? o : o.mul(a);
            if (r === t.Reduction.NONE)
                return i;
            if (r === t.Reduction.SUM)
                return i.sum();
            if (r === t.Reduction.MEAN) {
                if (null == a)
                    return i.mean();
                var u = o.size / a.size
                  , s = i.sum().div(a.sum());
                return u > 1 ? s.div(Vt(u)) : s
            }
            if (r === t.Reduction.SUM_BY_NONZERO_WEIGHTS) {
                if (null == a)
                    return i.sum().div(Vt(o.size));
                var c = a.mul(te(o.shape)).notEqual(Vt(0)).sum().toFloat();
                return i.sum().div(c)
            }
            throw Error("Unknown reduction: " + r)
        }
    })
      , Gu = qt({
        cosineDistance_: function(e, n, r, o, a) {
            void 0 === a && (a = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = Rt(e, "labels", "cosineDistance")
              , u = Rt(n, "predictions", "cosineDistance")
              , s = null;
            null != o && (s = Rt(o, "weights", "cosineDistance")),
            k(i.shape, u.shape, "Error in cosineDistance: ");
            var c = Vt(1).sub(i.mul(u).sum(r, !0));
            return Ku(c, s, a)
        }
    })
      , Uu = qt({
        hingeLoss_: function(e, n, r, o) {
            void 0 === o && (o = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var a = Rt(e, "labels", "hingeLoss")
              , i = Rt(n, "predictions", "hingeLoss")
              , u = null;
            null != r && (u = Rt(r, "weights", "hingeLoss")),
            k(a.shape, i.shape, "Error in hingeLoss: ");
            var s = Vt(1);
            a = Vt(2).mul(a).sub(s);
            var c = s.sub(a.mul(i)).relu();
            return Ku(c, u, o)
        }
    })
      , Hu = qt({
        huberLoss_: function(e, n, r, o, a) {
            void 0 === o && (o = 1),
            void 0 === a && (a = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = Rt(e, "labels", "huberLoss")
              , u = Rt(n, "predictions", "huberLoss")
              , s = null;
            null != r && (s = Rt(r, "weights", "huberLoss")),
            k(i.shape, u.shape, "Error in huberLoss: ");
            var c = Vt(o)
              , l = u.sub(i).abs()
              , f = li(l, c)
              , p = l.sub(f)
              , h = Vt(.5).mul(f.square()).add(c.mul(p));
            return Ku(h, s, a)
        }
    })
      , Vu = qt({
        logLoss_: function(e, n, r, o, a) {
            void 0 === o && (o = 1e-7),
            void 0 === a && (a = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = Rt(e, "labels", "logLoss")
              , u = Rt(n, "predictions", "logLoss")
              , s = null;
            null != r && (s = Rt(r, "weights", "logLoss")),
            k(i.shape, u.shape, "Error in logLoss: ");
            var c = Vt(1)
              , l = Vt(o)
              , f = i.mul(u.add(l).log()).neg().sub(c.sub(i).mul(c.sub(u).add(l).log()));
            return Ku(f, s, a)
        }
    })
      , ju = qt({
        meanSquaredError_: function(e, n, r, o) {
            void 0 === o && (o = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var a = Rt(e, "labels", "meanSquaredError")
              , i = Rt(n, "predictions", "meanSquaredError")
              , u = null;
            null != r && (u = Rt(r, "weights", "meanSquaredError")),
            k(a.shape, i.shape, "Error in meanSquaredError: ");
            var s = a.squaredDifference(i);
            return Ku(s, u, o)
        }
    })
      , $u = qt({
        sigmoidCrossEntropy_: function(e, n, r, o, a) {
            void 0 === o && (o = 0),
            void 0 === a && (a = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = Rt(e, "multiClassLabels", "sigmoidCrossEntropy")
              , u = Rt(n, "logits", "sigmoidCrossEntropy")
              , s = null;
            if (null != r && (s = Rt(r, "weights", "sigmoidCrossEntropy")),
            k(i.shape, u.shape, "Error in sigmoidCrossEntropy: "),
            o > 0) {
                var c = Vt(o)
                  , l = Vt(1)
                  , f = Vt(.5);
                i = i.mul(l.sub(c)).add(f.mul(c))
            }
            var p = function(t, e) {
                var n = Rt(t, "labels", "sigmoidCrossEntropyWithLogits")
                  , r = Rt(e, "logits", "sigmoidCrossEntropyWithLogits");
                k(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
                var o = r.relu()
                  , a = r.mul(n)
                  , i = r.abs().neg().exp().log1p();
                return o.sub(a).add(i)
            }(i, u);
            return Ku(p, s, a)
        }
    })
      , Ju = qt({
        softmaxCrossEntropy_: function(e, n, r, o, a) {
            void 0 === o && (o = 0),
            void 0 === a && (a = t.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = Rt(e, "onehotLabels", "softmaxCrossEntropy")
              , u = Rt(n, "logits", "softmaxCrossEntropy")
              , s = null;
            if (null != r && (s = Rt(r, "weights", "softmaxCrossEntropy")),
            k(i.shape, u.shape, "Error in softmaxCrossEntropy: "),
            o > 0) {
                var c = Vt(o)
                  , l = Vt(1)
                  , f = Vt(i.shape[1]);
                i = i.mul(l.sub(c)).add(c.div(f))
            }
            var p = function(t, e, n) {
                if (void 0 === n && (n = -1),
                -1 === n && (n = e.rank - 1),
                n !== e.rank - 1)
                    throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e.rank + " and dim was " + n);
                return we((function(t, e, r) {
                    var o = e.logSumExp([n], !0)
                      , a = e.toFloat().sub(o);
                    r([t, a]);
                    return {
                        value: a.mul(t).neg().sum([n]),
                        gradFunc: function(t, e) {
                            var r = e[0]
                              , o = e[1]
                              , a = De(t.shape, [n]);
                            return [t.reshape(a).mul(r.toFloat().sub(o.exp())), t.reshape(a).mul(o.exp().sub(r.toFloat()))]
                        }
                    }
                }
                ))(t, e)
            }(i, u);
            return Ku(p, s, a)
        }
    })
      , Yu = {
        __proto__: null,
        get Reduction() {
            return t.Reduction
        },
        absoluteDifference: Wu,
        computeWeightedLoss: Ku,
        cosineDistance: Gu,
        hingeLoss: Uu,
        huberLoss: Hu,
        logLoss: Vu,
        meanSquaredError: ju,
        sigmoidCrossEntropy: $u,
        softmaxCrossEntropy: Ju
    };
    function Xu(t, e) {
        return void 0 === e && (e = !1),
        Dt.tidy((function() {
            if (2 !== t.shape.length)
                throw new Error("qr2d() requires a 2D Tensor, but got a " + t.shape.length + "D Tensor.");
            for (var n = t.shape[0], r = t.shape[1], o = ei(n), a = t.clone(), i = $t([[1]], [1, 1]), u = i.clone(), s = n >= r ? r : n, c = function(t) {
                var e, s = a, c = u, l = o;
                e = Dt.tidy((function() {
                    var e = a.slice([t, t], [n - t, 1])
                      , s = e.norm()
                      , c = a.slice([t, t], [1, 1])
                      , l = $t([[-1]]).where(c.greater(0), $t([[1]]))
                      , f = c.sub(l.mul(s))
                      , p = e.div(f);
                    u = 1 === p.shape[0] ? i.clone() : i.concat(p.slice([1, 0], [p.shape[0] - 1, p.shape[1]]), 0);
                    var h = l.matMul(f).div(s).neg()
                      , d = a.slice([t, 0], [n - t, r])
                      , v = h.mul(u)
                      , m = u.transpose();
                    if (0 === t)
                        a = d.sub(v.matMul(m.matMul(d)));
                    else {
                        var g = d.sub(v.matMul(m.matMul(d)));
                        a = a.slice([0, 0], [t, r]).concat(g, 0)
                    }
                    var y = v.transpose()
                      , b = o.slice([0, t], [n, o.shape[1] - t]);
                    if (0 === t)
                        o = b.sub(b.matMul(u).matMul(y));
                    else {
                        var w = b.sub(b.matMul(u).matMul(y));
                        o = o.slice([0, 0], [n, t]).concat(w, 1)
                    }
                    return [u, a, o]
                }
                )),
                u = e[0],
                a = e[1],
                o = e[2],
                Na([s, c, l])
            }, l = 0; l < s; ++l)
                c(l);
            return !e && n > r && (o = o.slice([0, 0], [n, r]),
            a = a.slice([0, 0], [r, r])),
            [o, a]
        }
        ))
    }
    var Zu = {
        __proto__: null,
        bandPart: qt({
            bandPart_: function(t, e, n) {
                if (e % 1 != 0)
                    throw new Error("bandPart(): numLower must be an integer, got " + e + ".");
                if (n % 1 != 0)
                    throw new Error("bandPart(): numUpper must be an integer, got " + n + ".");
                var r = Rt(t, "a", "bandPart");
                if (r.rank < 2)
                    throw new Error("bandPart(): Rank must be at least 2, got " + r.rank + ".");
                var o = r.shape
                  , a = r.shape.slice(-2)
                  , i = a[0]
                  , u = a[1];
                if (!(e <= i))
                    throw new Error("bandPart(): numLower (" + e + ") must not be greater than the number of rows (" + i + ").");
                if (!(n <= u))
                    throw new Error("bandPart(): numUpper (" + n + ") must not be greater than the number of columns (" + u + ").");
                e < 0 && (e = i),
                n < 0 && (n = u);
                var s = re(0, i, 1, "int32").reshape([-1, 1])
                  , c = re(0, u, 1, "int32")
                  , l = cr(s, c)
                  , f = Tr(l.lessEqual(Vt(+e, "int32")), l.greaterEqual(Vt(-n, "int32")))
                  , p = ee([i, u], r.dtype);
                return he(de(r.reshape([-1, i, u])).map((function(t) {
                    return Pr(f, t, p)
                }
                ))).reshape(o)
            }
        }),
        gramSchmidt: qt({
            gramSchmidt_: function(t) {
                var e;
                if (Array.isArray(t)) {
                    e = !1,
                    w(null != t && t.length > 0, (function() {
                        return "Gram-Schmidt process: input must not be null, undefined, or empty"
                    }
                    ));
                    for (var n = t[0].shape[0], r = function(e) {
                        w(t[e].shape[0] === n, (function() {
                            return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + t[e].shape[0] + " vs. " + n + ")"
                        }
                        ))
                    }, o = 1; o < t.length; ++o)
                        r(o)
                } else
                    e = !0,
                    t = Un(t, t.shape[0], 0).map((function(t) {
                        return pe(t, [0])
                    }
                    ));
                w(t.length <= t[0].shape[0], (function() {
                    return "Gram-Schmidt: Number of vectors (" + t.length + ") exceeds number of dimensions (" + t[0].shape[0] + ")."
                }
                ));
                var a = []
                  , i = t
                  , u = function(t) {
                    a.push(Dt.tidy((function() {
                        var e = i[t];
                        if (t > 0)
                            for (var n = 0; n < t; ++n) {
                                var r = ze(a[n].mul(e)).mul(a[n]);
                                e = e.sub(r)
                            }
                        return e.div(yu(e, "euclidean"))
                    }
                    )))
                };
                for (o = 0; o < t.length; ++o)
                    u(o);
                return e ? he(a, 0) : a
            }
        }),
        qr: qt({
            qr_: function(t, e) {
                if (void 0 === e && (e = !1),
                t.rank < 2)
                    throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t.rank);
                if (2 === t.rank)
                    return Xu(t, e);
                var n = t.shape.slice(0, t.shape.length - 2).reduce((function(t, e) {
                    return t * e
                }
                ))
                  , r = de(t.reshape([n, t.shape[t.shape.length - 2], t.shape[t.shape.length - 1]]), 0)
                  , o = []
                  , a = [];
                return r.forEach((function(t) {
                    var n = Xu(t, e)
                      , r = n[0]
                      , i = n[1];
                    o.push(r),
                    a.push(i)
                }
                )),
                [he(o, 0).reshape(t.shape), he(a, 0).reshape(t.shape)]
            }
        })
    };
    function Qu(t, e, n) {
        var r = function(t, e, n) {
            return function(t, e, n) {
                var r = 0
                  , o = t.length
                  , a = 0
                  , i = !1;
                for (; r < o; ) {
                    var u = n(e, t[a = r + (o - r >>> 1)]);
                    u > 0 ? r = a + 1 : (o = a,
                    i = !u)
                }
                return i ? r : -r - 1
            }(t, e, n || ts)
        }(t, e, n)
          , o = r < 0 ? -(r + 1) : r;
        t.splice(o, 0, e)
    }
    function ts(t, e) {
        return t > e ? 1 : t < e ? -1 : 0
    }
    function es(t, e, n, r, o) {
        var a = rs(t, e, n, r, o, 0);
        return a.selectedScores.dispose(),
        a.numValidOutputs.dispose(),
        a.selectedIndices
    }
    function ns(t, e, n, r, o, a) {
        var i = rs(t, e, n, r, o, a);
        return i.numValidOutputs.dispose(),
        {
            selectedIndices: i.selectedIndices,
            selectedScores: i.selectedScores
        }
    }
    function rs(t, e, n, r, o, a, i, u) {
        void 0 === u && (u = !1);
        for (var s = [], c = 0; c < e.length; c++)
            e[c] > o && s.push({
                score: e[c],
                boxIndex: c,
                suppressBeginIndex: 0
            });
        s.sort(is);
        for (var l = a > 0 ? -.5 / a : 0, f = [], p = []; f.length < n && s.length > 0; ) {
            var h = s.pop()
              , d = h.score
              , v = h.boxIndex
              , m = h.suppressBeginIndex;
            if (d < o)
                break;
            for (var g = !1, y = f.length - 1; y >= m; --y) {
                var b = os(t, v, f[y]);
                if (b >= r) {
                    g = !0;
                    break
                }
                if (h.score = h.score * as(r, l, b),
                h.score <= o)
                    break
            }
            h.suppressBeginIndex = f.length,
            g || (h.score === d ? (f.push(v),
            p.push(h.score)) : h.score > o && Qu(s, h, is))
        }
        var w = f.length;
        return u && (f.fill(0, w),
        p.fill(0, w)),
        {
            selectedIndices: jt(f, "int32"),
            selectedScores: jt(p, "float32"),
            numValidOutputs: Vt(w, "int32")
        }
    }
    function os(t, e, n) {
        var r = t.subarray(4 * e, 4 * e + 4)
          , o = t.subarray(4 * n, 4 * n + 4)
          , a = Math.min(r[0], r[2])
          , i = Math.min(r[1], r[3])
          , u = Math.max(r[0], r[2])
          , s = Math.max(r[1], r[3])
          , c = Math.min(o[0], o[2])
          , l = Math.min(o[1], o[3])
          , f = Math.max(o[0], o[2])
          , p = Math.max(o[1], o[3])
          , h = (u - a) * (s - i)
          , d = (f - c) * (p - l);
        if (h <= 0 || d <= 0)
            return 0;
        var v = Math.max(a, c)
          , m = Math.max(i, l)
          , g = Math.min(u, f)
          , y = Math.min(s, p)
          , b = Math.max(g - v, 0) * Math.max(y - m, 0);
        return b / (h + d - b)
    }
    function as(t, e, n) {
        var r = Math.exp(e * n * n);
        return n <= t ? r : 0
    }
    function is(t, e) {
        return t.score - e.score || t.score === e.score && e.boxIndex - t.boxIndex
    }
    function us(t, e, n, r, o, a) {
        null == r && (r = .5),
        null == o && (o = Number.NEGATIVE_INFINITY),
        null == a && (a = 0);
        var i = t.shape[0];
        return n = Math.min(n, i),
        w(0 <= r && r <= 1, (function() {
            return "iouThreshold must be in [0, 1], but was '" + r + "'"
        }
        )),
        w(2 === t.rank, (function() {
            return "boxes must be a 2D tensor, but was of rank '" + t.rank + "'"
        }
        )),
        w(4 === t.shape[1], (function() {
            return "boxes must have 4 columns, but 2nd dimension was " + t.shape[1]
        }
        )),
        w(1 === e.rank, (function() {
            return "scores must be a 1D tensor"
        }
        )),
        w(e.shape[0] === i, (function() {
            return "scores has incompatible shape with boxes. Expected " + i + ", but was " + e.shape[0]
        }
        )),
        w(0 <= a && a <= 1, (function() {
            return "softNmsSigma must be in [0, 1], but was '" + a + "'"
        }
        )),
        {
            maxOutputSize: n,
            iouThreshold: r,
            scoreThreshold: o,
            softNmsSigma: a
        }
    }
    var ss = qt({
        nonMaxSuppression_: function(t, e, n, r, o) {
            void 0 === r && (r = .5),
            void 0 === o && (o = Number.NEGATIVE_INFINITY);
            var a = Rt(t, "boxes", "nonMaxSuppression")
              , i = Rt(e, "scores", "nonMaxSuppression")
              , u = us(a, i, n, r, o);
            n = u.maxOutputSize,
            r = u.iouThreshold,
            o = u.scoreThreshold;
            var s = {
                maxOutputSize: n,
                iouThreshold: r,
                scoreThreshold: o
            };
            return Dt.runKernelFunc((function(t) {
                return t.nonMaxSuppression(a, i, n, r, o)
            }
            ), {
                boxes: a,
                scores: i
            }, null, "NonMaxSuppressionV3", s)
        }
    });
    var cs = {
        __proto__: null,
        resizeBilinear: qt({
            resizeBilinear_: function(t, e, n) {
                void 0 === n && (n = !1);
                var r = Rt(t, "images", "resizeBilinear");
                w(3 === r.rank || 4 === r.rank, (function() {
                    return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + r.rank + "."
                }
                )),
                w(2 === e.length, (function() {
                    return "Error in resizeBilinear: new shape must 2D, but got shape " + e + "."
                }
                ));
                var o = r
                  , a = !1;
                3 === r.rank && (a = !0,
                o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
                var i = e[0]
                  , u = e[1]
                  , s = Dt.runKernelFunc((function(t, e) {
                    return e([o]),
                    t.resizeBilinear(o, i, u, n)
                }
                ), {
                    x: o
                }, (function(t, e) {
                    return {
                        x: function() {
                            return Dt.runKernelFunc((function(r) {
                                return r.resizeBilinearBackprop(t, e[0], n)
                            }
                            ), {})
                        }
                    }
                }
                ), "ResizeBilinear", {
                    alignCorners: n,
                    newHeight: i,
                    newWidth: u
                });
                return a ? s.as3D(s.shape[1], s.shape[2], s.shape[3]) : s
            }
        }),
        resizeNearestNeighbor: qt({
            resizeNearestNeighbor_: function(t, e, n) {
                void 0 === n && (n = !1);
                var r = Rt(t, "images", "resizeNearestNeighbor");
                w(3 === r.rank || 4 === r.rank, (function() {
                    return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + r.rank + "."
                }
                )),
                w(2 === e.length, (function() {
                    return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e + "."
                }
                )),
                w("float32" === r.dtype || "int32" === r.dtype, (function() {
                    return "`images` must have `int32` or `float32` as dtype"
                }
                ));
                var o = r
                  , a = !1;
                3 === r.rank && (a = !0,
                o = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]));
                var i = e[0]
                  , u = e[1]
                  , s = Dt.runKernelFunc((function(t, e) {
                    return e([o]),
                    t.resizeNearestNeighbor(o, i, u, n)
                }
                ), {
                    batchImages: o
                }, (function(t, e) {
                    return {
                        batchImages: function() {
                            return Dt.runKernelFunc((function(r) {
                                return r.resizeNearestNeighborBackprop(t, e[0], n)
                            }
                            ), {})
                        }
                    }
                }
                ));
                return a ? s.as3D(s.shape[1], s.shape[2], s.shape[3]) : s
            }
        }),
        nonMaxSuppressionAsync: function(t, e, n, a, i) {
            return void 0 === a && (a = .5),
            void 0 === i && (i = Number.NEGATIVE_INFINITY),
            r(this, void 0, void 0, (function() {
                var r, u, s, c, l, f, p;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return r = Rt(t, "boxes", "nonMaxSuppressionAsync"),
                        u = Rt(e, "scores", "nonMaxSuppressionAsync"),
                        s = us(r, u, n, a, i),
                        n = s.maxOutputSize,
                        a = s.iouThreshold,
                        i = s.scoreThreshold,
                        [4, Promise.all([r.data(), u.data()])];
                    case 1:
                        return c = o.sent(),
                        l = c[0],
                        f = c[1],
                        p = es(l, f, n, a, i),
                        r !== t && r.dispose(),
                        u !== e && u.dispose(),
                        [2, p]
                    }
                }
                ))
            }
            ))
        },
        nonMaxSuppressionWithScore: qt({
            nonMaxSuppressionWithScore_: function(t, e, n, r, o, a) {
                void 0 === r && (r = .5),
                void 0 === o && (o = Number.NEGATIVE_INFINITY),
                void 0 === a && (a = 0);
                var i = Rt(t, "boxes", "nonMaxSuppression")
                  , u = Rt(e, "scores", "nonMaxSuppression")
                  , s = us(i, u, n, r, o, a)
                  , c = {
                    maxOutputSize: n = s.maxOutputSize,
                    iouThreshold: r = s.iouThreshold,
                    scoreThreshold: o = s.scoreThreshold,
                    softNmsSigma: a = s.softNmsSigma
                }
                  , l = Dt.runKernel("NonMaxSuppressionV5", {
                    boxes: i,
                    scores: u
                }, c);
                return {
                    selectedIndices: l[0],
                    selectedScores: l[1]
                }
            }
        }),
        nonMaxSuppressionWithScoreAsync: function(t, e, n, a, i, u) {
            return void 0 === a && (a = .5),
            void 0 === i && (i = Number.NEGATIVE_INFINITY),
            void 0 === u && (u = 0),
            r(this, void 0, void 0, (function() {
                var r, s, c, l, f, p, h;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return r = Rt(t, "boxes", "nonMaxSuppressionAsync"),
                        s = Rt(e, "scores", "nonMaxSuppressionAsync"),
                        c = us(r, s, n, a, i, u),
                        n = c.maxOutputSize,
                        a = c.iouThreshold,
                        i = c.scoreThreshold,
                        u = c.softNmsSigma,
                        [4, Promise.all([r.data(), s.data()])];
                    case 1:
                        return l = o.sent(),
                        f = l[0],
                        p = l[1],
                        h = ns(f, p, n, a, i, u),
                        r !== t && r.dispose(),
                        s !== e && s.dispose(),
                        [2, h]
                    }
                }
                ))
            }
            ))
        },
        cropAndResize: qt({
            cropAndResize_: function(t, e, n, r, o, a) {
                var i = Rt(t, "image", "cropAndResize")
                  , u = Rt(e, "boxes", "cropAndResize", "float32")
                  , s = Rt(n, "boxInd", "cropAndResize", "int32");
                o = o || "bilinear",
                a = a || 0;
                var c = u.shape[0];
                return w(4 === i.rank, (function() {
                    return "Error in cropAndResize: image must be rank 4,but got rank " + i.rank + "."
                }
                )),
                w(2 === u.rank && 4 === u.shape[1], (function() {
                    return "Error in cropAndResize: boxes must be have size [" + c + ",4] but had shape " + u.shape + "."
                }
                )),
                w(1 === s.rank && s.shape[0] === c, (function() {
                    return "Error in cropAndResize: boxInd must be have size [" + c + "] but had shape " + u.shape + "."
                }
                )),
                w(2 === r.length, (function() {
                    return "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."
                }
                )),
                w(r[0] >= 1 && r[1] >= 1, (function() {
                    return "cropSize must be atleast [1,1], but was " + r
                }
                )),
                w("bilinear" === o || "nearest" === o, (function() {
                    return "method must be bilinear or nearest, but was " + o
                }
                )),
                Dt.runKernelFunc((function(t, e) {
                    return t.cropAndResize(i, u, s, r, o, a)
                }
                ), {
                    images: i,
                    boxes: u,
                    boxInd: s
                }, null, "CropAndResize", {
                    method: o,
                    extrapolationValue: a,
                    cropSize: r
                })
            }
        }),
        nonMaxSuppression: ss
    }
      , ls = function(t, e) {
        return !(t > 0) || "linear" === e
    }
      , fs = function(t, e, n) {
        if (null == n || "linear" === n)
            return t;
        if ("relu" === n)
            return t.mul(e.step());
        throw new Error("Gradient for activation " + n + " has not been implemented yet.")
    }
      , ps = function(t, e) {
        var n = e
          , r = Mt(t.shape, e.shape);
        return r.length > 0 && (n = n.sum(r)),
        n.reshape(t.shape)
    }
      , hs = function(t, e, n) {
        if ("linear" === e)
            return t;
        if ("relu" === e)
            return qi(t);
        if ("elu" === e)
            return Qa(t);
        if ("relu6" === e)
            return zi(t);
        if ("prelu" === e)
            return wi(t, n);
        throw new Error("Unknown fused activation " + e + ".")
    };
    var ds = {
        __proto__: null,
        matMul: qt({
            fusedMatMul_: function(t) {
                var e, n = t.a, r = t.b, o = t.transposeA, a = void 0 !== o && o, i = t.transposeB, u = void 0 !== i && i, s = t.bias, c = t.activation, l = void 0 === c ? "linear" : c, f = t.preluActivationWeights;
                if (!1 === ls(Dt.state.gradientDepth, l)) {
                    var p = Ln(n, r, a, u);
                    return null != s && (p = zt(p, s)),
                    hs(p, l, f)
                }
                var h = Rt(n, "a", "fused matMul")
                  , d = Rt(r, "b", "fused matMul");
                e = bt(h, d),
                h = e[0],
                d = e[1];
                var v = a ? h.shape[h.rank - 2] : h.shape[h.rank - 1]
                  , m = u ? d.shape[d.rank - 1] : d.shape[d.rank - 2]
                  , g = a ? h.shape[h.rank - 1] : h.shape[h.rank - 2]
                  , y = u ? d.shape[d.rank - 2] : d.shape[d.rank - 1]
                  , b = h.shape.slice(0, -2)
                  , k = d.shape.slice(0, -2)
                  , x = S(b)
                  , E = S(k);
                w(h.rank >= 2 && d.rank >= 2 && h.rank === d.rank, (function() {
                    return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + h.rank + " and " + d.rank + "."
                }
                )),
                w(D(b, k), (function() {
                    return "Error in fused matMul: outer dimensions (" + b + ") and (" + k + ") of Tensors with shapes " + h.shape + " and " + d.shape + " must match."
                }
                )),
                w(v === m, (function() {
                    return "Error in fused matMul: inner shapes (" + v + ") and (" + m + ") of Tensors with shapes " + h.shape + " and " + d.shape + " and transposeA=" + a + " and transposeB=" + u + " must match."
                }
                ));
                var I, N, F = h.shape.slice(0, -2).concat([g, y]), M = a ? h.as3D(x, v, g) : h.as3D(x, g, v), A = u ? d.as3D(E, y, m) : d.as3D(E, m, y);
                null != s && At(F, (I = bt(I = Rt(s, "bias", "fused matMul"), h)[0]).shape),
                null != f && (N = Rt(f, "prelu weights", "fused matMul"));
                var _ = {
                    a: M,
                    b: A
                };
                null != s && (_.bias = I),
                null != f && (_.preluActivationWeights = N);
                var T = [M, A];
                return Dt.runKernelFunc((function(t, e) {
                    var n = t.fusedBatchMatMul({
                        a: M,
                        b: A,
                        transposeA: a,
                        transposeB: u,
                        bias: I,
                        activation: l,
                        preluActivationWeights: N
                    });
                    return e([M, A, n]),
                    n
                }
                ), _, (function(t, e) {
                    var n = e[0]
                      , r = e[1]
                      , o = e[2]
                      , i = fs(t, o, l)
                      , c = {};
                    return null != s && (c = {
                        bias: function() {
                            return ps(I, i)
                        }
                    }),
                    a || u ? !a && u ? Object.assign({
                        a: function() {
                            return i.matMul(r, !1, !1)
                        },
                        b: function() {
                            return i.matMul(n, !0, !1)
                        }
                    }, c) : a && !u ? Object.assign({
                        a: function() {
                            return r.matMul(i, !1, !0)
                        },
                        b: function() {
                            return n.matMul(i, !1, !1)
                        }
                    }, c) : Object.assign({
                        a: function() {
                            return r.matMul(i, !0, !0)
                        },
                        b: function() {
                            return i.matMul(n, !0, !0)
                        }
                    }, c) : Object.assign({
                        a: function() {
                            return i.matMul(r, !1, !0)
                        },
                        b: function() {
                            return n.matMul(i, !0, !1)
                        }
                    }, c)
                }
                ), "_FusedMatMul", {
                    transposeA: a,
                    transposeB: u,
                    activation: l
                }, T, [!0]).reshape(F)
            }
        }),
        conv2d: qt({
            fusedConv2d_: function(t) {
                var e = t.x
                  , n = t.filter
                  , r = t.strides
                  , o = t.pad
                  , a = t.dataFormat
                  , i = void 0 === a ? "NHWC" : a
                  , u = t.dilations
                  , s = void 0 === u ? [1, 1] : u
                  , c = t.dimRoundingMode
                  , l = t.bias
                  , f = t.activation
                  , p = void 0 === f ? "linear" : f
                  , h = t.preluActivationWeights;
                if (p = p || "linear",
                !1 === ls(Dt.state.gradientDepth, p)) {
                    var d = Jn(e, n, r, o, i, s, c);
                    return null != l && (d = zt(d, l)),
                    hs(d, p, h)
                }
                var v = Rt(e, "x", "conv2d")
                  , m = Rt(n, "filter", "conv2d")
                  , g = v
                  , y = !1;
                3 === v.rank && (y = !0,
                g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])),
                w(4 === g.rank, (function() {
                    return "Error in fused conv2d: input must be rank 4, but got rank " + g.rank + "."
                }
                )),
                w(4 === m.rank, (function() {
                    return "Error in fused conv2d: filter must be rank 4, but got rank " + m.rank + "."
                }
                )),
                null != c && w(I(o), (function() {
                    return "Error in fused conv2d: pad must be an integer when using, dimRoundingMode " + c + " but got pad " + o + "."
                }
                )),
                w(g.shape[3] === m.shape[2], (function() {
                    return "Error in conv2d: depth of input (" + g.shape[3] + ") must match input depth for filter " + m.shape[2] + "."
                }
                )),
                w(Bn(r, s), (function() {
                    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + s + "'"
                }
                )),
                w("NHWC" === i, (function() {
                    return "Error in conv2d: got dataFormat of " + i + " but only NHWC is currently supported."
                }
                ));
                var b, k, x = Dn(g.shape, m.shape, r, s, o, c);
                null != l && (b = bt(b = Rt(l, "bias", "fused conv2d"), v)[0],
                At(x.outShape, b.shape)),
                null != h && (k = Rt(h, "prelu weights", "fused conv2d"));
                var E = {
                    x: g,
                    filter: m
                };
                null != l && (E.bias = b),
                null != h && (E.preluActivationWeights = k);
                var S = [m, g]
                  , D = Dt.runKernelFunc((function(t, e) {
                    var n = t.fusedConv2d({
                        input: g,
                        filter: m,
                        convInfo: x,
                        bias: b,
                        activation: p,
                        preluActivationWeights: k
                    });
                    return e([m, g, n]),
                    n
                }
                ), E, (function(t, e) {
                    var n = e
                      , a = n[0]
                      , i = n[1]
                      , u = n[2]
                      , c = fs(t, u, p);
                    w(Tn(s), (function() {
                        return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + s + "'"
                    }
                    ));
                    var f = {};
                    return null != l && (f = {
                        bias: function() {
                            return ps(b, c)
                        }
                    }),
                    Object.assign({
                        x: function() {
                            return jn(i.shape, c, a, r, o)
                        },
                        filter: function() {
                            return Vn(i, c, a.shape, r, o)
                        }
                    }, f)
                }
                ), "FusedConv2D", {
                    convInfo: x,
                    activation: p
                }, S, [!0]);
                return y ? D.as3D(D.shape[1], D.shape[2], D.shape[3]) : D
            }
        }),
        depthwiseConv2d: qt({
            fusedDepthwiseConv2d_: function(t) {
                var e = t.x
                  , n = t.filter
                  , r = t.strides
                  , o = t.pad
                  , a = t.dataFormat
                  , i = void 0 === a ? "NHWC" : a
                  , u = t.dilations
                  , s = void 0 === u ? [1, 1] : u
                  , c = t.dimRoundingMode
                  , l = t.bias
                  , f = t.activation
                  , p = void 0 === f ? "linear" : f
                  , h = t.preluActivationWeights;
                if (!1 === ls(Dt.state.gradientDepth, p)) {
                    var d = Ja(e, n, r, o, i, s, c);
                    return null != l && (d = zt(d, l)),
                    hs(d, p, h)
                }
                var v = Rt(e, "x", "depthwiseConv2d")
                  , m = Rt(n, "filter", "depthwiseConv2d")
                  , g = v
                  , y = !1;
                3 === v.rank && (y = !0,
                g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2])),
                w(4 === g.rank, (function() {
                    return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + g.rank + "."
                }
                )),
                w(4 === m.rank, (function() {
                    return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + m.rank + "."
                }
                )),
                w(g.shape[3] === m.shape[2], (function() {
                    return "Error in fused depthwiseConv2d: number of input channels (" + g.shape[3] + ") must match the inChannels dimension in filter " + m.shape[2] + "."
                }
                )),
                null == s && (s = [1, 1]),
                w(Bn(r, s), (function() {
                    return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + s + "'"
                }
                )),
                null != c && w(I(o), (function() {
                    return "Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode " + c + " but got pad " + o + "."
                }
                ));
                var b, k, x = Dn(g.shape, m.shape, r, s, o, c, !0);
                null != l && (b = bt(b = Rt(l, "bias", "fused conv2d"), v)[0],
                At(x.outShape, b.shape)),
                null != h && (k = Rt(h, "prelu weights", "fused depthwiseConv2d"));
                var E = {
                    x: g,
                    filter: m
                };
                null != l && (E.bias = b),
                null != h && (E.preluActivationWeights = k);
                var S = [m, g]
                  , D = Dt.runKernelFunc((function(t, e) {
                    var n = t.fusedDepthwiseConv2D({
                        input: g,
                        filter: m,
                        convInfo: x,
                        bias: b,
                        activation: p,
                        preluActivationWeights: k
                    });
                    return e([m, g, n]),
                    n
                }
                ), E, (function(t, e) {
                    w(Tn(s), (function() {
                        return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + s + "'"
                    }
                    ));
                    var n = e[0]
                      , r = e[1]
                      , o = e[2]
                      , a = fs(t, o, p)
                      , i = {};
                    return null != l && (i = {
                        bias: function() {
                            return ps(b, a)
                        }
                    }),
                    Object.assign({
                        x: function() {
                            return or(r.shape, a, n, x)
                        },
                        filter: function() {
                            return rr(r, a, n.shape, x)
                        }
                    }, i)
                }
                ), "FusedDepthwiseConv2D", {
                    convInfo: x,
                    activation: p
                }, S, [!0]);
                return y ? D.as3D(D.shape[1], D.shape[2], D.shape[3]) : D
            }
        })
    }
      , vs = {
        __proto__: null,
        image: cs,
        linalg: Zu,
        losses: Yu,
        spectral: Mu,
        fused: ds,
        signal: zu,
        add: zt,
        addN: Ma,
        atan2: Aa,
        avgPool: _a,
        avgPool3d: Ta,
        batchToSpaceND: Ur,
        batchNorm: Ca,
        batchNorm2d: Ra,
        batchNorm3d: Pa,
        batchNorm4d: qa,
        broadcastTo: La,
        clone: za,
        complex: Wt,
        concat: ie,
        concat1d: Oa,
        concat2d: Wa,
        concat3d: Ka,
        concat4d: Ga,
        conv1d: Ua,
        conv2d: Jn,
        conv2dTranspose: Ha,
        conv3d: Va,
        conv3dTranspose: ja,
        cumsum: er,
        depthToSpace: $a,
        depthwiseConv2d: Ja,
        diag: Ya,
        div: ge,
        divNoNan: Xa,
        dot: Za,
        elu: Qa,
        equal: ti,
        eye: ei,
        fill: ni,
        floorDiv: me,
        greater: Sr,
        greaterEqual: gr,
        imag: Kt,
        leakyRelu: oi,
        less: yr,
        lessEqual: Dr,
        localResponseNormalization: ai,
        matMul: Ln,
        max: ii,
        maxPool: ui,
        maxPool3d: si,
        maxPoolWithArgmax: ci,
        maximum: ri,
        minimum: li,
        mod: fi,
        mul: ye,
        multinomial: pi,
        notEqual: hi,
        oneHot: ua,
        outerProduct: di,
        pad: Yr,
        pad1d: vi,
        pad2d: mi,
        pad3d: gi,
        pad4d: yi,
        pool: bi,
        pow: zr,
        prelu: wi,
        rand: ki,
        randomGamma: Ci,
        randomNormal: Ri,
        randomUniform: Pi,
        real: Gt,
        relu: qi,
        relu6: zi,
        selu: Li,
        separableConv2d: Oi,
        spaceToBatchND: Wn,
        split: Un,
        square: Oe,
        squaredDifference: Wi,
        sub: cr,
        tile: lr,
        truncatedNormal: Ki,
        op: qt,
        booleanMaskAsync: Ji,
        reverse: Yi,
        reverse1d: Xi,
        reverse2d: Zi,
        reverse3d: Qi,
        reverse4d: tu,
        slice: uo,
        slice1d: so,
        slice2d: co,
        slice3d: lo,
        slice4d: fo,
        abs: We,
        acos: Ke,
        acosh: Ge,
        asin: Ue,
        asinh: He,
        atan: Ve,
        atanh: je,
        ceil: $e,
        clipByValue: Je,
        cos: Ye,
        cosh: Xe,
        erf: Ze,
        exp: Qe,
        expm1: tn,
        floor: en,
        log: nn,
        log1p: rn,
        logSigmoid: on,
        neg: an,
        reciprocal: un,
        round: sn,
        rsqrt: cn,
        sigmoid: ln,
        sign: fn,
        isNaN: pn,
        isInf: hn,
        isFinite: dn,
        sin: vn,
        sinh: mn,
        softplus: gn,
        sqrt: yn,
        step: bn,
        tan: wn,
        tanh: kn,
        all: Ae,
        any: _e,
        argMax: Te,
        argMin: Be,
        logSumExp: Ce,
        mean: Re,
        min: Pe,
        moments: qe,
        sum: ze,
        prod: Le,
        equalStrict: eu,
        greaterEqualStrict: nu,
        greaterStrict: ru,
        lessEqualStrict: ou,
        lessStrict: au,
        notEqualStrict: iu,
        addStrict: uu,
        divStrict: su,
        maximumStrict: cu,
        minimumStrict: lu,
        modStrict: fu,
        mulStrict: pu,
        powStrict: hu,
        squaredDifferenceStrict: du,
        subStrict: vu,
        logicalAnd: Tr,
        logicalNot: Br,
        logicalOr: Cr,
        logicalXor: Rr,
        where: Pr,
        whereAsync: qr,
        buffer: ue,
        print: se,
        cast: ce,
        expandDims: le,
        reshape: fe,
        squeeze: pe,
        stack: he,
        unstack: de,
        setdiff1dAsync: ve,
        linspace: ne,
        ones: te,
        range: re,
        scalar: Vt,
        tensor: Ut,
        tensor1d: jt,
        tensor2d: $t,
        tensor3d: Jt,
        tensor4d: Yt,
        tensor5d: Xt,
        tensor6d: Zt,
        variable: Qt,
        zeros: ee,
        onesLike: oe,
        zerosLike: ae,
        transpose: tr,
        softmax: mu,
        logSoftmax: gu,
        norm: yu,
        gather: ji,
        unsortedSegmentSum: $i,
        basicLSTMCell: bu,
        multiRNNCell: wu,
        movingAverage: ku,
        stridedSlice: xu,
        topk: Eu,
        scatterND: Su,
        fft: Du,
        ifft: Iu,
        rfft: Nu,
        irfft: Fu,
        sparseToDense: Au,
        gatherND: _u,
        dropout: Tu,
        hannWindow: Cu,
        hammingWindow: Ru,
        frame: Pu,
        stft: qu,
        inTopKAsync: Ou
    }
      , ms = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t),
        e.prototype.minimize = function(t, e, n) {
            void 0 === e && (e = !1);
            var r = this.computeGradients(t, n)
              , o = r.value
              , a = r.grads;
            if (null != n) {
                var i = n.map((function(t) {
                    return {
                        name: t.name,
                        tensor: a[t.name]
                    }
                }
                ));
                this.applyGradients(i)
            } else
                this.applyGradients(a);
            return Na(a),
            e ? o : (o.dispose(),
            null)
        }
        ,
        Object.defineProperty(e.prototype, "iterations", {
            get: function() {
                return null == this.iterations_ && (this.iterations_ = 0),
                this.iterations_
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.incrementIterations = function() {
            this.iterations_ = this.iterations + 1
        }
        ,
        e.prototype.computeGradients = function(t, e) {
            return be(t, e)
        }
        ,
        e.prototype.dispose = function() {
            null != this.iterations_ && Na(this.iterations_)
        }
        ,
        e.prototype.saveIterations = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    return null == this.iterations_ && (this.iterations_ = 0),
                    [2, {
                        name: "iter",
                        tensor: Vt(this.iterations_, "int32")
                    }]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    throw new Error("getWeights() is not implemented for this optimizer yet.")
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName())
                }
                ))
            }
            ))
        }
        ,
        e.prototype.extractIterations = function(t) {
            return r(this, void 0, void 0, (function() {
                var e;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return e = this,
                        [4, t[0].tensor.data()];
                    case 1:
                        return e.iterations_ = n.sent()[0],
                        [2, t.slice(1)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(ga);
    Object.defineProperty(ms, Symbol.hasInstance, {
        value: function(t) {
            return null != t.minimize && null != t.computeGradients && null != t.applyGradients
        }
    });
    var gs = function(t) {
        function e(e, n, r) {
            void 0 === r && (r = null);
            var o = t.call(this) || this;
            return o.learningRate = e,
            o.rho = n,
            o.epsilon = r,
            o.accumulatedGrads = [],
            o.accumulatedUpdates = [],
            null == r && (o.epsilon = Dt.backend.epsilon()),
            o
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this;
            (Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t)).forEach((function(n, r) {
                var o = Dt.registeredVariables[n];
                null == e.accumulatedGrads[r] && (e.accumulatedGrads[r] = {
                    originalName: n + "/accum_grad",
                    variable: Ia((function() {
                        return ae(o).variable(!1)
                    }
                    ))
                }),
                null == e.accumulatedUpdates[r] && (e.accumulatedUpdates[r] = {
                    originalName: n + "/accum_var",
                    variable: Ia((function() {
                        return ae(o).variable(!1)
                    }
                    ))
                });
                var a = Array.isArray(t) ? t[r].tensor : t[n];
                if (null != a) {
                    var i = e.accumulatedGrads[r].variable
                      , u = e.accumulatedUpdates[r].variable;
                    Ia((function() {
                        var t = i.mul(e.rho).add(a.square().mul(1 - e.rho))
                          , n = u.add(e.epsilon).sqrt().div(i.add(e.epsilon).sqrt()).mul(a)
                          , r = u.mul(e.rho).add(n.square().mul(1 - e.rho));
                        i.assign(t),
                        u.assign(r);
                        var s = n.mul(-e.learningRate).add(o);
                        o.assign(s)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            null != this.accumulatedUpdates && (Na(this.accumulatedGrads.map((function(t) {
                return t.variable
            }
            ))),
            Na(this.accumulatedUpdates.map((function(t) {
                return t.variable
            }
            ))))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return t = this.accumulatedGrads.concat(this.accumulatedUpdates),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()].concat(t.map((function(t) {
                            return {
                                name: t.originalName,
                                tensor: t.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                var e;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        return t = n.sent(),
                        e = t.length / 2,
                        !1,
                        this.accumulatedGrads = t.slice(0, e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        this.accumulatedUpdates = t.slice(e, 2 * e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                rho: this.rho,
                epsilon: this.epsilon
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.rho,e.epsilon)
        }
        ,
        e.className = "Adadelta",
        e
    }(ms);
    ba(gs);
    var ys = function(t) {
        function e(e, n) {
            void 0 === n && (n = .1);
            var r = t.call(this) || this;
            return r.learningRate = e,
            r.initialAccumulatorValue = n,
            r.accumulatedGrads = [],
            r
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this;
            (Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t)).forEach((function(n, r) {
                var o = Dt.registeredVariables[n];
                if (null == e.accumulatedGrads[r]) {
                    e.accumulatedGrads[r] = {
                        originalName: n + "/accumulator",
                        variable: Ia((function() {
                            return ni(o.shape, e.initialAccumulatorValue).variable(!1)
                        }
                        ))
                    }
                }
                var a = Array.isArray(t) ? t[r].tensor : t[n];
                if (null != a) {
                    var i = e.accumulatedGrads[r].variable;
                    Ia((function() {
                        var t = i.add(a.square());
                        i.assign(t);
                        var n = a.div(t.add(Dt.backend.epsilon()).sqrt()).mul(-e.learningRate).add(o);
                        o.assign(n)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            null != this.accumulatedGrads && Na(this.accumulatedGrads.map((function(t) {
                return t.variable
            }
            )))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(this.accumulatedGrads.map((function(t) {
                            return {
                                name: t.originalName,
                                tensor: t.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        return t = e.sent(),
                        !1,
                        this.accumulatedGrads = t.map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                initialAccumulatorValue: this.initialAccumulatorValue
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.initialAccumulatorValue)
        }
        ,
        e.className = "Adagrad",
        e
    }(ms);
    ba(ys);
    var bs = function(t) {
        function e(e, n, r, o) {
            void 0 === o && (o = null);
            var a = t.call(this) || this;
            return a.learningRate = e,
            a.beta1 = n,
            a.beta2 = r,
            a.epsilon = o,
            a.accumulatedFirstMoment = [],
            a.accumulatedSecondMoment = [],
            Ia((function() {
                a.accBeta1 = Vt(n).variable(),
                a.accBeta2 = Vt(r).variable()
            }
            )),
            null == o && (a.epsilon = Dt.backend.epsilon()),
            a
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this
              , n = Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t);
            Ia((function() {
                var r = cr(1, e.accBeta1)
                  , o = cr(1, e.accBeta2);
                n.forEach((function(n, a) {
                    var i = Dt.registeredVariables[n];
                    null == e.accumulatedFirstMoment[a] && (e.accumulatedFirstMoment[a] = {
                        originalName: n + "/m",
                        variable: Ia((function() {
                            return ae(i).variable(!1)
                        }
                        ))
                    }),
                    null == e.accumulatedSecondMoment[a] && (e.accumulatedSecondMoment[a] = {
                        originalName: n + "/v",
                        variable: Ia((function() {
                            return ae(i).variable(!1)
                        }
                        ))
                    });
                    var u = Array.isArray(t) ? t[a].tensor : t[n];
                    if (null != u) {
                        var s = e.accumulatedFirstMoment[a].variable
                          , c = e.accumulatedSecondMoment[a].variable
                          , l = s.mul(e.beta1).add(u.mul(1 - e.beta1))
                          , f = c.mul(e.beta2).add(u.square().mul(1 - e.beta2))
                          , p = l.div(r)
                          , h = f.div(o);
                        s.assign(l),
                        c.assign(f);
                        var d = p.div(h.sqrt().add(e.epsilon)).mul(-e.learningRate).add(i);
                        i.assign(d)
                    }
                }
                )),
                e.accBeta1.assign(e.accBeta1.mul(e.beta1)),
                e.accBeta2.assign(e.accBeta2.mul(e.beta2))
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            this.accBeta1.dispose(),
            this.accBeta2.dispose(),
            null != this.accumulatedFirstMoment && Na(this.accumulatedFirstMoment.map((function(t) {
                return t.variable
            }
            ))),
            null != this.accumulatedSecondMoment && Na(this.accumulatedSecondMoment.map((function(t) {
                return t.variable
            }
            )))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return t = this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()].concat(t.map((function(t) {
                            return {
                                name: t.originalName,
                                tensor: t.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                var e, n = this;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        return t = r.sent(),
                        Ia((function() {
                            n.accBeta1.assign(zr(n.beta1, n.iterations_ + 1)),
                            n.accBeta2.assign(zr(n.beta2, n.iterations_ + 1))
                        }
                        )),
                        e = t.length / 2,
                        !1,
                        this.accumulatedFirstMoment = t.slice(0, e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        this.accumulatedSecondMoment = t.slice(e, 2 * e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)
        }
        ,
        e.className = "Adam",
        e
    }(ms);
    ba(bs);
    var ws = function(t) {
        function e(e, n, r, o, a) {
            void 0 === o && (o = null),
            void 0 === a && (a = 0);
            var i = t.call(this) || this;
            return i.learningRate = e,
            i.beta1 = n,
            i.beta2 = r,
            i.epsilon = o,
            i.decay = a,
            i.accumulatedFirstMoment = [],
            i.accumulatedWeightedInfNorm = [],
            Ia((function() {
                i.iteration = Vt(0).variable(),
                i.accBeta1 = Vt(n).variable()
            }
            )),
            null == o && (i.epsilon = Dt.backend.epsilon()),
            i
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this
              , n = Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t);
            Ia((function() {
                var r = cr(1, e.accBeta1)
                  , o = ge(-e.learningRate, e.iteration.mul(e.decay).add(1));
                n.forEach((function(n, a) {
                    var i = Dt.registeredVariables[n];
                    null == e.accumulatedFirstMoment[a] && (e.accumulatedFirstMoment[a] = {
                        originalName: n + "/m",
                        variable: ae(i).variable(!1)
                    }),
                    null == e.accumulatedWeightedInfNorm[a] && (e.accumulatedWeightedInfNorm[a] = {
                        originalName: n + "/v",
                        variable: ae(i).variable(!1)
                    });
                    var u = Array.isArray(t) ? t[a].tensor : t[n];
                    if (null != u) {
                        var s = e.accumulatedFirstMoment[a].variable
                          , c = e.accumulatedWeightedInfNorm[a].variable
                          , l = s.mul(e.beta1).add(u.mul(1 - e.beta1))
                          , f = c.mul(e.beta2)
                          , p = u.abs()
                          , h = f.maximum(p);
                        s.assign(l),
                        c.assign(h);
                        var d = o.div(r).mul(l.div(h.add(e.epsilon))).add(i);
                        i.assign(d)
                    }
                }
                )),
                e.iteration.assign(e.iteration.add(1)),
                e.accBeta1.assign(e.accBeta1.mul(e.beta1))
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            this.accBeta1.dispose(),
            this.iteration.dispose(),
            null != this.accumulatedFirstMoment && Na(this.accumulatedFirstMoment.map((function(t) {
                return t.variable
            }
            ))),
            null != this.accumulatedWeightedInfNorm && Na(this.accumulatedWeightedInfNorm.map((function(t) {
                return t.variable
            }
            )))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    throw new Error("getWeights() is not implemented for Adamax yet.")
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    throw new Error("setWeights() is not implemented for Adamax yet.")
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon,
                decay: this.decay
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)
        }
        ,
        e.className = "Adamax",
        e
    }(ms);
    ba(ws);
    var ks = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n.learningRate = e,
            n.setLearningRate(e),
            n
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this;
            (Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t)).forEach((function(n, r) {
                var o = Array.isArray(t) ? t[r].tensor : t[n];
                if (null != o) {
                    var a = Dt.registeredVariables[n];
                    Ia((function() {
                        var t = e.c.mul(o).add(a);
                        a.assign(t)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.setLearningRate = function(t) {
            this.learningRate = t,
            null != this.c && this.c.dispose(),
            this.c = Fa(Vt(-t))
        }
        ,
        e.prototype.dispose = function() {
            this.c.dispose()
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()]]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        if (0 !== (t = e.sent()).length)
                            throw new Error("SGD optimizer does not have settable weights.");
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate)
        }
        ,
        e.className = "SGD",
        e
    }(ms);
    ba(ks);
    var xs = function(t) {
        function e(e, n, r) {
            void 0 === r && (r = !1);
            var o = t.call(this, e) || this;
            return o.learningRate = e,
            o.momentum = n,
            o.useNesterov = r,
            o.accumulations = [],
            o.m = Vt(o.momentum),
            o
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this;
            (Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t)).forEach((function(n, r) {
                var o = Dt.registeredVariables[n];
                if (null == e.accumulations[r]) {
                    e.accumulations[r] = {
                        originalName: n + "/momentum",
                        variable: Ia((function() {
                            return ae(o).variable(!1)
                        }
                        ))
                    }
                }
                var a = e.accumulations[r].variable
                  , i = Array.isArray(t) ? t[r].tensor : t[n];
                null != i && Ia((function() {
                    var t, n = e.m.mul(a).add(i);
                    t = e.useNesterov ? e.c.mul(i.add(n.mul(e.m))).add(o) : e.c.mul(n).add(o),
                    a.assign(n),
                    o.assign(t)
                }
                ))
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            this.m.dispose(),
            null != this.accumulations && Na(this.accumulations.map((function(t) {
                return t.variable
            }
            )))
        }
        ,
        e.prototype.setMomentum = function(t) {
            this.momentum = t
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(this.accumulations.map((function(t) {
                            return {
                                name: t.originalName,
                                tensor: t.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        return t = e.sent(),
                        !1,
                        this.accumulations = t.map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                momentum: this.momentum,
                useNesterov: this.useNesterov
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.momentum,e.useNesterov)
        }
        ,
        e.className = "Momentum",
        e
    }(ks);
    ba(xs);
    var Es = function(t) {
        function e(e, n, r, o, a) {
            void 0 === n && (n = .9),
            void 0 === r && (r = 0),
            void 0 === o && (o = null),
            void 0 === a && (a = !1);
            var i = t.call(this) || this;
            if (i.learningRate = e,
            i.decay = n,
            i.momentum = r,
            i.epsilon = o,
            i.accumulatedMeanSquares = [],
            i.accumulatedMoments = [],
            i.accumulatedMeanGrads = [],
            i.centered = a,
            null == o && (i.epsilon = Dt.backend.epsilon()),
            null == e)
                throw new Error("learningRate for RMSPropOptimizer must be defined.");
            return i
        }
        return n(e, t),
        e.prototype.applyGradients = function(t) {
            var e = this;
            (Array.isArray(t) ? t.map((function(t) {
                return t.name
            }
            )) : Object.keys(t)).forEach((function(n, r) {
                var o = Dt.registeredVariables[n];
                null == e.accumulatedMeanSquares[r] && (e.accumulatedMeanSquares[r] = {
                    originalName: n + "/rms",
                    variable: Ia((function() {
                        return ae(o).variable(!1)
                    }
                    ))
                }),
                null == e.accumulatedMoments[r] && (e.accumulatedMoments[r] = {
                    originalName: n + "/momentum",
                    variable: Ia((function() {
                        return ae(o).variable(!1)
                    }
                    ))
                }),
                null == e.accumulatedMeanGrads[r] && e.centered && (e.accumulatedMeanGrads[r] = {
                    originalName: n + "/mg",
                    variable: Ia((function() {
                        return ae(o).variable(!1)
                    }
                    ))
                });
                var a = Array.isArray(t) ? t[r].tensor : t[n];
                if (null != a) {
                    var i = e.accumulatedMeanSquares[r].variable
                      , u = e.accumulatedMoments[r].variable;
                    Ia((function() {
                        var t = i.mul(e.decay).add(a.square().mul(1 - e.decay));
                        if (e.centered) {
                            var n = e.accumulatedMeanGrads[r].variable
                              , s = n.mul(e.decay).add(a.mul(1 - e.decay))
                              , c = u.mul(e.momentum).add(a.mul(e.learningRate).div(t.sub(s.square().add(e.epsilon)).sqrt()));
                            i.assign(t),
                            n.assign(s),
                            u.assign(c);
                            var l = o.sub(c);
                            o.assign(l)
                        } else {
                            var f = i.mul(e.decay).add(a.square().mul(1 - e.decay));
                            c = u.mul(e.momentum).add(a.mul(e.learningRate).div(f.add(e.epsilon).sqrt()));
                            i.assign(f),
                            u.assign(c);
                            l = o.sub(c);
                            o.assign(l)
                        }
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        e.prototype.dispose = function() {
            null != this.accumulatedMeanSquares && Na(this.accumulatedMeanSquares.map((function(t) {
                return t.variable
            }
            ))),
            null != this.accumulatedMeanGrads && this.centered && Na(this.accumulatedMeanGrads.map((function(t) {
                return t.variable
            }
            ))),
            null != this.accumulatedMoments && Na(this.accumulatedMoments.map((function(t) {
                return t.variable
            }
            )))
        }
        ,
        e.prototype.getWeights = function() {
            return r(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return t = this.accumulatedMeanSquares.concat(this.accumulatedMoments),
                        this.centered && t.push.apply(t, this.accumulatedMeanGrads),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()].concat(t.map((function(t) {
                            return {
                                name: t.originalName,
                                tensor: t.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setWeights = function(t) {
            return r(this, void 0, void 0, (function() {
                var e;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.extractIterations(t)];
                    case 1:
                        return t = n.sent(),
                        e = this.centered ? t.length / 3 : t.length / 2,
                        !1,
                        this.accumulatedMeanSquares = t.slice(0, e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        this.accumulatedMoments = t.slice(e, 2 * e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        )),
                        this.centered && (this.accumulatedMeanGrads = t.slice(2 * e, 3 * e).map((function(t) {
                            return {
                                originalName: t.name,
                                variable: t.tensor.variable(!1)
                            }
                        }
                        ))),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                decay: this.decay,
                momentum: this.momentum,
                epsilon: this.epsilon,
                centered: this.centered
            }
        }
        ,
        e.fromConfig = function(t, e) {
            return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)
        }
        ,
        e.className = "RMSProp",
        e
    }(ms);
    ba(Es);
    var Ss = function() {
        function t() {}
        return t.sgd = function(t) {
            return new ks(t)
        }
        ,
        t.momentum = function(t, e, n) {
            return void 0 === n && (n = !1),
            new xs(t,e,n)
        }
        ,
        t.rmsprop = function(t, e, n, r, o) {
            return void 0 === e && (e = .9),
            void 0 === n && (n = 0),
            void 0 === r && (r = null),
            void 0 === o && (o = !1),
            new Es(t,e,n,r,o)
        }
        ,
        t.adam = function(t, e, n, r) {
            return void 0 === t && (t = .001),
            void 0 === e && (e = .9),
            void 0 === n && (n = .999),
            void 0 === r && (r = null),
            new bs(t,e,n,r)
        }
        ,
        t.adadelta = function(t, e, n) {
            return void 0 === t && (t = .001),
            void 0 === e && (e = .95),
            void 0 === n && (n = null),
            new gs(t,e,n)
        }
        ,
        t.adamax = function(t, e, n, r, o) {
            return void 0 === t && (t = .002),
            void 0 === e && (e = .9),
            void 0 === n && (n = .999),
            void 0 === r && (r = null),
            void 0 === o && (o = 0),
            new ws(t,e,n,r,o)
        }
        ,
        t.adagrad = function(t, e) {
            return void 0 === e && (e = .1),
            new ys(t,e)
        }
        ,
        t
    }()
      , Ds = {
        sgd: Ss.sgd,
        momentum: Ss.momentum,
        adadelta: Ss.adadelta,
        adagrad: Ss.adagrad,
        rmsprop: Ss.rmsprop,
        adamax: Ss.adamax,
        adam: Ss.adam
    }
      , Is = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : function(t) {
        return t()
    }
    ;
    var Ns = {
        __proto__: null,
        segment_util: Ui,
        castTensor: function(t, e, n) {
            if ("complex64" === e) {
                if ("complex64" === t.dtype)
                    return t.clone();
                var r = ee(t.shape)
                  , o = t.toFloat()
                  , a = n.complex(o, r);
                return r.dispose(),
                o.dispose(),
                a
            }
            if (!R(t.dtype, e))
                return Dt.makeTensorFromDataId(t.dataId, t.shape, e);
            if ("complex64" === t.dtype) {
                var i = n.real(t);
                a = i.cast(e);
                return i.dispose(),
                a
            }
            if ("int32" === e)
                return n.int(t);
            if ("bool" === e) {
                var u = Vt(0, t.dtype);
                a = n.notEqual(t, u);
                return u.dispose(),
                a
            }
            throw new Error("Error in Cast: failed to cast " + t.dtype + " to " + e)
        },
        reshapeTensor: function(t, e) {
            return Dt.makeTensorFromDataId(t.dataId, e, t.dtype)
        },
        linspaceImpl: function(t, e, n) {
            var r = (e - t) / (n - 1)
              , o = J(n, "float32");
            o[0] = t;
            for (var a = 1; a < o.length; a++)
                o[a] = o[a - 1] + r;
            return jt(o, "float32")
        },
        nonMaxSuppressionV3: es,
        nonMaxSuppressionV5: ns,
        upcastType: yt,
        axesAreInnerMostDims: xe,
        combineLocations: Ee,
        computeOutAndReduceShapes: Se,
        expandShapeToKeepDim: De,
        assertAxesAreInnerMostDims: function(t, e, n) {
            w(xe(e, n), (function() {
                return t + " supports only inner-most axes for now. Got axes " + e + " and rank-" + n + " input."
            }
            ))
        },
        getAxesPermutation: Ie,
        getUndoAxesPermutation: Ne,
        getInnerMostAxes: Fe,
        getBroadcastDims: function(t, e) {
            for (var n = t.length, r = [], o = 0; o < n; o++) {
                var a = n - 1 - o
                  , i = t[a] || 1;
                (e[e.length - 1 - o] || 1) > 1 && 1 === i && r.unshift(a)
            }
            return r
        },
        getReductionAxes: Mt,
        assertAndGetBroadcastShape: At,
        assertParamsConsistent: Lt,
        computeOutShape: Ot,
        computePool2DInfo: En,
        computePool3DInfo: Sn,
        computeConv2DInfo: Dn,
        computeConv3DInfo: In,
        computeDefaultPad: Nn,
        tupleValuesAreOne: Tn,
        eitherStridesOrDilationsAreOne: Bn,
        convertConv2DDataFormat: Cn,
        PARALLELIZE_THRESHOLD: 30,
        computeOptimalWindowSize: function(t) {
            return t <= 30 ? t : U(t, Math.floor(Math.sqrt(t)))
        },
        getReshaped: function(t, e, n, r) {
            void 0 === r && (r = !0);
            var o = [];
            if (r)
                (o = o.concat(e.slice(0))).push(t[0] / n),
                o = o.concat(t.slice(1));
            else {
                o = o.concat(t[0]);
                for (var a = e.length, i = 0; i < a; ++i)
                    o = o.concat([t[i + 1] / e[i], e[i]]);
                o = o.concat(t.slice(a + 1))
            }
            return o
        },
        getPermuted: function(t, e, n) {
            void 0 === n && (n = !0);
            var r = [];
            if (n) {
                r.push(e);
                for (var o = e + 1; o < t; ++o)
                    o <= 2 * e ? (r.push(o),
                    r.push(o - (e + 1))) : r.push(o)
            } else {
                var a = []
                  , i = [];
                for (o = 1; o < t; ++o)
                    o >= 2 * e + 1 || o % 2 == 1 ? i.push(o) : a.push(o);
                r.push.apply(r, a),
                r.push(0),
                r.push.apply(r, i)
            }
            return r
        },
        getReshapedPermuted: function(t, e, n, r) {
            void 0 === r && (r = !0);
            var o = [];
            r ? o.push(t[0] / n) : o.push(t[0] * n);
            for (var a = 1; a < t.length; ++a)
                a <= e.length ? r ? o.push(e[a - 1] * t[a]) : o.push(t[a] / e[a - 1]) : o.push(t[a]);
            return o
        },
        getSliceBeginCoords: function(t, e) {
            for (var n = [0], r = 0; r < e; ++r)
                n.push(t[r][0]);
            return n
        },
        getSliceSize: function(t, e, n) {
            for (var r = t.slice(0, 1), o = 0; o < n; ++o)
                r.push(t[o + 1] - e[o][0] - e[o][1]);
            return r
        },
        prepareAndValidate: fa,
        validateUpdateShape: ha,
        validateInput: da,
        calculateShapes: va,
        SELU_SCALEALPHA: 1.7580993408473768,
        SELU_SCALE: 1.0507009873554805,
        shouldFuse: ls,
        ERF_P: .3275911,
        ERF_A1: .254829592,
        ERF_A2: -.284496736,
        ERF_A3: 1.421413741,
        ERF_A4: -1.453152027,
        ERF_A5: 1.061405429,
        warn: function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            s().getBool("IS_TEST") || console.warn.apply(console, t)
        },
        log: function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            s().getBool("IS_TEST") || console.log.apply(console, t)
        },
        mergeRealAndImagArrays: function(t, e) {
            if (t.length !== e.length)
                throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t.length + ", imag: " + e.length + ".");
            for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2)
                n[r] = t[r / 2],
                n[r + 1] = e[r / 2];
            return n
        },
        splitRealAndImagArrays: function(t) {
            for (var e = new Float32Array(t.length / 2), n = new Float32Array(t.length / 2), r = 0; r < t.length; r += 2)
                e[r / 2] = t[r],
                n[r / 2] = t[r + 1];
            return {
                real: e,
                imag: n
            }
        },
        complexWithEvenIndex: function(t) {
            for (var e = Math.ceil(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 0; o < t.length; o += 4)
                n[Math.floor(o / 4)] = t[o],
                r[Math.floor(o / 4)] = t[o + 1];
            return {
                real: n,
                imag: r
            }
        },
        complexWithOddIndex: function(t) {
            for (var e = Math.floor(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 2; o < t.length; o += 4)
                n[Math.floor(o / 4)] = t[o],
                r[Math.floor(o / 4)] = t[o + 1];
            return {
                real: n,
                imag: r
            }
        },
        getComplexWithIndex: function(t, e) {
            return {
                real: t[2 * e],
                imag: t[2 * e + 1]
            }
        },
        assignToTypedArray: function(t, e, n, r) {
            t[2 * r] = e,
            t[2 * r + 1] = n
        },
        exponents: function(t, e) {
            for (var n = new Float32Array(t / 2), r = new Float32Array(t / 2), o = 0; o < Math.ceil(t / 2); o++) {
                var a = (e ? 2 : -2) * Math.PI * (o / t);
                n[o] = Math.cos(a),
                r[o] = Math.sin(a)
            }
            return {
                real: n,
                imag: r
            }
        },
        exponent: function(t, e, n) {
            var r = (n ? 2 : -2) * Math.PI * (t / e);
            return {
                real: Math.cos(r),
                imag: Math.sin(r)
            }
        }
    };
    var Fs = {
        __proto__: null,
        nonMaxSuppressionV3: es,
        nonMaxSuppressionV5: ns,
        split: function(t, e, n) {
            var r = new Array(t.rank).fill(0)
              , o = t.shape.slice();
            return e.map((function(e) {
                var a = o.slice();
                a[n] = e;
                var i = t.slice(r, a);
                return r[n] += e,
                i
            }
            ))
        },
        tile: function(t, e) {
            for (var n = new Array(t.rank), r = 0; r < n.length; r++)
                n[r] = t.shape[r] * e[r];
            var o = ue(n, t.dtype);
            for (r = 0; r < o.values.length; ++r) {
                for (var a = o.indexToLoc(r), i = new Array(t.rank), u = 0; u < i.length; u++)
                    i[u] = a[u] % t.shape[u];
                var s = t.locToIndex(i);
                o.values[r] = t.values[s]
            }
            return o.toTensor()
        },
        topkImpl: function(t, e, n, r, o) {
            for (var a = e[e.length - 1], i = [t.length / a, a], u = i[0], s = i[1], c = _(n, u * r), l = _("int32", u * r), f = 0; f < u; f++) {
                for (var p = f * s, h = t.subarray(p, p + s), d = [], v = 0; v < h.length; v++)
                    d.push({
                        value: h[v],
                        index: v
                    });
                d.sort((function(t, e) {
                    return e.value - t.value
                }
                ));
                var m = f * r
                  , g = c.subarray(m, m + r)
                  , y = l.subarray(m, m + r);
                for (v = 0; v < r; v++)
                    g[v] = d[v].value,
                    y[v] = d[v].index
            }
            var b = e.slice();
            return b[b.length - 1] = r,
            [Ut(c, b, n), Ut(l, b, "int32")]
        },
        whereImpl: _r
    }
      , Ms = function() {
        function t(t, e) {
            this.backend = t,
            this.dataMover = e,
            this.data = new WeakMap,
            this.dataIdsCount = 0
        }
        return t.prototype.get = function(t) {
            return this.data.has(t) || this.dataMover.moveData(this.backend, t),
            this.data.get(t)
        }
        ,
        t.prototype.set = function(t, e) {
            this.dataIdsCount++,
            this.data.set(t, e)
        }
        ,
        t.prototype.has = function(t) {
            return this.data.has(t)
        }
        ,
        t.prototype.delete = function(t) {
            return this.dataIdsCount--,
            this.data.delete(t)
        }
        ,
        t.prototype.numDataIds = function() {
            return this.dataIdsCount
        }
        ,
        t
    }()
      , As = function() {
        function t() {}
        return t.prototype.time = function(t) {
            return _s("time")
        }
        ,
        t.prototype.read = function(t) {
            return _s("read")
        }
        ,
        t.prototype.readSync = function(t) {
            return _s("readSync")
        }
        ,
        t.prototype.numDataIds = function() {
            return _s("numDataIds")
        }
        ,
        t.prototype.disposeData = function(t) {
            return _s("disposeData")
        }
        ,
        t.prototype.write = function(t, e, n) {
            return _s("write")
        }
        ,
        t.prototype.move = function(t, e, n, r) {
            return _s("move")
        }
        ,
        t.prototype.memory = function() {
            return _s("memory")
        }
        ,
        t.prototype.floatPrecision = function() {
            return _s("floatPrecision")
        }
        ,
        t.prototype.epsilon = function() {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4
        }
        ,
        t.prototype.batchMatMul = function(t, e, n, r) {
            return _s("batchMatMul")
        }
        ,
        t.prototype.fusedBatchMatMul = function(t) {
            t.a,
            t.b,
            t.transposeA,
            t.transposeB,
            t.bias,
            t.activation,
            t.preluActivationWeights;
            return _s("fusedBatchMatMul")
        }
        ,
        t.prototype.slice = function(t, e, n) {
            return _s("slice")
        }
        ,
        t.prototype.stridedSlice = function(t, e, n, r) {
            return _s("stridedSlice")
        }
        ,
        t.prototype.unstack = function(t, e) {
            return _s("unstack")
        }
        ,
        t.prototype.reverse = function(t, e) {
            return _s("reverse")
        }
        ,
        t.prototype.concat = function(t, e) {
            return _s("concat")
        }
        ,
        t.prototype.neg = function(t) {
            return _s("neg")
        }
        ,
        t.prototype.add = function(t, e) {
            return _s("add")
        }
        ,
        t.prototype.addN = function(t) {
            return _s("addN")
        }
        ,
        t.prototype.subtract = function(t, e) {
            return _s("subtract")
        }
        ,
        t.prototype.multiply = function(t, e) {
            return _s("multiply")
        }
        ,
        t.prototype.realDivide = function(t, e) {
            return _s("realDivide")
        }
        ,
        t.prototype.floorDiv = function(t, e) {
            return _s("floorDiv")
        }
        ,
        t.prototype.sum = function(t, e) {
            return _s("sum")
        }
        ,
        t.prototype.prod = function(t, e) {
            return _s("prod")
        }
        ,
        t.prototype.unsortedSegmentSum = function(t, e, n) {
            return _s("unsortedSegmentSum")
        }
        ,
        t.prototype.argMin = function(t, e) {
            return _s("argMin")
        }
        ,
        t.prototype.argMax = function(t, e) {
            return _s("argMax")
        }
        ,
        t.prototype.equal = function(t, e) {
            return _s("equal")
        }
        ,
        t.prototype.notEqual = function(t, e) {
            return _s("notEqual")
        }
        ,
        t.prototype.less = function(t, e) {
            return _s("less")
        }
        ,
        t.prototype.lessEqual = function(t, e) {
            return _s("lessEqual")
        }
        ,
        t.prototype.greater = function(t, e) {
            return _s("greater")
        }
        ,
        t.prototype.greaterEqual = function(t, e) {
            return _s("greaterEqual")
        }
        ,
        t.prototype.logicalNot = function(t) {
            return _s("logicalNot")
        }
        ,
        t.prototype.logicalAnd = function(t, e) {
            return _s("logicalAnd")
        }
        ,
        t.prototype.logicalOr = function(t, e) {
            return _s("logicalOr")
        }
        ,
        t.prototype.where = function(t) {
            return _s("where")
        }
        ,
        t.prototype.select = function(t, e, n) {
            return _s("select")
        }
        ,
        t.prototype.topk = function(t, e, n) {
            return _s("topk")
        }
        ,
        t.prototype.min = function(t, e) {
            return _s("min")
        }
        ,
        t.prototype.minimum = function(t, e) {
            return _s("minimum")
        }
        ,
        t.prototype.mod = function(t, e) {
            return _s("mod")
        }
        ,
        t.prototype.max = function(t, e) {
            return _s("max")
        }
        ,
        t.prototype.maximum = function(t, e) {
            return _s("maximum")
        }
        ,
        t.prototype.all = function(t, e) {
            return _s("all")
        }
        ,
        t.prototype.any = function(t, e) {
            return _s("any")
        }
        ,
        t.prototype.squaredDifference = function(t, e) {
            return _s("squaredDifference")
        }
        ,
        t.prototype.ceil = function(t) {
            return _s("ceil")
        }
        ,
        t.prototype.floor = function(t) {
            return _s("floor")
        }
        ,
        t.prototype.round = function(t) {
            return _s("round")
        }
        ,
        t.prototype.sign = function(t) {
            return _s("sign")
        }
        ,
        t.prototype.isNaN = function(t) {
            return _s("isNaN")
        }
        ,
        t.prototype.isInf = function(t) {
            return _s("isInf")
        }
        ,
        t.prototype.isFinite = function(t) {
            return _s("isFinite")
        }
        ,
        t.prototype.pow = function(t, e) {
            return _s("pow")
        }
        ,
        t.prototype.exp = function(t) {
            return _s("exp")
        }
        ,
        t.prototype.expm1 = function(t) {
            return _s("expm1")
        }
        ,
        t.prototype.softmax = function(t, e) {
            return _s("softmax")
        }
        ,
        t.prototype.log = function(t) {
            return _s("log")
        }
        ,
        t.prototype.log1p = function(t) {
            return _s("log1p")
        }
        ,
        t.prototype.sqrt = function(t) {
            return _s("sqrt")
        }
        ,
        t.prototype.rsqrt = function(t) {
            return _s("rsqrt")
        }
        ,
        t.prototype.square = function(t) {
            return _s("square")
        }
        ,
        t.prototype.reciprocal = function(t) {
            return _s("reciprocal")
        }
        ,
        t.prototype.relu = function(t) {
            return _s("relu")
        }
        ,
        t.prototype.relu6 = function(t) {
            return _s("relu6")
        }
        ,
        t.prototype.prelu = function(t, e) {
            return _s("prelu")
        }
        ,
        t.prototype.elu = function(t) {
            return _s("elu")
        }
        ,
        t.prototype.eluDer = function(t, e) {
            return _s("eluDer")
        }
        ,
        t.prototype.selu = function(t) {
            return _s("selu")
        }
        ,
        t.prototype.int = function(t) {
            return _s("int")
        }
        ,
        t.prototype.clip = function(t, e, n) {
            return _s("clip")
        }
        ,
        t.prototype.abs = function(t) {
            return _s("abs")
        }
        ,
        t.prototype.complexAbs = function(t) {
            return _s("complexAbs")
        }
        ,
        t.prototype.sigmoid = function(t) {
            return _s("sigmoid")
        }
        ,
        t.prototype.softplus = function(t) {
            return _s("softplus")
        }
        ,
        t.prototype.sin = function(t) {
            return _s("sin")
        }
        ,
        t.prototype.cos = function(t) {
            return _s("cos")
        }
        ,
        t.prototype.tan = function(t) {
            return _s("tan")
        }
        ,
        t.prototype.asin = function(t) {
            return _s("asin")
        }
        ,
        t.prototype.acos = function(t) {
            return _s("acos")
        }
        ,
        t.prototype.atan = function(t) {
            return _s("atan")
        }
        ,
        t.prototype.atan2 = function(t, e) {
            return _s("atan2")
        }
        ,
        t.prototype.sinh = function(t) {
            return _s("sinh")
        }
        ,
        t.prototype.cosh = function(t) {
            return _s("cosh")
        }
        ,
        t.prototype.tanh = function(t) {
            return _s("tanh")
        }
        ,
        t.prototype.asinh = function(t) {
            return _s("asinh")
        }
        ,
        t.prototype.acosh = function(t) {
            return _s("acosh")
        }
        ,
        t.prototype.atanh = function(t) {
            return _s("atanh")
        }
        ,
        t.prototype.erf = function(t) {
            return _s("erf")
        }
        ,
        t.prototype.step = function(t, e) {
            return _s("step")
        }
        ,
        t.prototype.fusedConv2d = function(t) {
            t.input,
            t.filter,
            t.convInfo,
            t.bias,
            t.activation,
            t.preluActivationWeights;
            return _s("fusedConv2d")
        }
        ,
        t.prototype.conv2d = function(t, e, n) {
            return _s("conv2d")
        }
        ,
        t.prototype.conv2dDerInput = function(t, e, n) {
            return _s("conv2dDerInput")
        }
        ,
        t.prototype.conv2dDerFilter = function(t, e, n) {
            return _s("conv2dDerFilter")
        }
        ,
        t.prototype.fusedDepthwiseConv2D = function(t) {
            t.input,
            t.filter,
            t.convInfo,
            t.bias,
            t.activation,
            t.preluActivationWeights;
            return _s("fusedDepthwiseConv2D")
        }
        ,
        t.prototype.depthwiseConv2D = function(t, e, n) {
            return _s("depthwiseConv2D")
        }
        ,
        t.prototype.depthwiseConv2DDerInput = function(t, e, n) {
            return _s("depthwiseConv2DDerInput")
        }
        ,
        t.prototype.depthwiseConv2DDerFilter = function(t, e, n) {
            return _s("depthwiseConv2DDerFilter")
        }
        ,
        t.prototype.conv3d = function(t, e, n) {
            return _s("conv3d")
        }
        ,
        t.prototype.conv3dDerInput = function(t, e, n) {
            return _s("conv3dDerInput")
        }
        ,
        t.prototype.conv3dDerFilter = function(t, e, n) {
            return _s("conv3dDerFilter")
        }
        ,
        t.prototype.maxPool = function(t, e) {
            return _s("maxPool")
        }
        ,
        t.prototype.maxPoolBackprop = function(t, e, n, r) {
            return _s("maxPoolBackprop")
        }
        ,
        t.prototype.avgPool = function(t, e) {
            return _s("avgPool")
        }
        ,
        t.prototype.avgPoolBackprop = function(t, e, n) {
            return _s("avgPoolBackprop")
        }
        ,
        t.prototype.avgPool3d = function(t, e) {
            return _s("avgPool3d")
        }
        ,
        t.prototype.avgPool3dBackprop = function(t, e, n) {
            return _s("avgPool3dBackprop")
        }
        ,
        t.prototype.maxPool3d = function(t, e) {
            return _s("maxPool3d")
        }
        ,
        t.prototype.maxPool3dBackprop = function(t, e, n, r) {
            return _s("maxPool3dBackprop")
        }
        ,
        t.prototype.reshape = function(t, e) {
            return _s("reshape")
        }
        ,
        t.prototype.cast = function(t, e) {
            return _s("cast")
        }
        ,
        t.prototype.tile = function(t, e) {
            return _s("tile")
        }
        ,
        t.prototype.pad = function(t, e, n) {
            return _s("pad")
        }
        ,
        t.prototype.transpose = function(t, e) {
            return _s("transpose")
        }
        ,
        t.prototype.gather = function(t, e, n) {
            return _s("gather")
        }
        ,
        t.prototype.gatherND = function(t, e) {
            return _s("gatherND")
        }
        ,
        t.prototype.scatterND = function(t, e, n) {
            return _s("scatterND")
        }
        ,
        t.prototype.batchToSpaceND = function(t, e, n) {
            return _s("batchToSpaceND")
        }
        ,
        t.prototype.spaceToBatchND = function(t, e, n) {
            return _s("spaceToBatchND")
        }
        ,
        t.prototype.resizeBilinear = function(t, e, n, r) {
            return _s("resizeBilinear")
        }
        ,
        t.prototype.resizeBilinearBackprop = function(t, e, n) {
            return _s("resizeBilinearBackprop")
        }
        ,
        t.prototype.resizeNearestNeighbor = function(t, e, n, r) {
            return _s("resizeNearestNeighbor")
        }
        ,
        t.prototype.resizeNearestNeighborBackprop = function(t, e, n) {
            return _s("resizeNearestNeighborBackprop")
        }
        ,
        t.prototype.batchNorm = function(t, e, n, r, o, a) {
            return _s("batchNorm")
        }
        ,
        t.prototype.localResponseNormalization4D = function(t, e, n, r, o) {
            return _s("localResponseNormalization4D")
        }
        ,
        t.prototype.LRNGrad = function(t, e, n, r, o, a, i) {
            return _s("LRNGrad")
        }
        ,
        t.prototype.multinomial = function(t, e, n, r) {
            return _s("multinomial")
        }
        ,
        t.prototype.oneHot = function(t, e, n, r) {
            return _s("oneHot")
        }
        ,
        t.prototype.cumsum = function(t, e, n, r) {
            return _s("cumsum")
        }
        ,
        t.prototype.nonMaxSuppression = function(t, e, n, r, o) {
            return _s("nonMaxSuppression")
        }
        ,
        t.prototype.fft = function(t) {
            return _s("fft")
        }
        ,
        t.prototype.ifft = function(t) {
            return _s("ifft")
        }
        ,
        t.prototype.complex = function(t, e) {
            return _s("complex")
        }
        ,
        t.prototype.real = function(t) {
            return _s("real")
        }
        ,
        t.prototype.imag = function(t) {
            return _s("imag")
        }
        ,
        t.prototype.cropAndResize = function(t, e, n, r, o, a) {
            return _s("cropAndResize")
        }
        ,
        t.prototype.depthToSpace = function(t, e, n) {
            return _s("depthToSpace")
        }
        ,
        t.prototype.split = function(t, e, n) {
            return _s("split")
        }
        ,
        t.prototype.sparseToDense = function(t, e, n, r) {
            return _s("sparseToDense")
        }
        ,
        t.prototype.diag = function(t) {
            return _s("diag")
        }
        ,
        t.prototype.fill = function(t, e, n) {
            return _s("fill")
        }
        ,
        t.prototype.onesLike = function(t) {
            return _s("onesLike")
        }
        ,
        t.prototype.zerosLike = function(t) {
            return _s("zerosLike")
        }
        ,
        t.prototype.linspace = function(t, e, n) {
            return _s("linspace")
        }
        ,
        t.prototype.dispose = function() {
            return _s("dispose")
        }
        ,
        t
    }();
    function _s(t) {
        throw new Error("'" + t + "' not yet implemented or not found in the registry. Did you forget to import the kernel?")
    }
    lt.prototype.add = function(t) {
        return this.throwIfDisposed(),
        zt(this, t)
    }
    ,
    lt.prototype.atan2 = function(t) {
        return this.throwIfDisposed(),
        Aa(this, t)
    }
    ,
    lt.prototype.avgPool = function(t, e, n, r) {
        return this.throwIfDisposed(),
        _a(this, t, e, n, r)
    }
    ,
    lt.prototype.batchNorm = function(t, e, n, r, o) {
        return this.throwIfDisposed(),
        Ca(this, t, e, n, r, o)
    }
    ,
    lt.prototype.broadcastTo = function(t) {
        return this.throwIfDisposed(),
        La(this, t)
    }
    ,
    lt.prototype.batchToSpaceND = function(t, e) {
        return this.throwIfDisposed(),
        Ur(this, t, e)
    }
    ,
    lt.prototype.concat = function(t, e) {
        return this.throwIfDisposed(),
        t instanceof lt && (t = [t]),
        ie([this].concat(t), e)
    }
    ,
    lt.prototype.conv1d = function(t, e, n, r, o, a) {
        return this.throwIfDisposed(),
        Ua(this, t, e, n, r, o, a)
    }
    ,
    lt.prototype.conv2d = function(t, e, n, r, o, a) {
        return this.throwIfDisposed(),
        Jn(this, t, e, n, r, o, a)
    }
    ,
    lt.prototype.conv2dTranspose = function(t, e, n, r, o) {
        return this.throwIfDisposed(),
        Ha(this, t, e, n, r, o)
    }
    ,
    lt.prototype.cumsum = function(t, e, n) {
        return this.throwIfDisposed(),
        er(this, t, e, n)
    }
    ,
    lt.prototype.depthToSpace = function(t, e) {
        return this.throwIfDisposed(),
        $a(this, t, e)
    }
    ,
    lt.prototype.depthwiseConv2d = function(t, e, n, r, o, a) {
        return this.throwIfDisposed(),
        Ja(this, t, e, n, r, o, a)
    }
    ,
    lt.prototype.depthwiseConv2D = function(t, e, n, r, o, a) {
        return Da("depthwiseConv2D is deprecated, use depthwiseConv2d instead"),
        this.throwIfDisposed(),
        Ja(this, t, e, n, r, o, a)
    }
    ,
    lt.prototype.div = function(t) {
        return this.throwIfDisposed(),
        ge(this, t)
    }
    ,
    lt.prototype.divNoNan = function(t) {
        return this.throwIfDisposed(),
        Xa(this, t)
    }
    ,
    lt.prototype.dot = function(t) {
        return this.throwIfDisposed(),
        Za(this, t)
    }
    ,
    lt.prototype.elu = function() {
        return this.throwIfDisposed(),
        Qa(this)
    }
    ,
    lt.prototype.equal = function(t) {
        return this.throwIfDisposed(),
        ti(this, t)
    }
    ,
    lt.prototype.floorDiv = function(t) {
        return this.throwIfDisposed(),
        me(this, t)
    }
    ,
    lt.prototype.greater = function(t) {
        return this.throwIfDisposed(),
        Sr(this, t)
    }
    ,
    lt.prototype.greaterEqual = function(t) {
        return this.throwIfDisposed(),
        gr(this, t)
    }
    ,
    lt.prototype.leakyRelu = function(t) {
        return this.throwIfDisposed(),
        oi(this, t)
    }
    ,
    lt.prototype.less = function(t) {
        return this.throwIfDisposed(),
        yr(this, t)
    }
    ,
    lt.prototype.lessEqual = function(t) {
        return this.throwIfDisposed(),
        Dr(this, t)
    }
    ,
    lt.prototype.localResponseNormalization = function(t, e, n, r) {
        return this.throwIfDisposed(),
        ai(this, t, e, n, r)
    }
    ,
    lt.prototype.matMul = function(t, e, n) {
        return this.throwIfDisposed(),
        Ln(this, t, e, n)
    }
    ,
    lt.prototype.max = function(t, e) {
        return this.throwIfDisposed(),
        ii(this, t, e)
    }
    ,
    lt.prototype.maxPool = function(t, e, n, r) {
        return this.throwIfDisposed(),
        ui(this, t, e, n, r)
    }
    ,
    lt.prototype.maximum = function(t) {
        return this.throwIfDisposed(),
        ri(this, t)
    }
    ,
    lt.prototype.minimum = function(t) {
        return this.throwIfDisposed(),
        li(this, t)
    }
    ,
    lt.prototype.mod = function(t) {
        return this.throwIfDisposed(),
        fi(this, t)
    }
    ,
    lt.prototype.mul = function(t) {
        return this.throwIfDisposed(),
        ye(this, t)
    }
    ,
    lt.prototype.notEqual = function(t) {
        return this.throwIfDisposed(),
        hi(this, t)
    }
    ,
    lt.prototype.oneHot = function(t, e, n) {
        return void 0 === e && (e = 1),
        void 0 === n && (n = 0),
        this.throwIfDisposed(),
        ua(this, t, e, n)
    }
    ,
    lt.prototype.pad = function(t, e) {
        return this.throwIfDisposed(),
        Yr(this, t, e)
    }
    ,
    lt.prototype.pool = function(t, e, n, r, o) {
        return this.throwIfDisposed(),
        bi(this, t, e, n, r, o)
    }
    ,
    lt.prototype.pow = function(t) {
        return this.throwIfDisposed(),
        zr(this, t)
    }
    ,
    lt.prototype.prelu = function(t) {
        return this.throwIfDisposed(),
        wi(this, t)
    }
    ,
    lt.prototype.relu = function() {
        return this.throwIfDisposed(),
        qi(this)
    }
    ,
    lt.prototype.relu6 = function() {
        return this.throwIfDisposed(),
        zi(this)
    }
    ,
    lt.prototype.selu = function() {
        return this.throwIfDisposed(),
        Li(this)
    }
    ,
    lt.prototype.separableConv2d = function(t, e, n, r, o, a) {
        return this.throwIfDisposed(),
        Oi(this, t, e, n, r, o, a)
    }
    ,
    lt.prototype.split = function(t, e) {
        return this.throwIfDisposed(),
        Un(this, t, e)
    }
    ,
    lt.prototype.squaredDifference = function(t) {
        return this.throwIfDisposed(),
        Wi(this, t)
    }
    ,
    lt.prototype.spaceToBatchND = function(t, e) {
        return this.throwIfDisposed(),
        Wn(this, t, e)
    }
    ,
    lt.prototype.sub = function(t) {
        return this.throwIfDisposed(),
        cr(this, t)
    }
    ,
    lt.prototype.tile = function(t) {
        return this.throwIfDisposed(),
        lr(this, t)
    }
    ,
    lt.prototype.transpose = function(t) {
        return this.throwIfDisposed(),
        tr(this, t)
    }
    ,
    ct = vs,
    t.AdadeltaOptimizer = gs,
    t.AdagradOptimizer = ys,
    t.AdamOptimizer = bs,
    t.AdamaxOptimizer = ws,
    t.Add = "Add",
    t.AddN = "AddN",
    t.Atan2 = "Atan2",
    t.AvgPool = "AvgPool",
    t.AvgPool3D = "AvgPool3D",
    t.AvgPool3DBackprop = "AvgPool3DBackprop",
    t.AvgPoolBackprop = "AvgPoolBackprop",
    t.BatchMatMul = "BatchMatMul",
    t.BatchToSpaceND = "BatchToSpaceND",
    t.BroadcastTo = "BroadcastTo",
    t.Complex = "Complex",
    t.Concat = "Concat",
    t.Conv2D = "Conv2D",
    t.Conv2DBackpropFilter = "Conv2DBackpropFilter",
    t.Conv2DBackpropInput = "Conv2DBackpropInput",
    t.Conv3D = "Conv3D",
    t.Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2",
    t.Conv3DBackpropInputV2 = "Conv3DBackpropInputV2",
    t.Cumsum = "Cumsum",
    t.DataStorage = Ms,
    t.DepthToSpace = "DepthToSpace",
    t.DepthwiseConv2dNative = "DepthwiseConv2dNative",
    t.DepthwiseConv2dNativeBackpropFilter = "DepthwiseConv2dNativeBackpropFilter",
    t.DepthwiseConv2dNativeBackpropInput = "DepthwiseConv2dNativeBackpropInput",
    t.Diag = "Diag",
    t.Div = "Div",
    t.Elu = "Elu",
    t.EluGrad = "EluGrad",
    t.Environment = i,
    t.Equal = "Equal",
    t.Fill = "Fill",
    t.FloorDiv = "FloorDiv",
    t.FromPixels = "FromPixels",
    t.FusedBatchNorm = "FusedBatchNorm",
    t.GatherNd = "GatherNd",
    t.Greater = "Greater",
    t.GreaterEqual = "GreaterEqual",
    t.Identity = "Identity",
    t.Imag = "Imag",
    t.KernelBackend = As,
    t.LRN = "LRN",
    t.LRNBackprop = "LRNBackprop",
    t.Less = "Less",
    t.LessEqual = "LessEqual",
    t.Max = "Max",
    t.MaxPool = "MaxPool",
    t.MaxPool3D = "MaxPool3D",
    t.MaxPool3DBackprop = "MaxPool3DBackprop",
    t.MaxPoolBackprop = "MaxPoolBackprop",
    t.MaxPoolWithArgmax = "MaxPoolWithArgmax",
    t.Maximum = "Maximum",
    t.Minimum = "Minimum",
    t.Mod = "Mod",
    t.MomentumOptimizer = xs,
    t.Multiply = "Multiply",
    t.NonMaxSuppressionV3 = "NonMaxSuppressionV3",
    t.NonMaxSuppressionV5 = "NonMaxSuppressionV5",
    t.NotEqual = "NotEqual",
    t.OneHot = "OneHot",
    t.Optimizer = ms,
    t.PadV2 = "PadV2",
    t.Pool = "Pool",
    t.Pow = "Pow",
    t.Prelu = "Prelu",
    t.RMSPropOptimizer = Es,
    t.Real = "Real",
    t.Relu = "Relu",
    t.Relu6 = "Relu6",
    t.SGDOptimizer = ks,
    t.SelectV2 = "SelectV2",
    t.Selu = "Selu",
    t.SpaceToBatchND = "SpaceToBatchND",
    t.SplitV = "SplitV",
    t.Square = "Square",
    t.SquaredDifference = "SquaredDifference",
    t.Sub = "Sub",
    t.Tensor = lt,
    t.TensorBuffer = ut,
    t.Tile = "Tile",
    t.Transpose = "Transpose",
    t.Variable = mt,
    t.abs = We,
    t.acos = Ke,
    t.acosh = Ge,
    t.add = zt,
    t.addN = Ma,
    t.addStrict = uu,
    t.all = Ae,
    t.any = _e,
    t.argMax = Te,
    t.argMin = Be,
    t.asin = Ue,
    t.asinh = He,
    t.atan = Ve,
    t.atan2 = Aa,
    t.atanh = je,
    t.avgPool = _a,
    t.avgPool3d = Ta,
    t.backend = function() {
        return Dt.backend
    }
    ,
    t.backend_util = Ns,
    t.basicLSTMCell = bu,
    t.batchNorm = Ca,
    t.batchNorm2d = Ra,
    t.batchNorm3d = Pa,
    t.batchNorm4d = qa,
    t.batchToSpaceND = Ur,
    t.booleanMaskAsync = Ji,
    t.broadcastTo = La,
    t.browser = la,
    t.buffer = ue,
    t.cast = ce,
    t.ceil = $e,
    t.clipByValue = Je,
    t.clone = za,
    t.complex = Wt,
    t.concat = ie,
    t.concat1d = Oa,
    t.concat2d = Wa,
    t.concat3d = Ka,
    t.concat4d = Ga,
    t.conv1d = Ua,
    t.conv2d = Jn,
    t.conv2dTranspose = Ha,
    t.conv3d = Va,
    t.conv3dTranspose = ja,
    t.cos = Ye,
    t.cosh = Xe,
    t.cumsum = er,
    t.customGrad = we,
    t.deprecationWarn = Da,
    t.depthToSpace = $a,
    t.depthwiseConv2d = Ja,
    t.device_util = Nt,
    t.diag = Ya,
    t.disableDeprecationWarnings = function() {
        s().set("DEPRECATION_WARNINGS_ENABLED", !1),
        console.warn("TensorFlow.js deprecation warnings have been disabled.")
    }
    ,
    t.dispose = Na,
    t.disposeVariables = function() {
        Dt.disposeVariables()
    }
    ,
    t.div = ge,
    t.divNoNan = Xa,
    t.divStrict = su,
    t.dot = Za,
    t.dropout = Tu,
    t.elu = Qa,
    t.enableDebugMode = function() {
        s().set("DEBUG", !0)
    }
    ,
    t.enableProdMode = function() {
        s().set("PROD", !0)
    }
    ,
    t.engine = function() {
        return Dt
    }
    ,
    t.env = s,
    t.equal = ti,
    t.equalStrict = eu,
    t.erf = Ze,
    t.exp = Qe,
    t.expandDims = le,
    t.expm1 = tn,
    t.eye = ei,
    t.fft = Du,
    t.fill = ni,
    t.findBackend = function(t) {
        return Dt.findBackend(t)
    }
    ,
    t.findBackendFactory = function(t) {
        return Dt.findBackendFactory(t)
    }
    ,
    t.floor = en,
    t.floorDiv = me,
    t.frame = Pu,
    t.fused = ds,
    t.gather = ji,
    t.gatherND = _u,
    t.gather_util = pa,
    t.getBackend = function() {
        return Dt.backendName
    }
    ,
    t.getGradient = d,
    t.getKernel = h,
    t.getKernelsForBackend = v,
    t.grad = function(t) {
        return w(G(t), (function() {
            return "The f passed in grad(f) must be a function"
        }
        )),
        function(e, n) {
            var r = Rt(e, "x", "tf.grad", null)
              , o = null != n ? Rt(n, "dy", "tf.grad") : null;
            return Dt.tidy((function() {
                var e = Dt.gradients((function() {
                    return t(r)
                }
                ), [r], o)
                  , n = e.value
                  , a = e.grads;
                return null != o && k(n.shape, o.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),
                ke(a),
                a[0]
            }
            ))
        }
    }
    ,
    t.grads = function(t) {
        return w(G(t), (function() {
            return "The f passed in grads(f) must be a function"
        }
        )),
        function(e, n) {
            w(Array.isArray(e), (function() {
                return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"
            }
            ));
            var r = Pt(e, "args", "tf.grads", null)
              , o = null != n ? Rt(n, "dy", "tf.grads") : null;
            return Dt.tidy((function() {
                var e = Dt.gradients((function() {
                    return t.apply(void 0, r)
                }
                ), r, o)
                  , n = e.value
                  , a = e.grads;
                return null != o && k(n.shape, o.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
                ke(a),
                a
            }
            ))
        }
    }
    ,
    t.greater = Sr,
    t.greaterEqual = gr,
    t.greaterEqualStrict = nu,
    t.greaterStrict = ru,
    t.hammingWindow = Ru,
    t.hannWindow = Cu,
    t.ifft = Iu,
    t.imag = Kt,
    t.image = cs,
    t.inTopKAsync = Ou,
    t.io = ia,
    t.irfft = Fu,
    t.isFinite = dn,
    t.isInf = hn,
    t.isNaN = pn,
    t.keep = Fa,
    t.kernel_impls = Fs,
    t.leakyRelu = oi,
    t.less = yr,
    t.lessEqual = Dr,
    t.lessEqualStrict = ou,
    t.lessStrict = au,
    t.linalg = Zu,
    t.linspace = ne,
    t.localResponseNormalization = ai,
    t.log = nn,
    t.log1p = rn,
    t.logSigmoid = on,
    t.logSoftmax = gu,
    t.logSumExp = Ce,
    t.logicalAnd = Tr,
    t.logicalNot = Br,
    t.logicalOr = Cr,
    t.logicalXor = Rr,
    t.losses = Yu,
    t.matMul = Ln,
    t.math = ca,
    t.max = ii,
    t.maxPool = ui,
    t.maxPool3d = si,
    t.maxPoolWithArgmax = ci,
    t.maximum = ri,
    t.maximumStrict = cu,
    t.mean = Re,
    t.memory = function() {
        return Dt.memory()
    }
    ,
    t.min = Pe,
    t.minimum = li,
    t.minimumStrict = lu,
    t.mod = fi,
    t.modStrict = fu,
    t.moments = qe,
    t.movingAverage = ku,
    t.mul = ye,
    t.mulStrict = pu,
    t.multiRNNCell = wu,
    t.multinomial = pi,
    t.neg = an,
    t.nextFrame = function() {
        return new Promise((function(t) {
            return Is((function() {
                return t()
            }
            ))
        }
        ))
    }
    ,
    t.norm = yu,
    t.notEqual = hi,
    t.notEqualStrict = iu,
    t.oneHot = ua,
    t.ones = te,
    t.onesLike = oe,
    t.op = qt,
    t.outerProduct = di,
    t.pad = Yr,
    t.pad1d = vi,
    t.pad2d = mi,
    t.pad3d = gi,
    t.pad4d = yi,
    t.pool = bi,
    t.pow = zr,
    t.powStrict = hu,
    t.prelu = wi,
    t.print = se,
    t.prod = Le,
    t.profile = function(t) {
        return Dt.profile(t)
    }
    ,
    t.rand = ki,
    t.randomGamma = Ci,
    t.randomNormal = Ri,
    t.randomUniform = Pi,
    t.range = re,
    t.ready = function() {
        return Dt.ready()
    }
    ,
    t.real = Gt,
    t.reciprocal = un,
    t.registerBackend = function(t, e, n) {
        return void 0 === n && (n = 1),
        Dt.registerBackend(t, e, n)
    }
    ,
    t.registerGradient = m,
    t.registerKernel = function(t) {
        var e = t.kernelName
          , n = t.backendName
          , r = g(e, n);
        f.has(r) && console.warn("The kernel '" + e + "' for backend '" + n + "' is already registered"),
        f.set(r, t)
    }
    ,
    t.relu = qi,
    t.relu6 = zi,
    t.removeBackend = function(t) {
        Dt.removeBackend(t)
    }
    ,
    t.reshape = fe,
    t.reverse = Yi,
    t.reverse1d = Xi,
    t.reverse2d = Zi,
    t.reverse3d = Qi,
    t.reverse4d = tu,
    t.rfft = Nu,
    t.round = sn,
    t.rsqrt = cn,
    t.scalar = Vt,
    t.scatterND = Su,
    t.scatter_util = ma,
    t.selu = Li,
    t.separableConv2d = Oi,
    t.serialization = wa,
    t.setBackend = function(t) {
        return Dt.setBackend(t)
    }
    ,
    t.setPlatform = function(t, e) {
        s().setPlatform(t, e)
    }
    ,
    t.setdiff1dAsync = ve,
    t.sigmoid = ln,
    t.sign = fn,
    t.signal = zu,
    t.sin = vn,
    t.sinh = mn,
    t.slice = uo,
    t.slice1d = so,
    t.slice2d = co,
    t.slice3d = lo,
    t.slice4d = fo,
    t.slice_util = io,
    t.softmax = mu,
    t.softplus = gn,
    t.spaceToBatchND = Wn,
    t.sparseToDense = Au,
    t.spectral = Mu,
    t.split = Un,
    t.sqrt = yn,
    t.square = Oe,
    t.squaredDifference = Wi,
    t.squaredDifferenceStrict = du,
    t.squeeze = pe,
    t.stack = he,
    t.step = bn,
    t.stft = qu,
    t.stridedSlice = xu,
    t.sub = cr,
    t.subStrict = vu,
    t.sum = ze,
    t.sumOutType = function(t) {
        return yt(t, "int32")
    }
    ,
    t.tan = wn,
    t.tanh = kn,
    t.tensor = Ut,
    t.tensor1d = jt,
    t.tensor2d = $t,
    t.tensor3d = Jt,
    t.tensor4d = Yt,
    t.tensor5d = Xt,
    t.tensor6d = Zt,
    t.tensor_util = xt,
    t.test_util = Sa,
    t.tidy = Ia,
    t.tile = lr,
    t.time = function(t) {
        return Dt.time(t)
    }
    ,
    t.topk = Eu,
    t.train = Ds,
    t.transpose = tr,
    t.truncatedNormal = Ki,
    t.unregisterGradient = function(t) {
        if (!p.has(t))
            throw new Error("The gradient '" + t + "' for backend is not registered");
        p.delete(t)
    }
    ,
    t.unregisterKernel = function(t, e) {
        var n = g(t, e);
        if (!f.has(n))
            throw new Error("The kernel '" + t + "' for backend '" + e + "' is not registered");
        f.delete(n)
    }
    ,
    t.unsortedSegmentSum = $i,
    t.unstack = de,
    t.upcastType = yt,
    t.util = tt,
    t.valueAndGrad = function(t) {
        return w(G(t), (function() {
            return "The f passed in valueAndGrad(f) must be a function"
        }
        )),
        function(e, n) {
            w(e instanceof lt, (function() {
                return "The x passed in valueAndGrad(f)(x) must be a tensor"
            }
            )),
            w(null == n || n instanceof lt, (function() {
                return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"
            }
            ));
            var r = Dt.gradients((function() {
                return t(e)
            }
            ), [e], n)
              , o = r.grads
              , a = r.value;
            return ke(o),
            {
                grad: o[0],
                value: a
            }
        }
    }
    ,
    t.valueAndGrads = function(t) {
        return w(G(t), (function() {
            return "The f passed in valueAndGrads(f) must be a function"
        }
        )),
        function(e, n) {
            w(Array.isArray(e) && e.every((function(t) {
                return t instanceof lt
            }
            )), (function() {
                return "The args passed in valueAndGrads(f)(args) must be array of tensors"
            }
            )),
            w(null == n || n instanceof lt, (function() {
                return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"
            }
            ));
            var r = Dt.gradients((function() {
                return t.apply(void 0, e)
            }
            ), e, n);
            return null != n && k(r.value.shape, n.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
            ke(r.grads),
            r
        }
    }
    ,
    t.variable = Qt,
    t.variableGrads = be,
    t.version_core = "2.0.1",
    t.where = Pr,
    t.whereAsync = qr,
    t.zeros = ee,
    t.zerosLike = ae,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=tf-core.min.js.map
