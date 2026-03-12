"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlobImage from "@/components/BlobImage";
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
            {/* ====== CORPORATE HERO ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about_hero_v4.png"
                        alt="M&B Strategy Agency Office"
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
                                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                About M&B Strategy
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Marketing Systems Built for Compounding Growth"
                            className="text-4xl font-extrabold text-dark sm:text-5xl leading-[1.1] tracking-tight"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                                We exist to help visionary brands cut through the noise with clarity, purpose, and strategies engineered to scale sustainably.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button href="#story" variant="primary" className="shadow-[0_4px_14px_0_rgba(79,87,223,0.39)]">
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
                            <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl mb-6">
                                The <span className="gradient-text">Philosophy</span> Behind the Growth
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We don&apos;t believe in one-size-fits-all marketing or throwing budget at disconnected tactics. Every brand deserves a tailored strategy that reflects its unique vision, audience behavior, and stage of growth.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Our approach blends high-end creativity with ruthless performance analytics. We ensure every campaign has a clear objective, a measurable impact, and contributes to the larger growth engine.
                            </p>
                            <div className="pl-6 border-l-4 border-primary my-8 py-2">
                                <p className="text-xl text-dark leading-relaxed font-bold italic">
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

                    <FadeIn delay={0.2} className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center">
                        <BlobImage
                            src="/images/about_mission_lively.png"
                            alt="Abstract 3D Strategy Concept"
                        />
                    </FadeIn>
                </div>
            </Section>

            {/* ====== CORE VALUES ====== */}
            <section className="relative py-28 bg-soft-gray overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
                    <SectionHeading
                        title="The Principles That Drive Us"
                        subtitle=""
                        light={false}
                    />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto -mt-4">
                        We hold ourselves to a standard of excellence. These core values dictate how we build strategies, analyze data, and communicate with partners.
                    </p>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <FadeIn key={v.title} delay={i * 0.1}>
                                <div className="group relative h-full rounded-3xl bg-white border border-gray-100 p-8 hover:bg-gray-50 transition-all duration-300 text-center flex flex-col items-center shadow-lg shadow-gray-200/50 hover:-translate-y-1">
                                    <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform shadow-sm">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3 tracking-wide">{v.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
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
                    <FadeIn className="order-2 lg:order-1 relative h-[500px] w-full flex items-center justify-center">
                        <BlobImage
                            src="/images/about_partner_v2.png"
                            alt="Partnership Concept Illustration"
                        />
                    </FadeIn>

                    <div className="order-1 lg:order-2 space-y-8">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl mb-6 leading-tight">
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
                                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-soft-gray hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all group">
                                        <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors group-hover:scale-150" />
                                        <p className="text-sm font-bold text-dark">{client}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.4}>
                            <Button href="/contact" variant="outline" className="mt-4 border-gray-300 text-dark hover:border-primary hover:text-primary hover:bg-primary/5">
                                See If We're a Good Fit
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* ====== CORPORATE CTA ====== */}
            <section className="relative py-32 overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to partner with a team that <span className="italic text-secondary">delivers?</span>
                        </h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Stop guessing. Let&apos;s discuss how M&B Strategy can build the foundation to aggressively scale your presence and revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="outline" className="text-lg px-10 py-4 border-white/20 text-white hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1">
                                Start Your Journey
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
