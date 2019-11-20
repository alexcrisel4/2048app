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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n\n\nclass Board {\n  constructor(ctx) {\n    this.ctx = ctx\n    this.grid = [[null, null, null, null],\n                  [null, null, null, null],\n                  [null, null, null, null],\n                  [null, null, null, null]]\n\n\n  this.addNumber();\n  this.addNumber();\n  }\n\n  \naddNumber () {\n  let options = []\n  for( let i = 0; i < 4; i ++ ) {\n    for( let j = 0; j < 4; j ++ ) {\n      if(this.grid[i][j] === null ) {\n        options.push([i,j])\n      }\n    }\n  };\n\n  let newNum = options[Math.floor(Math.random() * options.length)];\n  this.grid[newNum[0]][newNum[1]] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, 2, [newNum[0],newNum[1]] );\n  this.draw();\n};\n\ndraw() {\n  this.ctx.clearRect(0,0, 400, 400);\n  this.ctx.strokeStyle=\"black\";\n  this.ctx.lineWidth=8;\n  for (let i = 0; i <= 400; i=i+100 ) {\n    this.ctx.moveTo(i,0);\n    this.ctx.lineTo(i, 400);\n    this.ctx.stroke();\n  }\n  for( let j = 0; j <= 400; j=j+100 ) {\n    this.ctx.moveTo(0, j);\n    this.ctx.lineTo(400, j);\n    this.ctx.stroke();\n  }\n  \n  this.grid.forEach(row => {\n    row.forEach(pos => {\n      if(pos)\n      pos.draw()\n    })\n  })\n  \n}\n\nslideRight() {\n  this.grid.forEach((row, i) => {\n    let array = row.filter(num => num);\n    let numEmpty = 4 - array.length;\n    let empty = Array(numEmpty).fill(null);\n    let newRow = empty.concat(array)\n    newRow.forEach((tile, j) => { \n      if (tile) {\n        tile.position = [i, j];\n      }\n    })\n    this.grid[i] = newRow;\n  })\n  this.addNumber()\n}\n\n  slideLeft() {\n    this.grid.map((row, i) => {\n      let array = row.filter(num => num);\n      let numEmpty = 4 - array.length;\n      let empty = Array(numEmpty).fill(null);\n      let newRow = array.concat(empty)\n      newRow.forEach((tile, j) => {\n        if (tile) {\n          tile.position = [i, j];\n        }\n      })\n     \n      this.grid[i] = newRow;\n    })\n    this.addNumber()\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n \n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\n\nclass Game {\n  constructor(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx); \n    this.canvas.focus();\n    document.addEventListener(\"keydown\", this.pressArrow.bind(this))\n  }\n\n  pressArrow(e) {\n    console.log(\"pressed\")\n  e = e || window.event;\n\n  if (e.keyCode == '38') {\n    // slide up\n  }\n  else if (e.keyCode == '40') {\n    // slide down\n  }\n  else if (e.keyCode == '37') {\n    this.board.slideLeft();\n  }\n  else if (e.keyCode == '39') {\n    this.board.slideRight();\n    console.log(\"slide\")\n  }\n\n}\n  \n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\")\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Tile {\n  constructor(ctx, value, position) {\n    this.ctx = ctx; \n    this.value = value; \n    this. position = position; \n    this.draw();\n  }\n\n  draw() {\n    \n    this.ctx.font = \"60px Arial\";\n    this.ctx.fillText(this.value, (30 + 100 * this.position[1]), (65 + 100 * this.position[0]))\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });