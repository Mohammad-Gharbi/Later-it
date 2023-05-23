(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_(components)_ArticlePreview.jsx_efe73b._.js", {

"[project]/app/(components)/DropDownMenu.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "DropDownMenu": ()=>DropDownMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/redux/slices/apiSlice.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-select/dist/index.module.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
function DropDownMenu({ position , articleId , articleURL , articleStatus , articleTag  }) {
    const { data: tags , isLoadingTags , isSuccess  } = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useGetTagQuery"]();
    const [tagArticle] = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useTagArticleMutation"]();
    const [deleteArticle, { isLoading  }] = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useDeleteArticleMutation"]();
    const [updateStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useUpdateStatusMutation"]();
    const [removeTagArticle] = __TURBOPACK__imported__module__$5b$project$5d2f$redux$2f$slices$2f$apiSlice$2e$js__$28$ecmascript$29$__["useRemoveTagArticleMutation"]();
    let listTags;
    if (isLoadingTags) {
        listTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "text-white",
            children: "Loading"
        }, void 0, false, {
            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
            lineNumber: 32,
            columnNumber: 16
        }, this);
    } else if (isSuccess) {
        listTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex flex-col items-start",
            children: tags.map((tag)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                    children: articleTag === tag.tagName ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: async ()=>await removeTagArticle({
                                articleId,
                                tag: tag.tagName
                            }),
                        children: [
                            'Remove From "',
                            tag.tagName,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                        lineNumber: 39,
                        columnNumber: 15
                    }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: async ()=>await tagArticle({
                                articleId,
                                tag: tag.tagName
                            }),
                        children: [
                            'Add To "',
                            tag.tagName,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                        lineNumber: 47,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                    lineNumber: 37,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `${position} right-10  top-0 mt-5`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Root, {
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Trigger, {
                    className: "outline-none",
                    asChild: true,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "h-5 w-5 text-white ",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            class: "lucide lucide-more-horizontal",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                    cx: "19",
                                    cy: "12",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                                    cx: "5",
                                    cy: "12",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Portal, {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Content, {
                        className: "flex h-72 w-48 flex-col items-start justify-between rounded-xl bg-[#282828] p-4 text-base font-normal text-white outline-none",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: articleStatus === "Later" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: async ()=>updateStatus({
                                            articleId,
                                            status: "Inbox"
                                        }),
                                    children: "Move To Inbox"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: async ()=>updateStatus({
                                            articleId,
                                            status: "Later"
                                        }),
                                    children: "Read Later"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: articleStatus === "Archive" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: async ()=>updateStatus({
                                            articleId,
                                            status: "Inbox"
                                        }),
                                    children: "Move To Inbox"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: async ()=>updateStatus({
                                            articleId,
                                            status: "Archive"
                                        }),
                                    children: "Archive"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "rect",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                        width: "169",
                                        height: "1",
                                        viewBox: "0 0 169 1",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                            x: "0.25",
                                            y: "0.25",
                                            width: "168.5",
                                            height: "0.5",
                                            rx: "0.25",
                                            fill: "#D9D9D9",
                                            stroke: "#535353",
                                            "stroke-width": "0.5"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            listTags,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "rect",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                        width: "169",
                                        height: "1",
                                        viewBox: "0 0 169 1",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                            x: "0.25",
                                            y: "0.25",
                                            width: "168.5",
                                            height: "0.5",
                                            rx: "0.25",
                                            fill: "#D9D9D9",
                                            stroke: "#535353",
                                            "stroke-width": "0.5"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: articleURL,
                                    target: "_blank",
                                    children: "Open Original"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(articleURL);
                                    },
                                    children: "Copy Source URL"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "rect",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                        width: "169",
                                        height: "1",
                                        viewBox: "0 0 169 1",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("rect", {
                                            x: "0.25",
                                            y: "0.25",
                                            width: "168.5",
                                            height: "0.5",
                                            rx: "0.25",
                                            fill: "#D9D9D9",
                                            stroke: "#535353",
                                            "stroke-width": "0.5"
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                    onClick: async ()=>await deleteArticle({
                                            articleId
                                        }),
                                    className: "text-[#FF6363]",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
const SelectItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["forwardRef"](({ children , className , ...props }, forwardedRef)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.Item, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$28$ecmascript$29$__["default"]("text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none", className),
        ...props,
        ref: forwardedRef,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.ItemText, {
                children: children
            }, void 0, false, {
                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$module$2e$js__$28$ecmascript$29$__.ItemIndicator, {
                className: "absolute left-0 inline-flex w-[20px] items-center justify-center",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-white",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        class: "lucide lucide-check",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("polyline", {
                            points: "20 6 9 17 4 12"
                        }, void 0, false, {
                            fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                            lineNumber: 247,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
                lineNumber: 233,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/(components)/DropDownMenu.jsx>",
        lineNumber: 224,
        columnNumber: 7
    }, this);
});

})()),
"[project]/app/(components)/ArticlePreview.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "ArticlePreview": ()=>ArticlePreview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$DropDownMenu$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/(components)/DropDownMenu.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function ArticlePreview({ article  }) {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative h-32 w-full",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$components$292f$DropDownMenu$2e$jsx__$28$ecmascript$29$__["DropDownMenu"], {
                position: "absolute",
                articleId: article.id,
                articleURL: article.url,
                articleStatus: article.status,
                articleTag: article.tag
            }, void 0, false, {
                fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                onClick: ()=>router.push(`/article/${article.id}`),
                className: "flex h-32 w-full cursor-pointer flex-row items-center rounded-3xl bg-[#282828] p-4 transition-all ease-in-out hover:bg-[#414141]",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mr-10 h-24 w-32 rounded-xl bg-black",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                            className: "h-24 w-32 rounded-xl object-cover",
                            src: article.lead_image_url
                        }, void 0, false, {
                            fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex w-full flex-col gap-2",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex w-full flex-row items-center justify-between",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-3xl font-bold text-white",
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "text-sm font-medium text-[#C0C0C0] ",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex w-full flex-row items-center justify-between text-sm font-medium text-[#8B8B8B]",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: `${article.domain} • ${article.author} • ${Math.round(article.word_count / 200)}mins `
                                    }, void 0, false, {
                                        fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    article.tags?.map((tag)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                            className: " h-fit w-16 rounded-md bg-slate-600 py-1 text-center text-xs font-bold text-white ",
                                            children: tag
                                        }, void 0, false, {
                                            fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/(components)/ArticlePreview.jsx>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_(components)_ArticlePreview.jsx_efe73b._.js.map