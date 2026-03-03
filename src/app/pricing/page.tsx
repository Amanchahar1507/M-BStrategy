import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing built around growth. Flexible packages for Email Marketing, SEO, and Social Media management.",
};

const emailPlans = [
    {
        name: "Starter",
        price: "£750",
        description: "For brands getting started with strategic email marketing.",
        features: [
            "Email strategy & content direction",
            "Audience segmentation",
            "2 email campaigns per month",
            "Welcome sequence setup",
            "Monthly performance report",
            "Email & chat support",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        price: "£1,200",
        description: "For brands ready to scale email as a revenue channel.",
        features: [
            "Everything in Starter",
            "4 email campaigns per month",
            "Lead nurturing flows",
            "A/B testing & optimisation",
            "Advanced segmentation",
            "Bi-weekly strategy sessions",
            "Priority support",
        ],
        highlighted: true,
    },
    {
        name: "Scale",
        price: "£1,800+",
        description: "Full-service email marketing for high-growth brands.",
        features: [
            "Everything in Growth",
            "Unlimited campaigns",
            "Full automation setup",
            "Abandoned cart & re-engagement",
            "Copywriting & visual layout",
            "Custom reporting & attribution",
            "Dedicated strategist",
        ],
        highlighted: false,
    },
];

const seoPlans = [
    {
        name: "Foundation",
        price: "£800",
        description: "Lay the groundwork for sustainable organic growth.",
        features: [
            "SEO audit & technical analysis",
            "Keyword research & mapping",
            "On-page optimisation (5 pages)",
            "Monthly rank tracking",
            "Performance report",
            "Email & chat support",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        price: "£1,300",
        description: "Accelerate rankings and organic traffic.",
        features: [
            "Everything in Foundation",
            "On-page optimisation (10 pages)",
            "Content optimisation & copywriting",
            "Internal linking strategy",
            "Bi-weekly strategy sessions",
            "Competitor analysis",
            "Priority support",
        ],
        highlighted: true,
    },
    {
        name: "Authority",
        price: "£2,000+",
        description: "Dominate your niche with full-service SEO.",
        features: [
            "Everything in Growth",
            "Unlimited page optimisation",
            "Link building outreach",
            "Site structure & UX alignment",
            "Custom reporting & attribution",
            "Weekly strategy calls",
            "Dedicated SEO strategist",
        ],
        highlighted: false,
    },
];

const socialPlans = [
    {
        name: "Essentials",
        price: "£700",
        description: "Consistent social presence with professional content.",
        features: [
            "Strategy & content planning",
            "8 posts per month",
            "Brand-aligned creative design",
            "Content calendar",
            "Monthly analytics report",
            "Email & chat support",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        price: "£1,200",
        description: "Scale your social presence with strategic content.",
        features: [
            "Everything in Essentials",
            "16 posts per month",
            "Captions & storytelling",
            "Community management",
            "Platform optimisation",
            "Bi-weekly strategy sessions",
            "Priority support",
        ],
        highlighted: true,
    },
    {
        name: "Brand Authority",
        price: "£1,800+",
        description: "Full social management for ambitious brands.",
        features: [
            "Everything in Growth",
            "Unlimited posts",
            "Video & reel production",
            "Paid social strategy",
            "Custom reporting & insights",
            "Weekly strategy calls",
            "Dedicated creative team",
        ],
        highlighted: false,
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            Pricing
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Simple, Transparent Pricing{" "}
                            <span className="gradient-text">Built Around Growth</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            Our pricing reflects the level of strategy, execution, and
                            accountability we bring to every engagement. All packages are
                            flexible and can be tailored to your business stage, goals, and
                            workload.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Email Marketing Pricing */}
            <Section variant="gray">
                <SectionHeading
                    title="Email Marketing Pricing"
                    subtitle="Turn email into your highest ROI channel."
                />
                <div className="grid gap-8 items-center md:grid-cols-3">
                    {emailPlans.map((plan, i) => (
                        <PricingCard
                            key={plan.name}
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            highlighted={plan.highlighted}
                            delay={i * 0.15}
                        />
                    ))}
                </div>
            </Section>

            {/* SEO Pricing */}
            <Section variant="white">
                <SectionHeading
                    title="SEO Optimisation Pricing"
                    subtitle="Sustainable organic growth that compounds."
                />
                <div className="grid gap-8 items-center md:grid-cols-3">
                    {seoPlans.map((plan, i) => (
                        <PricingCard
                            key={plan.name}
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            highlighted={plan.highlighted}
                            delay={i * 0.15}
                        />
                    ))}
                </div>
            </Section>

            {/* Social Media Pricing */}
            <Section variant="gray">
                <SectionHeading
                    title="Social Media Pricing"
                    subtitle="Consistent, strategic social presence."
                />
                <div className="grid gap-8 items-center md:grid-cols-3">
                    {socialPlans.map((plan, i) => (
                        <PricingCard
                            key={plan.name}
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                            features={plan.features}
                            highlighted={plan.highlighted}
                            delay={i * 0.15}
                        />
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section variant="navy">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Not sure which plan fits your brand?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Book a free call and we&apos;ll recommend the best fit for your
                            goals.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Book a Free Strategy Call</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
