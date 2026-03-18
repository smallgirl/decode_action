//Wed Mar 18 2026 03:07:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios");
const _0xd2555a = {
  "Content-Type": "application/json"
};
const _0x5e8128 = {
  baseURL: "http://yuan.ijanz.cn/api/free",
  timeout: 5000,
  headers: _0xd2555a
};
const instance = axios.create(_0x5e8128);
function post(_0x3d631a, _0x2a9053 = {}, _0xece9aa = {}) {
  const _0x38aba3 = {
    headers: _0xece9aa
  };
  return instance.post(_0x3d631a, _0x2a9053, _0x38aba3).then(_0x13ef2e => {
    if (_0x13ef2e.data.code === 200) {
      return _0x13ef2e.data;
    }
    return Promise.reject(_0x13ef2e.data.message || "业务错误");
  }).catch(_0x19f765 => {
    return Promise.reject(_0x19f765);
  });
}
const _0x5c3c03 = {
  post: post
};
module.exports = _0x5c3c03;