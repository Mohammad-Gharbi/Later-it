(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/pages_api_getArticles.jsx_933664._.js", {

"[project]/pages/api/getArticles.jsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>getPosts
});
var __TURBOPACK__external__cors__ = __turbopack_external_require__("cors", true);
var __TURBOPACK__external__$40$prisma$2f$client__ = __turbopack_external_require__("@prisma/client", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const prisma = new __TURBOPACK__external__$40$prisma$2f$client__["PrismaClient"]();
const cors = __TURBOPACK__external__cors__["default"]({
    methods: [
        "POST",
        "GET",
        "HEAD"
    ]
});
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
async function getPosts(req, res) {
    await runMiddleware(req, res, cors);
    const prismaUser = await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        }
    });
    const result = await prisma.article.findMany({
        where: {
            userId: prismaUser.id
        }
    });
    res.status(200).json(result);
}

})()),
}]);

//# sourceMappingURL=pages_api_getArticles.jsx_933664._.js.map