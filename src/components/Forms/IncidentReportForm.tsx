import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUsers";
import type { IncidentReportFormData } from "../../types/formType";
import { UserSelect } from "../SelectUserForm";

export const IncidentReportForm = () => {
  const { addSubmission } =
    useUsers();

  const {
    register,
    handleSubmit,
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
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <UserSelect register={register} />

      <div className="grid md:grid-cols-2 gap-4">
        <input
          {...register("residentName")}
          placeholder="Resident Name"
          className="input"
        />

        <input
          {...register("caregiverName")}
          placeholder="Caregiver Name"
          className="input"
        />

        <input
          type="date"
          {...register("date")}
          className="input"
        />

        <input
          type="time"
          {...register("time")}
          className="input"
        />

        <input
          {...register("location")}
          placeholder="Location"
          className="input"
        />

        <input
          {...register("roomNo")}
          placeholder="Room Number"
          className="input"
        />
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
              {...register("incidentType")}
            />

            {type}
          </label>
        ))}
      </div>

      <textarea
        {...register("description")}
        placeholder="Incident Description"
        rows={5}
        className="input"
      />

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
              {...register("actionsTaken")}
            />

            {action}
          </label>
        ))}
      </div>

      <textarea
        {...register("followUpNotes")}
        placeholder="Additional Follow-up Notes"
        rows={5}
        className="input"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};