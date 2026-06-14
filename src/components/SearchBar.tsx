import { Search, X } from "lucide-react";

interface UserSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function UserSearch({
    value,
    onChange,
}: UserSearchProps) {
    return (
        <div className="relative w-full max-w-xl">
            <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                value={value}
                placeholder="Search by name or email..."
                onChange={(e) => onChange(e.target.value)}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    text-white
                    py-3
                    pl-12
                    pr-12
                    text-sm
                    shadow-sm
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                    "
            />

            {value && (
                <button
                    onClick={() => onChange("")}
                    className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}