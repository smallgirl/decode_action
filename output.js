//Thu May 22 2025 03:23:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
var token_key = CryptoJS.enc.Utf8.parse("8FB5006902F91320"),
  token_iv = CryptoJS.enc.Utf8.parse(le_token);
function encrypt(_0x5d43e) {
  return CryptoJS.AES.encrypt(_0x5d43e, token_key, {
    "iv": token_iv,
    "mode": CryptoJS.mode.CBC
  }).toString();
}
function decrypt(_0x226342) {
  return CryptoJS.AES.decrypt(_0x226342, token_key, {
    "iv": token_iv
  }).toString(CryptoJS.enc.Utf8);
}
var lele = {
  "Weixin": function () {
    var _0xac7ca7 = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(_0xac7ca7) ? true : false;
  },
  "start": function () {
    $.ajax({
      "url": "./api.php",
      "dataType": "json",
      "success": function (_0x22771c) {
        danmuon = _0x22771c.data.danmuon;
        up.pbgjz = _0x22771c.data.pbgjz;
        up.trysee = _0x22771c.data.trytime;
        config.logo = _0x22771c.data.logo;
        config.bjt = _0x22771c.data.ads.pause.bjt;
        config.pic = _0x22771c.data.ads.pause.pic;
        config.sendtime = _0x22771c.data.sendtime;
        config.color = _0x22771c.data.color;
        config.dmliyi = _0x22771c.data.dmliyi;
        config.dmrule = _0x22771c.data.dmrule;
        config.yjtest = _0x22771c.data.yjtest;
        config.yjrule = _0x22771c.data.yjrule;
        config.group = lele.getCookie("group_id");
        lele.autoplay = _0x22771c.data.autoplay;
        lele.bilibili = _0x22771c.data.bilibili;
        lele.waittime = _0x22771c.data.waittime;
        lele.pmdzd = _0x22771c.data.pmdzd;
        lele.pmdzdy = _0x22771c.data.pmdzdy;
        lele.jybf = config.id;
        lele.ads = _0x22771c.data.ads;
        _0x22771c.data.autoplay == "true" ? lele.autoplay = true : lele.autoplay = false;
        if (config.group < config.group_x && lele.ads.state == "on" && config.group != "") {
          {
            if (lele.ads.set.state == "1") lele.MYad.vod(lele.ads.set.vod.url, lele.ads.set.vod.link);else lele.ads.set.state == "2" && lele.MYad.pic(lele.ads.set.pic.link, lele.ads.set.pic.time, lele.ads.set.pic.img);
          }
        } else lele.play(v_decrypt(config.url, _token_key, key_token));
      }
    });
  },
  "play": function (_0x84706) {
    danmuon == "off" ? (lele.player.play(_0x84706), $("#loading-box").remove()) : lele.bilibili != "" ? lele.player.bdplay(_0x84706) : lele.player.dmplay(_0x84706);
    document.pictureInPictureEnabled == true && (document.getElementById("enterhzh") != null && (document.getElementById("enterhzh").addEventListener("click", () => {
      lelevideo.requestPictureInPicture().catch(_0x392fa0 => {
        console.log(_0x392fa0);
      });
    }), document.getElementById("enterhzh").id = "exithzh"), document.getElementById("exithzh") != null && (document.getElementById("exithzh").addEventListener("click", () => {
      document.exitPictureInPicture().catch(_0x2feeda => {
        console.log(_0x2feeda);
      });
    }), document.getElementById("exithzh").id = "enterhzh"));
    document.getElementById("lelezdy").innerHTML = lele.pmdzdy;
    var _0x4e86fc = "<style type=\"text/css\">.showdan-setting .leleplayer-toggle input+label{border: 1px solid " + config.color + "!important;background: " + config.color + "!important;}.leleplayer-controller .leleplayer-icons .leleplayer-setting .leleplayer-setting-speed-item:hover .leleplayer-label{color: " + config.color + ";}.leleplayer-controller .leleplayer-icons .leleplayer-toggle input+label{background: " + config.color + ";}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon{background-color: " + config.color + ";}.leleplayer .leleplayer-controller .leleplayer-icons.leleplayer-comment-box .lele-leleplayer-send-icon:active{background-color:" + config.color + ";}.leleplayer-setting-speeds:hover .title{background-color:" + config.color + "!important;}.fixed{height:" + lele.pmdzd + ";}</style>";
    $("head").append(_0x4e86fc);
    $(function () {
      $(".leleplayer-setting-speeds,.leleplayer-setting-speed-item").on("click", function () {
        $(".speed-stting").toggleClass("speed-stting-open");
      });
      $(".speed-stting.leleplayer-setting-speed-item").click(function () {
        $(".leleplayer-setting-speeds.title").text($(this).text());
      });
    });
    $(".leleplayer-fulloff-icon").on("click", function () {
      lele.dp.fullScreen.cancel();
    });
    $(".leleplayer-showing").on("click", function () {
      lele.dp.play();
      $(".vod-pic").remove();
    });
    config.title != "" && $("#vodtitle").html(config.title + "  " + config.sid);
  },
  "dmid": function () {
    if (up.diyid[0] == 0 && config.id != "") a = config.id, b = config.sid;else (up.diyid[0] == 1 || !config.id) && (a = up.diyid[1], b = up.diyid[2]);
    lele.id = config.id;
  },
  "load": function () {
    setTimeout(function () {
      $("#link1").fadeIn();
    }, 100);
    setTimeout(function () {
      $("#link1-success").fadeIn();
    }, 500);
    setTimeout(function () {
      $("#link2").show();
    }, 1000);
    setTimeout(function () {
      $("#link3,#span").fadeIn();
    }, 2000);
    lele.danmu.send();
    lele.danmu.list();
    lele.def();
    lele.dp.danmaku.opacity(1);
  },
  "def": function () {
    console.log("欢迎使用弹幕视频播放器");
    (lele.waittime == "0" || lele.waittime == "") && $("#loading-box").remove();
    lele.stime = 0;
    lele.headt = leleck.get("headt");
    lele.lastt = leleck.get("lastt");
    lele.last_tip = parseInt(lele.lastt) + 10;
    lele.frists = leleck.get("frists");
    lele.lasts = leleck.get("lasts");
    lele.playtime = Number(localStorage.getItem(lele.jybf));
    lele.ctime = lele.formatTime(lele.playtime);
    lele.dp.on("loadedmetadata", function () {
      lele.loadedmetadataHandler();
    });
    lele.dp.on("ended", function () {
      lele.endedHandler();
    });
    lele.dp.on("pause", function () {
      lele.MYad.pause.play(lele.ads.pause.link, lele.ads.pause.pic);
    });
    lele.dp.on("play", function () {
      lele.MYad.pause.out();
    });
    lele.dp.on("timeupdate", function (_0x5b28f6) {
      lele.timeupdateHandler();
    });
    lele.Weixin() && $("#loading-box").remove();
    lele.jump.def();
  },
  "video": {
    "play": function () {
      lele.autoplay == "true" && lele.dp.play();
      $("#loading-box").remove();
      lele.jump.head();
    },
    "next": function () {
      top.location.href = up.mylink + config.next;
    },
    "seek": function () {
      lele.dp.seek(lele.playtime);
    },
    "end": function () {
      layer.msg("播放结束啦=。=");
    },
    "con_play": function () {
      if (danmuon == "off") lele.jump.head();else {
        {
          var _0x4ddba9 = " <e>已播放至" + lele.ctime + "，继续上次播放？</e><d class=\"conplay-jump\">是 <i id=\"num\">" + lele.waittime + "</i>s</d><d class=\"conplaying\">否</d>";
          if (lele.waittime == "0" || lele.waittime == "") var _0x4acc86 = 10;else {
            $("#link3").html(_0x4ddba9);
            var _0x562a5c = document.getElementById("num"),
              _0x4acc86 = _0x562a5c.innerHTML;
          }
          var _0x46de3e = null;
          setTimeout(function () {
            _0x46de3e = setInterval(function () {
              lele.waittime != "0" && lele.waittime != "" && (_0x4acc86--, _0x562a5c.innerHTML = _0x4acc86);
              _0x4acc86 == 0 && (clearInterval(_0x46de3e), lele.video.seek(), lele.autoplay == "true" && lele.dp.play(), $(".memory-play-wrap,#loading-box").remove());
            }, 1000);
          }, 1);
        }
      }
      var _0x5a25e2 = "<div class=\"memory-play-wrap\"><div class=\"memory-play\"><span class=\"close\">×</span><span>上次看到 </span><span>" + lele.ctime + "</span><span class=\"play-jump\">跳转播放</span></div></div>";
      $(".leleplayer-cplayer").append(_0x5a25e2);
      $(".close").on("click", function () {
        $(".memory-play-wrap").remove();
      });
      setTimeout(function () {
        $(".memory-play-wrap").remove();
      }, 20000);
      $(".conplaying").on("click", function () {
        clearTimeout(_0x46de3e);
        $("#loading-box").remove();
        lele.autoplay == "true" && lele.dp.play();
        lele.jump.head();
      });
      $(".conplay-jump,.play-jump").on("click", function () {
        clearTimeout(_0x46de3e);
        lele.video.seek();
        $(".memory-play-wrap,#loading-box").remove();
        lele.autoplay == "true" && lele.dp.play();
      });
    }
  },
  "jump": {
    "def": function () {
      h = ".leleplayer-setting-jfrist label";
      l = ".leleplayer-setting-jlast label";
      f = "#fristtime";
      j = "#jumptime";
      _0x429de6(h, "frists", lele.frists, "headt", lele.headt, f);
      _0x429de6(l, "lasts", lele.lasts, "lastt", lele.lastt, j);
      function _0x43eafb() {
        layer.msg("请输入有效时间哟！");
      }
      function _0x4cd4a6() {
        layer.msg("设置完成，将在刷新或下一集生效");
      }
      function _0x429de6(_0x118ded, _0x52e27f, _0x3d063a, _0x3caf97, _0x4f49ed, _0x51d67b) {
        {
          $(_0x118ded).on("click", function () {
            o = $(_0x51d67b).val();
            o > 0 ? ($(_0x118ded).toggleClass("checked"), _0x4cd4a6(), _0x4f49ed = $(_0x51d67b).val(), leleck.set(_0x3caf97, _0x4f49ed)) : _0x43eafb();
          });
          if (_0x3d063a == 1) $(_0x118ded).addClass("checked"), $(_0x118ded).click(function () {
            {
              o = $(_0x51d67b).val();
              o > 0 ? leleck.set(_0x52e27f, 0) : _0x43eafb();
            }
          });else {
            $(_0x118ded).click(function () {
              o = $(_0x51d67b).val();
              o > 0 ? leleck.set(_0x52e27f, 1) : _0x43eafb();
            });
          }
        }
      }
      $(f).attr({
        "value": lele.headt
      });
      $(j).attr({
        "value": lele.lastt
      });
      lele.jump.last();
    },
    "head": function () {
      if (lele.stime > lele.playtime) lele.playtime = lele.stime;
      lele.frists == 1 && (lele.headt > lele.playtime || lele.playtime == 0 ? lele.jump_f = 1 : lele.jump_f = 0);
      lele.jump_f == 1 && (lele.dp.seek(lele.headt), lele.dp.notice("已为您跳过片头"));
    },
    "last": function () {
      if (config.next != "") {
        {
          lele.lasts == 1 && setInterval(function () {
            {
              var _0x37ed38 = lele.dp.video.duration - lele.dp.video.currentTime;
              if (_0x37ed38 < lele.last_tip) lele.dp.notice("即将为您跳过片尾");
              lele.lastt > 0 && _0x37ed38 < lele.lastt && (localStorage.setItem(lele.jybf, ""), lele.video.next());
            }
          }, 1000);
        }
      } else $(".icon-xj").remove();
    },
    "ad": function (_0x130275, _0x469aaa) {}
  },
  "danmu": {
    "send": function () {
      g = $(".lele-leleplayer-send-icon");
      d = $("#dmtext");
      h = ".leleplayer-comment-setting-";
      $(h + "color input").on("click", function () {
        r = $(this).attr("value");
        setTimeout(function () {
          d.css({
            "color": r
          });
        }, 100);
      });
      $(h + "type input").on("click", function () {
        t = $(this).attr("value");
        setTimeout(function () {
          d.attr("dmtype", t);
        }, 100);
      });
      $(h + "font input").on("click", function () {
        {
          if (up.trysee > 0 && config.group == config.group_x) {
            {
              layer.msg("会员专属功能");
              return;
            }
          }
          t = $(this).attr("value");
          setTimeout(function () {
            d.attr("size", t);
          }, 100);
        }
      });
      g.on("click", function () {
        a = document.getElementById("dmtext");
        a = a.value;
        b = d.attr("dmtype");
        c = d.css("color");
        z = d.attr("size");
        for (var _0x2ae16d = 0; _0x2ae16d < up.pbgjz.length; _0x2ae16d++) {
          if (a.search(up.pbgjz[_0x2ae16d]) != -1) {
            {
              layer.msg("您发送的内容含有敏感字符，请规范您的弹幕内容");
              return;
            }
          }
        }
        if (a.length < 1) {
          layer.msg("要输入内容啊~");
          return;
        }
        var _0x3ebcf5 = Date.parse(new Date()),
          _0x4d95e2 = leleck.get("dmsent", _0x3ebcf5);
        if (_0x3ebcf5 - _0x4d95e2 < config.sendtime * 1000) {
          layer.msg("请勿频繁操作！发送弹幕需间隔" + config.sendtime + "秒~");
          return;
        }
        d.val("");
        lele.dp.danmaku.send({
          "text": a,
          "color": c,
          "type": b,
          "size": z
        });
        leleck.set("dmsent", _0x3ebcf5);
      });
      function _0x1131dd() {
        g.trigger("click");
      }
      d.keydown(function (_0x34897c) {
        {
          _0x34897c.keyCode == 13 && _0x1131dd();
        }
      });
    },
    "list": function () {
      $(".leleplayer-list-icon,.lele-leleplayer-send-icon").on("click", function () {
        $(".list-show").empty();
        $.ajax({
          "url": config.api + "?ac=get&id=" + lele.id,
          "success": function (_0x5d0475) {
            if (_0x5d0475.code == 23) {
              a = _0x5d0475.danmuku;
              b = _0x5d0475.name;
              c = _0x5d0475.danum;
              $(".danmuku-num").text(c);
              $(a).each(function (_0x21d525, _0x170948) {
                l = "<d class=\"danmuku-list\" time=\"" + _0x170948[0] + "\"><li>" + lele.formatTime(_0x170948[0]) + "</li><li title=\"" + _0x170948[4] + "\">" + _0x170948[4] + "</li><li title=\"用户：" + _0x170948[3] + "  IP地址：" + _0x170948[5] + "\">" + _0x170948[6] + "</li><li class=\"report\" onclick=\"lele.danmu.report('" + _0x170948[5] + "','" + b + "','" + _0x170948[4] + "','" + _0x170948[3] + "')\">举报</li></d>";
                $(".list-show").append(l);
              });
            }
            $(".danmuku-list").on("dblclick", function () {
              lele.dp.seek($(this).attr("time"));
            });
          }
        });
      });
      var _0x49f336 = "<div class=\"dmrules\"><a target=\"_blank\" href=\"" + config.dmrule + "\">" + config.dmliyi + "</a></div>";
      $("div.leleplayer-comment-box:last").append(_0x49f336);
      $(".leleplayer-watching-number").text(up.usernum);
      $(".leleplayer-info-panel-item-title-amount .leleplayer-info-panel-item-title").html("违规词");
      for (var _0x573fc1 = 0; _0x573fc1 < up.pbgjz.length; _0x573fc1++) {
        {
          var _0x1ad9ea = "<e>" + up.pbgjz[_0x573fc1] + "</e>";
          $("#vod-title").append(_0x1ad9ea);
        }
      }
      _0x1c4001(".leleplayer-list-icon", ".leleplayer-danmu", "show");
      function _0x1c4001(_0x1c6cdf, _0x29fce3, _0x3d8718, _0x6dcaa9) {
        $(_0x1c6cdf).click(function () {
          $(_0x29fce3).toggleClass(_0x3d8718);
          $(_0x6dcaa9).remove();
        });
      }
    },
    "report": function (_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481) {
      layer.confirm("" + _0x426253 + "<!--br><br><span style=\"color:#333\">请选择需要举报的类型</span-->", {
        "anim": 1,
        "title": "举报弹幕",
        "btn": ["违法违禁", "色情低俗", "恶意刷屏", "赌博诈骗", "人身攻击", "侵犯隐私", "垃圾广告", "剧透", "引战"],
        "btn3": function (_0xb2c6f4, _0x1eb262) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "恶意刷屏");
        },
        "btn4": function (_0x302378, _0x567caf) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "赌博诈骗");
        },
        "btn5": function (_0xa23086, _0x31a14a) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "人身攻击");
        },
        "btn6": function (_0xcfe052, _0x65836b) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "侵犯隐私");
        },
        "btn7": function (_0x3da42f, _0xb5a8ab) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "垃圾广告");
        },
        "btn8": function (_0x43048f, _0x2839ef) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "剧透");
        },
        "btn9": function (_0x34574b, _0x4eb45e) {
          lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "引战");
        }
      }, function (_0x223f74, _0x5c8fd4) {
        lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "违法违禁");
      }, function (_0x24f328) {
        lele.danmu.post_r(_0x3b53e6, _0x4e33d5, _0x426253, _0x4b6481, "色情低俗");
      });
    },
    "post_r": function (_0x111167, _0x1e5fbe, _0x5e6b0d, _0x5cc812, _0x203efb) {
      $.ajax({
        "type": "GET",
        "url": config.api + "?ac=report&cid=" + _0x5cc812 + "&user=" + _0x111167 + "&type=" + _0x203efb + "&title=" + _0x1e5fbe + "&text=" + _0x5e6b0d + "&referer=" + document.referrer,
        "cache": false,
        "dataType": "json",
        "beforeSend": function () {},
        "success": function (_0x34d0d6) {
          layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
        },
        "error": function (_0x2bb3e2) {
          {
            var _0x568cff = "服务故障 or 网络异常，稍后再试6！";
            layer.msg(_0x568cff);
          }
        }
      });
    }
  },
  "setCookie": function (_0x4bf144, _0x59f7a5, _0x41060b) {
    var _0x40995e = new Date();
    _0x40995e.setHours(_0x40995e.getHours() + _0x41060b);
    document.cookie = _0x4bf144 + "=" + escape(_0x59f7a5) + (_0x41060b === null ? "" : ";expires=" + _0x40995e.toGMTString());
  },
  "getCookie": function (_0x146a26) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(_0x146a26 + "=");
      if (c_start !== -1) {
        {
          c_start = c_start + _0x146a26.length + 1;
          c_end = document.cookie.indexOf(";", c_start);
          c_end === -1 && (c_end = document.cookie.length);
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
    }
    return "";
  },
  "formatTime": function (_0x3791fd) {
    return [parseInt(_0x3791fd / 60 / 60), parseInt(_0x3791fd / 60 % 60), parseInt(_0x3791fd % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
  },
  "loadedmetadataHandler": function () {
    lele.playtime > 0 && lele.dp.video.currentTime < lele.playtime ? setTimeout(function () {
      lele.video.con_play();
    }, 1000) : danmuon == "off" ? lele.jump.head() : (lele.dp.notice("准备就绪，即将为您播放"), lele.video.play());
    lele.dp.on("timeupdate", function () {
      lele.timeupdateHandler();
    });
  },
  "timeupdateHandler": function () {
    localStorage.setItem(lele.jybf, lele.dp.video.currentTime);
  },
  "endedHandler": function () {
    localStorage.setItem(lele.jybf, "");
    if (config.next != "") {
      lele.dp.notice("5s后,将自动为您播放下一集");
      setTimeout(function () {
        lele.video.next();
      }, 5000);
    } else lele.dp.notice("视频播放已结束"), setTimeout(function () {
      lele.video.end();
    }, 2000);
  },
  "player": {
    "play": function (_0x51c001) {
      $("body").addClass("danmu-off");
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x51c001,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x1433f3, _0x685474) {
              const _0x1380ed = new Hls({
                "debug": false,
                "p2pConfig": {
                  "logLevel": true,
                  "live": false
                }
              });
              _0x1380ed.loadSource(_0x1433f3.src);
              _0x1380ed.attachMedia(_0x1433f3);
              _0x1380ed.p2pEngine.on("stats", function (_0x1c8483) {
                tota1P2PDownloaded = _0x1c8483.totalP2PDownloaded;
                totalP2PUploaded = _0x1c8483.totalP2PUploaded;
                updateStats();
              }).on("peerId", function (_0x1e8094) {
                _peerId = _0x1e8094;
              }).on("peers", function (_0x56fde7) {
                _peers = _0x56fde7.length;
                updateStats();
              });
            }
          }
        }
      });
      if (lele.Weixin()) {
        var _0x128d10 = "<style type=\"text/css\">";
        _0x128d10 += "#loading-box{display: none;}";
        _0x128d10 += "</style>";
        $("body").append(_0x128d10).addClass("");
      }
      lele.def();
      lele.jump.head();
    },
    "adplay": function (_0x1aa9f4) {
      $("body").addClass("danmu-off");
      lele.ad = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("ADplayer"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x1aa9f4,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x5d2b83, _0x15aa71) {
              {
                const _0x5f44d9 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0x5f44d9.loadSource(_0x5d2b83.src);
                _0x5f44d9.attachMedia(_0x5d2b83);
                _0x5f44d9.p2pEngine.on("stats", function (_0x455b67) {
                  tota1P2PDownloaded = _0x455b67.totalP2PDownloaded;
                  totalP2PUploaded = _0x455b67.totalP2PUploaded;
                  updateStats();
                }).on("peerId", function (_0x468ef3) {
                  _peerId = _0x468ef3;
                }).on("peers", function (_0x5ae790) {
                  _peers = _0x5ae790.length;
                  updateStats();
                });
              }
            }
          }
        }
      });
      $(".leleplayer-controller,.leleplayer-cplayer,.leleplayer-logo,#loading-box,.leleplayer-controller-mask").remove();
      $(".leleplayer-mask").show();
      lele.ad.on("timeupdate", function () {
        if (lele.ad.video.currentTime > lele.ad.video.duration - 0.1) {
          $("body").removeClass("danmu-off");
          lele.ad.destroy();
          $("#ADplayer").remove();
          $("#ADtip").remove();
          lele.play(v_decrypt(config.url, _token_key, key_token));
        }
      });
    },
    "dmplay": function (_0x54cf65) {
      lele.dmid();
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x54cf65,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x3ccf1a, _0x50b31d) {
              const _0x2c4b1e = new Hls({
                "debug": false,
                "p2pConfig": {
                  "logLevel": true,
                  "live": false
                }
              });
              _0x2c4b1e.loadSource(_0x3ccf1a.src);
              _0x2c4b1e.attachMedia(_0x3ccf1a);
              _0x2c4b1e.p2pEngine.on("stats", function (_0x57b30c) {
                tota1P2PDownloaded = _0x57b30c.totalP2PDownloaded;
                totalP2PUploaded = _0x57b30c.totalP2PUploaded;
                updateStats();
              }).on("peerId", function (_0x3e7510) {
                _peerId = _0x3e7510;
              }).on("peers", function (_0x413e3c) {
                _peers = _0x413e3c.length;
                updateStats();
              });
            }
          }
        },
        "danmaku": {
          "id": lele.id,
          "api": config.api + "?ac=dm",
          "user": config.user
        }
      });
      lele.load();
    },
    "bdplay": function (_0x61f24b) {
      lele.dmid();
      lele.dp = new leleplayer({
        "autoplay": lele.autoplay,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x61f24b,
          "pic": config.bjt,
          "type": "auto",
          "customType": {
            "customHls": function (_0x5c8c6a, _0x419a46) {
              {
                const _0x279f03 = new Hls({
                  "debug": false,
                  "p2pConfig": {
                    "logLevel": true,
                    "live": false
                  }
                });
                _0x279f03.loadSource(_0x5c8c6a.src);
                _0x279f03.attachMedia(_0x5c8c6a);
                _0x279f03.p2pEngine.on("stats", function (_0x5aade4) {
                  tota1P2PDownloaded = _0x5aade4.totalP2PDownloaded;
                  totalP2PUploaded = _0x5aade4.totalP2PUploaded;
                  updateStats();
                }).on("peerId", function (_0x231caa) {
                  _peerId = _0x231caa;
                }).on("peers", function (_0x523833) {
                  _peers = _0x523833.length;
                  updateStats();
                });
              }
            }
          }
        },
        "danmaku": {
          "id": lele.id,
          "api": config.api + "?ac=dm",
          "user": config.user,
          "addition": [config.api + "bilibili/?av=" + lele.bilibili]
        }
      });
      lele.load();
    }
  },
  "MYad": {
    "vod": function (_0xf9969a, _0x157cfb) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0x157cfb + "\" target=\"_blank\">查看详情</a>");
      $("#ADplayer").click(function () {
        document.getElementById("link").click();
      });
      lele.player.adplay(_0xf9969a);
    },
    "pic": function (_0x81853a, _0x5c915f, _0x41ee3f) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0x81853a + "\" target=\"_blank\">广告 <e id=\"time_ad\">" + _0x5c915f + "</e></a><img src=\"" + _0x41ee3f + "\">");
      $("#ADtip").click(function () {
        document.getElementById("link").click();
      });
      var _0x16e501 = document.getElementById("time_ad"),
        _0x2776cc = _0x16e501.innerHTML,
        _0xdcd190 = null;
      setTimeout(function () {
        _0xdcd190 = setInterval(function () {
          _0x2776cc--;
          _0x16e501.innerHTML = _0x2776cc;
          _0x2776cc == 0 && (clearInterval(_0xdcd190), lele.play(v_decrypt(config.url, _token_key, key_token)), $("#ADtip").remove());
        }, 1000);
      }, 1);
    },
    "pause": {
      "play": function (_0x361474, _0x1bd61c) {
        if (lele.ads.pause.state == "on") {
          var _0x2fe41b = "<div id=\"player_pause\"><div class=\"adimg\"><a style=\"color:#ffffff;\">广告</a></div><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff('player_pause')\" title=\"点击关闭广告\">✖</a></div><a href=\"" + _0x361474 + "\" target=\"_blank\" ><img src=\"" + _0x1bd61c + "\"></a></div>";
          $("#player").before(_0x2fe41b);
        }
      },
      "out": function () {
        $("#player_pause").remove();
      }
    }
  }
};
function turnoff(_0x3033ab) {
  document.getElementById(_0x3033ab).style.display = "none";
}