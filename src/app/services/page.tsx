"use client";

import { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    EnvelopeIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    ChartBarIcon,
    LightBulbIcon,
    UsersIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Note: Removing the static layout `metadata` export because this file is now marked with "use client" for `motion` and `TextGenerateEffect`.
// We should ideally move metadata to `layout.tsx` for this route, or handle it via a separate server layout file later. 

export default function ServicesPage() {
    return (
        <>
            {/* ====== IMMERSIVE HERO ====== */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-navy">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services_hero_lively.png"
                        alt="Dynamic tech marketing agency office"
                        fill
                        className="object-cover opacity-60 mix-blend-screen scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy" />
                    <div className="absolute inset-0 bg-navy/80" />
                </div>

                {/* Floating ambient orbs */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
                    <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full animate-float-slow opacity-30" style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full animate-float-medium opacity-20" style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-block py-1.5 px-3 rounded-full bg-electric/10 border border-electric/20 text-electric-light text-sm font-semibold mb-6 tracking-wide uppercase">
                                Our Masterplan
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Growth Engines Engineered for Scale"
                            className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
                                We focus on three essential growth pillars that every modern brand
                                needs to outpace the competition. Strategy first. Execution second. Results always.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                                <Button href="#services" variant="primary" className="shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    Explore Our Services
                                </Button>
                                <Button href="/contact" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                                    Book a Consultation
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== CORE SERVICES GRID ====== */}
            <Section id="services" variant="white" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />

                <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl mb-6">
                        Pillars of <span className="gradient-text">Performance</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        All services are delivered using a strategy-first approach. We don&apos;t
                        jump straight into execution — we first understand your brand,
                        audience behaviour, competitors, and growth objectives.
                    </p>
                </div>

                <div className="flex flex-col gap-24 relative z-10 mt-12 max-w-6xl mx-auto px-4">
                    {/* Item 1 - Email */}
                    <FadeIn delay={0}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] md:h-[500px] w-full rounded-b-3xl md:rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/services_pillar_email.png"
                                    alt="Email Marketing Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric shadow-sm border border-electric/20">
                                    <EnvelopeIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    Email Marketing That Converts
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Build lasting relationships, recover abandoned carts, and drive predictable repeat revenue with highly-segmented automated sequences.
                                </p>
                                <Button href="/services/email-marketing" variant="outline" className="mt-4 border-gray-300 text-navy hover:border-electric hover:text-electric hover:bg-electric/5">
                                    Explore Email Marketing
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Item 2 - SEO */}
                    <FadeIn delay={0.1}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric shadow-sm border border-electric/20">
                                    <MagnifyingGlassIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    SEO Built for Long-Term Growth
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Dominate search results, attract highly-qualified organic traffic, and establish your brand as an authority in your industry.
                                </p>
                                <Button href="/services/seo-optimisation" variant="outline" className="mt-4 border-gray-300 text-navy hover:border-electric hover:text-electric hover:bg-electric/5">
                                    Explore SEO Services
                                </Button>
                            </div>
                            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] w-full rounded-b-3xl md:rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/services_pillar_seo.png"
                                    alt="SEO Optimisation Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Item 3 - Social */}
                    <FadeIn delay={0.2}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] md:h-[500px] w-full rounded-b-3xl md:rounded-3xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/services_pillar_social.png"
                                    alt="Social Media Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric shadow-sm border border-electric/20">
                                    <MegaphoneIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    Social Media That Builds Brands
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Scroll-stopping creatives and consistent community management designed to grow awareness, engagement, and trust.
                                </p>
                                <Button href="/services/social-media" variant="outline" className="mt-4 border-gray-300 text-navy hover:border-electric hover:text-electric hover:bg-electric/5">
                                    Explore Social Media Services
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* ====== WHY WORK WITH US (DARK GLASSMORPHISM) ====== */}
            <section className="relative py-28 bg-navy overflow-hidden border-y border-white/5">
                {/* Abstract background for depth */}
                <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none">
                    <Image
                        src="/images/services_hero_lively.png"
                        alt="Background Texture"
                        fill
                        className="object-cover rotate-180 scale-125"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Sticky Left Content */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <FadeIn>
                                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6 leading-tight">
                                    Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-light to-cyan-400">M&B Strategy?</span>
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    We aren't just order-takers. We act as an extension of your team, bringing senior-level strategy and relentless execution to every single campaign.
                                </p>

                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="text-5xl font-bold text-white mb-2">150+</div>
                                    <div className="text-electric-light font-medium uppercase tracking-wide text-sm mb-4">Brands Scaled</div>
                                    <p className="text-sm text-gray-400">
                                        From ambitious startups to global enterprises, we've delivered consistent, record-breaking growth.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Scrollable Right Grid */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <ChartBarIcon className="w-6 h-6 text-electric-light" />,
                                    title: "Strategy-First",
                                    desc: "Every campaign starts with deep research and a custom roadmap tailored to your audience.",
                                },
                                {
                                    icon: <LightBulbIcon className="w-6 h-6 text-cyan-400" />,
                                    title: "Data-Driven Decisions",
                                    desc: "Choices backed by analytics, rigorous A/B testing, and hard performance benchmarks.",
                                },
                                {
                                    icon: <ChartBarIcon className="w-6 h-6 text-purple-400" />,
                                    title: "Transparent Reporting",
                                    desc: "Real-time, live dashboards and monthly deep-dives so you never have to guess your ROI.",
                                },
                                {
                                    icon: <UsersIcon className="w-6 h-6 text-pink-400" />,
                                    title: "Dedicated Experts",
                                    desc: "No junior hand-offs. Senior strategists work directly on your account from day one.",
                                }
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.1}>
                                    <div className="group h-full rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-electric/20 transition-colors" />
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== IMMERSIVE CTA ====== */}
            <section className="relative py-32 overflow-hidden bg-electric">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] mix-blend-overlay" />
                    <div className="w-full h-full bg-gradient-to-r from-electric-dark to-electric" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to accelerate your <span className="text-electric-light">trajectory?</span>
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                            Stop wasting budget on disconnected tactics. Let's map out a holistic growth system that turns clicks into loyal customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="outline" className="bg-white border-white text-electric font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-white/90">
                                Book Your Free Strategy Session
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-white/70 font-medium">
                            No commitment. Just a 30-minute roadmap to growth.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
