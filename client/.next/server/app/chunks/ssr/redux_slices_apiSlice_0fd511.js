(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/redux_slices_apiSlice_0fd511.js", {

"[project]/redux/slices/apiSlice.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "apiSlice": ()=>apiSlice,
    "useAddArticleMutation": ()=>useAddArticleMutation,
    "useAddNewTagMutation": ()=>useAddNewTagMutation,
    "useDeleteArticleMutation": ()=>useDeleteArticleMutation,
    "useDeleteTagMutation": ()=>useDeleteTagMutation,
    "useGetArticlesQuery": ()=>useGetArticlesQuery,
    "useGetTagQuery": ()=>useGetTagQuery,
    "useRemoveTagArticleMutation": ()=>useRemoveTagArticleMutation,
    "useTagArticleMutation": ()=>useTagArticleMutation,
    "useUpdateStatusMutation": ()=>useUpdateStatusMutation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const apiSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: "api",
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: "/api"
    }),
    tagTypes: [
        "Article"
    ],
    endpoints: (builder)=>({
            getArticles: builder.query({
                query: ()=>"/getArticles",
                providesTags: [
                    "Article"
                ]
            }),
            addArticle: builder.mutation({
                query: (articleURL)=>({
                        url: "/addArticle",
                        method: "POST",
                        body: articleURL
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            deleteArticle: builder.mutation({
                query: (articleId)=>({
                        url: "/deleteArticle",
                        method: "POST",
                        body: articleId
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            updateStatus: builder.mutation({
                query: ({ articleId , status  })=>({
                        url: "/updateStatus",
                        method: "POST",
                        body: {
                            articleId,
                            status
                        }
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            addNewTag: builder.mutation({
                query: ({ tagName  })=>({
                        url: "/addNewTag",
                        method: "POST",
                        body: {
                            tagName
                        }
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            tagArticle: builder.mutation({
                query: ({ articleId , tag  })=>({
                        url: "/tagArticle",
                        method: "POST",
                        body: {
                            articleId,
                            tag
                        }
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            getTag: builder.query({
                query: ()=>"/getTag",
                providesTags: [
                    "Article"
                ]
            }),
            deleteTag: builder.mutation({
                query: ({ tagId  })=>({
                        url: "/deleteTag",
                        method: "POST",
                        body: {
                            tagId
                        }
                    }),
                invalidatesTags: [
                    "Article"
                ]
            }),
            removeTagArticle: builder.mutation({
                query: ({ articleId , tag  })=>({
                        url: "/removeTagArticle",
                        method: "POST",
                        body: {
                            articleId,
                            tag
                        }
                    }),
                invalidatesTags: [
                    "Article"
                ]
            })
        })
});
const { useGetArticlesQuery , useAddArticleMutation , useDeleteArticleMutation , useUpdateStatusMutation , useTagArticleMutation , useGetTagQuery , useAddNewTagMutation , useDeleteTagMutation , useRemoveTagArticleMutation  } = apiSlice;

})()),
}]);

//# sourceMappingURL=redux_slices_apiSlice_0fd511.js.map