import FadeIn from "./FadeIn";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    light = false,
}: SectionHeadingProps) {
    return (
        <FadeIn className={`mb-14 ${centered ? "text-center" : ""}`}>
            <div
                className={`mb-4 h-1 w-12 rounded-full bg-primary ${centered ? "mx-auto" : ""
                    }`}
            />
            <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-dark"
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-gray-300" : "text-gray-500"}`}
                >
                    {subtitle}
                </p>
            )}
        </FadeIn>
    );
}
