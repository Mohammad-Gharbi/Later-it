(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/redux_store_store_5b3f02.js", {

"[project]/redux/store/store.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/redux/slices/apiSlice.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["configureStore"]({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["apiSlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["apiSlice"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["apiSlice"].middleware)
});

})()),
}]);

//# sourceMappingURL=redux_store_store_5b3f02.js.map