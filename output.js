//Sun Sep 21 2025 02:22:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ApiSecurity = function () {
  const _0x31f0f2 = "kxz_163music_secret_key_2024";
  let _0x49ed18 = null;
  let _0x11661c = null;
  let _0x4813f3 = null;
  async function _0x462196() {
    if (_0x4813f3) {
      return _0x4813f3;
    }
    try {
      _0x4813f3 = await window.crypto.subtle.generateKey({
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      }, true, ["encrypt", "decrypt"]);
      return _0x4813f3;
    } catch (_0x2131b6) {
      console.error("生成客户端密钥对失败:", _0x2131b6);
      throw new Error("密钥生成失败");
    }
  }
  async function _0x1ccb79() {
    if (_0x11661c) {
      {
        return _0x11661c;
      }
    }
    if (_0x49ed18) {
      return Promise.resolve(_0x49ed18);
    }
    _0x11661c = new Promise(async (_0x4d0a00, _0xfd3899) => {
      try {
        const _0x18d99a = await fetch("./api/api.php?action=get_public_key", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!_0x18d99a.ok) {
          {
            throw new Error("HTTP " + _0x18d99a.status + ": " + _0x18d99a.statusText);
          }
        }
        const _0xa3305f = await _0x18d99a.json();
        if (_0xa3305f.code !== 200) {
          throw new Error(_0xa3305f.error || "获取公钥失败");
        }
        _0x49ed18 = _0xa3305f.public_key;
        _0x4d0a00(_0x49ed18);
      } catch (_0x184290) {
        console.error("获取服务器公钥失败:", _0x184290);
        _0xfd3899(_0x184290);
      } finally {
        {
          _0x11661c = null;
        }
      }
    });
    return _0x11661c;
  }
  async function _0x5b8cde(_0x4e32cc) {
    const _0x2fd70e = "-----BEGIN PUBLIC KEY-----";
    const _0xa7a3fc = "-----END PUBLIC KEY-----";
    const _0x2f9a64 = _0x4e32cc.replace(_0x2fd70e, "").replace(_0xa7a3fc, "").replace(/\s/g, "");
    const _0x286d19 = window.atob(_0x2f9a64);
    const _0x2084d6 = new Uint8Array(_0x286d19.length);
    for (let _0xe8f3d = 0; _0xe8f3d < _0x286d19.length; _0xe8f3d++) {
      _0x2084d6[_0xe8f3d] = _0x286d19.charCodeAt(_0xe8f3d);
    }
    return await window.crypto.subtle.importKey("spki", _0x2084d6.buffer, {
      name: "RSA-OAEP",
      hash: "SHA-1"
    }, false, ["encrypt"]);
  }
  async function _0x3211d4() {
    const _0x296459 = {
      name: "AES-CBC",
      length: 256
    };
    return await window.crypto.subtle.generateKey(_0x296459, true, ["encrypt", "decrypt"]);
  }
  async function _0x24ee12(_0x307c08, _0x7a5167) {
    {
      const _0x338d81 = window.crypto.getRandomValues(new Uint8Array(16));
      const _0x807152 = new TextEncoder().encode(_0x307c08);
      const _0x4c8785 = {
        name: "AES-CBC",
        iv: _0x338d81
      };
      const _0x2d9471 = await window.crypto.subtle.encrypt(_0x4c8785, _0x7a5167, _0x807152);
      return {
        encryptedData: new Uint8Array(_0x2d9471),
        iv: _0x338d81
      };
    }
  }
  async function _0x51ef46(_0x2c55ab, _0xabc3c0) {
    const _0x15ee3d = await window.crypto.subtle.exportKey("raw", _0x2c55ab);
    const _0x238a19 = {
      name: "RSA-OAEP"
    };
    const _0x48ba26 = await window.crypto.subtle.encrypt(_0x238a19, _0xabc3c0, _0x15ee3d);
    return new Uint8Array(_0x48ba26);
  }
  function _0x4a670d(_0x20a182) {
    {
      let _0x1fe2ec = "";
      const _0x194a03 = new Uint8Array(_0x20a182);
      for (let _0x24c65b = 0; _0x24c65b < _0x194a03.byteLength; _0x24c65b++) {
        {
          _0x1fe2ec += String.fromCharCode(_0x194a03[_0x24c65b]);
        }
      }
      return window.btoa(_0x1fe2ec);
    }
  }
  function _0x1a6a42(_0x453ac6) {
    return md5(_0x453ac6 + _0x31f0f2);
  }
  function _0x59a797(_0x89161a) {
    {
      const _0x4dac0d = Math.floor(Date.now() / 1000).toString();
      const _0x4d4d15 = _0x1a6a42(_0x4dac0d);
      const _0x29d084 = {
        ..._0x89161a,
        timestamp: _0x4dac0d,
        signature: _0x4d4d15
      };
      return _0x29d084;
    }
  }
  async function _0x1848cb(_0x1f4de6) {
    try {
      {
        const _0x46c6da = await _0x1ccb79();
        const _0x1bb758 = await _0x5b8cde(_0x46c6da);
        const _0x1d2e89 = await _0x3211d4();
        const _0x3d4eda = Math.floor(Date.now() / 1000).toString();
        const _0xa6d9e0 = _0x1a6a42(_0x3d4eda);
        const _0x4b7531 = {
          timestamp: _0x3d4eda,
          signature: _0xa6d9e0,
          params: _0x1f4de6
        };
        const _0x3d9350 = JSON.stringify(_0x4b7531);
        const {
          encryptedData: _0x2bc1f9,
          iv: _0x533a94
        } = await _0x24ee12(_0x3d9350, _0x1d2e89);
        const _0x5d6630 = await _0x51ef46(_0x1d2e89, _0x1bb758);
        const _0xf159ae = {
          encrypted_aes_key: _0x4a670d(_0x5d6630),
          encrypted_data: _0x4a670d(_0x2bc1f9),
          iv: _0x4a670d(_0x533a94)
        };
        return {
          encrypted_data: btoa(JSON.stringify(_0xf159ae))
        };
      }
    } catch (_0x5b490f) {
      console.error("加密请求参数失败:", _0x5b490f);
      console.warn("回退到传统安全参数方式");
      return _0x59a797(_0x1f4de6);
    }
  }
  function _0xd26a2e(_0x596a79) {
    {
      if (!_0x596a79 || !_0x596a79.timestamp || !_0x596a79.signature) {
        return false;
      }
      const _0x35b610 = _0x1a6a42(_0x596a79.timestamp);
      return _0x35b610 === _0x596a79.signature;
    }
  }
  async function _0x4cb464(_0x2401df, _0x127945 = {}, _0x55d10a = {}) {
    const {
      useEncryption = true,
      method = "POST"
    } = _0x55d10a;
    try {
      {
        let _0x18f82f;
        if (useEncryption) {
          _0x18f82f = await _0x1848cb(_0x127945);
        } else {
          {
            _0x18f82f = _0x59a797(_0x127945);
          }
        }
        const _0x2195e1 = {
          "Content-Type": "application/x-www-form-urlencoded"
        };
        const _0x60b0a0 = {
          method: method,
          headers: _0x2195e1
        };
        if (method === "POST") {
          _0x60b0a0.body = new URLSearchParams(_0x18f82f).toString();
        } else {
          {
            const _0x1543f9 = new URLSearchParams(_0x18f82f).toString();
            _0x2401df += (_0x2401df.includes("?") ? "&" : "?") + _0x1543f9;
          }
        }
        const _0x468edb = await fetch(_0x2401df, _0x60b0a0);
        if (!_0x468edb.ok) {
          throw new Error("HTTP " + _0x468edb.status + ": " + _0x468edb.statusText);
        }
        return await _0x468edb.json();
      }
    } catch (_0xc0039) {
      console.error("安全API请求失败:", _0xc0039);
      throw _0xc0039;
    }
  }
  function _0x3d74b9() {
    _0x49ed18 = null;
    _0x4813f3 = null;
    _0x11661c = null;
  }
  const _0x3ea77c = {
    addSecurityParams: _0x59a797,
    verifyResponseSignature: _0xd26a2e,
    addEncryptedSecurityParams: _0x1848cb,
    secureApiRequest: _0x4cb464,
    fetchServerPublicKey: _0x1ccb79,
    clearKeyCache: _0x3d74b9,
    generateClientKeyPair: _0x462196
  };
  return _0x3ea77c;
}();
window.ApiSecurity = ApiSecurity;