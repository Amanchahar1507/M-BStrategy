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
                className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${highlighted
                        ? "bg-navy text-white shadow-2xl ring-2 ring-electric scale-105"
                        : "bg-white text-navy border border-gray-200 shadow-sm hover:shadow-xl"
                    }`}
            >
                {highlighted && (
                    <div className="absolute top-0 right-0 bg-electric text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                        POPULAR
                    </div>
                )}

                <h3
                    className={`text-lg font-semibold ${highlighted ? "text-gray-300" : "text-gray-500"
                        }`}
                >
                    {name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{price}</span>
                    <span
                        className={`text-sm ${highlighted ? "text-gray-400" : "text-gray-400"
                            }`}
                    >
                        /month
                    </span>
                </div>
                <p
                    className={`mt-3 text-sm ${highlighted ? "text-gray-300" : "text-gray-500"
                        }`}
                >
                    {description}
                </p>

                <ul className="mt-8 space-y-3">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckIcon
                                className={`h-5 w-5 flex-shrink-0 ${highlighted ? "text-electric-light" : "text-electric"
                                    }`}
                            />
                            <span
                                className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="mt-8">
                    <Button
                        href="/contact"
                        variant={highlighted ? "primary" : "outline"}
                        className="w-full"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </FadeIn>
    );
}
