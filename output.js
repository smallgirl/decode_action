//Wed Apr 09 2025 02:26:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (_0x3ceefe) {
  'use strict';

  function _0x163bc2(_0x398e58, _0x32a0a4) {
    var _0x25c9bc = (65535 & _0x398e58) + (65535 & _0x32a0a4);
    return (_0x398e58 >> 16) + (_0x32a0a4 >> 16) + (_0x25c9bc >> 16) << 16 | 65535 & _0x25c9bc;
  }
  function _0x47e9cb(_0x2dbba8, _0x365fb8, _0x3cf0f1, _0x1b15a4, _0x4b61f0, _0x32a0bd) {
    return _0x163bc2((_0x32a0bd = _0x163bc2(_0x163bc2(_0x365fb8, _0x2dbba8), _0x163bc2(_0x1b15a4, _0x32a0bd))) << _0x4b61f0 | _0x32a0bd >>> 32 - _0x4b61f0, _0x3cf0f1);
  }
  function _0x32cff7(_0x100c57, _0x54a2a8, _0x58bb78, _0x56a38b, _0x3a6d24, _0x2ab515, _0x30624a) {
    return _0x47e9cb(_0x54a2a8 & _0x58bb78 | ~_0x54a2a8 & _0x56a38b, _0x100c57, _0x54a2a8, _0x3a6d24, _0x2ab515, _0x30624a);
  }
  function _0xb397e6(_0x279b48, _0x175191, _0x4deb8e, _0xaa1960, _0x434e08, _0xcb74e9, _0x5be4a3) {
    return _0x47e9cb(_0x175191 & _0xaa1960 | _0x4deb8e & ~_0xaa1960, _0x279b48, _0x175191, _0x434e08, _0xcb74e9, _0x5be4a3);
  }
  function _0x2778e6(_0x253640, _0x5dcfe3, _0x289f43, _0x582d40, _0x5b9408, _0x11bca4, _0x4955ed) {
    return _0x47e9cb(_0x5dcfe3 ^ _0x289f43 ^ _0x582d40, _0x253640, _0x5dcfe3, _0x5b9408, _0x11bca4, _0x4955ed);
  }
  function _0x5871cd(_0x4e9dfc, _0x4e5426, _0x8930b7, _0x37f395, _0x2c94ea, _0x1539c8, _0x87ab82) {
    return _0x47e9cb(_0x8930b7 ^ (_0x4e5426 | ~_0x37f395), _0x4e9dfc, _0x4e5426, _0x2c94ea, _0x1539c8, _0x87ab82);
  }
  function _0xeb493a(_0x5bd115, _0x4879e6) {
    var _0x5537ef, _0x2d8dbf, _0x2cbc70, _0x5635a2;
    _0x5bd115[_0x4879e6 >> 5] |= 128 << _0x4879e6 % 32;
    _0x5bd115[14 + (_0x4879e6 + 64 >>> 9 << 4)] = _0x4879e6;
    for (var _0x59bee1 = 1732584193, _0x560a0b = -271733879, _0x4185b1 = -1732584194, _0xa9140b = 271733878, _0x54a717 = 0; _0x54a717 < _0x5bd115.length; _0x54a717 += 16) {
      _0x59bee1 = _0x32cff7(_0x5537ef = _0x59bee1, _0x2d8dbf = _0x560a0b, _0x2cbc70 = _0x4185b1, _0x5635a2 = _0xa9140b, _0x5bd115[_0x54a717], 7, -680876936);
      _0xa9140b = _0x32cff7(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 1], 12, -389564586);
      _0x4185b1 = _0x32cff7(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 2], 17, 606105819);
      _0x560a0b = _0x32cff7(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 3], 22, -1044525330);
      _0x59bee1 = _0x32cff7(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 4], 7, -176418897);
      _0xa9140b = _0x32cff7(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 5], 12, 1200080426);
      _0x4185b1 = _0x32cff7(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 6], 17, -1473231341);
      _0x560a0b = _0x32cff7(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 7], 22, -45705983);
      _0x59bee1 = _0x32cff7(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 8], 7, 1770035416);
      _0xa9140b = _0x32cff7(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 9], 12, -1958414417);
      _0x4185b1 = _0x32cff7(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 10], 17, -42063);
      _0x560a0b = _0x32cff7(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 11], 22, -1990404162);
      _0x59bee1 = _0x32cff7(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 12], 7, 1804603682);
      _0xa9140b = _0x32cff7(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 13], 12, -40341101);
      _0x4185b1 = _0x32cff7(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 14], 17, -1502002290);
      _0x59bee1 = _0xb397e6(_0x59bee1, _0x560a0b = _0x32cff7(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 15], 22, 1236535329), _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 1], 5, -165796510);
      _0xa9140b = _0xb397e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 6], 9, -1069501632);
      _0x4185b1 = _0xb397e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 11], 14, 643717713);
      _0x560a0b = _0xb397e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717], 20, -373897302);
      _0x59bee1 = _0xb397e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 5], 5, -701558691);
      _0xa9140b = _0xb397e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 10], 9, 38016083);
      _0x4185b1 = _0xb397e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 15], 14, -660478335);
      _0x560a0b = _0xb397e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 4], 20, -405537848);
      _0x59bee1 = _0xb397e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 9], 5, 568446438);
      _0xa9140b = _0xb397e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 14], 9, -1019803690);
      _0x4185b1 = _0xb397e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 3], 14, -187363961);
      _0x560a0b = _0xb397e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 8], 20, 1163531501);
      _0x59bee1 = _0xb397e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 13], 5, -1444681467);
      _0xa9140b = _0xb397e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 2], 9, -51403784);
      _0x4185b1 = _0xb397e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 7], 14, 1735328473);
      _0x59bee1 = _0x2778e6(_0x59bee1, _0x560a0b = _0xb397e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 12], 20, -1926607734), _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 5], 4, -378558);
      _0xa9140b = _0x2778e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 8], 11, -2022574463);
      _0x4185b1 = _0x2778e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 11], 16, 1839030562);
      _0x560a0b = _0x2778e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 14], 23, -35309556);
      _0x59bee1 = _0x2778e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 1], 4, -1530992060);
      _0xa9140b = _0x2778e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 4], 11, 1272893353);
      _0x4185b1 = _0x2778e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 7], 16, -155497632);
      _0x560a0b = _0x2778e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 10], 23, -1094730640);
      _0x59bee1 = _0x2778e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 13], 4, 681279174);
      _0xa9140b = _0x2778e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717], 11, -358537222);
      _0x4185b1 = _0x2778e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 3], 16, -722521979);
      _0x560a0b = _0x2778e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 6], 23, 76029189);
      _0x59bee1 = _0x2778e6(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 9], 4, -640364487);
      _0xa9140b = _0x2778e6(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 12], 11, -421815835);
      _0x4185b1 = _0x2778e6(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 15], 16, 530742520);
      _0x59bee1 = _0x5871cd(_0x59bee1, _0x560a0b = _0x2778e6(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 2], 23, -995338651), _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717], 6, -198630844);
      _0xa9140b = _0x5871cd(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 7], 10, 1126891415);
      _0x4185b1 = _0x5871cd(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 14], 15, -1416354905);
      _0x560a0b = _0x5871cd(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 5], 21, -57434055);
      _0x59bee1 = _0x5871cd(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 12], 6, 1700485571);
      _0xa9140b = _0x5871cd(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 3], 10, -1894986606);
      _0x4185b1 = _0x5871cd(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 10], 15, -1051523);
      _0x560a0b = _0x5871cd(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 1], 21, -2054922799);
      _0x59bee1 = _0x5871cd(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 8], 6, 1873313359);
      _0xa9140b = _0x5871cd(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 15], 10, -30611744);
      _0x4185b1 = _0x5871cd(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 6], 15, -1560198380);
      _0x560a0b = _0x5871cd(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 13], 21, 1309151649);
      _0x59bee1 = _0x5871cd(_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b, _0x5bd115[_0x54a717 + 4], 6, -145523070);
      _0xa9140b = _0x5871cd(_0xa9140b, _0x59bee1, _0x560a0b, _0x4185b1, _0x5bd115[_0x54a717 + 11], 10, -1120210379);
      _0x4185b1 = _0x5871cd(_0x4185b1, _0xa9140b, _0x59bee1, _0x560a0b, _0x5bd115[_0x54a717 + 2], 15, 718787259);
      _0x560a0b = _0x5871cd(_0x560a0b, _0x4185b1, _0xa9140b, _0x59bee1, _0x5bd115[_0x54a717 + 9], 21, -343485551);
      _0x59bee1 = _0x163bc2(_0x59bee1, _0x5537ef);
      _0x560a0b = _0x163bc2(_0x560a0b, _0x2d8dbf);
      _0x4185b1 = _0x163bc2(_0x4185b1, _0x2cbc70);
      _0xa9140b = _0x163bc2(_0xa9140b, _0x5635a2);
    }
    return [_0x59bee1, _0x560a0b, _0x4185b1, _0xa9140b];
  }
  function _0x288b5b(_0x835d6c) {
    for (var _0x3b5a46 = "", _0x2cdce0 = 32 * _0x835d6c.length, _0x2fbfac = 0; _0x2fbfac < _0x2cdce0; _0x2fbfac += 8) {
      _0x3b5a46 += String.fromCharCode(_0x835d6c[_0x2fbfac >> 5] >>> _0x2fbfac % 32 & 255);
    }
    return _0x3b5a46;
  }
  function _0x8194b9(_0x34ca1f) {
    var _0x5123af = [];
    for (_0x5123af[(_0x34ca1f.length >> 2) - 1] = void 0, _0x422a70 = 0; _0x422a70 < _0x5123af.length; _0x422a70 += 1) {
      _0x5123af[_0x422a70] = 0;
    }
    for (var _0x1f44b4 = 8 * _0x34ca1f.length, _0x422a70 = 0; _0x422a70 < _0x1f44b4; _0x422a70 += 8) {
      _0x5123af[_0x422a70 >> 5] |= (255 & _0x34ca1f.charCodeAt(_0x422a70 / 8)) << _0x422a70 % 32;
    }
    return _0x5123af;
  }
  function _0x2d2e77(_0x56504d) {
    for (var _0x3c02ae, _0x3d32ac = "0123456789abcdef", _0x4f3a17 = "", _0x15824f = 0; _0x15824f < _0x56504d.length; _0x15824f += 1) {
      _0x3c02ae = _0x56504d.charCodeAt(_0x15824f);
      _0x4f3a17 += _0x3d32ac.charAt(_0x3c02ae >>> 4 & 15) + _0x3d32ac.charAt(15 & _0x3c02ae);
    }
    return _0x4f3a17;
  }
  function _0x5368a8(_0x34b2d3) {
    return unescape(encodeURIComponent(_0x34b2d3));
  }
  function _0x15d4c4(_0x237750) {
    return _0x288b5b(_0xeb493a(_0x8194b9(_0x237750 = _0x5368a8(_0x237750)), 8 * _0x237750.length));
  }
  function _0x19aee1(_0xc5d1a9, _0xacb34d) {
    return function (_0x2dba73, _0x11144a) {
      var _0x5dfb60,
        _0x2087c5 = _0x8194b9(_0x2dba73),
        _0x727710 = [],
        _0x24e22b = [];
      for (_0x727710[15] = _0x24e22b[15] = void 0, 16 < _0x2087c5.length && (_0x2087c5 = _0xeb493a(_0x2087c5, 8 * _0x2dba73.length)), _0x5dfb60 = 0; _0x5dfb60 < 16; _0x5dfb60 += 1) {
        _0x727710[_0x5dfb60] = 909522486 ^ _0x2087c5[_0x5dfb60];
        _0x24e22b[_0x5dfb60] = 1549556828 ^ _0x2087c5[_0x5dfb60];
      }
      _0x11144a = _0xeb493a(_0x727710.concat(_0x8194b9(_0x11144a)), 512 + 8 * _0x11144a.length);
      return _0x288b5b(_0xeb493a(_0x24e22b.concat(_0x11144a), 640));
    }(_0x5368a8(_0xc5d1a9), _0x5368a8(_0xacb34d));
  }
  function _0x150a4f(_0x304648, _0x4122ca, _0xdaf8af) {
    return _0x4122ca ? _0xdaf8af ? _0x19aee1(_0x4122ca, _0x304648) : _0x2d2e77(_0x19aee1(_0x4122ca, _0x304648)) : _0xdaf8af ? _0x15d4c4(_0x304648) : _0x2d2e77(_0x15d4c4(_0x304648));
  }
  "function" == typeof define && define.amd ? define(function () {
    return _0x150a4f;
  }) : "object" == typeof module && module.exports ? module.exports = _0x150a4f : _0x3ceefe.md5 = _0x150a4f;
}(this);
function s(_0xa184d8) {
  if (!(typeof mkPlayer !== "undefined" && mkPlayer !== null && "version" in mkPlayer)) {
    return "";
  }
  _0xa184d8 = String(_0xa184d8);
  var version = mkPlayer.version,
    _0x3096b2 = version.split(".").map(function (_0xa98aab) {
      return _0xa98aab.length === 1 ? "0" + _0xa98aab : _0xa98aab;
    }).join(""),
    _0x545b26 = _0x3096b2.split("").reverse().join(""),
    _0x5e1e21 = _0x3096b2 + "s" + _0xa184d8 + "s" + _0x545b26,
    md5Result = md5(_0x5e1e21),
    _0x2c2b88 = md5Result.slice(-8).toUpperCase();
  return _0x2c2b88;
}