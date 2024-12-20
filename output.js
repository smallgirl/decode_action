//Fri Dec 20 2024 03:21:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  CryptoJs = require("crypto-js"),
  he = require("he"),
  pageSize = 20;
function formatMusicItem(_0x1d843e) {
  var _0x353626, _0x31929b, _0x49ce4f;
  const _0x17af0e = _0x1d843e.albumid || ((_0x353626 = _0x1d843e.album) === null || _0x353626 === void 0 ? void 0 : _0x353626.id),
    _0x1816c5 = _0x1d843e.albummid || ((_0x31929b = _0x1d843e.album) === null || _0x31929b === void 0 ? void 0 : _0x31929b.mid),
    _0x25afe8 = _0x1d843e.albumname || ((_0x49ce4f = _0x1d843e.album) === null || _0x49ce4f === void 0 ? void 0 : _0x49ce4f.title);
  return {
    "id": _0x1d843e.id || _0x1d843e.songid,
    "songmid": _0x1d843e.mid || _0x1d843e.songmid,
    "title": _0x1d843e.title || _0x1d843e.songname,
    "artist": _0x1d843e.singer.map(_0x371fc0 => _0x371fc0.name).join(", "),
    "artwork": _0x1816c5 ? "https://y.gtimg.cn/music/photo_new/T002R800x800M000" + _0x1816c5 + ".jpg" : undefined,
    "album": _0x25afe8,
    "lrc": _0x1d843e.lyric || undefined,
    "albumid": _0x17af0e,
    "albummid": _0x1816c5
  };
}
function formatAlbumItem(_0x220833) {
  return {
    "id": _0x220833.albumID || _0x220833.albumid,
    "albumMID": _0x220833.albumMID || _0x220833.album_mid,
    "title": _0x220833.albumName || _0x220833.album_name,
    "artwork": _0x220833.albumPic || "https://y.gtimg.cn/music/photo_new/T002R800x800M000" + (_0x220833.albumMID || _0x220833.album_mid) + ".jpg",
    "date": _0x220833.publicTime || _0x220833.pub_time,
    "singerID": _0x220833.singerID || _0x220833.singer_id,
    "artist": _0x220833.singerName || _0x220833.singer_name,
    "singerMID": _0x220833.singerMID || _0x220833.singer_mid,
    "description": _0x220833.desc
  };
}
function formatArtistItem(_0x431251) {
  return {
    "name": _0x431251.singerName,
    "id": _0x431251.singerID,
    "singerMID": _0x431251.singerMID,
    "avatar": _0x431251.singerPic,
    "worksNum": _0x431251.songNum
  };
}
const searchTypeMap = {
    0: "song",
    2: "album",
    1: "singer",
    3: "songlist",
    7: "song",
    12: "mv"
  },
  headers = {
    "referer": "https://y.qq.com",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "Cookie": "uin="
  };
async function searchBase(_0x325cc4, _0x50ccda, _0x23f374) {
  const _0x5d0742 = (await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg",
    "method": "POST",
    "data": {
      "req_1": {
        "method": "DoSearchForQQMusicDesktop",
        "module": "music.search.SearchCgiService",
        "param": {
          "num_per_page": pageSize,
          "page_num": _0x50ccda,
          "query": _0x325cc4,
          "search_type": _0x23f374
        }
      }
    },
    "headers": headers,
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return {
    "isEnd": _0x5d0742.req_1.data.meta.sum <= _0x50ccda * pageSize,
    "data": _0x5d0742.req_1.data.body[searchTypeMap[_0x23f374]].list
  };
}
async function searchMusic(_0x5a620b, _0x85aac7) {
  const _0x17aa9c = await searchBase(_0x5a620b, _0x85aac7, 0);
  return {
    "isEnd": _0x17aa9c.isEnd,
    "data": _0x17aa9c.data.map(formatMusicItem)
  };
}
async function searchAlbum(_0x5e9676, _0x491f68) {
  const _0x2482e5 = await searchBase(_0x5e9676, _0x491f68, 2);
  return {
    "isEnd": _0x2482e5.isEnd,
    "data": _0x2482e5.data.map(formatAlbumItem)
  };
}
async function searchArtist(_0x1f0309, _0x18a33a) {
  const _0x39b03d = await searchBase(_0x1f0309, _0x18a33a, 1);
  return {
    "isEnd": _0x39b03d.isEnd,
    "data": _0x39b03d.data.map(formatArtistItem)
  };
}
async function searchMusicSheet(_0x3aed8a, _0x57d014) {
  const _0x2add29 = await searchBase(_0x3aed8a, _0x57d014, 3);
  return {
    "isEnd": _0x2add29.isEnd,
    "data": _0x2add29.data.map(_0x361ba3 => ({
      "title": _0x361ba3.dissname,
      "createAt": _0x361ba3.createtime,
      "description": _0x361ba3.introduction,
      "playCount": _0x361ba3.listennum,
      "worksNums": _0x361ba3.song_count,
      "artwork": _0x361ba3.imgurl,
      "id": _0x361ba3.dissid,
      "artist": _0x361ba3.creator.name
    }))
  };
}
async function searchLyric(_0x7e3e74, _0x27c106) {
  const _0xe614df = await searchBase(_0x7e3e74, _0x27c106, 7);
  return {
    "isEnd": _0xe614df.isEnd,
    "data": _0xe614df.data.map(_0x273d2d => Object.assign(Object.assign({}, formatMusicItem(_0x273d2d)), {
      "rawLrcTxt": _0x273d2d.content
    }))
  };
}
function getQueryFromUrl(_0x6e7a08, _0x256060) {
  try {
    const _0x18576d = _0x256060.split("?");
    let _0x493eec = "";
    if (_0x18576d.length > 1) {
      _0x493eec = _0x18576d[1];
    } else {
      return _0x6e7a08 ? undefined : {};
    }
    const _0x115be4 = _0x493eec.split("&"),
      _0x4901b6 = {};
    return _0x115be4.forEach(_0x2cfe75 => {
      const _0x425f46 = _0x2cfe75.split("=");
      _0x4901b6[_0x425f46[0]] = decodeURIComponent(_0x425f46[1]);
    }), _0x6e7a08 ? _0x4901b6[_0x6e7a08] : _0x4901b6;
  } catch (_0x1653bd) {
    return _0x6e7a08 ? "" : {};
  }
}
function changeUrlQuery(_0x41f2f3, _0x2a948a) {
  const _0x2e603a = getQueryFromUrl(null, _0x2a948a);
  let _0x5470a8 = _0x2a948a.split("?")[0];
  const _0x59e526 = Object.assign(Object.assign({}, _0x2e603a), _0x41f2f3);
  let _0x5c34b5 = [];
  return Object.keys(_0x59e526).forEach(_0x2ff9e5 => {
    _0x59e526[_0x2ff9e5] !== undefined && _0x59e526[_0x2ff9e5] !== "" && _0x5c34b5.push(_0x2ff9e5 + "=" + encodeURIComponent(_0x59e526[_0x2ff9e5]));
  }), (_0x5470a8 + "?" + _0x5c34b5.join("&")).replace(/\?$/, "");
}
async function getAlbumInfo(_0x11361a) {
  const _0x2fefb9 = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 10000
        },
        "albumSonglist": {
          "method": "GetAlbumSongList",
          "param": {
            "albumMid": _0x11361a.albumMID,
            "albumID": 0,
            "begin": 0,
            "num": 999,
            "order": 2
          },
          "module": "music.musichallAlbum.AlbumSongList"
        }
      })
    }, "https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&format=json&inCharset=utf8&outCharset=utf-8"),
    _0xcb3c67 = (await (0, axios_1.default)({
      "url": _0x2fefb9,
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "musicList": _0xcb3c67.albumSonglist.data.songList.map(_0x1687d6 => {
      const _0x396671 = _0x1687d6.songInfo;
      return formatMusicItem(_0x396671);
    })
  };
}
async function getArtistSongs(_0x40d8ba, _0x5547dc) {
  const _0x4cffe5 = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 0
        },
        "singer": {
          "method": "get_singer_detail_info",
          "param": {
            "sort": 5,
            "singermid": _0x40d8ba.singerMID,
            "sin": (_0x5547dc - 1) * pageSize,
            "num": pageSize
          },
          "module": "music.web_singer_info_svr"
        }
      })
    }, "http://u.y.qq.com/cgi-bin/musicu.fcg"),
    _0x1e8e87 = (await (0, axios_1.default)({
      "url": _0x4cffe5,
      "method": "get",
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "isEnd": _0x1e8e87.singer.data.total_song <= _0x5547dc * pageSize,
    "data": _0x1e8e87.singer.data.songlist.map(formatMusicItem)
  };
}
async function getArtistAlbums(_0x313f2a, _0x10082b) {
  const _0x5f169a = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 0
        },
        "singerAlbum": {
          "method": "get_singer_album",
          "param": {
            "singermid": _0x313f2a.singerMID,
            "order": "time",
            "begin": (_0x10082b - 1) * pageSize,
            "num": pageSize / 1,
            "exstatus": 1
          },
          "module": "music.web_singer_info_svr"
        }
      })
    }, "http://u.y.qq.com/cgi-bin/musicu.fcg"),
    _0x416d19 = (await (0, axios_1.default)({
      "url": _0x5f169a,
      "method": "get",
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "isEnd": _0x416d19.singerAlbum.data.total <= _0x10082b * pageSize,
    "data": _0x416d19.singerAlbum.data.list.map(formatAlbumItem)
  };
}
async function getArtistWorks(_0x152dbf, _0x50260c, _0xfe822e) {
  if (_0xfe822e === "music") return getArtistSongs(_0x152dbf, _0x50260c);
  if (_0xfe822e === "album") {
    return getArtistAlbums(_0x152dbf, _0x50260c);
  }
}
async function getLyric(_0x4d4a21) {
  const _0x38658b = (await (0, axios_1.default)({
      "url": "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?songmid=" + _0x4d4a21.songmid + "&pcachetime=" + new Date().getTime() + "&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
      "headers": {
        "Referer": "https://y.qq.com",
        "Cookie": "uin="
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x1c9f86 = JSON.parse(_0x38658b.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ""));
  let _0x4e3617;
  if (_0x1c9f86.trans) {
    _0x4e3617 = he.decode(CryptoJs.enc.Base64.parse(_0x1c9f86.trans).toString(CryptoJs.enc.Utf8));
  }
  return {
    "rawLrc": he.decode(CryptoJs.enc.Base64.parse(_0x1c9f86.lyric).toString(CryptoJs.enc.Utf8)),
    "translation": _0x4e3617
  };
}
async function importMusicSheet(_0x55b8c5) {
  let _0x29d8d3;
  !_0x29d8d3 && (_0x29d8d3 = (_0x55b8c5.match(/https?:\/\/i\.y\.qq\.com\/n2\/m\/share\/details\/taoge\.html\?.*id=([0-9]+)/) || [])[1]);
  !_0x29d8d3 && (_0x29d8d3 = (_0x55b8c5.match(/https?:\/\/y\.qq\.com\/n\/ryqq\/playlist\/([0-9]+)/) || [])[1]);
  !_0x29d8d3 && (_0x29d8d3 = (_0x55b8c5.match(/^(\d+)$/) || [])[1]);
  if (!_0x29d8d3) {
    return;
  }
  const _0x1f1da0 = (await (0, axios_1.default)({
      "url": "http://i.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&utf8=1&disstid=" + _0x29d8d3 + "&loginUin=0",
      "headers": {
        "Referer": "https://y.qq.com/n/yqq/playlist",
        "Cookie": "uin="
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x2170da = JSON.parse(_0x1f1da0.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ""));
  return _0x2170da.cdlist[0].songlist.map(formatMusicItem);
}
async function getTopLists() {
  const _0x420eb6 = await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg?_=1577086820633&data=%7B%22comm%22%3A%7B%22g_tk%22%3A5381%2C%22uin%22%3A123456%2C%22format%22%3A%22json%22%2C%22inCharset%22%3A%22utf-8%22%2C%22outCharset%22%3A%22utf-8%22%2C%22notice%22%3A0%2C%22platform%22%3A%22h5%22%2C%22needNewCode%22%3A1%2C%22ct%22%3A23%2C%22cv%22%3A0%7D%2C%22topList%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetAll%22%2C%22param%22%3A%7B%7D%7D%7D",
    "method": "get",
    "headers": {
      "Cookie": "uin="
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  });
  return _0x420eb6.data.topList.data.group.map(_0x568bb2 => ({
    "title": _0x568bb2.groupName,
    "data": _0x568bb2.toplist.map(_0x153c82 => ({
      "id": _0x153c82.topId,
      "description": _0x153c82.intro,
      "title": _0x153c82.title,
      "period": _0x153c82.period,
      "coverImg": _0x153c82.headPicUrl || _0x153c82.frontPicUrl
    }))
  }));
}
async function getTopListDetail(_0x4d2df6) {
  var _0x4f3587;
  const _0x199c4e = await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A" + _0x4d2df6.id + "%2C%22offset%22%3A0%2C%22num%22%3A100%2C%22period%22%3A%22" + ((_0x4f3587 = _0x4d2df6.period) !== null && _0x4f3587 !== void 0 ? _0x4f3587 : "") + "%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D",
    "method": "get",
    "headers": {
      "Cookie": "uin="
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  });
  return Object.assign(Object.assign({}, _0x4d2df6), {
    "musicList": _0x199c4e.data.detail.data.songInfoList.map(formatMusicItem)
  });
}
async function getRecommendSheetTags() {
  const _0x4deed3 = (await axios_1.default.get("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?format=json&inCharset=utf8&outCharset=utf-8", {
      "headers": {
        "referer": "https://y.qq.com/"
      }
    })).data.data.categories,
    _0x1f3d95 = _0x4deed3.slice(1).map(_0x52a8b7 => ({
      "title": _0x52a8b7.categoryGroupName,
      "data": _0x52a8b7.items.map(_0x29de03 => ({
        "id": _0x29de03.categoryId,
        "title": _0x29de03.categoryName
      }))
    })),
    _0x588a84 = [];
  for (let _0x19f2dd of _0x1f3d95) {
    _0x19f2dd.data.length && _0x588a84.push(_0x19f2dd.data[0]);
  }
  return {
    "pinned": _0x588a84,
    "data": _0x1f3d95
  };
}
async function getRecommendSheetsByTag(_0x386d18, _0xe3ebd1) {
  const _0x4faee1 = 20,
    _0x45f544 = (await axios_1.default.get("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg", {
      "headers": {
        "referer": "https://y.qq.com/"
      },
      "params": {
        "inCharset": "utf8",
        "outCharset": "utf-8",
        "sortId": 5,
        "categoryId": (_0x386d18 === null || _0x386d18 === void 0 ? void 0 : _0x386d18.id) || "10000000",
        "sin": _0x4faee1 * (_0xe3ebd1 - 1),
        "ein": _0xe3ebd1 * _0x4faee1 - 1
      }
    })).data,
    _0x54f0eb = JSON.parse(_0x45f544.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, "")).data,
    _0x4a3b72 = _0x54f0eb.sum <= _0xe3ebd1 * _0x4faee1,
    _0x212d98 = _0x54f0eb.list.map(_0x154968 => {
      var _0x367ccf, _0x4c23a0;
      return {
        "id": _0x154968.dissid,
        "createTime": _0x154968.createTime,
        "title": _0x154968.dissname,
        "artwork": _0x154968.imgurl,
        "description": _0x154968.introduction,
        "playCount": _0x154968.listennum,
        "artist": (_0x4c23a0 = (_0x367ccf = _0x154968.creator) === null || _0x367ccf === void 0 ? void 0 : _0x367ccf.name) !== null && _0x4c23a0 !== void 0 ? _0x4c23a0 : ""
      };
    });
  return {
    "isEnd": _0x4a3b72,
    "data": _0x212d98
  };
}
async function getMusicSheetInfo(_0xdb03b1, _0x2072f3) {
  const _0x495c3b = await importMusicSheet(_0xdb03b1.id);
  return {
    "isEnd": true,
    "musicList": _0x495c3b
  };
}
const qualityLevels = {
  "low": "exhigh",
  "standard": "exhigh",
  "high": "exhigh",
  "super": "lossless"
};
async function getMediaSource(_0x2c84f9, _0x18d536) {
  const _0x2da22c = (await axios_1.default.get("http://musicapi.haitangw.net/music/qq.php?id=" + _0x2c84f9.songmid + "&type=json&level=" + qualityLevels[_0x18d536])).data;
  return {
    "url": _0x2da22c.data.url
  };
}
module.exports = {
  "platform": "元力QQ",
  "author": "公众号:科技长青",
  "version": "0.1.0",
  "srcUrl": "",
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["QQ音乐APP：自建歌单-分享-分享到微信好友/QQ好友；然后点开并复制链接，直接粘贴即可", "H5：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "å¯¼å…¥æ—¶é—´å’Œæ­Œå•å¤§å°æœ‰å…³ï¼Œè¯·è€å¿ƒç­‰å¾…"]
  },
  "primaryKey": ["id", "songmid"],
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  async "search"(_0xe868eb, _0x2f392c, _0x2d5259) {
    if (_0x2d5259 === "music") return await searchMusic(_0xe868eb, _0x2f392c);
    if (_0x2d5259 === "album") {
      return await searchAlbum(_0xe868eb, _0x2f392c);
    }
    if (_0x2d5259 === "artist") return await searchArtist(_0xe868eb, _0x2f392c);
    if (_0x2d5259 === "sheet") return await searchMusicSheet(_0xe868eb, _0x2f392c);
    if (_0x2d5259 === "lyric") return await searchLyric(_0xe868eb, _0x2f392c);
  },
  "getMediaSource": getMediaSource,
  "getLyric": getLyric,
  "getAlbumInfo": getAlbumInfo,
  "getArtistWorks": getArtistWorks,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getRecommendSheetsByTag": getRecommendSheetsByTag,
  "getMusicSheetInfo": getMusicSheetInfo
};