//Fri Jan 31 2025 12:07:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function randomRange(_0x316169, _0x366b75) {
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