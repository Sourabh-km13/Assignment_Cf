import { useNavigate } from "react-router";
import { useUsers } from "../hooks/useUsers";
import UserForm from "../components/UserForm";
import type { UserFormValues } from "../types/userType";

export default function NewUserPage() {
  const { createUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (values: UserFormValues) => {
    createUser(values);
    navigate("/users");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl">
        <h1 className="text-4xl font-bold mb-4">Add New User</h1>
        <UserForm submitLabel="Create User" onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
