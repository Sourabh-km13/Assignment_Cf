import React from "react";

type As = "input" | "textarea";

interface FieldBaseProps {
  label?: string;
  error?: string | boolean;
  as?: As;
  noBase?: boolean;
  className?: string;
}

type InputFieldProps = FieldBaseProps & React.InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};

type TextareaFieldProps = FieldBaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type FieldProps = InputFieldProps | TextareaFieldProps;

export default function Field({ label, error, as = "input", className = "", noBase = false, ...rest }: FieldProps) {
  const base =
    "w-full rounded-md bg-slate-900/60 border-2 border-blue-800/40 focus:border-amber-300 focus:ring-2 focus:ring-amber-300 px-3 py-2 text-white placeholder-slate-400 transition";

  const classes = noBase ? className : `${base} ${className}`;

  return (
    <div>
      {label && <label className="block text-sm font-medium text-slate-200 mb-2">{label}</label>}
      {as === "textarea" ? (
        <textarea {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} className={classes} />
      ) : (
        <input {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} className={classes} />
      )}

      {error && <p className="text-sm text-rose-400">{typeof error === "string" ? error : "Invalid"}</p>}
    </div>
  );
}
