//Wed Nov 05 2025 21:08:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (n) {
  "use strict";

  function _0x116c6g(n, t) {
    var _0x7eafe = 11;
    var r = (65535 & n) + (65535 & t);
    _0x7eafe = 12;
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  function _0x56ac7c(n, t, r, e, o, u) {
    return _0x116c6g((u = _0x116c6g(_0x116c6g(t, n), _0x116c6g(e, u))) << o | u >>> 32 - o, r);
  }
  function _0x1c64f(n, t, r, e, o, u, c) {
    return _0x56ac7c(t & r | ~t & e, n, t, o, u, c);
  }
  function _0xfb_0x5f5(n, t, r, e, o, u, c) {
    return _0x56ac7c(t & e | r & ~e, n, t, o, u, c);
  }
  function _0xd_0x5e9(n, t, r, e, o, u, c) {
    return _0x56ac7c(t ^ r ^ e, n, t, o, u, c);
  }
  function _0xge8d(n, t, r, e, o, u, c) {
    return _0x56ac7c(r ^ (t | ~e), n, t, o, u, c);
  }
  function c(n, t) {
    var r, e, o, u;
    n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
    for (var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0; h < n['\u006C\u0065\u006E\u0067\u0074\u0068']; h += 16) c = _0x1c64f(r = c, e = f, o = i, u = a, n[h], 7, -680876936), a = _0x1c64f(a, c, f, i, n[h + 1], 12, -389564586), i = _0x1c64f(i, a, c, f, n[h + 2], 17, 606105819), f = _0x1c64f(f, i, a, c, n[h + 3], 22, -1044525330), c = _0x1c64f(c, f, i, a, n[h + 4], 7, -176418897), a = _0x1c64f(a, c, f, i, n[h + 5], 12, 1200080426), i = _0x1c64f(i, a, c, f, n[h + 6], 17, -1473231341), f = _0x1c64f(f, i, a, c, n[h + 7], 22, -45705983), c = _0x1c64f(c, f, i, a, n[h + 8], 7, 1770035416), a = _0x1c64f(a, c, f, i, n[h + 9], 12, -1958414417), i = _0x1c64f(i, a, c, f, n[h + 10], 17, -42063), f = _0x1c64f(f, i, a, c, n[h + 11], 22, -1990404162), c = _0x1c64f(c, f, i, a, n[h + 12], 7, 1804603682), a = _0x1c64f(a, c, f, i, n[h + 13], 12, -40341101), i = _0x1c64f(i, a, c, f, n[h + 14], 17, -1502002290), c = _0xfb_0x5f5(c, f = _0x1c64f(f, i, a, c, n[h + 15], 22, 1236535329), i, a, n[h + 1], 5, -165796510), a = _0xfb_0x5f5(a, c, f, i, n[h + 6], 9, -1069501632), i = _0xfb_0x5f5(i, a, c, f, n[h + 11], 14, 643717713), f = _0xfb_0x5f5(f, i, a, c, n[h], 20, -373897302), c = _0xfb_0x5f5(c, f, i, a, n[h + 5], 5, -701558691), a = _0xfb_0x5f5(a, c, f, i, n[h + 10], 9, 38016083), i = _0xfb_0x5f5(i, a, c, f, n[h + 15], 14, -660478335), f = _0xfb_0x5f5(f, i, a, c, n[h + 4], 20, -405537848), c = _0xfb_0x5f5(c, f, i, a, n[h + 9], 5, 568446438), a = _0xfb_0x5f5(a, c, f, i, n[h + 14], 9, -1019803690), i = _0xfb_0x5f5(i, a, c, f, n[h + 3], 14, -187363961), f = _0xfb_0x5f5(f, i, a, c, n[h + 8], 20, 1163531501), c = _0xfb_0x5f5(c, f, i, a, n[h + 13], 5, -1444681467), a = _0xfb_0x5f5(a, c, f, i, n[h + 2], 9, -51403784), i = _0xfb_0x5f5(i, a, c, f, n[h + 7], 14, 1735328473), c = _0xd_0x5e9(c, f = _0xfb_0x5f5(f, i, a, c, n[h + 12], 20, -1926607734), i, a, n[h + 5], 4, -378558), a = _0xd_0x5e9(a, c, f, i, n[h + 8], 11, -2022574463), i = _0xd_0x5e9(i, a, c, f, n[h + 11], 16, 1839030562), f = _0xd_0x5e9(f, i, a, c, n[h + 14], 23, -35309556), c = _0xd_0x5e9(c, f, i, a, n[h + 1], 4, -1530992060), a = _0xd_0x5e9(a, c, f, i, n[h + 4], 11, 1272893353), i = _0xd_0x5e9(i, a, c, f, n[h + 7], 16, -155497632), f = _0xd_0x5e9(f, i, a, c, n[h + 10], 23, -1094730640), c = _0xd_0x5e9(c, f, i, a, n[h + 13], 4, 681279174), a = _0xd_0x5e9(a, c, f, i, n[h], 11, -358537222), i = _0xd_0x5e9(i, a, c, f, n[h + 3], 16, -722521979), f = _0xd_0x5e9(f, i, a, c, n[h + 6], 23, 76029189), c = _0xd_0x5e9(c, f, i, a, n[h + 9], 4, -640364487), a = _0xd_0x5e9(a, c, f, i, n[h + 12], 11, -421815835), i = _0xd_0x5e9(i, a, c, f, n[h + 15], 16, 530742520), c = _0xge8d(c, f = _0xd_0x5e9(f, i, a, c, n[h + 2], 23, -995338651), i, a, n[h], 6, -198630844), a = _0xge8d(a, c, f, i, n[h + 7], 10, 1126891415), i = _0xge8d(i, a, c, f, n[h + 14], 15, -1416354905), f = _0xge8d(f, i, a, c, n[h + 5], 21, -57434055), c = _0xge8d(c, f, i, a, n[h + 12], 6, 1700485571), a = _0xge8d(a, c, f, i, n[h + 3], 10, -1894986606), i = _0xge8d(i, a, c, f, n[h + 10], 15, -1051523), f = _0xge8d(f, i, a, c, n[h + 1], 21, -2054922799), c = _0xge8d(c, f, i, a, n[h + 8], 6, 1873313359), a = _0xge8d(a, c, f, i, n[h + 15], 10, -30611744), i = _0xge8d(i, a, c, f, n[h + 6], 15, -1560198380), f = _0xge8d(f, i, a, c, n[h + 13], 21, 1309151649), c = _0xge8d(c, f, i, a, n[h + 4], 6, -145523070), a = _0xge8d(a, c, f, i, n[h + 11], 10, -1120210379), i = _0xge8d(i, a, c, f, n[h + 2], 15, 718787259), f = _0xge8d(f, i, a, c, n[h + 9], 21, -343485551), c = _0x116c6g(c, r), f = _0x116c6g(f, e), i = _0x116c6g(i, o), a = _0x116c6g(a, u);
    return [c, f, i, a];
  }
  function _0x77f8c(n) {
    for (var t = "", r = 32 * n['\u006C\u0065\u006E\u0067\u0074\u0068'], e = 0; e < r; e += 8) t += String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](n[e >> 5] >>> e % 32 & 255);
    return t;
  }
  function _0x4cbe4f(n) {
    var _0x_0x9c8;
    var t = [];
    _0x_0x9c8 = 7;
    for (t[(n['\u006C\u0065\u006E\u0067\u0074\u0068'] >> 2) - 1] = undefined, e = 0; e < t['\u006C\u0065\u006E\u0067\u0074\u0068']; e += 1) t[e] = 0;
    for (var r = 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068'], e = 0; e < r; e += 8) t[e >> 5] |= (255 & n['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](e / 8)) << e % 32;
    return t;
  }
  function e(n) {
    for (var t, r = "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0061\u0062\u0063\u0064\u0065\u0066", e = "", o = 0; o < n['\u006C\u0065\u006E\u0067\u0074\u0068']; o += 1) t = n['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](o), e += r['\u0063\u0068\u0061\u0072\u0041\u0074'](t >>> 4 & 15) + r['\u0063\u0068\u0061\u0072\u0041\u0074'](15 & t);
    return e;
  }
  function _0xddd4fg(n) {
    return unescape(encodeURIComponent(n));
  }
  function _0x04461d(n) {
    return _0x77f8c(c(_0x4cbe4f(n = _0xddd4fg(n)), 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068']));
  }
  function _0xa7cfg(n, t) {
    return function (n, t) {
      var r,
        e = _0x4cbe4f(n),
        o = [],
        u = [];
      for (o[15] = u[15] = undefined, 16 < e['\u006C\u0065\u006E\u0067\u0074\u0068'] && (e = c(e, 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068'])), r = 0; r < 16; r += 1) o[r] = 909522486 ^ e[r], u[r] = 1549556828 ^ e[r];
      return t = c(o['\u0063\u006F\u006E\u0063\u0061\u0074'](_0x4cbe4f(t)), 512 + 8 * t['\u006C\u0065\u006E\u0067\u0074\u0068']), _0x77f8c(c(u['\u0063\u006F\u006E\u0063\u0061\u0074'](t), 640));
    }(_0xddd4fg(n), _0xddd4fg(t));
  }
  function t(n, t, r) {
    return t ? r ? _0xa7cfg(t, n) : e(_0xa7cfg(t, n)) : r ? _0x04461d(n) : e(_0x04461d(n));
  }
  "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E" == typeof define && define['\u0061\u006D\u0064'] ? define(function () {
    return t;
  }) : "\u006F\u0062\u006A\u0065\u0063\u0074" == typeof module && module['\u0065\u0078\u0070\u006F\u0072\u0074\u0073'] ? module['\u0065\u0078\u0070\u006F\u0072\u0074\u0073'] = t : n['\u006D\u0064\u0035'] = t;
}(this);
function gt() {
  var _0x4e7b = 7;
  var _0x3e27e = "emit/noisiver/moc.ayalamix.www//:sptth".split("").reverse().join("");
  _0x4e7b = 0;
  var _0xb5aeac;
  var _0x4a04e = new XMLHttpRequest();
  _0xb5aeac = 2;
  var _0x3_0x828 = null;
  var _0xe863e = false;
  var _0x7c_0x1a1 = setTimeout(function () {
    _0xe863e = true;
    if (_0x4a04e['\u0072\u0065\u0061\u0064\u0079\u0053\u0074\u0061\u0074\u0065'] !== 4) {
      _0x4a04e['\u0061\u0062\u006F\u0072\u0074']();
    }
  }, 2000);
  try {
    _0x4a04e['\u006F\u0070\u0065\u006E']("TEG".split("").reverse().join(""), _0x3e27e, false);
    _0x4a04e['\u0073\u0065\u006E\u0064'](null);
    clearTimeout(_0x7c_0x1a1);
    if (_0xe863e) {
      _0x3_0x828 = new Date()['\u0067\u0065\u0074\u0054\u0069\u006D\u0065']();
    } else if (_0x4a04e['\u0073\u0074\u0061\u0074\u0075\u0073'] >= 200 && _0x4a04e['\u0073\u0074\u0061\u0074\u0075\u0073'] < 300) {
      _0x3_0x828 = Number(_0x4a04e['\u0072\u0065\u0073\u0070\u006F\u006E\u0073\u0065\u0054\u0065\u0078\u0074']);
    } else {
      _0x3_0x828 = new Date()['\u0067\u0065\u0074\u0054\u0069\u006D\u0065']();
    }
  } catch (error) {
    clearTimeout(_0x7c_0x1a1);
    _0x3_0x828 = new Date()['\u0067\u0065\u0074\u0054\u0069\u006D\u0065']();
  }
  return _0x3_0x828;
}
function crc32(id) {
  if (!(typeof mkPlayer !== "\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064" && mkPlayer !== null && "\u0076\u0065\u0072\u0073\u0069\u006F\u006E" in mkPlayer)) {
    return '';
  }
  id = String(id);
  var _0xa4d = 14;
  var _0x3bc3a = String(window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u006F\u0073\u0074\u006E\u0061\u006D\u0065']);
  _0xa4d = "efqlpo".split("").reverse().join("");
  var _0x43fb;
  var _0xf3bgdc = mkPlayer['\u0076\u0065\u0072\u0073\u0069\u006F\u006E'];
  _0x43fb = 9;
  var _0xa298ef = _0xf3bgdc['\u0073\u0070\u006C\u0069\u0074']("\u002E")['\u006D\u0061\u0070'](function (part) {
    return part['\u006C\u0065\u006E\u0067\u0074\u0068'] === 1 ? "\u0030" + part : part;
  })['\u006A\u006F\u0069\u006E']('');
  var _0x7b52ad = gt();
  var _0x7dc7b = _0x7b52ad['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0073\u006C\u0069\u0063\u0065'](0, 9);
  var _0x4_0x7b7 = _0x3bc3a + "\u007C" + _0xa298ef + "\u007C" + _0x7dc7b + "\u007C" + id;
  var _0xfa46ab = md5(_0x4_0x7b7);
  var _0x2_0x81f = 11;
  var _0x6_0x9f9 = _0xfa46ab['\u0073\u006C\u0069\u0063\u0065'](-8)['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();
  _0x2_0x81f = 9;
  return _0x6_0x9f9;
}