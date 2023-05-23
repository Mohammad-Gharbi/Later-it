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
exports.id = "pages/api/getArticles";
exports.ids = ["pages/api/getArticles"];
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

/***/ "(api)/./pages/api/getArticles.jsx":
/*!***********************************!*\
  !*** ./pages/api/getArticles.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function getPosts(req, res) {\n    await runMiddleware(req, res, cors);\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (session) {\n        const prismaUser = await prisma.user.findUnique({\n            where: {\n                email: session?.user?.email\n            }\n        });\n        const result = await prisma.article.findMany({\n            where: {\n                userId: prismaUser?.id\n            }\n        });\n        res.status(200).json(result);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QXJ0aWNsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ3NCO0FBQ0k7QUFDQztBQUVsRCxNQUFNSSxTQUFTLElBQUlILHdEQUFZQTtBQUUvQixNQUFNSSxPQUFPTCwyQ0FBSUEsQ0FBQztJQUNoQk0sU0FBUztRQUFDO1FBQVE7UUFBTztLQUFPO0FBQ2xDO0FBRUEsU0FBU0MsY0FBY0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEVBQUUsRUFBRTtJQUNuQyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUN0Q0gsR0FBR0YsS0FBS0MsS0FBSyxDQUFDSyxTQUFXO1lBQ3ZCLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEIsQ0FBQztZQUVELE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVlLGVBQWVFLFNBQVNSLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9DLE1BQU1GLGNBQWNDLEtBQUtDLEtBQUtKO0lBRTlCLE1BQU1ZLFVBQVUsTUFBTWYsZ0VBQWdCQSxDQUFDTSxLQUFLQyxLQUFLTix3REFBV0E7SUFDNUQsSUFBSWMsU0FBUztRQUNYLE1BQU1DLGFBQWEsTUFBTWQsT0FBT2UsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDOUNDLE9BQU87Z0JBQUVDLE9BQU9MLFNBQVNFLE1BQU1HO1lBQU07UUFDdkM7UUFDQSxNQUFNUixTQUFTLE1BQU1WLE9BQU9tQixPQUFPLENBQUNDLFFBQVEsQ0FBQztZQUMzQ0gsT0FBTztnQkFBRUksUUFBUVAsWUFBWVE7WUFBRztRQUNsQztRQUNBakIsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9nZXRBcnRpY2xlcy5qc3g/OGZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuL2F1dGgvWy4uLm5leHRhdXRoXVwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG1ldGhvZHM6IFtcIlBPU1RcIiwgXCJHRVRcIiwgXCJIRUFEXCJdLFxufSlcblxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycylcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgY29uc3QgcHJpc21hVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsIH0sXG4gICAgfSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuYXJ0aWNsZS5maW5kTWFueSh7XG4gICAgICB3aGVyZTogeyB1c2VySWQ6IHByaXNtYVVzZXI/LmlkIH0sXG4gICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb3JzIiwiUHJpc21hQ2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiZ2V0UG9zdHMiLCJzZXNzaW9uIiwicHJpc21hVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsImFydGljbGUiLCJmaW5kTWFueSIsInVzZXJJZCIsImlkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getArticles.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getArticles.jsx"));
module.exports = __webpack_exports__;

})();