/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#container {\\r\\n  background-color: rgb(186, 212, 238);\\r\\n}\\r\\n\\r\\n.grid-container {\\r\\n  display: inline-grid;\\r\\n  grid-template-columns: repeat(10, 50px);\\r\\n  grid-template-rows: repeat(10, 50px);\\r\\n  margin: 40px;\\r\\n  -webkit-box-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\n-moz-box-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\nbox-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\n}\\r\\n\\r\\n.form-container {\\r\\n  display: inline-grid;\\r\\n  grid-template-rows: repeat(7, 60px);\\r\\n  grid-template-columns: repeat(4, 100px);\\r\\n  margin: 50px 30px 30px 60px;\\r\\n  float: left;\\r\\n  background-color: rgb(139, 152, 218);\\r\\n  padding:20px;\\r\\n  border-radius: 25px;\\r\\n  border: 2px solid rgb(58, 58, 58);\\r\\n  -webkit-box-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\n-moz-box-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\nbox-shadow: 7px 2px 75px 25px rgba(0,0,0,0.8);\\r\\n}\\r\\n\\r\\n.form-item{\\r\\n  height: 60px;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.grid-item {\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  border: solid 1px black;\\r\\n}\\r\\n\\r\\n.grid-item:hover {\\r\\n  background-color: gray;\\r\\n}\\r\\n.grid-item:active {\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.ship-input {\\r\\n  width: 60px;\\r\\n}\\r\\n.btn-start-game {\\r\\n  height: 50px;\\r\\n  width: 120px;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n#playerBoard{\\r\\n  float:right;\\r\\n}\\r\\nfooter {\\r\\n  position:absolute;\\r\\n  bottom:0;\\r\\n  width:100%;\\r\\n  display: block;\\r\\n  text-align:center;\\r\\n}\\r\\n#footerID{\\r\\n  padding-bottom:50px;\\r\\n\\r\\n}\\r\\n#footerText{\\r\\n  padding-top:10px;\\r\\n  text-align: center;\\r\\n}\\r\\n#colorMeaning{\\r\\n  margin-bottom: 50px;\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    float: right;\\r\\n    padding: 20px;\\r\\n    right: 10px;\\r\\n    bottom: 0;\\r\\n    position: absolute;\\r\\n    text-align: right;\\r\\n}\\r\\n#headerID {\\r\\n  display:none;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 68px;\\r\\n  z-index: 10;\\r\\n  background: #dffdff;\\r\\n  -webkit-box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);\\r\\n  -moz-box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);\\r\\n  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.12);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.headerText {\\r\\n  text-align: center;\\r\\n  padding-left:150px;\\r\\n  padding-right:150px;\\r\\n  display: inline;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesheets/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */\n\nconst dom = (() => {\n  const gridNode = (string) => {\n    const grid = document.createElement('div');\n    grid.setAttribute('id', string);\n    grid.classList.add('grid-container', 'hidden');\n\n    for (let i = 0; i < 100; i++) {\n      const gridItem = document.createElement('div');\n      gridItem.classList.add('grid-item');\n      if (string === 'computerBoard') {\n        gridItem.classList.add('computerBoardItem');\n      } else {\n        gridItem.classList.add('playerBoardItem');\n      }\n      gridItem.setAttribute('data', i);\n\n      grid.appendChild(gridItem);\n    }\n\n    return grid;\n  };\n\n  const createGrid = (string) => {\n    const footercontainer = document.getElementById('footerID');\n    const gameStartContainer = document.getElementById('game-start');\n    if (string === 'computerBoard') {\n      const header = document.getElementById('headerID');\n      const button = document.createElement('button');\n      button.classList.add('btn-start-game');\n      button.setAttribute('onClick', 'window.location.reload()');\n      button.innerHTML = 'Reset game';\n      footercontainer.appendChild(button);\n      header.style.display = 'block';\n    }\n    const grids = gridNode(string);\n    gameStartContainer.appendChild(grids);\n  };\n\n  const hideForm = () => {\n    document.getElementById('form-containerz').outerHTML = '';\n  };\n  return { createGrid, gridNode, hideForm };\n})();\n\nmodule.exports = dom;\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/*! exports provided: gameLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameLoop\", function() { return gameLoop; });\n/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/styles.css */ \"./src/stylesheets/styles.css\");\n/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable */\n\n\nconst ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst gameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\nconst player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst dom = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\nconst gameLoop = () => {\n  const gameBoards = [gameBoard(), gameBoard()];\n  dom.createGrid('playerBoard');\n  const players = [player('Player'), player('Computer')];\n  const setButtons = document.getElementsByClassName('setButton');\n  window.alert(\n    'Hello and welcome to Battleship game! Start'\n       + 'the game by typing the coordinates from A-J plus 0-9.');\n  for (let i = 0; i < setButtons.length; i++) {\n    setButtons[i].onclick = (event) => {\n      const coordinates = document.getElementsByClassName('ship-input');\n      const position = document.getElementsByClassName('position-input');\n      const index = event.target.getAttribute('data');\n      const array = coordinates[index].value.split('');\n      const shipCoordinates = createCoordinates(array);\n      if (shipCoordinates !== false) {\n        const ships = ship(6 - index);\n        removeShipFromFleet(ships.length);\n        const success = gameBoards[0].place(\n          shipCoordinates,\n          ships,\n          position[index].value);\n        if (!success) {\n          window.alert('Wrong coordinates!');\n        }\n        refreshGrid();\n      }\n    };\n  }\n\n  const removeButtons = document.getElementsByClassName('removeButton');\n  for (let i = 0; i < removeButtons.length; i++) {\n    removeButtons[i].onclick = (event) => {\n      const index = event.target.getAttribute('data');\n      removeShipFromFleet(6 - index);\n      refreshGrid();\n    };\n  }\n\n  const removeShipFromFleet = (shipLength) => {\n    for (let i = 0; i < gameBoards[0].fleet.length; i++) {\n      if (gameBoards[0].fleet[i].ship.length === shipLength) {\n        for (let j = 0; j <= gameBoards[0].fleet[i].pos.length; j += 1) {\n          gameBoards[0].board[gameBoards[0].fleet[i].pos[j]] = 'o';\n        }\n        gameBoards[0].fleet.splice(i, 1);\n        refreshGrid();\n        return true;\n      }\n    }\n    return false;\n  };\n\n  const refreshGrid = () => {\n    const boardBoxes = document.getElementsByClassName('playerBoardItem');\n    for (let i = 0; i < gameBoards[0].board.length; i++) {\n      if (gameBoards[0].board[i] === 'o') {\n        boardBoxes[i].style.background = null;\n      } else {\n        boardBoxes[i].style.background = 'red';\n      }\n    }\n    for (let i = 0; i < gameBoards[0].misses.length; i++) {\n      boardBoxes[gameBoards[0].misses[i]].style.background = 'yellow';\n    }\n    for (let i = 0; i < gameBoards[0].hits.length; i++) {\n      boardBoxes[gameBoards[0].hits[i]].style.background = 'green';\n    }\n  };\n\n  const refreshGrids = () => {\n    const boardBoxes = document.getElementsByClassName('computerBoardItem');\n    for (let i = 0; i < gameBoards[1].misses.length; i++) {\n      boardBoxes[gameBoards[1].misses[i]].style.background = 'yellow';\n    }\n    for (let i = 0; i < gameBoards[1].hits.length; i++) {\n      boardBoxes[gameBoards[1].hits[i]].style.background = 'green';\n    }\n  };\n\n  const addListeners = () => {\n    const index = event.target.getAttribute('data');\n    const playerMove = players[0].attack(parseInt(index));\n    const recieve = gameBoards[1].receiveAttack(playerMove);\n    const loseComputer = gameBoards[1].sunkFleet();\n    if (loseComputer === true) {\n      window.alert('You win, congratulations!');\n      const boxes = document.getElementsByClassName('computerBoardItem');\n      for (const box of boxes) {\n        box.removeEventListener('click', addListeners);\n      }\n    }\n    if (recieve !== true) {\n      let computerMove = players[1].computerAttack();\n      let recieveComputer = gameBoards[0].receiveAttack(computerMove);\n      while (recieveComputer === true) {\n        computerMove = players[1].computerAttack();\n        recieveComputer = gameBoards[0].receiveAttack(computerMove);\n        const lose = gameBoards[0].sunkFleet();\n        if (lose === true) {\n          window.alert('You lose!');\n          recieveComputer = false;\n          const boxes = document.getElementsByClassName('computerBoardItem');\n          for (const box of boxes) {\n            box.removeEventListener('click', addListeners);\n          }\n        }\n      }\n      const lose = gameBoards[0].sunkFleet();\n      if (lose === true) {\n        window.alert('You lose!');\n        const boxes = document.getElementsByClassName('computerBoardItem');\n        for (const box of boxes) {\n          box.removeEventListener('click', addListeners);\n        }\n      }\n    }\n    refreshGrids();\n    refreshGrid();\n    event.target.removeEventListener('click', addListeners);\n  };\n\n  document\n    .getElementsByClassName('btn-start-game')[0]\n    .addEventListener('click', () => {\n      if (gameBoards[0].fleet.length === 5) {\n        startGame();\n      } else {\n        window.alert('You didn\\'t place all your ships.');\n      }\n    });\n\n  const createCoordinates = (array) => {\n    const number = parseInt(array[1], 10);\n    if (array.length === 0) {\n      window.alert('Wrong input');\n      return false;\n    }\n    switch (array[0].toUpperCase()) {\n      case 'A':\n        return number;\n      case 'B':\n        return 10 + number;\n      case 'C':\n        return 20 + number;\n      case 'D':\n        return 30 + number;\n      case 'E':\n        return 40 + number;\n      case 'F':\n        return 50 + number;\n      case 'G':\n        return 60 + number;\n      case 'H':\n        return 70 + number;\n      case 'I':\n        return 80 + number;\n      case 'J':\n        return 90 + number;\n\n      default:\n        window.alert('Wrong input');\n        return false;\n    }\n  };\n\n  const startGame = () => {\n    dom.createGrid('computerBoard');\n    dom.hideForm();\n    const boxes = document.getElementsByClassName('computerBoardItem');\n    for (const box of boxes) {\n      box.addEventListener('click', addListeners);\n    }\n    for (let i = 2; i < 7; i += 1) {\n      const shipCreate = ship(i);\n      const placement = gameBoards[1].randomPlacement(i);\n      const success = gameBoards[1].place(\n        placement.coor,\n        shipCreate,\n        placement.position,);\n      if (!success) {\n        i--;\n      }\n    }\n    return true;\n  };\n\n  const winner = () => {\n    if (gameBoards[0].sunkFleet()) {\n      return players[1].name;\n    }\n    if (gameBoards[1].sunkFleet()) {\n      return players[0].name;\n    }\n    return false;\n  };\n\n  return {\n    gameLoop,\n    gameBoards,\n    winner,};\n};\n\n\n\n\n//# sourceURL=webpack:///./src/game-loop.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */\nconst gameBoard = () => {\n  const board = Array.from(Array(100).fill('o'));\n  const fleet = [];\n  const hits = [];\n  const misses = [];\n  const findShip = (coor) => {\n    if (board[coor] === 'o') {\n      return false;\n    }\n    return [board[coor], coor];\n  };\n\n  const place = (coor, ship, position) => {\n    const secret = coor\n      .toString(10)\n      .split('')\n      .map((t) => parseInt(t));\n\n    if (coor > 99 || coor < 0) {\n      return false;\n    }\n\n    if (position === 'Horizon') {\n      if (secret[1] > 9 - ship.length) {\n        return false;\n      }\n    } else if (secret[0] > 9 - ship.length) {\n      return false;\n    }\n    for (let i = 0; i < ship.length; i += 1) {\n      if (position === 'Vertical') {\n        if (board[coor + i * 10] !== 'o') {\n          return false;\n        }\n      } else if (board[coor + i] !== 'o') {\n        return false;\n      }\n    }\n    const newFleetMem = {};\n    let mult = 1;\n    if (position === 'Vertical') {\n      mult = 10;\n    } else {\n      mult = 1;\n    }\n    newFleetMem.pos = [];\n    for (let i = 0; i < ship.length; i += 1) {\n      newFleetMem.pos.push(coor + mult * i);\n    }\n    newFleetMem.ship = ship;\n    fleet.push(newFleetMem);\n    for (let i = 0; i < ship.length; i += 1) {\n      board[coor + mult * i] = fleet.length - 1;\n    }\n    return true;\n  };\n\n  const receiveAttack = (coor) => {\n    const shoot = findShip(coor);\n    if (shoot === false) {\n      misses.push(coor);\n      return false;\n    }\n    const shipId = shoot[0];\n    const hitBox = parseInt(shoot[1], 10);\n    const x = fleet[shipId].pos.indexOf(hitBox);\n    fleet[shipId].ship.hit(x);\n    hits.push(coor);\n    return true;\n  };\n  const randomPlacement = (length) => {\n    const sideWays = Math.floor(Math.random() * 2);\n    if (sideWays === 0) {\n      const x = Math.floor(Math.random() * (10 - length));\n      const y = Math.floor(Math.random() * 10);\n      return { coor: 10 * y + x, position: 'Horizon' };\n    }\n    const x = Math.floor(Math.random() * 10);\n    const y = Math.floor(Math.random() * (10 - length));\n    return { coor: 10 * y + x, position: 'Vertical' };\n  };\n\n  const sunkFleet = () => fleet.every((member) => member.ship.isSunk() === true);\n\n  return {\n    fleet,\n    hits,\n    misses,\n    place,\n    receiveAttack,\n    sunkFleet,\n    randomPlacement,\n    board,\n  };\n};\n\nmodule.exports = gameBoard;\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const gameloop = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n\ngameloop.gameLoop();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */\nconst player = (name) => {\n  let moves = Array.from(Array(100).keys());\n  const attack = (coordinates) => {\n    if (moves.includes(coordinates)) {\n      moves = moves.filter((e) => e !== coordinates);\n      return coordinates;\n    }\n    return false;\n  };\n  const computerAttack = () => {\n    const randomMove = moves[Math.floor(Math.random() * moves.length)];\n    return attack(randomMove);\n  };\n  return { name, attack, computerAttack };\n};\n\nmodule.exports = player;\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */\nconst ship = (length) => {\n  const body = new Array(length).fill(false, 0);\n  const hit = (x) => {\n    if (body[x] === false) {\n      body[x] = true;\n      return true;\n    }\n    return false;\n  };\n  const isSunk = () => body.every((part) => part === true);\n  return {\n    length, hit, isSunk, body,\n  };\n};\nmodule.exports = ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/stylesheets/styles.css":
/*!************************************!*\
  !*** ./src/stylesheets/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesheets/styles.css?");

/***/ })

/******/ });