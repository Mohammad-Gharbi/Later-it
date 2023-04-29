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
exports.id = "pages/api/deleteArticle";
exports.ids = ["pages/api/deleteArticle"];
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

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_5__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__.PrismaAdapter)(prisma),\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        // EmailProvider({\n        //   server: {\n        //     host: process.env.EMAIL_SERVER_HOST,\n        //     port: process.env.EMAIL_SERVER_PORT,\n        //     auth: {\n        //       user: process.env.EMAIL_SERVER_USER,\n        //       pass: process.env.EMAIL_SERVER_PASSWORD,\n        //     },\n        //   },\n        //   from: process.env.EMAIL_FROM,\n        // }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // pages: {\n    //   signIn: \"/auth/login\",\n    // },\n    theme: {\n        colorScheme: \"dark\",\n        brandColor: \"#7e2eff\",\n        logo: \"\",\n        buttonText: \"#ffffff\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3FCO0FBQ0U7QUFDVTtBQUVSO0FBQ1o7QUFFN0MsTUFBTU0sU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsTUFBTUUsY0FBYztJQUN6QkMsU0FBU0osd0VBQWFBLENBQUNFO0lBQ3ZCRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLFdBQVc7UUFDVCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLDJDQUEyQztRQUMzQywyQ0FBMkM7UUFDM0MsY0FBYztRQUNkLDZDQUE2QztRQUM3QyxpREFBaUQ7UUFDakQsU0FBUztRQUNULE9BQU87UUFDUCxrQ0FBa0M7UUFDbEMsTUFBTTtRQUVOWCxpRUFBY0EsQ0FBQztZQUNiWSxVQUFVSixRQUFRQyxHQUFHLENBQUNJLGdCQUFnQjtZQUN0Q0MsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxvQkFBb0I7UUFDaEQ7S0FDRDtJQUNELFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsS0FBSztJQUNMQyxPQUFPO1FBQ0xDLGFBQWE7UUFDYkMsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFlBQVk7SUFDZDtBQUNGLEVBQUM7QUFFRCxpRUFBZXRCLGdEQUFRQSxDQUFDTyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcblxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIEVtYWlsUHJvdmlkZXIoe1xuICAgIC8vICAgc2VydmVyOiB7XG4gICAgLy8gICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgIC8vICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAvLyAgICAgYXV0aDoge1xuICAgIC8vICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgIC8vICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRCxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIC8vIH0pLFxuXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICAvLyBwYWdlczoge1xuICAvLyAgIHNpZ25JbjogXCIvYXV0aC9sb2dpblwiLFxuICAvLyB9LFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImRhcmtcIixcbiAgICBicmFuZENvbG9yOiBcIiM3ZTJlZmZcIiwgLy8gSGV4IGNvbG9yIGNvZGVcbiAgICBsb2dvOiBcIlwiLCAvLyBBYnNvbHV0ZSBVUkwgdG8gaW1hZ2VcbiAgICBidXR0b25UZXh0OiBcIiNmZmZmZmZcIiwgLy8gSGV4IGNvbG9yIGNvZGVcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJFbWFpbFByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJicmFuZENvbG9yIiwibG9nbyIsImJ1dHRvblRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/deleteArticle.jsx":
/*!*************************************!*\
  !*** ./pages/api/deleteArticle.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteArticle)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function deleteArticle(req, res) {\n    await runMiddleware(req, res, cors);\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (req.method === \"POST\" && session) {\n        const { articleId  } = req.body;\n        const result = await prisma.article.delete({\n            where: {\n                id: articleId\n            }\n        });\n        res.status(200).json(result);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlQXJ0aWNsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUI7QUFDc0I7QUFDRDtBQUNjO0FBRTFELE1BQU1JLFNBQVMsSUFBSUgsd0RBQVlBO0FBRS9CLE1BQU1JLE9BQU9MLDJDQUFJQSxDQUFDO0lBQ2hCTSxTQUFTO1FBQUM7UUFBUTtRQUFPO0tBQU87QUFDbEM7QUFFQSxTQUFTQyxjQUFjQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFO0lBQ25DLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3RDSCxHQUFHRixLQUFLQyxLQUFLLENBQUNLLFNBQVc7WUFDdkIsSUFBSUEsa0JBQWtCQyxPQUFPO2dCQUMzQixPQUFPRixPQUFPQztZQUNoQixDQUFDO1lBRUQsT0FBT0YsUUFBUUU7UUFDakI7SUFDRjtBQUNGO0FBRWUsZUFBZUUsY0FBY1IsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDcEQsTUFBTUYsY0FBY0MsS0FBS0MsS0FBS0o7SUFDOUIsTUFBTVksVUFBVSxNQUFNZiwyREFBZ0JBLENBQUNNLEtBQUtDLEtBQUtOLGlFQUFXQTtJQUU1RCxJQUFJSyxJQUFJVSxNQUFNLEtBQUssVUFBVUQsU0FBUztRQUNwQyxNQUFNLEVBQUVFLFVBQVMsRUFBRSxHQUFHWCxJQUFJWSxJQUFJO1FBRTlCLE1BQU1OLFNBQVMsTUFBTVYsT0FBT2lCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO1lBQ3pDQyxPQUFPO2dCQUFFQyxJQUFJTDtZQUFVO1FBQ3pCO1FBRUFWLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDWjtJQUN2QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9wYWdlcy9hcGkvZGVsZXRlQXJ0aWNsZS5qc3g/OTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ycyBmcm9tIFwiY29yc1wiXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG1ldGhvZHM6IFtcIlBPU1RcIiwgXCJHRVRcIiwgXCJIRUFEXCJdLFxufSlcblxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQXJ0aWNsZShyZXEsIHJlcykge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpXG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiICYmIHNlc3Npb24pIHtcbiAgICBjb25zdCB7IGFydGljbGVJZCB9ID0gcmVxLmJvZHlcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5hcnRpY2xlLmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogYXJ0aWNsZUlkIH0sXG4gICAgfSlcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvcnMiLCJQcmlzbWFDbGllbnQiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJjb3JzIiwibWV0aG9kcyIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJkZWxldGVBcnRpY2xlIiwic2Vzc2lvbiIsIm1ldGhvZCIsImFydGljbGVJZCIsImJvZHkiLCJhcnRpY2xlIiwiZGVsZXRlIiwid2hlcmUiLCJpZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteArticle.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteArticle.jsx"));
module.exports = __webpack_exports__;

})();