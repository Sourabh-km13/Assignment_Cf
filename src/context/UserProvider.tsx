import { useState } from "react"
import type { User } from "../types/userType"
import UserContext from "./UserContext"

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([])

  return(
    <UserContext value={{ users, setUsers }}>
      {children}
    </UserContext>
  )
}
