//Thu Jan 23 2025 06:55:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let mywa;
const cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
}) : {
  decode: () => {
    throw Error("TextDecoder not available");
  }
};
typeof TextDecoder !== "undefined" && cachedTextDecoder.decode();
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) && (cachedUint8ArrayMemory0 = new Uint8Array(mywa.memory.buffer));
  return cachedUint8ArrayMemory0;
}
function getStringFrommywa0(_0x5902bc, _0x4d89f1) {
  _0x5902bc = _0x5902bc >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(_0x5902bc, _0x5902bc + _0x4d89f1));
}
let mywa_VECTOR_LEN = 0;
function passArray8Tomywa0(_0x20c241, _0x148c44) {
  const _0x12b79f = _0x148c44(_0x20c241.length * 1, 1) >>> 0;
  getUint8ArrayMemory0().set(_0x20c241, _0x12b79f / 1);
  mywa_VECTOR_LEN = _0x20c241.length;
  return _0x12b79f;
}
function takeFromExternrefTable0(_0x4f4adb) {
  const _0x149582 = mywa.__wbindgen_export_0.get(_0x4f4adb);
  mywa.__externref_table_dealloc(_0x4f4adb);
  return _0x149582;
}
export function gotoms(_0x2f673b) {
  let _0x45b5df, _0x14a53d;
  try {
    const _0x3fb510 = passArray8Tomywa0(_0x2f673b, mywa.__wbindgen_malloc),
      _0x58b109 = mywa_VECTOR_LEN,
      _0x3a5c50 = mywa.gotoms(_0x3fb510, _0x58b109);
    var _0x4ba5d7 = _0x3a5c50[0],
      _0x1c395e = _0x3a5c50[1];
    if (_0x3a5c50[3]) {
      _0x4ba5d7 = 0;
      _0x1c395e = 0;
      throw takeFromExternrefTable0(_0x3a5c50[2]);
    }
    _0x45b5df = _0x4ba5d7;
    _0x14a53d = _0x1c395e;
    return getStringFrommywa0(_0x4ba5d7, _0x1c395e);
  } finally {
    mywa.__wbindgen_free(_0x45b5df, _0x14a53d, 1);
  }
}
async function __wbg_load(_0x254234, _0x4d24b2) {
  if (typeof Response === "function" && _0x254234 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(_0x254234, _0x4d24b2);
      } catch (_0x46b84c) {
        if (_0x254234.headers.get("Content-Type") != "application/mywa") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve mywa with `application/mywa` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _0x46b84c);
        } else {
          throw _0x46b84c;
        }
      }
    }
    const _0x34fb4e = await _0x254234.arrayBuffer();
    return await WebAssembly.instantiate(_0x34fb4e, _0x4d24b2);
  } else {
    const _0x7cf485 = await WebAssembly.instantiate(_0x254234, _0x4d24b2);
    return _0x7cf485 instanceof WebAssembly.Instance ? {
      instance: _0x7cf485,
      module: _0x254234
    } : _0x7cf485;
  }
}
function __wbg_get_imports() {
  const _0x4aed12 = {
    wbg: {}
  };
  _0x4aed12.wbg.__wbindgen_string_new = function (_0x36bb64, _0x934b61) {
    const _0x1e3ded = getStringFrommywa0(_0x36bb64, _0x934b61);
    return _0x1e3ded;
  };
  _0x4aed12.wbg.__wbindgen_init_externref_table = function () {
    const _0x40f6f9 = mywa.__wbindgen_export_0,
      _0x508674 = _0x40f6f9.grow(4);
    _0x40f6f9.set(0, undefined);
    _0x40f6f9.set(_0x508674 + 0, undefined);
    _0x40f6f9.set(_0x508674 + 1, null);
    _0x40f6f9.set(_0x508674 + 2, true);
    _0x40f6f9.set(_0x508674 + 3, false);
  };
  return _0x4aed12;
}
function __wbg_init_memory(_0x1ebeb9, _0x5cbd5b) {}
function __wbg_finalize_init(_0x2eb9ed, _0x27f2dd) {
  mywa = _0x2eb9ed.exports;
  __wbg_init.__wbindgen_mywa_module = _0x27f2dd;
  cachedUint8ArrayMemory0 = null;
  mywa.__wbindgen_start();
  return mywa;
}
function initSync(_0x30123a) {
  if (mywa !== undefined) {
    return mywa;
  }
  typeof _0x30123a !== "undefined" && (Object.getPrototypeOf(_0x30123a) === Object.prototype ? {
    module: _0x30123a
  } = _0x30123a : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const _0xd8c4b5 = __wbg_get_imports();
  __wbg_init_memory(_0xd8c4b5);
  !(_0x30123a instanceof WebAssembly.Module) && (_0x30123a = new WebAssembly.Module(_0x30123a));
  const _0x2a05f8 = new WebAssembly.Instance(_0x30123a, _0xd8c4b5);
  return __wbg_finalize_init(_0x2a05f8, _0x30123a);
}
function myString(_0xdc0719) {
  return _0xdc0719.map(_0xf1c326 => String.fromCharCode(_0xf1c326)).join("");
}
async function __wbg_init(_0x5d82ed) {
  if (mywa !== undefined) {
    return mywa;
  }
  typeof _0x5d82ed !== "undefined" && (Object.getPrototypeOf(_0x5d82ed) === Object.prototype ? {
    module_or_path: _0x5d82ed
  } = _0x5d82ed : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  if (typeof _0x5d82ed === "undefined") {
    const _0x8ec53f = [98, 111, 111, 116, 115, 116, 114, 97, 112, 115, 95, 98, 103, 46, 115, 118, 103],
      _0x383d29 = myString(_0x8ec53f);
    _0x5d82ed = new URL(_0x383d29, import.meta.url);
  }
  const _0x533b01 = __wbg_get_imports();
  (typeof _0x5d82ed === "string" || typeof Request === "function" && _0x5d82ed instanceof Request || typeof URL === "function" && _0x5d82ed instanceof URL) && (_0x5d82ed = fetch(_0x5d82ed));
  __wbg_init_memory(_0x533b01);
  const {
    instance: _0x4d4ae1,
    module: _0x3c7a80
  } = await __wbg_load(await _0x5d82ed, _0x533b01);
  return __wbg_finalize_init(_0x4d4ae1, _0x3c7a80);
}
export { initSync };
export default __wbg_init;