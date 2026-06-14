import { createContext } from "react";
import type { User } from "../types/userType";


interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserContext =
  createContext<UserContextType | null>(null);  

export default UserContext;