import { createContext } from "react";
import type { User, UserFormValues } from "../types/userType";
import type { FormSubmission } from "../types/formType";

interface UserContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  formSubmission: FormSubmission[];
  addSubmission: (submission: FormSubmission) => void;
  createUser: (values: UserFormValues) => void;
  updateUser: (id: number, values: UserFormValues) => void;
  deleteUser: (id: number) => void;
}

const UserContext =
  createContext<UserContextType | null>(null);

export default UserContext;