//Mon Feb 10 2025 11:10:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const go = new Go();
go.importObject.env["syscall/js.finalizeRef"] = () => {};
function loadWasm(ii1I1l, ii1I1i) {
  fetch(ii1I1l).then(iI1liI => iI1liI.arrayBuffer()).then(l1lIiI => WebAssembly.instantiate(l1lIiI, go.importObject)).then(llliiI => {
    var i1i1I1 = llliiI.instance;
    ii1I1i(i1i1I1);
  });
}
loadWasm(PlayerPath.wasm, function (IlII1) {
  go.run(IlII1);
  console.log("main.wasm is loaded ✅");
  ajax_api();
});
uuid = function () {
  var lI1liI = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  return function (i1i1Ii, lllii) {
    var ilil1l = lI1liI,
      illlIi = [],
      I1lIii = Math.random;
    lllii = lllii || ilil1l.length;
    if (i1i1Ii) {
      for (var IiI1I = 0; IiI1I < i1i1Ii; IiI1I++) illlIi[IiI1I] = ilil1l[0 | I1lIii() * lllii];
    } else {
      var illlIl;
      illlIi[8] = illlIi[13] = illlIi[18] = illlIi[23] = "-";
      illlIi[14] = "4";
      for (var IiI1I = 0; IiI1I < 36; IiI1I++) {
        if (!illlIi[IiI1I]) {
          illlIl = 0 | I1lIii() * 16;
          illlIi[IiI1I] = ilil1l[IiI1I == 19 ? illlIl & 3 | 8 : illlIl & 15];
        }
      }
    }
    return illlIi.join("");
  };
}();
function AES_CBC_DE(lllll, i11ili) {
  var lllill = CryptoJS.enc.Hex.parse(lllll);
  var ill11l = CryptoJS.enc.Base64.stringify(lllill);
  iiili1 = i11ili.substring(0, 16);
  ill11i = i11ili.substring(16, 32);
  var iiili1 = CryptoJS.enc.Latin1.parse(iiili1);
  var ill11i = CryptoJS.enc.Latin1.parse(ill11i);
  var I1lIiI = CryptoJS.AES.decrypt(ill11l, iiili1, {
    "iv": ill11i,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(I1lIiI);
}
function newmd5(lllili) {
  return CryptoJS.MD5(lllili).toString();
}
function ajax_api() {
  let li1i1l = uuid();
  if (Isios) {
    var II1i1 = "1";
  } else {
    var II1i1 = "0";
  }
  if (Iswap) {
    var iiiliI = "1";
  } else {
    var iiiliI = "0";
  }
  let illIii = {
    "url": Vurl,
    "wap": iiiliI,
    "ios": II1i1,
    "host": Host,
    "referer": Ref,
    "time": Time
  };
  let ii1il1 = hxm_encrypt(JSON.stringify(illIii)).toUpperCase();
  let lI1llI = {
    "Params": ii1il1
  };
  $.ajax({
    "type": "post",
    "url": Api + "/Api.php",
    "dataType": "json",
    "headers": {
      "Video-Parse-Uuid": li1i1l,
      "Video-Parse-Time": Time,
      "Video-Parse-Version": Version,
      "Video-Parse-Sign": hxm_encrypt(Host + " | " + li1i1l + " | " + Time + " | " + Version + " | " + ii1il1).toUpperCase()
    },
    "data": lI1llI,
    "success": function (illIil) {
      console.log(illIil);
      if (illIil.Status == 1) {
        if (illIil.Code == 10) {
          let i1l1i1 = $("meta[http-equiv=\"Content-Type\"]").attr("id") + $("meta[name=\"viewport\"]").attr("id");
          i1l1i1 = i1l1i1.replace("viewport", "");
          let liil11 = illIil.Code + i1l1i1 + illIil.Appkey + illIil.Version;
          let iiillI = AES_CBC_DE(illIil.Data, newmd5(liil11));
          info = JSON.parse(iiillI);
          let l1l111 = hxm_decrypt(info.url);
          info.url = decodeURIComponent(l1l111);
        } else {
          let l1iIII = illIil.Code + illIil.Appkey + illIil.Version;
          let iiillI = AES_CBC_DE(illIil.Data, newmd5(l1iIII));
          console.log(iiillI);
          info = JSON.parse(iiillI);
          let l1l111 = info.url;
          info.url = decodeURIComponent(l1l111);
        }
        if (info.type == "url") {
          $("#loading").remove();
          $("body").append("<iframe id=\"video\" scrolling=\"no\" allowtransparency=\"true\" src=\"" + info.url + "\" width=\"100%\" height=\"100%\" style=\"background: #000000\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\"></iframe>");
        } else {
          play(info);
        }
      } else if (PlayConfig.Online == "1") {
        TheError(PlayConfig.Onlinemsg);
        setTimeout(function () {
          $("#loading").remove();
          $("body").append("<iframe frameborder=0 marginheight=0 marginwidth=0 scrolling=no src=\"" + PlayConfig.Ather + PlayConfig.Url + "\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\"></iframe>");
        }, PlayConfig.Onlinetime * 1000);
      } else {
        TheError(illIil.Data.msg);
      }
    }
  });
}
function play(II1il) {
  if (II1il.player == "dplayer" || II1il.player == "h5") {
    $LAB.script(PlayerPath.art).script(PlayerPath.artad).script(PlayerPath.hls).script(PlayerPath.flv).wait(function () {
      console.log("ArtPlayer is loaded ✅");
      stray.url = II1il.url;
      stray.type = stray.VideoType(II1il.url, II1il.type);
      $("#loading").remove();
      $("body").append("<div id=\"artplayer\" class=\"artplayer-app\" style=\"width:100%;height:100%;padding:0;margin:0\"></div>");
      stray.ArtPlayer();
    });
  } else if (II1il.player == "ckplayer" && !Iswap) {
    TheError("不支持PC播放,请切换手机端观看");
  } else {
    TheError("解析失败，请切换刷新！");
  }
}
var stray = {
  "ArtPlayer": function () {
    AdHtml = function () {};
    HbHtml = Array();
    if (PlayConfig.IsHb) {
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
    if (PlayConfig.Iskpad) {
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
    stray.ad = new Artplayer({
      "id": PlayConfig.Id,
      "container": "#artplayer",
      "theme": PlayConfig.ThemeColor,
      "url": stray.url,
      "type": stray.type,
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
        "loading": "<img src=\"" + PlayConfig.Playpath + "/ploading.gif\">",
        "state": "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path id=\"pid-64-svgo-a\" d=\"M0 0h80v80H0z\"></path><path d=\"M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z\" id=\"pid-64-svgo-d\"></path><filter x=\"-15.4%\" y=\"-16.3%\" width=\"130.9%\" height=\"132.5%\" filterUnits=\"objectBoundingBox\" id=\"pid-64-svgo-c\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix><feOffset in=\"SourceAlpha\" result=\"shadowOffsetOuter2\"></feOffset><feGaussianBlur stdDeviation=\"3.5\" in=\"shadowOffsetOuter2\" result=\"shadowBlurOuter2\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\" in=\"shadowBlurOuter2\" result=\"shadowMatrixOuter2\"></feColorMatrix><feMerge><feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode><feMergeNode in=\"shadowMatrixOuter2\"></feMergeNode></feMerge></filter></defs><g fill=\"none\" fill-rule=\"evenodd\" opacity=\".8\"><mask id=\"pid-64-svgo-b\" fill=\"#fff\"><use xlink:href=\"#pid-64-svgo-a\"></use></mask><g mask=\"url(#pid-64-svgo-b)\"><use fill=\"#000\" filter=\"url(#pid-64-svgo-c)\" xlink:href=\"#pid-64-svgo-d\"></use><use fill=\"#FFF\" xlink:href=\"#pid-64-svgo-d\"></use></g></g></svg>",
        "indicator": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\"><path d=\"M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z\" fill=\"#333\"></path><path d=\"M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z\" fill=\"#fff\"></path><path d=\"M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z\" fill=\"#333\"></path></svg>"
      },
      "customType": {
        "m3u8": playM3u8,
        "flv": playFlv
      },
      "plugins": [AdHtml]
    });
    let ililIi = $(".art-video-player");
    if (PlayConfig.Isztad == 1) {
      let liiI1l = "<div id=\"player_pause\" style=\"display:none\"><div class=\"tip\" style=\"left:0;bottom:6px;\">广告</div><div class=\"tip g_close\"><a href=\"javascript:\" title=\"关闭广告\" style=\"color:#f4f4f4\">X</a></div><div clss=\"adlink\"><a href=\"" + PlayConfig.Ztadhrefurl + "\" target=\"_blank\"><img src=\"" + PlayConfig.Ztadimgurl + "\"></a></div><script>$(\".g_close\").click(function(){$(this).parent().hide()})</script></div>";
      ililIi.prepend(liiI1l);
    }
    if (Iswap) {
      $(".art-control-volume").hide();
    }
    stray.Load();
  },
  "Load": function () {
    stray.ad.on("video:loadedmetadata", () => {
      var II11lI = localStorage.getItem(PlayConfig.Id);
      stray.ad.seek = II11lI;
    });
    stray.ad.on("video:timeupdate", () => {
      var lI1IIi = Math.floor(stray.ad.currentTime);
      localStorage.setItem(PlayConfig.Id, lI1IIi);
    });
    stray.ad.on("video:pause", () => {
      $("#player_pause").show();
    });
    stray.ad.on("video:play", () => {
      $("#player_pause").hide();
    });
    stray.ad.on("video:ended", () => {
      $("#player_pause").hide();
      localStorage.removeItem(PlayConfig.Id);
      window.top.postMessage({
        "action": "next"
      }, "*");
    });
    stray.ad.on("fullscreenWeb", iilll => {
      var il1iI1 = iilll == true ? "fullscreenWeb" : "exitfullscreenWeb";
      window.top.postMessage({
        "action": il1iI1
      }, "*");
    });
  },
  "Msg": function (IlllIi, iIIiil) {
    $(".art-video-player").prepend("<div class=\"pop-msg\"><div class=\"pop-content\"></div></div>");
    $(".pop-msg .pop-close").click(function () {
      $(".pop-msg").remove();
    });
    $(".pop-msg .pop-content").html(IlllIi);
    $(".pop-msg").show();
    setTimeout("$('.pop-msg').remove()", iIIiil);
  },
  "VideoType": function (lI1III, IIliIi) {
    if (lI1III.indexOf(".m3u8") > 0) {
      thetype = "m3u8";
    } else if (lI1III.indexOf(".flv") > 0) {
      thetype = "flv";
    } else {
      if (IIliIi == "hls" || IIliIi == "m3u8") {
        thetype = "m3u8";
      } else {
        thetype = IIliIi;
      }
    }
    return thetype;
  }
};
function getrgb(I1iII1) {
  var l1l1i1 = new RegExp(/^#[0-9a-fA-F]{6}$/);
  if (!l1l1i1.test(I1iII1)) {
    console.log("无效十六进制");
    return;
  }
  var lill1l = parseInt(I1iII1.slice(1), 16);
  var il1ll = lill1l % 256;
  lill1l = parseInt(lill1l / 256);
  var i1ilIi = lill1l % 256;
  lill1l = parseInt(lill1l / 256);
  var Ill11l = lill1l % 256;
  return "rgb(" + Ill11l + "," + i1ilIi + "," + il1ll + ")";
}
function getreferrer() {
  var Il1i11 = "";
  if (document.referrer.length > 0) {
    Il1i11 = document.referrer;
  } else {
    Il1i11 = window.location.href;
  }
  return Il1i11;
}
function playM3u8(Iil1i1, IIii11, iliIl1) {
  if (Hls.isSupported()) {
    var IIliII = {
      "maxBufferLength": 120
    };
    const iiliI = new Hls(IIliII);
    iiliI.loadSource(IIii11);
    iiliI.attachMedia(Iil1i1);
    iliIl1.hls = iiliI;
    iliIl1.once("url", () => iiliI.destroy());
    iliIl1.once("destroy", () => iiliI.destroy());
  } else if (Iil1i1.canPlayType("application/vnd.apple.mpegurl")) {
    Iil1i1.src = IIii11;
  } else {
    iliIl1.notice.show = "不支持的播放格式：m3u8";
  }
}
function playFlv(lI1l1i, i1iil, llI11l) {
  if (flvjs.isSupported()) {
    const i1iii = flvjs.createPlayer({
      "type": "flv",
      "url": i1iil
    });
    i1iii.attachMediaElement(lI1l1i);
    i1iii.load();
    llI11l.flv = i1iii;
    llI11l.once("url", () => i1iii.destroy());
    llI11l.once("destroy", () => i1iii.destroy());
  } else {
    llI11l.notice.show = "不支持的播放格式: flv";
  }
}
function TheError(I1llIi) {
  $("body").append("<div id=\"error\"><h1>" + I1llIi + "</h1></div>");
  $("#loading").remove();
}
iｉl = "jsjiami.com.v6";