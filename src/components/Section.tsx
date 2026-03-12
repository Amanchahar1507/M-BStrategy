import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    variant?: "white" | "gray" | "dark";
    className?: string;
    id?: string;
}

export default function Section({
    children,
    variant = "white",
    className = "",
    id,
}: SectionProps) {
    const bgMap = {
        white: "bg-white text-dark",
        gray: "bg-soft-gray text-dark",
        dark: "bg-dark text-white",
    };

    return (
        <section id={id} className={`py-20 lg:py-28 ${bgMap[variant]} ${className}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
        </section>
    );
}
