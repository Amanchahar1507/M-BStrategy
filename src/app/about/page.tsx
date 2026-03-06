"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    EyeIcon,
    HeartIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

const values = [
    {
        icon: <EyeIcon className="h-6 w-6" />,
        title: "Strategy First",
        desc: "Every decision is grounded in research, data, and a deep understanding of your business goals.",
    },
    {
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        title: "Radical Transparency",
        desc: "No smoke and mirrors. You see every metric, every test, and every result — good or bad.",
    },
    {
        icon: <HeartIcon className="h-6 w-6" />,
        title: "Partnership Mindset",
        desc: "We don't act like vendors. We embed ourselves in your team and care about your success.",
    },
    {
        icon: <SparklesIcon className="h-6 w-6" />,
        title: "Relentless Improvement",
        desc: "Markets change. We stay ahead through constant learning, testing, and innovation.",
    },
];

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== IMMERSIVE HERO ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 bg-navy overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about_hero_v4.png"
                        alt="M&B Strategy Agency Office"
                        fill
                        className="object-cover opacity-60 mix-blend-screen scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/50 to-navy" />
                    <div className="absolute inset-0 bg-navy/80" />
                </div>

                {/* Ambient glowing orbs */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full animate-float-slow opacity-30" style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full animate-float-medium opacity-20" style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-electric/10 border border-electric/20 text-electric-light text-sm font-semibold mb-6 tracking-wide uppercase shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                <span className="w-2 h-2 rounded-full bg-electric-light animate-ping" />
                                About M&B Strategy
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Marketing Systems Built for Compounding Growth"
                            className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
                                We exist to help visionary brands cut through the noise with clarity, purpose, and strategies engineered to scale sustainably.
                            </p>
                            <div className="mt-10">
                                <Button href="#story" variant="primary" className="shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                                    Discover Our Story
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== OUR STORY (Dynamic Image Layout) ====== */}
            <Section id="story" variant="white" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />

                <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10">
                    <FadeIn>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl mb-6">
                                The <span className="gradient-text">Philosophy</span> Behind the Growth
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We don&apos;t believe in one-size-fits-all marketing or throwing budget at disconnected tactics. Every brand deserves a tailored strategy that reflects its unique vision, audience behavior, and stage of growth.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Our approach blends high-end creativity with ruthless performance analytics. We ensure every campaign has a clear objective, a measurable impact, and contributes to the larger growth engine.
                            </p>
                            <div className="pl-6 border-l-4 border-electric my-8 py-2">
                                <p className="text-xl text-navy leading-relaxed font-bold italic">
                                    &ldquo;We don&apos;t just market brands — we build the very systems that grow them.&rdquo;
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-10">
                                <div className="p-6 rounded-2xl bg-soft-gray border border-gray-100 shadow-sm">
                                    <StatsCounter value={150} suffix="+" label="Clients Scaled" />
                                </div>
                                <div className="p-6 rounded-2xl bg-soft-gray border border-gray-100 shadow-sm">
                                    <StatsCounter value={3} suffix="x" label="Avg. ROI Increase" />
                                </div>
                                <div className="p-6 rounded-2xl bg-soft-gray border border-gray-100 shadow-sm">
                                    <StatsCounter value={98} suffix="%" label="Client Retention" />
                                </div>
                                <div className="p-6 rounded-2xl bg-soft-gray border border-gray-100 shadow-sm">
                                    <StatsCounter value={24} suffix="/7" label="Dedicated Support" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="relative h-full min-h-[500px] lg:min-h-[700px]">
                        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/about_mission_lively.png"
                                alt="Abstract 3D Strategy Concept"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Glassmorphism badge overlay */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                                    Bridging the gap between brilliant ideas and measurable market dominance.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* ====== CORE VALUES (Dark Glassmorphism) ====== */}
            <section className="relative py-28 bg-navy overflow-hidden">
                {/* Background Texture & Ambient Lights */}
                <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
                    <Image
                        src="/images/services_hero_lively.png"
                        alt="Texture"
                        fill
                        className="object-cover rotate-180 scale-125 grayscale"
                    />
                </div>
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-electric/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                    <SectionHeading
                        title="The Principles That Drive Us"
                        subtitle=""
                        light={true}
                    />
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto -mt-4">
                        We hold ourselves to a standard of excellence. These core values dictate how we build strategies, analyze data, and communicate with partners.
                    </p>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <FadeIn key={v.title} delay={i * 0.1}>
                                <div className="group relative h-full rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl overflow-hidden text-center flex flex-col items-center shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                                    {/* Hover gradient flare */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-electric/30 transition-colors" />

                                    <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/20 to-transparent border border-electric/30 text-electric-light group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{v.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        {v.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== IDEAL CLIENTS ====== */}
            <Section variant="white" className="py-24 relative overflow-hidden">
                <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10">
                    <FadeIn className="order-2 lg:order-1 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
                        <Image
                            src="/images/about_partner_v2.png"
                            alt="Partnership Concept Illustration"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply" />
                    </FadeIn>

                    <div className="order-1 lg:order-2 space-y-8">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl mb-6 leading-tight">
                                Who We Partner With
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                We don't work with just anyone. We partner with ambitious, forward-thinking brands that value clarity, consistency, and compounding long-term growth.
                            </p>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Start-ups & Fast Scale-ups",
                                "SMEs & E-commerce Brands",
                                "High-Ticket Service Businesses",
                                "Personal Brands & Founders",
                            ].map((client, i) => (
                                <FadeIn key={client} delay={i * 0.1}>
                                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-soft-gray hover:bg-white hover:shadow-lg hover:border-electric/20 transition-all group">
                                        <div className="w-2 h-2 rounded-full bg-electric/50 group-hover:bg-electric transition-colors group-hover:scale-150" />
                                        <p className="text-sm font-bold text-navy">{client}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.4}>
                            <Button href="/contact" variant="outline" className="mt-4 border-gray-300 text-navy hover:border-electric hover:text-electric hover:bg-electric/5">
                                See If We're a Good Fit
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* ====== IMMERSIVE CTA ====== */}
            <section className="relative py-32 overflow-hidden bg-electric">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] mix-blend-overlay" />
                    <div className="w-full h-full bg-gradient-to-r from-electric-dark to-electric" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to partner with a team that <span className="text-electric-light italic">delivers?</span>
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                            Stop guessing. Let's discuss how M&B Strategy can build the foundation to aggressively scale your presence and revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="outline" className="bg-white border-white text-electric font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-white/90">
                                Start Your Journey
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
