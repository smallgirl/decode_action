//Sat Feb 28 2026 03:14:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const sortByKey = (_0x123a2f, _0x2e0e95, _0x4e2f81) => _0x2e0e95.sort(({
    [_0x123a2f]: _0x4ea7e3
  }, {
    [_0x123a2f]: _0x220e10
  }) => _0x4e2f81(_0x4ea7e3, _0x220e10)),
  hlsDecodeAction = function (_0x282d3f, _0xeaea61) {
    const _0x4b792a = new Hls({
      "debug": false,
      "p2pConfig": {
        "logLevel": false,
        "live": false
      }
    });
    _0x4b792a.loadSource(_0xeaea61);
    _0x4b792a.attachMedia(_0x282d3f);
    _0x4b792a.on(Hls.Events.MANIFEST_PARSED, function () {
      _0x282d3f.play();
    });
    _0x4b792a.p2pEngine.on("stats", function ({
      totalHTTPDownloaded: _0x404d22,
      totalP2PDownloaded: _0x188358,
      totalP2PUploaded: _0x338563
    }) {
      {
        let _0x49f718 = _0x404d22 + _0x188358,
          _0x5ec831 = "p2p ratio: " + Math.round(_0x188358 / _0x49f718 * 100) + "%, saved traffic: " + _0x188358 + "KB, uploaded: " + _0x338563 + "KB";
        console.log(_0x5ec831);
      }
    });
  };
function player(_0xcf6773) {
  let _0x3421c9 = decrypt(_0xcf6773.url);
  if (isEmpty(_0x3421c9)) {
    TheError();
    return false;
  }
  MPlayer(_0x3421c9, _0xcf6773);
}
function MPlayer(_0x23e9c3, _0x5c1f74) {
  $("#loading").remove();
  let _0x41ab51 = _0x5c1f74.next,
    _0x29dcfc = _0x5c1f74.vkey,
    _0x1f9ca3 = _0x5c1f74.title,
    _0x13104b = _0x5c1f74.logo;
  $("body").append("<div id=\"mui-player\" class=\"content\"> <template slot=\"nextMedia\">\n<svg t=\"1584686776454\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1682\" width=\"22\" height=\"22\"><path d=\"M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z\" p-id=\"1683\" fill=\"#ffffff\"></path><path d=\"M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z\" p-id=\"1684\" fill=\"#ffffff\"></path></svg>\n</template></div>");
  var _0x4ebe0b = {
    "container": "#mui-player",
    "themeColor": _0x5c1f74.theme,
    "poster": _0x5c1f74.poster,
    "src": _0x23e9c3,
    "title": _0x1f9ca3,
    "autoplay": true,
    "initFullFixed": true,
    "preload": "auto",
    "autoOrientaion": true,
    "dragSpotShape": "square",
    "lang": "zh-cn",
    "volume": "1",
    "custom": {
      "footerControls": [{
        "slot": "nextMedia",
        "position": "left",
        "tooltip": "下一集",
        "oftenShow": true,
        "click": function (_0x5187bc) {
          top.location.href = _0x41ab51;
        },
        "style": {}
      }]
    },
    "videoAttribute": [{
      "attrKey": "webkit-playsinline",
      "attrValue": "webkit-playsinline"
    }, {
      "attrKey": "playsinline",
      "attrValue": "playsinline"
    }, {
      "attrKey": "x5-video-player-type",
      "attrValue": "h5-page"
    }],
    "plugins": [new MuiPlayerDesktopPlugin({
      "leaveHiddenControls": true,
      "fullScaling": 1,
      "contextmenu": [{
        "name": "mycopyright",
        "context": _0x5c1f74.contextmenu,
        "zIndex": 0,
        "show": true,
        "click": function (_0x109bee) {
          top.location.href = _0x5c1f74.contextlink;
        }
      }]
    }), new MuiPlayerMobilePlugin({
      "key": "01I01I01H01J01L01K01J01I01K01J01H01D01J01G01E",
      "showMenuButton": true
    })]
  };
  if (_0x23e9c3.indexOf(".m3u8") > 0) Hls.isSupported() && Hls.WEBRTC_SUPPORT ? (console.log("P2P ON"), _0x4ebe0b.parse = {
    "customKernel": hlsDecodeAction
  }) : _0x4ebe0b.parse = {
    "type": "hls",
    "loader": Hls,
    "config": {
      "debug": false
    }
  };else _0x23e9c3.indexOf(".flv") > 0 && (_0x4ebe0b.parse = {
    "type": "flv",
    "loader": flvjs,
    "config": {
      "cors": true
    }
  });
  var _0x19ec97 = new MuiPlayer(_0x4ebe0b);
  _0x19ec97.on("ready", function () {
    var _0x10e819 = _0x19ec97.video(),
      _0x3a83d1 = localStorage.getItem(_0x29dcfc);
    _0x10e819.addEventListener("loadedmetadata", function () {
      this.currentTime = _0x3a83d1;
    });
    _0x10e819.addEventListener("timeupdate", function () {
      var _0x9d4181 = Math.floor(_0x10e819.currentTime);
      localStorage.setItem(_0x29dcfc, _0x9d4181);
    });
    _0x10e819.addEventListener("ended", function () {
      localStorage.removeItem(_0x29dcfc);
      !!_0x41ab51 && (top.location.href = _0x41ab51);
    });
    _0x10e819.addEventListener("play", function () {
      $("#player_pause").length > 0 && $("#player_pause").remove();
    });
    _0x10e819.addEventListener("pause", function (_0x111952) {
      {
        if (_0x5c1f74.ad.on == "1" && isEmpty(_0x5c1f74.ad.img) == false) {
          {
            let _0x44056a = "<div id=\"player_pause\"><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff('player_pause')\" title=\"点击关闭广告\">广告 ✖</a></div><a href=\"" + _0x5c1f74.ad.url + "\" target=\"_blank\"><img src=\"" + _0x5c1f74.ad.img + "\"></a></div>";
            $(".player-wrapper").append(_0x44056a);
          }
        }
      }
    });
    isEmpty(_0x13104b) == false && $(".player-wrapper").append("<img src=\"" + _0x13104b + "\" class=\"logo\">");
    isEmpty(_0x41ab51) && $(".footer-control[slot='nextMedia']").remove();
  });
  _0x19ec97.on("ready", function () {
    _0x19ec97.showToast("提醒：请勿随意相信视频上网址,电话,二维码等！", 6000);
  });
  _0x19ec97.on("error", function () {
    _0x19ec97.showToast("瑙嗛鍔犺浇澶辫触锛屽垏鎹㈢嚎璺垨鍒锋柊涓€娆�", 5000);
  });
  _0x19ec97.on("seek-progress", function () {
    _0x19ec97.showToast("加载中...");
  });
}
function TheError(_0x237ba1 = "瑙嗛鍔犺浇澶辫触锛屽彲鑳芥槸璧勬簮鏈悓姝ワ紝鍙互灏濊瘯鍒囨崲鏈湴绾胯矾瑙傜湅鎴栬€呰繃涓€浼氶噸璇�") {
  $("body").append("<div id=\"error\"><h1>" + _0x237ba1 + "</h1></div>");
  $("#loading").remove();
}
function isEmpty(_0x523cfe) {
  if (typeof _0x523cfe == "undefined" || _0x523cfe == null || _0x523cfe == "") {
    return true;
  } else return false;
}
function turnoff(_0x217561) {
  document.getElementById(_0x217561).style.display = "none";
}
function decrypt(_0x229ef4) {
  let _0x1f8bad = $("meta[name=\"viewport\"]").attr("id").replace("now_", ""),
    _0x393137 = $("meta[charset=\"UTF-8\"]").attr("id").replace("now_", ""),
    _0x93b138 = [],
    _0xa7803 = [],
    _0x5535c4 = "";
  for (var _0x277364 = 0; _0x277364 < _0x393137.length; _0x277364++) {
    _0x93b138.push({
      "id": _0x393137[_0x277364],
      "text": _0x1f8bad[_0x277364]
    });
  }
  _0xa7803 = sortByKey("id", _0x93b138, (_0xc74282, _0x506f6c) => _0xc74282 - _0x506f6c);
  for (var _0x277364 = 0; _0x277364 < _0xa7803.length; _0x277364++) {
    _0x5535c4 += _0xa7803[_0x277364].text;
  }
  let _0x4b8122 = CryptoJS.MD5(_0x5535c4 + "Mknacg123321").toString(),
    _0x747882 = CryptoJS.enc.Utf8.parse(_0x4b8122.substring(16)),
    _0x5b7e44 = CryptoJS.enc.Utf8.parse(_0x4b8122.substring(0, 16)),
    _0x83d22 = CryptoJS.AES.decrypt(_0x229ef4, _0x747882, {
      "iv": _0x5b7e44,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x83d22.toString(CryptoJS.enc.Utf8);
}