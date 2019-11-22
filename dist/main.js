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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n\n\nclass Board {\n  constructor(ctx) {\n    this.ctx = ctx\n    this.grid = [[null, null, null, null],\n                  [null, null, null, null],\n                  [null, null, null, null],\n                  [null, null, null, null]]\n\n    this.slid = false;\n  this.addNumber(this.grid);\n  this.addNumber(this.grid);\n  this.draw();\n  }\n\n  \naddNumber(grid) {\n  let options = []\n  for( let i = 0; i < 4; i ++ ) {\n    for( let j = 0; j < 4; j ++ ) {\n      if(grid[i][j] === null ) {\n        options.push([i,j])\n      }\n    }\n  };\n  if(options.length > 0) {\n    let possibleValues = [2, 4]\n    let num = possibleValues[Math.floor(Math.random() * possibleValues.length)];\n  let newNum = options[Math.floor(Math.random() * options.length)];\n  grid[newNum[0]][newNum[1]] = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, num, [newNum[0],newNum[1]] );\n  console.log(grid)\n  } else {\n    \n  }\n};\n\ndraw() {\n  this.ctx.clearRect(0,0, 400, 400);\n  this.ctx.strokeStyle=\"black\";\n  this.ctx.lineWidth=10;\n  for (let i = 0; i <= 400; i=i+100 ) {\n    this.ctx.moveTo(i,0);\n    this.ctx.lineTo(i, 400);\n    this.ctx.stroke();\n  }\n  for( let j = 0; j <= 400; j=j+100 ) {\n    this.ctx.moveTo(0, j);\n    this.ctx.lineTo(400, j);\n    this.ctx.stroke();\n  }\n  this.grid.forEach(row => {\n    row.forEach(pos => {\n      if(pos)\n      pos.draw()\n    })\n  })\n  \n}\n\nslideRight(grid) {\n  this.slid = false\n  grid.forEach((row, i) => {\n    let array = row.filter(num => num);\n    let numEmpty = 4 - array.length;\n    let empty = Array(numEmpty).fill(null);\n    let newRow = empty.concat(array)\n    newRow.forEach((tile, j) => { \n      if (tile) {  \n        if(tile.position[1] != j) this.slid = true;\n        tile.position = [i, j];\n      }\n    })\n    grid[i] = newRow;\n  })\n  return grid;\n}\n\n  slideLeft(grid) {\n    this.slid = false\n      grid.forEach((row, i) => {\n      let array = row.filter(num => num);\n      let numEmpty = 4 - array.length;\n      let empty = Array(numEmpty).fill(null);\n      let newRow = array.concat(empty)\n      newRow.forEach((tile, j) => {\n        if (tile) {\n          if (tile.position[1] != j) this.slid = true\n          tile.position = [i, j];\n          \n        }\n      })\n     \n      grid[i] = newRow;\n    })\n    return grid;\n  }\n\n  slideUp(grid) {\n    this.slid = false\n   let transposedGrid = [[null, null, null, null],\n                        [null, null, null, null],\n                        [null, null, null, null],\n                        [null, null, null, null]];\n    grid.forEach((row, i) => {\n      row.forEach((tile, j) => {\n        transposedGrid[j][i] = tile;\n      })\n    })\n    let newGrid = this.slideLeft(transposedGrid);\n    newGrid.forEach((row, i) => {\n      row.forEach((tile, j) => {\n        grid[j][i] = tile;\n        if(tile) {\n          if(tile.position[0] != i) this.slid = true;\n        tile.position = [j,i];\n        }\n      })\n    })\n    return grid;\n  }\n\n  slideDown(grid) {\n    this.slid = false \n    let transposedGrid = [[null, null, null, null],\n                          [null, null, null, null],\n                          [null, null, null, null],\n                          [null, null, null, null]];\n    grid.forEach((row, i) => {\n      row.forEach((tile, j) => {\n        transposedGrid[j][i] = tile;\n      })\n    })\n    let newGrid = this.slideRight(transposedGrid);\n    newGrid.forEach((row, i) => {\n      row.forEach((tile, j) => {\n        grid[j][i] = tile;\n        if (tile) {\n          if(tile.position[0] != i) this.slid = true;\n          tile.position = [j, i];\n        }\n      })\n    })\n    return grid;\n  }\n\n  combineRight(grid) {\n    let combined = false \n    for( let i = 3; i >= 0; i--) {\n      for( let j = 3; j >= 0; j--) {\n        if (grid[i][j] && grid[i][j - 1] && grid[i][j].value === grid[i][j - 1].value) {\n          grid[i][j].value = grid[i][j].value * 2;\n          grid[i][j - 1] = null;\n          combined = true;\n        }\n      }\n    } \n    if(combined || this.slid) {\n      this.slideRight(grid)\n      this.addNumber(grid)\n    }\n    return grid;\n  }\n\n  combineLeft(grid) {\n    let combined = false; \n    for (let i = 0; i <= 3; i++) {\n      for (let j = 0; j <= 3; j++) {\n        if (grid[i][j] && grid[i][j +1] && grid[i][j].value === grid[i][j + 1].value) {\n          combined = true;\n          grid[i][j].value = grid[i][j].value * 2;\n          grid[i][j + 1] = null;\n        }\n      }\n    }\n    if(combined || this.slid) {\n      this.slideLeft(grid)\n      this.addNumber(grid)\n    }\n    return grid;\n  }\n\n  combineUp(grid) {\n    let combined = false\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j <= 3; j++) {\n        if (grid[i][j] && grid[i + 1][j] && grid[i][j].value === grid[i + 1 ][j].value) {\n          grid[i + 1][j].value = grid[i][j].value * 2;\n          grid[i][j] = null;\n          combined = true; \n        }\n      }\n    }\n    if(combined || this.slid) {\n      this.slideUp(grid)\n      this.addNumber(grid);\n    }\n    return grid\n  }\n\n  combineDown(grid) {\n    let combined = false \n    for (let j = 3; j >= 0; j--) {\n      for (let i = 3; i > 0; i--) {\n        if (grid[i][j] && grid[i - 1][j] && grid[i][j].value === grid[i - 1][j].value) {\n          grid[i - 1][j].value = grid[i][j].value * 2;\n          grid[i][j] = null;\n          combined = true;\n        }\n      }\n    }\n    if(combined || this.slid) {\n      this.slideDown(grid)\n      this.addNumber(grid)\n    }\n   return grid;\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n \n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\nclass Game {\n  constructor(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx); \n    this.canvas.focus();\n    document.addEventListener(\"keydown\", this.pressArrow.bind(this))\n  }\n\n  pressArrow(e) {\n    \n  e = e || window.event;\n\n  if (e.keyCode == '38') {\n    this.board.grid = this.board.slideUp(this.board.grid);\n    this.board.grid = this.board.combineUp(this.board.grid);\n    this.board.grid = this.board.slideUp(this.board.grid);\n    this.board.draw();\n  }\n  else if (e.keyCode == '40') {\n    this.board.grid = this.board.slideDown(this.board.grid);\n    this.board.grid =this.board.combineDown(this.board.grid);\n    this.board.draw();\n  }\n  else if (e.keyCode == '37') {\n    this.board.grid = this.board.slideLeft(this.board.grid);\n    this.board.grid = this.board.combineLeft(this.board.grid);\n    this.board.draw();\n  }\n  else if (e.keyCode == '39') {\n   this.board.grid = this.board.slideRight(this.board.grid);\n   this.board.grid = this.board.combineRight(this.board.grid);\n   this.board.draw()\n  }\n\n}\n  \n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Tile {\n  constructor(ctx, value, position) {\n    this.ctx = ctx; \n    this.value = value; \n    this. position = position; \n    this.draw();\n  }\n\n  draw() {\n    \n    if (this.value === 2) {\n      this.ctx.fillStyle = \"#dbead5\"\n    } else if (this.value === 4) {\n      this.ctx.fillStyle = \"#b7d5ac\"\n    } else if( this.value === 8) {\n      this.ctx.fillStyle = \"#93bf85\";\n    } else if( this.value === 16 ) {\n      this.ctx.fillStyle = \"#6eaa5e\";\n    } else if( this.value === 32) {\n      this.ctx.fillStyle = \"#469536\"\n    } else if (this.value === 64) {\n      this.ctx.fillStyle = \"#008000\"\n    } else if (this.value === 64) {\n      this.ctx.fillStyle = \"#2d7121\"\n    } else if (this.value === 128) {\n      this.ctx.fillStyle = \"#3c6232\" \n    } else if (this.value === 256) {\n      this.ctx.fillStyle = \"#44533f\" \n    } else if (this.value === 256) {\n      this.ctx.fillStyle = \"#49444b\" \n    } else if (this.value === 512) {\n      this.ctx.fillStyle = \"#4a3356\" \n    } else if (this.value === 1024) {\n      this.ctx.fillStyle = \"#482060\"\n    } \n     if (this.value < 16) {\n       this.ctx.font = \"60px Arial\";\n     } else if( this.value >= 16 && this.value <= 64) {\n       this.ctx.font = \"50px Arial\";\n     } else if (this.value > 64 && this.value <= 999) {\n       this.ctx.font = \"40px Arial\"\n     } else if (this.value > 999) {\n       this.ctx.font = \"30px Arial\"\n     }\n    this.ctx.textAlign = \"center\";\n    this.ctx.fillRect((100 * this.position[1]) + 5, (100 * this.position[0]) + 5, 90, 90)\n    this.ctx.fillStyle = \"white\"\n    \n    this.ctx.fillText(this.value, (50 + 100 * this.position[1]), (65 + 100 * this.position[0]))\n   \n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });