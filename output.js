//Sun Aug 24 2025 03:51:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function player(lIiIlili) {
  if (lIiIlili.url.indexOf(".m3u8") > 0 || lIiIlili.url.indexOf(".ts") > 0 || lIiIlili.url.indexOf(".mp4") > 0 || lIiIlili.url.indexOf("mp4") > 0 || lIiIlili.url.indexOf(".flv") > 0 || lIiIlili.url.indexOf("_nanke") > 0) {
    let l1liIi1 = lIiIlili.url,
      I1IiIlIl = l1liIi1.replace("_nanke", ""),
      iiIIIII1 = l1liIi1.slice(0, 20) + l1liIi1.slice(21),
      IiIIl11 = hexToText(iiIIIII1);
    MPlayer(IiIIl11, lIiIlili.title, lIiIlili.vkey, lIiIlili.next);
  } else TheError();
}
function MPlayer(lI1iii1i, IIii1l1, l1iIllIi, iiiIIiII) {
  $("#loading").remove();
  $("body").append("<div id=\"mui-player\" class=\"content\"> <template slot=\"nextMedia\">\n<svg t=\"1584686776454\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1682\" width=\"22\" height=\"22\"><path d=\"M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z\" p-id=\"1683\" fill=\"#ffffff\"></path><path d=\"M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z\" p-id=\"1684\" fill=\"#ffffff\"></path></svg>\n</template></div>");
  var playerConfig = {
    "container": "#mui-player",
    "themeColor": "#fa0000",
    "src": lI1iii1i,
    "title": IIii1l1,
    "poster": "https://pic.rmb.bdstatic.com/bjh/624f13099f848e7cae4b35c6fe51f846.jpeg",
    "autoplay": true,
    "initFullFixed": true,
    "loop": false,
    "preload": "auto",
    "autoOrientaion": true,
    "dragSpotShape": "circula",
    "lang": "zh-cn",
    "volume": "1",
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
        "name": "playErrorGbook",
        "context": "百度一下",
        "zIndex": -1
      }]
    }), new MuiPlayerMobilePlugin({
      "key": "01I01I01H01J01L01K01J01I01K01J01H01D01J01G01E",
      "showMenuButton": true,
      "showLock": true
    })]
  };
  if (lI1iii1i.indexOf(".m3u8") > 0) playerConfig.parse = {
    "type": "hls",
    "loader": Hls,
    "config": {
      "debug": false
    }
  };else lI1iii1i.indexOf(".flv") > 0 && (playerConfig.parse = {
    "type": "flv",
    "loader": flvjs,
    "config": {
      "cors": true
    }
  });
  !!iiiIIiII && (playerConfig.custom = {
    "footerControls": [{
      "slot": "nextMedia",
      "position": "left",
      "tooltip": "下一集",
      "oftenShow": true,
      "click": function (IilIiIll) {
        top.location.href = iiiIIiII;
      }
    }]
  });
  var liilIII = new MuiPlayer(playerConfig);
  liilIII.on("ready", function () {
    var lI111IIl = liilIII.video(),
      IIi1lI1 = localStorage.getItem(l1iIllIi);
    lI111IIl.addEventListener("loadedmetadata", function () {
      this.currentTime = IIi1lI1;
    });
    lI111IIl.addEventListener("timeupdate", function () {
      var IiI1Iii = Math.floor(lI111IIl.currentTime);
      localStorage.setItem(l1iIllIi, IiI1Iii);
    });
    lI111IIl.addEventListener("ended", function () {
      localStorage.removeItem(l1iIllIi);
      !!iiiIIiII && (top.location.href = iiiIIiII);
    });
  });
  liilIII.on("ready", function () {
    liilIII.showToast("手机端请手动点击播放");
  });
  liilIII.on("error", function () {
    liilIII.showToast("视频加载失败，切换线路或刷新一次", 5000);
  });
  liilIII.on("seek-progress", function () {
    liilIII.showToast("加载中...");
  });
}
function TheError() {
  $("body").append("<div id=\"error\"><h1>视频加载失败，请联系管理员进行修复!</h1></div>");
  $("#loading").remove();
}
function hexToText(iill1Ili) {
  const lI1111l1 = new ArrayBuffer(Math.ceil(iill1Ili.length / 2)),
    i1I1I1ii = new DataView(lI1111l1);
  for (let il11lI1l = 0, ili1il = 0; il11lI1l < iill1Ili.length; il11lI1l += 2, ili1il++) {
    i1I1I1ii.setUint8(ili1il, parseInt(iill1Ili.substr(il11lI1l, 2), 16));
  }
  const Illi11i1 = new TextDecoder();
  return Illi11i1.decode(lI1111l1);
}