import { useContext } from "react";
import UserContext from "../context/UserContext";


export function useUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "No users available in the context."
    );

  }

  return context;
}