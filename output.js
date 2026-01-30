//Fri Jan 30 2026 03:05:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
document.addEventListener("DOMContentLoaded", _0x10909f);
function _0x10909f() {
  const _0x2ff893 = document.getElementById("play-button-overlay"),
    _0xc73148 = document.getElementById("player-container"),
    _0x28e283 = new URLSearchParams(window.location.search).get("url");
  let _0x31e91e = null;
  if (!_0x28e283) {
    {
      _0x2ff893.style.display = "none";
      _0xc73148.style.display = "block";
      _0xc73148.innerHTML = "\n                    <div class=\"loading-text\">\n                     请正确填写视频URL地址~\n                    </div>\n                ";
      return;
    }
  }
  _0x2ff893.addEventListener("click", () => {
    _0x2ff893.style.display = "none";
    _0xc73148.style.display = "block";
    _0xc73148.innerHTML = "<div class=\"loading-text\">视频加载中，请稍候...</div>";
    _0x214d94(_0x28e283).then(_0x393eaf => {
      _0xc73148.innerHTML = "";
      _0x1c68f6(_0x393eaf.url, _0x393eaf.type);
    }).catch(_0x20a534);
  });
  function _0x20a534(_0x4579f9) {
    _0xc73148.innerHTML = "\n                    <div class=\"loading-text\">\n                        <div class=\"error-message\">\n                            " + _0x4579f9.message + "\n                            <br><br>\n                            <button onclick=\"location.reload()\" style=\"\n                                padding: 10px 20px;\n                                background: #ff0000;\n                                color: white;\n                                font-size: 1.3rem;\n                                border: none;\n                                border-radius: 5px;\n                                cursor: pointer;\n                            \">重试</button>\n                        </div>\n                    </div>\n                ";
  }
  function _0x50f410() {
    const _0x127789 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsutvwxyz0123456789+/",
      _0x3d5445 = _0x127789.length,
      _0x47e5f5 = Math.floor((_0x3d5445 - 32) / 2);
    return _0x127789.substring(_0x47e5f5, _0x47e5f5 + 32);
  }
  function _0x5428d1(_0x12343d) {
    try {
      const _0x288a9e = _0x50f410(),
        _0x59ec69 = CryptoJS.enc.Base64.parse(_0x12343d),
        _0x1a3cb3 = CryptoJS.lib.WordArray.create(_0x59ec69.words.slice(0, 4)),
        _0x55862f = CryptoJS.lib.WordArray.create(_0x59ec69.words.slice(4)),
        _0x11b34e = CryptoJS.AES.decrypt({
          "ciphertext": _0x55862f
        }, CryptoJS.enc.Utf8.parse(_0x288a9e), {
          "iv": _0x1a3cb3,
          "mode": CryptoJS.mode.CBC,
          "padding": CryptoJS.pad.Pkcs7
        });
      return _0x11b34e.toString(CryptoJS.enc.Utf8);
    } catch (_0x344008) {
      throw new Error("解密失败: " + _0x344008.message);
    }
  }
  function _0x214d94(_0x411282) {
    {
      const _0x36a86d = new URLSearchParams();
      _0x36a86d.append("url", _0x411282);
      _0x36a86d.append("api_key", "qigejiexi");
      return fetch("qigejiexiii.js", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": _0x36a86d
      }).then(_0x11d86c => {
        if (!_0x11d86c.ok) {
          throw new Error("API密钥无效: " + _0x11d86c.status);
        }
        return _0x11d86c.text();
      }).then(_0x103a08 => {
        {
          let _0x18afbf;
          try {
            _0x18afbf = JSON.parse(_0x103a08);
            if (_0x18afbf.code && _0x18afbf.code !== 200) {
              throw new Error(_0x18afbf.error || "服务器返回错误: " + _0x18afbf.code);
            }
            if (_0x18afbf && _0x18afbf.url) return {
              "url": _0x18afbf.url,
              "type": _0x18afbf.type || "unknown"
            };
          } catch (_0x12a45d) {
            try {
              {
                const _0x4f3541 = _0x5428d1(_0x103a08, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsutvwxyz0123456789+/");
                _0x18afbf = JSON.parse(_0x4f3541);
                if (_0x18afbf.code && _0x18afbf.code !== 200) {
                  throw new Error(_0x18afbf.error || "服务器返回错误: " + _0x18afbf.code);
                }
                if (_0x18afbf && _0x18afbf.url) return {
                  "url": _0x18afbf.url,
                  "type": _0x18afbf.type || "unknown"
                };else {
                  throw new Error("解析失败：返回数据格式错误");
                }
              }
            } catch (_0x2feaee) {
              if (_0x18afbf && _0x18afbf.error) throw new Error(_0x18afbf.error);else throw new Error("解析失败，请刷新重试或检查地址~");
            }
          }
          throw new Error("未知错误：无法解析返回数据");
        }
      }).catch(_0x580665 => {
        if (_0x580665.name === "TypeError") throw new Error("网络连接失败，请检查网络连接");
        throw _0x580665;
      });
    }
  }
  function _0x1c68f6(_0x5f43b4, _0x4ad09d) {
    const _0x14b8a7 = {
      "container": _0xc73148,
      "url": _0x5f43b4,
      "volume": 1,
      "theme": "#ff0000",
      "aspectRatio": true,
      "screenshot": true,
      "setting": true,
      "flip": true,
      "playbackRate": true,
      "autoplay": true,
      "hotkey": true,
      "autoMini": true,
      "pip": true,
      "lock": true,
      "fullscreen": true,
      "playsInline": true,
      "contextmenu": [{
        "html": "<a href=\"https://jx.nnxv.cn\" target=\"_blank\">七哥免费解析服务</a>"
      }],
      "controls": [{
        "position": "right",
        "html": "<img src=\"ka32.ico\">",
        "index": 1,
        "tooltip": "免费超大流量卡",
        "click": function () {
          window.open("https://qige.maikajie.com/");
        }
      }],
      "customType": {
        "m3u8": function (_0x2b1e49, _0x3ab37a) {
          {
            if (Hls.isSupported()) {
              {
                const _0x27fcc2 = new Hls({
                  "enableWorker": true,
                  "lowLatencyMode": true,
                  "backBufferLength": 90
                });
                _0x27fcc2.loadSource(_0x3ab37a);
                _0x27fcc2.attachMedia(_0x2b1e49);
                _0x27fcc2.on(Hls.Events.MANIFEST_PARSED, () => _0x2b1e49.play());
                _0x27fcc2.on(Hls.Events.ERROR, (_0x51c402, _0x52dfd2) => {
                  if (_0x52dfd2.fatal) switch (_0x52dfd2.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                      _0x27fcc2.startLoad();
                      break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                      _0x27fcc2.recoverMediaError();
                      break;
                    default:
                      if (_0x31e91e && _0x31e91e.notice) {
                        _0x31e91e.notice.show = "视频播放错误";
                      }
                  }
                });
              }
            } else _0x2b1e49.canPlayType("application/vnd.apple.mpegurl") ? _0x2b1e49.src = _0x3ab37a : _0x31e91e && _0x31e91e.notice && (_0x31e91e.notice.show = "不支持的视频格式");
          }
        }
      }
    };
    if (_0x4ad09d === "m3u8" || _0x5f43b4.includes(".m3u8")) _0x14b8a7.type = "m3u8";else {
      if (_0x5f43b4.includes(".mp4")) _0x14b8a7.type = "video/mp4";else _0x5f43b4.includes(".flv") && (_0x14b8a7.type = "flv");
    }
    _0x31e91e = new Artplayer(_0x14b8a7);
    _0x31e91e.on("error", _0x262c8c => {
      console.error("播放器错误:", _0x262c8c);
      _0x20a534(new Error("视频播放失败，请尝试刷新页面"));
    });
  }
  window.addEventListener("beforeunload", () => {
    {
      if (_0x31e91e) {
        _0x31e91e.destroy();
      }
    }
  });
}
window.addEventListener("error", _0x34b366 => {
  console.error("全局错误:", _0x34b366.error);
});