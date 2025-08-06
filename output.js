//Wed Aug 06 2025 05:55:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var YKQ = {
  "versions": function () {
    var _0x400b4c = navigator.userAgent,
      _0x11ab90 = navigator.appVersion;
    return {
      "trident": _0x400b4c.indexOf("Trident") > -1,
      "presto": _0x400b4c.indexOf("Presto") > -1,
      "webKit": _0x400b4c.indexOf("AppleWebKit") > -1,
      "gecko": _0x400b4c.indexOf("Gecko") > -1 && _0x400b4c.indexOf("KHTML") == -1,
      "mobile": !!_0x400b4c.match(/AppleWebKit.*Mobile.*/),
      "ios": !!_0x400b4c.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      "android": _0x400b4c.indexOf("Android") > -1 || _0x400b4c.indexOf("Adr") > -1,
      "iPhone": _0x400b4c.indexOf("iPhone") > -1,
      "iPad": _0x400b4c.indexOf("iPad") > -1,
      "webApp": _0x400b4c.indexOf("Safari") == -1,
      "weixin": _0x400b4c.indexOf("MicroMessenger") > -1,
      "qq": _0x400b4c.match(/\sQQ/i) == " qq"
    };
  }(),
  "start": function () {
    $.ajax({
      "url": "/admin/api.php",
      "dataType": "json",
      "success": function (_0x4f0b5a) {
        YKQ.waittime = _0x4f0b5a.data.waittime;
        YKQ.ads = _0x4f0b5a.data.ads;
        config.logo = _0x4f0b5a.data.logo;
        up.pbgjz = _0x4f0b5a.data.pbgjz;
        up.trysee = _0x4f0b5a.data.trytime;
        config.sendtime = _0x4f0b5a.data.sendtime;
        config.color = _0x4f0b5a.data.color;
        config.dmrule = _0x4f0b5a.data.dmrule;
        danmuon = _0x4f0b5a.data.danmuon;
        if (YKQ.ads.state == "on") {
          if (YKQ.ads.set.state == "1") YKQ.MYad.vod(YKQ.ads.set.vod.url, YKQ.ads.set.vod.link);else YKQ.ads.set.state == "2" && YKQ.MYad.pic(YKQ.ads.set.pic.link, YKQ.ads.set.pic.time, YKQ.ads.set.pic.img);
        } else YKQ.play(rc4(config.url, "202512221638052109", 1));
      }
    });
  },
  "play": function (_0x3991d9) {
    !danmuon ? YKQ.player.play(_0x3991d9) : config.av != "" ? YKQ.player.bdplay(_0x3991d9) : YKQ.player.dmplay(_0x3991d9);
    $(function () {
      $(".yzmplayer-setting-speeds,.yzmplayer-setting-speed-item").on("click", function () {
        $(".speed-stting").toggleClass("speed-stting-open");
      });
      $(".speed-stting .yzmplayer-setting-speed-item").click(function () {
        $(".yzmplayer-setting-speeds  .title").text($(this).text());
      });
    });
    $(".yzmplayer-fulloff-icon").on("click", function () {
      YKQ.dp.fullScreen.cancel();
    });
    $(".yzmplayer-showing").on("click", function () {
      YKQ.dp.play();
      $(".vod-pic").remove();
    });
    config.title != "" && $("#vodtitle").html(config.title + "  " + config.sid);
  },
  "dmid": function () {
    if (up.diyid[0] == 0 && config.id != "") a = config.id, b = config.sid;else (up.diyid[0] == 1 || !config.id) && (a = up.diyid[1], b = up.diyid[2]);
    YKQ.id = a + " P" + b;
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
    if (YKQ.versions.weixin && (YKQ.versions.ios || YKQ.versions.iPad)) {
      var _0x49a263 = "<style type=\"text/css\">";
      _0x49a263 += "#loading-box{display: none;}";
      _0x49a263 += "</style>";
      $("body").append(_0x49a263).addClass("");
    }
    YKQ.danmu.send();
    YKQ.danmu.list();
    YKQ.def();
    YKQ.video.try();
    YKQ.dp.danmaku.opacity(1);
  },
  "def": function () {
    console.log("播放器开启");
    YKQ.stime = 0;
    YKQ.headt = yzmck.get("headt");
    YKQ.lastt = yzmck.get("lastt");
    YKQ.last_tip = parseInt(YKQ.lastt) + 10;
    YKQ.frists = yzmck.get("frists");
    YKQ.lasts = yzmck.get("lasts");
    YKQ.playtime = Number(YKQ.getCookie("time_" + config.url));
    YKQ.ctime = YKQ.formatTime(YKQ.playtime);
    YKQ.dp.on("loadedmetadata", function () {
      YKQ.loadedmetadataHandler();
    });
    YKQ.dp.on("ended", function () {
      YKQ.endedHandler();
    });
    YKQ.dp.on("pause", function () {
      YKQ.MYad.pause.play(YKQ.ads.pause.link, YKQ.ads.pause.pic);
    });
    YKQ.dp.on("play", function () {
      YKQ.MYad.pause.out();
    });
    YKQ.dp.on("timeupdate", function (_0x472a39) {
      YKQ.timeupdateHandler();
    });
    YKQ.jump.def();
  },
  "video": {
    "play": function () {
      $("#link3").text("视频已准备就绪，即将为您播放");
      setTimeout(function () {
        YKQ.dp.play();
        $("#my-loading", parent.document).remove();
        YKQ.jump.head();
      }, 0);
    },
    "next": function () {
      top.location.href = up.mylink + config.next;
    },
    "try": function () {
      up.trysee > 0 && config.group < config.group_x && config.group != "" && ($("#dmtext").attr({
        "disabled": true,
        "placeholder": "登陆后才能发弹幕yo(・ω・)"
      }), setInterval(function () {
        var _0x442b85 = up.trysee * 60,
          _0x4a525f = YKQ.dp.video.currentTime;
        _0x4a525f > _0x442b85 && (YKQ.dp.video.currentTime = 0, YKQ.dp.pause(), layer.confirm(up.trysee + "分钟试看已结束，请登录继续播放完整视频", {
          "anim": 1,
          "title": "温馨提示",
          "btn": ["登录", "注册"],
          "yes": function (_0x17d8cd, _0x567302) {
            top.location.href = up.mylink + "/index.php/user/login.html";
          },
          "btn2": function (_0x462157, _0x3c09a3) {
            top.location.href = up.mylink + "/index.php/user/reg.html";
          }
        }));
      }, 1000));
    },
    "seek": function () {
      YKQ.dp.seek(YKQ.playtime);
    },
    "end": function () {
      layer.msg("播放结束啦=。=");
    },
    "con_play": function () {
      if (!danmuon) YKQ.jump.head();else {
        var _0x5a37ce = " <e>已播放至" + YKQ.ctime + "，继续上次播放？</e><d class=\"conplay-jump\">是 <i id=\"num\">" + YKQ.waittime + "</i>s</d><d class=\"conplaying\">否</d>";
        $("#link3").html(_0x5a37ce);
        var _0x144b0b = document.getElementById("num");
        var _0x5ad62f = _0x144b0b.innerHTML;
        var _0x319810 = null;
        setTimeout(function () {
          _0x319810 = setInterval(function () {
            _0x5ad62f--;
            _0x144b0b.innerHTML = _0x5ad62f;
            _0x5ad62f == 0 && (clearInterval(_0x319810), YKQ.video.seek(), YKQ.dp.play(), $(".memory-play-wrap,#loading-box").remove());
          }, 1000);
        }, 1);
      }
      var _0x1c1db8 = "<div class=\"memory-play-wrap\"><div class=\"memory-play\"><span class=\"close\">×</span><span>上次看到 </span><span>" + YKQ.ctime + "</span><span class=\"play-jump\">跳转播放</span></div></div>";
      $(".yzmplayer-cplayer").append(_0x1c1db8);
      $("#my-loading", parent.document).remove();
      YKQ.dp.play();
      $(".close").on("click", function () {
        $(".memory-play-wrap").remove();
      });
      setTimeout(function () {
        $(".memory-play-wrap").remove();
      }, 20000);
      $(".conplaying").on("click", function () {
        clearTimeout(_0x319810);
        $("#loading-box").remove();
        YKQ.dp.play();
        YKQ.jump.head();
      });
      $(".conplay-jump,.play-jump").on("click", function () {
        clearTimeout(_0x319810);
        YKQ.video.seek();
        $(".memory-play-wrap,#loading-box").remove();
        YKQ.dp.play();
      });
    }
  },
  "jump": {
    "def": function () {
      h = ".yzmplayer-setting-jfrist label";
      l = ".yzmplayer-setting-jlast label";
      f = "#fristtime";
      j = "#jumptime";
      _0x51191d(h, "frists", YKQ.frists, "headt", YKQ.headt, f);
      _0x51191d(l, "lasts", YKQ.lasts, "lastt", YKQ.lastt, j);
      function _0x481266() {
        layer.msg("请输入有效时间哟！");
      }
      function _0x2474f4() {
        layer.msg("设置完成，将在刷新或下一集生效");
      }
      function _0x51191d(_0x283e77, _0x3c3cc5, _0x7be484, _0x508000, _0x473df1, _0x2dad10) {
        $(_0x283e77).on("click", function () {
          o = $(_0x2dad10).val();
          o > 0 ? ($(_0x283e77).toggleClass("checked"), _0x2474f4(), _0x473df1 = $(_0x2dad10).val(), yzmck.set(_0x508000, _0x473df1)) : _0x481266();
        });
        _0x7be484 == 1 ? ($(_0x283e77).addClass("checked"), $(_0x283e77).click(function () {
          o = $(_0x2dad10).val();
          if (o > 0) yzmck.set(_0x3c3cc5, 0);else {
            _0x481266();
          }
        })) : $(_0x283e77).click(function () {
          {
            o = $(_0x2dad10).val();
            o > 0 ? yzmck.set(_0x3c3cc5, 1) : _0x481266();
          }
        });
      }
      $(f).attr({
        "value": YKQ.headt
      });
      $(j).attr({
        "value": YKQ.lastt
      });
      YKQ.jump.last();
    },
    "head": function () {
      if (YKQ.stime > YKQ.playtime) YKQ.playtime = YKQ.stime;
      if (YKQ.frists == 1) {
        if (YKQ.headt > YKQ.playtime || YKQ.playtime == 0) YKQ.jump_f = 1;else {
          YKQ.jump_f = 0;
        }
      }
      YKQ.jump_f == 1 && (YKQ.dp.seek(YKQ.headt), YKQ.dp.notice("已为您跳过片头"));
    },
    "last": function () {
      if (config.next != "") {
        YKQ.lasts == 1 && setInterval(function () {
          var _0x2a835e = YKQ.dp.video.duration - YKQ.dp.video.currentTime;
          if (_0x2a835e < YKQ.last_tip) YKQ.dp.notice("即将为您跳过片尾");
          YKQ.lastt > 0 && _0x2a835e < YKQ.lastt && (YKQ.setCookie("time_" + config.url, "", -1), YKQ.video.next());
        }, 1000);
      } else {
        $(".icon-xj").remove();
      }
    },
    "ad": function (_0x3558c3, _0x48baef) {}
  },
  "danmu": {
    "send": function () {
      g = $(".yzm-yzmplayer-send-icon");
      d = $("#dmtext");
      h = ".yzmplayer-comment-setting-";
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
            layer.msg("会员专属功能");
            return;
          }
          t = $(this).attr("value");
          setTimeout(function () {
            d.attr("size", t);
          }, 100);
        }
      });
      g.on("click", function () {
        {
          a = document.getElementById("dmtext");
          a = a.value;
          b = d.attr("dmtype");
          c = d.css("color");
          z = d.attr("size");
          if (up.trysee > 0 && config.group < config.group_x && config.group != "") {
            layer.msg("登陆后才能发弹幕yo(・ω・)");
            return;
          }
          for (var _0x331f8e = 0; _0x331f8e < up.pbgjz.length; _0x331f8e++) {
            if (a.search(up.pbgjz[_0x331f8e]) != -1) {
              {
                layer.msg("请勿发送无意义内容，规范您的弹幕内容");
                return;
              }
            }
          }
          if (a.length < 1) {
            layer.msg("要输入弹幕内容啊喂！");
            return;
          }
          var _0x1f4c4c = Date.parse(new Date()),
            _0x33df73 = yzmck.get("dmsent", _0x1f4c4c);
          if (_0x1f4c4c - _0x33df73 < config.sendtime * 1000) {
            layer.msg("请勿频繁操作！发送弹幕需间隔" + config.sendtime + "秒~");
            return;
          }
          d.val("");
          YKQ.dp.danmaku.send({
            "text": a,
            "color": c,
            "type": b,
            "size": z
          });
          yzmck.set("dmsent", _0x1f4c4c);
        }
      });
      function _0x3b372d() {
        g.trigger("click");
      }
      d.keydown(function (_0x550732) {
        _0x550732.keyCode == 13 && _0x3b372d();
      });
    },
    "list": function () {
      $(".yzmplayer-list-icon,.yzm-yzmplayer-send-icon").on("click", function () {
        $(".list-show").empty();
        $.ajax({
          "url": config.api + "?ac=get&id=" + YKQ.id,
          "success": function (_0x10944a) {
            if (_0x10944a.code == 23) {
              {
                a = _0x10944a.danmuku;
                b = _0x10944a.name;
                c = _0x10944a.danum;
                $(".danmuku-num").text(c);
                $(a).each(function (_0x3038f0, _0x26090e) {
                  l = "<d class=\"danmuku-list\" time=\"" + _0x26090e[0] + "\"><li>" + YKQ.formatTime(_0x26090e[0]) + "</li><li title=\"" + _0x26090e[4] + "\">" + _0x26090e[4] + "</li><li title=\"用户：" + _0x26090e[3] + "  IP地址：" + _0x26090e[5] + "\">" + _0x26090e[6] + "</li><li class=\"report\" onclick=\"YKQ.danmu.report('" + _0x26090e[5] + "','" + b + "','" + _0x26090e[4] + "','" + _0x26090e[3] + "')\">举报</li></d>";
                  $(".list-show").append(l);
                });
              }
            }
            $(".danmuku-list").on("dblclick", function () {
              YKQ.dp.seek($(this).attr("time"));
            });
          }
        });
      });
      var _0x5f26c6 = "<div class=\"dmrules\"><a target=\"_blank\" href=\"" + config.dmrule + "\">弹幕礼仪 </a></div>";
      $("div.yzmplayer-comment-box:last").append(_0x5f26c6);
      $(".yzmplayer-watching-number").text(up.usernum);
      $(".yzmplayer-info-panel-item-title-amount .yzmplayer-info-panel-item-title").html("违规词");
      for (var _0x49a61f = 0; _0x49a61f < up.pbgjz.length; _0x49a61f++) {
        var _0x412c4c = "<e>" + up.pbgjz[_0x49a61f] + "</e>";
        $("#vod-title").append(_0x412c4c);
      }
      _0x5ad158(".yzmplayer-list-icon", ".yzmplayer-danmu", "show");
      function _0x5ad158(_0x28deac, _0x113a5e, _0x444e80, _0x295b29) {
        $(_0x28deac).click(function () {
          $(_0x113a5e).toggleClass(_0x444e80);
          $(_0x295b29).remove();
        });
      }
    },
    "report": function (_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04) {
      layer.confirm("" + _0x70b58f + "<!--br><br><span style=\"color:#333\">请选择需要举报的类型</span-->", {
        "anim": 1,
        "title": "举报弹幕",
        "btn": ["违法违禁", "色情低俗", "恶意刷屏", "赌博诈骗", "人身攻击", "侵犯隐私", "垃圾广告", "剧透", "引战"],
        "btn3": function (_0x56fb2b, _0x2aa417) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "恶意刷屏");
        },
        "btn4": function (_0x2087c2, _0x209b3b) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "赌博诈骗");
        },
        "btn5": function (_0x57604f, _0x14c102) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "人身攻击");
        },
        "btn6": function (_0x2fe74b, _0x475535) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "侵犯隐私");
        },
        "btn7": function (_0xe9da1d, _0x10f2a4) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "垃圾广告");
        },
        "btn8": function (_0x30eec5, _0x335eb5) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "剧透");
        },
        "btn9": function (_0x50cdf9, _0x3cdec6) {
          YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "引战");
        }
      }, function (_0x495256, _0x2fe589) {
        YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "违法违禁");
      }, function (_0x1d9a15) {
        YKQ.danmu.post_r(_0x409f5c, _0x35c42b, _0x70b58f, _0x445f04, "色情低俗");
      });
    },
    "post_r": function (_0x4368dd, _0x29a9ec, _0x3106c2, _0x2d24d1, _0x2dabb2) {
      $.ajax({
        "type": "get",
        "url": config.api + "?ac=report&cid=" + _0x2d24d1 + "&user=" + _0x4368dd + "&type=" + _0x2dabb2 + "&title=" + _0x29a9ec + "&text=" + _0x3106c2,
        "cache": false,
        "dataType": "json",
        "beforeSend": function () {},
        "success": function (_0x5bcd9a) {
          layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
        },
        "error": function (_0x3f854b) {
          {
            var _0x1add7b = "服务故障 or 网络异常，稍后再试6！";
            layer.msg(_0x1add7b);
          }
        }
      });
    }
  },
  "setCookie": function (_0x4e2ded, _0x1d336a, _0x84e661) {
    var _0x5641b7 = new Date();
    _0x5641b7.setHours(_0x5641b7.getHours() + _0x84e661);
    window.sessionStorage ? window.sessionStorage.setItem("playtime", _0x4e2ded + "=" + escape(_0x1d336a) + (_0x84e661 === null ? "" : ";expires=" + _0x5641b7.toGMTString())) : document.cookie = _0x4e2ded + "=" + escape(_0x1d336a) + (_0x84e661 === null ? "" : ";expires=" + _0x5641b7.toGMTString());
  },
  "getCookie": function (_0x59086a) {
    if (window.sessionStorage) {
      {
        var _0x1fdb09 = window.sessionStorage.getItem("playtime");
        if (_0x1fdb09 && _0x1fdb09.length > 0) {
          c_start = _0x1fdb09.indexOf(_0x59086a + "=");
          if (c_start !== -1) {
            c_start = c_start + _0x59086a.length + 1;
            c_end = _0x1fdb09.indexOf(";", c_start);
            c_end === -1 && (c_end = _0x1fdb09.length);
            return unescape(_0x1fdb09.substring(c_start, c_end));
          }
        }
      }
    } else {
      {
        if (document.cookie.length > 0) {
          c_start = document.cookie.indexOf(_0x59086a + "=");
          if (c_start !== -1) {
            c_start = c_start + _0x59086a.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            c_end === -1 && (c_end = document.cookie.length);
            return unescape(document.cookie.substring(c_start, c_end));
          }
        }
      }
    }
    return "";
  },
  "formatTime": function (_0x46dcf3) {
    return [parseInt(_0x46dcf3 / 60 / 60), parseInt(_0x46dcf3 / 60 % 60), parseInt(_0x46dcf3 % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
  },
  "loadedmetadataHandler": function () {
    YKQ.playtime > 0 && YKQ.dp.video.currentTime < YKQ.playtime ? setTimeout(function () {
      YKQ.video.con_play();
    }, 1000) : setTimeout(function () {
      !danmuon ? YKQ.jump.head() : (YKQ.dp.notice("视频已准备就绪，即将为您播放"), $("#my-loading", parent.document).remove(), YKQ.video.play());
    }, 0);
    YKQ.dp.on("timeupdate", function () {
      YKQ.timeupdateHandler();
    });
  },
  "timeupdateHandler": function () {
    YKQ.setCookie("time_" + config.url, YKQ.dp.video.currentTime, 24);
  },
  "endedHandler": function () {
    YKQ.setCookie("time_" + config.url, "", -1);
    config.next != "" ? (YKQ.dp.notice("5s后,将自动为您播放下一集"), setTimeout(function () {
      YKQ.video.next();
    }, 5000)) : (YKQ.dp.notice("视频播放已结束"), setTimeout(function () {
      YKQ.video.end();
    }, 2000));
  },
  "player": {
    "play": function (_0x49fa2b) {
      $("body").addClass("danmu-off");
      YKQ.dp = new yzmplayer({
        "autoplay": true,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x49fa2b,
          "pic": config.pic,
          "type": "auto"
        }
      });
      var _0x262e27 = "<style type=\"text/css\">";
      _0x262e27 += "#loading-box{display: none;}";
      _0x262e27 += "</style>";
      $("body").append(_0x262e27).addClass("");
      YKQ.def();
    },
    "adplay": function (_0x2144d0) {
      $("body").addClass("danmu-off");
      YKQ.ad = new yzmplayer({
        "autoplay": true,
        "element": document.getElementById("ADplayer"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x2144d0,
          "pic": config.pic,
          "type": "auto"
        }
      });
      $(".yzmplayer-controller,.yzmplayer-cplayer,.yzmplayer-logo,#loading-box,.yzmplayer-controller-mask").remove();
      $(".yzmplayer-mask").show();
      YKQ.ad.on("timeupdate", function () {
        {
          if (YKQ.ad.video.currentTime > YKQ.ad.video.duration - 0.1) {
            $("body").removeClass("danmu-off");
            YKQ.ad.destroy();
            $("#ADplayer").remove();
            $("#ADtip").remove();
            YKQ.play(config.url);
          }
        }
      });
    },
    "dmplay": function (_0x5d932a) {
      YKQ.dmid();
      YKQ.dp = new yzmplayer({
        "autoplay": true,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x5d932a,
          "pic": config.pic,
          "type": "auto"
        },
        "danmaku": {
          "id": YKQ.id,
          "api": config.api + "?ac=dm",
          "user": config.user
        }
      });
      YKQ.load();
    },
    "bdplay": function (_0x239dcc) {
      YKQ.dmid();
      YKQ.dp = new yzmplayer({
        "autoplay": true,
        "element": document.getElementById("player"),
        "theme": config.color,
        "logo": config.logo,
        "video": {
          "url": _0x239dcc,
          "pic": config.pic,
          "type": "auto"
        },
        "danmaku": {
          "id": YKQ.id,
          "api": config.api + "?ac=dm",
          "user": config.user,
          "addition": [config.api + "bilibili/?av=" + config.av]
        }
      });
      YKQ.load();
    }
  },
  "MYad": {
    "vod": function (_0x1645a4, _0x5a99d1) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0x5a99d1 + "\" target=\"_blank\">查看详情</a>");
      $("#ADplayer").click(function () {
        document.getElementById("link").click();
      });
      YKQ.player.adplay(_0x1645a4);
    },
    "pic": function (_0x3d5801, _0x1877ea, _0x145e55) {
      $("#ADtip").html("<a id=\"link\" href=\"" + _0x3d5801 + "\" target=\"_blank\">广告 <e id=\"time_ad\">" + _0x1877ea + "</e></a><img src=\"" + _0x145e55 + "\">");
      $("#ADtip").click(function () {
        document.getElementById("link").click();
      });
      var _0xc2c970 = document.getElementById("time_ad"),
        _0x3299ec = _0xc2c970.innerHTML,
        _0x433bcc = null;
      setTimeout(function () {
        _0x433bcc = setInterval(function () {
          _0x3299ec--;
          _0xc2c970.innerHTML = _0x3299ec;
          if (_0x3299ec == 0) {
            clearInterval(_0x433bcc);
            YKQ.play(config.url);
            $("#ADtip").remove();
          }
        }, 1000);
      }, 1);
    },
    "pause": {
      "play": function (_0x4f4acd, _0x1680c0) {
        if (YKQ.ads.pause.state == "on") {
          {
            var _0x1272c3 = "<div id=\"player_pause\"><div class=\"tip\">广告</div><a href=\"" + _0x4f4acd + "\" target=\"_blank\"><img src=\"" + _0x1680c0 + "\"></a></div>";
            $("#player").before(_0x1272c3);
          }
        }
      },
      "out": function () {
        $("#player_pause").remove();
      }
    }
  }
};
function rc4(_0x2262fd, _0x112647, _0x1bd18b) {
  var _0x29a4a9 = _0x112647 || "bigon",
    _0x409395 = "",
    _0x112647 = [],
    _0x3e4509 = [],
    _0x1bbf36 = _0x29a4a9.length;
  if (_0x1bd18b == 1) {
    var _0x2262fd = atob(_0x2262fd);
  } else {
    var _0x2262fd = encodeURIComponent(_0x2262fd);
  }
  var _0x143495 = _0x2262fd.length;
  for (i = 0; i < 256; i++) {
    _0x112647[i] = _0x29a4a9[i % _0x1bbf36].charCodeAt();
    _0x3e4509[i] = i;
  }
  for (j = i = 0; i < 256; i++) {
    j = (j + _0x3e4509[i] + _0x112647[i]) % 256;
    tmp = _0x3e4509[i];
    _0x3e4509[i] = _0x3e4509[j];
    _0x3e4509[j] = tmp;
  }
  for (a = j = i = 0; i < _0x143495; i++) {
    a = (a + 1) % 256;
    j = (j + _0x3e4509[a]) % 256;
    tmp = _0x3e4509[a];
    _0x3e4509[a] = _0x3e4509[j];
    _0x3e4509[j] = tmp;
    k = _0x3e4509[(_0x3e4509[a] + _0x3e4509[j]) % 256];
    _0x409395 += String.fromCharCode(_0x2262fd[i].charCodeAt() ^ k);
  }
  if (_0x1bd18b == 1) {
    return decodeURIComponent(_0x409395);
  } else return btoa(_0x409395);
}