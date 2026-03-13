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
            {/* ====== CREATIVE HERO (SECONDARY YELLOW) ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-secondary selection:bg-dark selection:text-white">
                {/* Harsh diagonal split background */}
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[50%] h-full bg-dark transform skew-x-12 translate-x-32 hidden lg:block opacity-[0.03]" />

                {/* Massive abstract typography overlay */}
                <div className="absolute top-[10%] left-[-5%] overflow-hidden pointer-events-none opacity-5">
                    <span className="text-[25rem] font-black tracking-tighter text-dark whitespace-nowrap leading-none mix-blend-multiply">
                        ATTITUDE.
                    </span>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-4xl relative z-20">
                        <FadeIn>
                            <span className="inline-block py-2 px-4 rounded-none bg-dark text-white uppercase text-sm font-black mb-8 tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                                The Masterminds
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="We Don't Follow Benchmarks. We Set Them."
                            className="text-5xl font-black text-dark sm:text-7xl leading-[1.05] tracking-tighter"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-xl sm:text-2xl text-dark/80 font-bold max-w-2xl border-l-8 border-dark pl-6">
                                We exist to help visionary brands cut through the noise with clarity, purpose, and strategies engineered to scale ruthlessly.
                            </p>
                            <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                                <Button href="#story" variant="primary" className="px-8 py-4 text-lg bg-dark text-white hover:bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                                    Our Methodology
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== OUR STORY (PRIMARY BLUE BLOCK) ====== */}
            <Section id="story" className="py-32 relative overflow-hidden bg-primary text-white selection:bg-secondary selection:text-dark">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.05] mix-blend-multiply pointer-events-none" />

                <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-white sm:text-6xl mb-6 tracking-tighter leading-none">
                                The <span className="text-dark italic">Philosophy</span> Behind the Growth.
                            </h2>
                            <div className="w-20 h-2 bg-secondary" />
                            <p className="text-xl text-primary-light font-medium leading-relaxed">
                                We don't believe in one-size-fits-all marketing or throwing budget at disconnected tactics. Every brand deserves a tailored strategy that reflects its unique vision, audience behavior, and stage of growth.
                            </p>
                            <p className="text-xl text-primary-light font-medium leading-relaxed">
                                Our approach blends high-end creativity with ruthless performance analytics. We ensure every campaign has a clear objective, a measurable impact, and contributes to the larger growth engine.
                            </p>
                            
                            <div className="bg-dark p-8 rounded-none border-l-8 border-secondary mt-10 shadow-2xl relative">
                                {/* Decorative quote mark */}
                                <div className="absolute -top-6 -left-4 text-7xl text-secondary opacity-50 font-serif">"</div>
                                <p className="text-2xl text-white leading-relaxed font-black relative z-10">
                                    We don't just market brands — we build the exact systems that grow them.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-12">
                                <div className="p-8 rounded-none bg-white text-dark shadow-[4px_4px_0px_0px_rgba(253,214,59,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(253,214,59,1)] transition-all">
                                    <StatsCounter value={150} suffix="+" label="Clients Scaled" />
                                </div>
                                <div className="p-8 rounded-none bg-secondary text-dark shadow-[4px_4px_0px_0px_rgba(40,39,57,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(40,39,57,1)] transition-all">
                                    <StatsCounter value={3} suffix="x" label="Avg. ROI Increase" />
                                </div>
                                <div className="p-8 rounded-none bg-dark text-white shadow-[4px_4px_0px_0px_rgba(253,214,59,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(253,214,59,1)] transition-all">
                                    <StatsCounter value={98} suffix="%" label="Client Retention" />
                                </div>
                                <div className="p-8 rounded-none bg-white text-dark shadow-[4px_4px_0px_0px_rgba(40,39,57,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(40,39,57,1)] transition-all">
                                    <StatsCounter value={24} suffix="/7" label="Dedicated Support" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center p-12">
                        {/* Huge yellow blob graphic taking up the right side */}
                        <div className="absolute inset-0 bg-secondary rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[blob_15s_infinite_alternate] mix-blend-multiply opacity-80" />
                        <div className="relative z-10 border-8 border-white p-2 bg-white transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                            <BlobImage
                                src="/images/about_mission_lively.png"
                                alt="Abstract 3D Strategy Concept"
                            />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* ====== CORE VALUES (SOLID WHITE) ====== */}
            <section className="relative py-32 bg-white overflow-hidden selection:bg-primary selection:text-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-40 mix-blend-overlay" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-5xl font-black text-dark sm:text-7xl tracking-tighter mb-6 relative inline-block">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8b5cf6] italic">Mandates</span>
                        {/* Decorative underline */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-dark" />
                    </h2>
                    <p className="mt-10 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        We don't do "business as usual." These mandates dictate how we build strategies, analyze data, and dominate markets.
                    </p>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <FadeIn key={v.title} delay={i * 0.1}>
                                <div className="group relative h-full bg-soft-gray border-4 border-transparent hover:border-dark p-8 transition-all duration-300 flex flex-col items-start hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                                    <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-none bg-dark text-white group-hover:scale-110 group-hover:bg-primary transition-all shadow-[6px_6px_0px_0px_rgba(253,214,59,1)]">
                                        {v.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-dark mb-4 tracking-tight leading-tight uppercase">{v.title}</h3>
                                    <div className="w-12 h-1 bg-dark opacity-20 mb-4 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                                    <p className="text-base text-gray-600 font-medium leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== IDEAL CLIENTS (SOLID DARK) ====== */}
            <Section variant="dark" className="py-32 relative overflow-hidden bg-dark text-white selection:bg-secondary selection:text-dark">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
                
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-primary rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20 blur-3xl mix-blend-screen pointer-events-none" />

                <div className="grid items-center gap-16 lg:grid-cols-2 relative z-10">
                    <FadeIn className="order-2 lg:order-1 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
                        <div className="relative border-8 border-primary p-4 bg-dark transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                            <BlobImage
                                src="/images/about_partner_v2.png"
                                alt="Partnership Concept Illustration"
                                className="grayscale contrast-125"
                            />
                            {/* Accent tape */}
                            <div className="absolute -top-6 -right-6 w-24 h-8 bg-secondary transform rotate-12" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-8 bg-secondary transform -rotate-6" />
                        </div>
                    </FadeIn>

                    <div className="order-1 lg:order-2 space-y-10">
                        <FadeIn>
                            <span className="inline-block py-2 px-4 bg-white/10 text-secondary uppercase text-sm font-black mb-6 tracking-widest backdrop-blur-sm">
                                The Inner Circle
                            </span>
                            <h2 className="text-5xl font-black text-white sm:text-6xl mb-6 leading-none tracking-tighter">
                                Who We Build <br/><span className="italic text-primary">Empires</span> With.
                            </h2>
                            <p className="text-xl text-gray-400 font-medium leading-relaxed mb-8 border-l-4 border-secondary pl-6">
                                We don't take every check that comes our way. We partner with ambitious, ruthless operators who want to dominate their category, not just exist in it.
                            </p>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                "Disruptive Start-ups",
                                "E-commerce Monopolies",
                                "High-Ticket Services",
                                "Visionary Founders",
                            ].map((client, i) => (
                                <FadeIn key={client} delay={i * 0.1}>
                                    <div className="flex items-center gap-4 py-4 border-b border-white/10 group">
                                        <div className="w-8 h-8 rounded-none bg-primary flex items-center justify-center group-hover:bg-secondary group-hover:rotate-45 transition-all">
                                            <div className="w-3 h-3 bg-dark" />
                                        </div>
                                        <p className="text-lg font-bold text-white tracking-wide">{client}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.4} className="pt-4">
                            <Button href="/contact" variant="primary" className="bg-secondary text-dark hover:bg-white text-lg px-8 py-4 font-black shadow-[0_0_20px_rgba(253,214,59,0.3)]">
                                Apply For Partnership
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* ====== AGENCY CTA (SECONDARY YELLOW) ====== */}
            <section className="relative py-32 overflow-hidden bg-secondary selection:bg-dark selection:text-white text-dark">
                {/* Harsh grid background */}
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />

                {/* Massive abstract shape */}
                <motion.div
                    className="absolute -bottom-[50%] right-[-10%] w-[900px] h-[900px] bg-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-30 mix-blend-screen pointer-events-none"
                    animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 0.9, 1.05, 1] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-5xl font-black text-dark sm:text-7xl tracking-tighter mb-8 leading-none">
                            Ready To Burn The <span className="italic text-primary">Playbook?</span>
                        </h2>
                        <p className="text-2xl text-dark/80 max-w-3xl mx-auto mb-12 font-bold leading-relaxed">
                            Stop guessing. Put an entire team of senior strategists on your brand and watch your revenue compound.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button href="/contact" variant="primary" className="bg-dark text-white hover:bg-primary text-xl px-12 py-5 font-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.4)]">
                                Infiltrate The Market
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
