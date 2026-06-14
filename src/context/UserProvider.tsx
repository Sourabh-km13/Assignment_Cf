import { useCallback, useEffect, useState } from "react";
import type { User, UserFormValues } from "../types/userType";
import type { FormSubmission } from "../types/formType";
import UserContext from "./UserContext";
import { getAllUsers } from "../apis/userApi";
import { createUser, updateUser, deleteUser as removeUser } from "../services/userService";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [formSubmission, setFormSubmission] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  const loadUsers = useCallback(async (showLoading = true) => {
    if (showLoading) {
      setIsLoading(true);
      setLoadingError(null);
    }

    try {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load users.";
      setLoadingError(message);
      console.error("Unable to load users:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      await loadUsers();
    };

    void fetchUsers();
  }, [loadUsers]);
  const addSubmission = (submission: FormSubmission) => {
    setFormSubmission((current) => [...current, submission]);
  };

  const createUserHandler = (values: UserFormValues) => {
    setUsers((current) => createUser(current, values));
  };

  const updateUserHandler = (id: number, values: UserFormValues) => {
    setUsers((current) => updateUser(current, id, values));
  };

  const deleteUserHandler = (id: number) => {
    setUsers((current) => removeUser(current, id));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        formSubmission,
        addSubmission,
        createUser: createUserHandler,
        updateUser: updateUserHandler,
        deleteUser: deleteUserHandler,
        isLoading,
        loadingError,
        retryLoadUsers: loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
