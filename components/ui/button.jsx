export function Button({ className, variant = "default", size = "default", children, ...props }) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
    const variants = {
        default: "bg-[#0196ff] text-white hover:bg-[#0196ff]/90",
        outline: "border border-[#0196ff] text-[#0196ff] hover:bg-[#0196ff]/10",
    };
    const sizes = {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-sm",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}