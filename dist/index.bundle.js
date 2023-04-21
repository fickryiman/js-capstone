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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/logo.png */ "./assets/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  background-color: #f1f1f1;\n  color: #da729f;\n  font-family: \"Fira Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsmall {\n  color: #4183c4;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n\nheader {\n  background-color: #da729f;\n  color: white;\n}\nheader .header-nav {\n  display: flex;\n  align-items: center;\n}\nheader .header-nav nav #logo {\n  font-size: 2.25rem;\n  font-weight: 600;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  display: block;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 10vw;\n  height: 4vw;\n}\nheader .header-nav nav #hamberger {\n  display: none;\n  font-size: 2.25rem;\n}\nheader .header-nav ul {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  list-style: none;\n  padding-left: 0;\n  margin-left: auto;\n  gap: 0.85rem 1.75rem;\n  text-transform: capitalize;\n  font-size: 1.15rem;\n}\nheader .header-nav ul li a {\n  color: white;\n}\nheader .header-nav ul li:hover > a {\n  color: #d4fffb;\n}\n\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n.question {\n  text-align: center;\n  color: #4183c4;\n}\n.question .question-button {\n  background-color: #4183c4;\n  color: #fff;\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\n}\n.question .question-button:hover {\n  background-color: #458de4;\n}\n.question .question-button:active {\n  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\n  transform: translateY(4px);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n.card .img-food {\n  cursor: pointer;\n  max-width: 25vw;\n  min-width: 25vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.card .img-food:hover {\n  transform: scale(1.1);\n}\n.card .food-info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: #3e3e3e;\n}\n.card .food-info .food-name {\n  cursor: pointer;\n  margin-left: 0.5vw;\n  flex-wrap: nowrap;\n  max-width: 25vw;\n  min-width: 25vw;\n  width: 80%;\n}\n.card .food-info .love {\n  align-self: flex-end;\n  margin-right: 0.75vw;\n  margin-top: -4vw;\n  padding: 10px;\n  cursor: pointer;\n  font-size: x-large;\n  color: #da729f;\n  transition: all 0.3s ease-in-out;\n}\n.card .food-info .love:hover {\n  transform: scale(1.3);\n  color: rgb(233, 54, 54);\n}\n.card .food-info .comment-box {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 99;\n}\n.card .food-info .comment-box .box-area {\n  display: flex;\n  width: calc(100% - 1rem);\n  max-width: 500px;\n  margin: 2rem auto;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: white;\n  color: #3e3e3e;\n  padding: 1rem 0.5rem;\n  z-index: 999;\n  border-radius: 0.4rem;\n  overflow-y: scroll;\n  max-height: 70vh;\n}\n.card .food-info .comment-box .box-area .btn-close {\n  display: inline-block;\n  margin-left: auto;\n  font-size: 1.5rem;\n  color: #da729f;\n  margin-right: 1rem;\n}\n.card .food-info .comment-box .box-area h3 {\n  text-align: center;\n}\n.card .food-info .comment-box .box-area h3,\n.card .food-info .comment-box .box-area h4 {\n  margin: 1rem;\n}\n.card .food-info .comment-box .box-area img {\n  display: inline-block;\n  margin: 0.35rem auto;\n  width: calc(100% - 1rem);\n  object-fit: cover;\n}\n.card .food-info .comment-box .box-area .comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n.card .food-info .comment-box .box-area .comment-form input,\n.card .food-info .comment-box .box-area .comment-form textarea {\n  padding: 0.35rem;\n  outline: 0;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit] {\n  display: inline-block;\n  text-transform: capitalize;\n  outline: 0;\n  border: 1px solid #da729f;\n  padding: 0.35rem 0.85rem;\n  cursor: pointer;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit]:hover {\n  background-color: #da729f;\n  color: white;\n}\n.card .food-info .comment-box .box-area .comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  list-style: none;\n}\n.card .food-info .comment-box .box-area p {\n  margin: 1rem;\n  color: #6e6666;\n}\n.card .likes {\n  align-self: flex-end;\n  margin-top: -2vw;\n  margin-right: 0.5vw;\n  color: #3e3e3e;\n}\n.card .button {\n  width: fit-content;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 1px #da729f;\n  margin-top: 10px;\n  margin-left: 0.5vw;\n  transition: all 0.2s ease-in-out;\n  border-color: #da729f;\n}\n.card .button:hover {\n  background-color: #da729f;\n  color: #fff;\n  border-color: rgba(0, 0, 0, 0.148);\n  box-shadow: 3px 3px 3px 1px #bcb6b6;\n}\n\nfooter {\n  border-top: 1px solid rgba(218, 114, 159, 0.1647058824);\n  border-bottom: 1px solid rgba(218, 114, 159, 0.1647058824);\n  background-color: rgba(46, 45, 45, 0.0588235294);\n  color: rgb(57, 56, 56);\n}\nfooter .footer-text {\n  text-align: center;\n}\nfooter .footer-name {\n  text-decoration: none;\n  color: #da729f;\n}\nfooter .love-created {\n  color: rgb(228, 40, 40);\n  font-size: 1.2em;\n}\n\n@media screen and (max-width: 767.9px) {\n  .container {\n    width: calc(100% - 1rem);\n  }\n  header .header-nav nav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  header .header-nav nav #hamberger {\n    display: inline-block;\n  }\n  header .header-nav #menu {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$themeDark: #3e3e3e;\r\n$themeBlue: #4183c4;\r\n// $theme: #e6573e;\r\n$theme: #da729f;\r\n$bg: #f1f1f1;\r\n$scroll: #6e6666;\r\n// import fonts @googleFonts\r\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap');\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: $bg;\r\n  color: $theme;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n}\r\nsmall { color: $themeBlue; }\r\n\r\na {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n.hidden { display: none !important; }\r\n// container\r\n.container {\r\n  width: 80%;\r\n  max-width: 1140px;\r\n  margin: 0 auto;\r\n}\r\n// header\r\nheader {\r\n  background-color: $theme;\r\n  color: white;\r\n\r\n  .header-nav {\r\n    display: flex;\r\n    align-items: center;\r\n    // first-nav-part\r\n    nav {\r\n      // logo\r\n      #logo {\r\n        font-size: 2.25rem;\r\n        font-weight: 600;\r\n        background: url('../assets/logo.png');\r\n        display: block;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        width: 10vw;\r\n        height: 4vw;\r\n      }\r\n      // mobile-menu\r\n      #hamberger {\r\n        display: none;\r\n        font-size: 2.25rem;\r\n      }\r\n    }\r\n    // ul#menu\r\n    ul {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: flex-end;\r\n      list-style: none;\r\n      padding-left: 0;\r\n      margin-left: auto;\r\n      gap: 0.85rem 1.75rem;\r\n      text-transform: capitalize;\r\n      font-size: 1.15rem;\r\n      // links\r\n      li {\r\n        a { color: white; }\r\n\r\n        &:hover {\r\n          & > a {\r\n            color: #d4fffb;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n// homepage\r\nmain {\r\n  margin-bottom: 5vw;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5vw;\r\n  flex-wrap: wrap;\r\n  margin-top: 5vw;\r\n}\r\n\r\n// options\r\n.question {\r\n  text-align: center;\r\n  color: $themeBlue;\r\n\r\n  .question-button {\r\n    background-color: $themeBlue;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\r\n  }\r\n\r\n  .question-button:hover {\r\n    background-color: #458de4;\r\n  }\r\n\r\n  .question-button:active {\r\n    box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\r\n    transform: translateY(4px);\r\n  }\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  .img-food {\r\n    cursor: pointer;\r\n    max-width: 25vw;\r\n    min-width: 25vw;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  .img-food:hover {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .food-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    margin-top: 10px;\r\n    color: $themeDark;\r\n\r\n    .food-name {\r\n      cursor: pointer;\r\n      margin-left: 0.5vw;\r\n      flex-wrap: nowrap;\r\n      max-width: 25vw;\r\n      min-width: 25vw;\r\n      width: 80%;\r\n    }\r\n\r\n    .love {\r\n      align-self: flex-end;\r\n      margin-right: 0.75vw;\r\n      margin-top: -4vw;\r\n      padding: 10px;\r\n      cursor: pointer;\r\n      font-size: x-large;\r\n      color: $theme;\r\n      transition: all 0.3s ease-in-out;\r\n    }\r\n\r\n    .love:hover {\r\n      transform: scale(1.3);\r\n      color: rgb(233, 54, 54);\r\n    }\r\n    // comments\r\n    .comment-box {\r\n      display: flex;\r\n      align-items: center;\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      min-height: 100vh;\r\n      background-color: rgba(0, 0, 0, 0.35);\r\n      z-index: 99;\r\n\r\n      .box-area {\r\n        display: flex;\r\n        width: calc(100% - 1rem);\r\n        max-width: 500px;\r\n        margin: 2rem auto;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n        background-color: white;\r\n        color: #3e3e3e;\r\n        padding: 1rem 0.5rem;\r\n        z-index: 999;\r\n        border-radius: 0.4rem;\r\n        overflow-y: scroll;\r\n        max-height: 70vh;\r\n\r\n        .btn-close {\r\n          display: inline-block;\r\n          margin-left: auto;\r\n          font-size: 1.5rem;\r\n          color: $theme;\r\n          margin-right: 1rem;\r\n        }\r\n\r\n        h3 { text-align: center; }\r\n\r\n        h3,\r\n        h4 {\r\n          margin: 1rem;\r\n        }\r\n\r\n        // img\r\n        img {\r\n          display: inline-block;\r\n          margin: 0.35rem auto;\r\n          width: calc(100% - 1rem);\r\n          object-fit: cover;\r\n        }\r\n\r\n        // comment-form\r\n        .comment-form {\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 0.5rem;\r\n          padding: 0.5rem;\r\n\r\n          input,\r\n          textarea {\r\n            padding: 0.35rem;\r\n            outline: 0;\r\n          }\r\n\r\n          button[type=\"submit\"] {\r\n            display: inline-block;\r\n            text-transform: capitalize;\r\n            outline: 0;\r\n            border: 1px solid $theme;\r\n            padding: 0.35rem 0.85rem;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n              background-color: $theme;\r\n              color: white;\r\n            }\r\n          }\r\n        }\r\n\r\n        .comments {\r\n          display: flex;\r\n          flex-direction: column;\r\n          gap: 1rem;\r\n          list-style: none;\r\n        }\r\n\r\n        // p\r\n        p {\r\n          margin: 1rem;\r\n          color: #6e6666;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .likes {\r\n    align-self: flex-end;\r\n    margin-top: -2vw;\r\n    margin-right: 0.5vw;\r\n    color: $themeDark;\r\n  }\r\n\r\n  .button {\r\n    width: fit-content;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    box-shadow: 3px 3px 3px 1px $theme;\r\n    margin-top: 10px;\r\n    margin-left: 0.5vw;\r\n    transition: all 0.2s ease-in-out;\r\n    border-color: $theme;\r\n  }\r\n\r\n  .button:hover {\r\n    background-color: $theme;\r\n    color: #fff;\r\n    border-color: rgba(0, 0, 0, 0.148);\r\n    box-shadow: 3px 3px 3px 1px #bcb6b6;\r\n  }\r\n}\r\n// footer\r\nfooter {\r\n  border-top: 1px solid #da729f2a;\r\n  border-bottom: 1px solid #da729f2a;\r\n  background-color: #2e2d2d0f;\r\n  color: rgb(57, 56, 56);\r\n\r\n  .footer-text {\r\n    text-align: center;\r\n  }\r\n\r\n  .footer-name {\r\n    text-decoration: none;\r\n    color: $theme;\r\n  }\r\n\r\n  .love-created {\r\n    color: rgb(228, 40, 40);\r\n    font-size: 1.2em;\r\n  }\r\n}\r\n// RESPONSIVE CSS\r\n@media screen and (max-width: 767.9px) {\r\n  // Generics\r\n  .container { width: calc(100% - 1rem); }\r\n  // header-component\r\n  header {\r\n    .header-nav {\r\n      nav {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        #hamberger { display: inline-block; }\r\n      }\r\n      #menu { display: none; }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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


(0,_modules__WEBPACK_IMPORTED_MODULE_1__.setupApp)(); // mounting our app


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
      <span id='logo'></span>
      <span id='hamberger'><i class="ri-menu-3-line"></i></span>
    </nav>
    <ul id='menu'>
      <li><a href='#' data-page='areas'>meal areas</a></li>
      <li><a href='#' data-page='categories'>meal categories</a></li>
      <li><a href='#' data-page='ingredients'>meal ingredients</a></li>
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
/* harmony import */ var _modules_commentCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/commentCounter */ "./src/modules/commentCounter.js");
/* harmony import */ var _modules_itemCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/itemCounter */ "./src/modules/itemCounter.js");
/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */




const homepageComponent = async (element) => {
  const meals = [];
  let count = 0;
  const isLocalStorage = JSON.parse(localStorage.getItem('MEALS'));

  const questionButton = document.querySelector('.question-button');
  questionButton.addEventListener('click', () => {
    localStorage.removeItem('MEALS');
    window.location.reload();
  });

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
      element.innerHTML += `
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
            <h4>Add a comments</h4>
            <form class="comment-form" data-id=${meal[0].idMeal}>
              <input name="username" type="text" placeholder="Your name." />
              <textarea name="comment" rows="5" placeholder="Your insights."></textarea>
              <button type="submit">add comment</button>
            </form>
            <h4 class="comment-count"></h4>
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
    const commentBtns = element.querySelectorAll('.button');

    async function renderComment(element) {
      // form
      let list = await getComments(element.dataset.id);

      async function renderComments() {
        // comment-list
        list = await getComments(element.dataset.id);
        const commentList = element.parentElement.querySelector('ul.comments');
        // const comments = commentList.parentElement.querySelector('[data-counter="comments"]');
        commentList.innerHTML = ''; // reset-first
        if (list.length > 0) {
          list.forEach((comment) => {
            commentList.innerHTML += `<li><i>${comment.creation_date}</i> <b>${comment.username}</b>: ${comment.comment}</li>`;
          });
        }
        const countHead = element.parentElement.querySelector('h4.comment-count');
        // console.log(countHead);
        await (0,_modules_commentCounter__WEBPACK_IMPORTED_MODULE_0__["default"])(list, countHead);
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
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
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

    const likesCounter = element.querySelectorAll('.likes-counter');
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
    const likesButton = element.querySelectorAll('.love');

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

    // item counter
    const itemCounter = document.querySelector('.item-counter');
    (0,_modules_itemCounter__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.parse(localStorage.getItem('MEALS')), itemCounter);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageComponent);


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = async (comment, header) => {
  if (comment.length === 0) header.innerHTML = 'Comments (0)';
  else {
    header.innerHTML = `Comments (${comment.length})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

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

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounterFunction = async (item, element) => {
  if (item.length === 0 || !item) {
    element.innerHTML = ' (0)';
  } else {
    element.innerHTML = ` (${item.length})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounterFunction);

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

  const cardsContainer = document.querySelector('.items');
  const cards = document.createElement('div');
  cards.classList.add('cards');
  await (0,_components_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])(cards);
  cardsContainer.appendChild(cards);
  // console.log(cards.innerHTML);
  // document.addEventListener('DOMContentLoaded', () => console.log('LOADED...!'));

  body.appendChild(document.createElement('footer'), document.querySelector('main'));
  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])(body.querySelector('footer')); // footer-component-render
};

const setupApp = async () => {
  await renderApp(); // render first-initial DOM
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupApp);


/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e748bc903c289e2c661.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJBQXVCLHVCQUF1QixHQUFHLHVCQUF1QiwwQkFBMEIsbUJBQW1CLEdBQUcsd0JBQXdCLDRCQUE0QixxQkFBcUIsR0FBRyw0Q0FBNEMsZ0JBQWdCLCtCQUErQixLQUFLLDRCQUE0QixrQkFBa0Isb0JBQW9CLHFDQUFxQyxLQUFLLHVDQUF1Qyw0QkFBNEIsS0FBSyw4QkFBOEIsb0JBQW9CLEtBQUssR0FBRyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sNkNBQTZDLHdCQUF3Qix1QkFBdUIsb0JBQW9CLGlCQUFpQixxQkFBcUIsNkdBQTZHLElBQUksSUFBSSxJQUFJLElBQUksbUJBQW1CLGNBQWMsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsb0JBQW9CLDJDQUEyQyxvQkFBb0IsNkJBQTZCLHFDQUFxQyxtQkFBbUIsd0JBQXdCLEtBQUssWUFBWSxvQkFBb0IsV0FBVyxzQkFBc0IsNEJBQTRCLEtBQUssY0FBYywyQkFBMkIsZ0NBQWdDLGlCQUFpQix3QkFBd0IscUJBQXFCLEtBQUsseUJBQXlCLCtCQUErQixtQkFBbUIsdUJBQXVCLHNCQUFzQiw0QkFBNEIsc0NBQXNDLGtDQUFrQywrQkFBK0IsNkJBQTZCLGtEQUFrRCwyQkFBMkIscUNBQXFDLHlDQUF5Qyx3QkFBd0Isd0JBQXdCLFdBQVcsOENBQThDLDBCQUEwQiwrQkFBK0IsV0FBVyxTQUFTLDhCQUE4Qix3QkFBd0IsOEJBQThCLG9DQUFvQywyQkFBMkIsMEJBQTBCLDRCQUE0QiwrQkFBK0IscUNBQXFDLDZCQUE2QixnQ0FBZ0MsZ0JBQWdCLGVBQWUseUJBQXlCLHFCQUFxQiwrQkFBK0IsZUFBZSxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLGdCQUFnQixvQkFBb0IsOEJBQThCLGVBQWUsc0JBQXNCLHNCQUFzQixLQUFLLGlDQUFpQyx5QkFBeUIsd0JBQXdCLDRCQUE0QixxQ0FBcUMsb0JBQW9CLDBCQUEwQixxQkFBcUIsd0JBQXdCLHFEQUFxRCxPQUFPLGtDQUFrQyxrQ0FBa0MsT0FBTyxtQ0FBbUMsbURBQW1ELG1DQUFtQyxPQUFPLEtBQUssZUFBZSxvQkFBb0IsNkJBQTZCLHFCQUFxQix3QkFBd0Isd0JBQXdCLHdCQUF3QixtREFBbUQseUNBQXlDLE9BQU8sMkJBQTJCLDhCQUE4QixPQUFPLHNCQUFzQixzQkFBc0IsK0JBQStCLHdCQUF3Qix1Q0FBdUMseUJBQXlCLDBCQUEwQix3QkFBd0IsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLDBCQUEwQixxQkFBcUIsU0FBUyxtQkFBbUIsK0JBQStCLCtCQUErQiwyQkFBMkIsd0JBQXdCLDBCQUEwQiw2QkFBNkIsd0JBQXdCLDJDQUEyQyxTQUFTLHlCQUF5QixnQ0FBZ0Msa0NBQWtDLFNBQVMseUNBQXlDLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQixrQkFBa0Isc0JBQXNCLDRCQUE0QixnREFBZ0Qsc0JBQXNCLHlCQUF5QiwwQkFBMEIscUNBQXFDLDZCQUE2Qiw4QkFBOEIsbUNBQW1DLHNCQUFzQixvQ0FBb0MsMkJBQTJCLGlDQUFpQyx5QkFBeUIsa0NBQWtDLCtCQUErQiw2QkFBNkIsNEJBQTRCLG9DQUFvQyxnQ0FBZ0MsZ0NBQWdDLDRCQUE0QixpQ0FBaUMsYUFBYSxxQkFBcUIscUJBQXFCLG1DQUFtQywyQkFBMkIsYUFBYSx1Q0FBdUMsb0NBQW9DLG1DQUFtQyx1Q0FBdUMsZ0NBQWdDLGFBQWEsMERBQTBELDRCQUE0QixxQ0FBcUMsMEJBQTBCLDhCQUE4QixnREFBZ0QsaUNBQWlDLDJCQUEyQixlQUFlLDJDQUEyQyxzQ0FBc0MsMkNBQTJDLDJCQUEyQix5Q0FBeUMseUNBQXlDLGdDQUFnQyw2QkFBNkIsMkNBQTJDLCtCQUErQixpQkFBaUIsZUFBZSxhQUFhLDJCQUEyQiw0QkFBNEIscUNBQXFDLHdCQUF3QiwrQkFBK0IsYUFBYSxtQ0FBbUMsMkJBQTJCLDZCQUE2QixhQUFhLFdBQVcsU0FBUyxPQUFPLGtCQUFrQiw2QkFBNkIseUJBQXlCLDRCQUE0QiwwQkFBMEIsT0FBTyxtQkFBbUIsMkJBQTJCLDBCQUEwQix3QkFBd0IsMkNBQTJDLHlCQUF5QiwyQkFBMkIseUNBQXlDLDZCQUE2QixPQUFPLHlCQUF5QixpQ0FBaUMsb0JBQW9CLDJDQUEyQyw0Q0FBNEMsT0FBTyxLQUFLLHlCQUF5QixzQ0FBc0MseUNBQXlDLGtDQUFrQyw2QkFBNkIsd0JBQXdCLDJCQUEyQixPQUFPLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLE9BQU8seUJBQXlCLGdDQUFnQyx5QkFBeUIsT0FBTyxLQUFLLGlFQUFpRSxvQ0FBb0MsMkJBQTJCLHVDQUF1QyxxQkFBcUIsZUFBZSx3QkFBd0IsMEJBQTBCLDJDQUEyQyx5QkFBeUIsd0JBQXdCLFdBQVcsa0JBQWtCLGdCQUFnQixTQUFTLE9BQU8sS0FBSyx1QkFBdUI7QUFDNTZlO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTZJO0FBQzdJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkhBQU87Ozs7QUFJdUY7QUFDL0csT0FBTyxpRUFBZSw2SEFBTyxJQUFJLG9JQUFjLEdBQUcsb0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFDdUIsQ0FBQztBQUNhO0FBQ3JDO0FBQ0Esa0RBQVEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDSlo7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNaOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQi9CO0FBQ0E7QUFDQTtBQUN1RDtBQUNFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SEFBdUgsT0FBTztBQUM5SDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRCw0RUFBNEUsZUFBZTtBQUMzRixxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUIsU0FBUyxlQUFlO0FBQ3JFLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBLGlEQUFpRCxlQUFlO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0EscUNBQXFDLGVBQWUsVUFBVTtBQUM5RDtBQUNBO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQixVQUFVLGlCQUFpQixRQUFRLGdCQUFnQjtBQUN4SCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtRUFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw4QkFBOEIsT0FBTyxHQUFHO0FBQzNFO0FBQ0EsaURBQWlEO0FBQ2pELGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGlCQUFpQjtBQUM3RCwwREFBMEQsaUJBQWlCO0FBQzNFLE9BQU87QUFDUDtBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsNENBQTRDLGlCQUFpQjtBQUM3RCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsK0NBQStDO0FBQy9DLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2TmpDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ1A3QjtBQUNBO0FBQ2tDO0FBQ2xDO0FBQ29COzs7Ozs7Ozs7Ozs7Ozs7QUNKcEI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSbEM7QUFDQTtBQUNtRDtBQUNBO0FBQ0k7QUFDdkQ7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0EsRUFBRSw4REFBZSxnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBZSxnQ0FBZ0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvc2V0dXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogI2RhNzI5ZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnNtYWxsIHtcXG4gIGNvbG9yOiAjNDE4M2M0O1xcbn1cXG5cXG5hIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogMTE0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE3MjlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2xvZ28ge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogNHZ3O1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgbmF2ICNoYW1iZXJnZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGdhcDogMC44NXJlbSAxLjc1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiB1bCBsaSBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIGxpOmhvdmVyID4gYSB7XFxuICBjb2xvcjogI2Q0ZmZmYjtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tYm90dG9tOiA1dnc7XFxufVxcblxcbi5jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi10b3A6IDV2dztcXG59XFxuXFxuLnF1ZXN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDE4M2M0O1xcbn1cXG4ucXVlc3Rpb24gLnF1ZXN0aW9uLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4M2M0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44MDUpO1xcbn1cXG4ucXVlc3Rpb24gLnF1ZXN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU4ZGU0O1xcbn1cXG4ucXVlc3Rpb24gLnF1ZXN0aW9uLWJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCAwLjVweCAwIHJnYmEoMCwgMCwgMCwgMC43MDUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY2FyZCAuaW1nLWZvb2Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5jYXJkIC5pbWctZm9vZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5jYXJkIC5mb29kLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgY29sb3I6ICMzZTNlM2U7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmZvb2QtbmFtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMC41dnc7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIG1heC13aWR0aDogMjV2dztcXG4gIG1pbi13aWR0aDogMjV2dztcXG4gIHdpZHRoOiA4MCU7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmxvdmUge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzV2dztcXG4gIG1hcmdpbi10b3A6IC00dnc7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgY29sb3I6ICNkYTcyOWY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAubG92ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICBjb2xvcjogcmdiKDIzMywgNTQsIDU0KTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogIzNlM2UzZTtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5idG4tY2xvc2Uge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaDMsXFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIGg0IHtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAuMzVyZW0gYXV0bztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSBpbnB1dCxcXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjM1cmVtO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50LWZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGE3MjlmO1xcbiAgcGFkZGluZzogMC4zNXJlbSAwLjg1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTcyOWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgcCB7XFxuICBtYXJnaW46IDFyZW07XFxuICBjb2xvcjogIzZlNjY2NjtcXG59XFxuLmNhcmQgLmxpa2VzIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogLTJ2dztcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxuICBjb2xvcjogIzNlM2UzZTtcXG59XFxuLmNhcmQgLmJ1dHRvbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAjZGE3MjlmO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLWNvbG9yOiAjZGE3MjlmO1xcbn1cXG4uY2FyZCAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTcyOWY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0OCk7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggI2JjYjZiNjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxOCwgMTE0LCAxNTksIDAuMTY0NzA1ODgyNCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTgsIDExNCwgMTU5LCAwLjE2NDcwNTg4MjQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgNDUsIDQ1LCAwLjA1ODgyMzUyOTQpO1xcbiAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcXG59XFxuZm9vdGVyIC5mb290ZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciAuZm9vdGVyLW5hbWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNkYTcyOWY7XFxufVxcbmZvb3RlciAubG92ZS1jcmVhdGVkIHtcXG4gIGNvbG9yOiByZ2IoMjI4LCA0MCwgNDApO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3LjlweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiBuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgaGVhZGVyIC5oZWFkZXItbmF2IG5hdiAjaGFtYmVyZ2VyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgaGVhZGVyIC5oZWFkZXItbmF2ICNtZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFSRztFQVNILGNBVk07RUFXTixvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBU0E7RUFBUSxjQXBCSTtBQWVaOztBQU9BO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBSkY7O0FBTUE7RUFBVSx3QkFBQTtBQUZWOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UseUJBakNNO0VBa0NOLFlBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtF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QSxnREFBQTtFQUNBLHNCQUFBO0FBdENGO0FBd0NFO0VBQ0Usa0JBQUE7QUF0Q0o7QUF5Q0U7RUFDRSxxQkFBQTtFQUNBLGNBM1NJO0FBb1FSO0FBMENFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQXhDSjs7QUE0Q0E7RUFFRTtJQUFhLHdCQUFBO0VBekNiO0VBNkNJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQTNDTjtFQTRDTTtJQUFhLHFCQUFBO0VBekNuQjtFQTJDSTtJQUFRLGFBQUE7RUF4Q1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWVEYXJrOiAjM2UzZTNlO1xcclxcbiR0aGVtZUJsdWU6ICM0MTgzYzQ7XFxyXFxuLy8gJHRoZW1lOiAjZTY1NzNlO1xcclxcbiR0aGVtZTogI2RhNzI5ZjtcXHJcXG4kYmc6ICNmMWYxZjE7XFxyXFxuJHNjcm9sbDogIzZlNjY2NjtcXHJcXG4vLyBpbXBvcnQgZm9udHMgQGdvb2dsZUZvbnRzXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xcclxcbiAgY29sb3I6ICR0aGVtZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbnNtYWxsIHsgY29sb3I6ICR0aGVtZUJsdWU7IH1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcclxcbi8vIGNvbnRhaW5lclxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1heC13aWR0aDogMTE0MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi8vIGhlYWRlclxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAuaGVhZGVyLW5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8vIGZpcnN0LW5hdi1wYXJ0XFxyXFxuICAgIG5hdiB7XFxyXFxuICAgICAgLy8gbG9nb1xcclxcbiAgICAgICNsb2dvIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9sb2dvLnBuZycpO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDR2dztcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLy8gbW9iaWxlLW1lbnVcXHJcXG4gICAgICAjaGFtYmVyZ2VyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC8vIHVsI21lbnVcXHJcXG4gICAgdWwge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgIGdhcDogMC44NXJlbSAxLjc1cmVtO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgICAvLyBsaW5rc1xcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIGEgeyBjb2xvcjogd2hpdGU7IH1cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAmID4gYSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNkNGZmZmI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gaG9tZXBhZ2VcXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXZ3O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBvcHRpb25zXFxyXFxuLnF1ZXN0aW9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAkdGhlbWVCbHVlO1xcclxcblxcclxcbiAgLnF1ZXN0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZUJsdWU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44MDUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnF1ZXN0aW9uLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NThkZTQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucXVlc3Rpb24tYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC41cHggMCByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgLmltZy1mb29kIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICAgIG1pbi13aWR0aDogMjV2dztcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWctZm9vZDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb29kLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgY29sb3I6ICR0aGVtZURhcms7XFxyXFxuXFxyXFxuICAgIC5mb29kLW5hbWUge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMC41dnc7XFxyXFxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICAgIG1pbi13aWR0aDogMjV2dztcXHJcXG4gICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb3ZlIHtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNzV2dztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAtNHZ3O1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgICBjb2xvcjogJHRoZW1lO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb3ZlOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxuICAgICAgY29sb3I6IHJnYigyMzMsIDU0LCA1NCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLy8gY29tbWVudHNcXHJcXG4gICAgLmNvbW1lbnQtYm94IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxyXFxuICAgICAgei1pbmRleDogOTk7XFxyXFxuXFxyXFxuICAgICAgLmJveC1hcmVhIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBjb2xvcjogIzNlM2UzZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcclxcbiAgICAgICAgei1pbmRleDogOTk5O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcXHJcXG5cXHJcXG4gICAgICAgIC5idG4tY2xvc2Uge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgY29sb3I6ICR0aGVtZTtcXHJcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDMgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG4gICAgICAgIGgzLFxcclxcbiAgICAgICAgaDQge1xcclxcbiAgICAgICAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAvLyBpbWdcXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgbWFyZ2luOiAwLjM1cmVtIGF1dG87XFxyXFxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXHJcXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAvLyBjb21tZW50LWZvcm1cXHJcXG4gICAgICAgIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcblxcclxcbiAgICAgICAgICBpbnB1dCxcXHJcXG4gICAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzVyZW07XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogMDtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1cmVtIDAuODVyZW07XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lO1xcclxcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNvbW1lbnRzIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLy8gcFxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgICAgICAgY29sb3I6ICM2ZTY2NjY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJ2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXHJcXG4gICAgY29sb3I6ICR0aGVtZURhcms7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggJHRoZW1lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41dnc7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBib3JkZXItY29sb3I6ICR0aGVtZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNDgpO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggI2JjYjZiNjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gZm9vdGVyXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGE3MjlmMmE7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhNzI5ZjJhO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDBmO1xcclxcbiAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcXHJcXG5cXHJcXG4gIC5mb290ZXItdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItbmFtZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICR0aGVtZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb3ZlLWNyZWF0ZWQge1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgNDAsIDQwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gUkVTUE9OU0lWRSBDU1NcXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOXB4KSB7XFxyXFxuICAvLyBHZW5lcmljc1xcclxcbiAgLmNvbnRhaW5lciB7IHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTsgfVxcclxcbiAgLy8gaGVhZGVyLWNvbXBvbmVudFxcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgLmhlYWRlci1uYXYge1xcclxcbiAgICAgIG5hdiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAjaGFtYmVyZ2VyIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgICNtZW51IHsgZGlzcGxheTogbm9uZTsgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsgLy8gc3R5bGVzIC0+IGNzcyBvciBzY3NzXHJcbmltcG9ydCB7IHNldHVwQXBwIH0gZnJvbSAnLi9tb2R1bGVzJztcclxuXHJcbnNldHVwQXBwKCk7IC8vIG1vdW50aW5nIG91ciBhcHBcclxuIiwiY29uc3QgZm9vdGVyQ29tcG9uZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICBjb25zdCBtYXJrdXBzID0gYFxyXG4gICAgPGg1IGNsYXNzPVwiZm9vdGVyLXRleHRcIj5DcmVhdGVkIHdpdGggPHNwYW4gY2xhc3M9XCJsb3ZlLWNyZWF0ZWRcIj4maGVhcnRzOzwvc3Bhbj4gYnkgXHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmlja3J5aW1hblwiIGNsYXNzPVwiZm9vdGVyLW5hbWVcIj5GaWNrcnkgQmlsIEltYW48L2E+IFxyXG4gICAgICAmJiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21haGFidWJ4N1wiIGNsYXNzPVwiZm9vdGVyLW5hbWVcIj5NYWhhYnViPC9hPlxyXG4gICAgICB1bmRlciBDQyBMaWNlbnNlLlxyXG4gICAgPC9oNT5cclxuICBgO1xyXG5cclxuICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlckNvbXBvbmVudDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG5cclxuY29uc3QgaGVhZGVyQ29tcG9uZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcclxuICBjb25zdCBtYXJrdXBzID0gYFxyXG4gIDxuYXYgY2xhc3M9XCJjb250YWluZXIgaGVhZGVyLW5hdlwiPlxyXG4gICAgPG5hdj5cclxuICAgICAgPHNwYW4gaWQ9J2xvZ28nPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gaWQ9J2hhbWJlcmdlcic+PGkgY2xhc3M9XCJyaS1tZW51LTMtbGluZVwiPjwvaT48L3NwYW4+XHJcbiAgICA8L25hdj5cclxuICAgIDx1bCBpZD0nbWVudSc+XHJcbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J2FyZWFzJz5tZWFsIGFyZWFzPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J2NhdGVnb3JpZXMnPm1lYWwgY2F0ZWdvcmllczwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj0nIycgZGF0YS1wYWdlPSdpbmdyZWRpZW50cyc+bWVhbCBpbmdyZWRpZW50czwvYT48L2xpPlxyXG4gICAgPC91bD5cclxuICA8L25hdj5cclxuICBgO1xyXG5cclxuICAvLyByZXR1cm4vRE9NLXVwZGF0ZVxyXG4gIHBhcmVudEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bWFya3Vwc31gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyQ29tcG9uZW50O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4uL21vZHVsZXMvY29tbWVudENvdW50ZXInO1xyXG5pbXBvcnQgaXRlbUNvdW50ZXJGdW5jdGlvbiBmcm9tICcuLi9tb2R1bGVzL2l0ZW1Db3VudGVyJztcclxuXHJcbmNvbnN0IGhvbWVwYWdlQ29tcG9uZW50ID0gYXN5bmMgKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCBtZWFscyA9IFtdO1xyXG4gIGxldCBjb3VudCA9IDA7XHJcbiAgY29uc3QgaXNMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNRUFMUycpKTtcclxuXHJcbiAgY29uc3QgcXVlc3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb24tYnV0dG9uJyk7XHJcbiAgcXVlc3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnTUVBTFMnKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0UmVzcG9uc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsQVBJID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJztcclxuXHJcbiAgICBpZiAoaXNMb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgcmV0dXJuIGlzTG9jYWxTdG9yYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChjb3VudCA8IDE1KSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWVhbEFQSSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgbWVhbHMucHVzaChkYXRhLm1lYWxzKTtcclxuICAgICAgY291bnQgKz0gMTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdNRUFMUycsIEpTT04uc3RyaW5naWZ5KG1lYWxzKSk7XHJcbiAgICByZXR1cm4gbWVhbHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XHJcbiAgICBsZXQgY29tbWVudHMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbW1lbnRzID0gYXdhaXQgY29tbWVudHMuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRzLmVycm9yID8gW10gOiBjb21tZW50cztcclxuICB9O1xyXG5cclxuICBnZXRSZXNwb25zZSgpLnRoZW4oKG1lYWxzKSA9PiB7XHJcbiAgICBjb25zdCBNZWFsc0RhdGEgPSBtZWFscztcclxuICAgIE1lYWxzRGF0YS5tYXAoKG1lYWwpID0+IHtcclxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHttZWFsWzBdLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cImltZy1mb29kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW5mb1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke21lYWxbMF0uc3RyTWVhbH08L3A+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21tZW50c1wiIGRhdGEtaXRlbT1cIiR7bWVhbFswXS5pZE1lYWx9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1ib3ggaGlkZGVuXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYXJlYVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktY2xvc2UtY2lyY2xlLWxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke21lYWxbMF0uc3RyTWVhbFRodW1ifVwiIGFsdD1cIiR7bWVhbFswXS5pZE1lYWx9XCIgLz5cclxuICAgICAgICAgICAgPGgzPiR7bWVhbFswXS5zdHJNZWFsfTwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+JHttZWFsWzBdLnN0ckNhdGVnb3J5fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktZ2l0LWNvbW1pdC1saW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+JHttZWFsWzBdLnN0ckFyZWF9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGg0PlRvcCAzIEluZ3JlZGllbnRzPC9oND5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+JHttZWFsWzBdLnN0ckluZ3JlZGllbnQxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWdpdC1jb21taXQtbGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Bhbj4ke21lYWxbMF0uc3RySW5ncmVkaWVudDJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktZ2l0LWNvbW1pdC1saW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuPiR7bWVhbFswXS5zdHJJbmdyZWRpZW50M308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGg0PkFkZCBhIGNvbW1lbnRzPC9oND5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIiBkYXRhLWlkPSR7bWVhbFswXS5pZE1lYWx9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLlwiIC8+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHMuXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5hZGQgY29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbW1lbnQtY291bnRcIj48L2g0PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiIGRhdGEtaWQ9JHttZWFsWzBdLmlkTWVhbH0+XHJcbiAgICAgICAgICAgICAgPGxpPjIwMjMtMDQtMTkgTWFoYWJ1YjogVGhpcyBpcyBkZWxpY2lvdXMhPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHNtYWxsPnNvdXJjZTogJHttZWFsWzBdLnN0clNvdXJjZX08L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJsb3ZlXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+JiMxMDA4NDs8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtY291bnRlclwiIGRhdGEtaWQ9XCIke21lYWxbMF0uaWRNZWFsfVwiPjA8L3NwYW4+XHJcbiAgICAgICAgICBsaWtlc1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuICB9KS50aGVuKGFzeW5jICgpID0+IHtcclxuICAgIC8vIGZvciBjb21tZW50cyBbZGV0YWlscyBwb3AtdXBdXHJcbiAgICBjb25zdCBjb21tZW50QnRucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlbmRlckNvbW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAvLyBmb3JtXHJcbiAgICAgIGxldCBsaXN0ID0gYXdhaXQgZ2V0Q29tbWVudHMoZWxlbWVudC5kYXRhc2V0LmlkKTtcclxuXHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIHJlbmRlckNvbW1lbnRzKCkge1xyXG4gICAgICAgIC8vIGNvbW1lbnQtbGlzdFxyXG4gICAgICAgIGxpc3QgPSBhd2FpdCBnZXRDb21tZW50cyhlbGVtZW50LmRhdGFzZXQuaWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgLy8gY29uc3QgY29tbWVudHMgPSBjb21tZW50TGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvdW50ZXI9XCJjb21tZW50c1wiXScpO1xyXG4gICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnOyAvLyByZXNldC1maXJzdFxyXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxpc3QuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT48aT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2k+IDxiPiR7Y29tbWVudC51c2VybmFtZX08L2I+OiAke2NvbW1lbnQuY29tbWVudH08L2xpPmA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY291bnRIZWFkID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0LmNvbW1lbnQtY291bnQnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudEhlYWQpO1xyXG4gICAgICAgIGF3YWl0IGNvbW1lbnRDb3VudGVyKGxpc3QsIGNvdW50SGVhZCk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybShpdGVtSWQpIHtcclxuICAgICAgICBjb25zdCBuZXdDb21tZW50T2JqID0ge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSxcclxuICAgICAgICAgIGNvbW1lbnQ6IGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2NvbW1lbnRzJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4ubmV3Q29tbWVudE9iaiwgaXRlbV9pZDogYCR7aXRlbUlkfWAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgLy8gZmllbGRzIHJlc2V0XHJcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgcmVuZGVyQ29tbWVudHMoKTsgLy8gcmUtcmVuZGVyIGNvbW1lbnQgbGlzdFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbmRlckNvbW1lbnRzKCk7IC8vIGluaXRpYWwgcmVuZGVyXHJcblxyXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYW5kbGVGb3JtKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29tbWVudEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1ib3gnKS5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYm94JykuZm9yRWFjaChhc3luYyAoYm94KSA9PiBib3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHJlbmRlckNvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXSAuYnRuLWNsb3NlYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZ2V0IGxpa2VzLWNvdW50ZXJcclxuICAgIGNvbnN0IGxpa2VzQVBJID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2xpa2VzJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBsaWtlc0NvdW50ZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1jb3VudGVyJyk7XHJcbiAgICBsaWtlc0NvdW50ZXIuZm9yRWFjaCgobGlrZUNvdW50ZXIpID0+IHtcclxuICAgICAgY29uc3QgbGlrZXNJZCA9IGxpa2VDb3VudGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gbGlrZUNvdW50ZXI7XHJcbiAgICAgIGxpa2VzQVBJLmZvckVhY2goKGxpa2VBUEkpID0+IHtcclxuICAgICAgICBpZiAobGlrZXNJZCA9PT0gbGlrZUFQSS5pdGVtX2lkKSB7XHJcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGxpa2VBUEkubGlrZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFkZCBvciBwb3N0IGxpa2VzLWNvdW50ZXJcclxuICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG92ZScpO1xyXG5cclxuICAgIGxpa2VzQnV0dG9uLmZvckVhY2goKGxpa2VCdXR0b24pID0+IHtcclxuICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q291bnRlciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gKCt0YXJnZXRDb3VudGVyKSArIDE7XHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9NY0lzWk9mM0VQMk5QY0pJZmlCcy9saWtlcycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBpdGVtX2lkOiBsaWtlQnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGl0ZW0gY291bnRlclxyXG4gICAgY29uc3QgaXRlbUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb3VudGVyJyk7XHJcbiAgICBpdGVtQ291bnRlckZ1bmN0aW9uKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01FQUxTJykpLCBpdGVtQ291bnRlcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZUNvbXBvbmVudDtcclxuIiwiY29uc3QgY29tbWVudENvdW50ZXIgPSBhc3luYyAoY29tbWVudCwgaGVhZGVyKSA9PiB7XHJcbiAgaWYgKGNvbW1lbnQubGVuZ3RoID09PSAwKSBoZWFkZXIuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICgwKSc7XHJcbiAgZWxzZSB7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvbW1lbnQubGVuZ3RofSlgO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cclxuaW1wb3J0IHNldHVwQXBwIGZyb20gJy4vc2V0dXAuanMnO1xyXG5cclxuZXhwb3J0IHsgc2V0dXBBcHAgfTtcclxuIiwiY29uc3QgaXRlbUNvdW50ZXJGdW5jdGlvbiA9IGFzeW5jIChpdGVtLCBlbGVtZW50KSA9PiB7XHJcbiAgaWYgKGl0ZW0ubGVuZ3RoID09PSAwIHx8ICFpdGVtKSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcgKDApJztcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgICgke2l0ZW0ubGVuZ3RofSlgO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyRnVuY3Rpb247IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cclxuXHJcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IGhvbWVwYWdlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UnO1xyXG5cclxuY29uc3QgcmVuZGVyQXBwID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XHJcbiAgLy8gaGVhZGVyLWluaXRcclxuICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpKTtcclxuICBoZWFkZXJDb21wb25lbnQoYm9keS5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7IC8vIGhlYWRlci1jb21wb25lbnQtcmVuZGVyXHJcblxyXG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xyXG4gIGF3YWl0IGhvbWVwYWdlQ29tcG9uZW50KGNhcmRzKTtcclxuICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkcyk7XHJcbiAgLy8gY29uc29sZS5sb2coY2FyZHMuaW5uZXJIVE1MKTtcclxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gY29uc29sZS5sb2coJ0xPQURFRC4uLiEnKSk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XHJcbiAgZm9vdGVyQ29tcG9uZW50KGJvZHkucXVlcnlTZWxlY3RvcignZm9vdGVyJykpOyAvLyBmb290ZXItY29tcG9uZW50LXJlbmRlclxyXG59O1xyXG5cclxuY29uc3Qgc2V0dXBBcHAgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgcmVuZGVyQXBwKCk7IC8vIHJlbmRlciBmaXJzdC1pbml0aWFsIERPTVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2V0dXBBcHA7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==