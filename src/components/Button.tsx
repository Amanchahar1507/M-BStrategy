import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "outline";
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
        primary: "bg-electric text-white hover:bg-electric-dark btn-glow",
        secondary: "bg-navy text-white hover:bg-navy-light btn-glow",
        outline:
            "border-2 border-electric text-electric hover:bg-electric hover:text-white",
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
