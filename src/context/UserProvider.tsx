import { useEffect, useState } from "react";
import type { User } from "../types/userType";
import type { FormSubmission } from "../types/formType";
import UserContext from "./UserContext";
import { getAllUsers } from "../apis/userApi";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [formSubmission, setFormSubmission] = useState<FormSubmission[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Unable to load users:", error);
      }
    }

    loadUsers();
  }, []);

  const addSubmission = (submission: FormSubmission) => {
    setFormSubmission((current) => [...current, submission]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        formSubmission,
        addSubmission,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
