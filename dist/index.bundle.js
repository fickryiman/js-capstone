"use strict";
(self["webpackChunkjs_capstone"] = self["webpackChunkjs_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  background-color: #f1f1f1;\n  color: #da729f;\n  font-family: \"Fira Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsmall {\n  color: #4183c4;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n\nheader {\n  background-color: #da729f;\n  color: white;\n}\nheader .header-nav {\n  display: flex;\n  align-items: center;\n}\nheader .header-nav nav #logo {\n  font-size: 2.25rem;\n  font-weight: 600;\n}\nheader .header-nav nav #hamberger {\n  display: none;\n  font-size: 2.25rem;\n}\nheader .header-nav ul {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  list-style: none;\n  padding-left: 0;\n  margin-left: auto;\n  gap: 0.85rem 1.75rem;\n  text-transform: capitalize;\n  font-size: 1.15rem;\n}\nheader .header-nav ul li a {\n  color: white;\n}\nheader .header-nav ul li:hover > a {\n  color: #d4fffb;\n}\n\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n.card .img-food {\n  cursor: pointer;\n  max-width: 25vw;\n  min-width: 25vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.card .img-food:hover {\n  transform: scale(1.1);\n}\n.card .food-info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: #3e3e3e;\n}\n.card .food-info .food-name {\n  cursor: pointer;\n  margin-left: 0.5vw;\n  flex-wrap: nowrap;\n  max-width: 25vw;\n  min-width: 25vw;\n  width: 80%;\n}\n.card .food-info .love {\n  align-self: flex-end;\n  margin-right: 0.75vw;\n  margin-top: -4vw;\n  padding: 10px;\n  cursor: pointer;\n  font-size: x-large;\n  color: #da729f;\n  transition: all 0.3s ease-in-out;\n}\n.card .food-info .love:hover {\n  transform: scale(1.3);\n  color: rgb(233, 54, 54);\n}\n.card .food-info .comment-box {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 99;\n}\n.card .food-info .comment-box .box-area {\n  display: flex;\n  width: calc(100% - 1rem);\n  max-width: 500px;\n  margin: 2rem auto;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: white;\n  color: #3e3e3e;\n  padding: 1rem 0.5rem;\n  z-index: 999;\n  border-radius: 0.4rem;\n  overflow-y: scroll;\n  max-height: 70vh;\n}\n.card .food-info .comment-box .box-area .btn-close {\n  display: inline-block;\n  margin-left: auto;\n  font-size: 1.5rem;\n  color: #da729f;\n  margin-right: 1rem;\n}\n.card .food-info .comment-box .box-area h3 {\n  text-align: center;\n}\n.card .food-info .comment-box .box-area h3,\n.card .food-info .comment-box .box-area h4 {\n  margin: 1rem;\n}\n.card .food-info .comment-box .box-area img {\n  display: inline-block;\n  margin: 0.35rem auto;\n  width: calc(100% - 1rem);\n  object-fit: cover;\n}\n.card .food-info .comment-box .box-area .comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n.card .food-info .comment-box .box-area .comment-form input,\n.card .food-info .comment-box .box-area .comment-form textarea {\n  padding: 0.35rem;\n  outline: 0;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit] {\n  display: inline-block;\n  text-transform: capitalize;\n  outline: 0;\n  border: 1px solid #da729f;\n  padding: 0.35rem 0.85rem;\n  cursor: pointer;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit]:hover {\n  background-color: #da729f;\n  color: white;\n}\n.card .food-info .comment-box .box-area .comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  list-style: none;\n}\n.card .food-info .comment-box .box-area p {\n  margin: 1rem;\n  color: #6e6666;\n}\n.card .likes {\n  align-self: flex-end;\n  margin-top: -2vw;\n  margin-right: 0.5vw;\n  color: #3e3e3e;\n}\n.card .button {\n  width: fit-content;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 1px #da729f;\n  margin-top: 10px;\n  margin-left: 0.5vw;\n  transition: all 0.2s ease-in-out;\n  border-color: #da729f;\n}\n.card .button:hover {\n  background-color: #da729f;\n  color: #fff;\n  transform: scale(1.1);\n  border: none;\n  box-shadow: 3px 3px 3px 1px #bcb6b6;\n}\n\nfooter {\n  border-top: 1px solid rgba(218, 114, 159, 0.1647058824);\n  border-bottom: 1px solid rgba(218, 114, 159, 0.1647058824);\n  background-color: rgba(46, 45, 45, 0.0588235294);\n  color: rgb(57, 56, 56);\n}\nfooter .footer-text {\n  text-align: center;\n}\nfooter .footer-name {\n  text-decoration: none;\n  color: #da729f;\n}\nfooter .love-created {\n  color: rgb(228, 40, 40);\n  font-size: 1.2em;\n}\n\n@media screen and (max-width: 767.9px) {\n  .container {\n    width: calc(100% - 1rem);\n  }\n  header .header-nav nav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  header .header-nav nav #hamberger {\n    display: inline-block;\n  }\n  header .header-nav #menu {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AASA;EACE,SAAA;EACA,UAAA;EACA,yBARG;EASH,cAVM;EAWN,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,iBAAA;AAPF;;AASA;EAAQ,cApBI;AAeZ;;AAOA;EACE,eAAA;EACA,qBAAA;AAJF;;AAMA;EAAU,wBAAA;AAFV;;AAIA;EACE,UAAA;EACA,iBAAA;EACA,cAAA;AADF;;AAIA;EACE,yBAjCM;EAkCN,YAAA;AADF;AAGE;EACE,aAAA;EACA,mBAAA;AADJ;AAKM;EACE,kBAAA;EACA,gBAAA;AAHR;AAMM;EACE,aAAA;EACA,kBAAA;AAJR;AAQI;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,kBAAA;AANN;AASQ;EAAI,YAAA;AANZ;AASU;EACE,cAAA;AAPZ;;AAeA;EACE,kBAAA;AAZF;;AAeA;EACE,aAAA;EACA,uBAAA;EACA,QAAA;EACA,eAAA;EACA,eAAA;AAZF;;AAeA;EACE,aAAA;EACA,sBAAA;AAZF;AAcE;EACE,eAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,gCAAA;AAZJ;AAeE;EACE,qBAAA;AAbJ;AAgBE;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAlHQ;AAoGZ;AAgBI;EACE,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;EACA,UAAA;AAdN;AAiBI;EACE,oBAAA;EACA,oBAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,cAjIE;EAkIF,gCAAA;AAfN;AAkBI;EACE,qBAAA;EACA,uBAAA;AAhBN;AAmBI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,iBAAA;EACA,qCAAA;EACA,WAAA;AAjBN;AAmBM;EACE,aAAA;EACA,wBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;EACA,cAAA;EACA,oBAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;AAjBR;AAmBQ;EACE,qBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAxKF;EAyKE,kBAAA;AAjBV;AAoBQ;EAAK,kBAAA;AAjBb;AAmBQ;;EAEE,YAAA;AAjBV;AAqBQ;EACE,qBAAA;EACA,oBAAA;EACA,wBAAA;EACA,iBAAA;AAnBV;AAuBQ;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;AArBV;AAuBU;;EAEE,gBAAA;EACA,UAAA;AArBZ;AAwBU;EACE,qBAAA;EACA,0BAAA;EACA,UAAA;EACA,yBAAA;EACA,wBAAA;EACA,eAAA;AAtBZ;AAwBY;EACE,yBAjNN;EAkNM,YAAA;AAtBd;AA2BQ;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AAzBV;AA6BQ;EACE,YAAA;EACA,cAAA;AA3BV;AAiCE;EACE,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,cA9OQ;AA+MZ;AAkCE;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mCAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,qBAtPI;AAsNR;AAmCE;EACE,yBA1PI;EA2PJ,WAAA;EACA,qBAAA;EACA,YAAA;EACA,mCAAA;AAjCJ;;AAqCA;EACE,uDAAA;EACA,0DAAA;EACA,gDAAA;EACA,sBAAA;AAlCF;AAoCE;EACE,kBAAA;AAlCJ;AAqCE;EACE,qBAAA;EACA,cA9QI;AA2OR;AAsCE;EACE,uBAAA;EACA,gBAAA;AApCJ;;AAwCA;EAEE;IAAa,wBAAA;EArCb;EAyCI;IACE,WAAA;IACA,aAAA;IACA,8BAAA;EAvCN;EAwCM;IAAa,qBAAA;EArCnB;EAuCI;IAAQ,aAAA;EApCZ;AACF","sourcesContent":["$themeDark: #3e3e3e;\n$themeBlue: #4183c4;\n// $theme: #e6573e;\n$theme: #da729f;\n$bg: #f1f1f1;\n$scroll: #6e6666;\n// import fonts @googleFonts\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: $bg;\n  color: $theme;\n  font-family: 'Fira Sans', sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\nsmall { color: $themeBlue; }\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n.hidden { display: none !important; }\n// container\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n// header\nheader {\n  background-color: $theme;\n  color: white;\n\n  .header-nav {\n    display: flex;\n    align-items: center;\n    // first-nav-part\n    nav {\n      // logo\n      #logo {\n        font-size: 2.25rem;\n        font-weight: 600;\n      }\n      // mobile-menu\n      #hamberger {\n        display: none;\n        font-size: 2.25rem;\n      }\n    }\n    // ul#menu\n    ul {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      list-style: none;\n      padding-left: 0;\n      margin-left: auto;\n      gap: 0.85rem 1.75rem;\n      text-transform: capitalize;\n      font-size: 1.15rem;\n      // links\n      li {\n        a { color: white; }\n\n        &:hover {\n          & > a {\n            color: #d4fffb;\n          }\n        }\n      }\n    }\n  }\n}\n// homepage\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n\n  .img-food {\n    cursor: pointer;\n    max-width: 25vw;\n    min-width: 25vw;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    transition: all 0.3s ease-in-out;\n  }\n\n  .img-food:hover {\n    transform: scale(1.1);\n  }\n\n  .food-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    color: $themeDark;\n\n    .food-name {\n      cursor: pointer;\n      margin-left: 0.5vw;\n      flex-wrap: nowrap;\n      max-width: 25vw;\n      min-width: 25vw;\n      width: 80%;\n    }\n\n    .love {\n      align-self: flex-end;\n      margin-right: 0.75vw;\n      margin-top: -4vw;\n      padding: 10px;\n      cursor: pointer;\n      font-size: x-large;\n      color: $theme;\n      transition: all 0.3s ease-in-out;\n    }\n\n    .love:hover {\n      transform: scale(1.3);\n      color: rgb(233, 54, 54);\n    }\n    // comments\n    .comment-box {\n      display: flex;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      min-height: 100vh;\n      background-color: rgba(0, 0, 0, 0.35);\n      z-index: 99;\n\n      .box-area {\n        display: flex;\n        width: calc(100% - 1rem);\n        max-width: 500px;\n        margin: 2rem auto;\n        flex-direction: column;\n        gap: 1rem;\n        background-color: white;\n        color: #3e3e3e;\n        padding: 1rem 0.5rem;\n        z-index: 999;\n        border-radius: 0.4rem;\n        overflow-y: scroll;\n        max-height: 70vh;\n\n        .btn-close {\n          display: inline-block;\n          margin-left: auto;\n          font-size: 1.5rem;\n          color: $theme;\n          margin-right: 1rem;\n        }\n\n        h3 { text-align: center; }\n\n        h3,\n        h4 {\n          margin: 1rem;\n        }\n\n        // img\n        img {\n          display: inline-block;\n          margin: 0.35rem auto;\n          width: calc(100% - 1rem);\n          object-fit: cover;\n        }\n\n        // comment-form\n        .comment-form {\n          display: flex;\n          flex-direction: column;\n          gap: 0.5rem;\n          padding: 0.5rem;\n\n          input,\n          textarea {\n            padding: 0.35rem;\n            outline: 0;\n          }\n\n          button[type=\"submit\"] {\n            display: inline-block;\n            text-transform: capitalize;\n            outline: 0;\n            border: 1px solid $theme;\n            padding: 0.35rem 0.85rem;\n            cursor: pointer;\n\n            &:hover {\n              background-color: $theme;\n              color: white;\n            }\n          }\n        }\n\n        .comments {\n          display: flex;\n          flex-direction: column;\n          gap: 1rem;\n          list-style: none;\n        }\n\n        // p\n        p {\n          margin: 1rem;\n          color: #6e6666;\n        }\n      }\n    }\n  }\n\n  .likes {\n    align-self: flex-end;\n    margin-top: -2vw;\n    margin-right: 0.5vw;\n    color: $themeDark;\n  }\n\n  .button {\n    width: fit-content;\n    padding: 5px 10px;\n    cursor: pointer;\n    box-shadow: 3px 3px 3px 1px $theme;\n    margin-top: 10px;\n    margin-left: 0.5vw;\n    transition: all 0.2s ease-in-out;\n    border-color: $theme;\n  }\n\n  .button:hover {\n    background-color: $theme;\n    color: #fff;\n    transform: scale(1.1);\n    border: none;\n    box-shadow: 3px 3px 3px 1px #bcb6b6;\n  }\n}\n// footer\nfooter {\n  border-top: 1px solid #da729f2a;\n  border-bottom: 1px solid #da729f2a;\n  background-color: #2e2d2d0f;\n  color: rgb(57, 56, 56);\n\n  .footer-text {\n    text-align: center;\n  }\n\n  .footer-name {\n    text-decoration: none;\n    color: $theme;\n  }\n\n  .love-created {\n    color: rgb(228, 40, 40);\n    font-size: 1.2em;\n  }\n}\n// RESPONSIVE CSS\n@media screen and (max-width: 767.9px) {\n  // Generics\n  .container { width: calc(100% - 1rem); }\n  // header-component\n  header {\n    .header-nav {\n      nav {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        #hamberger { display: inline-block; }\n      }\n      #menu { display: none; }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./src/modules/index.js");
/* eslint-disable import/extensions */
 // styles -> css or scss


(0,_modules__WEBPACK_IMPORTED_MODULE_1__.setupApp)(document.querySelector('#app')); // mounting our app


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footerComponent = (parentElement) => {
  const markups = `
    <h5 class="footer-text">Created with <span class="love-created">&hearts;</span> by 
      <a href="https://github.com/fickryiman" class="footer-name">Fickry Bil Iman</a> 
      && <a href="https://github.com/mahabubx7" class="footer-name">Mahabub</a>
      under CC License.
    </h5>
  `;

  parentElement.innerHTML = `${markups}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerComponent);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/extensions */

const headerComponent = (parentElement) => {
  const markups = `
  <nav class="container header-nav">
    <nav>
      <span id='logo'>food hobbies.</span>
      <span id='hamberger'><i class="ri-menu-3-line"></i></span>
    </nav>
    <ul id='menu'>
      <li><a href='#' data-page='home'>home</a></li>
      <li><a href='#' data-page='categories'>categories</a></li>
      <li><a href='#' data-page='search'>search meals</a></li>
    </ul>
  </nav>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerComponent);


/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */

const cards = document.querySelector('.cards');

const meals = [];
let count = 0;
const isLocalStorage = JSON.parse(localStorage.getItem('MEALS'));

const questionButton = document.querySelector('.question-button');
questionButton.addEventListener('click', () => {
  localStorage.removeItem('MEALS');
  window.location.reload();
});

const homepageComponent = () => {
  const getResponse = async () => {
    const mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';

    if (isLocalStorage) {
      return isLocalStorage;
    }

    while (count < 15) {
      const response = await fetch(mealAPI,
        {
          method: 'GET',
        });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      meals.push(data.meals);
      count += 1;
    }
    localStorage.setItem('MEALS', JSON.stringify(meals));
    return meals;
  };

  const getComments = async (itemId) => {
    let comments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments?item_id=${itemId}`,
      {
        method: 'GET',
      },
    );

    comments = await comments.json();
    return comments.error ? [] : comments;
  };

  getResponse().then((meals) => {
    const MealsData = meals;
    MealsData.map((meal) => {
      cards.innerHTML += `
      <div class="card">
        <img src="${meal[0].strMealThumb}" class="img-food">
        <div class="food-info">
          <p class="food-name">${meal[0].strMeal}</p>
          <input type="button" class="button" value="Comments" data-item="${meal[0].idMeal}">
          <div class="comment-box hidden" data-id="${meal[0].idMeal}">
            <div class="box-area">
            <span class="btn-close">
              <i class="ri-close-circle-line"></i>
            </span>
            <img src="${meal[0].strMealThumb}" alt="${meal[0].idMeal}" />
            <h3>${meal[0].strMeal}</h3>
            <p>
              <strong>${meal[0].strCategory}</strong>
              <i class="ri-git-commit-line"></i>
              <strong>${meal[0].strArea}</strong>
            </p>
            <h4>Top 3 Ingredients</h4>
            <p>
              <span>${meal[0].strIngredient1}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient2}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient3}</span>
            </p>
            <h4>Recent comments</h4>
            <form class="comment-form" data-id=${meal[0].idMeal}>
              <input name="username" type="text" placeholder="Your name." />
              <textarea name="comment" rows="5" placeholder="Write your comment."></textarea>
              <button type="submit">add comment</button>
            </form>
            <ul class="comments" data-id=${meal[0].idMeal}>
              <li>2023-04-19 Mahabub: This is delicious!</li>
            </ul>
            <small>source: ${meal[0].strSource}</small>
            </div>
          </div>
          <p class="love" data-id="${meal[0].idMeal}">&#10084;</p>
        </div>
        <p class="likes" >
          <span class="likes-counter" data-id="${meal[0].idMeal}">0</span>
          likes
        </p>
      </div>
      `;
    });
  }).then(async () => {
    // for comments [details pop-up]
    const commentBtns = cards.querySelectorAll('.button');
    async function renderComment(element) {
      // form
      let list = await getComments(element.dataset.id);
      async function renderComments() {
        // comment-list
        list = await getComments(element.dataset.id);
        const commentList = element.parentElement.querySelector('ul.comments');
        if (list.length > 0) {
          commentList.innerHTML = ''; // reset-first
          list.forEach((comment) => {
            commentList.innerHTML += `<li><i>${comment.creation_date}</i> <b>${comment.username}</b>: ${comment.comment}</li>`;
          });
        } else {
          commentList.innerHTML = '<li><i>No comments found yet!</i></li>';
        }
      }
      async function handleForm(itemId) {
        const newCommentObj = {
          username: element.querySelector('input').value,
          comment: element.querySelector('textarea').value,
        };
        await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments',
          {
            method: 'POST',
            body: JSON.stringify({ ...newCommentObj, item_id: `${itemId}` }),
          },
        ).then(() => {
          // fields reset
          element.querySelector('input').value = '';
          element.querySelector('textarea').value = '';
          renderComments(); // re-render comment list
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
      }

      renderComments(); // initial render

      element.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        handleForm(e.target.parentElement.dataset.id);
      });
    }
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.comment-box').forEach((box) => box.classList.add('hidden'));
        document.querySelectorAll('.comment-box').forEach(async (box) => box.classList.add('hidden'));
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.remove('hidden');
        renderComment(document.querySelector(`[data-id="${btn.dataset.item}"]`));
      });

      document.querySelector(`[data-id="${btn.dataset.item}"] .btn-close`).addEventListener('click', () => {
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.add('hidden');
      });
    });

    // get likes-counter
    const likesAPI = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes')
      .then((response) => response.json())
      .then((data) => data);

    const likesCounter = cards.querySelectorAll('.likes-counter');
    likesCounter.forEach((likeCounter) => {
      const likesId = likeCounter.getAttribute('data-id');
      const element = likeCounter;
      likesAPI.forEach((likeAPI) => {
        if (likesId === likeAPI.item_id) {
          element.innerHTML = likeAPI.likes;
        }
      });
    });

    // add or post likes-counter
    const likesButton = cards.querySelectorAll('.love');

    likesButton.forEach((likeButton) => {
      likeButton.addEventListener('click', (e) => {
        const targetCounter = e.target.parentElement.nextSibling.nextSibling.children[0].innerText;
        e.target.parentElement.nextSibling.nextSibling.children[0].innerText = (+targetCounter) + 1;

        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes', {
          method: 'POST',
          body: JSON.stringify({
            item_id: likeButton.getAttribute('data-id'),
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageComponent);


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupApp": () => (/* reexport safe */ _setup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.js */ "./src/modules/setup.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */





/***/ }),

/***/ "./src/modules/setup.js":
/*!******************************!*\
  !*** ./src/modules/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage */ "./src/components/homepage.js");
/* eslint-disable import/extensions */





const renderApp = async () => {
  const { body } = document;
  // header-init
  body.insertBefore(document.createElement('header'), document.querySelector('main'));
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])(body.querySelector('header')); // header-component-render

  // const markups = `
  //   <div class="container">
  //     <h1>Food Hobbies <small>JS capstone project</small></h1>
  //   </div>
  // `;
  // appContainer.innerHTML = `${markups}`;

  body.appendChild(document.createElement('cards'), document.querySelector('main'));
  (0,_components_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])(body.querySelector('cards'));

  body.appendChild(document.createElement('footer'), document.querySelector('main'));
  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])(body.querySelector('footer')); // footer-component-render
};

const setupApp = async (element) => {
  await renderApp(element); // render first-initial DOM
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupApp);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUs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Qjs7QUFFbkI7QUFDQSxFQUFFLDhEQUFlLGdDQUFnQztBQUNqRDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3NldHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuc21hbGwge1xcbiAgY29sb3I6ICM0MTgzYzQ7XFxufVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTcyOWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IG5hdiAjbG9nbyB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgbmF2ICNoYW1iZXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGdhcDogMC44NXJlbSAxLjc1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiB1bCBsaSBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIGxpOmhvdmVyID4gYSB7XFxuICBjb2xvcjogI2Q0ZmZmYjtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1dnc7XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDV2dztcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYXJkIC5pbWctZm9vZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4td2lkdGg6IDI1dnc7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmNhcmQgLmltZy1mb29kOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogIzNlM2UzZTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuZm9vZC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAubG92ZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXZ3O1xcbiAgbWFyZ2luLXRvcDogLTR2dztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICBjb2xvcjogI2RhNzI5ZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5sb3ZlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGNvbG9yOiByZ2IoMjMzLCA1NCwgNTQpO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICB6LWluZGV4OiA5OTk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmJ0bi1jbG9zZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNkYTcyOWY7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBoMyxcXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaDQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMC4zNXJlbSBhdXRvO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuMzVyZW07XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYTcyOWY7XFxuICBwYWRkaW5nOiAwLjM1cmVtIDAuODVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBwIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGNvbG9yOiAjNmU2NjY2O1xcbn1cXG4uY2FyZCAubGlrZXMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAtMnZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbn1cXG4uY2FyZCAuYnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICNkYTcyOWY7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItY29sb3I6ICNkYTcyOWY7XFxufVxcbi5jYXJkIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICNiY2I2YjY7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTgsIDExNCwgMTU5LCAwLjE2NDcwNTg4MjQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE4LCAxMTQsIDE1OSwgMC4xNjQ3MDU4ODI0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDQ1LCA0NSwgMC4wNTg4MjM1Mjk0KTtcXG4gIGNvbG9yOiByZ2IoNTcsIDU2LCA1Nik7XFxufVxcbmZvb3RlciAuZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbn1cXG5mb290ZXIgLmxvdmUtY3JlYXRlZCB7XFxuICBjb2xvcjogcmdiKDIyOCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICB9XFxuICBoZWFkZXIgLmhlYWRlci1uYXYgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2hhbWJlcmdlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiAjbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBUkc7RUFTSCxjQVZNO0VBV04sb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVNBO0VBQVEsY0FwQkk7QUFlWjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUpGOztBQU1BO0VBQVUsd0JBQUE7QUFGVjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQWpDTTtFQWtDTixZQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTk47QUFTUTtFQUFJLFlBQUE7QUFOWjtBQVNVO0VBQ0UsY0FBQTtBQVBaOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWkY7QUFjRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7QUFaSjtBQWVFO0VBQ0UscUJBQUE7QUFiSjtBQWdCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FsSFE7QUFvR1o7QUFnQkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWROO0FBaUJJO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBaklFO0VBa0lGLGdDQUFBO0FBZk47QUFrQkk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0FBaEJOO0FBbUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FBakJOO0FBbUJNO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWpCUjtBQW1CUTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBeEtGO0VBeUtFLGtCQUFBO0FBakJWO0FBb0JRO0VBQUssa0JBQUE7QUFqQmI7QUFtQlE7O0VBRUUsWUFBQTtBQWpCVjtBQXFCUTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBbkJWO0FBdUJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFyQlY7QUF1QlU7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0FBckJaO0FBd0JVO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQXRCWjtBQXdCWTtFQUNFLHlCQWpOTjtFQWtOTSxZQUFBO0FBdEJkO0FBMkJRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBekJWO0FBNkJRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUEzQlY7QUFpQ0U7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTlPUTtBQStNWjtBQWtDRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkF0UEk7QUFzTlI7QUFtQ0U7RUFDRSx5QkExUEk7RUEyUEosV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FBakNKOztBQXFDQTtFQUNFLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FBbENGO0FBb0NFO0VBQ0Usa0JBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxxQkFBQTtFQUNBLGNBOVFJO0FBMk9SO0FBc0NFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQXBDSjs7QUF3Q0E7RUFFRTtJQUFhLHdCQUFBO0VBckNiO0VBeUNJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQXZDTjtFQXdDTTtJQUFhLHFCQUFBO0VBckNuQjtFQXVDSTtJQUFRLGFBQUE7RUFwQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWVEYXJrOiAjM2UzZTNlO1xcbiR0aGVtZUJsdWU6ICM0MTgzYzQ7XFxuLy8gJHRoZW1lOiAjZTY1NzNlO1xcbiR0aGVtZTogI2RhNzI5ZjtcXG4kYmc6ICNmMWYxZjE7XFxuJHNjcm9sbDogIzZlNjY2NjtcXG4vLyBpbXBvcnQgZm9udHMgQGdvb2dsZUZvbnRzXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xcbiAgY29sb3I6ICR0aGVtZTtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbnNtYWxsIHsgY29sb3I6ICR0aGVtZUJsdWU7IH1cXG5cXG5hIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbi8vIGNvbnRhaW5lclxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogMTE0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi8vIGhlYWRlclxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICAuaGVhZGVyLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8vIGZpcnN0LW5hdi1wYXJ0XFxuICAgIG5hdiB7XFxuICAgICAgLy8gbG9nb1xcbiAgICAgICNsb2dvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgfVxcbiAgICAgIC8vIG1vYmlsZS1tZW51XFxuICAgICAgI2hhbWJlcmdlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAvLyB1bCNtZW51XFxuICAgIHVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBnYXA6IDAuODVyZW0gMS43NXJlbTtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICBmb250LXNpemU6IDEuMTVyZW07XFxuICAgICAgLy8gbGlua3NcXG4gICAgICBsaSB7XFxuICAgICAgICBhIHsgY29sb3I6IHdoaXRlOyB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgJiA+IGEge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZDRmZmZiO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbi8vIGhvbWVwYWdlXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1dnc7XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDV2dztcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAuaW1nLWZvb2Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgLmltZy1mb29kOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmZvb2QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogJHRoZW1lRGFyaztcXG5cXG4gICAgLmZvb2QtbmFtZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICAgICAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvdmUge1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC43NXZ3O1xcbiAgICAgIG1hcmdpbi10b3A6IC00dnc7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAgIGNvbG9yOiAkdGhlbWU7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLmxvdmU6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgICBjb2xvcjogcmdiKDIzMywgNTQsIDU0KTtcXG4gICAgfVxcbiAgICAvLyBjb21tZW50c1xcbiAgICAuY29tbWVudC1ib3gge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG5cXG4gICAgICAuYm94LWFyZWEge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGNvbG9yOiAjM2UzZTNlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICAgICAgICB6LWluZGV4OiA5OTk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcblxcbiAgICAgICAgLmJ0bi1jbG9zZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICBjb2xvcjogJHRoZW1lO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbiAgICAgICAgaDMsXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIGltZ1xcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBtYXJnaW46IDAuMzVyZW0gYXV0bztcXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIGNvbW1lbnQtZm9ybVxcbiAgICAgICAgLmNvbW1lbnQtZm9ybSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGdhcDogMC41cmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgICAgICAgIGlucHV0LFxcbiAgICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzVyZW0gMC44NXJlbTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWVudHMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBwXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICAgICAgICBjb2xvcjogIzZlNjY2NjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5saWtlcyB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAtMnZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbiAgICBjb2xvcjogJHRoZW1lRGFyaztcXG4gIH1cXG5cXG4gIC5idXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAkdGhlbWU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xcbiAgfVxcblxcbiAgLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggI2JjYjZiNjtcXG4gIH1cXG59XFxuLy8gZm9vdGVyXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGE3MjlmMmE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhNzI5ZjJhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDBmO1xcbiAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcXG5cXG4gIC5mb290ZXItdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5mb290ZXItbmFtZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICR0aGVtZTtcXG4gIH1cXG5cXG4gIC5sb3ZlLWNyZWF0ZWQge1xcbiAgICBjb2xvcjogcmdiKDIyOCwgNDAsIDQwKTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuLy8gUkVTUE9OU0lWRSBDU1NcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOXB4KSB7XFxuICAvLyBHZW5lcmljc1xcbiAgLmNvbnRhaW5lciB7IHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTsgfVxcbiAgLy8gaGVhZGVyLWNvbXBvbmVudFxcbiAgaGVhZGVyIHtcXG4gICAgLmhlYWRlci1uYXYge1xcbiAgICAgIG5hdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAjaGFtYmVyZ2VyIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgICAgfVxcbiAgICAgICNtZW51IHsgZGlzcGxheTogbm9uZTsgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsgLy8gc3R5bGVzIC0+IGNzcyBvciBzY3NzXG5pbXBvcnQgeyBzZXR1cEFwcCB9IGZyb20gJy4vbW9kdWxlcyc7XG5cbnNldHVwQXBwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSk7IC8vIG1vdW50aW5nIG91ciBhcHBcbiIsImNvbnN0IGZvb3RlckNvbXBvbmVudCA9IChwYXJlbnRFbGVtZW50KSA9PiB7XG4gIGNvbnN0IG1hcmt1cHMgPSBgXG4gICAgPGg1IGNsYXNzPVwiZm9vdGVyLXRleHRcIj5DcmVhdGVkIHdpdGggPHNwYW4gY2xhc3M9XCJsb3ZlLWNyZWF0ZWRcIj4maGVhcnRzOzwvc3Bhbj4gYnkgXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZpY2tyeWltYW5cIiBjbGFzcz1cImZvb3Rlci1uYW1lXCI+Rmlja3J5IEJpbCBJbWFuPC9hPiBcbiAgICAgICYmIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFoYWJ1Yng3XCIgY2xhc3M9XCJmb290ZXItbmFtZVwiPk1haGFidWI8L2E+XG4gICAgICB1bmRlciBDQyBMaWNlbnNlLlxuICAgIDwvaDU+XG4gIGA7XG5cbiAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBgJHttYXJrdXBzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXJDb21wb25lbnQ7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuY29uc3QgaGVhZGVyQ29tcG9uZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcbiAgY29uc3QgbWFya3VwcyA9IGBcbiAgPG5hdiBjbGFzcz1cImNvbnRhaW5lciBoZWFkZXItbmF2XCI+XG4gICAgPG5hdj5cbiAgICAgIDxzcGFuIGlkPSdsb2dvJz5mb29kIGhvYmJpZXMuPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9J2hhbWJlcmdlcic+PGkgY2xhc3M9XCJyaS1tZW51LTMtbGluZVwiPjwvaT48L3NwYW4+XG4gICAgPC9uYXY+XG4gICAgPHVsIGlkPSdtZW51Jz5cbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J2hvbWUnPmhvbWU8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J2NhdGVnb3JpZXMnPmNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J3NlYXJjaCc+c2VhcmNoIG1lYWxzPC9hPjwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG4gIGA7XG5cbiAgLy8gcmV0dXJuL0RPTS11cGRhdGVcbiAgcGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBgJHttYXJrdXBzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJDb21wb25lbnQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cblxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcblxuY29uc3QgbWVhbHMgPSBbXTtcbmxldCBjb3VudCA9IDA7XG5jb25zdCBpc0xvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01FQUxTJykpO1xuXG5jb25zdCBxdWVzdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbi1idXR0b24nKTtcbnF1ZXN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnTUVBTFMnKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmNvbnN0IGhvbWVwYWdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZWFsQVBJID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJztcblxuICAgIGlmIChpc0xvY2FsU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGlzTG9jYWxTdG9yYWdlO1xuICAgIH1cblxuICAgIHdoaWxlIChjb3VudCA8IDE1KSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1lYWxBUEksXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBtZWFscy5wdXNoKGRhdGEubWVhbHMpO1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01FQUxTJywgSlNPTi5zdHJpbmdpZnkobWVhbHMpKTtcbiAgICByZXR1cm4gbWVhbHM7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29tbWVudHMgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gICAgcmV0dXJuIGNvbW1lbnRzLmVycm9yID8gW10gOiBjb21tZW50cztcbiAgfTtcblxuICBnZXRSZXNwb25zZSgpLnRoZW4oKG1lYWxzKSA9PiB7XG4gICAgY29uc3QgTWVhbHNEYXRhID0gbWVhbHM7XG4gICAgTWVhbHNEYXRhLm1hcCgobWVhbCkgPT4ge1xuICAgICAgY2FyZHMuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHttZWFsWzBdLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cImltZy1mb29kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvb2QtbmFtZVwiPiR7bWVhbFswXS5zdHJNZWFsfTwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21tZW50c1wiIGRhdGEtaXRlbT1cIiR7bWVhbFswXS5pZE1lYWx9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtYm94IGhpZGRlblwiIGRhdGEtaWQ9XCIke21lYWxbMF0uaWRNZWFsfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1hcmVhXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1jbG9zZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWNsb3NlLWNpcmNsZS1saW5lXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke21lYWxbMF0uc3RyTWVhbFRodW1ifVwiIGFsdD1cIiR7bWVhbFswXS5pZE1lYWx9XCIgLz5cbiAgICAgICAgICAgIDxoMz4ke21lYWxbMF0uc3RyTWVhbH08L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+JHttZWFsWzBdLnN0ckNhdGVnb3J5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWdpdC1jb21taXQtbGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHN0cm9uZz4ke21lYWxbMF0uc3RyQXJlYX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoND5Ub3AgMyBJbmdyZWRpZW50czwvaDQ+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4+JHttZWFsWzBdLnN0ckluZ3JlZGllbnQxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1naXQtY29tbWl0LWxpbmVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPiR7bWVhbFswXS5zdHJJbmdyZWRpZW50Mn08L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktZ2l0LWNvbW1pdC1saW5lXCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj4ke21lYWxbMF0uc3RySW5ncmVkaWVudDN9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGg0PlJlY2VudCBjb21tZW50czwvaDQ+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiIGRhdGEtaWQ9JHttZWFsWzBdLmlkTWVhbH0+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLlwiIC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIGNvbW1lbnQuXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+YWRkIGNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzXCIgZGF0YS1pZD0ke21lYWxbMF0uaWRNZWFsfT5cbiAgICAgICAgICAgICAgPGxpPjIwMjMtMDQtMTkgTWFoYWJ1YjogVGhpcyBpcyBkZWxpY2lvdXMhPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c21hbGw+c291cmNlOiAke21lYWxbMF0uc3RyU291cmNlfTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImxvdmVcIiBkYXRhLWlkPVwiJHttZWFsWzBdLmlkTWVhbH1cIj4mIzEwMDg0OzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIiA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb3VudGVyXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+MDwvc3Bhbj5cbiAgICAgICAgICBsaWtlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfSk7XG4gIH0pLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgIC8vIGZvciBjb21tZW50cyBbZGV0YWlscyBwb3AtdXBdXG4gICAgY29uc3QgY29tbWVudEJ0bnMgPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XG4gICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ29tbWVudChlbGVtZW50KSB7XG4gICAgICAvLyBmb3JtXG4gICAgICBsZXQgbGlzdCA9IGF3YWl0IGdldENvbW1lbnRzKGVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICBhc3luYyBmdW5jdGlvbiByZW5kZXJDb21tZW50cygpIHtcbiAgICAgICAgLy8gY29tbWVudC1saXN0XG4gICAgICAgIGxpc3QgPSBhd2FpdCBnZXRDb21tZW50cyhlbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bC5jb21tZW50cycpO1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7IC8vIHJlc2V0LWZpcnN0XG4gICAgICAgICAgbGlzdC5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT48aT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2k+IDxiPiR7Y29tbWVudC51c2VybmFtZX08L2I+OiAke2NvbW1lbnQuY29tbWVudH08L2xpPmA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gJzxsaT48aT5ObyBjb21tZW50cyBmb3VuZCB5ZXQhPC9pPjwvbGk+JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybShpdGVtSWQpIHtcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudE9iaiA9IHtcbiAgICAgICAgICB1c2VybmFtZTogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlLFxuICAgICAgICAgIGNvbW1lbnQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2NvbW1lbnRzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4ubmV3Q29tbWVudE9iaiwgaXRlbV9pZDogYCR7aXRlbUlkfWAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmaWVsZHMgcmVzZXRcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICAgICAgICByZW5kZXJDb21tZW50cygpOyAvLyByZS1yZW5kZXIgY29tbWVudCBsaXN0XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckNvbW1lbnRzKCk7IC8vIGluaXRpYWwgcmVuZGVyXG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGFuZGxlRm9ybShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbW1lbnRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1ib3gnKS5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJveCcpLmZvckVhY2goYXN5bmMgKGJveCkgPT4gYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHJlbmRlckNvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXSAuYnRuLWNsb3NlYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBnZXQgbGlrZXMtY291bnRlclxuICAgIGNvbnN0IGxpa2VzQVBJID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2xpa2VzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuXG4gICAgY29uc3QgbGlrZXNDb3VudGVyID0gY2FyZHMucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzLWNvdW50ZXInKTtcbiAgICBsaWtlc0NvdW50ZXIuZm9yRWFjaCgobGlrZUNvdW50ZXIpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzSWQgPSBsaWtlQ291bnRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaWtlQ291bnRlcjtcbiAgICAgIGxpa2VzQVBJLmZvckVhY2goKGxpa2VBUEkpID0+IHtcbiAgICAgICAgaWYgKGxpa2VzSWQgPT09IGxpa2VBUEkuaXRlbV9pZCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbGlrZUFQSS5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgb3IgcG9zdCBsaWtlcy1jb3VudGVyXG4gICAgY29uc3QgbGlrZXNCdXR0b24gPSBjYXJkcy5xdWVyeVNlbGVjdG9yQWxsKCcubG92ZScpO1xuXG4gICAgbGlrZXNCdXR0b24uZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xuICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldENvdW50ZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQgPSAoK3RhcmdldENvdW50ZXIpICsgMTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvbGlrZXMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXRlbV9pZDogbGlrZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2VDb21wb25lbnQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IHNldHVwQXBwIGZyb20gJy4vc2V0dXAuanMnO1xuXG5leHBvcnQgeyBzZXR1cEFwcCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cblxuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBob21lcGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlJztcblxuY29uc3QgcmVuZGVyQXBwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICAvLyBoZWFkZXItaW5pdFxuICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcbiAgaGVhZGVyQ29tcG9uZW50KGJvZHkucXVlcnlTZWxlY3RvcignaGVhZGVyJykpOyAvLyBoZWFkZXItY29tcG9uZW50LXJlbmRlclxuXG4gIC8vIGNvbnN0IG1hcmt1cHMgPSBgXG4gIC8vICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAvLyAgICAgPGgxPkZvb2QgSG9iYmllcyA8c21hbGw+SlMgY2Fwc3RvbmUgcHJvamVjdDwvc21hbGw+PC9oMT5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gYDtcbiAgLy8gYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcblxuICBib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcmRzJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG4gIGhvbWVwYWdlQ29tcG9uZW50KGJvZHkucXVlcnlTZWxlY3RvcignY2FyZHMnKSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcbiAgZm9vdGVyQ29tcG9uZW50KGJvZHkucXVlcnlTZWxlY3RvcignZm9vdGVyJykpOyAvLyBmb290ZXItY29tcG9uZW50LXJlbmRlclxufTtcblxuY29uc3Qgc2V0dXBBcHAgPSBhc3luYyAoZWxlbWVudCkgPT4ge1xuICBhd2FpdCByZW5kZXJBcHAoZWxlbWVudCk7IC8vIHJlbmRlciBmaXJzdC1pbml0aWFsIERPTVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBBcHA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=