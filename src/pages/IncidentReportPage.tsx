import { IncidentReportForm } from "../components/Forms/IncidentReportForm";

export default function IncidentReportPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Incident Report Form</h1>
          <p className="text-slate-400">Submit a new incident report for a resident.</p>
        </div>
        <IncidentReportForm />
      </div>
    </div>
  );
}
