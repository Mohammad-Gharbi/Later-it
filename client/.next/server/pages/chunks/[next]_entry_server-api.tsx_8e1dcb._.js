(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[next]_entry_server-api.tsx_8e1dcb._.js", {

"[next]/entry/server-api.tsx/(INNER)/[project]/pages/api/getTag.jsx (ecmascript) (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/api-server-handler.ts (ecmascript)");
var __TURBOPACK__external__next$2f$dist$2f$server$2f$node$2d$polyfill$2d$fetch$2e$js__ = __turbopack_external_require__("next/dist/server/node-polyfill-fetch.js", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$getTag$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/pages/api/getTag.jsx (ecmascript)");
var __TURBOPACK__external__next$2f$dist$2f$server$2f$api$2d$utils$2f$node__ = __turbopack_external_require__("next/dist/server/api-utils/node", true);
var __TURBOPACK__external__next$2f$dist$2f$server$2f$base$2d$http$2f$node__ = __turbopack_external_require__("next/dist/server/base-http/node", true);
var __TURBOPACK__external__node$3a$querystring__ = __turbopack_external_require__("node:querystring", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$api$2d$server$2d$handler$2e$ts__$28$ecmascript$29$__["default"](({ request , response , query , params , path  })=>{
    const parsedQuery = __TURBOPACK__external__node$3a$querystring__["parse"](query);
    const mergedQuery = {
        ...parsedQuery,
        ...params
    };
    const req = new __TURBOPACK__external__next$2f$dist$2f$server$2f$base$2d$http$2f$node__["NodeNextRequest"](request);
    const res = new __TURBOPACK__external__next$2f$dist$2f$server$2f$base$2d$http$2f$node__["NodeNextResponse"](response);
    return __TURBOPACK__external__next$2f$dist$2f$server$2f$api$2d$utils$2f$node__["apiResolver"](req.originalRequest, res.originalResponse, mergedQuery, __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$getTag$2e$jsx__$28$ecmascript$29$__, {
        previewModeId: '',
        previewModeEncryptionKey: '',
        previewModeSigningKey: ''
    }, false, true, path);
});

})()),
}]);

//# sourceMappingURL=[next]_entry_server-api.tsx_8e1dcb._.js.map