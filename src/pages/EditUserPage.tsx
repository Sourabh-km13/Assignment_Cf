import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { useUsers } from "../hooks/useUsers";
import UserForm from "../components/UserForm";
import type { UserFormValues } from "../types/userType";

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser } = useUsers();

  const userId = Number(id);
  const user = users.find((item) => item.id === userId);

  const defaultValues = useMemo<UserFormValues | undefined>(() => {
    if (!user) return undefined;

    return {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      companyName: user.company.name,
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
      lat: user.address.geo.lat,
      lng: user.address.geo.lng,
    };
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>User not found.</p>
      </main>
    );
  }

  const handleSubmit = (values: UserFormValues) => {
    updateUser(userId, values);
    toast.success("User updated successfully.");
    navigate(`/users/${userId}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl">
        <h1 className="text-4xl font-bold mb-4">Edit User</h1>
        <UserForm defaultValues={defaultValues} submitLabel="Update User" onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
