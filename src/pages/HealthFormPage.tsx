import { HealthAssessmentForm } from "../components/Forms/HealthForm";

export default function HealthFormPage() {
  return (
    <div className="space-y-10 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Health Assessment Form</h1>
        <p className="text-slate-400 mb-8">Complete the resident health assessment details below.</p>
        <HealthAssessmentForm />
      </div>
    </div>
  );
}
