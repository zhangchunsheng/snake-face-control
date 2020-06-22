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
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core"], e) : e((t = t || self).tf = t.tf || {}, t.tf)
}(this, (function(t, e) {
    "use strict";
    var a, n, r = Object.assign || function(t) {
        for (var e, a = 1, n = arguments.length; a < n; a++)
            for (var r in e = arguments[a])
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t
    }
    ;
    function s(t, e, a, n) {
        return new (a || (a = Promise))((function(r, s) {
            function o(t) {
                try {
                    i(n.next(t))
                } catch (t) {
                    s(t)
                }
            }
            function p(t) {
                try {
                    i(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }
            function i(t) {
                t.done ? r(t.value) : new a((function(e) {
                    e(t.value)
                }
                )).then(o, p)
            }
            i((n = n.apply(t, e || [])).next())
        }
        ))
    }
    function o(t, e) {
        var a, n, r, s, o = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: p(0),
            throw: p(1),
            return: p(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }
        ),
        s;
        function p(s) {
            return function(p) {
                return function(s) {
                    if (a)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (a = 1,
                            n && (r = n[2 & s[0] ? "return" : s[0] ? "throw" : "next"]) && !(r = r.call(n, s[1])).done)
                                return r;
                            switch (n = 0,
                            r && (s = [0, r.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                n = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < r[1]) {
                                    o.label = r[1],
                                    r = s;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2],
                                    o.ops.push(s);
                                    break
                                }
                                r[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            s = e.call(t, o)
                        } catch (t) {
                            s = [6, t],
                            n = 0
                        } finally {
                            a = r = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, p])
            }
        }
    }
    !function(t) {
        t[t.DT_INVALID = 0] = "DT_INVALID",
        t[t.DT_FLOAT = 1] = "DT_FLOAT",
        t[t.DT_DOUBLE = 2] = "DT_DOUBLE",
        t[t.DT_INT32 = 3] = "DT_INT32",
        t[t.DT_UINT8 = 4] = "DT_UINT8",
        t[t.DT_INT16 = 5] = "DT_INT16",
        t[t.DT_INT8 = 6] = "DT_INT8",
        t[t.DT_STRING = 7] = "DT_STRING",
        t[t.DT_COMPLEX64 = 8] = "DT_COMPLEX64",
        t[t.DT_INT64 = 9] = "DT_INT64",
        t[t.DT_BOOL = 10] = "DT_BOOL",
        t[t.DT_QINT8 = 11] = "DT_QINT8",
        t[t.DT_QUINT8 = 12] = "DT_QUINT8",
        t[t.DT_QINT32 = 13] = "DT_QINT32",
        t[t.DT_BFLOAT16 = 14] = "DT_BFLOAT16",
        t[t.DT_FLOAT_REF = 101] = "DT_FLOAT_REF",
        t[t.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF",
        t[t.DT_INT32_REF = 103] = "DT_INT32_REF",
        t[t.DT_UINT8_REF = 104] = "DT_UINT8_REF",
        t[t.DT_INT16_REF = 105] = "DT_INT16_REF",
        t[t.DT_INT8_REF = 106] = "DT_INT8_REF",
        t[t.DT_STRING_REF = 107] = "DT_STRING_REF",
        t[t.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF",
        t[t.DT_INT64_REF = 109] = "DT_INT64_REF",
        t[t.DT_BOOL_REF = 110] = "DT_BOOL_REF",
        t[t.DT_QINT8_REF = 111] = "DT_QINT8_REF",
        t[t.DT_QUINT8_REF = 112] = "DT_QUINT8_REF",
        t[t.DT_QINT32_REF = 113] = "DT_QINT32_REF",
        t[t.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF"
    }(a || (a = {})),
    function(t) {
        !function(t) {
            t[t.LEGACY = 0] = "LEGACY",
            t[t.V1 = 1] = "V1",
            t[t.V2 = 2] = "V2"
        }(t.CheckpointFormatVersion || (t.CheckpointFormatVersion = {}))
    }(n || (n = {}));
    var p = {};
    function i(t) {
        return p[t]
    }
    function u(t, e, a, n) {
        var r = e.inputParams[t];
        if (r && void 0 !== r.inputIndexStart) {
            var s = r.inputIndexStart
              , o = 0 === r.inputIndexEnd ? void 0 : void 0 === r.inputIndexEnd ? s + 1 : r.inputIndexEnd;
            if ("tensor" === r.type)
                return m(e.inputNames[r.inputIndexStart], a, n);
            if ("tensors" === r.type)
                return e.inputNames.slice(s, o).map((function(t) {
                    return m(t, a, n)
                }
                ));
            var p = Array.prototype.slice.call(m(e.inputNames.slice(s)[0], a, n).dataSync());
            return "number" === r.type ? p[0] : p
        }
        var i = e.attrParams[t];
        return i && i.value
    }
    function m(t, e, a) {
        var n = y(t)
          , r = n[0]
          , s = n[1]
          , o = a.currentContextIds.find((function(t) {
            return !!e[d(r, t)]
        }
        ));
        return void 0 !== o ? e[d(r, o)][s] : void 0
    }
    function c(t, e) {
        var a = y(t)
          , n = a[0]
          , r = a[1];
        return [d(n, e && e.currentContextId), r]
    }
    function d(t, e) {
        return e ? t + "-" + e : t
    }
    function y(t) {
        var e = t.split(":");
        return 1 === e.length ? [t, 0] : [e[0], Number(e[e.length - 1])]
    }
    function l(t, e) {
        for (var a = [], n = 0; n < t.length; n += e)
            a.push(t.slice(n, n + e));
        return a
    }
    var f = {
        __proto__: null,
        json: [{
            tfOpName: "Add",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AddV2",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AddN",
            category: "arithmetic",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }]
        }, {
            tfOpName: "BiasAdd",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sub",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "RealDiv",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Div",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "DivNoNan",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "FloorDiv",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Mul",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Maximum",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }]
        }, {
            tfOpName: "Minimum",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }]
        }, {
            tfOpName: "Pow",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "SquaredDifference",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Mod",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "FloorMod",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , h = {
        __proto__: null,
        json: [{
            tfOpName: "Abs",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acos",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asin",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan2",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "y",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Ceil",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ClipByValue",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "clip_value_min",
                name: "clipValueMin",
                type: "number"
            }, {
                tfName: "clip_value_max",
                name: "clipValueMax",
                type: "number"
            }]
        }, {
            tfOpName: "Complex",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "real",
                type: "tensor"
            }, {
                start: 1,
                name: "imag",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ComplexAbs",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Cos",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Cosh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Elu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Exp",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Floor",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Imag",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Neg",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Real",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Prelu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "alpha",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu6",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "clipValueMin",
                name: "clipValueMin",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "clipValueMax",
                name: "clipValueMax",
                type: "number",
                defaultValue: 6
            }]
        }, {
            tfOpName: "Selu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sigmoid",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sin",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sinh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sqrt",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Rsqrt",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Square",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tan",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tanh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sign",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Round",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Expm1",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log1p",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reciprocal",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Softplus",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asinh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acosh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atanh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Erf",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Prod",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axes",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool",
                notSupported: !0
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LeakyRelu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: .2
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , N = {
        __proto__: null,
        json: [{
            tfOpName: "LoopCond",
            category: "control",
            inputs: [{
                start: 0,
                name: "pred",
                type: "tensor"
            }]
        }, {
            tfOpName: "Switch",
            category: "control",
            inputs: [{
                start: 0,
                name: "data",
                type: "tensor"
            }, {
                start: 1,
                name: "pred",
                type: "tensor"
            }]
        }, {
            tfOpName: "Merge",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }]
        }, {
            tfOpName: "Enter",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "frame_name",
                name: "frameName",
                type: "string"
            }, {
                tfName: "is_constant",
                name: "isConstant",
                type: "bool"
            }]
        }, {
            tfOpName: "Exit",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "NextIteration",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "size",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape",
                name: "elementShape",
                type: "shape"
            }, {
                tfName: "dynamic_size",
                name: "dynamicSize",
                type: "bool"
            }, {
                tfName: "clear_after_read",
                name: "clearAfterRead",
                type: "bool"
            }, {
                tfName: "identical_element_shapes",
                name: "identicalElementShapes",
                type: "bool"
            }, {
                tfName: "tensor_array_name",
                name: "name",
                type: "string"
            }]
        }, {
            tfOpName: "TensorArrayWriteV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "tensor",
                type: "tensor"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayReadV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayGatherV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape",
                name: "elementShape",
                type: "shape"
            }]
        }, {
            tfOpName: "TensorArrayScatterV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "tensor",
                type: "tensor"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorArrayConcatV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape_except0",
                name: "elementShapeExcept0",
                type: "shape",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArraySplitV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "tensor",
                type: "tensor"
            }, {
                start: 2,
                name: "lengths",
                type: "number[]"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorArraySizeV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }, {
                start: 1,
                name: "flowIn",
                type: "number"
            }]
        }, {
            tfOpName: "TensorArrayCloseV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "number"
            }]
        }, {
            tfOpName: "StatelessIf",
            category: "control",
            inputs: [{
                start: 0,
                name: "cond",
                type: "tensor"
            }, {
                start: 1,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "then_branch",
                name: "thenBranch",
                type: "func"
            }, {
                tfName: "else_branch",
                name: "elseBranch",
                type: "func"
            }]
        }, {
            tfOpName: "If",
            category: "control",
            inputs: [{
                start: 0,
                name: "cond",
                type: "tensor"
            }, {
                start: 1,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "then_branch",
                name: "thenBranch",
                type: "func"
            }, {
                tfName: "else_branch",
                name: "elseBranch",
                type: "func"
            }]
        }, {
            tfOpName: "StatelessWhile",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "cond",
                name: "cond",
                type: "func"
            }, {
                tfName: "body",
                name: "body",
                type: "func"
            }]
        }, {
            tfOpName: "While",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "cond",
                name: "cond",
                type: "func"
            }, {
                tfName: "body",
                name: "body",
                type: "func"
            }]
        }]
    }
      , g = {
        __proto__: null,
        json: [{
            tfOpName: "AvgPool",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPool",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPoolWithArgmax",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "include_batch_in_index",
                name: "includeBatchInIndex",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AvgPool3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPool3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Conv1D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "stride",
                name: "stride",
                type: "number"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NWC"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "dilation",
                name: "dilation",
                type: "number",
                defaultValue: 1
            }]
        }, {
            tfOpName: "Conv2D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "useCudnnOnGpu",
                name: "useCudnnOnGpu",
                type: "bool"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "_FusedConv2D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "use_cudnn_on_gpu",
                name: "useCudnnOnGpu",
                type: "bool",
                defaultValue: !0
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1]
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }, {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4
            }]
        }, {
            tfOpName: "Conv2DBackpropInput",
            category: "convolution",
            inputs: [{
                start: 2,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 0,
                name: "outputShape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }]
        }, {
            tfOpName: "DepthwiseConv2d",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "DepthwiseConv2dNative",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "FusedDepthwiseConv2dNative",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1]
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }]
        }, {
            tfOpName: "Conv3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }]
    }
      , b = {
        __proto__: null,
        json: [{
            tfOpName: "Fill",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }, {
                start: 1,
                name: "value",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "LinSpace",
            category: "creation",
            inputs: [{
                start: 0,
                name: "start",
                type: "number"
            }, {
                start: 1,
                name: "stop",
                type: "number"
            }, {
                start: 2,
                name: "num",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "OneHot",
            category: "creation",
            inputs: [{
                start: 0,
                name: "indices",
                type: "tensor"
            }, {
                start: 1,
                name: "depth",
                type: "number"
            }, {
                start: 2,
                name: "onValue",
                type: "number",
                defaultValue: 1
            }, {
                start: 3,
                name: "offValue",
                type: "number",
                defaultValue: 0
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                notSupported: !0
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Ones",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "OnesLike",
            category: "creation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "RandomUniform",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "minval",
                name: "minval",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "maxval",
                name: "maxval",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "seed",
                name: "seed",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {
                tfName: "T",
                name: "T",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "Range",
            category: "creation",
            inputs: [{
                start: 0,
                name: "start",
                type: "number"
            }, {
                start: 1,
                name: "stop",
                type: "number"
            }, {
                start: 2,
                name: "step",
                type: "number",
                defaultValue: 0
            }],
            attrs: [{
                tfName: "Tidx",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TruncatedNormal",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "means",
                name: "mean",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "stddev",
                name: "stdDev",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "seed",
                name: "seed",
                type: "number"
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "T",
                name: "T",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "Zeros",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "ZerosLike",
            category: "creation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Multinomial",
            category: "creation",
            inputs: [{
                start: 0,
                name: "logits",
                type: "tensor"
            }, {
                start: 1,
                name: "numSamples",
                type: "number"
            }],
            attrs: [{
                tfName: "seed",
                name: "seed",
                type: "number"
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "output_dtype",
                name: "output_dtype",
                type: "dtype"
            }]
        }]
    }
      , x = {
        __proto__: null,
        json: [{
            tfOpName: "NonMaxSuppressionV2",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV3",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }, {
                start: 4,
                name: "scoreThreshold",
                type: "number"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV5",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }, {
                start: 4,
                name: "scoreThreshold",
                type: "number"
            }, {
                start: 5,
                name: "softNmsSigma",
                type: "number"
            }]
        }, {
            tfOpName: "Where",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ListDiff",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "y",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , v = {
        __proto__: null,
        json: [{
            tfOpName: "TopKV2",
            category: "evaluation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "k",
                type: "number"
            }],
            attrs: [{
                tfName: "sorted",
                name: "sorted",
                type: "bool"
            }]
        }]
    }
      , T = {
        __proto__: null,
        json: [{
            tfOpName: "PlaceholderWithDefault",
            category: "graph",
            inputs: [{
                start: 0,
                name: "default",
                type: "tensor"
            }],
            attrs: [{
                tfName: "shape",
                name: "shape",
                type: "shape"
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Placeholder",
            category: "graph",
            attrs: [{
                tfName: "shape",
                name: "shape",
                type: "shape"
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Const",
            category: "graph"
        }, {
            tfOpName: "Identity",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "IdentityN",
            category: "graph",
            inputs: [{
                start: 0,
                end: 0,
                name: "x",
                type: "tensors"
            }]
        }, {
            tfOpName: "Snapshot",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Rank",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Size",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Shape",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "ShapeN",
            category: "graph",
            inputs: [{
                start: 0,
                end: 0,
                name: "x",
                type: "tensors"
            }]
        }, {
            tfOpName: "Print",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "data",
                type: "tensors"
            }],
            attrs: [{
                tfName: "message",
                name: "message",
                type: "string"
            }, {
                tfName: "first_n",
                name: "firstN",
                type: "number",
                notSupported: !0
            }, {
                tfName: "summarize",
                name: "summarize",
                type: "number",
                defaultValue: 3
            }]
        }, {
            tfOpName: "NoOp",
            category: "graph",
            inputs: []
        }, {
            tfOpName: "StopGradient",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "FakeQuantWithMinMaxVars",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "min",
                name: "min",
                type: "number"
            }, {
                tfName: "max",
                name: "max",
                type: "number"
            }]
        }]
    }
      , _ = {
        __proto__: null,
        json: [{
            tfOpName: "ResizeBilinear",
            category: "image",
            inputs: [{
                start: 0,
                name: "images",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number[]"
            }],
            attrs: [{
                tfName: "align_corners",
                name: "alignCorners",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ResizeNearestNeighbor",
            category: "image",
            inputs: [{
                start: 0,
                name: "images",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number[]"
            }],
            attrs: [{
                tfName: "align_corners",
                name: "alignCorners",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "CropAndResize",
            category: "image",
            inputs: [{
                start: 0,
                name: "image",
                type: "tensor"
            }, {
                start: 1,
                name: "boxes",
                type: "tensor"
            }, {
                start: 2,
                name: "boxInd",
                type: "tensor"
            }, {
                start: 3,
                name: "cropSize",
                type: "number[]"
            }],
            attrs: [{
                tfName: "method",
                name: "method",
                type: "string"
            }, {
                tfName: "extrapolation_value",
                name: "extrapolationValue",
                type: "number"
            }]
        }]
    }
      , O = {
        __proto__: null,
        json: [{
            tfOpName: "Equal",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "NotEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Greater",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "GreaterEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Less",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LessEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalAnd",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalNot",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalOr",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Select",
            category: "logical",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }, {
                start: 1,
                name: "a",
                type: "tensor"
            }, {
                start: 2,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "SelectV2",
            category: "logical",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }, {
                start: 1,
                name: "a",
                type: "tensor"
            }, {
                start: 2,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , S = {
        __proto__: null,
        json: [{
            tfOpName: "_FusedMatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }, {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4
            }, {
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "BatchMatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "BatchMatMulV2",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Transpose",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "perm",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , w = {
        __proto__: null,
        json: [{
            tfOpName: "FusedBatchNorm",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "FusedBatchNormV2",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "FusedBatchNormV3",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "LRN",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "depth_radius",
                name: "radius",
                type: "number",
                defaultValue: 5
            }, {
                tfName: "bias",
                name: "bias",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "beta",
                name: "beta",
                type: "number",
                defaultValue: .5
            }]
        }, {
            tfOpName: "Softmax",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "LogSoftmax",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseToDense",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "sparseIndices",
                type: "tensor"
            }, {
                start: 1,
                name: "outputShape",
                type: "number[]"
            }, {
                start: 2,
                name: "sparseValues",
                type: "tensor"
            }, {
                start: 3,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !0,
                notSupported: !0
            }]
        }]
    }
      , A = {
        __proto__: null,
        json: [{
            tfOpName: "Max",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Mean",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Min",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Sum",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "All",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Any",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "ArgMax",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "ArgMin",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Prod",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Cumsum",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "exclusive",
                name: "exclusive",
                type: "bool"
            }, {
                tfName: "reverse",
                name: "reverse",
                type: "bool"
            }]
        }]
    }
      , E = {
        __proto__: null,
        json: [{
            tfOpName: "ConcatV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                end: -1,
                name: "tensors",
                type: "tensors"
            }, {
                start: -1,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "N",
                name: "n",
                type: "number",
                defaultValue: 2
            }]
        }, {
            tfOpName: "Concat",
            category: "slice_join",
            inputs: [{
                start: 1,
                end: 0,
                name: "tensors",
                type: "tensors"
            }, {
                start: 0,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "N",
                name: "n",
                type: "number",
                defaultValue: 2
            }]
        }, {
            tfOpName: "GatherV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }, {
                start: 2,
                name: "axis",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Gather",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reverse",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "dims",
                type: "bool",
                notSupported: !0
            }]
        }, {
            tfOpName: "ReverseV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "Slice",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "begin",
                type: "number[]"
            }, {
                start: 2,
                name: "size",
                type: "number[]"
            }]
        }, {
            tfOpName: "StridedSlice",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "begin",
                type: "number[]"
            }, {
                start: 2,
                name: "end",
                type: "number[]"
            }, {
                start: 3,
                name: "strides",
                type: "number[]"
            }],
            attrs: [{
                tfName: "begin_mask",
                name: "beginMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "end_mask",
                name: "endMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "new_axis_mask",
                name: "newAxisMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "ellipsis_mask",
                name: "ellipsisMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "shrink_axis_mask",
                name: "shrinkAxisMask",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Pack",
            category: "slice_join",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Unpack",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "num",
                name: "num",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }]
        }, {
            tfOpName: "Tile",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "reps",
                type: "number[]"
            }]
        }, {
            tfOpName: "Split",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "axis",
                type: "number",
                defaultValue: 0
            }, {
                start: 1,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "num_split",
                name: "numOrSizeSplits",
                type: "number",
                defaultValue: 1
            }]
        }, {
            tfOpName: "SplitV",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "numOrSizeSplits",
                type: "number[]"
            }, {
                start: 2,
                name: "axis",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "ScatterNd",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "indices",
                type: "tensor"
            }, {
                start: 1,
                name: "values",
                type: "tensor"
            }, {
                start: 2,
                name: "shape",
                type: "number[]"
            }]
        }, {
            tfOpName: "GatherNd",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseToDense",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "sparseIndices",
                type: "tensor"
            }, {
                start: 1,
                name: "outputShape",
                type: "number[]"
            }, {
                start: 2,
                name: "sparseValues",
                type: "tensor"
            }, {
                start: 3,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !1,
                notSupported: !0
            }]
        }]
    }
      , I = {
        __proto__: null,
        json: [{
            tfOpName: "FFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "IFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "RFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "IRFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0
            }]
        }]
    }
      , D = {
        __proto__: null,
        json: [{
            tfOpName: "Cast",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "SrcT",
                name: "sdtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "DstT",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "ExpandDims",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Pad",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "padding",
                type: "number[]"
            }],
            attrs: [{
                tfName: "constant_value",
                name: "constantValue",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "PadV2",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "padding",
                type: "number[]"
            }, {
                start: 2,
                name: "constantValue",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Reshape",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "shape",
                type: "number[]"
            }]
        }, {
            tfOpName: "Squeeze",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "axis",
                tfDeprecatedName: "squeeze_dims",
                name: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "SpaceToBatchND",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "blockShape",
                type: "number[]"
            }, {
                start: 2,
                name: "paddings",
                type: "number[]"
            }]
        }, {
            tfOpName: "BatchToSpaceND",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "blockShape",
                type: "number[]"
            }, {
                start: 2,
                name: "crops",
                type: "number[]"
            }]
        }, {
            tfOpName: "DepthToSpace",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "block_size",
                name: "blockSize",
                type: "number"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string"
            }]
        }, {
            tfOpName: "BroadcastTo",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "shape",
                type: "number[]"
            }],
            attrs: []
        }]
    }
      , V = function() {
        function t() {
            var t = [f, h, N, g, b, x, v, O, _, T, S, w, A, E, I, D]
              , e = [].concat.apply([], t.map((function(t) {
                return t.json
            }
            )));
            this.opMappers = e.reduce((function(t, e) {
                return t[e.tfOpName] = e,
                t
            }
            ), {})
        }
        return Object.defineProperty(t, "Instance", {
            get: function() {
                return this._instance || (this._instance = new this)
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.transformGraph = function(t, e) {
            var a = this;
            void 0 === e && (e = {});
            var n = t.node
              , r = []
              , s = []
              , o = n.reduce((function(t, e) {
                return t[e.name] = a.mapNode(e),
                e.op.startsWith("Placeholder") && r.push(t[e.name]),
                "Const" === e.op && s.push(t[e.name]),
                t
            }
            ), {})
              , p = []
              , i = []
              , u = {}
              , m = {};
            null != e && (u = this.mapSignatureEntries(e.inputs),
            m = this.mapSignatureEntries(e.outputs));
            var d = Object.keys(o);
            d.forEach((function(t) {
                var e = o[t];
                e.inputNames.forEach((function(t) {
                    var a = c(t)[0];
                    e.inputs.push(o[a]),
                    o[a].children.push(e)
                }
                ))
            }
            )),
            0 === Object.keys(m).length ? d.forEach((function(t) {
                var e = o[t];
                0 === e.children.length && i.push(e)
            }
            )) : Object.keys(m).forEach((function(t) {
                var e = c(t)[0]
                  , a = o[e];
                null != a && (a.signatureKey = m[t],
                i.push(a))
            }
            )),
            Object.keys(u).length > 0 ? Object.keys(u).forEach((function(t) {
                var e = c(t)[0]
                  , a = o[e];
                a && (a.signatureKey = u[t],
                p.push(a))
            }
            )) : p = r;
            var y = {};
            return null != t.library && null != t.library.function && (y = t.library.function.reduce((function(t, e) {
                return t[e.signature.name] = a.mapFunction(e),
                t
            }
            ), {})),
            {
                nodes: o,
                inputs: p,
                outputs: i,
                weights: s,
                placeholders: r,
                signature: e,
                functions: y
            }
        }
        ,
        t.prototype.mapSignatureEntries = function(t) {
            return Object.keys(t || {}).reduce((function(e, a) {
                return e[t[a].name] = a,
                e
            }
            ), {})
        }
        ,
        t.prototype.mapNode = function(t) {
            var e = i(t.op) || this.opMappers[t.op] || {};
            null == t.attr && (t.attr = {});
            var a = {
                name: t.name,
                op: t.op,
                category: e.category,
                inputNames: (t.input || []).map((function(t) {
                    return t.startsWith("^") ? t.substr(1) : t
                }
                )),
                inputs: [],
                children: [],
                inputParams: {},
                attrParams: {},
                rawAttrs: t.attr
            };
            return null != e.inputs && (a.inputParams = e.inputs.reduce((function(t, e) {
                return t[e.name] = {
                    type: e.type,
                    inputIndexStart: e.start,
                    inputIndexEnd: e.end
                },
                t
            }
            ), {})),
            null != e.attrs && (a.attrParams = e.attrs.reduce((function(e, a) {
                var n = a.type
                  , r = void 0;
                switch (a.type) {
                case "string":
                    void 0 === (r = k(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = k(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "string[]":
                    void 0 === (r = U(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = U(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "number":
                    void 0 === (r = F(t.attr, a.tfName, a.defaultValue || 0)) && a.tfDeprecatedName && (r = F(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "number[]":
                    void 0 === (r = q(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = q(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "bool":
                    void 0 === (r = C(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = C(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "bool[]":
                    void 0 === (r = G(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = G(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "shape":
                    void 0 === (r = L(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = L(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "shape[]":
                    void 0 === (r = W(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = W(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "dtype":
                    void 0 === (r = j(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = j(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "dtype[]":
                    void 0 === (r = R(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = R(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "func":
                    void 0 === (r = P(t.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (r = P(t.attr, a.tfDeprecatedName, a.defaultValue));
                    break;
                case "tensor":
                case "tensors":
                    break;
                default:
                    throw new Error("Unsupported param type: " + a.type + " for op: " + t.op)
                }
                return e[a.name] = {
                    value: r,
                    type: n
                },
                e
            }
            ), {})),
            a
        }
        ,
        t.prototype.mapFunction = function(t) {
            var e = this
              , a = t.nodeDef
              , n = []
              , r = {};
            null != a && (r = a.reduce((function(t, a) {
                return t[a.name] = e.mapNode(a),
                "Const" === a.op && n.push(t[a.name]),
                t
            }
            ), {}));
            var s = []
              , o = [];
            t.signature.inputArg.forEach((function(t) {
                var e = c(t.name)[0]
                  , a = {
                    name: e,
                    op: "Placeholder",
                    inputs: [],
                    inputNames: [],
                    category: "graph",
                    inputParams: {},
                    attrParams: {
                        dtype: {
                            value: z(t.type),
                            type: "dtype"
                        }
                    },
                    children: []
                };
                a.signatureKey = t.name,
                s.push(a),
                r[e] = a
            }
            )),
            Object.keys(r).forEach((function(t) {
                var e = r[t];
                e.inputNames.forEach((function(t) {
                    var a = c(t)[0];
                    e.inputs.push(r[a]),
                    r[a].children.push(e)
                }
                ))
            }
            ));
            var p = t.ret;
            t.signature.outputArg.forEach((function(t) {
                var e = c(p[t.name])
                  , a = e[0]
                  , n = e[1]
                  , s = r[a];
                null != s && (s.defaultOutput = n,
                o.push(s))
            }
            ));
            var i = this.mapArgsToSignature(t);
            return {
                nodes: r,
                inputs: s,
                outputs: o,
                weights: n,
                placeholders: [],
                signature: i
            }
        }
        ,
        t.prototype.mapArgsToSignature = function(t) {
            var e = this;
            return {
                methodName: t.signature.name,
                inputs: t.signature.inputArg.reduce((function(t, a) {
                    return t[a.name] = e.mapArgToTensorInfo(a),
                    t
                }
                ), {}),
                outputs: t.signature.outputArg.reduce((function(a, n) {
                    return a[n.name] = e.mapArgToTensorInfo(n, t.ret),
                    a
                }
                ), {})
            }
        }
        ,
        t.prototype.mapArgToTensorInfo = function(t, e) {
            var a = t.name;
            return null != e && (a = e[a]),
            {
                name: a,
                dtype: t.type
            }
        }
        ,
        t
    }();
    function M(t, a) {
        var n = Array.isArray(t) ? String.fromCharCode.apply(null, t) : function(t) {
            var a = e.env().global;
            if (void 0 !== a.atob)
                return a.atob(t);
            if ("undefined" != typeof Buffer)
                return new Buffer(t,"base64").toString();
            throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")
        }(t);
        return a ? n : n.toLowerCase()
    }
    function k(t, e, a, n) {
        void 0 === n && (n = !1);
        var r = t[e];
        return null != r ? M(r.s, n) : a
    }
    function C(t, e, a) {
        var n = t[e];
        return n ? n.b : a
    }
    function F(t, e, a) {
        var n = t[e] || {}
          , r = null != n.i ? n.i : null != n.f ? n.f : a;
        return "number" == typeof r ? r : parseInt(r, 10)
    }
    function z(t) {
        switch ("string" == typeof t && (t = a[t]),
        t) {
        case a.DT_FLOAT:
            return "float32";
        case a.DT_INT32:
        case a.DT_INT64:
        case a.DT_INT8:
        case a.DT_UINT8:
            return "int32";
        case a.DT_BOOL:
            return "bool";
        case a.DT_DOUBLE:
            return "float32";
        case a.DT_STRING:
            return "string";
        default:
            return null
        }
    }
    function P(t, e, a) {
        var n = t[e];
        return n && n.func ? n.func.name : a
    }
    function j(t, e, a) {
        var n = t[e];
        return n && n.type ? z(n.type) : a
    }
    function R(t, e, a) {
        var n = t[e];
        return n && n.list && n.list.type ? n.list.type.map((function(t) {
            return z(t)
        }
        )) : a
    }
    function B(t) {
        if (!t.unknownRank)
            return null != t.dim ? t.dim.map((function(t) {
                return "number" == typeof t.size ? t.size : parseInt(t.size, 10)
            }
            )) : []
    }
    function L(t, e, a) {
        var n = t[e];
        return n && n.shape ? B(n.shape) : a
    }
    function q(t, e, a) {
        var n = t[e];
        return n ? ((n.list.f && n.list.f.length ? n.list.f : n.list.i) || []).map((function(t) {
            return "number" == typeof t ? t : parseInt(t, 10)
        }
        )) : a
    }
    function U(t, e, a, n) {
        void 0 === n && (n = !1);
        var r = t[e];
        return r && r.list && r.list.s ? r.list.s.map((function(t) {
            return M(t, n)
        }
        )) : a
    }
    function W(t, e, a) {
        var n = t[e];
        return n && n.list && n.list.shape ? n.list.shape.map((function(t) {
            return B(t)
        }
        )) : a
    }
    function G(t, e, a) {
        var n = t[e];
        return n && n.list && n.list.b ? n.list.b : a
    }
    var H = function() {
        function t(t, e, a) {
            var n = this;
            this.node = t,
            this.tensorMap = e,
            this.context = a,
            this.inputs = [],
            this.attrs = {},
            this.inputs = t.inputNames.map((function(t) {
                return n.getInput(t)
            }
            )),
            null != t.rawAttrs && (this.attrs = Object.keys(t.rawAttrs).reduce((function(t, e) {
                return t[e] = n.getAttr(e),
                t
            }
            ), {}))
        }
        return t.prototype.getInput = function(t) {
            return m(t, this.tensorMap, this.context)
        }
        ,
        t.prototype.getAttr = function(t, e) {
            var a = this.node.rawAttrs[t];
            if (null != a.tensor)
                return m(t, this.tensorMap, this.context);
            if (null != a.i || null != a.f)
                return F(this.node.rawAttrs, t, e);
            if (null != a.s)
                return k(this.node.rawAttrs, t, e);
            if (null != a.b)
                return C(this.node.rawAttrs, t, e);
            if (null != a.shape)
                return L(this.node.rawAttrs, t, e);
            if (null != a.type)
                return j(this.node.rawAttrs, t, e);
            if (null != a.list) {
                if (null != a.list.i || null != a.list.f)
                    return q(this.node.rawAttrs, t, e);
                if (null != a.list.s)
                    return U(this.node.rawAttrs, t, e);
                if (null != a.list.shape)
                    return W(this.node.rawAttrs, t, e);
                if (null != a.list.b)
                    return G(this.node.rawAttrs, t, e);
                if (null != a.list.type)
                    return R(this.node.rawAttrs, t, e)
            }
            return e
        }
        ,
        t
    }();
    function Q(t, a, n) {
        void 0 === n && (n = ""),
        e.util.assert(function(t, e) {
            if (t.length !== e.length)
                return !1;
            for (var a = 0; a < t.length; a++)
                if (-1 !== t[a] && -1 !== e[a] && t[a] !== e[a])
                    return !1;
            return !0
        }(t, a), (function() {
            return n + " Shapes " + t + " and " + a + " must match"
        }
        ))
    }
    var K = function() {
        function t(e, a, n, r, s, o, p) {
            this.name = e,
            this.dtype = a,
            this.maxSize = n,
            this.elementShape = r,
            this.identicalElementShapes = s,
            this.dynamicSize = o,
            this.clearAfterRead = p,
            this.tensors = [],
            this.closed_ = !1,
            this.id = t.nextId++
        }
        return Object.defineProperty(t.prototype, "closed", {
            get: function() {
                return this.closed_
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.clearAndClose = function() {
            this.tensors.forEach((function(t) {
                return t.tensor.dispose()
            }
            )),
            this.tensors = [],
            this.closed_ = !0
        }
        ,
        t.prototype.size = function() {
            return this.tensors.length
        }
        ,
        t.prototype.read = function(t) {
            if (this.closed_)
                throw new Error("TensorArray " + this.name + " has already been closed.");
            if (t < 0 || t >= this.size())
                throw new Error("Tried to read from index " + t + ", but array size is: " + this.size());
            var e = this.tensors[t];
            if (e.cleared)
                throw new Error("TensorArray " + this.name + ": Could not read index " + t + " twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");
            return this.clearAfterRead && (e.cleared = !0),
            e.read = !0,
            e.tensor
        }
        ,
        t.prototype.readMany = function(t) {
            var e = this;
            return t.map((function(t) {
                return e.read(t)
            }
            ))
        }
        ,
        t.prototype.write = function(t, e) {
            if (this.closed_)
                throw new Error("TensorArray " + this.name + " has already been closed.");
            if (t < 0 || !this.dynamicSize && t >= this.maxSize)
                throw new Error("Tried to write to index " + t + ", but array is not resizeable and size is: " + this.maxSize);
            var a = this.tensors[t] || {};
            if (e.dtype !== this.dtype)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + t + ",\n          because the value dtype is " + e.dtype + ", but TensorArray dtype is " + this.dtype + ".");
            if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (this.elementShape = e.shape),
            Q(this.elementShape, e.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + t + "."),
            a && a.read)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + t + ", because it has already been read.");
            if (a && a.written)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + t + ", because it has already been written.");
            a.tensor = e,
            a.written = !0,
            this.tensors[t] = a
        }
        ,
        t.prototype.writeMany = function(t, e) {
            var a = this;
            if (t.length !== e.length)
                throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + t.length + " is not the same as tensors size: " + e.length + ".");
            t.forEach((function(t, n) {
                return a.write(t, e[n])
            }
            ))
        }
        ,
        t.prototype.gather = function(t, a) {
            if (a && a !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + a);
            if (t)
                t = t.slice(0, this.size());
            else {
                t = [];
                for (var n = 0; n < this.size(); n++)
                    t.push(n)
            }
            if (0 === t.length)
                return e.tensor([], [0].concat(this.elementShape));
            var r = this.readMany(t);
            return Q(this.elementShape, r[0].shape, "TensorArray shape mismatch: "),
            e.stack(r, 0)
        }
        ,
        t.prototype.concat = function(t) {
            if (t && t !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + t);
            if (0 === this.size())
                return e.tensor([], [0].concat(this.elementShape));
            for (var a = [], n = 0; n < this.size(); n++)
                a.push(n);
            var r = this.readMany(a);
            return Q(this.elementShape, r[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + r[0].shape + ")"),
            e.concat(r, 0)
        }
        ,
        t.prototype.scatter = function(t, a) {
            if (a.dtype !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + a.dtype);
            if (t.length !== a.shape[0])
                throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + t.length + " vs. " + a.shape[0]);
            var n = Math.max.apply(Math, t);
            if (!this.dynamicSize && n >= this.maxSize)
                throw new Error("Max index must be < array size (" + n + "  vs. " + this.maxSize + ")");
            this.writeMany(t, e.unstack(a, 0))
        }
        ,
        t.prototype.split = function(t, a) {
            var n = this;
            if (a.dtype !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + a.dtype);
            var r = 0
              , s = t.map((function(t) {
                return r += t
            }
            ));
            if (r !== a.shape[0])
                throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + r + ", and tensor's shape is: " + a.shape);
            if (!this.dynamicSize && t.length !== this.maxSize)
                throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + t.length + "), and the TensorArray is not marked as dynamically resizeable");
            var o = 0 === r ? 0 : a.size / r
              , p = [];
            e.tidy((function() {
                a = a.reshape([1, r, o]);
                for (var i = 0; i < t.length; ++i) {
                    var u = [0, 0 === i ? 0 : s[i - 1], 0]
                      , m = [1, t[i], o];
                    p[i] = e.slice(a, u, m).reshape(n.elementShape)
                }
                return p
            }
            ));
            for (var i = [], u = 0; u < t.length; u++)
                i[u] = u;
            this.writeMany(i, p)
        }
        ,
        t.nextId = 0,
        t
    }();
    function X(t, a, n) {
        var r = function(t, a, n) {
            switch (t.category) {
            case "arithmetic":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "BiasAdd":
                        case "AddV2":
                        case "Add":
                            return [e.add(u("a", t, a, n), u("b", t, a, n))];
                        case "AddN":
                            return [e.addN(u("tensors", t, a, n))];
                        case "FloorMod":
                        case "Mod":
                            return [e.mod(u("a", t, a, n), u("b", t, a, n))];
                        case "Mul":
                            return [e.mul(u("a", t, a, n), u("b", t, a, n))];
                        case "RealDiv":
                        case "Div":
                            return [e.div(u("a", t, a, n), u("b", t, a, n))];
                        case "DivNoNan":
                            return [e.divNoNan(u("a", t, a, n), u("b", t, a, n))];
                        case "FloorDiv":
                            return [e.floorDiv(u("a", t, a, n), u("b", t, a, n))];
                        case "Sub":
                            return [e.sub(u("a", t, a, n), u("b", t, a, n))];
                        case "Minimum":
                            return [e.minimum(u("a", t, a, n), u("b", t, a, n))];
                        case "Maximum":
                            return [e.maximum(u("a", t, a, n), u("b", t, a, n))];
                        case "Pow":
                            return [e.pow(u("a", t, a, n), u("b", t, a, n))];
                        case "SquaredDifference":
                            return [e.squaredDifference(u("a", t, a, n), u("b", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "basic_math":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Abs":
                        case "ComplexAbs":
                            return [e.abs(u("x", t, a, n))];
                        case "Acos":
                            return [e.acos(u("x", t, a, n))];
                        case "Acosh":
                            return [e.acosh(u("x", t, a, n))];
                        case "Asin":
                            return [e.asin(u("x", t, a, n))];
                        case "Asinh":
                            return [e.asinh(u("x", t, a, n))];
                        case "Atan":
                            return [e.atan(u("x", t, a, n))];
                        case "Atan2":
                            return [e.atan2(u("x", t, a, n), u("y", t, a, n))];
                        case "Atanh":
                            return [e.atanh(u("x", t, a, n))];
                        case "Ceil":
                            return [e.ceil(u("x", t, a, n))];
                        case "Complex":
                            return [e.complex(u("real", t, a, n), u("imag", t, a, n))];
                        case "Cos":
                            return [e.cos(u("x", t, a, n))];
                        case "Cosh":
                            return [e.cosh(u("x", t, a, n))];
                        case "Elu":
                            return [e.elu(u("x", t, a, n))];
                        case "Erf":
                            return [e.erf(u("x", t, a, n))];
                        case "Exp":
                            return [e.exp(u("x", t, a, n))];
                        case "Expm1":
                            return [e.expm1(u("x", t, a, n))];
                        case "Floor":
                            return [e.floor(u("x", t, a, n))];
                        case "Log":
                            return [e.log(u("x", t, a, n))];
                        case "Log1p":
                            return [e.log1p(u("x", t, a, n))];
                        case "Imag":
                            return [e.imag(u("x", t, a, n))];
                        case "Neg":
                            return [e.neg(u("x", t, a, n))];
                        case "Reciprocal":
                            return [e.reciprocal(u("x", t, a, n))];
                        case "Real":
                            return [e.real(u("x", t, a, n))];
                        case "Relu":
                            return [e.relu(u("x", t, a, n))];
                        case "Round":
                            return [e.round(u("x", t, a, n))];
                        case "Selu":
                            return [e.selu(u("x", t, a, n))];
                        case "Sigmoid":
                            return [e.sigmoid(u("x", t, a, n))];
                        case "Sin":
                            return [e.sin(u("x", t, a, n))];
                        case "Sign":
                            return [e.sign(u("x", t, a, n))];
                        case "Sinh":
                            return [e.sinh(u("x", t, a, n))];
                        case "Softplus":
                            return [e.softplus(u("x", t, a, n))];
                        case "Sqrt":
                            return [e.sqrt(u("x", t, a, n))];
                        case "Square":
                            return [e.square(u("x", t, a, n))];
                        case "Tanh":
                            return [e.tanh(u("x", t, a, n))];
                        case "Tan":
                            return [e.tan(u("x", t, a, n))];
                        case "Relu6":
                        case "ClipByValue":
                            return [e.clipByValue(u("x", t, a, n), u("clipValueMin", t, a, n), u("clipValueMax", t, a, n))];
                        case "Rsqrt":
                            return [e.rsqrt(m(t.inputNames[0], a, n))];
                        case "Prod":
                            return [e.prod(u("x", t, a, n), u("axes", t, a, n))];
                        case "LeakyRelu":
                            return [e.leakyRelu(u("x", t, a, n), u("alpha", t, a, n))];
                        case "Prelu":
                            return [e.prelu(u("x", t, a, n), u("alpha", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "control":
                return function(t, a, n) {
                    return s(void 0, void 0, void 0, (function() {
                        var r, s, p, i, c, d, y, l, f, h, N, g, b, x, v, T, _, O, S, w, A, E, I, D, V, M, k, C, F, z, P, j, R, B, L, q, U, W, G, H, Q, X, Z;
                        return o(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                switch (t.op) {
                                case "If":
                                case "StatelessIf":
                                    return [3, 1];
                                case "While":
                                case "StatelessWhile":
                                    return [3, 3];
                                case "LoopCond":
                                    return [3, 11];
                                case "Switch":
                                    return [3, 12];
                                case "Merge":
                                    return [3, 14];
                                case "Enter":
                                    return [3, 15];
                                case "Exit":
                                    return [3, 16];
                                case "NextIteration":
                                    return [3, 17];
                                case "TensorArrayV3":
                                    return [3, 18];
                                case "TensorArrayWriteV3":
                                    return [3, 19];
                                case "TensorArrayReadV3":
                                    return [3, 20];
                                case "TensorArrayGatherV3":
                                    return [3, 21];
                                case "TensorArrayScatterV3":
                                    return [3, 22];
                                case "TensorArrayConcatV3":
                                    return [3, 23];
                                case "TensorArraySplitV3":
                                    return [3, 24];
                                case "TensorArraySizeV3":
                                    return [3, 25];
                                case "TensorArrayCloseV3":
                                    return [3, 26]
                                }
                                return [3, 27];
                            case 1:
                                return r = u("thenBranch", t, a, n),
                                s = u("elseBranch", t, a, n),
                                p = u("cond", t, a, n),
                                d = u("args", t, a, n),
                                [4, p.data()];
                            case 2:
                                return (y = o.sent())[0] ? [2, n.functionMap[r].executeFunctionAsync(d)] : [2, n.functionMap[s].executeFunctionAsync(d)];
                            case 3:
                                return i = u("body", t, a, n),
                                c = u("cond", t, a, n),
                                d = u("args", t, a, n),
                                [4, n.functionMap[c].executeFunctionAsync(d)];
                            case 4:
                                return [4, o.sent()[0].data()];
                            case 5:
                                y = o.sent(),
                                l = d,
                                o.label = 6;
                            case 6:
                                return y[0] ? [4, n.functionMap[i].executeFunctionAsync(l)] : [3, 10];
                            case 7:
                                return l = o.sent(),
                                [4, n.functionMap[c].executeFunctionAsync(l)];
                            case 8:
                                return [4, o.sent()[0].data()];
                            case 9:
                                return y = o.sent(),
                                [3, 6];
                            case 10:
                                return [2, l];
                            case 11:
                                return [2, [u("pred", t, a, n).clone()]];
                            case 12:
                                return f = u("pred", t, a, n),
                                h = u("data", t, a, n),
                                [4, f.data()];
                            case 13:
                                return [2, o.sent()[0] ? [void 0, h.clone()] : [h.clone(), void 0]];
                            case 14:
                                return [2, (N = t.inputNames.find((function(t) {
                                    return void 0 !== m(t, a, n)
                                }
                                ))) ? [m(N, a, n).clone()] : void 0];
                            case 15:
                                return g = u("frameName", t, a, n),
                                b = u("tensor", t, a, n),
                                n.enterFrame(g),
                                [2, [b.clone()]];
                            case 16:
                                return x = u("tensor", t, a, n),
                                n.exitFrame(),
                                [2, [x.clone()]];
                            case 17:
                                return v = u("tensor", t, a, n),
                                n.nextIteration(),
                                [2, [v.clone()]];
                            case 18:
                                return T = u("size", t, a, n),
                                _ = u("dtype", t, a, n),
                                O = u("elementShape", t, a, n),
                                S = u("dynamicSize", t, a, n),
                                w = u("clearAfterRead", t, a, n),
                                A = u("identicalElementShapes", t, a, n),
                                E = u("name", t, a, n),
                                I = new K(E,_,T,O,A,S,w),
                                n.addTensorArray(I),
                                [2, [e.scalar(I.id), e.scalar(1)]];
                            case 19:
                                return D = u("tensorArrayId", t, a, n),
                                V = u("index", t, a, n),
                                M = u("tensor", t, a, n),
                                n.getTensorArray(D).write(V, M),
                                [2, [e.scalar(1)]];
                            case 20:
                                return k = u("tensorArrayId", t, a, n),
                                C = u("index", t, a, n),
                                [2, [n.getTensorArray(k).read(C)]];
                            case 21:
                                return F = u("tensorArrayId", t, a, n),
                                z = u("indices", t, a, n),
                                P = u("dtype", t, a, n),
                                [2, [n.getTensorArray(F).gather(z, P)]];
                            case 22:
                                return j = u("tensorArrayId", t, a, n),
                                R = u("indices", t, a, n),
                                B = u("tensor", t, a, n),
                                n.getTensorArray(j).scatter(R, B),
                                [2, [e.scalar(1)]];
                            case 23:
                                return L = u("tensorArrayId", t, a, n),
                                q = n.getTensorArray(L),
                                U = u("dtype", t, a, n),
                                [2, [q.concat(U)]];
                            case 24:
                                return W = u("tensorArrayId", t, a, n),
                                G = u("tensor", t, a, n),
                                H = u("lengths", t, a, n),
                                n.getTensorArray(W).split(H, G),
                                [2, [e.scalar(1)]];
                            case 25:
                                return Q = u("tensorArrayId", t, a, n),
                                X = n.getTensorArray(Q),
                                [2, [e.scalar(X.size(), "int32")]];
                            case 26:
                                return Z = u("tensorArrayId", t, a, n),
                                n.getTensorArray(Z).clearAndClose(),
                                [2, [e.scalar(0)]];
                            case 27:
                                throw TypeError("Node type " + t.op + " is not implemented")
                            }
                        }
                        ))
                    }
                    ))
                }(t, a, n);
            case "convolution":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Conv1D":
                            var r = u("stride", t, a, n)
                              , s = u("pad", t, a, n)
                              , o = u("dataFormat", t, a, n).toUpperCase()
                              , p = u("dilation", t, a, n);
                            return [e.conv1d(u("x", t, a, n), u("filter", t, a, n), r, s, o, p)];
                        case "Conv2D":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            o = u("dataFormat", t, a, n).toUpperCase();
                            var i = u("dilations", t, a, n);
                            return [e.conv2d(u("x", t, a, n), u("filter", t, a, n), [r[1], r[2]], s, o, [i[1], i[2]])];
                        case "_FusedConv2D":
                        case "FusedDepthwiseConv2dNative":
                            var m = u("fusedOps", t, a, n)
                              , c = m[0]
                              , d = m[1]
                              , y = "biasadd" === c
                              , l = "prelu" === d
                              , f = "fusedbatchnorm" === c
                              , h = u("numArgs", t, a, n);
                            if (y) {
                                if (l && 2 !== h)
                                    throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
                                if (!l && 1 !== h)
                                    throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")
                            }
                            if (f)
                                throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            o = u("dataFormat", t, a, n).toUpperCase(),
                            i = u("dilations", t, a, n);
                            var N = u("args", t, a, n)
                              , g = N[0]
                              , b = N[1];
                            return [("_FusedConv2D" === t.op ? e.fused.conv2d : e.fused.depthwiseConv2d)({
                                x: u("x", t, a, n),
                                filter: u("filter", t, a, n),
                                strides: [r[1], r[2]],
                                pad: s,
                                dataFormat: o,
                                dilations: [i[1], i[2]],
                                bias: g,
                                activation: d,
                                preluActivationWeights: b
                            })];
                        case "Conv2DBackpropInput":
                        case "Conv2dTranspose":
                            var x = u("outputShape", t, a, n);
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n);
                            return [e.conv2dTranspose(u("x", t, a, n), u("filter", t, a, n), x, [r[1], r[2]], s)];
                        case "DepthwiseConv2dNative":
                        case "DepthwiseConv2d":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            i = u("dilations", t, a, n),
                            o = u("dataFormat", t, a, n).toUpperCase();
                            return [e.depthwiseConv2d(u("input", t, a, n), u("filter", t, a, n), [r[1], r[2]], s, o, [i[1], i[2]])];
                        case "Conv3D":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            o = u("dataFormat", t, a, n).toUpperCase(),
                            i = u("dilations", t, a, n);
                            return [e.conv3d(u("x", t, a, n), u("filter", t, a, n), [r[1], r[2], r[3]], s, o, [i[1], i[2], i[3]])];
                        case "AvgPool":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n);
                            var v = u("kernelSize", t, a, n);
                            return [e.avgPool(u("x", t, a, n), [v[1], v[2]], [r[1], r[2]], s)];
                        case "MaxPool":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            v = u("kernelSize", t, a, n);
                            return [e.maxPool(u("x", t, a, n), [v[1], v[2]], [r[1], r[2]], s)];
                        case "MaxPoolWithArgmax":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            v = u("kernelSize", t, a, n);
                            var T = u("includeBatchInIndex", t, a, n)
                              , _ = e.maxPoolWithArgmax(u("x", t, a, n), [v[1], v[2]], [r[1], r[2]], s, T);
                            return [_.result, _.indexes];
                        case "AvgPool3D":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            v = u("kernelSize", t, a, n);
                            return [e.avgPool3d(u("x", t, a, n), [v[1], v[2], v[3]], [r[1], r[2], r[3]], s)];
                        case "MaxPool3D":
                            r = u("strides", t, a, n),
                            s = u("pad", t, a, n),
                            v = u("kernelSize", t, a, n);
                            return [e.maxPool3d(u("x", t, a, n), [v[1], v[2], v[3]], [r[1], r[2], r[3]], s)];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "creation":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Fill":
                            var r = u("shape", t, a, n)
                              , s = u("dtype", t, a, n)
                              , o = u("value", t, a, n);
                            return [e.fill(r, o, s)];
                        case "LinSpace":
                            var p = u("start", t, a, n)
                              , i = u("stop", t, a, n)
                              , m = u("num", t, a, n);
                            return [e.linspace(p, i, m)];
                        case "Multinomial":
                            var c = u("logits", t, a, n)
                              , d = u("numSamples", t, a, n)
                              , y = u("seed", t, a, n);
                            return [e.multinomial(c, d, y)];
                        case "OneHot":
                            var l = u("indices", t, a, n)
                              , f = u("depth", t, a, n)
                              , h = u("onValue", t, a, n)
                              , N = u("offValue", t, a, n);
                            return [e.oneHot(l, f, h, N)];
                        case "Ones":
                            return [e.ones(u("shape", t, a, n), u("dtype", t, a, n))];
                        case "OnesLike":
                            return [e.onesLike(u("x", t, a, n))];
                        case "RandomUniform":
                            return [e.randomUniform(u("shape", t, a, n), u("minval", t, a, n), u("maxval", t, a, n), u("dtype", t, a, n))];
                        case "Range":
                            p = u("start", t, a, n);
                            var g = u("stop", t, a, n)
                              , b = u("step", t, a, n);
                            return [e.range(p, g, b, u("dtype", t, a, n))];
                        case "TruncatedNormal":
                            r = u("shape", t, a, n);
                            var x = u("mean", t, a, n)
                              , v = u("stdDev", t, a, n);
                            y = u("seed", t, a, n);
                            return [e.truncatedNormal(r, x, v, u("dtype", t, a, n), y)];
                        case "Zeros":
                            return [e.zeros(u("shape", t, a, n), u("dtype", t, a, n))];
                        case "ZerosLike":
                            return [e.zerosLike(u("x", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "dynamic":
                return function(t, a, n) {
                    return s(void 0, void 0, void 0, (function() {
                        var r, s, p, i, m, c, d, y;
                        return o(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                switch (t.op) {
                                case "NonMaxSuppressionV5":
                                case "NonMaxSuppressionV3":
                                case "NonMaxSuppressionV2":
                                    return [3, 1];
                                case "Where":
                                    return [3, 5];
                                case "ListDiff":
                                    return [3, 7]
                                }
                                return [3, 8];
                            case 1:
                                return r = u("boxes", t, a, n),
                                s = u("scores", t, a, n),
                                p = u("maxOutputSize", t, a, n),
                                i = u("iouThreshold", t, a, n),
                                m = u("scoreThreshold", t, a, n),
                                "NonMaxSuppressionV5" !== t.op ? [3, 3] : (c = u("softNmsSigma", t, a, n),
                                [4, e.image.nonMaxSuppressionWithScoreAsync(r, s, p, i, m, c)]);
                            case 2:
                                return [2, [(y = o.sent()).selectedIndices, y.selectedScores]];
                            case 3:
                                return [4, e.image.nonMaxSuppressionAsync(r, s, p, i, m)];
                            case 4:
                                return [2, [o.sent()]];
                            case 5:
                                return d = u("condition", t, a, n).asType("bool"),
                                [4, e.whereAsync(d)];
                            case 6:
                                return y = [o.sent()],
                                d.dispose(),
                                [2, y];
                            case 7:
                                return [2, e.setdiff1dAsync(u("x", t, a, n), u("y", t, a, n))];
                            case 8:
                                throw TypeError("Node type " + t.op + " is not implemented")
                            }
                        }
                        ))
                    }
                    ))
                }(t, a, n);
            case "evaluation":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "TopKV2":
                            var r = u("x", t, a, n)
                              , s = u("k", t, a, n)
                              , o = u("sorted", t, a, n)
                              , p = e.topk(r, s, o);
                            return [p.values, p.indices];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "image":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "ResizeBilinear":
                            var r = u("images", t, a, n)
                              , s = u("size", t, a, n)
                              , o = u("alignCorners", t, a, n);
                            return [e.image.resizeBilinear(r, [s[0], s[1]], o)];
                        case "ResizeNearestNeighbor":
                            r = u("images", t, a, n),
                            s = u("size", t, a, n),
                            o = u("alignCorners", t, a, n);
                            return [e.image.resizeNearestNeighbor(r, [s[0], s[1]], o)];
                        case "CropAndResize":
                            var p = u("image", t, a, n)
                              , i = u("boxes", t, a, n)
                              , m = u("boxInd", t, a, n)
                              , c = u("cropSize", t, a, n)
                              , d = u("method", t, a, n)
                              , y = u("extrapolationValue", t, a, n);
                            return [e.image.cropAndResize(p, i, m, c, d, y)];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "graph":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Const":
                            return a[t.name];
                        case "PlaceholderWithDefault":
                            var r = u("default", t, a, n);
                            return [m(t.name, a, n) || r];
                        case "Placeholder":
                            return [m(t.name, a, n)];
                        case "Identity":
                        case "StopGradient":
                        case "FakeQuantWithMinMaxVars":
                            return [u("x", t, a, n).clone()];
                        case "IdentityN":
                            return u("x", t, a, n).map((function(t) {
                                return t.clone()
                            }
                            ));
                        case "Snapshot":
                            return [u("x", t, a, n).clone()];
                        case "Shape":
                            return [e.tensor1d(u("x", t, a, n).shape, "int32")];
                        case "ShapeN":
                            return u("x", t, a, n).map((function(t) {
                                return e.tensor1d(t.shape)
                            }
                            ));
                        case "Size":
                            return [e.scalar(u("x", t, a, n).size, "int32")];
                        case "Rank":
                            return [e.scalar(u("x", t, a, n).rank, "int32")];
                        case "NoOp":
                            return [e.scalar(1)];
                        case "Print":
                            var s = u("x", t, a, n)
                              , o = u("data", t, a, n)
                              , p = u("message", t, a, n)
                              , i = u("summarize", t, a, n);
                            console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),
                            console.log(p);
                            for (var c = 0; c < o.length; c++)
                                console.log(Array.prototype.slice.call(o[c].dataSync()).slice(0, i));
                            return [s];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "logical":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Equal":
                            return [e.equal(u("a", t, a, n), u("b", t, a, n))];
                        case "NotEqual":
                            return [e.notEqual(u("a", t, a, n), u("b", t, a, n))];
                        case "Greater":
                            return [e.greater(u("a", t, a, n), u("b", t, a, n))];
                        case "GreaterEqual":
                            return [e.greaterEqual(u("a", t, a, n), u("b", t, a, n))];
                        case "Less":
                            return [e.less(u("a", t, a, n), u("b", t, a, n))];
                        case "LessEqual":
                            return [e.lessEqual(u("a", t, a, n), u("b", t, a, n))];
                        case "LogicalAnd":
                            return [e.logicalAnd(u("a", t, a, n), u("b", t, a, n))];
                        case "LogicalNot":
                            return [e.logicalNot(u("a", t, a, n))];
                        case "LogicalOr":
                            return [e.logicalOr(u("a", t, a, n), u("b", t, a, n))];
                        case "Select":
                        case "SelectV2":
                            return [e.where(u("condition", t, a, n), u("a", t, a, n), u("b", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "matrices":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "BatchMatMul":
                        case "BatchMatMulV2":
                        case "MatMul":
                            return [e.matMul(u("a", t, a, n), u("b", t, a, n), u("transposeA", t, a, n), u("transposeB", t, a, n))];
                        case "Transpose":
                            return [e.transpose(u("x", t, a, n), u("perm", t, a, n))];
                        case "_FusedMatMul":
                            var r = u("fusedOps", t, a, n)
                              , s = r[0]
                              , o = r[1]
                              , p = "biasadd" === s
                              , i = "prelu" === o
                              , m = u("numArgs", t, a, n);
                            if (p) {
                                if (i && 2 !== m)
                                    throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
                                if (!i && 1 !== m)
                                    throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")
                            }
                            var c = u("args", t, a, n)
                              , d = c[0]
                              , y = c[1];
                            return [e.fused.matMul({
                                a: u("a", t, a, n),
                                b: u("b", t, a, n),
                                transposeA: u("transposeA", t, a, n),
                                transposeB: u("transposeB", t, a, n),
                                bias: d,
                                activation: o,
                                preluActivationWeights: y
                            })];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "normalization":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "FusedBatchNorm":
                        case "FusedBatchNormV2":
                        case "FusedBatchNormV3":
                            return [e.batchNorm(u("x", t, a, n), u("mean", t, a, n), u("variance", t, a, n), u("offset", t, a, n), u("scale", t, a, n), u("epsilon", t, a, n))];
                        case "LRN":
                            return [e.localResponseNormalization(u("x", t, a, n), u("radius", t, a, n), u("bias", t, a, n), u("alpha", t, a, n), u("beta", t, a, n))];
                        case "Softmax":
                            return [e.softmax(u("x", t, a, n))];
                        case "LogSoftmax":
                            return [e.logSoftmax(u("x", t, a, n))];
                        case "SparseToDense":
                            return [e.sparseToDense(u("sparseIndices", t, a, n), u("outputShape", t, a, n), u("sparseValues", t, a, n), u("defaultValue", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "reduction":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Max":
                            var r = u("axis", t, a, n)
                              , s = u("keepDims", t, a, n);
                            return [e.max(u("x", t, a, n), r, s)];
                        case "Mean":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.mean(u("x", t, a, n), r, s)];
                        case "Min":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.min(u("x", t, a, n), r, s)];
                        case "Sum":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.sum(u("x", t, a, n), r, s)];
                        case "All":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.all(u("x", t, a, n), r, s)];
                        case "Any":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.any(u("x", t, a, n), r, s)];
                        case "ArgMax":
                            r = u("axis", t, a, n);
                            return [e.argMax(u("x", t, a, n), r)];
                        case "ArgMin":
                            r = u("axis", t, a, n);
                            return [e.argMin(u("x", t, a, n), r)];
                        case "Prod":
                            r = u("axis", t, a, n),
                            s = u("keepDims", t, a, n);
                            return [e.prod(u("x", t, a, n), r, s)];
                        case "Cumsum":
                            r = u("axis", t, a, n);
                            var o = u("exclusive", t, a, n)
                              , p = u("reverse", t, a, n);
                            return [e.cumsum(u("x", t, a, n), r, o, p)];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "slice_join":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "ConcatV2":
                        case "Concat":
                            var r = u("n", t, a, n)
                              , s = u("axis", t, a, n)
                              , o = u("tensors", t, a, n);
                            return o = o.slice(0, r),
                            [e.concat(o, s)];
                        case "GatherV2":
                        case "Gather":
                            s = u("axis", t, a, n);
                            var p = u("x", t, a, n)
                              , i = u("indices", t, a, n);
                            return [e.gather(p, i.asType("int32"), s)];
                        case "ReverseV2":
                        case "Reverse":
                            s = u("axis", t, a, n),
                            p = u("x", t, a, n);
                            return [e.reverse(p, s)];
                        case "Slice":
                            var m = u("begin", t, a, n)
                              , c = u("size", t, a, n);
                            return [e.slice(u("x", t, a, n), m, c)];
                        case "StridedSlice":
                            m = u("begin", t, a, n);
                            var d = u("end", t, a, n)
                              , y = u("strides", t, a, n)
                              , l = u("beginMask", t, a, n)
                              , f = u("endMask", t, a, n)
                              , h = u("ellipsisMask", t, a, n)
                              , N = u("newAxisMask", t, a, n)
                              , g = u("shrinkAxisMask", t, a, n)
                              , b = u("x", t, a, n);
                            if (1 === m.length && b.shape.length > 1)
                                for (var x = 1; x < b.shape.length; x++)
                                    m.push(0),
                                    d.push(b.shape[x]),
                                    y.push(y[0]);
                            return [e.stridedSlice(b, m, d, y, l, f, h, N, g)];
                        case "Pack":
                            return e.tidy((function() {
                                var r = u("axis", t, a, n)
                                  , s = u("tensors", t, a, n)
                                  , o = s[0].shape
                                  , p = s[0].squeeze().shape
                                  , i = s.map((function(t) {
                                    var a = e.util.arraysEqual(t.shape, o);
                                    if (!a && !e.util.arraysEqual(t.squeeze().shape, p))
                                        throw new Error("the input tensors shape does not match");
                                    return a ? t : t.reshape(o)
                                }
                                ));
                                return [e.stack(i, r)]
                            }
                            ));
                        case "Unpack":
                            return e.tidy((function() {
                                var r = u("axis", t, a, n)
                                  , s = u("tensor", t, a, n);
                                return e.unstack(s, r)
                            }
                            ));
                        case "Tile":
                            var v = u("reps", t, a, n);
                            return [e.tile(u("x", t, a, n), v)];
                        case "Split":
                        case "SplitV":
                            s = u("axis", t, a, n);
                            var T = u("numOrSizeSplits", t, a, n);
                            return e.split(u("x", t, a, n), T, s);
                        case "ScatterNd":
                            i = u("indices", t, a, n);
                            var _ = u("values", t, a, n)
                              , O = u("shape", t, a, n);
                            return [e.scatterND(i, _, O)];
                        case "GatherNd":
                            var S = u("x", t, a, n);
                            i = u("indices", t, a, n);
                            return [e.gatherND(S, i)];
                        case "SparseToDense":
                            i = u("sparseIndices", t, a, n),
                            O = u("outputShape", t, a, n);
                            var w = u("sparseValues", t, a, n)
                              , A = u("defaultValue", t, a, n);
                            return [e.sparseToDense(i, w, O, w.dtype === A.dtype ? A : A.asType(w.dtype))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "spectral":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "FFT":
                            return [e.fft(u("x", t, a, n))];
                        case "IFFT":
                            return [e.ifft(u("x", t, a, n))];
                        case "RFFT":
                            return [e.rfft(u("x", t, a, n))];
                        case "IRFFT":
                            return [e.irfft(u("x", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "transformation":
                return e.tidy((function() {
                    return function(t, a, n) {
                        switch (t.op) {
                        case "Cast":
                            return [e.cast(u("x", t, a, n), u("dtype", t, a, n))];
                        case "ExpandDims":
                            var r = u("axis", t, a, n);
                            return [e.expandDims(u("x", t, a, n), r)];
                        case "Squeeze":
                            r = u("axis", t, a, n);
                            return [e.squeeze(u("x", t, a, n), r)];
                        case "Reshape":
                            return [e.reshape(u("x", t, a, n), u("shape", t, a, n))];
                        case "PadV2":
                        case "Pad":
                            return [e.pad(u("x", t, a, n), l(u("padding", t, a, n), 2), u("constantValue", t, a, n))];
                        case "SpaceToBatchND":
                            var s = u("blockShape", t, a, n)
                              , o = l(u("paddings", t, a, n), 2);
                            return [e.spaceToBatchND(u("x", t, a, n), s, o)];
                        case "BatchToSpaceND":
                            s = u("blockShape", t, a, n);
                            var p = l(u("crops", t, a, n), 2);
                            return [e.batchToSpaceND(u("x", t, a, n), s, p)];
                        case "DepthToSpace":
                            var i = u("blockSize", t, a, n)
                              , m = u("dataFormat", t, a, n).toUpperCase();
                            return [e.depthToSpace(u("x", t, a, n), i, m)];
                        case "BroadcastTo":
                            return [e.broadcastTo(u("x", t, a, n), u("shape", t, a, n))];
                        default:
                            throw TypeError("Node type " + t.op + " is not implemented")
                        }
                    }(t, a, n)
                }
                ));
            case "custom":
                var r = i(t.op);
                if (r && r.customExecutor)
                    return r.customExecutor(new H(t,a,n));
                throw TypeError("Custom op " + t.op + " is not registered.");
            default:
                throw TypeError("Unknown op '" + t.op + "'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()")
            }
        }(t, a, n);
        return r instanceof Promise ? r.then((function(t) {
            return [].concat(t)
        }
        )) : [].concat(r)
    }
    var Z = function() {
        function t(t, e, a) {
            void 0 === a && (a = {}),
            this.weightMap = t,
            this.tensorArrayMap = e,
            this.functionMap = a,
            this.rootContext = {
                id: 0,
                frameName: "",
                iterationId: 0
            },
            this.contexts = [this.rootContext],
            this.lastId = 0,
            this.generateCurrentContextIds()
        }
        return t.prototype.newFrame = function(t, e) {
            return {
                id: t,
                frameName: e,
                iterationId: 0
            }
        }
        ,
        Object.defineProperty(t.prototype, "currentContext", {
            get: function() {
                return this.contexts
            },
            set: function(t) {
                this.contexts !== t && (this.contexts = t,
                this.generateCurrentContextIds())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentContextId", {
            get: function() {
                return this._currentContextIds[0]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "currentContextIds", {
            get: function() {
                return this._currentContextIds
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.generateCurrentContextIds = function() {
            for (var t = [], e = 0; e < this.contexts.length - 1; e++) {
                var a = this.contexts.slice(0, this.contexts.length - e);
                t.push(this.contextIdforContexts(a))
            }
            t.push(""),
            this._currentContextIds = t
        }
        ,
        t.prototype.contextIdforContexts = function(t) {
            return t ? t.map((function(t) {
                return 0 === t.id && 0 === t.iterationId ? "" : t.frameName + "-" + t.iterationId
            }
            )).join("/") : ""
        }
        ,
        t.prototype.enterFrame = function(t) {
            this.contexts && (this.lastId++,
            this.contexts = this.contexts.slice(),
            this.contexts.push(this.newFrame(this.lastId, t)),
            this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))
        }
        ,
        t.prototype.exitFrame = function() {
            if (!(this.contexts && this.contexts.length > 1))
                throw new Error("Cannot exit frame, the context is empty");
            this.contexts = this.contexts.slice(),
            this.contexts.splice(-1),
            this.currentContextIds.shift()
        }
        ,
        t.prototype.nextIteration = function() {
            if (!(this.contexts && this.contexts.length > 0))
                throw new Error("Cannot increase frame iteration, the context is empty");
            this.contexts = this.contexts.slice(),
            this.lastId++;
            var t = Object.assign({}, this.contexts[this.contexts.length - 1]);
            t.iterationId += 1,
            t.id = this.lastId,
            this.contexts.splice(-1, 1, t),
            this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts))
        }
        ,
        t.prototype.getWeight = function(t) {
            return this.weightMap[t]
        }
        ,
        t.prototype.addTensorArray = function(t) {
            this.tensorArrayMap[t.id] = t
        }
        ,
        t.prototype.getTensorArray = function(t) {
            return this.tensorArrayMap[t]
        }
        ,
        t
    }();
    function Y(t, e, a) {
        for (var n = new Set, r = [], s = null, o = null, p = new Set, i = Object.keys(t).map((function(t) {
            return y(t)[0]
        }
        )), u = e.slice(); u.length > 0; ) {
            var m = u.pop();
            (tt(m) || et(m)) && null == s && (o = (s = m).children.map((function(t) {
                return t.name
            }
            )).filter((function(t) {
                return n.has(t)
            }
            ))),
            n.add(m.name),
            null == a[m.name] && (-1 === i.indexOf(m.name) && (0 !== m.inputs.length ? m.inputs.forEach((function(t) {
                p.has(t.name) || (p.add(t.name),
                u.push(t))
            }
            )) : r.push(m.name)))
        }
        return {
            inputs: t,
            outputs: e,
            usedNodes: n,
            missingInputs: r,
            dynamicNode: s,
            syncInputs: o
        }
    }
    var J = ["Switch", "Merge", "Enter", "Exit", "NextIteration", "StatelessIf", "StatelessWhile"]
      , $ = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"];
    function tt(t) {
        return J.indexOf(t.op) >= 0
    }
    function et(t) {
        return $.indexOf(t.op) >= 0
    }
    var at = function() {
        function t(e, a) {
            var n = this;
            this.graph = e,
            this.parent = a,
            this.compiledMap = new Map,
            this._weightMap = {},
            this.SEPERATOR = ",",
            this._functions = {},
            this._functionExecutorMap = {},
            this._outputs = e.outputs,
            this._inputs = e.inputs,
            this._signature = e.signature,
            this._functions = e.functions,
            null != e.functions && Object.keys(e.functions).forEach((function(a) {
                n._functionExecutorMap[a] = new t(e.functions[a],n)
            }
            ))
        }
        return Object.defineProperty(t.prototype, "weightIds", {
            get: function() {
                return this.parent ? this.parent.weightIds : this._weightIds
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "functionExecutorMap", {
            get: function() {
                return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "weightMap", {
            get: function() {
                return this.parent ? this.parent.weightMap : this._weightMap
            },
            set: function(t) {
                var e = Object.keys(t).map((function(e) {
                    return t[e].map((function(t) {
                        return t.id
                    }
                    ))
                }
                ));
                this._weightIds = [].concat.apply([], e),
                this._weightMap = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "inputs", {
            get: function() {
                return this._inputs.map((function(t) {
                    return {
                        name: t.name,
                        shape: t.attrParams.shape ? t.attrParams.shape.value : void 0,
                        dtype: t.attrParams.dtype ? t.attrParams.dtype.value : void 0
                    }
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "outputs", {
            get: function() {
                return this._outputs.map((function(t) {
                    return {
                        name: t.name,
                        shape: t.attrParams.shape ? t.attrParams.shape.value : void 0,
                        dtype: t.attrParams.dtype ? t.attrParams.dtype.value : void 0
                    }
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "inputNodes", {
            get: function() {
                return this._inputs.map((function(t) {
                    return t.signatureKey || t.name
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "outputNodes", {
            get: function() {
                return this._outputs.map((function(t) {
                    var e = t.signatureKey || t.name;
                    return t.defaultOutput ? e + ":" + t.defaultOutput : e
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "functions", {
            get: function() {
                var t = this;
                return Object.keys(this._functions).reduce((function(e, a) {
                    return e[a] = t._functions[a].signature,
                    e
                }
                ), {})
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getCompilationKey = function(t, e) {
            var a = t.map((function(t) {
                return t.name
            }
            )).sort()
              , n = e.map((function(t) {
                return t.name
            }
            )).sort();
            return a.join(this.SEPERATOR) + "--" + n.join(this.SEPERATOR)
        }
        ,
        t.prototype.compile = function(t, e) {
            var a = Y(t, e, this.weightMap)
              , n = a.missingInputs
              , r = a.dynamicNode
              , s = a.syncInputs;
            if (null != r)
                throw new Error("This execution contains the node '" + r.name + "', which has the dynamic op '" + r.op + "'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [" + s + "]");
            if (n.length > 0) {
                var o = e.map((function(t) {
                    return t.name
                }
                ))
                  , p = Object.keys(t);
                throw new Error("Cannot compute the outputs [" + o + "] from the provided inputs [" + p + "]. Missing the following inputs: [" + n + "]")
            }
            return function(t, e, a) {
                var n = a.usedNodes
                  , r = a.inputs
                  , s = [];
                Object.keys(r).map((function(t) {
                    return y(t)[0]
                }
                )).map((function(e) {
                    return t.nodes[e]
                }
                )).forEach((function(t) {
                    n.has(t.name) && s.push(t)
                }
                )),
                t.weights.forEach((function(t) {
                    n.has(t.name) && s.push(t)
                }
                ));
                for (var o = new Set, p = []; s.length > 0; ) {
                    var i = s.pop();
                    o.add(i.name),
                    e[i.name] || p.push(i),
                    i.children.forEach((function(t) {
                        !o.has(t.name) && n.has(t.name) && t.inputs.every((function(t) {
                            return o.has(t.name)
                        }
                        )) && s.push(t)
                    }
                    ))
                }
                return p
            }(this.graph, this.weightMap, a)
        }
        ,
        t.prototype.execute = function(t, a) {
            var n = this;
            t = this.mapInputs(t);
            var s = Object.keys(t).sort();
            this.checkInputs(t),
            this.checkInputShapeAndType(t),
            a = this.mapOutputs(a),
            this.checkOutputs(a);
            var o = s.map((function(t) {
                return n.graph.nodes[y(t)[0]]
            }
            ))
              , p = a.map((function(t) {
                return n.graph.nodes[y(t)[0]]
            }
            ))
              , i = this.getCompilationKey(o, p)
              , u = this.compiledMap.get(i);
            null == u && (u = this.compile(t, p),
            this.compiledMap.set(i, u));
            var c = {};
            return e.tidy((function() {
                var e = new Z(n.weightMap,c,n.functionExecutorMap)
                  , s = r({}, n.weightMap);
                Object.keys(t).forEach((function(e) {
                    var a = y(e)
                      , n = a[0]
                      , r = [];
                    r[a[1]] = t[e],
                    s[n] = r
                }
                ));
                for (var o = n.getFrozenTensorIds(s), p = {}, i = 0; i < u.length; i++) {
                    var d = u[i];
                    if (!s[d.name]) {
                        var l = X(d, s, e);
                        if (l instanceof Promise)
                            throw new Error("The execution of the op '" + d.op + "' returned a promise. Please use model.executeAsync() instead.");
                        s[d.name] = l,
                        n.checkTensorForDisposal(d.name, d, s, e, o, a, p)
                    }
                }
                return a.map((function(t) {
                    return m(t, s, e)
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getFrozenTensorIds = function(t) {
            var e = [].concat.apply([], Object.keys(t).map((function(e) {
                return t[e]
            }
            )).map((function(t) {
                return t.map((function(t) {
                    return t.id
                }
                ))
            }
            )));
            return new Set(e)
        }
        ,
        t.prototype.checkTensorForDisposal = function(t, e, a, n, r, s, o) {
            "control" !== e.category && -1 === s.indexOf(t) && (a[t].forEach((function(t) {
                null != t && (o[t.id] = (o[t.id] || 0) + e.children.length)
            }
            )),
            e.inputs.forEach((function(t) {
                if ("control" !== t.category) {
                    var e = function(t, e, a) {
                        return e[d(t, a.currentContextId)]
                    }(t.name, a, n);
                    null != e && e.forEach((function(t) {
                        if (t && !r.has(t.id)) {
                            var e = o[t.id];
                            1 === e ? (t.dispose(),
                            delete o[t.id]) : null != e && o[t.id]--
                        }
                    }
                    ))
                }
            }
            )))
        }
        ,
        t.prototype.executeAsync = function(t, e, a) {
            return void 0 === a && (a = !1),
            s(this, void 0, void 0, (function() {
                var n, r, s, p, i, u, c = this;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return t = this.mapInputs(t),
                        this.checkInputs(t),
                        this.checkInputShapeAndType(t),
                        e = this.mapOutputs(e),
                        this.checkOutputs(e),
                        n = {},
                        r = new Z(this.weightMap,n,this.functionExecutorMap),
                        [4, this.executeWithControlFlow(t, r, e, a)];
                    case 1:
                        return s = o.sent(),
                        p = e.map((function(t) {
                            return m(t, s, r)
                        }
                        )),
                        i = new Set(p.map((function(t) {
                            return t.id
                        }
                        ))),
                        u = new Set(Object.keys(t).map((function(e) {
                            return t[e].id
                        }
                        ))),
                        Object.keys(s).forEach((function(t) {
                            s[t].forEach((function(t) {
                                !t || t.isDisposed || i.has(t.id) || u.has(t.id) || -1 !== c.weightIds.indexOf(t.id) || t.dispose()
                            }
                            ))
                        }
                        )),
                        [2, p]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.executeFunctionAsync = function(t) {
            return s(this, void 0, void 0, (function() {
                var e, a = this;
                return o(this, (function(n) {
                    return e = t.reduce((function(t, e, n) {
                        return t[a.inputs[n].name] = e,
                        t
                    }
                    ), {}),
                    [2, this.executeAsync(e, this.outputNodes, !0)]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.executeWithControlFlow = function(t, e, a, n) {
            return s(this, void 0, void 0, (function() {
                var s, p, i, u, c, d, l, f, h, N, g, b, x, v, T, _, O = this;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        s = Object.keys(t),
                        p = s.map((function(t) {
                            return O.graph.nodes[y(t)[0]]
                        }
                        )),
                        i = a.map((function(t) {
                            return O.graph.nodes[y(t)[0]]
                        }
                        )),
                        u = Y(t, i, this.weightMap),
                        c = u.usedNodes,
                        d = u.missingInputs,
                        l = u.dynamicNode,
                        f = u.syncInputs,
                        h = p.concat(this.graph.weights).map((function(t) {
                            return {
                                node: t,
                                contexts: e.currentContext
                            }
                        }
                        )),
                        N = r({}, this.weightMap),
                        Object.keys(t).forEach((function(e) {
                            var a = y(e)
                              , n = a[0]
                              , r = [];
                            r[a[1]] = t[e],
                            N[n] = r
                        }
                        )),
                        g = {},
                        b = this.getFrozenTensorIds(N),
                        x = {},
                        o.label = 1;
                    case 1:
                        return h.length > 0 ? (v = this.processStack(p, h, e, N, x, b, a, g, c),
                        [4, Promise.all(v)]) : [3, 3];
                    case 2:
                        return o.sent(),
                        [3, 1];
                    case 3:
                        if (null != l || n || console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."),
                        (T = i.filter((function(t) {
                            return !tt(t) && !m(t.name, N, e)
                        }
                        )).map((function(t) {
                            return t.name
                        }
                        ))).length > 0)
                            throw _ = "",
                            null != l && (_ = "Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [" + f + "]"),
                            new Error("Cannot compute the outputs [" + T + "] from the provided inputs [" + s + "]. Consider providing the following inputs: [" + d + "]. " + _);
                        return [2, N]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.processStack = function(t, e, a, n, r, s, o, p, i) {
            for (var m = this, d = [], y = function() {
                var y = e.pop();
                a.currentContext = y.contexts;
                var f = "";
                if ("Enter" === y.node.op && u("isConstant", y.node, n, a) && (f = c(y.node.name, a)[0]),
                -1 === t.indexOf(y.node)) {
                    var h = X(y.node, n, a);
                    f || (f = c(y.node.name, a)[0]);
                    var N = a.currentContext;
                    h instanceof Promise ? d.push(h.then((function(t) {
                        return n[f] = t,
                        a.currentContext = N,
                        m.checkTensorForDisposal(f, y.node, n, a, s, o, p),
                        m.processChildNodes(y.node, e, a, n, r, i),
                        t
                    }
                    ))) : (n[f] = h,
                    l.checkTensorForDisposal(f, y.node, n, a, s, o, p),
                    l.processChildNodes(y.node, e, a, n, r, i))
                } else
                    l.processChildNodes(y.node, e, a, n, r, i)
            }, l = this; e.length > 0; )
                y();
            return d
        }
        ,
        t.prototype.processChildNodes = function(t, e, a, n, r, s) {
            t.children.forEach((function(t) {
                var o = c(t.name, a)[0];
                !r[o] && s.has(t.name) && ("Merge" === t.op ? t.inputNames.some((function(t) {
                    return !!m(t, n, a)
                }
                )) && (r[o] = !0,
                e.push({
                    contexts: a.currentContext,
                    node: t
                })) : t.inputNames.every((function(t) {
                    return !!m(t, n, a)
                }
                )) && (r[o] = !0,
                e.push({
                    contexts: a.currentContext,
                    node: t
                })))
            }
            ))
        }
        ,
        t.prototype.dispose = function() {
            var t = this;
            Object.keys(this.weightMap).forEach((function(e) {
                return t.weightMap[e].forEach((function(t) {
                    return t.dispose()
                }
                ))
            }
            ))
        }
        ,
        t.prototype.checkInputShapeAndType = function(t) {
            var a = this;
            Object.keys(t).forEach((function(n) {
                var r = t[n]
                  , s = y(n)[0]
                  , o = a.graph.nodes[s];
                if (o.attrParams.shape && o.attrParams.shape.value) {
                    var p = o.attrParams.shape.value
                      , i = p.length === r.shape.length && r.shape.every((function(t, e) {
                        return -1 === p[e] || p[e] === t
                    }
                    ));
                    e.util.assert(i, (function() {
                        return "The shape of dict['" + o.name + "'] provided in model.execute(dict) must be [" + p + "], but was [" + r.shape + "]"
                    }
                    ))
                }
                o.attrParams.dtype && o.attrParams.dtype.value && e.util.assert(r.dtype === o.attrParams.dtype.value, (function() {
                    return "The dtype of dict['" + o.name + "'] provided in model.execute(dict) must be " + o.attrParams.dtype.value + ", but was " + r.dtype
                }
                ))
            }
            ))
        }
        ,
        t.prototype.mapInputs = function(t) {
            var e = {};
            for (var a in t) {
                if (null != this._signature && null != this._signature.inputs && null != this._signature.inputs[a])
                    e[this._signature.inputs[a].name] = t[a];
                else
                    e[a] = t[a]
            }
            return e
        }
        ,
        t.prototype.checkInputs = function(t) {
            var e = this
              , a = Object.keys(t).filter((function(t) {
                var a = y(t)[0];
                return null == e.graph.nodes[a]
            }
            ));
            if (a.length > 0)
                throw new Error("The dict provided in model.execute(dict) has keys: [" + a + "] that are not part of graph")
        }
        ,
        t.prototype.mapOutputs = function(t) {
            var e = this;
            return t.map((function(t) {
                return null != e._signature && null != e._signature.outputs && null != e._signature.outputs[t] ? e._signature.outputs[t].name : t
            }
            ), {})
        }
        ,
        t.prototype.checkOutputs = function(t) {
            var e = this;
            t.forEach((function(t) {
                var a = y(t)[0];
                if (!e.graph.nodes[a])
                    throw new Error("The output '" + t + "' is not found in the graph")
            }
            ))
        }
        ,
        t
    }()
      , nt = function() {
        function t(t, e) {
            void 0 === e && (e = {}),
            this.modelUrl = t,
            this.loadOptions = e,
            this.version = "n/a",
            null == e && (this.loadOptions = {})
        }
        return Object.defineProperty(t.prototype, "modelVersion", {
            get: function() {
                return this.version
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "inputNodes", {
            get: function() {
                return this.executor.inputNodes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "outputNodes", {
            get: function() {
                return this.executor.outputNodes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "inputs", {
            get: function() {
                return this.executor.inputs
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "outputs", {
            get: function() {
                return this.executor.outputs
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "weights", {
            get: function() {
                return this.executor.weightMap
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.findIOHandler = function() {
            var t = this.modelUrl;
            if (null != t.load)
                this.handler = t;
            else if (null != this.loadOptions.requestInit)
                this.handler = e.io.browserHTTPRequest(t, this.loadOptions);
            else {
                var a = e.io.getLoadHandlers(t, this.loadOptions);
                if (0 === a.length)
                    a.push(e.io.browserHTTPRequest(t, this.loadOptions));
                else if (a.length > 1)
                    throw new Error("Found more than one (" + a.length + ") load handlers for URL '" + [t] + "'");
                this.handler = a[0]
            }
        }
        ,
        t.prototype.load = function() {
            return s(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        if (this.findIOHandler(),
                        null == this.handler.load)
                            throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
                        return [4, this.handler.load()];
                    case 1:
                        return t = e.sent(),
                        [2, this.loadSync(t)]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.loadSync = function(t) {
            this.artifacts = t;
            var a = this.artifacts.modelTopology
              , n = {};
            null != this.artifacts.userDefinedMetadata && (n = this.artifacts.userDefinedMetadata.signature),
            this.version = a.versions.producer + "." + a.versions.minConsumer;
            var r = e.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
            return this.executor = new at(V.Instance.transformGraph(a, n)),
            this.executor.weightMap = this.convertTensorMapToTensorsMap(r),
            !0
        }
        ,
        t.prototype.save = function(t, a) {
            return s(this, void 0, void 0, (function() {
                var a;
                return o(this, (function(n) {
                    if ("string" == typeof t) {
                        if (0 === (a = e.io.getSaveHandlers(t)).length)
                            throw new Error("Cannot find any save handlers for URL '" + t + "'");
                        if (a.length > 1)
                            throw new Error("Found more than one (" + a.length + ") save handlers for URL '" + t + "'");
                        t = a[0]
                    }
                    if (null == t.save)
                        throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
                    return [2, t.save(this.artifacts)]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.predict = function(t, e) {
            return this.execute(t, this.outputNodes)
        }
        ,
        t.prototype.normalizeInputs = function(t) {
            if (!(t instanceof e.Tensor || Array.isArray(t)))
                return t;
            if ((t = Array.isArray(t) ? t : [t]).length !== this.inputNodes.length)
                throw new Error("Input tensor count mismatch,the graph model has " + this.inputNodes.length + " placeholders, while there are " + t.length + " input tensors.");
            return this.inputNodes.reduce((function(e, a, n) {
                return e[a] = t[n],
                e
            }
            ), {})
        }
        ,
        t.prototype.normalizeOutputs = function(t) {
            return t = t || this.outputNodes,
            Array.isArray(t) ? t : [t]
        }
        ,
        t.prototype.execute = function(t, e) {
            t = this.normalizeInputs(t),
            e = this.normalizeOutputs(e);
            var a = this.executor.execute(t, e);
            return a.length > 1 ? a : a[0]
        }
        ,
        t.prototype.executeAsync = function(t, e) {
            return s(this, void 0, void 0, (function() {
                var a;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = this.normalizeInputs(t),
                        e = this.normalizeOutputs(e),
                        [4, this.executor.executeAsync(t, e)];
                    case 1:
                        return [2, (a = n.sent()).length > 1 ? a : a[0]]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.convertTensorMapToTensorsMap = function(t) {
            return Object.keys(t).reduce((function(e, a) {
                return e[a] = [t[a]],
                e
            }
            ), {})
        }
        ,
        t.prototype.dispose = function() {
            this.executor.dispose()
        }
        ,
        t
    }();
    t.GraphModel = nt,
    t.deregisterOp = function(t) {
        delete p[t]
    }
    ,
    t.loadGraphModel = function(t, e) {
        return void 0 === e && (e = {}),
        s(this, void 0, void 0, (function() {
            var a;
            return o(this, (function(n) {
                switch (n.label) {
                case 0:
                    if (null == t)
                        throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
                    return null == e && (e = {}),
                    e.fromTFHub && null == t.load && (t.endsWith("/") || (t += "/"),
                    t += "model.json?tfjs-format=file"),
                    [4, (a = new nt(t,e)).load()];
                case 1:
                    return n.sent(),
                    [2, a]
                }
            }
            ))
        }
        ))
    }
    ,
    t.registerOp = function(t, e) {
        var a = {
            tfOpName: t,
            category: "custom",
            inputs: [],
            attrs: [],
            customExecutor: e
        };
        p[t] = a
    }
    ,
    t.version_converter = "2.0.1",
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=tf-converter.min.js.map
