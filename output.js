//Wed Jan 07 2026 01:24:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
    EVENT_NAMES,
    request,
    on,
    send
  } = globalThis.lx,
  CURRENT_VERSION = "1.1.0",
  VERSION_CHECK_URL = "https://13413.kstore.vip/lxmusic/changqing.json",
  qualitys = {
    "kg": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless"
    },
    "tx": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless"
    },
    "wy": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless"
    },
    "kw": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless"
    },
    "mg": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless"
    }
  },
  apis = {
    "kg": {
      "musicUrl"(_0x511619, _0x1b2169) {
        let _0x500877 = "";
        const _0x36a418 = _0x511619.hash;
        console.log(_0x1b2169, _0x36a418);
        _0x500877 = "https://music.haitangw.cc/kgqq/kg.php?type=mp3&id=" + _0x36a418 + "&level=" + _0x1b2169;
        return new Promise(_0x1590cf => {
          _0x1590cf(_0x500877);
        });
      }
    },
    "tx": {
      "musicUrl"(_0x2cd83b, _0x5365cc) {
        let _0x2d1672 = "";
        const _0x50c58e = _0x2cd83b.songmid;
        console.log(_0x5365cc, _0x50c58e);
        _0x2d1672 = "https://music.haitangw.cc/kgqq/qq.php?type=mp3&id=" + _0x50c58e + "&level=" + _0x5365cc;
        return new Promise(_0x2d0b3b => {
          _0x2d0b3b(_0x2d1672);
        });
      }
    },
    "wy": {
      "musicUrl"(_0x1e066f, _0x34cd7c) {
        let _0x539d92 = "";
        const _0x2f2a18 = _0x1e066f.songmid;
        console.log(_0x34cd7c, _0x2f2a18);
        _0x539d92 = "https://music.haitangw.cc/wy/wy.php?type=mp3&id=" + _0x2f2a18 + "&level=" + _0x34cd7c;
        return new Promise(_0x32a33d => {
          _0x32a33d(_0x539d92);
        });
      }
    },
    "kw": {
      "musicUrl"(_0x21bbfc, _0x41e91a) {
        let _0x12c513 = "";
        const _0xdcb515 = _0x21bbfc.songmid;
        console.log(_0x41e91a, _0xdcb515);
        _0x12c513 = "https://music.haitangw.cc/music/kw.php?type=mp3&id=" + _0xdcb515 + "&level=" + _0x41e91a;
        return new Promise(_0x23dd89 => {
          _0x23dd89(_0x12c513);
        });
      }
    },
    "mg": {
      "musicUrl"(_0x39057a, _0x4a488a) {
        let _0x410f65 = "";
        const _0x1cc462 = _0x39057a.songmid;
        console.log(_0x4a488a, _0x1cc462);
        _0x410f65 = "https://music.haitangw.cc/musicapi/mg.php?type=mp3&id=" + _0x1cc462 + "&level=" + _0x4a488a;
        return new Promise(_0x3d5b4f => {
          _0x3d5b4f(_0x410f65);
        });
      }
    }
  },
  compareVersions = (_0x62809b, _0x4533ae) => {
    const _0x54b014 = _0x62809b.split(".").map(Number),
      _0x39e138 = _0x4533ae.split(".").map(Number);
    for (let _0x59f154 = 0; _0x59f154 < Math.max(_0x54b014.length, _0x39e138.length); _0x59f154++) {
      {
        const _0x46f6a9 = _0x54b014[_0x59f154] || 0,
          _0x3b8c40 = _0x39e138[_0x59f154] || 0;
        if (_0x46f6a9 > _0x3b8c40) return 1;
        if (_0x46f6a9 < _0x3b8c40) return -1;
      }
    }
    return 0;
  },
  checkUpdate = async () => {
    return new Promise((_0x35995d, _0x5c7ed7) => {
      request(VERSION_CHECK_URL, {
        "method": "GET",
        "timeout": 3000
      }, (_0x272852, _0x43c8a6) => {
        {
          if (_0x272852 || _0x43c8a6.statusCode !== 200) {
            {
              console.log("检查更新失败:", _0x272852 || _0x43c8a6.statusMessage);
              _0x35995d(null);
              return;
            }
          }
          try {
            {
              const _0x3f62fd = _0x43c8a6.body;
              if (compareVersions(CURRENT_VERSION, _0x3f62fd.version) < 0) _0x35995d({
                "version": _0x3f62fd.version,
                "updateUrl": _0x3f62fd.updateUrl,
                "description": _0x3f62fd.description || ""
              });else {
                _0x35995d(null);
              }
            }
          } catch (_0x2fbc63) {
            console.log("解析版本信息失败:", _0x2fbc63);
            _0x35995d(null);
          }
        }
      });
    });
  };
on(EVENT_NAMES.request, ({
  source: _0xc04e37,
  action: _0x1b7bde,
  info: _0x4f73bc
}) => {
  switch (_0x1b7bde) {
    case "musicUrl":
      console.log(apis[_0xc04e37].musicUrl(_0x4f73bc.musicInfo, qualitys[_0xc04e37][_0x4f73bc.type]), _0xc04e37);
      return apis[_0xc04e37].musicUrl(_0x4f73bc.musicInfo, qualitys[_0xc04e37][_0x4f73bc.type]);
  }
});
checkUpdate().then(_0x482750 => {
  if (_0x482750) {
    const _0x4cb377 = "发现新版本 v" + _0x482750.version + "\n" + (_0x482750.description ? "更新内容: " + _0x482750.description + "\n" : "") + "请更新后使用";
    send(EVENT_NAMES.updateAlert, {
      "log": _0x4cb377,
      "updateUrl": _0x482750.updateUrl
    });
    console.log("发现新版本,需要更新,脚本将不会初始化:", _0x482750);
    return;
  } else console.log("当前已是最新版本,正常初始化"), send(EVENT_NAMES.inited, {
    "openDevTools": false,
    "sources": {
      "kg": {
        "name": "kg音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "tx": {
        "name": "tx音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "wy": {
        "name": "wy音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "kw": {
        "name": "kw音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "mg": {
        "name": "mg音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      }
    }
  });
}).catch(_0xde5401 => {
  console.log("检查更新出错,正常初始化:", _0xde5401);
  send(EVENT_NAMES.inited, {
    "openDevTools": false,
    "sources": {
      "kg": {
        "name": "kg音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "tx": {
        "name": "tx音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "wy": {
        "name": "wy音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "kw": {
        "name": "kw音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      },
      "mg": {
        "name": "mg音乐",
        "type": "music",
        "actions": ["musicUrl"],
        "qualitys": ["128k", "320k", "flac"]
      }
    }
  });
});