import { IncidentReportForm } from "../components/Forms/IncidentReportForm";

export default function IncidentReportPage() {
  return (
    <div className="space-y-10 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Incident Report Form</h1>
        <p className="text-slate-400 mb-8">Submit a new incident report for a resident.</p>
        <IncidentReportForm />
      </div>
    </div>
  );
}
