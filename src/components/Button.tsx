import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "accent" | "outline";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-300 px-7 py-3";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark btn-glow",
        secondary: "bg-dark text-white hover:bg-dark-light btn-glow",
        accent: "bg-accent text-dark hover:brightness-95 font-bold btn-glow shadow-[0_4px_14px_0_rgba(252,185,33,0.39)] hover:shadow-[0_6px_20px_rgba(252,185,33,0.23)]",
        outline:
            "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
