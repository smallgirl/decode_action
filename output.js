//Mon Nov 17 2025 09:47:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const lodash = require("lodash");
const fs = require("fs");
const axios = require("axios");
const {
  time,
  count
} = require("console");
const {
  url
} = require("inspector");
const {
  post
} = require("./utils/http");
const {
  type
} = require("os");
function search(_0xf14c4f, _0x1f5449, _0x194f6a) {
  return new Promise((_0x48b0cd, _0x2e0e5c) => {
    const _0x5b9cf6 = App.signature(_0xf14c4f, String(_0x1f5449 + 1), _0x194f6a);
    post("search", {
      search: _0xf14c4f,
      page: _0x1f5449 + 1,
      type: _0x194f6a,
      sing: _0x5b9cf6
    }).then(_0x58e0b9 => {
      if (!_0x58e0b9?.["data"]) {
        return _0x2e0e5c("无数据");
      }
      switch (_0x194f6a) {
        case "album":
          const _0x14e7b4 = [];
          _0x58e0b9?.["data"]["forEach"](_0x2344e0 => {
            _0x14e7b4.push({
              id: _0x2344e0.id,
              name: _0x2344e0.name,
              singer: _0x2344e0.singer,
              artwork: _0x2344e0.artwork,
              publish_date: _0x2344e0.publish_date
            });
          });
          return _0x48b0cd(JSON.stringify({
            message: "获取数据成功",
            has_next_page: true,
            data: {
              albums: _0x14e7b4
            }
          }));
        case "song":
          const _0x32fca3 = [];
          _0x58e0b9?.["data"]["forEach"](_0x2be188 => {
            _0x32fca3.push({
              id: _0x2be188.id,
              name: _0x2be188.name,
              singer: _0x2be188.singer,
              album: _0x2be188.album,
              artwork: _0x2be188.artwork,
              file: {
                size_128k: _0x2be188.size_128K,
                size_320k: _0x2be188.size_320k,
                size_flac: _0x2be188.size_flac,
                size_hires: _0x2be188.size_hires
              }
            });
          });
          return _0x48b0cd(JSON.stringify({
            message: "获取数据成功",
            has_next_page: true,
            data: {
              songs: _0x32fca3
            }
          }));
        default:
          return _0x2e0e5c("不支持搜索该类型");
      }
    }).catch(_0x38a6c7 => {
      _0x2e0e5c(_0x38a6c7);
    });
  });
}
function getAlbumInfo(_0x43648d, _0x21b69e, _0x19e10e) {
  return new Promise((_0x2bfb13, _0x577f3f) => {
    const _0x5d97cd = App.signature(_0x43648d);
    post("album/info/" + _0x43648d, {
      sing: _0x5d97cd
    }).then(_0x45c654 => {
      if (!_0x45c654?.["data"]?.["songs"]) {
        return _0x577f3f("无数据");
      }
      const _0x28fe4f = [];
      _0x45c654?.["data"]?.["songs"]["forEach"](_0x5bf527 => {
        _0x28fe4f.push({
          id: _0x5bf527.id,
          name: _0x5bf527.name,
          singer: _0x5bf527.singer,
          album: _0x5bf527.album,
          artwork: _0x5bf527.artwork,
          file: {
            size_128k: _0x5bf527.size_128K,
            size_320k: _0x5bf527.size_320k,
            size_flac: _0x5bf527.size_flac,
            size_hires: _0x5bf527.size_hires
          }
        });
      });
      return _0x2bfb13(JSON.stringify({
        message: "获取数据成功",
        has_next_page: false,
        data: {
          songs: _0x28fe4f
        }
      }));
    }).catch(_0x4baa1a => {
      _0x577f3f(_0x4baa1a);
    });
  });
}
function getPlayListInfo(_0x5aded5, _0x32ba3b, _0x330b92) {
  return new Promise((_0x447b30, _0x508ad3) => {
    const _0x5449c0 = App.signature(_0x5aded5, String(_0x32ba3b + 1));
    post("playlist/info", {
      sing: _0x5449c0,
      id: _0x5aded5,
      page: _0x32ba3b + 1
    }).then(_0x14c960 => {
      if (!_0x14c960?.["data"]?.["songs"]) {
        return _0x508ad3("无数据");
      }
      const _0x54c108 = [];
      _0x14c960?.["data"]?.["songs"]["forEach"](_0x1f622d => {
        _0x54c108.push({
          id: _0x1f622d.id,
          name: _0x1f622d.name,
          singer: _0x1f622d.singer,
          album: _0x1f622d.album,
          artwork: _0x1f622d.artwork,
          file: {
            size_128k: _0x1f622d.size_128K,
            size_320k: _0x1f622d.size_320k,
            size_flac: _0x1f622d.size_flac,
            size_hires: _0x1f622d.size_hires
          }
        });
      });
      return _0x447b30(JSON.stringify({
        message: "获取数据成功",
        has_next_page: false,
        data: {
          songs: _0x54c108
        }
      }));
    }).catch(_0x555715 => {
      _0x508ad3(_0x555715);
    });
  });
}
function getTopListInfo(_0x5b4c70, _0x5bf47f, _0x3f639b) {
  return new Promise((_0x52bbca, _0x3b8b3e) => {
    axios.get("http://i.ijanz.cn/core/cs.php").then(_0x38caf9 => {
      if (!_0x38caf9.data) {
        _0x3b8b3e(JSON.stringify({
          message: "获取数据失败"
        }));
        return;
      }
      const _0x365ad3 = [];
      _0x38caf9.data.forEach(_0x3f8fd7 => {
        _0x365ad3.push({
          id: _0x3f8fd7.songid,
          name: _0x3f8fd7.title,
          singer: _0x3f8fd7.author,
          album: {
            id: "",
            name: _0x3f8fd7.album,
            artwork: _0x3f8fd7.pic
          },
          artwork: _0x3f8fd7.pic,
          file: {
            size_128k: 100,
            size_320k: 111,
            size_flac: 222,
            size_hires: 333
          }
        });
      });
      _0x52bbca(JSON.stringify({
        message: "获取数据成功",
        has_next_page: false,
        data: {
          songs: _0x365ad3
        }
      }));
    }).catch(_0x416293 => {
      _0x3b8b3e(JSON.stringify({
        message: "获取数据失败"
      }));
    });
  });
}
function getSongUrl(_0x297f7a, _0xe0db84, _0xef5711) {
  return new Promise((_0x19a443, _0x515cca) => {
    const _0xe70443 = App.signature(_0x297f7a, _0xe0db84);
    post("song/url/" + _0x297f7a + "/" + _0xe0db84, {
      sing: _0xe70443
    }).then(_0x455bf2 => {
      if (!_0x455bf2?.["data"]) {
        return _0x515cca("无数据");
      }
      _0x19a443(JSON.stringify({
        message: "获取数据成功",
        data: {
          url: _0x455bf2?.["data"],
          headers: {
            "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
          }
        }
      }));
    }).catch(_0x12a108 => {
      _0x515cca(_0x12a108);
    });
  });
}
function getLyric(_0x1ddc54, _0x151b94, _0x35a620) {
  return new Promise((_0x2a41a0, _0x4f93d8) => {
    const _0x26cd0b = App.signature(_0x1ddc54);
    post("lyric/" + _0x1ddc54, {
      sing: _0x26cd0b
    }).then(_0x263724 => {
      if (!_0x263724?.["data"]) {
        return _0x4f93d8("无数据");
      }
      lyric = _0x263724?.["data"]?.["lyric"];
      trans = _0x263724?.["data"]?.["trans"];
      _0x2a41a0(JSON.stringify({
        message: "获取数据成功",
        data: {
          lyric: lyric,
          trans: trans
        }
      }));
    }).catch(_0x3b506f => {
      _0x4f93d8(_0x3b506f);
    });
  });
}
function getSongInfo(_0x10e575, _0x44f5fe) {
  return new Promise((_0x60bd80, _0x2ee81b) => {
    const _0x50766f = App.signature(_0x10e575);
    post("song/info/" + _0x10e575, {
      sing: _0x50766f
    }).then(_0xb13586 => {
      if (!_0xb13586?.["data"]) {
        return _0x2ee81b("无数据");
      }
      item = _0xb13586.data;
      song = {
        id: item.songid,
        name: item.title,
        singer: item.author,
        album: {
          id: "",
          name: item.album,
          artwork: item.pic
        },
        artwork: item.pic,
        file: {
          size_128k: 100,
          size_320k: 111,
          size_flac: 222,
          size_hires: 333
        }
      };
      _0x60bd80(JSON.stringify({
        message: "获取数据成功",
        data: song
      }));
    }).catch(_0x1a6488 => {
      _0x2ee81b(_0x1a6488);
    });
  });
}
function getSongMoreQuality(_0x1efca0, _0x5f29b9) {
  return new Promise((_0x5991de, _0x35cbe8) => {
    const _0x47e072 = App.signature(_0x1efca0);
    post("song/quality/" + _0x1efca0, {
      sing: _0x47e072
    }).then(_0x260997 => {
      const _0x5420a1 = _0x260997?.["data"];
      if (!Array.isArray(_0x5420a1) || !_0x5420a1.length) {
        return _0x35cbe8("无数据");
      }
      const _0x4b20fb = new Set(["standard", "exhigh", "lossless", "hires"]);
      const _0xe872df = _0x5420a1.filter(_0x3c9b0e => !_0x4b20fb.has(_0x3c9b0e.key));
      if (!_0xe872df.length) {
        return _0x35cbe8("无更高音质");
      }
      _0x5991de(JSON.stringify({
        message: "获取数据成功",
        data: {
          quality: _0xe872df
        }
      }));
    }).catch(_0x1ef22f => {
      _0x35cbe8(_0x1ef22f);
    });
  });
}
module.exports = {
  search: search,
  getAlbumInfo: getAlbumInfo,
  getPlayListInfo: getPlayListInfo,
  getSongUrl: getSongUrl,
  getLyric: getLyric,
  getSongInfo: getSongInfo,
  getSongMoreQuality: getSongMoreQuality
};