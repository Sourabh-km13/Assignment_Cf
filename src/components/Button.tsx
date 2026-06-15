interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    gradient?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    onClick,
    className = "",
    gradient = "bg-gradient-to-r from-blue-600 to-cyan-500",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`group relative overflow-hidden rounded-xl px-10 py-4 font-semibold text-white transition-all duration-300 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-105"} ${className}`}
        >
            <span
                className={`absolute inset-0 ${gradient}`}
            ></span>

            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-opacity duration-300"></span>

            <span className="relative">{children}</span>
        </button>
    );
}