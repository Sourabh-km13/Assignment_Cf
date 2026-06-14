import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUsers";
import type { IncidentReportFormData } from "../../types/formType";
import { UserSelect } from "../SelectUserForm";

export const IncidentReportForm = () => {
  const { addSubmission } = useUsers();
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {submitted && (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-200">
          Incident report submitted successfully.
        </div>
      )}
      <UserSelect register={register} />
      {errors.userId && (
        <p className="text-sm text-rose-400">Please select a user.</p>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <input
          {...register("residentName", { required: "Resident name is required." })}
          placeholder="Resident Name"
          className="input"
        />
        {errors.residentName && (
          <p className="text-sm text-rose-400">{errors.residentName.message}</p>
        )}

        <input
          {...register("caregiverName", { required: "Caregiver name is required." })}
          placeholder="Caregiver Name"
          className="input"
        />
        {errors.caregiverName && (
          <p className="text-sm text-rose-400">{errors.caregiverName.message}</p>
        )}

        <input
          type="date"
          {...register("date", { required: "Date is required." })}
          className="input"
        />
        {errors.date && (
          <p className="text-sm text-rose-400">{errors.date.message}</p>
        )}

        <input
          type="time"
          {...register("time", { required: "Time is required." })}
          className="input"
        />
        {errors.time && (
          <p className="text-sm text-rose-400">{errors.time.message}</p>
        )}

        <input
          {...register("location", { required: "Location is required." })}
          placeholder="Location"
          className="input"
        />
        {errors.location && (
          <p className="text-sm text-rose-400">{errors.location.message}</p>
        )}

        <input
          {...register("roomNo", { required: "Room number is required." })}
          placeholder="Room Number"
          className="input"
        />
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

      <textarea
        {...register("description", { required: "Description is required." })}
        placeholder="Incident Description"
        rows={5}
        className="input"
      />
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

      <textarea
        {...register("followUpNotes", { required: "Follow-up notes are required." })}
        placeholder="Additional Follow-up Notes"
        rows={5}
        className="input"
      />
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