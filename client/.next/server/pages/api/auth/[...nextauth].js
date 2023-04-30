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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_5__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_4__.PrismaAdapter)(prisma),\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            server: {\n                host: process.env.EMAIL_SERVER_HOST,\n                port: process.env.EMAIL_SERVER_PORT,\n                auth: {\n                    user: process.env.EMAIL_SERVER_USER,\n                    pass: process.env.EMAIL_SERVER_PASSWORD\n                }\n            },\n            from: process.env.EMAIL_FROM\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    // pages: {\n    //   signIn: \"/auth/login\",\n    // },\n    theme: {\n        colorScheme: \"dark\",\n        brandColor: \"#7e2eff\",\n        logo: \"\",\n        buttonText: \"#ffffff\"\n    },\n    cookies: {\n        sessionToken: {\n            name: `__Secure-next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"None\",\n                path: \"/\",\n                secure: true\n            }\n        },\n        callbackUrl: {\n            name: `__Secure-next-auth.callback-url`,\n            options: {\n                sameSite: \"None\",\n                path: \"/\",\n                secure: true\n            }\n        },\n        csrfToken: {\n            name: `__Host-next-auth.csrf-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"None\",\n                path: \"/\",\n                secure: true\n            }\n        },\n        pkceCodeVerifier: {\n            name: `${cookiePrefix}next-auth.pkce.code_verifier`,\n            options: {\n                httpOnly: true,\n                sameSite: \"None\",\n                path: \"/\",\n                secure: useSecureCookies,\n                maxAge: 900\n            }\n        },\n        state: {\n            name: `${cookiePrefix}next-auth.state`,\n            options: {\n                httpOnly: true,\n                sameSite: \"None\",\n                path: \"/\",\n                secure: useSecureCookies,\n                maxAge: 900\n            }\n        },\n        nonce: {\n            name: `${cookiePrefix}next-auth.nonce`,\n            options: {\n                httpOnly: true,\n                sameSite: \"None\",\n                path: \"/\",\n                secure: useSecureCookies\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3FCO0FBQ0U7QUFDVTtBQUVSO0FBQ1o7QUFFN0MsTUFBTU0sU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsTUFBTUUsY0FBYztJQUN6QkMsU0FBU0osd0VBQWFBLENBQUNFO0lBQ3ZCRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLFdBQVc7UUFDVFosZ0VBQWFBLENBQUM7WUFDWmEsUUFBUTtnQkFDTkMsTUFBTUwsUUFBUUMsR0FBRyxDQUFDSyxpQkFBaUI7Z0JBQ25DQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNPLGlCQUFpQjtnQkFDbkNDLE1BQU07b0JBQ0pDLE1BQU1WLFFBQVFDLEdBQUcsQ0FBQ1UsaUJBQWlCO29CQUNuQ0MsTUFBTVosUUFBUUMsR0FBRyxDQUFDWSxxQkFBcUI7Z0JBQ3pDO1lBQ0Y7WUFDQUMsTUFBTWQsUUFBUUMsR0FBRyxDQUFDYyxVQUFVO1FBQzlCO1FBRUF2QixpRUFBY0EsQ0FBQztZQUNid0IsVUFBVWhCLFFBQVFDLEdBQUcsQ0FBQ2dCLGdCQUFnQjtZQUN0Q0MsY0FBY2xCLFFBQVFDLEdBQUcsQ0FBQ2tCLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0QsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixLQUFLO0lBQ0xDLE9BQU87UUFDTEMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLE1BQU07UUFDTkMsWUFBWTtJQUNkO0lBQ0FDLFNBQVM7UUFDUEMsY0FBYztZQUNaQyxNQUFNLENBQUMsZ0NBQWdDLENBQUM7WUFDeENDLFNBQVM7Z0JBQ1BDLFVBQVUsSUFBSTtnQkFDZEMsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUSxJQUFJO1lBQ2Q7UUFDRjtRQUNBQyxhQUFhO1lBQ1hOLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQztZQUN2Q0MsU0FBUztnQkFDUEUsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUSxJQUFJO1lBQ2Q7UUFDRjtRQUNBRSxXQUFXO1lBQ1RQLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztZQUNuQ0MsU0FBUztnQkFDUEMsVUFBVSxJQUFJO2dCQUNkQyxVQUFVO2dCQUNWQyxNQUFNO2dCQUNOQyxRQUFRLElBQUk7WUFDZDtRQUNGO1FBQ0FHLGtCQUFrQjtZQUNoQlIsTUFBTSxDQUFDLEVBQUVTLGFBQWEsNEJBQTRCLENBQUM7WUFDbkRSLFNBQVM7Z0JBQ1BDLFVBQVUsSUFBSTtnQkFDZEMsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUUs7Z0JBQ1JDLFFBQVE7WUFDVjtRQUNGO1FBQ0FDLE9BQU87WUFDTFosTUFBTSxDQUFDLEVBQUVTLGFBQWEsZUFBZSxDQUFDO1lBQ3RDUixTQUFTO2dCQUNQQyxVQUFVLElBQUk7Z0JBQ2RDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVFLO2dCQUNSQyxRQUFRO1lBQ1Y7UUFDRjtRQUNBRSxPQUFPO1lBQ0xiLE1BQU0sQ0FBQyxFQUFFUyxhQUFhLGVBQWUsQ0FBQztZQUN0Q1IsU0FBUztnQkFDUEMsVUFBVSxJQUFJO2dCQUNkQyxVQUFVO2dCQUNWQyxNQUFNO2dCQUNOQyxRQUFRSztZQUNWO1FBQ0Y7SUFDRjtBQUNGLEVBQUM7QUFFRCxpRUFBZS9DLGdEQUFRQSxDQUFDTyxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcblxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pLFxuXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuICAvLyBwYWdlczoge1xuICAvLyAgIHNpZ25JbjogXCIvYXV0aC9sb2dpblwiLFxuICAvLyB9LFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImRhcmtcIixcbiAgICBicmFuZENvbG9yOiBcIiM3ZTJlZmZcIiwgLy8gSGV4IGNvbG9yIGNvZGVcbiAgICBsb2dvOiBcIlwiLCAvLyBBYnNvbHV0ZSBVUkwgdG8gaW1hZ2VcbiAgICBidXR0b25UZXh0OiBcIiNmZmZmZmZcIiwgLy8gSGV4IGNvbG9yIGNvZGVcbiAgfSxcbiAgY29va2llczoge1xuICAgIHNlc3Npb25Ub2tlbjoge1xuICAgICAgbmFtZTogYF9fU2VjdXJlLW5leHQtYXV0aC5zZXNzaW9uLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcIk5vbmVcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYWxsYmFja1VybDoge1xuICAgICAgbmFtZTogYF9fU2VjdXJlLW5leHQtYXV0aC5jYWxsYmFjay11cmxgLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzYW1lU2l0ZTogXCJOb25lXCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NyZlRva2VuOiB7XG4gICAgICBuYW1lOiBgX19Ib3N0LW5leHQtYXV0aC5jc3JmLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcIk5vbmVcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwa2NlQ29kZVZlcmlmaWVyOiB7XG4gICAgICBuYW1lOiBgJHtjb29raWVQcmVmaXh9bmV4dC1hdXRoLnBrY2UuY29kZV92ZXJpZmllcmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJOb25lXCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBzZWN1cmU6IHVzZVNlY3VyZUNvb2tpZXMsXG4gICAgICAgIG1heEFnZTogOTAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICBuYW1lOiBgJHtjb29raWVQcmVmaXh9bmV4dC1hdXRoLnN0YXRlYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcIk5vbmVcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdXNlU2VjdXJlQ29va2llcyxcbiAgICAgICAgbWF4QWdlOiA5MDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbm9uY2U6IHtcbiAgICAgIG5hbWU6IGAke2Nvb2tpZVByZWZpeH1uZXh0LWF1dGgubm9uY2VgLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6IFwiTm9uZVwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgc2VjdXJlOiB1c2VTZWN1cmVDb29raWVzLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkVtYWlsUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb3ZpZGVycyIsInNlcnZlciIsImhvc3QiLCJFTUFJTF9TRVJWRVJfSE9TVCIsInBvcnQiLCJFTUFJTF9TRVJWRVJfUE9SVCIsImF1dGgiLCJ1c2VyIiwiRU1BSUxfU0VSVkVSX1VTRVIiLCJwYXNzIiwiRU1BSUxfU0VSVkVSX1BBU1NXT1JEIiwiZnJvbSIsIkVNQUlMX0ZST00iLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJicmFuZENvbG9yIiwibG9nbyIsImJ1dHRvblRleHQiLCJjb29raWVzIiwic2Vzc2lvblRva2VuIiwibmFtZSIsIm9wdGlvbnMiLCJodHRwT25seSIsInNhbWVTaXRlIiwicGF0aCIsInNlY3VyZSIsImNhbGxiYWNrVXJsIiwiY3NyZlRva2VuIiwicGtjZUNvZGVWZXJpZmllciIsImNvb2tpZVByZWZpeCIsInVzZVNlY3VyZUNvb2tpZXMiLCJtYXhBZ2UiLCJzdGF0ZSIsIm5vbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();