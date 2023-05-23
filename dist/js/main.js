/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGUuc2Nzcz82N2EyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/style.scss\n");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _modules_game_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game_init */ \"./ts/modules/game_init.ts\");\n\n// import '../styles/bootstrap.css'\n\n(0,_modules_game_init__WEBPACK_IMPORTED_MODULE_1__.gameInit)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90cy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBOEI7QUFDOUI7QUFDK0M7QUFDL0MsNERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cz9mYjI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvYm9vdHN0cmFwLmNzcydcbmltcG9ydCB7IGdhbWVJbml0IH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVfaW5pdCc7XG5nYW1lSW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ts/index.ts\n");

/***/ }),

/***/ "./ts/modules/game_init.ts":
/*!*********************************!*\
  !*** ./ts/modules/game_init.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameInit\": () => (/* binding */ gameInit)\n/* harmony export */ });\nvar gameInit = function () {\n    // Иничиализация значений\n    var headerInit = document.querySelector('.header_init');\n    var headerGame = document.querySelector('.header_game');\n    var startGameButton = document.getElementById('btn_gameStart');\n    var playersNumberSelect = document.getElementById('select_playersNumber');\n    var avatarModeSelect = document.getElementById('select_avatarMode');\n    var scoreModeSelect = document.getElementById('select_scoreMode');\n    var avatarModes = ['classic_mode', 'art_mode', 'anime_mode'];\n    var initState = {\n        isGameStarted: false,\n        playerNumber: 2,\n        avatarModeIndex: 0,\n        gameModeIndex: 0,\n        players: {\n            player_1: {\n                isActive: true,\n                name: 'Игрок 1',\n                avatarIndex: 0,\n                time: 0,\n                scrore: 0,\n            },\n            player_2: {\n                isActive: true,\n                name: 'Игрок 1',\n                avatarIndex: 0,\n                time: 0,\n                scrore: 0,\n            },\n            player_3: {\n                isActive: false,\n                name: 'Игрок 1',\n                avatarIndex: 0,\n                time: 0,\n                scrore: 0,\n            },\n            player_4: {\n                isActive: false,\n                name: 'Игрок 1',\n                avatarIndex: 0,\n                time: 0,\n                scrore: 0,\n            },\n        },\n    };\n    // Функции\n    var changeHeader = function () {\n        headerInit.classList.add('hidden');\n        headerGame.classList.remove('hidden');\n    };\n    startGameButton.addEventListener('click', function () { });\n    playersNumberSelect.addEventListener('change', function () { });\n    avatarModeSelect.addEventListener('change', function () {\n        console.log(avatarModeSelect.value);\n    });\n    scoreModeSelect.addEventListener('change', function () { });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90cy9tb2R1bGVzL2dhbWVfaW5pdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Qsa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOERBQThEO0FBQzlEO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdHMvbW9kdWxlcy9nYW1lX2luaXQudHM/YzI4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZUluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8g0JjQvdC40YfQuNCw0LvQuNC30LDRhtC40Y8g0LfQvdCw0YfQtdC90LjQuVxuICAgIHZhciBoZWFkZXJJbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9pbml0Jyk7XG4gICAgdmFyIGhlYWRlckdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX2dhbWUnKTtcbiAgICB2YXIgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9nYW1lU3RhcnQnKTtcbiAgICB2YXIgcGxheWVyc051bWJlclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RfcGxheWVyc051bWJlcicpO1xuICAgIHZhciBhdmF0YXJNb2RlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdF9hdmF0YXJNb2RlJyk7XG4gICAgdmFyIHNjb3JlTW9kZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rfc2NvcmVNb2RlJyk7XG4gICAgdmFyIGF2YXRhck1vZGVzID0gWydjbGFzc2ljX21vZGUnLCAnYXJ0X21vZGUnLCAnYW5pbWVfbW9kZSddO1xuICAgIHZhciBpbml0U3RhdGUgPSB7XG4gICAgICAgIGlzR2FtZVN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICBwbGF5ZXJOdW1iZXI6IDIsXG4gICAgICAgIGF2YXRhck1vZGVJbmRleDogMCxcbiAgICAgICAgZ2FtZU1vZGVJbmRleDogMCxcbiAgICAgICAgcGxheWVyczoge1xuICAgICAgICAgICAgcGxheWVyXzE6IHtcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAn0JjQs9GA0L7QuiAxJyxcbiAgICAgICAgICAgICAgICBhdmF0YXJJbmRleDogMCxcbiAgICAgICAgICAgICAgICB0aW1lOiAwLFxuICAgICAgICAgICAgICAgIHNjcm9yZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXJfMjoge1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfQmNCz0YDQvtC6IDEnLFxuICAgICAgICAgICAgICAgIGF2YXRhckluZGV4OiAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXG4gICAgICAgICAgICAgICAgc2Nyb3JlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcl8zOiB7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfQmNCz0YDQvtC6IDEnLFxuICAgICAgICAgICAgICAgIGF2YXRhckluZGV4OiAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXG4gICAgICAgICAgICAgICAgc2Nyb3JlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcl80OiB7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfQmNCz0YDQvtC6IDEnLFxuICAgICAgICAgICAgICAgIGF2YXRhckluZGV4OiAwLFxuICAgICAgICAgICAgICAgIHRpbWU6IDAsXG4gICAgICAgICAgICAgICAgc2Nyb3JlOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIC8vINCk0YPQvdC60YbQuNC4XG4gICAgdmFyIGNoYW5nZUhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGVhZGVySW5pdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgaGVhZGVyR2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9O1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgcGxheWVyc051bWJlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7IH0pO1xuICAgIGF2YXRhck1vZGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhhdmF0YXJNb2RlU2VsZWN0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBzY29yZU1vZGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkgeyB9KTtcbn07XG5leHBvcnQgeyBnYW1lSW5pdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ts/modules/game_init.ts\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/index.ts");
/******/ 	
/******/ })()
;