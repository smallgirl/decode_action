//Wed Sep 25 2024 08:00:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { nanoid } from "./nanoid.js";
import { service } from "./http/service.min.js";
let dev_baseUrl = "https://duse-ajax.liak.life",
  baseUrl = window.whatTMDwhatTMDApiDomain || dev_baseUrl;
const USER_INFO_KEY = "u-i",
  USER_HISTORY_KEY = "u-h",
  DEVICE_ID_KEY = "d-i",
  DEVICE_CREATEDAT_KEY = "d-c-a",
  CHANNEL_ID = "c-i";
let geturl = window.location.href;
const getqyinfo = geturl.split("?")[1];
let getqys = new URLSearchParams("?" + getqyinfo),
  getqyc = getqys.get("_c");
getqyc && getqyc.length > 0 && localStorage.setItem(CHANNEL_ID, getqyc);
export var KKYS = window.KKYS || {};
KKYS.namespace = function (_0x124835) {
  if (!_0x124835 || !_0x124835.length) {
    return null;
  }
  var _0x39b85e = _0x124835.split("."),
    _0x38e29d = KKYS;
  for (var _0x5c542b = _0x39b85e[0] == "KKYS" ? 1 : 0; _0x5c542b < _0x39b85e.length; ++_0x5c542b) {
    _0x38e29d[_0x39b85e[_0x5c542b]] = _0x38e29d[_0x39b85e[_0x5c542b]] || {};
    _0x38e29d = _0x38e29d[_0x39b85e[_0x5c542b]];
  }
  return _0x38e29d;
};
const _0x5686da = {
  index: 1,
  key: "ayt5wy5afwmwrpb19k9s3psx3dymyd0n",
  iv: "b3t069ijy7pirw0j"
};
KKYS.Settings = {
  KEYS: [_0x5686da],
  HASH: "te@9fs#5tbf8#dx7zw8nx",
  appId: window.whatTMDwhatTMDKey,
  os: "pc",
  userChannel: localStorage.getItem(CHANNEL_ID) || window.whatTMDwhatTMDUserChannel || "c10000"
};
const _0x4411a9 = {
  UNKNOWN: 0,
  MALE: 1,
  FEMALE: 2
};
KKYS.GenderCode = _0x4411a9;
KKYS.userInfo = function (_0x8bd462) {
  _0x8bd462 = _0x8bd462 || {};
  this.userid = _0x8bd462.userid || "";
  this.name = _0x8bd462.name || "";
  this.gender = _0x8bd462.gender || KKYS.GenderCode.UNKNOWN;
  this.token = _0x8bd462.token || "";
};
KKYS.userInfo.prototype.getUserToken = function () {
  var _0x154907 = "";
  _0x154907 = this.token;
  return _0x154907;
};
KKYS.userUtils = {
  isLogined: function () {
    let _0x477c7e = localStorage.getItem(USER_INFO_KEY);
    return _0x477c7e ? true : false;
  },
  currentUser: function () {
    if (!this.isLogined()) {
      return undefined;
    }
    return JSON.parse(KKYS.aes().decrypt(window.localStorage.getItem(USER_INFO_KEY)));
  },
  formatTimestamp: _0x190d76 => {
    const _0x9d1d78 = new Date(_0x190d76),
      _0x1a5f9d = _0x9d1d78.getFullYear(),
      _0x25e823 = _0x9d1d78.getMonth() + 1,
      _0x5f1bf4 = _0x9d1d78.getDate(),
      _0x230ac4 = _0x1a5f9d + "-" + (_0x25e823 < 10 ? "0" + _0x25e823 : _0x25e823) + "-" + (_0x5f1bf4 < 10 ? "0" + _0x5f1bf4 : _0x5f1bf4) + " " + _0x9d1d78.toTimeString().substring(0, 8);
    return _0x230ac4;
  },
  getQueryVariable: _0x1f9335 => {
    var _0x35cd15 = window.location.search.substring(1),
      _0x513320 = _0x35cd15.split("&");
    for (var _0x3b87ce = 0; _0x3b87ce < _0x513320.length; _0x3b87ce++) {
      var _0x1edd62 = _0x513320[_0x3b87ce].split("=");
      if (_0x1edd62[0] == _0x1f9335) {
        return _0x1edd62[1];
      }
    }
    return undefined;
  },
  loginLimit: () => {
    if (!KKYS.userUtils.isLogined()) {
      window.location.href = "notlogin.html";
    }
    {
      console.log("已登录");
    }
  },
  logout: () => {
    window.localStorage.clear();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  },
  addReadHistory: _0x32da76 => {
    var _0x2b6bdc = [],
      _0x544c2c = localStorage.getItem(USER_HISTORY_KEY);
    if (_0x544c2c && _0x544c2c != null) {
      var _0x2b6bdc = JSON.parse(KKYS.aes().decrypt(_0x544c2c));
      _0x2b6bdc == null && (_0x2b6bdc = []);
    }
    const _0x4bcd83 = _0x2b6bdc.findIndex(_0x5e531f => {
      return _0x5e531f.url == _0x32da76.url && _0x5e531f.title == _0x32da76.title;
    });
    if (_0x4bcd83 == -1) {
      _0x2b6bdc.push(_0x32da76);
    }
    localStorage.setItem(USER_HISTORY_KEY, KKYS.aes().encrypt(_0x2b6bdc));
  },
  getReadHistories: () => {
    var _0x180c58 = localStorage.getItem(USER_HISTORY_KEY);
    if (!_0x180c58 || _0x180c58 == null) {
      return [];
    }
    var _0x464c51 = JSON.parse(KKYS.aes().decrypt(_0x180c58));
    _0x464c51 == null && (_0x464c51 = []);
    return _0x464c51;
  },
  clearAllReadHistories: () => {
    localStorage.removeItem(USER_HISTORY_KEY);
  },
  getTopLevelDomain: () => {
    const _0x1ce630 = window.location.hostname,
      _0x4f4b56 = _0x1ce630.split("."),
      _0x5d58c6 = _0x4f4b56.slice(-2).join("."),
      _0x312be7 = ["co.uk", "co.jp", "ac.jp", "co.in", "com.au", "com.cn", "gov.au"];
    if (_0x312be7.includes(_0x5d58c6)) {
      return _0x4f4b56.slice(-3).join(".");
    } else {
      return _0x5d58c6;
    }
  },
  getDeviceId: () => {
    var _0x29c567 = localStorage.getItem(DEVICE_ID_KEY);
    if (!_0x29c567 || _0x29c567 == null) {
      let _0xb11431 = nanoid();
      localStorage.setItem(DEVICE_ID_KEY, KKYS.aes().encrypt(_0xb11431));
      return _0xb11431;
    }
    return KKYS.aes().decrypt(_0x29c567);
  },
  getDeviceCreatedAt: () => {
    var _0x3eb22d = localStorage.getItem(DEVICE_CREATEDAT_KEY);
    if (!_0x3eb22d || _0x3eb22d == null) {
      let _0x1832ac = Date.now();
      localStorage.setItem(DEVICE_CREATEDAT_KEY, _0x1832ac);
      return _0x1832ac;
    }
    return _0x3eb22d;
  },
  isValidUrl: _0x26b689 => {
    var _0x5c8b47 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return _0x5c8b47.test($.trim(_0x26b689));
  },
  sign: (_0x4d9484, _0x5744e4, _0xbbda50, _0x1f7db1) => {
    const _0x390ccb = "appId=" + KKYS.Settings.appId + "&deviceCreatedAt=" + KKYS.userUtils.getDeviceCreatedAt() + "&deviceId=" + KKYS.userUtils.getDeviceId() + (KKYS.userUtils.isLogined() ? "&userId=" + KKYS.userUtils.currentUser().id : ""),
      _0x2def83 = _0x4d9484 + "|" + _0x5744e4 + "|" + _0xbbda50 + "|" + _0x1f7db1 + "|" + _0x390ccb + "|",
      _0x530d5d = CryptoJS.HmacSHA1(_0x2def83, KKYS.Settings.HASH).toString(CryptoJS.enc.Hex);
    return _0x530d5d;
  },
  convertObjectToQueryParameters: _0x72d0e9 => {
    const _0xe7e243 = Object.keys(_0x72d0e9).sort().reduce((_0x314989, _0x3b8a6f) => {
      _0x314989[_0x3b8a6f] = _0x72d0e9[_0x3b8a6f];
      return _0x314989;
    }, {});
    const _0x4d66f6 = Object.keys(_0xe7e243).map(_0x4b4e41 => _0x4b4e41 + "=" + _0xe7e243[_0x4b4e41]).join("&");
    return _0x4d66f6;
  },
  customHttpRequestQueryString: () => {
    return {
      os: KKYS.Settings.os,
      appId: KKYS.Settings.appId,
      userChannel: KKYS.Settings.userChannel,
      userLevel: KKYS.userUtils.isLogined() ? KKYS.userUtils.currentUser().level : "1"
    };
  },
  isJSONString: _0x207590 => {
    try {
      if (typeof JSON.parse(_0x207590) == "object") {
        return true;
      }
    } catch (_0x4c8cfa) {
      return false;
    }
    return false;
  },
  apiDecrypt: (_0x4b5edb, _0x1d9b1e, _0x26a57f) => {
    if (!_0x1d9b1e || !_0x26a57f) {
      return "";
    }
    let _0x5b2b67 = CryptoJS.enc.Utf8.parse(_0x1d9b1e),
      _0x478e3 = CryptoJS.enc.Utf8.parse(_0x26a57f);
    _0x4b5edb = (_0x4b5edb + "").replace(/\n*$/g, "").replace(/\n/g, "");
    const _0x115654 = CryptoJS.enc.Base64.parse(_0x4b5edb),
      _0x5cc3b8 = CryptoJS.enc.Base64.stringify(_0x115654),
      _0x112f08 = CryptoJS.AES.decrypt(_0x5cc3b8, _0x5b2b67, {
        iv: _0x478e3,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    try {
      const _0x4eb7a3 = _0x112f08.toString(CryptoJS.enc.Utf8);
      return _0x4eb7a3.toString();
    } catch (_0x18162c) {
      return "";
    }
    return "";
  },
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  isToday: _0x3976c7 => {
    const _0x2ad4b8 = new Date(parseInt(_0x3976c7)),
      _0x5937bd = new Date();
    return _0x2ad4b8.getDate() === _0x5937bd.getDate() && _0x2ad4b8.getMonth() === _0x5937bd.getMonth() && _0x2ad4b8.getFullYear() === _0x5937bd.getFullYear();
  }
};
KKYS.aes = function () {
  let _0x20fa80 = CryptoJS.enc.Utf8.parse("kkys123456789000");
  let _0x50ac65 = CryptoJS.enc.Utf8.parse("kkys123456789000");
  return {
    encrypt: function (_0x2a720f, _0xf76075 = _0x20fa80, _0x270bce = _0x50ac65) {
      let _0x2f45b5 = "";
      if (typeof _0x2a720f == "string") {
        const _0x175b76 = CryptoJS.enc.Utf8.parse(_0x2a720f);
        _0x2f45b5 = CryptoJS.AES.encrypt(_0x175b76, _0xf76075, {
          iv: _0x270bce,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
      } else {
        if (typeof _0x2a720f == "object") {
          const _0xa425cf = JSON.stringify(_0x2a720f),
            _0x7c5e8 = CryptoJS.enc.Utf8.parse(_0xa425cf);
          _0x2f45b5 = CryptoJS.AES.encrypt(_0x7c5e8, _0xf76075, {
            iv: _0x270bce,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
        }
      }
      return _0x2f45b5.ciphertext.toString();
    },
    decrypt: function (_0x4a7572, _0x4ae439 = _0x20fa80, _0x5a8ee0 = _0x50ac65) {
      const _0x1249fd = CryptoJS.enc.Hex.parse(_0x4a7572),
        _0x1f4a82 = CryptoJS.enc.Base64.stringify(_0x1249fd),
        _0x16a79b = CryptoJS.AES.decrypt(_0x1f4a82, _0x4ae439, {
          iv: _0x5a8ee0,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }),
        _0x28abc2 = _0x16a79b.toString(CryptoJS.enc.Utf8);
      return _0x28abc2.toString();
    }
  };
};
KKYS.safePlay = function () {
  let _0x3e87b3 = window.whatTMDwhatTMDKKKK || "VNF9aVQF!G*0ux@2hAigUeH3";
  return {
    url: function (_0x568646 = _0x3e87b3) {
      try {
        var _0x527427 = CryptoJS.enc.Utf8.parse(_0x568646);
        let _0x264b22 = window.whatTMDwhatTMDPPPP;
        var _0x33e517 = CryptoJS.enc.Base64.parse(_0x264b22);
        const _0x240c87 = {
          ciphertext: _0x33e517
        };
        var _0x358b25 = CryptoJS.AES.decrypt(_0x240c87, _0x527427, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          }),
          _0x4f3e21 = _0x358b25.toString(CryptoJS.enc.Utf8);
        return _0x4f3e21;
      } catch (_0x38162c) {
        return "123456";
      }
    }
  };
};
KKYS.isPlayLogSending = false;
KKYS.API = {
  generalHttpHeaders: () => {
    return {
      os: KKYS.Settings.os,
      appId: KKYS.Settings.appId,
      channelId: KKYS.Settings.userChannel,
      package: KKYS.userUtils.getTopLevelDomain(),
      userId: KKYS.userUtils.isLogined() ? KKYS.userUtils.currentUser().id : "",
      "x-token": KKYS.userUtils.isLogined() ? KKYS.userUtils.currentUser().token : "",
      deviceId: KKYS.userUtils.getDeviceId(),
      deviceCreatedAt: KKYS.userUtils.getDeviceCreatedAt()
    };
  },
  getAnnouncements: () => {
    const _0x3f9a7f = "get",
      _0x205557 = "/app/announcements",
      _0x4fa495 = "",
      _0x507ec6 = Date.now(),
      _0x9b754d = KKYS.API.generalHttpHeaders();
    _0x9b754d.ts = _0x507ec6;
    _0x9b754d.sign = KKYS.userUtils.sign(_0x3f9a7f, _0x205557, _0x4fa495, _0x507ec6);
    const _0x233385 = {
      baseURL: "" + baseUrl,
      url: _0x205557,
      method: _0x3f9a7f,
      headers: _0x9b754d
    };
    return service(_0x233385);
  },
  getAdvertises: () => {
    const _0x296709 = "get",
      _0x451149 = "/config/units",
      _0x294ec6 = "",
      _0x34f13d = Date.now(),
      _0x4581ca = KKYS.API.generalHttpHeaders();
    _0x4581ca.ts = _0x34f13d;
    _0x4581ca.sign = KKYS.userUtils.sign(_0x296709, _0x451149, _0x294ec6, _0x34f13d);
    const _0x1e5fa3 = {
      baseURL: "" + baseUrl,
      url: _0x451149,
      method: _0x296709,
      headers: _0x4581ca
    };
    return service(_0x1e5fa3);
  },
  regist: _0x15ec1d => {
    const _0x5a06a2 = "post";
    const _0x1e1b49 = "/user/reg",
      _0x5bbee5 = "",
      _0x4114ba = Date.now(),
      _0x10f17f = KKYS.API.generalHttpHeaders();
    _0x10f17f.ts = _0x4114ba;
    _0x10f17f.sign = KKYS.userUtils.sign(_0x5a06a2, _0x1e1b49, _0x5bbee5, _0x4114ba);
    const _0x128e45 = {
      baseURL: "" + baseUrl,
      url: _0x1e1b49,
      method: _0x5a06a2,
      headers: _0x10f17f,
      data: _0x15ec1d
    };
    return service(_0x128e45).then(_0x21f86d => {
      _0x21f86d && _0x21f86d.code == 200 && window.localStorage.setItem(USER_INFO_KEY, KKYS.aes().encrypt(_0x21f86d.data));
      return _0x21f86d;
    });
  },
  login: _0x443dbb => {
    const _0x5d635c = "post",
      _0x3aa27f = "/user/login",
      _0x28fd18 = "",
      _0x429fb7 = Date.now(),
      _0x477ea6 = KKYS.API.generalHttpHeaders();
    _0x477ea6.ts = _0x429fb7;
    _0x477ea6.sign = KKYS.userUtils.sign(_0x5d635c, _0x3aa27f, _0x28fd18, _0x429fb7);
    const _0x44baff = {
      baseURL: "" + baseUrl,
      url: _0x3aa27f,
      method: _0x5d635c,
      headers: _0x477ea6,
      data: _0x443dbb
    };
    return service(_0x44baff).then(_0x12c568 => {
      if (_0x12c568 && _0x12c568.code == 200) {
        window.localStorage.setItem(USER_INFO_KEY, KKYS.aes().encrypt(_0x12c568.data));
      }
      return _0x12c568;
    });
  },
  updatePassword: _0x4f1d13 => {
    const _0x2c7c28 = "post",
      _0x2dbda3 = "/user/changeAccountPassword",
      _0x8d2e73 = "",
      _0x279cc3 = Date.now(),
      _0x1b6cc3 = KKYS.API.generalHttpHeaders();
    _0x1b6cc3.ts = _0x279cc3;
    _0x1b6cc3.sign = KKYS.userUtils.sign(_0x2c7c28, _0x2dbda3, _0x8d2e73, _0x279cc3);
    const _0x287d5e = {
      baseURL: "" + baseUrl,
      url: _0x2dbda3,
      method: _0x2c7c28,
      headers: _0x1b6cc3,
      data: _0x4f1d13
    };
    return service(_0x287d5e).then(_0xd69439 => {
      _0xd69439 && _0xd69439.code == 200 && window.localStorage.setItem(USER_INFO_KEY, KKYS.aes().encrypt(_0xd69439.data));
      return _0xd69439;
    });
  },
  feedback: _0x1952bc => {
    const _0x8a4905 = "post";
    const _0x46a415 = "/app/feedback",
      _0x330933 = "",
      _0x201037 = Date.now(),
      _0x6b9ce = KKYS.API.generalHttpHeaders();
    _0x6b9ce.ts = _0x201037;
    _0x6b9ce.sign = KKYS.userUtils.sign(_0x8a4905, _0x46a415, _0x330933, _0x201037);
    const _0x18bd0e = {
      baseURL: "" + baseUrl,
      url: _0x46a415,
      method: _0x8a4905,
      headers: _0x6b9ce,
      data: _0x1952bc
    };
    return service(_0x18bd0e);
  },
  getUserInfo: () => {
    const _0xb11729 = "get",
      _0x5ac4f2 = "/user/info",
      _0x95d8e6 = "";
    const _0x563414 = Date.now(),
      _0x56657c = KKYS.API.generalHttpHeaders();
    _0x56657c.ts = _0x563414;
    _0x56657c.sign = KKYS.userUtils.sign(_0xb11729, _0x5ac4f2, _0x95d8e6, _0x563414);
    const _0x608d9b = {
      baseURL: "" + baseUrl,
      url: _0x5ac4f2,
      method: _0xb11729,
      headers: _0x56657c
    };
    return service(_0x608d9b).then(_0x1d5aac => {
      _0x1d5aac && _0x1d5aac.code == 200 && window.localStorage.setItem(USER_INFO_KEY, KKYS.aes().encrypt(_0x1d5aac.data));
      return _0x1d5aac;
    });
  },
  getHistories: () => {
    const _0x455f9f = "get",
      _0x1ea6d5 = "/vod/histories",
      _0x39372f = "",
      _0xe5c700 = Date.now(),
      _0x131479 = KKYS.API.generalHttpHeaders();
    _0x131479.ts = _0xe5c700;
    _0x131479.sign = KKYS.userUtils.sign(_0x455f9f, _0x1ea6d5, _0x39372f, _0xe5c700);
    const _0x14f6a6 = {
      baseURL: "" + baseUrl,
      url: _0x1ea6d5,
      method: _0x455f9f,
      headers: _0x131479
    };
    return service(_0x14f6a6);
  },
  clearHistories: _0x59dd43 => {
    const _0x4fd22b = "post";
    const _0x335856 = "/vod/removeHistories",
      _0x10d8e6 = "",
      _0x245b44 = Date.now(),
      _0x1a26a7 = KKYS.API.generalHttpHeaders();
    _0x1a26a7.ts = _0x245b44;
    _0x1a26a7.sign = KKYS.userUtils.sign(_0x4fd22b, _0x335856, _0x10d8e6, _0x245b44);
    return service({
      baseURL: "" + baseUrl,
      url: _0x335856,
      method: _0x4fd22b,
      headers: _0x1a26a7,
      data: _0x59dd43 ? _0x59dd43 : {
        vodIds: "all"
      }
    });
  },
  getVodState: _0x4f752d => {
    const _0x15ebc3 = "get",
      _0x3afb79 = "/vod/vodState",
      _0xfd76ad = "",
      _0x5122fe = Date.now();
    const _0x1d3979 = KKYS.API.generalHttpHeaders();
    _0x1d3979.ts = _0x5122fe;
    _0x1d3979.sign = KKYS.userUtils.sign(_0x15ebc3, _0x3afb79, _0xfd76ad, _0x5122fe);
    const _0x3b781d = {
      baseURL: "" + baseUrl,
      url: _0x3afb79,
      method: _0x15ebc3,
      headers: _0x1d3979,
      data: _0x4f752d
    };
    return service(_0x3b781d);
  },
  getFavories: () => {
    const _0x2caa9b = "get",
      _0x383ec1 = "/vod/library",
      _0x2caab3 = "",
      _0x17603b = Date.now(),
      _0x159b53 = KKYS.API.generalHttpHeaders();
    _0x159b53.ts = _0x17603b;
    _0x159b53.sign = KKYS.userUtils.sign(_0x2caa9b, _0x383ec1, _0x2caab3, _0x17603b);
    const _0x1f76b6 = {
      baseURL: "" + baseUrl,
      url: _0x383ec1,
      method: _0x2caa9b,
      headers: _0x159b53
    };
    return service(_0x1f76b6);
  },
  addFavorite: _0x33fb27 => {
    const _0x116d85 = "post",
      _0x53d96e = "/vod/favor",
      _0x371079 = "",
      _0xcdfc23 = Date.now(),
      _0x1f1201 = KKYS.API.generalHttpHeaders();
    _0x1f1201.ts = _0xcdfc23;
    _0x1f1201.sign = KKYS.userUtils.sign(_0x116d85, _0x53d96e, _0x371079, _0xcdfc23);
    const _0x47729f = {
      baseURL: "" + baseUrl,
      url: _0x53d96e,
      method: _0x116d85,
      headers: _0x1f1201,
      data: _0x33fb27
    };
    return service(_0x47729f);
  },
  removeFavorite: _0x16fbbe => {
    const _0x4f4629 = "post",
      _0x3ea9a4 = "/vod/batchUnFavor",
      _0x1e65ca = "",
      _0x427ff7 = Date.now(),
      _0x1488f9 = KKYS.API.generalHttpHeaders();
    _0x1488f9.ts = _0x427ff7;
    _0x1488f9.sign = KKYS.userUtils.sign(_0x4f4629, _0x3ea9a4, _0x1e65ca, _0x427ff7);
    const _0x22fccf = {
      baseURL: "" + baseUrl,
      url: _0x3ea9a4,
      method: _0x4f4629,
      headers: _0x1488f9,
      data: _0x16fbbe
    };
    return service(_0x22fccf);
  },
  shareVod: _0x4a4045 => {
    const _0x1e12d7 = "post",
      _0x34c8d2 = "/vod/share",
      _0xaa415f = "",
      _0xe9ef0e = Date.now(),
      _0x4a2cb3 = KKYS.API.generalHttpHeaders();
    _0x4a2cb3.ts = _0xe9ef0e;
    _0x4a2cb3.sign = KKYS.userUtils.sign(_0x1e12d7, _0x34c8d2, _0xaa415f, _0xe9ef0e);
    const _0x4ff343 = {
      baseURL: "" + baseUrl,
      url: _0x34c8d2,
      method: _0x1e12d7,
      headers: _0x4a2cb3,
      data: _0x4a4045
    };
    return service(_0x4ff343);
  },
  sendVodPlayLog: _0x4e801b => {
    if (KKYS.isPlayLogSending) {
      return;
    }
    const _0x30da3a = "get",
      _0x2ada76 = "/vod/playOnlineLog",
      _0x5094df = "";
    const _0x5207e7 = Date.now();
    const _0xb39672 = KKYS.API.generalHttpHeaders();
    _0xb39672.ts = _0x5207e7;
    _0xb39672.sign = KKYS.userUtils.sign(_0x30da3a, _0x2ada76, _0x5094df, _0x5207e7);
    KKYS.isPlayLogSending = true;
    const _0x54b114 = {
      baseURL: "" + baseUrl,
      url: _0x2ada76,
      method: _0x30da3a,
      headers: _0xb39672,
      data: _0x4e801b
    };
    return service(_0x54b114).then(_0x53aebf => {
      return _0x53aebf;
    }).catch(_0x3c3ab8 => {
      console.error(_0x3c3ab8);
    }).finally(() => {
      setTimeout(() => {
        KKYS.isPlayLogSending = false;
      }, 1000);
    });
  },
  sendVodLoadLog: _0x5130e7 => {
    if (KKYS.isPlayLogSending) {
      return;
    }
    const _0x182275 = "get",
      _0x18dc74 = "/vod/loadLog";
    const _0x256bdd = "",
      _0x137c20 = Date.now();
    const _0x461d0a = KKYS.API.generalHttpHeaders();
    _0x461d0a.ts = _0x137c20;
    _0x461d0a.sign = KKYS.userUtils.sign(_0x182275, _0x18dc74, _0x256bdd, _0x137c20);
    KKYS.isPlayLogSending = true;
    const _0x111988 = {
      baseURL: "" + baseUrl,
      url: _0x18dc74,
      method: _0x182275,
      headers: _0x461d0a,
      data: _0x5130e7
    };
    return service(_0x111988).then(_0x573e72 => {
      return _0x573e72;
    }).catch(_0x2e2b54 => {
      console.error(_0x2e2b54);
    }).finally(() => {
      setTimeout(() => {
        KKYS.isPlayLogSending = false;
      }, 1000);
    });
  },
  sendReport: _0x27e5c5 => {
    const _0x1e6bf9 = "post",
      _0x172021 = "/vod/report",
      _0x1085e6 = "",
      _0x42dac8 = Date.now(),
      _0x1a1646 = KKYS.API.generalHttpHeaders();
    _0x1a1646.ts = _0x42dac8;
    _0x1a1646.sign = KKYS.userUtils.sign(_0x1e6bf9, _0x172021, _0x1085e6, _0x42dac8);
    const _0x253ba6 = {
      baseURL: "" + baseUrl,
      url: _0x172021,
      method: _0x1e6bf9,
      headers: _0x1a1646,
      data: _0x27e5c5
    };
    return service(_0x253ba6);
  },
  getNetflixIssues: _0x13ca96 => {
    const _0xf64d0a = "get",
      _0x1b6131 = "/vod/copyrightVods";
    const _0x394074 = "",
      _0x312e8b = Date.now(),
      _0x83e6da = KKYS.API.generalHttpHeaders();
    _0x83e6da.ts = _0x312e8b;
    _0x83e6da.sign = KKYS.userUtils.sign(_0xf64d0a, _0x1b6131, _0x394074, _0x312e8b);
    const _0x14387b = {
      baseURL: "" + baseUrl,
      url: _0x1b6131,
      method: _0xf64d0a,
      headers: _0x83e6da,
      data: _0x13ca96
    };
    return service(_0x14387b);
  }
};
KKYS.Timer = class {
  constructor(_0x2c18af, _0x2dc83c) {
    this.callback = _0x2c18af;
    this.delay = _0x2dc83c;
    this.timerId = null;
    this.remaining = 0;
    this.startTime = null;
    this.isPaused = false;
  }
  start() {
    this.isPaused = false;
    this.startTime = new Date();
    this.timerId = setTimeout(() => {
      this.callback();
    }, this.delay);
  }
  pause() {
    this.isPaused = true;
    clearTimeout(this.timerId);
    this.remaining = this.delay - (new Date() - this.startTime);
  }
  resume() {
    this.isPaused && (this.isPaused = false, setTimeout(() => {
      this.callback();
    }, this.remaining));
  }
  stop() {
    clearTimeout(this.timerId);
  }
};