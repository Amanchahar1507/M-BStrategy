import Link from "next/link";
import { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    href: string;
    linkText?: string;
    delay?: number;
}

export default function ServiceCard({
    icon,
    title,
    description,
    href,
    linkText = "Learn more",
    delay = 0,
}: ServiceCardProps) {
    return (
        <FadeIn delay={delay}>
            <Link href={href} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                            {icon}
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-navy">{title}</h3>
                        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
                        <div className="mt-4 inline-flex items-center text-sm font-semibold text-electric group-hover:gap-2 transition-all">
                            {linkText}
                            <svg
                                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
}
