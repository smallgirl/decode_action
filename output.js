//Wed Aug 06 2025 09:23:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var MIZHI = {
  "start": function () {
    window.MIZHI.version = "MizhiPlayer觅知弹幕ART播放器";
    window.MIZHI.versionnum = "V25.01.15";
    window.MIZHI.versionkey = "Mizhi_ART_Player";
    $.ajax({
      "url": "/admin/api.php",
      "dataType": "json",
      "success": function (_0x5249ee) {
        MIZHI.waittime = _0x5249ee.data.waittime;
        MIZHI.adss = _0x5249ee.data.ads;
        config.logo = _0x5249ee.data.logo;
        up.pbgjz = _0x5249ee.data.pbgjz;
        up.trysee = _0x5249ee.data.trytime;
        config.sendtime = _0x5249ee.data.sendtime;
        config.color = _0x5249ee.data.color;
        config.pmdoff = _0x5249ee.data.pmdoff;
        config.pmdzdy = _0x5249ee.data.pmdzdy;
        config.pmdloopnum = _0x5249ee.data.pmdloopnum;
        config.pmdspeed = _0x5249ee.data.pmdspeed;
        config.pmdtopweizhi = _0x5249ee.data.pmdtopweizhi;
        up.dmrule = _0x5249ee.data.dmrule;
        danmuon = _0x5249ee.data.danmuon;
        MIZHI.err_bg = _0x5249ee.data.err_bg;
        MIZHI.err_bg_imgurl = _0x5249ee.data.err_bg_imgurl;
        MIZHI.err_bg_vodurl = _0x5249ee.data.err_bg_vodurl;
        MIZHI.video_thumbnails = _0x5249ee.data.video_thumbnails;
        MIZHI.errzdytext = _0x5249ee.data.errzdytext;
        MIZHI.errzdylink = _0x5249ee.data.errzdylink;
        MIZHI.errzdylink = _0x5249ee.data.errzdylink;
        MIZHI.keywords = _0x5249ee.data.keywords;
        MIZHI.contenttext = _0x5249ee.data.content;
        MIZHI.contenttext2 = _0x5249ee.data.content2;
        MIZHI.xuanji = _0x5249ee.data.cmsapi;
        MIZHI.yiyanhitokoto_on = _0x5249ee.data.yiyanhitokoto;
        config.api_zyurl_domain_all = _0x5249ee.data.api_zyurl_domain_all;
        config.dm_url_canshu = _0x5249ee.data.dm_url_canshu;
        config.bendi_danmuku = _0x5249ee.data.bendi_danmuku;
        config.bendi_dm_url_canshu = _0x5249ee.data.bendi_dm_url_canshu;
        config.dm_list_on = _0x5249ee.data.dm_list_on;
        config.dm_speed = _0x5249ee.data.dm_speed;
        config.dm_fontSize = _0x5249ee.data.dm_fontSize;
        config.dm_margin_1 = _0x5249ee.data.dm_margin_1;
        config.dm_margin_2 = _0x5249ee.data.dm_margin_2;
        config.beisu = _0x5249ee.data.beisu;
      }
    });
    const _0x2eb32e = "MizhiPlayer觅知弹幕ART播放器",
      _0x4d7cc0 = window.MIZHI ? window.MIZHI.version : "";
    _0x4d7cc0 !== _0x2eb32e ? $(function () {
      $("#mizhi_zdyload").html("<div class=\"tips\">您当前使用的是盗版请购买正版官网:www.98dou.cn联系官方QQ2319281411</div></div>");
    }) : $(function () {
      {
        var _0x15265f = "<div class=\"load_text\"><div class=\"load_img\">视频加载中,已等候<span>..</span><span id=\"timeCounter\"> 0 </span>秒</div><hr/><hr/><hr/><hr/></div>";
        $("#mizhi_zdyload").append(_0x15265f);
        var _0x10971d = 0;
        function _0x4b9ac9() {
          _0x10971d++;
          $("#timeCounter").text(_0x10971d);
        }
        setInterval(_0x4b9ac9, 1000);
      }
    });
  },
  "tips": function () {
    var _0x26d470 = "<div class=\"main\"><div class=\"logo\"><img src=\"" + config.logo + "\"></div><div class=\"loading\"></div><div class=\"tips\">如果你觉得 " + up.mylink + " 不错~</br>记得把 " + up.title + " 推荐给朋友们</div></div>";
    $("#loading").append(_0x26d470);
  },
  "modify": function () {
    t_info = "<div class=\"art-info-item\"><div class=\"art-info-title\">弹幕ID/URL:</div><div class=\"art-info-content\"><span id=\"danmuku-id\">8</span></div></div><div class=\"art-info-item\"><div class=\"art-info-title\">弹幕数量:</div><div class=\"art-info-content\"><span id=\"danmuku-num\">8</span></div></div>";
    $(".art-contextmenu-version").remove();
    a = $(".art-info-panel");
    a.append(t_info);
    t = ".art-info-title";
    a.find(t).eq(0).html("觅知播放器:");
    a.find(".art-info-content").eq(0).prepend(MIZHI.version + " " + MIZHI.versionnum + " ART内核— ");
    a.find(t).eq(1).html("视频地址:");
    a.find(t).eq(2).html("播放音量:");
    a.find(t).eq(3).html("播放时长:");
    a.find(t).eq(4).html("视频时长:");
    a.find(t).eq(5).html("视频分辨率:");
    $(".art-info-close").css({
      "right": "8px",
      "font-size": "18px"
    });
    $(".art-control-progress").css({
      "height": "6px"
    });
    $(".art-video-player:first .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip").css({
      "height": "53px",
      "pointer-events": "none",
      "background": "url(./img/sign.png) no-repeat center"
    });
    $(".art-layers:first").prepend("<div class=\"title-name\" id=\"title-name\">" + config.title + "</div>");
    danmusvg = $(".art-icon-danmu-on > svg > path:nth-child(2)");
    danmusvg.length > 0 && danmusvg.attr("fill", "#00c9ff");
    var _0x5be298 = null;
    bottom = $(".art-bottom");
    header = $(".art-layer-logo,.title-name");
    transform_0 = {
      "transform": "translateY(0)",
      "-webkit-transform": "translateY(0)",
      "-moz-transform": "translateY(0)",
      "transition": "transform .3s, -webkit-transform .3s"
    };
    transform_73 = {
      "transform": "translateY(73px)",
      "-webkit-transform": "translateY(73px)",
      "-moz-transform": "translateY(73px)"
    };
    transform_f80 = {
      "transform": "translateY(-80px)",
      "-webkit-transform": "translateY(-80px)",
      "-moz-transform": "translateY(-80px)"
    };
    function _0x3f4022() {
      {
        $("#pause-html").length > 0 && $("#pause-html").css({
          "display": "none"
        });
        header.css(transform_0);
        bottom.css(transform_0);
        clearTimeout(_0x5be298);
        if (bottom.is(":hover") == true) bottom.css({
          "opacity": "1",
          "visibility": "visible"
        });else {
          bottom.css({
            "opacity": "",
            "visibility": ""
          });
        }
        _0x5be298 = setTimeout(() => {
          header.css(transform_f80);
          $("#video_thumbnails").css("display", "none");
          $("#pause-html").length > 0 && $("#pause-html").css({
            "display": "block"
          });
          $(".art-danmuku-input").is(":focus") != true && bottom.is(":hover") != true && bottom.css(transform_73);
        }, 3000);
      }
    }
    _0x3f4022();
    MIZHI.art.on("mousemove", () => {
      _0x3f4022();
    });
    MIZHI.video_thumbnails == "on" && (video_thumbnails = "<div id=\"video_thumbnails\" class=\"art-control art-control-thumbnails\" data-index=\"20\" style=\"display: none;width: 160px;height: 90px;\"></div>", $(".art-control-progress").after(video_thumbnails), MIZHI.thumbnails_player("#video_thumbnails", MIZHI.player_url), MIZHI.art.on("mousemove", () => {
      if ($(".art-progress-tip").css("display") == "block") {
        th_left = $(".art-progress-tip").css("left").slice(-12, -2);
        maxWidth = Number($(".art-progress").width()) - Number(160);
        th_left >= 59 && (th_left = Number(th_left) - Number(59));
        th_left >= maxWidth && (th_left = maxWidth);
        $("#video_thumbnails").css({
          "left": th_left,
          "display": "block"
        });
        $("#video_thumbnails > div > div.art-bottom,#video_thumbnails > div > div.art-mask,#video_thumbnails > div > div.art-notice,#video_thumbnails > div > div.art-info.art-backdrop-filter").remove();
        $("#video_thumbnails > div > div.art-contextmenus").remove();
        currentTime = MIZHI.formatTimes($(".art-progress-tip").text());
        MIZHI.ths.currentTime = currentTime;
      } else {
        $("#video_thumbnails").css("display", "none");
      }
    }));
    x = (MIZHI.art.currentTime / MIZHI.art.duration * 100).toFixed(2) + "%";
    MIZHI.art.on("video:timeupdate", () => {
      w = (MIZHI.art.currentTime / MIZHI.art.duration * 100 + 0.01).toFixed(2) + "%";
      x1 = $("div.art-progress-played:first").width();
      MIZHI.bili_pbp(x, w, x1);
    });
  },
  "bili_pbp": function (_0x1f2bb3, _0x59f8e4, _0x1fbee5) {
    if ($("#bilibili_pbp").length > 0) {
      Number(_0x1f2bb3.replace("%", "")) > Number(_0x59f8e4.replace("%", "")) && (window.x = _0x59f8e4);
      ww = (Number(_0x59f8e4.replace("%", "")) - Number(_0x1f2bb3.replace("%", ""))).toFixed(2) + "%";
      _0x1fbee5 = _0x1fbee5 * 0.8;
      if (Number(ww.replace("%", "")) < 0) {
        ww = "0%";
      }
      $("#pbp-played-path > rect:first").attr({
        "x": _0x1f2bb3,
        "width": ww
      });
    } else {
      path0 = "<path d=\"M 0 100 L 0 80 C 5.3 80.0, 5.3 4.9, 10.6 4.9 C 16.0 4.9, 16.0 0.0, 21.3 0.0 C 26.6 0.0, 26.6 40.4, 31.9 40.4 C 37.2 40.4, 37.2 42.5, 42.6 42.5 C 47.9 42.5, 47.9 42.3, 53.2 42.3 C 58.5 42.3, 58.5 37.8, 63.8 37.8 C 69.1 37.8, 69.1 36.3, 74.5 36.3 C 79.8 36.3, 79.8 30.3, 85.1 30.3 C 90.4 30.3, 90.4 22.5, 95.7 22.5 C 101.1 22.5, 101.1 22.1, 106.4 22.1 C 111.7 22.1, 111.7 32.8, 117.0 32.8 C 122.3 32.8, 122.3 46.6, 127.7 46.6 C 133.0 46.6, 133.0 56.0, 138.3 56.0 C 143.6 56.0, 143.6 60.1, 148.9 60.1 C 154.3 60.1, 154.3 54.2, 159.6 54.2 C 164.9 54.2, 164.9 58.0, 170.2 58.0 C 175.5 58.0, 175.5 61.0, 180.9 61.0 C 186.2 61.0, 186.2 68.0, 191.5 68.0 C 196.8 68.0, 196.8 66.6, 202.1 66.6 C 207.4 66.6, 207.4 47.5, 212.8 47.5 C 218.1 47.5, 218.1 33.3, 223.4 33.3 C 228.7 33.3, 228.7 32.8, 234.0 32.8 C 239.4 32.8, 239.4 14.6, 244.7 14.6 C 250.0 14.6, 250.0 40.9, 255.3 40.9 C 260.6 40.9, 260.6 39.8, 266.0 39.8 C 271.3 39.8, 271.3 63.0, 276.6 63.0 C 281.9 63.0, 281.9 68.7, 287.2 68.7 C 292.6 68.7, 292.6 72.6, 297.9 72.6 C 303.2 72.6, 303.2 73.3, 308.5 73.3 C 313.8 73.3, 313.8 71.3, 319.1 71.3 C 324.5 71.3, 324.5 59.1, 329.8 59.1 C 335.1 59.1, 335.1 60.1, 340.4 60.1 C 345.7 60.1, 345.7 66.2, 351.1 66.2 C 356.4 66.2, 356.4 64.5, 361.7 64.5 C 367.0 64.5, 367.0 72.5, 372.3 72.5 C 377.7 72.5, 377.7 61.5, 383.0 61.5 C 388.3 61.5, 388.3 59.4, 393.6 59.4 C 398.9 59.4, 398.9 58.8, 404.3 58.8 C 409.6 58.8, 409.6 70.4, 414.9 70.4 C 420.2 70.4, 420.2 70.3, 425.5 70.3 C 430.9 70.3, 430.9 61.2, 436.2 61.2 C 441.5 61.2, 441.5 49.0, 446.8 49.0 C 452.1 49.0, 452.1 58.7, 457.4 58.7 C 462.8 58.7, 462.8 59.1, 468.1 59.1 C 473.4 59.1, 473.4 9.9, 478.7 9.9 C 484.0 9.9, 484.0 30.4, 489.4 30.4 C 494.7 30.4, 494.7 71.5, 500.0 71.5 C 505.3 71.5, 505.3 73.1, 510.6 73.1 C 516.0 73.1, 516.0 54.6, 521.3 54.6 C 526.6 54.6, 526.6 67.2, 531.9 67.2 C 537.2 67.2, 537.2 74.1, 542.6 74.1 C 547.9 74.1, 547.9 71.1, 553.2 71.1 C 558.5 71.1, 558.5 68.1, 563.8 68.1 C 569.1 68.1, 569.1 71.4, 574.5 71.4 C 579.8 71.4, 579.8 70.8, 585.1 70.8 C 590.4 70.8, 590.4 63.1, 595.7 63.1 C 601.1 63.1, 601.1 25.7, 606.4 25.7 C 611.7 25.7, 611.7 32.9, 617.0 32.9 C 622.3 32.9, 622.3 69.0, 627.7 69.0 C 633.0 69.0, 633.0 73.1, 638.3 73.1 C 643.6 73.1, 643.6 73.2, 648.9 73.2 C 654.3 73.2, 654.3 72.2, 659.6 72.2 C 664.9 72.2, 664.9 72.3, 670.2 72.3 C 675.5 72.3, 675.5 74.6, 680.9 74.6 C 686.2 74.6, 686.2 74.0, 691.5 74.0 C 696.8 74.0, 696.8 71.1, 702.1 71.1 C 707.4 71.1, 707.4 72.5, 712.8 72.5 C 718.1 72.5, 718.1 73.4, 723.4 73.4 C 728.7 73.4, 728.7 71.8, 734.0 71.8 C 739.4 71.8, 739.4 72.3, 744.7 72.3 C 750.0 72.3, 750.0 73.3, 755.3 73.3 C 760.6 73.3, 760.6 68.1, 766.0 68.1 C 771.3 68.1, 771.3 73.9, 776.6 73.9 C 781.9 73.9, 781.9 71.7, 787.2 71.7 C 792.6 71.7, 792.6 71.1, 797.9 71.1 C 803.2 71.1, 803.2 71.8, 808.5 71.8 C 813.8 71.8, 813.8 72.6, 819.1 72.6 C 824.5 72.6, 824.5 73.8, 829.8 73.8 C 835.1 73.8, 835.1 73.7, 840.4 73.7 C 845.7 73.7, 845.7 71.2, 851.1 71.2 C 856.4 71.2, 856.4 69.3, 861.7 69.3 C 867.0 69.3, 867.0 67.4, 872.3 67.4 C 877.7 67.4, 877.7 66.6, 883.0 66.6 C 888.3 66.6, 888.3 36.2, 893.6 36.2 C 898.9 36.2, 898.9 20.7, 904.3 20.7 C 909.6 20.7, 909.6 68.6, 914.9 68.6 C 920.2 68.6, 920.2 73.3, 925.5 73.3 C 930.9 73.3, 930.9 74.8, 936.2 74.8 C 941.5 74.8, 941.5 75.5, 946.8 75.5 C 952.1 75.5, 952.1 75.9, 957.4 75.9 C 962.8 75.9, 962.8 75.5, 968.1 75.5 C 973.4 75.5, 973.4 74.4, 978.7 74.4 C 984.0 74.4, 984.0 76.9, 989.4 76.9 C 994.7 76.9, 994.7 80.0, 1000.0 80.0 L 1000 100 Z\"></path>";
      path1 = "<path d=\"M 0 100 L 0 80 C 5.0 80.0, 5.0 51.7, 10.0 51.7 C 15.0 51.7, 15.0 48.8, 20.0 48.8 C 25.0 48.8, 25.0 49.9, 30.0 49.9 C 35.0 49.9, 35.0 50.1, 40.0 50.1 C 45.0 50.1, 45.0 49.3, 50.0 49.3 C 55.0 49.3, 55.0 46.8, 60.0 46.8 C 65.0 46.8, 65.0 43.7, 70.0 43.7 C 75.0 43.7, 75.0 40.0, 80.0 40.0 C 85.0 40.0, 85.0 35.5, 90.0 35.5 C 95.0 35.5, 95.0 28.6, 100.0 28.6 C 105.0 28.6, 105.0 21.5, 110.0 21.5 C 115.0 21.5, 115.0 28.1, 120.0 28.1 C 125.0 28.1, 125.0 42.0, 130.0 42.0 C 135.0 42.0, 135.0 46.0, 140.0 46.0 C 145.0 46.0, 145.0 48.7, 150.0 48.7 C 155.0 48.7, 155.0 43.9, 160.0 43.9 C 165.0 43.9, 165.0 54.6, 170.0 54.6 C 175.0 54.6, 175.0 53.7, 180.0 53.7 C 185.0 53.7, 185.0 52.0, 190.0 52.0 C 195.0 52.0, 195.0 53.0, 200.0 53.0 C 205.0 53.0, 205.0 28.7, 210.0 28.7 C 215.0 28.7, 215.0 31.9, 220.0 31.9 C 225.0 31.9, 225.0 36.3, 230.0 36.3 C 235.0 36.3, 235.0 37.5, 240.0 37.5 C 245.0 37.5, 245.0 38.8, 250.0 38.8 C 255.0 38.8, 255.0 36.8, 260.0 36.8 C 265.0 36.8, 265.0 32.6, 270.0 32.6 C 275.0 32.6, 275.0 27.9, 280.0 27.9 C 285.0 27.9, 285.0 34.6, 290.0 34.6 C 295.0 34.6, 295.0 61.1, 300.0 61.1 C 305.0 61.1, 305.0 61.1, 310.0 61.1 C 315.0 61.1, 315.0 62.3, 320.0 62.3 C 325.0 62.3, 325.0 62.1, 330.0 62.1 C 335.0 62.1, 335.0 60.6, 340.0 60.6 C 345.0 60.6, 345.0 58.1, 350.0 58.1 C 355.0 58.1, 355.0 32.4, 360.0 32.4 C 365.0 32.4, 365.0 30.7, 370.0 30.7 C 375.0 30.7, 375.0 4.6, 380.0 4.6 C 385.0 4.6, 385.0 0.0, 390.0 0.0 C 395.0 0.0, 395.0 32.4, 400.0 32.4 C 405.0 32.4, 405.0 30.4, 410.0 30.4 C 415.0 30.4, 415.0 37.1, 420.0 37.1 C 425.0 37.1, 425.0 42.8, 430.0 42.8 C 435.0 42.8, 435.0 47.7, 440.0 47.7 C 445.0 47.7, 445.0 46.2, 450.0 46.2 C 455.0 46.2, 455.0 42.2, 460.0 42.2 C 465.0 42.2, 465.0 62.9, 470.0 62.9 C 475.0 62.9, 475.0 38.6, 480.0 38.6 C 485.0 38.6, 485.0 33.1, 490.0 33.1 C 495.0 33.1, 495.0 38.1, 500.0 38.1 C 505.0 38.1, 505.0 36.3, 510.0 36.3 C 515.0 36.3, 515.0 41.0, 520.0 41.0 C 525.0 41.0, 525.0 33.0, 530.0 33.0 C 535.0 33.0, 535.0 21.2, 540.0 21.2 C 545.0 21.2, 545.0 22.0, 550.0 22.0 C 555.0 22.0, 555.0 23.6, 560.0 23.6 C 565.0 23.6, 565.0 24.9, 570.0 24.9 C 575.0 24.9, 575.0 26.6, 580.0 26.6 C 585.0 26.6, 585.0 55.8, 590.0 55.8 C 595.0 55.8, 595.0 61.4, 600.0 61.4 C 605.0 61.4, 605.0 62.4, 610.0 62.4 C 615.0 62.4, 615.0 61.8, 620.0 61.8 C 625.0 61.8, 625.0 63.3, 630.0 63.3 C 635.0 63.3, 635.0 65.1, 640.0 65.1 C 645.0 65.1, 645.0 63.6, 650.0 63.6 C 655.0 63.6, 655.0 63.6, 660.0 63.6 C 665.0 63.6, 665.0 63.3, 670.0 63.3 C 675.0 63.3, 675.0 59.4, 680.0 59.4 C 685.0 59.4, 685.0 59.5, 690.0 59.5 C 695.0 59.5, 695.0 59.9, 700.0 59.9 C 705.0 59.9, 705.0 59.9, 710.0 59.9 C 715.0 59.9, 715.0 57.3, 720.0 57.3 C 725.0 57.3, 725.0 60.8, 730.0 60.8 C 735.0 60.8, 735.0 63.8, 740.0 63.8 C 745.0 63.8, 745.0 61.5, 750.0 61.5 C 755.0 61.5, 755.0 62.1, 760.0 62.1 C 765.0 62.1, 765.0 64.0, 770.0 64.0 C 775.0 64.0, 775.0 64.2, 780.0 64.2 C 785.0 64.2, 785.0 63.0, 790.0 63.0 C 795.0 63.0, 795.0 62.7, 800.0 62.7 C 805.0 62.7, 805.0 64.7, 810.0 64.7 C 815.0 64.7, 815.0 65.2, 820.0 65.2 C 825.0 65.2, 825.0 65.4, 830.0 65.4 C 835.0 65.4, 835.0 66.4, 840.0 66.4 C 845.0 66.4, 845.0 66.4, 850.0 66.4 C 855.0 66.4, 855.0 66.8, 860.0 66.8 C 865.0 66.8, 865.0 65.6, 870.0 65.6 C 875.0 65.6, 875.0 63.0, 880.0 63.0 C 885.0 63.0, 885.0 59.1, 890.0 59.1 C 895.0 59.1, 895.0 44.1, 900.0 44.1 C 905.0 44.1, 905.0 65.7, 910.0 65.7 C 915.0 65.7, 915.0 72.8, 920.0 72.8 C 925.0 72.8, 925.0 75.1, 930.0 75.1 C 935.0 75.1, 935.0 76.0, 940.0 76.0 C 945.0 76.0, 945.0 76.6, 950.0 76.6 C 955.0 76.6, 955.0 76.8, 960.0 76.8 C 965.0 76.8, 965.0 76.8, 970.0 76.8 C 975.0 76.8, 975.0 76.1, 980.0 76.1 C 985.0 76.1, 985.0 76.5, 990.0 76.5 C 995.0 76.5, 995.0 80.0, 1000.0 80.0 L 1000 100 Z\"></path>";
      path2 = "<path d=\"M 0 100 L 0 80 C 5.2 80.0, 5.2 61.4, 10.4 61.4 C 15.6 61.4, 15.6 56.0, 20.8 56.0 C 26.0 56.0, 26.0 55.3, 31.3 55.3 C 36.5 55.3, 36.5 56.0, 41.7 56.0 C 46.9 56.0, 46.9 56.0, 52.1 56.0 C 57.3 56.0, 57.3 53.8, 62.5 53.8 C 67.7 53.8, 67.7 52.8, 72.9 52.8 C 78.1 52.8, 78.1 50.1, 83.3 50.1 C 88.5 50.1, 88.5 46.5, 93.8 46.5 C 99.0 46.5, 99.0 46.2, 104.2 46.2 C 109.4 46.2, 109.4 53.4, 114.6 53.4 C 119.8 53.4, 119.8 42.2, 125.0 42.2 C 130.2 42.2, 130.2 48.1, 135.4 48.1 C 140.6 48.1, 140.6 56.4, 145.8 56.4 C 151.0 56.4, 151.0 68.4, 156.3 68.4 C 161.5 68.4, 161.5 56.7, 166.7 56.7 C 171.9 56.7, 171.9 0.0, 177.1 0.0 C 182.3 0.0, 182.3 61.8, 187.5 61.8 C 192.7 61.8, 192.7 62.4, 197.9 62.4 C 203.1 62.4, 203.1 57.7, 208.3 57.7 C 213.5 57.7, 213.5 55.1, 218.8 55.1 C 224.0 55.1, 224.0 57.0, 229.2 57.0 C 234.4 57.0, 234.4 60.4, 239.6 60.4 C 244.8 60.4, 244.8 62.0, 250.0 62.0 C 255.2 62.0, 255.2 59.8, 260.4 59.8 C 265.6 59.8, 265.6 38.0, 270.8 38.0 C 276.0 38.0, 276.0 44.4, 281.3 44.4 C 286.5 44.4, 286.5 52.7, 291.7 52.7 C 296.9 52.7, 296.9 65.9, 302.1 65.9 C 307.3 65.9, 307.3 74.9, 312.5 74.9 C 317.7 74.9, 317.7 74.7, 322.9 74.7 C 328.1 74.7, 328.1 74.9, 333.3 74.9 C 338.5 74.9, 338.5 72.7, 343.8 72.7 C 349.0 72.7, 349.0 75.0, 354.2 75.0 C 359.4 75.0, 359.4 75.3, 364.6 75.3 C 369.8 75.3, 369.8 74.3, 375.0 74.3 C 380.2 74.3, 380.2 76.3, 385.4 76.3 C 390.6 76.3, 390.6 76.4, 395.8 76.4 C 401.0 76.4, 401.0 69.5, 406.3 69.5 C 411.5 69.5, 411.5 72.7, 416.7 72.7 C 421.9 72.7, 421.9 73.5, 427.1 73.5 C 432.3 73.5, 432.3 76.6, 437.5 76.6 C 442.7 76.6, 442.7 77.4, 447.9 77.4 C 453.1 77.4, 453.1 76.5, 458.3 76.5 C 463.5 76.5, 463.5 73.8, 468.8 73.8 C 474.0 73.8, 474.0 74.1, 479.2 74.1 C 484.4 74.1, 484.4 76.4, 489.6 76.4 C 494.8 76.4, 494.8 77.1, 500.0 77.1 C 505.2 77.1, 505.2 77.0, 510.4 77.0 C 515.6 77.0, 515.6 76.4, 520.8 76.4 C 526.0 76.4, 526.0 75.8, 531.3 75.8 C 536.5 75.8, 536.5 75.7, 541.7 75.7 C 546.9 75.7, 546.9 70.1, 552.1 70.1 C 557.3 70.1, 557.3 72.4, 562.5 72.4 C 567.7 72.4, 567.7 74.4, 572.9 74.4 C 578.1 74.4, 578.1 74.4, 583.3 74.4 C 588.5 74.4, 588.5 38.9, 593.8 38.9 C 599.0 38.9, 599.0 44.7, 604.2 44.7 C 609.4 44.7, 609.4 71.7, 614.6 71.7 C 619.8 71.7, 619.8 69.6, 625.0 69.6 C 630.2 69.6, 630.2 68.9, 635.4 68.9 C 640.6 68.9, 640.6 69.2, 645.8 69.2 C 651.0 69.2, 651.0 40.4, 656.3 40.4 C 661.5 40.4, 661.5 58.6, 666.7 58.6 C 671.9 58.6, 671.9 73.1, 677.1 73.1 C 682.3 73.1, 682.3 72.3, 687.5 72.3 C 692.7 72.3, 692.7 72.2, 697.9 72.2 C 703.1 72.2, 703.1 67.1, 708.3 67.1 C 713.5 67.1, 713.5 55.7, 718.8 55.7 C 724.0 55.7, 724.0 67.5, 729.2 67.5 C 734.4 67.5, 734.4 73.0, 739.6 73.0 C 744.8 73.0, 744.8 73.4, 750.0 73.4 C 755.2 73.4, 755.2 73.4, 760.4 73.4 C 765.6 73.4, 765.6 72.4, 770.8 72.4 C 776.0 72.4, 776.0 72.2, 781.3 72.2 C 786.5 72.2, 786.5 72.1, 791.7 72.1 C 796.9 72.1, 796.9 72.9, 802.1 72.9 C 807.3 72.9, 807.3 73.6, 812.5 73.6 C 817.7 73.6, 817.7 74.0, 822.9 74.0 C 828.1 74.0, 828.1 73.6, 833.3 73.6 C 838.5 73.6, 838.5 71.9, 843.8 71.9 C 849.0 71.9, 849.0 74.5, 854.2 74.5 C 859.4 74.5, 859.4 75.3, 864.6 75.3 C 869.8 75.3, 869.8 65.6, 875.0 65.6 C 880.2 65.6, 880.2 67.9, 885.4 67.9 C 890.6 67.9, 890.6 56.7, 895.8 56.7 C 901.0 56.7, 901.0 70.0, 906.3 70.0 C 911.5 70.0, 911.5 75.0, 916.7 75.0 C 921.9 75.0, 921.9 76.4, 927.1 76.4 C 932.3 76.4, 932.3 77.0, 937.5 77.0 C 942.7 77.0, 942.7 77.2, 947.9 77.2 C 953.1 77.2, 953.1 77.3, 958.3 77.3 C 963.5 77.3, 963.5 77.2, 968.8 77.2 C 974.0 77.2, 974.0 77.7, 979.2 77.7 C 984.4 77.7, 984.4 78.7, 989.6 78.7 C 994.8 78.7, 994.8 80.0, 1000.0 80.0 L 1000 100 Z\"></path>";
      path3 = "<path d=\"M 0 100 L 0 80 C 5.3 80.0, 5.3 53.9, 10.5 53.9 C 15.8 53.9, 15.8 52.4, 21.1 52.4 C 26.3 52.4, 26.3 51.8, 31.6 51.8 C 36.8 51.8, 36.8 67.0, 42.1 67.0 C 47.4 67.0, 47.4 67.1, 52.6 67.1 C 57.9 67.1, 57.9 65.4, 63.2 65.4 C 68.4 65.4, 68.4 65.5, 73.7 65.5 C 78.9 65.5, 78.9 63.7, 84.2 63.7 C 89.5 63.7, 89.5 61.4, 94.7 61.4 C 100.0 61.4, 100.0 63.5, 105.3 63.5 C 110.5 63.5, 110.5 54.3, 115.8 54.3 C 121.1 54.3, 121.1 63.9, 126.3 63.9 C 131.6 63.9, 131.6 67.1, 136.8 67.1 C 142.1 67.1, 142.1 75.2, 147.4 75.2 C 152.6 75.2, 152.6 75.5, 157.9 75.5 C 163.2 75.5, 163.2 76.8, 168.4 76.8 C 173.7 76.8, 173.7 77.2, 178.9 77.2 C 184.2 77.2, 184.2 75.1, 189.5 75.1 C 194.7 75.1, 194.7 74.1, 200.0 74.1 C 205.3 74.1, 205.3 74.3, 210.5 74.3 C 215.8 74.3, 215.8 73.9, 221.1 73.9 C 226.3 73.9, 226.3 73.4, 231.6 73.4 C 236.8 73.4, 236.8 73.8, 242.1 73.8 C 247.4 73.8, 247.4 73.1, 252.6 73.1 C 257.9 73.1, 257.9 0.0, 263.2 0.0 C 268.4 0.0, 268.4 52.0, 273.7 52.0 C 278.9 52.0, 278.9 65.7, 284.2 65.7 C 289.5 65.7, 289.5 72.7, 294.7 72.7 C 300.0 72.7, 300.0 74.0, 305.3 74.0 C 310.5 74.0, 310.5 74.3, 315.8 74.3 C 321.1 74.3, 321.1 75.3, 326.3 75.3 C 331.6 75.3, 331.6 73.4, 336.8 73.4 C 342.1 73.4, 342.1 72.5, 347.4 72.5 C 352.6 72.5, 352.6 71.3, 357.9 71.3 C 363.2 71.3, 363.2 72.3, 368.4 72.3 C 373.7 72.3, 373.7 74.0, 378.9 74.0 C 384.2 74.0, 384.2 76.2, 389.5 76.2 C 394.7 76.2, 394.7 73.1, 400.0 73.1 C 405.3 73.1, 405.3 74.3, 410.5 74.3 C 415.8 74.3, 415.8 69.7, 421.1 69.7 C 426.3 69.7, 426.3 74.4, 431.6 74.4 C 436.8 74.4, 436.8 75.8, 442.1 75.8 C 447.4 75.8, 447.4 75.2, 452.6 75.2 C 457.9 75.2, 457.9 73.3, 463.2 73.3 C 468.4 73.3, 468.4 72.9, 473.7 72.9 C 478.9 72.9, 478.9 73.9, 484.2 73.9 C 489.5 73.9, 489.5 74.6, 494.7 74.6 C 500.0 74.6, 500.0 75.4, 505.3 75.4 C 510.5 75.4, 510.5 75.5, 515.8 75.5 C 521.1 75.5, 521.1 75.4, 526.3 75.4 C 531.6 75.4, 531.6 74.8, 536.8 74.8 C 542.1 74.8, 542.1 73.7, 547.4 73.7 C 552.6 73.7, 552.6 74.9, 557.9 74.9 C 563.2 74.9, 563.2 76.4, 568.4 76.4 C 573.7 76.4, 573.7 76.5, 578.9 76.5 C 584.2 76.5, 584.2 76.5, 589.5 76.5 C 594.7 76.5, 594.7 76.9, 600.0 76.9 C 605.3 76.9, 605.3 76.9, 610.5 76.9 C 615.8 76.9, 615.8 75.6, 621.1 75.6 C 626.3 75.6, 626.3 74.6, 631.6 74.6 C 636.8 74.6, 636.8 75.1, 642.1 75.1 C 647.4 75.1, 647.4 75.3, 652.6 75.3 C 657.9 75.3, 657.9 75.6, 663.2 75.6 C 668.4 75.6, 668.4 65.0, 673.7 65.0 C 678.9 65.0, 678.9 66.4, 684.2 66.4 C 689.5 66.4, 689.5 67.3, 694.7 67.3 C 700.0 67.3, 700.0 73.5, 705.3 73.5 C 710.5 73.5, 710.5 67.0, 715.8 67.0 C 721.1 67.0, 721.1 67.9, 726.3 67.9 C 731.6 67.9, 731.6 75.2, 736.8 75.2 C 742.1 75.2, 742.1 76.9, 747.4 76.9 C 752.6 76.9, 752.6 77.6, 757.9 77.6 C 763.2 77.6, 763.2 77.2, 768.4 77.2 C 773.7 77.2, 773.7 78.0, 778.9 78.0 C 784.2 78.0, 784.2 78.4, 789.5 78.4 C 794.7 78.4, 794.7 74.9, 800.0 74.9 C 805.3 74.9, 805.3 71.9, 810.5 71.9 C 815.8 71.9, 815.8 71.3, 821.1 71.3 C 826.3 71.3, 826.3 58.6, 831.6 58.6 C 836.8 58.6, 836.8 53.3, 842.1 53.3 C 847.4 53.3, 847.4 65.1, 852.6 65.1 C 857.9 65.1, 857.9 73.3, 863.2 73.3 C 868.4 73.3, 868.4 64.6, 873.7 64.6 C 878.9 64.6, 878.9 65.6, 884.2 65.6 C 889.5 65.6, 889.5 59.4, 894.7 59.4 C 900.0 59.4, 900.0 75.5, 905.3 75.5 C 910.5 75.5, 910.5 77.6, 915.8 77.6 C 921.1 77.6, 921.1 78.3, 926.3 78.3 C 931.6 78.3, 931.6 78.5, 936.8 78.5 C 942.1 78.5, 942.1 78.7, 947.4 78.7 C 952.6 78.7, 952.6 78.6, 957.9 78.6 C 963.2 78.6, 963.2 78.8, 968.4 78.8 C 973.7 78.8, 973.7 79.0, 978.9 79.0 C 984.2 79.0, 984.2 79.4, 989.5 79.4 C 994.7 79.4, 994.7 80.0, 1000.0 80.0 L 1000 100 Z\"></path>";
      path4 = "<path d=\"M 0 100 L 0 80 C 5.4 80.0, 5.4 0.0, 10.8 0.0 C 16.1 0.0, 16.1 2.6, 21.5 2.6 C 26.9 2.6, 26.9 28.8, 32.3 28.8 C 37.6 28.8, 37.6 27.9, 43.0 27.9 C 48.4 27.9, 48.4 28.6, 53.8 28.6 C 59.1 28.6, 59.1 52.7, 64.5 52.7 C 69.9 52.7, 69.9 51.1, 75.3 51.1 C 80.6 51.1, 80.6 49.0, 86.0 49.0 C 91.4 49.0, 91.4 45.7, 96.8 45.7 C 102.2 45.7, 102.2 43.3, 107.5 43.3 C 112.9 43.3, 112.9 40.7, 118.3 40.7 C 123.7 40.7, 123.7 45.8, 129.0 45.8 C 134.4 45.8, 134.4 61.6, 139.8 61.6 C 145.2 61.6, 145.2 69.5, 150.5 69.5 C 155.9 69.5, 155.9 69.3, 161.3 69.3 C 166.7 69.3, 166.7 73.6, 172.0 73.6 C 177.4 73.6, 177.4 74.5, 182.8 74.5 C 188.2 74.5, 188.2 75.5, 193.5 75.5 C 198.9 75.5, 198.9 75.9, 204.3 75.9 C 209.7 75.9, 209.7 76.3, 215.1 76.3 C 220.4 76.3, 220.4 75.9, 225.8 75.9 C 231.2 75.9, 231.2 75.8, 236.6 75.8 C 241.9 75.8, 241.9 75.8, 247.3 75.8 C 252.7 75.8, 252.7 75.6, 258.1 75.6 C 263.4 75.6, 263.4 75.9, 268.8 75.9 C 274.2 75.9, 274.2 75.6, 279.6 75.6 C 284.9 75.6, 284.9 76.4, 290.3 76.4 C 295.7 76.4, 295.7 76.4, 301.1 76.4 C 306.5 76.4, 306.5 75.9, 311.8 75.9 C 317.2 75.9, 317.2 75.6, 322.6 75.6 C 328.0 75.6, 328.0 76.0, 333.3 76.0 C 338.7 76.0, 338.7 75.7, 344.1 75.7 C 349.5 75.7, 349.5 75.8, 354.8 75.8 C 360.2 75.8, 360.2 75.5, 365.6 75.5 C 371.0 75.5, 371.0 76.6, 376.3 76.6 C 381.7 76.6, 381.7 76.1, 387.1 76.1 C 392.5 76.1, 392.5 74.7, 397.8 74.7 C 403.2 74.7, 403.2 74.3, 408.6 74.3 C 414.0 74.3, 414.0 75.5, 419.4 75.5 C 424.7 75.5, 424.7 75.3, 430.1 75.3 C 435.5 75.3, 435.5 73.3, 440.9 73.3 C 446.2 73.3, 446.2 69.7, 451.6 69.7 C 457.0 69.7, 457.0 73.5, 462.4 73.5 C 467.7 73.5, 467.7 73.5, 473.1 73.5 C 478.5 73.5, 478.5 74.6, 483.9 74.6 C 489.2 74.6, 489.2 74.1, 494.6 74.1 C 500.0 74.1, 500.0 73.9, 505.4 73.9 C 510.8 73.9, 510.8 74.9, 516.1 74.9 C 521.5 74.9, 521.5 74.0, 526.9 74.0 C 532.3 74.0, 532.3 74.6, 537.6 74.6 C 543.0 74.6, 543.0 75.0, 548.4 75.0 C 553.8 75.0, 553.8 74.7, 559.1 74.7 C 564.5 74.7, 564.5 74.2, 569.9 74.2 C 575.3 74.2, 575.3 73.3, 580.6 73.3 C 586.0 73.3, 586.0 69.4, 591.4 69.4 C 596.8 69.4, 596.8 69.0, 602.2 69.0 C 607.5 69.0, 607.5 70.7, 612.9 70.7 C 618.3 70.7, 618.3 75.2, 623.7 75.2 C 629.0 75.2, 629.0 75.4, 634.4 75.4 C 639.8 75.4, 639.8 75.2, 645.2 75.2 C 650.5 75.2, 650.5 69.0, 655.9 69.0 C 661.3 69.0, 661.3 74.6, 666.7 74.6 C 672.0 74.6, 672.0 73.3, 677.4 73.3 C 682.8 73.3, 682.8 72.7, 688.2 72.7 C 693.5 72.7, 693.5 72.4, 698.9 72.4 C 704.3 72.4, 704.3 71.8, 709.7 71.8 C 715.1 71.8, 715.1 73.3, 720.4 73.3 C 725.8 73.3, 725.8 65.0, 731.2 65.0 C 736.6 65.0, 736.6 63.3, 741.9 63.3 C 747.3 63.3, 747.3 62.0, 752.7 62.0 C 758.1 62.0, 758.1 47.3, 763.4 47.3 C 768.8 47.3, 768.8 52.0, 774.2 52.0 C 779.6 52.0, 779.6 70.5, 784.9 70.5 C 790.3 70.5, 790.3 60.1, 795.7 60.1 C 801.1 60.1, 801.1 59.4, 806.5 59.4 C 811.8 59.4, 811.8 70.0, 817.2 70.0 C 822.6 70.0, 822.6 70.5, 828.0 70.5 C 833.3 70.5, 833.3 71.3, 838.7 71.3 C 844.1 71.3, 844.1 71.9, 849.5 71.9 C 854.8 71.9, 854.8 72.1, 860.2 72.1 C 865.6 72.1, 865.6 71.4, 871.0 71.4 C 876.3 71.4, 876.3 69.6, 881.7 69.6 C 887.1 69.6, 887.1 71.9, 892.5 71.9 C 897.8 71.9, 897.8 63.6, 903.2 63.6 C 908.6 63.6, 908.6 65.3, 914.0 65.3 C 919.4 65.3, 919.4 33.9, 924.7 33.9 C 930.1 33.9, 930.1 68.5, 935.5 68.5 C 940.9 68.5, 940.9 76.2, 946.2 76.2 C 951.6 76.2, 951.6 76.8, 957.0 76.8 C 962.4 76.8, 962.4 77.1, 967.7 77.1 C 973.1 77.1, 973.1 77.0, 978.5 77.0 C 983.9 77.0, 983.9 77.6, 989.2 77.6 C 994.6 77.6, 994.6 80.0, 1000.0 80.0 L 1000 100 Z\"></path>";
      function _0x2d948d() {
        {
          var _0x21c352 = new Array(path0, path1, path2, path3, path4),
            _0x244de8 = Math.floor(Math.random() * _0x21c352.length);
          return _0x21c352[_0x244de8];
        }
      }
      svg = "<svg viewBox=\"0 0 1000 100\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\"><defs><clipPath id=\"pbp-curve-path\" clipPathUnits=\"userSpaceOnUse\">" + _0x2d948d() + "</clipPath><clipPath id=\"pbp-played-path\" clipPathUnits=\"userSpaceOnUse\"><rect x=\"" + _0x1f2bb3 + "\" width=\"" + _0x59f8e4 + "\" y=\"0\" height=\"100%\"></rect><path d=\"\"></path></clipPath></defs><g fill-opacity=\"0.2\" clip-path=\"url(#pbp-curve-path)\" class=\"bilibili-player-videoshot-area\"><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"rgb(255,255,255)\"></rect><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"rgb(35,173,229)\" clip-path=\"url(#pbp-played-path)\"></rect></g></svg>";
      pbp_html = "<div id=\"bilibili_pbp\">" + svg + "</div>";
      $(".art-control-progress-inner").prepend(pbp_html);
    }
  },
  "thumbnails_player": function (_0x145b80, _0x168986) {
    ths = new Artplayer({
      "container": _0x145b80,
      "url": _0x168986,
      "muted": true,
      "autoSize": true,
      "contextmenu": [{
        "html": "自定义菜单",
        "click": function () {
          console.info("你点击了自定义菜单");
          art.contextmenu.show = false;
        }
      }],
      "customType": {
        "m3u8": function (_0x5344ab, _0x472e1a) {
          if (Hls.isSupported()) {
            {
              const _0x389f5d = new Hls();
              _0x389f5d.loadSource(_0x472e1a);
              _0x389f5d.attachMedia(_0x5344ab);
            }
          } else {
            {
              const _0x10da48 = _0x5344ab.canPlayType("application/vnd.apple.mpegurl");
              if (_0x10da48 === "probably" || _0x10da48 == "maybe") {
                _0x5344ab.src = _0x472e1a;
              }
            }
          }
        },
        "flv": function (_0x2f37f0, _0x26b78c) {
          if (flvjs.isSupported()) {
            const _0x1d6ee6 = flvjs.createPlayer({
              "type": "flv",
              "url": _0x26b78c
            });
            _0x1d6ee6.attachMediaElement(_0x2f37f0);
            _0x1d6ee6.load();
          }
        },
        "mpd": function (_0x5a73d7, _0x1cb899) {
          {
            shaka.polyfill.installAll();
            var _0x3dba1a = new shaka.Player(_0x5a73d7);
            _0x3dba1a.load(_0x1cb899);
          }
        },
        "torrent": function (_0x10086d, _0x497320, _0xd9fd98) {
          {
            var _0x144f0a = new WebTorrent();
            _0xd9fd98.loading.show = true;
            _0x144f0a.add(_0x497320, function (_0x2eaeb8) {
              var _0x31358e = _0x2eaeb8.files[0];
              _0x31358e.renderTo(_0x10086d, {
                "autoplay": true
              });
            });
          }
        }
      }
    });
    window.MIZHI.ths = ths;
    ths.on("ready", () => {
      $("#video_thumbnails > div > div.art-contextmenus").remove();
      $("#video_thumbnails > div > div.art-bottom,#video_thumbnails > div > div.art-mask,#video_thumbnails > div > div.art-notice,#video_thumbnails > div > div").remove();
      ths.controls.show = false;
    });
  },
  "player": function (_0xf00b72, _0x420f16) {
    MIZHI.tips();
    MIZHI.start();
    Artplayer.INDICATOR_SIZE_ICON = 24;
    var _0xf4d596 = [];
    typeof _0xf00b72.api_zyurl_domain_all === "string" && _0xf00b72.api_zyurl_domain_all.trim() !== "" && (_0xf4d596 = _0xf00b72.api_zyurl_domain_all.split("|"));
    var _0x28bfe5 = false;
    for (var _0x49c580 = 0; _0x49c580 < _0xf4d596.length; _0x49c580++) {
      {
        if (_0xf00b72.url.indexOf(_0xf4d596[_0x49c580]) !== -1 && (/\.m3u8$/.test(_0xf00b72.url) || /\.mp4$/.test(_0xf00b72.url))) {
          _0x28bfe5 = true;
          break;
        }
      }
    }
    var _0x2df85e = function (_0xef79b5) {
        !!_0xef79b5.metareferer && $("head").append("<meta name=\"referrer\" content=\"" + _0xef79b5.metareferer + "\">");
        _0xef79b5.code == 200 ? MIZHI.MZPlayer(_0xef79b5.url, _0xf00b72.title, _0xf00b72.vkey, _0xf00b72.next, _0xf00b72.img, _0xf00b72.live, _0xef79b5.xl) : MIZHI.TheError();
      },
      _0x2ca501 = function () {
        MIZHI.TheError();
      };
    _0x28bfe5 ? ($.ajaxSettings.timeout = 30000, $.post("/admin/mizhi_json.php", {
      "url": _0xf00b72.url,
      "time": _0xf00b72.time,
      "key": _0xf00b72.key,
      "vkey": _0xf00b72.vkey
    }, _0x2df85e, "json").error(_0x2ca501)) : /\.(m3u8|mp4|flv|mkv)$/.test(_0xf00b72.url) || _0xf00b72.url.indexOf("ixigua") !== -1 || _0xf00b72.live === true ? MIZHI.MZPlayer(_0xf00b72.url, _0xf00b72.title, _0xf00b72.vkey, _0xf00b72.next, _0xf00b72.img, _0xf00b72.live, MIZHI.version) : ($.ajaxSettings.timeout = 30000, $.post("/admin/mizhi_json.php", {
      "url": _0xf00b72.url,
      "time": _0xf00b72.time,
      "key": _0xf00b72.key,
      "vkey": _0xf00b72.vkey
    }, _0x2df85e, "json").error(_0x2ca501));
  },
  "video": {
    "play": function () {
      if (MIZHI.cookie.get("MZPlayer-" + up.id) >= 3) {
        ckseek = MIZHI.cookie.get("MZPlayer-" + up.id);
        sk_html = "<div class=\"art-layer art-layer-autoPlayback\" data-index=\"1\" style=\"display: flex;\"><div class=\"art-autoPlayback-close\"><i class=\"art-icon art-icon-close\">" + MIZHI.svg.close + "</i></div><div class=\"art-autoPlayback-last\">上次看到 " + MIZHI.formatTime(ckseek) + "【<span id=\"mes\">" + MIZHI.waittime + "</span>】秒后为您</div><div class=\"art-autoPlayback-jump\">跳转播放</div></div>";
        $(".art-layers").prepend(sk_html);
        var _0x16078c = Number(MIZHI.waittime),
          _0x5a2879;
        _0x5a2879 = setInterval(() => {
          $("#mes").html(_0x16078c);
          _0x16078c == 0 && (MIZHI.art.seek = ckseek - 3, clearInterval(_0x5a2879), $(".art-layer-autoPlayback").remove(), MIZHI.video.vlum());
          _0x16078c--;
        }, 1000);
        $(".art-icon-close").on("click", function () {
          clearInterval(_0x5a2879);
          MIZHI.art.play();
          $(".art-layer-autoPlayback").remove();
          MIZHI.video.vlum();
        });
        $(".art-autoPlayback-jump").on("click", function () {
          clearInterval(_0x5a2879);
          MIZHI.art.seek = ckseek - 3;
          $(".art-layer-autoPlayback").remove();
          MIZHI.video.vlum();
        });
        $(".art-layer-autoPlayback").length > 0 && (MIZHI.art.once("video:timeupdate", () => {
          clearInterval(_0x5a2879);
        }), setTimeout(() => {
          $(".art-layer-autoPlayback").remove();
        }, MIZHI.waittime * 1000));
      } else MIZHI.art.notice.show = "视频已就绪", html = "<div class=\"art-layer art-layer-autoPlayback\" data-index=\"1\" style=\"display: flex;\"><div class=\"art-autoPlayback-close\"><i class=\"art-icon art-icon-close\">" + MIZHI.svg.close + "</i></div><div class=\"art-autoPlayback-last\">视频已准备就绪，即将为您播放</div></div>", $(".art-layers").prepend(html), $(".art-icon-close").on("click", function () {
        $(".art-layer-autoPlayback").remove();
      }), setTimeout(() => {
        MIZHI.art.play();
      }, 1000), setTimeout(() => {
        MIZHI.video.vlum();
      }, 1500), setTimeout(() => {
        $(".art-layer-autoPlayback").remove();
      }, 3000);
      if (config.pmdoff === "on") {
        let _0x42a27c = $(".art-danmuku");
        _0x42a27c.after("<div class=\"marquee\"><marquee loop=\"" + config.pmdloopnum + "\" width=\"100%\" scrollamount=\"" + config.pmdspeed + "\" class=\"font\">" + config.pmdzdy + "</marquee></div>");
        document.querySelector(".marquee").style.setProperty("--top-position", config.pmdtopweizhi);
      }
    },
    "vlum": function () {
      MIZHI.art.muted = false;
      MIZHI.cookie.get("MZPlayer-Volume") >= 0.01 && (MIZHI.art.volume = MIZHI.cookie.get("MZPlayer-Volume"));
      MIZHI.cookie.get("MZPlayer-Muted") == "true" || MIZHI.cookie.get("MZPlayer-Muted") == true ? MIZHI.art.muted = true : MIZHI.art.muted = false;
    },
    "next": function (_0x4b82a4) {
      top.location.href = _0x4b82a4;
    },
    "seek": function () {
      MIZHI.art.seek = MIZHI.playtime;
    },
    "end": function (_0x3170ee) {
      MIZHI.msgend = layer.msg("播放结束啦=。=", {
        "time": false,
        "anim": 2
      });
    },
    "listOff": function () {
      $(".vodlist-of,.r-button").hide();
      $(".Mizhi-listbox").removeClass("Mizhi-stting");
    },
    "list": function () {
      if ($(".Mizhi-listbox").length < 1) {
        let _0x2c39cc = $(".art-video-player");
        _0x2c39cc.prepend("<div class=\"vodlist-of danmu-hide\" style=\"display: none;\"></div><div class=\"Mizhi-listbox\"><div class=\"anthology-wrap\"></div></div></div><div class=\"r-button\" style=\"display: none;\"><span class=\"yzmplayer-icon-content\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M448 128a106.667 106.667 0 0 1 106.667 106.667v576A106.667 106.667 0 0 1 448 917.333H128A106.667 106.667 0 0 1 21.333 810.667v-576A106.667 106.667 0 0 1 128 128h320z m448 256a106.667 106.667 0 0 1 106.667 106.667v320A106.667 106.667 0 0 1 896 917.333H661.333a42.667 42.667 0 1 1 0-85.333H896a21.333 21.333 0 0 0 21.333-21.333v-320A21.333 21.333 0 0 0 896 469.333H661.333a42.667 42.667 0 1 1 0-85.333zM448 213.333H128a21.333 21.333 0 0 0-21.333 21.334v554.666A21.333 21.333 0 0 0 128 810.667h320a21.333 21.333 0 0 0 21.333-21.334V234.667A21.333 21.333 0 0 0 448 213.333zM384 672a32 32 0 0 1 0 64H213.333a32 32 0 0 1 0-64z\"></path></svg></span></div>");
      }
      $(document).on("click", ".vodlist-of", function () {
        MIZHI.video.listOff();
      });
      $(document).on("click", "#Mizhi-tab-select", function () {
        $(".Mizhi-list").toggle();
        $(".Mizhi-list a").click(function () {
          {
            $(this).addClass("Mizhi-this").siblings().removeClass("Mizhi-this");
            let _0x596c7d = $(".Mizhi-list a").index(this),
              _0xe754ec = $(".scroll-area .Mizhi-selset-list").eq(_0x596c7d);
            _0xe754ec.addClass("Mizhi-show").siblings().removeClass("Mizhi-show");
            $(".Mizhi-list").hide();
          }
        });
      });
      if ($(".normal-title-wrap").length < 1) {
        {
          let _0x2cd97d = $(".anthology-wrap");
          $.ajax({
            "url": "/admin/api.php?ac=list&key=888&url=" + config.url + "&ids=" + config.ids,
            "type": "get",
            "dataType": "json",
            "beforeSend": function () {
              {
                let _0x463132 = "<div class=\"normal-title-wrap\"><div class=\"thesis-wrap\"><a class=\"title-link beforeSend h-2\"></a></div><div class=\"title-info beforeSend h-2\"></div></div><div class=\"scroll-area\"><a class=\"component-title beforeSend\"></a><div class=\"Mizhi-show Mizhi-selset-list anthology-content\"><a class=\"box-item album-title beforeSend\"></a><a class=\"box-item album-title beforeSend\"></a></div><a class=\"component-title beforeSend\"></a><div class=\"anthology-content\"><div class=\"pic-text-item\"><a><div class=\"cover beforeSend\"></div></a></div></div></div>";
                _0x2cd97d.html(_0x463132);
              }
            },
            "success": function (_0x335bc1) {
              {
                if (_0x335bc1.code == "200") {
                  MIZHI.part = _0x335bc1.part;
                  MIZHI.vod_pic = _0x335bc1.vod_pic;
                  MIZHI.vod_actor = _0x335bc1.vod_actor;
                  MIZHI.vod_year = _0x335bc1.vod_year;
                  MIZHI.type_name = _0x335bc1.type_name;
                  MIZHI.vod_area = _0x335bc1.vod_area;
                  MIZHI.vod_content = _0x335bc1.vod_content;
                  _0x2cd97d.html(_0x335bc1.html);
                } else _0x2cd97d.html("<div class=\"pop-msg\">查找内容失败...</div>");
              }
            },
            "error": function () {
              _0x2cd97d.html("<div class=\"pop-msg\">请求失败...</div>");
            }
          });
        }
      }
    },
    "list_top": function () {
      var _0x4043f9 = document.querySelector(".Mizhi-show > a.active");
      if (!_0x4043f9) {
        console.warn("未找到活动链接");
        return;
      }
      var _0x556a8f = _0x4043f9.offsetTop,
        _0x36ba5d = $(".scroll-area");
      _0x36ba5d.length > 0 && (_0x556a8f < 0 && (_0x556a8f = 0), _0x36ba5d.scrollTop(_0x556a8f));
    }
  },
  "pause": {
    "bg_html": function (_0xa910c2) {
      if (_0xa910c2 == "" || _0xa910c2 == undefined) {
        {
          if (MIZHI.title != null && MIZHI.title != undefined && MIZHI.title != "") _0xa910c2 = MIZHI.title + " <span class=\"screen-saver-h3\">" + MIZHI.part + "</span>";else {
            _0xa910c2 = MIZHI.web_title + MIZHI.web_title_url;
          }
        }
      }
      let _0x5580b9 = MIZHI.contenttext || "",
        _0x202e27 = MIZHI.contenttext2 || "";
      MIZHI.vod_content != undefined && (_0x5580b9 = MIZHI.vod_content.replace(/<.*?>/g, ""), _0x202e27 = "<p class=\"screen-saver-h4\">" + MIZHI.vod_year + " " + MIZHI.type_name + " " + MIZHI.vod_area + "</p>主演：" + MIZHI.vod_actor);
      if (MIZHI.yiyanhitokoto_on === "on") fetch("./admin/yiyan/?type=json").then(_0x30284a => _0x30284a.json()).then(_0x49b27b => {
        {
          let _0x4a4d7f = _0x49b27b.full,
            _0x4fb5c3 = "<div id=\"pause-html\" style=\"display: none;\">";
          if (config.pic) {}
          _0x4fb5c3 += "<div class=\"large screen-saver-box\"><span class=\"screen-saver-h1\">播放暂停中<span class=\"dots-animation\"></span></span><h2 class=\"screen-saver-h2\">" + _0xa910c2 + "</h2></br><h3 class=\"screen-saver-h1\">" + _0x202e27 + "</h3><p class=\"screen-saver-h5 hitokoto\">" + _0x5580b9 + "</p></br><p class=\"screen-saver-h5 hitokoto\">今日一言：" + _0x4a4d7f + "</p><span class=\"screen-saver-h6\">暂停中</span></div>";
          $(".art-video-player:first").prepend(_0x4fb5c3);
          $(document).mousemove(function () {
            $("#pause-html").css({
              "display": "none"
            });
          });
        }
      }).catch(_0x501ac1 => console.error("Error fetching the quote:", _0x501ac1));else {
        let _0x2fbd88 = "<div id=\"pause-html\" style=\"display: none;\">";
        config.pic && (_0x2fbd88 += "<img class=\"pic-play\" src=\"" + config.pic + "\">");
        _0x2fbd88 += "<div class=\"large screen-saver-box\"><span class=\"screen-saver-h1\">正在观看——暂停中</span><h2 class=\"screen-saver-h2\">" + _0xa910c2 + "</h2></br><h3 class=\"screen-saver-h1\">" + _0x202e27 + "</h3><p class=\"screen-saver-h5 hitokoto\">" + _0x5580b9 + "</p><span class=\"screen-saver-h6\">暂停中</span></div></div>";
        $(".art-video-player:first").prepend(_0x2fbd88);
      }
    }
  },
  "ads": {
    "pic": function () {
      up.adpic && $(".art-video-player:first").append("<div id=\"player_pause\"><a href=\"" + up.adlink + "\" target=\"_blank\"><img src=\"" + up.adpic + "\"></a></div>");
    },
    "pic_pause": function () {
      up.adpic_pause_state === "on" && $(".art-video-player:first").append("<div id=\"player_pause\"><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:MIZHI.ads.adoff('#player_pause')\" title=\"点击关闭广告\">广告 ✖</a></div><a href=\"" + up.adlink_pause + "\" target=\"_blank\"><img src=\"" + up.adpic_pause + "\"></a></div>");
    },
    "adoff": function (_0x499c91) {
      $(_0x499c91).remove();
    },
    "adplay": function (_0x375228) {
      $("body").addClass("danmu-off");
      MIZHI.adpl = new Artplayer({
        "container": "#loading",
        "autoplay": true,
        "muted": true,
        "theme": config.theme,
        "url": _0x375228,
        "poster": img,
        "setting": false
      });
      $(".MizhiPlayer-controller,.MizhiPlayer-cplayer,.MizhiPlayer-logo,#loading-box,.MizhiPlayer-controller-mask").remove();
      $(".MizhiPlayer-mask").show();
      MIZHI.adpl.on("video:timeupdate", function () {
        if (MIZHI.adpl.currentTime > MIZHI.adpl.duration - 0.1) {
          {
            $("body").removeClass("danmu-off");
            MIZHI.adpl.destroy();
            $("#ADplayer").remove();
            $("#ADtip").remove();
            MIZHI.play(config.url);
          }
        }
      });
    }
  },
  "TheError": function () {
    err_video = "";
    err_image = "";
    err_vol = "";
    MIZHI.err_bg == "video" ? (err_video = "<video poster=\"\" autoplay loop muted class=\"vidbacking\" id=\"video\"><source src=\"" + MIZHI.err_bg_vodurl + "\" type=\"video/mp4\"><p>您的浏览器不支持 video 标签，请下载或更新最新版本的浏览器。</p></video><script src=\"./js/jquery.vidbacking.min.js?v2\" type=\"text/javascript\"></script>", err_vol = "<a href=\"javascript:;\" id=\"sound-icon\">打开声音</a>") : err_image = " style=\"background: url(" + MIZHI.err_bg_imgurl + ");\"";
    err_html = "<div class=\"htmleaf-container\">" + err_video + "<div id=\"error\" class=\"video-back\"" + err_image + "><h1>【解析失败】或【URL=为空】</h1>" + (MIZHI.keywords || up.title ? MIZHI.keywords ? "<p>" + MIZHI.keywords + "</p>" : "<p>" + up.title + "</p>" : "") + "<div class=\"htmleaf-demo center\"><a href=\"javascript:location.reload()\" class=\"current\" style=\"background: " + (config.color ? config.color : "#1d7db1") + "; color: #fff;\">刷新重试</a>" + (MIZHI.errzdylink && MIZHI.errzdytext ? "<a href=\"" + MIZHI.errzdylink + "\" target=\"_blank\">" + MIZHI.errzdytext + "</a>" : "") + (up.title_url && up.title ? "<a href=\"" + up.title_url + "\" target=\"_blank\">" + up.title + "</a>" : "") + err_vol + "</div><div class=\"clearfix cr\"><span class=\"copyright\">© " + MIZHI.version + " " + MIZHI.versionnum + "</span></div></div></div>";
    $("#loading").remove();
    if (MIZHI.err_bg == "video") {
      {
        $("body").attr({
          "style": "background-color: transparent;"
        }).html(err_html);
        var _0x10a5fc = document.getElementById("video");
        if (_0x10a5fc.muted == true) $("#sound-icon").text("关闭声音"), _0x10a5fc.muted = false;else {
          $("#sound-icon").text("打开声音");
          _0x10a5fc.muted = true;
        }
      }
    } else $("body").append(err_html);
  },
  "cookie": {
    "set": function (_0x310af2, _0x23b34f, _0x301da0) {
      var _0x5b775e = new Date();
      _0x5b775e.setTime(_0x5b775e.getTime() + _0x301da0 * 24 * 60 * 60 * 1000);
      var _0x4c437e = document.cookie.match(new RegExp("(^| )" + _0x310af2 + "=([^;]*)(;|$)"));
      document.cookie = _0x310af2 + "=" + escape(_0x23b34f) + ";path=/;expires=" + _0x5b775e.toUTCString();
    },
    "get": function (_0x3865ab) {
      var _0xdf53ba = document.cookie.match(new RegExp("(^| )" + _0x3865ab + "=([^;]*)(;|$)"));
      if (_0xdf53ba != null) return unescape(_0xdf53ba[2]);
    }
  },
  "formatTime": function (_0x170760) {
    return [parseInt(_0x170760 / 60 / 60), parseInt(_0x170760 / 60 % 60), parseInt(_0x170760 % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
  },
  "formatTimes": function (_0x494b14) {
    var _0xf8ebe8 = _0x494b14.slice(-8, -6) * 3600,
      _0x265245 = _0x494b14.slice(-5, -3) * 60,
      _0x266d02 = _0x494b14.slice(-2);
    return Number(_0xf8ebe8) + Number(_0x265245) + Number(_0x266d02);
  },
  "danmu": {
    "api": function (_0x5cd98f, _0x1f0d4a, _0x412503, _0x3735e3 = true, _0x16326f) {
      var _0x51700f = $("#dm-text-input");
      _0x16326f = $("#dm-send-btn");
      _0x51700f.on("click", function () {
        _0x5cd98f = _0x51700f.value;
        MIZHI.art.plugins.artplayerPluginDanmuku.emit({
          "text": _0x5cd98f,
          "color": _0x1f0d4a,
          "border": _0x3735e3,
          "mode": _0x412503
        });
      });
    },
    "send": function () {
      var _0x312ff0 = $(".art-danmuku-send"),
        _0x4b8163 = $(".art-danmuku-input"),
        _0xc47d04 = ".MizhiPlayer-comment-setting-";
      $(_0xc47d04 + "color input").on("click", function () {
        {
          var _0x3a302f = $(this).attr("value");
          setTimeout(function () {
            _0x4b8163.css({
              "color": _0x3a302f
            });
          }, 100);
        }
      });
      $(_0xc47d04 + "type input").on("click", function () {
        {
          var _0x3cfc98 = $(this).attr("value");
          setTimeout(function () {
            _0x4b8163.attr("dmtype", _0x3cfc98);
          }, 100);
        }
      });
      $(_0xc47d04 + "font input").on("click", function () {
        {
          if (up.trysee > 0 && config.group == config.group_x) {
            {
              layer.msg("会员专属功能");
              return;
            }
          }
          var _0x250bb8 = $(this).attr("value");
          setTimeout(function () {
            _0x4b8163.attr("size", _0x250bb8);
          }, 100);
        }
      });
      _0x312ff0.on("click", function () {
        var _0xa2c5ea = MIZHI.dmemit.text != "" ? MIZHI.dmemit.text : document.getElementsByClassName("art-danmuku-input").value,
          _0x3f70ff = _0x4b8163.attr("dmtype"),
          _0x333388 = _0x4b8163.css("color"),
          _0x3e2481 = _0x4b8163.attr("size");
        if (up.trysee > 0 && config.group < config.group_x && config.group != "") {
          layer.msg("登陆后才能发弹幕yo(・ω・)");
          return;
        }
        if (_0xa2c5ea == undefined || _0xa2c5ea == "") {
          {
            layer.msg("要输入弹幕内容啊喂！");
            return;
          }
        }
        for (var _0x3f1fd5 = 0; _0x3f1fd5 < up.pbgjz.length; _0x3f1fd5++) {
          {
            if (_0xa2c5ea.search(up.pbgjz[_0x3f1fd5]) != -1) {
              layer.msg("请勿发送无意义内容，规范您的弹幕内容");
              return;
            }
          }
        }
        var _0x1cb34e = Date.parse(new Date()),
          _0x1f4f40 = MIZHI.Mizhick.get("dmsent", _0x1cb34e);
        if (_0x1cb34e - _0x1f4f40 < config.sendtime * 1000) {
          layer.msg("请勿频繁操作！发送弹幕需间隔" + config.sendtime + "秒~");
          return;
        }
        _0x4b8163.val("");
        MIZHI.Mizhick.set("dmsent", _0x1cb34e);
        MIZHI.danmu.post_add(MIZHI.dmemit.time, _0xa2c5ea, _0x333388, MIZHI.dmemit.mode, MIZHI.dmemit.border, _0x3e2481);
      });
      function _0x44be12() {
        _0x312ff0.trigger("click");
      }
      _0x4b8163.keydown(function (_0x26b023) {
        _0x26b023.keyCode == 13 && _0x44be12();
      });
    },
    "liyi": function () {
      var _0x34b8a2 = "<div class=\"dmrules\"><a target=\"_blank\" href=\"" + up.dmrule + "\">弹幕礼仪 </a></div>";
      $("div.art-danmuku-left:first").append(_0x34b8a2);
    },
    "loading": function () {
      MIZHI.danmu.send();
      let _0x1d6b33 = up.danmuku === config.bendi_danmuku ? config.bendi_dm_url_canshu : config.dm_url_canshu;
      var _0x23dad6 = up.danmuku + _0x1d6b33 + up.id,
        _0x5b3608 = [{
          "text": "欢迎使用" + config.title,
          "time": 3,
          "color": "#fff",
          "border": false,
          "mode": 1
        }];
      $.getJSON(_0x23dad6, function (_0x357472) {
        $("#danmuku-id").text(up.id);
        $("#danmuku-num").text(_0x357472.danum);
        MIZHI.dmdata = eval(_0x5b3608);
        $.each(_0x357472.danmuku, function (_0x125929, _0x16e317) {
          var _0x540121 = {
            "text": _0x16e317[4],
            "time": _0x16e317[0],
            "color": _0x16e317[2],
            "border": false,
            "mode": 0
          };
          MIZHI.dmdata.push(_0x540121);
        });
        MIZHI.art.plugins.artplayerPluginDanmuku.config({
          "danmuku": MIZHI.dmdata,
          "speed": Number(config.dm_speed),
          "opacity": 1,
          "fontSize": Number(config.dm_fontSize),
          "color": "#FFFFFF",
          "mode": 0,
          "margin": [config.dm_margin_1, config.dm_margin_2],
          "antiOverlap": true,
          "useWorker": true,
          "synchronousPlayback": true,
          "filter": function (_0x3088b3) {
            return _0x3088b3.text.length < 50;
          },
          "lockTime": Number(config.sendtime),
          "maxLength": 100,
          "minWidth": 200,
          "maxWidth": 500,
          "theme": "dark",
          "beforeEmit": function (_0x204f97) {
            return !!_0x204f97.text.trim();
          }
        });
        MIZHI.art.plugins.artplayerPluginDanmuku.load();
      });
      $(".art-video-player:first").append("<div id=\"danmu-show\" class=\"MizhiPlayer-danmu\"></div>");
    },
    "list": function () {
      $(".list-show").empty();
      $("#danmu-show").html("<div class=\"MizhiPlayer-watching\"><div class=\"danmuku-list-cl\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:MIZHI.dlcls('#danmu-show','show')\" title=\"点击关闭\">✖</a></div><span class=\"MizhiPlayer-watching-number\" title=\"播放器在线人数\">888</span>人正在观看,<span id=\"danmuku-num\">888</span>条弹幕</div><ul class=\"MizhiPlayer-list\"><li>时间</li><li>弹幕内容</li><li>发送时间</li></ul><ul class=\"list-show\"></ul>");
      $.ajax({
        "url": up.danmuku + "?ac=dm&id=" + up.id,
        "success": function (_0x13e451) {
          if (_0x13e451.code == 23) {
            var _0x59c4cf = _0x13e451.danmuku;
            var _0x4b86d8 = _0x13e451.name;
            var _0x438d27 = _0x13e451.danum;
            $("#danmuku-id").text(up.id);
            $("#danmuku-num, .danmuku-num").text(_0x438d27);
            $(_0x59c4cf).each(function (_0xedbfe2, _0x29f211) {
              var _0x2cc670 = "<d class=\"danmuku-list\" time=\"" + _0x29f211[0] + "\"><li>" + MIZHI.formatTime(_0x29f211[0]) + "</li><li title=\"" + _0x29f211[4] + "\">" + _0x29f211[4] + "</li><li title=\"用户：" + _0x29f211[3] + "  IP地址：" + _0x29f211[5] + "\">" + _0x29f211[6] + "</li><li class=\"report\" onclick=\"MIZHI.danmu.report('" + _0x29f211[5] + "','" + _0x4b86d8 + "','" + _0x29f211[4] + "','" + _0x29f211[3] + "')\">举报</li></d>";
              $(".list-show").append(_0x2cc670);
            });
          }
          $(".danmuku-list").on("dblclick", function () {
            MIZHI.art.seek = $(this).attr("time");
          });
        }
      });
      $(".MizhiPlayer-watching-number").text(up.usernum);
      $(".MizhiPlayer-info-panel-item-title-amount .MizhiPlayer-info-panel-item-title").html("违规词");
      for (var _0x4517ed = 0; _0x4517ed < up.pbgjz.length; _0x4517ed++) {
        {
          var _0x456ebc = "<e>" + up.pbgjz[_0x4517ed] + "</e>";
          $("#vod-title").append(_0x456ebc);
        }
      }
      _0xe5ca39(".MizhiPlayer-list-icon", ".MizhiPlayer-danmu", "show");
      function _0xe5ca39(_0x5ab9a0, _0x33a700, _0x1d7893, _0x335d7a) {
        $(_0x5ab9a0).click(function () {
          $(_0x33a700).toggleClass(_0x1d7893);
          _0x335d7a && $(_0x335d7a).remove();
        });
      }
    },
    "report": function (_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474) {
      layer.confirm("" + _0x49d0fb + "<!--br><br><span style=\"color:#333\">请选择需要举报的类型</span-->", {
        "anim": 1,
        "area": ["300px", "230px"],
        "shade": 0,
        "title": "举报弹幕",
        "btn": ["违法违禁", "色情低俗", "恶意刷屏", "赌博诈骗", "人身攻击", "侵犯隐私", "垃圾广告", "剧透", "引战"],
        "btn3": function (_0x10cd99, _0x12869d) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "恶意刷屏");
        },
        "btn4": function (_0x1bbed6, _0x124830) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "赌博诈骗");
        },
        "btn5": function (_0x527331, _0x33bd72) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "人身攻击");
        },
        "btn6": function (_0x222db6, _0x205516) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "侵犯隐私");
        },
        "btn7": function (_0xce4be0, _0x3c7e1d) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "垃圾广告");
        },
        "btn8": function (_0x3c1fa3, _0x4dcec0) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "剧透");
        },
        "btn9": function (_0x499122, _0x304881) {
          MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "引战");
        }
      }, function (_0x1de4c0, _0x47bbfa) {
        MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "违法违禁");
      }, function (_0x4d7d8c) {
        MIZHI.danmu.post_r(_0x3f9f5a, _0x9f647e, _0x49d0fb, _0x587474, "色情低俗");
      });
    },
    "post_r": function (_0xc4e372, _0x1c1cc0, _0x532fc5, _0x268d9c, _0x30b25e) {
      $.ajax({
        "type": "get",
        "url": up.danmuku + "?ac=report&cid=" + _0x268d9c + "&user=" + _0xc4e372 + "&type=" + _0x30b25e + "&title=" + _0x1c1cc0 + "&text=" + _0x532fc5,
        "cache": false,
        "dataType": "json",
        "beforeSend": function () {},
        "success": function (_0x4aded0) {
          layer.msg("举报成功！感谢您为守护弹幕作出了贡献");
        },
        "error": function (_0x14f7f4) {
          {
            var _0x1b8c1d = "服务故障 or 网络异常，稍后再试！";
            layer.msg(_0x1b8c1d);
          }
        }
      });
    },
    "post_add": function (_0x1136b9, _0xbd7e8b, _0x2a5d51, _0x3f0ab9, _0x343246) {
      _0x3f0ab9 == "0" ? type = "right" : type = "top";
      var _0x50fdf9 = {
        "player": up.id,
        "time": _0x1136b9,
        "text": _0xbd7e8b,
        "color": _0x2a5d51,
        "type": type,
        "size": "27.5px",
        "referer": window.location.href
      };
      $.ajax({
        "url": up.danmuku + "?ac=dm",
        "data": JSON.stringify(_0x50fdf9),
        "method": "post",
        "dataType": "json",
        "contentType": "application/json",
        "success": function (_0x3f17ac) {
          {
            if (_0x3f17ac.code == 23) {
              window.token = _0x3f17ac.danmuku;
              layer.tips("发送成功", ".art-danmuku-send", {
                "tips": [1, "#ff0000d5"]
              });
            } else layer.msg("发送失败:" + _0x3f17ac, {
              "offset": "b"
            });
          }
        }
      });
    }
  },
  "dlcls": function (_0xa4af7e, _0x4993c2) {
    $(_0xa4af7e).removeClass(_0x4993c2);
  },
  "kuaijie": function () {
    var _0x1933d6 = "<div id=\"kuaijie\" class=\"layui-layer-content\"><div style=\"margin:auto 25px auto 25px\"><div style=\"float:left\">Space(空格)</div><div style=\"float:right;color:#999\">播放/暂停</div><br><div style=\"float:left\">→</div><div style=\"float:right;color:#999\">快进5秒</div><br><div style=\"float:left\">←</div><div style=\"float:right;color:#999\">快退5秒</div><br><div style=\"float:left\">↑</div><div style=\"float:right;color:#999\">音量增加10%</div><br><div style=\"float:left\">↓</div><div style=\"float:right;color:#999\">音量降低10%</div><br><div style=\"float:left\">Esc</div><div style=\"float:right;color:#999\">退出全屏</div><br><div style=\"float:left\">F</div><div style=\"float:right;color:#999\">全屏/退出全屏</div><br><div style=\"float:left\">[</div><div style=\"float:right;color:#999\">上一集（已播放过）</div><br><div style=\"float:left\">]</div><div style=\"float:right;color:#999\">下一集</div><br><div style=\"float:left\">Enter</div><div style=\"float:right;color:#999\">发弹幕</div><br><div style=\"float:left\">右滑</div><div style=\"float:right;color:#999\">快进（手机）</div><br><div style=\"float:left\">左滑</div><div style=\"float:right;color:#999\">快退（手机）</div><br><div style=\"float:left\">上滑</div><div style=\"float:right;color:#999\">取消（快进快退中）</div></div></div>";
    layer.open({
      "id": "kuaijie",
      "zIndex": 200,
      "shade": 0,
      "title": "快捷键说明",
      "content": _0x1933d6,
      "success": function (_0x20f64e) {
        $(".art-video-player:first").append(_0x20f64e);
      }
    });
  },
  "tiaose": function () {
    var _0xe02e84 = "<div id=\"tiaose\" class=\"layui-layer-content\"><div id=\"MizhiPlayer-tiao\"><div id=\"slidebhd-txt\" style=\"float:left\">饱和度：100</div><div id=\"slidebhd\" class=\"MizhiPlayer-slider\"></div><br><div id=\"slidemld-txt\" style=\"float:left\">明亮度：100</div><div id=\"slidemld\" class=\"MizhiPlayer-slider\"></div><br><div id=\"slidedbd-txt\" style=\"float:left\">对比度：100</div><div id=\"slidedbd\" class=\"MizhiPlayer-slider\"></div></div></div>";
    MIZHI.saturate == undefined && (window.MIZHI.saturate = 100, window.MIZHI.brightness = 100, window.MIZHI.contrast = 100);
    layer.tab({
      "area": ["340px", "210px"],
      "zIndex": 200,
      "shade": 0,
      "id": "tab_tiao",
      "tab": [{
        "title": "视频调色板",
        "content": _0xe02e84
      }],
      "success": function (_0x239b0c) {
        $(".art-video-player:first").append(_0x239b0c);
        $("#slidebhd-txt").html("饱和度：" + MIZHI.saturate);
        $("#slidemld-txt").html("明亮度：" + MIZHI.brightness);
        $("#slidedbd-txt").html("对比度：" + MIZHI.contrast);
      },
      "btn": ["重 置"],
      "yes": function (_0x1cd161, _0x1f8145) {
        $("video").attr("style", "filter: saturate(1) brightness(1) contrast(1);");
        MIZHI.slidebhd.setValue(100);
        MIZHI.slidemld.setValue(100);
        MIZHI.slidedbd.setValue(100);
      }
    });
    layui.use("slider", function () {
      {
        var _0x92f419 = layui.$,
          _0x1e629c = layui.slider;
        MIZHI.slidebhd = _0x1e629c.render({
          "elem": "#slidebhd",
          "min": 0,
          "max": 255,
          "value": MIZHI.saturate,
          "change": function (_0x1345ff) {
            _0x92f419("#slidebhd-txt").html("饱和度：" + _0x1345ff);
            MIZHI.saturate = _0x1345ff;
            _0x92f419("video").attr("style", "filter: saturate(" + MIZHI.saturate / 100 + ") brightness(" + MIZHI.brightness / 100 + ") contrast(" + MIZHI.contrast / 100 + ");");
          }
        });
        MIZHI.slidemld = _0x1e629c.render({
          "elem": "#slidemld",
          "min": 0,
          "max": 255,
          "value": MIZHI.brightness,
          "change": function (_0x4af3b4) {
            _0x92f419("#slidemld-txt").html("明亮度：" + _0x4af3b4);
            MIZHI.brightness = _0x4af3b4;
            _0x92f419("video").attr("style", "filter: saturate(" + MIZHI.saturate / 100 + ") brightness(" + MIZHI.brightness / 100 + ") contrast(" + MIZHI.contrast / 100 + ");");
          }
        });
        MIZHI.slidedbd = _0x1e629c.render({
          "elem": "#slidedbd",
          "min": 0,
          "max": 255,
          "value": MIZHI.contrast,
          "change": function (_0x40e297) {
            _0x92f419("#slidedbd-txt").html("对比度：" + _0x40e297);
            MIZHI.contrast = _0x40e297;
            _0x92f419("video").attr("style", "filter: saturate(" + MIZHI.saturate / 100 + ") brightness(" + MIZHI.brightness / 100 + ") contrast(" + MIZHI.contrast / 100 + ");");
          }
        });
      }
    });
  },
  "showtime": function (_0xe1845e) {
    if (config.show_time == "on") {
      var _0x455373 = document.getElementById(_0xe1845e);
      setInterval(function () {
        {
          var _0x4287cb = new Date(),
            _0x22853a = _0x2ca3a7(_0x4287cb.getHours()) + ":" + _0x2ca3a7(_0x4287cb.getMinutes()) + ":" + _0x2ca3a7(_0x4287cb.getSeconds());
          _0x455373.innerHTML = _0x22853a;
        }
      }, 1000);
      function _0x2ca3a7(_0x1d0144) {
        return _0x1d0144 < 10 ? "0" + _0x1d0144 : _0x1d0144;
      }
    }
  },
  "hotkey": function (_0x380420) {
    MIZHI.art.hotkey.add(70, () => {
      MIZHI.art.fullscreen ? MIZHI.art.fullscreen = false : MIZHI.art.fullscreen = true;
    });
    MIZHI.art.hotkey.add(219, () => {
      window.history.back();
    });
    MIZHI.art.hotkey.add(221, () => {
      _0x380420 ? top.location.href = _0x380420 : MIZHI.art.notice.show = "没有下一集啦";
    });
    MIZHI.art.hotkey.add(13, () => {});
  },
  "MZPlayer": function (_0x259fc0, _0x47d9fc, _0x25a3c9, _0x2565ca, _0x39af2c, _0x936676, _0x1c543a) {
    window.MIZHI.player_url = _0x259fc0;
    var _0x1e246a = new Artplayer({
      "container": "#loading",
      "url": _0x259fc0,
      "poster": _0x39af2c,
      "title": _0x47d9fc,
      "isLive": _0x936676,
      "airplay": true,
      "backdrop": true,
      "volume": 0.8,
      "theme": config.theme,
      "muted": false,
      "autoplay": true,
      "autoMini": true,
      "screenshot": true,
      "setting": true,
      "fullscreen": true,
      "miniProgressBar": true,
      "hotkey": true,
      "flip": true,
      "pip": true,
      "playbackRate": true,
      "aspectRatio": true,
      "lock": true,
      "playsInline": true,
      "fastForward": true,
      "lang": "zh-cn",
      "autoOrientation": true,
      "whitelist": config.whitelist,
      "thumbnails": {
        "url": config.thumbnailsurl,
        "number": config.thumbnailsnumber,
        "column": config.thumbnailscolumn
      },
      "moreVideoAttr": {
        "crossOrigin": "anonymous"
      },
      "icons": {
        "state": MIZHI.svg.state,
        "indicator": MIZHI.svg.indicator
      },
      "settings": [{
        "html": "画面旋转",
        "tooltip": "默认",
        "icon": MIZHI.svg.along,
        "selector": [{
          "html": "默认"
        }, {
          "html": "顺时针90°"
        }, {
          "html": "顺时针180°"
        }, {
          "html": "逆时针90°"
        }],
        "onSelect": function (_0x4f0834, _0x548ebb, _0x7c21ac) {
          {
            switch (_0x4f0834.html) {
              case "顺时针90°":
                $(".art-video").removeClass("along90 inverse90 along180 along").addClass("along90");
                break;
              case "顺时针180°":
                $(".art-video").removeClass("along90 inverse90 along180 along").addClass("along180");
                break;
              case "逆时针90°":
                $(".art-video").removeClass("along90 inverse90 along180 along").addClass("inverse90");
                break;
              default:
                $(".art-video").removeClass("along90 inverse90 along180 along").addClass("along");
                break;
            }
            return _0x4f0834.html;
          }
        }
      }, {
        "html": "画中画模式",
        "tooltip": "关闭",
        "icon": MIZHI.svg.state,
        "switch": false,
        "onSwitch": function (_0x1900d2, _0x16bb87, _0x2a046d) {
          const _0x25952e = !_0x1900d2.switch;
          _0x1e246a.pip = _0x25952e;
          _0x16bb87.tooltip = _0x25952e ? "开启" : "关闭";
          return _0x25952e;
        }
      }, {
        "html": "循环播放",
        "tooltip": "关闭",
        "icon": MIZHI.svg.loop,
        "switch": false,
        "onSwitch": function (_0x2ff58d, _0x1b6161, _0x2ce00a) {
          const _0x4e12a6 = !_0x2ff58d.switch;
          _0x1e246a.option.loop = _0x4e12a6;
          _0x1e246a.loop = _0x4e12a6 ? [0, _0x1e246a.duration] : [];
          _0x2ff58d.tooltip = _0x4e12a6 ? "开启" : "关闭";
          return _0x4e12a6;
        }
      }],
      "layers": [{
        "name": "logo",
        "html": "<img class=\"logo-play\" src=\"" + config.logo + "\">",
        "click": function () {}
      }, {
        "name": "videopic",
        "html": "",
        "style": {
          "display": "none"
        },
        "click": function () {}
      }, {
        "name": "show_time",
        "html": "<div id=\"showtime\"></div>"
      }],
      "plugins": [artplayerPluginDanmuku({
        "danmuku": [],
        "maxWidth": 500
      })],
      "customType": {
        "m3u8": function (_0x5a977e, _0x578d62) {
          {
            if (Hls.isSupported()) {
              const _0xe7126a = new Hls();
              _0xe7126a.loadSource(_0x578d62);
              _0xe7126a.attachMedia(_0x5a977e);
            } else {
              {
                const _0x236a97 = _0x5a977e.canPlayType("application/vnd.apple.mpegurl");
                if (_0x236a97 === "probably" || _0x236a97 == "maybe") {
                  _0x5a977e.src = _0x578d62;
                } else _0x1e246a.notice.show = "不支持播放格式：m3u8";
              }
            }
          }
        },
        "flv": function (_0x1e5997, _0x4da13d) {
          if (flvjs.isSupported()) {
            const _0x3c28fb = flvjs.createPlayer({
              "type": "flv",
              "url": _0x4da13d
            });
            _0x3c28fb.attachMediaElement(_0x1e5997);
            _0x3c28fb.load();
          } else _0x1e246a.notice.show = "不支持播放格式：flv";
        },
        "mpd": function (_0x39fddc, _0x549b2c) {
          {
            shaka.polyfill.installAll();
            var _0x273b1f = new shaka.Player(_0x39fddc);
            _0x273b1f.load(_0x549b2c);
          }
        },
        "torrent": function (_0x2ee4e8, _0x206005, _0x9fe307) {
          var _0x44b8c6 = new WebTorrent();
          _0x9fe307.loading.show = true;
          _0x44b8c6.add(_0x206005, function (_0x2a4001) {
            var _0x5a5ee1 = _0x2a4001.files[0];
            _0x5a5ee1.renderTo(_0x2ee4e8, {
              "autoplay": true
            });
          });
        }
      },
      "contextmenu": [{
        "html": config.right_text,
        "click": function (_0x595015) {
          window.open(config.right_link);
        }
      }]
    });
    window.MIZHI.art = _0x1e246a;
    window.MIZHI.JsonXl = _0x1c543a;
    !!config.contextmenu && _0x1e246a.contextmenu.add({
      "name": "contextmenu1",
      "html": config.contextmenu,
      "click": function (_0x1ae22c) {
        window.open(config.contextlink);
      }
    });
    _0x1e246a.contextmenu.add({
      "name": "tiaose",
      "html": "视频色彩调节",
      "index": 31,
      "click": function (_0x4e834f) {
        _0x1e246a.contextmenu.show = false;
        MIZHI.tiaose();
      }
    });
    _0x1e246a.contextmenu.add({
      "name": "kuaijie",
      "html": "快捷键说明",
      "index": 32,
      "click": function (_0x241edc) {
        _0x1e246a.contextmenu.show = false;
        MIZHI.kuaijie();
      }
    });
    _0x1e246a.on("ready", () => {
      MIZHI.video.list();
      MIZHI.video.play();
      _0x1e246a.playing == false && (_0x1e246a.layers.videopic.style.display = "block", MIZHI.pause.bg_html(_0x47d9fc));
      MIZHI.modify();
      MIZHI.hotkey(_0x2565ca);
      MIZHI.showtime("showtime");
      _0x1e246a.muted = false;
      !!up.danmuku && MIZHI.danmu.loading();
      MIZHI.danmu.send();
      !!config.tsmsg && layer.msg(config.tsmsg, {
        "time": config.tstime,
        "anim": 2,
        "skin": "tsmsg"
      });
    });
    _0x1e246a.on("video:playing", () => {
      layer.close(MIZHI.msgend);
      ($("#player_pause").length > 0 || $("#pause-html").length > 0) && (MIZHI.ads.adoff("#player_pause,#pause-html"), _0x1e246a.layers.videopic.style.display = "none");
    });
    var _0x1fe325 = 0;
    _0x1e246a.on("video:timeupdate", () => {
      {
        layer.close(MIZHI.msgend);
        MIZHI.cookie.set("MZPlayer-" + up.id, _0x1e246a.currentTime, 7);
        ending = _0x1e246a.duration - _0x1e246a.currentTime;
        if (ending < 6 && _0x1fe325 == 0) {
          {
            _0x1fe325 = 1;
            if (_0x1e246a.option.loop) layer.msg("视频即将播放结束，5秒后将为你循环播放！", {
              "time": 5000,
              "anim": 2,
              "offset": ["88%", "10px"]
            });else _0x2565ca && _0x259fc0 && layer.msg("视频即将播放结束，5秒后将自动为您播放下一集！", {
              "time": 5000,
              "anim": 2,
              "offset": ["88%", "10px"]
            });
          }
        }
      }
    });
    _0x1e246a.on("video:volumechange", () => {
      MIZHI.cookie.set("MZPlayer-Volume", _0x1e246a.volume, 0.75);
      MIZHI.cookie.set("MZPlayer-Muted", _0x1e246a.muted, 0.7);
    });
    _0x1e246a.on("video:ended", () => {
      window.MIZHI.msgend;
      MIZHI.video.end();
      _0x2565ca && !!_0x1e246a.loop ? (_0x1e246a.notice.show = "将自动为您播放下一集", _0x1e246a.title = _0x47d9fc + " 播放结束", top.location.href = _0x2565ca) : MIZHI.ads.pic_pause();
    });
    _0x1e246a.on("play", () => {
      {
        _0x1fe325 = 0;
        layer.close(MIZHI.msgend);
        MIZHI.ads.adoff("#player_pause,#pause-html");
        _0x1e246a.layers.videopic.style.display = "none";
        MIZHI.video.vlum();
      }
    });
    _0x1e246a.on("pause", () => {
      _0x1e246a.layers.videopic.style.display = "block";
      MIZHI.ads.pic_pause();
      MIZHI.pause.bg_html(_0x47d9fc);
    });
    _0x1e246a.on("artplayerPluginDanmuku:emit", _0x1d8474 => {
      window.MIZHI.dmemit = _0x1d8474;
      MIZHI.danmu.send();
    });
    !!_0x2565ca && _0x1e246a.controls.add({
      "name": "nextMedia",
      "position": "left",
      "html": MIZHI.svg.nextMedia,
      "tooltip": "下一集",
      "index": 11,
      "oftenShow": true,
      "click": function (_0x4c6b78) {
        top.location.href = _0x2565ca;
      }
    });
    MIZHI.xuanji && MIZHI.xuanji.length > 0 && _0x1e246a.controls.add({
      "name": "apilist",
      "position": "left",
      "html": MIZHI.svg.vodlist,
      "tooltip": "选集",
      "index": 40,
      "oftenShow": true,
      "click": function (_0x1118ab) {
        var _0x5a5818 = $(".Mizhi-listbox");
        _0x5a5818.length > 0 ? ($(".vodlist-of, .r-button").toggle(), $(".Mizhi-stting").length > 0 ? _0x5a5818.removeClass("Mizhi-stting") : (_0x5a5818.addClass("Mizhi-stting"), MIZHI.video.list_top())) : (MIZHI.video.list(), _0x5a5818.addClass("Mizhi-stting"), MIZHI.video.list_top());
      }
    });
    !!up.danmuku && MIZHI.danmu.liyi() || config.dm_list_on === "on" && _0x1e246a.controls.add({
      "name": "dmlist",
      "position": "right",
      "html": MIZHI.svg.dmlist,
      "tooltip": "弹幕列表",
      "oftenShow": true,
      "click": function (_0x84be21) {
        MIZHI.danmu.list();
        $("#danmu-show").hasClass("show") ? $("#danmu-show").removeClass("show") : $("#danmu-show").addClass("show");
      }
    });
    _0x1e246a.controls.add({
      "name": "tiaose",
      "position": "right",
      "html": MIZHI.svg.tiaose,
      "tooltip": "视频色彩调节",
      "oftenShow": true,
      "click": function (_0x210612) {
        $(".layui-layer-tab").length > 0 ? $(".layui-layer-tab").remove() : MIZHI.tiaose();
      }
    });
    config.beisu == "on" && !!_0x1e246a && _0x1e246a.controls.add({
      "name": "playbackSpeed",
      "position": "right",
      "html": "倍速",
      "selector": [{
        "name": "0.5x",
        "html": "0.5x",
        "value": 0.5
      }, {
        "name": "0.75x",
        "html": "0.75x",
        "value": 0.75
      }, {
        "name": "1.0x",
        "html": "正常",
        "value": 1,
        "default": true
      }, {
        "name": "1.25x",
        "html": "1.25x",
        "value": 1.25
      }, {
        "name": "1.5x",
        "html": "1.5x",
        "value": 1.5
      }, {
        "name": "2.0x",
        "html": "2.0x",
        "value": 2
      }],
      "onSelect": function (_0x4b5aaf) {
        if (_0x4b5aaf && _0x4b5aaf.value) return _0x1e246a.playbackRate = _0x4b5aaf.value, _0x4b5aaf.name;
      },
      "onInit": function (_0x16b0af) {
        {
          const _0x4399cb = _0x1e246a.playbackRate,
            _0x41c74 = this.selector.find(_0x55fa59 => _0x55fa59.value === _0x4399cb);
          if (_0x41c74) {
            {
              const _0x55268b = _0x16b0af.querySelector(".art-selector-value");
              _0x55268b && (_0x55268b.textContent = _0x41c74.name);
            }
          }
        }
      }
    });
    console.log("%c%c感谢您使用：" + window.MIZHI.version + "", "line-height:28px;", "line-height:28px;padding:4px;background:#222;color:#FADFA3;font-size:14px;");
    console.log("%c%c您当前版本：" + window.MIZHI.versionkey + "-" + window.MIZHI.versionnum + "%c", "line-height:28px;", "line-height:28px;padding:4px;background:#222;color:#FADFA3;font-size:14px;", "padding:6px 6px 6px 2px;background:#FADFA3;color:#0093fff;line-height:28px;font-size:12px;");
    console.log("%c%c此播��器唯一更新来源：觅知博客%cwww.98dou.cn", "line-height:28px;", "line-height:28px;padding:4px;background:#222;color:#FADFA3;font-size:14px;", "padding:4px;background:#FADFA3;color:#000;line-height:28px;font-size:14px;");
    console.log("%c%c永久更新下载地址：%chttps://www.98dou.cn/4973.html", "line-height:28px;", "line-height:28px;padding:4px;background:#222;color:#FADFA3;font-size:14px;", "padding:6px 6px 6px 2px;background:#FADFA3;color:#0093fff;line-height:28px;font-size:12px;");
    console.log("%c By:MizhiPlayer %c QQ:2319281411", "color:#030307;font-size:14px;line-height:32px;", "color:#ff1500;font-size:14px");
    console.log("%c MizhiPlayer觅知弹幕ART播放器 %c 加载耗费时间:" + Math.round(performance.now() * 100) / 100 + "毫秒 " + (performance.now() / 1000).toFixed(2) + "秒", "color:#030307;font-size:14px;line-height:32px;", "color:#ff1500;font-size:14px");
  },
  "Mizhick": {
    "set": function (_0x5db181, _0x1e3e29) {
      window.sessionStorage.setItem(_0x5db181, _0x1e3e29);
    },
    "get": function (_0x42ed52) {
      return window.sessionStorage.getItem(_0x42ed52);
    },
    "del": function (_0x5b5ee4) {
      window.sessionStorage.removeItem(_0x5b5ee4);
    },
    "clear": function (_0x29a441) {
      window.sessionStorage.clear();
    }
  },
  "instagramFilters": [{
    "html": "1977",
    "class": "filter-1977"
  }, {
    "html": "Aden",
    "class": "filter-aden"
  }, {
    "html": "Amaro",
    "class": "filter-amaro"
  }, {
    "html": "Ashby",
    "class": "filter-ashby"
  }, {
    "html": "Brannan",
    "class": "filter-brannan"
  }, {
    "html": "Brooklyn",
    "class": "filter-brooklyn"
  }, {
    "html": "Charmes",
    "class": "filter-charmes"
  }, {
    "html": "Clarendon",
    "class": "filter-clarendon"
  }, {
    "html": "Crema",
    "class": "filter-crema"
  }, {
    "html": "Dogpatch",
    "class": "filter-dogpatch"
  }, {
    "html": "Earlybird",
    "class": "filter-earlybird"
  }, {
    "html": "Gingham",
    "class": "filter-gingham"
  }, {
    "html": "Ginza",
    "class": "filter-ginza"
  }, {
    "html": "Hefe",
    "class": "filter-hefe"
  }, {
    "html": "Helena",
    "class": "filter-helena"
  }, {
    "html": "Hudson",
    "class": "filter-hudson"
  }, {
    "html": "Inkwell",
    "class": "filter-inkwell"
  }, {
    "html": "Kelvin",
    "class": "filter-kelvin"
  }, {
    "html": "Kuno",
    "class": "filter-juno"
  }, {
    "html": "Lark",
    "class": "filter-lark"
  }, {
    "html": "Lo-Fi",
    "class": "filter-lofi"
  }, {
    "html": "Ludwig",
    "class": "filter-ludwig"
  }, {
    "html": "Maven",
    "class": "filter-maven"
  }, {
    "html": "Mayfair",
    "class": "filter-mayfair"
  }, {
    "html": "Moon",
    "class": "filter-moon"
  }, {
    "html": "Nashville",
    "class": "filter-nashville"
  }, {
    "html": "Perpetua",
    "class": "filter-perpetua"
  }, {
    "html": "Poprocket",
    "class": "filter-poprocket"
  }, {
    "html": "Reyes",
    "class": "filter-reyes"
  }, {
    "html": "Rise",
    "class": "filter-rise"
  }, {
    "html": "Sierra",
    "class": "filter-sierra"
  }, {
    "html": "Skyline",
    "class": "filter-skyline"
  }, {
    "html": "Slumber",
    "class": "filter-slumber"
  }, {
    "html": "Stinson",
    "class": "filter-stinson"
  }, {
    "html": "Sutro",
    "class": "filter-sutro"
  }, {
    "html": "Toaster",
    "class": "filter-toaster"
  }, {
    "html": "Valencia",
    "class": "filter-valencia"
  }, {
    "html": "Vesper",
    "class": "filter-vesper"
  }, {
    "html": "Walden",
    "class": "filter-walden"
  }, {
    "html": "Willow",
    "class": "filter-willow"
  }, {
    "html": "X-Pro",
    "class": "filter-xpro-ii"
  }, {
    "html": "切换滤镜"
  }],
  "svg": {
    "zhimu": "<svg t=\"1655182023683\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3786\" width=\"22\" height=\"22\"><path d=\"M803.6 150.498H220.4c-65.286 0-118.4 53.114-118.4 118.4v486.203c0 65.286 53.114 118.4 118.4 118.4h583.2c65.286 0 118.4-53.114 118.4-118.4V268.898c0-65.286-53.114-118.4-118.4-118.4zM862 755.102c0 32.202-26.198 58.4-58.4 58.4H220.4c-32.202 0-58.4-26.198-58.4-58.4V268.898c0-32.202 26.198-58.4 58.4-58.4h583.2c32.202 0 58.4 26.198 58.4 58.4v486.204z\" p-id=\"3787\" fill=\"#ffffff\"></path><path d=\"M691.841 322.542H332.159c-16.568 0-30 13.432-30 30s13.432 30 30 30H482v288.917c0 16.568 13.432 30 30 30 16.569 0 30-13.432 30-30V382.542h149.841c16.568 0 30-13.432 30-30s-13.432-30-30-30z\" p-id=\"3788\" fill=\"#ffffff\"></path></svg>",
    "dmlist": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\" version=\"1.1\" viewBox=\"0 0 32 32\"><path class=\"MizhiPlayer-fill\" style=\"fill:#ffffff\" d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\" id=\"MizhiPlayer-full-in\"></path></svg>",
    "nextMedia": "<svg t=\"1655214655785\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"22372\" width=\"14\" height=\"14\"><path d=\"M0 1024l725.333333-512L0 0v1024zM853.333333 0v1024h170.666667V0h-170.666667z\" p-id=\"22373\" fill=\"#ffffff\"></path></svg>",
    "tiaose": "<svg t=\"1655181737737\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3438\" width=\"20\" height=\"20\"><path d=\"M799.695238 151.161905c-19.504762-58.514286-73.142857-97.52381-136.533333-97.52381s-117.028571 39.009524-136.533334 97.52381H58.514286v97.523809h468.114285c19.504762 58.514286 73.142857 97.52381 136.533334 97.52381s117.028571-39.009524 136.533333-97.52381h170.666667v-97.523809h-170.666667z m-141.409524 97.523809c-29.257143 0-48.761905-19.504762-48.761904-48.761904s19.504762-48.761905 48.761904-48.761905 48.761905 19.504762 48.761905 48.761905-19.504762 48.761905-48.761905 48.761904zM658.285714 677.790476c-63.390476 0-117.028571 39.009524-136.533333 97.52381H58.514286v97.523809h468.114285c19.504762 58.514286 73.142857 97.52381 136.533334 97.52381s117.028571-39.009524 136.533333-97.52381h170.666667v-97.523809h-170.666667c-24.380952-58.514286-78.019048-97.52381-141.409524-97.52381z m0 195.047619c-29.257143 0-48.761905-19.504762-48.761904-48.761905s19.504762-48.761905 48.761904-48.761904 48.761905 19.504762 48.761905 48.761904-19.504762 48.761905-48.761905 48.761905zM365.714286 365.714286c-63.390476 0-117.028571 39.009524-136.533334 97.523809H58.514286v97.52381h170.666666c19.504762 58.514286 73.142857 97.52381 136.533334 97.523809s117.028571-39.009524 136.533333-97.523809h468.114286v-97.52381h-468.114286c-19.504762-58.514286-73.142857-97.52381-136.533333-97.523809z m0 195.047619c-29.257143 0-48.761905-19.504762-48.761905-48.761905s19.504762-48.761905 48.761905-48.761905 48.761905 19.504762 48.761904 48.761905-24.380952 48.761905-48.761904 48.761905z\" p-id=\"3439\" fill=\"#ffffff\"></path></svg>",
    "indicator": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" width=\"22\" height=\"22\"><path d=\"M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z\" fill=\"#333\"></path><path d=\"M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z\" fill=\"#fff\"></path><path d=\"M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z\" fill=\"#333\"></path></svg>",
    "state": "<svg viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"68\" heigth=\"68\"><defs><path id=\"pid-64-svgo-a\" d=\"M0 0h80v80H0z\"></path><path d=\"M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z\" id=\"pid-64-svgo-d\"></path><filter x=\"-15.4%\" y=\"-16.3%\" width=\"130.9%\" height=\"132.5%\" filterUnits=\"objectBoundingBox\" id=\"pid-64-svgo-c\"><feOffset dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset><feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix><feOffset in=\"SourceAlpha\" result=\"shadowOffsetOuter2\"></feOffset><feGaussianBlur stdDeviation=\"3.5\" in=\"shadowOffsetOuter2\" result=\"shadowBlurOuter2\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\" in=\"shadowBlurOuter2\" result=\"shadowMatrixOuter2\"></feColorMatrix><feMerge><feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode><feMergeNode in=\"shadowMatrixOuter2\"></feMergeNode></feMerge></filter></defs><g fill=\"none\" fill-rule=\"evenodd\" opacity=\".8\"><mask id=\"pid-64-svgo-b\" fill=\"#fff\"><use xlink:href=\"#pid-64-svgo-a\"></use></mask><g mask=\"url(#pid-64-svgo-b)\"><use fill=\"#000\" filter=\"url(#pid-64-svgo-c)\" xlink:href=\"#pid-64-svgo-d\"></use><use fill=\"#FFF\" xlink:href=\"#pid-64-svgo-d\"></use></g></g></svg>",
    "instagramFilters": "<svg t=\"1655232295871\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"23019\" width=\"24\" height=\"24\"><path d=\"M258.896999 822.251751a213.333333 213.333333 0 1 0 213.333333-369.504172 213.333333 213.333333 0 1 0-213.333333 369.504172Z\" fill=\"#93A8FF\" p-id=\"23020\"></path><path d=\"M402.665751 573.672072a213.333333 213.333333 0 1 0 213.333333-369.504172 213.333333 213.333333 0 1 0-213.333333 369.504172Z\" fill=\"#2953FF\" p-id=\"23021\"></path><path d=\"M550.038865 824.467915a213.333333 213.333333 0 1 0 213.333333-369.504172 213.333333 213.333333 0 1 0-213.333333 369.504172Z\" fill=\"#FCCA1E\" p-id=\"23022\"></path></svg>",
    "loop": "<svg t=\"1655233968222\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"26640\" width=\"20\" height=\"20\"><path d=\"M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z\" p-id=\"26641\" fill=\"#ffffff\"></path><path d=\"M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z\" p-id=\"26642\" fill=\"#ffffff\"></path></svg>",
    "hd": "<svg t=\"1655235496395\" class=\"icon\" viewBox=\"0 0 1251 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"27276\" width=\"19\" height=\"19\"><path d=\"M1080.888889 0a170.666667 170.666667 0 0 1 170.666667 170.666667v682.666666a170.666667 170.666667 0 0 1-170.666667 170.666667H170.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V170.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h910.222222z m1.592889 113.777778H170.666667a56.888889 56.888889 0 0 0-56.888889 55.296V853.333333a56.888889 56.888889 0 0 0 55.296 56.888889H1080.888889a56.888889 56.888889 0 0 0 56.888889-55.296V170.666667a56.888889 56.888889 0 0 0-55.296-56.888889zM341.333333 227.555556v227.555555h142.222223V227.555556h113.777777v568.888888h-113.777777v-227.555555H341.333333v227.555555H227.555556V227.555556h113.777777z m492.316445 0c76.060444 0 103.651556 7.964444 131.470222 22.755555 27.875556 14.904889 49.664 36.750222 64.512 64.568889 14.904889 27.818667 22.812444 55.409778 22.812444 131.413333v131.413334c0 76.003556-7.964444 103.594667-22.755555 131.413333a155.079111 155.079111 0 0 1-64.568889 64.512c-27.818667 14.904889-55.409778 22.812444-131.413333 22.812444H682.666667V227.555556h150.983111z m32.085333 113.777777H796.444444v341.333334h69.290667c25.372444 0 34.531556-2.616889 43.804445-7.623111a51.712 51.712 0 0 0 21.504-21.504c5.006222-9.272889 7.623111-18.432 7.623111-43.804445V414.264889c0-25.372444-2.616889-34.531556-7.623111-43.804445a51.712 51.712 0 0 0-21.504-21.504c-9.272889-5.006222-18.432-7.623111-43.804445-7.623111z\" p-id=\"27277\" fill=\"#ffffff\"></path></svg>",
    "vodlist": "<svg t=\"1655504584802\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"951\" width=\"19\" height=\"19\"><path d=\"M53.805544 177.515929v296.565991h423.665701v-423.665702h-296.565991a127.09971 127.09971 0 0 0-127.09971 127.099711z m338.932561 211.83285h-254.199421v-211.83285a42.36657 42.36657 0 0 1 42.36657-42.36657h211.832851z m457.558957-338.932561h-296.56599v423.665702h423.665701v-296.565991a127.09971 127.09971 0 0 0-127.099711-127.099711z m42.366571 338.932561h-254.199421v-254.19942h211.83285a42.36657 42.36657 0 0 1 42.366571 42.36657zM53.805544 847.331403a127.09971 127.09971 0 0 0 127.09971 127.09971h296.565991V550.765412h-423.665701z m84.73314-211.832851h254.199421v254.199421h-211.832851a42.36657 42.36657 0 0 1-42.36657-42.36657z m415.192388 338.932561h296.56599a127.09971 127.09971 0 0 0 127.099711-127.09971v-296.565991h-423.665701z m84.73314-338.932561h254.199421v211.832851a42.36657 42.36657 0 0 1-42.366571 42.36657h-211.83285z\" p-id=\"952\" fill=\"#ffffff\"></path></svg>",
    "close": "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\"><path d=\"m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z\"></path></svg>",
    "along": "<svg t=\"1658845028614\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"5600\" width=\"23\" height=\"23\"><path d=\"M929 849a30 30 0 0 1-30-30v-83.137a447.514 447.514 0 0 1-70.921 92.209C722.935 933.225 578.442 975.008 442 953.482a444.917 444.917 0 0 1-241.139-120.591 30 30 0 1 1 37.258-47.01l0.231-0.231A385.175 385.175 0 0 0 442 892.625v-0.006c120.855 22.123 250.206-13.519 343.656-106.975a386.646 386.646 0 0 0 70.6-96.653h-87.247a30 30 0 0 1 0-60H929a30 30 0 0 1 30 30V819a30 30 0 0 1-30 30zM632 342a50 50 0 0 1 50 50v240a50 50 0 0 1-50 50H392a50 50 0 0 1-50-50V392a50 50 0 0 1 50-50h240zM402 607a15 15 0 0 0 15 15h190a15 15 0 0 0 15-15V417a15 15 0 0 0-15-15H417a15 15 0 0 0-15 15v190z m403.005-362.025a29.87 29.87 0 0 1-19.117-6.882l-0.232 0.231A386.5 386.5 0 0 0 689.478 168h-0.011c-145.646-75.182-329.021-51.747-451.117 70.35a386.615 386.615 0 0 0-70.6 96.65H255a30 30 0 0 1 0 60H95a30 30 0 0 1-30-30V205a30 30 0 0 1 60 0v83.129a447.534 447.534 0 0 1 70.923-92.206C317.981 73.866 493.048 37.2 647 85.836v-0.045a444.883 444.883 0 0 1 176.143 105.291 30 30 0 0 1-18.138 53.893z\" fill=\"#ffffff\" p-id=\"5601\"></path></svg>"
  }
};