interface ErrorViewProps {
  message?: string;
  onRetry?: () => void;
  buttonLabel?: string;
}

export default function ErrorView({
  message = "Unable to load data.",
  onRetry,
  buttonLabel = "Retry",
}: ErrorViewProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 rounded-3xl border border-rose-500/30 bg-rose-500/5 p-8 text-center text-white">
      <p className="text-xl font-semibold text-rose-100">Something went wrong</p>
      <p className="max-w-xl text-sm text-slate-300">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
