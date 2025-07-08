// TitleBar.tsx
'use client'

import { UserButton, useUser as civicUseUser } from "@civic/auth/react"

type CivicUser = {
  email?: string
  username?: string
  name?: string
  id?: string
  [key: string]: any
}

export function useCivicUser() {
  const raw = civicUseUser()
  const user = raw?.user ?? null

  const isLoggedIn = !!user
  const email = user?.email ?? null
  const username = user?.username ?? user?.name ?? null
  const id = user?.id ?? null

  return { isLoggedIn, email, username, id, user }
}


export function TitleBar() {
  return (
    <div className="flex items-center justify-center m-10">
      <UserButton />
    </div>
  )
}
