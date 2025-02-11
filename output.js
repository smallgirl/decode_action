//Tue Feb 11 2025 10:35:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function Q$$$O$(Q0OOOQQ) {
  $(".timemsg").text(Q0OOOQQ);
  if (Q0OOOQQ == 15) {
    $(".tips").hide();
    $(".timeout").show();
  } else {
    Q0OOOQQ += 1;
    setTimeout(function () {
      Q$$$O$(Q0OOOQQ);
    }, 1000);
  }
}
Q$$$O$(0);
QO$OQO();
function QO$OQO() {
  var OO0O00O = Vkey + "-" + Key + "-" + Sign + "-" + Token;
  var QOQQQ0 = Key1 + "-" + Sign1 + "-" + Token1;
  var Q0000Q0 = XXTEA.encryptToBase64(OO0O00O + QOQQQ0 + Key2 + Sign2 + Token2, Host + Domain + Time);
  if (isios) {
    var QQ0QOOO = "1";
  } else {
    var QQ0QOOO = "0";
  }
  if (isiPad) {
    var Q00O00O = "1";
  } else {
    var Q00O00O = "0";
  }
  var $$Q$OQ = {
    "url": Vurl,
    "wap": Q00O00O,
    "ios": QQ0QOOO,
    "host": Host,
    "referer": Ref,
    "time": Time,
    "key": Key,
    "key1": Key1,
    "sign": Sign,
    "sign1": Sign1,
    "token": Token,
    "token1": Token1
  };
  Ckey = AES_CBC(JSON.stringify($$Q$OQ), $.md5(Q0000Q0));
  var OOO0QQQ = {
    "ckey": "110#" + Base64.encode(Ckey)
  };
  DATA = Object.assign($$Q$OQ, OOO0QQQ);
  var OQ0OO0O = TSTKC(DATA);
  var Q00OQQO = "?ver=" + Version + "&timestamp=" + Time * 1024 + "&appkey=" + $.md5(Host + Time * 1024 + Version);
  $.ajax({
    "type": "post",
    "url": Api + "/Api.php" + Q00OQQO,
    "dataType": "json",
    "headers": {
      "Vkey": Vkey,
      "Md5": $.md5(OO0O00O + QOQQQ0 + Q0000Q0 + OQ0OO0O),
      "Version": Version,
      "Access-Token0": OO0O00O,
      "Access-Token1": QOQQQ0,
      "Access-Token2": Q0000Q0,
      "Access-Token3": OQ0OO0O
    },
    "data": DATA,
    "success": function (O$OQ0) {
      if (O$OQ0.Status == 1) {
        let OOOQQQQ = O$OQ0.Appkey + O$OQ0.Md5 + O$OQ0.Version;
        let OOO$$0 = AES_CBC_DE(O$OQ0.Data, $.md5(OOOQQQQ));
        info = JSON.parse(OOO$$0);
        let OQOQOO0 = decode_url(info.url, $.md5(Host + Token));
        info.url = decodeURIComponent(OQOQOO0);
        if (info.type == "url") {
          $("#video").html("<iframe id=\"video\" scrolling=\"no\" allowtransparency=\"true\" src=\"" + info.url + "\" width=\"100%\" height=\"100%\" style=\"background: #000000\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\"></iframe>");
        } else {
          play(info);
        }
      } else if (PlayConfig.Online == "1") {
        $(".tips").text(PlayConfig.Onlinemsg);
        setTimeout(function () {
          $("#loading").hide();
          $("#video").show();
          $("#video").html("<iframe frameborder=0 marginheight=0 marginwidth=0 scrolling=no src=\"" + PlayConfig.Ather + PlayConfig.Url + "\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\"></iframe>");
        }, PlayConfig.Onlinetime * 1000);
      } else {
        $(".tips").hide();
        $(".timeout").show();
        $(".timeout").text(O$OQ0.Data.msg);
      }
    }
  });
}
function OQ$$$$(QQ00O$) {
  var $0$$0 = parseInt(QQ00O$);
  var O00QQQ = 0;
  var QOQ00QQ = 0;
  if ($0$$0 >= 60) {
    O00QQQ = parseInt($0$$0 / 60);
    $0$$0 = parseInt($0$$0 % 60);
    if (O00QQQ >= 60) {
      QOQ00QQ = parseInt(O00QQQ / 60);
      O00QQQ = parseInt(O00QQQ % 60);
    }
  }
  var OQQO0QO = "" + QQ0OQQ($0$$0);
  if (O00QQQ >= 0) {
    OQQO0QO = "" + QQ0OQQ(O00QQQ) + ":" + OQQO0QO;
  }
  if (QOQ00QQ > 0) {
    OQQO0QO = "" + QQ0OQQ(QOQ00QQ) + ":" + OQQO0QO;
  }
  return OQQO0QO;
}
function QQ0OQQ(Q0OOQ) {
  return parseInt(Q0OOQ) > 9 ? parseInt(Q0OOQ) : "0" + Q0OOQ;
}
function play(Q0Q$O$) {
  if (Q0Q$O$.player == "dplayer" || Q0Q$O$.player == "mplayer" || Q0Q$O$.player == "h5") {
    $LAB.script(MplayerStatic.min).script(MplayerStatic.desktop).script(MplayerStatic.mobile).script(MplayerStatic.hls).script(MplayerStatic.flv).wait(function () {
      console.log("MuiPlayer播放器加载成功!");
      var playerConfig = {
        "container": "#video",
        "src": Q0Q$O$.url,
        "poster": PlayConfig.Loading,
        "autoplay": PlayConfig.Autodp,
        "preload": "auto",
        "width": "100%",
        "height": "100%",
        "autoFit": false,
        "autoOrientaion": true,
        "videoAttribute": [{
          "attrKey": "playsinline",
          "attrValue": "playsinline"
        }, {
          "attrKey": "webkit-playsinline",
          "attrValue": "webkit-playsinline"
        }, {
          "attrKey": "x5-video-player-type",
          "attrValue": "h5-page"
        }],
        "plugins": [new MuiPlayerDesktopPlugin({
          "leaveHiddenControls": true,
          "fullScaling": 1
        }), new MuiPlayerMobilePlugin({
          "showMenuButton": true,
          "key": "01C01F01D01F01H01J01E01F01K01D01J01K01D01D01G"
        })]
      };
      if (Q0Q$O$.type == "hls" || Q0Q$O$.url.indexOf(".m3u8") > -1) {
        playerConfig.parse = {
          "type": "hls",
          "loader": Hls,
          "config": {
            "debug": false
          }
        };
      } else if (Q0Q$O$.type == "flv" || Q0Q$O$.url.indexOf(".flv") > -1) {
        playerConfig.parse = {
          "type": "flv",
          "loader": flvjs,
          "config": {
            "debug": false
          }
        };
      } else {
        playerConfig.parse = {
          "type": "mp4",
          "config": {
            "debug": false
          }
        };
      }
      var Q0OQO$ = new MuiPlayer(playerConfig);
      Q0OQO$.on("ready", function () {
        Q0OQO$.showToast("请手动点击播放");
        Q0OQO$.video().addEventListener("loadedmetadata", function () {
          if (Seek != 0) {
            var QQQOOQQ = parseFloat(Seek);
            Q0OQO$.video().currentTime = QQQOOQQ;
            Q0OQO$.showToast("您上次观看至 " + OQ$$$$(QQQOOQQ) + " 处, 正在为您续播", 2000);
            window.top.postMessage(JSON.stringify({
              "action": "continue"
            }), "*");
          }
        });
        Q0OQO$.video().addEventListener("ended", function () {
          window.top.postMessage(JSON.stringify({
            "action": "next"
          }), "*");
        });
        var $O0$QO = 0;
        Q0OQO$.video().addEventListener("timeupdate", function () {
          var O0OO0 = Math.floor(Q0OQO$.video().currentTime);
          if (O0OO0 - $O0$QO > 10 || O0OO0 < $O0$QO) {
            window.top.postMessage(JSON.stringify({
              "action": "current",
              "t": O0OO0
            }), "*");
            $O0$QO = O0OO0;
            return;
          }
        });
      });
    });
    $("#loading").hide();
    $("#video").show();
  } else if (Q0Q$O$.player == "ckplayer") {
    $LAB.script(MplayerStatic.ckjs).wait(function () {
      console.log("ckplayer播放器加载成功!");
      if (Q0Q$O$.type == "m3u8") {
        var Q0Q0QQ = {
          "f": MplayerStatic.m3u8swf,
          "a": encodeURIComponent(Q0Q$O$.url),
          "c": 0,
          "s": 4,
          "p": PlayConfig.Autock,
          "v": 100
        };
        var $OO$ = [Q0Q$O$.url + "->video"];
        CKobject.embed(MplayerStatic.ckswf, "video", "ckplayer_a1", "100%", "100%", false, Q0Q0QQ, $OO$);
        $("#loading").hide();
        $("#video").show();
      } else {
        $("#loading").show();
        $(".tips").hide();
        $("#video").hide();
        $(".timeout").show();
        $(".timeout").text("播放器加载失败!");
        console.log("播放器加载失败!");
      }
    });
  } else {
    $("#loading").show();
    $(".tips").hide();
    $("#video").hide();
    $(".timeout").show();
    $(".timeout").text("播放器加载失败!");
    console.log("播放器加载失败!");
  }
}
OＯ0$ = "jsjiami.com.v6";