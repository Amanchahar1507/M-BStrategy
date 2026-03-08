"use client";

import Image from "next/image";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    MagnifyingGlassIcon,
    DocumentTextIcon,
    LinkIcon,
    ChartBarIcon,
    CommandLineIcon,
    GlobeAltIcon,
    ArrowPathIcon,
    CheckCircleIcon,
    ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        icon: <CommandLineIcon className="h-6 w-6" />,
        title: "SEO Audits & Technical Analysis",
        desc: "Comprehensive crawl of your site to identify technical barriers to ranking.",
    },
    {
        icon: <MagnifyingGlassIcon className="h-6 w-6" />,
        title: "Keyword Research & Intent Mapping",
        desc: "In-depth analysis to find high-intent keywords your competitors are missing.",
    },
    {
        icon: <DocumentTextIcon className="h-6 w-6" />,
        title: "On-Page Optimisation",
        desc: "Title tags, meta descriptions, headings, and content structured for search success.",
    },
    {
        icon: <GlobeAltIcon className="h-6 w-6" />,
        title: "Content & SEO Copywriting",
        desc: "Keyword-driven content that captures search demand and builds topical authority.",
    },
    {
        icon: <LinkIcon className="h-6 w-6" />,
        title: "Internal Linking Strategy",
        desc: "Smart internal linking architecture that distributes authority and improves crawlability.",
    },
    {
        icon: <ArrowPathIcon className="h-6 w-6" />,
        title: "Site Structure & UX Alignment",
        desc: "Ensuring your site architecture supports both search engines and user experience.",
    },
    {
        icon: <ChartBarIcon className="h-6 w-6" />,
        title: "Performance Tracking & Reporting",
        desc: "Weekly rank tracking, traffic analysis, and conversion reporting with actionable insights.",
    },
];

const results = [
    "Higher search engine rankings for target keywords",
    "Increased organic traffic month-over-month",
    "Stronger domain authority & topical relevance",
    "Better lead quality from search-intent traffic",
    "Reduced dependency on paid ads",
    "Compounding growth that builds over time",
];

export default function SEOPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== IMMERSIVE HERO (Emerald/Teal theme) ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #021a0e 0%, #0a2e1c 30%, #0d3b2a 50%, #062419 100%)' }}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/seo_hero_bg.png"
                        alt="SEO Analytics Command Center"
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2e1c]/30 to-[#021a0e]/90" />
                </div>

                {/* Ambient glowing orbs — green theme */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6 tracking-wide uppercase shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                <MagnifyingGlassIcon className="h-4 w-4" />
                                SEO Optimisation
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="SEO Optimisation That Puts Your Brand on Page One"
                            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
                                We help your ideal customers find you organically through search-led strategies that compound over time — not quick fixes, but lasting results.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button href="/contact" variant="primary" className="!bg-emerald-500 hover:!bg-emerald-600 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                                    Get a Free SEO Audit
                                </Button>
                                <Button href="/pricing" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    View Pricing
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== STATS STRIP (Emerald theme) ====== */}
            <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #021a0e 0%, #0a2e1c 50%, #062419 100%)' }}>
                <div className="absolute inset-0 z-0">
                    <Image src="/images/seo_hero_bg.png" alt="SEO" fill className="object-cover opacity-10 mix-blend-screen" />
                </div>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">SEO Delivers <span className="text-emerald-400">Compounding Returns</span></h2>
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 340, suffix: "%", label: "Organic Traffic Growth" },
                            { value: 85, suffix: "%", label: "Keywords on Page 1" },
                            { value: 12, suffix: "x", label: "Lead Generation Uplift" },
                            { value: 99, suffix: "%", label: "Client Retention" },
                        ].map((stat, i) => (
                            <FadeIn key={stat.label} delay={i * 0.1}>
                                <div className="group rounded-2xl bg-white/5 border border-emerald-500/15 p-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] text-center">
                                    <StatsCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== OUR PHILOSOPHY (Image + Text) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0fdfa 60%, #f8fafc 100%)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mt-32 -mr-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] -mb-32 -ml-32" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                                    <MagnifyingGlassIcon className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Our Philosophy</span>
                                </div>
                                <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl leading-tight">
                                    Search-Led Growth That <span className="text-emerald-600">Compounds</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    SEO isn&apos;t about chasing algorithms — it&apos;s about understanding
                                    search intent and aligning your website with what your audience is
                                    actively searching for.
                                </p>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Our approach focuses on sustainable optimisation, ensuring rankings,
                                    traffic, and conversions grow together. Every action we take is
                                    designed to build long-term organic authority.
                                </p>
                                <div className="relative pl-6 border-l-4 border-emerald-500 my-8 py-4 bg-white/80 rounded-r-2xl pr-6 shadow-sm">
                                    <p className="text-xl text-navy leading-relaxed font-bold italic">
                                        &ldquo;The best time to invest in SEO was yesterday. The second best time is now.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="relative h-full min-h-[450px] lg:min-h-[600px]">
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/seo_growth_3d.png"
                                    alt="SEO Growth Concept"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#021a0e]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                    <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                                        Organic growth that compounds — every month stronger than the last.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== SERVICES GRID (Dark Emerald Glassmorphism) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #021a0e 0%, #0a2e1c 30%, #0d3b2a 60%, #062419 100%)' }}>
                <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
                    <Image src="/images/seo_hero_bg.png" alt="Texture" fill className="object-cover rotate-180 scale-125 grayscale" />
                </div>
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our SEO <span className="text-emerald-400">Services</span></h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
                            Everything you need to dominate search, managed end-to-end with full transparency.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.08}>
                                <div className="group relative h-full rounded-3xl bg-white/5 border border-emerald-500/15 p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl -mr-8 -mt-8 group-hover:bg-emerald-500/20 transition-colors" />
                                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{f.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== RESULTS + WHO IT'S FOR ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdfa 100%)' }}>
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px] -mt-20" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[80px] -mb-20" />
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="/images/seo_growth_3d.png" alt="Background" fill className="object-cover opacity-[0.03] scale-150 rotate-12 grayscale" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Results */}
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                                    <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-600" />
                                    <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Results</span>
                                </div>
                                <h2 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    What You Can <span className="text-emerald-600">Expect</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Improved visibility, higher-quality inbound traffic, stronger engagement, and increased lead generation without relying solely on paid ads.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {results.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-emerald-500/10 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all">
                                            <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                            <span className="text-sm font-medium text-navy">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Who It's For */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-teal-500/5 border border-teal-500/10">
                                    <GlobeAltIcon className="h-4 w-4 text-teal-600" />
                                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Who It&apos;s For</span>
                                </div>
                                <h2 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    Is SEO Right for <span className="text-teal-600">Your Business?</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    SEO is ideal for businesses ready to invest in long-term organic visibility instead of relying exclusively on paid channels.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {["E-commerce brands tired of rising ad costs", "SaaS platforms wanting organic user acquisition", "Service businesses targeting local & national reach", "Brands ready to build lasting digital authority"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-teal-500/10 shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all">
                                            <CheckCircleIcon className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                            <span className="text-sm font-medium text-navy">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== IMMERSIVE CTA ====== */}
            <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #021a0e 0%, #0a2e1c 40%, #0d3b2a 70%, #021a0e 100%)' }}>
                <div className="absolute inset-0 z-0">
                    <Image src="/images/seo_hero_bg.png" alt="SEO Dashboard" fill className="object-cover opacity-20 mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021a0e]/80 via-transparent to-[#021a0e]/60" />
                </div>
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to rank <span className="italic text-emerald-400">higher?</span>
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Get a free technical audit and discover your SEO opportunities. We&apos;ll show you exactly where you&apos;re losing traffic — and how to win it back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="primary" className="!bg-emerald-500 hover:!bg-emerald-600 text-lg px-10 py-4 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:scale-105 transition-all">
                                Schedule Your SEO Strategy Call
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
