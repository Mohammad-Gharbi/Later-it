import Cors from "cors"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"

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

export default async function deleteTag(req, res) {
  await runMiddleware(req, res, cors)
  const session = await getServerSession(req, res, authOptions)

  if (req.method === "POST" && session) {
    const { tagId } = req.body

    const result = await prisma.tag.delete({
      where: { id: tagId },
    })

    res.status(200).json(result)
  }
}
