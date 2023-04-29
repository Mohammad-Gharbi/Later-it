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

/***/ "(api)/./pages/api/getTag.jsx":
/*!******************************!*\
  !*** ./pages/api/getTag.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTag)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    methods: [\n        \"POST\",\n        \"GET\",\n        \"HEAD\"\n    ]\n});\nfunction runMiddleware(req, res, fn) {\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n}\nasync function getTag(req, res) {\n    await runMiddleware(req, res, cors);\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(req, res, pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    if (req.method === \"GET\" && session) {\n        const prismaUser = await prisma.user.findUnique({\n            where: {\n                email: session?.user?.email\n            }\n        });\n        const result = await prisma.tag.findMany({\n            where: {\n                userId: prismaUser.id\n            }\n        });\n        res.status(200).json(result);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGFnLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QjtBQUNzQjtBQUNJO0FBQ1M7QUFFMUQsTUFBTUksU0FBUyxJQUFJSCx3REFBWUE7QUFFL0IsTUFBTUksT0FBT0wsMkNBQUlBLENBQUM7SUFDaEJNLFNBQVM7UUFBQztRQUFRO1FBQU87S0FBTztBQUNsQztBQUVBLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFLEVBQUU7SUFDbkMsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7UUFDdENILEdBQUdGLEtBQUtDLEtBQUssQ0FBQ0ssU0FBVztZQUN2QixJQUFJQSxrQkFBa0JDLE9BQU87Z0JBQzNCLE9BQU9GLE9BQU9DO1lBQ2hCLENBQUM7WUFFRCxPQUFPRixRQUFRRTtRQUNqQjtJQUNGO0FBQ0Y7QUFFZSxlQUFlRSxPQUFPUixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QyxNQUFNRixjQUFjQyxLQUFLQyxLQUFLSjtJQUM5QixNQUFNWSxVQUFVLE1BQU1mLGdFQUFnQkEsQ0FBQ00sS0FBS0MsS0FBS04saUVBQVdBO0lBRTVELElBQUlLLElBQUlVLE1BQU0sS0FBSyxTQUFTRCxTQUFTO1FBQ25DLE1BQU1FLGFBQWEsTUFBTWYsT0FBT2dCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQzlDQyxPQUFPO2dCQUFFQyxPQUFPTixTQUFTRyxNQUFNRztZQUFNO1FBQ3ZDO1FBRUEsTUFBTVQsU0FBUyxNQUFNVixPQUFPb0IsR0FBRyxDQUFDQyxRQUFRLENBQUM7WUFDdkNILE9BQU87Z0JBQUVJLFFBQVFQLFdBQVdRLEVBQUU7WUFBQztRQUNqQztRQUNBbEIsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNmO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9nZXRUYWcuanN4P2VkZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSBcImNvcnNcIlxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG1ldGhvZHM6IFtcIlBPU1RcIiwgXCJHRVRcIiwgXCJIRUFEXCJdLFxufSlcblxuZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnKHJlcSwgcmVzKSB7XG4gIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucylcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIiAmJiBzZXNzaW9uKSB7XG4gICAgY29uc3QgcHJpc21hVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS50YWcuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiBwcmlzbWFVc2VyLmlkIH0sXG4gICAgfSlcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb3JzIiwiUHJpc21hQ2xpZW50IiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiY29ycyIsIm1ldGhvZHMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiZ2V0VGFnIiwic2Vzc2lvbiIsIm1ldGhvZCIsInByaXNtYVVzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJ0YWciLCJmaW5kTWFueSIsInVzZXJJZCIsImlkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTag.jsx\n");

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