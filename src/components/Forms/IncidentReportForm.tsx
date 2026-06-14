
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUsers } from "../../hooks/useUsers";
import type { IncidentReportFormData } from "../../types/formType";
import { UserSelect } from "../SelectUserForm";
import Field from "../ui/Field";

export const IncidentReportForm = () => {
  const { addSubmission } = useUsers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IncidentReportFormData>();

  const onSubmit = (
    data: IncidentReportFormData
  ) => {
    addSubmission({
      id: crypto.randomUUID(),
      userId: data.userId,
      formType: "incident-report",
      submittedAt: new Date().toISOString(),
      data,
    });
    reset();
    toast.success("Incident report submitted successfully.");
  };

  const onError = () => {
    toast.error("Please fix the errors before submitting the incident report.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="space-y-6 bg-transparent"
    >
      <UserSelect register={register} />
      {errors.userId && (
        <p className="text-sm text-rose-400">Please select a user.</p>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Field {...register("residentName", { required: "Resident name is required." })} placeholder="Resident Name" />
        {errors.residentName && (
          <p className="text-sm text-rose-400">{errors.residentName.message}</p>
        )}

        <Field {...register("caregiverName", { required: "Caregiver name is required." })} placeholder="Caregiver Name" />
        {errors.caregiverName && (
          <p className="text-sm text-rose-400">{errors.caregiverName.message}</p>
        )}

        <Field type="date" {...register("date", { required: "Date is required." })} />
        {errors.date && (
          <p className="text-sm text-rose-400">{errors.date.message}</p>
        )}

        <Field type="time" {...register("time", { required: "Time is required." })} />
        {errors.time && (
          <p className="text-sm text-rose-400">{errors.time.message}</p>
        )}

        <Field {...register("location", { required: "Location is required." })} placeholder="Location" />
        {errors.location && (
          <p className="text-sm text-rose-400">{errors.location.message}</p>
        )}

        <Field {...register("roomNo", { required: "Room number is required." })} placeholder="Room Number" />
        {errors.roomNo && (
          <p className="text-sm text-rose-400">{errors.roomNo.message}</p>
        )}
      </div>

      <div>
        <h2 className="text-slate-100 mb-3">
          Incident Type
        </h2>

        {[
          "Fall",
          "Medication Error",
          "Injury",
          "Behavioral Issue",
          "Other",
        ].map(type => (
          <label
            key={type}
            className="text-slate-300 flex gap-2"
          >
            <input
              type="checkbox"
              value={type}
              {...register("incidentType", {
                validate: (value) =>
                  (value?.length ?? 0) > 0 || "Select at least one incident type.",
              })}
            />

            {type}
          </label>
        ))}
      </div>

      <Field as="textarea" {...register("description", { required: "Description is required." })} placeholder="Incident Description" rows={5} />
      {errors.description && (
        <p className="text-sm text-rose-400">{errors.description.message}</p>
      )}

      <div>
        <h2 className="text-slate-100 mb-3">
          Actions Taken
        </h2>

        {[
          "Doctor Notified",
          "Family Notified",
          "Medication Given",
          "Observation Continued",
        ].map(action => (
          <label
            key={action}
            className="text-slate-300 flex gap-2"
          >
            <input
              type="checkbox"
              value={action}
              {...register("actionsTaken", {
                validate: (value) =>
                  (value?.length ?? 0) > 0 || "Select at least one action taken.",
              })}
            />

            {action}
          </label>
        ))}
      </div>

      <Field as="textarea" {...register("followUpNotes", { required: "Follow-up notes are required." })} placeholder="Additional Follow-up Notes" rows={5} />
      {errors.followUpNotes && (
        <p className="text-sm text-rose-400">{errors.followUpNotes.message}</p>
      )}

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};