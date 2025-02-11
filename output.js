//Tue Feb 11 2025 07:47:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var l1il1l = [[window]];
function liIil(IllI1I, liIii) {
  var IlIIl = function (lI1liI) {
    var iI11Il = true;
    return function (iIII1i, iil1i1) {
      var I1lIii = "‮";
      var IiI1I = iI11Il ? function () {
        if (I1lIii === "‮" && iil1i1) {
          var i11ill = iil1i1.apply(iIII1i, arguments);
          iil1i1 = null;
          return i11ill;
        }
      } : function (lI1liI) {};
      iI11Il = false;
      return IiI1I;
    };
  }();
  var IIIl1l = IlIIl(this, function () {
    var il1i1l = function () {};
    var IlIlll = function () {
      var IIIl1I;
      try {
        IIIl1I = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (lllil1) {
        IIIl1I = window;
      }
      return IIIl1I;
    };
    var iil1il = IlIlll();
    if (!iil1il.console) {
      iil1il.console = function (il1i1l) {
        var lllilI = {};
        lllilI.log = il1i1l;
        lllilI.warn = il1i1l;
        lllilI.debug = il1i1l;
        lllilI.info = il1i1l;
        lllilI.error = il1i1l;
        lllilI.exception = il1i1l;
        lllilI.trace = il1i1l;
        return lllilI;
      }(il1i1l);
    } else {
      iil1il.console.log = il1i1l;
      iil1il.console.warn = il1i1l;
      iil1il.console.debug = il1i1l;
      iil1il.console.info = il1i1l;
      iil1il.console.error = il1i1l;
      iil1il.console.exception = il1i1l;
      iil1il.console.trace = il1i1l;
    }
  });
  IIIl1l();
  return IllI1I + liIii;
}
function IIIl11(I1lIi1) {
  return eval(I1lIi1);
}
var iIiIi = "baidu.com";
var iil1ll = "baidu.com";
l1il1l[0][1] = "mw0.cc.lc";
l1il1l[0][0][iIiIi = liIil("de", liIil("cod", "e_url"))] = function (Ill1I, i11iiI) {
  return liIil("1289332981hjkdsh", "fhkwf9384");
};
l1il1l[0][0][liIil("de", liIil("cod", "e_url"))][liIil("toSt", "ring")] = function () {
  return liIil("() { [nati", liIil("ve co", "de] }"));
};
l1il1l[0][0][iil1ll = liIil("en", liIil("cod", "e_url"))] = function (l1iIII, llI1I1) {
  return liIil("1289332981hjkdsh", "fhkwf9384");
};
l1il1l[0][0][liIil("en", liIil("cod", "e_url"))][liIil("toSt", "ring")] = function () {
  return liIil("() { [nati", liIil("ve co", "de] }"));
};
l1il1l[0][0][l1il1l[0][1] = l1il1l[0][1].slice(-2)] = function (lillII, ii1ilI) {
  return liIil("1289332981hjkdsh", "fhkwf9384");
};
l1il1l[0][0][l1il1l[0][1]][liIil("toSt", "ring")] = function () {
  return liIil("() { [nati", liIil("ve co", "de] }"));
};
if (Host == Domain) {
  var IIIII1 = {
    "document": {
      "domain": "baidu.com"
    }
  };
  try {
    IIIII1 = IIIl11("window;");
  } catch (I1lIlI) {}
  kx = IIIII1.document.doctype;
  if (IIIII1.document.domain == Domain) {
    l1il1l[0][0][iIiIi] = function (llI1II, lIli1l) {
      return authCrypt.decode(llI1II, lIli1l);
    };
    IIIII1.document.domain == Host ? vv = true : vv = false;
    var I1l11i = false;
    try {
      I1l11i = IIIl11("require;");
    } catch (lillIi) {}
    l1il1l[0][0][iil1ll] = function (illIi1, ii1ili) {
      vv ? illIi1 : I1l11i ? illIi1 = illIi1 + "sb" : illIi1;
      return authCrypt.encode(illIi1, ii1ili, 0);
    };
    l1il1l[0][0][l1il1l[0][1]] = function (liil1l) {
      vv ? liil1l : I1l11i ? liil1l = liil1l + "sb" : liil1l;
      return lca(lcb(lcd(lco(liil1l))));
    };
  }
  kx ? ks = kx.name : ks = "";
  function AES_ECB(iIIiiI, liiI1i) {
    ks == "html" ? iIIiiI : iIIiiI = iIIiiI + "sb";
    enc = CryptoJS.AES.encrypt(iIIiiI, liiI1i, {
      "mode": CryptoJS.mode.ECB
    });
    return enc.ciphertext.toString();
  }
  function AES_CBC(i1ill, I1l11l) {
    ks == "html" ? i1ill : i1ill = i1ill + "sb";
    ks == "html" ? llIll = I1l11l.substring(0, 16) : llIll = I1l11l.substring(16, 32);
    ks == "html" ? iilli = I1l11l.substring(16, 32) : llIll = I1l11l.substring(0, 16);
    var IlllIl = CryptoJS.enc.Utf8.parse(i1ill);
    IlllIl = CryptoJS.enc.Base64.stringify(IlllIl);
    var llIll = CryptoJS.enc.Latin1.parse(llIll);
    var iilli = CryptoJS.enc.Latin1.parse(iilli);
    var il1iII = CryptoJS.AES.encrypt(IlllIl, llIll, {
      "iv": iilli,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return il1iII;
  }
  function AES_CBC_DE(II11lI, lI1IIi) {
    ks == "html" ? I1iIIl = lI1IIi.substring(0, 16) : I1iIIl = lI1IIi.substring(16, 32);
    ks == "html" ? I1iIIi = lI1IIi.substring(16, 32) : I1iIIl = lI1IIi.substring(0, 16);
    var I1iIIl = CryptoJS.enc.Latin1.parse(I1iIIl);
    var I1iIIi = CryptoJS.enc.Latin1.parse(I1iIIi);
    var i1l1Ii = CryptoJS.AES.decrypt(II11lI, I1iIIl, {
      "iv": I1iIIi,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(i1l1Ii);
  }
  function TSTKC(I1iIII) {
    var II11i1,
      iliIil = String(I1iIII.time),
      iliIii = I1iIII.key,
      lill1i = I1iIII.key1,
      il1li = I1iIII.sign1,
      iIIill = I1iIII.token1;
    try {
      II11i1 = IIIl11("process;");
    } catch (iilii) {}
    II11i1 ? s = "2625" : s = "2624";
    s = s.split("");
    for (var Ill11i = iliIil.split("")[s[0]] || "e", iilil = iliIii.split("")[s[1]] || "t", Ill11l = lill1i.split("")[s[2]] || "c", liIil = il1li.split("")[il1li.split("").length - s[3]] || "n", i1ilIi = iIIill.split(""), lill1l = [], l1l1i1 = 0; 2 * l1l1i1 < i1ilIi.length; l1l1i1++) switch (lill1l.push(i1ilIi[i1ilIi.length - l1l1i1 - 1]), l1l1i1 < i1ilIi.length - l1l1i1 - 1 && lill1l.push(iIIill[l1l1i1]), l1l1i1) {
      case 1:
        lill1l.push(Ill11i);
        break;
      case 2:
        lill1l.push(iilil);
        break;
      case 3:
        lill1l.push(Ill11l);
        break;
      case 4:
        lill1l.push(liIil);
    }
    var i1iiI = lill1l.join("");
    return i1iiI;
  }
}
iｉl = "jsjiami.com.v6";