import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  theme: {
    colorScheme: "dark",
    brandColor: "#7e2eff", // Hex color code
    logo: "", // Absolute URL to image
    buttonText: "#ffffff", // Hex color code
  },
}

export default NextAuth(authOptions)
