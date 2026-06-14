import { createContext } from "react";
import type { User } from "../types/userType";
import type { FormSubmission } from "../types/formType";


interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  formSubmission: FormSubmission[];
  addSubmission: (submission: FormSubmission) => void;
}

const UserContext =
  createContext<UserContextType | null>(null);  

export default UserContext;