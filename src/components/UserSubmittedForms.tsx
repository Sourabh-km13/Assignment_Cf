import type { FormSubmission } from "../types/formType";

interface UserSubmittedFormsProps {
  submissions: FormSubmission[];
}

const formTitles: Record<string, string> = {
  "health-assessment": "Health Assessment",
  "incident-report": "Incident Report",
};

export default function UserSubmittedForms({ submissions }: UserSubmittedFormsProps) {
  return (
    <section className="mt-6 rounded-3xl bg-slate-800/40 p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-white">Submitted Forms</h2>

      {submissions.length === 0 ? (
        <p className="text-slate-300">No submitted forms yet for this user.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <article
              key={submission.id}
              className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    {formTitles[submission.formType] ?? submission.formType}
                  </p>
                  <p className="text-lg font-semibold text-white">{new Date(submission.submittedAt).toLocaleString()}</p>
                </div>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                  {submission.formType === "health-assessment" ? "Health" : "Incident"}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
