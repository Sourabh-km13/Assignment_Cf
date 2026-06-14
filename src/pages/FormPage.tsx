import { useNavigate } from "react-router";
import Button from "../components/Button";

export default function FormPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl space-y-8 rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl">
        <div>
          <h1 className="text-4xl font-bold mb-3">Forms</h1>
          <p className="text-slate-400">Choose a form to complete for a resident.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Button onClick={() => navigate("/forms/health")}>Health Assessment Form</Button>
          <Button gradient="bg-gradient-to-r from-fuchsia-500 to-pink-500" onClick={() => navigate("/forms/incident")}>Incident Report Form</Button>
        </div>
      </div>
    </div>
  );
}
