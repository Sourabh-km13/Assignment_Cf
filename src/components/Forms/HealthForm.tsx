import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUsers } from "../../hooks/useUsers";
import type { HealthAssessmentFormData } from "../../types/formType";
import { UserSelect } from "../SelectUserForm";

export const HealthAssessmentForm = () => {
    const { addSubmission } = useUsers();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<HealthAssessmentFormData>({
        defaultValues: {
            activities: {
                walk: { morning: false, afternoon: false, evening: false },
                exercise: { morning: false, afternoon: false, evening: false },
                therapy: { morning: false, afternoon: false, evening: false },
                socialInteraction: { morning: false, afternoon: false, evening: false },
            },
            meals: {
                breakfast: false,
                lunch: false,
                dinner: false,
                snacks: false,
            },
        },
    });

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
        reset();
        toast.success("Health assessment submitted successfully.");
    };

    const onError = () => {
        toast.error("Please fix the errors before submitting the health assessment.");
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
                <input
                    {...register("residentName", { required: "Resident name is required." })}
                    placeholder="Resident Name"
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.residentName && (
                    <p className="text-sm text-rose-400">{errors.residentName.message}</p>
                )}

                <input
                    {...register("caregiverName", { required: "Caregiver name is required." })}
                    placeholder="Caregiver Name"
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.caregiverName && (
                    <p className="text-sm text-rose-400">{errors.caregiverName.message}</p>
                )}

                <input
                    type="number"
                    {...register("age", {
                        required: "Age is required.",
                        valueAsNumber: true,
                    })}
                    placeholder="Age"
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.age && (
                    <p className="text-sm text-rose-400">{errors.age.message}</p>
                )}

                <input
                    {...register("gender", { required: "Gender is required." })}
                    placeholder="Gender"
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.gender && (
                    <p className="text-sm text-rose-400">{errors.gender.message}</p>
                )}

                <input
                    {...register("roomNo", { required: "Room number is required." })}
                    placeholder="Room Number"
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.roomNo && (
                    <p className="text-sm text-rose-400">{errors.roomNo.message}</p>
                )}

                <input
                    type="date"
                    {...register("date", { required: "Date is required." })}
                    className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                />
                {errors.date && (
                    <p className="text-sm text-rose-400">{errors.date.message}</p>
                )}
            </div>

            <div className="rounded-xl border border-slate-700 p-4">
                <h2 className="text-slate-100 mb-4">
                    Vital Signs
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        {...register("temperature", { required: "Temperature is required." })}
                        placeholder="Temperature"
                        className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                    />
                    {errors.temperature && (
                        <p className="text-sm text-rose-400">{errors.temperature.message}</p>
                    )}

                    <input
                        {...register("bloodPressure", { required: "Blood pressure is required." })}
                        placeholder="Blood Pressure"
                        className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                    />
                    {errors.bloodPressure && (
                        <p className="text-sm text-rose-400">{errors.bloodPressure.message}</p>
                    )}

                    <input
                        {...register("heartRate", { required: "Heart rate is required." })}
                        placeholder="Heart Rate"
                        className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                    />
                    {errors.heartRate && (
                        <p className="text-sm text-rose-400">{errors.heartRate.message}</p>
                    )}

                    <input
                        {...register("oxygenLevel", { required: "Oxygen level is required." })}
                        placeholder="Oxygen Level"
                        className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                    />
                    {errors.oxygenLevel && (
                        <p className="text-sm text-rose-400">{errors.oxygenLevel.message}</p>
                    )}

                    <input
                        {...register("respiratoryRate", { required: "Respiratory rate is required." })}
                        placeholder="Respiratory Rate"
                        className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
                    />
                    {errors.respiratoryRate && (
                        <p className="text-sm text-rose-400">{errors.respiratoryRate.message}</p>
                    )}
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
                {...register("caregiverNotes", { required: "Caregiver notes are required." })}
                placeholder="Caregiver Notes"
                rows={5}
                className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
            />
            {errors.caregiverNotes && (
                <p className="text-sm text-rose-400">{errors.caregiverNotes.message}</p>
            )}

            <input
                {...register("signature", { required: "Caregiver signature is required." })}
                placeholder="Caregiver Signature"
                className="w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition"
            />
            {errors.signature && (
                <p className="text-sm text-rose-400">{errors.signature.message}</p>
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