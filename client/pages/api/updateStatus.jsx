import Cors from "cors"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

const prisma = new PrismaClient()

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function updateStatus(req, res) {
  await runMiddleware(req, res, cors)

  const session = await getServerSession(req, res, authOptions)
  if (session) {
    const { articleId, status } = req.body

    const result = await prisma.article.update({
      where: { id: articleId },
      data: {
        status: status,
      },
    })

    res.status(200).json(result)
  }
}
