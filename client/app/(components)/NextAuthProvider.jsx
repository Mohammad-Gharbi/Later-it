"use client"

import { SessionProvider, useSession } from "next-auth/react"

export default function NextAuthProvider({ children }, { session }) {
  return (
    <SessionProvider session={session} basePath="/api/auth">
      {children}
    </SessionProvider>
  )
}
