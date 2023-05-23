(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/pages_api_getTag.jsx_0a4a02._.js", {

"[project]/pages/api/getTag.jsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>getTag
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
async function getTag(req, res) {
    await runMiddleware(req, res, cors);
    const prismaUser = await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        }
    });
    const result = await prisma.tag.findMany({
        where: {
            userId: prismaUser.id
        }
    });
    res.status(200).json(result);
}

})()),
}]);

//# sourceMappingURL=pages_api_getTag.jsx_0a4a02._.js.map