(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_inbox_page.jsx_eb4e1a._.js", {

"[project]/app/inbox/page.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>Inbox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$ArticlePreview$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(components)/ArticlePreview.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/redux/slices/apiSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-toast/dist/index.module.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function Inbox() {
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](0);
    const { data: articles , isLoading , isSuccess , isError , error  } = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useGetArticlesQuery"]();
    let content;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(()=>{
            setOpen(true);
        }, 100);
    }, [
        isLoading,
        isError
    ]);
    if (isLoading) {} else if (isSuccess) {
        content = articles?.filter((article)=>article.status == "Inbox").map((article)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$ArticlePreview$2e$jsx__$28$ecmascript$29$__["ArticlePreview"], {
                article: article
            }, void 0, false, {
                fileName: "<[project]/app/inbox/page.jsx>",
                lineNumber: 33,
                columnNumber: 25
            }, this));
    } else if (isError) {
        content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: error.toString()
        }, void 0, false, {
            fileName: "<[project]/app/inbox/page.jsx>",
            lineNumber: 35,
            columnNumber: 15
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "itemes-center relative flex h-screen w-full flex-col gap-5",
        children: [
            content,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Provider, {
                swipeDirection: "down",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Root, {
                        asChild: true,
                        className: "data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut absolute z-10 grid w-48 grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-[#7e2eff] p-[15px]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] transition-all ease-in-out [grid-template-areas:_'title_action'_'description_action'] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
                        open: open,
                        onOpenChange: setOpen,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Title, {
                            className: "fixed bottom-[10rem] right-0 mb-[5px] animate-pulse text-center text-lg text-[15px] font-bold text-white [grid-area:_title]",
                            children: "Loading"
                        }, void 0, false, {
                            fileName: "<[project]/app/inbox/page.jsx>",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/inbox/page.jsx>",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Viewport, {
                        className: "ToastViewport"
                    }, void 0, false, {
                        fileName: "<[project]/app/inbox/page.jsx>",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/inbox/page.jsx>",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/inbox/page.jsx>",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_inbox_page.jsx_eb4e1a._.js.map