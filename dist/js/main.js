/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mobileNav.js":
/*!*****************************!*\
  !*** ./src/js/mobileNav.js ***!
  \*****************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\nconst sidebar = document.getElementById('sidebar');\nconst page = document.getElementById('page');\nconst body = document.body;\n\nburger.addEventListener('click', event => {\n\t// document.body.classList.toggle('show-sidebar');\n\t// page.appendChild(mask);\n\tif(body.classList.contains('show-sidebar') ) {\n\t\tcloseSidebar();\n\t} else {\n\t\tshowSidebar();\n\t}\n});\n\nfunction showSidebar() {\n let mask = document.createElement('div');\n mask.classList.add('page-mask');\nmask.addEventListener('click', closeSidebar);\n\tpage.appendChild(mask);\n\n\tbody.classList.add('show-sidebar');\n\n}\nfunction closeSidebar() {\n\tbody.classList.remove('show-sidebar');\n\tdocument.querySelector('.page-mask').remove();\n}\n\n//# sourceURL=webpack://new-gulp/./src/js/mobileNav.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\nconst body = document.body;\nconst modalClose = document.querySelectorAll('.modal-close');\nconst modal = document.querySelectorAll('.modal');\n\n\n\nmodalBtn.forEach(item => {\n\titem.addEventListener('click', event => {\n\t\tlet $this = event.currentTarget;\n\t\tlet modalId = $this.getAttribute('data-modal');\n\t\tlet modal = document.getElementById(modalId);\n\t\tlet modalContent = modal.querySelector('.modal-content');\n\n\t\tmodalContent.addEventListener('click', event => {\n\t\t\tevent.stopPropagation();\n\t\t});\n\t\t\n\t\tmodal.classList.add('show');\n\t\tbody.classList.add('no-scroll');\n\n\t\tsetTimeout(function() {\n\t\t\tmodalContent.style.transform = 'none';\n\t\t\tmodalContent.style.opacity = 1;\n\t\t}, 1);\n\t});\n});\nmodalClose.forEach(item => {\n\titem.addEventListener('click', event => {\n\t\tlet currentModal = event.currentTarget.closest('.modal');\n\n\t\tcloseModal(currentModal);\n\t});\n});\n\nmodal.forEach(item => {\n\titem.addEventListener('click', event => {\n\t\tlet currentModal = event.currentTarget;\n\n\t\tcloseModal(currentModal);\n\t});\n});\n\nfunction closeModal(currentModal) {\n\tlet modalContent = currentModal.querySelector('.modal-content');\n\tmodalContent.removeAttribute('style');\n\n\tsetTimeout(() => {\n\t\tcurrentModal.classList.remove('show');\n\t\tbody.classList.remove('no-scroll');\n\t}, 200);\n}\n\n//# sourceURL=webpack://new-gulp/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/textarea.js":
/*!****************************!*\
  !*** ./src/js/textarea.js ***!
  \****************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\n\ntextArea.forEach(item => {\n\tlet textArea = item.offsetHeight;\n\titem.addEventListener('input', event => {\n\t\tlet $this = event.target;\n\t\t$this.style.height = textArea + \"px\";\n\t\t$this.style.height = $this.scrollHeight + 'px';\n\t});\n});\n\n//# sourceURL=webpack://new-gulp/./src/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/textarea.js"]();
/******/ 	
/******/ })()
;