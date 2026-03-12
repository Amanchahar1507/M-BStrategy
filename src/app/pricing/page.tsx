"use client";

import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    EnvelopeIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftRightIcon,
    SparklesIcon,
    CheckBadgeIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";

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

const whyUs = [
    {
        icon: <SparklesIcon className="h-6 w-6" />,
        title: "No Lock-in Contracts",
        desc: "Stay because it works, not because you're locked in. Month-to-month flexibility.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6" />,
        title: "Transparent Reporting",
        desc: "Real-time dashboards and detailed monthly reports. No vanity metrics.",
    },
    {
        icon: <RocketLaunchIcon className="h-6 w-6" />,
        title: "Scalable Packages",
        desc: "Start small and scale up as you grow. Every plan can be tailored to your stage.",
    },
];

export default function PricingPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== CORPORATE HERO ====== */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/pricing_hero_bg.png"
                        alt="Pricing Analytics Dashboard"
                        fill
                        className="object-cover opacity-10 scale-105 saturate-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-20">
                    <div className="absolute top-[15%] right-[15%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79, 87, 223, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(253, 214, 59, 0.3) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                            Pricing
                        </span>
                    </FadeIn>

                    <TextGenerateEffect
                        words="Simple, Scalable Pricing for Ambitious Brands"
                        className="text-4xl font-extrabold text-dark sm:text-5xl leading-[1.1] tracking-tight"
                    />

                    <FadeIn delay={0.4}>
                        <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                            Our pricing reflects the level of strategy, execution, and accountability we bring to every engagement. All packages are flexible and tailored to your growth stage.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ====== WHY CHOOSE US STRIP ====== */}
            <section className="relative py-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Brands Choose <span className="text-secondary">M&B Strategy</span></h2>
                    </FadeIn>
                    <div className="grid gap-6 md:grid-cols-3">
                        {whyUs.map((item, i) => (
                            <FadeIn key={item.title} delay={i * 0.15}>
                                <div className="group relative rounded-2xl bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 shadow-xl text-center">
                                    <div className="mx-auto mb-5 h-14 w-14 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shadow-lg">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/80 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== EMAIL MARKETING PRICING ====== */}
            <section className="relative py-24 bg-gradient-to-br from-soft-gray via-white to-soft-gray overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mt-20 -ml-20" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -mb-20 -mr-20" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4 py-2 px-5 rounded-full bg-primary/5 border border-primary/10">
                            <EnvelopeIcon className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Email Marketing</span>
                        </div>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl mt-4">Turn Email into Your <span className="gradient-text">Highest ROI</span> Channel</h2>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4">Strategic campaigns engineered for revenue growth.</p>
                    </FadeIn>
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
                </div>
            </section>

            {/* ====== SEO PRICING ====== */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-[80px] -mt-20 -mr-20" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -mb-20 -ml-20" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4 py-2 px-5 rounded-full bg-green-500/5 border border-green-500/10">
                            <MagnifyingGlassIcon className="h-5 w-5 text-green-600" />
                            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">SEO Optimisation</span>
                        </div>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl mt-4">Sustainable Organic Growth That <span className="gradient-text">Compounds</span></h2>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4">Dominate search results and drive qualified traffic.</p>
                    </FadeIn>
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
                </div>
            </section>

            {/* ====== SOCIAL MEDIA PRICING ====== */}
            <section className="relative py-24 bg-gradient-to-br from-soft-gray via-white to-soft-gray overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[80px] -mt-20" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4 py-2 px-5 rounded-full bg-purple-500/5 border border-purple-500/10">
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-purple-600" />
                            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Social Media</span>
                        </div>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl mt-4">Strategic Social Presence That <span className="gradient-text">Converts</span></h2>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto mt-4">Consistent content that builds community and drives revenue.</p>
                    </FadeIn>
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
                </div>
            </section>

            {/* ====== CORPORATE CTA ====== */}
            <section className="relative py-32 overflow-hidden bg-white border-t border-gray-200">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Not sure which plan <span className="italic text-primary">fits your brand?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Book a free strategy call and we&apos;ll recommend the perfect package to match your goals, budget, and growth stage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="primary" className="text-lg px-10 py-4 shadow-[0_4px_14px_0_rgba(79,87,223,0.39)] hover:shadow-[0_6px_20px_rgba(79,87,223,0.23)] hover:-translate-y-1 transition-all">
                                Book a Free Strategy Call
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
