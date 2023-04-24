import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import "../app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] })

export default function SignIn({ providers }) {
  return (
    <div
      className={`${inter.className} flex h-screen w-screen flex-col items-center bg-[#111111] py-44`}
    >
      <div className="mb-4 text-5xl font-bold text-white">Welcome</div>
      {providers
        ? Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="h-14 w-48 rounded-xl bg-[#7E2EFF] text-lg font-medium text-white"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))
        : ""}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: "/inbox" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
