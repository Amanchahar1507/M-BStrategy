import FadeIn from "./FadeIn";
import Button from "./Button";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PricingCardProps {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    delay?: number;
}

export default function PricingCard({
    name,
    price,
    description,
    features,
    highlighted = false,
    delay = 0,
}: PricingCardProps) {
    return (
        <FadeIn delay={delay}>
            <div
                className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${highlighted
                    ? "bg-gradient-to-br from-dark via-[#0d2847] to-[#1a1145] text-white shadow-2xl ring-2 ring-primary scale-105"
                    : "bg-white text-dark border border-gray-100 shadow-md hover:shadow-2xl"
                    }`}
            >
                {/* Decorative gradient orb on highlighted card */}
                {highlighted && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -mr-10 -mt-10" />
                )}

                {highlighted && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary-light text-white text-xs font-bold px-5 py-1.5 rounded-bl-2xl tracking-wider">
                        MOST POPULAR
                    </div>
                )}

                <h3
                    className={`text-sm font-semibold uppercase tracking-wider ${highlighted ? "text-primary-light" : "text-primary"
                        }`}
                >
                    {name}
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-5xl font-extrabold tracking-tight ${highlighted ? "text-white" : "text-dark"}`}>{price}</span>
                    <span
                        className={`text-sm font-medium ${highlighted ? "text-gray-400" : "text-gray-400"
                            }`}
                    >
                        /month
                    </span>
                </div>
                <p
                    className={`mt-4 text-sm leading-relaxed ${highlighted ? "text-gray-300" : "text-gray-500"
                        }`}
                >
                    {description}
                </p>

                {/* Divider */}
                <div className={`my-8 h-px ${highlighted ? "bg-white/10" : "bg-gray-100"}`} />

                <ul className="space-y-4">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${highlighted ? "bg-primary/20" : "bg-primary/10"}`}>
                                <CheckIcon
                                    className={`h-3 w-3 ${highlighted ? "text-primary-light" : "text-primary"
                                        }`}
                                />
                            </div>
                            <span
                                className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <Button
                        href="/contact"
                        variant={highlighted ? "primary" : "outline"}
                        className={`w-full ${highlighted ? "shadow-[0_0_25px_rgba(37,99,235,0.4)]" : "border-gray-200 hover:border-primary hover:text-primary"}`}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </FadeIn>
    );
}
