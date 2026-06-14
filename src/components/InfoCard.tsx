export function InfoCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value?: string;
}) {
    return (
        <div className="rounded-2xl border p-4">
            <div className="flex items-center gap-2 text-slate-200">
                {icon}
                <span>{title}</span>
            </div>

            <p className="mt-2 font-medium text-slate-100">
                {value || "N/A"}
            </p>
        </div>
    );
}