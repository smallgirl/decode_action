//Wed Aug 06 2025 09:42:17 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let XMlayEr = {
  "decrypt": function (_0x107546, _0xe457c5, _0x31c8d6) {
    let _0x5ceb4b = CryptoJS.AES.decrypt(_0x107546, CryptoJS.enc.Utf8.parse(_0xe457c5), {
      "iv": CryptoJS.enc.Utf8.parse(_0x31c8d6),
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return _0x5ceb4b.toString(CryptoJS.enc.Utf8);
  },
  "error": function (_0x549d6a) {
    $("#player").hide();
    $("#loading").hide();
    $("body").append("<div id=\"error\"><h1>" + _0x549d6a + "</h1></div>");
  },
  "AjaxData": function (_0x5132c3, _0x1aa8d6) {
    $.ajaxSettings.timeout = "6000";
    $.ajaxSettings.async = true;
    $.post("https://202.189.8.170/Api.js", _0x5132c3, function (_0x408838) {
      _0x408838.code == 200 ? _0x1aa8d6(_0x408838) : XMlayEr.error(_0x408838.msg);
    }, "json").error(function (_0x5b1148, _0x2718a5, _0x322aad) {
      $.post("https://cache.hls.one/xmflv.js", _0x5132c3, function (_0x14e721) {
        if (_0x14e721.code == 200) {
          _0x1aa8d6(_0x14e721);
        } else {
          XMlayEr.error(_0x14e721.msg);
        }
      }, "json").error(function (_0x5250ab, _0x4664ba, _0x15a461) {
        XMlayEr.error("接口请求失败,请尝试刷新重试");
      });
    });
  },
  "XMlayEr": function () {
    $.ajax({
      "type": "get",
      "url": "https://data.video.iqiyi.com/v.f4v",
      "success": function (_0x3baf0f) {
        var _0x2603c3 = navigator.userAgent.match(/iPad|iPhone|Android|Linux|iPod/i) != null ? 1 : 0,
          _0x59d285 = new URLSearchParams(location.search),
          _0xb54f24 = _0x59d285.get("wap") ?? _0x2603c3;
        XMlayEr.next0 = _0x59d285.get("next");
        var _0xb5d031 = _0x3baf0f.t,
          _0x3017ab = _0x3baf0f.time,
          _0x4b859e = sign(hex_md5(_0x3017ab + url));
        XMlayEr.AjaxData({
          "wap": _0xb54f24,
          "url": url,
          "time": _0x3017ab,
          "key": _0x4b859e,
          "area": _0xb5d031
        }, function (_0x2400cb) {
          aes_key = _0x2400cb.aes_key;
          aes_iv = _0x2400cb.aes_iv;
          XMlayEr.name = _0x2400cb.name;
          XMlayEr.type = _0x2400cb.type;
          XMlayEr.vurl = XMlayEr.decrypt(_0x2400cb.url, aes_key, aes_iv);
          XMlayEr.next = XMlayEr.decrypt(_0x2400cb.next, aes_key, aes_iv);
          XMlayEr.html = XMlayEr.decrypt(_0x2400cb.html, aes_key, aes_iv);
          XMlayEr.dmid = _0x2400cb.dmid;
          XMlayEr.ggdmapi = _0x2400cb.ggdmapi;
          XMlayEr.load();
        });
      },
      "error": function (_0x56a61e, _0x5b07c1, _0x4cd025) {
        XMlayEr.error("请检查你的网络是否正常!");
      }
    });
  },
  "empty": function (_0x1817be) {
    return _0x1817be == null || _0x1817be === "";
  },
  "cookie": {
    "Set": function (_0x19938d, _0x1bd583, _0x25af6b = 7, _0x10f1a1 = "1") {
      if (_0x10f1a1 === "1") localStorage.setItem(_0x19938d, _0x1bd583);else {
        let _0x4d152e = new Date();
        _0x4d152e.setTime(_0x4d152e.getTime() + _0x25af6b * 24 * 60 * 60 * 1000);
        document.cookie = _0x19938d + "=" + encodeURIComponent(_0x1bd583) + ";path=/;expires=" + _0x4d152e.toUTCString();
      }
    },
    "Get": function (_0x383011, _0x3c980f = "1") {
      if (_0x3c980f === "1") return localStorage.getItem(_0x383011);else {
        let _0x36f633 = document.cookie.match(new RegExp("(^| )" + _0x383011 + "=([^;]*)(;|$)"));
        if (_0x36f633 != null) return decodeURIComponent(_0x36f633[2]);
      }
    },
    "Del": function (_0x3bee7e, _0x3d608e = "1") {
      if (_0x3d608e === "1") localStorage.removeItem(_0x3bee7e);else {
        {
          let _0x5f2615 = new Date();
          _0x5f2615.setTime(_0x5f2615.getTime() - 1);
          let _0x21e559 = this.Get(_0x3bee7e, 2);
          _0x21e559 != null && (document.cookie = _0x3bee7e + "=" + encodeURIComponent(_0x21e559) + ";path=/;expires=" + _0x5f2615.toUTCString());
        }
      }
    }
  },
  "play": function () {
    let _0x35c994 = {
      "container": "#player",
      "contextmenu": [],
      "autoplay": true,
      "icons": {
        "loading": "<div id=\"qloading\"></div>",
        "indicator": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\" width=\"18\" height=\"18\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);\"><defs><clipPath id=\"__lottie_element_602\"><rect width=\"18\" height=\"18\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_602)\"><g transform=\"matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)\"><path fill=\"rgb(51,51,51)\" fill-opacity=\"1\" d=\" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z\"></path></g></g><g transform=\"matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)\"><path fill=\"rgb(51,51,51)\" fill-opacity=\"1\" d=\" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z\"></path></g></g><g transform=\"matrix(1,0,0,1,8.890999794006348,8.406000137329102)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)\"><path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z\"></path><path stroke-linecap=\"butt\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"4\" stroke=\"rgb(51,51,51)\" stroke-opacity=\"1\" stroke-width=\"1.5\" d=\" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z\"></path></g></g><g transform=\"matrix(1,0,0,1,8.89900016784668,8.083999633789062)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)\"><path fill=\"rgb(51,51,51)\" fill-opacity=\"1\" d=\" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z\"></path></g></g><g transform=\"matrix(1,0,0,1,14.008999824523926,8.083999633789062)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)\"><path fill=\"rgb(51,51,51)\" fill-opacity=\"1\" d=\" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z\"></path></g></g></g></svg>",
        "state": "<svg t=\"1735985723837\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"18247\" width=\"80\" height=\"80\"><path d=\"M830.577778 227.555556H657.066667l74.903703-70.162963c11.377778-11.377778 11.377778-29.392593 0-39.822223-5.688889-5.688889-13.274074-8.533333-21.807407-8.533333-7.585185 0-15.17037 2.844444-21.807407 8.533333L570.785185 227.555556H456.059259L338.488889 117.57037c-5.688889-5.688889-13.274074-8.533333-21.807408-8.533333-7.585185 0-15.17037 2.844444-21.807407 8.533333-11.377778 11.377778-11.377778 29.392593 0 39.822223L369.777778 227.555556H193.422222C117.57037 227.555556 56.888889 295.822222 56.888889 381.155556v332.8c0 85.333333 60.681481 153.6 136.533333 153.6h42.666667c0 25.6 22.755556 47.407407 50.251852 47.407407s50.251852-20.859259 50.251852-47.407407h353.659259c0 25.6 22.755556 47.407407 50.251852 47.407407s50.251852-20.859259 50.251852-47.407407h38.874074c75.851852 0 136.533333-69.214815 136.533333-153.6V381.155556c0.948148-85.333333-59.733333-153.6-135.585185-153.6zM698.785185 574.577778L425.718519 733.866667c-22.755556 13.274074-41.718519 2.844444-41.718519-24.651852V389.688889c0-26.548148 18.962963-37.925926 41.718519-24.651852l273.066666 160.237037c22.755556 14.222222 22.755556 35.081481 0 49.303704z\" p-id=\"18248\" fill=\"#ffffff\"></path></svg>",
        "play": "<svg t=\"1735986127554\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"35346\" width=\"24\" height=\"24\"><path d=\"M829.696 584.405333c-3.626667 3.712-17.28 19.584-29.994667 32.597334-74.538667 82.133333-311.765333 216.533333-413.568 257.536-15.445333 6.613333-54.528 20.565333-75.434666 21.461333a123.733333 123.733333 0 0 1-57.301334-13.952 119.893333 119.893333 0 0 1-50.858666-57.856c-6.4-16.853333-16.426667-67.2-16.426667-68.096C176.213333 701.013333 170.666667 611.456 170.666667 512.512c0-94.293333 5.504-180.181333 13.653333-236.117333 0.938667-0.853333 10.922667-63.445333 21.802667-84.906667C226.176 152.32 265.258667 128 307.072 128h3.626667c27.264 0.938667 84.565333 25.258667 84.565333 26.197333 96.298667 41.088 329.002667 168.874667 405.376 253.824 0 0 21.504 21.802667 30.890667 35.413334 14.549333 19.626667 21.802667 43.861333 21.802666 68.096 0 27.093333-8.149333 52.309333-23.637333 72.832z\" fill=\"#ffffff\" p-id=\"35347\"></path></svg>",
        "volume": "<svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" data-pointer=\"none\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\"><path fill=\"#fff\" fill-rule=\"evenodd\" stroke=\"#fff\" stroke-width=\"0.3\" d=\"M12.781 4.285A.75.75 0 0 1 14 4.871V19.13a.75.75 0 0 1-1.219.586l-4.24-3.393a3.75 3.75 0 0 0-2.343-.822H4.38c-.343 0-.583-.219-.628-.482A18.013 18.013 0 0 1 3.5 12c0-1.246.13-2.297.253-3.018.045-.263.285-.482.628-.482h1.817a3.75 3.75 0 0 0 2.342-.822l4.242-3.393Zm2.719.586c0-1.886-2.182-2.936-3.656-1.757l-4.24 3.393A2.25 2.25 0 0 1 6.197 7H4.38c-.996 0-1.925.671-2.106 1.728A19.516 19.516 0 0 0 2 12c0 1.347.14 2.485.275 3.272C2.456 16.328 3.385 17 4.38 17h1.817c.51 0 1.006.174 1.405.493l4.241 3.393c1.474 1.179 3.656.129 3.656-1.757V4.87Zm4.56.565a.75.75 0 0 1 1.057.084 10.002 10.002 0 0 1 0 12.96.75.75 0 0 1-1.141-.974 8.502 8.502 0 0 0 0-11.012.75.75 0 0 1 .084-1.058Zm-2.815 2.808a.75.75 0 0 1 1.05.147 6.003 6.003 0 0 1 0 7.216.75.75 0 1 1-1.198-.903 4.504 4.504 0 0 0 0-5.41.75.75 0 0 1 .148-1.05Z\" clip-rule=\"evenodd\"></path></svg>",
        "volumeClose": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" data-pointer=\"none\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\"><path fill=\"#fff\" fill-rule=\"evenodd\" stroke=\"#fff\" stroke-width=\"0.3\" d=\"M12.781 4.285A.75.75 0 0 1 14 4.871V19.13a.75.75 0 0 1-1.219.586l-4.24-3.393a3.75 3.75 0 0 0-2.343-.822H4.38c-.343 0-.583-.219-.628-.482A18.013 18.013 0 0 1 3.5 12c0-1.246.13-2.297.253-3.018.045-.263.285-.482.628-.482h1.817a3.75 3.75 0 0 0 2.342-.822l4.242-3.393Zm2.719.586c0-1.886-2.182-2.936-3.656-1.757l-4.24 3.393A2.25 2.25 0 0 1 6.197 7H4.38c-.996 0-1.925.671-2.106 1.728A19.516 19.516 0 0 0 2 12c0 1.347.14 2.485.275 3.272C2.456 16.328 3.385 17 4.38 17h1.817c.51 0 1.006.174 1.405.493l4.241 3.393c1.474 1.179 3.656.129 3.656-1.757V4.87Zm7.78 5.16a.75.75 0 1 0-1.06-1.061l-1.97 1.97-1.97-1.97a.75.75 0 1 0-1.06 1.06L19.19 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06l1.97-1.97 1.97 1.97a.75.75 0 1 0 1.06-1.06L21.31 12l1.97-1.97Z\" clip-rule=\"evenodd\"></path></svg>",
        "setting": "<svg class=\"icon\" viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\"><path d=\"M17.404 4.557a3.5 3.5 0 0 1 3.031 1.75l3.516 6.09a3.5 3.5 0 0 1 0 3.5l-3.49 6.044a3.5 3.5 0 0 1-3.133  1.748l-6.88-.202a3.5 3.5 0 0 1-2.87-1.65l-3.664-5.892a3.5 3.5 0 0 1-.059-3.599l3.487-6.039a3.5 3.5 0 0 1 3.031-1.75Zm0 1.75h-7.031a1.75 1.75 0 0 0-1.516.875l-3.486 6.04a1.75 1.75 0 0 0 .03 1.799l3.664 5.892c.31.498.848.808 1.434.825l6.88.202a1.75 1.75 0 0 0 1.567-.874l3.49-6.045a1.75 1.75 0 0 0 0-1.75L18.92 7.182a1.75 1.75 0 0 0-1.516-.875Zm-6.437 5.962a3.5 3.5 0 1 1 6.063 3.5 3.5 3.5 0 0 1-6.063-3.5Zm3.907.234a1.75 1.75 0 1 0-1.75 3.031 1.75 1.75 0 0 0 1.75-3.03Z\" stroke-width=\".5\" fill-rule=\"evenodd\"></path></svg>",
        "fullscreenOn": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" data-pointer=\"none\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"#fff\" stroke=\"#fff\" stroke-width=\"0.3\" fill-rule=\"evenodd\" d=\"M6 4a2 2 0 0 0-2 2v6.5a1 1 0 0 0 2 0V6h6.5a1 1 0 1 0 0-2H6Zm14 7.5a1 1 0 1 0-2 0V18h-6.5a1 1 0 1 0 0 2H18a2 2 0 0 0 2-2v-6.5Z\" clip-rule=\"evenodd\"></path></svg>"
      }
    };
    _0x35c994.flip = true;
    _0x35c994.hotkey = true;
    _0x35c994.playbackRate = true;
    _0x35c994.aspectRatio = true;
    _0x35c994.screenshot = false;
    _0x35c994.pip = true;
    _0x35c994.fullscreen = true;
    _0x35c994.miniProgressBar = true;
    _0x35c994.fastForward = true;
    _0x35c994.airplay = true;
    _0x35c994.autoOrientation = true;
    let _0x1b967b = XMlayEr.vurl,
      _0x5ddb37 = XMlayEr.type;
    _0x35c994.lang = "zh-cn";
    _0x35c994.theme = "#CC6633";
    _0x35c994.volume = Number(0.5);
    _0x35c994.setting = true;
    _0x35c994.url = _0x1b967b;
    if (_0x5ddb37 === "flv") {
      _0x35c994.type = "flv";
      _0x35c994.customType = {
        "flv": function _0x2206ee(_0x2130e6, _0x4b909e, _0x3e3f6e) {
          if (flvjs.isSupported()) {
            {
              const _0x242ff7 = flvjs.createPlayer({
                "type": "flv",
                "url": _0x4b909e
              });
              _0x242ff7.attachMediaElement(_0x2130e6);
              _0x242ff7.load();
              _0x3e3f6e.flv = _0x242ff7;
              _0x3e3f6e.once("url", () => _0x242ff7.destroy());
              _0x3e3f6e.once("destroy", () => _0x242ff7.destroy());
            }
          } else {
            _0x3e3f6e.notice.show = "Unsupported playback format: flv";
          }
        }
      };
    } else (_0x5ddb37 === "m3u8" || _0x5ddb37 === "hls") && (_0x35c994.type = "m3u8", _0x35c994.customType = {
      "m3u8": function _0x1992e7(_0x9332d3, _0x23de6e, _0x279337) {
        if (Hls.isSupported()) {
          {
            const _0x5e0359 = new Hls();
            _0x5e0359.loadSource(_0x23de6e);
            _0x5e0359.attachMedia(_0x9332d3);
            _0x279337.hls = _0x5e0359;
            _0x279337.once("url", () => _0x5e0359.destroy());
            _0x279337.once("destroy", () => _0x5e0359.destroy());
          }
        } else _0x9332d3.canPlayType("application/vnd.apple.mpegurl") ? _0x9332d3.src = _0x23de6e : _0x279337.notice.show = "Unsupported playback format: m3u8";
      }
    });
    XMlayEr.void = new Artplayer(_0x35c994);
    $(document).on("click", ".yxq-vod-list", function () {
      {
        var _0x57b452 = $(".yxq-listbox");
        if (_0x57b452.length > 0) {
          {
            $(".vodlist-of,.r-button").toggle();
            if ($(".yxq-stting").length > 0) _0x57b452.removeClass("yxq-stting");else {
              _0x57b452.addClass("yxq-stting");
            }
          }
        } else {
          _0x57b452.addClass("yxq-stting");
        }
      }
    });
  },
  "load": function () {
    XMlayEr.play();
    let _0x43ff72 = "#CC6633",
      _0xc48e0f = ".s-on svg circle,.s-on svg path{fill:" + _0x43ff72 + "!important}.t-color{color:" + _0x43ff72 + "}.t-bj{background-color:" + _0x43ff72 + "}.ec-subtitle p{color: #fff; font-size: 1.6vw;background:#000c;}" + XMlayEr.header.logoCss() + "@media (max-width: 767px){.player-logo{width:100px}}";
    $("head").append("<style>" + _0xc48e0f + "</style>");
    box.children().append("<div class=\"lock-box\"></div><div class=\"ec-danMa text\"><div class=\"ec-danMa-item ec-danMa-item--demo\"></div></div><div class=\"ec-subtitle\"></div><div class=\"header ease flex between\"><div class=\"player-title\"></div><div class=\"flex qoe-normal\" style=\"display:none\"><div class=\"kui-time\"></div><div class=\"batteryShape\"><div class=\"level\"><div class=\"percentage\"></div></div></div></div></div><div class=\"dm-box flex dm-wap\"><div class=\"dm-box-left flex\"><div class=\"dm-box-cc\" data-id=\"0\"></div><div class=\"dm-box-set\"></div><div class=\"dm-set-box ec-box\"><div id=\"dm_n1\" class=\"dm-set-list ds-set-show\">\n<div class=\"flex between\" data-id=\"1\"><div class=\"dm-set-label\">弹幕速度</div><div class=\"set-toggle flex\"><span>适中</span></div></div>\n<div class=\"flex between\" data-id=\"2\"><div class=\"dm-set-label\">字体大小</div><div class=\"set-toggle flex\"><span>默认</span></div></div>\n<div class=\"flex between\" data-id=\"3\"><div class=\"dm-set-label\">不透明度</div><div class=\"set-toggle flex\"><span>100%</span></div></div>\n<div class=\"flex between\"  data-id=\"4\"><div class=\"dm-set-label\">å¼¹å¹èå´</div><div class=\"set-toggle flex\"><span>3/4</span></div></div></div></div></div>\n<div class=\"dm-input-box flex-auto\"><div class=\"dm-box-t\"><div class=\"dm-style-box ec-box\"><div class=\"dm-style-title\">å¼¹å¹æ¹å</div><div class=\"content_dmP-1 flex\">\n<div class=\"item on-1\" data-type=\"right\">滚动<i></i></div><div class=\"item\" data-type=\"top\">顶部<i></i></div><div class=\"item\" data-type=\"bottom\">底部<i></i></div></div>\n<div class=\"dm-style-title\">弹幕颜色</div><div class=\"content_dmP-2 flex\"><div class=\"item on-1\">默认<i></i></div><div class=\"item\" data-color=\"#02CC92\" style=\"color:#02CC92;border-color:#02CC92;\">青草绿<i></i></div>\n<div class=\"item\" data-color=\"#03A5FF\"  style=\"color:#03A5FF;border-color:#03A5FF;\">香菇蓝<i></i></div><div class=\"item\" data-color=\"#FF893B\"  style=\"color:#FF893B;border-color:#FF893B;\">暖阳橙<i></i></div>\n<div class=\"item\" data-color=\"#FC265E\"  style=\"color:#FC265E;border-color:#FC265E;\">喜庆红<i></i></div><div class=\"item\" data-color=\"#BE8DF7\"  style=\"color:#BE8DF7;border-color:#BE8DF7;\">销魂紫<i></i></div>\n</div></div><img alt=\"弹幕颜色\" class=\"dm-box-t-img\" src=\"https://img.alicdn.com/imgextra/i2/O1CN01KdGeoZ25bCijuGQzn_!!6000000007544-2-tps-69-66.png\"></div><input class=\"dm-input\" type=\"text\" data-time=\"10\" autocomplete=\"off\" placeholder=\"来发个弹幕吧~\" maxlength=\"22\">\n<button class=\"dm-send t-bj\" data-balloon=\"发送\" data-balloon-pos=\"up\">发送</button></div></div><div class=\"player-list-off off\"></div><div class=\"ec-box player-list\"><div class=\"new-check\"><div class=\"new-body\"></div></div></div><div class=\"ec-remember\"></div><div class=\"broadside seat1\"></div>");
    $(".art-controls-right").prepend("<div class=\"art-control dm-bnt hint--rounded hint--top\" data-index=\"20\" aria-label=\"发弹幕\"><i class=\"art-icon\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M833.94335938 148.30859375H190.05664062c-39.28710938 0-71.19140625 31.90429688-71.19140624 71.19140625V689.5390625c0 39.28710938 31.90429688 71.19140625 71.19140625 71.19140625h169.45312499l131.13281251 107.05078125c6.50390625 5.2734375 14.32617188 7.91015625 22.23632812 7.91015625 7.82226563 0 15.73242188-2.63671875 22.1484375-7.91015625l131.8359375-107.05078125h166.9921875c39.28710938 0 71.19140625-31.90429688 71.19140625-71.19140625V219.5c0.08789063-39.28710938-31.90429688-71.19140625-71.10351563-71.19140625z m0.87890624 541.23046875c0 0.43945313-0.43945313 0.87890625-0.87890625 0.87890625H654.47070313c-8.0859375 0-15.90820313 2.8125-22.14843751 7.91015625L512.96679688 795.18359375 394.31445312 698.328125c-6.24023438-5.09765625-14.15039063-7.91015625-22.23632812-7.91015625H190.05664062c-0.43945313 0-0.87890625-0.43945313-0.87890624-0.87890625V219.5c0-0.43945313 0.43945313-0.87890625 0.87890625-0.87890625h643.79882812c0.43945313 0 0.87890625 0.43945313 0.87890625 0.87890625V689.5390625z\"></path><path d=\"M345.09570312 455.3984375m-43.94531249 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path><path d=\"M512.96679688 455.3984375m-43.9453125 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path><path d=\"M681.01367188 455.3984375m-43.94531251 0a43.9453125 43.9453125 0 1 0 87.89062501 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path></svg></i></div><div class=\"art-control content-bnt hint--rounded hint--top\" data-index=\"20\" aria-label=\"字幕开关\"><i class=\"art-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"></path></svg></i></div>");
    XMlayEr.LoadAnimation();
    XMlayEr.header.Init();
    $(".content-bnt").remove();
    XMlayEr.danMu.Init();
    XMlayEr.list.html();
    XMlayEr.list.next();
    XMlayEr.list.autoNext();
    XMlayEr.broadside();
    XMlayEr.void.on("video:timeupdate", function () {
      let _0x6d7590 = XMlayEr.void.currentTime;
      XMlayEr.cookie.Set(url, _0x6d7590, 7, 2);
    });
    XMlayEr.void.on("video:ended", function () {
      XMlayEr.cookie.Del(url, 2);
    });
  },
  "tips": {
    "removeMsg": function () {
      $(".pop-msg").remove();
    },
    "msg": function (_0x553c91, _0x2e7139) {
      let _0x13d51c = _0x2e7139 || 3000;
      $(".pop-msg").length > 0 && XMlayEr.tips.removeMsg();
      box.children().append("<div class=\"pop-msg vague4\"><div class=\"pop-content\"></div></div>");
      $(".pop-msg .pop-content").html(_0x553c91);
      setTimeout(XMlayEr.tips.removeMsg, _0x13d51c);
    }
  },
  "header": {
    "Init": function () {
      this.marquee();
      this.title(XMlayEr.name);
      this.time();
      this.qfe();
    },
    "logoCss": function () {
      switch (1) {
        case "1":
          return ".player-logo{left: 20px;top: 20px;width: 15%;}";
        case "2":
          return ".player-logo{right: 20px;top: 20px;width: 15%;}";
        case "3":
          return ".player-logo{left: 20px;bottom: 80px;width: 15%;}";
        default:
          return ".player-logo{right: 20px;bottom: 80px;width: 15%;}";
      }
    },
    "marquee": function () {
      box.children().append("<div class=\"bullet-screen\" style=\"animation: bullet 10s linear infinite;color:#E50916</div>");
      setTimeout(function () {
        $(".bullet-screen").remove();
      }, 60000);
      XMlayEr.void.on("pause", function () {
        $(".bullet-screen").css("animation-play-state", "paused");
      });
      XMlayEr.void.on("play", function () {
        $(".bullet-screen").css("animation-play-state", "running");
      });
    },
    "time": function () {
      let _0x40e54f = new Date(),
        _0x196375 = _0x40e54f.getHours() < 10 ? "0" + _0x40e54f.getHours() : _0x40e54f.getHours(),
        _0x36942e = _0x40e54f.getMinutes() < 10 ? "0" + _0x40e54f.getMinutes() : _0x40e54f.getMinutes();
      $(".kui-time").text(_0x196375 + ":" + _0x36942e);
      setTimeout(function () {
        XMlayEr.header.time();
      }, 1000);
      $(".header .qoe-normal").show();
    },
    "qfe": function () {
      try {
        navigator.getBattery().then(function (_0x4799bc) {
          let _0x4209b3 = _0x4799bc.level * 100 + "%",
            _0x42a772 = $(".percentage");
          _0x4209b3 === "10%" ? _0x42a772.css({
            "background-color": "red",
            "width": _0x4209b3
          }) : _0x42a772.css("width", _0x4209b3);
          $(".batteryShape").show();
          _0x4799bc.addEventListener("levelchange", function () {
            this.qfe();
          });
        });
      } catch (_0xd3c8f5) {
        console.log("该浏览器不支持电量显示");
      }
    },
    "title": function (_0x174ec7) {
      $(".player-title").text(_0x174ec7);
      XMlayEr.header.onShowNameTipsMouseenter();
    },
    "onShowNameTipsMouseenter": function () {
      let _0x438593 = document.querySelector(".player-title");
      if (_0x438593.scrollWidth > _0x438593.offsetWidth) {
        {
          function _0x10da6c() {
            _0x438593.innerHTML = _0x438593.innerHTML.slice(1) + _0x438593.innerHTML[0];
          }
          setInterval(_0x10da6c, 200);
        }
      }
    }
  },
  "subtitle": {
    "hide": false,
    "Init": function (_0x5a9a7a) {
      const _0x49b28a = document.getElementsByTagName("video"),
        _0x207ee6 = document.createElement("track");
      $(".content-bnt").click(function () {
        $(".ec-subtitle").toggle();
        XMlayEr.subtitle.hide === false ? ($(this).css("opacity", "0.6"), XMlayEr.subtitle.hide = true) : ($(this).css("opacity", ""), XMlayEr.subtitle.hide = false);
      });
      _0x207ee6.default = true;
      _0x207ee6.kind = "metadata";
      _0x49b28a[0].appendChild(_0x207ee6);
      fetch(_0x5a9a7a.url).then(_0x3e35fd => _0x3e35fd.arrayBuffer()).then(_0x475b76 => {
        const _0x296fca = new TextDecoder(_0x5a9a7a.encoding).decode(_0x475b76);
        switch (_0x5a9a7a.type || this.getExt(_0x5a9a7a.url)) {
          case "srt":
            return this.text.vttToBlob(this.text.srtToVtt(_0x296fca));
          case "ass":
            return this.text.vttToBlob(this.text.assToVtt(_0x296fca));
          case "vtt":
            return this.text.vttToBlob(_0x296fca);
          default:
            return _0x5a9a7a.url;
        }
      }).then(_0x4fb4ad => {
        _0x207ee6.default = true;
        _0x207ee6.kind = "metadata";
        _0x207ee6.src = _0x4fb4ad.toString();
        _0x207ee6.track.mode = "hidden";
        _0x207ee6.addEventListener("cuechange", this.text.update);
      }).catch(_0xb76bcb => {
        XMlayEr.tips.msg("å­å¹å\xA0è½½å¤±è´¥!!!");
        throw _0xb76bcb;
      });
    },
    "text": {
      "fixSrt": function (_0x2d75b7) {
        return _0x2d75b7.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (_0xa667a5, _0x18417d, _0x509752) => {
          let _0x98f6df = _0x509752.slice(0, 3);
          if (_0x509752.length === 1) {
            _0x98f6df = _0x509752 + "00";
          }
          _0x509752.length === 2 && (_0x98f6df = _0x509752 + "0");
          return _0x18417d + "," + _0x98f6df;
        });
      },
      "srtToVtt": function (_0x21e9b8) {
        return "WEBVTT \r\n\r\n".concat(this.fixSrt(_0x21e9b8).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
      },
      "vttToBlob": function (_0x2efab4) {
        return URL.createObjectURL(new Blob([_0x2efab4], {
          "type": "text/vtt"
        }));
      },
      "assToVtt": function (_0x47e790) {
        const _0x4fee06 = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");
        function _0x43ff60(_0x2969c3 = "") {
          return _0x2969c3.split(/[:.]/).map((_0x928f71, _0x5b3fee, _0x4e1484) => {
            if (_0x5b3fee === _0x4e1484.length - 1) {
              {
                if (_0x928f71.length === 1) {
                  return "." + _0x928f71 + "00";
                }
                if (_0x928f71.length === 2) return "." + _0x928f71 + "0";
              }
            } else {
              if (_0x928f71.length === 1) {
                return (_0x5b3fee === 0 ? "0" : ":0") + _0x928f71;
              }
            }
            return _0x5b3fee === 0 ? _0x928f71 : _0x5b3fee === _0x4e1484.length - 1 ? "." + _0x928f71 : ":" + _0x928f71;
          }).join("");
        }
        return "WEBVTT\n\n" + _0x47e790.split(/\r?\n/).map(_0x55f804 => {
          {
            const _0x2ef395 = _0x55f804.match(_0x4fee06);
            if (!_0x2ef395) return null;
            return {
              "start": _0x43ff60(_0x2ef395[1].trim()),
              "end": _0x43ff60(_0x2ef395[2].trim()),
              "text": _0x2ef395[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map(_0x56ffc7 => _0x56ffc7.trim()).join("\n")
            };
          }
        }).filter(_0x58deb5 => _0x58deb5).map((_0x39c5ba, _0x9481b3) => {
          if (_0x39c5ba) return _0x9481b3 + 1 + "\n" + _0x39c5ba.start + " --> " + _0x39c5ba.end + "\n" + _0x39c5ba.text;
          return "";
        }).filter(_0x1848aa => _0x1848aa.trim()).join("\n\n");
      },
      "update": function () {
        const _0x50fe07 = document.getElementsByTagName("video"),
          _0x19c83e = _0x50fe07[0].textTracks[0].activeCues[0],
          _0x327250 = document.querySelector(".ec-subtitle");
        _0x327250.innerHTML = "";
        _0x19c83e && (_0x327250.innerHTML = _0x19c83e.text.split(/\r?\n/).map(_0x5bb110 => "<p>" + function (_0x34a193) {
          return _0x34a193.replace(/[&<>'"]/g, _0x57e35c => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            "\"": "&quot;"
          })[_0x57e35c] || _0x57e35c);
        }(_0x5bb110) + "</p>").join(""));
      }
    },
    "getExt": function (_0x5af280) {
      return _0x5af280.includes("?") ? n(_0x5af280.split("?")[0]) : _0x5af280.includes("#") ? n(_0x5af280.split("#")[0]) : _0x5af280.trim().toLowerCase().split(".").pop();
    }
  },
  "danMu": {
    "dm_api": [],
    "dan": [],
    "time": "",
    "danTunnel": {
      "right": {},
      "top": {},
      "bottom": {}
    },
    "container": null,
    "paused": true,
    "off": false,
    "showing": true,
    "speedRate": 0.4,
    "unlimited": false,
    "height": 15,
    "opacity": 1,
    "danIndex": 0,
    "Init": function () {
      let _0x3397b2 = $(".dm-box");
      this.off = true;
      this.api();
      this.container = document.querySelector(".ec-danMa");
      let _0x5e4a21 = getComputedStyle(document.getElementsByClassName("ec-danMa")[0], null)["font-size"],
        _0x2cbf9f = _0x5e4a21.slice(0, -2);
      this.height = Number(_0x2cbf9f) + 6;
      for (let _0x370a26 = [], _0x28519e = 0; _0x28519e < this.dm_api.length; ++_0x28519e) this.apiBackend.read(this.dm_api[_0x28519e][2], function (_0x1853b7) {
        return function (_0x4437a6, _0x553f88) {
          if (_0x4437a6) {
            _0x4437a6.response;
            _0x370a26[_0x1853b7] = [];
          } else _0x370a26[_0x1853b7] = _0x553f88 ? _0x553f88.map(function (_0x57ddf0) {
            return {
              "time": _0x57ddf0[0],
              "type": _0x57ddf0[1],
              "color": _0x57ddf0[2],
              "author": _0x57ddf0[3],
              "text": _0x57ddf0[4].indexOf("777ys") != -1 ? "68yy.com 全网影视在线看🎬" : _0x57ddf0[4],
              "size": _0x57ddf0[7]
            };
          }) : [], _0x370a26[_0x1853b7] = _0x370a26[_0x1853b7], XMlayEr.danMu.readAllEndpoints(_0x370a26);
        };
      }(_0x28519e));
      this.content();
      false && $(".dm-input").attr({
        "disabled": true,
        "placeholder": "请先登录~"
      });
      XMlayEr.void.on("play", function () {
        XMlayEr.danMu.paused = false;
        $(".ec-danMa").addClass("dm-show");
      });
      XMlayEr.void.on("pause", function () {
        XMlayEr.danMu.paused = true;
        $(".ec-danMa").removeClass("dm-show");
      });
      switch ("1") {
        case "0":
          _0x3397b2.hide();
          break;
        case "2":
          _0x3397b2.hide();
          XMlayEr.void.on("fullscreen", function (_0x5c0ff1) {
            _0x5c0ff1 ? _0x3397b2.show() : _0x3397b2.hide();
          });
          break;
      }
      XMlayEr.void.on("seek", function () {
        XMlayEr.danMu.seek();
      });
    },
    "api": function () {
      let _0x328bcd = XMlayEr.dmid,
        _0x57dac5 = XMlayEr.ggdmapi ? "#1$" + XMlayEr.ggdmapi : "",
        _0x517e5c = "0$https://dmku.hls.one/?ac=dm" + _0x57dac5,
        _0x16dad3 = _0x517e5c.split("#"),
        _0x13015c = [];
      for (let _0x17db60 = 0; _0x17db60 < _0x16dad3.length; _0x17db60++) {
        {
          let _0x33c1c1 = _0x16dad3[_0x17db60].split("$"),
            _0x4e290e = "",
            _0x39e586 = "";
          switch (_0x33c1c1["0"]) {
            case "1":
              _0x39e586 = _0x328bcd;
              break;
            default:
              _0x39e586 = _0x328bcd;
              _0x4e290e = "&id=" + _0x39e586;
              break;
          }
          _0x13015c[_0x17db60] = [_0x33c1c1["0"], _0x33c1c1["1"], _0x33c1c1["1"] + _0x4e290e, _0x39e586];
        }
      }
      this.dm_api = _0x13015c;
    },
    "apiBackend": {
      "read": function (_0x4d4915, _0x33bf17) {
        this.api(_0x4d4915, null, function (_0x344cb0, _0x1c0ed1) {
          _0x33bf17(null, _0x1c0ed1.danmuku);
        }, function (_0x341a66, _0x3aad96) {
          _0x33bf17({
            "status": _0x341a66.status,
            "response": _0x3aad96
          });
        }, function (_0x4e7186) {
          _0x33bf17({
            "status": _0x4e7186.status,
            "response": null
          });
        });
      },
      "send": function (_0x4e8ece, _0x5ecedd) {
        this.api(XMlayEr.danMu.dm_api[0][1], _0x4e8ece, function () {
          console.log("发送弹幕成功");
          XMlayEr.tips.msg("您的弹幕已送达");
          _0x5ecedd(_0x4e8ece);
        }, function (_0x1895eb, _0x47c039) {
          XMlayEr.tips.msg(_0x47c039.msg);
        }, function (_0x14ea95) {
          console.log("Request was unsuccessful: " + _0x14ea95.status);
        });
      },
      "api": function (_0x5849af, _0x14701f, _0x2d040e, _0x3cfa62, _0x44a7ce) {
        let _0x10a47f = new XMLHttpRequest();
        _0x10a47f.onreadystatechange = function () {
          {
            if (4 === _0x10a47f.readyState) {
              if (_0x10a47f.status >= 200 && _0x10a47f.status < 300 || 304 === _0x10a47f.status) {
                {
                  let _0x103e5b = JSON.parse(_0x10a47f.responseText);
                  return 23 !== _0x103e5b.code ? _0x3cfa62(_0x10a47f, _0x103e5b) : _0x2d040e(_0x10a47f, _0x103e5b);
                }
              }
              _0x44a7ce(_0x10a47f);
            }
          }
        };
        _0x10a47f.open(null !== _0x14701f ? "POST" : "GET", _0x5849af, true);
        _0x10a47f.send(null !== _0x14701f ? JSON.stringify(_0x14701f) : null);
      }
    },
    "readAllEndpoints": function (_0x368fa6) {
      let _0x3eb7cb = this;
      _0x3eb7cb.dan = [].concat.apply([], _0x368fa6).sort(function (_0x1615c2, _0x10527a) {
        return _0x1615c2.time - _0x10527a.time;
      });
      window.requestAnimationFrame(function () {
        _0x3eb7cb.frame();
      });
    },
    "frame": function () {
      if (this.dan.length && !XMlayEr.danMu.paused && this.showing) {
        let _0x158d67 = this.dan[this.danIndex];
        const _0x2428f0 = [];
        while (_0x158d67 && XMlayEr.void.video.currentTime > parseFloat(_0x158d67.time)) {
          _0x2428f0.push(_0x158d67);
          _0x158d67 = this.dan[++this.danIndex];
        }
        this.draw(_0x2428f0);
      }
      window.requestAnimationFrame(() => {
        this.frame();
      });
    },
    "number2Color": function (_0x3fd2c9) {
      return "#" + ("00000" + _0x3fd2c9.toString()).slice(-6);
    },
    "number2Type": function (_0x84f9cb) {
      switch (_0x84f9cb) {
        case 0:
        case "right":
          return "right";
        case 1:
        case "top":
          return "top";
        case 2:
        case "bottom":
          return "bottom";
        default:
          return "right";
      }
    },
    "_measure": function (_0x4e1a5a) {
      if (!this.context) {
        const _0x2edcd2 = getComputedStyle(this.container.getElementsByClassName("ec-danMa-item")[0], null);
        this.context = document.createElement("canvas").getContext("2d");
        this.context.font = _0x2edcd2.getPropertyValue("font");
      }
      return this.context.measureText(_0x4e1a5a).width;
    },
    "_danAnimation": function (_0x39b2f3) {
      const _0x32541f = this.speedRate || 1,
        _0x4e18a9 = !!XMlayEr.void.fullscreen,
        _0x48c895 = {
          "top": (_0x4e18a9 ? 6 : 4) / _0x32541f + "s",
          "right": (_0x4e18a9 ? 8 : 5) / _0x32541f + "s",
          "bottom": (_0x4e18a9 ? 6 : 4) / _0x32541f + "s"
        };
      return _0x48c895[_0x39b2f3];
    },
    "seek": function () {
      if (!this.off) return;
      this.clear();
      for (let _0x229ad3 = 0; _0x229ad3 < this.dan.length; _0x229ad3++) {
        if (this.dan[_0x229ad3].time >= XMlayEr.void.video.currentTime) {
          this.danIndex = _0x229ad3;
          break;
        }
        this.danIndex = this.dan.length;
      }
    },
    "clear": function () {
      this.danTunnel = {
        "right": {},
        "top": {},
        "bottom": {}
      };
      this.danIndex = 0;
      this.container.innerHTML = "<div class=\"ec-danMa-item ec-danMa-item--demo\"></div>";
    },
    "draw": function (_0x51ee1a) {
      if (this.showing) {
        {
          const _0x36e538 = this.height,
            _0x197822 = this.container.offsetWidth,
            _0x2c7241 = this.container.offsetHeight,
            _0x16ffc3 = parseInt(_0x2c7241) / parseInt(_0x36e538),
            _0x56d559 = _0xd53076 => {
              const _0x27a4f9 = _0xd53076.offsetWidth || parseInt(_0xd53076.style.width),
                _0x51c2c1 = _0xd53076.getBoundingClientRect().right || this.container.getBoundingClientRect().right + _0x27a4f9;
              return this.container.getBoundingClientRect().right - _0x51c2c1;
            },
            _0x36a32b = _0x1a36f2 => (_0x197822 + _0x1a36f2) / 5,
            _0x2f6791 = (_0xbbf721, _0x379b47, _0x4f2c19) => {
              {
                const _0x44c420 = _0x197822 / _0x36a32b(_0x4f2c19);
                for (let _0x5a3ad4 = 0; this.unlimited || _0x5a3ad4 < _0x16ffc3; _0x5a3ad4++) {
                  {
                    const _0x45fee3 = this.danTunnel[_0x379b47][_0x5a3ad4 + ""];
                    if (_0x45fee3 && _0x45fee3.length) {
                      {
                        if (_0x379b47 !== "right") continue;
                        for (let _0x5b0bf9 = 0; _0x5b0bf9 < _0x45fee3.length; _0x5b0bf9++) {
                          const _0x24f775 = _0x56d559(_0x45fee3[_0x5b0bf9]) - 10;
                          if (_0x24f775 <= _0x197822 - _0x44c420 * _0x36a32b(parseInt(_0x45fee3[_0x5b0bf9].style.width)) || _0x24f775 <= 0) {
                            break;
                          }
                          if (_0x5b0bf9 === _0x45fee3.length - 1) return this.danTunnel[_0x379b47][_0x5a3ad4 + ""].push(_0xbbf721), _0xbbf721.addEventListener("animationend", () => {
                            this.danTunnel[_0x379b47][_0x5a3ad4 + ""].splice(0, 1);
                          }), _0x5a3ad4 % _0x16ffc3;
                        }
                      }
                    } else return this.danTunnel[_0x379b47][_0x5a3ad4 + ""] = [_0xbbf721], _0xbbf721.addEventListener("animationend", () => {
                      this.danTunnel[_0x379b47][_0x5a3ad4 + ""].splice(0, 1);
                    }), _0x5a3ad4 % _0x16ffc3;
                  }
                }
                return -1;
              }
            };
          Object.prototype.toString.call(_0x51ee1a) !== "[object Array]" && (_0x51ee1a = [_0x51ee1a]);
          const _0x470deb = document.createDocumentFragment();
          for (let _0x2b33de = 0; _0x2b33de < _0x51ee1a.length; _0x2b33de++) {
            _0x51ee1a[_0x2b33de].type = this.number2Type(_0x51ee1a[_0x2b33de].type);
            !_0x51ee1a[_0x2b33de].color && (_0x51ee1a[_0x2b33de].color = 16777215);
            const _0x37192e = document.createElement("div");
            _0x37192e.classList.add("ec-danMa-item");
            _0x37192e.classList.add("ec-danMa-" + _0x51ee1a[_0x2b33de].type);
            _0x51ee1a[_0x2b33de].border ? _0x37192e.innerHTML = "<span style=\"border:" + _0x51ee1a[_0x2b33de].border + "\">" + _0x51ee1a[_0x2b33de].text + "</span>" : _0x37192e.innerHTML = _0x51ee1a[_0x2b33de].text;
            _0x37192e.style.opacity = this.opacity;
            _0x37192e.style.color = this.number2Color(_0x51ee1a[_0x2b33de].color);
            _0x37192e.addEventListener("animationend", () => {
              this.container.removeChild(_0x37192e);
            });
            const _0x578742 = this._measure(_0x51ee1a[_0x2b33de].text);
            let _0x38bda7;
            switch (_0x51ee1a[_0x2b33de].type) {
              case "right":
                _0x38bda7 = _0x2f6791(_0x37192e, _0x51ee1a[_0x2b33de].type, _0x578742);
                if (_0x38bda7 >= 0) {
                  _0x37192e.style.width = _0x578742 + 1 + "px";
                  _0x37192e.style.top = _0x36e538 * _0x38bda7 + "px";
                }
                break;
              case "top":
                _0x38bda7 = _0x2f6791(_0x37192e, _0x51ee1a[_0x2b33de].type);
                if (_0x38bda7 >= 0) {
                  _0x37192e.style.top = _0x36e538 * _0x38bda7 + "px";
                }
                break;
              case "bottom":
                _0x38bda7 = _0x2f6791(_0x37192e, _0x51ee1a[_0x2b33de].type);
                _0x38bda7 >= 0 && (_0x37192e.style.bottom = _0x36e538 * _0x38bda7 + "px");
                break;
              default:
                XMlayEr.tips.msg("Can't handled danMa type: " + _0x51ee1a[_0x2b33de].type);
            }
            _0x38bda7 >= 0 && (_0x37192e.classList.add("ec-danMa-move"), _0x37192e.style.animationDuration = this._danAnimation(_0x51ee1a[_0x2b33de].type), _0x470deb.appendChild(_0x37192e));
          }
          this.container.appendChild(_0x470deb);
          return _0x470deb;
        }
      }
    },
    "htmlEncode": function (_0x19b6a8) {
      return _0x19b6a8.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;");
    },
    "hide": function () {
      this.showing = false;
      this.clear();
    },
    "show": function () {
      this.seek();
      this.showing = true;
    },
    "send": function (_0x21d06b) {
      var _0xdcbb21 = document.referrer;
      _0xdcbb21 == "" && (_0xdcbb21 = document.URL);
      const _0x5c2857 = {
        "text": _0x21d06b.text,
        "color": _0x21d06b.color,
        "type": _0x21d06b.type,
        "time": XMlayEr.void.video.currentTime,
        "player": XMlayEr.danMu.dm_api[0][3],
        "size": "32px",
        "referer": _0xdcbb21
      };
      this.apiBackend.send(_0x5c2857, function (_0xa59427) {
        {
          XMlayEr.danMu.dan.splice(this.danIndex, 0, _0xa59427);
          XMlayEr.danMu.danIndex++;
          const _0x332091 = {
            "text": XMlayEr.danMu.htmlEncode(_0xa59427.text),
            "color": _0xa59427.color,
            "type": _0xa59427.type,
            "border": "2px solid #24a5ff"
          };
          XMlayEr.danMu.draw(_0x332091);
          let _0x27149d = $(".dm-input");
          _0x27149d.val("");
          let _0x5f3b9d = setInterval(function () {
            {
              let _0x2b9959 = Number(_0x27149d.data("time")) - 1;
              _0x27149d.data("time", _0x2b9959).attr("placeholder", _0x2b9959 + "såè§£é¤å»ç»").attr("disabled", true);
              if (_0x2b9959 <= 0) {
                _0x27149d.data("time", 10).attr("placeholder", "来发个弹幕吧~").attr("disabled", false);
                clearInterval(_0x5f3b9d);
              }
            }
          }, 1000);
        }
      });
    },
    "getFontSize": function (_0xe47f2c) {
      const _0x2a1baf = function (_0x295060, _0x55102a, _0x3c5d02) {
          return Math.max(Math.min(_0x295060, Math.max(_0x55102a, _0x3c5d02)), Math.min(_0x55102a, _0x3c5d02));
        },
        _0x2c9d96 = document.getElementById("player").clientWidth;
      if (typeof _0xe47f2c === "number") {
        return _0x2a1baf(_0xe47f2c, 12, _0x2c9d96);
      }
      if (typeof _0xe47f2c === "string" && _0xe47f2c.endsWith("%")) {
        {
          const _0x107c03 = parseFloat(_0xe47f2c) / 100;
          return _0x2a1baf(_0x2c9d96 * _0x107c03, 12, _0x2c9d96);
        }
      }
      return _0xe47f2c;
    },
    "set": function (_0xcc2c15, _0x38b44f, _0x3b29a3) {
      _0x3b29a3 && XMlayEr.cookie.Set("d_set" + _0xcc2c15, [_0xcc2c15, _0x38b44f, _0x3b29a3], 7);
      switch (_0xcc2c15) {
        case 1:
          {
            this.speedRate = _0x38b44f;
            break;
          }
        case 2:
          {
            let _0x9a53d0 = this.getFontSize(_0x38b44f);
            $(".ec-danMa").css("font-size", _0x9a53d0);
            this.height = _0x9a53d0 + 5;
            break;
          }
        case 3:
          {
            this.opacity = _0x38b44f;
            break;
          }
        case 4:
          {
            {
              $(".ec-danMa").css("bottom", _0x38b44f);
              break;
            }
          }
        default:
          break;
      }
    },
    "content": function () {
      $(".dm-bnt").click(function () {
        $(".art-bottom").hide();
        $(".dm-box").removeClass("dm-wap");
        $(".player-list-off").addClass("dm-off").removeClass("off");
        $(".dm-off").click(function () {
          $(".art-bottom").show();
          $(".dm-box").addClass("dm-wap");
          $(".player-list-off").removeClass("dm-off").addClass("off");
        });
      });
      $(".art-bottom,.dm-box-cc").click(function () {
        $(".dm-set-box,.dm-style-box").removeClass("ec-show");
      });
      let _0x2920de = $(".dm-box-cc"),
        _0x5e9e77 = XMlayEr.cookie.Get("dm-box-cc"),
        _0x3d88e4 = XMlayEr.cookie.Get("content_dmP-1"),
        _0x3b4d01 = XMlayEr.cookie.Get("content_dmP-2"),
        _0xf6ce67 = $(".content_dmP-1 .item"),
        _0x2983fc = $(".content_dmP-2 .item"),
        _0x2729f9 = function (_0x2e265b, _0x37ce61, _0x457962) {
          (_0x2e265b !== undefined || _0x2e265b !== "") && _0x37ce61.eq(_0x2e265b).addClass("on-1").siblings().removeClass("on-1");
          _0x37ce61.click(function () {
            $(this).addClass("on-1").siblings().removeClass("on-1");
            XMlayEr.cookie.Set(_0x457962, $("." + _0x457962 + " .item").index(this), 7);
          });
        };
      _0x2729f9(_0x3d88e4, _0xf6ce67, "content_dmP-1");
      _0x2729f9(_0x3b4d01, _0x2983fc, "content_dmP-2");
      $(".dm-box-t-img").click(function () {
        $(".dm-set-box").removeClass("ec-show");
        $(".dm-style-box").toggleClass("ec-show");
      });
      let _0xdd20a2 = function () {
        let _0x4ee5fa = $(".content_dmP-2 .on-1").data("color"),
          _0x1b1ded = $(".content_dmP-1 .on-1").data("type"),
          _0x4fc569 = $(".dm-input").val();
        if (XMlayEr.empty(_0x4fc569)) XMlayEr.tips.msg("要输入弹幕内容啊喂");else _0x4fc569.length > 22 ? XMlayEr.tips.msg("å¼¹å¹åå®¹é¿åº¦æå¤§30ä½!!!") : XMlayEr.danMu.send({
          "text": _0x4fc569,
          "color": _0x4ee5fa,
          "type": _0x1b1ded
        });
      };
      $(".dm-input").keydown(function (_0x5e19ce) {
        _0x5e19ce.keyCode === 13 && _0xdd20a2();
      });
      $(".dm-send").click(function () {
        _0xdd20a2();
      });
      _0x5e9e77 === "1" && (XMlayEr.danMu.hide(), _0x2920de.addClass("dm-box-cc2").data("id", "1"));
      _0x2920de.click(function () {
        $(this).data("id") === "1" ? (XMlayEr.danMu.show(), XMlayEr.cookie.Del("dm-box-cc"), $(this).removeClass("dm-box-cc2").data("id", "0")) : (XMlayEr.danMu.hide(), XMlayEr.cookie.Set("dm-box-cc", "1", 7), $(this).addClass("dm-box-cc2").data("id", "1"));
      });
      let _0x208453 = [["弹幕速度", "ææ¢", "è¾æ¢", "éä¸­", "æå¿«", "è¾å¿«"], ["字体大小", "é»è®¤", "æå°", "è¾å°", "éä¸­", "è¾å¤§", "æå¤§"], ["ä¸éæåº¦", "100%", "75%", "50%", "25%", "0%"], ["å¼¹å¹èå´", "1/4", "åå±", "3/4"]],
        _0x3f93a5 = [["", "0.5", "0.8", "1", "1.5", "2"], ["", XMlayEr.danMu.height, "1%", "2%", "3%", "4%", "5%"], ["", "1", "0.75", "0.5", "0.25", "0"], ["", "60%", "45%", "10%"]];
      $(".set-toggle").append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>");
      let _0x414da5 = "",
        _0xd01024 = null;
      for (let _0x8e412e = 0; _0x8e412e < _0x208453.length; _0x8e412e++) {
        let _0x198310 = "";
        for (let _0x617d90 = 0; _0x617d90 < _0x208453[_0x8e412e].length; _0x617d90++) {
          _0x617d90 === 0 ? _0x198310 = _0x198310 + "<div class=\"flex between br\"><span class=\"dm-set-label flex\"><i><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg></i>" + _0x208453[_0x8e412e][_0x617d90] + "</span></div>" : _0x198310 = _0x198310 + "<div class=\"flex between dm-n2\" data-time=\"" + _0x3f93a5[_0x8e412e][_0x617d90] + "\"><span class=\"dm-set-label flex\"><i></i>" + _0x208453[_0x8e412e][_0x617d90] + "</span></div>";
        }
        _0x414da5 = _0x414da5 + "<div class=\"dm-set-list\">" + _0x198310 + "</div>";
        let _0x3400b0 = XMlayEr.cookie.Get("d_set" + (_0x8e412e + 1));
        if (_0x3400b0) {
          {
            let _0x2ca177 = _0x3400b0.split(",");
            XMlayEr.danMu.set(Number(_0x2ca177[0]), _0x2ca177[1]);
            $(".dm-set-box .dm-set-list").eq(0).children().eq(_0x8e412e).find("span").text(_0x2ca177[2]);
          }
        }
      }
      $(".dm-set-box").append(_0x414da5);
      $(".dm-box-set").click(function () {
        $(".dm-style-box").removeClass("ec-show");
        $(".dm-set-box").toggleClass("ec-show");
      });
      $("#dm_n1 .between").click(function () {
        let _0x201c9d = $(this).data("id");
        $(".dm-set-box .dm-set-list").eq(_0x201c9d).addClass("ds-set-show").siblings().removeClass("ds-set-show");
        _0xd01024 = _0x201c9d;
      });
      $(".dm-set-box .br").click(function () {
        $(".dm-set-box .dm-set-list").eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
      });
      $(".dm-n2").click(function () {
        let _0x5c6e59 = $(this).text(),
          _0x2622fa = $(".dm-set-box .dm-set-list");
        _0x2622fa.eq(0).children().eq(_0xd01024 - 1).find("span").text(_0x5c6e59);
        _0x2622fa.eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
        let _0x569af7 = $(this).data("time");
        if (_0x5c6e59 !== "é»è®¤") XMlayEr.danMu.set(_0xd01024, _0x569af7, _0x5c6e59);else {
          XMlayEr.cookie.Del("d_set2");
        }
      });
    }
  },
  "list": {
    "html": function () {
      if (XMlayEr.html) {
        let _0x28367b = "<div class=\"art-control yxq-vod-list\" data-index=\"50\"><i class=\"art-icon hint--rounded hint--top\" aria-label=\"选集\"><svg t=\"1697209271632\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12264\" width=\"18\" height=\"18\"><path d=\"M62 152h105.356v105.356h-105.356v-105.356zM263.937 152h698.063v105.356h-698.063v-105.356zM62 459.237h105.356v105.356h-105.356v-105.356zM263.937 459.237h698.063v105.356h-698.063v-105.356zM62 766.644h105.356v105.356h-105.356v-105.356zM263.937 766.644h698.063v105.356h-698.063v-105.356z\" p-id=\"12265\" fill=\"#ffffff\"></path></svg></i></div>";
        $(".art-control-playAndPause").after(_0x28367b);
        $(".yxq-vod-list").click(function () {
          XMlayEr.VodList.initial();
        });
      }
    },
    "next": function () {
      if (XMlayEr.next0 || XMlayEr.next) {
        let _0x5efa74 = "<div class=\"art-control ec-next\" data-index=\"40\"><i class=\"art-icon hint--rounded hint--top\" aria-label=\"ä¸ä¸é\"><svg t=\"1697202769049\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4237\" width=\"41\" height=\"41\"><path d=\"M853.333333 204.8h-68.266666c-20.48 0-34.133333 13.653333-34.133334 34.133333v546.133334c0 17.066667 17.066667 34.133333 34.133334 34.133333h68.266666c20.48 0 34.133333-13.653333 34.133334-34.133333V238.933333c0-20.48-17.066667-34.133333-34.133334-34.133333zM614.4 467.626667L256 235.52C208.213333 204.8 170.666667 228.693333 170.666667 283.306667v484.693333c0 58.026667 37.546667 78.506667 85.333333 47.786667l358.4-238.933334c47.786667-30.72 47.786667-78.506667 0-109.226666z\" fill=\"#ffffff\" p-id=\"4238\"></path></svg></i></div>";
        $(".art-control-playAndPause").after(_0x5efa74);
        $(".ec-next").click(function () {
          XMlayEr.next0 ? top.location.href = XMlayEr.next0 : self.location.href = XMlayEr.next;
        });
      }
    },
    "autoNext": function () {
      XMlayEr.void.on("video:ended", function () {
        {
          if (!!XMlayEr.next0 || !!XMlayEr.next) {
            box.children().append("<div class=\"pop-msg vague2 again\"><div class=\"again-icon\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1007.4674 42.036669c-12.751909-12.751909-38.255728-12.751909-51.007638 0l-95.63932 95.63932c-57.383592-57.383592-133.895048-95.63932-210.406505-121.143139C376.247886-53.602651 95.70588 105.796216 19.194424 373.586313c-76.511456 274.166051 82.887411 554.708057 350.677507 631.219513 274.166051 76.511456 554.708057-82.887411 631.219514-350.677507 12.751909-38.255728-12.751909-76.511456-51.007638-89.263366s-76.511456 12.751909-89.263365 51.007637c-25.503819 89.263366-89.263366 165.774822-165.774822 216.78246-172.150776 102.015275-395.30919 38.255728-497.324465-133.895049-82.887411-140.271003-63.759547-312.421779 44.631683-433.564918 133.895048-146.646958 369.805371-159.398867 516.452329-19.127864l-114.767184 114.767184c-6.375955 6.375955-6.375955 12.751909-6.375955 19.127864 0 19.127864 19.127864 38.255728 38.255728 38.255728h312.42178c12.751909 0 31.879773-12.751909 31.879773-31.879773V67.540488c0-6.375955-6.375955-12.751909-12.751909-25.503819z\"></path></svg></div><div class=\"pop-content\"><span id=\"count2\">5</span>s后自动播放下一集</div></div>");
            $(".pause-ad").remove();
            let _0xac8c90 = setTimeout(function () {
              if (XMlayEr.next0) {
                top.location.href = XMlayEr.next0;
              } else self.location.href = XMlayEr.next;
            }, 5000);
            $(".again").click(function () {
              clearTimeout(_0xac8c90);
              $(".again").remove();
              XMlayEr.void.play();
            });
            XMlayEr.void.on("play", function () {
              clearTimeout(_0xac8c90);
              $(".again").remove();
            });
          }
        }
      });
    }
  },
  "broadside": function () {
    let _0x2b5358 = $(".broadside");
    _0x2b5358.append("<div class=\"ec-lock\" data-id=\"1\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z\"></path></svg></div>");
    let _0x1685f9 = $(".ec-lock");
    _0x1685f9.click(function () {
      Number(_0x1685f9.data("id")) === 1 ? (_0x1685f9.html("<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m128-288H384V320c0-70.4 57.6-128 128-128s128 57.6 128 128v128z\"></path></svg>").data("id", "2"), box.addClass("lock-hide")) : (_0x1685f9.html("<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z\"></path></svg>").data("id", "1"), box.removeClass("lock-hide"));
    });
    _0x2b5358.append("<div class=\"ec-change\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z\"></path></svg></div>");
    let _0x378d53 = 0,
      _0x1472b1 = $("video");
    $(".ec-change").click(function () {
      switch (_0x378d53) {
        case 0:
          _0x1472b1.addClass("along1");
          ++_0x378d53;
          break;
        case 1:
          _0x1472b1.removeClass("along1");
          ++_0x378d53;
          _0x1472b1.addClass("along2");
          break;
        case 2:
          _0x1472b1.removeClass("along2");
          ++_0x378d53;
          _0x1472b1.addClass("along3");
          break;
        case 3:
          _0x1472b1.removeClass("along3");
          _0x378d53 = 0;
          break;
      }
    });
    _0x2b5358.append("<div class=\"ec-pip\" data-id=\"1\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M849.5 174.5a37.50000029 37.50000029 0 0 1 37.50000029 37.50000029v262.49999942h-75.00000058V249.49999971H212.00000029v525.00000058h225v74.99999971H174.5a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029V212.00000029a37.50000029 37.50000029 0 0 1 37.50000029-37.50000029h675z m0 375.00000029a37.50000029 37.50000029 0 0 1 37.50000029 37.49999942v225a37.50000029 37.50000029 0 0 1-37.50000029 37.50000029h-299.99999971a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029v-225a37.50000029 37.50000029 0 0 1 37.50000029-37.49999942h299.99999971z\"></path></svg></div>");
    let _0x4e7fb0 = $("video")[0];
    $(".ec-pip").click(async () => {
      try {
        if (document.pictureInPictureEnabled && !_0x4e7fb0.disablePictureInPicture) {
          {
            if (document.pictureInPictureElement) {
              await document.exitPictureInPicture();
            } else await _0x4e7fb0.requestPictureInPicture();
          }
        } else _0x4e7fb0.webkitSupportsPresentationMode && typeof _0x4e7fb0.webkitSetPresentationMode === "function" ? _0x4e7fb0.webkitSetPresentationMode(_0x4e7fb0.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture") : $(".ec-pip").hide();
      } catch (_0x19d666) {
        {
          $(".ec-pip").hide();
          throw _0x19d666;
        }
      }
    });
  },
  "secondToTime": function (_0x5eda8c) {
    const _0x4ead5c = _0x43b50c => _0x43b50c < 10 ? "0" + _0x43b50c : String(_0x43b50c),
      _0x3a47ea = Math.floor(_0x5eda8c / 3600),
      _0x5c9d15 = Math.floor((_0x5eda8c - _0x3a47ea * 3600) / 60),
      _0x12d20e = Math.floor(_0x5eda8c - _0x3a47ea * 3600 - _0x5c9d15 * 60);
    return (_0x3a47ea > 0 ? [_0x3a47ea, _0x5c9d15, _0x12d20e] : [_0x5c9d15, _0x12d20e]).map(_0x4ead5c).join(":");
  },
  "VodList": {
    "initial": () => {
      if ($(".yxq-listbox").length < 1) {
        {
          let _0xf34dc7 = $(".art-video-player");
          _0xf34dc7.prepend("<div class=\"vodlist-of danmu-hide\" style=\"display: none;\"></div><div class=\"yxq-listbox\"><div class=\"anthology-wrap\"></div></div></div>");
        }
      }
      $(document).on("click", ".vodlist-of", function () {
        XMlayEr.VodList.Off();
      });
      if ($(".normal-title-wrap").length < 1) {
        let _0x5858cd = $(".anthology-wrap");
        XMlayEr.html != "" ? _0x5858cd.html(XMlayEr.html) : _0x5858cd.html("<div class=\"yxq-show\">没获取到选集内容</div>");
      }
    },
    "Off": () => {
      $(".vodlist-of,.r-button").hide();
      $(".yxq-listbox").removeClass("yxq-stting");
    },
    "Tab": () => {
      $(".yxq-list").toggle();
      XMlayEr.VodList.TabList();
    },
    "TabList": () => {
      $(".yxq-list a").click(function () {
        $(this).addClass("yxq-this").siblings().removeClass("yxq-this");
        let _0x1e5a52 = $(".yxq-list a").index(this),
          _0x4d495a = $(".scroll-area .yxq-selset-list").eq(_0x1e5a52);
        _0x4d495a.addClass("yxq-show").siblings().removeClass("yxq-show");
        $(".yxq-list").hide();
      });
    },
    "Next": _0x324454 => {
      console.log(_0x324454);
      self.location.href = _0x324454;
    }
  },
  "LoadAnimation": function () {
    $("#loading").hide();
    XMlayEr.void.play();
    let _0x177c6c = Number(XMlayEr.cookie.Get(url, 2)),
      _0x36aec9 = XMlayEr.secondToTime(_0x177c6c);
    if (_0x36aec9 !== "00:00" && _0x36aec9 !== "NaN:NaN") {
      $(".ec-remember").html("<i class=\"art-icon art-icon-close s-on\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z\"></path></svg></i>上次看到<em>" + _0x36aec9 + "</em><span class=\"t-color\">继续上次播放</span>").show();
      $(".ec-remember span").click(function () {
        $(".ec-remember").html("<p></p>").hide();
        XMlayEr.void.currentTime = _0x177c6c;
      });
      $(".ec-remember svg").click(function () {
        $(".ec-remember").html("<p></p>").hide();
      });
      let _0x290a04 = setTimeout(function () {
        $(".ec-remember").html("<p></p>").hide();
        clearTimeout(_0x290a04);
      }, 6000);
    }
  }
};
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) document.title = "o(╥﹏╥)o你去哪了？快回来！- " + OriginTitile, clearTimeout(titleTime);else {
    document.title = "๑乛◡乛๑亲爱的，欢迎回来~• - " + OriginTitile;
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 1500);
  }
});