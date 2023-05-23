"use strict";
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
exports.id = "pages/api/getTag";
exports.ids = ["pages/api/getTag"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            params: {\n                prompt: \"consent\",\n                access_type: \"offline\",\n                response_type: \"code\"\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDRTtBQUNaO0FBRTdDLE1BQU1JLFNBQVMsSUFBSUQsd0RBQVlBO0FBRXhCLE1BQU1FLGNBQWM7SUFDekJDLFNBQVNKLHdFQUFhQSxDQUFDRTtJQUN2QkcsV0FBVztRQUNUTixpRUFBY0EsQ0FBQztZQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLFFBQVE7Z0JBQ05DLFFBQVE7Z0JBQ1JDLGFBQWE7Z0JBQ2JDLGVBQWU7WUFDakI7UUFDRjtLQUNEO0lBQ0RDLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ1MsVUFBVTtBQUNoQyxFQUFDO0FBQ0QsaUVBQWVuQixnREFBUUEsQ0FBQ0ssWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxuICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbn1cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwic2VjcmV0IiwiSldUX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/getTag.jsx":
/*!******************************!*\
  !*** ./pages/api/getTag.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTag)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function getTag(req, res) {\n    await runMiddleware(req, res, cors);\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (session) {\n        const prismaUser = await prisma.user.findUnique({\n            where: {\n                email: session?.user?.email\n            }\n        });\n        const result = await prisma.tag.findMany({\n            where: {\n                userId: prismaUser.id\n            }\n        });\n        res.status(200).json(result);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGFnLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QjtBQUNzQjtBQUNJO0FBQ0M7QUFFbEQsTUFBTUksU0FBUyxJQUFJSCx3REFBWUE7QUFFL0IsTUFBTUksT0FBT0wsMkNBQUlBLENBQUM7SUFDaEJNLFNBQVM7UUFBQztRQUFRO1FBQU87S0FBTztBQUNsQztBQUVBLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDbkMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDdENILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0ssU0FBVztZQUN2QixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCLENBQUM7WUFFRCxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFZSxlQUFlRSxPQUFPUixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxNQUFNRixjQUFjQyxLQUFLQyxLQUFLSjtJQUU5QixNQUFNWSxVQUFVLE1BQU1mLGdFQUFnQkEsQ0FBQ00sS0FBS0MsS0FBS04sd0RBQVdBO0lBQzVELElBQUljLFNBQVM7UUFDWCxNQUFNQyxhQUFhLE1BQU1kLE9BQU9lLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQzlDQyxPQUFPO2dCQUFFQyxPQUFPTCxTQUFTRSxNQUFNRztZQUFNO1FBQ3ZDO1FBRUEsTUFBTVIsU0FBUyxNQUFNVixPQUFPbUIsR0FBRyxDQUFDQyxRQUFRLENBQUM7WUFDdkNILE9BQU87Z0JBQUVJLFFBQVFQLFdBQVdRLEVBQUU7WUFBQztRQUNqQztRQUNBakIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9nZXRUYWcuanN4P2VkZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi9hdXRoL1suLi5uZXh0YXV0aF1cIlxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuY29uc3QgY29ycyA9IENvcnMoe1xuICBtZXRob2RzOiBbXCJQT1NUXCIsIFwiR0VUXCIsIFwiSEVBRFwiXSxcbn0pXG5cbmZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZyhyZXEsIHJlcykge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucylcbiAgaWYgKHNlc3Npb24pIHtcbiAgICBjb25zdCBwcmlzbWFVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJpc21hLnRhZy5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHByaXNtYVVzZXIuaWQgfSxcbiAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvcnMiLCJQcmlzbWFDbGllbnQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJjb3JzIiwibWV0aG9kcyIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJnZXRUYWciLCJzZXNzaW9uIiwicHJpc21hVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInRhZyIsImZpbmRNYW55IiwidXNlcklkIiwiaWQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTag.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTag.jsx"));
module.exports = __webpack_exports__;

})();