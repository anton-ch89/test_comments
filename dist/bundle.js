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

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDate\": () => (/* binding */ getDate),\n/* harmony export */   \"getDay\": () => (/* binding */ getDay),\n/* harmony export */   \"getTime\": () => (/* binding */ getTime),\n/* harmony export */   \"getUsertDay\": () => (/* binding */ getUsertDay)\n/* harmony export */ });\n\r\n\r\n\r\n//работа с датами и временем\r\n\r\nfunction getDate(UNIX_timestamp) {\r\n    let a = new Date(UNIX_timestamp);\r\n    let year = a.getFullYear();\r\n    let month = a.getMonth() + 1;\r\n    if (month < 10) {\r\n        month = '0' + month\r\n    }\r\n\r\n    let date = a.getDate();\r\n    if (date < 10) {\r\n        date = '0' + date\r\n    }\r\n\r\n    let time = year + '-' + month + '-' + date;\r\n    return time;\r\n\r\n\r\n};\r\n\r\n//Получаем время\r\n\r\nfunction getTime(UNIX_timestamp) {\r\n    let a = new Date(UNIX_timestamp);\r\n    let hour = a.getHours();\r\n    if (hour < 10) {\r\n        hour = '0' + hour\r\n    }\r\n\r\n    let min = a.getMinutes();\r\n    if (min < 10) {\r\n        min = '0' + min\r\n    }\r\n    let sec = a.getSeconds();\r\n    if (sec < 10) {\r\n        sec = '0' + sec\r\n    }\r\n\r\n\r\n    let time = ' ' + hour + ':' + min + ':' + sec;\r\n    return time;\r\n\r\n};\r\n// получаес дату от пользователя. сегодня, вчера или пользовательскую\r\nfunction getUsertDay(commentDate) {\r\n    let currentDate = getDate(Date.now());\r\n    if (currentDate === commentDate) {\r\n        return 'сегодня' + ' ' + getTime(Date.now())\r\n    }\r\n    else if (getDate(Date.now() - 86400000) === commentDate) {\r\n        return 'вчера' + ' ' + getTime(Date.now())\r\n    }\r\n    else {\r\n        return commentDate + ' ' + getTime(Date.now())\r\n    }\r\n};\r\nfunction getDay() {\r\n    let a = new Date(Date.now());\r\n    let year = a.getFullYear();\r\n    let month = a.getMonth() + 1;\r\n    if (month < 10) {\r\n        month = '0' + month\r\n    }\r\n\r\n    let date = a.getDate();\r\n    let day = a.getDate() - 1;\r\n    if (date < 10) {\r\n        day = '0' + day\r\n        date = '0' + date\r\n    }\r\n\r\n    let today = year + '-' + month + '-' + date;\r\n    let currentDate = getDate(Date.now())\r\n    if (today === currentDate) {\r\n        return 'сегодня'\r\n    } else {\r\n        return getDate(Date.now())\r\n    }\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://test_comments/./src/dates.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates */ \"./src/dates.js\");\n/* harmony import */ var _secondary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary */ \"./src/secondary.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('form');\r\nconst formContainer = document.querySelector('.form__container');\r\nconst mistakeComment = document.querySelector('.mistake-text');\r\nconst mistakeName = document.querySelector('.mistake-name');\r\nconst commentName = document.getElementById('comment-name');\r\nconst commentText = document.getElementById('comment-text');\r\nconst commentDate = document.getElementById('comment-date');\r\nconst commentArea = document.getElementById('comment-area');\r\n\r\n\r\n\r\n\r\nlet comments = [];\r\n\r\n\r\n//добавляет комментарий\r\nform.addEventListener('submit', addComment)\r\n\r\nfunction addComment(event) {\r\n    event.preventDefault();\r\n\r\n    let comment = {\r\n        id: (0,_secondary__WEBPACK_IMPORTED_MODULE_1__.randomId)(),\r\n        name: commentName.value,\r\n        text: commentText.value,\r\n        date: commentDate.value.length ? (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getUsertDay)(commentDate.value) : (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDay)(Date.now()) + ' ' + (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getTime)(Date.now()),\r\n        like: false,\r\n    };\r\n\r\n    getValidation(comment)\r\n\r\n};\r\n\r\n\r\n//обновляет комментарии на экране\r\nfunction showComments() {\r\n    let value = ''\r\n\r\n\r\n    comments.forEach(e => {\r\n        value += `<div class='comment-block'>`;\r\n        value += `<div class='comment-block__header'><p>${e.name}</p>`;\r\n        value += `<p><em>${e.date}</em></p></div>`;\r\n        value += `<p class='comment-block__text'>${e.text}</p>`;\r\n        value += `<div class='comment-block__footer'><img id=\"${e.id}\" class='like' src=\"${!e.like ? './img/no_like.png' : './img/like.png'}\" alt=\"heart\">`;\r\n        value += `<img id=\"${e.id}\" class=\"delete\" src=\"./img/bucket.png\" alt=\"\"></img></div>`;\r\n        value += `</div>`\r\n    })\r\n    commentArea.innerHTML = value\r\n}\r\n\r\n\r\n// выполняет валидацию полей\r\nfunction getValidation(comment) {\r\n\r\n    const nameReg = /^.{1,15}$/\r\n    const textReg = /^.{1,300}$/\r\n\r\n\r\n    if (!nameReg.test(commentName.value.trim())) {\r\n        mistakeName.hidden = false\r\n    }\r\n    else if (!textReg.test(commentText.value.trim())) {\r\n        mistakeComment.hidden = false\r\n    }\r\n    else {\r\n\r\n        comments = [...comments, comment]\r\n        showComments()\r\n        toLocalStorage();\r\n        commentName.value = '';\r\n        commentText.value = '';\r\n        commentDate.value = '';\r\n\r\n    }\r\n\r\n\r\n    formContainer.addEventListener('input', (event) => {\r\n        let target = event.target\r\n        if (target.matches('.name')) {\r\n            mistakeName.hidden = true\r\n        }\r\n        if (target.matches('.text')) {\r\n            mistakeComment.hidden = true\r\n        }\r\n    });\r\n}\r\n\r\n\r\n// управление удалением и лайками\r\ncommentArea.addEventListener('click', (event) => {\r\n    const target = event.target\r\n    deleteComment(target);\r\n    getLike(target);\r\n    toLocalStorage();\r\n    showComments()\r\n})\r\n\r\n//  ставит/убирает лайк\r\nfunction getLike(target) {\r\n    const likeButton = target.closest('.like')\r\n    if (target.matches('.like')) {\r\n        comments.forEach(e => e.id === likeButton.id ? e.like = !e.like : null)\r\n    }\r\n}\r\n\r\n\r\n//удаляет комментарий\r\nfunction deleteComment(target) {\r\n    const deleteButton = target.closest('.delete')\r\n    if (target.matches('.delete')) {\r\n        comments = comments.filter(e => e.id !== deleteButton.id)\r\n    }\r\n}\r\n\r\n\r\n\r\n//загружаем в LocalStorage\r\nfunction toLocalStorage() {\r\n    localStorage.setItem('comments', JSON.stringify(comments))\r\n}\r\n\r\n//выгружаем из LocalStorage\r\nfunction loadComments() {\r\n    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));\r\n    showComments();\r\n}\r\n\r\n\r\nloadComments(comments);\r\n\r\n\r\n\n\n//# sourceURL=webpack://test_comments/./src/index.js?");

/***/ }),

/***/ "./src/secondary.js":
/*!**************************!*\
  !*** ./src/secondary.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomId\": () => (/* binding */ randomId)\n/* harmony export */ });\n\r\n\r\n\r\n\r\nfunction randomId(length = 6) {\r\n    return Math.random().toString(36).substring(2, length + 2);\r\n};\r\n\n\n//# sourceURL=webpack://test_comments/./src/secondary.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;