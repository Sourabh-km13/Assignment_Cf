
import { useForm } from "react-hook-form";
import type { UserFormValues } from "../../types/userType";
import Field from "../ui/Field";

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



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-transparent">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Name</label>
          <Field {...register("name", { required: "Name is required." })} placeholder="Full Name" />
          {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Username</label>
          <Field {...register("username", { required: "Username is required." })} placeholder="Username" />
          {errors.username && <p className="text-sm text-rose-400">{errors.username.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
          <Field
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email.",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Phone</label>
          <Field {...register("phone", { required: "Phone is required." })} placeholder="Phone" />
          {errors.phone && <p className="text-sm text-rose-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Website</label>
          <Field {...register("website", { required: "Website is required." })} placeholder="Website" />
          {errors.website && <p className="text-sm text-rose-400">{errors.website.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Company</label>
          <Field {...register("companyName", { required: "Company name is required." })} placeholder="Company Name" />
          {errors.companyName && <p className="text-sm text-rose-400">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Street</label>
          <Field {...register("street", { required: "Street is required." })} placeholder="Street" />
          {errors.street && <p className="text-sm text-rose-400">{errors.street.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Suite</label>
          <Field {...register("suite")} placeholder="Suite" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">City</label>
          <Field {...register("city", { required: "City is required." })} placeholder="City" />
          {errors.city && <p className="text-sm text-rose-400">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200 mb-2">Zipcode</label>
          <Field {...register("zipcode", { required: "Zipcode is required." })} placeholder="Zipcode" />
          {errors.zipcode && <p className="text-sm text-rose-400">{errors.zipcode.message}</p>}
        </div>

        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-slate-200 mb-2">Geo Lat</label>
          <Field {...register("lat")} placeholder="Lat" />
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
