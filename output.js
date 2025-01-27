//Mon Jan 27 2025 08:53:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
import { KKYS } from "../kkys.min.js";
let showStatus = _0x43779e => {
    let _0x5196db = "";
    switch (_0x43779e) {
      case 400:
        _0x5196db = "请求错误(400)";
        break;
      case 401:
        _0x5196db = "未授权，请重新登录(401)";
        break;
      case 402:
        _0x5196db = "拒绝访问(402)";
        break;
      case 404:
        _0x5196db = "请求出错(404)";
        break;
      case 408:
        _0x5196db = "请求超时(408)";
        break;
      case 500:
        _0x5196db = "服务器错误(500)";
        break;
      case 501:
        _0x5196db = "服务未实现(501)";
        break;
      case 502:
        _0x5196db = "网络错误(502)";
        break;
      case 503:
        _0x5196db = "服务不可用(503)";
        break;
      case 504:
        _0x5196db = "网络超时(504)";
        break;
      case 505:
        _0x5196db = "HTTP版本不受支持(505)";
        break;
      default:
        _0x5196db = "连接出错(" + _0x43779e + ")!";
    }
    return _0x5196db + "，请检查网络或联系管理员！";
  },
  callAction = _0x45c340 => {
    if (!(_0x45c340.type == "goldToast")) {
      if (!(_0x45c340.type == "vipToast")) {
        if (!(_0x45c340.type == "mixedToast")) {
          if (_0x45c340.type == "toast") {
            toastr.warning(_0x45c340.message);
          } else {
            if (!(_0x45c340.type == "confirm")) {
              console.warn("有action要执行, 待处理...", _0x45c340);
            }
          }
        }
      }
    }
  },
  decryptResponseData = _0x457fe2 => {
    const _0x330d7d = new Uint8Array(_0x457fe2);
    const _0x2762f9 = window.btoa(_0x330d7d.reduce((_0x38c8e6, _0x44fc21) => _0x38c8e6 + String.fromCharCode(_0x44fc21), "")),
      _0x1b0d70 = KKYS.Settings.KEYS.find(_0x35405c => _0x35405c.index == 1);
    if (_0x1b0d70) {
      const _0x1b6706 = KKYS.userUtils.apiDecrypt(_0x2762f9, _0x1b0d70.key, _0x1b0d70.iv);
      if (_0x1b6706 && _0x1b6706.length > 0 && isJSONString(_0x1b6706)) {
        return JSON.parse(_0x1b6706);
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };
const _0x140600 = {
  withCredentials: false,
  timeout: 30000,
  changeOrigin: true
};
export let service = axios.create(_0x140600);
service.interceptors.request.use(_0x39d89b => {
  const {
    method = "GET"
  } = _0x39d89b;
  if (method === "get" || method === "GET") {
    const _0x1796f8 = Object.assign(KKYS.userUtils.customHttpRequestQueryString(), _0x39d89b.data);
    _0x39d89b.params = _0x1796f8;
    const _0x263b6d = _0x39d89b.method ? _0x39d89b.method : "",
      _0x326ad9 = _0x39d89b.url ? _0x39d89b.url : "",
      _0x455502 = KKYS.userUtils.convertObjectToQueryParameters(_0x39d89b.params),
      _0x3367f6 = Date.now();
    _0x39d89b.headers.ts = _0x3367f6;
    _0x39d89b.headers.sign = KKYS.userUtils.sign(_0x263b6d, _0x326ad9, _0x455502, _0x3367f6);
  }
  return _0x39d89b;
}, _0x1eeeac => {
  _0x1eeeac.message = "服务器异常，请联系管理员！";
  return Promise.reject(_0x1eeeac);
});
service.interceptors.response.use(_0x535cd3 => {
  if (_0x535cd3.data instanceof ArrayBuffer) {
    const _0x218ac0 = new Uint8Array(_0x535cd3.data),
      _0x21b622 = window.btoa(_0x218ac0.reduce((_0x5c2b1c, _0x56cb0b) => _0x5c2b1c + String.fromCharCode(_0x56cb0b), "")),
      _0x495b58 = KKYS.Settings.KEYS.find(_0x432ac3 => _0x432ac3.index == 1);
    if (_0x495b58) {
      const _0x287196 = KKYS.userUtils.apiDecrypt(_0x21b622, _0x495b58.key, _0x495b58.iv);
      if (KKYS.userUtils.isJSONString(_0x287196)) {
        const _0x4ac8bc = JSON.parse("" + _0x287196);
        if (_0x4ac8bc.code || _0x4ac8bc.action) {
          if (_0x4ac8bc.code == 200) {
            if (_0x4ac8bc.action) {
              callAction(_0x4ac8bc.action);
            }
            const _0x4fc80a = _0x4ac8bc.data;
            _0x535cd3.data = _0x4fc80a;
          } else {
            if (_0x4ac8bc.code == 40401) {
              getAnonymousHandler();
            }
            if (_0x4ac8bc.action) {
              callAction(_0x4ac8bc.action);
            }
            return Promise.reject(_0x4ac8bc);
          }
        } else {
          _0x535cd3.data = _0x4ac8bc;
        }
      }
    }
    return _0x535cd3;
  } else {
    let _0x136167 = _0x535cd3.status,
      _0x5c214e = "";
    if (_0x136167 < 200 || _0x136167 >= 300 && _0x136167 != 401 && _0x136167 != 500) {
      _0x5c214e = showStatus(_0x136167);
      if (typeof _0x535cd3.data === "string") {
        const _0x1968a4 = {
          msg: _0x5c214e
        };
        _0x535cd3.data = _0x1968a4;
      } else {
        _0x535cd3.data.msg = _0x5c214e;
      }
      return _0x535cd3.data;
    } else {
      if (_0x136167 == 200) {
        _0x535cd3.data.action && callAction(_0x535cd3.data.action);
        if (_0x535cd3.data.code != 200) {
          return Promise.reject(new Error(_0x535cd3.data.message));
        } else {
          return _0x535cd3.data;
        }
      } else {
        if (_0x136167 == 500) {
          _0x5c214e = showStatus(_0x136167);
          const _0x517454 = {
            msg: _0x5c214e
          };
          _0x535cd3.data = _0x517454;
          const _0x483c96 = {
            type: 500
          };
          const _0x2d8760 = {
            name: "exception",
            query: _0x483c96
          };
          router.replace(_0x2d8760);
          return _0x535cd3.data;
        } else {
          console.log(_0x535cd3.data);
          return _0x535cd3.data;
        }
      }
    }
  }
}, _0x15a637 => {
  if (_0x15a637 && _0x15a637.response) {
    if (_0x15a637.response.data instanceof ArrayBuffer) {
      _0x15a637.response.data = decryptResponseData(_0x15a637.response.data);
      console.error("Buffer解密api数据异常:", _0x15a637.response.data);
      return Promise.reject(_0x15a637.response.data);
    } else {
      return Promise.reject({
        code: _0x15a637.response.status,
        message: showStatus(_0x15a637.response.status)
      });
    }
  }
  return Promise.reject(_0x15a637);
});