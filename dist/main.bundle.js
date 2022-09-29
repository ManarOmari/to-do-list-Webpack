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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#container {\r\n  width: 50vw;\r\n  background-color: #fff;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  box-shadow: 2px 2px 2px 2px rgba(211, 211, 211, 1);\r\n}\r\n\r\ntextarea,\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n#title {\r\n  padding-left: 9px;\r\n}\r\n\r\n#sync {\r\n  padding-right: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  margin: 0;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 50px;\r\n  padding: 0 9px 0 18px;\r\n  box-sizing: border-box;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.input {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  overflow: auto;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.text-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 48px;\r\n}\r\n\r\ntextarea {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  border: 0;\r\n  margin: 0 1px 0 0;\r\n  padding-left: 15px;\r\n  resize: none;\r\n  font-size: 16px;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-style: italic;\r\n  vertical-align: middle;\r\n}\r\n\r\n#clear {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-size: 16px;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n#clear:hover {\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n}\r\n\r\n.listed-task {\r\n  min-height: 50px;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  display: grid;\r\n  box-sizing: border-box;\r\n  grid-template-columns: 5fr 90fr 1fr;\r\n  align-items: center;\r\n  padding: 0 9px;\r\n  margin-top: 1px;\r\n}\r\n\r\n.check {\r\n  transform: scale(1.4);\r\n  outline-color: rgba(211, 211, 211, 0.3);\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  padding-right: 9px;\r\n  color: rgba(211, 211, 211, 0.5);\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-three-dots-vertical:hover {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\nsup {\r\n  color: red;\r\n  font-size: 16px;\r\n  font-family: monospace;\r\n  font-style: normal;\r\n}\r\n\r\n.bi-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n#return {\r\n  border: none;\r\n  background-color: #fff;\r\n  padding-right: 18px;\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;EAC1C,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,kDAAkD;AACpD;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,iDAAiD;EACjD,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iDAAiD;EACjD,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,0CAA0C;EAC1C,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gBAAgB;EAChB,iDAAiD;EACjD,aAAa;EACb,sBAAsB;EACtB,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css\");\r\n\r\nbody {\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#container {\r\n  width: 50vw;\r\n  background-color: #fff;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  box-shadow: 2px 2px 2px 2px rgba(211, 211, 211, 1);\r\n}\r\n\r\ntextarea,\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#refresh {\r\n  cursor: pointer;\r\n}\r\n\r\n#title {\r\n  padding-left: 9px;\r\n}\r\n\r\n#sync {\r\n  padding-right: 9px;\r\n  cursor: pointer;\r\n}\r\n\r\nh1 {\r\n  display: flex;\r\n  margin: 0;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 50px;\r\n  padding: 0 9px 0 18px;\r\n  box-sizing: border-box;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.input {\r\n  font-size: 16px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  overflow: auto;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.text-input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  height: 48px;\r\n}\r\n\r\ntextarea {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  border: 0;\r\n  margin: 0 1px 0 0;\r\n  padding-left: 15px;\r\n  resize: none;\r\n  font-size: 16px;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-style: italic;\r\n  vertical-align: middle;\r\n}\r\n\r\n#clear {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  background-color: rgba(211, 211, 211, 0.3);\r\n  font-size: 16px;\r\n  font-weight: 100;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n#clear:hover {\r\n  background-color: rgba(211, 211, 211, 0.5);\r\n}\r\n\r\n.listed-task {\r\n  min-height: 50px;\r\n  border-bottom: 2px solid rgba(211, 211, 211, 0.3);\r\n  display: grid;\r\n  box-sizing: border-box;\r\n  grid-template-columns: 5fr 90fr 1fr;\r\n  align-items: center;\r\n  padding: 0 9px;\r\n  margin-top: 1px;\r\n}\r\n\r\n.check {\r\n  transform: scale(1.4);\r\n  outline-color: rgba(211, 211, 211, 0.3);\r\n}\r\n\r\n#task-list {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  padding-right: 9px;\r\n  color: rgba(211, 211, 211, 0.5);\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-three-dots-vertical:hover {\r\n  color: rgb(255, 0, 0);\r\n}\r\n\r\nsup {\r\n  color: red;\r\n  font-size: 16px;\r\n  font-family: monospace;\r\n  font-style: normal;\r\n}\r\n\r\n.bi-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n#return {\r\n  border: none;\r\n  background-color: #fff;\r\n  padding-right: 18px;\r\n  font-size: x-large;\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
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

const clear = (event) => {
  event.preventDefault();
  let tasks = Task.task();
  tasks = tasks.filter((t) => t.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};

function showAllTasks() {
  const tasks = Task.task();
  const sup = document.querySelector('sup');
  let counter = 0;
  tasks.forEach((task) => {
    if (task.completed === true) {
      counter += 1;
      sup.textContent = counter;
    }
    Task.showTasks(task);
  });
}

document.addEventListener('DOMContentLoaded', showAllTasks());
const a= document.querySelector('.text-input');
console.log(a);
/*document.querySelector('.text-input').addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = Task.task();
  const taskItem = document.querySelector('textarea').value.trim();
  const task = new Task(taskItem, Object.keys(tasks).length + 1);
  Task.addTask(task);
  Task.showTasks(task);
  window.location.reload();
});

document.querySelector('.text-input').addEventListener('keyup', (e) => {
  e.preventDefault();
  const tasks = Task.task();
  if (e.key === 'Enter') {
    const taskItem = document.querySelector('textarea').value.trim();
    const task = new Task(taskItem, Object.keys(tasks).length + 1);
    Task.addTask(task);
    Task.showTasks(task);
    window.location.reload();
  }
});
*/
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
        let tasks = Task.task();
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
    const tasks = Task.task();
    tasks[(id - 1)].description = input;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
});

const checked = document.querySelectorAll('.check');

checked.forEach((check) => {
  check.addEventListener('change', (e) => {
    const tasks = Task.task();
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

//document.getElementById('clear').addEventListener('click', clear);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS44LjMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDIxMSwgMjExLCAyMTEsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSxcXHJcXG5pbnB1dCB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVmcmVzaCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N5bmMge1xcclxcbiAgcGFkZGluZy1yaWdodDogOXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgOXB4IDAgMThweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBtYXJnaW46IDAgMXB4IDAgMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0ZWQtdGFzayB7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgOTBmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA5cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdGhyZWUtZG90cy12ZXJ0aWNhbCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XFxyXFxuICBjb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdGhyZWUtZG90cy12ZXJ0aWNhbDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXRyYXNoIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3JldHVybiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1yaWdodDogMThweDtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0RBQWtEO0FBQ3BEOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjguMy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3NcXFwiKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMjExLCAyMTEsIDIxMSwgMSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLFxcclxcbmlucHV0IHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNyZWZyZXNoIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3luYyB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMCA5cHggMCAxOHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMyk7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG1hcmdpbjogMCAxcHggMCAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RlZC10YXNrIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjMpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciA5MGZyIDFmcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDlweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG4gIG91dGxpbmUtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5iaS10aHJlZS1kb3RzLXZlcnRpY2FsIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iaS10aHJlZS1kb3RzLXZlcnRpY2FsOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdHJhc2gge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmV0dXJuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgaW5kZXgpIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFzaygpIHtcclxuICAgIGxldCB0YXNrcztcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCkge1xyXG4gICAgICB0YXNrcyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXNrcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICAgIGNvbnN0IHRhc2tzID0gdGhpcy50YXNrKCk7XHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgdGFza0l0ZW0udmFsdWUgPSAnJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2hvd1Rhc2tzKHRhc2spIHtcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RlZC10YXNrJyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2suaW5kZXh9YCk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjb21wbGV0ZWQnLCBgJHt0YXNrLmNvbXBsZXRlZH1gKTtcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2snKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lucHV0Jyk7XHJcblxyXG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsJyk7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBgJHt0YXNrLmRlc2NyaXB0aW9ufWA7XHJcbiAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZChjaGVjaywgaW5wdXQsIGkpO1xyXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgdGFza3MgPSBUYXNrLnRhc2soKTtcclxuICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xyXG4gIGNvbnN0IHRhc2tzID0gVGFzay50YXNrKCk7XHJcbiAgY29uc3Qgc3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3VwJyk7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgIHN1cC50ZXh0Q29udGVudCA9IGNvdW50ZXI7XHJcbiAgICB9XHJcbiAgICBUYXNrLnNob3dUYXNrcyh0YXNrKTtcclxuICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNob3dBbGxUYXNrcygpKTtcclxuY29uc3QgYT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtaW5wdXQnKTtcclxuY29uc29sZS5sb2coYSk7XHJcbi8qZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tJdGVtLCBPYmplY3Qua2V5cyh0YXNrcykubGVuZ3RoICsgMSk7XHJcbiAgVGFzay5hZGRUYXNrKHRhc2spO1xyXG4gIFRhc2suc2hvd1Rhc2tzKHRhc2spO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFza3MgPSBUYXNrLnRhc2soKTtcclxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0l0ZW0sIE9iamVjdC5rZXlzKHRhc2tzKS5sZW5ndGggKyAxKTtcclxuICAgIFRhc2suYWRkVGFzayh0YXNrKTtcclxuICAgIFRhc2suc2hvd1Rhc2tzKHRhc2spO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxufSk7XHJcbiovXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmktdGhyZWUtZG90cy12ZXJ0aWNhbCcpO1xyXG5cclxubWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdiaS10cmFzaCcpKSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYmktdHJhc2gnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmktdHJhc2gnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYmktdHJhc2gnKSkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JpLXRyYXNoJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JpLXRyYXNoJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJpLXRyYXNoJyk7XHJcblxyXG4gICAgdHJhc2guZm9yRWFjaCgodHIpID0+IHtcclxuICAgICAgdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmVGFza3NCZWYgPSB0YXNrcy5zbGljZSgwLCBpZCk7XHJcbiAgICAgICAgbW9kaWZUYXNrc0JlZi5wb3AoKTtcclxuICAgICAgICBjb25zdCBtb2RpZlRhc2tzQWZ0ID0gdGFza3Muc2xpY2UoaWQpO1xyXG4gICAgICAgIG1vZGlmVGFza3NBZnQuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgdC5pbmRleCAtPSAxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAyICYmIGlkID09PSAxKSB7XHJcbiAgICAgICAgICB0YXNrcyA9IG1vZGlmVGFza3NBZnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrcy5sZW5ndGggPT09IDIgJiYgaWQgPT09IDIpIHtcclxuICAgICAgICAgIHRhc2tzID0gbW9kaWZUYXNrc0JlZjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFza3MgPSBbLi4ubW9kaWZUYXNrc0JlZiwgLi4ubW9kaWZUYXNrc0FmdF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgICAgIGNvbnN0IHN1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N1cCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5jb21wbGV0ZWQgPT09IHRydWUpO1xyXG4gICAgICAgIGlmIChjb21wbGV0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBzdXAudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3VwLnRleHRDb250ZW50ID0gY29tcGxldGVkLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XHJcblxyXG5lZGl0SW5wdXQuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMV0udmFsdWUudHJpbSgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhc2tzID0gVGFzay50YXNrKCk7XHJcbiAgICB0YXNrc1soaWQgLSAxKV0uZGVzY3JpcHRpb24gPSBpbnB1dDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpO1xyXG5cclxuY2hlY2tlZC5mb3JFYWNoKChjaGVjaykgPT4ge1xyXG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFRhc2sudGFzaygpO1xyXG4gICAgY29uc3QgeyBjaGVja2VkIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBzdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdXAnKTtcclxuXHJcbiAgICBpZiAoY2hlY2tlZCAmJiB0YXNrcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRhc2tzWyhpZCAtIDEpXS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkID09PSB0cnVlKTtcclxuICAgICAgc3VwLnRleHRDb250ZW50ID0gY29tcGxldGVkLmxlbmd0aDtcclxuICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH0gZWxzZSBpZiAoIWNoZWNrZWQgJiYgdGFza3MubGVuZ3RoID4gMSkge1xyXG4gICAgICB0YXNrc1soaWQgLSAxKV0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5jb21wbGV0ZWQgPT09IHRydWUpO1xyXG4gICAgICBzdXAudGV4dENvbnRlbnQgPSBjb21wbGV0ZWQubGVuZ3RoO1xyXG4gICAgICBlLnRhcmdldC5uZXh0U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH0gZWxzZSBpZiAoY2hlY2tlZCkge1xyXG4gICAgICB0YXNrc1swXS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICBzdXAudGV4dENvbnRlbnQgPSAxO1xyXG4gICAgICBlLnRhcmdldC5uZXh0U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza3NbMF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHN1cC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBlLnRhcmdldC5uZXh0U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==