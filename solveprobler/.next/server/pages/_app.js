/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/SentienceContext.tsx":
/*!******************************************!*\
  !*** ./src/context/SentienceContext.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SentienceContext\": () => (/* binding */ SentienceContext),\n/* harmony export */   \"SentienceProvider\": () => (/* binding */ SentienceProvider),\n/* harmony export */   \"useSentience\": () => (/* binding */ useSentience)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SentienceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    isSentient: false,\n    severity: 0,\n    setSentienceState: ()=>{}\n});\nconst useSentience = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SentienceContext);\nconst SentienceProvider = ({ children  })=>{\n    const { 0: isSentient , 1: setIsSentient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: severity , 1: setSeverity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const setSentienceState = (isSentient, severity)=>{\n        setIsSentient(isSentient);\n        setSeverity(severity);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SentienceContext.Provider, {\n        value: {\n            isSentient,\n            severity,\n            setSentienceState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\WebProjects\\\\SolvemProbler\\\\solveprobler\\\\src\\\\context\\\\SentienceContext.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TZW50aWVuY2VDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFRaEUsTUFBTUcsZ0JBQWdCLGlCQUFHSCxvREFBYSxDQUF1QjtJQUNoRUksVUFBVSxFQUFFLEtBQUs7SUFDakJDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLGlCQUFpQixFQUFFLElBQU0sQ0FBQyxDQUFDO0NBQzlCLENBQUMsQ0FBQztBQUVJLE1BQU1DLFlBQVksR0FBRyxJQUFNTixpREFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXhELE1BQU1LLGlCQUFpQixHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUEyQixHQUFLO0lBQ3hFLE1BQU0sS0FBQ0wsVUFBVSxNQUFFTSxhQUFhLE1BQUlSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELE1BQU0sS0FBQ0csUUFBUSxNQUFFTSxXQUFXLE1BQUlULCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTNDLE1BQU1JLGlCQUFpQixHQUFHLENBQUNGLFVBQW1CLEVBQUVDLFFBQWdCLEdBQUs7UUFDakVLLGFBQWEsQ0FBQ04sVUFBVSxDQUFDLENBQUM7UUFDMUJPLFdBQVcsQ0FBQ04sUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHFCQUNJLDhEQUFDRixnQkFBZ0IsQ0FBQ1MsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRVQsVUFBVTtZQUFFQyxRQUFRO1lBQUVDLGlCQUFpQjtTQUFFO2tCQUN4RUcsUUFBUTs7Ozs7aUJBQ2UsQ0FDOUI7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2x2ZXByb2JsZXIvLi9zcmMvY29udGV4dC9TZW50aWVuY2VDb250ZXh0LnRzeD9hZDg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFNlbnRpZW5jZUNvbnRleHRUeXBlID0ge1xyXG4gICAgaXNTZW50aWVudDogYm9vbGVhbjtcclxuICAgIHNldmVyaXR5OiBudW1iZXI7XHJcbiAgICBzZXRTZW50aWVuY2VTdGF0ZTogKGlzU2VudGllbnQ6IGJvb2xlYW4sIHNldmVyaXR5OiBudW1iZXIpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VudGllbmNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2VudGllbmNlQ29udGV4dFR5cGU+KHtcclxuICAgIGlzU2VudGllbnQ6IGZhbHNlLFxyXG4gICAgc2V2ZXJpdHk6IDAsXHJcbiAgICBzZXRTZW50aWVuY2VTdGF0ZTogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNlbnRpZW5jZSA9ICgpID0+IHVzZUNvbnRleHQoU2VudGllbmNlQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgU2VudGllbmNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzU2VudGllbnQsIHNldElzU2VudGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NldmVyaXR5LCBzZXRTZXZlcml0eV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBzZXRTZW50aWVuY2VTdGF0ZSA9IChpc1NlbnRpZW50OiBib29sZWFuLCBzZXZlcml0eTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0SXNTZW50aWVudChpc1NlbnRpZW50KTtcclxuICAgICAgICBzZXRTZXZlcml0eShzZXZlcml0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbnRpZW5jZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNTZW50aWVudCwgc2V2ZXJpdHksIHNldFNlbnRpZW5jZVN0YXRlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TZW50aWVuY2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlNlbnRpZW5jZUNvbnRleHQiLCJpc1NlbnRpZW50Iiwic2V2ZXJpdHkiLCJzZXRTZW50aWVuY2VTdGF0ZSIsInVzZVNlbnRpZW5jZSIsIlNlbnRpZW5jZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJc1NlbnRpZW50Iiwic2V0U2V2ZXJpdHkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/SentienceContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_SentienceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/SentienceContext */ \"./src/context/SentienceContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SentienceContext__WEBPACK_IMPORTED_MODULE_1__.SentienceProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\WebProjects\\\\SolvemProbler\\\\solveprobler\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WebProjects\\\\SolvemProbler\\\\solveprobler\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDZ0U7QUFDakM7QUFFL0IsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0MscUJBQ0ksOERBQUNILHdFQUFpQjtrQkFDZCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNaLENBQ3RCO0FBQ04sQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2x2ZXByb2JsZXIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBTZW50aWVuY2VQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvU2VudGllbmNlQ29udGV4dCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbnRpZW5jZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9TZW50aWVuY2VQcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJTZW50aWVuY2VQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();