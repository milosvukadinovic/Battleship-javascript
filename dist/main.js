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

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#container {\\r\\n  background-color: dodgerblue;\\r\\n}\\r\\n\\r\\n.grid-container {\\r\\n  display: inline-grid;\\r\\n  grid-template-columns: repeat(10, 50px);\\r\\n  grid-template-rows: repeat(10, 50px);\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.form-container {\\r\\n  display: inline-grid;\\r\\n  grid-template-rows: repeat(7, 60px);\\r\\n  grid-template-columns: repeat(4, 100px);\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.form-item{\\r\\n  height: 60px;\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.grid-item {\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  border: solid 1px black;\\r\\n}\\r\\n\\r\\n.grid-item:hover {\\r\\n  background-color: gray;\\r\\n}\\r\\n.grid-item:active {\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.ship-input {\\r\\n  width: 60px;\\r\\n}\\r\\n.btn-start-game {\\r\\n  height: 30px;\\r\\n  width: 100px;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesheets/styles.css?./node_modules/css-loader/dist/cjs.js");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/styles.css */ \"./src/stylesheets/styles.css\");\n/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grid_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-generator */ \"./src/grid-generator.js\");\n\n\nconst dom = (() => {\n  const gameStartContainer = document.getElementById('game-start');\n  const grid = Object(_grid_generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  gameStartContainer.appendChild(grid);\n\n  const renderBoards = (players) => {\n    container.appendChild(grid);\n  };\n\n\n  return {renderBoards};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom);\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst gameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\nconst player = __webpack_require__(/*! ./player */ \"./src/player.js\");\nconst dom = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nconst gameLoop = () => {\n  const container = document.getElementById('container');\n  const gameBoards = [gameBoard(), gameBoard()];\n\n  // Add ship button, adds to board, fleet and calls for grid colors\n  const setButtons = document.getElementsByClassName(`setButton`);\n  for (let i = 0; i < setButtons.length; i++) {\n    setButtons[i].onclick = (event) => {\n      const coordinates = document.getElementsByClassName(`ship-input`);\n      const position = document.getElementsByClassName(`position-input`);\n      const index=event.target.getAttribute('data');\n      const array=coordinates[index].value.split('');\n      const shipCoordinates= createCoordinates(array);\n      const ships=ship(6-index);\n      const success = gameBoards[0].place(shipCoordinates, ships,\n          position[index].value);\n      if (!success) {\n        console.log('sfdsd');\n        return false;\n      }\n      addShipOnGrid(shipCoordinates, ships,\n          position[index].value);\n    };\n  }\n  // Remove ship button, removes from board, fleet and calls for grid cleanup\n  const removeButtons = document.getElementsByClassName(`removeButton`);\n  for (let i = 0; i < removeButtons.length; i++) {\n    removeButtons[i].onclick = (event) => {\n      const coordinates = document.getElementsByClassName(`ship-input`);\n      const position = document.getElementsByClassName(`position-input`);\n      const index=event.target.getAttribute('data');\n      const array=coordinates[index].value.split('');\n      const shipCoordinates= createCoordinates(array);\n      const ships=ship(6-index);\n      for (let i=0; i<gameBoards[0].fleet.length; i++) {\n        if (gameBoards[0].fleet[i].ship.length==6-index) {\n          gameBoards[0].fleet.splice(i, 1);\n          removeShipOnGrid(shipCoordinates, ships,\n              position[index].value);\n          console.log('it works damnit');\n          let mult=1;\n          if (position[index]=='Vertical') {\n            mult=10;\n          } else {\n            mult=1;\n          }\n          console.log(gameBoards[0]);\n          for (let i = 0; i < ships.length; i += 1) {\n            gameBoards[0].board[shipCoordinates+(mult*i)]= 'o';\n          }\n          return true;\n        }\n      }\n    };\n  }\n\n  // Adds ship on grid\n  const addShipOnGrid = (coordinates, shipModel, position) => {\n    const boardBoxes= document.getElementsByClassName('grid-item');\n    let coordinationVariable= coordinates;\n\n    for (let i=0; i<shipModel.length; i++) {\n      boardBoxes[coordinationVariable].style.background = 'red';\n      if (position=='Horizon') {\n        coordinationVariable=coordinationVariable+1;\n      } else {\n        coordinationVariable=coordinationVariable+10;\n      }\n    }\n  };\n\n  // Removes ship from grid\n  const removeShipOnGrid = (coordinates, shipModel, position) => {\n    const boardBoxes= document.getElementsByClassName('grid-item');\n    let coordinationVariable= coordinates;\n\n    for (let i=0; i<shipModel.length; i++) {\n      boardBoxes[coordinationVariable].style.background = null;\n      if (position=='Horizon') {\n        coordinationVariable=coordinationVariable+1;\n      } else {\n        coordinationVariable=coordinationVariable+10;\n      }\n    }\n  };\n\n  // Start game button, checks if fleet is full\n  // should hide form, call for computer to generate his ships\n  // and pop up his board, start the game.\n\n  document.getElementsByClassName('btn-start-game')[0]\n      .addEventListener('click', (e)=>{\n        if (gameBoards[0].fleet.length==5) {\n          console.log('frig yes');\n        } else {\n          console.log('frig no');\n        }\n      });\n\n  // Function that takes E2 for example and returns 42\n  // takes input coordinates and gives back actual number.\n  const createCoordinates = (array) => {\n    const number=parseInt(array[1], 10);\n    switch (array[0]) {\n      case 'A':\n        return number;\n      case 'B':\n        return (10+number);\n      case 'C':\n        return (20+number);\n      case 'D':\n        return (30+number);\n      case 'E':\n        return (40+number);\n      case 'F':\n        return (50+number);\n      case 'G':\n        return (60+number);\n      case 'H':\n        return (70+number);\n      case 'I':\n        return (80+number);\n      case 'J':\n        return (90+number);\n\n      default:\n      // code block\n    }\n  };\n\n  // should be called on start game button, still needs work\n  const startGame = () => {\n    const player = player(document.getElementById('player-name').value);\n\n    for (let i = 2; i < 7; i += 1) {\n      const ship=ship(i);\n      const placement=gameBoards[1].randomPlacement(i);\n      const success = gameBoards[1].place(placement.coor, ship,\n          placement.position);\n      if (!success) {\n        return false;\n      }\n    }\n  };\n\n  // winning conditions\n  const winner = () => {\n    if (gameBoards[0].sunkFleet()) {\n      return players[1].name;\n    }\n    if (gameBoards[1].sunkFleet()) {\n      return players[0].name;\n    }\n    return false;\n  };\n\n  return {\n    gameLoop, gameBoards, winner,\n  };\n};\n\nmodule.exports = gameLoop;\n\n\n//# sourceURL=webpack:///./src/game-loop.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const gameBoard = () => {\n  const board = Array.from(Array(100).fill('o'));\n  const fleet = [];\n  const hits = [];\n  const misses = [];\n\n  // according to coordinates, returns\n  // ship if exists on those coordinates\n  const findShip = (coor) => {\n    if (board[coor]=='o') {\n      return false;\n    } else {\n      return [board[coor], coor];\n    }\n  };\n\n\n  const place = (coor, ship, position) => {\n    secret=(coor).toString(10).split('').map(function(t) {\n      return parseInt(t);\n    } );\n    // Here it checks if coordinates go out of range\n    if (coor > 99 || coor < 0) {\n      return false;\n    }\n    // Here it checks if it goes out of range depending on ship length\n    if (position== 'Horizon') {\n      if (secret[1]>9-ship.length) {\n        return false;\n      }\n    } else {\n      if (secret[0]>9-ship.length) {\n        return false;\n      }\n    }\n    // Here it should work as follows: Rush thro\n    // depending on position, check if everything is clear\n    for (let i = 0; i < ship.length; i += 1) {\n      if (position=='Vertical') {\n        if (board[coor+i*10]!='o') {\n          return false;\n        }\n      } else {\n        if (board[coor+i]!='o') {\n          return false;\n        }\n      }\n    }\n    // adding coordinates to fleet\n    const newFleetMem = {};\n    let mult=1;\n    if (position=='Vertical') {\n      mult=10;\n    } else {\n      mult=1;\n    }\n    newFleetMem.pos=[];\n    for (let i = 0; i < ship.length; i += 1) {\n      newFleetMem.pos.push(coor+(mult*i));\n    }\n    newFleetMem.ship = ship;\n    fleet.push(newFleetMem);\n    for (let i = 0; i < ship.length; i += 1) {\n      board[coor+(mult*i)]=fleet.length-1;\n    }\n    return true;\n  };\n\n  // You send an attack to oposing board, coordinates\n  // Adds miss if you miss\n  // Adds hit if you hitted\n  // And removes health of the ship\n  const receiveAttack = (coor) => {\n    const shoot = findShip(coor);\n    if (shoot === false) {\n      misses.push(coor);\n    } else {\n      const shipId = shoot[0];\n      const hitBox = shoot[1];\n      const x=fleet[shipId].pos.indexOf(hitBox);\n      fleet[shipId].ship.hit(x);\n      hits.push(coor);\n    }\n    return true;\n  };\n\n  // This function takes ship's length and returns a\n  // RANDOM position to place it ( starting position, and horizon/vertical )\n\n  const randomPlacement = (length) => {\n    const sideWays = Math.floor(Math.random() * 2);\n    if (sideWays === 0) {\n      const x = Math.floor(Math.random() * (10-length));\n      const y = Math.floor(Math.random() * 10);\n      return {coor: (1*y+x), position: 'Horizon'};\n    }\n    const x = Math.floor(Math.random() * 10);\n    const y = Math.floor(Math.random() * (10-length));\n    return {coor: (10*y+x), position: 'Vertical'};\n  };\n\n\n  // Function that checks if every ship in the fleet is sunk\n  // These are losing conditions\n  const sunkFleet = () => fleet.every((\n      member)=> member.ship.isSunk() === true);\n\n  return {\n    fleet, hits, misses, place, receiveAttack, sunkFleet, randomPlacement, board,\n  };\n};\n\nmodule.exports = gameBoard;\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/grid-generator.js":
/*!*******************************!*\
  !*** ./src/grid-generator.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// I think we can add this to DOM file?\n\nconst gridNode = () => {\n  const grid = document.createElement('div');\n  grid.classList.add('grid-container', 'hidden');\n\n  for (let i =0; i < 100; i++) {\n    const gridItem = document.createElement('div');\n    gridItem.classList.add('grid-item');\n    gridItem.setAttribute('data', i);\n    grid.appendChild(gridItem);\n  }\n  return grid;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gridNode);\n\n\n//# sourceURL=webpack:///./src/grid-generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const dom = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\r\nconst gameloop=__webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\r\ngameloop();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nSo basically we have a board array which translates to dom,\nrange from 0-99 we split it so it looks 10x10\ni wanned it this way because of moves(moves is not 0, but is 100 and declines\n     from that, so its basically AVAILABLE MOVES) and random.\nIt isolates moves already made and randomises between empty ones.\n\nYou make a move by sending a coordinate from 0-99 depending on\nwhich button you press, it sends it to attack and checks\neverything on board, but registers it on player\n */\n\nconst player = (name) => {\n  let moves = Array.from(Array(100).keys());\n  const attack = (coordinates) => {\n    if (moves.includes(coordinates)) {\n      moves=moves.filter(function(e) {\n        return e !== coordinates;\n      });\n      return coordinates;\n    } else {\n      return false;\n    }\n  };\n  const computerAttack = () => {\n    const randomMove = moves[Math.floor(Math.random() * moves.length)];\n    // remove the random move\n    return attack(moves[randomMove]);\n  };\n  return {name, attack, computerAttack};\n};\n\nmodule.exports = player;\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ship = (length) => {\n  const body = new Array(length).fill(false, 0);\n  const hit = (x) => {\n    if (body[x] === false) {\n      body[x] = true;\n      return true;\n    }\n    return false;\n  };\n  const isSunk = () => body.every((part) => part === true);\n  return {\n    length, hit, isSunk,\n  };\n};\nmodule.exports = ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

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