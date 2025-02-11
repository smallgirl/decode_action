//Tue Feb 11 2025 07:40:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (t) {
  "use strict";

  var h, u;
  void 0 === t.btoa && (t.btoa = (h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), function (r) {
    var e, t, n, o, a, c, i;
    for (t = n = 0, o = r.length, c = (o -= a = o % 3) / 3 << 2, 0 < a && (c += 4), e = new Array(c); t < o;) i = r.charCodeAt(t++) << 16 | r.charCodeAt(t++) << 8 | r.charCodeAt(t++), e[n++] = h[i >> 18] + h[i >> 12 & 63] + h[i >> 6 & 63] + h[63 & i];
    return 1 == a ? (i = r.charCodeAt(t++), e[n++] = h[i >> 2] + h[(3 & i) << 4] + "==") : 2 == a && (i = r.charCodeAt(t++) << 8 | r.charCodeAt(t++), e[n++] = h[i >> 10] + h[i >> 4 & 63] + h[(15 & i) << 2] + "="), e.join("");
  })), void 0 === t.atob && (t.atob = (u = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1], function (r) {
    var e, t, n, o, a, c, i, h, f, d;
    if ((i = r.length) % 4 != 0) return "";
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(r)) return "";
    for (f = i, 0 < (h = "=" == r.charAt(i - 2) ? 1 : "=" == r.charAt(i - 1) ? 2 : 0) && (f -= 4), f = 3 * (f >> 2) + h, d = new Array(f), a = c = 0; a < i && -1 != (e = u[r.charCodeAt(a++)]) && -1 != (t = u[r.charCodeAt(a++)]) && (d[c++] = String.fromCharCode(e << 2 | (48 & t) >> 4), -1 != (n = u[r.charCodeAt(a++)])) && (d[c++] = String.fromCharCode((15 & t) << 4 | (60 & n) >> 2), -1 != (o = u[r.charCodeAt(a++)]));) d[c++] = String.fromCharCode((3 & n) << 6 | o);
    return d.join("");
  }));
  var d = 2654435769;
  function n(r, e) {
    var t = r.length,
      n = t << 2;
    if (e) {
      var o = r[t - 1];
      if (o < (n -= 4) - 3 || n < o) return null;
      n = o;
    }
    for (var a = 0; a < t; a++) r[a] = String.fromCharCode(255 & r[a], r[a] >>> 8 & 255, r[a] >>> 16 & 255, r[a] >>> 24 & 255);
    var c = r.join("");
    return e ? c.substring(0, n) : c;
  }
  function o(r, e) {
    var t,
      n = r.length,
      o = n >> 2;
    0 != (3 & n) && ++o, e ? (t = new Array(o + 1))[o] = n : t = new Array(o);
    for (var a = 0; a < n; ++a) t[a >> 2] |= r.charCodeAt(a) << ((3 & a) << 3);
    return t;
  }
  function s(r) {
    return 4294967295 & r;
  }
  function C(r, e, t, n, o, a) {
    return (t >>> 5 ^ e << 2) + (e >>> 3 ^ t << 4) ^ (r ^ e) + (a[3 & n ^ o] ^ t);
  }
  function a(r) {
    return r.length < 4 && (r.length = 4), r;
  }
  function c(r) {
    if (/^[\x00-\x7f]*$/.test(r)) return r;
    for (var e = [], t = r.length, n = 0, o = 0; n < t; ++n, ++o) {
      var a = r.charCodeAt(n);
      if (a < 128) e[o] = r.charAt(n);else if (a < 2048) e[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a);else {
        if (!(a < 55296 || 57343 < a)) {
          if (n + 1 < t) {
            var c = r.charCodeAt(n + 1);
            if (a < 56320 && 56320 <= c && c <= 57343) {
              var i = 65536 + ((1023 & a) << 10 | 1023 & c);
              e[o] = String.fromCharCode(240 | i >> 18 & 63, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i), ++n;
              continue;
            }
          }
          throw new Error("Malformed string");
        }
        e[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a);
      }
    }
    return e.join("");
  }
  function i(r, e) {
    return (null == e || e < 0) && (e = r.length), 0 === e ? "" : /^[\x00-\x7f]*$/.test(r) || !/^[\x00-\xff]*$/.test(r) ? e === r.length ? r : r.substr(0, e) : (e < 32767 ? function (r, e) {
      for (var t = new Array(e), n = 0, o = 0, a = r.length; n < e && o < a; n++) {
        var c = r.charCodeAt(o++);
        switch (c >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            t[n] = c;
            break;
          case 12:
          case 13:
            if (!(o < a)) throw new Error("Unfinished UTF-8 octet sequence");
            t[n] = (31 & c) << 6 | 63 & r.charCodeAt(o++);
            break;
          case 14:
            if (!(o + 1 < a)) throw new Error("Unfinished UTF-8 octet sequence");
            t[n] = (15 & c) << 12 | (63 & r.charCodeAt(o++)) << 6 | 63 & r.charCodeAt(o++);
            break;
          case 15:
            if (!(o + 2 < a)) throw new Error("Unfinished UTF-8 octet sequence");
            var i = ((7 & c) << 18 | (63 & r.charCodeAt(o++)) << 12 | (63 & r.charCodeAt(o++)) << 6 | 63 & r.charCodeAt(o++)) - 65536;
            if (!(0 <= i && i <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + i.toString(16));
            t[n++] = i >> 10 & 1023 | 55296, t[n] = 1023 & i | 56320;
            break;
          default:
            throw new Error("Bad UTF-8 encoding 0x" + c.toString(16));
        }
      }
      return n < e && (t.length = n), String.fromCharCode.apply(String, t);
    } : function (r, e) {
      for (var t = [], n = new Array(32768), o = 0, a = 0, c = r.length; o < e && a < c; o++) {
        var i = r.charCodeAt(a++);
        switch (i >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            n[o] = i;
            break;
          case 12:
          case 13:
            if (!(a < c)) throw new Error("Unfinished UTF-8 octet sequence");
            n[o] = (31 & i) << 6 | 63 & r.charCodeAt(a++);
            break;
          case 14:
            if (!(a + 1 < c)) throw new Error("Unfinished UTF-8 octet sequence");
            n[o] = (15 & i) << 12 | (63 & r.charCodeAt(a++)) << 6 | 63 & r.charCodeAt(a++);
            break;
          case 15:
            if (!(a + 2 < c)) throw new Error("Unfinished UTF-8 octet sequence");
            var h = ((7 & i) << 18 | (63 & r.charCodeAt(a++)) << 12 | (63 & r.charCodeAt(a++)) << 6 | 63 & r.charCodeAt(a++)) - 65536;
            if (!(0 <= h && h <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + h.toString(16));
            n[o++] = h >> 10 & 1023 | 55296, n[o] = 1023 & h | 56320;
            break;
          default:
            throw new Error("Bad UTF-8 encoding 0x" + i.toString(16));
        }
        if (32766 <= o) {
          var f = o + 1;
          n.length = f, t[t.length] = String.fromCharCode.apply(String, n), e -= f, o = -1;
        }
      }
      return 0 < o && (n.length = o, t[t.length] = String.fromCharCode.apply(String, n)), t.join("");
    })(r, e);
  }
  function f(r, e) {
    return null == r || 0 === r.length ? r : (r = c(r), e = c(e), n(function (r, e) {
      var t,
        n,
        o,
        a,
        c,
        i,
        h = r.length,
        f = h - 1;
      for (n = r[f], i = (o = 0) | Math.floor(6 + 52 / h); 0 < i; --i) {
        for (a = (o = s(o + d)) >>> 2 & 3, c = 0; c < f; ++c) t = r[c + 1], n = r[c] = s(r[c] + C(o, t, n, c, a, e));
        t = r[0], n = r[f] = s(r[f] + C(o, t, n, f, a, e));
      }
      return r;
    }(o(r, !0), a(o(e, !1))), !1));
  }
  function l(r, e) {
    return null == r || 0 === r.length ? r : (e = c(e), i(n(function (r, e) {
      var t,
        n,
        o,
        a,
        c,
        i = r.length,
        h = i - 1;
      for (t = r[0], o = s(Math.floor(6 + 52 / i) * d); 0 !== o; o = s(o - d)) {
        for (a = o >>> 2 & 3, c = h; 0 < c; --c) n = r[c - 1], t = r[c] = s(r[c] - C(o, t, n, c, a, e));
        n = r[h], t = r[0] = s(r[0] - C(o, t, n, 0, a, e));
      }
      return r;
    }(o(r, !1), a(o(e, !1))), !0)));
  }
  t.XXTEA = {
    utf8Encode: c,
    utf8Decode: i,
    encrypt: f,
    encryptToBase64: function (r, e) {
      return t.btoa(f(r, e));
    },
    decrypt: l,
    decryptFromBase64: function (r, e) {
      return null == r || 0 === r.length ? r : l(t.atob(r), e);
    }
  };
}(this || [eval][0]("this"));
!function (t, n) {
  var r, e;
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (r = t.Base64, (e = n()).noConflict = function () {
    return t.Base64 = r, e;
  }, t.Meteor && (Base64 = e), t.Base64 = e);
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : this, function () {
  "use strict";

  var t,
    n = "3.7.1",
    r = "function" == typeof atob,
    e = "function" == typeof btoa,
    o = "function" == typeof Buffer,
    u = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
    i = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
    f = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
    c = (t = {}, f.forEach(function (n, r) {
      return t[n] = r;
    }), t),
    a = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    d = String.fromCharCode.bind(String),
    s = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t, n) {
      return void 0 === n && (n = function (t) {
        return t;
      }), new Uint8Array(Array.prototype.slice.call(t, 0).map(n));
    },
    l = function (t) {
      return t.replace(/[+\/]/g, function (t) {
        return "+" == t ? "-" : "_";
      }).replace(/=+$/m, "");
    },
    h = function (t) {
      return t.replace(/[^A-Za-z0-9\+\/]/g, "");
    },
    p = function (t) {
      for (var n, r, e, o, u = "", i = t.length % 3, c = 0; c < t.length;) {
        if ((r = t.charCodeAt(c++)) > 255 || (e = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255) throw new TypeError("invalid character found");
        u += f[(n = r << 16 | e << 8 | o) >> 18 & 63] + f[n >> 12 & 63] + f[n >> 6 & 63] + f[63 & n];
      }
      return i ? u.slice(0, i - 3) + "===".substring(i) : u;
    },
    y = e ? function (t) {
      return btoa(t);
    } : o ? function (t) {
      return Buffer.from(t, "binary").toString("base64");
    } : p,
    A = o ? function (t) {
      return Buffer.from(t).toString("base64");
    } : function (t) {
      for (var n = [], r = 0, e = t.length; r < e; r += 4096) n.push(d.apply(null, t.subarray(r, r + 4096)));
      return y(n.join(""));
    },
    b = function (t, n) {
      return void 0 === n && (n = !1), n ? l(A(t)) : A(t);
    },
    g = function (t) {
      if (t.length < 2) return (n = t.charCodeAt(0)) < 128 ? t : n < 2048 ? d(192 | n >>> 6) + d(128 | 63 & n) : d(224 | n >>> 12 & 15) + d(128 | n >>> 6 & 63) + d(128 | 63 & n);
      var n = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
      return d(240 | n >>> 18 & 7) + d(128 | n >>> 12 & 63) + d(128 | n >>> 6 & 63) + d(128 | 63 & n);
    },
    B = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    x = function (t) {
      return t.replace(B, g);
    },
    C = o ? function (t) {
      return Buffer.from(t, "utf8").toString("base64");
    } : i ? function (t) {
      return A(i.encode(t));
    } : function (t) {
      return y(x(t));
    },
    m = function (t, n) {
      return void 0 === n && (n = !1), n ? l(C(t)) : C(t);
    },
    v = function (t) {
      return m(t, !0);
    },
    U = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    F = function (t) {
      switch (t.length) {
        case 4:
          var n = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
          return d(55296 + (n >>> 10)) + d(56320 + (1023 & n));
        case 3:
          return d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
        default:
          return d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
      }
    },
    w = function (t) {
      return t.replace(U, F);
    },
    S = function (t) {
      if (t = t.replace(/\s+/g, ""), !a.test(t)) throw new TypeError("malformed base64.");
      t += "==".slice(2 - (3 & t.length));
      for (var n, r, e, o = "", u = 0; u < t.length;) n = c[t.charAt(u++)] << 18 | c[t.charAt(u++)] << 12 | (r = c[t.charAt(u++)]) << 6 | (e = c[t.charAt(u++)]), o += 64 === r ? d(n >> 16 & 255) : 64 === e ? d(n >> 16 & 255, n >> 8 & 255) : d(n >> 16 & 255, n >> 8 & 255, 255 & n);
      return o;
    },
    E = r ? function (t) {
      return atob(h(t));
    } : o ? function (t) {
      return Buffer.from(t, "base64").toString("binary");
    } : S,
    D = o ? function (t) {
      return s(Buffer.from(t, "base64"));
    } : function (t) {
      return s(E(t), function (t) {
        return t.charCodeAt(0);
      });
    },
    R = function (t) {
      return D(T(t));
    },
    z = o ? function (t) {
      return Buffer.from(t, "base64").toString("utf8");
    } : u ? function (t) {
      return u.decode(D(t));
    } : function (t) {
      return w(E(t));
    },
    T = function (t) {
      return h(t.replace(/[-_]/g, function (t) {
        return "-" == t ? "+" : "/";
      }));
    },
    Z = function (t) {
      return z(T(t));
    },
    j = function (t) {
      return {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      };
    },
    I = function () {
      var t = function (t, n) {
        return Object.defineProperty(String.prototype, t, j(n));
      };
      t("fromBase64", function () {
        return Z(this);
      }), t("toBase64", function (t) {
        return m(this, t);
      }), t("toBase64URI", function () {
        return m(this, !0);
      }), t("toBase64URL", function () {
        return m(this, !0);
      }), t("toUint8Array", function () {
        return R(this);
      });
    },
    O = function () {
      var t = function (t, n) {
        return Object.defineProperty(Uint8Array.prototype, t, j(n));
      };
      t("toBase64", function (t) {
        return b(this, t);
      }), t("toBase64URI", function () {
        return b(this, !0);
      }), t("toBase64URL", function () {
        return b(this, !0);
      });
    },
    P = {
      version: n,
      VERSION: "3.7.1",
      atob: E,
      atobPolyfill: S,
      btoa: y,
      btoaPolyfill: p,
      fromBase64: Z,
      toBase64: m,
      encode: m,
      encodeURI: v,
      encodeURL: v,
      utob: x,
      btou: w,
      decode: Z,
      isValid: function (t) {
        if ("string" != typeof t) return !1;
        var n = t.replace(/\s+/g, "").replace(/=+$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(n) || !/[^\s0-9a-zA-Z\-_]/.test(n);
      },
      fromUint8Array: b,
      toUint8Array: R,
      extendString: I,
      extendUint8Array: O,
      extendBuiltins: function () {
        I(), O();
      },
      Base64: {}
    };
  return Object.keys(P).forEach(function (t) {
    return P.Base64[t] = P[t];
  }), P;
});