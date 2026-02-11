//Wed Feb 11 2026 05:59:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
self == top && ($("head").html("<meta charset=\"UTF-8\"><meta name=\"referrer\" content=\"no-referrer\"><title>404</title> "), $("body").html("404").show());
function getQueryString(_0x3fc394) {
  var _0x4a4219 = new RegExp("(^|&)" + _0x3fc394 + "=([^&]*)(&|$)", "i"),
    _0x512529 = window.location.search.substr(1).match(_0x4a4219);
  if (_0x512529 != null) {
    return unescape(_0x512529[2]);
  }
  return null;
}
function loadStart() {
  $("#start").hide();
  $("#loading").show();
}
function loadError(_0x3ff58b) {
  $("#start").hide();
  $("#loading").show();
  $("#loading").html(_0x3ff58b);
}
function loadSuccess() {
  $("#start").hide();
  $("#loading").hide();
  $("#a1").show();
}
function isEmpty(_0x3f8657) {
  return typeof _0x3f8657 == "undefined" || _0x3f8657 == null || _0x3f8657 == "";
}
function contains(_0x3ff80c, _0x7a3dce) {
  return _0x3ff80c.indexOf(_0x7a3dce) != -1;
}
function requestApi() {
  $.post("api.php", {
    "vid": getQueryString("vid")
  }, function (_0xba262e) {
    !isEmpty(_0xba262e) && _0xba262e.code == 200 ? (loadSuccess(), _0xba262e.data.url = sign(_0xba262e.data.url), loadPlayer(_0xba262e.data)) : loadError("加载失败");
  }, "json");
}
$(document).ready(function () {
  $("#start").click(function () {
    loadStart();
    requestApi();
  });
});
function type(_0x3e1f5b) {
  if (contains(_0x3e1f5b, ".m3u8")) return "hls";else {
    if (contains(_0x3e1f5b, ".mp4")) {
      return "mp4";
    } else return "auto";
  }
}
function loadPlayer(_0x1c0cea) {
  const _0xcd768c = new DPlayer({
    "container": document.getElementById("a1"),
    "theme": "#ff0000",
    "video": {
      "url": _0x1c0cea.url,
      "type": _0x1c0cea.type,
      "pic": _0x1c0cea.poster,
      "thumbnails": "",
      "customType": {
        "customHls": function (_0xae79f5, _0x31088a) {
          {
            const _0x376835 = new Hls();
            _0x376835.loadSource(_0xae79f5.src);
            _0x376835.attachMedia(_0xae79f5);
          }
        }
      }
    }
  });
}
function Base64() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x5d0368) {
    var _0x593113 = "";
    var _0x14bdae, _0x2ce89f, _0x1c8d7e, _0xc085a2, _0xf8e18, _0x530898, _0x595e08;
    var _0x4625a6 = 0;
    _0x5d0368 = _utf8_encode(_0x5d0368);
    while (_0x4625a6 < _0x5d0368.length) {
      _0x14bdae = _0x5d0368.charCodeAt(_0x4625a6++);
      _0x2ce89f = _0x5d0368.charCodeAt(_0x4625a6++);
      _0x1c8d7e = _0x5d0368.charCodeAt(_0x4625a6++);
      _0xc085a2 = _0x14bdae >> 2;
      _0xf8e18 = (_0x14bdae & 3) << 4 | _0x2ce89f >> 4;
      _0x530898 = (_0x2ce89f & 15) << 2 | _0x1c8d7e >> 6;
      _0x595e08 = _0x1c8d7e & 63;
      if (isNaN(_0x2ce89f)) {
        _0x530898 = _0x595e08 = 64;
      } else {
        if (isNaN(_0x1c8d7e)) {
          _0x595e08 = 64;
        }
      }
      _0x593113 = _0x593113 + _keyStr.charAt(_0xc085a2) + _keyStr.charAt(_0xf8e18) + _keyStr.charAt(_0x530898) + _keyStr.charAt(_0x595e08);
    }
    return _0x593113;
  };
  this.decode = function (_0x2f9e36) {
    var _0x5429c4 = "";
    var _0x34d8a5, _0x2e4d38, _0x5e8080;
    var _0x57837a, _0x2ee819, _0x531fba, _0x35affa;
    var _0x48aefe = 0;
    _0x2f9e36 = _0x2f9e36.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x48aefe < _0x2f9e36.length) {
      _0x57837a = _keyStr.indexOf(_0x2f9e36.charAt(_0x48aefe++));
      _0x2ee819 = _keyStr.indexOf(_0x2f9e36.charAt(_0x48aefe++));
      _0x531fba = _keyStr.indexOf(_0x2f9e36.charAt(_0x48aefe++));
      _0x35affa = _keyStr.indexOf(_0x2f9e36.charAt(_0x48aefe++));
      _0x34d8a5 = _0x57837a << 2 | _0x2ee819 >> 4;
      _0x2e4d38 = (_0x2ee819 & 15) << 4 | _0x531fba >> 2;
      _0x5e8080 = (_0x531fba & 3) << 6 | _0x35affa;
      _0x5429c4 = _0x5429c4 + String.fromCharCode(_0x34d8a5);
      _0x531fba != 64 && (_0x5429c4 = _0x5429c4 + String.fromCharCode(_0x2e4d38));
      _0x35affa != 64 && (_0x5429c4 = _0x5429c4 + String.fromCharCode(_0x5e8080));
    }
    _0x5429c4 = _utf8_decode(_0x5429c4);
    return _0x5429c4;
  };
  _utf8_encode = function (_0x3a8460) {
    {
      _0x3a8460 = _0x3a8460.replace(/\r\n/g, "\n");
      var _0x5f09d3 = "";
      for (var _0x311bff = 0; _0x311bff < _0x3a8460.length; _0x311bff++) {
        var _0x50a9ed = _0x3a8460.charCodeAt(_0x311bff);
        if (_0x50a9ed < 128) _0x5f09d3 += String.fromCharCode(_0x50a9ed);else _0x50a9ed > 127 && _0x50a9ed < 2048 ? (_0x5f09d3 += String.fromCharCode(_0x50a9ed >> 6 | 192), _0x5f09d3 += String.fromCharCode(_0x50a9ed & 63 | 128)) : (_0x5f09d3 += String.fromCharCode(_0x50a9ed >> 12 | 224), _0x5f09d3 += String.fromCharCode(_0x50a9ed >> 6 & 63 | 128), _0x5f09d3 += String.fromCharCode(_0x50a9ed & 63 | 128));
      }
      return _0x5f09d3;
    }
  };
  _utf8_decode = function (_0x36674d) {
    var _0x5dd418 = "";
    var _0x859095 = 0;
    var _0x725516 = c1 = c2 = 0;
    while (_0x859095 < _0x36674d.length) {
      _0x725516 = _0x36674d.charCodeAt(_0x859095);
      if (_0x725516 < 128) _0x5dd418 += String.fromCharCode(_0x725516), _0x859095++;else _0x725516 > 191 && _0x725516 < 224 ? (c2 = _0x36674d.charCodeAt(_0x859095 + 1), _0x5dd418 += String.fromCharCode((_0x725516 & 31) << 6 | c2 & 63), _0x859095 += 2) : (c2 = _0x36674d.charCodeAt(_0x859095 + 1), c3 = _0x36674d.charCodeAt(_0x859095 + 2), _0x5dd418 += String.fromCharCode((_0x725516 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x859095 += 3);
    }
    return _0x5dd418;
  };
}
function sign(_0x278289) {
  var _0x76be42 = new Base64(),
    _0x278289 = customStrDecode(_0x278289),
    _0x45f1fe = _0x278289.split("/"),
    _0x400167 = "";
  for (var _0x317232 = 0; _0x317232 < _0x45f1fe.length; _0x317232++) {
    var _0xb57ed3 = _0x317232 + 1 == _0x45f1fe.length ? "" : "/";
    if (_0x317232 == 0 || _0x317232 == 1) {} else {
      _0x400167 += _0x45f1fe[_0x317232] + _0xb57ed3;
    }
  }
  var _0x413ec6 = _0x76be42.decode(_0x400167),
    _0xb5279f = deString(JSON.parse(_0x76be42.decode(_0x45f1fe[1])), JSON.parse(_0x76be42.decode(_0x45f1fe[0])), _0x413ec6);
  return _0xb5279f;
}
function indexOfVal(_0x51038c, _0x3d2780) {
  for (var _0x3f75f3 = 0; _0x3f75f3 < _0x51038c.length; _0x3f75f3++) {
    if (_0x3d2780 === _0x51038c[_0x3f75f3]) return true;
  }
  return false;
}
function customStrDecode(_0xd23398) {
  var _0x2454cb = new Base64();
  key = md5("test");
  _0xd23398 = _0x2454cb.decode(_0xd23398);
  len = key.length;
  code = "";
  for (i = 0; i < _0xd23398.length; i++) {
    k = i % len;
    code += String.fromCharCode(_0xd23398.charCodeAt(i) ^ key.charCodeAt(k));
  }
  return _0x2454cb.decode(code);
}
function deString(_0x337782, _0x45b5d6, _0x589c2d) {
  var _0x45ce26 = "",
    _0x311a7f = _0x337782,
    _0x836c4e = _0x45b5d6,
    _0x302df4 = _0x589c2d.split("");
  for (var _0x6af1ec = 0; _0x6af1ec < _0x302df4.length; _0x6af1ec++) {
    {
      var _0x7a1451 = _0x302df4[_0x6af1ec],
        _0x355a55 = /^[a-zA-Z]+$/.test(_0x7a1451);
      if (_0x355a55 && indexOfVal(_0x836c4e, _0x7a1451)) _0x45ce26 += _0x836c4e[_0x311a7f.indexOf(_0x7a1451)];else {
        _0x45ce26 += _0x7a1451;
      }
    }
  }
  return _0x45ce26;
}