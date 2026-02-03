//Tue Feb 03 2026 03:30:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function player(i11ll111) {
  if (i11ll111.url.indexOf(".m3u8") > 0 || i11ll111.url.indexOf(".ts") > 0 || i11ll111.url.indexOf(".mp4") > 0 || i11ll111.url.indexOf("mp4") > 0 || i11ll111.url.indexOf(".flv") > 0 || i11ll111.url.indexOf("_nanke") > 0) {
    let ililI1i1 = i11ll111.url,
      I1llIllI = ililI1i1.replace("_nanke", ""),
      ii1111ii = ililI1i1.slice(0, 20) + ililI1i1.slice(21),
      II11lIi = hexToText(ii1111ii);
    MPlayer(II11lIi, i11ll111.title, i11ll111.vkey, i11ll111.next);
  } else TheError();
}
function MPlayer(Iillii1, Ii1il11, IlilIlli, l11iIl1i) {
  $("#loading").remove();
  $("body").append("<div id=\"mui-player\" class=\"content\"> <template slot=\"nextMedia\">\n<svg t=\"1584686776454\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1682\" width=\"22\" height=\"22\"><path d=\"M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z\" p-id=\"1683\" fill=\"#ffffff\"></path><path d=\"M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z\" p-id=\"1684\" fill=\"#ffffff\"></path></svg>\n</template></div>");
  var lilii1Ii = {
    "container": "#mui-player",
    "themeColor": "#fa0000",
    "src": Iillii1,
    "title": Ii1il11,
    "poster": "https://iflow-image.myquark.cn/quark-study-iflow/upload/2025/yAiq8V1j7gftgt1/624f13099f848e7cae4b35c6fe51f846.jpg",
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
  if (Iillii1.indexOf(".m3u8") > 0) lilii1Ii.parse = {
    "type": "hls",
    "loader": Hls,
    "config": {
      "debug": false
    }
  };else Iillii1.indexOf(".flv") > 0 && (lilii1Ii.parse = {
    "type": "flv",
    "loader": flvjs,
    "config": {
      "cors": true
    }
  });
  !!l11iIl1i && (lilii1Ii.custom = {
    "footerControls": [{
      "slot": "nextMedia",
      "position": "left",
      "tooltip": "下一集",
      "oftenShow": true,
      "click": function (Illli1il) {
        top.location.href = l11iIl1i;
      }
    }]
  });
  var i1i1iI1i = new MuiPlayer(lilii1Ii);
  i1i1iI1i.on("ready", function () {
    var ilI1llI1 = i1i1iI1i.video(),
      ll1II1 = localStorage.getItem(IlilIlli);
    ilI1llI1.addEventListener("loadedmetadata", function () {
      this.currentTime = ll1II1;
    });
    ilI1llI1.addEventListener("timeupdate", function () {
      {
        var lIil1iII = Math.floor(ilI1llI1.currentTime);
        localStorage.setItem(IlilIlli, lIil1iII);
      }
    });
    ilI1llI1.addEventListener("ended", function () {
      localStorage.removeItem(IlilIlli);
      if (!!l11iIl1i) {
        top.location.href = l11iIl1i;
      }
    });
  });
  i1i1iI1i.on("ready", function () {
    i1i1iI1i.showToast("手机端请手动点击播放");
  });
  i1i1iI1i.on("error", function () {
    i1i1iI1i.showToast("视频加载失败，切换线路或刷新一次", 5000);
  });
  i1i1iI1i.on("seek-progress", function () {
    i1i1iI1i.showToast("加载中...");
  });
}
function TheError() {
  $("body").append("<div id=\"error\"><h1>视频加载失败，请联系管理员进行修复!</h1></div>");
  $("#loading").remove();
}
function hexToText(iill1iil) {
  const I1iI1I1i = new ArrayBuffer(Math.ceil(iill1iil.length / 2)),
    IiIliIil = new DataView(I1iI1I1i);
  for (let iiI1iI1l = 0, iiiiilIl = 0; iiI1iI1l < iill1iil.length; iiI1iI1l += 2, iiiiilIl++) {
    IiIliIil.setUint8(iiiiilIl, parseInt(iill1iil.substr(iiI1iI1l, 2), 16));
  }
  const iIIliIi1 = new TextDecoder();
  return iIIliIi1.decode(I1iI1I1i);
}