import { useMemo } from "react";
import { useForm } from "react-hook-form";
import type { UserFormValues } from "../types/userType";

interface UserFormProps {
  defaultValues?: UserFormValues;
  onSubmit: (values: UserFormValues) => void;
  submitLabel: string;
}

export default function UserForm({ defaultValues, onSubmit, submitLabel }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues,
  });

  const addressLabel = useMemo(
    () => (defaultValues ? "Update" : "New"),
    [defaultValues]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Name</label>
          <input
            {...register("name", { required: "Name is required." })}
            placeholder="Full Name"
            className="input"
          />
          {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Username</label>
          <input
            {...register("username", { required: "Username is required." })}
            placeholder="Username"
            className="input"
          />
          {errors.username && <p className="text-sm text-rose-400">{errors.username.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email.",
              },
            })}
            placeholder="Email"
            className="input"
          />
          {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Phone</label>
          <input
            {...register("phone", { required: "Phone is required." })}
            placeholder="Phone"
            className="input"
          />
          {errors.phone && <p className="text-sm text-rose-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Website</label>
          <input
            {...register("website", { required: "Website is required." })}
            placeholder="Website"
            className="input"
          />
          {errors.website && <p className="text-sm text-rose-400">{errors.website.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Company</label>
          <input
            {...register("companyName", { required: "Company name is required." })}
            placeholder="Company Name"
            className="input"
          />
          {errors.companyName && <p className="text-sm text-rose-400">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Street</label>
          <input
            {...register("street", { required: "Street is required." })}
            placeholder="Street"
            className="input"
          />
          {errors.street && <p className="text-sm text-rose-400">{errors.street.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Suite</label>
          <input
            {...register("suite")}
            placeholder="Suite"
            className="input"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">City</label>
          <input
            {...register("city", { required: "City is required." })}
            placeholder="City"
            className="input"
          />
          {errors.city && <p className="text-sm text-rose-400">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Zipcode</label>
          <input
            {...register("zipcode", { required: "Zipcode is required." })}
            placeholder="Zipcode"
            className="input"
          />
          {errors.zipcode && <p className="text-sm text-rose-400">{errors.zipcode.message}</p>}
        </div>

        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-slate-200 mb-2">Geo Lat</label>
          <input
            {...register("lat")}
            placeholder="Lat"
            className="input"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-5 py-3 text-white hover:bg-sky-400 transition"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
