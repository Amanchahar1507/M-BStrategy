"use client";

import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    EnvelopeIcon,
    ChartBarIcon,
    CogIcon,
    UserGroupIcon,
    ArrowTrendingUpIcon,
    BoltIcon,
    PencilSquareIcon,
    FunnelIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        icon: <CogIcon className="h-6 w-6" />,
        title: "Strategy & Planning",
        desc: "Goals, funnels, content direction, and KPIs — all mapped before we write a single email.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Audience Segmentation",
        desc: "Clean, segmented lists that improve deliverability and engagement rates.",
    },
    {
        icon: <EnvelopeIcon className="h-6 w-6" />,
        title: "Welcome & Onboarding",
        desc: "First impressions matter. We craft sequences that build trust from day one.",
    },
    {
        icon: <FunnelIcon className="h-6 w-6" />,
        title: "Lead Nurturing Flows",
        desc: "Automated flows that move leads through your funnel with relevant, timely content.",
    },
    {
        icon: <PencilSquareIcon className="h-6 w-6" />,
        title: "Copywriting & Design",
        desc: "On-brand copy and beautiful templates that look perfect on every device.",
    },
    {
        icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
        title: "A/B Testing & Optimisation",
        desc: "Continuous testing of subject lines, content, and send times for peak performance.",
    },
    {
        icon: <ChartBarIcon className="h-6 w-6" />,
        title: "Campaign Emails",
        desc: "Data-driven campaigns personalised for each segment of your audience.",
    },
    {
        icon: <BoltIcon className="h-6 w-6" />,
        title: "Cart & Re-engagement",
        desc: "Win back lost conversions and re-engage dormant subscribers automatically.",
    },
];

const results = [
    "Higher open & click-through rates",
    "Increased customer lifetime value",
    "Consistent, predictable revenue from email",
    "Stronger brand loyalty & retention",
    "Lower customer acquisition costs",
    "Automated revenue while you sleep",
];

export default function EmailMarketingPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== CORPORATE HERO ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/email_hero_bg.png"
                        alt="Email Marketing Background"
                        fill
                        className="object-cover opacity-10 scale-105 saturate-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-20">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79, 87, 223, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(253, 214, 59, 0.3) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
                                <EnvelopeIcon className="h-4 w-4" />
                                Email Marketing
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Email Marketing Designed to Drive Engagement & Revenue"
                            className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl leading-[1.1]"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                                From strategy to automation, we help you turn email into your highest ROI channel — built around your audience, not generic templates.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button href="/contact" variant="primary" className="shadow-[0_4px_14px_0_rgba(79,87,223,0.39)]">
                                    Get a Free Email Audit
                                </Button>
                                <Button href="/pricing" variant="outline" className="border-gray-300 text-dark hover:border-dark hover:bg-dark hover:text-white">
                                    View Pricing
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== STATS STRIP ====== */}
            <section className="relative py-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">The Numbers That <span className="text-secondary">Speak for Themselves</span></h2>
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 47, suffix: "%", label: "Avg. Open Rate" },
                            { value: 36, suffix: "x", label: "ROI on Email" },
                            { value: 200, suffix: "%", label: "Revenue Uplift" },
                            { value: 98, suffix: "%", label: "Deliverability" },
                        ].map((stat, i) => (
                            <FadeIn key={stat.label} delay={i * 0.1}>
                                <div className="group rounded-2xl bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 shadow-xl text-center">
                                    <StatsCounter value={stat.value} suffix={stat.suffix} label={stat.label} light={true} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== WHAT WE DO (Image + Text Layout) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 30%, #f5f3ff 60%, #f8fafc 100%)' }}>
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mt-32 -mr-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -mb-32 -ml-32" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/5 border border-primary/10">
                                    <EnvelopeIcon className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl leading-tight">
                                    What Makes Our <span className="gradient-text">Email Systems</span> Different
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    At M&B Strategy, we design email systems that nurture relationships,
                                    build trust, and drive consistent revenue over time. We focus on
                                    where your audience is in their journey, crafting messages that feel
                                    relevant, timely, and valuable.
                                </p>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Every campaign is tied to a clear objective, whether onboarding,
                                    conversion, retention, or re-engagement. No random blasts — just
                                    strategic communication that compounds.
                                </p>
                                <div className="relative pl-6 border-l-4 border-primary my-8 py-4 bg-white/80 rounded-r-2xl pr-6 shadow-sm">
                                    <p className="text-xl text-dark leading-relaxed font-bold italic">
                                        &ldquo;Email isn&apos;t dead — it&apos;s the most profitable channel you&apos;re probably underusing.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="relative h-full min-h-[450px] lg:min-h-[600px]">
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/email_automation_3d.png"
                                    alt="Email Automation Pipeline"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                    <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                                        Automated flows that nurture leads 24/7 — while you focus on growing your business.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== SERVICES GRID ====== */}
            <section className="relative py-28 bg-soft-gray overflow-hidden border-y border-gray-200">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                    <SectionHeading
                        title="Our Email Marketing Services"
                        subtitle=""
                        light={false}
                    />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto -mt-4">
                        A full-stack approach to email marketing — from strategy to automation to performance optimization.
                    </p>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.08}>
                                <div className="group relative h-full rounded-3xl bg-white border border-gray-100 p-8 hover:bg-gray-50 transition-all duration-300 overflow-hidden shadow-lg shadow-gray-200/50 hover:-translate-y-1">
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform shadow-sm">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-dark mb-2 tracking-wide">{f.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        {f.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== WHO IT'S FOR + RESULTS ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 50%, #f5f3ff 100%)' }}>
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -mt-20" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] -mb-20" />
                {/* Subtle background image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/images/email_automation_3d.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-[0.04] scale-150 rotate-12 grayscale"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Who It's For */}
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/5 border border-primary/10">
                                    <UserGroupIcon className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who It&apos;s For</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
                                    Is Email Marketing <span className="gradient-text">Right for You?</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Ideal for brands with an existing email list that isn&apos;t delivering results, or businesses looking to turn email into a long-term revenue channel rather than an afterthought.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {["E-commerce brands wanting more repeat purchases", "SaaS companies needing better onboarding flows", "Service businesses building client relationships", "Founders who want revenue on autopilot"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-dark">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Results */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-green-500/5 border border-green-500/10">
                                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-600" />
                                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Results</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
                                    What You Can <span className="gradient-text">Expect</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Higher engagement, increased customer lifetime value, and more consistent revenue from your existing audience.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {results.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-sm font-medium text-dark">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
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
                            Ready to boost your <span className="italic text-primary">email revenue?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Get a free audit of your current email performance and a custom roadmap to higher open rates, more clicks, and more conversions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="primary" className="text-lg px-10 py-4 shadow-[0_4px_14px_0_rgba(79,87,223,0.39)] hover:shadow-[0_6px_20px_rgba(79,87,223,0.23)] hover:-translate-y-1 transition-all">
                                Book a Free Email Strategy Call
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
