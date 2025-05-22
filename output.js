//Thu May 22 2025 03:59:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function randomRange(_0x5af209, _0x16513b) {
  (function () {})();
  var _0x4d7faa = "",
    _0x46b3e7 = _0x16513b ? Math.round(Math.random() * (_0x16513b - _0x5af209)) + _0x5af209 : _0x5af209,
    _0x44633e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (var _0x31a80a = 0; _0x31a80a < _0x46b3e7; _0x31a80a++) {
    {
      var _0xcc8c70 = Math.round(Math.random() * (_0x44633e.length - 1));
      _0x4d7faa += _0x44633e[_0xcc8c70];
    }
  }
  return _0x4d7faa;
}
var _token_key = CryptoJS.enc.Utf8.parse("A42EAC0C2B408472"),
  _token_iv = CryptoJS.enc.Utf8.parse(le_token),
  key_token = CryptoJS.enc.Utf8.parse(randomRange(16));
function v_encrypt(_0xddf4f, _0x373ca0, _0x4b71b8) {
  return CryptoJS.AES.encrypt(_0xddf4f, _0x373ca0, {
    "iv": _0x4b71b8,
    "mode": CryptoJS.mode.CBC
  }).toString();
}
function v_decrypt(_0x1bd6ce, _0x22e927, _0x3223de) {
  return CryptoJS.AES.decrypt(_0x1bd6ce, _0x22e927, {
    "iv": _0x3223de
  }).toString(CryptoJS.enc.Utf8);
}
function getVideoInfo(_0x5a02f8) {
  return v_encrypt(v_decrypt(_0x5a02f8, _token_key, _token_iv), _token_key, key_token);
}