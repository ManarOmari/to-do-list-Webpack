"use strict";
(self["webpackChunkto_do_list_webpack"] = self["webpackChunkto_do_list_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#container {\r\n  width: 50vw;\r\n  background-color: #fff;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  box-shadow: 2px 2px 2px 2px rgba(211, 211, 211, 1);\r\n}\r\n\r\ntextarea,\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n#title {\r\n  padding-left: 9px;\r\n}\r\n\r\n#sync {\r\n  padding-right: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  margin: 0;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 50px;\r\n  padding: 0 9px 0 18px;\r\n  box-sizing: border-box;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.input {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  overflow: auto;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.text-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 48px;\r\n}\r\n\r\ntextarea {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  border: 0;\r\n  margin: 0 1px 0 0;\r\n  padding-left: 15px;\r\n  resize: none;\r\n  font-size: 16px;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-style: italic;\r\n  vertical-align: middle;\r\n}\r\n\r\n#clear {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-size: 16px;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n#clear:hover {\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n}\r\n\r\n.listed-task {\r\n  min-height: 50px;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  display: grid;\r\n  box-sizing: border-box;\r\n  grid-template-columns: 5fr 90fr 1fr;\r\n  align-items: center;\r\n  padding: 0 9px;\r\n  margin-top: 1px;\r\n}\r\n\r\n.check {\r\n  transform: scale(1.4);\r\n  outline-color: rgba(211, 211, 211, 0.3);\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  padding-right: 9px;\r\n  color: rgba(211, 211, 211, 0.5);\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-three-dots-vertical:hover {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\nsup {\r\n  color: red;\r\n  font-size: 16px;\r\n  font-family: monospace;\r\n  font-style: normal;\r\n}\r\n\r\n.bi-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n#return {\r\n  border: none;\r\n  background-color: #fff;\r\n  padding-right: 18px;\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;EAC1C,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,kDAAkD;AACpD;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,iDAAiD;EACjD,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iDAAiD;EACjD,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,0CAA0C;EAC1C,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gBAAgB;EAChB,iDAAiD;EACjD,aAAa;EACb,sBAAsB;EACtB,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css\");\r\n\r\nbody {\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#container {\r\n  width: 50vw;\r\n  background-color: #fff;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  box-shadow: 2px 2px 2px 2px rgba(211, 211, 211, 1);\r\n}\r\n\r\ntextarea,\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n#title {\r\n  padding-left: 9px;\r\n}\r\n\r\n#sync {\r\n  padding-right: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  margin: 0;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 50px;\r\n  padding: 0 9px 0 18px;\r\n  box-sizing: border-box;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.input {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  overflow: auto;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.text-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 48px;\r\n}\r\n\r\ntextarea {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  border: 0;\r\n  margin: 0 1px 0 0;\r\n  padding-left: 15px;\r\n  resize: none;\r\n  font-size: 16px;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-style: italic;\r\n  vertical-align: middle;\r\n}\r\n\r\n#clear {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-size: 16px;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n#clear:hover {\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n}\r\n\r\n.listed-task {\r\n  min-height: 50px;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  display: grid;\r\n  box-sizing: border-box;\r\n  grid-template-columns: 5fr 90fr 1fr;\r\n  align-items: center;\r\n  padding: 0 9px;\r\n  margin-top: 1px;\r\n}\r\n\r\n.check {\r\n  transform: scale(1.4);\r\n  outline-color: rgba(211, 211, 211, 0.3);\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  padding-right: 9px;\r\n  color: rgba(211, 211, 211, 0.5);\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-three-dots-vertical:hover {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\nsup {\r\n  color: red;\r\n  font-size: 16px;\r\n  font-family: monospace;\r\n  font-style: normal;\r\n}\r\n\r\n.bi-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n#return {\r\n  border: none;\r\n  background-color: #fff;\r\n  padding-right: 18px;\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/update.js */ "./src/module/update.js");
/* harmony import */ var _module_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/filter.js */ "./src/module/filter.js");




function showAllTasks() {
  const tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
  const sup = document.querySelector('sup');
  let counter = 0;
  tasks.forEach((task) => {
    if (task.completed === true) {
      counter += 1;
      sup.textContent = counter;
    }
    _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTasks(task);
  });
}
document.addEventListener('DOMContentLoaded', showAllTasks());

document.querySelector('.text-input').addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
  const taskItem = document.querySelector('textarea').value.trim();
  const task = new _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskItem, Object.keys(tasks).length + 1);
  _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(task);
  _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTasks(task);
  window.location.reload();
});

document.querySelector('.text-input').addEventListener('keyup', (e) => {
  e.preventDefault();
  const tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
  if (e.key === 'Enter') {
    const taskItem = document.querySelector('textarea').value.trim();
    const task = new _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskItem, Object.keys(tasks).length + 1);
    _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(task);
    _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].showTasks(task);
    window.location.reload();
  }
});

const menu = document.querySelectorAll('.bi-three-dots-vertical');

menu.forEach((item) => {
  item.addEventListener('mouseover', () => {
    if (!item.classList.contains('bi-trash')) {
      item.classList.add('bi-trash');
    } else {
      item.classList.remove('bi-trash');
    }
  });
  item.addEventListener('mouseout', () => {
    if (!item.classList.contains('bi-trash')) {
      item.classList.add('bi-trash');
    } else {
      item.classList.remove('bi-trash');
    }
  });
  item.addEventListener('click', () => {
    const trash = document.querySelectorAll('.bi-trash');

    trash.forEach((tr) => {
      tr.addEventListener('click', (e) => {
        let tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
        e.target.parentNode.style.display = 'none';
        const { id } = e.target.parentNode;
        const modifTasksBef = tasks.slice(0, id);
        modifTasksBef.pop();
        const modifTasksAft = tasks.slice(id);
        modifTasksAft.forEach((t) => {
          t.index -= 1;
        });

        if (tasks.length === 2 && id === 1) {
          tasks = modifTasksAft;
        } else if (tasks.length === 2 && id === 2) {
          tasks = modifTasksBef;
        } else {
          tasks = [...modifTasksBef, ...modifTasksAft];
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));
        const sup = document.querySelector('sup');
        const completed = tasks.filter((t) => t.completed === true);
        if (completed.length === 0) {
          sup.textContent = '';
        } else {
          sup.textContent = completed.length;
        }
      });
    });
  });
});

const editInput = document.querySelectorAll('.input');

editInput.forEach((input) => {
  input.addEventListener('change', (e) => {
    const input = e.target.parentNode.childNodes[1].value.trim();
    const { id } = e.target.parentNode;
    const tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
    tasks[(id - 1)].description = input;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});

const checked = document.querySelectorAll('.check');

checked.forEach((check) => {
  check.addEventListener('change', (e) => {
    const tasks = _module_update_js__WEBPACK_IMPORTED_MODULE_1__["default"].task();
    const { checked } = e.target;
    const { id } = e.target.parentNode;
    const sup = document.querySelector('sup');

    if (checked && tasks.length > 1) {
      tasks[(id - 1)].completed = true;
      const completed = tasks.filter((t) => t.completed === true);
      sup.textContent = completed.length;
      e.target.nextSibling.style.textDecoration = 'line-through';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else if (!checked && tasks.length > 1) {
      tasks[(id - 1)].completed = false;
      const completed = tasks.filter((t) => t.completed === true);
      sup.textContent = completed.length;
      e.target.nextSibling.style.textDecoration = 'none';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else if (checked) {
      tasks[0].completed = true;
      sup.textContent = 1;
      e.target.nextSibling.style.textDecoration = 'line-through';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks[0].completed = false;
      sup.textContent = '';
      e.target.nextSibling.style.textDecoration = 'none';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
});

document.getElementById('clear').addEventListener('click', _module_filter_js__WEBPACK_IMPORTED_MODULE_2__.clear);

/***/ }),

/***/ "./src/module/filter.js":
/*!******************************!*\
  !*** ./src/module/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ "./src/module/update.js");
/* eslint-disable import/prefer-default-export */


const clear = (event) => {
  event.preventDefault();
  let tasks = _update_js__WEBPACK_IMPORTED_MODULE_0__["default"].task();
  tasks = tasks.filter((t) => t.completed !== true);
  tasks.forEach((e, i) => {
    e.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  _update_js__WEBPACK_IMPORTED_MODULE_0__["default"].showTasks(tasks);
  window.location.reload();
};

/***/ }),

/***/ "./src/module/update.js":
/*!******************************!*\
  !*** ./src/module/update.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(description, index) {
      this.description = description;
      this.completed = false;
      this.index = index;
    }
  
    static task() {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      return tasks;
    }
  
    static addTask(task) {
      const taskItem = document.querySelector('textarea');
      const tasks = this.task();
      tasks.push(task);
      taskItem.value = '';
      localStorage.setItem('tasks', JSON.stringify(tasks));
      window.location.reload();
    }
  
    static showTasks(task) {
      const taskList = document.getElementById('task-list');
  
      const div = document.createElement('div');
      div.setAttribute('draggable', 'true');
      div.setAttribute('class', 'listed-task');
      div.setAttribute('id', `${task.index}`);
      div.setAttribute('completed', `${task.completed}`);
  
      const check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      check.setAttribute('class', 'check');
  
      const input = document.createElement('input');
      input.setAttribute('class', 'input');
  
      const i = document.createElement('i');
      i.setAttribute('class', 'bi bi-three-dots-vertical');
  
      input.value = `${task.description}`;
      if (task.completed === true) {
        input.style.textDecoration = 'line-through';
        check.checked = true;
      } else {
        input.style.textDecoration = 'none';
        check.checked = false;
      }
      div.append(check, input, i);
      taskList.appendChild(div);
    }
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7QUFDSDtBQUNBLEVBQUUsNERBQWM7QUFDaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQyx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGUvZmlsdGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGUvdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuOC4zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgyMTEsIDIxMSwgMjExLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEsXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3JlZnJlc2gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XFxyXFxufVxcclxcblxcclxcbiNzeW5jIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDlweCAwIDE4cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbWFyZ2luOiAwIDFweCAwIDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdGVkLXRhc2sge1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDkwZnIgMWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgOXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXRocmVlLWRvdHMtdmVydGljYWwge1xcclxcbiAgcGFkZGluZy1yaWdodDogOXB4O1xcclxcbiAgY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXRocmVlLWRvdHMtdmVydGljYWw6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5iaS10cmFzaCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNyZXR1cm4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwwQ0FBMEM7RUFDMUMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGtEQUFrRDtBQUNwRDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpREFBaUQ7RUFDakQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS44LjMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXFxcIik7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDIxMSwgMjExLCAyMTEsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSxcXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMge1xcclxcbiAgcGFkZGluZy1yaWdodDogOXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgOXB4IDAgMThweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBtYXJnaW46IDAgMXB4IDAgMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0ZWQtdGFzayB7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgOTBmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA5cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdGhyZWUtZG90cy12ZXJ0aWNhbCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XFxyXFxuICBjb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdGhyZWUtZG90cy12ZXJ0aWNhbDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXRyYXNoIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3JldHVybiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1yaWdodDogMThweDtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGUvdXBkYXRlLmpzJztcclxuaW1wb3J0IHsgY2xlYXIgfSBmcm9tICcuL21vZHVsZS9maWx0ZXIuanMnO1xyXG5cclxuZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xyXG4gIGNvbnN0IHRhc2tzID0gVGFzay50YXNrKCk7XHJcbiAgY29uc3Qgc3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3VwJyk7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgIHN1cC50ZXh0Q29udGVudCA9IGNvdW50ZXI7XHJcbiAgICB9XHJcbiAgICBUYXNrLnNob3dUYXNrcyh0YXNrKTtcclxuICB9KTtcclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd0FsbFRhc2tzKCkpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tJdGVtLCBPYmplY3Qua2V5cyh0YXNrcykubGVuZ3RoICsgMSk7XHJcbiAgVGFzay5hZGRUYXNrKHRhc2spO1xyXG4gIFRhc2suc2hvd1Rhc2tzKHRhc2spO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFza3MgPSBUYXNrLnRhc2soKTtcclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0l0ZW0sIE9iamVjdC5rZXlzKHRhc2tzKS5sZW5ndGggKyAxKTtcclxuICAgIFRhc2suYWRkVGFzayh0YXNrKTtcclxuICAgIFRhc2suc2hvd1Rhc2tzKHRhc2spO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJpLXRocmVlLWRvdHMtdmVydGljYWwnKTtcclxuXHJcbm1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYmktdHJhc2gnKSkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JpLXRyYXNoJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JpLXRyYXNoJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2JpLXRyYXNoJykpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdiaS10cmFzaCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiaS10cmFzaCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iaS10cmFzaCcpO1xyXG5cclxuICAgIHRyYXNoLmZvckVhY2goKHRyKSA9PiB7XHJcbiAgICAgIHRyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgdGFza3MgPSBUYXNrLnRhc2soKTtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgICAgICBjb25zdCBtb2RpZlRhc2tzQmVmID0gdGFza3Muc2xpY2UoMCwgaWQpO1xyXG4gICAgICAgIG1vZGlmVGFza3NCZWYucG9wKCk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZUYXNrc0FmdCA9IHRhc2tzLnNsaWNlKGlkKTtcclxuICAgICAgICBtb2RpZlRhc2tzQWZ0LmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgIHQuaW5kZXggLT0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMiAmJiBpZCA9PT0gMSkge1xyXG4gICAgICAgICAgdGFza3MgPSBtb2RpZlRhc2tzQWZ0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID09PSAyICYmIGlkID09PSAyKSB7XHJcbiAgICAgICAgICB0YXNrcyA9IG1vZGlmVGFza3NCZWY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhc2tzID0gWy4uLm1vZGlmVGFza3NCZWYsIC4uLm1vZGlmVGFza3NBZnRdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgICAgICBjb25zdCBzdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdXAnKTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkID09PSB0cnVlKTtcclxuICAgICAgICBpZiAoY29tcGxldGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgc3VwLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1cC50ZXh0Q29udGVudCA9IGNvbXBsZXRlZC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xyXG5cclxuZWRpdElucHV0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gICAgdGFza3NbKGlkIC0gMSldLmRlc2NyaXB0aW9uID0gaW5wdXQ7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKTtcclxuXHJcbmNoZWNrZWQuZm9yRWFjaCgoY2hlY2spID0+IHtcclxuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFza3MgPSBUYXNrLnRhc2soKTtcclxuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3Qgc3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3VwJyk7XHJcblxyXG4gICAgaWYgKGNoZWNrZWQgJiYgdGFza3MubGVuZ3RoID4gMSkge1xyXG4gICAgICB0YXNrc1soaWQgLSAxKV0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgY29uc3QgY29tcGxldGVkID0gdGFza3MuZmlsdGVyKCh0KSA9PiB0LmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XHJcbiAgICAgIHN1cC50ZXh0Q29udGVudCA9IGNvbXBsZXRlZC5sZW5ndGg7XHJcbiAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9IGVsc2UgaWYgKCFjaGVja2VkICYmIHRhc2tzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgdGFza3NbKGlkIC0gMSldLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkID09PSB0cnVlKTtcclxuICAgICAgc3VwLnRleHRDb250ZW50ID0gY29tcGxldGVkLmxlbmd0aDtcclxuICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgdGFza3NbMF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgc3VwLnRleHRDb250ZW50ID0gMTtcclxuICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tzWzBdLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdXAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcik7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL3VwZGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0KSA9PiB0LmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XHJcbiAgdGFza3MuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgZS5pbmRleCA9IGkgKyAxO1xyXG4gIH0pO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgVGFzay5zaG93VGFza3ModGFza3MpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBpbmRleCkge1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyB0YXNrKCkge1xyXG4gICAgICBsZXQgdGFza3M7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRhc2tzID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2soKTtcclxuICAgICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgdGFza0l0ZW0udmFsdWUgPSAnJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIHNob3dUYXNrcyh0YXNrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG4gIFxyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdGVkLXRhc2snKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrLmluZGV4fWApO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnLCBgJHt0YXNrLmNvbXBsZXRlZH1gKTtcclxuICBcclxuICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVjaycpO1xyXG4gIFxyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXQnKTtcclxuICBcclxuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JpIGJpLXRocmVlLWRvdHMtdmVydGljYWwnKTtcclxuICBcclxuICAgICAgaW5wdXQudmFsdWUgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XHJcbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdi5hcHBlbmQoY2hlY2ssIGlucHV0LCBpKTtcclxuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9