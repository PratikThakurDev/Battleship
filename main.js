/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg: #121212;\n  --panel: #1e1e1e;\n  --primary: #03dac6;\n  --secondary: #bb86fc;\n  --text: #f1f1f1;\n  --hit: #ff5252;\n  --miss: #757575;\n  --ship: #4caf50;\n}\n\nbody {\n  font-family: 'Segoe UI', sans-serif;\n  background-color: var(--bg);\n  color: var(--text);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem;\n}\n\nh1 {\n  margin-bottom: 1.5rem;\n  color: var(--primary);\n}\n\n.button-row {\n  margin-bottom: 2rem;\n  display: flex;\n  gap: 1rem;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border: none;\n  background-color: var(--secondary);\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n\nbutton:hover {\n  background-color: #9f5efc;\n}\nbutton {\n  background-color: #bb86fc;\n  color: white;\n}\n\n.boards {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n}\n\n.board {\n  background-color: var(--panel);\n  padding: 10px;\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n  gap: 2px;\n  border-radius: 8px;\n}\n\n.cell {\n  width: 30px;\n  height: 30px;\n  background-color: #2c2c2c;\n  border: 1px solid #444;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.cell.miss {\n  background-color: var(--miss);\n}\n\n.cell.ship {\n  background-color: var(--ship);\n}\n\n.cell.hit {\n  background-color: var(--hit);\n}\n\n.label {\n  text-align: center;\n  margin-bottom: 0.5rem;\n  font-weight: bold;\n  color: var(--secondary);\n}\n\n#status {\n  margin-top: 2rem;\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n.status-message {\n  margin-top: 2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--primary);\n  text-align: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMstuff.js":
/*!*************************!*\
  !*** ./src/DOMstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toShowHits: () => (/* binding */ toShowHits),\n/* harmony export */   toShowMiss: () => (/* binding */ toShowMiss),\n/* harmony export */   toShowShips: () => (/* binding */ toShowShips),\n/* harmony export */   visualBoard: () => (/* binding */ visualBoard)\n/* harmony export */ });\n/* harmony import */ var _gameSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSetup */ \"./src/gameSetup.js\");\n\n\nconst visualBoard = (board) => {\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.dataset.row = i;\n      cell.dataset.column = j;\n      board.appendChild(cell);\n    }\n  }\n  return board;\n};\n\nconst toShowShips = (board) => {\n  const buckets = board;\n  const playerBoard = document.querySelector('#player-board');\n  const cells = playerBoard.querySelectorAll('.cell');\n  for (let i = 0; i < buckets.length; i++) {\n    for (let j = 0; j < buckets.length; j++) {\n      if (buckets[i][j][1] === 'X') {\n        cells.forEach((cell) => {\n          if (cell.dataset.row == i && cell.dataset.column == j) {\n            cell.classList.add('ship');\n          }\n        });\n      }\n    }\n  }\n};\n\nconst toShowHits = (board, activePlayerBoard) => {\n  const buckets = board;\n\n  const cells = activePlayerBoard.querySelectorAll('.cell');\n  for (let i = 0; i < buckets.length; i++) {\n    for (let j = 0; j < buckets.length; j++) {\n      if (buckets[i][j][1] === 'H') {\n        cells.forEach((cell) => {\n          if (cell.dataset.row == i && cell.dataset.column == j) {\n            cell.classList.add('hit');\n          }\n        });\n      }\n    }\n  }\n};\n\nconst toShowMiss = (board, activePlayerBoard) => {\n  const buckets = board;\n\n  const cells = activePlayerBoard.querySelectorAll('.cell');\n  for (let i = 0; i < buckets.length; i++) {\n    for (let j = 0; j < buckets.length; j++) {\n      if (buckets[i][j][1] === 'M') {\n        cells.forEach((cell) => {\n          if (cell.dataset.row == i && cell.dataset.column == j) {\n            cell.classList.add('miss');\n          }\n        });\n      }\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://template/./src/DOMstuff.js?");

/***/ }),

/***/ "./src/gameSetup.js":
/*!**************************!*\
  !*** ./src/gameSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard),\n/* harmony export */   shipPlacement: () => (/* binding */ shipPlacement)\n/* harmony export */ });\nconst GameBoard = () => {\n  const capacity = 10;\n  const buckets = Array.from({ length: capacity }, () => []);\n\n  for (let i = 0; i < capacity; i++) {\n    const bucket = buckets[i];\n    for (let j = 0; j < 10; j++) {\n      bucket.push([j, ' ']);\n    }\n  }\n  return buckets;\n};\n\nfunction hash(key) {\n  let hashCode = 0;\n\n  const primeNumber = 31;\n  for (let i = 0; i < key.length; i++) {\n    hashCode = primeNumber * hashCode + key.toUpperCase().charCodeAt(i);\n  }\n\n  return hashCode % 10;\n}\n\nconst shipPlacement = (buckets) => {\n  const placed = new Set();\n\n  const placeShip = (length) => {\n    let success = false;\n\n    while (!success) {\n      const direction = Math.floor(Math.random() * 2); // 0: vertical, 1: horizontal\n      const proposed = [];\n\n      if (direction === 0) {\n        const column = Math.floor(Math.random() * 10);\n        const startRow = Math.floor(Math.random() * (10 - length + 1));\n\n        for (let i = 0; i < length; i++) {\n          const row = startRow + i;\n          const key = `${row},${column}`;\n          if (placed.has(key)) break;\n          proposed.push(key);\n        }\n\n        if (proposed.length === length) {\n          proposed.forEach((key) => {\n            placed.add(key);\n            const [row, column] = key.split(',').map(Number);\n            const bucket = buckets[row];\n            for (let j = 0; j < bucket.length; j++) {\n              if (bucket[j][0] === column) bucket[j][1] = 'X';\n            }\n          });\n          success = true;\n        }\n      } else {\n        const row = Math.floor(Math.random() * 10);\n        const startColumn = Math.floor(Math.random() * (10 - length + 1));\n        const bucket = buckets[row];\n\n        for (let i = 0; i < length; i++) {\n          const column = startColumn + i;\n          const key = `${row},${column}`;\n          if (placed.has(key)) break;\n          proposed.push(key);\n        }\n\n        if (proposed.length === length) {\n          proposed.forEach((key) => {\n            placed.add(key);\n            const [row, column] = key.split(',').map(Number);\n            for (let j = 0; j < bucket.length; j++) {\n              if (bucket[j][0] === column) bucket[j][1] = 'X';\n            }\n          });\n          success = true;\n        }\n      }\n    }\n  };\n\n  placeShip(5);\n  placeShip(4);\n  placeShip(3);\n  placeShip(3);\n  placeShip(2);\n\n  return buckets;\n};\n\n\n\n\n\n\n//# sourceURL=webpack://template/./src/gameSetup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSetup */ \"./src/gameSetup.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOMstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMstuff */ \"./src/DOMstuff.js\");\n/* harmony import */ var _playingLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playingLogic */ \"./src/playingLogic.js\");\n\n\n\n\n\nlet compHitStack = [];\n\nconst playerBoard = document.querySelector('#player-board');\nconst enemyBoard = document.querySelector('#enemy-board');\nconst restartBtn = document.querySelector('#restart-btn');\nconst reshuffleBtn = document.querySelector('#reshuffle-btn');\nconst statusBox = document.querySelector('#status');\n\nlet hitByPlayer1 = 0;\nlet hitByPlayer2 = 0;\nlet playerBoards = [];\n\nconst setupGame = () => {\n  hitByPlayer1 = 0;\n  hitByPlayer2 = 0;\n  statusBox.textContent = '';\n\n  playerBoard.innerHTML = '';\n  enemyBoard.innerHTML = '';\n\n  playerBoards = [(0,_gameSetup__WEBPACK_IMPORTED_MODULE_0__.shipPlacement)((0,_gameSetup__WEBPACK_IMPORTED_MODULE_0__.GameBoard)()), (0,_gameSetup__WEBPACK_IMPORTED_MODULE_0__.shipPlacement)((0,_gameSetup__WEBPACK_IMPORTED_MODULE_0__.GameBoard)())];\n\n  (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.visualBoard)(playerBoard);\n  (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.visualBoard)(enemyBoard);\n  (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.toShowShips)(playerBoards[0]);\n\n  const enemyCells = enemyBoard.querySelectorAll('.cell');\n  enemyCells.forEach((cell) => {\n    cell.addEventListener('click', handleClick);\n  });\n}\n\nconst compMoves = () => {\n  \n  while (compHitStack.length > 0) {\n    const [row, col] = compHitStack.pop();\n\n    if (row >= 0 && row < 10 && col >= 0 && col < 10) {\n      const cell = playerBoards[0][row][col];\n      const status = cell[1];\n\n      if (status !== 'H' && status !== 'M') {\n        return [row, col];\n      }\n    }\n  }\n\n  let row, col, status;\n  do {\n    row = Math.floor(Math.random() * 10);\n    col = Math.floor(Math.random() * 10);\n    status = playerBoards[0][row][col][1];\n  } while (status === 'H' || status === 'M');\n\n  return [row, col];\n}\n\nconst handleClick = (event) => {\n  const clickedCell = event.target;\n  const row = Number(clickedCell.dataset.row);\n  const column = Number(clickedCell.dataset.column);\n  const coordinates = [row, column];\n\n  if (\n    clickedCell.classList.contains('hit') ||\n    clickedCell.classList.contains('miss')\n  )\n    return;\n\n  const attack1 = (0,_playingLogic__WEBPACK_IMPORTED_MODULE_3__.receiveAttack)(coordinates, playerBoards[1]);\n  if (attack1 === 'hit') {\n    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.toShowHits)(playerBoards[1], enemyBoard);\n    hitByPlayer1++;\n  } else if (attack1 === 'miss') {\n    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.toShowMiss)(playerBoards[1], enemyBoard);\n  }\n\n  if ((0,_playingLogic__WEBPACK_IMPORTED_MODULE_3__.checkWin)(hitByPlayer1, hitByPlayer2)) {\n    statusBox.textContent = '🎉 Player Wins!';\n    disableBoard();\n    return;\n  }\n\n  const compMove = compMoves();\n  const attack2 = (0,_playingLogic__WEBPACK_IMPORTED_MODULE_3__.receiveAttack)(compMove, playerBoards[0]);\n  if (attack2 === 'hit') {\n    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.toShowHits)(playerBoards[0], playerBoard);\n    hitByPlayer2++;\n    const [r, c] = compMove;\n    compHitStack.push([r - 1, c]); // up\n    compHitStack.push([r + 1, c]); // down\n    compHitStack.push([r, c - 1]); // left\n    compHitStack.push([r, c + 1]); // right\n  } else if (attack2 === 'miss') {\n    (0,_DOMstuff__WEBPACK_IMPORTED_MODULE_2__.toShowMiss)(playerBoards[0], playerBoard);\n  }\n\n  if ((0,_playingLogic__WEBPACK_IMPORTED_MODULE_3__.checkWin)(hitByPlayer1, hitByPlayer2)) {\n    statusBox.textContent = '💻 Computer Wins!';\n    disableBoard();\n    return;\n  }\n}\n\nconst disableBoard = () =>  {\n  const enemyCells = enemyBoard.querySelectorAll('.cell');\n  enemyCells.forEach((cell) => {\n    cell.replaceWith(cell.cloneNode(true)); // remove all event listeners\n  });\n}\n\n// Button handlers\nrestartBtn.addEventListener('click', setupGame);\nreshuffleBtn.addEventListener('click', setupGame);\n\n// Start the game on load\nsetupGame();\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/playingLogic.js":
/*!*****************************!*\
  !*** ./src/playingLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePlayerTurn: () => (/* binding */ changePlayerTurn),\n/* harmony export */   checkWin: () => (/* binding */ checkWin),\n/* harmony export */   receiveAttack: () => (/* binding */ receiveAttack)\n/* harmony export */ });\n/* harmony import */ var _gameSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameSetup */ \"./src/gameSetup.js\");\n\n\n\nconst receiveAttack = (coordinates, board) => {\n  const [row, column] = coordinates\n  if (row < 0 || row >= 10 || column < 0 || column >= 10) {\n    return null;\n  }\n\n  const bucket = board[row];\n  for (let i = 0; i < bucket.length; i++) {\n    if (bucket[i][0] === column) {\n      if (bucket[i][1] === 'X') {\n        bucket[i][1] = 'H';\n\n        return 'hit';\n      } else if (bucket[i][1] === ' ') {\n        bucket[i][1] = 'M';\n        return 'miss';\n      } else {\n        return 'you already played';\n      }\n    }\n  }\n};\n\nconst checkWin = (hitByPlayer1, hitByPlayer2) => {\n  if (hitByPlayer1 === 17 || hitByPlayer2 === 17) {\n    return true;\n  } else return false;\n};\n\nconst changePlayerTurn = (activePlayer) => {\n  if (activePlayer === 'player1') {\n    activePlayer = 'player2';\n  } else if (activePlayer === 'player2') {\n    activePlayer = 'player1';\n  }\n  return activePlayer;\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://template/./src/playingLogic.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;