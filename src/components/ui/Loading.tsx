interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <div
        role="status"
        className="h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-slate-200/70 border-white"
      />
      <p className="text-lg font-semibold text-slate-100">{message}</p>
    </div>
  );
}
