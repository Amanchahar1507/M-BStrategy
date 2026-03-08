"use client";

import Image from "next/image";
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
            {/* ====== IMMERSIVE HERO ====== */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0f05 0%, #2a1810 25%, #1c1230 50%, #0d1b2e 75%, #0a1628 100%)' }}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services_hero_lively.png"
                        alt="Dynamic marketing agency at golden hour"
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f05]/70 via-transparent to-[#0a1628]/90" />
                </div>

                {/* Floating ambient orbs — warm amber + blue */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(251, 146, 60, 0.35) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[10%] left-[40%] w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)" }} />
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

            {/* ====== SECTION HEADING ====== */}
            <section id="services" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #0a1628 100%)' }}>
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-electric/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
                            Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-light to-cyan-400">Performance</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            All services are delivered using a strategy-first approach. We don&apos;t
                            jump straight into execution — we first understand your brand,
                            audience behaviour, competitors, and growth objectives.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 1 - EMAIL MARKETING (Blue gradient) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 30%, #eff6ff 60%, #f8fafc 100%)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -mt-32 -mr-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -mb-32 -ml-32" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[400px] md:h-[520px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/services_pillar_email.png"
                                    alt="Email Marketing Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <p className="text-white text-sm font-medium drop-shadow-md">Automated sequences that nurture leads and drive repeat revenue 24/7</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                    <EnvelopeIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    Email Marketing <span className="text-blue-600">That Converts</span>
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Build lasting relationships, recover abandoned carts, and drive predictable repeat revenue with highly-segmented automated sequences tailored to every stage of the customer journey.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-semibold group/link cursor-pointer mt-4">
                                    <a href="/services/email-marketing" className="hover:underline">Explore Email Marketing</a>
                                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 2 - SEO (Green gradient) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 30%, #f0fdfa 60%, #f8fafc 100%)' }}>
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mt-32 -ml-32" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] -mb-32 -mr-32" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                    <MagnifyingGlassIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    SEO Built for <span className="text-emerald-600">Long-Term Growth</span>
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Dominate search results, attract highly-qualified organic traffic, and establish your brand as an authority in your industry with sustainable SEO strategies that compound over time.
                                </p>
                                <div className="flex items-center gap-2 text-emerald-600 font-semibold group/link cursor-pointer mt-4">
                                    <a href="/services/seo-optimisation" className="hover:underline">Explore SEO Services</a>
                                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <div className="order-1 md:order-2 relative h-[400px] md:h-[520px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/services_pillar_seo.png"
                                    alt="SEO Optimisation Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#021a0e]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <p className="text-white text-sm font-medium drop-shadow-md">Organic rankings that compound month-over-month for lasting growth</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== PILLAR 3 - SOCIAL MEDIA (Purple gradient) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 30%, #fdf2f8 60%, #f8fafc 100%)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -mt-32 -mr-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] -mb-32 -ml-32" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[400px] md:h-[520px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/services_pillar_social.png"
                                    alt="Social Media Visualization"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <p className="text-white text-sm font-medium drop-shadow-md">Scroll-stopping content that builds community and drives real results</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <MegaphoneIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-navy sm:text-4xl leading-tight">
                                    Social Media That <span className="text-purple-600">Builds Brands</span>
                                </h3>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Scroll-stopping creatives and consistent community management designed to grow awareness, engagement, and trust across every major platform.
                                </p>
                                <div className="flex items-center gap-2 text-purple-600 font-semibold group/link cursor-pointer mt-4">
                                    <a href="/services/social-media" className="hover:underline">Explore Social Media Services</a>
                                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ====== WHY WORK WITH US (DARK GLASSMORPHISM) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 30%, #1a1145 60%, #0a1628 100%)' }}>
                <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
                    <Image
                        src="/images/services_hero_lively.png"
                        alt="Background Texture"
                        fill
                        className="object-cover rotate-180 scale-125 grayscale"
                    />
                </div>
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-electric/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Sticky Left Content */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <FadeIn>
                                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6 leading-tight">
                                    Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-light to-cyan-400">M&B Strategy?</span>
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    We aren&apos;t just order-takers. We act as an extension of your team, bringing senior-level strategy and relentless execution to every single campaign.
                                </p>

                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="text-5xl font-bold text-white mb-2">150+</div>
                                    <div className="text-electric-light font-medium uppercase tracking-wide text-sm mb-4">Brands Scaled</div>
                                    <p className="text-sm text-gray-400">
                                        From ambitious startups to global enterprises, we&apos;ve delivered consistent, record-breaking growth.
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
                                    glow: "bg-blue-500/10",
                                },
                                {
                                    icon: <LightBulbIcon className="w-6 h-6 text-amber-400" />,
                                    title: "Data-Driven Decisions",
                                    desc: "Choices backed by analytics, rigorous A/B testing, and hard performance benchmarks.",
                                    glow: "bg-amber-500/10",
                                },
                                {
                                    icon: <ChartBarIcon className="w-6 h-6 text-emerald-400" />,
                                    title: "Transparent Reporting",
                                    desc: "Real-time, live dashboards and monthly deep-dives so you never have to guess your ROI.",
                                    glow: "bg-emerald-500/10",
                                },
                                {
                                    icon: <UsersIcon className="w-6 h-6 text-purple-400" />,
                                    title: "Dedicated Experts",
                                    desc: "No junior hand-offs. Senior strategists work directly on your account from day one.",
                                    glow: "bg-purple-500/10",
                                }
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.1}>
                                    <div className="group h-full rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-electric/20 transition-colors" />
                                        <div className={`w-14 h-14 rounded-2xl ${item.glow} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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
            <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a1145 70%, #0a1628 100%)' }}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services_cta_bg.png"
                        alt="Futuristic Marketing Workspace"
                        fill
                        className="object-cover opacity-30 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#0a1628]/60" />
                </div>

                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-electric/15 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to accelerate your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-electric-light to-cyan-400">trajectory?</span>
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Stop wasting budget on disconnected tactics. Let&apos;s map out a holistic growth system that turns clicks into loyal customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="primary" className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:scale-105 transition-all">
                                Book Your Free Strategy Session
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-white/60 font-medium">
                            No commitment. Just a 30-minute roadmap to growth.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
