import { useForm } from "react-hook-form";
import { useUsers } from "../../hooks/useUsers";
import type { HealthAssessmentFormData } from "../../types/formType";
import { UserSelect } from "../SelectUserForm";

export const HealthAssessmentForm = () => {
    const { addSubmission } =
        useUsers();

    const {
        register,
        handleSubmit,
    } = useForm<HealthAssessmentFormData>();

    const onSubmit = (
        data: HealthAssessmentFormData
    ) => {
        addSubmission({
            id: crypto.randomUUID(),
            userId: data.userId,
            formType: "health-assessment",
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
                    {...register("age")}
                    placeholder="Age"
                    className="input"
                />

                <input
                    {...register("gender")}
                    placeholder="Gender"
                    className="input"
                />

                <input
                    {...register("roomNo")}
                    placeholder="Room Number"
                    className="input"
                />

                <input
                    type="date"
                    {...register("date")}
                    className="input"
                />
            </div>

            <div className="rounded-xl border border-slate-700 p-4">
                <h2 className="text-slate-100 mb-4">
                    Vital Signs
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        {...register("temperature")}
                        placeholder="Temperature"
                        className="input"
                    />

                    <input
                        {...register("bloodPressure")}
                        placeholder="Blood Pressure"
                        className="input"
                    />

                    <input
                        {...register("heartRate")}
                        placeholder="Heart Rate"
                        className="input"
                    />

                    <input
                        {...register("oxygenLevel")}
                        placeholder="Oxygen Level"
                        className="input"
                    />

                    <input
                        {...register("respiratoryRate")}
                        placeholder="Respiratory Rate"
                        className="input"
                    />
                </div>
            </div>

            <div>
                <h2 className="text-slate-100 mb-3">
                    Symptoms
                </h2>

                <div className="grid grid-cols-2 gap-3">
                    {[
                        "Fever",
                        "Cough",
                        "Fatigue",
                        "Headache",
                        "Shortness of Breath",
                        "Dizziness",
                    ].map(symptom => (
                        <label
                            key={symptom}
                            className="text-slate-300 flex gap-2"
                        >
                            <input
                                type="checkbox"
                                value={symptom}
                                {...register("symptoms")}
                            />

                            {symptom}
                        </label>
                    ))}
                </div>
            </div>

            <textarea
                {...register("caregiverNotes")}
                placeholder="Caregiver Notes"
                rows={5}
                className="input"
            />

            <input
                {...register("signature")}
                placeholder="Caregiver Signature"
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