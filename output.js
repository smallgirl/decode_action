//Fri Aug 22 2025 04:48:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
loadWasm(go.importObject).then(_0x5ba4da => {
  go.run(_0x5ba4da);
  console.log("wasm is loaded");
  _0x2a32f8();
}).catch(_0x5f0193 => {
  alert("浏览器版本太低，请升级浏览器");
  console.error(_0x5f0193, "wasmErr");
});
uuid = function () {
  var _0x400a2d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  return function (_0x1e2531, _0xa93c40) {
    var _0x20f00c = _0x400a2d,
      _0x857556 = [],
      _0x22064 = Math.random;
    _0xa93c40 = _0xa93c40 || _0x20f00c.length;
    if (_0x1e2531) {
      for (var _0x168609 = 0; _0x168609 < _0x1e2531; _0x168609++) _0x857556[_0x168609] = _0x20f00c[0 | _0x22064() * _0xa93c40];
    } else {
      {
        var _0x2f8cd3;
        _0x857556[8] = _0x857556[13] = _0x857556[18] = _0x857556[23] = "-";
        _0x857556[14] = "4";
        for (var _0x168609 = 0; _0x168609 < 36; _0x168609++) {
          if (!_0x857556[_0x168609]) {
            _0x2f8cd3 = 0 | _0x22064() * 16;
            _0x857556[_0x168609] = _0x20f00c[_0x168609 == 19 ? _0x2f8cd3 & 3 | 8 : _0x2f8cd3 & 15];
          }
        }
      }
    }
    return _0x857556.join("");
  };
}();
function _0x5f0448(_0x202411, _0x29e548) {
  var _0x3d65cc = CryptoJS.enc.Hex.parse(_0x202411);
  var _0x724b1 = CryptoJS.enc.Base64.stringify(_0x3d65cc);
  _0x663303 = _0x29e548.substring(0, 16);
  _0x1e4146 = _0x29e548.substring(16, 32);
  var _0x663303 = CryptoJS.enc.Latin1.parse(_0x663303);
  var _0x1e4146 = CryptoJS.enc.Latin1.parse(_0x1e4146);
  var _0x379091 = CryptoJS.AES.decrypt(_0x724b1, _0x663303, {
    "iv": _0x1e4146,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(_0x379091);
}
function _0x1f5d82(_0x21e1ac) {
  return CryptoJS.MD5(_0x21e1ac).toString();
}
function _0x2a32f8() {
  let _0x33bce0 = uuid();
  if (Isios) {
    var _0x3032fd = "1";
  } else {
    {
      var _0x3032fd = "0";
    }
  }
  if (Iswap) {
    {
      var _0x1f0c46 = "1";
    }
  } else {
    var _0x1f0c46 = "0";
  }
  let _0x19e2f0 = {
    "url": hxm_encrypt(Vurl),
    "wap": _0x1f0c46,
    "ios": _0x3032fd,
    "host": Host,
    "referer": Ref,
    "time": Time
  };
   console.log(_0x19e2f0);
  let _0x526f36 = hxm_aesencrypt(JSON.stringify(_0x19e2f0)).toUpperCase();
  let _0x4feada = {
    "Params": _0x526f36
  };
  $.ajax({
    "type": "post",
    "url": Api + "/Api.php",
    "dataType": "json",
    "headers": {
      "Video-Parse-Uuid": _0x33bce0,
      "Video-Parse-Time": Time,
      "Video-Parse-Version": Version,
      "Video-Parse-Sign": hxm_aesencrypt(Host + " | " + _0x33bce0 + " | " + Time + " | " + Version + " | " + _0x526f36).toUpperCase()
    },
    "data": _0x4feada,
    "success": function (_0x5f4e66) {
      if (_0x5f4e66.Status == 1) {
        {
          if (_0x5f4e66.Code == 10) {
            {
              let _0x7bf9a = $("meta[http-equiv=\"Content-Type\"]").attr("id") + $("meta[name=\"viewport\"]").attr("id");
              _0x7bf9a = _0x7bf9a.replace("viewport", "");
              let _0x592421 = _0x5f4e66.Code + _0x7bf9a + _0x5f4e66.Appkey + _0x5f4e66.Version;
              let _0x13467c = _0x5f0448(_0x5f4e66.Data, _0x1f5d82(_0x592421));
              _0x13467c = hxm_aesdecrypt(_0x13467c);
              info = JSON.parse(_0x13467c);
              let _0x3030bf = hxm_decrypt(info.url);
              info.url = decodeURIComponent(_0x3030bf);
            }
          } else {
            {
              let _0x5a5876 = _0x5f4e66.Code + _0x5f4e66.Appkey + _0x5f4e66.Version;
              let _0x13467c = _0x5f0448(_0x5f4e66.Data, _0x1f5d82(_0x5a5876));
               console.log(_0x13467c);
              _0x13467c = hxm_aesdecrypt(_0x13467c);
               console.log(_0x13467c);
              info = JSON.parse(_0x13467c);
              let _0x3030bf = info.url;
              info.url = decodeURIComponent(_0x3030bf);
            }
          }
          if (info.type == "url") {
            $("#loading").remove();
            $("body").append("<iframe id=\"video\" scrolling=\"no\" allowtransparency=\"true\" src=\"" + info.url + "\" width=\"100%\" height=\"100%\" style=\"background: #000000\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\"></iframe>");
          } else {
            _0xae8e5a(info);
          }
        }
      } else if (PlayConfig.Online == "1") {
        {
          _0x485620(PlayConfig.Onlinemsg);
          setTimeout(function () {
            {
              $("#loading").remove();
              $("body").append("<iframe frameborder=0 marginheight=0 marginwidth=0 scrolling=no src=\"" + PlayConfig.Ather + PlayConfig.Url + "\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\"></iframe>");
            }
          }, PlayConfig.Onlinetime * 1000);
        }
      } else {
        _0x485620(_0x5f4e66.Data.msg);
      }
    }
  });
}
function _0xae8e5a(_0x58dd9f) {
  if (_0x58dd9f.player == "dplayer" || _0x58dd9f.player == "h5") {
    $LAB.script(PlayerPath.art).script(PlayerPath.artad).script(PlayerPath.hls).script(PlayerPath.flv).wait(function () {
      console.log("ArtPlayer is loaded ✅");
      _0x2504fd.url = _0x58dd9f.url;
      _0x2504fd.type = _0x2504fd.VideoType(_0x58dd9f.url, _0x58dd9f.type);
      $("#loading").remove();
      $("body").append("<div id=\"artplayer\" class=\"artplayer-app\" style=\"width:100%;height:100%;padding:0;margin:0\"></div>");
      _0x2504fd.ArtPlayer();
    });
  } else if (_0x58dd9f.player == "ckplayer" && !Iswap) {
    _0x485620("不支持PC播放,请切换手机端观看");
  } else {
    _0x485620("解析失败，请切换刷新！");
  }
}
var _0x2504fd = {
  "ArtPlayer": function () {
    AdHtml = function () {};
    HbHtml = Array();
    if (PlayConfig.IsHb) {
      {
        HbHtml = [{
          "position": "right",
          "html": "<img width=\"40\" height=\"40\" src=\"" + PlayConfig.Hbimg + "\">",
          "index": 1,
          "tooltip": PlayConfig.Hbtip,
          "click": function () {
            if (PlayConfig.Hburl) {
              window.location.href = PlayConfig.Hburl;
            }
          }
        }];
      }
    }
    if (PlayConfig.Iskpad) {
      {
        Kpadimg = PlayConfig.Kpadimg ? "<img class=\"cardimg\" src=\"" + PlayConfig.Kpadimg + "\">" : "";
        Kpadmp4 = PlayConfig.Kpadmp4 ? PlayConfig.Kpadmp4 : "";
        Kpadurl = PlayConfig.Kpadurl ? PlayConfig.Kpadurl : "";
        AdHtml = artplayerPluginAds({
          "html": Kpadimg,
          "video": Kpadmp4,
          "url": Kpadurl,
          "playDuration": PlayConfig.Kpadtime,
          "totalDuration": PlayConfig.Kpadtotaltime,
          "muted": PlayConfig.Mute,
          "i18n": {
            "close": "关闭广告",
            "countdown": "%s秒",
            "detail": "查看详情",
            "canBeClosed": "%s秒后可关闭广告"
          }
        });
      }
    }
    _0x2504fd.ad = new Artplayer({
      "id": PlayConfig.Id,
      "container": "#artplayer",
      "theme": PlayConfig.ThemeColor,
      "url": _0x2504fd.url,
      "type": _0x2504fd.type,
      "poster": PlayConfig.Background,
      "volume": 1,
      "autoplay": Autoplay,
      "autoSize": false,
      "autoMini": true,
      "setting": true,
      "lock": true,
      "autoPlayback": Autoplay,
      "playbackRate": true,
      "aspectRatio": true,
      "fullscreen": true,
      "fullscreenWeb": true,
      "miniProgressBar": true,
      "playsInline": true,
      "autoOrientation": true,
      "lang": navigator.language.toLowerCase(),
      "moreVideoAttr": {
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": false,
        "x5-video-orientation": "portraint"
      },
      "controls": HbHtml,
      "icons": {
        "loading": "<img src=\"" + PlayConfig.Loading + "\">",
        "state": "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path id=\"pid-64-svgo-a\" d=\"M0 0h80v80H0z\"></path><path d=\"M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z\" id=\"pid-64-svgo-d\"></path><filter x=\"-15.4%\" y=\"-16.3%\" width=\"130.9%\" height=\"132.5%\" filterUnits=\"objectBoundingBox\" id=\"pid-64-svgo-c\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix><feOffset in=\"SourceAlpha\" result=\"shadowOffsetOuter2\"></feOffset><feGaussianBlur stdDeviation=\"3.5\" in=\"shadowOffsetOuter2\" result=\"shadowBlurOuter2\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\" in=\"shadowBlurOuter2\" result=\"shadowMatrixOuter2\"></feColorMatrix><feMerge><feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode><feMergeNode in=\"shadowMatrixOuter2\"></feMergeNode></feMerge></filter></defs><g fill=\"none\" fill-rule=\"evenodd\" opacity=\".8\"><mask id=\"pid-64-svgo-b\" fill=\"#fff\"><use xlink:href=\"#pid-64-svgo-a\"></use></mask><g mask=\"url(#pid-64-svgo-b)\"><use fill=\"#000\" filter=\"url(#pid-64-svgo-c)\" xlink:href=\"#pid-64-svgo-d\"></use><use fill=\"#FFF\" xlink:href=\"#pid-64-svgo-d\"></use></g></g></svg>",
        "indicator": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\"><path d=\"M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z\" fill=\"#333\"></path><path d=\"M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z\" fill=\"#fff\"></path><path d=\"M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z\" fill=\"#333\"></path></svg>"
      },
      "customType": {
        "m3u8": _0x89e525,
        "flv": _0x4027d6
      },
      "plugins": [AdHtml]
    });
    let _0x380a3b = $(".art-video-player");
    if (PlayConfig.Isztad == 1) {
      let _0x474721 = "<div id=\"player_pause\" style=\"display:none\"><div class=\"tip\" style=\"left:0;bottom:6px;\">广告</div><div class=\"tip g_close\"><a href=\"javascript:\" title=\"关闭广告\" style=\"color:#f4f4f4\">X</a></div><div clss=\"adlink\"><a href=\"" + PlayConfig.Ztadhrefurl + "\" target=\"_blank\"><img src=\"" + PlayConfig.Ztadimgurl + "\"></a></div><script>$(\".g_close\").click(function(){$(this).parent().hide()})</script></div>";
      _0x380a3b.prepend(_0x474721);
    }
    if (Iswap) {
      $(".art-control-volume").hide();
    }
    _0x2504fd.Load();
  },
  "Load": function () {
    _0x2504fd.ad.on("video:loadedmetadata", () => {
      {
        var _0x34d735 = localStorage.getItem(PlayConfig.Id);
        _0x2504fd.ad.seek = _0x34d735;
      }
    });
    _0x2504fd.ad.on("video:timeupdate", () => {
      {
        var _0x9abded = Math.floor(_0x2504fd.ad.currentTime);
        localStorage.setItem(PlayConfig.Id, _0x9abded);
      }
    });
    _0x2504fd.ad.on("video:pause", () => {
      {
        $("#player_pause").show();
      }
    });
    _0x2504fd.ad.on("video:play", () => {
      $("#player_pause").hide();
    });
    _0x2504fd.ad.on("video:ended", () => {
      $("#player_pause").hide();
      localStorage.removeItem(PlayConfig.Id);
    });
    _0x2504fd.ad.on("error", (_0x18cf29, _0xcd6e6b) => {
      console.log(_0x18cf29, _0xcd6e6b);
    });
    _0x2504fd.ad.on("video:error", (_0x49b374, _0x1388de) => {
      console.log(_0x49b374, _0x1388de);
    });
  },
  "Msg": function (_0x4ba6b2, _0x42e691) {
    $(".art-video-player").prepend("<div class=\"pop-msg\"><div class=\"pop-content\"></div></div>");
    $(".pop-msg .pop-close").click(function () {
      $(".pop-msg").remove();
    });
    $(".pop-msg .pop-content").html(_0x4ba6b2);
    $(".pop-msg").show();
    setTimeout("$('.pop-msg').remove()", _0x42e691);
  },
  "VideoType": function (_0x3791ab, _0xfd2afd) {
    if (_0x3791ab.indexOf(".m3u8") > 0) {
      thetype = "m3u8";
    } else if (_0x3791ab.indexOf(".flv") > 0) {
      thetype = "flv";
    } else {
      if (_0xfd2afd == "hls" || _0xfd2afd == "m3u8") {
        thetype = "m3u8";
      } else {
        {
          thetype = _0xfd2afd;
        }
      }
    }
    return thetype;
  }
};
function _0x1a0781(_0x38f030) {
  var _0x2b21f6 = new RegExp(/^#[0-9a-fA-F]{6}$/);
  if (!_0x2b21f6.test(_0x38f030)) {
    {
      console.log("无效十六进制");
      return;
    }
  }
  var _0x1ef03f = parseInt(_0x38f030.slice(1), 16);
  var _0x5b09b4 = _0x1ef03f % 256;
  _0x1ef03f = parseInt(_0x1ef03f / 256);
  var _0x10d695 = _0x1ef03f % 256;
  _0x1ef03f = parseInt(_0x1ef03f / 256);
  var _0x160c60 = _0x1ef03f % 256;
  return "rgb(" + _0x160c60 + "," + _0x10d695 + "," + _0x5b09b4 + ")";
}
function _0x31a100() {
  var _0x32d029 = "";
  if (document.referrer.length > 0) {
    {
      _0x32d029 = document.referrer;
    }
  } else {
    {
      _0x32d029 = window.location.href;
    }
  }
  return _0x32d029;
}
function _0x89e525(_0x2ee49e, _0x5a6f71, _0x21b2af) {
  if (Hls.isSupported()) {
    var _0x113747 = {
      "maxBufferLength": 120
    };
    const _0x336ff9 = new Hls(_0x113747);
    _0x336ff9.loadSource(_0x5a6f71);
    _0x336ff9.attachMedia(_0x2ee49e);
    _0x21b2af.hls = _0x336ff9;
    _0x21b2af.once("url", () => _0x336ff9.destroy());
    _0x21b2af.once("destroy", () => _0x336ff9.destroy());
  } else if (_0x2ee49e.canPlayType("application/vnd.apple.mpegurl")) {
    {
      _0x2ee49e.src = _0x5a6f71;
    }
  } else {
    _0x21b2af.notice.show = "不支持的播放格式：m3u8";
  }
}
function _0x4027d6(_0x5569e4, _0x10522e, _0x25d1b8) {
  if (flvjs.isSupported()) {
    const _0x1b75e7 = flvjs.createPlayer({
      "type": "flv",
      "url": _0x10522e
    });
    _0x1b75e7.attachMediaElement(_0x5569e4);
    _0x1b75e7.load();
    _0x25d1b8.flv = _0x1b75e7;
    _0x25d1b8.once("url", () => _0x1b75e7.destroy());
    _0x25d1b8.once("destroy", () => _0x1b75e7.destroy());
  } else {
    {
      _0x25d1b8.notice.show = "不支持的播放格式: flv";
    }
  }
}
function _0x485620(_0x1a014d) {
  $("body").append("<div id=\"error\"><h1>" + _0x1a014d + "</h1></div>");
  $("#loading").remove();
}
_0xods = "jsjiami.com.v6";