function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$":
  /*!*********************************************************************************!*\
    !*** ./node_modules/@angular/common/locales lazy ^\.\/.*\.js$ namespace object ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCommonLocalesLazyRecursiveJs$(module, exports, __webpack_require__) {
    var map = {
      "./af-NA.js": ["./node_modules/@angular/common/locales/af-NA.js", 0],
      "./af.js": ["./node_modules/@angular/common/locales/af.js", 1],
      "./agq.js": ["./node_modules/@angular/common/locales/agq.js", 2],
      "./ak.js": ["./node_modules/@angular/common/locales/ak.js", 3],
      "./am.js": ["./node_modules/@angular/common/locales/am.js", 4],
      "./ar-AE.js": ["./node_modules/@angular/common/locales/ar-AE.js", 5],
      "./ar-BH.js": ["./node_modules/@angular/common/locales/ar-BH.js", 6],
      "./ar-DJ.js": ["./node_modules/@angular/common/locales/ar-DJ.js", 7],
      "./ar-DZ.js": ["./node_modules/@angular/common/locales/ar-DZ.js", 8],
      "./ar-EG.js": ["./node_modules/@angular/common/locales/ar-EG.js", 9],
      "./ar-EH.js": ["./node_modules/@angular/common/locales/ar-EH.js", 10],
      "./ar-ER.js": ["./node_modules/@angular/common/locales/ar-ER.js", 11],
      "./ar-IL.js": ["./node_modules/@angular/common/locales/ar-IL.js", 12],
      "./ar-IQ.js": ["./node_modules/@angular/common/locales/ar-IQ.js", 13],
      "./ar-JO.js": ["./node_modules/@angular/common/locales/ar-JO.js", 14],
      "./ar-KM.js": ["./node_modules/@angular/common/locales/ar-KM.js", 15],
      "./ar-KW.js": ["./node_modules/@angular/common/locales/ar-KW.js", 16],
      "./ar-LB.js": ["./node_modules/@angular/common/locales/ar-LB.js", 17],
      "./ar-LY.js": ["./node_modules/@angular/common/locales/ar-LY.js", 18],
      "./ar-MA.js": ["./node_modules/@angular/common/locales/ar-MA.js", 19],
      "./ar-MR.js": ["./node_modules/@angular/common/locales/ar-MR.js", 20],
      "./ar-OM.js": ["./node_modules/@angular/common/locales/ar-OM.js", 21],
      "./ar-PS.js": ["./node_modules/@angular/common/locales/ar-PS.js", 22],
      "./ar-QA.js": ["./node_modules/@angular/common/locales/ar-QA.js", 23],
      "./ar-SA.js": ["./node_modules/@angular/common/locales/ar-SA.js", 24],
      "./ar-SD.js": ["./node_modules/@angular/common/locales/ar-SD.js", 25],
      "./ar-SO.js": ["./node_modules/@angular/common/locales/ar-SO.js", 26],
      "./ar-SS.js": ["./node_modules/@angular/common/locales/ar-SS.js", 27],
      "./ar-SY.js": ["./node_modules/@angular/common/locales/ar-SY.js", 28],
      "./ar-TD.js": ["./node_modules/@angular/common/locales/ar-TD.js", 29],
      "./ar-TN.js": ["./node_modules/@angular/common/locales/ar-TN.js", 30],
      "./ar-YE.js": ["./node_modules/@angular/common/locales/ar-YE.js", 31],
      "./ar.js": ["./node_modules/@angular/common/locales/ar.js", 32],
      "./as.js": ["./node_modules/@angular/common/locales/as.js", 33],
      "./asa.js": ["./node_modules/@angular/common/locales/asa.js", 34],
      "./ast.js": ["./node_modules/@angular/common/locales/ast.js", 35],
      "./az-Cyrl.js": ["./node_modules/@angular/common/locales/az-Cyrl.js", 36],
      "./az-Latn.js": ["./node_modules/@angular/common/locales/az-Latn.js", 37],
      "./az.js": ["./node_modules/@angular/common/locales/az.js", 38],
      "./bas.js": ["./node_modules/@angular/common/locales/bas.js", 39],
      "./be.js": ["./node_modules/@angular/common/locales/be.js", 40],
      "./bem.js": ["./node_modules/@angular/common/locales/bem.js", 41],
      "./bez.js": ["./node_modules/@angular/common/locales/bez.js", 42],
      "./bg.js": ["./node_modules/@angular/common/locales/bg.js", 43],
      "./bm.js": ["./node_modules/@angular/common/locales/bm.js", 44],
      "./bn-IN.js": ["./node_modules/@angular/common/locales/bn-IN.js", 45],
      "./bn.js": ["./node_modules/@angular/common/locales/bn.js", 46],
      "./bo-IN.js": ["./node_modules/@angular/common/locales/bo-IN.js", 47],
      "./bo.js": ["./node_modules/@angular/common/locales/bo.js", 48],
      "./br.js": ["./node_modules/@angular/common/locales/br.js", 49],
      "./brx.js": ["./node_modules/@angular/common/locales/brx.js", 50],
      "./bs-Cyrl.js": ["./node_modules/@angular/common/locales/bs-Cyrl.js", 51],
      "./bs-Latn.js": ["./node_modules/@angular/common/locales/bs-Latn.js", 52],
      "./bs.js": ["./node_modules/@angular/common/locales/bs.js", 53],
      "./ca-AD.js": ["./node_modules/@angular/common/locales/ca-AD.js", 54],
      "./ca-ES-VALENCIA.js": ["./node_modules/@angular/common/locales/ca-ES-VALENCIA.js", 55],
      "./ca-FR.js": ["./node_modules/@angular/common/locales/ca-FR.js", 56],
      "./ca-IT.js": ["./node_modules/@angular/common/locales/ca-IT.js", 57],
      "./ca.js": ["./node_modules/@angular/common/locales/ca.js", 58],
      "./ccp-IN.js": ["./node_modules/@angular/common/locales/ccp-IN.js", 59],
      "./ccp.js": ["./node_modules/@angular/common/locales/ccp.js", 60],
      "./ce.js": ["./node_modules/@angular/common/locales/ce.js", 61],
      "./ceb.js": ["./node_modules/@angular/common/locales/ceb.js", 62],
      "./cgg.js": ["./node_modules/@angular/common/locales/cgg.js", 63],
      "./chr.js": ["./node_modules/@angular/common/locales/chr.js", 64],
      "./ckb-IR.js": ["./node_modules/@angular/common/locales/ckb-IR.js", 65],
      "./ckb.js": ["./node_modules/@angular/common/locales/ckb.js", 66],
      "./cs.js": ["./node_modules/@angular/common/locales/cs.js", 67],
      "./cu.js": ["./node_modules/@angular/common/locales/cu.js", 68],
      "./cy.js": ["./node_modules/@angular/common/locales/cy.js", 69],
      "./da-GL.js": ["./node_modules/@angular/common/locales/da-GL.js", 70],
      "./da.js": ["./node_modules/@angular/common/locales/da.js", 71],
      "./dav.js": ["./node_modules/@angular/common/locales/dav.js", 72],
      "./de-AT.js": ["./node_modules/@angular/common/locales/de-AT.js", 73],
      "./de-BE.js": ["./node_modules/@angular/common/locales/de-BE.js", 74],
      "./de-CH.js": ["./node_modules/@angular/common/locales/de-CH.js", 75],
      "./de-IT.js": ["./node_modules/@angular/common/locales/de-IT.js", 76],
      "./de-LI.js": ["./node_modules/@angular/common/locales/de-LI.js", 77],
      "./de-LU.js": ["./node_modules/@angular/common/locales/de-LU.js", 78],
      "./de.js": ["./node_modules/@angular/common/locales/de.js", 79],
      "./dje.js": ["./node_modules/@angular/common/locales/dje.js", 80],
      "./dsb.js": ["./node_modules/@angular/common/locales/dsb.js", 81],
      "./dua.js": ["./node_modules/@angular/common/locales/dua.js", 82],
      "./dyo.js": ["./node_modules/@angular/common/locales/dyo.js", 83],
      "./dz.js": ["./node_modules/@angular/common/locales/dz.js", 84],
      "./ebu.js": ["./node_modules/@angular/common/locales/ebu.js", 85],
      "./ee-TG.js": ["./node_modules/@angular/common/locales/ee-TG.js", 86],
      "./ee.js": ["./node_modules/@angular/common/locales/ee.js", 87],
      "./el-CY.js": ["./node_modules/@angular/common/locales/el-CY.js", 88],
      "./el.js": ["./node_modules/@angular/common/locales/el.js", 89],
      "./en-001.js": ["./node_modules/@angular/common/locales/en-001.js", 90],
      "./en-150.js": ["./node_modules/@angular/common/locales/en-150.js", 91],
      "./en-AE.js": ["./node_modules/@angular/common/locales/en-AE.js", 92],
      "./en-AG.js": ["./node_modules/@angular/common/locales/en-AG.js", 93],
      "./en-AI.js": ["./node_modules/@angular/common/locales/en-AI.js", 94],
      "./en-AS.js": ["./node_modules/@angular/common/locales/en-AS.js", 95],
      "./en-AT.js": ["./node_modules/@angular/common/locales/en-AT.js", 96],
      "./en-AU.js": ["./node_modules/@angular/common/locales/en-AU.js", 97],
      "./en-BB.js": ["./node_modules/@angular/common/locales/en-BB.js", 98],
      "./en-BE.js": ["./node_modules/@angular/common/locales/en-BE.js", 99],
      "./en-BI.js": ["./node_modules/@angular/common/locales/en-BI.js", 100],
      "./en-BM.js": ["./node_modules/@angular/common/locales/en-BM.js", 101],
      "./en-BS.js": ["./node_modules/@angular/common/locales/en-BS.js", 102],
      "./en-BW.js": ["./node_modules/@angular/common/locales/en-BW.js", 103],
      "./en-BZ.js": ["./node_modules/@angular/common/locales/en-BZ.js", 104],
      "./en-CA.js": ["./node_modules/@angular/common/locales/en-CA.js", 105],
      "./en-CC.js": ["./node_modules/@angular/common/locales/en-CC.js", 106],
      "./en-CH.js": ["./node_modules/@angular/common/locales/en-CH.js", 107],
      "./en-CK.js": ["./node_modules/@angular/common/locales/en-CK.js", 108],
      "./en-CM.js": ["./node_modules/@angular/common/locales/en-CM.js", 109],
      "./en-CX.js": ["./node_modules/@angular/common/locales/en-CX.js", 110],
      "./en-CY.js": ["./node_modules/@angular/common/locales/en-CY.js", 111],
      "./en-DE.js": ["./node_modules/@angular/common/locales/en-DE.js", 112],
      "./en-DG.js": ["./node_modules/@angular/common/locales/en-DG.js", 113],
      "./en-DK.js": ["./node_modules/@angular/common/locales/en-DK.js", 114],
      "./en-DM.js": ["./node_modules/@angular/common/locales/en-DM.js", 115],
      "./en-ER.js": ["./node_modules/@angular/common/locales/en-ER.js", 116],
      "./en-FI.js": ["./node_modules/@angular/common/locales/en-FI.js", 117],
      "./en-FJ.js": ["./node_modules/@angular/common/locales/en-FJ.js", 118],
      "./en-FK.js": ["./node_modules/@angular/common/locales/en-FK.js", 119],
      "./en-FM.js": ["./node_modules/@angular/common/locales/en-FM.js", 120],
      "./en-GB.js": ["./node_modules/@angular/common/locales/en-GB.js", 121],
      "./en-GD.js": ["./node_modules/@angular/common/locales/en-GD.js", 122],
      "./en-GG.js": ["./node_modules/@angular/common/locales/en-GG.js", 123],
      "./en-GH.js": ["./node_modules/@angular/common/locales/en-GH.js", 124],
      "./en-GI.js": ["./node_modules/@angular/common/locales/en-GI.js", 125],
      "./en-GM.js": ["./node_modules/@angular/common/locales/en-GM.js", 126],
      "./en-GU.js": ["./node_modules/@angular/common/locales/en-GU.js", 127],
      "./en-GY.js": ["./node_modules/@angular/common/locales/en-GY.js", 128],
      "./en-HK.js": ["./node_modules/@angular/common/locales/en-HK.js", 129],
      "./en-IE.js": ["./node_modules/@angular/common/locales/en-IE.js", 130],
      "./en-IL.js": ["./node_modules/@angular/common/locales/en-IL.js", 131],
      "./en-IM.js": ["./node_modules/@angular/common/locales/en-IM.js", 132],
      "./en-IN.js": ["./node_modules/@angular/common/locales/en-IN.js", 133],
      "./en-IO.js": ["./node_modules/@angular/common/locales/en-IO.js", 134],
      "./en-JE.js": ["./node_modules/@angular/common/locales/en-JE.js", 135],
      "./en-JM.js": ["./node_modules/@angular/common/locales/en-JM.js", 136],
      "./en-KE.js": ["./node_modules/@angular/common/locales/en-KE.js", 137],
      "./en-KI.js": ["./node_modules/@angular/common/locales/en-KI.js", 138],
      "./en-KN.js": ["./node_modules/@angular/common/locales/en-KN.js", 139],
      "./en-KY.js": ["./node_modules/@angular/common/locales/en-KY.js", 140],
      "./en-LC.js": ["./node_modules/@angular/common/locales/en-LC.js", 141],
      "./en-LR.js": ["./node_modules/@angular/common/locales/en-LR.js", 142],
      "./en-LS.js": ["./node_modules/@angular/common/locales/en-LS.js", 143],
      "./en-MG.js": ["./node_modules/@angular/common/locales/en-MG.js", 144],
      "./en-MH.js": ["./node_modules/@angular/common/locales/en-MH.js", 145],
      "./en-MO.js": ["./node_modules/@angular/common/locales/en-MO.js", 146],
      "./en-MP.js": ["./node_modules/@angular/common/locales/en-MP.js", 147],
      "./en-MS.js": ["./node_modules/@angular/common/locales/en-MS.js", 148],
      "./en-MT.js": ["./node_modules/@angular/common/locales/en-MT.js", 149],
      "./en-MU.js": ["./node_modules/@angular/common/locales/en-MU.js", 150],
      "./en-MW.js": ["./node_modules/@angular/common/locales/en-MW.js", 151],
      "./en-MY.js": ["./node_modules/@angular/common/locales/en-MY.js", 152],
      "./en-NA.js": ["./node_modules/@angular/common/locales/en-NA.js", 153],
      "./en-NF.js": ["./node_modules/@angular/common/locales/en-NF.js", 154],
      "./en-NG.js": ["./node_modules/@angular/common/locales/en-NG.js", 155],
      "./en-NL.js": ["./node_modules/@angular/common/locales/en-NL.js", 156],
      "./en-NR.js": ["./node_modules/@angular/common/locales/en-NR.js", 157],
      "./en-NU.js": ["./node_modules/@angular/common/locales/en-NU.js", 158],
      "./en-NZ.js": ["./node_modules/@angular/common/locales/en-NZ.js", 159],
      "./en-PG.js": ["./node_modules/@angular/common/locales/en-PG.js", 160],
      "./en-PH.js": ["./node_modules/@angular/common/locales/en-PH.js", 161],
      "./en-PK.js": ["./node_modules/@angular/common/locales/en-PK.js", 162],
      "./en-PN.js": ["./node_modules/@angular/common/locales/en-PN.js", 163],
      "./en-PR.js": ["./node_modules/@angular/common/locales/en-PR.js", 164],
      "./en-PW.js": ["./node_modules/@angular/common/locales/en-PW.js", 165],
      "./en-RW.js": ["./node_modules/@angular/common/locales/en-RW.js", 166],
      "./en-SB.js": ["./node_modules/@angular/common/locales/en-SB.js", 167],
      "./en-SC.js": ["./node_modules/@angular/common/locales/en-SC.js", 168],
      "./en-SD.js": ["./node_modules/@angular/common/locales/en-SD.js", 169],
      "./en-SE.js": ["./node_modules/@angular/common/locales/en-SE.js", 170],
      "./en-SG.js": ["./node_modules/@angular/common/locales/en-SG.js", 171],
      "./en-SH.js": ["./node_modules/@angular/common/locales/en-SH.js", 172],
      "./en-SI.js": ["./node_modules/@angular/common/locales/en-SI.js", 173],
      "./en-SL.js": ["./node_modules/@angular/common/locales/en-SL.js", 174],
      "./en-SS.js": ["./node_modules/@angular/common/locales/en-SS.js", 175],
      "./en-SX.js": ["./node_modules/@angular/common/locales/en-SX.js", 176],
      "./en-SZ.js": ["./node_modules/@angular/common/locales/en-SZ.js", 177],
      "./en-TC.js": ["./node_modules/@angular/common/locales/en-TC.js", 178],
      "./en-TK.js": ["./node_modules/@angular/common/locales/en-TK.js", 179],
      "./en-TO.js": ["./node_modules/@angular/common/locales/en-TO.js", 180],
      "./en-TT.js": ["./node_modules/@angular/common/locales/en-TT.js", 181],
      "./en-TV.js": ["./node_modules/@angular/common/locales/en-TV.js", 182],
      "./en-TZ.js": ["./node_modules/@angular/common/locales/en-TZ.js", 183],
      "./en-UG.js": ["./node_modules/@angular/common/locales/en-UG.js", 184],
      "./en-UM.js": ["./node_modules/@angular/common/locales/en-UM.js", 185],
      "./en-US-POSIX.js": ["./node_modules/@angular/common/locales/en-US-POSIX.js", 186],
      "./en-VC.js": ["./node_modules/@angular/common/locales/en-VC.js", 187],
      "./en-VG.js": ["./node_modules/@angular/common/locales/en-VG.js", 188],
      "./en-VI.js": ["./node_modules/@angular/common/locales/en-VI.js", 189],
      "./en-VU.js": ["./node_modules/@angular/common/locales/en-VU.js", 190],
      "./en-WS.js": ["./node_modules/@angular/common/locales/en-WS.js", 191],
      "./en-ZA.js": ["./node_modules/@angular/common/locales/en-ZA.js", 192],
      "./en-ZM.js": ["./node_modules/@angular/common/locales/en-ZM.js", 193],
      "./en-ZW.js": ["./node_modules/@angular/common/locales/en-ZW.js", 194],
      "./en.js": ["./node_modules/@angular/common/locales/en.js", 195],
      "./eo.js": ["./node_modules/@angular/common/locales/eo.js", 196],
      "./es-419.js": ["./node_modules/@angular/common/locales/es-419.js", 197],
      "./es-AR.js": ["./node_modules/@angular/common/locales/es-AR.js", 198],
      "./es-BO.js": ["./node_modules/@angular/common/locales/es-BO.js", 199],
      "./es-BR.js": ["./node_modules/@angular/common/locales/es-BR.js", 200],
      "./es-BZ.js": ["./node_modules/@angular/common/locales/es-BZ.js", 201],
      "./es-CL.js": ["./node_modules/@angular/common/locales/es-CL.js", 202],
      "./es-CO.js": ["./node_modules/@angular/common/locales/es-CO.js", 203],
      "./es-CR.js": ["./node_modules/@angular/common/locales/es-CR.js", 204],
      "./es-CU.js": ["./node_modules/@angular/common/locales/es-CU.js", 205],
      "./es-DO.js": ["./node_modules/@angular/common/locales/es-DO.js", 206],
      "./es-EA.js": ["./node_modules/@angular/common/locales/es-EA.js", 207],
      "./es-EC.js": ["./node_modules/@angular/common/locales/es-EC.js", 208],
      "./es-GQ.js": ["./node_modules/@angular/common/locales/es-GQ.js", 209],
      "./es-GT.js": ["./node_modules/@angular/common/locales/es-GT.js", 210],
      "./es-HN.js": ["./node_modules/@angular/common/locales/es-HN.js", 211],
      "./es-IC.js": ["./node_modules/@angular/common/locales/es-IC.js", 212],
      "./es-MX.js": ["./node_modules/@angular/common/locales/es-MX.js", 213],
      "./es-NI.js": ["./node_modules/@angular/common/locales/es-NI.js", 214],
      "./es-PA.js": ["./node_modules/@angular/common/locales/es-PA.js", 215],
      "./es-PE.js": ["./node_modules/@angular/common/locales/es-PE.js", 216],
      "./es-PH.js": ["./node_modules/@angular/common/locales/es-PH.js", 217],
      "./es-PR.js": ["./node_modules/@angular/common/locales/es-PR.js", 218],
      "./es-PY.js": ["./node_modules/@angular/common/locales/es-PY.js", 219],
      "./es-SV.js": ["./node_modules/@angular/common/locales/es-SV.js", 220],
      "./es-US.js": ["./node_modules/@angular/common/locales/es-US.js", 221],
      "./es-UY.js": ["./node_modules/@angular/common/locales/es-UY.js", 222],
      "./es-VE.js": ["./node_modules/@angular/common/locales/es-VE.js", 223],
      "./es.js": ["./node_modules/@angular/common/locales/es.js", 224],
      "./et.js": ["./node_modules/@angular/common/locales/et.js", 225],
      "./eu.js": ["./node_modules/@angular/common/locales/eu.js", 226],
      "./ewo.js": ["./node_modules/@angular/common/locales/ewo.js", 227],
      "./extra/af-NA.js": ["./node_modules/@angular/common/locales/extra/af-NA.js", 228],
      "./extra/af.js": ["./node_modules/@angular/common/locales/extra/af.js", 229],
      "./extra/agq.js": ["./node_modules/@angular/common/locales/extra/agq.js", 230],
      "./extra/ak.js": ["./node_modules/@angular/common/locales/extra/ak.js", 231],
      "./extra/am.js": ["./node_modules/@angular/common/locales/extra/am.js", 232],
      "./extra/ar-AE.js": ["./node_modules/@angular/common/locales/extra/ar-AE.js", 233],
      "./extra/ar-BH.js": ["./node_modules/@angular/common/locales/extra/ar-BH.js", 234],
      "./extra/ar-DJ.js": ["./node_modules/@angular/common/locales/extra/ar-DJ.js", 235],
      "./extra/ar-DZ.js": ["./node_modules/@angular/common/locales/extra/ar-DZ.js", 236],
      "./extra/ar-EG.js": ["./node_modules/@angular/common/locales/extra/ar-EG.js", 237],
      "./extra/ar-EH.js": ["./node_modules/@angular/common/locales/extra/ar-EH.js", 238],
      "./extra/ar-ER.js": ["./node_modules/@angular/common/locales/extra/ar-ER.js", 239],
      "./extra/ar-IL.js": ["./node_modules/@angular/common/locales/extra/ar-IL.js", 240],
      "./extra/ar-IQ.js": ["./node_modules/@angular/common/locales/extra/ar-IQ.js", 241],
      "./extra/ar-JO.js": ["./node_modules/@angular/common/locales/extra/ar-JO.js", 242],
      "./extra/ar-KM.js": ["./node_modules/@angular/common/locales/extra/ar-KM.js", 243],
      "./extra/ar-KW.js": ["./node_modules/@angular/common/locales/extra/ar-KW.js", 244],
      "./extra/ar-LB.js": ["./node_modules/@angular/common/locales/extra/ar-LB.js", 245],
      "./extra/ar-LY.js": ["./node_modules/@angular/common/locales/extra/ar-LY.js", 246],
      "./extra/ar-MA.js": ["./node_modules/@angular/common/locales/extra/ar-MA.js", 247],
      "./extra/ar-MR.js": ["./node_modules/@angular/common/locales/extra/ar-MR.js", 248],
      "./extra/ar-OM.js": ["./node_modules/@angular/common/locales/extra/ar-OM.js", 249],
      "./extra/ar-PS.js": ["./node_modules/@angular/common/locales/extra/ar-PS.js", 250],
      "./extra/ar-QA.js": ["./node_modules/@angular/common/locales/extra/ar-QA.js", 251],
      "./extra/ar-SA.js": ["./node_modules/@angular/common/locales/extra/ar-SA.js", 252],
      "./extra/ar-SD.js": ["./node_modules/@angular/common/locales/extra/ar-SD.js", 253],
      "./extra/ar-SO.js": ["./node_modules/@angular/common/locales/extra/ar-SO.js", 254],
      "./extra/ar-SS.js": ["./node_modules/@angular/common/locales/extra/ar-SS.js", 255],
      "./extra/ar-SY.js": ["./node_modules/@angular/common/locales/extra/ar-SY.js", 256],
      "./extra/ar-TD.js": ["./node_modules/@angular/common/locales/extra/ar-TD.js", 257],
      "./extra/ar-TN.js": ["./node_modules/@angular/common/locales/extra/ar-TN.js", 258],
      "./extra/ar-YE.js": ["./node_modules/@angular/common/locales/extra/ar-YE.js", 259],
      "./extra/ar.js": ["./node_modules/@angular/common/locales/extra/ar.js", 260],
      "./extra/as.js": ["./node_modules/@angular/common/locales/extra/as.js", 261],
      "./extra/asa.js": ["./node_modules/@angular/common/locales/extra/asa.js", 262],
      "./extra/ast.js": ["./node_modules/@angular/common/locales/extra/ast.js", 263],
      "./extra/az-Cyrl.js": ["./node_modules/@angular/common/locales/extra/az-Cyrl.js", 264],
      "./extra/az-Latn.js": ["./node_modules/@angular/common/locales/extra/az-Latn.js", 265],
      "./extra/az.js": ["./node_modules/@angular/common/locales/extra/az.js", 266],
      "./extra/bas.js": ["./node_modules/@angular/common/locales/extra/bas.js", 267],
      "./extra/be.js": ["./node_modules/@angular/common/locales/extra/be.js", 268],
      "./extra/bem.js": ["./node_modules/@angular/common/locales/extra/bem.js", 269],
      "./extra/bez.js": ["./node_modules/@angular/common/locales/extra/bez.js", 270],
      "./extra/bg.js": ["./node_modules/@angular/common/locales/extra/bg.js", 271],
      "./extra/bm.js": ["./node_modules/@angular/common/locales/extra/bm.js", 272],
      "./extra/bn-IN.js": ["./node_modules/@angular/common/locales/extra/bn-IN.js", 273],
      "./extra/bn.js": ["./node_modules/@angular/common/locales/extra/bn.js", 274],
      "./extra/bo-IN.js": ["./node_modules/@angular/common/locales/extra/bo-IN.js", 275],
      "./extra/bo.js": ["./node_modules/@angular/common/locales/extra/bo.js", 276],
      "./extra/br.js": ["./node_modules/@angular/common/locales/extra/br.js", 277],
      "./extra/brx.js": ["./node_modules/@angular/common/locales/extra/brx.js", 278],
      "./extra/bs-Cyrl.js": ["./node_modules/@angular/common/locales/extra/bs-Cyrl.js", 279],
      "./extra/bs-Latn.js": ["./node_modules/@angular/common/locales/extra/bs-Latn.js", 280],
      "./extra/bs.js": ["./node_modules/@angular/common/locales/extra/bs.js", 281],
      "./extra/ca-AD.js": ["./node_modules/@angular/common/locales/extra/ca-AD.js", 282],
      "./extra/ca-ES-VALENCIA.js": ["./node_modules/@angular/common/locales/extra/ca-ES-VALENCIA.js", 283],
      "./extra/ca-FR.js": ["./node_modules/@angular/common/locales/extra/ca-FR.js", 284],
      "./extra/ca-IT.js": ["./node_modules/@angular/common/locales/extra/ca-IT.js", 285],
      "./extra/ca.js": ["./node_modules/@angular/common/locales/extra/ca.js", 286],
      "./extra/ccp-IN.js": ["./node_modules/@angular/common/locales/extra/ccp-IN.js", 287],
      "./extra/ccp.js": ["./node_modules/@angular/common/locales/extra/ccp.js", 288],
      "./extra/ce.js": ["./node_modules/@angular/common/locales/extra/ce.js", 289],
      "./extra/ceb.js": ["./node_modules/@angular/common/locales/extra/ceb.js", 290],
      "./extra/cgg.js": ["./node_modules/@angular/common/locales/extra/cgg.js", 291],
      "./extra/chr.js": ["./node_modules/@angular/common/locales/extra/chr.js", 292],
      "./extra/ckb-IR.js": ["./node_modules/@angular/common/locales/extra/ckb-IR.js", 293],
      "./extra/ckb.js": ["./node_modules/@angular/common/locales/extra/ckb.js", 294],
      "./extra/cs.js": ["./node_modules/@angular/common/locales/extra/cs.js", 295],
      "./extra/cu.js": ["./node_modules/@angular/common/locales/extra/cu.js", 296],
      "./extra/cy.js": ["./node_modules/@angular/common/locales/extra/cy.js", 297],
      "./extra/da-GL.js": ["./node_modules/@angular/common/locales/extra/da-GL.js", 298],
      "./extra/da.js": ["./node_modules/@angular/common/locales/extra/da.js", 299],
      "./extra/dav.js": ["./node_modules/@angular/common/locales/extra/dav.js", 300],
      "./extra/de-AT.js": ["./node_modules/@angular/common/locales/extra/de-AT.js", 301],
      "./extra/de-BE.js": ["./node_modules/@angular/common/locales/extra/de-BE.js", 302],
      "./extra/de-CH.js": ["./node_modules/@angular/common/locales/extra/de-CH.js", 303],
      "./extra/de-IT.js": ["./node_modules/@angular/common/locales/extra/de-IT.js", 304],
      "./extra/de-LI.js": ["./node_modules/@angular/common/locales/extra/de-LI.js", 305],
      "./extra/de-LU.js": ["./node_modules/@angular/common/locales/extra/de-LU.js", 306],
      "./extra/de.js": ["./node_modules/@angular/common/locales/extra/de.js", 307],
      "./extra/dje.js": ["./node_modules/@angular/common/locales/extra/dje.js", 308],
      "./extra/dsb.js": ["./node_modules/@angular/common/locales/extra/dsb.js", 309],
      "./extra/dua.js": ["./node_modules/@angular/common/locales/extra/dua.js", 310],
      "./extra/dyo.js": ["./node_modules/@angular/common/locales/extra/dyo.js", 311],
      "./extra/dz.js": ["./node_modules/@angular/common/locales/extra/dz.js", 312],
      "./extra/ebu.js": ["./node_modules/@angular/common/locales/extra/ebu.js", 313],
      "./extra/ee-TG.js": ["./node_modules/@angular/common/locales/extra/ee-TG.js", 314],
      "./extra/ee.js": ["./node_modules/@angular/common/locales/extra/ee.js", 315],
      "./extra/el-CY.js": ["./node_modules/@angular/common/locales/extra/el-CY.js", 316],
      "./extra/el.js": ["./node_modules/@angular/common/locales/extra/el.js", 317],
      "./extra/en-001.js": ["./node_modules/@angular/common/locales/extra/en-001.js", 318],
      "./extra/en-150.js": ["./node_modules/@angular/common/locales/extra/en-150.js", 319],
      "./extra/en-AE.js": ["./node_modules/@angular/common/locales/extra/en-AE.js", 320],
      "./extra/en-AG.js": ["./node_modules/@angular/common/locales/extra/en-AG.js", 321],
      "./extra/en-AI.js": ["./node_modules/@angular/common/locales/extra/en-AI.js", 322],
      "./extra/en-AS.js": ["./node_modules/@angular/common/locales/extra/en-AS.js", 323],
      "./extra/en-AT.js": ["./node_modules/@angular/common/locales/extra/en-AT.js", 324],
      "./extra/en-AU.js": ["./node_modules/@angular/common/locales/extra/en-AU.js", 325],
      "./extra/en-BB.js": ["./node_modules/@angular/common/locales/extra/en-BB.js", 326],
      "./extra/en-BE.js": ["./node_modules/@angular/common/locales/extra/en-BE.js", 327],
      "./extra/en-BI.js": ["./node_modules/@angular/common/locales/extra/en-BI.js", 328],
      "./extra/en-BM.js": ["./node_modules/@angular/common/locales/extra/en-BM.js", 329],
      "./extra/en-BS.js": ["./node_modules/@angular/common/locales/extra/en-BS.js", 330],
      "./extra/en-BW.js": ["./node_modules/@angular/common/locales/extra/en-BW.js", 331],
      "./extra/en-BZ.js": ["./node_modules/@angular/common/locales/extra/en-BZ.js", 332],
      "./extra/en-CA.js": ["./node_modules/@angular/common/locales/extra/en-CA.js", 333],
      "./extra/en-CC.js": ["./node_modules/@angular/common/locales/extra/en-CC.js", 334],
      "./extra/en-CH.js": ["./node_modules/@angular/common/locales/extra/en-CH.js", 335],
      "./extra/en-CK.js": ["./node_modules/@angular/common/locales/extra/en-CK.js", 336],
      "./extra/en-CM.js": ["./node_modules/@angular/common/locales/extra/en-CM.js", 337],
      "./extra/en-CX.js": ["./node_modules/@angular/common/locales/extra/en-CX.js", 338],
      "./extra/en-CY.js": ["./node_modules/@angular/common/locales/extra/en-CY.js", 339],
      "./extra/en-DE.js": ["./node_modules/@angular/common/locales/extra/en-DE.js", 340],
      "./extra/en-DG.js": ["./node_modules/@angular/common/locales/extra/en-DG.js", 341],
      "./extra/en-DK.js": ["./node_modules/@angular/common/locales/extra/en-DK.js", 342],
      "./extra/en-DM.js": ["./node_modules/@angular/common/locales/extra/en-DM.js", 343],
      "./extra/en-ER.js": ["./node_modules/@angular/common/locales/extra/en-ER.js", 344],
      "./extra/en-FI.js": ["./node_modules/@angular/common/locales/extra/en-FI.js", 345],
      "./extra/en-FJ.js": ["./node_modules/@angular/common/locales/extra/en-FJ.js", 346],
      "./extra/en-FK.js": ["./node_modules/@angular/common/locales/extra/en-FK.js", 347],
      "./extra/en-FM.js": ["./node_modules/@angular/common/locales/extra/en-FM.js", 348],
      "./extra/en-GB.js": ["./node_modules/@angular/common/locales/extra/en-GB.js", 349],
      "./extra/en-GD.js": ["./node_modules/@angular/common/locales/extra/en-GD.js", 350],
      "./extra/en-GG.js": ["./node_modules/@angular/common/locales/extra/en-GG.js", 351],
      "./extra/en-GH.js": ["./node_modules/@angular/common/locales/extra/en-GH.js", 352],
      "./extra/en-GI.js": ["./node_modules/@angular/common/locales/extra/en-GI.js", 353],
      "./extra/en-GM.js": ["./node_modules/@angular/common/locales/extra/en-GM.js", 354],
      "./extra/en-GU.js": ["./node_modules/@angular/common/locales/extra/en-GU.js", 355],
      "./extra/en-GY.js": ["./node_modules/@angular/common/locales/extra/en-GY.js", 356],
      "./extra/en-HK.js": ["./node_modules/@angular/common/locales/extra/en-HK.js", 357],
      "./extra/en-IE.js": ["./node_modules/@angular/common/locales/extra/en-IE.js", 358],
      "./extra/en-IL.js": ["./node_modules/@angular/common/locales/extra/en-IL.js", 359],
      "./extra/en-IM.js": ["./node_modules/@angular/common/locales/extra/en-IM.js", 360],
      "./extra/en-IN.js": ["./node_modules/@angular/common/locales/extra/en-IN.js", 361],
      "./extra/en-IO.js": ["./node_modules/@angular/common/locales/extra/en-IO.js", 362],
      "./extra/en-JE.js": ["./node_modules/@angular/common/locales/extra/en-JE.js", 363],
      "./extra/en-JM.js": ["./node_modules/@angular/common/locales/extra/en-JM.js", 364],
      "./extra/en-KE.js": ["./node_modules/@angular/common/locales/extra/en-KE.js", 365],
      "./extra/en-KI.js": ["./node_modules/@angular/common/locales/extra/en-KI.js", 366],
      "./extra/en-KN.js": ["./node_modules/@angular/common/locales/extra/en-KN.js", 367],
      "./extra/en-KY.js": ["./node_modules/@angular/common/locales/extra/en-KY.js", 368],
      "./extra/en-LC.js": ["./node_modules/@angular/common/locales/extra/en-LC.js", 369],
      "./extra/en-LR.js": ["./node_modules/@angular/common/locales/extra/en-LR.js", 370],
      "./extra/en-LS.js": ["./node_modules/@angular/common/locales/extra/en-LS.js", 371],
      "./extra/en-MG.js": ["./node_modules/@angular/common/locales/extra/en-MG.js", 372],
      "./extra/en-MH.js": ["./node_modules/@angular/common/locales/extra/en-MH.js", 373],
      "./extra/en-MO.js": ["./node_modules/@angular/common/locales/extra/en-MO.js", 374],
      "./extra/en-MP.js": ["./node_modules/@angular/common/locales/extra/en-MP.js", 375],
      "./extra/en-MS.js": ["./node_modules/@angular/common/locales/extra/en-MS.js", 376],
      "./extra/en-MT.js": ["./node_modules/@angular/common/locales/extra/en-MT.js", 377],
      "./extra/en-MU.js": ["./node_modules/@angular/common/locales/extra/en-MU.js", 378],
      "./extra/en-MW.js": ["./node_modules/@angular/common/locales/extra/en-MW.js", 379],
      "./extra/en-MY.js": ["./node_modules/@angular/common/locales/extra/en-MY.js", 380],
      "./extra/en-NA.js": ["./node_modules/@angular/common/locales/extra/en-NA.js", 381],
      "./extra/en-NF.js": ["./node_modules/@angular/common/locales/extra/en-NF.js", 382],
      "./extra/en-NG.js": ["./node_modules/@angular/common/locales/extra/en-NG.js", 383],
      "./extra/en-NL.js": ["./node_modules/@angular/common/locales/extra/en-NL.js", 384],
      "./extra/en-NR.js": ["./node_modules/@angular/common/locales/extra/en-NR.js", 385],
      "./extra/en-NU.js": ["./node_modules/@angular/common/locales/extra/en-NU.js", 386],
      "./extra/en-NZ.js": ["./node_modules/@angular/common/locales/extra/en-NZ.js", 387],
      "./extra/en-PG.js": ["./node_modules/@angular/common/locales/extra/en-PG.js", 388],
      "./extra/en-PH.js": ["./node_modules/@angular/common/locales/extra/en-PH.js", 389],
      "./extra/en-PK.js": ["./node_modules/@angular/common/locales/extra/en-PK.js", 390],
      "./extra/en-PN.js": ["./node_modules/@angular/common/locales/extra/en-PN.js", 391],
      "./extra/en-PR.js": ["./node_modules/@angular/common/locales/extra/en-PR.js", 392],
      "./extra/en-PW.js": ["./node_modules/@angular/common/locales/extra/en-PW.js", 393],
      "./extra/en-RW.js": ["./node_modules/@angular/common/locales/extra/en-RW.js", 394],
      "./extra/en-SB.js": ["./node_modules/@angular/common/locales/extra/en-SB.js", 395],
      "./extra/en-SC.js": ["./node_modules/@angular/common/locales/extra/en-SC.js", 396],
      "./extra/en-SD.js": ["./node_modules/@angular/common/locales/extra/en-SD.js", 397],
      "./extra/en-SE.js": ["./node_modules/@angular/common/locales/extra/en-SE.js", 398],
      "./extra/en-SG.js": ["./node_modules/@angular/common/locales/extra/en-SG.js", 399],
      "./extra/en-SH.js": ["./node_modules/@angular/common/locales/extra/en-SH.js", 400],
      "./extra/en-SI.js": ["./node_modules/@angular/common/locales/extra/en-SI.js", 401],
      "./extra/en-SL.js": ["./node_modules/@angular/common/locales/extra/en-SL.js", 402],
      "./extra/en-SS.js": ["./node_modules/@angular/common/locales/extra/en-SS.js", 403],
      "./extra/en-SX.js": ["./node_modules/@angular/common/locales/extra/en-SX.js", 404],
      "./extra/en-SZ.js": ["./node_modules/@angular/common/locales/extra/en-SZ.js", 405],
      "./extra/en-TC.js": ["./node_modules/@angular/common/locales/extra/en-TC.js", 406],
      "./extra/en-TK.js": ["./node_modules/@angular/common/locales/extra/en-TK.js", 407],
      "./extra/en-TO.js": ["./node_modules/@angular/common/locales/extra/en-TO.js", 408],
      "./extra/en-TT.js": ["./node_modules/@angular/common/locales/extra/en-TT.js", 409],
      "./extra/en-TV.js": ["./node_modules/@angular/common/locales/extra/en-TV.js", 410],
      "./extra/en-TZ.js": ["./node_modules/@angular/common/locales/extra/en-TZ.js", 411],
      "./extra/en-UG.js": ["./node_modules/@angular/common/locales/extra/en-UG.js", 412],
      "./extra/en-UM.js": ["./node_modules/@angular/common/locales/extra/en-UM.js", 413],
      "./extra/en-US-POSIX.js": ["./node_modules/@angular/common/locales/extra/en-US-POSIX.js", 414],
      "./extra/en-VC.js": ["./node_modules/@angular/common/locales/extra/en-VC.js", 415],
      "./extra/en-VG.js": ["./node_modules/@angular/common/locales/extra/en-VG.js", 416],
      "./extra/en-VI.js": ["./node_modules/@angular/common/locales/extra/en-VI.js", 417],
      "./extra/en-VU.js": ["./node_modules/@angular/common/locales/extra/en-VU.js", 418],
      "./extra/en-WS.js": ["./node_modules/@angular/common/locales/extra/en-WS.js", 419],
      "./extra/en-ZA.js": ["./node_modules/@angular/common/locales/extra/en-ZA.js", 420],
      "./extra/en-ZM.js": ["./node_modules/@angular/common/locales/extra/en-ZM.js", 421],
      "./extra/en-ZW.js": ["./node_modules/@angular/common/locales/extra/en-ZW.js", 422],
      "./extra/en.js": ["./node_modules/@angular/common/locales/extra/en.js", 423],
      "./extra/eo.js": ["./node_modules/@angular/common/locales/extra/eo.js", 424],
      "./extra/es-419.js": ["./node_modules/@angular/common/locales/extra/es-419.js", 425],
      "./extra/es-AR.js": ["./node_modules/@angular/common/locales/extra/es-AR.js", 426],
      "./extra/es-BO.js": ["./node_modules/@angular/common/locales/extra/es-BO.js", 427],
      "./extra/es-BR.js": ["./node_modules/@angular/common/locales/extra/es-BR.js", 428],
      "./extra/es-BZ.js": ["./node_modules/@angular/common/locales/extra/es-BZ.js", 429],
      "./extra/es-CL.js": ["./node_modules/@angular/common/locales/extra/es-CL.js", 430],
      "./extra/es-CO.js": ["./node_modules/@angular/common/locales/extra/es-CO.js", 431],
      "./extra/es-CR.js": ["./node_modules/@angular/common/locales/extra/es-CR.js", 432],
      "./extra/es-CU.js": ["./node_modules/@angular/common/locales/extra/es-CU.js", 433],
      "./extra/es-DO.js": ["./node_modules/@angular/common/locales/extra/es-DO.js", 434],
      "./extra/es-EA.js": ["./node_modules/@angular/common/locales/extra/es-EA.js", 435],
      "./extra/es-EC.js": ["./node_modules/@angular/common/locales/extra/es-EC.js", 436],
      "./extra/es-GQ.js": ["./node_modules/@angular/common/locales/extra/es-GQ.js", 437],
      "./extra/es-GT.js": ["./node_modules/@angular/common/locales/extra/es-GT.js", 438],
      "./extra/es-HN.js": ["./node_modules/@angular/common/locales/extra/es-HN.js", 439],
      "./extra/es-IC.js": ["./node_modules/@angular/common/locales/extra/es-IC.js", 440],
      "./extra/es-MX.js": ["./node_modules/@angular/common/locales/extra/es-MX.js", 441],
      "./extra/es-NI.js": ["./node_modules/@angular/common/locales/extra/es-NI.js", 442],
      "./extra/es-PA.js": ["./node_modules/@angular/common/locales/extra/es-PA.js", 443],
      "./extra/es-PE.js": ["./node_modules/@angular/common/locales/extra/es-PE.js", 444],
      "./extra/es-PH.js": ["./node_modules/@angular/common/locales/extra/es-PH.js", 445],
      "./extra/es-PR.js": ["./node_modules/@angular/common/locales/extra/es-PR.js", 446],
      "./extra/es-PY.js": ["./node_modules/@angular/common/locales/extra/es-PY.js", 447],
      "./extra/es-SV.js": ["./node_modules/@angular/common/locales/extra/es-SV.js", 448],
      "./extra/es-US.js": ["./node_modules/@angular/common/locales/extra/es-US.js", 449],
      "./extra/es-UY.js": ["./node_modules/@angular/common/locales/extra/es-UY.js", 450],
      "./extra/es-VE.js": ["./node_modules/@angular/common/locales/extra/es-VE.js", 451],
      "./extra/es.js": ["./node_modules/@angular/common/locales/extra/es.js", 452],
      "./extra/et.js": ["./node_modules/@angular/common/locales/extra/et.js", 453],
      "./extra/eu.js": ["./node_modules/@angular/common/locales/extra/eu.js", 454],
      "./extra/ewo.js": ["./node_modules/@angular/common/locales/extra/ewo.js", 455],
      "./extra/fa-AF.js": ["./node_modules/@angular/common/locales/extra/fa-AF.js", 456],
      "./extra/fa.js": ["./node_modules/@angular/common/locales/extra/fa.js", 457],
      "./extra/ff-CM.js": ["./node_modules/@angular/common/locales/extra/ff-CM.js", 458],
      "./extra/ff-GN.js": ["./node_modules/@angular/common/locales/extra/ff-GN.js", 459],
      "./extra/ff-Latn-BF.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-BF.js", 460],
      "./extra/ff-Latn-CM.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-CM.js", 461],
      "./extra/ff-Latn-GH.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-GH.js", 462],
      "./extra/ff-Latn-GM.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-GM.js", 463],
      "./extra/ff-Latn-GN.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-GN.js", 464],
      "./extra/ff-Latn-GW.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-GW.js", 465],
      "./extra/ff-Latn-LR.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-LR.js", 466],
      "./extra/ff-Latn-MR.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-MR.js", 467],
      "./extra/ff-Latn-NE.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-NE.js", 468],
      "./extra/ff-Latn-NG.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-NG.js", 469],
      "./extra/ff-Latn-SL.js": ["./node_modules/@angular/common/locales/extra/ff-Latn-SL.js", 470],
      "./extra/ff-Latn.js": ["./node_modules/@angular/common/locales/extra/ff-Latn.js", 471],
      "./extra/ff-MR.js": ["./node_modules/@angular/common/locales/extra/ff-MR.js", 472],
      "./extra/ff.js": ["./node_modules/@angular/common/locales/extra/ff.js", 473],
      "./extra/fi.js": ["./node_modules/@angular/common/locales/extra/fi.js", 474],
      "./extra/fil.js": ["./node_modules/@angular/common/locales/extra/fil.js", 475],
      "./extra/fo-DK.js": ["./node_modules/@angular/common/locales/extra/fo-DK.js", 476],
      "./extra/fo.js": ["./node_modules/@angular/common/locales/extra/fo.js", 477],
      "./extra/fr-BE.js": ["./node_modules/@angular/common/locales/extra/fr-BE.js", 478],
      "./extra/fr-BF.js": ["./node_modules/@angular/common/locales/extra/fr-BF.js", 479],
      "./extra/fr-BI.js": ["./node_modules/@angular/common/locales/extra/fr-BI.js", 480],
      "./extra/fr-BJ.js": ["./node_modules/@angular/common/locales/extra/fr-BJ.js", 481],
      "./extra/fr-BL.js": ["./node_modules/@angular/common/locales/extra/fr-BL.js", 482],
      "./extra/fr-CA.js": ["./node_modules/@angular/common/locales/extra/fr-CA.js", 483],
      "./extra/fr-CD.js": ["./node_modules/@angular/common/locales/extra/fr-CD.js", 484],
      "./extra/fr-CF.js": ["./node_modules/@angular/common/locales/extra/fr-CF.js", 485],
      "./extra/fr-CG.js": ["./node_modules/@angular/common/locales/extra/fr-CG.js", 486],
      "./extra/fr-CH.js": ["./node_modules/@angular/common/locales/extra/fr-CH.js", 487],
      "./extra/fr-CI.js": ["./node_modules/@angular/common/locales/extra/fr-CI.js", 488],
      "./extra/fr-CM.js": ["./node_modules/@angular/common/locales/extra/fr-CM.js", 489],
      "./extra/fr-DJ.js": ["./node_modules/@angular/common/locales/extra/fr-DJ.js", 490],
      "./extra/fr-DZ.js": ["./node_modules/@angular/common/locales/extra/fr-DZ.js", 491],
      "./extra/fr-GA.js": ["./node_modules/@angular/common/locales/extra/fr-GA.js", 492],
      "./extra/fr-GF.js": ["./node_modules/@angular/common/locales/extra/fr-GF.js", 493],
      "./extra/fr-GN.js": ["./node_modules/@angular/common/locales/extra/fr-GN.js", 494],
      "./extra/fr-GP.js": ["./node_modules/@angular/common/locales/extra/fr-GP.js", 495],
      "./extra/fr-GQ.js": ["./node_modules/@angular/common/locales/extra/fr-GQ.js", 496],
      "./extra/fr-HT.js": ["./node_modules/@angular/common/locales/extra/fr-HT.js", 497],
      "./extra/fr-KM.js": ["./node_modules/@angular/common/locales/extra/fr-KM.js", 498],
      "./extra/fr-LU.js": ["./node_modules/@angular/common/locales/extra/fr-LU.js", 499],
      "./extra/fr-MA.js": ["./node_modules/@angular/common/locales/extra/fr-MA.js", 500],
      "./extra/fr-MC.js": ["./node_modules/@angular/common/locales/extra/fr-MC.js", 501],
      "./extra/fr-MF.js": ["./node_modules/@angular/common/locales/extra/fr-MF.js", 502],
      "./extra/fr-MG.js": ["./node_modules/@angular/common/locales/extra/fr-MG.js", 503],
      "./extra/fr-ML.js": ["./node_modules/@angular/common/locales/extra/fr-ML.js", 504],
      "./extra/fr-MQ.js": ["./node_modules/@angular/common/locales/extra/fr-MQ.js", 505],
      "./extra/fr-MR.js": ["./node_modules/@angular/common/locales/extra/fr-MR.js", 506],
      "./extra/fr-MU.js": ["./node_modules/@angular/common/locales/extra/fr-MU.js", 507],
      "./extra/fr-NC.js": ["./node_modules/@angular/common/locales/extra/fr-NC.js", 508],
      "./extra/fr-NE.js": ["./node_modules/@angular/common/locales/extra/fr-NE.js", 509],
      "./extra/fr-PF.js": ["./node_modules/@angular/common/locales/extra/fr-PF.js", 510],
      "./extra/fr-PM.js": ["./node_modules/@angular/common/locales/extra/fr-PM.js", 511],
      "./extra/fr-RE.js": ["./node_modules/@angular/common/locales/extra/fr-RE.js", 512],
      "./extra/fr-RW.js": ["./node_modules/@angular/common/locales/extra/fr-RW.js", 513],
      "./extra/fr-SC.js": ["./node_modules/@angular/common/locales/extra/fr-SC.js", 514],
      "./extra/fr-SN.js": ["./node_modules/@angular/common/locales/extra/fr-SN.js", 515],
      "./extra/fr-SY.js": ["./node_modules/@angular/common/locales/extra/fr-SY.js", 516],
      "./extra/fr-TD.js": ["./node_modules/@angular/common/locales/extra/fr-TD.js", 517],
      "./extra/fr-TG.js": ["./node_modules/@angular/common/locales/extra/fr-TG.js", 518],
      "./extra/fr-TN.js": ["./node_modules/@angular/common/locales/extra/fr-TN.js", 519],
      "./extra/fr-VU.js": ["./node_modules/@angular/common/locales/extra/fr-VU.js", 520],
      "./extra/fr-WF.js": ["./node_modules/@angular/common/locales/extra/fr-WF.js", 521],
      "./extra/fr-YT.js": ["./node_modules/@angular/common/locales/extra/fr-YT.js", 522],
      "./extra/fr.js": ["./node_modules/@angular/common/locales/extra/fr.js", 523],
      "./extra/fur.js": ["./node_modules/@angular/common/locales/extra/fur.js", 524],
      "./extra/fy.js": ["./node_modules/@angular/common/locales/extra/fy.js", 525],
      "./extra/ga-GB.js": ["./node_modules/@angular/common/locales/extra/ga-GB.js", 526],
      "./extra/ga.js": ["./node_modules/@angular/common/locales/extra/ga.js", 527],
      "./extra/gd.js": ["./node_modules/@angular/common/locales/extra/gd.js", 528],
      "./extra/gl.js": ["./node_modules/@angular/common/locales/extra/gl.js", 529],
      "./extra/gsw-FR.js": ["./node_modules/@angular/common/locales/extra/gsw-FR.js", 530],
      "./extra/gsw-LI.js": ["./node_modules/@angular/common/locales/extra/gsw-LI.js", 531],
      "./extra/gsw.js": ["./node_modules/@angular/common/locales/extra/gsw.js", 532],
      "./extra/gu.js": ["./node_modules/@angular/common/locales/extra/gu.js", 533],
      "./extra/guz.js": ["./node_modules/@angular/common/locales/extra/guz.js", 534],
      "./extra/gv.js": ["./node_modules/@angular/common/locales/extra/gv.js", 535],
      "./extra/ha-GH.js": ["./node_modules/@angular/common/locales/extra/ha-GH.js", 536],
      "./extra/ha-NE.js": ["./node_modules/@angular/common/locales/extra/ha-NE.js", 537],
      "./extra/ha.js": ["./node_modules/@angular/common/locales/extra/ha.js", 538],
      "./extra/haw.js": ["./node_modules/@angular/common/locales/extra/haw.js", 539],
      "./extra/he.js": ["./node_modules/@angular/common/locales/extra/he.js", 540],
      "./extra/hi.js": ["./node_modules/@angular/common/locales/extra/hi.js", 541],
      "./extra/hr-BA.js": ["./node_modules/@angular/common/locales/extra/hr-BA.js", 542],
      "./extra/hr.js": ["./node_modules/@angular/common/locales/extra/hr.js", 543],
      "./extra/hsb.js": ["./node_modules/@angular/common/locales/extra/hsb.js", 544],
      "./extra/hu.js": ["./node_modules/@angular/common/locales/extra/hu.js", 545],
      "./extra/hy.js": ["./node_modules/@angular/common/locales/extra/hy.js", 546],
      "./extra/ia.js": ["./node_modules/@angular/common/locales/extra/ia.js", 547],
      "./extra/id.js": ["./node_modules/@angular/common/locales/extra/id.js", 548],
      "./extra/ig.js": ["./node_modules/@angular/common/locales/extra/ig.js", 549],
      "./extra/ii.js": ["./node_modules/@angular/common/locales/extra/ii.js", 550],
      "./extra/is.js": ["./node_modules/@angular/common/locales/extra/is.js", 551],
      "./extra/it-CH.js": ["./node_modules/@angular/common/locales/extra/it-CH.js", 552],
      "./extra/it-SM.js": ["./node_modules/@angular/common/locales/extra/it-SM.js", 553],
      "./extra/it-VA.js": ["./node_modules/@angular/common/locales/extra/it-VA.js", 554],
      "./extra/it.js": ["./node_modules/@angular/common/locales/extra/it.js", 555],
      "./extra/ja.js": ["./node_modules/@angular/common/locales/extra/ja.js", 556],
      "./extra/jgo.js": ["./node_modules/@angular/common/locales/extra/jgo.js", 557],
      "./extra/jmc.js": ["./node_modules/@angular/common/locales/extra/jmc.js", 558],
      "./extra/jv.js": ["./node_modules/@angular/common/locales/extra/jv.js", 559],
      "./extra/ka.js": ["./node_modules/@angular/common/locales/extra/ka.js", 560],
      "./extra/kab.js": ["./node_modules/@angular/common/locales/extra/kab.js", 561],
      "./extra/kam.js": ["./node_modules/@angular/common/locales/extra/kam.js", 562],
      "./extra/kde.js": ["./node_modules/@angular/common/locales/extra/kde.js", 563],
      "./extra/kea.js": ["./node_modules/@angular/common/locales/extra/kea.js", 564],
      "./extra/khq.js": ["./node_modules/@angular/common/locales/extra/khq.js", 565],
      "./extra/ki.js": ["./node_modules/@angular/common/locales/extra/ki.js", 566],
      "./extra/kk.js": ["./node_modules/@angular/common/locales/extra/kk.js", 567],
      "./extra/kkj.js": ["./node_modules/@angular/common/locales/extra/kkj.js", 568],
      "./extra/kl.js": ["./node_modules/@angular/common/locales/extra/kl.js", 569],
      "./extra/kln.js": ["./node_modules/@angular/common/locales/extra/kln.js", 570],
      "./extra/km.js": ["./node_modules/@angular/common/locales/extra/km.js", 571],
      "./extra/kn.js": ["./node_modules/@angular/common/locales/extra/kn.js", 572],
      "./extra/ko-KP.js": ["./node_modules/@angular/common/locales/extra/ko-KP.js", 573],
      "./extra/ko.js": ["./node_modules/@angular/common/locales/extra/ko.js", 574],
      "./extra/kok.js": ["./node_modules/@angular/common/locales/extra/kok.js", 575],
      "./extra/ks.js": ["./node_modules/@angular/common/locales/extra/ks.js", 576],
      "./extra/ksb.js": ["./node_modules/@angular/common/locales/extra/ksb.js", 577],
      "./extra/ksf.js": ["./node_modules/@angular/common/locales/extra/ksf.js", 578],
      "./extra/ksh.js": ["./node_modules/@angular/common/locales/extra/ksh.js", 579],
      "./extra/ku.js": ["./node_modules/@angular/common/locales/extra/ku.js", 580],
      "./extra/kw.js": ["./node_modules/@angular/common/locales/extra/kw.js", 581],
      "./extra/ky.js": ["./node_modules/@angular/common/locales/extra/ky.js", 582],
      "./extra/lag.js": ["./node_modules/@angular/common/locales/extra/lag.js", 583],
      "./extra/lb.js": ["./node_modules/@angular/common/locales/extra/lb.js", 584],
      "./extra/lg.js": ["./node_modules/@angular/common/locales/extra/lg.js", 585],
      "./extra/lkt.js": ["./node_modules/@angular/common/locales/extra/lkt.js", 586],
      "./extra/ln-AO.js": ["./node_modules/@angular/common/locales/extra/ln-AO.js", 587],
      "./extra/ln-CF.js": ["./node_modules/@angular/common/locales/extra/ln-CF.js", 588],
      "./extra/ln-CG.js": ["./node_modules/@angular/common/locales/extra/ln-CG.js", 589],
      "./extra/ln.js": ["./node_modules/@angular/common/locales/extra/ln.js", 590],
      "./extra/lo.js": ["./node_modules/@angular/common/locales/extra/lo.js", 591],
      "./extra/lrc-IQ.js": ["./node_modules/@angular/common/locales/extra/lrc-IQ.js", 592],
      "./extra/lrc.js": ["./node_modules/@angular/common/locales/extra/lrc.js", 593],
      "./extra/lt.js": ["./node_modules/@angular/common/locales/extra/lt.js", 594],
      "./extra/lu.js": ["./node_modules/@angular/common/locales/extra/lu.js", 595],
      "./extra/luo.js": ["./node_modules/@angular/common/locales/extra/luo.js", 596],
      "./extra/luy.js": ["./node_modules/@angular/common/locales/extra/luy.js", 597],
      "./extra/lv.js": ["./node_modules/@angular/common/locales/extra/lv.js", 598],
      "./extra/mas-TZ.js": ["./node_modules/@angular/common/locales/extra/mas-TZ.js", 599],
      "./extra/mas.js": ["./node_modules/@angular/common/locales/extra/mas.js", 600],
      "./extra/mer.js": ["./node_modules/@angular/common/locales/extra/mer.js", 601],
      "./extra/mfe.js": ["./node_modules/@angular/common/locales/extra/mfe.js", 602],
      "./extra/mg.js": ["./node_modules/@angular/common/locales/extra/mg.js", 603],
      "./extra/mgh.js": ["./node_modules/@angular/common/locales/extra/mgh.js", 604],
      "./extra/mgo.js": ["./node_modules/@angular/common/locales/extra/mgo.js", 605],
      "./extra/mi.js": ["./node_modules/@angular/common/locales/extra/mi.js", 606],
      "./extra/mk.js": ["./node_modules/@angular/common/locales/extra/mk.js", 607],
      "./extra/ml.js": ["./node_modules/@angular/common/locales/extra/ml.js", 608],
      "./extra/mn.js": ["./node_modules/@angular/common/locales/extra/mn.js", 609],
      "./extra/mr.js": ["./node_modules/@angular/common/locales/extra/mr.js", 610],
      "./extra/ms-BN.js": ["./node_modules/@angular/common/locales/extra/ms-BN.js", 611],
      "./extra/ms-SG.js": ["./node_modules/@angular/common/locales/extra/ms-SG.js", 612],
      "./extra/ms.js": ["./node_modules/@angular/common/locales/extra/ms.js", 613],
      "./extra/mt.js": ["./node_modules/@angular/common/locales/extra/mt.js", 614],
      "./extra/mua.js": ["./node_modules/@angular/common/locales/extra/mua.js", 615],
      "./extra/my.js": ["./node_modules/@angular/common/locales/extra/my.js", 616],
      "./extra/mzn.js": ["./node_modules/@angular/common/locales/extra/mzn.js", 617],
      "./extra/naq.js": ["./node_modules/@angular/common/locales/extra/naq.js", 618],
      "./extra/nb-SJ.js": ["./node_modules/@angular/common/locales/extra/nb-SJ.js", 619],
      "./extra/nb.js": ["./node_modules/@angular/common/locales/extra/nb.js", 620],
      "./extra/nd.js": ["./node_modules/@angular/common/locales/extra/nd.js", 621],
      "./extra/nds-NL.js": ["./node_modules/@angular/common/locales/extra/nds-NL.js", 622],
      "./extra/nds.js": ["./node_modules/@angular/common/locales/extra/nds.js", 623],
      "./extra/ne-IN.js": ["./node_modules/@angular/common/locales/extra/ne-IN.js", 624],
      "./extra/ne.js": ["./node_modules/@angular/common/locales/extra/ne.js", 625],
      "./extra/nl-AW.js": ["./node_modules/@angular/common/locales/extra/nl-AW.js", 626],
      "./extra/nl-BE.js": ["./node_modules/@angular/common/locales/extra/nl-BE.js", 627],
      "./extra/nl-BQ.js": ["./node_modules/@angular/common/locales/extra/nl-BQ.js", 628],
      "./extra/nl-CW.js": ["./node_modules/@angular/common/locales/extra/nl-CW.js", 629],
      "./extra/nl-SR.js": ["./node_modules/@angular/common/locales/extra/nl-SR.js", 630],
      "./extra/nl-SX.js": ["./node_modules/@angular/common/locales/extra/nl-SX.js", 631],
      "./extra/nl.js": ["./node_modules/@angular/common/locales/extra/nl.js", 632],
      "./extra/nmg.js": ["./node_modules/@angular/common/locales/extra/nmg.js", 633],
      "./extra/nn.js": ["./node_modules/@angular/common/locales/extra/nn.js", 634],
      "./extra/nnh.js": ["./node_modules/@angular/common/locales/extra/nnh.js", 635],
      "./extra/nus.js": ["./node_modules/@angular/common/locales/extra/nus.js", 636],
      "./extra/nyn.js": ["./node_modules/@angular/common/locales/extra/nyn.js", 637],
      "./extra/om-KE.js": ["./node_modules/@angular/common/locales/extra/om-KE.js", 638],
      "./extra/om.js": ["./node_modules/@angular/common/locales/extra/om.js", 639],
      "./extra/or.js": ["./node_modules/@angular/common/locales/extra/or.js", 640],
      "./extra/os-RU.js": ["./node_modules/@angular/common/locales/extra/os-RU.js", 641],
      "./extra/os.js": ["./node_modules/@angular/common/locales/extra/os.js", 642],
      "./extra/pa-Arab.js": ["./node_modules/@angular/common/locales/extra/pa-Arab.js", 643],
      "./extra/pa-Guru.js": ["./node_modules/@angular/common/locales/extra/pa-Guru.js", 644],
      "./extra/pa.js": ["./node_modules/@angular/common/locales/extra/pa.js", 645],
      "./extra/pl.js": ["./node_modules/@angular/common/locales/extra/pl.js", 646],
      "./extra/prg.js": ["./node_modules/@angular/common/locales/extra/prg.js", 647],
      "./extra/ps-PK.js": ["./node_modules/@angular/common/locales/extra/ps-PK.js", 648],
      "./extra/ps.js": ["./node_modules/@angular/common/locales/extra/ps.js", 649],
      "./extra/pt-AO.js": ["./node_modules/@angular/common/locales/extra/pt-AO.js", 650],
      "./extra/pt-CH.js": ["./node_modules/@angular/common/locales/extra/pt-CH.js", 651],
      "./extra/pt-CV.js": ["./node_modules/@angular/common/locales/extra/pt-CV.js", 652],
      "./extra/pt-GQ.js": ["./node_modules/@angular/common/locales/extra/pt-GQ.js", 653],
      "./extra/pt-GW.js": ["./node_modules/@angular/common/locales/extra/pt-GW.js", 654],
      "./extra/pt-LU.js": ["./node_modules/@angular/common/locales/extra/pt-LU.js", 655],
      "./extra/pt-MO.js": ["./node_modules/@angular/common/locales/extra/pt-MO.js", 656],
      "./extra/pt-MZ.js": ["./node_modules/@angular/common/locales/extra/pt-MZ.js", 657],
      "./extra/pt-PT.js": ["./node_modules/@angular/common/locales/extra/pt-PT.js", 658],
      "./extra/pt-ST.js": ["./node_modules/@angular/common/locales/extra/pt-ST.js", 659],
      "./extra/pt-TL.js": ["./node_modules/@angular/common/locales/extra/pt-TL.js", 660],
      "./extra/pt.js": ["./node_modules/@angular/common/locales/extra/pt.js", 661],
      "./extra/qu-BO.js": ["./node_modules/@angular/common/locales/extra/qu-BO.js", 662],
      "./extra/qu-EC.js": ["./node_modules/@angular/common/locales/extra/qu-EC.js", 663],
      "./extra/qu.js": ["./node_modules/@angular/common/locales/extra/qu.js", 664],
      "./extra/rm.js": ["./node_modules/@angular/common/locales/extra/rm.js", 665],
      "./extra/rn.js": ["./node_modules/@angular/common/locales/extra/rn.js", 666],
      "./extra/ro-MD.js": ["./node_modules/@angular/common/locales/extra/ro-MD.js", 667],
      "./extra/ro.js": ["./node_modules/@angular/common/locales/extra/ro.js", 668],
      "./extra/rof.js": ["./node_modules/@angular/common/locales/extra/rof.js", 669],
      "./extra/root.js": ["./node_modules/@angular/common/locales/extra/root.js", 670],
      "./extra/ru-BY.js": ["./node_modules/@angular/common/locales/extra/ru-BY.js", 671],
      "./extra/ru-KG.js": ["./node_modules/@angular/common/locales/extra/ru-KG.js", 672],
      "./extra/ru-KZ.js": ["./node_modules/@angular/common/locales/extra/ru-KZ.js", 673],
      "./extra/ru-MD.js": ["./node_modules/@angular/common/locales/extra/ru-MD.js", 674],
      "./extra/ru-UA.js": ["./node_modules/@angular/common/locales/extra/ru-UA.js", 675],
      "./extra/ru.js": ["./node_modules/@angular/common/locales/extra/ru.js", 676],
      "./extra/rw.js": ["./node_modules/@angular/common/locales/extra/rw.js", 677],
      "./extra/rwk.js": ["./node_modules/@angular/common/locales/extra/rwk.js", 678],
      "./extra/sah.js": ["./node_modules/@angular/common/locales/extra/sah.js", 679],
      "./extra/saq.js": ["./node_modules/@angular/common/locales/extra/saq.js", 680],
      "./extra/sbp.js": ["./node_modules/@angular/common/locales/extra/sbp.js", 681],
      "./extra/sd.js": ["./node_modules/@angular/common/locales/extra/sd.js", 682],
      "./extra/se-FI.js": ["./node_modules/@angular/common/locales/extra/se-FI.js", 683],
      "./extra/se-SE.js": ["./node_modules/@angular/common/locales/extra/se-SE.js", 684],
      "./extra/se.js": ["./node_modules/@angular/common/locales/extra/se.js", 685],
      "./extra/seh.js": ["./node_modules/@angular/common/locales/extra/seh.js", 686],
      "./extra/ses.js": ["./node_modules/@angular/common/locales/extra/ses.js", 687],
      "./extra/sg.js": ["./node_modules/@angular/common/locales/extra/sg.js", 688],
      "./extra/shi-Latn.js": ["./node_modules/@angular/common/locales/extra/shi-Latn.js", 689],
      "./extra/shi-Tfng.js": ["./node_modules/@angular/common/locales/extra/shi-Tfng.js", 690],
      "./extra/shi.js": ["./node_modules/@angular/common/locales/extra/shi.js", 691],
      "./extra/si.js": ["./node_modules/@angular/common/locales/extra/si.js", 692],
      "./extra/sk.js": ["./node_modules/@angular/common/locales/extra/sk.js", 693],
      "./extra/sl.js": ["./node_modules/@angular/common/locales/extra/sl.js", 694],
      "./extra/smn.js": ["./node_modules/@angular/common/locales/extra/smn.js", 695],
      "./extra/sn.js": ["./node_modules/@angular/common/locales/extra/sn.js", 696],
      "./extra/so-DJ.js": ["./node_modules/@angular/common/locales/extra/so-DJ.js", 697],
      "./extra/so-ET.js": ["./node_modules/@angular/common/locales/extra/so-ET.js", 698],
      "./extra/so-KE.js": ["./node_modules/@angular/common/locales/extra/so-KE.js", 699],
      "./extra/so.js": ["./node_modules/@angular/common/locales/extra/so.js", 700],
      "./extra/sq-MK.js": ["./node_modules/@angular/common/locales/extra/sq-MK.js", 701],
      "./extra/sq-XK.js": ["./node_modules/@angular/common/locales/extra/sq-XK.js", 702],
      "./extra/sq.js": ["./node_modules/@angular/common/locales/extra/sq.js", 703],
      "./extra/sr-Cyrl-BA.js": ["./node_modules/@angular/common/locales/extra/sr-Cyrl-BA.js", 704],
      "./extra/sr-Cyrl-ME.js": ["./node_modules/@angular/common/locales/extra/sr-Cyrl-ME.js", 705],
      "./extra/sr-Cyrl-XK.js": ["./node_modules/@angular/common/locales/extra/sr-Cyrl-XK.js", 706],
      "./extra/sr-Cyrl.js": ["./node_modules/@angular/common/locales/extra/sr-Cyrl.js", 707],
      "./extra/sr-Latn-BA.js": ["./node_modules/@angular/common/locales/extra/sr-Latn-BA.js", 708],
      "./extra/sr-Latn-ME.js": ["./node_modules/@angular/common/locales/extra/sr-Latn-ME.js", 709],
      "./extra/sr-Latn-XK.js": ["./node_modules/@angular/common/locales/extra/sr-Latn-XK.js", 710],
      "./extra/sr-Latn.js": ["./node_modules/@angular/common/locales/extra/sr-Latn.js", 711],
      "./extra/sr.js": ["./node_modules/@angular/common/locales/extra/sr.js", 712],
      "./extra/sv-AX.js": ["./node_modules/@angular/common/locales/extra/sv-AX.js", 713],
      "./extra/sv-FI.js": ["./node_modules/@angular/common/locales/extra/sv-FI.js", 714],
      "./extra/sv.js": ["./node_modules/@angular/common/locales/extra/sv.js", 715],
      "./extra/sw-CD.js": ["./node_modules/@angular/common/locales/extra/sw-CD.js", 716],
      "./extra/sw-KE.js": ["./node_modules/@angular/common/locales/extra/sw-KE.js", 717],
      "./extra/sw-UG.js": ["./node_modules/@angular/common/locales/extra/sw-UG.js", 718],
      "./extra/sw.js": ["./node_modules/@angular/common/locales/extra/sw.js", 719],
      "./extra/ta-LK.js": ["./node_modules/@angular/common/locales/extra/ta-LK.js", 720],
      "./extra/ta-MY.js": ["./node_modules/@angular/common/locales/extra/ta-MY.js", 721],
      "./extra/ta-SG.js": ["./node_modules/@angular/common/locales/extra/ta-SG.js", 722],
      "./extra/ta.js": ["./node_modules/@angular/common/locales/extra/ta.js", 723],
      "./extra/te.js": ["./node_modules/@angular/common/locales/extra/te.js", 724],
      "./extra/teo-KE.js": ["./node_modules/@angular/common/locales/extra/teo-KE.js", 725],
      "./extra/teo.js": ["./node_modules/@angular/common/locales/extra/teo.js", 726],
      "./extra/tg.js": ["./node_modules/@angular/common/locales/extra/tg.js", 727],
      "./extra/th.js": ["./node_modules/@angular/common/locales/extra/th.js", 728],
      "./extra/ti-ER.js": ["./node_modules/@angular/common/locales/extra/ti-ER.js", 729],
      "./extra/ti.js": ["./node_modules/@angular/common/locales/extra/ti.js", 730],
      "./extra/tk.js": ["./node_modules/@angular/common/locales/extra/tk.js", 731],
      "./extra/to.js": ["./node_modules/@angular/common/locales/extra/to.js", 732],
      "./extra/tr-CY.js": ["./node_modules/@angular/common/locales/extra/tr-CY.js", 733],
      "./extra/tr.js": ["./node_modules/@angular/common/locales/extra/tr.js", 734],
      "./extra/tt.js": ["./node_modules/@angular/common/locales/extra/tt.js", 735],
      "./extra/twq.js": ["./node_modules/@angular/common/locales/extra/twq.js", 736],
      "./extra/tzm.js": ["./node_modules/@angular/common/locales/extra/tzm.js", 737],
      "./extra/ug.js": ["./node_modules/@angular/common/locales/extra/ug.js", 738],
      "./extra/uk.js": ["./node_modules/@angular/common/locales/extra/uk.js", 739],
      "./extra/ur-IN.js": ["./node_modules/@angular/common/locales/extra/ur-IN.js", 740],
      "./extra/ur.js": ["./node_modules/@angular/common/locales/extra/ur.js", 741],
      "./extra/uz-Arab.js": ["./node_modules/@angular/common/locales/extra/uz-Arab.js", 742],
      "./extra/uz-Cyrl.js": ["./node_modules/@angular/common/locales/extra/uz-Cyrl.js", 743],
      "./extra/uz-Latn.js": ["./node_modules/@angular/common/locales/extra/uz-Latn.js", 744],
      "./extra/uz.js": ["./node_modules/@angular/common/locales/extra/uz.js", 745],
      "./extra/vai-Latn.js": ["./node_modules/@angular/common/locales/extra/vai-Latn.js", 746],
      "./extra/vai-Vaii.js": ["./node_modules/@angular/common/locales/extra/vai-Vaii.js", 747],
      "./extra/vai.js": ["./node_modules/@angular/common/locales/extra/vai.js", 748],
      "./extra/vi.js": ["./node_modules/@angular/common/locales/extra/vi.js", 749],
      "./extra/vo.js": ["./node_modules/@angular/common/locales/extra/vo.js", 750],
      "./extra/vun.js": ["./node_modules/@angular/common/locales/extra/vun.js", 751],
      "./extra/wae.js": ["./node_modules/@angular/common/locales/extra/wae.js", 752],
      "./extra/wo.js": ["./node_modules/@angular/common/locales/extra/wo.js", 753],
      "./extra/xh.js": ["./node_modules/@angular/common/locales/extra/xh.js", 754],
      "./extra/xog.js": ["./node_modules/@angular/common/locales/extra/xog.js", 755],
      "./extra/yav.js": ["./node_modules/@angular/common/locales/extra/yav.js", 756],
      "./extra/yi.js": ["./node_modules/@angular/common/locales/extra/yi.js", 757],
      "./extra/yo-BJ.js": ["./node_modules/@angular/common/locales/extra/yo-BJ.js", 758],
      "./extra/yo.js": ["./node_modules/@angular/common/locales/extra/yo.js", 759],
      "./extra/yue-Hans.js": ["./node_modules/@angular/common/locales/extra/yue-Hans.js", 760],
      "./extra/yue-Hant.js": ["./node_modules/@angular/common/locales/extra/yue-Hant.js", 761],
      "./extra/yue.js": ["./node_modules/@angular/common/locales/extra/yue.js", 762],
      "./extra/zgh.js": ["./node_modules/@angular/common/locales/extra/zgh.js", 763],
      "./extra/zh-Hans-HK.js": ["./node_modules/@angular/common/locales/extra/zh-Hans-HK.js", 764],
      "./extra/zh-Hans-MO.js": ["./node_modules/@angular/common/locales/extra/zh-Hans-MO.js", 765],
      "./extra/zh-Hans-SG.js": ["./node_modules/@angular/common/locales/extra/zh-Hans-SG.js", 766],
      "./extra/zh-Hans.js": ["./node_modules/@angular/common/locales/extra/zh-Hans.js", 767],
      "./extra/zh-Hant-HK.js": ["./node_modules/@angular/common/locales/extra/zh-Hant-HK.js", 768],
      "./extra/zh-Hant-MO.js": ["./node_modules/@angular/common/locales/extra/zh-Hant-MO.js", 769],
      "./extra/zh-Hant.js": ["./node_modules/@angular/common/locales/extra/zh-Hant.js", 770],
      "./extra/zh.js": ["./node_modules/@angular/common/locales/extra/zh.js", 771],
      "./extra/zu.js": ["./node_modules/@angular/common/locales/extra/zu.js", 772],
      "./fa-AF.js": ["./node_modules/@angular/common/locales/fa-AF.js", 773],
      "./fa.js": ["./node_modules/@angular/common/locales/fa.js", 774],
      "./ff-CM.js": ["./node_modules/@angular/common/locales/ff-CM.js", 775],
      "./ff-GN.js": ["./node_modules/@angular/common/locales/ff-GN.js", 776],
      "./ff-Latn-BF.js": ["./node_modules/@angular/common/locales/ff-Latn-BF.js", 777],
      "./ff-Latn-CM.js": ["./node_modules/@angular/common/locales/ff-Latn-CM.js", 778],
      "./ff-Latn-GH.js": ["./node_modules/@angular/common/locales/ff-Latn-GH.js", 779],
      "./ff-Latn-GM.js": ["./node_modules/@angular/common/locales/ff-Latn-GM.js", 780],
      "./ff-Latn-GN.js": ["./node_modules/@angular/common/locales/ff-Latn-GN.js", 781],
      "./ff-Latn-GW.js": ["./node_modules/@angular/common/locales/ff-Latn-GW.js", 782],
      "./ff-Latn-LR.js": ["./node_modules/@angular/common/locales/ff-Latn-LR.js", 783],
      "./ff-Latn-MR.js": ["./node_modules/@angular/common/locales/ff-Latn-MR.js", 784],
      "./ff-Latn-NE.js": ["./node_modules/@angular/common/locales/ff-Latn-NE.js", 785],
      "./ff-Latn-NG.js": ["./node_modules/@angular/common/locales/ff-Latn-NG.js", 786],
      "./ff-Latn-SL.js": ["./node_modules/@angular/common/locales/ff-Latn-SL.js", 787],
      "./ff-Latn.js": ["./node_modules/@angular/common/locales/ff-Latn.js", 788],
      "./ff-MR.js": ["./node_modules/@angular/common/locales/ff-MR.js", 789],
      "./ff.js": ["./node_modules/@angular/common/locales/ff.js", 790],
      "./fi.js": ["./node_modules/@angular/common/locales/fi.js", 791],
      "./fil.js": ["./node_modules/@angular/common/locales/fil.js", 792],
      "./fo-DK.js": ["./node_modules/@angular/common/locales/fo-DK.js", 793],
      "./fo.js": ["./node_modules/@angular/common/locales/fo.js", 794],
      "./fr-BE.js": ["./node_modules/@angular/common/locales/fr-BE.js", 795],
      "./fr-BF.js": ["./node_modules/@angular/common/locales/fr-BF.js", 796],
      "./fr-BI.js": ["./node_modules/@angular/common/locales/fr-BI.js", 797],
      "./fr-BJ.js": ["./node_modules/@angular/common/locales/fr-BJ.js", 798],
      "./fr-BL.js": ["./node_modules/@angular/common/locales/fr-BL.js", 799],
      "./fr-CA.js": ["./node_modules/@angular/common/locales/fr-CA.js", 800],
      "./fr-CD.js": ["./node_modules/@angular/common/locales/fr-CD.js", 801],
      "./fr-CF.js": ["./node_modules/@angular/common/locales/fr-CF.js", 802],
      "./fr-CG.js": ["./node_modules/@angular/common/locales/fr-CG.js", 803],
      "./fr-CH.js": ["./node_modules/@angular/common/locales/fr-CH.js", 804],
      "./fr-CI.js": ["./node_modules/@angular/common/locales/fr-CI.js", 805],
      "./fr-CM.js": ["./node_modules/@angular/common/locales/fr-CM.js", 806],
      "./fr-DJ.js": ["./node_modules/@angular/common/locales/fr-DJ.js", 807],
      "./fr-DZ.js": ["./node_modules/@angular/common/locales/fr-DZ.js", 808],
      "./fr-GA.js": ["./node_modules/@angular/common/locales/fr-GA.js", 809],
      "./fr-GF.js": ["./node_modules/@angular/common/locales/fr-GF.js", 810],
      "./fr-GN.js": ["./node_modules/@angular/common/locales/fr-GN.js", 811],
      "./fr-GP.js": ["./node_modules/@angular/common/locales/fr-GP.js", 812],
      "./fr-GQ.js": ["./node_modules/@angular/common/locales/fr-GQ.js", 813],
      "./fr-HT.js": ["./node_modules/@angular/common/locales/fr-HT.js", 814],
      "./fr-KM.js": ["./node_modules/@angular/common/locales/fr-KM.js", 815],
      "./fr-LU.js": ["./node_modules/@angular/common/locales/fr-LU.js", 816],
      "./fr-MA.js": ["./node_modules/@angular/common/locales/fr-MA.js", 817],
      "./fr-MC.js": ["./node_modules/@angular/common/locales/fr-MC.js", 818],
      "./fr-MF.js": ["./node_modules/@angular/common/locales/fr-MF.js", 819],
      "./fr-MG.js": ["./node_modules/@angular/common/locales/fr-MG.js", 820],
      "./fr-ML.js": ["./node_modules/@angular/common/locales/fr-ML.js", 821],
      "./fr-MQ.js": ["./node_modules/@angular/common/locales/fr-MQ.js", 822],
      "./fr-MR.js": ["./node_modules/@angular/common/locales/fr-MR.js", 823],
      "./fr-MU.js": ["./node_modules/@angular/common/locales/fr-MU.js", 824],
      "./fr-NC.js": ["./node_modules/@angular/common/locales/fr-NC.js", 825],
      "./fr-NE.js": ["./node_modules/@angular/common/locales/fr-NE.js", 826],
      "./fr-PF.js": ["./node_modules/@angular/common/locales/fr-PF.js", 827],
      "./fr-PM.js": ["./node_modules/@angular/common/locales/fr-PM.js", 828],
      "./fr-RE.js": ["./node_modules/@angular/common/locales/fr-RE.js", 829],
      "./fr-RW.js": ["./node_modules/@angular/common/locales/fr-RW.js", 830],
      "./fr-SC.js": ["./node_modules/@angular/common/locales/fr-SC.js", 831],
      "./fr-SN.js": ["./node_modules/@angular/common/locales/fr-SN.js", 832],
      "./fr-SY.js": ["./node_modules/@angular/common/locales/fr-SY.js", 833],
      "./fr-TD.js": ["./node_modules/@angular/common/locales/fr-TD.js", 834],
      "./fr-TG.js": ["./node_modules/@angular/common/locales/fr-TG.js", 835],
      "./fr-TN.js": ["./node_modules/@angular/common/locales/fr-TN.js", 836],
      "./fr-VU.js": ["./node_modules/@angular/common/locales/fr-VU.js", 837],
      "./fr-WF.js": ["./node_modules/@angular/common/locales/fr-WF.js", 838],
      "./fr-YT.js": ["./node_modules/@angular/common/locales/fr-YT.js", 839],
      "./fr.js": ["./node_modules/@angular/common/locales/fr.js", 840],
      "./fur.js": ["./node_modules/@angular/common/locales/fur.js", 841],
      "./fy.js": ["./node_modules/@angular/common/locales/fy.js", 842],
      "./ga-GB.js": ["./node_modules/@angular/common/locales/ga-GB.js", 843],
      "./ga.js": ["./node_modules/@angular/common/locales/ga.js", 844],
      "./gd.js": ["./node_modules/@angular/common/locales/gd.js", 845],
      "./gl.js": ["./node_modules/@angular/common/locales/gl.js", 846],
      "./global/af-NA.js": ["./node_modules/@angular/common/locales/global/af-NA.js", 847],
      "./global/af.js": ["./node_modules/@angular/common/locales/global/af.js", 848],
      "./global/agq.js": ["./node_modules/@angular/common/locales/global/agq.js", 849],
      "./global/ak.js": ["./node_modules/@angular/common/locales/global/ak.js", 850],
      "./global/am.js": ["./node_modules/@angular/common/locales/global/am.js", 851],
      "./global/ar-AE.js": ["./node_modules/@angular/common/locales/global/ar-AE.js", 852],
      "./global/ar-BH.js": ["./node_modules/@angular/common/locales/global/ar-BH.js", 853],
      "./global/ar-DJ.js": ["./node_modules/@angular/common/locales/global/ar-DJ.js", 854],
      "./global/ar-DZ.js": ["./node_modules/@angular/common/locales/global/ar-DZ.js", 855],
      "./global/ar-EG.js": ["./node_modules/@angular/common/locales/global/ar-EG.js", 856],
      "./global/ar-EH.js": ["./node_modules/@angular/common/locales/global/ar-EH.js", 857],
      "./global/ar-ER.js": ["./node_modules/@angular/common/locales/global/ar-ER.js", 858],
      "./global/ar-IL.js": ["./node_modules/@angular/common/locales/global/ar-IL.js", 859],
      "./global/ar-IQ.js": ["./node_modules/@angular/common/locales/global/ar-IQ.js", 860],
      "./global/ar-JO.js": ["./node_modules/@angular/common/locales/global/ar-JO.js", 861],
      "./global/ar-KM.js": ["./node_modules/@angular/common/locales/global/ar-KM.js", 862],
      "./global/ar-KW.js": ["./node_modules/@angular/common/locales/global/ar-KW.js", 863],
      "./global/ar-LB.js": ["./node_modules/@angular/common/locales/global/ar-LB.js", 864],
      "./global/ar-LY.js": ["./node_modules/@angular/common/locales/global/ar-LY.js", 865],
      "./global/ar-MA.js": ["./node_modules/@angular/common/locales/global/ar-MA.js", 866],
      "./global/ar-MR.js": ["./node_modules/@angular/common/locales/global/ar-MR.js", 867],
      "./global/ar-OM.js": ["./node_modules/@angular/common/locales/global/ar-OM.js", 868],
      "./global/ar-PS.js": ["./node_modules/@angular/common/locales/global/ar-PS.js", 869],
      "./global/ar-QA.js": ["./node_modules/@angular/common/locales/global/ar-QA.js", 870],
      "./global/ar-SA.js": ["./node_modules/@angular/common/locales/global/ar-SA.js", 871],
      "./global/ar-SD.js": ["./node_modules/@angular/common/locales/global/ar-SD.js", 872],
      "./global/ar-SO.js": ["./node_modules/@angular/common/locales/global/ar-SO.js", 873],
      "./global/ar-SS.js": ["./node_modules/@angular/common/locales/global/ar-SS.js", 874],
      "./global/ar-SY.js": ["./node_modules/@angular/common/locales/global/ar-SY.js", 875],
      "./global/ar-TD.js": ["./node_modules/@angular/common/locales/global/ar-TD.js", 876],
      "./global/ar-TN.js": ["./node_modules/@angular/common/locales/global/ar-TN.js", 877],
      "./global/ar-YE.js": ["./node_modules/@angular/common/locales/global/ar-YE.js", 878],
      "./global/ar.js": ["./node_modules/@angular/common/locales/global/ar.js", 879],
      "./global/as.js": ["./node_modules/@angular/common/locales/global/as.js", 880],
      "./global/asa.js": ["./node_modules/@angular/common/locales/global/asa.js", 881],
      "./global/ast.js": ["./node_modules/@angular/common/locales/global/ast.js", 882],
      "./global/az-Cyrl.js": ["./node_modules/@angular/common/locales/global/az-Cyrl.js", 883],
      "./global/az-Latn.js": ["./node_modules/@angular/common/locales/global/az-Latn.js", 884],
      "./global/az.js": ["./node_modules/@angular/common/locales/global/az.js", 885],
      "./global/bas.js": ["./node_modules/@angular/common/locales/global/bas.js", 886],
      "./global/be.js": ["./node_modules/@angular/common/locales/global/be.js", 887],
      "./global/bem.js": ["./node_modules/@angular/common/locales/global/bem.js", 888],
      "./global/bez.js": ["./node_modules/@angular/common/locales/global/bez.js", 889],
      "./global/bg.js": ["./node_modules/@angular/common/locales/global/bg.js", 890],
      "./global/bm.js": ["./node_modules/@angular/common/locales/global/bm.js", 891],
      "./global/bn-IN.js": ["./node_modules/@angular/common/locales/global/bn-IN.js", 892],
      "./global/bn.js": ["./node_modules/@angular/common/locales/global/bn.js", 893],
      "./global/bo-IN.js": ["./node_modules/@angular/common/locales/global/bo-IN.js", 894],
      "./global/bo.js": ["./node_modules/@angular/common/locales/global/bo.js", 895],
      "./global/br.js": ["./node_modules/@angular/common/locales/global/br.js", 896],
      "./global/brx.js": ["./node_modules/@angular/common/locales/global/brx.js", 897],
      "./global/bs-Cyrl.js": ["./node_modules/@angular/common/locales/global/bs-Cyrl.js", 898],
      "./global/bs-Latn.js": ["./node_modules/@angular/common/locales/global/bs-Latn.js", 899],
      "./global/bs.js": ["./node_modules/@angular/common/locales/global/bs.js", 900],
      "./global/ca-AD.js": ["./node_modules/@angular/common/locales/global/ca-AD.js", 901],
      "./global/ca-ES-VALENCIA.js": ["./node_modules/@angular/common/locales/global/ca-ES-VALENCIA.js", 902],
      "./global/ca-FR.js": ["./node_modules/@angular/common/locales/global/ca-FR.js", 903],
      "./global/ca-IT.js": ["./node_modules/@angular/common/locales/global/ca-IT.js", 904],
      "./global/ca.js": ["./node_modules/@angular/common/locales/global/ca.js", 905],
      "./global/ccp-IN.js": ["./node_modules/@angular/common/locales/global/ccp-IN.js", 906],
      "./global/ccp.js": ["./node_modules/@angular/common/locales/global/ccp.js", 907],
      "./global/ce.js": ["./node_modules/@angular/common/locales/global/ce.js", 908],
      "./global/ceb.js": ["./node_modules/@angular/common/locales/global/ceb.js", 909],
      "./global/cgg.js": ["./node_modules/@angular/common/locales/global/cgg.js", 910],
      "./global/chr.js": ["./node_modules/@angular/common/locales/global/chr.js", 911],
      "./global/ckb-IR.js": ["./node_modules/@angular/common/locales/global/ckb-IR.js", 912],
      "./global/ckb.js": ["./node_modules/@angular/common/locales/global/ckb.js", 913],
      "./global/cs.js": ["./node_modules/@angular/common/locales/global/cs.js", 914],
      "./global/cu.js": ["./node_modules/@angular/common/locales/global/cu.js", 915],
      "./global/cy.js": ["./node_modules/@angular/common/locales/global/cy.js", 916],
      "./global/da-GL.js": ["./node_modules/@angular/common/locales/global/da-GL.js", 917],
      "./global/da.js": ["./node_modules/@angular/common/locales/global/da.js", 918],
      "./global/dav.js": ["./node_modules/@angular/common/locales/global/dav.js", 919],
      "./global/de-AT.js": ["./node_modules/@angular/common/locales/global/de-AT.js", 920],
      "./global/de-BE.js": ["./node_modules/@angular/common/locales/global/de-BE.js", 921],
      "./global/de-CH.js": ["./node_modules/@angular/common/locales/global/de-CH.js", 922],
      "./global/de-IT.js": ["./node_modules/@angular/common/locales/global/de-IT.js", 923],
      "./global/de-LI.js": ["./node_modules/@angular/common/locales/global/de-LI.js", 924],
      "./global/de-LU.js": ["./node_modules/@angular/common/locales/global/de-LU.js", 925],
      "./global/de.js": ["./node_modules/@angular/common/locales/global/de.js", 926],
      "./global/dje.js": ["./node_modules/@angular/common/locales/global/dje.js", 927],
      "./global/dsb.js": ["./node_modules/@angular/common/locales/global/dsb.js", 928],
      "./global/dua.js": ["./node_modules/@angular/common/locales/global/dua.js", 929],
      "./global/dyo.js": ["./node_modules/@angular/common/locales/global/dyo.js", 930],
      "./global/dz.js": ["./node_modules/@angular/common/locales/global/dz.js", 931],
      "./global/ebu.js": ["./node_modules/@angular/common/locales/global/ebu.js", 932],
      "./global/ee-TG.js": ["./node_modules/@angular/common/locales/global/ee-TG.js", 933],
      "./global/ee.js": ["./node_modules/@angular/common/locales/global/ee.js", 934],
      "./global/el-CY.js": ["./node_modules/@angular/common/locales/global/el-CY.js", 935],
      "./global/el.js": ["./node_modules/@angular/common/locales/global/el.js", 936],
      "./global/en-001.js": ["./node_modules/@angular/common/locales/global/en-001.js", 937],
      "./global/en-150.js": ["./node_modules/@angular/common/locales/global/en-150.js", 938],
      "./global/en-AE.js": ["./node_modules/@angular/common/locales/global/en-AE.js", 939],
      "./global/en-AG.js": ["./node_modules/@angular/common/locales/global/en-AG.js", 940],
      "./global/en-AI.js": ["./node_modules/@angular/common/locales/global/en-AI.js", 941],
      "./global/en-AS.js": ["./node_modules/@angular/common/locales/global/en-AS.js", 942],
      "./global/en-AT.js": ["./node_modules/@angular/common/locales/global/en-AT.js", 943],
      "./global/en-AU.js": ["./node_modules/@angular/common/locales/global/en-AU.js", 944],
      "./global/en-BB.js": ["./node_modules/@angular/common/locales/global/en-BB.js", 945],
      "./global/en-BE.js": ["./node_modules/@angular/common/locales/global/en-BE.js", 946],
      "./global/en-BI.js": ["./node_modules/@angular/common/locales/global/en-BI.js", 947],
      "./global/en-BM.js": ["./node_modules/@angular/common/locales/global/en-BM.js", 948],
      "./global/en-BS.js": ["./node_modules/@angular/common/locales/global/en-BS.js", 949],
      "./global/en-BW.js": ["./node_modules/@angular/common/locales/global/en-BW.js", 950],
      "./global/en-BZ.js": ["./node_modules/@angular/common/locales/global/en-BZ.js", 951],
      "./global/en-CA.js": ["./node_modules/@angular/common/locales/global/en-CA.js", 952],
      "./global/en-CC.js": ["./node_modules/@angular/common/locales/global/en-CC.js", 953],
      "./global/en-CH.js": ["./node_modules/@angular/common/locales/global/en-CH.js", 954],
      "./global/en-CK.js": ["./node_modules/@angular/common/locales/global/en-CK.js", 955],
      "./global/en-CM.js": ["./node_modules/@angular/common/locales/global/en-CM.js", 956],
      "./global/en-CX.js": ["./node_modules/@angular/common/locales/global/en-CX.js", 957],
      "./global/en-CY.js": ["./node_modules/@angular/common/locales/global/en-CY.js", 958],
      "./global/en-DE.js": ["./node_modules/@angular/common/locales/global/en-DE.js", 959],
      "./global/en-DG.js": ["./node_modules/@angular/common/locales/global/en-DG.js", 960],
      "./global/en-DK.js": ["./node_modules/@angular/common/locales/global/en-DK.js", 961],
      "./global/en-DM.js": ["./node_modules/@angular/common/locales/global/en-DM.js", 962],
      "./global/en-ER.js": ["./node_modules/@angular/common/locales/global/en-ER.js", 963],
      "./global/en-FI.js": ["./node_modules/@angular/common/locales/global/en-FI.js", 964],
      "./global/en-FJ.js": ["./node_modules/@angular/common/locales/global/en-FJ.js", 965],
      "./global/en-FK.js": ["./node_modules/@angular/common/locales/global/en-FK.js", 966],
      "./global/en-FM.js": ["./node_modules/@angular/common/locales/global/en-FM.js", 967],
      "./global/en-GB.js": ["./node_modules/@angular/common/locales/global/en-GB.js", 968],
      "./global/en-GD.js": ["./node_modules/@angular/common/locales/global/en-GD.js", 969],
      "./global/en-GG.js": ["./node_modules/@angular/common/locales/global/en-GG.js", 970],
      "./global/en-GH.js": ["./node_modules/@angular/common/locales/global/en-GH.js", 971],
      "./global/en-GI.js": ["./node_modules/@angular/common/locales/global/en-GI.js", 972],
      "./global/en-GM.js": ["./node_modules/@angular/common/locales/global/en-GM.js", 973],
      "./global/en-GU.js": ["./node_modules/@angular/common/locales/global/en-GU.js", 974],
      "./global/en-GY.js": ["./node_modules/@angular/common/locales/global/en-GY.js", 975],
      "./global/en-HK.js": ["./node_modules/@angular/common/locales/global/en-HK.js", 976],
      "./global/en-IE.js": ["./node_modules/@angular/common/locales/global/en-IE.js", 977],
      "./global/en-IL.js": ["./node_modules/@angular/common/locales/global/en-IL.js", 978],
      "./global/en-IM.js": ["./node_modules/@angular/common/locales/global/en-IM.js", 979],
      "./global/en-IN.js": ["./node_modules/@angular/common/locales/global/en-IN.js", 980],
      "./global/en-IO.js": ["./node_modules/@angular/common/locales/global/en-IO.js", 981],
      "./global/en-JE.js": ["./node_modules/@angular/common/locales/global/en-JE.js", 982],
      "./global/en-JM.js": ["./node_modules/@angular/common/locales/global/en-JM.js", 983],
      "./global/en-KE.js": ["./node_modules/@angular/common/locales/global/en-KE.js", 984],
      "./global/en-KI.js": ["./node_modules/@angular/common/locales/global/en-KI.js", 985],
      "./global/en-KN.js": ["./node_modules/@angular/common/locales/global/en-KN.js", 986],
      "./global/en-KY.js": ["./node_modules/@angular/common/locales/global/en-KY.js", 987],
      "./global/en-LC.js": ["./node_modules/@angular/common/locales/global/en-LC.js", 988],
      "./global/en-LR.js": ["./node_modules/@angular/common/locales/global/en-LR.js", 989],
      "./global/en-LS.js": ["./node_modules/@angular/common/locales/global/en-LS.js", 990],
      "./global/en-MG.js": ["./node_modules/@angular/common/locales/global/en-MG.js", 991],
      "./global/en-MH.js": ["./node_modules/@angular/common/locales/global/en-MH.js", 992],
      "./global/en-MO.js": ["./node_modules/@angular/common/locales/global/en-MO.js", 993],
      "./global/en-MP.js": ["./node_modules/@angular/common/locales/global/en-MP.js", 994],
      "./global/en-MS.js": ["./node_modules/@angular/common/locales/global/en-MS.js", 995],
      "./global/en-MT.js": ["./node_modules/@angular/common/locales/global/en-MT.js", 996],
      "./global/en-MU.js": ["./node_modules/@angular/common/locales/global/en-MU.js", 997],
      "./global/en-MW.js": ["./node_modules/@angular/common/locales/global/en-MW.js", 998],
      "./global/en-MY.js": ["./node_modules/@angular/common/locales/global/en-MY.js", 999],
      "./global/en-NA.js": ["./node_modules/@angular/common/locales/global/en-NA.js", 1000],
      "./global/en-NF.js": ["./node_modules/@angular/common/locales/global/en-NF.js", 1001],
      "./global/en-NG.js": ["./node_modules/@angular/common/locales/global/en-NG.js", 1002],
      "./global/en-NL.js": ["./node_modules/@angular/common/locales/global/en-NL.js", 1003],
      "./global/en-NR.js": ["./node_modules/@angular/common/locales/global/en-NR.js", 1004],
      "./global/en-NU.js": ["./node_modules/@angular/common/locales/global/en-NU.js", 1005],
      "./global/en-NZ.js": ["./node_modules/@angular/common/locales/global/en-NZ.js", 1006],
      "./global/en-PG.js": ["./node_modules/@angular/common/locales/global/en-PG.js", 1007],
      "./global/en-PH.js": ["./node_modules/@angular/common/locales/global/en-PH.js", 1008],
      "./global/en-PK.js": ["./node_modules/@angular/common/locales/global/en-PK.js", 1009],
      "./global/en-PN.js": ["./node_modules/@angular/common/locales/global/en-PN.js", 1010],
      "./global/en-PR.js": ["./node_modules/@angular/common/locales/global/en-PR.js", 1011],
      "./global/en-PW.js": ["./node_modules/@angular/common/locales/global/en-PW.js", 1012],
      "./global/en-RW.js": ["./node_modules/@angular/common/locales/global/en-RW.js", 1013],
      "./global/en-SB.js": ["./node_modules/@angular/common/locales/global/en-SB.js", 1014],
      "./global/en-SC.js": ["./node_modules/@angular/common/locales/global/en-SC.js", 1015],
      "./global/en-SD.js": ["./node_modules/@angular/common/locales/global/en-SD.js", 1016],
      "./global/en-SE.js": ["./node_modules/@angular/common/locales/global/en-SE.js", 1017],
      "./global/en-SG.js": ["./node_modules/@angular/common/locales/global/en-SG.js", 1018],
      "./global/en-SH.js": ["./node_modules/@angular/common/locales/global/en-SH.js", 1019],
      "./global/en-SI.js": ["./node_modules/@angular/common/locales/global/en-SI.js", 1020],
      "./global/en-SL.js": ["./node_modules/@angular/common/locales/global/en-SL.js", 1021],
      "./global/en-SS.js": ["./node_modules/@angular/common/locales/global/en-SS.js", 1022],
      "./global/en-SX.js": ["./node_modules/@angular/common/locales/global/en-SX.js", 1023],
      "./global/en-SZ.js": ["./node_modules/@angular/common/locales/global/en-SZ.js", 1024],
      "./global/en-TC.js": ["./node_modules/@angular/common/locales/global/en-TC.js", 1025],
      "./global/en-TK.js": ["./node_modules/@angular/common/locales/global/en-TK.js", 1026],
      "./global/en-TO.js": ["./node_modules/@angular/common/locales/global/en-TO.js", 1027],
      "./global/en-TT.js": ["./node_modules/@angular/common/locales/global/en-TT.js", 1028],
      "./global/en-TV.js": ["./node_modules/@angular/common/locales/global/en-TV.js", 1029],
      "./global/en-TZ.js": ["./node_modules/@angular/common/locales/global/en-TZ.js", 1030],
      "./global/en-UG.js": ["./node_modules/@angular/common/locales/global/en-UG.js", 1031],
      "./global/en-UM.js": ["./node_modules/@angular/common/locales/global/en-UM.js", 1032],
      "./global/en-US-POSIX.js": ["./node_modules/@angular/common/locales/global/en-US-POSIX.js", 1033],
      "./global/en-VC.js": ["./node_modules/@angular/common/locales/global/en-VC.js", 1034],
      "./global/en-VG.js": ["./node_modules/@angular/common/locales/global/en-VG.js", 1035],
      "./global/en-VI.js": ["./node_modules/@angular/common/locales/global/en-VI.js", 1036],
      "./global/en-VU.js": ["./node_modules/@angular/common/locales/global/en-VU.js", 1037],
      "./global/en-WS.js": ["./node_modules/@angular/common/locales/global/en-WS.js", 1038],
      "./global/en-ZA.js": ["./node_modules/@angular/common/locales/global/en-ZA.js", 1039],
      "./global/en-ZM.js": ["./node_modules/@angular/common/locales/global/en-ZM.js", 1040],
      "./global/en-ZW.js": ["./node_modules/@angular/common/locales/global/en-ZW.js", 1041],
      "./global/en.js": ["./node_modules/@angular/common/locales/global/en.js", 1042],
      "./global/eo.js": ["./node_modules/@angular/common/locales/global/eo.js", 1043],
      "./global/es-419.js": ["./node_modules/@angular/common/locales/global/es-419.js", 1044],
      "./global/es-AR.js": ["./node_modules/@angular/common/locales/global/es-AR.js", 1045],
      "./global/es-BO.js": ["./node_modules/@angular/common/locales/global/es-BO.js", 1046],
      "./global/es-BR.js": ["./node_modules/@angular/common/locales/global/es-BR.js", 1047],
      "./global/es-BZ.js": ["./node_modules/@angular/common/locales/global/es-BZ.js", 1048],
      "./global/es-CL.js": ["./node_modules/@angular/common/locales/global/es-CL.js", 1049],
      "./global/es-CO.js": ["./node_modules/@angular/common/locales/global/es-CO.js", 1050],
      "./global/es-CR.js": ["./node_modules/@angular/common/locales/global/es-CR.js", 1051],
      "./global/es-CU.js": ["./node_modules/@angular/common/locales/global/es-CU.js", 1052],
      "./global/es-DO.js": ["./node_modules/@angular/common/locales/global/es-DO.js", 1053],
      "./global/es-EA.js": ["./node_modules/@angular/common/locales/global/es-EA.js", 1054],
      "./global/es-EC.js": ["./node_modules/@angular/common/locales/global/es-EC.js", 1055],
      "./global/es-GQ.js": ["./node_modules/@angular/common/locales/global/es-GQ.js", 1056],
      "./global/es-GT.js": ["./node_modules/@angular/common/locales/global/es-GT.js", 1057],
      "./global/es-HN.js": ["./node_modules/@angular/common/locales/global/es-HN.js", 1058],
      "./global/es-IC.js": ["./node_modules/@angular/common/locales/global/es-IC.js", 1059],
      "./global/es-MX.js": ["./node_modules/@angular/common/locales/global/es-MX.js", 1060],
      "./global/es-NI.js": ["./node_modules/@angular/common/locales/global/es-NI.js", 1061],
      "./global/es-PA.js": ["./node_modules/@angular/common/locales/global/es-PA.js", 1062],
      "./global/es-PE.js": ["./node_modules/@angular/common/locales/global/es-PE.js", 1063],
      "./global/es-PH.js": ["./node_modules/@angular/common/locales/global/es-PH.js", 1064],
      "./global/es-PR.js": ["./node_modules/@angular/common/locales/global/es-PR.js", 1065],
      "./global/es-PY.js": ["./node_modules/@angular/common/locales/global/es-PY.js", 1066],
      "./global/es-SV.js": ["./node_modules/@angular/common/locales/global/es-SV.js", 1067],
      "./global/es-US.js": ["./node_modules/@angular/common/locales/global/es-US.js", 1068],
      "./global/es-UY.js": ["./node_modules/@angular/common/locales/global/es-UY.js", 1069],
      "./global/es-VE.js": ["./node_modules/@angular/common/locales/global/es-VE.js", 1070],
      "./global/es.js": ["./node_modules/@angular/common/locales/global/es.js", 1071],
      "./global/et.js": ["./node_modules/@angular/common/locales/global/et.js", 1072],
      "./global/eu.js": ["./node_modules/@angular/common/locales/global/eu.js", 1073],
      "./global/ewo.js": ["./node_modules/@angular/common/locales/global/ewo.js", 1074],
      "./global/fa-AF.js": ["./node_modules/@angular/common/locales/global/fa-AF.js", 1075],
      "./global/fa.js": ["./node_modules/@angular/common/locales/global/fa.js", 1076],
      "./global/ff-CM.js": ["./node_modules/@angular/common/locales/global/ff-CM.js", 1077],
      "./global/ff-GN.js": ["./node_modules/@angular/common/locales/global/ff-GN.js", 1078],
      "./global/ff-Latn-BF.js": ["./node_modules/@angular/common/locales/global/ff-Latn-BF.js", 1079],
      "./global/ff-Latn-CM.js": ["./node_modules/@angular/common/locales/global/ff-Latn-CM.js", 1080],
      "./global/ff-Latn-GH.js": ["./node_modules/@angular/common/locales/global/ff-Latn-GH.js", 1081],
      "./global/ff-Latn-GM.js": ["./node_modules/@angular/common/locales/global/ff-Latn-GM.js", 1082],
      "./global/ff-Latn-GN.js": ["./node_modules/@angular/common/locales/global/ff-Latn-GN.js", 1083],
      "./global/ff-Latn-GW.js": ["./node_modules/@angular/common/locales/global/ff-Latn-GW.js", 1084],
      "./global/ff-Latn-LR.js": ["./node_modules/@angular/common/locales/global/ff-Latn-LR.js", 1085],
      "./global/ff-Latn-MR.js": ["./node_modules/@angular/common/locales/global/ff-Latn-MR.js", 1086],
      "./global/ff-Latn-NE.js": ["./node_modules/@angular/common/locales/global/ff-Latn-NE.js", 1087],
      "./global/ff-Latn-NG.js": ["./node_modules/@angular/common/locales/global/ff-Latn-NG.js", 1088],
      "./global/ff-Latn-SL.js": ["./node_modules/@angular/common/locales/global/ff-Latn-SL.js", 1089],
      "./global/ff-Latn.js": ["./node_modules/@angular/common/locales/global/ff-Latn.js", 1090],
      "./global/ff-MR.js": ["./node_modules/@angular/common/locales/global/ff-MR.js", 1091],
      "./global/ff.js": ["./node_modules/@angular/common/locales/global/ff.js", 1092],
      "./global/fi.js": ["./node_modules/@angular/common/locales/global/fi.js", 1093],
      "./global/fil.js": ["./node_modules/@angular/common/locales/global/fil.js", 1094],
      "./global/fo-DK.js": ["./node_modules/@angular/common/locales/global/fo-DK.js", 1095],
      "./global/fo.js": ["./node_modules/@angular/common/locales/global/fo.js", 1096],
      "./global/fr-BE.js": ["./node_modules/@angular/common/locales/global/fr-BE.js", 1097],
      "./global/fr-BF.js": ["./node_modules/@angular/common/locales/global/fr-BF.js", 1098],
      "./global/fr-BI.js": ["./node_modules/@angular/common/locales/global/fr-BI.js", 1099],
      "./global/fr-BJ.js": ["./node_modules/@angular/common/locales/global/fr-BJ.js", 1100],
      "./global/fr-BL.js": ["./node_modules/@angular/common/locales/global/fr-BL.js", 1101],
      "./global/fr-CA.js": ["./node_modules/@angular/common/locales/global/fr-CA.js", 1102],
      "./global/fr-CD.js": ["./node_modules/@angular/common/locales/global/fr-CD.js", 1103],
      "./global/fr-CF.js": ["./node_modules/@angular/common/locales/global/fr-CF.js", 1104],
      "./global/fr-CG.js": ["./node_modules/@angular/common/locales/global/fr-CG.js", 1105],
      "./global/fr-CH.js": ["./node_modules/@angular/common/locales/global/fr-CH.js", 1106],
      "./global/fr-CI.js": ["./node_modules/@angular/common/locales/global/fr-CI.js", 1107],
      "./global/fr-CM.js": ["./node_modules/@angular/common/locales/global/fr-CM.js", 1108],
      "./global/fr-DJ.js": ["./node_modules/@angular/common/locales/global/fr-DJ.js", 1109],
      "./global/fr-DZ.js": ["./node_modules/@angular/common/locales/global/fr-DZ.js", 1110],
      "./global/fr-GA.js": ["./node_modules/@angular/common/locales/global/fr-GA.js", 1111],
      "./global/fr-GF.js": ["./node_modules/@angular/common/locales/global/fr-GF.js", 1112],
      "./global/fr-GN.js": ["./node_modules/@angular/common/locales/global/fr-GN.js", 1113],
      "./global/fr-GP.js": ["./node_modules/@angular/common/locales/global/fr-GP.js", 1114],
      "./global/fr-GQ.js": ["./node_modules/@angular/common/locales/global/fr-GQ.js", 1115],
      "./global/fr-HT.js": ["./node_modules/@angular/common/locales/global/fr-HT.js", 1116],
      "./global/fr-KM.js": ["./node_modules/@angular/common/locales/global/fr-KM.js", 1117],
      "./global/fr-LU.js": ["./node_modules/@angular/common/locales/global/fr-LU.js", 1118],
      "./global/fr-MA.js": ["./node_modules/@angular/common/locales/global/fr-MA.js", 1119],
      "./global/fr-MC.js": ["./node_modules/@angular/common/locales/global/fr-MC.js", 1120],
      "./global/fr-MF.js": ["./node_modules/@angular/common/locales/global/fr-MF.js", 1121],
      "./global/fr-MG.js": ["./node_modules/@angular/common/locales/global/fr-MG.js", 1122],
      "./global/fr-ML.js": ["./node_modules/@angular/common/locales/global/fr-ML.js", 1123],
      "./global/fr-MQ.js": ["./node_modules/@angular/common/locales/global/fr-MQ.js", 1124],
      "./global/fr-MR.js": ["./node_modules/@angular/common/locales/global/fr-MR.js", 1125],
      "./global/fr-MU.js": ["./node_modules/@angular/common/locales/global/fr-MU.js", 1126],
      "./global/fr-NC.js": ["./node_modules/@angular/common/locales/global/fr-NC.js", 1127],
      "./global/fr-NE.js": ["./node_modules/@angular/common/locales/global/fr-NE.js", 1128],
      "./global/fr-PF.js": ["./node_modules/@angular/common/locales/global/fr-PF.js", 1129],
      "./global/fr-PM.js": ["./node_modules/@angular/common/locales/global/fr-PM.js", 1130],
      "./global/fr-RE.js": ["./node_modules/@angular/common/locales/global/fr-RE.js", 1131],
      "./global/fr-RW.js": ["./node_modules/@angular/common/locales/global/fr-RW.js", 1132],
      "./global/fr-SC.js": ["./node_modules/@angular/common/locales/global/fr-SC.js", 1133],
      "./global/fr-SN.js": ["./node_modules/@angular/common/locales/global/fr-SN.js", 1134],
      "./global/fr-SY.js": ["./node_modules/@angular/common/locales/global/fr-SY.js", 1135],
      "./global/fr-TD.js": ["./node_modules/@angular/common/locales/global/fr-TD.js", 1136],
      "./global/fr-TG.js": ["./node_modules/@angular/common/locales/global/fr-TG.js", 1137],
      "./global/fr-TN.js": ["./node_modules/@angular/common/locales/global/fr-TN.js", 1138],
      "./global/fr-VU.js": ["./node_modules/@angular/common/locales/global/fr-VU.js", 1139],
      "./global/fr-WF.js": ["./node_modules/@angular/common/locales/global/fr-WF.js", 1140],
      "./global/fr-YT.js": ["./node_modules/@angular/common/locales/global/fr-YT.js", 1141],
      "./global/fr.js": ["./node_modules/@angular/common/locales/global/fr.js", 1142],
      "./global/fur.js": ["./node_modules/@angular/common/locales/global/fur.js", 1143],
      "./global/fy.js": ["./node_modules/@angular/common/locales/global/fy.js", 1144],
      "./global/ga-GB.js": ["./node_modules/@angular/common/locales/global/ga-GB.js", 1145],
      "./global/ga.js": ["./node_modules/@angular/common/locales/global/ga.js", 1146],
      "./global/gd.js": ["./node_modules/@angular/common/locales/global/gd.js", 1147],
      "./global/gl.js": ["./node_modules/@angular/common/locales/global/gl.js", 1148],
      "./global/gsw-FR.js": ["./node_modules/@angular/common/locales/global/gsw-FR.js", 1149],
      "./global/gsw-LI.js": ["./node_modules/@angular/common/locales/global/gsw-LI.js", 1150],
      "./global/gsw.js": ["./node_modules/@angular/common/locales/global/gsw.js", 1151],
      "./global/gu.js": ["./node_modules/@angular/common/locales/global/gu.js", 1152],
      "./global/guz.js": ["./node_modules/@angular/common/locales/global/guz.js", 1153],
      "./global/gv.js": ["./node_modules/@angular/common/locales/global/gv.js", 1154],
      "./global/ha-GH.js": ["./node_modules/@angular/common/locales/global/ha-GH.js", 1155],
      "./global/ha-NE.js": ["./node_modules/@angular/common/locales/global/ha-NE.js", 1156],
      "./global/ha.js": ["./node_modules/@angular/common/locales/global/ha.js", 1157],
      "./global/haw.js": ["./node_modules/@angular/common/locales/global/haw.js", 1158],
      "./global/he.js": ["./node_modules/@angular/common/locales/global/he.js", 1159],
      "./global/hi.js": ["./node_modules/@angular/common/locales/global/hi.js", 1160],
      "./global/hr-BA.js": ["./node_modules/@angular/common/locales/global/hr-BA.js", 1161],
      "./global/hr.js": ["./node_modules/@angular/common/locales/global/hr.js", 1162],
      "./global/hsb.js": ["./node_modules/@angular/common/locales/global/hsb.js", 1163],
      "./global/hu.js": ["./node_modules/@angular/common/locales/global/hu.js", 1164],
      "./global/hy.js": ["./node_modules/@angular/common/locales/global/hy.js", 1165],
      "./global/ia.js": ["./node_modules/@angular/common/locales/global/ia.js", 1166],
      "./global/id.js": ["./node_modules/@angular/common/locales/global/id.js", 1167],
      "./global/ig.js": ["./node_modules/@angular/common/locales/global/ig.js", 1168],
      "./global/ii.js": ["./node_modules/@angular/common/locales/global/ii.js", 1169],
      "./global/is.js": ["./node_modules/@angular/common/locales/global/is.js", 1170],
      "./global/it-CH.js": ["./node_modules/@angular/common/locales/global/it-CH.js", 1171],
      "./global/it-SM.js": ["./node_modules/@angular/common/locales/global/it-SM.js", 1172],
      "./global/it-VA.js": ["./node_modules/@angular/common/locales/global/it-VA.js", 1173],
      "./global/it.js": ["./node_modules/@angular/common/locales/global/it.js", 1174],
      "./global/ja.js": ["./node_modules/@angular/common/locales/global/ja.js", 1175],
      "./global/jgo.js": ["./node_modules/@angular/common/locales/global/jgo.js", 1176],
      "./global/jmc.js": ["./node_modules/@angular/common/locales/global/jmc.js", 1177],
      "./global/jv.js": ["./node_modules/@angular/common/locales/global/jv.js", 1178],
      "./global/ka.js": ["./node_modules/@angular/common/locales/global/ka.js", 1179],
      "./global/kab.js": ["./node_modules/@angular/common/locales/global/kab.js", 1180],
      "./global/kam.js": ["./node_modules/@angular/common/locales/global/kam.js", 1181],
      "./global/kde.js": ["./node_modules/@angular/common/locales/global/kde.js", 1182],
      "./global/kea.js": ["./node_modules/@angular/common/locales/global/kea.js", 1183],
      "./global/khq.js": ["./node_modules/@angular/common/locales/global/khq.js", 1184],
      "./global/ki.js": ["./node_modules/@angular/common/locales/global/ki.js", 1185],
      "./global/kk.js": ["./node_modules/@angular/common/locales/global/kk.js", 1186],
      "./global/kkj.js": ["./node_modules/@angular/common/locales/global/kkj.js", 1187],
      "./global/kl.js": ["./node_modules/@angular/common/locales/global/kl.js", 1188],
      "./global/kln.js": ["./node_modules/@angular/common/locales/global/kln.js", 1189],
      "./global/km.js": ["./node_modules/@angular/common/locales/global/km.js", 1190],
      "./global/kn.js": ["./node_modules/@angular/common/locales/global/kn.js", 1191],
      "./global/ko-KP.js": ["./node_modules/@angular/common/locales/global/ko-KP.js", 1192],
      "./global/ko.js": ["./node_modules/@angular/common/locales/global/ko.js", 1193],
      "./global/kok.js": ["./node_modules/@angular/common/locales/global/kok.js", 1194],
      "./global/ks.js": ["./node_modules/@angular/common/locales/global/ks.js", 1195],
      "./global/ksb.js": ["./node_modules/@angular/common/locales/global/ksb.js", 1196],
      "./global/ksf.js": ["./node_modules/@angular/common/locales/global/ksf.js", 1197],
      "./global/ksh.js": ["./node_modules/@angular/common/locales/global/ksh.js", 1198],
      "./global/ku.js": ["./node_modules/@angular/common/locales/global/ku.js", 1199],
      "./global/kw.js": ["./node_modules/@angular/common/locales/global/kw.js", 1200],
      "./global/ky.js": ["./node_modules/@angular/common/locales/global/ky.js", 1201],
      "./global/lag.js": ["./node_modules/@angular/common/locales/global/lag.js", 1202],
      "./global/lb.js": ["./node_modules/@angular/common/locales/global/lb.js", 1203],
      "./global/lg.js": ["./node_modules/@angular/common/locales/global/lg.js", 1204],
      "./global/lkt.js": ["./node_modules/@angular/common/locales/global/lkt.js", 1205],
      "./global/ln-AO.js": ["./node_modules/@angular/common/locales/global/ln-AO.js", 1206],
      "./global/ln-CF.js": ["./node_modules/@angular/common/locales/global/ln-CF.js", 1207],
      "./global/ln-CG.js": ["./node_modules/@angular/common/locales/global/ln-CG.js", 1208],
      "./global/ln.js": ["./node_modules/@angular/common/locales/global/ln.js", 1209],
      "./global/lo.js": ["./node_modules/@angular/common/locales/global/lo.js", 1210],
      "./global/lrc-IQ.js": ["./node_modules/@angular/common/locales/global/lrc-IQ.js", 1211],
      "./global/lrc.js": ["./node_modules/@angular/common/locales/global/lrc.js", 1212],
      "./global/lt.js": ["./node_modules/@angular/common/locales/global/lt.js", 1213],
      "./global/lu.js": ["./node_modules/@angular/common/locales/global/lu.js", 1214],
      "./global/luo.js": ["./node_modules/@angular/common/locales/global/luo.js", 1215],
      "./global/luy.js": ["./node_modules/@angular/common/locales/global/luy.js", 1216],
      "./global/lv.js": ["./node_modules/@angular/common/locales/global/lv.js", 1217],
      "./global/mas-TZ.js": ["./node_modules/@angular/common/locales/global/mas-TZ.js", 1218],
      "./global/mas.js": ["./node_modules/@angular/common/locales/global/mas.js", 1219],
      "./global/mer.js": ["./node_modules/@angular/common/locales/global/mer.js", 1220],
      "./global/mfe.js": ["./node_modules/@angular/common/locales/global/mfe.js", 1221],
      "./global/mg.js": ["./node_modules/@angular/common/locales/global/mg.js", 1222],
      "./global/mgh.js": ["./node_modules/@angular/common/locales/global/mgh.js", 1223],
      "./global/mgo.js": ["./node_modules/@angular/common/locales/global/mgo.js", 1224],
      "./global/mi.js": ["./node_modules/@angular/common/locales/global/mi.js", 1225],
      "./global/mk.js": ["./node_modules/@angular/common/locales/global/mk.js", 1226],
      "./global/ml.js": ["./node_modules/@angular/common/locales/global/ml.js", 1227],
      "./global/mn.js": ["./node_modules/@angular/common/locales/global/mn.js", 1228],
      "./global/mr.js": ["./node_modules/@angular/common/locales/global/mr.js", 1229],
      "./global/ms-BN.js": ["./node_modules/@angular/common/locales/global/ms-BN.js", 1230],
      "./global/ms-SG.js": ["./node_modules/@angular/common/locales/global/ms-SG.js", 1231],
      "./global/ms.js": ["./node_modules/@angular/common/locales/global/ms.js", 1232],
      "./global/mt.js": ["./node_modules/@angular/common/locales/global/mt.js", 1233],
      "./global/mua.js": ["./node_modules/@angular/common/locales/global/mua.js", 1234],
      "./global/my.js": ["./node_modules/@angular/common/locales/global/my.js", 1235],
      "./global/mzn.js": ["./node_modules/@angular/common/locales/global/mzn.js", 1236],
      "./global/naq.js": ["./node_modules/@angular/common/locales/global/naq.js", 1237],
      "./global/nb-SJ.js": ["./node_modules/@angular/common/locales/global/nb-SJ.js", 1238],
      "./global/nb.js": ["./node_modules/@angular/common/locales/global/nb.js", 1239],
      "./global/nd.js": ["./node_modules/@angular/common/locales/global/nd.js", 1240],
      "./global/nds-NL.js": ["./node_modules/@angular/common/locales/global/nds-NL.js", 1241],
      "./global/nds.js": ["./node_modules/@angular/common/locales/global/nds.js", 1242],
      "./global/ne-IN.js": ["./node_modules/@angular/common/locales/global/ne-IN.js", 1243],
      "./global/ne.js": ["./node_modules/@angular/common/locales/global/ne.js", 1244],
      "./global/nl-AW.js": ["./node_modules/@angular/common/locales/global/nl-AW.js", 1245],
      "./global/nl-BE.js": ["./node_modules/@angular/common/locales/global/nl-BE.js", 1246],
      "./global/nl-BQ.js": ["./node_modules/@angular/common/locales/global/nl-BQ.js", 1247],
      "./global/nl-CW.js": ["./node_modules/@angular/common/locales/global/nl-CW.js", 1248],
      "./global/nl-SR.js": ["./node_modules/@angular/common/locales/global/nl-SR.js", 1249],
      "./global/nl-SX.js": ["./node_modules/@angular/common/locales/global/nl-SX.js", 1250],
      "./global/nl.js": ["./node_modules/@angular/common/locales/global/nl.js", 1251],
      "./global/nmg.js": ["./node_modules/@angular/common/locales/global/nmg.js", 1252],
      "./global/nn.js": ["./node_modules/@angular/common/locales/global/nn.js", 1253],
      "./global/nnh.js": ["./node_modules/@angular/common/locales/global/nnh.js", 1254],
      "./global/nus.js": ["./node_modules/@angular/common/locales/global/nus.js", 1255],
      "./global/nyn.js": ["./node_modules/@angular/common/locales/global/nyn.js", 1256],
      "./global/om-KE.js": ["./node_modules/@angular/common/locales/global/om-KE.js", 1257],
      "./global/om.js": ["./node_modules/@angular/common/locales/global/om.js", 1258],
      "./global/or.js": ["./node_modules/@angular/common/locales/global/or.js", 1259],
      "./global/os-RU.js": ["./node_modules/@angular/common/locales/global/os-RU.js", 1260],
      "./global/os.js": ["./node_modules/@angular/common/locales/global/os.js", 1261],
      "./global/pa-Arab.js": ["./node_modules/@angular/common/locales/global/pa-Arab.js", 1262],
      "./global/pa-Guru.js": ["./node_modules/@angular/common/locales/global/pa-Guru.js", 1263],
      "./global/pa.js": ["./node_modules/@angular/common/locales/global/pa.js", 1264],
      "./global/pl.js": ["./node_modules/@angular/common/locales/global/pl.js", 1265],
      "./global/prg.js": ["./node_modules/@angular/common/locales/global/prg.js", 1266],
      "./global/ps-PK.js": ["./node_modules/@angular/common/locales/global/ps-PK.js", 1267],
      "./global/ps.js": ["./node_modules/@angular/common/locales/global/ps.js", 1268],
      "./global/pt-AO.js": ["./node_modules/@angular/common/locales/global/pt-AO.js", 1269],
      "./global/pt-CH.js": ["./node_modules/@angular/common/locales/global/pt-CH.js", 1270],
      "./global/pt-CV.js": ["./node_modules/@angular/common/locales/global/pt-CV.js", 1271],
      "./global/pt-GQ.js": ["./node_modules/@angular/common/locales/global/pt-GQ.js", 1272],
      "./global/pt-GW.js": ["./node_modules/@angular/common/locales/global/pt-GW.js", 1273],
      "./global/pt-LU.js": ["./node_modules/@angular/common/locales/global/pt-LU.js", 1274],
      "./global/pt-MO.js": ["./node_modules/@angular/common/locales/global/pt-MO.js", 1275],
      "./global/pt-MZ.js": ["./node_modules/@angular/common/locales/global/pt-MZ.js", 1276],
      "./global/pt-PT.js": ["./node_modules/@angular/common/locales/global/pt-PT.js", 1277],
      "./global/pt-ST.js": ["./node_modules/@angular/common/locales/global/pt-ST.js", 1278],
      "./global/pt-TL.js": ["./node_modules/@angular/common/locales/global/pt-TL.js", 1279],
      "./global/pt.js": ["./node_modules/@angular/common/locales/global/pt.js", 1280],
      "./global/qu-BO.js": ["./node_modules/@angular/common/locales/global/qu-BO.js", 1281],
      "./global/qu-EC.js": ["./node_modules/@angular/common/locales/global/qu-EC.js", 1282],
      "./global/qu.js": ["./node_modules/@angular/common/locales/global/qu.js", 1283],
      "./global/rm.js": ["./node_modules/@angular/common/locales/global/rm.js", 1284],
      "./global/rn.js": ["./node_modules/@angular/common/locales/global/rn.js", 1285],
      "./global/ro-MD.js": ["./node_modules/@angular/common/locales/global/ro-MD.js", 1286],
      "./global/ro.js": ["./node_modules/@angular/common/locales/global/ro.js", 1287],
      "./global/rof.js": ["./node_modules/@angular/common/locales/global/rof.js", 1288],
      "./global/root.js": ["./node_modules/@angular/common/locales/global/root.js", 1289],
      "./global/ru-BY.js": ["./node_modules/@angular/common/locales/global/ru-BY.js", 1290],
      "./global/ru-KG.js": ["./node_modules/@angular/common/locales/global/ru-KG.js", 1291],
      "./global/ru-KZ.js": ["./node_modules/@angular/common/locales/global/ru-KZ.js", 1292],
      "./global/ru-MD.js": ["./node_modules/@angular/common/locales/global/ru-MD.js", 1293],
      "./global/ru-UA.js": ["./node_modules/@angular/common/locales/global/ru-UA.js", 1294],
      "./global/ru.js": ["./node_modules/@angular/common/locales/global/ru.js", 1295],
      "./global/rw.js": ["./node_modules/@angular/common/locales/global/rw.js", 1296],
      "./global/rwk.js": ["./node_modules/@angular/common/locales/global/rwk.js", 1297],
      "./global/sah.js": ["./node_modules/@angular/common/locales/global/sah.js", 1298],
      "./global/saq.js": ["./node_modules/@angular/common/locales/global/saq.js", 1299],
      "./global/sbp.js": ["./node_modules/@angular/common/locales/global/sbp.js", 1300],
      "./global/sd.js": ["./node_modules/@angular/common/locales/global/sd.js", 1301],
      "./global/se-FI.js": ["./node_modules/@angular/common/locales/global/se-FI.js", 1302],
      "./global/se-SE.js": ["./node_modules/@angular/common/locales/global/se-SE.js", 1303],
      "./global/se.js": ["./node_modules/@angular/common/locales/global/se.js", 1304],
      "./global/seh.js": ["./node_modules/@angular/common/locales/global/seh.js", 1305],
      "./global/ses.js": ["./node_modules/@angular/common/locales/global/ses.js", 1306],
      "./global/sg.js": ["./node_modules/@angular/common/locales/global/sg.js", 1307],
      "./global/shi-Latn.js": ["./node_modules/@angular/common/locales/global/shi-Latn.js", 1308],
      "./global/shi-Tfng.js": ["./node_modules/@angular/common/locales/global/shi-Tfng.js", 1309],
      "./global/shi.js": ["./node_modules/@angular/common/locales/global/shi.js", 1310],
      "./global/si.js": ["./node_modules/@angular/common/locales/global/si.js", 1311],
      "./global/sk.js": ["./node_modules/@angular/common/locales/global/sk.js", 1312],
      "./global/sl.js": ["./node_modules/@angular/common/locales/global/sl.js", 1313],
      "./global/smn.js": ["./node_modules/@angular/common/locales/global/smn.js", 1314],
      "./global/sn.js": ["./node_modules/@angular/common/locales/global/sn.js", 1315],
      "./global/so-DJ.js": ["./node_modules/@angular/common/locales/global/so-DJ.js", 1316],
      "./global/so-ET.js": ["./node_modules/@angular/common/locales/global/so-ET.js", 1317],
      "./global/so-KE.js": ["./node_modules/@angular/common/locales/global/so-KE.js", 1318],
      "./global/so.js": ["./node_modules/@angular/common/locales/global/so.js", 1319],
      "./global/sq-MK.js": ["./node_modules/@angular/common/locales/global/sq-MK.js", 1320],
      "./global/sq-XK.js": ["./node_modules/@angular/common/locales/global/sq-XK.js", 1321],
      "./global/sq.js": ["./node_modules/@angular/common/locales/global/sq.js", 1322],
      "./global/sr-Cyrl-BA.js": ["./node_modules/@angular/common/locales/global/sr-Cyrl-BA.js", 1323],
      "./global/sr-Cyrl-ME.js": ["./node_modules/@angular/common/locales/global/sr-Cyrl-ME.js", 1324],
      "./global/sr-Cyrl-XK.js": ["./node_modules/@angular/common/locales/global/sr-Cyrl-XK.js", 1325],
      "./global/sr-Cyrl.js": ["./node_modules/@angular/common/locales/global/sr-Cyrl.js", 1326],
      "./global/sr-Latn-BA.js": ["./node_modules/@angular/common/locales/global/sr-Latn-BA.js", 1327],
      "./global/sr-Latn-ME.js": ["./node_modules/@angular/common/locales/global/sr-Latn-ME.js", 1328],
      "./global/sr-Latn-XK.js": ["./node_modules/@angular/common/locales/global/sr-Latn-XK.js", 1329],
      "./global/sr-Latn.js": ["./node_modules/@angular/common/locales/global/sr-Latn.js", 1330],
      "./global/sr.js": ["./node_modules/@angular/common/locales/global/sr.js", 1331],
      "./global/sv-AX.js": ["./node_modules/@angular/common/locales/global/sv-AX.js", 1332],
      "./global/sv-FI.js": ["./node_modules/@angular/common/locales/global/sv-FI.js", 1333],
      "./global/sv.js": ["./node_modules/@angular/common/locales/global/sv.js", 1334],
      "./global/sw-CD.js": ["./node_modules/@angular/common/locales/global/sw-CD.js", 1335],
      "./global/sw-KE.js": ["./node_modules/@angular/common/locales/global/sw-KE.js", 1336],
      "./global/sw-UG.js": ["./node_modules/@angular/common/locales/global/sw-UG.js", 1337],
      "./global/sw.js": ["./node_modules/@angular/common/locales/global/sw.js", 1338],
      "./global/ta-LK.js": ["./node_modules/@angular/common/locales/global/ta-LK.js", 1339],
      "./global/ta-MY.js": ["./node_modules/@angular/common/locales/global/ta-MY.js", 1340],
      "./global/ta-SG.js": ["./node_modules/@angular/common/locales/global/ta-SG.js", 1341],
      "./global/ta.js": ["./node_modules/@angular/common/locales/global/ta.js", 1342],
      "./global/te.js": ["./node_modules/@angular/common/locales/global/te.js", 1343],
      "./global/teo-KE.js": ["./node_modules/@angular/common/locales/global/teo-KE.js", 1344],
      "./global/teo.js": ["./node_modules/@angular/common/locales/global/teo.js", 1345],
      "./global/tg.js": ["./node_modules/@angular/common/locales/global/tg.js", 1346],
      "./global/th.js": ["./node_modules/@angular/common/locales/global/th.js", 1347],
      "./global/ti-ER.js": ["./node_modules/@angular/common/locales/global/ti-ER.js", 1348],
      "./global/ti.js": ["./node_modules/@angular/common/locales/global/ti.js", 1349],
      "./global/tk.js": ["./node_modules/@angular/common/locales/global/tk.js", 1350],
      "./global/to.js": ["./node_modules/@angular/common/locales/global/to.js", 1351],
      "./global/tr-CY.js": ["./node_modules/@angular/common/locales/global/tr-CY.js", 1352],
      "./global/tr.js": ["./node_modules/@angular/common/locales/global/tr.js", 1353],
      "./global/tt.js": ["./node_modules/@angular/common/locales/global/tt.js", 1354],
      "./global/twq.js": ["./node_modules/@angular/common/locales/global/twq.js", 1355],
      "./global/tzm.js": ["./node_modules/@angular/common/locales/global/tzm.js", 1356],
      "./global/ug.js": ["./node_modules/@angular/common/locales/global/ug.js", 1357],
      "./global/uk.js": ["./node_modules/@angular/common/locales/global/uk.js", 1358],
      "./global/ur-IN.js": ["./node_modules/@angular/common/locales/global/ur-IN.js", 1359],
      "./global/ur.js": ["./node_modules/@angular/common/locales/global/ur.js", 1360],
      "./global/uz-Arab.js": ["./node_modules/@angular/common/locales/global/uz-Arab.js", 1361],
      "./global/uz-Cyrl.js": ["./node_modules/@angular/common/locales/global/uz-Cyrl.js", 1362],
      "./global/uz-Latn.js": ["./node_modules/@angular/common/locales/global/uz-Latn.js", 1363],
      "./global/uz.js": ["./node_modules/@angular/common/locales/global/uz.js", 1364],
      "./global/vai-Latn.js": ["./node_modules/@angular/common/locales/global/vai-Latn.js", 1365],
      "./global/vai-Vaii.js": ["./node_modules/@angular/common/locales/global/vai-Vaii.js", 1366],
      "./global/vai.js": ["./node_modules/@angular/common/locales/global/vai.js", 1367],
      "./global/vi.js": ["./node_modules/@angular/common/locales/global/vi.js", 1368],
      "./global/vo.js": ["./node_modules/@angular/common/locales/global/vo.js", 1369],
      "./global/vun.js": ["./node_modules/@angular/common/locales/global/vun.js", 1370],
      "./global/wae.js": ["./node_modules/@angular/common/locales/global/wae.js", 1371],
      "./global/wo.js": ["./node_modules/@angular/common/locales/global/wo.js", 1372],
      "./global/xh.js": ["./node_modules/@angular/common/locales/global/xh.js", 1373],
      "./global/xog.js": ["./node_modules/@angular/common/locales/global/xog.js", 1374],
      "./global/yav.js": ["./node_modules/@angular/common/locales/global/yav.js", 1375],
      "./global/yi.js": ["./node_modules/@angular/common/locales/global/yi.js", 1376],
      "./global/yo-BJ.js": ["./node_modules/@angular/common/locales/global/yo-BJ.js", 1377],
      "./global/yo.js": ["./node_modules/@angular/common/locales/global/yo.js", 1378],
      "./global/yue-Hans.js": ["./node_modules/@angular/common/locales/global/yue-Hans.js", 1379],
      "./global/yue-Hant.js": ["./node_modules/@angular/common/locales/global/yue-Hant.js", 1380],
      "./global/yue.js": ["./node_modules/@angular/common/locales/global/yue.js", 1381],
      "./global/zgh.js": ["./node_modules/@angular/common/locales/global/zgh.js", 1382],
      "./global/zh-Hans-HK.js": ["./node_modules/@angular/common/locales/global/zh-Hans-HK.js", 1383],
      "./global/zh-Hans-MO.js": ["./node_modules/@angular/common/locales/global/zh-Hans-MO.js", 1384],
      "./global/zh-Hans-SG.js": ["./node_modules/@angular/common/locales/global/zh-Hans-SG.js", 1385],
      "./global/zh-Hans.js": ["./node_modules/@angular/common/locales/global/zh-Hans.js", 1386],
      "./global/zh-Hant-HK.js": ["./node_modules/@angular/common/locales/global/zh-Hant-HK.js", 1387],
      "./global/zh-Hant-MO.js": ["./node_modules/@angular/common/locales/global/zh-Hant-MO.js", 1388],
      "./global/zh-Hant.js": ["./node_modules/@angular/common/locales/global/zh-Hant.js", 1389],
      "./global/zh.js": ["./node_modules/@angular/common/locales/global/zh.js", 1390],
      "./global/zu.js": ["./node_modules/@angular/common/locales/global/zu.js", 1391],
      "./gsw-FR.js": ["./node_modules/@angular/common/locales/gsw-FR.js", 1392],
      "./gsw-LI.js": ["./node_modules/@angular/common/locales/gsw-LI.js", 1393],
      "./gsw.js": ["./node_modules/@angular/common/locales/gsw.js", 1394],
      "./gu.js": ["./node_modules/@angular/common/locales/gu.js", 1395],
      "./guz.js": ["./node_modules/@angular/common/locales/guz.js", 1396],
      "./gv.js": ["./node_modules/@angular/common/locales/gv.js", 1397],
      "./ha-GH.js": ["./node_modules/@angular/common/locales/ha-GH.js", 1398],
      "./ha-NE.js": ["./node_modules/@angular/common/locales/ha-NE.js", 1399],
      "./ha.js": ["./node_modules/@angular/common/locales/ha.js", 1400],
      "./haw.js": ["./node_modules/@angular/common/locales/haw.js", 1401],
      "./he.js": ["./node_modules/@angular/common/locales/he.js", 1402],
      "./hi.js": ["./node_modules/@angular/common/locales/hi.js", 1403],
      "./hr-BA.js": ["./node_modules/@angular/common/locales/hr-BA.js", 1404],
      "./hr.js": ["./node_modules/@angular/common/locales/hr.js", 1405],
      "./hsb.js": ["./node_modules/@angular/common/locales/hsb.js", 1406],
      "./hu.js": ["./node_modules/@angular/common/locales/hu.js", 1407],
      "./hy.js": ["./node_modules/@angular/common/locales/hy.js", 1408],
      "./ia.js": ["./node_modules/@angular/common/locales/ia.js", 1409],
      "./id.js": ["./node_modules/@angular/common/locales/id.js", 1410],
      "./ig.js": ["./node_modules/@angular/common/locales/ig.js", 1411],
      "./ii.js": ["./node_modules/@angular/common/locales/ii.js", 1412],
      "./is.js": ["./node_modules/@angular/common/locales/is.js", 1413],
      "./it-CH.js": ["./node_modules/@angular/common/locales/it-CH.js", 1414],
      "./it-SM.js": ["./node_modules/@angular/common/locales/it-SM.js", 1415],
      "./it-VA.js": ["./node_modules/@angular/common/locales/it-VA.js", 1416],
      "./it.js": ["./node_modules/@angular/common/locales/it.js", 1417],
      "./ja.js": ["./node_modules/@angular/common/locales/ja.js", 1418],
      "./jgo.js": ["./node_modules/@angular/common/locales/jgo.js", 1419],
      "./jmc.js": ["./node_modules/@angular/common/locales/jmc.js", 1420],
      "./jv.js": ["./node_modules/@angular/common/locales/jv.js", 1421],
      "./ka.js": ["./node_modules/@angular/common/locales/ka.js", 1422],
      "./kab.js": ["./node_modules/@angular/common/locales/kab.js", 1423],
      "./kam.js": ["./node_modules/@angular/common/locales/kam.js", 1424],
      "./kde.js": ["./node_modules/@angular/common/locales/kde.js", 1425],
      "./kea.js": ["./node_modules/@angular/common/locales/kea.js", 1426],
      "./khq.js": ["./node_modules/@angular/common/locales/khq.js", 1427],
      "./ki.js": ["./node_modules/@angular/common/locales/ki.js", 1428],
      "./kk.js": ["./node_modules/@angular/common/locales/kk.js", 1429],
      "./kkj.js": ["./node_modules/@angular/common/locales/kkj.js", 1430],
      "./kl.js": ["./node_modules/@angular/common/locales/kl.js", 1431],
      "./kln.js": ["./node_modules/@angular/common/locales/kln.js", 1432],
      "./km.js": ["./node_modules/@angular/common/locales/km.js", 1433],
      "./kn.js": ["./node_modules/@angular/common/locales/kn.js", 1434],
      "./ko-KP.js": ["./node_modules/@angular/common/locales/ko-KP.js", 1435],
      "./ko.js": ["./node_modules/@angular/common/locales/ko.js", 1436],
      "./kok.js": ["./node_modules/@angular/common/locales/kok.js", 1437],
      "./ks.js": ["./node_modules/@angular/common/locales/ks.js", 1438],
      "./ksb.js": ["./node_modules/@angular/common/locales/ksb.js", 1439],
      "./ksf.js": ["./node_modules/@angular/common/locales/ksf.js", 1440],
      "./ksh.js": ["./node_modules/@angular/common/locales/ksh.js", 1441],
      "./ku.js": ["./node_modules/@angular/common/locales/ku.js", 1442],
      "./kw.js": ["./node_modules/@angular/common/locales/kw.js", 1443],
      "./ky.js": ["./node_modules/@angular/common/locales/ky.js", 1444],
      "./lag.js": ["./node_modules/@angular/common/locales/lag.js", 1445],
      "./lb.js": ["./node_modules/@angular/common/locales/lb.js", 1446],
      "./lg.js": ["./node_modules/@angular/common/locales/lg.js", 1447],
      "./lkt.js": ["./node_modules/@angular/common/locales/lkt.js", 1448],
      "./ln-AO.js": ["./node_modules/@angular/common/locales/ln-AO.js", 1449],
      "./ln-CF.js": ["./node_modules/@angular/common/locales/ln-CF.js", 1450],
      "./ln-CG.js": ["./node_modules/@angular/common/locales/ln-CG.js", 1451],
      "./ln.js": ["./node_modules/@angular/common/locales/ln.js", 1452],
      "./lo.js": ["./node_modules/@angular/common/locales/lo.js", 1453],
      "./lrc-IQ.js": ["./node_modules/@angular/common/locales/lrc-IQ.js", 1454],
      "./lrc.js": ["./node_modules/@angular/common/locales/lrc.js", 1455],
      "./lt.js": ["./node_modules/@angular/common/locales/lt.js", 1456],
      "./lu.js": ["./node_modules/@angular/common/locales/lu.js", 1457],
      "./luo.js": ["./node_modules/@angular/common/locales/luo.js", 1458],
      "./luy.js": ["./node_modules/@angular/common/locales/luy.js", 1459],
      "./lv.js": ["./node_modules/@angular/common/locales/lv.js", 1460],
      "./mas-TZ.js": ["./node_modules/@angular/common/locales/mas-TZ.js", 1461],
      "./mas.js": ["./node_modules/@angular/common/locales/mas.js", 1462],
      "./mer.js": ["./node_modules/@angular/common/locales/mer.js", 1463],
      "./mfe.js": ["./node_modules/@angular/common/locales/mfe.js", 1464],
      "./mg.js": ["./node_modules/@angular/common/locales/mg.js", 1465],
      "./mgh.js": ["./node_modules/@angular/common/locales/mgh.js", 1466],
      "./mgo.js": ["./node_modules/@angular/common/locales/mgo.js", 1467],
      "./mi.js": ["./node_modules/@angular/common/locales/mi.js", 1468],
      "./mk.js": ["./node_modules/@angular/common/locales/mk.js", 1469],
      "./ml.js": ["./node_modules/@angular/common/locales/ml.js", 1470],
      "./mn.js": ["./node_modules/@angular/common/locales/mn.js", 1471],
      "./mr.js": ["./node_modules/@angular/common/locales/mr.js", 1472],
      "./ms-BN.js": ["./node_modules/@angular/common/locales/ms-BN.js", 1473],
      "./ms-SG.js": ["./node_modules/@angular/common/locales/ms-SG.js", 1474],
      "./ms.js": ["./node_modules/@angular/common/locales/ms.js", 1475],
      "./mt.js": ["./node_modules/@angular/common/locales/mt.js", 1476],
      "./mua.js": ["./node_modules/@angular/common/locales/mua.js", 1477],
      "./my.js": ["./node_modules/@angular/common/locales/my.js", 1478],
      "./mzn.js": ["./node_modules/@angular/common/locales/mzn.js", 1479],
      "./naq.js": ["./node_modules/@angular/common/locales/naq.js", 1480],
      "./nb-SJ.js": ["./node_modules/@angular/common/locales/nb-SJ.js", 1481],
      "./nb.js": ["./node_modules/@angular/common/locales/nb.js", 1482],
      "./nd.js": ["./node_modules/@angular/common/locales/nd.js", 1483],
      "./nds-NL.js": ["./node_modules/@angular/common/locales/nds-NL.js", 1484],
      "./nds.js": ["./node_modules/@angular/common/locales/nds.js", 1485],
      "./ne-IN.js": ["./node_modules/@angular/common/locales/ne-IN.js", 1486],
      "./ne.js": ["./node_modules/@angular/common/locales/ne.js", 1487],
      "./nl-AW.js": ["./node_modules/@angular/common/locales/nl-AW.js", 1488],
      "./nl-BE.js": ["./node_modules/@angular/common/locales/nl-BE.js", 1489],
      "./nl-BQ.js": ["./node_modules/@angular/common/locales/nl-BQ.js", 1490],
      "./nl-CW.js": ["./node_modules/@angular/common/locales/nl-CW.js", 1491],
      "./nl-SR.js": ["./node_modules/@angular/common/locales/nl-SR.js", 1492],
      "./nl-SX.js": ["./node_modules/@angular/common/locales/nl-SX.js", 1493],
      "./nl.js": ["./node_modules/@angular/common/locales/nl.js", 1494],
      "./nmg.js": ["./node_modules/@angular/common/locales/nmg.js", 1495],
      "./nn.js": ["./node_modules/@angular/common/locales/nn.js", 1496],
      "./nnh.js": ["./node_modules/@angular/common/locales/nnh.js", 1497],
      "./nus.js": ["./node_modules/@angular/common/locales/nus.js", 1498],
      "./nyn.js": ["./node_modules/@angular/common/locales/nyn.js", 1499],
      "./om-KE.js": ["./node_modules/@angular/common/locales/om-KE.js", 1500],
      "./om.js": ["./node_modules/@angular/common/locales/om.js", 1501],
      "./or.js": ["./node_modules/@angular/common/locales/or.js", 1502],
      "./os-RU.js": ["./node_modules/@angular/common/locales/os-RU.js", 1503],
      "./os.js": ["./node_modules/@angular/common/locales/os.js", 1504],
      "./pa-Arab.js": ["./node_modules/@angular/common/locales/pa-Arab.js", 1505],
      "./pa-Guru.js": ["./node_modules/@angular/common/locales/pa-Guru.js", 1506],
      "./pa.js": ["./node_modules/@angular/common/locales/pa.js", 1507],
      "./pl.js": ["./node_modules/@angular/common/locales/pl.js", 1508],
      "./prg.js": ["./node_modules/@angular/common/locales/prg.js", 1509],
      "./ps-PK.js": ["./node_modules/@angular/common/locales/ps-PK.js", 1510],
      "./ps.js": ["./node_modules/@angular/common/locales/ps.js", 1511],
      "./pt-AO.js": ["./node_modules/@angular/common/locales/pt-AO.js", 1512],
      "./pt-CH.js": ["./node_modules/@angular/common/locales/pt-CH.js", 1513],
      "./pt-CV.js": ["./node_modules/@angular/common/locales/pt-CV.js", 1514],
      "./pt-GQ.js": ["./node_modules/@angular/common/locales/pt-GQ.js", 1515],
      "./pt-GW.js": ["./node_modules/@angular/common/locales/pt-GW.js", 1516],
      "./pt-LU.js": ["./node_modules/@angular/common/locales/pt-LU.js", 1517],
      "./pt-MO.js": ["./node_modules/@angular/common/locales/pt-MO.js", 1518],
      "./pt-MZ.js": ["./node_modules/@angular/common/locales/pt-MZ.js", 1519],
      "./pt-PT.js": ["./node_modules/@angular/common/locales/pt-PT.js", 1520],
      "./pt-ST.js": ["./node_modules/@angular/common/locales/pt-ST.js", 1521],
      "./pt-TL.js": ["./node_modules/@angular/common/locales/pt-TL.js", 1522],
      "./pt.js": ["./node_modules/@angular/common/locales/pt.js", 1523],
      "./qu-BO.js": ["./node_modules/@angular/common/locales/qu-BO.js", 1524],
      "./qu-EC.js": ["./node_modules/@angular/common/locales/qu-EC.js", 1525],
      "./qu.js": ["./node_modules/@angular/common/locales/qu.js", 1526],
      "./rm.js": ["./node_modules/@angular/common/locales/rm.js", 1527],
      "./rn.js": ["./node_modules/@angular/common/locales/rn.js", 1528],
      "./ro-MD.js": ["./node_modules/@angular/common/locales/ro-MD.js", 1529],
      "./ro.js": ["./node_modules/@angular/common/locales/ro.js", 1530],
      "./rof.js": ["./node_modules/@angular/common/locales/rof.js", 1531],
      "./root.js": ["./node_modules/@angular/common/locales/root.js", 1532],
      "./ru-BY.js": ["./node_modules/@angular/common/locales/ru-BY.js", 1533],
      "./ru-KG.js": ["./node_modules/@angular/common/locales/ru-KG.js", 1534],
      "./ru-KZ.js": ["./node_modules/@angular/common/locales/ru-KZ.js", 1535],
      "./ru-MD.js": ["./node_modules/@angular/common/locales/ru-MD.js", 1536],
      "./ru-UA.js": ["./node_modules/@angular/common/locales/ru-UA.js", 1537],
      "./ru.js": ["./node_modules/@angular/common/locales/ru.js", 1538],
      "./rw.js": ["./node_modules/@angular/common/locales/rw.js", 1539],
      "./rwk.js": ["./node_modules/@angular/common/locales/rwk.js", 1540],
      "./sah.js": ["./node_modules/@angular/common/locales/sah.js", 1541],
      "./saq.js": ["./node_modules/@angular/common/locales/saq.js", 1542],
      "./sbp.js": ["./node_modules/@angular/common/locales/sbp.js", 1543],
      "./sd.js": ["./node_modules/@angular/common/locales/sd.js", 1544],
      "./se-FI.js": ["./node_modules/@angular/common/locales/se-FI.js", 1545],
      "./se-SE.js": ["./node_modules/@angular/common/locales/se-SE.js", 1546],
      "./se.js": ["./node_modules/@angular/common/locales/se.js", 1547],
      "./seh.js": ["./node_modules/@angular/common/locales/seh.js", 1548],
      "./ses.js": ["./node_modules/@angular/common/locales/ses.js", 1549],
      "./sg.js": ["./node_modules/@angular/common/locales/sg.js", 1550],
      "./shi-Latn.js": ["./node_modules/@angular/common/locales/shi-Latn.js", 1551],
      "./shi-Tfng.js": ["./node_modules/@angular/common/locales/shi-Tfng.js", 1552],
      "./shi.js": ["./node_modules/@angular/common/locales/shi.js", 1553],
      "./si.js": ["./node_modules/@angular/common/locales/si.js", 1554],
      "./sk.js": ["./node_modules/@angular/common/locales/sk.js", 1555],
      "./sl.js": ["./node_modules/@angular/common/locales/sl.js", 1556],
      "./smn.js": ["./node_modules/@angular/common/locales/smn.js", 1557],
      "./sn.js": ["./node_modules/@angular/common/locales/sn.js", 1558],
      "./so-DJ.js": ["./node_modules/@angular/common/locales/so-DJ.js", 1559],
      "./so-ET.js": ["./node_modules/@angular/common/locales/so-ET.js", 1560],
      "./so-KE.js": ["./node_modules/@angular/common/locales/so-KE.js", 1561],
      "./so.js": ["./node_modules/@angular/common/locales/so.js", 1562],
      "./sq-MK.js": ["./node_modules/@angular/common/locales/sq-MK.js", 1563],
      "./sq-XK.js": ["./node_modules/@angular/common/locales/sq-XK.js", 1564],
      "./sq.js": ["./node_modules/@angular/common/locales/sq.js", 1565],
      "./sr-Cyrl-BA.js": ["./node_modules/@angular/common/locales/sr-Cyrl-BA.js", 1566],
      "./sr-Cyrl-ME.js": ["./node_modules/@angular/common/locales/sr-Cyrl-ME.js", 1567],
      "./sr-Cyrl-XK.js": ["./node_modules/@angular/common/locales/sr-Cyrl-XK.js", 1568],
      "./sr-Cyrl.js": ["./node_modules/@angular/common/locales/sr-Cyrl.js", 1569],
      "./sr-Latn-BA.js": ["./node_modules/@angular/common/locales/sr-Latn-BA.js", 1570],
      "./sr-Latn-ME.js": ["./node_modules/@angular/common/locales/sr-Latn-ME.js", 1571],
      "./sr-Latn-XK.js": ["./node_modules/@angular/common/locales/sr-Latn-XK.js", 1572],
      "./sr-Latn.js": ["./node_modules/@angular/common/locales/sr-Latn.js", 1573],
      "./sr.js": ["./node_modules/@angular/common/locales/sr.js", 1574],
      "./sv-AX.js": ["./node_modules/@angular/common/locales/sv-AX.js", 1575],
      "./sv-FI.js": ["./node_modules/@angular/common/locales/sv-FI.js", 1576],
      "./sv.js": ["./node_modules/@angular/common/locales/sv.js", 1577],
      "./sw-CD.js": ["./node_modules/@angular/common/locales/sw-CD.js", 1578],
      "./sw-KE.js": ["./node_modules/@angular/common/locales/sw-KE.js", 1579],
      "./sw-UG.js": ["./node_modules/@angular/common/locales/sw-UG.js", 1580],
      "./sw.js": ["./node_modules/@angular/common/locales/sw.js", 1581],
      "./ta-LK.js": ["./node_modules/@angular/common/locales/ta-LK.js", 1582],
      "./ta-MY.js": ["./node_modules/@angular/common/locales/ta-MY.js", 1583],
      "./ta-SG.js": ["./node_modules/@angular/common/locales/ta-SG.js", 1584],
      "./ta.js": ["./node_modules/@angular/common/locales/ta.js", 1585],
      "./te.js": ["./node_modules/@angular/common/locales/te.js", 1586],
      "./teo-KE.js": ["./node_modules/@angular/common/locales/teo-KE.js", 1587],
      "./teo.js": ["./node_modules/@angular/common/locales/teo.js", 1588],
      "./tg.js": ["./node_modules/@angular/common/locales/tg.js", 1589],
      "./th.js": ["./node_modules/@angular/common/locales/th.js", 1590],
      "./ti-ER.js": ["./node_modules/@angular/common/locales/ti-ER.js", 1591],
      "./ti.js": ["./node_modules/@angular/common/locales/ti.js", 1592],
      "./tk.js": ["./node_modules/@angular/common/locales/tk.js", 1593],
      "./to.js": ["./node_modules/@angular/common/locales/to.js", 1594],
      "./tr-CY.js": ["./node_modules/@angular/common/locales/tr-CY.js", 1595],
      "./tr.js": ["./node_modules/@angular/common/locales/tr.js", 1596],
      "./tt.js": ["./node_modules/@angular/common/locales/tt.js", 1597],
      "./twq.js": ["./node_modules/@angular/common/locales/twq.js", 1598],
      "./tzm.js": ["./node_modules/@angular/common/locales/tzm.js", 1599],
      "./ug.js": ["./node_modules/@angular/common/locales/ug.js", 1600],
      "./uk.js": ["./node_modules/@angular/common/locales/uk.js", 1601],
      "./ur-IN.js": ["./node_modules/@angular/common/locales/ur-IN.js", 1602],
      "./ur.js": ["./node_modules/@angular/common/locales/ur.js", 1603],
      "./uz-Arab.js": ["./node_modules/@angular/common/locales/uz-Arab.js", 1604],
      "./uz-Cyrl.js": ["./node_modules/@angular/common/locales/uz-Cyrl.js", 1605],
      "./uz-Latn.js": ["./node_modules/@angular/common/locales/uz-Latn.js", 1606],
      "./uz.js": ["./node_modules/@angular/common/locales/uz.js", 1607],
      "./vai-Latn.js": ["./node_modules/@angular/common/locales/vai-Latn.js", 1608],
      "./vai-Vaii.js": ["./node_modules/@angular/common/locales/vai-Vaii.js", 1609],
      "./vai.js": ["./node_modules/@angular/common/locales/vai.js", 1610],
      "./vi.js": ["./node_modules/@angular/common/locales/vi.js", 1611],
      "./vo.js": ["./node_modules/@angular/common/locales/vo.js", 1612],
      "./vun.js": ["./node_modules/@angular/common/locales/vun.js", 1613],
      "./wae.js": ["./node_modules/@angular/common/locales/wae.js", 1614],
      "./wo.js": ["./node_modules/@angular/common/locales/wo.js", 1615],
      "./xh.js": ["./node_modules/@angular/common/locales/xh.js", 1616],
      "./xog.js": ["./node_modules/@angular/common/locales/xog.js", 1617],
      "./yav.js": ["./node_modules/@angular/common/locales/yav.js", 1618],
      "./yi.js": ["./node_modules/@angular/common/locales/yi.js", 1619],
      "./yo-BJ.js": ["./node_modules/@angular/common/locales/yo-BJ.js", 1620],
      "./yo.js": ["./node_modules/@angular/common/locales/yo.js", 1621],
      "./yue-Hans.js": ["./node_modules/@angular/common/locales/yue-Hans.js", 1622],
      "./yue-Hant.js": ["./node_modules/@angular/common/locales/yue-Hant.js", 1623],
      "./yue.js": ["./node_modules/@angular/common/locales/yue.js", 1624],
      "./zgh.js": ["./node_modules/@angular/common/locales/zgh.js", 1625],
      "./zh-Hans-HK.js": ["./node_modules/@angular/common/locales/zh-Hans-HK.js", 1626],
      "./zh-Hans-MO.js": ["./node_modules/@angular/common/locales/zh-Hans-MO.js", 1627],
      "./zh-Hans-SG.js": ["./node_modules/@angular/common/locales/zh-Hans-SG.js", 1628],
      "./zh-Hans.js": ["./node_modules/@angular/common/locales/zh-Hans.js", 1629],
      "./zh-Hant-HK.js": ["./node_modules/@angular/common/locales/zh-Hant-HK.js", 1630],
      "./zh-Hant-MO.js": ["./node_modules/@angular/common/locales/zh-Hant-MO.js", 1631],
      "./zh-Hant.js": ["./node_modules/@angular/common/locales/zh-Hant.js", 1632],
      "./zh.js": ["./node_modules/@angular/common/locales/zh.js", 1633],
      "./zu.js": ["./node_modules/@angular/common/locales/zu.js", 1634]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__.t(id, 7);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app-initializer.ts":
  /*!********************************!*\
    !*** ./src/app-initializer.ts ***!
    \********************************/

  /*! exports provided: AppInitializer */

  /***/
  function srcAppInitializerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitializer", function () {
      return AppInitializer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/session/app-session.service */
    "./src/shared/session/app-session.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var AppInitializer = /*#__PURE__*/function () {
      function AppInitializer(_injector, _platformLocation, _httpClient) {
        _classCallCheck(this, AppInitializer);

        this._injector = _injector;
        this._platformLocation = _platformLocation;
        this._httpClient = _httpClient;
      }

      _createClass(AppInitializer, [{
        key: "init",
        value: function init() {
          var _this = this;

          return function () {
            abp.ui.setBusy();
            return new Promise(function (resolve, reject) {
              _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseHref = _this.getBaseHref();

              var appBaseUrl = _this.getDocumentOrigin() + _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseHref;

              _this.getApplicationConfig(appBaseUrl, function () {
                _this.getUserConfiguration(function () {
                  abp.event.trigger('abp.dynamicScriptsInitialized'); // do not use constructor injection for AppSessionService

                  var appSessionService = _this._injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_6__["AppSessionService"]);

                  appSessionService.init().then(function (result) {
                    abp.ui.clearBusy();

                    if (_this.shouldLoadLocale()) {
                      var angularLocale = _this.convertAbpLocaleToAngularLocale(abp.localization.currentLanguage.name);

                      __webpack_require__("./node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$")("./".concat(angularLocale, ".js")).then(function (module) {
                        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(module["default"]);
                        resolve(result);
                      }, reject);
                    } else {
                      resolve(result);
                    }
                  }, function (err) {
                    abp.ui.clearBusy();
                    reject(err);
                  });
                });
              });
            });
          };
        }
      }, {
        key: "getBaseHref",
        value: function getBaseHref() {
          var baseUrl = this._platformLocation.getBaseHrefFromDOM();

          if (baseUrl) {
            return baseUrl;
          }

          return '/';
        }
      }, {
        key: "getDocumentOrigin",
        value: function getDocumentOrigin() {
          if (!document.location.origin) {
            var port = document.location.port ? ':' + document.location.port : '';
            return document.location.protocol + '//' + document.location.hostname + port;
          }

          return document.location.origin;
        }
      }, {
        key: "shouldLoadLocale",
        value: function shouldLoadLocale() {
          return abp.localization.currentLanguage.name && abp.localization.currentLanguage.name !== 'en-US';
        }
      }, {
        key: "convertAbpLocaleToAngularLocale",
        value: function convertAbpLocaleToAngularLocale(locale) {
          if (!_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings) {
            return locale;
          }

          var localeMapings = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings, {
            from: locale
          });

          if (localeMapings && localeMapings.length) {
            return localeMapings[0]['to'];
          }

          return locale;
        }
      }, {
        key: "getCurrentClockProvider",
        value: function getCurrentClockProvider(currentProviderName) {
          if (currentProviderName === 'unspecifiedClockProvider') {
            return abp.timing.unspecifiedClockProvider;
          }

          if (currentProviderName === 'utcClockProvider') {
            return abp.timing.utcClockProvider;
          }

          return abp.timing.localClockProvider;
        }
      }, {
        key: "getUserConfiguration",
        value: function getUserConfiguration(callback) {
          var _this2 = this;

          var cookieLangValue = abp.utils.getCookieValue('Abp.Localization.CultureName');
          var token = abp.auth.getToken();
          var requestHeaders = {
            'Abp.TenantId': "".concat(abp.multiTenancy.getTenantIdCookie()),
            '.AspNetCore.Culture': "c=".concat(cookieLangValue, "|uic=").concat(cookieLangValue)
          };

          if (token) {
            requestHeaders['Authorization'] = "Bearer ".concat(token);
          }

          this._httpClient.get("".concat(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].remoteServiceBaseUrl, "/AbpUserConfiguration/GetAll"), {
            headers: requestHeaders
          }).subscribe(function (response) {
            var result = response.result;
            lodash__WEBPACK_IMPORTED_MODULE_4__["merge"](abp, result);
            abp.clock.provider = _this2.getCurrentClockProvider(result.clock.provider);
            moment__WEBPACK_IMPORTED_MODULE_3__["locale"](abp.localization.currentLanguage.name);

            if (abp.clock.provider.supportsMultipleTimezone) {
              moment__WEBPACK_IMPORTED_MODULE_3__["tz"].setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
            }

            callback();
          });
        }
      }, {
        key: "getApplicationConfig",
        value: function getApplicationConfig(appRootUrl, callback) {
          this._httpClient.get("".concat(appRootUrl, "assets/").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appConfig), {
            headers: {
              'Abp.TenantId': "".concat(abp.multiTenancy.getTenantIdCookie())
            }
          }).subscribe(function (response) {
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].appBaseUrl = response.appBaseUrl;
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].remoteServiceBaseUrl = response.remoteServiceBaseUrl;
            _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].localeMappings = response.localeMappings;
            callback();
          });
        }
      }]);

      return AppInitializer;
    }();

    AppInitializer.ɵfac = function AppInitializer_Factory(t) {
      return new (t || AppInitializer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppInitializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppInitializer,
      factory: AppInitializer.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitializer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular-cli.json`.


    var environment = {
      production: false,
      hmr: false,
      appConfig: 'appconfig.json'
    };
    /***/
  },

  /***/
  "./src/hmr.ts":
  /*!********************!*\
    !*** ./src/hmr.ts ***!
    \********************/

  /*! exports provided: hmrBootstrap */

  /***/
  function srcHmrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function () {
      return hmrBootstrap;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angularclass/hmr */
    "./node_modules/@angularclass/hmr/dist/index.js");
    /* harmony import */


    var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);

    var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
      var ngModule;
      module.hot.accept();
      bootstrap().then(function (mod) {
        return ngModule = mod;
      });
      module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) {
          return c.location.nativeElement;
        });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
      });
    };
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hmr */
    "./src/hmr.ts");
    /* harmony import */


    var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment/min/locales.min */
    "./node_modules/moment/min/locales.min.js");
    /* harmony import */


    var moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_min_locales_min__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment-timezone */
    "./node_modules/moment-timezone/index.js");
    /* harmony import */


    var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _root_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./root.module */
    "./src/root.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    var bootstrap = function bootstrap() {
      return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_root_module__WEBPACK_IMPORTED_MODULE_5__["RootModule"]);
    };
    /* "Hot Module Replacement" is enabled as described on
     * https://medium.com/@beeman/tutorial-enable-hrm-in-angular-cli-apps-1b0d13b80130#.sa87zkloh
     */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hmr) {
      if (false) {} else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
      }
    } else {
      bootstrap(); // Regular bootstrap
    }
    /***/

  },

  /***/
  "./src/root-routing.module.ts":
  /*!************************************!*\
    !*** ./src/root-routing.module.ts ***!
    \************************************/

  /*! exports provided: RootRoutingModule */

  /***/
  function srcRootRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function () {
      return RootRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/app/home',
      pathMatch: 'full'
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | account-account-module */
        [__webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
        /*! account/account.module */
        "./src/account/account.module.ts")).then(function (m) {
          return m.AccountModule;
        });
      },
      data: {
        preload: true
      }
    }, {
      path: 'app',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | app-app-module */
        [__webpack_require__.e("common"), __webpack_require__.e("app-app-module")]).then(__webpack_require__.bind(null,
        /*! app/app.module */
        "./src/app/app.module.ts")).then(function (m) {
          return m.AppModule;
        });
      },
      data: {
        preload: true
      }
    }];

    var RootRoutingModule = function RootRoutingModule() {
      _classCallCheck(this, RootRoutingModule);
    };

    RootRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RootRoutingModule
    });
    RootRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RootRoutingModule_Factory(t) {
        return new (t || RootRoutingModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/root.component.ts":
  /*!*******************************!*\
    !*** ./src/root.component.ts ***!
    \*******************************/

  /*! exports provided: RootComponent */

  /***/
  function srcRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
      return RootComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RootComponent = function RootComponent() {
      _classCallCheck(this, RootComponent);
    };

    RootComponent.ɵfac = function RootComponent_Factory(t) {
      return new (t || RootComponent)();
    };

    RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RootComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function RootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<router-outlet></router-outlet>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/root.module.ts":
  /*!****************************!*\
    !*** ./src/root.module.ts ***!
    \****************************/

  /*! exports provided: getCurrentLanguage, RootModule */

  /***/
  function srcRootModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function () {
      return getCurrentLanguage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootModule", function () {
      return RootModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/shared/shared.module.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxy.module */
    "./src/shared/service-proxies/service-proxy.module.ts");
    /* harmony import */


    var _root_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./root-routing.module */
    "./src/root-routing.module.ts");
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");
    /* harmony import */


    var _root_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./root.component */
    "./src/root.component.ts");
    /* harmony import */


    var _app_initializer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-initializer */
    "./src/app-initializer.ts");

    function getCurrentLanguage() {
      if (abp.localization.currentLanguage.name) {
        return abp.localization.currentLanguage.name;
      } // todo: Waiting for https://github.com/angular/angular/issues/31465 to be fixed.


      return 'en';
    }

    var RootModule = function RootModule() {
      _classCallCheck(this, RootModule);
    };

    RootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RootModule,
      bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]]
    });
    RootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RootModule_Factory(t) {
        return new (t || RootModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__["AbpHttpInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
        useFactory: function useFactory(appInitializer) {
          return appInitializer.init();
        },
        deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_15__["AppInitializer"]],
        multi: true
      }, {
        provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__["API_BASE_URL"],
        useFactory: function useFactory() {
          return _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__["AppConsts"].remoteServiceBaseUrl;
        }
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
        useFactory: getCurrentLanguage
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"], _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RootModule, {
        declarations: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"], _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_10__["ServiceProxyModule"], _root_routing_module__WEBPACK_IMPORTED_MODULE_11__["RootRoutingModule"]],
          declarations: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_8__["AbpHttpInterceptor"],
            multi: true
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: function useFactory(appInitializer) {
              return appInitializer.init();
            },
            deps: [_app_initializer__WEBPACK_IMPORTED_MODULE_15__["AppInitializer"]],
            multi: true
          }, {
            provide: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_13__["API_BASE_URL"],
            useFactory: function useFactory() {
              return _shared_AppConsts__WEBPACK_IMPORTED_MODULE_12__["AppConsts"].remoteServiceBaseUrl;
            }
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useFactory: getCurrentLanguage
          }],
          bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_14__["RootComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/AppConsts.ts":
  /*!*********************************!*\
    !*** ./src/shared/AppConsts.ts ***!
    \*********************************/

  /*! exports provided: AppConsts */

  /***/
  function srcSharedAppConstsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConsts", function () {
      return AppConsts;
    });

    var AppConsts = function AppConsts() {
      _classCallCheck(this, AppConsts);
    };

    AppConsts.localeMappings = [];
    AppConsts.userManagement = {
      defaultAdminUserName: 'admin'
    };
    AppConsts.localization = {
      defaultLocalizationSourceName: 'ForeSpark'
    };
    AppConsts.authorization = {
      encryptedAuthTokenName: 'enc_auth_token'
    };
    /***/
  },

  /***/
  "./src/shared/app-component-base.ts":
  /*!******************************************!*\
    !*** ./src/shared/app-component-base.ts ***!
    \******************************************/

  /*! exports provided: AppComponentBase */

  /***/
  function srcSharedAppComponentBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentBase", function () {
      return AppComponentBase;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/session/app-session.service */
    "./src/shared/session/app-session.service.ts");

    var AppComponentBase = /*#__PURE__*/function () {
      function AppComponentBase(injector) {
        _classCallCheck(this, AppComponentBase);

        this.localizationSourceName = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].localization.defaultLocalizationSourceName;
        this.requestImageUrl = "".concat(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].remoteServiceBaseUrl, "/api/Request/GetImage/");
        this.localization = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]);
        this.permission = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["PermissionCheckerService"]);
        this.feature = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["FeatureCheckerService"]);
        this.notify = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]);
        this.setting = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["SettingService"]);
        this.message = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["MessageService"]);
        this.multiTenancy = injector.get(abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpMultiTenancyService"]);
        this.appSession = injector.get(_shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_3__["AppSessionService"]);
        this.elementRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
      }

      _createClass(AppComponentBase, [{
        key: "l",
        value: function l(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var localizedText = this.localization.localize(key, this.localizationSourceName);

          if (!localizedText) {
            localizedText = key;
          }

          if (!args || !args.length) {
            return localizedText;
          }

          args.unshift(localizedText);
          return abp.utils.formatString.apply(this, args);
        }
      }, {
        key: "isGranted",
        value: function isGranted(permissionName) {
          return this.permission.isGranted(permissionName);
        }
      }]);

      return AppComponentBase;
    }();
    /***/

  },

  /***/
  "./src/shared/auth/app-auth.service.ts":
  /*!*********************************************!*\
    !*** ./src/shared/auth/app-auth.service.ts ***!
    \*********************************************/

  /*! exports provided: AppAuthService */

  /***/
  function srcSharedAuthAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAuthService", function () {
      return AppAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/helpers/UrlHelper */
    "./src/shared/helpers/UrlHelper.ts");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");

    var AppAuthService = /*#__PURE__*/function () {
      function AppAuthService(_tokenAuthService, _router, _utilsService, _tokenService, _logService) {
        _classCallCheck(this, AppAuthService);

        this._tokenAuthService = _tokenAuthService;
        this._router = _router;
        this._utilsService = _utilsService;
        this._tokenService = _tokenService;
        this._logService = _logService;
        this.clear();
      }

      _createClass(AppAuthService, [{
        key: "logout",
        value: function logout(reload) {
          abp.auth.clearToken();
          abp.utils.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].authorization.encryptedAuthTokenName, undefined, undefined, abp.appPath);

          if (reload !== false) {
            location.href = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl;
          }
        }
      }, {
        key: "authenticate",
        value: function authenticate(finallyCallback) {
          var _this3 = this;

          finallyCallback = finallyCallback || function () {};

          this._tokenAuthService.authenticate(this.authenticateModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            finallyCallback();
          })).subscribe(function (result) {
            _this3.processAuthenticateResult(result);
          });
        }
      }, {
        key: "processAuthenticateResult",
        value: function processAuthenticateResult(authenticateResult) {
          this.authenticateResult = authenticateResult;

          if (authenticateResult.accessToken) {
            // Successfully logged in
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, this.rememberMe);
          } else {
            // Unexpected result!
            this._logService.warn('Unexpected authenticateResult!');

            this._router.navigate(['account/login']);
          }
        }
      }, {
        key: "login",
        value: function login(accessToken, encryptedAccessToken, expireInSeconds, rememberMe) {
          var tokenExpireDate = rememberMe ? new Date(new Date().getTime() + 1000 * expireInSeconds) : undefined;

          this._tokenService.setToken(accessToken, tokenExpireDate);

          this._utilsService.setCookieValue(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].authorization.encryptedAuthTokenName, encryptedAccessToken, tokenExpireDate, abp.appPath);

          var initialUrl = _shared_helpers_UrlHelper__WEBPACK_IMPORTED_MODULE_5__["UrlHelper"].initialUrl;

          if (initialUrl.indexOf('/login') > 0) {
            initialUrl = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_4__["AppConsts"].appBaseUrl;
          }

          location.href = initialUrl;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.authenticateModel = new _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["AuthenticateModel"]();
          this.authenticateModel.rememberClient = false;
          this.authenticateResult = null;
          this.rememberMe = false;
        }
      }]);

      return AppAuthService;
    }();

    AppAuthService.ɵfac = function AppAuthService_Factory(t) {
      return new (t || AppAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TokenAuthServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["LogService"]));
    };

    AppAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppAuthService,
      factory: AppAuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_6__["TokenAuthServiceProxy"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
        }, {
          type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["TokenService"]
        }, {
          type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_3__["LogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/auth/auth-route-guard.ts":
  /*!*********************************************!*\
    !*** ./src/shared/auth/auth-route-guard.ts ***!
    \*********************************************/

  /*! exports provided: AppRouteGuard */

  /***/
  function srcSharedAuthAuthRouteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouteGuard", function () {
      return AppRouteGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../session/app-session.service */
    "./src/shared/session/app-session.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppRouteGuard = /*#__PURE__*/function () {
      function AppRouteGuard(_permissionChecker, _router, _sessionService) {
        _classCallCheck(this, AppRouteGuard);

        this._permissionChecker = _permissionChecker;
        this._router = _router;
        this._sessionService = _sessionService;
      }

      _createClass(AppRouteGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (!this._sessionService.user) {
            this._router.navigate(['/account/login']);

            return false;
          }

          if (!route.data || !route.data['permission']) {
            return true;
          }

          if (this._permissionChecker.isGranted(route.data['permission'])) {
            return true;
          }

          this._router.navigate([this.selectBestRoute()]);

          return false;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(route, state) {
          return this.canActivate(route, state);
        }
      }, {
        key: "selectBestRoute",
        value: function selectBestRoute() {
          if (!this._sessionService.user) {
            return '/account/login';
          }

          if (this._permissionChecker.isGranted('Pages.Users')) {
            return '/app/admin/users';
          }

          return '/app/home';
        }
      }]);

      return AppRouteGuard;
    }();

    AppRouteGuard.ɵfac = function AppRouteGuard_Factory(t) {
      return new (t || AppRouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__["PermissionCheckerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]));
    };

    AppRouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppRouteGuard,
      factory: AppRouteGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouteGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_1__["PermissionCheckerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/components/modal/abp-modal-footer.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/shared/components/modal/abp-modal-footer.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AbpModalFooterComponent */

  /***/
  function srcSharedComponentsModalAbpModalFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbpModalFooterComponent", function () {
      return AbpModalFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");

    var AbpModalFooterComponent = /*#__PURE__*/function (_shared_app_component) {
      _inherits(AbpModalFooterComponent, _shared_app_component);

      var _super = _createSuper(AbpModalFooterComponent);

      function AbpModalFooterComponent(injector) {
        var _this4;

        _classCallCheck(this, AbpModalFooterComponent);

        _this4 = _super.call(this, injector);
        _this4.cancelLabel = _this4.l('Cancel');
        _this4.saveLabel = _this4.l('Save');
        _this4.onCancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this4;
      }

      return AbpModalFooterComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    AbpModalFooterComponent.ɵfac = function AbpModalFooterComponent_Factory(t) {
      return new (t || AbpModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AbpModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbpModalFooterComponent,
      selectors: [["abp-modal-footer"]],
      inputs: {
        cancelLabel: "cancelLabel",
        cancelDisabled: "cancelDisabled",
        saveLabel: "saveLabel",
        saveDisabled: "saveDisabled"
      },
      outputs: {
        onCancelClick: "onCancelClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 4,
      consts: [[1, "modal-footer", "justify-content-between"], ["type", "button", 1, "btn", "btn-default", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function AbpModalFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpModalFooterComponent_Template_button_click_1_listener() {
            return ctx.onCancelClick.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cancelDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cancelLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.saveDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.saveLabel, " ");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpModalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'abp-modal-footer',
          templateUrl: './abp-modal-footer.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, {
        cancelLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cancelDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        saveLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        saveDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onCancelClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/components/modal/abp-modal-header.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/shared/components/modal/abp-modal-header.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AbpModalHeaderComponent */

  /***/
  function srcSharedComponentsModalAbpModalHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbpModalHeaderComponent", function () {
      return AbpModalHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");

    var AbpModalHeaderComponent = /*#__PURE__*/function (_shared_app_component2) {
      _inherits(AbpModalHeaderComponent, _shared_app_component2);

      var _super2 = _createSuper(AbpModalHeaderComponent);

      function AbpModalHeaderComponent(injector) {
        var _this5;

        _classCallCheck(this, AbpModalHeaderComponent);

        _this5 = _super2.call(this, injector);
        _this5.onCloseClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this5;
      }

      return AbpModalHeaderComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    AbpModalHeaderComponent.ɵfac = function AbpModalHeaderComponent_Factory(t) {
      return new (t || AbpModalHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    AbpModalHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbpModalHeaderComponent,
      selectors: [["abp-modal-header"]],
      inputs: {
        title: "title"
      },
      outputs: {
        onCloseClick: "onCloseClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 1,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]],
      template: function AbpModalHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpModalHeaderComponent_Template_button_click_3_listener() {
            return ctx.onCloseClick.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpModalHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'abp-modal-header',
          templateUrl: './abp-modal-header.component.html',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onCloseClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/components/pagination/abp-pagination-controls.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/shared/components/pagination/abp-pagination-controls.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AbpPaginationControlsComponent */

  /***/
  function srcSharedComponentsPaginationAbpPaginationControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbpPaginationControlsComponent", function () {
      return AbpPaginationControlsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_a_1_Template, 2, 0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_1_a_2_Template, 2, 0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var page_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setCurrent(page_r9.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", _r0.getCurrent() === page_r9.value ? "0" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _r0.getCurrent() === page_r9.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r9.label, " ");
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AbpPaginationControlsComponent_ul_3_li_3_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_3_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AbpPaginationControlsComponent_ul_3_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_3_a_1_Template, 2, 0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_3_a_2_Template, 2, 0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
      }
    }

    function AbpPaginationControlsComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpPaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AbpPaginationControlsComponent_ul_3_li_2_Template, 3, 5, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_li_3_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
      }
    }

    var AbpPaginationControlsComponent = /*#__PURE__*/function () {
      function AbpPaginationControlsComponent() {
        _classCallCheck(this, AbpPaginationControlsComponent);

        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
      }

      _createClass(AbpPaginationControlsComponent, [{
        key: "directionLinks",
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = !!value && value !== 'false';
        }
      }, {
        key: "autoHide",
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = !!value && value !== 'false';
        }
      }]);

      return AbpPaginationControlsComponent;
    }();

    AbpPaginationControlsComponent.ɵfac = function AbpPaginationControlsComponent_Factory(t) {
      return new (t || AbpPaginationControlsComponent)();
    };

    AbpPaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbpPaginationControlsComponent,
      selectors: [["abp-pagination-controls"]],
      inputs: {
        id: "id",
        maxSize: "maxSize",
        previousLabel: "previousLabel",
        nextLabel: "nextLabel",
        screenReaderPaginationLabel: "screenReaderPaginationLabel",
        screenReaderPageLabel: "screenReaderPageLabel",
        screenReaderCurrentLabel: "screenReaderCurrentLabel",
        directionLinks: "directionLinks",
        autoHide: "autoHide"
      },
      outputs: {
        pageChange: "pageChange"
      },
      decls: 4,
      vars: 3,
      consts: [[3, "id", "maxSize", "pageChange"], ["p", "paginationApi"], ["class", "pagination m-0", 4, "ngIf"], [1, "pagination", "m-0"], ["class", "page-item", 3, "disabled", 4, "ngIf"], ["class", "page-item", 3, "active", "z-index", 4, "ngFor", "ngForOf"], [1, "page-item"], ["class", "page-link", "href", "javascript:;", 3, "click", 4, "ngIf"], ["class", "page-link", "href", "javascript:;", 4, "ngIf"], ["href", "javascript:;", 1, "page-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["href", "javascript:;", 1, "page-link"], [1, "fas", "fa-chevron-right"]],
      template: function AbpPaginationControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AbpPaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
            return ctx.pageChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AbpPaginationControlsComponent_ul_3_Template, 4, 3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
        }
      },
      directives: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpPaginationControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'abp-pagination-controls',
          templateUrl: './abp-pagination-controls.component.html'
        }]
      }], null, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        screenReaderPaginationLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        screenReaderPageLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        screenReaderCurrentLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/components/validation/abp-validation.summary.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/shared/components/validation/abp-validation.summary.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AbpValidationSummaryComponent */

  /***/
  function srcSharedComponentsValidationAbpValidationSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbpValidationSummaryComponent", function () {
      return AbpValidationSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validationError_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-block", !!ctx_r3.control.errors[validationError_r2.name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getValidationErrorMessage(validationError_r2), " ");
      }
    }

    function AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_span_1_Template, 2, 3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validationError_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1.control.errors[validationError_r2.name]);
      }
    }

    function AbpValidationSummaryComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AbpValidationSummaryComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
      }
    }

    var AbpValidationSummaryComponent = /*#__PURE__*/function (_shared_app_component3) {
      _inherits(AbpValidationSummaryComponent, _shared_app_component3);

      var _super3 = _createSuper(AbpValidationSummaryComponent);

      function AbpValidationSummaryComponent(injector, _renderer) {
        var _this6;

        _classCallCheck(this, AbpValidationSummaryComponent);

        _this6 = _super3.call(this, injector);
        _this6._renderer = _renderer;
        _this6.defaultValidationErrors = [{
          name: 'required',
          localizationKey: 'ThisFieldIsRequired'
        }, {
          name: 'minlength',
          localizationKey: 'PleaseEnterAtLeastNCharacter',
          propertyKey: 'requiredLength'
        }, {
          name: 'maxlength',
          localizationKey: 'PleaseEnterNoMoreThanNCharacter',
          propertyKey: 'requiredLength'
        }, {
          name: 'email',
          localizationKey: 'InvalidEmailAddress'
        }, {
          name: 'pattern',
          localizationKey: 'InvalidPattern',
          propertyKey: 'requiredPattern'
        }, {
          name: 'validateEqual',
          localizationKey: 'PairsDoNotMatch'
        }];
        _this6.validationErrors = _this6.defaultValidationErrors;
        return _this6;
      }

      _createClass(AbpValidationSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (this.controlEl) {
            this.control.valueChanges.subscribe(function () {
              if (_this7.control.valid && (_this7.control.dirty || _this7.control.touched)) {
                _this7._renderer.removeClass(_this7.controlEl, 'is-invalid');
              }
            });
          }
        }
      }, {
        key: "getValidationErrorMessage",
        value: function getValidationErrorMessage(error) {
          if (this.controlEl) {
            this._renderer.addClass(this.controlEl, 'is-invalid');
          }

          var propertyValue = this.control.errors[error.name][error.propertyKey];
          return !!propertyValue ? this.l(error.localizationKey, propertyValue) : this.l(error.localizationKey);
        }
      }, {
        key: "customValidationErrors",
        set: function set(val) {
          if (val && val.length > 0) {
            var defaults = this.defaultValidationErrors.filter(function (defaultValidationError) {
              return !val.find(function (customValidationError) {
                return customValidationError.name === defaultValidationError.name;
              });
            });
            this.validationErrors = [].concat(_toConsumableArray(defaults), _toConsumableArray(val));
          }
        }
      }]);

      return AbpValidationSummaryComponent;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]);

    AbpValidationSummaryComponent.ɵfac = function AbpValidationSummaryComponent_Factory(t) {
      return new (t || AbpValidationSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AbpValidationSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbpValidationSummaryComponent,
      selectors: [["abp-validation-summary"]],
      inputs: {
        control: "control",
        controlEl: "controlEl",
        customValidationErrors: "customValidationErrors"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "error invalid-feedback", 3, "d-block", 4, "ngIf"], [1, "error", "invalid-feedback"]],
      template: function AbpValidationSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AbpValidationSummaryComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.invalid && (ctx.control.dirty || ctx.control.touched));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbpValidationSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'abp-validation-summary',
          templateUrl: './abp-validation.summary.component.html'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        control: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        controlEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customValidationErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/directives/busy.directive.ts":
  /*!*************************************************!*\
    !*** ./src/shared/directives/busy.directive.ts ***!
    \*************************************************/

  /*! exports provided: BusyDirective */

  /***/
  function srcSharedDirectivesBusyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusyDirective", function () {
      return BusyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BusyDirective = /*#__PURE__*/function () {
      function BusyDirective(_element) {
        _classCallCheck(this, BusyDirective);

        this._element = _element;
      }

      _createClass(BusyDirective, [{
        key: "refreshState",
        value: function refreshState(isBusy) {
          if (isBusy === undefined) {
            return;
          }

          if (isBusy) {
            abp.ui.setBusy(this._element.nativeElement);
          } else {
            abp.ui.clearBusy(this._element.nativeElement);
          }
        }
      }, {
        key: "busy",
        set: function set(isBusy) {
          this.refreshState(isBusy);
        }
      }]);

      return BusyDirective;
    }();

    BusyDirective.ɵfac = function BusyDirective_Factory(t) {
      return new (t || BusyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    BusyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BusyDirective,
      selectors: [["", "busy", ""]],
      inputs: {
        busy: "busy"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[busy]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        busy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/directives/equal-validator.directive.ts":
  /*!************************************************************!*\
    !*** ./src/shared/directives/equal-validator.directive.ts ***!
    \************************************************************/

  /*! exports provided: EqualValidator */

  /***/
  function srcSharedDirectivesEqualValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EqualValidator", function () {
      return EqualValidator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EqualValidator = /*#__PURE__*/function () {
      function EqualValidator(validateEqual, reverse) {
        _classCallCheck(this, EqualValidator);

        this.validateEqual = validateEqual;
        this.reverse = reverse;
      }

      _createClass(EqualValidator, [{
        key: "validate",
        value: function validate(control) {
          // self value
          var value = control.value; // second control

          var control2 = control.root.get(this.validateEqual); // value not equal

          if (control2 && value !== control2.value && !this.isReverse) {
            return {
              validateEqual: true
            };
          } // value equal and reverse


          if (control2 && value === control2.value && this.isReverse) {
            delete control2.errors['validateEqual'];

            if (!Object.keys(control2.errors).length) {
              control2.setErrors(null);
            }
          } // value not equal and reverse


          if (control2 && value !== control2.value && this.isReverse) {
            control2.setErrors({
              validateEqual: true
            });
          }

          return null;
        }
      }, {
        key: "isReverse",
        get: function get() {
          if (!this.reverse) {
            return false;
          }

          return this.reverse === 'true' ? true : false;
        }
      }]);

      return EqualValidator;
    }();

    EqualValidator.ɵfac = function EqualValidator_Factory(t) {
      return new (t || EqualValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('validateEqual'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('reverse'));
    };

    EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: EqualValidator,
      selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EqualValidator;
        }),
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: // tslint:disable-next-line:directive-selector
          '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return EqualValidator;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['validateEqual']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['reverse']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/helpers/UrlHelper.ts":
  /*!*****************************************!*\
    !*** ./src/shared/helpers/UrlHelper.ts ***!
    \*****************************************/

  /*! exports provided: UrlHelper */

  /***/
  function srcSharedHelpersUrlHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlHelper", function () {
      return UrlHelper;
    });

    var UrlHelper = /*#__PURE__*/function () {
      function UrlHelper() {
        _classCallCheck(this, UrlHelper);
      }

      _createClass(UrlHelper, null, [{
        key: "getQueryParameters",
        value: function getQueryParameters() {
          return document.location.search.replace(/(^\?)/, '').split('&').map(function (n) {
            return n = n.split('='), this[n[0]] = n[1], this;
          }.bind({}))[0];
        }
      }]);

      return UrlHelper;
    }();
    /**
     * The URL requested, before initial routing.
     */


    UrlHelper.initialUrl = location.href;
    /***/
  },

  /***/
  "./src/shared/layout/layout-store.service.ts":
  /*!***************************************************!*\
    !*** ./src/shared/layout/layout-store.service.ts ***!
    \***************************************************/

  /*! exports provided: LayoutStoreService */

  /***/
  function srcSharedLayoutLayoutStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutStoreService", function () {
      return LayoutStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LayoutStoreService = /*#__PURE__*/function () {
      function LayoutStoreService() {
        _classCallCheck(this, LayoutStoreService);

        this.initialLayoutConfig = {
          sidebarExpanded: false
        };
        this.configSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.initialLayoutConfig);
        this.config$ = this.configSource.asObservable();
      }

      _createClass(LayoutStoreService, [{
        key: "setSidebarExpanded",
        value: function setSidebarExpanded(value) {
          this.configSource.next(Object.assign(this.configSource.value, {
            sidebarExpanded: value
          }));
        }
      }, {
        key: "sidebarExpanded",
        get: function get() {
          return this.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('sidebarExpanded'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        }
      }]);

      return LayoutStoreService;
    }();

    LayoutStoreService.ɵfac = function LayoutStoreService_Factory(t) {
      return new (t || LayoutStoreService)();
    };

    LayoutStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutStoreService,
      factory: LayoutStoreService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/nav/app-url.service.ts":
  /*!*******************************************!*\
    !*** ./src/shared/nav/app-url.service.ts ***!
    \*******************************************/

  /*! exports provided: AppUrlService */

  /***/
  function srcSharedNavAppUrlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppUrlService", function () {
      return AppUrlService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/AppConsts */
    "./src/shared/AppConsts.ts");
    /* harmony import */


    var _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../session/app-session.service */
    "./src/shared/session/app-session.service.ts");

    var AppUrlService = /*#__PURE__*/function () {
      function AppUrlService(_appSessionService) {
        _classCallCheck(this, AppUrlService);

        this._appSessionService = _appSessionService;
      }

      _createClass(AppUrlService, [{
        key: "getAppRootUrlOfTenant",

        /**
         * Returning url ends with '/'.
         */
        value: function getAppRootUrlOfTenant(tenancyName) {
          var baseUrl = this.ensureEndsWith(_shared_AppConsts__WEBPACK_IMPORTED_MODULE_1__["AppConsts"].appBaseUrl, '/');

          if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder) < 0) {
            return baseUrl;
          }

          if (baseUrl.indexOf(AppUrlService.tenancyNamePlaceHolder + '.') >= 0) {
            baseUrl = baseUrl.replace(AppUrlService.tenancyNamePlaceHolder + '.', AppUrlService.tenancyNamePlaceHolder);

            if (tenancyName) {
              tenancyName = tenancyName + '.';
            }
          }

          if (!tenancyName) {
            return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, '');
          }

          return baseUrl.replace(AppUrlService.tenancyNamePlaceHolder, tenancyName);
        }
      }, {
        key: "ensureEndsWith",
        value: function ensureEndsWith(str, c) {
          if (str.charAt(str.length - 1) !== c) {
            str = str + c;
          }

          return str;
        }
      }, {
        key: "removeFromEnd",
        value: function removeFromEnd(str, c) {
          if (str.charAt(str.length - 1) === c) {
            str = str.substr(0, str.length - 1);
          }

          return str;
        }
      }, {
        key: "appRootUrl",
        get: function get() {
          if (this._appSessionService.tenant) {
            return this.getAppRootUrlOfTenant(this._appSessionService.tenant.tenancyName);
          } else {
            return this.getAppRootUrlOfTenant(null);
          }
        }
      }]);

      return AppUrlService;
    }();

    AppUrlService.tenancyNamePlaceHolder = '{TENANCY_NAME}';

    AppUrlService.ɵfac = function AppUrlService_Factory(t) {
      return new (t || AppUrlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]));
    };

    AppUrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppUrlService,
      factory: AppUrlService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUrlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _session_app_session_service__WEBPACK_IMPORTED_MODULE_2__["AppSessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/pipes/localize.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/shared/pipes/localize.pipe.ts ***!
    \*******************************************/

  /*! exports provided: LocalizePipe */

  /***/
  function srcSharedPipesLocalizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizePipe", function () {
      return LocalizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @shared/app-component-base */
    "./src/shared/app-component-base.ts");

    var LocalizePipe = /*#__PURE__*/function (_shared_app_component4) {
      _inherits(LocalizePipe, _shared_app_component4);

      var _super4 = _createSuper(LocalizePipe);

      function LocalizePipe(injector) {
        _classCallCheck(this, LocalizePipe);

        return _super4.call(this, injector);
      }

      _createClass(LocalizePipe, [{
        key: "transform",
        value: function transform(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return this.l(key, args);
        }
      }]);

      return LocalizePipe;
    }(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"]);

    LocalizePipe.ɵfac = function LocalizePipe_Factory(t) {
      return new (t || LocalizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    LocalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "localize",
      type: LocalizePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'localize'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/service-proxies/service-proxies.ts":
  /*!*******************************************************!*\
    !*** ./src/shared/service-proxies/service-proxies.ts ***!
    \*******************************************************/

  /*! exports provided: API_BASE_URL, AccountServiceProxy, ConfigurationServiceProxy, HomeServiceProxy, InstallationsServiceProxy, RequestServiceProxy, RoleServiceProxy, SessionServiceProxy, TenantServiceProxy, TokenAuthServiceProxy, UserServiceProxy, IsTenantAvailableInput, TenantAvailabilityState, IsTenantAvailableOutput, RegisterInput, RegisterOutput, ChangeUiThemeInput, RequestsHomeDto, InstallationsHomeDto, CitiesDto, RequestsInsightHome, HomeDto, CreateInstallationsDto, InstallationsDto, CitiesDtoListResultDto, InstallationsDtoPagedResultDto, InstallationsDtoListResultDto, RequestStatusDto, RequestDto, RequestDtoPagedResultDto, CreateRequestDto, RequestDetailsDto, CreateRoleDto, RoleDto, RoleListDto, RoleListDtoListResultDto, PermissionDto, PermissionDtoListResultDto, RoleEditDto, FlatPermissionDto, GetRoleForEditOutput, RoleDtoPagedResultDto, ApplicationInfoDto, UserLoginInfoDto, TenantLoginInfoDto, GetCurrentLoginInformationsOutput, CreateTenantDto, TenantDto, TenantDtoPagedResultDto, AuthenticateModel, AuthenticateResultModel, ExternalLoginProviderInfoModel, ExternalAuthenticateModel, ExternalAuthenticateResultModel, CreateUserDto, UserDto, RoleDtoListResultDto, ChangeUserLanguageDto, ChangePasswordDto, ResetPasswordDto, UserDtoPagedResultDto, ApiException */

  /***/
  function srcSharedServiceProxiesServiceProxiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () {
      return API_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountServiceProxy", function () {
      return AccountServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationServiceProxy", function () {
      return ConfigurationServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeServiceProxy", function () {
      return HomeServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsServiceProxy", function () {
      return InstallationsServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestServiceProxy", function () {
      return RequestServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleServiceProxy", function () {
      return RoleServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionServiceProxy", function () {
      return SessionServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantServiceProxy", function () {
      return TenantServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenAuthServiceProxy", function () {
      return TokenAuthServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserServiceProxy", function () {
      return UserServiceProxy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsTenantAvailableInput", function () {
      return IsTenantAvailableInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantAvailabilityState", function () {
      return TenantAvailabilityState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsTenantAvailableOutput", function () {
      return IsTenantAvailableOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterInput", function () {
      return RegisterInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterOutput", function () {
      return RegisterOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeUiThemeInput", function () {
      return ChangeUiThemeInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsHomeDto", function () {
      return RequestsHomeDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsHomeDto", function () {
      return InstallationsHomeDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesDto", function () {
      return CitiesDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsInsightHome", function () {
      return RequestsInsightHome;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDto", function () {
      return HomeDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateInstallationsDto", function () {
      return CreateInstallationsDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsDto", function () {
      return InstallationsDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesDtoListResultDto", function () {
      return CitiesDtoListResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsDtoPagedResultDto", function () {
      return InstallationsDtoPagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstallationsDtoListResultDto", function () {
      return InstallationsDtoListResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestStatusDto", function () {
      return RequestStatusDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDto", function () {
      return RequestDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDtoPagedResultDto", function () {
      return RequestDtoPagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRequestDto", function () {
      return CreateRequestDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsDto", function () {
      return RequestDetailsDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRoleDto", function () {
      return CreateRoleDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleDto", function () {
      return RoleDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListDto", function () {
      return RoleListDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListDtoListResultDto", function () {
      return RoleListDtoListResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionDto", function () {
      return PermissionDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionDtoListResultDto", function () {
      return PermissionDtoListResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleEditDto", function () {
      return RoleEditDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlatPermissionDto", function () {
      return FlatPermissionDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetRoleForEditOutput", function () {
      return GetRoleForEditOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleDtoPagedResultDto", function () {
      return RoleDtoPagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationInfoDto", function () {
      return ApplicationInfoDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginInfoDto", function () {
      return UserLoginInfoDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantLoginInfoDto", function () {
      return TenantLoginInfoDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCurrentLoginInformationsOutput", function () {
      return GetCurrentLoginInformationsOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTenantDto", function () {
      return CreateTenantDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantDto", function () {
      return TenantDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantDtoPagedResultDto", function () {
      return TenantDtoPagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function () {
      return AuthenticateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateResultModel", function () {
      return AuthenticateResultModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalLoginProviderInfoModel", function () {
      return ExternalLoginProviderInfoModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateModel", function () {
      return ExternalAuthenticateModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalAuthenticateResultModel", function () {
      return ExternalAuthenticateResultModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserDto", function () {
      return CreateUserDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDto", function () {
      return UserDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleDtoListResultDto", function () {
      return RoleDtoListResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeUserLanguageDto", function () {
      return ChangeUserLanguageDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordDto", function () {
      return ChangePasswordDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordDto", function () {
      return ResetPasswordDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDtoPagedResultDto", function () {
      return UserDtoPagedResultDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiException", function () {
      return ApiException;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* tslint:disable */

    /* eslint-disable */
    //----------------------
    // <auto-generated>
    //     Generated using the NSwag toolchain v13.9.3.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
    // </auto-generated>
    //----------------------
    // ReSharper disable InconsistentNaming


    var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');

    var AccountServiceProxy = /*#__PURE__*/function () {
      function AccountServiceProxy(http, baseUrl) {
        _classCallCheck(this, AccountServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(AccountServiceProxy, [{
        key: "isTenantAvailable",
        value: function isTenantAvailable(body) {
          var _this8 = this;

          var url_ = this.baseUrl + "/api/services/app/Account/IsTenantAvailable";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this8.processIsTenantAvailable(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this8.processIsTenantAvailable(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processIsTenantAvailable",
        value: function processIsTenantAvailable(response) {
          var _this9 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator = _createForOfIteratorHelper(response.headers.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);
              result200 = IsTenantAvailableOutput.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "register",
        value: function register(body) {
          var _this10 = this;

          var url_ = this.baseUrl + "/api/services/app/Account/Register";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this10.processRegister(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this10.processRegister(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processRegister",
        value: function processRegister(response) {
          var _this11 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator2 = _createForOfIteratorHelper(response.headers.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var key = _step2.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);
              result200 = RegisterOutput.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return AccountServiceProxy;
    }();

    AccountServiceProxy.ɵfac = function AccountServiceProxy_Factory(t) {
      return new (t || AccountServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    AccountServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AccountServiceProxy,
      factory: AccountServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccountServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ConfigurationServiceProxy = /*#__PURE__*/function () {
      function ConfigurationServiceProxy(http, baseUrl) {
        _classCallCheck(this, ConfigurationServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(ConfigurationServiceProxy, [{
        key: "changeUiTheme",
        value: function changeUiTheme(body) {
          var _this12 = this;

          var url_ = this.baseUrl + "/api/services/app/Configuration/ChangeUiTheme";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this12.processChangeUiTheme(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this12.processChangeUiTheme(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processChangeUiTheme",
        value: function processChangeUiTheme(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator3 = _createForOfIteratorHelper(response.headers.keys()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var key = _step3.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ConfigurationServiceProxy;
    }();

    ConfigurationServiceProxy.ɵfac = function ConfigurationServiceProxy_Factory(t) {
      return new (t || ConfigurationServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ConfigurationServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ConfigurationServiceProxy,
      factory: ConfigurationServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfigurationServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var HomeServiceProxy = /*#__PURE__*/function () {
      function HomeServiceProxy(http, baseUrl) {
        _classCallCheck(this, HomeServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @return Success
       */


      _createClass(HomeServiceProxy, [{
        key: "getHomeMetaData",
        value: function getHomeMetaData() {
          var _this13 = this;

          var url_ = this.baseUrl + "/api/services/app/Home/GetHomeMetaData";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this13.processGetHomeMetaData(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this13.processGetHomeMetaData(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetHomeMetaData",
        value: function processGetHomeMetaData(response) {
          var _this14 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator4 = _createForOfIteratorHelper(response.headers.keys()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var key = _step4.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result200 = HomeDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return HomeServiceProxy;
    }();

    HomeServiceProxy.ɵfac = function HomeServiceProxy_Factory(t) {
      return new (t || HomeServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    HomeServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HomeServiceProxy,
      factory: HomeServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var InstallationsServiceProxy = /*#__PURE__*/function () {
      function InstallationsServiceProxy(http, baseUrl) {
        _classCallCheck(this, InstallationsServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(InstallationsServiceProxy, [{
        key: "create",
        value: function create(body) {
          var _this15 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/Create";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this15.processCreate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this15.processCreate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreate",
        value: function processCreate(response) {
          var _this16 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator5 = _createForOfIteratorHelper(response.headers.keys()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var key = _step5.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result200 = InstallationsDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getAllCities",
        value: function getAllCities() {
          var _this17 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetAllCities";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this17.processGetAllCities(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this17.processGetAllCities(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAllCities",
        value: function processGetAllCities(response) {
          var _this18 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator6 = _createForOfIteratorHelper(response.headers.keys()),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var key = _step6.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result200 = CitiesDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param cityId (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getPagedInstallations",
        value: function getPagedInstallations(keyword, cityId, skipCount, maxResultCount) {
          var _this19 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetPagedInstallations?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (cityId !== undefined && cityId !== null) url_ += "CityId=" + encodeURIComponent("" + cityId) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this19.processGetPagedInstallations(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this19.processGetPagedInstallations(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetPagedInstallations",
        value: function processGetPagedInstallations(response) {
          var _this20 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator7 = _createForOfIteratorHelper(response.headers.keys()),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var key = _step7.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);
              result200 = InstallationsDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getAllInstallations",
        value: function getAllInstallations() {
          var _this21 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetAllInstallations";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this21.processGetAllInstallations(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this21.processGetAllInstallations(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAllInstallations",
        value: function processGetAllInstallations(response) {
          var _this22 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator8 = _createForOfIteratorHelper(response.headers.keys()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var key = _step8.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result200 = InstallationsDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getActiveInstallations",
        value: function getActiveInstallations() {
          var _this23 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetActiveInstallations";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this23.processGetActiveInstallations(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this23.processGetActiveInstallations(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetActiveInstallations",
        value: function processGetActiveInstallations(response) {
          var _this24 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator9 = _createForOfIteratorHelper(response.headers.keys()),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var key = _step9.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              result200 = InstallationsDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getInactiveInstallations",
        value: function getInactiveInstallations() {
          var _this25 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetInactiveInstallations";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this25.processGetInactiveInstallations(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this25.processGetInactiveInstallations(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetInactiveInstallations",
        value: function processGetInactiveInstallations(response) {
          var _this26 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator10 = _createForOfIteratorHelper(response.headers.keys()),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var key = _step10.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result200 = InstallationsDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param cityId (optional)
         * @return Success
         */

      }, {
        key: "getInstallationsForCity",
        value: function getInstallationsForCity(cityId) {
          var _this27 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetInstallationsForCity?";
          if (cityId === null) throw new Error("The parameter 'cityId' cannot be null.");else if (cityId !== undefined) url_ += "cityId=" + encodeURIComponent("" + cityId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this27.processGetInstallationsForCity(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this27.processGetInstallationsForCity(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetInstallationsForCity",
        value: function processGetInstallationsForCity(response) {
          var _this28 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator11 = _createForOfIteratorHelper(response.headers.keys()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var key = _step11.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this28.jsonParseReviver);
              result200 = InstallationsDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "get",
        value: function get(id) {
          var _this29 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/Get?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this29.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this29.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this30 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator12 = _createForOfIteratorHelper(response.headers.keys()),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var key = _step12.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this30.jsonParseReviver);
              result200 = InstallationsDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param cityId (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getAll",
        value: function getAll(keyword, cityId, skipCount, maxResultCount) {
          var _this31 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/GetAll?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (cityId !== undefined && cityId !== null) url_ += "CityId=" + encodeURIComponent("" + cityId) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this31.processGetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this31.processGetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAll",
        value: function processGetAll(response) {
          var _this32 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator13 = _createForOfIteratorHelper(response.headers.keys()),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var key = _step13.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);
              result200 = InstallationsDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "update",
        value: function update(body) {
          var _this33 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/Update";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this33.processUpdate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this33.processUpdate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUpdate",
        value: function processUpdate(response) {
          var _this34 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator14 = _createForOfIteratorHelper(response.headers.keys()),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var key = _step14.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this34.jsonParseReviver);
              result200 = InstallationsDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this35 = this;

          var url_ = this.baseUrl + "/api/services/app/Installations/Delete?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this35.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this35.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator15 = _createForOfIteratorHelper(response.headers.keys()),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var key = _step15.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return InstallationsServiceProxy;
    }();

    InstallationsServiceProxy.ɵfac = function InstallationsServiceProxy_Factory(t) {
      return new (t || InstallationsServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    InstallationsServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: InstallationsServiceProxy,
      factory: InstallationsServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InstallationsServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var RequestServiceProxy = /*#__PURE__*/function () {
      function RequestServiceProxy(http, baseUrl) {
        _classCallCheck(this, RequestServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @return Success
       */


      _createClass(RequestServiceProxy, [{
        key: "createNewRequest",
        value: function createNewRequest(formDate) {
          var _this36 = this;

          var url_ = this.baseUrl + "/api/Request/CreateNewRequest";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.post(url_, formDate, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this36.processCreateNewRequest(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this36.processCreateNewRequest(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreateNewRequest",
        value: function processCreateNewRequest(response) {
          var _this37 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator16 = _createForOfIteratorHelper(response.headers.keys()),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var key = _step16.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this37.jsonParseReviver);
              result200 = RequestDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getImage",
        value: function getImage(requestId, requestImageName) {
          var _this38 = this;

          var url_ = this.baseUrl + "/api/Request/GetImage/{requestId}/{requestImageName}";
          if (requestId === undefined || requestId === null) throw new Error("The parameter 'requestId' must be defined.");
          url_ = url_.replace("{requestId}", encodeURIComponent("" + requestId));
          if (requestImageName === undefined || requestImageName === null) throw new Error("The parameter 'requestImageName' must be defined.");
          url_ = url_.replace("{requestImageName}", encodeURIComponent("" + requestImageName));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this38.processGetImage(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this38.processGetImage(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetImage",
        value: function processGetImage(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator17 = _createForOfIteratorHelper(response.headers.keys()),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var key = _step17.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param status (optional)
         * @param cityId (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getAll",
        value: function getAll(keyword, status, cityId, skipCount, maxResultCount) {
          var _this39 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/GetAll?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (status !== undefined && status !== null) url_ += "Status=" + encodeURIComponent("" + status) + "&";
          if (cityId !== undefined && cityId !== null) url_ += "CityId=" + encodeURIComponent("" + cityId) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this39.processGetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this39.processGetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAll",
        value: function processGetAll(response) {
          var _this40 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator18 = _createForOfIteratorHelper(response.headers.keys()),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var key = _step18.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this40.jsonParseReviver);
              result200 = RequestDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "create",
        value: function create(body) {
          var _this41 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/Create";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this41.processCreate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this41.processCreate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreate",
        value: function processCreate(response) {
          var _this42 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator19 = _createForOfIteratorHelper(response.headers.keys()),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var key = _step19.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this42.jsonParseReviver);
              result200 = RequestDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "getRequestDetails",
        value: function getRequestDetails(id) {
          var _this43 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/GetRequestDetails?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this43.processGetRequestDetails(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this43.processGetRequestDetails(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetRequestDetails",
        value: function processGetRequestDetails(response) {
          var _this44 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator20 = _createForOfIteratorHelper(response.headers.keys()),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var key = _step20.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this44.jsonParseReviver);
              result200 = RequestDetailsDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param requestId (optional)
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "addRequestImagesForRequest",
        value: function addRequestImagesForRequest(requestId, body) {
          var _this45 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/AddRequestImagesForRequest?";
          if (requestId === null) throw new Error("The parameter 'requestId' cannot be null.");else if (requestId !== undefined) url_ += "requestId=" + encodeURIComponent("" + requestId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this45.processAddRequestImagesForRequest(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this45.processAddRequestImagesForRequest(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processAddRequestImagesForRequest",
        value: function processAddRequestImagesForRequest(response) {
          var _this46 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator21 = _createForOfIteratorHelper(response.headers.keys()),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var key = _step21.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this46.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param requestId (optional)
         * @return Success
         */

      }, {
        key: "approveRequest",
        value: function approveRequest(requestId) {
          var _this47 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/ApproveRequest?";
          if (requestId === null) throw new Error("The parameter 'requestId' cannot be null.");else if (requestId !== undefined) url_ += "requestId=" + encodeURIComponent("" + requestId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this47.processApproveRequest(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this47.processApproveRequest(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processApproveRequest",
        value: function processApproveRequest(response) {
          var _this48 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator22 = _createForOfIteratorHelper(response.headers.keys()),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var key = _step22.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this48.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param requestId (optional)
         * @return Success
         */

      }, {
        key: "declineRequest",
        value: function declineRequest(requestId) {
          var _this49 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/DeclineRequest?";
          if (requestId === null) throw new Error("The parameter 'requestId' cannot be null.");else if (requestId !== undefined) url_ += "requestId=" + encodeURIComponent("" + requestId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this49.processDeclineRequest(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this49.processDeclineRequest(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDeclineRequest",
        value: function processDeclineRequest(response) {
          var _this50 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator23 = _createForOfIteratorHelper(response.headers.keys()),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var key = _step23.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this50.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "get",
        value: function get(id) {
          var _this51 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/Get?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this51.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this51.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this52 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator24 = _createForOfIteratorHelper(response.headers.keys()),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var key = _step24.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this52.jsonParseReviver);
              result200 = RequestDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "update",
        value: function update(body) {
          var _this53 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/Update";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this53.processUpdate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this53.processUpdate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUpdate",
        value: function processUpdate(response) {
          var _this54 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator25 = _createForOfIteratorHelper(response.headers.keys()),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var key = _step25.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this54.jsonParseReviver);
              result200 = RequestDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this55 = this;

          var url_ = this.baseUrl + "/api/services/app/Request/Delete?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this55.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this55.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator26 = _createForOfIteratorHelper(response.headers.keys()),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var key = _step26.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return RequestServiceProxy;
    }();

    RequestServiceProxy.ɵfac = function RequestServiceProxy_Factory(t) {
      return new (t || RequestServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    RequestServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RequestServiceProxy,
      factory: RequestServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RequestServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var RoleServiceProxy = /*#__PURE__*/function () {
      function RoleServiceProxy(http, baseUrl) {
        _classCallCheck(this, RoleServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(RoleServiceProxy, [{
        key: "create",
        value: function create(body) {
          var _this56 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/Create";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this56.processCreate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this56.processCreate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreate",
        value: function processCreate(response) {
          var _this57 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator27 = _createForOfIteratorHelper(response.headers.keys()),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var key = _step27.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this57.jsonParseReviver);
              result200 = RoleDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param permission (optional)
         * @return Success
         */

      }, {
        key: "getRoles",
        value: function getRoles(permission) {
          var _this58 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/GetRoles?";
          if (permission !== undefined && permission !== null) url_ += "Permission=" + encodeURIComponent("" + permission) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this58.processGetRoles(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this58.processGetRoles(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetRoles",
        value: function processGetRoles(response) {
          var _this59 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator28 = _createForOfIteratorHelper(response.headers.keys()),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var key = _step28.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this59.jsonParseReviver);
              result200 = RoleListDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "update",
        value: function update(body) {
          var _this60 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/Update";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this60.processUpdate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this60.processUpdate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUpdate",
        value: function processUpdate(response) {
          var _this61 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator29 = _createForOfIteratorHelper(response.headers.keys()),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var key = _step29.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this61.jsonParseReviver);
              result200 = RoleDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this62 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/Delete?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this62.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this62.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator30 = _createForOfIteratorHelper(response.headers.keys()),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var key = _step30.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getAllPermissions",
        value: function getAllPermissions() {
          var _this63 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/GetAllPermissions";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this63.processGetAllPermissions(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this63.processGetAllPermissions(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAllPermissions",
        value: function processGetAllPermissions(response) {
          var _this64 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator31 = _createForOfIteratorHelper(response.headers.keys()),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var key = _step31.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this64.jsonParseReviver);
              result200 = PermissionDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "getRoleForEdit",
        value: function getRoleForEdit(id) {
          var _this65 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/GetRoleForEdit?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this65.processGetRoleForEdit(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this65.processGetRoleForEdit(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetRoleForEdit",
        value: function processGetRoleForEdit(response) {
          var _this66 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator32 = _createForOfIteratorHelper(response.headers.keys()),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var key = _step32.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this66.jsonParseReviver);
              result200 = GetRoleForEditOutput.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "get",
        value: function get(id) {
          var _this67 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/Get?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this67.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this67.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this68 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator33 = _createForOfIteratorHelper(response.headers.keys()),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var key = _step33.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this68.jsonParseReviver);
              result200 = RoleDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getAll",
        value: function getAll(keyword, skipCount, maxResultCount) {
          var _this69 = this;

          var url_ = this.baseUrl + "/api/services/app/Role/GetAll?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this69.processGetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this69.processGetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAll",
        value: function processGetAll(response) {
          var _this70 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator34 = _createForOfIteratorHelper(response.headers.keys()),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var key = _step34.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this70.jsonParseReviver);
              result200 = RoleDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return RoleServiceProxy;
    }();

    RoleServiceProxy.ɵfac = function RoleServiceProxy_Factory(t) {
      return new (t || RoleServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    RoleServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RoleServiceProxy,
      factory: RoleServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RoleServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var SessionServiceProxy = /*#__PURE__*/function () {
      function SessionServiceProxy(http, baseUrl) {
        _classCallCheck(this, SessionServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @return Success
       */


      _createClass(SessionServiceProxy, [{
        key: "getCurrentLoginInformations",
        value: function getCurrentLoginInformations() {
          var _this71 = this;

          var url_ = this.baseUrl + "/api/services/app/Session/GetCurrentLoginInformations";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this71.processGetCurrentLoginInformations(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this71.processGetCurrentLoginInformations(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetCurrentLoginInformations",
        value: function processGetCurrentLoginInformations(response) {
          var _this72 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator35 = _createForOfIteratorHelper(response.headers.keys()),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var key = _step35.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this72.jsonParseReviver);
              result200 = GetCurrentLoginInformationsOutput.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return SessionServiceProxy;
    }();

    SessionServiceProxy.ɵfac = function SessionServiceProxy_Factory(t) {
      return new (t || SessionServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    SessionServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SessionServiceProxy,
      factory: SessionServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SessionServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var TenantServiceProxy = /*#__PURE__*/function () {
      function TenantServiceProxy(http, baseUrl) {
        _classCallCheck(this, TenantServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(TenantServiceProxy, [{
        key: "create",
        value: function create(body) {
          var _this73 = this;

          var url_ = this.baseUrl + "/api/services/app/Tenant/Create";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this73.processCreate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this73.processCreate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreate",
        value: function processCreate(response) {
          var _this74 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator36 = _createForOfIteratorHelper(response.headers.keys()),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var key = _step36.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this74.jsonParseReviver);
              result200 = TenantDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this75 = this;

          var url_ = this.baseUrl + "/api/services/app/Tenant/Delete?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this75.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this75.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator37 = _createForOfIteratorHelper(response.headers.keys()),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var key = _step37.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "get",
        value: function get(id) {
          var _this76 = this;

          var url_ = this.baseUrl + "/api/services/app/Tenant/Get?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this76.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this76.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this77 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator38 = _createForOfIteratorHelper(response.headers.keys()),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var key = _step38.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this77.jsonParseReviver);
              result200 = TenantDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param isActive (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getAll",
        value: function getAll(keyword, isActive, skipCount, maxResultCount) {
          var _this78 = this;

          var url_ = this.baseUrl + "/api/services/app/Tenant/GetAll?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (isActive !== undefined && isActive !== null) url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this78.processGetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this78.processGetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAll",
        value: function processGetAll(response) {
          var _this79 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator39 = _createForOfIteratorHelper(response.headers.keys()),
                _step39;

            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var key = _step39.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this79.jsonParseReviver);
              result200 = TenantDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "update",
        value: function update(body) {
          var _this80 = this;

          var url_ = this.baseUrl + "/api/services/app/Tenant/Update";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this80.processUpdate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this80.processUpdate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUpdate",
        value: function processUpdate(response) {
          var _this81 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator40 = _createForOfIteratorHelper(response.headers.keys()),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var key = _step40.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this81.jsonParseReviver);
              result200 = TenantDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return TenantServiceProxy;
    }();

    TenantServiceProxy.ɵfac = function TenantServiceProxy_Factory(t) {
      return new (t || TenantServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    TenantServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TenantServiceProxy,
      factory: TenantServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TenantServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var TokenAuthServiceProxy = /*#__PURE__*/function () {
      function TokenAuthServiceProxy(http, baseUrl) {
        _classCallCheck(this, TokenAuthServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(TokenAuthServiceProxy, [{
        key: "authenticate",
        value: function authenticate(body) {
          var _this82 = this;

          var url_ = this.baseUrl + "/api/TokenAuth/Authenticate";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this82.processAuthenticate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this82.processAuthenticate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processAuthenticate",
        value: function processAuthenticate(response) {
          var _this83 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator41 = _createForOfIteratorHelper(response.headers.keys()),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var key = _step41.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this83.jsonParseReviver);
              result200 = AuthenticateResultModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getExternalAuthenticationProviders",
        value: function getExternalAuthenticationProviders() {
          var _this84 = this;

          var url_ = this.baseUrl + "/api/TokenAuth/GetExternalAuthenticationProviders";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this84.processGetExternalAuthenticationProviders(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this84.processGetExternalAuthenticationProviders(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetExternalAuthenticationProviders",
        value: function processGetExternalAuthenticationProviders(response) {
          var _this85 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator42 = _createForOfIteratorHelper(response.headers.keys()),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var key = _step42.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this85.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator43 = _createForOfIteratorHelper(resultData200),
                    _step43;

                try {
                  for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                    var item = _step43.value;
                    result200.push(ExternalLoginProviderInfoModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator43.e(err);
                } finally {
                  _iterator43.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "externalAuthenticate",
        value: function externalAuthenticate(body) {
          var _this86 = this;

          var url_ = this.baseUrl + "/api/TokenAuth/ExternalAuthenticate";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this86.processExternalAuthenticate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this86.processExternalAuthenticate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processExternalAuthenticate",
        value: function processExternalAuthenticate(response) {
          var _this87 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator44 = _createForOfIteratorHelper(response.headers.keys()),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var key = _step44.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this87.jsonParseReviver);
              result200 = ExternalAuthenticateResultModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return TokenAuthServiceProxy;
    }();

    TokenAuthServiceProxy.ɵfac = function TokenAuthServiceProxy_Factory(t) {
      return new (t || TokenAuthServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    TokenAuthServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: TokenAuthServiceProxy,
      factory: TokenAuthServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TokenAuthServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var UserServiceProxy = /*#__PURE__*/function () {
      function UserServiceProxy(http, baseUrl) {
        _classCallCheck(this, UserServiceProxy);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
      }
      /**
       * @param body (optional)
       * @return Success
       */


      _createClass(UserServiceProxy, [{
        key: "create",
        value: function create(body) {
          var _this88 = this;

          var url_ = this.baseUrl + "/api/services/app/User/Create";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this88.processCreate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this88.processCreate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processCreate",
        value: function processCreate(response) {
          var _this89 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator45 = _createForOfIteratorHelper(response.headers.keys()),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var key = _step45.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this89.jsonParseReviver);
              result200 = UserDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "update",
        value: function update(body) {
          var _this90 = this;

          var url_ = this.baseUrl + "/api/services/app/User/Update";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this90.processUpdate(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this90.processUpdate(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processUpdate",
        value: function processUpdate(response) {
          var _this91 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator46 = _createForOfIteratorHelper(response.headers.keys()),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var key = _step46.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this91.jsonParseReviver);
              result200 = UserDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this92 = this;

          var url_ = this.baseUrl + "/api/services/app/User/Delete?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this92.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this92.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator47 = _createForOfIteratorHelper(response.headers.keys()),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var key = _step47.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @return Success
         */

      }, {
        key: "getRoles",
        value: function getRoles() {
          var _this93 = this;

          var url_ = this.baseUrl + "/api/services/app/User/GetRoles";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this93.processGetRoles(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this93.processGetRoles(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetRoles",
        value: function processGetRoles(response) {
          var _this94 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator48 = _createForOfIteratorHelper(response.headers.keys()),
                _step48;

            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var key = _step48.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this94.jsonParseReviver);
              result200 = RoleDtoListResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "changeLanguage",
        value: function changeLanguage(body) {
          var _this95 = this;

          var url_ = this.baseUrl + "/api/services/app/User/ChangeLanguage";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this95.processChangeLanguage(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this95.processChangeLanguage(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processChangeLanguage",
        value: function processChangeLanguage(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator49 = _createForOfIteratorHelper(response.headers.keys()),
                _step49;

            try {
              for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                var key = _step49.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator49.e(err);
            } finally {
              _iterator49.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "changePassword",
        value: function changePassword(body) {
          var _this96 = this;

          var url_ = this.baseUrl + "/api/services/app/User/ChangePassword";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this96.processChangePassword(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this96.processChangePassword(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processChangePassword",
        value: function processChangePassword(response) {
          var _this97 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator50 = _createForOfIteratorHelper(response.headers.keys()),
                _step50;

            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                var key = _step50.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this97.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param body (optional)
         * @return Success
         */

      }, {
        key: "resetPassword",
        value: function resetPassword(body) {
          var _this98 = this;

          var url_ = this.baseUrl + "/api/services/app/User/ResetPassword";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(body);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json-patch+json",
              "Accept": "text/plain"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this98.processResetPassword(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this98.processResetPassword(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processResetPassword",
        value: function processResetPassword(response) {
          var _this99 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator51 = _createForOfIteratorHelper(response.headers.keys()),
                _step51;

            try {
              for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                var key = _step51.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator51.e(err);
            } finally {
              _iterator51.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this99.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param id (optional)
         * @return Success
         */

      }, {
        key: "get",
        value: function get(id) {
          var _this100 = this;

          var url_ = this.baseUrl + "/api/services/app/User/Get?";
          if (id === null) throw new Error("The parameter 'id' cannot be null.");else if (id !== undefined) url_ += "Id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this100.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this100.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this101 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator52 = _createForOfIteratorHelper(response.headers.keys()),
                _step52;

            try {
              for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
                var key = _step52.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator52.e(err);
            } finally {
              _iterator52.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this101.jsonParseReviver);
              result200 = UserDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        /**
         * @param keyword (optional)
         * @param isActive (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */

      }, {
        key: "getAll",
        value: function getAll(keyword, isActive, skipCount, maxResultCount) {
          var _this102 = this;

          var url_ = this.baseUrl + "/api/services/app/User/GetAll?";
          if (keyword !== undefined && keyword !== null) url_ += "Keyword=" + encodeURIComponent("" + keyword) + "&";
          if (isActive !== undefined && isActive !== null) url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
          if (skipCount === null) throw new Error("The parameter 'skipCount' cannot be null.");else if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount === null) throw new Error("The parameter 'maxResultCount' cannot be null.");else if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "text/plain"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this102.processGetAll(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this102.processGetAll(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetAll",
        value: function processGetAll(response) {
          var _this103 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator53 = _createForOfIteratorHelper(response.headers.keys()),
                _step53;

            try {
              for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
                var key = _step53.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator53.e(err);
            } finally {
              _iterator53.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this103.jsonParseReviver);
              result200 = UserDtoPagedResultDto.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return UserServiceProxy;
    }();

    UserServiceProxy.ɵfac = function UserServiceProxy_Factory(t) {
      return new (t || UserServiceProxy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    UserServiceProxy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UserServiceProxy,
      factory: UserServiceProxy.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserServiceProxy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var IsTenantAvailableInput = /*#__PURE__*/function () {
      function IsTenantAvailableInput(data) {
        _classCallCheck(this, IsTenantAvailableInput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(IsTenantAvailableInput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.tenancyName = _data["tenancyName"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["tenancyName"] = this.tenancyName;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new IsTenantAvailableInput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new IsTenantAvailableInput();
          result.init(data);
          return result;
        }
      }]);

      return IsTenantAvailableInput;
    }();

    var TenantAvailabilityState;

    (function (TenantAvailabilityState) {
      TenantAvailabilityState[TenantAvailabilityState["_1"] = 1] = "_1";
      TenantAvailabilityState[TenantAvailabilityState["_2"] = 2] = "_2";
      TenantAvailabilityState[TenantAvailabilityState["_3"] = 3] = "_3";
    })(TenantAvailabilityState || (TenantAvailabilityState = {}));

    var IsTenantAvailableOutput = /*#__PURE__*/function () {
      function IsTenantAvailableOutput(data) {
        _classCallCheck(this, IsTenantAvailableOutput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(IsTenantAvailableOutput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.state = _data["state"];
            this.tenantId = _data["tenantId"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["state"] = this.state;
          data["tenantId"] = this.tenantId;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new IsTenantAvailableOutput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new IsTenantAvailableOutput();
          result.init(data);
          return result;
        }
      }]);

      return IsTenantAvailableOutput;
    }();

    var RegisterInput = /*#__PURE__*/function () {
      function RegisterInput(data) {
        _classCallCheck(this, RegisterInput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RegisterInput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.userName = _data["userName"];
            this.emailAddress = _data["emailAddress"];
            this.password = _data["password"];
            this.cnic = _data["cnic"];
            this.captchaResponse = _data["captchaResponse"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["surname"] = this.surname;
          data["userName"] = this.userName;
          data["emailAddress"] = this.emailAddress;
          data["password"] = this.password;
          data["cnic"] = this.cnic;
          data["captchaResponse"] = this.captchaResponse;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RegisterInput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RegisterInput();
          result.init(data);
          return result;
        }
      }]);

      return RegisterInput;
    }();

    var RegisterOutput = /*#__PURE__*/function () {
      function RegisterOutput(data) {
        _classCallCheck(this, RegisterOutput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RegisterOutput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.canLogin = _data["canLogin"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["canLogin"] = this.canLogin;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RegisterOutput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RegisterOutput();
          result.init(data);
          return result;
        }
      }]);

      return RegisterOutput;
    }();

    var ChangeUiThemeInput = /*#__PURE__*/function () {
      function ChangeUiThemeInput(data) {
        _classCallCheck(this, ChangeUiThemeInput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ChangeUiThemeInput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.theme = _data["theme"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["theme"] = this.theme;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ChangeUiThemeInput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ChangeUiThemeInput();
          result.init(data);
          return result;
        }
      }]);

      return ChangeUiThemeInput;
    }();

    var RequestsHomeDto = /*#__PURE__*/function () {
      function RequestsHomeDto(data) {
        _classCallCheck(this, RequestsHomeDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestsHomeDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.pending = _data["pending"];
            this.approved = _data["approved"];
            this.declined = _data["declined"];
            this.processed = _data["processed"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["pending"] = this.pending;
          data["approved"] = this.approved;
          data["declined"] = this.declined;
          data["processed"] = this.processed;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestsHomeDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestsHomeDto();
          result.init(data);
          return result;
        }
      }]);

      return RequestsHomeDto;
    }();

    var InstallationsHomeDto = /*#__PURE__*/function () {
      function InstallationsHomeDto(data) {
        _classCallCheck(this, InstallationsHomeDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(InstallationsHomeDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.installationsTotal = _data["installationsTotal"];
            this.installationsActive = _data["installationsActive"];
            this.installationsInactive = _data["installationsInactive"];
            this.installationsMalfunction = _data["installationsMalfunction"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["installationsTotal"] = this.installationsTotal;
          data["installationsActive"] = this.installationsActive;
          data["installationsInactive"] = this.installationsInactive;
          data["installationsMalfunction"] = this.installationsMalfunction;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new InstallationsHomeDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new InstallationsHomeDto();
          result.init(data);
          return result;
        }
      }]);

      return InstallationsHomeDto;
    }();

    var CitiesDto = /*#__PURE__*/function () {
      function CitiesDto(data) {
        _classCallCheck(this, CitiesDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CitiesDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.lat = _data["lat"];
            this.lng = _data["lng"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["lat"] = this.lat;
          data["lng"] = this.lng;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CitiesDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CitiesDto();
          result.init(data);
          return result;
        }
      }]);

      return CitiesDto;
    }();

    var RequestsInsightHome = /*#__PURE__*/function () {
      function RequestsInsightHome(data) {
        _classCallCheck(this, RequestsInsightHome);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestsInsightHome, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.city = _data["city"] ? CitiesDto.fromJS(_data["city"]) : undefined;
            this.requestsCount = _data["requestsCount"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["city"] = this.city ? this.city.toJSON() : undefined;
          data["requestsCount"] = this.requestsCount;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestsInsightHome();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestsInsightHome();
          result.init(data);
          return result;
        }
      }]);

      return RequestsInsightHome;
    }();

    var HomeDto = /*#__PURE__*/function () {
      function HomeDto(data) {
        _classCallCheck(this, HomeDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(HomeDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.requestsHome = _data["requestsHome"] ? RequestsHomeDto.fromJS(_data["requestsHome"]) : undefined;
            this.installationsHome = _data["installationsHome"] ? InstallationsHomeDto.fromJS(_data["installationsHome"]) : undefined;

            if (Array.isArray(_data["insightHome"])) {
              this.insightHome = [];

              var _iterator54 = _createForOfIteratorHelper(_data["insightHome"]),
                  _step54;

              try {
                for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                  var item = _step54.value;
                  this.insightHome.push(RequestsInsightHome.fromJS(item));
                }
              } catch (err) {
                _iterator54.e(err);
              } finally {
                _iterator54.f();
              }
            }

            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["requestsHome"] = this.requestsHome ? this.requestsHome.toJSON() : undefined;
          data["installationsHome"] = this.installationsHome ? this.installationsHome.toJSON() : undefined;

          if (Array.isArray(this.insightHome)) {
            data["insightHome"] = [];

            var _iterator55 = _createForOfIteratorHelper(this.insightHome),
                _step55;

            try {
              for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
                var item = _step55.value;
                data["insightHome"].push(item.toJSON());
              }
            } catch (err) {
              _iterator55.e(err);
            } finally {
              _iterator55.f();
            }
          }

          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new HomeDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new HomeDto();
          result.init(data);
          return result;
        }
      }]);

      return HomeDto;
    }();

    var CreateInstallationsDto = /*#__PURE__*/function () {
      function CreateInstallationsDto(data) {
        _classCallCheck(this, CreateInstallationsDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateInstallationsDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.make = _data["make"];
            this.serial = _data["serial"];
            this.cityId = _data["cityId"];
            this.status = _data["status"];
            this.lat = _data["lat"];
            this.lng = _data["lng"];
            this.address = _data["address"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["make"] = this.make;
          data["serial"] = this.serial;
          data["cityId"] = this.cityId;
          data["status"] = this.status;
          data["lat"] = this.lat;
          data["lng"] = this.lng;
          data["address"] = this.address;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CreateInstallationsDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateInstallationsDto();
          result.init(data);
          return result;
        }
      }]);

      return CreateInstallationsDto;
    }();

    var InstallationsDto = /*#__PURE__*/function () {
      function InstallationsDto(data) {
        _classCallCheck(this, InstallationsDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(InstallationsDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.make = _data["make"];
            this.serial = _data["serial"];
            this.city = _data["city"] ? CitiesDto.fromJS(_data["city"]) : undefined;
            this.status = _data["status"];
            this.lat = _data["lat"];
            this.lng = _data["lng"];
            this.address = _data["address"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["make"] = this.make;
          data["serial"] = this.serial;
          data["city"] = this.city ? this.city.toJSON() : undefined;
          data["status"] = this.status;
          data["lat"] = this.lat;
          data["lng"] = this.lng;
          data["address"] = this.address;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new InstallationsDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new InstallationsDto();
          result.init(data);
          return result;
        }
      }]);

      return InstallationsDto;
    }();

    var CitiesDtoListResultDto = /*#__PURE__*/function () {
      function CitiesDtoListResultDto(data) {
        _classCallCheck(this, CitiesDtoListResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CitiesDtoListResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator56 = _createForOfIteratorHelper(_data["items"]),
                  _step56;

              try {
                for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                  var item = _step56.value;
                  this.items.push(CitiesDto.fromJS(item));
                }
              } catch (err) {
                _iterator56.e(err);
              } finally {
                _iterator56.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator57 = _createForOfIteratorHelper(this.items),
                _step57;

            try {
              for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                var item = _step57.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator57.e(err);
            } finally {
              _iterator57.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CitiesDtoListResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CitiesDtoListResultDto();
          result.init(data);
          return result;
        }
      }]);

      return CitiesDtoListResultDto;
    }();

    var InstallationsDtoPagedResultDto = /*#__PURE__*/function () {
      function InstallationsDtoPagedResultDto(data) {
        _classCallCheck(this, InstallationsDtoPagedResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(InstallationsDtoPagedResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.totalCount = _data["totalCount"];

            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator58 = _createForOfIteratorHelper(_data["items"]),
                  _step58;

              try {
                for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
                  var item = _step58.value;
                  this.items.push(InstallationsDto.fromJS(item));
                }
              } catch (err) {
                _iterator58.e(err);
              } finally {
                _iterator58.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["totalCount"] = this.totalCount;

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator59 = _createForOfIteratorHelper(this.items),
                _step59;

            try {
              for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                var item = _step59.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator59.e(err);
            } finally {
              _iterator59.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new InstallationsDtoPagedResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new InstallationsDtoPagedResultDto();
          result.init(data);
          return result;
        }
      }]);

      return InstallationsDtoPagedResultDto;
    }();

    var InstallationsDtoListResultDto = /*#__PURE__*/function () {
      function InstallationsDtoListResultDto(data) {
        _classCallCheck(this, InstallationsDtoListResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(InstallationsDtoListResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator60 = _createForOfIteratorHelper(_data["items"]),
                  _step60;

              try {
                for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                  var item = _step60.value;
                  this.items.push(InstallationsDto.fromJS(item));
                }
              } catch (err) {
                _iterator60.e(err);
              } finally {
                _iterator60.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator61 = _createForOfIteratorHelper(this.items),
                _step61;

            try {
              for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
                var item = _step61.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator61.e(err);
            } finally {
              _iterator61.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new InstallationsDtoListResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new InstallationsDtoListResultDto();
          result.init(data);
          return result;
        }
      }]);

      return InstallationsDtoListResultDto;
    }();

    var RequestStatusDto = /*#__PURE__*/function () {
      function RequestStatusDto(data) {
        _classCallCheck(this, RequestStatusDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestStatusDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.status = _data["status"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["status"] = this.status;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestStatusDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestStatusDto();
          result.init(data);
          return result;
        }
      }]);

      return RequestStatusDto;
    }();

    var RequestDto = /*#__PURE__*/function () {
      function RequestDto(data) {
        _classCallCheck(this, RequestDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.cnic = _data["cnic"];
            this.name = _data["name"];
            this.address = _data["address"];
            this.description = _data["description"];
            this.lat = _data["lat"];
            this.lng = _data["lng"];
            this.city = _data["city"] ? CitiesDto.fromJS(_data["city"]) : undefined;
            this.status = _data["status"] ? RequestStatusDto.fromJS(_data["status"]) : undefined;
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["cnic"] = this.cnic;
          data["name"] = this.name;
          data["address"] = this.address;
          data["description"] = this.description;
          data["lat"] = this.lat;
          data["lng"] = this.lng;
          data["city"] = this.city ? this.city.toJSON() : undefined;
          data["status"] = this.status ? this.status.toJSON() : undefined;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestDto();
          result.init(data);
          return result;
        }
      }]);

      return RequestDto;
    }();

    var RequestDtoPagedResultDto = /*#__PURE__*/function () {
      function RequestDtoPagedResultDto(data) {
        _classCallCheck(this, RequestDtoPagedResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestDtoPagedResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.totalCount = _data["totalCount"];

            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator62 = _createForOfIteratorHelper(_data["items"]),
                  _step62;

              try {
                for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                  var item = _step62.value;
                  this.items.push(RequestDto.fromJS(item));
                }
              } catch (err) {
                _iterator62.e(err);
              } finally {
                _iterator62.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["totalCount"] = this.totalCount;

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator63 = _createForOfIteratorHelper(this.items),
                _step63;

            try {
              for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
                var item = _step63.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator63.e(err);
            } finally {
              _iterator63.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestDtoPagedResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestDtoPagedResultDto();
          result.init(data);
          return result;
        }
      }]);

      return RequestDtoPagedResultDto;
    }();

    var CreateRequestDto = /*#__PURE__*/function () {
      function CreateRequestDto(data) {
        _classCallCheck(this, CreateRequestDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateRequestDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.cnic = _data["cnic"];
            this.name = _data["name"];
            this.address = _data["address"];
            this.description = _data["description"];
            this.lat = _data["lat"];
            this.lng = _data["lng"];
            this.cityId = _data["cityId"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["cnic"] = this.cnic;
          data["name"] = this.name;
          data["address"] = this.address;
          data["description"] = this.description;
          data["lat"] = this.lat;
          data["lng"] = this.lng;
          data["cityId"] = this.cityId;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CreateRequestDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateRequestDto();
          result.init(data);
          return result;
        }
      }]);

      return CreateRequestDto;
    }();

    var RequestDetailsDto = /*#__PURE__*/function () {
      function RequestDetailsDto(data) {
        _classCallCheck(this, RequestDetailsDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RequestDetailsDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.requestId = _data["requestId"];
            this.description = _data["description"];

            if (Array.isArray(_data["images"])) {
              this.images = [];

              var _iterator64 = _createForOfIteratorHelper(_data["images"]),
                  _step64;

              try {
                for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
                  var item = _step64.value;
                  this.images.push(item);
                }
              } catch (err) {
                _iterator64.e(err);
              } finally {
                _iterator64.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["requestId"] = this.requestId;
          data["description"] = this.description;

          if (Array.isArray(this.images)) {
            data["images"] = [];

            var _iterator65 = _createForOfIteratorHelper(this.images),
                _step65;

            try {
              for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                var item = _step65.value;
                data["images"].push(item);
              }
            } catch (err) {
              _iterator65.e(err);
            } finally {
              _iterator65.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RequestDetailsDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RequestDetailsDto();
          result.init(data);
          return result;
        }
      }]);

      return RequestDetailsDto;
    }();

    var CreateRoleDto = /*#__PURE__*/function () {
      function CreateRoleDto(data) {
        _classCallCheck(this, CreateRoleDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateRoleDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.normalizedName = _data["normalizedName"];
            this.description = _data["description"];

            if (Array.isArray(_data["grantedPermissions"])) {
              this.grantedPermissions = [];

              var _iterator66 = _createForOfIteratorHelper(_data["grantedPermissions"]),
                  _step66;

              try {
                for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
                  var item = _step66.value;
                  this.grantedPermissions.push(item);
                }
              } catch (err) {
                _iterator66.e(err);
              } finally {
                _iterator66.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["normalizedName"] = this.normalizedName;
          data["description"] = this.description;

          if (Array.isArray(this.grantedPermissions)) {
            data["grantedPermissions"] = [];

            var _iterator67 = _createForOfIteratorHelper(this.grantedPermissions),
                _step67;

            try {
              for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                var item = _step67.value;
                data["grantedPermissions"].push(item);
              }
            } catch (err) {
              _iterator67.e(err);
            } finally {
              _iterator67.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CreateRoleDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateRoleDto();
          result.init(data);
          return result;
        }
      }]);

      return CreateRoleDto;
    }();

    var RoleDto = /*#__PURE__*/function () {
      function RoleDto(data) {
        _classCallCheck(this, RoleDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.normalizedName = _data["normalizedName"];
            this.description = _data["description"];

            if (Array.isArray(_data["grantedPermissions"])) {
              this.grantedPermissions = [];

              var _iterator68 = _createForOfIteratorHelper(_data["grantedPermissions"]),
                  _step68;

              try {
                for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                  var item = _step68.value;
                  this.grantedPermissions.push(item);
                }
              } catch (err) {
                _iterator68.e(err);
              } finally {
                _iterator68.f();
              }
            }

            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["normalizedName"] = this.normalizedName;
          data["description"] = this.description;

          if (Array.isArray(this.grantedPermissions)) {
            data["grantedPermissions"] = [];

            var _iterator69 = _createForOfIteratorHelper(this.grantedPermissions),
                _step69;

            try {
              for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
                var item = _step69.value;
                data["grantedPermissions"].push(item);
              }
            } catch (err) {
              _iterator69.e(err);
            } finally {
              _iterator69.f();
            }
          }

          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleDto;
    }();

    var RoleListDto = /*#__PURE__*/function () {
      function RoleListDto(data) {
        _classCallCheck(this, RoleListDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleListDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.isStatic = _data["isStatic"];
            this.isDefault = _data["isDefault"];
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["isStatic"] = this.isStatic;
          data["isDefault"] = this.isDefault;
          data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleListDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleListDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleListDto;
    }();

    var RoleListDtoListResultDto = /*#__PURE__*/function () {
      function RoleListDtoListResultDto(data) {
        _classCallCheck(this, RoleListDtoListResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleListDtoListResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator70 = _createForOfIteratorHelper(_data["items"]),
                  _step70;

              try {
                for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
                  var item = _step70.value;
                  this.items.push(RoleListDto.fromJS(item));
                }
              } catch (err) {
                _iterator70.e(err);
              } finally {
                _iterator70.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator71 = _createForOfIteratorHelper(this.items),
                _step71;

            try {
              for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                var item = _step71.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator71.e(err);
            } finally {
              _iterator71.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleListDtoListResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleListDtoListResultDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleListDtoListResultDto;
    }();

    var PermissionDto = /*#__PURE__*/function () {
      function PermissionDto(data) {
        _classCallCheck(this, PermissionDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(PermissionDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["description"] = this.description;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new PermissionDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new PermissionDto();
          result.init(data);
          return result;
        }
      }]);

      return PermissionDto;
    }();

    var PermissionDtoListResultDto = /*#__PURE__*/function () {
      function PermissionDtoListResultDto(data) {
        _classCallCheck(this, PermissionDtoListResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(PermissionDtoListResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator72 = _createForOfIteratorHelper(_data["items"]),
                  _step72;

              try {
                for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
                  var item = _step72.value;
                  this.items.push(PermissionDto.fromJS(item));
                }
              } catch (err) {
                _iterator72.e(err);
              } finally {
                _iterator72.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator73 = _createForOfIteratorHelper(this.items),
                _step73;

            try {
              for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
                var item = _step73.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator73.e(err);
            } finally {
              _iterator73.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new PermissionDtoListResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new PermissionDtoListResultDto();
          result.init(data);
          return result;
        }
      }]);

      return PermissionDtoListResultDto;
    }();

    var RoleEditDto = /*#__PURE__*/function () {
      function RoleEditDto(data) {
        _classCallCheck(this, RoleEditDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleEditDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
            this.isStatic = _data["isStatic"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["description"] = this.description;
          data["isStatic"] = this.isStatic;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleEditDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleEditDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleEditDto;
    }();

    var FlatPermissionDto = /*#__PURE__*/function () {
      function FlatPermissionDto(data) {
        _classCallCheck(this, FlatPermissionDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(FlatPermissionDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.description = _data["description"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["description"] = this.description;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new FlatPermissionDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new FlatPermissionDto();
          result.init(data);
          return result;
        }
      }]);

      return FlatPermissionDto;
    }();

    var GetRoleForEditOutput = /*#__PURE__*/function () {
      function GetRoleForEditOutput(data) {
        _classCallCheck(this, GetRoleForEditOutput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(GetRoleForEditOutput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.role = _data["role"] ? RoleEditDto.fromJS(_data["role"]) : undefined;

            if (Array.isArray(_data["permissions"])) {
              this.permissions = [];

              var _iterator74 = _createForOfIteratorHelper(_data["permissions"]),
                  _step74;

              try {
                for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
                  var item = _step74.value;
                  this.permissions.push(FlatPermissionDto.fromJS(item));
                }
              } catch (err) {
                _iterator74.e(err);
              } finally {
                _iterator74.f();
              }
            }

            if (Array.isArray(_data["grantedPermissionNames"])) {
              this.grantedPermissionNames = [];

              var _iterator75 = _createForOfIteratorHelper(_data["grantedPermissionNames"]),
                  _step75;

              try {
                for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
                  var _item = _step75.value;
                  this.grantedPermissionNames.push(_item);
                }
              } catch (err) {
                _iterator75.e(err);
              } finally {
                _iterator75.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["role"] = this.role ? this.role.toJSON() : undefined;

          if (Array.isArray(this.permissions)) {
            data["permissions"] = [];

            var _iterator76 = _createForOfIteratorHelper(this.permissions),
                _step76;

            try {
              for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
                var item = _step76.value;
                data["permissions"].push(item.toJSON());
              }
            } catch (err) {
              _iterator76.e(err);
            } finally {
              _iterator76.f();
            }
          }

          if (Array.isArray(this.grantedPermissionNames)) {
            data["grantedPermissionNames"] = [];

            var _iterator77 = _createForOfIteratorHelper(this.grantedPermissionNames),
                _step77;

            try {
              for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
                var _item2 = _step77.value;
                data["grantedPermissionNames"].push(_item2);
              }
            } catch (err) {
              _iterator77.e(err);
            } finally {
              _iterator77.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new GetRoleForEditOutput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new GetRoleForEditOutput();
          result.init(data);
          return result;
        }
      }]);

      return GetRoleForEditOutput;
    }();

    var RoleDtoPagedResultDto = /*#__PURE__*/function () {
      function RoleDtoPagedResultDto(data) {
        _classCallCheck(this, RoleDtoPagedResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleDtoPagedResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.totalCount = _data["totalCount"];

            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator78 = _createForOfIteratorHelper(_data["items"]),
                  _step78;

              try {
                for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
                  var item = _step78.value;
                  this.items.push(RoleDto.fromJS(item));
                }
              } catch (err) {
                _iterator78.e(err);
              } finally {
                _iterator78.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["totalCount"] = this.totalCount;

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator79 = _createForOfIteratorHelper(this.items),
                _step79;

            try {
              for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
                var item = _step79.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator79.e(err);
            } finally {
              _iterator79.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleDtoPagedResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleDtoPagedResultDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleDtoPagedResultDto;
    }();

    var ApplicationInfoDto = /*#__PURE__*/function () {
      function ApplicationInfoDto(data) {
        _classCallCheck(this, ApplicationInfoDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ApplicationInfoDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.version = _data["version"];
            this.releaseDate = _data["releaseDate"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["releaseDate"].toString()) : undefined;

            if (_data["features"]) {
              this.features = {};

              for (var key in _data["features"]) {
                if (_data["features"].hasOwnProperty(key)) this.features[key] = _data["features"][key];
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["version"] = this.version;
          data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : undefined;

          if (this.features) {
            data["features"] = {};

            for (var key in this.features) {
              if (this.features.hasOwnProperty(key)) data["features"][key] = this.features[key];
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ApplicationInfoDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ApplicationInfoDto();
          result.init(data);
          return result;
        }
      }]);

      return ApplicationInfoDto;
    }();

    var UserLoginInfoDto = /*#__PURE__*/function () {
      function UserLoginInfoDto(data) {
        _classCallCheck(this, UserLoginInfoDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserLoginInfoDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.userName = _data["userName"];
            this.emailAddress = _data["emailAddress"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["surname"] = this.surname;
          data["userName"] = this.userName;
          data["emailAddress"] = this.emailAddress;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new UserLoginInfoDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserLoginInfoDto();
          result.init(data);
          return result;
        }
      }]);

      return UserLoginInfoDto;
    }();

    var TenantLoginInfoDto = /*#__PURE__*/function () {
      function TenantLoginInfoDto(data) {
        _classCallCheck(this, TenantLoginInfoDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(TenantLoginInfoDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["tenancyName"] = this.tenancyName;
          data["name"] = this.name;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new TenantLoginInfoDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new TenantLoginInfoDto();
          result.init(data);
          return result;
        }
      }]);

      return TenantLoginInfoDto;
    }();

    var GetCurrentLoginInformationsOutput = /*#__PURE__*/function () {
      function GetCurrentLoginInformationsOutput(data) {
        _classCallCheck(this, GetCurrentLoginInformationsOutput);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(GetCurrentLoginInformationsOutput, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.application = _data["application"] ? ApplicationInfoDto.fromJS(_data["application"]) : undefined;
            this.user = _data["user"] ? UserLoginInfoDto.fromJS(_data["user"]) : undefined;
            this.tenant = _data["tenant"] ? TenantLoginInfoDto.fromJS(_data["tenant"]) : undefined;
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["application"] = this.application ? this.application.toJSON() : undefined;
          data["user"] = this.user ? this.user.toJSON() : undefined;
          data["tenant"] = this.tenant ? this.tenant.toJSON() : undefined;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new GetCurrentLoginInformationsOutput();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new GetCurrentLoginInformationsOutput();
          result.init(data);
          return result;
        }
      }]);

      return GetCurrentLoginInformationsOutput;
    }();

    var CreateTenantDto = /*#__PURE__*/function () {
      function CreateTenantDto(data) {
        _classCallCheck(this, CreateTenantDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateTenantDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.adminEmailAddress = _data["adminEmailAddress"];
            this.connectionString = _data["connectionString"];
            this.isActive = _data["isActive"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["tenancyName"] = this.tenancyName;
          data["name"] = this.name;
          data["adminEmailAddress"] = this.adminEmailAddress;
          data["connectionString"] = this.connectionString;
          data["isActive"] = this.isActive;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CreateTenantDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateTenantDto();
          result.init(data);
          return result;
        }
      }]);

      return CreateTenantDto;
    }();

    var TenantDto = /*#__PURE__*/function () {
      function TenantDto(data) {
        _classCallCheck(this, TenantDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(TenantDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.tenancyName = _data["tenancyName"];
            this.name = _data["name"];
            this.isActive = _data["isActive"];
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["tenancyName"] = this.tenancyName;
          data["name"] = this.name;
          data["isActive"] = this.isActive;
          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new TenantDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new TenantDto();
          result.init(data);
          return result;
        }
      }]);

      return TenantDto;
    }();

    var TenantDtoPagedResultDto = /*#__PURE__*/function () {
      function TenantDtoPagedResultDto(data) {
        _classCallCheck(this, TenantDtoPagedResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(TenantDtoPagedResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.totalCount = _data["totalCount"];

            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator80 = _createForOfIteratorHelper(_data["items"]),
                  _step80;

              try {
                for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
                  var item = _step80.value;
                  this.items.push(TenantDto.fromJS(item));
                }
              } catch (err) {
                _iterator80.e(err);
              } finally {
                _iterator80.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["totalCount"] = this.totalCount;

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator81 = _createForOfIteratorHelper(this.items),
                _step81;

            try {
              for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
                var item = _step81.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator81.e(err);
            } finally {
              _iterator81.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new TenantDtoPagedResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new TenantDtoPagedResultDto();
          result.init(data);
          return result;
        }
      }]);

      return TenantDtoPagedResultDto;
    }();

    var AuthenticateModel = /*#__PURE__*/function () {
      function AuthenticateModel(data) {
        _classCallCheck(this, AuthenticateModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(AuthenticateModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.userNameOrEmailAddress = _data["userNameOrEmailAddress"];
            this.password = _data["password"];
            this.rememberClient = _data["rememberClient"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
          data["password"] = this.password;
          data["rememberClient"] = this.rememberClient;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new AuthenticateModel();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new AuthenticateModel();
          result.init(data);
          return result;
        }
      }]);

      return AuthenticateModel;
    }();

    var AuthenticateResultModel = /*#__PURE__*/function () {
      function AuthenticateResultModel(data) {
        _classCallCheck(this, AuthenticateResultModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(AuthenticateResultModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.accessToken = _data["accessToken"];
            this.encryptedAccessToken = _data["encryptedAccessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
            this.userId = _data["userId"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["accessToken"] = this.accessToken;
          data["encryptedAccessToken"] = this.encryptedAccessToken;
          data["expireInSeconds"] = this.expireInSeconds;
          data["userId"] = this.userId;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new AuthenticateResultModel();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new AuthenticateResultModel();
          result.init(data);
          return result;
        }
      }]);

      return AuthenticateResultModel;
    }();

    var ExternalLoginProviderInfoModel = /*#__PURE__*/function () {
      function ExternalLoginProviderInfoModel(data) {
        _classCallCheck(this, ExternalLoginProviderInfoModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ExternalLoginProviderInfoModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.clientId = _data["clientId"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["clientId"] = this.clientId;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ExternalLoginProviderInfoModel();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ExternalLoginProviderInfoModel();
          result.init(data);
          return result;
        }
      }]);

      return ExternalLoginProviderInfoModel;
    }();

    var ExternalAuthenticateModel = /*#__PURE__*/function () {
      function ExternalAuthenticateModel(data) {
        _classCallCheck(this, ExternalAuthenticateModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ExternalAuthenticateModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.authProvider = _data["authProvider"];
            this.providerKey = _data["providerKey"];
            this.providerAccessCode = _data["providerAccessCode"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["authProvider"] = this.authProvider;
          data["providerKey"] = this.providerKey;
          data["providerAccessCode"] = this.providerAccessCode;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ExternalAuthenticateModel();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ExternalAuthenticateModel();
          result.init(data);
          return result;
        }
      }]);

      return ExternalAuthenticateModel;
    }();

    var ExternalAuthenticateResultModel = /*#__PURE__*/function () {
      function ExternalAuthenticateResultModel(data) {
        _classCallCheck(this, ExternalAuthenticateResultModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ExternalAuthenticateResultModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.accessToken = _data["accessToken"];
            this.encryptedAccessToken = _data["encryptedAccessToken"];
            this.expireInSeconds = _data["expireInSeconds"];
            this.waitingForActivation = _data["waitingForActivation"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["accessToken"] = this.accessToken;
          data["encryptedAccessToken"] = this.encryptedAccessToken;
          data["expireInSeconds"] = this.expireInSeconds;
          data["waitingForActivation"] = this.waitingForActivation;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ExternalAuthenticateResultModel();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ExternalAuthenticateResultModel();
          result.init(data);
          return result;
        }
      }]);

      return ExternalAuthenticateResultModel;
    }();

    var CreateUserDto = /*#__PURE__*/function () {
      function CreateUserDto(data) {
        _classCallCheck(this, CreateUserDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(CreateUserDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.userName = _data["userName"];
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.emailAddress = _data["emailAddress"];
            this.cnic = _data["cnic"];
            this.isActive = _data["isActive"];

            if (Array.isArray(_data["roleNames"])) {
              this.roleNames = [];

              var _iterator82 = _createForOfIteratorHelper(_data["roleNames"]),
                  _step82;

              try {
                for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
                  var item = _step82.value;
                  this.roleNames.push(item);
                }
              } catch (err) {
                _iterator82.e(err);
              } finally {
                _iterator82.f();
              }
            }

            this.password = _data["password"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["userName"] = this.userName;
          data["name"] = this.name;
          data["surname"] = this.surname;
          data["emailAddress"] = this.emailAddress;
          data["cnic"] = this.cnic;
          data["isActive"] = this.isActive;

          if (Array.isArray(this.roleNames)) {
            data["roleNames"] = [];

            var _iterator83 = _createForOfIteratorHelper(this.roleNames),
                _step83;

            try {
              for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
                var item = _step83.value;
                data["roleNames"].push(item);
              }
            } catch (err) {
              _iterator83.e(err);
            } finally {
              _iterator83.f();
            }
          }

          data["password"] = this.password;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new CreateUserDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new CreateUserDto();
          result.init(data);
          return result;
        }
      }]);

      return CreateUserDto;
    }();

    var UserDto = /*#__PURE__*/function () {
      function UserDto(data) {
        _classCallCheck(this, UserDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.userName = _data["userName"];
            this.name = _data["name"];
            this.surname = _data["surname"];
            this.emailAddress = _data["emailAddress"];
            this.isActive = _data["isActive"];
            this.fullName = _data["fullName"];
            this.lastLoginTime = _data["lastLoginTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["lastLoginTime"].toString()) : undefined;
            this.creationTime = _data["creationTime"] ? moment__WEBPACK_IMPORTED_MODULE_4__(_data["creationTime"].toString()) : undefined;

            if (Array.isArray(_data["roleNames"])) {
              this.roleNames = [];

              var _iterator84 = _createForOfIteratorHelper(_data["roleNames"]),
                  _step84;

              try {
                for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
                  var item = _step84.value;
                  this.roleNames.push(item);
                }
              } catch (err) {
                _iterator84.e(err);
              } finally {
                _iterator84.f();
              }
            }

            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["userName"] = this.userName;
          data["name"] = this.name;
          data["surname"] = this.surname;
          data["emailAddress"] = this.emailAddress;
          data["isActive"] = this.isActive;
          data["fullName"] = this.fullName;
          data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : undefined;
          data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;

          if (Array.isArray(this.roleNames)) {
            data["roleNames"] = [];

            var _iterator85 = _createForOfIteratorHelper(this.roleNames),
                _step85;

            try {
              for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
                var item = _step85.value;
                data["roleNames"].push(item);
              }
            } catch (err) {
              _iterator85.e(err);
            } finally {
              _iterator85.f();
            }
          }

          data["id"] = this.id;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new UserDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserDto();
          result.init(data);
          return result;
        }
      }]);

      return UserDto;
    }();

    var RoleDtoListResultDto = /*#__PURE__*/function () {
      function RoleDtoListResultDto(data) {
        _classCallCheck(this, RoleDtoListResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleDtoListResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator86 = _createForOfIteratorHelper(_data["items"]),
                  _step86;

              try {
                for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
                  var item = _step86.value;
                  this.items.push(RoleDto.fromJS(item));
                }
              } catch (err) {
                _iterator86.e(err);
              } finally {
                _iterator86.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator87 = _createForOfIteratorHelper(this.items),
                _step87;

            try {
              for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
                var item = _step87.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator87.e(err);
            } finally {
              _iterator87.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new RoleDtoListResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleDtoListResultDto();
          result.init(data);
          return result;
        }
      }]);

      return RoleDtoListResultDto;
    }();

    var ChangeUserLanguageDto = /*#__PURE__*/function () {
      function ChangeUserLanguageDto(data) {
        _classCallCheck(this, ChangeUserLanguageDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ChangeUserLanguageDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.languageName = _data["languageName"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["languageName"] = this.languageName;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ChangeUserLanguageDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ChangeUserLanguageDto();
          result.init(data);
          return result;
        }
      }]);

      return ChangeUserLanguageDto;
    }();

    var ChangePasswordDto = /*#__PURE__*/function () {
      function ChangePasswordDto(data) {
        _classCallCheck(this, ChangePasswordDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ChangePasswordDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.currentPassword = _data["currentPassword"];
            this.newPassword = _data["newPassword"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["currentPassword"] = this.currentPassword;
          data["newPassword"] = this.newPassword;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ChangePasswordDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ChangePasswordDto();
          result.init(data);
          return result;
        }
      }]);

      return ChangePasswordDto;
    }();

    var ResetPasswordDto = /*#__PURE__*/function () {
      function ResetPasswordDto(data) {
        _classCallCheck(this, ResetPasswordDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ResetPasswordDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.adminPassword = _data["adminPassword"];
            this.userId = _data["userId"];
            this.newPassword = _data["newPassword"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["adminPassword"] = this.adminPassword;
          data["userId"] = this.userId;
          data["newPassword"] = this.newPassword;
          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new ResetPasswordDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ResetPasswordDto();
          result.init(data);
          return result;
        }
      }]);

      return ResetPasswordDto;
    }();

    var UserDtoPagedResultDto = /*#__PURE__*/function () {
      function UserDtoPagedResultDto(data) {
        _classCallCheck(this, UserDtoPagedResultDto);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserDtoPagedResultDto, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.totalCount = _data["totalCount"];

            if (Array.isArray(_data["items"])) {
              this.items = [];

              var _iterator88 = _createForOfIteratorHelper(_data["items"]),
                  _step88;

              try {
                for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
                  var item = _step88.value;
                  this.items.push(UserDto.fromJS(item));
                }
              } catch (err) {
                _iterator88.e(err);
              } finally {
                _iterator88.f();
              }
            }
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["totalCount"] = this.totalCount;

          if (Array.isArray(this.items)) {
            data["items"] = [];

            var _iterator89 = _createForOfIteratorHelper(this.items),
                _step89;

            try {
              for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
                var item = _step89.value;
                data["items"].push(item.toJSON());
              }
            } catch (err) {
              _iterator89.e(err);
            } finally {
              _iterator89.f();
            }
          }

          return data;
        }
      }, {
        key: "clone",
        value: function clone() {
          var json = this.toJSON();
          var result = new UserDtoPagedResultDto();
          result.init(json);
          return result;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserDtoPagedResultDto();
          result.init(data);
          return result;
        }
      }]);

      return UserDtoPagedResultDto;
    }();

    var ApiException = /*#__PURE__*/function (_Error) {
      _inherits(ApiException, _Error);

      var _super5 = _createSuper(ApiException);

      function ApiException(message, status, response, headers, result) {
        var _this104;

        _classCallCheck(this, ApiException);

        _this104 = _super5.call(this);
        _this104.isApiException = true;
        _this104.message = message;
        _this104.status = status;
        _this104.response = response;
        _this104.headers = headers;
        _this104.result = result;
        return _this104;
      }

      _createClass(ApiException, null, [{
        key: "isApiException",
        value: function isApiException(obj) {
          return obj.isApiException === true;
        }
      }]);

      return ApiException;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function throwException(message, status, response, headers, result) {
      if (result !== null && result !== undefined) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
    }

    function blobToText(blob) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        if (!blob) {
          observer.next("");
          observer.complete();
        } else {
          var reader = new FileReader();

          reader.onload = function (event) {
            observer.next(event.target.result);
            observer.complete();
          };

          reader.readAsText(blob);
        }
      });
    }
    /***/

  },

  /***/
  "./src/shared/service-proxies/service-proxy.module.ts":
  /*!************************************************************!*\
    !*** ./src/shared/service-proxies/service-proxy.module.ts ***!
    \************************************************************/

  /*! exports provided: ServiceProxyModule */

  /***/
  function srcSharedServiceProxiesServiceProxyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceProxyModule", function () {
      return ServiceProxyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _service_proxies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");

    var ServiceProxyModule = function ServiceProxyModule() {
      _classCallCheck(this, ServiceProxyModule);
    };

    ServiceProxyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServiceProxyModule
    });
    ServiceProxyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServiceProxyModule_Factory(t) {
        return new (t || ServiceProxyModule)();
      },
      providers: [_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RoleServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SessionServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TokenAuthServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ConfigurationServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["HomeServiceProxy"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpHttpInterceptor"],
        multi: true
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceProxyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [_service_proxies__WEBPACK_IMPORTED_MODULE_3__["RoleServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["SessionServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TenantServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["UserServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["TokenAuthServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["AccountServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["ConfigurationServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["RequestServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["InstallationsServiceProxy"], _service_proxies__WEBPACK_IMPORTED_MODULE_3__["HomeServiceProxy"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: abp_ng2_module__WEBPACK_IMPORTED_MODULE_2__["AbpHttpInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/session/app-session.service.ts":
  /*!***************************************************!*\
    !*** ./src/shared/session/app-session.service.ts ***!
    \***************************************************/

  /*! exports provided: AppSessionService */

  /***/
  function srcSharedSessionAppSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSessionService", function () {
      return AppSessionService;
    });
    /* harmony import */


    var abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! abp-ng2-module */
    "./node_modules/abp-ng2-module/__ivy_ngcc__/fesm2015/abp-ng2-module.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/service-proxies/service-proxies */
    "./src/shared/service-proxies/service-proxies.ts");

    var AppSessionService = /*#__PURE__*/function () {
      function AppSessionService(_sessionService, _abpMultiTenancyService) {
        _classCallCheck(this, AppSessionService);

        this._sessionService = _sessionService;
        this._abpMultiTenancyService = _abpMultiTenancyService;
      }

      _createClass(AppSessionService, [{
        key: "getShownLoginName",
        value: function getShownLoginName() {
          var userName = this._user.userName;

          if (!this._abpMultiTenancyService.isEnabled) {
            return userName;
          }

          return (this._tenant ? this._tenant.tenancyName : '.') + '\\' + userName;
        }
      }, {
        key: "init",
        value: function init() {
          var _this105 = this;

          return new Promise(function (resolve, reject) {
            _this105._sessionService.getCurrentLoginInformations().toPromise().then(function (result) {
              _this105._application = result.application;
              _this105._user = result.user;
              _this105._tenant = result.tenant;
              resolve(true);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "changeTenantIfNeeded",
        value: function changeTenantIfNeeded(tenantId) {
          if (this.isCurrentTenant(tenantId)) {
            return false;
          }

          abp.multiTenancy.setTenantIdCookie(tenantId);
          location.reload();
          return true;
        }
      }, {
        key: "isCurrentTenant",
        value: function isCurrentTenant(tenantId) {
          if (!tenantId && this.tenant) {
            return false;
          } else if (tenantId && (!this.tenant || this.tenant.id !== tenantId)) {
            return false;
          }

          return true;
        }
      }, {
        key: "application",
        get: function get() {
          return this._application;
        }
      }, {
        key: "user",
        get: function get() {
          return this._user;
        }
      }, {
        key: "userId",
        get: function get() {
          return this.user ? this.user.id : null;
        }
      }, {
        key: "tenant",
        get: function get() {
          return this._tenant;
        }
      }, {
        key: "tenantId",
        get: function get() {
          return this.tenant ? this.tenant.id : null;
        }
      }]);

      return AppSessionService;
    }();

    AppSessionService.ɵfac = function AppSessionService_Factory(t) {
      return new (t || AppSessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SessionServiceProxy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__["AbpMultiTenancyService"]));
    };

    AppSessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppSessionService,
      factory: AppSessionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppSessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["SessionServiceProxy"]
        }, {
          type: abp_ng2_module__WEBPACK_IMPORTED_MODULE_0__["AbpMultiTenancyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/shared.module.ts":
  /*!*************************************!*\
    !*** ./src/shared/shared.module.ts ***!
    \*************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _session_app_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session/app-session.service */
    "./src/shared/session/app-session.service.ts");
    /* harmony import */


    var _nav_app_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav/app-url.service */
    "./src/shared/nav/app-url.service.ts");
    /* harmony import */


    var _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/app-auth.service */
    "./src/shared/auth/app-auth.service.ts");
    /* harmony import */


    var _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth-route-guard */
    "./src/shared/auth/auth-route-guard.ts");
    /* harmony import */


    var _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @shared/pipes/localize.pipe */
    "./src/shared/pipes/localize.pipe.ts");
    /* harmony import */


    var _components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pagination/abp-pagination-controls.component */
    "./src/shared/components/pagination/abp-pagination-controls.component.ts");
    /* harmony import */


    var _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/validation/abp-validation.summary.component */
    "./src/shared/components/validation/abp-validation.summary.component.ts");
    /* harmony import */


    var _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/modal/abp-modal-header.component */
    "./src/shared/components/modal/abp-modal-header.component.ts");
    /* harmony import */


    var _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/modal/abp-modal-footer.component */
    "./src/shared/components/modal/abp-modal-footer.component.ts");
    /* harmony import */


    var _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layout/layout-store.service */
    "./src/shared/layout/layout-store.service.ts");
    /* harmony import */


    var _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/busy.directive */
    "./src/shared/directives/busy.directive.ts");
    /* harmony import */


    var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/equal-validator.directive */
    "./src/shared/directives/equal-validator.directive.ts");

    var SharedModule = /*#__PURE__*/function () {
      function SharedModule() {
        _classCallCheck(this, SharedModule);
      }

      _createClass(SharedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: SharedModule,
            providers: [_session_app_session_service__WEBPACK_IMPORTED_MODULE_4__["AppSessionService"], _nav_app_url_service__WEBPACK_IMPORTED_MODULE_5__["AppUrlService"], _auth_app_auth_service__WEBPACK_IMPORTED_MODULE_6__["AppAuthService"], _auth_auth_route_guard__WEBPACK_IMPORTED_MODULE_7__["AppRouteGuard"], _layout_layout_store_service__WEBPACK_IMPORTED_MODULE_13__["LayoutStoreService"]]
          };
        }
      }]);

      return SharedModule;
    }();

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"], _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"], _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"], _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"], _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"], _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"], _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]],
        exports: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"], _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"], _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"], _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"], _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"], _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"], _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]],
          declarations: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"], _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"], _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"], _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"], _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"], _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"], _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]],
          exports: [_components_pagination_abp_pagination_controls_component__WEBPACK_IMPORTED_MODULE_9__["AbpPaginationControlsComponent"], _components_validation_abp_validation_summary_component__WEBPACK_IMPORTED_MODULE_10__["AbpValidationSummaryComponent"], _components_modal_abp_modal_header_component__WEBPACK_IMPORTED_MODULE_11__["AbpModalHeaderComponent"], _components_modal_abp_modal_footer_component__WEBPACK_IMPORTED_MODULE_12__["AbpModalFooterComponent"], _shared_pipes_localize_pipe__WEBPACK_IMPORTED_MODULE_8__["LocalizePipe"], _directives_busy_directive__WEBPACK_IMPORTED_MODULE_14__["BusyDirective"], _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_15__["EqualValidator"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Personal Projects\5.7.0\angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map