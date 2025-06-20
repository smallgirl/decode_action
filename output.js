//Fri Jun 20 2025 07:41:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (n) {
  "use strict";

  function _0xe0df2f(n, t) {
    var _0x8cfg = 4;
    var r = (65535 & n) + (65535 & t);
    _0x8cfg = 7;
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  function _0xe7eaf(n, t, r, e, o, u) {
    return _0xe0df2f((u = _0xe0df2f(_0xe0df2f(t, n), _0xe0df2f(e, u))) << o | u >>> 32 - o, r);
  }
  function _0xa4d7e(n, t, r, e, o, u, c) {
    return _0xe7eaf(t & r | ~t & e, n, t, o, u, c);
  }
  function _0x4gc4cg(n, t, r, e, o, u, c) {
    return _0xe7eaf(t & e | r & ~e, n, t, o, u, c);
  }
  function _0x32d(n, t, r, e, o, u, c) {
    return _0xe7eaf(t ^ r ^ e, n, t, o, u, c);
  }
  function _0xf9590f(n, t, r, e, o, u, c) {
    return _0xe7eaf(r ^ (t | ~e), n, t, o, u, c);
  }
  function c(n, t) {
    var r, e, o, u;
    n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
    for (var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0; h < n['\u006C\u0065\u006E\u0067\u0074\u0068']; h += 16) c = _0xa4d7e(r = c, e = f, o = i, u = a, n[h], 7, -680876936), a = _0xa4d7e(a, c, f, i, n[h + 1], 12, -389564586), i = _0xa4d7e(i, a, c, f, n[h + 2], 17, 606105819), f = _0xa4d7e(f, i, a, c, n[h + 3], 22, -1044525330), c = _0xa4d7e(c, f, i, a, n[h + 4], 7, -176418897), a = _0xa4d7e(a, c, f, i, n[h + 5], 12, 1200080426), i = _0xa4d7e(i, a, c, f, n[h + 6], 17, -1473231341), f = _0xa4d7e(f, i, a, c, n[h + 7], 22, -45705983), c = _0xa4d7e(c, f, i, a, n[h + 8], 7, 1770035416), a = _0xa4d7e(a, c, f, i, n[h + 9], 12, -1958414417), i = _0xa4d7e(i, a, c, f, n[h + 10], 17, -42063), f = _0xa4d7e(f, i, a, c, n[h + 11], 22, -1990404162), c = _0xa4d7e(c, f, i, a, n[h + 12], 7, 1804603682), a = _0xa4d7e(a, c, f, i, n[h + 13], 12, -40341101), i = _0xa4d7e(i, a, c, f, n[h + 14], 17, -1502002290), c = _0x4gc4cg(c, f = _0xa4d7e(f, i, a, c, n[h + 15], 22, 1236535329), i, a, n[h + 1], 5, -165796510), a = _0x4gc4cg(a, c, f, i, n[h + 6], 9, -1069501632), i = _0x4gc4cg(i, a, c, f, n[h + 11], 14, 643717713), f = _0x4gc4cg(f, i, a, c, n[h], 20, -373897302), c = _0x4gc4cg(c, f, i, a, n[h + 5], 5, -701558691), a = _0x4gc4cg(a, c, f, i, n[h + 10], 9, 38016083), i = _0x4gc4cg(i, a, c, f, n[h + 15], 14, -660478335), f = _0x4gc4cg(f, i, a, c, n[h + 4], 20, -405537848), c = _0x4gc4cg(c, f, i, a, n[h + 9], 5, 568446438), a = _0x4gc4cg(a, c, f, i, n[h + 14], 9, -1019803690), i = _0x4gc4cg(i, a, c, f, n[h + 3], 14, -187363961), f = _0x4gc4cg(f, i, a, c, n[h + 8], 20, 1163531501), c = _0x4gc4cg(c, f, i, a, n[h + 13], 5, -1444681467), a = _0x4gc4cg(a, c, f, i, n[h + 2], 9, -51403784), i = _0x4gc4cg(i, a, c, f, n[h + 7], 14, 1735328473), c = _0x32d(c, f = _0x4gc4cg(f, i, a, c, n[h + 12], 20, -1926607734), i, a, n[h + 5], 4, -378558), a = _0x32d(a, c, f, i, n[h + 8], 11, -2022574463), i = _0x32d(i, a, c, f, n[h + 11], 16, 1839030562), f = _0x32d(f, i, a, c, n[h + 14], 23, -35309556), c = _0x32d(c, f, i, a, n[h + 1], 4, -1530992060), a = _0x32d(a, c, f, i, n[h + 4], 11, 1272893353), i = _0x32d(i, a, c, f, n[h + 7], 16, -155497632), f = _0x32d(f, i, a, c, n[h + 10], 23, -1094730640), c = _0x32d(c, f, i, a, n[h + 13], 4, 681279174), a = _0x32d(a, c, f, i, n[h], 11, -358537222), i = _0x32d(i, a, c, f, n[h + 3], 16, -722521979), f = _0x32d(f, i, a, c, n[h + 6], 23, 76029189), c = _0x32d(c, f, i, a, n[h + 9], 4, -640364487), a = _0x32d(a, c, f, i, n[h + 12], 11, -421815835), i = _0x32d(i, a, c, f, n[h + 15], 16, 530742520), c = _0xf9590f(c, f = _0x32d(f, i, a, c, n[h + 2], 23, -995338651), i, a, n[h], 6, -198630844), a = _0xf9590f(a, c, f, i, n[h + 7], 10, 1126891415), i = _0xf9590f(i, a, c, f, n[h + 14], 15, -1416354905), f = _0xf9590f(f, i, a, c, n[h + 5], 21, -57434055), c = _0xf9590f(c, f, i, a, n[h + 12], 6, 1700485571), a = _0xf9590f(a, c, f, i, n[h + 3], 10, -1894986606), i = _0xf9590f(i, a, c, f, n[h + 10], 15, -1051523), f = _0xf9590f(f, i, a, c, n[h + 1], 21, -2054922799), c = _0xf9590f(c, f, i, a, n[h + 8], 6, 1873313359), a = _0xf9590f(a, c, f, i, n[h + 15], 10, -30611744), i = _0xf9590f(i, a, c, f, n[h + 6], 15, -1560198380), f = _0xf9590f(f, i, a, c, n[h + 13], 21, 1309151649), c = _0xf9590f(c, f, i, a, n[h + 4], 6, -145523070), a = _0xf9590f(a, c, f, i, n[h + 11], 10, -1120210379), i = _0xf9590f(i, a, c, f, n[h + 2], 15, 718787259), f = _0xf9590f(f, i, a, c, n[h + 9], 21, -343485551), c = _0xe0df2f(c, r), f = _0xe0df2f(f, e), i = _0xe0df2f(i, o), a = _0xe0df2f(a, u);
    return [c, f, i, a];
  }
  function _0x603bca(n) {
    for (var t = "", r = 32 * n['\u006C\u0065\u006E\u0067\u0074\u0068'], e = 0; e < r; e += 8) t += String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](n[e >> 5] >>> e % 32 & 255);
    return t;
  }
  function _0xbg951d(n) {
    var _0xdb4a3c;
    var t = [];
    _0xdb4a3c = 11;
    for (t[(n['\u006C\u0065\u006E\u0067\u0074\u0068'] >> 2) - 1] = undefined, e = 0; e < t['\u006C\u0065\u006E\u0067\u0074\u0068']; e += 1) t[e] = 0;
    for (var r = 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068'], e = 0; e < r; e += 8) t[e >> 5] |= (255 & n['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](e / 8)) << e % 32;
    return t;
  }
  function e(n) {
    for (var t, r = "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0061\u0062\u0063\u0064\u0065\u0066", e = "", o = 0; o < n['\u006C\u0065\u006E\u0067\u0074\u0068']; o += 1) t = n['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](o), e += r['\u0063\u0068\u0061\u0072\u0041\u0074'](t >>> 4 & 15) + r['\u0063\u0068\u0061\u0072\u0041\u0074'](15 & t);
    return e;
  }
  function _0x2b3d4c(n) {
    return unescape(encodeURIComponent(n));
  }
  function _0x92265f(n) {
    return _0x603bca(c(_0xbg951d(n = _0x2b3d4c(n)), 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068']));
  }
  function _0xbeb51g(n, t) {
    return function (n, t) {
      var r,
        e = _0xbg951d(n),
        o = [],
        u = [];
      for (o[15] = u[15] = undefined, 16 < e['\u006C\u0065\u006E\u0067\u0074\u0068'] && (e = c(e, 8 * n['\u006C\u0065\u006E\u0067\u0074\u0068'])), r = 0; r < 16; r += 1) o[r] = 909522486 ^ e[r], u[r] = 1549556828 ^ e[r];
      return t = c(o['\u0063\u006F\u006E\u0063\u0061\u0074'](_0xbg951d(t)), 512 + 8 * t['\u006C\u0065\u006E\u0067\u0074\u0068']), _0x603bca(c(u['\u0063\u006F\u006E\u0063\u0061\u0074'](t), 640));
    }(_0x2b3d4c(n), _0x2b3d4c(t));
  }
  function t(n, t, r) {
    return t ? r ? _0xbeb51g(t, n) : e(_0xbeb51g(t, n)) : r ? _0x92265f(n) : e(_0x92265f(n));
  }
  "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E" == typeof define && define['\u0061\u006D\u0064'] ? define(function () {
    return t;
  }) : "tcejbo".split("").reverse().join("") == typeof module && module['\u0065\u0078\u0070\u006F\u0072\u0074\u0073'] ? module['\u0065\u0078\u0070\u006F\u0072\u0074\u0073'] = t : n['\u006D\u0064\u0035'] = t;
}(this);
function crc32(id) {
  if (!(typeof mkPlayer !== "\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064" && mkPlayer !== null && "\u0076\u0065\u0072\u0073\u0069\u006F\u006E" in mkPlayer)) {
    return '';
  }
  id = String(id);
  var _0x4fcbc = 6;
  var _0x2_0x61a = "zyx.oidutsdg.cisum".split("").reverse().join("");
  _0x4fcbc = 4;
  var _0x_0xed9 = 1;
  var _0xe7f = mkPlayer['\u0076\u0065\u0072\u0073\u0069\u006F\u006E'];
  _0x_0xed9 = 16;
  var _0x8074e = _0xe7f['\u0073\u0070\u006C\u0069\u0074']("\u002E")['\u006D\u0061\u0070'](function (part) {
    return part['\u006C\u0065\u006E\u0067\u0074\u0068'] === 1 ? "\u0030" + part : part;
  })['\u006A\u006F\u0069\u006E']('');
  var _0x13bgff;
  var _0xbb3e = _0x2_0x61a + "\u007C" + _0x8074e + "\u007C" + id;
  _0x13bgff = 12;
  var _0x8d_0x351 = md5(_0xbb3e);
  var _0xf2bf9c = 7;
  var _0xee_0x312 = _0x8d_0x351['\u0073\u006C\u0069\u0063\u0065'](-8)['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();
  _0xf2bf9c = 11;
  return _0xee_0x312;
}