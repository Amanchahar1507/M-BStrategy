"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlobImage from "@/components/BlobImage";
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
    ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ServicesPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== CREATIVE HERO ====== */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-dark selection:bg-secondary selection:text-dark">
                {/* Subtle texture over dark background */}
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
                
                {/* Abstract animated shapes */}
                <motion.div
                    className="absolute -top-[10%] right-[10%] w-[600px] h-[600px] bg-primary rounded-full opacity-30 blur-[120px] mix-blend-screen"
                    animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 0.8, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -bottom-[20%] left-[5%] w-[500px] h-[500px] bg-secondary rounded-full opacity-20 blur-[100px] mix-blend-screen"
                    animate={{ rotate: [360, 270, 180, 90, 0], scale: [1, 1.5, 0.9, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-4xl relative z-20">
                        <FadeIn>
                            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-white uppercase text-sm font-black mb-8 tracking-widest backdrop-blur-sm">
                                The Growth Arsenal
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Capabilities Built for Absolute Dominance."
                            className="text-5xl font-black text-white sm:text-7xl leading-[1.05] tracking-tighter"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-xl sm:text-2xl text-gray-400 font-medium max-w-2xl border-l-4 border-secondary pl-6">
                                We engineer bespoke digital ecosystems. Strategy first. Execution second. Compounding revenue always.
                            </p>
                            <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                                <Button href="#services" variant="primary" className="px-8 py-4 text-lg">
                                    Explore the Arsenal
                                </Button>
                                <Button href="/contact" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-dark">
                                    Demand Results
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Diagonal slash background break to next section */}
                <div className="absolute -bottom-[15%] left-0 w-[150%] h-32 bg-white transform rotate-2 z-0 origin-right" />
            </section>

            {/* ====== SECTION HEADING ====== */}
            <section id="services" className="relative py-24 overflow-hidden bg-white">
                <div className="relative z-10 text-left max-w-7xl mx-auto px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-4xl font-black text-dark sm:text-6xl mb-8 tracking-tighter">
                            The Pillars of <span className="text-primary italic">Performance.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium max-w-3xl">
                            We don't do "one size fits all." Every service is a spearhead designed to pierce a specific market inefficiency and capture outsized returns.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 1 - EMAIL MARKETING (Solid Primary Blue Block) ====== */}
            <section className="relative py-32 overflow-hidden bg-primary selection:bg-secondary selection:text-dark">
                {/* Background Typography */}
                <div className="absolute -top-10 -right-10 z-0 text-[20rem] font-black text-white/5 leading-none select-none tracking-tighter pointer-events-none">
                    01
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div className="relative group">
                                <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-700 border-8 border-white/20 hover:border-white shadow-2xl">
                                    <BlobImage
                                        src="/images/services_pillar_email.png"
                                        alt="Email Marketing Visualization"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-none bg-secondary text-dark shadow-xl">
                                    <EnvelopeIcon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-white sm:text-5xl leading-tight tracking-tighter mb-4">
                                        Email That <span className="text-secondary italic">Converts.</span>
                                    </h3>
                                    <div className="w-16 h-2 bg-secondary mb-6" />
                                    <p className="text-xl text-primary-light font-medium leading-relaxed">
                                        Turn your list into a highly-predictable revenue engine. We architect aggressive automated sequences and strategic sprint campaigns that drive extreme loyalty and repeat purchases.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Button href="/services/email-marketing" variant="secondary" className="px-8 py-4 text-lg">
                                        Command Your List
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 2 - SEO (Solid Secondary Yellow Block) ====== */}
            <section className="relative py-32 overflow-hidden bg-secondary selection:bg-dark selection:text-white">
                {/* Background Typography */}
                <div className="absolute -bottom-10 -left-10 z-0 text-[18rem] md:text-[25rem] font-black text-dark/5 leading-none select-none tracking-tighter pointer-events-none">
                    02
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-none bg-dark text-white shadow-xl">
                                    <MagnifyingGlassIcon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-dark sm:text-5xl leading-tight tracking-tighter mb-4">
                                        SEO Built for <span className="text-primary italic">Dominance.</span>
                                    </h3>
                                    <div className="w-16 h-2 bg-primary mb-6" />
                                    <p className="text-xl text-dark/80 font-medium leading-relaxed">
                                        Stop renting traffic from Google. We build compounding organic search monopolies that capture existing demand and position you as the undisputed industry authority.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Button href="/services/seo-optimisation" variant="primary" className="bg-dark text-white hover:bg-black px-8 py-4 text-lg">
                                        Capture Search
                                    </Button>
                                </div>
                            </div>
                            
                            <div className="order-1 lg:order-2 relative group">
                                <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-700 border-8 border-dark/20 hover:border-dark shadow-2xl">
                                    <BlobImage
                                        src="/images/services_pillar_seo.png"
                                        alt="SEO Optimisation Visualization"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 3 - SOCIAL MEDIA (Solid White Block) ====== */}
            <section className="relative py-32 overflow-hidden bg-white selection:bg-primary selection:text-white">
                {/* Background Typography */}
                <div className="absolute -top-10 -right-10 z-0 text-[18rem] md:text-[25rem] font-black text-dark/5 leading-none select-none tracking-tighter pointer-events-none">
                    03
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div className="relative group">
                                <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-700 border-8 border-gray-100 hover:border-dark shadow-2xl">
                                    <BlobImage
                                        src="/images/services_pillar_social.png"
                                        alt="Social Media Visualization"
                                    />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-none bg-primary text-white shadow-xl">
                                    <MegaphoneIcon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-dark sm:text-5xl leading-tight tracking-tighter mb-4">
                                        Social That <span className="text-primary italic">Commands.</span>
                                    </h3>
                                    <div className="w-16 h-2 bg-dark mb-6" />
                                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                        Scroll-stopping creative meets ruthless distribution. We architect omnichannel social strategies that hijack attention, shape narratives, and turn total strangers into cult-like brand advocates.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <Button href="/services/social-media" variant="outline" className="border-4 border-dark text-dark font-black hover:bg-dark hover:text-white px-8 py-4 text-lg">
                                        Command Attention
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== WHY WORK WITH US (SOLID PRIMARY BLUE) ====== */}
            <section className="relative py-32 overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 mix-blend-overlay" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Sticky Left Content */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <FadeIn>
                                <h2 className="text-5xl font-black sm:text-6xl mb-6 leading-none tracking-tighter">
                                    Not Your Average <span className="text-dark italic">Agency.</span>
                                </h2>
                                <p className="text-xl text-primary-light leading-relaxed mb-10 font-medium">
                                    We aren't order-takers. We are an extension of your growth team, bringing senior tactical execution to every single campaign.
                                </p>

                                <div className="p-10 rounded-none bg-dark border-b-8 border-secondary shadow-2xl">
                                    <div className="text-6xl font-black text-white mb-2">150+</div>
                                    <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Brands Scaled</div>
                                    <p className="text-base text-gray-400 font-medium">
                                        From aggressive disruptors to global enterprises, we've delivered consistent, record-breaking ROI.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Scrollable Right Grid */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <ChartBarIcon className="w-8 h-8 text-dark" />,
                                    title: "Strategy-First",
                                    desc: "Every campaign starts with deep forensic research. No guesswork.",
                                    bg: "bg-white",
                                    text: "text-dark"
                                },
                                {
                                    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
                                    title: "Data-Driven",
                                    desc: "Choices backed by hard numbers, relentless A/B testing, and revenue targets.",
                                    bg: "bg-secondary",
                                    text: "text-dark"
                                },
                                {
                                    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
                                    title: "Total Transparency",
                                    desc: "Live dashboards and brutal honesty. You never have to guess your ROI.",
                                    bg: "bg-dark",
                                    text: "text-white"
                                },
                                {
                                    icon: <UsersIcon className="w-8 h-8 text-dark" />,
                                    title: "Senior Talent Only",
                                    desc: "No juniors learning on your dime. Heavy hitters work your account from Day 1.",
                                    bg: "bg-white",
                                    text: "text-dark"
                                }
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.1}>
                                    <div className={`group h-full rounded-none border-l-4 border-t-4 border-transparent hover:border-white ${item.bg} ${item.text} p-10 transition-all duration-300 relative shadow-xl hover:-translate-y-2`}>
                                        <div className="mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-transform origin-left">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                                        <p className="opacity-80 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== CTA BLOCK (SOLID DARK) ====== */}
            <section className="relative py-32 overflow-hidden bg-dark">
                {/* Yellow Blob overlapping from bottom */}
                <motion.div
                    className="absolute -bottom-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 blur-3xl mix-blend-screen pointer-events-none"
                    animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 0.9, 1.05, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-5xl font-black text-white sm:text-7xl tracking-tighter mb-8 leading-none">
                            Tired of <span className="italic text-primary">Average?</span>
                        </h2>
                        <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Stop burning cash on generic tactics. Partner with the agency built for aggressive, compounding scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button href="/contact" variant="secondary" className="text-xl px-12 py-5 font-black hover:scale-105 transition-transform text-dark shadow-[0_0_30px_rgba(253,214,59,0.3)]">
                                Start Your Engine
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
