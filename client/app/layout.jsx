import "./globals.css"
import { Inter } from "next/font/google"
import NextAuthProvider from "./(components)/NextAuthProvider"

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] })

export const metadata = {
  title: "Later it.",
  description: "Crafting Unique Digital Experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen overflow-scroll bg-[#111111]`}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
