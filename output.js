//Wed Jan 07 2026 01:48:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
    EVENT_NAMES,
    request,
    on,
    send
  } = globalThis.lx,
  CURRENT_VERSION = "1.0.0",
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
      "musicUrl"(_0x21abba, _0x5048a6) {
        let _0x4a8ffc = "";
        const _0x489330 = _0x21abba.hash;
        console.log(_0x5048a6, _0x489330);
        _0x4a8ffc = "https://musicapi.haitangw.net/music/kg_song%E6%8D%A2%E6%BA%90%E7%89%88.php?type=mp3&id=" + _0x489330 + "&level=" + _0x5048a6;
        return new Promise(_0x155149 => {
          _0x155149(_0x4a8ffc);
        });
      }
    },
    "tx": {
      "musicUrl"(_0x537d1d, _0x25abbf) {
        let _0x320e74 = "";
        const _0x4336f5 = _0x537d1d.songmid;
        console.log(_0x25abbf, _0x4336f5);
        _0x320e74 = "https://musicapi.haitangw.net/music/qq_song_kw.php?type=mp3&id=" + _0x4336f5 + "&level=" + _0x25abbf;
        return new Promise(_0x2f1d37 => {
          _0x2f1d37(_0x320e74);
        });
      }
    },
    "wy": {
      "musicUrl"(_0x1c17e0, _0x1c71e6) {
        let _0x494aa6 = "";
        const _0x5c5a85 = _0x1c17e0.songmid;
        console.log(_0x1c71e6, _0x5c5a85);
        _0x494aa6 = "https://musicapi.haitangw.net/music/wy.php?type=mp3&id=" + _0x5c5a85 + "&level=" + _0x1c71e6;
        return new Promise(_0xae5fab => {
          _0xae5fab(_0x494aa6);
        });
      }
    },
    "kw": {
      "musicUrl"(_0x44d5a5, _0x404bd6) {
        let _0x4e35d4 = "";
        const _0x27f61b = _0x44d5a5.songmid;
        console.log(_0x404bd6, _0x27f61b);
        _0x4e35d4 = "https://musicapi.haitangw.net/music/kw.php?type=mp3&id=" + _0x27f61b + "&level=" + _0x404bd6;
        return new Promise(_0x205946 => {
          _0x205946(_0x4e35d4);
        });
      }
    },
    "mg": {
      "musicUrl"(_0x2ac81a, _0x20fe2a) {
        let _0x254173 = "";
        const _0x3157b8 = _0x2ac81a.songmid;
        console.log(_0x20fe2a, _0x3157b8);
        _0x254173 = "https://musicapi.haitangw.net/musicapi/mg.php?type=mp3&id=" + _0x3157b8 + "&level=" + _0x20fe2a;
        return new Promise(_0x200a7b => {
          _0x200a7b(_0x254173);
        });
      }
    }
  },
  compareVersions = (_0xca8739, _0x41f303) => {
    const _0x3b4240 = _0xca8739.split(".").map(Number),
      _0x36b60d = _0x41f303.split(".").map(Number);
    for (let _0x4af66f = 0; _0x4af66f < Math.max(_0x3b4240.length, _0x36b60d.length); _0x4af66f++) {
      const _0xea397 = _0x3b4240[_0x4af66f] || 0,
        _0x16c660 = _0x36b60d[_0x4af66f] || 0;
      if (_0xea397 > _0x16c660) return 1;
      if (_0xea397 < _0x16c660) return -1;
    }
    return 0;
  },
  checkUpdate = async () => {
    return new Promise((_0x5e1c36, _0x6e53c4) => {
      request(VERSION_CHECK_URL, {
        "method": "GET",
        "timeout": 3000
      }, (_0x175933, _0x463b87) => {
        if (_0x175933 || _0x463b87.statusCode !== 200) {
          console.log("检查更新失败:", _0x175933 || _0x463b87.statusMessage);
          _0x5e1c36(null);
          return;
        }
        try {
          const _0x4a8189 = _0x463b87.body;
          compareVersions(CURRENT_VERSION, _0x4a8189.version) < 0 ? _0x5e1c36({
            "version": _0x4a8189.version,
            "updateUrl": _0x4a8189.updateUrl,
            "description": _0x4a8189.description || ""
          }) : _0x5e1c36(null);
        } catch (_0x2a0972) {
          console.log("解析版本信息失败:", _0x2a0972);
          _0x5e1c36(null);
        }
      });
    });
  };
on(EVENT_NAMES.request, ({
  source: _0x20d572,
  action: _0x4f1970,
  info: _0x230367
}) => {
  switch (_0x4f1970) {
    case "musicUrl":
      console.log(apis[_0x20d572].musicUrl(_0x230367.musicInfo, qualitys[_0x20d572][_0x230367.type]), _0x20d572);
      return apis[_0x20d572].musicUrl(_0x230367.musicInfo, qualitys[_0x20d572][_0x230367.type]);
  }
});
checkUpdate().then(_0x2346ba => {
  if (_0x2346ba) {
    const _0x4ff4f0 = "发现新版本 v" + _0x2346ba.version + "\n" + (_0x2346ba.description ? "更新内容: " + _0x2346ba.description + "\n" : "") + "请更新后使用";
    send(EVENT_NAMES.updateAlert, {
      "log": _0x4ff4f0,
      "updateUrl": _0x2346ba.updateUrl
    });
    console.log("发现新版本,需要更新,脚本将不会初始化:", _0x2346ba);
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
}).catch(_0x5dfa39 => {
  console.log("检查更新出错,正常初始化:", _0x5dfa39);
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