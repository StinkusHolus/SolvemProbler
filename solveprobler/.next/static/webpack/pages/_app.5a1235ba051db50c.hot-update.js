"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/SentienceContext.tsx":
/*!******************************************!*\
  !*** ./src/context/SentienceContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SentienceContext\": function() { return /* binding */ SentienceContext; },\n/* harmony export */   \"SentienceProvider\": function() { return /* binding */ SentienceProvider; },\n/* harmony export */   \"useSentience\": function() { return /* binding */ useSentience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar initialContext = {\n    isSentient: false,\n    severity: 0,\n    setSentienceState: function() {}\n};\nvar SentienceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialContext);\nvar SentienceProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isSentient = ref[0], setIsSentient = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), severity = ref1[0], setSeverity = ref1[1];\n    var setSentienceState = function(isSentient, severity) {\n        setIsSentient(isSentient);\n        setSeverity(severity);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SentienceContext.Provider, {\n        value: {\n            isSentient: isSentient,\n            severity: severity,\n            setSentienceState: setSentienceState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\WebProjects\\\\SolvemProbler\\\\solveprobler\\\\src\\\\context\\\\SentienceContext.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(SentienceProvider, \"Ay2jIhTcZY7obHTo4BNXevXEOf4=\");\n_c = SentienceProvider;\nvar useSentience = function() {\n    _s1();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SentienceContext);\n    if (!context) {\n        throw new Error(\"useSentience must be used within SentienceProvider\");\n    }\n    return context;\n};\n_s1(useSentience, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"SentienceProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TZW50aWVuY2VDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUF1RTtBQVF2RSxJQUFNRyxjQUFjLEdBQXNCO0lBQ3RDQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsUUFBUSxFQUFFLENBQUM7SUFDWEMsaUJBQWlCLEVBQUUsV0FBTSxDQUFDLENBQUM7Q0FDOUI7QUFFTSxJQUFNQyxnQkFBZ0IsaUJBQUdQLG9EQUFhLENBQW9CRyxjQUFjLENBQUMsQ0FBQztBQU0xRSxJQUFNSyxpQkFBaUIsR0FBRyxnQkFBeUI7UUFBdEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDeEMsSUFBb0NQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNFLFVBQVUsR0FBbUJGLEdBQWUsR0FBbEMsRUFBRVEsYUFBYSxHQUFJUixHQUFlLEdBQW5CO0lBQ2hDLElBQWdDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXBDRyxRQUFRLEdBQWlCSCxJQUFXLEdBQTVCLEVBQUVTLFdBQVcsR0FBSVQsSUFBVyxHQUFmO0lBRTVCLElBQU1JLGlCQUFpQixHQUFHLFNBQUNGLFVBQW1CLEVBQUVDLFFBQWdCLEVBQUs7UUFDakVLLGFBQWEsQ0FBQ04sVUFBVSxDQUFDLENBQUM7UUFDMUJPLFdBQVcsQ0FBQ04sUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHFCQUNJLDhEQUFDRSxnQkFBZ0IsQ0FBQ0ssUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRVQsVUFBVSxFQUFWQSxVQUFVO1lBQUVDLFFBQVEsRUFBUkEsUUFBUTtZQUFFQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtTQUFFO2tCQUN4RUcsUUFBUTs7Ozs7YUFDZSxDQUM5QjtBQUNOLENBQUMsQ0FBQztHQWRXRCxpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjtBQWdCdkIsSUFBTU0sWUFBWSxHQUFHLFdBQU07O0lBQzlCLElBQU1DLE9BQU8sR0FBR2QsaURBQVUsQ0FBQ00sZ0JBQWdCLENBQUM7SUFDNUMsSUFBSSxDQUFDUSxPQUFPLEVBQUU7UUFDVixNQUFNLElBQUlDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxPQUFPRCxPQUFPLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0lBTldELFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU2VudGllbmNlQ29udGV4dC50c3g/YWQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIElTZW50aWVuY2VDb250ZXh0IHtcclxuICAgIGlzU2VudGllbnQ6IGJvb2xlYW47XHJcbiAgICBzZXZlcml0eTogbnVtYmVyO1xyXG4gICAgc2V0U2VudGllbmNlU3RhdGU6IChpc1NlbnRpZW50OiBib29sZWFuLCBzZXZlcml0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsQ29udGV4dDogSVNlbnRpZW5jZUNvbnRleHQgPSB7XHJcbiAgICBpc1NlbnRpZW50OiBmYWxzZSxcclxuICAgIHNldmVyaXR5OiAwLFxyXG4gICAgc2V0U2VudGllbmNlU3RhdGU6ICgpID0+IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VudGllbmNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVNlbnRpZW5jZUNvbnRleHQ+KGluaXRpYWxDb250ZXh0KTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VudGllbmNlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lzU2VudGllbnQsIHNldElzU2VudGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NldmVyaXR5LCBzZXRTZXZlcml0eV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBzZXRTZW50aWVuY2VTdGF0ZSA9IChpc1NlbnRpZW50OiBib29sZWFuLCBzZXZlcml0eTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0SXNTZW50aWVudChpc1NlbnRpZW50KTtcclxuICAgICAgICBzZXRTZXZlcml0eShzZXZlcml0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbnRpZW5jZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNTZW50aWVudCwgc2V2ZXJpdHksIHNldFNlbnRpZW5jZVN0YXRlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TZW50aWVuY2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTZW50aWVuY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChTZW50aWVuY2VDb250ZXh0KTtcclxuICAgIGlmICghY29udGV4dCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXNlU2VudGllbmNlIG11c3QgYmUgdXNlZCB3aXRoaW4gU2VudGllbmNlUHJvdmlkZXInKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG59OyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiaW5pdGlhbENvbnRleHQiLCJpc1NlbnRpZW50Iiwic2V2ZXJpdHkiLCJzZXRTZW50aWVuY2VTdGF0ZSIsIlNlbnRpZW5jZUNvbnRleHQiLCJTZW50aWVuY2VQcm92aWRlciIsImNoaWxkcmVuIiwic2V0SXNTZW50aWVudCIsInNldFNldmVyaXR5IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNlbnRpZW5jZSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/SentienceContext.tsx\n"));

/***/ })

});