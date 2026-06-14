import React from "react";

type As = "input" | "textarea";

interface FieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | boolean | undefined;
  as?: As;
  noBase?: boolean;
}

export default function Field({ label, error, as = "input", className = "", noBase = false, ...rest }: FieldProps) {
  const base =
    "w-full rounded-md bg-slate-900/60 border-2 border-amber-400/80 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition";

  const classes = noBase ? className : `${base} ${className}`;

  return (
    <div>
      {label && <label className="block text-sm font-medium text-slate-200 mb-2">{label}</label>}
      {as === "textarea" ? (
        // textarea props included in FieldProps
        <textarea {...(rest as any)} className={classes} />
      ) : (
        <input {...(rest as any)} className={classes} />
      )}

      {error && <p className="text-sm text-rose-400">{typeof error === "string" ? error : "Invalid"}</p>}
    </div>
  );
}
