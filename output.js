//Wed Jun 04 2025 04:20:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function randomRange(_0x316169, _0x366b75) {
  var _0x43af49 = function () {
    {
      var _0x140a43 = true;
      return function (_0x5bf843, _0x1955c8) {
        var _0x3fcc5e = _0x140a43 ? function () {
          if (_0x1955c8) {
            {
              var _0x3ecf73 = _0x1955c8.apply(_0x5bf843, arguments);
              _0x1955c8 = null;
              return _0x3ecf73;
            }
          }
        } : function () {};
        _0x140a43 = false;
        return _0x3fcc5e;
      };
    }
  }();
  var _0x53609d = _0x43af49(this, function () {
    {
      var _0xd19c09 = function () {};
      var _0x2a1fa2 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x2a1fa2.console) {
        {
          _0x2a1fa2.console = function (_0xd19c09) {
            var _0x546d91 = {};
            _0x546d91.log = _0xd19c09;
            _0x546d91.warn = _0xd19c09;
            _0x546d91.debug = _0xd19c09;
            _0x546d91.info = _0xd19c09;
            _0x546d91.error = _0xd19c09;
            _0x546d91.exception = _0xd19c09;
            _0x546d91.trace = _0xd19c09;
            return _0x546d91;
          }(_0xd19c09);
        }
      } else {
        _0x2a1fa2.console.log = _0xd19c09;
        _0x2a1fa2.console.warn = _0xd19c09;
        _0x2a1fa2.console.debug = _0xd19c09;
        _0x2a1fa2.console.info = _0xd19c09;
        _0x2a1fa2.console.error = _0xd19c09;
        _0x2a1fa2.console.exception = _0xd19c09;
        _0x2a1fa2.console.trace = _0xd19c09;
      }
    }
  });
  _0x53609d();
  var _0x2ea608 = "",
    _0x553b1e = _0x366b75 ? Math.round(Math.random() * (_0x366b75 - _0x316169)) + _0x316169 : _0x316169,
    _0xb8ee0d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var _0x5d0691 = 0; _0x5d0691 < _0x553b1e; _0x5d0691++) {
    var _0x66d39f = Math.round(Math.random() * (_0xb8ee0d.length - 1));
    _0x2ea608 += _0xb8ee0d[_0x66d39f];
  }
  return _0x2ea608;
}
var _token_key = CryptoJS.enc.Utf8.parse("57A891D97E332A9D");
var _token_iv = CryptoJS.enc.Utf8.parse(bt_token);
var key_token = CryptoJS.enc.Utf8.parse(randomRange(16));
function v_encrypt(_0x40b5a1, _0x247525, _0x40a45a) {
  return CryptoJS.AES.encrypt(_0x40b5a1, _0x247525, {
    "iv": _0x40a45a,
    "mode": CryptoJS.mode.CBC
  }).toString();
}
function v_decrypt(_0x2f61c9, _0x14dd13, _0x2bf4a2) {
  return CryptoJS.AES.decrypt(_0x2f61c9, _0x14dd13, {
    "iv": _0x2bf4a2
  }).toString(CryptoJS.enc.Utf8);
}
function getVideoInfo(_0x285840) {
  return v_encrypt(v_decrypt(_0x285840, _token_key, _token_iv), _token_key, key_token);
}
_0xod4 = "jsjiami.com.v6";